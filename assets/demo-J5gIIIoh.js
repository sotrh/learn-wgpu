import { _ as t_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Pd;
let __tla = (async () => {
  const n_ = "/learn-wgpu/assets/demo_bg-CdfGRpxa.wasm";
  Pd = function() {
    i.run_web();
  };
  function r_(_) {
    const e = t(_).Window;
    return b(e);
  }
  function c_(_) {
    const e = t(_).Window;
    return b(e);
  }
  function b_(_) {
    const e = t(_).WorkerGlobalScope;
    return b(e);
  }
  function a_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return w(n) ? 16777215 : n ? 1 : 0;
  }
  function f_(_, e) {
    const n = z(t(e)), r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function o_(_) {
    return typeof t(_) == "function";
  }
  function u_(_) {
    return t(_) === null;
  }
  function i_(_) {
    const e = t(_);
    return typeof e == "object" && e !== null;
  }
  function d_(_) {
    return t(_) === void 0;
  }
  function g_(_, e) {
    const n = t(e), r = typeof n == "number" ? n : void 0;
    l().setFloat64(_ + 8, w(r) ? 0 : r, true), l().setInt32(_ + 0, !w(r), true);
  }
  function s_(_, e) {
    const n = t(e), r = typeof n == "string" ? n : void 0;
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function w_(_, e) {
    throw new Error(g(_, e));
  }
  function l_(_) {
    t(_)._wbg_cb_unref();
  }
  function m_(_) {
    t(_).abort();
  }
  function p_(_) {
    const e = t(_).activeElement;
    return w(e) ? 0 : b(e);
  }
  function x_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function y_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function h_() {
    return o(function(_, e, n, r) {
      t(_).addEventListener(g(e, n), t(r));
    }, arguments);
  }
  function S_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function v_(_) {
    return t(_).altKey;
  }
  function I_(_) {
    return t(_).altKey;
  }
  function A_(_, e, n) {
    const r = t(_).animate(t(e), t(n));
    return b(r);
  }
  function D_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return b(n);
    }, arguments);
  }
  function P_() {
    return o(function(_, e, n, r, c) {
      t(_).append(g(e, n), g(r, c));
    }, arguments);
  }
  function M_() {
    return o(function(_) {
      const e = t(_).arrayBuffer();
      return b(e);
    }, arguments);
  }
  function F_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function T_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function B_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function k_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return b(n);
    }, arguments);
  }
  function L_(_, e, n, r, c) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(r, c));
  }
  function E_(_, e, n, r, c) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(r, c));
  }
  function C_(_, e, n, r, c, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(r), c, a);
  }
  function R_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function O_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function q_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function j_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function K_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function N_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function Q_(_, e, n, r, c) {
    t(_).blendColor(e, n, r, c);
  }
  function X_(_, e, n, r, c) {
    t(_).blendColor(e, n, r, c);
  }
  function $_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function Y_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function H_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function J_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function Z_(_, e, n, r, c) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function _e(_, e, n, r, c) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function ee(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function te(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function ne(_, e, n, r, c, a, f, u, d, s, m) {
    t(_).blitFramebuffer(e, n, r, c, a, f, u, d, s >>> 0, m >>> 0);
  }
  function re(_) {
    return t(_).blockSize;
  }
  function ce(_) {
    const e = t(_).body;
    return w(e) ? 0 : b(e);
  }
  function be(_, e) {
    const n = t(e).brand, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function ae(_) {
    const e = t(_).brands;
    return b(e);
  }
  function fe(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function oe(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ue(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function ie(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function de(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function ge(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function se(_) {
    return t(_).button;
  }
  function we(_) {
    return t(_).buttons;
  }
  function le() {
    return o(function(_, e) {
      const n = t(_).call(t(e));
      return b(n);
    }, arguments);
  }
  function me() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function pe(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function xe(_) {
    t(_).cancel();
  }
  function ye(_, e) {
    const n = t(_).catch(t(e));
    return b(n);
  }
  function he(_, e, n, r, c) {
    t(_).clearBufferfv(e >>> 0, n, x(r, c));
  }
  function Se(_, e, n, r, c) {
    t(_).clearBufferiv(e >>> 0, n, A(r, c));
  }
  function ve(_, e, n, r, c) {
    t(_).clearBufferuiv(e >>> 0, n, F(r, c));
  }
  function Ie(_, e) {
    t(_).clearDepth(e);
  }
  function Ae(_, e) {
    t(_).clearDepth(e);
  }
  function De(_, e) {
    t(_).clearStencil(e);
  }
  function Pe(_, e) {
    t(_).clearStencil(e);
  }
  function Me(_, e) {
    t(_).clearTimeout(e);
  }
  function Fe(_, e) {
    t(_).clear(e >>> 0);
  }
  function Te(_, e) {
    t(_).clear(e >>> 0);
  }
  function Be(_, e, n, r) {
    return t(_).clientWaitSync(t(e), n >>> 0, r >>> 0);
  }
  function ke(_) {
    t(_).close();
  }
  function Le(_, e) {
    const n = t(e).code, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Ee(_, e, n, r, c) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, c !== 0);
  }
  function Ce(_, e, n, r, c) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, c !== 0);
  }
  function Re(_, e) {
    t(_).compileShader(t(e));
  }
  function Oe(_, e) {
    t(_).compileShader(t(e));
  }
  function qe(_, e, n, r, c, a, f, u, d) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, t(d));
  }
  function Ge(_, e, n, r, c, a, f, u, d) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, t(d));
  }
  function Ve(_, e, n, r, c, a, f, u, d, s) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d, s);
  }
  function We(_, e, n, r, c, a, f, u, d, s, m) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, t(m));
  }
  function Ue(_, e, n, r, c, a, f, u, d, s, m, h) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m, h);
  }
  function ze() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function je(_, e) {
    return t(_).contains(t(e));
  }
  function Ke(_) {
    const e = t(_).contentRect;
    return b(e);
  }
  function Ne(_, e, n, r, c, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, r, c, a);
  }
  function Qe(_, e, n, r, c, a, f, u, d) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, c, a, f, u, d);
  }
  function Xe(_, e, n, r, c, a, f, u, d) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, c, a, f, u, d);
  }
  function $e(_, e, n, r, c, a, f, u, d, s) {
    t(_).copyTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s);
  }
  function Ye() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return b(n);
    }, arguments);
  }
  function He(_, e) {
    const n = t(_).createBindGroup(t(e));
    return b(n);
  }
  function Je(_) {
    const e = t(_).createBuffer();
    return w(e) ? 0 : b(e);
  }
  function Ze(_) {
    const e = t(_).createBuffer();
    return w(e) ? 0 : b(e);
  }
  function _t() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return b(n);
    }, arguments);
  }
  function et(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return b(n);
  }
  function tt() {
    return o(function(_, e, n) {
      const r = t(_).createElement(g(e, n));
      return b(r);
    }, arguments);
  }
  function nt(_) {
    const e = t(_).createFramebuffer();
    return w(e) ? 0 : b(e);
  }
  function rt(_) {
    const e = t(_).createFramebuffer();
    return w(e) ? 0 : b(e);
  }
  function ct() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function bt(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return b(n);
  }
  function at(_) {
    const e = t(_).createProgram();
    return w(e) ? 0 : b(e);
  }
  function ft(_) {
    const e = t(_).createProgram();
    return w(e) ? 0 : b(e);
  }
  function ot(_) {
    const e = t(_).createQuery();
    return w(e) ? 0 : b(e);
  }
  function ut() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return b(n);
    }, arguments);
  }
  function it(_) {
    const e = t(_).createRenderbuffer();
    return w(e) ? 0 : b(e);
  }
  function dt(_) {
    const e = t(_).createRenderbuffer();
    return w(e) ? 0 : b(e);
  }
  function gt(_, e) {
    const n = t(_).createSampler(t(e));
    return b(n);
  }
  function st(_) {
    const e = t(_).createSampler();
    return w(e) ? 0 : b(e);
  }
  function wt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return b(n);
  }
  function lt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return w(n) ? 0 : b(n);
  }
  function mt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return w(n) ? 0 : b(n);
  }
  function pt(_) {
    const e = t(_).createTexture();
    return w(e) ? 0 : b(e);
  }
  function xt() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return b(n);
    }, arguments);
  }
  function yt(_) {
    const e = t(_).createTexture();
    return w(e) ? 0 : b(e);
  }
  function ht(_) {
    const e = t(_).createVertexArrayOES();
    return w(e) ? 0 : b(e);
  }
  function St(_) {
    const e = t(_).createVertexArray();
    return w(e) ? 0 : b(e);
  }
  function vt() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return b(n);
    }, arguments);
  }
  function It(_) {
    return t(_).ctrlKey;
  }
  function At(_) {
    return t(_).ctrlKey;
  }
  function Dt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Pt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Mt(_) {
    console.debug(t(_));
  }
  function Ft(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Tt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Bt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function kt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Lt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Et(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Ct(_, e) {
    t(_).deleteQuery(t(e));
  }
  function Rt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Ot(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function qt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Gt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Vt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Wt(_, e) {
    t(_).deleteSync(t(e));
  }
  function Ut(_, e) {
    t(_).deleteTexture(t(e));
  }
  function zt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function jt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Kt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Nt(_) {
    return t(_).deltaMode;
  }
  function Qt(_) {
    return t(_).deltaX;
  }
  function Xt(_) {
    return t(_).deltaY;
  }
  function $t(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Yt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Ht(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Jt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function Zt(_, e, n) {
    t(_).depthRange(e, n);
  }
  function _n(_, e, n) {
    t(_).depthRange(e, n);
  }
  function en(_) {
    t(_).destroy();
  }
  function tn(_) {
    const e = t(_).devicePixelContentBoxSize;
    return b(e);
  }
  function nn(_) {
    return t(_).devicePixelRatio;
  }
  function rn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function cn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function bn(_, e) {
    t(_).disable(e >>> 0);
  }
  function an(_, e) {
    t(_).disable(e >>> 0);
  }
  function fn(_) {
    t(_).disconnect();
  }
  function on(_) {
    t(_).disconnect();
  }
  function un(_) {
    const e = t(_).document;
    return w(e) ? 0 : b(e);
  }
  function dn(_) {
    return t(_).done;
  }
  function gn(_, e, n, r, c) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, c);
  }
  function sn(_, e, n, r, c) {
    t(_).drawArraysInstanced(e >>> 0, n, r, c);
  }
  function wn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function ln(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function mn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function pn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function xn(_, e, n, r, c, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, c, a);
  }
  function yn(_, e, n, r, c, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, c, a);
  }
  function hn(_, e, n, r, c, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, r >>> 0, c, a >>> 0);
  }
  function Sn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function vn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function In(_, e) {
    t(_).enable(e >>> 0);
  }
  function An(_, e) {
    t(_).enable(e >>> 0);
  }
  function Dn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function Pn(_) {
    t(_).end();
  }
  function Mn(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(g(_, e));
    } finally {
      i.__wbindgen_export4(n, r, 1);
    }
  }
  function Fn(_) {
    console.error(t(_));
  }
  function Tn(_, e) {
    console.error(t(_), t(e));
  }
  function Bn(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return w(r) ? 0 : b(r);
  }
  function kn(_, e) {
    const n = t(_).fetch(t(e));
    return b(n);
  }
  function Ln(_) {
    const e = fetch(t(_));
    return b(e);
  }
  function En(_) {
    const e = t(_).finish();
    return b(e);
  }
  function Cn(_, e) {
    const n = t(_).finish(t(e));
    return b(n);
  }
  function Rn(_) {
    t(_).flush();
  }
  function On(_) {
    t(_).flush();
  }
  function qn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Gn(_, e, n, r, c) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Vn(_, e, n, r, c) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Wn(_, e, n, r, c, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Un(_, e, n, r, c, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function zn(_, e, n, r, c, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), c, a);
  }
  function jn(_, e, n, r, c, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), c, a, f);
  }
  function Kn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Nn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Qn(_) {
    const e = t(_).fullscreenElement;
    return w(e) ? 0 : b(e);
  }
  function Xn(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function $n(_) {
    const e = t(_).getCoalescedEvents;
    return b(e);
  }
  function Yn(_) {
    const e = t(_).getCoalescedEvents();
    return b(e);
  }
  function Hn() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return w(n) ? 0 : b(n);
    }, arguments);
  }
  function Jn() {
    return o(function(_, e, n) {
      const r = t(_).getContext(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function Zn() {
    return o(function(_, e, n) {
      const r = t(_).getContext(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function _r() {
    return o(function(_, e, n, r) {
      const c = t(_).getContext(g(e, n), t(r));
      return w(c) ? 0 : b(c);
    }, arguments);
  }
  function er() {
    return o(function(_, e, n, r) {
      const c = t(_).getContext(g(e, n), t(r));
      return w(c) ? 0 : b(c);
    }, arguments);
  }
  function tr() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return b(e);
    }, arguments);
  }
  function nr(_, e, n) {
    const r = t(_).getElementById(g(e, n));
    return w(r) ? 0 : b(r);
  }
  function rr() {
    return o(function(_, e, n) {
      const r = t(_).getExtension(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function cr() {
    return o(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return b(r);
    }, arguments);
  }
  function br() {
    return o(function(_, e, n) {
      const r = t(_).getMappedRange(e, n);
      return b(r);
    }, arguments);
  }
  function ar(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return b(n);
  }
  function fr() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return b(n);
    }, arguments);
  }
  function or() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return b(n);
    }, arguments);
  }
  function ur(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 96) - 1;
  }
  function ir(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function dr(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function gr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return b(r);
  }
  function sr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return b(r);
  }
  function wr() {
    return o(function(_, e, n, r) {
      const c = t(e).getPropertyValue(g(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = p;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function lr(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return b(r);
  }
  function mr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function pr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function xr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return b(r);
  }
  function yr(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return b(r);
  }
  function hr(_) {
    const e = t(_).getSupportedExtensions();
    return w(e) ? 0 : b(e);
  }
  function Sr(_) {
    const e = t(_).getSupportedProfiles();
    return w(e) ? 0 : b(e);
  }
  function vr(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return b(r);
  }
  function Ir(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), g(n, r));
  }
  function Ar(_, e, n, r) {
    const c = t(_).getUniformLocation(t(e), g(n, r));
    return w(c) ? 0 : b(c);
  }
  function Dr(_, e, n, r) {
    const c = t(_).getUniformLocation(t(e), g(n, r));
    return w(c) ? 0 : b(c);
  }
  function Pr(_, e) {
    const n = t(_)[e >>> 0];
    return b(n);
  }
  function Mr() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return b(n);
    }, arguments);
  }
  function Fr(_, e) {
    const n = t(_)[e >>> 0];
    return w(n) ? 0 : b(n);
  }
  function Tr(_) {
    const e = t(_).gpu;
    return b(e);
  }
  function Br() {
    return o(function(_, e) {
      return Reflect.has(t(_), t(e));
    }, arguments);
  }
  function kr(_) {
    const e = t(_).headers;
    return b(e);
  }
  function Lr(_) {
    return t(_).height;
  }
  function Er(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Cr(_) {
    console.info(t(_));
  }
  function Rr(_) {
    return t(_).inlineSize;
  }
  function Or(_) {
    let e;
    try {
      e = t(_) instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function qr(_) {
    let e;
    try {
      e = t(_) instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Gr(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Vr(_) {
    let e;
    try {
      e = t(_) instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function Wr(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Ur(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function zr() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function jr(_) {
    return t(_).isIntersecting;
  }
  function Kr(_, e) {
    return Object.is(t(_), t(e));
  }
  function Nr() {
    return b(Symbol.iterator);
  }
  function Qr(_, e) {
    const n = t(e).key, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Xr(_, e) {
    const n = t(e).label, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function $r(_) {
    return t(_).length;
  }
  function Yr(_) {
    return t(_).length;
  }
  function Hr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Jr(_, e) {
    t(_).linkProgram(t(e));
  }
  function Zr(_) {
    return t(_).location;
  }
  function _c(_) {
    const e = t(_).location;
    return b(e);
  }
  function ec(_) {
    console.log(t(_));
  }
  function tc(_, e, n, r) {
    const c = t(_).mapAsync(e >>> 0, n, r);
    return b(c);
  }
  function nc() {
    return o(function(_, e, n) {
      const r = t(_).matchMedia(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function rc(_) {
    return t(_).matches;
  }
  function cc(_, e) {
    const n = t(e).media, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function bc(_) {
    return t(_).metaKey;
  }
  function ac(_) {
    return t(_).metaKey;
  }
  function fc(_) {
    return t(_).movementX;
  }
  function oc(_) {
    return t(_).movementY;
  }
  function uc(_) {
    const e = t(_).navigator;
    return b(e);
  }
  function ic(_) {
    const e = t(_).navigator;
    return b(e);
  }
  function dc() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return b(e);
    }, arguments);
  }
  function gc() {
    const _ = new Object();
    return b(_);
  }
  function sc() {
    const _ = new Array();
    return b(_);
  }
  function wc() {
    return o(function(_, e) {
      const n = new Worker(g(_, e));
      return b(n);
    }, arguments);
  }
  function lc() {
    return o(function() {
      const _ = new Headers();
      return b(_);
    }, arguments);
  }
  function mc() {
    return o(function() {
      const _ = new MessageChannel();
      return b(_);
    }, arguments);
  }
  function pc() {
    const _ = new Error();
    return b(_);
  }
  function xc() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return b(e);
    }, arguments);
  }
  function yc() {
    return o(function() {
      const _ = new AbortController();
      return b(_);
    }, arguments);
  }
  function hc(_) {
    const e = new Uint8Array(t(_));
    return b(e);
  }
  function Sc(_, e) {
    const n = new Uint8Array(L(_, e));
    return b(n);
  }
  function vc(_, e) {
    const n = new Function(g(_, e));
    return b(n);
  }
  function Ic(_, e, n) {
    const r = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return b(r);
  }
  function Ac() {
    return o(function(_, e, n) {
      const r = new Request(g(_, e), t(n));
      return b(r);
    }, arguments);
  }
  function Dc() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return b(n);
    }, arguments);
  }
  function Pc() {
    return o(function(_) {
      const e = t(_).next();
      return b(e);
    }, arguments);
  }
  function Mc(_) {
    const e = t(_).next;
    return b(e);
  }
  function Fc(_) {
    return t(_).now();
  }
  function Tc(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function Bc(_, e) {
    t(_).observe(t(e));
  }
  function kc(_, e) {
    t(_).observe(t(e));
  }
  function Lc(_, e) {
    const n = Array.of(t(_), t(e));
    return b(n);
  }
  function Ec(_) {
    const e = Array.of(t(_));
    return b(e);
  }
  function Cc(_) {
    return t(_).offsetX;
  }
  function Rc(_) {
    return t(_).offsetY;
  }
  function Oc(_) {
    const e = t(_).onSubmittedWorkDone();
    return b(e);
  }
  function qc() {
    return o(function(_, e) {
      const n = t(e).origin, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Gc(_) {
    const e = t(_).performance;
    return b(e);
  }
  function Vc(_) {
    return t(_).persisted;
  }
  function Wc(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Uc(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function zc(_) {
    t(_).play();
  }
  function jc(_) {
    return t(_).pointerId;
  }
  function Kc(_, e) {
    const n = t(e).pointerType, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Nc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Qc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Xc(_) {
    const e = t(_).port1;
    return b(e);
  }
  function $c(_) {
    const e = t(_).port2;
    return b(e);
  }
  function Yc() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function Hc() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function Jc(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return b(r);
  }
  function Zc(_) {
    return t(_).pressure;
  }
  function _b(_) {
    t(_).preventDefault();
  }
  function eb() {
    const _ = ResizeObserverEntry.prototype;
    return b(_);
  }
  function tb(_, e, n) {
    Uint8Array.prototype.set.call(L(_, e), t(n));
  }
  function nb(_, e) {
    return t(_).push(t(e));
  }
  function rb(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function cb() {
    return o(function(_, e, n) {
      const r = t(_).querySelectorAll(g(e, n));
      return b(r);
    }, arguments);
  }
  function bb() {
    return o(function(_, e, n) {
      const r = t(_).querySelector(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function ab(_) {
    const e = t(_).queueMicrotask;
    return b(e);
  }
  function fb(_) {
    queueMicrotask(t(_));
  }
  function ob(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function ub(_) {
    const e = t(_).queue;
    return b(e);
  }
  function ib(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function db() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function gb() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, u);
    }, arguments);
  }
  function sb() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function wb() {
    return o(function(_, e, n, r) {
      t(_).removeEventListener(g(e, n), t(r));
    }, arguments);
  }
  function lb() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function mb() {
    return o(function(_, e, n, r) {
      const c = t(e).removeProperty(g(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = p;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function pb(_, e, n, r, c, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, c, a);
  }
  function xb(_, e, n, r, c) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, c);
  }
  function yb(_, e, n, r, c) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, c);
  }
  function hb(_) {
    return t(_).repeat;
  }
  function Sb(_, e) {
    const n = t(_).requestAdapter(t(e));
    return b(n);
  }
  function vb() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Ib(_, e) {
    const n = t(_).requestDevice(t(e));
    return b(n);
  }
  function Ab(_) {
    const e = t(_).requestFullscreen;
    return b(e);
  }
  function Db(_) {
    const e = t(_).requestFullscreen();
    return b(e);
  }
  function Pb(_) {
    const e = t(_).requestIdleCallback;
    return b(e);
  }
  function Mb() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Fb(_) {
    const e = Promise.resolve(t(_));
    return b(e);
  }
  function Tb() {
    return o(function(_, e) {
      URL.revokeObjectURL(g(_, e));
    }, arguments);
  }
  function Bb(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function kb(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function Lb(_) {
    const e = t(_).scheduler;
    return b(e);
  }
  function Eb(_) {
    const e = t(_).scheduler;
    return b(e);
  }
  function Cb(_, e, n, r, c) {
    t(_).scissor(e, n, r, c);
  }
  function Rb(_, e, n, r, c) {
    t(_).scissor(e, n, r, c);
  }
  function Ob() {
    return o(function(_, e, n, r, c) {
      t(_).setAttribute(g(e, n), g(r, c));
    }, arguments);
  }
  function qb(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function Gb() {
    return o(function(_, e, n, r, c, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), F(r, c), a, f >>> 0);
    }, arguments);
  }
  function Vb(_, e, n, r, c) {
    t(_).setIndexBuffer(t(e), N[n], r, c);
  }
  function Wb(_, e, n, r) {
    t(_).setIndexBuffer(t(e), N[n], r);
  }
  function Ub(_, e) {
    t(_).setPipeline(t(e));
  }
  function zb() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function jb() {
    return o(function(_, e, n, r, c) {
      t(_).setProperty(g(e, n), g(r, c));
    }, arguments);
  }
  function Kb() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function Nb() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function Qb(_, e, n, r, c) {
    t(_).setVertexBuffer(e >>> 0, t(n), r, c);
  }
  function Xb(_, e, n, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), r);
  }
  function $b(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function Yb() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function Hb(_, e) {
    t(_).a = e;
  }
  function Jb(_, e) {
    t(_).access = zi[e];
  }
  function Zb(_, e) {
    t(_).addressModeU = j[e];
  }
  function _a(_, e) {
    t(_).addressModeV = j[e];
  }
  function ea(_, e) {
    t(_).addressModeW = j[e];
  }
  function ta(_, e) {
    t(_).alpha = t(e);
  }
  function na(_, e) {
    t(_).alphaMode = Ri[e];
  }
  function ra(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function ca(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function ba(_, e) {
    t(_).arrayStride = e;
  }
  function aa(_, e) {
    t(_).aspect = __[e];
  }
  function fa(_, e) {
    t(_).aspect = __[e];
  }
  function oa(_, e) {
    t(_).attributes = t(e);
  }
  function ua(_, e) {
    t(_).b = e;
  }
  function ia(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function da(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function ga(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function sa(_, e) {
    t(_).bindGroupLayouts = t(e);
  }
  function wa(_, e) {
    t(_).binding = e >>> 0;
  }
  function la(_, e) {
    t(_).binding = e >>> 0;
  }
  function ma(_, e) {
    t(_).blend = t(e);
  }
  function pa(_, e) {
    t(_).body = t(e);
  }
  function xa(_, e) {
    t(_).box = Yi[e];
  }
  function ya(_, e) {
    t(_).buffer = t(e);
  }
  function ha(_, e) {
    t(_).buffer = t(e);
  }
  function Sa(_, e) {
    t(_).buffers = t(e);
  }
  function va(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function Ia(_, e) {
    t(_).clearValue = t(e);
  }
  function Aa(_, e, n) {
    t(_).code = g(e, n);
  }
  function Da(_, e) {
    t(_).color = t(e);
  }
  function Pa(_, e) {
    t(_).colorAttachments = t(e);
  }
  function Ma(_, e) {
    t(_).compare = K[e];
  }
  function Fa(_, e) {
    t(_).compare = K[e];
  }
  function Ta(_, e) {
    t(_).count = e >>> 0;
  }
  function Ba(_, e) {
    t(_).credentials = Xi[e];
  }
  function ka(_, e) {
    t(_).cullMode = Oi[e];
  }
  function La(_, e) {
    t(_).depthBias = e;
  }
  function Ea(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Ca(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Ra(_, e) {
    t(_).depthClearValue = e;
  }
  function Oa(_, e) {
    t(_).depthCompare = K[e];
  }
  function qa(_, e) {
    t(_).depthFailOp = X[e];
  }
  function Ga(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function Va(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function Wa(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function Ua(_, e) {
    t(_).depthStencil = t(e);
  }
  function za(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function ja(_, e) {
    t(_).depthStoreOp = $[e];
  }
  function Ka(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function Na(_, e) {
    t(_).device = t(e);
  }
  function Qa(_, e) {
    t(_).dimension = ji[e];
  }
  function Xa(_, e) {
    t(_).dimension = Y[e];
  }
  function $a(_, e) {
    t(_).dstFactor = J[e];
  }
  function Ya(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function Ha(_, e) {
    t(_).entries = t(e);
  }
  function Ja(_, e) {
    t(_).entries = t(e);
  }
  function Za(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function _f(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function ef(_, e) {
    t(_).externalTexture = t(e);
  }
  function tf(_, e) {
    t(_).failOp = X[e];
  }
  function nf(_, e) {
    t(_).format = P[e];
  }
  function rf(_, e) {
    t(_).format = P[e];
  }
  function cf(_, e) {
    t(_).format = P[e];
  }
  function bf(_, e) {
    t(_).format = Ni[e];
  }
  function af(_, e) {
    t(_).format = P[e];
  }
  function ff(_, e) {
    t(_).format = P[e];
  }
  function of(_, e) {
    t(_).format = P[e];
  }
  function uf(_, e) {
    t(_).fragment = t(e);
  }
  function df(_, e) {
    t(_).frontFace = qi[e];
  }
  function gf(_, e) {
    t(_).g = e;
  }
  function sf(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function wf(_, e) {
    t(_).headers = t(e);
  }
  function lf(_, e) {
    t(_).height = e >>> 0;
  }
  function mf(_, e) {
    t(_).height = e >>> 0;
  }
  function pf(_, e) {
    t(_).height = e >>> 0;
  }
  function xf(_, e, n) {
    t(_).label = g(e, n);
  }
  function yf(_, e, n) {
    t(_).label = g(e, n);
  }
  function hf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Sf(_, e, n) {
    t(_).label = g(e, n);
  }
  function vf(_, e, n) {
    t(_).label = g(e, n);
  }
  function If(_, e, n) {
    t(_).label = g(e, n);
  }
  function Af(_, e, n) {
    t(_).label = g(e, n);
  }
  function Df(_, e, n) {
    t(_).label = g(e, n);
  }
  function Pf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Mf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Ff(_, e, n) {
    t(_).label = g(e, n);
  }
  function Tf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Bf(_, e, n) {
    t(_).label = g(e, n);
  }
  function kf(_, e) {
    t(_).layout = t(e);
  }
  function Lf(_, e) {
    t(_).layout = t(e);
  }
  function Ef(_, e) {
    t(_).loadOp = Q[e];
  }
  function Cf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function Rf(_, e) {
    t(_).lodMinClamp = e;
  }
  function Of(_, e) {
    t(_).magFilter = Z[e];
  }
  function qf(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function Gf(_, e) {
    t(_).mask = e >>> 0;
  }
  function Vf(_, e) {
    t(_).maxAnisotropy = e;
  }
  function Wf(_, e, n) {
    t(_).method = g(e, n);
  }
  function Uf(_, e) {
    t(_).minBindingSize = e;
  }
  function zf(_, e) {
    t(_).minFilter = Z[e];
  }
  function jf(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function Kf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Nf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function Qf(_, e) {
    t(_).mipmapFilter = Gi[e];
  }
  function Xf(_, e) {
    t(_).mode = $i[e];
  }
  function $f(_, e) {
    t(_).module = t(e);
  }
  function Yf(_, e) {
    t(_).module = t(e);
  }
  function Hf(_, e) {
    t(_).multisample = t(e);
  }
  function Jf(_, e) {
    t(_).multisampled = e !== 0;
  }
  function Zf(_, e) {
    t(_).offset = e;
  }
  function _o(_, e) {
    t(_).offset = e;
  }
  function eo(_, e) {
    t(_).offset = e;
  }
  function to(_, e) {
    t(_).onmessage = t(e);
  }
  function no(_, e) {
    t(_).operation = Ei[e];
  }
  function ro(_, e) {
    t(_).origin = t(e);
  }
  function co(_, e) {
    t(_).passOp = X[e];
  }
  function bo(_, e) {
    t(_).powerPreference = Vi[e];
  }
  function ao(_, e) {
    t(_).primitive = t(e);
  }
  function fo(_, e) {
    t(_).querySet = t(e);
  }
  function oo(_, e) {
    t(_).r = e;
  }
  function uo(_, e) {
    t(_).requiredFeatures = t(e);
  }
  function io(_, e) {
    t(_).requiredLimits = t(e);
  }
  function go(_, e) {
    t(_).resolveTarget = t(e);
  }
  function so(_, e) {
    t(_).resource = t(e);
  }
  function wo(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function lo(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function mo(_, e) {
    t(_).sampleType = Ki[e];
  }
  function po(_, e) {
    t(_).sampler = t(e);
  }
  function xo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function yo(_, e) {
    t(_).signal = t(e);
  }
  function ho(_, e) {
    t(_).size = e;
  }
  function So(_, e) {
    t(_).size = e;
  }
  function vo(_, e) {
    t(_).size = t(e);
  }
  function Io(_, e) {
    t(_).srcFactor = J[e];
  }
  function Ao(_, e) {
    t(_).stencilBack = t(e);
  }
  function Do(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function Po(_, e) {
    t(_).stencilFront = t(e);
  }
  function Mo(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function Fo(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function To(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function Bo(_, e) {
    t(_).stencilStoreOp = $[e];
  }
  function ko(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function Lo(_, e) {
    t(_).stepMode = Qi[e];
  }
  function Eo(_, e) {
    t(_).storageTexture = t(e);
  }
  function Co(_, e) {
    t(_).storeOp = $[e];
  }
  function Ro(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function Oo(_, e) {
    t(_).targets = t(e);
  }
  function qo(_, e) {
    t(_).texture = t(e);
  }
  function Go(_, e) {
    t(_).texture = t(e);
  }
  function Vo(_, e) {
    t(_).timestampWrites = t(e);
  }
  function Wo(_, e) {
    t(_).topology = Wi[e];
  }
  function Uo(_, e, n) {
    t(_).type = g(e, n);
  }
  function zo(_, e) {
    t(_).type = Ci[e];
  }
  function jo(_, e) {
    t(_).type = Ui[e];
  }
  function Ko(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function No(_, e) {
    t(_).usage = e >>> 0;
  }
  function Qo(_, e) {
    t(_).usage = e >>> 0;
  }
  function Xo(_, e) {
    t(_).usage = e >>> 0;
  }
  function $o(_, e) {
    t(_).usage = e >>> 0;
  }
  function Yo(_, e) {
    t(_).vertex = t(e);
  }
  function Ho(_, e) {
    t(_).view = t(e);
  }
  function Jo(_, e) {
    t(_).view = t(e);
  }
  function Zo(_, e) {
    t(_).viewDimension = Y[e];
  }
  function _u(_, e) {
    t(_).viewDimension = Y[e];
  }
  function eu(_, e) {
    t(_).viewFormats = t(e);
  }
  function tu(_, e) {
    t(_).viewFormats = t(e);
  }
  function nu(_, e) {
    t(_).visibility = e >>> 0;
  }
  function ru(_, e) {
    t(_).width = e >>> 0;
  }
  function cu(_, e) {
    t(_).width = e >>> 0;
  }
  function bu(_, e) {
    t(_).width = e >>> 0;
  }
  function au(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function fu(_, e) {
    t(_).x = e >>> 0;
  }
  function ou(_, e) {
    t(_).y = e >>> 0;
  }
  function uu(_, e) {
    t(_).z = e >>> 0;
  }
  function iu(_, e, n, r) {
    t(_).shaderSource(t(e), g(n, r));
  }
  function du(_, e, n, r) {
    t(_).shaderSource(t(e), g(n, r));
  }
  function gu(_) {
    return t(_).shiftKey;
  }
  function su(_) {
    return t(_).shiftKey;
  }
  function wu(_) {
    const e = t(_).signal;
    return b(e);
  }
  function lu(_, e) {
    const n = t(e).stack, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function mu(_) {
    t(_).start();
  }
  function pu() {
    const _ = typeof global > "u" ? null : global;
    return w(_) ? 0 : b(_);
  }
  function xu() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return w(_) ? 0 : b(_);
  }
  function yu() {
    const _ = typeof self > "u" ? null : self;
    return w(_) ? 0 : b(_);
  }
  function hu() {
    const _ = typeof window > "u" ? null : window;
    return w(_) ? 0 : b(_);
  }
  function Su(_) {
    return t(_).status;
  }
  function vu(_, e, n, r, c) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, c >>> 0);
  }
  function Iu(_, e, n, r, c) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, c >>> 0);
  }
  function Au(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Du(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Pu(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Mu(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Fu(_, e, n, r, c) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Tu(_, e, n, r, c) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Bu() {
    return o(function(_) {
      const e = JSON.stringify(t(_));
      return b(e);
    }, arguments);
  }
  function ku(_) {
    const e = t(_).style;
    return b(e);
  }
  function Lu(_, e) {
    t(_).submit(t(e));
  }
  function Eu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Cu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, s);
    }, arguments);
  }
  function Ru() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Ou() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m) {
      t(_).texImage3D(e >>> 0, n, r, c, a, f, u, d >>> 0, s >>> 0, m);
    }, arguments);
  }
  function qu() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m) {
      t(_).texImage3D(e >>> 0, n, r, c, a, f, u, d >>> 0, s >>> 0, t(m));
    }, arguments);
  }
  function Gu(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function Vu(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function Wu(_, e, n, r, c, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, c, a);
  }
  function Uu(_, e, n, r, c, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, c, a, f);
  }
  function zu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function ju() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Ku() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Nu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Qu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Xu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function $u() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function Yu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, s);
    }, arguments);
  }
  function Hu() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Ju() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function Zu() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function _0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function e0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function t0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, h);
    }, arguments);
  }
  function n0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function r0() {
    return o(function(_) {
      const e = t(_).text();
      return b(e);
    }, arguments);
  }
  function c0(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return b(r);
  }
  function b0(_, e) {
    const n = t(_).then(t(e));
    return b(n);
  }
  function a0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function f0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function o0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function u0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function i0(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function d0(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function g0(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function s0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function w0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function l0(_, e, n, r) {
    t(_).uniform2uiv(t(e), F(n, r));
  }
  function m0(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function p0(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function x0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function y0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function h0(_, e, n, r) {
    t(_).uniform3uiv(t(e), F(n, r));
  }
  function S0(_, e, n, r, c, a) {
    t(_).uniform4f(t(e), n, r, c, a);
  }
  function v0(_, e, n, r, c, a) {
    t(_).uniform4f(t(e), n, r, c, a);
  }
  function I0(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function A0(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function D0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function P0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function M0(_, e, n, r) {
    t(_).uniform4uiv(t(e), F(n, r));
  }
  function F0(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function T0(_, e, n, r, c) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, c));
  }
  function B0(_, e, n, r, c) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, c));
  }
  function k0(_, e, n, r, c) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(r, c));
  }
  function L0(_, e, n, r, c) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(r, c));
  }
  function E0(_, e, n, r, c) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, c));
  }
  function C0(_, e, n, r, c) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, c));
  }
  function R0(_, e, n, r, c) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(r, c));
  }
  function O0(_, e, n, r, c) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(r, c));
  }
  function q0(_, e, n, r, c) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, c));
  }
  function G0(_, e, n, r, c) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, c));
  }
  function V0(_, e, n, r, c) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(r, c));
  }
  function W0(_, e, n, r, c) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(r, c));
  }
  function U0(_) {
    t(_).unmap();
  }
  function z0(_, e) {
    t(_).unobserve(t(e));
  }
  function j0(_, e) {
    const n = t(e).url, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function K0(_, e) {
    t(_).useProgram(t(e));
  }
  function N0(_, e) {
    t(_).useProgram(t(e));
  }
  function Q0(_) {
    const e = t(_).userAgentData;
    return w(e) ? 0 : b(e);
  }
  function X0() {
    return o(function(_, e) {
      const n = t(e).userAgent, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function $0(_) {
    const e = t(_).value;
    return b(e);
  }
  function Y0(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function H0(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function J0(_, e, n, r, c, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, c, a);
  }
  function Z0(_, e, n, r, c, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function _i(_, e, n, r, c, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function ei(_, e, n, r, c) {
    t(_).viewport(e, n, r, c);
  }
  function ti(_, e, n, r, c) {
    t(_).viewport(e, n, r, c);
  }
  function ni(_) {
    const e = t(_).visibilityState;
    return (Hi.indexOf(e) + 1 || 3) - 1;
  }
  function ri(_) {
    console.warn(t(_));
  }
  function ci(_) {
    const e = t(_).webkitFullscreenElement;
    return w(e) ? 0 : b(e);
  }
  function bi(_) {
    t(_).webkitRequestFullscreen();
  }
  function ai(_) {
    return t(_).width;
  }
  function fi() {
    return o(function(_, e, n, r, c, a, f) {
      t(_).writeBuffer(t(e), n, L(r, c), a, f);
    }, arguments);
  }
  function oi() {
    return o(function(_, e, n, r, c, a) {
      t(_).writeTexture(t(e), L(n, r), t(c), t(a));
    }, arguments);
  }
  function ui(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, Li);
    return b(n);
  }
  function ii(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function di(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function gi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function si(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function wi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function li(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function mi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, D);
    return b(n);
  }
  function pi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3125, Bi);
    return b(n);
  }
  function xi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_4933, ki);
    return b(n);
  }
  function yi(_) {
    return b(_);
  }
  function hi(_, e) {
    const n = x(_, e);
    return b(n);
  }
  function Si(_, e) {
    const n = Zi(_, e);
    return b(n);
  }
  function vi(_, e) {
    const n = A(_, e);
    return b(n);
  }
  function Ii(_, e) {
    const n = _d(_, e);
    return b(n);
  }
  function Ai(_, e) {
    const n = ed(_, e);
    return b(n);
  }
  function Di(_, e) {
    const n = F(_, e);
    return b(n);
  }
  function Pi(_, e) {
    const n = L(_, e);
    return b(n);
  }
  function Mi(_, e) {
    const n = g(_, e);
    return b(n);
  }
  function Fi(_) {
    const e = t(_);
    return b(e);
  }
  function Ti(_) {
    fd(_);
  }
  function Bi(_, e) {
    i.__wasm_bindgen_func_elem_3458(_, e);
  }
  function D(_, e, n) {
    i.__wasm_bindgen_func_elem_3456(_, e, b(n));
  }
  function ki(_, e, n) {
    i.__wasm_bindgen_func_elem_4934(_, e, b(n));
  }
  function Li(_, e, n, r) {
    i.__wasm_bindgen_func_elem_3464(_, e, b(n), b(r));
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
  ], Ei = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Ci = [
    "uniform",
    "storage",
    "read-only-storage"
  ], Ri = [
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
  ], Oi = [
    "none",
    "front",
    "back"
  ], Z = [
    "nearest",
    "linear"
  ], qi = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], Gi = [
    "nearest",
    "linear"
  ], Vi = [
    "low-power",
    "high-performance"
  ], Wi = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], Ui = [
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
  ], zi = [
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
  ], ji = [
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
  ], Ki = [
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
  ], Ni = [
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
  ], Qi = [
    "vertex",
    "instance"
  ], Xi = [
    "omit",
    "same-origin",
    "include"
  ], $i = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], Yi = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Hi = [
    "hidden",
    "visible"
  ];
  function b(_) {
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
      const c = _.description;
      return c == null ? "Symbol" : `Symbol(${c})`;
    }
    if (e == "function") {
      const c = _.name;
      return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function";
    }
    if (Array.isArray(_)) {
      const c = _.length;
      let a = "[";
      c > 0 && (a += z(_[0]));
      for (let f = 1; f < c; f++) a += ", " + z(_[f]);
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
  function Ji(_) {
    _ < 132 || (I[_] = B, B = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, td().subarray(_ / 4, _ / 4 + e);
  }
  function Zi(_, e) {
    return _ = _ >>> 0, nd().subarray(_ / 2, _ / 2 + e);
  }
  function A(_, e) {
    return _ = _ >>> 0, rd().subarray(_ / 4, _ / 4 + e);
  }
  function _d(_, e) {
    return _ = _ >>> 0, cd().subarray(_ / 1, _ / 1 + e);
  }
  function ed(_, e) {
    return _ = _ >>> 0, bd().subarray(_ / 2, _ / 2 + e);
  }
  function F(_, e) {
    return _ = _ >>> 0, ad().subarray(_ / 4, _ / 4 + e);
  }
  function L(_, e) {
    return _ = _ >>> 0, T().subarray(_ / 1, _ / 1 + e);
  }
  let M = null;
  function l() {
    return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== i.memory.buffer) && (M = new DataView(i.memory.buffer)), M;
  }
  let E = null;
  function td() {
    return (E === null || E.byteLength === 0) && (E = new Float32Array(i.memory.buffer)), E;
  }
  let C = null;
  function nd() {
    return (C === null || C.byteLength === 0) && (C = new Int16Array(i.memory.buffer)), C;
  }
  let R = null;
  function rd() {
    return (R === null || R.byteLength === 0) && (R = new Int32Array(i.memory.buffer)), R;
  }
  let O = null;
  function cd() {
    return (O === null || O.byteLength === 0) && (O = new Int8Array(i.memory.buffer)), O;
  }
  function g(_, e) {
    return _ = _ >>> 0, ud(_, e);
  }
  let q = null;
  function bd() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(i.memory.buffer)), q;
  }
  let G = null;
  function ad() {
    return (G === null || G.byteLength === 0) && (G = new Uint32Array(i.memory.buffer)), G;
  }
  let V = null;
  function T() {
    return (V === null || V.byteLength === 0) && (V = new Uint8Array(i.memory.buffer)), V;
  }
  function t(_) {
    return I[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      i.__wbindgen_export3(b(n));
    }
  }
  let I = new Array(128).fill(void 0);
  I.push(void 0, null, true, false);
  let B = I.length;
  function w(_) {
    return _ == null;
  }
  function v(_, e, n, r) {
    const c = {
      a: _,
      b: e,
      cnt: 1,
      dtor: n
    }, a = (...f) => {
      c.cnt++;
      const u = c.a;
      c.a = 0;
      try {
        return r(u, c.b, ...f);
      } finally {
        c.a = u, a._wbg_cb_unref();
      }
    };
    return a._wbg_cb_unref = () => {
      --c.cnt === 0 && (c.dtor(c.a, c.b), c.a = 0, H.unregister(c));
    }, H.register(a, c, c), a;
  }
  function y(_, e, n) {
    if (n === void 0) {
      const u = k.encode(_), d = e(u.length, 1) >>> 0;
      return T().subarray(d, d + u.length).set(u), p = u.length, d;
    }
    let r = _.length, c = e(r, 1) >>> 0;
    const a = T();
    let f = 0;
    for (; f < r; f++) {
      const u = _.charCodeAt(f);
      if (u > 127) break;
      a[c + f] = u;
    }
    if (f !== r) {
      f !== 0 && (_ = _.slice(f)), c = n(c, r, r = f + _.length * 3, 1) >>> 0;
      const u = T().subarray(c + f, c + r), d = k.encodeInto(_, u);
      f += d.written, c = n(c, r, f, 1) >>> 0;
    }
    return p = f, c;
  }
  function fd(_) {
    const e = t(_);
    return Ji(_), e;
  }
  let W = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  W.decode();
  const od = 2146435072;
  let U = 0;
  function ud(_, e) {
    return U += e, U >= od && (W = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), W.decode(), U = e), W.decode(T().subarray(_, _ + e));
  }
  const k = new TextEncoder();
  "encodeInto" in k || (k.encodeInto = function(_, e) {
    const n = k.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let p = 0, i;
  function id(_) {
    i = _;
  }
  URL = globalThis.URL;
  const S = await t_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: Ti,
      __wbg_new_8a6f238a6ece86ea: pc,
      __wbg_stack_0ed75d68575b0f3c: lu,
      __wbg_error_7534b8e9a36f1ab4: Mn,
      __wbg_fetch_f1856afdb49415d1: Ln,
      __wbindgen_object_clone_ref: Fi,
      __wbg_requestFullscreen_86fc6cdb76000482: Ab,
      __wbg_scheduler_5156bb61cc1cf589: Eb,
      __wbg_getCoalescedEvents_21492912fd0145ec: $n,
      __wbg_requestIdleCallback_1b8d644ff564208f: Pb,
      __wbg_offsetX_cb6a38e6f23cb4a6: Cc,
      __wbg_offsetY_43e21941c5c1f8bf: Rc,
      __wbg_cancel_09c394f0894744eb: xe,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: ci,
      __wbg_requestFullscreen_9f0611438eb929cf: Db,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: bi,
      __wbg_scheduler_48482a9974eeacbd: Lb,
      __wbg_postTask_41d93e93941e4a3d: Jc,
      __wbg_userAgentData_f7b0e61c05c54315: Q0,
      __wbg_brands_a1e7a2bce052128f: ae,
      __wbg_brand_9562792cbb4735c3: be,
      __wbg_prototype_c28bca39c45aba9b: eb,
      __wbg_animate_6ec571f163cf6f8d: A_,
      __wbg_play_63bc12f42e16af91: zc,
      __wbg_Window_d1bf622f71ff0629: c_,
      __wbg_performance_7a3ffd0b17f663ad: Gc,
      __wbg_now_2c95c9de01293173: Fc,
      __wbg_set_color_attachments_81e56abd7f11d38b: Pa,
      __wbg_set_label_10c0715c06c574ce: xf,
      __wbg_set_view_dc1937ba74f6a24a: Jo,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: Ra,
      __wbg_set_depth_load_op_0e48f976ce8bf626: Ga,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: ja,
      __wbg_set_depth_read_only_16d1277d6c444182: Wa,
      __wbg_set_stencil_clear_value_c88c52b70d827549: Do,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: Mo,
      __wbg_set_stencil_store_op_b92786567b815d0f: Bo,
      __wbg_set_stencil_read_only_54652ff66298c4c5: To,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: za,
      __wbg_set_query_set_1f3c39edf379c9f9: fo,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: ga,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: Ya,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: Vo,
      __wbg_beginRenderPass_c95ff061c0d906d5: k_,
      __wbg_set_width_d1fb21b0573a430a: cu,
      __wbg_set_height_308d7c58bb7196f5: lf,
      __wbg_set_depth_or_array_layers_922a1b1547bf00be: Va,
      __wbg_label_37d2cc4e867fe710: Xr,
      __wbg_set_label_5871c6a4116d78e4: vf,
      __wbg_finish_cafc9caa4b3df56c: Cn,
      __wbg_finish_42f37cad38abaf27: En,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: qr,
      __wbg_set_dst_factor_01ac107dce46775a: $a,
      __wbg_set_operation_872810b2c7ad34bb: no,
      __wbg_set_src_factor_d869078ba948812f: Io,
      __wbg_set_texture_18b0fd044bd7238a: qo,
      __wbg_set_mip_level_893bb594663b5970: jf,
      __wbg_set_x_6e4718e5e565b05c: fu,
      __wbg_set_y_7ad35b82f29b7b2e: ou,
      __wbg_set_z_74f5725616541ab5: uu,
      __wbg_set_origin_a91df496455ed18c: ro,
      __wbg_set_aspect_a06243383a09c435: fa,
      __wbg_Window_89f1205e6b84c5cf: r_,
      __wbg_gpu_97c682b8bbd6da29: Tr,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: b_,
      __wbg_set_a_cb5a15147778942a: Hb,
      __wbg_set_b_130b6d20afdc640c: ua,
      __wbg_set_g_a202edac674d3195: gf,
      __wbg_set_r_d02e085dc65c7ba3: oo,
      __wbg_writeBuffer_204a3aba84ea260c: fi,
      __wbg_set_bytes_per_row_cc544005f5ac177d: va,
      __wbg_set_rows_per_image_91e30e4ece899f1e: wo,
      __wbg_set_offset_50c0ba4bb906a321: Zf,
      __wbg_writeTexture_bf31683b9d6c6d14: oi,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: Oc,
      __wbg_submit_5f96af711b83c2df: Lu,
      __wbg_getMappedRange_9a20d37843bbc5dd: br,
      __wbg_unmap_80761f81f18ec521: U0,
      __wbg_destroy_834dd203329bdb3c: en,
      __wbg_mapAsync_c9718fcf0566073c: tc,
      __wbg_set_size_61d185241554da71: So,
      __wbg_set_usage_063311abcbeb0c9f: No,
      __wbg_set_mapped_at_creation_0d65690c0978994b: qf,
      __wbg_set_label_d7cc9fef79f6607e: Mf,
      __wbg_createBuffer_e488cd40ceda9067: _t,
      __wbg_set_address_mode_u_0099f90d7d87696a: Zb,
      __wbg_set_address_mode_v_04f9373166ede6c4: _a,
      __wbg_set_address_mode_w_b6c10646d3e36154: ea,
      __wbg_set_compare_247a44f5e76066a8: Fa,
      __wbg_set_lod_max_clamp_35cfaf5ea55bb7aa: Cf,
      __wbg_set_lod_min_clamp_30d6a6d6ab2266ba: Rf,
      __wbg_set_mag_filter_30e1d228621e7c54: Of,
      __wbg_set_min_filter_6674175c1bc1ef98: zf,
      __wbg_set_mipmap_filter_40fc07fcab34eb41: Qf,
      __wbg_set_max_anisotropy_32559abff96ae565: Vf,
      __wbg_set_label_6e50ef4fd57a0f6f: Af,
      __wbg_createSampler_a3dfb0f2f89fdc2b: gt,
      __wbg_set_format_dad716a408041ce0: af,
      __wbg_set_size_b0ef925501e008f2: vo,
      __wbg_set_usage_f141b5de159a42da: $o,
      __wbg_set_label_da0fad57dde6793d: Ff,
      __wbg_set_dimension_b61a8ae2d358aa5b: Qa,
      __wbg_set_mip_level_count_6f365469d581bead: Nf,
      __wbg_set_sample_count_954d237c60a25f1d: lo,
      __wbg_set_view_formats_d410e2098aeda477: tu,
      __wbg_createTexture_cdd92f03ef413b88: xt,
      __wbg_set_entries_2cd3545ee493b9d8: Ha,
      __wbg_set_layout_5bb0e3710064d78b: kf,
      __wbg_set_label_1eb936d3881c4a73: yf,
      __wbg_createBindGroup_0916ed8027ba2c5a: He,
      __wbg_set_code_d96e8bd591fe4d27: Aa,
      __wbg_set_label_4592679c60c3ae0e: hf,
      __wbg_createShaderModule_2b4d1147549bca28: wt,
      __wbg_set_label_4f94deb040009907: Sf,
      __wbg_createCommandEncoder_e817b588d596b7d6: et,
      __wbg_set_bind_group_layouts_0304829711909964: sa,
      __wbg_set_label_81a922ba355b9c4e: Df,
      __wbg_createPipelineLayout_87ecd84a502ca7b4: bt,
      __wbg_set_module_b00779338e12d7cb: Yf,
      __wbg_set_entry_point_d34fa93493d1dc0e: _f,
      __wbg_set_buffers_c36e59052d233445: Sa,
      __wbg_set_layout_cf44c2080938f1e8: Lf,
      __wbg_set_vertex_84e0affabea33233: Yo,
      __wbg_set_label_ee8b5ccc3ceeadae: Tf,
      __wbg_set_format_1e6dd64c90091826: rf,
      __wbg_set_depth_compare_f44e1ef737045c19: Oa,
      __wbg_set_depth_write_enabled_47d54383526f6b41: Ka,
      __wbg_set_depth_bias_6f054d893efee16d: La,
      __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: Ea,
      __wbg_set_depth_bias_slope_scale_79c154be54e419a7: Ca,
      __wbg_set_compare_13ccce3149fc8362: Ma,
      __wbg_set_depth_fail_op_a697253b12a479e1: qa,
      __wbg_set_fail_op_45d1f0ecf070d60c: tf,
      __wbg_set_pass_op_10f19e715ae2c3ef: co,
      __wbg_set_stencil_back_f7d6690835becc87: Ao,
      __wbg_set_stencil_front_b0e57ed3db28a814: Po,
      __wbg_set_stencil_read_mask_6d091cd38b736049: Fo,
      __wbg_set_stencil_write_mask_775ac04ab32e79dc: ko,
      __wbg_set_depth_stencil_18746e1deb2f030f: Ua,
      __wbg_set_module_70bd7be1f2808c25: $f,
      __wbg_set_targets_8396bdc905d927e9: Oo,
      __wbg_set_entry_point_37d0e849bed76259: Za,
      __wbg_set_fragment_0767ccf58ccf1f6e: uf,
      __wbg_set_count_9f86d0fc02d08e45: Ta,
      __wbg_set_mask_d8e7d97222c8a92e: Gf,
      __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: ra,
      __wbg_set_multisample_8821c65822c70695: Hf,
      __wbg_set_cull_mode_e2b289219d281f62: ka,
      __wbg_set_front_face_3c32fabea21988fa: df,
      __wbg_set_strip_index_format_d819e0c5b56ce30e: Ro,
      __wbg_set_topology_ad5745a55cfa852b: Wo,
      __wbg_set_unclipped_depth_05a825ce1721e8ed: Ko,
      __wbg_set_primitive_8ec2530289b383b9: ao,
      __wbg_createRenderPipeline_5757ddd273de2e48: ut,
      __wbg_set_entries_7ced1e5c2593516b: Ja,
      __wbg_set_label_6d2e77710a43dc8c: If,
      __wbg_createBindGroupLayout_433fd88c480d15ee: Ye,
      __wbg_end_5a7ce60dc0f49d42: Pn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: io,
      __wbg_set_required_features_505229173e5ae00f: uo,
      __wbg_set_label_fcbb40adcedf7a3a: Bf,
      __wbg_requestDevice_acf949c0a7d11096: Ib,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: ur,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: tr,
      __wbg_set_device_cf77f0192bc5144c: Na,
      __wbg_set_format_f98f8a95c86d8cc1: ff,
      __wbg_set_usage_e94a8ea3a622b561: Xo,
      __wbg_set_alpha_mode_ea0e62378a600722: na,
      __wbg_set_view_formats_57015785ec512612: eu,
      __wbg_configure_9ddad01510ae8865: ze,
      __wbg_set_dimension_f73df134b3cb9008: Xa,
      __wbg_set_format_17bbec4e26222ce0: nf,
      __wbg_set_aspect_24f00699ffc05e48: aa,
      __wbg_set_base_array_layer_8a27534c79ebf816: ia,
      __wbg_set_array_layer_count_fbec00646c2f76f0: ca,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: da,
      __wbg_set_mip_level_count_11613862db4f5326: Kf,
      __wbg_set_label_a9e60f11d8f6d907: Pf,
      __wbg_set_usage_8a7a3a48dde89c84: Qo,
      __wbg_createView_da8865cdd09ec9d5: vt,
      __wbg_set_power_preference_ad90ccb2239fef97: bo,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: Sb,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: Or,
      __wbg_queue_19586e9507f5e981: ub,
      __wbg_drawIndexed_61f900a3bae1176a: hn,
      __wbg_setPipeline_beee24fb5690e169: Ub,
      __wbg_setBindGroup_59293f4cce3ae9cc: Gb,
      __wbg_setBindGroup_1e02fb4f10e03fb5: qb,
      __wbg_setIndexBuffer_1cfc93f884167fc9: Vb,
      __wbg_setIndexBuffer_f0e21a93f9ba1002: Wb,
      __wbg_setVertexBuffer_0e2ad0c3f14b93dc: Qb,
      __wbg_setVertexBuffer_5090dba5d6df1168: Xb,
      __wbg_set_binding_b9f5989194044799: wa,
      __wbg_set_resource_e981078f9ddeee64: so,
      __wbg_set_attributes_9241554310424d07: oa,
      __wbg_set_array_stride_6ac1c0f48cbb1a6e: ba,
      __wbg_set_step_mode_e6ef4bb885b3b66a: Lo,
      __wbg_set_buffer_c7c4bf990df518a5: ha,
      __wbg_set_visibility_db1e452e6f23b84d: nu,
      __wbg_set_binding_f152b4f7c9a738e4: la,
      __wbg_set_sampler_a3c99ec90976e6ff: po,
      __wbg_set_texture_b1e40b7ea5ec46d9: Go,
      __wbg_set_storage_texture_e6cb7da67d8c6fce: Eo,
      __wbg_set_external_texture_743e2b3e660a1b87: ef,
      __wbg_set_load_op_de7ca59cc25dfb40: Ef,
      __wbg_set_store_op_5185ea291265ee63: Co,
      __wbg_set_view_330ed9fc9fcc4d01: Ho,
      __wbg_set_clear_value_576d8a3bda7ba8cc: Ia,
      __wbg_set_resolve_target_cce9edc587b4211e: go,
      __wbg_set_buffer_9e1ebf8ed6567298: ya,
      __wbg_set_offset_99d8916143968ec7: eo,
      __wbg_set_size_4a5f3caa1cb0f6ec: ho,
      __wbg_set_format_237204cc87ea4982: cf,
      __wbg_set_alpha_e58cc49c799f170e: ta,
      __wbg_set_color_5c69a2b8e768328d: Da,
      __wbg_set_blend_450723fd40147c64: ma,
      __wbg_set_write_mask_fc328072f01cb48d: au,
      __wbg_set_type_8131ac6aa51a1923: jo,
      __wbg_set_multisampled_2ae606400626ad4f: Jf,
      __wbg_set_has_dynamic_offset_45e6a78176745114: sf,
      __wbg_set_min_binding_size_c7f7fc1040f0d69b: Uf,
      __wbg_set_type_65c8734c99356bd7: zo,
      __wbg_set_sample_type_12f50c8927ad99ab: mo,
      __wbg_set_view_dimension_e40d2151f56ba216: _u,
      __wbg_set_format_fa63d24489fef366: of,
      __wbg_set_access_318627865be26608: Jb,
      __wbg_set_view_dimension_7031d64401f616a4: Zo,
      __wbg_set_format_313c8f10a7e36a0c: bf,
      __wbg_set_offset_697e85d970df2f50: _o,
      __wbg_set_shader_location_01be15233cdb0803: xo,
      __wbg_queueMicrotask_5bb536982f78a56f: fb,
      __wbg_queueMicrotask_0aa0a927f78f5d98: ab,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: Wr,
      __wbg_blendFunc_2ef59299d10c662d: ee,
      __wbg_colorMask_177d9762658e5e28: Ee,
      __wbg_depthFunc_f670d4cbb9cd0913: Yt,
      __wbg_depthMask_75a36d0065471a4b: Jt,
      __wbg_fenceSync_c52a4e24eabfa0d3: Bn,
      __wbg_frontFace_d4a6507ad2939b5c: Nn,
      __wbg_uniform1ui_a0f911ff174715d0: i0,
      __wbg_beginQuery_0fdf154e1da0e73d: B_,
      __wbg_bindBuffer_c9068e8712a034f5: O_,
      __wbg_blendColor_e799d452ab2a5788: X_,
      __wbg_clearDepth_670099db422a4f91: Ae,
      __wbg_deleteSync_c8e4a9c735f71d18: Wt,
      __wbg_depthRange_337bf254e67639bb: Zt,
      __wbg_drawArrays_075228181299b824: wn,
      __wbg_readBuffer_9eb461d6857295f0: ib,
      __wbg_useProgram_fe720ade4d3b6edb: N0,
      __wbg_bindSampler_96f0e90e7bc31da9: U_,
      __wbg_bindTexture_b2b7b1726a83f93e: z_,
      __wbg_createQuery_7988050efd7e4c48: ot,
      __wbg_deleteQuery_ea8bf1954febd774: Ct,
      __wbg_drawBuffers_5eccfaacc6560299: pn,
      __wbg_linkProgram_6600dd2c0863bbfd: Hr,
      __wbg_pixelStorei_2a65936c11b710fe: Wc,
      __wbg_stencilMask_732dcc5aada10e4c: Mu,
      __wbg_attachShader_b36058e5c9eeaf54: T_,
      __wbg_clearStencil_5d243d0dff03c315: De,
      __wbg_createBuffer_26534c05e01b8559: Je,
      __wbg_createShader_e3ac08ed8c5b14b2: lt,
      __wbg_deleteBuffer_ab099883c168644d: Tt,
      __wbg_deleteShader_aaf3b520a64d5d9d: Gt,
      __wbg_getExtension_3c0cb5ae01bb4b17: rr,
      __wbg_getParameter_2e1f97ecaab76274: or,
      __wbg_shaderSource_32425cfe6e5a1e52: iu,
      __wbg_activeTexture_6f9a710514686c24: x_,
      __wbg_blendEquation_e9b99928ed1494ad: J_,
      __wbg_compileShader_94718a93495d565d: Oe,
      __wbg_createProgram_9b7710a1f2701c2c: ft,
      __wbg_createSampler_da6bb96c9ffaaa27: st,
      __wbg_createTexture_16d2c8a3d7d4a75a: pt,
      __wbg_deleteProgram_9298fb3e3c1d3a78: Lt,
      __wbg_deleteSampler_c6b68c4071841afa: qt,
      __wbg_deleteTexture_9d411c0e60ffa324: zt,
      __wbg_polygonOffset_4b3158d8ed028862: Qc,
      __wbg_texParameteri_0d45be2c88d6bad8: Gu,
      __wbg_texStorage2D_9504743abf5a986a: Wu,
      __wbg_texStorage3D_e9e1b58fee218abe: Uu,
      __wbg_bindFramebuffer_031c73ba501cb8f6: q_,
      __wbg_blitFramebuffer_d730a23ab4db248e: ne,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: V_,
      __wbg_bindVertexArray_78220d1edb1d2382: N_,
      __wbg_createFramebuffer_41512c38358a41c4: nt,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: kt,
      __wbg_getSyncParameter_7d11ab875b41617e: vr,
      __wbg_samplerParameterf_f070d2b69b1e2d46: Bb,
      __wbg_samplerParameteri_8e4c4bcead0ee669: kb,
      __wbg_blendFuncSeparate_95465944f788a092: Z_,
      __wbg_createRenderbuffer_a601226a6a680dbe: dt,
      __wbg_createVertexArray_ad5294951ae57497: St,
      __wbg_deleteRenderbuffer_096edada57729468: Rt,
      __wbg_deleteVertexArray_7bc7f92769862f93: Kt,
      __wbg_getQueryParameter_5d6af051438ae479: lr,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: pr,
      __wbg_stencilOpSeparate_4657523b1d3b184f: Fu,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: E_,
      __wbg_bufferData_32d26eba0c74a53c: oe,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: ir,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: yr,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: Dr,
      __wbg_readPixels_6ea8e288a8673282: gb,
      __wbg_renderbufferStorage_1bc02383614b76b2: xb,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: Xe,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: $e,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: sn,
      __wbg_getIndexedParameter_ca1693c768bc4934: cr,
      __wbg_getProgramParameter_92e4540ca9da06b2: sr,
      __wbg_stencilFuncSeparate_10d043d0af14366f: vu,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: Au,
      __wbg_texImage3D_2082006a8a9b28a7: Ou,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: F0,
      __wbg_vertexAttribDivisor_744c0ca468594894: H0,
      __wbg_framebufferTexture2D_c283e928186aa542: Un,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: zr,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: Y_,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: Ir,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: Gn,
      __wbg_getSupportedExtensions_57142a6b598d7787: hr,
      __wbg_clientWaitSync_21865feaeb76a9a5: Be,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: zn,
      __wbg_texSubImage3D_59b8e24fb05787aa: t0,
      __wbg_uniform2fv_2fb47cfe06330cc7: g0,
      __wbg_uniform2iv_095baf208f172131: s0,
      __wbg_uniform3fv_c0872003729939a5: p0,
      __wbg_uniform3iv_6aa2b0791e659d14: x0,
      __wbg_uniform4fv_498bd80dc5aa16ff: I0,
      __wbg_uniform4iv_8a8219fda39dffd5: P0,
      __wbg_enableVertexAttribArray_475e06c31777296d: Sn,
      __wbg_uniform2uiv_3030d7e769f5e82a: l0,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: h0,
      __wbg_uniform4uiv_046ee400bb80547d: M0,
      __wbg_disableVertexAttribArray_24a020060006b10f: rn,
      __wbg_clearBufferfv_ac87d92e2f45d80c: he,
      __wbg_clearBufferiv_69ff24bb52ec4c88: Se,
      __wbg_clearBufferuiv_8ad59a8219aafaca: ve,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: Z0,
      __wbg_drawElementsInstanced_d41fc920ae24717c: yn,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: pb,
      __wbg_texSubImage3D_45591e5655d1ed5c: _0,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: T0,
      __wbg_uniformMatrix3fv_6f822361173d8046: E0,
      __wbg_uniformMatrix4fv_0e724dbebd372526: q0,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: J0,
      __wbg_bindBufferRange_009d206fe9e4151e: C_,
      __wbg_bufferData_98f6c413a8f0f139: ie,
      __wbg_texSubImage3D_3b653017c4c5d721: Zu,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: k0,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: L0,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: R0,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: O0,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: V0,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: W0,
      __wbg_readPixels_55b18304384e073d: db,
      __wbg_texImage3D_bd2b0bd2cfcdb278: qu,
      __wbg_texSubImage3D_47643556a8a4bf86: e0,
      __wbg_texSubImage3D_18d7f3c65567c885: Ju,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: n0,
      __wbg_texSubImage3D_1102c12a20bf56d5: Hu,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: Ve,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: Ue,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: Ne,
      __wbg_bufferSubData_3e902f031adf13fd: ge,
      __wbg_compressedTexSubImage2D_684350eb62830032: Ge,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: We,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Xn,
      __wbg_texSubImage2D_edf5bd70fda3feaf: Yu,
      __wbg_clear_7187030f892c5ca0: Te,
      __wbg_flush_e322496f5412e567: On,
      __wbg_texImage2D_13414a4692836804: Cu,
      __wbg_texSubImage2D_bf72e56edeeed376: Qu,
      __wbg_texSubImage2D_e193f1d28439217c: $u,
      __wbg_enable_d1ac04dfdd2fb3ae: In,
      __wbg_texSubImage2D_117d29278542feb0: zu,
      __wbg_texSubImage2D_bd034db2e58c352c: Nu,
      __wbg_texSubImage2D_5d270af600a7fc4a: Ku,
      __wbg_texSubImage2D_d17a39cdec4a3495: Xu,
      __wbg_disable_7fe6fb3e97717f88: bn,
      __wbg_scissor_2ff8f18f05a6d408: Cb,
      __wbg_texImage2D_087ef94df78081f0: Eu,
      __wbg_viewport_df236eac68bc7467: ti,
      __wbg_cullFace_e7e711a14d2c3f48: Pt,
      __wbg_endQuery_54f0627d4c931318: Dn,
      __wbg_uniform1f_b500ede5b612bea2: a0,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: u0,
      __wbg_uniform4f_f6b5e2024636033a: v0,
      __wbg_instanceof_Window_ed49b2db8df90359: Ur,
      __wbg_matchMedia_91d4fc9729dc3c84: nc,
      __wbg_queueMicrotask_885fd8605352e25d: ob,
      __wbg_devicePixelRatio_5c458affc89fc209: nn,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: Hn,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: pe,
      __wbg_requestIdleCallback_c9c643f8210d435b: Mb,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: me,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: vb,
      __wbg_clearTimeout_df03cf00269bc442: Me,
      __wbg_setTimeout_681abd84926a4da3: Kb,
      __wbg_setTimeout_eff32631ea138533: Nb,
      __wbg_document_ee35a3d3ae34ef6c: un,
      __wbg_location_df7ca06c93e51763: _c,
      __wbg_navigator_43be698ba96fc088: uc,
      __wbg_setAttribute_cc8e4c8a2a008508: Ob,
      __wbg_setPointerCapture_420db6f6826eb74b: zb,
      __wbg_activeElement_1554b6917654f8d6: p_,
      __wbg_createElement_49f60fdcaae809c8: tt,
      __wbg_querySelector_c3b0df2d58eec220: bb,
      __wbg_visibilityState_43b7b74940e07d22: ni,
      __wbg_getElementById_e34377b79d7285f6: nr,
      __wbg_fullscreenElement_25b445e2961e68ba: Qn,
      __wbg_querySelectorAll_1283aae52043a951: cb,
      __wbg_body_f67922363a220026: ce,
      __wbg_fetch_afb6a4b6cacf876d: kn,
      __wbg_navigator_4478931f32ebca57: ic,
      __wbg_focus_128ff465f65677cc: qn,
      __wbg_style_0b7c9bd318f8b807: ku,
      __wbg_blendFunc_446658e7231ab9c8: te,
      __wbg_colorMask_7a8dbc86e7376a9b: Ce,
      __wbg_depthFunc_eb3aa05361dd2eaa: $t,
      __wbg_depthMask_103091329ca1a750: Ht,
      __wbg_frontFace_027e2ec7a7bc347c: Kn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: R_,
      __wbg_blendColor_1d50ac87d9a2794b: Q_,
      __wbg_clearDepth_2b109f644a783a53: Ie,
      __wbg_depthRange_5579d448b9d7de57: _n,
      __wbg_drawArrays_2be89c369a29f30b: ln,
      __wbg_useProgram_e82c1a5f87d81579: K0,
      __wbg_bindTexture_ec13ddcb9dc8e032: j_,
      __wbg_linkProgram_be6b825cf66d177b: Jr,
      __wbg_pixelStorei_f7cc498f52d523f1: Uc,
      __wbg_stencilMask_0eca090c4c47f8f7: Pu,
      __wbg_attachShader_32114efcf2744eb6: F_,
      __wbg_clearStencil_aa65955bb39d8c18: Pe,
      __wbg_createBuffer_c4ec897aacc1b91c: Ze,
      __wbg_createShader_f2b928ca9a426b14: mt,
      __wbg_deleteBuffer_22fcc93912cbf659: Ft,
      __wbg_deleteShader_ff70ca962883e241: Vt,
      __wbg_getParameter_1ecb910cfdd21f88: fr,
      __wbg_shaderSource_8f4bda03f70359df: du,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: y_,
      __wbg_blendEquation_82202f34c4c00e50: H_,
      __wbg_compileShader_63b824e86bb00b8f: Re,
      __wbg_createProgram_98aaa91f7c81c5e2: at,
      __wbg_createTexture_f9451a82c7527ce2: yt,
      __wbg_deleteProgram_f354e79b8cae8076: Et,
      __wbg_deleteTexture_2be78224e5584a8b: Ut,
      __wbg_polygonOffset_24a8059deb03be92: Nc,
      __wbg_texParameteri_ec937d2161018946: Vu,
      __wbg_bindFramebuffer_7815ca611abb057f: G_,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: W_,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: rt,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: Bt,
      __wbg_blendFuncSeparate_f366c170c5097fbe: _e,
      __wbg_createRenderbuffer_1e567f2f4d461710: it,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: Ot,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: mr,
      __wbg_stencilOpSeparate_de257f3c29e604cd: Tu,
      __wbg_bindAttribLocation_5cfc7fa688df5051: L_,
      __wbg_bufferData_1be8450fab534758: fe,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: dr,
      __wbg_getShaderParameter_786fd84f85720ca8: xr,
      __wbg_getUniformLocation_71c070e6644669ad: Ar,
      __wbg_renderbufferStorage_6348154d30979c44: yb,
      __wbg_copyTexSubImage2D_417a65926e3d2490: Qe,
      __wbg_getProgramParameter_43fbc6d2613c08b3: gr,
      __wbg_stencilFuncSeparate_1798f5cca257f313: Iu,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: Du,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: Wn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: $_,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: Vn,
      __wbg_uniform2fv_04c304b93cbf7f55: d0,
      __wbg_uniform2iv_ccf2ed44ac8e602e: w0,
      __wbg_uniform3fv_aa35ef21e14d5469: m0,
      __wbg_uniform3iv_e912f444d4ff8269: y0,
      __wbg_uniform4fv_e6c73702e9a3be5c: A0,
      __wbg_uniform4iv_375332584c65e61b: D0,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: vn,
      __wbg_disableVertexAttribArray_4bac633c27bae599: cn,
      __wbg_vertexAttribPointer_adbd1853cce679ad: _i,
      __wbg_uniformMatrix2fv_e2806601f5b95102: B0,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: C0,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: G0,
      __wbg_bufferData_52235e85894af988: ue,
      __wbg_readPixels_95b2464a7bb863a2: sb,
      __wbg_bufferSubData_33eebcc173094f6a: de,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: qe,
      __wbg_clear_4d801d0d054c3579: Fe,
      __wbg_flush_7777597fd43065db: Rn,
      __wbg_enable_fee40f19b7053ea3: An,
      __wbg_texSubImage2D_19ae4cadb809f264: ju,
      __wbg_disable_bd37bdcca1764aea: an,
      __wbg_scissor_b870b1434a9c25b4: Rb,
      __wbg_texImage2D_e71049312f3172d9: Ru,
      __wbg_viewport_174ae1c2209344ae: ei,
      __wbg_cullFace_39500f654c67a205: Dt,
      __wbg_uniform1f_c148eeaf4b531059: f0,
      __wbg_uniform1i_9f3f72dbcb98ada9: o0,
      __wbg_uniform4f_71ec75443e58cecc: S0,
      __wbg_movementX_ff6524e06bc35b6a: fc,
      __wbg_movementY_4cec81d9850ad239: oc,
      __wbg_button_d86841d0a03adc44: se,
      __wbg_altKey_8155c319c215e3aa: I_,
      __wbg_buttons_a158a0cad3175f24: we,
      __wbg_ctrlKey_96ff94f8b18636a3: At,
      __wbg_metaKey_374999c340f70626: bc,
      __wbg_shiftKey_5558a3288542c985: gu,
      __wbg_key_d41e8e825e6bb0e9: Qr,
      __wbg_code_dee0dae4730408e1: Le,
      __wbg_repeat_375aae5c5c6a0258: hb,
      __wbg_altKey_73c1173ba53073d5: v_,
      __wbg_ctrlKey_09a1b54d77dea92b: It,
      __wbg_location_22bcb1a188a96eb1: Zr,
      __wbg_metaKey_67113fb40365d736: ac,
      __wbg_shiftKey_564be91ec842bcc4: su,
      __wbg_addListener_03e8162d7e03c823: S_,
      __wbg_removeListener_e2a199028636dcf5: lb,
      __wbg_media_7bcde781569bca4c: cc,
      __wbg_matches_4b5c22bd830f7bb3: rc,
      __wbg_preventDefault_cdcfcd7e301b9702: _b,
      __wbg_userAgent_34463fd660ba4a2a: X0,
      __wbg_new_b949e7f56150a5d1: yc,
      __wbg_abort_2f0584e03e8e3950: m_,
      __wbg_signal_d1285ecab4ebc5ad: wu,
      __wbg_blockSize_ef9a626745d7dfac: re,
      __wbg_inlineSize_3e4e7e8c813884fd: Rr,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: K_,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: ht,
      __wbg_deleteVertexArrayOES_197df47ef9684195: jt,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: jn,
      __wbg_contentRect_79b98e4d4f4728a4: Ke,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: tn,
      __wbg_isIntersecting_6807d592d68e059e: jr,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: Dc,
      __wbg_get_d8db2ad31d529ff8: Fr,
      __wbg_instanceof_Response_ee1d54d79ae41977: Vr,
      __wbg_arrayBuffer_bb54076166006c39: M_,
      __wbg_url_c484c26b1fbf5126: j0,
      __wbg_text_083b8727c990c8c0: r0,
      __wbg_status_89d7e803db911ee7: Su,
      __wbg_headers_59a2938db9f80985: kr,
      __wbg_disconnect_5202f399852258c0: on,
      __wbg_observe_1ae37077cf10b11b: Tc,
      __wbg_new_2e2be9617c4407d5: dc,
      __wbg_observe_b9abc08d6d829e56: kc,
      __wbg_unobserve_b4eb8d945252124f: z0,
      __wbg_set_type_148de20768639245: Uo,
      __wbg_set_height_f21f985387070100: pf,
      __wbg_getContext_2a5764d48600bc43: Zn,
      __wbg_getContext_b28d2db7bd648242: _r,
      __wbg_set_width_d60bc4f2f20c56a4: bu,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: Gr,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: Sr,
      __wbg_new_with_str_and_init_a61cbc6bdef21614: Ac,
      __wbg_set_height_b386c0f603610637: mf,
      __wbg_getContext_2966500392030d63: Jn,
      __wbg_getContext_de810d9f187f29ca: er,
      __wbg_set_width_7f07715a20503914: ru,
      __wbg_setProperty_cbb25c4e74285b39: jb,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: mb,
      __wbg_getPropertyValue_d6911b2a1f9acba9: wr,
      __wbg_disconnect_0a2d26237dfc1e9e: fn,
      __wbg_new_8c6e67a40cee1f83: xc,
      __wbg_observe_2a9d63459970a2c1: Bc,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: Tb,
      __wbg_createObjectURL_918185db6a10a0c8: ct,
      __wbg_new_64284bd487f9d239: lc,
      __wbg_append_a992ccc37aa62dc4: P_,
      __wbg_deltaMode_a1d1df711e44cefc: Nt,
      __wbg_deltaX_f0ca9116db5f7bc1: Qt,
      __wbg_deltaY_eb94120160ac821c: Xt,
      __wbg_pointerId_466b1bdcaf2fe835: jc,
      __wbg_pointerType_ba53c6f18634a26d: Kc,
      __wbg_getCoalescedEvents_8d19e426e1461e96: Yn,
      __wbg_pressure_f01a99684f7a6cf3: Zc,
      __wbg_appendChild_dea38765a26d346d: D_,
      __wbg_contains_1056459c33f961e8: je,
      __wbg_origin_a9c891fa602b4d40: qc,
      __wbg_new_6f0524fbfa300c47: mc,
      __wbg_port1_6251ddc5cf5c9287: Xc,
      __wbg_port2_b2a294b0ede1e13c: $c,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: gn,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: Y0,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: xn,
      __wbg_queryCounterEXT_b578f07c30420446: rb,
      __wbg_set_box_73d3355c6f95f24d: xa,
      __wbg_addEventListener_3acb0aad4483804c: h_,
      __wbg_removeEventListener_e63328781a5b9af9: wb,
      __wbg_set_method_c3e20375f5ae7fac: Wf,
      __wbg_set_signal_f2d3f8599248896d: yo,
      __wbg_set_credentials_c4a58d2e05ef24fb: Ba,
      __wbg_set_headers_cfc5f4b2c1f20549: wf,
      __wbg_set_body_9a7e00afe3cfe244: pa,
      __wbg_set_mode_b13642c312648202: Xf,
      __wbg_postMessage_e45c89e4826cf2ef: Hc,
      __wbg_new_4f8f3c123e474358: wc,
      __wbg_log_6b5ca2e6124b2808: ec,
      __wbg_info_148d043840582012: Cr,
      __wbg_warn_f7ae1b2e66ccb930: ri,
      __wbg_debug_a4099fa12db6cd61: Mt,
      __wbg_error_9a7fe3f932034cde: Fn,
      __wbg_error_f852e41c69b0bd84: Tn,
      __wbg_postMessage_46eeeef39934b448: Yc,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: to,
      __wbg_close_fad2f0ee451926ed: ke,
      __wbg_start_ffb4b426b1e661bd: mu,
      __wbg_width_7444cca5dfea0645: ai,
      __wbg_height_c2027cf67d1c9b11: Lr,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: mn,
      __wbg_persisted_de98357e1aaf6546: Vc,
      __wbg_new_3eb36ae241fe6f44: sc,
      __wbg_new_361308b2356cecd0: gc,
      __wbg_new_no_args_1c7c842f08d00ebb: vc,
      __wbg_new_dd2b680c8bf6ae29: hc,
      __wbg_length_32ed9a279acd054c: $r,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: tb,
      __wbg_new_from_slice_a3d2629dc1826784: Sc,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: Ic,
      __wbg_set_25cf9deff6bf0ea8: $b,
      __wbg_done_57b39ecd9addfe81: dn,
      __wbg_value_0546255b415e96c1: $0,
      __wbg_get_9b94d73e6221f75c: Pr,
      __wbg_of_f915f7cd925b21a5: Ec,
      __wbg_of_9ab14f9d4bfb5040: Lc,
      __wbg_length_35a7bace40f36eac: Yr,
      __wbg_push_8ffdcb2063340ba5: nb,
      __wbg_includes_32215c836f1cd3fb: Er,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: ar,
      __wbg_is_f29129f676e5410c: Kr,
      __wbg_iterator_6ff6560ca1568e55: Nr,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: xu,
      __wbg_call_389efe28435a9388: le,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: yu,
      __wbg_static_accessor_GLOBAL_12837167ad935116: pu,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: hu,
      __wbg_then_b9e7b3b5f1a9e1b5: b0,
      __wbg_catch_c1f8c7623b458214: ye,
      __wbg_then_0d9fe2c7b1857d32: c0,
      __wbg_resolve_002c4b7d9d8f6b64: Fb,
      __wbg_next_418f80d8f5303233: Mc,
      __wbg_next_3482f54c49e8af19: Pc,
      __wbg_get_b3ed3ad4be2bc8ac: Mr,
      __wbg_has_d4e53238966c12b6: Br,
      __wbg_set_6cb8631f80447a67: Yb,
      __wbg_stringify_8d1cc6ff383e8bae: Bu,
      __wbg___wbindgen_number_get_8ff4255516ccad3e: g_,
      __wbg___wbindgen_throw_be289d5034ed271b: w_,
      __wbg___wbindgen_is_null_ac34f5003991759a: u_,
      __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: i_,
      __wbg___wbindgen_string_get_72fb696202c56729: s_,
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: a_,
      __wbg___wbindgen_is_function_0095a73b8b156f76: o_,
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: d_,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: f_,
      __wbg__wbg_cb_unref_d9b87ff7982e3b21: l_,
      __wbindgen_cast_0000000000000001: ui,
      __wbindgen_cast_0000000000000002: ii,
      __wbindgen_cast_0000000000000003: di,
      __wbindgen_cast_0000000000000004: gi,
      __wbindgen_cast_0000000000000005: si,
      __wbindgen_cast_0000000000000006: wi,
      __wbindgen_cast_0000000000000007: li,
      __wbindgen_cast_0000000000000008: mi,
      __wbindgen_cast_0000000000000009: pi,
      __wbindgen_cast_000000000000000a: xi,
      __wbindgen_cast_000000000000000b: yi,
      __wbindgen_cast_000000000000000c: hi,
      __wbindgen_cast_000000000000000d: Si,
      __wbindgen_cast_000000000000000e: vi,
      __wbindgen_cast_000000000000000f: Ii,
      __wbindgen_cast_0000000000000010: Ai,
      __wbindgen_cast_0000000000000011: Di,
      __wbindgen_cast_0000000000000012: Pi,
      __wbindgen_cast_0000000000000013: Mi
    }
  }, n_), dd = S.memory, gd = S.main, sd = S.run_web, wd = S.__wasm_bindgen_func_elem_3125, ld = S.__wasm_bindgen_func_elem_4933, md = S.__wasm_bindgen_func_elem_3464, pd = S.__wasm_bindgen_func_elem_3456, xd = S.__wasm_bindgen_func_elem_4934, yd = S.__wasm_bindgen_func_elem_3458, hd = S.__wbindgen_export, Sd = S.__wbindgen_export2, vd = S.__wbindgen_export3, Id = S.__wbindgen_export4, e_ = S.__wbindgen_start, Ad = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_3125: wd,
    __wasm_bindgen_func_elem_3456: pd,
    __wasm_bindgen_func_elem_3458: yd,
    __wasm_bindgen_func_elem_3464: md,
    __wasm_bindgen_func_elem_4933: ld,
    __wasm_bindgen_func_elem_4934: xd,
    __wbindgen_export: hd,
    __wbindgen_export2: Sd,
    __wbindgen_export3: vd,
    __wbindgen_export4: Id,
    __wbindgen_start: e_,
    main: gd,
    memory: dd,
    run_web: sd
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  id(Ad);
  e_();
})();
export {
  __tla,
  Pd as run_web
};
