import { _ as T } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let rt;
let __tla = (async () => {
  const q = "/learn-wgpu/assets/demo_bg-Dy07scHd.wasm";
  rt = function() {
    o.run_web();
  };
  function R(e) {
    const _ = n(e).Window;
    return c(_);
  }
  function F(e, _) {
    const t = C(n(_)), r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function j(e) {
    return typeof n(e) == "function";
  }
  function K(e) {
    return n(e) === void 0;
  }
  function P(e, _) {
    throw new Error(a(e, _));
  }
  function D(e) {
    n(e)._wbg_cb_unref();
  }
  function B(e) {
    n(e).abort();
  }
  function z(e) {
    const _ = n(e).activeElement;
    return w(_) ? 0 : c(_);
  }
  function U() {
    return f(function(e, _, t, r) {
      n(e).addEventListener(a(_, t), n(r));
    }, arguments);
  }
  function W() {
    return f(function(e, _) {
      n(e).addListener(n(_));
    }, arguments);
  }
  function $(e) {
    return n(e).altKey;
  }
  function X(e) {
    return n(e).altKey;
  }
  function Y(e, _, t) {
    const r = n(e).animate(n(_), n(t));
    return c(r);
  }
  function V() {
    return f(function(e, _) {
      const t = n(e).appendChild(n(_));
      return c(t);
    }, arguments);
  }
  function N(e) {
    return n(e).blockSize;
  }
  function G(e) {
    const _ = n(e).body;
    return w(_) ? 0 : c(_);
  }
  function H(e, _) {
    const t = n(_).brand, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function J(e) {
    const _ = n(e).brands;
    return c(_);
  }
  function Q(e) {
    return n(e).button;
  }
  function Z(e) {
    return n(e).buttons;
  }
  function ee() {
    return f(function(e, _) {
      const t = n(e).call(n(_));
      return c(t);
    }, arguments);
  }
  function _e() {
    return f(function(e, _) {
      n(e).cancelAnimationFrame(_);
    }, arguments);
  }
  function ne(e, _) {
    n(e).cancelIdleCallback(_ >>> 0);
  }
  function te(e) {
    n(e).cancel();
  }
  function ce(e, _) {
    const t = n(e).catch(n(_));
    return c(t);
  }
  function re(e, _) {
    n(e).clearTimeout(_);
  }
  function be(e) {
    n(e).close();
  }
  function oe(e, _) {
    const t = n(_).code, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function fe(e, _) {
    return n(e).contains(n(_));
  }
  function ue(e) {
    const _ = n(e).contentRect;
    return c(_);
  }
  function se() {
    return f(function(e, _, t) {
      const r = n(e).createElement(a(_, t));
      return c(r);
    }, arguments);
  }
  function ae() {
    return f(function(e, _) {
      const t = URL.createObjectURL(n(_)), r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
      s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
    }, arguments);
  }
  function ie(e) {
    return n(e).ctrlKey;
  }
  function de(e) {
    return n(e).ctrlKey;
  }
  function ge(e) {
    console.debug(n(e));
  }
  function we(e) {
    return n(e).deltaMode;
  }
  function le(e) {
    return n(e).deltaX;
  }
  function me(e) {
    return n(e).deltaY;
  }
  function pe(e) {
    const _ = n(e).devicePixelContentBoxSize;
    return c(_);
  }
  function ye(e) {
    return n(e).devicePixelRatio;
  }
  function he(e) {
    n(e).disconnect();
  }
  function ve(e) {
    n(e).disconnect();
  }
  function xe(e) {
    const _ = n(e).document;
    return w(_) ? 0 : c(_);
  }
  function Ie(e, _) {
    let t, r;
    try {
      t = e, r = _, console.error(a(e, _));
    } finally {
      o.__wbindgen_export4(t, r, 1);
    }
  }
  function ke(e) {
    console.error(n(e));
  }
  function Ee(e, _) {
    console.error(n(e), n(_));
  }
  function Oe() {
    return f(function(e) {
      n(e).focus();
    }, arguments);
  }
  function Le(e) {
    const _ = n(e).fullscreenElement;
    return w(_) ? 0 : c(_);
  }
  function Se(e) {
    const _ = n(e).getCoalescedEvents;
    return c(_);
  }
  function Ce(e) {
    const _ = n(e).getCoalescedEvents();
    return c(_);
  }
  function Me() {
    return f(function(e, _) {
      const t = n(e).getComputedStyle(n(_));
      return w(t) ? 0 : c(t);
    }, arguments);
  }
  function Ae(e, _, t) {
    const r = n(e).getElementById(a(_, t));
    return w(r) ? 0 : c(r);
  }
  function Te(e, _) {
    const t = Object.getOwnPropertyDescriptor(n(e), n(_));
    return c(t);
  }
  function qe() {
    return f(function(e, _, t, r) {
      const b = n(_).getPropertyValue(a(t, r)), i = m(b, o.__wbindgen_export, o.__wbindgen_export2), u = g;
      s().setInt32(e + 4, u, true), s().setInt32(e + 0, i, true);
    }, arguments);
  }
  function Re(e, _) {
    const t = n(e)[_ >>> 0];
    return c(t);
  }
  function Fe(e) {
    return n(e).height;
  }
  function je(e) {
    console.info(n(e));
  }
  function Ke(e) {
    return n(e).inlineSize;
  }
  function Pe(e) {
    let _;
    try {
      _ = n(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function De(e) {
    return n(e).isIntersecting;
  }
  function Be(e, _) {
    return Object.is(n(e), n(_));
  }
  function ze(e, _) {
    const t = n(_).key, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function Ue(e) {
    return n(e).length;
  }
  function We(e) {
    return n(e).location;
  }
  function $e(e) {
    console.log(n(e));
  }
  function Xe() {
    return f(function(e, _, t) {
      const r = n(e).matchMedia(a(_, t));
      return w(r) ? 0 : c(r);
    }, arguments);
  }
  function Ye(e) {
    return n(e).matches;
  }
  function Ve(e, _) {
    const t = n(_).media, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function Ne(e) {
    return n(e).metaKey;
  }
  function Ge(e) {
    return n(e).metaKey;
  }
  function He(e) {
    return n(e).movementX;
  }
  function Je(e) {
    return n(e).movementY;
  }
  function Qe(e) {
    const _ = n(e).navigator;
    return c(_);
  }
  function Ze() {
    return f(function(e) {
      const _ = new ResizeObserver(n(e));
      return c(_);
    }, arguments);
  }
  function e_() {
    const e = new Object();
    return c(e);
  }
  function __() {
    return f(function(e, _) {
      const t = new Worker(a(e, _));
      return c(t);
    }, arguments);
  }
  function n_() {
    return f(function() {
      const e = new MessageChannel();
      return c(e);
    }, arguments);
  }
  function t_() {
    const e = new Error();
    return c(e);
  }
  function c_() {
    return f(function(e) {
      const _ = new IntersectionObserver(n(e));
      return c(_);
    }, arguments);
  }
  function r_() {
    return f(function() {
      const e = new AbortController();
      return c(e);
    }, arguments);
  }
  function b_(e, _) {
    const t = new Function(a(e, _));
    return c(t);
  }
  function o_() {
    return f(function(e, _) {
      const t = new Blob(n(e), n(_));
      return c(t);
    }, arguments);
  }
  function f_(e) {
    return n(e).now();
  }
  function u_(e, _, t) {
    n(e).observe(n(_), n(t));
  }
  function s_(e, _) {
    n(e).observe(n(_));
  }
  function a_(e, _) {
    n(e).observe(n(_));
  }
  function i_(e, _) {
    const t = Array.of(n(e), n(_));
    return c(t);
  }
  function d_(e) {
    const _ = Array.of(n(e));
    return c(_);
  }
  function g_(e) {
    return n(e).offsetX;
  }
  function w_(e) {
    return n(e).offsetY;
  }
  function l_(e) {
    const _ = n(e).performance;
    return c(_);
  }
  function m_(e) {
    return n(e).persisted;
  }
  function p_(e) {
    n(e).play();
  }
  function y_(e) {
    return n(e).pointerId;
  }
  function h_(e, _) {
    const t = n(_).pointerType, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function v_(e) {
    const _ = n(e).port1;
    return c(_);
  }
  function x_(e) {
    const _ = n(e).port2;
    return c(_);
  }
  function I_() {
    return f(function(e, _) {
      n(e).postMessage(n(_));
    }, arguments);
  }
  function k_() {
    return f(function(e, _, t) {
      n(e).postMessage(n(_), n(t));
    }, arguments);
  }
  function E_(e, _, t) {
    const r = n(e).postTask(n(_), n(t));
    return c(r);
  }
  function O_(e) {
    return n(e).pressure;
  }
  function L_(e) {
    n(e).preventDefault();
  }
  function S_() {
    const e = ResizeObserverEntry.prototype;
    return c(e);
  }
  function C_(e) {
    const _ = n(e).queueMicrotask;
    return c(_);
  }
  function M_(e) {
    queueMicrotask(n(e));
  }
  function A_(e, _) {
    n(e).queueMicrotask(n(_));
  }
  function T_() {
    return f(function(e, _, t, r) {
      n(e).removeEventListener(a(_, t), n(r));
    }, arguments);
  }
  function q_() {
    return f(function(e, _) {
      n(e).removeListener(n(_));
    }, arguments);
  }
  function R_() {
    return f(function(e, _, t, r) {
      const b = n(_).removeProperty(a(t, r)), i = m(b, o.__wbindgen_export, o.__wbindgen_export2), u = g;
      s().setInt32(e + 4, u, true), s().setInt32(e + 0, i, true);
    }, arguments);
  }
  function F_(e) {
    return n(e).repeat;
  }
  function j_() {
    return f(function(e, _) {
      return n(e).requestAnimationFrame(n(_));
    }, arguments);
  }
  function K_(e) {
    const _ = n(e).requestFullscreen;
    return c(_);
  }
  function P_(e) {
    const _ = n(e).requestFullscreen();
    return c(_);
  }
  function D_(e) {
    const _ = n(e).requestIdleCallback;
    return c(_);
  }
  function B_() {
    return f(function(e, _) {
      return n(e).requestIdleCallback(n(_));
    }, arguments);
  }
  function z_(e) {
    const _ = Promise.resolve(n(e));
    return c(_);
  }
  function U_() {
    return f(function(e, _) {
      URL.revokeObjectURL(a(e, _));
    }, arguments);
  }
  function W_(e) {
    const _ = n(e).scheduler;
    return c(_);
  }
  function $_(e) {
    const _ = n(e).scheduler;
    return c(_);
  }
  function X_() {
    return f(function(e, _, t, r, b) {
      n(e).setAttribute(a(_, t), a(r, b));
    }, arguments);
  }
  function Y_() {
    return f(function(e, _) {
      n(e).setPointerCapture(_);
    }, arguments);
  }
  function V_() {
    return f(function(e, _, t, r, b) {
      n(e).setProperty(a(_, t), a(r, b));
    }, arguments);
  }
  function N_() {
    return f(function(e, _) {
      return n(e).setTimeout(n(_));
    }, arguments);
  }
  function G_() {
    return f(function(e, _, t) {
      return n(e).setTimeout(n(_), t);
    }, arguments);
  }
  function H_() {
    return f(function(e, _, t) {
      return Reflect.set(n(e), n(_), n(t));
    }, arguments);
  }
  function J_(e, _) {
    n(e).box = Kn[_];
  }
  function Q_(e, _) {
    n(e).onmessage = n(_);
  }
  function Z_(e, _, t) {
    n(e).type = a(_, t);
  }
  function en(e) {
    return n(e).shiftKey;
  }
  function _n(e) {
    return n(e).shiftKey;
  }
  function nn(e) {
    const _ = n(e).signal;
    return c(_);
  }
  function tn(e, _) {
    const t = n(_).stack, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function cn(e) {
    n(e).start();
  }
  function rn() {
    const e = typeof global > "u" ? null : global;
    return w(e) ? 0 : c(e);
  }
  function bn() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return w(e) ? 0 : c(e);
  }
  function on() {
    const e = typeof self > "u" ? null : self;
    return w(e) ? 0 : c(e);
  }
  function fn() {
    const e = typeof window > "u" ? null : window;
    return w(e) ? 0 : c(e);
  }
  function un(e) {
    const _ = n(e).style;
    return c(_);
  }
  function sn(e, _) {
    const t = n(e).then(n(_));
    return c(t);
  }
  function an(e, _) {
    n(e).unobserve(n(_));
  }
  function dn(e) {
    const _ = n(e).userAgentData;
    return w(_) ? 0 : c(_);
  }
  function gn() {
    return f(function(e, _) {
      const t = n(_).userAgent, r = m(t, o.__wbindgen_export, o.__wbindgen_export2), b = g;
      s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
    }, arguments);
  }
  function wn(e) {
    const _ = n(e).visibilityState;
    return (Pn.indexOf(_) + 1 || 3) - 1;
  }
  function ln(e) {
    console.warn(n(e));
  }
  function mn(e) {
    const _ = n(e).webkitFullscreenElement;
    return w(_) ? 0 : c(_);
  }
  function pn(e) {
    n(e).webkitRequestFullscreen();
  }
  function yn(e) {
    return n(e).width;
  }
  function hn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, jn);
    return c(t);
  }
  function vn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function xn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function In(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function kn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function En(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function On(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function Ln(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, h);
    return c(t);
  }
  function Sn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_1055, Rn);
    return c(t);
  }
  function Cn(e, _) {
    const t = p(e, _, o.__wasm_bindgen_func_elem_2827, Fn);
    return c(t);
  }
  function Mn(e) {
    return c(e);
  }
  function An(e, _) {
    const t = a(e, _);
    return c(t);
  }
  function Tn(e) {
    const _ = n(e);
    return c(_);
  }
  function qn(e) {
    Bn(e);
  }
  function Rn(e, _) {
    o.__wasm_bindgen_func_elem_1388(e, _);
  }
  function h(e, _, t) {
    o.__wasm_bindgen_func_elem_1386(e, _, c(t));
  }
  function Fn(e, _, t) {
    o.__wasm_bindgen_func_elem_2828(e, _, c(t));
  }
  function jn(e, _, t, r) {
    o.__wasm_bindgen_func_elem_1394(e, _, c(t), c(r));
  }
  const Kn = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Pn = [
    "hidden",
    "visible"
  ];
  function c(e) {
    I === y.length && y.push(y.length + 1);
    const _ = I;
    return I = y[_], y[_] = e, _;
  }
  const M = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => e.dtor(e.a, e.b));
  function C(e) {
    const _ = typeof e;
    if (_ == "number" || _ == "boolean" || e == null) return `${e}`;
    if (_ == "string") return `"${e}"`;
    if (_ == "symbol") {
      const b = e.description;
      return b == null ? "Symbol" : `Symbol(${b})`;
    }
    if (_ == "function") {
      const b = e.name;
      return typeof b == "string" && b.length > 0 ? `Function(${b})` : "Function";
    }
    if (Array.isArray(e)) {
      const b = e.length;
      let i = "[";
      b > 0 && (i += C(e[0]));
      for (let u = 1; u < b; u++) i += ", " + C(e[u]);
      return i += "]", i;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (t && t.length > 1) r = t[1];
    else return toString.call(e);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
  }
  function Dn(e) {
    e < 132 || (y[e] = I, I = e);
  }
  let v = null;
  function s() {
    return (v === null || v.buffer.detached === true || v.buffer.detached === void 0 && v.buffer !== o.memory.buffer) && (v = new DataView(o.memory.buffer)), v;
  }
  function a(e, _) {
    return e = e >>> 0, Un(e, _);
  }
  let E = null;
  function O() {
    return (E === null || E.byteLength === 0) && (E = new Uint8Array(o.memory.buffer)), E;
  }
  function n(e) {
    return y[e];
  }
  function f(e, _) {
    try {
      return e.apply(this, _);
    } catch (t) {
      o.__wbindgen_export3(c(t));
    }
  }
  let y = new Array(128).fill(void 0);
  y.push(void 0, null, true, false);
  let I = y.length;
  function w(e) {
    return e == null;
  }
  function p(e, _, t, r) {
    const b = {
      a: e,
      b: _,
      cnt: 1,
      dtor: t
    }, i = (...u) => {
      b.cnt++;
      const l = b.a;
      b.a = 0;
      try {
        return r(l, b.b, ...u);
      } finally {
        b.a = l, i._wbg_cb_unref();
      }
    };
    return i._wbg_cb_unref = () => {
      --b.cnt === 0 && (b.dtor(b.a, b.b), b.a = 0, M.unregister(b));
    }, M.register(i, b, b), i;
  }
  function m(e, _, t) {
    if (t === void 0) {
      const l = k.encode(e), x = _(l.length, 1) >>> 0;
      return O().subarray(x, x + l.length).set(l), g = l.length, x;
    }
    let r = e.length, b = _(r, 1) >>> 0;
    const i = O();
    let u = 0;
    for (; u < r; u++) {
      const l = e.charCodeAt(u);
      if (l > 127) break;
      i[b + u] = l;
    }
    if (u !== r) {
      u !== 0 && (e = e.slice(u)), b = t(b, r, r = u + e.length * 3, 1) >>> 0;
      const l = O().subarray(b + u, b + r), x = k.encodeInto(e, l);
      u += x.written, b = t(b, r, u, 1) >>> 0;
    }
    return g = u, b;
  }
  function Bn(e) {
    const _ = n(e);
    return Dn(e), _;
  }
  let L = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  L.decode();
  const zn = 2146435072;
  let S = 0;
  function Un(e, _) {
    return S += _, S >= zn && (L = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), L.decode(), S = _), L.decode(O().subarray(e, e + _));
  }
  const k = new TextEncoder();
  "encodeInto" in k || (k.encodeInto = function(e, _) {
    const t = k.encode(e);
    return _.set(t), {
      read: e.length,
      written: t.length
    };
  });
  let g = 0, o;
  function Wn(e) {
    o = e;
  }
  URL = globalThis.URL;
  const d = await T({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: qn,
      __wbg_new_8a6f238a6ece86ea: t_,
      __wbg_stack_0ed75d68575b0f3c: tn,
      __wbg_error_7534b8e9a36f1ab4: Ie,
      __wbindgen_object_clone_ref: Tn,
      __wbg_requestFullscreen_86fc6cdb76000482: K_,
      __wbg_scheduler_5156bb61cc1cf589: $_,
      __wbg_getCoalescedEvents_21492912fd0145ec: Se,
      __wbg_requestIdleCallback_1b8d644ff564208f: D_,
      __wbg_offsetX_cb6a38e6f23cb4a6: g_,
      __wbg_offsetY_43e21941c5c1f8bf: w_,
      __wbg_cancel_09c394f0894744eb: te,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: mn,
      __wbg_requestFullscreen_9f0611438eb929cf: P_,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: pn,
      __wbg_scheduler_48482a9974eeacbd: W_,
      __wbg_postTask_41d93e93941e4a3d: E_,
      __wbg_userAgentData_f7b0e61c05c54315: dn,
      __wbg_brands_a1e7a2bce052128f: J,
      __wbg_brand_9562792cbb4735c3: H,
      __wbg_prototype_c28bca39c45aba9b: S_,
      __wbg_animate_6ec571f163cf6f8d: Y,
      __wbg_play_63bc12f42e16af91: p_,
      __wbg_Window_d1bf622f71ff0629: R,
      __wbg_instanceof_Window_ed49b2db8df90359: Pe,
      __wbg_matchMedia_91d4fc9729dc3c84: Xe,
      __wbg_queueMicrotask_885fd8605352e25d: A_,
      __wbg_devicePixelRatio_5c458affc89fc209: ye,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Me,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: ne,
      __wbg_requestIdleCallback_c9c643f8210d435b: B_,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: _e,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: j_,
      __wbg_clearTimeout_df03cf00269bc442: re,
      __wbg_setTimeout_681abd84926a4da3: N_,
      __wbg_setTimeout_eff32631ea138533: G_,
      __wbg_document_ee35a3d3ae34ef6c: xe,
      __wbg_navigator_43be698ba96fc088: Qe,
      __wbg_setAttribute_cc8e4c8a2a008508: X_,
      __wbg_setPointerCapture_420db6f6826eb74b: Y_,
      __wbg_activeElement_1554b6917654f8d6: z,
      __wbg_createElement_49f60fdcaae809c8: se,
      __wbg_visibilityState_43b7b74940e07d22: wn,
      __wbg_getElementById_e34377b79d7285f6: Ae,
      __wbg_fullscreenElement_25b445e2961e68ba: Le,
      __wbg_body_f67922363a220026: G,
      __wbg_focus_128ff465f65677cc: Oe,
      __wbg_style_0b7c9bd318f8b807: un,
      __wbg_movementX_ff6524e06bc35b6a: He,
      __wbg_movementY_4cec81d9850ad239: Je,
      __wbg_button_d86841d0a03adc44: Q,
      __wbg_altKey_8155c319c215e3aa: X,
      __wbg_buttons_a158a0cad3175f24: Z,
      __wbg_ctrlKey_96ff94f8b18636a3: de,
      __wbg_metaKey_374999c340f70626: Ne,
      __wbg_shiftKey_5558a3288542c985: en,
      __wbg_key_d41e8e825e6bb0e9: ze,
      __wbg_code_dee0dae4730408e1: oe,
      __wbg_repeat_375aae5c5c6a0258: F_,
      __wbg_altKey_73c1173ba53073d5: $,
      __wbg_ctrlKey_09a1b54d77dea92b: ie,
      __wbg_location_22bcb1a188a96eb1: We,
      __wbg_metaKey_67113fb40365d736: Ge,
      __wbg_shiftKey_564be91ec842bcc4: _n,
      __wbg_addListener_03e8162d7e03c823: W,
      __wbg_removeListener_e2a199028636dcf5: q_,
      __wbg_media_7bcde781569bca4c: Ve,
      __wbg_matches_4b5c22bd830f7bb3: Ye,
      __wbg_preventDefault_cdcfcd7e301b9702: L_,
      __wbg_userAgent_34463fd660ba4a2a: gn,
      __wbg_new_b949e7f56150a5d1: r_,
      __wbg_abort_2f0584e03e8e3950: B,
      __wbg_signal_d1285ecab4ebc5ad: nn,
      __wbg_blockSize_ef9a626745d7dfac: N,
      __wbg_inlineSize_3e4e7e8c813884fd: Ke,
      __wbg_contentRect_79b98e4d4f4728a4: ue,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: pe,
      __wbg_isIntersecting_6807d592d68e059e: De,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: o_,
      __wbg_disconnect_5202f399852258c0: ve,
      __wbg_observe_1ae37077cf10b11b: u_,
      __wbg_new_2e2be9617c4407d5: Ze,
      __wbg_observe_b9abc08d6d829e56: a_,
      __wbg_unobserve_b4eb8d945252124f: an,
      __wbg_set_type_148de20768639245: Z_,
      __wbg_setProperty_cbb25c4e74285b39: V_,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: R_,
      __wbg_getPropertyValue_d6911b2a1f9acba9: qe,
      __wbg_disconnect_0a2d26237dfc1e9e: he,
      __wbg_new_8c6e67a40cee1f83: c_,
      __wbg_observe_2a9d63459970a2c1: s_,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: U_,
      __wbg_createObjectURL_918185db6a10a0c8: ae,
      __wbg_deltaMode_a1d1df711e44cefc: we,
      __wbg_deltaX_f0ca9116db5f7bc1: le,
      __wbg_deltaY_eb94120160ac821c: me,
      __wbg_pointerId_466b1bdcaf2fe835: y_,
      __wbg_pointerType_ba53c6f18634a26d: h_,
      __wbg_getCoalescedEvents_8d19e426e1461e96: Ce,
      __wbg_pressure_f01a99684f7a6cf3: O_,
      __wbg_appendChild_dea38765a26d346d: V,
      __wbg_contains_1056459c33f961e8: fe,
      __wbg_new_6f0524fbfa300c47: n_,
      __wbg_port1_6251ddc5cf5c9287: v_,
      __wbg_port2_b2a294b0ede1e13c: x_,
      __wbg_set_box_73d3355c6f95f24d: J_,
      __wbg_addEventListener_3acb0aad4483804c: U,
      __wbg_removeEventListener_e63328781a5b9af9: T_,
      __wbg_postMessage_e45c89e4826cf2ef: k_,
      __wbg_new_4f8f3c123e474358: __,
      __wbg_log_6b5ca2e6124b2808: $e,
      __wbg_info_148d043840582012: je,
      __wbg_warn_f7ae1b2e66ccb930: ln,
      __wbg_debug_a4099fa12db6cd61: ge,
      __wbg_error_9a7fe3f932034cde: ke,
      __wbg_error_f852e41c69b0bd84: Ee,
      __wbg_postMessage_46eeeef39934b448: I_,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: Q_,
      __wbg_close_fad2f0ee451926ed: be,
      __wbg_start_ffb4b426b1e661bd: cn,
      __wbg_width_7444cca5dfea0645: yn,
      __wbg_height_c2027cf67d1c9b11: Fe,
      __wbg_persisted_de98357e1aaf6546: m_,
      __wbg_queueMicrotask_5bb536982f78a56f: M_,
      __wbg_queueMicrotask_0aa0a927f78f5d98: C_,
      __wbg_performance_7a3ffd0b17f663ad: l_,
      __wbg_now_2c95c9de01293173: f_,
      __wbg_new_361308b2356cecd0: e_,
      __wbg_new_no_args_1c7c842f08d00ebb: b_,
      __wbg_get_9b94d73e6221f75c: Re,
      __wbg_of_f915f7cd925b21a5: d_,
      __wbg_of_9ab14f9d4bfb5040: i_,
      __wbg_length_35a7bace40f36eac: Ue,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: Te,
      __wbg_is_f29129f676e5410c: Be,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: bn,
      __wbg_call_389efe28435a9388: ee,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: on,
      __wbg_static_accessor_GLOBAL_12837167ad935116: rn,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: fn,
      __wbg_then_b9e7b3b5f1a9e1b5: sn,
      __wbg_catch_c1f8c7623b458214: ce,
      __wbg_resolve_002c4b7d9d8f6b64: z_,
      __wbg_set_6cb8631f80447a67: H_,
      __wbg___wbindgen_throw_be289d5034ed271b: P,
      __wbg___wbindgen_is_function_0095a73b8b156f76: j,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: K,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: F,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: D,
      __wbindgen_cast_0000000000000001: hn,
      __wbindgen_cast_0000000000000002: vn,
      __wbindgen_cast_0000000000000003: xn,
      __wbindgen_cast_0000000000000004: In,
      __wbindgen_cast_0000000000000005: kn,
      __wbindgen_cast_0000000000000006: En,
      __wbindgen_cast_0000000000000007: On,
      __wbindgen_cast_0000000000000008: Ln,
      __wbindgen_cast_0000000000000009: Sn,
      __wbindgen_cast_000000000000000a: Cn,
      __wbindgen_cast_000000000000000b: Mn,
      __wbindgen_cast_000000000000000c: An
    }
  }, q), $n = d.memory, Xn = d.main, Yn = d.run_web, Vn = d.__wasm_bindgen_func_elem_1055, Nn = d.__wasm_bindgen_func_elem_2827, Gn = d.__wasm_bindgen_func_elem_1394, Hn = d.__wasm_bindgen_func_elem_1386, Jn = d.__wasm_bindgen_func_elem_2828, Qn = d.__wasm_bindgen_func_elem_1388, Zn = d.__wbindgen_export, et = d.__wbindgen_export2, _t = d.__wbindgen_export3, nt = d.__wbindgen_export4, A = d.__wbindgen_start, tt = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_1055: Vn,
    __wasm_bindgen_func_elem_1386: Hn,
    __wasm_bindgen_func_elem_1388: Qn,
    __wasm_bindgen_func_elem_1394: Gn,
    __wasm_bindgen_func_elem_2827: Nn,
    __wasm_bindgen_func_elem_2828: Jn,
    __wbindgen_export: Zn,
    __wbindgen_export2: et,
    __wbindgen_export3: _t,
    __wbindgen_export4: nt,
    __wbindgen_start: A,
    main: Xn,
    memory: $n,
    run_web: Yn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Wn(tt);
  A();
})();
export {
  __tla,
  rt as run_web
};
