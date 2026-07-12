import { _ as N } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Qc, $c, Nc;
let __tla = (async () => {
  const z = "/learn-wgpu/assets/demo_bg-Br-W6Q6L.wasm";
  Qc = function() {
    const e = i.run_introduction();
    return D(e);
  };
  $c = function() {
    const e = i.run_sorting();
    return D(e);
  };
  Nc = function() {
    i.setup_web();
  };
  function H(e) {
    const _ = n(e).Window;
    return f(_);
  }
  function X(e) {
    const _ = n(e).WorkerGlobalScope;
    return f(_);
  }
  function J(e) {
    const _ = n(e), t = typeof _ == "boolean" ? _ : void 0;
    return w(t) ? 16777215 : t ? 1 : 0;
  }
  function Y(e, _) {
    const t = G(n(_)), r = v(t, i.__wbindgen_export, i.__wbindgen_export2), b = S;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function K(e) {
    return typeof n(e) == "function";
  }
  function Z(e) {
    return n(e) === null;
  }
  function ee(e) {
    return typeof n(e) == "string";
  }
  function _e(e) {
    return n(e) === void 0;
  }
  function ne(e, _) {
    const t = n(_), r = typeof t == "number" ? t : void 0;
    s().setFloat64(e + 8, w(r) ? 0 : r, true), s().setInt32(e + 0, !w(r), true);
  }
  function te(e, _) {
    const t = n(_), r = typeof t == "string" ? t : void 0;
    var b = w(r) ? 0 : v(r, i.__wbindgen_export, i.__wbindgen_export2), a = S;
    s().setInt32(e + 4, a, true), s().setInt32(e + 0, b, true);
  }
  function re(e, _) {
    throw new Error(m(e, _));
  }
  function be(e) {
    n(e)._wbg_cb_unref();
  }
  function ae(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function ce(e, _) {
    n(e).activeTexture(_ >>> 0);
  }
  function fe(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function ue(e, _, t) {
    n(e).attachShader(n(_), n(t));
  }
  function oe(e, _) {
    const t = n(e).beginComputePass(n(_));
    return f(t);
  }
  function de(e, _, t) {
    n(e).beginQuery(_ >>> 0, n(t));
  }
  function ie(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, m(r, b));
  }
  function ge(e, _, t, r, b) {
    n(e).bindAttribLocation(n(_), t >>> 0, m(r, b));
  }
  function we(e, _, t, r, b, a) {
    n(e).bindBufferRange(_ >>> 0, t >>> 0, n(r), b, a);
  }
  function se(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function me(e, _, t) {
    n(e).bindBuffer(_ >>> 0, n(t));
  }
  function le(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function xe(e, _, t) {
    n(e).bindFramebuffer(_ >>> 0, n(t));
  }
  function pe(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function ye(e, _, t) {
    n(e).bindRenderbuffer(_ >>> 0, n(t));
  }
  function Se(e, _, t) {
    n(e).bindSampler(_ >>> 0, n(t));
  }
  function he(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function Ie(e, _, t) {
    n(e).bindTexture(_ >>> 0, n(t));
  }
  function ve(e, _) {
    n(e).bindVertexArrayOES(n(_));
  }
  function De(e, _) {
    n(e).bindVertexArray(n(_));
  }
  function Ae(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function Pe(e, _, t, r, b) {
    n(e).blendColor(_, t, r, b);
  }
  function Me(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function Be(e, _, t) {
    n(e).blendEquationSeparate(_ >>> 0, t >>> 0);
  }
  function Fe(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function Te(e, _) {
    n(e).blendEquation(_ >>> 0);
  }
  function ke(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Le(e, _, t, r, b) {
    n(e).blendFuncSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Ee(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function Oe(e, _, t) {
    n(e).blendFunc(_ >>> 0, t >>> 0);
  }
  function Re(e, _, t, r, b, a, c, u, o, d, l) {
    n(e).blitFramebuffer(_, t, r, b, a, c, u, o, d >>> 0, l >>> 0);
  }
  function We(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function qe(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function Ce(e, _, t, r) {
    n(e).bufferData(_ >>> 0, n(t), r >>> 0);
  }
  function Ve(e, _, t, r) {
    n(e).bufferData(_ >>> 0, t, r >>> 0);
  }
  function Ge(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function Ue(e, _, t, r) {
    n(e).bufferSubData(_ >>> 0, t, n(r));
  }
  function je() {
    return g(function(e, _, t) {
      const r = n(e).call(n(_), n(t));
      return f(r);
    }, arguments);
  }
  function Qe(e, _, t, r, b) {
    n(e).clearBufferfv(_ >>> 0, t, x(r, b));
  }
  function $e(e, _, t, r, b) {
    n(e).clearBufferiv(_ >>> 0, t, I(r, b));
  }
  function Ne(e, _, t, r, b) {
    n(e).clearBufferuiv(_ >>> 0, t, P(r, b));
  }
  function ze(e, _) {
    n(e).clearDepth(_);
  }
  function He(e, _) {
    n(e).clearDepth(_);
  }
  function Xe(e, _) {
    n(e).clearStencil(_);
  }
  function Je(e, _) {
    n(e).clearStencil(_);
  }
  function Ye(e, _) {
    n(e).clear(_ >>> 0);
  }
  function Ke(e, _) {
    n(e).clear(_ >>> 0);
  }
  function Ze(e, _, t, r) {
    return n(e).clientWaitSync(n(_), t >>> 0, r >>> 0);
  }
  function e_(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function __(e, _, t, r, b) {
    n(e).colorMask(_ !== 0, t !== 0, r !== 0, b !== 0);
  }
  function n_(e, _) {
    n(e).compileShader(n(_));
  }
  function t_(e, _) {
    n(e).compileShader(n(_));
  }
  function r_(e, _, t, r, b, a, c, u, o, d) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o, d);
  }
  function b_(e, _, t, r, b, a, c, u, o) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, n(o));
  }
  function a_(e, _, t, r, b, a, c, u, o) {
    n(e).compressedTexSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, n(o));
  }
  function c_(e, _, t, r, b, a, c, u, o, d, l, y) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l, y);
  }
  function f_(e, _, t, r, b, a, c, u, o, d, l) {
    n(e).compressedTexSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, n(l));
  }
  function u_() {
    return g(function(e, _) {
      n(e).configure(n(_));
    }, arguments);
  }
  function o_(e, _, t, r, b, a) {
    n(e).copyBufferSubData(_ >>> 0, t >>> 0, r, b, a);
  }
  function d_() {
    return g(function(e, _, t, r, b) {
      n(e).copyBufferToBuffer(n(_), t, n(r), b);
    }, arguments);
  }
  function i_() {
    return g(function(e, _, t, r, b, a) {
      n(e).copyBufferToBuffer(n(_), t, n(r), b, a);
    }, arguments);
  }
  function g_(e, _, t, r, b, a, c, u, o) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, a, c, u, o);
  }
  function w_(e, _, t, r, b, a, c, u, o) {
    n(e).copyTexSubImage2D(_ >>> 0, t, r, b, a, c, u, o);
  }
  function s_(e, _, t, r, b, a, c, u, o, d) {
    n(e).copyTexSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d);
  }
  function m_(e, _) {
    const t = n(e).createBindGroup(n(_));
    return f(t);
  }
  function l_(e) {
    const _ = n(e).createBuffer();
    return w(_) ? 0 : f(_);
  }
  function x_() {
    return g(function(e, _) {
      const t = n(e).createBuffer(n(_));
      return f(t);
    }, arguments);
  }
  function p_(e) {
    const _ = n(e).createBuffer();
    return w(_) ? 0 : f(_);
  }
  function y_(e, _) {
    const t = n(e).createCommandEncoder(n(_));
    return f(t);
  }
  function S_(e, _) {
    const t = n(e).createComputePipeline(n(_));
    return f(t);
  }
  function h_(e) {
    const _ = n(e).createFramebuffer();
    return w(_) ? 0 : f(_);
  }
  function I_(e) {
    const _ = n(e).createFramebuffer();
    return w(_) ? 0 : f(_);
  }
  function v_(e) {
    const _ = n(e).createProgram();
    return w(_) ? 0 : f(_);
  }
  function D_(e) {
    const _ = n(e).createProgram();
    return w(_) ? 0 : f(_);
  }
  function A_(e) {
    const _ = n(e).createQuery();
    return w(_) ? 0 : f(_);
  }
  function P_(e) {
    const _ = n(e).createRenderbuffer();
    return w(_) ? 0 : f(_);
  }
  function M_(e) {
    const _ = n(e).createRenderbuffer();
    return w(_) ? 0 : f(_);
  }
  function B_(e) {
    const _ = n(e).createSampler();
    return w(_) ? 0 : f(_);
  }
  function F_(e, _) {
    const t = n(e).createShaderModule(n(_));
    return f(t);
  }
  function T_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return w(t) ? 0 : f(t);
  }
  function k_(e, _) {
    const t = n(e).createShader(_ >>> 0);
    return w(t) ? 0 : f(t);
  }
  function L_(e) {
    const _ = n(e).createTexture();
    return w(_) ? 0 : f(_);
  }
  function E_(e) {
    const _ = n(e).createTexture();
    return w(_) ? 0 : f(_);
  }
  function O_(e) {
    const _ = n(e).createVertexArrayOES();
    return w(_) ? 0 : f(_);
  }
  function R_(e) {
    const _ = n(e).createVertexArray();
    return w(_) ? 0 : f(_);
  }
  function W_(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function q_(e, _) {
    n(e).cullFace(_ >>> 0);
  }
  function C_(e) {
    console.debug(n(e));
  }
  function V_(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function G_(e, _) {
    n(e).deleteBuffer(n(_));
  }
  function U_(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function j_(e, _) {
    n(e).deleteFramebuffer(n(_));
  }
  function Q_(e, _) {
    n(e).deleteProgram(n(_));
  }
  function $_(e, _) {
    n(e).deleteProgram(n(_));
  }
  function N_(e, _) {
    n(e).deleteQuery(n(_));
  }
  function z_(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function H_(e, _) {
    n(e).deleteRenderbuffer(n(_));
  }
  function X_(e, _) {
    n(e).deleteSampler(n(_));
  }
  function J_(e, _) {
    n(e).deleteShader(n(_));
  }
  function Y_(e, _) {
    n(e).deleteShader(n(_));
  }
  function K_(e, _) {
    n(e).deleteSync(n(_));
  }
  function Z_(e, _) {
    n(e).deleteTexture(n(_));
  }
  function en(e, _) {
    n(e).deleteTexture(n(_));
  }
  function _n(e, _) {
    n(e).deleteVertexArrayOES(n(_));
  }
  function nn(e, _) {
    n(e).deleteVertexArray(n(_));
  }
  function tn(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function rn(e, _) {
    n(e).depthFunc(_ >>> 0);
  }
  function bn(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function an(e, _) {
    n(e).depthMask(_ !== 0);
  }
  function cn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function fn(e, _, t) {
    n(e).depthRange(_, t);
  }
  function un(e) {
    n(e).destroy();
  }
  function on(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function dn(e, _) {
    n(e).disableVertexAttribArray(_ >>> 0);
  }
  function gn(e, _) {
    n(e).disable(_ >>> 0);
  }
  function wn(e, _) {
    n(e).disable(_ >>> 0);
  }
  function sn(e, _, t, r) {
    n(e).dispatchWorkgroups(_ >>> 0, t >>> 0, r >>> 0);
  }
  function mn(e) {
    const _ = n(e).document;
    return w(_) ? 0 : f(_);
  }
  function ln(e, _, t, r, b) {
    n(e).drawArraysInstancedANGLE(_ >>> 0, t, r, b);
  }
  function xn(e, _, t, r, b) {
    n(e).drawArraysInstanced(_ >>> 0, t, r, b);
  }
  function pn(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function yn(e, _, t, r) {
    n(e).drawArrays(_ >>> 0, t, r);
  }
  function Sn(e, _) {
    n(e).drawBuffersWEBGL(n(_));
  }
  function hn(e, _) {
    n(e).drawBuffers(n(_));
  }
  function In(e, _, t, r, b, a) {
    n(e).drawElementsInstancedANGLE(_ >>> 0, t, r >>> 0, b, a);
  }
  function vn(e, _, t, r, b, a) {
    n(e).drawElementsInstanced(_ >>> 0, t, r >>> 0, b, a);
  }
  function Dn(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function An(e, _) {
    n(e).enableVertexAttribArray(_ >>> 0);
  }
  function Pn(e, _) {
    n(e).enable(_ >>> 0);
  }
  function Mn(e, _) {
    n(e).enable(_ >>> 0);
  }
  function Bn(e, _) {
    n(e).endQuery(_ >>> 0);
  }
  function Fn(e) {
    n(e).end();
  }
  function Tn(e) {
    console.error(n(e));
  }
  function kn(e, _) {
    let t, r;
    try {
      t = e, r = _, console.error(m(e, _));
    } finally {
      i.__wbindgen_export4(t, r, 1);
    }
  }
  function Ln(e, _, t) {
    const r = n(e).fenceSync(_ >>> 0, t >>> 0);
    return w(r) ? 0 : f(r);
  }
  function En(e) {
    n(e).finish();
  }
  function On(e, _) {
    const t = n(e).finish(n(_));
    return f(t);
  }
  function Rn(e) {
    const _ = n(e).finish();
    return f(_);
  }
  function Wn(e) {
    n(e).finish();
  }
  function qn(e) {
    n(e).flush();
  }
  function Cn(e) {
    n(e).flush();
  }
  function Vn(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function Gn(e, _, t, r, b) {
    n(e).framebufferRenderbuffer(_ >>> 0, t >>> 0, r >>> 0, n(b));
  }
  function Un(e, _, t, r, b, a) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), a);
  }
  function jn(e, _, t, r, b, a) {
    n(e).framebufferTexture2D(_ >>> 0, t >>> 0, r >>> 0, n(b), a);
  }
  function Qn(e, _, t, r, b, a) {
    n(e).framebufferTextureLayer(_ >>> 0, t >>> 0, n(r), b, a);
  }
  function $n(e, _, t, r, b, a, c) {
    n(e).framebufferTextureMultiviewOVR(_ >>> 0, t >>> 0, n(r), b, a, c);
  }
  function Nn(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function zn(e, _) {
    n(e).frontFace(_ >>> 0);
  }
  function Hn(e, _) {
    const t = n(e).getBindGroupLayout(_ >>> 0);
    return f(t);
  }
  function Xn(e, _, t, r) {
    n(e).getBufferSubData(_ >>> 0, t, n(r));
  }
  function Jn() {
    return g(function(e, _, t, r) {
      const b = n(e).getContext(m(_, t), n(r));
      return w(b) ? 0 : f(b);
    }, arguments);
  }
  function Yn() {
    return g(function(e, _, t, r) {
      const b = n(e).getContext(m(_, t), n(r));
      return w(b) ? 0 : f(b);
    }, arguments);
  }
  function Kn() {
    return g(function(e, _, t) {
      const r = n(e).getContext(m(_, t));
      return w(r) ? 0 : f(r);
    }, arguments);
  }
  function Zn() {
    return g(function(e, _, t) {
      const r = n(e).getExtension(m(_, t));
      return w(r) ? 0 : f(r);
    }, arguments);
  }
  function et() {
    return g(function(e, _, t) {
      const r = n(e).getIndexedParameter(_ >>> 0, t >>> 0);
      return f(r);
    }, arguments);
  }
  function _t() {
    return g(function(e, _, t) {
      const r = n(e).getMappedRange(_, t);
      return f(r);
    }, arguments);
  }
  function nt() {
    return g(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return f(t);
    }, arguments);
  }
  function tt() {
    return g(function(e, _) {
      const t = n(e).getParameter(_ >>> 0);
      return f(t);
    }, arguments);
  }
  function rt(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = w(r) ? 0 : v(r, i.__wbindgen_export, i.__wbindgen_export2), a = S;
    s().setInt32(e + 4, a, true), s().setInt32(e + 0, b, true);
  }
  function bt(e, _, t) {
    const r = n(_).getProgramInfoLog(n(t));
    var b = w(r) ? 0 : v(r, i.__wbindgen_export, i.__wbindgen_export2), a = S;
    s().setInt32(e + 4, a, true), s().setInt32(e + 0, b, true);
  }
  function at(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return f(r);
  }
  function ct(e, _, t) {
    const r = n(e).getProgramParameter(n(_), t >>> 0);
    return f(r);
  }
  function ft(e, _, t) {
    const r = n(e).getQueryParameter(n(_), t >>> 0);
    return f(r);
  }
  function ut(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = w(r) ? 0 : v(r, i.__wbindgen_export, i.__wbindgen_export2), a = S;
    s().setInt32(e + 4, a, true), s().setInt32(e + 0, b, true);
  }
  function ot(e, _, t) {
    const r = n(_).getShaderInfoLog(n(t));
    var b = w(r) ? 0 : v(r, i.__wbindgen_export, i.__wbindgen_export2), a = S;
    s().setInt32(e + 4, a, true), s().setInt32(e + 0, b, true);
  }
  function dt(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return f(r);
  }
  function it(e, _, t) {
    const r = n(e).getShaderParameter(n(_), t >>> 0);
    return f(r);
  }
  function gt(e) {
    const _ = n(e).getSupportedExtensions();
    return w(_) ? 0 : f(_);
  }
  function wt(e) {
    const _ = n(e).getSupportedProfiles();
    return w(_) ? 0 : f(_);
  }
  function st(e, _, t) {
    const r = n(e).getSyncParameter(n(_), t >>> 0);
    return f(r);
  }
  function mt(e, _, t, r) {
    return n(e).getUniformBlockIndex(n(_), m(t, r));
  }
  function lt(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), m(t, r));
    return w(b) ? 0 : f(b);
  }
  function xt(e, _, t, r) {
    const b = n(e).getUniformLocation(n(_), m(t, r));
    return w(b) ? 0 : f(b);
  }
  function pt(e, _) {
    const t = n(e)[_ >>> 0];
    return f(t);
  }
  function yt(e) {
    const _ = n(e).gpu;
    return f(_);
  }
  function St(e, _, t) {
    return n(e).includes(n(_), t);
  }
  function ht(e) {
    console.info(n(e));
  }
  function It(e) {
    let _;
    try {
      _ = n(e) instanceof HTMLCanvasElement;
    } catch {
      _ = false;
    }
    return _;
  }
  function vt(e) {
    let _;
    try {
      _ = n(e) instanceof WebGL2RenderingContext;
    } catch {
      _ = false;
    }
    return _;
  }
  function Dt(e) {
    let _;
    try {
      _ = n(e) instanceof Window;
    } catch {
      _ = false;
    }
    return _;
  }
  function At() {
    return g(function(e, _, t) {
      n(e).invalidateFramebuffer(_ >>> 0, n(t));
    }, arguments);
  }
  function Pt(e, _) {
    return Object.is(n(e), n(_));
  }
  function Mt(e, _) {
    const t = n(_).label, r = v(t, i.__wbindgen_export, i.__wbindgen_export2), b = S;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function Bt(e) {
    return n(e).length;
  }
  function Ft(e) {
    return n(e).length;
  }
  function Tt(e, _) {
    n(e).linkProgram(n(_));
  }
  function kt(e, _) {
    n(e).linkProgram(n(_));
  }
  function Lt(e) {
    console.log(n(e));
  }
  function Et(e, _, t, r) {
    const b = n(e).mapAsync(_ >>> 0, t, r);
    return f(b);
  }
  function Ot(e) {
    const _ = n(e).navigator;
    return f(_);
  }
  function Rt(e) {
    const _ = n(e).navigator;
    return f(_);
  }
  function Wt() {
    const e = new Error();
    return f(e);
  }
  function qt() {
    return g(function(e, _) {
      const t = new OffscreenCanvas(e >>> 0, _ >>> 0);
      return f(t);
    }, arguments);
  }
  function Ct() {
    const e = new Array();
    return f(e);
  }
  function Vt() {
    const e = new Object();
    return f(e);
  }
  function Gt(e, _) {
    try {
      var t = {
        a: e,
        b: _
      }, r = (a, c) => {
        const u = t.a;
        t.a = 0;
        try {
          return cc(u, t.b, a, c);
        } finally {
          t.a = u;
        }
      };
      const b = new Promise(r);
      return f(b);
    } finally {
      t.a = 0;
    }
  }
  function Ut() {
    const e = new Object();
    return f(e);
  }
  function jt(e, _, t) {
    const r = new Uint8Array(n(e), _ >>> 0, t >>> 0);
    return f(r);
  }
  function Qt(e) {
    const _ = Array.of(n(e));
    return f(_);
  }
  function $t(e) {
    const _ = n(e).onSubmittedWorkDone();
    return f(_);
  }
  function Nt(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function zt(e, _, t) {
    n(e).pixelStorei(_ >>> 0, t);
  }
  function Ht(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function Xt(e, _, t) {
    n(e).polygonOffset(_, t);
  }
  function Jt(e, _, t) {
    Uint8Array.prototype.set.call(Q(e, _), n(t));
  }
  function Yt(e, _) {
    return n(e).push(n(_));
  }
  function Kt(e, _, t) {
    n(e).queryCounterEXT(n(_), t >>> 0);
  }
  function Zt() {
    return g(function(e, _, t) {
      const r = n(e).querySelector(m(_, t));
      return w(r) ? 0 : f(r);
    }, arguments);
  }
  function er(e) {
    const _ = n(e).queueMicrotask;
    return f(_);
  }
  function _r(e) {
    queueMicrotask(n(e));
  }
  function nr(e) {
    const _ = n(e).queue;
    return f(_);
  }
  function tr(e, _) {
    n(e).readBuffer(_ >>> 0);
  }
  function rr() {
    return g(function(e, _, t, r, b, a, c, u) {
      n(e).readPixels(_, t, r, b, a >>> 0, c >>> 0, n(u));
    }, arguments);
  }
  function br() {
    return g(function(e, _, t, r, b, a, c, u) {
      n(e).readPixels(_, t, r, b, a >>> 0, c >>> 0, u);
    }, arguments);
  }
  function ar() {
    return g(function(e, _, t, r, b, a, c, u) {
      n(e).readPixels(_, t, r, b, a >>> 0, c >>> 0, n(u));
    }, arguments);
  }
  function cr(e, _, t, r, b, a) {
    n(e).renderbufferStorageMultisample(_ >>> 0, t, r >>> 0, b, a);
  }
  function fr(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function ur(e, _, t, r, b) {
    n(e).renderbufferStorage(_ >>> 0, t >>> 0, r, b);
  }
  function or(e, _) {
    const t = n(e).requestAdapter(n(_));
    return f(t);
  }
  function dr(e, _) {
    const t = n(e).requestDevice(n(_));
    return f(t);
  }
  function ir(e) {
    const _ = Promise.resolve(n(e));
    return f(_);
  }
  function gr(e, _, t, r) {
    n(e).samplerParameterf(n(_), t >>> 0, r);
  }
  function wr(e, _, t, r) {
    n(e).samplerParameteri(n(_), t >>> 0, r);
  }
  function sr(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function mr(e, _, t, r, b) {
    n(e).scissor(_, t, r, b);
  }
  function lr() {
    return g(function(e, _, t, r, b, a, c) {
      n(e).setBindGroup(_ >>> 0, n(t), P(r, b), a, c >>> 0);
    }, arguments);
  }
  function xr(e, _, t) {
    n(e).setBindGroup(_ >>> 0, n(t));
  }
  function pr(e, _) {
    n(e).setPipeline(n(_));
  }
  function yr(e, _, t) {
    n(e).set(n(_), t >>> 0);
  }
  function Sr() {
    return g(function(e, _, t) {
      return Reflect.set(n(e), n(_), n(t));
    }, arguments);
  }
  function hr(e, _) {
    n(e).beginningOfPassWriteIndex = _ >>> 0;
  }
  function Ir(e, _) {
    n(e).binding = _ >>> 0;
  }
  function vr(e, _) {
    n(e).buffer = n(_);
  }
  function Dr(e, _, t) {
    n(e).code = m(_, t);
  }
  function Ar(e, _) {
    n(e).compute = n(_);
  }
  function Pr(e, _) {
    n(e).device = n(_);
  }
  function Mr(e, _) {
    n(e).endOfPassWriteIndex = _ >>> 0;
  }
  function Br(e, _, t) {
    n(e).entries = U(_, t);
  }
  function Fr(e, _, t) {
    n(e).entryPoint = m(_, t);
  }
  function Tr(e, _) {
    n(e).format = oc[_];
  }
  function kr(e, _) {
    n(e).height = _ >>> 0;
  }
  function Lr(e, _) {
    n(e).height = _ >>> 0;
  }
  function Er(e, _, t) {
    n(e).label = m(_, t);
  }
  function Or(e, _, t) {
    n(e).label = m(_, t);
  }
  function Rr(e, _, t) {
    n(e).label = m(_, t);
  }
  function Wr(e, _, t) {
    n(e).label = m(_, t);
  }
  function qr(e, _, t) {
    n(e).label = m(_, t);
  }
  function Cr(e, _, t) {
    n(e).label = m(_, t);
  }
  function Vr(e, _, t) {
    n(e).label = m(_, t);
  }
  function Gr(e, _, t) {
    n(e).label = m(_, t);
  }
  function Ur(e, _) {
    n(e).layout = n(_);
  }
  function jr(e, _) {
    n(e).layout = n(_);
  }
  function Qr(e, _) {
    n(e).layout = fc[_];
  }
  function $r(e, _) {
    n(e).mappedAtCreation = _ !== 0;
  }
  function Nr(e, _) {
    n(e).module = n(_);
  }
  function zr(e, _) {
    n(e).offset = _;
  }
  function Hr(e, _) {
    n(e).powerPreference = uc[_];
  }
  function Xr(e, _) {
    n(e).querySet = n(_);
  }
  function Jr(e, _, t) {
    n(e).requiredFeatures = U(_, t);
  }
  function Yr(e, _) {
    n(e).requiredLimits = n(_);
  }
  function Kr(e, _) {
    n(e).resource = n(_);
  }
  function Zr(e, _) {
    n(e).resource = n(_);
  }
  function eb(e, _) {
    n(e).resource = n(_);
  }
  function _b(e, _) {
    n(e).size = _;
  }
  function nb(e, _) {
    n(e).size = _;
  }
  function tb(e, _) {
    n(e).timestampWrites = n(_);
  }
  function rb(e, _) {
    n(e).usage = _ >>> 0;
  }
  function bb(e, _) {
    n(e).width = _ >>> 0;
  }
  function ab(e, _) {
    n(e).width = _ >>> 0;
  }
  function cb(e, _, t, r) {
    n(e).shaderSource(n(_), m(t, r));
  }
  function fb(e, _, t, r) {
    n(e).shaderSource(n(_), m(t, r));
  }
  function ub(e, _) {
    const t = n(_).stack, r = v(t, i.__wbindgen_export, i.__wbindgen_export2), b = S;
    s().setInt32(e + 4, b, true), s().setInt32(e + 0, r, true);
  }
  function ob() {
    const e = typeof global > "u" ? null : global;
    return w(e) ? 0 : f(e);
  }
  function db() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return w(e) ? 0 : f(e);
  }
  function ib() {
    const e = typeof self > "u" ? null : self;
    return w(e) ? 0 : f(e);
  }
  function gb() {
    const e = typeof window > "u" ? null : window;
    return w(e) ? 0 : f(e);
  }
  function wb(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function sb(e, _, t, r, b) {
    n(e).stencilFuncSeparate(_ >>> 0, t >>> 0, r, b >>> 0);
  }
  function mb(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function lb(e, _, t) {
    n(e).stencilMaskSeparate(_ >>> 0, t >>> 0);
  }
  function xb(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function pb(e, _) {
    n(e).stencilMask(_ >>> 0);
  }
  function yb(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function Sb(e, _, t, r, b) {
    n(e).stencilOpSeparate(_ >>> 0, t >>> 0, r >>> 0, b >>> 0);
  }
  function hb(e, _, t) {
    n(e).submit(U(_, t));
  }
  function Ib() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function vb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Db() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, d);
    }, arguments);
  }
  function Ab() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l) {
      n(e).texImage3D(_ >>> 0, t, r, b, a, c, u, o >>> 0, d >>> 0, l);
    }, arguments);
  }
  function Pb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l) {
      n(e).texImage3D(_ >>> 0, t, r, b, a, c, u, o >>> 0, d >>> 0, n(l));
    }, arguments);
  }
  function Mb(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function Bb(e, _, t, r) {
    n(e).texParameteri(_ >>> 0, t >>> 0, r);
  }
  function Fb(e, _, t, r, b, a) {
    n(e).texStorage2D(_ >>> 0, t, r >>> 0, b, a);
  }
  function Tb(e, _, t, r, b, a, c) {
    n(e).texStorage3D(_ >>> 0, t, r >>> 0, b, a, c);
  }
  function kb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, d);
    }, arguments);
  }
  function Lb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Eb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Ob() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Rb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Wb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function qb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Cb() {
    return g(function(e, _, t, r, b, a, c, u, o, d) {
      n(e).texSubImage2D(_ >>> 0, t, r, b, a, c, u >>> 0, o >>> 0, n(d));
    }, arguments);
  }
  function Vb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function Gb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function Ub() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function jb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, y);
    }, arguments);
  }
  function Qb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function $b() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function Nb() {
    return g(function(e, _, t, r, b, a, c, u, o, d, l, y) {
      n(e).texSubImage3D(_ >>> 0, t, r, b, a, c, u, o, d >>> 0, l >>> 0, n(y));
    }, arguments);
  }
  function zb(e, _, t) {
    const r = n(e).then(n(_), n(t));
    return f(r);
  }
  function Hb(e, _) {
    const t = n(e).then(n(_));
    return f(t);
  }
  function Xb(e) {
    n(e).unconfigure();
  }
  function Jb(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function Yb(e, _, t) {
    n(e).uniform1f(n(_), t);
  }
  function Kb(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function Zb(e, _, t) {
    n(e).uniform1i(n(_), t);
  }
  function ea(e, _, t) {
    n(e).uniform1ui(n(_), t >>> 0);
  }
  function _a(e, _, t, r) {
    n(e).uniform2fv(n(_), x(t, r));
  }
  function na(e, _, t, r) {
    n(e).uniform2fv(n(_), x(t, r));
  }
  function ta(e, _, t, r) {
    n(e).uniform2iv(n(_), I(t, r));
  }
  function ra(e, _, t, r) {
    n(e).uniform2iv(n(_), I(t, r));
  }
  function ba(e, _, t, r) {
    n(e).uniform2uiv(n(_), P(t, r));
  }
  function aa(e, _, t, r) {
    n(e).uniform3fv(n(_), x(t, r));
  }
  function ca(e, _, t, r) {
    n(e).uniform3fv(n(_), x(t, r));
  }
  function fa(e, _, t, r) {
    n(e).uniform3iv(n(_), I(t, r));
  }
  function ua(e, _, t, r) {
    n(e).uniform3iv(n(_), I(t, r));
  }
  function oa(e, _, t, r) {
    n(e).uniform3uiv(n(_), P(t, r));
  }
  function da(e, _, t, r, b, a) {
    n(e).uniform4f(n(_), t, r, b, a);
  }
  function ia(e, _, t, r, b, a) {
    n(e).uniform4f(n(_), t, r, b, a);
  }
  function ga(e, _, t, r) {
    n(e).uniform4fv(n(_), x(t, r));
  }
  function wa(e, _, t, r) {
    n(e).uniform4fv(n(_), x(t, r));
  }
  function sa(e, _, t, r) {
    n(e).uniform4iv(n(_), I(t, r));
  }
  function ma(e, _, t, r) {
    n(e).uniform4iv(n(_), I(t, r));
  }
  function la(e, _, t, r) {
    n(e).uniform4uiv(n(_), P(t, r));
  }
  function xa(e, _, t, r) {
    n(e).uniformBlockBinding(n(_), t >>> 0, r >>> 0);
  }
  function pa(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, x(r, b));
  }
  function ya(e, _, t, r, b) {
    n(e).uniformMatrix2fv(n(_), t !== 0, x(r, b));
  }
  function Sa(e, _, t, r, b) {
    n(e).uniformMatrix2x3fv(n(_), t !== 0, x(r, b));
  }
  function ha(e, _, t, r, b) {
    n(e).uniformMatrix2x4fv(n(_), t !== 0, x(r, b));
  }
  function Ia(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, x(r, b));
  }
  function va(e, _, t, r, b) {
    n(e).uniformMatrix3fv(n(_), t !== 0, x(r, b));
  }
  function Da(e, _, t, r, b) {
    n(e).uniformMatrix3x2fv(n(_), t !== 0, x(r, b));
  }
  function Aa(e, _, t, r, b) {
    n(e).uniformMatrix3x4fv(n(_), t !== 0, x(r, b));
  }
  function Pa(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, x(r, b));
  }
  function Ma(e, _, t, r, b) {
    n(e).uniformMatrix4fv(n(_), t !== 0, x(r, b));
  }
  function Ba(e, _, t, r, b) {
    n(e).uniformMatrix4x2fv(n(_), t !== 0, x(r, b));
  }
  function Fa(e, _, t, r, b) {
    n(e).uniformMatrix4x3fv(n(_), t !== 0, x(r, b));
  }
  function Ta(e) {
    n(e).unmap();
  }
  function ka(e, _) {
    n(e).useProgram(n(_));
  }
  function La(e, _) {
    n(e).useProgram(n(_));
  }
  function Ea(e, _, t) {
    n(e).vertexAttribDivisorANGLE(_ >>> 0, t >>> 0);
  }
  function Oa(e, _, t) {
    n(e).vertexAttribDivisor(_ >>> 0, t >>> 0);
  }
  function Ra(e, _, t, r, b, a) {
    n(e).vertexAttribIPointer(_ >>> 0, t, r >>> 0, b, a);
  }
  function Wa(e, _, t, r, b, a, c) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, a, c);
  }
  function qa(e, _, t, r, b, a, c) {
    n(e).vertexAttribPointer(_ >>> 0, t, r >>> 0, b !== 0, a, c);
  }
  function Ca(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Va(e, _, t, r, b) {
    n(e).viewport(_, t, r, b);
  }
  function Ga(e) {
    console.warn(n(e));
  }
  function Ua(e, _) {
    const t = C(e, _, tc);
    return f(t);
  }
  function ja(e, _) {
    const t = C(e, _, rc);
    return f(t);
  }
  function Qa(e, _) {
    const t = C(e, _, bc);
    return f(t);
  }
  function $a(e, _) {
    const t = C(e, _, ac);
    return f(t);
  }
  function Na(e) {
    return f(e);
  }
  function za(e, _) {
    const t = x(e, _);
    return f(t);
  }
  function Ha(e, _) {
    const t = ic(e, _);
    return f(t);
  }
  function Xa(e, _) {
    const t = I(e, _);
    return f(t);
  }
  function Ja(e, _) {
    const t = gc(e, _);
    return f(t);
  }
  function Ya(e, _) {
    const t = wc(e, _);
    return f(t);
  }
  function Ka(e, _) {
    const t = P(e, _);
    return f(t);
  }
  function Za(e, _) {
    const t = Q(e, _);
    return f(t);
  }
  function ec(e, _) {
    const t = m(e, _);
    return f(t);
  }
  function _c(e) {
    const _ = n(e);
    return f(_);
  }
  function nc(e) {
    D(e);
  }
  function tc(e, _, t) {
    try {
      const a = i.__wbindgen_add_to_stack_pointer(-16);
      i.__wasm_bindgen_func_elem_8760(a, e, _, f(t));
      var r = s().getInt32(a + 0, true), b = s().getInt32(a + 4, true);
      if (b) throw D(r);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function rc(e, _, t) {
    try {
      const a = i.__wbindgen_add_to_stack_pointer(-16);
      i.__wasm_bindgen_func_elem_1872(a, e, _, f(t));
      var r = s().getInt32(a + 0, true), b = s().getInt32(a + 4, true);
      if (b) throw D(r);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function bc(e, _, t) {
    try {
      const a = i.__wbindgen_add_to_stack_pointer(-16);
      i.__wasm_bindgen_func_elem_1872_2(a, e, _, f(t));
      var r = s().getInt32(a + 0, true), b = s().getInt32(a + 4, true);
      if (b) throw D(r);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ac(e, _, t) {
    try {
      const a = i.__wbindgen_add_to_stack_pointer(-16);
      i.__wasm_bindgen_func_elem_1872_3(a, e, _, f(t));
      var r = s().getInt32(a + 0, true), b = s().getInt32(a + 4, true);
      if (b) throw D(r);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function cc(e, _, t, r) {
    i.__wasm_bindgen_func_elem_8749(e, _, f(t), f(r));
  }
  const fc = [
    "auto"
  ], uc = [
    "low-power",
    "high-performance"
  ], oc = [
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
  ];
  function f(e) {
    B === h.length && h.push(h.length + 1);
    const _ = B;
    return B = h[_], h[_] = e, _;
  }
  const j = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => i.__wbindgen_export5(e.a, e.b));
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
      for (let c = 1; c < b; c++) a += ", " + G(e[c]);
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
  function dc(e) {
    e < 1028 || (h[e] = B, B = e);
  }
  function x(e, _) {
    return e = e >>> 0, sc().subarray(e / 4, e / 4 + _);
  }
  function ic(e, _) {
    return e = e >>> 0, mc().subarray(e / 2, e / 2 + _);
  }
  function I(e, _) {
    return e = e >>> 0, lc().subarray(e / 4, e / 4 + _);
  }
  function gc(e, _) {
    return e = e >>> 0, xc().subarray(e / 1, e / 1 + _);
  }
  function U(e, _) {
    e = e >>> 0;
    const t = s(), r = [];
    for (let b = e; b < e + 4 * _; b += 4) r.push(n(t.getUint32(b, true)));
    return r;
  }
  function wc(e, _) {
    return e = e >>> 0, pc().subarray(e / 2, e / 2 + _);
  }
  function P(e, _) {
    return e = e >>> 0, yc().subarray(e / 4, e / 4 + _);
  }
  function Q(e, _) {
    return e = e >>> 0, M().subarray(e / 1, e / 1 + _);
  }
  let A = null;
  function s() {
    return (A === null || A.buffer.detached === true || A.buffer.detached === void 0 && A.buffer !== i.memory.buffer) && (A = new DataView(i.memory.buffer)), A;
  }
  let T = null;
  function sc() {
    return (T === null || T.byteLength === 0) && (T = new Float32Array(i.memory.buffer)), T;
  }
  let k = null;
  function mc() {
    return (k === null || k.byteLength === 0) && (k = new Int16Array(i.memory.buffer)), k;
  }
  let L = null;
  function lc() {
    return (L === null || L.byteLength === 0) && (L = new Int32Array(i.memory.buffer)), L;
  }
  let E = null;
  function xc() {
    return (E === null || E.byteLength === 0) && (E = new Int8Array(i.memory.buffer)), E;
  }
  function m(e, _) {
    return hc(e >>> 0, _);
  }
  let O = null;
  function pc() {
    return (O === null || O.byteLength === 0) && (O = new Uint16Array(i.memory.buffer)), O;
  }
  let R = null;
  function yc() {
    return (R === null || R.byteLength === 0) && (R = new Uint32Array(i.memory.buffer)), R;
  }
  let W = null;
  function M() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(i.memory.buffer)), W;
  }
  function n(e) {
    return h[e];
  }
  function g(e, _) {
    try {
      return e.apply(this, _);
    } catch (t) {
      i.__wbindgen_export3(f(t));
    }
  }
  let h = new Array(1024).fill(void 0);
  h.push(void 0, null, true, false);
  let B = h.length;
  function w(e) {
    return e == null;
  }
  function C(e, _, t) {
    const r = {
      a: e,
      b: _,
      cnt: 1
    }, b = (...a) => {
      r.cnt++;
      const c = r.a;
      r.a = 0;
      try {
        return t(c, r.b, ...a);
      } finally {
        r.a = c, b._wbg_cb_unref();
      }
    };
    return b._wbg_cb_unref = () => {
      --r.cnt === 0 && (i.__wbindgen_export5(r.a, r.b), r.a = 0, j.unregister(r));
    }, j.register(b, r, r), b;
  }
  function v(e, _, t) {
    if (t === void 0) {
      const u = F.encode(e), o = _(u.length, 1) >>> 0;
      return M().subarray(o, o + u.length).set(u), S = u.length, o;
    }
    let r = e.length, b = _(r, 1) >>> 0;
    const a = M();
    let c = 0;
    for (; c < r; c++) {
      const u = e.charCodeAt(c);
      if (u > 127) break;
      a[b + c] = u;
    }
    if (c !== r) {
      c !== 0 && (e = e.slice(c)), b = t(b, r, r = c + e.length * 3, 1) >>> 0;
      const u = M().subarray(b + c, b + r), o = F.encodeInto(e, u);
      c += o.written, b = t(b, r, c, 1) >>> 0;
    }
    return S = c, b;
  }
  function D(e) {
    const _ = n(e);
    return dc(e), _;
  }
  let q = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  q.decode();
  const Sc = 2146435072;
  let V = 0;
  function hc(e, _) {
    return V += _, V >= Sc && (q = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), q.decode(), V = _), q.decode(M().subarray(e, e + _));
  }
  const F = new TextEncoder();
  "encodeInto" in F || (F.encodeInto = function(e, _) {
    const t = F.encode(e);
    return _.set(t), {
      read: e.length,
      written: t.length
    };
  });
  let S = 0, i;
  function Ic(e) {
    i = e;
  }
  URL = globalThis.URL;
  const p = await N({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: nc,
      __wbg_new_typed_1824d93f294193e5: Gt,
      __wbg_call_a6e5c5dce5018821: je,
      __wbg_new_227d7c05414eb861: Wt,
      __wbg_stack_3b0d974bbf31e44f: ub,
      __wbg_error_a6fa202b58aa1cd3: kn,
      __wbg_set_label_ef44793ddf4455c5: Gr,
      __wbg_set_query_set_4889dd944d5ec0fd: Xr,
      __wbg_set_beginning_of_pass_write_index_0d4fa06109208ad7: hr,
      __wbg_set_end_of_pass_write_index_49a6ddbb2b888bfa: Mr,
      __wbg_set_timestamp_writes_59c2d19ed8aecd97: tb,
      __wbg_beginComputePass_431a159006c13c7c: oe,
      __wbg_copyBufferToBuffer_ca30deb8de65f5d5: i_,
      __wbg_copyBufferToBuffer_5e2cd8f10ae78183: d_,
      __wbg_label_7ed42f25f841996b: Mt,
      __wbg_set_label_08d9be3e4719c226: Er,
      __wbg_finish_4d91de5e927dd13f: On,
      __wbg_finish_6e06b68ab68cd9f6: Rn,
      __wbg_setPipeline_d73f019e98c76d2d: pr,
      __wbg_setBindGroup_3e4ce136bc833ea1: lr,
      __wbg_setBindGroup_c22a1b95c0b17f37: xr,
      __wbg_dispatchWorkgroups_afb2344298c62227: sn,
      __wbg_getBindGroupLayout_d38545dfc4eab8d5: Hn,
      __wbindgen_object_clone_ref: _c,
      __wbg_length_370319915dc99107: Ft,
      __wbg_Window_afcc911b2f9c92e2: H,
      __wbg_gpu_2ccc250735d24a2a: yt,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: X,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: $t,
      __wbg_submit_ce44115121cd166c: hb,
      __wbg_getMappedRange_d0bf3141224111b6: _t,
      __wbg_unmap_adaf93276fdf9aaf: Ta,
      __wbg_destroy_fe937f756bf8df37: un,
      __wbg_mapAsync_52b01fa9e8f765fd: Et,
      __wbg_then_16d107c451e9905d: zb,
      __wbg_set_size_f64_6bcd40704bf4cfdc: _b,
      __wbg_set_usage_b2a2935f37bf3d08: rb,
      __wbg_set_mapped_at_creation_81b586dc90a50347: $r,
      __wbg_set_label_d010f237b26f2c55: Cr,
      __wbg_createBuffer_0726dd2ab09ea1d2: x_,
      __wbg_set_entries_a12aca1e458b0456: Br,
      __wbg_set_layout_913d53c17194c989: jr,
      __wbg_set_label_79387decda299036: qr,
      __wbg_createBindGroup_655c6e6c0258530e: m_,
      __wbg_set_code_b4f37f81f45b5b25: Dr,
      __wbg_set_label_e3944e54881b8c50: Vr,
      __wbg_createShaderModule_2e44fc7677c6288b: F_,
      __wbg_set_label_72bb4f41ef0cb893: Wr,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: y_,
      __wbg_set_module_5db9b76ee2dd2a59: Nr,
      __wbg_set_entry_point_5f26aacbe4c545eb: Fr,
      __wbg_set_layout_41021cfd2a2f62df: Ur,
      __wbg_set_layout_gpu_auto_layout_mode_0a5a185b3d52b726: Qr,
      __wbg_set_compute_d0c2d276b6d4b18d: Ar,
      __wbg_set_label_6db0393d3fdc90a5: Rr,
      __wbg_createComputePipeline_2545c47f08715810: S_,
      __wbg_new_typed_4148bd5ae72ab3f0: Ut,
      __wbg_set_required_limits_871ed33c68613dcb: Yr,
      __wbg_set_required_features_1baf274a8669db60: Jr,
      __wbg_set_label_60ad96c811e0d109: Or,
      __wbg_requestDevice_ab46d0519ea1cc34: dr,
      __wbg_end_c36889de8ddef882: Fn,
      __wbg_set_device_e275d1d4f3c9eb74: Pr,
      __wbg_set_format_815efd4dc4817bbb: Tr,
      __wbg_configure_0e4789c0f6b35c8e: u_,
      __wbg_set_power_preference_8fdca0b7af640d49: Hr,
      __wbg_requestAdapter_2e6718811c735a57: or,
      __wbg_queue_adce34608fd0c893: nr,
      __wbg_set_binding_f74df3510792aba1: Ir,
      __wbg_set_resource_5ae7b5e67924f234: Kr,
      __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: eb,
      __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: Zr,
      __wbg_set_buffer_c3410572051920ba: vr,
      __wbg_set_offset_f64_89f0ce01a689839e: zr,
      __wbg_set_size_f64_8b8f6bba5d678162: nb,
      __wbg_unconfigure_0a07a0a40de8988d: Xb,
      __wbg_includes_78c9a3115b08eddc: St,
      __wbg_push_d2ae3af0c1217ae6: Yt,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: pt,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: vt,
      __wbg_blendFunc_114dc7056ccfeb8d: Ee,
      __wbg_colorMask_a4d164c2039b5731: __,
      __wbg_depthFunc_74a8f8acf8973c86: rn,
      __wbg_depthMask_a644a67deced3257: an,
      __wbg_fenceSync_fe2cdba4a0d73679: Ln,
      __wbg_frontFace_29ef7151de8b5ed9: Nn,
      __wbg_uniform1ui_cd7ad5581093b3df: ea,
      __wbg_beginQuery_042a1f99e870066c: de,
      __wbg_bindBuffer_1e00cfb4321ef9a4: se,
      __wbg_blendColor_eae0cd578a2c7d15: Pe,
      __wbg_clearDepth_ca9b22d41551b513: He,
      __wbg_deleteSync_9b0e43580942a0f6: K_,
      __wbg_depthRange_5e90d4d236280ff5: fn,
      __wbg_drawArrays_b0c59a6e158122f2: yn,
      __wbg_readBuffer_4271437a70aae481: tr,
      __wbg_useProgram_49495850b446fa56: La,
      __wbg_bindSampler_ce608f0de9d31acf: Se,
      __wbg_bindTexture_28eff4bbd8aaab54: he,
      __wbg_createQuery_047c7c524e4ac4f8: A_,
      __wbg_deleteQuery_0d1dcc4402a86ee1: N_,
      __wbg_drawBuffers_1c1ec9b292442a2a: hn,
      __wbg_linkProgram_4e047fb3197a0348: Tt,
      __wbg_pixelStorei_c844cd0db4f1fde6: zt,
      __wbg_stencilMask_9a844dc58a89992f: pb,
      __wbg_attachShader_8971266b4c9bc514: ue,
      __wbg_clearStencil_58f2af46612bccae: Xe,
      __wbg_createBuffer_01568a9d930d90dd: l_,
      __wbg_createShader_7d139f2d50f77365: k_,
      __wbg_deleteBuffer_1ca3ffe668a488e7: G_,
      __wbg_deleteShader_993edb4beb3c4d53: Y_,
      __wbg_getExtension_101c7e41de3e4d90: Zn,
      __wbg_getParameter_d39f59581389af1b: tt,
      __wbg_shaderSource_c3469dc2221dd528: fb,
      __wbg_activeTexture_d12958674e97a118: ce,
      __wbg_blendEquation_455b8986ededabc0: Fe,
      __wbg_compileShader_9bdfd792722cf704: n_,
      __wbg_createProgram_538c9777a4ac084f: D_,
      __wbg_createSampler_70c8392d98896235: B_,
      __wbg_createTexture_d13f98e0d3d912f4: E_,
      __wbg_deleteProgram_132e191baa9fa84f: $_,
      __wbg_deleteSampler_0abb528566c4ab3b: X_,
      __wbg_deleteTexture_bdc2202d7a50dcea: en,
      __wbg_polygonOffset_4eb460adf41db6cd: Ht,
      __wbg_texParameteri_1fc451e0964fc91c: Mb,
      __wbg_texStorage2D_7f947efc63dac273: Fb,
      __wbg_texStorage3D_f8f2e4b3386736f9: Tb,
      __wbg_bindFramebuffer_390311eff3896937: le,
      __wbg_blitFramebuffer_a1215976f663b058: Re,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: ye,
      __wbg_bindVertexArray_427eeac0c1764d8a: De,
      __wbg_createFramebuffer_de0d521f546e7534: I_,
      __wbg_deleteFramebuffer_963cd69957209d37: U_,
      __wbg_getSyncParameter_d8f6c145657a3550: st,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: gr,
      __wbg_samplerParameteri_7b1b4091de49aabb: wr,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: Le,
      __wbg_createRenderbuffer_9d801bf44c314f44: M_,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: R_,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: z_,
      __wbg_deleteVertexArray_475d4e969aac1dd0: nn,
      __wbg_getQueryParameter_919125495ccb17ca: ft,
      __wbg_getShaderInfoLog_5cee2add982c7165: ut,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: Sb,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: ie,
      __wbg_bufferData_3d4f29bdfb1fa46c: qe,
      __wbg_getProgramInfoLog_d1ce570463a68779: bt,
      __wbg_getShaderParameter_3394e75dcb97f380: dt,
      __wbg_getUniformLocation_788a34295dd6fabe: xt,
      __wbg_readPixels_82c9dee754d58176: br,
      __wbg_renderbufferStorage_0a8de92542893819: fr,
      __wbg_copyTexSubImage2D_8daea651fc408645: g_,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: s_,
      __wbg_drawArraysInstanced_51b161548a3f10c4: xn,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: et,
      __wbg_getProgramParameter_c8d1154fbb3c0890: ct,
      __wbg_stencilFuncSeparate_814300446c2969ef: sb,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: mb,
      __wbg_texImage3D_bdd9bebe42ed1f52: Ab,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: xa,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Oa,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: Un,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: At,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: Me,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: mt,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Gn,
      __wbg_getSupportedExtensions_2a7458ec45e82560: gt,
      __wbg_clientWaitSync_cf8e49f8ba228377: Ze,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Qn,
      __wbg_texSubImage3D_8077e90ec309c414: jb,
      __wbg_uniform2fv_1b43656b33177d21: _a,
      __wbg_uniform2iv_859048b9d60f46ae: ta,
      __wbg_uniform3fv_8ecb5ebb510b7bce: aa,
      __wbg_uniform3iv_09abae5eabd6b9d6: fa,
      __wbg_uniform4fv_674a247aeb15012d: wa,
      __wbg_uniform4iv_d02934d7b94df609: ma,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: An,
      __wbg_uniform2uiv_8a9cb3155271213b: ba,
      __wbg_uniform3uiv_3c0b163732f5b8f0: oa,
      __wbg_uniform4uiv_0d1a8ed214f10c31: la,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: dn,
      __wbg_clearBufferfv_2e0f1a0ea56de859: Qe,
      __wbg_clearBufferiv_0360269bf6e34c54: $e,
      __wbg_clearBufferuiv_df94a395d4915377: Ne,
      __wbg_vertexAttribPointer_a8f0af57269c2067: Wa,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: vn,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: cr,
      __wbg_texSubImage3D_c9e5a071796d412f: $b,
      __wbg_uniformMatrix2fv_9284424cc6aac672: ya,
      __wbg_uniformMatrix3fv_568aa181379c8a75: va,
      __wbg_uniformMatrix4fv_423b958042692150: Ma,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: Ra,
      __wbg_bindBufferRange_f5c29912db0476e9: we,
      __wbg_bufferData_90ef588bac2be2f5: Ce,
      __wbg_texSubImage3D_93b38c69acb735c8: Qb,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Sa,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: ha,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: Da,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: Aa,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Ba,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: Fa,
      __wbg_readPixels_5f013a7d85b23800: rr,
      __wbg_texImage3D_ef16a1f721b3f908: Pb,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: Gb,
      __wbg_texSubImage3D_6cb6cfd732dad145: Ub,
      __wbg_texSubImage3D_45e498ae6298998c: Vb,
      __wbg_texSubImage3D_feebaf7f0f4594c6: Nb,
      __wbg_compressedTexSubImage2D_c1362291573c7268: r_,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: c_,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: o_,
      __wbg_bufferSubData_bae930b21e9c1c48: Ge,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: b_,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: f_,
      __wbg_getBufferSubData_11018928c908ac2c: Xn,
      __wbg_texSubImage2D_047380bb2660e4f9: kb,
      __wbg_clear_dd06a0da4ce8e13f: Ke,
      __wbg_flush_e03c08da6863b5ab: Cn,
      __wbg_texImage2D_8d168171984f2a40: Db,
      __wbg_texSubImage2D_bed5e7a3cd81d409: Rb,
      __wbg_texSubImage2D_e107b4f88c19b920: Cb,
      __wbg_enable_28bbeed576131d1f: Pn,
      __wbg_finish_cbe7ec8675dd7705: Wn,
      __wbg_texSubImage2D_98c43894eb217aa7: Ob,
      __wbg_texSubImage2D_5058af3d30a8e205: Lb,
      __wbg_texSubImage2D_6a376bfc3a31436b: Eb,
      __wbg_texSubImage2D_d1af697e69f8a9e4: Wb,
      __wbg_disable_1659d1b7d50c31e7: gn,
      __wbg_scissor_105e756596bc35df: sr,
      __wbg_texImage2D_5abd8779d1d033c7: vb,
      __wbg_viewport_affdf15c559df1e2: Ca,
      __wbg_cullFace_f1c75ae19b07eaf3: q_,
      __wbg_endQuery_a50f7fc49cfe56e9: Bn,
      __wbg_uniform1f_62692c8fa8e7bf1e: Jb,
      __wbg_uniform1i_7621f908f78177df: Zb,
      __wbg_uniform4f_9ff60fc65b0ed726: da,
      __wbg_instanceof_Window_05ba1ee4f6781663: Dt,
      __wbg_document_179650d6cb13c263: mn,
      __wbg_navigator_99621db14b3f1099: Rt,
      __wbg_querySelector_fd7d157ebe17cd16: Zt,
      __wbg_navigator_51379c10a84aeec9: Ot,
      __wbg_blendFunc_a854d7e4459150ba: Oe,
      __wbg_colorMask_44ebb91cad2502f2: e_,
      __wbg_depthFunc_455cfeb8a9d2fb4c: tn,
      __wbg_depthMask_4bd6c73b1339d257: bn,
      __wbg_frontFace_fc6d98dafa42de87: zn,
      __wbg_bindBuffer_a01497b1abdcdd9a: me,
      __wbg_blendColor_793b560dc69ddd0b: Ae,
      __wbg_clearDepth_8b5d226aae155082: ze,
      __wbg_depthRange_38b2287ffbea14fd: cn,
      __wbg_drawArrays_676becae0149ed65: pn,
      __wbg_useProgram_182d120fe476921b: ka,
      __wbg_bindTexture_9b04b1b7c00d4dd6: Ie,
      __wbg_linkProgram_d7c71c539c8c6a43: kt,
      __wbg_pixelStorei_2a93b18efde9acf8: Nt,
      __wbg_stencilMask_1c99b79b516d12dd: xb,
      __wbg_attachShader_5f7f4077e124e23b: fe,
      __wbg_clearStencil_a66fe23df6313fc7: Je,
      __wbg_createBuffer_2075765bde5035d5: p_,
      __wbg_createShader_78bc8b7e9a88e1a8: T_,
      __wbg_deleteBuffer_08eb938e35c27967: V_,
      __wbg_deleteShader_3120790d36063afe: J_,
      __wbg_getParameter_039a5899307fab55: nt,
      __wbg_shaderSource_4cf90af97621ff49: cb,
      __wbg_activeTexture_92b04d918019d603: ae,
      __wbg_blendEquation_f5c5272993f6cb01: Te,
      __wbg_compileShader_fc2e4b73240d4fd7: t_,
      __wbg_createProgram_118becaac3a20318: v_,
      __wbg_createTexture_0ee0fa5f924f3d14: L_,
      __wbg_deleteProgram_09bd45a51105b2f6: Q_,
      __wbg_deleteTexture_2b163b157ea1be24: Z_,
      __wbg_polygonOffset_eccb68e40a18f861: Xt,
      __wbg_texParameteri_9d0daa263d3a863f: Bb,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: xe,
      __wbg_bindRenderbuffer_75e8469e930840fa: pe,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: h_,
      __wbg_deleteFramebuffer_d1a36e889b009344: j_,
      __wbg_blendFuncSeparate_37156309688f8f88: ke,
      __wbg_createRenderbuffer_71af5c0d615e9271: P_,
      __wbg_deleteRenderbuffer_ca999f7883b777af: H_,
      __wbg_getShaderInfoLog_bc236afe696c1283: ot,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: yb,
      __wbg_bindAttribLocation_94202d7a59ab7863: ge,
      __wbg_bufferData_ce4f44d56e9ddab5: Ve,
      __wbg_getProgramInfoLog_c4762e0513468a26: rt,
      __wbg_getShaderParameter_cbcc0995e8e16214: it,
      __wbg_getUniformLocation_24ef46cdda2148ab: lt,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: ur,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: w_,
      __wbg_getProgramParameter_b9995b56c258ac86: at,
      __wbg_stencilFuncSeparate_35136c4e5153406f: wb,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: lb,
      __wbg_framebufferTexture2D_e1fb64212fcda219: jn,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: Be,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Vn,
      __wbg_uniform2fv_948dab6a82b428ac: na,
      __wbg_uniform2iv_f84a24961c0cfcd0: ra,
      __wbg_uniform3fv_95d1933ea1440725: ca,
      __wbg_uniform3iv_a3a7008990fd84f0: ua,
      __wbg_uniform4fv_4ca8c114ca3de099: ga,
      __wbg_uniform4iv_45ab52abcb3f882c: sa,
      __wbg_enableVertexAttribArray_4c08219124740f14: Dn,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: on,
      __wbg_vertexAttribPointer_b300c8e000cdac93: qa,
      __wbg_uniformMatrix2fv_769725d64641341f: pa,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: Ia,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Pa,
      __wbg_bufferData_073a7c6abef7a55f: We,
      __wbg_readPixels_c7861e25836bf57b: ar,
      __wbg_bufferSubData_ce9854d3d337e2cf: Ue,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: a_,
      __wbg_clear_53d71d234e14e4c1: Ye,
      __wbg_flush_db77b4a63d6b337d: qn,
      __wbg_enable_611804c0ac1504ce: Mn,
      __wbg_finish_126e6f2ac71e3096: En,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: qb,
      __wbg_disable_40c3975167c1ee07: wn,
      __wbg_scissor_573b844152316b8d: mr,
      __wbg_texImage2D_3813406af5bf54c8: Ib,
      __wbg_viewport_e8a16ca4a5085e5f: Va,
      __wbg_cullFace_62bbea3bef0e6b99: W_,
      __wbg_uniform1f_b79d0c5667f9fb40: Yb,
      __wbg_uniform1i_5830de6702add20a: Kb,
      __wbg_uniform4f_b25e39808b830021: ia,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: Sn,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: ln,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: Ea,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: In,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: ve,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: O_,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: _n,
      __wbg_log_d267660666346fb3: Lt,
      __wbg_info_eadbe775a8e2e9eb: ht,
      __wbg_warn_b1370d804fa3e259: Ga,
      __wbg_debug_87fd9b1a625b7efb: C_,
      __wbg_error_744744ff0c9861e6: Tn,
      __wbg_set_height_bbeef8f354041577: Lr,
      __wbg_getContext_fd298c901058eb31: Kn,
      __wbg_getContext_7476e39fa008047e: Jn,
      __wbg_new_25e75d1f0df4d87a: qt,
      __wbg_set_width_49ac9b7d914afc85: bb,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: Kt,
      __wbg_getSupportedProfiles_90a4f330938d0241: wt,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: $n,
      __wbg_set_height_7d9d8f892e6964c6: kr,
      __wbg_getContext_ca12bb65aab778a4: Yn,
      __wbg_set_width_8e30d010cd66830d: ab,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: It,
      __wbg_new_32b398fb48b6d94a: Ct,
      __wbg_new_da52cf8fe3429cb2: Vt,
      __wbg_length_1f0964f4a5e2c6d8: Bt,
      __wbg_prototypesetcall_4770620bbe4688a0: Jt,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: jt,
      __wbg_set_61e45ae8061eca11: yr,
      __wbg_then_6ec10ae38b3e92f7: Hb,
      __wbg_of_85f52f8b6491a7ca: Qt,
      __wbg_is_7b9d0b289033c7de: Pt,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: db,
      __wbg_static_accessor_SELF_146583524fe1469b: ib,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: ob,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: gb,
      __wbg_resolve_2191a4dfe481c25b: ir,
      __wbg_set_8535240470bf2500: Sr,
      __wbg_queueMicrotask_6a09b7bc46549209: _r,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: er,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: ne,
      __wbg___wbindgen_throw_344f42d3211c4765: re,
      __wbg___wbindgen_is_null_ea9085d691f535d3: Z,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: ee,
      __wbg___wbindgen_string_get_b0ca35b86a603356: te,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: J,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: K,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: _e,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: Y,
      __wbg__wbg_cb_unref_fffb441def202758: be,
      __wbindgen_cast_0000000000000001: Ua,
      __wbindgen_cast_0000000000000002: ja,
      __wbindgen_cast_0000000000000003: Qa,
      __wbindgen_cast_0000000000000004: $a,
      __wbindgen_cast_0000000000000005: Na,
      __wbindgen_cast_0000000000000006: za,
      __wbindgen_cast_0000000000000007: Ha,
      __wbindgen_cast_0000000000000008: Xa,
      __wbindgen_cast_0000000000000009: Ja,
      __wbindgen_cast_000000000000000a: Ya,
      __wbindgen_cast_000000000000000b: Ka,
      __wbindgen_cast_000000000000000c: Za,
      __wbindgen_cast_000000000000000d: ec
    }
  }, z), vc = p.memory, Dc = p.main, Ac = p.run_introduction, Pc = p.run_sorting, Mc = p.setup_web, Bc = p.__abort_handler, Fc = p.__instance_terminated, Tc = p.__wasm_bindgen_func_elem_8760, kc = p.__wasm_bindgen_func_elem_1872, Lc = p.__wasm_bindgen_func_elem_1872_2, Ec = p.__wasm_bindgen_func_elem_1872_3, Oc = p.__wasm_bindgen_func_elem_8749, Rc = p.__wbindgen_export, Wc = p.__wbindgen_export2, qc = p.__wbindgen_export3, Cc = p.__wbindgen_export4, Vc = p.__wbindgen_export5, Gc = p.__wbindgen_add_to_stack_pointer, $ = p.__wbindgen_start, Uc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: Bc,
    __instance_terminated: Fc,
    __wasm_bindgen_func_elem_1872: kc,
    __wasm_bindgen_func_elem_1872_2: Lc,
    __wasm_bindgen_func_elem_1872_3: Ec,
    __wasm_bindgen_func_elem_8749: Oc,
    __wasm_bindgen_func_elem_8760: Tc,
    __wbindgen_add_to_stack_pointer: Gc,
    __wbindgen_export: Rc,
    __wbindgen_export2: Wc,
    __wbindgen_export3: qc,
    __wbindgen_export4: Cc,
    __wbindgen_export5: Vc,
    __wbindgen_start: $,
    main: Dc,
    memory: vc,
    run_introduction: Ac,
    run_sorting: Pc,
    setup_web: Mc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ic(Uc);
  $();
})();
export {
  __tla,
  Qc as run_introduction,
  $c as run_sorting,
  Nc as setup_web
};
