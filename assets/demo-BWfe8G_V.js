import { _ as H } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Hu;
let __tla = (async () => {
  const J = "/learn-wgpu/assets/demo_bg-CTG9336g.wasm";
  Hu = function() {
    d.run_web();
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
    const n = j(t(e)), r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
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
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
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
    return u(function(_, e, n, r) {
      t(_).addEventListener(l(e, n), t(r));
    }, arguments);
  }
  function m_() {
    return u(function(_, e) {
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
    return u(function(_, e) {
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
    return u(function(_, e) {
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
  function R_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function B_(_, e, n) {
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
    const n = t(e).brand, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
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
    return u(function(_, e) {
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
    const n = t(e).code, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
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
    return u(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function Re(_, e) {
    return t(_).contains(t(e));
  }
  function Be(_) {
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
    return u(function(_, e, n) {
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
    return u(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
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
    return u(function(_, e) {
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
    return u(function(_, e) {
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
  function Rt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Bt(_, e) {
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
    t(_).destroy();
  }
  function jt(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function Kt(_) {
    return t(_).devicePixelRatio;
  }
  function $t(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function zt(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function Nt(_, e) {
    t(_).disable(e >>> 0);
  }
  function Qt(_, e) {
    t(_).disable(e >>> 0);
  }
  function Xt(_) {
    t(_).disconnect();
  }
  function Yt(_) {
    t(_).disconnect();
  }
  function Ht(_) {
    const e = t(_).document;
    return s(e) ? 0 : c(e);
  }
  function Jt(_, e, n, r, b) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, b);
  }
  function Zt(_, e, n, r, b) {
    t(_).drawArraysInstanced(e >>> 0, n, r, b);
  }
  function _n(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function en(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function tn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function nn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function rn(_, e, n, r, b, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, b, a);
  }
  function bn(_, e, n, r, b, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, b, a);
  }
  function cn(_, e, n, r, b) {
    t(_).draw(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function an(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function fn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function on(_, e) {
    t(_).enable(e >>> 0);
  }
  function un(_, e) {
    t(_).enable(e >>> 0);
  }
  function dn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function gn(_) {
    t(_).end();
  }
  function sn(_) {
    console.error(t(_));
  }
  function wn(_, e) {
    console.error(t(_), t(e));
  }
  function ln(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(l(_, e));
    } finally {
      d.__wbindgen_export4(n, r, 1);
    }
  }
  function mn(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return s(r) ? 0 : c(r);
  }
  function pn(_) {
    t(_).finish();
  }
  function xn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function yn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function hn(_) {
    t(_).finish();
  }
  function Sn(_) {
    t(_).flush();
  }
  function vn(_) {
    t(_).flush();
  }
  function In() {
    return u(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Dn(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function An(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function Pn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Mn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Fn(_, e, n, r, b, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), b, a);
  }
  function kn(_, e, n, r, b, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), b, a, f);
  }
  function Tn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function En(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Ln(_) {
    const e = t(_).fullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function On(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function Cn(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function Rn(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function Bn() {
    return u(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return s(n) ? 0 : c(n);
    }, arguments);
  }
  function qn() {
    return u(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Vn() {
    return u(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Wn() {
    return u(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Gn() {
    return u(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Un() {
    return u(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function jn(_, e, n) {
    const r = t(_).getElementById(l(e, n));
    return s(r) ? 0 : c(r);
  }
  function Kn() {
    return u(function(_, e, n) {
      const r = t(_).getExtension(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function $n() {
    return u(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(r);
    }, arguments);
  }
  function zn() {
    return u(function(_, e, n) {
      const r = t(_).getMappedRange(e, n);
      return c(r);
    }, arguments);
  }
  function Nn(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function Qn() {
    return u(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Xn() {
    return u(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Yn(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (T.indexOf(e) + 1 || 102) - 1;
  }
  function Hn(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function Jn(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function Zn(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function _r(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function er() {
    return u(function(_, e, n, r) {
      const b = t(e).getPropertyValue(l(n, r)), a = h(b, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function tr(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return c(r);
  }
  function nr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function rr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function br(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function cr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function ar(_) {
    const e = t(_).getSupportedExtensions();
    return s(e) ? 0 : c(e);
  }
  function fr(_) {
    const e = t(_).getSupportedProfiles();
    return s(e) ? 0 : c(e);
  }
  function or(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return c(r);
  }
  function ur(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), l(n, r));
  }
  function dr(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function ir(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function gr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function sr(_, e) {
    const n = t(_)[e >>> 0];
    return s(n) ? 0 : c(n);
  }
  function wr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function lr(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function mr(_) {
    return t(_).height;
  }
  function pr(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function xr(_) {
    console.info(t(_));
  }
  function yr(_) {
    return t(_).inlineSize;
  }
  function hr(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Sr(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function vr(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Ir() {
    return u(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Dr(_) {
    return t(_).isIntersecting;
  }
  function Ar(_, e) {
    return Object.is(t(_), t(e));
  }
  function Pr(_, e) {
    const n = t(e).key, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Mr(_, e) {
    const n = t(e).label, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Fr(_) {
    return t(_).length;
  }
  function kr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Tr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Er(_) {
    return t(_).location;
  }
  function Lr(_) {
    console.log(t(_));
  }
  function Or(_, e, n, r) {
    const b = t(_).mapAsync(e >>> 0, n, r);
    return c(b);
  }
  function Cr() {
    return u(function(_, e, n) {
      const r = t(_).matchMedia(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Rr(_) {
    return t(_).matches;
  }
  function Br(_, e) {
    const n = t(e).media, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function qr(_) {
    return t(_).metaKey;
  }
  function Vr(_) {
    return t(_).metaKey;
  }
  function Wr(_) {
    return t(_).movementX;
  }
  function Gr(_) {
    return t(_).movementY;
  }
  function Ur(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function jr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Kr() {
    const _ = new Error();
    return c(_);
  }
  function $r() {
    return u(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function zr() {
    const _ = new Array();
    return c(_);
  }
  function Nr() {
    return u(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function Qr() {
    return u(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Xr() {
    return u(function(_, e) {
      const n = new Worker(l(_, e));
      return c(n);
    }, arguments);
  }
  function Yr() {
    const _ = new Object();
    return c(_);
  }
  function Hr() {
    return u(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Jr() {
    return u(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function Zr() {
    const _ = new Object();
    return c(_);
  }
  function _b(_, e, n) {
    const r = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(r);
  }
  function eb() {
    return u(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function tb(_) {
    return t(_).now();
  }
  function nb(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function rb(_, e) {
    t(_).observe(t(e));
  }
  function bb(_, e) {
    t(_).observe(t(e));
  }
  function cb(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function ab(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function fb(_) {
    return t(_).offsetX;
  }
  function ob(_) {
    return t(_).offsetY;
  }
  function ub(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function db(_) {
    const e = t(_).performance;
    return c(e);
  }
  function ib(_) {
    return t(_).persisted;
  }
  function gb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function sb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function wb(_) {
    t(_).play();
  }
  function lb(_) {
    return t(_).pointerId;
  }
  function mb(_, e) {
    const n = t(e).pointerType, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function pb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function xb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function yb(_) {
    const e = t(_).port1;
    return c(e);
  }
  function hb(_) {
    const e = t(_).port2;
    return c(e);
  }
  function Sb() {
    return u(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function vb() {
    return u(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function Ib(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return c(r);
  }
  function Db(_) {
    return t(_).pressure;
  }
  function Ab(_) {
    t(_).preventDefault();
  }
  function Pb() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function Mb(_, e) {
    return t(_).push(t(e));
  }
  function Fb(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function kb() {
    return u(function(_, e, n) {
      const r = t(_).querySelectorAll(l(e, n));
      return c(r);
    }, arguments);
  }
  function Tb() {
    return u(function(_, e, n) {
      const r = t(_).querySelector(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Eb(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function Lb(_) {
    queueMicrotask(t(_));
  }
  function Ob(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function Cb(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Rb(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Bb() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function qb() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Vb() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Wb() {
    return u(function(_, e, n, r) {
      t(_).removeEventListener(l(e, n), t(r));
    }, arguments);
  }
  function Gb() {
    return u(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Ub() {
    return u(function(_, e, n, r) {
      const b = t(e).removeProperty(l(n, r)), a = h(b, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function jb(_, e, n, r, b, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, b, a);
  }
  function Kb(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function $b(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function zb(_) {
    return t(_).repeat;
  }
  function Nb(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function Qb() {
    return u(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Xb(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function Yb(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function Hb(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function Jb(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function Zb() {
    return u(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function _c(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function ec() {
    return u(function(_, e) {
      URL.revokeObjectURL(l(_, e));
    }, arguments);
  }
  function tc(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function nc(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function rc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function bc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function cc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function ac(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function fc() {
    return u(function(_, e, n, r, b) {
      t(_).setAttribute(l(e, n), l(r, b));
    }, arguments);
  }
  function oc(_, e) {
    t(_).setPipeline(t(e));
  }
  function uc() {
    return u(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function dc() {
    return u(function(_, e, n, r, b) {
      t(_).setProperty(l(e, n), l(r, b));
    }, arguments);
  }
  function ic() {
    return u(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function gc() {
    return u(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function sc() {
    return u(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function wc(_, e) {
    t(_).a = e;
  }
  function lc(_, e) {
    t(_).alpha = t(e);
  }
  function mc(_, e) {
    t(_).alphaMode = H0[e];
  }
  function pc(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function xc(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function yc(_, e) {
    t(_).arrayStride = e;
  }
  function hc(_, e) {
    t(_).aspect = ru[e];
  }
  function Sc(_, e, n) {
    t(_).attributes = A(e, n);
  }
  function vc(_, e) {
    t(_).b = e;
  }
  function Ic(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Dc(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Ac(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Pc(_, e, n) {
    t(_).bindGroupLayouts = A(e, n);
  }
  function Mc(_, e) {
    t(_).blend = t(e);
  }
  function Fc(_, e) {
    t(_).box = fu[e];
  }
  function kc(_, e, n) {
    t(_).buffers = A(e, n);
  }
  function Tc(_, e) {
    t(_).clearValue = t(e);
  }
  function Ec(_, e, n) {
    t(_).code = l(e, n);
  }
  function Lc(_, e) {
    t(_).color = t(e);
  }
  function Oc(_, e, n) {
    t(_).colorAttachments = A(e, n);
  }
  function Cc(_, e) {
    t(_).compare = X[e];
  }
  function Rc(_, e) {
    t(_).count = e >>> 0;
  }
  function Bc(_, e) {
    t(_).cullMode = Z0[e];
  }
  function qc(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Vc(_, e) {
    t(_).depthBias = e;
  }
  function Wc(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Gc(_, e) {
    t(_).depthClearValue = e;
  }
  function Uc(_, e) {
    t(_).depthCompare = X[e];
  }
  function jc(_, e) {
    t(_).depthFailOp = $[e];
  }
  function Kc(_, e) {
    t(_).depthLoadOp = K[e];
  }
  function $c(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function zc(_, e) {
    t(_).depthStencil = t(e);
  }
  function Nc(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function Qc(_, e) {
    t(_).depthStoreOp = z[e];
  }
  function Xc(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Yc(_, e) {
    t(_).device = t(e);
  }
  function Hc(_, e) {
    t(_).dimension = bu[e];
  }
  function Jc(_, e) {
    t(_).dstFactor = Q[e];
  }
  function Zc(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function _a(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function ea(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function ta(_, e) {
    t(_).failOp = $[e];
  }
  function na(_, e) {
    t(_).format = T[e];
  }
  function ra(_, e) {
    t(_).format = cu[e];
  }
  function ba(_, e) {
    t(_).format = T[e];
  }
  function ca(_, e) {
    t(_).format = T[e];
  }
  function aa(_, e) {
    t(_).format = T[e];
  }
  function fa(_, e) {
    t(_).fragment = t(e);
  }
  function oa(_, e) {
    t(_).frontFace = _u[e];
  }
  function ua(_, e) {
    t(_).g = e;
  }
  function da(_, e) {
    t(_).height = e >>> 0;
  }
  function ia(_, e) {
    t(_).height = e >>> 0;
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
  function pa(_, e, n) {
    t(_).label = l(e, n);
  }
  function xa(_, e, n) {
    t(_).label = l(e, n);
  }
  function ya(_, e, n) {
    t(_).label = l(e, n);
  }
  function ha(_, e) {
    t(_).layout = t(e);
  }
  function Sa(_, e) {
    t(_).layout = X0[e];
  }
  function va(_, e) {
    t(_).loadOp = K[e];
  }
  function Ia(_, e) {
    t(_).mask = e >>> 0;
  }
  function Da(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Aa(_, e) {
    t(_).mode = J0[e];
  }
  function Pa(_, e) {
    t(_).module = t(e);
  }
  function Ma(_, e) {
    t(_).module = t(e);
  }
  function Fa(_, e) {
    t(_).multisample = t(e);
  }
  function ka(_, e) {
    t(_).offset = e;
  }
  function Ta(_, e) {
    t(_).onmessage = t(e);
  }
  function Ea(_, e) {
    t(_).operation = Y0[e];
  }
  function La(_, e) {
    t(_).passOp = $[e];
  }
  function Oa(_, e) {
    t(_).powerPreference = tu[e];
  }
  function Ca(_, e) {
    t(_).primitive = t(e);
  }
  function Ra(_, e) {
    t(_).querySet = t(e);
  }
  function Ba(_, e) {
    t(_).r = e;
  }
  function qa(_, e, n) {
    t(_).requiredFeatures = A(e, n);
  }
  function Va(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Wa(_, e) {
    t(_).resolveTarget = t(e);
  }
  function Ga(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function Ua(_, e) {
    t(_).srcFactor = Q[e];
  }
  function ja(_, e) {
    t(_).stencilBack = t(e);
  }
  function Ka(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function $a(_, e) {
    t(_).stencilFront = t(e);
  }
  function za(_, e) {
    t(_).stencilLoadOp = K[e];
  }
  function Na(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function Qa(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function Xa(_, e) {
    t(_).stencilStoreOp = z[e];
  }
  function Ya(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function Ha(_, e) {
    t(_).stepMode = au[e];
  }
  function Ja(_, e) {
    t(_).storeOp = z[e];
  }
  function Za(_, e) {
    t(_).stripIndexFormat = eu[e];
  }
  function _f(_, e, n) {
    t(_).targets = A(e, n);
  }
  function ef(_, e) {
    t(_).timestampWrites = t(e);
  }
  function tf(_, e) {
    t(_).toneMapping = t(e);
  }
  function nf(_, e) {
    t(_).topology = nu[e];
  }
  function rf(_, e, n) {
    t(_).type = l(e, n);
  }
  function bf(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function cf(_, e) {
    t(_).usage = e >>> 0;
  }
  function af(_, e) {
    t(_).usage = e >>> 0;
  }
  function ff(_, e) {
    t(_).vertex = t(e);
  }
  function of(_, e, n) {
    t(_).viewFormats = A(e, n);
  }
  function uf(_, e) {
    t(_).view = t(e);
  }
  function df(_, e) {
    t(_).view = t(e);
  }
  function gf(_, e) {
    t(_).width = e >>> 0;
  }
  function sf(_, e) {
    t(_).width = e >>> 0;
  }
  function wf(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function lf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function mf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function pf(_) {
    return t(_).shiftKey;
  }
  function xf(_) {
    return t(_).shiftKey;
  }
  function yf(_) {
    const e = t(_).signal;
    return c(e);
  }
  function hf(_, e) {
    const n = t(e).stack, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Sf(_) {
    t(_).start();
  }
  function vf() {
    const _ = typeof global > "u" ? null : global;
    return s(_) ? 0 : c(_);
  }
  function If() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return s(_) ? 0 : c(_);
  }
  function Df() {
    const _ = typeof self > "u" ? null : self;
    return s(_) ? 0 : c(_);
  }
  function Af() {
    const _ = typeof window > "u" ? null : window;
    return s(_) ? 0 : c(_);
  }
  function Pf(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Mf(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Ff(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function kf(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Tf(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Ef(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Lf(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Of(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Cf(_) {
    const e = t(_).style;
    return c(e);
  }
  function Rf(_, e, n) {
    t(_).submit(A(e, n));
  }
  function Bf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function qf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Vf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Wf() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, p);
    }, arguments);
  }
  function Gf() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, t(p));
    }, arguments);
  }
  function Uf(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function jf(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function Kf(_, e, n, r, b, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, b, a);
  }
  function $f(_, e, n, r, b, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, b, a, f);
  }
  function zf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Nf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Qf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Xf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Yf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Hf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Jf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Zf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function _o() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function eo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function to() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function no() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, S);
    }, arguments);
  }
  function ro() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function bo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function co() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function ao(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return c(r);
  }
  function fo(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function oo(_) {
    t(_).unconfigure();
  }
  function uo(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function io(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function go(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function so(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function wo(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function lo(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function mo(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function po(_, e, n, r) {
    t(_).uniform2iv(t(e), D(n, r));
  }
  function xo(_, e, n, r) {
    t(_).uniform2iv(t(e), D(n, r));
  }
  function yo(_, e, n, r) {
    t(_).uniform2uiv(t(e), E(n, r));
  }
  function ho(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function So(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function vo(_, e, n, r) {
    t(_).uniform3iv(t(e), D(n, r));
  }
  function Io(_, e, n, r) {
    t(_).uniform3iv(t(e), D(n, r));
  }
  function Do(_, e, n, r) {
    t(_).uniform3uiv(t(e), E(n, r));
  }
  function Ao(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Po(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Mo(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function Fo(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function ko(_, e, n, r) {
    t(_).uniform4iv(t(e), D(n, r));
  }
  function To(_, e, n, r) {
    t(_).uniform4iv(t(e), D(n, r));
  }
  function Eo(_, e, n, r) {
    t(_).uniform4uiv(t(e), E(n, r));
  }
  function Lo(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function Oo(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Co(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Ro(_, e, n, r, b) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(r, b));
  }
  function Bo(_, e, n, r, b) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(r, b));
  }
  function qo(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function Vo(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function Wo(_, e, n, r, b) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(r, b));
  }
  function Go(_, e, n, r, b) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(r, b));
  }
  function Uo(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function jo(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function Ko(_, e, n, r, b) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(r, b));
  }
  function $o(_, e, n, r, b) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(r, b));
  }
  function zo(_) {
    t(_).unmap();
  }
  function No(_, e) {
    t(_).unobserve(t(e));
  }
  function Qo(_, e) {
    t(_).useProgram(t(e));
  }
  function Xo(_, e) {
    t(_).useProgram(t(e));
  }
  function Yo(_) {
    const e = t(_).userAgentData;
    return s(e) ? 0 : c(e);
  }
  function Ho() {
    return u(function(_, e) {
      const n = t(e).userAgent, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
      w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Jo(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function Zo(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function _0(_, e, n, r, b, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, b, a);
  }
  function e0(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function t0(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function n0(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function r0(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function b0(_) {
    const e = t(_).visibilityState;
    return (ou.indexOf(e) + 1 || 3) - 1;
  }
  function c0(_) {
    console.warn(t(_));
  }
  function a0(_) {
    const e = t(_).webkitFullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function f0(_) {
    t(_).webkitRequestFullscreen();
  }
  function o0(_) {
    return t(_).width;
  }
  function u0(_, e) {
    const n = v(_, e, R0);
    return c(n);
  }
  function d0(_, e) {
    const n = v(_, e, K0);
    return c(n);
  }
  function i0(_, e) {
    const n = v(_, e, $0);
    return c(n);
  }
  function g0(_, e) {
    const n = v(_, e, B0);
    return c(n);
  }
  function s0(_, e) {
    const n = v(_, e, q0);
    return c(n);
  }
  function w0(_, e) {
    const n = v(_, e, V0);
    return c(n);
  }
  function l0(_, e) {
    const n = v(_, e, z0);
    return c(n);
  }
  function m0(_, e) {
    const n = v(_, e, W0);
    return c(n);
  }
  function p0(_, e) {
    const n = v(_, e, G0);
    return c(n);
  }
  function x0(_, e) {
    const n = v(_, e, U0);
    return c(n);
  }
  function y0(_, e) {
    const n = v(_, e, j0);
    return c(n);
  }
  function h0(_, e) {
    const n = v(_, e, N0);
    return c(n);
  }
  function S0(_, e) {
    const n = v(_, e, Q0);
    return c(n);
  }
  function v0(_, e) {
    const n = v(_, e, C0);
    return c(n);
  }
  function I0(_) {
    return c(_);
  }
  function D0(_, e) {
    const n = x(_, e);
    return c(n);
  }
  function A0(_, e) {
    const n = du(_, e);
    return c(n);
  }
  function P0(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function M0(_, e) {
    const n = iu(_, e);
    return c(n);
  }
  function F0(_, e) {
    const n = gu(_, e);
    return c(n);
  }
  function k0(_, e) {
    const n = E(_, e);
    return c(n);
  }
  function T0(_, e) {
    const n = su(_, e);
    return c(n);
  }
  function E0(_, e) {
    const n = l(_, e);
    return c(n);
  }
  function L0(_) {
    const e = t(_);
    return c(e);
  }
  function O0(_) {
    L(_);
  }
  function C0(_, e) {
    d.__wasm_bindgen_func_elem_6733(_, e);
  }
  function R0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731(_, e, c(n));
  }
  function B0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_3(_, e, c(n));
  }
  function q0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_4(_, e, c(n));
  }
  function V0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_5(_, e, c(n));
  }
  function W0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_7(_, e, c(n));
  }
  function G0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_8(_, e, c(n));
  }
  function U0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_9(_, e, c(n));
  }
  function j0(_, e, n) {
    d.__wasm_bindgen_func_elem_6731_10(_, e, c(n));
  }
  function K0(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_9608(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function $0(_, e, n, r) {
    d.__wasm_bindgen_func_elem_6732(_, e, c(n), c(r));
  }
  function z0(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1384(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function N0(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1384_11(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Q0(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1384_12(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const X0 = [
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
  ], Y0 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], H0 = [
    "opaque",
    "premultiplied"
  ], J0 = [
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
  ], Z0 = [
    "none",
    "front",
    "back"
  ], _u = [
    "ccw",
    "cw"
  ], eu = [
    "uint16",
    "uint32"
  ], K = [
    "load",
    "clear"
  ], tu = [
    "low-power",
    "high-performance"
  ], nu = [
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
  ], ru = [
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
  ], bu = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], cu = [
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
  ], au = [
    "vertex",
    "instance"
  ], fu = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], ou = [
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
  } : new FinalizationRegistry((_) => d.__wbindgen_export5(_.a, _.b));
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
  function uu(_) {
    _ < 1028 || (I[_] = F, F = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, wu().subarray(_ / 4, _ / 4 + e);
  }
  function du(_, e) {
    return _ = _ >>> 0, lu().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, mu().subarray(_ / 4, _ / 4 + e);
  }
  function iu(_, e) {
    return _ = _ >>> 0, pu().subarray(_ / 1, _ / 1 + e);
  }
  function A(_, e) {
    _ = _ >>> 0;
    const n = w(), r = [];
    for (let b = _; b < _ + 4 * e; b += 4) r.push(t(n.getUint32(b, true)));
    return r;
  }
  function gu(_, e) {
    return _ = _ >>> 0, xu().subarray(_ / 2, _ / 2 + e);
  }
  function E(_, e) {
    return _ = _ >>> 0, yu().subarray(_ / 4, _ / 4 + e);
  }
  function su(_, e) {
    return _ = _ >>> 0, M().subarray(_ / 1, _ / 1 + e);
  }
  let P = null;
  function w() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== d.memory.buffer) && (P = new DataView(d.memory.buffer)), P;
  }
  let O = null;
  function wu() {
    return (O === null || O.byteLength === 0) && (O = new Float32Array(d.memory.buffer)), O;
  }
  let C = null;
  function lu() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(d.memory.buffer)), C;
  }
  let R = null;
  function mu() {
    return (R === null || R.byteLength === 0) && (R = new Int32Array(d.memory.buffer)), R;
  }
  let B = null;
  function pu() {
    return (B === null || B.byteLength === 0) && (B = new Int8Array(d.memory.buffer)), B;
  }
  function l(_, e) {
    return Su(_ >>> 0, e);
  }
  let q = null;
  function xu() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(d.memory.buffer)), q;
  }
  let V = null;
  function yu() {
    return (V === null || V.byteLength === 0) && (V = new Uint32Array(d.memory.buffer)), V;
  }
  let W = null;
  function M() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(d.memory.buffer)), W;
  }
  function t(_) {
    return I[_];
  }
  function u(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      d.__wbindgen_export3(c(n));
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
      --r.cnt === 0 && (d.__wbindgen_export5(r.a, r.b), r.a = 0, N.unregister(r));
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
    return uu(_), e;
  }
  let G = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  G.decode();
  const hu = 2146435072;
  let U = 0;
  function Su(_, e) {
    return U += e, U >= hu && (G = new TextDecoder("utf-8", {
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
  let y = 0, d;
  function vu(_) {
    d = _;
  }
  URL = globalThis.URL;
  const m = await H({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: O0,
      __wbg_new_227d7c05414eb861: Kr,
      __wbg_stack_3b0d974bbf31e44f: hf,
      __wbg_error_a6fa202b58aa1cd3: ln,
      __wbindgen_object_clone_ref: L0,
      __wbg_set_dst_factor_ec7407f19be1aff9: Jc,
      __wbg_set_operation_62ce44e1728c4047: Ea,
      __wbg_set_src_factor_9bfe84af9b7b5cac: Ua,
      __wbg_length_370319915dc99107: Fr,
      __wbg_Window_afcc911b2f9c92e2: Z,
      __wbg_gpu_2ccc250735d24a2a: lr,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: e_,
      __wbg_set_a_88262a42340d0b1c: wc,
      __wbg_set_b_c47befe0af3261eb: vc,
      __wbg_set_g_5983abfc46e0cf4e: ua,
      __wbg_set_r_c6f4c68f4804d655: Ba,
      __wbg_queue_adce34608fd0c893: Cb,
      __wbg_set_power_preference_8fdca0b7af640d49: Oa,
      __wbg_requestAdapter_2e6718811c735a57: Nb,
      __wbg_set_color_attachments_581fdb3310e4abfa: Oc,
      __wbg_set_label_17eb9fe3a02f62b0: sa,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: df,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: Gc,
      __wbg_set_depth_load_op_511c513eab4e56a9: Kc,
      __wbg_set_depth_store_op_c89f33b39b43361c: Qc,
      __wbg_set_depth_read_only_7f41a74741c144ec: $c,
      __wbg_set_stencil_clear_value_42be608809151e2a: Ka,
      __wbg_set_stencil_load_op_31838c036993098a: za,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: Xa,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: Qa,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Nc,
      __wbg_set_query_set_41de86d2401aee04: Ra,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: Ac,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: Zc,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: ef,
      __wbg_beginRenderPass_aa22c432e793359a: D_,
      __wbg_label_7ed42f25f841996b: Mr,
      __wbg_set_label_08d9be3e4719c226: ga,
      __wbg_finish_4d91de5e927dd13f: xn,
      __wbg_finish_6e06b68ab68cd9f6: yn,
      __wbg_setPipeline_c41bf46790f27f9e: oc,
      __wbg_draw_6877f98847e1e36c: cn,
      __wbg_end_f99ebed53d4e198a: gn,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: Yn,
      __wbg_getCurrentTexture_20714d1bd9051cab: Un,
      __wbg_set_device_e275d1d4f3c9eb74: Yc,
      __wbg_set_format_815efd4dc4817bbb: ca,
      __wbg_set_usage_a137f82ca163b0a9: cf,
      __wbg_set_alpha_mode_df805952892caa9c: mc,
      __wbg_set_mode_9990b3393ba469ae: Aa,
      __wbg_set_tone_mapping_b3464f1baa4cff92: tf,
      __wbg_set_view_formats_5797d2fff3c11808: of,
      __wbg_configure_0e4789c0f6b35c8e: Ce,
      __wbg_new_typed_4148bd5ae72ab3f0: Zr,
      __wbg_set_required_limits_871ed33c68613dcb: Va,
      __wbg_set_required_features_1baf274a8669db60: qa,
      __wbg_set_label_60ad96c811e0d109: wa,
      __wbg_requestDevice_ab46d0519ea1cc34: Xb,
      __wbg_set_code_b4f37f81f45b5b25: Ec,
      __wbg_set_label_e3944e54881b8c50: xa,
      __wbg_createShaderModule_2e44fc7677c6288b: nt,
      __wbg_set_label_72bb4f41ef0cb893: la,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: Ke,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: Pc,
      __wbg_set_label_9556af8b5cda3c9d: ma,
      __wbg_createPipelineLayout_2c8cd4528b06c108: Xe,
      __wbg_set_module_d0e2098713606cae: Pa,
      __wbg_set_entry_point_e87e79251dd3144f: ea,
      __wbg_set_buffers_7d0d8f507699e956: kc,
      __wbg_set_layout_50ab727f44b38f26: ha,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: Sa,
      __wbg_set_vertex_0be5d146f9ff6f36: ff,
      __wbg_set_label_e922700240417ab5: ya,
      __wbg_set_format_e52bdcca880d2c8e: aa,
      __wbg_set_depth_compare_0c8631eb2eae98e3: Uc,
      __wbg_set_depth_write_enabled_ce89750042940350: Xc,
      __wbg_set_depth_bias_d7cd16096242a657: Vc,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: qc,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: Wc,
      __wbg_set_compare_f36b34abfaa08ccb: Cc,
      __wbg_set_depth_fail_op_668155ae33d3c06f: jc,
      __wbg_set_fail_op_92f716dbc88b6973: ta,
      __wbg_set_pass_op_cf02fa088d6352a7: La,
      __wbg_set_stencil_back_85b22f1db5b1940a: ja,
      __wbg_set_stencil_front_525526164a798a44: $a,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: Na,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: Ya,
      __wbg_set_depth_stencil_97506c7bea4f53da: zc,
      __wbg_set_module_f02e076ca7e7daf8: Ma,
      __wbg_set_targets_c38bd200c836d66f: _f,
      __wbg_set_entry_point_207540f042015ce5: _a,
      __wbg_set_fragment_8b780f00a0b0e6f3: fa,
      __wbg_set_count_069a4eac409bac55: Rc,
      __wbg_set_mask_70a8a59ce09e5997: Ia,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: pc,
      __wbg_set_multisample_37ddafe88b5cd466: Fa,
      __wbg_set_cull_mode_fc649853947a3d0c: Bc,
      __wbg_set_front_face_28ffdf524eedce5b: oa,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: Za,
      __wbg_set_topology_da25f2cc5af203d2: nf,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: bf,
      __wbg_set_primitive_43c23761a55b4088: Ca,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: Ze,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: ub,
      __wbg_submit_ce44115121cd166c: Rf,
      __wbg_getMappedRange_d0bf3141224111b6: zn,
      __wbg_unmap_adaf93276fdf9aaf: zo,
      __wbg_destroy_fe937f756bf8df37: Ut,
      __wbg_mapAsync_52b01fa9e8f765fd: Or,
      __wbg_then_16d107c451e9905d: ao,
      __wbg_set_dimension_e325282e613ca0a4: Hc,
      __wbg_set_format_1fcaa7d60546b490: na,
      __wbg_set_aspect_0d453bca3d012f02: hc,
      __wbg_set_base_array_layer_f176bb9f1b37b342: Ic,
      __wbg_set_array_layer_count_7312f0f31af94e7c: xc,
      __wbg_set_base_mip_level_1df145d9f8db32a9: Dc,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Da,
      __wbg_set_label_e16e2dbe51349c7f: pa,
      __wbg_set_usage_ddd42599bbba7779: af,
      __wbg_createView_ceaf2f5881adbd34: ut,
      __wbg_get_507a50627bffa49b: gr,
      __wbg_set_format_5d2f25cc93654ecc: ra,
      __wbg_set_offset_f64_28c24dc15000932e: ka,
      __wbg_set_shader_location_7e1832a74f912217: Ga,
      __wbg_set_attributes_7537844a7e6dafdc: Sc,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: yc,
      __wbg_set_step_mode_a97bb24714da41a9: Ha,
      __wbg_set_write_mask_d45279e56abbfcb5: wf,
      __wbg_set_format_5ff53724ed6cedf2: ba,
      __wbg_set_blend_7493c2066c3e9970: Mc,
      __wbg_set_load_op_99661da6c4eab9b0: va,
      __wbg_set_store_op_b5fdf672436f13f3: Ja,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: uf,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Tc,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Wa,
      __wbg_unconfigure_0a07a0a40de8988d: oo,
      __wbg_set_alpha_bfd2df62e7bc581b: lc,
      __wbg_set_color_83aa977526e88cbb: Lc,
      __wbg_includes_78c9a3115b08eddc: pr,
      __wbg_push_d2ae3af0c1217ae6: Mb,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: wr,
      __wbg_offsetX_a9bf2ea7f0575ac9: fb,
      __wbg_offsetY_10e5433a1bbd4c01: ob,
      __wbg_postTask_e2439afddcdfbb55: Ib,
      __wbg_catch_c1a60df4c30d76d3: ie,
      __wbg_requestFullscreen_3f16e43f398ce624: Yb,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: Nn,
      __wbg_prototype_0d5bb2023db3bcfc: Pb,
      __wbg_userAgentData_31b8f893e8977e94: Yo,
      __wbg_brands_b7dcf262485c3e7c: _e,
      __wbg_brand_3bc196a43eceb8af: Z_,
      __wbg_cancel_65f38182e2eeac5c: de,
      __wbg_animate_8f41e2f47c7d04ab: y_,
      __wbg_play_3997a1be51d27925: wb,
      __wbg_requestFullscreen_b977a3a0697e883c: Hb,
      __wbg_Window_c7f91e3f80ae0a0e: __,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: a0,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: f0,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: Rn,
      __wbg_scheduler_b35fe73ba70e89cc: bc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: Jb,
      __wbg_scheduler_a17d41c9c822fc26: rc,
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
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: $n,
      __wbg_getQueryParameter_919125495ccb17ca: tr,
      __wbg_getSyncParameter_d8f6c145657a3550: or,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: ur,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Ir,
      __wbg_deleteSync_9b0e43580942a0f6: Mt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Et,
      __wbg_drawArraysInstanced_51b161548a3f10c4: Zt,
      __wbg_drawBuffers_1c1ec9b292442a2a: nn,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: bn,
      __wbg_endQuery_a50f7fc49cfe56e9: dn,
      __wbg_fenceSync_fe2cdba4a0d73679: mn,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Fn,
      __wbg_getBufferSubData_11018928c908ac2c: On,
      __wbg_readBuffer_4271437a70aae481: Rb,
      __wbg_readPixels_5f013a7d85b23800: Bb,
      __wbg_readPixels_82c9dee754d58176: qb,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: jb,
      __wbg_texImage3D_ef16a1f721b3f908: Gf,
      __wbg_texStorage2D_7f947efc63dac273: Kf,
      __wbg_texStorage3D_f8f2e4b3386736f9: $f,
      __wbg_texSubImage2D_d1af697e69f8a9e4: Hf,
      __wbg_texSubImage2D_047380bb2660e4f9: zf,
      __wbg_texSubImage2D_6a376bfc3a31436b: Qf,
      __wbg_texSubImage2D_98c43894eb217aa7: Xf,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: tc,
      __wbg_samplerParameteri_7b1b4091de49aabb: nc,
      __wbg_texImage2D_5abd8779d1d033c7: qf,
      __wbg_texImage2D_8d168171984f2a40: Vf,
      __wbg_texImage3D_bdd9bebe42ed1f52: Wf,
      __wbg_texSubImage2D_5058af3d30a8e205: Nf,
      __wbg_texSubImage2D_e107b4f88c19b920: Zf,
      __wbg_texSubImage2D_bed5e7a3cd81d409: Yf,
      __wbg_texSubImage3D_8077e90ec309c414: no,
      __wbg_texSubImage3D_45e498ae6298998c: _o,
      __wbg_uniform1ui_cd7ad5581093b3df: wo,
      __wbg_uniform2fv_1b43656b33177d21: lo,
      __wbg_uniform2iv_859048b9d60f46ae: po,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: eo,
      __wbg_texSubImage3D_6cb6cfd732dad145: to,
      __wbg_texSubImage3D_93b38c69acb735c8: ro,
      __wbg_texSubImage3D_c9e5a071796d412f: bo,
      __wbg_texSubImage3D_feebaf7f0f4594c6: co,
      __wbg_uniform2uiv_8a9cb3155271213b: yo,
      __wbg_uniform4fv_674a247aeb15012d: Fo,
      __wbg_uniform4iv_d02934d7b94df609: To,
      __wbg_uniform3fv_8ecb5ebb510b7bce: ho,
      __wbg_uniform3iv_09abae5eabd6b9d6: vo,
      __wbg_uniform3uiv_3c0b163732f5b8f0: Do,
      __wbg_uniform4uiv_0d1a8ed214f10c31: Eo,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Vo,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: Wo,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: Go,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: Lo,
      __wbg_uniformMatrix2fv_9284424cc6aac672: Co,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Ro,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: Bo,
      __wbg_uniformMatrix4fv_423b958042692150: jo,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: _0,
      __wbg_activeTexture_d12958674e97a118: w_,
      __wbg_attachShader_8971266b4c9bc514: v_,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: A_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: F_,
      __wbg_bindFramebuffer_390311eff3896937: T_,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: O_,
      __wbg_bindTexture_28eff4bbd8aaab54: R_,
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
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Ko,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: $o,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Zo,
      __wbg_copyTexSubImage2D_8daea651fc408645: Ve,
      __wbg_createBuffer_01568a9d930d90dd: Ue,
      __wbg_createFramebuffer_de0d521f546e7534: Ne,
      __wbg_createProgram_538c9777a4ac084f: He,
      __wbg_createRenderbuffer_9d801bf44c314f44: et,
      __wbg_createShader_7d139f2d50f77365: bt,
      __wbg_createTexture_d13f98e0d3d912f4: at,
      __wbg_cullFace_f1c75ae19b07eaf3: st,
      __wbg_deleteBuffer_1ca3ffe668a488e7: mt,
      __wbg_getExtension_101c7e41de3e4d90: Kn,
      __wbg_getParameter_d39f59581389af1b: Xn,
      __wbg_getProgramInfoLog_d1ce570463a68779: Jn,
      __wbg_getProgramParameter_c8d1154fbb3c0890: _r,
      __wbg_getShaderInfoLog_5cee2add982c7165: nr,
      __wbg_getShaderParameter_3394e75dcb97f380: br,
      __wbg_getSupportedExtensions_2a7458ec45e82560: ar,
      __wbg_getUniformLocation_788a34295dd6fabe: ir,
      __wbg_deleteFramebuffer_963cd69957209d37: pt,
      __wbg_deleteProgram_132e191baa9fa84f: ht,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: vt,
      __wbg_deleteShader_993edb4beb3c4d53: Pt,
      __wbg_deleteTexture_bdc2202d7a50dcea: kt,
      __wbg_depthFunc_74a8f8acf8973c86: Bt,
      __wbg_depthMask_a644a67deced3257: Vt,
      __wbg_depthRange_5e90d4d236280ff5: Gt,
      __wbg_disable_1659d1b7d50c31e7: Nt,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: zt,
      __wbg_drawArrays_b0c59a6e158122f2: en,
      __wbg_enable_28bbeed576131d1f: on,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: fn,
      __wbg_finish_cbe7ec8675dd7705: hn,
      __wbg_flush_e03c08da6863b5ab: vn,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: An,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: Pn,
      __wbg_frontFace_29ef7151de8b5ed9: Tn,
      __wbg_linkProgram_4e047fb3197a0348: kr,
      __wbg_pixelStorei_c844cd0db4f1fde6: sb,
      __wbg_polygonOffset_4eb460adf41db6cd: pb,
      __wbg_renderbufferStorage_0a8de92542893819: Kb,
      __wbg_scissor_105e756596bc35df: cc,
      __wbg_vertexAttribPointer_a8f0af57269c2067: e0,
      __wbg_viewport_affdf15c559df1e2: n0,
      __wbg_shaderSource_c3469dc2221dd528: mf,
      __wbg_stencilFuncSeparate_814300446c2969ef: Mf,
      __wbg_stencilMask_9a844dc58a89992f: Ef,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: Ff,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: Of,
      __wbg_texParameteri_1fc451e0964fc91c: Uf,
      __wbg_uniform1f_62692c8fa8e7bf1e: uo,
      __wbg_uniform1i_7621f908f78177df: so,
      __wbg_uniform4f_9ff60fc65b0ed726: Ao,
      __wbg_useProgram_49495850b446fa56: Xo,
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
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Sr,
      __wbg_cancelIdleCallback_b9e469156370a1e5: ue,
      __wbg_getComputedStyle_961681bdf7e518e8: Bn,
      __wbg_matchMedia_9968278b31706f78: Cr,
      __wbg_cancelAnimationFrame_086d6084925c4e06: oe,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Qb,
      __wbg_clearTimeout_8f80437be2324e09: ye,
      __wbg_requestIdleCallback_d292749bf33501af: Zb,
      __wbg_setTimeout_5ccd86968701f1ec: ic,
      __wbg_setTimeout_cfa2cf195c3738db: gc,
      __wbg_queueMicrotask_ed5b33385a53c3a9: Ob,
      __wbg_navigator_99621db14b3f1099: jr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: Kt,
      __wbg_document_179650d6cb13c263: Ht,
      __wbg_instanceof_Window_05ba1ee4f6781663: vr,
      __wbg_visibilityState_301d0905e8103e21: b0,
      __wbg_activeElement_4bc99dc1a7094c27: g_,
      __wbg_fullscreenElement_9f50a5e63bb433a8: Ln,
      __wbg_createElement_fcbc0805de826d62: $e,
      __wbg_getElementById_1cbd8f06dbe8eb8e: jn,
      __wbg_querySelector_fd7d157ebe17cd16: Tb,
      __wbg_querySelectorAll_7e98cbe256deaadd: kb,
      __wbg_body_40ec34e0a2931fe8: J_,
      __wbg_setPointerCapture_70025ca3fb7f26b9: uc,
      __wbg_setAttribute_71039043be82d098: fc,
      __wbg_focus_2f77051f98540625: In,
      __wbg_style_6657aed849e5d757: Cf,
      __wbg_navigator_51379c10a84aeec9: Ur,
      __wbg_uniform2iv_f84a24961c0cfcd0: xo,
      __wbg_uniform3fv_95d1933ea1440725: So,
      __wbg_uniform3iv_a3a7008990fd84f0: Io,
      __wbg_uniform4fv_4ca8c114ca3de099: Mo,
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
      __wbg_depthFunc_455cfeb8a9d2fb4c: Rt,
      __wbg_depthMask_4bd6c73b1339d257: qt,
      __wbg_depthRange_38b2287ffbea14fd: Wt,
      __wbg_uniform4iv_45ab52abcb3f882c: ko,
      __wbg_uniformMatrix2fv_769725d64641341f: Oo,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: qo,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Uo,
      __wbg_activeTexture_92b04d918019d603: s_,
      __wbg_attachShader_5f7f4077e124e23b: S_,
      __wbg_bindAttribLocation_94202d7a59ab7863: P_,
      __wbg_bindBuffer_a01497b1abdcdd9a: k_,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: E_,
      __wbg_bindRenderbuffer_75e8469e930840fa: L_,
      __wbg_bindTexture_9b04b1b7c00d4dd6: B_,
      __wbg_blendColor_793b560dc69ddd0b: W_,
      __wbg_blendEquation_f5c5272993f6cb01: $_,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: j_,
      __wbg_blendFunc_a854d7e4459150ba: X_,
      __wbg_blendFuncSeparate_37156309688f8f88: z_,
      __wbg_disable_40c3975167c1ee07: Qt,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: $t,
      __wbg_drawArrays_676becae0149ed65: _n,
      __wbg_enable_611804c0ac1504ce: un,
      __wbg_enableVertexAttribArray_4c08219124740f14: an,
      __wbg_finish_126e6f2ac71e3096: pn,
      __wbg_flush_db77b4a63d6b337d: Sn,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Dn,
      __wbg_linkProgram_d7c71c539c8c6a43: Tr,
      __wbg_pixelStorei_2a93b18efde9acf8: gb,
      __wbg_polygonOffset_eccb68e40a18f861: xb,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: $b,
      __wbg_scissor_573b844152316b8d: ac,
      __wbg_shaderSource_4cf90af97621ff49: lf,
      __wbg_stencilFuncSeparate_35136c4e5153406f: Pf,
      __wbg_stencilMask_1c99b79b516d12dd: Tf,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: kf,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: Lf,
      __wbg_texParameteri_9d0daa263d3a863f: jf,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Mn,
      __wbg_frontFace_fc6d98dafa42de87: En,
      __wbg_getParameter_039a5899307fab55: Qn,
      __wbg_getProgramInfoLog_c4762e0513468a26: Hn,
      __wbg_getProgramParameter_b9995b56c258ac86: Zn,
      __wbg_getShaderInfoLog_bc236afe696c1283: rr,
      __wbg_getShaderParameter_cbcc0995e8e16214: cr,
      __wbg_getUniformLocation_24ef46cdda2148ab: dr,
      __wbg_uniform1f_b79d0c5667f9fb40: io,
      __wbg_uniform1i_5830de6702add20a: go,
      __wbg_uniform4f_b25e39808b830021: Po,
      __wbg_useProgram_182d120fe476921b: Qo,
      __wbg_vertexAttribPointer_b300c8e000cdac93: t0,
      __wbg_viewport_e8a16ca4a5085e5f: r0,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: Jf,
      __wbg_uniform2fv_948dab6a82b428ac: mo,
      __wbg_bufferData_ce4f44d56e9ddab5: re,
      __wbg_bufferData_073a7c6abef7a55f: ee,
      __wbg_bufferSubData_ce9854d3d337e2cf: ce,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: Ee,
      __wbg_readPixels_c7861e25836bf57b: Vb,
      __wbg_texImage2D_3813406af5bf54c8: Bf,
      __wbg_new_5394f65338077341: Qr,
      __wbg_inlineSize_3c8412828bef21eb: yr,
      __wbg_disconnect_39bfdcb35b1fc7b9: Xt,
      __wbg_blockSize_5af477b962b2b031: H_,
      __wbg_observe_f27242eadc2ebd47: bb,
      __wbg_observe_615bef91ee28c925: nb,
      __wbg_unobserve_41a4f85162f1fb18: No,
      __wbg_isIntersecting_fc6d9529a49c5d62: Dr,
      __wbg_log_d267660666346fb3: Lr,
      __wbg_info_eadbe775a8e2e9eb: xr,
      __wbg_warn_b1370d804fa3e259: c0,
      __wbg_debug_87fd9b1a625b7efb: wt,
      __wbg_error_744744ff0c9861e6: sn,
      __wbg_error_7ed559cd7146b49d: wn,
      __wbg_ctrlKey_50bd8324959ca786: it,
      __wbg_shiftKey_9f797da486b2ade8: xf,
      __wbg_altKey_f3e24c4c9cfcf271: x_,
      __wbg_metaKey_f934f09e37889d70: Vr,
      __wbg_button_f6a9a7b725f1838e: ae,
      __wbg_buttons_d8acd46cf8f40ae9: fe,
      __wbg_movementX_87e39021f3fce8b8: Wr,
      __wbg_movementY_f6f63087e2248fa9: Gr,
      __wbg_set_box_223b9bc0b7f548f6: Fc,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: kn,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: Jt,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: q_,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: rn,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: ft,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Tt,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: Jo,
      __wbg_set_onmessage_d511b70365304094: Ta,
      __wbg_set_width_49ac9b7d914afc85: gf,
      __wbg_getPropertyValue_dc6b061239dad6f1: er,
      __wbg_set_height_bbeef8f354041577: ia,
      __wbg_removeProperty_70da952bc1b493fa: Ub,
      __wbg_close_3423cc7dafc477bb: Ie,
      __wbg_new_25e75d1f0df4d87a: $r,
      __wbg_setProperty_e4e51b1b1d681d15: dc,
      __wbg_postMessage_b80f20949a4b4f55: Sb,
      __wbg_start_d0cdf16ff965b3f3: Sf,
      __wbg_getContext_fd298c901058eb31: Gn,
      __wbg_getContext_7476e39fa008047e: qn,
      __wbg_appendChild_f553e8704c4f14a6: h_,
      __wbg_contains_7189b09a477442a6: Re,
      __wbg_signal_dad7cb35193abd31: yf,
      __wbg_addEventListener_d85450ee1320c989: l_,
      __wbg_new_4339b2a2675a03e3: Nr,
      __wbg_abort_8bae0f33e7833997: i_,
      __wbg_altKey_50f830d1793a2eea: p_,
      __wbg_removeEventListener_a3f23c70077bdcc1: Wb,
      __wbg_ctrlKey_2e52816fa7160097: dt,
      __wbg_shiftKey_9bcb8bdd60c2f152: pf,
      __wbg_metaKey_d961c7572a9f84f5: qr,
      __wbg_location_8f24df2c257fb974: Er,
      __wbg_repeat_4e131e99bff9b9f4: zb,
      __wbg_key_803dca86cdcfa8dd: Pr,
      __wbg_code_89c999e407c79eef: De,
      __wbg_createObjectURL_416e527781e6fd6d: Qe,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: ec,
      __wbg_set_type_8ce203e412e28cf6: rf,
      __wbg_width_20c45c895834b83f: o0,
      __wbg_height_9f27216001e3c804: mr,
      __wbg_set_width_8e30d010cd66830d: sf,
      __wbg_set_height_7d9d8f892e6964c6: da,
      __wbg_getContext_e79ddf6a9cb3cc76: Wn,
      __wbg_getContext_ca12bb65aab778a4: Vn,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: hr,
      __wbg_media_40cbd26ab34df71f: Br,
      __wbg_matches_978994974df1e85b: Rr,
      __wbg_addListener_b5b7f95360b22984: m_,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: Fb,
      __wbg_removeListener_768e1e787e1d4b2e: Gb,
      __wbg_deltaX_5d829ffba565ed10: Ot,
      __wbg_deltaY_6cfce8f8da250c23: Ct,
      __wbg_deltaMode_d869228efd74f393: Lt,
      __wbg_port1_dabba0a56576e47e: yb,
      __wbg_port2_d05676aee003eedc: hb,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: tn,
      __wbg_getSupportedProfiles_90a4f330938d0241: fr,
      __wbg_new_f1a34223ddbe3f7d: Jr,
      __wbg_pointerId_ea33d2695be12e7f: lb,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: eb,
      __wbg_pressure_9a7845d9744ae9f4: Db,
      __wbg_pointerType_d5e932608aa61bb6: mb,
      __wbg_getCoalescedEvents_366947e5550da21b: Cn,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Be,
      __wbg_userAgent_0558f0ac642f7771: Ho,
      __wbg_new_e0bd7540d9834af6: Hr,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: jt,
      __wbg_disconnect_491a6bfd82cdd887: Yt,
      __wbg_observe_c3834a3e4cde3e64: rb,
      __wbg_new_8f0c2d11e48a4727: Xr,
      __wbg_postMessage_ef2dbf5e8c8ebffc: vb,
      __wbg_preventDefault_b64888c857500682: Ab,
      __wbg_get_b2053e9bfdf3ca8e: sr,
      __wbg_persisted_e508d4d322115185: ib,
      __wbg_performance_3fcf6e32a7e1ed0a: db,
      __wbg_now_e7c6795a7f81e10f: tb,
      __wbg_resolve_2191a4dfe481c25b: _c,
      __wbg_then_6ec10ae38b3e92f7: fo,
      __wbg_new_da52cf8fe3429cb2: Yr,
      __wbg_new_32b398fb48b6d94a: zr,
      __wbg_of_85f52f8b6491a7ca: ab,
      __wbg_of_5f1b88183ddb5d94: cb,
      __wbg_is_7b9d0b289033c7de: Ar,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: _b,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: If,
      __wbg_static_accessor_SELF_146583524fe1469b: Df,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: vf,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: Af,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: Eb,
      __wbg_queueMicrotask_6a09b7bc46549209: Lb,
      __wbg_set_8535240470bf2500: sc,
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
      __wbindgen_cast_0000000000000001: u0,
      __wbindgen_cast_0000000000000002: d0,
      __wbindgen_cast_0000000000000003: i0,
      __wbindgen_cast_0000000000000004: g0,
      __wbindgen_cast_0000000000000005: s0,
      __wbindgen_cast_0000000000000006: w0,
      __wbindgen_cast_0000000000000007: l0,
      __wbindgen_cast_0000000000000008: m0,
      __wbindgen_cast_0000000000000009: p0,
      __wbindgen_cast_000000000000000a: x0,
      __wbindgen_cast_000000000000000b: y0,
      __wbindgen_cast_000000000000000c: h0,
      __wbindgen_cast_000000000000000d: S0,
      __wbindgen_cast_000000000000000e: v0,
      __wbindgen_cast_000000000000000f: I0,
      __wbindgen_cast_0000000000000010: D0,
      __wbindgen_cast_0000000000000011: A0,
      __wbindgen_cast_0000000000000012: P0,
      __wbindgen_cast_0000000000000013: M0,
      __wbindgen_cast_0000000000000014: F0,
      __wbindgen_cast_0000000000000015: k0,
      __wbindgen_cast_0000000000000016: T0,
      __wbindgen_cast_0000000000000017: E0
    }
  }, J), Iu = m.memory, Du = m.main, Au = m.run_web, Pu = m.__abort_handler, Mu = m.__instance_terminated, Fu = m.__wasm_bindgen_func_elem_9608, ku = m.__wasm_bindgen_func_elem_6732, Tu = m.__wasm_bindgen_func_elem_1384, Eu = m.__wasm_bindgen_func_elem_1384_11, Lu = m.__wasm_bindgen_func_elem_1384_12, Ou = m.__wasm_bindgen_func_elem_6731, Cu = m.__wasm_bindgen_func_elem_6731_3, Ru = m.__wasm_bindgen_func_elem_6731_4, Bu = m.__wasm_bindgen_func_elem_6731_5, qu = m.__wasm_bindgen_func_elem_6731_7, Vu = m.__wasm_bindgen_func_elem_6731_8, Wu = m.__wasm_bindgen_func_elem_6731_9, Gu = m.__wasm_bindgen_func_elem_6731_10, Uu = m.__wasm_bindgen_func_elem_6733, ju = m.__wbindgen_export, Ku = m.__wbindgen_export2, $u = m.__wbindgen_export3, zu = m.__wbindgen_export4, Nu = m.__wbindgen_export5, Qu = m.__wbindgen_add_to_stack_pointer, Y = m.__wbindgen_start, Xu = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Pu,
    __instance_terminated: Mu,
    __wasm_bindgen_func_elem_1384: Tu,
    __wasm_bindgen_func_elem_1384_11: Eu,
    __wasm_bindgen_func_elem_1384_12: Lu,
    __wasm_bindgen_func_elem_6731: Ou,
    __wasm_bindgen_func_elem_6731_10: Gu,
    __wasm_bindgen_func_elem_6731_3: Cu,
    __wasm_bindgen_func_elem_6731_4: Ru,
    __wasm_bindgen_func_elem_6731_5: Bu,
    __wasm_bindgen_func_elem_6731_7: qu,
    __wasm_bindgen_func_elem_6731_8: Vu,
    __wasm_bindgen_func_elem_6731_9: Wu,
    __wasm_bindgen_func_elem_6732: ku,
    __wasm_bindgen_func_elem_6733: Uu,
    __wasm_bindgen_func_elem_9608: Fu,
    __wbindgen_add_to_stack_pointer: Qu,
    __wbindgen_export: ju,
    __wbindgen_export2: Ku,
    __wbindgen_export3: $u,
    __wbindgen_export4: zu,
    __wbindgen_export5: Nu,
    __wbindgen_start: Y,
    main: Du,
    memory: Iu,
    run_web: Au
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  vu(Xu);
  Y();
})();
export {
  __tla,
  Hu as run_web
};
