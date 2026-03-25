import { _ as N } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Sa, ya, ha;
let __tla = (async () => {
  const Q = "/learn-wgpu/assets/demo_bg-BNKArpYU.wasm";
  Sa = function() {
    const e = w.run_introduction();
    return V(e);
  };
  ya = function() {
    const e = w.run_sorting();
    return V(e);
  };
  ha = function() {
    w.setup_web();
  };
  function $(e) {
    const _ = n(e).Window;
    return c(_);
  }
  function z(e) {
    const _ = n(e).WorkerGlobalScope;
    return c(_);
  }
  function H(e) {
    const _ = n(e), t = typeof _ == "boolean" ? _ : void 0;
    return g(t) ? 16777215 : t ? 1 : 0;
  }
  function X(e, _) {
    const t = G(n(_)), r = D(t, w.__wbindgen_export, w.__wbindgen_export2), b = y;
    x().setInt32(e + 4, b, true), x().setInt32(e + 0, r, true);
  }
  function Y(e) {
    return typeof n(e) == "function";
  }
  function J(e) {
    return n(e) === null;
  }
  function K(e) {
    return n(e) === void 0;
  }
  function Z(e, _) {
    const t = n(_), r = typeof t == "number" ? t : void 0;
    x().setFloat64(e + 8, g(r) ? 0 : r, true), x().setInt32(e + 0, !g(r), true);
  }
  function ee(e, _) {
    const t = n(_), r = typeof t == "string" ? t : void 0;
    var b = g(r) ? 0 : D(r, w.__wbindgen_export, w.__wbindgen_export2), f = y;
    x().setInt32(e + 4, f, true), x().setInt32(e + 0, b, true);
  }
  function _e(e, _) {
    throw new Error(s(e, _));
  }
  function ne(e) {
    n(e)._wbg_cb_unref();
  }
  function te(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function re(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function be(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function fe(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function ae(e, _) {
    const t = n(e).beginComputePass(n(_));
    return c(t);
  }
  function ce(e, _, t) {
    n(e).beginQuery(_ >>> 0, n(t));
  }
  function ue(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, s(r, b));
  }
  function oe(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, s(r, b));
  }
  function ie(e, _, t, r, b, f) {
    n(e).bindBufferRange(_ >>> 0, t >>> 0, n(r), b, f);
  }
  function de(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function ge(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function we(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function se(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function le(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function me(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function xe(e, _, t) {
    n(e).bindSampler(_ >>> 0, n(t));
  }
  function pe(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function Se(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function ye(e, _) {
    n(e).bindVertexArrayOES(n(_));
  }
  function he(e, _) {
    n(e).bindVertexArray(n(_));
  }
  function Ie(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function De(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function ve(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function Ae(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function Pe(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function Me(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function Be(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Fe(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Te(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function Ee(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function Le(e, _, t, r, b, f, a, u, o, i, l) {
    n(e).blitFramebuffer(_, t, r, b, f, a, u, o, i >>> 0, l >>> 0);
  }
  function ke(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function Re(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function Oe(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function qe(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function We(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function Ge(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function Ve() {
    return d(function(e, _) {
      const t = n(e).call(n(_));
      return c(t);
    }, arguments);
  }
  function Ce() {
    return d(function(e, _, t) {
      const r = n(e).call(n(_), n(t));
      return c(r);
    }, arguments);
  }
  function Ue(e, _, t, r, b) {
    n(e).clearBufferfv(_ >>> 0, t, m(r, b));
  }
  function je(e, _, t, r, b) {
    n(e).clearBufferiv(_ >>> 0, t, I(r, b));
  }
  function Ne(e, _, t, r, b) {
    n(e).clearBufferuiv(_ >>> 0, t, A(r, b));
  }
  function Qe(e, _) {
    n(e).clearDepth(_);
  }
  function $e(e, _) {
    n(e).clearDepth(_);
  }
  function ze(e, _) {
    n(e).clearStencil(_);
  }
  function He(e, _) {
    n(e).clearStencil(_);
  }
  function Xe(e, _) {
    n(e).clear(_ >>> 0);
  }
  function Ye(e, _) {
    n(e).clear(_ >>> 0);
  }
  function Je(e, _, t, r) {
    return n(e).clientWaitSync(n(_), t >>> 0, r >>> 0);
  }
  function Ke(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function Ze(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function e_(e, _) {
    n(e).compileShader(n(_));
  }
  function __(e, _) {
    n(e).compileShader(n(_));
  }
  function n_(e, _, t, r, b, f, a, u, o) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, n(o));
  }
  function t_(e, _, t, r, b, f, a, u, o) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, n(o));
  }
  function r_(e, _, t, r, b, f, a, u, o, i) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o, i);
  }
  function b_(e, _, t, r, b, f, a, u, o, i, l) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, n(l));
  }
  function f_(e, _, t, r, b, f, a, u, o, i, l, p) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l, p);
  }
  function a_(e, _, t, r, b, f) {
    n(e).copyBufferSubData(_ >>> 0, t >>> 0, r, b, f);
  }
  function c_() {
    return d(function(e, _, t, r, b, f) {
      n(e).copyBufferToBuffer(n(_), t, n(r), b, f);
    }, arguments);
  }
  function u_() {
    return d(function(e, _, t, r, b) {
      n(e).copyBufferToBuffer(n(_), t, n(r), b);
    }, arguments);
  }
  function o_(e, _, t, r, b, f, a, u, o) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, f, a, u, o);
  }
  function i_(e, _, t, r, b, f, a, u, o) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, f, a, u, o);
  }
  function d_(e, _, t, r, b, f, a, u, o, i) {
    n(e).copyTexSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i);
  }
  function g_(e, _) {
    const t = n(e).createBindGroup(n(_));
    return c(t);
  }
  function w_(e) {
    const _ = n(e).createBuffer();
    return g(_) ? 0 : c(_);
  }
  function s_(e) {
    const _ = n(e).createBuffer();
    return g(_) ? 0 : c(_);
  }
  function l_() {
    return d(function(e, _) {
      const t = n(e).createBuffer(n(_));
      return c(t);
    }, arguments);
  }
  function m_(e, _) {
    const t = n(e).createCommandEncoder(n(_));
    return c(t);
  }
  function x_(e, _) {
    const t = n(e).createComputePipeline(n(_));
    return c(t);
  }
  function p_(e) {
    const _ = n(e).createFramebuffer();
    return g(_) ? 0 : c(_);
  }
  function S_(e) {
    const _ = n(e).createFramebuffer();
    return g(_) ? 0 : c(_);
  }
  function y_(e) {
    const _ = n(e).createProgram();
    return g(_) ? 0 : c(_);
  }
  function h_(e) {
    const _ = n(e).createProgram();
    return g(_) ? 0 : c(_);
  }
  function I_(e) {
    const _ = n(e).createQuery();
    return g(_) ? 0 : c(_);
  }
  function D_(e) {
    const _ = n(e).createRenderbuffer();
    return g(_) ? 0 : c(_);
  }
  function v_(e) {
    const _ = n(e).createRenderbuffer();
    return g(_) ? 0 : c(_);
  }
  function A_(e) {
    const _ = n(e).createSampler();
    return g(_) ? 0 : c(_);
  }
  function P_(e, _) {
    const t = n(e).createShaderModule(n(_));
    return c(t);
  }
  function M_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return g(t) ? 0 : c(t);
  }
  function B_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return g(t) ? 0 : c(t);
  }
  function F_(e) {
    const _ = n(e).createTexture();
    return g(_) ? 0 : c(_);
  }
  function T_(e) {
    const _ = n(e).createTexture();
    return g(_) ? 0 : c(_);
  }
  function E_(e) {
    const _ = n(e).createVertexArrayOES();
    return g(_) ? 0 : c(_);
  }
  function L_(e) {
    const _ = n(e).createVertexArray();
    return g(_) ? 0 : c(_);
  }
  function k_(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function R_(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function O_(e) {
    console.debug(n(e));
  }
  function q_(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function W_(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function G_(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function V_(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function C_(e, _) {
    n(e).deleteProgram(n(_));
  }
  function U_(e, _) {
    n(e).deleteProgram(n(_));
  }
  function j_(e, _) {
    n(e).deleteQuery(n(_));
  }
  function N_(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function Q_(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function $_(e, _) {
    n(e).deleteSampler(n(_));
  }
  function z_(e, _) {
    n(e).deleteShader(n(_));
  }
  function H_(e, _) {
    n(e).deleteShader(n(_));
  }
  function X_(e, _) {
    n(e).deleteSync(n(_));
  }
  function Y_(e, _) {
    n(e).deleteTexture(n(_));
  }
  function J_(e, _) {
    n(e).deleteTexture(n(_));
  }
  function K_(e, _) {
    n(e).deleteVertexArrayOES(n(_));
  }
  function Z_(e, _) {
    n(e).deleteVertexArray(n(_));
  }
  function en(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function _n(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function nn(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function tn(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function rn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function bn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function fn(e) {
    n(e).destroy();
  }
  function an(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function cn(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function un(e, _) {
    n(e).disable(_ >>> 0);
  }
  function on(e, _) {
    n(e).disable(_ >>> 0);
  }
  function dn(e, _, t, r) {
    n(e).dispatchWorkgroups(_ >>> 0, t >>> 0, r >>> 0);
  }
  function gn(e) {
    const _ = n(e).document;
    return g(_) ? 0 : c(_);
  }
  function wn(e, _, t, r, b) {
    n(e).drawArraysInstancedANGLE(_ >>> 0, t, r, b);
  }
  function sn(e, _, t, r, b) {
    n(e).drawArraysInstanced(_ >>> 0, t, r, b);
  }
  function ln(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function mn(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function xn(e, _) {
    n(e).drawBuffersWEBGL(n(_));
  }
  function pn(e, _) {
    n(e).drawBuffers(n(_));
  }
  function Sn(e, _, t, r, b, f) {
    n(e).drawElementsInstancedANGLE(_ >>> 0, t, r >>> 0, b, f);
  }
  function yn(e, _, t, r, b, f) {
    n(e).drawElementsInstanced(_ >>> 0, t, r >>> 0, b, f);
  }
  function hn(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function In(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function Dn(e, _) {
    n(e).enable(_ >>> 0);
  }
  function vn(e, _) {
    n(e).enable(_ >>> 0);
  }
  function An(e, _) {
    n(e).endQuery(_ >>> 0);
  }
  function Pn(e) {
    n(e).end();
  }
  function Mn(e, _) {
    let t, r;
    try {
      t = e, r = _, console.error(s(e, _));
    } finally {
      w.__wbindgen_export4(t, r, 1);
    }
  }
  function Bn(e) {
    console.error(n(e));
  }
  function Fn(e, _, t) {
    const r = n(e).fenceSync(_ >>> 0, t >>> 0);
    return g(r) ? 0 : c(r);
  }
  function Tn(e) {
    const _ = n(e).finish();
    return c(_);
  }
  function En(e, _) {
    const t = n(e).finish(n(_));
    return c(t);
  }
  function Ln(e) {
    n(e).flush();
  }
  function kn(e) {
    n(e).flush();
  }
  function Rn(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function On(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function qn(e, _, t, r, b, f) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), f);
  }
  function Wn(e, _, t, r, b, f) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), f);
  }
  function Gn(e, _, t, r, b, f) {
    n(e).framebufferTextureLayer(_ >>> 0, t >>> 0, n(r), b, f);
  }
  function Vn(e, _, t, r, b, f, a) {
    n(e).framebufferTextureMultiviewOVR(_ >>> 0, t >>> 0, n(r), b, f, a);
  }
  function Cn(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function Un(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function jn(e, _) {
    const t = n(e).getBindGroupLayout(_ >>> 0);
    return c(t);
  }
  function Nn(e, _, t, r) {
    n(e).getBufferSubData(_ >>> 0, t, n(r));
  }
  function Qn() {
    return d(function(e, _, t, r) {
      const b = n(e).getContext(s(_, t), n(r));
      return g(b) ? 0 : c(b);
    }, arguments);
  }
  function $n() {
    return d(function(e, _, t, r) {
      const b = n(e).getContext(s(_, t), n(r));
      return g(b) ? 0 : c(b);
    }, arguments);
  }
  function zn() {
    return d(function(e, _, t) {
      const r = n(e).getExtension(s(_, t));
      return g(r) ? 0 : c(r);
    }, arguments);
  }
  function Hn() {
    return d(function(e, _, t) {
      const r = n(e).getIndexedParameter(_ >>> 0, t >>> 0);
      return c(r);
    }, arguments);
  }
  function Xn() {
    return d(function(e, _, t) {
      const r = n(e).getMappedRange(_, t);
      return c(r);
    }, arguments);
  }
  function Yn() {
    return d(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return c(t);
    }, arguments);
  }
  function Jn() {
    return d(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return c(t);
    }, arguments);
  }
  function Kn(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = g(r) ? 0 : D(r, w.__wbindgen_export, w.__wbindgen_export2), f = y;
    x().setInt32(e + 4, f, true), x().setInt32(e + 0, b, true);
  }
  function Zn(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = g(r) ? 0 : D(r, w.__wbindgen_export, w.__wbindgen_export2), f = y;
    x().setInt32(e + 4, f, true), x().setInt32(e + 0, b, true);
  }
  function et(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return c(r);
  }
  function _t(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return c(r);
  }
  function nt(e, _, t) {
    const r = n(e).getQueryParameter(n(_), t >>> 0);
    return c(r);
  }
  function tt(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = g(r) ? 0 : D(r, w.__wbindgen_export, w.__wbindgen_export2), f = y;
    x().setInt32(e + 4, f, true), x().setInt32(e + 0, b, true);
  }
  function rt(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = g(r) ? 0 : D(r, w.__wbindgen_export, w.__wbindgen_export2), f = y;
    x().setInt32(e + 4, f, true), x().setInt32(e + 0, b, true);
  }
  function bt(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return c(r);
  }
  function ft(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return c(r);
  }
  function at(e) {
    const _ = n(e).getSupportedExtensions();
    return g(_) ? 0 : c(_);
  }
  function ct(e) {
    const _ = n(e).getSupportedProfiles();
    return g(_) ? 0 : c(_);
  }
  function ut(e, _, t) {
    const r = n(e).getSyncParameter(n(_), t >>> 0);
    return c(r);
  }
  function ot(e, _, t, r) {
    return n(e).getUniformBlockIndex(n(_), s(t, r));
  }
  function it(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), s(t, r));
    return g(b) ? 0 : c(b);
  }
  function dt(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), s(t, r));
    return g(b) ? 0 : c(b);
  }
  function gt(e, _) {
    const t = n(e)[_ >>> 0];
    return c(t);
  }
  function wt(e) {
    const _ = n(e).gpu;
    return c(_);
  }
  function st(e, _, t) {
    return n(e).includes(n(_), t);
  }
  function lt(e) {
    console.info(n(e));
  }
  function mt(e) {
    let _;
    try {
      _ = n(e) instanceof GPUAdapter;
    } catch {
      _ = false;
    }
    return _;
  }
  function xt(e) {
    let _;
    try {
      _ = n(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function pt(e) {
    let _;
    try {
      _ = n(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function St(e) {
    let _;
    try {
      _ = n(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function yt() {
    return d(function(e, _, t) {
      n(e).invalidateFramebuffer(_ >>> 0, n(t));
    }, arguments);
  }
  function ht(e, _) {
    return Object.is(n(e), n(_));
  }
  function It(e, _) {
    const t = n(_).label, r = D(t, w.__wbindgen_export, w.__wbindgen_export2), b = y;
    x().setInt32(e + 4, b, true), x().setInt32(e + 0, r, true);
  }
  function Dt(e) {
    return n(e).length;
  }
  function vt(e) {
    return n(e).length;
  }
  function At(e, _) {
    n(e).linkProgram(n(_));
  }
  function Pt(e, _) {
    n(e).linkProgram(n(_));
  }
  function Mt(e) {
    console.log(n(e));
  }
  function Bt(e, _, t, r) {
    const b = n(e).mapAsync(_ >>> 0, t, r);
    return c(b);
  }
  function Ft(e) {
    const _ = n(e).navigator;
    return c(_);
  }
  function Tt(e) {
    const _ = n(e).navigator;
    return c(_);
  }
  function Et() {
    const e = new Object();
    return c(e);
  }
  function Lt() {
    const e = new Array();
    return c(e);
  }
  function kt() {
    const e = new Error();
    return c(e);
  }
  function Rt(e, _) {
    try {
      var t = {
        a: e,
        b: _
      }, r = (f, a) => {
        const u = t.a;
        t.a = 0;
        try {
          return Nf(u, t.b, f, a);
        } finally {
          t.a = u;
        }
      };
      const b = new Promise(r);
      return c(b);
    } finally {
      t.a = t.b = 0;
    }
  }
  function Ot(e, _) {
    const t = new Function(s(e, _));
    return c(t);
  }
  function qt(e, _, t) {
    const r = new Uint8Array(n(e), _ >>> 0, t >>> 0);
    return c(r);
  }
  function Wt(e) {
    const _ = Array.of(n(e));
    return c(_);
  }
  function Gt(e) {
    const _ = n(e).onSubmittedWorkDone();
    return c(_);
  }
  function Vt(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function Ct(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function Ut(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function jt(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function Nt(e, _, t) {
    Uint8Array.prototype.set.call(U(e, _), n(t));
  }
  function Qt(e, _) {
    return n(e).push(n(_));
  }
  function $t(e, _, t) {
    n(e).queryCounterEXT(n(_), t >>> 0);
  }
  function zt() {
    return d(function(e, _, t) {
      const r = n(e).querySelector(s(_, t));
      return g(r) ? 0 : c(r);
    }, arguments);
  }
  function Ht(e) {
    const _ = n(e).queueMicrotask;
    return c(_);
  }
  function Xt(e) {
    queueMicrotask(n(e));
  }
  function Yt(e) {
    const _ = n(e).queue;
    return c(_);
  }
  function Jt(e, _) {
    n(e).readBuffer(_ >>> 0);
  }
  function Kt() {
    return d(function(e, _, t, r, b, f, a, u) {
      n(e).readPixels(_, t, r, b, f >>> 0, a >>> 0, n(u));
    }, arguments);
  }
  function Zt() {
    return d(function(e, _, t, r, b, f, a, u) {
      n(e).readPixels(_, t, r, b, f >>> 0, a >>> 0, u);
    }, arguments);
  }
  function er() {
    return d(function(e, _, t, r, b, f, a, u) {
      n(e).readPixels(_, t, r, b, f >>> 0, a >>> 0, n(u));
    }, arguments);
  }
  function _r(e, _, t, r, b, f) {
    n(e).renderbufferStorageMultisample(_ >>> 0, t, r >>> 0, b, f);
  }
  function nr(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function tr(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function rr(e, _) {
    const t = n(e).requestAdapter(n(_));
    return c(t);
  }
  function br(e, _) {
    const t = n(e).requestDevice(n(_));
    return c(t);
  }
  function fr(e) {
    const _ = Promise.resolve(n(e));
    return c(_);
  }
  function ar(e, _, t, r) {
    n(e).samplerParameterf(n(_), t >>> 0, r);
  }
  function cr(e, _, t, r) {
    n(e).samplerParameteri(n(_), t >>> 0, r);
  }
  function ur(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function or(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function ir() {
    return d(function(e, _, t, r, b, f, a) {
      n(e).setBindGroup(_ >>> 0, n(t), A(r, b), f, a >>> 0);
    }, arguments);
  }
  function dr(e, _, t) {
    n(e).setBindGroup(_ >>> 0, n(t));
  }
  function gr(e, _) {
    n(e).setPipeline(n(_));
  }
  function wr(e, _, t) {
    n(e).set(n(_), t >>> 0);
  }
  function sr() {
    return d(function(e, _, t) {
      return Reflect.set(n(e), n(_), n(t));
    }, arguments);
  }
  function lr(e, _) {
    n(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function mr(e, _) {
    n(e).binding = _ >>> 0;
  }
  function xr(e, _) {
    n(e).buffer = n(_);
  }
  function pr(e, _, t) {
    n(e).code = s(_, t);
  }
  function Sr(e, _) {
    n(e).compute = n(_);
  }
  function yr(e, _) {
    n(e).endOfPassWriteIndex = _ >>> 0;
  }
  function hr(e, _) {
    n(e).entries = n(_);
  }
  function Ir(e, _, t) {
    n(e).entryPoint = s(_, t);
  }
  function Dr(e, _) {
    n(e).height = _ >>> 0;
  }
  function vr(e, _) {
    n(e).height = _ >>> 0;
  }
  function Ar(e, _, t) {
    n(e).label = s(_, t);
  }
  function Pr(e, _, t) {
    n(e).label = s(_, t);
  }
  function Mr(e, _, t) {
    n(e).label = s(_, t);
  }
  function Br(e, _, t) {
    n(e).label = s(_, t);
  }
  function Fr(e, _, t) {
    n(e).label = s(_, t);
  }
  function Tr(e, _, t) {
    n(e).label = s(_, t);
  }
  function Er(e, _, t) {
    n(e).label = s(_, t);
  }
  function Lr(e, _, t) {
    n(e).label = s(_, t);
  }
  function kr(e, _) {
    n(e).layout = n(_);
  }
  function Rr(e, _) {
    n(e).layout = n(_);
  }
  function Or(e, _) {
    n(e).mappedAtCreation = _ !== 0;
  }
  function qr(e, _) {
    n(e).module = n(_);
  }
  function Wr(e, _) {
    n(e).offset = _;
  }
  function Gr(e, _) {
    n(e).powerPreference = Qf[_];
  }
  function Vr(e, _) {
    n(e).querySet = n(_);
  }
  function Cr(e, _) {
    n(e).requiredFeatures = n(_);
  }
  function Ur(e, _) {
    n(e).requiredLimits = n(_);
  }
  function jr(e, _) {
    n(e).resource = n(_);
  }
  function Nr(e, _) {
    n(e).size = _;
  }
  function Qr(e, _) {
    n(e).size = _;
  }
  function $r(e, _) {
    n(e).timestampWrites = n(_);
  }
  function zr(e, _) {
    n(e).usage = _ >>> 0;
  }
  function Hr(e, _) {
    n(e).width = _ >>> 0;
  }
  function Xr(e, _) {
    n(e).width = _ >>> 0;
  }
  function Yr(e, _, t, r) {
    n(e).shaderSource(n(_), s(t, r));
  }
  function Jr(e, _, t, r) {
    n(e).shaderSource(n(_), s(t, r));
  }
  function Kr(e, _) {
    const t = n(_).stack, r = D(t, w.__wbindgen_export, w.__wbindgen_export2), b = y;
    x().setInt32(e + 4, b, true), x().setInt32(e + 0, r, true);
  }
  function Zr() {
    const e = typeof global > "u" ? null : global;
    return g(e) ? 0 : c(e);
  }
  function eb() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return g(e) ? 0 : c(e);
  }
  function _b() {
    const e = typeof self > "u" ? null : self;
    return g(e) ? 0 : c(e);
  }
  function nb() {
    const e = typeof window > "u" ? null : window;
    return g(e) ? 0 : c(e);
  }
  function tb(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function rb(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function bb(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function fb(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function ab(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function cb(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function ub(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function ob(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function ib(e, _) {
    n(e).submit(n(_));
  }
  function db() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function gb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, i);
    }, arguments);
  }
  function wb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function sb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l) {
      n(e).texImage3D(_ >>> 0, t, r, b, f, a, u, o >>> 0, i >>> 0, l);
    }, arguments);
  }
  function lb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l) {
      n(e).texImage3D(_ >>> 0, t, r, b, f, a, u, o >>> 0, i >>> 0, n(l));
    }, arguments);
  }
  function mb(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function xb(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function pb(e, _, t, r, b, f) {
    n(e).texStorage2D(_ >>> 0, t, r >>> 0, b, f);
  }
  function Sb(e, _, t, r, b, f, a) {
    n(e).texStorage3D(_ >>> 0, t, r >>> 0, b, f, a);
  }
  function yb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function hb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function Ib() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function Db() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function vb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function Ab() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function Pb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, n(i));
    }, arguments);
  }
  function Mb() {
    return d(function(e, _, t, r, b, f, a, u, o, i) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, f, a, u >>> 0, o >>> 0, i);
    }, arguments);
  }
  function Bb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function Fb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function Tb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function Eb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function Lb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function kb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, p);
    }, arguments);
  }
  function Rb() {
    return d(function(e, _, t, r, b, f, a, u, o, i, l, p) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, f, a, u, o, i >>> 0, l >>> 0, n(p));
    }, arguments);
  }
  function Ob(e, _, t) {
    const r = n(e).then(n(_), n(t));
    return c(r);
  }
  function qb(e, _) {
    const t = n(e).then(n(_));
    return c(t);
  }
  function Wb(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function Gb(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function Vb(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function Cb(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function Ub(e, _, t) {
    n(e).uniform1ui(n(_), t >>> 0);
  }
  function jb(e, _, t, r) {
    n(e).uniform2fv(n(_), m(t, r));
  }
  function Nb(e, _, t, r) {
    n(e).uniform2fv(n(_), m(t, r));
  }
  function Qb(e, _, t, r) {
    n(e).uniform2iv(n(_), I(t, r));
  }
  function $b(e, _, t, r) {
    n(e).uniform2iv(n(_), I(t, r));
  }
  function zb(e, _, t, r) {
    n(e).uniform2uiv(n(_), A(t, r));
  }
  function Hb(e, _, t, r) {
    n(e).uniform3fv(n(_), m(t, r));
  }
  function Xb(e, _, t, r) {
    n(e).uniform3fv(n(_), m(t, r));
  }
  function Yb(e, _, t, r) {
    n(e).uniform3iv(n(_), I(t, r));
  }
  function Jb(e, _, t, r) {
    n(e).uniform3iv(n(_), I(t, r));
  }
  function Kb(e, _, t, r) {
    n(e).uniform3uiv(n(_), A(t, r));
  }
  function Zb(e, _, t, r, b, f) {
    n(e).uniform4f(n(_), t, r, b, f);
  }
  function ef(e, _, t, r, b, f) {
    n(e).uniform4f(n(_), t, r, b, f);
  }
  function _f(e, _, t, r) {
    n(e).uniform4fv(n(_), m(t, r));
  }
  function nf(e, _, t, r) {
    n(e).uniform4fv(n(_), m(t, r));
  }
  function tf(e, _, t, r) {
    n(e).uniform4iv(n(_), I(t, r));
  }
  function rf(e, _, t, r) {
    n(e).uniform4iv(n(_), I(t, r));
  }
  function bf(e, _, t, r) {
    n(e).uniform4uiv(n(_), A(t, r));
  }
  function ff(e, _, t, r) {
    n(e).uniformBlockBinding(n(_), t >>> 0, r >>> 0);
  }
  function af(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, m(r, b));
  }
  function cf(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, m(r, b));
  }
  function uf(e, _, t, r, b) {
    n(e).uniformMatrix2x3fv(n(_), t !== 0, m(r, b));
  }
  function of(e, _, t, r, b) {
    n(e).uniformMatrix2x4fv(n(_), t !== 0, m(r, b));
  }
  function df(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, m(r, b));
  }
  function gf(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, m(r, b));
  }
  function wf(e, _, t, r, b) {
    n(e).uniformMatrix3x2fv(n(_), t !== 0, m(r, b));
  }
  function sf(e, _, t, r, b) {
    n(e).uniformMatrix3x4fv(n(_), t !== 0, m(r, b));
  }
  function lf(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, m(r, b));
  }
  function mf(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, m(r, b));
  }
  function xf(e, _, t, r, b) {
    n(e).uniformMatrix4x2fv(n(_), t !== 0, m(r, b));
  }
  function pf(e, _, t, r, b) {
    n(e).uniformMatrix4x3fv(n(_), t !== 0, m(r, b));
  }
  function Sf(e) {
    n(e).unmap();
  }
  function yf(e, _) {
    n(e).useProgram(n(_));
  }
  function hf(e, _) {
    n(e).useProgram(n(_));
  }
  function If(e, _, t) {
    n(e).vertexAttribDivisorANGLE(_ >>> 0, t >>> 0);
  }
  function Df(e, _, t) {
    n(e).vertexAttribDivisor(_ >>> 0, t >>> 0);
  }
  function vf(e, _, t, r, b, f) {
    n(e).vertexAttribIPointer(_ >>> 0, t, r >>> 0, b, f);
  }
  function Af(e, _, t, r, b, f, a) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, f, a);
  }
  function Pf(e, _, t, r, b, f, a) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, f, a);
  }
  function Mf(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Bf(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Ff(e) {
    console.warn(n(e));
  }
  function Tf(e, _) {
    const t = na(e, _, w.__wasm_bindgen_func_elem_2441, jf);
    return c(t);
  }
  function Ef(e) {
    return c(e);
  }
  function Lf(e, _) {
    const t = m(e, _);
    return c(t);
  }
  function kf(e, _) {
    const t = zf(e, _);
    return c(t);
  }
  function Rf(e, _) {
    const t = I(e, _);
    return c(t);
  }
  function Of(e, _) {
    const t = Hf(e, _);
    return c(t);
  }
  function qf(e, _) {
    const t = Xf(e, _);
    return c(t);
  }
  function Wf(e, _) {
    const t = A(e, _);
    return c(t);
  }
  function Gf(e, _) {
    const t = U(e, _);
    return c(t);
  }
  function Vf(e, _) {
    const t = s(e, _);
    return c(t);
  }
  function Cf(e) {
    const _ = n(e);
    return c(_);
  }
  function Uf(e) {
    V(e);
  }
  function jf(e, _, t) {
    w.__wasm_bindgen_func_elem_2442(e, _, c(t));
  }
  function Nf(e, _, t, r) {
    w.__wasm_bindgen_func_elem_8286(e, _, c(t), c(r));
  }
  const Qf = [
    "low-power",
    "high-performance"
  ];
  function c(e) {
    M === h.length && h.push(h.length + 1);
    const _ = M;
    return M = h[_], h[_] = e, _;
  }
  const C = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => e.dtor(e.a, e.b));
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
      let f = "[";
      b > 0 && (f += G(e[0]));
      for (let a = 1; a < b; a++) f += ", " + G(e[a]);
      return f += "]", f;
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
  function $f(e) {
    e < 132 || (h[e] = M, M = e);
  }
  function m(e, _) {
    return e = e >>> 0, Yf().subarray(e / 4, e / 4 + _);
  }
  function zf(e, _) {
    return e = e >>> 0, Jf().subarray(e / 2, e / 2 + _);
  }
  function I(e, _) {
    return e = e >>> 0, Kf().subarray(e / 4, e / 4 + _);
  }
  function Hf(e, _) {
    return e = e >>> 0, Zf().subarray(e / 1, e / 1 + _);
  }
  function Xf(e, _) {
    return e = e >>> 0, ea().subarray(e / 2, e / 2 + _);
  }
  function A(e, _) {
    return e = e >>> 0, _a().subarray(e / 4, e / 4 + _);
  }
  function U(e, _) {
    return e = e >>> 0, P().subarray(e / 1, e / 1 + _);
  }
  let v = null;
  function x() {
    return (v === null || v.buffer.detached === true || v.buffer.detached === void 0 && v.buffer !== w.memory.buffer) && (v = new DataView(w.memory.buffer)), v;
  }
  let F = null;
  function Yf() {
    return (F === null || F.byteLength === 0) && (F = new Float32Array(w.memory.buffer)), F;
  }
  let T = null;
  function Jf() {
    return (T === null || T.byteLength === 0) && (T = new Int16Array(w.memory.buffer)), T;
  }
  let E = null;
  function Kf() {
    return (E === null || E.byteLength === 0) && (E = new Int32Array(w.memory.buffer)), E;
  }
  let L = null;
  function Zf() {
    return (L === null || L.byteLength === 0) && (L = new Int8Array(w.memory.buffer)), L;
  }
  function s(e, _) {
    return e = e >>> 0, ra(e, _);
  }
  let k = null;
  function ea() {
    return (k === null || k.byteLength === 0) && (k = new Uint16Array(w.memory.buffer)), k;
  }
  let R = null;
  function _a() {
    return (R === null || R.byteLength === 0) && (R = new Uint32Array(w.memory.buffer)), R;
  }
  let O = null;
  function P() {
    return (O === null || O.byteLength === 0) && (O = new Uint8Array(w.memory.buffer)), O;
  }
  function n(e) {
    return h[e];
  }
  function d(e, _) {
    try {
      return e.apply(this, _);
    } catch (t) {
      w.__wbindgen_export3(c(t));
    }
  }
  let h = new Array(128).fill(void 0);
  h.push(void 0, null, true, false);
  let M = h.length;
  function g(e) {
    return e == null;
  }
  function na(e, _, t, r) {
    const b = {
      a: e,
      b: _,
      cnt: 1,
      dtor: t
    }, f = (...a) => {
      b.cnt++;
      const u = b.a;
      b.a = 0;
      try {
        return r(u, b.b, ...a);
      } finally {
        b.a = u, f._wbg_cb_unref();
      }
    };
    return f._wbg_cb_unref = () => {
      --b.cnt === 0 && (b.dtor(b.a, b.b), b.a = 0, C.unregister(b));
    }, C.register(f, b, b), f;
  }
  function D(e, _, t) {
    if (t === void 0) {
      const u = B.encode(e), o = _(u.length, 1) >>> 0;
      return P().subarray(o, o + u.length).set(u), y = u.length, o;
    }
    let r = e.length, b = _(r, 1) >>> 0;
    const f = P();
    let a = 0;
    for (; a < r; a++) {
      const u = e.charCodeAt(a);
      if (u > 127) break;
      f[b + a] = u;
    }
    if (a !== r) {
      a !== 0 && (e = e.slice(a)), b = t(b, r, r = a + e.length * 3, 1) >>> 0;
      const u = P().subarray(b + a, b + r), o = B.encodeInto(e, u);
      a += o.written, b = t(b, r, a, 1) >>> 0;
    }
    return y = a, b;
  }
  function V(e) {
    const _ = n(e);
    return $f(e), _;
  }
  let q = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  q.decode();
  const ta = 2146435072;
  let W = 0;
  function ra(e, _) {
    return W += _, W >= ta && (q = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), q.decode(), W = _), q.decode(P().subarray(e, e + _));
  }
  const B = new TextEncoder();
  "encodeInto" in B || (B.encodeInto = function(e, _) {
    const t = B.encode(e);
    return _.set(t), {
      read: e.length,
      written: t.length
    };
  });
  let y = 0, w;
  function ba(e) {
    w = e;
  }
  URL = globalThis.URL;
  const S = await N({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: Uf,
      __wbg_new_8a6f238a6ece86ea: kt,
      __wbg_stack_0ed75d68575b0f3c: Kr,
      __wbg_error_7534b8e9a36f1ab4: Mn,
      __wbg_set_label_09e0ae7a91a1691d: Ar,
      __wbg_set_query_set_85f19025cae97571: Vr,
      __wbg_set_beginning_of_pass_write_index_ebeb7a26461d13db: lr,
      __wbg_set_end_of_pass_write_index_7064dc519798e433: yr,
      __wbg_set_timestamp_writes_29676152e8effe87: $r,
      __wbg_beginComputePass_6e94537c59d13b82: ae,
      __wbg_copyBufferToBuffer_7181ca0f3e72e9d2: c_,
      __wbg_copyBufferToBuffer_e84529de8dadf7b7: u_,
      __wbg_label_37d2cc4e867fe710: It,
      __wbg_set_label_5871c6a4116d78e4: Fr,
      __wbg_finish_cafc9caa4b3df56c: En,
      __wbg_finish_42f37cad38abaf27: Tn,
      __wbg_setPipeline_089f549251888aa1: gr,
      __wbg_setBindGroup_54856bf9b113a81b: ir,
      __wbg_setBindGroup_c3b04f2f9843b9bc: dr,
      __wbg_dispatchWorkgroups_6e3eba5e3eb2b0c4: dn,
      __wbg_getBindGroupLayout_a0a5c7a52164fef1: jn,
      __wbindgen_object_clone_ref: Cf,
      __wbg_Window_89f1205e6b84c5cf: $,
      __wbg_gpu_97c682b8bbd6da29: wt,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: z,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: Gt,
      __wbg_submit_5f96af711b83c2df: ib,
      __wbg_getMappedRange_9a20d37843bbc5dd: Xn,
      __wbg_unmap_80761f81f18ec521: Sf,
      __wbg_destroy_834dd203329bdb3c: fn,
      __wbg_mapAsync_c9718fcf0566073c: Bt,
      __wbg_set_size_61d185241554da71: Qr,
      __wbg_set_usage_063311abcbeb0c9f: zr,
      __wbg_set_mapped_at_creation_0d65690c0978994b: Or,
      __wbg_set_label_d7cc9fef79f6607e: Tr,
      __wbg_createBuffer_e488cd40ceda9067: l_,
      __wbg_set_entries_2cd3545ee493b9d8: hr,
      __wbg_set_layout_5bb0e3710064d78b: Rr,
      __wbg_set_label_1eb936d3881c4a73: Pr,
      __wbg_createBindGroup_0916ed8027ba2c5a: g_,
      __wbg_set_code_d96e8bd591fe4d27: pr,
      __wbg_set_label_4592679c60c3ae0e: Mr,
      __wbg_createShaderModule_2b4d1147549bca28: P_,
      __wbg_set_label_4f94deb040009907: Br,
      __wbg_createCommandEncoder_e817b588d596b7d6: m_,
      __wbg_set_module_eba0198658406841: qr,
      __wbg_set_entry_point_999ecdf6a457ca37: Ir,
      __wbg_set_layout_1899f55b8dd25754: kr,
      __wbg_set_compute_05ff000946e445ff: Sr,
      __wbg_set_label_dc573a7d0ea01fc3: Er,
      __wbg_createComputePipeline_4c01f547bfe2068f: x_,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Ur,
      __wbg_set_required_features_505229173e5ae00f: Cr,
      __wbg_set_label_fcbb40adcedf7a3a: Lr,
      __wbg_requestDevice_acf949c0a7d11096: br,
      __wbg_end_336deb1484c140a6: Pn,
      __wbg_set_power_preference_ad90ccb2239fef97: Gr,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: rr,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: mt,
      __wbg_queue_19586e9507f5e981: Yt,
      __wbg_set_binding_b9f5989194044799: mr,
      __wbg_set_resource_e981078f9ddeee64: jr,
      __wbg_set_buffer_9e1ebf8ed6567298: xr,
      __wbg_set_offset_99d8916143968ec7: Wr,
      __wbg_set_size_4a5f3caa1cb0f6ec: Nr,
      __wbg_queueMicrotask_5bb536982f78a56f: Xt,
      __wbg_queueMicrotask_0aa0a927f78f5d98: Ht,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: pt,
      __wbg_blendFunc_2ef59299d10c662d: Te,
      __wbg_colorMask_177d9762658e5e28: Ke,
      __wbg_depthFunc_f670d4cbb9cd0913: _n,
      __wbg_depthMask_75a36d0065471a4b: tn,
      __wbg_fenceSync_c52a4e24eabfa0d3: Fn,
      __wbg_frontFace_d4a6507ad2939b5c: Un,
      __wbg_uniform1ui_a0f911ff174715d0: Ub,
      __wbg_beginQuery_0fdf154e1da0e73d: ce,
      __wbg_bindBuffer_c9068e8712a034f5: ge,
      __wbg_blendColor_e799d452ab2a5788: De,
      __wbg_clearDepth_670099db422a4f91: $e,
      __wbg_deleteSync_c8e4a9c735f71d18: X_,
      __wbg_depthRange_337bf254e67639bb: rn,
      __wbg_drawArrays_075228181299b824: ln,
      __wbg_readBuffer_9eb461d6857295f0: Jt,
      __wbg_useProgram_fe720ade4d3b6edb: hf,
      __wbg_bindSampler_96f0e90e7bc31da9: xe,
      __wbg_bindTexture_b2b7b1726a83f93e: pe,
      __wbg_createQuery_7988050efd7e4c48: I_,
      __wbg_deleteQuery_ea8bf1954febd774: j_,
      __wbg_drawBuffers_5eccfaacc6560299: pn,
      __wbg_linkProgram_6600dd2c0863bbfd: At,
      __wbg_pixelStorei_2a65936c11b710fe: Vt,
      __wbg_stencilMask_732dcc5aada10e4c: cb,
      __wbg_attachShader_b36058e5c9eeaf54: fe,
      __wbg_clearStencil_5d243d0dff03c315: ze,
      __wbg_createBuffer_26534c05e01b8559: w_,
      __wbg_createShader_e3ac08ed8c5b14b2: M_,
      __wbg_deleteBuffer_ab099883c168644d: W_,
      __wbg_deleteShader_aaf3b520a64d5d9d: z_,
      __wbg_getExtension_3c0cb5ae01bb4b17: zn,
      __wbg_getParameter_2e1f97ecaab76274: Jn,
      __wbg_shaderSource_32425cfe6e5a1e52: Yr,
      __wbg_activeTexture_6f9a710514686c24: te,
      __wbg_blendEquation_e9b99928ed1494ad: Me,
      __wbg_compileShader_94718a93495d565d: __,
      __wbg_createProgram_9b7710a1f2701c2c: h_,
      __wbg_createSampler_da6bb96c9ffaaa27: A_,
      __wbg_createTexture_16d2c8a3d7d4a75a: F_,
      __wbg_deleteProgram_9298fb3e3c1d3a78: C_,
      __wbg_deleteSampler_c6b68c4071841afa: $_,
      __wbg_deleteTexture_9d411c0e60ffa324: J_,
      __wbg_polygonOffset_4b3158d8ed028862: jt,
      __wbg_texParameteri_0d45be2c88d6bad8: mb,
      __wbg_texStorage2D_9504743abf5a986a: pb,
      __wbg_texStorage3D_e9e1b58fee218abe: Sb,
      __wbg_bindFramebuffer_031c73ba501cb8f6: we,
      __wbg_blitFramebuffer_d730a23ab4db248e: Le,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: le,
      __wbg_bindVertexArray_78220d1edb1d2382: he,
      __wbg_createFramebuffer_41512c38358a41c4: p_,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: V_,
      __wbg_getSyncParameter_7d11ab875b41617e: ut,
      __wbg_samplerParameterf_f070d2b69b1e2d46: ar,
      __wbg_samplerParameteri_8e4c4bcead0ee669: cr,
      __wbg_blendFuncSeparate_95465944f788a092: Be,
      __wbg_createRenderbuffer_a601226a6a680dbe: v_,
      __wbg_createVertexArray_ad5294951ae57497: L_,
      __wbg_deleteRenderbuffer_096edada57729468: N_,
      __wbg_deleteVertexArray_7bc7f92769862f93: Z_,
      __wbg_getQueryParameter_5d6af051438ae479: nt,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: rt,
      __wbg_stencilOpSeparate_4657523b1d3b184f: ub,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: oe,
      __wbg_bufferData_32d26eba0c74a53c: Re,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: Kn,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: ft,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: dt,
      __wbg_readPixels_6ea8e288a8673282: Zt,
      __wbg_renderbufferStorage_1bc02383614b76b2: nr,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: i_,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: d_,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: sn,
      __wbg_getIndexedParameter_ca1693c768bc4934: Hn,
      __wbg_getProgramParameter_92e4540ca9da06b2: _t,
      __wbg_stencilFuncSeparate_10d043d0af14366f: tb,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: bb,
      __wbg_texImage3D_2082006a8a9b28a7: sb,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: ff,
      __wbg_vertexAttribDivisor_744c0ca468594894: Df,
      __wbg_framebufferTexture2D_c283e928186aa542: Wn,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: yt,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: Ae,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: ot,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: Rn,
      __wbg_getSupportedExtensions_57142a6b598d7787: at,
      __wbg_clientWaitSync_21865feaeb76a9a5: Je,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: Gn,
      __wbg_texSubImage3D_59b8e24fb05787aa: kb,
      __wbg_uniform2fv_2fb47cfe06330cc7: Nb,
      __wbg_uniform2iv_095baf208f172131: Qb,
      __wbg_uniform3fv_c0872003729939a5: Xb,
      __wbg_uniform3iv_6aa2b0791e659d14: Yb,
      __wbg_uniform4fv_498bd80dc5aa16ff: _f,
      __wbg_uniform4iv_8a8219fda39dffd5: rf,
      __wbg_enableVertexAttribArray_475e06c31777296d: hn,
      __wbg_uniform2uiv_3030d7e769f5e82a: zb,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: Kb,
      __wbg_uniform4uiv_046ee400bb80547d: bf,
      __wbg_disableVertexAttribArray_24a020060006b10f: an,
      __wbg_clearBufferfv_ac87d92e2f45d80c: Ue,
      __wbg_clearBufferiv_69ff24bb52ec4c88: je,
      __wbg_clearBufferuiv_8ad59a8219aafaca: Ne,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: Af,
      __wbg_drawElementsInstanced_d41fc920ae24717c: yn,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: _r,
      __wbg_texSubImage3D_45591e5655d1ed5c: Eb,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: af,
      __wbg_uniformMatrix3fv_6f822361173d8046: df,
      __wbg_uniformMatrix4fv_0e724dbebd372526: lf,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: vf,
      __wbg_bindBufferRange_009d206fe9e4151e: ie,
      __wbg_bufferData_98f6c413a8f0f139: qe,
      __wbg_texSubImage3D_3b653017c4c5d721: Tb,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: uf,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: of,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: wf,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: sf,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: xf,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: pf,
      __wbg_readPixels_55b18304384e073d: Kt,
      __wbg_texImage3D_bd2b0bd2cfcdb278: lb,
      __wbg_texSubImage3D_47643556a8a4bf86: Lb,
      __wbg_texSubImage3D_18d7f3c65567c885: Fb,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: Rb,
      __wbg_texSubImage3D_1102c12a20bf56d5: Bb,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: r_,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: f_,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: a_,
      __wbg_bufferSubData_3e902f031adf13fd: Ge,
      __wbg_compressedTexSubImage2D_684350eb62830032: t_,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: b_,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Nn,
      __wbg_texSubImage2D_edf5bd70fda3feaf: Mb,
      __wbg_clear_7187030f892c5ca0: Ye,
      __wbg_flush_e322496f5412e567: kn,
      __wbg_texImage2D_13414a4692836804: gb,
      __wbg_texSubImage2D_bf72e56edeeed376: vb,
      __wbg_texSubImage2D_e193f1d28439217c: Pb,
      __wbg_enable_d1ac04dfdd2fb3ae: Dn,
      __wbg_texSubImage2D_117d29278542feb0: yb,
      __wbg_texSubImage2D_bd034db2e58c352c: Db,
      __wbg_texSubImage2D_5d270af600a7fc4a: Ib,
      __wbg_texSubImage2D_d17a39cdec4a3495: Ab,
      __wbg_disable_7fe6fb3e97717f88: un,
      __wbg_scissor_2ff8f18f05a6d408: ur,
      __wbg_texImage2D_087ef94df78081f0: db,
      __wbg_viewport_df236eac68bc7467: Bf,
      __wbg_cullFace_e7e711a14d2c3f48: R_,
      __wbg_endQuery_54f0627d4c931318: An,
      __wbg_uniform1f_b500ede5b612bea2: Wb,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: Cb,
      __wbg_uniform4f_f6b5e2024636033a: ef,
      __wbg_instanceof_Window_ed49b2db8df90359: St,
      __wbg_document_ee35a3d3ae34ef6c: gn,
      __wbg_navigator_43be698ba96fc088: Ft,
      __wbg_querySelector_c3b0df2d58eec220: zt,
      __wbg_navigator_4478931f32ebca57: Tt,
      __wbg_blendFunc_446658e7231ab9c8: Ee,
      __wbg_colorMask_7a8dbc86e7376a9b: Ze,
      __wbg_depthFunc_eb3aa05361dd2eaa: en,
      __wbg_depthMask_103091329ca1a750: nn,
      __wbg_frontFace_027e2ec7a7bc347c: Cn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: de,
      __wbg_blendColor_1d50ac87d9a2794b: Ie,
      __wbg_clearDepth_2b109f644a783a53: Qe,
      __wbg_depthRange_5579d448b9d7de57: bn,
      __wbg_drawArrays_2be89c369a29f30b: mn,
      __wbg_useProgram_e82c1a5f87d81579: yf,
      __wbg_bindTexture_ec13ddcb9dc8e032: Se,
      __wbg_linkProgram_be6b825cf66d177b: Pt,
      __wbg_pixelStorei_f7cc498f52d523f1: Ct,
      __wbg_stencilMask_0eca090c4c47f8f7: ab,
      __wbg_attachShader_32114efcf2744eb6: be,
      __wbg_clearStencil_aa65955bb39d8c18: He,
      __wbg_createBuffer_c4ec897aacc1b91c: s_,
      __wbg_createShader_f2b928ca9a426b14: B_,
      __wbg_deleteBuffer_22fcc93912cbf659: q_,
      __wbg_deleteShader_ff70ca962883e241: H_,
      __wbg_getParameter_1ecb910cfdd21f88: Yn,
      __wbg_shaderSource_8f4bda03f70359df: Jr,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: re,
      __wbg_blendEquation_82202f34c4c00e50: Pe,
      __wbg_compileShader_63b824e86bb00b8f: e_,
      __wbg_createProgram_98aaa91f7c81c5e2: y_,
      __wbg_createTexture_f9451a82c7527ce2: T_,
      __wbg_deleteProgram_f354e79b8cae8076: U_,
      __wbg_deleteTexture_2be78224e5584a8b: Y_,
      __wbg_polygonOffset_24a8059deb03be92: Ut,
      __wbg_texParameteri_ec937d2161018946: xb,
      __wbg_bindFramebuffer_7815ca611abb057f: se,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: me,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: S_,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: G_,
      __wbg_blendFuncSeparate_f366c170c5097fbe: Fe,
      __wbg_createRenderbuffer_1e567f2f4d461710: D_,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: Q_,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: tt,
      __wbg_stencilOpSeparate_de257f3c29e604cd: ob,
      __wbg_bindAttribLocation_5cfc7fa688df5051: ue,
      __wbg_bufferData_1be8450fab534758: ke,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: Zn,
      __wbg_getShaderParameter_786fd84f85720ca8: bt,
      __wbg_getUniformLocation_71c070e6644669ad: it,
      __wbg_renderbufferStorage_6348154d30979c44: tr,
      __wbg_copyTexSubImage2D_417a65926e3d2490: o_,
      __wbg_getProgramParameter_43fbc6d2613c08b3: et,
      __wbg_stencilFuncSeparate_1798f5cca257f313: rb,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: fb,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: qn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: ve,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: On,
      __wbg_uniform2fv_04c304b93cbf7f55: jb,
      __wbg_uniform2iv_ccf2ed44ac8e602e: $b,
      __wbg_uniform3fv_aa35ef21e14d5469: Hb,
      __wbg_uniform3iv_e912f444d4ff8269: Jb,
      __wbg_uniform4fv_e6c73702e9a3be5c: nf,
      __wbg_uniform4iv_375332584c65e61b: tf,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: In,
      __wbg_disableVertexAttribArray_4bac633c27bae599: cn,
      __wbg_vertexAttribPointer_adbd1853cce679ad: Pf,
      __wbg_uniformMatrix2fv_e2806601f5b95102: cf,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: gf,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: mf,
      __wbg_bufferData_52235e85894af988: Oe,
      __wbg_readPixels_95b2464a7bb863a2: er,
      __wbg_bufferSubData_33eebcc173094f6a: We,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: n_,
      __wbg_clear_4d801d0d054c3579: Xe,
      __wbg_flush_7777597fd43065db: Ln,
      __wbg_enable_fee40f19b7053ea3: vn,
      __wbg_texSubImage2D_19ae4cadb809f264: hb,
      __wbg_disable_bd37bdcca1764aea: on,
      __wbg_scissor_b870b1434a9c25b4: or,
      __wbg_texImage2D_e71049312f3172d9: wb,
      __wbg_viewport_174ae1c2209344ae: Mf,
      __wbg_cullFace_39500f654c67a205: k_,
      __wbg_uniform1f_c148eeaf4b531059: Gb,
      __wbg_uniform1i_9f3f72dbcb98ada9: Vb,
      __wbg_uniform4f_71ec75443e58cecc: Zb,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: ye,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: E_,
      __wbg_deleteVertexArrayOES_197df47ef9684195: K_,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: Vn,
      __wbg_set_height_f21f985387070100: vr,
      __wbg_getContext_b28d2db7bd648242: Qn,
      __wbg_set_width_d60bc4f2f20c56a4: Xr,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: xt,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: ct,
      __wbg_set_height_b386c0f603610637: Dr,
      __wbg_getContext_de810d9f187f29ca: $n,
      __wbg_set_width_7f07715a20503914: Hr,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: wn,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: If,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: Sn,
      __wbg_queryCounterEXT_b578f07c30420446: $t,
      __wbg_log_6b5ca2e6124b2808: Mt,
      __wbg_info_148d043840582012: lt,
      __wbg_warn_f7ae1b2e66ccb930: Ff,
      __wbg_debug_a4099fa12db6cd61: O_,
      __wbg_error_9a7fe3f932034cde: Bn,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: xn,
      __wbg_new_3eb36ae241fe6f44: Lt,
      __wbg_new_361308b2356cecd0: Et,
      __wbg_new_no_args_1c7c842f08d00ebb: Ot,
      __wbg_length_32ed9a279acd054c: Dt,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: Nt,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: qt,
      __wbg_set_25cf9deff6bf0ea8: wr,
      __wbg_get_9b94d73e6221f75c: gt,
      __wbg_of_f915f7cd925b21a5: Wt,
      __wbg_length_35a7bace40f36eac: vt,
      __wbg_push_8ffdcb2063340ba5: Qt,
      __wbg_includes_32215c836f1cd3fb: st,
      __wbg_is_f29129f676e5410c: ht,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: eb,
      __wbg_call_389efe28435a9388: Ve,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: _b,
      __wbg_static_accessor_GLOBAL_12837167ad935116: Zr,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: nb,
      __wbg_new_b5d9e2fb389fef91: Rt,
      __wbg_then_b9e7b3b5f1a9e1b5: qb,
      __wbg_then_0d9fe2c7b1857d32: Ob,
      __wbg_resolve_002c4b7d9d8f6b64: fr,
      __wbg_call_4708e0c13bdc8e95: Ce,
      __wbg_set_6cb8631f80447a67: sr,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: Z,
      __wbg___wbindgen_throw_be289d5034ed271b: _e,
      __wbg___wbindgen_is_null_ac34f5003991759a: J,
      __wbg___wbindgen_string_get_72fb696202c56729: ee,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: H,
      __wbg___wbindgen_is_function_0095a73b8b156f76: Y,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: K,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: X,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: ne,
      __wbindgen_cast_0000000000000001: Tf,
      __wbindgen_cast_0000000000000002: Ef,
      __wbindgen_cast_0000000000000003: Lf,
      __wbindgen_cast_0000000000000004: kf,
      __wbindgen_cast_0000000000000005: Rf,
      __wbindgen_cast_0000000000000006: Of,
      __wbindgen_cast_0000000000000007: qf,
      __wbindgen_cast_0000000000000008: Wf,
      __wbindgen_cast_0000000000000009: Gf,
      __wbindgen_cast_000000000000000a: Vf
    }
  }, Q), fa = S.memory, aa = S.main, ca = S.run_introduction, ua = S.run_sorting, oa = S.setup_web, ia = S.__wasm_bindgen_func_elem_2441, da = S.__wasm_bindgen_func_elem_8286, ga = S.__wasm_bindgen_func_elem_2442, wa = S.__wbindgen_export, sa = S.__wbindgen_export2, la = S.__wbindgen_export3, ma = S.__wbindgen_export4, j = S.__wbindgen_start, xa = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_2441: ia,
    __wasm_bindgen_func_elem_2442: ga,
    __wasm_bindgen_func_elem_8286: da,
    __wbindgen_export: wa,
    __wbindgen_export2: sa,
    __wbindgen_export3: la,
    __wbindgen_export4: ma,
    __wbindgen_start: j,
    main: aa,
    memory: fa,
    run_introduction: ca,
    run_sorting: ua,
    setup_web: oa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ba(xa);
  j();
})();
export {
  __tla,
  Sa as run_introduction,
  ya as run_sorting,
  ha as setup_web
};
