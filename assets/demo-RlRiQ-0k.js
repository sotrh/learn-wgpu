import { _ as H } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Nu;
let __tla = (async () => {
  const J = "/learn-wgpu/assets/demo_bg-DHI9VCtI.wasm";
  Nu = function() {
    u.run_web();
  };
  function Z(_) {
    const e = t(_).Window;
    return c(e);
  }
  function __(_) {
    const e = t(_).Window;
    return c(e);
  }
  function e_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function t_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function n_(_, e) {
    const n = j(t(e)), r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function r_(_) {
    return typeof t(_) == "function";
  }
  function b_(_) {
    return t(_) === null;
  }
  function c_(_) {
    return typeof t(_) == "string";
  }
  function a_(_) {
    return t(_) === void 0;
  }
  function f_(_, e) {
    const n = t(e), r = typeof n == "number" ? n : void 0;
    w().setFloat64(_ + 8, s(r) ? 0 : r, true), w().setInt32(_ + 0, !s(r), true);
  }
  function o_(_, e) {
    const n = t(e), r = typeof n == "string" ? n : void 0;
    var b = s(r) ? 0 : h(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function u_(_, e) {
    throw new Error(l(_, e));
  }
  function d_(_) {
    t(_)._wbg_cb_unref();
  }
  function i_(_) {
    t(_).abort();
  }
  function g_(_) {
    const e = t(_).activeElement;
    return s(e) ? 0 : c(e);
  }
  function s_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function w_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function l_() {
    return d(function(_, e, n, r) {
      t(_).addEventListener(l(e, n), t(r));
    }, arguments);
  }
  function m_() {
    return d(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function p_(_) {
    return t(_).altKey;
  }
  function x_(_) {
    return t(_).altKey;
  }
  function y_(_, e, n) {
    const r = t(_).animate(t(e), t(n));
    return c(r);
  }
  function h_() {
    return d(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function S_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function v_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function I_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function D_() {
    return d(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function A_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, l(r, b));
  }
  function P_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, l(r, b));
  }
  function M_(_, e, n, r, b, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(r), b, a);
  }
  function F_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function k_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function T_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function E_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function L_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function O_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function C_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function B_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function R_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function q_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function V_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function W_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function G_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function U_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function j_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function K_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function $_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function z_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function N_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Q_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function X_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function Y_(_, e, n, r, b, a, f, o, i, g, p) {
    t(_).blitFramebuffer(e, n, r, b, a, f, o, i, g >>> 0, p >>> 0);
  }
  function H_(_) {
    return t(_).blockSize;
  }
  function J_(_) {
    const e = t(_).body;
    return s(e) ? 0 : c(e);
  }
  function Z_(_, e) {
    const n = t(e).brand, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function _e(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ee(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function te(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ne(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function re(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function be(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function ce(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function ae(_) {
    return t(_).button;
  }
  function fe(_) {
    return t(_).buttons;
  }
  function oe() {
    return d(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function ue(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function de(_) {
    t(_).cancel();
  }
  function ie(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function ge(_, e, n, r, b) {
    t(_).clearBufferfv(e >>> 0, n, x(r, b));
  }
  function se(_, e, n, r, b) {
    t(_).clearBufferiv(e >>> 0, n, D(r, b));
  }
  function we(_, e, n, r, b) {
    t(_).clearBufferuiv(e >>> 0, n, E(r, b));
  }
  function le(_, e) {
    t(_).clearDepth(e);
  }
  function me(_, e) {
    t(_).clearDepth(e);
  }
  function pe(_, e) {
    t(_).clearStencil(e);
  }
  function xe(_, e) {
    t(_).clearStencil(e);
  }
  function ye(_, e) {
    t(_).clearTimeout(e);
  }
  function he(_, e) {
    t(_).clear(e >>> 0);
  }
  function Se(_, e) {
    t(_).clear(e >>> 0);
  }
  function ve(_, e, n, r) {
    return t(_).clientWaitSync(t(e), n >>> 0, r >>> 0);
  }
  function Ie(_) {
    t(_).close();
  }
  function De(_, e) {
    const n = t(e).code, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Ae(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function Pe(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function Me(_, e) {
    t(_).compileShader(t(e));
  }
  function Fe(_, e) {
    t(_).compileShader(t(e));
  }
  function ke(_, e, n, r, b, a, f, o, i, g) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i, g);
  }
  function Te(_, e, n, r, b, a, f, o, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, t(i));
  }
  function Ee(_, e, n, r, b, a, f, o, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, t(i));
  }
  function Le(_, e, n, r, b, a, f, o, i, g, p, S) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p, S);
  }
  function Oe(_, e, n, r, b, a, f, o, i, g, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, t(p));
  }
  function Ce() {
    return d(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function Be(_, e) {
    return t(_).contains(t(e));
  }
  function Re(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function qe(_, e, n, r, b, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, r, b, a);
  }
  function Ve(_, e, n, r, b, a, f, o, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, o, i);
  }
  function We(_, e, n, r, b, a, f, o, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, o, i);
  }
  function Ge(_, e, n, r, b, a, f, o, i, g) {
    t(_).copyTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g);
  }
  function Ue(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function je(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function Ke(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function $e() {
    return d(function(_, e, n) {
      const r = t(_).createElement(l(e, n));
      return c(r);
    }, arguments);
  }
  function ze(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function Ne(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function Qe() {
    return d(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
      w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Xe(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function Ye(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function He(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function Je(_) {
    const e = t(_).createQuery();
    return s(e) ? 0 : c(e);
  }
  function Ze() {
    return d(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function _t(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function et(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function tt(_) {
    const e = t(_).createSampler();
    return s(e) ? 0 : c(e);
  }
  function nt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function rt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function bt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function ct(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function at(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function ft(_) {
    const e = t(_).createVertexArrayOES();
    return s(e) ? 0 : c(e);
  }
  function ot(_) {
    const e = t(_).createVertexArray();
    return s(e) ? 0 : c(e);
  }
  function ut() {
    return d(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function dt(_) {
    return t(_).ctrlKey;
  }
  function it(_) {
    return t(_).ctrlKey;
  }
  function gt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function st(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function wt(_) {
    console.debug(t(_));
  }
  function lt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function mt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function pt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function xt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function yt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function ht(_, e) {
    t(_).deleteProgram(t(e));
  }
  function St(_, e) {
    t(_).deleteQuery(t(e));
  }
  function vt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function It(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Dt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function At(_, e) {
    t(_).deleteShader(t(e));
  }
  function Pt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Mt(_, e) {
    t(_).deleteSync(t(e));
  }
  function Ft(_, e) {
    t(_).deleteTexture(t(e));
  }
  function kt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Tt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Et(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Lt(_) {
    return t(_).deltaMode;
  }
  function Ot(_) {
    return t(_).deltaX;
  }
  function Ct(_) {
    return t(_).deltaY;
  }
  function Bt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Rt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function qt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Vt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Wt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Gt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Ut(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function jt(_) {
    return t(_).devicePixelRatio;
  }
  function Kt(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function $t(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function zt(_, e) {
    t(_).disable(e >>> 0);
  }
  function Nt(_, e) {
    t(_).disable(e >>> 0);
  }
  function Qt(_) {
    t(_).disconnect();
  }
  function Xt(_) {
    t(_).disconnect();
  }
  function Yt(_) {
    const e = t(_).document;
    return s(e) ? 0 : c(e);
  }
  function Ht(_, e, n, r, b) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, b);
  }
  function Jt(_, e, n, r, b) {
    t(_).drawArraysInstanced(e >>> 0, n, r, b);
  }
  function Zt(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function _n(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function en(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function tn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function nn(_, e, n, r, b, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, b, a);
  }
  function rn(_, e, n, r, b, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, b, a);
  }
  function bn(_, e, n, r, b) {
    t(_).draw(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function cn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function an(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function fn(_, e) {
    t(_).enable(e >>> 0);
  }
  function on(_, e) {
    t(_).enable(e >>> 0);
  }
  function un(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function dn(_) {
    t(_).end();
  }
  function gn(_) {
    console.error(t(_));
  }
  function sn(_, e) {
    console.error(t(_), t(e));
  }
  function wn(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(l(_, e));
    } finally {
      u.__wbindgen_export4(n, r, 1);
    }
  }
  function ln(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return s(r) ? 0 : c(r);
  }
  function mn(_) {
    t(_).finish();
  }
  function pn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function xn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function yn(_) {
    t(_).finish();
  }
  function hn(_) {
    t(_).flush();
  }
  function Sn(_) {
    t(_).flush();
  }
  function vn() {
    return d(function(_) {
      t(_).focus();
    }, arguments);
  }
  function In(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function Dn(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function An(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Pn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Mn(_, e, n, r, b, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), b, a);
  }
  function Fn(_, e, n, r, b, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), b, a, f);
  }
  function kn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Tn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function En(_) {
    const e = t(_).fullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Ln(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function On(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function Cn(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function Bn() {
    return d(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return s(n) ? 0 : c(n);
    }, arguments);
  }
  function Rn() {
    return d(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function qn() {
    return d(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Vn() {
    return d(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Wn() {
    return d(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Gn() {
    return d(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function Un(_, e, n) {
    const r = t(_).getElementById(l(e, n));
    return s(r) ? 0 : c(r);
  }
  function jn() {
    return d(function(_, e, n) {
      const r = t(_).getExtension(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Kn() {
    return d(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(r);
    }, arguments);
  }
  function $n(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function zn() {
    return d(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Nn() {
    return d(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Qn(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (T.indexOf(e) + 1 || 102) - 1;
  }
  function Xn(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function Yn(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function Hn(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function Jn(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function Zn() {
    return d(function(_, e, n, r) {
      const b = t(e).getPropertyValue(l(n, r)), a = h(b, u.__wbindgen_export, u.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function _r(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return c(r);
  }
  function er(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function tr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function nr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function rr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function br(_) {
    const e = t(_).getSupportedExtensions();
    return s(e) ? 0 : c(e);
  }
  function cr(_) {
    const e = t(_).getSupportedProfiles();
    return s(e) ? 0 : c(e);
  }
  function ar(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return c(r);
  }
  function fr(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), l(n, r));
  }
  function or(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function ur(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function dr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function ir(_, e) {
    const n = t(_)[e >>> 0];
    return s(n) ? 0 : c(n);
  }
  function gr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function sr(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function wr(_) {
    return t(_).height;
  }
  function lr(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function mr(_) {
    console.info(t(_));
  }
  function pr(_) {
    return t(_).inlineSize;
  }
  function xr(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function yr(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function hr(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Sr() {
    return d(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function vr(_) {
    return t(_).isIntersecting;
  }
  function Ir(_, e) {
    return Object.is(t(_), t(e));
  }
  function Dr(_, e) {
    const n = t(e).key, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Ar(_, e) {
    const n = t(e).label, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Pr(_) {
    return t(_).length;
  }
  function Mr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Fr(_, e) {
    t(_).linkProgram(t(e));
  }
  function kr(_) {
    return t(_).location;
  }
  function Tr(_) {
    console.log(t(_));
  }
  function Er(_, e, n, r) {
    const b = t(_).mapAsync(e >>> 0, n, r);
    return c(b);
  }
  function Lr() {
    return d(function(_, e, n) {
      const r = t(_).matchMedia(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Or(_) {
    return t(_).matches;
  }
  function Cr(_, e) {
    const n = t(e).media, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Br(_) {
    return t(_).metaKey;
  }
  function Rr(_) {
    return t(_).metaKey;
  }
  function qr(_) {
    return t(_).movementX;
  }
  function Vr(_) {
    return t(_).movementY;
  }
  function Wr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Gr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Ur() {
    const _ = new Error();
    return c(_);
  }
  function jr() {
    return d(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function Kr() {
    const _ = new Array();
    return c(_);
  }
  function $r() {
    return d(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function zr() {
    return d(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Nr() {
    return d(function(_, e) {
      const n = new Worker(l(_, e));
      return c(n);
    }, arguments);
  }
  function Qr() {
    const _ = new Object();
    return c(_);
  }
  function Xr() {
    return d(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Yr() {
    return d(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function Hr() {
    const _ = new Object();
    return c(_);
  }
  function Jr() {
    return d(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Zr(_) {
    return t(_).now();
  }
  function _b(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function eb(_, e) {
    t(_).observe(t(e));
  }
  function tb(_, e) {
    t(_).observe(t(e));
  }
  function nb(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function rb(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function bb(_) {
    return t(_).offsetX;
  }
  function cb(_) {
    return t(_).offsetY;
  }
  function ab(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function fb(_) {
    const e = t(_).performance;
    return c(e);
  }
  function ob(_) {
    return t(_).persisted;
  }
  function ub(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function db(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function ib(_) {
    t(_).play();
  }
  function gb(_) {
    return t(_).pointerId;
  }
  function sb(_, e) {
    const n = t(e).pointerType, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function wb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function lb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function mb(_) {
    const e = t(_).port1;
    return c(e);
  }
  function pb(_) {
    const e = t(_).port2;
    return c(e);
  }
  function xb() {
    return d(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function yb() {
    return d(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function hb(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return c(r);
  }
  function Sb(_) {
    return t(_).pressure;
  }
  function vb(_) {
    t(_).preventDefault();
  }
  function Ib() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function Db(_, e) {
    return t(_).push(t(e));
  }
  function Ab(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function Pb() {
    return d(function(_, e, n) {
      const r = t(_).querySelectorAll(l(e, n));
      return c(r);
    }, arguments);
  }
  function Mb() {
    return d(function(_, e, n) {
      const r = t(_).querySelector(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Fb(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function kb(_) {
    queueMicrotask(t(_));
  }
  function Tb(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function Eb(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Lb(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Ob() {
    return d(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Cb() {
    return d(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Bb() {
    return d(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Rb() {
    return d(function(_, e, n, r) {
      t(_).removeEventListener(l(e, n), t(r));
    }, arguments);
  }
  function qb() {
    return d(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Vb() {
    return d(function(_, e, n, r) {
      const b = t(e).removeProperty(l(n, r)), a = h(b, u.__wbindgen_export, u.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Wb(_, e, n, r, b, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, b, a);
  }
  function Gb(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function Ub(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function jb(_) {
    return t(_).repeat;
  }
  function Kb(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function $b() {
    return d(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function zb(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function Nb(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function Qb(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function Xb(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function Yb() {
    return d(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Hb(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function Jb() {
    return d(function(_, e) {
      URL.revokeObjectURL(l(_, e));
    }, arguments);
  }
  function Zb(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function _c(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function ec(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function tc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function nc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function rc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function bc() {
    return d(function(_, e, n, r, b) {
      t(_).setAttribute(l(e, n), l(r, b));
    }, arguments);
  }
  function cc(_, e) {
    t(_).setPipeline(t(e));
  }
  function ac() {
    return d(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function fc() {
    return d(function(_, e, n, r, b) {
      t(_).setProperty(l(e, n), l(r, b));
    }, arguments);
  }
  function oc() {
    return d(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function uc() {
    return d(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function dc() {
    return d(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function ic(_, e) {
    t(_).a = e;
  }
  function gc(_, e) {
    t(_).alpha = t(e);
  }
  function sc(_, e) {
    t(_).alphaMode = N0[e];
  }
  function wc(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function lc(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function mc(_, e) {
    t(_).arrayStride = e;
  }
  function pc(_, e) {
    t(_).aspect = _u[e];
  }
  function xc(_, e, n) {
    t(_).attributes = A(e, n);
  }
  function yc(_, e) {
    t(_).b = e;
  }
  function hc(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Sc(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function vc(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Ic(_, e, n) {
    t(_).bindGroupLayouts = A(e, n);
  }
  function Dc(_, e) {
    t(_).blend = t(e);
  }
  function Ac(_, e) {
    t(_).box = ru[e];
  }
  function Pc(_, e, n) {
    t(_).buffers = A(e, n);
  }
  function Mc(_, e) {
    t(_).clearValue = t(e);
  }
  function Fc(_, e, n) {
    t(_).code = l(e, n);
  }
  function kc(_, e) {
    t(_).color = t(e);
  }
  function Tc(_, e, n) {
    t(_).colorAttachments = A(e, n);
  }
  function Ec(_, e) {
    t(_).compare = X[e];
  }
  function Lc(_, e) {
    t(_).count = e >>> 0;
  }
  function Oc(_, e) {
    t(_).cullMode = X0[e];
  }
  function Cc(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Bc(_, e) {
    t(_).depthBias = e;
  }
  function Rc(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function qc(_, e) {
    t(_).depthClearValue = e;
  }
  function Vc(_, e) {
    t(_).depthCompare = X[e];
  }
  function Wc(_, e) {
    t(_).depthFailOp = $[e];
  }
  function Gc(_, e) {
    t(_).depthLoadOp = K[e];
  }
  function Uc(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function jc(_, e) {
    t(_).depthStencil = t(e);
  }
  function Kc(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function $c(_, e) {
    t(_).depthStoreOp = z[e];
  }
  function zc(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Nc(_, e) {
    t(_).device = t(e);
  }
  function Qc(_, e) {
    t(_).dimension = eu[e];
  }
  function Xc(_, e) {
    t(_).dstFactor = Q[e];
  }
  function Yc(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function Hc(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function Jc(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function Zc(_, e) {
    t(_).failOp = $[e];
  }
  function _a(_, e) {
    t(_).format = T[e];
  }
  function ea(_, e) {
    t(_).format = tu[e];
  }
  function ta(_, e) {
    t(_).format = T[e];
  }
  function na(_, e) {
    t(_).format = T[e];
  }
  function ra(_, e) {
    t(_).format = T[e];
  }
  function ba(_, e) {
    t(_).fragment = t(e);
  }
  function ca(_, e) {
    t(_).frontFace = Y0[e];
  }
  function aa(_, e) {
    t(_).g = e;
  }
  function fa(_, e) {
    t(_).height = e >>> 0;
  }
  function oa(_, e) {
    t(_).height = e >>> 0;
  }
  function ua(_, e, n) {
    t(_).label = l(e, n);
  }
  function da(_, e, n) {
    t(_).label = l(e, n);
  }
  function ia(_, e, n) {
    t(_).label = l(e, n);
  }
  function ga(_, e, n) {
    t(_).label = l(e, n);
  }
  function sa(_, e, n) {
    t(_).label = l(e, n);
  }
  function wa(_, e, n) {
    t(_).label = l(e, n);
  }
  function la(_, e, n) {
    t(_).label = l(e, n);
  }
  function ma(_, e, n) {
    t(_).label = l(e, n);
  }
  function pa(_, e) {
    t(_).layout = t(e);
  }
  function xa(_, e) {
    t(_).layout = $0[e];
  }
  function ya(_, e) {
    t(_).loadOp = K[e];
  }
  function ha(_, e) {
    t(_).mask = e >>> 0;
  }
  function Sa(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function va(_, e) {
    t(_).mode = Q0[e];
  }
  function Ia(_, e) {
    t(_).module = t(e);
  }
  function Da(_, e) {
    t(_).module = t(e);
  }
  function Aa(_, e) {
    t(_).multisample = t(e);
  }
  function Pa(_, e) {
    t(_).offset = e;
  }
  function Ma(_, e) {
    t(_).onmessage = t(e);
  }
  function Fa(_, e) {
    t(_).operation = z0[e];
  }
  function ka(_, e) {
    t(_).passOp = $[e];
  }
  function Ta(_, e) {
    t(_).powerPreference = J0[e];
  }
  function Ea(_, e) {
    t(_).primitive = t(e);
  }
  function La(_, e) {
    t(_).querySet = t(e);
  }
  function Oa(_, e) {
    t(_).r = e;
  }
  function Ca(_, e, n) {
    t(_).requiredFeatures = A(e, n);
  }
  function Ba(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Ra(_, e) {
    t(_).resolveTarget = t(e);
  }
  function qa(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function Va(_, e) {
    t(_).srcFactor = Q[e];
  }
  function Wa(_, e) {
    t(_).stencilBack = t(e);
  }
  function Ga(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function Ua(_, e) {
    t(_).stencilFront = t(e);
  }
  function ja(_, e) {
    t(_).stencilLoadOp = K[e];
  }
  function Ka(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function $a(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function za(_, e) {
    t(_).stencilStoreOp = z[e];
  }
  function Na(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function Qa(_, e) {
    t(_).stepMode = nu[e];
  }
  function Xa(_, e) {
    t(_).storeOp = z[e];
  }
  function Ya(_, e) {
    t(_).stripIndexFormat = H0[e];
  }
  function Ha(_, e, n) {
    t(_).targets = A(e, n);
  }
  function Ja(_, e) {
    t(_).timestampWrites = t(e);
  }
  function Za(_, e) {
    t(_).toneMapping = t(e);
  }
  function _f(_, e) {
    t(_).topology = Z0[e];
  }
  function ef(_, e, n) {
    t(_).type = l(e, n);
  }
  function tf(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function nf(_, e) {
    t(_).usage = e >>> 0;
  }
  function rf(_, e) {
    t(_).usage = e >>> 0;
  }
  function bf(_, e) {
    t(_).vertex = t(e);
  }
  function cf(_, e, n) {
    t(_).viewFormats = A(e, n);
  }
  function af(_, e) {
    t(_).view = t(e);
  }
  function ff(_, e) {
    t(_).view = t(e);
  }
  function of(_, e) {
    t(_).width = e >>> 0;
  }
  function uf(_, e) {
    t(_).width = e >>> 0;
  }
  function df(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function gf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function sf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function wf(_) {
    return t(_).shiftKey;
  }
  function lf(_) {
    return t(_).shiftKey;
  }
  function mf(_) {
    const e = t(_).signal;
    return c(e);
  }
  function pf(_, e) {
    const n = t(e).stack, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function xf(_) {
    t(_).start();
  }
  function yf() {
    const _ = typeof global > "u" ? null : global;
    return s(_) ? 0 : c(_);
  }
  function hf() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return s(_) ? 0 : c(_);
  }
  function Sf() {
    const _ = typeof self > "u" ? null : self;
    return s(_) ? 0 : c(_);
  }
  function vf() {
    const _ = typeof window > "u" ? null : window;
    return s(_) ? 0 : c(_);
  }
  function If(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Df(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Af(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Pf(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Mf(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Ff(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function kf(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Tf(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Ef(_) {
    const e = t(_).style;
    return c(e);
  }
  function Lf(_, e, n) {
    t(_).submit(A(e, n));
  }
  function Of() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Cf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Bf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Rf() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, p);
    }, arguments);
  }
  function qf() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, t(p));
    }, arguments);
  }
  function Vf(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function Wf(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function Gf(_, e, n, r, b, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, b, a);
  }
  function Uf(_, e, n, r, b, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, b, a, f);
  }
  function jf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Kf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function $f() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function zf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Nf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Qf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Xf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Yf() {
    return d(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Hf() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function Jf() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function Zf() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function _o() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, S);
    }, arguments);
  }
  function eo() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function to() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function no() {
    return d(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function ro(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return c(r);
  }
  function bo(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function co(_) {
    t(_).unconfigure();
  }
  function ao(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function fo(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function oo(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function uo(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function io(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function go(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function so(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function wo(_, e, n, r) {
    t(_).uniform2iv(t(e), D(n, r));
  }
  function lo(_, e, n, r) {
    t(_).uniform2iv(t(e), D(n, r));
  }
  function mo(_, e, n, r) {
    t(_).uniform2uiv(t(e), E(n, r));
  }
  function po(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function xo(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function yo(_, e, n, r) {
    t(_).uniform3iv(t(e), D(n, r));
  }
  function ho(_, e, n, r) {
    t(_).uniform3iv(t(e), D(n, r));
  }
  function So(_, e, n, r) {
    t(_).uniform3uiv(t(e), E(n, r));
  }
  function vo(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Io(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Do(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function Ao(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function Po(_, e, n, r) {
    t(_).uniform4iv(t(e), D(n, r));
  }
  function Mo(_, e, n, r) {
    t(_).uniform4iv(t(e), D(n, r));
  }
  function Fo(_, e, n, r) {
    t(_).uniform4uiv(t(e), E(n, r));
  }
  function ko(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function To(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Eo(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Lo(_, e, n, r, b) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(r, b));
  }
  function Oo(_, e, n, r, b) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(r, b));
  }
  function Co(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function Bo(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function Ro(_, e, n, r, b) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(r, b));
  }
  function qo(_, e, n, r, b) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(r, b));
  }
  function Vo(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function Wo(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function Go(_, e, n, r, b) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(r, b));
  }
  function Uo(_, e, n, r, b) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(r, b));
  }
  function jo(_, e) {
    t(_).unobserve(t(e));
  }
  function Ko(_, e) {
    t(_).useProgram(t(e));
  }
  function $o(_, e) {
    t(_).useProgram(t(e));
  }
  function zo(_) {
    const e = t(_).userAgentData;
    return s(e) ? 0 : c(e);
  }
  function No() {
    return d(function(_, e) {
      const n = t(e).userAgent, r = h(n, u.__wbindgen_export, u.__wbindgen_export2), b = y;
      w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Qo(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function Xo(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function Yo(_, e, n, r, b, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, b, a);
  }
  function Ho(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function Jo(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function Zo(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function _0(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function e0(_) {
    const e = t(_).visibilityState;
    return (bu.indexOf(e) + 1 || 3) - 1;
  }
  function t0(_) {
    console.warn(t(_));
  }
  function n0(_) {
    const e = t(_).webkitFullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function r0(_) {
    t(_).webkitRequestFullscreen();
  }
  function b0(_) {
    return t(_).width;
  }
  function c0(_, e) {
    const n = v(_, e, E0);
    return c(n);
  }
  function a0(_, e) {
    const n = v(_, e, W0);
    return c(n);
  }
  function f0(_, e) {
    const n = v(_, e, G0);
    return c(n);
  }
  function o0(_, e) {
    const n = v(_, e, L0);
    return c(n);
  }
  function u0(_, e) {
    const n = v(_, e, O0);
    return c(n);
  }
  function d0(_, e) {
    const n = v(_, e, C0);
    return c(n);
  }
  function i0(_, e) {
    const n = v(_, e, U0);
    return c(n);
  }
  function g0(_, e) {
    const n = v(_, e, B0);
    return c(n);
  }
  function s0(_, e) {
    const n = v(_, e, R0);
    return c(n);
  }
  function w0(_, e) {
    const n = v(_, e, q0);
    return c(n);
  }
  function l0(_, e) {
    const n = v(_, e, V0);
    return c(n);
  }
  function m0(_, e) {
    const n = v(_, e, j0);
    return c(n);
  }
  function p0(_, e) {
    const n = v(_, e, K0);
    return c(n);
  }
  function x0(_, e) {
    const n = v(_, e, T0);
    return c(n);
  }
  function y0(_) {
    return c(_);
  }
  function h0(_, e) {
    const n = x(_, e);
    return c(n);
  }
  function S0(_, e) {
    const n = au(_, e);
    return c(n);
  }
  function v0(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function I0(_, e) {
    const n = fu(_, e);
    return c(n);
  }
  function D0(_, e) {
    const n = ou(_, e);
    return c(n);
  }
  function A0(_, e) {
    const n = E(_, e);
    return c(n);
  }
  function P0(_, e) {
    const n = uu(_, e);
    return c(n);
  }
  function M0(_, e) {
    const n = l(_, e);
    return c(n);
  }
  function F0(_) {
    const e = t(_);
    return c(e);
  }
  function k0(_) {
    L(_);
  }
  function T0(_, e) {
    u.__wasm_bindgen_func_elem_6610(_, e);
  }
  function E0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611(_, e, c(n));
  }
  function L0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_3(_, e, c(n));
  }
  function O0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_4(_, e, c(n));
  }
  function C0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_5(_, e, c(n));
  }
  function B0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_7(_, e, c(n));
  }
  function R0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_8(_, e, c(n));
  }
  function q0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_9(_, e, c(n));
  }
  function V0(_, e, n) {
    u.__wasm_bindgen_func_elem_6611_10(_, e, c(n));
  }
  function W0(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_9527(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function G0(_, e, n, r) {
    u.__wasm_bindgen_func_elem_6612(_, e, c(n), c(r));
  }
  function U0(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1599(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function j0(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1599_11(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function K0(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1599_12(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const $0 = [
    "auto"
  ], Q = [
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
  ], z0 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], N0 = [
    "opaque",
    "premultiplied"
  ], Q0 = [
    "standard",
    "extended"
  ], X = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], X0 = [
    "none",
    "front",
    "back"
  ], Y0 = [
    "ccw",
    "cw"
  ], H0 = [
    "uint16",
    "uint32"
  ], K = [
    "load",
    "clear"
  ], J0 = [
    "low-power",
    "high-performance"
  ], Z0 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], $ = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], z = [
    "store",
    "discard"
  ], _u = [
    "all",
    "stencil-only",
    "depth-only"
  ], T = [
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
  ], eu = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], tu = [
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
  ], nu = [
    "vertex",
    "instance"
  ], ru = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], bu = [
    "hidden",
    "visible"
  ];
  function c(_) {
    F === I.length && I.push(I.length + 1);
    const e = F;
    return F = I[e], I[e] = _, e;
  }
  const N = typeof FinalizationRegistry > "u" ? {
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
      const b = _.description;
      return b == null ? "Symbol" : `Symbol(${b})`;
    }
    if (e == "function") {
      const b = _.name;
      return typeof b == "string" && b.length > 0 ? `Function(${b})` : "Function";
    }
    if (Array.isArray(_)) {
      const b = _.length;
      let a = "[";
      b > 0 && (a += j(_[0]));
      for (let f = 1; f < b; f++) a += ", " + j(_[f]);
      return a += "]", a;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let r;
    if (n && n.length > 1) r = n[1];
    else return toString.call(_);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : r;
  }
  function cu(_) {
    _ < 1028 || (I[_] = F, F = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, du().subarray(_ / 4, _ / 4 + e);
  }
  function au(_, e) {
    return _ = _ >>> 0, iu().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, gu().subarray(_ / 4, _ / 4 + e);
  }
  function fu(_, e) {
    return _ = _ >>> 0, su().subarray(_ / 1, _ / 1 + e);
  }
  function A(_, e) {
    _ = _ >>> 0;
    const n = w(), r = [];
    for (let b = _; b < _ + 4 * e; b += 4) r.push(t(n.getUint32(b, true)));
    return r;
  }
  function ou(_, e) {
    return _ = _ >>> 0, wu().subarray(_ / 2, _ / 2 + e);
  }
  function E(_, e) {
    return _ = _ >>> 0, lu().subarray(_ / 4, _ / 4 + e);
  }
  function uu(_, e) {
    return _ = _ >>> 0, M().subarray(_ / 1, _ / 1 + e);
  }
  let P = null;
  function w() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== u.memory.buffer) && (P = new DataView(u.memory.buffer)), P;
  }
  let O = null;
  function du() {
    return (O === null || O.byteLength === 0) && (O = new Float32Array(u.memory.buffer)), O;
  }
  let C = null;
  function iu() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(u.memory.buffer)), C;
  }
  let B = null;
  function gu() {
    return (B === null || B.byteLength === 0) && (B = new Int32Array(u.memory.buffer)), B;
  }
  let R = null;
  function su() {
    return (R === null || R.byteLength === 0) && (R = new Int8Array(u.memory.buffer)), R;
  }
  function l(_, e) {
    return pu(_ >>> 0, e);
  }
  let q = null;
  function wu() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(u.memory.buffer)), q;
  }
  let V = null;
  function lu() {
    return (V === null || V.byteLength === 0) && (V = new Uint32Array(u.memory.buffer)), V;
  }
  let W = null;
  function M() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(u.memory.buffer)), W;
  }
  function t(_) {
    return I[_];
  }
  function d(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      u.__wbindgen_export3(c(n));
    }
  }
  let I = new Array(1024).fill(void 0);
  I.push(void 0, null, true, false);
  let F = I.length;
  function s(_) {
    return _ == null;
  }
  function v(_, e, n) {
    const r = {
      a: _,
      b: e,
      cnt: 1
    }, b = (...a) => {
      r.cnt++;
      const f = r.a;
      r.a = 0;
      try {
        return n(f, r.b, ...a);
      } finally {
        r.a = f, b._wbg_cb_unref();
      }
    };
    return b._wbg_cb_unref = () => {
      --r.cnt === 0 && (u.__wbindgen_export5(r.a, r.b), r.a = 0, N.unregister(r));
    }, N.register(b, r, r), b;
  }
  function h(_, e, n) {
    if (n === void 0) {
      const o = k.encode(_), i = e(o.length, 1) >>> 0;
      return M().subarray(i, i + o.length).set(o), y = o.length, i;
    }
    let r = _.length, b = e(r, 1) >>> 0;
    const a = M();
    let f = 0;
    for (; f < r; f++) {
      const o = _.charCodeAt(f);
      if (o > 127) break;
      a[b + f] = o;
    }
    if (f !== r) {
      f !== 0 && (_ = _.slice(f)), b = n(b, r, r = f + _.length * 3, 1) >>> 0;
      const o = M().subarray(b + f, b + r), i = k.encodeInto(_, o);
      f += i.written, b = n(b, r, f, 1) >>> 0;
    }
    return y = f, b;
  }
  function L(_) {
    const e = t(_);
    return cu(_), e;
  }
  let G = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  G.decode();
  const mu = 2146435072;
  let U = 0;
  function pu(_, e) {
    return U += e, U >= mu && (G = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), G.decode(), U = e), G.decode(M().subarray(_, _ + e));
  }
  const k = new TextEncoder();
  "encodeInto" in k || (k.encodeInto = function(_, e) {
    const n = k.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let y = 0, u;
  function xu(_) {
    u = _;
  }
  URL = globalThis.URL;
  const m = await H({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: k0,
      __wbg_new_227d7c05414eb861: Ur,
      __wbg_stack_3b0d974bbf31e44f: pf,
      __wbg_error_a6fa202b58aa1cd3: wn,
      __wbindgen_object_clone_ref: F0,
      __wbg_set_dst_factor_ec7407f19be1aff9: Xc,
      __wbg_set_operation_62ce44e1728c4047: Fa,
      __wbg_set_src_factor_9bfe84af9b7b5cac: Va,
      __wbg_length_370319915dc99107: Pr,
      __wbg_Window_afcc911b2f9c92e2: Z,
      __wbg_gpu_2ccc250735d24a2a: sr,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: e_,
      __wbg_set_a_88262a42340d0b1c: ic,
      __wbg_set_b_c47befe0af3261eb: yc,
      __wbg_set_g_5983abfc46e0cf4e: aa,
      __wbg_set_r_c6f4c68f4804d655: Oa,
      __wbg_queue_adce34608fd0c893: Eb,
      __wbg_set_power_preference_8fdca0b7af640d49: Ta,
      __wbg_requestAdapter_2e6718811c735a57: Kb,
      __wbg_set_color_attachments_581fdb3310e4abfa: Tc,
      __wbg_set_label_17eb9fe3a02f62b0: da,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: ff,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: qc,
      __wbg_set_depth_load_op_511c513eab4e56a9: Gc,
      __wbg_set_depth_store_op_c89f33b39b43361c: $c,
      __wbg_set_depth_read_only_7f41a74741c144ec: Uc,
      __wbg_set_stencil_clear_value_42be608809151e2a: Ga,
      __wbg_set_stencil_load_op_31838c036993098a: ja,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: za,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: $a,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Kc,
      __wbg_set_query_set_41de86d2401aee04: La,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: vc,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: Yc,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: Ja,
      __wbg_beginRenderPass_aa22c432e793359a: D_,
      __wbg_label_7ed42f25f841996b: Ar,
      __wbg_set_label_08d9be3e4719c226: ua,
      __wbg_finish_4d91de5e927dd13f: pn,
      __wbg_finish_6e06b68ab68cd9f6: xn,
      __wbg_setPipeline_c41bf46790f27f9e: cc,
      __wbg_draw_6877f98847e1e36c: bn,
      __wbg_end_f99ebed53d4e198a: dn,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: Qn,
      __wbg_getCurrentTexture_20714d1bd9051cab: Gn,
      __wbg_set_device_e275d1d4f3c9eb74: Nc,
      __wbg_set_format_815efd4dc4817bbb: na,
      __wbg_set_usage_a137f82ca163b0a9: nf,
      __wbg_set_alpha_mode_df805952892caa9c: sc,
      __wbg_set_mode_9990b3393ba469ae: va,
      __wbg_set_tone_mapping_b3464f1baa4cff92: Za,
      __wbg_set_view_formats_5797d2fff3c11808: cf,
      __wbg_configure_0e4789c0f6b35c8e: Ce,
      __wbg_new_typed_4148bd5ae72ab3f0: Hr,
      __wbg_set_required_limits_871ed33c68613dcb: Ba,
      __wbg_set_required_features_1baf274a8669db60: Ca,
      __wbg_set_label_60ad96c811e0d109: ia,
      __wbg_requestDevice_ab46d0519ea1cc34: zb,
      __wbg_set_code_b4f37f81f45b5b25: Fc,
      __wbg_set_label_e3944e54881b8c50: la,
      __wbg_createShaderModule_2e44fc7677c6288b: nt,
      __wbg_set_label_72bb4f41ef0cb893: ga,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: Ke,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: Ic,
      __wbg_set_label_9556af8b5cda3c9d: sa,
      __wbg_createPipelineLayout_2c8cd4528b06c108: Xe,
      __wbg_set_module_d0e2098713606cae: Ia,
      __wbg_set_entry_point_e87e79251dd3144f: Jc,
      __wbg_set_buffers_7d0d8f507699e956: Pc,
      __wbg_set_layout_50ab727f44b38f26: pa,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: xa,
      __wbg_set_vertex_0be5d146f9ff6f36: bf,
      __wbg_set_label_e922700240417ab5: ma,
      __wbg_set_format_e52bdcca880d2c8e: ra,
      __wbg_set_depth_compare_0c8631eb2eae98e3: Vc,
      __wbg_set_depth_write_enabled_ce89750042940350: zc,
      __wbg_set_depth_bias_d7cd16096242a657: Bc,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: Cc,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: Rc,
      __wbg_set_compare_f36b34abfaa08ccb: Ec,
      __wbg_set_depth_fail_op_668155ae33d3c06f: Wc,
      __wbg_set_fail_op_92f716dbc88b6973: Zc,
      __wbg_set_pass_op_cf02fa088d6352a7: ka,
      __wbg_set_stencil_back_85b22f1db5b1940a: Wa,
      __wbg_set_stencil_front_525526164a798a44: Ua,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: Ka,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: Na,
      __wbg_set_depth_stencil_97506c7bea4f53da: jc,
      __wbg_set_module_f02e076ca7e7daf8: Da,
      __wbg_set_targets_c38bd200c836d66f: Ha,
      __wbg_set_entry_point_207540f042015ce5: Hc,
      __wbg_set_fragment_8b780f00a0b0e6f3: ba,
      __wbg_set_count_069a4eac409bac55: Lc,
      __wbg_set_mask_70a8a59ce09e5997: ha,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: wc,
      __wbg_set_multisample_37ddafe88b5cd466: Aa,
      __wbg_set_cull_mode_fc649853947a3d0c: Oc,
      __wbg_set_front_face_28ffdf524eedce5b: ca,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: Ya,
      __wbg_set_topology_da25f2cc5af203d2: _f,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: tf,
      __wbg_set_primitive_43c23761a55b4088: Ea,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: Ze,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: ab,
      __wbg_submit_ce44115121cd166c: Lf,
      __wbg_mapAsync_52b01fa9e8f765fd: Er,
      __wbg_then_16d107c451e9905d: ro,
      __wbg_set_dimension_e325282e613ca0a4: Qc,
      __wbg_set_format_1fcaa7d60546b490: _a,
      __wbg_set_aspect_0d453bca3d012f02: pc,
      __wbg_set_base_array_layer_f176bb9f1b37b342: hc,
      __wbg_set_array_layer_count_7312f0f31af94e7c: lc,
      __wbg_set_base_mip_level_1df145d9f8db32a9: Sc,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Sa,
      __wbg_set_label_e16e2dbe51349c7f: wa,
      __wbg_set_usage_ddd42599bbba7779: rf,
      __wbg_createView_ceaf2f5881adbd34: ut,
      __wbg_get_507a50627bffa49b: dr,
      __wbg_set_format_5d2f25cc93654ecc: ea,
      __wbg_set_offset_f64_28c24dc15000932e: Pa,
      __wbg_set_shader_location_7e1832a74f912217: qa,
      __wbg_set_write_mask_d45279e56abbfcb5: df,
      __wbg_set_format_5ff53724ed6cedf2: ta,
      __wbg_set_blend_7493c2066c3e9970: Dc,
      __wbg_set_attributes_7537844a7e6dafdc: xc,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: mc,
      __wbg_set_step_mode_a97bb24714da41a9: Qa,
      __wbg_set_alpha_bfd2df62e7bc581b: gc,
      __wbg_set_color_83aa977526e88cbb: kc,
      __wbg_set_load_op_99661da6c4eab9b0: ya,
      __wbg_set_store_op_b5fdf672436f13f3: Xa,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: af,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Mc,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Ra,
      __wbg_unconfigure_0a07a0a40de8988d: co,
      __wbg_includes_78c9a3115b08eddc: lr,
      __wbg_push_d2ae3af0c1217ae6: Db,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: gr,
      __wbg_userAgentData_31b8f893e8977e94: zo,
      __wbg_brands_b7dcf262485c3e7c: _e,
      __wbg_brand_3bc196a43eceb8af: Z_,
      __wbg_cancel_65f38182e2eeac5c: de,
      __wbg_requestFullscreen_b977a3a0697e883c: Qb,
      __wbg_animate_8f41e2f47c7d04ab: y_,
      __wbg_play_3997a1be51d27925: ib,
      __wbg_requestFullscreen_3f16e43f398ce624: Nb,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: n0,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: r0,
      __wbg_catch_c1a60df4c30d76d3: ie,
      __wbg_scheduler_a17d41c9c822fc26: ec,
      __wbg_postTask_e2439afddcdfbb55: hb,
      __wbg_Window_c7f91e3f80ae0a0e: __,
      __wbg_prototype_0d5bb2023db3bcfc: Ib,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: $n,
      __wbg_offsetX_a9bf2ea7f0575ac9: bb,
      __wbg_offsetY_10e5433a1bbd4c01: cb,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: Cn,
      __wbg_scheduler_b35fe73ba70e89cc: tc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: Xb,
      __wbg_clearBufferuiv_df94a395d4915377: we,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: Te,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: Le,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: Oe,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: qe,
      __wbg_clientWaitSync_cf8e49f8ba228377: ve,
      __wbg_compressedTexSubImage2D_c1362291573c7268: ke,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: Ge,
      __wbg_createQuery_047c7c524e4ac4f8: Je,
      __wbg_createSampler_70c8392d98896235: tt,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: ot,
      __wbg_deleteQuery_0d1dcc4402a86ee1: St,
      __wbg_deleteSampler_0abb528566c4ab3b: Dt,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: Kn,
      __wbg_getQueryParameter_919125495ccb17ca: _r,
      __wbg_getSyncParameter_d8f6c145657a3550: ar,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: fr,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Sr,
      __wbg_deleteSync_9b0e43580942a0f6: Mt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Et,
      __wbg_drawArraysInstanced_51b161548a3f10c4: Jt,
      __wbg_drawBuffers_1c1ec9b292442a2a: tn,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: rn,
      __wbg_endQuery_a50f7fc49cfe56e9: un,
      __wbg_fenceSync_fe2cdba4a0d73679: ln,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Mn,
      __wbg_getBufferSubData_11018928c908ac2c: Ln,
      __wbg_readBuffer_4271437a70aae481: Lb,
      __wbg_readPixels_5f013a7d85b23800: Ob,
      __wbg_readPixels_82c9dee754d58176: Cb,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Wb,
      __wbg_texImage3D_ef16a1f721b3f908: qf,
      __wbg_texStorage2D_7f947efc63dac273: Gf,
      __wbg_texStorage3D_f8f2e4b3386736f9: Uf,
      __wbg_texSubImage2D_d1af697e69f8a9e4: Qf,
      __wbg_texSubImage2D_047380bb2660e4f9: jf,
      __wbg_texSubImage2D_6a376bfc3a31436b: $f,
      __wbg_texSubImage2D_98c43894eb217aa7: zf,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: Zb,
      __wbg_samplerParameteri_7b1b4091de49aabb: _c,
      __wbg_texImage2D_5abd8779d1d033c7: Cf,
      __wbg_texImage2D_8d168171984f2a40: Bf,
      __wbg_texImage3D_bdd9bebe42ed1f52: Rf,
      __wbg_texSubImage2D_5058af3d30a8e205: Kf,
      __wbg_texSubImage2D_e107b4f88c19b920: Yf,
      __wbg_texSubImage2D_bed5e7a3cd81d409: Nf,
      __wbg_texSubImage3D_8077e90ec309c414: _o,
      __wbg_texSubImage3D_45e498ae6298998c: Hf,
      __wbg_uniform1ui_cd7ad5581093b3df: io,
      __wbg_uniform2fv_1b43656b33177d21: go,
      __wbg_uniform2iv_859048b9d60f46ae: wo,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: Jf,
      __wbg_texSubImage3D_6cb6cfd732dad145: Zf,
      __wbg_texSubImage3D_93b38c69acb735c8: eo,
      __wbg_texSubImage3D_c9e5a071796d412f: to,
      __wbg_texSubImage3D_feebaf7f0f4594c6: no,
      __wbg_uniform2uiv_8a9cb3155271213b: mo,
      __wbg_uniform4fv_674a247aeb15012d: Ao,
      __wbg_uniform4iv_d02934d7b94df609: Mo,
      __wbg_uniform3fv_8ecb5ebb510b7bce: po,
      __wbg_uniform3iv_09abae5eabd6b9d6: yo,
      __wbg_uniform3uiv_3c0b163732f5b8f0: So,
      __wbg_uniform4uiv_0d1a8ed214f10c31: Fo,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Bo,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: Ro,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: qo,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: ko,
      __wbg_uniformMatrix2fv_9284424cc6aac672: Eo,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Lo,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: Oo,
      __wbg_uniformMatrix4fv_423b958042692150: Wo,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: Yo,
      __wbg_activeTexture_d12958674e97a118: w_,
      __wbg_attachShader_8971266b4c9bc514: v_,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: A_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: F_,
      __wbg_bindFramebuffer_390311eff3896937: T_,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: O_,
      __wbg_bindTexture_28eff4bbd8aaab54: B_,
      __wbg_blendColor_eae0cd578a2c7d15: G_,
      __wbg_blendEquation_455b8986ededabc0: K_,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: U_,
      __wbg_blendFunc_114dc7056ccfeb8d: Q_,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: N_,
      __wbg_clear_dd06a0da4ce8e13f: Se,
      __wbg_clearDepth_ca9b22d41551b513: me,
      __wbg_clearStencil_58f2af46612bccae: pe,
      __wbg_colorMask_a4d164c2039b5731: Pe,
      __wbg_compileShader_9bdfd792722cf704: Me,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Go,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: Uo,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Xo,
      __wbg_copyTexSubImage2D_8daea651fc408645: Ve,
      __wbg_createBuffer_01568a9d930d90dd: Ue,
      __wbg_createFramebuffer_de0d521f546e7534: Ne,
      __wbg_createProgram_538c9777a4ac084f: He,
      __wbg_createRenderbuffer_9d801bf44c314f44: et,
      __wbg_createShader_7d139f2d50f77365: bt,
      __wbg_createTexture_d13f98e0d3d912f4: at,
      __wbg_cullFace_f1c75ae19b07eaf3: st,
      __wbg_deleteBuffer_1ca3ffe668a488e7: mt,
      __wbg_getExtension_101c7e41de3e4d90: jn,
      __wbg_getParameter_d39f59581389af1b: Nn,
      __wbg_getProgramInfoLog_d1ce570463a68779: Yn,
      __wbg_getProgramParameter_c8d1154fbb3c0890: Jn,
      __wbg_getShaderInfoLog_5cee2add982c7165: er,
      __wbg_getShaderParameter_3394e75dcb97f380: nr,
      __wbg_getSupportedExtensions_2a7458ec45e82560: br,
      __wbg_getUniformLocation_788a34295dd6fabe: ur,
      __wbg_deleteFramebuffer_963cd69957209d37: pt,
      __wbg_deleteProgram_132e191baa9fa84f: ht,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: vt,
      __wbg_deleteShader_993edb4beb3c4d53: Pt,
      __wbg_deleteTexture_bdc2202d7a50dcea: kt,
      __wbg_depthFunc_74a8f8acf8973c86: Rt,
      __wbg_depthMask_a644a67deced3257: Vt,
      __wbg_depthRange_5e90d4d236280ff5: Gt,
      __wbg_disable_1659d1b7d50c31e7: zt,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: $t,
      __wbg_drawArrays_b0c59a6e158122f2: _n,
      __wbg_enable_28bbeed576131d1f: fn,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: an,
      __wbg_finish_cbe7ec8675dd7705: yn,
      __wbg_flush_e03c08da6863b5ab: Sn,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Dn,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: An,
      __wbg_frontFace_29ef7151de8b5ed9: kn,
      __wbg_linkProgram_4e047fb3197a0348: Mr,
      __wbg_pixelStorei_c844cd0db4f1fde6: db,
      __wbg_polygonOffset_4eb460adf41db6cd: wb,
      __wbg_renderbufferStorage_0a8de92542893819: Gb,
      __wbg_scissor_105e756596bc35df: nc,
      __wbg_vertexAttribPointer_a8f0af57269c2067: Ho,
      __wbg_viewport_affdf15c559df1e2: Zo,
      __wbg_shaderSource_c3469dc2221dd528: sf,
      __wbg_stencilFuncSeparate_814300446c2969ef: Df,
      __wbg_stencilMask_9a844dc58a89992f: Ff,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: Af,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: Tf,
      __wbg_texParameteri_1fc451e0964fc91c: Vf,
      __wbg_uniform1f_62692c8fa8e7bf1e: ao,
      __wbg_uniform1i_7621f908f78177df: uo,
      __wbg_uniform4f_9ff60fc65b0ed726: vo,
      __wbg_useProgram_49495850b446fa56: $o,
      __wbg_bufferSubData_bae930b21e9c1c48: be,
      __wbg_clearBufferfv_2e0f1a0ea56de859: ge,
      __wbg_clearBufferiv_0360269bf6e34c54: se,
      __wbg_beginQuery_042a1f99e870066c: I_,
      __wbg_bindBufferRange_f5c29912db0476e9: M_,
      __wbg_bindSampler_ce608f0de9d31acf: C_,
      __wbg_bindVertexArray_427eeac0c1764d8a: V_,
      __wbg_blitFramebuffer_a1215976f663b058: Y_,
      __wbg_bufferData_3d4f29bdfb1fa46c: te,
      __wbg_bufferData_90ef588bac2be2f5: ne,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: yr,
      __wbg_cancelIdleCallback_b9e469156370a1e5: ue,
      __wbg_getComputedStyle_961681bdf7e518e8: Bn,
      __wbg_matchMedia_9968278b31706f78: Lr,
      __wbg_cancelAnimationFrame_086d6084925c4e06: oe,
      __wbg_requestAnimationFrame_1a85deeab66448c2: $b,
      __wbg_clearTimeout_8f80437be2324e09: ye,
      __wbg_requestIdleCallback_d292749bf33501af: Yb,
      __wbg_setTimeout_5ccd86968701f1ec: oc,
      __wbg_setTimeout_cfa2cf195c3738db: uc,
      __wbg_queueMicrotask_ed5b33385a53c3a9: Tb,
      __wbg_navigator_99621db14b3f1099: Gr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: jt,
      __wbg_document_179650d6cb13c263: Yt,
      __wbg_instanceof_Window_05ba1ee4f6781663: hr,
      __wbg_visibilityState_301d0905e8103e21: e0,
      __wbg_activeElement_4bc99dc1a7094c27: g_,
      __wbg_fullscreenElement_9f50a5e63bb433a8: En,
      __wbg_createElement_fcbc0805de826d62: $e,
      __wbg_getElementById_1cbd8f06dbe8eb8e: Un,
      __wbg_querySelector_fd7d157ebe17cd16: Mb,
      __wbg_querySelectorAll_7e98cbe256deaadd: Pb,
      __wbg_body_40ec34e0a2931fe8: J_,
      __wbg_setPointerCapture_70025ca3fb7f26b9: ac,
      __wbg_setAttribute_71039043be82d098: bc,
      __wbg_focus_2f77051f98540625: vn,
      __wbg_style_6657aed849e5d757: Ef,
      __wbg_navigator_51379c10a84aeec9: Wr,
      __wbg_uniform2iv_f84a24961c0cfcd0: lo,
      __wbg_uniform3fv_95d1933ea1440725: xo,
      __wbg_uniform3iv_a3a7008990fd84f0: ho,
      __wbg_uniform4fv_4ca8c114ca3de099: Do,
      __wbg_clear_53d71d234e14e4c1: he,
      __wbg_clearDepth_8b5d226aae155082: le,
      __wbg_clearStencil_a66fe23df6313fc7: xe,
      __wbg_colorMask_44ebb91cad2502f2: Ae,
      __wbg_compileShader_fc2e4b73240d4fd7: Fe,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: We,
      __wbg_createBuffer_2075765bde5035d5: je,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: ze,
      __wbg_createProgram_118becaac3a20318: Ye,
      __wbg_createRenderbuffer_71af5c0d615e9271: _t,
      __wbg_createShader_78bc8b7e9a88e1a8: rt,
      __wbg_createTexture_0ee0fa5f924f3d14: ct,
      __wbg_cullFace_62bbea3bef0e6b99: gt,
      __wbg_deleteBuffer_08eb938e35c27967: lt,
      __wbg_deleteFramebuffer_d1a36e889b009344: xt,
      __wbg_deleteProgram_09bd45a51105b2f6: yt,
      __wbg_deleteRenderbuffer_ca999f7883b777af: It,
      __wbg_deleteShader_3120790d36063afe: At,
      __wbg_deleteTexture_2b163b157ea1be24: Ft,
      __wbg_depthFunc_455cfeb8a9d2fb4c: Bt,
      __wbg_depthMask_4bd6c73b1339d257: qt,
      __wbg_depthRange_38b2287ffbea14fd: Wt,
      __wbg_uniform4iv_45ab52abcb3f882c: Po,
      __wbg_uniformMatrix2fv_769725d64641341f: To,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: Co,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Vo,
      __wbg_activeTexture_92b04d918019d603: s_,
      __wbg_attachShader_5f7f4077e124e23b: S_,
      __wbg_bindAttribLocation_94202d7a59ab7863: P_,
      __wbg_bindBuffer_a01497b1abdcdd9a: k_,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: E_,
      __wbg_bindRenderbuffer_75e8469e930840fa: L_,
      __wbg_bindTexture_9b04b1b7c00d4dd6: R_,
      __wbg_blendColor_793b560dc69ddd0b: W_,
      __wbg_blendEquation_f5c5272993f6cb01: $_,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: j_,
      __wbg_blendFunc_a854d7e4459150ba: X_,
      __wbg_blendFuncSeparate_37156309688f8f88: z_,
      __wbg_disable_40c3975167c1ee07: Nt,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: Kt,
      __wbg_drawArrays_676becae0149ed65: Zt,
      __wbg_enable_611804c0ac1504ce: on,
      __wbg_enableVertexAttribArray_4c08219124740f14: cn,
      __wbg_finish_126e6f2ac71e3096: mn,
      __wbg_flush_db77b4a63d6b337d: hn,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: In,
      __wbg_linkProgram_d7c71c539c8c6a43: Fr,
      __wbg_pixelStorei_2a93b18efde9acf8: ub,
      __wbg_polygonOffset_eccb68e40a18f861: lb,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: Ub,
      __wbg_scissor_573b844152316b8d: rc,
      __wbg_shaderSource_4cf90af97621ff49: gf,
      __wbg_stencilFuncSeparate_35136c4e5153406f: If,
      __wbg_stencilMask_1c99b79b516d12dd: Mf,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: Pf,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: kf,
      __wbg_texParameteri_9d0daa263d3a863f: Wf,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Pn,
      __wbg_frontFace_fc6d98dafa42de87: Tn,
      __wbg_getParameter_039a5899307fab55: zn,
      __wbg_getProgramInfoLog_c4762e0513468a26: Xn,
      __wbg_getProgramParameter_b9995b56c258ac86: Hn,
      __wbg_getShaderInfoLog_bc236afe696c1283: tr,
      __wbg_getShaderParameter_cbcc0995e8e16214: rr,
      __wbg_getUniformLocation_24ef46cdda2148ab: or,
      __wbg_uniform1f_b79d0c5667f9fb40: fo,
      __wbg_uniform1i_5830de6702add20a: oo,
      __wbg_uniform4f_b25e39808b830021: Io,
      __wbg_useProgram_182d120fe476921b: Ko,
      __wbg_vertexAttribPointer_b300c8e000cdac93: Jo,
      __wbg_viewport_e8a16ca4a5085e5f: _0,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: Xf,
      __wbg_uniform2fv_948dab6a82b428ac: so,
      __wbg_bufferData_ce4f44d56e9ddab5: re,
      __wbg_bufferData_073a7c6abef7a55f: ee,
      __wbg_bufferSubData_ce9854d3d337e2cf: ce,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: Ee,
      __wbg_readPixels_c7861e25836bf57b: Bb,
      __wbg_texImage2D_3813406af5bf54c8: Of,
      __wbg_new_5394f65338077341: zr,
      __wbg_inlineSize_3c8412828bef21eb: pr,
      __wbg_disconnect_39bfdcb35b1fc7b9: Qt,
      __wbg_blockSize_5af477b962b2b031: H_,
      __wbg_observe_f27242eadc2ebd47: tb,
      __wbg_observe_615bef91ee28c925: _b,
      __wbg_unobserve_41a4f85162f1fb18: jo,
      __wbg_isIntersecting_fc6d9529a49c5d62: vr,
      __wbg_log_d267660666346fb3: Tr,
      __wbg_info_eadbe775a8e2e9eb: mr,
      __wbg_warn_b1370d804fa3e259: t0,
      __wbg_debug_87fd9b1a625b7efb: wt,
      __wbg_error_744744ff0c9861e6: gn,
      __wbg_error_7ed559cd7146b49d: sn,
      __wbg_width_20c45c895834b83f: b0,
      __wbg_height_9f27216001e3c804: wr,
      __wbg_set_width_8e30d010cd66830d: uf,
      __wbg_set_height_7d9d8f892e6964c6: fa,
      __wbg_getContext_e79ddf6a9cb3cc76: Vn,
      __wbg_getContext_ca12bb65aab778a4: qn,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: xr,
      __wbg_set_box_223b9bc0b7f548f6: Ac,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: Fn,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: Ht,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: q_,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: nn,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: ft,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Tt,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: Qo,
      __wbg_set_onmessage_d511b70365304094: Ma,
      __wbg_set_width_49ac9b7d914afc85: of,
      __wbg_getPropertyValue_dc6b061239dad6f1: Zn,
      __wbg_set_height_bbeef8f354041577: oa,
      __wbg_removeProperty_70da952bc1b493fa: Vb,
      __wbg_close_3423cc7dafc477bb: Ie,
      __wbg_new_25e75d1f0df4d87a: jr,
      __wbg_setProperty_e4e51b1b1d681d15: fc,
      __wbg_postMessage_b80f20949a4b4f55: xb,
      __wbg_start_d0cdf16ff965b3f3: xf,
      __wbg_getContext_fd298c901058eb31: Wn,
      __wbg_getContext_7476e39fa008047e: Rn,
      __wbg_appendChild_f553e8704c4f14a6: h_,
      __wbg_contains_7189b09a477442a6: Be,
      __wbg_get_b2053e9bfdf3ca8e: ir,
      __wbg_persisted_e508d4d322115185: ob,
      __wbg_ctrlKey_50bd8324959ca786: it,
      __wbg_shiftKey_9f797da486b2ade8: lf,
      __wbg_altKey_f3e24c4c9cfcf271: x_,
      __wbg_metaKey_f934f09e37889d70: Rr,
      __wbg_button_f6a9a7b725f1838e: ae,
      __wbg_buttons_d8acd46cf8f40ae9: fe,
      __wbg_movementX_87e39021f3fce8b8: qr,
      __wbg_movementY_f6f63087e2248fa9: Vr,
      __wbg_set_type_8ce203e412e28cf6: ef,
      __wbg_media_40cbd26ab34df71f: Cr,
      __wbg_matches_978994974df1e85b: Or,
      __wbg_addListener_b5b7f95360b22984: m_,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: Ab,
      __wbg_removeListener_768e1e787e1d4b2e: qb,
      __wbg_deltaX_5d829ffba565ed10: Ot,
      __wbg_deltaY_6cfce8f8da250c23: Ct,
      __wbg_deltaMode_d869228efd74f393: Lt,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Re,
      __wbg_userAgent_0558f0ac642f7771: No,
      __wbg_new_e0bd7540d9834af6: Xr,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: Ut,
      __wbg_disconnect_491a6bfd82cdd887: Xt,
      __wbg_observe_c3834a3e4cde3e64: eb,
      __wbg_new_8f0c2d11e48a4727: Nr,
      __wbg_postMessage_ef2dbf5e8c8ebffc: yb,
      __wbg_preventDefault_b64888c857500682: vb,
      __wbg_signal_dad7cb35193abd31: mf,
      __wbg_addEventListener_d85450ee1320c989: l_,
      __wbg_new_4339b2a2675a03e3: $r,
      __wbg_abort_8bae0f33e7833997: i_,
      __wbg_altKey_50f830d1793a2eea: p_,
      __wbg_removeEventListener_a3f23c70077bdcc1: Rb,
      __wbg_ctrlKey_2e52816fa7160097: dt,
      __wbg_shiftKey_9bcb8bdd60c2f152: wf,
      __wbg_metaKey_d961c7572a9f84f5: Br,
      __wbg_location_8f24df2c257fb974: kr,
      __wbg_repeat_4e131e99bff9b9f4: jb,
      __wbg_key_803dca86cdcfa8dd: Dr,
      __wbg_code_89c999e407c79eef: De,
      __wbg_createObjectURL_416e527781e6fd6d: Qe,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: Jb,
      __wbg_port1_dabba0a56576e47e: mb,
      __wbg_port2_d05676aee003eedc: pb,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: en,
      __wbg_getSupportedProfiles_90a4f330938d0241: cr,
      __wbg_new_f1a34223ddbe3f7d: Yr,
      __wbg_pointerId_ea33d2695be12e7f: gb,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: Jr,
      __wbg_pressure_9a7845d9744ae9f4: Sb,
      __wbg_pointerType_d5e932608aa61bb6: sb,
      __wbg_getCoalescedEvents_366947e5550da21b: On,
      __wbg_performance_3fcf6e32a7e1ed0a: fb,
      __wbg_now_e7c6795a7f81e10f: Zr,
      __wbg_resolve_2191a4dfe481c25b: Hb,
      __wbg_then_6ec10ae38b3e92f7: bo,
      __wbg_new_da52cf8fe3429cb2: Qr,
      __wbg_new_32b398fb48b6d94a: Kr,
      __wbg_of_85f52f8b6491a7ca: rb,
      __wbg_of_5f1b88183ddb5d94: nb,
      __wbg_is_7b9d0b289033c7de: Ir,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: hf,
      __wbg_static_accessor_SELF_146583524fe1469b: Sf,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: yf,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: vf,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: Fb,
      __wbg_queueMicrotask_6a09b7bc46549209: kb,
      __wbg_set_8535240470bf2500: dc,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: f_,
      __wbg___wbindgen_throw_344f42d3211c4765: u_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: b_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: c_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: o_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: t_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: r_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: a_,
      __wbg__wbg_cb_unref_fffb441def202758: d_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: n_,
      __wbindgen_cast_0000000000000001: c0,
      __wbindgen_cast_0000000000000002: a0,
      __wbindgen_cast_0000000000000003: f0,
      __wbindgen_cast_0000000000000004: o0,
      __wbindgen_cast_0000000000000005: u0,
      __wbindgen_cast_0000000000000006: d0,
      __wbindgen_cast_0000000000000007: i0,
      __wbindgen_cast_0000000000000008: g0,
      __wbindgen_cast_0000000000000009: s0,
      __wbindgen_cast_000000000000000a: w0,
      __wbindgen_cast_000000000000000b: l0,
      __wbindgen_cast_000000000000000c: m0,
      __wbindgen_cast_000000000000000d: p0,
      __wbindgen_cast_000000000000000e: x0,
      __wbindgen_cast_000000000000000f: y0,
      __wbindgen_cast_0000000000000010: h0,
      __wbindgen_cast_0000000000000011: S0,
      __wbindgen_cast_0000000000000012: v0,
      __wbindgen_cast_0000000000000013: I0,
      __wbindgen_cast_0000000000000014: D0,
      __wbindgen_cast_0000000000000015: A0,
      __wbindgen_cast_0000000000000016: P0,
      __wbindgen_cast_0000000000000017: M0
    }
  }, J), yu = m.memory, hu = m.main, Su = m.run_web, vu = m.__abort_handler, Iu = m.__instance_terminated, Du = m.__wasm_bindgen_func_elem_9527, Au = m.__wasm_bindgen_func_elem_6612, Pu = m.__wasm_bindgen_func_elem_1599, Mu = m.__wasm_bindgen_func_elem_1599_11, Fu = m.__wasm_bindgen_func_elem_1599_12, ku = m.__wasm_bindgen_func_elem_6611, Tu = m.__wasm_bindgen_func_elem_6611_3, Eu = m.__wasm_bindgen_func_elem_6611_4, Lu = m.__wasm_bindgen_func_elem_6611_5, Ou = m.__wasm_bindgen_func_elem_6611_7, Cu = m.__wasm_bindgen_func_elem_6611_8, Bu = m.__wasm_bindgen_func_elem_6611_9, Ru = m.__wasm_bindgen_func_elem_6611_10, qu = m.__wasm_bindgen_func_elem_6610, Vu = m.__wbindgen_export, Wu = m.__wbindgen_export2, Gu = m.__wbindgen_export3, Uu = m.__wbindgen_export4, ju = m.__wbindgen_export5, Ku = m.__wbindgen_add_to_stack_pointer, Y = m.__wbindgen_start, $u = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: vu,
    __instance_terminated: Iu,
    __wasm_bindgen_func_elem_1599: Pu,
    __wasm_bindgen_func_elem_1599_11: Mu,
    __wasm_bindgen_func_elem_1599_12: Fu,
    __wasm_bindgen_func_elem_6610: qu,
    __wasm_bindgen_func_elem_6611: ku,
    __wasm_bindgen_func_elem_6611_10: Ru,
    __wasm_bindgen_func_elem_6611_3: Tu,
    __wasm_bindgen_func_elem_6611_4: Eu,
    __wasm_bindgen_func_elem_6611_5: Lu,
    __wasm_bindgen_func_elem_6611_7: Ou,
    __wasm_bindgen_func_elem_6611_8: Cu,
    __wasm_bindgen_func_elem_6611_9: Bu,
    __wasm_bindgen_func_elem_6612: Au,
    __wasm_bindgen_func_elem_9527: Du,
    __wbindgen_add_to_stack_pointer: Ku,
    __wbindgen_export: Vu,
    __wbindgen_export2: Wu,
    __wbindgen_export3: Gu,
    __wbindgen_export4: Uu,
    __wbindgen_export5: ju,
    __wbindgen_start: Y,
    main: hu,
    memory: yu,
    run_web: Su
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  xu($u);
  Y();
})();
export {
  __tla,
  Nu as run_web
};
