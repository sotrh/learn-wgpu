import { _ as J } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Mu;
let __tla = (async () => {
  const Z = "/learn-wgpu/assets/demo_bg-BmgYnGwv.wasm";
  Mu = function() {
    i.run_web();
  };
  function ee(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function _e(e) {
    const _ = t(e).Window;
    return b(_);
  }
  function te(e) {
    const _ = t(e).WorkerGlobalScope;
    return b(_);
  }
  function ne(e) {
    const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
    return s(n) ? 16777215 : n ? 1 : 0;
  }
  function re(e, _) {
    const n = U(t(_)), r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function ce(e) {
    return typeof t(e) == "function";
  }
  function be(e) {
    return t(e) === null;
  }
  function ae(e) {
    return t(e) === void 0;
  }
  function fe(e, _) {
    const n = t(_), r = typeof n == "number" ? n : void 0;
    l().setFloat64(e + 8, s(r) ? 0 : r, true), l().setInt32(e + 0, !s(r), true);
  }
  function oe(e, _) {
    const n = t(_), r = typeof n == "string" ? n : void 0;
    var c = s(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function ue(e, _) {
    throw new Error(w(e, _));
  }
  function de(e) {
    t(e)._wbg_cb_unref();
  }
  function ie(e) {
    t(e).abort();
  }
  function ge(e) {
    const _ = t(e).activeElement;
    return s(_) ? 0 : b(_);
  }
  function se(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function we(e, _) {
    t(e).activeTexture(_ >>> 0);
  }
  function le() {
    return u(function(e, _, n, r) {
      t(e).addEventListener(w(_, n), t(r));
    }, arguments);
  }
  function me() {
    return u(function(e, _) {
      t(e).addListener(t(_));
    }, arguments);
  }
  function pe(e) {
    return t(e).altKey;
  }
  function xe(e) {
    return t(e).altKey;
  }
  function ye(e, _, n) {
    const r = t(e).animate(t(_), t(n));
    return b(r);
  }
  function he() {
    return u(function(e, _) {
      const n = t(e).appendChild(t(_));
      return b(n);
    }, arguments);
  }
  function Se(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function ve(e, _, n) {
    t(e).attachShader(t(_), t(n));
  }
  function Ie(e, _, n) {
    t(e).beginQuery(_ >>> 0, t(n));
  }
  function Ae() {
    return u(function(e, _) {
      const n = t(e).beginRenderPass(t(_));
      return b(n);
    }, arguments);
  }
  function De(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function Pe(e, _, n, r, c) {
    t(e).bindAttribLocation(t(_), n >>> 0, w(r, c));
  }
  function Me(e, _, n, r, c, a) {
    t(e).bindBufferRange(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function Fe(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function ke(e, _, n) {
    t(e).bindBuffer(_ >>> 0, t(n));
  }
  function Te(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function Ee(e, _, n) {
    t(e).bindFramebuffer(_ >>> 0, t(n));
  }
  function Le(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Be(e, _, n) {
    t(e).bindRenderbuffer(_ >>> 0, t(n));
  }
  function Ce(e, _, n) {
    t(e).bindSampler(_ >>> 0, t(n));
  }
  function Oe(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function Re(e, _, n) {
    t(e).bindTexture(_ >>> 0, t(n));
  }
  function qe(e, _) {
    t(e).bindVertexArrayOES(t(_));
  }
  function Ve(e, _) {
    t(e).bindVertexArray(t(_));
  }
  function Ge(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function We(e, _, n, r, c) {
    t(e).blendColor(_, n, r, c);
  }
  function Ue(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function je(e, _, n) {
    t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
  }
  function Ke(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function ze(e, _) {
    t(e).blendEquation(_ >>> 0);
  }
  function Ne(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Qe(e, _, n, r, c) {
    t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Xe(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function $e(e, _, n) {
    t(e).blendFunc(_ >>> 0, n >>> 0);
  }
  function Ye(e, _, n, r, c, a, f, o, d, g, m) {
    t(e).blitFramebuffer(_, n, r, c, a, f, o, d, g >>> 0, m >>> 0);
  }
  function He(e) {
    return t(e).blockSize;
  }
  function Je(e) {
    const _ = t(e).body;
    return s(_) ? 0 : b(_);
  }
  function Ze(e, _) {
    const n = t(_).brand, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function e_(e) {
    const _ = t(e).brands;
    return b(_);
  }
  function __(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function t_(e, _, n, r) {
    t(e).bufferData(_ >>> 0, n, r >>> 0);
  }
  function n_(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function r_(e, _, n, r) {
    t(e).bufferData(_ >>> 0, t(n), r >>> 0);
  }
  function c_(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function b_(e, _, n, r) {
    t(e).bufferSubData(_ >>> 0, n, t(r));
  }
  function a_(e) {
    return t(e).button;
  }
  function f_(e) {
    return t(e).buttons;
  }
  function o_() {
    return u(function(e, _) {
      const n = t(e).call(t(_));
      return b(n);
    }, arguments);
  }
  function u_() {
    return u(function(e, _) {
      t(e).cancelAnimationFrame(_);
    }, arguments);
  }
  function d_(e, _) {
    t(e).cancelIdleCallback(_ >>> 0);
  }
  function i_(e) {
    t(e).cancel();
  }
  function g_(e, _) {
    const n = t(e).catch(t(_));
    return b(n);
  }
  function s_(e, _, n, r, c) {
    t(e).clearBufferfv(_ >>> 0, n, p(r, c));
  }
  function w_(e, _, n, r, c) {
    t(e).clearBufferiv(_ >>> 0, n, A(r, c));
  }
  function l_(e, _, n, r, c) {
    t(e).clearBufferuiv(_ >>> 0, n, E(r, c));
  }
  function m_(e, _) {
    t(e).clearDepth(_);
  }
  function p_(e, _) {
    t(e).clearDepth(_);
  }
  function x_(e, _) {
    t(e).clearStencil(_);
  }
  function y_(e, _) {
    t(e).clearStencil(_);
  }
  function h_(e, _) {
    t(e).clearTimeout(_);
  }
  function S_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function v_(e, _) {
    t(e).clear(_ >>> 0);
  }
  function I_(e, _, n, r) {
    return t(e).clientWaitSync(t(_), n >>> 0, r >>> 0);
  }
  function A_(e) {
    t(e).close();
  }
  function D_(e, _) {
    const n = t(_).code, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function P_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function M_(e, _, n, r, c) {
    t(e).colorMask(_ !== 0, n !== 0, r !== 0, c !== 0);
  }
  function F_(e, _) {
    t(e).compileShader(t(_));
  }
  function k_(e, _) {
    t(e).compileShader(t(_));
  }
  function T_(e, _, n, r, c, a, f, o, d) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(d));
  }
  function E_(e, _, n, r, c, a, f, o, d) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, t(d));
  }
  function L_(e, _, n, r, c, a, f, o, d, g) {
    t(e).compressedTexSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d, g);
  }
  function B_(e, _, n, r, c, a, f, o, d, g, m) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, t(m));
  }
  function C_(e, _, n, r, c, a, f, o, d, g, m, h) {
    t(e).compressedTexSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m, h);
  }
  function O_() {
    return u(function(e, _) {
      t(e).configure(t(_));
    }, arguments);
  }
  function R_(e, _) {
    return t(e).contains(t(_));
  }
  function q_(e) {
    const _ = t(e).contentRect;
    return b(_);
  }
  function V_(e, _, n, r, c, a) {
    t(e).copyBufferSubData(_ >>> 0, n >>> 0, r, c, a);
  }
  function G_(e, _, n, r, c, a, f, o, d) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, d);
  }
  function W_(e, _, n, r, c, a, f, o, d) {
    t(e).copyTexSubImage2D(_ >>> 0, n, r, c, a, f, o, d);
  }
  function U_(e, _, n, r, c, a, f, o, d, g) {
    t(e).copyTexSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g);
  }
  function j_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function K_(e) {
    const _ = t(e).createBuffer();
    return s(_) ? 0 : b(_);
  }
  function z_() {
    return u(function(e, _) {
      const n = t(e).createBuffer(t(_));
      return b(n);
    }, arguments);
  }
  function N_(e, _) {
    const n = t(e).createCommandEncoder(t(_));
    return b(n);
  }
  function Q_() {
    return u(function(e, _, n) {
      const r = t(e).createElement(w(_, n));
      return b(r);
    }, arguments);
  }
  function X_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function $_(e) {
    const _ = t(e).createFramebuffer();
    return s(_) ? 0 : b(_);
  }
  function Y_() {
    return u(function(e, _) {
      const n = URL.createObjectURL(t(_)), r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function H_(e, _) {
    const n = t(e).createPipelineLayout(t(_));
    return b(n);
  }
  function J_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function Z_(e) {
    const _ = t(e).createProgram();
    return s(_) ? 0 : b(_);
  }
  function et(e) {
    const _ = t(e).createQuery();
    return s(_) ? 0 : b(_);
  }
  function _t() {
    return u(function(e, _) {
      const n = t(e).createRenderPipeline(t(_));
      return b(n);
    }, arguments);
  }
  function tt(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function nt(e) {
    const _ = t(e).createRenderbuffer();
    return s(_) ? 0 : b(_);
  }
  function rt(e) {
    const _ = t(e).createSampler();
    return s(_) ? 0 : b(_);
  }
  function ct(e, _) {
    const n = t(e).createShaderModule(t(_));
    return b(n);
  }
  function bt(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function at(e, _) {
    const n = t(e).createShader(_ >>> 0);
    return s(n) ? 0 : b(n);
  }
  function ft(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function ot(e) {
    const _ = t(e).createTexture();
    return s(_) ? 0 : b(_);
  }
  function ut(e) {
    const _ = t(e).createVertexArrayOES();
    return s(_) ? 0 : b(_);
  }
  function dt(e) {
    const _ = t(e).createVertexArray();
    return s(_) ? 0 : b(_);
  }
  function it() {
    return u(function(e, _) {
      const n = t(e).createView(t(_));
      return b(n);
    }, arguments);
  }
  function gt(e) {
    return t(e).ctrlKey;
  }
  function st(e) {
    return t(e).ctrlKey;
  }
  function wt(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function lt(e, _) {
    t(e).cullFace(_ >>> 0);
  }
  function mt(e) {
    console.debug(t(e));
  }
  function pt(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function xt(e, _) {
    t(e).deleteBuffer(t(_));
  }
  function yt(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function ht(e, _) {
    t(e).deleteFramebuffer(t(_));
  }
  function St(e, _) {
    t(e).deleteProgram(t(_));
  }
  function vt(e, _) {
    t(e).deleteProgram(t(_));
  }
  function It(e, _) {
    t(e).deleteQuery(t(_));
  }
  function At(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function Dt(e, _) {
    t(e).deleteRenderbuffer(t(_));
  }
  function Pt(e, _) {
    t(e).deleteSampler(t(_));
  }
  function Mt(e, _) {
    t(e).deleteShader(t(_));
  }
  function Ft(e, _) {
    t(e).deleteShader(t(_));
  }
  function kt(e, _) {
    t(e).deleteSync(t(_));
  }
  function Tt(e, _) {
    t(e).deleteTexture(t(_));
  }
  function Et(e, _) {
    t(e).deleteTexture(t(_));
  }
  function Lt(e, _) {
    t(e).deleteVertexArrayOES(t(_));
  }
  function Bt(e, _) {
    t(e).deleteVertexArray(t(_));
  }
  function Ct(e) {
    return t(e).deltaMode;
  }
  function Ot(e) {
    return t(e).deltaX;
  }
  function Rt(e) {
    return t(e).deltaY;
  }
  function qt(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Vt(e, _) {
    t(e).depthFunc(_ >>> 0);
  }
  function Gt(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function Wt(e, _) {
    t(e).depthMask(_ !== 0);
  }
  function Ut(e, _, n) {
    t(e).depthRange(_, n);
  }
  function jt(e, _, n) {
    t(e).depthRange(_, n);
  }
  function Kt(e) {
    t(e).destroy();
  }
  function zt(e) {
    const _ = t(e).devicePixelContentBoxSize;
    return b(_);
  }
  function Nt(e) {
    return t(e).devicePixelRatio;
  }
  function Qt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function Xt(e, _) {
    t(e).disableVertexAttribArray(_ >>> 0);
  }
  function $t(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Yt(e, _) {
    t(e).disable(_ >>> 0);
  }
  function Ht(e) {
    t(e).disconnect();
  }
  function Jt(e) {
    t(e).disconnect();
  }
  function Zt(e) {
    const _ = t(e).document;
    return s(_) ? 0 : b(_);
  }
  function en(e, _, n, r, c) {
    t(e).drawArraysInstancedANGLE(_ >>> 0, n, r, c);
  }
  function _n(e, _, n, r, c) {
    t(e).drawArraysInstanced(_ >>> 0, n, r, c);
  }
  function tn(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function nn(e, _, n, r) {
    t(e).drawArrays(_ >>> 0, n, r);
  }
  function rn(e, _) {
    t(e).drawBuffersWEBGL(t(_));
  }
  function cn(e, _) {
    t(e).drawBuffers(t(_));
  }
  function bn(e, _, n, r, c, a) {
    t(e).drawElementsInstancedANGLE(_ >>> 0, n, r >>> 0, c, a);
  }
  function an(e, _, n, r, c, a) {
    t(e).drawElementsInstanced(_ >>> 0, n, r >>> 0, c, a);
  }
  function fn(e, _, n, r, c, a) {
    t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, c, a >>> 0);
  }
  function on(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function un(e, _) {
    t(e).enableVertexAttribArray(_ >>> 0);
  }
  function dn(e, _) {
    t(e).enable(_ >>> 0);
  }
  function gn(e, _) {
    t(e).enable(_ >>> 0);
  }
  function sn(e, _) {
    t(e).endQuery(_ >>> 0);
  }
  function wn(e) {
    t(e).end();
  }
  function ln(e, _) {
    let n, r;
    try {
      n = e, r = _, console.error(w(e, _));
    } finally {
      i.__wbindgen_export4(n, r, 1);
    }
  }
  function mn(e) {
    console.error(t(e));
  }
  function pn(e, _) {
    console.error(t(e), t(_));
  }
  function xn(e, _, n) {
    const r = t(e).fenceSync(_ >>> 0, n >>> 0);
    return s(r) ? 0 : b(r);
  }
  function yn(e) {
    const _ = t(e).finish();
    return b(_);
  }
  function hn(e, _) {
    const n = t(e).finish(t(_));
    return b(n);
  }
  function Sn(e) {
    t(e).flush();
  }
  function vn(e) {
    t(e).flush();
  }
  function In() {
    return u(function(e) {
      t(e).focus();
    }, arguments);
  }
  function An(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Dn(e, _, n, r, c) {
    t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Pn(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Mn(e, _, n, r, c, a) {
    t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Fn(e, _, n, r, c, a) {
    t(e).framebufferTextureLayer(_ >>> 0, n >>> 0, t(r), c, a);
  }
  function kn(e, _, n, r, c, a, f) {
    t(e).framebufferTextureMultiviewOVR(_ >>> 0, n >>> 0, t(r), c, a, f);
  }
  function Tn(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function En(e, _) {
    t(e).frontFace(_ >>> 0);
  }
  function Ln(e) {
    const _ = t(e).fullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function Bn(e, _, n, r) {
    t(e).getBufferSubData(_ >>> 0, n, t(r));
  }
  function Cn(e) {
    const _ = t(e).getCoalescedEvents;
    return b(_);
  }
  function On(e) {
    const _ = t(e).getCoalescedEvents();
    return b(_);
  }
  function Rn() {
    return u(function(e, _) {
      const n = t(e).getComputedStyle(t(_));
      return s(n) ? 0 : b(n);
    }, arguments);
  }
  function qn() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Vn() {
    return u(function(e, _, n) {
      const r = t(e).getContext(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Gn() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function Wn() {
    return u(function(e, _, n, r) {
      const c = t(e).getContext(w(_, n), t(r));
      return s(c) ? 0 : b(c);
    }, arguments);
  }
  function Un() {
    return u(function(e) {
      const _ = t(e).getCurrentTexture();
      return b(_);
    }, arguments);
  }
  function jn(e, _, n) {
    const r = t(e).getElementById(w(_, n));
    return s(r) ? 0 : b(r);
  }
  function Kn() {
    return u(function(e, _, n) {
      const r = t(e).getExtension(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function zn() {
    return u(function(e, _, n) {
      const r = t(e).getIndexedParameter(_ >>> 0, n >>> 0);
      return b(r);
    }, arguments);
  }
  function Nn() {
    return u(function(e, _, n) {
      const r = t(e).getMappedRange(_, n);
      return b(r);
    }, arguments);
  }
  function Qn(e, _) {
    const n = Object.getOwnPropertyDescriptor(t(e), t(_));
    return b(n);
  }
  function Xn() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function $n() {
    return u(function(e, _) {
      const n = t(e).getParameter(_ >>> 0);
      return b(n);
    }, arguments);
  }
  function Yn(e) {
    const _ = t(e).getPreferredCanvasFormat();
    return (T.indexOf(_) + 1 || 96) - 1;
  }
  function Hn(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function Jn(e, _, n) {
    const r = t(_).getProgramInfoLog(t(n));
    var c = s(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function Zn(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function er(e, _, n) {
    const r = t(e).getProgramParameter(t(_), n >>> 0);
    return b(r);
  }
  function _r() {
    return u(function(e, _, n, r) {
      const c = t(_).getPropertyValue(w(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function tr(e, _, n) {
    const r = t(e).getQueryParameter(t(_), n >>> 0);
    return b(r);
  }
  function nr(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function rr(e, _, n) {
    const r = t(_).getShaderInfoLog(t(n));
    var c = s(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = x;
    l().setInt32(e + 4, a, true), l().setInt32(e + 0, c, true);
  }
  function cr(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function br(e, _, n) {
    const r = t(e).getShaderParameter(t(_), n >>> 0);
    return b(r);
  }
  function ar(e) {
    const _ = t(e).getSupportedExtensions();
    return s(_) ? 0 : b(_);
  }
  function fr(e) {
    const _ = t(e).getSupportedProfiles();
    return s(_) ? 0 : b(_);
  }
  function or(e, _, n) {
    const r = t(e).getSyncParameter(t(_), n >>> 0);
    return b(r);
  }
  function ur(e, _, n, r) {
    return t(e).getUniformBlockIndex(t(_), w(n, r));
  }
  function dr(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function ir(e, _, n, r) {
    const c = t(e).getUniformLocation(t(_), w(n, r));
    return s(c) ? 0 : b(c);
  }
  function gr(e, _) {
    const n = t(e)[_ >>> 0];
    return b(n);
  }
  function sr(e, _) {
    const n = t(e)[_ >>> 0];
    return s(n) ? 0 : b(n);
  }
  function wr(e) {
    const _ = t(e).gpu;
    return b(_);
  }
  function lr(e) {
    return t(e).height;
  }
  function mr(e, _, n) {
    return t(e).includes(t(_), n);
  }
  function pr(e) {
    console.info(t(e));
  }
  function xr(e) {
    return t(e).inlineSize;
  }
  function yr(e) {
    let _;
    try {
      _ = t(e) instanceof GPUAdapter;
    } catch {
      _ = false;
    }
    return _;
  }
  function hr(e) {
    let _;
    try {
      _ = t(e) instanceof GPUCanvasContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function Sr(e) {
    let _;
    try {
      _ = t(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function vr(e) {
    let _;
    try {
      _ = t(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function Ir(e) {
    let _;
    try {
      _ = t(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function Ar() {
    return u(function(e, _, n) {
      t(e).invalidateFramebuffer(_ >>> 0, t(n));
    }, arguments);
  }
  function Dr(e) {
    return t(e).isIntersecting;
  }
  function Pr(e, _) {
    return Object.is(t(e), t(_));
  }
  function Mr(e, _) {
    const n = t(_).key, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Fr(e, _) {
    const n = t(_).label, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function kr(e) {
    return t(e).length;
  }
  function Tr(e) {
    return t(e).length;
  }
  function Er(e, _) {
    t(e).linkProgram(t(_));
  }
  function Lr(e, _) {
    t(e).linkProgram(t(_));
  }
  function Br(e) {
    return t(e).location;
  }
  function Cr(e) {
    console.log(t(e));
  }
  function Or(e, _, n, r) {
    const c = t(e).mapAsync(_ >>> 0, n, r);
    return b(c);
  }
  function Rr() {
    return u(function(e, _, n) {
      const r = t(e).matchMedia(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function qr(e) {
    return t(e).matches;
  }
  function Vr(e, _) {
    const n = t(_).media, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function Gr(e) {
    return t(e).metaKey;
  }
  function Wr(e) {
    return t(e).metaKey;
  }
  function Ur(e) {
    return t(e).movementX;
  }
  function jr(e) {
    return t(e).movementY;
  }
  function Kr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function zr(e) {
    const _ = t(e).navigator;
    return b(_);
  }
  function Nr() {
    return u(function(e) {
      const _ = new ResizeObserver(t(e));
      return b(_);
    }, arguments);
  }
  function Qr() {
    const e = new Object();
    return b(e);
  }
  function Xr() {
    const e = new Array();
    return b(e);
  }
  function $r() {
    return u(function(e, _) {
      const n = new Worker(w(e, _));
      return b(n);
    }, arguments);
  }
  function Yr() {
    return u(function() {
      const e = new MessageChannel();
      return b(e);
    }, arguments);
  }
  function Hr() {
    const e = new Error();
    return b(e);
  }
  function Jr() {
    return u(function(e) {
      const _ = new IntersectionObserver(t(e));
      return b(_);
    }, arguments);
  }
  function Zr() {
    return u(function() {
      const e = new AbortController();
      return b(e);
    }, arguments);
  }
  function ec(e, _) {
    const n = new Function(w(e, _));
    return b(n);
  }
  function _c(e, _, n) {
    const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
    return b(r);
  }
  function tc() {
    return u(function(e, _) {
      const n = new Blob(t(e), t(_));
      return b(n);
    }, arguments);
  }
  function nc(e) {
    return t(e).now();
  }
  function rc(e, _, n) {
    t(e).observe(t(_), t(n));
  }
  function cc(e, _) {
    t(e).observe(t(_));
  }
  function bc(e, _) {
    t(e).observe(t(_));
  }
  function ac(e, _) {
    const n = Array.of(t(e), t(_));
    return b(n);
  }
  function fc(e) {
    const _ = Array.of(t(e));
    return b(_);
  }
  function oc(e) {
    return t(e).offsetX;
  }
  function uc(e) {
    return t(e).offsetY;
  }
  function dc(e) {
    const _ = t(e).onSubmittedWorkDone();
    return b(_);
  }
  function ic(e) {
    const _ = t(e).performance;
    return b(_);
  }
  function gc(e) {
    return t(e).persisted;
  }
  function sc(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function wc(e, _, n) {
    t(e).pixelStorei(_ >>> 0, n);
  }
  function lc(e) {
    t(e).play();
  }
  function mc(e) {
    return t(e).pointerId;
  }
  function pc(e, _) {
    const n = t(_).pointerType, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function xc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function yc(e, _, n) {
    t(e).polygonOffset(_, n);
  }
  function hc(e) {
    const _ = t(e).port1;
    return b(_);
  }
  function Sc(e) {
    const _ = t(e).port2;
    return b(_);
  }
  function vc() {
    return u(function(e, _) {
      t(e).postMessage(t(_));
    }, arguments);
  }
  function Ic() {
    return u(function(e, _, n) {
      t(e).postMessage(t(_), t(n));
    }, arguments);
  }
  function Ac(e, _, n) {
    const r = t(e).postTask(t(_), t(n));
    return b(r);
  }
  function Dc(e) {
    return t(e).pressure;
  }
  function Pc(e) {
    t(e).preventDefault();
  }
  function Mc() {
    const e = ResizeObserverEntry.prototype;
    return b(e);
  }
  function Fc(e, _, n) {
    Uint8Array.prototype.set.call(Y(e, _), t(n));
  }
  function kc(e, _) {
    return t(e).push(t(_));
  }
  function Tc(e, _, n) {
    t(e).queryCounterEXT(t(_), n >>> 0);
  }
  function Ec() {
    return u(function(e, _, n) {
      const r = t(e).querySelectorAll(w(_, n));
      return b(r);
    }, arguments);
  }
  function Lc() {
    return u(function(e, _, n) {
      const r = t(e).querySelector(w(_, n));
      return s(r) ? 0 : b(r);
    }, arguments);
  }
  function Bc(e) {
    const _ = t(e).queueMicrotask;
    return b(_);
  }
  function Cc(e) {
    queueMicrotask(t(e));
  }
  function Oc(e, _) {
    t(e).queueMicrotask(t(_));
  }
  function Rc(e) {
    const _ = t(e).queue;
    return b(_);
  }
  function qc(e, _) {
    t(e).readBuffer(_ >>> 0);
  }
  function Vc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Gc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, o);
    }, arguments);
  }
  function Wc() {
    return u(function(e, _, n, r, c, a, f, o) {
      t(e).readPixels(_, n, r, c, a >>> 0, f >>> 0, t(o));
    }, arguments);
  }
  function Uc() {
    return u(function(e, _, n, r) {
      t(e).removeEventListener(w(_, n), t(r));
    }, arguments);
  }
  function jc() {
    return u(function(e, _) {
      t(e).removeListener(t(_));
    }, arguments);
  }
  function Kc() {
    return u(function(e, _, n, r) {
      const c = t(_).removeProperty(w(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = x;
      l().setInt32(e + 4, f, true), l().setInt32(e + 0, a, true);
    }, arguments);
  }
  function zc(e, _, n, r, c, a) {
    t(e).renderbufferStorageMultisample(_ >>> 0, n, r >>> 0, c, a);
  }
  function Nc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function Qc(e, _, n, r, c) {
    t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, c);
  }
  function Xc(e) {
    return t(e).repeat;
  }
  function $c(e, _) {
    const n = t(e).requestAdapter(t(_));
    return b(n);
  }
  function Yc() {
    return u(function(e, _) {
      return t(e).requestAnimationFrame(t(_));
    }, arguments);
  }
  function Hc(e, _) {
    const n = t(e).requestDevice(t(_));
    return b(n);
  }
  function Jc(e) {
    const _ = t(e).requestFullscreen;
    return b(_);
  }
  function Zc(e) {
    const _ = t(e).requestFullscreen();
    return b(_);
  }
  function eb(e) {
    const _ = t(e).requestIdleCallback;
    return b(_);
  }
  function _b() {
    return u(function(e, _) {
      return t(e).requestIdleCallback(t(_));
    }, arguments);
  }
  function tb(e) {
    const _ = Promise.resolve(t(e));
    return b(_);
  }
  function nb() {
    return u(function(e, _) {
      URL.revokeObjectURL(w(e, _));
    }, arguments);
  }
  function rb(e, _, n, r) {
    t(e).samplerParameterf(t(_), n >>> 0, r);
  }
  function cb(e, _, n, r) {
    t(e).samplerParameteri(t(_), n >>> 0, r);
  }
  function bb(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function ab(e) {
    const _ = t(e).scheduler;
    return b(_);
  }
  function fb(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function ob(e, _, n, r, c) {
    t(e).scissor(_, n, r, c);
  }
  function ub() {
    return u(function(e, _, n, r, c) {
      t(e).setAttribute(w(_, n), w(r, c));
    }, arguments);
  }
  function db(e, _, n, r, c) {
    t(e).setIndexBuffer(t(_), j[n], r, c);
  }
  function ib(e, _, n, r) {
    t(e).setIndexBuffer(t(_), j[n], r);
  }
  function gb(e, _) {
    t(e).setPipeline(t(_));
  }
  function sb() {
    return u(function(e, _) {
      t(e).setPointerCapture(_);
    }, arguments);
  }
  function wb() {
    return u(function(e, _, n, r, c) {
      t(e).setProperty(w(_, n), w(r, c));
    }, arguments);
  }
  function lb() {
    return u(function(e, _) {
      return t(e).setTimeout(t(_));
    }, arguments);
  }
  function mb() {
    return u(function(e, _, n) {
      return t(e).setTimeout(t(_), n);
    }, arguments);
  }
  function pb(e, _, n, r, c) {
    t(e).setVertexBuffer(_ >>> 0, t(n), r, c);
  }
  function xb(e, _, n, r) {
    t(e).setVertexBuffer(_ >>> 0, t(n), r);
  }
  function yb(e, _, n) {
    t(e).set(t(_), n >>> 0);
  }
  function hb() {
    return u(function(e, _, n) {
      return Reflect.set(t(e), t(_), t(n));
    }, arguments);
  }
  function Sb(e, _) {
    t(e).a = _;
  }
  function vb(e, _) {
    t(e).alpha = t(_);
  }
  function Ib(e, _) {
    t(e).alphaMode = U0[_];
  }
  function Ab(e, _) {
    t(e).alphaToCoverageEnabled = _ !== 0;
  }
  function Db(e, _) {
    t(e).arrayLayerCount = _ >>> 0;
  }
  function Pb(e, _) {
    t(e).arrayStride = _;
  }
  function Mb(e, _) {
    t(e).aspect = Q0[_];
  }
  function Fb(e, _) {
    t(e).attributes = t(_);
  }
  function kb(e, _) {
    t(e).b = _;
  }
  function Tb(e, _) {
    t(e).baseArrayLayer = _ >>> 0;
  }
  function Eb(e, _) {
    t(e).baseMipLevel = _ >>> 0;
  }
  function Lb(e, _) {
    t(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function Bb(e, _) {
    t(e).bindGroupLayouts = t(_);
  }
  function Cb(e, _) {
    t(e).blend = t(_);
  }
  function Ob(e, _) {
    t(e).box = H0[_];
  }
  function Rb(e, _) {
    t(e).buffers = t(_);
  }
  function qb(e, _) {
    t(e).clearValue = t(_);
  }
  function Vb(e, _, n) {
    t(e).code = w(_, n);
  }
  function Gb(e, _) {
    t(e).color = t(_);
  }
  function Wb(e, _) {
    t(e).colorAttachments = t(_);
  }
  function Ub(e, _) {
    t(e).compare = $[_];
  }
  function jb(e, _) {
    t(e).count = _ >>> 0;
  }
  function Kb(e, _) {
    t(e).cullMode = j0[_];
  }
  function zb(e, _) {
    t(e).depthBias = _;
  }
  function Nb(e, _) {
    t(e).depthBiasClamp = _;
  }
  function Qb(e, _) {
    t(e).depthBiasSlopeScale = _;
  }
  function Xb(e, _) {
    t(e).depthClearValue = _;
  }
  function $b(e, _) {
    t(e).depthCompare = $[_];
  }
  function Yb(e, _) {
    t(e).depthFailOp = z[_];
  }
  function Hb(e, _) {
    t(e).depthLoadOp = K[_];
  }
  function Jb(e, _) {
    t(e).depthReadOnly = _ !== 0;
  }
  function Zb(e, _) {
    t(e).depthStencil = t(_);
  }
  function ea(e, _) {
    t(e).depthStencilAttachment = t(_);
  }
  function _a(e, _) {
    t(e).depthStoreOp = N[_];
  }
  function ta(e, _) {
    t(e).depthWriteEnabled = _ !== 0;
  }
  function na(e, _) {
    t(e).device = t(_);
  }
  function ra(e, _) {
    t(e).dimension = X0[_];
  }
  function ca(e, _) {
    t(e).dstFactor = X[_];
  }
  function ba(e, _) {
    t(e).endOfPassWriteIndex = _ >>> 0;
  }
  function aa(e, _, n) {
    t(e).entryPoint = w(_, n);
  }
  function fa(e, _, n) {
    t(e).entryPoint = w(_, n);
  }
  function oa(e, _) {
    t(e).failOp = z[_];
  }
  function ua(e, _) {
    t(e).format = T[_];
  }
  function da(e, _) {
    t(e).format = T[_];
  }
  function ia(e, _) {
    t(e).format = T[_];
  }
  function ga(e, _) {
    t(e).format = $0[_];
  }
  function sa(e, _) {
    t(e).format = T[_];
  }
  function wa(e, _) {
    t(e).fragment = t(_);
  }
  function la(e, _) {
    t(e).frontFace = K0[_];
  }
  function ma(e, _) {
    t(e).g = _;
  }
  function pa(e, _) {
    t(e).height = _ >>> 0;
  }
  function xa(e, _) {
    t(e).height = _ >>> 0;
  }
  function ya(e, _, n) {
    t(e).label = w(_, n);
  }
  function ha(e, _, n) {
    t(e).label = w(_, n);
  }
  function Sa(e, _, n) {
    t(e).label = w(_, n);
  }
  function va(e, _, n) {
    t(e).label = w(_, n);
  }
  function Ia(e, _, n) {
    t(e).label = w(_, n);
  }
  function Aa(e, _, n) {
    t(e).label = w(_, n);
  }
  function Da(e, _, n) {
    t(e).label = w(_, n);
  }
  function Pa(e, _, n) {
    t(e).label = w(_, n);
  }
  function Ma(e, _, n) {
    t(e).label = w(_, n);
  }
  function Fa(e, _) {
    t(e).layout = t(_);
  }
  function ka(e, _) {
    t(e).loadOp = K[_];
  }
  function Ta(e, _) {
    t(e).mappedAtCreation = _ !== 0;
  }
  function Ea(e, _) {
    t(e).mask = _ >>> 0;
  }
  function La(e, _) {
    t(e).mipLevelCount = _ >>> 0;
  }
  function Ba(e, _) {
    t(e).module = t(_);
  }
  function Ca(e, _) {
    t(e).module = t(_);
  }
  function Oa(e, _) {
    t(e).multisample = t(_);
  }
  function Ra(e, _) {
    t(e).offset = _;
  }
  function qa(e, _) {
    t(e).onmessage = t(_);
  }
  function Va(e, _) {
    t(e).operation = W0[_];
  }
  function Ga(e, _) {
    t(e).passOp = z[_];
  }
  function Wa(e, _) {
    t(e).powerPreference = z0[_];
  }
  function Ua(e, _) {
    t(e).primitive = t(_);
  }
  function ja(e, _) {
    t(e).querySet = t(_);
  }
  function Ka(e, _) {
    t(e).r = _;
  }
  function za(e, _) {
    t(e).requiredFeatures = t(_);
  }
  function Na(e, _) {
    t(e).requiredLimits = t(_);
  }
  function Qa(e, _) {
    t(e).resolveTarget = t(_);
  }
  function Xa(e, _) {
    t(e).shaderLocation = _ >>> 0;
  }
  function $a(e, _) {
    t(e).size = _;
  }
  function Ya(e, _) {
    t(e).srcFactor = X[_];
  }
  function Ha(e, _) {
    t(e).stencilBack = t(_);
  }
  function Ja(e, _) {
    t(e).stencilClearValue = _ >>> 0;
  }
  function Za(e, _) {
    t(e).stencilFront = t(_);
  }
  function ef(e, _) {
    t(e).stencilLoadOp = K[_];
  }
  function _f(e, _) {
    t(e).stencilReadMask = _ >>> 0;
  }
  function tf(e, _) {
    t(e).stencilReadOnly = _ !== 0;
  }
  function nf(e, _) {
    t(e).stencilStoreOp = N[_];
  }
  function rf(e, _) {
    t(e).stencilWriteMask = _ >>> 0;
  }
  function cf(e, _) {
    t(e).stepMode = Y0[_];
  }
  function bf(e, _) {
    t(e).storeOp = N[_];
  }
  function af(e, _) {
    t(e).stripIndexFormat = j[_];
  }
  function ff(e, _) {
    t(e).targets = t(_);
  }
  function of(e, _) {
    t(e).timestampWrites = t(_);
  }
  function uf(e, _) {
    t(e).topology = N0[_];
  }
  function df(e, _, n) {
    t(e).type = w(_, n);
  }
  function gf(e, _) {
    t(e).unclippedDepth = _ !== 0;
  }
  function sf(e, _) {
    t(e).usage = _ >>> 0;
  }
  function wf(e, _) {
    t(e).usage = _ >>> 0;
  }
  function lf(e, _) {
    t(e).usage = _ >>> 0;
  }
  function mf(e, _) {
    t(e).vertex = t(_);
  }
  function pf(e, _) {
    t(e).view = t(_);
  }
  function xf(e, _) {
    t(e).view = t(_);
  }
  function yf(e, _) {
    t(e).viewFormats = t(_);
  }
  function hf(e, _) {
    t(e).width = _ >>> 0;
  }
  function Sf(e, _) {
    t(e).width = _ >>> 0;
  }
  function vf(e, _) {
    t(e).writeMask = _ >>> 0;
  }
  function If(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function Af(e, _, n, r) {
    t(e).shaderSource(t(_), w(n, r));
  }
  function Df(e) {
    return t(e).shiftKey;
  }
  function Pf(e) {
    return t(e).shiftKey;
  }
  function Mf(e) {
    const _ = t(e).signal;
    return b(_);
  }
  function Ff(e, _) {
    const n = t(_).stack, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
    l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
  }
  function kf(e) {
    t(e).start();
  }
  function Tf() {
    const e = typeof global > "u" ? null : global;
    return s(e) ? 0 : b(e);
  }
  function Ef() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return s(e) ? 0 : b(e);
  }
  function Lf() {
    const e = typeof self > "u" ? null : self;
    return s(e) ? 0 : b(e);
  }
  function Bf() {
    const e = typeof window > "u" ? null : window;
    return s(e) ? 0 : b(e);
  }
  function Cf(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function Of(e, _, n, r, c) {
    t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, c >>> 0);
  }
  function Rf(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function qf(e, _, n) {
    t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
  }
  function Vf(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function Gf(e, _) {
    t(e).stencilMask(_ >>> 0);
  }
  function Wf(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Uf(e, _, n, r, c) {
    t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function jf(e) {
    const _ = t(e).style;
    return b(_);
  }
  function Kf(e, _) {
    t(e).submit(t(_));
  }
  function zf() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function Nf() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, g);
    }, arguments);
  }
  function Qf() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function Xf() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, d >>> 0, g >>> 0, m);
    }, arguments);
  }
  function $f() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m) {
      t(e).texImage3D(_ >>> 0, n, r, c, a, f, o, d >>> 0, g >>> 0, t(m));
    }, arguments);
  }
  function Yf(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function Hf(e, _, n, r) {
    t(e).texParameteri(_ >>> 0, n >>> 0, r);
  }
  function Jf(e, _, n, r, c, a) {
    t(e).texStorage2D(_ >>> 0, n, r >>> 0, c, a);
  }
  function Zf(e, _, n, r, c, a, f) {
    t(e).texStorage3D(_ >>> 0, n, r >>> 0, c, a, f);
  }
  function eo() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function _o() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function to() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function no() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function ro() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function co() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function bo() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, t(g));
    }, arguments);
  }
  function ao() {
    return u(function(e, _, n, r, c, a, f, o, d, g) {
      t(e).texSubImage2D(_ >>> 0, n, r, c, a, f, o >>> 0, d >>> 0, g);
    }, arguments);
  }
  function fo() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function oo() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function uo() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function io() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function go() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function so() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, h);
    }, arguments);
  }
  function wo() {
    return u(function(e, _, n, r, c, a, f, o, d, g, m, h) {
      t(e).texSubImage3D(_ >>> 0, n, r, c, a, f, o, d, g >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function lo(e, _, n) {
    const r = t(e).then(t(_), t(n));
    return b(r);
  }
  function mo(e, _) {
    const n = t(e).then(t(_));
    return b(n);
  }
  function po(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function xo(e, _, n) {
    t(e).uniform1f(t(_), n);
  }
  function yo(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function ho(e, _, n) {
    t(e).uniform1i(t(_), n);
  }
  function So(e, _, n) {
    t(e).uniform1ui(t(_), n >>> 0);
  }
  function vo(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function Io(e, _, n, r) {
    t(e).uniform2fv(t(_), p(n, r));
  }
  function Ao(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function Do(e, _, n, r) {
    t(e).uniform2iv(t(_), A(n, r));
  }
  function Po(e, _, n, r) {
    t(e).uniform2uiv(t(_), E(n, r));
  }
  function Mo(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function Fo(e, _, n, r) {
    t(e).uniform3fv(t(_), p(n, r));
  }
  function ko(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function To(e, _, n, r) {
    t(e).uniform3iv(t(_), A(n, r));
  }
  function Eo(e, _, n, r) {
    t(e).uniform3uiv(t(_), E(n, r));
  }
  function Lo(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function Bo(e, _, n, r, c, a) {
    t(e).uniform4f(t(_), n, r, c, a);
  }
  function Co(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function Oo(e, _, n, r) {
    t(e).uniform4fv(t(_), p(n, r));
  }
  function Ro(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function qo(e, _, n, r) {
    t(e).uniform4iv(t(_), A(n, r));
  }
  function Vo(e, _, n, r) {
    t(e).uniform4uiv(t(_), E(n, r));
  }
  function Go(e, _, n, r) {
    t(e).uniformBlockBinding(t(_), n >>> 0, r >>> 0);
  }
  function Wo(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function Uo(e, _, n, r, c) {
    t(e).uniformMatrix2fv(t(_), n !== 0, p(r, c));
  }
  function jo(e, _, n, r, c) {
    t(e).uniformMatrix2x3fv(t(_), n !== 0, p(r, c));
  }
  function Ko(e, _, n, r, c) {
    t(e).uniformMatrix2x4fv(t(_), n !== 0, p(r, c));
  }
  function zo(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function No(e, _, n, r, c) {
    t(e).uniformMatrix3fv(t(_), n !== 0, p(r, c));
  }
  function Qo(e, _, n, r, c) {
    t(e).uniformMatrix3x2fv(t(_), n !== 0, p(r, c));
  }
  function Xo(e, _, n, r, c) {
    t(e).uniformMatrix3x4fv(t(_), n !== 0, p(r, c));
  }
  function $o(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Yo(e, _, n, r, c) {
    t(e).uniformMatrix4fv(t(_), n !== 0, p(r, c));
  }
  function Ho(e, _, n, r, c) {
    t(e).uniformMatrix4x2fv(t(_), n !== 0, p(r, c));
  }
  function Jo(e, _, n, r, c) {
    t(e).uniformMatrix4x3fv(t(_), n !== 0, p(r, c));
  }
  function Zo(e) {
    t(e).unmap();
  }
  function e0(e, _) {
    t(e).unobserve(t(_));
  }
  function _0(e, _) {
    t(e).useProgram(t(_));
  }
  function t0(e, _) {
    t(e).useProgram(t(_));
  }
  function n0(e) {
    const _ = t(e).userAgentData;
    return s(_) ? 0 : b(_);
  }
  function r0() {
    return u(function(e, _) {
      const n = t(_).userAgent, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = x;
      l().setInt32(e + 4, c, true), l().setInt32(e + 0, r, true);
    }, arguments);
  }
  function c0(e, _, n) {
    t(e).vertexAttribDivisorANGLE(_ >>> 0, n >>> 0);
  }
  function b0(e, _, n) {
    t(e).vertexAttribDivisor(_ >>> 0, n >>> 0);
  }
  function a0(e, _, n, r, c, a) {
    t(e).vertexAttribIPointer(_ >>> 0, n, r >>> 0, c, a);
  }
  function f0(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function o0(e, _, n, r, c, a, f) {
    t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function u0(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function d0(e, _, n, r, c) {
    t(e).viewport(_, n, r, c);
  }
  function i0(e) {
    const _ = t(e).visibilityState;
    return (J0.indexOf(_) + 1 || 3) - 1;
  }
  function g0(e) {
    console.warn(t(e));
  }
  function s0(e) {
    const _ = t(e).webkitFullscreenElement;
    return s(_) ? 0 : b(_);
  }
  function w0(e) {
    t(e).webkitRequestFullscreen();
  }
  function l0(e) {
    return t(e).width;
  }
  function m0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_2957, V0);
    return b(n);
  }
  function p0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, G0);
    return b(n);
  }
  function x0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function y0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function h0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function S0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function v0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function I0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function A0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, D);
    return b(n);
  }
  function D0(e, _) {
    const n = v(e, _, i.__wasm_bindgen_func_elem_1199, q0);
    return b(n);
  }
  function P0(e) {
    return b(e);
  }
  function M0(e, _) {
    const n = p(e, _);
    return b(n);
  }
  function F0(e, _) {
    const n = eu(e, _);
    return b(n);
  }
  function k0(e, _) {
    const n = A(e, _);
    return b(n);
  }
  function T0(e, _) {
    const n = _u(e, _);
    return b(n);
  }
  function E0(e, _) {
    const n = tu(e, _);
    return b(n);
  }
  function L0(e, _) {
    const n = E(e, _);
    return b(n);
  }
  function B0(e, _) {
    const n = Y(e, _);
    return b(n);
  }
  function C0(e, _) {
    const n = w(e, _);
    return b(n);
  }
  function O0(e) {
    const _ = t(e);
    return b(_);
  }
  function R0(e) {
    ou(e);
  }
  function q0(e, _) {
    i.__wasm_bindgen_func_elem_1536(e, _);
  }
  function V0(e, _, n) {
    i.__wasm_bindgen_func_elem_2958(e, _, b(n));
  }
  function D(e, _, n) {
    i.__wasm_bindgen_func_elem_1535(e, _, b(n));
  }
  function G0(e, _, n, r) {
    i.__wasm_bindgen_func_elem_1537(e, _, b(n), b(r));
  }
  const X = [
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
  ], W0 = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], U0 = [
    "opaque",
    "premultiplied"
  ], $ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], j0 = [
    "none",
    "front",
    "back"
  ], K0 = [
    "ccw",
    "cw"
  ], j = [
    "uint16",
    "uint32"
  ], K = [
    "load",
    "clear"
  ], z0 = [
    "low-power",
    "high-performance"
  ], N0 = [
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
  ], Q0 = [
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
  ], X0 = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], $0 = [
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
  ], Y0 = [
    "vertex",
    "instance"
  ], H0 = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], J0 = [
    "hidden",
    "visible"
  ];
  function b(e) {
    F === I.length && I.push(I.length + 1);
    const _ = F;
    return F = I[_], I[_] = e, _;
  }
  const Q = typeof FinalizationRegistry > "u" ? {
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
  function Z0(e) {
    e < 132 || (I[e] = F, F = e);
  }
  function p(e, _) {
    return e = e >>> 0, nu().subarray(e / 4, e / 4 + _);
  }
  function eu(e, _) {
    return e = e >>> 0, ru().subarray(e / 2, e / 2 + _);
  }
  function A(e, _) {
    return e = e >>> 0, cu().subarray(e / 4, e / 4 + _);
  }
  function _u(e, _) {
    return e = e >>> 0, bu().subarray(e / 1, e / 1 + _);
  }
  function tu(e, _) {
    return e = e >>> 0, au().subarray(e / 2, e / 2 + _);
  }
  function E(e, _) {
    return e = e >>> 0, fu().subarray(e / 4, e / 4 + _);
  }
  function Y(e, _) {
    return e = e >>> 0, M().subarray(e / 1, e / 1 + _);
  }
  let P = null;
  function l() {
    return (P === null || P.buffer.detached === true || P.buffer.detached === void 0 && P.buffer !== i.memory.buffer) && (P = new DataView(i.memory.buffer)), P;
  }
  let L = null;
  function nu() {
    return (L === null || L.byteLength === 0) && (L = new Float32Array(i.memory.buffer)), L;
  }
  let B = null;
  function ru() {
    return (B === null || B.byteLength === 0) && (B = new Int16Array(i.memory.buffer)), B;
  }
  let C = null;
  function cu() {
    return (C === null || C.byteLength === 0) && (C = new Int32Array(i.memory.buffer)), C;
  }
  let O = null;
  function bu() {
    return (O === null || O.byteLength === 0) && (O = new Int8Array(i.memory.buffer)), O;
  }
  function w(e, _) {
    return e = e >>> 0, du(e, _);
  }
  let R = null;
  function au() {
    return (R === null || R.byteLength === 0) && (R = new Uint16Array(i.memory.buffer)), R;
  }
  let q = null;
  function fu() {
    return (q === null || q.byteLength === 0) && (q = new Uint32Array(i.memory.buffer)), q;
  }
  let V = null;
  function M() {
    return (V === null || V.byteLength === 0) && (V = new Uint8Array(i.memory.buffer)), V;
  }
  function t(e) {
    return I[e];
  }
  function u(e, _) {
    try {
      return e.apply(this, _);
    } catch (n) {
      i.__wbindgen_export3(b(n));
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
      --c.cnt === 0 && (c.dtor(c.a, c.b), c.a = 0, Q.unregister(c));
    }, Q.register(a, c, c), a;
  }
  function y(e, _, n) {
    if (n === void 0) {
      const o = k.encode(e), d = _(o.length, 1) >>> 0;
      return M().subarray(d, d + o.length).set(o), x = o.length, d;
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
      const o = M().subarray(c + f, c + r), d = k.encodeInto(e, o);
      f += d.written, c = n(c, r, f, 1) >>> 0;
    }
    return x = f, c;
  }
  function ou(e) {
    const _ = t(e);
    return Z0(e), _;
  }
  let G = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  G.decode();
  const uu = 2146435072;
  let W = 0;
  function du(e, _) {
    return W += _, W >= uu && (G = new TextDecoder("utf-8", {
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
  let x = 0, i;
  function iu(e) {
    i = e;
  }
  URL = globalThis.URL;
  const S = await J({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: R0,
      __wbg_new_8a6f238a6ece86ea: Hr,
      __wbg_stack_0ed75d68575b0f3c: Ff,
      __wbg_error_7534b8e9a36f1ab4: ln,
      __wbg_userAgentData_f7b0e61c05c54315: n0,
      __wbg_brands_a1e7a2bce052128f: e_,
      __wbg_brand_9562792cbb4735c3: Ze,
      __wbindgen_object_clone_ref: O0,
      __wbg_offsetX_cb6a38e6f23cb4a6: oc,
      __wbg_offsetY_43e21941c5c1f8bf: uc,
      __wbg_cancel_09c394f0894744eb: i_,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: s0,
      __wbg_requestFullscreen_9f0611438eb929cf: Zc,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: w0,
      __wbg_requestFullscreen_86fc6cdb76000482: Jc,
      __wbg_postTask_41d93e93941e4a3d: Ac,
      __wbg_animate_6ec571f163cf6f8d: ye,
      __wbg_play_63bc12f42e16af91: lc,
      __wbg_scheduler_5156bb61cc1cf589: ab,
      __wbg_requestIdleCallback_1b8d644ff564208f: eb,
      __wbg_scheduler_48482a9974eeacbd: bb,
      __wbg_Window_d1bf622f71ff0629: _e,
      __wbg_prototype_c28bca39c45aba9b: Mc,
      __wbg_getCoalescedEvents_21492912fd0145ec: Cn,
      __wbg_performance_7a3ffd0b17f663ad: ic,
      __wbg_now_2c95c9de01293173: nc,
      __wbg_set_color_attachments_81e56abd7f11d38b: Wb,
      __wbg_set_label_10c0715c06c574ce: ya,
      __wbg_set_view_dc1937ba74f6a24a: xf,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: Xb,
      __wbg_set_depth_load_op_0e48f976ce8bf626: Hb,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: _a,
      __wbg_set_depth_read_only_16d1277d6c444182: Jb,
      __wbg_set_stencil_clear_value_c88c52b70d827549: Ja,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: ef,
      __wbg_set_stencil_store_op_b92786567b815d0f: nf,
      __wbg_set_stencil_read_only_54652ff66298c4c5: tf,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: ea,
      __wbg_set_query_set_1f3c39edf379c9f9: ja,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: Lb,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: ba,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: of,
      __wbg_beginRenderPass_c95ff061c0d906d5: Ae,
      __wbg_label_37d2cc4e867fe710: Fr,
      __wbg_set_label_5871c6a4116d78e4: va,
      __wbg_finish_cafc9caa4b3df56c: hn,
      __wbg_finish_42f37cad38abaf27: yn,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: hr,
      __wbg_set_dst_factor_01ac107dce46775a: ca,
      __wbg_set_operation_872810b2c7ad34bb: Va,
      __wbg_set_src_factor_d869078ba948812f: Ya,
      __wbg_Window_89f1205e6b84c5cf: ee,
      __wbg_gpu_97c682b8bbd6da29: wr,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: te,
      __wbg_set_a_cb5a15147778942a: Sb,
      __wbg_set_b_130b6d20afdc640c: kb,
      __wbg_set_g_a202edac674d3195: ma,
      __wbg_set_r_d02e085dc65c7ba3: Ka,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: dc,
      __wbg_submit_5f96af711b83c2df: Kf,
      __wbg_getMappedRange_9a20d37843bbc5dd: Nn,
      __wbg_unmap_80761f81f18ec521: Zo,
      __wbg_destroy_834dd203329bdb3c: Kt,
      __wbg_mapAsync_c9718fcf0566073c: Or,
      __wbg_set_size_61d185241554da71: $a,
      __wbg_set_usage_063311abcbeb0c9f: sf,
      __wbg_set_mapped_at_creation_0d65690c0978994b: Ta,
      __wbg_set_label_d7cc9fef79f6607e: Da,
      __wbg_createBuffer_e488cd40ceda9067: z_,
      __wbg_set_code_d96e8bd591fe4d27: Vb,
      __wbg_set_label_4592679c60c3ae0e: ha,
      __wbg_createShaderModule_2b4d1147549bca28: ct,
      __wbg_set_label_4f94deb040009907: Sa,
      __wbg_createCommandEncoder_e817b588d596b7d6: N_,
      __wbg_set_bind_group_layouts_0304829711909964: Bb,
      __wbg_set_label_81a922ba355b9c4e: Ia,
      __wbg_createPipelineLayout_87ecd84a502ca7b4: H_,
      __wbg_set_module_b00779338e12d7cb: Ca,
      __wbg_set_entry_point_d34fa93493d1dc0e: fa,
      __wbg_set_buffers_c36e59052d233445: Rb,
      __wbg_set_layout_cf44c2080938f1e8: Fa,
      __wbg_set_vertex_84e0affabea33233: mf,
      __wbg_set_label_ee8b5ccc3ceeadae: Pa,
      __wbg_set_format_1e6dd64c90091826: da,
      __wbg_set_depth_compare_f44e1ef737045c19: $b,
      __wbg_set_depth_write_enabled_47d54383526f6b41: ta,
      __wbg_set_depth_bias_6f054d893efee16d: zb,
      __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: Nb,
      __wbg_set_depth_bias_slope_scale_79c154be54e419a7: Qb,
      __wbg_set_compare_13ccce3149fc8362: Ub,
      __wbg_set_depth_fail_op_a697253b12a479e1: Yb,
      __wbg_set_fail_op_45d1f0ecf070d60c: oa,
      __wbg_set_pass_op_10f19e715ae2c3ef: Ga,
      __wbg_set_stencil_back_f7d6690835becc87: Ha,
      __wbg_set_stencil_front_b0e57ed3db28a814: Za,
      __wbg_set_stencil_read_mask_6d091cd38b736049: _f,
      __wbg_set_stencil_write_mask_775ac04ab32e79dc: rf,
      __wbg_set_depth_stencil_18746e1deb2f030f: Zb,
      __wbg_set_module_70bd7be1f2808c25: Ba,
      __wbg_set_targets_8396bdc905d927e9: ff,
      __wbg_set_entry_point_37d0e849bed76259: aa,
      __wbg_set_fragment_0767ccf58ccf1f6e: wa,
      __wbg_set_count_9f86d0fc02d08e45: jb,
      __wbg_set_mask_d8e7d97222c8a92e: Ea,
      __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: Ab,
      __wbg_set_multisample_8821c65822c70695: Oa,
      __wbg_set_cull_mode_e2b289219d281f62: Kb,
      __wbg_set_front_face_3c32fabea21988fa: la,
      __wbg_set_strip_index_format_d819e0c5b56ce30e: af,
      __wbg_set_topology_ad5745a55cfa852b: uf,
      __wbg_set_unclipped_depth_05a825ce1721e8ed: gf,
      __wbg_set_primitive_8ec2530289b383b9: Ua,
      __wbg_createRenderPipeline_5757ddd273de2e48: _t,
      __wbg_end_5a7ce60dc0f49d42: wn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Na,
      __wbg_set_required_features_505229173e5ae00f: za,
      __wbg_set_label_fcbb40adcedf7a3a: Ma,
      __wbg_requestDevice_acf949c0a7d11096: Hc,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: Yn,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: Un,
      __wbg_set_device_cf77f0192bc5144c: na,
      __wbg_set_format_f98f8a95c86d8cc1: sa,
      __wbg_set_usage_e94a8ea3a622b561: lf,
      __wbg_set_alpha_mode_ea0e62378a600722: Ib,
      __wbg_set_view_formats_57015785ec512612: yf,
      __wbg_configure_9ddad01510ae8865: O_,
      __wbg_set_dimension_f73df134b3cb9008: ra,
      __wbg_set_format_17bbec4e26222ce0: ua,
      __wbg_set_aspect_24f00699ffc05e48: Mb,
      __wbg_set_base_array_layer_8a27534c79ebf816: Tb,
      __wbg_set_array_layer_count_fbec00646c2f76f0: Db,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: Eb,
      __wbg_set_mip_level_count_11613862db4f5326: La,
      __wbg_set_label_a9e60f11d8f6d907: Aa,
      __wbg_set_usage_8a7a3a48dde89c84: wf,
      __wbg_createView_da8865cdd09ec9d5: it,
      __wbg_set_power_preference_ad90ccb2239fef97: Wa,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: $c,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: yr,
      __wbg_queue_19586e9507f5e981: Rc,
      __wbg_drawIndexed_61f900a3bae1176a: fn,
      __wbg_setPipeline_beee24fb5690e169: gb,
      __wbg_setIndexBuffer_1cfc93f884167fc9: db,
      __wbg_setIndexBuffer_f0e21a93f9ba1002: ib,
      __wbg_setVertexBuffer_0e2ad0c3f14b93dc: pb,
      __wbg_setVertexBuffer_5090dba5d6df1168: xb,
      __wbg_set_clear_value_576d8a3bda7ba8cc: qb,
      __wbg_set_load_op_de7ca59cc25dfb40: ka,
      __wbg_set_store_op_5185ea291265ee63: bf,
      __wbg_set_resolve_target_cce9edc587b4211e: Qa,
      __wbg_set_view_330ed9fc9fcc4d01: pf,
      __wbg_set_attributes_9241554310424d07: Fb,
      __wbg_set_array_stride_6ac1c0f48cbb1a6e: Pb,
      __wbg_set_step_mode_e6ef4bb885b3b66a: cf,
      __wbg_set_format_313c8f10a7e36a0c: ga,
      __wbg_set_offset_697e85d970df2f50: Ra,
      __wbg_set_shader_location_01be15233cdb0803: Xa,
      __wbg_set_format_237204cc87ea4982: ia,
      __wbg_set_alpha_e58cc49c799f170e: vb,
      __wbg_set_color_5c69a2b8e768328d: Gb,
      __wbg_set_blend_450723fd40147c64: Cb,
      __wbg_set_write_mask_fc328072f01cb48d: vf,
      __wbg_queueMicrotask_5bb536982f78a56f: Cc,
      __wbg_queueMicrotask_0aa0a927f78f5d98: Bc,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: vr,
      __wbg_blendFunc_2ef59299d10c662d: Xe,
      __wbg_colorMask_177d9762658e5e28: P_,
      __wbg_depthFunc_f670d4cbb9cd0913: Vt,
      __wbg_depthMask_75a36d0065471a4b: Wt,
      __wbg_fenceSync_c52a4e24eabfa0d3: xn,
      __wbg_frontFace_d4a6507ad2939b5c: En,
      __wbg_uniform1ui_a0f911ff174715d0: So,
      __wbg_beginQuery_0fdf154e1da0e73d: Ie,
      __wbg_bindBuffer_c9068e8712a034f5: ke,
      __wbg_blendColor_e799d452ab2a5788: We,
      __wbg_clearDepth_670099db422a4f91: p_,
      __wbg_deleteSync_c8e4a9c735f71d18: kt,
      __wbg_depthRange_337bf254e67639bb: Ut,
      __wbg_drawArrays_075228181299b824: tn,
      __wbg_readBuffer_9eb461d6857295f0: qc,
      __wbg_useProgram_fe720ade4d3b6edb: t0,
      __wbg_bindSampler_96f0e90e7bc31da9: Ce,
      __wbg_bindTexture_b2b7b1726a83f93e: Oe,
      __wbg_createQuery_7988050efd7e4c48: et,
      __wbg_deleteQuery_ea8bf1954febd774: It,
      __wbg_drawBuffers_5eccfaacc6560299: cn,
      __wbg_linkProgram_6600dd2c0863bbfd: Er,
      __wbg_pixelStorei_2a65936c11b710fe: sc,
      __wbg_stencilMask_732dcc5aada10e4c: Gf,
      __wbg_attachShader_b36058e5c9eeaf54: ve,
      __wbg_clearStencil_5d243d0dff03c315: x_,
      __wbg_createBuffer_26534c05e01b8559: j_,
      __wbg_createShader_e3ac08ed8c5b14b2: bt,
      __wbg_deleteBuffer_ab099883c168644d: xt,
      __wbg_deleteShader_aaf3b520a64d5d9d: Mt,
      __wbg_getExtension_3c0cb5ae01bb4b17: Kn,
      __wbg_getParameter_2e1f97ecaab76274: $n,
      __wbg_shaderSource_32425cfe6e5a1e52: If,
      __wbg_activeTexture_6f9a710514686c24: se,
      __wbg_blendEquation_e9b99928ed1494ad: ze,
      __wbg_compileShader_94718a93495d565d: k_,
      __wbg_createProgram_9b7710a1f2701c2c: Z_,
      __wbg_createSampler_da6bb96c9ffaaa27: rt,
      __wbg_createTexture_16d2c8a3d7d4a75a: ft,
      __wbg_deleteProgram_9298fb3e3c1d3a78: St,
      __wbg_deleteSampler_c6b68c4071841afa: Pt,
      __wbg_deleteTexture_9d411c0e60ffa324: Et,
      __wbg_polygonOffset_4b3158d8ed028862: yc,
      __wbg_texParameteri_0d45be2c88d6bad8: Yf,
      __wbg_texStorage2D_9504743abf5a986a: Jf,
      __wbg_texStorage3D_e9e1b58fee218abe: Zf,
      __wbg_bindFramebuffer_031c73ba501cb8f6: Te,
      __wbg_blitFramebuffer_d730a23ab4db248e: Ye,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: Le,
      __wbg_bindVertexArray_78220d1edb1d2382: Ve,
      __wbg_createFramebuffer_41512c38358a41c4: X_,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: ht,
      __wbg_getSyncParameter_7d11ab875b41617e: or,
      __wbg_samplerParameterf_f070d2b69b1e2d46: rb,
      __wbg_samplerParameteri_8e4c4bcead0ee669: cb,
      __wbg_blendFuncSeparate_95465944f788a092: Ne,
      __wbg_createRenderbuffer_a601226a6a680dbe: nt,
      __wbg_createVertexArray_ad5294951ae57497: dt,
      __wbg_deleteRenderbuffer_096edada57729468: At,
      __wbg_deleteVertexArray_7bc7f92769862f93: Bt,
      __wbg_getQueryParameter_5d6af051438ae479: tr,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: rr,
      __wbg_stencilOpSeparate_4657523b1d3b184f: Wf,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: Pe,
      __wbg_bufferData_32d26eba0c74a53c: t_,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: Hn,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: br,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: ir,
      __wbg_readPixels_6ea8e288a8673282: Gc,
      __wbg_renderbufferStorage_1bc02383614b76b2: Nc,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: W_,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: U_,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: _n,
      __wbg_getIndexedParameter_ca1693c768bc4934: zn,
      __wbg_getProgramParameter_92e4540ca9da06b2: er,
      __wbg_stencilFuncSeparate_10d043d0af14366f: Cf,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: Rf,
      __wbg_texImage3D_2082006a8a9b28a7: Xf,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: Go,
      __wbg_vertexAttribDivisor_744c0ca468594894: b0,
      __wbg_framebufferTexture2D_c283e928186aa542: Mn,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: Ar,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: je,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: ur,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: An,
      __wbg_getSupportedExtensions_57142a6b598d7787: ar,
      __wbg_clientWaitSync_21865feaeb76a9a5: I_,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: Fn,
      __wbg_texSubImage3D_59b8e24fb05787aa: so,
      __wbg_uniform2fv_2fb47cfe06330cc7: Io,
      __wbg_uniform2iv_095baf208f172131: Ao,
      __wbg_uniform3fv_c0872003729939a5: Fo,
      __wbg_uniform3iv_6aa2b0791e659d14: ko,
      __wbg_uniform4fv_498bd80dc5aa16ff: Co,
      __wbg_uniform4iv_8a8219fda39dffd5: qo,
      __wbg_enableVertexAttribArray_475e06c31777296d: on,
      __wbg_uniform2uiv_3030d7e769f5e82a: Po,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: Eo,
      __wbg_uniform4uiv_046ee400bb80547d: Vo,
      __wbg_disableVertexAttribArray_24a020060006b10f: Qt,
      __wbg_clearBufferfv_ac87d92e2f45d80c: s_,
      __wbg_clearBufferiv_69ff24bb52ec4c88: w_,
      __wbg_clearBufferuiv_8ad59a8219aafaca: l_,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: f0,
      __wbg_drawElementsInstanced_d41fc920ae24717c: an,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: zc,
      __wbg_texSubImage3D_45591e5655d1ed5c: io,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: Wo,
      __wbg_uniformMatrix3fv_6f822361173d8046: zo,
      __wbg_uniformMatrix4fv_0e724dbebd372526: $o,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: a0,
      __wbg_bindBufferRange_009d206fe9e4151e: Me,
      __wbg_bufferData_98f6c413a8f0f139: r_,
      __wbg_texSubImage3D_3b653017c4c5d721: uo,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: jo,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: Ko,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: Qo,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: Xo,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: Ho,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: Jo,
      __wbg_readPixels_55b18304384e073d: Vc,
      __wbg_texImage3D_bd2b0bd2cfcdb278: $f,
      __wbg_texSubImage3D_47643556a8a4bf86: go,
      __wbg_texSubImage3D_18d7f3c65567c885: oo,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: wo,
      __wbg_texSubImage3D_1102c12a20bf56d5: fo,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: L_,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: C_,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: V_,
      __wbg_bufferSubData_3e902f031adf13fd: b_,
      __wbg_compressedTexSubImage2D_684350eb62830032: E_,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: B_,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Bn,
      __wbg_texSubImage2D_edf5bd70fda3feaf: ao,
      __wbg_clear_7187030f892c5ca0: v_,
      __wbg_flush_e322496f5412e567: vn,
      __wbg_texImage2D_13414a4692836804: Nf,
      __wbg_texSubImage2D_bf72e56edeeed376: ro,
      __wbg_texSubImage2D_e193f1d28439217c: bo,
      __wbg_enable_d1ac04dfdd2fb3ae: dn,
      __wbg_texSubImage2D_117d29278542feb0: eo,
      __wbg_texSubImage2D_bd034db2e58c352c: no,
      __wbg_texSubImage2D_5d270af600a7fc4a: to,
      __wbg_texSubImage2D_d17a39cdec4a3495: co,
      __wbg_disable_7fe6fb3e97717f88: $t,
      __wbg_scissor_2ff8f18f05a6d408: fb,
      __wbg_texImage2D_087ef94df78081f0: zf,
      __wbg_viewport_df236eac68bc7467: d0,
      __wbg_cullFace_e7e711a14d2c3f48: lt,
      __wbg_endQuery_54f0627d4c931318: sn,
      __wbg_uniform1f_b500ede5b612bea2: po,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: ho,
      __wbg_uniform4f_f6b5e2024636033a: Bo,
      __wbg_instanceof_Window_ed49b2db8df90359: Ir,
      __wbg_matchMedia_91d4fc9729dc3c84: Rr,
      __wbg_queueMicrotask_885fd8605352e25d: Oc,
      __wbg_devicePixelRatio_5c458affc89fc209: Nt,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Rn,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: d_,
      __wbg_requestIdleCallback_c9c643f8210d435b: _b,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: u_,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: Yc,
      __wbg_clearTimeout_df03cf00269bc442: h_,
      __wbg_setTimeout_681abd84926a4da3: lb,
      __wbg_setTimeout_eff32631ea138533: mb,
      __wbg_document_ee35a3d3ae34ef6c: Zt,
      __wbg_navigator_43be698ba96fc088: Kr,
      __wbg_setAttribute_cc8e4c8a2a008508: ub,
      __wbg_setPointerCapture_420db6f6826eb74b: sb,
      __wbg_activeElement_1554b6917654f8d6: ge,
      __wbg_createElement_49f60fdcaae809c8: Q_,
      __wbg_querySelector_c3b0df2d58eec220: Lc,
      __wbg_visibilityState_43b7b74940e07d22: i0,
      __wbg_getElementById_e34377b79d7285f6: jn,
      __wbg_fullscreenElement_25b445e2961e68ba: Ln,
      __wbg_querySelectorAll_1283aae52043a951: Ec,
      __wbg_body_f67922363a220026: Je,
      __wbg_navigator_4478931f32ebca57: zr,
      __wbg_focus_128ff465f65677cc: In,
      __wbg_style_0b7c9bd318f8b807: jf,
      __wbg_blendFunc_446658e7231ab9c8: $e,
      __wbg_colorMask_7a8dbc86e7376a9b: M_,
      __wbg_depthFunc_eb3aa05361dd2eaa: qt,
      __wbg_depthMask_103091329ca1a750: Gt,
      __wbg_frontFace_027e2ec7a7bc347c: Tn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: Fe,
      __wbg_blendColor_1d50ac87d9a2794b: Ge,
      __wbg_clearDepth_2b109f644a783a53: m_,
      __wbg_depthRange_5579d448b9d7de57: jt,
      __wbg_drawArrays_2be89c369a29f30b: nn,
      __wbg_useProgram_e82c1a5f87d81579: _0,
      __wbg_bindTexture_ec13ddcb9dc8e032: Re,
      __wbg_linkProgram_be6b825cf66d177b: Lr,
      __wbg_pixelStorei_f7cc498f52d523f1: wc,
      __wbg_stencilMask_0eca090c4c47f8f7: Vf,
      __wbg_attachShader_32114efcf2744eb6: Se,
      __wbg_clearStencil_aa65955bb39d8c18: y_,
      __wbg_createBuffer_c4ec897aacc1b91c: K_,
      __wbg_createShader_f2b928ca9a426b14: at,
      __wbg_deleteBuffer_22fcc93912cbf659: pt,
      __wbg_deleteShader_ff70ca962883e241: Ft,
      __wbg_getParameter_1ecb910cfdd21f88: Xn,
      __wbg_shaderSource_8f4bda03f70359df: Af,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: we,
      __wbg_blendEquation_82202f34c4c00e50: Ke,
      __wbg_compileShader_63b824e86bb00b8f: F_,
      __wbg_createProgram_98aaa91f7c81c5e2: J_,
      __wbg_createTexture_f9451a82c7527ce2: ot,
      __wbg_deleteProgram_f354e79b8cae8076: vt,
      __wbg_deleteTexture_2be78224e5584a8b: Tt,
      __wbg_polygonOffset_24a8059deb03be92: xc,
      __wbg_texParameteri_ec937d2161018946: Hf,
      __wbg_bindFramebuffer_7815ca611abb057f: Ee,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: Be,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: $_,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: yt,
      __wbg_blendFuncSeparate_f366c170c5097fbe: Qe,
      __wbg_createRenderbuffer_1e567f2f4d461710: tt,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: Dt,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: nr,
      __wbg_stencilOpSeparate_de257f3c29e604cd: Uf,
      __wbg_bindAttribLocation_5cfc7fa688df5051: De,
      __wbg_bufferData_1be8450fab534758: __,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: Jn,
      __wbg_getShaderParameter_786fd84f85720ca8: cr,
      __wbg_getUniformLocation_71c070e6644669ad: dr,
      __wbg_renderbufferStorage_6348154d30979c44: Qc,
      __wbg_copyTexSubImage2D_417a65926e3d2490: G_,
      __wbg_getProgramParameter_43fbc6d2613c08b3: Zn,
      __wbg_stencilFuncSeparate_1798f5cca257f313: Of,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: qf,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: Pn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: Ue,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: Dn,
      __wbg_uniform2fv_04c304b93cbf7f55: vo,
      __wbg_uniform2iv_ccf2ed44ac8e602e: Do,
      __wbg_uniform3fv_aa35ef21e14d5469: Mo,
      __wbg_uniform3iv_e912f444d4ff8269: To,
      __wbg_uniform4fv_e6c73702e9a3be5c: Oo,
      __wbg_uniform4iv_375332584c65e61b: Ro,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: un,
      __wbg_disableVertexAttribArray_4bac633c27bae599: Xt,
      __wbg_vertexAttribPointer_adbd1853cce679ad: o0,
      __wbg_uniformMatrix2fv_e2806601f5b95102: Uo,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: No,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: Yo,
      __wbg_bufferData_52235e85894af988: n_,
      __wbg_readPixels_95b2464a7bb863a2: Wc,
      __wbg_bufferSubData_33eebcc173094f6a: c_,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: T_,
      __wbg_clear_4d801d0d054c3579: S_,
      __wbg_flush_7777597fd43065db: Sn,
      __wbg_enable_fee40f19b7053ea3: gn,
      __wbg_texSubImage2D_19ae4cadb809f264: _o,
      __wbg_disable_bd37bdcca1764aea: Yt,
      __wbg_scissor_b870b1434a9c25b4: ob,
      __wbg_texImage2D_e71049312f3172d9: Qf,
      __wbg_viewport_174ae1c2209344ae: u0,
      __wbg_cullFace_39500f654c67a205: wt,
      __wbg_uniform1f_c148eeaf4b531059: xo,
      __wbg_uniform1i_9f3f72dbcb98ada9: yo,
      __wbg_uniform4f_71ec75443e58cecc: Lo,
      __wbg_get_d8db2ad31d529ff8: sr,
      __wbg_deltaMode_a1d1df711e44cefc: Ct,
      __wbg_deltaX_f0ca9116db5f7bc1: Ot,
      __wbg_deltaY_eb94120160ac821c: Rt,
      __wbg_addEventListener_3acb0aad4483804c: le,
      __wbg_removeEventListener_e63328781a5b9af9: Uc,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: rn,
      __wbg_set_height_f21f985387070100: xa,
      __wbg_getContext_2a5764d48600bc43: Vn,
      __wbg_getContext_b28d2db7bd648242: Gn,
      __wbg_set_width_d60bc4f2f20c56a4: Sf,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: Sr,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: fr,
      __wbg_preventDefault_cdcfcd7e301b9702: Pc,
      __wbg_postMessage_e45c89e4826cf2ef: Ic,
      __wbg_new_4f8f3c123e474358: $r,
      __wbg_key_d41e8e825e6bb0e9: Mr,
      __wbg_code_dee0dae4730408e1: D_,
      __wbg_repeat_375aae5c5c6a0258: Xc,
      __wbg_altKey_73c1173ba53073d5: pe,
      __wbg_ctrlKey_09a1b54d77dea92b: gt,
      __wbg_location_22bcb1a188a96eb1: Br,
      __wbg_metaKey_67113fb40365d736: Wr,
      __wbg_shiftKey_564be91ec842bcc4: Pf,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: kn,
      __wbg_isIntersecting_6807d592d68e059e: Dr,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: en,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: c0,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: bn,
      __wbg_new_6f0524fbfa300c47: Yr,
      __wbg_port1_6251ddc5cf5c9287: hc,
      __wbg_port2_b2a294b0ede1e13c: Sc,
      __wbg_contentRect_79b98e4d4f4728a4: q_,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: zt,
      __wbg_disconnect_0a2d26237dfc1e9e: Ht,
      __wbg_new_8c6e67a40cee1f83: Jr,
      __wbg_observe_2a9d63459970a2c1: cc,
      __wbg_set_box_73d3355c6f95f24d: Ob,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: nb,
      __wbg_createObjectURL_918185db6a10a0c8: Y_,
      __wbg_addListener_03e8162d7e03c823: me,
      __wbg_removeListener_e2a199028636dcf5: jc,
      __wbg_media_7bcde781569bca4c: Vr,
      __wbg_matches_4b5c22bd830f7bb3: qr,
      __wbg_set_type_148de20768639245: df,
      __wbg_queryCounterEXT_b578f07c30420446: Tc,
      __wbg_log_6b5ca2e6124b2808: Cr,
      __wbg_info_148d043840582012: pr,
      __wbg_warn_f7ae1b2e66ccb930: g0,
      __wbg_debug_a4099fa12db6cd61: mt,
      __wbg_error_9a7fe3f932034cde: mn,
      __wbg_error_f852e41c69b0bd84: pn,
      __wbg_postMessage_46eeeef39934b448: vc,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: qa,
      __wbg_close_fad2f0ee451926ed: A_,
      __wbg_start_ffb4b426b1e661bd: kf,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: qe,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: ut,
      __wbg_deleteVertexArrayOES_197df47ef9684195: Lt,
      __wbg_userAgent_34463fd660ba4a2a: r0,
      __wbg_set_height_b386c0f603610637: pa,
      __wbg_getContext_2966500392030d63: qn,
      __wbg_getContext_de810d9f187f29ca: Wn,
      __wbg_set_width_7f07715a20503914: hf,
      __wbg_setProperty_cbb25c4e74285b39: wb,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: Kc,
      __wbg_getPropertyValue_d6911b2a1f9acba9: _r,
      __wbg_movementX_ff6524e06bc35b6a: Ur,
      __wbg_movementY_4cec81d9850ad239: jr,
      __wbg_button_d86841d0a03adc44: a_,
      __wbg_altKey_8155c319c215e3aa: xe,
      __wbg_buttons_a158a0cad3175f24: f_,
      __wbg_ctrlKey_96ff94f8b18636a3: st,
      __wbg_metaKey_374999c340f70626: Gr,
      __wbg_shiftKey_5558a3288542c985: Df,
      __wbg_pointerId_466b1bdcaf2fe835: mc,
      __wbg_pointerType_ba53c6f18634a26d: pc,
      __wbg_getCoalescedEvents_8d19e426e1461e96: On,
      __wbg_pressure_f01a99684f7a6cf3: Dc,
      __wbg_disconnect_5202f399852258c0: Jt,
      __wbg_observe_1ae37077cf10b11b: rc,
      __wbg_new_2e2be9617c4407d5: Nr,
      __wbg_observe_b9abc08d6d829e56: bc,
      __wbg_unobserve_b4eb8d945252124f: e0,
      __wbg_appendChild_dea38765a26d346d: he,
      __wbg_contains_1056459c33f961e8: R_,
      __wbg_new_b949e7f56150a5d1: Zr,
      __wbg_abort_2f0584e03e8e3950: ie,
      __wbg_signal_d1285ecab4ebc5ad: Mf,
      __wbg_width_7444cca5dfea0645: l0,
      __wbg_height_c2027cf67d1c9b11: lr,
      __wbg_blockSize_ef9a626745d7dfac: He,
      __wbg_inlineSize_3e4e7e8c813884fd: xr,
      __wbg_persisted_de98357e1aaf6546: gc,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: tc,
      __wbg_new_3eb36ae241fe6f44: Xr,
      __wbg_new_361308b2356cecd0: Qr,
      __wbg_new_no_args_1c7c842f08d00ebb: ec,
      __wbg_length_32ed9a279acd054c: kr,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: Fc,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: _c,
      __wbg_set_25cf9deff6bf0ea8: yb,
      __wbg_get_9b94d73e6221f75c: gr,
      __wbg_of_f915f7cd925b21a5: fc,
      __wbg_of_9ab14f9d4bfb5040: ac,
      __wbg_length_35a7bace40f36eac: Tr,
      __wbg_push_8ffdcb2063340ba5: kc,
      __wbg_includes_32215c836f1cd3fb: mr,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: Qn,
      __wbg_is_f29129f676e5410c: Pr,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: Ef,
      __wbg_call_389efe28435a9388: o_,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: Lf,
      __wbg_static_accessor_GLOBAL_12837167ad935116: Tf,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: Bf,
      __wbg_then_b9e7b3b5f1a9e1b5: mo,
      __wbg_catch_c1f8c7623b458214: g_,
      __wbg_then_0d9fe2c7b1857d32: lo,
      __wbg_resolve_002c4b7d9d8f6b64: tb,
      __wbg_set_6cb8631f80447a67: hb,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: fe,
      __wbg___wbindgen_throw_be289d5034ed271b: ue,
      __wbg___wbindgen_is_null_ac34f5003991759a: be,
      __wbg___wbindgen_string_get_72fb696202c56729: oe,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: ne,
      __wbg___wbindgen_is_function_0095a73b8b156f76: ce,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: ae,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: re,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: de,
      __wbindgen_cast_0000000000000001: m0,
      __wbindgen_cast_0000000000000002: p0,
      __wbindgen_cast_0000000000000003: x0,
      __wbindgen_cast_0000000000000004: y0,
      __wbindgen_cast_0000000000000005: h0,
      __wbindgen_cast_0000000000000006: S0,
      __wbindgen_cast_0000000000000007: v0,
      __wbindgen_cast_0000000000000008: I0,
      __wbindgen_cast_0000000000000009: A0,
      __wbindgen_cast_000000000000000a: D0,
      __wbindgen_cast_000000000000000b: P0,
      __wbindgen_cast_000000000000000c: M0,
      __wbindgen_cast_000000000000000d: F0,
      __wbindgen_cast_000000000000000e: k0,
      __wbindgen_cast_000000000000000f: T0,
      __wbindgen_cast_0000000000000010: E0,
      __wbindgen_cast_0000000000000011: L0,
      __wbindgen_cast_0000000000000012: B0,
      __wbindgen_cast_0000000000000013: C0
    }
  }, Z), gu = S.memory, su = S.main, wu = S.run_web, lu = S.__wasm_bindgen_func_elem_2957, mu = S.__wasm_bindgen_func_elem_1199, pu = S.__wasm_bindgen_func_elem_1537, xu = S.__wasm_bindgen_func_elem_2958, yu = S.__wasm_bindgen_func_elem_1535, hu = S.__wasm_bindgen_func_elem_1536, Su = S.__wbindgen_export, vu = S.__wbindgen_export2, Iu = S.__wbindgen_export3, Au = S.__wbindgen_export4, H = S.__wbindgen_start, Du = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_1199: mu,
    __wasm_bindgen_func_elem_1535: yu,
    __wasm_bindgen_func_elem_1536: hu,
    __wasm_bindgen_func_elem_1537: pu,
    __wasm_bindgen_func_elem_2957: lu,
    __wasm_bindgen_func_elem_2958: xu,
    __wbindgen_export: Su,
    __wbindgen_export2: vu,
    __wbindgen_export3: Iu,
    __wbindgen_export4: Au,
    __wbindgen_start: H,
    main: su,
    memory: gu,
    run_web: wu
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  iu(Du);
  H();
})();
export {
  __tla,
  Mu as run_web
};
