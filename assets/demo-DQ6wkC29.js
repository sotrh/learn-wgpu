import { _ as t_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let $i;
let __tla = (async () => {
  const n_ = "/learn-wgpu/assets/demo_bg-BFSKIffw.wasm";
  $i = function() {
    d.run_web();
  };
  function r_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function b_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function c_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function a_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function f_(_, e) {
    const n = z(t(e)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function o_(_) {
    return typeof t(_) == "function";
  }
  function u_(_) {
    return t(_) === null;
  }
  function i_(_) {
    return t(_) === void 0;
  }
  function d_(_, e) {
    const n = t(e), r = typeof n == "number" ? n : void 0;
    l().setFloat64(_ + 8, s(r) ? 0 : r, true), l().setInt32(_ + 0, !s(r), true);
  }
  function g_(_, e) {
    const n = t(e), r = typeof n == "string" ? n : void 0;
    var b = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, b, true);
  }
  function s_(_, e) {
    throw new Error(w(_, e));
  }
  function w_(_) {
    t(_)._wbg_cb_unref();
  }
  function l_(_) {
    t(_).abort();
  }
  function m_(_) {
    const e = t(_).activeElement;
    return s(e) ? 0 : c(e);
  }
  function p_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function x_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function y_() {
    return o(function(_, e, n, r) {
      t(_).addEventListener(w(e, n), t(r));
    }, arguments);
  }
  function h_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function S_(_) {
    return t(_).altKey;
  }
  function v_(_) {
    return t(_).altKey;
  }
  function I_(_, e, n) {
    const r = t(_).animate(t(e), t(n));
    return c(r);
  }
  function A_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function D_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function P_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function M_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function F_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function T_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, w(r, b));
  }
  function B_(_, e, n, r, b) {
    t(_).bindAttribLocation(t(e), n >>> 0, w(r, b));
  }
  function k_(_, e, n, r, b, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(r), b, a);
  }
  function L_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function E_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function C_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function O_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function R_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function q_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function U_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function z_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function j_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function K_(_, e, n, r, b) {
    t(_).blendColor(e, n, r, b);
  }
  function N_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function Q_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function X_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function $_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function Y_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function H_(_, e, n, r, b) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function J_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function Z_(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function _e(_, e, n, r, b, a, f, u, i, g, m) {
    t(_).blitFramebuffer(e, n, r, b, a, f, u, i, g >>> 0, m >>> 0);
  }
  function ee(_) {
    return t(_).blockSize;
  }
  function te(_) {
    const e = t(_).body;
    return s(e) ? 0 : c(e);
  }
  function ne(_, e) {
    const n = t(e).brand, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function re(_) {
    const e = t(_).brands;
    return c(e);
  }
  function be(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ce(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ae(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function fe(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function oe(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function ue(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function ie(_) {
    return t(_).button;
  }
  function de(_) {
    return t(_).buttons;
  }
  function ge() {
    return o(function(_, e) {
      const n = t(_).call(t(e));
      return c(n);
    }, arguments);
  }
  function se() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function we(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function le(_) {
    t(_).cancel();
  }
  function me(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function pe(_, e, n, r, b) {
    t(_).clearBufferfv(e >>> 0, n, p(r, b));
  }
  function xe(_, e, n, r, b) {
    t(_).clearBufferiv(e >>> 0, n, A(r, b));
  }
  function ye(_, e, n, r, b) {
    t(_).clearBufferuiv(e >>> 0, n, F(r, b));
  }
  function he(_, e) {
    t(_).clearDepth(e);
  }
  function Se(_, e) {
    t(_).clearDepth(e);
  }
  function ve(_, e) {
    t(_).clearStencil(e);
  }
  function Ie(_, e) {
    t(_).clearStencil(e);
  }
  function Ae(_, e) {
    t(_).clearTimeout(e);
  }
  function De(_, e) {
    t(_).clear(e >>> 0);
  }
  function Pe(_, e) {
    t(_).clear(e >>> 0);
  }
  function Me(_, e, n, r) {
    return t(_).clientWaitSync(t(e), n >>> 0, r >>> 0);
  }
  function Fe(_) {
    t(_).close();
  }
  function Te(_, e) {
    const n = t(e).code, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function Be(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function ke(_, e, n, r, b) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, b !== 0);
  }
  function Le(_, e) {
    t(_).compileShader(t(e));
  }
  function Ee(_, e) {
    t(_).compileShader(t(e));
  }
  function Ce(_, e, n, r, b, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, t(i));
  }
  function Oe(_, e, n, r, b, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, t(i));
  }
  function Re(_, e, n, r, b, a, f, u, i, g) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i, g);
  }
  function qe(_, e, n, r, b, a, f, u, i, g, m) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, t(m));
  }
  function Ge(_, e, n, r, b, a, f, u, i, g, m, h) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m, h);
  }
  function Ve() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function We(_, e) {
    return t(_).contains(t(e));
  }
  function Ue(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function ze(_, e, n, r, b, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, r, b, a);
  }
  function je(_, e, n, r, b, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, u, i);
  }
  function Ke(_, e, n, r, b, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, b, a, f, u, i);
  }
  function Ne(_, e, n, r, b, a, f, u, i, g) {
    t(_).copyTexSubImage3D(e >>> 0, n, r, b, a, f, u, i, g);
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
  function $e(_) {
    const e = t(_).createBuffer();
    return s(e) ? 0 : c(e);
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
  function Je(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function Ze() {
    return o(function(_, e, n) {
      const r = t(_).createElement(w(e, n));
      return c(r);
    }, arguments);
  }
  function _t(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function et(_) {
    const e = t(_).createFramebuffer();
    return s(e) ? 0 : c(e);
  }
  function tt() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
      l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function nt(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function rt(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function bt(_) {
    const e = t(_).createProgram();
    return s(e) ? 0 : c(e);
  }
  function ct(_) {
    const e = t(_).createQuery();
    return s(e) ? 0 : c(e);
  }
  function at() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function ft(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function ot(_) {
    const e = t(_).createRenderbuffer();
    return s(e) ? 0 : c(e);
  }
  function ut(_, e) {
    const n = t(_).createSampler(t(e));
    return c(n);
  }
  function it(_) {
    const e = t(_).createSampler();
    return s(e) ? 0 : c(e);
  }
  function dt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function gt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function st(_, e) {
    const n = t(_).createShader(e >>> 0);
    return s(n) ? 0 : c(n);
  }
  function wt(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function lt() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return c(n);
    }, arguments);
  }
  function mt(_) {
    const e = t(_).createTexture();
    return s(e) ? 0 : c(e);
  }
  function pt(_) {
    const e = t(_).createVertexArrayOES();
    return s(e) ? 0 : c(e);
  }
  function xt(_) {
    const e = t(_).createVertexArray();
    return s(e) ? 0 : c(e);
  }
  function yt() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function ht(_) {
    return t(_).ctrlKey;
  }
  function St(_) {
    return t(_).ctrlKey;
  }
  function vt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function It(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function At(_) {
    console.debug(t(_));
  }
  function Dt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Pt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Mt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Ft(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Tt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Bt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function kt(_, e) {
    t(_).deleteQuery(t(e));
  }
  function Lt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Et(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Ct(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Ot(_, e) {
    t(_).deleteShader(t(e));
  }
  function Rt(_, e) {
    t(_).deleteShader(t(e));
  }
  function qt(_, e) {
    t(_).deleteSync(t(e));
  }
  function Gt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Vt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Wt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Ut(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function zt(_) {
    return t(_).deltaMode;
  }
  function jt(_) {
    return t(_).deltaX;
  }
  function Kt(_) {
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
  function $t(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Yt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Ht(_, e, n) {
    t(_).depthRange(e, n);
  }
  function Jt(_) {
    t(_).destroy();
  }
  function Zt(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function _n(_) {
    return t(_).devicePixelRatio;
  }
  function en(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function tn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function nn(_, e) {
    t(_).disable(e >>> 0);
  }
  function rn(_, e) {
    t(_).disable(e >>> 0);
  }
  function bn(_) {
    t(_).disconnect();
  }
  function cn(_) {
    t(_).disconnect();
  }
  function an(_) {
    const e = t(_).document;
    return s(e) ? 0 : c(e);
  }
  function fn(_, e, n, r, b) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, b);
  }
  function on(_, e, n, r, b) {
    t(_).drawArraysInstanced(e >>> 0, n, r, b);
  }
  function un(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function dn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function gn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function sn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function wn(_, e, n, r, b, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, b, a);
  }
  function ln(_, e, n, r, b, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, b, a);
  }
  function mn(_, e, n, r, b, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, r >>> 0, b, a >>> 0);
  }
  function pn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function xn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function yn(_, e) {
    t(_).enable(e >>> 0);
  }
  function hn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Sn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function vn(_) {
    t(_).end();
  }
  function In(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(w(_, e));
    } finally {
      d.__wbindgen_export4(n, r, 1);
    }
  }
  function An(_) {
    console.error(t(_));
  }
  function Dn(_, e) {
    console.error(t(_), t(e));
  }
  function Pn(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return s(r) ? 0 : c(r);
  }
  function Mn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function Fn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function Tn(_) {
    t(_).flush();
  }
  function Bn(_) {
    t(_).flush();
  }
  function kn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Ln(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function En(_, e, n, r, b) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(b));
  }
  function Cn(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function On(_, e, n, r, b, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(b), a);
  }
  function Rn(_, e, n, r, b, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), b, a);
  }
  function qn(_, e, n, r, b, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), b, a, f);
  }
  function Gn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Vn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Wn(_) {
    const e = t(_).fullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Un(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function zn(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function jn(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function Kn() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return s(n) ? 0 : c(n);
    }, arguments);
  }
  function Nn() {
    return o(function(_, e, n) {
      const r = t(_).getContext(w(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Qn() {
    return o(function(_, e, n) {
      const r = t(_).getContext(w(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Xn() {
    return o(function(_, e, n, r) {
      const b = t(_).getContext(w(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function $n() {
    return o(function(_, e, n, r) {
      const b = t(_).getContext(w(e, n), t(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Yn() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function Hn(_, e, n) {
    const r = t(_).getElementById(w(e, n));
    return s(r) ? 0 : c(r);
  }
  function Jn() {
    return o(function(_, e, n) {
      const r = t(_).getExtension(w(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Zn() {
    return o(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(r);
    }, arguments);
  }
  function _r() {
    return o(function(_, e, n) {
      const r = t(_).getMappedRange(e, n);
      return c(r);
    }, arguments);
  }
  function er(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function tr() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function nr() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function rr(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 96) - 1;
  }
  function br(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, b, true);
  }
  function cr(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var b = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, b, true);
  }
  function ar(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function fr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return c(r);
  }
  function or() {
    return o(function(_, e, n, r) {
      const b = t(e).getPropertyValue(w(n, r)), a = y(b, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function ur(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return c(r);
  }
  function ir(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, b, true);
  }
  function dr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var b = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, b, true);
  }
  function gr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function sr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return c(r);
  }
  function wr(_) {
    const e = t(_).getSupportedExtensions();
    return s(e) ? 0 : c(e);
  }
  function lr(_) {
    const e = t(_).getSupportedProfiles();
    return s(e) ? 0 : c(e);
  }
  function mr(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return c(r);
  }
  function pr(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), w(n, r));
  }
  function xr(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), w(n, r));
    return s(b) ? 0 : c(b);
  }
  function yr(_, e, n, r) {
    const b = t(_).getUniformLocation(t(e), w(n, r));
    return s(b) ? 0 : c(b);
  }
  function hr(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Sr(_, e) {
    const n = t(_)[e >>> 0];
    return s(n) ? 0 : c(n);
  }
  function vr(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function Ir(_) {
    return t(_).height;
  }
  function Ar(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Dr(_) {
    console.info(t(_));
  }
  function Pr(_) {
    return t(_).inlineSize;
  }
  function Mr(_) {
    let e;
    try {
      e = t(_) instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function Fr(_) {
    let e;
    try {
      e = t(_) instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Tr(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Br(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function kr(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Lr() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Er(_) {
    return t(_).isIntersecting;
  }
  function Cr(_, e) {
    return Object.is(t(_), t(e));
  }
  function Or(_, e) {
    const n = t(e).key, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function Rr(_, e) {
    const n = t(e).label, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function qr(_) {
    return t(_).length;
  }
  function Gr(_) {
    return t(_).length;
  }
  function Vr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Wr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Ur(_) {
    return t(_).location;
  }
  function zr(_) {
    console.log(t(_));
  }
  function jr(_, e, n, r) {
    const b = t(_).mapAsync(e >>> 0, n, r);
    return c(b);
  }
  function Kr() {
    return o(function(_, e, n) {
      const r = t(_).matchMedia(w(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Nr(_) {
    return t(_).matches;
  }
  function Qr(_, e) {
    const n = t(e).media, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function Xr(_) {
    return t(_).metaKey;
  }
  function $r(_) {
    return t(_).metaKey;
  }
  function Yr(_) {
    return t(_).movementX;
  }
  function Hr(_) {
    return t(_).movementY;
  }
  function Jr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function Zr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function _b() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function eb() {
    const _ = new Object();
    return c(_);
  }
  function tb() {
    const _ = new Array();
    return c(_);
  }
  function nb() {
    return o(function(_, e) {
      const n = new Worker(w(_, e));
      return c(n);
    }, arguments);
  }
  function rb() {
    return o(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function bb() {
    const _ = new Error();
    return c(_);
  }
  function cb() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function ab() {
    return o(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function fb(_, e) {
    const n = new Function(w(_, e));
    return c(n);
  }
  function ob(_, e, n) {
    const r = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(r);
  }
  function ub() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function ib(_) {
    return t(_).now();
  }
  function db(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function gb(_, e) {
    t(_).observe(t(e));
  }
  function sb(_, e) {
    t(_).observe(t(e));
  }
  function wb(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function lb(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function mb(_) {
    return t(_).offsetX;
  }
  function pb(_) {
    return t(_).offsetY;
  }
  function xb(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function yb(_) {
    const e = t(_).performance;
    return c(e);
  }
  function hb(_) {
    return t(_).persisted;
  }
  function Sb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function vb(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Ib(_) {
    t(_).play();
  }
  function Ab(_) {
    return t(_).pointerId;
  }
  function Db(_, e) {
    const n = t(e).pointerType, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function Pb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Mb(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Fb(_) {
    const e = t(_).port1;
    return c(e);
  }
  function Tb(_) {
    const e = t(_).port2;
    return c(e);
  }
  function Bb() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function kb() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function Lb(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return c(r);
  }
  function Eb(_) {
    return t(_).pressure;
  }
  function Cb(_) {
    t(_).preventDefault();
  }
  function Ob() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function Rb(_, e, n) {
    Uint8Array.prototype.set.call(W(_, e), t(n));
  }
  function qb(_, e) {
    return t(_).push(t(e));
  }
  function Gb(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function Vb() {
    return o(function(_, e, n) {
      const r = t(_).querySelectorAll(w(e, n));
      return c(r);
    }, arguments);
  }
  function Wb() {
    return o(function(_, e, n) {
      const r = t(_).querySelector(w(e, n));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Ub(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function zb(_) {
    queueMicrotask(t(_));
  }
  function jb(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function Kb(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Nb(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Qb() {
    return o(function(_, e, n, r, b, a, f, u) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Xb() {
    return o(function(_, e, n, r, b, a, f, u) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, u);
    }, arguments);
  }
  function $b() {
    return o(function(_, e, n, r, b, a, f, u) {
      t(_).readPixels(e, n, r, b, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Yb() {
    return o(function(_, e, n, r) {
      t(_).removeEventListener(w(e, n), t(r));
    }, arguments);
  }
  function Hb() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Jb() {
    return o(function(_, e, n, r) {
      const b = t(e).removeProperty(w(n, r)), a = y(b, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Zb(_, e, n, r, b, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, b, a);
  }
  function _c(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function ec(_, e, n, r, b) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, b);
  }
  function tc(_) {
    return t(_).repeat;
  }
  function nc(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function rc() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function bc(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function cc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function ac(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function fc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function oc() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function uc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function ic() {
    return o(function(_, e) {
      URL.revokeObjectURL(w(_, e));
    }, arguments);
  }
  function dc(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function gc(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function sc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function wc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function lc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function mc(_, e, n, r, b) {
    t(_).scissor(e, n, r, b);
  }
  function pc() {
    return o(function(_, e, n, r, b) {
      t(_).setAttribute(w(e, n), w(r, b));
    }, arguments);
  }
  function xc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function yc() {
    return o(function(_, e, n, r, b, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), F(r, b), a, f >>> 0);
    }, arguments);
  }
  function hc(_, e, n, r, b) {
    t(_).setIndexBuffer(t(e), N[n], r, b);
  }
  function Sc(_, e, n, r) {
    t(_).setIndexBuffer(t(e), N[n], r);
  }
  function vc(_, e) {
    t(_).setPipeline(t(e));
  }
  function Ic() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function Ac() {
    return o(function(_, e, n, r, b) {
      t(_).setProperty(w(e, n), w(r, b));
    }, arguments);
  }
  function Dc() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function Pc() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function Mc(_, e, n, r, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), r, b);
  }
  function Fc(_, e, n, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), r);
  }
  function Tc(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function Bc() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function kc(_, e) {
    t(_).a = e;
  }
  function Lc(_, e) {
    t(_).access = gi[e];
  }
  function Ec(_, e) {
    t(_).addressModeU = j[e];
  }
  function Cc(_, e) {
    t(_).addressModeV = j[e];
  }
  function Oc(_, e) {
    t(_).addressModeW = j[e];
  }
  function Rc(_, e) {
    t(_).alpha = t(e);
  }
  function qc(_, e) {
    t(_).alphaMode = ci[e];
  }
  function Gc(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function Vc(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function Wc(_, e) {
    t(_).arrayStride = e;
  }
  function Uc(_, e) {
    t(_).aspect = __[e];
  }
  function zc(_, e) {
    t(_).aspect = __[e];
  }
  function jc(_, e) {
    t(_).attributes = t(e);
  }
  function Kc(_, e) {
    t(_).b = e;
  }
  function Nc(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Qc(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Xc(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function $c(_, e) {
    t(_).bindGroupLayouts = t(e);
  }
  function Yc(_, e) {
    t(_).binding = e >>> 0;
  }
  function Hc(_, e) {
    t(_).binding = e >>> 0;
  }
  function Jc(_, e) {
    t(_).blend = t(e);
  }
  function Zc(_, e) {
    t(_).box = pi[e];
  }
  function _a(_, e) {
    t(_).buffer = t(e);
  }
  function ea(_, e) {
    t(_).buffer = t(e);
  }
  function ta(_, e) {
    t(_).buffers = t(e);
  }
  function na(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function ra(_, e) {
    t(_).clearValue = t(e);
  }
  function ba(_, e, n) {
    t(_).code = w(e, n);
  }
  function ca(_, e) {
    t(_).color = t(e);
  }
  function aa(_, e) {
    t(_).colorAttachments = t(e);
  }
  function fa(_, e) {
    t(_).compare = K[e];
  }
  function oa(_, e) {
    t(_).compare = K[e];
  }
  function ua(_, e) {
    t(_).count = e >>> 0;
  }
  function ia(_, e) {
    t(_).cullMode = ai[e];
  }
  function da(_, e) {
    t(_).depthBias = e;
  }
  function ga(_, e) {
    t(_).depthBiasClamp = e;
  }
  function sa(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function wa(_, e) {
    t(_).depthClearValue = e;
  }
  function la(_, e) {
    t(_).depthCompare = K[e];
  }
  function ma(_, e) {
    t(_).depthFailOp = X[e];
  }
  function pa(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function xa(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function ya(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function ha(_, e) {
    t(_).depthStencil = t(e);
  }
  function Sa(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function va(_, e) {
    t(_).depthStoreOp = $[e];
  }
  function Ia(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Aa(_, e) {
    t(_).device = t(e);
  }
  function Da(_, e) {
    t(_).dimension = si[e];
  }
  function Pa(_, e) {
    t(_).dimension = Y[e];
  }
  function Ma(_, e) {
    t(_).dstFactor = J[e];
  }
  function Fa(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function Ta(_, e) {
    t(_).entries = t(e);
  }
  function Ba(_, e) {
    t(_).entries = t(e);
  }
  function ka(_, e, n) {
    t(_).entryPoint = w(e, n);
  }
  function La(_, e, n) {
    t(_).entryPoint = w(e, n);
  }
  function Ea(_, e) {
    t(_).externalTexture = t(e);
  }
  function Ca(_, e) {
    t(_).failOp = X[e];
  }
  function Oa(_, e) {
    t(_).format = P[e];
  }
  function Ra(_, e) {
    t(_).format = P[e];
  }
  function qa(_, e) {
    t(_).format = P[e];
  }
  function Ga(_, e) {
    t(_).format = li[e];
  }
  function Va(_, e) {
    t(_).format = P[e];
  }
  function Wa(_, e) {
    t(_).format = P[e];
  }
  function Ua(_, e) {
    t(_).format = P[e];
  }
  function za(_, e) {
    t(_).fragment = t(e);
  }
  function ja(_, e) {
    t(_).frontFace = fi[e];
  }
  function Ka(_, e) {
    t(_).g = e;
  }
  function Na(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function Qa(_, e) {
    t(_).height = e >>> 0;
  }
  function Xa(_, e) {
    t(_).height = e >>> 0;
  }
  function $a(_, e) {
    t(_).height = e >>> 0;
  }
  function Ya(_, e, n) {
    t(_).label = w(e, n);
  }
  function Ha(_, e, n) {
    t(_).label = w(e, n);
  }
  function Ja(_, e, n) {
    t(_).label = w(e, n);
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
  function rf(_, e, n) {
    t(_).label = w(e, n);
  }
  function bf(_, e, n) {
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
  function of(_, e) {
    t(_).layout = t(e);
  }
  function uf(_, e) {
    t(_).layout = t(e);
  }
  function df(_, e) {
    t(_).loadOp = Q[e];
  }
  function gf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function sf(_, e) {
    t(_).lodMinClamp = e;
  }
  function wf(_, e) {
    t(_).magFilter = Z[e];
  }
  function lf(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function mf(_, e) {
    t(_).mask = e >>> 0;
  }
  function pf(_, e) {
    t(_).maxAnisotropy = e;
  }
  function xf(_, e) {
    t(_).minBindingSize = e;
  }
  function yf(_, e) {
    t(_).minFilter = Z[e];
  }
  function hf(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function Sf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function vf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function If(_, e) {
    t(_).mipmapFilter = oi[e];
  }
  function Af(_, e) {
    t(_).module = t(e);
  }
  function Df(_, e) {
    t(_).module = t(e);
  }
  function Pf(_, e) {
    t(_).multisample = t(e);
  }
  function Mf(_, e) {
    t(_).multisampled = e !== 0;
  }
  function Ff(_, e) {
    t(_).offset = e;
  }
  function Tf(_, e) {
    t(_).offset = e;
  }
  function Bf(_, e) {
    t(_).offset = e;
  }
  function kf(_, e) {
    t(_).onmessage = t(e);
  }
  function Lf(_, e) {
    t(_).operation = ri[e];
  }
  function Ef(_, e) {
    t(_).origin = t(e);
  }
  function Cf(_, e) {
    t(_).passOp = X[e];
  }
  function Of(_, e) {
    t(_).powerPreference = ui[e];
  }
  function Rf(_, e) {
    t(_).primitive = t(e);
  }
  function qf(_, e) {
    t(_).querySet = t(e);
  }
  function Gf(_, e) {
    t(_).r = e;
  }
  function Vf(_, e) {
    t(_).requiredFeatures = t(e);
  }
  function Wf(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Uf(_, e) {
    t(_).resolveTarget = t(e);
  }
  function zf(_, e) {
    t(_).resource = t(e);
  }
  function jf(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Kf(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function Nf(_, e) {
    t(_).sampleType = wi[e];
  }
  function Qf(_, e) {
    t(_).sampler = t(e);
  }
  function Xf(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function $f(_, e) {
    t(_).size = e;
  }
  function Yf(_, e) {
    t(_).size = e;
  }
  function Hf(_, e) {
    t(_).size = t(e);
  }
  function Jf(_, e) {
    t(_).srcFactor = J[e];
  }
  function Zf(_, e) {
    t(_).stencilBack = t(e);
  }
  function _o(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function eo(_, e) {
    t(_).stencilFront = t(e);
  }
  function to(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function no(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function ro(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function bo(_, e) {
    t(_).stencilStoreOp = $[e];
  }
  function co(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function ao(_, e) {
    t(_).stepMode = mi[e];
  }
  function fo(_, e) {
    t(_).storageTexture = t(e);
  }
  function oo(_, e) {
    t(_).storeOp = $[e];
  }
  function uo(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function io(_, e) {
    t(_).targets = t(e);
  }
  function go(_, e) {
    t(_).texture = t(e);
  }
  function so(_, e) {
    t(_).texture = t(e);
  }
  function wo(_, e) {
    t(_).timestampWrites = t(e);
  }
  function lo(_, e) {
    t(_).topology = ii[e];
  }
  function mo(_, e, n) {
    t(_).type = w(e, n);
  }
  function po(_, e) {
    t(_).type = bi[e];
  }
  function xo(_, e) {
    t(_).type = di[e];
  }
  function yo(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function ho(_, e) {
    t(_).usage = e >>> 0;
  }
  function So(_, e) {
    t(_).usage = e >>> 0;
  }
  function vo(_, e) {
    t(_).usage = e >>> 0;
  }
  function Io(_, e) {
    t(_).usage = e >>> 0;
  }
  function Ao(_, e) {
    t(_).vertex = t(e);
  }
  function Do(_, e) {
    t(_).view = t(e);
  }
  function Po(_, e) {
    t(_).view = t(e);
  }
  function Mo(_, e) {
    t(_).viewDimension = Y[e];
  }
  function Fo(_, e) {
    t(_).viewDimension = Y[e];
  }
  function To(_, e) {
    t(_).viewFormats = t(e);
  }
  function Bo(_, e) {
    t(_).viewFormats = t(e);
  }
  function ko(_, e) {
    t(_).visibility = e >>> 0;
  }
  function Lo(_, e) {
    t(_).width = e >>> 0;
  }
  function Eo(_, e) {
    t(_).width = e >>> 0;
  }
  function Co(_, e) {
    t(_).width = e >>> 0;
  }
  function Oo(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function Ro(_, e) {
    t(_).x = e >>> 0;
  }
  function qo(_, e) {
    t(_).y = e >>> 0;
  }
  function Go(_, e) {
    t(_).z = e >>> 0;
  }
  function Vo(_, e, n, r) {
    t(_).shaderSource(t(e), w(n, r));
  }
  function Wo(_, e, n, r) {
    t(_).shaderSource(t(e), w(n, r));
  }
  function Uo(_) {
    return t(_).shiftKey;
  }
  function zo(_) {
    return t(_).shiftKey;
  }
  function jo(_) {
    const e = t(_).signal;
    return c(e);
  }
  function Ko(_, e) {
    const n = t(e).stack, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
    l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
  }
  function No(_) {
    t(_).start();
  }
  function Qo() {
    const _ = typeof global > "u" ? null : global;
    return s(_) ? 0 : c(_);
  }
  function Xo() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return s(_) ? 0 : c(_);
  }
  function $o() {
    const _ = typeof self > "u" ? null : self;
    return s(_) ? 0 : c(_);
  }
  function Yo() {
    const _ = typeof window > "u" ? null : window;
    return s(_) ? 0 : c(_);
  }
  function Ho(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Jo(_, e, n, r, b) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, b >>> 0);
  }
  function Zo(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function _0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function e0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function t0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function n0(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function r0(_, e, n, r, b) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, b >>> 0);
  }
  function b0(_) {
    const e = t(_).style;
    return c(e);
  }
  function c0(_, e) {
    t(_).submit(t(e));
  }
  function a0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function f0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, g);
    }, arguments);
  }
  function o0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function u0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, u, i >>> 0, g >>> 0, m);
    }, arguments);
  }
  function i0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m) {
      t(_).texImage3D(e >>> 0, n, r, b, a, f, u, i >>> 0, g >>> 0, t(m));
    }, arguments);
  }
  function d0(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function g0(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function s0(_, e, n, r, b, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, b, a);
  }
  function w0(_, e, n, r, b, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, b, a, f);
  }
  function l0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function m0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function p0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function x0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function y0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function h0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function S0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function v0() {
    return o(function(_, e, n, r, b, a, f, u, i, g) {
      t(_).texSubImage2D(e >>> 0, n, r, b, a, f, u >>> 0, i >>> 0, g);
    }, arguments);
  }
  function I0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function A0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function D0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function P0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function M0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function F0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, h);
    }, arguments);
  }
  function T0() {
    return o(function(_, e, n, r, b, a, f, u, i, g, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, b, a, f, u, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function B0(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return c(r);
  }
  function k0(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function L0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function E0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function C0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function O0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function R0(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function q0(_, e, n, r) {
    t(_).uniform2fv(t(e), p(n, r));
  }
  function G0(_, e, n, r) {
    t(_).uniform2fv(t(e), p(n, r));
  }
  function V0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function W0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function U0(_, e, n, r) {
    t(_).uniform2uiv(t(e), F(n, r));
  }
  function z0(_, e, n, r) {
    t(_).uniform3fv(t(e), p(n, r));
  }
  function j0(_, e, n, r) {
    t(_).uniform3fv(t(e), p(n, r));
  }
  function K0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function N0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function Q0(_, e, n, r) {
    t(_).uniform3uiv(t(e), F(n, r));
  }
  function X0(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function $0(_, e, n, r, b, a) {
    t(_).uniform4f(t(e), n, r, b, a);
  }
  function Y0(_, e, n, r) {
    t(_).uniform4fv(t(e), p(n, r));
  }
  function H0(_, e, n, r) {
    t(_).uniform4fv(t(e), p(n, r));
  }
  function J0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function Z0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function _u(_, e, n, r) {
    t(_).uniform4uiv(t(e), F(n, r));
  }
  function eu(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function tu(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, p(r, b));
  }
  function nu(_, e, n, r, b) {
    t(_).uniformMatrix2fv(t(e), n !== 0, p(r, b));
  }
  function ru(_, e, n, r, b) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, p(r, b));
  }
  function bu(_, e, n, r, b) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, p(r, b));
  }
  function cu(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, p(r, b));
  }
  function au(_, e, n, r, b) {
    t(_).uniformMatrix3fv(t(e), n !== 0, p(r, b));
  }
  function fu(_, e, n, r, b) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, p(r, b));
  }
  function ou(_, e, n, r, b) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, p(r, b));
  }
  function uu(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, p(r, b));
  }
  function iu(_, e, n, r, b) {
    t(_).uniformMatrix4fv(t(e), n !== 0, p(r, b));
  }
  function du(_, e, n, r, b) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, p(r, b));
  }
  function gu(_, e, n, r, b) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, p(r, b));
  }
  function su(_) {
    t(_).unmap();
  }
  function wu(_, e) {
    t(_).unobserve(t(e));
  }
  function lu(_, e) {
    t(_).useProgram(t(e));
  }
  function mu(_, e) {
    t(_).useProgram(t(e));
  }
  function pu(_) {
    const e = t(_).userAgentData;
    return s(e) ? 0 : c(e);
  }
  function xu() {
    return o(function(_, e) {
      const n = t(e).userAgent, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), b = x;
      l().setInt32(_ + 4, b, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function yu(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function hu(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function Su(_, e, n, r, b, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, b, a);
  }
  function vu(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function Iu(_, e, n, r, b, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, b !== 0, a, f);
  }
  function Au(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function Du(_, e, n, r, b) {
    t(_).viewport(e, n, r, b);
  }
  function Pu(_) {
    const e = t(_).visibilityState;
    return (xi.indexOf(e) + 1 || 3) - 1;
  }
  function Mu(_) {
    console.warn(t(_));
  }
  function Fu(_) {
    const e = t(_).webkitFullscreenElement;
    return s(e) ? 0 : c(e);
  }
  function Tu(_) {
    t(_).webkitRequestFullscreen();
  }
  function Bu(_) {
    return t(_).width;
  }
  function ku() {
    return o(function(_, e, n, r, b, a, f) {
      t(_).writeBuffer(t(e), n, W(r, b), a, f);
    }, arguments);
  }
  function Lu() {
    return o(function(_, e, n, r, b, a) {
      t(_).writeTexture(t(e), W(n, r), t(b), t(a));
    }, arguments);
  }
  function Eu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, ni);
    return c(n);
  }
  function Cu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Ou(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Ru(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function qu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Gu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Vu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Wu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, D);
    return c(n);
  }
  function Uu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_2603, ei);
    return c(n);
  }
  function zu(_, e) {
    const n = v(_, e, d.__wasm_bindgen_func_elem_4415, ti);
    return c(n);
  }
  function ju(_) {
    return c(_);
  }
  function Ku(_, e) {
    const n = p(_, e);
    return c(n);
  }
  function Nu(_, e) {
    const n = hi(_, e);
    return c(n);
  }
  function Qu(_, e) {
    const n = A(_, e);
    return c(n);
  }
  function Xu(_, e) {
    const n = Si(_, e);
    return c(n);
  }
  function $u(_, e) {
    const n = vi(_, e);
    return c(n);
  }
  function Yu(_, e) {
    const n = F(_, e);
    return c(n);
  }
  function Hu(_, e) {
    const n = W(_, e);
    return c(n);
  }
  function Ju(_, e) {
    const n = w(_, e);
    return c(n);
  }
  function Zu(_) {
    const e = t(_);
    return c(e);
  }
  function _i(_) {
    Ti(_);
  }
  function ei(_, e) {
    d.__wasm_bindgen_func_elem_2934(_, e);
  }
  function D(_, e, n) {
    d.__wasm_bindgen_func_elem_2936(_, e, c(n));
  }
  function ti(_, e, n) {
    d.__wasm_bindgen_func_elem_4416(_, e, c(n));
  }
  function ni(_, e, n, r) {
    d.__wasm_bindgen_func_elem_2942(_, e, c(n), c(r));
  }
  const j = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], J = [
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
  ], ri = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], bi = [
    "uniform",
    "storage",
    "read-only-storage"
  ], ci = [
    "opaque",
    "premultiplied"
  ], K = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], ai = [
    "none",
    "front",
    "back"
  ], Z = [
    "nearest",
    "linear"
  ], fi = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], oi = [
    "nearest",
    "linear"
  ], ui = [
    "low-power",
    "high-performance"
  ], ii = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], di = [
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
  ], gi = [
    "write-only",
    "read-only",
    "read-write"
  ], $ = [
    "store",
    "discard"
  ], __ = [
    "all",
    "stencil-only",
    "depth-only"
  ], si = [
    "1d",
    "2d",
    "3d"
  ], P = [
    "r8unorm",
    "r8snorm",
    "r8uint",
    "r8sint",
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
  ], wi = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], Y = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], li = [
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
  ], mi = [
    "vertex",
    "instance"
  ], pi = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], xi = [
    "hidden",
    "visible"
  ];
  function c(_) {
    B === I.length && I.push(I.length + 1);
    const e = B;
    return B = I[e], I[e] = _, e;
  }
  const H = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => _.dtor(_.a, _.b));
  function z(_) {
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
      b > 0 && (a += z(_[0]));
      for (let f = 1; f < b; f++) a += ", " + z(_[f]);
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
  function yi(_) {
    _ < 132 || (I[_] = B, B = _);
  }
  function p(_, e) {
    return _ = _ >>> 0, Ii().subarray(_ / 4, _ / 4 + e);
  }
  function hi(_, e) {
    return _ = _ >>> 0, Ai().subarray(_ / 2, _ / 2 + e);
  }
  function A(_, e) {
    return _ = _ >>> 0, Di().subarray(_ / 4, _ / 4 + e);
  }
  function Si(_, e) {
    return _ = _ >>> 0, Pi().subarray(_ / 1, _ / 1 + e);
  }
  function vi(_, e) {
    return _ = _ >>> 0, Mi().subarray(_ / 2, _ / 2 + e);
  }
  function F(_, e) {
    return _ = _ >>> 0, Fi().subarray(_ / 4, _ / 4 + e);
  }
  function W(_, e) {
    return _ = _ >>> 0, T().subarray(_ / 1, _ / 1 + e);
  }
  let M = null;
  function l() {
    return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== d.memory.buffer) && (M = new DataView(d.memory.buffer)), M;
  }
  let L = null;
  function Ii() {
    return (L === null || L.byteLength === 0) && (L = new Float32Array(d.memory.buffer)), L;
  }
  let E = null;
  function Ai() {
    return (E === null || E.byteLength === 0) && (E = new Int16Array(d.memory.buffer)), E;
  }
  let C = null;
  function Di() {
    return (C === null || C.byteLength === 0) && (C = new Int32Array(d.memory.buffer)), C;
  }
  let O = null;
  function Pi() {
    return (O === null || O.byteLength === 0) && (O = new Int8Array(d.memory.buffer)), O;
  }
  function w(_, e) {
    return _ = _ >>> 0, ki(_, e);
  }
  let R = null;
  function Mi() {
    return (R === null || R.byteLength === 0) && (R = new Uint16Array(d.memory.buffer)), R;
  }
  let q = null;
  function Fi() {
    return (q === null || q.byteLength === 0) && (q = new Uint32Array(d.memory.buffer)), q;
  }
  let G = null;
  function T() {
    return (G === null || G.byteLength === 0) && (G = new Uint8Array(d.memory.buffer)), G;
  }
  function t(_) {
    return I[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      d.__wbindgen_export3(c(n));
    }
  }
  let I = new Array(128).fill(void 0);
  I.push(void 0, null, true, false);
  let B = I.length;
  function s(_) {
    return _ == null;
  }
  function v(_, e, n, r) {
    const b = {
      a: _,
      b: e,
      cnt: 1,
      dtor: n
    }, a = (...f) => {
      b.cnt++;
      const u = b.a;
      b.a = 0;
      try {
        return r(u, b.b, ...f);
      } finally {
        b.a = u, a._wbg_cb_unref();
      }
    };
    return a._wbg_cb_unref = () => {
      --b.cnt === 0 && (b.dtor(b.a, b.b), b.a = 0, H.unregister(b));
    }, H.register(a, b, b), a;
  }
  function y(_, e, n) {
    if (n === void 0) {
      const u = k.encode(_), i = e(u.length, 1) >>> 0;
      return T().subarray(i, i + u.length).set(u), x = u.length, i;
    }
    let r = _.length, b = e(r, 1) >>> 0;
    const a = T();
    let f = 0;
    for (; f < r; f++) {
      const u = _.charCodeAt(f);
      if (u > 127) break;
      a[b + f] = u;
    }
    if (f !== r) {
      f !== 0 && (_ = _.slice(f)), b = n(b, r, r = f + _.length * 3, 1) >>> 0;
      const u = T().subarray(b + f, b + r), i = k.encodeInto(_, u);
      f += i.written, b = n(b, r, f, 1) >>> 0;
    }
    return x = f, b;
  }
  function Ti(_) {
    const e = t(_);
    return yi(_), e;
  }
  let V = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  V.decode();
  const Bi = 2146435072;
  let U = 0;
  function ki(_, e) {
    return U += e, U >= Bi && (V = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), V.decode(), U = e), V.decode(T().subarray(_, _ + e));
  }
  const k = new TextEncoder();
  "encodeInto" in k || (k.encodeInto = function(_, e) {
    const n = k.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let x = 0, d;
  function Li(_) {
    d = _;
  }
  URL = globalThis.URL;
  const S = await t_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: _i,
      __wbg_new_8a6f238a6ece86ea: bb,
      __wbg_stack_0ed75d68575b0f3c: Ko,
      __wbg_error_7534b8e9a36f1ab4: In,
      __wbg_scheduler_5156bb61cc1cf589: wc,
      __wbg_getCoalescedEvents_21492912fd0145ec: zn,
      __wbg_requestFullscreen_86fc6cdb76000482: cc,
      __wbg_requestIdleCallback_1b8d644ff564208f: fc,
      __wbg_offsetX_cb6a38e6f23cb4a6: mb,
      __wbg_offsetY_43e21941c5c1f8bf: pb,
      __wbindgen_object_clone_ref: Zu,
      __wbg_cancel_09c394f0894744eb: le,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: Fu,
      __wbg_requestFullscreen_9f0611438eb929cf: ac,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: Tu,
      __wbg_scheduler_48482a9974eeacbd: sc,
      __wbg_postTask_41d93e93941e4a3d: Lb,
      __wbg_userAgentData_f7b0e61c05c54315: pu,
      __wbg_brands_a1e7a2bce052128f: re,
      __wbg_brand_9562792cbb4735c3: ne,
      __wbg_prototype_c28bca39c45aba9b: Ob,
      __wbg_animate_6ec571f163cf6f8d: I_,
      __wbg_play_63bc12f42e16af91: Ib,
      __wbg_Window_d1bf622f71ff0629: b_,
      __wbg_performance_7a3ffd0b17f663ad: yb,
      __wbg_now_2c95c9de01293173: ib,
      __wbg_set_color_attachments_81e56abd7f11d38b: aa,
      __wbg_set_label_10c0715c06c574ce: Ya,
      __wbg_set_view_dc1937ba74f6a24a: Po,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: wa,
      __wbg_set_depth_load_op_0e48f976ce8bf626: pa,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: va,
      __wbg_set_depth_read_only_16d1277d6c444182: ya,
      __wbg_set_stencil_clear_value_c88c52b70d827549: _o,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: to,
      __wbg_set_stencil_store_op_b92786567b815d0f: bo,
      __wbg_set_stencil_read_only_54652ff66298c4c5: ro,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: Sa,
      __wbg_set_query_set_1f3c39edf379c9f9: qf,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: Xc,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: Fa,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: wo,
      __wbg_beginRenderPass_c95ff061c0d906d5: F_,
      __wbg_set_width_d1fb21b0573a430a: Eo,
      __wbg_set_height_308d7c58bb7196f5: Qa,
      __wbg_set_depth_or_array_layers_922a1b1547bf00be: xa,
      __wbg_label_37d2cc4e867fe710: Rr,
      __wbg_set_label_5871c6a4116d78e4: _f,
      __wbg_finish_cafc9caa4b3df56c: Fn,
      __wbg_finish_42f37cad38abaf27: Mn,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: Fr,
      __wbg_set_dst_factor_01ac107dce46775a: Ma,
      __wbg_set_operation_872810b2c7ad34bb: Lf,
      __wbg_set_src_factor_d869078ba948812f: Jf,
      __wbg_set_texture_18b0fd044bd7238a: go,
      __wbg_set_mip_level_893bb594663b5970: hf,
      __wbg_set_x_6e4718e5e565b05c: Ro,
      __wbg_set_y_7ad35b82f29b7b2e: qo,
      __wbg_set_z_74f5725616541ab5: Go,
      __wbg_set_origin_a91df496455ed18c: Ef,
      __wbg_set_aspect_a06243383a09c435: zc,
      __wbg_Window_89f1205e6b84c5cf: r_,
      __wbg_gpu_97c682b8bbd6da29: vr,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: c_,
      __wbg_set_a_cb5a15147778942a: kc,
      __wbg_set_b_130b6d20afdc640c: Kc,
      __wbg_set_g_a202edac674d3195: Ka,
      __wbg_set_r_d02e085dc65c7ba3: Gf,
      __wbg_writeBuffer_204a3aba84ea260c: ku,
      __wbg_set_bytes_per_row_cc544005f5ac177d: na,
      __wbg_set_rows_per_image_91e30e4ece899f1e: jf,
      __wbg_set_offset_50c0ba4bb906a321: Ff,
      __wbg_writeTexture_bf31683b9d6c6d14: Lu,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: xb,
      __wbg_submit_5f96af711b83c2df: c0,
      __wbg_getMappedRange_9a20d37843bbc5dd: _r,
      __wbg_unmap_80761f81f18ec521: su,
      __wbg_destroy_834dd203329bdb3c: Jt,
      __wbg_mapAsync_c9718fcf0566073c: jr,
      __wbg_set_size_61d185241554da71: Yf,
      __wbg_set_usage_063311abcbeb0c9f: ho,
      __wbg_set_mapped_at_creation_0d65690c0978994b: lf,
      __wbg_set_label_d7cc9fef79f6607e: bf,
      __wbg_createBuffer_e488cd40ceda9067: He,
      __wbg_set_address_mode_u_0099f90d7d87696a: Ec,
      __wbg_set_address_mode_v_04f9373166ede6c4: Cc,
      __wbg_set_address_mode_w_b6c10646d3e36154: Oc,
      __wbg_set_compare_247a44f5e76066a8: oa,
      __wbg_set_lod_max_clamp_35cfaf5ea55bb7aa: gf,
      __wbg_set_lod_min_clamp_30d6a6d6ab2266ba: sf,
      __wbg_set_mag_filter_30e1d228621e7c54: wf,
      __wbg_set_min_filter_6674175c1bc1ef98: yf,
      __wbg_set_mipmap_filter_40fc07fcab34eb41: If,
      __wbg_set_max_anisotropy_32559abff96ae565: pf,
      __wbg_set_label_6e50ef4fd57a0f6f: tf,
      __wbg_createSampler_a3dfb0f2f89fdc2b: ut,
      __wbg_set_format_dad716a408041ce0: Va,
      __wbg_set_size_b0ef925501e008f2: Hf,
      __wbg_set_usage_f141b5de159a42da: Io,
      __wbg_set_label_da0fad57dde6793d: cf,
      __wbg_set_dimension_b61a8ae2d358aa5b: Da,
      __wbg_set_mip_level_count_6f365469d581bead: vf,
      __wbg_set_sample_count_954d237c60a25f1d: Kf,
      __wbg_set_view_formats_d410e2098aeda477: Bo,
      __wbg_createTexture_cdd92f03ef413b88: lt,
      __wbg_set_entries_2cd3545ee493b9d8: Ta,
      __wbg_set_layout_5bb0e3710064d78b: of,
      __wbg_set_label_1eb936d3881c4a73: Ha,
      __wbg_createBindGroup_0916ed8027ba2c5a: Xe,
      __wbg_set_code_d96e8bd591fe4d27: ba,
      __wbg_set_label_4592679c60c3ae0e: Ja,
      __wbg_createShaderModule_2b4d1147549bca28: dt,
      __wbg_set_label_4f94deb040009907: Za,
      __wbg_createCommandEncoder_e817b588d596b7d6: Je,
      __wbg_set_bind_group_layouts_0304829711909964: $c,
      __wbg_set_label_81a922ba355b9c4e: nf,
      __wbg_createPipelineLayout_87ecd84a502ca7b4: nt,
      __wbg_set_module_b00779338e12d7cb: Df,
      __wbg_set_entry_point_d34fa93493d1dc0e: La,
      __wbg_set_buffers_c36e59052d233445: ta,
      __wbg_set_layout_cf44c2080938f1e8: uf,
      __wbg_set_vertex_84e0affabea33233: Ao,
      __wbg_set_label_ee8b5ccc3ceeadae: af,
      __wbg_set_format_1e6dd64c90091826: Ra,
      __wbg_set_depth_compare_f44e1ef737045c19: la,
      __wbg_set_depth_write_enabled_47d54383526f6b41: Ia,
      __wbg_set_depth_bias_6f054d893efee16d: da,
      __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: ga,
      __wbg_set_depth_bias_slope_scale_79c154be54e419a7: sa,
      __wbg_set_compare_13ccce3149fc8362: fa,
      __wbg_set_depth_fail_op_a697253b12a479e1: ma,
      __wbg_set_fail_op_45d1f0ecf070d60c: Ca,
      __wbg_set_pass_op_10f19e715ae2c3ef: Cf,
      __wbg_set_stencil_back_f7d6690835becc87: Zf,
      __wbg_set_stencil_front_b0e57ed3db28a814: eo,
      __wbg_set_stencil_read_mask_6d091cd38b736049: no,
      __wbg_set_stencil_write_mask_775ac04ab32e79dc: co,
      __wbg_set_depth_stencil_18746e1deb2f030f: ha,
      __wbg_set_module_70bd7be1f2808c25: Af,
      __wbg_set_targets_8396bdc905d927e9: io,
      __wbg_set_entry_point_37d0e849bed76259: ka,
      __wbg_set_fragment_0767ccf58ccf1f6e: za,
      __wbg_set_count_9f86d0fc02d08e45: ua,
      __wbg_set_mask_d8e7d97222c8a92e: mf,
      __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: Gc,
      __wbg_set_multisample_8821c65822c70695: Pf,
      __wbg_set_cull_mode_e2b289219d281f62: ia,
      __wbg_set_front_face_3c32fabea21988fa: ja,
      __wbg_set_strip_index_format_d819e0c5b56ce30e: uo,
      __wbg_set_topology_ad5745a55cfa852b: lo,
      __wbg_set_unclipped_depth_05a825ce1721e8ed: yo,
      __wbg_set_primitive_8ec2530289b383b9: Rf,
      __wbg_createRenderPipeline_5757ddd273de2e48: at,
      __wbg_set_entries_7ced1e5c2593516b: Ba,
      __wbg_set_label_6d2e77710a43dc8c: ef,
      __wbg_createBindGroupLayout_433fd88c480d15ee: Qe,
      __wbg_end_5a7ce60dc0f49d42: vn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Wf,
      __wbg_set_required_features_505229173e5ae00f: Vf,
      __wbg_set_label_fcbb40adcedf7a3a: ff,
      __wbg_requestDevice_acf949c0a7d11096: bc,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: rr,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: Yn,
      __wbg_set_device_cf77f0192bc5144c: Aa,
      __wbg_set_format_f98f8a95c86d8cc1: Wa,
      __wbg_set_usage_e94a8ea3a622b561: vo,
      __wbg_set_alpha_mode_ea0e62378a600722: qc,
      __wbg_set_view_formats_57015785ec512612: To,
      __wbg_configure_9ddad01510ae8865: Ve,
      __wbg_set_dimension_f73df134b3cb9008: Pa,
      __wbg_set_format_17bbec4e26222ce0: Oa,
      __wbg_set_aspect_24f00699ffc05e48: Uc,
      __wbg_set_base_array_layer_8a27534c79ebf816: Nc,
      __wbg_set_array_layer_count_fbec00646c2f76f0: Vc,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: Qc,
      __wbg_set_mip_level_count_11613862db4f5326: Sf,
      __wbg_set_label_a9e60f11d8f6d907: rf,
      __wbg_set_usage_8a7a3a48dde89c84: So,
      __wbg_createView_da8865cdd09ec9d5: yt,
      __wbg_set_power_preference_ad90ccb2239fef97: Of,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: nc,
      __wbg_queue_19586e9507f5e981: Kb,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: Mr,
      __wbg_drawIndexed_61f900a3bae1176a: mn,
      __wbg_setPipeline_beee24fb5690e169: vc,
      __wbg_setBindGroup_59293f4cce3ae9cc: yc,
      __wbg_setBindGroup_1e02fb4f10e03fb5: xc,
      __wbg_setIndexBuffer_1cfc93f884167fc9: hc,
      __wbg_setIndexBuffer_f0e21a93f9ba1002: Sc,
      __wbg_setVertexBuffer_0e2ad0c3f14b93dc: Mc,
      __wbg_setVertexBuffer_5090dba5d6df1168: Fc,
      __wbg_set_binding_b9f5989194044799: Yc,
      __wbg_set_resource_e981078f9ddeee64: zf,
      __wbg_set_min_binding_size_c7f7fc1040f0d69b: xf,
      __wbg_set_has_dynamic_offset_45e6a78176745114: Na,
      __wbg_set_type_65c8734c99356bd7: po,
      __wbg_set_alpha_e58cc49c799f170e: Rc,
      __wbg_set_color_5c69a2b8e768328d: ca,
      __wbg_set_attributes_9241554310424d07: jc,
      __wbg_set_array_stride_6ac1c0f48cbb1a6e: Wc,
      __wbg_set_step_mode_e6ef4bb885b3b66a: ao,
      __wbg_set_buffer_c7c4bf990df518a5: ea,
      __wbg_set_visibility_db1e452e6f23b84d: ko,
      __wbg_set_binding_f152b4f7c9a738e4: Hc,
      __wbg_set_sampler_a3c99ec90976e6ff: Qf,
      __wbg_set_texture_b1e40b7ea5ec46d9: so,
      __wbg_set_storage_texture_e6cb7da67d8c6fce: fo,
      __wbg_set_external_texture_743e2b3e660a1b87: Ea,
      __wbg_set_format_313c8f10a7e36a0c: Ga,
      __wbg_set_offset_697e85d970df2f50: Tf,
      __wbg_set_shader_location_01be15233cdb0803: Xf,
      __wbg_set_buffer_9e1ebf8ed6567298: _a,
      __wbg_set_offset_99d8916143968ec7: Bf,
      __wbg_set_size_4a5f3caa1cb0f6ec: $f,
      __wbg_set_type_8131ac6aa51a1923: xo,
      __wbg_set_multisampled_2ae606400626ad4f: Mf,
      __wbg_set_sample_type_12f50c8927ad99ab: Nf,
      __wbg_set_view_dimension_e40d2151f56ba216: Fo,
      __wbg_set_format_fa63d24489fef366: Ua,
      __wbg_set_access_318627865be26608: Lc,
      __wbg_set_view_dimension_7031d64401f616a4: Mo,
      __wbg_set_format_237204cc87ea4982: qa,
      __wbg_set_blend_450723fd40147c64: Jc,
      __wbg_set_write_mask_fc328072f01cb48d: Oo,
      __wbg_set_load_op_de7ca59cc25dfb40: df,
      __wbg_set_store_op_5185ea291265ee63: oo,
      __wbg_set_view_330ed9fc9fcc4d01: Do,
      __wbg_set_clear_value_576d8a3bda7ba8cc: ra,
      __wbg_set_resolve_target_cce9edc587b4211e: Uf,
      __wbg_queueMicrotask_5bb536982f78a56f: zb,
      __wbg_queueMicrotask_0aa0a927f78f5d98: Ub,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: Br,
      __wbg_blendFunc_2ef59299d10c662d: J_,
      __wbg_colorMask_177d9762658e5e28: Be,
      __wbg_depthFunc_f670d4cbb9cd0913: Qt,
      __wbg_depthMask_75a36d0065471a4b: $t,
      __wbg_fenceSync_c52a4e24eabfa0d3: Pn,
      __wbg_frontFace_d4a6507ad2939b5c: Vn,
      __wbg_uniform1ui_a0f911ff174715d0: R0,
      __wbg_beginQuery_0fdf154e1da0e73d: M_,
      __wbg_bindBuffer_c9068e8712a034f5: E_,
      __wbg_blendColor_e799d452ab2a5788: K_,
      __wbg_clearDepth_670099db422a4f91: Se,
      __wbg_deleteSync_c8e4a9c735f71d18: qt,
      __wbg_depthRange_337bf254e67639bb: Yt,
      __wbg_drawArrays_075228181299b824: un,
      __wbg_readBuffer_9eb461d6857295f0: Nb,
      __wbg_useProgram_fe720ade4d3b6edb: mu,
      __wbg_bindSampler_96f0e90e7bc31da9: G_,
      __wbg_bindTexture_b2b7b1726a83f93e: V_,
      __wbg_createQuery_7988050efd7e4c48: ct,
      __wbg_deleteQuery_ea8bf1954febd774: kt,
      __wbg_drawBuffers_5eccfaacc6560299: sn,
      __wbg_linkProgram_6600dd2c0863bbfd: Vr,
      __wbg_pixelStorei_2a65936c11b710fe: Sb,
      __wbg_stencilMask_732dcc5aada10e4c: t0,
      __wbg_attachShader_b36058e5c9eeaf54: P_,
      __wbg_clearStencil_5d243d0dff03c315: ve,
      __wbg_createBuffer_26534c05e01b8559: $e,
      __wbg_createShader_e3ac08ed8c5b14b2: gt,
      __wbg_deleteBuffer_ab099883c168644d: Pt,
      __wbg_deleteShader_aaf3b520a64d5d9d: Ot,
      __wbg_getExtension_3c0cb5ae01bb4b17: Jn,
      __wbg_getParameter_2e1f97ecaab76274: nr,
      __wbg_shaderSource_32425cfe6e5a1e52: Vo,
      __wbg_activeTexture_6f9a710514686c24: p_,
      __wbg_blendEquation_e9b99928ed1494ad: $_,
      __wbg_compileShader_94718a93495d565d: Ee,
      __wbg_createProgram_9b7710a1f2701c2c: bt,
      __wbg_createSampler_da6bb96c9ffaaa27: it,
      __wbg_createTexture_16d2c8a3d7d4a75a: wt,
      __wbg_deleteProgram_9298fb3e3c1d3a78: Tt,
      __wbg_deleteSampler_c6b68c4071841afa: Ct,
      __wbg_deleteTexture_9d411c0e60ffa324: Vt,
      __wbg_polygonOffset_4b3158d8ed028862: Mb,
      __wbg_texParameteri_0d45be2c88d6bad8: d0,
      __wbg_texStorage2D_9504743abf5a986a: s0,
      __wbg_texStorage3D_e9e1b58fee218abe: w0,
      __wbg_bindFramebuffer_031c73ba501cb8f6: C_,
      __wbg_blitFramebuffer_d730a23ab4db248e: _e,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: R_,
      __wbg_bindVertexArray_78220d1edb1d2382: z_,
      __wbg_createFramebuffer_41512c38358a41c4: _t,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: Ft,
      __wbg_getSyncParameter_7d11ab875b41617e: mr,
      __wbg_samplerParameterf_f070d2b69b1e2d46: dc,
      __wbg_samplerParameteri_8e4c4bcead0ee669: gc,
      __wbg_blendFuncSeparate_95465944f788a092: Y_,
      __wbg_createRenderbuffer_a601226a6a680dbe: ot,
      __wbg_createVertexArray_ad5294951ae57497: xt,
      __wbg_deleteRenderbuffer_096edada57729468: Lt,
      __wbg_deleteVertexArray_7bc7f92769862f93: Ut,
      __wbg_getQueryParameter_5d6af051438ae479: ur,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: dr,
      __wbg_stencilOpSeparate_4657523b1d3b184f: n0,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: B_,
      __wbg_bufferData_32d26eba0c74a53c: ce,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: br,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: sr,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: yr,
      __wbg_readPixels_6ea8e288a8673282: Xb,
      __wbg_renderbufferStorage_1bc02383614b76b2: _c,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: Ke,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: Ne,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: on,
      __wbg_getIndexedParameter_ca1693c768bc4934: Zn,
      __wbg_getProgramParameter_92e4540ca9da06b2: fr,
      __wbg_stencilFuncSeparate_10d043d0af14366f: Ho,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: Zo,
      __wbg_texImage3D_2082006a8a9b28a7: u0,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: eu,
      __wbg_vertexAttribDivisor_744c0ca468594894: hu,
      __wbg_framebufferTexture2D_c283e928186aa542: On,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: Lr,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: Q_,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: pr,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: Ln,
      __wbg_getSupportedExtensions_57142a6b598d7787: wr,
      __wbg_clientWaitSync_21865feaeb76a9a5: Me,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: Rn,
      __wbg_texSubImage3D_59b8e24fb05787aa: F0,
      __wbg_uniform2fv_2fb47cfe06330cc7: G0,
      __wbg_uniform2iv_095baf208f172131: V0,
      __wbg_uniform3fv_c0872003729939a5: j0,
      __wbg_uniform3iv_6aa2b0791e659d14: K0,
      __wbg_uniform4fv_498bd80dc5aa16ff: Y0,
      __wbg_uniform4iv_8a8219fda39dffd5: Z0,
      __wbg_enableVertexAttribArray_475e06c31777296d: pn,
      __wbg_uniform2uiv_3030d7e769f5e82a: U0,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: Q0,
      __wbg_uniform4uiv_046ee400bb80547d: _u,
      __wbg_disableVertexAttribArray_24a020060006b10f: en,
      __wbg_clearBufferfv_ac87d92e2f45d80c: pe,
      __wbg_clearBufferiv_69ff24bb52ec4c88: xe,
      __wbg_clearBufferuiv_8ad59a8219aafaca: ye,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: vu,
      __wbg_drawElementsInstanced_d41fc920ae24717c: ln,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: Zb,
      __wbg_texSubImage3D_45591e5655d1ed5c: P0,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: tu,
      __wbg_uniformMatrix3fv_6f822361173d8046: cu,
      __wbg_uniformMatrix4fv_0e724dbebd372526: uu,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: Su,
      __wbg_bindBufferRange_009d206fe9e4151e: k_,
      __wbg_bufferData_98f6c413a8f0f139: fe,
      __wbg_texSubImage3D_3b653017c4c5d721: D0,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: ru,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: bu,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: fu,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: ou,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: du,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: gu,
      __wbg_readPixels_55b18304384e073d: Qb,
      __wbg_texImage3D_bd2b0bd2cfcdb278: i0,
      __wbg_texSubImage3D_47643556a8a4bf86: M0,
      __wbg_texSubImage3D_18d7f3c65567c885: A0,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: T0,
      __wbg_texSubImage3D_1102c12a20bf56d5: I0,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: Re,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: Ge,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: ze,
      __wbg_bufferSubData_3e902f031adf13fd: ue,
      __wbg_compressedTexSubImage2D_684350eb62830032: Oe,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: qe,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Un,
      __wbg_texSubImage2D_edf5bd70fda3feaf: v0,
      __wbg_clear_7187030f892c5ca0: Pe,
      __wbg_flush_e322496f5412e567: Bn,
      __wbg_texImage2D_13414a4692836804: f0,
      __wbg_texSubImage2D_bf72e56edeeed376: y0,
      __wbg_texSubImage2D_e193f1d28439217c: S0,
      __wbg_enable_d1ac04dfdd2fb3ae: yn,
      __wbg_texSubImage2D_117d29278542feb0: l0,
      __wbg_texSubImage2D_bd034db2e58c352c: x0,
      __wbg_texSubImage2D_5d270af600a7fc4a: p0,
      __wbg_texSubImage2D_d17a39cdec4a3495: h0,
      __wbg_disable_7fe6fb3e97717f88: nn,
      __wbg_scissor_2ff8f18f05a6d408: lc,
      __wbg_texImage2D_087ef94df78081f0: a0,
      __wbg_viewport_df236eac68bc7467: Du,
      __wbg_cullFace_e7e711a14d2c3f48: It,
      __wbg_endQuery_54f0627d4c931318: Sn,
      __wbg_uniform1f_b500ede5b612bea2: L0,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: O0,
      __wbg_uniform4f_f6b5e2024636033a: $0,
      __wbg_instanceof_Window_ed49b2db8df90359: kr,
      __wbg_matchMedia_91d4fc9729dc3c84: Kr,
      __wbg_queueMicrotask_885fd8605352e25d: jb,
      __wbg_devicePixelRatio_5c458affc89fc209: _n,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Kn,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: we,
      __wbg_requestIdleCallback_c9c643f8210d435b: oc,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: se,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: rc,
      __wbg_clearTimeout_df03cf00269bc442: Ae,
      __wbg_setTimeout_681abd84926a4da3: Dc,
      __wbg_setTimeout_eff32631ea138533: Pc,
      __wbg_document_ee35a3d3ae34ef6c: an,
      __wbg_navigator_43be698ba96fc088: Jr,
      __wbg_setAttribute_cc8e4c8a2a008508: pc,
      __wbg_setPointerCapture_420db6f6826eb74b: Ic,
      __wbg_activeElement_1554b6917654f8d6: m_,
      __wbg_createElement_49f60fdcaae809c8: Ze,
      __wbg_querySelector_c3b0df2d58eec220: Wb,
      __wbg_visibilityState_43b7b74940e07d22: Pu,
      __wbg_getElementById_e34377b79d7285f6: Hn,
      __wbg_fullscreenElement_25b445e2961e68ba: Wn,
      __wbg_querySelectorAll_1283aae52043a951: Vb,
      __wbg_body_f67922363a220026: te,
      __wbg_navigator_4478931f32ebca57: Zr,
      __wbg_focus_128ff465f65677cc: kn,
      __wbg_style_0b7c9bd318f8b807: b0,
      __wbg_blendFunc_446658e7231ab9c8: Z_,
      __wbg_colorMask_7a8dbc86e7376a9b: ke,
      __wbg_depthFunc_eb3aa05361dd2eaa: Nt,
      __wbg_depthMask_103091329ca1a750: Xt,
      __wbg_frontFace_027e2ec7a7bc347c: Gn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: L_,
      __wbg_blendColor_1d50ac87d9a2794b: j_,
      __wbg_clearDepth_2b109f644a783a53: he,
      __wbg_depthRange_5579d448b9d7de57: Ht,
      __wbg_drawArrays_2be89c369a29f30b: dn,
      __wbg_useProgram_e82c1a5f87d81579: lu,
      __wbg_bindTexture_ec13ddcb9dc8e032: W_,
      __wbg_linkProgram_be6b825cf66d177b: Wr,
      __wbg_pixelStorei_f7cc498f52d523f1: vb,
      __wbg_stencilMask_0eca090c4c47f8f7: e0,
      __wbg_attachShader_32114efcf2744eb6: D_,
      __wbg_clearStencil_aa65955bb39d8c18: Ie,
      __wbg_createBuffer_c4ec897aacc1b91c: Ye,
      __wbg_createShader_f2b928ca9a426b14: st,
      __wbg_deleteBuffer_22fcc93912cbf659: Dt,
      __wbg_deleteShader_ff70ca962883e241: Rt,
      __wbg_getParameter_1ecb910cfdd21f88: tr,
      __wbg_shaderSource_8f4bda03f70359df: Wo,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: x_,
      __wbg_blendEquation_82202f34c4c00e50: X_,
      __wbg_compileShader_63b824e86bb00b8f: Le,
      __wbg_createProgram_98aaa91f7c81c5e2: rt,
      __wbg_createTexture_f9451a82c7527ce2: mt,
      __wbg_deleteProgram_f354e79b8cae8076: Bt,
      __wbg_deleteTexture_2be78224e5584a8b: Gt,
      __wbg_polygonOffset_24a8059deb03be92: Pb,
      __wbg_texParameteri_ec937d2161018946: g0,
      __wbg_bindFramebuffer_7815ca611abb057f: O_,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: q_,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: et,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: Mt,
      __wbg_blendFuncSeparate_f366c170c5097fbe: H_,
      __wbg_createRenderbuffer_1e567f2f4d461710: ft,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: Et,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: ir,
      __wbg_stencilOpSeparate_de257f3c29e604cd: r0,
      __wbg_bindAttribLocation_5cfc7fa688df5051: T_,
      __wbg_bufferData_1be8450fab534758: be,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: cr,
      __wbg_getShaderParameter_786fd84f85720ca8: gr,
      __wbg_getUniformLocation_71c070e6644669ad: xr,
      __wbg_renderbufferStorage_6348154d30979c44: ec,
      __wbg_copyTexSubImage2D_417a65926e3d2490: je,
      __wbg_getProgramParameter_43fbc6d2613c08b3: ar,
      __wbg_stencilFuncSeparate_1798f5cca257f313: Jo,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: _0,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: Cn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: N_,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: En,
      __wbg_uniform2fv_04c304b93cbf7f55: q0,
      __wbg_uniform2iv_ccf2ed44ac8e602e: W0,
      __wbg_uniform3fv_aa35ef21e14d5469: z0,
      __wbg_uniform3iv_e912f444d4ff8269: N0,
      __wbg_uniform4fv_e6c73702e9a3be5c: H0,
      __wbg_uniform4iv_375332584c65e61b: J0,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: xn,
      __wbg_disableVertexAttribArray_4bac633c27bae599: tn,
      __wbg_vertexAttribPointer_adbd1853cce679ad: Iu,
      __wbg_uniformMatrix2fv_e2806601f5b95102: nu,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: au,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: iu,
      __wbg_bufferData_52235e85894af988: ae,
      __wbg_readPixels_95b2464a7bb863a2: $b,
      __wbg_bufferSubData_33eebcc173094f6a: oe,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: Ce,
      __wbg_clear_4d801d0d054c3579: De,
      __wbg_flush_7777597fd43065db: Tn,
      __wbg_enable_fee40f19b7053ea3: hn,
      __wbg_texSubImage2D_19ae4cadb809f264: m0,
      __wbg_disable_bd37bdcca1764aea: rn,
      __wbg_scissor_b870b1434a9c25b4: mc,
      __wbg_texImage2D_e71049312f3172d9: o0,
      __wbg_viewport_174ae1c2209344ae: Au,
      __wbg_cullFace_39500f654c67a205: vt,
      __wbg_uniform1f_c148eeaf4b531059: E0,
      __wbg_uniform1i_9f3f72dbcb98ada9: C0,
      __wbg_uniform4f_71ec75443e58cecc: X0,
      __wbg_movementX_ff6524e06bc35b6a: Yr,
      __wbg_movementY_4cec81d9850ad239: Hr,
      __wbg_button_d86841d0a03adc44: ie,
      __wbg_altKey_8155c319c215e3aa: v_,
      __wbg_buttons_a158a0cad3175f24: de,
      __wbg_ctrlKey_96ff94f8b18636a3: St,
      __wbg_metaKey_374999c340f70626: Xr,
      __wbg_shiftKey_5558a3288542c985: Uo,
      __wbg_key_d41e8e825e6bb0e9: Or,
      __wbg_code_dee0dae4730408e1: Te,
      __wbg_repeat_375aae5c5c6a0258: tc,
      __wbg_altKey_73c1173ba53073d5: S_,
      __wbg_ctrlKey_09a1b54d77dea92b: ht,
      __wbg_location_22bcb1a188a96eb1: Ur,
      __wbg_metaKey_67113fb40365d736: $r,
      __wbg_shiftKey_564be91ec842bcc4: zo,
      __wbg_addListener_03e8162d7e03c823: h_,
      __wbg_removeListener_e2a199028636dcf5: Hb,
      __wbg_media_7bcde781569bca4c: Qr,
      __wbg_matches_4b5c22bd830f7bb3: Nr,
      __wbg_preventDefault_cdcfcd7e301b9702: Cb,
      __wbg_userAgent_34463fd660ba4a2a: xu,
      __wbg_new_b949e7f56150a5d1: ab,
      __wbg_abort_2f0584e03e8e3950: l_,
      __wbg_signal_d1285ecab4ebc5ad: jo,
      __wbg_blockSize_ef9a626745d7dfac: ee,
      __wbg_inlineSize_3e4e7e8c813884fd: Pr,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: U_,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: pt,
      __wbg_deleteVertexArrayOES_197df47ef9684195: Wt,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: qn,
      __wbg_contentRect_79b98e4d4f4728a4: Ue,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: Zt,
      __wbg_isIntersecting_6807d592d68e059e: Er,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: ub,
      __wbg_get_d8db2ad31d529ff8: Sr,
      __wbg_disconnect_5202f399852258c0: cn,
      __wbg_observe_1ae37077cf10b11b: db,
      __wbg_new_2e2be9617c4407d5: _b,
      __wbg_observe_b9abc08d6d829e56: sb,
      __wbg_unobserve_b4eb8d945252124f: wu,
      __wbg_set_type_148de20768639245: mo,
      __wbg_set_height_f21f985387070100: $a,
      __wbg_getContext_2a5764d48600bc43: Qn,
      __wbg_getContext_b28d2db7bd648242: Xn,
      __wbg_set_width_d60bc4f2f20c56a4: Co,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: Tr,
      __wbg_queryCounterEXT_b578f07c30420446: Gb,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: lr,
      __wbg_set_height_b386c0f603610637: Xa,
      __wbg_getContext_2966500392030d63: Nn,
      __wbg_getContext_de810d9f187f29ca: $n,
      __wbg_set_width_7f07715a20503914: Lo,
      __wbg_setProperty_cbb25c4e74285b39: Ac,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: Jb,
      __wbg_getPropertyValue_d6911b2a1f9acba9: or,
      __wbg_disconnect_0a2d26237dfc1e9e: bn,
      __wbg_new_8c6e67a40cee1f83: cb,
      __wbg_observe_2a9d63459970a2c1: gb,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: ic,
      __wbg_createObjectURL_918185db6a10a0c8: tt,
      __wbg_deltaMode_a1d1df711e44cefc: zt,
      __wbg_deltaX_f0ca9116db5f7bc1: jt,
      __wbg_deltaY_eb94120160ac821c: Kt,
      __wbg_pointerId_466b1bdcaf2fe835: Ab,
      __wbg_pointerType_ba53c6f18634a26d: Db,
      __wbg_getCoalescedEvents_8d19e426e1461e96: jn,
      __wbg_pressure_f01a99684f7a6cf3: Eb,
      __wbg_appendChild_dea38765a26d346d: A_,
      __wbg_contains_1056459c33f961e8: We,
      __wbg_new_6f0524fbfa300c47: rb,
      __wbg_port1_6251ddc5cf5c9287: Fb,
      __wbg_port2_b2a294b0ede1e13c: Tb,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: fn,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: yu,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: wn,
      __wbg_set_box_73d3355c6f95f24d: Zc,
      __wbg_addEventListener_3acb0aad4483804c: y_,
      __wbg_removeEventListener_e63328781a5b9af9: Yb,
      __wbg_postMessage_e45c89e4826cf2ef: kb,
      __wbg_new_4f8f3c123e474358: nb,
      __wbg_log_6b5ca2e6124b2808: zr,
      __wbg_info_148d043840582012: Dr,
      __wbg_warn_f7ae1b2e66ccb930: Mu,
      __wbg_debug_a4099fa12db6cd61: At,
      __wbg_error_9a7fe3f932034cde: An,
      __wbg_error_f852e41c69b0bd84: Dn,
      __wbg_postMessage_46eeeef39934b448: Bb,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: kf,
      __wbg_close_fad2f0ee451926ed: Fe,
      __wbg_start_ffb4b426b1e661bd: No,
      __wbg_width_7444cca5dfea0645: Bu,
      __wbg_height_c2027cf67d1c9b11: Ir,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: gn,
      __wbg_persisted_de98357e1aaf6546: hb,
      __wbg_new_3eb36ae241fe6f44: tb,
      __wbg_new_361308b2356cecd0: eb,
      __wbg_new_no_args_1c7c842f08d00ebb: fb,
      __wbg_length_32ed9a279acd054c: qr,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: Rb,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: ob,
      __wbg_set_25cf9deff6bf0ea8: Tc,
      __wbg_get_9b94d73e6221f75c: hr,
      __wbg_of_f915f7cd925b21a5: lb,
      __wbg_of_9ab14f9d4bfb5040: wb,
      __wbg_length_35a7bace40f36eac: Gr,
      __wbg_push_8ffdcb2063340ba5: qb,
      __wbg_includes_32215c836f1cd3fb: Ar,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: er,
      __wbg_is_f29129f676e5410c: Cr,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: Xo,
      __wbg_call_389efe28435a9388: ge,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: $o,
      __wbg_static_accessor_GLOBAL_12837167ad935116: Qo,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: Yo,
      __wbg_then_b9e7b3b5f1a9e1b5: k0,
      __wbg_catch_c1f8c7623b458214: me,
      __wbg_then_0d9fe2c7b1857d32: B0,
      __wbg_resolve_002c4b7d9d8f6b64: uc,
      __wbg_set_6cb8631f80447a67: Bc,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: d_,
      __wbg___wbindgen_throw_be289d5034ed271b: s_,
      __wbg___wbindgen_is_null_ac34f5003991759a: u_,
      __wbg___wbindgen_string_get_72fb696202c56729: g_,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: a_,
      __wbg___wbindgen_is_function_0095a73b8b156f76: o_,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: i_,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: f_,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: w_,
      __wbindgen_cast_0000000000000001: Eu,
      __wbindgen_cast_0000000000000002: Cu,
      __wbindgen_cast_0000000000000003: Ou,
      __wbindgen_cast_0000000000000004: Ru,
      __wbindgen_cast_0000000000000005: qu,
      __wbindgen_cast_0000000000000006: Gu,
      __wbindgen_cast_0000000000000007: Vu,
      __wbindgen_cast_0000000000000008: Wu,
      __wbindgen_cast_0000000000000009: Uu,
      __wbindgen_cast_000000000000000a: zu,
      __wbindgen_cast_000000000000000b: ju,
      __wbindgen_cast_000000000000000c: Ku,
      __wbindgen_cast_000000000000000d: Nu,
      __wbindgen_cast_000000000000000e: Qu,
      __wbindgen_cast_000000000000000f: Xu,
      __wbindgen_cast_0000000000000010: $u,
      __wbindgen_cast_0000000000000011: Yu,
      __wbindgen_cast_0000000000000012: Hu,
      __wbindgen_cast_0000000000000013: Ju
    }
  }, n_), Ei = S.memory, Ci = S.main, Oi = S.run_web, Ri = S.__wasm_bindgen_func_elem_2603, qi = S.__wasm_bindgen_func_elem_4415, Gi = S.__wasm_bindgen_func_elem_2942, Vi = S.__wasm_bindgen_func_elem_2936, Wi = S.__wasm_bindgen_func_elem_4416, Ui = S.__wasm_bindgen_func_elem_2934, zi = S.__wbindgen_export, ji = S.__wbindgen_export2, Ki = S.__wbindgen_export3, Ni = S.__wbindgen_export4, e_ = S.__wbindgen_start, Qi = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_2603: Ri,
    __wasm_bindgen_func_elem_2934: Ui,
    __wasm_bindgen_func_elem_2936: Vi,
    __wasm_bindgen_func_elem_2942: Gi,
    __wasm_bindgen_func_elem_4415: qi,
    __wasm_bindgen_func_elem_4416: Wi,
    __wbindgen_export: zi,
    __wbindgen_export2: ji,
    __wbindgen_export3: Ki,
    __wbindgen_export4: Ni,
    __wbindgen_start: e_,
    main: Ci,
    memory: Ei,
    run_web: Oi
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Li(Qi);
  e_();
})();
export {
  __tla,
  $i as run_web
};
