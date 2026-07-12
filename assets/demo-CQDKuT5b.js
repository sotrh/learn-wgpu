var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { _ as n_ } from "./vite-plugin-wasm-helper-D7K_KhUE.js";
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      const b_ = "/learn-wgpu/assets/demo_bg-uafj418I.wasm";
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
        const n = t(e), b = typeof n == "number" ? n : void 0;
        w().setFloat64(_ + 8, l(b) ? 0 : b, true), w().setInt32(_ + 0, !l(b), true);
      }
      function l_(_, e) {
        const n = t(e), b = typeof n == "string" ? n : void 0;
        var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
        w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
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
      function T_() {
        return o(function(_, e, n, b, r) {
          t(_).append(g(e, n), g(b, r));
        }, arguments);
      }
      function B_() {
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
      function E_(_, e, n) {
        t(_).beginQuery(e >>> 0, t(n));
      }
      function R_() {
        return o(function(_, e) {
          const n = t(_).beginRenderPass(t(e));
          return c(n);
        }, arguments);
      }
      function C_(_, e, n, b, r) {
        t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
      }
      function O_(_, e, n, b, r) {
        t(_).bindAttribLocation(t(e), n >>> 0, g(b, r));
      }
      function q_(_, e, n, b, r, a) {
        t(_).bindBufferRange(e >>> 0, n >>> 0, t(b), r, a);
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
      function $_(_, e, n) {
        t(_).bindTexture(e >>> 0, t(n));
      }
      function N_(_, e, n) {
        t(_).bindTexture(e >>> 0, t(n));
      }
      function Q_(_, e) {
        t(_).bindVertexArrayOES(t(e));
      }
      function X_(_, e) {
        t(_).bindVertexArray(t(e));
      }
      function Y_(_, e, n, b, r) {
        t(_).blendColor(e, n, b, r);
      }
      function H_(_, e, n, b, r) {
        t(_).blendColor(e, n, b, r);
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
      function te(_, e, n, b, r) {
        t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
      }
      function ne(_, e, n, b, r) {
        t(_).blendFuncSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
      }
      function be(_, e, n) {
        t(_).blendFunc(e >>> 0, n >>> 0);
      }
      function re(_, e, n) {
        t(_).blendFunc(e >>> 0, n >>> 0);
      }
      function ce(_, e, n, b, r, a, f, d, i, s, p) {
        t(_).blitFramebuffer(e, n, b, r, a, f, d, i, s >>> 0, p >>> 0);
      }
      function ae(_) {
        return t(_).blockSize;
      }
      function fe(_) {
        const e = t(_).body;
        return l(e) ? 0 : c(e);
      }
      function oe(_, e) {
        const n = t(e).brand, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function ue(_) {
        const e = t(_).brands;
        return c(e);
      }
      function de(_, e, n, b) {
        t(_).bufferData(e >>> 0, t(n), b >>> 0);
      }
      function ie(_, e, n, b) {
        t(_).bufferData(e >>> 0, n, b >>> 0);
      }
      function ge(_, e, n, b) {
        t(_).bufferData(e >>> 0, t(n), b >>> 0);
      }
      function se(_, e, n, b) {
        t(_).bufferData(e >>> 0, n, b >>> 0);
      }
      function we(_, e, n, b) {
        t(_).bufferSubData(e >>> 0, n, t(b));
      }
      function le(_, e, n, b) {
        t(_).bufferSubData(e >>> 0, n, t(b));
      }
      function me(_) {
        return t(_).button;
      }
      function pe(_) {
        return t(_).buttons;
      }
      function xe() {
        return o(function(_, e, n) {
          const b = t(_).call(t(e), t(n));
          return c(b);
        }, arguments);
      }
      function ye() {
        return o(function(_, e) {
          t(_).cancelAnimationFrame(e);
        }, arguments);
      }
      function he(_, e) {
        t(_).cancelIdleCallback(e >>> 0);
      }
      function ve(_) {
        t(_).cancel();
      }
      function Se(_, e) {
        const n = t(_).catch(t(e));
        return c(n);
      }
      function Ie(_, e, n, b, r) {
        t(_).clearBufferfv(e >>> 0, n, y(b, r));
      }
      function Ae(_, e, n, b, r) {
        t(_).clearBufferiv(e >>> 0, n, D(b, r));
      }
      function De(_, e, n, b, r) {
        t(_).clearBufferuiv(e >>> 0, n, T(b, r));
      }
      function Pe(_, e) {
        t(_).clearDepth(e);
      }
      function Me(_, e) {
        t(_).clearDepth(e);
      }
      function Fe(_, e) {
        t(_).clearStencil(e);
      }
      function Te(_, e) {
        t(_).clearStencil(e);
      }
      function Be(_) {
        const e = clearTimeout(M(_));
        return c(e);
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
      function Re(_, e, n, b) {
        return t(_).clientWaitSync(t(e), n >>> 0, b >>> 0);
      }
      function Ce(_) {
        t(_).close();
      }
      function Oe(_, e) {
        const n = t(e).code, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
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
      function Ue(_, e, n, b, r, a, f, d, i, s) {
        t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i, s);
      }
      function ze(_, e, n, b, r, a, f, d, i) {
        t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
      }
      function je(_, e, n, b, r, a, f, d, i) {
        t(_).compressedTexSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, t(i));
      }
      function Ke(_, e, n, b, r, a, f, d, i, s, p, v) {
        t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p, v);
      }
      function $e(_, e, n, b, r, a, f, d, i, s, p) {
        t(_).compressedTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, t(p));
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
      function He() {
        return o(function(_, e, n, b, r) {
          t(_).copyBufferToBuffer(t(e), n, t(b), r);
        }, arguments);
      }
      function Je() {
        return o(function(_, e, n, b, r, a) {
          t(_).copyBufferToBuffer(t(e), n, t(b), r, a);
        }, arguments);
      }
      function Ze(_, e, n, b, r, a, f, d, i) {
        t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
      }
      function _t(_, e, n, b, r, a, f, d, i) {
        t(_).copyTexSubImage2D(e >>> 0, n, b, r, a, f, d, i);
      }
      function et(_, e, n, b, r, a, f, d, i, s) {
        t(_).copyTexSubImage3D(e >>> 0, n, b, r, a, f, d, i, s);
      }
      function tt() {
        return o(function(_, e) {
          const n = t(_).createBindGroupLayout(t(e));
          return c(n);
        }, arguments);
      }
      function nt(_, e) {
        const n = t(_).createBindGroup(t(e));
        return c(n);
      }
      function bt(_) {
        const e = t(_).createBuffer();
        return l(e) ? 0 : c(e);
      }
      function rt() {
        return o(function(_, e) {
          const n = t(_).createBuffer(t(e));
          return c(n);
        }, arguments);
      }
      function ct(_) {
        const e = t(_).createBuffer();
        return l(e) ? 0 : c(e);
      }
      function at(_, e) {
        const n = t(_).createCommandEncoder(t(e));
        return c(n);
      }
      function ft() {
        return o(function(_, e, n) {
          const b = t(_).createElement(g(e, n));
          return c(b);
        }, arguments);
      }
      function ot(_) {
        const e = t(_).createFramebuffer();
        return l(e) ? 0 : c(e);
      }
      function ut(_) {
        const e = t(_).createFramebuffer();
        return l(e) ? 0 : c(e);
      }
      function dt() {
        return o(function(_, e) {
          const n = URL.createObjectURL(t(e)), b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
          w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
        }, arguments);
      }
      function it(_, e) {
        const n = t(_).createPipelineLayout(t(e));
        return c(n);
      }
      function gt(_) {
        const e = t(_).createProgram();
        return l(e) ? 0 : c(e);
      }
      function st(_) {
        const e = t(_).createProgram();
        return l(e) ? 0 : c(e);
      }
      function wt(_) {
        const e = t(_).createQuery();
        return l(e) ? 0 : c(e);
      }
      function lt() {
        return o(function(_, e) {
          const n = t(_).createRenderPipeline(t(e));
          return c(n);
        }, arguments);
      }
      function mt(_) {
        const e = t(_).createRenderbuffer();
        return l(e) ? 0 : c(e);
      }
      function pt(_) {
        const e = t(_).createRenderbuffer();
        return l(e) ? 0 : c(e);
      }
      function xt(_) {
        const e = t(_).createSampler();
        return l(e) ? 0 : c(e);
      }
      function yt(_, e) {
        const n = t(_).createSampler(t(e));
        return c(n);
      }
      function ht(_, e) {
        const n = t(_).createShaderModule(t(e));
        return c(n);
      }
      function vt(_, e) {
        const n = t(_).createShader(e >>> 0);
        return l(n) ? 0 : c(n);
      }
      function St(_, e) {
        const n = t(_).createShader(e >>> 0);
        return l(n) ? 0 : c(n);
      }
      function It(_) {
        const e = t(_).createTexture();
        return l(e) ? 0 : c(e);
      }
      function At() {
        return o(function(_, e) {
          const n = t(_).createTexture(t(e));
          return c(n);
        }, arguments);
      }
      function Dt(_) {
        const e = t(_).createTexture();
        return l(e) ? 0 : c(e);
      }
      function Pt(_) {
        const e = t(_).createVertexArrayOES();
        return l(e) ? 0 : c(e);
      }
      function Mt(_) {
        const e = t(_).createVertexArray();
        return l(e) ? 0 : c(e);
      }
      function Ft() {
        return o(function(_, e) {
          const n = t(_).createView(t(e));
          return c(n);
        }, arguments);
      }
      function Tt(_) {
        const e = t(_).crypto;
        return c(e);
      }
      function Bt(_) {
        return t(_).ctrlKey;
      }
      function kt(_) {
        return t(_).ctrlKey;
      }
      function Lt(_, e) {
        t(_).cullFace(e >>> 0);
      }
      function Et(_, e) {
        t(_).cullFace(e >>> 0);
      }
      function Rt(_) {
        console.debug(t(_));
      }
      function Ct(_, e) {
        t(_).deleteBuffer(t(e));
      }
      function Ot(_, e) {
        t(_).deleteBuffer(t(e));
      }
      function qt(_, e) {
        t(_).deleteFramebuffer(t(e));
      }
      function Gt(_, e) {
        t(_).deleteFramebuffer(t(e));
      }
      function Vt(_, e) {
        t(_).deleteProgram(t(e));
      }
      function Wt(_, e) {
        t(_).deleteProgram(t(e));
      }
      function Ut(_, e) {
        t(_).deleteQuery(t(e));
      }
      function zt(_, e) {
        t(_).deleteRenderbuffer(t(e));
      }
      function jt(_, e) {
        t(_).deleteRenderbuffer(t(e));
      }
      function Kt(_, e) {
        t(_).deleteSampler(t(e));
      }
      function $t(_, e) {
        t(_).deleteShader(t(e));
      }
      function Nt(_, e) {
        t(_).deleteShader(t(e));
      }
      function Qt(_, e) {
        t(_).deleteSync(t(e));
      }
      function Xt(_, e) {
        t(_).deleteTexture(t(e));
      }
      function Yt(_, e) {
        t(_).deleteTexture(t(e));
      }
      function Ht(_, e) {
        t(_).deleteVertexArrayOES(t(e));
      }
      function Jt(_, e) {
        t(_).deleteVertexArray(t(e));
      }
      function Zt(_) {
        return t(_).deltaMode;
      }
      function _n(_) {
        return t(_).deltaX;
      }
      function en(_) {
        return t(_).deltaY;
      }
      function tn(_, e) {
        t(_).depthFunc(e >>> 0);
      }
      function nn(_, e) {
        t(_).depthFunc(e >>> 0);
      }
      function bn(_, e) {
        t(_).depthMask(e !== 0);
      }
      function rn(_, e) {
        t(_).depthMask(e !== 0);
      }
      function cn(_, e, n) {
        t(_).depthRange(e, n);
      }
      function an(_, e, n) {
        t(_).depthRange(e, n);
      }
      function fn(_) {
        t(_).destroy();
      }
      function on(_) {
        const e = t(_).devicePixelContentBoxSize;
        return c(e);
      }
      function un(_) {
        return t(_).devicePixelRatio;
      }
      function dn(_, e) {
        t(_).disableVertexAttribArray(e >>> 0);
      }
      function gn(_, e) {
        t(_).disableVertexAttribArray(e >>> 0);
      }
      function sn(_, e) {
        t(_).disable(e >>> 0);
      }
      function wn(_, e) {
        t(_).disable(e >>> 0);
      }
      function ln(_) {
        t(_).disconnect();
      }
      function mn(_) {
        t(_).disconnect();
      }
      function pn(_) {
        const e = t(_).document;
        return l(e) ? 0 : c(e);
      }
      function xn(_) {
        return t(_).done;
      }
      function yn(_, e, n, b, r) {
        t(_).drawArraysInstancedANGLE(e >>> 0, n, b, r);
      }
      function hn(_, e, n, b, r) {
        t(_).drawArraysInstanced(e >>> 0, n, b, r);
      }
      function vn(_, e, n, b) {
        t(_).drawArrays(e >>> 0, n, b);
      }
      function Sn(_, e, n, b) {
        t(_).drawArrays(e >>> 0, n, b);
      }
      function In(_, e) {
        t(_).drawBuffersWEBGL(t(e));
      }
      function An(_, e) {
        t(_).drawBuffers(t(e));
      }
      function Dn(_, e, n, b, r, a) {
        t(_).drawElementsInstancedANGLE(e >>> 0, n, b >>> 0, r, a);
      }
      function Pn(_, e, n, b, r, a) {
        t(_).drawElementsInstanced(e >>> 0, n, b >>> 0, r, a);
      }
      function Mn(_, e, n, b, r, a) {
        t(_).drawIndexed(e >>> 0, n >>> 0, b >>> 0, r, a >>> 0);
      }
      function Fn(_, e, n, b, r) {
        t(_).draw(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
      }
      function Tn(_, e) {
        t(_).enableVertexAttribArray(e >>> 0);
      }
      function Bn(_, e) {
        t(_).enableVertexAttribArray(e >>> 0);
      }
      function kn(_, e) {
        t(_).enable(e >>> 0);
      }
      function Ln(_, e) {
        t(_).enable(e >>> 0);
      }
      function En(_, e) {
        t(_).endQuery(e >>> 0);
      }
      function Rn(_) {
        t(_).end();
      }
      function Cn(_) {
        const e = t(_).entries();
        return c(e);
      }
      function On(_) {
        console.error(t(_));
      }
      function qn(_, e) {
        console.error(t(_), t(e));
      }
      function Gn(_, e) {
        let n, b;
        try {
          n = _, b = e, console.error(g(_, e));
        } finally {
          u.__wbindgen_export4(n, b, 1);
        }
      }
      function Vn(_, e, n) {
        const b = t(_).fenceSync(e >>> 0, n >>> 0);
        return l(b) ? 0 : c(b);
      }
      function Wn(_) {
        const e = fetch(t(_));
        return c(e);
      }
      function Un(_, e) {
        const n = t(_).fetch(t(e));
        return c(n);
      }
      function zn(_) {
        t(_).finish();
      }
      function jn(_, e) {
        const n = t(_).finish(t(e));
        return c(n);
      }
      function Kn(_) {
        const e = t(_).finish();
        return c(e);
      }
      function $n(_) {
        t(_).finish();
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
      function Yn(_, e, n, b, r) {
        t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
      }
      function Hn(_, e, n, b, r) {
        t(_).framebufferRenderbuffer(e >>> 0, n >>> 0, b >>> 0, t(r));
      }
      function Jn(_, e, n, b, r, a) {
        t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
      }
      function Zn(_, e, n, b, r, a) {
        t(_).framebufferTexture2D(e >>> 0, n >>> 0, b >>> 0, t(r), a);
      }
      function _b(_, e, n, b, r, a) {
        t(_).framebufferTextureLayer(e >>> 0, n >>> 0, t(b), r, a);
      }
      function eb(_, e, n, b, r, a, f) {
        t(_).framebufferTextureMultiviewOVR(e >>> 0, n >>> 0, t(b), r, a, f);
      }
      function tb(_, e) {
        t(_).frontFace(e >>> 0);
      }
      function nb(_, e) {
        t(_).frontFace(e >>> 0);
      }
      function bb(_) {
        const e = t(_).fullscreenElement;
        return l(e) ? 0 : c(e);
      }
      function rb(_, e, n, b) {
        t(_).getBufferSubData(e >>> 0, n, t(b));
      }
      function cb(_) {
        const e = t(_).getCoalescedEvents();
        return c(e);
      }
      function ab(_) {
        const e = t(_).getCoalescedEvents;
        return c(e);
      }
      function fb() {
        return o(function(_, e) {
          const n = t(_).getComputedStyle(t(e));
          return l(n) ? 0 : c(n);
        }, arguments);
      }
      function ob() {
        return o(function(_, e, n, b) {
          const r = t(_).getContext(g(e, n), t(b));
          return l(r) ? 0 : c(r);
        }, arguments);
      }
      function ub() {
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
      function ib() {
        return o(function(_, e, n) {
          const b = t(_).getContext(g(e, n));
          return l(b) ? 0 : c(b);
        }, arguments);
      }
      function gb() {
        return o(function(_) {
          const e = t(_).getCurrentTexture();
          return c(e);
        }, arguments);
      }
      function sb(_, e, n) {
        const b = t(_).getElementById(g(e, n));
        return l(b) ? 0 : c(b);
      }
      function wb() {
        return o(function(_, e, n) {
          const b = t(_).getExtension(g(e, n));
          return l(b) ? 0 : c(b);
        }, arguments);
      }
      function lb() {
        return o(function(_, e, n) {
          const b = t(_).getIndexedParameter(e >>> 0, n >>> 0);
          return c(b);
        }, arguments);
      }
      function mb() {
        return o(function(_, e, n) {
          const b = t(_).getMappedRange(e, n);
          return c(b);
        }, arguments);
      }
      function pb(_, e) {
        const n = Object.getOwnPropertyDescriptor(t(_), t(e));
        return c(n);
      }
      function xb() {
        return o(function(_, e) {
          const n = t(_).getParameter(e >>> 0);
          return c(n);
        }, arguments);
      }
      function yb() {
        return o(function(_, e) {
          const n = t(_).getParameter(e >>> 0);
          return c(n);
        }, arguments);
      }
      function hb(_) {
        const e = t(_).getPreferredCanvasFormat();
        return (P.indexOf(e) + 1 || 102) - 1;
      }
      function vb(_, e, n) {
        const b = t(e).getProgramInfoLog(t(n));
        var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
        w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
      }
      function Sb(_, e, n) {
        const b = t(e).getProgramInfoLog(t(n));
        var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
        w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
      }
      function Ib(_, e, n) {
        const b = t(_).getProgramParameter(t(e), n >>> 0);
        return c(b);
      }
      function Ab(_, e, n) {
        const b = t(_).getProgramParameter(t(e), n >>> 0);
        return c(b);
      }
      function Db() {
        return o(function(_, e, n, b) {
          const r = t(e).getPropertyValue(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
          w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
        }, arguments);
      }
      function Pb(_, e, n) {
        const b = t(_).getQueryParameter(t(e), n >>> 0);
        return c(b);
      }
      function Mb() {
        return o(function(_, e) {
          t(_).getRandomValues(t(e));
        }, arguments);
      }
      function Fb(_, e, n) {
        const b = t(e).getShaderInfoLog(t(n));
        var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
        w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
      }
      function Tb(_, e, n) {
        const b = t(e).getShaderInfoLog(t(n));
        var r = l(b) ? 0 : h(b, u.__wbindgen_export, u.__wbindgen_export2), a = x;
        w().setInt32(_ + 4, a, true), w().setInt32(_ + 0, r, true);
      }
      function Bb(_, e, n) {
        const b = t(_).getShaderParameter(t(e), n >>> 0);
        return c(b);
      }
      function kb(_, e, n) {
        const b = t(_).getShaderParameter(t(e), n >>> 0);
        return c(b);
      }
      function Lb(_) {
        const e = t(_).getSupportedExtensions();
        return l(e) ? 0 : c(e);
      }
      function Eb(_) {
        const e = t(_).getSupportedProfiles();
        return l(e) ? 0 : c(e);
      }
      function Rb(_, e, n) {
        const b = t(_).getSyncParameter(t(e), n >>> 0);
        return c(b);
      }
      function Cb(_, e, n, b) {
        return t(_).getUniformBlockIndex(t(e), g(n, b));
      }
      function Ob(_, e, n, b) {
        const r = t(_).getUniformLocation(t(e), g(n, b));
        return l(r) ? 0 : c(r);
      }
      function qb(_, e, n, b) {
        const r = t(_).getUniformLocation(t(e), g(n, b));
        return l(r) ? 0 : c(r);
      }
      function Gb(_, e) {
        const n = t(_)[e >>> 0];
        return c(n);
      }
      function Vb() {
        return o(function(_, e) {
          const n = Reflect.get(t(_), t(e));
          return c(n);
        }, arguments);
      }
      function Wb(_, e) {
        const n = t(_)[e >>> 0];
        return l(n) ? 0 : c(n);
      }
      function Ub(_, e) {
        const n = t(_)[e >>> 0];
        return c(n);
      }
      function zb(_) {
        const e = t(_).gpu;
        return c(e);
      }
      function jb() {
        return o(function(_, e) {
          return Reflect.has(t(_), t(e));
        }, arguments);
      }
      function Kb(_) {
        const e = t(_).headers;
        return c(e);
      }
      function $b(_) {
        return t(_).height;
      }
      function Nb(_, e, n) {
        return t(_).includes(t(e), n);
      }
      function Qb(_) {
        console.info(t(_));
      }
      function Xb(_) {
        return t(_).inlineSize;
      }
      function Yb(_) {
        let e;
        try {
          e = t(_) instanceof HTMLCanvasElement;
        } catch {
          e = false;
        }
        return e;
      }
      function Hb(_) {
        let e;
        try {
          e = t(_) instanceof Response;
        } catch {
          e = false;
        }
        return e;
      }
      function Jb(_) {
        let e;
        try {
          e = t(_) instanceof WebGL2RenderingContext;
        } catch {
          e = false;
        }
        return e;
      }
      function Zb(_) {
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
      function br(_, e) {
        const n = t(e).key, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function rr(_, e) {
        const n = t(e).label, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function cr(_) {
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
        return c(e);
      }
      function ir(_) {
        console.log(t(_));
      }
      function gr(_, e, n, b) {
        const r = t(_).mapAsync(e >>> 0, n, b);
        return c(r);
      }
      function sr() {
        return o(function(_, e, n) {
          const b = t(_).matchMedia(g(e, n));
          return l(b) ? 0 : c(b);
        }, arguments);
      }
      function wr(_) {
        return t(_).matches;
      }
      function lr(_, e) {
        const n = t(e).media, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
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
        return c(e);
      }
      function vr(_) {
        const e = t(_).navigator;
        return c(e);
      }
      function Sr(_) {
        const e = t(_).navigator;
        return c(e);
      }
      function Ir() {
        return o(function() {
          const _ = new Headers();
          return c(_);
        }, arguments);
      }
      function Ar() {
        const _ = new Error();
        return c(_);
      }
      function Dr() {
        return o(function(_, e) {
          const n = new OffscreenCanvas(_ >>> 0, e >>> 0);
          return c(n);
        }, arguments);
      }
      function Pr() {
        const _ = new Array();
        return c(_);
      }
      function Mr() {
        return o(function() {
          const _ = new AbortController();
          return c(_);
        }, arguments);
      }
      function Fr() {
        return o(function(_) {
          const e = new ResizeObserver(t(_));
          return c(e);
        }, arguments);
      }
      function Tr() {
        return o(function(_, e) {
          const n = new Worker(g(_, e));
          return c(n);
        }, arguments);
      }
      function Br(_) {
        const e = new Uint8Array(t(_));
        return c(e);
      }
      function kr() {
        const _ = new Object();
        return c(_);
      }
      function Lr() {
        return o(function(_) {
          const e = new IntersectionObserver(t(_));
          return c(e);
        }, arguments);
      }
      function Er() {
        return o(function() {
          const _ = new MessageChannel();
          return c(_);
        }, arguments);
      }
      function Rr(_, e) {
        const n = new Uint8Array(U(_, e));
        return c(n);
      }
      function Cr() {
        const _ = new Object();
        return c(_);
      }
      function Or(_, e, n) {
        const b = new Uint8Array(t(_), e >>> 0, n >>> 0);
        return c(b);
      }
      function qr(_) {
        const e = new Uint8Array(_ >>> 0);
        return c(e);
      }
      function Gr() {
        return o(function(_, e, n) {
          const b = new Request(g(_, e), t(n));
          return c(b);
        }, arguments);
      }
      function Vr() {
        return o(function(_, e) {
          const n = new Blob(t(_), t(e));
          return c(n);
        }, arguments);
      }
      function Wr() {
        return o(function(_) {
          const e = t(_).next();
          return c(e);
        }, arguments);
      }
      function Ur(_) {
        const e = t(_).node;
        return c(e);
      }
      function zr(_) {
        return t(_).now();
      }
      function jr(_) {
        return t(_).now();
      }
      function Kr(_, e, n) {
        t(_).observe(t(e), t(n));
      }
      function $r(_, e) {
        t(_).observe(t(e));
      }
      function Nr(_, e) {
        t(_).observe(t(e));
      }
      function Qr(_, e) {
        const n = Array.of(t(_), t(e));
        return c(n);
      }
      function Xr(_) {
        const e = Array.of(t(_));
        return c(e);
      }
      function Yr(_) {
        return t(_).offsetX;
      }
      function Hr(_) {
        return t(_).offsetY;
      }
      function Jr(_) {
        const e = t(_).onSubmittedWorkDone();
        return c(e);
      }
      function Zr() {
        return o(function(_, e) {
          const n = t(e).origin, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
          w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
        }, arguments);
      }
      function _c(_) {
        const e = t(_).performance;
        return c(e);
      }
      function ec(_) {
        return t(_).persisted;
      }
      function tc(_, e, n) {
        t(_).pixelStorei(e >>> 0, n);
      }
      function nc(_, e, n) {
        t(_).pixelStorei(e >>> 0, n);
      }
      function bc(_) {
        t(_).play();
      }
      function rc(_) {
        return t(_).pointerId;
      }
      function cc(_, e) {
        const n = t(e).pointerType, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function ac(_, e, n) {
        t(_).polygonOffset(e, n);
      }
      function fc(_, e, n) {
        t(_).polygonOffset(e, n);
      }
      function oc(_) {
        const e = t(_).port1;
        return c(e);
      }
      function uc(_) {
        const e = t(_).port2;
        return c(e);
      }
      function dc() {
        return o(function(_, e) {
          t(_).postMessage(t(e));
        }, arguments);
      }
      function ic() {
        return o(function(_, e, n) {
          t(_).postMessage(t(e), t(n));
        }, arguments);
      }
      function gc(_, e, n) {
        const b = t(_).postTask(t(e), t(n));
        return c(b);
      }
      function sc(_) {
        return t(_).pressure;
      }
      function wc(_) {
        t(_).preventDefault();
      }
      function lc(_) {
        const e = t(_).process;
        return c(e);
      }
      function mc() {
        const _ = ResizeObserverEntry.prototype;
        return c(_);
      }
      function pc(_, e, n) {
        Uint8Array.prototype.set.call(U(_, e), t(n));
      }
      function xc(_, e) {
        return t(_).push(t(e));
      }
      function yc(_, e, n) {
        t(_).queryCounterEXT(t(e), n >>> 0);
      }
      function hc() {
        return o(function(_, e, n) {
          const b = t(_).querySelectorAll(g(e, n));
          return c(b);
        }, arguments);
      }
      function vc() {
        return o(function(_, e, n) {
          const b = t(_).querySelector(g(e, n));
          return l(b) ? 0 : c(b);
        }, arguments);
      }
      function Sc(_) {
        const e = t(_).queueMicrotask;
        return c(e);
      }
      function Ic(_) {
        queueMicrotask(t(_));
      }
      function Ac(_, e) {
        t(_).queueMicrotask(t(e));
      }
      function Dc(_) {
        const e = t(_).queue;
        return c(e);
      }
      function Pc() {
        return o(function(_, e) {
          t(_).randomFillSync(M(e));
        }, arguments);
      }
      function Mc(_, e) {
        t(_).readBuffer(e >>> 0);
      }
      function Fc() {
        return o(function(_, e, n, b, r, a, f, d) {
          t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
        }, arguments);
      }
      function Tc() {
        return o(function(_, e, n, b, r, a, f, d) {
          t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, d);
        }, arguments);
      }
      function Bc() {
        return o(function(_, e, n, b, r, a, f, d) {
          t(_).readPixels(e, n, b, r, a >>> 0, f >>> 0, t(d));
        }, arguments);
      }
      function kc() {
        return o(function(_, e, n, b) {
          t(_).removeEventListener(g(e, n), t(b));
        }, arguments);
      }
      function Lc() {
        return o(function(_, e) {
          t(_).removeListener(t(e));
        }, arguments);
      }
      function Ec() {
        return o(function(_, e, n, b) {
          const r = t(e).removeProperty(g(n, b)), a = h(r, u.__wbindgen_export, u.__wbindgen_export2), f = x;
          w().setInt32(_ + 4, f, true), w().setInt32(_ + 0, a, true);
        }, arguments);
      }
      function Rc(_, e, n, b, r, a) {
        t(_).renderbufferStorageMultisample(e >>> 0, n, b >>> 0, r, a);
      }
      function Cc(_, e, n, b, r) {
        t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
      }
      function Oc(_, e, n, b, r) {
        t(_).renderbufferStorage(e >>> 0, n >>> 0, b, r);
      }
      function qc(_) {
        return t(_).repeat;
      }
      function Gc(_, e) {
        const n = t(_).requestAdapter(t(e));
        return c(n);
      }
      function Vc() {
        return o(function(_, e) {
          return t(_).requestAnimationFrame(t(e));
        }, arguments);
      }
      function Wc(_, e) {
        const n = t(_).requestDevice(t(e));
        return c(n);
      }
      function Uc(_) {
        const e = t(_).requestFullscreen();
        return c(e);
      }
      function zc(_) {
        const e = t(_).requestFullscreen;
        return c(e);
      }
      function jc(_) {
        const e = t(_).requestIdleCallback;
        return c(e);
      }
      function Kc() {
        return o(function(_, e) {
          return t(_).requestIdleCallback(t(e));
        }, arguments);
      }
      function $c() {
        return o(function() {
          const _ = module.require;
          return c(_);
        }, arguments);
      }
      function Nc(_) {
        const e = Promise.resolve(t(_));
        return c(e);
      }
      function Qc() {
        return o(function(_, e) {
          URL.revokeObjectURL(g(_, e));
        }, arguments);
      }
      function Xc(_, e, n, b) {
        t(_).samplerParameterf(t(e), n >>> 0, b);
      }
      function Yc(_, e, n, b) {
        t(_).samplerParameteri(t(e), n >>> 0, b);
      }
      function Hc(_) {
        const e = t(_).scheduler;
        return c(e);
      }
      function Jc(_) {
        const e = t(_).scheduler;
        return c(e);
      }
      function Zc(_, e, n, b, r) {
        t(_).scissor(e, n, b, r);
      }
      function _a(_, e, n, b, r) {
        t(_).scissor(e, n, b, r);
      }
      function ea() {
        return o(function(_, e, n, b, r) {
          t(_).setAttribute(g(e, n), g(b, r));
        }, arguments);
      }
      function ta() {
        return o(function(_, e, n, b, r, a, f) {
          t(_).setBindGroup(e >>> 0, t(n), T(b, r), a, f >>> 0);
        }, arguments);
      }
      function na(_, e, n) {
        t(_).setBindGroup(e >>> 0, t(n));
      }
      function ba(_, e, n, b) {
        t(_).setIndexBuffer(t(e), N[n], b);
      }
      function ra(_, e, n, b, r) {
        t(_).setIndexBuffer(t(e), N[n], b, r);
      }
      function ca(_, e) {
        t(_).setPipeline(t(e));
      }
      function aa() {
        return o(function(_, e) {
          t(_).setPointerCapture(e);
        }, arguments);
      }
      function fa() {
        return o(function(_, e, n, b, r) {
          t(_).setProperty(g(e, n), g(b, r));
        }, arguments);
      }
      function oa(_, e) {
        t(_).setStencilReference(e >>> 0);
      }
      function ua(_, e) {
        const n = setTimeout(t(_), e);
        return c(n);
      }
      function da() {
        return o(function(_, e) {
          return t(_).setTimeout(t(e));
        }, arguments);
      }
      function ia() {
        return o(function(_, e, n) {
          return t(_).setTimeout(t(e), n);
        }, arguments);
      }
      function ga(_, e, n, b) {
        t(_).setVertexBuffer(e >>> 0, t(n), b);
      }
      function sa(_, e, n, b, r) {
        t(_).setVertexBuffer(e >>> 0, t(n), b, r);
      }
      function wa(_, e, n) {
        t(_).set(t(e), n >>> 0);
      }
      function la() {
        return o(function(_, e, n) {
          return Reflect.set(t(_), t(e), t(n));
        }, arguments);
      }
      function ma(_, e) {
        t(_).a = e;
      }
      function pa(_, e) {
        t(_).access = Ri[e];
      }
      function xa(_, e) {
        t(_).addressModeU = K[e];
      }
      function ya(_, e) {
        t(_).addressModeV = K[e];
      }
      function ha(_, e) {
        t(_).addressModeW = K[e];
      }
      function va(_, e) {
        t(_).alpha = t(e);
      }
      function Sa(_, e) {
        t(_).alphaMode = Pi[e];
      }
      function Ia(_, e) {
        t(_).alphaToCoverageEnabled = e !== 0;
      }
      function Aa(_, e) {
        t(_).arrayLayerCount = e >>> 0;
      }
      function Da(_, e) {
        t(_).arrayStride = e;
      }
      function Pa(_, e) {
        t(_).aspect = e_[e];
      }
      function Ma(_, e) {
        t(_).aspect = e_[e];
      }
      function Fa(_, e, n) {
        t(_).attributes = I(e, n);
      }
      function Ta(_, e) {
        t(_).b = e;
      }
      function Ba(_, e) {
        t(_).baseArrayLayer = e >>> 0;
      }
      function ka(_, e) {
        t(_).baseMipLevel = e >>> 0;
      }
      function La(_, e) {
        t(_).beginningOfPassWriteIndex = e >>> 0;
      }
      function Ea(_, e, n) {
        t(_).bindGroupLayouts = I(e, n);
      }
      function Ra(_, e) {
        t(_).binding = e >>> 0;
      }
      function Ca(_, e) {
        t(_).binding = e >>> 0;
      }
      function Oa(_, e) {
        t(_).blend = t(e);
      }
      function qa(_, e) {
        t(_).body = t(e);
      }
      function Ga(_, e) {
        t(_).box = zi[e];
      }
      function Va(_, e) {
        t(_).buffer = t(e);
      }
      function Wa(_, e) {
        t(_).buffer = t(e);
      }
      function Ua(_, e, n) {
        t(_).buffers = I(e, n);
      }
      function za(_, e) {
        t(_).bytesPerRow = e >>> 0;
      }
      function ja(_, e) {
        t(_).cache = Vi[e];
      }
      function Ka(_, e) {
        t(_).clearValue = t(e);
      }
      function $a(_, e, n) {
        t(_).code = g(e, n);
      }
      function Na(_, e) {
        t(_).color = t(e);
      }
      function Qa(_, e, n) {
        t(_).colorAttachments = I(e, n);
      }
      function Xa(_, e) {
        t(_).compare = $[e];
      }
      function Ya(_, e) {
        t(_).compare = $[e];
      }
      function Ha(_, e) {
        t(_).count = e >>> 0;
      }
      function Ja(_, e) {
        t(_).credentials = Wi[e];
      }
      function Za(_, e) {
        t(_).cullMode = Fi[e];
      }
      function _f(_, e) {
        t(_).depthBiasClamp = e;
      }
      function ef(_, e) {
        t(_).depthBias = e;
      }
      function tf(_, e) {
        t(_).depthBiasSlopeScale = e;
      }
      function nf(_, e) {
        t(_).depthClearValue = e;
      }
      function bf(_, e) {
        t(_).depthCompare = $[e];
      }
      function rf(_, e) {
        t(_).depthFailOp = X[e];
      }
      function cf(_, e) {
        t(_).depthLoadOp = Q[e];
      }
      function af(_, e) {
        t(_).depthOrArrayLayers = e >>> 0;
      }
      function ff(_, e) {
        t(_).depthReadOnly = e !== 0;
      }
      function of(_, e) {
        t(_).depthStencil = t(e);
      }
      function uf(_, e) {
        t(_).depthStencilAttachment = t(e);
      }
      function df(_, e) {
        t(_).depthStoreOp = Y[e];
      }
      function gf(_, e) {
        t(_).depthWriteEnabled = e !== 0;
      }
      function sf(_, e) {
        t(_).device = t(e);
      }
      function wf(_, e) {
        t(_).dimension = Ci[e];
      }
      function lf(_, e) {
        t(_).dimension = H[e];
      }
      function mf(_, e) {
        t(_).dstFactor = Z[e];
      }
      function pf(_, e) {
        t(_).endOfPassWriteIndex = e >>> 0;
      }
      function xf(_, e, n) {
        t(_).entries = I(e, n);
      }
      function yf(_, e, n) {
        t(_).entries = I(e, n);
      }
      function hf(_, e, n) {
        t(_).entryPoint = g(e, n);
      }
      function vf(_, e, n) {
        t(_).entryPoint = g(e, n);
      }
      function Sf(_, e) {
        t(_).externalTexture = t(e);
      }
      function If(_, e) {
        t(_).failOp = X[e];
      }
      function Af(_, e) {
        t(_).format = P[e];
      }
      function Df(_, e) {
        t(_).format = P[e];
      }
      function Pf(_, e) {
        t(_).format = P[e];
      }
      function Mf(_, e) {
        t(_).format = qi[e];
      }
      function Ff(_, e) {
        t(_).format = P[e];
      }
      function Tf(_, e) {
        t(_).format = P[e];
      }
      function Bf(_, e) {
        t(_).format = P[e];
      }
      function kf(_, e) {
        t(_).fragment = t(e);
      }
      function Lf(_, e) {
        t(_).frontFace = Ti[e];
      }
      function Ef(_, e) {
        t(_).g = e;
      }
      function Rf(_, e) {
        t(_).hasDynamicOffset = e !== 0;
      }
      function Cf(_, e) {
        t(_).headers = t(e);
      }
      function Of(_, e) {
        t(_).height = e >>> 0;
      }
      function qf(_, e) {
        t(_).height = e >>> 0;
      }
      function Gf(_, e) {
        t(_).height = e >>> 0;
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
        t(_).layout = Ii[e];
      }
      function to(_, e) {
        t(_).loadOp = Q[e];
      }
      function no(_, e) {
        t(_).lodMaxClamp = e;
      }
      function bo(_, e) {
        t(_).lodMinClamp = e;
      }
      function ro(_, e) {
        t(_).magFilter = __[e];
      }
      function co(_, e) {
        t(_).mappedAtCreation = e !== 0;
      }
      function ao(_, e) {
        t(_).mask = e >>> 0;
      }
      function fo(_, e) {
        t(_).maxAnisotropy = e;
      }
      function oo(_, e, n) {
        t(_).method = g(e, n);
      }
      function uo(_, e) {
        t(_).minBindingSize = e;
      }
      function io(_, e) {
        t(_).minFilter = __[e];
      }
      function go(_, e) {
        t(_).mipLevelCount = e >>> 0;
      }
      function so(_, e) {
        t(_).mipLevelCount = e >>> 0;
      }
      function wo(_, e) {
        t(_).mipLevel = e >>> 0;
      }
      function lo(_, e) {
        t(_).mipmapFilter = Bi[e];
      }
      function mo(_, e) {
        t(_).mode = Ui[e];
      }
      function po(_, e) {
        t(_).mode = Mi[e];
      }
      function xo(_, e) {
        t(_).module = t(e);
      }
      function yo(_, e) {
        t(_).module = t(e);
      }
      function ho(_, e) {
        t(_).multisample = t(e);
      }
      function vo(_, e) {
        t(_).multisampled = e !== 0;
      }
      function So(_, e) {
        t(_).offset = e;
      }
      function Io(_, e) {
        t(_).offset = e;
      }
      function Ao(_, e) {
        t(_).offset = e;
      }
      function Do(_, e) {
        t(_).onmessage = t(e);
      }
      function Po(_, e) {
        t(_).operation = Ai[e];
      }
      function Mo(_, e) {
        t(_).origin = t(e);
      }
      function Fo(_, e) {
        t(_).passOp = X[e];
      }
      function To(_, e) {
        t(_).powerPreference = ki[e];
      }
      function Bo(_, e) {
        t(_).primitive = t(e);
      }
      function ko(_, e) {
        t(_).querySet = t(e);
      }
      function Lo(_, e) {
        t(_).r = e;
      }
      function Eo(_, e, n) {
        t(_).requiredFeatures = I(e, n);
      }
      function Ro(_, e) {
        t(_).requiredLimits = t(e);
      }
      function Co(_, e) {
        t(_).resolveTarget = t(e);
      }
      function Oo(_, e) {
        t(_).resource = t(e);
      }
      function qo(_, e) {
        t(_).resource = t(e);
      }
      function Go(_, e) {
        t(_).resource = t(e);
      }
      function Vo(_, e) {
        t(_).rowsPerImage = e >>> 0;
      }
      function Wo(_, e) {
        t(_).sampleCount = e >>> 0;
      }
      function Uo(_, e) {
        t(_).sampleType = Oi[e];
      }
      function zo(_, e) {
        t(_).sampler = t(e);
      }
      function jo(_, e) {
        t(_).shaderLocation = e >>> 0;
      }
      function Ko(_, e) {
        t(_).signal = t(e);
      }
      function $o(_, e) {
        t(_).size = e;
      }
      function No(_, e) {
        t(_).size = e;
      }
      function Qo(_, e) {
        t(_).size = t(e);
      }
      function Xo(_, e) {
        t(_).srcFactor = Z[e];
      }
      function Yo(_, e) {
        t(_).stencilBack = t(e);
      }
      function Ho(_, e) {
        t(_).stencilClearValue = e >>> 0;
      }
      function Jo(_, e) {
        t(_).stencilFront = t(e);
      }
      function Zo(_, e) {
        t(_).stencilLoadOp = Q[e];
      }
      function _u(_, e) {
        t(_).stencilReadMask = e >>> 0;
      }
      function eu(_, e) {
        t(_).stencilReadOnly = e !== 0;
      }
      function tu(_, e) {
        t(_).stencilStoreOp = Y[e];
      }
      function nu(_, e) {
        t(_).stencilWriteMask = e >>> 0;
      }
      function bu(_, e) {
        t(_).stepMode = Gi[e];
      }
      function ru(_, e) {
        t(_).storageTexture = t(e);
      }
      function cu(_, e) {
        t(_).storeOp = Y[e];
      }
      function au(_, e) {
        t(_).stripIndexFormat = N[e];
      }
      function fu(_, e, n) {
        t(_).targets = I(e, n);
      }
      function ou(_, e) {
        t(_).texture = t(e);
      }
      function uu(_, e) {
        t(_).texture = t(e);
      }
      function du(_, e) {
        t(_).timestampWrites = t(e);
      }
      function iu(_, e) {
        t(_).toneMapping = t(e);
      }
      function gu(_, e) {
        t(_).topology = Li[e];
      }
      function su(_, e, n) {
        t(_).type = g(e, n);
      }
      function wu(_, e) {
        t(_).type = Ei[e];
      }
      function lu(_, e) {
        t(_).type = Di[e];
      }
      function mu(_, e) {
        t(_).unclippedDepth = e !== 0;
      }
      function pu(_, e) {
        t(_).usage = e >>> 0;
      }
      function xu(_, e) {
        t(_).usage = e >>> 0;
      }
      function yu(_, e) {
        t(_).usage = e >>> 0;
      }
      function hu(_, e) {
        t(_).usage = e >>> 0;
      }
      function vu(_, e) {
        t(_).vertex = t(e);
      }
      function Su(_, e) {
        t(_).viewDimension = H[e];
      }
      function Iu(_, e) {
        t(_).viewDimension = H[e];
      }
      function Au(_, e, n) {
        t(_).viewFormats = I(e, n);
      }
      function Du(_, e, n) {
        t(_).viewFormats = I(e, n);
      }
      function Pu(_, e) {
        t(_).view = t(e);
      }
      function Mu(_, e) {
        t(_).view = t(e);
      }
      function Fu(_, e) {
        t(_).visibility = e >>> 0;
      }
      function Tu(_, e) {
        t(_).width = e >>> 0;
      }
      function Bu(_, e) {
        t(_).width = e >>> 0;
      }
      function ku(_, e) {
        t(_).width = e >>> 0;
      }
      function Lu(_, e) {
        t(_).writeMask = e >>> 0;
      }
      function Eu(_, e) {
        t(_).x = e >>> 0;
      }
      function Ru(_, e) {
        t(_).y = e >>> 0;
      }
      function Cu(_, e) {
        t(_).z = e >>> 0;
      }
      function Ou(_, e, n, b) {
        t(_).shaderSource(t(e), g(n, b));
      }
      function qu(_, e, n, b) {
        t(_).shaderSource(t(e), g(n, b));
      }
      function Gu(_) {
        return t(_).shiftKey;
      }
      function Vu(_) {
        return t(_).shiftKey;
      }
      function Wu(_) {
        const e = t(_).signal;
        return c(e);
      }
      function Uu(_, e) {
        const n = t(e).stack, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function zu(_) {
        t(_).start();
      }
      function ju() {
        const _ = typeof global > "u" ? null : global;
        return l(_) ? 0 : c(_);
      }
      function Ku() {
        const _ = typeof globalThis > "u" ? null : globalThis;
        return l(_) ? 0 : c(_);
      }
      function $u() {
        const _ = typeof self > "u" ? null : self;
        return l(_) ? 0 : c(_);
      }
      function Nu() {
        const _ = typeof window > "u" ? null : window;
        return l(_) ? 0 : c(_);
      }
      function Qu(_) {
        return t(_).status;
      }
      function Xu(_, e, n, b, r) {
        t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
      }
      function Yu(_, e, n, b, r) {
        t(_).stencilFuncSeparate(e >>> 0, n >>> 0, b, r >>> 0);
      }
      function Hu(_, e, n) {
        t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
      }
      function Ju(_, e, n) {
        t(_).stencilMaskSeparate(e >>> 0, n >>> 0);
      }
      function Zu(_, e) {
        t(_).stencilMask(e >>> 0);
      }
      function _0(_, e) {
        t(_).stencilMask(e >>> 0);
      }
      function e0(_, e, n, b, r) {
        t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
      }
      function t0(_, e, n, b, r) {
        t(_).stencilOpSeparate(e >>> 0, n >>> 0, b >>> 0, r >>> 0);
      }
      function n0(_) {
        const e = t(_).style;
        return c(e);
      }
      function b0(_, e, n) {
        const b = t(_).subarray(e >>> 0, n >>> 0);
        return c(b);
      }
      function r0(_, e, n) {
        t(_).submit(I(e, n));
      }
      function c0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function a0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function f0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
        }, arguments);
      }
      function o0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p) {
          t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, p);
        }, arguments);
      }
      function u0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p) {
          t(_).texImage3D(e >>> 0, n, b, r, a, f, d, i >>> 0, s >>> 0, t(p));
        }, arguments);
      }
      function d0(_, e, n, b) {
        t(_).texParameteri(e >>> 0, n >>> 0, b);
      }
      function i0(_, e, n, b) {
        t(_).texParameteri(e >>> 0, n >>> 0, b);
      }
      function g0(_, e, n, b, r, a) {
        t(_).texStorage2D(e >>> 0, n, b >>> 0, r, a);
      }
      function s0(_, e, n, b, r, a, f) {
        t(_).texStorage3D(e >>> 0, n, b >>> 0, r, a, f);
      }
      function w0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, s);
        }, arguments);
      }
      function l0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function m0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function p0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function x0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function y0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function h0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function v0() {
        return o(function(_, e, n, b, r, a, f, d, i, s) {
          t(_).texSubImage2D(e >>> 0, n, b, r, a, f, d >>> 0, i >>> 0, t(s));
        }, arguments);
      }
      function S0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function I0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function A0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function D0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, v);
        }, arguments);
      }
      function P0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function M0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function F0() {
        return o(function(_, e, n, b, r, a, f, d, i, s, p, v) {
          t(_).texSubImage3D(e >>> 0, n, b, r, a, f, d, i, s >>> 0, p >>> 0, t(v));
        }, arguments);
      }
      function T0() {
        return o(function(_) {
          const e = t(_).text();
          return c(e);
        }, arguments);
      }
      function B0(_, e, n) {
        const b = t(_).then(t(e), t(n));
        return c(b);
      }
      function k0(_, e) {
        const n = t(_).then(t(e));
        return c(n);
      }
      function L0(_) {
        t(_).unconfigure();
      }
      function E0(_, e, n) {
        t(_).uniform1f(t(e), n);
      }
      function R0(_, e, n) {
        t(_).uniform1f(t(e), n);
      }
      function C0(_, e, n) {
        t(_).uniform1i(t(e), n);
      }
      function O0(_, e, n) {
        t(_).uniform1i(t(e), n);
      }
      function q0(_, e, n) {
        t(_).uniform1ui(t(e), n >>> 0);
      }
      function G0(_, e, n, b) {
        t(_).uniform2fv(t(e), y(n, b));
      }
      function V0(_, e, n, b) {
        t(_).uniform2fv(t(e), y(n, b));
      }
      function W0(_, e, n, b) {
        t(_).uniform2iv(t(e), D(n, b));
      }
      function U0(_, e, n, b) {
        t(_).uniform2iv(t(e), D(n, b));
      }
      function z0(_, e, n, b) {
        t(_).uniform2uiv(t(e), T(n, b));
      }
      function j0(_, e, n, b) {
        t(_).uniform3fv(t(e), y(n, b));
      }
      function K0(_, e, n, b) {
        t(_).uniform3fv(t(e), y(n, b));
      }
      function $0(_, e, n, b) {
        t(_).uniform3iv(t(e), D(n, b));
      }
      function N0(_, e, n, b) {
        t(_).uniform3iv(t(e), D(n, b));
      }
      function Q0(_, e, n, b) {
        t(_).uniform3uiv(t(e), T(n, b));
      }
      function X0(_, e, n, b, r, a) {
        t(_).uniform4f(t(e), n, b, r, a);
      }
      function Y0(_, e, n, b, r, a) {
        t(_).uniform4f(t(e), n, b, r, a);
      }
      function H0(_, e, n, b) {
        t(_).uniform4fv(t(e), y(n, b));
      }
      function J0(_, e, n, b) {
        t(_).uniform4fv(t(e), y(n, b));
      }
      function Z0(_, e, n, b) {
        t(_).uniform4iv(t(e), D(n, b));
      }
      function _d(_, e, n, b) {
        t(_).uniform4iv(t(e), D(n, b));
      }
      function ed(_, e, n, b) {
        t(_).uniform4uiv(t(e), T(n, b));
      }
      function td(_, e, n, b) {
        t(_).uniformBlockBinding(t(e), n >>> 0, b >>> 0);
      }
      function nd(_, e, n, b, r) {
        t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
      }
      function bd(_, e, n, b, r) {
        t(_).uniformMatrix2fv(t(e), n !== 0, y(b, r));
      }
      function rd(_, e, n, b, r) {
        t(_).uniformMatrix2x3fv(t(e), n !== 0, y(b, r));
      }
      function cd(_, e, n, b, r) {
        t(_).uniformMatrix2x4fv(t(e), n !== 0, y(b, r));
      }
      function ad(_, e, n, b, r) {
        t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
      }
      function fd(_, e, n, b, r) {
        t(_).uniformMatrix3fv(t(e), n !== 0, y(b, r));
      }
      function od(_, e, n, b, r) {
        t(_).uniformMatrix3x2fv(t(e), n !== 0, y(b, r));
      }
      function ud(_, e, n, b, r) {
        t(_).uniformMatrix3x4fv(t(e), n !== 0, y(b, r));
      }
      function dd(_, e, n, b, r) {
        t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
      }
      function id(_, e, n, b, r) {
        t(_).uniformMatrix4fv(t(e), n !== 0, y(b, r));
      }
      function gd(_, e, n, b, r) {
        t(_).uniformMatrix4x2fv(t(e), n !== 0, y(b, r));
      }
      function sd(_, e, n, b, r) {
        t(_).uniformMatrix4x3fv(t(e), n !== 0, y(b, r));
      }
      function wd(_) {
        t(_).unmap();
      }
      function ld(_, e) {
        t(_).unobserve(t(e));
      }
      function md(_, e) {
        const n = t(e).url, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
        w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
      }
      function pd(_, e) {
        t(_).useProgram(t(e));
      }
      function xd(_, e) {
        t(_).useProgram(t(e));
      }
      function yd(_) {
        const e = t(_).userAgentData;
        return l(e) ? 0 : c(e);
      }
      function hd() {
        return o(function(_, e) {
          const n = t(e).userAgent, b = h(n, u.__wbindgen_export, u.__wbindgen_export2), r = x;
          w().setInt32(_ + 4, r, true), w().setInt32(_ + 0, b, true);
        }, arguments);
      }
      function vd(_) {
        const e = t(_).value;
        return c(e);
      }
      function Sd(_) {
        const e = t(_).versions;
        return c(e);
      }
      function Id(_, e, n) {
        t(_).vertexAttribDivisorANGLE(e >>> 0, n >>> 0);
      }
      function Ad(_, e, n) {
        t(_).vertexAttribDivisor(e >>> 0, n >>> 0);
      }
      function Dd(_, e, n, b, r, a) {
        t(_).vertexAttribIPointer(e >>> 0, n, b >>> 0, r, a);
      }
      function Pd(_, e, n, b, r, a, f) {
        t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
      }
      function Md(_, e, n, b, r, a, f) {
        t(_).vertexAttribPointer(e >>> 0, n, b >>> 0, r !== 0, a, f);
      }
      function Fd(_, e, n, b, r) {
        t(_).viewport(e, n, b, r);
      }
      function Td(_, e, n, b, r) {
        t(_).viewport(e, n, b, r);
      }
      function Bd(_) {
        const e = t(_).visibilityState;
        return (ji.indexOf(e) + 1 || 3) - 1;
      }
      function kd(_) {
        console.warn(t(_));
      }
      function Ld(_) {
        const e = t(_).webkitFullscreenElement;
        return l(e) ? 0 : c(e);
      }
      function Ed(_) {
        t(_).webkitRequestFullscreen();
      }
      function Rd(_) {
        return t(_).width;
      }
      function Cd() {
        return o(function(_, e, n, b, r, a) {
          t(_).writeTexture(t(e), U(n, b), t(r), t(a));
        }, arguments);
      }
      function Od(_, e) {
        const n = S(_, e, di);
        return c(n);
      }
      function qd(_, e) {
        const n = S(_, e, xi);
        return c(n);
      }
      function Gd(_, e) {
        const n = S(_, e, yi);
        return c(n);
      }
      function Vd(_, e) {
        const n = S(_, e, ii);
        return c(n);
      }
      function Wd(_, e) {
        const n = S(_, e, gi);
        return c(n);
      }
      function Ud(_, e) {
        const n = S(_, e, si);
        return c(n);
      }
      function zd(_, e) {
        const n = S(_, e, hi);
        return c(n);
      }
      function jd(_, e) {
        const n = S(_, e, wi);
        return c(n);
      }
      function Kd(_, e) {
        const n = S(_, e, li);
        return c(n);
      }
      function $d(_, e) {
        const n = S(_, e, mi);
        return c(n);
      }
      function Nd(_, e) {
        const n = S(_, e, pi);
        return c(n);
      }
      function Qd(_, e) {
        const n = S(_, e, vi);
        return c(n);
      }
      function Xd(_, e) {
        const n = S(_, e, Si);
        return c(n);
      }
      function Yd(_, e) {
        const n = S(_, e, oi);
        return c(n);
      }
      function Hd(_, e) {
        const n = S(_, e, ui);
        return c(n);
      }
      function Jd(_) {
        return c(_);
      }
      function Zd(_, e) {
        const n = y(_, e);
        return c(n);
      }
      function _i(_, e) {
        const n = $i(_, e);
        return c(n);
      }
      function ei(_, e) {
        const n = D(_, e);
        return c(n);
      }
      function ti(_, e) {
        const n = Ni(_, e);
        return c(n);
      }
      function ni(_, e) {
        const n = Qi(_, e);
        return c(n);
      }
      function bi(_, e) {
        const n = T(_, e);
        return c(n);
      }
      function ri(_, e) {
        const n = U(_, e);
        return c(n);
      }
      function ci(_, e) {
        const n = g(_, e);
        return c(n);
      }
      function ai(_) {
        const e = t(_);
        return c(e);
      }
      function fi(_) {
        M(_);
      }
      function oi(_, e) {
        u.__wasm_bindgen_func_elem_3375(_, e);
      }
      function ui(_, e) {
        u.__wasm_bindgen_func_elem_1574(_, e);
      }
      function di(_, e, n) {
        u.__wasm_bindgen_func_elem_3368(_, e, c(n));
      }
      function ii(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_3(_, e, c(n));
      }
      function gi(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_4(_, e, c(n));
      }
      function si(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_5(_, e, c(n));
      }
      function wi(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_7(_, e, c(n));
      }
      function li(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_8(_, e, c(n));
      }
      function mi(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_9(_, e, c(n));
      }
      function pi(_, e, n) {
        u.__wasm_bindgen_func_elem_3368_10(_, e, c(n));
      }
      function xi(_, e, n) {
        try {
          const a = u.__wbindgen_add_to_stack_pointer(-16);
          u.__wasm_bindgen_func_elem_11740(a, _, e, c(n));
          var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
          if (r) throw M(b);
        } finally {
          u.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function yi(_, e, n, b) {
        u.__wasm_bindgen_func_elem_3366(_, e, c(n), c(b));
      }
      function hi(_, e, n) {
        try {
          const a = u.__wbindgen_add_to_stack_pointer(-16);
          u.__wasm_bindgen_func_elem_4399(a, _, e, c(n));
          var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
          if (r) throw M(b);
        } finally {
          u.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function vi(_, e, n) {
        try {
          const a = u.__wbindgen_add_to_stack_pointer(-16);
          u.__wasm_bindgen_func_elem_4399_11(a, _, e, c(n));
          var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
          if (r) throw M(b);
        } finally {
          u.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function Si(_, e, n) {
        try {
          const a = u.__wbindgen_add_to_stack_pointer(-16);
          u.__wasm_bindgen_func_elem_4399_12(a, _, e, c(n));
          var b = w().getInt32(a + 0, true), r = w().getInt32(a + 4, true);
          if (r) throw M(b);
        } finally {
          u.__wbindgen_add_to_stack_pointer(16);
        }
      }
      const K = [
        "clamp-to-edge",
        "repeat",
        "mirror-repeat"
      ], Ii = [
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
      ], Ai = [
        "add",
        "subtract",
        "reverse-subtract",
        "min",
        "max"
      ], Di = [
        "uniform",
        "storage",
        "read-only-storage"
      ], Pi = [
        "opaque",
        "premultiplied"
      ], Mi = [
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
      ], Fi = [
        "none",
        "front",
        "back"
      ], __ = [
        "nearest",
        "linear"
      ], Ti = [
        "ccw",
        "cw"
      ], N = [
        "uint16",
        "uint32"
      ], Q = [
        "load",
        "clear"
      ], Bi = [
        "nearest",
        "linear"
      ], ki = [
        "low-power",
        "high-performance"
      ], Li = [
        "point-list",
        "line-list",
        "line-strip",
        "triangle-list",
        "triangle-strip"
      ], Ei = [
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
      ], Ri = [
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
      ], Ci = [
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
      ], Oi = [
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
      ], qi = [
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
      ], Gi = [
        "vertex",
        "instance"
      ], Vi = [
        "default",
        "no-store",
        "reload",
        "no-cache",
        "force-cache",
        "only-if-cached"
      ], Wi = [
        "omit",
        "same-origin",
        "include"
      ], Ui = [
        "same-origin",
        "no-cors",
        "cors",
        "navigate"
      ], zi = [
        "border-box",
        "content-box",
        "device-pixel-content-box"
      ], ji = [
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
      function Ki(_) {
        _ < 1028 || (A[_] = k, k = _);
      }
      function y(_, e) {
        return _ = _ >>> 0, Xi().subarray(_ / 4, _ / 4 + e);
      }
      function $i(_, e) {
        return _ = _ >>> 0, Yi().subarray(_ / 2, _ / 2 + e);
      }
      function D(_, e) {
        return _ = _ >>> 0, Hi().subarray(_ / 4, _ / 4 + e);
      }
      function Ni(_, e) {
        return _ = _ >>> 0, Ji().subarray(_ / 1, _ / 1 + e);
      }
      function I(_, e) {
        _ = _ >>> 0;
        const n = w(), b = [];
        for (let r = _; r < _ + 4 * e; r += 4) b.push(t(n.getUint32(r, true)));
        return b;
      }
      function Qi(_, e) {
        return _ = _ >>> 0, Zi().subarray(_ / 2, _ / 2 + e);
      }
      function T(_, e) {
        return _ = _ >>> 0, _g().subarray(_ / 4, _ / 4 + e);
      }
      function U(_, e) {
        return _ = _ >>> 0, B().subarray(_ / 1, _ / 1 + e);
      }
      let F = null;
      function w() {
        return (F === null || F.buffer.detached === true || F.buffer.detached === void 0 && F.buffer !== u.memory.buffer) && (F = new DataView(u.memory.buffer)), F;
      }
      let E = null;
      function Xi() {
        return (E === null || E.byteLength === 0) && (E = new Float32Array(u.memory.buffer)), E;
      }
      let R = null;
      function Yi() {
        return (R === null || R.byteLength === 0) && (R = new Int16Array(u.memory.buffer)), R;
      }
      let C = null;
      function Hi() {
        return (C === null || C.byteLength === 0) && (C = new Int32Array(u.memory.buffer)), C;
      }
      let O = null;
      function Ji() {
        return (O === null || O.byteLength === 0) && (O = new Int8Array(u.memory.buffer)), O;
      }
      function g(_, e) {
        return tg(_ >>> 0, e);
      }
      let q = null;
      function Zi() {
        return (q === null || q.byteLength === 0) && (q = new Uint16Array(u.memory.buffer)), q;
      }
      let G = null;
      function _g() {
        return (G === null || G.byteLength === 0) && (G = new Uint32Array(u.memory.buffer)), G;
      }
      let V = null;
      function B() {
        return (V === null || V.byteLength === 0) && (V = new Uint8Array(u.memory.buffer)), V;
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
      function M(_) {
        const e = t(_);
        return Ki(_), e;
      }
      let W = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      W.decode();
      const eg = 2146435072;
      let z = 0;
      function tg(_, e) {
        return z += e, z >= eg && (W = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), W.decode(), z = e), W.decode(B().subarray(_, _ + e));
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
      function ng(_) {
        u = _;
      }
      URL = globalThis.URL;
      const m = await n_({
        "./demo_bg.js": {
          __wbindgen_object_drop_ref: fi,
          __wbg_next_71f2aa1cb3d1e37e: Wr,
          __wbg_done_89b2b13e91a60321: xn,
          __wbg_value_a5d5488a9589444a: vd,
          __wbg_get_507a50627bffa49b: Gb,
          __wbg_then_16d107c451e9905d: B0,
          __wbg_new_227d7c05414eb861: Ar,
          __wbg_stack_3b0d974bbf31e44f: Uu,
          __wbg_error_a6fa202b58aa1cd3: Gn,
          __wbg_clearTimeout_333bba87532ab9d3: Be,
          __wbindgen_object_clone_ref: ai,
          __wbg_setTimeout_3a808dd861dd3c12: ua,
          __wbg_fetch_074561c3e313c86f: Wn,
          __wbg_crypto_38df2bab126b63dc: Tt,
          __wbg_process_44c7a14e11e9f69e: lc,
          __wbg_versions_276b2795b1c6a219: Sd,
          __wbg_node_84ea875411254db1: Ur,
          __wbg_require_b4edbdcf3e2a1ef0: $c,
          __wbg_call_a6e5c5dce5018821: xe,
          __wbg_msCrypto_bd5a034af96bcba6: hr,
          __wbg_randomFillSync_6c25eac9869eb53c: Pc,
          __wbg_getRandomValues_c44a50d8cfdaebeb: Mb,
          __wbg_userAgentData_31b8f893e8977e94: yd,
          __wbg_brands_b7dcf262485c3e7c: ue,
          __wbg_length_370319915dc99107: ar,
          __wbg_get_unchecked_6e0ad6d2a41b06f6: Ub,
          __wbg_brand_3bc196a43eceb8af: oe,
          __wbg_offsetX_a9bf2ea7f0575ac9: Yr,
          __wbg_offsetY_10e5433a1bbd4c01: Hr,
          __wbg_cancel_65f38182e2eeac5c: ve,
          __wbg_animate_8f41e2f47c7d04ab: M_,
          __wbg_play_3997a1be51d27925: bc,
          __wbg_push_d2ae3af0c1217ae6: xc,
          __wbg_catch_c1a60df4c30d76d3: Se,
          __wbg_getOwnPropertyDescriptor_543d91136adb7c16: pb,
          __wbg_scheduler_b35fe73ba70e89cc: Jc,
          __wbg_requestIdleCallback_3689e3e38f6cfc02: jc,
          __wbg_scheduler_a17d41c9c822fc26: Hc,
          __wbg_postTask_e2439afddcdfbb55: gc,
          __wbg_webkitFullscreenElement_4055d847f8ff064e: Ld,
          __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: Ed,
          __wbg_requestFullscreen_3f16e43f398ce624: Uc,
          __wbg_requestFullscreen_b977a3a0697e883c: zc,
          __wbg_getCoalescedEvents_3e003f63d9ebbc05: ab,
          __wbg_Window_c7f91e3f80ae0a0e: c_,
          __wbg_prototype_0d5bb2023db3bcfc: mc,
          __wbg_performance_3fcf6e32a7e1ed0a: _c,
          __wbg_now_e7c6795a7f81e10f: jr,
          __wbg_set_color_attachments_581fdb3310e4abfa: Qa,
          __wbg_set_label_17eb9fe3a02f62b0: Wf,
          __wbg_set_view_gpu_texture_view_c0f35f8857c25206: Mu,
          __wbg_set_depth_clear_value_beda3ec5b1a5c43a: nf,
          __wbg_set_depth_load_op_511c513eab4e56a9: cf,
          __wbg_set_depth_store_op_c89f33b39b43361c: df,
          __wbg_set_depth_read_only_7f41a74741c144ec: ff,
          __wbg_set_stencil_clear_value_42be608809151e2a: Ho,
          __wbg_set_stencil_load_op_31838c036993098a: Zo,
          __wbg_set_stencil_store_op_e6be1cbc3a8fc210: tu,
          __wbg_set_stencil_read_only_bf1d0c1897e25c62: eu,
          __wbg_set_depth_stencil_attachment_73b79e8b4e948222: uf,
          __wbg_set_query_set_41de86d2401aee04: ko,
          __wbg_set_beginning_of_pass_write_index_e9f5d016947893bd: La,
          __wbg_set_end_of_pass_write_index_0d546e46b86ea069: pf,
          __wbg_set_timestamp_writes_98bed1a8bbc6682d: du,
          __wbg_beginRenderPass_aa22c432e793359a: R_,
          __wbg_copyBufferToBuffer_ca30deb8de65f5d5: Je,
          __wbg_copyBufferToBuffer_5e2cd8f10ae78183: He,
          __wbg_set_width_9f685402c2cbee70: ku,
          __wbg_set_height_14335c4047cf9c1b: Of,
          __wbg_set_depth_or_array_layers_89371305ed0bd962: af,
          __wbg_label_7ed42f25f841996b: rr,
          __wbg_set_label_08d9be3e4719c226: Vf,
          __wbg_finish_4d91de5e927dd13f: jn,
          __wbg_finish_6e06b68ab68cd9f6: Kn,
          __wbg_set_dst_factor_ec7407f19be1aff9: mf,
          __wbg_set_operation_62ce44e1728c4047: Po,
          __wbg_set_src_factor_9bfe84af9b7b5cac: Xo,
          __wbg_set_texture_1f64653a5d2d7b4d: ou,
          __wbg_set_mip_level_f7ac79e8c54f59ad: wo,
          __wbg_set_x_876d592971db129a: Eu,
          __wbg_set_y_2b1f5ac0dd5586a5: Ru,
          __wbg_set_z_ef005d82bc9d24e3: Cu,
          __wbg_set_origin_gpu_origin_3d_dict_631c04520718091f: Mo,
          __wbg_set_aspect_4962514fe99e68e6: Ma,
          __wbg_Window_afcc911b2f9c92e2: r_,
          __wbg_gpu_2ccc250735d24a2a: zb,
          __wbg_WorkerGlobalScope_5d19ebc889ff397e: a_,
          __wbg_set_a_88262a42340d0b1c: ma,
          __wbg_set_b_c47befe0af3261eb: Ta,
          __wbg_set_g_5983abfc46e0cf4e: Ef,
          __wbg_set_r_c6f4c68f4804d655: Lo,
          __wbg_set_bytes_per_row_d69b88eee3929c07: za,
          __wbg_set_rows_per_image_59a813ac5006e10e: Vo,
          __wbg_set_offset_f64_fa66068813376ca3: Ao,
          __wbg_writeTexture_53ba204c494b042c: Cd,
          __wbg_onSubmittedWorkDone_270d6b5a45520e79: Jr,
          __wbg_submit_ce44115121cd166c: r0,
          __wbg_getMappedRange_d0bf3141224111b6: mb,
          __wbg_unmap_adaf93276fdf9aaf: wd,
          __wbg_destroy_fe937f756bf8df37: fn,
          __wbg_mapAsync_52b01fa9e8f765fd: gr,
          __wbg_set_size_f64_6bcd40704bf4cfdc: $o,
          __wbg_set_usage_b2a2935f37bf3d08: xu,
          __wbg_set_mapped_at_creation_81b586dc90a50347: co,
          __wbg_set_label_d010f237b26f2c55: Xf,
          __wbg_createBuffer_0726dd2ab09ea1d2: rt,
          __wbg_set_address_mode_u_9e2695575a219e33: xa,
          __wbg_set_address_mode_v_f479b2e6cccbcac4: ya,
          __wbg_set_address_mode_w_46273e153230180d: ha,
          __wbg_set_compare_cd9b62cdb92eb580: Xa,
          __wbg_set_lod_max_clamp_dd2d9f9f052f4f44: no,
          __wbg_set_lod_min_clamp_6d20c97916baeb93: bo,
          __wbg_set_mag_filter_b5adebc99cb938e1: ro,
          __wbg_set_min_filter_c72f17375e135f0a: io,
          __wbg_set_mipmap_filter_5bf66195a3639700: lo,
          __wbg_set_max_anisotropy_2beada0e2db62c45: fo,
          __wbg_set_label_5ee7427342869829: jf,
          __wbg_createSampler_c8ffb3c8d565f704: yt,
          __wbg_set_format_2c1414a817c213f8: Df,
          __wbg_set_size_gpu_extent_3d_dict_7e42e1c98fa36434: Qo,
          __wbg_set_usage_ba5b0f8b333ab325: yu,
          __wbg_set_label_547d0d4aec39fbe9: zf,
          __wbg_set_dimension_868eee80f4b90011: wf,
          __wbg_set_mip_level_count_776c8c218b65bc08: so,
          __wbg_set_sample_count_eb86a8b18545b54f: Wo,
          __wbg_set_view_formats_4347dc8363331086: Au,
          __wbg_createTexture_1bac74c999b8a48e: At,
          __wbg_set_entries_a12aca1e458b0456: yf,
          __wbg_set_layout_913d53c17194c989: _o,
          __wbg_set_label_79387decda299036: Nf,
          __wbg_createBindGroup_655c6e6c0258530e: nt,
          __wbg_set_code_b4f37f81f45b5b25: $a,
          __wbg_set_label_e3944e54881b8c50: Hf,
          __wbg_createShaderModule_2e44fc7677c6288b: ht,
          __wbg_set_label_72bb4f41ef0cb893: $f,
          __wbg_createCommandEncoder_ec1f40f0cb4d09df: at,
          __wbg_set_bind_group_layouts_5a9cfea401c020ab: Ea,
          __wbg_set_label_9556af8b5cda3c9d: Qf,
          __wbg_createPipelineLayout_2c8cd4528b06c108: it,
          __wbg_set_module_d0e2098713606cae: xo,
          __wbg_set_entry_point_e87e79251dd3144f: vf,
          __wbg_set_buffers_7d0d8f507699e956: Ua,
          __wbg_set_layout_50ab727f44b38f26: Zf,
          __wbg_set_layout_gpu_auto_layout_mode_aeba193938b47882: eo,
          __wbg_set_vertex_0be5d146f9ff6f36: vu,
          __wbg_set_label_e922700240417ab5: Jf,
          __wbg_set_format_e52bdcca880d2c8e: Bf,
          __wbg_set_depth_compare_0c8631eb2eae98e3: bf,
          __wbg_set_depth_write_enabled_ce89750042940350: gf,
          __wbg_set_depth_bias_d7cd16096242a657: ef,
          __wbg_set_depth_bias_clamp_1c0d695df7f092e5: _f,
          __wbg_set_depth_bias_slope_scale_c4e52ec743ef55ba: tf,
          __wbg_set_compare_f36b34abfaa08ccb: Ya,
          __wbg_set_depth_fail_op_668155ae33d3c06f: rf,
          __wbg_set_fail_op_92f716dbc88b6973: If,
          __wbg_set_pass_op_cf02fa088d6352a7: Fo,
          __wbg_set_stencil_back_85b22f1db5b1940a: Yo,
          __wbg_set_stencil_front_525526164a798a44: Jo,
          __wbg_set_stencil_read_mask_5cc26495e8b3ae82: _u,
          __wbg_set_stencil_write_mask_d9cb40ec4b4bee5b: nu,
          __wbg_set_depth_stencil_97506c7bea4f53da: of,
          __wbg_set_module_f02e076ca7e7daf8: yo,
          __wbg_set_targets_c38bd200c836d66f: fu,
          __wbg_set_entry_point_207540f042015ce5: hf,
          __wbg_set_fragment_8b780f00a0b0e6f3: kf,
          __wbg_set_count_069a4eac409bac55: Ha,
          __wbg_set_mask_70a8a59ce09e5997: ao,
          __wbg_set_alpha_to_coverage_enabled_8b5dc2b0a225b3b2: Ia,
          __wbg_set_multisample_37ddafe88b5cd466: ho,
          __wbg_set_cull_mode_fc649853947a3d0c: Za,
          __wbg_set_front_face_28ffdf524eedce5b: Lf,
          __wbg_set_strip_index_format_9f787be6c5fc9e87: au,
          __wbg_set_topology_da25f2cc5af203d2: gu,
          __wbg_set_unclipped_depth_04524a2b44e1e3c1: mu,
          __wbg_set_primitive_43c23761a55b4088: Bo,
          __wbg_createRenderPipeline_cf98d4d699bfb03c: lt,
          __wbg_set_entries_86a29dd6291c95e7: xf,
          __wbg_set_label_48e6b787d256f621: Uf,
          __wbg_createBindGroupLayout_49a7e2b3d076afcf: tt,
          __wbg_end_f99ebed53d4e198a: Rn,
          __wbg_new_typed_4148bd5ae72ab3f0: Cr,
          __wbg_set_required_limits_871ed33c68613dcb: Ro,
          __wbg_set_required_features_1baf274a8669db60: Eo,
          __wbg_set_label_60ad96c811e0d109: Kf,
          __wbg_requestDevice_ab46d0519ea1cc34: Wc,
          __wbg_getPreferredCanvasFormat_8b57039d1801a506: hb,
          __wbg_getCurrentTexture_20714d1bd9051cab: gb,
          __wbg_set_device_e275d1d4f3c9eb74: sf,
          __wbg_set_format_815efd4dc4817bbb: Tf,
          __wbg_set_usage_a137f82ca163b0a9: pu,
          __wbg_set_alpha_mode_df805952892caa9c: Sa,
          __wbg_set_mode_9990b3393ba469ae: po,
          __wbg_set_tone_mapping_b3464f1baa4cff92: iu,
          __wbg_set_view_formats_5797d2fff3c11808: Du,
          __wbg_configure_0e4789c0f6b35c8e: Ne,
          __wbg_set_dimension_e325282e613ca0a4: lf,
          __wbg_set_format_1fcaa7d60546b490: Af,
          __wbg_set_aspect_0d453bca3d012f02: Pa,
          __wbg_set_base_array_layer_f176bb9f1b37b342: Ba,
          __wbg_set_array_layer_count_7312f0f31af94e7c: Aa,
          __wbg_set_base_mip_level_1df145d9f8db32a9: ka,
          __wbg_set_mip_level_count_534caaa7e68e68b8: go,
          __wbg_set_label_e16e2dbe51349c7f: Yf,
          __wbg_set_usage_ddd42599bbba7779: hu,
          __wbg_createView_ceaf2f5881adbd34: Ft,
          __wbg_set_power_preference_8fdca0b7af640d49: To,
          __wbg_requestAdapter_2e6718811c735a57: Gc,
          __wbg_queue_adce34608fd0c893: Dc,
          __wbg_drawIndexed_d31913e79d58fbac: Mn,
          __wbg_setPipeline_c41bf46790f27f9e: ca,
          __wbg_setBindGroup_268fd1714fff0ef5: ta,
          __wbg_setBindGroup_f0de6cb2c7dbfc2c: na,
          __wbg_setIndexBuffer_7f3cf667b4d71566: ra,
          __wbg_setIndexBuffer_2531a9103450445e: ba,
          __wbg_setVertexBuffer_1e448859663dd400: ga,
          __wbg_setVertexBuffer_7cf533d694e747f3: sa,
          __wbg_setStencilReference_66c74be6232bb9da: oa,
          __wbg_draw_6877f98847e1e36c: Fn,
          __wbg_set_format_5d2f25cc93654ecc: Mf,
          __wbg_set_offset_f64_28c24dc15000932e: So,
          __wbg_set_shader_location_7e1832a74f912217: jo,
          __wbg_set_buffer_ef7f75306cf663ed: Wa,
          __wbg_set_visibility_9570b037224c4cc2: Fu,
          __wbg_set_binding_155b0440b4307793: Ra,
          __wbg_set_sampler_c0e1258543a33bce: zo,
          __wbg_set_texture_9dcedde1bb31eda6: uu,
          __wbg_set_storage_texture_939a097db4b18bd4: ru,
          __wbg_set_external_texture_386483d8dd82ab56: Sf,
          __wbg_set_attributes_7537844a7e6dafdc: Fa,
          __wbg_set_array_stride_f64_27ffaf4fffd74e61: Da,
          __wbg_set_step_mode_a97bb24714da41a9: bu,
          __wbg_set_format_5ff53724ed6cedf2: Ff,
          __wbg_set_write_mask_d45279e56abbfcb5: Lu,
          __wbg_set_blend_7493c2066c3e9970: Oa,
          __wbg_set_binding_f74df3510792aba1: Ca,
          __wbg_set_resource_5ae7b5e67924f234: Oo,
          __wbg_set_resource_gpu_texture_view_eb46c355d51ad7e5: Go,
          __wbg_set_resource_gpu_buffer_binding_e5dbca063e7cb67b: qo,
          __wbg_set_alpha_bfd2df62e7bc581b: va,
          __wbg_set_color_83aa977526e88cbb: Na,
          __wbg_set_access_9a5092f05dc45fad: pa,
          __wbg_set_format_533f9ffa7eef563d: Pf,
          __wbg_set_view_dimension_0df554032f1f3a85: Su,
          __wbg_set_buffer_c3410572051920ba: Va,
          __wbg_set_offset_f64_89f0ce01a689839e: Io,
          __wbg_set_size_f64_8b8f6bba5d678162: No,
          __wbg_set_type_ccf8472d40abcddf: wu,
          __wbg_set_multisampled_7913fd7183272840: vo,
          __wbg_set_has_dynamic_offset_62bc230bdb7c54d0: Rf,
          __wbg_set_min_binding_size_f64_5005a6904cdf43da: uo,
          __wbg_set_type_d09829f59932a0fc: lu,
          __wbg_set_sample_type_c32e1dfff94e63eb: Uo,
          __wbg_set_view_dimension_4818d4c18ce5815e: Iu,
          __wbg_set_load_op_99661da6c4eab9b0: to,
          __wbg_set_store_op_b5fdf672436f13f3: cu,
          __wbg_set_view_gpu_texture_view_9b2d86b6b99d9fd9: Pu,
          __wbg_set_clear_value_gpu_color_dict_6211425789c76e59: Ka,
          __wbg_set_resolve_target_gpu_texture_view_b19a4f2debf79b96: Co,
          __wbg_unconfigure_0a07a0a40de8988d: L0,
          __wbg_includes_78c9a3115b08eddc: Nb,
          __wbg_instanceof_WebGl2RenderingContext_90225152e4e3c799: Jb,
          __wbg_blendFunc_114dc7056ccfeb8d: be,
          __wbg_colorMask_a4d164c2039b5731: Ge,
          __wbg_depthFunc_74a8f8acf8973c86: nn,
          __wbg_depthMask_a644a67deced3257: rn,
          __wbg_fenceSync_fe2cdba4a0d73679: Vn,
          __wbg_frontFace_29ef7151de8b5ed9: tb,
          __wbg_uniform1ui_cd7ad5581093b3df: q0,
          __wbg_beginQuery_042a1f99e870066c: E_,
          __wbg_bindBuffer_1e00cfb4321ef9a4: G_,
          __wbg_blendColor_eae0cd578a2c7d15: H_,
          __wbg_clearDepth_ca9b22d41551b513: Me,
          __wbg_deleteSync_9b0e43580942a0f6: Qt,
          __wbg_depthRange_5e90d4d236280ff5: an,
          __wbg_drawArrays_b0c59a6e158122f2: Sn,
          __wbg_readBuffer_4271437a70aae481: Mc,
          __wbg_useProgram_49495850b446fa56: xd,
          __wbg_bindSampler_ce608f0de9d31acf: K_,
          __wbg_bindTexture_28eff4bbd8aaab54: $_,
          __wbg_createQuery_047c7c524e4ac4f8: wt,
          __wbg_deleteQuery_0d1dcc4402a86ee1: Ut,
          __wbg_drawBuffers_1c1ec9b292442a2a: An,
          __wbg_linkProgram_4e047fb3197a0348: fr,
          __wbg_pixelStorei_c844cd0db4f1fde6: nc,
          __wbg_stencilMask_9a844dc58a89992f: _0,
          __wbg_attachShader_8971266b4c9bc514: L_,
          __wbg_clearStencil_58f2af46612bccae: Fe,
          __wbg_createBuffer_01568a9d930d90dd: bt,
          __wbg_createShader_7d139f2d50f77365: St,
          __wbg_deleteBuffer_1ca3ffe668a488e7: Ot,
          __wbg_deleteShader_993edb4beb3c4d53: Nt,
          __wbg_getExtension_101c7e41de3e4d90: wb,
          __wbg_getParameter_d39f59581389af1b: yb,
          __wbg_shaderSource_c3469dc2221dd528: qu,
          __wbg_activeTexture_d12958674e97a118: S_,
          __wbg_blendEquation_455b8986ededabc0: _e,
          __wbg_compileShader_9bdfd792722cf704: Ve,
          __wbg_createProgram_538c9777a4ac084f: st,
          __wbg_createSampler_70c8392d98896235: xt,
          __wbg_createTexture_d13f98e0d3d912f4: Dt,
          __wbg_deleteProgram_132e191baa9fa84f: Wt,
          __wbg_deleteSampler_0abb528566c4ab3b: Kt,
          __wbg_deleteTexture_bdc2202d7a50dcea: Yt,
          __wbg_polygonOffset_4eb460adf41db6cd: ac,
          __wbg_texParameteri_1fc451e0964fc91c: d0,
          __wbg_texStorage2D_7f947efc63dac273: g0,
          __wbg_texStorage3D_f8f2e4b3386736f9: s0,
          __wbg_bindFramebuffer_390311eff3896937: W_,
          __wbg_blitFramebuffer_a1215976f663b058: ce,
          __wbg_bindRenderbuffer_c3d0c4b8cd1c3891: j_,
          __wbg_bindVertexArray_427eeac0c1764d8a: X_,
          __wbg_createFramebuffer_de0d521f546e7534: ut,
          __wbg_deleteFramebuffer_963cd69957209d37: qt,
          __wbg_getSyncParameter_d8f6c145657a3550: Rb,
          __wbg_samplerParameterf_0b3308eeb1faa3a1: Xc,
          __wbg_samplerParameteri_7b1b4091de49aabb: Yc,
          __wbg_blendFuncSeparate_3ee6d939a9f3938b: ne,
          __wbg_createRenderbuffer_9d801bf44c314f44: pt,
          __wbg_createVertexArray_baf9eef7ea5a2c7a: Mt,
          __wbg_deleteRenderbuffer_52bdbf5ab2cbe62a: zt,
          __wbg_deleteVertexArray_475d4e969aac1dd0: Jt,
          __wbg_getQueryParameter_919125495ccb17ca: Pb,
          __wbg_getShaderInfoLog_5cee2add982c7165: Fb,
          __wbg_stencilOpSeparate_c77fcb47561d0aee: t0,
          __wbg_bindAttribLocation_0fe5da7e01ac0d15: C_,
          __wbg_bufferData_3d4f29bdfb1fa46c: ie,
          __wbg_getProgramInfoLog_d1ce570463a68779: Sb,
          __wbg_getShaderParameter_3394e75dcb97f380: Bb,
          __wbg_getUniformLocation_788a34295dd6fabe: qb,
          __wbg_readPixels_82c9dee754d58176: Tc,
          __wbg_renderbufferStorage_0a8de92542893819: Cc,
          __wbg_copyTexSubImage2D_8daea651fc408645: Ze,
          __wbg_copyTexSubImage3D_bfe7a14dac9ad777: et,
          __wbg_drawArraysInstanced_51b161548a3f10c4: hn,
          __wbg_getIndexedParameter_6d7a5bcccaa0f3e2: lb,
          __wbg_getProgramParameter_c8d1154fbb3c0890: Ab,
          __wbg_stencilFuncSeparate_814300446c2969ef: Yu,
          __wbg_stencilMaskSeparate_49367b0b5883a8bd: Hu,
          __wbg_texImage3D_bdd9bebe42ed1f52: o0,
          __wbg_uniformBlockBinding_a9ed6b750199e03c: td,
          __wbg_vertexAttribDivisor_fb31b5ed9bc856da: Ad,
          __wbg_framebufferTexture2D_3c2abd606fc53f31: Jn,
          __wbg_invalidateFramebuffer_343bbfb15e6835fd: _r,
          __wbg_blendEquationSeparate_043e2f50f6ecb2d3: J_,
          __wbg_getUniformBlockIndex_cfee6ff6d323c784: Cb,
          __wbg_framebufferRenderbuffer_ba8bd5e008ee87eb: Hn,
          __wbg_getSupportedExtensions_2a7458ec45e82560: Lb,
          __wbg_clientWaitSync_cf8e49f8ba228377: Re,
          __wbg_framebufferTextureLayer_f2d9db097bfbb863: _b,
          __wbg_texSubImage3D_8077e90ec309c414: D0,
          __wbg_uniform2fv_1b43656b33177d21: G0,
          __wbg_uniform2iv_859048b9d60f46ae: W0,
          __wbg_uniform3fv_8ecb5ebb510b7bce: j0,
          __wbg_uniform3iv_09abae5eabd6b9d6: $0,
          __wbg_uniform4fv_674a247aeb15012d: J0,
          __wbg_uniform4iv_d02934d7b94df609: _d,
          __wbg_enableVertexAttribArray_7470ba2dcf2606e3: Bn,
          __wbg_uniform2uiv_8a9cb3155271213b: z0,
          __wbg_uniform3uiv_3c0b163732f5b8f0: Q0,
          __wbg_uniform4uiv_0d1a8ed214f10c31: ed,
          __wbg_disableVertexAttribArray_c7915eb0de6dd8f1: gn,
          __wbg_clearBufferfv_2e0f1a0ea56de859: Ie,
          __wbg_clearBufferiv_0360269bf6e34c54: Ae,
          __wbg_clearBufferuiv_df94a395d4915377: De,
          __wbg_vertexAttribPointer_a8f0af57269c2067: Pd,
          __wbg_drawElementsInstanced_c7f96ea02e6d5326: Pn,
          __wbg_renderbufferStorageMultisample_5c6e5d20c0eaa6ba: Rc,
          __wbg_texSubImage3D_c9e5a071796d412f: M0,
          __wbg_uniformMatrix2fv_9284424cc6aac672: bd,
          __wbg_uniformMatrix3fv_568aa181379c8a75: fd,
          __wbg_uniformMatrix4fv_423b958042692150: id,
          __wbg_vertexAttribIPointer_de08a8d8b625e253: Dd,
          __wbg_bindBufferRange_f5c29912db0476e9: q_,
          __wbg_bufferData_90ef588bac2be2f5: ge,
          __wbg_texSubImage3D_93b38c69acb735c8: P0,
          __wbg_uniformMatrix2x3fv_dba00c4fc8eefe47: rd,
          __wbg_uniformMatrix2x4fv_d801a561c3c18169: cd,
          __wbg_uniformMatrix3x2fv_ce43e8186ea60a1e: od,
          __wbg_uniformMatrix3x4fv_8abccc5745b0dd90: ud,
          __wbg_uniformMatrix4x2fv_1ac2bf986a322e3f: gd,
          __wbg_uniformMatrix4x3fv_8640fa85b90ea910: sd,
          __wbg_readPixels_5f013a7d85b23800: Fc,
          __wbg_texImage3D_ef16a1f721b3f908: u0,
          __wbg_texSubImage3D_4fdd4cd95a2925c2: I0,
          __wbg_texSubImage3D_6cb6cfd732dad145: A0,
          __wbg_texSubImage3D_45e498ae6298998c: S0,
          __wbg_texSubImage3D_feebaf7f0f4594c6: F0,
          __wbg_compressedTexSubImage2D_c1362291573c7268: Ue,
          __wbg_compressedTexSubImage3D_04cb8b046c4321fe: Ke,
          __wbg_copyBufferSubData_cdf61f74aa6e0902: Ye,
          __wbg_bufferSubData_bae930b21e9c1c48: we,
          __wbg_compressedTexSubImage2D_da01674d2975d1ae: ze,
          __wbg_compressedTexSubImage3D_af0228a80ffd5993: $e,
          __wbg_getBufferSubData_11018928c908ac2c: rb,
          __wbg_texSubImage2D_047380bb2660e4f9: w0,
          __wbg_clear_dd06a0da4ce8e13f: Ee,
          __wbg_flush_e03c08da6863b5ab: Qn,
          __wbg_texImage2D_8d168171984f2a40: f0,
          __wbg_texSubImage2D_bed5e7a3cd81d409: x0,
          __wbg_texSubImage2D_e107b4f88c19b920: v0,
          __wbg_enable_28bbeed576131d1f: kn,
          __wbg_finish_cbe7ec8675dd7705: $n,
          __wbg_texSubImage2D_98c43894eb217aa7: p0,
          __wbg_texSubImage2D_5058af3d30a8e205: l0,
          __wbg_texSubImage2D_6a376bfc3a31436b: m0,
          __wbg_texSubImage2D_d1af697e69f8a9e4: y0,
          __wbg_disable_1659d1b7d50c31e7: sn,
          __wbg_scissor_105e756596bc35df: Zc,
          __wbg_texImage2D_5abd8779d1d033c7: a0,
          __wbg_viewport_affdf15c559df1e2: Fd,
          __wbg_cullFace_f1c75ae19b07eaf3: Et,
          __wbg_endQuery_a50f7fc49cfe56e9: En,
          __wbg_uniform1f_62692c8fa8e7bf1e: E0,
          __wbg_uniform1i_7621f908f78177df: O0,
          __wbg_uniform4f_9ff60fc65b0ed726: X0,
          __wbg_instanceof_Window_05ba1ee4f6781663: Zb,
          __wbg_matchMedia_9968278b31706f78: sr,
          __wbg_queueMicrotask_ed5b33385a53c3a9: Ac,
          __wbg_devicePixelRatio_1c0e0ed7deb19cd8: un,
          __wbg_getComputedStyle_961681bdf7e518e8: fb,
          __wbg_cancelIdleCallback_b9e469156370a1e5: he,
          __wbg_requestIdleCallback_d292749bf33501af: Kc,
          __wbg_cancelAnimationFrame_086d6084925c4e06: ye,
          __wbg_requestAnimationFrame_1a85deeab66448c2: Vc,
          __wbg_clearTimeout_8f80437be2324e09: ke,
          __wbg_setTimeout_5ccd86968701f1ec: da,
          __wbg_setTimeout_cfa2cf195c3738db: ia,
          __wbg_document_179650d6cb13c263: pn,
          __wbg_location_c9a2271428996698: dr,
          __wbg_navigator_99621db14b3f1099: Sr,
          __wbg_setAttribute_71039043be82d098: ea,
          __wbg_setPointerCapture_70025ca3fb7f26b9: aa,
          __wbg_activeElement_4bc99dc1a7094c27: h_,
          __wbg_createElement_fcbc0805de826d62: ft,
          __wbg_querySelector_fd7d157ebe17cd16: vc,
          __wbg_visibilityState_301d0905e8103e21: Bd,
          __wbg_getElementById_1cbd8f06dbe8eb8e: sb,
          __wbg_fullscreenElement_9f50a5e63bb433a8: bb,
          __wbg_querySelectorAll_7e98cbe256deaadd: hc,
          __wbg_body_40ec34e0a2931fe8: fe,
          __wbg_fetch_b5951fc96f52f786: Un,
          __wbg_navigator_51379c10a84aeec9: vr,
          __wbg_focus_2f77051f98540625: Xn,
          __wbg_style_6657aed849e5d757: n0,
          __wbg_blendFunc_a854d7e4459150ba: re,
          __wbg_colorMask_44ebb91cad2502f2: qe,
          __wbg_depthFunc_455cfeb8a9d2fb4c: tn,
          __wbg_depthMask_4bd6c73b1339d257: bn,
          __wbg_frontFace_fc6d98dafa42de87: nb,
          __wbg_bindBuffer_a01497b1abdcdd9a: V_,
          __wbg_blendColor_793b560dc69ddd0b: Y_,
          __wbg_clearDepth_8b5d226aae155082: Pe,
          __wbg_depthRange_38b2287ffbea14fd: cn,
          __wbg_drawArrays_676becae0149ed65: vn,
          __wbg_useProgram_182d120fe476921b: pd,
          __wbg_bindTexture_9b04b1b7c00d4dd6: N_,
          __wbg_linkProgram_d7c71c539c8c6a43: or,
          __wbg_pixelStorei_2a93b18efde9acf8: tc,
          __wbg_stencilMask_1c99b79b516d12dd: Zu,
          __wbg_attachShader_5f7f4077e124e23b: k_,
          __wbg_clearStencil_a66fe23df6313fc7: Te,
          __wbg_createBuffer_2075765bde5035d5: ct,
          __wbg_createShader_78bc8b7e9a88e1a8: vt,
          __wbg_deleteBuffer_08eb938e35c27967: Ct,
          __wbg_deleteShader_3120790d36063afe: $t,
          __wbg_getParameter_039a5899307fab55: xb,
          __wbg_shaderSource_4cf90af97621ff49: Ou,
          __wbg_activeTexture_92b04d918019d603: v_,
          __wbg_blendEquation_f5c5272993f6cb01: ee,
          __wbg_compileShader_fc2e4b73240d4fd7: We,
          __wbg_createProgram_118becaac3a20318: gt,
          __wbg_createTexture_0ee0fa5f924f3d14: It,
          __wbg_deleteProgram_09bd45a51105b2f6: Vt,
          __wbg_deleteTexture_2b163b157ea1be24: Xt,
          __wbg_polygonOffset_eccb68e40a18f861: fc,
          __wbg_texParameteri_9d0daa263d3a863f: i0,
          __wbg_bindFramebuffer_658e4b06f7ee8bb4: U_,
          __wbg_bindRenderbuffer_75e8469e930840fa: z_,
          __wbg_createFramebuffer_b24d2c80a8b9e7cc: ot,
          __wbg_deleteFramebuffer_d1a36e889b009344: Gt,
          __wbg_blendFuncSeparate_37156309688f8f88: te,
          __wbg_createRenderbuffer_71af5c0d615e9271: mt,
          __wbg_deleteRenderbuffer_ca999f7883b777af: jt,
          __wbg_getShaderInfoLog_bc236afe696c1283: Tb,
          __wbg_stencilOpSeparate_b2cb9af05b803e02: e0,
          __wbg_bindAttribLocation_94202d7a59ab7863: O_,
          __wbg_bufferData_ce4f44d56e9ddab5: se,
          __wbg_getProgramInfoLog_c4762e0513468a26: vb,
          __wbg_getShaderParameter_cbcc0995e8e16214: kb,
          __wbg_getUniformLocation_24ef46cdda2148ab: Ob,
          __wbg_renderbufferStorage_ab5f745ff8efce3d: Oc,
          __wbg_copyTexSubImage2D_c73f91f1d7022402: _t,
          __wbg_getProgramParameter_b9995b56c258ac86: Ib,
          __wbg_stencilFuncSeparate_35136c4e5153406f: Xu,
          __wbg_stencilMaskSeparate_63976cc45fb94d84: Ju,
          __wbg_framebufferTexture2D_e1fb64212fcda219: Zn,
          __wbg_blendEquationSeparate_c7e2b2261c94e1c5: Z_,
          __wbg_framebufferRenderbuffer_4404cf9f9cb76937: Yn,
          __wbg_uniform2fv_948dab6a82b428ac: V0,
          __wbg_uniform2iv_f84a24961c0cfcd0: U0,
          __wbg_uniform3fv_95d1933ea1440725: K0,
          __wbg_uniform3iv_a3a7008990fd84f0: N0,
          __wbg_uniform4fv_4ca8c114ca3de099: H0,
          __wbg_uniform4iv_45ab52abcb3f882c: Z0,
          __wbg_enableVertexAttribArray_4c08219124740f14: Tn,
          __wbg_disableVertexAttribArray_160060fbd7e97de0: dn,
          __wbg_vertexAttribPointer_b300c8e000cdac93: Md,
          __wbg_uniformMatrix2fv_769725d64641341f: nd,
          __wbg_uniformMatrix3fv_33e96c7d29dc1e22: ad,
          __wbg_uniformMatrix4fv_25115a23e04f6db7: dd,
          __wbg_bufferData_073a7c6abef7a55f: de,
          __wbg_readPixels_c7861e25836bf57b: Bc,
          __wbg_bufferSubData_ce9854d3d337e2cf: le,
          __wbg_compressedTexSubImage2D_dd6dc580749eb5cf: je,
          __wbg_clear_53d71d234e14e4c1: Le,
          __wbg_flush_db77b4a63d6b337d: Nn,
          __wbg_enable_611804c0ac1504ce: Ln,
          __wbg_finish_126e6f2ac71e3096: zn,
          __wbg_texSubImage2D_d3cd09d0ffcb27be: h0,
          __wbg_disable_40c3975167c1ee07: wn,
          __wbg_scissor_573b844152316b8d: _a,
          __wbg_texImage2D_3813406af5bf54c8: c0,
          __wbg_viewport_e8a16ca4a5085e5f: Td,
          __wbg_cullFace_62bbea3bef0e6b99: Lt,
          __wbg_uniform1f_b79d0c5667f9fb40: R0,
          __wbg_uniform1i_5830de6702add20a: C0,
          __wbg_uniform4f_b25e39808b830021: Y0,
          __wbg_disconnect_491a6bfd82cdd887: mn,
          __wbg_new_e0bd7540d9834af6: Lr,
          __wbg_observe_c3834a3e4cde3e64: $r,
          __wbg_new_with_str_sequence_and_options_9db076dc44ddbeb0: Vr,
          __wbg_now_390768da5ee9e776: zr,
          __wbg_key_803dca86cdcfa8dd: br,
          __wbg_code_89c999e407c79eef: Oe,
          __wbg_repeat_4e131e99bff9b9f4: qc,
          __wbg_altKey_50f830d1793a2eea: D_,
          __wbg_ctrlKey_2e52816fa7160097: Bt,
          __wbg_location_8f24df2c257fb974: ur,
          __wbg_metaKey_d961c7572a9f84f5: mr,
          __wbg_shiftKey_9bcb8bdd60c2f152: Gu,
          __wbg_abort_eee9248a6d680839: y_,
          __wbg_new_4339b2a2675a03e3: Mr,
          __wbg_abort_8bae0f33e7833997: x_,
          __wbg_signal_dad7cb35193abd31: Wu,
          __wbg_set_box_223b9bc0b7f548f6: Ga,
          __wbg_preventDefault_b64888c857500682: wc,
          __wbg_movementX_87e39021f3fce8b8: xr,
          __wbg_movementY_f6f63087e2248fa9: yr,
          __wbg_button_f6a9a7b725f1838e: me,
          __wbg_altKey_f3e24c4c9cfcf271: P_,
          __wbg_buttons_d8acd46cf8f40ae9: pe,
          __wbg_ctrlKey_50bd8324959ca786: kt,
          __wbg_metaKey_f934f09e37889d70: pr,
          __wbg_shiftKey_9f797da486b2ade8: Vu,
          __wbg_set_method_5532d59b92d76467: oo,
          __wbg_set_signal_c4ef8faddb4c1446: Ko,
          __wbg_set_credentials_bb34a40189e3b43b: Ja,
          __wbg_set_headers_9c61d123c3ee1f10: Cf,
          __wbg_set_body_029f2d171e0a005f: qa,
          __wbg_set_mode_66c79886ad78fc05: mo,
          __wbg_set_cache_b4a740b195c051f4: ja,
          __wbg_pointerId_ea33d2695be12e7f: rc,
          __wbg_pointerType_d5e932608aa61bb6: cc,
          __wbg_getCoalescedEvents_366947e5550da21b: cb,
          __wbg_pressure_9a7845d9744ae9f4: sc,
          __wbg_drawBuffersWEBGL_c9b47f7f207125cf: In,
          __wbg_persisted_e508d4d322115185: ec,
          __wbg_appendChild_f553e8704c4f14a6: F_,
          __wbg_contains_7189b09a477442a6: Qe,
          __wbg_new_0d809930cd1354c6: Ir,
          __wbg_append_01c74e5c6b58aa64: T_,
          __wbg_entries_900cefd6f70eb290: Cn,
          __wbg_instanceof_Response_c8b64b2256f01bec: Hb,
          __wbg_arrayBuffer_3b637f0fa65c5351: B_,
          __wbg_url_abdb8fb08377f8c0: md,
          __wbg_text_d3a29f7525a132c3: T0,
          __wbg_status_c45b3b9b3033184a: Qu,
          __wbg_headers_cf9c80f30e2a4eff: Kb,
          __wbg_postMessage_b80f20949a4b4f55: dc,
          __wbg_set_onmessage_d511b70365304094: Do,
          __wbg_close_3423cc7dafc477bb: Ce,
          __wbg_start_d0cdf16ff965b3f3: zu,
          __wbg_drawArraysInstancedANGLE_d58dbd2d38fdebaa: yn,
          __wbg_vertexAttribDivisorANGLE_978337b09d11ed84: Id,
          __wbg_drawElementsInstancedANGLE_9b58c4013373b180: Dn,
          __wbg_bindVertexArrayOES_5cad2205a17e8990: Q_,
          __wbg_createVertexArrayOES_2fa3e59eebd5f674: Pt,
          __wbg_deleteVertexArrayOES_7fa59c32cfdfa6fa: Ht,
          __wbg_isIntersecting_fc6d9529a49c5d62: tr,
          __wbg_log_d267660666346fb3: ir,
          __wbg_info_eadbe775a8e2e9eb: Qb,
          __wbg_warn_b1370d804fa3e259: kd,
          __wbg_debug_87fd9b1a625b7efb: Rt,
          __wbg_error_744744ff0c9861e6: On,
          __wbg_error_7ed559cd7146b49d: qn,
          __wbg_deltaMode_d869228efd74f393: Zt,
          __wbg_deltaX_5d829ffba565ed10: _n,
          __wbg_deltaY_6cfce8f8da250c23: en,
          __wbg_width_20c45c895834b83f: Rd,
          __wbg_height_9f27216001e3c804: $b,
          __wbg_userAgent_0558f0ac642f7771: hd,
          __wbg_addListener_b5b7f95360b22984: A_,
          __wbg_removeListener_768e1e787e1d4b2e: Lc,
          __wbg_media_40cbd26ab34df71f: lr,
          __wbg_matches_978994974df1e85b: wr,
          __wbg_setProperty_e4e51b1b1d681d15: fa,
          __wbg_removeProperty_70da952bc1b493fa: Ec,
          __wbg_getPropertyValue_dc6b061239dad6f1: Db,
          __wbg_contentRect_1d6e15e2e0d3e3c3: Xe,
          __wbg_devicePixelContentBoxSize_dca8701a53307aca: on,
          __wbg_origin_ed66c06e67ad2049: Zr,
          __wbg_new_f1a34223ddbe3f7d: Er,
          __wbg_port1_dabba0a56576e47e: oc,
          __wbg_port2_d05676aee003eedc: uc,
          __wbg_blockSize_5af477b962b2b031: ae,
          __wbg_inlineSize_3c8412828bef21eb: Xb,
          __wbg_new_with_str_and_init_d95cbe11ce28e65e: Gr,
          __wbg_addEventListener_d85450ee1320c989: I_,
          __wbg_removeEventListener_a3f23c70077bdcc1: kc,
          __wbg_set_height_bbeef8f354041577: Gf,
          __wbg_getContext_fd298c901058eb31: ib,
          __wbg_getContext_7476e39fa008047e: ob,
          __wbg_new_25e75d1f0df4d87a: Dr,
          __wbg_set_width_49ac9b7d914afc85: Tu,
          __wbg_queryCounterEXT_b74a4567ddfeecf0: yc,
          __wbg_getSupportedProfiles_90a4f330938d0241: Eb,
          __wbg_revokeObjectURL_e010fb0b45f93f3f: Qc,
          __wbg_createObjectURL_416e527781e6fd6d: dt,
          __wbg_postMessage_ef2dbf5e8c8ebffc: ic,
          __wbg_new_8f0c2d11e48a4727: Tr,
          __wbg_get_b2053e9bfdf3ca8e: Wb,
          __wbg_framebufferTextureMultiviewOVR_28d492b9dc484220: eb,
          __wbg_disconnect_39bfdcb35b1fc7b9: ln,
          __wbg_observe_615bef91ee28c925: Kr,
          __wbg_new_5394f65338077341: Fr,
          __wbg_observe_f27242eadc2ebd47: Nr,
          __wbg_unobserve_41a4f85162f1fb18: ld,
          __wbg_set_type_8ce203e412e28cf6: su,
          __wbg_set_height_7d9d8f892e6964c6: qf,
          __wbg_getContext_e79ddf6a9cb3cc76: db,
          __wbg_getContext_ca12bb65aab778a4: ub,
          __wbg_set_width_8e30d010cd66830d: Bu,
          __wbg_instanceof_HtmlCanvasElement_ed02ed9136056019: Yb,
          __wbg_new_32b398fb48b6d94a: Pr,
          __wbg_new_da52cf8fe3429cb2: kr,
          __wbg_new_cd45aabdf6073e84: Br,
          __wbg_length_1f0964f4a5e2c6d8: cr,
          __wbg_prototypesetcall_4770620bbe4688a0: pc,
          __wbg_new_from_slice_77cdfb7977362f3c: Rr,
          __wbg_new_with_length_e6785c33c8e4cce8: qr,
          __wbg_new_with_byte_offset_and_length_54c7724ee3ec7d82: Or,
          __wbg_set_61e45ae8061eca11: wa,
          __wbg_subarray_3ed232c8a6baee09: b0,
          __wbg_then_6ec10ae38b3e92f7: k0,
          __wbg_of_85f52f8b6491a7ca: Xr,
          __wbg_of_5f1b88183ddb5d94: Qr,
          __wbg_isArray_0677c962b281d01a: er,
          __wbg_is_7b9d0b289033c7de: nr,
          __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: Ku,
          __wbg_static_accessor_SELF_146583524fe1469b: $u,
          __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: ju,
          __wbg_static_accessor_WINDOW_f2829a2234d7819e: Nu,
          __wbg_resolve_2191a4dfe481c25b: Nc,
          __wbg_get_78f252d074a84d0b: Vb,
          __wbg_has_8374cf06984d8bfc: jb,
          __wbg_set_8535240470bf2500: la,
          __wbg_queueMicrotask_6a09b7bc46549209: Ic,
          __wbg_queueMicrotask_0ab5b2d2393e99b9: Sc,
          __wbg___wbindgen_number_get_394265ed1e1b84ee: w_,
          __wbg___wbindgen_throw_344f42d3211c4765: m_,
          __wbg___wbindgen_is_null_ea9085d691f535d3: d_,
          __wbg___wbindgen_is_object_a27215656b807791: i_,
          __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: g_,
          __wbg___wbindgen_string_get_b0ca35b86a603356: l_,
          __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: f_,
          __wbg___wbindgen_is_function_1ff95bcc5517c252: u_,
          __wbg___wbindgen_is_undefined_c05833b95a3cf397: s_,
          __wbg___wbindgen_debug_string_c25d447a39f5578f: o_,
          __wbg__wbg_cb_unref_fffb441def202758: p_,
          __wbindgen_cast_0000000000000001: Od,
          __wbindgen_cast_0000000000000002: qd,
          __wbindgen_cast_0000000000000003: Gd,
          __wbindgen_cast_0000000000000004: Vd,
          __wbindgen_cast_0000000000000005: Wd,
          __wbindgen_cast_0000000000000006: Ud,
          __wbindgen_cast_0000000000000007: zd,
          __wbindgen_cast_0000000000000008: jd,
          __wbindgen_cast_0000000000000009: Kd,
          __wbindgen_cast_000000000000000a: $d,
          __wbindgen_cast_000000000000000b: Nd,
          __wbindgen_cast_000000000000000c: Qd,
          __wbindgen_cast_000000000000000d: Xd,
          __wbindgen_cast_000000000000000e: Yd,
          __wbindgen_cast_000000000000000f: Hd,
          __wbindgen_cast_0000000000000010: Jd,
          __wbindgen_cast_0000000000000011: Zd,
          __wbindgen_cast_0000000000000012: _i,
          __wbindgen_cast_0000000000000013: ei,
          __wbindgen_cast_0000000000000014: ti,
          __wbindgen_cast_0000000000000015: ni,
          __wbindgen_cast_0000000000000016: bi,
          __wbindgen_cast_0000000000000017: ri,
          __wbindgen_cast_0000000000000018: ci
        }
      }, b_), bg = m.memory, rg = m.main, cg = m.__abort_handler, ag = m.__instance_terminated, fg = m.__wasm_bindgen_func_elem_11740, og = m.__wasm_bindgen_func_elem_3366, ug = m.__wasm_bindgen_func_elem_4399, dg = m.__wasm_bindgen_func_elem_4399_11, ig = m.__wasm_bindgen_func_elem_4399_12, gg = m.__wasm_bindgen_func_elem_3368, sg = m.__wasm_bindgen_func_elem_3368_3, wg = m.__wasm_bindgen_func_elem_3368_4, lg = m.__wasm_bindgen_func_elem_3368_5, mg = m.__wasm_bindgen_func_elem_3368_7, pg = m.__wasm_bindgen_func_elem_3368_8, xg = m.__wasm_bindgen_func_elem_3368_9, yg = m.__wasm_bindgen_func_elem_3368_10, hg = m.__wasm_bindgen_func_elem_3375, vg = m.__wasm_bindgen_func_elem_1574, Sg = m.__wbindgen_export, Ig = m.__wbindgen_export2, Ag = m.__wbindgen_export3, Dg = m.__wbindgen_export4, Pg = m.__wbindgen_export5, Mg = m.__wbindgen_add_to_stack_pointer, t_ = m.__wbindgen_start, Fg = Object.freeze(Object.defineProperty({
        __proto__: null,
        __abort_handler: cg,
        __instance_terminated: ag,
        __wasm_bindgen_func_elem_11740: fg,
        __wasm_bindgen_func_elem_1574: vg,
        __wasm_bindgen_func_elem_3366: og,
        __wasm_bindgen_func_elem_3368: gg,
        __wasm_bindgen_func_elem_3368_10: yg,
        __wasm_bindgen_func_elem_3368_3: sg,
        __wasm_bindgen_func_elem_3368_4: wg,
        __wasm_bindgen_func_elem_3368_5: lg,
        __wasm_bindgen_func_elem_3368_7: mg,
        __wasm_bindgen_func_elem_3368_8: pg,
        __wasm_bindgen_func_elem_3368_9: xg,
        __wasm_bindgen_func_elem_3375: hg,
        __wasm_bindgen_func_elem_4399: ug,
        __wasm_bindgen_func_elem_4399_11: dg,
        __wasm_bindgen_func_elem_4399_12: ig,
        __wbindgen_add_to_stack_pointer: Mg,
        __wbindgen_export: Sg,
        __wbindgen_export2: Ig,
        __wbindgen_export3: Ag,
        __wbindgen_export4: Dg,
        __wbindgen_export5: Pg,
        __wbindgen_start: t_,
        main: rg,
        memory: bg
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      ng(Fg);
      t_();
    })();
  }
});
export default require_stdin();
