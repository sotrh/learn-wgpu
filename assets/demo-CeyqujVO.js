import { _ as b_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let kg;
let __tla = (async () => {
  const r_ = "/learn-wgpu/assets/demo_bg-CSKQc-lU.wasm";
  kg = function() {
    d.run_web();
  };
  function c_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function a_(_) {
    const e = t(_).Window;
    return c(e);
  }
  function f_(_) {
    const e = t(_).WorkerGlobalScope;
    return c(e);
  }
  function o_(_) {
    const e = t(_), n = typeof e == "boolean" ? e : void 0;
    return l(n) ? 16777215 : n ? 1 : 0;
  }
  function d_(_, e) {
    const n = j(t(e)), b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function u_(_) {
    return typeof t(_) == "function";
  }
  function i_(_) {
    return t(_) === null;
  }
  function g_(_) {
    const e = t(_);
    return typeof e == "object" && e !== null;
  }
  function s_(_) {
    return typeof t(_) == "string";
  }
  function w_(_) {
    return t(_) === void 0;
  }
  function l_(_, e) {
    const n = t(e), b = typeof n == "number" ? n : void 0;
    w().setFloat64(_ + 8, l(b) ? 0 : b, true), w().setInt32(_ + 0, !l(b), true);
  }
  function m_(_, e) {
    const n = t(e), b = typeof n == "string" ? n : void 0;
    var r = l(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function p_(_, e) {
    throw new Error(g(_, e));
  }
  function x_(_) {
    t(_)._wbg_cb_unref();
  }
  function y_(_) {
    t(_).abort();
  }
  function h_(_) {
    const e = t(_).activeElement;
    return l(e) ? 0 : c(e);
  }
  function v_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function S_(_, e) {
    t(_).activeTexture(e >>> 0);
  }
  function I_() {
    return o(function(_, e, n, b) {
      t(_).addEventListener(g(e, n), t(b));
    }, arguments);
  }
  function A_() {
    return o(function(_, e) {
      t(_).addListener(t(e));
    }, arguments);
  }
  function D_(_) {
    return t(_).altKey;
  }
  function P_(_) {
    return t(_).altKey;
  }
  function M_(_, e, n) {
    const b = t(_).animate(t(e), t(n));
    return c(b);
  }
  function F_() {
    return o(function(_, e) {
      const n = t(_).appendChild(t(e));
      return c(n);
    }, arguments);
  }
  function B_() {
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
  function k_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function L_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function E_(_, e) {
    const n = t(_).beginComputePass(t(e));
    return c(n);
  }
  function C_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function R_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return c(n);
    }, arguments);
  }
  function O_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function q_(_, e, n, b, r) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
  }
  function G_(_, e, n, b, r, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(b), r, a);
  }
  function V_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function j_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function K_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function $_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function N_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function Q_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function X_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function Y_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function H_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function J_(_, e, n, b, r) {
    t(_).blendColor(e, n, b, r);
  }
  function Z_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function _e(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function ee(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function te(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function ne(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function be(_, e, n, b, r) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function re(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function ce(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function ae(_, e, n, b, r, a, f, u, i, s, p) {
    t(_).blitFramebuffer(e, n, b, r, a, f, u, i, s >>> 0, p >>> 0);
  }
  function fe(_) {
    return t(_).blockSize;
  }
  function oe(_) {
    const e = t(_).body;
    return l(e) ? 0 : c(e);
  }
  function de(_, e) {
    const n = t(e).brand, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function ue(_) {
    const e = t(_).brands;
    return c(e);
  }
  function ie(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function ge(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function se(_, e, n, b) {
    t(_).bufferData(e >>> 0, t(n), b >>> 0);
  }
  function we(_, e, n, b) {
    t(_).bufferData(e >>> 0, n, b >>> 0);
  }
  function le(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function me(_, e, n, b) {
    t(_).bufferSubData(e >>> 0, n, t(b));
  }
  function pe(_) {
    return t(_).button;
  }
  function xe(_) {
    return t(_).buttons;
  }
  function ye() {
    return o(function(_, e) {
      const n = t(_).call(t(e));
      return c(n);
    }, arguments);
  }
  function he() {
    return o(function(_, e) {
      t(_).cancelAnimationFrame(e);
    }, arguments);
  }
  function ve(_, e) {
    t(_).cancelIdleCallback(e >>> 0);
  }
  function Se(_) {
    t(_).cancel();
  }
  function Ie(_, e) {
    const n = t(_).catch(t(e));
    return c(n);
  }
  function Ae(_, e, n, b, r) {
    t(_).clearBufferfv(e >>> 0, n, y(b, r));
  }
  function De(_, e, n, b, r) {
    t(_).clearBufferiv(e >>> 0, n, D(b, r));
  }
  function Pe(_, e, n, b, r) {
    t(_).clearBufferuiv(e >>> 0, n, M(b, r));
  }
  function Me(_, e) {
    t(_).clearDepth(e);
  }
  function Fe(_, e) {
    t(_).clearDepth(e);
  }
  function Be(_, e) {
    t(_).clearStencil(e);
  }
  function Te(_, e) {
    t(_).clearStencil(e);
  }
  function ke(_, e) {
    t(_).clearTimeout(e);
  }
  function Le(_, e) {
    t(_).clear(e >>> 0);
  }
  function Ee(_, e) {
    t(_).clear(e >>> 0);
  }
  function Ce(_, e, n, b) {
    return t(_).clientWaitSync(t(e), n >>> 0, b >>> 0);
  }
  function Re(_) {
    t(_).close();
  }
  function Oe(_, e) {
    const n = t(e).code, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function qe(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Ge(_, e, n, b, r) {
    t(_).colorMask(e !== 0, n !== 0, b !== 0, r !== 0);
  }
  function Ve(_, e) {
    t(_).compileShader(t(e));
  }
  function We(_, e) {
    t(_).compileShader(t(e));
  }
  function Ue(_, e, n, b, r, a, f, u, i, s) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i, s);
  }
  function ze(_, e, n, b, r, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, t(i));
  }
  function je(_, e, n, b, r, a, f, u, i) {
    t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, t(i));
  }
  function Ke(_, e, n, b, r, a, f, u, i, s, p, v) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p, v);
  }
  function $e(_, e, n, b, r, a, f, u, i, s, p) {
    t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, t(p));
  }
  function Ne() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function Qe(_, e) {
    return t(_).contains(t(e));
  }
  function Xe(_) {
    const e = t(_).contentRect;
    return c(e);
  }
  function Ye(_, e, n, b, r, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, b, r, a);
  }
  function He(_, e, n, b, r, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, u, i);
  }
  function Je(_, e, n, b, r, a, f, u, i) {
    t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, u, i);
  }
  function Ze(_, e, n, b, r, a, f, u, i, s) {
    t(_).copyTexSubImage3D(e >>> 0, n, b, r, a, f, u, i, s);
  }
  function _t() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return c(n);
    }, arguments);
  }
  function et(_, e) {
    const n = t(_).createBindGroup(t(e));
    return c(n);
  }
  function tt(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function nt() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return c(n);
    }, arguments);
  }
  function bt(_) {
    const e = t(_).createBuffer();
    return l(e) ? 0 : c(e);
  }
  function rt(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return c(n);
  }
  function ct(_, e) {
    const n = t(_).createComputePipeline(t(e));
    return c(n);
  }
  function at() {
    return o(function(_, e, n) {
      const b = t(_).createElement(g(e, n));
      return c(b);
    }, arguments);
  }
  function ft(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function ot(_) {
    const e = t(_).createFramebuffer();
    return l(e) ? 0 : c(e);
  }
  function dt() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function ut(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return c(n);
  }
  function it(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function gt(_) {
    const e = t(_).createProgram();
    return l(e) ? 0 : c(e);
  }
  function st(_) {
    const e = t(_).createQuery();
    return l(e) ? 0 : c(e);
  }
  function wt() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return c(n);
    }, arguments);
  }
  function lt(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function mt(_) {
    const e = t(_).createRenderbuffer();
    return l(e) ? 0 : c(e);
  }
  function pt(_) {
    const e = t(_).createSampler();
    return l(e) ? 0 : c(e);
  }
  function xt(_, e) {
    const n = t(_).createSampler(t(e));
    return c(n);
  }
  function yt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return c(n);
  }
  function ht(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function vt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return l(n) ? 0 : c(n);
  }
  function St(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function It() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return c(n);
    }, arguments);
  }
  function At(_) {
    const e = t(_).createTexture();
    return l(e) ? 0 : c(e);
  }
  function Dt(_) {
    const e = t(_).createVertexArrayOES();
    return l(e) ? 0 : c(e);
  }
  function Pt(_) {
    const e = t(_).createVertexArray();
    return l(e) ? 0 : c(e);
  }
  function Mt() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return c(n);
    }, arguments);
  }
  function Ft(_) {
    return t(_).ctrlKey;
  }
  function Bt(_) {
    return t(_).ctrlKey;
  }
  function Tt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function kt(_, e) {
    t(_).cullFace(e >>> 0);
  }
  function Lt(_) {
    console.debug(t(_));
  }
  function Et(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Ct(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Rt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Ot(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function qt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Gt(_, e) {
    t(_).deleteProgram(t(e));
  }
  function Vt(_, e) {
    t(_).deleteQuery(t(e));
  }
  function Wt(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function Ut(_, e) {
    t(_).deleteRenderbuffer(t(e));
  }
  function zt(_, e) {
    t(_).deleteSampler(t(e));
  }
  function jt(_, e) {
    t(_).deleteShader(t(e));
  }
  function Kt(_, e) {
    t(_).deleteShader(t(e));
  }
  function $t(_, e) {
    t(_).deleteSync(t(e));
  }
  function Nt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Qt(_, e) {
    t(_).deleteTexture(t(e));
  }
  function Xt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Yt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Ht(_) {
    return t(_).deltaMode;
  }
  function Jt(_) {
    return t(_).deltaX;
  }
  function Zt(_) {
    return t(_).deltaY;
  }
  function _n(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function en(_, e) {
    t(_).depthFunc(e >>> 0);
  }
  function tn(_, e) {
    t(_).depthMask(e !== 0);
  }
  function nn(_, e) {
    t(_).depthMask(e !== 0);
  }
  function bn(_, e, n) {
    t(_).depthRange(e, n);
  }
  function rn(_, e, n) {
    t(_).depthRange(e, n);
  }
  function cn(_) {
    t(_).destroy();
  }
  function an(_) {
    const e = t(_).devicePixelContentBoxSize;
    return c(e);
  }
  function fn(_) {
    return t(_).devicePixelRatio;
  }
  function on(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function dn(_, e) {
    t(_).disableVertexAttribArray(e >>> 0);
  }
  function un(_, e) {
    t(_).disable(e >>> 0);
  }
  function gn(_, e) {
    t(_).disable(e >>> 0);
  }
  function sn(_) {
    t(_).disconnect();
  }
  function wn(_) {
    t(_).disconnect();
  }
  function ln(_, e, n, b) {
    t(_).dispatchWorkgroups(e >>> 0, n >>> 0, b >>> 0);
  }
  function mn(_) {
    const e = t(_).document;
    return l(e) ? 0 : c(e);
  }
  function pn(_) {
    return t(_).done;
  }
  function xn(_, e, n, b, r) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, b, r);
  }
  function yn(_, e, n, b, r) {
    t(_).drawArraysInstanced(e >>> 0, n, b, r);
  }
  function hn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function vn(_, e, n, b) {
    t(_).drawArrays(e >>> 0, n, b);
  }
  function Sn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function In(_, e) {
    t(_).drawBuffers(t(e));
  }
  function An(_, e, n, b, r, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, b >>> 0, r, a);
  }
  function Dn(_, e, n, b, r, a) {
    t(_).drawElementsInstanced(e >>> 0, n, b >>> 0, r, a);
  }
  function Pn(_, e, n, b, r, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, b >>> 0, r, a >>> 0);
  }
  function Mn(_, e, n, b, r) {
    t(_).draw(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function Fn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Bn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Tn(_, e) {
    t(_).enable(e >>> 0);
  }
  function kn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Ln(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function En(_) {
    t(_).end();
  }
  function Cn(_) {
    t(_).end();
  }
  function Rn(_) {
    console.error(t(_));
  }
  function On(_, e) {
    console.error(t(_), t(e));
  }
  function qn(_, e) {
    let n, b;
    try {
      n = _, b = e, console.error(g(_, e));
    } finally {
      d.__wbindgen_export4(n, b, 1);
    }
  }
  function Gn(_, e, n) {
    const b = t(_).fenceSync(e >>> 0, n >>> 0);
    return l(b) ? 0 : c(b);
  }
  function Vn(_, e) {
    const n = t(_).fetch(t(e));
    return c(n);
  }
  function Wn(_) {
    const e = fetch(t(_));
    return c(e);
  }
  function Un(_) {
    t(_).finish();
  }
  function zn(_, e) {
    const n = t(_).finish(t(e));
    return c(n);
  }
  function jn(_) {
    const e = t(_).finish();
    return c(e);
  }
  function Kn(_) {
    t(_).finish();
  }
  function $n(_) {
    t(_).flush();
  }
  function Nn(_) {
    t(_).flush();
  }
  function Qn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function Xn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function Yn(_, e, n, b, r) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
  }
  function Hn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Jn(_, e, n, b, r, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
  }
  function Zn(_, e, n, b, r, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(b), r, a);
  }
  function _b(_, e, n, b, r, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(b), r, a, f);
  }
  function eb(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function tb(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function nb(_) {
    const e = t(_).fullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function bb(_, e, n, b) {
    t(_).getBufferSubData(e >>> 0, n, t(b));
  }
  function rb(_) {
    const e = t(_).getCoalescedEvents();
    return c(e);
  }
  function cb(_) {
    const e = t(_).getCoalescedEvents;
    return c(e);
  }
  function ab() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return l(n) ? 0 : c(n);
    }, arguments);
  }
  function fb() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function ob() {
    return o(function(_, e, n, b) {
      const r = t(_).getContext(g(e, n), t(b));
      return l(r) ? 0 : c(r);
    }, arguments);
  }
  function db() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function ub() {
    return o(function(_, e, n) {
      const b = t(_).getContext(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function ib() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return c(e);
    }, arguments);
  }
  function gb(_, e, n) {
    const b = t(_).getElementById(g(e, n));
    return l(b) ? 0 : c(b);
  }
  function sb() {
    return o(function(_, e, n) {
      const b = t(_).getExtension(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function wb() {
    return o(function(_, e, n) {
      const b = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return c(b);
    }, arguments);
  }
  function lb() {
    return o(function(_, e, n) {
      const b = t(_).getMappedRange(e, n);
      return c(b);
    }, arguments);
  }
  function mb(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return c(n);
  }
  function pb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function xb() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return c(n);
    }, arguments);
  }
  function yb(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 102) - 1;
  }
  function hb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function vb(_, e, n) {
    const b = t(e).getProgramInfoLog(t(n));
    var r = l(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Sb(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function Ib(_, e, n) {
    const b = t(_).getProgramParameter(t(e), n >>> 0);
    return c(b);
  }
  function Ab() {
    return o(function(_, e, n, b) {
      const r = t(e).getPropertyValue(g(n, b)), a = h(r, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Db(_, e, n) {
    const b = t(_).getQueryParameter(t(e), n >>> 0);
    return c(b);
  }
  function Pb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Mb(_, e, n) {
    const b = t(e).getShaderInfoLog(t(n));
    var r = l(b) ? 0 : h(b, d.__wbindgen_export, d.__wbindgen_export2), a = x;
    w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
  }
  function Fb(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Bb(_, e, n) {
    const b = t(_).getShaderParameter(t(e), n >>> 0);
    return c(b);
  }
  function Tb(_) {
    const e = t(_).getSupportedExtensions();
    return l(e) ? 0 : c(e);
  }
  function kb(_) {
    const e = t(_).getSupportedProfiles();
    return l(e) ? 0 : c(e);
  }
  function Lb(_, e, n) {
    const b = t(_).getSyncParameter(t(e), n >>> 0);
    return c(b);
  }
  function Eb(_, e, n, b) {
    return t(_).getUniformBlockIndex(t(e), g(n, b));
  }
  function Cb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function Rb(_, e, n, b) {
    const r = t(_).getUniformLocation(t(e), g(n, b));
    return l(r) ? 0 : c(r);
  }
  function Ob(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function qb() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Gb(_, e) {
    const n = t(_)[e >>> 0];
    return l(n) ? 0 : c(n);
  }
  function Vb() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function Wb(_, e) {
    const n = t(_)[e >>> 0];
    return c(n);
  }
  function Ub(_) {
    const e = t(_).gpu;
    return c(e);
  }
  function zb() {
    return o(function(_, e) {
      return Reflect.has(t(_), t(e));
    }, arguments);
  }
  function jb(_) {
    const e = t(_).headers;
    return c(e);
  }
  function Kb(_) {
    return t(_).height;
  }
  function $b(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Nb(_) {
    console.info(t(_));
  }
  function Qb(_) {
    return t(_).inlineSize;
  }
  function Xb(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Yb(_) {
    let e;
    try {
      e = t(_) instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function Hb(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Jb(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Zb() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function _r(_) {
    return t(_).isIntersecting;
  }
  function er(_, e) {
    return Object.is(t(_), t(e));
  }
  function tr() {
    return c(Symbol.iterator);
  }
  function nr(_, e) {
    const n = t(e).key, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function br(_, e) {
    const n = t(e).label, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function rr(_) {
    return t(_).length;
  }
  function cr(_) {
    return t(_).length;
  }
  function ar(_, e) {
    t(_).linkProgram(t(e));
  }
  function fr(_, e) {
    t(_).linkProgram(t(e));
  }
  function or(_) {
    return t(_).location;
  }
  function dr(_) {
    const e = t(_).location;
    return c(e);
  }
  function ur(_) {
    console.log(t(_));
  }
  function ir(_, e, n, b) {
    const r = t(_).mapAsync(e >>> 0, n, b);
    return c(r);
  }
  function gr() {
    return o(function(_, e, n) {
      const b = t(_).matchMedia(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function sr(_) {
    return t(_).matches;
  }
  function wr(_, e) {
    const n = t(e).media, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function lr(_) {
    return t(_).metaKey;
  }
  function mr(_) {
    return t(_).metaKey;
  }
  function pr(_) {
    return t(_).movementX;
  }
  function xr(_) {
    return t(_).movementY;
  }
  function yr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function hr(_) {
    const e = t(_).navigator;
    return c(e);
  }
  function vr() {
    return o(function() {
      const _ = new Headers();
      return c(_);
    }, arguments);
  }
  function Sr() {
    const _ = new Error();
    return c(_);
  }
  function Ir() {
    return o(function(_, e) {
      const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
      return c(n);
    }, arguments);
  }
  function Ar() {
    const _ = new Array();
    return c(_);
  }
  function Dr() {
    return o(function() {
      const _ = new AbortController();
      return c(_);
    }, arguments);
  }
  function Pr() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return c(e);
    }, arguments);
  }
  function Mr() {
    return o(function(_, e) {
      const n = new Worker(g(_, e));
      return c(n);
    }, arguments);
  }
  function Fr(_) {
    const e = new Uint8Array(t(_));
    return c(e);
  }
  function Br() {
    const _ = new Object();
    return c(_);
  }
  function Tr() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return c(e);
    }, arguments);
  }
  function kr() {
    return o(function() {
      const _ = new MessageChannel();
      return c(_);
    }, arguments);
  }
  function Lr(_, e) {
    const n = new Uint8Array(L(_, e));
    return c(n);
  }
  function Er() {
    const _ = new Object();
    return c(_);
  }
  function Cr(_, e, n) {
    const b = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return c(b);
  }
  function Rr() {
    return o(function(_, e, n) {
      const b = new Request(g(_, e), t(n));
      return c(b);
    }, arguments);
  }
  function Or() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return c(n);
    }, arguments);
  }
  function qr(_) {
    const e = t(_).next;
    return c(e);
  }
  function Gr() {
    return o(function(_) {
      const e = t(_).next();
      return c(e);
    }, arguments);
  }
  function Vr(_) {
    return t(_).now();
  }
  function Wr(_) {
    return t(_).now();
  }
  function Ur(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function zr(_, e) {
    t(_).observe(t(e));
  }
  function jr(_, e) {
    t(_).observe(t(e));
  }
  function Kr(_, e) {
    const n = Array.of(t(_), t(e));
    return c(n);
  }
  function $r(_) {
    const e = Array.of(t(_));
    return c(e);
  }
  function Nr(_) {
    return t(_).offsetX;
  }
  function Qr(_) {
    return t(_).offsetY;
  }
  function Xr(_) {
    const e = t(_).onSubmittedWorkDone();
    return c(e);
  }
  function Yr() {
    return o(function(_, e) {
      const n = t(e).origin, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function Hr(_) {
    const e = t(_).performance;
    return c(e);
  }
  function Jr(_) {
    return t(_).persisted;
  }
  function Zr(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function _c(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function ec(_) {
    t(_).play();
  }
  function tc(_) {
    return t(_).pointerId;
  }
  function nc(_, e) {
    const n = t(e).pointerType, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function bc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function rc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function cc(_) {
    const e = t(_).port1;
    return c(e);
  }
  function ac(_) {
    const e = t(_).port2;
    return c(e);
  }
  function fc() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function oc() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function dc(_, e, n) {
    const b = t(_).postTask(t(e), t(n));
    return c(b);
  }
  function uc(_) {
    return t(_).pressure;
  }
  function ic(_) {
    t(_).preventDefault();
  }
  function gc() {
    const _ = ResizeObserverEntry.prototype;
    return c(_);
  }
  function sc(_, e, n) {
    Uint8Array.prototype.set.call(L(_, e), t(n));
  }
  function wc(_, e) {
    return t(_).push(t(e));
  }
  function lc(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function mc() {
    return o(function(_, e, n) {
      const b = t(_).querySelectorAll(g(e, n));
      return c(b);
    }, arguments);
  }
  function pc() {
    return o(function(_, e, n) {
      const b = t(_).querySelector(g(e, n));
      return l(b) ? 0 : c(b);
    }, arguments);
  }
  function xc(_) {
    const e = t(_).queueMicrotask;
    return c(e);
  }
  function yc(_) {
    queueMicrotask(t(_));
  }
  function hc(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function vc(_) {
    const e = t(_).queue;
    return c(e);
  }
  function Sc(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function Ic() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Ac() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, u);
    }, arguments);
  }
  function Dc() {
    return o(function(_, e, n, b, r, a, f, u) {
      t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function Pc() {
    return o(function(_, e, n, b) {
      t(_).removeEventListener(g(e, n), t(b));
    }, arguments);
  }
  function Mc() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function Fc() {
    return o(function(_, e, n, b) {
      const r = t(e).removeProperty(g(n, b)), a = h(r, d.__wbindgen_export, d.__wbindgen_export2), f = x;
      w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Bc(_, e, n, b, r, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, b >>> 0, r, a);
  }
  function Tc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function kc(_, e, n, b, r) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
  }
  function Lc(_) {
    return t(_).repeat;
  }
  function Ec(_, e) {
    const n = t(_).requestAdapter(t(e));
    return c(n);
  }
  function Cc() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Rc(_, e) {
    const n = t(_).requestDevice(t(e));
    return c(n);
  }
  function Oc(_) {
    const e = t(_).requestFullscreen();
    return c(e);
  }
  function qc(_) {
    const e = t(_).requestFullscreen;
    return c(e);
  }
  function Gc(_) {
    const e = t(_).requestIdleCallback;
    return c(e);
  }
  function Vc() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Wc(_) {
    const e = Promise.resolve(t(_));
    return c(e);
  }
  function Uc() {
    return o(function(_, e) {
      URL.revokeObjectURL(g(_, e));
    }, arguments);
  }
  function zc(_, e, n, b) {
    t(_).samplerParameterf(t(e), n >>> 0, b);
  }
  function jc(_, e, n, b) {
    t(_).samplerParameteri(t(e), n >>> 0, b);
  }
  function Kc(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function $c(_) {
    const e = t(_).scheduler;
    return c(e);
  }
  function Nc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function Qc(_, e, n, b, r) {
    t(_).scissor(e, n, b, r);
  }
  function Xc() {
    return o(function(_, e, n, b, r) {
      t(_).setAttribute(g(e, n), g(b, r));
    }, arguments);
  }
  function Yc() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), M(b, r), a, f >>> 0);
    }, arguments);
  }
  function Hc() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), M(b, r), a, f >>> 0);
    }, arguments);
  }
  function Jc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function Zc(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function _a(_, e, n, b) {
    t(_).setIndexBuffer(t(e), N[n], b);
  }
  function ea(_, e, n, b, r) {
    t(_).setIndexBuffer(t(e), N[n], b, r);
  }
  function ta(_, e) {
    t(_).setPipeline(t(e));
  }
  function na(_, e) {
    t(_).setPipeline(t(e));
  }
  function ba() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function ra() {
    return o(function(_, e, n, b, r) {
      t(_).setProperty(g(e, n), g(b, r));
    }, arguments);
  }
  function ca() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function aa() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function fa(_, e, n, b) {
    t(_).setVertexBuffer(e >>> 0, t(n), b);
  }
  function oa(_, e, n, b, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), b, r);
  }
  function da(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function ua() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function ia(_, e) {
    t(_).a = e;
  }
  function ga(_, e) {
    t(_).access = Oi[e];
  }
  function sa(_, e) {
    t(_).addressModeU = K[e];
  }
  function wa(_, e) {
    t(_).addressModeV = K[e];
  }
  function la(_, e) {
    t(_).addressModeW = K[e];
  }
  function ma(_, e) {
    t(_).alpha = t(e);
  }
  function pa(_, e) {
    t(_).alphaMode = Fi[e];
  }
  function xa(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function ya(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function ha(_, e) {
    t(_).arrayStride = e;
  }
  function va(_, e) {
    t(_).aspect = t_[e];
  }
  function Sa(_, e) {
    t(_).aspect = t_[e];
  }
  function Ia(_, e, n) {
    t(_).attributes = I(e, n);
  }
  function Aa(_, e) {
    t(_).b = e;
  }
  function Da(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function Pa(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Ma(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Fa(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Ba(_, e, n) {
    t(_).bindGroupLayouts = I(e, n);
  }
  function Ta(_, e) {
    t(_).binding = e >>> 0;
  }
  function ka(_, e) {
    t(_).binding = e >>> 0;
  }
  function La(_, e) {
    t(_).blend = t(e);
  }
  function Ea(_, e) {
    t(_).body = t(e);
  }
  function Ca(_, e) {
    t(_).box = ji[e];
  }
  function Ra(_, e) {
    t(_).buffer = t(e);
  }
  function Oa(_, e) {
    t(_).buffer = t(e);
  }
  function qa(_, e, n) {
    t(_).buffers = I(e, n);
  }
  function Ga(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function Va(_, e) {
    t(_).clearValue = t(e);
  }
  function Wa(_, e, n) {
    t(_).code = g(e, n);
  }
  function Ua(_, e) {
    t(_).color = t(e);
  }
  function za(_, e, n) {
    t(_).colorAttachments = I(e, n);
  }
  function ja(_, e) {
    t(_).compare = $[e];
  }
  function Ka(_, e) {
    t(_).compare = $[e];
  }
  function $a(_, e) {
    t(_).compute = t(e);
  }
  function Na(_, e) {
    t(_).count = e >>> 0;
  }
  function Qa(_, e) {
    t(_).credentials = Ui[e];
  }
  function Xa(_, e) {
    t(_).cullMode = Ti[e];
  }
  function Ya(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Ha(_, e) {
    t(_).depthBias = e;
  }
  function Ja(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Za(_, e) {
    t(_).depthClearValue = e;
  }
  function _f(_, e) {
    t(_).depthCompare = $[e];
  }
  function ef(_, e) {
    t(_).depthFailOp = X[e];
  }
  function tf(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function nf(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function bf(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function rf(_, e) {
    t(_).depthStencil = t(e);
  }
  function cf(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function af(_, e) {
    t(_).depthStoreOp = Y[e];
  }
  function ff(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function of(_, e) {
    t(_).device = t(e);
  }
  function df(_, e) {
    t(_).dimension = qi[e];
  }
  function uf(_, e) {
    t(_).dimension = H[e];
  }
  function gf(_, e) {
    t(_).dstFactor = __[e];
  }
  function sf(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function wf(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function lf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function mf(_, e, n) {
    t(_).entries = I(e, n);
  }
  function pf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function xf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function yf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function hf(_, e) {
    t(_).externalTexture = t(e);
  }
  function vf(_, e) {
    t(_).failOp = X[e];
  }
  function Sf(_, e) {
    t(_).format = P[e];
  }
  function If(_, e) {
    t(_).format = P[e];
  }
  function Af(_, e) {
    t(_).format = P[e];
  }
  function Df(_, e) {
    t(_).format = Vi[e];
  }
  function Pf(_, e) {
    t(_).format = P[e];
  }
  function Mf(_, e) {
    t(_).format = P[e];
  }
  function Ff(_, e) {
    t(_).format = P[e];
  }
  function Bf(_, e) {
    t(_).fragment = t(e);
  }
  function Tf(_, e) {
    t(_).frontFace = ki[e];
  }
  function kf(_, e) {
    t(_).g = e;
  }
  function Lf(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function Ef(_, e) {
    t(_).headers = t(e);
  }
  function Cf(_, e) {
    t(_).height = e >>> 0;
  }
  function Rf(_, e) {
    t(_).height = e >>> 0;
  }
  function Of(_, e) {
    t(_).height = e >>> 0;
  }
  function qf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Gf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Vf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Wf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Uf(_, e, n) {
    t(_).label = g(e, n);
  }
  function zf(_, e, n) {
    t(_).label = g(e, n);
  }
  function jf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Kf(_, e, n) {
    t(_).label = g(e, n);
  }
  function $f(_, e, n) {
    t(_).label = g(e, n);
  }
  function Nf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Qf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Xf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Yf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Hf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Jf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Zf(_, e) {
    t(_).layout = t(e);
  }
  function _o(_, e) {
    t(_).layout = t(e);
  }
  function eo(_, e) {
    t(_).layout = t(e);
  }
  function to(_, e) {
    t(_).layout = Z[e];
  }
  function no(_, e) {
    t(_).layout = Z[e];
  }
  function bo(_, e) {
    t(_).loadOp = Q[e];
  }
  function ro(_, e) {
    t(_).lodMaxClamp = e;
  }
  function co(_, e) {
    t(_).lodMinClamp = e;
  }
  function ao(_, e) {
    t(_).magFilter = e_[e];
  }
  function fo(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function oo(_, e) {
    t(_).mask = e >>> 0;
  }
  function uo(_, e) {
    t(_).maxAnisotropy = e;
  }
  function io(_, e, n) {
    t(_).method = g(e, n);
  }
  function go(_, e) {
    t(_).minBindingSize = e;
  }
  function so(_, e) {
    t(_).minFilter = e_[e];
  }
  function wo(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function lo(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function mo(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function po(_, e) {
    t(_).mipmapFilter = Li[e];
  }
  function xo(_, e) {
    t(_).mode = zi[e];
  }
  function yo(_, e) {
    t(_).mode = Bi[e];
  }
  function ho(_, e) {
    t(_).module = t(e);
  }
  function vo(_, e) {
    t(_).module = t(e);
  }
  function So(_, e) {
    t(_).module = t(e);
  }
  function Io(_, e) {
    t(_).multisample = t(e);
  }
  function Ao(_, e) {
    t(_).multisampled = e !== 0;
  }
  function Do(_, e) {
    t(_).offset = e;
  }
  function Po(_, e) {
    t(_).offset = e;
  }
  function Mo(_, e) {
    t(_).offset = e;
  }
  function Fo(_, e) {
    t(_).onmessage = t(e);
  }
  function Bo(_, e) {
    t(_).operation = Pi[e];
  }
  function To(_, e) {
    t(_).origin = t(e);
  }
  function ko(_, e) {
    t(_).passOp = X[e];
  }
  function Lo(_, e) {
    t(_).powerPreference = Ei[e];
  }
  function Eo(_, e) {
    t(_).primitive = t(e);
  }
  function Co(_, e) {
    t(_).querySet = t(e);
  }
  function Ro(_, e) {
    t(_).querySet = t(e);
  }
  function Oo(_, e) {
    t(_).r = e;
  }
  function qo(_, e, n) {
    t(_).requiredFeatures = I(e, n);
  }
  function Go(_, e) {
    t(_).requiredLimits = t(e);
  }
  function Vo(_, e) {
    t(_).resolveTarget = t(e);
  }
  function Wo(_, e) {
    t(_).resource = t(e);
  }
  function Uo(_, e) {
    t(_).resource = t(e);
  }
  function zo(_, e) {
    t(_).resource = t(e);
  }
  function jo(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Ko(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function $o(_, e) {
    t(_).sampleType = Gi[e];
  }
  function No(_, e) {
    t(_).sampler = t(e);
  }
  function Qo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function Xo(_, e) {
    t(_).signal = t(e);
  }
  function Yo(_, e) {
    t(_).size = e;
  }
  function Ho(_, e) {
    t(_).size = e;
  }
  function Jo(_, e) {
    t(_).size = t(e);
  }
  function Zo(_, e) {
    t(_).srcFactor = __[e];
  }
  function _d(_, e) {
    t(_).stencilBack = t(e);
  }
  function ed(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function td(_, e) {
    t(_).stencilFront = t(e);
  }
  function nd(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function bd(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function rd(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function cd(_, e) {
    t(_).stencilStoreOp = Y[e];
  }
  function ad(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function fd(_, e) {
    t(_).stepMode = Wi[e];
  }
  function od(_, e) {
    t(_).storageTexture = t(e);
  }
  function dd(_, e) {
    t(_).storeOp = Y[e];
  }
  function ud(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function id(_, e, n) {
    t(_).targets = I(e, n);
  }
  function gd(_, e) {
    t(_).texture = t(e);
  }
  function sd(_, e) {
    t(_).texture = t(e);
  }
  function wd(_, e) {
    t(_).timestampWrites = t(e);
  }
  function ld(_, e) {
    t(_).timestampWrites = t(e);
  }
  function md(_, e) {
    t(_).toneMapping = t(e);
  }
  function pd(_, e) {
    t(_).topology = Ci[e];
  }
  function xd(_, e, n) {
    t(_).type = g(e, n);
  }
  function yd(_, e) {
    t(_).type = Ri[e];
  }
  function hd(_, e) {
    t(_).type = Mi[e];
  }
  function vd(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function Sd(_, e) {
    t(_).usage = e >>> 0;
  }
  function Id(_, e) {
    t(_).usage = e >>> 0;
  }
  function Ad(_, e) {
    t(_).usage = e >>> 0;
  }
  function Dd(_, e) {
    t(_).usage = e >>> 0;
  }
  function Pd(_, e) {
    t(_).vertex = t(e);
  }
  function Md(_, e) {
    t(_).viewDimension = H[e];
  }
  function Fd(_, e) {
    t(_).viewDimension = H[e];
  }
  function Bd(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function Td(_, e, n) {
    t(_).viewFormats = I(e, n);
  }
  function kd(_, e) {
    t(_).view = t(e);
  }
  function Ld(_, e) {
    t(_).view = t(e);
  }
  function Ed(_, e) {
    t(_).visibility = e >>> 0;
  }
  function Cd(_, e) {
    t(_).width = e >>> 0;
  }
  function Rd(_, e) {
    t(_).width = e >>> 0;
  }
  function Od(_, e) {
    t(_).width = e >>> 0;
  }
  function qd(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function Gd(_, e) {
    t(_).x = e >>> 0;
  }
  function Vd(_, e) {
    t(_).y = e >>> 0;
  }
  function Wd(_, e) {
    t(_).z = e >>> 0;
  }
  function Ud(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function zd(_, e, n, b) {
    t(_).shaderSource(t(e), g(n, b));
  }
  function jd(_) {
    return t(_).shiftKey;
  }
  function Kd(_) {
    return t(_).shiftKey;
  }
  function $d(_) {
    const e = t(_).signal;
    return c(e);
  }
  function Nd(_, e) {
    const n = t(e).stack, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function Qd(_) {
    t(_).start();
  }
  function Xd() {
    const _ = typeof global > "u" ? null : global;
    return l(_) ? 0 : c(_);
  }
  function Yd() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return l(_) ? 0 : c(_);
  }
  function Hd() {
    const _ = typeof self > "u" ? null : self;
    return l(_) ? 0 : c(_);
  }
  function Jd() {
    const _ = typeof window > "u" ? null : window;
    return l(_) ? 0 : c(_);
  }
  function Zd(_) {
    return t(_).status;
  }
  function _u(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function eu(_, e, n, b, r) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
  }
  function tu(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function nu(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function bu(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function ru(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function cu(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function au(_, e, n, b, r) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
  }
  function fu() {
    return o(function(_) {
      const e = JSON.stringify(t(_));
      return c(e);
    }, arguments);
  }
  function ou(_) {
    const e = t(_).style;
    return c(e);
  }
  function du(_, e, n) {
    t(_).submit(I(e, n));
  }
  function uu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function iu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function gu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, s);
    }, arguments);
  }
  function su() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, u, i >>> 0, s >>> 0, p);
    }, arguments);
  }
  function wu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p) {
      t(_).texImage3D(e >>> 0, n, b, r, a, f, u, i >>> 0, s >>> 0, t(p));
    }, arguments);
  }
  function lu(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function mu(_, e, n, b) {
    t(_).texParameteri(e >>> 0, n >>> 0, b);
  }
  function pu(_, e, n, b, r, a) {
    t(_).texStorage2D(e >>> 0, n, b >>> 0, r, a);
  }
  function xu(_, e, n, b, r, a, f) {
    t(_).texStorage3D(e >>> 0, n, b >>> 0, r, a, f);
  }
  function yu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, s);
    }, arguments);
  }
  function hu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function vu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Su() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Iu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Au() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Du() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Pu() {
    return o(function(_, e, n, b, r, a, f, u, i, s) {
      t(_).texSubImage2D(e >>> 0, n, b, r, a, f, u >>> 0, i >>> 0, t(s));
    }, arguments);
  }
  function Mu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Fu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Bu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Tu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, v);
    }, arguments);
  }
  function ku() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Lu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Eu() {
    return o(function(_, e, n, b, r, a, f, u, i, s, p, v) {
      t(_).texSubImage3D(e >>> 0, n, b, r, a, f, u, i, s >>> 0, p >>> 0, t(v));
    }, arguments);
  }
  function Cu() {
    return o(function(_) {
      const e = t(_).text();
      return c(e);
    }, arguments);
  }
  function Ru(_, e, n) {
    const b = t(_).then(t(e), t(n));
    return c(b);
  }
  function Ou(_, e) {
    const n = t(_).then(t(e));
    return c(n);
  }
  function qu(_) {
    t(_).unconfigure();
  }
  function Gu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function Vu(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function Wu(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function Uu(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function zu(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function ju(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function Ku(_, e, n, b) {
    t(_).uniform2fv(t(e), y(n, b));
  }
  function $u(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Nu(_, e, n, b) {
    t(_).uniform2iv(t(e), D(n, b));
  }
  function Qu(_, e, n, b) {
    t(_).uniform2uiv(t(e), M(n, b));
  }
  function Xu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function Yu(_, e, n, b) {
    t(_).uniform3fv(t(e), y(n, b));
  }
  function Hu(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Ju(_, e, n, b) {
    t(_).uniform3iv(t(e), D(n, b));
  }
  function Zu(_, e, n, b) {
    t(_).uniform3uiv(t(e), M(n, b));
  }
  function _0(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function e0(_, e, n, b, r, a) {
    t(_).uniform4f(t(e), n, b, r, a);
  }
  function t0(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function n0(_, e, n, b) {
    t(_).uniform4fv(t(e), y(n, b));
  }
  function b0(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function r0(_, e, n, b) {
    t(_).uniform4iv(t(e), D(n, b));
  }
  function c0(_, e, n, b) {
    t(_).uniform4uiv(t(e), M(n, b));
  }
  function a0(_, e, n, b) {
    t(_).uniformBlockBinding(t(e), n >>> 0, b >>> 0);
  }
  function f0(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function o0(_, e, n, b, r) {
    t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
  }
  function d0(_, e, n, b, r) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, y(b, r));
  }
  function u0(_, e, n, b, r) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, y(b, r));
  }
  function i0(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function g0(_, e, n, b, r) {
    t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
  }
  function s0(_, e, n, b, r) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, y(b, r));
  }
  function w0(_, e, n, b, r) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, y(b, r));
  }
  function l0(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function m0(_, e, n, b, r) {
    t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
  }
  function p0(_, e, n, b, r) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, y(b, r));
  }
  function x0(_, e, n, b, r) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, y(b, r));
  }
  function y0(_) {
    t(_).unmap();
  }
  function h0(_, e) {
    t(_).unobserve(t(e));
  }
  function v0(_, e) {
    const n = t(e).url, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
    w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
  }
  function S0(_, e) {
    t(_).useProgram(t(e));
  }
  function I0(_, e) {
    t(_).useProgram(t(e));
  }
  function A0(_) {
    const e = t(_).userAgentData;
    return l(e) ? 0 : c(e);
  }
  function D0() {
    return o(function(_, e) {
      const n = t(e).userAgent, b = h(n, d.__wbindgen_export, d.__wbindgen_export2), r = x;
      w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
    }, arguments);
  }
  function P0(_) {
    const e = t(_).value;
    return c(e);
  }
  function M0(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function F0(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function B0(_, e, n, b, r, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, b >>> 0, r, a);
  }
  function T0(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function k0(_, e, n, b, r, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
  }
  function L0(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function E0(_, e, n, b, r) {
    t(_).viewport(e, n, b, r);
  }
  function C0(_) {
    const e = t(_).visibilityState;
    return (Ki.indexOf(e) + 1 || 3) - 1;
  }
  function R0(_) {
    console.warn(t(_));
  }
  function O0(_) {
    const e = t(_).webkitFullscreenElement;
    return l(e) ? 0 : c(e);
  }
  function q0(_) {
    t(_).webkitRequestFullscreen();
  }
  function G0(_) {
    return t(_).width;
  }
  function V0() {
    return o(function(_, e, n, b, r, a, f) {
      t(_).writeBuffer(t(e), n, L(b, r), a, f);
    }, arguments);
  }
  function W0() {
    return o(function(_, e, n, b, r, a) {
      t(_).writeTexture(t(e), L(n, b), t(r), t(a));
    }, arguments);
  }
  function U0(_, e) {
    const n = S(_, e, si);
    return c(n);
  }
  function z0(_, e) {
    const n = S(_, e, vi);
    return c(n);
  }
  function j0(_, e) {
    const n = S(_, e, Si);
    return c(n);
  }
  function K0(_, e) {
    const n = S(_, e, wi);
    return c(n);
  }
  function $0(_, e) {
    const n = S(_, e, li);
    return c(n);
  }
  function N0(_, e) {
    const n = S(_, e, mi);
    return c(n);
  }
  function Q0(_, e) {
    const n = S(_, e, Ii);
    return c(n);
  }
  function X0(_, e) {
    const n = S(_, e, pi);
    return c(n);
  }
  function Y0(_, e) {
    const n = S(_, e, xi);
    return c(n);
  }
  function H0(_, e) {
    const n = S(_, e, yi);
    return c(n);
  }
  function J0(_, e) {
    const n = S(_, e, hi);
    return c(n);
  }
  function Z0(_, e) {
    const n = S(_, e, Ai);
    return c(n);
  }
  function _i(_, e) {
    const n = S(_, e, Di);
    return c(n);
  }
  function ei(_, e) {
    const n = S(_, e, gi);
    return c(n);
  }
  function ti(_) {
    return c(_);
  }
  function ni(_, e) {
    const n = y(_, e);
    return c(n);
  }
  function bi(_, e) {
    const n = Ni(_, e);
    return c(n);
  }
  function ri(_, e) {
    const n = D(_, e);
    return c(n);
  }
  function ci(_, e) {
    const n = Qi(_, e);
    return c(n);
  }
  function ai(_, e) {
    const n = Xi(_, e);
    return c(n);
  }
  function fi(_, e) {
    const n = M(_, e);
    return c(n);
  }
  function oi(_, e) {
    const n = L(_, e);
    return c(n);
  }
  function di(_, e) {
    const n = g(_, e);
    return c(n);
  }
  function ui(_) {
    const e = t(_);
    return c(e);
  }
  function ii(_) {
    E(_);
  }
  function gi(_, e) {
    d.__wasm_bindgen_func_elem_3340(_, e);
  }
  function si(_, e, n) {
    d.__wasm_bindgen_func_elem_3333(_, e, c(n));
  }
  function wi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_3(_, e, c(n));
  }
  function li(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_4(_, e, c(n));
  }
  function mi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_5(_, e, c(n));
  }
  function pi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_7(_, e, c(n));
  }
  function xi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_8(_, e, c(n));
  }
  function yi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_9(_, e, c(n));
  }
  function hi(_, e, n) {
    d.__wasm_bindgen_func_elem_3333_10(_, e, c(n));
  }
  function vi(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_11681(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Si(_, e, n, b) {
    d.__wasm_bindgen_func_elem_3331(_, e, c(n), c(b));
  }
  function Ii(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_4366(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Ai(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_4366_11(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function Di(_, e, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.__wasm_bindgen_func_elem_4366_12(a, _, e, c(n));
      var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
      if (r) throw E(b);
    } finally {
      d.__wbindgen_add_to_stack_pointer(16);
    }
  }
  const K = [
    "clamp-to-edge",
    "repeat",
    "mirror-repeat"
  ], Z = [
    "auto"
  ], __ = [
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
  ], Pi = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], Mi = [
    "uniform",
    "storage",
    "read-only-storage"
  ], Fi = [
    "opaque",
    "premultiplied"
  ], Bi = [
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
  ], Ti = [
    "none",
    "front",
    "back"
  ], e_ = [
    "nearest",
    "linear"
  ], ki = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], Li = [
    "nearest",
    "linear"
  ], Ei = [
    "low-power",
    "high-performance"
  ], Ci = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], Ri = [
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
  ], Oi = [
    "write-only",
    "read-only",
    "read-write"
  ], Y = [
    "store",
    "discard"
  ], t_ = [
    "all",
    "stencil-only",
    "depth-only"
  ], qi = [
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
  ], Gi = [
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
  ], Vi = [
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
  ], Wi = [
    "vertex",
    "instance"
  ], Ui = [
    "omit",
    "same-origin",
    "include"
  ], zi = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], ji = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], Ki = [
    "hidden",
    "visible"
  ];
  function c(_) {
    T === A.length && A.push(A.length + 1);
    const e = T;
    return T = A[e], A[e] = _, e;
  }
  const J = typeof FinalizationRegistry > "u" ? {
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
  function $i(_) {
    _ < 1028 || (A[_] = T, T = _);
  }
  function y(_, e) {
    return _ = _ >>> 0, Yi().subarray(_ / 4, _ / 4 + e);
  }
  function Ni(_, e) {
    return _ = _ >>> 0, Hi().subarray(_ / 2, _ / 2 + e);
  }
  function D(_, e) {
    return _ = _ >>> 0, Ji().subarray(_ / 4, _ / 4 + e);
  }
  function Qi(_, e) {
    return _ = _ >>> 0, Zi().subarray(_ / 1, _ / 1 + e);
  }
  function I(_, e) {
    _ = _ >>> 0;
    const n = w(), b = [];
    for (let r = _; r < _ + 4 * e; r += 4) b.push(t(n.getUint32(r, true)));
    return b;
  }
  function Xi(_, e) {
    return _ = _ >>> 0, _g().subarray(_ / 2, _ / 2 + e);
  }
  function M(_, e) {
    return _ = _ >>> 0, eg().subarray(_ / 4, _ / 4 + e);
  }
  function L(_, e) {
    return _ = _ >>> 0, B().subarray(_ / 1, _ / 1 + e);
  }
  let F = null;
  function w() {
    return (F === null || F.buffer.detached === true || F.buffer.detached === void 0 && F.buffer !== d.memory.buffer) && (F = new DataView(d.memory.buffer)), F;
  }
  let C = null;
  function Yi() {
    return (C === null || C.byteLength === 0) && (C = new Float32Array(d.memory.buffer)), C;
  }
  let R = null;
  function Hi() {
    return (R === null || R.byteLength === 0) && (R = new Int16Array(d.memory.buffer)), R;
  }
  let O = null;
  function Ji() {
    return (O === null || O.byteLength === 0) && (O = new Int32Array(d.memory.buffer)), O;
  }
  let q = null;
  function Zi() {
    return (q === null || q.byteLength === 0) && (q = new Int8Array(d.memory.buffer)), q;
  }
  function g(_, e) {
    return ng(_ >>> 0, e);
  }
  let G = null;
  function _g() {
    return (G === null || G.byteLength === 0) && (G = new Uint16Array(d.memory.buffer)), G;
  }
  let V = null;
  function eg() {
    return (V === null || V.byteLength === 0) && (V = new Uint32Array(d.memory.buffer)), V;
  }
  let W = null;
  function B() {
    return (W === null || W.byteLength === 0) && (W = new Uint8Array(d.memory.buffer)), W;
  }
  function t(_) {
    return A[_];
  }
  function o(_, e) {
    try {
      return _.apply(this, e);
    } catch (n) {
      d.__wbindgen_export3(c(n));
    }
  }
  let A = new Array(1024).fill(void 0);
  A.push(void 0, null, true, false);
  let T = A.length;
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
      --b.cnt === 0 && (d.__wbindgen_export5(b.a, b.b), b.a = 0, J.unregister(b));
    }, J.register(r, b, b), r;
  }
  function h(_, e, n) {
    if (n === void 0) {
      const u = k.encode(_), i = e(u.length, 1) >>> 0;
      return B().subarray(i, i + u.length).set(u), x = u.length, i;
    }
    let b = _.length, r = e(b, 1) >>> 0;
    const a = B();
    let f = 0;
    for (; f < b; f++) {
      const u = _.charCodeAt(f);
      if (u > 127) break;
      a[r + f] = u;
    }
    if (f !== b) {
      f !== 0 && (_ = _.slice(f)), r = n(r, b, b = f + _.length * 3, 1) >>> 0;
      const u = B().subarray(r + f, r + b), i = k.encodeInto(_, u);
      f += i.written, r = n(r, b, f, 1) >>> 0;
    }
    return x = f, r;
  }
  function E(_) {
    const e = t(_);
    return $i(_), e;
  }
  let U = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  U.decode();
  const tg = 2146435072;
  let z = 0;
  function ng(_, e) {
    return z += e, z >= tg && (U = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), U.decode(), z = e), U.decode(B().subarray(_, _ + e));
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
  function bg(_) {
    d = _;
  }
  URL = globalThis.URL;
  const m = await b_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: ii,
      __wbg_next_71f2aa1cb3d1e37e: Gr,
      __wbg_done_89b2b13e91a60321: pn,
      __wbg_value_a5d5488a9589444a: P0,
      __wbg_then_16d107c451e9905d: Ru,
      __wbg_new_227d7c05414eb861: Sr,
      __wbg_stack_3b0d974bbf31e44f: Nd,
      __wbg_error_a6fa202b58aa1cd3: qn,
      __wbg_fetch_fda7bc27c982b1f3: Wn,
      __wbindgen_object_clone_ref: ui,
      __wbg_userAgentData_31b8f893e8977e94: A0,
      __wbg_brands_b7dcf262485c3e7c: ue,
      __wbg_length_370319915dc99107: cr,
      __wbg_get_unchecked_6e0ad6d2a41b06f6: Wb,
      __wbg_brand_3bc196a43eceb8af: de,
      __wbg_get_507a50627bffa49b: Ob,
      __wbg_offsetX_a9bf2ea7f0575ac9: Nr,
      __wbg_offsetY_10e5433a1bbd4c01: Qr,
      __wbg_cancel_65f38182e2eeac5c: Se,
      __wbg_animate_8f41e2f47c7d04ab: M_,
      __wbg_play_3997a1be51d27925: ec,
      __wbg_push_d2ae3af0c1217ae6: wc,
      __wbg_catch_c1a60df4c30d76d3: Ie,
      __wbg_getOwnPropertyDescriptor_543d91136adb7c16: mb,
      __wbg_scheduler_b35fe73ba70e89cc: $c,
      __wbg_requestIdleCallback_3689e3e38f6cfc02: Gc,
      __wbg_scheduler_a17d41c9c822fc26: Kc,
      __wbg_postTask_e2439afddcdfbb55: dc,
      __wbg_webkitFullscreenElement_4055d847f8ff064e: O0,
      __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: q0,
      __wbg_requestFullscreen_3f16e43f398ce624: Oc,
      __wbg_requestFullscreen_b977a3a0697e883c: qc,
      __wbg_getCoalescedEvents_3e003f63d9ebbc05: cb,
      __wbg_Window_c7f91e3f80ae0a0e: a_,
      __wbg_prototype_0d5bb2023db3bcfc: gc,
      __wbg_performance_3fcf6e32a7e1ed0a: Hr,
      __wbg_now_e7c6795a7f81e10f: Wr,
      __wbg_set_color_attachments_581fdb3310e4abfa: za,
      __wbg_set_label_17eb9fe3a02f62b0: Gf,
      __wbg_set_view_gpu_texture_view_c0f35f8857c25206: Ld,
      __wbg_set_depth_clear_value_beda3ec5b1a5c43a: Za,
      __wbg_set_depth_load_op_511c513eab4e56a9: tf,
      __wbg_set_depth_store_op_c89f33b39b43361c: af,
      __wbg_set_depth_read_only_7f41a74741c144ec: bf,
      __wbg_set_stencil_clear_value_42be608809151e2a: ed,
      __wbg_set_stencil_load_op_31838c036993098a: nd,
      __wbg_set_stencil_store_op_e6be1cbc3a8fc210: cd,
      __wbg_set_stencil_read_only_bf1d0c1897e25c62: rd,
      __wbg_set_depth_stencil_attachment_73b79e8b4e948222: cf,
      __wbg_set_query_set_41de86d2401aee04: Co,
      __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: Fa,
      __wbg_set_end_of_pass_write_index_0d546e46b86ea069: sf,
      __wbg_set_timestamp_writes_98bed1a8bbc6682d: ld,
      __wbg_beginRenderPass_aa22c432e793359a: R_,
      __wbg_set_label_ef44793ddf4455c5: Jf,
      __wbg_set_query_set_4889dd944d5ec0fd: Ro,
      __wbg_set_beginning_of_pass_write_index_0d4fa06109208ad7: Ma,
      __wbg_set_end_of_pass_write_index_49a6ddbb2b888bfa: wf,
      __wbg_set_timestamp_writes_59c2d19ed8aecd97: wd,
      __wbg_beginComputePass_431a159006c13c7c: E_,
      __wbg_set_width_9f685402c2cbee70: Od,
      __wbg_set_height_14335c4047cf9c1b: Cf,
      __wbg_set_depth_or_array_layers_89371305ed0bd962: nf,
      __wbg_label_7ed42f25f841996b: br,
      __wbg_set_label_08d9be3e4719c226: qf,
      __wbg_finish_4d91de5e927dd13f: zn,
      __wbg_finish_6e06b68ab68cd9f6: jn,
      __wbg_setPipeline_d73f019e98c76d2d: na,
      __wbg_setBindGroup_3e4ce136bc833ea1: Hc,
      __wbg_setBindGroup_c22a1b95c0b17f37: Jc,
      __wbg_dispatchWorkgroups_afb2344298c62227: ln,
      __wbg_set_dst_factor_ec7407f19be1aff9: gf,
      __wbg_set_operation_62ce44e1728c4047: Bo,
      __wbg_set_src_factor_9bfe84af9b7b5cac: Zo,
      __wbg_set_texture_1f64653a5d2d7b4d: gd,
      __wbg_set_mip_level_f7ac79e8c54f59ad: mo,
      __wbg_set_x_876d592971db129a: Gd,
      __wbg_set_y_2b1f5ac0dd5586a5: Vd,
      __wbg_set_z_ef005d82bc9d24e3: Wd,
      __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: To,
      __wbg_set_aspect_4962514fe99e68e6: Sa,
      __wbg_Window_afcc911b2f9c92e2: c_,
      __wbg_gpu_2ccc250735d24a2a: Ub,
      __wbg_WorkerGlobalScope_5d19ebc889ff397e: f_,
      __wbg_set_a_88262a42340d0b1c: ia,
      __wbg_set_b_c47befe0af3261eb: Aa,
      __wbg_set_g_5983abfc46e0cf4e: kf,
      __wbg_set_r_c6f4c68f4804d655: Oo,
      __wbg_writeBuffer_8b5bd251a89198bc: V0,
      __wbg_set_bytes_per_row_d69b88eee3929c07: Ga,
      __wbg_set_rows_per_image_59a813ac5006e10e: jo,
      __wbg_set_offset_f64_fa66068813376ca3: Mo,
      __wbg_writeTexture_53ba204c494b042c: W0,
      __wbg_onSubmittedWorkDone_270d6b5a45520e79: Xr,
      __wbg_submit_ce44115121cd166c: du,
      __wbg_getMappedRange_d0bf3141224111b6: lb,
      __wbg_unmap_adaf93276fdf9aaf: y0,
      __wbg_destroy_fe937f756bf8df37: cn,
      __wbg_mapAsync_52b01fa9e8f765fd: ir,
      __wbg_set_size_f64_6bcd40704bf4cfdc: Yo,
      __wbg_set_usage_b2a2935f37bf3d08: Id,
      __wbg_set_mapped_at_creation_81b586dc90a50347: fo,
      __wbg_set_label_d010f237b26f2c55: Qf,
      __wbg_createBuffer_0726dd2ab09ea1d2: nt,
      __wbg_set_address_mode_u_9e2695575a219e33: sa,
      __wbg_set_address_mode_v_f479b2e6cccbcac4: wa,
      __wbg_set_address_mode_w_46273e153230180d: la,
      __wbg_set_compare_cd9b62cdb92eb580: ja,
      __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: ro,
      __wbg_set_lod_min_clamp_6d20c97916baeb93: co,
      __wbg_set_mag_filter_b5adebc99cb938e1: ao,
      __wbg_set_min_filter_c72f17375e135f0a: so,
      __wbg_set_mipmap_filter_5bf66195a3639700: po,
      __wbg_set_max_anisotropy_2beada0e2db62c45: uo,
      __wbg_set_label_5ee7427342869829: Uf,
      __wbg_createSampler_c8ffb3c8d565f704: xt,
      __wbg_set_format_2c1414a817c213f8: If,
      __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: Jo,
      __wbg_set_usage_ba5b0f8b333ab325: Ad,
      __wbg_set_label_547d0d4aec39fbe9: Wf,
      __wbg_set_dimension_868eee80f4b90011: df,
      __wbg_set_mip_level_count_776c8c218b65bc08: lo,
      __wbg_set_sample_count_eb86a8b18545b54f: Ko,
      __wbg_set_view_formats_4347dc8363331086: Bd,
      __wbg_createTexture_1bac74c999b8a48e: It,
      __wbg_set_entries_a12aca1e458b0456: mf,
      __wbg_set_layout_913d53c17194c989: eo,
      __wbg_set_label_79387decda299036: $f,
      __wbg_createBindGroup_655c6e6c0258530e: et,
      __wbg_set_code_b4f37f81f45b5b25: Wa,
      __wbg_set_label_e3944e54881b8c50: Yf,
      __wbg_createShaderModule_2e44fc7677c6288b: yt,
      __wbg_set_label_72bb4f41ef0cb893: Kf,
      __wbg_createCommandEncoder_ec1f40f0cb4d09df: rt,
      __wbg_set_bind_group_layouts_5a9cfea401c020ab: Ba,
      __wbg_set_label_9556af8b5cda3c9d: Nf,
      __wbg_createPipelineLayout_2c8cd4528b06c108: ut,
      __wbg_set_module_d0e2098713606cae: vo,
      __wbg_set_entry_point_e87e79251dd3144f: yf,
      __wbg_set_buffers_7d0d8f507699e956: qa,
      __wbg_set_layout_50ab727f44b38f26: _o,
      __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: no,
      __wbg_set_vertex_0be5d146f9ff6f36: Pd,
      __wbg_set_label_e922700240417ab5: Hf,
      __wbg_set_format_e52bdcca880d2c8e: Ff,
      __wbg_set_depth_compare_0c8631eb2eae98e3: _f,
      __wbg_set_depth_write_enabled_ce89750042940350: ff,
      __wbg_set_depth_bias_d7cd16096242a657: Ha,
      __wbg_set_depth_bias_clamp_1c0d695df7f092e5: Ya,
      __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: Ja,
      __wbg_set_compare_f36b34abfaa08ccb: Ka,
      __wbg_set_depth_fail_op_668155ae33d3c06f: ef,
      __wbg_set_fail_op_92f716dbc88b6973: vf,
      __wbg_set_pass_op_cf02fa088d6352a7: ko,
      __wbg_set_stencil_back_85b22f1db5b1940a: _d,
      __wbg_set_stencil_front_525526164a798a44: td,
      __wbg_set_stencil_read_mask_5cc26495e8b3ae82: bd,
      __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: ad,
      __wbg_set_depth_stencil_97506c7bea4f53da: rf,
      __wbg_set_module_f02e076ca7e7daf8: So,
      __wbg_set_targets_c38bd200c836d66f: id,
      __wbg_set_entry_point_207540f042015ce5: pf,
      __wbg_set_fragment_8b780f00a0b0e6f3: Bf,
      __wbg_set_count_069a4eac409bac55: Na,
      __wbg_set_mask_70a8a59ce09e5997: oo,
      __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: xa,
      __wbg_set_multisample_37ddafe88b5cd466: Io,
      __wbg_set_cull_mode_fc649853947a3d0c: Xa,
      __wbg_set_front_face_28ffdf524eedce5b: Tf,
      __wbg_set_strip_index_format_9f787be6c5fc9e87: ud,
      __wbg_set_topology_da25f2cc5af203d2: pd,
      __wbg_set_unclipped_depth_04524a2b44e1e3c1: vd,
      __wbg_set_primitive_43c23761a55b4088: Eo,
      __wbg_createRenderPipeline_cf98d4d699bfb03c: wt,
      __wbg_set_module_5db9b76ee2dd2a59: ho,
      __wbg_set_entry_point_5f26aacbe4c545eb: xf,
      __wbg_set_layout_41021cfd2a2f62df: Zf,
      __wbg_set_layout_gpu_auto_layout_mode_0a5a185b3d52b726: to,
      __wbg_set_compute_d0c2d276b6d4b18d: $a,
      __wbg_set_label_6db0393d3fdc90a5: jf,
      __wbg_createComputePipeline_2545c47f08715810: ct,
      __wbg_set_entries_86a29dd6291c95e7: lf,
      __wbg_set_label_48e6b787d256f621: Vf,
      __wbg_createBindGroupLayout_49a7e2b3d076afcf: _t,
      __wbg_end_f99ebed53d4e198a: Cn,
      __wbg_new_typed_4148bd5ae72ab3f0: Er,
      __wbg_set_required_limits_871ed33c68613dcb: Go,
      __wbg_set_required_features_1baf274a8669db60: qo,
      __wbg_set_label_60ad96c811e0d109: zf,
      __wbg_requestDevice_ab46d0519ea1cc34: Rc,
      __wbg_end_c36889de8ddef882: En,
      __wbg_getPreferredCanvasFormat_8b57039d1801a506: yb,
      __wbg_getCurrentTexture_20714d1bd9051cab: ib,
      __wbg_set_device_e275d1d4f3c9eb74: of,
      __wbg_set_format_815efd4dc4817bbb: Mf,
      __wbg_set_usage_a137f82ca163b0a9: Sd,
      __wbg_set_alpha_mode_df805952892caa9c: pa,
      __wbg_set_mode_9990b3393ba469ae: yo,
      __wbg_set_tone_mapping_b3464f1baa4cff92: md,
      __wbg_set_view_formats_5797d2fff3c11808: Td,
      __wbg_configure_0e4789c0f6b35c8e: Ne,
      __wbg_set_dimension_e325282e613ca0a4: uf,
      __wbg_set_format_1fcaa7d60546b490: Sf,
      __wbg_set_aspect_0d453bca3d012f02: va,
      __wbg_set_base_array_layer_f176bb9f1b37b342: Da,
      __wbg_set_array_layer_count_7312f0f31af94e7c: ya,
      __wbg_set_base_mip_level_1df145d9f8db32a9: Pa,
      __wbg_set_mip_level_count_534caaa7e68e68b8: wo,
      __wbg_set_label_e16e2dbe51349c7f: Xf,
      __wbg_set_usage_ddd42599bbba7779: Dd,
      __wbg_createView_ceaf2f5881adbd34: Mt,
      __wbg_set_power_preference_8fdca0b7af640d49: Lo,
      __wbg_requestAdapter_2e6718811c735a57: Ec,
      __wbg_queue_adce34608fd0c893: vc,
      __wbg_drawIndexed_d31913e79d58fbac: Pn,
      __wbg_setPipeline_c41bf46790f27f9e: ta,
      __wbg_setBindGroup_268fd1714fff0ef5: Yc,
      __wbg_setBindGroup_f0de6cb2c7dbfc2c: Zc,
      __wbg_setIndexBuffer_7f3cf667b4d71566: ea,
      __wbg_setIndexBuffer_2531a9103450445e: _a,
      __wbg_setVertexBuffer_1e448859663dd400: fa,
      __wbg_setVertexBuffer_7cf533d694e747f3: oa,
      __wbg_draw_6877f98847e1e36c: Mn,
      __wbg_set_format_5d2f25cc93654ecc: Df,
      __wbg_set_offset_f64_28c24dc15000932e: Do,
      __wbg_set_shader_location_7e1832a74f912217: Qo,
      __wbg_set_buffer_ef7f75306cf663ed: Oa,
      __wbg_set_visibility_9570b037224c4cc2: Ed,
      __wbg_set_binding_155b0440b4307793: Ta,
      __wbg_set_sampler_c0e1258543a33bce: No,
      __wbg_set_texture_9dcedde1bb31eda6: sd,
      __wbg_set_storage_texture_939a097db4b18bd4: od,
      __wbg_set_external_texture_386483d8dd82ab56: hf,
      __wbg_set_attributes_7537844a7e6dafdc: Ia,
      __wbg_set_array_stride_f64_27ffaf4fffd74e61: ha,
      __wbg_set_step_mode_a97bb24714da41a9: fd,
      __wbg_set_format_5ff53724ed6cedf2: Pf,
      __wbg_set_write_mask_d45279e56abbfcb5: qd,
      __wbg_set_blend_7493c2066c3e9970: La,
      __wbg_set_binding_f74df3510792aba1: ka,
      __wbg_set_resource_5ae7b5e67924f234: Wo,
      __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: zo,
      __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: Uo,
      __wbg_set_alpha_bfd2df62e7bc581b: ma,
      __wbg_set_color_83aa977526e88cbb: Ua,
      __wbg_set_access_9a5092f05dc45fad: ga,
      __wbg_set_format_533f9ffa7eef563d: Af,
      __wbg_set_view_dimension_0df554032f1f3a85: Md,
      __wbg_set_buffer_c3410572051920ba: Ra,
      __wbg_set_offset_f64_89f0ce01a689839e: Po,
      __wbg_set_size_f64_8b8f6bba5d678162: Ho,
      __wbg_set_type_ccf8472d40abcddf: yd,
      __wbg_set_multisampled_7913fd7183272840: Ao,
      __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: Lf,
      __wbg_set_min_binding_size_f64_5005a6904cdf43da: go,
      __wbg_set_type_d09829f59932a0fc: hd,
      __wbg_set_sample_type_c32e1dfff94e63eb: $o,
      __wbg_set_view_dimension_4818d4c18ce5815e: Fd,
      __wbg_set_load_op_99661da6c4eab9b0: bo,
      __wbg_set_store_op_b5fdf672436f13f3: dd,
      __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: kd,
      __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Va,
      __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Vo,
      __wbg_unconfigure_0a07a0a40de8988d: qu,
      __wbg_includes_78c9a3115b08eddc: $b,
      __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Hb,
      __wbg_blendFunc_114dc7056ccfeb8d: re,
      __wbg_colorMask_a4d164c2039b5731: Ge,
      __wbg_depthFunc_74a8f8acf8973c86: en,
      __wbg_depthMask_a644a67deced3257: nn,
      __wbg_fenceSync_fe2cdba4a0d73679: Gn,
      __wbg_frontFace_29ef7151de8b5ed9: eb,
      __wbg_uniform1ui_cd7ad5581093b3df: zu,
      __wbg_beginQuery_042a1f99e870066c: C_,
      __wbg_bindBuffer_1e00cfb4321ef9a4: V_,
      __wbg_blendColor_eae0cd578a2c7d15: J_,
      __wbg_clearDepth_ca9b22d41551b513: Fe,
      __wbg_deleteSync_9b0e43580942a0f6: $t,
      __wbg_depthRange_5e90d4d236280ff5: rn,
      __wbg_drawArrays_b0c59a6e158122f2: vn,
      __wbg_readBuffer_4271437a70aae481: Sc,
      __wbg_useProgram_49495850b446fa56: I0,
      __wbg_bindSampler_ce608f0de9d31acf: $_,
      __wbg_bindTexture_28eff4bbd8aaab54: N_,
      __wbg_createQuery_047c7c524e4ac4f8: st,
      __wbg_deleteQuery_0d1dcc4402a86ee1: Vt,
      __wbg_drawBuffers_1c1ec9b292442a2a: In,
      __wbg_linkProgram_4e047fb3197a0348: ar,
      __wbg_pixelStorei_c844cd0db4f1fde6: _c,
      __wbg_stencilMask_9a844dc58a89992f: ru,
      __wbg_attachShader_8971266b4c9bc514: L_,
      __wbg_clearStencil_58f2af46612bccae: Be,
      __wbg_createBuffer_01568a9d930d90dd: tt,
      __wbg_createShader_7d139f2d50f77365: vt,
      __wbg_deleteBuffer_1ca3ffe668a488e7: Ct,
      __wbg_deleteShader_993edb4beb3c4d53: Kt,
      __wbg_getExtension_101c7e41de3e4d90: sb,
      __wbg_getParameter_d39f59581389af1b: xb,
      __wbg_shaderSource_c3469dc2221dd528: zd,
      __wbg_activeTexture_d12958674e97a118: S_,
      __wbg_blendEquation_455b8986ededabc0: ee,
      __wbg_compileShader_9bdfd792722cf704: Ve,
      __wbg_createProgram_538c9777a4ac084f: gt,
      __wbg_createSampler_70c8392d98896235: pt,
      __wbg_createTexture_d13f98e0d3d912f4: At,
      __wbg_deleteProgram_132e191baa9fa84f: Gt,
      __wbg_deleteSampler_0abb528566c4ab3b: zt,
      __wbg_deleteTexture_bdc2202d7a50dcea: Qt,
      __wbg_polygonOffset_4eb460adf41db6cd: bc,
      __wbg_texParameteri_1fc451e0964fc91c: lu,
      __wbg_texStorage2D_7f947efc63dac273: pu,
      __wbg_texStorage3D_f8f2e4b3386736f9: xu,
      __wbg_bindFramebuffer_390311eff3896937: U_,
      __wbg_blitFramebuffer_a1215976f663b058: ae,
      __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: K_,
      __wbg_bindVertexArray_427eeac0c1764d8a: Y_,
      __wbg_createFramebuffer_de0d521f546e7534: ot,
      __wbg_deleteFramebuffer_963cd69957209d37: Rt,
      __wbg_getSyncParameter_d8f6c145657a3550: Lb,
      __wbg_samplerParameterf_0b3308eeb1faa3a1: zc,
      __wbg_samplerParameteri_7b1b4091de49aabb: jc,
      __wbg_blendFuncSeparate_3ee6d939a9f3938b: be,
      __wbg_createRenderbuffer_9d801bf44c314f44: mt,
      __wbg_createVertexArray_baf9eef7ea5a2c7a: Pt,
      __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: Wt,
      __wbg_deleteVertexArray_475d4e969aac1dd0: Yt,
      __wbg_getQueryParameter_919125495ccb17ca: Db,
      __wbg_getShaderInfoLog_5cee2add982c7165: Pb,
      __wbg_stencilOpSeparate_c77fcb47561d0aee: au,
      __wbg_bindAttribLocation_0fe5da7e01ac0d15: O_,
      __wbg_bufferData_3d4f29bdfb1fa46c: ge,
      __wbg_getProgramInfoLog_d1ce570463a68779: vb,
      __wbg_getShaderParameter_3394e75dcb97f380: Fb,
      __wbg_getUniformLocation_788a34295dd6fabe: Rb,
      __wbg_readPixels_82c9dee754d58176: Ac,
      __wbg_renderbufferStorage_0a8de92542893819: Tc,
      __wbg_copyTexSubImage2D_8daea651fc408645: He,
      __wbg_copyTexSubImage3D_bfe7a14dac9ad777: Ze,
      __wbg_drawArraysInstanced_51b161548a3f10c4: yn,
      __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: wb,
      __wbg_getProgramParameter_c8d1154fbb3c0890: Ib,
      __wbg_stencilFuncSeparate_814300446c2969ef: eu,
      __wbg_stencilMaskSeparate_49367b0b5883a8bd: tu,
      __wbg_texImage3D_bdd9bebe42ed1f52: su,
      __wbg_uniformBlockBinding_a9ed6b750199e03c: a0,
      __wbg_vertexAttribDivisor_fb31b5ed9bc856da: F0,
      __wbg_framebufferTexture2D_3c2abd606fc53f31: Hn,
      __wbg_invalidateFramebuffer_343bbfb15e6835fd: Zb,
      __wbg_blendEquationSeparate_043e2f50f6ecb2d3: Z_,
      __wbg_getUniformBlockIndex_cfee6ff6d323c784: Eb,
      __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Yn,
      __wbg_getSupportedExtensions_2a7458ec45e82560: Tb,
      __wbg_clientWaitSync_cf8e49f8ba228377: Ce,
      __wbg_framebufferTextureLayer_f2d9db097bfbb863: Zn,
      __wbg_texSubImage3D_8077e90ec309c414: Tu,
      __wbg_uniform2fv_1b43656b33177d21: ju,
      __wbg_uniform2iv_859048b9d60f46ae: $u,
      __wbg_uniform3fv_8ecb5ebb510b7bce: Xu,
      __wbg_uniform3iv_09abae5eabd6b9d6: Hu,
      __wbg_uniform4fv_674a247aeb15012d: n0,
      __wbg_uniform4iv_d02934d7b94df609: r0,
      __wbg_enableVertexAttribArray_7470ba2dcf2606e3: Bn,
      __wbg_uniform2uiv_8a9cb3155271213b: Qu,
      __wbg_uniform3uiv_3c0b163732f5b8f0: Zu,
      __wbg_uniform4uiv_0d1a8ed214f10c31: c0,
      __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: dn,
      __wbg_clearBufferfv_2e0f1a0ea56de859: Ae,
      __wbg_clearBufferiv_0360269bf6e34c54: De,
      __wbg_clearBufferuiv_df94a395d4915377: Pe,
      __wbg_vertexAttribPointer_a8f0af57269c2067: T0,
      __wbg_drawElementsInstanced_c7f96ea02e6d5326: Dn,
      __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Bc,
      __wbg_texSubImage3D_c9e5a071796d412f: Lu,
      __wbg_uniformMatrix2fv_9284424cc6aac672: o0,
      __wbg_uniformMatrix3fv_568aa181379c8a75: g0,
      __wbg_uniformMatrix4fv_423b958042692150: m0,
      __wbg_vertexAttribIPointer_de08a8d8b625e253: B0,
      __wbg_bindBufferRange_f5c29912db0476e9: G_,
      __wbg_bufferData_90ef588bac2be2f5: se,
      __wbg_texSubImage3D_93b38c69acb735c8: ku,
      __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: d0,
      __wbg_uniformMatrix2x4fv_d801a561c3c18169: u0,
      __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: s0,
      __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: w0,
      __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: p0,
      __wbg_uniformMatrix4x3fv_8640fa85b90ea910: x0,
      __wbg_readPixels_5f013a7d85b23800: Ic,
      __wbg_texImage3D_ef16a1f721b3f908: wu,
      __wbg_texSubImage3D_4fdd4cd95a2925c2: Fu,
      __wbg_texSubImage3D_6cb6cfd732dad145: Bu,
      __wbg_texSubImage3D_45e498ae6298998c: Mu,
      __wbg_texSubImage3D_feebaf7f0f4594c6: Eu,
      __wbg_compressedTexSubImage2D_c1362291573c7268: Ue,
      __wbg_compressedTexSubImage3D_04cb8b046c4321fe: Ke,
      __wbg_copyBufferSubData_cdf61f74aa6e0902: Ye,
      __wbg_bufferSubData_bae930b21e9c1c48: le,
      __wbg_compressedTexSubImage2D_da01674d2975d1ae: ze,
      __wbg_compressedTexSubImage3D_af0228a80ffd5993: $e,
      __wbg_getBufferSubData_11018928c908ac2c: bb,
      __wbg_texSubImage2D_047380bb2660e4f9: yu,
      __wbg_clear_dd06a0da4ce8e13f: Ee,
      __wbg_flush_e03c08da6863b5ab: Nn,
      __wbg_texImage2D_8d168171984f2a40: gu,
      __wbg_texSubImage2D_bed5e7a3cd81d409: Iu,
      __wbg_texSubImage2D_e107b4f88c19b920: Pu,
      __wbg_enable_28bbeed576131d1f: Tn,
      __wbg_finish_cbe7ec8675dd7705: Kn,
      __wbg_texSubImage2D_98c43894eb217aa7: Su,
      __wbg_texSubImage2D_5058af3d30a8e205: hu,
      __wbg_texSubImage2D_6a376bfc3a31436b: vu,
      __wbg_texSubImage2D_d1af697e69f8a9e4: Au,
      __wbg_disable_1659d1b7d50c31e7: un,
      __wbg_scissor_105e756596bc35df: Nc,
      __wbg_texImage2D_5abd8779d1d033c7: iu,
      __wbg_viewport_affdf15c559df1e2: L0,
      __wbg_cullFace_f1c75ae19b07eaf3: kt,
      __wbg_endQuery_a50f7fc49cfe56e9: Ln,
      __wbg_uniform1f_62692c8fa8e7bf1e: Gu,
      __wbg_uniform1i_7621f908f78177df: Uu,
      __wbg_uniform4f_9ff60fc65b0ed726: _0,
      __wbg_instanceof_Window_05ba1ee4f6781663: Jb,
      __wbg_matchMedia_9968278b31706f78: gr,
      __wbg_queueMicrotask_ed5b33385a53c3a9: hc,
      __wbg_devicePixelRatio_1c0e0ed7deb19cd8: fn,
      __wbg_getComputedStyle_961681bdf7e518e8: ab,
      __wbg_cancelIdleCallback_b9e469156370a1e5: ve,
      __wbg_requestIdleCallback_d292749bf33501af: Vc,
      __wbg_cancelAnimationFrame_086d6084925c4e06: he,
      __wbg_requestAnimationFrame_1a85deeab66448c2: Cc,
      __wbg_clearTimeout_8f80437be2324e09: ke,
      __wbg_setTimeout_5ccd86968701f1ec: ca,
      __wbg_setTimeout_cfa2cf195c3738db: aa,
      __wbg_document_179650d6cb13c263: mn,
      __wbg_location_c9a2271428996698: dr,
      __wbg_navigator_99621db14b3f1099: hr,
      __wbg_setAttribute_71039043be82d098: Xc,
      __wbg_setPointerCapture_70025ca3fb7f26b9: ba,
      __wbg_activeElement_4bc99dc1a7094c27: h_,
      __wbg_createElement_fcbc0805de826d62: at,
      __wbg_querySelector_fd7d157ebe17cd16: pc,
      __wbg_visibilityState_301d0905e8103e21: C0,
      __wbg_getElementById_1cbd8f06dbe8eb8e: gb,
      __wbg_fullscreenElement_9f50a5e63bb433a8: nb,
      __wbg_querySelectorAll_7e98cbe256deaadd: mc,
      __wbg_body_40ec34e0a2931fe8: oe,
      __wbg_fetch_b5951fc96f52f786: Vn,
      __wbg_navigator_51379c10a84aeec9: yr,
      __wbg_focus_2f77051f98540625: Qn,
      __wbg_style_6657aed849e5d757: ou,
      __wbg_blendFunc_a854d7e4459150ba: ce,
      __wbg_colorMask_44ebb91cad2502f2: qe,
      __wbg_depthFunc_455cfeb8a9d2fb4c: _n,
      __wbg_depthMask_4bd6c73b1339d257: tn,
      __wbg_frontFace_fc6d98dafa42de87: tb,
      __wbg_bindBuffer_a01497b1abdcdd9a: W_,
      __wbg_blendColor_793b560dc69ddd0b: H_,
      __wbg_clearDepth_8b5d226aae155082: Me,
      __wbg_depthRange_38b2287ffbea14fd: bn,
      __wbg_drawArrays_676becae0149ed65: hn,
      __wbg_useProgram_182d120fe476921b: S0,
      __wbg_bindTexture_9b04b1b7c00d4dd6: Q_,
      __wbg_linkProgram_d7c71c539c8c6a43: fr,
      __wbg_pixelStorei_2a93b18efde9acf8: Zr,
      __wbg_stencilMask_1c99b79b516d12dd: bu,
      __wbg_attachShader_5f7f4077e124e23b: k_,
      __wbg_clearStencil_a66fe23df6313fc7: Te,
      __wbg_createBuffer_2075765bde5035d5: bt,
      __wbg_createShader_78bc8b7e9a88e1a8: ht,
      __wbg_deleteBuffer_08eb938e35c27967: Et,
      __wbg_deleteShader_3120790d36063afe: jt,
      __wbg_getParameter_039a5899307fab55: pb,
      __wbg_shaderSource_4cf90af97621ff49: Ud,
      __wbg_activeTexture_92b04d918019d603: v_,
      __wbg_blendEquation_f5c5272993f6cb01: te,
      __wbg_compileShader_fc2e4b73240d4fd7: We,
      __wbg_createProgram_118becaac3a20318: it,
      __wbg_createTexture_0ee0fa5f924f3d14: St,
      __wbg_deleteProgram_09bd45a51105b2f6: qt,
      __wbg_deleteTexture_2b163b157ea1be24: Nt,
      __wbg_polygonOffset_eccb68e40a18f861: rc,
      __wbg_texParameteri_9d0daa263d3a863f: mu,
      __wbg_bindFramebuffer_658e4b06f7ee8bb4: z_,
      __wbg_bindRenderbuffer_75e8469e930840fa: j_,
      __wbg_createFramebuffer_b24d2c80a8b9e7cc: ft,
      __wbg_deleteFramebuffer_d1a36e889b009344: Ot,
      __wbg_blendFuncSeparate_37156309688f8f88: ne,
      __wbg_createRenderbuffer_71af5c0d615e9271: lt,
      __wbg_deleteRenderbuffer_ca999f7883b777af: Ut,
      __wbg_getShaderInfoLog_bc236afe696c1283: Mb,
      __wbg_stencilOpSeparate_b2cb9af05b803e02: cu,
      __wbg_bindAttribLocation_94202d7a59ab7863: q_,
      __wbg_bufferData_ce4f44d56e9ddab5: we,
      __wbg_getProgramInfoLog_c4762e0513468a26: hb,
      __wbg_getShaderParameter_cbcc0995e8e16214: Bb,
      __wbg_getUniformLocation_24ef46cdda2148ab: Cb,
      __wbg_renderbufferStorage_ab5f745ff8efce3d: kc,
      __wbg_copyTexSubImage2D_c73f91f1d7022402: Je,
      __wbg_getProgramParameter_b9995b56c258ac86: Sb,
      __wbg_stencilFuncSeparate_35136c4e5153406f: _u,
      __wbg_stencilMaskSeparate_63976cc45fb94d84: nu,
      __wbg_framebufferTexture2D_e1fb64212fcda219: Jn,
      __wbg_blendEquationSeparate_c7e2b2261c94e1c5: _e,
      __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Xn,
      __wbg_uniform2fv_948dab6a82b428ac: Ku,
      __wbg_uniform2iv_f84a24961c0cfcd0: Nu,
      __wbg_uniform3fv_95d1933ea1440725: Yu,
      __wbg_uniform3iv_a3a7008990fd84f0: Ju,
      __wbg_uniform4fv_4ca8c114ca3de099: t0,
      __wbg_uniform4iv_45ab52abcb3f882c: b0,
      __wbg_enableVertexAttribArray_4c08219124740f14: Fn,
      __wbg_disableVertexAttribArray_160060fbd7e97de0: on,
      __wbg_vertexAttribPointer_b300c8e000cdac93: k0,
      __wbg_uniformMatrix2fv_769725d64641341f: f0,
      __wbg_uniformMatrix3fv_33e96c7d29dc1e22: i0,
      __wbg_uniformMatrix4fv_25115a23e04f6db7: l0,
      __wbg_bufferData_073a7c6abef7a55f: ie,
      __wbg_readPixels_c7861e25836bf57b: Dc,
      __wbg_bufferSubData_ce9854d3d337e2cf: me,
      __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: je,
      __wbg_clear_53d71d234e14e4c1: Le,
      __wbg_flush_db77b4a63d6b337d: $n,
      __wbg_enable_611804c0ac1504ce: kn,
      __wbg_finish_126e6f2ac71e3096: Un,
      __wbg_texSubImage2D_d3cd09d0ffcb27be: Du,
      __wbg_disable_40c3975167c1ee07: gn,
      __wbg_scissor_573b844152316b8d: Qc,
      __wbg_texImage2D_3813406af5bf54c8: uu,
      __wbg_viewport_e8a16ca4a5085e5f: E0,
      __wbg_cullFace_62bbea3bef0e6b99: Tt,
      __wbg_uniform1f_b79d0c5667f9fb40: Vu,
      __wbg_uniform1i_5830de6702add20a: Wu,
      __wbg_uniform4f_b25e39808b830021: e0,
      __wbg_disconnect_491a6bfd82cdd887: wn,
      __wbg_new_e0bd7540d9834af6: Tr,
      __wbg_observe_c3834a3e4cde3e64: zr,
      __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: Or,
      __wbg_now_390768da5ee9e776: Vr,
      __wbg_key_803dca86cdcfa8dd: nr,
      __wbg_code_89c999e407c79eef: Oe,
      __wbg_repeat_4e131e99bff9b9f4: Lc,
      __wbg_altKey_50f830d1793a2eea: D_,
      __wbg_ctrlKey_2e52816fa7160097: Ft,
      __wbg_location_8f24df2c257fb974: or,
      __wbg_metaKey_d961c7572a9f84f5: lr,
      __wbg_shiftKey_9bcb8bdd60c2f152: jd,
      __wbg_new_4339b2a2675a03e3: Dr,
      __wbg_abort_8bae0f33e7833997: y_,
      __wbg_signal_dad7cb35193abd31: $d,
      __wbg_set_box_223b9bc0b7f548f6: Ca,
      __wbg_preventDefault_b64888c857500682: ic,
      __wbg_movementX_87e39021f3fce8b8: pr,
      __wbg_movementY_f6f63087e2248fa9: xr,
      __wbg_button_f6a9a7b725f1838e: pe,
      __wbg_altKey_f3e24c4c9cfcf271: P_,
      __wbg_buttons_d8acd46cf8f40ae9: xe,
      __wbg_ctrlKey_50bd8324959ca786: Bt,
      __wbg_metaKey_f934f09e37889d70: mr,
      __wbg_shiftKey_9f797da486b2ade8: Kd,
      __wbg_set_method_5532d59b92d76467: io,
      __wbg_set_signal_c4ef8faddb4c1446: Xo,
      __wbg_set_credentials_bb34a40189e3b43b: Qa,
      __wbg_set_headers_9c61d123c3ee1f10: Ef,
      __wbg_set_body_029f2d171e0a005f: Ea,
      __wbg_set_mode_66c79886ad78fc05: xo,
      __wbg_pointerId_ea33d2695be12e7f: tc,
      __wbg_pointerType_d5e932608aa61bb6: nc,
      __wbg_getCoalescedEvents_366947e5550da21b: rb,
      __wbg_pressure_9a7845d9744ae9f4: uc,
      __wbg_drawBuffersWEBGL_c9b47f7f207125cf: Sn,
      __wbg_persisted_e508d4d322115185: Jr,
      __wbg_appendChild_f553e8704c4f14a6: F_,
      __wbg_contains_7189b09a477442a6: Qe,
      __wbg_new_0d809930cd1354c6: vr,
      __wbg_append_01c74e5c6b58aa64: B_,
      __wbg_instanceof_Response_c8b64b2256f01bec: Yb,
      __wbg_arrayBuffer_3b637f0fa65c5351: T_,
      __wbg_url_abdb8fb08377f8c0: v0,
      __wbg_text_d3a29f7525a132c3: Cu,
      __wbg_status_c45b3b9b3033184a: Zd,
      __wbg_headers_cf9c80f30e2a4eff: jb,
      __wbg_postMessage_b80f20949a4b4f55: fc,
      __wbg_set_onmessage_d511b70365304094: Fo,
      __wbg_close_3423cc7dafc477bb: Re,
      __wbg_start_d0cdf16ff965b3f3: Qd,
      __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: xn,
      __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: M0,
      __wbg_drawElementsInstancedANGLE_9b58c4013373b180: An,
      __wbg_bindVertexArrayOES_5cad2205a17e8990: X_,
      __wbg_createVertexArrayOES_2fa3e59eebd5f674: Dt,
      __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Xt,
      __wbg_isIntersecting_fc6d9529a49c5d62: _r,
      __wbg_log_d267660666346fb3: ur,
      __wbg_info_eadbe775a8e2e9eb: Nb,
      __wbg_warn_b1370d804fa3e259: R0,
      __wbg_debug_87fd9b1a625b7efb: Lt,
      __wbg_error_744744ff0c9861e6: Rn,
      __wbg_error_7ed559cd7146b49d: On,
      __wbg_deltaMode_d869228efd74f393: Ht,
      __wbg_deltaX_5d829ffba565ed10: Jt,
      __wbg_deltaY_6cfce8f8da250c23: Zt,
      __wbg_width_20c45c895834b83f: G0,
      __wbg_height_9f27216001e3c804: Kb,
      __wbg_userAgent_0558f0ac642f7771: D0,
      __wbg_addListener_b5b7f95360b22984: A_,
      __wbg_removeListener_768e1e787e1d4b2e: Mc,
      __wbg_media_40cbd26ab34df71f: wr,
      __wbg_matches_978994974df1e85b: sr,
      __wbg_setProperty_e4e51b1b1d681d15: ra,
      __wbg_removeProperty_70da952bc1b493fa: Fc,
      __wbg_getPropertyValue_dc6b061239dad6f1: Ab,
      __wbg_contentRect_1d6e15e2e0d3e3c3: Xe,
      __wbg_devicePixelContentBoxSize_dca8701a53307aca: an,
      __wbg_origin_ed66c06e67ad2049: Yr,
      __wbg_new_f1a34223ddbe3f7d: kr,
      __wbg_port1_dabba0a56576e47e: cc,
      __wbg_port2_d05676aee003eedc: ac,
      __wbg_blockSize_5af477b962b2b031: fe,
      __wbg_inlineSize_3c8412828bef21eb: Qb,
      __wbg_new_with_str_and_init_d95cbe11ce28e65e: Rr,
      __wbg_addEventListener_d85450ee1320c989: I_,
      __wbg_removeEventListener_a3f23c70077bdcc1: Pc,
      __wbg_set_height_bbeef8f354041577: Of,
      __wbg_getContext_fd298c901058eb31: ub,
      __wbg_getContext_7476e39fa008047e: fb,
      __wbg_new_25e75d1f0df4d87a: Ir,
      __wbg_set_width_49ac9b7d914afc85: Cd,
      __wbg_queryCounterEXT_b74a4567ddfeecf0: lc,
      __wbg_getSupportedProfiles_90a4f330938d0241: kb,
      __wbg_revokeObjectURL_e010fb0b45f93f3f: Uc,
      __wbg_createObjectURL_416e527781e6fd6d: dt,
      __wbg_postMessage_ef2dbf5e8c8ebffc: oc,
      __wbg_new_8f0c2d11e48a4727: Mr,
      __wbg_get_b2053e9bfdf3ca8e: Gb,
      __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: _b,
      __wbg_disconnect_39bfdcb35b1fc7b9: sn,
      __wbg_observe_615bef91ee28c925: Ur,
      __wbg_new_5394f65338077341: Pr,
      __wbg_observe_f27242eadc2ebd47: jr,
      __wbg_unobserve_41a4f85162f1fb18: h0,
      __wbg_set_type_8ce203e412e28cf6: xd,
      __wbg_set_height_7d9d8f892e6964c6: Rf,
      __wbg_getContext_e79ddf6a9cb3cc76: db,
      __wbg_getContext_ca12bb65aab778a4: ob,
      __wbg_set_width_8e30d010cd66830d: Rd,
      __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: Xb,
      __wbg_new_32b398fb48b6d94a: Ar,
      __wbg_new_da52cf8fe3429cb2: Br,
      __wbg_new_cd45aabdf6073e84: Fr,
      __wbg_length_1f0964f4a5e2c6d8: rr,
      __wbg_prototypesetcall_4770620bbe4688a0: sc,
      __wbg_new_from_slice_77cdfb7977362f3c: Lr,
      __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: Cr,
      __wbg_set_61e45ae8061eca11: da,
      __wbg_then_6ec10ae38b3e92f7: Ou,
      __wbg_of_85f52f8b6491a7ca: $r,
      __wbg_of_5f1b88183ddb5d94: Kr,
      __wbg_is_7b9d0b289033c7de: er,
      __wbg_iterator_6f722e4a93058b71: tr,
      __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: Yd,
      __wbg_static_accessor_SELF_146583524fe1469b: Hd,
      __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: Xd,
      __wbg_static_accessor_WINDOW_f2829a2234d7819e: Jd,
      __wbg_resolve_2191a4dfe481c25b: Wc,
      __wbg_next_6dbf2c0ac8cde20f: qr,
      __wbg_get_c7eb1f358a7654df: Vb,
      __wbg_call_8a2dd23819f8a60a: ye,
      __wbg_stringify_b54333f60f1e4dad: fu,
      __wbg_get_78f252d074a84d0b: qb,
      __wbg_has_8374cf06984d8bfc: zb,
      __wbg_set_8535240470bf2500: ua,
      __wbg_queueMicrotask_6a09b7bc46549209: yc,
      __wbg_queueMicrotask_0ab5b2d2393e99b9: xc,
      __wbg___wbindgen_number_get_394265ed1e1b84ee: l_,
      __wbg___wbindgen_throw_344f42d3211c4765: p_,
      __wbg___wbindgen_is_null_ea9085d691f535d3: i_,
      __wbg___wbindgen_is_object_a27215656b807791: g_,
      __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: s_,
      __wbg___wbindgen_string_get_b0ca35b86a603356: m_,
      __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: o_,
      __wbg___wbindgen_is_function_1ff95bcc5517c252: u_,
      __wbg___wbindgen_is_undefined_c05833b95a3cf397: w_,
      __wbg___wbindgen_debug_string_c25d447a39f5578f: d_,
      __wbg__wbg_cb_unref_fffb441def202758: x_,
      __wbindgen_cast_0000000000000001: U0,
      __wbindgen_cast_0000000000000002: z0,
      __wbindgen_cast_0000000000000003: j0,
      __wbindgen_cast_0000000000000004: K0,
      __wbindgen_cast_0000000000000005: $0,
      __wbindgen_cast_0000000000000006: N0,
      __wbindgen_cast_0000000000000007: Q0,
      __wbindgen_cast_0000000000000008: X0,
      __wbindgen_cast_0000000000000009: Y0,
      __wbindgen_cast_000000000000000a: H0,
      __wbindgen_cast_000000000000000b: J0,
      __wbindgen_cast_000000000000000c: Z0,
      __wbindgen_cast_000000000000000d: _i,
      __wbindgen_cast_000000000000000e: ei,
      __wbindgen_cast_000000000000000f: ti,
      __wbindgen_cast_0000000000000010: ni,
      __wbindgen_cast_0000000000000011: bi,
      __wbindgen_cast_0000000000000012: ri,
      __wbindgen_cast_0000000000000013: ci,
      __wbindgen_cast_0000000000000014: ai,
      __wbindgen_cast_0000000000000015: fi,
      __wbindgen_cast_0000000000000016: oi,
      __wbindgen_cast_0000000000000017: di
    }
  }, r_), rg = m.memory, cg = m.main, ag = m.run_web, fg = m.__abort_handler, og = m.__instance_terminated, dg = m.__wasm_bindgen_func_elem_11681, ug = m.__wasm_bindgen_func_elem_3331, ig = m.__wasm_bindgen_func_elem_4366, gg = m.__wasm_bindgen_func_elem_4366_11, sg = m.__wasm_bindgen_func_elem_4366_12, wg = m.__wasm_bindgen_func_elem_3333, lg = m.__wasm_bindgen_func_elem_3333_3, mg = m.__wasm_bindgen_func_elem_3333_4, pg = m.__wasm_bindgen_func_elem_3333_5, xg = m.__wasm_bindgen_func_elem_3333_7, yg = m.__wasm_bindgen_func_elem_3333_8, hg = m.__wasm_bindgen_func_elem_3333_9, vg = m.__wasm_bindgen_func_elem_3333_10, Sg = m.__wasm_bindgen_func_elem_3340, Ig = m.__wbindgen_export, Ag = m.__wbindgen_export2, Dg = m.__wbindgen_export3, Pg = m.__wbindgen_export4, Mg = m.__wbindgen_export5, Fg = m.__wbindgen_add_to_stack_pointer, n_ = m.__wbindgen_start, Bg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __abort_handler: fg,
    __instance_terminated: og,
    __wasm_bindgen_func_elem_11681: dg,
    __wasm_bindgen_func_elem_3331: ug,
    __wasm_bindgen_func_elem_3333: wg,
    __wasm_bindgen_func_elem_3333_10: vg,
    __wasm_bindgen_func_elem_3333_3: lg,
    __wasm_bindgen_func_elem_3333_4: mg,
    __wasm_bindgen_func_elem_3333_5: pg,
    __wasm_bindgen_func_elem_3333_7: xg,
    __wasm_bindgen_func_elem_3333_8: yg,
    __wasm_bindgen_func_elem_3333_9: hg,
    __wasm_bindgen_func_elem_3340: Sg,
    __wasm_bindgen_func_elem_4366: ig,
    __wasm_bindgen_func_elem_4366_11: gg,
    __wasm_bindgen_func_elem_4366_12: sg,
    __wbindgen_add_to_stack_pointer: Fg,
    __wbindgen_export: Ig,
    __wbindgen_export2: Ag,
    __wbindgen_export3: Dg,
    __wbindgen_export4: Pg,
    __wbindgen_export5: Mg,
    __wbindgen_start: n_,
    main: cg,
    memory: rg,
    run_web: ag
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  bg(Bg);
  n_();
})();
export {
  __tla,
  kg as run_web
};
