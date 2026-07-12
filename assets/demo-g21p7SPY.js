import { _ as Q } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Co;
let __tla = (async () => {
  const X = "/learn-wgpu/assets/demo_bg-Clzs-g3E.wasm";
  Co = function() {
    u.run_web();
  };
  function Y(e) {
    const _ = n(e).Window;
    return c(_);
  }
  function H(e) {
    const _ = n(e).Window;
    return c(_);
  }
  function J(e) {
    const _ = n(e).WorkerGlobalScope;
    return c(_);
  }
  function Z(e) {
    const _ = n(e), t = typeof _ == "boolean" ? _ : void 0;
    return s(t) ? 16777215 : t ? 1 : 0;
  }
  function ee(e, _) {
    const t = G(n(_)), r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function _e(e) {
    return typeof n(e) == "function";
  }
  function ne(e) {
    return n(e) === null;
  }
  function te(e) {
    return typeof n(e) == "string";
  }
  function re(e) {
    return n(e) === void 0;
  }
  function be(e, _) {
    const t = n(_), r = typeof t == "number" ? t : void 0;
    w().setFloat64(e + 8, s(r) ? 0 : r, true), w().setInt32(e + 0, !s(r), true);
  }
  function ce(e, _) {
    const t = n(_), r = typeof t == "string" ? t : void 0;
    var b = s(r) ? 0 : S(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(e + 4, a, true), w().setInt32(e + 0, b, true);
  }
  function ae(e, _) {
    throw new Error(m(e, _));
  }
  function fe(e) {
    n(e)._wbg_cb_unref();
  }
  function oe(e) {
    n(e).abort();
  }
  function ue(e) {
    const _ = n(e).activeElement;
    return s(_) ? 0 : c(_);
  }
  function de(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function ie(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function ge() {
    return d(function(e, _, t, r) {
      n(e).addEventListener(m(_, t), n(r));
    }, arguments);
  }
  function se() {
    return d(function(e, _) {
      n(e).addListener(n(_));
    }, arguments);
  }
  function we(e) {
    return n(e).altKey;
  }
  function me(e) {
    return n(e).altKey;
  }
  function le(e, _, t) {
    const r = n(e).animate(n(_), n(t));
    return c(r);
  }
  function pe() {
    return d(function(e, _) {
      const t = n(e).appendChild(n(_));
      return c(t);
    }, arguments);
  }
  function xe(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function ye(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function Se(e, _, t) {
    n(e).beginQuery(_ >>> 0, n(t));
  }
  function he() {
    return d(function(e, _) {
      const t = n(e).beginRenderPass(n(_));
      return c(t);
    }, arguments);
  }
  function ve(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, m(r, b));
  }
  function Ie(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, m(r, b));
  }
  function De(e, _, t, r, b, a) {
    n(e).bindBufferRange(_ >>> 0, t >>> 0, n(r), b, a);
  }
  function Ae(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function Pe(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function Me(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function Fe(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function Te(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function ke(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function Ee(e, _, t) {
    n(e).bindSampler(_ >>> 0, n(t));
  }
  function Le(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function Oe(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function Ce(e, _) {
    n(e).bindVertexArrayOES(n(_));
  }
  function Re(e, _) {
    n(e).bindVertexArray(n(_));
  }
  function Be(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function qe(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function Ve(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function We(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function Ue(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function Ge(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function je(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Ke(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function $e(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function ze(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function Ne(e, _, t, r, b, a, f, o, i, g, p) {
    n(e).blitFramebuffer(_, t, r, b, a, f, o, i, g >>> 0, p >>> 0);
  }
  function Qe(e) {
    return n(e).blockSize;
  }
  function Xe(e) {
    const _ = n(e).body;
    return s(_) ? 0 : c(_);
  }
  function Ye(e, _) {
    const t = n(_).brand, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function He(e) {
    const _ = n(e).brands;
    return c(_);
  }
  function Je(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function Ze(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function e_(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function __(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function n_(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function t_(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function r_(e) {
    return n(e).button;
  }
  function b_(e) {
    return n(e).buttons;
  }
  function c_() {
    return d(function(e, _) {
      n(e).cancelAnimationFrame(_);
    }, arguments);
  }
  function a_(e, _) {
    n(e).cancelIdleCallback(_ >>> 0);
  }
  function f_(e) {
    n(e).cancel();
  }
  function o_(e, _) {
    const t = n(e).catch(n(_));
    return c(t);
  }
  function u_(e, _, t, r, b) {
    n(e).clearBufferfv(_ >>> 0, t, x(r, b));
  }
  function d_(e, _, t, r, b) {
    n(e).clearBufferiv(_ >>> 0, t, D(r, b));
  }
  function i_(e, _, t, r, b) {
    n(e).clearBufferuiv(_ >>> 0, t, T(r, b));
  }
  function g_(e, _) {
    n(e).clearDepth(_);
  }
  function s_(e, _) {
    n(e).clearDepth(_);
  }
  function w_(e, _) {
    n(e).clearStencil(_);
  }
  function m_(e, _) {
    n(e).clearStencil(_);
  }
  function l_(e, _) {
    n(e).clearTimeout(_);
  }
  function p_(e, _) {
    n(e).clear(_ >>> 0);
  }
  function x_(e, _) {
    n(e).clear(_ >>> 0);
  }
  function y_(e, _, t, r) {
    return n(e).clientWaitSync(n(_), t >>> 0, r >>> 0);
  }
  function S_(e) {
    n(e).close();
  }
  function h_(e, _) {
    const t = n(_).code, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function v_(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function I_(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function D_(e, _) {
    n(e).compileShader(n(_));
  }
  function A_(e, _) {
    n(e).compileShader(n(_));
  }
  function P_(e, _, t, r, b, a, f, o, i, g) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i, g);
  }
  function M_(e, _, t, r, b, a, f, o, i) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, n(i));
  }
  function F_(e, _, t, r, b, a, f, o, i) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, n(i));
  }
  function T_(e, _, t, r, b, a, f, o, i, g, p, h) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p, h);
  }
  function k_(e, _, t, r, b, a, f, o, i, g, p) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, n(p));
  }
  function E_() {
    return d(function(e, _) {
      n(e).configure(n(_));
    }, arguments);
  }
  function L_(e, _) {
    return n(e).contains(n(_));
  }
  function O_(e) {
    const _ = n(e).contentRect;
    return c(_);
  }
  function C_(e, _, t, r, b, a) {
    n(e).copyBufferSubData(_ >>> 0, t >>> 0, r, b, a);
  }
  function R_(e, _, t, r, b, a, f, o, i) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, a, f, o, i);
  }
  function B_(e, _, t, r, b, a, f, o, i) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, a, f, o, i);
  }
  function q_(e, _, t, r, b, a, f, o, i, g) {
    n(e).copyTexSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g);
  }
  function V_(e) {
    const _ = n(e).createBuffer();
    return s(_) ? 0 : c(_);
  }
  function W_(e) {
    const _ = n(e).createBuffer();
    return s(_) ? 0 : c(_);
  }
  function U_(e, _) {
    const t = n(e).createCommandEncoder(n(_));
    return c(t);
  }
  function G_() {
    return d(function(e, _, t) {
      const r = n(e).createElement(m(_, t));
      return c(r);
    }, arguments);
  }
  function j_(e) {
    const _ = n(e).createFramebuffer();
    return s(_) ? 0 : c(_);
  }
  function K_(e) {
    const _ = n(e).createFramebuffer();
    return s(_) ? 0 : c(_);
  }
  function $_() {
    return d(function(e, _) {
      const t = URL.createObjectURL(n(_)), r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
      w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
    }, arguments);
  }
  function z_(e) {
    const _ = n(e).createProgram();
    return s(_) ? 0 : c(_);
  }
  function N_(e) {
    const _ = n(e).createProgram();
    return s(_) ? 0 : c(_);
  }
  function Q_(e) {
    const _ = n(e).createQuery();
    return s(_) ? 0 : c(_);
  }
  function X_(e) {
    const _ = n(e).createRenderbuffer();
    return s(_) ? 0 : c(_);
  }
  function Y_(e) {
    const _ = n(e).createRenderbuffer();
    return s(_) ? 0 : c(_);
  }
  function H_(e) {
    const _ = n(e).createSampler();
    return s(_) ? 0 : c(_);
  }
  function J_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return s(t) ? 0 : c(t);
  }
  function Z_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return s(t) ? 0 : c(t);
  }
  function en(e) {
    const _ = n(e).createTexture();
    return s(_) ? 0 : c(_);
  }
  function _n(e) {
    const _ = n(e).createTexture();
    return s(_) ? 0 : c(_);
  }
  function nn(e) {
    const _ = n(e).createVertexArrayOES();
    return s(_) ? 0 : c(_);
  }
  function tn(e) {
    const _ = n(e).createVertexArray();
    return s(_) ? 0 : c(_);
  }
  function rn() {
    return d(function(e, _) {
      const t = n(e).createView(n(_));
      return c(t);
    }, arguments);
  }
  function bn(e) {
    return n(e).ctrlKey;
  }
  function cn(e) {
    return n(e).ctrlKey;
  }
  function an(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function fn(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function on(e) {
    console.debug(n(e));
  }
  function un(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function dn(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function gn(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function sn(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function wn(e, _) {
    n(e).deleteProgram(n(_));
  }
  function mn(e, _) {
    n(e).deleteProgram(n(_));
  }
  function ln(e, _) {
    n(e).deleteQuery(n(_));
  }
  function pn(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function xn(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function yn(e, _) {
    n(e).deleteSampler(n(_));
  }
  function Sn(e, _) {
    n(e).deleteShader(n(_));
  }
  function hn(e, _) {
    n(e).deleteShader(n(_));
  }
  function vn(e, _) {
    n(e).deleteSync(n(_));
  }
  function In(e, _) {
    n(e).deleteTexture(n(_));
  }
  function Dn(e, _) {
    n(e).deleteTexture(n(_));
  }
  function An(e, _) {
    n(e).deleteVertexArrayOES(n(_));
  }
  function Pn(e, _) {
    n(e).deleteVertexArray(n(_));
  }
  function Mn(e) {
    return n(e).deltaMode;
  }
  function Fn(e) {
    return n(e).deltaX;
  }
  function Tn(e) {
    return n(e).deltaY;
  }
  function kn(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function En(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function Ln(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function On(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function Cn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function Rn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function Bn(e) {
    n(e).destroy();
  }
  function qn(e) {
    const _ = n(e).devicePixelContentBoxSize;
    return c(_);
  }
  function Vn(e) {
    return n(e).devicePixelRatio;
  }
  function Wn(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function Un(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function Gn(e, _) {
    n(e).disable(_ >>> 0);
  }
  function jn(e, _) {
    n(e).disable(_ >>> 0);
  }
  function Kn(e) {
    n(e).disconnect();
  }
  function $n(e) {
    n(e).disconnect();
  }
  function zn(e) {
    const _ = n(e).document;
    return s(_) ? 0 : c(_);
  }
  function Nn(e, _, t, r, b) {
    n(e).drawArraysInstancedANGLE(_ >>> 0, t, r, b);
  }
  function Qn(e, _, t, r, b) {
    n(e).drawArraysInstanced(_ >>> 0, t, r, b);
  }
  function Xn(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function Yn(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function Hn(e, _) {
    n(e).drawBuffersWEBGL(n(_));
  }
  function Jn(e, _) {
    n(e).drawBuffers(n(_));
  }
  function Zn(e, _, t, r, b, a) {
    n(e).drawElementsInstancedANGLE(_ >>> 0, t, r >>> 0, b, a);
  }
  function et(e, _, t, r, b, a) {
    n(e).drawElementsInstanced(_ >>> 0, t, r >>> 0, b, a);
  }
  function _t(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function nt(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function tt(e, _) {
    n(e).enable(_ >>> 0);
  }
  function rt(e, _) {
    n(e).enable(_ >>> 0);
  }
  function bt(e, _) {
    n(e).endQuery(_ >>> 0);
  }
  function ct(e) {
    n(e).end();
  }
  function at(e) {
    console.error(n(e));
  }
  function ft(e, _) {
    console.error(n(e), n(_));
  }
  function ot(e, _) {
    let t, r;
    try {
      t = e, r = _, console.error(m(e, _));
    } finally {
      u.__wbindgen_export4(t, r, 1);
    }
  }
  function ut(e, _, t) {
    const r = n(e).fenceSync(_ >>> 0, t >>> 0);
    return s(r) ? 0 : c(r);
  }
  function dt(e) {
    n(e).finish();
  }
  function it(e, _) {
    const t = n(e).finish(n(_));
    return c(t);
  }
  function gt(e) {
    const _ = n(e).finish();
    return c(_);
  }
  function st(e) {
    n(e).finish();
  }
  function wt(e) {
    n(e).flush();
  }
  function mt(e) {
    n(e).flush();
  }
  function lt() {
    return d(function(e) {
      n(e).focus();
    }, arguments);
  }
  function pt(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function xt(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function yt(e, _, t, r, b, a) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), a);
  }
  function St(e, _, t, r, b, a) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), a);
  }
  function ht(e, _, t, r, b, a) {
    n(e).framebufferTextureLayer(_ >>> 0, t >>> 0, n(r), b, a);
  }
  function vt(e, _, t, r, b, a, f) {
    n(e).framebufferTextureMultiviewOVR(_ >>> 0, t >>> 0, n(r), b, a, f);
  }
  function It(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function Dt(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function At(e) {
    const _ = n(e).fullscreenElement;
    return s(_) ? 0 : c(_);
  }
  function Pt(e, _, t, r) {
    n(e).getBufferSubData(_ >>> 0, t, n(r));
  }
  function Mt(e) {
    const _ = n(e).getCoalescedEvents();
    return c(_);
  }
  function Ft(e) {
    const _ = n(e).getCoalescedEvents;
    return c(_);
  }
  function Tt() {
    return d(function(e, _) {
      const t = n(e).getComputedStyle(n(_));
      return s(t) ? 0 : c(t);
    }, arguments);
  }
  function kt() {
    return d(function(e, _, t, r) {
      const b = n(e).getContext(m(_, t), n(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Et() {
    return d(function(e, _, t, r) {
      const b = n(e).getContext(m(_, t), n(r));
      return s(b) ? 0 : c(b);
    }, arguments);
  }
  function Lt() {
    return d(function(e, _, t) {
      const r = n(e).getContext(m(_, t));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Ot() {
    return d(function(e, _, t) {
      const r = n(e).getContext(m(_, t));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Ct() {
    return d(function(e) {
      const _ = n(e).getCurrentTexture();
      return c(_);
    }, arguments);
  }
  function Rt(e, _, t) {
    const r = n(e).getElementById(m(_, t));
    return s(r) ? 0 : c(r);
  }
  function Bt() {
    return d(function(e, _, t) {
      const r = n(e).getExtension(m(_, t));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function qt() {
    return d(function(e, _, t) {
      const r = n(e).getIndexedParameter(_ >>> 0, t >>> 0);
      return c(r);
    }, arguments);
  }
  function Vt() {
    return d(function(e, _, t) {
      const r = n(e).getMappedRange(_, t);
      return c(r);
    }, arguments);
  }
  function Wt(e, _) {
    const t = Object.getOwnPropertyDescriptor(n(e), n(_));
    return c(t);
  }
  function Ut() {
    return d(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return c(t);
    }, arguments);
  }
  function Gt() {
    return d(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return c(t);
    }, arguments);
  }
  function jt(e) {
    const _ = n(e).getPreferredCanvasFormat();
    return ($.indexOf(_) + 1 || 102) - 1;
  }
  function Kt(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = s(r) ? 0 : S(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(e + 4, a, true), w().setInt32(e + 0, b, true);
  }
  function $t(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = s(r) ? 0 : S(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(e + 4, a, true), w().setInt32(e + 0, b, true);
  }
  function zt(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return c(r);
  }
  function Nt(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return c(r);
  }
  function Qt() {
    return d(function(e, _, t, r) {
      const b = n(_).getPropertyValue(m(t, r)), a = S(b, u.__wbindgen_export, u.__wbindgen_export2), f = y;
      w().setInt32(e + 4, f, true), w().setInt32(e + 0, a, true);
    }, arguments);
  }
  function Xt(e, _, t) {
    const r = n(e).getQueryParameter(n(_), t >>> 0);
    return c(r);
  }
  function Yt(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = s(r) ? 0 : S(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(e + 4, a, true), w().setInt32(e + 0, b, true);
  }
  function Ht(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = s(r) ? 0 : S(r, u.__wbindgen_export, u.__wbindgen_export2), a = y;
    w().setInt32(e + 4, a, true), w().setInt32(e + 0, b, true);
  }
  function Jt(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return c(r);
  }
  function Zt(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return c(r);
  }
  function er(e) {
    const _ = n(e).getSupportedExtensions();
    return s(_) ? 0 : c(_);
  }
  function _r(e) {
    const _ = n(e).getSupportedProfiles();
    return s(_) ? 0 : c(_);
  }
  function nr(e, _, t) {
    const r = n(e).getSyncParameter(n(_), t >>> 0);
    return c(r);
  }
  function tr(e, _, t, r) {
    return n(e).getUniformBlockIndex(n(_), m(t, r));
  }
  function rr(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), m(t, r));
    return s(b) ? 0 : c(b);
  }
  function br(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), m(t, r));
    return s(b) ? 0 : c(b);
  }
  function cr(e, _) {
    const t = n(e)[_ >>> 0];
    return c(t);
  }
  function ar(e, _) {
    const t = n(e)[_ >>> 0];
    return s(t) ? 0 : c(t);
  }
  function fr(e, _) {
    const t = n(e)[_ >>> 0];
    return c(t);
  }
  function or(e) {
    const _ = n(e).gpu;
    return c(_);
  }
  function ur(e) {
    return n(e).height;
  }
  function dr(e, _, t) {
    return n(e).includes(n(_), t);
  }
  function ir(e) {
    console.info(n(e));
  }
  function gr(e) {
    return n(e).inlineSize;
  }
  function sr(e) {
    let _;
    try {
      _ = n(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function wr(e) {
    let _;
    try {
      _ = n(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function mr(e) {
    let _;
    try {
      _ = n(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function lr() {
    return d(function(e, _, t) {
      n(e).invalidateFramebuffer(_ >>> 0, n(t));
    }, arguments);
  }
  function pr(e) {
    return n(e).isIntersecting;
  }
  function xr(e, _) {
    return Object.is(n(e), n(_));
  }
  function yr(e, _) {
    const t = n(_).key, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function Sr(e, _) {
    const t = n(_).label, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function hr(e) {
    return n(e).length;
  }
  function vr(e, _) {
    n(e).linkProgram(n(_));
  }
  function Ir(e, _) {
    n(e).linkProgram(n(_));
  }
  function Dr(e) {
    return n(e).location;
  }
  function Ar(e) {
    console.log(n(e));
  }
  function Pr(e, _, t, r) {
    const b = n(e).mapAsync(_ >>> 0, t, r);
    return c(b);
  }
  function Mr() {
    return d(function(e, _, t) {
      const r = n(e).matchMedia(m(_, t));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Fr(e) {
    return n(e).matches;
  }
  function Tr(e, _) {
    const t = n(_).media, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function kr(e) {
    return n(e).metaKey;
  }
  function Er(e) {
    return n(e).metaKey;
  }
  function Lr(e) {
    return n(e).movementX;
  }
  function Or(e) {
    return n(e).movementY;
  }
  function Cr(e) {
    const _ = n(e).navigator;
    return c(_);
  }
  function Rr(e) {
    const _ = n(e).navigator;
    return c(_);
  }
  function Br() {
    const e = new Error();
    return c(e);
  }
  function qr() {
    return d(function(e, _) {
      const t = new OffscreenCanvas(e >>> 0, _ >>> 0);
      return c(t);
    }, arguments);
  }
  function Vr() {
    const e = new Array();
    return c(e);
  }
  function Wr() {
    return d(function() {
      const e = new AbortController();
      return c(e);
    }, arguments);
  }
  function Ur() {
    return d(function(e) {
      const _ = new ResizeObserver(n(e));
      return c(_);
    }, arguments);
  }
  function Gr() {
    return d(function(e, _) {
      const t = new Worker(m(e, _));
      return c(t);
    }, arguments);
  }
  function jr() {
    const e = new Object();
    return c(e);
  }
  function Kr() {
    return d(function(e) {
      const _ = new IntersectionObserver(n(e));
      return c(_);
    }, arguments);
  }
  function $r() {
    return d(function() {
      const e = new MessageChannel();
      return c(e);
    }, arguments);
  }
  function zr() {
    const e = new Object();
    return c(e);
  }
  function Nr(e, _, t) {
    const r = new Uint8Array(n(e), _ >>> 0, t >>> 0);
    return c(r);
  }
  function Qr() {
    return d(function(e, _) {
      const t = new Blob(n(e), n(_));
      return c(t);
    }, arguments);
  }
  function Xr(e) {
    return n(e).now();
  }
  function Yr(e, _, t) {
    n(e).observe(n(_), n(t));
  }
  function Hr(e, _) {
    n(e).observe(n(_));
  }
  function Jr(e, _) {
    n(e).observe(n(_));
  }
  function Zr(e, _) {
    const t = Array.of(n(e), n(_));
    return c(t);
  }
  function eb(e) {
    const _ = Array.of(n(e));
    return c(_);
  }
  function _b(e) {
    return n(e).offsetX;
  }
  function nb(e) {
    return n(e).offsetY;
  }
  function tb(e) {
    const _ = n(e).onSubmittedWorkDone();
    return c(_);
  }
  function rb(e) {
    const _ = n(e).performance;
    return c(_);
  }
  function bb(e) {
    return n(e).persisted;
  }
  function cb(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function ab(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function fb(e) {
    n(e).play();
  }
  function ob(e) {
    return n(e).pointerId;
  }
  function ub(e, _) {
    const t = n(_).pointerType, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function db(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function ib(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function gb(e) {
    const _ = n(e).port1;
    return c(_);
  }
  function sb(e) {
    const _ = n(e).port2;
    return c(_);
  }
  function wb() {
    return d(function(e, _) {
      n(e).postMessage(n(_));
    }, arguments);
  }
  function mb() {
    return d(function(e, _, t) {
      n(e).postMessage(n(_), n(t));
    }, arguments);
  }
  function lb(e, _, t) {
    const r = n(e).postTask(n(_), n(t));
    return c(r);
  }
  function pb(e) {
    return n(e).pressure;
  }
  function xb(e) {
    n(e).preventDefault();
  }
  function yb() {
    const e = ResizeObserverEntry.prototype;
    return c(e);
  }
  function Sb(e, _) {
    return n(e).push(n(_));
  }
  function hb(e, _, t) {
    n(e).queryCounterEXT(n(_), t >>> 0);
  }
  function vb() {
    return d(function(e, _, t) {
      const r = n(e).querySelectorAll(m(_, t));
      return c(r);
    }, arguments);
  }
  function Ib() {
    return d(function(e, _, t) {
      const r = n(e).querySelector(m(_, t));
      return s(r) ? 0 : c(r);
    }, arguments);
  }
  function Db(e) {
    const _ = n(e).queueMicrotask;
    return c(_);
  }
  function Ab(e) {
    queueMicrotask(n(e));
  }
  function Pb(e, _) {
    n(e).queueMicrotask(n(_));
  }
  function Mb(e) {
    const _ = n(e).queue;
    return c(_);
  }
  function Fb(e, _) {
    n(e).readBuffer(_ >>> 0);
  }
  function Tb() {
    return d(function(e, _, t, r, b, a, f, o) {
      n(e).readPixels(_, t, r, b, a >>> 0, f >>> 0, n(o));
    }, arguments);
  }
  function kb() {
    return d(function(e, _, t, r, b, a, f, o) {
      n(e).readPixels(_, t, r, b, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Eb() {
    return d(function(e, _, t, r, b, a, f, o) {
      n(e).readPixels(_, t, r, b, a >>> 0, f >>> 0, n(o));
    }, arguments);
  }
  function Lb() {
    return d(function(e, _, t, r) {
      n(e).removeEventListener(m(_, t), n(r));
    }, arguments);
  }
  function Ob() {
    return d(function(e, _) {
      n(e).removeListener(n(_));
    }, arguments);
  }
  function Cb() {
    return d(function(e, _, t, r) {
      const b = n(_).removeProperty(m(t, r)), a = S(b, u.__wbindgen_export, u.__wbindgen_export2), f = y;
      w().setInt32(e + 4, f, true), w().setInt32(e + 0, a, true);
    }, arguments);
  }
  function Rb(e, _, t, r, b, a) {
    n(e).renderbufferStorageMultisample(_ >>> 0, t, r >>> 0, b, a);
  }
  function Bb(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function qb(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function Vb(e) {
    return n(e).repeat;
  }
  function Wb(e, _) {
    const t = n(e).requestAdapter(n(_));
    return c(t);
  }
  function Ub() {
    return d(function(e, _) {
      return n(e).requestAnimationFrame(n(_));
    }, arguments);
  }
  function Gb(e, _) {
    const t = n(e).requestDevice(n(_));
    return c(t);
  }
  function jb(e) {
    const _ = n(e).requestFullscreen();
    return c(_);
  }
  function Kb(e) {
    const _ = n(e).requestFullscreen;
    return c(_);
  }
  function $b(e) {
    const _ = n(e).requestIdleCallback;
    return c(_);
  }
  function zb() {
    return d(function(e, _) {
      return n(e).requestIdleCallback(n(_));
    }, arguments);
  }
  function Nb(e) {
    const _ = Promise.resolve(n(e));
    return c(_);
  }
  function Qb() {
    return d(function(e, _) {
      URL.revokeObjectURL(m(e, _));
    }, arguments);
  }
  function Xb(e, _, t, r) {
    n(e).samplerParameterf(n(_), t >>> 0, r);
  }
  function Yb(e, _, t, r) {
    n(e).samplerParameteri(n(_), t >>> 0, r);
  }
  function Hb(e) {
    const _ = n(e).scheduler;
    return c(_);
  }
  function Jb(e) {
    const _ = n(e).scheduler;
    return c(_);
  }
  function Zb(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function ec(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function _c() {
    return d(function(e, _, t, r, b) {
      n(e).setAttribute(m(_, t), m(r, b));
    }, arguments);
  }
  function nc() {
    return d(function(e, _) {
      n(e).setPointerCapture(_);
    }, arguments);
  }
  function tc() {
    return d(function(e, _, t, r, b) {
      n(e).setProperty(m(_, t), m(r, b));
    }, arguments);
  }
  function rc() {
    return d(function(e, _) {
      return n(e).setTimeout(n(_));
    }, arguments);
  }
  function bc() {
    return d(function(e, _, t) {
      return n(e).setTimeout(n(_), t);
    }, arguments);
  }
  function cc() {
    return d(function(e, _, t) {
      return Reflect.set(n(e), n(_), n(t));
    }, arguments);
  }
  function ac(e, _) {
    n(e).a = _;
  }
  function fc(e, _) {
    n(e).alphaMode = W0[_];
  }
  function oc(e, _) {
    n(e).arrayLayerCount = _ >>> 0;
  }
  function uc(e, _) {
    n(e).aspect = j0[_];
  }
  function dc(e, _) {
    n(e).b = _;
  }
  function ic(e, _) {
    n(e).baseArrayLayer = _ >>> 0;
  }
  function gc(e, _) {
    n(e).baseMipLevel = _ >>> 0;
  }
  function sc(e, _) {
    n(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function wc(e, _) {
    n(e).box = $0[_];
  }
  function mc(e, _) {
    n(e).clearValue = n(_);
  }
  function lc(e, _, t) {
    n(e).colorAttachments = W(_, t);
  }
  function pc(e, _) {
    n(e).depthClearValue = _;
  }
  function xc(e, _) {
    n(e).depthLoadOp = j[_];
  }
  function yc(e, _) {
    n(e).depthReadOnly = _ !== 0;
  }
  function Sc(e, _) {
    n(e).depthStencilAttachment = n(_);
  }
  function hc(e, _) {
    n(e).depthStoreOp = K[_];
  }
  function vc(e, _) {
    n(e).device = n(_);
  }
  function Ic(e, _) {
    n(e).dimension = K0[_];
  }
  function Dc(e, _) {
    n(e).endOfPassWriteIndex = _ >>> 0;
  }
  function Ac(e, _) {
    n(e).format = $[_];
  }
  function Pc(e, _) {
    n(e).format = $[_];
  }
  function Mc(e, _) {
    n(e).g = _;
  }
  function Fc(e, _) {
    n(e).height = _ >>> 0;
  }
  function Tc(e, _) {
    n(e).height = _ >>> 0;
  }
  function kc(e, _, t) {
    n(e).label = m(_, t);
  }
  function Ec(e, _, t) {
    n(e).label = m(_, t);
  }
  function Lc(e, _, t) {
    n(e).label = m(_, t);
  }
  function Oc(e, _, t) {
    n(e).label = m(_, t);
  }
  function Cc(e, _, t) {
    n(e).label = m(_, t);
  }
  function Rc(e, _) {
    n(e).loadOp = j[_];
  }
  function Bc(e, _) {
    n(e).mipLevelCount = _ >>> 0;
  }
  function qc(e, _) {
    n(e).mode = U0[_];
  }
  function Vc(e, _) {
    n(e).onmessage = n(_);
  }
  function Wc(e, _) {
    n(e).powerPreference = G0[_];
  }
  function Uc(e, _) {
    n(e).querySet = n(_);
  }
  function Gc(e, _) {
    n(e).r = _;
  }
  function jc(e, _, t) {
    n(e).requiredFeatures = W(_, t);
  }
  function Kc(e, _) {
    n(e).requiredLimits = n(_);
  }
  function $c(e, _) {
    n(e).resolveTarget = n(_);
  }
  function zc(e, _) {
    n(e).stencilClearValue = _ >>> 0;
  }
  function Nc(e, _) {
    n(e).stencilLoadOp = j[_];
  }
  function Qc(e, _) {
    n(e).stencilReadOnly = _ !== 0;
  }
  function Xc(e, _) {
    n(e).stencilStoreOp = K[_];
  }
  function Yc(e, _) {
    n(e).storeOp = K[_];
  }
  function Hc(e, _) {
    n(e).timestampWrites = n(_);
  }
  function Jc(e, _) {
    n(e).toneMapping = n(_);
  }
  function Zc(e, _, t) {
    n(e).type = m(_, t);
  }
  function ea(e, _) {
    n(e).usage = _ >>> 0;
  }
  function _a(e, _) {
    n(e).usage = _ >>> 0;
  }
  function na(e, _, t) {
    n(e).viewFormats = W(_, t);
  }
  function ta(e, _) {
    n(e).view = n(_);
  }
  function ra(e, _) {
    n(e).view = n(_);
  }
  function ba(e, _) {
    n(e).width = _ >>> 0;
  }
  function ca(e, _) {
    n(e).width = _ >>> 0;
  }
  function aa(e, _, t, r) {
    n(e).shaderSource(n(_), m(t, r));
  }
  function fa(e, _, t, r) {
    n(e).shaderSource(n(_), m(t, r));
  }
  function oa(e) {
    return n(e).shiftKey;
  }
  function ua(e) {
    return n(e).shiftKey;
  }
  function da(e) {
    const _ = n(e).signal;
    return c(_);
  }
  function ia(e, _) {
    const t = n(_).stack, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
    w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
  }
  function ga(e) {
    n(e).start();
  }
  function sa() {
    const e = typeof global > "u" ? null : global;
    return s(e) ? 0 : c(e);
  }
  function wa() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return s(e) ? 0 : c(e);
  }
  function ma() {
    const e = typeof self > "u" ? null : self;
    return s(e) ? 0 : c(e);
  }
  function la() {
    const e = typeof window > "u" ? null : window;
    return s(e) ? 0 : c(e);
  }
  function pa(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function xa(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function ya(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function Sa(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function ha(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function va(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function Ia(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Da(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Aa(e) {
    const _ = n(e).style;
    return c(_);
  }
  function Pa(e, _, t) {
    n(e).submit(W(_, t));
  }
  function Ma() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Fa() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Ta() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function ka() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p) {
      n(e).texImage3D(_ >>> 0, t, r, b, a, f, o, i >>> 0, g >>> 0, p);
    }, arguments);
  }
  function Ea() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p) {
      n(e).texImage3D(_ >>> 0, t, r, b, a, f, o, i >>> 0, g >>> 0, n(p));
    }, arguments);
  }
  function La(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function Oa(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function Ca(e, _, t, r, b, a) {
    n(e).texStorage2D(_ >>> 0, t, r >>> 0, b, a);
  }
  function Ra(e, _, t, r, b, a, f) {
    n(e).texStorage3D(_ >>> 0, t, r >>> 0, b, a, f);
  }
  function Ba() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, g);
    }, arguments);
  }
  function qa() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Va() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Wa() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Ua() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Ga() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function ja() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function Ka() {
    return d(function(e, _, t, r, b, a, f, o, i, g) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, f, o >>> 0, i >>> 0, n(g));
    }, arguments);
  }
  function $a() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function za() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function Na() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function Qa() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, h);
    }, arguments);
  }
  function Xa() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function Ya() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function Ha() {
    return d(function(e, _, t, r, b, a, f, o, i, g, p, h) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, f, o, i, g >>> 0, p >>> 0, n(h));
    }, arguments);
  }
  function Ja(e, _, t) {
    const r = n(e).then(n(_), n(t));
    return c(r);
  }
  function Za(e, _) {
    const t = n(e).then(n(_));
    return c(t);
  }
  function ef(e) {
    n(e).unconfigure();
  }
  function _f(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function nf(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function tf(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function rf(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function bf(e, _, t) {
    n(e).uniform1ui(n(_), t >>> 0);
  }
  function cf(e, _, t, r) {
    n(e).uniform2fv(n(_), x(t, r));
  }
  function af(e, _, t, r) {
    n(e).uniform2fv(n(_), x(t, r));
  }
  function ff(e, _, t, r) {
    n(e).uniform2iv(n(_), D(t, r));
  }
  function of(e, _, t, r) {
    n(e).uniform2iv(n(_), D(t, r));
  }
  function uf(e, _, t, r) {
    n(e).uniform2uiv(n(_), T(t, r));
  }
  function df(e, _, t, r) {
    n(e).uniform3fv(n(_), x(t, r));
  }
  function gf(e, _, t, r) {
    n(e).uniform3fv(n(_), x(t, r));
  }
  function sf(e, _, t, r) {
    n(e).uniform3iv(n(_), D(t, r));
  }
  function wf(e, _, t, r) {
    n(e).uniform3iv(n(_), D(t, r));
  }
  function mf(e, _, t, r) {
    n(e).uniform3uiv(n(_), T(t, r));
  }
  function lf(e, _, t, r, b, a) {
    n(e).uniform4f(n(_), t, r, b, a);
  }
  function pf(e, _, t, r, b, a) {
    n(e).uniform4f(n(_), t, r, b, a);
  }
  function xf(e, _, t, r) {
    n(e).uniform4fv(n(_), x(t, r));
  }
  function yf(e, _, t, r) {
    n(e).uniform4fv(n(_), x(t, r));
  }
  function Sf(e, _, t, r) {
    n(e).uniform4iv(n(_), D(t, r));
  }
  function hf(e, _, t, r) {
    n(e).uniform4iv(n(_), D(t, r));
  }
  function vf(e, _, t, r) {
    n(e).uniform4uiv(n(_), T(t, r));
  }
  function If(e, _, t, r) {
    n(e).uniformBlockBinding(n(_), t >>> 0, r >>> 0);
  }
  function Df(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, x(r, b));
  }
  function Af(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, x(r, b));
  }
  function Pf(e, _, t, r, b) {
    n(e).uniformMatrix2x3fv(n(_), t !== 0, x(r, b));
  }
  function Mf(e, _, t, r, b) {
    n(e).uniformMatrix2x4fv(n(_), t !== 0, x(r, b));
  }
  function Ff(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, x(r, b));
  }
  function Tf(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, x(r, b));
  }
  function kf(e, _, t, r, b) {
    n(e).uniformMatrix3x2fv(n(_), t !== 0, x(r, b));
  }
  function Ef(e, _, t, r, b) {
    n(e).uniformMatrix3x4fv(n(_), t !== 0, x(r, b));
  }
  function Lf(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, x(r, b));
  }
  function Of(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, x(r, b));
  }
  function Cf(e, _, t, r, b) {
    n(e).uniformMatrix4x2fv(n(_), t !== 0, x(r, b));
  }
  function Rf(e, _, t, r, b) {
    n(e).uniformMatrix4x3fv(n(_), t !== 0, x(r, b));
  }
  function Bf(e) {
    n(e).unmap();
  }
  function qf(e, _) {
    n(e).unobserve(n(_));
  }
  function Vf(e, _) {
    n(e).useProgram(n(_));
  }
  function Wf(e, _) {
    n(e).useProgram(n(_));
  }
  function Uf(e) {
    const _ = n(e).userAgentData;
    return s(_) ? 0 : c(_);
  }
  function Gf() {
    return d(function(e, _) {
      const t = n(_).userAgent, r = S(t, u.__wbindgen_export, u.__wbindgen_export2), b = y;
      w().setInt32(e + 4, b, true), w().setInt32(e + 0, r, true);
    }, arguments);
  }
  function jf(e, _, t) {
    n(e).vertexAttribDivisorANGLE(_ >>> 0, t >>> 0);
  }
  function Kf(e, _, t) {
    n(e).vertexAttribDivisor(_ >>> 0, t >>> 0);
  }
  function $f(e, _, t, r, b, a) {
    n(e).vertexAttribIPointer(_ >>> 0, t, r >>> 0, b, a);
  }
  function zf(e, _, t, r, b, a, f) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, a, f);
  }
  function Nf(e, _, t, r, b, a, f) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, a, f);
  }
  function Qf(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Xf(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Yf(e) {
    const _ = n(e).visibilityState;
    return (z0.indexOf(_) + 1 || 3) - 1;
  }
  function Hf(e) {
    console.warn(n(e));
  }
  function Jf(e) {
    const _ = n(e).webkitFullscreenElement;
    return s(_) ? 0 : c(_);
  }
  function Zf(e) {
    n(e).webkitRequestFullscreen();
  }
  function e0(e) {
    return n(e).width;
  }
  function _0(e, _) {
    const t = v(e, _, P0);
    return c(t);
  }
  function n0(e, _) {
    const t = v(e, _, C0);
    return c(t);
  }
  function t0(e, _) {
    const t = v(e, _, R0);
    return c(t);
  }
  function r0(e, _) {
    const t = v(e, _, M0);
    return c(t);
  }
  function b0(e, _) {
    const t = v(e, _, F0);
    return c(t);
  }
  function c0(e, _) {
    const t = v(e, _, T0);
    return c(t);
  }
  function a0(e, _) {
    const t = v(e, _, B0);
    return c(t);
  }
  function f0(e, _) {
    const t = v(e, _, k0);
    return c(t);
  }
  function o0(e, _) {
    const t = v(e, _, E0);
    return c(t);
  }
  function u0(e, _) {
    const t = v(e, _, L0);
    return c(t);
  }
  function d0(e, _) {
    const t = v(e, _, O0);
    return c(t);
  }
  function i0(e, _) {
    const t = v(e, _, q0);
    return c(t);
  }
  function g0(e, _) {
    const t = v(e, _, V0);
    return c(t);
  }
  function s0(e, _) {
    const t = v(e, _, A0);
    return c(t);
  }
  function w0(e) {
    return c(e);
  }
  function m0(e, _) {
    const t = x(e, _);
    return c(t);
  }
  function l0(e, _) {
    const t = Q0(e, _);
    return c(t);
  }
  function p0(e, _) {
    const t = D(e, _);
    return c(t);
  }
  function x0(e, _) {
    const t = X0(e, _);
    return c(t);
  }
  function y0(e, _) {
    const t = Y0(e, _);
    return c(t);
  }
  function S0(e, _) {
    const t = T(e, _);
    return c(t);
  }
  function h0(e, _) {
    const t = H0(e, _);
    return c(t);
  }
  function v0(e, _) {
    const t = m(e, _);
    return c(t);
  }
  function I0(e) {
    const _ = n(e);
    return c(_);
  }
  function D0(e) {
    k(e);
  }
  function A0(e, _) {
    u.__wasm_bindgen_func_elem_6308(e, _);
  }
  function P0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301(e, _, c(t));
  }
  function M0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_3(e, _, c(t));
  }
  function F0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_4(e, _, c(t));
  }
  function T0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_5(e, _, c(t));
  }
  function k0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_7(e, _, c(t));
  }
  function E0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_8(e, _, c(t));
  }
  function L0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_9(e, _, c(t));
  }
  function O0(e, _, t) {
    u.__wasm_bindgen_func_elem_6301_10(e, _, c(t));
  }
  function C0(e, _, t) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_8880(a, e, _, c(t));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw k(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function R0(e, _, t, r) {
    u.__wasm_bindgen_func_elem_6299(e, _, c(t), c(r));
  }
  function B0(e, _, t) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1613(a, e, _, c(t));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw k(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function q0(e, _, t) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1613_11(a, e, _, c(t));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw k(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function V0(e, _, t) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_1613_12(a, e, _, c(t));
      var r = w().getInt32(a + 0, true), b = w().getInt32(a + 4, true);
      if (b) throw k(r);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const W0 = [
    "opaque",
    "premultiplied"
  ], U0 = [
    "standard",
    "extended"
  ], j = [
    "load",
    "clear"
  ], G0 = [
    "low-power",
    "high-performance"
  ], K = [
    "store",
    "discard"
  ], j0 = [
    "all",
    "stencil-only",
    "depth-only"
  ], $ = [
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
  ], K0 = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], $0 = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], z0 = [
    "hidden",
    "visible"
  ];
  function c(e) {
    M === I.length && I.push(I.length + 1);
    const _ = M;
    return M = I[_], I[_] = e, _;
  }
  const z = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => u.__wbindgen_export5(e.a, e.b));
  function G(e) {
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
      let a = "[";
      b > 0 && (a += G(e[0]));
      for (let f = 1; f < b; f++) a += ", " + G(e[f]);
      return a += "]", a;
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
  function N0(e) {
    e < 1028 || (I[e] = M, M = e);
  }
  function x(e, _) {
    return e = e >>> 0, J0().subarray(e / 4, e / 4 + _);
  }
  function Q0(e, _) {
    return e = e >>> 0, Z0().subarray(e / 2, e / 2 + _);
  }
  function D(e, _) {
    return e = e >>> 0, eo().subarray(e / 4, e / 4 + _);
  }
  function X0(e, _) {
    return e = e >>> 0, _o().subarray(e / 1, e / 1 + _);
  }
  function W(e, _) {
    e = e >>> 0;
    const t = w(), r = [];
    for (let b = e; b < e + 4 * _; b += 4) r.push(n(t.getUint32(b, true)));
    return r;
  }
  function Y0(e, _) {
    return e = e >>> 0, no().subarray(e / 2, e / 2 + _);
  }
  function T(e, _) {
    return e = e >>> 0, to().subarray(e / 4, e / 4 + _);
  }
  function H0(e, _) {
    return e = e >>> 0, P().subarray(e / 1, e / 1 + _);
  }
  let A = null;
  function w() {
    return (A === null || A.buffer.detached === true || A.buffer.detached === void 0 && A.buffer !== u.memory.buffer) && (A = new DataView(u.memory.buffer)), A;
  }
  let E = null;
  function J0() {
    return (E === null || E.byteLength === 0) && (E = new Float32Array(u.memory.buffer)), E;
  }
  let L = null;
  function Z0() {
    return (L === null || L.byteLength === 0) && (L = new Int16Array(u.memory.buffer)), L;
  }
  let O = null;
  function eo() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(u.memory.buffer)), O;
  }
  let C = null;
  function _o() {
    return (C === null || C.byteLength === 0) && (C = new Int8Array(u.memory.buffer)), C;
  }
  function m(e, _) {
    return bo(e >>> 0, _);
  }
  let R = null;
  function no() {
    return (R === null || R.byteLength === 0) && (R = new Uint16Array(u.memory.buffer)), R;
  }
  let B = null;
  function to() {
    return (B === null || B.byteLength === 0) && (B = new Uint32Array(u.memory.buffer)), B;
  }
  let q = null;
  function P() {
    return (q === null || q.byteLength === 0) && (q = new Uint8Array(u.memory.buffer)), q;
  }
  function n(e) {
    return I[e];
  }
  function d(e, _) {
    try {
      return e.apply(this, _);
    } catch (t) {
      u.__wbindgen_export3(c(t));
    }
  }
  let I = new Array(1024).fill(void 0);
  I.push(void 0, null, true, false);
  let M = I.length;
  function s(e) {
    return e == null;
  }
  function v(e, _, t) {
    const r = {
      a: e,
      b: _,
      cnt: 1
    }, b = (...a) => {
      r.cnt++;
      const f = r.a;
      r.a = 0;
      try {
        return t(f, r.b, ...a);
      } finally {
        r.a = f, b._wbg_cb_unref();
      }
    };
    return b._wbg_cb_unref = () => {
      --r.cnt === 0 && (u.__wbindgen_export5(r.a, r.b), r.a = 0, z.unregister(r));
    }, z.register(b, r, r), b;
  }
  function S(e, _, t) {
    if (t === void 0) {
      const o = F.encode(e), i = _(o.length, 1) >>> 0;
      return P().subarray(i, i + o.length).set(o), y = o.length, i;
    }
    let r = e.length, b = _(r, 1) >>> 0;
    const a = P();
    let f = 0;
    for (; f < r; f++) {
      const o = e.charCodeAt(f);
      if (o > 127) break;
      a[b + f] = o;
    }
    if (f !== r) {
      f !== 0 && (e = e.slice(f)), b = t(b, r, r = f + e.length * 3, 1) >>> 0;
      const o = P().subarray(b + f, b + r), i = F.encodeInto(e, o);
      f += i.written, b = t(b, r, f, 1) >>> 0;
    }
    return y = f, b;
  }
  function k(e) {
    const _ = n(e);
    return N0(e), _;
  }
  let V = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  V.decode();
  const ro = 2146435072;
  let U = 0;
  function bo(e, _) {
    return U += _, U >= ro && (V = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), V.decode(), U = _), V.decode(P().subarray(e, e + _));
  }
  const F = new TextEncoder();
  "encodeInto" in F || (F.encodeInto = function(e, _) {
    const t = F.encode(e);
    return _.set(t), {
      read: e.length,
      written: t.length
    };
  });
  let y = 0, u;
  function co(e) {
    u = e;
  }
  URL = globalThis.URL;
  const l = await Q({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: D0,
      __wbg_new_227d7c05414eb861: Br,
      __wbg_stack_3b0d974bbf31e44f: ia,
      __wbg_error_a6fa202b58aa1cd3: ot,
      __wbg_set_color_attachments_581fdb3310e4abfa: lc,
      __wbg_set_label_17eb9fe3a02f62b0: Ec,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: ra,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: pc,
      __wbg_set_depth_load_op_511c513eab4e56a9: xc,
      __wbg_set_depth_store_op_c89f33b39b43361c: hc,
      __wbg_set_depth_read_only_7f41a74741c144ec: yc,
      __wbg_set_stencil_clear_value_42be608809151e2a: zc,
      __wbg_set_stencil_load_op_31838c036993098a: Nc,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: Xc,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: Qc,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Sc,
      __wbg_set_query_set_41de86d2401aee04: Uc,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: sc,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: Dc,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: Hc,
      __wbg_beginRenderPass_aa22c432e793359a: he,
      __wbg_label_7ed42f25f841996b: Sr,
      __wbg_set_label_08d9be3e4719c226: kc,
      __wbg_finish_4d91de5e927dd13f: it,
      __wbg_finish_6e06b68ab68cd9f6: gt,
      __wbindgen_object_clone_ref: I0,
      __wbg_length_370319915dc99107: hr,
      __wbg_Window_afcc911b2f9c92e2: Y,
      __wbg_gpu_2ccc250735d24a2a: or,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: J,
      __wbg_set_a_88262a42340d0b1c: ac,
      __wbg_set_b_c47befe0af3261eb: dc,
      __wbg_set_g_5983abfc46e0cf4e: Mc,
      __wbg_set_r_c6f4c68f4804d655: Gc,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: tb,
      __wbg_submit_ce44115121cd166c: Pa,
      __wbg_getMappedRange_d0bf3141224111b6: Vt,
      __wbg_unmap_adaf93276fdf9aaf: Bf,
      __wbg_destroy_fe937f756bf8df37: Bn,
      __wbg_mapAsync_52b01fa9e8f765fd: Pr,
      __wbg_then_16d107c451e9905d: Ja,
      __wbg_set_label_72bb4f41ef0cb893: Oc,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: U_,
      __wbg_end_f99ebed53d4e198a: ct,
      __wbg_new_typed_4148bd5ae72ab3f0: zr,
      __wbg_set_required_limits_871ed33c68613dcb: Kc,
      __wbg_set_required_features_1baf274a8669db60: jc,
      __wbg_set_label_60ad96c811e0d109: Lc,
      __wbg_requestDevice_ab46d0519ea1cc34: Gb,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: jt,
      __wbg_getCurrentTexture_20714d1bd9051cab: Ct,
      __wbg_set_device_e275d1d4f3c9eb74: vc,
      __wbg_set_format_815efd4dc4817bbb: Pc,
      __wbg_set_usage_a137f82ca163b0a9: ea,
      __wbg_set_alpha_mode_df805952892caa9c: fc,
      __wbg_set_mode_9990b3393ba469ae: qc,
      __wbg_set_tone_mapping_b3464f1baa4cff92: Jc,
      __wbg_set_view_formats_5797d2fff3c11808: na,
      __wbg_configure_0e4789c0f6b35c8e: E_,
      __wbg_set_dimension_e325282e613ca0a4: Ic,
      __wbg_set_format_1fcaa7d60546b490: Ac,
      __wbg_set_aspect_0d453bca3d012f02: uc,
      __wbg_set_base_array_layer_f176bb9f1b37b342: ic,
      __wbg_set_array_layer_count_7312f0f31af94e7c: oc,
      __wbg_set_base_mip_level_1df145d9f8db32a9: gc,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Bc,
      __wbg_set_label_e16e2dbe51349c7f: Cc,
      __wbg_set_usage_ddd42599bbba7779: _a,
      __wbg_createView_ceaf2f5881adbd34: rn,
      __wbg_set_power_preference_8fdca0b7af640d49: Wc,
      __wbg_requestAdapter_2e6718811c735a57: Wb,
      __wbg_queue_adce34608fd0c893: Mb,
      __wbg_get_507a50627bffa49b: cr,
      __wbg_set_load_op_99661da6c4eab9b0: Rc,
      __wbg_set_store_op_b5fdf672436f13f3: Yc,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: ta,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: mc,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: $c,
      __wbg_unconfigure_0a07a0a40de8988d: ef,
      __wbg_includes_78c9a3115b08eddc: dr,
      __wbg_push_d2ae3af0c1217ae6: Sb,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: fr,
      __wbg_userAgentData_31b8f893e8977e94: Uf,
      __wbg_brands_b7dcf262485c3e7c: He,
      __wbg_brand_3bc196a43eceb8af: Ye,
      __wbg_offsetX_a9bf2ea7f0575ac9: _b,
      __wbg_offsetY_10e5433a1bbd4c01: nb,
      __wbg_cancel_65f38182e2eeac5c: f_,
      __wbg_animate_8f41e2f47c7d04ab: le,
      __wbg_play_3997a1be51d27925: fb,
      __wbg_catch_c1a60df4c30d76d3: o_,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: Wt,
      __wbg_scheduler_b35fe73ba70e89cc: Jb,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: $b,
      __wbg_scheduler_a17d41c9c822fc26: Hb,
      __wbg_postTask_e2439afddcdfbb55: lb,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: Jf,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: Zf,
      __wbg_requestFullscreen_3f16e43f398ce624: jb,
      __wbg_requestFullscreen_b977a3a0697e883c: Kb,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: Ft,
      __wbg_Window_c7f91e3f80ae0a0e: H,
      __wbg_prototype_0d5bb2023db3bcfc: yb,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: wr,
      __wbg_blendFunc_114dc7056ccfeb8d: $e,
      __wbg_colorMask_a4d164c2039b5731: I_,
      __wbg_depthFunc_74a8f8acf8973c86: En,
      __wbg_depthMask_a644a67deced3257: On,
      __wbg_fenceSync_fe2cdba4a0d73679: ut,
      __wbg_frontFace_29ef7151de8b5ed9: It,
      __wbg_uniform1ui_cd7ad5581093b3df: bf,
      __wbg_beginQuery_042a1f99e870066c: Se,
      __wbg_bindBuffer_1e00cfb4321ef9a4: Ae,
      __wbg_blendColor_eae0cd578a2c7d15: qe,
      __wbg_clearDepth_ca9b22d41551b513: s_,
      __wbg_deleteSync_9b0e43580942a0f6: vn,
      __wbg_depthRange_5e90d4d236280ff5: Rn,
      __wbg_drawArrays_b0c59a6e158122f2: Yn,
      __wbg_readBuffer_4271437a70aae481: Fb,
      __wbg_useProgram_49495850b446fa56: Wf,
      __wbg_bindSampler_ce608f0de9d31acf: Ee,
      __wbg_bindTexture_28eff4bbd8aaab54: Le,
      __wbg_createQuery_047c7c524e4ac4f8: Q_,
      __wbg_deleteQuery_0d1dcc4402a86ee1: ln,
      __wbg_drawBuffers_1c1ec9b292442a2a: Jn,
      __wbg_linkProgram_4e047fb3197a0348: vr,
      __wbg_pixelStorei_c844cd0db4f1fde6: ab,
      __wbg_stencilMask_9a844dc58a89992f: va,
      __wbg_attachShader_8971266b4c9bc514: ye,
      __wbg_clearStencil_58f2af46612bccae: w_,
      __wbg_createBuffer_01568a9d930d90dd: V_,
      __wbg_createShader_7d139f2d50f77365: Z_,
      __wbg_deleteBuffer_1ca3ffe668a488e7: dn,
      __wbg_deleteShader_993edb4beb3c4d53: hn,
      __wbg_getExtension_101c7e41de3e4d90: Bt,
      __wbg_getParameter_d39f59581389af1b: Gt,
      __wbg_shaderSource_c3469dc2221dd528: fa,
      __wbg_activeTexture_d12958674e97a118: ie,
      __wbg_blendEquation_455b8986ededabc0: Ue,
      __wbg_compileShader_9bdfd792722cf704: D_,
      __wbg_createProgram_538c9777a4ac084f: N_,
      __wbg_createSampler_70c8392d98896235: H_,
      __wbg_createTexture_d13f98e0d3d912f4: _n,
      __wbg_deleteProgram_132e191baa9fa84f: mn,
      __wbg_deleteSampler_0abb528566c4ab3b: yn,
      __wbg_deleteTexture_bdc2202d7a50dcea: Dn,
      __wbg_polygonOffset_4eb460adf41db6cd: db,
      __wbg_texParameteri_1fc451e0964fc91c: La,
      __wbg_texStorage2D_7f947efc63dac273: Ca,
      __wbg_texStorage3D_f8f2e4b3386736f9: Ra,
      __wbg_bindFramebuffer_390311eff3896937: Me,
      __wbg_blitFramebuffer_a1215976f663b058: Ne,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: ke,
      __wbg_bindVertexArray_427eeac0c1764d8a: Re,
      __wbg_createFramebuffer_de0d521f546e7534: K_,
      __wbg_deleteFramebuffer_963cd69957209d37: gn,
      __wbg_getSyncParameter_d8f6c145657a3550: nr,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: Xb,
      __wbg_samplerParameteri_7b1b4091de49aabb: Yb,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: Ke,
      __wbg_createRenderbuffer_9d801bf44c314f44: Y_,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: tn,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: pn,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Pn,
      __wbg_getQueryParameter_919125495ccb17ca: Xt,
      __wbg_getShaderInfoLog_5cee2add982c7165: Yt,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: Da,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: ve,
      __wbg_bufferData_3d4f29bdfb1fa46c: Ze,
      __wbg_getProgramInfoLog_d1ce570463a68779: $t,
      __wbg_getShaderParameter_3394e75dcb97f380: Jt,
      __wbg_getUniformLocation_788a34295dd6fabe: br,
      __wbg_readPixels_82c9dee754d58176: kb,
      __wbg_renderbufferStorage_0a8de92542893819: Bb,
      __wbg_copyTexSubImage2D_8daea651fc408645: R_,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: q_,
      __wbg_drawArraysInstanced_51b161548a3f10c4: Qn,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: qt,
      __wbg_getProgramParameter_c8d1154fbb3c0890: Nt,
      __wbg_stencilFuncSeparate_814300446c2969ef: xa,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: ya,
      __wbg_texImage3D_bdd9bebe42ed1f52: ka,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: If,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Kf,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: yt,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: lr,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: Ve,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: tr,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: xt,
      __wbg_getSupportedExtensions_2a7458ec45e82560: er,
      __wbg_clientWaitSync_cf8e49f8ba228377: y_,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: ht,
      __wbg_texSubImage3D_8077e90ec309c414: Qa,
      __wbg_uniform2fv_1b43656b33177d21: cf,
      __wbg_uniform2iv_859048b9d60f46ae: ff,
      __wbg_uniform3fv_8ecb5ebb510b7bce: df,
      __wbg_uniform3iv_09abae5eabd6b9d6: sf,
      __wbg_uniform4fv_674a247aeb15012d: yf,
      __wbg_uniform4iv_d02934d7b94df609: hf,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: nt,
      __wbg_uniform2uiv_8a9cb3155271213b: uf,
      __wbg_uniform3uiv_3c0b163732f5b8f0: mf,
      __wbg_uniform4uiv_0d1a8ed214f10c31: vf,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: Un,
      __wbg_clearBufferfv_2e0f1a0ea56de859: u_,
      __wbg_clearBufferiv_0360269bf6e34c54: d_,
      __wbg_clearBufferuiv_df94a395d4915377: i_,
      __wbg_vertexAttribPointer_a8f0af57269c2067: zf,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: et,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Rb,
      __wbg_texSubImage3D_c9e5a071796d412f: Ya,
      __wbg_uniformMatrix2fv_9284424cc6aac672: Af,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Tf,
      __wbg_uniformMatrix4fv_423b958042692150: Of,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: $f,
      __wbg_bindBufferRange_f5c29912db0476e9: De,
      __wbg_bufferData_90ef588bac2be2f5: e_,
      __wbg_texSubImage3D_93b38c69acb735c8: Xa,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Pf,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: Mf,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: kf,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: Ef,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Cf,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: Rf,
      __wbg_readPixels_5f013a7d85b23800: Tb,
      __wbg_texImage3D_ef16a1f721b3f908: Ea,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: za,
      __wbg_texSubImage3D_6cb6cfd732dad145: Na,
      __wbg_texSubImage3D_45e498ae6298998c: $a,
      __wbg_texSubImage3D_feebaf7f0f4594c6: Ha,
      __wbg_compressedTexSubImage2D_c1362291573c7268: P_,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: T_,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: C_,
      __wbg_bufferSubData_bae930b21e9c1c48: n_,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: M_,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: k_,
      __wbg_getBufferSubData_11018928c908ac2c: Pt,
      __wbg_texSubImage2D_047380bb2660e4f9: Ba,
      __wbg_clear_dd06a0da4ce8e13f: x_,
      __wbg_flush_e03c08da6863b5ab: mt,
      __wbg_texImage2D_8d168171984f2a40: Ta,
      __wbg_texSubImage2D_bed5e7a3cd81d409: Ua,
      __wbg_texSubImage2D_e107b4f88c19b920: Ka,
      __wbg_enable_28bbeed576131d1f: tt,
      __wbg_finish_cbe7ec8675dd7705: st,
      __wbg_texSubImage2D_98c43894eb217aa7: Wa,
      __wbg_texSubImage2D_5058af3d30a8e205: qa,
      __wbg_texSubImage2D_6a376bfc3a31436b: Va,
      __wbg_texSubImage2D_d1af697e69f8a9e4: Ga,
      __wbg_disable_1659d1b7d50c31e7: Gn,
      __wbg_scissor_105e756596bc35df: Zb,
      __wbg_texImage2D_5abd8779d1d033c7: Fa,
      __wbg_viewport_affdf15c559df1e2: Qf,
      __wbg_cullFace_f1c75ae19b07eaf3: fn,
      __wbg_endQuery_a50f7fc49cfe56e9: bt,
      __wbg_uniform1f_62692c8fa8e7bf1e: _f,
      __wbg_uniform1i_7621f908f78177df: rf,
      __wbg_uniform4f_9ff60fc65b0ed726: lf,
      __wbg_instanceof_Window_05ba1ee4f6781663: mr,
      __wbg_matchMedia_9968278b31706f78: Mr,
      __wbg_queueMicrotask_ed5b33385a53c3a9: Pb,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: Vn,
      __wbg_getComputedStyle_961681bdf7e518e8: Tt,
      __wbg_cancelIdleCallback_b9e469156370a1e5: a_,
      __wbg_requestIdleCallback_d292749bf33501af: zb,
      __wbg_cancelAnimationFrame_086d6084925c4e06: c_,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Ub,
      __wbg_clearTimeout_8f80437be2324e09: l_,
      __wbg_setTimeout_5ccd86968701f1ec: rc,
      __wbg_setTimeout_cfa2cf195c3738db: bc,
      __wbg_document_179650d6cb13c263: zn,
      __wbg_navigator_99621db14b3f1099: Rr,
      __wbg_setAttribute_71039043be82d098: _c,
      __wbg_setPointerCapture_70025ca3fb7f26b9: nc,
      __wbg_activeElement_4bc99dc1a7094c27: ue,
      __wbg_createElement_fcbc0805de826d62: G_,
      __wbg_querySelector_fd7d157ebe17cd16: Ib,
      __wbg_visibilityState_301d0905e8103e21: Yf,
      __wbg_getElementById_1cbd8f06dbe8eb8e: Rt,
      __wbg_fullscreenElement_9f50a5e63bb433a8: At,
      __wbg_querySelectorAll_7e98cbe256deaadd: vb,
      __wbg_body_40ec34e0a2931fe8: Xe,
      __wbg_navigator_51379c10a84aeec9: Cr,
      __wbg_focus_2f77051f98540625: lt,
      __wbg_style_6657aed849e5d757: Aa,
      __wbg_blendFunc_a854d7e4459150ba: ze,
      __wbg_colorMask_44ebb91cad2502f2: v_,
      __wbg_depthFunc_455cfeb8a9d2fb4c: kn,
      __wbg_depthMask_4bd6c73b1339d257: Ln,
      __wbg_frontFace_fc6d98dafa42de87: Dt,
      __wbg_bindBuffer_a01497b1abdcdd9a: Pe,
      __wbg_blendColor_793b560dc69ddd0b: Be,
      __wbg_clearDepth_8b5d226aae155082: g_,
      __wbg_depthRange_38b2287ffbea14fd: Cn,
      __wbg_drawArrays_676becae0149ed65: Xn,
      __wbg_useProgram_182d120fe476921b: Vf,
      __wbg_bindTexture_9b04b1b7c00d4dd6: Oe,
      __wbg_linkProgram_d7c71c539c8c6a43: Ir,
      __wbg_pixelStorei_2a93b18efde9acf8: cb,
      __wbg_stencilMask_1c99b79b516d12dd: ha,
      __wbg_attachShader_5f7f4077e124e23b: xe,
      __wbg_clearStencil_a66fe23df6313fc7: m_,
      __wbg_createBuffer_2075765bde5035d5: W_,
      __wbg_createShader_78bc8b7e9a88e1a8: J_,
      __wbg_deleteBuffer_08eb938e35c27967: un,
      __wbg_deleteShader_3120790d36063afe: Sn,
      __wbg_getParameter_039a5899307fab55: Ut,
      __wbg_shaderSource_4cf90af97621ff49: aa,
      __wbg_activeTexture_92b04d918019d603: de,
      __wbg_blendEquation_f5c5272993f6cb01: Ge,
      __wbg_compileShader_fc2e4b73240d4fd7: A_,
      __wbg_createProgram_118becaac3a20318: z_,
      __wbg_createTexture_0ee0fa5f924f3d14: en,
      __wbg_deleteProgram_09bd45a51105b2f6: wn,
      __wbg_deleteTexture_2b163b157ea1be24: In,
      __wbg_polygonOffset_eccb68e40a18f861: ib,
      __wbg_texParameteri_9d0daa263d3a863f: Oa,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: Fe,
      __wbg_bindRenderbuffer_75e8469e930840fa: Te,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: j_,
      __wbg_deleteFramebuffer_d1a36e889b009344: sn,
      __wbg_blendFuncSeparate_37156309688f8f88: je,
      __wbg_createRenderbuffer_71af5c0d615e9271: X_,
      __wbg_deleteRenderbuffer_ca999f7883b777af: xn,
      __wbg_getShaderInfoLog_bc236afe696c1283: Ht,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: Ia,
      __wbg_bindAttribLocation_94202d7a59ab7863: Ie,
      __wbg_bufferData_ce4f44d56e9ddab5: __,
      __wbg_getProgramInfoLog_c4762e0513468a26: Kt,
      __wbg_getShaderParameter_cbcc0995e8e16214: Zt,
      __wbg_getUniformLocation_24ef46cdda2148ab: rr,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: qb,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: B_,
      __wbg_getProgramParameter_b9995b56c258ac86: zt,
      __wbg_stencilFuncSeparate_35136c4e5153406f: pa,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: Sa,
      __wbg_framebufferTexture2D_e1fb64212fcda219: St,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: We,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: pt,
      __wbg_uniform2fv_948dab6a82b428ac: af,
      __wbg_uniform2iv_f84a24961c0cfcd0: of,
      __wbg_uniform3fv_95d1933ea1440725: gf,
      __wbg_uniform3iv_a3a7008990fd84f0: wf,
      __wbg_uniform4fv_4ca8c114ca3de099: xf,
      __wbg_uniform4iv_45ab52abcb3f882c: Sf,
      __wbg_enableVertexAttribArray_4c08219124740f14: _t,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: Wn,
      __wbg_vertexAttribPointer_b300c8e000cdac93: Nf,
      __wbg_uniformMatrix2fv_769725d64641341f: Df,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: Ff,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Lf,
      __wbg_bufferData_073a7c6abef7a55f: Je,
      __wbg_readPixels_c7861e25836bf57b: Eb,
      __wbg_bufferSubData_ce9854d3d337e2cf: t_,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: F_,
      __wbg_clear_53d71d234e14e4c1: p_,
      __wbg_flush_db77b4a63d6b337d: wt,
      __wbg_enable_611804c0ac1504ce: rt,
      __wbg_finish_126e6f2ac71e3096: dt,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: ja,
      __wbg_disable_40c3975167c1ee07: jn,
      __wbg_scissor_573b844152316b8d: ec,
      __wbg_texImage2D_3813406af5bf54c8: Ma,
      __wbg_viewport_e8a16ca4a5085e5f: Xf,
      __wbg_cullFace_62bbea3bef0e6b99: an,
      __wbg_uniform1f_b79d0c5667f9fb40: nf,
      __wbg_uniform1i_5830de6702add20a: tf,
      __wbg_uniform4f_b25e39808b830021: pf,
      __wbg_disconnect_491a6bfd82cdd887: $n,
      __wbg_new_e0bd7540d9834af6: Kr,
      __wbg_observe_c3834a3e4cde3e64: Hr,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: Qr,
      __wbg_key_803dca86cdcfa8dd: yr,
      __wbg_code_89c999e407c79eef: h_,
      __wbg_repeat_4e131e99bff9b9f4: Vb,
      __wbg_altKey_50f830d1793a2eea: we,
      __wbg_ctrlKey_2e52816fa7160097: bn,
      __wbg_location_8f24df2c257fb974: Dr,
      __wbg_metaKey_d961c7572a9f84f5: kr,
      __wbg_shiftKey_9bcb8bdd60c2f152: oa,
      __wbg_new_4339b2a2675a03e3: Wr,
      __wbg_abort_8bae0f33e7833997: oe,
      __wbg_signal_dad7cb35193abd31: da,
      __wbg_set_box_223b9bc0b7f548f6: wc,
      __wbg_preventDefault_b64888c857500682: xb,
      __wbg_movementX_87e39021f3fce8b8: Lr,
      __wbg_movementY_f6f63087e2248fa9: Or,
      __wbg_button_f6a9a7b725f1838e: r_,
      __wbg_altKey_f3e24c4c9cfcf271: me,
      __wbg_buttons_d8acd46cf8f40ae9: b_,
      __wbg_ctrlKey_50bd8324959ca786: cn,
      __wbg_metaKey_f934f09e37889d70: Er,
      __wbg_shiftKey_9f797da486b2ade8: ua,
      __wbg_pointerId_ea33d2695be12e7f: ob,
      __wbg_pointerType_d5e932608aa61bb6: ub,
      __wbg_getCoalescedEvents_366947e5550da21b: Mt,
      __wbg_pressure_9a7845d9744ae9f4: pb,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: Hn,
      __wbg_persisted_e508d4d322115185: bb,
      __wbg_appendChild_f553e8704c4f14a6: pe,
      __wbg_contains_7189b09a477442a6: L_,
      __wbg_postMessage_b80f20949a4b4f55: wb,
      __wbg_set_onmessage_d511b70365304094: Vc,
      __wbg_close_3423cc7dafc477bb: S_,
      __wbg_start_d0cdf16ff965b3f3: ga,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: Nn,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: jf,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: Zn,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: Ce,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: nn,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: An,
      __wbg_isIntersecting_fc6d9529a49c5d62: pr,
      __wbg_log_d267660666346fb3: Ar,
      __wbg_info_eadbe775a8e2e9eb: ir,
      __wbg_warn_b1370d804fa3e259: Hf,
      __wbg_debug_87fd9b1a625b7efb: on,
      __wbg_error_744744ff0c9861e6: at,
      __wbg_error_7ed559cd7146b49d: ft,
      __wbg_deltaMode_d869228efd74f393: Mn,
      __wbg_deltaX_5d829ffba565ed10: Fn,
      __wbg_deltaY_6cfce8f8da250c23: Tn,
      __wbg_width_20c45c895834b83f: e0,
      __wbg_height_9f27216001e3c804: ur,
      __wbg_userAgent_0558f0ac642f7771: Gf,
      __wbg_addListener_b5b7f95360b22984: se,
      __wbg_removeListener_768e1e787e1d4b2e: Ob,
      __wbg_media_40cbd26ab34df71f: Tr,
      __wbg_matches_978994974df1e85b: Fr,
      __wbg_setProperty_e4e51b1b1d681d15: tc,
      __wbg_removeProperty_70da952bc1b493fa: Cb,
      __wbg_getPropertyValue_dc6b061239dad6f1: Qt,
      __wbg_contentRect_1d6e15e2e0d3e3c3: O_,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: qn,
      __wbg_new_f1a34223ddbe3f7d: $r,
      __wbg_port1_dabba0a56576e47e: gb,
      __wbg_port2_d05676aee003eedc: sb,
      __wbg_blockSize_5af477b962b2b031: Qe,
      __wbg_inlineSize_3c8412828bef21eb: gr,
      __wbg_addEventListener_d85450ee1320c989: ge,
      __wbg_removeEventListener_a3f23c70077bdcc1: Lb,
      __wbg_set_height_bbeef8f354041577: Tc,
      __wbg_getContext_fd298c901058eb31: Ot,
      __wbg_getContext_7476e39fa008047e: kt,
      __wbg_new_25e75d1f0df4d87a: qr,
      __wbg_set_width_49ac9b7d914afc85: ba,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: hb,
      __wbg_getSupportedProfiles_90a4f330938d0241: _r,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: Qb,
      __wbg_createObjectURL_416e527781e6fd6d: $_,
      __wbg_postMessage_ef2dbf5e8c8ebffc: mb,
      __wbg_new_8f0c2d11e48a4727: Gr,
      __wbg_get_b2053e9bfdf3ca8e: ar,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: vt,
      __wbg_disconnect_39bfdcb35b1fc7b9: Kn,
      __wbg_observe_615bef91ee28c925: Yr,
      __wbg_new_5394f65338077341: Ur,
      __wbg_observe_f27242eadc2ebd47: Jr,
      __wbg_unobserve_41a4f85162f1fb18: qf,
      __wbg_set_type_8ce203e412e28cf6: Zc,
      __wbg_set_height_7d9d8f892e6964c6: Fc,
      __wbg_getContext_e79ddf6a9cb3cc76: Lt,
      __wbg_getContext_ca12bb65aab778a4: Et,
      __wbg_set_width_8e30d010cd66830d: ca,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: sr,
      __wbg_performance_3fcf6e32a7e1ed0a: rb,
      __wbg_now_e7c6795a7f81e10f: Xr,
      __wbg_new_32b398fb48b6d94a: Vr,
      __wbg_new_da52cf8fe3429cb2: jr,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: Nr,
      __wbg_then_6ec10ae38b3e92f7: Za,
      __wbg_of_85f52f8b6491a7ca: eb,
      __wbg_of_5f1b88183ddb5d94: Zr,
      __wbg_is_7b9d0b289033c7de: xr,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: wa,
      __wbg_static_accessor_SELF_146583524fe1469b: ma,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: sa,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: la,
      __wbg_resolve_2191a4dfe481c25b: Nb,
      __wbg_set_8535240470bf2500: cc,
      __wbg_queueMicrotask_6a09b7bc46549209: Ab,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: Db,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: be,
      __wbg___wbindgen_throw_344f42d3211c4765: ae,
      __wbg___wbindgen_is_null_ea9085d691f535d3: ne,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: te,
      __wbg___wbindgen_string_get_b0ca35b86a603356: ce,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: Z,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: _e,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: re,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: ee,
      __wbg__wbg_cb_unref_fffb441def202758: fe,
      __wbindgen_cast_0000000000000001: _0,
      __wbindgen_cast_0000000000000002: n0,
      __wbindgen_cast_0000000000000003: t0,
      __wbindgen_cast_0000000000000004: r0,
      __wbindgen_cast_0000000000000005: b0,
      __wbindgen_cast_0000000000000006: c0,
      __wbindgen_cast_0000000000000007: a0,
      __wbindgen_cast_0000000000000008: f0,
      __wbindgen_cast_0000000000000009: o0,
      __wbindgen_cast_000000000000000a: u0,
      __wbindgen_cast_000000000000000b: d0,
      __wbindgen_cast_000000000000000c: i0,
      __wbindgen_cast_000000000000000d: g0,
      __wbindgen_cast_000000000000000e: s0,
      __wbindgen_cast_000000000000000f: w0,
      __wbindgen_cast_0000000000000010: m0,
      __wbindgen_cast_0000000000000011: l0,
      __wbindgen_cast_0000000000000012: p0,
      __wbindgen_cast_0000000000000013: x0,
      __wbindgen_cast_0000000000000014: y0,
      __wbindgen_cast_0000000000000015: S0,
      __wbindgen_cast_0000000000000016: h0,
      __wbindgen_cast_0000000000000017: v0
    }
  }, X), ao = l.memory, fo = l.main, oo = l.run_web, uo = l.__abort_handler, io = l.__instance_terminated, go = l.__wasm_bindgen_func_elem_8880, so = l.__wasm_bindgen_func_elem_6299, wo = l.__wasm_bindgen_func_elem_1613, mo = l.__wasm_bindgen_func_elem_1613_11, lo = l.__wasm_bindgen_func_elem_1613_12, po = l.__wasm_bindgen_func_elem_6301, xo = l.__wasm_bindgen_func_elem_6301_3, yo = l.__wasm_bindgen_func_elem_6301_4, So = l.__wasm_bindgen_func_elem_6301_5, ho = l.__wasm_bindgen_func_elem_6301_7, vo = l.__wasm_bindgen_func_elem_6301_8, Io = l.__wasm_bindgen_func_elem_6301_9, Do = l.__wasm_bindgen_func_elem_6301_10, Ao = l.__wasm_bindgen_func_elem_6308, Po = l.__wbindgen_export, Mo = l.__wbindgen_export2, Fo = l.__wbindgen_export3, To = l.__wbindgen_export4, ko = l.__wbindgen_export5, Eo = l.__wbindgen_add_to_stack_pointer, N = l.__wbindgen_start, Lo = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: uo,
    __instance_terminated: io,
    __wasm_bindgen_func_elem_1613: wo,
    __wasm_bindgen_func_elem_1613_11: mo,
    __wasm_bindgen_func_elem_1613_12: lo,
    __wasm_bindgen_func_elem_6299: so,
    __wasm_bindgen_func_elem_6301: po,
    __wasm_bindgen_func_elem_6301_10: Do,
    __wasm_bindgen_func_elem_6301_3: xo,
    __wasm_bindgen_func_elem_6301_4: yo,
    __wasm_bindgen_func_elem_6301_5: So,
    __wasm_bindgen_func_elem_6301_7: ho,
    __wasm_bindgen_func_elem_6301_8: vo,
    __wasm_bindgen_func_elem_6301_9: Io,
    __wasm_bindgen_func_elem_6308: Ao,
    __wasm_bindgen_func_elem_8880: go,
    __wbindgen_add_to_stack_pointer: Eo,
    __wbindgen_export: Po,
    __wbindgen_export2: Mo,
    __wbindgen_export3: Fo,
    __wbindgen_export4: To,
    __wbindgen_export5: ko,
    __wbindgen_start: N,
    main: fo,
    memory: ao,
    run_web: oo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  co(Lo);
  N();
})();
export {
  __tla,
  Co as run_web
};
