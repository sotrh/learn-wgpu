import { _ as n_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
(async () => {
  const b_ = "/learn-wgpu/assets/demo_bg-BwCWpw2V.wasm";
  function r_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function c_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function a_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function f_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return l(n) ? 16777215 : n ? 1 : 0;
  }
  function o_(_, e) {
    const n = j(t(e)), b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function u_(_) {
    return typeof t(_) == "function";
  }
  function d_(_) {
    return t(_) === null;
  }
  function i_(_) {
    return typeof t(_) == "string";
  }
  function g_(_) {
    return t(_) === void 0;
  }
  function s_(_, e) {
    const n = t(e), b = typeof n == "number" ? n : void 0;
    w().setFloat64(_ + 8, l(b) ? 0 : b, true), w().setInt32(_ + 0, !l(b), true);
  }
  function w_(_, e) {
    const n = t(e), b = typeof n == "string" ? n : void 0;
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function l_(_, e) {
    throw new Error(g(_, e));
  }
  function m_(_) {
    t(_)._wbg_cb_unref();
  }
  function p_(_) {
    t(_).abort();
  }
  function x_(_, e) {
    t(_).abort(t(e));
  }
  function y_(_) {
    const e = t(_).activeElement;
    return l(e) ? 0 : c(e);
  }
  function h_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function v_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function S_() {
    return o(function(_, e, n, b) {
      t(_).addEventListener(g(e, n), t(b));
    }, arguments);
  }
  function I_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function A_(_) {
    return t(_).altKey;
  }
  function D_(_) {
    return t(_).altKey;
  }
  function P_(_, e, n) {
    const b = t(_).animate(t(e), t(n));
    return c(b);
  }
  function M_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function F_() {
    return o(function(_, e, n, b, r) {
      t(_).append(g(e, n), g(b, r));
    }, arguments);
  }
  function T_() {
    return o(function(_) {
      const e = t(_).arrayBuffer();
      return c(e);
    }, arguments);
  }
  function B_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function k_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function L_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function E_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function C_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function R_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function O_(_, e, n, b, r, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(b), r, a);
  }
  function q_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function j_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function K_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function $_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function N_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function Q_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function X_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function Y_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function H_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function J_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function Z_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function _e(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function ee(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function te(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function ne(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function be(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function re(_, e, n, b, r, a, f, d, i, s, p) {
    t(_).blitFramebuffer(e, n, b, r, a, f, d, i, s >>> 0, p >>> 0);
  }
  function ce(_) {
    return t(_).blockSize;
  }
  function ae(_) {
    const e = t(_).body;
    return l(e) ? 0 : c(e);
  }
  function fe(_, e) {
    const n = t(e).brand, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function oe(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ue(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function de(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function ie(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function ge(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function se(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function we(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function le(_) {
    return t(_).button;
  }
  function me(_) {
    return t(_).buttons;
  }
  function pe() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function xe(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function ye(_) {
    t(_).cancel();
  }
  function he(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function ve(_, e, n, b, r) {
    t(_).clearBufferfv(e >>> 0, n, y(b, r));
  }
  function Se(_, e, n, b, r) {
    t(_).clearBufferiv(e >>> 0, n, D(b, r));
  }
  function Ie(_, e, n, b, r) {
    t(_).clearBufferuiv(e >>> 0, n, F(b, r));
  }
  function Ae(_, e) {
    t(_).clearDepth(e);
  }
  function De(_, e) {
    t(_).clearDepth(e);
  }
  function Pe(_, e) {
    t(_).clearStencil(e);
  }
  function Me(_, e) {
    t(_).clearStencil(e);
  }
  function Fe(_) {
    const e = clearTimeout(T(_));
    return c(e);
  }
  function Te(_, e) {
    t(_).clearTimeout(e);
  }
  function Be(_, e) {
    t(_).clear(e >>> 0);
  }
  function ke(_, e) {
    t(_).clear(e >>> 0);
  }
  function Le(_, e, n, b) {
    return t(_).clientWaitSync(t(e), n >>> 0, b >>> 0);
  }
  function Ee(_) {
    t(_).close();
  }
  function Ce(_, e) {
    const n = t(e).code, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Re(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Oe(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function qe(_, e) {
    t(_).compileShader(t(e));
  }
  function Ge(_, e) {
    t(_).compileShader(t(e));
  }
  function Ve(_, e, n, b, r, a, f, d, i, s) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i, s);
  }
  function We(_, e, n, b, r, a, f, d, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
  }
  function Ue(_, e, n, b, r, a, f, d, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
  }
  function ze(_, e, n, b, r, a, f, d, i, s, p, v) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p, v);
  }
  function je(_, e, n, b, r, a, f, d, i, s, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, t(p));
  }
  function Ke() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function $e(_, e) {
    return t(_).contains(t(e));
  }
  function Ne(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function Qe(_, e, n, b, r, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, b, r, a);
  }
  function Xe(_, e, n, b, r, a, f, d, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
  }
  function Ye(_, e, n, b, r, a, f, d, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
  }
  function He(_, e, n, b, r, a, f, d, i, s) {
    t(_).copyTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s);
  }
  function Je() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return c(n);
    }, arguments);
  }
  function Ze(_, e) {
    const n = t(_).createBindGroup(t(e));
    return c(n);
  }
  function _t(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function et() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return c(n);
    }, arguments);
  }
  function tt(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function nt(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function bt() {
    return o(function(_, e, n) {
      const b = t(_).createElement(g(e, n));
      return c(b);
    }, arguments);
  }
  function rt(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function ct(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function at() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function ft(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function ot(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function ut(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function dt(_) {
    const e = t(_).createQuery();
    return l(e) ? 0 : c(e);
  }
  function it() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function gt(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function st(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function wt(_) {
    const e = t(_).createSampler();
    return l(e) ? 0 : c(e);
  }
  function lt(_, e) {
    const n = t(_).createSampler(t(e));
    return c(n);
  }
  function mt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function pt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function xt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function yt(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function ht() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return c(n);
    }, arguments);
  }
  function vt(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function St(_) {
    const e = t(_).createVertexArrayOES();
    return l(e) ? 0 : c(e);
  }
  function It(_) {
    const e = t(_).createVertexArray();
    return l(e) ? 0 : c(e);
  }
  function At() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function Dt(_) {
    return t(_).ctrlKey;
  }
  function Pt(_) {
    return t(_).ctrlKey;
  }
  function Mt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Ft(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Tt(_) {
    console.debug(t(_));
  }
  function Bt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function kt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Lt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Et(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Ct(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Rt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Ot(_, e) {
    t(_).deleteQuery(t(e));
  }
  function qt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Gt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Vt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function Wt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Ut(_, e) {
    t(_).deleteShader(t(e));
  }
  function zt(_, e) {
    t(_).deleteSync(t(e));
  }
  function jt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Kt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function $t(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Nt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Qt(_) {
    return t(_).deltaMode;
  }
  function Xt(_) {
    return t(_).deltaX;
  }
  function Yt(_) {
    return t(_).deltaY;
  }
  function Ht(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Jt(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function Zt(_, e) {
    t(_).depthMask(e !== 0);
  }
  function _n(_, e) {
    t(_).depthMask(e !== 0);
  }
  function en(_, e, n) {
    t(_).depthRange(e, n);
  }
  function tn(_, e, n) {
    t(_).depthRange(e, n);
  }
  function nn(_) {
    t(_).destroy();
  }
  function bn(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function rn(_) {
    return t(_).devicePixelRatio;
  }
  function cn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function an(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function fn(_, e) {
    t(_).disable(e >>> 0);
  }
  function on(_, e) {
    t(_).disable(e >>> 0);
  }
  function un(_) {
    t(_).disconnect();
  }
  function dn(_) {
    t(_).disconnect();
  }
  function gn(_) {
    const e = t(_).document;
    return l(e) ? 0 : c(e);
  }
  function sn(_) {
    return t(_).done;
  }
  function wn(_, e, n, b, r) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, b, r);
  }
  function ln(_, e, n, b, r) {
    t(_).drawArraysInstanced(e >>> 0, n, b, r);
  }
  function mn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function pn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function xn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function yn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function hn(_, e, n, b, r, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, b >>> 0, r, a);
  }
  function vn(_, e, n, b, r, a) {
    t(_).drawElementsInstanced(e >>> 0, n, b >>> 0, r, a);
  }
  function Sn(_, e, n, b, r, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, b >>> 0, r, a >>> 0);
  }
  function In(_, e, n, b, r) {
    t(_).draw(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function An(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Dn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Pn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Mn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Fn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function Tn(_) {
    t(_).end();
  }
  function Bn(_) {
    const e = t(_).entries();
    return c(e);
  }
  function kn(_) {
    console.error(t(_));
  }
  function Ln(_, e) {
    console.error(t(_), t(e));
  }
  function En(_, e) {
    let n, b;
    try {
      n = _, b = e, console.error(g(_, e));
    } finally {
      u.__wbindgen_export4(n, b, 1);
    }
  }
  function Cn(_, e, n) {
    const b = t(_).fenceSync(e >>> 0, n >>> 0);
    return l(b) ? 0 : c(b);
  }
  function Rn(_) {
    const e = fetch(t(_));
    return c(e);
  }
  function On(_, e) {
    const n = t(_).fetch(t(e));
    return c(n);
  }
  function qn(_) {
    t(_).finish();
  }
  function Gn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function Vn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function Wn(_) {
    t(_).finish();
  }
  function Un(_) {
    t(_).flush();
  }
  function zn(_) {
    t(_).flush();
  }
  function jn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Kn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function $n(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function Nn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Qn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Xn(_, e, n, b, r, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(b), r, a);
  }
  function Yn(_, e, n, b, r, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(b), r, a, f);
  }
  function Hn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Jn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Zn(_) {
    const e = t(_).fullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function _b(_, e, n, b) {
    t(_).getBufferSubData(e >>> 0, n, t(b));
  }
  function eb(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function tb(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function nb() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return l(n) ? 0 : c(n);
    }, arguments);
  }
  function bb() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function rb() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function cb() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function ab() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function fb() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function ob(_, e, n) {
    const b = t(_).getElementById(g(e, n));
    return l(b) ? 0 : c(b);
  }
  function ub() {
    return o(function(_, e, n) {
      const b = t(_).getExtension(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function db() {
    return o(function(_, e, n) {
      const b = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(b);
    }, arguments);
  }
  function ib() {
    return o(function(_, e, n) {
      const b = t(_).getMappedRange(e, n);
      return c(b);
    }, arguments);
  }
  function gb(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function sb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function wb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function lb(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 102) - 1;
  }
  function mb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function pb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function xb(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function yb(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function hb() {
    return o(function(_, e, n, b) {
      const r = t(e).getPropertyValue(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function vb(_, e, n) {
    const b = t(_).getQueryParameter(t(e), n >>> 0);
    return c(b);
  }
  function Sb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Ib(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Ab(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Db(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Pb(_) {
    const e = t(_).getSupportedExtensions();
    return l(e) ? 0 : c(e);
  }
  function Mb(_) {
    const e = t(_).getSupportedProfiles();
    return l(e) ? 0 : c(e);
  }
  function Fb(_, e, n) {
    const b = t(_).getSyncParameter(t(e), n >>> 0);
    return c(b);
  }
  function Tb(_, e, n, b) {
    return t(_).getUniformBlockIndex(t(e), g(n, b));
  }
  function Bb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function kb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function Lb(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Eb() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Cb(_, e) {
    const n = t(_)[e >>> 0];
    return l(n) ? 0 : c(n);
  }
  function Rb(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Ob(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function qb() {
    return o(function(_, e) {
      return Reflect.has(t(_), t(e));
    }, arguments);
  }
  function Gb(_) {
    const e = t(_).headers;
    return c(e);
  }
  function Vb(_) {
    return t(_).height;
  }
  function Wb(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Ub(_) {
    console.info(t(_));
  }
  function zb(_) {
    return t(_).inlineSize;
  }
  function jb(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Kb(_) {
    let e;
    try {
      e = t(_) instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function $b(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Nb(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Qb() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function Xb(_) {
    return Array.isArray(t(_));
  }
  function Yb(_) {
    return t(_).isIntersecting;
  }
  function Hb(_, e) {
    return Object.is(t(_), t(e));
  }
  function Jb(_, e) {
    const n = t(e).key, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Zb(_, e) {
    const n = t(e).label, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function _r(_) {
    return t(_).length;
  }
  function er(_) {
    return t(_).length;
  }
  function tr(_, e) {
    t(_).linkProgram(t(e));
  }
  function nr(_, e) {
    t(_).linkProgram(t(e));
  }
  function br(_) {
    return t(_).location;
  }
  function rr(_) {
    const e = t(_).location;
    return c(e);
  }
  function cr(_) {
    console.log(t(_));
  }
  function ar(_, e, n, b) {
    const r = t(_).mapAsync(e >>> 0, n, b);
    return c(r);
  }
  function fr() {
    return o(function(_, e, n) {
      const b = t(_).matchMedia(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function or(_) {
    return t(_).matches;
  }
  function ur(_, e) {
    const n = t(e).media, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function dr(_) {
    return t(_).metaKey;
  }
  function ir(_) {
    return t(_).metaKey;
  }
  function gr(_) {
    return t(_).movementX;
  }
  function sr(_) {
    return t(_).movementY;
  }
  function wr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function lr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function mr() {
    return o(function() {
      const _ = new Headers();
      return c(_);
    }, arguments);
  }
  function pr() {
    const _ = new Error();
    return c(_);
  }
  function xr() {
    return o(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function yr() {
    const _ = new Array();
    return c(_);
  }
  function hr() {
    return o(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function vr() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Sr() {
    return o(function(_, e) {
      const n = new Worker(g(_, e));
      return c(n);
    }, arguments);
  }
  function Ir(_) {
    const e = new Uint8Array(t(_));
    return c(e);
  }
  function Ar() {
    const _ = new Object();
    return c(_);
  }
  function Dr() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Pr() {
    return o(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function Mr(_, e) {
    const n = new Uint8Array(E(_, e));
    return c(n);
  }
  function Fr() {
    const _ = new Object();
    return c(_);
  }
  function Tr(_, e, n) {
    const b = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(b);
  }
  function Br() {
    return o(function(_, e, n) {
      const b = new Request(g(_, e), t(n));
      return c(b);
    }, arguments);
  }
  function kr() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Lr() {
    return o(function(_) {
      const e = t(_).next();
      return c(e);
    }, arguments);
  }
  function Er(_) {
    return t(_).now();
  }
  function Cr(_) {
    return t(_).now();
  }
  function Rr(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function Or(_, e) {
    t(_).observe(t(e));
  }
  function qr(_, e) {
    t(_).observe(t(e));
  }
  function Gr(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function Vr(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function Wr(_) {
    return t(_).offsetX;
  }
  function Ur(_) {
    return t(_).offsetY;
  }
  function zr(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function jr() {
    return o(function(_, e) {
      const n = t(e).origin, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function Kr(_) {
    const e = t(_).performance;
    return c(e);
  }
  function $r(_) {
    return t(_).persisted;
  }
  function Nr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Qr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Xr(_) {
    t(_).play();
  }
  function Yr(_) {
    return t(_).pointerId;
  }
  function Hr(_, e) {
    const n = t(e).pointerType, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Jr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Zr(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function _c(_) {
    const e = t(_).port1;
    return c(e);
  }
  function ec(_) {
    const e = t(_).port2;
    return c(e);
  }
  function tc() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function nc() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function bc(_, e, n) {
    const b = t(_).postTask(t(e), t(n));
    return c(b);
  }
  function rc(_) {
    return t(_).pressure;
  }
  function cc(_) {
    t(_).preventDefault();
  }
  function ac() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function fc(_, e, n) {
    Uint8Array.prototype.set.call(E(_, e), t(n));
  }
  function oc(_, e) {
    return t(_).push(t(e));
  }
  function uc(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function dc() {
    return o(function(_, e, n) {
      const b = t(_).querySelectorAll(g(e, n));
      return c(b);
    }, arguments);
  }
  function ic() {
    return o(function(_, e, n) {
      const b = t(_).querySelector(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function gc(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function sc(_) {
    queueMicrotask(t(_));
  }
  function wc(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function lc(_) {
    const e = t(_).queue;
    return c(e);
  }
  function mc(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function pc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
    }, arguments);
  }
  function xc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, d);
    }, arguments);
  }
  function yc() {
    return o(function(_, e, n, b, r, a, f, d) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
    }, arguments);
  }
  function hc() {
    return o(function(_, e, n, b) {
      t(_).removeEventListener(g(e, n), t(b));
    }, arguments);
  }
  function vc() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Sc() {
    return o(function(_, e, n, b) {
      const r = t(e).removeProperty(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Ic(_, e, n, b, r, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, b >>> 0, r, a);
  }
  function Ac(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function Dc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function Pc(_) {
    return t(_).repeat;
  }
  function Mc(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function Fc() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Tc(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function Bc(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function kc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function Lc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function Ec() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Cc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function Rc() {
    return o(function(_, e) {
      URL.revokeObjectURL(g(_, e));
    }, arguments);
  }
  function Oc(_, e, n, b) {
    t(_).samplerParameterf(t(e), n >>> 0, b);
  }
  function qc(_, e, n, b) {
    t(_).samplerParameteri(t(e), n >>> 0, b);
  }
  function Gc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function Vc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function Wc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function Uc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function zc() {
    return o(function(_, e, n, b, r) {
      t(_).setAttribute(g(e, n), g(b, r));
    }, arguments);
  }
  function jc() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), F(b, r), a, f >>> 0);
    }, arguments);
  }
  function Kc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function $c(_, e, n, b) {
    t(_).setIndexBuffer(t(e), N[n], b);
  }
  function Nc(_, e, n, b, r) {
    t(_).setIndexBuffer(t(e), N[n], b, r);
  }
  function Qc(_, e) {
    t(_).setPipeline(t(e));
  }
  function Xc() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function Yc() {
    return o(function(_, e, n, b, r) {
      t(_).setProperty(g(e, n), g(b, r));
    }, arguments);
  }
  function Hc(_, e) {
    const n = setTimeout(t(_), e);
    return c(n);
  }
  function Jc() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function Zc() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function _a(_, e, n, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), b);
  }
  function ea(_, e, n, b, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), b, r);
  }
  function ta(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function na() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function ba(_, e) {
    t(_).a = e;
  }
  function ra(_, e) {
    t(_).access = hi[e];
  }
  function ca(_, e) {
    t(_).addressModeU = K[e];
  }
  function aa(_, e) {
    t(_).addressModeV = K[e];
  }
  function fa(_, e) {
    t(_).addressModeW = K[e];
  }
  function oa(_, e) {
    t(_).alpha = t(e);
  }
  function ua(_, e) {
    t(_).alphaMode = gi[e];
  }
  function da(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function ia(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function ga(_, e) {
    t(_).arrayStride = e;
  }
  function sa(_, e) {
    t(_).aspect = e_[e];
  }
  function wa(_, e) {
    t(_).aspect = e_[e];
  }
  function la(_, e, n) {
    t(_).attributes = I(e, n);
  }
  function ma(_, e) {
    t(_).b = e;
  }
  function pa(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function xa(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function ya(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function ha(_, e, n) {
    t(_).bindGroupLayouts = I(e, n);
  }
  function va(_, e) {
    t(_).binding = e >>> 0;
  }
  function Sa(_, e) {
    t(_).binding = e >>> 0;
  }
  function Ia(_, e) {
    t(_).blend = t(e);
  }
  function Aa(_, e) {
    t(_).body = t(e);
  }
  function Da(_, e) {
    t(_).box = Fi[e];
  }
  function Pa(_, e) {
    t(_).buffer = t(e);
  }
  function Ma(_, e) {
    t(_).buffer = t(e);
  }
  function Fa(_, e, n) {
    t(_).buffers = I(e, n);
  }
  function Ta(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function Ba(_, e) {
    t(_).cache = Di[e];
  }
  function ka(_, e) {
    t(_).clearValue = t(e);
  }
  function La(_, e, n) {
    t(_).code = g(e, n);
  }
  function Ea(_, e) {
    t(_).color = t(e);
  }
  function Ca(_, e, n) {
    t(_).colorAttachments = I(e, n);
  }
  function Ra(_, e) {
    t(_).compare = $[e];
  }
  function Oa(_, e) {
    t(_).compare = $[e];
  }
  function qa(_, e) {
    t(_).count = e >>> 0;
  }
  function Ga(_, e) {
    t(_).credentials = Pi[e];
  }
  function Va(_, e) {
    t(_).cullMode = wi[e];
  }
  function Wa(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Ua(_, e) {
    t(_).depthBias = e;
  }
  function za(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function ja(_, e) {
    t(_).depthClearValue = e;
  }
  function Ka(_, e) {
    t(_).depthCompare = $[e];
  }
  function $a(_, e) {
    t(_).depthFailOp = X[e];
  }
  function Na(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function Qa(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function Xa(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function Ya(_, e) {
    t(_).depthStencil = t(e);
  }
  function Ha(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function Ja(_, e) {
    t(_).depthStoreOp = Y[e];
  }
  function Za(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function _f(_, e) {
    t(_).device = t(e);
  }
  function ef(_, e) {
    t(_).dimension = vi[e];
  }
  function tf(_, e) {
    t(_).dimension = H[e];
  }
  function nf(_, e) {
    t(_).dstFactor = Z[e];
  }
  function bf(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function rf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function cf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function af(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function ff(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function of(_, e) {
    t(_).externalTexture = t(e);
  }
  function uf(_, e) {
    t(_).failOp = X[e];
  }
  function df(_, e) {
    t(_).format = P[e];
  }
  function gf(_, e) {
    t(_).format = P[e];
  }
  function sf(_, e) {
    t(_).format = P[e];
  }
  function wf(_, e) {
    t(_).format = Ii[e];
  }
  function lf(_, e) {
    t(_).format = P[e];
  }
  function mf(_, e) {
    t(_).format = P[e];
  }
  function pf(_, e) {
    t(_).format = P[e];
  }
  function xf(_, e) {
    t(_).fragment = t(e);
  }
  function yf(_, e) {
    t(_).frontFace = li[e];
  }
  function hf(_, e) {
    t(_).g = e;
  }
  function vf(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function Sf(_, e) {
    t(_).headers = t(e);
  }
  function If(_, e) {
    t(_).height = e >>> 0;
  }
  function Af(_, e) {
    t(_).height = e >>> 0;
  }
  function Df(_, e) {
    t(_).height = e >>> 0;
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
  function kf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Lf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Ef(_, e, n) {
    t(_).label = g(e, n);
  }
  function Cf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Rf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Of(_, e, n) {
    t(_).label = g(e, n);
  }
  function qf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Gf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Vf(_, e) {
    t(_).layout = t(e);
  }
  function Wf(_, e) {
    t(_).layout = t(e);
  }
  function Uf(_, e) {
    t(_).layout = ui[e];
  }
  function zf(_, e) {
    t(_).loadOp = Q[e];
  }
  function jf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function Kf(_, e) {
    t(_).lodMinClamp = e;
  }
  function $f(_, e) {
    t(_).magFilter = __[e];
  }
  function Nf(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function Qf(_, e) {
    t(_).mask = e >>> 0;
  }
  function Xf(_, e) {
    t(_).maxAnisotropy = e;
  }
  function Yf(_, e, n) {
    t(_).method = g(e, n);
  }
  function Hf(_, e) {
    t(_).minBindingSize = e;
  }
  function Jf(_, e) {
    t(_).minFilter = __[e];
  }
  function Zf(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function _o(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function eo(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function to(_, e) {
    t(_).mipmapFilter = mi[e];
  }
  function no(_, e) {
    t(_).mode = Mi[e];
  }
  function bo(_, e) {
    t(_).mode = si[e];
  }
  function ro(_, e) {
    t(_).module = t(e);
  }
  function co(_, e) {
    t(_).module = t(e);
  }
  function ao(_, e) {
    t(_).multisample = t(e);
  }
  function fo(_, e) {
    t(_).multisampled = e !== 0;
  }
  function oo(_, e) {
    t(_).offset = e;
  }
  function uo(_, e) {
    t(_).offset = e;
  }
  function io(_, e) {
    t(_).offset = e;
  }
  function go(_, e) {
    t(_).onmessage = t(e);
  }
  function so(_, e) {
    t(_).operation = di[e];
  }
  function wo(_, e) {
    t(_).origin = t(e);
  }
  function lo(_, e) {
    t(_).passOp = X[e];
  }
  function mo(_, e) {
    t(_).powerPreference = pi[e];
  }
  function po(_, e) {
    t(_).primitive = t(e);
  }
  function xo(_, e) {
    t(_).querySet = t(e);
  }
  function yo(_, e) {
    t(_).r = e;
  }
  function ho(_, e, n) {
    t(_).requiredFeatures = I(e, n);
  }
  function vo(_, e) {
    t(_).requiredLimits = t(e);
  }
  function So(_, e) {
    t(_).resolveTarget = t(e);
  }
  function Io(_, e) {
    t(_).resource = t(e);
  }
  function Ao(_, e) {
    t(_).resource = t(e);
  }
  function Do(_, e) {
    t(_).resource = t(e);
  }
  function Po(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Mo(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function Fo(_, e) {
    t(_).sampleType = Si[e];
  }
  function To(_, e) {
    t(_).sampler = t(e);
  }
  function Bo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function ko(_, e) {
    t(_).signal = t(e);
  }
  function Lo(_, e) {
    t(_).size = e;
  }
  function Eo(_, e) {
    t(_).size = e;
  }
  function Co(_, e) {
    t(_).size = t(e);
  }
  function Ro(_, e) {
    t(_).srcFactor = Z[e];
  }
  function Oo(_, e) {
    t(_).stencilBack = t(e);
  }
  function qo(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function Go(_, e) {
    t(_).stencilFront = t(e);
  }
  function Vo(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function Wo(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function Uo(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function zo(_, e) {
    t(_).stencilStoreOp = Y[e];
  }
  function jo(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function Ko(_, e) {
    t(_).stepMode = Ai[e];
  }
  function $o(_, e) {
    t(_).storageTexture = t(e);
  }
  function No(_, e) {
    t(_).storeOp = Y[e];
  }
  function Qo(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function Xo(_, e, n) {
    t(_).targets = I(e, n);
  }
  function Yo(_, e) {
    t(_).texture = t(e);
  }
  function Ho(_, e) {
    t(_).texture = t(e);
  }
  function Jo(_, e) {
    t(_).timestampWrites = t(e);
  }
  function Zo(_, e) {
    t(_).toneMapping = t(e);
  }
  function _0(_, e) {
    t(_).topology = xi[e];
  }
  function e0(_, e, n) {
    t(_).type = g(e, n);
  }
  function t0(_, e) {
    t(_).type = yi[e];
  }
  function n0(_, e) {
    t(_).type = ii[e];
  }
  function b0(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function r0(_, e) {
    t(_).usage = e >>> 0;
  }
  function c0(_, e) {
    t(_).usage = e >>> 0;
  }
  function a0(_, e) {
    t(_).usage = e >>> 0;
  }
  function f0(_, e) {
    t(_).usage = e >>> 0;
  }
  function o0(_, e) {
    t(_).vertex = t(e);
  }
  function u0(_, e) {
    t(_).viewDimension = H[e];
  }
  function d0(_, e) {
    t(_).viewDimension = H[e];
  }
  function i0(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function g0(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function s0(_, e) {
    t(_).view = t(e);
  }
  function w0(_, e) {
    t(_).view = t(e);
  }
  function l0(_, e) {
    t(_).visibility = e >>> 0;
  }
  function m0(_, e) {
    t(_).width = e >>> 0;
  }
  function p0(_, e) {
    t(_).width = e >>> 0;
  }
  function x0(_, e) {
    t(_).width = e >>> 0;
  }
  function y0(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function h0(_, e) {
    t(_).x = e >>> 0;
  }
  function v0(_, e) {
    t(_).y = e >>> 0;
  }
  function S0(_, e) {
    t(_).z = e >>> 0;
  }
  function I0(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function A0(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function D0(_) {
    return t(_).shiftKey;
  }
  function P0(_) {
    return t(_).shiftKey;
  }
  function M0(_) {
    const e = t(_).signal;
    return c(e);
  }
  function F0(_, e) {
    const n = t(e).stack, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function T0(_) {
    t(_).start();
  }
  function B0() {
    const _ = typeof global > "u" ? null : global;
    return l(_) ? 0 : c(_);
  }
  function k0() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return l(_) ? 0 : c(_);
  }
  function L0() {
    const _ = typeof self > "u" ? null : self;
    return l(_) ? 0 : c(_);
  }
  function E0() {
    const _ = typeof window > "u" ? null : window;
    return l(_) ? 0 : c(_);
  }
  function C0(_) {
    return t(_).status;
  }
  function R0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function O0(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function q0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function G0(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function V0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function W0(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function U0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function z0(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function j0(_) {
    const e = t(_).style;
    return c(e);
  }
  function K0(_, e, n) {
    t(_).submit(I(e, n));
  }
  function $0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function N0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Q0() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
    }, arguments);
  }
  function X0() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, p);
    }, arguments);
  }
  function Y0() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, t(p));
    }, arguments);
  }
  function H0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function J0(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function Z0(_, e, n, b, r, a) {
    t(_).texStorage2D(e >>> 0, n, b >>> 0, r, a);
  }
  function _u(_, e, n, b, r, a, f) {
    t(_).texStorage3D(e >>> 0, n, b >>> 0, r, a, f);
  }
  function eu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
    }, arguments);
  }
  function tu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function nu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function bu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function ru() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function cu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function au() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function fu() {
    return o(function(_, e, n, b, r, a, f, d, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function ou() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function uu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function du() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function iu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, v);
    }, arguments);
  }
  function gu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function su() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function wu() {
    return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function lu() {
    return o(function(_) {
      const e = t(_).text();
      return c(e);
    }, arguments);
  }
  function mu(_, e, n) {
    const b = t(_).then(t(e), t(n));
    return c(b);
  }
  function pu(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function xu(_) {
    t(_).unconfigure();
  }
  function yu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function hu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function vu(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Su(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Iu(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function Au(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function Du(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function Pu(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Mu(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Fu(_, e, n, b) {
    t(_).uniform2uiv(t(e), F(n, b));
  }
  function Tu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function Bu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function ku(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Lu(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Eu(_, e, n, b) {
    t(_).uniform3uiv(t(e), F(n, b));
  }
  function Cu(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function Ru(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function Ou(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function qu(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function Gu(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function Vu(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function Wu(_, e, n, b) {
    t(_).uniform4uiv(t(e), F(n, b));
  }
  function Uu(_, e, n, b) {
    t(_).uniformBlockBinding(t(e), n >>> 0, b >>> 0);
  }
  function zu(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function ju(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function Ku(_, e, n, b, r) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, y(b, r));
  }
  function $u(_, e, n, b, r) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, y(b, r));
  }
  function Nu(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function Qu(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function Xu(_, e, n, b, r) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, y(b, r));
  }
  function Yu(_, e, n, b, r) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, y(b, r));
  }
  function Hu(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function Ju(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function Zu(_, e, n, b, r) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, y(b, r));
  }
  function _d(_, e, n, b, r) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, y(b, r));
  }
  function ed(_) {
    t(_).unmap();
  }
  function td(_, e) {
    t(_).unobserve(t(e));
  }
  function nd(_, e) {
    const n = t(e).url, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function bd(_, e) {
    t(_).useProgram(t(e));
  }
  function rd(_, e) {
    t(_).useProgram(t(e));
  }
  function cd(_) {
    const e = t(_).userAgentData;
    return l(e) ? 0 : c(e);
  }
  function ad() {
    return o(function(_, e) {
      const n = t(e).userAgent, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function fd(_) {
    const e = t(_).value;
    return c(e);
  }
  function od(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function ud(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function dd(_, e, n, b, r, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, b >>> 0, r, a);
  }
  function id(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function gd(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function sd(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function wd(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function ld(_) {
    const e = t(_).visibilityState;
    return (Ti.indexOf(e) + 1 || 3) - 1;
  }
  function md(_) {
    console.warn(t(_));
  }
  function pd(_) {
    const e = t(_).webkitFullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function xd(_) {
    t(_).webkitRequestFullscreen();
  }
  function yd(_) {
    return t(_).width;
  }
  function hd() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).writeBuffer(t(e), n, E(b, r), a, f);
    }, arguments);
  }
  function vd() {
    return o(function(_, e, n, b, r, a) {
      t(_).writeTexture(t(e), E(n, b), t(r), t(a));
    }, arguments);
  }
  function Sd(_, e) {
    const n = S(_, e, ri);
    return c(n);
  }
  function Id(_, e) {
    const n = S(_, e, Hd);
    return c(n);
  }
  function Ad(_, e) {
    const n = S(_, e, ci);
    return c(n);
  }
  function Dd(_, e) {
    const n = S(_, e, Jd);
    return c(n);
  }
  function Pd(_, e) {
    const n = S(_, e, Zd);
    return c(n);
  }
  function Md(_, e) {
    const n = S(_, e, _i);
    return c(n);
  }
  function Fd(_, e) {
    const n = S(_, e, ai);
    return c(n);
  }
  function Td(_, e) {
    const n = S(_, e, ei);
    return c(n);
  }
  function Bd(_, e) {
    const n = S(_, e, ti);
    return c(n);
  }
  function kd(_, e) {
    const n = S(_, e, ni);
    return c(n);
  }
  function Ld(_, e) {
    const n = S(_, e, bi);
    return c(n);
  }
  function Ed(_, e) {
    const n = S(_, e, fi);
    return c(n);
  }
  function Cd(_, e) {
    const n = S(_, e, oi);
    return c(n);
  }
  function Rd(_, e) {
    const n = S(_, e, Xd);
    return c(n);
  }
  function Od(_, e) {
    const n = S(_, e, Yd);
    return c(n);
  }
  function qd(_) {
    return c(_);
  }
  function Gd(_, e) {
    const n = y(_, e);
    return c(n);
  }
  function Vd(_, e) {
    const n = ki(_, e);
    return c(n);
  }
  function Wd(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function Ud(_, e) {
    const n = Li(_, e);
    return c(n);
  }
  function zd(_, e) {
    const n = Ei(_, e);
    return c(n);
  }
  function jd(_, e) {
    const n = F(_, e);
    return c(n);
  }
  function Kd(_, e) {
    const n = E(_, e);
    return c(n);
  }
  function $d(_, e) {
    const n = g(_, e);
    return c(n);
  }
  function Nd(_) {
    const e = t(_);
    return c(e);
  }
  function Qd(_) {
    T(_);
  }
  function Xd(_, e) {
    u.__wasm_bindgen_func_elem_1661(_, e);
  }
  function Yd(_, e) {
    u.__wasm_bindgen_func_elem_2115(_, e);
  }
  function Hd(_, e, n) {
    u.__wasm_bindgen_func_elem_2116(_, e, c(n));
  }
  function Jd(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_3(_, e, c(n));
  }
  function Zd(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_4(_, e, c(n));
  }
  function _i(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_5(_, e, c(n));
  }
  function ei(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_7(_, e, c(n));
  }
  function ti(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_8(_, e, c(n));
  }
  function ni(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_9(_, e, c(n));
  }
  function bi(_, e, n) {
    u.__wasm_bindgen_func_elem_2116_10(_, e, c(n));
  }
  function ri(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_10755(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw T(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ci(_, e, n, b) {
    u.__wasm_bindgen_func_elem_2117(_, e, c(n), c(b));
  }
  function ai(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3017(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw T(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function fi(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3017_11(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw T(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function oi(_, e, n) {
    try {
      const a = u.__wbindgen_add_to_stack_pointer(-16);
      u.__wasm_bindgen_func_elem_3017_12(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw T(b);
    } finally {
      u.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const K = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], ui = [
    "auto"
  ], Z = [
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
  ], di = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], ii = [
    "uniform",
    "storage",
    "read-only-storage"
  ], gi = [
    "opaque",
    "premultiplied"
  ], si = [
    "standard",
    "extended"
  ], $ = [
    "never",
    "less",
    "equal",
    "less-equal",
    "greater",
    "not-equal",
    "greater-equal",
    "always"
  ], wi = [
    "none",
    "front",
    "back"
  ], __ = [
    "nearest",
    "linear"
  ], li = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], mi = [
    "nearest",
    "linear"
  ], pi = [
    "low-power",
    "high-performance"
  ], xi = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], yi = [
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
  ], hi = [
    "write-only",
    "read-only",
    "read-write"
  ], Y = [
    "store",
    "discard"
  ], e_ = [
    "all",
    "stencil-only",
    "depth-only"
  ], vi = [
    "1d",
    "2d",
    "3d"
  ], P = [
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
  ], Si = [
    "float",
    "unfilterable-float",
    "depth",
    "sint",
    "uint"
  ], H = [
    "1d",
    "2d",
    "2d-array",
    "cube",
    "cube-array",
    "3d"
  ], Ii = [
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
  ], Ai = [
    "vertex",
    "instance"
  ], Di = [
    "default",
    "no-store",
    "reload",
    "no-cache",
    "force-cache",
    "only-if-cached"
  ], Pi = [
    "omit",
    "same-origin",
    "include"
  ], Mi = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], Fi = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Ti = [
    "hidden",
    "visible"
  ];
  function c(_) {
    k === A.length && A.push(A.length + 1);
    const e = k;
    return k = A[e], A[e] = _, e;
  }
  const J = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => u.__wbindgen_export5(_.a, _.b));
  function j(_) {
    const e = typeof _;
    if (e == "number" || e == "boolean" || _ == null) return `${_}`;
    if (e == "string") return `"${_}"`;
    if (e == "symbol") {
      const r = _.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (e == "function") {
      const r = _.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(_)) {
      const r = _.length;
      let a = "[";
      r > 0 && (a += j(_[0]));
      for (let f = 1; f < r; f++) a += ", " + j(_[f]);
      return a += "]", a;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(_));
    let b;
    if (n && n.length > 1) b = n[1];
    else return toString.call(_);
    if (b == "Object") try {
      return "Object(" + JSON.stringify(_) + ")";
    } catch {
      return "Object";
    }
    return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : b;
  }
  function Bi(_) {
    _ < 1028 || (A[_] = k, k = _);
  }
  function y(_, e) {
    return _ = _ >>> 0, Ci().subarray(_ / 4, _ / 4 + e);
  }
  function ki(_, e) {
    return _ = _ >>> 0, Ri().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, Oi().subarray(_ / 4, _ / 4 + e);
  }
  function Li(_, e) {
    return _ = _ >>> 0, qi().subarray(_ / 1, _ / 1 + e);
  }
  function I(_, e) {
    _ = _ >>> 0;
    const n = w(), b = [];
    for (let r = _; r < _ + 4 * e; r += 4) b.push(t(n.getUint32(r, true)));
    return b;
  }
  function Ei(_, e) {
    return _ = _ >>> 0, Gi().subarray(_ / 2, _ / 2 + e);
  }
  function F(_, e) {
    return _ = _ >>> 0, Vi().subarray(_ / 4, _ / 4 + e);
  }
  function E(_, e) {
    return _ = _ >>> 0, B().subarray(_ / 1, _ / 1 + e);
  }
  let M = null;
  function w() {
    return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== u.memory.buffer) && (M = new DataView(u.memory.buffer)), M;
  }
  let C = null;
  function Ci() {
    return (C === null || C.byteLength === 0) && (C = new Float32Array(u.memory.buffer)), C;
  }
  let R = null;
  function Ri() {
    return (R === null || R.byteLength === 0) && (R = new Int16Array(u.memory.buffer)), R;
  }
  let O = null;
  function Oi() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(u.memory.buffer)), O;
  }
  let q = null;
  function qi() {
    return (q === null || q.byteLength === 0) && (q = new Int8Array(u.memory.buffer)), q;
  }
  function g(_, e) {
    return Ui(_ >>> 0, e);
  }
  let G = null;
  function Gi() {
    return (G === null || G.byteLength === 0) && (G = new Uint16Array(u.memory.buffer)), G;
  }
  let V = null;
  function Vi() {
    return (V === null || V.byteLength === 0) && (V = new Uint32Array(u.memory.buffer)), V;
  }
  let W = null;
  function B() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(u.memory.buffer)), W;
  }
  function t(_) {
    return A[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      u.__wbindgen_export3(c(n));
    }
  }
  let A = new Array(1024).fill(void 0);
  A.push(void 0, null, true, false);
  let k = A.length;
  function l(_) {
    return _ == null;
  }
  function S(_, e, n) {
    const b = {
      a: _,
      b: e,
      cnt: 1
    }, r = (...a) => {
      b.cnt++;
      const f = b.a;
      b.a = 0;
      try {
        return n(f, b.b, ...a);
      } finally {
        b.a = f, r._wbg_cb_unref();
      }
    };
    return r._wbg_cb_unref = () => {
      --b.cnt === 0 && (u.__wbindgen_export5(b.a, b.b), b.a = 0, J.unregister(b));
    }, J.register(r, b, b), r;
  }
  function h(_, e, n) {
    if (n === void 0) {
      const d = L.encode(_), i = e(d.length, 1) >>> 0;
      return B().subarray(i, i + d.length).set(d), x = d.length, i;
    }
    let b = _.length, r = e(b, 1) >>> 0;
    const a = B();
    let f = 0;
    for (; f < b; f++) {
      const d = _.charCodeAt(f);
      if (d > 127) break;
      a[r + f] = d;
    }
    if (f !== b) {
      f !== 0 && (_ = _.slice(f)), r = n(r, b, b = f + _.length * 3, 1) >>> 0;
      const d = B().subarray(r + f, r + b), i = L.encodeInto(_, d);
      f += i.written, r = n(r, b, f, 1) >>> 0;
    }
    return x = f, r;
  }
  function T(_) {
    const e = t(_);
    return Bi(_), e;
  }
  let U = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  U.decode();
  const Wi = 2146435072;
  let z = 0;
  function Ui(_, e) {
    return z += e, z >= Wi && (U = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), U.decode(), z = e), U.decode(B().subarray(_, _ + e));
  }
  const L = new TextEncoder();
  "encodeInto" in L || (L.encodeInto = function(_, e) {
    const n = L.encode(_);
    return e.set(n), {
      read: _.length,
      written: n.length
    };
  });
  let x = 0, u;
  function zi(_) {
    u = _;
  }
  URL = globalThis.URL;
  const m = await n_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: Qd,
      __wbg_next_71f2aa1cb3d1e37e: Lr,
      __wbg_done_89b2b13e91a60321: sn,
      __wbg_value_a5d5488a9589444a: fd,
      __wbg_get_507a50627bffa49b: Lb,
      __wbg_then_16d107c451e9905d: mu,
      __wbg_new_227d7c05414eb861: pr,
      __wbg_stack_3b0d974bbf31e44f: F0,
      __wbg_error_a6fa202b58aa1cd3: En,
      __wbg_clearTimeout_333bba87532ab9d3: Fe,
      __wbg_fetch_074561c3e313c86f: Rn,
      __wbindgen_object_clone_ref: Nd,
      __wbg_setTimeout_3a808dd861dd3c12: Hc,
      __wbg_userAgentData_31b8f893e8977e94: cd,
      __wbg_brands_b7dcf262485c3e7c: oe,
      __wbg_length_370319915dc99107: er,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: Rb,
      __wbg_brand_3bc196a43eceb8af: fe,
      __wbg_cancel_65f38182e2eeac5c: ye,
      __wbg_requestFullscreen_b977a3a0697e883c: kc,
      __wbg_animate_8f41e2f47c7d04ab: P_,
      __wbg_play_3997a1be51d27925: Xr,
      __wbg_requestFullscreen_3f16e43f398ce624: Bc,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: pd,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: xd,
      __wbg_catch_c1a60df4c30d76d3: he,
      __wbg_scheduler_a17d41c9c822fc26: Gc,
      __wbg_postTask_e2439afddcdfbb55: bc,
      __wbg_Window_c7f91e3f80ae0a0e: c_,
      __wbg_prototype_0d5bb2023db3bcfc: ac,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: gb,
      __wbg_offsetX_a9bf2ea7f0575ac9: Wr,
      __wbg_offsetY_10e5433a1bbd4c01: Ur,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: tb,
      __wbg_scheduler_b35fe73ba70e89cc: Vc,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: Lc,
      __wbg_push_d2ae3af0c1217ae6: oc,
      __wbg_performance_3fcf6e32a7e1ed0a: Kr,
      __wbg_now_e7c6795a7f81e10f: Cr,
      __wbg_set_dst_factor_ec7407f19be1aff9: nf,
      __wbg_set_operation_62ce44e1728c4047: so,
      __wbg_set_src_factor_9bfe84af9b7b5cac: Ro,
      __wbg_set_texture_1f64653a5d2d7b4d: Yo,
      __wbg_set_mip_level_f7ac79e8c54f59ad: eo,
      __wbg_set_x_876d592971db129a: h0,
      __wbg_set_y_2b1f5ac0dd5586a5: v0,
      __wbg_set_z_ef005d82bc9d24e3: S0,
      __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: wo,
      __wbg_set_aspect_4962514fe99e68e6: wa,
      __wbg_Window_afcc911b2f9c92e2: r_,
      __wbg_gpu_2ccc250735d24a2a: Ob,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: a_,
      __wbg_set_a_88262a42340d0b1c: ba,
      __wbg_set_b_c47befe0af3261eb: ma,
      __wbg_set_g_5983abfc46e0cf4e: hf,
      __wbg_set_r_c6f4c68f4804d655: yo,
      __wbg_queue_adce34608fd0c893: lc,
      __wbg_set_power_preference_8fdca0b7af640d49: mo,
      __wbg_requestAdapter_2e6718811c735a57: Mc,
      __wbg_set_color_attachments_581fdb3310e4abfa: Ca,
      __wbg_set_label_17eb9fe3a02f62b0: Mf,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: w0,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: ja,
      __wbg_set_depth_load_op_511c513eab4e56a9: Na,
      __wbg_set_depth_store_op_c89f33b39b43361c: Ja,
      __wbg_set_depth_read_only_7f41a74741c144ec: Xa,
      __wbg_set_stencil_clear_value_42be608809151e2a: qo,
      __wbg_set_stencil_load_op_31838c036993098a: Vo,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: zo,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: Uo,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: Ha,
      __wbg_set_query_set_41de86d2401aee04: xo,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: ya,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: bf,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: Jo,
      __wbg_beginRenderPass_aa22c432e793359a: E_,
      __wbg_set_width_9f685402c2cbee70: x0,
      __wbg_set_height_14335c4047cf9c1b: If,
      __wbg_set_depth_or_array_layers_89371305ed0bd962: Qa,
      __wbg_label_7ed42f25f841996b: Zb,
      __wbg_set_label_08d9be3e4719c226: Pf,
      __wbg_finish_4d91de5e927dd13f: Gn,
      __wbg_finish_6e06b68ab68cd9f6: Vn,
      __wbg_drawIndexed_d31913e79d58fbac: Sn,
      __wbg_setPipeline_c41bf46790f27f9e: Qc,
      __wbg_setBindGroup_268fd1714fff0ef5: jc,
      __wbg_setBindGroup_f0de6cb2c7dbfc2c: Kc,
      __wbg_setIndexBuffer_7f3cf667b4d71566: Nc,
      __wbg_setIndexBuffer_2531a9103450445e: $c,
      __wbg_setVertexBuffer_1e448859663dd400: _a,
      __wbg_setVertexBuffer_7cf533d694e747f3: ea,
      __wbg_draw_6877f98847e1e36c: In,
      __wbg_end_f99ebed53d4e198a: Tn,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: lb,
      __wbg_getCurrentTexture_20714d1bd9051cab: fb,
      __wbg_set_device_e275d1d4f3c9eb74: _f,
      __wbg_set_format_815efd4dc4817bbb: mf,
      __wbg_set_usage_a137f82ca163b0a9: r0,
      __wbg_set_alpha_mode_df805952892caa9c: ua,
      __wbg_set_mode_9990b3393ba469ae: bo,
      __wbg_set_tone_mapping_b3464f1baa4cff92: Zo,
      __wbg_set_view_formats_5797d2fff3c11808: g0,
      __wbg_configure_0e4789c0f6b35c8e: Ke,
      __wbg_new_typed_4148bd5ae72ab3f0: Fr,
      __wbg_set_required_limits_871ed33c68613dcb: vo,
      __wbg_set_required_features_1baf274a8669db60: ho,
      __wbg_set_label_60ad96c811e0d109: kf,
      __wbg_requestDevice_ab46d0519ea1cc34: Tc,
      __wbg_set_size_f64_6bcd40704bf4cfdc: Lo,
      __wbg_set_usage_b2a2935f37bf3d08: c0,
      __wbg_set_mapped_at_creation_81b586dc90a50347: Nf,
      __wbg_set_label_d010f237b26f2c55: Rf,
      __wbg_createBuffer_0726dd2ab09ea1d2: et,
      __wbg_set_address_mode_u_9e2695575a219e33: ca,
      __wbg_set_address_mode_v_f479b2e6cccbcac4: aa,
      __wbg_set_address_mode_w_46273e153230180d: fa,
      __wbg_set_compare_cd9b62cdb92eb580: Ra,
      __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: jf,
      __wbg_set_lod_min_clamp_6d20c97916baeb93: Kf,
      __wbg_set_mag_filter_b5adebc99cb938e1: $f,
      __wbg_set_min_filter_c72f17375e135f0a: Jf,
      __wbg_set_mipmap_filter_5bf66195a3639700: to,
      __wbg_set_max_anisotropy_2beada0e2db62c45: Xf,
      __wbg_set_label_5ee7427342869829: Bf,
      __wbg_createSampler_c8ffb3c8d565f704: lt,
      __wbg_set_format_2c1414a817c213f8: gf,
      __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: Co,
      __wbg_set_usage_ba5b0f8b333ab325: a0,
      __wbg_set_label_547d0d4aec39fbe9: Tf,
      __wbg_set_dimension_868eee80f4b90011: ef,
      __wbg_set_mip_level_count_776c8c218b65bc08: _o,
      __wbg_set_sample_count_eb86a8b18545b54f: Mo,
      __wbg_set_view_formats_4347dc8363331086: i0,
      __wbg_createTexture_1bac74c999b8a48e: ht,
      __wbg_set_entries_a12aca1e458b0456: cf,
      __wbg_set_layout_913d53c17194c989: Wf,
      __wbg_set_label_79387decda299036: Ef,
      __wbg_createBindGroup_655c6e6c0258530e: Ze,
      __wbg_set_code_b4f37f81f45b5b25: La,
      __wbg_set_label_e3944e54881b8c50: qf,
      __wbg_createShaderModule_2e44fc7677c6288b: mt,
      __wbg_set_label_72bb4f41ef0cb893: Lf,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: nt,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: ha,
      __wbg_set_label_9556af8b5cda3c9d: Cf,
      __wbg_createPipelineLayout_2c8cd4528b06c108: ft,
      __wbg_set_module_d0e2098713606cae: ro,
      __wbg_set_entry_point_e87e79251dd3144f: ff,
      __wbg_set_buffers_7d0d8f507699e956: Fa,
      __wbg_set_layout_50ab727f44b38f26: Vf,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: Uf,
      __wbg_set_vertex_0be5d146f9ff6f36: o0,
      __wbg_set_label_e922700240417ab5: Gf,
      __wbg_set_format_e52bdcca880d2c8e: pf,
      __wbg_set_depth_compare_0c8631eb2eae98e3: Ka,
      __wbg_set_depth_write_enabled_ce89750042940350: Za,
      __wbg_set_depth_bias_d7cd16096242a657: Ua,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: Wa,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: za,
      __wbg_set_compare_f36b34abfaa08ccb: Oa,
      __wbg_set_depth_fail_op_668155ae33d3c06f: $a,
      __wbg_set_fail_op_92f716dbc88b6973: uf,
      __wbg_set_pass_op_cf02fa088d6352a7: lo,
      __wbg_set_stencil_back_85b22f1db5b1940a: Oo,
      __wbg_set_stencil_front_525526164a798a44: Go,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: Wo,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: jo,
      __wbg_set_depth_stencil_97506c7bea4f53da: Ya,
      __wbg_set_module_f02e076ca7e7daf8: co,
      __wbg_set_targets_c38bd200c836d66f: Xo,
      __wbg_set_entry_point_207540f042015ce5: af,
      __wbg_set_fragment_8b780f00a0b0e6f3: xf,
      __wbg_set_count_069a4eac409bac55: qa,
      __wbg_set_mask_70a8a59ce09e5997: Qf,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: da,
      __wbg_set_multisample_37ddafe88b5cd466: ao,
      __wbg_set_cull_mode_fc649853947a3d0c: Va,
      __wbg_set_front_face_28ffdf524eedce5b: yf,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: Qo,
      __wbg_set_topology_da25f2cc5af203d2: _0,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: b0,
      __wbg_set_primitive_43c23761a55b4088: po,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: it,
      __wbg_set_entries_86a29dd6291c95e7: rf,
      __wbg_set_label_48e6b787d256f621: Ff,
      __wbg_createBindGroupLayout_49a7e2b3d076afcf: Je,
      __wbg_writeBuffer_8b5bd251a89198bc: hd,
      __wbg_set_bytes_per_row_d69b88eee3929c07: Ta,
      __wbg_set_rows_per_image_59a813ac5006e10e: Po,
      __wbg_set_offset_f64_fa66068813376ca3: io,
      __wbg_writeTexture_53ba204c494b042c: vd,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: zr,
      __wbg_submit_ce44115121cd166c: K0,
      __wbg_getMappedRange_d0bf3141224111b6: ib,
      __wbg_unmap_adaf93276fdf9aaf: ed,
      __wbg_destroy_fe937f756bf8df37: nn,
      __wbg_mapAsync_52b01fa9e8f765fd: ar,
      __wbg_set_dimension_e325282e613ca0a4: tf,
      __wbg_set_format_1fcaa7d60546b490: df,
      __wbg_set_aspect_0d453bca3d012f02: sa,
      __wbg_set_base_array_layer_f176bb9f1b37b342: pa,
      __wbg_set_array_layer_count_7312f0f31af94e7c: ia,
      __wbg_set_base_mip_level_1df145d9f8db32a9: xa,
      __wbg_set_mip_level_count_534caaa7e68e68b8: Zf,
      __wbg_set_label_e16e2dbe51349c7f: Of,
      __wbg_set_usage_ddd42599bbba7779: f0,
      __wbg_createView_ceaf2f5881adbd34: At,
      __wbg_set_format_5d2f25cc93654ecc: wf,
      __wbg_set_offset_f64_28c24dc15000932e: oo,
      __wbg_set_shader_location_7e1832a74f912217: Bo,
      __wbg_set_write_mask_d45279e56abbfcb5: y0,
      __wbg_set_format_5ff53724ed6cedf2: lf,
      __wbg_set_blend_7493c2066c3e9970: Ia,
      __wbg_set_attributes_7537844a7e6dafdc: la,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: ga,
      __wbg_set_step_mode_a97bb24714da41a9: Ko,
      __wbg_set_visibility_9570b037224c4cc2: l0,
      __wbg_set_storage_texture_939a097db4b18bd4: $o,
      __wbg_set_external_texture_386483d8dd82ab56: of,
      __wbg_set_binding_155b0440b4307793: va,
      __wbg_set_buffer_ef7f75306cf663ed: Ma,
      __wbg_set_sampler_c0e1258543a33bce: To,
      __wbg_set_texture_9dcedde1bb31eda6: Ho,
      __wbg_set_sample_type_c32e1dfff94e63eb: Fo,
      __wbg_set_multisampled_7913fd7183272840: fo,
      __wbg_set_view_dimension_4818d4c18ce5815e: d0,
      __wbg_set_view_dimension_0df554032f1f3a85: u0,
      __wbg_set_format_533f9ffa7eef563d: sf,
      __wbg_set_access_9a5092f05dc45fad: ra,
      __wbg_set_alpha_bfd2df62e7bc581b: oa,
      __wbg_set_color_83aa977526e88cbb: Ea,
      __wbg_set_load_op_99661da6c4eab9b0: zf,
      __wbg_set_store_op_b5fdf672436f13f3: No,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: s0,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: ka,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: So,
      __wbg_set_type_ccf8472d40abcddf: t0,
      __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: vf,
      __wbg_set_min_binding_size_f64_5005a6904cdf43da: Hf,
      __wbg_set_type_d09829f59932a0fc: n0,
      __wbg_set_buffer_c3410572051920ba: Pa,
      __wbg_set_offset_f64_89f0ce01a689839e: uo,
      __wbg_set_size_f64_8b8f6bba5d678162: Eo,
      __wbg_set_binding_f74df3510792aba1: Sa,
      __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: Ao,
      __wbg_set_resource_5ae7b5e67924f234: Io,
      __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: Do,
      __wbg_unconfigure_0a07a0a40de8988d: xu,
      __wbg_includes_78c9a3115b08eddc: Wb,
      __wbg_clearBufferuiv_df94a395d4915377: Ie,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: We,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: ze,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: je,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: Qe,
      __wbg_clientWaitSync_cf8e49f8ba228377: Le,
      __wbg_compressedTexSubImage2D_c1362291573c7268: Ve,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: He,
      __wbg_createQuery_047c7c524e4ac4f8: dt,
      __wbg_createSampler_70c8392d98896235: wt,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: It,
      __wbg_deleteQuery_0d1dcc4402a86ee1: Ot,
      __wbg_deleteSampler_0abb528566c4ab3b: Vt,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: db,
      __wbg_getQueryParameter_919125495ccb17ca: vb,
      __wbg_getSyncParameter_d8f6c145657a3550: Fb,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: Tb,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Qb,
      __wbg_deleteSync_9b0e43580942a0f6: zt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Nt,
      __wbg_drawArraysInstanced_51b161548a3f10c4: ln,
      __wbg_drawBuffers_1c1ec9b292442a2a: yn,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: vn,
      __wbg_endQuery_a50f7fc49cfe56e9: Fn,
      __wbg_fenceSync_fe2cdba4a0d73679: Cn,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Xn,
      __wbg_getBufferSubData_11018928c908ac2c: _b,
      __wbg_readBuffer_4271437a70aae481: mc,
      __wbg_readPixels_5f013a7d85b23800: pc,
      __wbg_readPixels_82c9dee754d58176: xc,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Ic,
      __wbg_texImage3D_ef16a1f721b3f908: Y0,
      __wbg_texStorage2D_7f947efc63dac273: Z0,
      __wbg_texStorage3D_f8f2e4b3386736f9: _u,
      __wbg_texSubImage2D_d1af697e69f8a9e4: cu,
      __wbg_texSubImage2D_047380bb2660e4f9: eu,
      __wbg_texSubImage2D_6a376bfc3a31436b: nu,
      __wbg_texSubImage2D_98c43894eb217aa7: bu,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: Oc,
      __wbg_samplerParameteri_7b1b4091de49aabb: qc,
      __wbg_texImage2D_5abd8779d1d033c7: N0,
      __wbg_texImage2D_8d168171984f2a40: Q0,
      __wbg_texImage3D_bdd9bebe42ed1f52: X0,
      __wbg_texSubImage2D_5058af3d30a8e205: tu,
      __wbg_texSubImage2D_e107b4f88c19b920: fu,
      __wbg_texSubImage2D_bed5e7a3cd81d409: ru,
      __wbg_texSubImage3D_8077e90ec309c414: iu,
      __wbg_texSubImage3D_45e498ae6298998c: ou,
      __wbg_uniform1ui_cd7ad5581093b3df: Iu,
      __wbg_uniform2fv_1b43656b33177d21: Au,
      __wbg_uniform2iv_859048b9d60f46ae: Pu,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: uu,
      __wbg_texSubImage3D_6cb6cfd732dad145: du,
      __wbg_texSubImage3D_93b38c69acb735c8: gu,
      __wbg_texSubImage3D_c9e5a071796d412f: su,
      __wbg_texSubImage3D_feebaf7f0f4594c6: wu,
      __wbg_uniform2uiv_8a9cb3155271213b: Fu,
      __wbg_uniform4fv_674a247aeb15012d: qu,
      __wbg_uniform4iv_d02934d7b94df609: Vu,
      __wbg_uniform3fv_8ecb5ebb510b7bce: Tu,
      __wbg_uniform3iv_09abae5eabd6b9d6: ku,
      __wbg_uniform3uiv_3c0b163732f5b8f0: Eu,
      __wbg_uniform4uiv_0d1a8ed214f10c31: Wu,
      __wbg_uniformMatrix3fv_568aa181379c8a75: Qu,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: Xu,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: Yu,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: Uu,
      __wbg_uniformMatrix2fv_9284424cc6aac672: ju,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: Ku,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: $u,
      __wbg_uniformMatrix4fv_423b958042692150: Ju,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: dd,
      __wbg_activeTexture_d12958674e97a118: v_,
      __wbg_attachShader_8971266b4c9bc514: k_,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: C_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: q_,
      __wbg_bindFramebuffer_390311eff3896937: V_,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: z_,
      __wbg_bindTexture_28eff4bbd8aaab54: K_,
      __wbg_blendColor_eae0cd578a2c7d15: Y_,
      __wbg_blendEquation_455b8986ededabc0: Z_,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: H_,
      __wbg_blendFunc_114dc7056ccfeb8d: ne,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: te,
      __wbg_clear_dd06a0da4ce8e13f: ke,
      __wbg_clearDepth_ca9b22d41551b513: De,
      __wbg_clearStencil_58f2af46612bccae: Pe,
      __wbg_colorMask_a4d164c2039b5731: Oe,
      __wbg_compileShader_9bdfd792722cf704: qe,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: Zu,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: _d,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: ud,
      __wbg_copyTexSubImage2D_8daea651fc408645: Xe,
      __wbg_createBuffer_01568a9d930d90dd: _t,
      __wbg_createFramebuffer_de0d521f546e7534: ct,
      __wbg_createProgram_538c9777a4ac084f: ut,
      __wbg_createRenderbuffer_9d801bf44c314f44: st,
      __wbg_createShader_7d139f2d50f77365: xt,
      __wbg_createTexture_d13f98e0d3d912f4: vt,
      __wbg_cullFace_f1c75ae19b07eaf3: Ft,
      __wbg_deleteBuffer_1ca3ffe668a488e7: kt,
      __wbg_getExtension_101c7e41de3e4d90: ub,
      __wbg_getParameter_d39f59581389af1b: wb,
      __wbg_getProgramInfoLog_d1ce570463a68779: pb,
      __wbg_getProgramParameter_c8d1154fbb3c0890: yb,
      __wbg_getShaderInfoLog_5cee2add982c7165: Sb,
      __wbg_getShaderParameter_3394e75dcb97f380: Ab,
      __wbg_getSupportedExtensions_2a7458ec45e82560: Pb,
      __wbg_getUniformLocation_788a34295dd6fabe: kb,
      __wbg_deleteFramebuffer_963cd69957209d37: Lt,
      __wbg_deleteProgram_132e191baa9fa84f: Rt,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: qt,
      __wbg_deleteShader_993edb4beb3c4d53: Ut,
      __wbg_deleteTexture_bdc2202d7a50dcea: Kt,
      __wbg_depthFunc_74a8f8acf8973c86: Jt,
      __wbg_depthMask_a644a67deced3257: _n,
      __wbg_depthRange_5e90d4d236280ff5: tn,
      __wbg_disable_1659d1b7d50c31e7: fn,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: an,
      __wbg_drawArrays_b0c59a6e158122f2: pn,
      __wbg_enable_28bbeed576131d1f: Pn,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: Dn,
      __wbg_finish_cbe7ec8675dd7705: Wn,
      __wbg_flush_e03c08da6863b5ab: zn,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: $n,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: Nn,
      __wbg_frontFace_29ef7151de8b5ed9: Hn,
      __wbg_linkProgram_4e047fb3197a0348: tr,
      __wbg_pixelStorei_c844cd0db4f1fde6: Qr,
      __wbg_polygonOffset_4eb460adf41db6cd: Jr,
      __wbg_renderbufferStorage_0a8de92542893819: Ac,
      __wbg_scissor_105e756596bc35df: Wc,
      __wbg_vertexAttribPointer_a8f0af57269c2067: id,
      __wbg_viewport_affdf15c559df1e2: sd,
      __wbg_shaderSource_c3469dc2221dd528: A0,
      __wbg_stencilFuncSeparate_814300446c2969ef: O0,
      __wbg_stencilMask_9a844dc58a89992f: W0,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: q0,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: z0,
      __wbg_texParameteri_1fc451e0964fc91c: H0,
      __wbg_uniform1f_62692c8fa8e7bf1e: yu,
      __wbg_uniform1i_7621f908f78177df: Su,
      __wbg_uniform4f_9ff60fc65b0ed726: Cu,
      __wbg_useProgram_49495850b446fa56: rd,
      __wbg_bufferSubData_bae930b21e9c1c48: se,
      __wbg_clearBufferfv_2e0f1a0ea56de859: ve,
      __wbg_clearBufferiv_0360269bf6e34c54: Se,
      __wbg_beginQuery_042a1f99e870066c: L_,
      __wbg_bindBufferRange_f5c29912db0476e9: O_,
      __wbg_bindSampler_ce608f0de9d31acf: j_,
      __wbg_bindVertexArray_427eeac0c1764d8a: Q_,
      __wbg_blitFramebuffer_a1215976f663b058: re,
      __wbg_bufferData_3d4f29bdfb1fa46c: de,
      __wbg_bufferData_90ef588bac2be2f5: ie,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: $b,
      __wbg_cancelIdleCallback_b9e469156370a1e5: xe,
      __wbg_getComputedStyle_961681bdf7e518e8: nb,
      __wbg_matchMedia_9968278b31706f78: fr,
      __wbg_cancelAnimationFrame_086d6084925c4e06: pe,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Fc,
      __wbg_clearTimeout_8f80437be2324e09: Te,
      __wbg_requestIdleCallback_d292749bf33501af: Ec,
      __wbg_setTimeout_5ccd86968701f1ec: Jc,
      __wbg_setTimeout_cfa2cf195c3738db: Zc,
      __wbg_queueMicrotask_ed5b33385a53c3a9: wc,
      __wbg_navigator_99621db14b3f1099: lr,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: rn,
      __wbg_document_179650d6cb13c263: gn,
      __wbg_location_c9a2271428996698: rr,
      __wbg_instanceof_Window_05ba1ee4f6781663: Nb,
      __wbg_visibilityState_301d0905e8103e21: ld,
      __wbg_activeElement_4bc99dc1a7094c27: y_,
      __wbg_fullscreenElement_9f50a5e63bb433a8: Zn,
      __wbg_createElement_fcbc0805de826d62: bt,
      __wbg_getElementById_1cbd8f06dbe8eb8e: ob,
      __wbg_querySelector_fd7d157ebe17cd16: ic,
      __wbg_querySelectorAll_7e98cbe256deaadd: dc,
      __wbg_body_40ec34e0a2931fe8: ae,
      __wbg_setPointerCapture_70025ca3fb7f26b9: Xc,
      __wbg_setAttribute_71039043be82d098: zc,
      __wbg_focus_2f77051f98540625: jn,
      __wbg_style_6657aed849e5d757: j0,
      __wbg_fetch_b5951fc96f52f786: On,
      __wbg_navigator_51379c10a84aeec9: wr,
      __wbg_uniform2iv_f84a24961c0cfcd0: Mu,
      __wbg_uniform3fv_95d1933ea1440725: Bu,
      __wbg_uniform3iv_a3a7008990fd84f0: Lu,
      __wbg_uniform4fv_4ca8c114ca3de099: Ou,
      __wbg_clear_53d71d234e14e4c1: Be,
      __wbg_clearDepth_8b5d226aae155082: Ae,
      __wbg_clearStencil_a66fe23df6313fc7: Me,
      __wbg_colorMask_44ebb91cad2502f2: Re,
      __wbg_compileShader_fc2e4b73240d4fd7: Ge,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: Ye,
      __wbg_createBuffer_2075765bde5035d5: tt,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: rt,
      __wbg_createProgram_118becaac3a20318: ot,
      __wbg_createRenderbuffer_71af5c0d615e9271: gt,
      __wbg_createShader_78bc8b7e9a88e1a8: pt,
      __wbg_createTexture_0ee0fa5f924f3d14: yt,
      __wbg_cullFace_62bbea3bef0e6b99: Mt,
      __wbg_deleteBuffer_08eb938e35c27967: Bt,
      __wbg_deleteFramebuffer_d1a36e889b009344: Et,
      __wbg_deleteProgram_09bd45a51105b2f6: Ct,
      __wbg_deleteRenderbuffer_ca999f7883b777af: Gt,
      __wbg_deleteShader_3120790d36063afe: Wt,
      __wbg_deleteTexture_2b163b157ea1be24: jt,
      __wbg_depthFunc_455cfeb8a9d2fb4c: Ht,
      __wbg_depthMask_4bd6c73b1339d257: Zt,
      __wbg_depthRange_38b2287ffbea14fd: en,
      __wbg_uniform4iv_45ab52abcb3f882c: Gu,
      __wbg_uniformMatrix2fv_769725d64641341f: zu,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: Nu,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: Hu,
      __wbg_activeTexture_92b04d918019d603: h_,
      __wbg_attachShader_5f7f4077e124e23b: B_,
      __wbg_bindAttribLocation_94202d7a59ab7863: R_,
      __wbg_bindBuffer_a01497b1abdcdd9a: G_,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: W_,
      __wbg_bindRenderbuffer_75e8469e930840fa: U_,
      __wbg_bindTexture_9b04b1b7c00d4dd6: $_,
      __wbg_blendColor_793b560dc69ddd0b: X_,
      __wbg_blendEquation_f5c5272993f6cb01: _e,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: J_,
      __wbg_blendFunc_a854d7e4459150ba: be,
      __wbg_blendFuncSeparate_37156309688f8f88: ee,
      __wbg_disable_40c3975167c1ee07: on,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: cn,
      __wbg_drawArrays_676becae0149ed65: mn,
      __wbg_enable_611804c0ac1504ce: Mn,
      __wbg_enableVertexAttribArray_4c08219124740f14: An,
      __wbg_finish_126e6f2ac71e3096: qn,
      __wbg_flush_db77b4a63d6b337d: Un,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Kn,
      __wbg_linkProgram_d7c71c539c8c6a43: nr,
      __wbg_pixelStorei_2a93b18efde9acf8: Nr,
      __wbg_polygonOffset_eccb68e40a18f861: Zr,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: Dc,
      __wbg_scissor_573b844152316b8d: Uc,
      __wbg_shaderSource_4cf90af97621ff49: I0,
      __wbg_stencilFuncSeparate_35136c4e5153406f: R0,
      __wbg_stencilMask_1c99b79b516d12dd: V0,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: G0,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: U0,
      __wbg_texParameteri_9d0daa263d3a863f: J0,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Qn,
      __wbg_frontFace_fc6d98dafa42de87: Jn,
      __wbg_getParameter_039a5899307fab55: sb,
      __wbg_getProgramInfoLog_c4762e0513468a26: mb,
      __wbg_getProgramParameter_b9995b56c258ac86: xb,
      __wbg_getShaderInfoLog_bc236afe696c1283: Ib,
      __wbg_getShaderParameter_cbcc0995e8e16214: Db,
      __wbg_getUniformLocation_24ef46cdda2148ab: Bb,
      __wbg_uniform1f_b79d0c5667f9fb40: hu,
      __wbg_uniform1i_5830de6702add20a: vu,
      __wbg_uniform4f_b25e39808b830021: Ru,
      __wbg_useProgram_182d120fe476921b: bd,
      __wbg_vertexAttribPointer_b300c8e000cdac93: gd,
      __wbg_viewport_e8a16ca4a5085e5f: wd,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: au,
      __wbg_uniform2fv_948dab6a82b428ac: Du,
      __wbg_bufferData_ce4f44d56e9ddab5: ge,
      __wbg_bufferData_073a7c6abef7a55f: ue,
      __wbg_bufferSubData_ce9854d3d337e2cf: we,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: Ue,
      __wbg_readPixels_c7861e25836bf57b: yc,
      __wbg_texImage2D_3813406af5bf54c8: $0,
      __wbg_new_5394f65338077341: vr,
      __wbg_inlineSize_3c8412828bef21eb: zb,
      __wbg_disconnect_39bfdcb35b1fc7b9: un,
      __wbg_blockSize_5af477b962b2b031: ce,
      __wbg_observe_f27242eadc2ebd47: qr,
      __wbg_observe_615bef91ee28c925: Rr,
      __wbg_unobserve_41a4f85162f1fb18: td,
      __wbg_isIntersecting_fc6d9529a49c5d62: Yb,
      __wbg_log_d267660666346fb3: cr,
      __wbg_info_eadbe775a8e2e9eb: Ub,
      __wbg_warn_b1370d804fa3e259: md,
      __wbg_debug_87fd9b1a625b7efb: Tt,
      __wbg_error_744744ff0c9861e6: kn,
      __wbg_error_7ed559cd7146b49d: Ln,
      __wbg_width_20c45c895834b83f: yd,
      __wbg_height_9f27216001e3c804: Vb,
      __wbg_set_width_8e30d010cd66830d: p0,
      __wbg_set_height_7d9d8f892e6964c6: Af,
      __wbg_getContext_e79ddf6a9cb3cc76: cb,
      __wbg_getContext_ca12bb65aab778a4: rb,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: jb,
      __wbg_set_credentials_bb34a40189e3b43b: Ga,
      __wbg_set_body_029f2d171e0a005f: Aa,
      __wbg_set_mode_66c79886ad78fc05: no,
      __wbg_set_cache_b4a740b195c051f4: Ba,
      __wbg_set_method_5532d59b92d76467: Yf,
      __wbg_set_signal_c4ef8faddb4c1446: ko,
      __wbg_set_headers_9c61d123c3ee1f10: Sf,
      __wbg_set_box_223b9bc0b7f548f6: Da,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: Yn,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: wn,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: N_,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: hn,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: St,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: $t,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: od,
      __wbg_set_onmessage_d511b70365304094: go,
      __wbg_set_width_49ac9b7d914afc85: m0,
      __wbg_getPropertyValue_dc6b061239dad6f1: hb,
      __wbg_set_height_bbeef8f354041577: Df,
      __wbg_removeProperty_70da952bc1b493fa: Sc,
      __wbg_close_3423cc7dafc477bb: Ee,
      __wbg_new_25e75d1f0df4d87a: xr,
      __wbg_setProperty_e4e51b1b1d681d15: Yc,
      __wbg_postMessage_b80f20949a4b4f55: tc,
      __wbg_start_d0cdf16ff965b3f3: T0,
      __wbg_getContext_fd298c901058eb31: ab,
      __wbg_getContext_7476e39fa008047e: bb,
      __wbg_appendChild_f553e8704c4f14a6: M_,
      __wbg_contains_7189b09a477442a6: $e,
      __wbg_url_abdb8fb08377f8c0: nd,
      __wbg_arrayBuffer_3b637f0fa65c5351: T_,
      __wbg_text_d3a29f7525a132c3: lu,
      __wbg_get_b2053e9bfdf3ca8e: Cb,
      __wbg_status_c45b3b9b3033184a: C0,
      __wbg_persisted_e508d4d322115185: $r,
      __wbg_headers_cf9c80f30e2a4eff: Gb,
      __wbg_new_with_str_and_init_d95cbe11ce28e65e: Br,
      __wbg_instanceof_Response_c8b64b2256f01bec: Kb,
      __wbg_ctrlKey_50bd8324959ca786: Pt,
      __wbg_shiftKey_9f797da486b2ade8: P0,
      __wbg_altKey_f3e24c4c9cfcf271: D_,
      __wbg_metaKey_f934f09e37889d70: ir,
      __wbg_button_f6a9a7b725f1838e: le,
      __wbg_buttons_d8acd46cf8f40ae9: me,
      __wbg_movementX_87e39021f3fce8b8: gr,
      __wbg_movementY_f6f63087e2248fa9: sr,
      __wbg_set_type_8ce203e412e28cf6: e0,
      __wbg_origin_ed66c06e67ad2049: jr,
      __wbg_media_40cbd26ab34df71f: ur,
      __wbg_matches_978994974df1e85b: or,
      __wbg_addListener_b5b7f95360b22984: I_,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: uc,
      __wbg_removeListener_768e1e787e1d4b2e: vc,
      __wbg_deltaX_5d829ffba565ed10: Xt,
      __wbg_deltaY_6cfce8f8da250c23: Yt,
      __wbg_deltaMode_d869228efd74f393: Qt,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Ne,
      __wbg_now_390768da5ee9e776: Er,
      __wbg_userAgent_0558f0ac642f7771: ad,
      __wbg_new_e0bd7540d9834af6: Dr,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: bn,
      __wbg_disconnect_491a6bfd82cdd887: dn,
      __wbg_observe_c3834a3e4cde3e64: Or,
      __wbg_new_8f0c2d11e48a4727: Sr,
      __wbg_postMessage_ef2dbf5e8c8ebffc: nc,
      __wbg_preventDefault_b64888c857500682: cc,
      __wbg_signal_dad7cb35193abd31: M0,
      __wbg_addEventListener_d85450ee1320c989: S_,
      __wbg_new_4339b2a2675a03e3: hr,
      __wbg_abort_8bae0f33e7833997: p_,
      __wbg_abort_eee9248a6d680839: x_,
      __wbg_altKey_50f830d1793a2eea: A_,
      __wbg_removeEventListener_a3f23c70077bdcc1: hc,
      __wbg_ctrlKey_2e52816fa7160097: Dt,
      __wbg_shiftKey_9bcb8bdd60c2f152: D0,
      __wbg_metaKey_d961c7572a9f84f5: dr,
      __wbg_location_8f24df2c257fb974: br,
      __wbg_repeat_4e131e99bff9b9f4: Pc,
      __wbg_key_803dca86cdcfa8dd: Jb,
      __wbg_code_89c999e407c79eef: Ce,
      __wbg_createObjectURL_416e527781e6fd6d: at,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: Rc,
      __wbg_new_0d809930cd1354c6: mr,
      __wbg_port1_dabba0a56576e47e: _c,
      __wbg_port2_d05676aee003eedc: ec,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: xn,
      __wbg_getSupportedProfiles_90a4f330938d0241: Mb,
      __wbg_new_f1a34223ddbe3f7d: Pr,
      __wbg_append_01c74e5c6b58aa64: F_,
      __wbg_entries_900cefd6f70eb290: Bn,
      __wbg_pointerId_ea33d2695be12e7f: Yr,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: kr,
      __wbg_pressure_9a7845d9744ae9f4: rc,
      __wbg_pointerType_d5e932608aa61bb6: Hr,
      __wbg_getCoalescedEvents_366947e5550da21b: eb,
      __wbg_resolve_2191a4dfe481c25b: Cc,
      __wbg_then_6ec10ae38b3e92f7: pu,
      __wbg_new_da52cf8fe3429cb2: Ar,
      __wbg_new_32b398fb48b6d94a: yr,
      __wbg_of_85f52f8b6491a7ca: Vr,
      __wbg_of_5f1b88183ddb5d94: Gr,
      __wbg_isArray_0677c962b281d01a: Xb,
      __wbg_is_7b9d0b289033c7de: Hb,
      __wbg_length_1f0964f4a5e2c6d8: _r,
      __wbg_prototypesetcall_4770620bbe4688a0: fc,
      __wbg_set_61e45ae8061eca11: ta,
      __wbg_new_cd45aabdf6073e84: Ir,
      __wbg_new_from_slice_77cdfb7977362f3c: Mr,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: Tr,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: k0,
      __wbg_static_accessor_SELF_146583524fe1469b: L0,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: B0,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: E0,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: gc,
      __wbg_queueMicrotask_6a09b7bc46549209: sc,
      __wbg_get_78f252d074a84d0b: Eb,
      __wbg_has_8374cf06984d8bfc: qb,
      __wbg_set_8535240470bf2500: na,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: s_,
      __wbg___wbindgen_throw_344f42d3211c4765: l_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: d_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: i_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: w_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: f_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: u_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: g_,
      __wbg__wbg_cb_unref_fffb441def202758: m_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: o_,
      __wbindgen_cast_0000000000000001: Sd,
      __wbindgen_cast_0000000000000002: Id,
      __wbindgen_cast_0000000000000003: Ad,
      __wbindgen_cast_0000000000000004: Dd,
      __wbindgen_cast_0000000000000005: Pd,
      __wbindgen_cast_0000000000000006: Md,
      __wbindgen_cast_0000000000000007: Fd,
      __wbindgen_cast_0000000000000008: Td,
      __wbindgen_cast_0000000000000009: Bd,
      __wbindgen_cast_000000000000000a: kd,
      __wbindgen_cast_000000000000000b: Ld,
      __wbindgen_cast_000000000000000c: Ed,
      __wbindgen_cast_000000000000000d: Cd,
      __wbindgen_cast_000000000000000e: Rd,
      __wbindgen_cast_000000000000000f: Od,
      __wbindgen_cast_0000000000000010: qd,
      __wbindgen_cast_0000000000000011: Gd,
      __wbindgen_cast_0000000000000012: Vd,
      __wbindgen_cast_0000000000000013: Wd,
      __wbindgen_cast_0000000000000014: Ud,
      __wbindgen_cast_0000000000000015: zd,
      __wbindgen_cast_0000000000000016: jd,
      __wbindgen_cast_0000000000000017: Kd,
      __wbindgen_cast_0000000000000018: $d
    }
  }, b_), ji = m.memory, Ki = m.main, $i = m.__abort_handler, Ni = m.__instance_terminated, Qi = m.__wasm_bindgen_func_elem_10755, Xi = m.__wasm_bindgen_func_elem_2117, Yi = m.__wasm_bindgen_func_elem_3017, Hi = m.__wasm_bindgen_func_elem_3017_11, Ji = m.__wasm_bindgen_func_elem_3017_12, Zi = m.__wasm_bindgen_func_elem_2116, _g = m.__wasm_bindgen_func_elem_2116_3, eg = m.__wasm_bindgen_func_elem_2116_4, tg = m.__wasm_bindgen_func_elem_2116_5, ng = m.__wasm_bindgen_func_elem_2116_7, bg = m.__wasm_bindgen_func_elem_2116_8, rg = m.__wasm_bindgen_func_elem_2116_9, cg = m.__wasm_bindgen_func_elem_2116_10, ag = m.__wasm_bindgen_func_elem_1661, fg = m.__wasm_bindgen_func_elem_2115, og = m.__wbindgen_export, ug = m.__wbindgen_export2, dg = m.__wbindgen_export3, ig = m.__wbindgen_export4, gg = m.__wbindgen_export5, sg = m.__wbindgen_add_to_stack_pointer, t_ = m.__wbindgen_start, wg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: $i,
    __instance_terminated: Ni,
    __wasm_bindgen_func_elem_10755: Qi,
    __wasm_bindgen_func_elem_1661: ag,
    __wasm_bindgen_func_elem_2115: fg,
    __wasm_bindgen_func_elem_2116: Zi,
    __wasm_bindgen_func_elem_2116_10: cg,
    __wasm_bindgen_func_elem_2116_3: _g,
    __wasm_bindgen_func_elem_2116_4: eg,
    __wasm_bindgen_func_elem_2116_5: tg,
    __wasm_bindgen_func_elem_2116_7: ng,
    __wasm_bindgen_func_elem_2116_8: bg,
    __wasm_bindgen_func_elem_2116_9: rg,
    __wasm_bindgen_func_elem_2117: Xi,
    __wasm_bindgen_func_elem_3017: Yi,
    __wasm_bindgen_func_elem_3017_11: Hi,
    __wasm_bindgen_func_elem_3017_12: Ji,
    __wbindgen_add_to_stack_pointer: sg,
    __wbindgen_export: og,
    __wbindgen_export2: ug,
    __wbindgen_export3: dg,
    __wbindgen_export4: ig,
    __wbindgen_export5: gg,
    __wbindgen_start: t_,
    main: Ki,
    memory: ji
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  zi(wg);
  t_();
})();
