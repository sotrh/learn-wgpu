import { _ as Y } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let lu;
let __tla = (async () => {
  const H = "/learn-wgpu/assets/demo_bg-xinK5NF4.wasm";
  lu = function() {
    d.run_web();
  };
  function J(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function Z(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function ee(e) {
    const _ = t(e).WorkerGlobalScope;
    return b(_);
  }
  function _e(e) {
    const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function te(e, _) {
    const n = U(t(_)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function ne(e) {
    return typeof t(e) == "function";
  }
  function re(e) {
    return t(e) === null;
  }
  function ce(e) {
    return t(e) === void 0;
  }
  function be(e, _) {
    const n = t(_), r = typeof n == "number" ? n : void 0;
    l().setFloat64(e + 8, s(r) ? 0 : r, true), l().setInt32(e + 0, !s(r), true);
  }
  function ae(e, _) {
    const n = t(_), r = typeof n == "string" ? n : void 0;
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function fe(e, _) {
    throw new Error(w(e, _));
  }
  function oe(e) {
    t(e)._wbg_cb_unref();
  }
  function ue(e) {
    t(e).abort();
  }
  function ie(e) {
    const _ = t(e).activeElement;
    return s(_) ? 0 : b(_);
  }
  function de(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function ge(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function se() {
    return u(function(e, _, n, r) {
      t(e).addEventListener(w(_, n), t(r));
    }, arguments);
  }
  function we() {
    return u(function(e, _) {
      t(e).addListener(t(_));
    }, arguments);
  }
  function le(e) {
    return t(e).altKey;
  }
  function me(e) {
    return t(e).altKey;
  }
  function pe(e, _, n) {
    const r = t(e).animate(t(_), t(n));
    return b(r);
  }
  function xe() {
    return u(function(e, _) {
      const n = t(e).appendChild(t(_));
      return b(n);
    }, arguments);
  }
  function ye(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function he(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function Se(e, _, n) {
    t(e).beginQuery(_ >>> 0, t(n));
  }
  function ve() {
    return u(function(e, _) {
      const n = t(e).beginRenderPass(t(_));
      return b(n);
    }, arguments);
  }
  function Ie(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function Ae(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function De(e, _, n, r, c, a) {
    t(e).bindBufferRange(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function Pe(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function Me(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function Fe(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function ke(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function Te(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Ee(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Le(e, _, n) {
    t(e).bindSampler(_ >>> 0, t(n));
  }
  function Ce(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function Oe(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function Re(e, _) {
    t(e).bindVertexArrayOES(t(_));
  }
  function Be(e, _) {
    t(e).bindVertexArray(t(_));
  }
  function qe(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function Ve(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function Ge(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function We(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function Ue(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function je(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function Ke(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function ze(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Ne(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function Qe(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function Xe(e, _, n, r, c, a, f, o, i, g, m) {
    t(e).blitFramebuffer(_, n, r, c, a, f, o, i, g >>> 0, m >>> 0);
  }
  function $e(e) {
    return t(e).blockSize;
  }
  function Ye(e) {
    const _ = t(e).body;
    return s(_) ? 0 : b(_);
  }
  function He(e, _) {
    const n = t(_).brand, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Je(e) {
    const _ = t(e).brands;
    return b(_);
  }
  function Ze(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function e_(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function __(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function t_(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function n_(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function r_(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function c_(e) {
    return t(e).button;
  }
  function b_(e) {
    return t(e).buttons;
  }
  function a_() {
    return u(function(e, _) {
      const n = t(e).call(t(_));
      return b(n);
    }, arguments);
  }
  function f_() {
    return u(function(e, _) {
      t(e).cancelAnimationFrame(_);
    }, arguments);
  }
  function o_(e, _) {
    t(e).cancelIdleCallback(_ >>> 0);
  }
  function u_(e) {
    t(e).cancel();
  }
  function i_(e, _) {
    const n = t(e).catch(t(_));
    return b(n);
  }
  function d_(e, _, n, r, c) {
    t(e).clearBufferfv(_ >>> 0, n, p(r, c));
  }
  function g_(e, _, n, r, c) {
    t(e).clearBufferiv(_ >>> 0, n, A(r, c));
  }
  function s_(e, _, n, r, c) {
    t(e).clearBufferuiv(_ >>> 0, n, E(r, c));
  }
  function w_(e, _) {
    t(e).clearDepth(_);
  }
  function l_(e, _) {
    t(e).clearDepth(_);
  }
  function m_(e, _) {
    t(e).clearStencil(_);
  }
  function p_(e, _) {
    t(e).clearStencil(_);
  }
  function x_(e, _) {
    t(e).clearTimeout(_);
  }
  function y_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function h_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function S_(e, _, n, r) {
    return t(e).clientWaitSync(t(_), n >>> 0, r >>> 0);
  }
  function v_(e) {
    t(e).close();
  }
  function I_(e, _) {
    const n = t(_).code, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function A_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function D_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function P_(e, _) {
    t(e).compileShader(t(_));
  }
  function M_(e, _) {
    t(e).compileShader(t(_));
  }
  function F_(e, _, n, r, c, a, f, o, i) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(i));
  }
  function k_(e, _, n, r, c, a, f, o, i) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(i));
  }
  function T_(e, _, n, r, c, a, f, o, i, g) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i, g);
  }
  function E_(e, _, n, r, c, a, f, o, i, g, m) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, t(m));
  }
  function L_(e, _, n, r, c, a, f, o, i, g, m, h) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m, h);
  }
  function C_() {
    return u(function(e, _) {
      t(e).configure(t(_));
    }, arguments);
  }
  function O_(e, _) {
    return t(e).contains(t(_));
  }
  function R_(e) {
    const _ = t(e).contentRect;
    return b(_);
  }
  function B_(e, _, n, r, c, a) {
    t(e).copyBufferSubData(_ >>> 0, n >>> 0, r, c, a);
  }
  function q_(e, _, n, r, c, a, f, o, i) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, i);
  }
  function V_(e, _, n, r, c, a, f, o, i) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, i);
  }
  function G_(e, _, n, r, c, a, f, o, i, g) {
    t(e).copyTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g);
  }
  function W_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function U_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function j_(e, _) {
    const n = t(e).createCommandEncoder(t(_));
    return b(n);
  }
  function K_() {
    return u(function(e, _, n) {
      const r = t(e).createElement(w(_, n));
      return b(r);
    }, arguments);
  }
  function z_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function N_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function Q_() {
    return u(function(e, _) {
      const n = URL.createObjectURL(t(_)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function X_(e, _) {
    const n = t(e).createPipelineLayout(t(_));
    return b(n);
  }
  function $_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function Y_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function H_(e) {
    const _ = t(e).createQuery();
    return s(_) ? 0 : b(_);
  }
  function J_() {
    return u(function(e, _) {
      const n = t(e).createRenderPipeline(t(_));
      return b(n);
    }, arguments);
  }
  function Z_(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function et(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function _t(e) {
    const _ = t(e).createSampler();
    return s(_) ? 0 : b(_);
  }
  function tt(e, _) {
    const n = t(e).createShaderModule(t(_));
    return b(n);
  }
  function nt(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function rt(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function ct(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function bt(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function at(e) {
    const _ = t(e).createVertexArrayOES();
    return s(_) ? 0 : b(_);
  }
  function ft(e) {
    const _ = t(e).createVertexArray();
    return s(_) ? 0 : b(_);
  }
  function ot() {
    return u(function(e, _) {
      const n = t(e).createView(t(_));
      return b(n);
    }, arguments);
  }
  function ut(e) {
    return t(e).ctrlKey;
  }
  function it(e) {
    return t(e).ctrlKey;
  }
  function dt(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function gt(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function st(e) {
    console.debug(t(e));
  }
  function wt(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function lt(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function mt(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function pt(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function xt(e, _) {
    t(e).deleteProgram(t(_));
  }
  function yt(e, _) {
    t(e).deleteProgram(t(_));
  }
  function ht(e, _) {
    t(e).deleteQuery(t(_));
  }
  function St(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function vt(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function It(e, _) {
    t(e).deleteSampler(t(_));
  }
  function At(e, _) {
    t(e).deleteShader(t(_));
  }
  function Dt(e, _) {
    t(e).deleteShader(t(_));
  }
  function Pt(e, _) {
    t(e).deleteSync(t(_));
  }
  function Mt(e, _) {
    t(e).deleteTexture(t(_));
  }
  function Ft(e, _) {
    t(e).deleteTexture(t(_));
  }
  function kt(e, _) {
    t(e).deleteVertexArrayOES(t(_));
  }
  function Tt(e, _) {
    t(e).deleteVertexArray(t(_));
  }
  function Et(e) {
    return t(e).deltaMode;
  }
  function Lt(e) {
    return t(e).deltaX;
  }
  function Ct(e) {
    return t(e).deltaY;
  }
  function Ot(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Rt(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Bt(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function qt(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function Vt(e, _, n) {
    t(e).depthRange(_, n);
  }
  function Gt(e, _, n) {
    t(e).depthRange(_, n);
  }
  function Wt(e) {
    t(e).destroy();
  }
  function Ut(e) {
    const _ = t(e).devicePixelContentBoxSize;
    return b(_);
  }
  function jt(e) {
    return t(e).devicePixelRatio;
  }
  function Kt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function zt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function Nt(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Qt(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Xt(e) {
    t(e).disconnect();
  }
  function $t(e) {
    t(e).disconnect();
  }
  function Yt(e) {
    const _ = t(e).document;
    return s(_) ? 0 : b(_);
  }
  function Ht(e, _, n, r, c) {
    t(e).drawArraysInstancedANGLE(_ >>> 0, n, r, c);
  }
  function Jt(e, _, n, r, c) {
    t(e).drawArraysInstanced(_ >>> 0, n, r, c);
  }
  function Zt(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function en(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function _n(e, _) {
    t(e).drawBuffersWEBGL(t(_));
  }
  function tn(e, _) {
    t(e).drawBuffers(t(_));
  }
  function nn(e, _, n, r, c, a) {
    t(e).drawElementsInstancedANGLE(_ >>> 0, n, r >>> 0, c, a);
  }
  function rn(e, _, n, r, c, a) {
    t(e).drawElementsInstanced(_ >>> 0, n, r >>> 0, c, a);
  }
  function cn(e, _, n, r, c) {
    t(e).draw(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function bn(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function an(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function fn(e, _) {
    t(e).enable(_ >>> 0);
  }
  function on(e, _) {
    t(e).enable(_ >>> 0);
  }
  function un(e, _) {
    t(e).endQuery(_ >>> 0);
  }
  function dn(e) {
    t(e).end();
  }
  function gn(e, _) {
    let n, r;
    try {
      n = e, r = _, console.error(w(e, _));
    } finally {
      d.__wbindgen_export4(n, r, 1);
    }
  }
  function sn(e) {
    console.error(t(e));
  }
  function wn(e, _) {
    console.error(t(e), t(_));
  }
  function ln(e, _, n) {
    const r = t(e).fenceSync(_ >>> 0, n >>> 0);
    return s(r) ? 0 : b(r);
  }
  function mn(e) {
    const _ = t(e).finish();
    return b(_);
  }
  function pn(e, _) {
    const n = t(e).finish(t(_));
    return b(n);
  }
  function xn(e) {
    t(e).flush();
  }
  function yn(e) {
    t(e).flush();
  }
  function hn() {
    return u(function(e) {
      t(e).focus();
    }, arguments);
  }
  function Sn(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function vn(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function In(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function An(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Dn(e, _, n, r, c, a) {
    t(e).framebufferTextureLayer(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function Pn(e, _, n, r, c, a, f) {
    t(e).framebufferTextureMultiviewOVR(_ >>> 0, n >>> 0, t(r), c, a, f);
  }
  function Mn(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function Fn(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function kn(e) {
    const _ = t(e).fullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function Tn(e, _, n, r) {
    t(e).getBufferSubData(_ >>> 0, n, t(r));
  }
  function En(e) {
    const _ = t(e).getCoalescedEvents;
    return b(_);
  }
  function Ln(e) {
    const _ = t(e).getCoalescedEvents();
    return b(_);
  }
  function Cn() {
    return u(function(e, _) {
      const n = t(e).getComputedStyle(t(_));
      return s(n) ? 0 : b(n);
    }, arguments);
  }
  function On() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Rn() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Bn() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function qn() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function Vn() {
    return u(function(e) {
      const _ = t(e).getCurrentTexture();
      return b(_);
    }, arguments);
  }
  function Gn(e, _, n) {
    const r = t(e).getElementById(w(_, n));
    return s(r) ? 0 : b(r);
  }
  function Wn() {
    return u(function(e, _, n) {
      const r = t(e).getExtension(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Un() {
    return u(function(e, _, n) {
      const r = t(e).getIndexedParameter(_ >>> 0, n >>> 0);
      return b(r);
    }, arguments);
  }
  function jn() {
    return u(function(e, _, n) {
      const r = t(e).getMappedRange(_, n);
      return b(r);
    }, arguments);
  }
  function Kn(e, _) {
    const n = Object.getOwnPropertyDescriptor(t(e), t(_));
    return b(n);
  }
  function zn() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function Nn() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function Qn(e) {
    const _ = t(e).getPreferredCanvasFormat();
    return (T.indexOf(_) + 1 || 96) - 1;
  }
  function Xn(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function $n(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function Yn(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function Hn(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function Jn() {
    return u(function(e, _, n, r) {
      const c = t(_).getPropertyValue(w(n, r)), a = y(c, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function Zn(e, _, n) {
    const r = t(e).getQueryParameter(t(_), n >>> 0);
    return b(r);
  }
  function er(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function _r(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function tr(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function nr(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function rr(e) {
    const _ = t(e).getSupportedExtensions();
    return s(_) ? 0 : b(_);
  }
  function cr(e) {
    const _ = t(e).getSupportedProfiles();
    return s(_) ? 0 : b(_);
  }
  function br(e, _, n) {
    const r = t(e).getSyncParameter(t(_), n >>> 0);
    return b(r);
  }
  function ar(e, _, n, r) {
    return t(e).getUniformBlockIndex(t(_), w(n, r));
  }
  function fr(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function or(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function ur(e, _) {
    const n = t(e)[_ >>> 0];
    return b(n);
  }
  function ir(e, _) {
    const n = t(e)[_ >>> 0];
    return s(n) ? 0 : b(n);
  }
  function dr(e) {
    const _ = t(e).gpu;
    return b(_);
  }
  function gr(e) {
    return t(e).height;
  }
  function sr(e, _, n) {
    return t(e).includes(t(_), n);
  }
  function wr(e) {
    console.info(t(e));
  }
  function lr(e) {
    return t(e).inlineSize;
  }
  function mr(e) {
    let _;
    try {
      _ = t(e) instanceof GPUAdapter;
    } catch {
      _ = false;
    }
    return _;
  }
  function pr(e) {
    let _;
    try {
      _ = t(e) instanceof GPUCanvasContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function xr(e) {
    let _;
    try {
      _ = t(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function yr(e) {
    let _;
    try {
      _ = t(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function hr(e) {
    let _;
    try {
      _ = t(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function Sr() {
    return u(function(e, _, n) {
      t(e).invalidateFramebuffer(_ >>> 0, t(n));
    }, arguments);
  }
  function vr(e) {
    return t(e).isIntersecting;
  }
  function Ir(e, _) {
    return Object.is(t(e), t(_));
  }
  function Ar(e, _) {
    const n = t(_).key, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Dr(e, _) {
    const n = t(_).label, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Pr(e) {
    return t(e).length;
  }
  function Mr(e, _) {
    t(e).linkProgram(t(_));
  }
  function Fr(e, _) {
    t(e).linkProgram(t(_));
  }
  function kr(e) {
    return t(e).location;
  }
  function Tr(e) {
    console.log(t(e));
  }
  function Er(e, _, n, r) {
    const c = t(e).mapAsync(_ >>> 0, n, r);
    return b(c);
  }
  function Lr() {
    return u(function(e, _, n) {
      const r = t(e).matchMedia(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Cr(e) {
    return t(e).matches;
  }
  function Or(e, _) {
    const n = t(_).media, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Rr(e) {
    return t(e).metaKey;
  }
  function Br(e) {
    return t(e).metaKey;
  }
  function qr(e) {
    return t(e).movementX;
  }
  function Vr(e) {
    return t(e).movementY;
  }
  function Gr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function Wr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function Ur() {
    return u(function(e) {
      const _ = new ResizeObserver(t(e));
      return b(_);
    }, arguments);
  }
  function jr() {
    const e = new Object();
    return b(e);
  }
  function Kr() {
    const e = new Array();
    return b(e);
  }
  function zr() {
    return u(function(e, _) {
      const n = new Worker(w(e, _));
      return b(n);
    }, arguments);
  }
  function Nr() {
    return u(function() {
      const e = new MessageChannel();
      return b(e);
    }, arguments);
  }
  function Qr() {
    const e = new Error();
    return b(e);
  }
  function Xr() {
    return u(function(e) {
      const _ = new IntersectionObserver(t(e));
      return b(_);
    }, arguments);
  }
  function $r() {
    return u(function() {
      const e = new AbortController();
      return b(e);
    }, arguments);
  }
  function Yr(e, _) {
    const n = new Function(w(e, _));
    return b(n);
  }
  function Hr(e, _, n) {
    const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
    return b(r);
  }
  function Jr() {
    return u(function(e, _) {
      const n = new Blob(t(e), t(_));
      return b(n);
    }, arguments);
  }
  function Zr(e) {
    return t(e).now();
  }
  function ec(e, _, n) {
    t(e).observe(t(_), t(n));
  }
  function _c(e, _) {
    t(e).observe(t(_));
  }
  function tc(e, _) {
    t(e).observe(t(_));
  }
  function nc(e, _) {
    const n = Array.of(t(e), t(_));
    return b(n);
  }
  function rc(e) {
    const _ = Array.of(t(e));
    return b(_);
  }
  function cc(e) {
    return t(e).offsetX;
  }
  function bc(e) {
    return t(e).offsetY;
  }
  function ac(e) {
    const _ = t(e).onSubmittedWorkDone();
    return b(_);
  }
  function fc(e) {
    const _ = t(e).performance;
    return b(_);
  }
  function oc(e) {
    return t(e).persisted;
  }
  function uc(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function ic(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function dc(e) {
    t(e).play();
  }
  function gc(e) {
    return t(e).pointerId;
  }
  function sc(e, _) {
    const n = t(_).pointerType, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function wc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function lc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function mc(e) {
    const _ = t(e).port1;
    return b(_);
  }
  function pc(e) {
    const _ = t(e).port2;
    return b(_);
  }
  function xc() {
    return u(function(e, _) {
      t(e).postMessage(t(_));
    }, arguments);
  }
  function yc() {
    return u(function(e, _, n) {
      t(e).postMessage(t(_), t(n));
    }, arguments);
  }
  function hc(e, _, n) {
    const r = t(e).postTask(t(_), t(n));
    return b(r);
  }
  function Sc(e) {
    return t(e).pressure;
  }
  function vc(e) {
    t(e).preventDefault();
  }
  function Ic() {
    const e = ResizeObserverEntry.prototype;
    return b(e);
  }
  function Ac(e, _) {
    return t(e).push(t(_));
  }
  function Dc(e, _, n) {
    t(e).queryCounterEXT(t(_), n >>> 0);
  }
  function Pc() {
    return u(function(e, _, n) {
      const r = t(e).querySelectorAll(w(_, n));
      return b(r);
    }, arguments);
  }
  function Mc() {
    return u(function(e, _, n) {
      const r = t(e).querySelector(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Fc(e) {
    const _ = t(e).queueMicrotask;
    return b(_);
  }
  function kc(e) {
    queueMicrotask(t(e));
  }
  function Tc(e, _) {
    t(e).queueMicrotask(t(_));
  }
  function Ec(e) {
    const _ = t(e).queue;
    return b(_);
  }
  function Lc(e, _) {
    t(e).readBuffer(_ >>> 0);
  }
  function Cc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Oc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Rc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Bc() {
    return u(function(e, _, n, r) {
      t(e).removeEventListener(w(_, n), t(r));
    }, arguments);
  }
  function qc() {
    return u(function(e, _) {
      t(e).removeListener(t(_));
    }, arguments);
  }
  function Vc() {
    return u(function(e, _, n, r) {
      const c = t(_).removeProperty(w(n, r)), a = y(c, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function Gc(e, _, n, r, c, a) {
    t(e).renderbufferStorageMultisample(_ >>> 0, n, r >>> 0, c, a);
  }
  function Wc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function Uc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function jc(e) {
    return t(e).repeat;
  }
  function Kc(e, _) {
    const n = t(e).requestAdapter(t(_));
    return b(n);
  }
  function zc() {
    return u(function(e, _) {
      return t(e).requestAnimationFrame(t(_));
    }, arguments);
  }
  function Nc(e, _) {
    const n = t(e).requestDevice(t(_));
    return b(n);
  }
  function Qc(e) {
    const _ = t(e).requestFullscreen;
    return b(_);
  }
  function Xc(e) {
    const _ = t(e).requestFullscreen();
    return b(_);
  }
  function $c(e) {
    const _ = t(e).requestIdleCallback;
    return b(_);
  }
  function Yc() {
    return u(function(e, _) {
      return t(e).requestIdleCallback(t(_));
    }, arguments);
  }
  function Hc(e) {
    const _ = Promise.resolve(t(e));
    return b(_);
  }
  function Jc() {
    return u(function(e, _) {
      URL.revokeObjectURL(w(e, _));
    }, arguments);
  }
  function Zc(e, _, n, r) {
    t(e).samplerParameterf(t(_), n >>> 0, r);
  }
  function eb(e, _, n, r) {
    t(e).samplerParameteri(t(_), n >>> 0, r);
  }
  function _b(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function tb(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function nb(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function rb(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function cb() {
    return u(function(e, _, n, r, c) {
      t(e).setAttribute(w(_, n), w(r, c));
    }, arguments);
  }
  function bb(e, _) {
    t(e).setPipeline(t(_));
  }
  function ab() {
    return u(function(e, _) {
      t(e).setPointerCapture(_);
    }, arguments);
  }
  function fb() {
    return u(function(e, _, n, r, c) {
      t(e).setProperty(w(_, n), w(r, c));
    }, arguments);
  }
  function ob() {
    return u(function(e, _) {
      return t(e).setTimeout(t(_));
    }, arguments);
  }
  function ub() {
    return u(function(e, _, n) {
      return t(e).setTimeout(t(_), n);
    }, arguments);
  }
  function ib() {
    return u(function(e, _, n) {
      return Reflect.set(t(e), t(_), t(n));
    }, arguments);
  }
  function db(e, _) {
    t(e).a = _;
  }
  function gb(e, _) {
    t(e).alpha = t(_);
  }
  function sb(e, _) {
    t(e).alphaMode = M0[_];
  }
  function wb(e, _) {
    t(e).alphaToCoverageEnabled = _ !== 0;
  }
  function lb(e, _) {
    t(e).arrayLayerCount = _ >>> 0;
  }
  function mb(e, _) {
    t(e).arrayStride = _;
  }
  function pb(e, _) {
    t(e).aspect = C0[_];
  }
  function xb(e, _) {
    t(e).attributes = t(_);
  }
  function yb(e, _) {
    t(e).b = _;
  }
  function hb(e, _) {
    t(e).baseArrayLayer = _ >>> 0;
  }
  function Sb(e, _) {
    t(e).baseMipLevel = _ >>> 0;
  }
  function vb(e, _) {
    t(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function Ib(e, _) {
    t(e).bindGroupLayouts = t(_);
  }
  function Ab(e, _) {
    t(e).blend = t(_);
  }
  function Db(e, _) {
    t(e).box = q0[_];
  }
  function Pb(e, _) {
    t(e).buffers = t(_);
  }
  function Mb(e, _) {
    t(e).clearValue = t(_);
  }
  function Fb(e, _, n) {
    t(e).code = w(_, n);
  }
  function kb(e, _) {
    t(e).color = t(_);
  }
  function Tb(e, _) {
    t(e).colorAttachments = t(_);
  }
  function Eb(e, _) {
    t(e).compare = X[_];
  }
  function Lb(e, _) {
    t(e).count = _ >>> 0;
  }
  function Cb(e, _) {
    t(e).cullMode = F0[_];
  }
  function Ob(e, _) {
    t(e).depthBias = _;
  }
  function Rb(e, _) {
    t(e).depthBiasClamp = _;
  }
  function Bb(e, _) {
    t(e).depthBiasSlopeScale = _;
  }
  function qb(e, _) {
    t(e).depthClearValue = _;
  }
  function Vb(e, _) {
    t(e).depthCompare = X[_];
  }
  function Gb(e, _) {
    t(e).depthFailOp = K[_];
  }
  function Wb(e, _) {
    t(e).depthLoadOp = j[_];
  }
  function Ub(e, _) {
    t(e).depthReadOnly = _ !== 0;
  }
  function jb(e, _) {
    t(e).depthStencil = t(_);
  }
  function Kb(e, _) {
    t(e).depthStencilAttachment = t(_);
  }
  function zb(e, _) {
    t(e).depthStoreOp = z[_];
  }
  function Nb(e, _) {
    t(e).depthWriteEnabled = _ !== 0;
  }
  function Qb(e, _) {
    t(e).device = t(_);
  }
  function Xb(e, _) {
    t(e).dimension = O0[_];
  }
  function $b(e, _) {
    t(e).dstFactor = Q[_];
  }
  function Yb(e, _) {
    t(e).endOfPassWriteIndex = _ >>> 0;
  }
  function Hb(e, _, n) {
    t(e).entryPoint = w(_, n);
  }
  function Jb(e, _, n) {
    t(e).entryPoint = w(_, n);
  }
  function Zb(e, _) {
    t(e).failOp = K[_];
  }
  function ea(e, _) {
    t(e).format = T[_];
  }
  function _a(e, _) {
    t(e).format = T[_];
  }
  function ta(e, _) {
    t(e).format = T[_];
  }
  function na(e, _) {
    t(e).format = R0[_];
  }
  function ra(e, _) {
    t(e).format = T[_];
  }
  function ca(e, _) {
    t(e).fragment = t(_);
  }
  function ba(e, _) {
    t(e).frontFace = k0[_];
  }
  function aa(e, _) {
    t(e).g = _;
  }
  function fa(e, _) {
    t(e).height = _ >>> 0;
  }
  function oa(e, _) {
    t(e).height = _ >>> 0;
  }
  function ua(e, _, n) {
    t(e).label = w(_, n);
  }
  function ia(e, _, n) {
    t(e).label = w(_, n);
  }
  function da(e, _, n) {
    t(e).label = w(_, n);
  }
  function ga(e, _, n) {
    t(e).label = w(_, n);
  }
  function sa(e, _, n) {
    t(e).label = w(_, n);
  }
  function wa(e, _, n) {
    t(e).label = w(_, n);
  }
  function la(e, _, n) {
    t(e).label = w(_, n);
  }
  function ma(e, _, n) {
    t(e).label = w(_, n);
  }
  function pa(e, _) {
    t(e).layout = t(_);
  }
  function xa(e, _) {
    t(e).loadOp = j[_];
  }
  function ya(e, _) {
    t(e).mask = _ >>> 0;
  }
  function ha(e, _) {
    t(e).mipLevelCount = _ >>> 0;
  }
  function Sa(e, _) {
    t(e).module = t(_);
  }
  function va(e, _) {
    t(e).module = t(_);
  }
  function Ia(e, _) {
    t(e).multisample = t(_);
  }
  function Aa(e, _) {
    t(e).offset = _;
  }
  function Da(e, _) {
    t(e).onmessage = t(_);
  }
  function Pa(e, _) {
    t(e).operation = P0[_];
  }
  function Ma(e, _) {
    t(e).passOp = K[_];
  }
  function Fa(e, _) {
    t(e).powerPreference = E0[_];
  }
  function ka(e, _) {
    t(e).primitive = t(_);
  }
  function Ta(e, _) {
    t(e).querySet = t(_);
  }
  function Ea(e, _) {
    t(e).r = _;
  }
  function La(e, _) {
    t(e).requiredFeatures = t(_);
  }
  function Ca(e, _) {
    t(e).requiredLimits = t(_);
  }
  function Oa(e, _) {
    t(e).resolveTarget = t(_);
  }
  function Ra(e, _) {
    t(e).shaderLocation = _ >>> 0;
  }
  function Ba(e, _) {
    t(e).srcFactor = Q[_];
  }
  function qa(e, _) {
    t(e).stencilBack = t(_);
  }
  function Va(e, _) {
    t(e).stencilClearValue = _ >>> 0;
  }
  function Ga(e, _) {
    t(e).stencilFront = t(_);
  }
  function Wa(e, _) {
    t(e).stencilLoadOp = j[_];
  }
  function Ua(e, _) {
    t(e).stencilReadMask = _ >>> 0;
  }
  function ja(e, _) {
    t(e).stencilReadOnly = _ !== 0;
  }
  function Ka(e, _) {
    t(e).stencilStoreOp = z[_];
  }
  function za(e, _) {
    t(e).stencilWriteMask = _ >>> 0;
  }
  function Na(e, _) {
    t(e).stepMode = B0[_];
  }
  function Qa(e, _) {
    t(e).storeOp = z[_];
  }
  function Xa(e, _) {
    t(e).stripIndexFormat = T0[_];
  }
  function $a(e, _) {
    t(e).targets = t(_);
  }
  function Ya(e, _) {
    t(e).timestampWrites = t(_);
  }
  function Ha(e, _) {
    t(e).topology = L0[_];
  }
  function Ja(e, _, n) {
    t(e).type = w(_, n);
  }
  function Za(e, _) {
    t(e).unclippedDepth = _ !== 0;
  }
  function ef(e, _) {
    t(e).usage = _ >>> 0;
  }
  function _f(e, _) {
    t(e).usage = _ >>> 0;
  }
  function tf(e, _) {
    t(e).vertex = t(_);
  }
  function nf(e, _) {
    t(e).view = t(_);
  }
  function rf(e, _) {
    t(e).view = t(_);
  }
  function cf(e, _) {
    t(e).viewFormats = t(_);
  }
  function bf(e, _) {
    t(e).width = _ >>> 0;
  }
  function af(e, _) {
    t(e).width = _ >>> 0;
  }
  function ff(e, _) {
    t(e).writeMask = _ >>> 0;
  }
  function of(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function uf(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function df(e) {
    return t(e).shiftKey;
  }
  function gf(e) {
    return t(e).shiftKey;
  }
  function sf(e) {
    const _ = t(e).signal;
    return b(_);
  }
  function wf(e, _) {
    const n = t(_).stack, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function lf(e) {
    t(e).start();
  }
  function mf() {
    const e = typeof global > "u" ? null : global;
    return s(e) ? 0 : b(e);
  }
  function pf() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return s(e) ? 0 : b(e);
  }
  function xf() {
    const e = typeof self > "u" ? null : self;
    return s(e) ? 0 : b(e);
  }
  function yf() {
    const e = typeof window > "u" ? null : window;
    return s(e) ? 0 : b(e);
  }
  function hf(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function Sf(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function vf(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function If(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function Af(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function Df(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function Pf(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Mf(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Ff(e) {
    const _ = t(e).style;
    return b(_);
  }
  function kf(e, _) {
    t(e).submit(t(_));
  }
  function Tf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Ef() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Lf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Cf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, i >>> 0, g >>> 0, m);
    }, arguments);
  }
  function Of() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, i >>> 0, g >>> 0, t(m));
    }, arguments);
  }
  function Rf(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function Bf(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function qf(e, _, n, r, c, a) {
    t(e).texStorage2D(_ >>> 0, n, r >>> 0, c, a);
  }
  function Vf(e, _, n, r, c, a, f) {
    t(e).texStorage3D(_ >>> 0, n, r >>> 0, c, a, f);
  }
  function Gf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Wf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Uf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function jf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Kf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function zf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Nf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Qf() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Xf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function $f() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Yf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Hf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Jf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Zf() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, h);
    }, arguments);
  }
  function eo() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function _o(e, _, n) {
    const r = t(e).then(t(_), t(n));
    return b(r);
  }
  function to(e, _) {
    const n = t(e).then(t(_));
    return b(n);
  }
  function no(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function ro(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function co(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function bo(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function ao(e, _, n) {
    t(e).uniform1ui(t(_), n >>> 0);
  }
  function fo(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function oo(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function uo(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function io(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function go(e, _, n, r) {
    t(e).uniform2uiv(t(_), E(n, r));
  }
  function so(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function wo(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function lo(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function mo(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function po(e, _, n, r) {
    t(e).uniform3uiv(t(_), E(n, r));
  }
  function xo(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function yo(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function ho(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function So(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function vo(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function Io(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function Ao(e, _, n, r) {
    t(e).uniform4uiv(t(_), E(n, r));
  }
  function Do(e, _, n, r) {
    t(e).uniformBlockBinding(t(_), n >>> 0, r >>> 0);
  }
  function Po(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function Mo(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function Fo(e, _, n, r, c) {
    t(e).uniformMatrix2x3fv(t(_), n !== 0, p(r, c));
  }
  function ko(e, _, n, r, c) {
    t(e).uniformMatrix2x4fv(t(_), n !== 0, p(r, c));
  }
  function To(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function Eo(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function Lo(e, _, n, r, c) {
    t(e).uniformMatrix3x2fv(t(_), n !== 0, p(r, c));
  }
  function Co(e, _, n, r, c) {
    t(e).uniformMatrix3x4fv(t(_), n !== 0, p(r, c));
  }
  function Oo(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Ro(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Bo(e, _, n, r, c) {
    t(e).uniformMatrix4x2fv(t(_), n !== 0, p(r, c));
  }
  function qo(e, _, n, r, c) {
    t(e).uniformMatrix4x3fv(t(_), n !== 0, p(r, c));
  }
  function Vo(e) {
    t(e).unmap();
  }
  function Go(e, _) {
    t(e).unobserve(t(_));
  }
  function Wo(e, _) {
    t(e).useProgram(t(_));
  }
  function Uo(e, _) {
    t(e).useProgram(t(_));
  }
  function jo(e) {
    const _ = t(e).userAgentData;
    return s(_) ? 0 : b(_);
  }
  function Ko() {
    return u(function(e, _) {
      const n = t(_).userAgent, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function zo(e, _, n) {
    t(e).vertexAttribDivisorANGLE(_ >>> 0, n >>> 0);
  }
  function No(e, _, n) {
    t(e).vertexAttribDivisor(_ >>> 0, n >>> 0);
  }
  function Qo(e, _, n, r, c, a) {
    t(e).vertexAttribIPointer(_ >>> 0, n, r >>> 0, c, a);
  }
  function Xo(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function $o(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function Yo(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function Ho(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function Jo(e) {
    const _ = t(e).visibilityState;
    return (V0.indexOf(_) + 1 || 3) - 1;
  }
  function Zo(e) {
    console.warn(t(e));
  }
  function e0(e) {
    const _ = t(e).webkitFullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function _0(e) {
    t(e).webkitRequestFullscreen();
  }
  function t0(e) {
    return t(e).width;
  }
  function n0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D0);
    return b(n);
  }
  function r0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function c0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function b0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function a0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function f0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function o0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function u0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, D);
    return b(n);
  }
  function i0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_6269, I0);
    return b(n);
  }
  function d0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_8309, A0);
    return b(n);
  }
  function g0(e) {
    return b(e);
  }
  function s0(e, _) {
    const n = p(e, _);
    return b(n);
  }
  function w0(e, _) {
    const n = W0(e, _);
    return b(n);
  }
  function l0(e, _) {
    const n = A(e, _);
    return b(n);
  }
  function m0(e, _) {
    const n = U0(e, _);
    return b(n);
  }
  function p0(e, _) {
    const n = j0(e, _);
    return b(n);
  }
  function x0(e, _) {
    const n = E(e, _);
    return b(n);
  }
  function y0(e, _) {
    const n = K0(e, _);
    return b(n);
  }
  function h0(e, _) {
    const n = w(e, _);
    return b(n);
  }
  function S0(e) {
    const _ = t(e);
    return b(_);
  }
  function v0(e) {
    H0(e);
  }
  function I0(e, _) {
    d.__wasm_bindgen_func_elem_6602(e, _);
  }
  function D(e, _, n) {
    d.__wasm_bindgen_func_elem_6600(e, _, b(n));
  }
  function A0(e, _, n) {
    d.__wasm_bindgen_func_elem_8310(e, _, b(n));
  }
  function D0(e, _, n, r) {
    d.__wasm_bindgen_func_elem_6608(e, _, b(n), b(r));
  }
  const Q = [
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
  ], P0 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], M0 = [
    "opaque",
    "premultiplied"
  ], X = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], F0 = [
    "none",
    "front",
    "back"
  ], k0 = [
    "ccw",
    "cw"
  ], T0 = [
    "uint16",
    "uint32"
  ], j = [
    "load",
    "clear"
  ], E0 = [
    "low-power",
    "high-performance"
  ], L0 = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], K = [
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
  ], C0 = [
    "all",
    "stencil-only",
    "depth-only"
  ], T = [
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
  ], O0 = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], R0 = [
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
  ], B0 = [
    "vertex",
    "instance"
  ], q0 = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], V0 = [
    "hidden",
    "visible"
  ];
  function b(e) {
    F === I.length && I.push(I.length + 1);
    const _ = F;
    return F = I[_], I[_] = e, _;
  }
  const N = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => e.dtor(e.a, e.b));
  function U(e) {
    const _ = typeof e;
    if (_ == "number" || _ == "boolean" || e == null) return `${e}`;
    if (_ == "string") return `"${e}"`;
    if (_ == "symbol") {
      const c = e.description;
      return c == null ? "Symbol" : `Symbol(${c})`;
    }
    if (_ == "function") {
      const c = e.name;
      return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function";
    }
    if (Array.isArray(e)) {
      const c = e.length;
      let a = "[";
      c > 0 && (a += U(e[0]));
      for (let f = 1; f < c; f++) a += ", " + U(e[f]);
      return a += "]", a;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (n && n.length > 1) r = n[1];
    else return toString.call(e);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
  }
  function G0(e) {
    e < 132 || (I[e] = F, F = e);
  }
  function p(e, _) {
    return e = e >>> 0, z0().subarray(e / 4, e / 4 + _);
  }
  function W0(e, _) {
    return e = e >>> 0, N0().subarray(e / 2, e / 2 + _);
  }
  function A(e, _) {
    return e = e >>> 0, Q0().subarray(e / 4, e / 4 + _);
  }
  function U0(e, _) {
    return e = e >>> 0, X0().subarray(e / 1, e / 1 + _);
  }
  function j0(e, _) {
    return e = e >>> 0, $0().subarray(e / 2, e / 2 + _);
  }
  function E(e, _) {
    return e = e >>> 0, Y0().subarray(e / 4, e / 4 + _);
  }
  function K0(e, _) {
    return e = e >>> 0, M().subarray(e / 1, e / 1 + _);
  }
  let P = null;
  function l() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== d.memory.buffer) && (P = new DataView(d.memory.buffer)), P;
  }
  let L = null;
  function z0() {
    return (L === null || L.byteLength === 0) && (L = new Float32Array(d.memory.buffer)), L;
  }
  let C = null;
  function N0() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(d.memory.buffer)), C;
  }
  let O = null;
  function Q0() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(d.memory.buffer)), O;
  }
  let R = null;
  function X0() {
    return (R === null || R.byteLength === 0) && (R = new Int8Array(d.memory.buffer)), R;
  }
  function w(e, _) {
    return e = e >>> 0, Z0(e, _);
  }
  let B = null;
  function $0() {
    return (B === null || B.byteLength === 0) && (B = new Uint16Array(d.memory.buffer)), B;
  }
  let q = null;
  function Y0() {
    return (q === null || q.byteLength === 0) && (q = new Uint32Array(d.memory.buffer)), q;
  }
  let V = null;
  function M() {
    return (V === null || V.byteLength === 0) && (V = new Uint8Array(d.memory.buffer)), V;
  }
  function t(e) {
    return I[e];
  }
  function u(e, _) {
    try {
      return e.apply(this, _);
    } catch (n) {
      d.__wbindgen_export3(b(n));
    }
  }
  let I = new Array(128).fill(void 0);
  I.push(void 0, null, true, false);
  let F = I.length;
  function s(e) {
    return e == null;
  }
  function v(e, _, n, r) {
    const c = {
      a: e,
      b: _,
      cnt: 1,
      dtor: n
    }, a = (...f) => {
      c.cnt++;
      const o = c.a;
      c.a = 0;
      try {
        return r(o, c.b, ...f);
      } finally {
        c.a = o, a._wbg_cb_unref();
      }
    };
    return a._wbg_cb_unref = () => {
      --c.cnt === 0 && (c.dtor(c.a, c.b), c.a = 0, N.unregister(c));
    }, N.register(a, c, c), a;
  }
  function y(e, _, n) {
    if (n === void 0) {
      const o = k.encode(e), i = _(o.length, 1) >>> 0;
      return M().subarray(i, i + o.length).set(o), x = o.length, i;
    }
    let r = e.length, c = _(r, 1) >>> 0;
    const a = M();
    let f = 0;
    for (; f < r; f++) {
      const o = e.charCodeAt(f);
      if (o > 127) break;
      a[c + f] = o;
    }
    if (f !== r) {
      f !== 0 && (e = e.slice(f)), c = n(c, r, r = f + e.length * 3, 1) >>> 0;
      const o = M().subarray(c + f, c + r), i = k.encodeInto(e, o);
      f += i.written, c = n(c, r, f, 1) >>> 0;
    }
    return x = f, c;
  }
  function H0(e) {
    const _ = t(e);
    return G0(e), _;
  }
  let G = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  G.decode();
  const J0 = 2146435072;
  let W = 0;
  function Z0(e, _) {
    return W += _, W >= J0 && (G = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), G.decode(), W = _), G.decode(M().subarray(e, e + _));
  }
  const k = new TextEncoder();
  "encodeInto" in k || (k.encodeInto = function(e, _) {
    const n = k.encode(e);
    return _.set(n), {
      read: e.length,
      written: n.length
    };
  });
  let x = 0, d;
  function eu(e) {
    d = e;
  }
  URL = globalThis.URL;
  const S = await Y({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: v0,
      __wbg_new_8a6f238a6ece86ea: Qr,
      __wbg_stack_0ed75d68575b0f3c: wf,
      __wbg_error_7534b8e9a36f1ab4: gn,
      __wbg_set_color_attachments_81e56abd7f11d38b: Tb,
      __wbg_set_label_10c0715c06c574ce: ua,
      __wbg_set_view_dc1937ba74f6a24a: rf,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: qb,
      __wbg_set_depth_load_op_0e48f976ce8bf626: Wb,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: zb,
      __wbg_set_depth_read_only_16d1277d6c444182: Ub,
      __wbg_set_stencil_clear_value_c88c52b70d827549: Va,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: Wa,
      __wbg_set_stencil_store_op_b92786567b815d0f: Ka,
      __wbg_set_stencil_read_only_54652ff66298c4c5: ja,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: Kb,
      __wbg_set_query_set_1f3c39edf379c9f9: Ta,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: vb,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: Yb,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: Ya,
      __wbg_beginRenderPass_c95ff061c0d906d5: ve,
      __wbg_label_37d2cc4e867fe710: Dr,
      __wbg_set_label_5871c6a4116d78e4: ga,
      __wbg_finish_cafc9caa4b3df56c: pn,
      __wbg_finish_42f37cad38abaf27: mn,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: pr,
      __wbindgen_object_clone_ref: S0,
      __wbg_set_dst_factor_01ac107dce46775a: $b,
      __wbg_set_operation_872810b2c7ad34bb: Pa,
      __wbg_set_src_factor_d869078ba948812f: Ba,
      __wbg_Window_89f1205e6b84c5cf: J,
      __wbg_gpu_97c682b8bbd6da29: dr,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: ee,
      __wbg_set_a_cb5a15147778942a: db,
      __wbg_set_b_130b6d20afdc640c: yb,
      __wbg_set_g_a202edac674d3195: aa,
      __wbg_set_r_d02e085dc65c7ba3: Ea,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: ac,
      __wbg_submit_5f96af711b83c2df: kf,
      __wbg_getMappedRange_9a20d37843bbc5dd: jn,
      __wbg_unmap_80761f81f18ec521: Vo,
      __wbg_destroy_834dd203329bdb3c: Wt,
      __wbg_mapAsync_c9718fcf0566073c: Er,
      __wbg_set_code_d96e8bd591fe4d27: Fb,
      __wbg_set_label_4592679c60c3ae0e: ia,
      __wbg_createShaderModule_2b4d1147549bca28: tt,
      __wbg_set_label_4f94deb040009907: da,
      __wbg_createCommandEncoder_e817b588d596b7d6: j_,
      __wbg_set_bind_group_layouts_0304829711909964: Ib,
      __wbg_set_label_81a922ba355b9c4e: sa,
      __wbg_createPipelineLayout_87ecd84a502ca7b4: X_,
      __wbg_set_module_b00779338e12d7cb: va,
      __wbg_set_entry_point_d34fa93493d1dc0e: Jb,
      __wbg_set_buffers_c36e59052d233445: Pb,
      __wbg_set_layout_cf44c2080938f1e8: pa,
      __wbg_set_vertex_84e0affabea33233: tf,
      __wbg_set_label_ee8b5ccc3ceeadae: la,
      __wbg_set_format_1e6dd64c90091826: _a,
      __wbg_set_depth_compare_f44e1ef737045c19: Vb,
      __wbg_set_depth_write_enabled_47d54383526f6b41: Nb,
      __wbg_set_depth_bias_6f054d893efee16d: Ob,
      __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: Rb,
      __wbg_set_depth_bias_slope_scale_79c154be54e419a7: Bb,
      __wbg_set_compare_13ccce3149fc8362: Eb,
      __wbg_set_depth_fail_op_a697253b12a479e1: Gb,
      __wbg_set_fail_op_45d1f0ecf070d60c: Zb,
      __wbg_set_pass_op_10f19e715ae2c3ef: Ma,
      __wbg_set_stencil_back_f7d6690835becc87: qa,
      __wbg_set_stencil_front_b0e57ed3db28a814: Ga,
      __wbg_set_stencil_read_mask_6d091cd38b736049: Ua,
      __wbg_set_stencil_write_mask_775ac04ab32e79dc: za,
      __wbg_set_depth_stencil_18746e1deb2f030f: jb,
      __wbg_set_module_70bd7be1f2808c25: Sa,
      __wbg_set_targets_8396bdc905d927e9: $a,
      __wbg_set_entry_point_37d0e849bed76259: Hb,
      __wbg_set_fragment_0767ccf58ccf1f6e: ca,
      __wbg_set_count_9f86d0fc02d08e45: Lb,
      __wbg_set_mask_d8e7d97222c8a92e: ya,
      __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: wb,
      __wbg_set_multisample_8821c65822c70695: Ia,
      __wbg_set_cull_mode_e2b289219d281f62: Cb,
      __wbg_set_front_face_3c32fabea21988fa: ba,
      __wbg_set_strip_index_format_d819e0c5b56ce30e: Xa,
      __wbg_set_topology_ad5745a55cfa852b: Ha,
      __wbg_set_unclipped_depth_05a825ce1721e8ed: Za,
      __wbg_set_primitive_8ec2530289b383b9: ka,
      __wbg_createRenderPipeline_5757ddd273de2e48: J_,
      __wbg_end_5a7ce60dc0f49d42: dn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Ca,
      __wbg_set_required_features_505229173e5ae00f: La,
      __wbg_set_label_fcbb40adcedf7a3a: ma,
      __wbg_requestDevice_acf949c0a7d11096: Nc,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: Qn,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: Vn,
      __wbg_set_device_cf77f0192bc5144c: Qb,
      __wbg_set_format_f98f8a95c86d8cc1: ra,
      __wbg_set_usage_e94a8ea3a622b561: _f,
      __wbg_set_alpha_mode_ea0e62378a600722: sb,
      __wbg_set_view_formats_57015785ec512612: cf,
      __wbg_configure_9ddad01510ae8865: C_,
      __wbg_set_dimension_f73df134b3cb9008: Xb,
      __wbg_set_format_17bbec4e26222ce0: ea,
      __wbg_set_aspect_24f00699ffc05e48: pb,
      __wbg_set_base_array_layer_8a27534c79ebf816: hb,
      __wbg_set_array_layer_count_fbec00646c2f76f0: lb,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: Sb,
      __wbg_set_mip_level_count_11613862db4f5326: ha,
      __wbg_set_label_a9e60f11d8f6d907: wa,
      __wbg_set_usage_8a7a3a48dde89c84: ef,
      __wbg_createView_da8865cdd09ec9d5: ot,
      __wbg_set_power_preference_ad90ccb2239fef97: Fa,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: Kc,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: mr,
      __wbg_queue_19586e9507f5e981: Ec,
      __wbg_setPipeline_beee24fb5690e169: bb,
      __wbg_draw_5e172df5bac5e5ab: cn,
      __wbg_set_attributes_9241554310424d07: xb,
      __wbg_set_array_stride_6ac1c0f48cbb1a6e: mb,
      __wbg_set_step_mode_e6ef4bb885b3b66a: Na,
      __wbg_set_load_op_de7ca59cc25dfb40: xa,
      __wbg_set_store_op_5185ea291265ee63: Qa,
      __wbg_set_view_330ed9fc9fcc4d01: nf,
      __wbg_set_clear_value_576d8a3bda7ba8cc: Mb,
      __wbg_set_resolve_target_cce9edc587b4211e: Oa,
      __wbg_set_format_237204cc87ea4982: ta,
      __wbg_set_alpha_e58cc49c799f170e: gb,
      __wbg_set_color_5c69a2b8e768328d: kb,
      __wbg_set_blend_450723fd40147c64: Ab,
      __wbg_set_write_mask_fc328072f01cb48d: ff,
      __wbg_set_format_313c8f10a7e36a0c: na,
      __wbg_set_offset_697e85d970df2f50: Aa,
      __wbg_set_shader_location_01be15233cdb0803: Ra,
      __wbg_requestFullscreen_86fc6cdb76000482: Qc,
      __wbg_scheduler_5156bb61cc1cf589: tb,
      __wbg_getCoalescedEvents_21492912fd0145ec: En,
      __wbg_requestIdleCallback_1b8d644ff564208f: $c,
      __wbg_offsetX_cb6a38e6f23cb4a6: cc,
      __wbg_offsetY_43e21941c5c1f8bf: bc,
      __wbg_cancel_09c394f0894744eb: u_,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: e0,
      __wbg_requestFullscreen_9f0611438eb929cf: Xc,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: _0,
      __wbg_scheduler_48482a9974eeacbd: _b,
      __wbg_postTask_41d93e93941e4a3d: hc,
      __wbg_userAgentData_f7b0e61c05c54315: jo,
      __wbg_brands_a1e7a2bce052128f: Je,
      __wbg_brand_9562792cbb4735c3: He,
      __wbg_prototype_c28bca39c45aba9b: Ic,
      __wbg_animate_6ec571f163cf6f8d: pe,
      __wbg_play_63bc12f42e16af91: dc,
      __wbg_Window_d1bf622f71ff0629: Z,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: yr,
      __wbg_blendFunc_2ef59299d10c662d: Ne,
      __wbg_colorMask_177d9762658e5e28: A_,
      __wbg_depthFunc_f670d4cbb9cd0913: Rt,
      __wbg_depthMask_75a36d0065471a4b: qt,
      __wbg_fenceSync_c52a4e24eabfa0d3: ln,
      __wbg_frontFace_d4a6507ad2939b5c: Fn,
      __wbg_uniform1ui_a0f911ff174715d0: ao,
      __wbg_beginQuery_0fdf154e1da0e73d: Se,
      __wbg_bindBuffer_c9068e8712a034f5: Me,
      __wbg_blendColor_e799d452ab2a5788: Ve,
      __wbg_clearDepth_670099db422a4f91: l_,
      __wbg_deleteSync_c8e4a9c735f71d18: Pt,
      __wbg_depthRange_337bf254e67639bb: Vt,
      __wbg_drawArrays_075228181299b824: Zt,
      __wbg_readBuffer_9eb461d6857295f0: Lc,
      __wbg_useProgram_fe720ade4d3b6edb: Uo,
      __wbg_bindSampler_96f0e90e7bc31da9: Le,
      __wbg_bindTexture_b2b7b1726a83f93e: Ce,
      __wbg_createQuery_7988050efd7e4c48: H_,
      __wbg_deleteQuery_ea8bf1954febd774: ht,
      __wbg_drawBuffers_5eccfaacc6560299: tn,
      __wbg_linkProgram_6600dd2c0863bbfd: Mr,
      __wbg_pixelStorei_2a65936c11b710fe: uc,
      __wbg_stencilMask_732dcc5aada10e4c: Df,
      __wbg_attachShader_b36058e5c9eeaf54: he,
      __wbg_clearStencil_5d243d0dff03c315: m_,
      __wbg_createBuffer_26534c05e01b8559: W_,
      __wbg_createShader_e3ac08ed8c5b14b2: nt,
      __wbg_deleteBuffer_ab099883c168644d: lt,
      __wbg_deleteShader_aaf3b520a64d5d9d: At,
      __wbg_getExtension_3c0cb5ae01bb4b17: Wn,
      __wbg_getParameter_2e1f97ecaab76274: Nn,
      __wbg_shaderSource_32425cfe6e5a1e52: of,
      __wbg_activeTexture_6f9a710514686c24: de,
      __wbg_blendEquation_e9b99928ed1494ad: je,
      __wbg_compileShader_94718a93495d565d: M_,
      __wbg_createProgram_9b7710a1f2701c2c: Y_,
      __wbg_createSampler_da6bb96c9ffaaa27: _t,
      __wbg_createTexture_16d2c8a3d7d4a75a: ct,
      __wbg_deleteProgram_9298fb3e3c1d3a78: xt,
      __wbg_deleteSampler_c6b68c4071841afa: It,
      __wbg_deleteTexture_9d411c0e60ffa324: Ft,
      __wbg_polygonOffset_4b3158d8ed028862: lc,
      __wbg_texParameteri_0d45be2c88d6bad8: Rf,
      __wbg_texStorage2D_9504743abf5a986a: qf,
      __wbg_texStorage3D_e9e1b58fee218abe: Vf,
      __wbg_bindFramebuffer_031c73ba501cb8f6: Fe,
      __wbg_blitFramebuffer_d730a23ab4db248e: Xe,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: Te,
      __wbg_bindVertexArray_78220d1edb1d2382: Be,
      __wbg_createFramebuffer_41512c38358a41c4: z_,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: pt,
      __wbg_getSyncParameter_7d11ab875b41617e: br,
      __wbg_samplerParameterf_f070d2b69b1e2d46: Zc,
      __wbg_samplerParameteri_8e4c4bcead0ee669: eb,
      __wbg_blendFuncSeparate_95465944f788a092: Ke,
      __wbg_createRenderbuffer_a601226a6a680dbe: et,
      __wbg_createVertexArray_ad5294951ae57497: ft,
      __wbg_deleteRenderbuffer_096edada57729468: St,
      __wbg_deleteVertexArray_7bc7f92769862f93: Tt,
      __wbg_getQueryParameter_5d6af051438ae479: Zn,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: _r,
      __wbg_stencilOpSeparate_4657523b1d3b184f: Pf,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: Ae,
      __wbg_bufferData_32d26eba0c74a53c: e_,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: Xn,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: nr,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: or,
      __wbg_readPixels_6ea8e288a8673282: Oc,
      __wbg_renderbufferStorage_1bc02383614b76b2: Wc,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: V_,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: G_,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: Jt,
      __wbg_getIndexedParameter_ca1693c768bc4934: Un,
      __wbg_getProgramParameter_92e4540ca9da06b2: Hn,
      __wbg_stencilFuncSeparate_10d043d0af14366f: hf,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: vf,
      __wbg_texImage3D_2082006a8a9b28a7: Cf,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: Do,
      __wbg_vertexAttribDivisor_744c0ca468594894: No,
      __wbg_framebufferTexture2D_c283e928186aa542: An,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: Sr,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: We,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: ar,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: Sn,
      __wbg_getSupportedExtensions_57142a6b598d7787: rr,
      __wbg_clientWaitSync_21865feaeb76a9a5: S_,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: Dn,
      __wbg_texSubImage3D_59b8e24fb05787aa: Zf,
      __wbg_uniform2fv_2fb47cfe06330cc7: oo,
      __wbg_uniform2iv_095baf208f172131: uo,
      __wbg_uniform3fv_c0872003729939a5: wo,
      __wbg_uniform3iv_6aa2b0791e659d14: lo,
      __wbg_uniform4fv_498bd80dc5aa16ff: ho,
      __wbg_uniform4iv_8a8219fda39dffd5: Io,
      __wbg_enableVertexAttribArray_475e06c31777296d: bn,
      __wbg_uniform2uiv_3030d7e769f5e82a: go,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: po,
      __wbg_uniform4uiv_046ee400bb80547d: Ao,
      __wbg_disableVertexAttribArray_24a020060006b10f: Kt,
      __wbg_clearBufferfv_ac87d92e2f45d80c: d_,
      __wbg_clearBufferiv_69ff24bb52ec4c88: g_,
      __wbg_clearBufferuiv_8ad59a8219aafaca: s_,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: Xo,
      __wbg_drawElementsInstanced_d41fc920ae24717c: rn,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: Gc,
      __wbg_texSubImage3D_45591e5655d1ed5c: Hf,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: Po,
      __wbg_uniformMatrix3fv_6f822361173d8046: To,
      __wbg_uniformMatrix4fv_0e724dbebd372526: Oo,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: Qo,
      __wbg_bindBufferRange_009d206fe9e4151e: De,
      __wbg_bufferData_98f6c413a8f0f139: t_,
      __wbg_texSubImage3D_3b653017c4c5d721: Yf,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: Fo,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: ko,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: Lo,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: Co,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: Bo,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: qo,
      __wbg_readPixels_55b18304384e073d: Cc,
      __wbg_texImage3D_bd2b0bd2cfcdb278: Of,
      __wbg_texSubImage3D_47643556a8a4bf86: Jf,
      __wbg_texSubImage3D_18d7f3c65567c885: $f,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: eo,
      __wbg_texSubImage3D_1102c12a20bf56d5: Xf,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: T_,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: L_,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: B_,
      __wbg_bufferSubData_3e902f031adf13fd: r_,
      __wbg_compressedTexSubImage2D_684350eb62830032: k_,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: E_,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Tn,
      __wbg_texSubImage2D_edf5bd70fda3feaf: Qf,
      __wbg_clear_7187030f892c5ca0: h_,
      __wbg_flush_e322496f5412e567: yn,
      __wbg_texImage2D_13414a4692836804: Ef,
      __wbg_texSubImage2D_bf72e56edeeed376: Kf,
      __wbg_texSubImage2D_e193f1d28439217c: Nf,
      __wbg_enable_d1ac04dfdd2fb3ae: fn,
      __wbg_texSubImage2D_117d29278542feb0: Gf,
      __wbg_texSubImage2D_bd034db2e58c352c: jf,
      __wbg_texSubImage2D_5d270af600a7fc4a: Uf,
      __wbg_texSubImage2D_d17a39cdec4a3495: zf,
      __wbg_disable_7fe6fb3e97717f88: Nt,
      __wbg_scissor_2ff8f18f05a6d408: nb,
      __wbg_texImage2D_087ef94df78081f0: Tf,
      __wbg_viewport_df236eac68bc7467: Ho,
      __wbg_cullFace_e7e711a14d2c3f48: gt,
      __wbg_endQuery_54f0627d4c931318: un,
      __wbg_uniform1f_b500ede5b612bea2: no,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: bo,
      __wbg_uniform4f_f6b5e2024636033a: yo,
      __wbg_instanceof_Window_ed49b2db8df90359: hr,
      __wbg_matchMedia_91d4fc9729dc3c84: Lr,
      __wbg_queueMicrotask_885fd8605352e25d: Tc,
      __wbg_devicePixelRatio_5c458affc89fc209: jt,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Cn,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: o_,
      __wbg_requestIdleCallback_c9c643f8210d435b: Yc,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: f_,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: zc,
      __wbg_clearTimeout_df03cf00269bc442: x_,
      __wbg_setTimeout_681abd84926a4da3: ob,
      __wbg_setTimeout_eff32631ea138533: ub,
      __wbg_document_ee35a3d3ae34ef6c: Yt,
      __wbg_navigator_43be698ba96fc088: Gr,
      __wbg_setAttribute_cc8e4c8a2a008508: cb,
      __wbg_setPointerCapture_420db6f6826eb74b: ab,
      __wbg_activeElement_1554b6917654f8d6: ie,
      __wbg_createElement_49f60fdcaae809c8: K_,
      __wbg_querySelector_c3b0df2d58eec220: Mc,
      __wbg_visibilityState_43b7b74940e07d22: Jo,
      __wbg_getElementById_e34377b79d7285f6: Gn,
      __wbg_fullscreenElement_25b445e2961e68ba: kn,
      __wbg_querySelectorAll_1283aae52043a951: Pc,
      __wbg_body_f67922363a220026: Ye,
      __wbg_navigator_4478931f32ebca57: Wr,
      __wbg_focus_128ff465f65677cc: hn,
      __wbg_style_0b7c9bd318f8b807: Ff,
      __wbg_blendFunc_446658e7231ab9c8: Qe,
      __wbg_colorMask_7a8dbc86e7376a9b: D_,
      __wbg_depthFunc_eb3aa05361dd2eaa: Ot,
      __wbg_depthMask_103091329ca1a750: Bt,
      __wbg_frontFace_027e2ec7a7bc347c: Mn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: Pe,
      __wbg_blendColor_1d50ac87d9a2794b: qe,
      __wbg_clearDepth_2b109f644a783a53: w_,
      __wbg_depthRange_5579d448b9d7de57: Gt,
      __wbg_drawArrays_2be89c369a29f30b: en,
      __wbg_useProgram_e82c1a5f87d81579: Wo,
      __wbg_bindTexture_ec13ddcb9dc8e032: Oe,
      __wbg_linkProgram_be6b825cf66d177b: Fr,
      __wbg_pixelStorei_f7cc498f52d523f1: ic,
      __wbg_stencilMask_0eca090c4c47f8f7: Af,
      __wbg_attachShader_32114efcf2744eb6: ye,
      __wbg_clearStencil_aa65955bb39d8c18: p_,
      __wbg_createBuffer_c4ec897aacc1b91c: U_,
      __wbg_createShader_f2b928ca9a426b14: rt,
      __wbg_deleteBuffer_22fcc93912cbf659: wt,
      __wbg_deleteShader_ff70ca962883e241: Dt,
      __wbg_getParameter_1ecb910cfdd21f88: zn,
      __wbg_shaderSource_8f4bda03f70359df: uf,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: ge,
      __wbg_blendEquation_82202f34c4c00e50: Ue,
      __wbg_compileShader_63b824e86bb00b8f: P_,
      __wbg_createProgram_98aaa91f7c81c5e2: $_,
      __wbg_createTexture_f9451a82c7527ce2: bt,
      __wbg_deleteProgram_f354e79b8cae8076: yt,
      __wbg_deleteTexture_2be78224e5584a8b: Mt,
      __wbg_polygonOffset_24a8059deb03be92: wc,
      __wbg_texParameteri_ec937d2161018946: Bf,
      __wbg_bindFramebuffer_7815ca611abb057f: ke,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: Ee,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: N_,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: mt,
      __wbg_blendFuncSeparate_f366c170c5097fbe: ze,
      __wbg_createRenderbuffer_1e567f2f4d461710: Z_,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: vt,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: er,
      __wbg_stencilOpSeparate_de257f3c29e604cd: Mf,
      __wbg_bindAttribLocation_5cfc7fa688df5051: Ie,
      __wbg_bufferData_1be8450fab534758: Ze,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: $n,
      __wbg_getShaderParameter_786fd84f85720ca8: tr,
      __wbg_getUniformLocation_71c070e6644669ad: fr,
      __wbg_renderbufferStorage_6348154d30979c44: Uc,
      __wbg_copyTexSubImage2D_417a65926e3d2490: q_,
      __wbg_getProgramParameter_43fbc6d2613c08b3: Yn,
      __wbg_stencilFuncSeparate_1798f5cca257f313: Sf,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: If,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: In,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: Ge,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: vn,
      __wbg_uniform2fv_04c304b93cbf7f55: fo,
      __wbg_uniform2iv_ccf2ed44ac8e602e: io,
      __wbg_uniform3fv_aa35ef21e14d5469: so,
      __wbg_uniform3iv_e912f444d4ff8269: mo,
      __wbg_uniform4fv_e6c73702e9a3be5c: So,
      __wbg_uniform4iv_375332584c65e61b: vo,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: an,
      __wbg_disableVertexAttribArray_4bac633c27bae599: zt,
      __wbg_vertexAttribPointer_adbd1853cce679ad: $o,
      __wbg_uniformMatrix2fv_e2806601f5b95102: Mo,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: Eo,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: Ro,
      __wbg_bufferData_52235e85894af988: __,
      __wbg_readPixels_95b2464a7bb863a2: Rc,
      __wbg_bufferSubData_33eebcc173094f6a: n_,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: F_,
      __wbg_clear_4d801d0d054c3579: y_,
      __wbg_flush_7777597fd43065db: xn,
      __wbg_enable_fee40f19b7053ea3: on,
      __wbg_texSubImage2D_19ae4cadb809f264: Wf,
      __wbg_disable_bd37bdcca1764aea: Qt,
      __wbg_scissor_b870b1434a9c25b4: rb,
      __wbg_texImage2D_e71049312f3172d9: Lf,
      __wbg_viewport_174ae1c2209344ae: Yo,
      __wbg_cullFace_39500f654c67a205: dt,
      __wbg_uniform1f_c148eeaf4b531059: ro,
      __wbg_uniform1i_9f3f72dbcb98ada9: co,
      __wbg_uniform4f_71ec75443e58cecc: xo,
      __wbg_movementX_ff6524e06bc35b6a: qr,
      __wbg_movementY_4cec81d9850ad239: Vr,
      __wbg_button_d86841d0a03adc44: c_,
      __wbg_altKey_8155c319c215e3aa: me,
      __wbg_buttons_a158a0cad3175f24: b_,
      __wbg_ctrlKey_96ff94f8b18636a3: it,
      __wbg_metaKey_374999c340f70626: Rr,
      __wbg_shiftKey_5558a3288542c985: df,
      __wbg_key_d41e8e825e6bb0e9: Ar,
      __wbg_code_dee0dae4730408e1: I_,
      __wbg_repeat_375aae5c5c6a0258: jc,
      __wbg_altKey_73c1173ba53073d5: le,
      __wbg_ctrlKey_09a1b54d77dea92b: ut,
      __wbg_location_22bcb1a188a96eb1: kr,
      __wbg_metaKey_67113fb40365d736: Br,
      __wbg_shiftKey_564be91ec842bcc4: gf,
      __wbg_addListener_03e8162d7e03c823: we,
      __wbg_removeListener_e2a199028636dcf5: qc,
      __wbg_media_7bcde781569bca4c: Or,
      __wbg_matches_4b5c22bd830f7bb3: Cr,
      __wbg_preventDefault_cdcfcd7e301b9702: vc,
      __wbg_userAgent_34463fd660ba4a2a: Ko,
      __wbg_new_b949e7f56150a5d1: $r,
      __wbg_abort_2f0584e03e8e3950: ue,
      __wbg_signal_d1285ecab4ebc5ad: sf,
      __wbg_blockSize_ef9a626745d7dfac: $e,
      __wbg_inlineSize_3e4e7e8c813884fd: lr,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: Re,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: at,
      __wbg_deleteVertexArrayOES_197df47ef9684195: kt,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: Pn,
      __wbg_contentRect_79b98e4d4f4728a4: R_,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: Ut,
      __wbg_isIntersecting_6807d592d68e059e: vr,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: Jr,
      __wbg_get_d8db2ad31d529ff8: ir,
      __wbg_disconnect_5202f399852258c0: $t,
      __wbg_observe_1ae37077cf10b11b: ec,
      __wbg_new_2e2be9617c4407d5: Ur,
      __wbg_observe_b9abc08d6d829e56: tc,
      __wbg_unobserve_b4eb8d945252124f: Go,
      __wbg_set_type_148de20768639245: Ja,
      __wbg_set_height_f21f985387070100: oa,
      __wbg_getContext_2a5764d48600bc43: Rn,
      __wbg_getContext_b28d2db7bd648242: Bn,
      __wbg_set_width_d60bc4f2f20c56a4: af,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: xr,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: cr,
      __wbg_set_height_b386c0f603610637: fa,
      __wbg_getContext_2966500392030d63: On,
      __wbg_getContext_de810d9f187f29ca: qn,
      __wbg_set_width_7f07715a20503914: bf,
      __wbg_setProperty_cbb25c4e74285b39: fb,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: Vc,
      __wbg_getPropertyValue_d6911b2a1f9acba9: Jn,
      __wbg_disconnect_0a2d26237dfc1e9e: Xt,
      __wbg_new_8c6e67a40cee1f83: Xr,
      __wbg_observe_2a9d63459970a2c1: _c,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: Jc,
      __wbg_createObjectURL_918185db6a10a0c8: Q_,
      __wbg_deltaMode_a1d1df711e44cefc: Et,
      __wbg_deltaX_f0ca9116db5f7bc1: Lt,
      __wbg_deltaY_eb94120160ac821c: Ct,
      __wbg_pointerId_466b1bdcaf2fe835: gc,
      __wbg_pointerType_ba53c6f18634a26d: sc,
      __wbg_getCoalescedEvents_8d19e426e1461e96: Ln,
      __wbg_pressure_f01a99684f7a6cf3: Sc,
      __wbg_appendChild_dea38765a26d346d: xe,
      __wbg_contains_1056459c33f961e8: O_,
      __wbg_new_6f0524fbfa300c47: Nr,
      __wbg_port1_6251ddc5cf5c9287: mc,
      __wbg_port2_b2a294b0ede1e13c: pc,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: Ht,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: zo,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: nn,
      __wbg_queryCounterEXT_b578f07c30420446: Dc,
      __wbg_set_box_73d3355c6f95f24d: Db,
      __wbg_addEventListener_3acb0aad4483804c: se,
      __wbg_removeEventListener_e63328781a5b9af9: Bc,
      __wbg_postMessage_e45c89e4826cf2ef: yc,
      __wbg_new_4f8f3c123e474358: zr,
      __wbg_log_6b5ca2e6124b2808: Tr,
      __wbg_info_148d043840582012: wr,
      __wbg_warn_f7ae1b2e66ccb930: Zo,
      __wbg_debug_a4099fa12db6cd61: st,
      __wbg_error_9a7fe3f932034cde: sn,
      __wbg_error_f852e41c69b0bd84: wn,
      __wbg_postMessage_46eeeef39934b448: xc,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: Da,
      __wbg_close_fad2f0ee451926ed: v_,
      __wbg_start_ffb4b426b1e661bd: lf,
      __wbg_width_7444cca5dfea0645: t0,
      __wbg_height_c2027cf67d1c9b11: gr,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: _n,
      __wbg_persisted_de98357e1aaf6546: oc,
      __wbg_queueMicrotask_5bb536982f78a56f: kc,
      __wbg_queueMicrotask_0aa0a927f78f5d98: Fc,
      __wbg_performance_7a3ffd0b17f663ad: fc,
      __wbg_now_2c95c9de01293173: Zr,
      __wbg_new_3eb36ae241fe6f44: Kr,
      __wbg_new_361308b2356cecd0: jr,
      __wbg_new_no_args_1c7c842f08d00ebb: Yr,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: Hr,
      __wbg_get_9b94d73e6221f75c: ur,
      __wbg_of_f915f7cd925b21a5: rc,
      __wbg_of_9ab14f9d4bfb5040: nc,
      __wbg_length_35a7bace40f36eac: Pr,
      __wbg_push_8ffdcb2063340ba5: Ac,
      __wbg_includes_32215c836f1cd3fb: sr,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: Kn,
      __wbg_is_f29129f676e5410c: Ir,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: pf,
      __wbg_call_389efe28435a9388: a_,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: xf,
      __wbg_static_accessor_GLOBAL_12837167ad935116: mf,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: yf,
      __wbg_then_b9e7b3b5f1a9e1b5: to,
      __wbg_catch_c1f8c7623b458214: i_,
      __wbg_then_0d9fe2c7b1857d32: _o,
      __wbg_resolve_002c4b7d9d8f6b64: Hc,
      __wbg_set_6cb8631f80447a67: ib,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: be,
      __wbg___wbindgen_throw_be289d5034ed271b: fe,
      __wbg___wbindgen_is_null_ac34f5003991759a: re,
      __wbg___wbindgen_string_get_72fb696202c56729: ae,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: _e,
      __wbg___wbindgen_is_function_0095a73b8b156f76: ne,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: ce,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: te,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: oe,
      __wbindgen_cast_0000000000000001: n0,
      __wbindgen_cast_0000000000000002: r0,
      __wbindgen_cast_0000000000000003: c0,
      __wbindgen_cast_0000000000000004: b0,
      __wbindgen_cast_0000000000000005: a0,
      __wbindgen_cast_0000000000000006: f0,
      __wbindgen_cast_0000000000000007: o0,
      __wbindgen_cast_0000000000000008: u0,
      __wbindgen_cast_0000000000000009: i0,
      __wbindgen_cast_000000000000000a: d0,
      __wbindgen_cast_000000000000000b: g0,
      __wbindgen_cast_000000000000000c: s0,
      __wbindgen_cast_000000000000000d: w0,
      __wbindgen_cast_000000000000000e: l0,
      __wbindgen_cast_000000000000000f: m0,
      __wbindgen_cast_0000000000000010: p0,
      __wbindgen_cast_0000000000000011: x0,
      __wbindgen_cast_0000000000000012: y0,
      __wbindgen_cast_0000000000000013: h0
    }
  }, H), _u = S.memory, tu = S.main, nu = S.run_web, ru = S.__wasm_bindgen_func_elem_6269, cu = S.__wasm_bindgen_func_elem_8309, bu = S.__wasm_bindgen_func_elem_6608, au = S.__wasm_bindgen_func_elem_6600, fu = S.__wasm_bindgen_func_elem_8310, ou = S.__wasm_bindgen_func_elem_6602, uu = S.__wbindgen_export, iu = S.__wbindgen_export2, du = S.__wbindgen_export3, gu = S.__wbindgen_export4, $ = S.__wbindgen_start, su = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_6269: ru,
    __wasm_bindgen_func_elem_6600: au,
    __wasm_bindgen_func_elem_6602: ou,
    __wasm_bindgen_func_elem_6608: bu,
    __wasm_bindgen_func_elem_8309: cu,
    __wasm_bindgen_func_elem_8310: fu,
    __wbindgen_export: uu,
    __wbindgen_export2: iu,
    __wbindgen_export3: du,
    __wbindgen_export4: gu,
    __wbindgen_start: $,
    main: tu,
    memory: _u,
    run_web: nu
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  eu(su);
  $();
})();
export {
  __tla,
  lu as run_web
};
