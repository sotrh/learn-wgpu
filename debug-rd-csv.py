#!/usr/bin/env python3
"""
Script to convert hex strings in a CSV file to floating point values.
Supports both IEEE 754 binary representation and direct hex-to-decimal conversion.
"""

import csv
import struct
import argparse
import sys
from pathlib import Path

def hex_to_float_ieee754(hex_str):
    """
    Convert hex string to float using IEEE 754 binary representation.
    Assumes the hex represents the binary encoding of a float.
    """
    try:
        # Remove '0x' prefix if present and ensure even length
        hex_str = hex_str.strip().replace('0x', '').replace('0X', '')
        if len(hex_str) % 2 != 0:
            hex_str = hex_str + '0'
        
        # Convert to bytes and then to float
        bytes_val = bytes.fromhex(hex_str)
        
        # Handle different byte lengths
        if len(bytes_val) == 4:
            return struct.unpack('>f', bytes_val)[0]  # 32-bit float
        elif len(bytes_val) == 8:
            return struct.unpack('>d', bytes_val)[0]  # 64-bit double
        else:
            # For other lengths, pad or truncate to 4 bytes
            if len(bytes_val) < 4:
                bytes_val = b'\x00' * (4 - len(bytes_val)) + bytes_val
            else:
                bytes_val = bytes_val[-4:]  # Take last 4 bytes
            return struct.unpack('>f', bytes_val)[0]
    except (ValueError, struct.error) as e:
        raise ValueError(f"Cannot convert '{hex_str}' to float: {e}")

def hex_to_float_direct(hex_str):
    """
    Convert hex string directly to decimal float.
    Treats hex as a regular number in base 16.
    """
    try:
        # Remove '0x' prefix if present
        hex_str = hex_str.replace('0x', '').replace('0X', '')
        return float(int(hex_str, 16))
    except ValueError as e:
        raise ValueError(f"Cannot convert '{hex_str}' to float: {e}")

def is_hex_string(value):
    """Check if a string appears to be a hexadecimal value."""
    if not isinstance(value, str):
        return False
    
    # Remove common hex prefixes
    clean_val = value.replace('0x', '').replace('0X', '').strip()
    
    # Check if all characters are valid hex digits
    try:
        int(clean_val, 16)
        return len(clean_val) > 0
    except ValueError:
        return False

def convert_csv(input_file, output_file=None, method='ieee754', columns=None):
    """
    Convert hex strings in CSV to floating point values.
    Ignores the first row and first column of data during conversion.
    
    Args:
        input_file: Path to input CSV file
        output_file: Path to output CSV file (default: input_file with _converted suffix)
        method: Conversion method ('ieee754' or 'direct')
        columns: List of column names/indices to convert (None = auto-detect)
    """
    input_path = Path(input_file)
    
    if not input_path.exists():
        raise FileNotFoundError(f"Input file '{input_file}' not found")
    
    if output_file is None:
        output_file = input_path.stem + '_converted' + input_path.suffix
    
    # Choose conversion function
    convert_func = hex_to_float_ieee754 if method == 'ieee754' else hex_to_float_direct
    
    converted_count = 0
    total_rows = 0
    
    with open(input_file, 'r', newline='', encoding='utf-8') as infile, \
         open(output_file, 'w', newline='', encoding='utf-8') as outfile:
        
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        
        # Read and write header (first row)
        try:
            header = next(reader)
            writer.writerow(header)
        except StopIteration:
            print("Error: CSV file is empty")
            return
        
        # Skip the first data row (second row overall)
        # try:
        #     first_data_row = next(reader)
        #     writer.writerow(first_data_row)  # Write it unchanged
        # except StopIteration:
        #     print("Warning: CSV file only contains header row")
        #     return
        
        # Determine columns to convert (excluding first column)
        if columns is None:
            # Auto-detect: convert all columns that contain hex strings (except first column)
            convert_columns = set()
        else:
            # Convert column names to indices (excluding first column)
            convert_columns = set()
            for col in columns:
                if isinstance(col, str):
                    try:
                        idx = header.index(col)
                        if idx > 0:  # Skip first column
                            convert_columns.add(idx)
                        else:
                            print(f"Warning: Column '{col}' is the first column and will be ignored")
                    except ValueError:
                        print(f"Warning: Column '{col}' not found in header")
                elif isinstance(col, int):
                    if 0 < col < len(header):  # Skip first column (index 0)
                        convert_columns.add(col)
                    elif col == 0:
                        print(f"Warning: Column index {col} is the first column and will be ignored")
                    else:
                        print(f"Warning: Column index {col} out of range")
        
        # Process remaining rows (starting from third row overall)
        for row_num, row in enumerate(reader, start=3):  # Start at 3 (header=1, skipped row=2)
            total_rows += 1
            new_row = []
            
            for col_idx, cell in enumerate(row):
                # Always skip first column (index 0)
                if col_idx == 0:
                    new_row.append(cell)
                    continue
                
                if columns is None:
                    # Auto-detect mode (excluding first column)
                    if is_hex_string(cell):
                        try:
                            converted_val = convert_func(cell)
                            new_row.append(str(converted_val))
                            converted_count += 1
                        except ValueError as e:
                            print(f"Warning: Row {row_num}, Column {col_idx + 1}: {e}")
                            new_row.append(cell)  # Keep original value
                    else:
                        new_row.append(cell)
                else:
                    # Specific columns mode (excluding first column)
                    if col_idx in convert_columns:
                        try:
                            converted_val = convert_func(cell)
                            new_row.append(str(converted_val))
                            converted_count += 1
                        except ValueError as e:
                            print(f"Warning: Row {row_num}, Column {col_idx + 1}: {e}")
                            new_row.append(cell)  # Keep original value
                    else:
                        new_row.append(cell)
            
            writer.writerow(new_row)
    
    print(f"Conversion complete!")
    print(f"Input file: {input_file}")
    print(f"Output file: {output_file}")
    print(f"Total data rows processed: {total_rows} (first row skipped)")
    print(f"Values converted: {converted_count} (first column ignored)")
    print(f"Conversion method: {method}")

def main():
    parser = argparse.ArgumentParser(
        description="Convert hex strings in CSV files to floating point values",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python hex_converter.py input.csv
  python hex_converter.py input.csv -o output.csv -m direct
  python hex_converter.py input.csv -c "hex_column1,hex_column2"
  python hex_converter.py input.csv -c "0,2,4"  # Convert columns by index
        """
    )
    
    parser.add_argument('input_file', help='Input CSV file path')
    parser.add_argument('-o', '--output', help='Output CSV file path')
    parser.add_argument('-m', '--method', choices=['ieee754', 'direct'], 
                       default='ieee754', help='Conversion method (default: ieee754)')
    parser.add_argument('-c', '--columns', 
                       help='Comma-separated list of column names or indices to convert')
    
    args = parser.parse_args()
    
    # Parse columns argument
    columns = None
    if args.columns:
        columns = []
        for col in args.columns.split(','):
            col = col.strip()
            # Try to convert to int (column index)
            try:
                columns.append(int(col))
            except ValueError:
                # Keep as string (column name)
                columns.append(col)
    
    try:
        convert_csv(args.input_file, args.output, args.method, columns)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()