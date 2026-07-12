const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/demo-C36HSm7t.js","assets/vite-plugin-wasm-helper-D7K_KhUE.js","assets/demo-CQDKuT5b.js","assets/demo-DwtpApK9.js","assets/demo-njrbaOK1.js","assets/demo-BYtwQuMW.js","assets/demo-CeyqujVO.js","assets/demo-DW5Ha5bf.js","assets/demo-g21p7SPY.js","assets/demo-fXMcLoOd.js","assets/demo-BT2gC024.js","assets/demo-BeOHh2AZ.js","assets/demo-BHtm3Zxp.js","assets/demo-D6z57jom.js","assets/demo-B-ITDCBn.js","assets/demo-DEtifWg7.js"])))=>i.map(i=>d[i]);
let on, Lf, re, X, O_, nn, le, V, ys, Le;
let __tla = (async () => {
  function as(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ye = {}, Rn = [], xt = () => {
  }, _l = () => false, pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cs = (e) => e.startsWith("onUpdate:"), De = Object.assign, us = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Dc = Object.prototype.hasOwnProperty, ge = (e, t) => Dc.call(e, t), se = Array.isArray, On = (e) => mr(e) === "[object Map]", bl = (e) => mr(e) === "[object Set]", qs = (e) => mr(e) === "[object Date]", ie = (e) => typeof e == "function", Ie = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", pe = (e) => e !== null && typeof e == "object", yl = (e) => (pe(e) || ie(e)) && ie(e.then) && ie(e.catch), El = Object.prototype.toString, mr = (e) => El.call(e), Mc = (e) => mr(e).slice(8, -1), wl = (e) => mr(e) === "[object Object]", no = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = as(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ro = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, $c = /-\w/g, rt = ro((e) => e.replace($c, (t) => t.slice(1).toUpperCase())), Hc = /\B([A-Z])/g, rn = ro((e) => e.replace(Hc, "-$1").toLowerCase()), gr = ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), wo = ro((e) => e ? `on${gr(e)}` : ""), Xt = (e, t) => !Object.is(e, t), So = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Sl = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, Vc = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Fc = (e) => {
    const t = Ie(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Ys;
  const oo = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Bn(e) {
    if (se(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = Ie(r) ? Wc(r) : Bn(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (Ie(e) || pe(e)) return e;
  }
  const jc = /;(?![^(]*\))/g, Bc = /:([^]+)/, Uc = /\/\*[^]*?\*\//g;
  function Wc(e) {
    const t = {};
    return e.replace(Uc, "").split(jc).forEach((n) => {
      if (n) {
        const r = n.split(Bc);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  function je(e) {
    let t = "";
    if (Ie(e)) t = e;
    else if (se(e)) for (let n = 0; n < e.length; n++) {
      const r = je(e[n]);
      r && (t += r + " ");
    }
    else if (pe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  function To(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !Ie(t) && (e.class = je(t)), n && (e.style = Bn(n)), e;
  }
  const zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gc = as(zc);
  function Tl(e) {
    return !!e || e === "";
  }
  function Kc(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = fs(e[r], t[r]);
    return n;
  }
  function fs(e, t) {
    if (e === t) return true;
    let n = qs(e), r = qs(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = vt(e), r = vt(t), n || r) return e === t;
    if (n = se(e), r = se(t), n || r) return n && r ? Kc(e, t) : false;
    if (n = pe(e), r = pe(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
        if (l && !a || !l && a || !fs(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  const Al = (e) => !!(e && e.__v_isRef === true), xe = (e) => Ie(e) ? e : e == null ? "" : se(e) || pe(e) && (e.toString === El || !ie(e.toString)) ? Al(e) ? xe(e.value) : JSON.stringify(e, Cl, 2) : String(e), Cl = (e, t) => Al(t) ? Cl(e, t.value) : On(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[Ao(r, s) + " =>"] = o, n), {})
  } : bl(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Ao(n))
  } : vt(t) ? Ao(t) : pe(t) && !se(t) && !wl(t) ? String(t) : t, Ao = (e, t = "") => {
    var n;
    return vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let Ge;
  class qc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Ge, !t && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = Ge;
        try {
          return Ge = this, t();
        } finally {
          Ge = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Ge, Ge = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Ge = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const o = this.parent.scopes.pop();
          o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function so() {
    return Ge;
  }
  function Yc(e, t = false) {
    Ge && Ge.cleanups.push(e);
  }
  let Se;
  const Co = /* @__PURE__ */ new WeakSet();
  class xl {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && Ge.active && Ge.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Co.has(this) && (Co.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rl(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Js(this), Ol(this);
      const t = Se, n = mt;
      Se = this, mt = true;
      try {
        return this.fn();
      } finally {
        Pl(this), Se = t, mt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) ps(t);
        this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Co.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      zo(this) && this.run();
    }
    get dirty() {
      return zo(this);
    }
  }
  let Ll = 0, Xn, Zn;
  function Rl(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Zn, Zn = e;
      return;
    }
    e.next = Xn, Xn = e;
  }
  function ds() {
    Ll++;
  }
  function hs() {
    if (--Ll > 0) return;
    if (Zn) {
      let t = Zn;
      for (Zn = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Xn; ) {
      let t = Xn;
      for (Xn = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Ol(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Pl(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), ps(r), Jc(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function zo(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Il(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Il(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sr) || (e.globalVersion = sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zo(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Se, r = mt;
    Se = e, mt = true;
    try {
      Ol(e);
      const o = e.fn(e._value);
      (t.version === 0 || Xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      Se = n, mt = r, Pl(e), e.flags &= -3;
    }
  }
  function ps(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) ps(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Jc(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let mt = true;
  const kl = [];
  function Vt() {
    kl.push(mt), mt = false;
  }
  function Ft() {
    const e = kl.pop();
    mt = e === void 0 ? true : e;
  }
  function Js(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = Se;
      Se = void 0;
      try {
        t();
      } finally {
        Se = n;
      }
    }
  }
  let sr = 0;
  class Qc {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class io {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Se || !mt || Se === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Se) n = this.activeLink = new Qc(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, Nl(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, sr++, this.notify(t);
    }
    notify(t) {
      ds();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        hs();
      }
    }
  }
  function Nl(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Nl(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Ur = /* @__PURE__ */ new WeakMap(), pn = Symbol(""), Go = Symbol(""), ir = Symbol("");
  function Ke(e, t, n) {
    if (mt && Se) {
      let r = Ur.get(e);
      r || Ur.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new io()), o.map = r, o.key = n), o.track();
    }
  }
  function Dt(e, t, n, r, o, s) {
    const i = Ur.get(e);
    if (!i) {
      sr++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (ds(), t === "clear") i.forEach(l);
    else {
      const a = se(e), u = a && no(n);
      if (a && n === "length") {
        const c = Number(r);
        i.forEach((f, h) => {
          (h === "length" || h === ir || !vt(h) && h >= c) && l(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(ir)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(pn)), On(e) && l(i.get(Go)));
          break;
        case "delete":
          a || (l(i.get(pn)), On(e) && l(i.get(Go)));
          break;
        case "set":
          On(e) && l(i.get(pn));
          break;
      }
    }
    hs();
  }
  function Xc(e, t) {
    const n = Ur.get(e);
    return n && n.get(t);
  }
  function wn(e) {
    const t = he(e);
    return t === e ? t : (Ke(t, "iterate", ir), at(e) ? t : t.map(_t));
  }
  function lo(e) {
    return Ke(e = he(e), "iterate", ir), e;
  }
  function Yt(e, t) {
    return jt(e) ? Mn(Zt(e) ? _t(t) : t) : _t(t);
  }
  const Zc = {
    __proto__: null,
    [Symbol.iterator]() {
      return xo(this, Symbol.iterator, (e) => Yt(this, e));
    },
    concat(...e) {
      return wn(this).concat(...e.map((t) => se(t) ? wn(t) : t));
    },
    entries() {
      return xo(this, "entries", (e) => (e[1] = Yt(this, e[1]), e));
    },
    every(e, t) {
      return Rt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Rt(this, "filter", e, t, (n) => n.map((r) => Yt(this, r)), arguments);
    },
    find(e, t) {
      return Rt(this, "find", e, t, (n) => Yt(this, n), arguments);
    },
    findIndex(e, t) {
      return Rt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Rt(this, "findLast", e, t, (n) => Yt(this, n), arguments);
    },
    findLastIndex(e, t) {
      return Rt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Rt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Lo(this, "includes", e);
    },
    indexOf(...e) {
      return Lo(this, "indexOf", e);
    },
    join(e) {
      return wn(this).join(e);
    },
    lastIndexOf(...e) {
      return Lo(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Rt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Gn(this, "pop");
    },
    push(...e) {
      return Gn(this, "push", e);
    },
    reduce(e, ...t) {
      return Qs(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Qs(this, "reduceRight", e, t);
    },
    shift() {
      return Gn(this, "shift");
    },
    some(e, t) {
      return Rt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Gn(this, "splice", e);
    },
    toReversed() {
      return wn(this).toReversed();
    },
    toSorted(e) {
      return wn(this).toSorted(e);
    },
    toSpliced(...e) {
      return wn(this).toSpliced(...e);
    },
    unshift(...e) {
      return Gn(this, "unshift", e);
    },
    values() {
      return xo(this, "values", (e) => Yt(this, e));
    }
  };
  function xo(e, t, n) {
    const r = lo(e), o = r[t]();
    return r !== e && !at(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.done || (s.value = n(s.value)), s;
    }), o;
  }
  const eu = Array.prototype;
  function Rt(e, t, n, r, o, s) {
    const i = lo(e), l = i !== e && !at(e), a = i[t];
    if (a !== eu[t]) {
      const f = a.apply(e, s);
      return l ? _t(f) : f;
    }
    let u = n;
    i !== e && (l ? u = function(f, h) {
      return n.call(this, Yt(e, f), h, e);
    } : n.length > 2 && (u = function(f, h) {
      return n.call(this, f, h, e);
    }));
    const c = a.call(i, u, r);
    return l && o ? o(c) : c;
  }
  function Qs(e, t, n, r) {
    const o = lo(e);
    let s = n;
    return o !== e && (at(e) ? n.length > 3 && (s = function(i, l, a) {
      return n.call(this, i, l, a, e);
    }) : s = function(i, l, a) {
      return n.call(this, i, Yt(e, l), a, e);
    }), o[t](s, ...r);
  }
  function Lo(e, t, n) {
    const r = he(e);
    Ke(r, "iterate", ir);
    const o = r[t](...n);
    return (o === -1 || o === false) && uo(n[0]) ? (n[0] = he(n[0]), r[t](...n)) : o;
  }
  function Gn(e, t, n = []) {
    Vt(), ds();
    const r = he(e)[t].apply(e, n);
    return hs(), Ft(), r;
  }
  const tu = as("__proto__,__v_isRef,__isVue"), Dl = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt));
  function nu(e) {
    vt(e) || (e = String(e));
    const t = he(this);
    return Ke(t, "has", e), t.hasOwnProperty(e);
  }
  class Ml {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? Bl : jl : s ? Fl : Vl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = se(t);
      if (!o) {
        let a;
        if (i && (a = Zc[n])) return a;
        if (n === "hasOwnProperty") return nu;
      }
      const l = Reflect.get(t, n, ke(t) ? t : r);
      if ((vt(n) ? Dl.has(n) : tu(n)) || (o || Ke(t, "get", n), s)) return l;
      if (ke(l)) {
        const a = i && no(n) ? l : l.value;
        return o && pe(a) ? bn(a) : a;
      }
      return pe(l) ? o ? bn(l) : _n(l) : l;
    }
  }
  class $l extends Ml {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let s = t[n];
      const i = se(t) && no(n);
      if (!this._isShallow) {
        const u = jt(s);
        if (!at(r) && !jt(r) && (s = he(s), r = he(r)), !i && ke(s) && !ke(r)) return u || (s.value = r), true;
      }
      const l = i ? Number(n) < t.length : ge(t, n), a = Reflect.set(t, n, r, ke(t) ? t : o);
      return t === he(o) && (l ? Xt(r, s) && Dt(t, "set", n, r) : Dt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ge(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Dt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!vt(n) || !Dl.has(n)) && Ke(t, "has", n), r;
    }
    ownKeys(t) {
      return Ke(t, "iterate", se(t) ? "length" : pn), Reflect.ownKeys(t);
    }
  }
  class Hl extends Ml {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const ru = new $l(), ou = new Hl(), su = new $l(true), iu = new Hl(true), Ko = (e) => e, Cr = (e) => Reflect.getPrototypeOf(e);
  function lu(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = he(o), i = On(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...r), c = n ? Ko : t ? Mn : _t;
      return !t && Ke(s, "iterate", a ? Go : pn), De(Object.create(u), {
        next() {
          const { value: f, done: h } = u.next();
          return h ? {
            value: f,
            done: h
          } : {
            value: l ? [
              c(f[0]),
              c(f[1])
            ] : c(f),
            done: h
          };
        }
      });
    };
  }
  function xr(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function au(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = he(s), l = he(o);
        e || (Xt(o, l) && Ke(i, "get", o), Ke(i, "get", l));
        const { has: a } = Cr(i), u = t ? Ko : e ? Mn : _t;
        if (a.call(i, o)) return u(s.get(o));
        if (a.call(i, l)) return u(s.get(l));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && Ke(he(o), "iterate", pn), o.size;
      },
      has(o) {
        const s = this.__v_raw, i = he(s), l = he(o);
        return e || (Xt(o, l) && Ke(i, "has", o), Ke(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
      },
      forEach(o, s) {
        const i = this, l = i.__v_raw, a = he(l), u = t ? Ko : e ? Mn : _t;
        return !e && Ke(a, "iterate", pn), l.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return De(n, e ? {
      add: xr("add"),
      set: xr("set"),
      delete: xr("delete"),
      clear: xr("clear")
    } : {
      add(o) {
        !t && !at(o) && !jt(o) && (o = he(o));
        const s = he(this);
        return Cr(s).has.call(s, o) || (s.add(o), Dt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !at(s) && !jt(s) && (s = he(s));
        const i = he(this), { has: l, get: a } = Cr(i);
        let u = l.call(i, o);
        u || (o = he(o), u = l.call(i, o));
        const c = a.call(i, o);
        return i.set(o, s), u ? Xt(s, c) && Dt(i, "set", o, s) : Dt(i, "add", o, s), this;
      },
      delete(o) {
        const s = he(this), { has: i, get: l } = Cr(s);
        let a = i.call(s, o);
        a || (o = he(o), a = i.call(s, o)), l && l.call(s, o);
        const u = s.delete(o);
        return a && Dt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = he(this), s = o.size !== 0, i = o.clear();
        return s && Dt(o, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = lu(o, e, t);
    }), n;
  }
  function ao(e, t) {
    const n = au(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ge(n, o) && o in r ? n : r, o, s);
  }
  const cu = {
    get: ao(false, false)
  }, uu = {
    get: ao(false, true)
  }, fu = {
    get: ao(true, false)
  }, du = {
    get: ao(true, true)
  }, Vl = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap();
  function hu(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function pu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : hu(Mc(e));
  }
  function _n(e) {
    return jt(e) ? e : co(e, false, ru, cu, Vl);
  }
  function Ul(e) {
    return co(e, false, su, uu, Fl);
  }
  function bn(e) {
    return co(e, true, ou, fu, jl);
  }
  function mu(e) {
    return co(e, true, iu, du, Bl);
  }
  function co(e, t, n, r, o) {
    if (!pe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = pu(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const l = new Proxy(e, s === 2 ? r : n);
    return o.set(e, l), l;
  }
  function Zt(e) {
    return jt(e) ? Zt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function jt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function at(e) {
    return !!(e && e.__v_isShallow);
  }
  function uo(e) {
    return e ? !!e.__v_raw : false;
  }
  function he(e) {
    const t = e && e.__v_raw;
    return t ? he(t) : e;
  }
  function gu(e) {
    return !ge(e, "__v_skip") && Object.isExtensible(e) && Sl(e, "__v_skip", true), e;
  }
  const _t = (e) => pe(e) ? _n(e) : e, Mn = (e) => pe(e) ? bn(e) : e;
  function ke(e) {
    return e ? e.__v_isRef === true : false;
  }
  function qe(e) {
    return Wl(e, false);
  }
  function Ae(e) {
    return Wl(e, true);
  }
  function Wl(e, t) {
    return ke(e) ? e : new vu(e, t);
  }
  class vu {
    constructor(t, n) {
      this.dep = new io(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : he(t), this._value = n ? t : _t(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || at(t) || jt(t);
      t = r ? t : he(t), Xt(t, n) && (this._rawValue = t, this._value = r ? t : _t(t), this.dep.trigger());
    }
  }
  function ee(e) {
    return ke(e) ? e.value : e;
  }
  function Ee(e) {
    return ie(e) ? e() : ee(e);
  }
  const _u = {
    get: (e, t, n) => t === "__v_raw" ? e : ee(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return ke(o) && !ke(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function zl(e) {
    return Zt(e) ? e : new Proxy(e, _u);
  }
  class bu {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new io(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Gl(e) {
    return new bu(e);
  }
  class yu {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = he(t);
      let o = true, s = t;
      if (!se(t) || !no(String(n))) do
        o = !uo(s) || at(s);
      while (o && (s = s.__v_raw));
      this._shallow = o;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = ee(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && ke(this._raw[this._key])) {
        const n = this._object[this._key];
        if (ke(n)) {
          n.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return Xc(this._raw, this._key);
    }
  }
  class Eu {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  function Kl(e, t, n) {
    return ke(e) ? e : ie(e) ? new Eu(e) : pe(e) && arguments.length > 1 ? wu(e, t, n) : qe(e);
  }
  function wu(e, t, n) {
    return new yu(e, t, n);
  }
  class Su {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new io(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Se !== this) return Rl(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Il(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Tu(e, t, n = false) {
    let r, o;
    return ie(e) ? r = e : (r = e.get, o = e.set), new Su(r, o, n);
  }
  const Lr = {}, Wr = /* @__PURE__ */ new WeakMap();
  let cn;
  function Au(e, t = false, n = cn) {
    if (n) {
      let r = Wr.get(n);
      r || Wr.set(n, r = []), r.push(e);
    }
  }
  function Cu(e, t, n = ye) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, u = (v) => o ? v : at(v) || o === false || o === 0 ? Mt(v, 1) : Mt(v);
    let c, f, h, p, y = false, _ = false;
    if (ke(e) ? (f = () => e.value, y = at(e)) : Zt(e) ? (f = () => u(e), y = true) : se(e) ? (_ = true, y = e.some((v) => Zt(v) || at(v)), f = () => e.map((v) => {
      if (ke(v)) return v.value;
      if (Zt(v)) return u(v);
      if (ie(v)) return a ? a(v, 2) : v();
    })) : ie(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
      if (h) {
        Vt();
        try {
          h();
        } finally {
          Ft();
        }
      }
      const v = cn;
      cn = c;
      try {
        return a ? a(e, 3, [
          p
        ]) : e(p);
      } finally {
        cn = v;
      }
    } : f = xt, t && o) {
      const v = f, $ = o === true ? 1 / 0 : o;
      f = () => Mt(v(), $);
    }
    const w = so(), R = () => {
      c.stop(), w && w.active && us(w.effects, c);
    };
    if (s && t) {
      const v = t;
      t = (...$) => {
        v(...$), R();
      };
    }
    let S = _ ? new Array(e.length).fill(Lr) : Lr;
    const g = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const $ = c.run();
        if (o || y || (_ ? $.some((Y, H) => Xt(Y, S[H])) : Xt($, S))) {
          h && h();
          const Y = cn;
          cn = c;
          try {
            const H = [
              $,
              S === Lr ? void 0 : _ && S[0] === Lr ? [] : S,
              p
            ];
            S = $, a ? a(t, 3, H) : t(...H);
          } finally {
            cn = Y;
          }
        }
      } else c.run();
    };
    return l && l(g), c = new xl(f), c.scheduler = i ? () => i(g, false) : g, p = (v) => Au(v, false, c), h = c.onStop = () => {
      const v = Wr.get(c);
      if (v) {
        if (a) a(v, 4);
        else for (const $ of v) $();
        Wr.delete(c);
      }
    }, t ? r ? g(true) : S = c.run() : i ? i(g.bind(null, true), true) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
  }
  function Mt(e, t = 1 / 0, n) {
    if (t <= 0 || !pe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, ke(e)) Mt(e.value, t, n);
    else if (se(e)) for (let r = 0; r < e.length; r++) Mt(e[r], t, n);
    else if (bl(e) || On(e)) e.forEach((r) => {
      Mt(r, t, n);
    });
    else if (wl(e)) {
      for (const r in e) Mt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Mt(e[r], t, n);
    }
    return e;
  }
  function vr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      _r(o, t, n);
    }
  }
  function bt(e, t, n, r) {
    if (ie(e)) {
      const o = vr(e, t, n, r);
      return o && yl(o) && o.catch((s) => {
        _r(s, t, n);
      }), o;
    }
    if (se(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(bt(e[s], t, n, r));
      return o;
    }
  }
  function _r(e, t, n, r = true) {
    const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ye;
    if (t) {
      let l = t.parent;
      const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === false) return;
        }
        l = l.parent;
      }
      if (s) {
        Vt(), vr(s, null, 10, [
          e,
          a,
          u
        ]), Ft();
        return;
      }
    }
    xu(e, n, o, r, i);
  }
  function xu(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const Xe = [];
  let Tt = -1;
  const Pn = [];
  let Jt = null, An = 0;
  const ql = Promise.resolve();
  let zr = null;
  function Un(e) {
    const t = zr || ql;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Lu(e) {
    let t = Tt + 1, n = Xe.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = Xe[r], s = lr(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function ms(e) {
    if (!(e.flags & 1)) {
      const t = lr(e), n = Xe[Xe.length - 1];
      !n || !(e.flags & 2) && t >= lr(n) ? Xe.push(e) : Xe.splice(Lu(t), 0, e), e.flags |= 1, Yl();
    }
  }
  function Yl() {
    zr || (zr = ql.then(Jl));
  }
  function Ru(e) {
    se(e) ? Pn.push(...e) : Jt && e.id === -1 ? Jt.splice(An + 1, 0, e) : e.flags & 1 || (Pn.push(e), e.flags |= 1), Yl();
  }
  function Xs(e, t, n = Tt + 1) {
    for (; n < Xe.length; n++) {
      const r = Xe[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Xe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Gr(e) {
    if (Pn.length) {
      const t = [
        ...new Set(Pn)
      ].sort((n, r) => lr(n) - lr(r));
      if (Pn.length = 0, Jt) {
        Jt.push(...t);
        return;
      }
      for (Jt = t, An = 0; An < Jt.length; An++) {
        const n = Jt[An];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Jt = null, An = 0;
    }
  }
  const lr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Jl(e) {
    try {
      for (Tt = 0; Tt < Xe.length; Tt++) {
        const t = Xe[Tt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Tt < Xe.length; Tt++) {
        const t = Xe[Tt];
        t && (t.flags &= -2);
      }
      Tt = -1, Xe.length = 0, Gr(), zr = null, (Xe.length || Pn.length) && Jl();
    }
  }
  let Be = null, Ql = null;
  function Kr(e) {
    const t = Be;
    return Be = e, Ql = e && e.type.__scopeId || null, t;
  }
  Le = function(e, t = Be, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Qr(-1);
      const s = Kr(t);
      let i;
      try {
        i = e(...o);
      } finally {
        Kr(s), r._d && Qr(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  function qr(e, t) {
    if (Be === null) return e;
    const n = mo(Be), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, l, a = ye] = t[o];
      s && (ie(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Mt(i), r.push({
        dir: s,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a
      }));
    }
    return e;
  }
  function At(e, t, n, r) {
    const o = e.dirs, s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      s && (l.oldValue = s[i].value);
      let a = l.dir[r];
      a && (Vt(), bt(a, n, 8, [
        e.el,
        l,
        e,
        t
      ]), Ft());
    }
  }
  function en(e, t) {
    if (Fe) {
      let n = Fe.provides;
      const r = Fe.parent && Fe.parent.provides;
      r === n && (n = Fe.provides = Object.create(r)), n[e] = t;
    }
  }
  function Ue(e, t, n = false) {
    const r = Et();
    if (r || gn) {
      let o = gn ? gn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && ie(t) ? t.call(r && r.proxy) : t;
    }
  }
  function Xl() {
    return !!(Et() || gn);
  }
  const Ou = Symbol.for("v-scx"), Pu = () => Ue(Ou);
  function Iu(e, t) {
    return gs(e, null, t);
  }
  function Ye(e, t, n) {
    return gs(e, t, n);
  }
  function gs(e, t, n = ye) {
    const { immediate: r, deep: o, flush: s, once: i } = n, l = De({}, n), a = t && r || !t && s !== "post";
    let u;
    if ($n) {
      if (s === "sync") {
        const p = Pu();
        u = p.__watcherHandles || (p.__watcherHandles = []);
      } else if (!a) {
        const p = () => {
        };
        return p.stop = xt, p.resume = xt, p.pause = xt, p;
      }
    }
    const c = Fe;
    l.call = (p, y, _) => bt(p, c, y, _);
    let f = false;
    s === "post" ? l.scheduler = (p) => {
      nt(p, c && c.suspense);
    } : s !== "sync" && (f = true, l.scheduler = (p, y) => {
      y ? p() : ms(p);
    }), l.augmentJob = (p) => {
      t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
    };
    const h = Cu(e, t, l);
    return $n && (u ? u.push(h) : a && h()), h;
  }
  function ku(e, t, n) {
    const r = this.proxy, o = Ie(e) ? e.includes(".") ? Zl(r, e) : () => r[e] : e.bind(r, r);
    let s;
    ie(t) ? s = t : (s = t.handler, n = t);
    const i = yr(this), l = gs(o, s.bind(r), n);
    return i(), l;
  }
  function Zl(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  const Nu = Symbol("_vte"), ea = (e) => e.__isTeleport, Ct = Symbol("_leaveCb"), Kn = Symbol("_enterCb");
  function ta() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return ct(() => {
      e.isMounted = true;
    }), bs(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ut = [
    Function,
    Array
  ], na = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ut,
    onEnter: ut,
    onAfterEnter: ut,
    onEnterCancelled: ut,
    onBeforeLeave: ut,
    onLeave: ut,
    onAfterLeave: ut,
    onLeaveCancelled: ut,
    onBeforeAppear: ut,
    onAppear: ut,
    onAfterAppear: ut,
    onAppearCancelled: ut
  }, ra = (e) => {
    const t = e.subTree;
    return t.component ? ra(t.component) : t;
  }, Du = {
    name: "BaseTransition",
    props: na,
    setup(e, { slots: t }) {
      const n = Et(), r = ta();
      return () => {
        const o = t.default && vs(t.default(), true);
        if (!o || !o.length) return;
        const s = oa(o), i = he(e), { mode: l } = i;
        if (r.isLeaving) return Ro(s);
        const a = Zs(s);
        if (!a) return Ro(s);
        let u = ar(a, i, r, n, (f) => u = f);
        a.type !== Ve && yn(a, u);
        let c = n.subTree && Zs(n.subTree);
        if (c && c.type !== Ve && !fn(c, a) && ra(n).type !== Ve) {
          let f = ar(c, i, r, n);
          if (yn(c, f), l === "out-in" && a.type !== Ve) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Ro(s);
          l === "in-out" && a.type !== Ve ? f.delayLeave = (h, p, y) => {
            const _ = sa(r, c);
            _[String(c.key)] = c, h[Ct] = () => {
              p(), h[Ct] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              y(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function oa(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Ve) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Mu = Du;
  function sa(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function ar(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: l = false, onBeforeEnter: a, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: h, onLeave: p, onAfterLeave: y, onLeaveCancelled: _, onBeforeAppear: w, onAppear: R, onAfterAppear: S, onAppearCancelled: g } = t, v = String(e.key), $ = sa(n, e), Y = (L, k) => {
      L && bt(L, r, 9, k);
    }, H = (L, k) => {
      const W = k[1];
      Y(L, k), se(L) ? L.every((E) => E.length <= 1) && W() : L.length <= 1 && W();
    }, T = {
      mode: i,
      persisted: l,
      beforeEnter(L) {
        let k = a;
        if (!n.isMounted) if (s) k = w || a;
        else return;
        L[Ct] && L[Ct](true);
        const W = $[v];
        W && fn(e, W) && W.el[Ct] && W.el[Ct](), Y(k, [
          L
        ]);
      },
      enter(L) {
        let k = u, W = c, E = f;
        if (!n.isMounted) if (s) k = R || u, W = S || c, E = g || f;
        else return;
        let D = false;
        L[Kn] = (j) => {
          D || (D = true, j ? Y(E, [
            L
          ]) : Y(W, [
            L
          ]), T.delayedLeave && T.delayedLeave(), L[Kn] = void 0);
        };
        const M = L[Kn].bind(null, false);
        k ? H(k, [
          L,
          M
        ]) : M();
      },
      leave(L, k) {
        const W = String(e.key);
        if (L[Kn] && L[Kn](true), n.isUnmounting) return k();
        Y(h, [
          L
        ]);
        let E = false;
        L[Ct] = (M) => {
          E || (E = true, k(), M ? Y(_, [
            L
          ]) : Y(y, [
            L
          ]), L[Ct] = void 0, $[W] === e && delete $[W]);
        };
        const D = L[Ct].bind(null, false);
        $[W] = e, p ? H(p, [
          L,
          D
        ]) : D();
      },
      clone(L) {
        const k = ar(L, t, n, r, o);
        return o && o(k), k;
      }
    };
    return T;
  }
  function Ro(e) {
    if (br(e)) return e = tn(e), e.children = null, e;
  }
  function Zs(e) {
    if (!br(e)) return ea(e.type) && e.children ? oa(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && ie(n.default)) return n.default();
    }
  }
  function yn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function vs(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === _e ? (i.patchFlag & 128 && o++, r = r.concat(vs(i.children, t, l))) : (t || i.type !== Ve) && r.push(l != null ? tn(i, {
        key: l
      }) : i);
    }
    if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r;
  }
  function fe(e, t) {
    return ie(e) ? De({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  }
  function ia() {
    const e = Et();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  }
  function _s(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  function ei(e) {
    const t = Et(), n = Ae(null);
    if (t) {
      const o = t.refs === ye ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (s) => n.value = s
      });
    }
    return n;
  }
  function ti(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
  }
  const Yr = /* @__PURE__ */ new WeakMap();
  function In(e, t, n, r, o = false) {
    if (se(e)) {
      e.forEach((_, w) => In(_, t && (se(t) ? t[w] : t), n, r, o));
      return;
    }
    if (mn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && In(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? mo(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e, u = t && t.r, c = l.refs === ye ? l.refs = {} : l.refs, f = l.setupState, h = he(f), p = f === ye ? _l : (_) => ti(c, _) ? false : ge(h, _), y = (_, w) => !(w && ti(c, w));
    if (u != null && u !== a) {
      if (ni(t), Ie(u)) c[u] = null, p(u) && (f[u] = null);
      else if (ke(u)) {
        const _ = t;
        y(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
      }
    }
    if (ie(a)) vr(a, l, 12, [
      i,
      c
    ]);
    else {
      const _ = Ie(a), w = ke(a);
      if (_ || w) {
        const R = () => {
          if (e.f) {
            const S = _ ? p(a) ? f[a] : c[a] : y() || !e.k ? a.value : c[e.k];
            if (o) se(S) && us(S, s);
            else if (se(S)) S.includes(s) || S.push(s);
            else if (_) c[a] = [
              s
            ], p(a) && (f[a] = c[a]);
            else {
              const g = [
                s
              ];
              y(a, e.k) && (a.value = g), e.k && (c[e.k] = g);
            }
          } else _ ? (c[a] = i, p(a) && (f[a] = i)) : w && (y(a, e.k) && (a.value = i), e.k && (c[e.k] = i));
        };
        if (i) {
          const S = () => {
            R(), Yr.delete(e);
          };
          S.id = -1, Yr.set(e, S), nt(S, n);
        } else ni(e), R();
      }
    }
  }
  function ni(e) {
    const t = Yr.get(e);
    t && (t.flags |= 8, Yr.delete(e));
  }
  let ri = false;
  const Sn = () => {
    ri || (console.error("Hydration completed but contains mismatches."), ri = true);
  }, $u = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Hu = (e) => e.namespaceURI.includes("MathML"), Rr = (e) => {
    if (e.nodeType === 1) {
      if ($u(e)) return "svg";
      if (Hu(e)) return "mathml";
    }
  }, Ln = (e) => e.nodeType === 8;
  function Vu(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: l, insert: a, createComment: u } } = e, c = (g, v) => {
      if (!v.hasChildNodes()) {
        n(null, g, v), Gr(), v._vnode = g;
        return;
      }
      f(v.firstChild, g, null, null, null), Gr(), v._vnode = g;
    }, f = (g, v, $, Y, H, T = false) => {
      T = T || !!v.dynamicChildren;
      const L = Ln(g) && g.data === "[", k = () => _(g, v, $, Y, H, L), { type: W, ref: E, shapeFlag: D, patchFlag: M } = v;
      let j = g.nodeType;
      v.el = g, M === -2 && (T = false, v.dynamicChildren = null);
      let x = null;
      switch (W) {
        case vn:
          j !== 3 ? v.children === "" ? (a(v.el = o(""), i(g), g), x = g) : x = k() : (g.data !== v.children && (Sn(), g.data = v.children), x = s(g));
          break;
        case Ve:
          S(g) ? (x = s(g), R(v.el = g.content.firstChild, g, $)) : j !== 8 || L ? x = k() : x = s(g);
          break;
        case tr:
          if (L && (g = s(g), j = g.nodeType), j === 1 || j === 3) {
            x = g;
            const Z = !v.children.length;
            for (let U = 0; U < v.staticCount; U++) Z && (v.children += x.nodeType === 1 ? x.outerHTML : x.data), U === v.staticCount - 1 && (v.anchor = x), x = s(x);
            return L ? s(x) : x;
          } else k();
          break;
        case _e:
          L ? x = y(g, v, $, Y, H, T) : x = k();
          break;
        default:
          if (D & 1) (j !== 1 || v.type.toLowerCase() !== g.tagName.toLowerCase()) && !S(g) ? x = k() : x = h(g, v, $, Y, H, T);
          else if (D & 6) {
            v.slotScopeIds = H;
            const Z = i(g);
            if (L ? x = w(g) : Ln(g) && g.data === "teleport start" ? x = w(g, g.data, "teleport end") : x = s(g), t(v, Z, null, $, Y, Rr(Z), T), mn(v) && !v.type.__asyncResolved) {
              let U;
              L ? (U = le(_e), U.anchor = x ? x.previousSibling : Z.lastChild) : U = g.nodeType === 3 ? nn("") : le("div"), U.el = g, v.component.subTree = U;
            }
          } else D & 64 ? j !== 8 ? x = k() : x = v.type.hydrate(g, v, $, Y, H, T, e, p) : D & 128 && (x = v.type.hydrate(g, v, $, Y, Rr(i(g)), H, T, e, f));
      }
      return E != null && In(E, null, Y, v), x;
    }, h = (g, v, $, Y, H, T) => {
      T = T || !!v.dynamicChildren;
      const { type: L, props: k, patchFlag: W, shapeFlag: E, dirs: D, transition: M } = v, j = L === "input" || L === "option";
      if (j || W !== -1) {
        D && At(v, null, $, "created");
        let x = false;
        if (S(g)) {
          x = Ta(null, M) && $ && $.vnode.props && $.vnode.props.appear;
          const U = g.content.firstChild;
          if (x) {
            const ce = U.getAttribute("class");
            ce && (U.$cls = ce), M.beforeEnter(U);
          }
          R(U, g, $), v.el = g = U;
        }
        if (E & 16 && !(k && (k.innerHTML || k.textContent))) {
          let U = p(g.firstChild, v, g, $, Y, H, T);
          for (; U; ) {
            Or(g, 1) || Sn();
            const ce = U;
            U = U.nextSibling, l(ce);
          }
        } else if (E & 8) {
          let U = v.children;
          U[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (U = U.slice(1));
          const { textContent: ce } = g;
          ce !== U && ce !== U.replace(/\r\n|\r/g, `
`) && (Or(g, 0) || Sn(), g.textContent = v.children);
        }
        if (k) {
          if (j || !T || W & 48) {
            const U = g.tagName.includes("-");
            for (const ce in k) (j && (ce.endsWith("value") || ce === "indeterminate") || pr(ce) && !hn(ce) || ce[0] === "." || U && !hn(ce)) && r(g, ce, null, k[ce], void 0, $);
          } else if (k.onClick) r(g, "onClick", null, k.onClick, void 0, $);
          else if (W & 4 && Zt(k.style)) for (const U in k.style) k.style[U];
        }
        let Z;
        (Z = k && k.onVnodeBeforeMount) && ft(Z, $, v), D && At(v, null, $, "beforeMount"), ((Z = k && k.onVnodeMounted) || D || x) && Ra(() => {
          Z && ft(Z, $, v), x && M.enter(g), D && At(v, null, $, "mounted");
        }, Y);
      }
      return g.nextSibling;
    }, p = (g, v, $, Y, H, T, L) => {
      L = L || !!v.dynamicChildren;
      const k = v.children, W = k.length;
      for (let E = 0; E < W; E++) {
        const D = L ? k[E] : k[E] = dt(k[E]), M = D.type === vn;
        g ? (M && !L && E + 1 < W && dt(k[E + 1]).type === vn && (a(o(g.data.slice(D.children.length)), $, s(g)), g.data = D.children), g = f(g, D, Y, H, T, L)) : M && !D.children ? a(D.el = o(""), $) : (Or($, 1) || Sn(), n(null, D, $, null, Y, H, Rr($), T));
      }
      return g;
    }, y = (g, v, $, Y, H, T) => {
      const { slotScopeIds: L } = v;
      L && (H = H ? H.concat(L) : L);
      const k = i(g), W = p(s(g), v, k, $, Y, H, T);
      return W && Ln(W) && W.data === "]" ? s(v.anchor = W) : (Sn(), a(v.anchor = u("]"), k, W), W);
    }, _ = (g, v, $, Y, H, T) => {
      if (Or(g.parentElement, 1) || Sn(), v.el = null, T) {
        const W = w(g);
        for (; ; ) {
          const E = s(g);
          if (E && E !== W) l(E);
          else break;
        }
      }
      const L = s(g), k = i(g);
      return l(g), n(null, v, k, L, $, Y, Rr(k), H), $ && ($.vnode.el = v.el, ma($, v.el)), L;
    }, w = (g, v = "[", $ = "]") => {
      let Y = 0;
      for (; g; ) if (g = s(g), g && Ln(g) && (g.data === v && Y++, g.data === $)) {
        if (Y === 0) return s(g);
        Y--;
      }
      return g;
    }, R = (g, v, $) => {
      const Y = v.parentNode;
      Y && Y.replaceChild(g, v);
      let H = $;
      for (; H; ) H.vnode.el === v && (H.vnode.el = H.subTree.el = g), H = H.parent;
    }, S = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const oi = "data-allow-mismatch", Fu = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function Or(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(oi); ) e = e.parentElement;
    const n = e && e.getAttribute(oi);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : r.includes(Fu[t]);
    }
  }
  oo().requestIdleCallback;
  oo().cancelIdleCallback;
  function ju(e, t) {
    if (Ln(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (Ln(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const mn = (e) => !!e.type.__asyncLoader;
  function Bu(e) {
    ie(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: l = true, onError: a } = e;
    let u = null, c, f = 0;
    const h = () => (f++, u = null, p()), p = () => {
      let y;
      return u || (y = u = t().catch((_) => {
        if (_ = _ instanceof Error ? _ : new Error(String(_)), a) return new Promise((w, R) => {
          a(_, () => w(h()), () => R(_), f + 1);
        });
        throw _;
      }).then((_) => y !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
    };
    return fe({
      name: "AsyncComponentWrapper",
      __asyncLoader: p,
      __asyncHydrate(y, _, w) {
        let R = false;
        (_.bu || (_.bu = [])).push(() => R = true);
        const S = () => {
          R || w();
        }, g = s ? () => {
          const v = s(S, ($) => ju(y, $));
          v && (_.bum || (_.bum = [])).push(v);
        } : S;
        c ? g() : p().then(() => !_.isUnmounted && g());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const y = Fe;
        if (_s(y), c) return () => Pr(c, y);
        const _ = (g) => {
          u = null, _r(g, y, 13, !r);
        };
        if (l && y.suspense || $n) return p().then((g) => () => Pr(g, y)).catch((g) => (_(g), () => r ? le(r, {
          error: g
        }) : null));
        const w = qe(false), R = qe(), S = qe(!!o);
        return o && setTimeout(() => {
          S.value = false;
        }, o), i != null && setTimeout(() => {
          if (!w.value && !R.value) {
            const g = new Error(`Async component timed out after ${i}ms.`);
            _(g), R.value = g;
          }
        }, i), p().then(() => {
          w.value = true, y.parent && br(y.parent.vnode) && y.parent.update();
        }).catch((g) => {
          _(g), R.value = g;
        }), () => {
          if (w.value && c) return Pr(c, y);
          if (R.value && r) return le(r, {
            error: R.value
          });
          if (n && !S.value) return Pr(n, y);
        };
      }
    });
  }
  function Pr(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = le(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
  }
  const br = (e) => e.type.__isKeepAlive;
  function Uu(e, t) {
    la(e, "a", t);
  }
  function Wu(e, t) {
    la(e, "da", t);
  }
  function la(e, t, n = Fe) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (fo(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) br(o.parent.vnode) && zu(r, t, n, o), o = o.parent;
    }
  }
  function zu(e, t, n, r) {
    const o = fo(t, e, r, true);
    ho(() => {
      us(r[t], o);
    }, n);
  }
  function fo(e, t, n = Fe, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        Vt();
        const l = yr(n), a = bt(t, n, e, i);
        return l(), Ft(), a;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  const Ut = (e) => (t, n = Fe) => {
    (!$n || e === "sp") && fo(e, (...r) => t(...r), n);
  }, Gu = Ut("bm"), ct = Ut("m"), Ku = Ut("bu"), aa = Ut("u"), bs = Ut("bum"), ho = Ut("um"), qu = Ut("sp"), Yu = Ut("rtg"), Ju = Ut("rtc");
  function Qu(e, t = Fe) {
    fo("ec", e, t);
  }
  const Xu = "components";
  ys = function(e, t) {
    return ef(Xu, e, true, t) || e;
  };
  const Zu = Symbol.for("v-ndc");
  function ef(e, t, n = true, r = false) {
    const o = Be || Fe;
    if (o) {
      const s = o.type;
      {
        const l = $f(s, false);
        if (l && (l === t || l === rt(t) || l === gr(rt(t)))) return s;
      }
      const i = si(o[e] || s[e], t) || si(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function si(e, t) {
    return e && (e[t] || e[rt(t)] || e[gr(rt(t))]);
  }
  function Bt(e, t, n, r) {
    let o;
    const s = n, i = se(e);
    if (i || Ie(e)) {
      const l = i && Zt(e);
      let a = false, u = false;
      l && (a = !at(e), u = jt(e), e = lo(e)), o = new Array(e.length);
      for (let c = 0, f = e.length; c < f; c++) o[c] = t(a ? u ? Mn(_t(e[c])) : _t(e[c]) : e[c], c, void 0, s);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, s);
    } else if (pe(e)) if (e[Symbol.iterator]) o = Array.from(e, (l, a) => t(l, a, void 0, s));
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        o[a] = t(e[c], c, a, s);
      }
    }
    else o = [];
    return o;
  }
  function tf(e, t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (se(r)) for (let o = 0; o < r.length; o++) e[r[o].name] = r[o].fn;
      else r && (e[r.name] = r.key ? (...o) => {
        const s = r.fn(...o);
        return s && (s.key = r.key), s;
      } : r.fn);
    }
    return e;
  }
  function Te(e, t, n = {}, r, o) {
    if (Be.ce || Be.parent && mn(Be.parent) && Be.parent.ce) {
      const u = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), V(), Pe(_e, null, [
        le("slot", n, r && r())
      ], u ? -2 : 64);
    }
    let s = e[t];
    s && s._c && (s._d = false), V();
    const i = s && ca(s(n)), l = n.key || i && i.key, a = Pe(_e, {
      key: (l && !vt(l) ? l : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [
      a.scopeId + "-s"
    ]), s && s._c && (s._d = true), a;
  }
  function ca(e) {
    return e.some((t) => ur(t) ? !(t.type === Ve || t.type === _e && !ca(t.children)) : true) ? e : null;
  }
  const qo = (e) => e ? Ia(e) ? mo(e) : qo(e.parent) : null, er = De(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qo(e.parent),
    $root: (e) => qo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Un.bind(e.proxy)),
    $watch: (e) => ku.bind(e)
  }), Oo = (e, t) => e !== ye && !e.__isScriptSetup && ge(e, t), nf = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
      if (t[0] !== "$") {
        const h = i[t];
        if (h !== void 0) switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
        else {
          if (Oo(r, t)) return i[t] = 1, r[t];
          if (o !== ye && ge(o, t)) return i[t] = 2, o[t];
          if (ge(s, t)) return i[t] = 3, s[t];
          if (n !== ye && ge(n, t)) return i[t] = 4, n[t];
          Yo && (i[t] = 0);
        }
      }
      const u = er[t];
      let c, f;
      if (u) return t === "$attrs" && Ke(e.attrs, "get", ""), u(e);
      if ((c = l.__cssModules) && (c = c[t])) return c;
      if (n !== ye && ge(n, t)) return i[t] = 4, n[t];
      if (f = a.config.globalProperties, ge(f, t)) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Oo(o, t) ? (o[t] = n, true) : r !== ye && ge(r, t) ? (r[t] = n, true) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: i } }, l) {
      let a;
      return !!(n[l] || e !== ye && l[0] !== "$" && ge(e, l) || Oo(t, l) || ge(s, l) || ge(r, l) || ge(er, l) || ge(o.config.globalProperties, l) || (a = i.__cssModules) && a[l]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function ii(e) {
    return se(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  let Yo = true;
  function rf(e) {
    const t = fa(e), n = e.proxy, r = e.ctx;
    Yo = false, t.beforeCreate && li(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: l, provide: a, inject: u, created: c, beforeMount: f, mounted: h, beforeUpdate: p, updated: y, activated: _, deactivated: w, beforeDestroy: R, beforeUnmount: S, destroyed: g, unmounted: v, render: $, renderTracked: Y, renderTriggered: H, errorCaptured: T, serverPrefetch: L, expose: k, inheritAttrs: W, components: E, directives: D, filters: M } = t;
    if (u && of(u, r, null), i) for (const Z in i) {
      const U = i[Z];
      ie(U) && (r[Z] = U.bind(n));
    }
    if (o) {
      const Z = o.call(n, n);
      pe(Z) && (e.data = _n(Z));
    }
    if (Yo = true, s) for (const Z in s) {
      const U = s[Z], ce = ie(U) ? U.bind(n, n) : ie(U.get) ? U.get.bind(n, n) : xt, Ne = !ie(U) && ie(U.set) ? U.set.bind(n) : xt, He = N({
        get: ce,
        set: Ne
      });
      Object.defineProperty(r, Z, {
        enumerable: true,
        configurable: true,
        get: () => He.value,
        set: (We) => He.value = We
      });
    }
    if (l) for (const Z in l) ua(l[Z], r, n, Z);
    if (a) {
      const Z = ie(a) ? a.call(n) : a;
      Reflect.ownKeys(Z).forEach((U) => {
        en(U, Z[U]);
      });
    }
    c && li(c, e, "c");
    function x(Z, U) {
      se(U) ? U.forEach((ce) => Z(ce.bind(n))) : U && Z(U.bind(n));
    }
    if (x(Gu, f), x(ct, h), x(Ku, p), x(aa, y), x(Uu, _), x(Wu, w), x(Qu, T), x(Ju, Y), x(Yu, H), x(bs, S), x(ho, v), x(qu, L), se(k)) if (k.length) {
      const Z = e.exposed || (e.exposed = {});
      k.forEach((U) => {
        Object.defineProperty(Z, U, {
          get: () => n[U],
          set: (ce) => n[U] = ce,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    $ && e.render === xt && (e.render = $), W != null && (e.inheritAttrs = W), E && (e.components = E), D && (e.directives = D), L && _s(e);
  }
  function of(e, t, n = xt) {
    se(e) && (e = Jo(e));
    for (const r in e) {
      const o = e[r];
      let s;
      pe(o) ? "default" in o ? s = Ue(o.from || r, o.default, true) : s = Ue(o.from || r) : s = Ue(o), ke(s) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (i) => s.value = i
      }) : t[r] = s;
    }
  }
  function li(e, t, n) {
    bt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function ua(e, t, n, r) {
    let o = r.includes(".") ? Zl(n, r) : () => n[r];
    if (Ie(e)) {
      const s = t[e];
      ie(s) && Ye(o, s);
    } else if (ie(e)) Ye(o, e.bind(n));
    else if (pe(e)) if (se(e)) e.forEach((s) => ua(s, t, n, r));
    else {
      const s = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      ie(s) && Ye(o, s, e);
    }
  }
  function fa(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
    let a;
    return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach((u) => Jr(a, u, i, true)), Jr(a, t, i)), pe(t) && s.set(t, a), a;
  }
  function Jr(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && Jr(e, s, n, true), o && o.forEach((i) => Jr(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const l = sf[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
    return e;
  }
  const sf = {
    data: ai,
    props: ci,
    emits: ci,
    methods: Qn,
    computed: Qn,
    beforeCreate: Je,
    created: Je,
    beforeMount: Je,
    mounted: Je,
    beforeUpdate: Je,
    updated: Je,
    beforeDestroy: Je,
    beforeUnmount: Je,
    destroyed: Je,
    unmounted: Je,
    activated: Je,
    deactivated: Je,
    errorCaptured: Je,
    serverPrefetch: Je,
    components: Qn,
    directives: Qn,
    watch: af,
    provide: ai,
    inject: lf
  };
  function ai(e, t) {
    return t ? e ? function() {
      return De(ie(e) ? e.call(this, this) : e, ie(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function lf(e, t) {
    return Qn(Jo(e), Jo(t));
  }
  function Jo(e) {
    if (se(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Je(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Qn(e, t) {
    return e ? De(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function ci(e, t) {
    return e ? se(e) && se(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : De(/* @__PURE__ */ Object.create(null), ii(e), ii(t ?? {})) : t;
  }
  function af(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = De(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = Je(e[r], t[r]);
    return n;
  }
  function da() {
    return {
      app: null,
      config: {
        isNativeTag: _l,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let cf = 0;
  function uf(e, t) {
    return function(r, o = null) {
      ie(r) || (r = De({}, r)), o != null && !pe(o) && (o = null);
      const s = da(), i = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const u = s.app = {
        _uid: cf++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Vf,
        get config() {
          return s.config;
        },
        set config(c) {
        },
        use(c, ...f) {
          return i.has(c) || (c && ie(c.install) ? (i.add(c), c.install(u, ...f)) : ie(c) && (i.add(c), c(u, ...f))), u;
        },
        mixin(c) {
          return s.mixins.includes(c) || s.mixins.push(c), u;
        },
        component(c, f) {
          return f ? (s.components[c] = f, u) : s.components[c];
        },
        directive(c, f) {
          return f ? (s.directives[c] = f, u) : s.directives[c];
        },
        mount(c, f, h) {
          if (!a) {
            const p = u._ceVNode || le(r, o);
            return p.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), f && t ? t(p, c) : e(p, c, h), a = true, u._container = c, c.__vue_app__ = u, mo(p.component);
          }
        },
        onUnmount(c) {
          l.push(c);
        },
        unmount() {
          a && (bt(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return s.provides[c] = f, u;
        },
        runWithContext(c) {
          const f = gn;
          gn = u;
          try {
            return c();
          } finally {
            gn = f;
          }
        }
      };
      return u;
    };
  }
  let gn = null;
  const ff = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rt(t)}Modifiers`] || e[`${rn(t)}Modifiers`];
  function df(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ye;
    let o = n;
    const s = t.startsWith("update:"), i = s && ff(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => Ie(c) ? c.trim() : c)), i.number && (o = n.map(Vc)));
    let l, a = r[l = wo(t)] || r[l = wo(rt(t))];
    !a && s && (a = r[l = wo(rn(t))]), a && bt(a, e, 6, o);
    const u = r[l + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, bt(u, e, 6, o);
    }
  }
  const hf = /* @__PURE__ */ new WeakMap();
  function ha(e, t, n = false) {
    const r = n ? hf : t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, l = false;
    if (!ie(e)) {
      const a = (u) => {
        const c = ha(u, t, true);
        c && (l = true, De(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
    }
    return !s && !l ? (pe(e) && r.set(e, null), null) : (se(s) ? s.forEach((a) => i[a] = null) : De(i, s), pe(e) && r.set(e, i), i);
  }
  function po(e, t) {
    return !e || !pr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, rn(t)) || ge(e, t));
  }
  function Po(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: l, emit: a, render: u, renderCache: c, props: f, data: h, setupState: p, ctx: y, inheritAttrs: _ } = e, w = Kr(e);
    let R, S;
    try {
      if (n.shapeFlag & 4) {
        const v = o || r, $ = v;
        R = dt(u.call($, v, c, f, p, h, y)), S = l;
      } else {
        const v = t;
        R = dt(v.length > 1 ? v(f, {
          attrs: l,
          slots: i,
          emit: a
        }) : v(f, null)), S = t.props ? l : pf(l);
      }
    } catch (v) {
      nr.length = 0, _r(v, e, 1), R = le(Ve);
    }
    let g = R;
    if (S && _ !== false) {
      const v = Object.keys(S), { shapeFlag: $ } = g;
      v.length && $ & 7 && (s && v.some(cs) && (S = mf(S, s)), g = tn(g, S, false, true));
    }
    return n.dirs && (g = tn(g, null, false, true), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && yn(g, n.transition), R = g, Kr(w), R;
  }
  const pf = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || pr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, mf = (e, t) => {
    const n = {};
    for (const r in e) (!cs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function gf(e, t, n) {
    const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return r ? ui(r, i, u) : !!i;
      if (a & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          if (pa(i, r, h) && !po(u, h)) return true;
        }
      }
    } else return (o || l) && (!l || !l.$stable) ? true : r === i ? false : r ? i ? ui(r, i, u) : true : !!i;
    return false;
  }
  function ui(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (pa(t, e, s) && !po(n, s)) return true;
    }
    return false;
  }
  function pa(e, t, n) {
    const r = e[n], o = t[n];
    return n === "style" && pe(r) && pe(o) ? !fs(r, o) : r !== o;
  }
  function ma({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const ga = {}, va = () => Object.create(ga), _a = (e) => Object.getPrototypeOf(e) === ga;
  function vf(e, t, n, r = false) {
    const o = {}, s = va();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), ba(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Ul(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function _f(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, l = he(o), [a] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          if (po(e.emitsOptions, h)) continue;
          const p = t[h];
          if (a) if (ge(s, h)) p !== s[h] && (s[h] = p, u = true);
          else {
            const y = rt(h);
            o[y] = Qo(a, l, y, p, e, false);
          }
          else p !== s[h] && (s[h] = p, u = true);
        }
      }
    } else {
      ba(e, t, o, s) && (u = true);
      let c;
      for (const f in l) (!t || !ge(t, f) && ((c = rn(f)) === f || !ge(t, c))) && (a ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = Qo(a, l, f, void 0, e, true)) : delete o[f]);
      if (s !== l) for (const f in s) (!t || !ge(t, f)) && (delete s[f], u = true);
    }
    u && Dt(e.attrs, "set", "");
  }
  function ba(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, l;
    if (t) for (let a in t) {
      if (hn(a)) continue;
      const u = t[a];
      let c;
      o && ge(o, c = rt(a)) ? !s || !s.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : po(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, i = true);
    }
    if (s) {
      const a = he(n), u = l || ye;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = Qo(o, a, f, u[f], e, !ge(u, f));
      }
    }
    return i;
  }
  function Qo(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const l = ge(i, "default");
      if (l && r === void 0) {
        const a = i.default;
        if (i.type !== Function && !i.skipFactory && ie(a)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = yr(o);
            r = u[n] = a.call(null, t), c();
          }
        } else r = a;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !l ? r = false : i[1] && (r === "" || r === rn(n)) && (r = true));
    }
    return r;
  }
  const bf = /* @__PURE__ */ new WeakMap();
  function ya(e, t, n = false) {
    const r = n ? bf : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, l = [];
    let a = false;
    if (!ie(e)) {
      const c = (f) => {
        a = true;
        const [h, p] = ya(f, t, true);
        De(i, h), p && l.push(...p);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !a) return pe(e) && r.set(e, Rn), Rn;
    if (se(s)) for (let c = 0; c < s.length; c++) {
      const f = rt(s[c]);
      fi(f) && (i[f] = ye);
    }
    else if (s) for (const c in s) {
      const f = rt(c);
      if (fi(f)) {
        const h = s[c], p = i[f] = se(h) || ie(h) ? {
          type: h
        } : De({}, h), y = p.type;
        let _ = false, w = true;
        if (se(y)) for (let R = 0; R < y.length; ++R) {
          const S = y[R], g = ie(S) && S.name;
          if (g === "Boolean") {
            _ = true;
            break;
          } else g === "String" && (w = false);
        }
        else _ = ie(y) && y.name === "Boolean";
        p[0] = _, p[1] = w, (_ || ge(p, "default")) && l.push(f);
      }
    }
    const u = [
      i,
      l
    ];
    return pe(e) && r.set(e, u), u;
  }
  function fi(e) {
    return e[0] !== "$" && !hn(e);
  }
  const Es = (e) => e === "_" || e === "_ctx" || e === "$stable", ws = (e) => se(e) ? e.map(dt) : [
    dt(e)
  ], yf = (e, t, n) => {
    if (t._n) return t;
    const r = Le((...o) => ws(t(...o)), n);
    return r._c = false, r;
  }, Ea = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Es(o)) continue;
      const s = e[o];
      if (ie(s)) t[o] = yf(o, s, r);
      else if (s != null) {
        const i = ws(s);
        t[o] = () => i;
      }
    }
  }, wa = (e, t) => {
    const n = ws(t);
    e.slots.default = () => n;
  }, Sa = (e, t, n) => {
    for (const r in t) (n || !Es(r)) && (e[r] = t[r]);
  }, Ef = (e, t, n) => {
    const r = e.slots = va();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Sa(r, t, n), n && Sl(r, "_", o, true)) : Ea(t, r);
    } else t && wa(e, t);
  }, wf = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = ye;
    if (r.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? s = false : Sa(o, t, n) : (s = !t.$stable, Ea(t, o)), i = t;
    } else t && (wa(e, t), i = {
      default: 1
    });
    if (s) for (const l in o) !Es(l) && i[l] == null && delete o[l];
  }, nt = Ra;
  function Sf(e) {
    return Tf(e, Vu);
  }
  function Tf(e, t) {
    const n = oo();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: l, createComment: a, setText: u, setElementText: c, parentNode: f, nextSibling: h, setScopeId: p = xt, insertStaticContent: y } = e, _ = (d, m, b, O = null, A = null, P = null, G = void 0, B = null, F = !!m.dynamicChildren) => {
      if (d === m) return;
      d && !fn(d, m) && (O = C(d), We(d, A, P, true), d = null), m.patchFlag === -2 && (F = false, m.dynamicChildren = null);
      const { type: I, ref: oe, shapeFlag: q } = m;
      switch (I) {
        case vn:
          w(d, m, b, O);
          break;
        case Ve:
          R(d, m, b, O);
          break;
        case tr:
          d == null && S(m, b, O, G);
          break;
        case _e:
          E(d, m, b, O, A, P, G, B, F);
          break;
        default:
          q & 1 ? $(d, m, b, O, A, P, G, B, F) : q & 6 ? D(d, m, b, O, A, P, G, B, F) : (q & 64 || q & 128) && I.process(d, m, b, O, A, P, G, B, F, te);
      }
      oe != null && A ? In(oe, d && d.ref, P, m || d, !m) : oe == null && d && d.ref != null && In(d.ref, null, P, d, true);
    }, w = (d, m, b, O) => {
      if (d == null) r(m.el = l(m.children), b, O);
      else {
        const A = m.el = d.el;
        m.children !== d.children && u(A, m.children);
      }
    }, R = (d, m, b, O) => {
      d == null ? r(m.el = a(m.children || ""), b, O) : m.el = d.el;
    }, S = (d, m, b, O) => {
      [d.el, d.anchor] = y(d.children, m, b, O, d.el, d.anchor);
    }, g = ({ el: d, anchor: m }, b, O) => {
      let A;
      for (; d && d !== m; ) A = h(d), r(d, b, O), d = A;
      r(m, b, O);
    }, v = ({ el: d, anchor: m }) => {
      let b;
      for (; d && d !== m; ) b = h(d), o(d), d = b;
      o(m);
    }, $ = (d, m, b, O, A, P, G, B, F) => {
      if (m.type === "svg" ? G = "svg" : m.type === "math" && (G = "mathml"), d == null) Y(m, b, O, A, P, G, B, F);
      else {
        const I = d.el && d.el._isVueCE ? d.el : null;
        try {
          I && I._beginPatch(), L(d, m, A, P, G, B, F);
        } finally {
          I && I._endPatch();
        }
      }
    }, Y = (d, m, b, O, A, P, G, B) => {
      let F, I;
      const { props: oe, shapeFlag: q, transition: ne, dirs: ae } = d;
      if (F = d.el = i(d.type, P, oe && oe.is, oe), q & 8 ? c(F, d.children) : q & 16 && T(d.children, F, null, O, A, Io(d, P), G, B), ae && At(d, null, O, "created"), H(F, d, d.scopeId, G, O), oe) {
        for (const we in oe) we !== "value" && !hn(we) && s(F, we, null, oe[we], P, O);
        "value" in oe && s(F, "value", null, oe.value, P), (I = oe.onVnodeBeforeMount) && ft(I, O, d);
      }
      ae && At(d, null, O, "beforeMount");
      const de = Ta(A, ne);
      de && ne.beforeEnter(F), r(F, m, b), ((I = oe && oe.onVnodeMounted) || de || ae) && nt(() => {
        I && ft(I, O, d), de && ne.enter(F), ae && At(d, null, O, "mounted");
      }, A);
    }, H = (d, m, b, O, A) => {
      if (b && p(d, b), O) for (let P = 0; P < O.length; P++) p(d, O[P]);
      if (A) {
        let P = A.subTree;
        if (m === P || La(P.type) && (P.ssContent === m || P.ssFallback === m)) {
          const G = A.vnode;
          H(d, G, G.scopeId, G.slotScopeIds, A.parent);
        }
      }
    }, T = (d, m, b, O, A, P, G, B, F = 0) => {
      for (let I = F; I < d.length; I++) {
        const oe = d[I] = B ? Nt(d[I]) : dt(d[I]);
        _(null, oe, m, b, O, A, P, G, B);
      }
    }, L = (d, m, b, O, A, P, G) => {
      const B = m.el = d.el;
      let { patchFlag: F, dynamicChildren: I, dirs: oe } = m;
      F |= d.patchFlag & 16;
      const q = d.props || ye, ne = m.props || ye;
      let ae;
      if (b && sn(b, false), (ae = ne.onVnodeBeforeUpdate) && ft(ae, b, m, d), oe && At(m, d, b, "beforeUpdate"), b && sn(b, true), (q.innerHTML && ne.innerHTML == null || q.textContent && ne.textContent == null) && c(B, ""), I ? k(d.dynamicChildren, I, B, b, O, Io(m, A), P) : G || U(d, m, B, null, b, O, Io(m, A), P, false), F > 0) {
        if (F & 16) W(B, q, ne, b, A);
        else if (F & 2 && q.class !== ne.class && s(B, "class", null, ne.class, A), F & 4 && s(B, "style", q.style, ne.style, A), F & 8) {
          const de = m.dynamicProps;
          for (let we = 0; we < de.length; we++) {
            const ve = de[we], tt = q[ve], ze = ne[ve];
            (ze !== tt || ve === "value") && s(B, ve, tt, ze, A, b);
          }
        }
        F & 1 && d.children !== m.children && c(B, m.children);
      } else !G && I == null && W(B, q, ne, b, A);
      ((ae = ne.onVnodeUpdated) || oe) && nt(() => {
        ae && ft(ae, b, m, d), oe && At(m, d, b, "updated");
      }, O);
    }, k = (d, m, b, O, A, P, G) => {
      for (let B = 0; B < m.length; B++) {
        const F = d[B], I = m[B], oe = F.el && (F.type === _e || !fn(F, I) || F.shapeFlag & 198) ? f(F.el) : b;
        _(F, I, oe, null, O, A, P, G, true);
      }
    }, W = (d, m, b, O, A) => {
      if (m !== b) {
        if (m !== ye) for (const P in m) !hn(P) && !(P in b) && s(d, P, m[P], null, A, O);
        for (const P in b) {
          if (hn(P)) continue;
          const G = b[P], B = m[P];
          G !== B && P !== "value" && s(d, P, B, G, A, O);
        }
        "value" in b && s(d, "value", m.value, b.value, A);
      }
    }, E = (d, m, b, O, A, P, G, B, F) => {
      const I = m.el = d ? d.el : l(""), oe = m.anchor = d ? d.anchor : l("");
      let { patchFlag: q, dynamicChildren: ne, slotScopeIds: ae } = m;
      ae && (B = B ? B.concat(ae) : ae), d == null ? (r(I, b, O), r(oe, b, O), T(m.children || [], b, oe, A, P, G, B, F)) : q > 0 && q & 64 && ne && d.dynamicChildren && d.dynamicChildren.length === ne.length ? (k(d.dynamicChildren, ne, b, A, P, G, B), (m.key != null || A && m === A.subTree) && Aa(d, m, true)) : U(d, m, b, oe, A, P, G, B, F);
    }, D = (d, m, b, O, A, P, G, B, F) => {
      m.slotScopeIds = B, d == null ? m.shapeFlag & 512 ? A.ctx.activate(m, b, O, G, F) : M(m, b, O, A, P, G, F) : j(d, m, F);
    }, M = (d, m, b, O, A, P, G) => {
      const B = d.component = If(d, O, A);
      if (br(d) && (B.ctx.renderer = te), kf(B, false, G), B.asyncDep) {
        if (A && A.registerDep(B, x, G), !d.el) {
          const F = B.subTree = le(Ve);
          R(null, F, m, b), d.placeholder = F.el;
        }
      } else x(B, d, m, b, A, P, G);
    }, j = (d, m, b) => {
      const O = m.component = d.component;
      if (gf(d, m, b)) if (O.asyncDep && !O.asyncResolved) {
        Z(O, m, b);
        return;
      } else O.next = m, O.update();
      else m.el = d.el, O.vnode = m;
    }, x = (d, m, b, O, A, P, G) => {
      const B = () => {
        if (d.isMounted) {
          let { next: q, bu: ne, u: ae, parent: de, vnode: we } = d;
          {
            const st = Ca(d);
            if (st) {
              q && (q.el = we.el, Z(d, q, G)), st.asyncDep.then(() => {
                nt(() => {
                  d.isUnmounted || I();
                }, A);
              });
              return;
            }
          }
          let ve = q, tt;
          sn(d, false), q ? (q.el = we.el, Z(d, q, G)) : q = we, ne && So(ne), (tt = q.props && q.props.onVnodeBeforeUpdate) && ft(tt, de, q, we), sn(d, true);
          const ze = Po(d), pt = d.subTree;
          d.subTree = ze, _(pt, ze, f(pt.el), C(pt), d, A, P), q.el = ze.el, ve === null && ma(d, ze.el), ae && nt(ae, A), (tt = q.props && q.props.onVnodeUpdated) && nt(() => ft(tt, de, q, we), A);
        } else {
          let q;
          const { el: ne, props: ae } = m, { bm: de, m: we, parent: ve, root: tt, type: ze } = d, pt = mn(m);
          if (sn(d, false), de && So(de), !pt && (q = ae && ae.onVnodeBeforeMount) && ft(q, ve, m), sn(d, true), ne && be) {
            const st = () => {
              d.subTree = Po(d), be(ne, d.subTree, d, A, null);
            };
            pt && ze.__asyncHydrate ? ze.__asyncHydrate(ne, d, st) : st();
          } else {
            tt.ce && tt.ce._hasShadowRoot() && tt.ce._injectChildStyle(ze);
            const st = d.subTree = Po(d);
            _(null, st, b, O, d, A, P), m.el = st.el;
          }
          if (we && nt(we, A), !pt && (q = ae && ae.onVnodeMounted)) {
            const st = m;
            nt(() => ft(q, ve, st), A);
          }
          (m.shapeFlag & 256 || ve && mn(ve.vnode) && ve.vnode.shapeFlag & 256) && d.a && nt(d.a, A), d.isMounted = true, m = b = O = null;
        }
      };
      d.scope.on();
      const F = d.effect = new xl(B);
      d.scope.off();
      const I = d.update = F.run.bind(F), oe = d.job = F.runIfDirty.bind(F);
      oe.i = d, oe.id = d.uid, F.scheduler = () => ms(oe), sn(d, true), I();
    }, Z = (d, m, b) => {
      m.component = d;
      const O = d.vnode.props;
      d.vnode = m, d.next = null, _f(d, m.props, O, b), wf(d, m.children, b), Vt(), Xs(d), Ft();
    }, U = (d, m, b, O, A, P, G, B, F = false) => {
      const I = d && d.children, oe = d ? d.shapeFlag : 0, q = m.children, { patchFlag: ne, shapeFlag: ae } = m;
      if (ne > 0) {
        if (ne & 128) {
          Ne(I, q, b, O, A, P, G, B, F);
          return;
        } else if (ne & 256) {
          ce(I, q, b, O, A, P, G, B, F);
          return;
        }
      }
      ae & 8 ? (oe & 16 && et(I, A, P), q !== I && c(b, q)) : oe & 16 ? ae & 16 ? Ne(I, q, b, O, A, P, G, B, F) : et(I, A, P, true) : (oe & 8 && c(b, ""), ae & 16 && T(q, b, O, A, P, G, B, F));
    }, ce = (d, m, b, O, A, P, G, B, F) => {
      d = d || Rn, m = m || Rn;
      const I = d.length, oe = m.length, q = Math.min(I, oe);
      let ne;
      for (ne = 0; ne < q; ne++) {
        const ae = m[ne] = F ? Nt(m[ne]) : dt(m[ne]);
        _(d[ne], ae, b, null, A, P, G, B, F);
      }
      I > oe ? et(d, A, P, true, false, q) : T(m, b, O, A, P, G, B, F, q);
    }, Ne = (d, m, b, O, A, P, G, B, F) => {
      let I = 0;
      const oe = m.length;
      let q = d.length - 1, ne = oe - 1;
      for (; I <= q && I <= ne; ) {
        const ae = d[I], de = m[I] = F ? Nt(m[I]) : dt(m[I]);
        if (fn(ae, de)) _(ae, de, b, null, A, P, G, B, F);
        else break;
        I++;
      }
      for (; I <= q && I <= ne; ) {
        const ae = d[q], de = m[ne] = F ? Nt(m[ne]) : dt(m[ne]);
        if (fn(ae, de)) _(ae, de, b, null, A, P, G, B, F);
        else break;
        q--, ne--;
      }
      if (I > q) {
        if (I <= ne) {
          const ae = ne + 1, de = ae < oe ? m[ae].el : O;
          for (; I <= ne; ) _(null, m[I] = F ? Nt(m[I]) : dt(m[I]), b, de, A, P, G, B, F), I++;
        }
      } else if (I > ne) for (; I <= q; ) We(d[I], A, P, true), I++;
      else {
        const ae = I, de = I, we = /* @__PURE__ */ new Map();
        for (I = de; I <= ne; I++) {
          const it = m[I] = F ? Nt(m[I]) : dt(m[I]);
          it.key != null && we.set(it.key, I);
        }
        let ve, tt = 0;
        const ze = ne - de + 1;
        let pt = false, st = 0;
        const zn = new Array(ze);
        for (I = 0; I < ze; I++) zn[I] = 0;
        for (I = ae; I <= q; I++) {
          const it = d[I];
          if (tt >= ze) {
            We(it, A, P, true);
            continue;
          }
          let wt;
          if (it.key != null) wt = we.get(it.key);
          else for (ve = de; ve <= ne; ve++) if (zn[ve - de] === 0 && fn(it, m[ve])) {
            wt = ve;
            break;
          }
          wt === void 0 ? We(it, A, P, true) : (zn[wt - de] = I + 1, wt >= st ? st = wt : pt = true, _(it, m[wt], b, null, A, P, G, B, F), tt++);
        }
        const zs = pt ? Af(zn) : Rn;
        for (ve = zs.length - 1, I = ze - 1; I >= 0; I--) {
          const it = de + I, wt = m[it], Gs = m[it + 1], Ks = it + 1 < oe ? Gs.el || xa(Gs) : O;
          zn[I] === 0 ? _(null, wt, b, Ks, A, P, G, B, F) : pt && (ve < 0 || I !== zs[ve] ? He(wt, b, Ks, 2) : ve--);
        }
      }
    }, He = (d, m, b, O, A = null) => {
      const { el: P, type: G, transition: B, children: F, shapeFlag: I } = d;
      if (I & 6) {
        He(d.component.subTree, m, b, O);
        return;
      }
      if (I & 128) {
        d.suspense.move(m, b, O);
        return;
      }
      if (I & 64) {
        G.move(d, m, b, te);
        return;
      }
      if (G === _e) {
        r(P, m, b);
        for (let q = 0; q < F.length; q++) He(F[q], m, b, O);
        r(d.anchor, m, b);
        return;
      }
      if (G === tr) {
        g(d, m, b);
        return;
      }
      if (O !== 2 && I & 1 && B) if (O === 0) B.beforeEnter(P), r(P, m, b), nt(() => B.enter(P), A);
      else {
        const { leave: q, delayLeave: ne, afterLeave: ae } = B, de = () => {
          d.ctx.isUnmounted ? o(P) : r(P, m, b);
        }, we = () => {
          P._isLeaving && P[Ct](true), q(P, () => {
            de(), ae && ae();
          });
        };
        ne ? ne(P, de, we) : we();
      }
      else r(P, m, b);
    }, We = (d, m, b, O = false, A = false) => {
      const { type: P, props: G, ref: B, children: F, dynamicChildren: I, shapeFlag: oe, patchFlag: q, dirs: ne, cacheIndex: ae } = d;
      if (q === -2 && (A = false), B != null && (Vt(), In(B, null, b, d, true), Ft()), ae != null && (m.renderCache[ae] = void 0), oe & 256) {
        m.ctx.deactivate(d);
        return;
      }
      const de = oe & 1 && ne, we = !mn(d);
      let ve;
      if (we && (ve = G && G.onVnodeBeforeUnmount) && ft(ve, m, d), oe & 6) ot(d.component, b, O);
      else {
        if (oe & 128) {
          d.suspense.unmount(b, O);
          return;
        }
        de && At(d, null, m, "beforeUnmount"), oe & 64 ? d.type.remove(d, m, b, te, O) : I && !I.hasOnce && (P !== _e || q > 0 && q & 64) ? et(I, m, b, false, true) : (P === _e && q & 384 || !A && oe & 16) && et(F, m, b), O && zt(d);
      }
      (we && (ve = G && G.onVnodeUnmounted) || de) && nt(() => {
        ve && ft(ve, m, d), de && At(d, null, m, "unmounted");
      }, b);
    }, zt = (d) => {
      const { type: m, el: b, anchor: O, transition: A } = d;
      if (m === _e) {
        Gt(b, O);
        return;
      }
      if (m === tr) {
        v(d);
        return;
      }
      const P = () => {
        o(b), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (d.shapeFlag & 1 && A && !A.persisted) {
        const { leave: G, delayLeave: B } = A, F = () => G(b, P);
        B ? B(d.el, P, F) : F();
      } else P();
    }, Gt = (d, m) => {
      let b;
      for (; d !== m; ) b = h(d), o(d), d = b;
      o(m);
    }, ot = (d, m, b) => {
      const { bum: O, scope: A, job: P, subTree: G, um: B, m: F, a: I } = d;
      di(F), di(I), O && So(O), A.stop(), P && (P.flags |= 8, We(G, d, m, b)), B && nt(B, m), nt(() => {
        d.isUnmounted = true;
      }, m);
    }, et = (d, m, b, O = false, A = false, P = 0) => {
      for (let G = P; G < d.length; G++) We(d[G], m, b, O, A);
    }, C = (d) => {
      if (d.shapeFlag & 6) return C(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const m = h(d.anchor || d.el), b = m && m[Nu];
      return b ? h(b) : m;
    };
    let K = false;
    const z = (d, m, b) => {
      let O;
      d == null ? m._vnode && (We(m._vnode, null, null, true), O = m._vnode.component) : _(m._vnode || null, d, m, null, null, null, b), m._vnode = d, K || (K = true, Xs(O), Gr(), K = false);
    }, te = {
      p: _,
      um: We,
      m: He,
      r: zt,
      mt: M,
      mc: T,
      pc: U,
      pbc: k,
      n: C,
      o: e
    };
    let ue, be;
    return t && ([ue, be] = t(te)), {
      render: z,
      hydrate: ue,
      createApp: uf(z, ue)
    };
  }
  function Io({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function sn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Ta(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Aa(e, t, n = false) {
    const r = e.children, o = t.children;
    if (se(r) && se(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = Nt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && Aa(i, l)), l.type === vn && (l.patchFlag === -1 && (l = o[s] = Nt(l)), l.el = i.el), l.type === Ve && !l.el && (l.el = i.el);
    }
  }
  function Af(e) {
    const t = e.slice(), n = [
      0
    ];
    let r, o, s, i, l;
    const a = e.length;
    for (r = 0; r < a; r++) {
      const u = e[r];
      if (u !== 0) {
        if (o = n[n.length - 1], e[o] < u) {
          t[r] = o, n.push(r);
          continue;
        }
        for (s = 0, i = n.length - 1; s < i; ) l = s + i >> 1, e[n[l]] < u ? s = l + 1 : i = l;
        u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
      }
    }
    for (s = n.length, i = n[s - 1]; s-- > 0; ) n[s] = i, i = t[i];
    return n;
  }
  function Ca(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ca(t);
  }
  function di(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function xa(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? xa(t.subTree) : null;
  }
  const La = (e) => e.__isSuspense;
  function Ra(e, t) {
    t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : Ru(e);
  }
  const _e = Symbol.for("v-fgt"), vn = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), tr = Symbol.for("v-stc"), nr = [];
  let lt = null;
  V = function(e = false) {
    nr.push(lt = e ? null : []);
  };
  function Cf() {
    nr.pop(), lt = nr[nr.length - 1] || null;
  }
  let cr = 1;
  function Qr(e, t = false) {
    cr += e, e < 0 && lt && t && (lt.hasOnce = true);
  }
  function Oa(e) {
    return e.dynamicChildren = cr > 0 ? lt || Rn : null, Cf(), cr > 0 && lt && lt.push(e), e;
  }
  X = function(e, t, n, r, o, s) {
    return Oa(re(e, t, n, r, o, s, true));
  };
  function Pe(e, t, n, r, o) {
    return Oa(le(e, t, n, r, o, true));
  }
  function ur(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function fn(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Pa = ({ key: e }) => e ?? null, Vr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || ke(e) || ie(e) ? {
    i: Be,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  re = function(e, t = null, n = null, r = 0, o = null, s = e === _e ? 0 : 1, i = false, l = false) {
    const a = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Pa(t),
      ref: t && Vr(t),
      scopeId: Ql,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: s,
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Be
    };
    return l ? (Ss(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ie(n) ? 8 : 16), cr > 0 && !i && lt && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && lt.push(a), a;
  };
  le = xf;
  function xf(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === Zu) && (e = Ve), ur(e)) {
      const l = tn(e, t, true);
      return n && Ss(l, n), cr > 0 && !s && lt && (l.shapeFlag & 6 ? lt[lt.indexOf(e)] = l : lt.push(l)), l.patchFlag = -2, l;
    }
    if (Hf(e) && (e = e.__vccOpts), t) {
      t = Fr(t);
      let { class: l, style: a } = t;
      l && !Ie(l) && (t.class = je(l)), pe(a) && (uo(a) && !se(a) && (a = De({}, a)), t.style = Bn(a));
    }
    const i = Ie(e) ? 1 : La(e) ? 128 : ea(e) ? 64 : pe(e) ? 4 : ie(e) ? 2 : 0;
    return re(e, t, n, r, o, i, s, true);
  }
  function Fr(e) {
    return e ? uo(e) || _a(e) ? De({}, e) : e : null;
  }
  function tn(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, u = t ? Rf(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && Pa(u),
      ref: t && t.ref ? n && s ? se(s) ? s.concat(Vr(t)) : [
        s,
        Vr(t)
      ] : Vr(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && tn(e.ssContent),
      ssFallback: e.ssFallback && tn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return a && r && yn(c, a.clone(c)), c;
  }
  nn = function(e = " ", t = 0) {
    return le(vn, null, e, t);
  };
  Lf = function(e, t) {
    const n = le(tr, null, e);
    return n.staticCount = t, n;
  };
  function Ce(e = "", t = false) {
    return t ? (V(), Pe(Ve, null, e)) : le(Ve, null, e);
  }
  function dt(e) {
    return e == null || typeof e == "boolean" ? le(Ve) : se(e) ? le(_e, null, e.slice()) : ur(e) ? Nt(e) : le(vn, null, String(e));
  }
  function Nt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : tn(e);
  }
  function Ss(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (se(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), Ss(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !_a(t) ? t._ctx = Be : o === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else ie(t) ? (t = {
      default: t,
      _ctx: Be
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      nn(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function Rf(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = je([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = Bn([
        t.style,
        r.style
      ]);
      else if (pr(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(se(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  }
  function ft(e, t, n, r = null) {
    bt(e, t, 7, [
      n,
      r
    ]);
  }
  const Of = da();
  let Pf = 0;
  function If(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Of, s = {
      uid: Pf++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new qc(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ya(r, o),
      emitsOptions: ha(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ye,
      inheritAttrs: r.inheritAttrs,
      ctx: ye,
      data: ye,
      props: ye,
      attrs: ye,
      slots: ye,
      refs: ye,
      setupState: ye,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return s.ctx = {
      _: s
    }, s.root = t ? t.root : s, s.emit = df.bind(null, s), e.ce && e.ce(s), s;
  }
  let Fe = null;
  const Et = () => Fe || Be;
  let Xr, Xo;
  {
    const e = oo(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    Xr = t("__VUE_INSTANCE_SETTERS__", (n) => Fe = n), Xo = t("__VUE_SSR_SETTERS__", (n) => $n = n);
  }
  const yr = (e) => {
    const t = Fe;
    return Xr(e), e.scope.on(), () => {
      e.scope.off(), Xr(t);
    };
  }, hi = () => {
    Fe && Fe.scope.off(), Xr(null);
  };
  function Ia(e) {
    return e.vnode.shapeFlag & 4;
  }
  let $n = false;
  function kf(e, t = false, n = false) {
    t && Xo(t);
    const { props: r, children: o } = e.vnode, s = Ia(e);
    vf(e, r, s, t), Ef(e, o, n || t);
    const i = s ? Nf(e, t) : void 0;
    return t && Xo(false), i;
  }
  function Nf(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nf);
    const { setup: r } = n;
    if (r) {
      Vt();
      const o = e.setupContext = r.length > 1 ? Mf(e) : null, s = yr(e), i = vr(r, e, 0, [
        e.props,
        o
      ]), l = yl(i);
      if (Ft(), s(), (l || e.sp) && !mn(e) && _s(e), l) {
        if (i.then(hi, hi), t) return i.then((a) => {
          pi(e, a);
        }).catch((a) => {
          _r(a, e, 0);
        });
        e.asyncDep = i;
      } else pi(e, i);
    } else ka(e);
  }
  function pi(e, t, n) {
    ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pe(t) && (e.setupState = zl(t)), ka(e);
  }
  function ka(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || xt);
    {
      const o = yr(e);
      Vt();
      try {
        rf(e);
      } finally {
        Ft(), o();
      }
    }
  }
  const Df = {
    get(e, t) {
      return Ke(e, "get", ""), e[t];
    }
  };
  function Mf(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Df),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function mo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zl(gu(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in er) return er[n](e);
      },
      has(t, n) {
        return n in t || n in er;
      }
    })) : e.proxy;
  }
  function $f(e, t = true) {
    return ie(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Hf(e) {
    return ie(e) && "__vccOpts" in e;
  }
  const N = (e, t) => Tu(e, t, $n);
  function J(e, t, n) {
    try {
      Qr(-1);
      const r = arguments.length;
      return r === 2 ? pe(t) && !se(t) ? ur(t) ? le(e, null, [
        t
      ]) : le(e, t) : le(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ur(n) && (n = [
        n
      ]), le(e, t, n));
    } finally {
      Qr(1);
    }
  }
  const Vf = "3.5.28";
  let Zo;
  const mi = typeof window < "u" && window.trustedTypes;
  if (mi) try {
    Zo = mi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  const Na = Zo ? (e) => Zo.createHTML(e) : (e) => e, Ff = "http://www.w3.org/2000/svg", jf = "http://www.w3.org/1998/Math/MathML", kt = typeof document < "u" ? document : null, gi = kt && kt.createElement("template"), Bf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? kt.createElementNS(Ff, e) : t === "mathml" ? kt.createElementNS(jf, e) : n ? kt.createElement(e, {
        is: n
      }) : kt.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => kt.createTextNode(e),
    createComment: (e) => kt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => kt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
      else {
        gi.innerHTML = Na(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const l = gi.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  }, Kt = "transition", qn = "animation", Hn = Symbol("_vtc"), Da = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [
      String,
      Number,
      Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  }, Ma = De({}, na, Da), Uf = (e) => (e.displayName = "Transition", e.props = Ma, e), go = Uf((e, { slots: t }) => J(Mu, $a(e), t)), ln = (e, t = []) => {
    se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  }, vi = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function $a(e) {
    const t = {};
    for (const E in e) E in Da || (t[E] = e[E]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: a = s, appearActiveClass: u = i, appearToClass: c = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, y = Wf(o), _ = y && y[0], w = y && y[1], { onBeforeEnter: R, onEnter: S, onEnterCancelled: g, onLeave: v, onLeaveCancelled: $, onBeforeAppear: Y = R, onAppear: H = S, onAppearCancelled: T = g } = t, L = (E, D, M, j) => {
      E._enterCancelled = j, qt(E, D ? c : l), qt(E, D ? u : i), M && M();
    }, k = (E, D) => {
      E._isLeaving = false, qt(E, f), qt(E, p), qt(E, h), D && D();
    }, W = (E) => (D, M) => {
      const j = E ? H : S, x = () => L(D, E, M);
      ln(j, [
        D,
        x
      ]), _i(() => {
        qt(D, E ? a : s), St(D, E ? c : l), vi(j) || bi(D, r, _, x);
      });
    };
    return De(t, {
      onBeforeEnter(E) {
        ln(R, [
          E
        ]), St(E, s), St(E, i);
      },
      onBeforeAppear(E) {
        ln(Y, [
          E
        ]), St(E, a), St(E, u);
      },
      onEnter: W(false),
      onAppear: W(true),
      onLeave(E, D) {
        E._isLeaving = true;
        const M = () => k(E, D);
        St(E, f), E._enterCancelled ? (St(E, h), es(E)) : (es(E), St(E, h)), _i(() => {
          E._isLeaving && (qt(E, f), St(E, p), vi(v) || bi(E, r, w, M));
        }), ln(v, [
          E,
          M
        ]);
      },
      onEnterCancelled(E) {
        L(E, false, void 0, true), ln(g, [
          E
        ]);
      },
      onAppearCancelled(E) {
        L(E, true, void 0, true), ln(T, [
          E
        ]);
      },
      onLeaveCancelled(E) {
        k(E), ln($, [
          E
        ]);
      }
    });
  }
  function Wf(e) {
    if (e == null) return null;
    if (pe(e)) return [
      ko(e.enter),
      ko(e.leave)
    ];
    {
      const t = ko(e);
      return [
        t,
        t
      ];
    }
  }
  function ko(e) {
    return Fc(e);
  }
  function St(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
  }
  function qt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Hn];
    n && (n.delete(t), n.size || (e[Hn] = void 0));
  }
  function _i(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let zf = 0;
  function bi(e, t, n, r) {
    const o = e._endId = ++zf, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: l, propCount: a } = Ha(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
      e.removeEventListener(u, h), s();
    }, h = (p) => {
      p.target === e && ++c >= a && f();
    };
    setTimeout(() => {
      c < a && f();
    }, l + 1), e.addEventListener(u, h);
  }
  function Ha(e, t) {
    const n = window.getComputedStyle(e), r = (y) => (n[y] || "").split(", "), o = r(`${Kt}Delay`), s = r(`${Kt}Duration`), i = yi(o, s), l = r(`${qn}Delay`), a = r(`${qn}Duration`), u = yi(l, a);
    let c = null, f = 0, h = 0;
    t === Kt ? i > 0 && (c = Kt, f = i, h = s.length) : t === qn ? u > 0 && (c = qn, f = u, h = a.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Kt : qn : null, h = c ? c === Kt ? s.length : a.length : 0);
    const p = c === Kt && /\b(?:transform|all)(?:,|$)/.test(r(`${Kt}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: h,
      hasTransform: p
    };
  }
  function yi(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => Ei(n) + Ei(e[r])));
  }
  function Ei(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function es(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function Gf(e, t, n) {
    const r = e[Hn];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  const Zr = Symbol("_vod"), Va = Symbol("_vsh"), eo = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[Zr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), Yn(e, true), r.enter(e)) : r.leave(e, () => {
        Yn(e, false);
      }) : Yn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Yn(e, t);
    }
  };
  function Yn(e, t) {
    e.style.display = t ? e[Zr] : "none", e[Va] = !t;
  }
  const Kf = Symbol(""), qf = /(?:^|;)\s*display\s*:/;
  function Yf(e, t, n) {
    const r = e.style, o = Ie(n);
    let s = false;
    if (n && !o) {
      if (t) if (Ie(t)) for (const i of t.split(";")) {
        const l = i.slice(0, i.indexOf(":")).trim();
        n[l] == null && jr(r, l, "");
      }
      else for (const i in t) n[i] == null && jr(r, i, "");
      for (const i in n) i === "display" && (s = true), jr(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[Kf];
        i && (n += ";" + i), r.cssText = n, s = qf.test(n);
      }
    } else t && e.removeAttribute("style");
    Zr in e && (e[Zr] = s ? r.display : "", e[Va] && (r.display = "none"));
  }
  const wi = /\s*!important$/;
  function jr(e, t, n) {
    if (se(n)) n.forEach((r) => jr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = Jf(e, t);
      wi.test(n) ? e.setProperty(rn(r), n.replace(wi, ""), "important") : e[r] = n;
    }
  }
  const Si = [
    "Webkit",
    "Moz",
    "ms"
  ], No = {};
  function Jf(e, t) {
    const n = No[t];
    if (n) return n;
    let r = rt(t);
    if (r !== "filter" && r in e) return No[t] = r;
    r = gr(r);
    for (let o = 0; o < Si.length; o++) {
      const s = Si[o] + r;
      if (s in e) return No[t] = s;
    }
    return t;
  }
  const Ti = "http://www.w3.org/1999/xlink";
  function Ai(e, t, n, r, o, s = Gc(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n) : n == null || s && !Tl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : vt(n) ? String(n) : n);
  }
  function Ci(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Na(n) : n);
      return;
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let i = false;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = Tl(n) : n == null && l === "string" ? (n = "", i = true) : l === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function Qf(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Xf(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const xi = Symbol("_vei");
  function Zf(e, t, n, r, o = null) {
    const s = e[xi] || (e[xi] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [l, a] = ed(t);
      if (r) {
        const u = s[t] = rd(r, o);
        Qf(e, l, u, a);
      } else i && (Xf(e, l, i, a), s[t] = void 0);
    }
  }
  const Li = /(?:Once|Passive|Capture)$/;
  function ed(e) {
    let t;
    if (Li.test(e)) {
      t = {};
      let r;
      for (; r = e.match(Li); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : rn(e.slice(2)),
      t
    ];
  }
  let Do = 0;
  const td = Promise.resolve(), nd = () => Do || (td.then(() => Do = 0), Do = Date.now());
  function rd(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      bt(od(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = nd(), n;
  }
  function od(e, t) {
    if (se(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const Ri = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sd = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? Gf(e, r, i) : t === "style" ? Yf(e, n, r) : pr(t) ? cs(t) || Zf(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : id(e, t, r, i)) ? (Ci(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ai(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ie(r)) ? Ci(e, rt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ai(e, t, r, i));
  };
  function id(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ri(t) && ie(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return Ri(t) && Ie(n) ? false : t in e;
  }
  const Fa = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), to = Symbol("_moveCb"), Oi = Symbol("_enterCb"), ld = (e) => (delete e.props.mode, e), ad = ld({
    name: "TransitionGroup",
    props: De({}, Ma, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Et(), r = ta();
      let o, s;
      return aa(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!hd(o[0].el, n.vnode.el, i)) {
          o = [];
          return;
        }
        o.forEach(ud), o.forEach(fd);
        const l = o.filter(dd);
        es(n.vnode.el), l.forEach((a) => {
          const u = a.el, c = u.style;
          St(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[to] = (h) => {
            h && h.target !== u || (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[to] = null, qt(u, i));
          };
          u.addEventListener("transitionend", f);
        }), o = [];
      }), () => {
        const i = he(e), l = $a(i);
        let a = i.tag || _e;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), yn(c, ar(c, l, r, n)), Fa.set(c, Ba(c.el)));
        }
        s = t.default ? vs(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && yn(c, ar(c, l, r, n));
        }
        return le(a, null, s);
      };
    }
  }), cd = ad;
  function ud(e) {
    const t = e.el;
    t[to] && t[to](), t[Oi] && t[Oi]();
  }
  function fd(e) {
    ja.set(e, Ba(e.el));
  }
  function dd(e) {
    const t = Fa.get(e), n = ja.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el, i = s.style, l = s.getBoundingClientRect();
      let a = 1, u = 1;
      return s.offsetWidth && (a = l.width / s.offsetWidth), s.offsetHeight && (u = l.height / s.offsetHeight), (!Number.isFinite(a) || a === 0) && (a = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(a - 1) < 0.01 && (a = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${r / a}px,${o / u}px)`, i.transitionDuration = "0s", e;
    }
  }
  function Ba(e) {
    const t = e.getBoundingClientRect();
    return {
      left: t.left,
      top: t.top
    };
  }
  function hd(e, t, n) {
    const r = e.cloneNode(), o = e[Hn];
    o && o.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
    }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = Ha(r);
    return s.removeChild(r), i;
  }
  const pd = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  }, md = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = ((o) => {
      if (!("key" in o)) return;
      const s = rn(o.key);
      if (t.some((i) => i === s || pd[i] === s)) return e(o);
    }));
  }, gd = De({
    patchProp: sd
  }, Bf);
  let Mo, Pi = false;
  function vd() {
    return Mo = Pi ? Mo : Sf(gd), Pi = true, Mo;
  }
  const _d = ((...e) => {
    const t = vd().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = yd(r);
      if (o) return n(o, true, bd(o));
    }, t;
  });
  function bd(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function yd(e) {
    return Ie(e) ? document.querySelector(e) : e;
  }
  var Er = (e) => /^[a-z][a-z0-9+.-]*:/.test(e) || e.startsWith("//"), Ed = /.md((\?|#).*)?$/, wd = (e, t = "/") => Er(e) || e.startsWith("/") && !e.startsWith(t) && !Ed.test(e), wr = (e) => /^(https?:)?\/\//.test(e), Ii = (e) => {
    if (!e || e.endsWith("/")) return e;
    let t = e.replace(/(^|\/)README.md$/i, "$1index.html");
    return t.endsWith(".md") ? t = `${t.substring(0, t.length - 3)}.html` : t.endsWith(".html") || (t = `${t}.html`), t.endsWith("/index.html") && (t = t.substring(0, t.length - 10)), t;
  }, Sd = "http://.", Td = (e, t) => {
    if (!e.startsWith("/") && t) {
      const n = t.slice(0, t.lastIndexOf("/"));
      return Ii(new URL(`${n}/${e}`, Sd).pathname);
    }
    return Ii(e);
  }, Ad = (e, t) => {
    const n = Object.keys(e).sort((r, o) => {
      const s = o.split("/").length - r.split("/").length;
      return s !== 0 ? s : o.length - r.length;
    });
    for (const r of n) if (t.startsWith(r)) return r;
    return "/";
  }, Cd = /(#|\?)/, Ua = (e) => {
    const [t, ...n] = e.split(Cd);
    return {
      pathname: t,
      hashAndQueries: n.join("")
    };
  }, xd = [
    "link",
    "meta",
    "script",
    "style",
    "noscript",
    "template"
  ], Ld = [
    "title",
    "base"
  ], Rd = ([e, t, n]) => Ld.includes(e) ? e : xd.includes(e) ? e === "meta" && t.name ? `${e}.${t.name}` : e === "template" && t.id ? `${e}.${t.id}` : JSON.stringify([
    e,
    Object.entries(t).map(([r, o]) => typeof o == "boolean" ? o ? [
      r,
      ""
    ] : null : [
      r,
      o
    ]).filter((r) => r != null).sort(([r], [o]) => r.localeCompare(o)),
    n
  ]) : null, Od = (e) => {
    const t = /* @__PURE__ */ new Set(), n = [];
    return e.forEach((r) => {
      const o = Rd(r);
      o && !t.has(o) && (t.add(o), n.push(r));
    }), n;
  }, Pd = (e) => e.endsWith("/") || e.endsWith(".html") ? e : `${e}/`, Wa = (e) => e.endsWith("/") ? e.slice(0, -1) : e, za = (e) => e.startsWith("/") ? e.slice(1) : e, Ts = (e) => Object.prototype.toString.call(e) === "[object Object]", gt = (e) => typeof e == "string";
  const Id = "modulepreload", kd = function(e) {
    return "/learn-wgpu/" + e;
  }, ki = {}, Q = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let a = function(u) {
        return Promise.all(u.map((c) => Promise.resolve(c).then((f) => ({
          status: "fulfilled",
          value: f
        }), (f) => ({
          status: "rejected",
          reason: f
        }))));
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      o = a(n.map((u) => {
        if (u = kd(u), u in ki) return;
        ki[u] = true;
        const c = u.endsWith(".css"), f = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${f}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : Id, c || (h.as = "script"), h.crossOrigin = "", h.href = u, l && h.setAttribute("nonce", l), document.head.appendChild(h), c) return new Promise((p, y) => {
          h.addEventListener("load", p), h.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function s(i) {
      const l = new Event("vite:preloadError", {
        cancelable: true
      });
      if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i;
    }
    return o.then((i) => {
      for (const l of i || []) l.status === "rejected" && s(l.reason);
      return t().catch(s);
    });
  }, Nd = JSON.parse("{}"), Dd = Object.fromEntries([
    [
      "/",
      {
        loader: () => Q(() => import("./index.html-Ces-ooNL.js"), []),
        meta: {
          title: "Introduction"
        }
      }
    ],
    [
      "/todo.html",
      {
        loader: () => Q(() => import("./todo.html-CyR1ETgz.js"), []),
        meta: {
          title: "Coming Soon!"
        }
      }
    ],
    [
      "/intermediate/pbr-notes.html",
      {
        loader: () => Q(() => import("./pbr-notes.html-DwEsghkG.js"), []),
        meta: {
          title: "Sources"
        }
      }
    ],
    [
      "/showcase/",
      {
        loader: () => Q(() => import("./index.html-D0lyXwTP.js"), []),
        meta: {
          title: "Foreword"
        }
      }
    ],
    [
      "/topics/",
      {
        loader: () => Q(() => import("./index.html-D3o-0Kv0.js"), []),
        meta: {
          title: "Topics Covered"
        }
      }
    ],
    [
      "/beginner/tutorial1-window/",
      {
        loader: () => Q(() => import("./index.html-_ATuduJP.js"), []),
        meta: {
          title: "Dependencies and the window"
        }
      }
    ],
    [
      "/beginner/tutorial2-surface/",
      {
        loader: () => Q(() => import("./index.html-C45d45Ob.js"), []),
        meta: {
          title: "The Surface"
        }
      }
    ],
    [
      "/beginner/tutorial3-pipeline/",
      {
        loader: () => Q(() => import("./index.html-DEoqZZ4Q.js"), []),
        meta: {
          title: "The Pipeline"
        }
      }
    ],
    [
      "/beginner/tutorial4-buffer/",
      {
        loader: () => Q(() => import("./index.html-Dla19zGe.js"), []),
        meta: {
          title: "Buffers and Indices"
        }
      }
    ],
    [
      "/beginner/tutorial5-textures/",
      {
        loader: () => Q(() => import("./index.html-D2MGk7LW.js"), []),
        meta: {
          title: "Textures and bind groups"
        }
      }
    ],
    [
      "/beginner/tutorial6-uniforms/",
      {
        loader: () => Q(() => import("./index.html-ws34tcWE.js"), []),
        meta: {
          title: "Uniform buffers and a 3d camera"
        }
      }
    ],
    [
      "/beginner/tutorial7-instancing/",
      {
        loader: () => Q(() => import("./index.html-B7FtzJvY.js"), []),
        meta: {
          title: "Instancing"
        }
      }
    ],
    [
      "/beginner/tutorial8-depth/",
      {
        loader: () => Q(() => import("./index.html-D_ELD72K.js"), []),
        meta: {
          title: "The Depth Buffer"
        }
      }
    ],
    [
      "/beginner/tutorial9-models/",
      {
        loader: () => Q(() => import("./index.html-0vmYwvrA.js"), []),
        meta: {
          title: "Model Loading"
        }
      }
    ],
    [
      "/compute/introduction/",
      {
        loader: () => Q(() => import("./index.html-Ct6Ik56d.js"), []),
        meta: {
          title: "Intro to Compute Pipelines"
        }
      }
    ],
    [
      "/compute/sorting/",
      {
        loader: () => Q(() => import("./index.html-Di7Mf0Kd.js"), []),
        meta: {
          title: "Sorting on the GPU"
        }
      }
    ],
    [
      "/intermediate/tutorial11-normals/",
      {
        loader: () => Q(() => import("./index.html-BNWsft6t.js"), []),
        meta: {
          title: "Normal Mapping"
        }
      }
    ],
    [
      "/intermediate/tutorial12-camera/",
      {
        loader: () => Q(() => import("./index.html-CVpqhvJH.js"), []),
        meta: {
          title: "A Better Camera"
        }
      }
    ],
    [
      "/intermediate/tutorial10-lighting/",
      {
        loader: () => Q(() => import("./index.html-VXx201oX.js"), []),
        meta: {
          title: "Working with Lights"
        }
      }
    ],
    [
      "/intermediate/wip-terrain/",
      {
        loader: () => Q(() => import("./index.html-B7afmDNk.js"), []),
        meta: {
          title: "Procedural Terrain"
        }
      }
    ],
    [
      "/intermediate/tutorial13-hdr/",
      {
        loader: () => Q(() => import("./index.html-1Aj8d_4Y.js"), []),
        meta: {
          title: "High Dynamic Range Rendering"
        }
      }
    ],
    [
      "/news/0.12/",
      {
        loader: () => Q(() => import("./index.html-CkwHCRCi.js"), []),
        meta: {
          title: "Update to 0.12!"
        }
      }
    ],
    [
      "/news/0.13/",
      {
        loader: () => Q(() => import("./index.html-DaaAKW3V.js"), []),
        meta: {
          title: "Update to 0.13!"
        }
      }
    ],
    [
      "/news/0.14/",
      {
        loader: () => Q(() => import("./index.html-DScPqCDz.js"), []),
        meta: {
          title: "Update to 0.14!"
        }
      }
    ],
    [
      "/news/0.15/",
      {
        loader: () => Q(() => import("./index.html-CwqnkeMQ.js"), []),
        meta: {
          title: "Update to 0.15!"
        }
      }
    ],
    [
      "/news/0.16/",
      {
        loader: () => Q(() => import("./index.html-DZCBaHAI.js"), []),
        meta: {
          title: "Update to 0.16"
        }
      }
    ],
    [
      "/news/0.17/",
      {
        loader: () => Q(() => import("./index.html-NlTiETpg.js"), []),
        meta: {
          title: "Update to 0.17"
        }
      }
    ],
    [
      "/news/0.18%20and%20hdr/",
      {
        loader: () => Q(() => import("./index.html-D9RmTF0l.js"), []),
        meta: {
          title: "Update to 0.18 and HDR tutorial"
        }
      }
    ],
    [
      "/news/22.0/",
      {
        loader: () => Q(() => import("./index.html-oVZZUsCw.js"), []),
        meta: {
          title: "First Major Version! (22.0)"
        }
      }
    ],
    [
      "/news/24.0/",
      {
        loader: () => Q(() => import("./index.html-xInl4n4d.js"), []),
        meta: {
          title: "Version 24.0"
        }
      }
    ],
    [
      "/news/25.0/",
      {
        loader: () => Q(() => import("./index.html-CjAWQfAj.js"), []),
        meta: {
          title: "Version 25.0!"
        }
      }
    ],
    [
      "/news/26.0.1/",
      {
        loader: () => Q(() => import("./index.html-DToShas_.js"), []),
        meta: {
          title: "Update to wgpu 26.0.1 and started compute pipeline guide"
        }
      }
    ],
    [
      "/news/27.0/",
      {
        loader: () => Q(() => import("./index.html-DLCUX-ZJ.js"), []),
        meta: {
          title: "Update to 27.0!"
        }
      }
    ],
    [
      "/news/28.0/",
      {
        loader: () => Q(() => import("./index.html-DyzBBWH8.js"), []),
        meta: {
          title: "Version 28.0 and stencil showcase"
        }
      }
    ],
    [
      "/news/29.0/",
      {
        loader: () => Q(() => import("./index.html-Ee-q_SGJ.js"), []),
        meta: {
          title: "Update to Wgpu 29.0"
        }
      }
    ],
    [
      "/news/30.0/",
      {
        loader: () => Q(() => import("./index.html-DHl7nMCi.js"), []),
        meta: {
          title: "Update to wgpu 30.0"
        }
      }
    ],
    [
      "/news/pre-0.12/",
      {
        loader: () => Q(() => import("./index.html-BpGGcKXY.js"), []),
        meta: {
          title: "News (Pre 0.12)"
        }
      }
    ],
    [
      "/news/update-to-winit-0.30/",
      {
        loader: () => Q(() => import("./index.html-BGZwwbdQ.js"), []),
        meta: {
          title: "Update to Winit 0.30!"
        }
      }
    ],
    [
      "/news/vuepress-v2/",
      {
        loader: () => Q(() => import("./index.html-CBLexMjC.js"), []),
        meta: {
          title: "Update to Vuepress v2"
        }
      }
    ],
    [
      "/showcase/alignment/",
      {
        loader: () => Q(() => import("./index.html-BpPaD-s3.js"), []),
        meta: {
          title: "Memory Layout in WGSL"
        }
      }
    ],
    [
      "/showcase/compute/",
      {
        loader: () => Q(() => import("./index.html-DUl1cq8Q.js"), []),
        meta: {
          title: "Compute Example: Tangents and Bitangents"
        }
      }
    ],
    [
      "/showcase/imgui-demo/",
      {
        loader: () => Q(() => import("./index.html-CzwtJsNk.js"), []),
        meta: {
          title: "Basic Imgui Demo"
        }
      }
    ],
    [
      "/showcase/gifs/",
      {
        loader: () => Q(() => import("./index.html-CvWLGAEZ.js"), []),
        meta: {
          title: "Creating gifs"
        }
      }
    ],
    [
      "/showcase/pong/",
      {
        loader: () => Q(() => import("./index.html-CXzOKeUc.js"), []),
        meta: {
          title: "Pong"
        }
      }
    ],
    [
      "/showcase/mipmaps/",
      {
        loader: () => Q(() => import("./index.html-D9B2ETO6.js"), []),
        meta: {
          title: "Mipmapping"
        }
      }
    ],
    [
      "/showcase/stencil/",
      {
        loader: () => Q(() => import("./index.html-CqUyhfik.js"), []),
        meta: {
          title: "Stencil Buffers"
        }
      }
    ],
    [
      "/showcase/threading/",
      {
        loader: () => Q(() => import("./index.html-BpC4ymqA.js"), []),
        meta: {
          title: "Multi-threading with Wgpu and Rayon"
        }
      }
    ],
    [
      "/showcase/windowless/",
      {
        loader: () => Q(() => import("./index.html-DKhWU-Rb.js"), []),
        meta: {
          title: "Wgpu without a window"
        }
      }
    ],
    [
      "/404.html",
      {
        loader: () => Q(() => import("./404.html-JUj-v2of.js"), []),
        meta: {
          title: ""
        }
      }
    ]
  ]);
  const Cn = typeof document < "u";
  function Ga(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Md(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ga(e.default);
  }
  const me = Object.assign;
  function $o(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = yt(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const rr = () => {
  }, yt = Array.isArray;
  function Ni(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  const Ka = /#/g, $d = /&/g, Hd = /\//g, Vd = /=/g, Fd = /\?/g, qa = /\+/g, jd = /%5B/g, Bd = /%5D/g, Ya = /%5E/g, Ud = /%60/g, Ja = /%7B/g, Wd = /%7C/g, Qa = /%7D/g, zd = /%20/g;
  function As(e) {
    return e == null ? "" : encodeURI("" + e).replace(Wd, "|").replace(jd, "[").replace(Bd, "]");
  }
  function Gd(e) {
    return As(e).replace(Ja, "{").replace(Qa, "}").replace(Ya, "^");
  }
  function ts(e) {
    return As(e).replace(qa, "%2B").replace(zd, "+").replace(Ka, "%23").replace($d, "%26").replace(Ud, "`").replace(Ja, "{").replace(Qa, "}").replace(Ya, "^");
  }
  function Kd(e) {
    return ts(e).replace(Vd, "%3D");
  }
  function qd(e) {
    return As(e).replace(Ka, "%23").replace(Fd, "%3F");
  }
  function Yd(e) {
    return qd(e).replace(Hd, "%2F");
  }
  function fr(e) {
    if (e == null) return null;
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const Jd = /\/$/, Qd = (e) => e.replace(Jd, "");
  function Ho(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return a = l >= 0 && a > l ? -1 : a, a >= 0 && (r = t.slice(0, a), s = t.slice(a, l > 0 ? l : t.length), o = e(s.slice(1))), l >= 0 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = th(r ?? t, n), {
      fullPath: r + s + i,
      path: r,
      query: o,
      hash: fr(i)
    };
  }
  function Xd(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Di(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Zd(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && Vn(t.matched[r], n.matched[o]) && Xa(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function Vn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Xa(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (var n in e) if (!eh(e[n], t[n])) return false;
    return true;
  }
  function eh(e, t) {
    return yt(e) ? Mi(e, t) : yt(t) ? Mi(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
  }
  function Mi(e, t) {
    return yt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function th(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, l;
    for (i = 0; i < r.length; i++) if (l = r[i], l !== ".") if (l === "..") s > 1 && s--;
    else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
  }
  const It = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  let ns = (function(e) {
    return e.pop = "pop", e.push = "push", e;
  })({}), Vo = (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e;
  })({});
  function nh(e) {
    if (!e) if (Cn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Qd(e);
  }
  const rh = /^[^#]+#/;
  function oh(e, t) {
    return e.replace(rh, "#") + t;
  }
  function sh(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const vo = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function ih(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = sh(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function $i(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const rs = /* @__PURE__ */ new Map();
  function lh(e, t) {
    rs.set(e, t);
  }
  function ah(e) {
    const t = rs.get(e);
    return rs.delete(e), t;
  }
  function ch(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function Za(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  let Oe = (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
  })({});
  const ec = Symbol("");
  Oe.MATCHER_NOT_FOUND + "", Oe.NAVIGATION_GUARD_REDIRECT + "", Oe.NAVIGATION_ABORTED + "", Oe.NAVIGATION_CANCELLED + "", Oe.NAVIGATION_DUPLICATED + "";
  function Fn(e, t) {
    return me(new Error(), {
      type: e,
      [ec]: true
    }, t);
  }
  function Ot(e, t) {
    return e instanceof Error && ec in e && (t == null || !!(e.type & t));
  }
  const uh = [
    "params",
    "query",
    "hash"
  ];
  function fh(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of uh) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
  }
  function dh(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
      const o = n[r].replace(qa, " "), s = o.indexOf("="), i = fr(s < 0 ? o : o.slice(0, s)), l = s < 0 ? null : fr(o.slice(s + 1));
      if (i in t) {
        let a = t[i];
        yt(a) || (a = t[i] = [
          a
        ]), a.push(l);
      } else t[i] = l;
    }
    return t;
  }
  function Hi(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = Kd(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (yt(r) ? r.map((o) => o && ts(o)) : [
        r && ts(r)
      ]).forEach((o) => {
        o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
      });
    }
    return t;
  }
  function hh(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = yt(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const ph = Symbol(""), Vi = Symbol(""), _o = Symbol(""), Cs = Symbol(""), os = Symbol("");
  function Jn() {
    let e = [];
    function t(r) {
      return e.push(r), () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      };
    }
    function n() {
      e = [];
    }
    return {
      add: t,
      list: () => e.slice(),
      reset: n
    };
  }
  function Qt(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((l, a) => {
      const u = (h) => {
        h === false ? a(Fn(Oe.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : h instanceof Error ? a(h) : ch(h) ? a(Fn(Oe.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: h
        })) : (i && r.enterCallbacks[o] === i && typeof h == "function" && i.push(h), l());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((h) => a(h));
    });
  }
  function Fo(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const l in i.components) {
      let a = i.components[l];
      if (!(t !== "beforeRouteEnter" && !i.instances[l])) if (Ga(a)) {
        const u = (a.__vccOpts || a)[t];
        u && s.push(Qt(u, n, r, i, l, o));
      } else {
        let u = a();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
          const f = Md(c) ? c.default : c;
          i.mods[l] = c, i.components[l] = f;
          const h = (f.__vccOpts || f)[t];
          return h && Qt(h, n, r, i, l, o)();
        }));
      }
    }
    return s;
  }
  function mh(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const l = t.matched[i];
      l && (e.matched.find((u) => Vn(u, l)) ? r.push(l) : n.push(l));
      const a = e.matched[i];
      a && (t.matched.find((u) => Vn(u, a)) || o.push(a));
    }
    return [
      n,
      r,
      o
    ];
  }
  let gh = () => location.protocol + "//" + location.host;
  function tc(e, t) {
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let i = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(i);
      return l[0] !== "/" && (l = "/" + l), Di(l, "");
    }
    return Di(n, e) + r + o;
  }
  function vh(e, t, n, r) {
    let o = [], s = [], i = null;
    const l = ({ state: h }) => {
      const p = tc(e, location), y = n.value, _ = t.value;
      let w = 0;
      if (h) {
        if (n.value = p, t.value = h, i && i === y) {
          i = null;
          return;
        }
        w = _ ? h.position - _.position : 0;
      } else r(p);
      o.forEach((R) => {
        R(n.value, y, {
          delta: w,
          type: ns.pop,
          direction: w ? w > 0 ? Vo.forward : Vo.back : Vo.unknown
        });
      });
    };
    function a() {
      i = n.value;
    }
    function u(h) {
      o.push(h);
      const p = () => {
        const y = o.indexOf(h);
        y > -1 && o.splice(y, 1);
      };
      return s.push(p), p;
    }
    function c() {
      if (document.visibilityState === "hidden") {
        const { history: h } = window;
        if (!h.state) return;
        h.replaceState(me({}, h.state, {
          scroll: vo()
        }), "");
      }
    }
    function f() {
      for (const h of s) h();
      s = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
    }
    return window.addEventListener("popstate", l), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), {
      pauseListeners: a,
      listen: u,
      destroy: f
    };
  }
  function Fi(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? vo() : null
    };
  }
  function _h(e) {
    const { history: t, location: n } = window, r = {
      value: tc(e, n)
    }, o = {
      value: t.state
    };
    o.value || s(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function s(a, u, c) {
      const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : gh() + e + a;
      try {
        t[c ? "replaceState" : "pushState"](u, "", h), o.value = u;
      } catch (p) {
        console.error(p), n[c ? "replace" : "assign"](h);
      }
    }
    function i(a, u) {
      s(a, me({}, t.state, Fi(o.value.back, a, o.value.forward, true), u, {
        position: o.value.position
      }), true), r.value = a;
    }
    function l(a, u) {
      const c = me({}, o.value, t.state, {
        forward: a,
        scroll: vo()
      });
      s(c.current, c, true), s(a, me({}, Fi(r.value, a, null), {
        position: c.position + 1
      }, u), false), r.value = a;
    }
    return {
      location: r,
      state: o,
      push: l,
      replace: i
    };
  }
  function bh(e) {
    e = nh(e);
    const t = _h(e), n = vh(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = me({
      location: "",
      base: e,
      go: r,
      createHref: oh.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  let dn = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
  })({});
  var Me = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
  })(Me || {});
  const yh = {
    type: dn.Static,
    value: ""
  }, Eh = /[a-zA-Z0-9_]/;
  function wh(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        yh
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(p) {
      throw new Error(`ERR (${n})/"${u}": ${p}`);
    }
    let n = Me.Static, r = n;
    const o = [];
    let s;
    function i() {
      s && o.push(s), s = [];
    }
    let l = 0, a, u = "", c = "";
    function f() {
      u && (n === Me.Static ? s.push({
        type: dn.Static,
        value: u
      }) : n === Me.Param || n === Me.ParamRegExp || n === Me.ParamRegExpEnd ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({
        type: dn.Param,
        value: u,
        regexp: c,
        repeatable: a === "*" || a === "+",
        optional: a === "*" || a === "?"
      })) : t("Invalid state to consume buffer"), u = "");
    }
    function h() {
      u += a;
    }
    for (; l < e.length; ) {
      if (a = e[l++], a === "\\" && n !== Me.ParamRegExp) {
        r = n, n = Me.EscapeNext;
        continue;
      }
      switch (n) {
        case Me.Static:
          a === "/" ? (u && f(), i()) : a === ":" ? (f(), n = Me.Param) : h();
          break;
        case Me.EscapeNext:
          h(), n = r;
          break;
        case Me.Param:
          a === "(" ? n = Me.ParamRegExp : Eh.test(a) ? h() : (f(), n = Me.Static, a !== "*" && a !== "?" && a !== "+" && l--);
          break;
        case Me.ParamRegExp:
          a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = Me.ParamRegExpEnd : c += a;
          break;
        case Me.ParamRegExpEnd:
          f(), n = Me.Static, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === Me.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o;
  }
  const ji = "[^/]+?", Sh = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  var Qe = (function(e) {
    return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
  })(Qe || {});
  const Th = /[.+*?^${}()[\]/\\]/g;
  function Ah(e, t) {
    const n = me({}, Sh, t), r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
      const c = u.length ? [] : [
        Qe.Root
      ];
      n.strict && !u.length && (o += "/");
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        let p = Qe.Segment + (n.sensitive ? Qe.BonusCaseSensitive : 0);
        if (h.type === dn.Static) f || (o += "/"), o += h.value.replace(Th, "\\$&"), p += Qe.Static;
        else if (h.type === dn.Param) {
          const { value: y, repeatable: _, optional: w, regexp: R } = h;
          s.push({
            name: y,
            repeatable: _,
            optional: w
          });
          const S = R || ji;
          if (S !== ji) {
            p += Qe.BonusCustomRegExp;
            try {
              `${S}`;
            } catch (v) {
              throw new Error(`Invalid custom RegExp for param "${y}" (${S}): ` + v.message);
            }
          }
          let g = _ ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
          f || (g = w && u.length < 2 ? `(?:/${g})` : "/" + g), w && (g += "?"), o += g, p += Qe.Dynamic, w && (p += Qe.BonusOptional), _ && (p += Qe.BonusRepeatable), S === ".*" && (p += Qe.BonusWildcard);
        }
        c.push(p);
      }
      r.push(c);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += Qe.BonusStrict;
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");
    function l(u) {
      const c = u.match(i), f = {};
      if (!c) return null;
      for (let h = 1; h < c.length; h++) {
        const p = c[h] || "", y = s[h - 1];
        f[y.name] = p && y.repeatable ? p.split("/") : p;
      }
      return f;
    }
    function a(u) {
      let c = "", f = false;
      for (const h of e) {
        (!f || !c.endsWith("/")) && (c += "/"), f = false;
        for (const p of h) if (p.type === dn.Static) c += p.value;
        else if (p.type === dn.Param) {
          const { value: y, repeatable: _, optional: w } = p, R = y in u ? u[y] : "";
          if (yt(R) && !_) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
          const S = yt(R) ? R.join("/") : R;
          if (!S) if (w) h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
          else throw new Error(`Missing required param "${y}"`);
          c += S;
        }
      }
      return c || "/";
    }
    return {
      re: i,
      score: r,
      keys: s,
      parse: l,
      stringify: a
    };
  }
  function Ch(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === Qe.Static + Qe.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Qe.Static + Qe.Segment ? 1 : -1 : 0;
  }
  function nc(e, t) {
    let n = 0;
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = Ch(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Bi(r)) return 1;
      if (Bi(o)) return -1;
    }
    return o.length - r.length;
  }
  function Bi(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const xh = {
    strict: false,
    end: true,
    sensitive: false
  };
  function Lh(e, t, n) {
    const r = Ah(wh(e.path), n), o = me(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function Rh(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = Ni(xh, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, h, p) {
      const y = !p, _ = Wi(f);
      _.aliasOf = p && p.record;
      const w = Ni(t, f), R = [
        _
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const $ of v) R.push(Wi(me({}, _, {
          components: p ? p.record.components : _.components,
          path: $,
          aliasOf: p ? p.record : _
        })));
      }
      let S, g;
      for (const v of R) {
        const { path: $ } = v;
        if (h && $[0] !== "/") {
          const Y = h.record.path, H = Y[Y.length - 1] === "/" ? "" : "/";
          v.path = h.record.path + ($ && H + $);
        }
        if (S = Lh(v, h, w), p ? p.alias.push(S) : (g = g || S, g !== S && g.alias.push(S), y && f.name && !zi(S) && i(f.name)), rc(S) && a(S), _.children) {
          const Y = _.children;
          for (let H = 0; H < Y.length; H++) s(Y[H], S, p && p.children[H]);
        }
        p = p || S;
      }
      return g ? () => {
        i(g);
      } : rr;
    }
    function i(f) {
      if (Za(f)) {
        const h = r.get(f);
        h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
      } else {
        const h = n.indexOf(f);
        h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
      }
    }
    function l() {
      return n;
    }
    function a(f) {
      const h = Ih(f, n);
      n.splice(h, 0, f), f.record.name && !zi(f) && r.set(f.record.name, f);
    }
    function u(f, h) {
      let p, y = {}, _, w;
      if ("name" in f && f.name) {
        if (p = r.get(f.name), !p) throw Fn(Oe.MATCHER_NOT_FOUND, {
          location: f
        });
        w = p.record.name, y = me(Ui(h.params, p.keys.filter((g) => !g.optional).concat(p.parent ? p.parent.keys.filter((g) => g.optional) : []).map((g) => g.name)), f.params && Ui(f.params, p.keys.map((g) => g.name))), _ = p.stringify(y);
      } else if (f.path != null) _ = f.path, p = n.find((g) => g.re.test(_)), p && (y = p.parse(_), w = p.record.name);
      else {
        if (p = h.name ? r.get(h.name) : n.find((g) => g.re.test(h.path)), !p) throw Fn(Oe.MATCHER_NOT_FOUND, {
          location: f,
          currentLocation: h
        });
        w = p.record.name, y = me({}, h.params, f.params), _ = p.stringify(y);
      }
      const R = [];
      let S = p;
      for (; S; ) R.unshift(S.record), S = S.parent;
      return {
        name: w,
        path: _,
        params: y,
        matched: R,
        meta: Ph(R)
      };
    }
    e.forEach((f) => s(f));
    function c() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      clearRoutes: c,
      getRoutes: l,
      getRecordMatcher: o
    };
  }
  function Ui(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Wi(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: Oh(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && {
        default: e.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function Oh(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function zi(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function Ph(e) {
    return e.reduce((t, n) => me(t, n.meta), {});
  }
  function Ih(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      nc(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = kh(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
  }
  function kh(e) {
    let t = e;
    for (; t = t.parent; ) if (rc(t) && nc(e, t) === 0) return t;
  }
  function rc({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function Gi(e) {
    const t = Ue(_o), n = Ue(Cs), r = N(() => {
      const a = ee(e.to);
      return t.resolve(a);
    }), o = N(() => {
      const { matched: a } = r.value, { length: u } = a, c = a[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(Vn.bind(null, c));
      if (h > -1) return h;
      const p = Ki(a[u - 2]);
      return u > 1 && Ki(c) === p && f[f.length - 1].path !== p ? f.findIndex(Vn.bind(null, a[u - 2])) : h;
    }), s = N(() => o.value > -1 && Hh(n.params, r.value.params)), i = N(() => o.value > -1 && o.value === n.matched.length - 1 && Xa(n.params, r.value.params));
    function l(a = {}) {
      if ($h(a)) {
        const u = t[ee(e.replace) ? "replace" : "push"](ee(e.to)).catch(rr);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: N(() => r.value.href),
      isActive: s,
      isExactActive: i,
      navigate: l
    };
  }
  function Nh(e) {
    return e.length === 1 ? e[0] : e;
  }
  const Dh = fe({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: Gi,
    setup(e, { slots: t }) {
      const n = _n(Gi(e)), { options: r } = Ue(_o), o = N(() => ({
        [qi(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [qi(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && Nh(t.default(n));
        return e.custom ? s : J("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
      };
    }
  }), Mh = Dh;
  function $h(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function Hh(e, t) {
    for (const n in t) {
      const r = t[n], o = e[n];
      if (typeof r == "string") {
        if (r !== o) return false;
      } else if (!yt(o) || o.length !== r.length || r.some((s, i) => s.valueOf() !== o[i].valueOf())) return false;
    }
    return true;
  }
  function Ki(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const qi = (e, t, n) => e ?? t ?? n, Vh = fe({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, { attrs: t, slots: n }) {
      const r = Ue(os), o = N(() => e.route || r.value), s = Ue(Vi, 0), i = N(() => {
        let u = ee(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), l = N(() => o.value.matched[i.value]);
      en(Vi, N(() => i.value + 1)), en(ph, l), en(os, o);
      const a = qe();
      return Ye(() => [
        a.value,
        l.value,
        e.name
      ], ([u, c, f], [h, p, y]) => {
        c && (c.instances[f] = u, p && p !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards), c.updateGuards.size || (c.updateGuards = p.updateGuards))), u && c && (!p || !Vn(c, p) || !h) && (c.enterCallbacks[f] || []).forEach((_) => _(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = l.value, h = f && f.components[c];
        if (!h) return Yi(n.default, {
          Component: h,
          route: u
        });
        const p = f.props[c], y = p ? p === true ? u.params : typeof p == "function" ? p(u) : p : null, w = J(h, me({}, y, t, {
          onVnodeUnmounted: (R) => {
            R.component.isUnmounted && (f.instances[c] = null);
          },
          ref: a
        }));
        return Yi(n.default, {
          Component: w,
          route: u
        }) || w;
      };
    }
  });
  function Yi(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const Fh = Vh;
  function jh(e) {
    const t = Rh(e.routes, e), n = e.parseQuery || dh, r = e.stringifyQuery || Hi, o = e.history, s = Jn(), i = Jn(), l = Jn(), a = Ae(It);
    let u = It;
    Cn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = $o.bind(null, (C) => "" + C), f = $o.bind(null, Yd), h = $o.bind(null, fr);
    function p(C, K) {
      let z, te;
      return Za(C) ? (z = t.getRecordMatcher(C), te = K) : te = C, t.addRoute(te, z);
    }
    function y(C) {
      const K = t.getRecordMatcher(C);
      K && t.removeRoute(K);
    }
    function _() {
      return t.getRoutes().map((C) => C.record);
    }
    function w(C) {
      return !!t.getRecordMatcher(C);
    }
    function R(C, K) {
      if (K = me({}, K || a.value), typeof C == "string") {
        const m = Ho(n, C, K.path), b = t.resolve({
          path: m.path
        }, K), O = o.createHref(m.fullPath);
        return me(m, b, {
          params: h(b.params),
          hash: fr(m.hash),
          redirectedFrom: void 0,
          href: O
        });
      }
      let z;
      if (C.path != null) z = me({}, C, {
        path: Ho(n, C.path, K.path).path
      });
      else {
        const m = me({}, C.params);
        for (const b in m) m[b] == null && delete m[b];
        z = me({}, C, {
          params: f(m)
        }), K.params = f(K.params);
      }
      const te = t.resolve(z, K), ue = C.hash || "";
      te.params = c(h(te.params));
      const be = Xd(r, me({}, C, {
        hash: Gd(ue),
        path: te.path
      })), d = o.createHref(be);
      return me({
        fullPath: be,
        hash: ue,
        query: r === Hi ? hh(C.query) : C.query || {}
      }, te, {
        redirectedFrom: void 0,
        href: d
      });
    }
    function S(C) {
      return typeof C == "string" ? Ho(n, C, a.value.path) : me({}, C);
    }
    function g(C, K) {
      if (u !== C) return Fn(Oe.NAVIGATION_CANCELLED, {
        from: K,
        to: C
      });
    }
    function v(C) {
      return H(C);
    }
    function $(C) {
      return v(me(S(C), {
        replace: true
      }));
    }
    function Y(C, K) {
      const z = C.matched[C.matched.length - 1];
      if (z && z.redirect) {
        const { redirect: te } = z;
        let ue = typeof te == "function" ? te(C, K) : te;
        return typeof ue == "string" && (ue = ue.includes("?") || ue.includes("#") ? ue = S(ue) : {
          path: ue
        }, ue.params = {}), me({
          query: C.query,
          hash: C.hash,
          params: ue.path != null ? {} : C.params
        }, ue);
      }
    }
    function H(C, K) {
      const z = u = R(C), te = a.value, ue = C.state, be = C.force, d = C.replace === true, m = Y(z, te);
      if (m) return H(me(S(m), {
        state: typeof m == "object" ? me({}, ue, m.state) : ue,
        force: be,
        replace: d
      }), K || z);
      const b = z;
      b.redirectedFrom = K;
      let O;
      return !be && Zd(r, te, z) && (O = Fn(Oe.NAVIGATION_DUPLICATED, {
        to: b,
        from: te
      }), He(te, te, true, false)), (O ? Promise.resolve(O) : k(b, te)).catch((A) => Ot(A) ? Ot(A, Oe.NAVIGATION_GUARD_REDIRECT) ? A : Ne(A) : U(A, b, te)).then((A) => {
        if (A) {
          if (Ot(A, Oe.NAVIGATION_GUARD_REDIRECT)) return H(me({
            replace: d
          }, S(A.to), {
            state: typeof A.to == "object" ? me({}, ue, A.to.state) : ue,
            force: be
          }), K || b);
        } else A = E(b, te, true, d, ue);
        return W(b, te, A), A;
      });
    }
    function T(C, K) {
      const z = g(C, K);
      return z ? Promise.reject(z) : Promise.resolve();
    }
    function L(C) {
      const K = Gt.values().next().value;
      return K && typeof K.runWithContext == "function" ? K.runWithContext(C) : C();
    }
    function k(C, K) {
      let z;
      const [te, ue, be] = mh(C, K);
      z = Fo(te.reverse(), "beforeRouteLeave", C, K);
      for (const m of te) m.leaveGuards.forEach((b) => {
        z.push(Qt(b, C, K));
      });
      const d = T.bind(null, C, K);
      return z.push(d), et(z).then(() => {
        z = [];
        for (const m of s.list()) z.push(Qt(m, C, K));
        return z.push(d), et(z);
      }).then(() => {
        z = Fo(ue, "beforeRouteUpdate", C, K);
        for (const m of ue) m.updateGuards.forEach((b) => {
          z.push(Qt(b, C, K));
        });
        return z.push(d), et(z);
      }).then(() => {
        z = [];
        for (const m of be) if (m.beforeEnter) if (yt(m.beforeEnter)) for (const b of m.beforeEnter) z.push(Qt(b, C, K));
        else z.push(Qt(m.beforeEnter, C, K));
        return z.push(d), et(z);
      }).then(() => (C.matched.forEach((m) => m.enterCallbacks = {}), z = Fo(be, "beforeRouteEnter", C, K, L), z.push(d), et(z))).then(() => {
        z = [];
        for (const m of i.list()) z.push(Qt(m, C, K));
        return z.push(d), et(z);
      }).catch((m) => Ot(m, Oe.NAVIGATION_CANCELLED) ? m : Promise.reject(m));
    }
    function W(C, K, z) {
      l.list().forEach((te) => L(() => te(C, K, z)));
    }
    function E(C, K, z, te, ue) {
      const be = g(C, K);
      if (be) return be;
      const d = K === It, m = Cn ? history.state : {};
      z && (te || d ? o.replace(C.fullPath, me({
        scroll: d && m && m.scroll
      }, ue)) : o.push(C.fullPath, ue)), a.value = C, He(C, K, z, d), Ne();
    }
    let D;
    function M() {
      D || (D = o.listen((C, K, z) => {
        if (!ot.listening) return;
        const te = R(C), ue = Y(te, ot.currentRoute.value);
        if (ue) {
          H(me(ue, {
            replace: true,
            force: true
          }), te).catch(rr);
          return;
        }
        u = te;
        const be = a.value;
        Cn && lh($i(be.fullPath, z.delta), vo()), k(te, be).catch((d) => Ot(d, Oe.NAVIGATION_ABORTED | Oe.NAVIGATION_CANCELLED) ? d : Ot(d, Oe.NAVIGATION_GUARD_REDIRECT) ? (H(me(S(d.to), {
          force: true
        }), te).then((m) => {
          Ot(m, Oe.NAVIGATION_ABORTED | Oe.NAVIGATION_DUPLICATED) && !z.delta && z.type === ns.pop && o.go(-1, false);
        }).catch(rr), Promise.reject()) : (z.delta && o.go(-z.delta, false), U(d, te, be))).then((d) => {
          d = d || E(te, be, false), d && (z.delta && !Ot(d, Oe.NAVIGATION_CANCELLED) ? o.go(-z.delta, false) : z.type === ns.pop && Ot(d, Oe.NAVIGATION_ABORTED | Oe.NAVIGATION_DUPLICATED) && o.go(-1, false)), W(te, be, d);
        }).catch(rr);
      }));
    }
    let j = Jn(), x = Jn(), Z;
    function U(C, K, z) {
      Ne(C);
      const te = x.list();
      return te.length ? te.forEach((ue) => ue(C, K, z)) : console.error(C), Promise.reject(C);
    }
    function ce() {
      return Z && a.value !== It ? Promise.resolve() : new Promise((C, K) => {
        j.add([
          C,
          K
        ]);
      });
    }
    function Ne(C) {
      return Z || (Z = !C, M(), j.list().forEach(([K, z]) => C ? z(C) : K()), j.reset()), C;
    }
    function He(C, K, z, te) {
      const { scrollBehavior: ue } = e;
      if (!Cn || !ue) return Promise.resolve();
      const be = !z && ah($i(C.fullPath, 0)) || (te || !z) && history.state && history.state.scroll || null;
      return Un().then(() => ue(C, K, be)).then((d) => d && ih(d)).catch((d) => U(d, C, K));
    }
    const We = (C) => o.go(C);
    let zt;
    const Gt = /* @__PURE__ */ new Set(), ot = {
      currentRoute: a,
      listening: true,
      addRoute: p,
      removeRoute: y,
      clearRoutes: t.clearRoutes,
      hasRoute: w,
      getRoutes: _,
      resolve: R,
      options: e,
      push: v,
      replace: $,
      go: We,
      back: () => We(-1),
      forward: () => We(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: x.add,
      isReady: ce,
      install(C) {
        C.component("RouterLink", Mh), C.component("RouterView", Fh), C.config.globalProperties.$router = ot, Object.defineProperty(C.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ee(a)
        }), Cn && !zt && a.value === It && (zt = true, v(o.location).catch((te) => {
        }));
        const K = {};
        for (const te in It) Object.defineProperty(K, te, {
          get: () => a.value[te],
          enumerable: true
        });
        C.provide(_o, ot), C.provide(Cs, Ul(K)), C.provide(os, a);
        const z = C.unmount;
        Gt.add(C), C.unmount = function() {
          Gt.delete(C), Gt.size < 1 && (u = It, D && D(), D = null, a.value = It, zt = false, Z = false), z();
        };
      }
    };
    function et(C) {
      return C.reduce((K, z) => K.then(() => L(z)), Promise.resolve());
    }
    return ot;
  }
  function Sr() {
    return Ue(_o);
  }
  function Wn(e) {
    return Ue(Cs);
  }
  var xs = Symbol(""), Lt = () => {
    const e = Ue(xs);
    if (!e) throw new Error("useClientData() is called without provider.");
    return e;
  }, Bh = () => Lt().pageComponent, oc = () => Lt().pageFrontmatter, Uh = () => Lt().pageHead, Wh = () => Lt().pageLang, zh = () => Lt().pageLayout, Gh = () => Lt().routeLocale, sc = () => Lt().routePath, Kh = () => Lt().routes, qh = () => Lt().siteData, bo = Lt, ic = oc, ss = /* @__PURE__ */ new Set(), Tr = (e) => {
    ss.add(e), ho(() => {
      ss.delete(e);
    });
  }, Yh = Symbol(""), is = Ae(Nd), kn = Ae(Dd), lc = (e, t) => {
    const n = Td(e, t);
    if (kn.value[n]) return n;
    const r = encodeURI(n);
    if (kn.value[r]) return r;
    const o = is.value[n] || is.value[r];
    return o || n;
  }, dr = (e, t) => {
    const { pathname: n, hashAndQueries: r } = Ua(e), o = lc(n, t), s = o + r;
    return kn.value[o] ? {
      ...kn.value[o],
      path: s,
      notFound: false
    } : {
      ...kn.value["/404.html"],
      path: s,
      notFound: true
    };
  }, Jh = (e, t) => {
    const { pathname: n, hashAndQueries: r } = Ua(e);
    return lc(n, t) + r;
  }, Qh = (e) => {
    var _a2;
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0) && !(e.currentTarget && ((_a2 = e.currentTarget.getAttribute("target")) == null ? void 0 : _a2.match(/\b_blank\b/i)))) return e.preventDefault(), true;
  }, yo = fe({
    name: "RouteLink",
    props: {
      to: {
        type: String,
        required: true
      },
      active: Boolean,
      activeClass: {
        type: String,
        default: "route-link-active"
      }
    },
    slots: Object,
    setup(e, { slots: t }) {
      const n = Sr(), r = Wn(), o = N(() => e.to.startsWith("#") || e.to.startsWith("?") ? e.to : `/learn-wgpu/${Jh(e.to, r.path).substring(1)}`);
      return () => J("a", {
        class: [
          "route-link",
          {
            [e.activeClass]: e.active
          }
        ],
        href: o.value,
        onClick: (s = {}) => {
          Qh(s) && n.push(e.to).catch();
        }
      }, t.default());
    }
  }), Xh = fe({
    name: "AutoLink",
    props: {
      config: {
        type: Object,
        required: true
      }
    },
    slots: Object,
    setup(e, { slots: t }) {
      const n = Kl(e, "config"), r = Wn(), o = qh(), s = N(() => Er(n.value.link)), i = N(() => n.value.target || (s.value ? "_blank" : void 0)), l = N(() => i.value === "_blank"), a = N(() => !s.value && !l.value), u = N(() => n.value.rel || (l.value ? "noopener noreferrer" : null)), c = N(() => n.value.ariaLabel ?? n.value.text), f = N(() => {
        if (n.value.exact) return false;
        const p = Object.keys(o.value.locales);
        return p.length ? p.every((y) => y !== n.value.link) : n.value.link !== "/";
      }), h = N(() => a.value ? n.value.activeMatch ? (n.value.activeMatch instanceof RegExp ? n.value.activeMatch : new RegExp(n.value.activeMatch, "u")).test(r.path) : f.value ? r.path.startsWith(n.value.link) : r.path === n.value.link : false);
      return () => {
        const { before: p, after: y, default: _ } = t, w = (_ == null ? void 0 : _(n.value)) ?? [
          p == null ? void 0 : p(n.value),
          n.value.text,
          y == null ? void 0 : y(n.value)
        ];
        return a.value ? J(yo, {
          class: "auto-link",
          to: n.value.link,
          active: h.value,
          "aria-label": c.value
        }, () => w) : J("a", {
          class: "auto-link external-link",
          href: n.value.link,
          "aria-label": c.value,
          rel: u.value,
          target: i.value
        }, w);
      };
    }
  }), Ls = fe({
    name: "ClientOnly",
    setup(e, t) {
      const n = qe(false);
      return ct(() => {
        n.value = true;
      }), () => {
        var _a2, _b;
        return n.value ? (_b = (_a2 = t.slots).default) == null ? void 0 : _b.call(_a2) : null;
      };
    }
  }), Ir = (e) => {
    ss.forEach((t) => t(e));
  }, Rs = fe({
    name: "Content",
    props: {
      path: {
        type: String,
        required: false,
        default: ""
      }
    },
    setup(e) {
      const t = Bh(), n = N(() => {
        if (!e.path) return t.value;
        const o = dr(e.path);
        return Bu(async () => o.loader().then(({ comp: s }) => s));
      }), r = oc();
      return Ye(r, () => {
        Ir("updated");
      }, {
        deep: true,
        flush: "post"
      }), () => J(n.value, {
        onVnodeMounted: () => {
          Ir("mounted");
        },
        onVnodeUpdated: () => {
          Ir("updated");
        },
        onVnodeBeforeUnmount: () => {
          Ir("beforeUnmount");
        }
      });
    }
  }), Zh = "Layout", ep = "en-US", an = _n({
    resolveLayouts: (e) => e.reduce((t, n) => ({
      ...t,
      ...n.layouts
    }), {}),
    resolvePageHead: (e, t, n) => {
      const r = gt(t.description) ? t.description : n.description, o = [
        ...Array.isArray(t.head) ? t.head : [],
        ...n.head,
        [
          "title",
          {},
          e
        ],
        [
          "meta",
          {
            name: "description",
            content: r
          }
        ]
      ];
      return Od(o);
    },
    resolvePageHeadTitle: (e, t) => [
      e.title,
      t.title
    ].filter((n) => !!n).join(" | "),
    resolvePageLang: (e, t) => e.lang || t.lang || ep,
    resolvePageLayout: (e, t) => {
      const n = gt(e.frontmatter.layout) ? e.frontmatter.layout : Zh;
      if (!t[n]) throw new Error(`[vuepress] Cannot resolve layout: ${n}`);
      return t[n];
    },
    resolveRouteLocale: (e, t) => Ad(e, decodeURI(t)),
    resolveSiteLocaleData: ({ base: e, locales: t, ...n }, r) => {
      var _a2;
      return {
        ...n,
        ...t[r],
        head: [
          ...((_a2 = t[r]) == null ? void 0 : _a2.head) ?? [],
          ...n.head
        ]
      };
    }
  }), Wt = (e = {}) => e, Os = (e) => wr(e) ? e : `/learn-wgpu/${za(e)}`, tp = Object.defineProperty, np = (e, t) => {
    for (var n in t) tp(e, n, {
      get: t[n],
      enumerable: true
    });
  }, rp = {};
  np(rp, {
    COMPONENT_STATE_TYPE: () => op,
    INSPECTOR_ID: () => sp,
    INSPECTOR_LABEL: () => ip,
    INSPECTOR_NODES: () => lp,
    INSPECTOR_STATE_SECTION_NAME: () => ap,
    PLUGIN_ID: () => ac,
    PLUGIN_LABEL: () => Ps
  });
  var ac = "org.vuejs.vuepress", Ps = "VuePress", op = Ps, sp = ac, ip = Ps, Ji = {
    id: "INTERNAL",
    label: "Internal",
    keys: [
      "layouts",
      "routes",
      "redirects"
    ]
  }, Qi = {
    id: "SITE",
    label: "Site",
    keys: [
      "siteData",
      "siteLocaleData"
    ]
  }, Xi = {
    id: "ROUTE",
    label: "Route",
    keys: [
      "routePath",
      "routeLocale"
    ]
  }, Zi = {
    id: "PAGE",
    label: "Page",
    keys: [
      "pageData",
      "pageFrontmatter",
      "pageLang",
      "pageHead",
      "pageHeadTitle",
      "pageLayout",
      "pageComponent"
    ]
  }, lp = {
    [Ji.id]: Ji,
    [Qi.id]: Qi,
    [Xi.id]: Xi,
    [Zi.id]: Zi
  }, ap = "State";
  function Is(e, t) {
    return so() ? (Yc(e, t), true) : false;
  }
  const Nn = /* @__PURE__ */ new WeakMap(), cc = (...e) => {
    var t;
    const n = e[0], r = (t = Et()) === null || t === void 0 ? void 0 : t.proxy, o = r ?? so();
    if (o == null && !Xl()) throw new Error("injectLocal must be called in setup");
    return o && Nn.has(o) && n in Nn.get(o) ? Nn.get(o)[n] : Ue(...e);
  };
  function cp(e, t) {
    var n;
    const r = (n = Et()) === null || n === void 0 ? void 0 : n.proxy, o = r ?? so();
    if (o == null) throw new Error("provideLocal must be called in setup");
    Nn.has(o) || Nn.set(o, /* @__PURE__ */ Object.create(null));
    const s = Nn.get(o);
    return s[e] = t, en(e, t);
  }
  const ks = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const up = (e) => e != null, fp = Object.prototype.toString, dp = (e) => fp.call(e) === "[object Object]", En = () => {
  };
  function hp(...e) {
    if (e.length !== 1) return Kl(...e);
    const t = e[0];
    return typeof t == "function" ? bn(Gl(() => ({
      get: t,
      set: En
    }))) : qe(t);
  }
  function Ns(e, t) {
    function n(...r) {
      return new Promise((o, s) => {
        Promise.resolve(e(() => t.apply(this, r), {
          fn: t,
          thisArg: this,
          args: r
        })).then(o).catch(s);
      });
    }
    return n;
  }
  const uc = (e) => e();
  function pp(e, t = {}) {
    let n, r, o = En;
    const s = (a) => {
      clearTimeout(a), o(), o = En;
    };
    let i;
    return (a) => {
      const u = Ee(e), c = Ee(t.maxWait);
      return n && s(n), u <= 0 || c !== void 0 && c <= 0 ? (r && (s(r), r = void 0), Promise.resolve(a())) : new Promise((f, h) => {
        o = t.rejectOnCancel ? h : f, i = a, c && !r && (r = setTimeout(() => {
          n && s(n), r = void 0, f(i());
        }, c)), n = setTimeout(() => {
          r && s(r), r = void 0, f(a());
        }, u);
      });
    };
  }
  function mp(...e) {
    let t = 0, n, r = true, o = En, s, i, l, a, u;
    !ke(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = true, leading: a = true, rejectOnCancel: u = false } = e[0] : [i, l = true, a = true, u = false] = e;
    const c = () => {
      n && (clearTimeout(n), n = void 0, o(), o = En);
    };
    return (h) => {
      const p = Ee(i), y = Date.now() - t, _ = () => s = h();
      return c(), p <= 0 ? (t = Date.now(), _()) : (y > p ? (t = Date.now(), (a || !r) && _()) : l && (s = new Promise((w, R) => {
        o = u ? R : w, n = setTimeout(() => {
          t = Date.now(), r = true, w(_()), c();
        }, Math.max(0, p - y));
      })), !a && !n && (n = setTimeout(() => r = true, p)), r = false, s);
    };
  }
  function gp(e = uc, t = {}) {
    const { initialState: n = "active" } = t, r = hp(n === "active");
    function o() {
      r.value = false;
    }
    function s() {
      r.value = true;
    }
    return {
      isActive: bn(r),
      pause: o,
      resume: s,
      eventFilter: (...l) => {
        r.value && e(...l);
      }
    };
  }
  function vp(e) {
    let t;
    function n() {
      return t || (t = e()), t;
    }
    return n.reset = async () => {
      const r = t;
      t = void 0, r && await r;
    }, n;
  }
  function el(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
  }
  function or(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  function _p(e) {
    return Et();
  }
  function fc(e, t = 200, n = {}) {
    return Ns(pp(t, n), e);
  }
  function bp(e, t = 200, n = false, r = true, o = false) {
    return Ns(mp(t, n, r, o), e);
  }
  function yp(e, t, n = {}) {
    const { eventFilter: r = uc, ...o } = n;
    return Ye(e, Ns(r, t), o);
  }
  function Ep(e, t, n = {}) {
    const { eventFilter: r, initialState: o = "active", ...s } = n, { eventFilter: i, pause: l, resume: a, isActive: u } = gp(r, {
      initialState: o
    });
    return {
      stop: yp(e, t, {
        ...s,
        eventFilter: i
      }),
      pause: l,
      resume: a,
      isActive: u
    };
  }
  function Eo(e, t = true, n) {
    _p() ? ct(e, n) : t ? e() : Un(e);
  }
  function wp(e, t, n = {}) {
    const { immediate: r = true, immediateCallback: o = false } = n, s = Ae(false);
    let i;
    function l() {
      i && (clearTimeout(i), i = void 0);
    }
    function a() {
      s.value = false, l();
    }
    function u(...c) {
      o && e(), l(), s.value = true, i = setTimeout(() => {
        s.value = false, i = void 0, e(...c);
      }, Ee(t));
    }
    return r && (s.value = true, ks && u()), Is(a), {
      isPending: mu(s),
      start: u,
      stop: a
    };
  }
  function Ds(e = false, t = {}) {
    const { truthyValue: n = true, falsyValue: r = false } = t, o = ke(e), s = Ae(e);
    function i(l) {
      if (arguments.length) return s.value = l, s.value;
      {
        const a = Ee(n);
        return s.value = s.value === a ? Ee(r) : a, s.value;
      }
    }
    return o ? i : [
      s,
      i
    ];
  }
  function Ms(e, t, n) {
    return Ye(e, t, {
      ...n,
      immediate: true
    });
  }
  const ht = ks ? window : void 0, dc = ks ? window.navigator : void 0;
  function $t(e) {
    var t;
    const n = Ee(e);
    return (t = n == null ? void 0 : n.$el) !== null && t !== void 0 ? t : n;
  }
  function Ze(...e) {
    const t = (r, o, s, i) => (r.addEventListener(o, s, i), () => r.removeEventListener(o, s, i)), n = N(() => {
      const r = or(Ee(e[0])).filter((o) => o != null);
      return r.every((o) => typeof o != "string") ? r : void 0;
    });
    return Ms(() => {
      var r, o;
      return [
        (r = (o = n.value) === null || o === void 0 ? void 0 : o.map((s) => $t(s))) !== null && r !== void 0 ? r : [
          ht
        ].filter((s) => s != null),
        or(Ee(n.value ? e[1] : e[0])),
        or(ee(n.value ? e[2] : e[1])),
        Ee(n.value ? e[3] : e[2])
      ];
    }, ([r, o, s, i], l, a) => {
      if (!(r == null ? void 0 : r.length) || !(o == null ? void 0 : o.length) || !(s == null ? void 0 : s.length)) return;
      const u = dp(i) ? {
        ...i
      } : i, c = r.flatMap((f) => o.flatMap((h) => s.map((p) => t(f, h, p, u))));
      a(() => {
        c.forEach((f) => f());
      });
    }, {
      flush: "post"
    });
  }
  function $s() {
    const e = Ae(false), t = Et();
    return t && ct(() => {
      e.value = true;
    }, t), e;
  }
  function Ar(e) {
    const t = $s();
    return N(() => (t.value, !!e()));
  }
  function Sp(e, t, n = {}) {
    const { window: r = ht, ...o } = n;
    let s;
    const i = Ar(() => r && "MutationObserver" in r), l = () => {
      s && (s.disconnect(), s = void 0);
    }, a = Ye(N(() => {
      const f = or(Ee(e)).map($t).filter(up);
      return new Set(f);
    }), (f) => {
      l(), i.value && f.size && (s = new MutationObserver(t), f.forEach((h) => s.observe(h, o)));
    }, {
      immediate: true,
      flush: "post"
    }), u = () => s == null ? void 0 : s.takeRecords(), c = () => {
      a(), l();
    };
    return Is(c), {
      isSupported: i,
      stop: c,
      takeRecords: u
    };
  }
  const Tp = Symbol("vueuse-ssr-width");
  function Ap() {
    const e = Xl() ? cc(Tp, null) : null;
    return typeof e == "number" ? e : void 0;
  }
  function Hs(e, t = {}) {
    const { window: n = ht, ssrWidth: r = Ap() } = t, o = Ar(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), s = Ae(typeof r == "number"), i = Ae(), l = Ae(false), a = (u) => {
      l.value = u.matches;
    };
    return Iu(() => {
      if (s.value) {
        s.value = !o.value, l.value = Ee(e).split(",").some((u) => {
          const c = u.includes("not all"), f = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let p = !!(f || h);
          return f && p && (p = r >= el(f[1])), h && p && (p = r <= el(h[1])), c ? !p : p;
        });
        return;
      }
      o.value && (i.value = n.matchMedia(Ee(e)), l.value = i.value.matches);
    }), Ze(i, "change", a, {
      passive: true
    }), N(() => l.value);
  }
  function tl(e, t = {}) {
    const { controls: n = false, navigator: r = dc } = t, o = Ar(() => r && "permissions" in r), s = Ae(), i = typeof e == "string" ? {
      name: e
    } : e, l = Ae(), a = () => {
      var c, f;
      l.value = (c = (f = s.value) === null || f === void 0 ? void 0 : f.state) !== null && c !== void 0 ? c : "prompt";
    };
    Ze(s, "change", a, {
      passive: true
    });
    const u = vp(async () => {
      if (o.value) {
        if (!s.value) try {
          s.value = await r.permissions.query(i);
        } catch {
          s.value = void 0;
        } finally {
          a();
        }
        if (n) return he(s.value);
      }
    });
    return u(), n ? {
      state: l,
      isSupported: o,
      query: u
    } : l;
  }
  function Cp(e = {}) {
    const { navigator: t = dc, read: n = false, source: r, copiedDuring: o = 1500, legacy: s = false } = e, i = Ar(() => t && "clipboard" in t), l = tl("clipboard-read"), a = tl("clipboard-write"), u = N(() => i.value || s), c = Ae(""), f = Ae(false), h = wp(() => f.value = false, o, {
      immediate: false
    });
    async function p() {
      let S = !(i.value && R(l.value));
      if (!S) try {
        c.value = await t.clipboard.readText();
      } catch {
        S = true;
      }
      S && (c.value = w());
    }
    u.value && n && Ze([
      "copy",
      "cut"
    ], p, {
      passive: true
    });
    async function y(S = Ee(r)) {
      if (u.value && S != null) {
        let g = !(i.value && R(a.value));
        if (!g) try {
          await t.clipboard.writeText(S);
        } catch {
          g = true;
        }
        g && _(S), c.value = S, f.value = true, h.start();
      }
    }
    function _(S) {
      const g = document.createElement("textarea");
      g.value = S, g.style.position = "absolute", g.style.opacity = "0", g.setAttribute("readonly", ""), document.body.appendChild(g), g.select(), document.execCommand("copy"), g.remove();
    }
    function w() {
      var S, g, v;
      return (S = (g = document) === null || g === void 0 || (v = g.getSelection) === null || v === void 0 || (v = v.call(g)) === null || v === void 0 ? void 0 : v.toString()) !== null && S !== void 0 ? S : "";
    }
    function R(S) {
      return S === "granted" || S === "prompt";
    }
    return {
      isSupported: u,
      text: bn(c),
      copied: bn(f),
      copy: y
    };
  }
  const kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nr = "__vueuse_ssr_handlers__", xp = Lp();
  function Lp() {
    return Nr in kr || (kr[Nr] = kr[Nr] || {}), kr[Nr];
  }
  function Rp(e, t) {
    return xp[e] || t;
  }
  function Op(e) {
    return Hs("(prefers-color-scheme: dark)", e);
  }
  function Pp(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
  }
  const Ip = {
    boolean: {
      read: (e) => e === "true",
      write: (e) => String(e)
    },
    object: {
      read: (e) => JSON.parse(e),
      write: (e) => JSON.stringify(e)
    },
    number: {
      read: (e) => Number.parseFloat(e),
      write: (e) => String(e)
    },
    any: {
      read: (e) => e,
      write: (e) => String(e)
    },
    string: {
      read: (e) => e,
      write: (e) => String(e)
    },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e))
    },
    date: {
      read: (e) => new Date(e),
      write: (e) => e.toISOString()
    }
  }, nl = "vueuse-storage";
  function Vs(e, t, n, r = {}) {
    var o;
    const { flush: s = "pre", deep: i = true, listenToStorageChanges: l = true, writeDefaults: a = true, mergeDefaults: u = false, shallow: c, window: f = ht, eventFilter: h, onError: p = (M) => {
      console.error(M);
    }, initOnMounted: y } = r, _ = (c ? Ae : qe)(typeof t == "function" ? t() : t), w = N(() => Ee(e));
    if (!n) try {
      n = Rp("getDefaultStorage", () => ht == null ? void 0 : ht.localStorage)();
    } catch (M) {
      p(M);
    }
    if (!n) return _;
    const R = Ee(t), S = Pp(R), g = (o = r.serializer) !== null && o !== void 0 ? o : Ip[S], { pause: v, resume: $ } = Ep(_, (M) => k(M), {
      flush: s,
      deep: i,
      eventFilter: h
    });
    Ye(w, () => E(), {
      flush: s
    });
    let Y = false;
    const H = (M) => {
      y && !Y || E(M);
    }, T = (M) => {
      y && !Y || D(M);
    };
    f && l && (n instanceof Storage ? Ze(f, "storage", H, {
      passive: true
    }) : Ze(f, nl, T)), y ? Eo(() => {
      Y = true, E();
    }) : E();
    function L(M, j) {
      if (f) {
        const x = {
          key: w.value,
          oldValue: M,
          newValue: j,
          storageArea: n
        };
        f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", x) : new CustomEvent(nl, {
          detail: x
        }));
      }
    }
    function k(M) {
      try {
        const j = n.getItem(w.value);
        if (M == null) L(j, null), n.removeItem(w.value);
        else {
          const x = g.write(M);
          j !== x && (n.setItem(w.value, x), L(j, x));
        }
      } catch (j) {
        p(j);
      }
    }
    function W(M) {
      const j = M ? M.newValue : n.getItem(w.value);
      if (j == null) return a && R != null && n.setItem(w.value, g.write(R)), R;
      if (!M && u) {
        const x = g.read(j);
        return typeof u == "function" ? u(x, R) : S === "object" && !Array.isArray(x) ? {
          ...R,
          ...x
        } : x;
      } else return typeof j != "string" ? j : g.read(j);
    }
    function E(M) {
      if (!(M && M.storageArea !== n)) {
        if (M && M.key == null) {
          _.value = R;
          return;
        }
        if (!(M && M.key !== w.value)) {
          v();
          try {
            const j = g.write(_.value);
            (M === void 0 || (M == null ? void 0 : M.newValue) !== j) && (_.value = W(M));
          } catch (j) {
            p(j);
          } finally {
            M ? Un($) : $();
          }
        }
      }
    }
    function D(M) {
      E(M.detail);
    }
    return _;
  }
  function kp(e, t, n = {}) {
    const { window: r = ht, ...o } = n;
    let s;
    const i = Ar(() => r && "ResizeObserver" in r), l = () => {
      s && (s.disconnect(), s = void 0);
    }, a = Ye(N(() => {
      const c = Ee(e);
      return Array.isArray(c) ? c.map((f) => $t(f)) : [
        $t(c)
      ];
    }), (c) => {
      if (l(), i.value && r) {
        s = new ResizeObserver(t);
        for (const f of c) f && s.observe(f, o);
      }
    }, {
      immediate: true,
      flush: "post"
    }), u = () => {
      l(), a();
    };
    return Is(u), {
      isSupported: i,
      stop: u
    };
  }
  function Np(e, t = {
    width: 0,
    height: 0
  }, n = {}) {
    const { window: r = ht, box: o = "content-box" } = n, s = N(() => {
      var f;
      return (f = $t(e)) === null || f === void 0 || (f = f.namespaceURI) === null || f === void 0 ? void 0 : f.includes("svg");
    }), i = Ae(t.width), l = Ae(t.height), { stop: a } = kp(e, ([f]) => {
      const h = o === "border-box" ? f.borderBoxSize : o === "content-box" ? f.contentBoxSize : f.devicePixelContentBoxSize;
      if (r && s.value) {
        const p = $t(e);
        if (p) {
          const y = p.getBoundingClientRect();
          i.value = y.width, l.value = y.height;
        }
      } else if (h) {
        const p = or(h);
        i.value = p.reduce((y, { inlineSize: _ }) => y + _, 0), l.value = p.reduce((y, { blockSize: _ }) => y + _, 0);
      } else i.value = f.contentRect.width, l.value = f.contentRect.height;
    }, n);
    Eo(() => {
      const f = $t(e);
      f && (i.value = "offsetWidth" in f ? f.offsetWidth : t.width, l.value = "offsetHeight" in f ? f.offsetHeight : t.height);
    });
    const u = Ye(() => $t(e), (f) => {
      i.value = f ? t.width : 0, l.value = f ? t.height : 0;
    });
    function c() {
      a(), u();
    }
    return {
      width: i,
      height: l,
      stop: c
    };
  }
  const rl = 1;
  function Dp(e, t = {}) {
    const { throttle: n = 0, idle: r = 200, onStop: o = En, onScroll: s = En, offset: i = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, observe: l = {
      mutation: false
    }, eventListenerOptions: a = {
      capture: false,
      passive: true
    }, behavior: u = "auto", window: c = ht, onError: f = (L) => {
      console.error(L);
    } } = t, h = typeof l == "boolean" ? {
      mutation: l
    } : l, p = Ae(0), y = Ae(0), _ = N({
      get() {
        return p.value;
      },
      set(L) {
        R(L, void 0);
      }
    }), w = N({
      get() {
        return y.value;
      },
      set(L) {
        R(void 0, L);
      }
    });
    function R(L, k) {
      var W, E, D, M;
      if (!c) return;
      const j = Ee(e);
      if (!j) return;
      (W = j instanceof Document ? c.document.body : j) === null || W === void 0 || W.scrollTo({
        top: (E = Ee(k)) !== null && E !== void 0 ? E : w.value,
        left: (D = Ee(L)) !== null && D !== void 0 ? D : _.value,
        behavior: Ee(u)
      });
      const x = (j == null || (M = j.document) === null || M === void 0 ? void 0 : M.documentElement) || (j == null ? void 0 : j.documentElement) || j;
      _ != null && (p.value = x.scrollLeft), w != null && (y.value = x.scrollTop);
    }
    const S = Ae(false), g = _n({
      left: true,
      right: false,
      top: true,
      bottom: false
    }), v = _n({
      left: false,
      right: false,
      top: false,
      bottom: false
    }), $ = (L) => {
      S.value && (S.value = false, v.left = false, v.right = false, v.top = false, v.bottom = false, o(L));
    }, Y = fc($, n + r), H = (L) => {
      var k;
      if (!c) return;
      const W = (L == null || (k = L.document) === null || k === void 0 ? void 0 : k.documentElement) || (L == null ? void 0 : L.documentElement) || $t(L), { display: E, flexDirection: D, direction: M } = c.getComputedStyle(W), j = M === "rtl" ? -1 : 1, x = W.scrollLeft;
      v.left = x < p.value, v.right = x > p.value;
      const Z = Math.abs(x * j) <= (i.left || 0), U = Math.abs(x * j) + W.clientWidth >= W.scrollWidth - (i.right || 0) - rl;
      E === "flex" && D === "row-reverse" ? (g.left = U, g.right = Z) : (g.left = Z, g.right = U), p.value = x;
      let ce = W.scrollTop;
      L === c.document && !ce && (ce = c.document.body.scrollTop), v.top = ce < y.value, v.bottom = ce > y.value;
      const Ne = Math.abs(ce) <= (i.top || 0), He = Math.abs(ce) + W.clientHeight >= W.scrollHeight - (i.bottom || 0) - rl;
      E === "flex" && D === "column-reverse" ? (g.top = He, g.bottom = Ne) : (g.top = Ne, g.bottom = He), y.value = ce;
    }, T = (L) => {
      var k;
      c && (H((k = L.target.documentElement) !== null && k !== void 0 ? k : L.target), S.value = true, Y(L), s(L));
    };
    return Ze(e, "scroll", n ? bp(T, n, true, false) : T, a), Eo(() => {
      try {
        const L = Ee(e);
        if (!L) return;
        H(L);
      } catch (L) {
        f(L);
      }
    }), (h == null ? void 0 : h.mutation) && e != null && e !== c && e !== document && Sp(e, () => {
      const L = Ee(e);
      L && H(L);
    }, {
      attributes: true,
      childList: true,
      subtree: true
    }), Ze(e, "scrollend", $, a), {
      x: _,
      y: w,
      isScrolling: S,
      arrivedState: g,
      directions: v,
      measure() {
        const L = Ee(e);
        c && L && H(L);
      }
    };
  }
  function Mp(e = {}) {
    const { window: t = ht, ...n } = e;
    return Dp(t, n);
  }
  function $p(e = {}) {
    const { window: t = ht, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: o = true, includeScrollbar: s = true, type: i = "inner" } = e, l = Ae(n), a = Ae(r), u = () => {
      if (t) if (i === "outer") l.value = t.outerWidth, a.value = t.outerHeight;
      else if (i === "visual" && t.visualViewport) {
        const { width: f, height: h, scale: p } = t.visualViewport;
        l.value = Math.round(f * p), a.value = Math.round(h * p);
      } else s ? (l.value = t.innerWidth, a.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight);
    };
    u(), Eo(u);
    const c = {
      passive: true
    };
    return Ze("resize", u, c), t && i === "visual" && t.visualViewport && Ze(t.visualViewport, "resize", u, c), o && Ye(Hs("(orientation: portrait)"), () => u()), {
      width: l,
      height: a
    };
  }
  const ol = async (e, t) => {
    const { path: n, query: r } = e.currentRoute.value, { scrollBehavior: o } = e.options;
    e.options.scrollBehavior = void 0, await e.replace({
      path: n,
      query: r,
      hash: t
    }), e.options.scrollBehavior = o;
  }, Hp = ({ headerLinkSelector: e, headerAnchorSelector: t, delay: n, offset: r = 5 }) => {
    const o = Sr();
    Ze("scroll", fc(() => {
      var _a2, _b;
      const i = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
      if (Math.abs(i) < r) {
        ol(o, "");
        return;
      }
      const a = window.innerHeight + i, u = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.abs(u - a) < r, f = [
        ...document.querySelectorAll(e)
      ], p = [
        ...document.querySelectorAll(t)
      ].filter((y) => f.some((_) => _.hash === y.hash));
      for (let y = 0; y < p.length; y++) {
        const _ = p[y], w = p[y + 1], R = i >= (((_a2 = _.parentElement) == null ? void 0 : _a2.offsetTop) ?? 0) - r, S = !w || i < (((_b = w.parentElement) == null ? void 0 : _b.offsetTop) ?? 0) - r;
        if (!(R && S)) continue;
        const v = decodeURIComponent(o.currentRoute.value.hash), $ = decodeURIComponent(_.hash);
        if (v === $) return;
        if (c) {
          for (let Y = y + 1; Y < p.length; Y++) if (v === decodeURIComponent(p[Y].hash)) return;
        }
        ol(o, $);
        return;
      }
    }, n));
  }, Vp = "a.vp-sidebar-item", Fp = ".header-anchor", jp = 300, Bp = 5, Up = Wt({
    setup() {
      Hp({
        headerLinkSelector: Vp,
        headerAnchorSelector: Fp,
        delay: jp,
        offset: Bp
      });
    }
  }), Wp = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Up
  }, Symbol.toStringTag, {
    value: "Module"
  })), zp = (e) => typeof e < "u", hc = (e, t) => gt(e) && e.startsWith(t), { entries: Gp } = Object, Kp = (e) => Object.keys(e), pc = (e) => hc(e, "/") && e[1] !== "/", mc = (e) => !wd(e) && !Er(e), sl = () => document.documentElement.dataset.theme === "dark", gc = Array.from({
    length: 6
  }, (e, t) => `[vp-content] h${t + 1}`).join(","), qp = (e, t = 2) => {
    if (t === false) return [];
    const [n, r] = typeof t == "number" ? [
      t,
      t
    ] : t === "deep" ? [
      2,
      6
    ] : t, o = e.filter((i) => i.level >= n && i.level <= r), s = [];
    e: for (let i = 0; i < o.length; i++) {
      const l = o[i];
      if (i === 0) s.push(l);
      else {
        for (let a = i - 1; a >= 0; a--) {
          const u = o[a];
          if (u.level < l.level) {
            u.children.push(l);
            continue e;
          }
        }
        s.push(l);
      }
    }
    return s;
  }, Yp = (e, t = []) => {
    let n;
    if (t.length > 0) {
      const r = e.cloneNode(true);
      r.querySelectorAll(t.join(",")).forEach((o) => {
        o.remove();
      }), n = r.textContent || "";
    } else n = e.textContent || "";
    return n.trim();
  }, Jp = (e = gc, t = []) => [
    ...document.querySelectorAll(e)
  ].filter((n) => n.id && n.hasChildNodes()).map((n) => ({
    element: n,
    title: Yp(n, t),
    link: `#${n.id}`,
    slug: n.id,
    level: Number(n.tagName[1]),
    children: []
  })), Qp = ({ selector: e = gc, levels: t = 2, ignore: n = [] } = {}) => qp(Jp(e, n), t), vc = (e, t) => {
    var _a2;
    const n = (_a2 = Et()) == null ? void 0 : _a2.appContext.components;
    return n ? e in n || rt(e) in n || gr(rt(e)) in n : false;
  }, Xp = fe({
    name: "FadeInExpandTransition",
    props: {
      group: Boolean,
      appear: Boolean,
      width: Boolean,
      mode: String,
      onLeave: Function,
      onAfterLeave: Function,
      onAfterEnter: Function
    },
    setup(e, { slots: t }) {
      const n = (l) => {
        l.style[e.width ? "maxWidth" : "maxHeight"] = `${l.offsetHeight}px`, l.offsetWidth;
      }, r = (l) => {
        var _a2;
        l.style[e.width ? "maxWidth" : "maxHeight"] = "0", l.offsetWidth, (_a2 = e.onLeave) == null ? void 0 : _a2.call(e);
      }, o = (l) => {
        var _a2;
        l.style[e.width ? "maxWidth" : "maxHeight"] = "", (_a2 = e.onAfterLeave) == null ? void 0 : _a2.call(e);
      }, s = (l) => {
        if (l.style.transition = "none", e.width) {
          const a = l.offsetWidth;
          l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${a}px`;
        } else {
          const a = l.offsetHeight;
          l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${a}px`;
        }
        l.offsetWidth;
      }, i = (l) => {
        var _a2;
        l.style[e.width ? "maxWidth" : "maxHeight"] = "", (_a2 = e.onAfterEnter) == null ? void 0 : _a2.call(e);
      };
      return () => J(e.group ? cd : go, {
        name: e.width ? "fade-in-width-expand" : "fade-in-height-expand",
        appear: e.appear,
        onEnter: s,
        onAfterEnter: i,
        onBeforeLeave: n,
        onLeave: r,
        onAfterLeave: o,
        ...e.group ? void 0 : {
          mode: e.mode
        }
      }, t);
    }
  }), _c = Symbol(""), il = qe(false);
  typeof document < "u" && (il.value = sl(), new MutationObserver(() => {
    il.value = sl();
  }).observe(document.documentElement, {
    attributeFilter: [
      "data-theme"
    ],
    attributes: true
  }));
  const Zp = (e) => {
    const t = Gh();
    return N(() => {
      const n = Ee(e);
      return n[t.value] ?? n["/"] ?? Object.values(n)[0];
    });
  }, Fs = Zp, em = () => {
    const e = Kh();
    return N(() => Object.keys(e.value));
  };
  var tm = {
    "/": {
      backToTop: "Back to top"
    }
  };
  const nm = fe({
    name: "BackToTop",
    setup() {
      const e = ic(), t = Fs(tm), n = Ae(), { height: r } = Np(n), { height: o } = $p(), { y: s } = Mp(), i = N(() => (e.value.backToTop ?? true) && s.value > 100), l = N(() => s.value / (r.value - o.value) * 100);
      return ct(() => {
        n.value = document.body;
      }), () => J(go, {
        name: "fade-in"
      }, () => i.value ? J("button", {
        type: "button",
        class: "vp-back-to-top-button",
        "aria-label": t.value.backToTop,
        onClick: () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      }, [
        J("span", {
          class: "vp-scroll-progress",
          role: "progressbar",
          "aria-labelledby": "loadinglabel",
          "aria-valuenow": l.value
        }, J("svg", J("circle", {
          cx: "26",
          cy: "26",
          r: "24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "4",
          "stroke-dasharray": `${Math.PI * l.value * 0.48} ${Math.PI * (100 - l.value) * 0.48}`
        }))),
        J("div", {
          class: "back-to-top-icon"
        })
      ]) : null);
    }
  }), rm = Wt({
    rootComponents: [
      nm
    ]
  }), om = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rm
  }, Symbol.toStringTag, {
    value: "Module"
  })), sm = /language-(shellscript|shell|bash|sh|zsh)/, im = ({ selector: e, ignoreSelector: t, inlineSelector: n, duration: r = 2e3, locales: o, showInMobile: s, transform: i }) => {
    const l = Hs("(max-width: 419px)"), a = N(() => !l.value || s), u = Fs(o), c = (_) => {
      var _a2;
      if (_.hasAttribute("copy-code")) return;
      const w = document.createElement("button");
      w.type = "button", w.classList.add("vp-copy-code-button"), w.setAttribute("aria-label", u.value.copy), w.dataset.copied = u.value.copied, (_a2 = _.parentElement) == null ? void 0 : _a2.insertBefore(w, _), _.setAttribute("copy-code", "");
    }, f = () => {
      document.body.classList.toggle("no-copy-code", !a.value), a.value && document.querySelectorAll(e).forEach((_) => {
        c(_);
      });
    };
    Ms(a, () => Un(f), {
      flush: "post"
    }), Tr((_) => {
      _ !== "beforeUnmount" && f();
    });
    const { copy: h } = Cp({
      legacy: true
    }), p = /* @__PURE__ */ new WeakMap(), y = async (_, w, R) => {
      const S = w.cloneNode(true);
      i && i(S);
      let g = S.textContent || "";
      if (sm.test(_.className) && (g = g.replaceAll(/^ *(\$|>) /gm, "")), await h(g), r <= 0) return;
      R.classList.add("copied"), clearTimeout(p.get(R));
      const v = setTimeout(() => {
        R.classList.remove("copied"), R.blur(), p.delete(R);
      }, r);
      p.set(R, v);
    };
    Ze("click", (_) => {
      const w = _.target;
      if (a.value && w.matches('div[class*="language-"] > button.vp-copy-code-button')) {
        const R = w.parentElement, S = w.nextElementSibling;
        if (!R || !S) return;
        y(R, S, w);
      }
    }, {
      passive: true
    });
  };
  var lm = {
    "/": {
      copy: "Copy code",
      copied: "Copied"
    }
  };
  const am = Wt({
    setup: () => {
      im({
        selector: '[vp-content] div[class*="language-"] pre',
        ignoreSelector: "",
        inlineSelector: "",
        locales: lm,
        duration: 2e3,
        showInMobile: false
      });
    }
  }), cm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: am
  }, Symbol.toStringTag, {
    value: "Module"
  })), um = Wt({
    setup() {
      Ze("beforeprint", () => {
        document.querySelectorAll("details").forEach((e) => {
          e.open = true;
        });
      }, {
        passive: true
      });
    }
  }), fm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: um
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var ll = {
    provider: "github",
    pattern: {
      commit: ":repo/commit/:hash",
      issue: ":repo/issues/:issue",
      tag: ":repo/releases/tag/:tag"
    },
    repo: ""
  };
  const al = typeof ll > "u" ? {} : ll, dm = (e, t) => !e || wr(e) ? e : t === "github" ? `https://github.com/${e}` : t === "gitee" ? `https://gitee.com/${e}` : e, hm = /#(\d+)/g, pm = (e = true) => {
    const { frontmatter: t, lang: n, page: r } = bo(), { pattern: o = {}, provider: s } = al, i = dm(al.repo, s);
    return N(() => {
      var _a2;
      if (t.value.changelog === false || !Ee(e)) return [];
      const l = new Intl.DateTimeFormat(n.value, {
        dateStyle: "short"
      });
      return (((_a2 = r.value.git) == null ? void 0 : _a2.changelog) ?? []).map((a) => {
        const u = Object.assign({
          date: l.format(a.time)
        }, a);
        return o.issue && i && (u.message = u.message.replace(hm, (c, f) => `<a href="${o.issue.replace(":issue", f).replace(":repo", i)}" target="_blank" rel="noopener noreferrer">${c}</a>`)), o.commit && i && (u.commitUrl = o.commit.replace(":hash", u.hash).replace(":repo", i)), o.tag && i && u.tag && (u.tagUrl = o.tag.replace(":tag", u.tag).replace(":repo", i)), u;
      });
    });
  }, bc = (e = true) => {
    const { frontmatter: t, page: n } = bo();
    return N(() => t.value.contributors === false || !Ee(e) ? [] : n.value.git.contributors ?? []);
  };
  var cl = {
    "/": {
      contributors: "Contributors",
      changelog: "Changelog",
      timeOn: "on",
      viewChangelog: "View All Changelog",
      latestUpdateAt: "Last Updated"
    }
  };
  const mm = typeof cl > "u" ? {} : cl, js = () => Fs(mm), yc = (e = true) => {
    const { lang: t, page: n } = bo(), r = js();
    return N(() => {
      var _a2, _b, _c2;
      if (!Ee(e)) return null;
      const o = ((_a2 = n.value.git) == null ? void 0 : _a2.updatedTime) ?? ((_c2 = (_b = n.value.git) == null ? void 0 : _b.changelog) == null ? void 0 : _c2[0].time);
      if (!o) return null;
      const s = new Date(o), i = new Intl.DateTimeFormat(t.value, {
        dateStyle: "short",
        timeStyle: "short"
      }).format(o);
      return {
        date: s,
        text: i,
        iso: s.toISOString(),
        locale: r.value.latestUpdateAt
      };
    });
  }, Ec = ({ level: e = 2, text: t, anchor: n }) => J(`h${e || 2}`, {
    id: n,
    tabindex: "-1"
  }, J("a", {
    href: `#${n}`,
    class: "header-anchor"
  }, J("span", t))), gm = ({ name: e, url: t, avatar: n }) => J(t ? "a" : "span", {
    href: t,
    target: "_blank",
    rel: "noreferrer",
    class: "vp-contributor"
  }, [
    n ? J("img", {
      src: n,
      alt: "",
      class: "vp-contributor-avatar"
    }) : null,
    J("span", {
      class: "vp-contributor-name"
    }, e)
  ]), vm = fe({
    name: "GitContributors",
    props: {
      title: String,
      headerLevel: {
        type: Number,
        default: 2
      }
    },
    setup(e) {
      const t = bc(), n = js();
      return () => t.value.length > 0 ? [
        J(Ec, {
          level: e.headerLevel,
          anchor: "doc-contributors",
          text: e.title || n.value.contributors
        }),
        J("div", {
          class: "vp-contributors"
        }, t.value.map((r) => J(gm, r)))
      ] : null;
    }
  }), _m = fe({
    name: "GitChangelog",
    props: {
      title: String,
      headerLevel: {
        type: Number,
        default: 2
      }
    },
    setup(e) {
      const t = pm(), n = js(), r = yc(), [o, s] = Ds(), i = () => J("div", {
        class: "vp-changelog-header",
        onClick: () => s()
      }, [
        J("div", {
          class: "vp-latest-updated"
        }, [
          J("span", {
            class: "vp-changelog-icon"
          }),
          J("span", {
            "data-allow-mismatch": ""
          }, r.value.text)
        ]),
        J("div", [
          J("span", {
            class: "vp-changelog-menu-icon"
          }),
          J("span", n.value.viewChangelog)
        ])
      ]), l = ({ item: u }) => J("li", {
        class: "vp-changelog-item-tag"
      }, J("div", [
        J("a", {
          class: "vp-changelog-tag"
        }, J("code", u.tag)),
        J("span", {
          class: "vp-changelog-date",
          "data-allow-mismatch": ""
        }, [
          n.value.timeOn,
          " ",
          J("time", {
            datetime: new Date(u.time).toISOString()
          }, u.date)
        ])
      ])), a = ({ item: u }) => J("li", {
        class: "vp-changelog-item-commit"
      }, [
        J(u.commitUrl ? "a" : "span", {
          class: "vp-changelog-hash",
          href: u.commitUrl,
          target: "_blank",
          rel: "noreferrer"
        }, [
          J("code", u.hash.slice(0, 5))
        ]),
        J("span", {
          class: "vp-changelog-divider"
        }, "-"),
        J("span", {
          class: "vp-changelog-message",
          innerHTML: u.message
        }),
        J("span", {
          class: "vp-changelog-date",
          "data-allow-mismatch": ""
        }, [
          n.value.timeOn || "on",
          " ",
          J("time", {
            datetime: new Date(u.time).toISOString()
          }, u.date)
        ])
      ]);
      return () => t.value.length > 0 ? [
        J(Ec, {
          level: e.headerLevel,
          anchor: "doc-changelog",
          text: e.title || n.value.changelog
        }),
        J("div", {
          class: [
            "vp-changelog-wrapper",
            {
              active: o.value
            }
          ]
        }, [
          J(i),
          J("ul", {
            class: "vp-changelog-list"
          }, [
            t.value.map((u) => u.tag ? J(l, {
              item: u,
              key: u.tag
            }) : J(a, {
              item: u,
              key: u.hash
            }))
          ])
        ])
      ] : null;
    }
  }), bm = {
    enhance: ({ app: e }) => {
      e.component("GitContributors", vm), e.component("GitChangelog", _m);
    }
  }, ym = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bm
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var un = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dr = function(t) {
    return t.tagName === "IMG";
  }, Em = function(t) {
    return NodeList.prototype.isPrototypeOf(t);
  }, Br = function(t) {
    return t && t.nodeType === 1;
  }, ul = function(t) {
    var n = t.currentSrc || t.src;
    return n.substr(-4).toLowerCase() === ".svg";
  }, fl = function(t) {
    try {
      return Array.isArray(t) ? t.filter(Dr) : Em(t) ? [].slice.call(t).filter(Dr) : Br(t) ? [
        t
      ].filter(Dr) : typeof t == "string" ? [].slice.call(document.querySelectorAll(t)).filter(Dr) : [];
    } catch {
      throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
    }
  }, wm = function(t) {
    var n = document.createElement("div");
    return n.classList.add("medium-zoom-overlay"), n.style.background = t, n;
  }, Sm = function(t) {
    var n = t.getBoundingClientRect(), r = n.top, o = n.left, s = n.width, i = n.height, l = t.cloneNode(), a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, u = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return l.removeAttribute("id"), l.style.position = "absolute", l.style.top = r + a + "px", l.style.left = o + u + "px", l.style.width = s + "px", l.style.height = i + "px", l.style.transform = "", l;
  }, Tn = function(t, n) {
    var r = un({
      bubbles: false,
      cancelable: false,
      detail: void 0
    }, n);
    if (typeof window.CustomEvent == "function") return new CustomEvent(t, r);
    var o = document.createEvent("CustomEvent");
    return o.initCustomEvent(t, r.bubbles, r.cancelable, r.detail), o;
  }, Tm = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = window.Promise || function(E) {
      function D() {
      }
      E(D, D);
    }, o = function(E) {
      var D = E.target;
      if (D === L) {
        y();
        return;
      }
      g.indexOf(D) !== -1 && _({
        target: D
      });
    }, s = function() {
      if (!($ || !T.original)) {
        var E = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        Math.abs(Y - E) > H.scrollOffset && setTimeout(y, 150);
      }
    }, i = function(E) {
      var D = E.key || E.keyCode;
      (D === "Escape" || D === "Esc" || D === 27) && y();
    }, l = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, D = E;
      if (E.background && (L.style.background = E.background), E.container && E.container instanceof Object && (D.container = un({}, H.container, E.container)), E.template) {
        var M = Br(E.template) ? E.template : document.querySelector(E.template);
        D.template = M;
      }
      return H = un({}, H, D), g.forEach(function(j) {
        j.dispatchEvent(Tn("medium-zoom:update", {
          detail: {
            zoom: k
          }
        }));
      }), k;
    }, a = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return e(un({}, H, E));
    }, u = function() {
      for (var E = arguments.length, D = Array(E), M = 0; M < E; M++) D[M] = arguments[M];
      var j = D.reduce(function(x, Z) {
        return [].concat(x, fl(Z));
      }, []);
      return j.filter(function(x) {
        return g.indexOf(x) === -1;
      }).forEach(function(x) {
        g.push(x), x.classList.add("medium-zoom-image");
      }), v.forEach(function(x) {
        var Z = x.type, U = x.listener, ce = x.options;
        j.forEach(function(Ne) {
          Ne.addEventListener(Z, U, ce);
        });
      }), k;
    }, c = function() {
      for (var E = arguments.length, D = Array(E), M = 0; M < E; M++) D[M] = arguments[M];
      T.zoomed && y();
      var j = D.length > 0 ? D.reduce(function(x, Z) {
        return [].concat(x, fl(Z));
      }, []) : g;
      return j.forEach(function(x) {
        x.classList.remove("medium-zoom-image"), x.dispatchEvent(Tn("medium-zoom:detach", {
          detail: {
            zoom: k
          }
        }));
      }), g = g.filter(function(x) {
        return j.indexOf(x) === -1;
      }), k;
    }, f = function(E, D) {
      var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return g.forEach(function(j) {
        j.addEventListener("medium-zoom:" + E, D, M);
      }), v.push({
        type: "medium-zoom:" + E,
        listener: D,
        options: M
      }), k;
    }, h = function(E, D) {
      var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return g.forEach(function(j) {
        j.removeEventListener("medium-zoom:" + E, D, M);
      }), v = v.filter(function(j) {
        return !(j.type === "medium-zoom:" + E && j.listener.toString() === D.toString());
      }), k;
    }, p = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, D = E.target, M = function() {
        var x = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }, Z = void 0, U = void 0;
        if (H.container) if (H.container instanceof Object) x = un({}, x, H.container), Z = x.width - x.left - x.right - H.margin * 2, U = x.height - x.top - x.bottom - H.margin * 2;
        else {
          var ce = Br(H.container) ? H.container : document.querySelector(H.container), Ne = ce.getBoundingClientRect(), He = Ne.width, We = Ne.height, zt = Ne.left, Gt = Ne.top;
          x = un({}, x, {
            width: He,
            height: We,
            left: zt,
            top: Gt
          });
        }
        Z = Z || x.width - H.margin * 2, U = U || x.height - H.margin * 2;
        var ot = T.zoomedHd || T.original, et = ul(ot) ? Z : ot.naturalWidth || Z, C = ul(ot) ? U : ot.naturalHeight || U, K = ot.getBoundingClientRect(), z = K.top, te = K.left, ue = K.width, be = K.height, d = Math.min(Math.max(ue, et), Z) / ue, m = Math.min(Math.max(be, C), U) / be, b = Math.min(d, m), O = (-te + (Z - ue) / 2 + H.margin + x.left) / b, A = (-z + (U - be) / 2 + H.margin + x.top) / b, P = "scale(" + b + ") translate3d(" + O + "px, " + A + "px, 0)";
        T.zoomed.style.transform = P, T.zoomedHd && (T.zoomedHd.style.transform = P);
      };
      return new r(function(j) {
        if (D && g.indexOf(D) === -1) {
          j(k);
          return;
        }
        var x = function He() {
          $ = false, T.zoomed.removeEventListener("transitionend", He), T.original.dispatchEvent(Tn("medium-zoom:opened", {
            detail: {
              zoom: k
            }
          })), j(k);
        };
        if (T.zoomed) {
          j(k);
          return;
        }
        if (D) T.original = D;
        else if (g.length > 0) {
          var Z = g;
          T.original = Z[0];
        } else {
          j(k);
          return;
        }
        if (T.original.dispatchEvent(Tn("medium-zoom:open", {
          detail: {
            zoom: k
          }
        })), Y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, $ = true, T.zoomed = Sm(T.original), document.body.appendChild(L), H.template) {
          var U = Br(H.template) ? H.template : document.querySelector(H.template);
          T.template = document.createElement("div"), T.template.appendChild(U.content.cloneNode(true)), document.body.appendChild(T.template);
        }
        if (T.original.parentElement && T.original.parentElement.tagName === "PICTURE" && T.original.currentSrc && (T.zoomed.src = T.original.currentSrc), document.body.appendChild(T.zoomed), window.requestAnimationFrame(function() {
          document.body.classList.add("medium-zoom--opened");
        }), T.original.classList.add("medium-zoom-image--hidden"), T.zoomed.classList.add("medium-zoom-image--opened"), T.zoomed.addEventListener("click", y), T.zoomed.addEventListener("transitionend", x), T.original.getAttribute("data-zoom-src")) {
          T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("srcset"), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading"), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-src"), T.zoomedHd.onerror = function() {
            clearInterval(ce), console.warn("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, M();
          };
          var ce = setInterval(function() {
            T.zoomedHd.complete && (clearInterval(ce), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", y), document.body.appendChild(T.zoomedHd), M());
          }, 10);
        } else if (T.original.hasAttribute("srcset")) {
          T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading");
          var Ne = T.zoomedHd.addEventListener("load", function() {
            T.zoomedHd.removeEventListener("load", Ne), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", y), document.body.appendChild(T.zoomedHd), M();
          });
        } else M();
      });
    }, y = function() {
      return new r(function(E) {
        if ($ || !T.original) {
          E(k);
          return;
        }
        var D = function M() {
          T.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(L), T.zoomed.classList.remove("medium-zoom-image--opened"), T.template && document.body.removeChild(T.template), $ = false, T.zoomed.removeEventListener("transitionend", M), T.original.dispatchEvent(Tn("medium-zoom:closed", {
            detail: {
              zoom: k
            }
          })), T.original = null, T.zoomed = null, T.zoomedHd = null, T.template = null, E(k);
        };
        $ = true, document.body.classList.remove("medium-zoom--opened"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = ""), T.template && (T.template.style.transition = "opacity 150ms", T.template.style.opacity = 0), T.original.dispatchEvent(Tn("medium-zoom:close", {
          detail: {
            zoom: k
          }
        })), T.zoomed.addEventListener("transitionend", D);
      });
    }, _ = function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, D = E.target;
      return T.original ? y() : p({
        target: D
      });
    }, w = function() {
      return H;
    }, R = function() {
      return g;
    }, S = function() {
      return T.original;
    }, g = [], v = [], $ = false, Y = 0, H = n, T = {
      original: null,
      zoomed: null,
      zoomedHd: null,
      template: null
    };
    Object.prototype.toString.call(t) === "[object Object]" ? H = t : (t || typeof t == "string") && u(t), H = un({
      margin: 0,
      background: "#fff",
      scrollOffset: 40,
      container: null,
      template: null
    }, H);
    var L = wm(H.background);
    document.addEventListener("click", o), document.addEventListener("keyup", i), document.addEventListener("scroll", s), window.addEventListener("resize", y);
    var k = {
      open: p,
      close: y,
      toggle: _,
      update: l,
      clone: a,
      attach: u,
      detach: c,
      on: f,
      off: h,
      getOptions: w,
      getImages: R,
      getZoomedImage: S
    };
    return k;
  };
  function Am(e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (!(typeof document > "u")) {
      var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
      o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
    }
  }
  var Cm = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
  Am(Cm);
  const wc = Symbol("mediumZoom"), xm = () => {
    const e = Ue(wc);
    if (!e) throw new Error("useMediumZoom() is called without provider.");
    return e;
  };
  var Lm = {};
  const Rm = "[vp-content] > img, [vp-content] :not(a) > img", Om = Lm, Pm = Wt({
    enhance({ app: e }) {
      const t = Tm(Om);
      t.refresh = (n = Rm) => {
        t.detach(), t.attach(n);
      }, e.provide(wc, t);
    },
    setup() {
      const e = xm();
      Tr((t) => {
        t !== "beforeUnmount" && e.refresh();
      });
    }
  }), Im = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pm
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const dl = (e, t) => {
    e.classList.add(t);
  }, hl = (e, t) => {
    e.classList.remove(t);
  }, km = (e) => {
    e == null ? void 0 : e.remove();
  }, jo = (e, t, n) => e < t ? t : e > n ? n : e, pl = (e) => (-1 + e) * 100, Nm = /* @__PURE__ */ (() => {
    const e = [], t = () => {
      const n = e.shift();
      n && n(t);
    };
    return (n) => {
      e.push(n), e.length === 1 && t();
    };
  })(), Dm = (e) => e.replace(/^-ms-/, "ms-").replaceAll(/-([\da-z])/gi, (t, n) => n.toUpperCase()), Mr = /* @__PURE__ */ (() => {
    const e = [
      "Webkit",
      "O",
      "Moz",
      "ms"
    ], t = {}, n = (s) => {
      const { style: i } = document.body;
      if (s in i) return s;
      const l = s.charAt(0).toUpperCase() + s.slice(1);
      let a = e.length;
      for (; a--; ) {
        const u = `${e[a]}${l}`;
        if (u in i) return u;
      }
      return s;
    }, r = (s) => {
      const i = Dm(s);
      return t[i] ?? (t[i] = n(i));
    }, o = (s, i, l) => {
      s.style[r(i)] = l;
    };
    return (s, i) => {
      for (const [l, a] of Gp(i)) zp(a) && o(s, l, a);
    };
  })(), Pt = {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  }, Re = {
    percent: null,
    isRendered: () => !!document.querySelector("#nprogress"),
    set: (e) => {
      const { speed: t, easing: n } = Pt, r = Re.isStarted(), o = jo(e, Pt.minimum, 1);
      Re.percent = o === 1 ? null : o;
      const s = Re.render(!r), i = s.querySelector(Pt.barSelector);
      return s.offsetWidth, Nm((l) => {
        Mr(i, {
          transform: `translate3d(${pl(o)}%,0,0)`,
          transition: `all ${t}ms ${n}`
        }), o === 1 ? (Mr(s, {
          transition: "none",
          opacity: "1"
        }), s.offsetWidth, setTimeout(() => {
          Mr(s, {
            transition: `all ${t}ms linear`,
            opacity: "0"
          }), setTimeout(() => {
            Re.remove(), l();
          }, t);
        }, t)) : setTimeout(() => {
          l();
        }, t);
      }), Re;
    },
    isStarted: () => typeof Re.percent == "number",
    start: () => {
      Re.percent || Re.set(0);
      const e = () => {
        setTimeout(() => {
          Re.percent && (Re.trickle(), e());
        }, Pt.trickleSpeed);
      };
      return e(), Re;
    },
    done: (e) => !e && !Re.percent ? Re : Re.increase(0.3 + 0.5 * Math.random()).set(1),
    increase: (e) => {
      let { percent: t } = Re;
      return t ? (t = jo(t + (typeof e == "number" ? e : (1 - t) * jo(Math.random() * t, 0.1, 0.95)), 0, 0.994), Re.set(t)) : Re.start();
    },
    trickle: () => Re.increase(Math.random() * Pt.trickleRate),
    render: (e) => {
      if (Re.isRendered()) return document.querySelector("#nprogress");
      dl(document.documentElement, "nprogress-busy");
      const t = document.createElement("div");
      t.id = "nprogress", t.innerHTML = Pt.template;
      const n = t.querySelector(Pt.barSelector), r = document.querySelector(Pt.parent), o = e ? "-100" : pl(Re.percent ?? 0);
      return Mr(n, {
        transition: "all 0 linear",
        transform: `translate3d(${o}%,0,0)`
      }), r && (r !== document.body && dl(r, "nprogress-custom-parent"), r.append(t)), t;
    },
    remove: () => {
      hl(document.documentElement, "nprogress-busy"), hl(document.querySelector(Pt.parent), "nprogress-custom-parent"), km(document.querySelector("#nprogress"));
    }
  }, Mm = () => {
    ct(() => {
      const e = Sr(), t = /* @__PURE__ */ new Set();
      t.add(e.currentRoute.value.path), e.beforeEach((n) => {
        t.has(n.path) || Re.start();
      }), e.afterEach((n) => {
        t.add(n.path), Re.done();
      });
    });
  }, $m = Wt({
    setup() {
      Mm();
    }
  }), Hm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $m
  }, Symbol.toStringTag, {
    value: "Module"
  })), Vm = Object.freeze(Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, {
    value: "Module"
  })), Fm = "VUEPRESS_CODE_TAB_STORE", $r = Vs(Fm, {}), jm = fe({
    name: "CodeTabs",
    props: {
      active: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        required: true
      },
      tabId: String
    },
    slots: Object,
    setup(e, { slots: t }) {
      let n = e.data.map(() => ia());
      const r = qe(e.active), o = Ae([]), s = () => {
        e.tabId && ($r.value[e.tabId] = e.data[r.value].id);
      }, i = (c = r.value) => {
        r.value = c < o.value.length - 1 ? c + 1 : 0, o.value[r.value].focus();
      }, l = (c = r.value) => {
        r.value = c > 0 ? c - 1 : o.value.length - 1, o.value[r.value].focus();
      }, a = (c, f) => {
        c.key === " " || c.key === "Enter" ? (c.preventDefault(), r.value = f) : c.key === "ArrowRight" ? (c.preventDefault(), i()) : c.key === "ArrowLeft" && (c.preventDefault(), l()), e.tabId && ($r.value[e.tabId] = e.data[r.value].id);
      }, u = () => {
        if (e.tabId) {
          const c = e.data.findIndex(({ id: f }) => $r.value[e.tabId] === f);
          if (c !== -1) return c;
        }
        return e.active;
      };
      return ct(() => {
        r.value = u(), Ye(() => e.tabId && $r.value[e.tabId], (c, f) => {
          if (e.tabId && c !== f) {
            const h = e.data.findIndex(({ id: p }) => p === c);
            h !== -1 && (r.value = h);
          }
        });
      }), () => e.data.length ? J("div", {
        class: "vp-code-tabs"
      }, [
        J("div", {
          class: "vp-code-tabs-nav",
          role: "tablist"
        }, e.data.map(({ id: c }, f) => {
          const h = f === r.value;
          return J("button", {
            type: "button",
            ref: (p) => {
              p && (o.value[f] = p);
            },
            class: [
              "vp-code-tab-nav",
              {
                active: h
              }
            ],
            role: "tab",
            "aria-controls": n[f],
            "aria-selected": h,
            onClick: () => {
              r.value = f, s();
            },
            onKeydown: (p) => {
              a(p, f);
            }
          }, t[`title${f}`]({
            value: c,
            isActive: h
          }));
        })),
        e.data.map(({ id: c }, f) => {
          const h = f === r.value;
          return J("div", {
            class: [
              "vp-code-tab",
              {
                active: h
              }
            ],
            id: n[f],
            role: "tabpanel",
            "aria-expanded": h
          }, [
            J("div", {
              class: "vp-code-tab-title"
            }, t[`title${f}`]({
              value: c,
              isActive: h
            })),
            t[`tab${f}`]({
              value: c,
              isActive: h
            })
          ]);
        })
      ]) : null;
    }
  }), Bm = "VUEPRESS_TAB_STORE", Bo = Vs(Bm, {}), Um = fe({
    name: "Tabs",
    props: {
      active: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        required: true
      },
      tabId: String
    },
    slots: Object,
    setup(e, { slots: t }) {
      let n = e.data.map(() => ia());
      const r = qe(e.active), o = Ae([]), s = () => {
        e.tabId && (Bo.value[e.tabId] = e.data[r.value].id);
      }, i = (c = r.value) => {
        r.value = c < o.value.length - 1 ? c + 1 : 0, o.value[r.value].focus();
      }, l = (c = r.value) => {
        r.value = c > 0 ? c - 1 : o.value.length - 1, o.value[r.value].focus();
      }, a = (c, f) => {
        c.key === " " || c.key === "Enter" ? (c.preventDefault(), r.value = f) : c.key === "ArrowRight" ? (c.preventDefault(), i()) : c.key === "ArrowLeft" && (c.preventDefault(), l()), s();
      }, u = () => {
        if (e.tabId) {
          const c = e.data.findIndex(({ id: f }) => Bo.value[e.tabId] === f);
          if (c !== -1) return c;
        }
        return e.active;
      };
      return ct(() => {
        r.value = u(), Ye(() => e.tabId && Bo.value[e.tabId], (c, f) => {
          if (e.tabId && c !== f) {
            const h = e.data.findIndex(({ id: p }) => p === c);
            h !== -1 && (r.value = h);
          }
        });
      }), () => e.data.length ? J("div", {
        class: "vp-tabs"
      }, [
        J("div", {
          class: "vp-tabs-nav",
          role: "tablist"
        }, e.data.map(({ id: c }, f) => {
          const h = f === r.value;
          return J("button", {
            type: "button",
            ref: (p) => {
              p && (o.value[f] = p);
            },
            class: [
              "vp-tab-nav",
              {
                active: h
              }
            ],
            role: "tab",
            "aria-controls": n[f],
            "aria-selected": h,
            onClick: () => {
              r.value = f, s();
            },
            onKeydown: (p) => {
              a(p, f);
            }
          }, t[`title${f}`]({
            value: c,
            isActive: h
          }));
        })),
        e.data.map(({ id: c }, f) => {
          const h = f === r.value;
          return J("div", {
            class: [
              "vp-tab",
              {
                active: h
              }
            ],
            id: n[f],
            role: "tabpanel",
            "aria-expanded": h
          }, [
            J("div", {
              class: "vp-tab-title"
            }, t[`title${f}`]({
              value: c,
              isActive: h
            })),
            t[`tab${f}`]({
              value: c,
              isActive: h
            })
          ]);
        })
      ]) : null;
    }
  }), Wm = {
    enhance: ({ app: e }) => {
      e.component("CodeTabs", jm), e.component("Tabs", Um);
    }
  }, zm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wm
  }, Symbol.toStringTag, {
    value: "Module"
  })), Gm = JSON.parse(`{"navbar":[{"text":"Home","link":"/"},{"text":"Beginner","collapsable":false,"children":["/beginner/tutorial1-window/","/beginner/tutorial2-surface/","/beginner/tutorial3-pipeline/","/beginner/tutorial4-buffer/","/beginner/tutorial5-textures/","/beginner/tutorial6-uniforms/","/beginner/tutorial7-instancing/","/beginner/tutorial8-depth/","/beginner/tutorial9-models/"]},{"text":"Intermediate","collapsable":false,"children":["/intermediate/tutorial10-lighting/","/intermediate/tutorial11-normals/","/intermediate/tutorial12-camera/","/intermediate/tutorial13-hdr/"]},{"text":"Compute Pipelines","collapsable":true,"children":["/compute/introduction/","/compute/sorting/"]},{"text":"Showcase","collapsable":true,"children":["/showcase/","/showcase/mipmaps/","/showcase/stencil/","/showcase/windowless/","/showcase/gifs/","/showcase/pong/","/showcase/alignment/"]},{"text":"News","collapsable":true,"children":["/news/30.0/","/news/29.0/","/news/vuepress-v2/","/news/28.0/","/news/27.0/","/news/26.0.1/","/news/update-to-winit-0.30/","/news/25.0/","/news/24.0/","/news/22.0/","/news/0.18 and hdr/","/news/0.17/","/news/0.16/","/news/0.15/","/news/0.14/","/news/0.13/","/news/0.12/","/news/pre-0.12/"]}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"logo":null,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`), Km = qe(Gm), Sc = () => Km, Tc = Symbol(""), qm = () => {
    const e = Ue(Tc);
    if (!e) throw new Error("useThemeLocaleData() is called without provider.");
    return e;
  }, Ym = (e, t) => {
    const { locales: n, ...r } = e;
    return {
      ...r,
      ...n == null ? void 0 : n[t]
    };
  }, Jm = Wt({
    enhance({ app: e }) {
      const t = Sc(), n = e._context.provides[xs], r = N(() => Ym(t.value, n.routeLocale.value));
      e.provide(Tc, r), Object.defineProperties(e.config.globalProperties, {
        $theme: {
          get() {
            return t.value;
          }
        },
        $themeLocale: {
          get() {
            return r.value;
          }
        }
      });
    }
  }), Qm = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Jm
  }, Symbol.toStringTag, {
    value: "Module"
  })), $e = () => ({
    ...bo(),
    theme: Sc(),
    themeLocale: qm()
  }), ml = (e) => {
    const t = globalThis.document.documentElement;
    t.dataset.theme = e ? "dark" : "light";
  }, Xm = (e) => {
    ct(() => {
      Ms(e, ml);
    }), ho(() => {
      ml(e.value);
    });
  }, Bs = () => {
    const e = Ue(_c);
    if (!e) throw new Error("useDarkMode() is called without provider.");
    return e;
  }, Zm = () => {
    const { themeLocale: e } = $e(), t = Op(), n = Vs("vuepress-color-scheme", e.value.colorMode), r = N({
      get() {
        return e.value.colorModeSwitch ? n.value === "auto" ? t.value : n.value === "dark" : e.value.colorMode === "dark";
      },
      set(o) {
        o === t.value ? n.value = "auto" : n.value = o ? "dark" : "light";
      }
    });
    en(_c, r), Xm(r);
  }, Ac = Symbol("headers"), eg = () => {
    const e = cc(Ac);
    if (!e) throw new Error("useHeaders() is called without provider.");
    return e;
  }, tg = () => {
    const { frontmatter: e, themeLocale: t } = $e(), n = qe([]), r = N(() => e.value.sidebarDepth ?? t.value.sidebarDepth ?? 2), o = () => {
      if (r.value <= 0) {
        n.value = [];
        return;
      }
      n.value = Qp({
        levels: [
          2,
          r.value + 1
        ],
        ignore: [
          ".vp-badge"
        ]
      });
    };
    cp(Ac, n), Tr((s) => {
      s === "beforeUnmount" ? n.value = [] : o();
    });
  };
  let Uo = null, Wo = null;
  const ng = {
    wait: () => Uo,
    pending: () => {
      Uo = new Promise((e) => {
        Wo = e;
      });
    },
    resolve: () => {
      Wo == null ? void 0 : Wo(), Uo = null, Wo = null;
    }
  }, Cc = () => ng, jn = (e, t) => {
    const { notFound: n, meta: r, path: o } = dr(e, t);
    return n ? {
      text: o,
      link: o
    } : {
      text: r.title || o,
      link: o
    };
  }, Dn = (e = "", t = "") => pc(t) || Er(t) ? t : `${Pd(e)}${t}`, rg = (e) => ({
    text: e.title,
    link: e.link,
    children: Us(e.children)
  }), Us = (e) => e ? e.map((t) => rg(t)) : [], xc = (e, t) => [
    {
      text: e.title,
      children: Us(t)
    }
  ], Lc = (e, t, n, r = "") => {
    const o = (s, i) => {
      var _a2;
      const l = gt(s) ? jn(Dn(i, s)) : gt(s.link) ? {
        ...s,
        link: mc(s.link) ? jn(Dn(i, s.link)).link : s.link
      } : s;
      if ("children" in l) return {
        ...l,
        children: l.children.map((a) => o(a, Dn(i, l.prefix)))
      };
      if (l.link === n) {
        const a = ((_a2 = t[0]) == null ? void 0 : _a2.level) === 1 ? t[0].children : t;
        return {
          ...l,
          children: Us(a)
        };
      }
      return l;
    };
    return e.map((s) => o(s, r));
  }, og = (e, t, n, r) => {
    const o = Kp(e).sort((s, i) => i.length - s.length);
    for (const s of o) if (hc(decodeURI(r), s)) {
      const i = e[s];
      return i === false ? [] : i === "heading" ? xc(t, n) : Lc(i, n, r, s);
    }
    return console.warn(`${decodeURI(r)} is missing sidebar config.`), [];
  }, Rc = Symbol("sidebarItems"), Ws = () => {
    const e = Ue(Rc);
    if (!e) throw new Error("useSidebarItems() is called without provider.");
    return e;
  }, sg = (e, t, n, r, o) => e === false ? [] : e === "heading" ? xc(t, o) : Array.isArray(e) ? Lc(e, o, n, r) : Ts(e) ? og(e, t, o, n) : [], ig = () => {
    const { frontmatter: e, page: t, routeLocale: n, themeLocale: r } = $e(), o = eg(), s = sc(), i = N(() => !e.value.home && (e.value.sidebar ?? r.value.sidebar ?? "heading")), l = N(() => sg(i.value, t.value, s.value, n.value, o.value));
    en(Rc, l);
  }, lg = fe({
    __name: "Badge",
    props: {
      type: {
        default: "tip"
      },
      text: {
        default: ""
      },
      vertical: {
        default: ""
      }
    },
    setup(e) {
      return (t, n) => (V(), X("span", {
        class: je([
          "vp-badge",
          e.type
        ]),
        style: Bn(e.vertical ? {
          verticalAlign: e.vertical
        } : "")
      }, [
        Te(t.$slots, "default", {}, () => [
          nn(xe(e.text), 1)
        ])
      ], 6));
    }
  }), ag = fe({
    __name: "VPFadeSlideYTransition",
    emits: [
      "beforeEnter",
      "beforeLeave"
    ],
    setup(e) {
      return (t, n) => (V(), Pe(go, {
        name: "fade-in-down",
        mode: "out-in",
        onBeforeEnter: n[0] || (n[0] = (r) => t.$emit("beforeEnter")),
        onBeforeLeave: n[1] || (n[1] = (r) => t.$emit("beforeLeave"))
      }, {
        default: Le(() => [
          Te(t.$slots, "default")
        ]),
        _: 3
      }));
    }
  }), cg = {
    key: 0,
    class: "vp-features"
  }, ug = fe({
    __name: "VPHomeFeatures",
    setup(e) {
      const { frontmatter: t } = $e(), n = N(() => t.value.features ?? []);
      return (r, o) => n.value.length ? (V(), X("div", cg, [
        (V(true), X(_e, null, Bt(n.value, (s) => (V(), X("div", {
          key: s.title,
          class: "vp-feature"
        }, [
          re("h2", null, xe(s.title), 1),
          re("p", null, xe(s.details), 1)
        ]))), 128))
      ])) : Ce("", true);
    }
  }), fg = [
    "innerHTML"
  ], dg = [
    "textContent"
  ], hg = fe({
    __name: "VPHomeFooter",
    setup(e) {
      const t = ic(), n = N(() => t.value.footer), r = N(() => t.value.footerHtml);
      return (o, s) => n.value ? (V(), X(_e, {
        key: 0
      }, [
        r.value ? (V(), X("div", {
          key: 0,
          class: "vp-footer",
          "vp-footer": "",
          innerHTML: n.value
        }, null, 8, fg)) : (V(), X("div", {
          key: 1,
          class: "vp-footer",
          "vp-footer": "",
          textContent: xe(n.value)
        }, null, 8, dg))
      ], 64)) : Ce("", true);
    }
  }), Ht = fe({
    __name: "VPAutoLink",
    props: {
      config: {}
    },
    setup(e) {
      return (t, n) => (V(), Pe(ee(Xh), {
        config: e.config
      }, tf({
        before: Le(() => [
          Te(t.$slots, "before", To(Fr(e.config)))
        ]),
        after: Le(() => [
          Te(t.$slots, "after", To(Fr(e.config)))
        ]),
        _: 2
      }, [
        t.$slots.default ? {
          name: "default",
          fn: Le(() => [
            Te(t.$slots, "default", To(Fr(e.config)))
          ]),
          key: "0"
        } : void 0
      ]), 1032, [
        "config"
      ]));
    }
  }), pg = {
    class: "vp-hero"
  }, mg = {
    key: 0,
    id: "main-title"
  }, gg = {
    key: 1,
    class: "vp-hero-description"
  }, vg = {
    key: 2,
    class: "vp-hero-actions"
  }, _g = fe({
    __name: "VPHomeHero",
    setup(e) {
      const { frontmatter: t, siteLocale: n } = $e(), r = Bs(), o = N(() => t.value.heroText === null ? null : t.value.heroText || n.value.title || "Hello"), s = N(() => t.value.tagline === null ? null : t.value.tagline || n.value.description || "Welcome to your VuePress site"), i = N(() => r.value && t.value.heroImageDark !== void 0 ? t.value.heroImageDark : t.value.heroImage), l = N(() => t.value.heroAlt || o.value || "hero"), a = N(() => t.value.heroHeight ?? 280), u = N(() => Array.isArray(t.value.actions) ? t.value.actions.map(({ type: f = "primary", ...h }) => ({
        type: f,
        ...h
      })) : []), c = () => {
        if (!i.value) return null;
        const f = J("img", {
          class: "vp-hero-image",
          src: Os(i.value),
          alt: l.value,
          height: a.value
        });
        return t.value.heroImageDark === void 0 ? f : J(Ls, () => f);
      };
      return (f, h) => (V(), X("header", pg, [
        le(c),
        o.value ? (V(), X("h1", mg, xe(o.value), 1)) : Ce("", true),
        s.value ? (V(), X("p", gg, xe(s.value), 1)) : Ce("", true),
        u.value.length ? (V(), X("p", vg, [
          (V(true), X(_e, null, Bt(u.value, (p) => (V(), Pe(Ht, {
            key: p.text,
            class: je([
              "vp-hero-action-button",
              [
                p.type
              ]
            ]),
            config: p
          }, null, 8, [
            "class",
            "config"
          ]))), 128))
        ])) : Ce("", true)
      ]));
    }
  }), bg = {
    class: "vp-home"
  }, yg = {
    "vp-content": ""
  }, Eg = fe({
    __name: "VPHome",
    setup(e) {
      return (t, n) => (V(), X("main", bg, [
        le(_g),
        le(ug),
        re("div", yg, [
          le(ee(Rs))
        ]),
        le(hg)
      ]));
    }
  }), wg = [
    "aria-hidden"
  ], Sg = fe({
    __name: "VPNavbarBrand",
    setup(e) {
      const { routeLocale: t, siteLocale: n, themeLocale: r } = $e(), o = Bs(), s = N(() => r.value.home || t.value), i = N(() => n.value.title), l = N(() => o.value && r.value.logoDark !== void 0 ? r.value.logoDark : r.value.logo), a = N(() => r.value.logoAlt ?? i.value), u = N(() => i.value.toLocaleUpperCase().trim() === a.value.toLocaleUpperCase().trim()), c = () => {
        if (!l.value) return null;
        const f = J("img", {
          class: "vp-site-logo",
          src: Os(l.value),
          alt: a.value
        });
        return r.value.logoDark === void 0 ? f : J(Ls, () => f);
      };
      return (f, h) => (V(), Pe(ee(yo), {
        to: s.value
      }, {
        default: Le(() => [
          le(c),
          i.value ? (V(), X("span", {
            key: 0,
            class: je([
              "vp-site-name",
              {
                "vp-hide-mobile": l.value
              }
            ]),
            "aria-hidden": u.value
          }, xe(i.value), 11, wg)) : Ce("", true)
        ]),
        _: 1
      }, 8, [
        "to"
      ]));
    }
  }), Tg = [
    "aria-label"
  ], Ag = {
    class: "title"
  }, Cg = [
    "aria-label"
  ], xg = {
    class: "title"
  }, Lg = {
    class: "vp-navbar-dropdown"
  }, Rg = {
    class: "vp-navbar-dropdown-subtitle"
  }, Og = {
    key: 1
  }, Pg = {
    class: "vp-navbar-dropdown-subitem-wrapper"
  }, Ig = fe({
    __name: "VPNavbarDropdown",
    props: {
      config: {}
    },
    setup(e) {
      const [t, n] = Ds(), r = N(() => e.config.ariaLabel || e.config.text), o = (i, l) => l[l.length - 1] === i, s = (i) => {
        i.detail === 0 ? n() : n(false);
      };
      return Tr(() => {
        n(false);
      }), (i, l) => (V(), X("div", {
        class: je([
          "vp-navbar-dropdown-wrapper",
          {
            open: ee(t)
          }
        ])
      }, [
        re("button", {
          class: "vp-navbar-dropdown-title",
          type: "button",
          "aria-label": r.value,
          onClick: s
        }, [
          re("span", Ag, xe(e.config.text), 1),
          l[1] || (l[1] = re("span", {
            class: "arrow down"
          }, null, -1))
        ], 8, Tg),
        re("button", {
          class: "vp-navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": r.value,
          onClick: l[0] || (l[0] = () => ee(n)())
        }, [
          re("span", xg, xe(e.config.text), 1),
          re("span", {
            class: je([
              "arrow",
              ee(t) ? "down" : "right"
            ])
          }, null, 2)
        ], 8, Cg),
        le(ee(Xp), null, {
          default: Le(() => [
            qr(re("ul", Lg, [
              (V(true), X(_e, null, Bt(e.config.children, (a) => (V(), X("li", {
                key: a.text,
                class: "vp-navbar-dropdown-item"
              }, [
                "children" in a ? (V(), X(_e, {
                  key: 0
                }, [
                  re("h4", Rg, [
                    a.link ? (V(), Pe(Ht, {
                      key: 0,
                      config: a,
                      onFocusout: () => {
                        o(a, e.config.children) && a.children.length === 0 && (t.value = false);
                      }
                    }, null, 8, [
                      "config",
                      "onFocusout"
                    ])) : (V(), X("span", Og, xe(a.text), 1))
                  ]),
                  re("ul", Pg, [
                    (V(true), X(_e, null, Bt(a.children, (u) => (V(), X("li", {
                      key: u.link,
                      class: "vp-navbar-dropdown-subitem"
                    }, [
                      le(Ht, {
                        config: u,
                        onFocusout: () => {
                          o(u, a.children) && o(a, e.config.children) && ee(n)(false);
                        }
                      }, null, 8, [
                        "config",
                        "onFocusout"
                      ])
                    ]))), 128))
                  ])
                ], 64)) : (V(), Pe(Ht, {
                  key: 1,
                  config: a,
                  onFocusout: () => {
                    o(a, e.config.children) && ee(n)(false);
                  }
                }, null, 8, [
                  "config",
                  "onFocusout"
                ]))
              ]))), 128))
            ], 512), [
              [
                eo,
                ee(t)
              ]
            ])
          ]),
          _: 1
        })
      ], 2));
    }
  }), Oc = (e, t = "") => gt(e) ? jn(Dn(t, e)) : "children" in e ? {
    ...e,
    children: e.children.map((n) => Oc(n, Dn(t, e.prefix)))
  } : {
    ...e,
    link: mc(e.link) ? jn(Dn(t, e.link)).link : e.link
  }, kg = () => {
    const { themeLocale: e } = $e();
    return N(() => (e.value.navbar || []).map((t) => Oc(t)));
  }, Pc = (e) => !wr(e) || e.includes("github.com") ? "GitHub" : e.includes("bitbucket.org") ? "Bitbucket" : e.includes("gitlab.com") ? "GitLab" : e.includes("gitee.com") ? "Gitee" : null, Ng = () => {
    const { themeLocale: e } = $e(), t = N(() => e.value.repo), n = N(() => t.value ? Pc(t.value) : null), r = N(() => t.value && !wr(t.value) ? `https://github.com/${t.value}` : t.value), o = N(() => r.value ? e.value.repoLabel ? e.value.repoLabel : n.value == null ? "Source" : n.value : null);
    return N(() => !r.value || !o.value ? [] : [
      {
        text: o.value,
        link: r.value
      }
    ]);
  }, Dg = () => {
    const e = Wn(), t = em(), { routeLocale: n, site: r, siteLocale: o, theme: s, themeLocale: i } = $e(), l = $s();
    return N(() => {
      const a = Object.keys(r.value.locales);
      if (a.length < 2) return [];
      const u = e.path, c = e.fullPath;
      return [
        {
          text: `${i.value.selectLanguageText}`,
          ariaLabel: `${i.value.selectLanguageAriaLabel ?? i.value.selectLanguageText}`,
          children: a.map((h) => {
            var _a2, _b;
            const p = ((_a2 = r.value.locales) == null ? void 0 : _a2[h]) ?? {}, y = ((_b = s.value.locales) == null ? void 0 : _b[h]) ?? {}, _ = `${p.lang}`, w = y.selectLanguageName ?? _;
            if (_ === o.value.lang) return {
              text: w,
              activeMatch: ".",
              link: l.value ? c : u
            };
            const R = u.replace(n.value, h);
            return {
              text: w,
              link: t.value.some((S) => S === R) ? l.value ? c.replace(u, R) : R : y.home ?? h
            };
          })
        }
      ];
    });
  }, Mg = "719px", $g = {
    mobile: Mg
  };
  var hr;
  (function(e) {
    e.Mobile = "mobile";
  })(hr || (hr = {}));
  let Hg, Ic, Vg, kc, Fg, jg;
  Hg = {
    [hr.Mobile]: Number.parseInt($g.mobile.replace("px", ""), 10)
  };
  Ic = (e, t) => {
    const n = Hg[e];
    Number.isInteger(n) && (Ze("orientationchange", () => {
      t(n);
    }), Ze("resize", () => {
      t(n);
    }), ct(() => {
      t(n);
    }));
  };
  Vg = [
    "aria-label"
  ];
  kc = fe({
    __name: "VPNavbarItems",
    setup(e) {
      const { themeLocale: t } = $e(), n = kg(), r = Dg(), o = Ng(), s = qe(false), i = N(() => t.value.navbarLabel ?? "site navigation"), l = N(() => [
        ...n.value,
        ...r.value,
        ...o.value
      ]);
      return Ic(hr.Mobile, (a) => {
        s.value = window.innerWidth < a;
      }), (a, u) => l.value.length ? (V(), X("nav", {
        key: 0,
        class: "vp-navbar-items",
        "aria-label": i.value
      }, [
        (V(true), X(_e, null, Bt(l.value, (c) => (V(), X("div", {
          key: c.text,
          class: "vp-navbar-item"
        }, [
          "children" in c ? (V(), Pe(Ig, {
            key: 0,
            class: je({
              mobile: s.value
            }),
            config: c
          }, null, 8, [
            "class",
            "config"
          ])) : (V(), Pe(Ht, {
            key: 1,
            config: c
          }, null, 8, [
            "config"
          ]))
        ]))), 128))
      ], 8, Vg)) : Ce("", true);
    }
  });
  on = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  Fg = {};
  jg = {
    class: "dark-icon",
    viewBox: "0 0 32 32"
  };
  function Bg(e, t) {
    return V(), X("svg", jg, [
      ...t[0] || (t[0] = [
        re("path", {
          d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
          fill: "currentColor"
        }, null, -1)
      ])
    ]);
  }
  const Ug = on(Fg, [
    [
      "render",
      Bg
    ]
  ]), Wg = {}, zg = {
    class: "light-icon",
    viewBox: "0 0 32 32"
  };
  function Gg(e, t) {
    return V(), X("svg", zg, [
      ...t[0] || (t[0] = [
        Lf('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9)
      ])
    ]);
  }
  const Kg = on(Wg, [
    [
      "render",
      Gg
    ]
  ]), qg = [
    "title"
  ], Yg = fe({
    __name: "VPToggleColorModeButton",
    setup(e) {
      const { themeLocale: t } = $e(), n = Bs(), r = () => {
        n.value = !n.value;
      };
      return (o, s) => (V(), X("button", {
        type: "button",
        class: "vp-toggle-color-mode-button",
        title: ee(t).toggleColorMode,
        onClick: r
      }, [
        qr(le(Kg, null, null, 512), [
          [
            eo,
            !ee(n)
          ]
        ]),
        qr(le(Ug, null, null, 512), [
          [
            eo,
            ee(n)
          ]
        ])
      ], 8, qg));
    }
  }), Jg = [
    "title"
  ], Qg = fe({
    __name: "VPToggleSidebarButton",
    emits: [
      "toggle"
    ],
    setup(e) {
      const { themeLocale: t } = $e();
      return (n, r) => (V(), X("div", {
        class: "vp-toggle-sidebar-button",
        title: ee(t).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: r[0] || (r[0] = (o) => n.$emit("toggle"))
      }, [
        ...r[1] || (r[1] = [
          re("div", {
            class: "icon",
            "aria-hidden": "true"
          }, [
            re("span"),
            re("span"),
            re("span")
          ], -1)
        ])
      ], 8, Jg));
    }
  }), Xg = {
    ref: "navbar-brand"
  }, Zg = fe({
    __name: "VPNavbar",
    emits: [
      "toggleSidebar"
    ],
    setup(e) {
      const t = vc("SearchBox") ? ys("SearchBox") : () => null, { themeLocale: n } = $e(), r = ei("navbar"), o = ei("navbar-brand"), s = qe(0), i = N(() => s.value ? {
        maxWidth: `${s.value}px`
      } : {}), l = (a, u) => {
        var _a2;
        const c = (_a2 = a == null ? void 0 : a.ownerDocument.defaultView) == null ? void 0 : _a2.getComputedStyle(a, null)[u], f = Number.parseInt(c, 10);
        return Number.isNaN(f) ? 0 : f;
      };
      return Ic(hr.Mobile, (a) => {
        var _a2;
        const u = l(r.value, "paddingLeft") + l(r.value, "paddingRight");
        window.innerWidth < a ? s.value = 0 : s.value = r.value.offsetWidth - u - (((_a2 = o.value) == null ? void 0 : _a2.offsetWidth) ?? 0);
      }), (a, u) => (V(), X("header", {
        ref_key: "navbar",
        ref: r,
        class: "vp-navbar",
        "vp-navbar": ""
      }, [
        le(Qg, {
          onToggle: u[0] || (u[0] = (c) => a.$emit("toggleSidebar"))
        }),
        re("span", Xg, [
          le(Sg)
        ], 512),
        re("div", {
          class: "vp-navbar-items-wrapper",
          style: Bn(i.value)
        }, [
          Te(a.$slots, "before"),
          le(kc, {
            class: "vp-hide-mobile"
          }),
          Te(a.$slots, "after"),
          ee(n).colorModeSwitch ? (V(), Pe(Yg, {
            key: 0
          })) : Ce("", true),
          le(ee(t))
        ], 4)
      ], 512));
    }
  }), ev = {}, tv = {
    class: "edit-icon",
    viewBox: "0 0 1024 1024"
  };
  function nv(e, t) {
    return V(), X("svg", tv, [
      ...t[0] || (t[0] = [
        re("g", {
          fill: "currentColor"
        }, [
          re("path", {
            d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
          }),
          re("path", {
            d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
          })
        ], -1)
      ])
    ]);
  }
  const rv = on(ev, [
    [
      "render",
      nv
    ]
  ]), ov = {
    GitHub: ":repo/edit/:branch/:path",
    GitLab: ":repo/-/edit/:branch/:path",
    Gitee: ":repo/edit/:branch/:path",
    Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
  }, sv = ({ docsRepo: e, editLinkPattern: t }) => {
    if (t) return t;
    const n = Pc(e);
    return n != null ? ov[n] : null;
  }, iv = ({ docsRepo: e, docsBranch: t, docsDir: n, filePathRelative: r, editLinkPattern: o }) => {
    if (!r) return null;
    const s = sv({
      docsRepo: e,
      editLinkPattern: o
    });
    return s ? s.replace(/:repo/, wr(e) ? e : `https://github.com/${e}`).replace(/:branch/, t).replace(/:path/, za(`${Wa(n)}/${r}`)) : null;
  }, lv = () => {
    const { frontmatter: e, page: t, themeLocale: n } = $e();
    return N(() => {
      if (!(e.value.editLink ?? n.value.editLink ?? true)) return null;
      const { repo: o, docsRepo: s = o, docsBranch: i = "main", docsDir: l = "", editLinkText: a } = n.value;
      if (!s) return null;
      const u = iv({
        docsRepo: s,
        docsBranch: i,
        docsDir: l,
        filePathRelative: t.value.filePathRelative,
        editLinkPattern: e.value.editLinkPattern ?? n.value.editLinkPattern
      });
      return u ? {
        text: a ?? "Edit this page",
        link: u
      } : null;
    });
  }, av = {
    class: "vp-page-meta"
  }, cv = {
    key: 0,
    class: "vp-meta-item edit-link"
  }, uv = {
    class: "vp-meta-item git-info"
  }, fv = {
    key: 0,
    class: "vp-meta-item last-updated"
  }, dv = {
    class: "meta-item-label"
  }, hv = [
    "datetime"
  ], pv = {
    key: 1,
    class: "vp-meta-item contributors"
  }, mv = {
    class: "meta-item-label"
  }, gv = {
    class: "meta-item-info"
  }, vv = [
    "title"
  ], _v = fe({
    __name: "VPPageMeta",
    setup(e) {
      const { frontmatter: t, themeLocale: n } = $e(), r = bc(() => t.value.contributors ?? n.value.contributors ?? true), o = lv(), s = yc(() => t.value.lastUpdated ?? n.value.lastUpdated ?? true);
      return (i, l) => (V(), X("footer", av, [
        ee(o) ? (V(), X("div", cv, [
          le(Ht, {
            class: "label",
            config: ee(o)
          }, {
            before: Le(() => [
              le(rv)
            ]),
            _: 1
          }, 8, [
            "config"
          ])
        ])) : Ce("", true),
        re("div", uv, [
          ee(s) ? (V(), X("div", fv, [
            re("span", dv, xe(ee(n).lastUpdatedText ?? ee(s).locale) + ": ", 1),
            re("time", {
              class: "meta-item-info",
              datetime: ee(s).iso,
              "data-allow-mismatch": ""
            }, xe(ee(s).text), 9, hv)
          ])) : Ce("", true),
          ee(r).length ? (V(), X("div", pv, [
            re("span", mv, xe(ee(n).contributorsText) + ": ", 1),
            re("span", gv, [
              (V(true), X(_e, null, Bt(ee(r), (a, u) => (V(), X(_e, {
                key: u
              }, [
                re("span", {
                  class: "contributor",
                  title: `email: ${a.email}`
                }, xe(a.name), 9, vv),
                u !== ee(r).length - 1 ? (V(), X(_e, {
                  key: 0
                }, [
                  nn(", ")
                ], 64)) : Ce("", true)
              ], 64))), 128))
            ])
          ])) : Ce("", true)
        ])
      ]));
    }
  }), bv = () => {
    const e = Sr(), t = Wn();
    return (n) => {
      n && (pc(n) ? t.fullPath !== n && e.push(n) : Er(n) ? window.open(n) : e.push(encodeURI(n)));
    };
  }, gl = (e, t) => e === false ? false : gt(e) ? jn(e, t) : Ts(e) ? {
    ...e,
    link: jn(e.link, t).link
  } : null, ls = (e, t, n) => {
    const r = e.findIndex((s) => s.link === t);
    if (r !== -1) {
      const s = e[r + n];
      return s ? s.link ? s : "prefix" in s && !dr(s.prefix).notFound ? {
        ...s,
        link: s.prefix
      } : null : null;
    }
    for (const s of e) if ("children" in s) {
      const i = ls(s.children, t, n);
      if (i) return i;
    }
    const o = e.findIndex((s) => "prefix" in s && s.prefix === t);
    if (o !== -1) {
      const s = e[o + n];
      return s ? s.link ? s : "prefix" in s && !dr(s.prefix).notFound ? {
        ...s,
        link: s.prefix
      } : null : null;
    }
    return null;
  }, yv = () => {
    const { frontmatter: e, themeLocale: t } = $e(), n = Ws(), r = sc(), o = N(() => {
      const i = gl(e.value.prev, r.value);
      return i === false ? null : i ?? (t.value.prev === false ? null : ls(n.value, r.value, -1));
    }), s = N(() => {
      const i = gl(e.value.next, r.value);
      return i === false ? null : i ?? (t.value.next === false ? null : ls(n.value, r.value, 1));
    });
    return {
      prevLink: o,
      nextLink: s
    };
  }, Ev = [
    "aria-label"
  ], wv = {
    class: "hint"
  }, Sv = {
    class: "link"
  }, Tv = {
    class: "external-link"
  }, Av = {
    class: "hint"
  }, Cv = {
    class: "link"
  }, xv = {
    class: "external-link"
  }, Lv = fe({
    __name: "VPPageNav",
    setup(e) {
      const { themeLocale: t } = $e(), n = bv(), { prevLink: r, nextLink: o } = yv(), s = N(() => t.value.pageNavbarLabel ?? "page navigation");
      return Ze("keydown", (i) => {
        i.altKey && (i.key === "ArrowRight" ? o.value && (n(o.value.link), i.preventDefault()) : i.key === "ArrowLeft" && r.value && (n(r.value.link), i.preventDefault()));
      }), (i, l) => ee(r) || ee(o) ? (V(), X("nav", {
        key: 0,
        class: "vp-page-nav",
        "aria-label": s.value
      }, [
        ee(r) ? (V(), Pe(Ht, {
          key: 0,
          class: "prev",
          config: ee(r)
        }, {
          default: Le(() => [
            re("div", wv, [
              l[0] || (l[0] = re("span", {
                class: "arrow left"
              }, null, -1)),
              nn(" " + xe(ee(t).prev ?? "Prev"), 1)
            ]),
            re("div", Sv, [
              re("span", Tv, xe(ee(r).text), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "config"
        ])) : Ce("", true),
        ee(o) ? (V(), Pe(Ht, {
          key: 1,
          class: "next",
          config: ee(o)
        }, {
          default: Le(() => [
            re("div", Av, [
              nn(xe(ee(t).next ?? "Next") + " ", 1),
              l[1] || (l[1] = re("span", {
                class: "arrow right"
              }, null, -1))
            ]),
            re("div", Cv, [
              re("span", xv, xe(ee(o).text), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "config"
        ])) : Ce("", true)
      ], 8, Ev)) : Ce("", true);
    }
  }), Rv = {
    class: "vp-page"
  }, Ov = {
    "vp-content": ""
  }, Pv = fe({
    __name: "VPPage",
    setup(e) {
      return (t, n) => (V(), X("main", Rv, [
        Te(t.$slots, "top"),
        re("div", Ov, [
          Te(t.$slots, "content-top"),
          le(ee(Rs), {
            id: "content"
          }),
          Te(t.$slots, "content-bottom")
        ]),
        le(_v),
        le(Lv),
        Te(t.$slots, "bottom")
      ]));
    }
  }), Iv = fe({
    __name: "VPDropdownTransition",
    setup(e) {
      const t = (r) => {
        r.style.height = `${r.scrollHeight}px`;
      }, n = (r) => {
        r.style.height = "";
      };
      return (r, o) => (V(), Pe(go, {
        name: "vp-dropdown",
        onEnter: t,
        onAfterEnter: n,
        onBeforeLeave: t
      }, {
        default: Le(() => [
          Te(r.$slots, "default")
        ]),
        _: 3
      }));
    }
  }), vl = (e) => decodeURI(e).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, ""), kv = (e, t) => {
    if (t.hash === e) return true;
    const n = vl(t.path), r = vl(e);
    return n === r;
  }, Nc = (e, t) => e.link && kv(e.link, t) ? true : "children" in e ? e.children.some((n) => Nc(n, t)) : false, Nv = {
    class: "vp-sidebar-children"
  }, Dv = fe({
    __name: "VPSidebarItem",
    props: {
      item: {},
      depth: {
        default: 0
      }
    },
    setup(e) {
      const t = Wn(), n = Sr(), r = N(() => e.item.collapsible), o = N(() => Nc(e.item, t)), s = N(() => ({
        "vp-sidebar-item": true,
        "vp-sidebar-heading": e.depth === 0,
        active: o.value,
        collapsible: r.value
      })), i = N(() => r.value ? o.value : true), [l, a] = Ds(i.value), u = (f) => {
        r.value && (f.preventDefault(), a());
      }, c = n.afterEach(() => {
        Un(() => {
          l.value = i.value;
        });
      });
      return bs(() => {
        c();
      }), (f, h) => {
        const p = ys("VPSidebarItem", true);
        return V(), X("li", null, [
          e.item.link ? (V(), Pe(Ht, {
            key: 0,
            class: je(s.value),
            config: e.item
          }, {
            after: Le(() => [
              r.value ? (V(), X("span", {
                key: 0,
                class: je([
                  "arrow",
                  ee(l) ? "down" : "right"
                ])
              }, null, 2)) : Ce("", true)
            ]),
            _: 1
          }, 8, [
            "class",
            "config"
          ])) : (V(), X("p", {
            key: 1,
            tabindex: "0",
            class: je(s.value),
            onClick: u,
            onKeydown: md(u, [
              "enter"
            ])
          }, [
            nn(xe(e.item.text) + " ", 1),
            r.value ? (V(), X("span", {
              key: 0,
              class: je([
                "arrow",
                ee(l) ? "down" : "right"
              ])
            }, null, 2)) : Ce("", true)
          ], 34)),
          "children" in e.item && e.item.children.length ? (V(), Pe(Iv, {
            key: 2
          }, {
            default: Le(() => [
              qr(re("ul", Nv, [
                (V(true), X(_e, null, Bt(e.item.children, (y) => (V(), Pe(p, {
                  key: `${e.depth}${y.text}${y.link}`,
                  item: y,
                  depth: e.depth + 1
                }, null, 8, [
                  "item",
                  "depth"
                ]))), 128))
              ], 512), [
                [
                  eo,
                  ee(l)
                ]
              ])
            ]),
            _: 1
          })) : Ce("", true)
        ]);
      };
    }
  }), Mv = {
    key: 0,
    class: "vp-sidebar-items"
  }, $v = fe({
    __name: "VPSidebarItems",
    setup(e) {
      const t = Wn(), n = Ws();
      return ct(() => {
        Ye(() => t.hash, (r) => {
          const o = document.querySelector(".vp-sidebar");
          if (!o) return;
          const s = document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${t.path}${r}"]`);
          if (!s) return;
          const { top: i, height: l } = o.getBoundingClientRect(), { top: a, height: u } = s.getBoundingClientRect();
          a < i ? s.scrollIntoView(true) : a + u > i + l && s.scrollIntoView(false);
        });
      }), (r, o) => ee(n).length ? (V(), X("ul", Mv, [
        (V(true), X(_e, null, Bt(ee(n), (s) => (V(), Pe(Dv, {
          key: `${s.text}${s.link}`,
          item: s
        }, null, 8, [
          "item"
        ]))), 128))
      ])) : Ce("", true);
    }
  }), Hv = {
    class: "vp-sidebar",
    "vp-sidebar": ""
  }, Vv = fe({
    __name: "VPSidebar",
    setup(e) {
      return (t, n) => (V(), X("aside", Hv, [
        le(kc),
        Te(t.$slots, "top"),
        le($v),
        Te(t.$slots, "bottom")
      ]));
    }
  }), Fv = fe({
    __name: "Layout",
    setup(e) {
      const { frontmatter: t, page: n, themeLocale: r } = $e(), o = N(() => t.value.navbar ?? r.value.navbar ?? true), s = Ws(), i = qe(false), l = (w) => {
        i.value = typeof w == "boolean" ? w : !i.value;
      }, a = {
        x: 0,
        y: 0
      }, u = ({ changedTouches: w }) => {
        a.x = w[0].clientX, a.y = w[0].clientY;
      }, c = ({ changedTouches: w }) => {
        const R = w[0].clientX - a.x, S = w[0].clientY - a.y;
        Math.abs(R) > Math.abs(S) && Math.abs(R) > 40 && (R > 0 && a.x <= 80 ? l(true) : l(false));
      }, f = N(() => t.value.externalLinkIcon ?? r.value.externalLinkIcon ?? true), h = N(() => [
        {
          "no-navbar": !o.value,
          "no-sidebar": s.value.length === 0,
          "sidebar-open": i.value,
          "external-link-icon": f.value
        },
        t.value.pageClass
      ]);
      Tr(() => {
        l(false);
      });
      const p = Cc(), y = p.resolve, _ = p.pending;
      return (w, R) => (V(), X("div", {
        class: je([
          "vp-theme-container",
          h.value
        ]),
        "vp-container": "",
        onTouchstart: u,
        onTouchend: c
      }, [
        Te(w.$slots, "navbar", {}, () => [
          o.value ? (V(), Pe(Zg, {
            key: 0,
            onToggleSidebar: l
          }, {
            before: Le(() => [
              Te(w.$slots, "navbar-before")
            ]),
            after: Le(() => [
              Te(w.$slots, "navbar-after")
            ]),
            _: 3
          })) : Ce("", true)
        ]),
        re("div", {
          class: "vp-sidebar-mask",
          onClick: R[0] || (R[0] = (S) => l(false))
        }),
        Te(w.$slots, "sidebar", {}, () => [
          le(Vv, null, {
            top: Le(() => [
              Te(w.$slots, "sidebar-top")
            ]),
            bottom: Le(() => [
              Te(w.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        Te(w.$slots, "page", {}, () => [
          le(ag, {
            onBeforeEnter: ee(y),
            onBeforeLeave: ee(_)
          }, {
            default: Le(() => [
              ee(t).home ? (V(), Pe(Eg, {
                key: 0
              })) : (V(), Pe(Pv, {
                key: ee(n).path
              }, {
                top: Le(() => [
                  Te(w.$slots, "page-top")
                ]),
                "content-top": Le(() => [
                  Te(w.$slots, "page-content-top")
                ]),
                "content-bottom": Le(() => [
                  Te(w.$slots, "page-content-bottom")
                ]),
                bottom: Le(() => [
                  Te(w.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, [
            "onBeforeEnter",
            "onBeforeLeave"
          ])
        ])
      ], 34));
    }
  }), jv = {
    class: "vp-theme-container",
    "vp-container": ""
  }, Bv = {
    class: "page"
  }, Uv = {
    "vp-content": ""
  }, Wv = fe({
    __name: "NotFound",
    setup(e) {
      const { routeLocale: t, theme: n, themeLocale: r } = $e(), o = $s(), s = N(() => o.value ? t.value : "/"), i = N(() => {
        if (o.value) return r.value;
        const { locales: f, ...h } = n.value;
        return {
          ...h,
          ...f == null ? void 0 : f["/"]
        };
      }), l = N(() => i.value.home ?? s.value), a = N(() => i.value.backToHome ?? "Back to home"), u = N(() => i.value.notFound ?? [
        "Not Found"
      ]), c = N(() => o.value ? u.value[Math.floor(Math.random() * u.value.length)] : u.value[0]);
      return (f, h) => (V(), X("div", jv, [
        re("main", Bv, [
          re("div", Uv, [
            h[0] || (h[0] = re("h1", null, "404", -1)),
            re("blockquote", null, xe(c.value), 1),
            le(ee(yo), {
              to: l.value
            }, {
              default: Le(() => [
                nn(xe(a.value), 1)
              ]),
              _: 1
            }, 8, [
              "to"
            ])
          ])
        ])
      ]));
    }
  }), zv = on(Wv, [
    [
      "__scopeId",
      "data-v-33d3430e"
    ]
  ]), Gv = Wt({
    enhance({ app: e, router: t }) {
      vc("Badge") || e.component("Badge", lg);
      const n = t.options.scrollBehavior;
      t.options.scrollBehavior = async (...r) => (await Cc().wait(), n(...r));
    },
    setup() {
      Zm(), tg(), ig();
    },
    layouts: {
      Layout: Fv,
      NotFound: zv
    }
  }), Kv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gv
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function qv(e) {
    return e.replace(/\w\S*/g, function(t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }
  const Yv = {
    name: "WasmExample",
    props: {
      example: "",
      autoLoad: false,
      noCanvas: false
    },
    data() {
      return {
        error: "",
        loading: false,
        exampleStarted: false,
        module: null
      };
    },
    async mounted() {
      await this.$nextTick(), this.autoLoad && await this.loadExample();
    },
    computed: {
      exampleName() {
        return qv(this.example);
      }
    },
    methods: {
      async loadExample() {
        this.loading = true;
        try {
          const t = Object.assign({
            "./wasm/compute/demo.js": () => Q(() => import("./demo-C36HSm7t.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([0,1])),
            "./wasm/stencil/demo.js": () => Q(() => import("./demo-CQDKuT5b.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([2,1])),
            "./wasm/tutorial10_lighting/demo.js": () => Q(() => import("./demo-DwtpApK9.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([3,1])),
            "./wasm/tutorial11_normals/demo.js": () => Q(() => import("./demo-njrbaOK1.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([4,1])),
            "./wasm/tutorial12_camera/demo.js": () => Q(() => import("./demo-BYtwQuMW.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([5,1])),
            "./wasm/tutorial13_hdr/demo.js": () => Q(() => import("./demo-CeyqujVO.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([6,1])),
            "./wasm/tutorial1_window/demo.js": () => Q(() => import("./demo-DW5Ha5bf.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([7,1])),
            "./wasm/tutorial2_surface/demo.js": () => Q(() => import("./demo-g21p7SPY.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([8,1])),
            "./wasm/tutorial3_pipeline/demo.js": () => Q(() => import("./demo-fXMcLoOd.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([9,1])),
            "./wasm/tutorial4_buffer/demo.js": () => Q(() => import("./demo-BT2gC024.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([10,1])),
            "./wasm/tutorial5_textures/demo.js": () => Q(() => import("./demo-BeOHh2AZ.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([11,1])),
            "./wasm/tutorial6_uniforms/demo.js": () => Q(() => import("./demo-BHtm3Zxp.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([12,1])),
            "./wasm/tutorial7_instancing/demo.js": () => Q(() => import("./demo-D6z57jom.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([13,1])),
            "./wasm/tutorial8_depth/demo.js": () => Q(() => import("./demo-B-ITDCBn.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([14,1])),
            "./wasm/tutorial9_models/demo.js": () => Q(() => import("./demo-DEtifWg7.js").then(async (m) => {
              await m.__tla;
              return m;
            }), __vite__mapDeps([15,1]))
          })[`./wasm/${this.example}/demo.js`];
          if (!t) throw new Error(`No wasm module found for example "${this.example}"`);
          this.module = await t(), window && (window.wasm = this.module);
        } catch (e) {
          `${e}` != "Error: Using exceptions for control flow, don't mind me. This isn't actually an error!" ? (this.error = `An error occurred loading "${this.example}": ${e}`, console.error(e), this.exampleStarted = false, this.loading = false) : (this.exampleStarted = true, this.loading = false);
          return;
        }
        this.loading = false, this.exampleStarted = true;
      }
    }
  }, Jv = {
    id: "wasm-example"
  }, Qv = {
    key: 0,
    id: "canvas"
  }, Xv = {
    key: 1,
    class: "loading"
  }, Zv = {
    key: 2
  }, e_ = {
    key: 3,
    class: "error"
  }, t_ = [
    "disabled"
  ];
  function n_(e, t, n, r, o, s) {
    return V(), X("div", Jv, [
      n.noCanvas ? Ce("", true) : (V(), X("canvas", Qv)),
      o.loading ? (V(), X("div", Xv, "Loading WebAssembly Demo...")) : Ce("", true),
      o.exampleStarted && n.noCanvas ? (V(), X("div", Zv, "WebAssembly Demo Loaded!")) : Ce("", true),
      o.error ? (V(), X("div", e_, xe(o.error), 1)) : Ce("", true),
      !o.exampleStarted && !n.autoLoad ? (V(), X("button", {
        key: 4,
        onClick: t[0] || (t[0] = (i) => s.loadExample()),
        disabled: o.loading
      }, " Click to start " + xe(s.exampleName) + "! ", 9, t_)) : Ce("", true)
    ]);
  }
  const r_ = on(Yv, [
    [
      "render",
      n_
    ]
  ]), o_ = "https://github.com/sotrh/learn-wgpu/tree/master/code", s_ = {
    name: "AutoGithubLink",
    props: {
      path: String
    },
    computed: {
      link() {
        return o_ + (this.$props.path ?? this.$page.path);
      }
    }
  }, i_ = {
    class: "auto-github-link"
  }, l_ = [
    "href"
  ];
  function a_(e, t, n, r, o, s) {
    const i = ys("OutboundLink");
    return V(), X("div", i_, [
      re("a", {
        href: s.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Check out the code!", 8, l_),
      le(i)
    ]);
  }
  const c_ = on(s_, [
    [
      "render",
      a_
    ]
  ]), u_ = {
    name: "RecentArticles",
    data() {
      return {};
    },
    computed: {
      recentFiles() {
        return (this.$site.pages ?? []).filter((t) => t.regularPath.includes("beginner") || t.regularPath.includes("intermediate")).sort((t, n) => {
          let r = new Date(t.frontmatter.published).getTime(), o = new Date(n.frontmatter.published).getTime(), s = r - o;
          return s < 0 ? -1 : s > 0 ? 1 : 0;
        }).slice(0, 5);
      }
    }
  }, f_ = [
    "href"
  ];
  function d_(e, t, n, r, o, s) {
    return V(), X("div", null, [
      re("ul", null, [
        (V(true), X(_e, null, Bt(s.recentFiles, (i, l) => (V(), X("li", {
          key: i
        }, [
          re("a", {
            href: l.path
          }, xe(l.title), 9, f_)
        ]))), 128))
      ])
    ]);
  }
  const h_ = on(u_, [
    [
      "render",
      d_
    ]
  ]), p_ = {
    name: "Note",
    props: {
      hidden: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        is_hidden: this.hidden
      };
    },
    methods: {
      toggle() {
        this.is_hidden = !this.is_hidden;
      }
    }
  }, m_ = {
    class: "header"
  }, g_ = {
    class: "content"
  };
  function v_(e, t, n, r, o, s) {
    return V(), X("div", {
      class: je([
        "note",
        {
          hidden: o.is_hidden
        }
      ]),
      onClick: t[0] || (t[0] = (...i) => s.toggle && s.toggle(...i))
    }, [
      re("div", m_, [
        re("div", {
          class: je({
            arrow: true,
            down: o.is_hidden
          })
        }, null, 2),
        t[1] || (t[1] = re("div", {
          class: "grow"
        }, "Note", -1))
      ]),
      re("div", g_, [
        Te(e.$slots, "default", {}, void 0, true)
      ])
    ], 2);
  }
  const __ = on(p_, [
    [
      "render",
      v_
    ],
    [
      "__scopeId",
      "data-v-ae1454e5"
    ]
  ]), b_ = Wt({
    enhance({ app: e }) {
      e.component("WasmExample", r_), e.component("AutoGithubLink", c_), e.component("RecentArticles", h_), e.component("Note", __);
    }
  }), y_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: b_
  }, Symbol.toStringTag, {
    value: "Module"
  })), Hr = [
    Wp,
    om,
    cm,
    fm,
    ym,
    Im,
    Hm,
    Vm,
    zm,
    Qm,
    Kv,
    y_
  ].map((e) => e.default).filter(Boolean), E_ = JSON.parse('{"base":"/learn-wgpu/","lang":"en-US","title":"Learn Wgpu","description":"","head":[],"locales":{}}');
  let xn, w_, S_, T_, A_, C_, x_, L_, R_;
  xn = Ae(E_);
  w_ = bh;
  S_ = () => {
    const e = jh({
      history: w_(Wa("/learn-wgpu/")),
      routes: [
        {
          name: "vuepress-route",
          path: "/:catchAll(.*)",
          components: {}
        }
      ],
      scrollBehavior: (t, n, r) => r || (t.hash ? {
        el: t.hash
      } : {
        top: 0
      })
    });
    return e.beforeResolve(async (t, n) => {
      if (t.path !== n.path || n === It) {
        const r = dr(t.fullPath);
        if (r.path !== t.fullPath) return r.path;
        const o = await r.loader();
        t.meta = {
          ...r.meta,
          _pageChunk: o
        };
      } else t.path === n.path && (t.meta = n.meta);
    }), e;
  };
  T_ = (e) => {
    e.component("ClientOnly", Ls), e.component("Content", Rs), e.component("RouteLink", yo);
  };
  A_ = (e, t, n) => {
    const r = N(() => t.currentRoute.value.path), o = Gl((w, R) => ({
      get() {
        return w(), t.currentRoute.value.meta._pageChunk;
      },
      set(S) {
        t.currentRoute.value.meta._pageChunk = S, R();
      }
    })), s = N(() => an.resolveLayouts(n)), i = N(() => an.resolveRouteLocale(xn.value.locales, r.value)), l = N(() => an.resolveSiteLocaleData(xn.value, i.value)), a = N(() => o.value.comp), u = N(() => o.value.data), c = N(() => u.value.frontmatter), f = N(() => an.resolvePageHeadTitle(u.value, l.value)), h = N(() => an.resolvePageHead(f.value, c.value, l.value)), p = N(() => an.resolvePageLang(u.value, l.value)), y = N(() => an.resolvePageLayout(u.value, s.value)), _ = {
      layouts: s,
      pageData: u,
      pageComponent: a,
      pageFrontmatter: c,
      pageHead: h,
      pageHeadTitle: f,
      pageLang: p,
      pageLayout: y,
      redirects: is,
      routeLocale: i,
      routePath: r,
      routes: kn,
      siteData: xn,
      siteLocaleData: l,
      frontmatter: c,
      head: h,
      headTitle: f,
      lang: p,
      page: u,
      site: xn,
      siteLocale: l
    };
    return e.provide(xs, _), Object.defineProperties(e.config.globalProperties, {
      $pageFrontmatter: {
        get: () => c.value
      },
      $pageHead: {
        get: () => h.value
      },
      $pageHeadTitle: {
        get: () => f.value
      },
      $pageLang: {
        get: () => p.value
      },
      $pageData: {
        get: () => u.value
      },
      $routeLocale: {
        get: () => i.value
      },
      $withBase: {
        get: () => Os
      },
      $frontmatter: {
        get: () => c.value
      },
      $head: {
        get: () => h.value
      },
      $headTitle: {
        get: () => f.value
      },
      $lang: {
        get: () => p.value
      },
      $page: {
        get: () => u.value
      },
      $site: {
        get: () => xn.value
      },
      $siteLocale: {
        get: () => l.value
      }
    }), _;
  };
  C_ = ([e, t, n = ""]) => {
    const r = Object.entries(t).map(([l, a]) => gt(a) ? `[${l}=${JSON.stringify(a)}]` : a ? `[${l}]` : "").join(""), o = `head > ${e}${r}`;
    return Array.from(document.querySelectorAll(o)).find((l) => l.innerText === n) ?? null;
  };
  x_ = ([e, t, n]) => {
    if (!gt(e)) return null;
    const r = document.createElement(e);
    return Ts(t) && Object.entries(t).forEach(([o, s]) => {
      gt(s) ? r.setAttribute(o, s) : s && r.setAttribute(o, "");
    }), gt(n) && r.appendChild(document.createTextNode(n)), r;
  };
  L_ = () => {
    const e = Uh(), t = Wh();
    let n = [];
    const r = () => {
      e.value.forEach((i) => {
        const l = C_(i);
        l && n.push(l);
      });
    }, o = () => {
      const i = [];
      return e.value.forEach((l) => {
        const a = x_(l);
        a && i.push(a);
      }), i;
    }, s = () => {
      document.documentElement.lang = t.value;
      const i = o();
      n.forEach((l, a) => {
        const u = i.findIndex((c) => l.isEqualNode(c));
        u === -1 ? (l.remove(), delete n[a]) : i.splice(u, 1);
      }), i.forEach((l) => document.head.appendChild(l)), n = [
        ...n.filter((l) => !!l),
        ...i
      ];
    };
    en(Yh, s), ct(() => {
      r(), Ye(e, s, {
        immediate: false
      });
    });
  };
  R_ = _d;
  O_ = async () => {
    var _a2;
    const e = R_({
      name: "Vuepress",
      setup() {
        var _a3;
        L_();
        for (const o of Hr) (_a3 = o.setup) == null ? void 0 : _a3.call(o);
        const n = Hr.flatMap(({ rootComponents: o = [] }) => o.map((s) => J(s))), r = zh();
        return () => [
          J(r.value),
          n
        ];
      }
    }), t = S_();
    T_(e), A_(e, t, Hr);
    for (const n of Hr) await ((_a2 = n.enhance) == null ? void 0 : _a2.call(n, {
      app: e,
      router: t,
      siteData: xn
    }));
    return e.use(t), {
      app: e,
      router: t
    };
  };
  O_().then(({ app: e, router: t }) => {
    t.isReady().then(() => {
      e.mount("#app");
    });
  });
})();
export {
  on as _,
  __tla,
  Lf as a,
  re as b,
  X as c,
  O_ as createVueApp,
  nn as d,
  le as e,
  V as o,
  ys as r,
  Le as w
};
