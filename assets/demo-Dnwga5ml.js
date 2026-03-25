import { _ as N } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let _o;
let __tla = (async () => {
  const X = "/learn-wgpu/assets/demo_bg-5583FwQz.wasm";
  _o = function() {
    d.run_web();
  };
  function $(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function Y(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function H(e) {
    const _ = t(e).WorkerGlobalScope;
    return b(_);
  }
  function J(e) {
    const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function Z(e, _) {
    const n = U(t(_)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function ee(e) {
    return typeof t(e) == "function";
  }
  function _e(e) {
    return t(e) === null;
  }
  function te(e) {
    return t(e) === void 0;
  }
  function ne(e, _) {
    const n = t(_), r = typeof n == "number" ? n : void 0;
    l().setFloat64(e + 8, s(r) ? 0 : r, true), l().setInt32(e + 0, !s(r), true);
  }
  function re(e, _) {
    const n = t(_), r = typeof n == "string" ? n : void 0;
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function ce(e, _) {
    throw new Error(w(e, _));
  }
  function be(e) {
    t(e)._wbg_cb_unref();
  }
  function ae(e) {
    t(e).abort();
  }
  function fe(e) {
    const _ = t(e).activeElement;
    return s(_) ? 0 : b(_);
  }
  function oe(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function ue(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function ie() {
    return u(function(e, _, n, r) {
      t(e).addEventListener(w(_, n), t(r));
    }, arguments);
  }
  function de() {
    return u(function(e, _) {
      t(e).addListener(t(_));
    }, arguments);
  }
  function ge(e) {
    return t(e).altKey;
  }
  function se(e) {
    return t(e).altKey;
  }
  function we(e, _, n) {
    const r = t(e).animate(t(_), t(n));
    return b(r);
  }
  function le() {
    return u(function(e, _) {
      const n = t(e).appendChild(t(_));
      return b(n);
    }, arguments);
  }
  function me(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function pe(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function xe(e, _, n) {
    t(e).beginQuery(_ >>> 0, t(n));
  }
  function ye() {
    return u(function(e, _) {
      const n = t(e).beginRenderPass(t(_));
      return b(n);
    }, arguments);
  }
  function Se(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function he(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function ve(e, _, n, r, c, a) {
    t(e).bindBufferRange(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function Ie(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function Ae(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function De(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function Pe(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function Me(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Fe(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Te(e, _, n) {
    t(e).bindSampler(_ >>> 0, t(n));
  }
  function Ee(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function Le(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function ke(e, _) {
    t(e).bindVertexArrayOES(t(_));
  }
  function Ce(e, _) {
    t(e).bindVertexArray(t(_));
  }
  function Oe(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function Re(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function Be(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function qe(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function Ve(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function We(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function Ue(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Ge(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function je(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function Ke(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function ze(e, _, n, r, c, a, f, o, i, g, m) {
    t(e).blitFramebuffer(_, n, r, c, a, f, o, i, g >>> 0, m >>> 0);
  }
  function Qe(e) {
    return t(e).blockSize;
  }
  function Ne(e) {
    const _ = t(e).body;
    return s(_) ? 0 : b(_);
  }
  function Xe(e, _) {
    const n = t(_).brand, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function $e(e) {
    const _ = t(e).brands;
    return b(_);
  }
  function Ye(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function He(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function Je(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function Ze(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function e_(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function __(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function t_(e) {
    return t(e).button;
  }
  function n_(e) {
    return t(e).buttons;
  }
  function r_() {
    return u(function(e, _) {
      const n = t(e).call(t(_));
      return b(n);
    }, arguments);
  }
  function c_() {
    return u(function(e, _) {
      t(e).cancelAnimationFrame(_);
    }, arguments);
  }
  function b_(e, _) {
    t(e).cancelIdleCallback(_ >>> 0);
  }
  function a_(e) {
    t(e).cancel();
  }
  function f_(e, _) {
    const n = t(e).catch(t(_));
    return b(n);
  }
  function o_(e, _, n, r, c) {
    t(e).clearBufferfv(_ >>> 0, n, p(r, c));
  }
  function u_(e, _, n, r, c) {
    t(e).clearBufferiv(_ >>> 0, n, A(r, c));
  }
  function i_(e, _, n, r, c) {
    t(e).clearBufferuiv(_ >>> 0, n, E(r, c));
  }
  function d_(e, _) {
    t(e).clearDepth(_);
  }
  function g_(e, _) {
    t(e).clearDepth(_);
  }
  function s_(e, _) {
    t(e).clearStencil(_);
  }
  function w_(e, _) {
    t(e).clearStencil(_);
  }
  function l_(e, _) {
    t(e).clearTimeout(_);
  }
  function m_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function p_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function x_(e, _, n, r) {
    return t(e).clientWaitSync(t(_), n >>> 0, r >>> 0);
  }
  function y_(e) {
    t(e).close();
  }
  function S_(e, _) {
    const n = t(_).code, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function h_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function v_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function I_(e, _) {
    t(e).compileShader(t(_));
  }
  function A_(e, _) {
    t(e).compileShader(t(_));
  }
  function D_(e, _, n, r, c, a, f, o, i) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(i));
  }
  function P_(e, _, n, r, c, a, f, o, i) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(i));
  }
  function M_(e, _, n, r, c, a, f, o, i, g) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i, g);
  }
  function F_(e, _, n, r, c, a, f, o, i, g, m) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, t(m));
  }
  function T_(e, _, n, r, c, a, f, o, i, g, m, S) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m, S);
  }
  function E_() {
    return u(function(e, _) {
      t(e).configure(t(_));
    }, arguments);
  }
  function L_(e, _) {
    return t(e).contains(t(_));
  }
  function k_(e) {
    const _ = t(e).contentRect;
    return b(_);
  }
  function C_(e, _, n, r, c, a) {
    t(e).copyBufferSubData(_ >>> 0, n >>> 0, r, c, a);
  }
  function O_(e, _, n, r, c, a, f, o, i) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, i);
  }
  function R_(e, _, n, r, c, a, f, o, i) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, i);
  }
  function B_(e, _, n, r, c, a, f, o, i, g) {
    t(e).copyTexSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g);
  }
  function q_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function V_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function W_(e, _) {
    const n = t(e).createCommandEncoder(t(_));
    return b(n);
  }
  function U_() {
    return u(function(e, _, n) {
      const r = t(e).createElement(w(_, n));
      return b(r);
    }, arguments);
  }
  function G_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function j_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function K_() {
    return u(function(e, _) {
      const n = URL.createObjectURL(t(_)), r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function z_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function Q_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function N_(e) {
    const _ = t(e).createQuery();
    return s(_) ? 0 : b(_);
  }
  function X_(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function $_(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function Y_(e) {
    const _ = t(e).createSampler();
    return s(_) ? 0 : b(_);
  }
  function H_(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function J_(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function Z_(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function et(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function _t(e) {
    const _ = t(e).createVertexArrayOES();
    return s(_) ? 0 : b(_);
  }
  function tt(e) {
    const _ = t(e).createVertexArray();
    return s(_) ? 0 : b(_);
  }
  function nt() {
    return u(function(e, _) {
      const n = t(e).createView(t(_));
      return b(n);
    }, arguments);
  }
  function rt(e) {
    return t(e).ctrlKey;
  }
  function ct(e) {
    return t(e).ctrlKey;
  }
  function bt(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function at(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function ft(e) {
    console.debug(t(e));
  }
  function ot(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function ut(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function it(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function dt(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function gt(e, _) {
    t(e).deleteProgram(t(_));
  }
  function st(e, _) {
    t(e).deleteProgram(t(_));
  }
  function wt(e, _) {
    t(e).deleteQuery(t(_));
  }
  function lt(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function mt(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function pt(e, _) {
    t(e).deleteSampler(t(_));
  }
  function xt(e, _) {
    t(e).deleteShader(t(_));
  }
  function yt(e, _) {
    t(e).deleteShader(t(_));
  }
  function St(e, _) {
    t(e).deleteSync(t(_));
  }
  function ht(e, _) {
    t(e).deleteTexture(t(_));
  }
  function vt(e, _) {
    t(e).deleteTexture(t(_));
  }
  function It(e, _) {
    t(e).deleteVertexArrayOES(t(_));
  }
  function At(e, _) {
    t(e).deleteVertexArray(t(_));
  }
  function Dt(e) {
    return t(e).deltaMode;
  }
  function Pt(e) {
    return t(e).deltaX;
  }
  function Mt(e) {
    return t(e).deltaY;
  }
  function Ft(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Tt(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Et(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function Lt(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function kt(e, _, n) {
    t(e).depthRange(_, n);
  }
  function Ct(e, _, n) {
    t(e).depthRange(_, n);
  }
  function Ot(e) {
    t(e).destroy();
  }
  function Rt(e) {
    const _ = t(e).devicePixelContentBoxSize;
    return b(_);
  }
  function Bt(e) {
    return t(e).devicePixelRatio;
  }
  function qt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function Vt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function Wt(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Ut(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Gt(e) {
    t(e).disconnect();
  }
  function jt(e) {
    t(e).disconnect();
  }
  function Kt(e) {
    const _ = t(e).document;
    return s(_) ? 0 : b(_);
  }
  function zt(e, _, n, r, c) {
    t(e).drawArraysInstancedANGLE(_ >>> 0, n, r, c);
  }
  function Qt(e, _, n, r, c) {
    t(e).drawArraysInstanced(_ >>> 0, n, r, c);
  }
  function Nt(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function Xt(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function $t(e, _) {
    t(e).drawBuffersWEBGL(t(_));
  }
  function Yt(e, _) {
    t(e).drawBuffers(t(_));
  }
  function Ht(e, _, n, r, c, a) {
    t(e).drawElementsInstancedANGLE(_ >>> 0, n, r >>> 0, c, a);
  }
  function Jt(e, _, n, r, c, a) {
    t(e).drawElementsInstanced(_ >>> 0, n, r >>> 0, c, a);
  }
  function Zt(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function en(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function _n(e, _) {
    t(e).enable(_ >>> 0);
  }
  function tn(e, _) {
    t(e).enable(_ >>> 0);
  }
  function nn(e, _) {
    t(e).endQuery(_ >>> 0);
  }
  function rn(e) {
    t(e).end();
  }
  function cn(e, _) {
    let n, r;
    try {
      n = e, r = _, console.error(w(e, _));
    } finally {
      d.__wbindgen_export4(n, r, 1);
    }
  }
  function bn(e) {
    console.error(t(e));
  }
  function an(e, _) {
    console.error(t(e), t(_));
  }
  function fn(e, _, n) {
    const r = t(e).fenceSync(_ >>> 0, n >>> 0);
    return s(r) ? 0 : b(r);
  }
  function on(e) {
    const _ = t(e).finish();
    return b(_);
  }
  function un(e, _) {
    const n = t(e).finish(t(_));
    return b(n);
  }
  function dn(e) {
    t(e).flush();
  }
  function gn(e) {
    t(e).flush();
  }
  function sn() {
    return u(function(e) {
      t(e).focus();
    }, arguments);
  }
  function wn(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function ln(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function mn(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function pn(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function xn(e, _, n, r, c, a) {
    t(e).framebufferTextureLayer(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function yn(e, _, n, r, c, a, f) {
    t(e).framebufferTextureMultiviewOVR(_ >>> 0, n >>> 0, t(r), c, a, f);
  }
  function Sn(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function hn(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function vn(e) {
    const _ = t(e).fullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function In(e, _, n, r) {
    t(e).getBufferSubData(_ >>> 0, n, t(r));
  }
  function An(e) {
    const _ = t(e).getCoalescedEvents;
    return b(_);
  }
  function Dn(e) {
    const _ = t(e).getCoalescedEvents();
    return b(_);
  }
  function Pn() {
    return u(function(e, _) {
      const n = t(e).getComputedStyle(t(_));
      return s(n) ? 0 : b(n);
    }, arguments);
  }
  function Mn() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Fn() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Tn() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function En() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function Ln() {
    return u(function(e) {
      const _ = t(e).getCurrentTexture();
      return b(_);
    }, arguments);
  }
  function kn(e, _, n) {
    const r = t(e).getElementById(w(_, n));
    return s(r) ? 0 : b(r);
  }
  function Cn() {
    return u(function(e, _, n) {
      const r = t(e).getExtension(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function On() {
    return u(function(e, _, n) {
      const r = t(e).getIndexedParameter(_ >>> 0, n >>> 0);
      return b(r);
    }, arguments);
  }
  function Rn() {
    return u(function(e, _, n) {
      const r = t(e).getMappedRange(_, n);
      return b(r);
    }, arguments);
  }
  function Bn(e, _) {
    const n = Object.getOwnPropertyDescriptor(t(e), t(_));
    return b(n);
  }
  function qn() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function Vn() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function Wn(e) {
    const _ = t(e).getPreferredCanvasFormat();
    return (K.indexOf(_) + 1 || 96) - 1;
  }
  function Un(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function Gn(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function jn(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function Kn(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function zn() {
    return u(function(e, _, n, r) {
      const c = t(_).getPropertyValue(w(n, r)), a = y(c, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function Qn(e, _, n) {
    const r = t(e).getQueryParameter(t(_), n >>> 0);
    return b(r);
  }
  function Nn(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function Xn(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function $n(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function Yn(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function Hn(e) {
    const _ = t(e).getSupportedExtensions();
    return s(_) ? 0 : b(_);
  }
  function Jn(e) {
    const _ = t(e).getSupportedProfiles();
    return s(_) ? 0 : b(_);
  }
  function Zn(e, _, n) {
    const r = t(e).getSyncParameter(t(_), n >>> 0);
    return b(r);
  }
  function er(e, _, n, r) {
    return t(e).getUniformBlockIndex(t(_), w(n, r));
  }
  function _r(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function tr(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function nr(e, _) {
    const n = t(e)[_ >>> 0];
    return b(n);
  }
  function rr(e, _) {
    const n = t(e)[_ >>> 0];
    return s(n) ? 0 : b(n);
  }
  function cr(e) {
    const _ = t(e).gpu;
    return b(_);
  }
  function br(e) {
    return t(e).height;
  }
  function ar(e, _, n) {
    return t(e).includes(t(_), n);
  }
  function fr(e) {
    console.info(t(e));
  }
  function or(e) {
    return t(e).inlineSize;
  }
  function ur(e) {
    let _;
    try {
      _ = t(e) instanceof GPUAdapter;
    } catch {
      _ = false;
    }
    return _;
  }
  function ir(e) {
    let _;
    try {
      _ = t(e) instanceof GPUCanvasContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function dr(e) {
    let _;
    try {
      _ = t(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function gr(e) {
    let _;
    try {
      _ = t(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function sr(e) {
    let _;
    try {
      _ = t(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function wr() {
    return u(function(e, _, n) {
      t(e).invalidateFramebuffer(_ >>> 0, t(n));
    }, arguments);
  }
  function lr(e) {
    return t(e).isIntersecting;
  }
  function mr(e, _) {
    return Object.is(t(e), t(_));
  }
  function pr(e, _) {
    const n = t(_).key, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function xr(e, _) {
    const n = t(_).label, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function yr(e) {
    return t(e).length;
  }
  function Sr(e, _) {
    t(e).linkProgram(t(_));
  }
  function hr(e, _) {
    t(e).linkProgram(t(_));
  }
  function vr(e) {
    return t(e).location;
  }
  function Ir(e) {
    console.log(t(e));
  }
  function Ar(e, _, n, r) {
    const c = t(e).mapAsync(_ >>> 0, n, r);
    return b(c);
  }
  function Dr() {
    return u(function(e, _, n) {
      const r = t(e).matchMedia(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Pr(e) {
    return t(e).matches;
  }
  function Mr(e, _) {
    const n = t(_).media, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Fr(e) {
    return t(e).metaKey;
  }
  function Tr(e) {
    return t(e).metaKey;
  }
  function Er(e) {
    return t(e).movementX;
  }
  function Lr(e) {
    return t(e).movementY;
  }
  function kr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function Cr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function Or() {
    return u(function(e) {
      const _ = new ResizeObserver(t(e));
      return b(_);
    }, arguments);
  }
  function Rr() {
    const e = new Object();
    return b(e);
  }
  function Br() {
    const e = new Array();
    return b(e);
  }
  function qr() {
    return u(function(e, _) {
      const n = new Worker(w(e, _));
      return b(n);
    }, arguments);
  }
  function Vr() {
    return u(function() {
      const e = new MessageChannel();
      return b(e);
    }, arguments);
  }
  function Wr() {
    const e = new Error();
    return b(e);
  }
  function Ur() {
    return u(function(e) {
      const _ = new IntersectionObserver(t(e));
      return b(_);
    }, arguments);
  }
  function Gr() {
    return u(function() {
      const e = new AbortController();
      return b(e);
    }, arguments);
  }
  function jr(e, _) {
    const n = new Function(w(e, _));
    return b(n);
  }
  function Kr(e, _, n) {
    const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
    return b(r);
  }
  function zr() {
    return u(function(e, _) {
      const n = new Blob(t(e), t(_));
      return b(n);
    }, arguments);
  }
  function Qr(e) {
    return t(e).now();
  }
  function Nr(e, _, n) {
    t(e).observe(t(_), t(n));
  }
  function Xr(e, _) {
    t(e).observe(t(_));
  }
  function $r(e, _) {
    t(e).observe(t(_));
  }
  function Yr(e, _) {
    const n = Array.of(t(e), t(_));
    return b(n);
  }
  function Hr(e) {
    const _ = Array.of(t(e));
    return b(_);
  }
  function Jr(e) {
    return t(e).offsetX;
  }
  function Zr(e) {
    return t(e).offsetY;
  }
  function ec(e) {
    const _ = t(e).onSubmittedWorkDone();
    return b(_);
  }
  function _c(e) {
    const _ = t(e).performance;
    return b(_);
  }
  function tc(e) {
    return t(e).persisted;
  }
  function nc(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function rc(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function cc(e) {
    t(e).play();
  }
  function bc(e) {
    return t(e).pointerId;
  }
  function ac(e, _) {
    const n = t(_).pointerType, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function fc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function oc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function uc(e) {
    const _ = t(e).port1;
    return b(_);
  }
  function ic(e) {
    const _ = t(e).port2;
    return b(_);
  }
  function dc() {
    return u(function(e, _) {
      t(e).postMessage(t(_));
    }, arguments);
  }
  function gc() {
    return u(function(e, _, n) {
      t(e).postMessage(t(_), t(n));
    }, arguments);
  }
  function sc(e, _, n) {
    const r = t(e).postTask(t(_), t(n));
    return b(r);
  }
  function wc(e) {
    return t(e).pressure;
  }
  function lc(e) {
    t(e).preventDefault();
  }
  function mc() {
    const e = ResizeObserverEntry.prototype;
    return b(e);
  }
  function pc(e, _) {
    return t(e).push(t(_));
  }
  function xc(e, _, n) {
    t(e).queryCounterEXT(t(_), n >>> 0);
  }
  function yc() {
    return u(function(e, _, n) {
      const r = t(e).querySelectorAll(w(_, n));
      return b(r);
    }, arguments);
  }
  function Sc() {
    return u(function(e, _, n) {
      const r = t(e).querySelector(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function hc(e) {
    const _ = t(e).queueMicrotask;
    return b(_);
  }
  function vc(e) {
    queueMicrotask(t(e));
  }
  function Ic(e, _) {
    t(e).queueMicrotask(t(_));
  }
  function Ac(e) {
    const _ = t(e).queue;
    return b(_);
  }
  function Dc(e, _) {
    t(e).readBuffer(_ >>> 0);
  }
  function Pc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Mc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Fc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Tc() {
    return u(function(e, _, n, r) {
      t(e).removeEventListener(w(_, n), t(r));
    }, arguments);
  }
  function Ec() {
    return u(function(e, _) {
      t(e).removeListener(t(_));
    }, arguments);
  }
  function Lc() {
    return u(function(e, _, n, r) {
      const c = t(_).removeProperty(w(n, r)), a = y(c, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function kc(e, _, n, r, c, a) {
    t(e).renderbufferStorageMultisample(_ >>> 0, n, r >>> 0, c, a);
  }
  function Cc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function Oc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function Rc(e) {
    return t(e).repeat;
  }
  function Bc(e, _) {
    const n = t(e).requestAdapter(t(_));
    return b(n);
  }
  function qc() {
    return u(function(e, _) {
      return t(e).requestAnimationFrame(t(_));
    }, arguments);
  }
  function Vc(e, _) {
    const n = t(e).requestDevice(t(_));
    return b(n);
  }
  function Wc(e) {
    const _ = t(e).requestFullscreen;
    return b(_);
  }
  function Uc(e) {
    const _ = t(e).requestFullscreen();
    return b(_);
  }
  function Gc(e) {
    const _ = t(e).requestIdleCallback;
    return b(_);
  }
  function jc() {
    return u(function(e, _) {
      return t(e).requestIdleCallback(t(_));
    }, arguments);
  }
  function Kc(e) {
    const _ = Promise.resolve(t(e));
    return b(_);
  }
  function zc() {
    return u(function(e, _) {
      URL.revokeObjectURL(w(e, _));
    }, arguments);
  }
  function Qc(e, _, n, r) {
    t(e).samplerParameterf(t(_), n >>> 0, r);
  }
  function Nc(e, _, n, r) {
    t(e).samplerParameteri(t(_), n >>> 0, r);
  }
  function Xc(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function $c(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function Yc(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function Hc(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function Jc() {
    return u(function(e, _, n, r, c) {
      t(e).setAttribute(w(_, n), w(r, c));
    }, arguments);
  }
  function Zc() {
    return u(function(e, _) {
      t(e).setPointerCapture(_);
    }, arguments);
  }
  function eb() {
    return u(function(e, _, n, r, c) {
      t(e).setProperty(w(_, n), w(r, c));
    }, arguments);
  }
  function _b() {
    return u(function(e, _) {
      return t(e).setTimeout(t(_));
    }, arguments);
  }
  function tb() {
    return u(function(e, _, n) {
      return t(e).setTimeout(t(_), n);
    }, arguments);
  }
  function nb() {
    return u(function(e, _, n) {
      return Reflect.set(t(e), t(_), t(n));
    }, arguments);
  }
  function rb(e, _) {
    t(e).a = _;
  }
  function cb(e, _) {
    t(e).alphaMode = x0[_];
  }
  function bb(e, _) {
    t(e).arrayLayerCount = _ >>> 0;
  }
  function ab(e, _) {
    t(e).aspect = S0[_];
  }
  function fb(e, _) {
    t(e).b = _;
  }
  function ob(e, _) {
    t(e).baseArrayLayer = _ >>> 0;
  }
  function ub(e, _) {
    t(e).baseMipLevel = _ >>> 0;
  }
  function ib(e, _) {
    t(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function db(e, _) {
    t(e).box = v0[_];
  }
  function gb(e, _) {
    t(e).clearValue = t(_);
  }
  function sb(e, _) {
    t(e).colorAttachments = t(_);
  }
  function wb(e, _) {
    t(e).depthClearValue = _;
  }
  function lb(e, _) {
    t(e).depthLoadOp = G[_];
  }
  function mb(e, _) {
    t(e).depthReadOnly = _ !== 0;
  }
  function pb(e, _) {
    t(e).depthStencilAttachment = t(_);
  }
  function xb(e, _) {
    t(e).depthStoreOp = j[_];
  }
  function yb(e, _) {
    t(e).device = t(_);
  }
  function Sb(e, _) {
    t(e).dimension = h0[_];
  }
  function hb(e, _) {
    t(e).endOfPassWriteIndex = _ >>> 0;
  }
  function vb(e, _) {
    t(e).format = K[_];
  }
  function Ib(e, _) {
    t(e).format = K[_];
  }
  function Ab(e, _) {
    t(e).g = _;
  }
  function Db(e, _) {
    t(e).height = _ >>> 0;
  }
  function Pb(e, _) {
    t(e).height = _ >>> 0;
  }
  function Mb(e, _, n) {
    t(e).label = w(_, n);
  }
  function Fb(e, _, n) {
    t(e).label = w(_, n);
  }
  function Tb(e, _, n) {
    t(e).label = w(_, n);
  }
  function Eb(e, _, n) {
    t(e).label = w(_, n);
  }
  function Lb(e, _, n) {
    t(e).label = w(_, n);
  }
  function kb(e, _) {
    t(e).loadOp = G[_];
  }
  function Cb(e, _) {
    t(e).mipLevelCount = _ >>> 0;
  }
  function Ob(e, _) {
    t(e).onmessage = t(_);
  }
  function Rb(e, _) {
    t(e).powerPreference = y0[_];
  }
  function Bb(e, _) {
    t(e).querySet = t(_);
  }
  function qb(e, _) {
    t(e).r = _;
  }
  function Vb(e, _) {
    t(e).requiredFeatures = t(_);
  }
  function Wb(e, _) {
    t(e).requiredLimits = t(_);
  }
  function Ub(e, _) {
    t(e).resolveTarget = t(_);
  }
  function Gb(e, _) {
    t(e).stencilClearValue = _ >>> 0;
  }
  function jb(e, _) {
    t(e).stencilLoadOp = G[_];
  }
  function Kb(e, _) {
    t(e).stencilReadOnly = _ !== 0;
  }
  function zb(e, _) {
    t(e).stencilStoreOp = j[_];
  }
  function Qb(e, _) {
    t(e).storeOp = j[_];
  }
  function Nb(e, _) {
    t(e).timestampWrites = t(_);
  }
  function Xb(e, _, n) {
    t(e).type = w(_, n);
  }
  function $b(e, _) {
    t(e).usage = _ >>> 0;
  }
  function Yb(e, _) {
    t(e).usage = _ >>> 0;
  }
  function Hb(e, _) {
    t(e).view = t(_);
  }
  function Jb(e, _) {
    t(e).view = t(_);
  }
  function Zb(e, _) {
    t(e).viewFormats = t(_);
  }
  function ea(e, _) {
    t(e).width = _ >>> 0;
  }
  function _a(e, _) {
    t(e).width = _ >>> 0;
  }
  function ta(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function na(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function ra(e) {
    return t(e).shiftKey;
  }
  function ca(e) {
    return t(e).shiftKey;
  }
  function ba(e) {
    const _ = t(e).signal;
    return b(_);
  }
  function aa(e, _) {
    const n = t(_).stack, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function fa(e) {
    t(e).start();
  }
  function oa() {
    const e = typeof global > "u" ? null : global;
    return s(e) ? 0 : b(e);
  }
  function ua() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return s(e) ? 0 : b(e);
  }
  function ia() {
    const e = typeof self > "u" ? null : self;
    return s(e) ? 0 : b(e);
  }
  function da() {
    const e = typeof window > "u" ? null : window;
    return s(e) ? 0 : b(e);
  }
  function ga(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function sa(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function wa(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function la(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function ma(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function pa(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function xa(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function ya(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Sa(e) {
    const _ = t(e).style;
    return b(_);
  }
  function ha(e, _) {
    t(e).submit(t(_));
  }
  function va() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Ia() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Aa() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Da() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, i >>> 0, g >>> 0, m);
    }, arguments);
  }
  function Pa() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, i >>> 0, g >>> 0, t(m));
    }, arguments);
  }
  function Ma(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function Fa(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function Ta(e, _, n, r, c, a) {
    t(e).texStorage2D(_ >>> 0, n, r >>> 0, c, a);
  }
  function Ea(e, _, n, r, c, a, f) {
    t(e).texStorage3D(_ >>> 0, n, r >>> 0, c, a, f);
  }
  function La() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function ka() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Ca() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Oa() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Ra() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Ba() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function qa() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, t(g));
    }, arguments);
  }
  function Va() {
    return u(function(e, _, n, r, c, a, f, o, i, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function Wa() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function Ua() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function Ga() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function ja() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function Ka() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function za() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, S);
    }, arguments);
  }
  function Qa() {
    return u(function(e, _, n, r, c, a, f, o, i, g, m, S) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, i, g >>> 0, m >>> 0, t(S));
    }, arguments);
  }
  function Na(e, _, n) {
    const r = t(e).then(t(_), t(n));
    return b(r);
  }
  function Xa(e, _) {
    const n = t(e).then(t(_));
    return b(n);
  }
  function $a(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function Ya(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function Ha(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function Ja(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function Za(e, _, n) {
    t(e).uniform1ui(t(_), n >>> 0);
  }
  function ef(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function _f(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function tf(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function nf(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function rf(e, _, n, r) {
    t(e).uniform2uiv(t(_), E(n, r));
  }
  function cf(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function bf(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function af(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function ff(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function of(e, _, n, r) {
    t(e).uniform3uiv(t(_), E(n, r));
  }
  function uf(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function df(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function gf(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function sf(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function wf(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function lf(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function mf(e, _, n, r) {
    t(e).uniform4uiv(t(_), E(n, r));
  }
  function pf(e, _, n, r) {
    t(e).uniformBlockBinding(t(_), n >>> 0, r >>> 0);
  }
  function xf(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function yf(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function Sf(e, _, n, r, c) {
    t(e).uniformMatrix2x3fv(t(_), n !== 0, p(r, c));
  }
  function hf(e, _, n, r, c) {
    t(e).uniformMatrix2x4fv(t(_), n !== 0, p(r, c));
  }
  function vf(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function If(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function Af(e, _, n, r, c) {
    t(e).uniformMatrix3x2fv(t(_), n !== 0, p(r, c));
  }
  function Df(e, _, n, r, c) {
    t(e).uniformMatrix3x4fv(t(_), n !== 0, p(r, c));
  }
  function Pf(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Mf(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Ff(e, _, n, r, c) {
    t(e).uniformMatrix4x2fv(t(_), n !== 0, p(r, c));
  }
  function Tf(e, _, n, r, c) {
    t(e).uniformMatrix4x3fv(t(_), n !== 0, p(r, c));
  }
  function Ef(e) {
    t(e).unmap();
  }
  function Lf(e, _) {
    t(e).unobserve(t(_));
  }
  function kf(e, _) {
    t(e).useProgram(t(_));
  }
  function Cf(e, _) {
    t(e).useProgram(t(_));
  }
  function Of(e) {
    const _ = t(e).userAgentData;
    return s(_) ? 0 : b(_);
  }
  function Rf() {
    return u(function(e, _) {
      const n = t(_).userAgent, r = y(n, d.__wbindgen_export, d.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function Bf(e, _, n) {
    t(e).vertexAttribDivisorANGLE(_ >>> 0, n >>> 0);
  }
  function qf(e, _, n) {
    t(e).vertexAttribDivisor(_ >>> 0, n >>> 0);
  }
  function Vf(e, _, n, r, c, a) {
    t(e).vertexAttribIPointer(_ >>> 0, n, r >>> 0, c, a);
  }
  function Wf(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function Uf(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function Gf(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function jf(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function Kf(e) {
    const _ = t(e).visibilityState;
    return (I0.indexOf(_) + 1 || 3) - 1;
  }
  function zf(e) {
    console.warn(t(e));
  }
  function Qf(e) {
    const _ = t(e).webkitFullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function Nf(e) {
    t(e).webkitRequestFullscreen();
  }
  function Xf(e) {
    return t(e).width;
  }
  function $f(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, p0);
    return b(n);
  }
  function Yf(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function Hf(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function Jf(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function Zf(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function e0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function _0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function t0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, D);
    return b(n);
  }
  function n0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_5890, l0);
    return b(n);
  }
  function r0(e, _) {
    const n = v(e, _, d.__wasm_bindgen_func_elem_7930, m0);
    return b(n);
  }
  function c0(e) {
    return b(e);
  }
  function b0(e, _) {
    const n = p(e, _);
    return b(n);
  }
  function a0(e, _) {
    const n = D0(e, _);
    return b(n);
  }
  function f0(e, _) {
    const n = A(e, _);
    return b(n);
  }
  function o0(e, _) {
    const n = P0(e, _);
    return b(n);
  }
  function u0(e, _) {
    const n = M0(e, _);
    return b(n);
  }
  function i0(e, _) {
    const n = E(e, _);
    return b(n);
  }
  function d0(e, _) {
    const n = F0(e, _);
    return b(n);
  }
  function g0(e, _) {
    const n = w(e, _);
    return b(n);
  }
  function s0(e) {
    const _ = t(e);
    return b(_);
  }
  function w0(e) {
    R0(e);
  }
  function l0(e, _) {
    d.__wasm_bindgen_func_elem_6223(e, _);
  }
  function D(e, _, n) {
    d.__wasm_bindgen_func_elem_6221(e, _, b(n));
  }
  function m0(e, _, n) {
    d.__wasm_bindgen_func_elem_7931(e, _, b(n));
  }
  function p0(e, _, n, r) {
    d.__wasm_bindgen_func_elem_6229(e, _, b(n), b(r));
  }
  const x0 = [
    "opaque",
    "premultiplied"
  ], G = [
    "load",
    "clear"
  ], y0 = [
    "low-power",
    "high-performance"
  ], j = [
    "store",
    "discard"
  ], S0 = [
    "all",
    "stencil-only",
    "depth-only"
  ], K = [
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
  ], h0 = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], v0 = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], I0 = [
    "hidden",
    "visible"
  ];
  function b(e) {
    F === I.length && I.push(I.length + 1);
    const _ = F;
    return F = I[_], I[_] = e, _;
  }
  const z = typeof FinalizationRegistry > "u" ? {
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
  function A0(e) {
    e < 132 || (I[e] = F, F = e);
  }
  function p(e, _) {
    return e = e >>> 0, T0().subarray(e / 4, e / 4 + _);
  }
  function D0(e, _) {
    return e = e >>> 0, E0().subarray(e / 2, e / 2 + _);
  }
  function A(e, _) {
    return e = e >>> 0, L0().subarray(e / 4, e / 4 + _);
  }
  function P0(e, _) {
    return e = e >>> 0, k0().subarray(e / 1, e / 1 + _);
  }
  function M0(e, _) {
    return e = e >>> 0, C0().subarray(e / 2, e / 2 + _);
  }
  function E(e, _) {
    return e = e >>> 0, O0().subarray(e / 4, e / 4 + _);
  }
  function F0(e, _) {
    return e = e >>> 0, M().subarray(e / 1, e / 1 + _);
  }
  let P = null;
  function l() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== d.memory.buffer) && (P = new DataView(d.memory.buffer)), P;
  }
  let L = null;
  function T0() {
    return (L === null || L.byteLength === 0) && (L = new Float32Array(d.memory.buffer)), L;
  }
  let k = null;
  function E0() {
    return (k === null || k.byteLength === 0) && (k = new Int16Array(d.memory.buffer)), k;
  }
  let C = null;
  function L0() {
    return (C === null || C.byteLength === 0) && (C = new Int32Array(d.memory.buffer)), C;
  }
  let O = null;
  function k0() {
    return (O === null || O.byteLength === 0) && (O = new Int8Array(d.memory.buffer)), O;
  }
  function w(e, _) {
    return e = e >>> 0, q0(e, _);
  }
  let R = null;
  function C0() {
    return (R === null || R.byteLength === 0) && (R = new Uint16Array(d.memory.buffer)), R;
  }
  let B = null;
  function O0() {
    return (B === null || B.byteLength === 0) && (B = new Uint32Array(d.memory.buffer)), B;
  }
  let q = null;
  function M() {
    return (q === null || q.byteLength === 0) && (q = new Uint8Array(d.memory.buffer)), q;
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
      --c.cnt === 0 && (c.dtor(c.a, c.b), c.a = 0, z.unregister(c));
    }, z.register(a, c, c), a;
  }
  function y(e, _, n) {
    if (n === void 0) {
      const o = T.encode(e), i = _(o.length, 1) >>> 0;
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
      const o = M().subarray(c + f, c + r), i = T.encodeInto(e, o);
      f += i.written, c = n(c, r, f, 1) >>> 0;
    }
    return x = f, c;
  }
  function R0(e) {
    const _ = t(e);
    return A0(e), _;
  }
  let V = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  V.decode();
  const B0 = 2146435072;
  let W = 0;
  function q0(e, _) {
    return W += _, W >= B0 && (V = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), V.decode(), W = _), V.decode(M().subarray(e, e + _));
  }
  const T = new TextEncoder();
  "encodeInto" in T || (T.encodeInto = function(e, _) {
    const n = T.encode(e);
    return _.set(n), {
      read: e.length,
      written: n.length
    };
  });
  let x = 0, d;
  function V0(e) {
    d = e;
  }
  URL = globalThis.URL;
  const h = await N({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: w0,
      __wbg_new_8a6f238a6ece86ea: Wr,
      __wbg_stack_0ed75d68575b0f3c: aa,
      __wbg_error_7534b8e9a36f1ab4: cn,
      __wbg_set_color_attachments_81e56abd7f11d38b: sb,
      __wbg_set_label_10c0715c06c574ce: Mb,
      __wbg_set_view_dc1937ba74f6a24a: Jb,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: wb,
      __wbg_set_depth_load_op_0e48f976ce8bf626: lb,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: xb,
      __wbg_set_depth_read_only_16d1277d6c444182: mb,
      __wbg_set_stencil_clear_value_c88c52b70d827549: Gb,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: jb,
      __wbg_set_stencil_store_op_b92786567b815d0f: zb,
      __wbg_set_stencil_read_only_54652ff66298c4c5: Kb,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: pb,
      __wbg_set_query_set_1f3c39edf379c9f9: Bb,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: ib,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: hb,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: Nb,
      __wbg_beginRenderPass_c95ff061c0d906d5: ye,
      __wbg_label_37d2cc4e867fe710: xr,
      __wbg_set_label_5871c6a4116d78e4: Tb,
      __wbg_finish_cafc9caa4b3df56c: un,
      __wbg_finish_42f37cad38abaf27: on,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: ir,
      __wbindgen_object_clone_ref: s0,
      __wbg_Window_89f1205e6b84c5cf: $,
      __wbg_gpu_97c682b8bbd6da29: cr,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: H,
      __wbg_set_a_cb5a15147778942a: rb,
      __wbg_set_b_130b6d20afdc640c: fb,
      __wbg_set_g_a202edac674d3195: Ab,
      __wbg_set_r_d02e085dc65c7ba3: qb,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: ec,
      __wbg_submit_5f96af711b83c2df: ha,
      __wbg_getMappedRange_9a20d37843bbc5dd: Rn,
      __wbg_unmap_80761f81f18ec521: Ef,
      __wbg_destroy_834dd203329bdb3c: Ot,
      __wbg_mapAsync_c9718fcf0566073c: Ar,
      __wbg_set_label_4f94deb040009907: Fb,
      __wbg_createCommandEncoder_e817b588d596b7d6: W_,
      __wbg_end_5a7ce60dc0f49d42: rn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Wb,
      __wbg_set_required_features_505229173e5ae00f: Vb,
      __wbg_set_label_fcbb40adcedf7a3a: Lb,
      __wbg_requestDevice_acf949c0a7d11096: Vc,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: Wn,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: Ln,
      __wbg_set_device_cf77f0192bc5144c: yb,
      __wbg_set_format_f98f8a95c86d8cc1: Ib,
      __wbg_set_usage_e94a8ea3a622b561: Yb,
      __wbg_set_alpha_mode_ea0e62378a600722: cb,
      __wbg_set_view_formats_57015785ec512612: Zb,
      __wbg_configure_9ddad01510ae8865: E_,
      __wbg_set_dimension_f73df134b3cb9008: Sb,
      __wbg_set_format_17bbec4e26222ce0: vb,
      __wbg_set_aspect_24f00699ffc05e48: ab,
      __wbg_set_base_array_layer_8a27534c79ebf816: ob,
      __wbg_set_array_layer_count_fbec00646c2f76f0: bb,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: ub,
      __wbg_set_mip_level_count_11613862db4f5326: Cb,
      __wbg_set_label_a9e60f11d8f6d907: Eb,
      __wbg_set_usage_8a7a3a48dde89c84: $b,
      __wbg_createView_da8865cdd09ec9d5: nt,
      __wbg_set_power_preference_ad90ccb2239fef97: Rb,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: Bc,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: ur,
      __wbg_queue_19586e9507f5e981: Ac,
      __wbg_set_load_op_de7ca59cc25dfb40: kb,
      __wbg_set_store_op_5185ea291265ee63: Qb,
      __wbg_set_view_330ed9fc9fcc4d01: Hb,
      __wbg_set_clear_value_576d8a3bda7ba8cc: gb,
      __wbg_set_resolve_target_cce9edc587b4211e: Ub,
      __wbg_requestFullscreen_86fc6cdb76000482: Wc,
      __wbg_scheduler_5156bb61cc1cf589: $c,
      __wbg_getCoalescedEvents_21492912fd0145ec: An,
      __wbg_requestIdleCallback_1b8d644ff564208f: Gc,
      __wbg_offsetX_cb6a38e6f23cb4a6: Jr,
      __wbg_offsetY_43e21941c5c1f8bf: Zr,
      __wbg_cancel_09c394f0894744eb: a_,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: Qf,
      __wbg_requestFullscreen_9f0611438eb929cf: Uc,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: Nf,
      __wbg_scheduler_48482a9974eeacbd: Xc,
      __wbg_postTask_41d93e93941e4a3d: sc,
      __wbg_userAgentData_f7b0e61c05c54315: Of,
      __wbg_brands_a1e7a2bce052128f: $e,
      __wbg_brand_9562792cbb4735c3: Xe,
      __wbg_prototype_c28bca39c45aba9b: mc,
      __wbg_animate_6ec571f163cf6f8d: we,
      __wbg_play_63bc12f42e16af91: cc,
      __wbg_Window_d1bf622f71ff0629: Y,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: gr,
      __wbg_blendFunc_2ef59299d10c662d: je,
      __wbg_colorMask_177d9762658e5e28: h_,
      __wbg_depthFunc_f670d4cbb9cd0913: Tt,
      __wbg_depthMask_75a36d0065471a4b: Lt,
      __wbg_fenceSync_c52a4e24eabfa0d3: fn,
      __wbg_frontFace_d4a6507ad2939b5c: hn,
      __wbg_uniform1ui_a0f911ff174715d0: Za,
      __wbg_beginQuery_0fdf154e1da0e73d: xe,
      __wbg_bindBuffer_c9068e8712a034f5: Ae,
      __wbg_blendColor_e799d452ab2a5788: Re,
      __wbg_clearDepth_670099db422a4f91: g_,
      __wbg_deleteSync_c8e4a9c735f71d18: St,
      __wbg_depthRange_337bf254e67639bb: kt,
      __wbg_drawArrays_075228181299b824: Nt,
      __wbg_readBuffer_9eb461d6857295f0: Dc,
      __wbg_useProgram_fe720ade4d3b6edb: Cf,
      __wbg_bindSampler_96f0e90e7bc31da9: Te,
      __wbg_bindTexture_b2b7b1726a83f93e: Ee,
      __wbg_createQuery_7988050efd7e4c48: N_,
      __wbg_deleteQuery_ea8bf1954febd774: wt,
      __wbg_drawBuffers_5eccfaacc6560299: Yt,
      __wbg_linkProgram_6600dd2c0863bbfd: Sr,
      __wbg_pixelStorei_2a65936c11b710fe: nc,
      __wbg_stencilMask_732dcc5aada10e4c: pa,
      __wbg_attachShader_b36058e5c9eeaf54: pe,
      __wbg_clearStencil_5d243d0dff03c315: s_,
      __wbg_createBuffer_26534c05e01b8559: q_,
      __wbg_createShader_e3ac08ed8c5b14b2: H_,
      __wbg_deleteBuffer_ab099883c168644d: ut,
      __wbg_deleteShader_aaf3b520a64d5d9d: xt,
      __wbg_getExtension_3c0cb5ae01bb4b17: Cn,
      __wbg_getParameter_2e1f97ecaab76274: Vn,
      __wbg_shaderSource_32425cfe6e5a1e52: ta,
      __wbg_activeTexture_6f9a710514686c24: oe,
      __wbg_blendEquation_e9b99928ed1494ad: We,
      __wbg_compileShader_94718a93495d565d: A_,
      __wbg_createProgram_9b7710a1f2701c2c: Q_,
      __wbg_createSampler_da6bb96c9ffaaa27: Y_,
      __wbg_createTexture_16d2c8a3d7d4a75a: Z_,
      __wbg_deleteProgram_9298fb3e3c1d3a78: gt,
      __wbg_deleteSampler_c6b68c4071841afa: pt,
      __wbg_deleteTexture_9d411c0e60ffa324: vt,
      __wbg_polygonOffset_4b3158d8ed028862: oc,
      __wbg_texParameteri_0d45be2c88d6bad8: Ma,
      __wbg_texStorage2D_9504743abf5a986a: Ta,
      __wbg_texStorage3D_e9e1b58fee218abe: Ea,
      __wbg_bindFramebuffer_031c73ba501cb8f6: De,
      __wbg_blitFramebuffer_d730a23ab4db248e: ze,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: Me,
      __wbg_bindVertexArray_78220d1edb1d2382: Ce,
      __wbg_createFramebuffer_41512c38358a41c4: G_,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: dt,
      __wbg_getSyncParameter_7d11ab875b41617e: Zn,
      __wbg_samplerParameterf_f070d2b69b1e2d46: Qc,
      __wbg_samplerParameteri_8e4c4bcead0ee669: Nc,
      __wbg_blendFuncSeparate_95465944f788a092: Ue,
      __wbg_createRenderbuffer_a601226a6a680dbe: $_,
      __wbg_createVertexArray_ad5294951ae57497: tt,
      __wbg_deleteRenderbuffer_096edada57729468: lt,
      __wbg_deleteVertexArray_7bc7f92769862f93: At,
      __wbg_getQueryParameter_5d6af051438ae479: Qn,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: Xn,
      __wbg_stencilOpSeparate_4657523b1d3b184f: xa,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: he,
      __wbg_bufferData_32d26eba0c74a53c: He,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: Un,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: Yn,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: tr,
      __wbg_readPixels_6ea8e288a8673282: Mc,
      __wbg_renderbufferStorage_1bc02383614b76b2: Cc,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: R_,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: B_,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: Qt,
      __wbg_getIndexedParameter_ca1693c768bc4934: On,
      __wbg_getProgramParameter_92e4540ca9da06b2: Kn,
      __wbg_stencilFuncSeparate_10d043d0af14366f: ga,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: wa,
      __wbg_texImage3D_2082006a8a9b28a7: Da,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: pf,
      __wbg_vertexAttribDivisor_744c0ca468594894: qf,
      __wbg_framebufferTexture2D_c283e928186aa542: pn,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: wr,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: qe,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: er,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: wn,
      __wbg_getSupportedExtensions_57142a6b598d7787: Hn,
      __wbg_clientWaitSync_21865feaeb76a9a5: x_,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: xn,
      __wbg_texSubImage3D_59b8e24fb05787aa: za,
      __wbg_uniform2fv_2fb47cfe06330cc7: _f,
      __wbg_uniform2iv_095baf208f172131: tf,
      __wbg_uniform3fv_c0872003729939a5: bf,
      __wbg_uniform3iv_6aa2b0791e659d14: af,
      __wbg_uniform4fv_498bd80dc5aa16ff: gf,
      __wbg_uniform4iv_8a8219fda39dffd5: lf,
      __wbg_enableVertexAttribArray_475e06c31777296d: Zt,
      __wbg_uniform2uiv_3030d7e769f5e82a: rf,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: of,
      __wbg_uniform4uiv_046ee400bb80547d: mf,
      __wbg_disableVertexAttribArray_24a020060006b10f: qt,
      __wbg_clearBufferfv_ac87d92e2f45d80c: o_,
      __wbg_clearBufferiv_69ff24bb52ec4c88: u_,
      __wbg_clearBufferuiv_8ad59a8219aafaca: i_,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: Wf,
      __wbg_drawElementsInstanced_d41fc920ae24717c: Jt,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: kc,
      __wbg_texSubImage3D_45591e5655d1ed5c: ja,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: xf,
      __wbg_uniformMatrix3fv_6f822361173d8046: vf,
      __wbg_uniformMatrix4fv_0e724dbebd372526: Pf,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: Vf,
      __wbg_bindBufferRange_009d206fe9e4151e: ve,
      __wbg_bufferData_98f6c413a8f0f139: Ze,
      __wbg_texSubImage3D_3b653017c4c5d721: Ga,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: Sf,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: hf,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: Af,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: Df,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: Ff,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: Tf,
      __wbg_readPixels_55b18304384e073d: Pc,
      __wbg_texImage3D_bd2b0bd2cfcdb278: Pa,
      __wbg_texSubImage3D_47643556a8a4bf86: Ka,
      __wbg_texSubImage3D_18d7f3c65567c885: Ua,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: Qa,
      __wbg_texSubImage3D_1102c12a20bf56d5: Wa,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: M_,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: T_,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: C_,
      __wbg_bufferSubData_3e902f031adf13fd: __,
      __wbg_compressedTexSubImage2D_684350eb62830032: P_,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: F_,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: In,
      __wbg_texSubImage2D_edf5bd70fda3feaf: Va,
      __wbg_clear_7187030f892c5ca0: p_,
      __wbg_flush_e322496f5412e567: gn,
      __wbg_texImage2D_13414a4692836804: Ia,
      __wbg_texSubImage2D_bf72e56edeeed376: Ra,
      __wbg_texSubImage2D_e193f1d28439217c: qa,
      __wbg_enable_d1ac04dfdd2fb3ae: _n,
      __wbg_texSubImage2D_117d29278542feb0: La,
      __wbg_texSubImage2D_bd034db2e58c352c: Oa,
      __wbg_texSubImage2D_5d270af600a7fc4a: Ca,
      __wbg_texSubImage2D_d17a39cdec4a3495: Ba,
      __wbg_disable_7fe6fb3e97717f88: Wt,
      __wbg_scissor_2ff8f18f05a6d408: Yc,
      __wbg_texImage2D_087ef94df78081f0: va,
      __wbg_viewport_df236eac68bc7467: jf,
      __wbg_cullFace_e7e711a14d2c3f48: at,
      __wbg_endQuery_54f0627d4c931318: nn,
      __wbg_uniform1f_b500ede5b612bea2: $a,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: Ja,
      __wbg_uniform4f_f6b5e2024636033a: df,
      __wbg_instanceof_Window_ed49b2db8df90359: sr,
      __wbg_matchMedia_91d4fc9729dc3c84: Dr,
      __wbg_queueMicrotask_885fd8605352e25d: Ic,
      __wbg_devicePixelRatio_5c458affc89fc209: Bt,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Pn,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: b_,
      __wbg_requestIdleCallback_c9c643f8210d435b: jc,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: c_,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: qc,
      __wbg_clearTimeout_df03cf00269bc442: l_,
      __wbg_setTimeout_681abd84926a4da3: _b,
      __wbg_setTimeout_eff32631ea138533: tb,
      __wbg_document_ee35a3d3ae34ef6c: Kt,
      __wbg_navigator_43be698ba96fc088: kr,
      __wbg_setAttribute_cc8e4c8a2a008508: Jc,
      __wbg_setPointerCapture_420db6f6826eb74b: Zc,
      __wbg_activeElement_1554b6917654f8d6: fe,
      __wbg_createElement_49f60fdcaae809c8: U_,
      __wbg_querySelector_c3b0df2d58eec220: Sc,
      __wbg_visibilityState_43b7b74940e07d22: Kf,
      __wbg_getElementById_e34377b79d7285f6: kn,
      __wbg_fullscreenElement_25b445e2961e68ba: vn,
      __wbg_querySelectorAll_1283aae52043a951: yc,
      __wbg_body_f67922363a220026: Ne,
      __wbg_navigator_4478931f32ebca57: Cr,
      __wbg_focus_128ff465f65677cc: sn,
      __wbg_style_0b7c9bd318f8b807: Sa,
      __wbg_blendFunc_446658e7231ab9c8: Ke,
      __wbg_colorMask_7a8dbc86e7376a9b: v_,
      __wbg_depthFunc_eb3aa05361dd2eaa: Ft,
      __wbg_depthMask_103091329ca1a750: Et,
      __wbg_frontFace_027e2ec7a7bc347c: Sn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: Ie,
      __wbg_blendColor_1d50ac87d9a2794b: Oe,
      __wbg_clearDepth_2b109f644a783a53: d_,
      __wbg_depthRange_5579d448b9d7de57: Ct,
      __wbg_drawArrays_2be89c369a29f30b: Xt,
      __wbg_useProgram_e82c1a5f87d81579: kf,
      __wbg_bindTexture_ec13ddcb9dc8e032: Le,
      __wbg_linkProgram_be6b825cf66d177b: hr,
      __wbg_pixelStorei_f7cc498f52d523f1: rc,
      __wbg_stencilMask_0eca090c4c47f8f7: ma,
      __wbg_attachShader_32114efcf2744eb6: me,
      __wbg_clearStencil_aa65955bb39d8c18: w_,
      __wbg_createBuffer_c4ec897aacc1b91c: V_,
      __wbg_createShader_f2b928ca9a426b14: J_,
      __wbg_deleteBuffer_22fcc93912cbf659: ot,
      __wbg_deleteShader_ff70ca962883e241: yt,
      __wbg_getParameter_1ecb910cfdd21f88: qn,
      __wbg_shaderSource_8f4bda03f70359df: na,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: ue,
      __wbg_blendEquation_82202f34c4c00e50: Ve,
      __wbg_compileShader_63b824e86bb00b8f: I_,
      __wbg_createProgram_98aaa91f7c81c5e2: z_,
      __wbg_createTexture_f9451a82c7527ce2: et,
      __wbg_deleteProgram_f354e79b8cae8076: st,
      __wbg_deleteTexture_2be78224e5584a8b: ht,
      __wbg_polygonOffset_24a8059deb03be92: fc,
      __wbg_texParameteri_ec937d2161018946: Fa,
      __wbg_bindFramebuffer_7815ca611abb057f: Pe,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: Fe,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: j_,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: it,
      __wbg_blendFuncSeparate_f366c170c5097fbe: Ge,
      __wbg_createRenderbuffer_1e567f2f4d461710: X_,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: mt,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: Nn,
      __wbg_stencilOpSeparate_de257f3c29e604cd: ya,
      __wbg_bindAttribLocation_5cfc7fa688df5051: Se,
      __wbg_bufferData_1be8450fab534758: Ye,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: Gn,
      __wbg_getShaderParameter_786fd84f85720ca8: $n,
      __wbg_getUniformLocation_71c070e6644669ad: _r,
      __wbg_renderbufferStorage_6348154d30979c44: Oc,
      __wbg_copyTexSubImage2D_417a65926e3d2490: O_,
      __wbg_getProgramParameter_43fbc6d2613c08b3: jn,
      __wbg_stencilFuncSeparate_1798f5cca257f313: sa,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: la,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: mn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: Be,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: ln,
      __wbg_uniform2fv_04c304b93cbf7f55: ef,
      __wbg_uniform2iv_ccf2ed44ac8e602e: nf,
      __wbg_uniform3fv_aa35ef21e14d5469: cf,
      __wbg_uniform3iv_e912f444d4ff8269: ff,
      __wbg_uniform4fv_e6c73702e9a3be5c: sf,
      __wbg_uniform4iv_375332584c65e61b: wf,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: en,
      __wbg_disableVertexAttribArray_4bac633c27bae599: Vt,
      __wbg_vertexAttribPointer_adbd1853cce679ad: Uf,
      __wbg_uniformMatrix2fv_e2806601f5b95102: yf,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: If,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: Mf,
      __wbg_bufferData_52235e85894af988: Je,
      __wbg_readPixels_95b2464a7bb863a2: Fc,
      __wbg_bufferSubData_33eebcc173094f6a: e_,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: D_,
      __wbg_clear_4d801d0d054c3579: m_,
      __wbg_flush_7777597fd43065db: dn,
      __wbg_enable_fee40f19b7053ea3: tn,
      __wbg_texSubImage2D_19ae4cadb809f264: ka,
      __wbg_disable_bd37bdcca1764aea: Ut,
      __wbg_scissor_b870b1434a9c25b4: Hc,
      __wbg_texImage2D_e71049312f3172d9: Aa,
      __wbg_viewport_174ae1c2209344ae: Gf,
      __wbg_cullFace_39500f654c67a205: bt,
      __wbg_uniform1f_c148eeaf4b531059: Ya,
      __wbg_uniform1i_9f3f72dbcb98ada9: Ha,
      __wbg_uniform4f_71ec75443e58cecc: uf,
      __wbg_movementX_ff6524e06bc35b6a: Er,
      __wbg_movementY_4cec81d9850ad239: Lr,
      __wbg_button_d86841d0a03adc44: t_,
      __wbg_altKey_8155c319c215e3aa: se,
      __wbg_buttons_a158a0cad3175f24: n_,
      __wbg_ctrlKey_96ff94f8b18636a3: ct,
      __wbg_metaKey_374999c340f70626: Fr,
      __wbg_shiftKey_5558a3288542c985: ra,
      __wbg_key_d41e8e825e6bb0e9: pr,
      __wbg_code_dee0dae4730408e1: S_,
      __wbg_repeat_375aae5c5c6a0258: Rc,
      __wbg_altKey_73c1173ba53073d5: ge,
      __wbg_ctrlKey_09a1b54d77dea92b: rt,
      __wbg_location_22bcb1a188a96eb1: vr,
      __wbg_metaKey_67113fb40365d736: Tr,
      __wbg_shiftKey_564be91ec842bcc4: ca,
      __wbg_addListener_03e8162d7e03c823: de,
      __wbg_removeListener_e2a199028636dcf5: Ec,
      __wbg_media_7bcde781569bca4c: Mr,
      __wbg_matches_4b5c22bd830f7bb3: Pr,
      __wbg_preventDefault_cdcfcd7e301b9702: lc,
      __wbg_userAgent_34463fd660ba4a2a: Rf,
      __wbg_new_b949e7f56150a5d1: Gr,
      __wbg_abort_2f0584e03e8e3950: ae,
      __wbg_signal_d1285ecab4ebc5ad: ba,
      __wbg_blockSize_ef9a626745d7dfac: Qe,
      __wbg_inlineSize_3e4e7e8c813884fd: or,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: ke,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: _t,
      __wbg_deleteVertexArrayOES_197df47ef9684195: It,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: yn,
      __wbg_contentRect_79b98e4d4f4728a4: k_,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: Rt,
      __wbg_isIntersecting_6807d592d68e059e: lr,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: zr,
      __wbg_get_d8db2ad31d529ff8: rr,
      __wbg_disconnect_5202f399852258c0: jt,
      __wbg_observe_1ae37077cf10b11b: Nr,
      __wbg_new_2e2be9617c4407d5: Or,
      __wbg_observe_b9abc08d6d829e56: $r,
      __wbg_unobserve_b4eb8d945252124f: Lf,
      __wbg_set_type_148de20768639245: Xb,
      __wbg_set_height_f21f985387070100: Pb,
      __wbg_getContext_2a5764d48600bc43: Fn,
      __wbg_getContext_b28d2db7bd648242: Tn,
      __wbg_set_width_d60bc4f2f20c56a4: _a,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: dr,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: Jn,
      __wbg_set_height_b386c0f603610637: Db,
      __wbg_getContext_2966500392030d63: Mn,
      __wbg_getContext_de810d9f187f29ca: En,
      __wbg_set_width_7f07715a20503914: ea,
      __wbg_setProperty_cbb25c4e74285b39: eb,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: Lc,
      __wbg_getPropertyValue_d6911b2a1f9acba9: zn,
      __wbg_disconnect_0a2d26237dfc1e9e: Gt,
      __wbg_new_8c6e67a40cee1f83: Ur,
      __wbg_observe_2a9d63459970a2c1: Xr,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: zc,
      __wbg_createObjectURL_918185db6a10a0c8: K_,
      __wbg_deltaMode_a1d1df711e44cefc: Dt,
      __wbg_deltaX_f0ca9116db5f7bc1: Pt,
      __wbg_deltaY_eb94120160ac821c: Mt,
      __wbg_pointerId_466b1bdcaf2fe835: bc,
      __wbg_pointerType_ba53c6f18634a26d: ac,
      __wbg_getCoalescedEvents_8d19e426e1461e96: Dn,
      __wbg_pressure_f01a99684f7a6cf3: wc,
      __wbg_appendChild_dea38765a26d346d: le,
      __wbg_contains_1056459c33f961e8: L_,
      __wbg_new_6f0524fbfa300c47: Vr,
      __wbg_port1_6251ddc5cf5c9287: uc,
      __wbg_port2_b2a294b0ede1e13c: ic,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: zt,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: Bf,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: Ht,
      __wbg_queryCounterEXT_b578f07c30420446: xc,
      __wbg_set_box_73d3355c6f95f24d: db,
      __wbg_addEventListener_3acb0aad4483804c: ie,
      __wbg_removeEventListener_e63328781a5b9af9: Tc,
      __wbg_postMessage_e45c89e4826cf2ef: gc,
      __wbg_new_4f8f3c123e474358: qr,
      __wbg_log_6b5ca2e6124b2808: Ir,
      __wbg_info_148d043840582012: fr,
      __wbg_warn_f7ae1b2e66ccb930: zf,
      __wbg_debug_a4099fa12db6cd61: ft,
      __wbg_error_9a7fe3f932034cde: bn,
      __wbg_error_f852e41c69b0bd84: an,
      __wbg_postMessage_46eeeef39934b448: dc,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: Ob,
      __wbg_close_fad2f0ee451926ed: y_,
      __wbg_start_ffb4b426b1e661bd: fa,
      __wbg_width_7444cca5dfea0645: Xf,
      __wbg_height_c2027cf67d1c9b11: br,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: $t,
      __wbg_persisted_de98357e1aaf6546: tc,
      __wbg_queueMicrotask_5bb536982f78a56f: vc,
      __wbg_queueMicrotask_0aa0a927f78f5d98: hc,
      __wbg_performance_7a3ffd0b17f663ad: _c,
      __wbg_now_2c95c9de01293173: Qr,
      __wbg_new_3eb36ae241fe6f44: Br,
      __wbg_new_361308b2356cecd0: Rr,
      __wbg_new_no_args_1c7c842f08d00ebb: jr,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: Kr,
      __wbg_get_9b94d73e6221f75c: nr,
      __wbg_of_f915f7cd925b21a5: Hr,
      __wbg_of_9ab14f9d4bfb5040: Yr,
      __wbg_length_35a7bace40f36eac: yr,
      __wbg_push_8ffdcb2063340ba5: pc,
      __wbg_includes_32215c836f1cd3fb: ar,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: Bn,
      __wbg_is_f29129f676e5410c: mr,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: ua,
      __wbg_call_389efe28435a9388: r_,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: ia,
      __wbg_static_accessor_GLOBAL_12837167ad935116: oa,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: da,
      __wbg_then_b9e7b3b5f1a9e1b5: Xa,
      __wbg_catch_c1f8c7623b458214: f_,
      __wbg_then_0d9fe2c7b1857d32: Na,
      __wbg_resolve_002c4b7d9d8f6b64: Kc,
      __wbg_set_6cb8631f80447a67: nb,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: ne,
      __wbg___wbindgen_throw_be289d5034ed271b: ce,
      __wbg___wbindgen_is_null_ac34f5003991759a: _e,
      __wbg___wbindgen_string_get_72fb696202c56729: re,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: J,
      __wbg___wbindgen_is_function_0095a73b8b156f76: ee,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: te,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: Z,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: be,
      __wbindgen_cast_0000000000000001: $f,
      __wbindgen_cast_0000000000000002: Yf,
      __wbindgen_cast_0000000000000003: Hf,
      __wbindgen_cast_0000000000000004: Jf,
      __wbindgen_cast_0000000000000005: Zf,
      __wbindgen_cast_0000000000000006: e0,
      __wbindgen_cast_0000000000000007: _0,
      __wbindgen_cast_0000000000000008: t0,
      __wbindgen_cast_0000000000000009: n0,
      __wbindgen_cast_000000000000000a: r0,
      __wbindgen_cast_000000000000000b: c0,
      __wbindgen_cast_000000000000000c: b0,
      __wbindgen_cast_000000000000000d: a0,
      __wbindgen_cast_000000000000000e: f0,
      __wbindgen_cast_000000000000000f: o0,
      __wbindgen_cast_0000000000000010: u0,
      __wbindgen_cast_0000000000000011: i0,
      __wbindgen_cast_0000000000000012: d0,
      __wbindgen_cast_0000000000000013: g0
    }
  }, X), W0 = h.memory, U0 = h.main, G0 = h.run_web, j0 = h.__wasm_bindgen_func_elem_5890, K0 = h.__wasm_bindgen_func_elem_7930, z0 = h.__wasm_bindgen_func_elem_6229, Q0 = h.__wasm_bindgen_func_elem_6221, N0 = h.__wasm_bindgen_func_elem_7931, X0 = h.__wasm_bindgen_func_elem_6223, $0 = h.__wbindgen_export, Y0 = h.__wbindgen_export2, H0 = h.__wbindgen_export3, J0 = h.__wbindgen_export4, Q = h.__wbindgen_start, Z0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_5890: j0,
    __wasm_bindgen_func_elem_6221: Q0,
    __wasm_bindgen_func_elem_6223: X0,
    __wasm_bindgen_func_elem_6229: z0,
    __wasm_bindgen_func_elem_7930: K0,
    __wasm_bindgen_func_elem_7931: N0,
    __wbindgen_export: $0,
    __wbindgen_export2: Y0,
    __wbindgen_export3: H0,
    __wbindgen_export4: J0,
    __wbindgen_start: Q,
    main: U0,
    memory: W0,
    run_web: G0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  V0(Z0);
  Q();
})();
export {
  __tla,
  _o as run_web
};
