const o = async (i = {}, r) => {
  let n;
  if (r.startsWith("data:")) {
    const t = r.replace(/^data:.*?base64,/, "");
    let e;
    if (typeof Buffer == "function" && typeof Buffer.from == "function") e = Buffer.from(t, "base64");
    else if (typeof atob == "function") {
      const a = atob(t);
      e = new Uint8Array(a.length);
      for (let s = 0; s < a.length; s++) e[s] = a.charCodeAt(s);
    } else throw new Error("Cannot decode base64-encoded data URL");
    n = await WebAssembly.instantiate(e, i);
  } else {
    const t = await fetch(r), e = t.headers.get("Content-Type") || "";
    if ("instantiateStreaming" in WebAssembly && e.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(t, i);
    else {
      const a = await t.arrayBuffer();
      n = await WebAssembly.instantiate(a, i);
    }
  }
  return n.instance.exports;
};
export {
  o as _
};
