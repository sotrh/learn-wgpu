import { _ as n_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Bi;
let __tla = (async () => {
  const b_ = "/learn-wgpu/assets/demo_bg-CzYo0K_E.wasm";
  Bi = function() {
    d.run_web();
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
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function o_(_, e) {
    const n = j(t(e)), b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function u_(_) {
    return typeof t(_) == "function";
  }
  function d_(_) {
    return t(_) === null;
  }
  function i_(_) {
    return typeof t(_) == "string";
  }
  function g_(_) {
    return t(_) === void 0;
  }
  function s_(_, e) {
    const n = t(e), b = typeof n == "number" ? n : void 0;
    l().setFloat64(_ + 8, s(b) ? 0 : b, true), l().setInt32(_ + 0, !s(b), true);
  }
  function w_(_, e) {
    const n = t(e), b = typeof n == "string" ? n : void 0;
    var r = s(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
  }
  function l_(_, e) {
    throw new Error(w(_, e));
  }
  function m_(_) {
    t(_)._wbg_cb_unref();
  }
  function p_(_) {
    t(_).abort();
  }
  function x_(_) {
    const e = t(_).activeElement;
    return s(e) ? 0 : c(e);
  }
  function y_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function h_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function v_() {
    return o(function(_, e, n, b) {
      t(_).addEventListener(w(e, n), t(b));
    }, arguments);
  }
  function S_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function I_(_) {
    return t(_).altKey;
  }
  function A_(_) {
    return t(_).altKey;
  }
  function D_(_, e, n) {
    const b = t(_).animate(t(e), t(n));
    return c(b);
  }
  function P_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function M_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function F_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function T_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function k_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function B_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, w(b, r));
  }
  function L_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, w(b, r));
  }
  function E_(_, e, n, b, r, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(b), r, a);
  }
  function C_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function O_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function R_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function q_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function j_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function K_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function $_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function N_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function Q_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function X_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function Y_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function H_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function J_(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function Z_(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function _e(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function ee(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function te(_, e, n, b, r, a, f, u, i, g, p) {
    t(_).blitFramebuffer(e, n, b, r, a, f, u, i, g >>> 0, p >>> 0);
  }
  function ne(_) {
    return t(_).blockSize;
  }
  function be(_) {
    const e = t(_).body;
    return s(e) ? 0 : c(e);
  }
  function re(_, e) {
    const n = t(e).brand, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function ce(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ae(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function fe(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function oe(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function ue(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function de(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function ie(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function ge(_) {
    return t(_).button;
  }
  function se(_) {
    return t(_).buttons;
  }
  function we() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function le(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function me(_) {
    t(_).cancel();
  }
  function pe(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function xe(_, e, n, b, r) {
    t(_).clearBufferfv(e >>> 0, n, x(b, r));
  }
  function ye(_, e, n, b, r) {
    t(_).clearBufferiv(e >>> 0, n, D(b, r));
  }
  function he(_, e, n, b, r) {
    t(_).clearBufferuiv(e >>> 0, n, F(b, r));
  }
  function ve(_, e) {
    t(_).clearDepth(e);
  }
  function Se(_, e) {
    t(_).clearDepth(e);
  }
  function Ie(_, e) {
    t(_).clearStencil(e);
  }
  function Ae(_, e) {
    t(_).clearStencil(e);
  }
  function De(_, e) {
    t(_).clearTimeout(e);
  }
  function Pe(_, e) {
    t(_).clear(e >>> 0);
  }
  function Me(_, e) {
    t(_).clear(e >>> 0);
  }
  function Fe(_, e, n, b) {
    return t(_).clientWaitSync(t(e), n >>> 0, b >>> 0);
  }
  function Te(_) {
    t(_).close();
  }
  function ke(_, e) {
    const n = t(e).code, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function Be(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Le(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Ee(_, e) {
    t(_).compileShader(t(e));
  }
  function Ce(_, e) {
    t(_).compileShader(t(e));
  }
  function Oe(_, e, n, b, r, a, f, u, i, g) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i, g);
  }
  function Re(_, e, n, b, r, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, t(i));
  }
  function qe(_, e, n, b, r, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, t(i));
  }
  function Ge(_, e, n, b, r, a, f, u, i, g, p, v) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p, v);
  }
  function Ve(_, e, n, b, r, a, f, u, i, g, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, t(p));
  }
  function We() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function Ue(_, e) {
    return t(_).contains(t(e));
  }
  function ze(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function je(_, e, n, b, r, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, b, r, a);
  }
  function Ke(_, e, n, b, r, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, u, i);
  }
  function $e(_, e, n, b, r, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, u, i);
  }
  function Ne(_, e, n, b, r, a, f, u, i, g) {
    t(_).copyTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, g);
  }
  function Qe() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return c(n);
    }, arguments);
  }
  function Xe(_, e) {
    const n = t(_).createBindGroup(t(e));
    return c(n);
  }
  function Ye(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function He() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return c(n);
    }, arguments);
  }
  function Je(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function Ze(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function _t() {
    return o(function(_, e, n) {
      const b = t(_).createElement(w(e, n));
      return c(b);
    }, arguments);
  }
  function et(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function tt(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function nt() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
      l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function bt(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function rt(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function ct(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function at(_) {
    const e = t(_).createQuery();
    return s(e) ? 0 : c(e);
  }
  function ft() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function ot(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function ut(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function dt(_) {
    const e = t(_).createSampler();
    return s(e) ? 0 : c(e);
  }
  function it(_, e) {
    const n = t(_).createSampler(t(e));
    return c(n);
  }
  function gt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function st(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function wt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function lt(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function mt() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return c(n);
    }, arguments);
  }
  function pt(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function xt(_) {
    const e = t(_).createVertexArrayOES();
    return s(e) ? 0 : c(e);
  }
  function yt(_) {
    const e = t(_).createVertexArray();
    return s(e) ? 0 : c(e);
  }
  function ht() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function vt(_) {
    return t(_).ctrlKey;
  }
  function St(_) {
    return t(_).ctrlKey;
  }
  function It(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function At(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Dt(_) {
    console.debug(t(_));
  }
  function Pt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Mt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Ft(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Tt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function kt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Bt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Lt(_, e) {
    t(_).deleteQuery(t(e));
  }
  function Et(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Ct(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Ot(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Rt(_, e) {
    t(_).deleteShader(t(e));
  }
  function qt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Gt(_, e) {
    t(_).deleteSync(t(e));
  }
  function Vt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Wt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Ut(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function zt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function jt(_) {
    return t(_).deltaMode;
  }
  function Kt(_) {
    return t(_).deltaX;
  }
  function $t(_) {
    return t(_).deltaY;
  }
  function Nt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Qt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Xt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Yt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Ht(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Jt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Zt(_) {
    t(_).destroy();
  }
  function _n(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function en(_) {
    return t(_).devicePixelRatio;
  }
  function tn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function nn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function bn(_, e) {
    t(_).disable(e >>> 0);
  }
  function rn(_, e) {
    t(_).disable(e >>> 0);
  }
  function cn(_) {
    t(_).disconnect();
  }
  function an(_) {
    t(_).disconnect();
  }
  function fn(_) {
    const e = t(_).document;
    return s(e) ? 0 : c(e);
  }
  function on(_, e, n, b, r) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, b, r);
  }
  function un(_, e, n, b, r) {
    t(_).drawArraysInstanced(e >>> 0, n, b, r);
  }
  function dn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function gn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function sn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function wn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function ln(_, e, n, b, r, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, b >>> 0, r, a);
  }
  function mn(_, e, n, b, r, a) {
    t(_).drawElementsInstanced(e >>> 0, n, b >>> 0, r, a);
  }
  function pn(_, e, n, b, r, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, b >>> 0, r, a >>> 0);
  }
  function xn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function yn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function hn(_, e) {
    t(_).enable(e >>> 0);
  }
  function vn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Sn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function In(_) {
    t(_).end();
  }
  function An(_) {
    console.error(t(_));
  }
  function Dn(_, e) {
    console.error(t(_), t(e));
  }
  function Pn(_, e) {
    let n, b;
    try {
      n = _, b = e, console.error(w(_, e));
    } finally {
      d.__wbindgen_export4(n, b, 1);
    }
  }
  function Mn(_, e, n) {
    const b = t(_).fenceSync(e >>> 0, n >>> 0);
    return s(b) ? 0 : c(b);
  }
  function Fn(_) {
    t(_).finish();
  }
  function Tn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function kn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function Bn(_) {
    t(_).finish();
  }
  function Ln(_) {
    t(_).flush();
  }
  function En(_) {
    t(_).flush();
  }
  function Cn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function On(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function Rn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function qn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Gn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Vn(_, e, n, b, r, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(b), r, a);
  }
  function Wn(_, e, n, b, r, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(b), r, a, f);
  }
  function Un(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function zn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function jn(_) {
    const e = t(_).fullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Kn(_, e, n, b) {
    t(_).getBufferSubData(e >>> 0, n, t(b));
  }
  function $n(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function Nn(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function Qn() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return s(n) ? 0 : c(n);
    }, arguments);
  }
  function Xn() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(w(e, n), t(b));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Yn() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(w(e, n), t(b));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Hn() {
    return o(function(_, e, n) {
      const b = t(_).getContext(w(e, n));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Jn() {
    return o(function(_, e, n) {
      const b = t(_).getContext(w(e, n));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Zn() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function _b(_, e, n) {
    const b = t(_).getElementById(w(e, n));
    return s(b) ? 0 : c(b);
  }
  function eb() {
    return o(function(_, e, n) {
      const b = t(_).getExtension(w(e, n));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function tb() {
    return o(function(_, e, n) {
      const b = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(b);
    }, arguments);
  }
  function nb() {
    return o(function(_, e, n) {
      const b = t(_).getMappedRange(e, n);
      return c(b);
    }, arguments);
  }
  function bb(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function rb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function cb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function ab(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 102) - 1;
  }
  function fb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = s(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
  }
  function ob(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = s(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
  }
  function ub(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function db(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function ib() {
    return o(function(_, e, n, b) {
      const r = t(e).getPropertyValue(w(n, b)), a = h(r, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function gb(_, e, n) {
    const b = t(_).getQueryParameter(t(e), n >>> 0);
    return c(b);
  }
  function sb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = s(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
  }
  function wb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = s(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
  }
  function lb(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function mb(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function pb(_) {
    const e = t(_).getSupportedExtensions();
    return s(e) ? 0 : c(e);
  }
  function xb(_) {
    const e = t(_).getSupportedProfiles();
    return s(e) ? 0 : c(e);
  }
  function yb(_, e, n) {
    const b = t(_).getSyncParameter(t(e), n >>> 0);
    return c(b);
  }
  function hb(_, e, n, b) {
    return t(_).getUniformBlockIndex(t(e), w(n, b));
  }
  function vb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), w(n, b));
    return s(r) ? 0 : c(r);
  }
  function Sb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), w(n, b));
    return s(r) ? 0 : c(r);
  }
  function Ib(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Ab(_, e) {
    const n = t(_)[e >>> 0];
    return s(n) ? 0 : c(n);
  }
  function Db(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Pb(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function Mb(_) {
    return t(_).height;
  }
  function Fb(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Tb(_) {
    console.info(t(_));
  }
  function kb(_) {
    return t(_).inlineSize;
  }
  function Bb(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Lb(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Eb(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Cb() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Ob(_) {
    return t(_).isIntersecting;
  }
  function Rb(_, e) {
    return Object.is(t(_), t(e));
  }
  function qb(_, e) {
    const n = t(e).key, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function Gb(_, e) {
    const n = t(e).label, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function Vb(_) {
    return t(_).length;
  }
  function Wb(_) {
    return t(_).length;
  }
  function Ub(_, e) {
    t(_).linkProgram(t(e));
  }
  function zb(_, e) {
    t(_).linkProgram(t(e));
  }
  function jb(_) {
    return t(_).location;
  }
  function Kb(_) {
    console.log(t(_));
  }
  function $b(_, e, n, b) {
    const r = t(_).mapAsync(e >>> 0, n, b);
    return c(r);
  }
  function Nb() {
    return o(function(_, e, n) {
      const b = t(_).matchMedia(w(e, n));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Qb(_) {
    return t(_).matches;
  }
  function Xb(_, e) {
    const n = t(e).media, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function Yb(_) {
    return t(_).metaKey;
  }
  function Hb(_) {
    return t(_).metaKey;
  }
  function Jb(_) {
    return t(_).movementX;
  }
  function Zb(_) {
    return t(_).movementY;
  }
  function _r(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function er(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function tr() {
    const _ = new Error();
    return c(_);
  }
  function nr() {
    return o(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function br() {
    const _ = new Array();
    return c(_);
  }
  function rr() {
    return o(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function cr() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function ar() {
    return o(function(_, e) {
      const n = new Worker(w(_, e));
      return c(n);
    }, arguments);
  }
  function fr() {
    const _ = new Object();
    return c(_);
  }
  function or() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function ur() {
    return o(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function dr() {
    const _ = new Object();
    return c(_);
  }
  function ir(_, e, n) {
    const b = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(b);
  }
  function gr() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function sr(_) {
    return t(_).now();
  }
  function wr(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function lr(_, e) {
    t(_).observe(t(e));
  }
  function mr(_, e) {
    t(_).observe(t(e));
  }
  function pr(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function xr(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function yr(_) {
    return t(_).offsetX;
  }
  function hr(_) {
    return t(_).offsetY;
  }
  function vr(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function Sr(_) {
    const e = t(_).performance;
    return c(e);
  }
  function Ir(_) {
    return t(_).persisted;
  }
  function Ar(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Dr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Pr(_) {
    t(_).play();
  }
  function Mr(_) {
    return t(_).pointerId;
  }
  function Fr(_, e) {
    const n = t(e).pointerType, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function Tr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function kr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Br(_) {
    const e = t(_).port1;
    return c(e);
  }
  function Lr(_) {
    const e = t(_).port2;
    return c(e);
  }
  function Er() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function Cr() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function Or(_, e, n) {
    const b = t(_).postTask(t(e), t(n));
    return c(b);
  }
  function Rr(_) {
    return t(_).pressure;
  }
  function qr(_) {
    t(_).preventDefault();
  }
  function Gr() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function Vr(_, e, n) {
    Uint8Array.prototype.set.call(U(_, e), t(n));
  }
  function Wr(_, e) {
    return t(_).push(t(e));
  }
  function Ur(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function zr() {
    return o(function(_, e, n) {
      const b = t(_).querySelectorAll(w(e, n));
      return c(b);
    }, arguments);
  }
  function jr() {
    return o(function(_, e, n) {
      const b = t(_).querySelector(w(e, n));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Kr(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function $r(_) {
    queueMicrotask(t(_));
  }
  function Nr(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function Qr(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Xr(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Yr() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Hr() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, u);
    }, arguments);
  }
  function Jr() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Zr() {
    return o(function(_, e, n, b) {
      t(_).removeEventListener(w(e, n), t(b));
    }, arguments);
  }
  function _c() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function ec() {
    return o(function(_, e, n, b) {
      const r = t(e).removeProperty(w(n, b)), a = h(r, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function tc(_, e, n, b, r, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, b >>> 0, r, a);
  }
  function nc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function bc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function rc(_) {
    return t(_).repeat;
  }
  function cc(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function ac() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function fc(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function oc(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function uc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function dc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function ic() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function gc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function sc() {
    return o(function(_, e) {
      URL.revokeObjectURL(w(_, e));
    }, arguments);
  }
  function wc(_, e, n, b) {
    t(_).samplerParameterf(t(e), n >>> 0, b);
  }
  function lc(_, e, n, b) {
    t(_).samplerParameteri(t(e), n >>> 0, b);
  }
  function mc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function pc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function xc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function yc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function hc() {
    return o(function(_, e, n, b, r) {
      t(_).setAttribute(w(e, n), w(b, r));
    }, arguments);
  }
  function vc() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), F(b, r), a, f >>> 0);
    }, arguments);
  }
  function Sc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function Ic(_, e, n, b) {
    t(_).setIndexBuffer(t(e), N[n], b);
  }
  function Ac(_, e, n, b, r) {
    t(_).setIndexBuffer(t(e), N[n], b, r);
  }
  function Dc(_, e) {
    t(_).setPipeline(t(e));
  }
  function Pc() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function Mc() {
    return o(function(_, e, n, b, r) {
      t(_).setProperty(w(e, n), w(b, r));
    }, arguments);
  }
  function Fc() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function Tc() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function kc(_, e, n, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), b);
  }
  function Bc(_, e, n, b, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), b, r);
  }
  function Lc(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function Ec() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function Cc(_, e) {
    t(_).a = e;
  }
  function Oc(_, e) {
    t(_).access = Gd[e];
  }
  function Rc(_, e) {
    t(_).addressModeU = K[e];
  }
  function qc(_, e) {
    t(_).addressModeV = K[e];
  }
  function Gc(_, e) {
    t(_).addressModeW = K[e];
  }
  function Vc(_, e) {
    t(_).alpha = t(e);
  }
  function Wc(_, e) {
    t(_).alphaMode = kd[e];
  }
  function Uc(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function zc(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function jc(_, e) {
    t(_).arrayStride = e;
  }
  function Kc(_, e) {
    t(_).aspect = e_[e];
  }
  function $c(_, e) {
    t(_).aspect = e_[e];
  }
  function Nc(_, e, n) {
    t(_).attributes = I(e, n);
  }
  function Qc(_, e) {
    t(_).b = e;
  }
  function Xc(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Yc(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Hc(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Jc(_, e, n) {
    t(_).bindGroupLayouts = I(e, n);
  }
  function Zc(_, e) {
    t(_).binding = e >>> 0;
  }
  function _a(_, e) {
    t(_).binding = e >>> 0;
  }
  function ea(_, e) {
    t(_).blend = t(e);
  }
  function ta(_, e) {
    t(_).box = jd[e];
  }
  function na(_, e) {
    t(_).buffer = t(e);
  }
  function ba(_, e) {
    t(_).buffer = t(e);
  }
  function ra(_, e, n) {
    t(_).buffers = I(e, n);
  }
  function ca(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function aa(_, e) {
    t(_).clearValue = t(e);
  }
  function fa(_, e, n) {
    t(_).code = w(e, n);
  }
  function oa(_, e) {
    t(_).color = t(e);
  }
  function ua(_, e, n) {
    t(_).colorAttachments = I(e, n);
  }
  function da(_, e) {
    t(_).compare = $[e];
  }
  function ia(_, e) {
    t(_).compare = $[e];
  }
  function ga(_, e) {
    t(_).count = e >>> 0;
  }
  function sa(_, e) {
    t(_).cullMode = Ld[e];
  }
  function wa(_, e) {
    t(_).depthBiasClamp = e;
  }
  function la(_, e) {
    t(_).depthBias = e;
  }
  function ma(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function pa(_, e) {
    t(_).depthClearValue = e;
  }
  function xa(_, e) {
    t(_).depthCompare = $[e];
  }
  function ya(_, e) {
    t(_).depthFailOp = X[e];
  }
  function ha(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function va(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function Sa(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function Ia(_, e) {
    t(_).depthStencil = t(e);
  }
  function Aa(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function Da(_, e) {
    t(_).depthStoreOp = Y[e];
  }
  function Pa(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Ma(_, e) {
    t(_).device = t(e);
  }
  function Fa(_, e) {
    t(_).dimension = Vd[e];
  }
  function Ta(_, e) {
    t(_).dimension = H[e];
  }
  function ka(_, e) {
    t(_).dstFactor = Z[e];
  }
  function Ba(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function La(_, e, n) {
    t(_).entries = I(e, n);
  }
  function Ea(_, e, n) {
    t(_).entries = I(e, n);
  }
  function Ca(_, e, n) {
    t(_).entryPoint = w(e, n);
  }
  function Oa(_, e, n) {
    t(_).entryPoint = w(e, n);
  }
  function Ra(_, e) {
    t(_).externalTexture = t(e);
  }
  function qa(_, e) {
    t(_).failOp = X[e];
  }
  function Ga(_, e) {
    t(_).format = P[e];
  }
  function Va(_, e) {
    t(_).format = P[e];
  }
  function Wa(_, e) {
    t(_).format = P[e];
  }
  function Ua(_, e) {
    t(_).format = Ud[e];
  }
  function za(_, e) {
    t(_).format = P[e];
  }
  function ja(_, e) {
    t(_).format = P[e];
  }
  function Ka(_, e) {
    t(_).format = P[e];
  }
  function $a(_, e) {
    t(_).fragment = t(e);
  }
  function Na(_, e) {
    t(_).frontFace = Ed[e];
  }
  function Qa(_, e) {
    t(_).g = e;
  }
  function Xa(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function Ya(_, e) {
    t(_).height = e >>> 0;
  }
  function Ha(_, e) {
    t(_).height = e >>> 0;
  }
  function Ja(_, e) {
    t(_).height = e >>> 0;
  }
  function Za(_, e, n) {
    t(_).label = w(e, n);
  }
  function _f(_, e, n) {
    t(_).label = w(e, n);
  }
  function ef(_, e, n) {
    t(_).label = w(e, n);
  }
  function tf(_, e, n) {
    t(_).label = w(e, n);
  }
  function nf(_, e, n) {
    t(_).label = w(e, n);
  }
  function bf(_, e, n) {
    t(_).label = w(e, n);
  }
  function rf(_, e, n) {
    t(_).label = w(e, n);
  }
  function cf(_, e, n) {
    t(_).label = w(e, n);
  }
  function af(_, e, n) {
    t(_).label = w(e, n);
  }
  function ff(_, e, n) {
    t(_).label = w(e, n);
  }
  function of(_, e, n) {
    t(_).label = w(e, n);
  }
  function uf(_, e, n) {
    t(_).label = w(e, n);
  }
  function df(_, e, n) {
    t(_).label = w(e, n);
  }
  function gf(_, e) {
    t(_).layout = t(e);
  }
  function sf(_, e) {
    t(_).layout = t(e);
  }
  function wf(_, e) {
    t(_).layout = Md[e];
  }
  function lf(_, e) {
    t(_).loadOp = Q[e];
  }
  function mf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function pf(_, e) {
    t(_).lodMinClamp = e;
  }
  function xf(_, e) {
    t(_).magFilter = __[e];
  }
  function yf(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function hf(_, e) {
    t(_).mask = e >>> 0;
  }
  function vf(_, e) {
    t(_).maxAnisotropy = e;
  }
  function Sf(_, e) {
    t(_).minBindingSize = e;
  }
  function If(_, e) {
    t(_).minFilter = __[e];
  }
  function Af(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Df(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Pf(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function Mf(_, e) {
    t(_).mipmapFilter = Cd[e];
  }
  function Ff(_, e) {
    t(_).mode = Bd[e];
  }
  function Tf(_, e) {
    t(_).module = t(e);
  }
  function kf(_, e) {
    t(_).module = t(e);
  }
  function Bf(_, e) {
    t(_).multisample = t(e);
  }
  function Lf(_, e) {
    t(_).multisampled = e !== 0;
  }
  function Ef(_, e) {
    t(_).offset = e;
  }
  function Cf(_, e) {
    t(_).offset = e;
  }
  function Of(_, e) {
    t(_).offset = e;
  }
  function Rf(_, e) {
    t(_).onmessage = t(e);
  }
  function qf(_, e) {
    t(_).operation = Fd[e];
  }
  function Gf(_, e) {
    t(_).origin = t(e);
  }
  function Vf(_, e) {
    t(_).passOp = X[e];
  }
  function Wf(_, e) {
    t(_).powerPreference = Od[e];
  }
  function Uf(_, e) {
    t(_).primitive = t(e);
  }
  function zf(_, e) {
    t(_).querySet = t(e);
  }
  function jf(_, e) {
    t(_).r = e;
  }
  function Kf(_, e, n) {
    t(_).requiredFeatures = I(e, n);
  }
  function $f(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Nf(_, e) {
    t(_).resolveTarget = t(e);
  }
  function Qf(_, e) {
    t(_).resource = t(e);
  }
  function Xf(_, e) {
    t(_).resource = t(e);
  }
  function Yf(_, e) {
    t(_).resource = t(e);
  }
  function Hf(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Jf(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function Zf(_, e) {
    t(_).sampleType = Wd[e];
  }
  function _o(_, e) {
    t(_).sampler = t(e);
  }
  function eo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function to(_, e) {
    t(_).size = e;
  }
  function no(_, e) {
    t(_).size = e;
  }
  function bo(_, e) {
    t(_).size = t(e);
  }
  function ro(_, e) {
    t(_).srcFactor = Z[e];
  }
  function co(_, e) {
    t(_).stencilBack = t(e);
  }
  function ao(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function fo(_, e) {
    t(_).stencilFront = t(e);
  }
  function oo(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function uo(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function io(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function go(_, e) {
    t(_).stencilStoreOp = Y[e];
  }
  function so(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function wo(_, e) {
    t(_).stepMode = zd[e];
  }
  function lo(_, e) {
    t(_).storageTexture = t(e);
  }
  function mo(_, e) {
    t(_).storeOp = Y[e];
  }
  function po(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function xo(_, e, n) {
    t(_).targets = I(e, n);
  }
  function yo(_, e) {
    t(_).texture = t(e);
  }
  function ho(_, e) {
    t(_).texture = t(e);
  }
  function vo(_, e) {
    t(_).timestampWrites = t(e);
  }
  function So(_, e) {
    t(_).toneMapping = t(e);
  }
  function Io(_, e) {
    t(_).topology = Rd[e];
  }
  function Ao(_, e, n) {
    t(_).type = w(e, n);
  }
  function Do(_, e) {
    t(_).type = qd[e];
  }
  function Po(_, e) {
    t(_).type = Td[e];
  }
  function Mo(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function Fo(_, e) {
    t(_).usage = e >>> 0;
  }
  function To(_, e) {
    t(_).usage = e >>> 0;
  }
  function ko(_, e) {
    t(_).usage = e >>> 0;
  }
  function Bo(_, e) {
    t(_).usage = e >>> 0;
  }
  function Lo(_, e) {
    t(_).vertex = t(e);
  }
  function Eo(_, e) {
    t(_).viewDimension = H[e];
  }
  function Co(_, e) {
    t(_).viewDimension = H[e];
  }
  function Oo(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function Ro(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function qo(_, e) {
    t(_).view = t(e);
  }
  function Go(_, e) {
    t(_).view = t(e);
  }
  function Vo(_, e) {
    t(_).visibility = e >>> 0;
  }
  function Wo(_, e) {
    t(_).width = e >>> 0;
  }
  function Uo(_, e) {
    t(_).width = e >>> 0;
  }
  function zo(_, e) {
    t(_).width = e >>> 0;
  }
  function jo(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function Ko(_, e) {
    t(_).x = e >>> 0;
  }
  function $o(_, e) {
    t(_).y = e >>> 0;
  }
  function No(_, e) {
    t(_).z = e >>> 0;
  }
  function Qo(_, e, n, b) {
    t(_).shaderSource(t(e), w(n, b));
  }
  function Xo(_, e, n, b) {
    t(_).shaderSource(t(e), w(n, b));
  }
  function Yo(_) {
    return t(_).shiftKey;
  }
  function Ho(_) {
    return t(_).shiftKey;
  }
  function Jo(_) {
    const e = t(_).signal;
    return c(e);
  }
  function Zo(_, e) {
    const n = t(e).stack, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
    l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
  }
  function _0(_) {
    t(_).start();
  }
  function e0() {
    const _ = typeof global > "u" ? null : global;
    return s(_) ? 0 : c(_);
  }
  function t0() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return s(_) ? 0 : c(_);
  }
  function n0() {
    const _ = typeof self > "u" ? null : self;
    return s(_) ? 0 : c(_);
  }
  function b0() {
    const _ = typeof window > "u" ? null : window;
    return s(_) ? 0 : c(_);
  }
  function r0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function c0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function a0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function f0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function o0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function u0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function d0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function i0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function g0(_) {
    const e = t(_).style;
    return c(e);
  }
  function s0(_, e, n) {
    t(_).submit(I(e, n));
  }
  function w0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function l0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function m0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, g);
    }, arguments);
  }
  function p0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, u, i >>> 0, g >>> 0, p);
    }, arguments);
  }
  function x0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, u, i >>> 0, g >>> 0, t(p));
    }, arguments);
  }
  function y0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function h0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function v0(_, e, n, b, r, a) {
    t(_).texStorage2D(e >>> 0, n, b >>> 0, r, a);
  }
  function S0(_, e, n, b, r, a, f) {
    t(_).texStorage3D(e >>> 0, n, b >>> 0, r, a, f);
  }
  function I0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, g);
    }, arguments);
  }
  function A0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function D0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function P0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function M0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function F0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function T0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function k0() {
    return o(function(_, e, n, b, r, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function B0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function L0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function E0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function C0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, v);
    }, arguments);
  }
  function O0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function R0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function q0() {
    return o(function(_, e, n, b, r, a, f, u, i, g, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, g >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function G0(_, e, n) {
    const b = t(_).then(t(e), t(n));
    return c(b);
  }
  function V0(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function W0(_) {
    t(_).unconfigure();
  }
  function U0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function z0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function j0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function K0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function $0(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function N0(_, e, n, b) {
    t(_).uniform2fv(t(e), x(n, b));
  }
  function Q0(_, e, n, b) {
    t(_).uniform2fv(t(e), x(n, b));
  }
  function X0(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Y0(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function H0(_, e, n, b) {
    t(_).uniform2uiv(t(e), F(n, b));
  }
  function J0(_, e, n, b) {
    t(_).uniform3fv(t(e), x(n, b));
  }
  function Z0(_, e, n, b) {
    t(_).uniform3fv(t(e), x(n, b));
  }
  function _u(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function eu(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function tu(_, e, n, b) {
    t(_).uniform3uiv(t(e), F(n, b));
  }
  function nu(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function bu(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function ru(_, e, n, b) {
    t(_).uniform4fv(t(e), x(n, b));
  }
  function cu(_, e, n, b) {
    t(_).uniform4fv(t(e), x(n, b));
  }
  function au(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function fu(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function ou(_, e, n, b) {
    t(_).uniform4uiv(t(e), F(n, b));
  }
  function uu(_, e, n, b) {
    t(_).uniformBlockBinding(t(e), n >>> 0, b >>> 0);
  }
  function du(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(b, r));
  }
  function iu(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(b, r));
  }
  function gu(_, e, n, b, r) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(b, r));
  }
  function su(_, e, n, b, r) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(b, r));
  }
  function wu(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(b, r));
  }
  function lu(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(b, r));
  }
  function mu(_, e, n, b, r) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(b, r));
  }
  function pu(_, e, n, b, r) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(b, r));
  }
  function xu(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(b, r));
  }
  function yu(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(b, r));
  }
  function hu(_, e, n, b, r) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(b, r));
  }
  function vu(_, e, n, b, r) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(b, r));
  }
  function Su(_) {
    t(_).unmap();
  }
  function Iu(_, e) {
    t(_).unobserve(t(e));
  }
  function Au(_, e) {
    t(_).useProgram(t(e));
  }
  function Du(_, e) {
    t(_).useProgram(t(e));
  }
  function Pu(_) {
    const e = t(_).userAgentData;
    return s(e) ? 0 : c(e);
  }
  function Mu() {
    return o(function(_, e) {
      const n = t(e).userAgent, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = y;
      l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function Fu(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function Tu(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function ku(_, e, n, b, r, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, b >>> 0, r, a);
  }
  function Bu(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function Lu(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function Eu(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function Cu(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function Ou(_) {
    const e = t(_).visibilityState;
    return (Kd.indexOf(e) + 1 || 3) - 1;
  }
  function Ru(_) {
    console.warn(t(_));
  }
  function qu(_) {
    const e = t(_).webkitFullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Gu(_) {
    t(_).webkitRequestFullscreen();
  }
  function Vu(_) {
    return t(_).width;
  }
  function Wu() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).writeBuffer(t(e), n, U(b, r), a, f);
    }, arguments);
  }
  function Uu() {
    return o(function(_, e, n, b, r, a) {
      t(_).writeTexture(t(e), U(n, b), t(r), t(a));
    }, arguments);
  }
  function zu(_, e) {
    const n = S(_, e, wd);
    return c(n);
  }
  function ju(_, e) {
    const n = S(_, e, Sd);
    return c(n);
  }
  function Ku(_, e) {
    const n = S(_, e, Id);
    return c(n);
  }
  function $u(_, e) {
    const n = S(_, e, ld);
    return c(n);
  }
  function Nu(_, e) {
    const n = S(_, e, md);
    return c(n);
  }
  function Qu(_, e) {
    const n = S(_, e, pd);
    return c(n);
  }
  function Xu(_, e) {
    const n = S(_, e, Ad);
    return c(n);
  }
  function Yu(_, e) {
    const n = S(_, e, xd);
    return c(n);
  }
  function Hu(_, e) {
    const n = S(_, e, yd);
    return c(n);
  }
  function Ju(_, e) {
    const n = S(_, e, hd);
    return c(n);
  }
  function Zu(_, e) {
    const n = S(_, e, vd);
    return c(n);
  }
  function _d(_, e) {
    const n = S(_, e, Dd);
    return c(n);
  }
  function ed(_, e) {
    const n = S(_, e, Pd);
    return c(n);
  }
  function td(_, e) {
    const n = S(_, e, sd);
    return c(n);
  }
  function nd(_) {
    return c(_);
  }
  function bd(_, e) {
    const n = x(_, e);
    return c(n);
  }
  function rd(_, e) {
    const n = Nd(_, e);
    return c(n);
  }
  function cd(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function ad(_, e) {
    const n = Qd(_, e);
    return c(n);
  }
  function fd(_, e) {
    const n = Xd(_, e);
    return c(n);
  }
  function od(_, e) {
    const n = F(_, e);
    return c(n);
  }
  function ud(_, e) {
    const n = U(_, e);
    return c(n);
  }
  function dd(_, e) {
    const n = w(_, e);
    return c(n);
  }
  function id(_) {
    const e = t(_);
    return c(e);
  }
  function gd(_) {
    L(_);
  }
  function sd(_, e) {
    d.__wasm_bindgen_func_elem_2744(_, e);
  }
  function wd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737(_, e, c(n));
  }
  function ld(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_3(_, e, c(n));
  }
  function md(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_4(_, e, c(n));
  }
  function pd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_5(_, e, c(n));
  }
  function xd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_7(_, e, c(n));
  }
  function yd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_8(_, e, c(n));
  }
  function hd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_9(_, e, c(n));
  }
  function vd(_, e, n) {
    d.__wasm_bindgen_func_elem_2737_10(_, e, c(n));
  }
  function Sd(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_11008(a, _, e, c(n));
      var b = l().getInt32(a + 0, true), r = l().getInt32(a + 4, true);
      if (r) throw L(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Id(_, e, n, b) {
    d.__wasm_bindgen_func_elem_2735(_, e, c(n), c(b));
  }
  function Ad(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_3747(a, _, e, c(n));
      var b = l().getInt32(a + 0, true), r = l().getInt32(a + 4, true);
      if (r) throw L(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Dd(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_3747_11(a, _, e, c(n));
      var b = l().getInt32(a + 0, true), r = l().getInt32(a + 4, true);
      if (r) throw L(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Pd(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_3747_12(a, _, e, c(n));
      var b = l().getInt32(a + 0, true), r = l().getInt32(a + 4, true);
      if (r) throw L(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const K = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Md = [
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
  ], Fd = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Td = [
    "uniform",
    "storage",
    "read-only-storage"
  ], kd = [
    "opaque",
    "premultiplied"
  ], Bd = [
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
  ], Ld = [
    "none",
    "front",
    "back"
  ], __ = [
    "nearest",
    "linear"
  ], Ed = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], Cd = [
    "nearest",
    "linear"
  ], Od = [
    "low-power",
    "high-performance"
  ], Rd = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], qd = [
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
  ], Gd = [
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
  ], Vd = [
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
  ], Wd = [
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
  ], Ud = [
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
  ], zd = [
    "vertex",
    "instance"
  ], jd = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Kd = [
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
  } : new FinalizationRegistry((_) => d.__wbindgen_export5(_.a, _.b));
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
  function $d(_) {
    _ < 1028 || (A[_] = k, k = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, Yd().subarray(_ / 4, _ / 4 + e);
  }
  function Nd(_, e) {
    return _ = _ >>> 0, Hd().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, Jd().subarray(_ / 4, _ / 4 + e);
  }
  function Qd(_, e) {
    return _ = _ >>> 0, Zd().subarray(_ / 1, _ / 1 + e);
  }
  function I(_, e) {
    _ = _ >>> 0;
    const n = l(), b = [];
    for (let r = _; r < _ + 4 * e; r += 4) b.push(t(n.getUint32(r, true)));
    return b;
  }
  function Xd(_, e) {
    return _ = _ >>> 0, _i().subarray(_ / 2, _ / 2 + e);
  }
  function F(_, e) {
    return _ = _ >>> 0, ei().subarray(_ / 4, _ / 4 + e);
  }
  function U(_, e) {
    return _ = _ >>> 0, T().subarray(_ / 1, _ / 1 + e);
  }
  let M = null;
  function l() {
    return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== d.memory.buffer) && (M = new DataView(d.memory.buffer)), M;
  }
  let E = null;
  function Yd() {
    return (E === null || E.byteLength === 0) && (E = new Float32Array(d.memory.buffer)), E;
  }
  let C = null;
  function Hd() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(d.memory.buffer)), C;
  }
  let O = null;
  function Jd() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(d.memory.buffer)), O;
  }
  let R = null;
  function Zd() {
    return (R === null || R.byteLength === 0) && (R = new Int8Array(d.memory.buffer)), R;
  }
  function w(_, e) {
    return ni(_ >>> 0, e);
  }
  let q = null;
  function _i() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(d.memory.buffer)), q;
  }
  let G = null;
  function ei() {
    return (G === null || G.byteLength === 0) && (G = new Uint32Array(d.memory.buffer)), G;
  }
  let V = null;
  function T() {
    return (V === null || V.byteLength === 0) && (V = new Uint8Array(d.memory.buffer)), V;
  }
  function t(_) {
    return A[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      d.__wbindgen_export3(c(n));
    }
  }
  let A = new Array(1024).fill(void 0);
  A.push(void 0, null, true, false);
  let k = A.length;
  function s(_) {
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
      --b.cnt === 0 && (d.__wbindgen_export5(b.a, b.b), b.a = 0, J.unregister(b));
    }, J.register(r, b, b), r;
  }
  function h(_, e, n) {
    if (n === void 0) {
      const u = B.encode(_), i = e(u.length, 1) >>> 0;
      return T().subarray(i, i + u.length).set(u), y = u.length, i;
    }
    let b = _.length, r = e(b, 1) >>> 0;
    const a = T();
    let f = 0;
    for (; f < b; f++) {
      const u = _.charCodeAt(f);
      if (u > 127) break;
      a[r + f] = u;
    }
    if (f !== b) {
      f !== 0 && (_ = _.slice(f)), r = n(r, b, b = f + _.length * 3, 1) >>> 0;
      const u = T().subarray(r + f, r + b), i = B.encodeInto(_, u);
      f += i.written, r = n(r, b, f, 1) >>> 0;
    }
    return y = f, r;
  }
  function L(_) {
    const e = t(_);
    return $d(_), e;
  }
  let W = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  W.decode();
  const ti = 2146435072;
  let z = 0;
  function ni(_, e) {
    return z += e, z >= ti && (W = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), W.decode(), z = e), W.decode(T().subarray(_, _ + e));
  }
  const B = new TextEncoder();
  "encodeInto" in B || (B.encodeInto = function(_, e) {
    const n = B.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let y = 0, d;
  function bi(_) {
    d = _;
  }
  URL = globalThis.URL;
  const m = await n_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: gd,
      __wbg_new_227d7c05414eb861: tr,
      __wbg_stack_3b0d974bbf31e44f: Zo,
      __wbg_error_a6fa202b58aa1cd3: Pn,
      __wbg_userAgentData_31b8f893e8977e94: Pu,
      __wbg_brands_b7dcf262485c3e7c: ce,
      __wbg_length_370319915dc99107: Wb,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: Db,
      __wbg_brand_3bc196a43eceb8af: re,
      __wbg_get_507a50627bffa49b: Ib,
      __wbindgen_object_clone_ref: id,
      __wbg_offsetX_a9bf2ea7f0575ac9: yr,
      __wbg_offsetY_10e5433a1bbd4c01: hr,
      __wbg_cancel_65f38182e2eeac5c: me,
      __wbg_animate_8f41e2f47c7d04ab: D_,
      __wbg_play_3997a1be51d27925: Pr,
      __wbg_push_d2ae3af0c1217ae6: Wr,
      __wbg_then_16d107c451e9905d: G0,
      __wbg_catch_c1a60df4c30d76d3: pe,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: bb,
      __wbg_scheduler_b35fe73ba70e89cc: pc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: dc,
      __wbg_scheduler_a17d41c9c822fc26: mc,
      __wbg_postTask_e2439afddcdfbb55: Or,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: qu,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: Gu,
      __wbg_requestFullscreen_3f16e43f398ce624: oc,
      __wbg_requestFullscreen_b977a3a0697e883c: uc,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: Nn,
      __wbg_Window_c7f91e3f80ae0a0e: c_,
      __wbg_prototype_0d5bb2023db3bcfc: Gr,
      __wbg_performance_3fcf6e32a7e1ed0a: Sr,
      __wbg_now_e7c6795a7f81e10f: sr,
      __wbg_set_color_attachments_581fdb3310e4abfa: ua,
      __wbg_set_label_17eb9fe3a02f62b0: _f,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: Go,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: pa,
      __wbg_set_depth_load_op_511c513eab4e56a9: ha,
      __wbg_set_depth_store_op_c89f33b39b43361c: Da,
      __wbg_set_depth_read_only_7f41a74741c144ec: Sa,
      __wbg_set_stencil_clear_value_42be608809151e2a: ao,
      __wbg_set_stencil_load_op_31838c036993098a: oo,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: go,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: io,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Aa,
      __wbg_set_query_set_41de86d2401aee04: zf,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: Hc,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: Ba,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: vo,
      __wbg_beginRenderPass_aa22c432e793359a: k_,
      __wbg_set_width_9f685402c2cbee70: zo,
      __wbg_set_height_14335c4047cf9c1b: Ya,
      __wbg_set_depth_or_array_layers_89371305ed0bd962: va,
      __wbg_label_7ed42f25f841996b: Gb,
      __wbg_set_label_08d9be3e4719c226: Za,
      __wbg_finish_4d91de5e927dd13f: Tn,
      __wbg_finish_6e06b68ab68cd9f6: kn,
      __wbg_set_dst_factor_ec7407f19be1aff9: ka,
      __wbg_set_operation_62ce44e1728c4047: qf,
      __wbg_set_src_factor_9bfe84af9b7b5cac: ro,
      __wbg_set_texture_1f64653a5d2d7b4d: yo,
      __wbg_set_mip_level_f7ac79e8c54f59ad: Pf,
      __wbg_set_x_876d592971db129a: Ko,
      __wbg_set_y_2b1f5ac0dd5586a5: $o,
      __wbg_set_z_ef005d82bc9d24e3: No,
      __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: Gf,
      __wbg_set_aspect_4962514fe99e68e6: $c,
      __wbg_Window_afcc911b2f9c92e2: r_,
      __wbg_gpu_2ccc250735d24a2a: Pb,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: a_,
      __wbg_set_a_88262a42340d0b1c: Cc,
      __wbg_set_b_c47befe0af3261eb: Qc,
      __wbg_set_g_5983abfc46e0cf4e: Qa,
      __wbg_set_r_c6f4c68f4804d655: jf,
      __wbg_writeBuffer_8b5bd251a89198bc: Wu,
      __wbg_set_bytes_per_row_d69b88eee3929c07: ca,
      __wbg_set_rows_per_image_59a813ac5006e10e: Hf,
      __wbg_set_offset_f64_fa66068813376ca3: Of,
      __wbg_writeTexture_53ba204c494b042c: Uu,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: vr,
      __wbg_submit_ce44115121cd166c: s0,
      __wbg_getMappedRange_d0bf3141224111b6: nb,
      __wbg_unmap_adaf93276fdf9aaf: Su,
      __wbg_destroy_fe937f756bf8df37: Zt,
      __wbg_mapAsync_52b01fa9e8f765fd: $b,
      __wbg_set_size_f64_6bcd40704bf4cfdc: to,
      __wbg_set_usage_b2a2935f37bf3d08: To,
      __wbg_set_mapped_at_creation_81b586dc90a50347: yf,
      __wbg_set_label_d010f237b26f2c55: ff,
      __wbg_createBuffer_0726dd2ab09ea1d2: He,
      __wbg_set_address_mode_u_9e2695575a219e33: Rc,
      __wbg_set_address_mode_v_f479b2e6cccbcac4: qc,
      __wbg_set_address_mode_w_46273e153230180d: Gc,
      __wbg_set_compare_cd9b62cdb92eb580: da,
      __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: mf,
      __wbg_set_lod_min_clamp_6d20c97916baeb93: pf,
      __wbg_set_mag_filter_b5adebc99cb938e1: xf,
      __wbg_set_min_filter_c72f17375e135f0a: If,
      __wbg_set_mipmap_filter_5bf66195a3639700: Mf,
      __wbg_set_max_anisotropy_2beada0e2db62c45: vf,
      __wbg_set_label_5ee7427342869829: nf,
      __wbg_createSampler_c8ffb3c8d565f704: it,
      __wbg_set_format_2c1414a817c213f8: Va,
      __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: bo,
      __wbg_set_usage_ba5b0f8b333ab325: ko,
      __wbg_set_label_547d0d4aec39fbe9: tf,
      __wbg_set_dimension_868eee80f4b90011: Fa,
      __wbg_set_mip_level_count_776c8c218b65bc08: Df,
      __wbg_set_sample_count_eb86a8b18545b54f: Jf,
      __wbg_set_view_formats_4347dc8363331086: Oo,
      __wbg_createTexture_1bac74c999b8a48e: mt,
      __wbg_set_entries_a12aca1e458b0456: Ea,
      __wbg_set_layout_913d53c17194c989: sf,
      __wbg_set_label_79387decda299036: cf,
      __wbg_createBindGroup_655c6e6c0258530e: Xe,
      __wbg_set_code_b4f37f81f45b5b25: fa,
      __wbg_set_label_e3944e54881b8c50: uf,
      __wbg_createShaderModule_2e44fc7677c6288b: gt,
      __wbg_set_label_72bb4f41ef0cb893: rf,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: Ze,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: Jc,
      __wbg_set_label_9556af8b5cda3c9d: af,
      __wbg_createPipelineLayout_2c8cd4528b06c108: bt,
      __wbg_set_module_d0e2098713606cae: Tf,
      __wbg_set_entry_point_e87e79251dd3144f: Oa,
      __wbg_set_buffers_7d0d8f507699e956: ra,
      __wbg_set_layout_50ab727f44b38f26: gf,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: wf,
      __wbg_set_vertex_0be5d146f9ff6f36: Lo,
      __wbg_set_label_e922700240417ab5: df,
      __wbg_set_format_e52bdcca880d2c8e: Ka,
      __wbg_set_depth_compare_0c8631eb2eae98e3: xa,
      __wbg_set_depth_write_enabled_ce89750042940350: Pa,
      __wbg_set_depth_bias_d7cd16096242a657: la,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: wa,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: ma,
      __wbg_set_compare_f36b34abfaa08ccb: ia,
      __wbg_set_depth_fail_op_668155ae33d3c06f: ya,
      __wbg_set_fail_op_92f716dbc88b6973: qa,
      __wbg_set_pass_op_cf02fa088d6352a7: Vf,
      __wbg_set_stencil_back_85b22f1db5b1940a: co,
      __wbg_set_stencil_front_525526164a798a44: fo,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: uo,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: so,
      __wbg_set_depth_stencil_97506c7bea4f53da: Ia,
      __wbg_set_module_f02e076ca7e7daf8: kf,
      __wbg_set_targets_c38bd200c836d66f: xo,
      __wbg_set_entry_point_207540f042015ce5: Ca,
      __wbg_set_fragment_8b780f00a0b0e6f3: $a,
      __wbg_set_count_069a4eac409bac55: ga,
      __wbg_set_mask_70a8a59ce09e5997: hf,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: Uc,
      __wbg_set_multisample_37ddafe88b5cd466: Bf,
      __wbg_set_cull_mode_fc649853947a3d0c: sa,
      __wbg_set_front_face_28ffdf524eedce5b: Na,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: po,
      __wbg_set_topology_da25f2cc5af203d2: Io,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: Mo,
      __wbg_set_primitive_43c23761a55b4088: Uf,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: ft,
      __wbg_set_entries_86a29dd6291c95e7: La,
      __wbg_set_label_48e6b787d256f621: ef,
      __wbg_createBindGroupLayout_49a7e2b3d076afcf: Qe,
      __wbg_end_f99ebed53d4e198a: In,
      __wbg_new_typed_4148bd5ae72ab3f0: dr,
      __wbg_set_required_limits_871ed33c68613dcb: $f,
      __wbg_set_required_features_1baf274a8669db60: Kf,
      __wbg_set_label_60ad96c811e0d109: bf,
      __wbg_requestDevice_ab46d0519ea1cc34: fc,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: ab,
      __wbg_getCurrentTexture_20714d1bd9051cab: Zn,
      __wbg_set_device_e275d1d4f3c9eb74: Ma,
      __wbg_set_format_815efd4dc4817bbb: ja,
      __wbg_set_usage_a137f82ca163b0a9: Fo,
      __wbg_set_alpha_mode_df805952892caa9c: Wc,
      __wbg_set_mode_9990b3393ba469ae: Ff,
      __wbg_set_tone_mapping_b3464f1baa4cff92: So,
      __wbg_set_view_formats_5797d2fff3c11808: Ro,
      __wbg_configure_0e4789c0f6b35c8e: We,
      __wbg_set_dimension_e325282e613ca0a4: Ta,
      __wbg_set_format_1fcaa7d60546b490: Ga,
      __wbg_set_aspect_0d453bca3d012f02: Kc,
      __wbg_set_base_array_layer_f176bb9f1b37b342: Xc,
      __wbg_set_array_layer_count_7312f0f31af94e7c: zc,
      __wbg_set_base_mip_level_1df145d9f8db32a9: Yc,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Af,
      __wbg_set_label_e16e2dbe51349c7f: of,
      __wbg_set_usage_ddd42599bbba7779: Bo,
      __wbg_createView_ceaf2f5881adbd34: ht,
      __wbg_set_power_preference_8fdca0b7af640d49: Wf,
      __wbg_requestAdapter_2e6718811c735a57: cc,
      __wbg_queue_adce34608fd0c893: Qr,
      __wbg_drawIndexed_d31913e79d58fbac: pn,
      __wbg_setPipeline_c41bf46790f27f9e: Dc,
      __wbg_setBindGroup_268fd1714fff0ef5: vc,
      __wbg_setBindGroup_f0de6cb2c7dbfc2c: Sc,
      __wbg_setIndexBuffer_7f3cf667b4d71566: Ac,
      __wbg_setIndexBuffer_2531a9103450445e: Ic,
      __wbg_setVertexBuffer_1e448859663dd400: kc,
      __wbg_setVertexBuffer_7cf533d694e747f3: Bc,
      __wbg_set_format_5d2f25cc93654ecc: Ua,
      __wbg_set_offset_f64_28c24dc15000932e: Ef,
      __wbg_set_shader_location_7e1832a74f912217: eo,
      __wbg_set_buffer_ef7f75306cf663ed: ba,
      __wbg_set_visibility_9570b037224c4cc2: Vo,
      __wbg_set_binding_155b0440b4307793: Zc,
      __wbg_set_sampler_c0e1258543a33bce: _o,
      __wbg_set_texture_9dcedde1bb31eda6: ho,
      __wbg_set_storage_texture_939a097db4b18bd4: lo,
      __wbg_set_external_texture_386483d8dd82ab56: Ra,
      __wbg_set_attributes_7537844a7e6dafdc: Nc,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: jc,
      __wbg_set_step_mode_a97bb24714da41a9: wo,
      __wbg_set_format_5ff53724ed6cedf2: za,
      __wbg_set_write_mask_d45279e56abbfcb5: jo,
      __wbg_set_blend_7493c2066c3e9970: ea,
      __wbg_set_binding_f74df3510792aba1: _a,
      __wbg_set_resource_5ae7b5e67924f234: Qf,
      __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: Yf,
      __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: Xf,
      __wbg_set_alpha_bfd2df62e7bc581b: Vc,
      __wbg_set_color_83aa977526e88cbb: oa,
      __wbg_set_access_9a5092f05dc45fad: Oc,
      __wbg_set_format_533f9ffa7eef563d: Wa,
      __wbg_set_view_dimension_0df554032f1f3a85: Eo,
      __wbg_set_buffer_c3410572051920ba: na,
      __wbg_set_offset_f64_89f0ce01a689839e: Cf,
      __wbg_set_size_f64_8b8f6bba5d678162: no,
      __wbg_set_type_ccf8472d40abcddf: Do,
      __wbg_set_multisampled_7913fd7183272840: Lf,
      __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: Xa,
      __wbg_set_min_binding_size_f64_5005a6904cdf43da: Sf,
      __wbg_set_type_d09829f59932a0fc: Po,
      __wbg_set_sample_type_c32e1dfff94e63eb: Zf,
      __wbg_set_view_dimension_4818d4c18ce5815e: Co,
      __wbg_set_load_op_99661da6c4eab9b0: lf,
      __wbg_set_store_op_b5fdf672436f13f3: mo,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: qo,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: aa,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Nf,
      __wbg_unconfigure_0a07a0a40de8988d: W0,
      __wbg_includes_78c9a3115b08eddc: Fb,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Lb,
      __wbg_blendFunc_114dc7056ccfeb8d: _e,
      __wbg_colorMask_a4d164c2039b5731: Le,
      __wbg_depthFunc_74a8f8acf8973c86: Qt,
      __wbg_depthMask_a644a67deced3257: Yt,
      __wbg_fenceSync_fe2cdba4a0d73679: Mn,
      __wbg_frontFace_29ef7151de8b5ed9: Un,
      __wbg_uniform1ui_cd7ad5581093b3df: $0,
      __wbg_beginQuery_042a1f99e870066c: T_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: C_,
      __wbg_blendColor_eae0cd578a2c7d15: N_,
      __wbg_clearDepth_ca9b22d41551b513: Se,
      __wbg_deleteSync_9b0e43580942a0f6: Gt,
      __wbg_depthRange_5e90d4d236280ff5: Jt,
      __wbg_drawArrays_b0c59a6e158122f2: gn,
      __wbg_readBuffer_4271437a70aae481: Xr,
      __wbg_useProgram_49495850b446fa56: Du,
      __wbg_bindSampler_ce608f0de9d31acf: W_,
      __wbg_bindTexture_28eff4bbd8aaab54: U_,
      __wbg_createQuery_047c7c524e4ac4f8: at,
      __wbg_deleteQuery_0d1dcc4402a86ee1: Lt,
      __wbg_drawBuffers_1c1ec9b292442a2a: wn,
      __wbg_linkProgram_4e047fb3197a0348: Ub,
      __wbg_pixelStorei_c844cd0db4f1fde6: Dr,
      __wbg_stencilMask_9a844dc58a89992f: u0,
      __wbg_attachShader_8971266b4c9bc514: F_,
      __wbg_clearStencil_58f2af46612bccae: Ie,
      __wbg_createBuffer_01568a9d930d90dd: Ye,
      __wbg_createShader_7d139f2d50f77365: wt,
      __wbg_deleteBuffer_1ca3ffe668a488e7: Mt,
      __wbg_deleteShader_993edb4beb3c4d53: qt,
      __wbg_getExtension_101c7e41de3e4d90: eb,
      __wbg_getParameter_d39f59581389af1b: cb,
      __wbg_shaderSource_c3469dc2221dd528: Xo,
      __wbg_activeTexture_d12958674e97a118: h_,
      __wbg_blendEquation_455b8986ededabc0: Y_,
      __wbg_compileShader_9bdfd792722cf704: Ee,
      __wbg_createProgram_538c9777a4ac084f: ct,
      __wbg_createSampler_70c8392d98896235: dt,
      __wbg_createTexture_d13f98e0d3d912f4: pt,
      __wbg_deleteProgram_132e191baa9fa84f: Bt,
      __wbg_deleteSampler_0abb528566c4ab3b: Ot,
      __wbg_deleteTexture_bdc2202d7a50dcea: Wt,
      __wbg_polygonOffset_4eb460adf41db6cd: Tr,
      __wbg_texParameteri_1fc451e0964fc91c: y0,
      __wbg_texStorage2D_7f947efc63dac273: v0,
      __wbg_texStorage3D_f8f2e4b3386736f9: S0,
      __wbg_bindFramebuffer_390311eff3896937: R_,
      __wbg_blitFramebuffer_a1215976f663b058: te,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: V_,
      __wbg_bindVertexArray_427eeac0c1764d8a: K_,
      __wbg_createFramebuffer_de0d521f546e7534: tt,
      __wbg_deleteFramebuffer_963cd69957209d37: Ft,
      __wbg_getSyncParameter_d8f6c145657a3550: yb,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: wc,
      __wbg_samplerParameteri_7b1b4091de49aabb: lc,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: Z_,
      __wbg_createRenderbuffer_9d801bf44c314f44: ut,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: yt,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: Et,
      __wbg_deleteVertexArray_475d4e969aac1dd0: zt,
      __wbg_getQueryParameter_919125495ccb17ca: gb,
      __wbg_getShaderInfoLog_5cee2add982c7165: sb,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: i0,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: B_,
      __wbg_bufferData_3d4f29bdfb1fa46c: fe,
      __wbg_getProgramInfoLog_d1ce570463a68779: ob,
      __wbg_getShaderParameter_3394e75dcb97f380: lb,
      __wbg_getUniformLocation_788a34295dd6fabe: Sb,
      __wbg_readPixels_82c9dee754d58176: Hr,
      __wbg_renderbufferStorage_0a8de92542893819: nc,
      __wbg_copyTexSubImage2D_8daea651fc408645: Ke,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: Ne,
      __wbg_drawArraysInstanced_51b161548a3f10c4: un,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: tb,
      __wbg_getProgramParameter_c8d1154fbb3c0890: db,
      __wbg_stencilFuncSeparate_814300446c2969ef: c0,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: a0,
      __wbg_texImage3D_bdd9bebe42ed1f52: p0,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: uu,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Tu,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: qn,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Cb,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: Q_,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: hb,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Rn,
      __wbg_getSupportedExtensions_2a7458ec45e82560: pb,
      __wbg_clientWaitSync_cf8e49f8ba228377: Fe,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Vn,
      __wbg_texSubImage3D_8077e90ec309c414: C0,
      __wbg_uniform2fv_1b43656b33177d21: N0,
      __wbg_uniform2iv_859048b9d60f46ae: X0,
      __wbg_uniform3fv_8ecb5ebb510b7bce: J0,
      __wbg_uniform3iv_09abae5eabd6b9d6: _u,
      __wbg_uniform4fv_674a247aeb15012d: cu,
      __wbg_uniform4iv_d02934d7b94df609: fu,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: yn,
      __wbg_uniform2uiv_8a9cb3155271213b: H0,
      __wbg_uniform3uiv_3c0b163732f5b8f0: tu,
      __wbg_uniform4uiv_0d1a8ed214f10c31: ou,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: nn,
      __wbg_clearBufferfv_2e0f1a0ea56de859: xe,
      __wbg_clearBufferiv_0360269bf6e34c54: ye,
      __wbg_clearBufferuiv_df94a395d4915377: he,
      __wbg_vertexAttribPointer_a8f0af57269c2067: Bu,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: mn,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: tc,
      __wbg_texSubImage3D_c9e5a071796d412f: R0,
      __wbg_uniformMatrix2fv_9284424cc6aac672: iu,
      __wbg_uniformMatrix3fv_568aa181379c8a75: lu,
      __wbg_uniformMatrix4fv_423b958042692150: yu,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: ku,
      __wbg_bindBufferRange_f5c29912db0476e9: E_,
      __wbg_bufferData_90ef588bac2be2f5: oe,
      __wbg_texSubImage3D_93b38c69acb735c8: O0,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: gu,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: su,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: mu,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: pu,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: hu,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: vu,
      __wbg_readPixels_5f013a7d85b23800: Yr,
      __wbg_texImage3D_ef16a1f721b3f908: x0,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: L0,
      __wbg_texSubImage3D_6cb6cfd732dad145: E0,
      __wbg_texSubImage3D_45e498ae6298998c: B0,
      __wbg_texSubImage3D_feebaf7f0f4594c6: q0,
      __wbg_compressedTexSubImage2D_c1362291573c7268: Oe,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: Ge,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: je,
      __wbg_bufferSubData_bae930b21e9c1c48: de,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: Re,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: Ve,
      __wbg_getBufferSubData_11018928c908ac2c: Kn,
      __wbg_texSubImage2D_047380bb2660e4f9: I0,
      __wbg_clear_dd06a0da4ce8e13f: Me,
      __wbg_flush_e03c08da6863b5ab: En,
      __wbg_texImage2D_8d168171984f2a40: m0,
      __wbg_texSubImage2D_bed5e7a3cd81d409: M0,
      __wbg_texSubImage2D_e107b4f88c19b920: k0,
      __wbg_enable_28bbeed576131d1f: hn,
      __wbg_finish_cbe7ec8675dd7705: Bn,
      __wbg_texSubImage2D_98c43894eb217aa7: P0,
      __wbg_texSubImage2D_5058af3d30a8e205: A0,
      __wbg_texSubImage2D_6a376bfc3a31436b: D0,
      __wbg_texSubImage2D_d1af697e69f8a9e4: F0,
      __wbg_disable_1659d1b7d50c31e7: bn,
      __wbg_scissor_105e756596bc35df: xc,
      __wbg_texImage2D_5abd8779d1d033c7: l0,
      __wbg_viewport_affdf15c559df1e2: Eu,
      __wbg_cullFace_f1c75ae19b07eaf3: At,
      __wbg_endQuery_a50f7fc49cfe56e9: Sn,
      __wbg_uniform1f_62692c8fa8e7bf1e: U0,
      __wbg_uniform1i_7621f908f78177df: K0,
      __wbg_uniform4f_9ff60fc65b0ed726: nu,
      __wbg_instanceof_Window_05ba1ee4f6781663: Eb,
      __wbg_matchMedia_9968278b31706f78: Nb,
      __wbg_queueMicrotask_ed5b33385a53c3a9: Nr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: en,
      __wbg_getComputedStyle_961681bdf7e518e8: Qn,
      __wbg_cancelIdleCallback_b9e469156370a1e5: le,
      __wbg_requestIdleCallback_d292749bf33501af: ic,
      __wbg_cancelAnimationFrame_086d6084925c4e06: we,
      __wbg_requestAnimationFrame_1a85deeab66448c2: ac,
      __wbg_clearTimeout_8f80437be2324e09: De,
      __wbg_setTimeout_5ccd86968701f1ec: Fc,
      __wbg_setTimeout_cfa2cf195c3738db: Tc,
      __wbg_document_179650d6cb13c263: fn,
      __wbg_navigator_99621db14b3f1099: er,
      __wbg_setAttribute_71039043be82d098: hc,
      __wbg_setPointerCapture_70025ca3fb7f26b9: Pc,
      __wbg_activeElement_4bc99dc1a7094c27: x_,
      __wbg_createElement_fcbc0805de826d62: _t,
      __wbg_querySelector_fd7d157ebe17cd16: jr,
      __wbg_visibilityState_301d0905e8103e21: Ou,
      __wbg_getElementById_1cbd8f06dbe8eb8e: _b,
      __wbg_fullscreenElement_9f50a5e63bb433a8: jn,
      __wbg_querySelectorAll_7e98cbe256deaadd: zr,
      __wbg_body_40ec34e0a2931fe8: be,
      __wbg_navigator_51379c10a84aeec9: _r,
      __wbg_focus_2f77051f98540625: Cn,
      __wbg_style_6657aed849e5d757: g0,
      __wbg_blendFunc_a854d7e4459150ba: ee,
      __wbg_colorMask_44ebb91cad2502f2: Be,
      __wbg_depthFunc_455cfeb8a9d2fb4c: Nt,
      __wbg_depthMask_4bd6c73b1339d257: Xt,
      __wbg_frontFace_fc6d98dafa42de87: zn,
      __wbg_bindBuffer_a01497b1abdcdd9a: O_,
      __wbg_blendColor_793b560dc69ddd0b: $_,
      __wbg_clearDepth_8b5d226aae155082: ve,
      __wbg_depthRange_38b2287ffbea14fd: Ht,
      __wbg_drawArrays_676becae0149ed65: dn,
      __wbg_useProgram_182d120fe476921b: Au,
      __wbg_bindTexture_9b04b1b7c00d4dd6: z_,
      __wbg_linkProgram_d7c71c539c8c6a43: zb,
      __wbg_pixelStorei_2a93b18efde9acf8: Ar,
      __wbg_stencilMask_1c99b79b516d12dd: o0,
      __wbg_attachShader_5f7f4077e124e23b: M_,
      __wbg_clearStencil_a66fe23df6313fc7: Ae,
      __wbg_createBuffer_2075765bde5035d5: Je,
      __wbg_createShader_78bc8b7e9a88e1a8: st,
      __wbg_deleteBuffer_08eb938e35c27967: Pt,
      __wbg_deleteShader_3120790d36063afe: Rt,
      __wbg_getParameter_039a5899307fab55: rb,
      __wbg_shaderSource_4cf90af97621ff49: Qo,
      __wbg_activeTexture_92b04d918019d603: y_,
      __wbg_blendEquation_f5c5272993f6cb01: H_,
      __wbg_compileShader_fc2e4b73240d4fd7: Ce,
      __wbg_createProgram_118becaac3a20318: rt,
      __wbg_createTexture_0ee0fa5f924f3d14: lt,
      __wbg_deleteProgram_09bd45a51105b2f6: kt,
      __wbg_deleteTexture_2b163b157ea1be24: Vt,
      __wbg_polygonOffset_eccb68e40a18f861: kr,
      __wbg_texParameteri_9d0daa263d3a863f: h0,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: q_,
      __wbg_bindRenderbuffer_75e8469e930840fa: G_,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: et,
      __wbg_deleteFramebuffer_d1a36e889b009344: Tt,
      __wbg_blendFuncSeparate_37156309688f8f88: J_,
      __wbg_createRenderbuffer_71af5c0d615e9271: ot,
      __wbg_deleteRenderbuffer_ca999f7883b777af: Ct,
      __wbg_getShaderInfoLog_bc236afe696c1283: wb,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: d0,
      __wbg_bindAttribLocation_94202d7a59ab7863: L_,
      __wbg_bufferData_ce4f44d56e9ddab5: ue,
      __wbg_getProgramInfoLog_c4762e0513468a26: fb,
      __wbg_getShaderParameter_cbcc0995e8e16214: mb,
      __wbg_getUniformLocation_24ef46cdda2148ab: vb,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: bc,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: $e,
      __wbg_getProgramParameter_b9995b56c258ac86: ub,
      __wbg_stencilFuncSeparate_35136c4e5153406f: r0,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: f0,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Gn,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: X_,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: On,
      __wbg_uniform2fv_948dab6a82b428ac: Q0,
      __wbg_uniform2iv_f84a24961c0cfcd0: Y0,
      __wbg_uniform3fv_95d1933ea1440725: Z0,
      __wbg_uniform3iv_a3a7008990fd84f0: eu,
      __wbg_uniform4fv_4ca8c114ca3de099: ru,
      __wbg_uniform4iv_45ab52abcb3f882c: au,
      __wbg_enableVertexAttribArray_4c08219124740f14: xn,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: tn,
      __wbg_vertexAttribPointer_b300c8e000cdac93: Lu,
      __wbg_uniformMatrix2fv_769725d64641341f: du,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: wu,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: xu,
      __wbg_bufferData_073a7c6abef7a55f: ae,
      __wbg_readPixels_c7861e25836bf57b: Jr,
      __wbg_bufferSubData_ce9854d3d337e2cf: ie,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: qe,
      __wbg_clear_53d71d234e14e4c1: Pe,
      __wbg_flush_db77b4a63d6b337d: Ln,
      __wbg_enable_611804c0ac1504ce: vn,
      __wbg_finish_126e6f2ac71e3096: Fn,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: T0,
      __wbg_disable_40c3975167c1ee07: rn,
      __wbg_scissor_573b844152316b8d: yc,
      __wbg_texImage2D_3813406af5bf54c8: w0,
      __wbg_viewport_e8a16ca4a5085e5f: Cu,
      __wbg_cullFace_62bbea3bef0e6b99: It,
      __wbg_uniform1f_b79d0c5667f9fb40: z0,
      __wbg_uniform1i_5830de6702add20a: j0,
      __wbg_uniform4f_b25e39808b830021: bu,
      __wbg_disconnect_491a6bfd82cdd887: an,
      __wbg_new_e0bd7540d9834af6: or,
      __wbg_observe_c3834a3e4cde3e64: lr,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: gr,
      __wbg_key_803dca86cdcfa8dd: qb,
      __wbg_code_89c999e407c79eef: ke,
      __wbg_repeat_4e131e99bff9b9f4: rc,
      __wbg_altKey_50f830d1793a2eea: I_,
      __wbg_ctrlKey_2e52816fa7160097: vt,
      __wbg_location_8f24df2c257fb974: jb,
      __wbg_metaKey_d961c7572a9f84f5: Yb,
      __wbg_shiftKey_9bcb8bdd60c2f152: Yo,
      __wbg_new_4339b2a2675a03e3: rr,
      __wbg_abort_8bae0f33e7833997: p_,
      __wbg_signal_dad7cb35193abd31: Jo,
      __wbg_set_box_223b9bc0b7f548f6: ta,
      __wbg_preventDefault_b64888c857500682: qr,
      __wbg_movementX_87e39021f3fce8b8: Jb,
      __wbg_movementY_f6f63087e2248fa9: Zb,
      __wbg_button_f6a9a7b725f1838e: ge,
      __wbg_altKey_f3e24c4c9cfcf271: A_,
      __wbg_buttons_d8acd46cf8f40ae9: se,
      __wbg_ctrlKey_50bd8324959ca786: St,
      __wbg_metaKey_f934f09e37889d70: Hb,
      __wbg_shiftKey_9f797da486b2ade8: Ho,
      __wbg_pointerId_ea33d2695be12e7f: Mr,
      __wbg_pointerType_d5e932608aa61bb6: Fr,
      __wbg_getCoalescedEvents_366947e5550da21b: $n,
      __wbg_pressure_9a7845d9744ae9f4: Rr,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: sn,
      __wbg_persisted_e508d4d322115185: Ir,
      __wbg_appendChild_f553e8704c4f14a6: P_,
      __wbg_contains_7189b09a477442a6: Ue,
      __wbg_postMessage_b80f20949a4b4f55: Er,
      __wbg_set_onmessage_d511b70365304094: Rf,
      __wbg_close_3423cc7dafc477bb: Te,
      __wbg_start_d0cdf16ff965b3f3: _0,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: on,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: Fu,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: ln,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: j_,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: xt,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Ut,
      __wbg_isIntersecting_fc6d9529a49c5d62: Ob,
      __wbg_log_d267660666346fb3: Kb,
      __wbg_info_eadbe775a8e2e9eb: Tb,
      __wbg_warn_b1370d804fa3e259: Ru,
      __wbg_debug_87fd9b1a625b7efb: Dt,
      __wbg_error_744744ff0c9861e6: An,
      __wbg_error_7ed559cd7146b49d: Dn,
      __wbg_deltaMode_d869228efd74f393: jt,
      __wbg_deltaX_5d829ffba565ed10: Kt,
      __wbg_deltaY_6cfce8f8da250c23: $t,
      __wbg_width_20c45c895834b83f: Vu,
      __wbg_height_9f27216001e3c804: Mb,
      __wbg_userAgent_0558f0ac642f7771: Mu,
      __wbg_addListener_b5b7f95360b22984: S_,
      __wbg_removeListener_768e1e787e1d4b2e: _c,
      __wbg_media_40cbd26ab34df71f: Xb,
      __wbg_matches_978994974df1e85b: Qb,
      __wbg_setProperty_e4e51b1b1d681d15: Mc,
      __wbg_removeProperty_70da952bc1b493fa: ec,
      __wbg_getPropertyValue_dc6b061239dad6f1: ib,
      __wbg_contentRect_1d6e15e2e0d3e3c3: ze,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: _n,
      __wbg_new_f1a34223ddbe3f7d: ur,
      __wbg_port1_dabba0a56576e47e: Br,
      __wbg_port2_d05676aee003eedc: Lr,
      __wbg_blockSize_5af477b962b2b031: ne,
      __wbg_inlineSize_3c8412828bef21eb: kb,
      __wbg_addEventListener_d85450ee1320c989: v_,
      __wbg_removeEventListener_a3f23c70077bdcc1: Zr,
      __wbg_set_height_bbeef8f354041577: Ja,
      __wbg_getContext_fd298c901058eb31: Jn,
      __wbg_getContext_7476e39fa008047e: Xn,
      __wbg_new_25e75d1f0df4d87a: nr,
      __wbg_set_width_49ac9b7d914afc85: Wo,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: Ur,
      __wbg_getSupportedProfiles_90a4f330938d0241: xb,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: sc,
      __wbg_createObjectURL_416e527781e6fd6d: nt,
      __wbg_postMessage_ef2dbf5e8c8ebffc: Cr,
      __wbg_new_8f0c2d11e48a4727: ar,
      __wbg_get_b2053e9bfdf3ca8e: Ab,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: Wn,
      __wbg_disconnect_39bfdcb35b1fc7b9: cn,
      __wbg_observe_615bef91ee28c925: wr,
      __wbg_new_5394f65338077341: cr,
      __wbg_observe_f27242eadc2ebd47: mr,
      __wbg_unobserve_41a4f85162f1fb18: Iu,
      __wbg_set_type_8ce203e412e28cf6: Ao,
      __wbg_set_height_7d9d8f892e6964c6: Ha,
      __wbg_getContext_e79ddf6a9cb3cc76: Hn,
      __wbg_getContext_ca12bb65aab778a4: Yn,
      __wbg_set_width_8e30d010cd66830d: Uo,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: Bb,
      __wbg_new_32b398fb48b6d94a: br,
      __wbg_new_da52cf8fe3429cb2: fr,
      __wbg_length_1f0964f4a5e2c6d8: Vb,
      __wbg_prototypesetcall_4770620bbe4688a0: Vr,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: ir,
      __wbg_set_61e45ae8061eca11: Lc,
      __wbg_then_6ec10ae38b3e92f7: V0,
      __wbg_of_85f52f8b6491a7ca: xr,
      __wbg_of_5f1b88183ddb5d94: pr,
      __wbg_is_7b9d0b289033c7de: Rb,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: t0,
      __wbg_static_accessor_SELF_146583524fe1469b: n0,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: e0,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: b0,
      __wbg_resolve_2191a4dfe481c25b: gc,
      __wbg_set_8535240470bf2500: Ec,
      __wbg_queueMicrotask_6a09b7bc46549209: $r,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: Kr,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: s_,
      __wbg___wbindgen_throw_344f42d3211c4765: l_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: d_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: i_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: w_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: f_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: u_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: g_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: o_,
      __wbg__wbg_cb_unref_fffb441def202758: m_,
      __wbindgen_cast_0000000000000001: zu,
      __wbindgen_cast_0000000000000002: ju,
      __wbindgen_cast_0000000000000003: Ku,
      __wbindgen_cast_0000000000000004: $u,
      __wbindgen_cast_0000000000000005: Nu,
      __wbindgen_cast_0000000000000006: Qu,
      __wbindgen_cast_0000000000000007: Xu,
      __wbindgen_cast_0000000000000008: Yu,
      __wbindgen_cast_0000000000000009: Hu,
      __wbindgen_cast_000000000000000a: Ju,
      __wbindgen_cast_000000000000000b: Zu,
      __wbindgen_cast_000000000000000c: _d,
      __wbindgen_cast_000000000000000d: ed,
      __wbindgen_cast_000000000000000e: td,
      __wbindgen_cast_000000000000000f: nd,
      __wbindgen_cast_0000000000000010: bd,
      __wbindgen_cast_0000000000000011: rd,
      __wbindgen_cast_0000000000000012: cd,
      __wbindgen_cast_0000000000000013: ad,
      __wbindgen_cast_0000000000000014: fd,
      __wbindgen_cast_0000000000000015: od,
      __wbindgen_cast_0000000000000016: ud,
      __wbindgen_cast_0000000000000017: dd
    }
  }, b_), ri = m.memory, ci = m.main, ai = m.run_web, fi = m.__abort_handler, oi = m.__instance_terminated, ui = m.__wasm_bindgen_func_elem_11008, di = m.__wasm_bindgen_func_elem_2735, ii = m.__wasm_bindgen_func_elem_3747, gi = m.__wasm_bindgen_func_elem_3747_11, si = m.__wasm_bindgen_func_elem_3747_12, wi = m.__wasm_bindgen_func_elem_2737, li = m.__wasm_bindgen_func_elem_2737_3, mi = m.__wasm_bindgen_func_elem_2737_4, pi = m.__wasm_bindgen_func_elem_2737_5, xi = m.__wasm_bindgen_func_elem_2737_7, yi = m.__wasm_bindgen_func_elem_2737_8, hi = m.__wasm_bindgen_func_elem_2737_9, vi = m.__wasm_bindgen_func_elem_2737_10, Si = m.__wasm_bindgen_func_elem_2744, Ii = m.__wbindgen_export, Ai = m.__wbindgen_export2, Di = m.__wbindgen_export3, Pi = m.__wbindgen_export4, Mi = m.__wbindgen_export5, Fi = m.__wbindgen_add_to_stack_pointer, t_ = m.__wbindgen_start, Ti = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: fi,
    __instance_terminated: oi,
    __wasm_bindgen_func_elem_11008: ui,
    __wasm_bindgen_func_elem_2735: di,
    __wasm_bindgen_func_elem_2737: wi,
    __wasm_bindgen_func_elem_2737_10: vi,
    __wasm_bindgen_func_elem_2737_3: li,
    __wasm_bindgen_func_elem_2737_4: mi,
    __wasm_bindgen_func_elem_2737_5: pi,
    __wasm_bindgen_func_elem_2737_7: xi,
    __wasm_bindgen_func_elem_2737_8: yi,
    __wasm_bindgen_func_elem_2737_9: hi,
    __wasm_bindgen_func_elem_2744: Si,
    __wasm_bindgen_func_elem_3747: ii,
    __wasm_bindgen_func_elem_3747_11: gi,
    __wasm_bindgen_func_elem_3747_12: si,
    __wbindgen_add_to_stack_pointer: Fi,
    __wbindgen_export: Ii,
    __wbindgen_export2: Ai,
    __wbindgen_export3: Di,
    __wbindgen_export4: Pi,
    __wbindgen_export5: Mi,
    __wbindgen_start: t_,
    main: ci,
    memory: ri,
    run_web: ai
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  bi(Ti);
  t_();
})();
export {
  __tla,
  Bi as run_web
};
