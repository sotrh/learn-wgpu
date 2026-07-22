import { _ as n_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let gg;
let __tla = (async () => {
  const b_ = "/learn-wgpu/assets/demo_bg-DT0E8i_D.wasm";
  gg = function() {
    u.run_web();
  };
  function r_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function c_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function a_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function f_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return l(n) ? 16777215 : n ? 1 : 0;
  }
  function o_(_, e) {
    const n = j(t(e)), b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function u_(_) {
    return typeof t(_) == "function";
  }
  function d_(_) {
    return t(_) === null;
  }
  function i_(_) {
    const e = t(_);
    return typeof e == "object" && e !== null;
  }
  function g_(_) {
    return typeof t(_) == "string";
  }
  function s_(_) {
    return t(_) === void 0;
  }
  function w_(_, e) {
    const n = t(e), b = typeof n == "number" ? n : void 0;
    w().setFloat64(_ + 8, l(b) ? 0 : b, true), w().setInt32(_ + 0, !l(b), true);
  }
  function l_(_, e) {
    const n = t(e), b = typeof n == "string" ? n : void 0;
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function m_(_, e) {
    throw new Error(g(_, e));
  }
  function p_(_) {
    t(_)._wbg_cb_unref();
  }
  function x_(_) {
    t(_).abort();
  }
  function y_(_) {
    const e = t(_).activeElement;
    return l(e) ? 0 : c(e);
  }
  function h_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function v_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function S_() {
    return o(function(_, e, n, b) {
      t(_).addEventListener(g(e, n), t(b));
    }, arguments);
  }
  function I_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function A_(_) {
    return t(_).altKey;
  }
  function D_(_) {
    return t(_).altKey;
  }
  function P_(_, e, n) {
    const b = t(_).animate(t(e), t(n));
    return c(b);
  }
  function M_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function F_() {
    return o(function(_, e, n, b, r) {
      t(_).append(g(e, n), g(b, r));
    }, arguments);
  }
  function T_() {
    return o(function(_) {
      const e = t(_).arrayBuffer();
      return c(e);
    }, arguments);
  }
  function k_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function B_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function L_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function E_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function R_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function C_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function O_(_, e, n, b, r, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(b), r, a);
  }
  function q_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function j_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function K_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function $_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function N_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function Q_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function X_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function Y_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function H_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function J_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function Z_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function _e(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function ee(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function te(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function ne(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function be(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function re(_, e, n, b, r, a, f, d, i, s, p) {
    t(_).blitFramebuffer(e, n, b, r, a, f, d, i, s >>> 0, p >>> 0);
  }
  function ce(_) {
    return t(_).blockSize;
  }
  function ae(_) {
    const e = t(_).body;
    return l(e) ? 0 : c(e);
  }
  function fe(_, e) {
    const n = t(e).brand, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function oe(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ue(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function de(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function ie(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function ge(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function se(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function we(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function le(_) {
    return t(_).button;
  }
  function me(_) {
    return t(_).buttons;
  }
  function pe() {
    return o(function(_, e) {
      const n = t(_).call(t(e));
      return c(n);
    }, arguments);
  }
  function xe() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function ye(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function he(_) {
    t(_).cancel();
  }
  function ve(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function Se(_, e, n, b, r) {
    t(_).clearBufferfv(e >>> 0, n, y(b, r));
  }
  function Ie(_, e, n, b, r) {
    t(_).clearBufferiv(e >>> 0, n, D(b, r));
  }
  function Ae(_, e, n, b, r) {
    t(_).clearBufferuiv(e >>> 0, n, F(b, r));
  }
  function De(_, e) {
    t(_).clearDepth(e);
  }
  function Pe(_, e) {
    t(_).clearDepth(e);
  }
  function Me(_, e) {
    t(_).clearStencil(e);
  }
  function Fe(_, e) {
    t(_).clearStencil(e);
  }
  function Te(_, e) {
    t(_).clearTimeout(e);
  }
  function ke(_, e) {
    t(_).clear(e >>> 0);
  }
  function Be(_, e) {
    t(_).clear(e >>> 0);
  }
  function Le(_, e, n, b) {
    return t(_).clientWaitSync(t(e), n >>> 0, b >>> 0);
  }
  function Ee(_) {
    t(_).close();
  }
  function Re(_, e) {
    const n = t(e).code, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Ce(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Oe(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function qe(_, e) {
    t(_).compileShader(t(e));
  }
  function Ge(_, e) {
    t(_).compileShader(t(e));
  }
  function Ve(_, e, n, b, r, a, f, d, i, s) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i, s);
  }
  function We(_, e, n, b, r, a, f, d, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
  }
  function Ue(_, e, n, b, r, a, f, d, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
  }
  function ze(_, e, n, b, r, a, f, d, i, s, p, v) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p, v);
  }
  function je(_, e, n, b, r, a, f, d, i, s, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, t(p));
  }
  function Ke() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function $e(_, e) {
    return t(_).contains(t(e));
  }
  function Ne(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function Qe(_, e, n, b, r, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, b, r, a);
  }
  function Xe(_, e, n, b, r, a, f, d, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
  }
  function Ye(_, e, n, b, r, a, f, d, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
  }
  function He(_, e, n, b, r, a, f, d, i, s) {
    t(_).copyTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s);
  }
  function Je() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return c(n);
    }, arguments);
  }
  function Ze(_, e) {
    const n = t(_).createBindGroup(t(e));
    return c(n);
  }
  function _t(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function et() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return c(n);
    }, arguments);
  }
  function tt(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function nt(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function bt() {
    return o(function(_, e, n) {
      const b = t(_).createElement(g(e, n));
      return c(b);
    }, arguments);
  }
  function rt(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function ct(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function at() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function ft(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function ot(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function ut(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function dt(_) {
    const e = t(_).createQuery();
    return l(e) ? 0 : c(e);
  }
  function it() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function gt(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function st(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function wt(_) {
    const e = t(_).createSampler();
    return l(e) ? 0 : c(e);
  }
  function lt(_, e) {
    const n = t(_).createSampler(t(e));
    return c(n);
  }
  function mt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function pt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function xt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function yt(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function ht() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return c(n);
    }, arguments);
  }
  function vt(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function St(_) {
    const e = t(_).createVertexArrayOES();
    return l(e) ? 0 : c(e);
  }
  function It(_) {
    const e = t(_).createVertexArray();
    return l(e) ? 0 : c(e);
  }
  function At() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function Dt(_) {
    return t(_).ctrlKey;
  }
  function Pt(_) {
    return t(_).ctrlKey;
  }
  function Mt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Ft(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Tt(_) {
    console.debug(t(_));
  }
  function kt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Bt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Lt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Et(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Rt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Ct(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Ot(_, e) {
    t(_).deleteQuery(t(e));
  }
  function qt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Gt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Vt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Wt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Ut(_, e) {
    t(_).deleteShader(t(e));
  }
  function zt(_, e) {
    t(_).deleteSync(t(e));
  }
  function jt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Kt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function $t(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Nt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Qt(_) {
    return t(_).deltaMode;
  }
  function Xt(_) {
    return t(_).deltaX;
  }
  function Yt(_) {
    return t(_).deltaY;
  }
  function Ht(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Jt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Zt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function _n(_, e) {
    t(_).depthMask(e !== 0);
  }
  function en(_, e, n) {
    t(_).depthRange(e, n);
  }
  function tn(_, e, n) {
    t(_).depthRange(e, n);
  }
  function nn(_) {
    t(_).destroy();
  }
  function bn(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function rn(_) {
    return t(_).devicePixelRatio;
  }
  function cn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function an(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function fn(_, e) {
    t(_).disable(e >>> 0);
  }
  function on(_, e) {
    t(_).disable(e >>> 0);
  }
  function un(_) {
    t(_).disconnect();
  }
  function dn(_) {
    t(_).disconnect();
  }
  function gn(_) {
    const e = t(_).document;
    return l(e) ? 0 : c(e);
  }
  function sn(_) {
    return t(_).done;
  }
  function wn(_, e, n, b, r) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, b, r);
  }
  function ln(_, e, n, b, r) {
    t(_).drawArraysInstanced(e >>> 0, n, b, r);
  }
  function mn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function pn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function xn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function yn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function hn(_, e, n, b, r, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, b >>> 0, r, a);
  }
  function vn(_, e, n, b, r, a) {
    t(_).drawElementsInstanced(e >>> 0, n, b >>> 0, r, a);
  }
  function Sn(_, e, n, b, r, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, b >>> 0, r, a >>> 0);
  }
  function In(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function An(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Dn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Pn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Mn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function Fn(_) {
    t(_).end();
  }
  function Tn(_) {
    console.error(t(_));
  }
  function kn(_, e) {
    console.error(t(_), t(e));
  }
  function Bn(_, e) {
    let n, b;
    try {
      n = _, b = e, console.error(g(_, e));
    } finally {
      u.__wbindgen_export4(n, b, 1);
    }
  }
  function Ln(_, e, n) {
    const b = t(_).fenceSync(e >>> 0, n >>> 0);
    return l(b) ? 0 : c(b);
  }
  function En(_, e) {
    const n = t(_).fetch(t(e));
    return c(n);
  }
  function Rn(_) {
    const e = fetch(t(_));
    return c(e);
  }
  function Cn(_) {
    t(_).finish();
  }
  function On(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function qn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function Gn(_) {
    t(_).finish();
  }
  function Vn(_) {
    t(_).flush();
  }
  function Wn(_) {
    t(_).flush();
  }
  function Un() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function zn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function jn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function Kn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function $n(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Nn(_, e, n, b, r, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(b), r, a);
  }
  function Qn(_, e, n, b, r, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(b), r, a, f);
  }
  function Xn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Yn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Hn(_) {
    const e = t(_).fullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function Jn(_, e, n, b) {
    t(_).getBufferSubData(e >>> 0, n, t(b));
  }
  function Zn(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function _b(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function eb() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return l(n) ? 0 : c(n);
    }, arguments);
  }
  function tb() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function nb() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function bb() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function rb() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function cb() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function ab(_, e, n) {
    const b = t(_).getElementById(g(e, n));
    return l(b) ? 0 : c(b);
  }
  function fb() {
    return o(function(_, e, n) {
      const b = t(_).getExtension(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function ob() {
    return o(function(_, e, n) {
      const b = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(b);
    }, arguments);
  }
  function ub() {
    return o(function(_, e, n) {
      const b = t(_).getMappedRange(e, n);
      return c(b);
    }, arguments);
  }
  function db(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function ib() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function gb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function sb(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 102) - 1;
  }
  function wb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function lb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function mb(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function pb(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function xb() {
    return o(function(_, e, n, b) {
      const r = t(e).getPropertyValue(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function yb(_, e, n) {
    const b = t(_).getQueryParameter(t(e), n >>> 0);
    return c(b);
  }
  function hb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function vb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Sb(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Ib(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Ab(_) {
    const e = t(_).getSupportedExtensions();
    return l(e) ? 0 : c(e);
  }
  function Db(_) {
    const e = t(_).getSupportedProfiles();
    return l(e) ? 0 : c(e);
  }
  function Pb(_, e, n) {
    const b = t(_).getSyncParameter(t(e), n >>> 0);
    return c(b);
  }
  function Mb(_, e, n, b) {
    return t(_).getUniformBlockIndex(t(e), g(n, b));
  }
  function Fb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function Tb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function kb(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Bb() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Lb(_, e) {
    const n = t(_)[e >>> 0];
    return l(n) ? 0 : c(n);
  }
  function Eb() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Rb(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Cb(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function Ob() {
    return o(function(_, e) {
      return Reflect.has(t(_), t(e));
    }, arguments);
  }
  function qb(_) {
    const e = t(_).headers;
    return c(e);
  }
  function Gb(_) {
    return t(_).height;
  }
  function Vb(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Wb(_) {
    console.info(t(_));
  }
  function Ub(_) {
    return t(_).inlineSize;
  }
  function zb(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function jb(_) {
    let e;
    try {
      e = t(_) instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function Kb(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function $b(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Nb() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Qb(_) {
    return t(_).isIntersecting;
  }
  function Xb(_, e) {
    return Object.is(t(_), t(e));
  }
  function Yb() {
    return c(Symbol.iterator);
  }
  function Hb(_, e) {
    const n = t(e).key, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Jb(_, e) {
    const n = t(e).label, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Zb(_) {
    return t(_).length;
  }
  function _r(_) {
    return t(_).length;
  }
  function er(_, e) {
    t(_).linkProgram(t(e));
  }
  function tr(_, e) {
    t(_).linkProgram(t(e));
  }
  function nr(_) {
    return t(_).location;
  }
  function br(_) {
    const e = t(_).location;
    return c(e);
  }
  function rr(_) {
    console.log(t(_));
  }
  function cr(_, e, n, b) {
    const r = t(_).mapAsync(e >>> 0, n, b);
    return c(r);
  }
  function ar() {
    return o(function(_, e, n) {
      const b = t(_).matchMedia(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function fr(_) {
    return t(_).matches;
  }
  function or(_, e) {
    const n = t(e).media, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function ur(_) {
    return t(_).metaKey;
  }
  function dr(_) {
    return t(_).metaKey;
  }
  function ir(_) {
    return t(_).movementX;
  }
  function gr(_) {
    return t(_).movementY;
  }
  function sr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function wr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function lr() {
    return o(function() {
      const _ = new Headers();
      return c(_);
    }, arguments);
  }
  function mr() {
    const _ = new Error();
    return c(_);
  }
  function pr() {
    return o(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function xr() {
    const _ = new Array();
    return c(_);
  }
  function yr() {
    return o(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function hr() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function vr() {
    return o(function(_, e) {
      const n = new Worker(g(_, e));
      return c(n);
    }, arguments);
  }
  function Sr(_) {
    const e = new Uint8Array(t(_));
    return c(e);
  }
  function Ir() {
    const _ = new Object();
    return c(_);
  }
  function Ar() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Dr() {
    return o(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function Pr(_, e) {
    const n = new Uint8Array(L(_, e));
    return c(n);
  }
  function Mr() {
    const _ = new Object();
    return c(_);
  }
  function Fr(_, e, n) {
    const b = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(b);
  }
  function Tr() {
    return o(function(_, e, n) {
      const b = new Request(g(_, e), t(n));
      return c(b);
    }, arguments);
  }
  function kr() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Br(_) {
    const e = t(_).next;
    return c(e);
  }
  function Lr() {
    return o(function(_) {
      const e = t(_).next();
      return c(e);
    }, arguments);
  }
  function Er(_) {
    return t(_).now();
  }
  function Rr(_) {
    return t(_).now();
  }
  function Cr(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function Or(_, e) {
    t(_).observe(t(e));
  }
  function qr(_, e) {
    t(_).observe(t(e));
  }
  function Gr(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function Vr(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function Wr(_) {
    return t(_).offsetX;
  }
  function Ur(_) {
    return t(_).offsetY;
  }
  function zr(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function jr() {
    return o(function(_, e) {
      const n = t(e).origin, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function Kr(_) {
    const e = t(_).performance;
    return c(e);
  }
  function $r(_) {
    return t(_).persisted;
  }
  function Nr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Qr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Xr(_) {
    t(_).play();
  }
  function Yr(_) {
    return t(_).pointerId;
  }
  function Hr(_, e) {
    const n = t(e).pointerType, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Jr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Zr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function _c(_) {
    const e = t(_).port1;
    return c(e);
  }
  function ec(_) {
    const e = t(_).port2;
    return c(e);
  }
  function tc() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function nc() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function bc(_, e, n) {
    const b = t(_).postTask(t(e), t(n));
    return c(b);
  }
  function rc(_) {
    return t(_).pressure;
  }
  function cc(_) {
    t(_).preventDefault();
  }
  function ac() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function fc(_, e, n) {
    Uint8Array.prototype.set.call(L(_, e), t(n));
  }
  function oc(_, e) {
    return t(_).push(t(e));
  }
  function uc(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function dc() {
    return o(function(_, e, n) {
      const b = t(_).querySelectorAll(g(e, n));
      return c(b);
    }, arguments);
  }
  function ic() {
    return o(function(_, e, n) {
      const b = t(_).querySelector(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function gc(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function sc(_) {
    queueMicrotask(t(_));
  }
  function wc(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function lc(_) {
    const e = t(_).queue;
    return c(e);
  }
  function mc(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function pc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
    }, arguments);
  }
  function xc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, d);
    }, arguments);
  }
  function yc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
    }, arguments);
  }
  function hc() {
    return o(function(_, e, n, b) {
      t(_).removeEventListener(g(e, n), t(b));
    }, arguments);
  }
  function vc() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Sc() {
    return o(function(_, e, n, b) {
      const r = t(e).removeProperty(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Ic(_, e, n, b, r, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, b >>> 0, r, a);
  }
  function Ac(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function Dc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function Pc(_) {
    return t(_).repeat;
  }
  function Mc(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function Fc() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Tc(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function kc(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function Bc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function Lc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function Ec() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Rc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function Cc() {
    return o(function(_, e) {
      URL.revokeObjectURL(g(_, e));
    }, arguments);
  }
  function Oc(_, e, n, b) {
    t(_).samplerParameterf(t(e), n >>> 0, b);
  }
  function qc(_, e, n, b) {
    t(_).samplerParameteri(t(e), n >>> 0, b);
  }
  function Gc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function Vc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function Wc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function Uc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function zc() {
    return o(function(_, e, n, b, r) {
      t(_).setAttribute(g(e, n), g(b, r));
    }, arguments);
  }
  function jc() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), F(b, r), a, f >>> 0);
    }, arguments);
  }
  function Kc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function $c(_, e, n, b) {
    t(_).setIndexBuffer(t(e), N[n], b);
  }
  function Nc(_, e, n, b, r) {
    t(_).setIndexBuffer(t(e), N[n], b, r);
  }
  function Qc(_, e) {
    t(_).setPipeline(t(e));
  }
  function Xc() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function Yc() {
    return o(function(_, e, n, b, r) {
      t(_).setProperty(g(e, n), g(b, r));
    }, arguments);
  }
  function Hc() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function Jc() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function Zc(_, e, n, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), b);
  }
  function _a(_, e, n, b, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), b, r);
  }
  function ea(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function ta() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function na(_, e) {
    t(_).a = e;
  }
  function ba(_, e) {
    t(_).access = pi[e];
  }
  function ra(_, e) {
    t(_).addressModeU = K[e];
  }
  function ca(_, e) {
    t(_).addressModeV = K[e];
  }
  function aa(_, e) {
    t(_).addressModeW = K[e];
  }
  function fa(_, e) {
    t(_).alpha = t(e);
  }
  function oa(_, e) {
    t(_).alphaMode = ui[e];
  }
  function ua(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function da(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function ia(_, e) {
    t(_).arrayStride = e;
  }
  function ga(_, e) {
    t(_).aspect = e_[e];
  }
  function sa(_, e) {
    t(_).aspect = e_[e];
  }
  function wa(_, e, n) {
    t(_).attributes = I(e, n);
  }
  function la(_, e) {
    t(_).b = e;
  }
  function ma(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function pa(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function xa(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function ya(_, e, n) {
    t(_).bindGroupLayouts = I(e, n);
  }
  function ha(_, e) {
    t(_).binding = e >>> 0;
  }
  function va(_, e) {
    t(_).binding = e >>> 0;
  }
  function Sa(_, e) {
    t(_).blend = t(e);
  }
  function Ia(_, e) {
    t(_).body = t(e);
  }
  function Aa(_, e) {
    t(_).box = Ai[e];
  }
  function Da(_, e) {
    t(_).buffer = t(e);
  }
  function Pa(_, e) {
    t(_).buffer = t(e);
  }
  function Ma(_, e, n) {
    t(_).buffers = I(e, n);
  }
  function Fa(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function Ta(_, e) {
    t(_).clearValue = t(e);
  }
  function ka(_, e, n) {
    t(_).code = g(e, n);
  }
  function Ba(_, e) {
    t(_).color = t(e);
  }
  function La(_, e, n) {
    t(_).colorAttachments = I(e, n);
  }
  function Ea(_, e) {
    t(_).compare = $[e];
  }
  function Ra(_, e) {
    t(_).compare = $[e];
  }
  function Ca(_, e) {
    t(_).count = e >>> 0;
  }
  function Oa(_, e) {
    t(_).credentials = Si[e];
  }
  function qa(_, e) {
    t(_).cullMode = ii[e];
  }
  function Ga(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Va(_, e) {
    t(_).depthBias = e;
  }
  function Wa(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Ua(_, e) {
    t(_).depthClearValue = e;
  }
  function za(_, e) {
    t(_).depthCompare = $[e];
  }
  function ja(_, e) {
    t(_).depthFailOp = X[e];
  }
  function Ka(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function $a(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function Na(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function Qa(_, e) {
    t(_).depthStencil = t(e);
  }
  function Xa(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function Ya(_, e) {
    t(_).depthStoreOp = Y[e];
  }
  function Ha(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Ja(_, e) {
    t(_).device = t(e);
  }
  function Za(_, e) {
    t(_).dimension = xi[e];
  }
  function _f(_, e) {
    t(_).dimension = H[e];
  }
  function ef(_, e) {
    t(_).dstFactor = Z[e];
  }
  function tf(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function nf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function bf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function rf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function cf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function af(_, e) {
    t(_).externalTexture = t(e);
  }
  function ff(_, e) {
    t(_).failOp = X[e];
  }
  function of(_, e) {
    t(_).format = P[e];
  }
  function uf(_, e) {
    t(_).format = P[e];
  }
  function df(_, e) {
    t(_).format = P[e];
  }
  function gf(_, e) {
    t(_).format = hi[e];
  }
  function sf(_, e) {
    t(_).format = P[e];
  }
  function wf(_, e) {
    t(_).format = P[e];
  }
  function lf(_, e) {
    t(_).format = P[e];
  }
  function mf(_, e) {
    t(_).fragment = t(e);
  }
  function pf(_, e) {
    t(_).frontFace = gi[e];
  }
  function xf(_, e) {
    t(_).g = e;
  }
  function yf(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function hf(_, e) {
    t(_).headers = t(e);
  }
  function vf(_, e) {
    t(_).height = e >>> 0;
  }
  function Sf(_, e) {
    t(_).height = e >>> 0;
  }
  function If(_, e) {
    t(_).height = e >>> 0;
  }
  function Af(_, e, n) {
    t(_).label = g(e, n);
  }
  function Df(_, e, n) {
    t(_).label = g(e, n);
  }
  function Pf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Mf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Ff(_, e, n) {
    t(_).label = g(e, n);
  }
  function Tf(_, e, n) {
    t(_).label = g(e, n);
  }
  function kf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Bf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Lf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Ef(_, e, n) {
    t(_).label = g(e, n);
  }
  function Rf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Cf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Of(_, e, n) {
    t(_).label = g(e, n);
  }
  function qf(_, e) {
    t(_).layout = t(e);
  }
  function Gf(_, e) {
    t(_).layout = t(e);
  }
  function Vf(_, e) {
    t(_).layout = ai[e];
  }
  function Wf(_, e) {
    t(_).loadOp = Q[e];
  }
  function Uf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function zf(_, e) {
    t(_).lodMinClamp = e;
  }
  function jf(_, e) {
    t(_).magFilter = __[e];
  }
  function Kf(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function $f(_, e) {
    t(_).mask = e >>> 0;
  }
  function Nf(_, e) {
    t(_).maxAnisotropy = e;
  }
  function Qf(_, e, n) {
    t(_).method = g(e, n);
  }
  function Xf(_, e) {
    t(_).minBindingSize = e;
  }
  function Yf(_, e) {
    t(_).minFilter = __[e];
  }
  function Hf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Jf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Zf(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function _o(_, e) {
    t(_).mipmapFilter = si[e];
  }
  function eo(_, e) {
    t(_).mode = Ii[e];
  }
  function to(_, e) {
    t(_).mode = di[e];
  }
  function no(_, e) {
    t(_).module = t(e);
  }
  function bo(_, e) {
    t(_).module = t(e);
  }
  function ro(_, e) {
    t(_).multisample = t(e);
  }
  function co(_, e) {
    t(_).multisampled = e !== 0;
  }
  function ao(_, e) {
    t(_).offset = e;
  }
  function fo(_, e) {
    t(_).offset = e;
  }
  function oo(_, e) {
    t(_).offset = e;
  }
  function uo(_, e) {
    t(_).onmessage = t(e);
  }
  function io(_, e) {
    t(_).operation = fi[e];
  }
  function go(_, e) {
    t(_).origin = t(e);
  }
  function so(_, e) {
    t(_).passOp = X[e];
  }
  function wo(_, e) {
    t(_).powerPreference = wi[e];
  }
  function lo(_, e) {
    t(_).primitive = t(e);
  }
  function mo(_, e) {
    t(_).querySet = t(e);
  }
  function po(_, e) {
    t(_).r = e;
  }
  function xo(_, e, n) {
    t(_).requiredFeatures = I(e, n);
  }
  function yo(_, e) {
    t(_).requiredLimits = t(e);
  }
  function ho(_, e) {
    t(_).resolveTarget = t(e);
  }
  function vo(_, e) {
    t(_).resource = t(e);
  }
  function So(_, e) {
    t(_).resource = t(e);
  }
  function Io(_, e) {
    t(_).resource = t(e);
  }
  function Ao(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Do(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function Po(_, e) {
    t(_).sampleType = yi[e];
  }
  function Mo(_, e) {
    t(_).sampler = t(e);
  }
  function Fo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function To(_, e) {
    t(_).signal = t(e);
  }
  function ko(_, e) {
    t(_).size = e;
  }
  function Bo(_, e) {
    t(_).size = e;
  }
  function Lo(_, e) {
    t(_).size = t(e);
  }
  function Eo(_, e) {
    t(_).srcFactor = Z[e];
  }
  function Ro(_, e) {
    t(_).stencilBack = t(e);
  }
  function Co(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function Oo(_, e) {
    t(_).stencilFront = t(e);
  }
  function qo(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function Go(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function Vo(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function Wo(_, e) {
    t(_).stencilStoreOp = Y[e];
  }
  function Uo(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function zo(_, e) {
    t(_).stepMode = vi[e];
  }
  function jo(_, e) {
    t(_).storageTexture = t(e);
  }
  function Ko(_, e) {
    t(_).storeOp = Y[e];
  }
  function $o(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function No(_, e, n) {
    t(_).targets = I(e, n);
  }
  function Qo(_, e) {
    t(_).texture = t(e);
  }
  function Xo(_, e) {
    t(_).texture = t(e);
  }
  function Yo(_, e) {
    t(_).timestampWrites = t(e);
  }
  function Ho(_, e) {
    t(_).toneMapping = t(e);
  }
  function Jo(_, e) {
    t(_).topology = li[e];
  }
  function Zo(_, e, n) {
    t(_).type = g(e, n);
  }
  function _0(_, e) {
    t(_).type = mi[e];
  }
  function e0(_, e) {
    t(_).type = oi[e];
  }
  function t0(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function n0(_, e) {
    t(_).usage = e >>> 0;
  }
  function b0(_, e) {
    t(_).usage = e >>> 0;
  }
  function r0(_, e) {
    t(_).usage = e >>> 0;
  }
  function c0(_, e) {
    t(_).usage = e >>> 0;
  }
  function a0(_, e) {
    t(_).vertex = t(e);
  }
  function f0(_, e) {
    t(_).viewDimension = H[e];
  }
  function o0(_, e) {
    t(_).viewDimension = H[e];
  }
  function u0(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function d0(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function i0(_, e) {
    t(_).view = t(e);
  }
  function g0(_, e) {
    t(_).view = t(e);
  }
  function s0(_, e) {
    t(_).visibility = e >>> 0;
  }
  function w0(_, e) {
    t(_).width = e >>> 0;
  }
  function l0(_, e) {
    t(_).width = e >>> 0;
  }
  function m0(_, e) {
    t(_).width = e >>> 0;
  }
  function p0(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function x0(_, e) {
    t(_).x = e >>> 0;
  }
  function y0(_, e) {
    t(_).y = e >>> 0;
  }
  function h0(_, e) {
    t(_).z = e >>> 0;
  }
  function v0(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function S0(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function I0(_) {
    return t(_).shiftKey;
  }
  function A0(_) {
    return t(_).shiftKey;
  }
  function D0(_) {
    const e = t(_).signal;
    return c(e);
  }
  function P0(_, e) {
    const n = t(e).stack, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function M0(_) {
    t(_).start();
  }
  function F0() {
    const _ = typeof global > "u" ? null : global;
    return l(_) ? 0 : c(_);
  }
  function T0() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return l(_) ? 0 : c(_);
  }
  function k0() {
    const _ = typeof self > "u" ? null : self;
    return l(_) ? 0 : c(_);
  }
  function B0() {
    const _ = typeof window > "u" ? null : window;
    return l(_) ? 0 : c(_);
  }
  function L0(_) {
    return t(_).status;
  }
  function E0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function R0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function C0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function O0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function q0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function G0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function V0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function W0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function U0() {
    return o(function(_) {
      const e = JSON.stringify(t(_));
      return c(e);
    }, arguments);
  }
  function z0(_) {
    const e = t(_).style;
    return c(e);
  }
  function j0(_, e, n) {
    t(_).submit(I(e, n));
  }
  function K0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function $0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function N0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
    }, arguments);
  }
  function Q0() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, p);
    }, arguments);
  }
  function X0() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, t(p));
    }, arguments);
  }
  function Y0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function H0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function J0(_, e, n, b, r, a) {
    t(_).texStorage2D(e >>> 0, n, b >>> 0, r, a);
  }
  function Z0(_, e, n, b, r, a, f) {
    t(_).texStorage3D(e >>> 0, n, b >>> 0, r, a, f);
  }
  function _u() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
    }, arguments);
  }
  function eu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function tu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function nu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function bu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function ru() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function cu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function au() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function fu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function ou() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function uu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function du() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, v);
    }, arguments);
  }
  function iu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function gu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function su() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function wu() {
    return o(function(_) {
      const e = t(_).text();
      return c(e);
    }, arguments);
  }
  function lu(_, e, n) {
    const b = t(_).then(t(e), t(n));
    return c(b);
  }
  function mu(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function pu(_) {
    t(_).unconfigure();
  }
  function xu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function yu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function hu(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function vu(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Su(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function Iu(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function Au(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function Du(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Pu(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Mu(_, e, n, b) {
    t(_).uniform2uiv(t(e), F(n, b));
  }
  function Fu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function Tu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function ku(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Bu(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Lu(_, e, n, b) {
    t(_).uniform3uiv(t(e), F(n, b));
  }
  function Eu(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function Ru(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function Cu(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function Ou(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function qu(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function Gu(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function Vu(_, e, n, b) {
    t(_).uniform4uiv(t(e), F(n, b));
  }
  function Wu(_, e, n, b) {
    t(_).uniformBlockBinding(t(e), n >>> 0, b >>> 0);
  }
  function Uu(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function zu(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function ju(_, e, n, b, r) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, y(b, r));
  }
  function Ku(_, e, n, b, r) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, y(b, r));
  }
  function $u(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function Nu(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function Qu(_, e, n, b, r) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, y(b, r));
  }
  function Xu(_, e, n, b, r) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, y(b, r));
  }
  function Yu(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function Hu(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function Ju(_, e, n, b, r) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, y(b, r));
  }
  function Zu(_, e, n, b, r) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, y(b, r));
  }
  function _d(_) {
    t(_).unmap();
  }
  function ed(_, e) {
    t(_).unobserve(t(e));
  }
  function td(_, e) {
    const n = t(e).url, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function nd(_, e) {
    t(_).useProgram(t(e));
  }
  function bd(_, e) {
    t(_).useProgram(t(e));
  }
  function rd(_) {
    const e = t(_).userAgentData;
    return l(e) ? 0 : c(e);
  }
  function cd() {
    return o(function(_, e) {
      const n = t(e).userAgent, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function ad(_) {
    const e = t(_).value;
    return c(e);
  }
  function fd(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function od(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function ud(_, e, n, b, r, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, b >>> 0, r, a);
  }
  function dd(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function id(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function gd(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function sd(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function wd(_) {
    const e = t(_).visibilityState;
    return (Di.indexOf(e) + 1 || 3) - 1;
  }
  function ld(_) {
    console.warn(t(_));
  }
  function md(_) {
    const e = t(_).webkitFullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function pd(_) {
    t(_).webkitRequestFullscreen();
  }
  function xd(_) {
    return t(_).width;
  }
  function yd() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).writeBuffer(t(e), n, L(b, r), a, f);
    }, arguments);
  }
  function hd() {
    return o(function(_, e, n, b, r, a) {
      t(_).writeTexture(t(e), L(n, b), t(r), t(a));
    }, arguments);
  }
  function vd(_, e) {
    const n = S(_, e, Qd);
    return c(n);
  }
  function Sd(_, e) {
    const n = S(_, e, ti);
    return c(n);
  }
  function Id(_, e) {
    const n = S(_, e, ni);
    return c(n);
  }
  function Ad(_, e) {
    const n = S(_, e, Xd);
    return c(n);
  }
  function Dd(_, e) {
    const n = S(_, e, Yd);
    return c(n);
  }
  function Pd(_, e) {
    const n = S(_, e, Hd);
    return c(n);
  }
  function Md(_, e) {
    const n = S(_, e, bi);
    return c(n);
  }
  function Fd(_, e) {
    const n = S(_, e, Jd);
    return c(n);
  }
  function Td(_, e) {
    const n = S(_, e, Zd);
    return c(n);
  }
  function kd(_, e) {
    const n = S(_, e, _i);
    return c(n);
  }
  function Bd(_, e) {
    const n = S(_, e, ei);
    return c(n);
  }
  function Ld(_, e) {
    const n = S(_, e, ri);
    return c(n);
  }
  function Ed(_, e) {
    const n = S(_, e, ci);
    return c(n);
  }
  function Rd(_, e) {
    const n = S(_, e, Nd);
    return c(n);
  }
  function Cd(_) {
    return c(_);
  }
  function Od(_, e) {
    const n = y(_, e);
    return c(n);
  }
  function qd(_, e) {
    const n = Mi(_, e);
    return c(n);
  }
  function Gd(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function Vd(_, e) {
    const n = Fi(_, e);
    return c(n);
  }
  function Wd(_, e) {
    const n = Ti(_, e);
    return c(n);
  }
  function Ud(_, e) {
    const n = F(_, e);
    return c(n);
  }
  function zd(_, e) {
    const n = L(_, e);
    return c(n);
  }
  function jd(_, e) {
    const n = g(_, e);
    return c(n);
  }
  function Kd(_) {
    const e = t(_);
    return c(e);
  }
  function $d(_) {
    E(_);
  }
  function Nd(_, e) {
    u.__wasm_bindgen_func_elem_3311(_, e);
  }
  function Qd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309(_, e, c(n));
  }
  function Xd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_3(_, e, c(n));
  }
  function Yd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_4(_, e, c(n));
  }
  function Hd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_5(_, e, c(n));
  }
  function Jd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_7(_, e, c(n));
  }
  function Zd(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_8(_, e, c(n));
  }
  function _i(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_9(_, e, c(n));
  }
  function ei(_, e, n) {
    u.__wasm_bindgen_func_elem_3309_10(_, e, c(n));
  }
  function ti(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_11891(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ni(_, e, n, b) {
    u.__wasm_bindgen_func_elem_3310(_, e, c(n), c(b));
  }
  function bi(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3896(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ri(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3896_11(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ci(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3896_12(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const K = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], ai = [
    "auto"
  ], Z = [
    "zero",
    "one",
    "src",
    "one-minus-src",
    "src-alpha",
    "one-minus-src-alpha",
    "dst",
    "one-minus-dst",
    "dst-alpha",
    "one-minus-dst-alpha",
    "src-alpha-saturated",
    "constant",
    "one-minus-constant",
    "src1",
    "one-minus-src1",
    "src1-alpha",
    "one-minus-src1-alpha"
  ], fi = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], oi = [
    "uniform",
    "storage",
    "read-only-storage"
  ], ui = [
    "opaque",
    "premultiplied"
  ], di = [
    "standard",
    "extended"
  ], $ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], ii = [
    "none",
    "front",
    "back"
  ], __ = [
    "nearest",
    "linear"
  ], gi = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], si = [
    "nearest",
    "linear"
  ], wi = [
    "low-power",
    "high-performance"
  ], li = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], mi = [
    "filtering",
    "non-filtering",
    "comparison"
  ], X = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], pi = [
    "write-only",
    "read-only",
    "read-write"
  ], Y = [
    "store",
    "discard"
  ], e_ = [
    "all",
    "stencil-only",
    "depth-only"
  ], xi = [
    "1d",
    "2d",
    "3d"
  ], P = [
    "r8unorm",
    "r8snorm",
    "r8uint",
    "r8sint",
    "r16unorm",
    "r16snorm",
    "r16uint",
    "r16sint",
    "r16float",
    "rg8unorm",
    "rg8snorm",
    "rg8uint",
    "rg8sint",
    "r32uint",
    "r32sint",
    "r32float",
    "rg16unorm",
    "rg16snorm",
    "rg16uint",
    "rg16sint",
    "rg16float",
    "rgba8unorm",
    "rgba8unorm-srgb",
    "rgba8snorm",
    "rgba8uint",
    "rgba8sint",
    "bgra8unorm",
    "bgra8unorm-srgb",
    "rgb9e5ufloat",
    "rgb10a2uint",
    "rgb10a2unorm",
    "rg11b10ufloat",
    "rg32uint",
    "rg32sint",
    "rg32float",
    "rgba16unorm",
    "rgba16snorm",
    "rgba16uint",
    "rgba16sint",
    "rgba16float",
    "rgba32uint",
    "rgba32sint",
    "rgba32float",
    "stencil8",
    "depth16unorm",
    "depth24plus",
    "depth24plus-stencil8",
    "depth32float",
    "depth32float-stencil8",
    "bc1-rgba-unorm",
    "bc1-rgba-unorm-srgb",
    "bc2-rgba-unorm",
    "bc2-rgba-unorm-srgb",
    "bc3-rgba-unorm",
    "bc3-rgba-unorm-srgb",
    "bc4-r-unorm",
    "bc4-r-snorm",
    "bc5-rg-unorm",
    "bc5-rg-snorm",
    "bc6h-rgb-ufloat",
    "bc6h-rgb-float",
    "bc7-rgba-unorm",
    "bc7-rgba-unorm-srgb",
    "etc2-rgb8unorm",
    "etc2-rgb8unorm-srgb",
    "etc2-rgb8a1unorm",
    "etc2-rgb8a1unorm-srgb",
    "etc2-rgba8unorm",
    "etc2-rgba8unorm-srgb",
    "eac-r11unorm",
    "eac-r11snorm",
    "eac-rg11unorm",
    "eac-rg11snorm",
    "astc-4x4-unorm",
    "astc-4x4-unorm-srgb",
    "astc-5x4-unorm",
    "astc-5x4-unorm-srgb",
    "astc-5x5-unorm",
    "astc-5x5-unorm-srgb",
    "astc-6x5-unorm",
    "astc-6x5-unorm-srgb",
    "astc-6x6-unorm",
    "astc-6x6-unorm-srgb",
    "astc-8x5-unorm",
    "astc-8x5-unorm-srgb",
    "astc-8x6-unorm",
    "astc-8x6-unorm-srgb",
    "astc-8x8-unorm",
    "astc-8x8-unorm-srgb",
    "astc-10x5-unorm",
    "astc-10x5-unorm-srgb",
    "astc-10x6-unorm",
    "astc-10x6-unorm-srgb",
    "astc-10x8-unorm",
    "astc-10x8-unorm-srgb",
    "astc-10x10-unorm",
    "astc-10x10-unorm-srgb",
    "astc-12x10-unorm",
    "astc-12x10-unorm-srgb",
    "astc-12x12-unorm",
    "astc-12x12-unorm-srgb"
  ], yi = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], H = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], hi = [
    "uint8",
    "uint8x2",
    "uint8x4",
    "sint8",
    "sint8x2",
    "sint8x4",
    "unorm8",
    "unorm8x2",
    "unorm8x4",
    "snorm8",
    "snorm8x2",
    "snorm8x4",
    "uint16",
    "uint16x2",
    "uint16x4",
    "sint16",
    "sint16x2",
    "sint16x4",
    "unorm16",
    "unorm16x2",
    "unorm16x4",
    "snorm16",
    "snorm16x2",
    "snorm16x4",
    "float16",
    "float16x2",
    "float16x4",
    "float32",
    "float32x2",
    "float32x3",
    "float32x4",
    "uint32",
    "uint32x2",
    "uint32x3",
    "uint32x4",
    "sint32",
    "sint32x2",
    "sint32x3",
    "sint32x4",
    "unorm10-10-10-2",
    "unorm8x4-bgra"
  ], vi = [
    "vertex",
    "instance"
  ], Si = [
    "omit",
    "same-origin",
    "include"
  ], Ii = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], Ai = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Di = [
    "hidden",
    "visible"
  ];
  function c(_) {
    k === A.length && A.push(A.length + 1);
    const e = k;
    return k = A[e], A[e] = _, e;
  }
  const J = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbindgen_export5(_.a, _.b));
  function j(_) {
    const e = typeof _;
    if (e == "number" || e == "boolean" || _ == null) return `${_}`;
    if (e == "string") return `"${_}"`;
    if (e == "symbol") {
      const r = _.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (e == "function") {
      const r = _.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(_)) {
      const r = _.length;
      let a = "[";
      r > 0 && (a += j(_[0]));
      for (let f = 1; f < r; f++) a += ", " + j(_[f]);
      return a += "]", a;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let b;
    if (n && n.length > 1) b = n[1];
    else return toString.call(_);
    if (b == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : b;
  }
  function Pi(_) {
    _ < 1028 || (A[_] = k, k = _);
  }
  function y(_, e) {
    return _ = _ >>> 0, ki().subarray(_ / 4, _ / 4 + e);
  }
  function Mi(_, e) {
    return _ = _ >>> 0, Bi().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, Li().subarray(_ / 4, _ / 4 + e);
  }
  function Fi(_, e) {
    return _ = _ >>> 0, Ei().subarray(_ / 1, _ / 1 + e);
  }
  function I(_, e) {
    _ = _ >>> 0;
    const n = w(), b = [];
    for (let r = _; r < _ + 4 * e; r += 4) b.push(t(n.getUint32(r, true)));
    return b;
  }
  function Ti(_, e) {
    return _ = _ >>> 0, Ri().subarray(_ / 2, _ / 2 + e);
  }
  function F(_, e) {
    return _ = _ >>> 0, Ci().subarray(_ / 4, _ / 4 + e);
  }
  function L(_, e) {
    return _ = _ >>> 0, T().subarray(_ / 1, _ / 1 + e);
  }
  let M = null;
  function w() {
    return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== u.memory.buffer) && (M = new DataView(u.memory.buffer)), M;
  }
  let R = null;
  function ki() {
    return (R === null || R.byteLength === 0) && (R = new Float32Array(u.memory.buffer)), R;
  }
  let C = null;
  function Bi() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(u.memory.buffer)), C;
  }
  let O = null;
  function Li() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(u.memory.buffer)), O;
  }
  let q = null;
  function Ei() {
    return (q === null || q.byteLength === 0) && (q = new Int8Array(u.memory.buffer)), q;
  }
  function g(_, e) {
    return qi(_ >>> 0, e);
  }
  let G = null;
  function Ri() {
    return (G === null || G.byteLength === 0) && (G = new Uint16Array(u.memory.buffer)), G;
  }
  let V = null;
  function Ci() {
    return (V === null || V.byteLength === 0) && (V = new Uint32Array(u.memory.buffer)), V;
  }
  let W = null;
  function T() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(u.memory.buffer)), W;
  }
  function t(_) {
    return A[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      u.__wbindgen_export3(c(n));
    }
  }
  let A = new Array(1024).fill(void 0);
  A.push(void 0, null, true, false);
  let k = A.length;
  function l(_) {
    return _ == null;
  }
  function S(_, e, n) {
    const b = {
      a: _,
      b: e,
      cnt: 1
    }, r = (...a) => {
      b.cnt++;
      const f = b.a;
      b.a = 0;
      try {
        return n(f, b.b, ...a);
      } finally {
        b.a = f, r._wbg_cb_unref();
      }
    };
    return r._wbg_cb_unref = () => {
      --b.cnt === 0 && (u.__wbindgen_export5(b.a, b.b), b.a = 0, J.unregister(b));
    }, J.register(r, b, b), r;
  }
  function h(_, e, n) {
    if (n === void 0) {
      const d = B.encode(_), i = e(d.length, 1) >>> 0;
      return T().subarray(i, i + d.length).set(d), x = d.length, i;
    }
    let b = _.length, r = e(b, 1) >>> 0;
    const a = T();
    let f = 0;
    for (; f < b; f++) {
      const d = _.charCodeAt(f);
      if (d > 127) break;
      a[r + f] = d;
    }
    if (f !== b) {
      f !== 0 && (_ = _.slice(f)), r = n(r, b, b = f + _.length * 3, 1) >>> 0;
      const d = T().subarray(r + f, r + b), i = B.encodeInto(_, d);
      f += i.written, r = n(r, b, f, 1) >>> 0;
    }
    return x = f, r;
  }
  function E(_) {
    const e = t(_);
    return Pi(_), e;
  }
  let U = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  U.decode();
  const Oi = 2146435072;
  let z = 0;
  function qi(_, e) {
    return z += e, z >= Oi && (U = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), U.decode(), z = e), U.decode(T().subarray(_, _ + e));
  }
  const B = new TextEncoder();
  "encodeInto" in B || (B.encodeInto = function(_, e) {
    const n = B.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let x = 0, u;
  function Gi(_) {
    u = _;
  }
  URL = globalThis.URL;
  const m = await n_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: $d,
      __wbg_next_71f2aa1cb3d1e37e: Lr,
      __wbg_done_89b2b13e91a60321: sn,
      __wbg_value_a5d5488a9589444a: ad,
      __wbg_then_16d107c451e9905d: lu,
      __wbg_new_227d7c05414eb861: mr,
      __wbg_stack_3b0d974bbf31e44f: P0,
      __wbg_error_a6fa202b58aa1cd3: Bn,
      __wbindgen_object_clone_ref: Kd,
      __wbg_fetch_fda7bc27c982b1f3: Rn,
      __wbg_get_507a50627bffa49b: kb,
      __wbg_length_370319915dc99107: _r,
      __wbg_offsetX_a9bf2ea7f0575ac9: Wr,
      __wbg_offsetY_10e5433a1bbd4c01: Ur,
      __wbg_postTask_e2439afddcdfbb55: bc,
      __wbg_catch_c1a60df4c30d76d3: ve,
      __wbg_requestFullscreen_3f16e43f398ce624: kc,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: db,
      __wbg_push_d2ae3af0c1217ae6: oc,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: Rb,
      __wbg_prototype_0d5bb2023db3bcfc: ac,
      __wbg_userAgentData_31b8f893e8977e94: rd,
      __wbg_brands_b7dcf262485c3e7c: oe,
      __wbg_brand_3bc196a43eceb8af: fe,
      __wbg_cancel_65f38182e2eeac5c: he,
      __wbg_animate_8f41e2f47c7d04ab: P_,
      __wbg_play_3997a1be51d27925: Xr,
      __wbg_requestFullscreen_b977a3a0697e883c: Bc,
      __wbg_Window_c7f91e3f80ae0a0e: c_,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: md,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: pd,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: _b,
      __wbg_scheduler_b35fe73ba70e89cc: Vc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: Lc,
      __wbg_scheduler_a17d41c9c822fc26: Gc,
      __wbg_performance_3fcf6e32a7e1ed0a: Kr,
      __wbg_now_e7c6795a7f81e10f: Rr,
      __wbg_set_dst_factor_ec7407f19be1aff9: ef,
      __wbg_set_operation_62ce44e1728c4047: io,
      __wbg_set_src_factor_9bfe84af9b7b5cac: Eo,
      __wbg_set_texture_1f64653a5d2d7b4d: Qo,
      __wbg_set_mip_level_f7ac79e8c54f59ad: Zf,
      __wbg_set_x_876d592971db129a: x0,
      __wbg_set_y_2b1f5ac0dd5586a5: y0,
      __wbg_set_z_ef005d82bc9d24e3: h0,
      __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: go,
      __wbg_set_aspect_4962514fe99e68e6: sa,
      __wbg_Window_afcc911b2f9c92e2: r_,
      __wbg_gpu_2ccc250735d24a2a: Cb,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: a_,
      __wbg_set_a_88262a42340d0b1c: na,
      __wbg_set_b_c47befe0af3261eb: la,
      __wbg_set_g_5983abfc46e0cf4e: xf,
      __wbg_set_r_c6f4c68f4804d655: po,
      __wbg_queue_adce34608fd0c893: lc,
      __wbg_set_power_preference_8fdca0b7af640d49: wo,
      __wbg_requestAdapter_2e6718811c735a57: Mc,
      __wbg_set_color_attachments_581fdb3310e4abfa: La,
      __wbg_set_label_17eb9fe3a02f62b0: Df,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: g0,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: Ua,
      __wbg_set_depth_load_op_511c513eab4e56a9: Ka,
      __wbg_set_depth_store_op_c89f33b39b43361c: Ya,
      __wbg_set_depth_read_only_7f41a74741c144ec: Na,
      __wbg_set_stencil_clear_value_42be608809151e2a: Co,
      __wbg_set_stencil_load_op_31838c036993098a: qo,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: Wo,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: Vo,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Xa,
      __wbg_set_query_set_41de86d2401aee04: mo,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: xa,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: tf,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: Yo,
      __wbg_beginRenderPass_aa22c432e793359a: E_,
      __wbg_set_width_9f685402c2cbee70: m0,
      __wbg_set_height_14335c4047cf9c1b: vf,
      __wbg_set_depth_or_array_layers_89371305ed0bd962: $a,
      __wbg_label_7ed42f25f841996b: Jb,
      __wbg_set_label_08d9be3e4719c226: Af,
      __wbg_finish_4d91de5e927dd13f: On,
      __wbg_finish_6e06b68ab68cd9f6: qn,
      __wbg_drawIndexed_d31913e79d58fbac: Sn,
      __wbg_setPipeline_c41bf46790f27f9e: Qc,
      __wbg_setBindGroup_268fd1714fff0ef5: jc,
      __wbg_setBindGroup_f0de6cb2c7dbfc2c: Kc,
      __wbg_setIndexBuffer_7f3cf667b4d71566: Nc,
      __wbg_setIndexBuffer_2531a9103450445e: $c,
      __wbg_setVertexBuffer_1e448859663dd400: Zc,
      __wbg_setVertexBuffer_7cf533d694e747f3: _a,
      __wbg_end_f99ebed53d4e198a: Fn,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: sb,
      __wbg_getCurrentTexture_20714d1bd9051cab: cb,
      __wbg_set_device_e275d1d4f3c9eb74: Ja,
      __wbg_set_format_815efd4dc4817bbb: wf,
      __wbg_set_usage_a137f82ca163b0a9: n0,
      __wbg_set_alpha_mode_df805952892caa9c: oa,
      __wbg_set_mode_9990b3393ba469ae: to,
      __wbg_set_tone_mapping_b3464f1baa4cff92: Ho,
      __wbg_set_view_formats_5797d2fff3c11808: d0,
      __wbg_configure_0e4789c0f6b35c8e: Ke,
      __wbg_new_typed_4148bd5ae72ab3f0: Mr,
      __wbg_set_required_limits_871ed33c68613dcb: yo,
      __wbg_set_required_features_1baf274a8669db60: xo,
      __wbg_set_label_60ad96c811e0d109: Tf,
      __wbg_requestDevice_ab46d0519ea1cc34: Tc,
      __wbg_set_size_f64_6bcd40704bf4cfdc: ko,
      __wbg_set_usage_b2a2935f37bf3d08: b0,
      __wbg_set_mapped_at_creation_81b586dc90a50347: Kf,
      __wbg_set_label_d010f237b26f2c55: Ef,
      __wbg_createBuffer_0726dd2ab09ea1d2: et,
      __wbg_set_address_mode_u_9e2695575a219e33: ra,
      __wbg_set_address_mode_v_f479b2e6cccbcac4: ca,
      __wbg_set_address_mode_w_46273e153230180d: aa,
      __wbg_set_compare_cd9b62cdb92eb580: Ea,
      __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: Uf,
      __wbg_set_lod_min_clamp_6d20c97916baeb93: zf,
      __wbg_set_mag_filter_b5adebc99cb938e1: jf,
      __wbg_set_min_filter_c72f17375e135f0a: Yf,
      __wbg_set_mipmap_filter_5bf66195a3639700: _o,
      __wbg_set_max_anisotropy_2beada0e2db62c45: Nf,
      __wbg_set_label_5ee7427342869829: Ff,
      __wbg_createSampler_c8ffb3c8d565f704: lt,
      __wbg_set_format_2c1414a817c213f8: uf,
      __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: Lo,
      __wbg_set_usage_ba5b0f8b333ab325: r0,
      __wbg_set_label_547d0d4aec39fbe9: Mf,
      __wbg_set_dimension_868eee80f4b90011: Za,
      __wbg_set_mip_level_count_776c8c218b65bc08: Jf,
      __wbg_set_sample_count_eb86a8b18545b54f: Do,
      __wbg_set_view_formats_4347dc8363331086: u0,
      __wbg_createTexture_1bac74c999b8a48e: ht,
      __wbg_set_entries_a12aca1e458b0456: bf,
      __wbg_set_layout_913d53c17194c989: Gf,
      __wbg_set_label_79387decda299036: Bf,
      __wbg_createBindGroup_655c6e6c0258530e: Ze,
      __wbg_set_code_b4f37f81f45b5b25: ka,
      __wbg_set_label_e3944e54881b8c50: Cf,
      __wbg_createShaderModule_2e44fc7677c6288b: mt,
      __wbg_set_label_72bb4f41ef0cb893: kf,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: nt,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: ya,
      __wbg_set_label_9556af8b5cda3c9d: Lf,
      __wbg_createPipelineLayout_2c8cd4528b06c108: ft,
      __wbg_set_module_d0e2098713606cae: no,
      __wbg_set_entry_point_e87e79251dd3144f: cf,
      __wbg_set_buffers_7d0d8f507699e956: Ma,
      __wbg_set_layout_50ab727f44b38f26: qf,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: Vf,
      __wbg_set_vertex_0be5d146f9ff6f36: a0,
      __wbg_set_label_e922700240417ab5: Of,
      __wbg_set_format_e52bdcca880d2c8e: lf,
      __wbg_set_depth_compare_0c8631eb2eae98e3: za,
      __wbg_set_depth_write_enabled_ce89750042940350: Ha,
      __wbg_set_depth_bias_d7cd16096242a657: Va,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: Ga,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: Wa,
      __wbg_set_compare_f36b34abfaa08ccb: Ra,
      __wbg_set_depth_fail_op_668155ae33d3c06f: ja,
      __wbg_set_fail_op_92f716dbc88b6973: ff,
      __wbg_set_pass_op_cf02fa088d6352a7: so,
      __wbg_set_stencil_back_85b22f1db5b1940a: Ro,
      __wbg_set_stencil_front_525526164a798a44: Oo,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: Go,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: Uo,
      __wbg_set_depth_stencil_97506c7bea4f53da: Qa,
      __wbg_set_module_f02e076ca7e7daf8: bo,
      __wbg_set_targets_c38bd200c836d66f: No,
      __wbg_set_entry_point_207540f042015ce5: rf,
      __wbg_set_fragment_8b780f00a0b0e6f3: mf,
      __wbg_set_count_069a4eac409bac55: Ca,
      __wbg_set_mask_70a8a59ce09e5997: $f,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: ua,
      __wbg_set_multisample_37ddafe88b5cd466: ro,
      __wbg_set_cull_mode_fc649853947a3d0c: qa,
      __wbg_set_front_face_28ffdf524eedce5b: pf,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: $o,
      __wbg_set_topology_da25f2cc5af203d2: Jo,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: t0,
      __wbg_set_primitive_43c23761a55b4088: lo,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: it,
      __wbg_set_entries_86a29dd6291c95e7: nf,
      __wbg_set_label_48e6b787d256f621: Pf,
      __wbg_createBindGroupLayout_49a7e2b3d076afcf: Je,
      __wbg_writeBuffer_8b5bd251a89198bc: yd,
      __wbg_set_bytes_per_row_d69b88eee3929c07: Fa,
      __wbg_set_rows_per_image_59a813ac5006e10e: Ao,
      __wbg_set_offset_f64_fa66068813376ca3: oo,
      __wbg_writeTexture_53ba204c494b042c: hd,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: zr,
      __wbg_submit_ce44115121cd166c: j0,
      __wbg_getMappedRange_d0bf3141224111b6: ub,
      __wbg_unmap_adaf93276fdf9aaf: _d,
      __wbg_destroy_fe937f756bf8df37: nn,
      __wbg_mapAsync_52b01fa9e8f765fd: cr,
      __wbg_set_dimension_e325282e613ca0a4: _f,
      __wbg_set_format_1fcaa7d60546b490: of,
      __wbg_set_aspect_0d453bca3d012f02: ga,
      __wbg_set_base_array_layer_f176bb9f1b37b342: ma,
      __wbg_set_array_layer_count_7312f0f31af94e7c: da,
      __wbg_set_base_mip_level_1df145d9f8db32a9: pa,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Hf,
      __wbg_set_label_e16e2dbe51349c7f: Rf,
      __wbg_set_usage_ddd42599bbba7779: c0,
      __wbg_createView_ceaf2f5881adbd34: At,
      __wbg_set_format_5d2f25cc93654ecc: gf,
      __wbg_set_offset_f64_28c24dc15000932e: ao,
      __wbg_set_shader_location_7e1832a74f912217: Fo,
      __wbg_set_attributes_7537844a7e6dafdc: wa,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: ia,
      __wbg_set_step_mode_a97bb24714da41a9: zo,
      __wbg_set_sample_type_c32e1dfff94e63eb: Po,
      __wbg_set_multisampled_7913fd7183272840: co,
      __wbg_set_view_dimension_4818d4c18ce5815e: o0,
      __wbg_set_binding_f74df3510792aba1: va,
      __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: Io,
      __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: So,
      __wbg_set_resource_5ae7b5e67924f234: vo,
      __wbg_set_write_mask_d45279e56abbfcb5: p0,
      __wbg_set_format_5ff53724ed6cedf2: sf,
      __wbg_set_blend_7493c2066c3e9970: Sa,
      __wbg_set_buffer_c3410572051920ba: Da,
      __wbg_set_load_op_99661da6c4eab9b0: Wf,
      __wbg_set_store_op_b5fdf672436f13f3: Ko,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: i0,
      __wbg_set_view_dimension_0df554032f1f3a85: f0,
      __wbg_set_format_533f9ffa7eef563d: df,
      __wbg_set_access_9a5092f05dc45fad: ba,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Ta,
      __wbg_set_offset_f64_89f0ce01a689839e: fo,
      __wbg_set_size_f64_8b8f6bba5d678162: Bo,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: ho,
      __wbg_unconfigure_0a07a0a40de8988d: pu,
      __wbg_set_alpha_bfd2df62e7bc581b: fa,
      __wbg_set_color_83aa977526e88cbb: Ba,
      __wbg_set_binding_155b0440b4307793: ha,
      __wbg_set_visibility_9570b037224c4cc2: s0,
      __wbg_set_type_ccf8472d40abcddf: _0,
      __wbg_set_sampler_c0e1258543a33bce: Mo,
      __wbg_set_external_texture_386483d8dd82ab56: af,
      __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: yf,
      __wbg_set_min_binding_size_f64_5005a6904cdf43da: Xf,
      __wbg_set_type_d09829f59932a0fc: e0,
      __wbg_set_buffer_ef7f75306cf663ed: Pa,
      __wbg_set_texture_9dcedde1bb31eda6: Xo,
      __wbg_set_storage_texture_939a097db4b18bd4: jo,
      __wbg_includes_78c9a3115b08eddc: Vb,
      __wbg_clearBufferuiv_df94a395d4915377: Ae,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: We,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: ze,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: je,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: Qe,
      __wbg_clientWaitSync_cf8e49f8ba228377: Le,
      __wbg_compressedTexSubImage2D_c1362291573c7268: Ve,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: He,
      __wbg_createQuery_047c7c524e4ac4f8: dt,
      __wbg_createSampler_70c8392d98896235: wt,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: It,
      __wbg_deleteQuery_0d1dcc4402a86ee1: Ot,
      __wbg_deleteSampler_0abb528566c4ab3b: Vt,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: ob,
      __wbg_getQueryParameter_919125495ccb17ca: yb,
      __wbg_getSyncParameter_d8f6c145657a3550: Pb,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: Mb,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Nb,
      __wbg_deleteSync_9b0e43580942a0f6: zt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Nt,
      __wbg_drawArraysInstanced_51b161548a3f10c4: ln,
      __wbg_drawBuffers_1c1ec9b292442a2a: yn,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: vn,
      __wbg_endQuery_a50f7fc49cfe56e9: Mn,
      __wbg_fenceSync_fe2cdba4a0d73679: Ln,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Nn,
      __wbg_getBufferSubData_11018928c908ac2c: Jn,
      __wbg_readBuffer_4271437a70aae481: mc,
      __wbg_readPixels_5f013a7d85b23800: pc,
      __wbg_readPixels_82c9dee754d58176: xc,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Ic,
      __wbg_texImage3D_ef16a1f721b3f908: X0,
      __wbg_texStorage2D_7f947efc63dac273: J0,
      __wbg_texStorage3D_f8f2e4b3386736f9: Z0,
      __wbg_texSubImage2D_d1af697e69f8a9e4: ru,
      __wbg_texSubImage2D_047380bb2660e4f9: _u,
      __wbg_texSubImage2D_6a376bfc3a31436b: tu,
      __wbg_texSubImage2D_98c43894eb217aa7: nu,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: Oc,
      __wbg_samplerParameteri_7b1b4091de49aabb: qc,
      __wbg_texImage2D_5abd8779d1d033c7: $0,
      __wbg_texImage2D_8d168171984f2a40: N0,
      __wbg_texImage3D_bdd9bebe42ed1f52: Q0,
      __wbg_texSubImage2D_5058af3d30a8e205: eu,
      __wbg_texSubImage2D_e107b4f88c19b920: au,
      __wbg_texSubImage2D_bed5e7a3cd81d409: bu,
      __wbg_texSubImage3D_8077e90ec309c414: du,
      __wbg_texSubImage3D_45e498ae6298998c: fu,
      __wbg_uniform1ui_cd7ad5581093b3df: Su,
      __wbg_uniform2fv_1b43656b33177d21: Iu,
      __wbg_uniform2iv_859048b9d60f46ae: Du,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: ou,
      __wbg_texSubImage3D_6cb6cfd732dad145: uu,
      __wbg_texSubImage3D_93b38c69acb735c8: iu,
      __wbg_texSubImage3D_c9e5a071796d412f: gu,
      __wbg_texSubImage3D_feebaf7f0f4594c6: su,
      __wbg_uniform2uiv_8a9cb3155271213b: Mu,
      __wbg_uniform4fv_674a247aeb15012d: Ou,
      __wbg_uniform4iv_d02934d7b94df609: Gu,
      __wbg_uniform3fv_8ecb5ebb510b7bce: Fu,
      __wbg_uniform3iv_09abae5eabd6b9d6: ku,
      __wbg_uniform3uiv_3c0b163732f5b8f0: Lu,
      __wbg_uniform4uiv_0d1a8ed214f10c31: Vu,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Nu,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: Qu,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: Xu,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: Wu,
      __wbg_uniformMatrix2fv_9284424cc6aac672: zu,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: ju,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: Ku,
      __wbg_uniformMatrix4fv_423b958042692150: Hu,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: ud,
      __wbg_activeTexture_d12958674e97a118: v_,
      __wbg_attachShader_8971266b4c9bc514: B_,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: R_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: q_,
      __wbg_bindFramebuffer_390311eff3896937: V_,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: z_,
      __wbg_bindTexture_28eff4bbd8aaab54: K_,
      __wbg_blendColor_eae0cd578a2c7d15: Y_,
      __wbg_blendEquation_455b8986ededabc0: Z_,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: H_,
      __wbg_blendFunc_114dc7056ccfeb8d: ne,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: te,
      __wbg_clear_dd06a0da4ce8e13f: Be,
      __wbg_clearDepth_ca9b22d41551b513: Pe,
      __wbg_clearStencil_58f2af46612bccae: Me,
      __wbg_colorMask_a4d164c2039b5731: Oe,
      __wbg_compileShader_9bdfd792722cf704: qe,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Ju,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: Zu,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: od,
      __wbg_copyTexSubImage2D_8daea651fc408645: Xe,
      __wbg_createBuffer_01568a9d930d90dd: _t,
      __wbg_createFramebuffer_de0d521f546e7534: ct,
      __wbg_createProgram_538c9777a4ac084f: ut,
      __wbg_createRenderbuffer_9d801bf44c314f44: st,
      __wbg_createShader_7d139f2d50f77365: xt,
      __wbg_createTexture_d13f98e0d3d912f4: vt,
      __wbg_cullFace_f1c75ae19b07eaf3: Ft,
      __wbg_deleteBuffer_1ca3ffe668a488e7: Bt,
      __wbg_getExtension_101c7e41de3e4d90: fb,
      __wbg_getParameter_d39f59581389af1b: gb,
      __wbg_getProgramInfoLog_d1ce570463a68779: lb,
      __wbg_getProgramParameter_c8d1154fbb3c0890: pb,
      __wbg_getShaderInfoLog_5cee2add982c7165: hb,
      __wbg_getShaderParameter_3394e75dcb97f380: Sb,
      __wbg_getSupportedExtensions_2a7458ec45e82560: Ab,
      __wbg_getUniformLocation_788a34295dd6fabe: Tb,
      __wbg_deleteFramebuffer_963cd69957209d37: Lt,
      __wbg_deleteProgram_132e191baa9fa84f: Ct,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: qt,
      __wbg_deleteShader_993edb4beb3c4d53: Ut,
      __wbg_deleteTexture_bdc2202d7a50dcea: Kt,
      __wbg_depthFunc_74a8f8acf8973c86: Jt,
      __wbg_depthMask_a644a67deced3257: _n,
      __wbg_depthRange_5e90d4d236280ff5: tn,
      __wbg_disable_1659d1b7d50c31e7: fn,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: an,
      __wbg_drawArrays_b0c59a6e158122f2: pn,
      __wbg_enable_28bbeed576131d1f: Dn,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: An,
      __wbg_finish_cbe7ec8675dd7705: Gn,
      __wbg_flush_e03c08da6863b5ab: Wn,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: jn,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: Kn,
      __wbg_frontFace_29ef7151de8b5ed9: Xn,
      __wbg_linkProgram_4e047fb3197a0348: er,
      __wbg_pixelStorei_c844cd0db4f1fde6: Qr,
      __wbg_polygonOffset_4eb460adf41db6cd: Jr,
      __wbg_renderbufferStorage_0a8de92542893819: Ac,
      __wbg_scissor_105e756596bc35df: Wc,
      __wbg_vertexAttribPointer_a8f0af57269c2067: dd,
      __wbg_viewport_affdf15c559df1e2: gd,
      __wbg_shaderSource_c3469dc2221dd528: S0,
      __wbg_stencilFuncSeparate_814300446c2969ef: R0,
      __wbg_stencilMask_9a844dc58a89992f: G0,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: C0,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: W0,
      __wbg_texParameteri_1fc451e0964fc91c: Y0,
      __wbg_uniform1f_62692c8fa8e7bf1e: xu,
      __wbg_uniform1i_7621f908f78177df: vu,
      __wbg_uniform4f_9ff60fc65b0ed726: Eu,
      __wbg_useProgram_49495850b446fa56: bd,
      __wbg_bufferSubData_bae930b21e9c1c48: se,
      __wbg_clearBufferfv_2e0f1a0ea56de859: Se,
      __wbg_clearBufferiv_0360269bf6e34c54: Ie,
      __wbg_beginQuery_042a1f99e870066c: L_,
      __wbg_bindBufferRange_f5c29912db0476e9: O_,
      __wbg_bindSampler_ce608f0de9d31acf: j_,
      __wbg_bindVertexArray_427eeac0c1764d8a: Q_,
      __wbg_blitFramebuffer_a1215976f663b058: re,
      __wbg_bufferData_3d4f29bdfb1fa46c: de,
      __wbg_bufferData_90ef588bac2be2f5: ie,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Kb,
      __wbg_cancelIdleCallback_b9e469156370a1e5: ye,
      __wbg_getComputedStyle_961681bdf7e518e8: eb,
      __wbg_matchMedia_9968278b31706f78: ar,
      __wbg_cancelAnimationFrame_086d6084925c4e06: xe,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Fc,
      __wbg_clearTimeout_8f80437be2324e09: Te,
      __wbg_requestIdleCallback_d292749bf33501af: Ec,
      __wbg_setTimeout_5ccd86968701f1ec: Hc,
      __wbg_setTimeout_cfa2cf195c3738db: Jc,
      __wbg_queueMicrotask_ed5b33385a53c3a9: wc,
      __wbg_navigator_99621db14b3f1099: wr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: rn,
      __wbg_document_179650d6cb13c263: gn,
      __wbg_location_c9a2271428996698: br,
      __wbg_instanceof_Window_05ba1ee4f6781663: $b,
      __wbg_visibilityState_301d0905e8103e21: wd,
      __wbg_activeElement_4bc99dc1a7094c27: y_,
      __wbg_fullscreenElement_9f50a5e63bb433a8: Hn,
      __wbg_createElement_fcbc0805de826d62: bt,
      __wbg_getElementById_1cbd8f06dbe8eb8e: ab,
      __wbg_querySelector_fd7d157ebe17cd16: ic,
      __wbg_querySelectorAll_7e98cbe256deaadd: dc,
      __wbg_body_40ec34e0a2931fe8: ae,
      __wbg_setPointerCapture_70025ca3fb7f26b9: Xc,
      __wbg_setAttribute_71039043be82d098: zc,
      __wbg_focus_2f77051f98540625: Un,
      __wbg_style_6657aed849e5d757: z0,
      __wbg_fetch_b5951fc96f52f786: En,
      __wbg_navigator_51379c10a84aeec9: sr,
      __wbg_uniform2iv_f84a24961c0cfcd0: Pu,
      __wbg_uniform3fv_95d1933ea1440725: Tu,
      __wbg_uniform3iv_a3a7008990fd84f0: Bu,
      __wbg_uniform4fv_4ca8c114ca3de099: Cu,
      __wbg_clear_53d71d234e14e4c1: ke,
      __wbg_clearDepth_8b5d226aae155082: De,
      __wbg_clearStencil_a66fe23df6313fc7: Fe,
      __wbg_colorMask_44ebb91cad2502f2: Ce,
      __wbg_compileShader_fc2e4b73240d4fd7: Ge,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: Ye,
      __wbg_createBuffer_2075765bde5035d5: tt,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: rt,
      __wbg_createProgram_118becaac3a20318: ot,
      __wbg_createRenderbuffer_71af5c0d615e9271: gt,
      __wbg_createShader_78bc8b7e9a88e1a8: pt,
      __wbg_createTexture_0ee0fa5f924f3d14: yt,
      __wbg_cullFace_62bbea3bef0e6b99: Mt,
      __wbg_deleteBuffer_08eb938e35c27967: kt,
      __wbg_deleteFramebuffer_d1a36e889b009344: Et,
      __wbg_deleteProgram_09bd45a51105b2f6: Rt,
      __wbg_deleteRenderbuffer_ca999f7883b777af: Gt,
      __wbg_deleteShader_3120790d36063afe: Wt,
      __wbg_deleteTexture_2b163b157ea1be24: jt,
      __wbg_depthFunc_455cfeb8a9d2fb4c: Ht,
      __wbg_depthMask_4bd6c73b1339d257: Zt,
      __wbg_depthRange_38b2287ffbea14fd: en,
      __wbg_uniform4iv_45ab52abcb3f882c: qu,
      __wbg_uniformMatrix2fv_769725d64641341f: Uu,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: $u,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Yu,
      __wbg_activeTexture_92b04d918019d603: h_,
      __wbg_attachShader_5f7f4077e124e23b: k_,
      __wbg_bindAttribLocation_94202d7a59ab7863: C_,
      __wbg_bindBuffer_a01497b1abdcdd9a: G_,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: W_,
      __wbg_bindRenderbuffer_75e8469e930840fa: U_,
      __wbg_bindTexture_9b04b1b7c00d4dd6: $_,
      __wbg_blendColor_793b560dc69ddd0b: X_,
      __wbg_blendEquation_f5c5272993f6cb01: _e,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: J_,
      __wbg_blendFunc_a854d7e4459150ba: be,
      __wbg_blendFuncSeparate_37156309688f8f88: ee,
      __wbg_disable_40c3975167c1ee07: on,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: cn,
      __wbg_drawArrays_676becae0149ed65: mn,
      __wbg_enable_611804c0ac1504ce: Pn,
      __wbg_enableVertexAttribArray_4c08219124740f14: In,
      __wbg_finish_126e6f2ac71e3096: Cn,
      __wbg_flush_db77b4a63d6b337d: Vn,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: zn,
      __wbg_linkProgram_d7c71c539c8c6a43: tr,
      __wbg_pixelStorei_2a93b18efde9acf8: Nr,
      __wbg_polygonOffset_eccb68e40a18f861: Zr,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: Dc,
      __wbg_scissor_573b844152316b8d: Uc,
      __wbg_shaderSource_4cf90af97621ff49: v0,
      __wbg_stencilFuncSeparate_35136c4e5153406f: E0,
      __wbg_stencilMask_1c99b79b516d12dd: q0,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: O0,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: V0,
      __wbg_texParameteri_9d0daa263d3a863f: H0,
      __wbg_framebufferTexture2D_e1fb64212fcda219: $n,
      __wbg_frontFace_fc6d98dafa42de87: Yn,
      __wbg_getParameter_039a5899307fab55: ib,
      __wbg_getProgramInfoLog_c4762e0513468a26: wb,
      __wbg_getProgramParameter_b9995b56c258ac86: mb,
      __wbg_getShaderInfoLog_bc236afe696c1283: vb,
      __wbg_getShaderParameter_cbcc0995e8e16214: Ib,
      __wbg_getUniformLocation_24ef46cdda2148ab: Fb,
      __wbg_uniform1f_b79d0c5667f9fb40: yu,
      __wbg_uniform1i_5830de6702add20a: hu,
      __wbg_uniform4f_b25e39808b830021: Ru,
      __wbg_useProgram_182d120fe476921b: nd,
      __wbg_vertexAttribPointer_b300c8e000cdac93: id,
      __wbg_viewport_e8a16ca4a5085e5f: sd,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: cu,
      __wbg_uniform2fv_948dab6a82b428ac: Au,
      __wbg_bufferData_ce4f44d56e9ddab5: ge,
      __wbg_bufferData_073a7c6abef7a55f: ue,
      __wbg_bufferSubData_ce9854d3d337e2cf: we,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: Ue,
      __wbg_readPixels_c7861e25836bf57b: yc,
      __wbg_texImage2D_3813406af5bf54c8: K0,
      __wbg_new_5394f65338077341: hr,
      __wbg_inlineSize_3c8412828bef21eb: Ub,
      __wbg_disconnect_39bfdcb35b1fc7b9: un,
      __wbg_blockSize_5af477b962b2b031: ce,
      __wbg_observe_f27242eadc2ebd47: qr,
      __wbg_observe_615bef91ee28c925: Cr,
      __wbg_unobserve_41a4f85162f1fb18: ed,
      __wbg_isIntersecting_fc6d9529a49c5d62: Qb,
      __wbg_log_d267660666346fb3: rr,
      __wbg_info_eadbe775a8e2e9eb: Wb,
      __wbg_warn_b1370d804fa3e259: ld,
      __wbg_debug_87fd9b1a625b7efb: Tt,
      __wbg_error_744744ff0c9861e6: Tn,
      __wbg_error_7ed559cd7146b49d: kn,
      __wbg_ctrlKey_50bd8324959ca786: Pt,
      __wbg_shiftKey_9f797da486b2ade8: A0,
      __wbg_altKey_f3e24c4c9cfcf271: D_,
      __wbg_metaKey_f934f09e37889d70: dr,
      __wbg_button_f6a9a7b725f1838e: le,
      __wbg_buttons_d8acd46cf8f40ae9: me,
      __wbg_movementX_87e39021f3fce8b8: ir,
      __wbg_movementY_f6f63087e2248fa9: gr,
      __wbg_set_credentials_bb34a40189e3b43b: Oa,
      __wbg_set_body_029f2d171e0a005f: Ia,
      __wbg_set_mode_66c79886ad78fc05: eo,
      __wbg_set_method_5532d59b92d76467: Qf,
      __wbg_set_signal_c4ef8faddb4c1446: To,
      __wbg_set_headers_9c61d123c3ee1f10: hf,
      __wbg_set_box_223b9bc0b7f548f6: Aa,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: Qn,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: wn,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: N_,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: hn,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: St,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: $t,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: fd,
      __wbg_set_onmessage_d511b70365304094: uo,
      __wbg_set_width_49ac9b7d914afc85: w0,
      __wbg_getPropertyValue_dc6b061239dad6f1: xb,
      __wbg_set_height_bbeef8f354041577: If,
      __wbg_removeProperty_70da952bc1b493fa: Sc,
      __wbg_close_3423cc7dafc477bb: Ee,
      __wbg_new_25e75d1f0df4d87a: pr,
      __wbg_setProperty_e4e51b1b1d681d15: Yc,
      __wbg_postMessage_b80f20949a4b4f55: tc,
      __wbg_start_d0cdf16ff965b3f3: M0,
      __wbg_getContext_fd298c901058eb31: rb,
      __wbg_getContext_7476e39fa008047e: tb,
      __wbg_appendChild_f553e8704c4f14a6: M_,
      __wbg_contains_7189b09a477442a6: $e,
      __wbg_signal_dad7cb35193abd31: D0,
      __wbg_addEventListener_d85450ee1320c989: S_,
      __wbg_new_4339b2a2675a03e3: yr,
      __wbg_abort_8bae0f33e7833997: x_,
      __wbg_altKey_50f830d1793a2eea: A_,
      __wbg_removeEventListener_a3f23c70077bdcc1: hc,
      __wbg_ctrlKey_2e52816fa7160097: Dt,
      __wbg_shiftKey_9bcb8bdd60c2f152: I0,
      __wbg_metaKey_d961c7572a9f84f5: ur,
      __wbg_location_8f24df2c257fb974: nr,
      __wbg_repeat_4e131e99bff9b9f4: Pc,
      __wbg_key_803dca86cdcfa8dd: Hb,
      __wbg_code_89c999e407c79eef: Re,
      __wbg_createObjectURL_416e527781e6fd6d: at,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: Cc,
      __wbg_set_type_8ce203e412e28cf6: Zo,
      __wbg_width_20c45c895834b83f: xd,
      __wbg_height_9f27216001e3c804: Gb,
      __wbg_set_width_8e30d010cd66830d: l0,
      __wbg_set_height_7d9d8f892e6964c6: Sf,
      __wbg_getContext_e79ddf6a9cb3cc76: bb,
      __wbg_getContext_ca12bb65aab778a4: nb,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: zb,
      __wbg_origin_ed66c06e67ad2049: jr,
      __wbg_media_40cbd26ab34df71f: or,
      __wbg_matches_978994974df1e85b: fr,
      __wbg_addListener_b5b7f95360b22984: I_,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: uc,
      __wbg_removeListener_768e1e787e1d4b2e: vc,
      __wbg_deltaX_5d829ffba565ed10: Xt,
      __wbg_deltaY_6cfce8f8da250c23: Yt,
      __wbg_deltaMode_d869228efd74f393: Qt,
      __wbg_new_0d809930cd1354c6: lr,
      __wbg_port1_dabba0a56576e47e: _c,
      __wbg_port2_d05676aee003eedc: ec,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: xn,
      __wbg_getSupportedProfiles_90a4f330938d0241: Db,
      __wbg_new_f1a34223ddbe3f7d: Dr,
      __wbg_append_01c74e5c6b58aa64: F_,
      __wbg_pointerId_ea33d2695be12e7f: Yr,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: kr,
      __wbg_pressure_9a7845d9744ae9f4: rc,
      __wbg_pointerType_d5e932608aa61bb6: Hr,
      __wbg_getCoalescedEvents_366947e5550da21b: Zn,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Ne,
      __wbg_now_390768da5ee9e776: Er,
      __wbg_userAgent_0558f0ac642f7771: cd,
      __wbg_new_e0bd7540d9834af6: Ar,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: bn,
      __wbg_disconnect_491a6bfd82cdd887: dn,
      __wbg_observe_c3834a3e4cde3e64: Or,
      __wbg_new_8f0c2d11e48a4727: vr,
      __wbg_postMessage_ef2dbf5e8c8ebffc: nc,
      __wbg_preventDefault_b64888c857500682: cc,
      __wbg_url_abdb8fb08377f8c0: td,
      __wbg_arrayBuffer_3b637f0fa65c5351: T_,
      __wbg_text_d3a29f7525a132c3: wu,
      __wbg_get_b2053e9bfdf3ca8e: Lb,
      __wbg_status_c45b3b9b3033184a: L0,
      __wbg_persisted_e508d4d322115185: $r,
      __wbg_headers_cf9c80f30e2a4eff: qb,
      __wbg_new_with_str_and_init_d95cbe11ce28e65e: Tr,
      __wbg_instanceof_Response_c8b64b2256f01bec: jb,
      __wbg_resolve_2191a4dfe481c25b: Rc,
      __wbg_then_6ec10ae38b3e92f7: mu,
      __wbg_iterator_6f722e4a93058b71: Yb,
      __wbg_get_c7eb1f358a7654df: Eb,
      __wbg_call_8a2dd23819f8a60a: pe,
      __wbg_next_6dbf2c0ac8cde20f: Br,
      __wbg_new_da52cf8fe3429cb2: Ir,
      __wbg_new_32b398fb48b6d94a: xr,
      __wbg_of_85f52f8b6491a7ca: Vr,
      __wbg_of_5f1b88183ddb5d94: Gr,
      __wbg_is_7b9d0b289033c7de: Xb,
      __wbg_length_1f0964f4a5e2c6d8: Zb,
      __wbg_prototypesetcall_4770620bbe4688a0: fc,
      __wbg_set_61e45ae8061eca11: ea,
      __wbg_new_cd45aabdf6073e84: Sr,
      __wbg_new_from_slice_77cdfb7977362f3c: Pr,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: Fr,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: T0,
      __wbg_static_accessor_SELF_146583524fe1469b: k0,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: F0,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: B0,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: gc,
      __wbg_queueMicrotask_6a09b7bc46549209: sc,
      __wbg_get_78f252d074a84d0b: Bb,
      __wbg_has_8374cf06984d8bfc: Ob,
      __wbg_set_8535240470bf2500: ta,
      __wbg_stringify_b54333f60f1e4dad: U0,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: w_,
      __wbg___wbindgen_throw_344f42d3211c4765: m_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: d_,
      __wbg___wbindgen_is_object_a27215656b807791: i_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: g_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: l_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: f_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: u_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: s_,
      __wbg__wbg_cb_unref_fffb441def202758: p_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: o_,
      __wbindgen_cast_0000000000000001: vd,
      __wbindgen_cast_0000000000000002: Sd,
      __wbindgen_cast_0000000000000003: Id,
      __wbindgen_cast_0000000000000004: Ad,
      __wbindgen_cast_0000000000000005: Dd,
      __wbindgen_cast_0000000000000006: Pd,
      __wbindgen_cast_0000000000000007: Md,
      __wbindgen_cast_0000000000000008: Fd,
      __wbindgen_cast_0000000000000009: Td,
      __wbindgen_cast_000000000000000a: kd,
      __wbindgen_cast_000000000000000b: Bd,
      __wbindgen_cast_000000000000000c: Ld,
      __wbindgen_cast_000000000000000d: Ed,
      __wbindgen_cast_000000000000000e: Rd,
      __wbindgen_cast_000000000000000f: Cd,
      __wbindgen_cast_0000000000000010: Od,
      __wbindgen_cast_0000000000000011: qd,
      __wbindgen_cast_0000000000000012: Gd,
      __wbindgen_cast_0000000000000013: Vd,
      __wbindgen_cast_0000000000000014: Wd,
      __wbindgen_cast_0000000000000015: Ud,
      __wbindgen_cast_0000000000000016: zd,
      __wbindgen_cast_0000000000000017: jd
    }
  }, b_), Vi = m.memory, Wi = m.main, Ui = m.run_web, zi = m.__abort_handler, ji = m.__instance_terminated, Ki = m.__wasm_bindgen_func_elem_11891, $i = m.__wasm_bindgen_func_elem_3310, Ni = m.__wasm_bindgen_func_elem_3896, Qi = m.__wasm_bindgen_func_elem_3896_11, Xi = m.__wasm_bindgen_func_elem_3896_12, Yi = m.__wasm_bindgen_func_elem_3309, Hi = m.__wasm_bindgen_func_elem_3309_3, Ji = m.__wasm_bindgen_func_elem_3309_4, Zi = m.__wasm_bindgen_func_elem_3309_5, _g = m.__wasm_bindgen_func_elem_3309_7, eg = m.__wasm_bindgen_func_elem_3309_8, tg = m.__wasm_bindgen_func_elem_3309_9, ng = m.__wasm_bindgen_func_elem_3309_10, bg = m.__wasm_bindgen_func_elem_3311, rg = m.__wbindgen_export, cg = m.__wbindgen_export2, ag = m.__wbindgen_export3, fg = m.__wbindgen_export4, og = m.__wbindgen_export5, ug = m.__wbindgen_add_to_stack_pointer, t_ = m.__wbindgen_start, dg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: zi,
    __instance_terminated: ji,
    __wasm_bindgen_func_elem_11891: Ki,
    __wasm_bindgen_func_elem_3309: Yi,
    __wasm_bindgen_func_elem_3309_10: ng,
    __wasm_bindgen_func_elem_3309_3: Hi,
    __wasm_bindgen_func_elem_3309_4: Ji,
    __wasm_bindgen_func_elem_3309_5: Zi,
    __wasm_bindgen_func_elem_3309_7: _g,
    __wasm_bindgen_func_elem_3309_8: eg,
    __wasm_bindgen_func_elem_3309_9: tg,
    __wasm_bindgen_func_elem_3310: $i,
    __wasm_bindgen_func_elem_3311: bg,
    __wasm_bindgen_func_elem_3896: Ni,
    __wasm_bindgen_func_elem_3896_11: Qi,
    __wasm_bindgen_func_elem_3896_12: Xi,
    __wbindgen_add_to_stack_pointer: ug,
    __wbindgen_export: rg,
    __wbindgen_export2: cg,
    __wbindgen_export3: ag,
    __wbindgen_export4: fg,
    __wbindgen_export5: og,
    __wbindgen_start: t_,
    main: Wi,
    memory: Vi,
    run_web: Ui
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Gi(dg);
  t_();
})();
export {
  __tla,
  gg as run_web
};
