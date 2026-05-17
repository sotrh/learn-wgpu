import { _ as t_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
let Nd;
let __tla = (async () => {
  const n_ = "/learn-wgpu/assets/demo_bg-DkY3oJMt.wasm";
  Nd = function() {
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
  function B_(_, e, n) {
    t(_).attachShader(t(e), t(n));
  }
  function T_(_, e) {
    const n = t(_).beginComputePass(t(e));
    return b(n);
  }
  function k_(_, e, n) {
    t(_).beginQuery(e >>> 0, t(n));
  }
  function L_() {
    return o(function(_, e) {
      const n = t(_).beginRenderPass(t(e));
      return b(n);
    }, arguments);
  }
  function C_(_, e, n, r, c) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(r, c));
  }
  function E_(_, e, n, r, c) {
    t(_).bindAttribLocation(t(e), n >>> 0, g(r, c));
  }
  function R_(_, e, n, r, c, a) {
    t(_).bindBufferRange(e >>> 0, n >>> 0, t(r), c, a);
  }
  function O_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function q_(_, e, n) {
    t(_).bindBuffer(e >>> 0, t(n));
  }
  function G_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function V_(_, e, n) {
    t(_).bindFramebuffer(e >>> 0, t(n));
  }
  function W_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function U_(_, e, n) {
    t(_).bindRenderbuffer(e >>> 0, t(n));
  }
  function z_(_, e, n) {
    t(_).bindSampler(e >>> 0, t(n));
  }
  function j_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function K_(_, e, n) {
    t(_).bindTexture(e >>> 0, t(n));
  }
  function N_(_, e) {
    t(_).bindVertexArrayOES(t(e));
  }
  function Q_(_, e) {
    t(_).bindVertexArray(t(e));
  }
  function X_(_, e, n, r, c) {
    t(_).blendColor(e, n, r, c);
  }
  function $_(_, e, n, r, c) {
    t(_).blendColor(e, n, r, c);
  }
  function Y_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function H_(_, e, n) {
    t(_).blendEquationSeparate(e >>> 0, n >>> 0);
  }
  function J_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function Z_(_, e) {
    t(_).blendEquation(e >>> 0);
  }
  function _e(_, e, n, r, c) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function ee(_, e, n, r, c) {
    t(_).blendFuncSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function te(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function ne(_, e, n) {
    t(_).blendFunc(e >>> 0, n >>> 0);
  }
  function re(_, e, n, r, c, a, f, u, d, s, m) {
    t(_).blitFramebuffer(e, n, r, c, a, f, u, d, s >>> 0, m >>> 0);
  }
  function ce(_) {
    return t(_).blockSize;
  }
  function be(_) {
    const e = t(_).body;
    return w(e) ? 0 : b(e);
  }
  function ae(_, e) {
    const n = t(e).brand, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function fe(_) {
    const e = t(_).brands;
    return b(e);
  }
  function oe(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ue(_, e, n, r) {
    t(_).bufferData(e >>> 0, n, r >>> 0);
  }
  function ie(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function de(_, e, n, r) {
    t(_).bufferData(e >>> 0, t(n), r >>> 0);
  }
  function ge(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function se(_, e, n, r) {
    t(_).bufferSubData(e >>> 0, n, t(r));
  }
  function we(_) {
    return t(_).button;
  }
  function le(_) {
    return t(_).buttons;
  }
  function me() {
    return o(function(_, e) {
      const n = t(_).call(t(e));
      return b(n);
    }, arguments);
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
    return b(n);
  }
  function Se(_, e, n, r, c) {
    t(_).clearBufferfv(e >>> 0, n, x(r, c));
  }
  function ve(_, e, n, r, c) {
    t(_).clearBufferiv(e >>> 0, n, A(r, c));
  }
  function Ie(_, e, n, r, c) {
    t(_).clearBufferuiv(e >>> 0, n, M(r, c));
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
  function Fe(_, e) {
    t(_).clearTimeout(e);
  }
  function Be(_, e) {
    t(_).clear(e >>> 0);
  }
  function Te(_, e) {
    t(_).clear(e >>> 0);
  }
  function ke(_, e, n, r) {
    return t(_).clientWaitSync(t(e), n >>> 0, r >>> 0);
  }
  function Le(_) {
    t(_).close();
  }
  function Ce(_, e) {
    const n = t(e).code, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Ee(_, e, n, r, c) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, c !== 0);
  }
  function Re(_, e, n, r, c) {
    t(_).colorMask(e !== 0, n !== 0, r !== 0, c !== 0);
  }
  function Oe(_, e) {
    t(_).compileShader(t(e));
  }
  function qe(_, e) {
    t(_).compileShader(t(e));
  }
  function Ge(_, e, n, r, c, a, f, u, d) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, t(d));
  }
  function Ve(_, e, n, r, c, a, f, u, d) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, t(d));
  }
  function We(_, e, n, r, c, a, f, u, d, s) {
    t(_).compressedTexSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d, s);
  }
  function Ue(_, e, n, r, c, a, f, u, d, s, m) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, t(m));
  }
  function ze(_, e, n, r, c, a, f, u, d, s, m, h) {
    t(_).compressedTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m, h);
  }
  function je() {
    return o(function(_, e) {
      t(_).configure(t(e));
    }, arguments);
  }
  function Ke(_, e) {
    return t(_).contains(t(e));
  }
  function Ne(_) {
    const e = t(_).contentRect;
    return b(e);
  }
  function Qe(_, e, n, r, c, a) {
    t(_).copyBufferSubData(e >>> 0, n >>> 0, r, c, a);
  }
  function Xe(_, e, n, r, c, a, f, u, d) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, c, a, f, u, d);
  }
  function $e(_, e, n, r, c, a, f, u, d) {
    t(_).copyTexSubImage2D(e >>> 0, n, r, c, a, f, u, d);
  }
  function Ye(_, e, n, r, c, a, f, u, d, s) {
    t(_).copyTexSubImage3D(e >>> 0, n, r, c, a, f, u, d, s);
  }
  function He() {
    return o(function(_, e) {
      const n = t(_).createBindGroupLayout(t(e));
      return b(n);
    }, arguments);
  }
  function Je(_, e) {
    const n = t(_).createBindGroup(t(e));
    return b(n);
  }
  function Ze(_) {
    const e = t(_).createBuffer();
    return w(e) ? 0 : b(e);
  }
  function _t(_) {
    const e = t(_).createBuffer();
    return w(e) ? 0 : b(e);
  }
  function et() {
    return o(function(_, e) {
      const n = t(_).createBuffer(t(e));
      return b(n);
    }, arguments);
  }
  function tt(_, e) {
    const n = t(_).createCommandEncoder(t(e));
    return b(n);
  }
  function nt(_, e) {
    const n = t(_).createComputePipeline(t(e));
    return b(n);
  }
  function rt() {
    return o(function(_, e, n) {
      const r = t(_).createElement(g(e, n));
      return b(r);
    }, arguments);
  }
  function ct(_) {
    const e = t(_).createFramebuffer();
    return w(e) ? 0 : b(e);
  }
  function bt(_) {
    const e = t(_).createFramebuffer();
    return w(e) ? 0 : b(e);
  }
  function at() {
    return o(function(_, e) {
      const n = URL.createObjectURL(t(e)), r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function ft(_, e) {
    const n = t(_).createPipelineLayout(t(e));
    return b(n);
  }
  function ot(_) {
    const e = t(_).createProgram();
    return w(e) ? 0 : b(e);
  }
  function ut(_) {
    const e = t(_).createProgram();
    return w(e) ? 0 : b(e);
  }
  function it(_) {
    const e = t(_).createQuery();
    return w(e) ? 0 : b(e);
  }
  function dt() {
    return o(function(_, e) {
      const n = t(_).createRenderPipeline(t(e));
      return b(n);
    }, arguments);
  }
  function gt(_) {
    const e = t(_).createRenderbuffer();
    return w(e) ? 0 : b(e);
  }
  function st(_) {
    const e = t(_).createRenderbuffer();
    return w(e) ? 0 : b(e);
  }
  function wt(_, e) {
    const n = t(_).createSampler(t(e));
    return b(n);
  }
  function lt(_) {
    const e = t(_).createSampler();
    return w(e) ? 0 : b(e);
  }
  function mt(_, e) {
    const n = t(_).createShaderModule(t(e));
    return b(n);
  }
  function pt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return w(n) ? 0 : b(n);
  }
  function xt(_, e) {
    const n = t(_).createShader(e >>> 0);
    return w(n) ? 0 : b(n);
  }
  function yt(_) {
    const e = t(_).createTexture();
    return w(e) ? 0 : b(e);
  }
  function ht() {
    return o(function(_, e) {
      const n = t(_).createTexture(t(e));
      return b(n);
    }, arguments);
  }
  function St(_) {
    const e = t(_).createTexture();
    return w(e) ? 0 : b(e);
  }
  function vt(_) {
    const e = t(_).createVertexArrayOES();
    return w(e) ? 0 : b(e);
  }
  function It(_) {
    const e = t(_).createVertexArray();
    return w(e) ? 0 : b(e);
  }
  function At() {
    return o(function(_, e) {
      const n = t(_).createView(t(e));
      return b(n);
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
  function Bt(_) {
    console.debug(t(_));
  }
  function Tt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function kt(_, e) {
    t(_).deleteBuffer(t(e));
  }
  function Lt(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Ct(_, e) {
    t(_).deleteFramebuffer(t(e));
  }
  function Et(_, e) {
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
  function Nt(_, e) {
    t(_).deleteVertexArrayOES(t(e));
  }
  function Qt(_, e) {
    t(_).deleteVertexArray(t(e));
  }
  function Xt(_) {
    return t(_).deltaMode;
  }
  function $t(_) {
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
  function rn(_) {
    const e = t(_).devicePixelContentBoxSize;
    return b(e);
  }
  function cn(_) {
    return t(_).devicePixelRatio;
  }
  function bn(_, e) {
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
  function gn(_, e, n, r) {
    t(_).dispatchWorkgroups(e >>> 0, n >>> 0, r >>> 0);
  }
  function sn(_) {
    const e = t(_).document;
    return w(e) ? 0 : b(e);
  }
  function wn(_) {
    return t(_).done;
  }
  function ln(_, e, n, r, c) {
    t(_).drawArraysInstancedANGLE(e >>> 0, n, r, c);
  }
  function mn(_, e, n, r, c) {
    t(_).drawArraysInstanced(e >>> 0, n, r, c);
  }
  function pn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function xn(_, e, n, r) {
    t(_).drawArrays(e >>> 0, n, r);
  }
  function yn(_, e) {
    t(_).drawBuffersWEBGL(t(e));
  }
  function hn(_, e) {
    t(_).drawBuffers(t(e));
  }
  function Sn(_, e, n, r, c, a) {
    t(_).drawElementsInstancedANGLE(e >>> 0, n, r >>> 0, c, a);
  }
  function vn(_, e, n, r, c, a) {
    t(_).drawElementsInstanced(e >>> 0, n, r >>> 0, c, a);
  }
  function In(_, e, n, r, c, a) {
    t(_).drawIndexed(e >>> 0, n >>> 0, r >>> 0, c, a >>> 0);
  }
  function An(_, e, n, r, c) {
    t(_).draw(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Dn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Pn(_, e) {
    t(_).enableVertexAttribArray(e >>> 0);
  }
  function Mn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Fn(_, e) {
    t(_).enable(e >>> 0);
  }
  function Bn(_, e) {
    t(_).endQuery(e >>> 0);
  }
  function Tn(_) {
    t(_).end();
  }
  function kn(_) {
    t(_).end();
  }
  function Ln(_, e) {
    let n, r;
    try {
      n = _, r = e, console.error(g(_, e));
    } finally {
      i.__wbindgen_export4(n, r, 1);
    }
  }
  function Cn(_) {
    console.error(t(_));
  }
  function En(_, e) {
    console.error(t(_), t(e));
  }
  function Rn(_, e, n) {
    const r = t(_).fenceSync(e >>> 0, n >>> 0);
    return w(r) ? 0 : b(r);
  }
  function On(_, e) {
    const n = t(_).fetch(t(e));
    return b(n);
  }
  function qn(_) {
    const e = fetch(t(_));
    return b(e);
  }
  function Gn(_) {
    const e = t(_).finish();
    return b(e);
  }
  function Vn(_, e) {
    const n = t(_).finish(t(e));
    return b(n);
  }
  function Wn(_) {
    t(_).flush();
  }
  function Un(_) {
    t(_).flush();
  }
  function zn() {
    return o(function(_) {
      t(_).focus();
    }, arguments);
  }
  function jn(_, e, n, r, c) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Kn(_, e, n, r, c) {
    t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, r >>> 0, t(c));
  }
  function Nn(_, e, n, r, c, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Qn(_, e, n, r, c, a) {
    t(_).framebufferTexture2D(e >>> 0, n >>> 0, r >>> 0, t(c), a);
  }
  function Xn(_, e, n, r, c, a) {
    t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(r), c, a);
  }
  function $n(_, e, n, r, c, a, f) {
    t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(r), c, a, f);
  }
  function Yn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Hn(_, e) {
    t(_).frontFace(e >>> 0);
  }
  function Jn(_) {
    const e = t(_).fullscreenElement;
    return w(e) ? 0 : b(e);
  }
  function Zn(_, e, n, r) {
    t(_).getBufferSubData(e >>> 0, n, t(r));
  }
  function _r(_) {
    const e = t(_).getCoalescedEvents;
    return b(e);
  }
  function er(_) {
    const e = t(_).getCoalescedEvents();
    return b(e);
  }
  function tr() {
    return o(function(_, e) {
      const n = t(_).getComputedStyle(t(e));
      return w(n) ? 0 : b(n);
    }, arguments);
  }
  function nr() {
    return o(function(_, e, n) {
      const r = t(_).getContext(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function rr() {
    return o(function(_, e, n) {
      const r = t(_).getContext(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function cr() {
    return o(function(_, e, n, r) {
      const c = t(_).getContext(g(e, n), t(r));
      return w(c) ? 0 : b(c);
    }, arguments);
  }
  function br() {
    return o(function(_, e, n, r) {
      const c = t(_).getContext(g(e, n), t(r));
      return w(c) ? 0 : b(c);
    }, arguments);
  }
  function ar() {
    return o(function(_) {
      const e = t(_).getCurrentTexture();
      return b(e);
    }, arguments);
  }
  function fr(_, e, n) {
    const r = t(_).getElementById(g(e, n));
    return w(r) ? 0 : b(r);
  }
  function or() {
    return o(function(_, e, n) {
      const r = t(_).getExtension(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function ur() {
    return o(function(_, e, n) {
      const r = t(_).getIndexedParameter(e >>> 0, n >>> 0);
      return b(r);
    }, arguments);
  }
  function ir() {
    return o(function(_, e, n) {
      const r = t(_).getMappedRange(e, n);
      return b(r);
    }, arguments);
  }
  function dr(_, e) {
    const n = Object.getOwnPropertyDescriptor(t(_), t(e));
    return b(n);
  }
  function gr() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return b(n);
    }, arguments);
  }
  function sr() {
    return o(function(_, e) {
      const n = t(_).getParameter(e >>> 0);
      return b(n);
    }, arguments);
  }
  function wr(_) {
    const e = t(_).getPreferredCanvasFormat();
    return (P.indexOf(e) + 1 || 96) - 1;
  }
  function lr(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function mr(_, e, n) {
    const r = t(e).getProgramInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function pr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return b(r);
  }
  function xr(_, e, n) {
    const r = t(_).getProgramParameter(t(e), n >>> 0);
    return b(r);
  }
  function yr() {
    return o(function(_, e, n, r) {
      const c = t(e).getPropertyValue(g(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = p;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function hr(_, e, n) {
    const r = t(_).getQueryParameter(t(e), n >>> 0);
    return b(r);
  }
  function Sr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function vr(_, e, n) {
    const r = t(e).getShaderInfoLog(t(n));
    var c = w(r) ? 0 : y(r, i.__wbindgen_export, i.__wbindgen_export2), a = p;
    l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, c, true);
  }
  function Ir(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return b(r);
  }
  function Ar(_, e, n) {
    const r = t(_).getShaderParameter(t(e), n >>> 0);
    return b(r);
  }
  function Dr(_) {
    const e = t(_).getSupportedExtensions();
    return w(e) ? 0 : b(e);
  }
  function Pr(_) {
    const e = t(_).getSupportedProfiles();
    return w(e) ? 0 : b(e);
  }
  function Mr(_, e, n) {
    const r = t(_).getSyncParameter(t(e), n >>> 0);
    return b(r);
  }
  function Fr(_, e, n, r) {
    return t(_).getUniformBlockIndex(t(e), g(n, r));
  }
  function Br(_, e, n, r) {
    const c = t(_).getUniformLocation(t(e), g(n, r));
    return w(c) ? 0 : b(c);
  }
  function Tr(_, e, n, r) {
    const c = t(_).getUniformLocation(t(e), g(n, r));
    return w(c) ? 0 : b(c);
  }
  function kr(_, e) {
    const n = t(_)[e >>> 0];
    return b(n);
  }
  function Lr() {
    return o(function(_, e) {
      const n = Reflect.get(t(_), t(e));
      return b(n);
    }, arguments);
  }
  function Cr(_, e) {
    const n = t(_)[e >>> 0];
    return w(n) ? 0 : b(n);
  }
  function Er(_) {
    const e = t(_).gpu;
    return b(e);
  }
  function Rr() {
    return o(function(_, e) {
      return Reflect.has(t(_), t(e));
    }, arguments);
  }
  function Or(_) {
    const e = t(_).headers;
    return b(e);
  }
  function qr(_) {
    return t(_).height;
  }
  function Gr(_, e, n) {
    return t(_).includes(t(e), n);
  }
  function Vr(_) {
    console.info(t(_));
  }
  function Wr(_) {
    return t(_).inlineSize;
  }
  function Ur(_) {
    let e;
    try {
      e = t(_) instanceof GPUAdapter;
    } catch {
      e = false;
    }
    return e;
  }
  function zr(_) {
    let e;
    try {
      e = t(_) instanceof GPUCanvasContext;
    } catch {
      e = false;
    }
    return e;
  }
  function jr(_) {
    let e;
    try {
      e = t(_) instanceof HTMLCanvasElement;
    } catch {
      e = false;
    }
    return e;
  }
  function Kr(_) {
    let e;
    try {
      e = t(_) instanceof Response;
    } catch {
      e = false;
    }
    return e;
  }
  function Nr(_) {
    let e;
    try {
      e = t(_) instanceof WebGL2RenderingContext;
    } catch {
      e = false;
    }
    return e;
  }
  function Qr(_) {
    let e;
    try {
      e = t(_) instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }
  function Xr() {
    return o(function(_, e, n) {
      t(_).invalidateFramebuffer(e >>> 0, t(n));
    }, arguments);
  }
  function $r(_) {
    return t(_).isIntersecting;
  }
  function Yr(_, e) {
    return Object.is(t(_), t(e));
  }
  function Hr() {
    return b(Symbol.iterator);
  }
  function Jr(_, e) {
    const n = t(e).key, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Zr(_, e) {
    const n = t(e).label, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function _c(_) {
    return t(_).length;
  }
  function ec(_) {
    return t(_).length;
  }
  function tc(_, e) {
    t(_).linkProgram(t(e));
  }
  function nc(_, e) {
    t(_).linkProgram(t(e));
  }
  function rc(_) {
    return t(_).location;
  }
  function cc(_) {
    const e = t(_).location;
    return b(e);
  }
  function bc(_) {
    console.log(t(_));
  }
  function ac(_, e, n, r) {
    const c = t(_).mapAsync(e >>> 0, n, r);
    return b(c);
  }
  function fc() {
    return o(function(_, e, n) {
      const r = t(_).matchMedia(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function oc(_) {
    return t(_).matches;
  }
  function uc(_, e) {
    const n = t(e).media, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function ic(_) {
    return t(_).metaKey;
  }
  function dc(_) {
    return t(_).metaKey;
  }
  function gc(_) {
    return t(_).movementX;
  }
  function sc(_) {
    return t(_).movementY;
  }
  function wc(_) {
    const e = t(_).navigator;
    return b(e);
  }
  function lc(_) {
    const e = t(_).navigator;
    return b(e);
  }
  function mc() {
    return o(function(_) {
      const e = new ResizeObserver(t(_));
      return b(e);
    }, arguments);
  }
  function pc() {
    const _ = new Object();
    return b(_);
  }
  function xc() {
    const _ = new Array();
    return b(_);
  }
  function yc() {
    return o(function(_, e) {
      const n = new Worker(g(_, e));
      return b(n);
    }, arguments);
  }
  function hc() {
    return o(function() {
      const _ = new Headers();
      return b(_);
    }, arguments);
  }
  function Sc() {
    return o(function() {
      const _ = new MessageChannel();
      return b(_);
    }, arguments);
  }
  function vc() {
    const _ = new Error();
    return b(_);
  }
  function Ic() {
    return o(function(_) {
      const e = new IntersectionObserver(t(_));
      return b(e);
    }, arguments);
  }
  function Ac() {
    return o(function() {
      const _ = new AbortController();
      return b(_);
    }, arguments);
  }
  function Dc(_) {
    const e = new Uint8Array(t(_));
    return b(e);
  }
  function Pc(_, e) {
    const n = new Uint8Array(L(_, e));
    return b(n);
  }
  function Mc(_, e) {
    const n = new Function(g(_, e));
    return b(n);
  }
  function Fc(_, e, n) {
    const r = new Uint8Array(t(_), e >>> 0, n >>> 0);
    return b(r);
  }
  function Bc() {
    return o(function(_, e, n) {
      const r = new Request(g(_, e), t(n));
      return b(r);
    }, arguments);
  }
  function Tc() {
    return o(function(_, e) {
      const n = new Blob(t(_), t(e));
      return b(n);
    }, arguments);
  }
  function kc() {
    return o(function(_) {
      const e = t(_).next();
      return b(e);
    }, arguments);
  }
  function Lc(_) {
    const e = t(_).next;
    return b(e);
  }
  function Cc(_) {
    return t(_).now();
  }
  function Ec(_) {
    return t(_).now();
  }
  function Rc(_, e, n) {
    t(_).observe(t(e), t(n));
  }
  function Oc(_, e) {
    t(_).observe(t(e));
  }
  function qc(_, e) {
    t(_).observe(t(e));
  }
  function Gc(_, e) {
    const n = Array.of(t(_), t(e));
    return b(n);
  }
  function Vc(_) {
    const e = Array.of(t(_));
    return b(e);
  }
  function Wc(_) {
    return t(_).offsetX;
  }
  function Uc(_) {
    return t(_).offsetY;
  }
  function zc(_) {
    const e = t(_).onSubmittedWorkDone();
    return b(e);
  }
  function jc() {
    return o(function(_, e) {
      const n = t(e).origin, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function Kc(_) {
    const e = t(_).performance;
    return b(e);
  }
  function Nc(_) {
    return t(_).persisted;
  }
  function Qc(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function Xc(_, e, n) {
    t(_).pixelStorei(e >>> 0, n);
  }
  function $c(_) {
    t(_).play();
  }
  function Yc(_) {
    return t(_).pointerId;
  }
  function Hc(_, e) {
    const n = t(e).pointerType, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Jc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function Zc(_, e, n) {
    t(_).polygonOffset(e, n);
  }
  function _b(_) {
    const e = t(_).port1;
    return b(e);
  }
  function eb(_) {
    const e = t(_).port2;
    return b(e);
  }
  function tb() {
    return o(function(_, e) {
      t(_).postMessage(t(e));
    }, arguments);
  }
  function nb() {
    return o(function(_, e, n) {
      t(_).postMessage(t(e), t(n));
    }, arguments);
  }
  function rb(_, e, n) {
    const r = t(_).postTask(t(e), t(n));
    return b(r);
  }
  function cb(_) {
    return t(_).pressure;
  }
  function bb(_) {
    t(_).preventDefault();
  }
  function ab() {
    const _ = ResizeObserverEntry.prototype;
    return b(_);
  }
  function fb(_, e, n) {
    Uint8Array.prototype.set.call(L(_, e), t(n));
  }
  function ob(_, e) {
    return t(_).push(t(e));
  }
  function ub(_, e, n) {
    t(_).queryCounterEXT(t(e), n >>> 0);
  }
  function ib() {
    return o(function(_, e, n) {
      const r = t(_).querySelectorAll(g(e, n));
      return b(r);
    }, arguments);
  }
  function db() {
    return o(function(_, e, n) {
      const r = t(_).querySelector(g(e, n));
      return w(r) ? 0 : b(r);
    }, arguments);
  }
  function gb(_) {
    const e = t(_).queueMicrotask;
    return b(e);
  }
  function sb(_) {
    queueMicrotask(t(_));
  }
  function wb(_, e) {
    t(_).queueMicrotask(t(e));
  }
  function lb(_) {
    const e = t(_).queue;
    return b(e);
  }
  function mb(_, e) {
    t(_).readBuffer(e >>> 0);
  }
  function pb() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function xb() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, u);
    }, arguments);
  }
  function yb() {
    return o(function(_, e, n, r, c, a, f, u) {
      t(_).readPixels(e, n, r, c, a >>> 0, f >>> 0, t(u));
    }, arguments);
  }
  function hb() {
    return o(function(_, e, n, r) {
      t(_).removeEventListener(g(e, n), t(r));
    }, arguments);
  }
  function Sb() {
    return o(function(_, e) {
      t(_).removeListener(t(e));
    }, arguments);
  }
  function vb() {
    return o(function(_, e, n, r) {
      const c = t(e).removeProperty(g(n, r)), a = y(c, i.__wbindgen_export, i.__wbindgen_export2), f = p;
      l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
    }, arguments);
  }
  function Ib(_, e, n, r, c, a) {
    t(_).renderbufferStorageMultisample(e >>> 0, n, r >>> 0, c, a);
  }
  function Ab(_, e, n, r, c) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, c);
  }
  function Db(_, e, n, r, c) {
    t(_).renderbufferStorage(e >>> 0, n >>> 0, r, c);
  }
  function Pb(_) {
    return t(_).repeat;
  }
  function Mb(_, e) {
    const n = t(_).requestAdapter(t(e));
    return b(n);
  }
  function Fb() {
    return o(function(_, e) {
      return t(_).requestAnimationFrame(t(e));
    }, arguments);
  }
  function Bb(_, e) {
    const n = t(_).requestDevice(t(e));
    return b(n);
  }
  function Tb(_) {
    const e = t(_).requestFullscreen;
    return b(e);
  }
  function kb(_) {
    const e = t(_).requestFullscreen();
    return b(e);
  }
  function Lb(_) {
    const e = t(_).requestIdleCallback;
    return b(e);
  }
  function Cb() {
    return o(function(_, e) {
      return t(_).requestIdleCallback(t(e));
    }, arguments);
  }
  function Eb(_) {
    const e = Promise.resolve(t(_));
    return b(e);
  }
  function Rb() {
    return o(function(_, e) {
      URL.revokeObjectURL(g(_, e));
    }, arguments);
  }
  function Ob(_, e, n, r) {
    t(_).samplerParameterf(t(e), n >>> 0, r);
  }
  function qb(_, e, n, r) {
    t(_).samplerParameteri(t(e), n >>> 0, r);
  }
  function Gb(_) {
    const e = t(_).scheduler;
    return b(e);
  }
  function Vb(_) {
    const e = t(_).scheduler;
    return b(e);
  }
  function Wb(_, e, n, r, c) {
    t(_).scissor(e, n, r, c);
  }
  function Ub(_, e, n, r, c) {
    t(_).scissor(e, n, r, c);
  }
  function zb() {
    return o(function(_, e, n, r, c) {
      t(_).setAttribute(g(e, n), g(r, c));
    }, arguments);
  }
  function jb(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function Kb() {
    return o(function(_, e, n, r, c, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), M(r, c), a, f >>> 0);
    }, arguments);
  }
  function Nb() {
    return o(function(_, e, n, r, c, a, f) {
      t(_).setBindGroup(e >>> 0, t(n), M(r, c), a, f >>> 0);
    }, arguments);
  }
  function Qb(_, e, n) {
    t(_).setBindGroup(e >>> 0, t(n));
  }
  function Xb(_, e, n, r, c) {
    t(_).setIndexBuffer(t(e), N[n], r, c);
  }
  function $b(_, e, n, r) {
    t(_).setIndexBuffer(t(e), N[n], r);
  }
  function Yb(_, e) {
    t(_).setPipeline(t(e));
  }
  function Hb(_, e) {
    t(_).setPipeline(t(e));
  }
  function Jb() {
    return o(function(_, e) {
      t(_).setPointerCapture(e);
    }, arguments);
  }
  function Zb() {
    return o(function(_, e, n, r, c) {
      t(_).setProperty(g(e, n), g(r, c));
    }, arguments);
  }
  function _a() {
    return o(function(_, e) {
      return t(_).setTimeout(t(e));
    }, arguments);
  }
  function ea() {
    return o(function(_, e, n) {
      return t(_).setTimeout(t(e), n);
    }, arguments);
  }
  function ta(_, e, n, r, c) {
    t(_).setVertexBuffer(e >>> 0, t(n), r, c);
  }
  function na(_, e, n, r) {
    t(_).setVertexBuffer(e >>> 0, t(n), r);
  }
  function ra(_, e, n) {
    t(_).set(t(e), n >>> 0);
  }
  function ca() {
    return o(function(_, e, n) {
      return Reflect.set(t(_), t(e), t(n));
    }, arguments);
  }
  function ba(_, e) {
    t(_).a = e;
  }
  function aa(_, e) {
    t(_).access = fd[e];
  }
  function fa(_, e) {
    t(_).addressModeU = j[e];
  }
  function oa(_, e) {
    t(_).addressModeV = j[e];
  }
  function ua(_, e) {
    t(_).addressModeW = j[e];
  }
  function ia(_, e) {
    t(_).alpha = t(e);
  }
  function da(_, e) {
    t(_).alphaMode = ed[e];
  }
  function ga(_, e) {
    t(_).alphaToCoverageEnabled = e !== 0;
  }
  function sa(_, e) {
    t(_).arrayLayerCount = e >>> 0;
  }
  function wa(_, e) {
    t(_).arrayStride = e;
  }
  function la(_, e) {
    t(_).aspect = __[e];
  }
  function ma(_, e) {
    t(_).aspect = __[e];
  }
  function pa(_, e) {
    t(_).attributes = t(e);
  }
  function xa(_, e) {
    t(_).b = e;
  }
  function ya(_, e) {
    t(_).baseArrayLayer = e >>> 0;
  }
  function ha(_, e) {
    t(_).baseMipLevel = e >>> 0;
  }
  function Sa(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function va(_, e) {
    t(_).beginningOfPassWriteIndex = e >>> 0;
  }
  function Ia(_, e) {
    t(_).bindGroupLayouts = t(e);
  }
  function Aa(_, e) {
    t(_).binding = e >>> 0;
  }
  function Da(_, e) {
    t(_).binding = e >>> 0;
  }
  function Pa(_, e) {
    t(_).blend = t(e);
  }
  function Ma(_, e) {
    t(_).body = t(e);
  }
  function Fa(_, e) {
    t(_).box = wd[e];
  }
  function Ba(_, e) {
    t(_).buffer = t(e);
  }
  function Ta(_, e) {
    t(_).buffer = t(e);
  }
  function ka(_, e) {
    t(_).buffers = t(e);
  }
  function La(_, e) {
    t(_).bytesPerRow = e >>> 0;
  }
  function Ca(_, e) {
    t(_).clearValue = t(e);
  }
  function Ea(_, e, n) {
    t(_).code = g(e, n);
  }
  function Ra(_, e) {
    t(_).color = t(e);
  }
  function Oa(_, e) {
    t(_).colorAttachments = t(e);
  }
  function qa(_, e) {
    t(_).compare = K[e];
  }
  function Ga(_, e) {
    t(_).compare = K[e];
  }
  function Va(_, e) {
    t(_).compute = t(e);
  }
  function Wa(_, e) {
    t(_).count = e >>> 0;
  }
  function Ua(_, e) {
    t(_).credentials = gd[e];
  }
  function za(_, e) {
    t(_).cullMode = td[e];
  }
  function ja(_, e) {
    t(_).depthBias = e;
  }
  function Ka(_, e) {
    t(_).depthBiasClamp = e;
  }
  function Na(_, e) {
    t(_).depthBiasSlopeScale = e;
  }
  function Qa(_, e) {
    t(_).depthClearValue = e;
  }
  function Xa(_, e) {
    t(_).depthCompare = K[e];
  }
  function $a(_, e) {
    t(_).depthFailOp = X[e];
  }
  function Ya(_, e) {
    t(_).depthLoadOp = Q[e];
  }
  function Ha(_, e) {
    t(_).depthOrArrayLayers = e >>> 0;
  }
  function Ja(_, e) {
    t(_).depthReadOnly = e !== 0;
  }
  function Za(_, e) {
    t(_).depthStencil = t(e);
  }
  function _f(_, e) {
    t(_).depthStencilAttachment = t(e);
  }
  function ef(_, e) {
    t(_).depthStoreOp = $[e];
  }
  function tf(_, e) {
    t(_).depthWriteEnabled = e !== 0;
  }
  function nf(_, e) {
    t(_).device = t(e);
  }
  function rf(_, e) {
    t(_).dimension = od[e];
  }
  function cf(_, e) {
    t(_).dimension = Y[e];
  }
  function bf(_, e) {
    t(_).dstFactor = J[e];
  }
  function af(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function ff(_, e) {
    t(_).endOfPassWriteIndex = e >>> 0;
  }
  function of(_, e) {
    t(_).entries = t(e);
  }
  function uf(_, e) {
    t(_).entries = t(e);
  }
  function df(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function gf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function sf(_, e, n) {
    t(_).entryPoint = g(e, n);
  }
  function wf(_, e) {
    t(_).externalTexture = t(e);
  }
  function lf(_, e) {
    t(_).failOp = X[e];
  }
  function mf(_, e) {
    t(_).format = P[e];
  }
  function pf(_, e) {
    t(_).format = P[e];
  }
  function xf(_, e) {
    t(_).format = P[e];
  }
  function yf(_, e) {
    t(_).format = id[e];
  }
  function hf(_, e) {
    t(_).format = P[e];
  }
  function Sf(_, e) {
    t(_).format = P[e];
  }
  function vf(_, e) {
    t(_).format = P[e];
  }
  function If(_, e) {
    t(_).fragment = t(e);
  }
  function Af(_, e) {
    t(_).frontFace = nd[e];
  }
  function Df(_, e) {
    t(_).g = e;
  }
  function Pf(_, e) {
    t(_).hasDynamicOffset = e !== 0;
  }
  function Mf(_, e) {
    t(_).headers = t(e);
  }
  function Ff(_, e) {
    t(_).height = e >>> 0;
  }
  function Bf(_, e) {
    t(_).height = e >>> 0;
  }
  function Tf(_, e) {
    t(_).height = e >>> 0;
  }
  function kf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Lf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Cf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Ef(_, e, n) {
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
  function Nf(_, e, n) {
    t(_).label = g(e, n);
  }
  function Qf(_, e) {
    t(_).layout = t(e);
  }
  function Xf(_, e) {
    t(_).layout = t(e);
  }
  function $f(_, e) {
    t(_).layout = t(e);
  }
  function Yf(_, e) {
    t(_).loadOp = Q[e];
  }
  function Hf(_, e) {
    t(_).lodMaxClamp = e;
  }
  function Jf(_, e) {
    t(_).lodMinClamp = e;
  }
  function Zf(_, e) {
    t(_).magFilter = Z[e];
  }
  function _o(_, e) {
    t(_).mappedAtCreation = e !== 0;
  }
  function eo(_, e) {
    t(_).mask = e >>> 0;
  }
  function to(_, e) {
    t(_).maxAnisotropy = e;
  }
  function no(_, e, n) {
    t(_).method = g(e, n);
  }
  function ro(_, e) {
    t(_).minBindingSize = e;
  }
  function co(_, e) {
    t(_).minFilter = Z[e];
  }
  function bo(_, e) {
    t(_).mipLevel = e >>> 0;
  }
  function ao(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function fo(_, e) {
    t(_).mipLevelCount = e >>> 0;
  }
  function oo(_, e) {
    t(_).mipmapFilter = rd[e];
  }
  function uo(_, e) {
    t(_).mode = sd[e];
  }
  function io(_, e) {
    t(_).module = t(e);
  }
  function go(_, e) {
    t(_).module = t(e);
  }
  function so(_, e) {
    t(_).module = t(e);
  }
  function wo(_, e) {
    t(_).multisample = t(e);
  }
  function lo(_, e) {
    t(_).multisampled = e !== 0;
  }
  function mo(_, e) {
    t(_).offset = e;
  }
  function po(_, e) {
    t(_).offset = e;
  }
  function xo(_, e) {
    t(_).offset = e;
  }
  function yo(_, e) {
    t(_).onmessage = t(e);
  }
  function ho(_, e) {
    t(_).operation = Zi[e];
  }
  function So(_, e) {
    t(_).origin = t(e);
  }
  function vo(_, e) {
    t(_).passOp = X[e];
  }
  function Io(_, e) {
    t(_).powerPreference = cd[e];
  }
  function Ao(_, e) {
    t(_).primitive = t(e);
  }
  function Do(_, e) {
    t(_).querySet = t(e);
  }
  function Po(_, e) {
    t(_).querySet = t(e);
  }
  function Mo(_, e) {
    t(_).r = e;
  }
  function Fo(_, e) {
    t(_).requiredFeatures = t(e);
  }
  function Bo(_, e) {
    t(_).requiredLimits = t(e);
  }
  function To(_, e) {
    t(_).resolveTarget = t(e);
  }
  function ko(_, e) {
    t(_).resource = t(e);
  }
  function Lo(_, e) {
    t(_).rowsPerImage = e >>> 0;
  }
  function Co(_, e) {
    t(_).sampleCount = e >>> 0;
  }
  function Eo(_, e) {
    t(_).sampleType = ud[e];
  }
  function Ro(_, e) {
    t(_).sampler = t(e);
  }
  function Oo(_, e) {
    t(_).shaderLocation = e >>> 0;
  }
  function qo(_, e) {
    t(_).signal = t(e);
  }
  function Go(_, e) {
    t(_).size = e;
  }
  function Vo(_, e) {
    t(_).size = e;
  }
  function Wo(_, e) {
    t(_).size = t(e);
  }
  function Uo(_, e) {
    t(_).srcFactor = J[e];
  }
  function zo(_, e) {
    t(_).stencilBack = t(e);
  }
  function jo(_, e) {
    t(_).stencilClearValue = e >>> 0;
  }
  function Ko(_, e) {
    t(_).stencilFront = t(e);
  }
  function No(_, e) {
    t(_).stencilLoadOp = Q[e];
  }
  function Qo(_, e) {
    t(_).stencilReadMask = e >>> 0;
  }
  function Xo(_, e) {
    t(_).stencilReadOnly = e !== 0;
  }
  function $o(_, e) {
    t(_).stencilStoreOp = $[e];
  }
  function Yo(_, e) {
    t(_).stencilWriteMask = e >>> 0;
  }
  function Ho(_, e) {
    t(_).stepMode = dd[e];
  }
  function Jo(_, e) {
    t(_).storageTexture = t(e);
  }
  function Zo(_, e) {
    t(_).storeOp = $[e];
  }
  function _u(_, e) {
    t(_).stripIndexFormat = N[e];
  }
  function eu(_, e) {
    t(_).targets = t(e);
  }
  function tu(_, e) {
    t(_).texture = t(e);
  }
  function nu(_, e) {
    t(_).texture = t(e);
  }
  function ru(_, e) {
    t(_).timestampWrites = t(e);
  }
  function cu(_, e) {
    t(_).timestampWrites = t(e);
  }
  function bu(_, e) {
    t(_).topology = bd[e];
  }
  function au(_, e, n) {
    t(_).type = g(e, n);
  }
  function fu(_, e) {
    t(_).type = _d[e];
  }
  function ou(_, e) {
    t(_).type = ad[e];
  }
  function uu(_, e) {
    t(_).unclippedDepth = e !== 0;
  }
  function iu(_, e) {
    t(_).usage = e >>> 0;
  }
  function du(_, e) {
    t(_).usage = e >>> 0;
  }
  function gu(_, e) {
    t(_).usage = e >>> 0;
  }
  function su(_, e) {
    t(_).usage = e >>> 0;
  }
  function wu(_, e) {
    t(_).vertex = t(e);
  }
  function lu(_, e) {
    t(_).view = t(e);
  }
  function mu(_, e) {
    t(_).view = t(e);
  }
  function pu(_, e) {
    t(_).viewDimension = Y[e];
  }
  function xu(_, e) {
    t(_).viewDimension = Y[e];
  }
  function yu(_, e) {
    t(_).viewFormats = t(e);
  }
  function hu(_, e) {
    t(_).viewFormats = t(e);
  }
  function Su(_, e) {
    t(_).visibility = e >>> 0;
  }
  function vu(_, e) {
    t(_).width = e >>> 0;
  }
  function Iu(_, e) {
    t(_).width = e >>> 0;
  }
  function Au(_, e) {
    t(_).width = e >>> 0;
  }
  function Du(_, e) {
    t(_).writeMask = e >>> 0;
  }
  function Pu(_, e) {
    t(_).x = e >>> 0;
  }
  function Mu(_, e) {
    t(_).y = e >>> 0;
  }
  function Fu(_, e) {
    t(_).z = e >>> 0;
  }
  function Bu(_, e, n, r) {
    t(_).shaderSource(t(e), g(n, r));
  }
  function Tu(_, e, n, r) {
    t(_).shaderSource(t(e), g(n, r));
  }
  function ku(_) {
    return t(_).shiftKey;
  }
  function Lu(_) {
    return t(_).shiftKey;
  }
  function Cu(_) {
    const e = t(_).signal;
    return b(e);
  }
  function Eu(_, e) {
    const n = t(e).stack, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function Ru(_) {
    t(_).start();
  }
  function Ou() {
    const _ = typeof global > "u" ? null : global;
    return w(_) ? 0 : b(_);
  }
  function qu() {
    const _ = typeof globalThis > "u" ? null : globalThis;
    return w(_) ? 0 : b(_);
  }
  function Gu() {
    const _ = typeof self > "u" ? null : self;
    return w(_) ? 0 : b(_);
  }
  function Vu() {
    const _ = typeof window > "u" ? null : window;
    return w(_) ? 0 : b(_);
  }
  function Wu(_) {
    return t(_).status;
  }
  function Uu(_, e, n, r, c) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, c >>> 0);
  }
  function zu(_, e, n, r, c) {
    t(_).stencilFuncSeparate(e >>> 0, n >>> 0, r, c >>> 0);
  }
  function ju(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Ku(_, e, n) {
    t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
  }
  function Nu(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Qu(_, e) {
    t(_).stencilMask(e >>> 0);
  }
  function Xu(_, e, n, r, c) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function $u(_, e, n, r, c) {
    t(_).stencilOpSeparate(e >>> 0, n >>> 0, r >>> 0, c >>> 0);
  }
  function Yu() {
    return o(function(_) {
      const e = JSON.stringify(t(_));
      return b(e);
    }, arguments);
  }
  function Hu(_) {
    const e = t(_).style;
    return b(e);
  }
  function Ju(_, e) {
    t(_).submit(t(e));
  }
  function Zu() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function _0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, s);
    }, arguments);
  }
  function e0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function t0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m) {
      t(_).texImage3D(e >>> 0, n, r, c, a, f, u, d >>> 0, s >>> 0, m);
    }, arguments);
  }
  function n0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m) {
      t(_).texImage3D(e >>> 0, n, r, c, a, f, u, d >>> 0, s >>> 0, t(m));
    }, arguments);
  }
  function r0(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function c0(_, e, n, r) {
    t(_).texParameteri(e >>> 0, n >>> 0, r);
  }
  function b0(_, e, n, r, c, a) {
    t(_).texStorage2D(e >>> 0, n, r >>> 0, c, a);
  }
  function a0(_, e, n, r, c, a, f) {
    t(_).texStorage3D(e >>> 0, n, r >>> 0, c, a, f);
  }
  function f0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function o0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function u0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function i0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function d0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function g0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function s0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, t(s));
    }, arguments);
  }
  function w0() {
    return o(function(_, e, n, r, c, a, f, u, d, s) {
      t(_).texSubImage2D(e >>> 0, n, r, c, a, f, u >>> 0, d >>> 0, s);
    }, arguments);
  }
  function l0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function m0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function p0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function x0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function y0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function h0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, h);
    }, arguments);
  }
  function S0() {
    return o(function(_, e, n, r, c, a, f, u, d, s, m, h) {
      t(_).texSubImage3D(e >>> 0, n, r, c, a, f, u, d, s >>> 0, m >>> 0, t(h));
    }, arguments);
  }
  function v0() {
    return o(function(_) {
      const e = t(_).text();
      return b(e);
    }, arguments);
  }
  function I0(_, e, n) {
    const r = t(_).then(t(e), t(n));
    return b(r);
  }
  function A0(_, e) {
    const n = t(_).then(t(e));
    return b(n);
  }
  function D0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function P0(_, e, n) {
    t(_).uniform1f(t(e), n);
  }
  function M0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function F0(_, e, n) {
    t(_).uniform1i(t(e), n);
  }
  function B0(_, e, n) {
    t(_).uniform1ui(t(e), n >>> 0);
  }
  function T0(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function k0(_, e, n, r) {
    t(_).uniform2fv(t(e), x(n, r));
  }
  function L0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function C0(_, e, n, r) {
    t(_).uniform2iv(t(e), A(n, r));
  }
  function E0(_, e, n, r) {
    t(_).uniform2uiv(t(e), M(n, r));
  }
  function R0(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function O0(_, e, n, r) {
    t(_).uniform3fv(t(e), x(n, r));
  }
  function q0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function G0(_, e, n, r) {
    t(_).uniform3iv(t(e), A(n, r));
  }
  function V0(_, e, n, r) {
    t(_).uniform3uiv(t(e), M(n, r));
  }
  function W0(_, e, n, r, c, a) {
    t(_).uniform4f(t(e), n, r, c, a);
  }
  function U0(_, e, n, r, c, a) {
    t(_).uniform4f(t(e), n, r, c, a);
  }
  function z0(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function j0(_, e, n, r) {
    t(_).uniform4fv(t(e), x(n, r));
  }
  function K0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function N0(_, e, n, r) {
    t(_).uniform4iv(t(e), A(n, r));
  }
  function Q0(_, e, n, r) {
    t(_).uniform4uiv(t(e), M(n, r));
  }
  function X0(_, e, n, r) {
    t(_).uniformBlockBinding(t(e), n >>> 0, r >>> 0);
  }
  function $0(_, e, n, r, c) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, c));
  }
  function Y0(_, e, n, r, c) {
    t(_).uniformMatrix2fv(t(e), n !== 0, x(r, c));
  }
  function H0(_, e, n, r, c) {
    t(_).uniformMatrix2x3fv(t(e), n !== 0, x(r, c));
  }
  function J0(_, e, n, r, c) {
    t(_).uniformMatrix2x4fv(t(e), n !== 0, x(r, c));
  }
  function Z0(_, e, n, r, c) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, c));
  }
  function _i(_, e, n, r, c) {
    t(_).uniformMatrix3fv(t(e), n !== 0, x(r, c));
  }
  function ei(_, e, n, r, c) {
    t(_).uniformMatrix3x2fv(t(e), n !== 0, x(r, c));
  }
  function ti(_, e, n, r, c) {
    t(_).uniformMatrix3x4fv(t(e), n !== 0, x(r, c));
  }
  function ni(_, e, n, r, c) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, c));
  }
  function ri(_, e, n, r, c) {
    t(_).uniformMatrix4fv(t(e), n !== 0, x(r, c));
  }
  function ci(_, e, n, r, c) {
    t(_).uniformMatrix4x2fv(t(e), n !== 0, x(r, c));
  }
  function bi(_, e, n, r, c) {
    t(_).uniformMatrix4x3fv(t(e), n !== 0, x(r, c));
  }
  function ai(_) {
    t(_).unmap();
  }
  function fi(_, e) {
    t(_).unobserve(t(e));
  }
  function oi(_, e) {
    const n = t(e).url, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
    l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
  }
  function ui(_, e) {
    t(_).useProgram(t(e));
  }
  function ii(_, e) {
    t(_).useProgram(t(e));
  }
  function di(_) {
    const e = t(_).userAgentData;
    return w(e) ? 0 : b(e);
  }
  function gi() {
    return o(function(_, e) {
      const n = t(e).userAgent, r = y(n, i.__wbindgen_export, i.__wbindgen_export2), c = p;
      l().setInt32(_ + 4, c, true), l().setInt32(_ + 0, r, true);
    }, arguments);
  }
  function si(_) {
    const e = t(_).value;
    return b(e);
  }
  function wi(_, e, n) {
    t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
  }
  function li(_, e, n) {
    t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
  }
  function mi(_, e, n, r, c, a) {
    t(_).vertexAttribIPointer(e >>> 0, n, r >>> 0, c, a);
  }
  function pi(_, e, n, r, c, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function xi(_, e, n, r, c, a, f) {
    t(_).vertexAttribPointer(e >>> 0, n, r >>> 0, c !== 0, a, f);
  }
  function yi(_, e, n, r, c) {
    t(_).viewport(e, n, r, c);
  }
  function hi(_, e, n, r, c) {
    t(_).viewport(e, n, r, c);
  }
  function Si(_) {
    const e = t(_).visibilityState;
    return (ld.indexOf(e) + 1 || 3) - 1;
  }
  function vi(_) {
    console.warn(t(_));
  }
  function Ii(_) {
    const e = t(_).webkitFullscreenElement;
    return w(e) ? 0 : b(e);
  }
  function Ai(_) {
    t(_).webkitRequestFullscreen();
  }
  function Di(_) {
    return t(_).width;
  }
  function Pi() {
    return o(function(_, e, n, r, c, a, f) {
      t(_).writeBuffer(t(e), n, L(r, c), a, f);
    }, arguments);
  }
  function Mi() {
    return o(function(_, e, n, r, c, a) {
      t(_).writeTexture(t(e), L(n, r), t(c), t(a));
    }, arguments);
  }
  function Fi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, Ji);
    return b(n);
  }
  function Bi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Ti(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function ki(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Li(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Ci(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Ei(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Ri(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, D);
    return b(n);
  }
  function Oi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_3179, Yi);
    return b(n);
  }
  function qi(_, e) {
    const n = v(_, e, i.__wasm_bindgen_func_elem_5024, Hi);
    return b(n);
  }
  function Gi(_) {
    return b(_);
  }
  function Vi(_, e) {
    const n = x(_, e);
    return b(n);
  }
  function Wi(_, e) {
    const n = pd(_, e);
    return b(n);
  }
  function Ui(_, e) {
    const n = A(_, e);
    return b(n);
  }
  function zi(_, e) {
    const n = xd(_, e);
    return b(n);
  }
  function ji(_, e) {
    const n = yd(_, e);
    return b(n);
  }
  function Ki(_, e) {
    const n = M(_, e);
    return b(n);
  }
  function Ni(_, e) {
    const n = L(_, e);
    return b(n);
  }
  function Qi(_, e) {
    const n = g(_, e);
    return b(n);
  }
  function Xi(_) {
    const e = t(_);
    return b(e);
  }
  function $i(_) {
    Pd(_);
  }
  function Yi(_, e) {
    i.__wasm_bindgen_func_elem_3516(_, e);
  }
  function D(_, e, n) {
    i.__wasm_bindgen_func_elem_3515(_, e, b(n));
  }
  function Hi(_, e, n) {
    i.__wasm_bindgen_func_elem_5025(_, e, b(n));
  }
  function Ji(_, e, n, r) {
    i.__wasm_bindgen_func_elem_3517(_, e, b(n), b(r));
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
  ], Zi = [
    "add",
    "subtract",
    "reverse-subtract",
    "min",
    "max"
  ], _d = [
    "uniform",
    "storage",
    "read-only-storage"
  ], ed = [
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
  ], td = [
    "none",
    "front",
    "back"
  ], Z = [
    "nearest",
    "linear"
  ], nd = [
    "ccw",
    "cw"
  ], N = [
    "uint16",
    "uint32"
  ], Q = [
    "load",
    "clear"
  ], rd = [
    "nearest",
    "linear"
  ], cd = [
    "low-power",
    "high-performance"
  ], bd = [
    "point-list",
    "line-list",
    "line-strip",
    "triangle-list",
    "triangle-strip"
  ], ad = [
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
  ], fd = [
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
  ], od = [
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
  ], ud = [
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
  ], id = [
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
  ], dd = [
    "vertex",
    "instance"
  ], gd = [
    "omit",
    "same-origin",
    "include"
  ], sd = [
    "same-origin",
    "no-cors",
    "cors",
    "navigate"
  ], wd = [
    "border-box",
    "content-box",
    "device-pixel-content-box"
  ], ld = [
    "hidden",
    "visible"
  ];
  function b(_) {
    T === I.length && I.push(I.length + 1);
    const e = T;
    return T = I[e], I[e] = _, e;
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
  function md(_) {
    _ < 132 || (I[_] = T, T = _);
  }
  function x(_, e) {
    return _ = _ >>> 0, hd().subarray(_ / 4, _ / 4 + e);
  }
  function pd(_, e) {
    return _ = _ >>> 0, Sd().subarray(_ / 2, _ / 2 + e);
  }
  function A(_, e) {
    return _ = _ >>> 0, vd().subarray(_ / 4, _ / 4 + e);
  }
  function xd(_, e) {
    return _ = _ >>> 0, Id().subarray(_ / 1, _ / 1 + e);
  }
  function yd(_, e) {
    return _ = _ >>> 0, Ad().subarray(_ / 2, _ / 2 + e);
  }
  function M(_, e) {
    return _ = _ >>> 0, Dd().subarray(_ / 4, _ / 4 + e);
  }
  function L(_, e) {
    return _ = _ >>> 0, B().subarray(_ / 1, _ / 1 + e);
  }
  let F = null;
  function l() {
    return (F === null || F.buffer.detached === true || F.buffer.detached === void 0 && F.buffer !== i.memory.buffer) && (F = new DataView(i.memory.buffer)), F;
  }
  let C = null;
  function hd() {
    return (C === null || C.byteLength === 0) && (C = new Float32Array(i.memory.buffer)), C;
  }
  let E = null;
  function Sd() {
    return (E === null || E.byteLength === 0) && (E = new Int16Array(i.memory.buffer)), E;
  }
  let R = null;
  function vd() {
    return (R === null || R.byteLength === 0) && (R = new Int32Array(i.memory.buffer)), R;
  }
  let O = null;
  function Id() {
    return (O === null || O.byteLength === 0) && (O = new Int8Array(i.memory.buffer)), O;
  }
  function g(_, e) {
    return _ = _ >>> 0, Fd(_, e);
  }
  let q = null;
  function Ad() {
    return (q === null || q.byteLength === 0) && (q = new Uint16Array(i.memory.buffer)), q;
  }
  let G = null;
  function Dd() {
    return (G === null || G.byteLength === 0) && (G = new Uint32Array(i.memory.buffer)), G;
  }
  let V = null;
  function B() {
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
  let T = I.length;
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
      return B().subarray(d, d + u.length).set(u), p = u.length, d;
    }
    let r = _.length, c = e(r, 1) >>> 0;
    const a = B();
    let f = 0;
    for (; f < r; f++) {
      const u = _.charCodeAt(f);
      if (u > 127) break;
      a[c + f] = u;
    }
    if (f !== r) {
      f !== 0 && (_ = _.slice(f)), c = n(c, r, r = f + _.length * 3, 1) >>> 0;
      const u = B().subarray(c + f, c + r), d = k.encodeInto(_, u);
      f += d.written, c = n(c, r, f, 1) >>> 0;
    }
    return p = f, c;
  }
  function Pd(_) {
    const e = t(_);
    return md(_), e;
  }
  let W = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  W.decode();
  const Md = 2146435072;
  let U = 0;
  function Fd(_, e) {
    return U += e, U >= Md && (W = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), W.decode(), U = e), W.decode(B().subarray(_, _ + e));
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
  function Bd(_) {
    i = _;
  }
  URL = globalThis.URL;
  const S = await t_({
    "./demo_bg.js": {
      __wbindgen_object_drop_ref: $i,
      __wbg_new_8a6f238a6ece86ea: vc,
      __wbg_stack_0ed75d68575b0f3c: Eu,
      __wbg_error_7534b8e9a36f1ab4: Ln,
      __wbg_fetch_f1856afdb49415d1: qn,
      __wbindgen_object_clone_ref: Xi,
      __wbg_userAgentData_f7b0e61c05c54315: di,
      __wbg_brands_a1e7a2bce052128f: fe,
      __wbg_brand_9562792cbb4735c3: ae,
      __wbg_offsetX_cb6a38e6f23cb4a6: Wc,
      __wbg_offsetY_43e21941c5c1f8bf: Uc,
      __wbg_cancel_09c394f0894744eb: ye,
      __wbg_webkitFullscreenElement_a9ca38b7214d1567: Ii,
      __wbg_requestFullscreen_9f0611438eb929cf: kb,
      __wbg_webkitRequestFullscreen_23664c63833ff0e5: Ai,
      __wbg_requestFullscreen_86fc6cdb76000482: Tb,
      __wbg_postTask_41d93e93941e4a3d: rb,
      __wbg_animate_6ec571f163cf6f8d: A_,
      __wbg_play_63bc12f42e16af91: $c,
      __wbg_scheduler_5156bb61cc1cf589: Vb,
      __wbg_requestIdleCallback_1b8d644ff564208f: Lb,
      __wbg_scheduler_48482a9974eeacbd: Gb,
      __wbg_Window_d1bf622f71ff0629: c_,
      __wbg_prototype_c28bca39c45aba9b: ab,
      __wbg_getCoalescedEvents_21492912fd0145ec: _r,
      __wbg_performance_7a3ffd0b17f663ad: Kc,
      __wbg_now_2c95c9de01293173: Cc,
      __wbg_set_color_attachments_81e56abd7f11d38b: Oa,
      __wbg_set_label_10c0715c06c574ce: Lf,
      __wbg_set_view_dc1937ba74f6a24a: mu,
      __wbg_set_depth_clear_value_d3053d10a4ac9092: Qa,
      __wbg_set_depth_load_op_0e48f976ce8bf626: Ya,
      __wbg_set_depth_store_op_35c62b6bd92fd38a: ef,
      __wbg_set_depth_read_only_16d1277d6c444182: Ja,
      __wbg_set_stencil_clear_value_c88c52b70d827549: jo,
      __wbg_set_stencil_load_op_f865ee8f5135b2e2: No,
      __wbg_set_stencil_store_op_b92786567b815d0f: $o,
      __wbg_set_stencil_read_only_54652ff66298c4c5: Xo,
      __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: _f,
      __wbg_set_query_set_1f3c39edf379c9f9: Do,
      __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: va,
      __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: ff,
      __wbg_set_timestamp_writes_d8d448bf6b1779ee: cu,
      __wbg_beginRenderPass_c95ff061c0d906d5: L_,
      __wbg_set_label_09e0ae7a91a1691d: kf,
      __wbg_set_query_set_85f19025cae97571: Po,
      __wbg_set_beginning_of_pass_write_index_ebeb7a26461d13db: Sa,
      __wbg_set_end_of_pass_write_index_7064dc519798e433: af,
      __wbg_set_timestamp_writes_29676152e8effe87: ru,
      __wbg_beginComputePass_6e94537c59d13b82: T_,
      __wbg_set_width_d1fb21b0573a430a: Iu,
      __wbg_set_height_308d7c58bb7196f5: Ff,
      __wbg_set_depth_or_array_layers_922a1b1547bf00be: Ha,
      __wbg_label_37d2cc4e867fe710: Zr,
      __wbg_set_label_5871c6a4116d78e4: Of,
      __wbg_finish_cafc9caa4b3df56c: Vn,
      __wbg_finish_42f37cad38abaf27: Gn,
      __wbg_setPipeline_089f549251888aa1: Yb,
      __wbg_setBindGroup_54856bf9b113a81b: Kb,
      __wbg_setBindGroup_c3b04f2f9843b9bc: Qb,
      __wbg_dispatchWorkgroups_6e3eba5e3eb2b0c4: gn,
      __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: zr,
      __wbg_set_dst_factor_01ac107dce46775a: bf,
      __wbg_set_operation_872810b2c7ad34bb: ho,
      __wbg_set_src_factor_d869078ba948812f: Uo,
      __wbg_set_texture_18b0fd044bd7238a: tu,
      __wbg_set_mip_level_893bb594663b5970: bo,
      __wbg_set_x_6e4718e5e565b05c: Pu,
      __wbg_set_y_7ad35b82f29b7b2e: Mu,
      __wbg_set_z_74f5725616541ab5: Fu,
      __wbg_set_origin_a91df496455ed18c: So,
      __wbg_set_aspect_a06243383a09c435: ma,
      __wbg_Window_89f1205e6b84c5cf: r_,
      __wbg_gpu_97c682b8bbd6da29: Er,
      __wbg_WorkerGlobalScope_bfa24e5b372f1f02: b_,
      __wbg_set_a_cb5a15147778942a: ba,
      __wbg_set_b_130b6d20afdc640c: xa,
      __wbg_set_g_a202edac674d3195: Df,
      __wbg_set_r_d02e085dc65c7ba3: Mo,
      __wbg_writeBuffer_204a3aba84ea260c: Pi,
      __wbg_set_bytes_per_row_cc544005f5ac177d: La,
      __wbg_set_rows_per_image_91e30e4ece899f1e: Lo,
      __wbg_set_offset_50c0ba4bb906a321: mo,
      __wbg_writeTexture_bf31683b9d6c6d14: Mi,
      __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: zc,
      __wbg_submit_5f96af711b83c2df: Ju,
      __wbg_getMappedRange_9a20d37843bbc5dd: ir,
      __wbg_unmap_80761f81f18ec521: ai,
      __wbg_destroy_834dd203329bdb3c: nn,
      __wbg_mapAsync_c9718fcf0566073c: ac,
      __wbg_set_size_61d185241554da71: Vo,
      __wbg_set_usage_063311abcbeb0c9f: iu,
      __wbg_set_mapped_at_creation_0d65690c0978994b: _o,
      __wbg_set_label_d7cc9fef79f6607e: Uf,
      __wbg_createBuffer_e488cd40ceda9067: et,
      __wbg_set_address_mode_u_0099f90d7d87696a: fa,
      __wbg_set_address_mode_v_04f9373166ede6c4: oa,
      __wbg_set_address_mode_w_b6c10646d3e36154: ua,
      __wbg_set_compare_247a44f5e76066a8: Ga,
      __wbg_set_lod_max_clamp_35cfaf5ea55bb7aa: Hf,
      __wbg_set_lod_min_clamp_30d6a6d6ab2266ba: Jf,
      __wbg_set_mag_filter_30e1d228621e7c54: Zf,
      __wbg_set_min_filter_6674175c1bc1ef98: co,
      __wbg_set_mipmap_filter_40fc07fcab34eb41: oo,
      __wbg_set_max_anisotropy_32559abff96ae565: to,
      __wbg_set_label_6e50ef4fd57a0f6f: Gf,
      __wbg_createSampler_a3dfb0f2f89fdc2b: wt,
      __wbg_set_format_dad716a408041ce0: hf,
      __wbg_set_size_b0ef925501e008f2: Wo,
      __wbg_set_usage_f141b5de159a42da: su,
      __wbg_set_label_da0fad57dde6793d: zf,
      __wbg_set_dimension_b61a8ae2d358aa5b: rf,
      __wbg_set_mip_level_count_6f365469d581bead: fo,
      __wbg_set_sample_count_954d237c60a25f1d: Co,
      __wbg_set_view_formats_d410e2098aeda477: hu,
      __wbg_createTexture_cdd92f03ef413b88: ht,
      __wbg_set_entries_2cd3545ee493b9d8: of,
      __wbg_set_layout_5bb0e3710064d78b: Xf,
      __wbg_set_label_1eb936d3881c4a73: Cf,
      __wbg_createBindGroup_0916ed8027ba2c5a: Je,
      __wbg_set_code_d96e8bd591fe4d27: Ea,
      __wbg_set_label_4592679c60c3ae0e: Ef,
      __wbg_createShaderModule_2b4d1147549bca28: mt,
      __wbg_set_label_4f94deb040009907: Rf,
      __wbg_createCommandEncoder_e817b588d596b7d6: tt,
      __wbg_set_bind_group_layouts_0304829711909964: Ia,
      __wbg_set_label_81a922ba355b9c4e: Vf,
      __wbg_createPipelineLayout_87ecd84a502ca7b4: ft,
      __wbg_set_module_b00779338e12d7cb: go,
      __wbg_set_entry_point_d34fa93493d1dc0e: sf,
      __wbg_set_buffers_c36e59052d233445: ka,
      __wbg_set_layout_cf44c2080938f1e8: $f,
      __wbg_set_vertex_84e0affabea33233: wu,
      __wbg_set_label_ee8b5ccc3ceeadae: Kf,
      __wbg_set_format_1e6dd64c90091826: pf,
      __wbg_set_depth_compare_f44e1ef737045c19: Xa,
      __wbg_set_depth_write_enabled_47d54383526f6b41: tf,
      __wbg_set_depth_bias_6f054d893efee16d: ja,
      __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: Ka,
      __wbg_set_depth_bias_slope_scale_79c154be54e419a7: Na,
      __wbg_set_compare_13ccce3149fc8362: qa,
      __wbg_set_depth_fail_op_a697253b12a479e1: $a,
      __wbg_set_fail_op_45d1f0ecf070d60c: lf,
      __wbg_set_pass_op_10f19e715ae2c3ef: vo,
      __wbg_set_stencil_back_f7d6690835becc87: zo,
      __wbg_set_stencil_front_b0e57ed3db28a814: Ko,
      __wbg_set_stencil_read_mask_6d091cd38b736049: Qo,
      __wbg_set_stencil_write_mask_775ac04ab32e79dc: Yo,
      __wbg_set_depth_stencil_18746e1deb2f030f: Za,
      __wbg_set_module_70bd7be1f2808c25: io,
      __wbg_set_targets_8396bdc905d927e9: eu,
      __wbg_set_entry_point_37d0e849bed76259: df,
      __wbg_set_fragment_0767ccf58ccf1f6e: If,
      __wbg_set_count_9f86d0fc02d08e45: Wa,
      __wbg_set_mask_d8e7d97222c8a92e: eo,
      __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: ga,
      __wbg_set_multisample_8821c65822c70695: wo,
      __wbg_set_cull_mode_e2b289219d281f62: za,
      __wbg_set_front_face_3c32fabea21988fa: Af,
      __wbg_set_strip_index_format_d819e0c5b56ce30e: _u,
      __wbg_set_topology_ad5745a55cfa852b: bu,
      __wbg_set_unclipped_depth_05a825ce1721e8ed: uu,
      __wbg_set_primitive_8ec2530289b383b9: Ao,
      __wbg_createRenderPipeline_5757ddd273de2e48: dt,
      __wbg_set_module_eba0198658406841: so,
      __wbg_set_entry_point_999ecdf6a457ca37: gf,
      __wbg_set_layout_1899f55b8dd25754: Qf,
      __wbg_set_compute_05ff000946e445ff: Va,
      __wbg_set_label_dc573a7d0ea01fc3: jf,
      __wbg_createComputePipeline_4c01f547bfe2068f: nt,
      __wbg_set_entries_7ced1e5c2593516b: uf,
      __wbg_set_label_6d2e77710a43dc8c: qf,
      __wbg_createBindGroupLayout_433fd88c480d15ee: He,
      __wbg_end_5a7ce60dc0f49d42: kn,
      __wbg_set_required_limits_6e2e6f742e0f92ae: Bo,
      __wbg_set_required_features_505229173e5ae00f: Fo,
      __wbg_set_label_fcbb40adcedf7a3a: Nf,
      __wbg_requestDevice_acf949c0a7d11096: Bb,
      __wbg_end_336deb1484c140a6: Tn,
      __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: wr,
      __wbg_getCurrentTexture_c288aea95a2ecd6c: ar,
      __wbg_set_device_cf77f0192bc5144c: nf,
      __wbg_set_format_f98f8a95c86d8cc1: Sf,
      __wbg_set_usage_e94a8ea3a622b561: gu,
      __wbg_set_alpha_mode_ea0e62378a600722: da,
      __wbg_set_view_formats_57015785ec512612: yu,
      __wbg_configure_9ddad01510ae8865: je,
      __wbg_set_dimension_f73df134b3cb9008: cf,
      __wbg_set_format_17bbec4e26222ce0: mf,
      __wbg_set_aspect_24f00699ffc05e48: la,
      __wbg_set_base_array_layer_8a27534c79ebf816: ya,
      __wbg_set_array_layer_count_fbec00646c2f76f0: sa,
      __wbg_set_base_mip_level_2a95e55cd9c4b4b0: ha,
      __wbg_set_mip_level_count_11613862db4f5326: ao,
      __wbg_set_label_a9e60f11d8f6d907: Wf,
      __wbg_set_usage_8a7a3a48dde89c84: du,
      __wbg_createView_da8865cdd09ec9d5: At,
      __wbg_set_power_preference_ad90ccb2239fef97: Io,
      __wbg_requestAdapter_7a2f80d6f6aea9f3: Mb,
      __wbg_instanceof_GpuAdapter_32c51925d44640f8: Ur,
      __wbg_queue_19586e9507f5e981: lb,
      __wbg_drawIndexed_61f900a3bae1176a: In,
      __wbg_setPipeline_beee24fb5690e169: Hb,
      __wbg_setBindGroup_59293f4cce3ae9cc: Nb,
      __wbg_setBindGroup_1e02fb4f10e03fb5: jb,
      __wbg_setIndexBuffer_1cfc93f884167fc9: Xb,
      __wbg_setIndexBuffer_f0e21a93f9ba1002: $b,
      __wbg_setVertexBuffer_0e2ad0c3f14b93dc: ta,
      __wbg_setVertexBuffer_5090dba5d6df1168: na,
      __wbg_draw_5e172df5bac5e5ab: An,
      __wbg_set_access_318627865be26608: aa,
      __wbg_set_format_fa63d24489fef366: vf,
      __wbg_set_view_dimension_7031d64401f616a4: pu,
      __wbg_set_clear_value_576d8a3bda7ba8cc: Ca,
      __wbg_set_load_op_de7ca59cc25dfb40: Yf,
      __wbg_set_store_op_5185ea291265ee63: Zo,
      __wbg_set_resolve_target_cce9edc587b4211e: To,
      __wbg_set_view_330ed9fc9fcc4d01: lu,
      __wbg_set_buffer_c7c4bf990df518a5: Ta,
      __wbg_set_visibility_db1e452e6f23b84d: Su,
      __wbg_set_binding_f152b4f7c9a738e4: Da,
      __wbg_set_sampler_a3c99ec90976e6ff: Ro,
      __wbg_set_texture_b1e40b7ea5ec46d9: nu,
      __wbg_set_storage_texture_e6cb7da67d8c6fce: Jo,
      __wbg_set_external_texture_743e2b3e660a1b87: wf,
      __wbg_set_type_8131ac6aa51a1923: ou,
      __wbg_set_attributes_9241554310424d07: pa,
      __wbg_set_array_stride_6ac1c0f48cbb1a6e: wa,
      __wbg_set_step_mode_e6ef4bb885b3b66a: Ho,
      __wbg_set_binding_b9f5989194044799: Aa,
      __wbg_set_resource_e981078f9ddeee64: ko,
      __wbg_set_format_313c8f10a7e36a0c: yf,
      __wbg_set_offset_697e85d970df2f50: po,
      __wbg_set_shader_location_01be15233cdb0803: Oo,
      __wbg_set_buffer_9e1ebf8ed6567298: Ba,
      __wbg_set_offset_99d8916143968ec7: xo,
      __wbg_set_size_4a5f3caa1cb0f6ec: Go,
      __wbg_set_format_237204cc87ea4982: xf,
      __wbg_set_alpha_e58cc49c799f170e: ia,
      __wbg_set_color_5c69a2b8e768328d: Ra,
      __wbg_set_blend_450723fd40147c64: Pa,
      __wbg_set_write_mask_fc328072f01cb48d: Du,
      __wbg_set_multisampled_2ae606400626ad4f: lo,
      __wbg_set_has_dynamic_offset_45e6a78176745114: Pf,
      __wbg_set_min_binding_size_c7f7fc1040f0d69b: ro,
      __wbg_set_type_65c8734c99356bd7: fu,
      __wbg_set_sample_type_12f50c8927ad99ab: Eo,
      __wbg_set_view_dimension_e40d2151f56ba216: xu,
      __wbg_queueMicrotask_5bb536982f78a56f: sb,
      __wbg_queueMicrotask_0aa0a927f78f5d98: gb,
      __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: Nr,
      __wbg_blendFunc_2ef59299d10c662d: te,
      __wbg_colorMask_177d9762658e5e28: Ee,
      __wbg_depthFunc_f670d4cbb9cd0913: Jt,
      __wbg_depthMask_75a36d0065471a4b: _n,
      __wbg_fenceSync_c52a4e24eabfa0d3: Rn,
      __wbg_frontFace_d4a6507ad2939b5c: Hn,
      __wbg_uniform1ui_a0f911ff174715d0: B0,
      __wbg_beginQuery_0fdf154e1da0e73d: k_,
      __wbg_bindBuffer_c9068e8712a034f5: q_,
      __wbg_blendColor_e799d452ab2a5788: $_,
      __wbg_clearDepth_670099db422a4f91: De,
      __wbg_deleteSync_c8e4a9c735f71d18: zt,
      __wbg_depthRange_337bf254e67639bb: en,
      __wbg_drawArrays_075228181299b824: pn,
      __wbg_readBuffer_9eb461d6857295f0: mb,
      __wbg_useProgram_fe720ade4d3b6edb: ii,
      __wbg_bindSampler_96f0e90e7bc31da9: z_,
      __wbg_bindTexture_b2b7b1726a83f93e: j_,
      __wbg_createQuery_7988050efd7e4c48: it,
      __wbg_deleteQuery_ea8bf1954febd774: Ot,
      __wbg_drawBuffers_5eccfaacc6560299: hn,
      __wbg_linkProgram_6600dd2c0863bbfd: tc,
      __wbg_pixelStorei_2a65936c11b710fe: Qc,
      __wbg_stencilMask_732dcc5aada10e4c: Qu,
      __wbg_attachShader_b36058e5c9eeaf54: B_,
      __wbg_clearStencil_5d243d0dff03c315: Pe,
      __wbg_createBuffer_26534c05e01b8559: Ze,
      __wbg_createShader_e3ac08ed8c5b14b2: pt,
      __wbg_deleteBuffer_ab099883c168644d: kt,
      __wbg_deleteShader_aaf3b520a64d5d9d: Wt,
      __wbg_getExtension_3c0cb5ae01bb4b17: or,
      __wbg_getParameter_2e1f97ecaab76274: sr,
      __wbg_shaderSource_32425cfe6e5a1e52: Bu,
      __wbg_activeTexture_6f9a710514686c24: x_,
      __wbg_blendEquation_e9b99928ed1494ad: Z_,
      __wbg_compileShader_94718a93495d565d: qe,
      __wbg_createProgram_9b7710a1f2701c2c: ut,
      __wbg_createSampler_da6bb96c9ffaaa27: lt,
      __wbg_createTexture_16d2c8a3d7d4a75a: yt,
      __wbg_deleteProgram_9298fb3e3c1d3a78: Et,
      __wbg_deleteSampler_c6b68c4071841afa: Vt,
      __wbg_deleteTexture_9d411c0e60ffa324: Kt,
      __wbg_polygonOffset_4b3158d8ed028862: Zc,
      __wbg_texParameteri_0d45be2c88d6bad8: r0,
      __wbg_texStorage2D_9504743abf5a986a: b0,
      __wbg_texStorage3D_e9e1b58fee218abe: a0,
      __wbg_bindFramebuffer_031c73ba501cb8f6: G_,
      __wbg_blitFramebuffer_d730a23ab4db248e: re,
      __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: W_,
      __wbg_bindVertexArray_78220d1edb1d2382: Q_,
      __wbg_createFramebuffer_41512c38358a41c4: ct,
      __wbg_deleteFramebuffer_9738f3bb85c1ab35: Ct,
      __wbg_getSyncParameter_7d11ab875b41617e: Mr,
      __wbg_samplerParameterf_f070d2b69b1e2d46: Ob,
      __wbg_samplerParameteri_8e4c4bcead0ee669: qb,
      __wbg_blendFuncSeparate_95465944f788a092: _e,
      __wbg_createRenderbuffer_a601226a6a680dbe: st,
      __wbg_createVertexArray_ad5294951ae57497: It,
      __wbg_deleteRenderbuffer_096edada57729468: qt,
      __wbg_deleteVertexArray_7bc7f92769862f93: Qt,
      __wbg_getQueryParameter_5d6af051438ae479: hr,
      __wbg_getShaderInfoLog_9e0b96da4b13ae49: vr,
      __wbg_stencilOpSeparate_4657523b1d3b184f: Xu,
      __wbg_bindAttribLocation_ce78bfb13019dbe6: E_,
      __wbg_bufferData_32d26eba0c74a53c: ue,
      __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: lr,
      __wbg_getShaderParameter_afa4a3dd9dd397c1: Ar,
      __wbg_getUniformLocation_d06b3a5b3c60e95c: Tr,
      __wbg_readPixels_6ea8e288a8673282: xb,
      __wbg_renderbufferStorage_1bc02383614b76b2: Ab,
      __wbg_copyTexSubImage2D_91ebcd9cd1908265: $e,
      __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: Ye,
      __wbg_drawArraysInstanced_ec30adc616ec58d5: mn,
      __wbg_getIndexedParameter_ca1693c768bc4934: ur,
      __wbg_getProgramParameter_92e4540ca9da06b2: xr,
      __wbg_stencilFuncSeparate_10d043d0af14366f: Uu,
      __wbg_stencilMaskSeparate_28d53625c02d9c7f: ju,
      __wbg_texImage3D_2082006a8a9b28a7: t0,
      __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: X0,
      __wbg_vertexAttribDivisor_744c0ca468594894: li,
      __wbg_framebufferTexture2D_c283e928186aa542: Qn,
      __wbg_invalidateFramebuffer_b17b7e1da3051745: Xr,
      __wbg_blendEquationSeparate_a8094fbec94cf80e: H_,
      __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: Fr,
      __wbg_framebufferRenderbuffer_850811ed6e26475e: jn,
      __wbg_getSupportedExtensions_57142a6b598d7787: Dr,
      __wbg_clientWaitSync_21865feaeb76a9a5: ke,
      __wbg_framebufferTextureLayer_c8328828c8d5eb60: Xn,
      __wbg_texSubImage3D_59b8e24fb05787aa: h0,
      __wbg_uniform2fv_2fb47cfe06330cc7: k0,
      __wbg_uniform2iv_095baf208f172131: L0,
      __wbg_uniform3fv_c0872003729939a5: O0,
      __wbg_uniform3iv_6aa2b0791e659d14: q0,
      __wbg_uniform4fv_498bd80dc5aa16ff: z0,
      __wbg_uniform4iv_8a8219fda39dffd5: N0,
      __wbg_enableVertexAttribArray_475e06c31777296d: Dn,
      __wbg_uniform2uiv_3030d7e769f5e82a: E0,
      __wbg_uniform3uiv_86941e7eeb8ee0a3: V0,
      __wbg_uniform4uiv_046ee400bb80547d: Q0,
      __wbg_disableVertexAttribArray_24a020060006b10f: bn,
      __wbg_clearBufferfv_ac87d92e2f45d80c: Se,
      __wbg_clearBufferiv_69ff24bb52ec4c88: ve,
      __wbg_clearBufferuiv_8ad59a8219aafaca: Ie,
      __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: pi,
      __wbg_drawElementsInstanced_d41fc920ae24717c: vn,
      __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: Ib,
      __wbg_texSubImage3D_45591e5655d1ed5c: x0,
      __wbg_uniformMatrix2fv_24430076c7afb5e3: $0,
      __wbg_uniformMatrix3fv_6f822361173d8046: Z0,
      __wbg_uniformMatrix4fv_0e724dbebd372526: ni,
      __wbg_vertexAttribIPointer_b9020d0c2e759912: mi,
      __wbg_bindBufferRange_009d206fe9e4151e: R_,
      __wbg_bufferData_98f6c413a8f0f139: de,
      __wbg_texSubImage3D_3b653017c4c5d721: p0,
      __wbg_uniformMatrix2x3fv_a377326104a8faf4: H0,
      __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: J0,
      __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: ei,
      __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: ti,
      __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: ci,
      __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: bi,
      __wbg_readPixels_55b18304384e073d: pb,
      __wbg_texImage3D_bd2b0bd2cfcdb278: n0,
      __wbg_texSubImage3D_47643556a8a4bf86: y0,
      __wbg_texSubImage3D_18d7f3c65567c885: m0,
      __wbg_texSubImage3D_eff5cd6ab84f44ee: S0,
      __wbg_texSubImage3D_1102c12a20bf56d5: l0,
      __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: We,
      __wbg_compressedTexSubImage3D_778008a6293f15ab: ze,
      __wbg_copyBufferSubData_a4f9815861ff0ae9: Qe,
      __wbg_bufferSubData_3e902f031adf13fd: se,
      __wbg_compressedTexSubImage2D_684350eb62830032: Ve,
      __wbg_compressedTexSubImage3D_16afa3a47bf1d979: Ue,
      __wbg_getBufferSubData_4fc54b4fbb1462d7: Zn,
      __wbg_texSubImage2D_edf5bd70fda3feaf: w0,
      __wbg_clear_7187030f892c5ca0: Te,
      __wbg_flush_e322496f5412e567: Un,
      __wbg_texImage2D_13414a4692836804: _0,
      __wbg_texSubImage2D_bf72e56edeeed376: d0,
      __wbg_texSubImage2D_e193f1d28439217c: s0,
      __wbg_enable_d1ac04dfdd2fb3ae: Mn,
      __wbg_texSubImage2D_117d29278542feb0: f0,
      __wbg_texSubImage2D_bd034db2e58c352c: i0,
      __wbg_texSubImage2D_5d270af600a7fc4a: u0,
      __wbg_texSubImage2D_d17a39cdec4a3495: g0,
      __wbg_disable_7fe6fb3e97717f88: fn,
      __wbg_scissor_2ff8f18f05a6d408: Wb,
      __wbg_texImage2D_087ef94df78081f0: Zu,
      __wbg_viewport_df236eac68bc7467: hi,
      __wbg_cullFace_e7e711a14d2c3f48: Ft,
      __wbg_endQuery_54f0627d4c931318: Bn,
      __wbg_uniform1f_b500ede5b612bea2: D0,
      __wbg_uniform1i_e9aee4b9e7fe8c4b: F0,
      __wbg_uniform4f_f6b5e2024636033a: U0,
      __wbg_instanceof_Window_ed49b2db8df90359: Qr,
      __wbg_matchMedia_91d4fc9729dc3c84: fc,
      __wbg_queueMicrotask_885fd8605352e25d: wb,
      __wbg_devicePixelRatio_5c458affc89fc209: cn,
      __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: tr,
      __wbg_cancelIdleCallback_fdfaaf4ca585e729: xe,
      __wbg_requestIdleCallback_c9c643f8210d435b: Cb,
      __wbg_cancelAnimationFrame_cd35895d78cf4510: pe,
      __wbg_requestAnimationFrame_43682f8e1c5e5348: Fb,
      __wbg_clearTimeout_df03cf00269bc442: Fe,
      __wbg_setTimeout_681abd84926a4da3: _a,
      __wbg_setTimeout_eff32631ea138533: ea,
      __wbg_document_ee35a3d3ae34ef6c: sn,
      __wbg_location_df7ca06c93e51763: cc,
      __wbg_navigator_43be698ba96fc088: wc,
      __wbg_setAttribute_cc8e4c8a2a008508: zb,
      __wbg_setPointerCapture_420db6f6826eb74b: Jb,
      __wbg_activeElement_1554b6917654f8d6: p_,
      __wbg_createElement_49f60fdcaae809c8: rt,
      __wbg_querySelector_c3b0df2d58eec220: db,
      __wbg_visibilityState_43b7b74940e07d22: Si,
      __wbg_getElementById_e34377b79d7285f6: fr,
      __wbg_fullscreenElement_25b445e2961e68ba: Jn,
      __wbg_querySelectorAll_1283aae52043a951: ib,
      __wbg_body_f67922363a220026: be,
      __wbg_fetch_afb6a4b6cacf876d: On,
      __wbg_navigator_4478931f32ebca57: lc,
      __wbg_focus_128ff465f65677cc: zn,
      __wbg_style_0b7c9bd318f8b807: Hu,
      __wbg_blendFunc_446658e7231ab9c8: ne,
      __wbg_colorMask_7a8dbc86e7376a9b: Re,
      __wbg_depthFunc_eb3aa05361dd2eaa: Ht,
      __wbg_depthMask_103091329ca1a750: Zt,
      __wbg_frontFace_027e2ec7a7bc347c: Yn,
      __wbg_bindBuffer_69a7a0b8f3f9b9cf: O_,
      __wbg_blendColor_1d50ac87d9a2794b: X_,
      __wbg_clearDepth_2b109f644a783a53: Ae,
      __wbg_depthRange_5579d448b9d7de57: tn,
      __wbg_drawArrays_2be89c369a29f30b: xn,
      __wbg_useProgram_e82c1a5f87d81579: ui,
      __wbg_bindTexture_ec13ddcb9dc8e032: K_,
      __wbg_linkProgram_be6b825cf66d177b: nc,
      __wbg_pixelStorei_f7cc498f52d523f1: Xc,
      __wbg_stencilMask_0eca090c4c47f8f7: Nu,
      __wbg_attachShader_32114efcf2744eb6: F_,
      __wbg_clearStencil_aa65955bb39d8c18: Me,
      __wbg_createBuffer_c4ec897aacc1b91c: _t,
      __wbg_createShader_f2b928ca9a426b14: xt,
      __wbg_deleteBuffer_22fcc93912cbf659: Tt,
      __wbg_deleteShader_ff70ca962883e241: Ut,
      __wbg_getParameter_1ecb910cfdd21f88: gr,
      __wbg_shaderSource_8f4bda03f70359df: Tu,
      __wbg_activeTexture_7e39cb8fdf4b6d5a: y_,
      __wbg_blendEquation_82202f34c4c00e50: J_,
      __wbg_compileShader_63b824e86bb00b8f: Oe,
      __wbg_createProgram_98aaa91f7c81c5e2: ot,
      __wbg_createTexture_f9451a82c7527ce2: St,
      __wbg_deleteProgram_f354e79b8cae8076: Rt,
      __wbg_deleteTexture_2be78224e5584a8b: jt,
      __wbg_polygonOffset_24a8059deb03be92: Jc,
      __wbg_texParameteri_ec937d2161018946: c0,
      __wbg_bindFramebuffer_7815ca611abb057f: V_,
      __wbg_bindRenderbuffer_db37c1bac9ed4da0: U_,
      __wbg_createFramebuffer_b88ffa8e0fd262c4: bt,
      __wbg_deleteFramebuffer_8de1ca41ac87cfd9: Lt,
      __wbg_blendFuncSeparate_f366c170c5097fbe: ee,
      __wbg_createRenderbuffer_1e567f2f4d461710: gt,
      __wbg_deleteRenderbuffer_0f565f0727b341fc: Gt,
      __wbg_getShaderInfoLog_9991e9e77b0c6805: Sr,
      __wbg_stencilOpSeparate_de257f3c29e604cd: $u,
      __wbg_bindAttribLocation_5cfc7fa688df5051: C_,
      __wbg_bufferData_1be8450fab534758: oe,
      __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: mr,
      __wbg_getShaderParameter_786fd84f85720ca8: Ir,
      __wbg_getUniformLocation_71c070e6644669ad: Br,
      __wbg_renderbufferStorage_6348154d30979c44: Db,
      __wbg_copyTexSubImage2D_417a65926e3d2490: Xe,
      __wbg_getProgramParameter_43fbc6d2613c08b3: pr,
      __wbg_stencilFuncSeparate_1798f5cca257f313: zu,
      __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: Ku,
      __wbg_framebufferTexture2D_8adf6bdfc3c56dee: Nn,
      __wbg_blendEquationSeparate_1b12c43928cc7bc1: Y_,
      __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: Kn,
      __wbg_uniform2fv_04c304b93cbf7f55: T0,
      __wbg_uniform2iv_ccf2ed44ac8e602e: C0,
      __wbg_uniform3fv_aa35ef21e14d5469: R0,
      __wbg_uniform3iv_e912f444d4ff8269: G0,
      __wbg_uniform4fv_e6c73702e9a3be5c: j0,
      __wbg_uniform4iv_375332584c65e61b: K0,
      __wbg_enableVertexAttribArray_aa6e40408261eeb9: Pn,
      __wbg_disableVertexAttribArray_4bac633c27bae599: an,
      __wbg_vertexAttribPointer_adbd1853cce679ad: xi,
      __wbg_uniformMatrix2fv_e2806601f5b95102: Y0,
      __wbg_uniformMatrix3fv_b94a764c63aa6468: _i,
      __wbg_uniformMatrix4fv_923b55ad503fdc56: ri,
      __wbg_bufferData_52235e85894af988: ie,
      __wbg_readPixels_95b2464a7bb863a2: yb,
      __wbg_bufferSubData_33eebcc173094f6a: ge,
      __wbg_compressedTexSubImage2D_215bb115facd5e48: Ge,
      __wbg_clear_4d801d0d054c3579: Be,
      __wbg_flush_7777597fd43065db: Wn,
      __wbg_enable_fee40f19b7053ea3: Fn,
      __wbg_texSubImage2D_19ae4cadb809f264: o0,
      __wbg_disable_bd37bdcca1764aea: on,
      __wbg_scissor_b870b1434a9c25b4: Ub,
      __wbg_texImage2D_e71049312f3172d9: e0,
      __wbg_viewport_174ae1c2209344ae: yi,
      __wbg_cullFace_39500f654c67a205: Mt,
      __wbg_uniform1f_c148eeaf4b531059: P0,
      __wbg_uniform1i_9f3f72dbcb98ada9: M0,
      __wbg_uniform4f_71ec75443e58cecc: W0,
      __wbg_get_d8db2ad31d529ff8: Cr,
      __wbg_deltaMode_a1d1df711e44cefc: Xt,
      __wbg_deltaX_f0ca9116db5f7bc1: $t,
      __wbg_deltaY_eb94120160ac821c: Yt,
      __wbg_addEventListener_3acb0aad4483804c: h_,
      __wbg_removeEventListener_e63328781a5b9af9: hb,
      __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: yn,
      __wbg_set_height_f21f985387070100: Tf,
      __wbg_getContext_2a5764d48600bc43: rr,
      __wbg_getContext_b28d2db7bd648242: cr,
      __wbg_set_width_d60bc4f2f20c56a4: Au,
      __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: jr,
      __wbg_getSupportedProfiles_1f728bc32003c4d0: Pr,
      __wbg_preventDefault_cdcfcd7e301b9702: bb,
      __wbg_postMessage_e45c89e4826cf2ef: nb,
      __wbg_new_4f8f3c123e474358: yc,
      __wbg_key_d41e8e825e6bb0e9: Jr,
      __wbg_code_dee0dae4730408e1: Ce,
      __wbg_repeat_375aae5c5c6a0258: Pb,
      __wbg_altKey_73c1173ba53073d5: v_,
      __wbg_ctrlKey_09a1b54d77dea92b: Dt,
      __wbg_location_22bcb1a188a96eb1: rc,
      __wbg_metaKey_67113fb40365d736: dc,
      __wbg_shiftKey_564be91ec842bcc4: Lu,
      __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: $n,
      __wbg_isIntersecting_6807d592d68e059e: $r,
      __wbg_origin_a9c891fa602b4d40: jc,
      __wbg_set_method_c3e20375f5ae7fac: no,
      __wbg_set_signal_f2d3f8599248896d: qo,
      __wbg_set_credentials_c4a58d2e05ef24fb: Ua,
      __wbg_set_headers_cfc5f4b2c1f20549: Mf,
      __wbg_set_body_9a7e00afe3cfe244: Ma,
      __wbg_set_mode_b13642c312648202: uo,
      __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: ln,
      __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: wi,
      __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: Sn,
      __wbg_new_with_str_and_init_a61cbc6bdef21614: Bc,
      __wbg_new_6f0524fbfa300c47: Sc,
      __wbg_port1_6251ddc5cf5c9287: _b,
      __wbg_port2_b2a294b0ede1e13c: eb,
      __wbg_contentRect_79b98e4d4f4728a4: Ne,
      __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: rn,
      __wbg_disconnect_0a2d26237dfc1e9e: un,
      __wbg_new_8c6e67a40cee1f83: Ic,
      __wbg_observe_2a9d63459970a2c1: Oc,
      __wbg_set_box_73d3355c6f95f24d: Fa,
      __wbg_revokeObjectURL_ba5712ef5af8bc9a: Rb,
      __wbg_createObjectURL_918185db6a10a0c8: at,
      __wbg_new_64284bd487f9d239: hc,
      __wbg_append_a992ccc37aa62dc4: P_,
      __wbg_instanceof_Response_ee1d54d79ae41977: Kr,
      __wbg_arrayBuffer_bb54076166006c39: M_,
      __wbg_url_c484c26b1fbf5126: oi,
      __wbg_text_083b8727c990c8c0: v0,
      __wbg_status_89d7e803db911ee7: Wu,
      __wbg_headers_59a2938db9f80985: Or,
      __wbg_addListener_03e8162d7e03c823: S_,
      __wbg_removeListener_e2a199028636dcf5: Sb,
      __wbg_media_7bcde781569bca4c: uc,
      __wbg_matches_4b5c22bd830f7bb3: oc,
      __wbg_set_type_148de20768639245: au,
      __wbg_queryCounterEXT_b578f07c30420446: ub,
      __wbg_log_6b5ca2e6124b2808: bc,
      __wbg_info_148d043840582012: Vr,
      __wbg_warn_f7ae1b2e66ccb930: vi,
      __wbg_debug_a4099fa12db6cd61: Bt,
      __wbg_error_9a7fe3f932034cde: Cn,
      __wbg_error_f852e41c69b0bd84: En,
      __wbg_postMessage_46eeeef39934b448: tb,
      __wbg_set_onmessage_0e1ffb1c0d91d2ad: yo,
      __wbg_close_fad2f0ee451926ed: Le,
      __wbg_start_ffb4b426b1e661bd: Ru,
      __wbg_bindVertexArrayOES_c2610602f7485b3f: N_,
      __wbg_createVertexArrayOES_bd76ceee6ab9b95e: vt,
      __wbg_deleteVertexArrayOES_197df47ef9684195: Nt,
      __wbg_userAgent_34463fd660ba4a2a: gi,
      __wbg_set_height_b386c0f603610637: Bf,
      __wbg_getContext_2966500392030d63: nr,
      __wbg_getContext_de810d9f187f29ca: br,
      __wbg_set_width_7f07715a20503914: vu,
      __wbg_setProperty_cbb25c4e74285b39: Zb,
      __wbg_removeProperty_a0d2ff8a76ffd2b1: vb,
      __wbg_getPropertyValue_d6911b2a1f9acba9: yr,
      __wbg_movementX_ff6524e06bc35b6a: gc,
      __wbg_movementY_4cec81d9850ad239: sc,
      __wbg_button_d86841d0a03adc44: we,
      __wbg_altKey_8155c319c215e3aa: I_,
      __wbg_buttons_a158a0cad3175f24: le,
      __wbg_ctrlKey_96ff94f8b18636a3: Pt,
      __wbg_metaKey_374999c340f70626: ic,
      __wbg_shiftKey_5558a3288542c985: ku,
      __wbg_now_ebffdf7e580f210d: Ec,
      __wbg_pointerId_466b1bdcaf2fe835: Yc,
      __wbg_pointerType_ba53c6f18634a26d: Hc,
      __wbg_getCoalescedEvents_8d19e426e1461e96: er,
      __wbg_pressure_f01a99684f7a6cf3: cb,
      __wbg_disconnect_5202f399852258c0: dn,
      __wbg_observe_1ae37077cf10b11b: Rc,
      __wbg_new_2e2be9617c4407d5: mc,
      __wbg_observe_b9abc08d6d829e56: qc,
      __wbg_unobserve_b4eb8d945252124f: fi,
      __wbg_appendChild_dea38765a26d346d: D_,
      __wbg_contains_1056459c33f961e8: Ke,
      __wbg_new_b949e7f56150a5d1: Ac,
      __wbg_abort_2f0584e03e8e3950: m_,
      __wbg_signal_d1285ecab4ebc5ad: Cu,
      __wbg_width_7444cca5dfea0645: Di,
      __wbg_height_c2027cf67d1c9b11: qr,
      __wbg_blockSize_ef9a626745d7dfac: ce,
      __wbg_inlineSize_3e4e7e8c813884fd: Wr,
      __wbg_persisted_de98357e1aaf6546: Nc,
      __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: Tc,
      __wbg_new_3eb36ae241fe6f44: xc,
      __wbg_new_361308b2356cecd0: pc,
      __wbg_new_no_args_1c7c842f08d00ebb: Mc,
      __wbg_new_dd2b680c8bf6ae29: Dc,
      __wbg_length_32ed9a279acd054c: _c,
      __wbg_prototypesetcall_bdcdcc5842e4d77d: fb,
      __wbg_new_from_slice_a3d2629dc1826784: Pc,
      __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: Fc,
      __wbg_set_25cf9deff6bf0ea8: ra,
      __wbg_done_57b39ecd9addfe81: wn,
      __wbg_value_0546255b415e96c1: si,
      __wbg_get_9b94d73e6221f75c: kr,
      __wbg_of_f915f7cd925b21a5: Vc,
      __wbg_of_9ab14f9d4bfb5040: Gc,
      __wbg_length_35a7bace40f36eac: ec,
      __wbg_push_8ffdcb2063340ba5: ob,
      __wbg_includes_32215c836f1cd3fb: Gr,
      __wbg_getOwnPropertyDescriptor_03ccfd856865081b: dr,
      __wbg_is_f29129f676e5410c: Yr,
      __wbg_iterator_6ff6560ca1568e55: Hr,
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: qu,
      __wbg_call_389efe28435a9388: me,
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: Gu,
      __wbg_static_accessor_GLOBAL_12837167ad935116: Ou,
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: Vu,
      __wbg_then_b9e7b3b5f1a9e1b5: A0,
      __wbg_catch_c1f8c7623b458214: he,
      __wbg_then_0d9fe2c7b1857d32: I0,
      __wbg_resolve_002c4b7d9d8f6b64: Eb,
      __wbg_next_418f80d8f5303233: Lc,
      __wbg_next_3482f54c49e8af19: kc,
      __wbg_get_b3ed3ad4be2bc8ac: Lr,
      __wbg_has_d4e53238966c12b6: Rr,
      __wbg_set_6cb8631f80447a67: ca,
      __wbg_stringify_8d1cc6ff383e8bae: Yu,
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
      __wbindgen_cast_0000000000000001: Fi,
      __wbindgen_cast_0000000000000002: Bi,
      __wbindgen_cast_0000000000000003: Ti,
      __wbindgen_cast_0000000000000004: ki,
      __wbindgen_cast_0000000000000005: Li,
      __wbindgen_cast_0000000000000006: Ci,
      __wbindgen_cast_0000000000000007: Ei,
      __wbindgen_cast_0000000000000008: Ri,
      __wbindgen_cast_0000000000000009: Oi,
      __wbindgen_cast_000000000000000a: qi,
      __wbindgen_cast_000000000000000b: Gi,
      __wbindgen_cast_000000000000000c: Vi,
      __wbindgen_cast_000000000000000d: Wi,
      __wbindgen_cast_000000000000000e: Ui,
      __wbindgen_cast_000000000000000f: zi,
      __wbindgen_cast_0000000000000010: ji,
      __wbindgen_cast_0000000000000011: Ki,
      __wbindgen_cast_0000000000000012: Ni,
      __wbindgen_cast_0000000000000013: Qi
    }
  }, n_), Td = S.memory, kd = S.main, Ld = S.run_web, Cd = S.__wasm_bindgen_func_elem_3179, Ed = S.__wasm_bindgen_func_elem_5024, Rd = S.__wasm_bindgen_func_elem_3517, Od = S.__wasm_bindgen_func_elem_3515, qd = S.__wasm_bindgen_func_elem_5025, Gd = S.__wasm_bindgen_func_elem_3516, Vd = S.__wbindgen_export, Wd = S.__wbindgen_export2, Ud = S.__wbindgen_export3, zd = S.__wbindgen_export4, e_ = S.__wbindgen_start, jd = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wasm_bindgen_func_elem_3179: Cd,
    __wasm_bindgen_func_elem_3515: Od,
    __wasm_bindgen_func_elem_3516: Gd,
    __wasm_bindgen_func_elem_3517: Rd,
    __wasm_bindgen_func_elem_5024: Ed,
    __wasm_bindgen_func_elem_5025: qd,
    __wbindgen_export: Vd,
    __wbindgen_export2: Wd,
    __wbindgen_export3: Ud,
    __wbindgen_export4: zd,
    __wbindgen_start: e_,
    main: kd,
    memory: Td,
    run_web: Ld
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Bd(jd);
  e_();
})();
export {
  __tla,
  Nd as run_web
};
