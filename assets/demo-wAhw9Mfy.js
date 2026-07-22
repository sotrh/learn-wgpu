import { _ as Z } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let od;
let __tla = (async () => {
  const __ = "/learn-wgpu/assets/demo_bg-7vatMbku.wasm";
  od = function() {
    d.run_web();
  };
  function e_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function t_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function n_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function r_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function b_(_, e) {
    const n = j(t(e)), r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function c_(_) {
    return typeof t(_) == "function";
  }
  function a_(_) {
    return t(_) === null;
  }
  function f_(_) {
    return typeof t(_) == "string";
  }
  function o_(_) {
    return t(_) === void 0;
  }
  function u_(_, e) {
    const n = t(e), r = typeof n == "number" ? n : void 0;
    w().setFloat64(_ + 8, s(r) ? 0 : r, true), w().setInt32(_ + 0, !s(r), true);
  }
  function d_(_, e) {
    const n = t(e), r = typeof n == "string" ? n : void 0;
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function i_(_, e) {
    throw new Error(l(_, e));
  }
  function g_(_) {
    t(_)._wbg_cb_unref();
  }
  function s_(_) {
    t(_).abort();
  }
  function w_(_) {
    const e = t(_).activeElement;
    return s(e) ? 0 : c(e);
  }
  function l_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function m_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function p_() {
    return u(function(_, e, n, r) {
      t(_).addEventListener(l(e, n), t(r));
    }, arguments);
  }
  function x_() {
    return u(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function y_(_) {
    return t(_).altKey;
  }
  function h_(_) {
    return t(_).altKey;
  }
  function S_(_, e, n) {
    const r = t(_).animate(t(e), t(n));
    return c(r);
  }
  function v_() {
    return u(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function I_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function A_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function D_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function P_() {
    return u(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function M_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, l(r, b));
  }
  function F_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, l(r, b));
  }
  function k_(_, e, n, r, b, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(r), b, a);
  }
  function T_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function E_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function L_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function B_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function O_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function C_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function R_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function q_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function W_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function G_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function U_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function j_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function K_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function $_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function z_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function N_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function Q_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function X_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Y_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function H_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function J_(_, e, n, r, b, a, f, o, i, g, p) {
    t(_).blitFramebuffer(e, n, r, b, a, f, o, i, g >>> 0, p >>> 0);
  }
  function Z_(_) {
    return t(_).blockSize;
  }
  function _e(_) {
    const e = t(_).body;
    return s(e) ? 0 : c(e);
  }
  function ee(_, e) {
    const n = t(e).brand, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function te(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ne(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function re(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function be(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function ce(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ae(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function fe(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function oe(_) {
    return t(_).button;
  }
  function ue(_) {
    return t(_).buttons;
  }
  function de() {
    return u(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function ie(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function ge(_) {
    t(_).cancel();
  }
  function se(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function we(_, e, n, r, b) {
    t(_).clearBufferfv(e >>> 0, n, x(r, b));
  }
  function le(_, e, n, r, b) {
    t(_).clearBufferiv(e >>> 0, n, A(r, b));
  }
  function me(_, e, n, r, b) {
    t(_).clearBufferuiv(e >>> 0, n, E(r, b));
  }
  function pe(_, e) {
    t(_).clearDepth(e);
  }
  function xe(_, e) {
    t(_).clearDepth(e);
  }
  function ye(_, e) {
    t(_).clearStencil(e);
  }
  function he(_, e) {
    t(_).clearStencil(e);
  }
  function Se(_, e) {
    t(_).clearTimeout(e);
  }
  function ve(_, e) {
    t(_).clear(e >>> 0);
  }
  function Ie(_, e) {
    t(_).clear(e >>> 0);
  }
  function Ae(_, e, n, r) {
    return t(_).clientWaitSync(t(e), n >>> 0, r >>> 0);
  }
  function De(_) {
    t(_).close();
  }
  function Pe(_, e) {
    const n = t(e).code, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Me(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function Fe(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function ke(_, e) {
    t(_).compileShader(t(e));
  }
  function Te(_, e) {
    t(_).compileShader(t(e));
  }
  function Ee(_, e, n, r, b, a, f, o, i, g) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i, g);
  }
  function Le(_, e, n, r, b, a, f, o, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, t(i));
  }
  function Be(_, e, n, r, b, a, f, o, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, t(i));
  }
  function Oe(_, e, n, r, b, a, f, o, i, g, p, S) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p, S);
  }
  function Ce(_, e, n, r, b, a, f, o, i, g, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, t(p));
  }
  function Re() {
    return u(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function qe(_, e) {
    return t(_).contains(t(e));
  }
  function Ve(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function We(_, e, n, r, b, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, r, b, a);
  }
  function Ge(_, e, n, r, b, a, f, o, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, o, i);
  }
  function Ue(_, e, n, r, b, a, f, o, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, o, i);
  }
  function je(_, e, n, r, b, a, f, o, i, g) {
    t(_).copyTexSubImage3D(e >>> 0, n, r, b, a, f, o, i, g);
  }
  function Ke(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function $e() {
    return u(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return c(n);
    }, arguments);
  }
  function ze(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
  }
  function Ne(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function Qe() {
    return u(function(_, e, n) {
      const r = t(_).createElement(l(e, n));
      return c(r);
    }, arguments);
  }
  function Xe(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function Ye(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function He() {
    return u(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
      w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Je(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function Ze(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function _t(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function et(_) {
    const e = t(_).createQuery();
    return s(e) ? 0 : c(e);
  }
  function tt() {
    return u(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function nt(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function rt(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function bt(_) {
    const e = t(_).createSampler();
    return s(e) ? 0 : c(e);
  }
  function ct(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function at(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function ft(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function ot(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function ut(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function dt(_) {
    const e = t(_).createVertexArrayOES();
    return s(e) ? 0 : c(e);
  }
  function it(_) {
    const e = t(_).createVertexArray();
    return s(e) ? 0 : c(e);
  }
  function gt() {
    return u(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function st(_) {
    return t(_).ctrlKey;
  }
  function wt(_) {
    return t(_).ctrlKey;
  }
  function lt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function mt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function pt(_) {
    console.debug(t(_));
  }
  function xt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function yt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function ht(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function St(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function vt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function It(_, e) {
    t(_).deleteProgram(t(e));
  }
  function At(_, e) {
    t(_).deleteQuery(t(e));
  }
  function Dt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Pt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Mt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Ft(_, e) {
    t(_).deleteShader(t(e));
  }
  function kt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Tt(_, e) {
    t(_).deleteSync(t(e));
  }
  function Et(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Lt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Bt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Ot(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Ct(_) {
    return t(_).deltaMode;
  }
  function Rt(_) {
    return t(_).deltaX;
  }
  function qt(_) {
    return t(_).deltaY;
  }
  function Vt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Wt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Gt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Ut(_, e) {
    t(_).depthMask(e !== 0);
  }
  function jt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Kt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function $t(_) {
    t(_).destroy();
  }
  function zt(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function Nt(_) {
    return t(_).devicePixelRatio;
  }
  function Qt(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function Xt(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function Yt(_, e) {
    t(_).disable(e >>> 0);
  }
  function Ht(_, e) {
    t(_).disable(e >>> 0);
  }
  function Jt(_) {
    t(_).disconnect();
  }
  function Zt(_) {
    t(_).disconnect();
  }
  function _n(_) {
    const e = t(_).document;
    return s(e) ? 0 : c(e);
  }
  function en(_, e, n, r, b) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, b);
  }
  function tn(_, e, n, r, b) {
    t(_).drawArraysInstanced(e >>> 0, n, r, b);
  }
  function nn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function rn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function bn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function cn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function an(_, e, n, r, b, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, b, a);
  }
  function fn(_, e, n, r, b, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, b, a);
  }
  function on(_, e, n, r, b, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, r >>> 0, b, a >>> 0);
  }
  function un(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function dn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function gn(_, e) {
    t(_).enable(e >>> 0);
  }
  function sn(_, e) {
    t(_).enable(e >>> 0);
  }
  function wn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function ln(_) {
    t(_).end();
  }
  function mn(_) {
    console.error(t(_));
  }
  function pn(_, e) {
    console.error(t(_), t(e));
  }
  function xn(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(l(_, e));
    } finally {
      d.__wbindgen_export4(n, r, 1);
    }
  }
  function yn(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return s(r) ? 0 : c(r);
  }
  function hn(_) {
    t(_).finish();
  }
  function Sn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function vn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function In(_) {
    t(_).finish();
  }
  function An(_) {
    t(_).flush();
  }
  function Dn(_) {
    t(_).flush();
  }
  function Pn() {
    return u(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Mn(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function Fn(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function kn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Tn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function En(_, e, n, r, b, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), b, a);
  }
  function Ln(_, e, n, r, b, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), b, a, f);
  }
  function Bn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function On(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Cn(_) {
    const e = t(_).fullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Rn(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function qn(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function Vn(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function Wn() {
    return u(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return s(n) ? 0 : c(n);
    }, arguments);
  }
  function Gn() {
    return u(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Un() {
    return u(function(_, e, n, r) {
      const b = t(_).getContext(l(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function jn() {
    return u(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Kn() {
    return u(function(_, e, n) {
      const r = t(_).getContext(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function $n() {
    return u(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function zn(_, e, n) {
    const r = t(_).getElementById(l(e, n));
    return s(r) ? 0 : c(r);
  }
  function Nn() {
    return u(function(_, e, n) {
      const r = t(_).getExtension(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Qn() {
    return u(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(r);
    }, arguments);
  }
  function Xn() {
    return u(function(_, e, n) {
      const r = t(_).getMappedRange(e, n);
      return c(r);
    }, arguments);
  }
  function Yn(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function Hn() {
    return u(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Jn() {
    return u(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function Zn(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (T.indexOf(e) + 1 || 102) - 1;
  }
  function _r(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function er(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function tr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function nr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function rr() {
    return u(function(_, e, n, r) {
      const b = t(e).getPropertyValue(l(n, r)), a = h(b, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function br(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return c(r);
  }
  function cr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function ar(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : h(r, d.__wbindgen_export, d.__wbindgen_export2), a = y;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, b, true);
  }
  function fr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function or(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function ur(_) {
    const e = t(_).getSupportedExtensions();
    return s(e) ? 0 : c(e);
  }
  function dr(_) {
    const e = t(_).getSupportedProfiles();
    return s(e) ? 0 : c(e);
  }
  function ir(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return c(r);
  }
  function gr(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), l(n, r));
  }
  function sr(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function wr(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), l(n, r));
    return s(b) ? 0 : c(b);
  }
  function lr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function mr(_, e) {
    const n = t(_)[e >>> 0];
    return s(n) ? 0 : c(n);
  }
  function pr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function xr(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function yr(_) {
    return t(_).height;
  }
  function hr(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Sr(_) {
    console.info(t(_));
  }
  function vr(_) {
    return t(_).inlineSize;
  }
  function Ir(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Ar(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Dr(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Pr() {
    return u(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Mr(_) {
    return t(_).isIntersecting;
  }
  function Fr(_, e) {
    return Object.is(t(_), t(e));
  }
  function kr(_, e) {
    const n = t(e).key, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Tr(_, e) {
    const n = t(e).label, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Er(_) {
    return t(_).length;
  }
  function Lr(_) {
    return t(_).length;
  }
  function Br(_, e) {
    t(_).linkProgram(t(e));
  }
  function Or(_, e) {
    t(_).linkProgram(t(e));
  }
  function Cr(_) {
    return t(_).location;
  }
  function Rr(_) {
    console.log(t(_));
  }
  function qr(_, e, n, r) {
    const b = t(_).mapAsync(e >>> 0, n, r);
    return c(b);
  }
  function Vr() {
    return u(function(_, e, n) {
      const r = t(_).matchMedia(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Wr(_) {
    return t(_).matches;
  }
  function Gr(_, e) {
    const n = t(e).media, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Ur(_) {
    return t(_).metaKey;
  }
  function jr(_) {
    return t(_).metaKey;
  }
  function Kr(_) {
    return t(_).movementX;
  }
  function $r(_) {
    return t(_).movementY;
  }
  function zr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Nr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Qr() {
    const _ = new Error();
    return c(_);
  }
  function Xr() {
    return u(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function Yr() {
    const _ = new Array();
    return c(_);
  }
  function Hr() {
    return u(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function Jr() {
    return u(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Zr() {
    return u(function(_, e) {
      const n = new Worker(l(_, e));
      return c(n);
    }, arguments);
  }
  function _b() {
    const _ = new Object();
    return c(_);
  }
  function eb() {
    return u(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function tb() {
    return u(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function nb() {
    const _ = new Object();
    return c(_);
  }
  function rb(_, e, n) {
    const r = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(r);
  }
  function bb() {
    return u(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function cb(_) {
    return t(_).now();
  }
  function ab(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function fb(_, e) {
    t(_).observe(t(e));
  }
  function ob(_, e) {
    t(_).observe(t(e));
  }
  function ub(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function db(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function ib(_) {
    return t(_).offsetX;
  }
  function gb(_) {
    return t(_).offsetY;
  }
  function sb(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function wb(_) {
    const e = t(_).performance;
    return c(e);
  }
  function lb(_) {
    return t(_).persisted;
  }
  function mb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function pb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function xb(_) {
    t(_).play();
  }
  function yb(_) {
    return t(_).pointerId;
  }
  function hb(_, e) {
    const n = t(e).pointerType, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Sb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function vb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Ib(_) {
    const e = t(_).port1;
    return c(e);
  }
  function Ab(_) {
    const e = t(_).port2;
    return c(e);
  }
  function Db() {
    return u(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function Pb() {
    return u(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function Mb(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return c(r);
  }
  function Fb(_) {
    return t(_).pressure;
  }
  function kb(_) {
    t(_).preventDefault();
  }
  function Tb() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function Eb(_, e, n) {
    Uint8Array.prototype.set.call(H(_, e), t(n));
  }
  function Lb(_, e) {
    return t(_).push(t(e));
  }
  function Bb(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function Ob() {
    return u(function(_, e, n) {
      const r = t(_).querySelectorAll(l(e, n));
      return c(r);
    }, arguments);
  }
  function Cb() {
    return u(function(_, e, n) {
      const r = t(_).querySelector(l(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Rb(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function qb(_) {
    queueMicrotask(t(_));
  }
  function Vb(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function Wb(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Gb(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Ub() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function jb() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Kb() {
    return u(function(_, e, n, r, b, a, f, o) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function $b() {
    return u(function(_, e, n, r) {
      t(_).removeEventListener(l(e, n), t(r));
    }, arguments);
  }
  function zb() {
    return u(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Nb() {
    return u(function(_, e, n, r) {
      const b = t(e).removeProperty(l(n, r)), a = h(b, d.__wbindgen_export, d.__wbindgen_export2), f = y;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Qb(_, e, n, r, b, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, b, a);
  }
  function Xb(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function Yb(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function Hb(_) {
    return t(_).repeat;
  }
  function Jb(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function Zb() {
    return u(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function _c(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function ec(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function tc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function nc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function rc() {
    return u(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function bc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function cc() {
    return u(function(_, e) {
      URL.revokeObjectURL(l(_, e));
    }, arguments);
  }
  function ac(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function fc(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function oc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function uc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function dc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function ic(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function gc() {
    return u(function(_, e, n, r, b) {
      t(_).setAttribute(l(e, n), l(r, b));
    }, arguments);
  }
  function sc(_, e, n, r) {
    t(_).setIndexBuffer(t(e), K[n], r);
  }
  function wc(_, e, n, r, b) {
    t(_).setIndexBuffer(t(e), K[n], r, b);
  }
  function lc(_, e) {
    t(_).setPipeline(t(e));
  }
  function mc() {
    return u(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function pc() {
    return u(function(_, e, n, r, b) {
      t(_).setProperty(l(e, n), l(r, b));
    }, arguments);
  }
  function xc() {
    return u(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function yc() {
    return u(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function hc(_, e, n, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), r);
  }
  function Sc(_, e, n, r, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), r, b);
  }
  function vc(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function Ic() {
    return u(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function Ac(_, e) {
    t(_).a = e;
  }
  function Dc(_, e) {
    t(_).alpha = t(e);
  }
  function Pc(_, e) {
    t(_).alphaMode = du[e];
  }
  function Mc(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function Fc(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function kc(_, e) {
    t(_).arrayStride = e;
  }
  function Tc(_, e) {
    t(_).aspect = mu[e];
  }
  function Ec(_, e, n) {
    t(_).attributes = D(e, n);
  }
  function Lc(_, e) {
    t(_).b = e;
  }
  function Bc(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Oc(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Cc(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Rc(_, e, n) {
    t(_).bindGroupLayouts = D(e, n);
  }
  function qc(_, e) {
    t(_).blend = t(e);
  }
  function Vc(_, e) {
    t(_).box = hu[e];
  }
  function Wc(_, e, n) {
    t(_).buffers = D(e, n);
  }
  function Gc(_, e) {
    t(_).clearValue = t(e);
  }
  function Uc(_, e, n) {
    t(_).code = l(e, n);
  }
  function jc(_, e) {
    t(_).color = t(e);
  }
  function Kc(_, e, n) {
    t(_).colorAttachments = D(e, n);
  }
  function $c(_, e) {
    t(_).compare = Y[e];
  }
  function zc(_, e) {
    t(_).count = e >>> 0;
  }
  function Nc(_, e) {
    t(_).cullMode = gu[e];
  }
  function Qc(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Xc(_, e) {
    t(_).depthBias = e;
  }
  function Yc(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Hc(_, e) {
    t(_).depthClearValue = e;
  }
  function Jc(_, e) {
    t(_).depthCompare = Y[e];
  }
  function Zc(_, e) {
    t(_).depthFailOp = z[e];
  }
  function _a(_, e) {
    t(_).depthLoadOp = $[e];
  }
  function ea(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function ta(_, e) {
    t(_).depthStencil = t(e);
  }
  function na(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function ra(_, e) {
    t(_).depthStoreOp = N[e];
  }
  function ba(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function ca(_, e) {
    t(_).device = t(e);
  }
  function aa(_, e) {
    t(_).dimension = pu[e];
  }
  function fa(_, e) {
    t(_).dstFactor = X[e];
  }
  function oa(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function ua(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function da(_, e, n) {
    t(_).entryPoint = l(e, n);
  }
  function ia(_, e) {
    t(_).failOp = z[e];
  }
  function ga(_, e) {
    t(_).format = T[e];
  }
  function sa(_, e) {
    t(_).format = xu[e];
  }
  function wa(_, e) {
    t(_).format = T[e];
  }
  function la(_, e) {
    t(_).format = T[e];
  }
  function ma(_, e) {
    t(_).format = T[e];
  }
  function pa(_, e) {
    t(_).fragment = t(e);
  }
  function xa(_, e) {
    t(_).frontFace = su[e];
  }
  function ya(_, e) {
    t(_).g = e;
  }
  function ha(_, e) {
    t(_).height = e >>> 0;
  }
  function Sa(_, e) {
    t(_).height = e >>> 0;
  }
  function va(_, e, n) {
    t(_).label = l(e, n);
  }
  function Ia(_, e, n) {
    t(_).label = l(e, n);
  }
  function Aa(_, e, n) {
    t(_).label = l(e, n);
  }
  function Da(_, e, n) {
    t(_).label = l(e, n);
  }
  function Pa(_, e, n) {
    t(_).label = l(e, n);
  }
  function Ma(_, e, n) {
    t(_).label = l(e, n);
  }
  function Fa(_, e, n) {
    t(_).label = l(e, n);
  }
  function ka(_, e, n) {
    t(_).label = l(e, n);
  }
  function Ta(_, e, n) {
    t(_).label = l(e, n);
  }
  function Ea(_, e) {
    t(_).layout = t(e);
  }
  function La(_, e) {
    t(_).layout = ou[e];
  }
  function Ba(_, e) {
    t(_).loadOp = $[e];
  }
  function Oa(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function Ca(_, e) {
    t(_).mask = e >>> 0;
  }
  function Ra(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function qa(_, e) {
    t(_).mode = iu[e];
  }
  function Va(_, e) {
    t(_).module = t(e);
  }
  function Wa(_, e) {
    t(_).module = t(e);
  }
  function Ga(_, e) {
    t(_).multisample = t(e);
  }
  function Ua(_, e) {
    t(_).offset = e;
  }
  function ja(_, e) {
    t(_).onmessage = t(e);
  }
  function Ka(_, e) {
    t(_).operation = uu[e];
  }
  function $a(_, e) {
    t(_).passOp = z[e];
  }
  function za(_, e) {
    t(_).powerPreference = wu[e];
  }
  function Na(_, e) {
    t(_).primitive = t(e);
  }
  function Qa(_, e) {
    t(_).querySet = t(e);
  }
  function Xa(_, e) {
    t(_).r = e;
  }
  function Ya(_, e, n) {
    t(_).requiredFeatures = D(e, n);
  }
  function Ha(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Ja(_, e) {
    t(_).resolveTarget = t(e);
  }
  function Za(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function _f(_, e) {
    t(_).size = e;
  }
  function ef(_, e) {
    t(_).srcFactor = X[e];
  }
  function tf(_, e) {
    t(_).stencilBack = t(e);
  }
  function nf(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function rf(_, e) {
    t(_).stencilFront = t(e);
  }
  function bf(_, e) {
    t(_).stencilLoadOp = $[e];
  }
  function cf(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function af(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function ff(_, e) {
    t(_).stencilStoreOp = N[e];
  }
  function of(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function uf(_, e) {
    t(_).stepMode = yu[e];
  }
  function df(_, e) {
    t(_).storeOp = N[e];
  }
  function gf(_, e) {
    t(_).stripIndexFormat = K[e];
  }
  function sf(_, e, n) {
    t(_).targets = D(e, n);
  }
  function wf(_, e) {
    t(_).timestampWrites = t(e);
  }
  function lf(_, e) {
    t(_).toneMapping = t(e);
  }
  function mf(_, e) {
    t(_).topology = lu[e];
  }
  function pf(_, e, n) {
    t(_).type = l(e, n);
  }
  function xf(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function yf(_, e) {
    t(_).usage = e >>> 0;
  }
  function hf(_, e) {
    t(_).usage = e >>> 0;
  }
  function Sf(_, e) {
    t(_).usage = e >>> 0;
  }
  function vf(_, e) {
    t(_).vertex = t(e);
  }
  function If(_, e, n) {
    t(_).viewFormats = D(e, n);
  }
  function Af(_, e) {
    t(_).view = t(e);
  }
  function Df(_, e) {
    t(_).view = t(e);
  }
  function Pf(_, e) {
    t(_).width = e >>> 0;
  }
  function Mf(_, e) {
    t(_).width = e >>> 0;
  }
  function Ff(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function kf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function Tf(_, e, n, r) {
    t(_).shaderSource(t(e), l(n, r));
  }
  function Ef(_) {
    return t(_).shiftKey;
  }
  function Lf(_) {
    return t(_).shiftKey;
  }
  function Bf(_) {
    const e = t(_).signal;
    return c(e);
  }
  function Of(_, e) {
    const n = t(e).stack, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
    w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
  }
  function Cf(_) {
    t(_).start();
  }
  function Rf() {
    const _ = typeof global > "u" ? null : global;
    return s(_) ? 0 : c(_);
  }
  function qf() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return s(_) ? 0 : c(_);
  }
  function Vf() {
    const _ = typeof self > "u" ? null : self;
    return s(_) ? 0 : c(_);
  }
  function Wf() {
    const _ = typeof window > "u" ? null : window;
    return s(_) ? 0 : c(_);
  }
  function Gf(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Uf(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function jf(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Kf(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function $f(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function zf(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Nf(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Qf(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function Xf(_) {
    const e = t(_).style;
    return c(e);
  }
  function Yf(_, e, n) {
    t(_).submit(D(e, n));
  }
  function Hf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Jf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Zf() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function _o() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, p);
    }, arguments);
  }
  function eo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, o, i >>> 0, g >>> 0, t(p));
    }, arguments);
  }
  function to(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function no(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function ro(_, e, n, r, b, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, b, a);
  }
  function bo(_, e, n, r, b, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, b, a, f);
  }
  function co() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function ao() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function fo() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function oo() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function uo() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function io() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function go() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function so() {
    return u(function(_, e, n, r, b, a, f, o, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function wo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function lo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function mo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function po() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, S);
    }, arguments);
  }
  function xo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function yo() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function ho() {
    return u(function(_, e, n, r, b, a, f, o, i, g, p, S) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, o, i, g >>> 0, p >>> 0, t(S));
    }, arguments);
  }
  function So(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return c(r);
  }
  function vo(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function Io(_) {
    t(_).unconfigure();
  }
  function Ao(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function Do(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function Po(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Mo(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Fo(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function ko(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function To(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function Eo(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function Lo(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function Bo(_, e, n, r) {
    t(_).uniform2uiv(t(e), E(n, r));
  }
  function Oo(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function Co(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function Ro(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function qo(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function Vo(_, e, n, r) {
    t(_).uniform3uiv(t(e), E(n, r));
  }
  function Wo(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Go(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Uo(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function jo(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function Ko(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function $o(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function zo(_, e, n, r) {
    t(_).uniform4uiv(t(e), E(n, r));
  }
  function No(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function Qo(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Xo(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, b));
  }
  function Yo(_, e, n, r, b) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(r, b));
  }
  function Ho(_, e, n, r, b) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(r, b));
  }
  function Jo(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function Zo(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, b));
  }
  function _0(_, e, n, r, b) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(r, b));
  }
  function e0(_, e, n, r, b) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(r, b));
  }
  function t0(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function n0(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, b));
  }
  function r0(_, e, n, r, b) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(r, b));
  }
  function b0(_, e, n, r, b) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(r, b));
  }
  function c0(_) {
    t(_).unmap();
  }
  function a0(_, e) {
    t(_).unobserve(t(e));
  }
  function f0(_, e) {
    t(_).useProgram(t(e));
  }
  function o0(_, e) {
    t(_).useProgram(t(e));
  }
  function u0(_) {
    const e = t(_).userAgentData;
    return s(e) ? 0 : c(e);
  }
  function d0() {
    return u(function(_, e) {
      const n = t(e).userAgent, r = h(n, d.__wbindgen_export, d.__wbindgen_export2), b = y;
      w().setInt32(_ + 4, b, true), w().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function i0(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function g0(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function s0(_, e, n, r, b, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, b, a);
  }
  function w0(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function l0(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function m0(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function p0(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function x0(_) {
    const e = t(_).visibilityState;
    return (Su.indexOf(e) + 1 || 3) - 1;
  }
  function y0(_) {
    console.warn(t(_));
  }
  function h0(_) {
    const e = t(_).webkitFullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function S0(_) {
    t(_).webkitRequestFullscreen();
  }
  function v0(_) {
    return t(_).width;
  }
  function I0(_, e) {
    const n = v(_, e, ru);
    return c(n);
  }
  function A0(_, e) {
    const n = v(_, e, Y0);
    return c(n);
  }
  function D0(_, e) {
    const n = v(_, e, bu);
    return c(n);
  }
  function P0(_, e) {
    const n = v(_, e, H0);
    return c(n);
  }
  function M0(_, e) {
    const n = v(_, e, J0);
    return c(n);
  }
  function F0(_, e) {
    const n = v(_, e, Z0);
    return c(n);
  }
  function k0(_, e) {
    const n = v(_, e, cu);
    return c(n);
  }
  function T0(_, e) {
    const n = v(_, e, _u);
    return c(n);
  }
  function E0(_, e) {
    const n = v(_, e, eu);
    return c(n);
  }
  function L0(_, e) {
    const n = v(_, e, tu);
    return c(n);
  }
  function B0(_, e) {
    const n = v(_, e, nu);
    return c(n);
  }
  function O0(_, e) {
    const n = v(_, e, au);
    return c(n);
  }
  function C0(_, e) {
    const n = v(_, e, fu);
    return c(n);
  }
  function R0(_, e) {
    const n = v(_, e, X0);
    return c(n);
  }
  function q0(_) {
    return c(_);
  }
  function V0(_, e) {
    const n = x(_, e);
    return c(n);
  }
  function W0(_, e) {
    const n = Iu(_, e);
    return c(n);
  }
  function G0(_, e) {
    const n = A(_, e);
    return c(n);
  }
  function U0(_, e) {
    const n = Au(_, e);
    return c(n);
  }
  function j0(_, e) {
    const n = Du(_, e);
    return c(n);
  }
  function K0(_, e) {
    const n = E(_, e);
    return c(n);
  }
  function $0(_, e) {
    const n = H(_, e);
    return c(n);
  }
  function z0(_, e) {
    const n = l(_, e);
    return c(n);
  }
  function N0(_) {
    const e = t(_);
    return c(e);
  }
  function Q0(_) {
    L(_);
  }
  function X0(_, e) {
    d.__wasm_bindgen_func_elem_1377(_, e);
  }
  function Y0(_, e, n) {
    d.__wasm_bindgen_func_elem_1375(_, e, c(n));
  }
  function H0(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_3(_, e, c(n));
  }
  function J0(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_4(_, e, c(n));
  }
  function Z0(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_5(_, e, c(n));
  }
  function _u(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_7(_, e, c(n));
  }
  function eu(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_8(_, e, c(n));
  }
  function tu(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_9(_, e, c(n));
  }
  function nu(_, e, n) {
    d.__wasm_bindgen_func_elem_1375_10(_, e, c(n));
  }
  function ru(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_9740(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function bu(_, e, n, r) {
    d.__wasm_bindgen_func_elem_1376(_, e, c(n), c(r));
  }
  function cu(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1916(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function au(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1916_11(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function fu(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_1916_12(a, _, e, c(n));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw L(r);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const ou = [
    "auto"
  ], X = [
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
  ], uu = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], du = [
    "opaque",
    "premultiplied"
  ], iu = [
    "standard",
    "extended"
  ], Y = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], gu = [
    "none",
    "front",
    "back"
  ], su = [
    "ccw",
    "cw"
  ], K = [
    "uint16",
    "uint32"
  ], $ = [
    "load",
    "clear"
  ], wu = [
    "low-power",
    "high-performance"
  ], lu = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], z = [
    "keep",
    "zero",
    "replace",
    "invert",
    "increment-clamp",
    "decrement-clamp",
    "increment-wrap",
    "decrement-wrap"
  ], N = [
    "store",
    "discard"
  ], mu = [
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
  ], pu = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], xu = [
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
  ], yu = [
    "vertex",
    "instance"
  ], hu = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Su = [
    "hidden",
    "visible"
  ];
  function c(_) {
    F === I.length && I.push(I.length + 1);
    const e = F;
    return F = I[e], I[e] = _, e;
  }
  const Q = typeof FinalizationRegistry > "u" ? {
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
  function vu(_) {
    _ < 1028 || (I[_] = F, F = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, Pu().subarray(_ / 4, _ / 4 + e);
  }
  function Iu(_, e) {
    return _ = _ >>> 0, Mu().subarray(_ / 2, _ / 2 + e);
  }
  function A(_, e) {
    return _ = _ >>> 0, Fu().subarray(_ / 4, _ / 4 + e);
  }
  function Au(_, e) {
    return _ = _ >>> 0, ku().subarray(_ / 1, _ / 1 + e);
  }
  function D(_, e) {
    _ = _ >>> 0;
    const n = w(), r = [];
    for (let b = _; b < _ + 4 * e; b += 4) r.push(t(n.getUint32(b, true)));
    return r;
  }
  function Du(_, e) {
    return _ = _ >>> 0, Tu().subarray(_ / 2, _ / 2 + e);
  }
  function E(_, e) {
    return _ = _ >>> 0, Eu().subarray(_ / 4, _ / 4 + e);
  }
  function H(_, e) {
    return _ = _ >>> 0, M().subarray(_ / 1, _ / 1 + e);
  }
  let P = null;
  function w() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== d.memory.buffer) && (P = new DataView(d.memory.buffer)), P;
  }
  let B = null;
  function Pu() {
    return (B === null || B.byteLength === 0) && (B = new Float32Array(d.memory.buffer)), B;
  }
  let O = null;
  function Mu() {
    return (O === null || O.byteLength === 0) && (O = new Int16Array(d.memory.buffer)), O;
  }
  let C = null;
  function Fu() {
    return (C === null || C.byteLength === 0) && (C = new Int32Array(d.memory.buffer)), C;
  }
  let R = null;
  function ku() {
    return (R === null || R.byteLength === 0) && (R = new Int8Array(d.memory.buffer)), R;
  }
  function l(_, e) {
    return Bu(_ >>> 0, e);
  }
  let q = null;
  function Tu() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(d.memory.buffer)), q;
  }
  let V = null;
  function Eu() {
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
      --r.cnt === 0 && (d.__wbindgen_export5(r.a, r.b), r.a = 0, Q.unregister(r));
    }, Q.register(b, r, r), b;
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
    return vu(_), e;
  }
  let G = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  G.decode();
  const Lu = 2146435072;
  let U = 0;
  function Bu(_, e) {
    return U += e, U >= Lu && (G = new TextDecoder("utf-8", {
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
  function Ou(_) {
    d = _;
  }
  URL = globalThis.URL;
  const m = await Z({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: Q0,
      __wbg_new_227d7c05414eb861: Qr,
      __wbg_stack_3b0d974bbf31e44f: Of,
      __wbg_error_a6fa202b58aa1cd3: xn,
      __wbg_get_507a50627bffa49b: lr,
      __wbindgen_object_clone_ref: N0,
      __wbg_length_370319915dc99107: Lr,
      __wbg_offsetX_a9bf2ea7f0575ac9: ib,
      __wbg_offsetY_10e5433a1bbd4c01: gb,
      __wbg_postTask_e2439afddcdfbb55: Mb,
      __wbg_catch_c1a60df4c30d76d3: se,
      __wbg_requestFullscreen_3f16e43f398ce624: ec,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: Yn,
      __wbg_then_16d107c451e9905d: So,
      __wbg_push_d2ae3af0c1217ae6: Lb,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: pr,
      __wbg_prototype_0d5bb2023db3bcfc: Tb,
      __wbg_userAgentData_31b8f893e8977e94: u0,
      __wbg_brands_b7dcf262485c3e7c: te,
      __wbg_brand_3bc196a43eceb8af: ee,
      __wbg_cancel_65f38182e2eeac5c: ge,
      __wbg_animate_8f41e2f47c7d04ab: S_,
      __wbg_play_3997a1be51d27925: xb,
      __wbg_requestFullscreen_b977a3a0697e883c: tc,
      __wbg_Window_c7f91e3f80ae0a0e: t_,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: h0,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: S0,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: Vn,
      __wbg_scheduler_b35fe73ba70e89cc: uc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: nc,
      __wbg_scheduler_a17d41c9c822fc26: oc,
      __wbg_performance_3fcf6e32a7e1ed0a: wb,
      __wbg_now_e7c6795a7f81e10f: cb,
      __wbg_set_dst_factor_ec7407f19be1aff9: fa,
      __wbg_set_operation_62ce44e1728c4047: Ka,
      __wbg_set_src_factor_9bfe84af9b7b5cac: ef,
      __wbg_Window_afcc911b2f9c92e2: e_,
      __wbg_gpu_2ccc250735d24a2a: xr,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: n_,
      __wbg_set_a_88262a42340d0b1c: Ac,
      __wbg_set_b_c47befe0af3261eb: Lc,
      __wbg_set_g_5983abfc46e0cf4e: ya,
      __wbg_set_r_c6f4c68f4804d655: Xa,
      __wbg_queue_adce34608fd0c893: Wb,
      __wbg_set_power_preference_8fdca0b7af640d49: za,
      __wbg_requestAdapter_2e6718811c735a57: Jb,
      __wbg_set_color_attachments_581fdb3310e4abfa: Kc,
      __wbg_set_label_17eb9fe3a02f62b0: Ia,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: Df,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: Hc,
      __wbg_set_depth_load_op_511c513eab4e56a9: _a,
      __wbg_set_depth_store_op_c89f33b39b43361c: ra,
      __wbg_set_depth_read_only_7f41a74741c144ec: ea,
      __wbg_set_stencil_clear_value_42be608809151e2a: nf,
      __wbg_set_stencil_load_op_31838c036993098a: bf,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: ff,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: af,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: na,
      __wbg_set_query_set_41de86d2401aee04: Qa,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: Cc,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: oa,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: wf,
      __wbg_beginRenderPass_aa22c432e793359a: P_,
      __wbg_label_7ed42f25f841996b: Tr,
      __wbg_set_label_08d9be3e4719c226: va,
      __wbg_finish_4d91de5e927dd13f: Sn,
      __wbg_finish_6e06b68ab68cd9f6: vn,
      __wbg_drawIndexed_d31913e79d58fbac: on,
      __wbg_setPipeline_c41bf46790f27f9e: lc,
      __wbg_setIndexBuffer_7f3cf667b4d71566: wc,
      __wbg_setIndexBuffer_2531a9103450445e: sc,
      __wbg_setVertexBuffer_1e448859663dd400: hc,
      __wbg_setVertexBuffer_7cf533d694e747f3: Sc,
      __wbg_end_f99ebed53d4e198a: ln,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: Zn,
      __wbg_getCurrentTexture_20714d1bd9051cab: $n,
      __wbg_set_device_e275d1d4f3c9eb74: ca,
      __wbg_set_format_815efd4dc4817bbb: la,
      __wbg_set_usage_a137f82ca163b0a9: yf,
      __wbg_set_alpha_mode_df805952892caa9c: Pc,
      __wbg_set_mode_9990b3393ba469ae: qa,
      __wbg_set_tone_mapping_b3464f1baa4cff92: lf,
      __wbg_set_view_formats_5797d2fff3c11808: If,
      __wbg_configure_0e4789c0f6b35c8e: Re,
      __wbg_new_typed_4148bd5ae72ab3f0: nb,
      __wbg_set_required_limits_871ed33c68613dcb: Ha,
      __wbg_set_required_features_1baf274a8669db60: Ya,
      __wbg_set_label_60ad96c811e0d109: Aa,
      __wbg_requestDevice_ab46d0519ea1cc34: _c,
      __wbg_set_size_f64_6bcd40704bf4cfdc: _f,
      __wbg_set_usage_b2a2935f37bf3d08: hf,
      __wbg_set_mapped_at_creation_81b586dc90a50347: Oa,
      __wbg_set_label_d010f237b26f2c55: Ma,
      __wbg_createBuffer_0726dd2ab09ea1d2: $e,
      __wbg_set_code_b4f37f81f45b5b25: Uc,
      __wbg_set_label_e3944e54881b8c50: ka,
      __wbg_createShaderModule_2e44fc7677c6288b: ct,
      __wbg_set_label_72bb4f41ef0cb893: Da,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: Ne,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: Rc,
      __wbg_set_label_9556af8b5cda3c9d: Pa,
      __wbg_createPipelineLayout_2c8cd4528b06c108: Je,
      __wbg_set_module_d0e2098713606cae: Va,
      __wbg_set_entry_point_e87e79251dd3144f: da,
      __wbg_set_buffers_7d0d8f507699e956: Wc,
      __wbg_set_layout_50ab727f44b38f26: Ea,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: La,
      __wbg_set_vertex_0be5d146f9ff6f36: vf,
      __wbg_set_label_e922700240417ab5: Ta,
      __wbg_set_format_e52bdcca880d2c8e: ma,
      __wbg_set_depth_compare_0c8631eb2eae98e3: Jc,
      __wbg_set_depth_write_enabled_ce89750042940350: ba,
      __wbg_set_depth_bias_d7cd16096242a657: Xc,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: Qc,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: Yc,
      __wbg_set_compare_f36b34abfaa08ccb: $c,
      __wbg_set_depth_fail_op_668155ae33d3c06f: Zc,
      __wbg_set_fail_op_92f716dbc88b6973: ia,
      __wbg_set_pass_op_cf02fa088d6352a7: $a,
      __wbg_set_stencil_back_85b22f1db5b1940a: tf,
      __wbg_set_stencil_front_525526164a798a44: rf,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: cf,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: of,
      __wbg_set_depth_stencil_97506c7bea4f53da: ta,
      __wbg_set_module_f02e076ca7e7daf8: Wa,
      __wbg_set_targets_c38bd200c836d66f: sf,
      __wbg_set_entry_point_207540f042015ce5: ua,
      __wbg_set_fragment_8b780f00a0b0e6f3: pa,
      __wbg_set_count_069a4eac409bac55: zc,
      __wbg_set_mask_70a8a59ce09e5997: Ca,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: Mc,
      __wbg_set_multisample_37ddafe88b5cd466: Ga,
      __wbg_set_cull_mode_fc649853947a3d0c: Nc,
      __wbg_set_front_face_28ffdf524eedce5b: xa,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: gf,
      __wbg_set_topology_da25f2cc5af203d2: mf,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: xf,
      __wbg_set_primitive_43c23761a55b4088: Na,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: tt,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: sb,
      __wbg_submit_ce44115121cd166c: Yf,
      __wbg_getMappedRange_d0bf3141224111b6: Xn,
      __wbg_unmap_adaf93276fdf9aaf: c0,
      __wbg_destroy_fe937f756bf8df37: $t,
      __wbg_mapAsync_52b01fa9e8f765fd: qr,
      __wbg_set_dimension_e325282e613ca0a4: aa,
      __wbg_set_format_1fcaa7d60546b490: ga,
      __wbg_set_aspect_0d453bca3d012f02: Tc,
      __wbg_set_base_array_layer_f176bb9f1b37b342: Bc,
      __wbg_set_array_layer_count_7312f0f31af94e7c: Fc,
      __wbg_set_base_mip_level_1df145d9f8db32a9: Oc,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Ra,
      __wbg_set_label_e16e2dbe51349c7f: Fa,
      __wbg_set_usage_ddd42599bbba7779: Sf,
      __wbg_createView_ceaf2f5881adbd34: gt,
      __wbg_set_format_5d2f25cc93654ecc: sa,
      __wbg_set_offset_f64_28c24dc15000932e: Ua,
      __wbg_set_shader_location_7e1832a74f912217: Za,
      __wbg_set_attributes_7537844a7e6dafdc: Ec,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: kc,
      __wbg_set_step_mode_a97bb24714da41a9: uf,
      __wbg_set_write_mask_d45279e56abbfcb5: Ff,
      __wbg_set_format_5ff53724ed6cedf2: wa,
      __wbg_set_blend_7493c2066c3e9970: qc,
      __wbg_set_load_op_99661da6c4eab9b0: Ba,
      __wbg_set_store_op_b5fdf672436f13f3: df,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: Af,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Gc,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Ja,
      __wbg_unconfigure_0a07a0a40de8988d: Io,
      __wbg_set_alpha_bfd2df62e7bc581b: Dc,
      __wbg_set_color_83aa977526e88cbb: jc,
      __wbg_includes_78c9a3115b08eddc: hr,
      __wbg_clearBufferuiv_df94a395d4915377: me,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: Le,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: Oe,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: Ce,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: We,
      __wbg_clientWaitSync_cf8e49f8ba228377: Ae,
      __wbg_compressedTexSubImage2D_c1362291573c7268: Ee,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: je,
      __wbg_createQuery_047c7c524e4ac4f8: et,
      __wbg_createSampler_70c8392d98896235: bt,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: it,
      __wbg_deleteQuery_0d1dcc4402a86ee1: At,
      __wbg_deleteSampler_0abb528566c4ab3b: Mt,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: Qn,
      __wbg_getQueryParameter_919125495ccb17ca: br,
      __wbg_getSyncParameter_d8f6c145657a3550: ir,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: gr,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Pr,
      __wbg_deleteSync_9b0e43580942a0f6: Tt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Ot,
      __wbg_drawArraysInstanced_51b161548a3f10c4: tn,
      __wbg_drawBuffers_1c1ec9b292442a2a: cn,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: fn,
      __wbg_endQuery_a50f7fc49cfe56e9: wn,
      __wbg_fenceSync_fe2cdba4a0d73679: yn,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: En,
      __wbg_getBufferSubData_11018928c908ac2c: Rn,
      __wbg_readBuffer_4271437a70aae481: Gb,
      __wbg_readPixels_5f013a7d85b23800: Ub,
      __wbg_readPixels_82c9dee754d58176: jb,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Qb,
      __wbg_texImage3D_ef16a1f721b3f908: eo,
      __wbg_texStorage2D_7f947efc63dac273: ro,
      __wbg_texStorage3D_f8f2e4b3386736f9: bo,
      __wbg_texSubImage2D_d1af697e69f8a9e4: io,
      __wbg_texSubImage2D_047380bb2660e4f9: co,
      __wbg_texSubImage2D_6a376bfc3a31436b: fo,
      __wbg_texSubImage2D_98c43894eb217aa7: oo,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: ac,
      __wbg_samplerParameteri_7b1b4091de49aabb: fc,
      __wbg_texImage2D_5abd8779d1d033c7: Jf,
      __wbg_texImage2D_8d168171984f2a40: Zf,
      __wbg_texImage3D_bdd9bebe42ed1f52: _o,
      __wbg_texSubImage2D_5058af3d30a8e205: ao,
      __wbg_texSubImage2D_e107b4f88c19b920: so,
      __wbg_texSubImage2D_bed5e7a3cd81d409: uo,
      __wbg_texSubImage3D_8077e90ec309c414: po,
      __wbg_texSubImage3D_45e498ae6298998c: wo,
      __wbg_uniform1ui_cd7ad5581093b3df: Fo,
      __wbg_uniform2fv_1b43656b33177d21: ko,
      __wbg_uniform2iv_859048b9d60f46ae: Eo,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: lo,
      __wbg_texSubImage3D_6cb6cfd732dad145: mo,
      __wbg_texSubImage3D_93b38c69acb735c8: xo,
      __wbg_texSubImage3D_c9e5a071796d412f: yo,
      __wbg_texSubImage3D_feebaf7f0f4594c6: ho,
      __wbg_uniform2uiv_8a9cb3155271213b: Bo,
      __wbg_uniform4fv_674a247aeb15012d: jo,
      __wbg_uniform4iv_d02934d7b94df609: $o,
      __wbg_uniform3fv_8ecb5ebb510b7bce: Oo,
      __wbg_uniform3iv_09abae5eabd6b9d6: Ro,
      __wbg_uniform3uiv_3c0b163732f5b8f0: Vo,
      __wbg_uniform4uiv_0d1a8ed214f10c31: zo,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Zo,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: _0,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: e0,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: No,
      __wbg_uniformMatrix2fv_9284424cc6aac672: Xo,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Yo,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: Ho,
      __wbg_uniformMatrix4fv_423b958042692150: n0,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: s0,
      __wbg_activeTexture_d12958674e97a118: m_,
      __wbg_attachShader_8971266b4c9bc514: A_,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: M_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: T_,
      __wbg_bindFramebuffer_390311eff3896937: L_,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: C_,
      __wbg_bindTexture_28eff4bbd8aaab54: q_,
      __wbg_blendColor_eae0cd578a2c7d15: j_,
      __wbg_blendEquation_455b8986ededabc0: z_,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: K_,
      __wbg_blendFunc_114dc7056ccfeb8d: Y_,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: X_,
      __wbg_clear_dd06a0da4ce8e13f: Ie,
      __wbg_clearDepth_ca9b22d41551b513: xe,
      __wbg_clearStencil_58f2af46612bccae: ye,
      __wbg_colorMask_a4d164c2039b5731: Fe,
      __wbg_compileShader_9bdfd792722cf704: ke,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: r0,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: b0,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: g0,
      __wbg_copyTexSubImage2D_8daea651fc408645: Ge,
      __wbg_createBuffer_01568a9d930d90dd: Ke,
      __wbg_createFramebuffer_de0d521f546e7534: Ye,
      __wbg_createProgram_538c9777a4ac084f: _t,
      __wbg_createRenderbuffer_9d801bf44c314f44: rt,
      __wbg_createShader_7d139f2d50f77365: ft,
      __wbg_createTexture_d13f98e0d3d912f4: ut,
      __wbg_cullFace_f1c75ae19b07eaf3: mt,
      __wbg_deleteBuffer_1ca3ffe668a488e7: yt,
      __wbg_getExtension_101c7e41de3e4d90: Nn,
      __wbg_getParameter_d39f59581389af1b: Jn,
      __wbg_getProgramInfoLog_d1ce570463a68779: er,
      __wbg_getProgramParameter_c8d1154fbb3c0890: nr,
      __wbg_getShaderInfoLog_5cee2add982c7165: cr,
      __wbg_getShaderParameter_3394e75dcb97f380: fr,
      __wbg_getSupportedExtensions_2a7458ec45e82560: ur,
      __wbg_getUniformLocation_788a34295dd6fabe: wr,
      __wbg_deleteFramebuffer_963cd69957209d37: ht,
      __wbg_deleteProgram_132e191baa9fa84f: It,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: Dt,
      __wbg_deleteShader_993edb4beb3c4d53: kt,
      __wbg_deleteTexture_bdc2202d7a50dcea: Lt,
      __wbg_depthFunc_74a8f8acf8973c86: Wt,
      __wbg_depthMask_a644a67deced3257: Ut,
      __wbg_depthRange_5e90d4d236280ff5: Kt,
      __wbg_disable_1659d1b7d50c31e7: Yt,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: Xt,
      __wbg_drawArrays_b0c59a6e158122f2: rn,
      __wbg_enable_28bbeed576131d1f: gn,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: dn,
      __wbg_finish_cbe7ec8675dd7705: In,
      __wbg_flush_e03c08da6863b5ab: Dn,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Fn,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: kn,
      __wbg_frontFace_29ef7151de8b5ed9: Bn,
      __wbg_linkProgram_4e047fb3197a0348: Br,
      __wbg_pixelStorei_c844cd0db4f1fde6: pb,
      __wbg_polygonOffset_4eb460adf41db6cd: Sb,
      __wbg_renderbufferStorage_0a8de92542893819: Xb,
      __wbg_scissor_105e756596bc35df: dc,
      __wbg_vertexAttribPointer_a8f0af57269c2067: w0,
      __wbg_viewport_affdf15c559df1e2: m0,
      __wbg_shaderSource_c3469dc2221dd528: Tf,
      __wbg_stencilFuncSeparate_814300446c2969ef: Uf,
      __wbg_stencilMask_9a844dc58a89992f: zf,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: jf,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: Qf,
      __wbg_texParameteri_1fc451e0964fc91c: to,
      __wbg_uniform1f_62692c8fa8e7bf1e: Ao,
      __wbg_uniform1i_7621f908f78177df: Mo,
      __wbg_uniform4f_9ff60fc65b0ed726: Wo,
      __wbg_useProgram_49495850b446fa56: o0,
      __wbg_bufferSubData_bae930b21e9c1c48: ae,
      __wbg_clearBufferfv_2e0f1a0ea56de859: we,
      __wbg_clearBufferiv_0360269bf6e34c54: le,
      __wbg_beginQuery_042a1f99e870066c: D_,
      __wbg_bindBufferRange_f5c29912db0476e9: k_,
      __wbg_bindSampler_ce608f0de9d31acf: R_,
      __wbg_bindVertexArray_427eeac0c1764d8a: G_,
      __wbg_blitFramebuffer_a1215976f663b058: J_,
      __wbg_bufferData_3d4f29bdfb1fa46c: re,
      __wbg_bufferData_90ef588bac2be2f5: be,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Ar,
      __wbg_cancelIdleCallback_b9e469156370a1e5: ie,
      __wbg_getComputedStyle_961681bdf7e518e8: Wn,
      __wbg_matchMedia_9968278b31706f78: Vr,
      __wbg_cancelAnimationFrame_086d6084925c4e06: de,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Zb,
      __wbg_clearTimeout_8f80437be2324e09: Se,
      __wbg_requestIdleCallback_d292749bf33501af: rc,
      __wbg_setTimeout_5ccd86968701f1ec: xc,
      __wbg_setTimeout_cfa2cf195c3738db: yc,
      __wbg_queueMicrotask_ed5b33385a53c3a9: Vb,
      __wbg_navigator_99621db14b3f1099: Nr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: Nt,
      __wbg_document_179650d6cb13c263: _n,
      __wbg_instanceof_Window_05ba1ee4f6781663: Dr,
      __wbg_visibilityState_301d0905e8103e21: x0,
      __wbg_activeElement_4bc99dc1a7094c27: w_,
      __wbg_fullscreenElement_9f50a5e63bb433a8: Cn,
      __wbg_createElement_fcbc0805de826d62: Qe,
      __wbg_getElementById_1cbd8f06dbe8eb8e: zn,
      __wbg_querySelector_fd7d157ebe17cd16: Cb,
      __wbg_querySelectorAll_7e98cbe256deaadd: Ob,
      __wbg_body_40ec34e0a2931fe8: _e,
      __wbg_setPointerCapture_70025ca3fb7f26b9: mc,
      __wbg_setAttribute_71039043be82d098: gc,
      __wbg_focus_2f77051f98540625: Pn,
      __wbg_style_6657aed849e5d757: Xf,
      __wbg_navigator_51379c10a84aeec9: zr,
      __wbg_uniform2iv_f84a24961c0cfcd0: Lo,
      __wbg_uniform3fv_95d1933ea1440725: Co,
      __wbg_uniform3iv_a3a7008990fd84f0: qo,
      __wbg_uniform4fv_4ca8c114ca3de099: Uo,
      __wbg_clear_53d71d234e14e4c1: ve,
      __wbg_clearDepth_8b5d226aae155082: pe,
      __wbg_clearStencil_a66fe23df6313fc7: he,
      __wbg_colorMask_44ebb91cad2502f2: Me,
      __wbg_compileShader_fc2e4b73240d4fd7: Te,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: Ue,
      __wbg_createBuffer_2075765bde5035d5: ze,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: Xe,
      __wbg_createProgram_118becaac3a20318: Ze,
      __wbg_createRenderbuffer_71af5c0d615e9271: nt,
      __wbg_createShader_78bc8b7e9a88e1a8: at,
      __wbg_createTexture_0ee0fa5f924f3d14: ot,
      __wbg_cullFace_62bbea3bef0e6b99: lt,
      __wbg_deleteBuffer_08eb938e35c27967: xt,
      __wbg_deleteFramebuffer_d1a36e889b009344: St,
      __wbg_deleteProgram_09bd45a51105b2f6: vt,
      __wbg_deleteRenderbuffer_ca999f7883b777af: Pt,
      __wbg_deleteShader_3120790d36063afe: Ft,
      __wbg_deleteTexture_2b163b157ea1be24: Et,
      __wbg_depthFunc_455cfeb8a9d2fb4c: Vt,
      __wbg_depthMask_4bd6c73b1339d257: Gt,
      __wbg_depthRange_38b2287ffbea14fd: jt,
      __wbg_uniform4iv_45ab52abcb3f882c: Ko,
      __wbg_uniformMatrix2fv_769725d64641341f: Qo,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: Jo,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: t0,
      __wbg_activeTexture_92b04d918019d603: l_,
      __wbg_attachShader_5f7f4077e124e23b: I_,
      __wbg_bindAttribLocation_94202d7a59ab7863: F_,
      __wbg_bindBuffer_a01497b1abdcdd9a: E_,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: B_,
      __wbg_bindRenderbuffer_75e8469e930840fa: O_,
      __wbg_bindTexture_9b04b1b7c00d4dd6: V_,
      __wbg_blendColor_793b560dc69ddd0b: U_,
      __wbg_blendEquation_f5c5272993f6cb01: N_,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: $_,
      __wbg_blendFunc_a854d7e4459150ba: H_,
      __wbg_blendFuncSeparate_37156309688f8f88: Q_,
      __wbg_disable_40c3975167c1ee07: Ht,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: Qt,
      __wbg_drawArrays_676becae0149ed65: nn,
      __wbg_enable_611804c0ac1504ce: sn,
      __wbg_enableVertexAttribArray_4c08219124740f14: un,
      __wbg_finish_126e6f2ac71e3096: hn,
      __wbg_flush_db77b4a63d6b337d: An,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Mn,
      __wbg_linkProgram_d7c71c539c8c6a43: Or,
      __wbg_pixelStorei_2a93b18efde9acf8: mb,
      __wbg_polygonOffset_eccb68e40a18f861: vb,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: Yb,
      __wbg_scissor_573b844152316b8d: ic,
      __wbg_shaderSource_4cf90af97621ff49: kf,
      __wbg_stencilFuncSeparate_35136c4e5153406f: Gf,
      __wbg_stencilMask_1c99b79b516d12dd: $f,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: Kf,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: Nf,
      __wbg_texParameteri_9d0daa263d3a863f: no,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Tn,
      __wbg_frontFace_fc6d98dafa42de87: On,
      __wbg_getParameter_039a5899307fab55: Hn,
      __wbg_getProgramInfoLog_c4762e0513468a26: _r,
      __wbg_getProgramParameter_b9995b56c258ac86: tr,
      __wbg_getShaderInfoLog_bc236afe696c1283: ar,
      __wbg_getShaderParameter_cbcc0995e8e16214: or,
      __wbg_getUniformLocation_24ef46cdda2148ab: sr,
      __wbg_uniform1f_b79d0c5667f9fb40: Do,
      __wbg_uniform1i_5830de6702add20a: Po,
      __wbg_uniform4f_b25e39808b830021: Go,
      __wbg_useProgram_182d120fe476921b: f0,
      __wbg_vertexAttribPointer_b300c8e000cdac93: l0,
      __wbg_viewport_e8a16ca4a5085e5f: p0,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: go,
      __wbg_uniform2fv_948dab6a82b428ac: To,
      __wbg_bufferData_ce4f44d56e9ddab5: ce,
      __wbg_bufferData_073a7c6abef7a55f: ne,
      __wbg_bufferSubData_ce9854d3d337e2cf: fe,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: Be,
      __wbg_readPixels_c7861e25836bf57b: Kb,
      __wbg_texImage2D_3813406af5bf54c8: Hf,
      __wbg_new_5394f65338077341: Jr,
      __wbg_inlineSize_3c8412828bef21eb: vr,
      __wbg_disconnect_39bfdcb35b1fc7b9: Jt,
      __wbg_blockSize_5af477b962b2b031: Z_,
      __wbg_observe_f27242eadc2ebd47: ob,
      __wbg_observe_615bef91ee28c925: ab,
      __wbg_unobserve_41a4f85162f1fb18: a0,
      __wbg_isIntersecting_fc6d9529a49c5d62: Mr,
      __wbg_log_d267660666346fb3: Rr,
      __wbg_info_eadbe775a8e2e9eb: Sr,
      __wbg_warn_b1370d804fa3e259: y0,
      __wbg_debug_87fd9b1a625b7efb: pt,
      __wbg_error_744744ff0c9861e6: mn,
      __wbg_error_7ed559cd7146b49d: pn,
      __wbg_ctrlKey_50bd8324959ca786: wt,
      __wbg_shiftKey_9f797da486b2ade8: Lf,
      __wbg_altKey_f3e24c4c9cfcf271: h_,
      __wbg_metaKey_f934f09e37889d70: jr,
      __wbg_button_f6a9a7b725f1838e: oe,
      __wbg_buttons_d8acd46cf8f40ae9: ue,
      __wbg_movementX_87e39021f3fce8b8: Kr,
      __wbg_movementY_f6f63087e2248fa9: $r,
      __wbg_set_box_223b9bc0b7f548f6: Vc,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: Ln,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: en,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: W_,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: an,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: dt,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Bt,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: i0,
      __wbg_set_onmessage_d511b70365304094: ja,
      __wbg_set_width_49ac9b7d914afc85: Pf,
      __wbg_getPropertyValue_dc6b061239dad6f1: rr,
      __wbg_set_height_bbeef8f354041577: Sa,
      __wbg_removeProperty_70da952bc1b493fa: Nb,
      __wbg_close_3423cc7dafc477bb: De,
      __wbg_new_25e75d1f0df4d87a: Xr,
      __wbg_setProperty_e4e51b1b1d681d15: pc,
      __wbg_postMessage_b80f20949a4b4f55: Db,
      __wbg_start_d0cdf16ff965b3f3: Cf,
      __wbg_getContext_fd298c901058eb31: Kn,
      __wbg_getContext_7476e39fa008047e: Gn,
      __wbg_appendChild_f553e8704c4f14a6: v_,
      __wbg_contains_7189b09a477442a6: qe,
      __wbg_signal_dad7cb35193abd31: Bf,
      __wbg_addEventListener_d85450ee1320c989: p_,
      __wbg_new_4339b2a2675a03e3: Hr,
      __wbg_abort_8bae0f33e7833997: s_,
      __wbg_altKey_50f830d1793a2eea: y_,
      __wbg_removeEventListener_a3f23c70077bdcc1: $b,
      __wbg_ctrlKey_2e52816fa7160097: st,
      __wbg_shiftKey_9bcb8bdd60c2f152: Ef,
      __wbg_metaKey_d961c7572a9f84f5: Ur,
      __wbg_location_8f24df2c257fb974: Cr,
      __wbg_repeat_4e131e99bff9b9f4: Hb,
      __wbg_key_803dca86cdcfa8dd: kr,
      __wbg_code_89c999e407c79eef: Pe,
      __wbg_createObjectURL_416e527781e6fd6d: He,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: cc,
      __wbg_set_type_8ce203e412e28cf6: pf,
      __wbg_width_20c45c895834b83f: v0,
      __wbg_height_9f27216001e3c804: yr,
      __wbg_set_width_8e30d010cd66830d: Mf,
      __wbg_set_height_7d9d8f892e6964c6: ha,
      __wbg_getContext_e79ddf6a9cb3cc76: jn,
      __wbg_getContext_ca12bb65aab778a4: Un,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: Ir,
      __wbg_media_40cbd26ab34df71f: Gr,
      __wbg_matches_978994974df1e85b: Wr,
      __wbg_addListener_b5b7f95360b22984: x_,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: Bb,
      __wbg_removeListener_768e1e787e1d4b2e: zb,
      __wbg_deltaX_5d829ffba565ed10: Rt,
      __wbg_deltaY_6cfce8f8da250c23: qt,
      __wbg_deltaMode_d869228efd74f393: Ct,
      __wbg_port1_dabba0a56576e47e: Ib,
      __wbg_port2_d05676aee003eedc: Ab,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: bn,
      __wbg_getSupportedProfiles_90a4f330938d0241: dr,
      __wbg_new_f1a34223ddbe3f7d: tb,
      __wbg_pointerId_ea33d2695be12e7f: yb,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: bb,
      __wbg_pressure_9a7845d9744ae9f4: Fb,
      __wbg_pointerType_d5e932608aa61bb6: hb,
      __wbg_getCoalescedEvents_366947e5550da21b: qn,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Ve,
      __wbg_userAgent_0558f0ac642f7771: d0,
      __wbg_new_e0bd7540d9834af6: eb,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: zt,
      __wbg_disconnect_491a6bfd82cdd887: Zt,
      __wbg_observe_c3834a3e4cde3e64: fb,
      __wbg_new_8f0c2d11e48a4727: Zr,
      __wbg_postMessage_ef2dbf5e8c8ebffc: Pb,
      __wbg_preventDefault_b64888c857500682: kb,
      __wbg_get_b2053e9bfdf3ca8e: mr,
      __wbg_persisted_e508d4d322115185: lb,
      __wbg_resolve_2191a4dfe481c25b: bc,
      __wbg_then_6ec10ae38b3e92f7: vo,
      __wbg_new_da52cf8fe3429cb2: _b,
      __wbg_new_32b398fb48b6d94a: Yr,
      __wbg_of_85f52f8b6491a7ca: db,
      __wbg_of_5f1b88183ddb5d94: ub,
      __wbg_is_7b9d0b289033c7de: Fr,
      __wbg_length_1f0964f4a5e2c6d8: Er,
      __wbg_prototypesetcall_4770620bbe4688a0: Eb,
      __wbg_set_61e45ae8061eca11: vc,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: rb,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: qf,
      __wbg_static_accessor_SELF_146583524fe1469b: Vf,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: Rf,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: Wf,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: Rb,
      __wbg_queueMicrotask_6a09b7bc46549209: qb,
      __wbg_set_8535240470bf2500: Ic,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: u_,
      __wbg___wbindgen_throw_344f42d3211c4765: i_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: a_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: f_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: d_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: r_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: c_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: o_,
      __wbg__wbg_cb_unref_fffb441def202758: g_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: b_,
      __wbindgen_cast_0000000000000001: I0,
      __wbindgen_cast_0000000000000002: A0,
      __wbindgen_cast_0000000000000003: D0,
      __wbindgen_cast_0000000000000004: P0,
      __wbindgen_cast_0000000000000005: M0,
      __wbindgen_cast_0000000000000006: F0,
      __wbindgen_cast_0000000000000007: k0,
      __wbindgen_cast_0000000000000008: T0,
      __wbindgen_cast_0000000000000009: E0,
      __wbindgen_cast_000000000000000a: L0,
      __wbindgen_cast_000000000000000b: B0,
      __wbindgen_cast_000000000000000c: O0,
      __wbindgen_cast_000000000000000d: C0,
      __wbindgen_cast_000000000000000e: R0,
      __wbindgen_cast_000000000000000f: q0,
      __wbindgen_cast_0000000000000010: V0,
      __wbindgen_cast_0000000000000011: W0,
      __wbindgen_cast_0000000000000012: G0,
      __wbindgen_cast_0000000000000013: U0,
      __wbindgen_cast_0000000000000014: j0,
      __wbindgen_cast_0000000000000015: K0,
      __wbindgen_cast_0000000000000016: $0,
      __wbindgen_cast_0000000000000017: z0
    }
  }, __), Cu = m.memory, Ru = m.main, qu = m.run_web, Vu = m.__abort_handler, Wu = m.__instance_terminated, Gu = m.__wasm_bindgen_func_elem_9740, Uu = m.__wasm_bindgen_func_elem_1376, ju = m.__wasm_bindgen_func_elem_1916, Ku = m.__wasm_bindgen_func_elem_1916_11, $u = m.__wasm_bindgen_func_elem_1916_12, zu = m.__wasm_bindgen_func_elem_1375, Nu = m.__wasm_bindgen_func_elem_1375_3, Qu = m.__wasm_bindgen_func_elem_1375_4, Xu = m.__wasm_bindgen_func_elem_1375_5, Yu = m.__wasm_bindgen_func_elem_1375_7, Hu = m.__wasm_bindgen_func_elem_1375_8, Ju = m.__wasm_bindgen_func_elem_1375_9, Zu = m.__wasm_bindgen_func_elem_1375_10, _d = m.__wasm_bindgen_func_elem_1377, ed = m.__wbindgen_export, td = m.__wbindgen_export2, nd = m.__wbindgen_export3, rd = m.__wbindgen_export4, bd = m.__wbindgen_export5, cd = m.__wbindgen_add_to_stack_pointer, J = m.__wbindgen_start, ad = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Vu,
    __instance_terminated: Wu,
    __wasm_bindgen_func_elem_1375: zu,
    __wasm_bindgen_func_elem_1375_10: Zu,
    __wasm_bindgen_func_elem_1375_3: Nu,
    __wasm_bindgen_func_elem_1375_4: Qu,
    __wasm_bindgen_func_elem_1375_5: Xu,
    __wasm_bindgen_func_elem_1375_7: Yu,
    __wasm_bindgen_func_elem_1375_8: Hu,
    __wasm_bindgen_func_elem_1375_9: Ju,
    __wasm_bindgen_func_elem_1376: Uu,
    __wasm_bindgen_func_elem_1377: _d,
    __wasm_bindgen_func_elem_1916: ju,
    __wasm_bindgen_func_elem_1916_11: Ku,
    __wasm_bindgen_func_elem_1916_12: $u,
    __wasm_bindgen_func_elem_9740: Gu,
    __wbindgen_add_to_stack_pointer: cd,
    __wbindgen_export: ed,
    __wbindgen_export2: td,
    __wbindgen_export3: nd,
    __wbindgen_export4: rd,
    __wbindgen_export5: bd,
    __wbindgen_start: J,
    main: Ru,
    memory: Cu,
    run_web: qu
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ou(ad);
  J();
})();
export {
  __tla,
  od as run_web
};
