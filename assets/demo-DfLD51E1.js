var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { _ as n_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      const c_ = "/learn-wgpu/assets/demo_bg-Be9oaEVc.wasm";
      function r_(_) {
        const e = t(_).Window;
        return b(e);
      }
      function b_(_) {
        const e = t(_).Window;
        return b(e);
      }
      function a_(_) {
        const e = t(_).WorkerGlobalScope;
        return b(e);
      }
      function f_(_) {
        const e = t(_), n = typeof e == "boolean" ? e : void 0;
        return w(n) ? 16777215 : n ? 1 : 0;
      }
      function o_(_, e) {
        const n = z(t(e)), c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function u_(_) {
        return typeof t(_) == "function";
      }
      function d_(_) {
        return t(_) === null;
      }
      function i_(_) {
        const e = t(_);
        return typeof e == "object" && e !== null;
      }
      function g_(_) {
        return typeof t(_) == "string";
      }
      function s_(_) {
        return t(_) === void 0;
      }
      function w_(_, e) {
        const n = t(e), c = typeof n == "number" ? n : void 0;
        l().setFloat64(_ + 8, w(c) ? 0 : c, true), l().setInt32(_ + 0, !w(c), true);
      }
      function l_(_, e) {
        const n = t(e), c = typeof n == "string" ? n : void 0;
        var r = w(c) ? 0 : y(c, d.__wbindgen_export, d.__wbindgen_export2), a = p;
        l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
      }
      function m_(_, e) {
        throw new Error(g(_, e));
      }
      function p_(_) {
        t(_)._wbg_cb_unref();
      }
      function x_(_) {
        t(_).abort();
      }
      function y_(_, e) {
        t(_).abort(t(e));
      }
      function h_(_) {
        const e = t(_).activeElement;
        return w(e) ? 0 : b(e);
      }
      function S_(_, e) {
        t(_).activeTexture(e >>> 0);
      }
      function v_(_, e) {
        t(_).activeTexture(e >>> 0);
      }
      function I_() {
        return o(function(_, e, n, c) {
          t(_).addEventListener(g(e, n), t(c));
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
        const c = t(_).animate(t(e), t(n));
        return b(c);
      }
      function F_() {
        return o(function(_, e) {
          const n = t(_).appendChild(t(e));
          return b(n);
        }, arguments);
      }
      function T_() {
        return o(function(_, e, n, c, r) {
          t(_).append(g(e, n), g(c, r));
        }, arguments);
      }
      function B_() {
        return o(function(_) {
          const e = t(_).arrayBuffer();
          return b(e);
        }, arguments);
      }
      function k_(_, e, n) {
        t(_).attachShader(t(e), t(n));
      }
      function L_(_, e, n) {
        t(_).attachShader(t(e), t(n));
      }
      function E_(_, e, n) {
        t(_).beginQuery(e >>> 0, t(n));
      }
      function C_() {
        return o(function(_, e) {
          const n = t(_).beginRenderPass(t(e));
          return b(n);
        }, arguments);
      }
      function R_(_, e, n, c, r) {
        t(_).bindAttribLocation(t(e), n >>> 0, g(c, r));
      }
      function O_(_, e, n, c, r) {
        t(_).bindAttribLocation(t(e), n >>> 0, g(c, r));
      }
      function q_(_, e, n, c, r, a) {
        t(_).bindBufferRange(e >>> 0, n >>> 0, t(c), r, a);
      }
      function G_(_, e, n) {
        t(_).bindBuffer(e >>> 0, t(n));
      }
      function V_(_, e, n) {
        t(_).bindBuffer(e >>> 0, t(n));
      }
      function W_(_, e, n) {
        t(_).bindFramebuffer(e >>> 0, t(n));
      }
      function U_(_, e, n) {
        t(_).bindFramebuffer(e >>> 0, t(n));
      }
      function z_(_, e, n) {
        t(_).bindRenderbuffer(e >>> 0, t(n));
      }
      function j_(_, e, n) {
        t(_).bindRenderbuffer(e >>> 0, t(n));
      }
      function K_(_, e, n) {
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
      function $_(_, e) {
        t(_).bindVertexArray(t(e));
      }
      function Y_(_, e, n, c, r) {
        t(_).blendColor(e, n, c, r);
      }
      function H_(_, e, n, c, r) {
        t(_).blendColor(e, n, c, r);
      }
      function J_(_, e, n) {
        t(_).blendEquationSeparate(e >>> 0, n >>> 0);
      }
      function Z_(_, e, n) {
        t(_).blendEquationSeparate(e >>> 0, n >>> 0);
      }
      function _e(_, e) {
        t(_).blendEquation(e >>> 0);
      }
      function ee(_, e) {
        t(_).blendEquation(e >>> 0);
      }
      function te(_, e, n, c, r) {
        t(_).blendFuncSeparate(e >>> 0, n >>> 0, c >>> 0, r >>> 0);
      }
      function ne(_, e, n, c, r) {
        t(_).blendFuncSeparate(e >>> 0, n >>> 0, c >>> 0, r >>> 0);
      }
      function ce(_, e, n) {
        t(_).blendFunc(e >>> 0, n >>> 0);
      }
      function re(_, e, n) {
        t(_).blendFunc(e >>> 0, n >>> 0);
      }
      function be(_, e, n, c, r, a, f, u, i, s, m) {
        t(_).blitFramebuffer(e, n, c, r, a, f, u, i, s >>> 0, m >>> 0);
      }
      function ae(_) {
        return t(_).blockSize;
      }
      function fe(_) {
        const e = t(_).body;
        return w(e) ? 0 : b(e);
      }
      function oe(_, e) {
        const n = t(e).brand, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function ue(_) {
        const e = t(_).brands;
        return b(e);
      }
      function de(_, e, n, c) {
        t(_).bufferData(e >>> 0, n, c >>> 0);
      }
      function ie(_, e, n, c) {
        t(_).bufferData(e >>> 0, n, c >>> 0);
      }
      function ge(_, e, n, c) {
        t(_).bufferData(e >>> 0, t(n), c >>> 0);
      }
      function se(_, e, n, c) {
        t(_).bufferData(e >>> 0, t(n), c >>> 0);
      }
      function we(_, e, n, c) {
        t(_).bufferSubData(e >>> 0, n, t(c));
      }
      function le(_, e, n, c) {
        t(_).bufferSubData(e >>> 0, n, t(c));
      }
      function me(_) {
        return t(_).button;
      }
      function pe(_) {
        return t(_).buttons;
      }
      function xe() {
        return o(function(_, e) {
          const n = t(_).call(t(e));
          return b(n);
        }, arguments);
      }
      function ye() {
        return o(function(_, e, n) {
          const c = t(_).call(t(e), t(n));
          return b(c);
        }, arguments);
      }
      function he() {
        return o(function(_, e) {
          t(_).cancelAnimationFrame(e);
        }, arguments);
      }
      function Se(_, e) {
        t(_).cancelIdleCallback(e >>> 0);
      }
      function ve(_) {
        t(_).cancel();
      }
      function Ie(_, e) {
        const n = t(_).catch(t(e));
        return b(n);
      }
      function Ae(_, e, n, c, r) {
        t(_).clearBufferfv(e >>> 0, n, x(c, r));
      }
      function De(_, e, n, c, r) {
        t(_).clearBufferiv(e >>> 0, n, A(c, r));
      }
      function Pe(_, e, n, c, r) {
        t(_).clearBufferuiv(e >>> 0, n, F(c, r));
      }
      function Me(_, e) {
        t(_).clearDepth(e);
      }
      function Fe(_, e) {
        t(_).clearDepth(e);
      }
      function Te(_, e) {
        t(_).clearStencil(e);
      }
      function Be(_, e) {
        t(_).clearStencil(e);
      }
      function ke(_) {
        const e = clearTimeout(H(_));
        return b(e);
      }
      function Le(_, e) {
        t(_).clearTimeout(e);
      }
      function Ee(_, e) {
        t(_).clear(e >>> 0);
      }
      function Ce(_, e) {
        t(_).clear(e >>> 0);
      }
      function Re(_, e, n, c) {
        return t(_).clientWaitSync(t(e), n >>> 0, c >>> 0);
      }
      function Oe(_) {
        t(_).close();
      }
      function qe(_, e) {
        const n = t(e).code, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function Ge(_, e, n, c, r) {
        t(_).colorMask(e !== 0, n !== 0, c !== 0, r !== 0);
      }
      function Ve(_, e, n, c, r) {
        t(_).colorMask(e !== 0, n !== 0, c !== 0, r !== 0);
      }
      function We(_, e) {
        t(_).compileShader(t(e));
      }
      function Ue(_, e) {
        t(_).compileShader(t(e));
      }
      function ze(_, e, n, c, r, a, f, u, i) {
        t(_).compressedTexSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, t(i));
      }
      function je(_, e, n, c, r, a, f, u, i) {
        t(_).compressedTexSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, t(i));
      }
      function Ke(_, e, n, c, r, a, f, u, i, s) {
        t(_).compressedTexSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i, s);
      }
      function Ne(_, e, n, c, r, a, f, u, i, s, m) {
        t(_).compressedTexSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, t(m));
      }
      function Qe(_, e, n, c, r, a, f, u, i, s, m, h) {
        t(_).compressedTexSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m, h);
      }
      function Xe() {
        return o(function(_, e) {
          t(_).configure(t(e));
        }, arguments);
      }
      function $e(_, e) {
        return t(_).contains(t(e));
      }
      function Ye(_) {
        const e = t(_).contentRect;
        return b(e);
      }
      function He(_, e, n, c, r, a) {
        t(_).copyBufferSubData(e >>> 0, n >>> 0, c, r, a);
      }
      function Je() {
        return o(function(_, e, n, c, r, a) {
          t(_).copyBufferToBuffer(t(e), n, t(c), r, a);
        }, arguments);
      }
      function Ze() {
        return o(function(_, e, n, c, r) {
          t(_).copyBufferToBuffer(t(e), n, t(c), r);
        }, arguments);
      }
      function _t(_, e, n, c, r, a, f, u, i) {
        t(_).copyTexSubImage2D(e >>> 0, n, c, r, a, f, u, i);
      }
      function et(_, e, n, c, r, a, f, u, i) {
        t(_).copyTexSubImage2D(e >>> 0, n, c, r, a, f, u, i);
      }
      function tt(_, e, n, c, r, a, f, u, i, s) {
        t(_).copyTexSubImage3D(e >>> 0, n, c, r, a, f, u, i, s);
      }
      function nt() {
        return o(function(_, e) {
          const n = t(_).createBindGroupLayout(t(e));
          return b(n);
        }, arguments);
      }
      function ct(_, e) {
        const n = t(_).createBindGroup(t(e));
        return b(n);
      }
      function rt(_) {
        const e = t(_).createBuffer();
        return w(e) ? 0 : b(e);
      }
      function bt(_) {
        const e = t(_).createBuffer();
        return w(e) ? 0 : b(e);
      }
      function at() {
        return o(function(_, e) {
          const n = t(_).createBuffer(t(e));
          return b(n);
        }, arguments);
      }
      function ft(_, e) {
        const n = t(_).createCommandEncoder(t(e));
        return b(n);
      }
      function ot() {
        return o(function(_, e, n) {
          const c = t(_).createElement(g(e, n));
          return b(c);
        }, arguments);
      }
      function ut(_) {
        const e = t(_).createFramebuffer();
        return w(e) ? 0 : b(e);
      }
      function dt(_) {
        const e = t(_).createFramebuffer();
        return w(e) ? 0 : b(e);
      }
      function it() {
        return o(function(_, e) {
          const n = URL.createObjectURL(t(e)), c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
          l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
        }, arguments);
      }
      function gt(_, e) {
        const n = t(_).createPipelineLayout(t(e));
        return b(n);
      }
      function st(_) {
        const e = t(_).createProgram();
        return w(e) ? 0 : b(e);
      }
      function wt(_) {
        const e = t(_).createProgram();
        return w(e) ? 0 : b(e);
      }
      function lt(_) {
        const e = t(_).createQuery();
        return w(e) ? 0 : b(e);
      }
      function mt() {
        return o(function(_, e) {
          const n = t(_).createRenderPipeline(t(e));
          return b(n);
        }, arguments);
      }
      function pt(_) {
        const e = t(_).createRenderbuffer();
        return w(e) ? 0 : b(e);
      }
      function xt(_) {
        const e = t(_).createRenderbuffer();
        return w(e) ? 0 : b(e);
      }
      function yt(_, e) {
        const n = t(_).createSampler(t(e));
        return b(n);
      }
      function ht(_) {
        const e = t(_).createSampler();
        return w(e) ? 0 : b(e);
      }
      function St(_, e) {
        const n = t(_).createShaderModule(t(e));
        return b(n);
      }
      function vt(_, e) {
        const n = t(_).createShader(e >>> 0);
        return w(n) ? 0 : b(n);
      }
      function It(_, e) {
        const n = t(_).createShader(e >>> 0);
        return w(n) ? 0 : b(n);
      }
      function At(_) {
        const e = t(_).createTexture();
        return w(e) ? 0 : b(e);
      }
      function Dt() {
        return o(function(_, e) {
          const n = t(_).createTexture(t(e));
          return b(n);
        }, arguments);
      }
      function Pt(_) {
        const e = t(_).createTexture();
        return w(e) ? 0 : b(e);
      }
      function Mt(_) {
        const e = t(_).createVertexArrayOES();
        return w(e) ? 0 : b(e);
      }
      function Ft(_) {
        const e = t(_).createVertexArray();
        return w(e) ? 0 : b(e);
      }
      function Tt() {
        return o(function(_, e) {
          const n = t(_).createView(t(e));
          return b(n);
        }, arguments);
      }
      function Bt(_) {
        const e = t(_).crypto;
        return b(e);
      }
      function kt(_) {
        return t(_).ctrlKey;
      }
      function Lt(_) {
        return t(_).ctrlKey;
      }
      function Et(_, e) {
        t(_).cullFace(e >>> 0);
      }
      function Ct(_, e) {
        t(_).cullFace(e >>> 0);
      }
      function Rt(_) {
        console.debug(t(_));
      }
      function Ot(_, e) {
        t(_).deleteBuffer(t(e));
      }
      function qt(_, e) {
        t(_).deleteBuffer(t(e));
      }
      function Gt(_, e) {
        t(_).deleteFramebuffer(t(e));
      }
      function Vt(_, e) {
        t(_).deleteFramebuffer(t(e));
      }
      function Wt(_, e) {
        t(_).deleteProgram(t(e));
      }
      function Ut(_, e) {
        t(_).deleteProgram(t(e));
      }
      function zt(_, e) {
        t(_).deleteQuery(t(e));
      }
      function jt(_, e) {
        t(_).deleteRenderbuffer(t(e));
      }
      function Kt(_, e) {
        t(_).deleteRenderbuffer(t(e));
      }
      function Nt(_, e) {
        t(_).deleteSampler(t(e));
      }
      function Qt(_, e) {
        t(_).deleteShader(t(e));
      }
      function Xt(_, e) {
        t(_).deleteShader(t(e));
      }
      function $t(_, e) {
        t(_).deleteSync(t(e));
      }
      function Yt(_, e) {
        t(_).deleteTexture(t(e));
      }
      function Ht(_, e) {
        t(_).deleteTexture(t(e));
      }
      function Jt(_, e) {
        t(_).deleteVertexArrayOES(t(e));
      }
      function Zt(_, e) {
        t(_).deleteVertexArray(t(e));
      }
      function _n(_) {
        return t(_).deltaMode;
      }
      function en(_) {
        return t(_).deltaX;
      }
      function tn(_) {
        return t(_).deltaY;
      }
      function nn(_, e) {
        t(_).depthFunc(e >>> 0);
      }
      function cn(_, e) {
        t(_).depthFunc(e >>> 0);
      }
      function rn(_, e) {
        t(_).depthMask(e !== 0);
      }
      function bn(_, e) {
        t(_).depthMask(e !== 0);
      }
      function an(_, e, n) {
        t(_).depthRange(e, n);
      }
      function fn(_, e, n) {
        t(_).depthRange(e, n);
      }
      function on(_) {
        t(_).destroy();
      }
      function un(_) {
        const e = t(_).devicePixelContentBoxSize;
        return b(e);
      }
      function dn(_) {
        return t(_).devicePixelRatio;
      }
      function gn(_, e) {
        t(_).disableVertexAttribArray(e >>> 0);
      }
      function sn(_, e) {
        t(_).disableVertexAttribArray(e >>> 0);
      }
      function wn(_, e) {
        t(_).disable(e >>> 0);
      }
      function ln(_, e) {
        t(_).disable(e >>> 0);
      }
      function mn(_) {
        t(_).disconnect();
      }
      function pn(_) {
        t(_).disconnect();
      }
      function xn(_) {
        const e = t(_).document;
        return w(e) ? 0 : b(e);
      }
      function yn(_) {
        return t(_).done;
      }
      function hn(_, e, n, c, r) {
        t(_).drawArraysInstancedANGLE(e >>> 0, n, c, r);
      }
      function Sn(_, e, n, c, r) {
        t(_).drawArraysInstanced(e >>> 0, n, c, r);
      }
      function vn(_, e, n, c) {
        t(_).drawArrays(e >>> 0, n, c);
      }
      function In(_, e, n, c) {
        t(_).drawArrays(e >>> 0, n, c);
      }
      function An(_, e) {
        t(_).drawBuffersWEBGL(t(e));
      }
      function Dn(_, e) {
        t(_).drawBuffers(t(e));
      }
      function Pn(_, e, n, c, r, a) {
        t(_).drawElementsInstancedANGLE(e >>> 0, n, c >>> 0, r, a);
      }
      function Mn(_, e, n, c, r, a) {
        t(_).drawElementsInstanced(e >>> 0, n, c >>> 0, r, a);
      }
      function Fn(_, e, n, c, r, a) {
        t(_).drawIndexed(e >>> 0, n >>> 0, c >>> 0, r, a >>> 0);
      }
      function Tn(_, e, n, c, r) {
        t(_).draw(e >>> 0, n >>> 0, c >>> 0, r >>> 0);
      }
      function Bn(_, e) {
        t(_).enableVertexAttribArray(e >>> 0);
      }
      function kn(_, e) {
        t(_).enableVertexAttribArray(e >>> 0);
      }
      function Ln(_, e) {
        t(_).enable(e >>> 0);
      }
      function En(_, e) {
        t(_).enable(e >>> 0);
      }
      function Cn(_, e) {
        t(_).endQuery(e >>> 0);
      }
      function Rn(_) {
        t(_).end();
      }
      function On(_) {
        const e = t(_).entries();
        return b(e);
      }
      function qn(_, e) {
        let n, c;
        try {
          n = _, c = e, console.error(g(_, e));
        } finally {
          d.__wbindgen_export4(n, c, 1);
        }
      }
      function Gn(_) {
        console.error(t(_));
      }
      function Vn(_, e) {
        console.error(t(_), t(e));
      }
      function Wn(_, e, n) {
        const c = t(_).fenceSync(e >>> 0, n >>> 0);
        return w(c) ? 0 : b(c);
      }
      function Un(_) {
        const e = fetch(t(_));
        return b(e);
      }
      function zn(_, e) {
        const n = t(_).fetch(t(e));
        return b(n);
      }
      function jn(_) {
        const e = t(_).finish();
        return b(e);
      }
      function Kn(_, e) {
        const n = t(_).finish(t(e));
        return b(n);
      }
      function Nn(_) {
        t(_).flush();
      }
      function Qn(_) {
        t(_).flush();
      }
      function Xn() {
        return o(function(_) {
          t(_).focus();
        }, arguments);
      }
      function $n(_, e, n, c, r) {
        t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, c >>> 0, t(r));
      }
      function Yn(_, e, n, c, r) {
        t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, c >>> 0, t(r));
      }
      function Hn(_, e, n, c, r, a) {
        t(_).framebufferTexture2D(e >>> 0, n >>> 0, c >>> 0, t(r), a);
      }
      function Jn(_, e, n, c, r, a) {
        t(_).framebufferTexture2D(e >>> 0, n >>> 0, c >>> 0, t(r), a);
      }
      function Zn(_, e, n, c, r, a) {
        t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(c), r, a);
      }
      function _c(_, e, n, c, r, a, f) {
        t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(c), r, a, f);
      }
      function ec(_, e) {
        t(_).frontFace(e >>> 0);
      }
      function tc(_, e) {
        t(_).frontFace(e >>> 0);
      }
      function nc(_) {
        const e = t(_).fullscreenElement;
        return w(e) ? 0 : b(e);
      }
      function cc(_, e, n, c) {
        t(_).getBufferSubData(e >>> 0, n, t(c));
      }
      function rc(_) {
        const e = t(_).getCoalescedEvents;
        return b(e);
      }
      function bc(_) {
        const e = t(_).getCoalescedEvents();
        return b(e);
      }
      function ac() {
        return o(function(_, e) {
          const n = t(_).getComputedStyle(t(e));
          return w(n) ? 0 : b(n);
        }, arguments);
      }
      function fc() {
        return o(function(_, e, n) {
          const c = t(_).getContext(g(e, n));
          return w(c) ? 0 : b(c);
        }, arguments);
      }
      function oc() {
        return o(function(_, e, n) {
          const c = t(_).getContext(g(e, n));
          return w(c) ? 0 : b(c);
        }, arguments);
      }
      function uc() {
        return o(function(_, e, n, c) {
          const r = t(_).getContext(g(e, n), t(c));
          return w(r) ? 0 : b(r);
        }, arguments);
      }
      function dc() {
        return o(function(_, e, n, c) {
          const r = t(_).getContext(g(e, n), t(c));
          return w(r) ? 0 : b(r);
        }, arguments);
      }
      function ic() {
        return o(function(_) {
          const e = t(_).getCurrentTexture();
          return b(e);
        }, arguments);
      }
      function gc(_, e, n) {
        const c = t(_).getElementById(g(e, n));
        return w(c) ? 0 : b(c);
      }
      function sc() {
        return o(function(_, e, n) {
          const c = t(_).getExtension(g(e, n));
          return w(c) ? 0 : b(c);
        }, arguments);
      }
      function wc() {
        return o(function(_, e, n) {
          const c = t(_).getIndexedParameter(e >>> 0, n >>> 0);
          return b(c);
        }, arguments);
      }
      function lc() {
        return o(function(_, e, n) {
          const c = t(_).getMappedRange(e, n);
          return b(c);
        }, arguments);
      }
      function mc(_, e) {
        const n = Object.getOwnPropertyDescriptor(t(_), t(e));
        return b(n);
      }
      function pc() {
        return o(function(_, e) {
          const n = t(_).getParameter(e >>> 0);
          return b(n);
        }, arguments);
      }
      function xc() {
        return o(function(_, e) {
          const n = t(_).getParameter(e >>> 0);
          return b(n);
        }, arguments);
      }
      function yc(_) {
        const e = t(_).getPreferredCanvasFormat();
        return (P.indexOf(e) + 1 || 96) - 1;
      }
      function hc(_, e, n) {
        const c = t(e).getProgramInfoLog(t(n));
        var r = w(c) ? 0 : y(c, d.__wbindgen_export, d.__wbindgen_export2), a = p;
        l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
      }
      function Sc(_, e, n) {
        const c = t(e).getProgramInfoLog(t(n));
        var r = w(c) ? 0 : y(c, d.__wbindgen_export, d.__wbindgen_export2), a = p;
        l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
      }
      function vc(_, e, n) {
        const c = t(_).getProgramParameter(t(e), n >>> 0);
        return b(c);
      }
      function Ic(_, e, n) {
        const c = t(_).getProgramParameter(t(e), n >>> 0);
        return b(c);
      }
      function Ac() {
        return o(function(_, e, n, c) {
          const r = t(e).getPropertyValue(g(n, c)), a = y(r, d.__wbindgen_export, d.__wbindgen_export2), f = p;
          l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
        }, arguments);
      }
      function Dc(_, e, n) {
        const c = t(_).getQueryParameter(t(e), n >>> 0);
        return b(c);
      }
      function Pc() {
        return o(function(_, e) {
          t(_).getRandomValues(t(e));
        }, arguments);
      }
      function Mc(_, e, n) {
        const c = t(e).getShaderInfoLog(t(n));
        var r = w(c) ? 0 : y(c, d.__wbindgen_export, d.__wbindgen_export2), a = p;
        l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
      }
      function Fc(_, e, n) {
        const c = t(e).getShaderInfoLog(t(n));
        var r = w(c) ? 0 : y(c, d.__wbindgen_export, d.__wbindgen_export2), a = p;
        l().setInt32(_ + 4, a, true), l().setInt32(_ + 0, r, true);
      }
      function Tc(_, e, n) {
        const c = t(_).getShaderParameter(t(e), n >>> 0);
        return b(c);
      }
      function Bc(_, e, n) {
        const c = t(_).getShaderParameter(t(e), n >>> 0);
        return b(c);
      }
      function kc(_) {
        const e = t(_).getSupportedExtensions();
        return w(e) ? 0 : b(e);
      }
      function Lc(_) {
        const e = t(_).getSupportedProfiles();
        return w(e) ? 0 : b(e);
      }
      function Ec(_, e, n) {
        const c = t(_).getSyncParameter(t(e), n >>> 0);
        return b(c);
      }
      function Cc(_, e, n, c) {
        return t(_).getUniformBlockIndex(t(e), g(n, c));
      }
      function Rc(_, e, n, c) {
        const r = t(_).getUniformLocation(t(e), g(n, c));
        return w(r) ? 0 : b(r);
      }
      function Oc(_, e, n, c) {
        const r = t(_).getUniformLocation(t(e), g(n, c));
        return w(r) ? 0 : b(r);
      }
      function qc(_, e) {
        const n = t(_)[e >>> 0];
        return b(n);
      }
      function Gc() {
        return o(function(_, e) {
          const n = Reflect.get(t(_), t(e));
          return b(n);
        }, arguments);
      }
      function Vc(_, e) {
        const n = t(_)[e >>> 0];
        return w(n) ? 0 : b(n);
      }
      function Wc(_) {
        const e = t(_).gpu;
        return b(e);
      }
      function Uc() {
        return o(function(_, e) {
          return Reflect.has(t(_), t(e));
        }, arguments);
      }
      function zc(_) {
        const e = t(_).headers;
        return b(e);
      }
      function jc(_) {
        return t(_).height;
      }
      function Kc(_, e, n) {
        return t(_).includes(t(e), n);
      }
      function Nc(_) {
        console.info(t(_));
      }
      function Qc(_) {
        return t(_).inlineSize;
      }
      function Xc(_) {
        let e;
        try {
          e = t(_) instanceof GPUAdapter;
        } catch {
          e = false;
        }
        return e;
      }
      function $c(_) {
        let e;
        try {
          e = t(_) instanceof GPUCanvasContext;
        } catch {
          e = false;
        }
        return e;
      }
      function Yc(_) {
        let e;
        try {
          e = t(_) instanceof HTMLCanvasElement;
        } catch {
          e = false;
        }
        return e;
      }
      function Hc(_) {
        let e;
        try {
          e = t(_) instanceof Response;
        } catch {
          e = false;
        }
        return e;
      }
      function Jc(_) {
        let e;
        try {
          e = t(_) instanceof WebGL2RenderingContext;
        } catch {
          e = false;
        }
        return e;
      }
      function Zc(_) {
        let e;
        try {
          e = t(_) instanceof Window;
        } catch {
          e = false;
        }
        return e;
      }
      function _r() {
        return o(function(_, e, n) {
          t(_).invalidateFramebuffer(e >>> 0, t(n));
        }, arguments);
      }
      function er(_) {
        return Array.isArray(t(_));
      }
      function tr(_) {
        return t(_).isIntersecting;
      }
      function nr(_, e) {
        return Object.is(t(_), t(e));
      }
      function cr(_, e) {
        const n = t(e).key, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function rr(_, e) {
        const n = t(e).label, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function br(_) {
        return t(_).length;
      }
      function ar(_) {
        return t(_).length;
      }
      function fr(_, e) {
        t(_).linkProgram(t(e));
      }
      function or(_, e) {
        t(_).linkProgram(t(e));
      }
      function ur(_) {
        return t(_).location;
      }
      function dr(_) {
        const e = t(_).location;
        return b(e);
      }
      function ir(_) {
        console.log(t(_));
      }
      function gr(_, e, n, c) {
        const r = t(_).mapAsync(e >>> 0, n, c);
        return b(r);
      }
      function sr() {
        return o(function(_, e, n) {
          const c = t(_).matchMedia(g(e, n));
          return w(c) ? 0 : b(c);
        }, arguments);
      }
      function wr(_) {
        return t(_).matches;
      }
      function lr(_, e) {
        const n = t(e).media, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function mr(_) {
        return t(_).metaKey;
      }
      function pr(_) {
        return t(_).metaKey;
      }
      function xr(_) {
        return t(_).movementX;
      }
      function yr(_) {
        return t(_).movementY;
      }
      function hr(_) {
        const e = t(_).msCrypto;
        return b(e);
      }
      function Sr(_) {
        const e = t(_).navigator;
        return b(e);
      }
      function vr(_) {
        const e = t(_).navigator;
        return b(e);
      }
      function Ir() {
        return o(function(_) {
          const e = new ResizeObserver(t(_));
          return b(e);
        }, arguments);
      }
      function Ar() {
        const _ = new Object();
        return b(_);
      }
      function Dr() {
        const _ = new Array();
        return b(_);
      }
      function Pr() {
        return o(function(_, e) {
          const n = new Worker(g(_, e));
          return b(n);
        }, arguments);
      }
      function Mr() {
        return o(function() {
          const _ = new Headers();
          return b(_);
        }, arguments);
      }
      function Fr() {
        return o(function() {
          const _ = new MessageChannel();
          return b(_);
        }, arguments);
      }
      function Tr() {
        const _ = new Error();
        return b(_);
      }
      function Br() {
        return o(function(_) {
          const e = new IntersectionObserver(t(_));
          return b(e);
        }, arguments);
      }
      function kr() {
        return o(function() {
          const _ = new AbortController();
          return b(_);
        }, arguments);
      }
      function Lr(_) {
        const e = new Uint8Array(t(_));
        return b(e);
      }
      function Er(_, e) {
        const n = new Uint8Array(W(_, e));
        return b(n);
      }
      function Cr(_, e) {
        const n = new Function(g(_, e));
        return b(n);
      }
      function Rr(_, e, n) {
        const c = new Uint8Array(t(_), e >>> 0, n >>> 0);
        return b(c);
      }
      function Or(_) {
        const e = new Uint8Array(_ >>> 0);
        return b(e);
      }
      function qr() {
        return o(function(_, e, n) {
          const c = new Request(g(_, e), t(n));
          return b(c);
        }, arguments);
      }
      function Gr() {
        return o(function(_, e) {
          const n = new Blob(t(_), t(e));
          return b(n);
        }, arguments);
      }
      function Vr() {
        return o(function(_) {
          const e = t(_).next();
          return b(e);
        }, arguments);
      }
      function Wr(_) {
        const e = t(_).node;
        return b(e);
      }
      function Ur(_) {
        return t(_).now();
      }
      function zr(_) {
        return t(_).now();
      }
      function jr(_, e, n) {
        t(_).observe(t(e), t(n));
      }
      function Kr(_, e) {
        t(_).observe(t(e));
      }
      function Nr(_, e) {
        t(_).observe(t(e));
      }
      function Qr(_, e) {
        const n = Array.of(t(_), t(e));
        return b(n);
      }
      function Xr(_) {
        const e = Array.of(t(_));
        return b(e);
      }
      function $r(_) {
        return t(_).offsetX;
      }
      function Yr(_) {
        return t(_).offsetY;
      }
      function Hr(_) {
        const e = t(_).onSubmittedWorkDone();
        return b(e);
      }
      function Jr() {
        return o(function(_, e) {
          const n = t(e).origin, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
          l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
        }, arguments);
      }
      function Zr(_) {
        const e = t(_).performance;
        return b(e);
      }
      function _b(_) {
        return t(_).persisted;
      }
      function eb(_, e, n) {
        t(_).pixelStorei(e >>> 0, n);
      }
      function tb(_, e, n) {
        t(_).pixelStorei(e >>> 0, n);
      }
      function nb(_) {
        t(_).play();
      }
      function cb(_) {
        return t(_).pointerId;
      }
      function rb(_, e) {
        const n = t(e).pointerType, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function bb(_, e, n) {
        t(_).polygonOffset(e, n);
      }
      function ab(_, e, n) {
        t(_).polygonOffset(e, n);
      }
      function fb(_) {
        const e = t(_).port1;
        return b(e);
      }
      function ob(_) {
        const e = t(_).port2;
        return b(e);
      }
      function ub() {
        return o(function(_, e) {
          t(_).postMessage(t(e));
        }, arguments);
      }
      function db() {
        return o(function(_, e, n) {
          t(_).postMessage(t(e), t(n));
        }, arguments);
      }
      function ib(_, e, n) {
        const c = t(_).postTask(t(e), t(n));
        return b(c);
      }
      function gb(_) {
        return t(_).pressure;
      }
      function sb(_) {
        t(_).preventDefault();
      }
      function wb(_) {
        const e = t(_).process;
        return b(e);
      }
      function lb() {
        const _ = ResizeObserverEntry.prototype;
        return b(_);
      }
      function mb(_, e, n) {
        Uint8Array.prototype.set.call(W(_, e), t(n));
      }
      function pb(_, e) {
        return t(_).push(t(e));
      }
      function xb(_, e, n) {
        t(_).queryCounterEXT(t(e), n >>> 0);
      }
      function yb() {
        return o(function(_, e, n) {
          const c = t(_).querySelectorAll(g(e, n));
          return b(c);
        }, arguments);
      }
      function hb() {
        return o(function(_, e, n) {
          const c = t(_).querySelector(g(e, n));
          return w(c) ? 0 : b(c);
        }, arguments);
      }
      function Sb(_) {
        const e = t(_).queueMicrotask;
        return b(e);
      }
      function vb(_) {
        queueMicrotask(t(_));
      }
      function Ib(_, e) {
        t(_).queueMicrotask(t(e));
      }
      function Ab(_) {
        const e = t(_).queue;
        return b(e);
      }
      function Db() {
        return o(function(_, e) {
          t(_).randomFillSync(H(e));
        }, arguments);
      }
      function Pb(_, e) {
        t(_).readBuffer(e >>> 0);
      }
      function Mb() {
        return o(function(_, e, n, c, r, a, f, u) {
          t(_).readPixels(e, n, c, r, a >>> 0, f >>> 0, t(u));
        }, arguments);
      }
      function Fb() {
        return o(function(_, e, n, c, r, a, f, u) {
          t(_).readPixels(e, n, c, r, a >>> 0, f >>> 0, u);
        }, arguments);
      }
      function Tb() {
        return o(function(_, e, n, c, r, a, f, u) {
          t(_).readPixels(e, n, c, r, a >>> 0, f >>> 0, t(u));
        }, arguments);
      }
      function Bb() {
        return o(function(_, e, n, c) {
          t(_).removeEventListener(g(e, n), t(c));
        }, arguments);
      }
      function kb() {
        return o(function(_, e) {
          t(_).removeListener(t(e));
        }, arguments);
      }
      function Lb() {
        return o(function(_, e, n, c) {
          const r = t(e).removeProperty(g(n, c)), a = y(r, d.__wbindgen_export, d.__wbindgen_export2), f = p;
          l().setInt32(_ + 4, f, true), l().setInt32(_ + 0, a, true);
        }, arguments);
      }
      function Eb(_, e, n, c, r, a) {
        t(_).renderbufferStorageMultisample(e >>> 0, n, c >>> 0, r, a);
      }
      function Cb(_, e, n, c, r) {
        t(_).renderbufferStorage(e >>> 0, n >>> 0, c, r);
      }
      function Rb(_, e, n, c, r) {
        t(_).renderbufferStorage(e >>> 0, n >>> 0, c, r);
      }
      function Ob(_) {
        return t(_).repeat;
      }
      function qb(_, e) {
        const n = t(_).requestAdapter(t(e));
        return b(n);
      }
      function Gb() {
        return o(function(_, e) {
          return t(_).requestAnimationFrame(t(e));
        }, arguments);
      }
      function Vb(_, e) {
        const n = t(_).requestDevice(t(e));
        return b(n);
      }
      function Wb(_) {
        const e = t(_).requestFullscreen;
        return b(e);
      }
      function Ub(_) {
        const e = t(_).requestFullscreen();
        return b(e);
      }
      function zb(_) {
        const e = t(_).requestIdleCallback;
        return b(e);
      }
      function jb() {
        return o(function(_, e) {
          return t(_).requestIdleCallback(t(e));
        }, arguments);
      }
      function Kb() {
        return o(function() {
          const _ = module.require;
          return b(_);
        }, arguments);
      }
      function Nb(_) {
        const e = Promise.resolve(t(_));
        return b(e);
      }
      function Qb() {
        return o(function(_, e) {
          URL.revokeObjectURL(g(_, e));
        }, arguments);
      }
      function Xb(_, e, n, c) {
        t(_).samplerParameterf(t(e), n >>> 0, c);
      }
      function $b(_, e, n, c) {
        t(_).samplerParameteri(t(e), n >>> 0, c);
      }
      function Yb(_) {
        const e = t(_).scheduler;
        return b(e);
      }
      function Hb(_) {
        const e = t(_).scheduler;
        return b(e);
      }
      function Jb(_, e, n, c, r) {
        t(_).scissor(e, n, c, r);
      }
      function Zb(_, e, n, c, r) {
        t(_).scissor(e, n, c, r);
      }
      function _a() {
        return o(function(_, e, n, c, r) {
          t(_).setAttribute(g(e, n), g(c, r));
        }, arguments);
      }
      function ea(_, e, n) {
        t(_).setBindGroup(e >>> 0, t(n));
      }
      function ta() {
        return o(function(_, e, n, c, r, a, f) {
          t(_).setBindGroup(e >>> 0, t(n), F(c, r), a, f >>> 0);
        }, arguments);
      }
      function na(_, e, n, c, r) {
        t(_).setIndexBuffer(t(e), N[n], c, r);
      }
      function ca(_, e, n, c) {
        t(_).setIndexBuffer(t(e), N[n], c);
      }
      function ra(_, e) {
        t(_).setPipeline(t(e));
      }
      function ba() {
        return o(function(_, e) {
          t(_).setPointerCapture(e);
        }, arguments);
      }
      function aa() {
        return o(function(_, e, n, c, r) {
          t(_).setProperty(g(e, n), g(c, r));
        }, arguments);
      }
      function fa(_, e) {
        t(_).setStencilReference(e >>> 0);
      }
      function oa() {
        return o(function(_, e) {
          return t(_).setTimeout(t(e));
        }, arguments);
      }
      function ua(_, e) {
        const n = setTimeout(t(_), e);
        return b(n);
      }
      function da() {
        return o(function(_, e, n) {
          return t(_).setTimeout(t(e), n);
        }, arguments);
      }
      function ia(_, e, n, c, r) {
        t(_).setVertexBuffer(e >>> 0, t(n), c, r);
      }
      function ga(_, e, n, c) {
        t(_).setVertexBuffer(e >>> 0, t(n), c);
      }
      function sa(_, e, n) {
        t(_).set(t(e), n >>> 0);
      }
      function wa() {
        return o(function(_, e, n) {
          return Reflect.set(t(_), t(e), t(n));
        }, arguments);
      }
      function la(_, e) {
        t(_).a = e;
      }
      function ma(_, e) {
        t(_).access = di[e];
      }
      function pa(_, e) {
        t(_).addressModeU = j[e];
      }
      function xa(_, e) {
        t(_).addressModeV = j[e];
      }
      function ya(_, e) {
        t(_).addressModeW = j[e];
      }
      function ha(_, e) {
        t(_).alpha = t(e);
      }
      function Sa(_, e) {
        t(_).alphaMode = ci[e];
      }
      function va(_, e) {
        t(_).alphaToCoverageEnabled = e !== 0;
      }
      function Ia(_, e) {
        t(_).arrayLayerCount = e >>> 0;
      }
      function Aa(_, e) {
        t(_).arrayStride = e;
      }
      function Da(_, e) {
        t(_).aspect = e_[e];
      }
      function Pa(_, e) {
        t(_).aspect = e_[e];
      }
      function Ma(_, e) {
        t(_).attributes = t(e);
      }
      function Fa(_, e) {
        t(_).b = e;
      }
      function Ta(_, e) {
        t(_).baseArrayLayer = e >>> 0;
      }
      function Ba(_, e) {
        t(_).baseMipLevel = e >>> 0;
      }
      function ka(_, e) {
        t(_).beginningOfPassWriteIndex = e >>> 0;
      }
      function La(_, e) {
        t(_).bindGroupLayouts = t(e);
      }
      function Ea(_, e) {
        t(_).binding = e >>> 0;
      }
      function Ca(_, e) {
        t(_).binding = e >>> 0;
      }
      function Ra(_, e) {
        t(_).blend = t(e);
      }
      function Oa(_, e) {
        t(_).body = t(e);
      }
      function qa(_, e) {
        t(_).box = xi[e];
      }
      function Ga(_, e) {
        t(_).buffer = t(e);
      }
      function Va(_, e) {
        t(_).buffer = t(e);
      }
      function Wa(_, e) {
        t(_).buffers = t(e);
      }
      function Ua(_, e) {
        t(_).bytesPerRow = e >>> 0;
      }
      function za(_, e) {
        t(_).cache = li[e];
      }
      function ja(_, e) {
        t(_).clearValue = t(e);
      }
      function Ka(_, e, n) {
        t(_).code = g(e, n);
      }
      function Na(_, e) {
        t(_).color = t(e);
      }
      function Qa(_, e) {
        t(_).colorAttachments = t(e);
      }
      function Xa(_, e) {
        t(_).compare = K[e];
      }
      function $a(_, e) {
        t(_).compare = K[e];
      }
      function Ya(_, e) {
        t(_).count = e >>> 0;
      }
      function Ha(_, e) {
        t(_).credentials = mi[e];
      }
      function Ja(_, e) {
        t(_).cullMode = ri[e];
      }
      function Za(_, e) {
        t(_).depthBias = e;
      }
      function _f(_, e) {
        t(_).depthBiasClamp = e;
      }
      function ef(_, e) {
        t(_).depthBiasSlopeScale = e;
      }
      function tf(_, e) {
        t(_).depthClearValue = e;
      }
      function nf(_, e) {
        t(_).depthCompare = K[e];
      }
      function cf(_, e) {
        t(_).depthFailOp = X[e];
      }
      function rf(_, e) {
        t(_).depthLoadOp = Q[e];
      }
      function bf(_, e) {
        t(_).depthOrArrayLayers = e >>> 0;
      }
      function af(_, e) {
        t(_).depthReadOnly = e !== 0;
      }
      function ff(_, e) {
        t(_).depthStencil = t(e);
      }
      function of(_, e) {
        t(_).depthStencilAttachment = t(e);
      }
      function uf(_, e) {
        t(_).depthStoreOp = $[e];
      }
      function df(_, e) {
        t(_).depthWriteEnabled = e !== 0;
      }
      function gf(_, e) {
        t(_).device = t(e);
      }
      function sf(_, e) {
        t(_).dimension = ii[e];
      }
      function wf(_, e) {
        t(_).dimension = Y[e];
      }
      function lf(_, e) {
        t(_).dstFactor = Z[e];
      }
      function mf(_, e) {
        t(_).endOfPassWriteIndex = e >>> 0;
      }
      function pf(_, e) {
        t(_).entries = t(e);
      }
      function xf(_, e) {
        t(_).entries = t(e);
      }
      function yf(_, e, n) {
        t(_).entryPoint = g(e, n);
      }
      function hf(_, e, n) {
        t(_).entryPoint = g(e, n);
      }
      function Sf(_, e) {
        t(_).externalTexture = t(e);
      }
      function vf(_, e) {
        t(_).failOp = X[e];
      }
      function If(_, e) {
        t(_).format = P[e];
      }
      function Af(_, e) {
        t(_).format = P[e];
      }
      function Df(_, e) {
        t(_).format = P[e];
      }
      function Pf(_, e) {
        t(_).format = si[e];
      }
      function Mf(_, e) {
        t(_).format = P[e];
      }
      function Ff(_, e) {
        t(_).format = P[e];
      }
      function Tf(_, e) {
        t(_).format = P[e];
      }
      function Bf(_, e) {
        t(_).fragment = t(e);
      }
      function kf(_, e) {
        t(_).frontFace = bi[e];
      }
      function Lf(_, e) {
        t(_).g = e;
      }
      function Ef(_, e) {
        t(_).hasDynamicOffset = e !== 0;
      }
      function Cf(_, e) {
        t(_).headers = t(e);
      }
      function Rf(_, e) {
        t(_).height = e >>> 0;
      }
      function Of(_, e) {
        t(_).height = e >>> 0;
      }
      function qf(_, e) {
        t(_).height = e >>> 0;
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
      function Qf(_, e, n) {
        t(_).label = g(e, n);
      }
      function Xf(_, e, n) {
        t(_).label = g(e, n);
      }
      function $f(_, e, n) {
        t(_).label = g(e, n);
      }
      function Yf(_, e, n) {
        t(_).label = g(e, n);
      }
      function Hf(_, e, n) {
        t(_).label = g(e, n);
      }
      function Jf(_, e) {
        t(_).layout = t(e);
      }
      function Zf(_, e) {
        t(_).layout = t(e);
      }
      function _o(_, e) {
        t(_).loadOp = Q[e];
      }
      function eo(_, e) {
        t(_).lodMaxClamp = e;
      }
      function to(_, e) {
        t(_).lodMinClamp = e;
      }
      function no(_, e) {
        t(_).magFilter = __[e];
      }
      function co(_, e) {
        t(_).mappedAtCreation = e !== 0;
      }
      function ro(_, e) {
        t(_).mask = e >>> 0;
      }
      function bo(_, e) {
        t(_).maxAnisotropy = e;
      }
      function ao(_, e, n) {
        t(_).method = g(e, n);
      }
      function fo(_, e) {
        t(_).minBindingSize = e;
      }
      function oo(_, e) {
        t(_).minFilter = __[e];
      }
      function uo(_, e) {
        t(_).mipLevel = e >>> 0;
      }
      function io(_, e) {
        t(_).mipLevelCount = e >>> 0;
      }
      function go(_, e) {
        t(_).mipLevelCount = e >>> 0;
      }
      function so(_, e) {
        t(_).mipmapFilter = ai[e];
      }
      function wo(_, e) {
        t(_).mode = pi[e];
      }
      function lo(_, e) {
        t(_).module = t(e);
      }
      function mo(_, e) {
        t(_).module = t(e);
      }
      function po(_, e) {
        t(_).multisample = t(e);
      }
      function xo(_, e) {
        t(_).multisampled = e !== 0;
      }
      function yo(_, e) {
        t(_).offset = e;
      }
      function ho(_, e) {
        t(_).offset = e;
      }
      function So(_, e) {
        t(_).offset = e;
      }
      function vo(_, e) {
        t(_).onmessage = t(e);
      }
      function Io(_, e) {
        t(_).operation = ti[e];
      }
      function Ao(_, e) {
        t(_).origin = t(e);
      }
      function Do(_, e) {
        t(_).passOp = X[e];
      }
      function Po(_, e) {
        t(_).powerPreference = fi[e];
      }
      function Mo(_, e) {
        t(_).primitive = t(e);
      }
      function Fo(_, e) {
        t(_).querySet = t(e);
      }
      function To(_, e) {
        t(_).r = e;
      }
      function Bo(_, e) {
        t(_).requiredFeatures = t(e);
      }
      function ko(_, e) {
        t(_).requiredLimits = t(e);
      }
      function Lo(_, e) {
        t(_).resolveTarget = t(e);
      }
      function Eo(_, e) {
        t(_).resource = t(e);
      }
      function Co(_, e) {
        t(_).rowsPerImage = e >>> 0;
      }
      function Ro(_, e) {
        t(_).sampleCount = e >>> 0;
      }
      function Oo(_, e) {
        t(_).sampleType = gi[e];
      }
      function qo(_, e) {
        t(_).sampler = t(e);
      }
      function Go(_, e) {
        t(_).shaderLocation = e >>> 0;
      }
      function Vo(_, e) {
        t(_).signal = t(e);
      }
      function Wo(_, e) {
        t(_).size = e;
      }
      function Uo(_, e) {
        t(_).size = e;
      }
      function zo(_, e) {
        t(_).size = t(e);
      }
      function jo(_, e) {
        t(_).srcFactor = Z[e];
      }
      function Ko(_, e) {
        t(_).stencilBack = t(e);
      }
      function No(_, e) {
        t(_).stencilClearValue = e >>> 0;
      }
      function Qo(_, e) {
        t(_).stencilFront = t(e);
      }
      function Xo(_, e) {
        t(_).stencilLoadOp = Q[e];
      }
      function $o(_, e) {
        t(_).stencilReadMask = e >>> 0;
      }
      function Yo(_, e) {
        t(_).stencilReadOnly = e !== 0;
      }
      function Ho(_, e) {
        t(_).stencilStoreOp = $[e];
      }
      function Jo(_, e) {
        t(_).stencilWriteMask = e >>> 0;
      }
      function Zo(_, e) {
        t(_).stepMode = wi[e];
      }
      function _u(_, e) {
        t(_).storageTexture = t(e);
      }
      function eu(_, e) {
        t(_).storeOp = $[e];
      }
      function tu(_, e) {
        t(_).stripIndexFormat = N[e];
      }
      function nu(_, e) {
        t(_).targets = t(e);
      }
      function cu(_, e) {
        t(_).texture = t(e);
      }
      function ru(_, e) {
        t(_).texture = t(e);
      }
      function bu(_, e) {
        t(_).timestampWrites = t(e);
      }
      function au(_, e) {
        t(_).topology = oi[e];
      }
      function fu(_, e, n) {
        t(_).type = g(e, n);
      }
      function ou(_, e) {
        t(_).type = ni[e];
      }
      function uu(_, e) {
        t(_).type = ui[e];
      }
      function du(_, e) {
        t(_).unclippedDepth = e !== 0;
      }
      function iu(_, e) {
        t(_).usage = e >>> 0;
      }
      function gu(_, e) {
        t(_).usage = e >>> 0;
      }
      function su(_, e) {
        t(_).usage = e >>> 0;
      }
      function wu(_, e) {
        t(_).usage = e >>> 0;
      }
      function lu(_, e) {
        t(_).vertex = t(e);
      }
      function mu(_, e) {
        t(_).view = t(e);
      }
      function pu(_, e) {
        t(_).view = t(e);
      }
      function xu(_, e) {
        t(_).viewDimension = Y[e];
      }
      function yu(_, e) {
        t(_).viewDimension = Y[e];
      }
      function hu(_, e) {
        t(_).viewFormats = t(e);
      }
      function Su(_, e) {
        t(_).viewFormats = t(e);
      }
      function vu(_, e) {
        t(_).visibility = e >>> 0;
      }
      function Iu(_, e) {
        t(_).width = e >>> 0;
      }
      function Au(_, e) {
        t(_).width = e >>> 0;
      }
      function Du(_, e) {
        t(_).width = e >>> 0;
      }
      function Pu(_, e) {
        t(_).writeMask = e >>> 0;
      }
      function Mu(_, e) {
        t(_).x = e >>> 0;
      }
      function Fu(_, e) {
        t(_).y = e >>> 0;
      }
      function Tu(_, e) {
        t(_).z = e >>> 0;
      }
      function Bu(_, e, n, c) {
        t(_).shaderSource(t(e), g(n, c));
      }
      function ku(_, e, n, c) {
        t(_).shaderSource(t(e), g(n, c));
      }
      function Lu(_) {
        return t(_).shiftKey;
      }
      function Eu(_) {
        return t(_).shiftKey;
      }
      function Cu(_) {
        const e = t(_).signal;
        return b(e);
      }
      function Ru(_, e) {
        const n = t(e).stack, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function Ou(_) {
        t(_).start();
      }
      function qu() {
        const _ = typeof global > "u" ? null : global;
        return w(_) ? 0 : b(_);
      }
      function Gu() {
        const _ = typeof globalThis > "u" ? null : globalThis;
        return w(_) ? 0 : b(_);
      }
      function Vu() {
        const _ = typeof self > "u" ? null : self;
        return w(_) ? 0 : b(_);
      }
      function Wu() {
        const _ = typeof window > "u" ? null : window;
        return w(_) ? 0 : b(_);
      }
      function Uu(_) {
        return t(_).status;
      }
      function zu(_, e, n, c, r) {
        t(_).stencilFuncSeparate(e >>> 0, n >>> 0, c, r >>> 0);
      }
      function ju(_, e, n, c, r) {
        t(_).stencilFuncSeparate(e >>> 0, n >>> 0, c, r >>> 0);
      }
      function Ku(_, e, n) {
        t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
      }
      function Nu(_, e, n) {
        t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
      }
      function Qu(_, e) {
        t(_).stencilMask(e >>> 0);
      }
      function Xu(_, e) {
        t(_).stencilMask(e >>> 0);
      }
      function $u(_, e, n, c, r) {
        t(_).stencilOpSeparate(e >>> 0, n >>> 0, c >>> 0, r >>> 0);
      }
      function Yu(_, e, n, c, r) {
        t(_).stencilOpSeparate(e >>> 0, n >>> 0, c >>> 0, r >>> 0);
      }
      function Hu(_) {
        const e = t(_).style;
        return b(e);
      }
      function Ju(_, e, n) {
        const c = t(_).subarray(e >>> 0, n >>> 0);
        return b(c);
      }
      function Zu(_, e) {
        t(_).submit(t(e));
      }
      function _0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function e0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, s);
        }, arguments);
      }
      function t0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function n0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m) {
          t(_).texImage3D(e >>> 0, n, c, r, a, f, u, i >>> 0, s >>> 0, m);
        }, arguments);
      }
      function c0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m) {
          t(_).texImage3D(e >>> 0, n, c, r, a, f, u, i >>> 0, s >>> 0, t(m));
        }, arguments);
      }
      function r0(_, e, n, c) {
        t(_).texParameteri(e >>> 0, n >>> 0, c);
      }
      function b0(_, e, n, c) {
        t(_).texParameteri(e >>> 0, n >>> 0, c);
      }
      function a0(_, e, n, c, r, a) {
        t(_).texStorage2D(e >>> 0, n, c >>> 0, r, a);
      }
      function f0(_, e, n, c, r, a, f) {
        t(_).texStorage3D(e >>> 0, n, c >>> 0, r, a, f);
      }
      function o0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function u0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function d0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function i0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function g0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function s0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function w0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function l0() {
        return o(function(_, e, n, c, r, a, f, u, i, s) {
          t(_).texSubImage2D(e >>> 0, n, c, r, a, f, u >>> 0, i >>> 0, s);
        }, arguments);
      }
      function m0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function p0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function x0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function y0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function h0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function S0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, h);
        }, arguments);
      }
      function v0() {
        return o(function(_, e, n, c, r, a, f, u, i, s, m, h) {
          t(_).texSubImage3D(e >>> 0, n, c, r, a, f, u, i, s >>> 0, m >>> 0, t(h));
        }, arguments);
      }
      function I0() {
        return o(function(_) {
          const e = t(_).text();
          return b(e);
        }, arguments);
      }
      function A0(_, e, n) {
        const c = t(_).then(t(e), t(n));
        return b(c);
      }
      function D0(_, e) {
        const n = t(_).then(t(e));
        return b(n);
      }
      function P0(_, e, n) {
        t(_).uniform1f(t(e), n);
      }
      function M0(_, e, n) {
        t(_).uniform1f(t(e), n);
      }
      function F0(_, e, n) {
        t(_).uniform1i(t(e), n);
      }
      function T0(_, e, n) {
        t(_).uniform1i(t(e), n);
      }
      function B0(_, e, n) {
        t(_).uniform1ui(t(e), n >>> 0);
      }
      function k0(_, e, n, c) {
        t(_).uniform2fv(t(e), x(n, c));
      }
      function L0(_, e, n, c) {
        t(_).uniform2fv(t(e), x(n, c));
      }
      function E0(_, e, n, c) {
        t(_).uniform2iv(t(e), A(n, c));
      }
      function C0(_, e, n, c) {
        t(_).uniform2iv(t(e), A(n, c));
      }
      function R0(_, e, n, c) {
        t(_).uniform2uiv(t(e), F(n, c));
      }
      function O0(_, e, n, c) {
        t(_).uniform3fv(t(e), x(n, c));
      }
      function q0(_, e, n, c) {
        t(_).uniform3fv(t(e), x(n, c));
      }
      function G0(_, e, n, c) {
        t(_).uniform3iv(t(e), A(n, c));
      }
      function V0(_, e, n, c) {
        t(_).uniform3iv(t(e), A(n, c));
      }
      function W0(_, e, n, c) {
        t(_).uniform3uiv(t(e), F(n, c));
      }
      function U0(_, e, n, c, r, a) {
        t(_).uniform4f(t(e), n, c, r, a);
      }
      function z0(_, e, n, c, r, a) {
        t(_).uniform4f(t(e), n, c, r, a);
      }
      function j0(_, e, n, c) {
        t(_).uniform4fv(t(e), x(n, c));
      }
      function K0(_, e, n, c) {
        t(_).uniform4fv(t(e), x(n, c));
      }
      function N0(_, e, n, c) {
        t(_).uniform4iv(t(e), A(n, c));
      }
      function Q0(_, e, n, c) {
        t(_).uniform4iv(t(e), A(n, c));
      }
      function X0(_, e, n, c) {
        t(_).uniform4uiv(t(e), F(n, c));
      }
      function $0(_, e, n, c) {
        t(_).uniformBlockBinding(t(e), n >>> 0, c >>> 0);
      }
      function Y0(_, e, n, c, r) {
        t(_).uniformMatrix2fv(t(e), n !== 0, x(c, r));
      }
      function H0(_, e, n, c, r) {
        t(_).uniformMatrix2fv(t(e), n !== 0, x(c, r));
      }
      function J0(_, e, n, c, r) {
        t(_).uniformMatrix2x3fv(t(e), n !== 0, x(c, r));
      }
      function Z0(_, e, n, c, r) {
        t(_).uniformMatrix2x4fv(t(e), n !== 0, x(c, r));
      }
      function _d(_, e, n, c, r) {
        t(_).uniformMatrix3fv(t(e), n !== 0, x(c, r));
      }
      function ed(_, e, n, c, r) {
        t(_).uniformMatrix3fv(t(e), n !== 0, x(c, r));
      }
      function td(_, e, n, c, r) {
        t(_).uniformMatrix3x2fv(t(e), n !== 0, x(c, r));
      }
      function nd(_, e, n, c, r) {
        t(_).uniformMatrix3x4fv(t(e), n !== 0, x(c, r));
      }
      function cd(_, e, n, c, r) {
        t(_).uniformMatrix4fv(t(e), n !== 0, x(c, r));
      }
      function rd(_, e, n, c, r) {
        t(_).uniformMatrix4fv(t(e), n !== 0, x(c, r));
      }
      function bd(_, e, n, c, r) {
        t(_).uniformMatrix4x2fv(t(e), n !== 0, x(c, r));
      }
      function ad(_, e, n, c, r) {
        t(_).uniformMatrix4x3fv(t(e), n !== 0, x(c, r));
      }
      function fd(_) {
        t(_).unmap();
      }
      function od(_, e) {
        t(_).unobserve(t(e));
      }
      function ud(_, e) {
        const n = t(e).url, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
        l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
      }
      function dd(_, e) {
        t(_).useProgram(t(e));
      }
      function id(_, e) {
        t(_).useProgram(t(e));
      }
      function gd(_) {
        const e = t(_).userAgentData;
        return w(e) ? 0 : b(e);
      }
      function sd() {
        return o(function(_, e) {
          const n = t(e).userAgent, c = y(n, d.__wbindgen_export, d.__wbindgen_export2), r = p;
          l().setInt32(_ + 4, r, true), l().setInt32(_ + 0, c, true);
        }, arguments);
      }
      function wd(_) {
        const e = t(_).value;
        return b(e);
      }
      function ld(_) {
        const e = t(_).versions;
        return b(e);
      }
      function md(_, e, n) {
        t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
      }
      function pd(_, e, n) {
        t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
      }
      function xd(_, e, n, c, r, a) {
        t(_).vertexAttribIPointer(e >>> 0, n, c >>> 0, r, a);
      }
      function yd(_, e, n, c, r, a, f) {
        t(_).vertexAttribPointer(e >>> 0, n, c >>> 0, r !== 0, a, f);
      }
      function hd(_, e, n, c, r, a, f) {
        t(_).vertexAttribPointer(e >>> 0, n, c >>> 0, r !== 0, a, f);
      }
      function Sd(_, e, n, c, r) {
        t(_).viewport(e, n, c, r);
      }
      function vd(_, e, n, c, r) {
        t(_).viewport(e, n, c, r);
      }
      function Id(_) {
        const e = t(_).visibilityState;
        return (yi.indexOf(e) + 1 || 3) - 1;
      }
      function Ad(_) {
        console.warn(t(_));
      }
      function Dd(_) {
        const e = t(_).webkitFullscreenElement;
        return w(e) ? 0 : b(e);
      }
      function Pd(_) {
        t(_).webkitRequestFullscreen();
      }
      function Md(_) {
        return t(_).width;
      }
      function Fd() {
        return o(function(_, e, n, c, r, a) {
          t(_).writeTexture(t(e), W(n, c), t(r), t(a));
        }, arguments);
      }
      function Td(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, ei);
        return b(n);
      }
      function Bd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function kd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function Ld(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function Ed(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function Cd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function Rd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function Od(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, D);
        return b(n);
      }
      function qd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_3233, Jd);
        return b(n);
      }
      function Gd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_5072, _i);
        return b(n);
      }
      function Vd(_, e) {
        const n = v(_, e, d.__wasm_bindgen_func_elem_1556, Zd);
        return b(n);
      }
      function Wd(_) {
        return b(_);
      }
      function Ud(_, e) {
        const n = x(_, e);
        return b(n);
      }
      function zd(_, e) {
        const n = Si(_, e);
        return b(n);
      }
      function jd(_, e) {
        const n = A(_, e);
        return b(n);
      }
      function Kd(_, e) {
        const n = vi(_, e);
        return b(n);
      }
      function Nd(_, e) {
        const n = Ii(_, e);
        return b(n);
      }
      function Qd(_, e) {
        const n = F(_, e);
        return b(n);
      }
      function Xd(_, e) {
        const n = W(_, e);
        return b(n);
      }
      function $d(_, e) {
        const n = g(_, e);
        return b(n);
      }
      function Yd(_) {
        const e = t(_);
        return b(e);
      }
      function Hd(_) {
        H(_);
      }
      function Jd(_, e) {
        d.__wasm_bindgen_func_elem_3564(_, e);
      }
      function Zd(_, e) {
        d.__wasm_bindgen_func_elem_1601(_, e);
      }
      function D(_, e, n) {
        d.__wasm_bindgen_func_elem_3566(_, e, b(n));
      }
      function _i(_, e, n) {
        d.__wasm_bindgen_func_elem_5073(_, e, b(n));
      }
      function ei(_, e, n, c) {
        d.__wasm_bindgen_func_elem_3572(_, e, b(n), b(c));
      }
      const j = [
        "clamp-to-edge",
        "repeat",
        "mirror-repeat"
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
      ], ti = [
        "add",
        "subtract",
        "reverse-subtract",
        "min",
        "max"
      ], ni = [
        "uniform",
        "storage",
        "read-only-storage"
      ], ci = [
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
      ], ri = [
        "none",
        "front",
        "back"
      ], __ = [
        "nearest",
        "linear"
      ], bi = [
        "ccw",
        "cw"
      ], N = [
        "uint16",
        "uint32"
      ], Q = [
        "load",
        "clear"
      ], ai = [
        "nearest",
        "linear"
      ], fi = [
        "low-power",
        "high-performance"
      ], oi = [
        "point-list",
        "line-list",
        "line-strip",
        "triangle-list",
        "triangle-strip"
      ], ui = [
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
      ], di = [
        "write-only",
        "read-only",
        "read-write"
      ], $ = [
        "store",
        "discard"
      ], e_ = [
        "all",
        "stencil-only",
        "depth-only"
      ], ii = [
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
      ], gi = [
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
      ], si = [
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
      ], wi = [
        "vertex",
        "instance"
      ], li = [
        "default",
        "no-store",
        "reload",
        "no-cache",
        "force-cache",
        "only-if-cached"
      ], mi = [
        "omit",
        "same-origin",
        "include"
      ], pi = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], xi = [
        "border-box",
        "content-box",
        "device-pixel-content-box"
      ], yi = [
        "hidden",
        "visible"
      ];
      function b(_) {
        B === I.length && I.push(I.length + 1);
        const e = B;
        return B = I[e], I[e] = _, e;
      }
      const J = typeof FinalizationRegistry > "u" ? {
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
          r > 0 && (a += z(_[0]));
          for (let f = 1; f < r; f++) a += ", " + z(_[f]);
          return a += "]", a;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(_));
        let c;
        if (n && n.length > 1) c = n[1];
        else return toString.call(_);
        if (c == "Object") try {
          return "Object(" + JSON.stringify(_) + ")";
        } catch {
          return "Object";
        }
        return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : c;
      }
      function hi(_) {
        _ < 132 || (I[_] = B, B = _);
      }
      function x(_, e) {
        return _ = _ >>> 0, Ai().subarray(_ / 4, _ / 4 + e);
      }
      function Si(_, e) {
        return _ = _ >>> 0, Di().subarray(_ / 2, _ / 2 + e);
      }
      function A(_, e) {
        return _ = _ >>> 0, Pi().subarray(_ / 4, _ / 4 + e);
      }
      function vi(_, e) {
        return _ = _ >>> 0, Mi().subarray(_ / 1, _ / 1 + e);
      }
      function Ii(_, e) {
        return _ = _ >>> 0, Fi().subarray(_ / 2, _ / 2 + e);
      }
      function F(_, e) {
        return _ = _ >>> 0, Ti().subarray(_ / 4, _ / 4 + e);
      }
      function W(_, e) {
        return _ = _ >>> 0, T().subarray(_ / 1, _ / 1 + e);
      }
      let M = null;
      function l() {
        return (M === null || M.buffer.detached === true || M.buffer.detached === void 0 && M.buffer !== d.memory.buffer) && (M = new DataView(d.memory.buffer)), M;
      }
      let L = null;
      function Ai() {
        return (L === null || L.byteLength === 0) && (L = new Float32Array(d.memory.buffer)), L;
      }
      let E = null;
      function Di() {
        return (E === null || E.byteLength === 0) && (E = new Int16Array(d.memory.buffer)), E;
      }
      let C = null;
      function Pi() {
        return (C === null || C.byteLength === 0) && (C = new Int32Array(d.memory.buffer)), C;
      }
      let R = null;
      function Mi() {
        return (R === null || R.byteLength === 0) && (R = new Int8Array(d.memory.buffer)), R;
      }
      function g(_, e) {
        return _ = _ >>> 0, ki(_, e);
      }
      let O = null;
      function Fi() {
        return (O === null || O.byteLength === 0) && (O = new Uint16Array(d.memory.buffer)), O;
      }
      let q = null;
      function Ti() {
        return (q === null || q.byteLength === 0) && (q = new Uint32Array(d.memory.buffer)), q;
      }
      let G = null;
      function T() {
        return (G === null || G.byteLength === 0) && (G = new Uint8Array(d.memory.buffer)), G;
      }
      function t(_) {
        return I[_];
      }
      function o(_, e) {
        try {
          return _.apply(this, e);
        } catch (n) {
          d.__wbindgen_export3(b(n));
        }
      }
      let I = new Array(128).fill(void 0);
      I.push(void 0, null, true, false);
      let B = I.length;
      function w(_) {
        return _ == null;
      }
      function v(_, e, n, c) {
        const r = {
          a: _,
          b: e,
          cnt: 1,
          dtor: n
        }, a = (...f) => {
          r.cnt++;
          const u = r.a;
          r.a = 0;
          try {
            return c(u, r.b, ...f);
          } finally {
            r.a = u, a._wbg_cb_unref();
          }
        };
        return a._wbg_cb_unref = () => {
          --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, J.unregister(r));
        }, J.register(a, r, r), a;
      }
      function y(_, e, n) {
        if (n === void 0) {
          const u = k.encode(_), i = e(u.length, 1) >>> 0;
          return T().subarray(i, i + u.length).set(u), p = u.length, i;
        }
        let c = _.length, r = e(c, 1) >>> 0;
        const a = T();
        let f = 0;
        for (; f < c; f++) {
          const u = _.charCodeAt(f);
          if (u > 127) break;
          a[r + f] = u;
        }
        if (f !== c) {
          f !== 0 && (_ = _.slice(f)), r = n(r, c, c = f + _.length * 3, 1) >>> 0;
          const u = T().subarray(r + f, r + c), i = k.encodeInto(_, u);
          f += i.written, r = n(r, c, f, 1) >>> 0;
        }
        return p = f, r;
      }
      function H(_) {
        const e = t(_);
        return hi(_), e;
      }
      let V = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      V.decode();
      const Bi = 2146435072;
      let U = 0;
      function ki(_, e) {
        return U += e, U >= Bi && (V = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), V.decode(), U = e), V.decode(T().subarray(_, _ + e));
      }
      const k = new TextEncoder();
      "encodeInto" in k || (k.encodeInto = function(_, e) {
        const n = k.encode(_);
        return e.set(n), {
          read: _.length,
          written: n.length
        };
      });
      let p = 0, d;
      function Li(_) {
        d = _;
      }
      URL = globalThis.URL;
      const S = await n_({
        "./demo_bg.js": {
          __wbindgen_object_drop_ref: Hd,
          __wbg_new_8a6f238a6ece86ea: Tr,
          __wbg_stack_0ed75d68575b0f3c: Ru,
          __wbg_error_7534b8e9a36f1ab4: qn,
          __wbg_clearTimeout_3b5c565a5ec539dd: ke,
          __wbindgen_object_clone_ref: Yd,
          __wbg_setTimeout_cb2a856ba8315e7a: ua,
          __wbg_fetch_16dcf1cfbbc66b3c: Un,
          __wbg_crypto_574e78ad8b13b65f: Bt,
          __wbg_process_dc0fbacc7c1c06f7: wb,
          __wbg_versions_c01dfd4722a88165: ld,
          __wbg_node_905d3e251edff8a2: Wr,
          __wbg_require_60cc747a6bc5215a: Kb,
          __wbg_msCrypto_a61aeb35a24c1329: hr,
          __wbg_randomFillSync_ac0988aba3254290: Db,
          __wbg_getRandomValues_b8f5dbd5f3995a9e: Pc,
          __wbg_scheduler_5156bb61cc1cf589: Hb,
          __wbg_getCoalescedEvents_21492912fd0145ec: rc,
          __wbg_requestFullscreen_86fc6cdb76000482: Wb,
          __wbg_requestIdleCallback_1b8d644ff564208f: zb,
          __wbg_offsetX_cb6a38e6f23cb4a6: $r,
          __wbg_offsetY_43e21941c5c1f8bf: Yr,
          __wbg_cancel_09c394f0894744eb: ve,
          __wbg_webkitFullscreenElement_a9ca38b7214d1567: Dd,
          __wbg_requestFullscreen_9f0611438eb929cf: Ub,
          __wbg_webkitRequestFullscreen_23664c63833ff0e5: Pd,
          __wbg_scheduler_48482a9974eeacbd: Yb,
          __wbg_postTask_41d93e93941e4a3d: ib,
          __wbg_userAgentData_f7b0e61c05c54315: gd,
          __wbg_brands_a1e7a2bce052128f: ue,
          __wbg_brand_9562792cbb4735c3: oe,
          __wbg_prototype_c28bca39c45aba9b: lb,
          __wbg_animate_6ec571f163cf6f8d: M_,
          __wbg_play_63bc12f42e16af91: nb,
          __wbg_Window_d1bf622f71ff0629: b_,
          __wbg_performance_7a3ffd0b17f663ad: Zr,
          __wbg_now_2c95c9de01293173: Ur,
          __wbg_set_color_attachments_81e56abd7f11d38b: Qa,
          __wbg_set_label_10c0715c06c574ce: Gf,
          __wbg_set_view_dc1937ba74f6a24a: pu,
          __wbg_set_depth_clear_value_d3053d10a4ac9092: tf,
          __wbg_set_depth_load_op_0e48f976ce8bf626: rf,
          __wbg_set_depth_store_op_35c62b6bd92fd38a: uf,
          __wbg_set_depth_read_only_16d1277d6c444182: af,
          __wbg_set_stencil_clear_value_c88c52b70d827549: No,
          __wbg_set_stencil_load_op_f865ee8f5135b2e2: Xo,
          __wbg_set_stencil_store_op_b92786567b815d0f: Ho,
          __wbg_set_stencil_read_only_54652ff66298c4c5: Yo,
          __wbg_set_depth_stencil_attachment_6ad88a7f0d66500b: of,
          __wbg_set_query_set_1f3c39edf379c9f9: Fo,
          __wbg_set_beginning_of_pass_write_index_fc4e5d9d098584df: ka,
          __wbg_set_end_of_pass_write_index_78b5e4acfb705c38: mf,
          __wbg_set_timestamp_writes_d8d448bf6b1779ee: bu,
          __wbg_beginRenderPass_c95ff061c0d906d5: C_,
          __wbg_copyBufferToBuffer_7181ca0f3e72e9d2: Je,
          __wbg_copyBufferToBuffer_e84529de8dadf7b7: Ze,
          __wbg_set_width_d1fb21b0573a430a: Au,
          __wbg_set_height_308d7c58bb7196f5: Rf,
          __wbg_set_depth_or_array_layers_922a1b1547bf00be: bf,
          __wbg_label_37d2cc4e867fe710: rr,
          __wbg_set_label_5871c6a4116d78e4: zf,
          __wbg_finish_cafc9caa4b3df56c: Kn,
          __wbg_finish_42f37cad38abaf27: jn,
          __wbg_instanceof_GpuCanvasContext_ffa8d2a7cb70b8fd: $c,
          __wbg_set_dst_factor_01ac107dce46775a: lf,
          __wbg_set_operation_872810b2c7ad34bb: Io,
          __wbg_set_src_factor_d869078ba948812f: jo,
          __wbg_set_texture_18b0fd044bd7238a: cu,
          __wbg_set_mip_level_893bb594663b5970: uo,
          __wbg_set_x_6e4718e5e565b05c: Mu,
          __wbg_set_y_7ad35b82f29b7b2e: Fu,
          __wbg_set_z_74f5725616541ab5: Tu,
          __wbg_set_origin_a91df496455ed18c: Ao,
          __wbg_set_aspect_a06243383a09c435: Pa,
          __wbg_Window_89f1205e6b84c5cf: r_,
          __wbg_gpu_97c682b8bbd6da29: Wc,
          __wbg_WorkerGlobalScope_bfa24e5b372f1f02: a_,
          __wbg_set_a_cb5a15147778942a: la,
          __wbg_set_b_130b6d20afdc640c: Fa,
          __wbg_set_g_a202edac674d3195: Lf,
          __wbg_set_r_d02e085dc65c7ba3: To,
          __wbg_set_bytes_per_row_cc544005f5ac177d: Ua,
          __wbg_set_rows_per_image_91e30e4ece899f1e: Co,
          __wbg_set_offset_50c0ba4bb906a321: yo,
          __wbg_writeTexture_bf31683b9d6c6d14: Fd,
          __wbg_onSubmittedWorkDone_7c17a7914d6a1c0f: Hr,
          __wbg_submit_5f96af711b83c2df: Zu,
          __wbg_getMappedRange_9a20d37843bbc5dd: lc,
          __wbg_unmap_80761f81f18ec521: fd,
          __wbg_destroy_834dd203329bdb3c: on,
          __wbg_mapAsync_c9718fcf0566073c: gr,
          __wbg_set_size_61d185241554da71: Uo,
          __wbg_set_usage_063311abcbeb0c9f: iu,
          __wbg_set_mapped_at_creation_0d65690c0978994b: co,
          __wbg_set_label_d7cc9fef79f6607e: Xf,
          __wbg_createBuffer_e488cd40ceda9067: at,
          __wbg_set_address_mode_u_0099f90d7d87696a: pa,
          __wbg_set_address_mode_v_04f9373166ede6c4: xa,
          __wbg_set_address_mode_w_b6c10646d3e36154: ya,
          __wbg_set_compare_247a44f5e76066a8: $a,
          __wbg_set_lod_max_clamp_35cfaf5ea55bb7aa: eo,
          __wbg_set_lod_min_clamp_30d6a6d6ab2266ba: to,
          __wbg_set_mag_filter_30e1d228621e7c54: no,
          __wbg_set_min_filter_6674175c1bc1ef98: oo,
          __wbg_set_mipmap_filter_40fc07fcab34eb41: so,
          __wbg_set_max_anisotropy_32559abff96ae565: bo,
          __wbg_set_label_6e50ef4fd57a0f6f: Kf,
          __wbg_createSampler_a3dfb0f2f89fdc2b: yt,
          __wbg_set_format_dad716a408041ce0: Mf,
          __wbg_set_size_b0ef925501e008f2: zo,
          __wbg_set_usage_f141b5de159a42da: wu,
          __wbg_set_label_da0fad57dde6793d: $f,
          __wbg_set_dimension_b61a8ae2d358aa5b: sf,
          __wbg_set_mip_level_count_6f365469d581bead: go,
          __wbg_set_sample_count_954d237c60a25f1d: Ro,
          __wbg_set_view_formats_d410e2098aeda477: Su,
          __wbg_createTexture_cdd92f03ef413b88: Dt,
          __wbg_set_entries_2cd3545ee493b9d8: pf,
          __wbg_set_layout_5bb0e3710064d78b: Jf,
          __wbg_set_label_1eb936d3881c4a73: Vf,
          __wbg_createBindGroup_0916ed8027ba2c5a: ct,
          __wbg_set_code_d96e8bd591fe4d27: Ka,
          __wbg_set_label_4592679c60c3ae0e: Wf,
          __wbg_createShaderModule_2b4d1147549bca28: St,
          __wbg_set_label_4f94deb040009907: Uf,
          __wbg_createCommandEncoder_e817b588d596b7d6: ft,
          __wbg_set_bind_group_layouts_0304829711909964: La,
          __wbg_set_label_81a922ba355b9c4e: Nf,
          __wbg_createPipelineLayout_87ecd84a502ca7b4: gt,
          __wbg_set_module_b00779338e12d7cb: mo,
          __wbg_set_entry_point_d34fa93493d1dc0e: hf,
          __wbg_set_buffers_c36e59052d233445: Wa,
          __wbg_set_layout_cf44c2080938f1e8: Zf,
          __wbg_set_vertex_84e0affabea33233: lu,
          __wbg_set_label_ee8b5ccc3ceeadae: Yf,
          __wbg_set_format_1e6dd64c90091826: Af,
          __wbg_set_depth_compare_f44e1ef737045c19: nf,
          __wbg_set_depth_write_enabled_47d54383526f6b41: df,
          __wbg_set_depth_bias_6f054d893efee16d: Za,
          __wbg_set_depth_bias_clamp_13d8ea5bcc66315c: _f,
          __wbg_set_depth_bias_slope_scale_79c154be54e419a7: ef,
          __wbg_set_compare_13ccce3149fc8362: Xa,
          __wbg_set_depth_fail_op_a697253b12a479e1: cf,
          __wbg_set_fail_op_45d1f0ecf070d60c: vf,
          __wbg_set_pass_op_10f19e715ae2c3ef: Do,
          __wbg_set_stencil_back_f7d6690835becc87: Ko,
          __wbg_set_stencil_front_b0e57ed3db28a814: Qo,
          __wbg_set_stencil_read_mask_6d091cd38b736049: $o,
          __wbg_set_stencil_write_mask_775ac04ab32e79dc: Jo,
          __wbg_set_depth_stencil_18746e1deb2f030f: ff,
          __wbg_set_module_70bd7be1f2808c25: lo,
          __wbg_set_targets_8396bdc905d927e9: nu,
          __wbg_set_entry_point_37d0e849bed76259: yf,
          __wbg_set_fragment_0767ccf58ccf1f6e: Bf,
          __wbg_set_count_9f86d0fc02d08e45: Ya,
          __wbg_set_mask_d8e7d97222c8a92e: ro,
          __wbg_set_alpha_to_coverage_enabled_a10bd37eb439b948: va,
          __wbg_set_multisample_8821c65822c70695: po,
          __wbg_set_cull_mode_e2b289219d281f62: Ja,
          __wbg_set_front_face_3c32fabea21988fa: kf,
          __wbg_set_strip_index_format_d819e0c5b56ce30e: tu,
          __wbg_set_topology_ad5745a55cfa852b: au,
          __wbg_set_unclipped_depth_05a825ce1721e8ed: du,
          __wbg_set_primitive_8ec2530289b383b9: Mo,
          __wbg_createRenderPipeline_5757ddd273de2e48: mt,
          __wbg_set_entries_7ced1e5c2593516b: xf,
          __wbg_set_label_6d2e77710a43dc8c: jf,
          __wbg_createBindGroupLayout_433fd88c480d15ee: nt,
          __wbg_end_5a7ce60dc0f49d42: Rn,
          __wbg_set_required_limits_6e2e6f742e0f92ae: ko,
          __wbg_set_required_features_505229173e5ae00f: Bo,
          __wbg_set_label_fcbb40adcedf7a3a: Hf,
          __wbg_requestDevice_acf949c0a7d11096: Vb,
          __wbg_getPreferredCanvasFormat_a652de4dcf1b76a8: yc,
          __wbg_getCurrentTexture_c288aea95a2ecd6c: ic,
          __wbg_set_device_cf77f0192bc5144c: gf,
          __wbg_set_format_f98f8a95c86d8cc1: Ff,
          __wbg_set_usage_e94a8ea3a622b561: su,
          __wbg_set_alpha_mode_ea0e62378a600722: Sa,
          __wbg_set_view_formats_57015785ec512612: hu,
          __wbg_configure_9ddad01510ae8865: Xe,
          __wbg_set_dimension_f73df134b3cb9008: wf,
          __wbg_set_format_17bbec4e26222ce0: If,
          __wbg_set_aspect_24f00699ffc05e48: Da,
          __wbg_set_base_array_layer_8a27534c79ebf816: Ta,
          __wbg_set_array_layer_count_fbec00646c2f76f0: Ia,
          __wbg_set_base_mip_level_2a95e55cd9c4b4b0: Ba,
          __wbg_set_mip_level_count_11613862db4f5326: io,
          __wbg_set_label_a9e60f11d8f6d907: Qf,
          __wbg_set_usage_8a7a3a48dde89c84: gu,
          __wbg_createView_da8865cdd09ec9d5: Tt,
          __wbg_set_power_preference_ad90ccb2239fef97: Po,
          __wbg_requestAdapter_7a2f80d6f6aea9f3: qb,
          __wbg_queue_19586e9507f5e981: Ab,
          __wbg_instanceof_GpuAdapter_32c51925d44640f8: Xc,
          __wbg_drawIndexed_61f900a3bae1176a: Fn,
          __wbg_setPipeline_beee24fb5690e169: ra,
          __wbg_setBindGroup_59293f4cce3ae9cc: ta,
          __wbg_setBindGroup_1e02fb4f10e03fb5: ea,
          __wbg_setIndexBuffer_1cfc93f884167fc9: na,
          __wbg_setIndexBuffer_f0e21a93f9ba1002: ca,
          __wbg_setVertexBuffer_0e2ad0c3f14b93dc: ia,
          __wbg_setVertexBuffer_5090dba5d6df1168: ga,
          __wbg_setStencilReference_98fedb82c63fd0c6: fa,
          __wbg_draw_5e172df5bac5e5ab: Tn,
          __wbg_set_binding_b9f5989194044799: Ea,
          __wbg_set_resource_e981078f9ddeee64: Eo,
          __wbg_set_min_binding_size_c7f7fc1040f0d69b: fo,
          __wbg_set_has_dynamic_offset_45e6a78176745114: Ef,
          __wbg_set_type_65c8734c99356bd7: ou,
          __wbg_set_alpha_e58cc49c799f170e: ha,
          __wbg_set_color_5c69a2b8e768328d: Na,
          __wbg_set_attributes_9241554310424d07: Ma,
          __wbg_set_array_stride_6ac1c0f48cbb1a6e: Aa,
          __wbg_set_step_mode_e6ef4bb885b3b66a: Zo,
          __wbg_set_buffer_c7c4bf990df518a5: Va,
          __wbg_set_visibility_db1e452e6f23b84d: vu,
          __wbg_set_binding_f152b4f7c9a738e4: Ca,
          __wbg_set_sampler_a3c99ec90976e6ff: qo,
          __wbg_set_texture_b1e40b7ea5ec46d9: ru,
          __wbg_set_storage_texture_e6cb7da67d8c6fce: _u,
          __wbg_set_external_texture_743e2b3e660a1b87: Sf,
          __wbg_set_format_313c8f10a7e36a0c: Pf,
          __wbg_set_offset_697e85d970df2f50: ho,
          __wbg_set_shader_location_01be15233cdb0803: Go,
          __wbg_set_buffer_9e1ebf8ed6567298: Ga,
          __wbg_set_offset_99d8916143968ec7: So,
          __wbg_set_size_4a5f3caa1cb0f6ec: Wo,
          __wbg_set_type_8131ac6aa51a1923: uu,
          __wbg_set_multisampled_2ae606400626ad4f: xo,
          __wbg_set_sample_type_12f50c8927ad99ab: Oo,
          __wbg_set_view_dimension_e40d2151f56ba216: yu,
          __wbg_set_format_fa63d24489fef366: Tf,
          __wbg_set_access_318627865be26608: ma,
          __wbg_set_view_dimension_7031d64401f616a4: xu,
          __wbg_set_format_237204cc87ea4982: Df,
          __wbg_set_blend_450723fd40147c64: Ra,
          __wbg_set_write_mask_fc328072f01cb48d: Pu,
          __wbg_set_load_op_de7ca59cc25dfb40: _o,
          __wbg_set_store_op_5185ea291265ee63: eu,
          __wbg_set_view_330ed9fc9fcc4d01: mu,
          __wbg_set_clear_value_576d8a3bda7ba8cc: ja,
          __wbg_set_resolve_target_cce9edc587b4211e: Lo,
          __wbg_queueMicrotask_5bb536982f78a56f: vb,
          __wbg_queueMicrotask_0aa0a927f78f5d98: Sb,
          __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: Jc,
          __wbg_blendFunc_2ef59299d10c662d: ce,
          __wbg_colorMask_177d9762658e5e28: Ge,
          __wbg_depthFunc_f670d4cbb9cd0913: cn,
          __wbg_depthMask_75a36d0065471a4b: bn,
          __wbg_fenceSync_c52a4e24eabfa0d3: Wn,
          __wbg_frontFace_d4a6507ad2939b5c: tc,
          __wbg_uniform1ui_a0f911ff174715d0: B0,
          __wbg_beginQuery_0fdf154e1da0e73d: E_,
          __wbg_bindBuffer_c9068e8712a034f5: V_,
          __wbg_blendColor_e799d452ab2a5788: H_,
          __wbg_clearDepth_670099db422a4f91: Fe,
          __wbg_deleteSync_c8e4a9c735f71d18: $t,
          __wbg_depthRange_337bf254e67639bb: an,
          __wbg_drawArrays_075228181299b824: vn,
          __wbg_readBuffer_9eb461d6857295f0: Pb,
          __wbg_useProgram_fe720ade4d3b6edb: id,
          __wbg_bindSampler_96f0e90e7bc31da9: K_,
          __wbg_bindTexture_b2b7b1726a83f93e: N_,
          __wbg_createQuery_7988050efd7e4c48: lt,
          __wbg_deleteQuery_ea8bf1954febd774: zt,
          __wbg_drawBuffers_5eccfaacc6560299: Dn,
          __wbg_linkProgram_6600dd2c0863bbfd: fr,
          __wbg_pixelStorei_2a65936c11b710fe: eb,
          __wbg_stencilMask_732dcc5aada10e4c: Xu,
          __wbg_attachShader_b36058e5c9eeaf54: L_,
          __wbg_clearStencil_5d243d0dff03c315: Te,
          __wbg_createBuffer_26534c05e01b8559: rt,
          __wbg_createShader_e3ac08ed8c5b14b2: vt,
          __wbg_deleteBuffer_ab099883c168644d: qt,
          __wbg_deleteShader_aaf3b520a64d5d9d: Qt,
          __wbg_getExtension_3c0cb5ae01bb4b17: sc,
          __wbg_getParameter_2e1f97ecaab76274: xc,
          __wbg_shaderSource_32425cfe6e5a1e52: Bu,
          __wbg_activeTexture_6f9a710514686c24: S_,
          __wbg_blendEquation_e9b99928ed1494ad: ee,
          __wbg_compileShader_94718a93495d565d: Ue,
          __wbg_createProgram_9b7710a1f2701c2c: wt,
          __wbg_createSampler_da6bb96c9ffaaa27: ht,
          __wbg_createTexture_16d2c8a3d7d4a75a: At,
          __wbg_deleteProgram_9298fb3e3c1d3a78: Wt,
          __wbg_deleteSampler_c6b68c4071841afa: Nt,
          __wbg_deleteTexture_9d411c0e60ffa324: Ht,
          __wbg_polygonOffset_4b3158d8ed028862: ab,
          __wbg_texParameteri_0d45be2c88d6bad8: r0,
          __wbg_texStorage2D_9504743abf5a986a: a0,
          __wbg_texStorage3D_e9e1b58fee218abe: f0,
          __wbg_bindFramebuffer_031c73ba501cb8f6: W_,
          __wbg_blitFramebuffer_d730a23ab4db248e: be,
          __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: z_,
          __wbg_bindVertexArray_78220d1edb1d2382: $_,
          __wbg_createFramebuffer_41512c38358a41c4: ut,
          __wbg_deleteFramebuffer_9738f3bb85c1ab35: Vt,
          __wbg_getSyncParameter_7d11ab875b41617e: Ec,
          __wbg_samplerParameterf_f070d2b69b1e2d46: Xb,
          __wbg_samplerParameteri_8e4c4bcead0ee669: $b,
          __wbg_blendFuncSeparate_95465944f788a092: te,
          __wbg_createRenderbuffer_a601226a6a680dbe: xt,
          __wbg_createVertexArray_ad5294951ae57497: Ft,
          __wbg_deleteRenderbuffer_096edada57729468: jt,
          __wbg_deleteVertexArray_7bc7f92769862f93: Zt,
          __wbg_getQueryParameter_5d6af051438ae479: Dc,
          __wbg_getShaderInfoLog_9e0b96da4b13ae49: Fc,
          __wbg_stencilOpSeparate_4657523b1d3b184f: $u,
          __wbg_bindAttribLocation_ce78bfb13019dbe6: O_,
          __wbg_bufferData_32d26eba0c74a53c: ie,
          __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: hc,
          __wbg_getShaderParameter_afa4a3dd9dd397c1: Bc,
          __wbg_getUniformLocation_d06b3a5b3c60e95c: Oc,
          __wbg_readPixels_6ea8e288a8673282: Fb,
          __wbg_renderbufferStorage_1bc02383614b76b2: Cb,
          __wbg_copyTexSubImage2D_91ebcd9cd1908265: et,
          __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: tt,
          __wbg_drawArraysInstanced_ec30adc616ec58d5: Sn,
          __wbg_getIndexedParameter_ca1693c768bc4934: wc,
          __wbg_getProgramParameter_92e4540ca9da06b2: Ic,
          __wbg_stencilFuncSeparate_10d043d0af14366f: zu,
          __wbg_stencilMaskSeparate_28d53625c02d9c7f: Ku,
          __wbg_texImage3D_2082006a8a9b28a7: n0,
          __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: $0,
          __wbg_vertexAttribDivisor_744c0ca468594894: pd,
          __wbg_framebufferTexture2D_c283e928186aa542: Jn,
          __wbg_invalidateFramebuffer_b17b7e1da3051745: _r,
          __wbg_blendEquationSeparate_a8094fbec94cf80e: Z_,
          __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: Cc,
          __wbg_framebufferRenderbuffer_850811ed6e26475e: $n,
          __wbg_getSupportedExtensions_57142a6b598d7787: kc,
          __wbg_clientWaitSync_21865feaeb76a9a5: Re,
          __wbg_framebufferTextureLayer_c8328828c8d5eb60: Zn,
          __wbg_texSubImage3D_59b8e24fb05787aa: S0,
          __wbg_uniform2fv_2fb47cfe06330cc7: L0,
          __wbg_uniform2iv_095baf208f172131: E0,
          __wbg_uniform3fv_c0872003729939a5: q0,
          __wbg_uniform3iv_6aa2b0791e659d14: G0,
          __wbg_uniform4fv_498bd80dc5aa16ff: j0,
          __wbg_uniform4iv_8a8219fda39dffd5: Q0,
          __wbg_enableVertexAttribArray_475e06c31777296d: Bn,
          __wbg_uniform2uiv_3030d7e769f5e82a: R0,
          __wbg_uniform3uiv_86941e7eeb8ee0a3: W0,
          __wbg_uniform4uiv_046ee400bb80547d: X0,
          __wbg_disableVertexAttribArray_24a020060006b10f: gn,
          __wbg_clearBufferfv_ac87d92e2f45d80c: Ae,
          __wbg_clearBufferiv_69ff24bb52ec4c88: De,
          __wbg_clearBufferuiv_8ad59a8219aafaca: Pe,
          __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: yd,
          __wbg_drawElementsInstanced_d41fc920ae24717c: Mn,
          __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: Eb,
          __wbg_texSubImage3D_45591e5655d1ed5c: y0,
          __wbg_uniformMatrix2fv_24430076c7afb5e3: Y0,
          __wbg_uniformMatrix3fv_6f822361173d8046: _d,
          __wbg_uniformMatrix4fv_0e724dbebd372526: cd,
          __wbg_vertexAttribIPointer_b9020d0c2e759912: xd,
          __wbg_bindBufferRange_009d206fe9e4151e: q_,
          __wbg_bufferData_98f6c413a8f0f139: se,
          __wbg_texSubImage3D_3b653017c4c5d721: x0,
          __wbg_uniformMatrix2x3fv_a377326104a8faf4: J0,
          __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: Z0,
          __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: td,
          __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: nd,
          __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: bd,
          __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: ad,
          __wbg_readPixels_55b18304384e073d: Mb,
          __wbg_texImage3D_bd2b0bd2cfcdb278: c0,
          __wbg_texSubImage3D_47643556a8a4bf86: h0,
          __wbg_texSubImage3D_18d7f3c65567c885: p0,
          __wbg_texSubImage3D_eff5cd6ab84f44ee: v0,
          __wbg_texSubImage3D_1102c12a20bf56d5: m0,
          __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: Ke,
          __wbg_compressedTexSubImage3D_778008a6293f15ab: Qe,
          __wbg_copyBufferSubData_a4f9815861ff0ae9: He,
          __wbg_bufferSubData_3e902f031adf13fd: le,
          __wbg_compressedTexSubImage2D_684350eb62830032: je,
          __wbg_compressedTexSubImage3D_16afa3a47bf1d979: Ne,
          __wbg_getBufferSubData_4fc54b4fbb1462d7: cc,
          __wbg_texSubImage2D_edf5bd70fda3feaf: l0,
          __wbg_clear_7187030f892c5ca0: Ce,
          __wbg_flush_e322496f5412e567: Qn,
          __wbg_texImage2D_13414a4692836804: e0,
          __wbg_texSubImage2D_bf72e56edeeed376: g0,
          __wbg_texSubImage2D_e193f1d28439217c: w0,
          __wbg_enable_d1ac04dfdd2fb3ae: Ln,
          __wbg_texSubImage2D_117d29278542feb0: o0,
          __wbg_texSubImage2D_bd034db2e58c352c: i0,
          __wbg_texSubImage2D_5d270af600a7fc4a: d0,
          __wbg_texSubImage2D_d17a39cdec4a3495: s0,
          __wbg_disable_7fe6fb3e97717f88: wn,
          __wbg_scissor_2ff8f18f05a6d408: Jb,
          __wbg_texImage2D_087ef94df78081f0: _0,
          __wbg_viewport_df236eac68bc7467: vd,
          __wbg_cullFace_e7e711a14d2c3f48: Ct,
          __wbg_endQuery_54f0627d4c931318: Cn,
          __wbg_uniform1f_b500ede5b612bea2: P0,
          __wbg_uniform1i_e9aee4b9e7fe8c4b: T0,
          __wbg_uniform4f_f6b5e2024636033a: z0,
          __wbg_instanceof_Window_ed49b2db8df90359: Zc,
          __wbg_matchMedia_91d4fc9729dc3c84: sr,
          __wbg_queueMicrotask_885fd8605352e25d: Ib,
          __wbg_devicePixelRatio_5c458affc89fc209: dn,
          __wbg_getComputedStyle_2d1f9dfe4ee7e0b9: ac,
          __wbg_cancelIdleCallback_fdfaaf4ca585e729: Se,
          __wbg_requestIdleCallback_c9c643f8210d435b: jb,
          __wbg_cancelAnimationFrame_cd35895d78cf4510: he,
          __wbg_requestAnimationFrame_43682f8e1c5e5348: Gb,
          __wbg_clearTimeout_df03cf00269bc442: Le,
          __wbg_setTimeout_681abd84926a4da3: oa,
          __wbg_setTimeout_eff32631ea138533: da,
          __wbg_document_ee35a3d3ae34ef6c: xn,
          __wbg_location_df7ca06c93e51763: dr,
          __wbg_navigator_43be698ba96fc088: Sr,
          __wbg_setAttribute_cc8e4c8a2a008508: _a,
          __wbg_setPointerCapture_420db6f6826eb74b: ba,
          __wbg_activeElement_1554b6917654f8d6: h_,
          __wbg_createElement_49f60fdcaae809c8: ot,
          __wbg_querySelector_c3b0df2d58eec220: hb,
          __wbg_visibilityState_43b7b74940e07d22: Id,
          __wbg_getElementById_e34377b79d7285f6: gc,
          __wbg_fullscreenElement_25b445e2961e68ba: nc,
          __wbg_querySelectorAll_1283aae52043a951: yb,
          __wbg_body_f67922363a220026: fe,
          __wbg_fetch_afb6a4b6cacf876d: zn,
          __wbg_navigator_4478931f32ebca57: vr,
          __wbg_focus_128ff465f65677cc: Xn,
          __wbg_style_0b7c9bd318f8b807: Hu,
          __wbg_blendFunc_446658e7231ab9c8: re,
          __wbg_colorMask_7a8dbc86e7376a9b: Ve,
          __wbg_depthFunc_eb3aa05361dd2eaa: nn,
          __wbg_depthMask_103091329ca1a750: rn,
          __wbg_frontFace_027e2ec7a7bc347c: ec,
          __wbg_bindBuffer_69a7a0b8f3f9b9cf: G_,
          __wbg_blendColor_1d50ac87d9a2794b: Y_,
          __wbg_clearDepth_2b109f644a783a53: Me,
          __wbg_depthRange_5579d448b9d7de57: fn,
          __wbg_drawArrays_2be89c369a29f30b: In,
          __wbg_useProgram_e82c1a5f87d81579: dd,
          __wbg_bindTexture_ec13ddcb9dc8e032: Q_,
          __wbg_linkProgram_be6b825cf66d177b: or,
          __wbg_pixelStorei_f7cc498f52d523f1: tb,
          __wbg_stencilMask_0eca090c4c47f8f7: Qu,
          __wbg_attachShader_32114efcf2744eb6: k_,
          __wbg_clearStencil_aa65955bb39d8c18: Be,
          __wbg_createBuffer_c4ec897aacc1b91c: bt,
          __wbg_createShader_f2b928ca9a426b14: It,
          __wbg_deleteBuffer_22fcc93912cbf659: Ot,
          __wbg_deleteShader_ff70ca962883e241: Xt,
          __wbg_getParameter_1ecb910cfdd21f88: pc,
          __wbg_shaderSource_8f4bda03f70359df: ku,
          __wbg_activeTexture_7e39cb8fdf4b6d5a: v_,
          __wbg_blendEquation_82202f34c4c00e50: _e,
          __wbg_compileShader_63b824e86bb00b8f: We,
          __wbg_createProgram_98aaa91f7c81c5e2: st,
          __wbg_createTexture_f9451a82c7527ce2: Pt,
          __wbg_deleteProgram_f354e79b8cae8076: Ut,
          __wbg_deleteTexture_2be78224e5584a8b: Yt,
          __wbg_polygonOffset_24a8059deb03be92: bb,
          __wbg_texParameteri_ec937d2161018946: b0,
          __wbg_bindFramebuffer_7815ca611abb057f: U_,
          __wbg_bindRenderbuffer_db37c1bac9ed4da0: j_,
          __wbg_createFramebuffer_b88ffa8e0fd262c4: dt,
          __wbg_deleteFramebuffer_8de1ca41ac87cfd9: Gt,
          __wbg_blendFuncSeparate_f366c170c5097fbe: ne,
          __wbg_createRenderbuffer_1e567f2f4d461710: pt,
          __wbg_deleteRenderbuffer_0f565f0727b341fc: Kt,
          __wbg_getShaderInfoLog_9991e9e77b0c6805: Mc,
          __wbg_stencilOpSeparate_de257f3c29e604cd: Yu,
          __wbg_bindAttribLocation_5cfc7fa688df5051: R_,
          __wbg_bufferData_1be8450fab534758: de,
          __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: Sc,
          __wbg_getShaderParameter_786fd84f85720ca8: Tc,
          __wbg_getUniformLocation_71c070e6644669ad: Rc,
          __wbg_renderbufferStorage_6348154d30979c44: Rb,
          __wbg_copyTexSubImage2D_417a65926e3d2490: _t,
          __wbg_getProgramParameter_43fbc6d2613c08b3: vc,
          __wbg_stencilFuncSeparate_1798f5cca257f313: ju,
          __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: Nu,
          __wbg_framebufferTexture2D_8adf6bdfc3c56dee: Hn,
          __wbg_blendEquationSeparate_1b12c43928cc7bc1: J_,
          __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: Yn,
          __wbg_uniform2fv_04c304b93cbf7f55: k0,
          __wbg_uniform2iv_ccf2ed44ac8e602e: C0,
          __wbg_uniform3fv_aa35ef21e14d5469: O0,
          __wbg_uniform3iv_e912f444d4ff8269: V0,
          __wbg_uniform4fv_e6c73702e9a3be5c: K0,
          __wbg_uniform4iv_375332584c65e61b: N0,
          __wbg_enableVertexAttribArray_aa6e40408261eeb9: kn,
          __wbg_disableVertexAttribArray_4bac633c27bae599: sn,
          __wbg_vertexAttribPointer_adbd1853cce679ad: hd,
          __wbg_uniformMatrix2fv_e2806601f5b95102: H0,
          __wbg_uniformMatrix3fv_b94a764c63aa6468: ed,
          __wbg_uniformMatrix4fv_923b55ad503fdc56: rd,
          __wbg_bufferData_52235e85894af988: ge,
          __wbg_readPixels_95b2464a7bb863a2: Tb,
          __wbg_bufferSubData_33eebcc173094f6a: we,
          __wbg_compressedTexSubImage2D_215bb115facd5e48: ze,
          __wbg_clear_4d801d0d054c3579: Ee,
          __wbg_flush_7777597fd43065db: Nn,
          __wbg_enable_fee40f19b7053ea3: En,
          __wbg_texSubImage2D_19ae4cadb809f264: u0,
          __wbg_disable_bd37bdcca1764aea: ln,
          __wbg_scissor_b870b1434a9c25b4: Zb,
          __wbg_texImage2D_e71049312f3172d9: t0,
          __wbg_viewport_174ae1c2209344ae: Sd,
          __wbg_cullFace_39500f654c67a205: Et,
          __wbg_uniform1f_c148eeaf4b531059: M0,
          __wbg_uniform1i_9f3f72dbcb98ada9: F0,
          __wbg_uniform4f_71ec75443e58cecc: U0,
          __wbg_movementX_ff6524e06bc35b6a: xr,
          __wbg_movementY_4cec81d9850ad239: yr,
          __wbg_button_d86841d0a03adc44: me,
          __wbg_altKey_8155c319c215e3aa: P_,
          __wbg_buttons_a158a0cad3175f24: pe,
          __wbg_ctrlKey_96ff94f8b18636a3: Lt,
          __wbg_metaKey_374999c340f70626: mr,
          __wbg_shiftKey_5558a3288542c985: Lu,
          __wbg_key_d41e8e825e6bb0e9: cr,
          __wbg_code_dee0dae4730408e1: qe,
          __wbg_repeat_375aae5c5c6a0258: Ob,
          __wbg_altKey_73c1173ba53073d5: D_,
          __wbg_ctrlKey_09a1b54d77dea92b: kt,
          __wbg_location_22bcb1a188a96eb1: ur,
          __wbg_metaKey_67113fb40365d736: pr,
          __wbg_shiftKey_564be91ec842bcc4: Eu,
          __wbg_addListener_03e8162d7e03c823: A_,
          __wbg_removeListener_e2a199028636dcf5: kb,
          __wbg_media_7bcde781569bca4c: lr,
          __wbg_matches_4b5c22bd830f7bb3: wr,
          __wbg_preventDefault_cdcfcd7e301b9702: sb,
          __wbg_userAgent_34463fd660ba4a2a: sd,
          __wbg_now_ebffdf7e580f210d: zr,
          __wbg_abort_d549b92d3c665de1: y_,
          __wbg_new_b949e7f56150a5d1: kr,
          __wbg_abort_2f0584e03e8e3950: x_,
          __wbg_signal_d1285ecab4ebc5ad: Cu,
          __wbg_blockSize_ef9a626745d7dfac: ae,
          __wbg_inlineSize_3e4e7e8c813884fd: Qc,
          __wbg_bindVertexArrayOES_c2610602f7485b3f: X_,
          __wbg_createVertexArrayOES_bd76ceee6ab9b95e: Mt,
          __wbg_deleteVertexArrayOES_197df47ef9684195: Jt,
          __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: _c,
          __wbg_contentRect_79b98e4d4f4728a4: Ye,
          __wbg_devicePixelContentBoxSize_8f39437eab7f03ea: un,
          __wbg_isIntersecting_6807d592d68e059e: tr,
          __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: Gr,
          __wbg_get_d8db2ad31d529ff8: Vc,
          __wbg_instanceof_Response_ee1d54d79ae41977: Hc,
          __wbg_arrayBuffer_bb54076166006c39: B_,
          __wbg_url_c484c26b1fbf5126: ud,
          __wbg_text_083b8727c990c8c0: I0,
          __wbg_status_89d7e803db911ee7: Uu,
          __wbg_headers_59a2938db9f80985: zc,
          __wbg_disconnect_5202f399852258c0: pn,
          __wbg_observe_1ae37077cf10b11b: jr,
          __wbg_new_2e2be9617c4407d5: Ir,
          __wbg_observe_b9abc08d6d829e56: Nr,
          __wbg_unobserve_b4eb8d945252124f: od,
          __wbg_set_type_148de20768639245: fu,
          __wbg_set_height_f21f985387070100: qf,
          __wbg_getContext_2a5764d48600bc43: oc,
          __wbg_getContext_b28d2db7bd648242: uc,
          __wbg_set_width_d60bc4f2f20c56a4: Du,
          __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: Yc,
          __wbg_queryCounterEXT_b578f07c30420446: xb,
          __wbg_getSupportedProfiles_1f728bc32003c4d0: Lc,
          __wbg_new_with_str_and_init_a61cbc6bdef21614: qr,
          __wbg_set_height_b386c0f603610637: Of,
          __wbg_getContext_2966500392030d63: fc,
          __wbg_getContext_de810d9f187f29ca: dc,
          __wbg_set_width_7f07715a20503914: Iu,
          __wbg_setProperty_cbb25c4e74285b39: aa,
          __wbg_removeProperty_a0d2ff8a76ffd2b1: Lb,
          __wbg_getPropertyValue_d6911b2a1f9acba9: Ac,
          __wbg_disconnect_0a2d26237dfc1e9e: mn,
          __wbg_new_8c6e67a40cee1f83: Br,
          __wbg_observe_2a9d63459970a2c1: Kr,
          __wbg_revokeObjectURL_ba5712ef5af8bc9a: Qb,
          __wbg_createObjectURL_918185db6a10a0c8: it,
          __wbg_new_64284bd487f9d239: Mr,
          __wbg_append_a992ccc37aa62dc4: T_,
          __wbg_entries_04679661ea6e74fc: On,
          __wbg_deltaMode_a1d1df711e44cefc: _n,
          __wbg_deltaX_f0ca9116db5f7bc1: en,
          __wbg_deltaY_eb94120160ac821c: tn,
          __wbg_pointerId_466b1bdcaf2fe835: cb,
          __wbg_pointerType_ba53c6f18634a26d: rb,
          __wbg_getCoalescedEvents_8d19e426e1461e96: bc,
          __wbg_pressure_f01a99684f7a6cf3: gb,
          __wbg_appendChild_dea38765a26d346d: F_,
          __wbg_contains_1056459c33f961e8: $e,
          __wbg_origin_a9c891fa602b4d40: Jr,
          __wbg_new_6f0524fbfa300c47: Fr,
          __wbg_port1_6251ddc5cf5c9287: fb,
          __wbg_port2_b2a294b0ede1e13c: ob,
          __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: hn,
          __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: md,
          __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: Pn,
          __wbg_set_box_73d3355c6f95f24d: qa,
          __wbg_addEventListener_3acb0aad4483804c: I_,
          __wbg_removeEventListener_e63328781a5b9af9: Bb,
          __wbg_set_method_c3e20375f5ae7fac: ao,
          __wbg_set_signal_f2d3f8599248896d: Vo,
          __wbg_set_credentials_c4a58d2e05ef24fb: Ha,
          __wbg_set_headers_cfc5f4b2c1f20549: Cf,
          __wbg_set_body_9a7e00afe3cfe244: Oa,
          __wbg_set_mode_b13642c312648202: wo,
          __wbg_set_cache_315a3ed773a41543: za,
          __wbg_postMessage_e45c89e4826cf2ef: db,
          __wbg_new_4f8f3c123e474358: Pr,
          __wbg_log_6b5ca2e6124b2808: ir,
          __wbg_info_148d043840582012: Nc,
          __wbg_warn_f7ae1b2e66ccb930: Ad,
          __wbg_debug_a4099fa12db6cd61: Rt,
          __wbg_error_9a7fe3f932034cde: Gn,
          __wbg_error_f852e41c69b0bd84: Vn,
          __wbg_postMessage_46eeeef39934b448: ub,
          __wbg_set_onmessage_0e1ffb1c0d91d2ad: vo,
          __wbg_close_fad2f0ee451926ed: Oe,
          __wbg_start_ffb4b426b1e661bd: Ou,
          __wbg_width_7444cca5dfea0645: Md,
          __wbg_height_c2027cf67d1c9b11: jc,
          __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: An,
          __wbg_persisted_de98357e1aaf6546: _b,
          __wbg_new_3eb36ae241fe6f44: Dr,
          __wbg_new_361308b2356cecd0: Ar,
          __wbg_new_no_args_1c7c842f08d00ebb: Cr,
          __wbg_new_dd2b680c8bf6ae29: Lr,
          __wbg_length_32ed9a279acd054c: br,
          __wbg_prototypesetcall_bdcdcc5842e4d77d: mb,
          __wbg_new_from_slice_a3d2629dc1826784: Er,
          __wbg_new_with_length_a2c39cbe88fd8ff1: Or,
          __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: Rr,
          __wbg_set_25cf9deff6bf0ea8: sa,
          __wbg_subarray_a96e1fef17ed23cb: Ju,
          __wbg_done_57b39ecd9addfe81: yn,
          __wbg_value_0546255b415e96c1: wd,
          __wbg_get_9b94d73e6221f75c: qc,
          __wbg_of_f915f7cd925b21a5: Xr,
          __wbg_of_9ab14f9d4bfb5040: Qr,
          __wbg_length_35a7bace40f36eac: ar,
          __wbg_push_8ffdcb2063340ba5: pb,
          __wbg_includes_32215c836f1cd3fb: Kc,
          __wbg_isArray_d314bb98fcf08331: er,
          __wbg_getOwnPropertyDescriptor_03ccfd856865081b: mc,
          __wbg_is_f29129f676e5410c: nr,
          __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: Gu,
          __wbg_call_389efe28435a9388: xe,
          __wbg_static_accessor_SELF_a621d3dfbb60d0ce: Vu,
          __wbg_static_accessor_GLOBAL_12837167ad935116: qu,
          __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: Wu,
          __wbg_then_b9e7b3b5f1a9e1b5: D0,
          __wbg_catch_c1f8c7623b458214: Ie,
          __wbg_then_0d9fe2c7b1857d32: A0,
          __wbg_resolve_002c4b7d9d8f6b64: Nb,
          __wbg_call_4708e0c13bdc8e95: ye,
          __wbg_next_3482f54c49e8af19: Vr,
          __wbg_get_b3ed3ad4be2bc8ac: Gc,
          __wbg_has_d4e53238966c12b6: Uc,
          __wbg_set_6cb8631f80447a67: wa,
          __wbg___wbindgen_number_get_8ff4255516ccad3e: w_,
          __wbg___wbindgen_throw_be289d5034ed271b: m_,
          __wbg___wbindgen_is_null_ac34f5003991759a: d_,
          __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: i_,
          __wbg___wbindgen_is_string_cd444516edc5b180: g_,
          __wbg___wbindgen_string_get_72fb696202c56729: l_,
          __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: f_,
          __wbg___wbindgen_is_function_0095a73b8b156f76: u_,
          __wbg___wbindgen_is_undefined_9e4d92534c42d778: s_,
          __wbg___wbindgen_debug_string_0bc8482c6e3508ae: o_,
          __wbg__wbg_cb_unref_d9b87ff7982e3b21: p_,
          __wbindgen_cast_0000000000000001: Td,
          __wbindgen_cast_0000000000000002: Bd,
          __wbindgen_cast_0000000000000003: kd,
          __wbindgen_cast_0000000000000004: Ld,
          __wbindgen_cast_0000000000000005: Ed,
          __wbindgen_cast_0000000000000006: Cd,
          __wbindgen_cast_0000000000000007: Rd,
          __wbindgen_cast_0000000000000008: Od,
          __wbindgen_cast_0000000000000009: qd,
          __wbindgen_cast_000000000000000a: Gd,
          __wbindgen_cast_000000000000000b: Vd,
          __wbindgen_cast_000000000000000c: Wd,
          __wbindgen_cast_000000000000000d: Ud,
          __wbindgen_cast_000000000000000e: zd,
          __wbindgen_cast_000000000000000f: jd,
          __wbindgen_cast_0000000000000010: Kd,
          __wbindgen_cast_0000000000000011: Nd,
          __wbindgen_cast_0000000000000012: Qd,
          __wbindgen_cast_0000000000000013: Xd,
          __wbindgen_cast_0000000000000014: $d
        }
      }, c_), Ei = S.memory, Ci = S.main, Ri = S.__wasm_bindgen_func_elem_3233, Oi = S.__wasm_bindgen_func_elem_5072, qi = S.__wasm_bindgen_func_elem_1556, Gi = S.__wasm_bindgen_func_elem_3572, Vi = S.__wasm_bindgen_func_elem_3566, Wi = S.__wasm_bindgen_func_elem_5073, Ui = S.__wasm_bindgen_func_elem_3564, zi = S.__wasm_bindgen_func_elem_1601, ji = S.__wbindgen_export, Ki = S.__wbindgen_export2, Ni = S.__wbindgen_export3, Qi = S.__wbindgen_export4, t_ = S.__wbindgen_start, Xi = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wasm_bindgen_func_elem_1556: qi,
        __wasm_bindgen_func_elem_1601: zi,
        __wasm_bindgen_func_elem_3233: Ri,
        __wasm_bindgen_func_elem_3564: Ui,
        __wasm_bindgen_func_elem_3566: Vi,
        __wasm_bindgen_func_elem_3572: Gi,
        __wasm_bindgen_func_elem_5072: Oi,
        __wasm_bindgen_func_elem_5073: Wi,
        __wbindgen_export: ji,
        __wbindgen_export2: Ki,
        __wbindgen_export3: Ni,
        __wbindgen_export4: Qi,
        __wbindgen_start: t_,
        main: Ci,
        memory: Ei
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Li(Xi);
      t_();
    })();
  }
});
export default require_stdin();
