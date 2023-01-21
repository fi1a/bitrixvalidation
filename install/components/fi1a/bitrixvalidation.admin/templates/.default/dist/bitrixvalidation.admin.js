var Ud = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var mw = Ud((pw, As) => {
  function Sn(e, t) {
    const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
    for (let s = 0; s < r.length; s++)
      n[r[s]] = !0;
    return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
  }
  function nn(e) {
    if (X(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], s = Se(r) ? Bd(r) : nn(r);
        if (s)
          for (const i in s)
            t[i] = s[i];
      }
      return t;
    } else {
      if (Se(e))
        return e;
      if (ve(e))
        return e;
    }
  }
  const jd = /;(?![^(]*\))/g, Wd = /:([^]+)/, Hd = /\/\*.*?\*\//gs;
  function Bd(e) {
    const t = {};
    return e.replace(Hd, "").split(jd).forEach((n) => {
      if (n) {
        const r = n.split(Wd);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  function Uo(e) {
    let t = "";
    if (Se(e))
      t = e;
    else if (X(e))
      for (let n = 0; n < e.length; n++) {
        const r = Uo(e[n]);
        r && (t += r + " ");
      }
    else if (ve(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  const qd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Gd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Kd = /* @__PURE__ */ Sn(qd), Xd = /* @__PURE__ */ Sn(Gd), Zd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jd = /* @__PURE__ */ Sn(Zd);
  function ou(e) {
    return !!e || e === "";
  }
  function Qd(e, t) {
    if (e.length !== t.length)
      return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
      n = si(e[r], t[r]);
    return n;
  }
  function si(e, t) {
    if (e === t)
      return !0;
    let n = ja(e), r = ja(t);
    if (n || r)
      return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Hr(e), r = Hr(t), n || r)
      return e === t;
    if (n = X(e), r = X(t), n || r)
      return n && r ? Qd(e, t) : !1;
    if (n = ve(e), r = ve(t), n || r) {
      if (!n || !r)
        return !1;
      const s = Object.keys(e).length, i = Object.keys(t).length;
      if (s !== i)
        return !1;
      for (const o in e) {
        const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
        if (a && !l || !a && l || !si(e[o], t[o]))
          return !1;
      }
    }
    return String(e) === String(t);
  }
  function ef(e, t) {
    return e.findIndex((n) => si(n, t));
  }
  const D = (e) => Se(e) ? e : e == null ? "" : X(e) || ve(e) && (e.toString === uu || !J(e.toString)) ? JSON.stringify(e, au, 2) : String(e), au = (e, t) => t && t.__v_isRef ? au(e, t.value) : Un(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
  } : ii(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : ve(t) && !X(t) && !cu(t) ? String(t) : t, Oe = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, gr = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], qe = () => {
  }, lu = () => !1, tf = /^on[^a-z]/, as = (e) => tf.test(e), Fs = (e) => e.startsWith("onUpdate:"), Ve = Object.assign, jo = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, nf = Object.prototype.hasOwnProperty, le = (e, t) => nf.call(e, t), X = Array.isArray, Un = (e) => ls(e) === "[object Map]", ii = (e) => ls(e) === "[object Set]", ja = (e) => ls(e) === "[object Date]", J = (e) => typeof e == "function", Se = (e) => typeof e == "string", Hr = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", Wo = (e) => ve(e) && J(e.then) && J(e.catch), uu = Object.prototype.toString, ls = (e) => uu.call(e), Ho = (e) => ls(e).slice(8, -1), cu = (e) => ls(e) === "[object Object]", Bo = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ts = /* @__PURE__ */ Sn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ), rf = /* @__PURE__ */ Sn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), oi = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  }, sf = /-(\w)/g, Wt = oi((e) => e.replace(sf, (t, n) => n ? n.toUpperCase() : "")), of = /\B([A-Z])/g, kn = oi((e) => e.replace(of, "-$1").toLowerCase()), Xn = oi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ln = oi((e) => e ? `on${Xn(e)}` : ""), Br = (e, t) => !Object.is(e, t), cr = (e, t) => {
    for (let n = 0; n < e.length; n++)
      e[n](t);
  }, zs = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    });
  }, qr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  let Wa;
  const du = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Qi(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t);
  }
  let At;
  class fu {
    constructor(t = !1) {
      this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = At, !t && At && (this.index = (At.scopes || (At.scopes = [])).push(this) - 1);
    }
    run(t) {
      if (this.active) {
        const n = At;
        try {
          return At = this, t();
        } finally {
          At = n;
        }
      } else
        ({}).NODE_ENV !== "production" && Qi("cannot run an inactive effect scope.");
    }
    on() {
      At = this;
    }
    off() {
      At = this.parent;
    }
    stop(t) {
      if (this.active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }
  }
  function af(e) {
    return new fu(e);
  }
  function lf(e, t = At) {
    t && t.active && t.effects.push(e);
  }
  const Gr = (e) => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  }, mu = (e) => (e.w & Mn) > 0, hu = (e) => (e.n & Mn) > 0, uf = ({ deps: e }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++)
        e[t].w |= Mn;
  }, cf = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        mu(s) && !hu(s) ? s.delete(e) : t[n++] = s, s.w &= ~Mn, s.n &= ~Mn;
      }
      t.length = n;
    }
  }, eo = /* @__PURE__ */ new WeakMap();
  let Ar = 0, Mn = 1;
  const to = 30;
  let ot;
  const jn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), no = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
  class qo {
    constructor(t, n = null, r) {
      this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, lf(this, r);
    }
    run() {
      if (!this.active)
        return this.fn();
      let t = ot, n = Dn;
      for (; t; ) {
        if (t === this)
          return;
        t = t.parent;
      }
      try {
        return this.parent = ot, ot = this, Dn = !0, Mn = 1 << ++Ar, Ar <= to ? uf(this) : Ha(this), this.fn();
      } finally {
        Ar <= to && cf(this), Mn = 1 << --Ar, ot = this.parent, Dn = n, this.parent = void 0, this.deferStop && this.stop();
      }
    }
    stop() {
      ot === this ? this.deferStop = !0 : this.active && (Ha(this), this.onStop && this.onStop(), this.active = !1);
    }
  }
  function Ha(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++)
        t[n].delete(e);
      t.length = 0;
    }
  }
  let Dn = !0;
  const pu = [];
  function tr() {
    pu.push(Dn), Dn = !1;
  }
  function nr() {
    const e = pu.pop();
    Dn = e === void 0 ? !0 : e;
  }
  function ft(e, t, n) {
    if (Dn && ot) {
      let r = eo.get(e);
      r || eo.set(e, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || r.set(n, s = Gr());
      const i = {}.NODE_ENV !== "production" ? { effect: ot, target: e, type: t, key: n } : void 0;
      ro(s, i);
    }
  }
  function ro(e, t) {
    let n = !1;
    Ar <= to ? hu(e) || (e.n |= Mn, n = !mu(e)) : n = !e.has(ot), n && (e.add(ot), ot.deps.push(e), {}.NODE_ENV !== "production" && ot.onTrack && ot.onTrack(Object.assign({ effect: ot }, t)));
  }
  function cn(e, t, n, r, s, i) {
    const o = eo.get(e);
    if (!o)
      return;
    let a = [];
    if (t === "clear")
      a = [...o.values()];
    else if (n === "length" && X(e)) {
      const u = qr(r);
      o.forEach((f, d) => {
        (d === "length" || d >= u) && a.push(f);
      });
    } else
      switch (n !== void 0 && a.push(o.get(n)), t) {
        case "add":
          X(e) ? Bo(n) && a.push(o.get("length")) : (a.push(o.get(jn)), Un(e) && a.push(o.get(no)));
          break;
        case "delete":
          X(e) || (a.push(o.get(jn)), Un(e) && a.push(o.get(no)));
          break;
        case "set":
          Un(e) && a.push(o.get(jn));
          break;
      }
    const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: s, oldTarget: i } : void 0;
    if (a.length === 1)
      a[0] && ({}.NODE_ENV !== "production" ? mr(a[0], l) : mr(a[0]));
    else {
      const u = [];
      for (const f of a)
        f && u.push(...f);
      ({}).NODE_ENV !== "production" ? mr(Gr(u), l) : mr(Gr(u));
    }
  }
  function mr(e, t) {
    const n = X(e) ? e : [...e];
    for (const r of n)
      r.computed && Ba(r, t);
    for (const r of n)
      r.computed || Ba(r, t);
  }
  function Ba(e, t) {
    (e !== ot || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ve({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
  }
  const df = /* @__PURE__ */ Sn("__proto__,__v_isRef,__isVue"), _u = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hr)
  ), ff = /* @__PURE__ */ ai(), mf = /* @__PURE__ */ ai(!1, !0), hf = /* @__PURE__ */ ai(!0), pf = /* @__PURE__ */ ai(!0, !0), qa = /* @__PURE__ */ _f();
  function _f() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const r = re(this);
        for (let i = 0, o = this.length; i < o; i++)
          ft(r, "get", i + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(re)) : s;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        tr();
        const r = re(this)[t].apply(this, n);
        return nr(), r;
      };
    }), e;
  }
  function ai(e = !1, t = !1) {
    return function(r, s, i) {
      if (s === "__v_isReactive")
        return !e;
      if (s === "__v_isReadonly")
        return e;
      if (s === "__v_isShallow")
        return t;
      if (s === "__v_raw" && i === (e ? t ? Nu : Ou : t ? bu : $u).get(r))
        return r;
      const o = X(r);
      if (!e && o && le(qa, s))
        return Reflect.get(qa, s, i);
      const a = Reflect.get(r, s, i);
      return (Hr(s) ? _u.has(s) : df(s)) || (e || ft(r, "get", s), t) ? a : xe(a) ? o && Bo(s) ? a : a.value : ve(a) ? e ? Du(a) : Dr(a) : a;
    };
  }
  const gf = /* @__PURE__ */ gu(), vf = /* @__PURE__ */ gu(!0);
  function gu(e = !1) {
    return function(n, r, s, i) {
      let o = n[r];
      if (dn(o) && xe(o) && !xe(s))
        return !1;
      if (!e && (!Ys(s) && !dn(s) && (o = re(o), s = re(s)), !X(n) && xe(o) && !xe(s)))
        return o.value = s, !0;
      const a = X(n) && Bo(r) ? Number(r) < n.length : le(n, r), l = Reflect.set(n, r, s, i);
      return n === re(i) && (a ? Br(s, o) && cn(n, "set", r, s, o) : cn(n, "add", r, s)), l;
    };
  }
  function yf(e, t) {
    const n = le(e, t), r = e[t], s = Reflect.deleteProperty(e, t);
    return s && n && cn(e, "delete", t, void 0, r), s;
  }
  function Ef(e, t) {
    const n = Reflect.has(e, t);
    return (!Hr(t) || !_u.has(t)) && ft(e, "has", t), n;
  }
  function $f(e) {
    return ft(e, "iterate", X(e) ? "length" : jn), Reflect.ownKeys(e);
  }
  const vu = {
    get: ff,
    set: gf,
    deleteProperty: yf,
    has: Ef,
    ownKeys: $f
  }, yu = {
    get: hf,
    set(e, t) {
      return {}.NODE_ENV !== "production" && Qi(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
    deleteProperty(e, t) {
      return {}.NODE_ENV !== "production" && Qi(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    }
  }, bf = /* @__PURE__ */ Ve({}, vu, {
    get: mf,
    set: vf
  }), Of = /* @__PURE__ */ Ve({}, yu, {
    get: pf
  }), Go = (e) => e, li = (e) => Reflect.getPrototypeOf(e);
  function vs(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = re(e), i = re(t);
    n || (t !== i && ft(s, "get", t), ft(s, "get", i));
    const { has: o } = li(s), a = r ? Go : n ? Ko : Kr;
    if (o.call(s, t))
      return a(e.get(t));
    if (o.call(s, i))
      return a(e.get(i));
    e !== s && e.get(t);
  }
  function ys(e, t = !1) {
    const n = this.__v_raw, r = re(n), s = re(e);
    return t || (e !== s && ft(r, "has", e), ft(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
  }
  function Es(e, t = !1) {
    return e = e.__v_raw, !t && ft(re(e), "iterate", jn), Reflect.get(e, "size", e);
  }
  function Ga(e) {
    e = re(e);
    const t = re(this);
    return li(t).has.call(t, e) || (t.add(e), cn(t, "add", e, e)), this;
  }
  function Ka(e, t) {
    t = re(t);
    const n = re(this), { has: r, get: s } = li(n);
    let i = r.call(n, e);
    i ? {}.NODE_ENV !== "production" && Eu(n, r, e) : (e = re(e), i = r.call(n, e));
    const o = s.call(n, e);
    return n.set(e, t), i ? Br(t, o) && cn(n, "set", e, t, o) : cn(n, "add", e, t), this;
  }
  function Xa(e) {
    const t = re(this), { has: n, get: r } = li(t);
    let s = n.call(t, e);
    s ? {}.NODE_ENV !== "production" && Eu(t, n, e) : (e = re(e), s = n.call(t, e));
    const i = r ? r.call(t, e) : void 0, o = t.delete(e);
    return s && cn(t, "delete", e, void 0, i), o;
  }
  function Za() {
    const e = re(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Un(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
    return t && cn(e, "clear", void 0, void 0, n), r;
  }
  function $s(e, t) {
    return function(r, s) {
      const i = this, o = i.__v_raw, a = re(o), l = t ? Go : e ? Ko : Kr;
      return !e && ft(a, "iterate", jn), o.forEach((u, f) => r.call(s, l(u), l(f), i));
    };
  }
  function bs(e, t, n) {
    return function(...r) {
      const s = this.__v_raw, i = re(s), o = Un(i), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = s[e](...r), f = n ? Go : t ? Ko : Kr;
      return !t && ft(i, "iterate", l ? no : jn), {
        next() {
          const { value: d, done: m } = u.next();
          return m ? { value: d, done: m } : {
            value: a ? [f(d[0]), f(d[1])] : f(d),
            done: m
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function yn(e) {
    return function(...t) {
      if ({}.NODE_ENV !== "production") {
        const n = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(`${Xn(e)} operation ${n}failed: target is readonly.`, re(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  function Nf() {
    const e = {
      get(i) {
        return vs(this, i);
      },
      get size() {
        return Es(this);
      },
      has: ys,
      add: Ga,
      set: Ka,
      delete: Xa,
      clear: Za,
      forEach: $s(!1, !1)
    }, t = {
      get(i) {
        return vs(this, i, !1, !0);
      },
      get size() {
        return Es(this);
      },
      has: ys,
      add: Ga,
      set: Ka,
      delete: Xa,
      clear: Za,
      forEach: $s(!1, !0)
    }, n = {
      get(i) {
        return vs(this, i, !0);
      },
      get size() {
        return Es(this, !0);
      },
      has(i) {
        return ys.call(this, i, !0);
      },
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear"),
      forEach: $s(!0, !1)
    }, r = {
      get(i) {
        return vs(this, i, !0, !0);
      },
      get size() {
        return Es(this, !0);
      },
      has(i) {
        return ys.call(this, i, !0);
      },
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear"),
      forEach: $s(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      e[i] = bs(i, !1, !1), n[i] = bs(i, !0, !1), t[i] = bs(i, !1, !0), r[i] = bs(i, !0, !0);
    }), [
      e,
      n,
      t,
      r
    ];
  }
  const [Df, wf, Tf, kf] = /* @__PURE__ */ Nf();
  function ui(e, t) {
    const n = t ? e ? kf : Tf : e ? wf : Df;
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(le(n, s) && s in r ? n : r, s, i);
  }
  const Mf = {
    get: /* @__PURE__ */ ui(!1, !1)
  }, Sf = {
    get: /* @__PURE__ */ ui(!1, !0)
  }, If = {
    get: /* @__PURE__ */ ui(!0, !1)
  }, xf = {
    get: /* @__PURE__ */ ui(!0, !0)
  };
  function Eu(e, t, n) {
    const r = re(n);
    if (r !== n && t.call(e, r)) {
      const s = Ho(e);
      console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  const $u = /* @__PURE__ */ new WeakMap(), bu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap();
  function Rf(e) {
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
  function Cf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Rf(Ho(e));
  }
  function Dr(e) {
    return dn(e) ? e : ci(e, !1, vu, Mf, $u);
  }
  function Lf(e) {
    return ci(e, !1, bf, Sf, bu);
  }
  function Du(e) {
    return ci(e, !0, yu, If, Ou);
  }
  function hr(e) {
    return ci(e, !0, Of, xf, Nu);
  }
  function ci(e, t, n, r, s) {
    if (!ve(e))
      return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const i = s.get(e);
    if (i)
      return i;
    const o = Cf(e);
    if (o === 0)
      return e;
    const a = new Proxy(e, o === 2 ? r : n);
    return s.set(e, a), a;
  }
  function wn(e) {
    return dn(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function dn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Ys(e) {
    return !!(e && e.__v_isShallow);
  }
  function so(e) {
    return wn(e) || dn(e);
  }
  function re(e) {
    const t = e && e.__v_raw;
    return t ? re(t) : e;
  }
  function wu(e) {
    return zs(e, "__v_skip", !0), e;
  }
  const Kr = (e) => ve(e) ? Dr(e) : e, Ko = (e) => ve(e) ? Du(e) : e;
  function Tu(e) {
    Dn && ot && (e = re(e), {}.NODE_ENV !== "production" ? ro(e.dep || (e.dep = Gr()), {
      target: e,
      type: "get",
      key: "value"
    }) : ro(e.dep || (e.dep = Gr())));
  }
  function ku(e, t) {
    e = re(e), e.dep && ({}.NODE_ENV !== "production" ? mr(e.dep, {
      target: e,
      type: "set",
      key: "value",
      newValue: t
    }) : mr(e.dep));
  }
  function xe(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function Ze(e) {
    return Vf(e, !1);
  }
  function Vf(e, t) {
    return xe(e) ? e : new Pf(e, t);
  }
  class Pf {
    constructor(t, n) {
      this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : re(t), this._value = n ? t : Kr(t);
    }
    get value() {
      return Tu(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || Ys(t) || dn(t);
      t = n ? t : re(t), Br(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Kr(t), ku(this, t));
    }
  }
  function he(e) {
    return xe(e) ? e.value : e;
  }
  const Af = {
    get: (e, t, n) => he(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const s = e[t];
      return xe(s) && !xe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
    }
  };
  function Mu(e) {
    return wn(e) ? e : new Proxy(e, Af);
  }
  var Su;
  class Ff {
    constructor(t, n, r, s) {
      this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Su] = !1, this._dirty = !0, this.effect = new qo(t, () => {
        this._dirty || (this._dirty = !0, ku(this));
      }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
    }
    get value() {
      const t = re(this);
      return Tu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
    }
    set value(t) {
      this._setter(t);
    }
  }
  Su = "__v_isReadonly";
  function zf(e, t, n = !1) {
    let r, s;
    const i = J(e);
    i ? (r = e, s = {}.NODE_ENV !== "production" ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : qe) : (r = e.get, s = e.set);
    const o = new Ff(r, s, i || !s, n);
    return {}.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
  }
  const Wn = [];
  function ks(e) {
    Wn.push(e);
  }
  function Ms() {
    Wn.pop();
  }
  function x(e, ...t) {
    if ({}.NODE_ENV === "production")
      return;
    tr();
    const n = Wn.length ? Wn[Wn.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Yf();
    if (r)
      an(r, n, 11, [
        e + t.join(""),
        n && n.proxy,
        s.map(({ vnode: i }) => `at <${vi(n, i.type)}>`).join(`
`),
        s
      ]);
    else {
      const i = [`[Vue warn]: ${e}`, ...t];
      s.length && i.push(`
`, ...Uf(s)), console.warn(...i);
    }
    nr();
  }
  function Yf() {
    let e = Wn[Wn.length - 1];
    if (!e)
      return [];
    const t = [];
    for (; e; ) {
      const n = t[0];
      n && n.vnode === e ? n.recurseCount++ : t.push({
        vnode: e,
        recurseCount: 0
      });
      const r = e.component && e.component.parent;
      e = r && r.vnode;
    }
    return t;
  }
  function Uf(e) {
    const t = [];
    return e.forEach((n, r) => {
      t.push(...r === 0 ? [] : [`
`], ...jf(n));
    }), t;
  }
  function jf({ vnode: e, recurseCount: t }) {
    const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${vi(e.component, e.type, r)}`, i = ">" + n;
    return e.props ? [s, ...Wf(e.props), i] : [s + i];
  }
  function Wf(e) {
    const t = [], n = Object.keys(e);
    return n.slice(0, 3).forEach((r) => {
      t.push(...Iu(r, e[r]));
    }), n.length > 3 && t.push(" ..."), t;
  }
  function Iu(e, t, n) {
    return Se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : xe(t) ? (t = Iu(e, re(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : J(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = re(t), n ? t : [`${e}=`, t]);
  }
  const Xo = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
  };
  function an(e, t, n, r) {
    let s;
    try {
      s = r ? e(...r) : e();
    } catch (i) {
      di(i, t, n);
    }
    return s;
  }
  function Ot(e, t, n, r) {
    if (J(e)) {
      const i = an(e, t, n, r);
      return i && Wo(i) && i.catch((o) => {
        di(o, t, n);
      }), i;
    }
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ot(e[i], t, n, r));
    return s;
  }
  function di(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const o = t.proxy, a = {}.NODE_ENV !== "production" ? Xo[n] : n;
      for (; i; ) {
        const u = i.ec;
        if (u) {
          for (let f = 0; f < u.length; f++)
            if (u[f](e, o, a) === !1)
              return;
        }
        i = i.parent;
      }
      const l = t.appContext.config.errorHandler;
      if (l) {
        an(l, null, 10, [e, o, a]);
        return;
      }
    }
    Hf(e, n, s, r);
  }
  function Hf(e, t, n, r = !0) {
    if ({}.NODE_ENV !== "production") {
      const s = Xo[t];
      if (n && ks(n), x(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ms(), r)
        throw e;
      console.error(e);
    } else
      console.error(e);
  }
  let Xr = !1, io = !1;
  const Je = [];
  let Yt = 0;
  const vr = [];
  let Ft = null, En = 0;
  const xu = /* @__PURE__ */ Promise.resolve();
  let Zo = null;
  const Bf = 100;
  function oo(e) {
    const t = Zo || xu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function qf(e) {
    let t = Yt + 1, n = Je.length;
    for (; t < n; ) {
      const r = t + n >>> 1;
      Zr(Je[r]) < e ? t = r + 1 : n = r;
    }
    return t;
  }
  function fi(e) {
    (!Je.length || !Je.includes(e, Xr && e.allowRecurse ? Yt + 1 : Yt)) && (e.id == null ? Je.push(e) : Je.splice(qf(e.id), 0, e), Ru());
  }
  function Ru() {
    !Xr && !io && (io = !0, Zo = xu.then(Vu));
  }
  function Gf(e) {
    const t = Je.indexOf(e);
    t > Yt && Je.splice(t, 1);
  }
  function Cu(e) {
    X(e) ? vr.push(...e) : (!Ft || !Ft.includes(e, e.allowRecurse ? En + 1 : En)) && vr.push(e), Ru();
  }
  function Ja(e, t = Xr ? Yt + 1 : 0) {
    for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Je.length; t++) {
      const n = Je[t];
      if (n && n.pre) {
        if ({}.NODE_ENV !== "production" && Jo(e, n))
          continue;
        Je.splice(t, 1), t--, n();
      }
    }
  }
  function Lu(e) {
    if (vr.length) {
      const t = [...new Set(vr)];
      if (vr.length = 0, Ft) {
        Ft.push(...t);
        return;
      }
      for (Ft = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft.sort((n, r) => Zr(n) - Zr(r)), En = 0; En < Ft.length; En++)
        ({}).NODE_ENV !== "production" && Jo(e, Ft[En]) || Ft[En]();
      Ft = null, En = 0;
    }
  }
  const Zr = (e) => e.id == null ? 1 / 0 : e.id, Kf = (e, t) => {
    const n = Zr(e) - Zr(t);
    if (n === 0) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1;
    }
    return n;
  };
  function Vu(e) {
    io = !1, Xr = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Je.sort(Kf);
    const t = {}.NODE_ENV !== "production" ? (n) => Jo(e, n) : qe;
    try {
      for (Yt = 0; Yt < Je.length; Yt++) {
        const n = Je[Yt];
        if (n && n.active !== !1) {
          if ({}.NODE_ENV !== "production" && t(n))
            continue;
          an(n, null, 14);
        }
      }
    } finally {
      Yt = 0, Je.length = 0, Lu(e), Xr = !1, Zo = null, (Je.length || vr.length) && Vu(e);
    }
  }
  function Jo(e, t) {
    if (!e.has(t))
      e.set(t, 1);
    else {
      const n = e.get(t);
      if (n > Bf) {
        const r = t.ownerInstance, s = r && aa(r.type);
        return x(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
      } else
        e.set(t, n + 1);
    }
  }
  let Hn = !1;
  const dr = /* @__PURE__ */ new Set();
  ({}).NODE_ENV !== "production" && (du().__VUE_HMR_RUNTIME__ = {
    createRecord: Ai(Pu),
    rerender: Ai(Jf),
    reload: Ai(Qf)
  });
  const Zn = /* @__PURE__ */ new Map();
  function Xf(e) {
    const t = e.type.__hmrId;
    let n = Zn.get(t);
    n || (Pu(t, e.type), n = Zn.get(t)), n.instances.add(e);
  }
  function Zf(e) {
    Zn.get(e.type.__hmrId).instances.delete(e);
  }
  function Pu(e, t) {
    return Zn.has(e) ? !1 : (Zn.set(e, {
      initialDef: zr(t),
      instances: /* @__PURE__ */ new Set()
    }), !0);
  }
  function zr(e) {
    return hc(e) ? e.__vccOpts : e;
  }
  function Jf(e, t) {
    const n = Zn.get(e);
    !n || (n.initialDef.render = t, [...n.instances].forEach((r) => {
      t && (r.render = t, zr(r.type).render = t), r.renderCache = [], Hn = !0, r.update(), Hn = !1;
    }));
  }
  function Qf(e, t) {
    const n = Zn.get(e);
    if (!n)
      return;
    t = zr(t), Qa(n.initialDef, t);
    const r = [...n.instances];
    for (const s of r) {
      const i = zr(s.type);
      dr.has(i) || (i !== n.initialDef && Qa(i, t), dr.add(i)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (dr.add(i), s.ceReload(t.styles), dr.delete(i)) : s.parent ? fi(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    Cu(() => {
      for (const s of r)
        dr.delete(zr(s.type));
    });
  }
  function Qa(e, t) {
    Ve(e, t);
    for (const n in e)
      n !== "__file" && !(n in t) && delete e[n];
  }
  function Ai(e) {
    return (t, n) => {
      try {
        return e(t, n);
      } catch (r) {
        console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
      }
    };
  }
  let Ut, Fr = [], ao = !1;
  function us(e, ...t) {
    Ut ? Ut.emit(e, ...t) : ao || Fr.push({ event: e, args: t });
  }
  function Au(e, t) {
    var n, r;
    Ut = e, Ut ? (Ut.enabled = !0, Fr.forEach(({ event: s, args: i }) => Ut.emit(s, ...i)), Fr = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
      Au(i, t);
    }), setTimeout(() => {
      Ut || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ao = !0, Fr = []);
    }, 3e3)) : (ao = !0, Fr = []);
  }
  function em(e, t) {
    us("app:init", e, t, {
      Fragment: C,
      Text: wr,
      Comment: Ke,
      Static: xs
    });
  }
  function tm(e) {
    us("app:unmount", e);
  }
  const nm = /* @__PURE__ */ Qo("component:added"), Fu = /* @__PURE__ */ Qo("component:updated"), rm = /* @__PURE__ */ Qo("component:removed"), sm = (e) => {
    Ut && typeof Ut.cleanupBuffer == "function" && !Ut.cleanupBuffer(e) && rm(e);
  };
  function Qo(e) {
    return (t) => {
      us(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
    };
  }
  const im = /* @__PURE__ */ zu("perf:start"), om = /* @__PURE__ */ zu("perf:end");
  function zu(e) {
    return (t, n, r) => {
      us(e, t.appContext.app, t.uid, t, n, r);
    };
  }
  function am(e, t, n) {
    us("component:emit", e.appContext.app, e, t, n);
  }
  function lm(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const r = e.vnode.props || Oe;
    if ({}.NODE_ENV !== "production") {
      const { emitsOptions: f, propsOptions: [d] } = e;
      if (f)
        if (!(t in f))
          (!d || !(Ln(t) in d)) && x(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ln(t)}" prop.`);
        else {
          const m = f[t];
          J(m) && (m(...n) || x(`Invalid event arguments: event validation failed for event "${t}".`));
        }
    }
    let s = n;
    const i = t.startsWith("update:"), o = i && t.slice(7);
    if (o && o in r) {
      const f = `${o === "modelValue" ? "model" : o}Modifiers`, { number: d, trim: m } = r[f] || Oe;
      m && (s = n.map(($) => Se($) ? $.trim() : $)), d && (s = n.map(qr));
    }
    if ({}.NODE_ENV !== "production" && am(e, t, s), {}.NODE_ENV !== "production") {
      const f = t.toLowerCase();
      f !== t && r[Ln(f)] && x(`Event "${f}" is emitted in component ${vi(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${kn(t)}" instead of "${t}".`);
    }
    let a, l = r[a = Ln(t)] || r[a = Ln(Wt(t))];
    !l && i && (l = r[a = Ln(kn(t))]), l && Ot(l, e, 6, s);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[a])
        return;
      e.emitted[a] = !0, Ot(u, e, 6, s);
    }
  }
  function Yu(e, t, n = !1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0)
      return s;
    const i = e.emits;
    let o = {}, a = !1;
    if (!J(e)) {
      const l = (u) => {
        const f = Yu(u, t, !0);
        f && (a = !0, Ve(o, f));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !i && !a ? (ve(e) && r.set(e, null), null) : (X(i) ? i.forEach((l) => o[l] = null) : Ve(o, i), ve(e) && r.set(e, o), o);
  }
  function mi(e, t) {
    return !e || !as(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, kn(t)) || le(e, t));
  }
  let at = null, hi = null;
  function Us(e) {
    const t = at;
    return at = e, hi = e && e.type.__scopeId || null, t;
  }
  function um(e) {
    hi = e;
  }
  function cm() {
    hi = null;
  }
  function dm(e, t = at, n) {
    if (!t || e._n)
      return e;
    const r = (...s) => {
      r._d && dl(-1);
      const i = Us(t);
      let o;
      try {
        o = e(...s);
      } finally {
        Us(i), r._d && dl(1);
      }
      return {}.NODE_ENV !== "production" && Fu(t), o;
    };
    return r._n = !0, r._c = !0, r._d = !0, r;
  }
  let lo = !1;
  function js() {
    lo = !0;
  }
  function Fi(e) {
    const { type: t, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [o], slots: a, attrs: l, emit: u, render: f, renderCache: d, data: m, setupState: $, ctx: E, inheritAttrs: O } = e;
    let M, P;
    const Y = Us(e);
    ({}).NODE_ENV !== "production" && (lo = !1);
    try {
      if (n.shapeFlag & 4) {
        const k = s || r;
        M = kt(f.call(k, k, d, i, $, m, E)), P = l;
      } else {
        const k = t;
        ({}).NODE_ENV !== "production" && l === i && js(), M = kt(k.length > 1 ? k(i, {}.NODE_ENV !== "production" ? {
          get attrs() {
            return js(), l;
          },
          slots: a,
          emit: u
        } : { attrs: l, slots: a, emit: u }) : k(i, null)), P = t.props ? l : mm(l);
      }
    } catch (k) {
      Yr.length = 0, di(k, e, 1), M = Ge(Ke);
    }
    let B = M, V;
    if ({}.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && ([B, V] = fm(M)), P && O !== !1) {
      const k = Object.keys(P), { shapeFlag: te } = B;
      if (k.length) {
        if (te & 7)
          o && k.some(Fs) && (P = hm(P, o)), B = Ht(B, P);
        else if ({}.NODE_ENV !== "production" && !lo && B.type !== Ke) {
          const Z = Object.keys(l), q = [], Q = [];
          for (let ie = 0, ge = Z.length; ie < ge; ie++) {
            const we = Z[ie];
            as(we) ? Fs(we) || q.push(we[2].toLowerCase() + we.slice(3)) : Q.push(we);
          }
          Q.length && x(`Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), q.length && x(`Extraneous non-emits event listeners (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
    return n.dirs && ({}.NODE_ENV !== "production" && !el(B) && x("Runtime directive used on component with non-element root node. The directives will not function as intended."), B = Ht(B), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !el(B) && x("Component inside <Transition> renders non-element root node that cannot be animated."), B.transition = n.transition), {}.NODE_ENV !== "production" && V ? V(B) : M = B, Us(Y), M;
  }
  const fm = (e) => {
    const t = e.children, n = e.dynamicChildren, r = Uu(t);
    if (!r)
      return [e, void 0];
    const s = t.indexOf(r), i = n ? n.indexOf(r) : -1, o = (a) => {
      t[s] = a, n && (i > -1 ? n[i] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
    };
    return [kt(r), o];
  };
  function Uu(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (Qr(r)) {
        if (r.type !== Ke || r.children === "v-if") {
          if (t)
            return;
          t = r;
        }
      } else
        return;
    }
    return t;
  }
  const mm = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || as(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, hm = (e, t) => {
    const n = {};
    for (const r in e)
      (!Fs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  }, el = (e) => e.shapeFlag & 7 || e.type === Ke;
  function pm(e, t, n) {
    const { props: r, children: s, component: i } = e, { props: o, children: a, patchFlag: l } = t, u = i.emitsOptions;
    if ({}.NODE_ENV !== "production" && (s || a) && Hn || t.dirs || t.transition)
      return !0;
    if (n && l >= 0) {
      if (l & 1024)
        return !0;
      if (l & 16)
        return r ? tl(r, o, u) : !!o;
      if (l & 8) {
        const f = t.dynamicProps;
        for (let d = 0; d < f.length; d++) {
          const m = f[d];
          if (o[m] !== r[m] && !mi(u, m))
            return !0;
        }
      }
    } else
      return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? tl(r, o, u) : !0 : !!o;
    return !1;
  }
  function tl(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
      return !0;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (t[i] !== e[i] && !mi(n, i))
        return !0;
    }
    return !1;
  }
  function _m({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; )
      (e = t.vnode).el = n, t = t.parent;
  }
  const gm = (e) => e.__isSuspense;
  function vm(e, t) {
    t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Cu(e);
  }
  function uo(e, t) {
    if (!ze)
      ({}).NODE_ENV !== "production" && x("provide() can only be used inside setup().");
    else {
      let n = ze.provides;
      const r = ze.parent && ze.parent.provides;
      r === n && (n = ze.provides = Object.create(r)), n[e] = t;
    }
  }
  function Bn(e, t, n = !1) {
    const r = ze || at;
    if (r) {
      const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
      if (s && e in s)
        return s[e];
      if (arguments.length > 1)
        return n && J(t) ? t.call(r.proxy) : t;
      ({}).NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
    } else
      ({}).NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
  }
  const Os = {};
  function It(e, t, n) {
    return {}.NODE_ENV !== "production" && !J(t) && x("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ju(e, t, n);
  }
  function ju(e, t, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = Oe) {
    ({}).NODE_ENV !== "production" && !t && (n !== void 0 && x('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && x('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
    const a = (V) => {
      x("Invalid watch source: ", V, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    }, l = ze;
    let u, f = !1, d = !1;
    if (xe(e) ? (u = () => e.value, f = Ys(e)) : wn(e) ? (u = () => e, r = !0) : X(e) ? (d = !0, f = e.some((V) => wn(V) || Ys(V)), u = () => e.map((V) => {
      if (xe(V))
        return V.value;
      if (wn(V))
        return zn(V);
      if (J(V))
        return an(V, l, 2);
      ({}).NODE_ENV !== "production" && a(V);
    })) : J(e) ? t ? u = () => an(e, l, 2) : u = () => {
      if (!(l && l.isUnmounted))
        return m && m(), Ot(e, l, 3, [$]);
    } : (u = qe, {}.NODE_ENV !== "production" && a(e)), t && r) {
      const V = u;
      u = () => zn(V());
    }
    let m, $ = (V) => {
      m = Y.onStop = () => {
        an(V, l, 4);
      };
    }, E;
    if (es)
      if ($ = qe, t ? n && Ot(t, l, 3, [
        u(),
        d ? [] : void 0,
        $
      ]) : u(), s === "sync") {
        const V = Eh();
        E = V.__watcherHandles || (V.__watcherHandles = []);
      } else
        return qe;
    let O = d ? new Array(e.length).fill(Os) : Os;
    const M = () => {
      if (!!Y.active)
        if (t) {
          const V = Y.run();
          (r || f || (d ? V.some((k, te) => Br(k, O[te])) : Br(V, O))) && (m && m(), Ot(t, l, 3, [
            V,
            O === Os ? void 0 : d && O[0] === Os ? [] : O,
            $
          ]), O = V);
        } else
          Y.run();
    };
    M.allowRecurse = !!t;
    let P;
    s === "sync" ? P = M : s === "post" ? P = () => ct(M, l && l.suspense) : (M.pre = !0, l && (M.id = l.uid), P = () => fi(M));
    const Y = new qo(u, P);
    ({}).NODE_ENV !== "production" && (Y.onTrack = i, Y.onTrigger = o), t ? n ? M() : O = Y.run() : s === "post" ? ct(Y.run.bind(Y), l && l.suspense) : Y.run();
    const B = () => {
      Y.stop(), l && l.scope && jo(l.scope.effects, Y);
    };
    return E && E.push(B), B;
  }
  function ym(e, t, n) {
    const r = this.proxy, s = Se(e) ? e.includes(".") ? Wu(r, e) : () => r[e] : e.bind(r, r);
    let i;
    J(t) ? i = t : (i = t.handler, n = t);
    const o = ze;
    br(this);
    const a = ju(s, i.bind(r), n);
    return o ? br(o) : Gn(), a;
  }
  function Wu(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++)
        r = r[n[s]];
      return r;
    };
  }
  function zn(e, t) {
    if (!ve(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
      return e;
    if (t.add(e), xe(e))
      zn(e.value, t);
    else if (X(e))
      for (let n = 0; n < e.length; n++)
        zn(e[n], t);
    else if (ii(e) || Un(e))
      e.forEach((n) => {
        zn(n, t);
      });
    else if (cu(e))
      for (const n in e)
        zn(e[n], t);
    return e;
  }
  function Em() {
    const e = {
      isMounted: !1,
      isLeaving: !1,
      isUnmounting: !1,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return ea(() => {
      e.isMounted = !0;
    }), ta(() => {
      e.isUnmounting = !0;
    }), e;
  }
  const $t = [Function, Array], $m = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: $t,
      onEnter: $t,
      onAfterEnter: $t,
      onEnterCancelled: $t,
      onBeforeLeave: $t,
      onLeave: $t,
      onAfterLeave: $t,
      onLeaveCancelled: $t,
      onBeforeAppear: $t,
      onAppear: $t,
      onAfterAppear: $t,
      onAppearCancelled: $t
    },
    setup(e, { slots: t }) {
      const n = ds(), r = Em();
      let s;
      return () => {
        const i = t.default && Bu(t.default(), !0);
        if (!i || !i.length)
          return;
        let o = i[0];
        if (i.length > 1) {
          let O = !1;
          for (const M of i)
            if (M.type !== Ke) {
              if ({}.NODE_ENV !== "production" && O) {
                x("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                break;
              }
              if (o = M, O = !0, {}.NODE_ENV === "production")
                break;
            }
        }
        const a = re(e), { mode: l } = a;
        if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && x(`invalid <transition> mode: ${l}`), r.isLeaving)
          return zi(o);
        const u = nl(o);
        if (!u)
          return zi(o);
        const f = co(u, a, r, n);
        fo(u, f);
        const d = n.subTree, m = d && nl(d);
        let $ = !1;
        const { getTransitionKey: E } = u.type;
        if (E) {
          const O = E();
          s === void 0 ? s = O : O !== s && (s = O, $ = !0);
        }
        if (m && m.type !== Ke && (!Pn(u, m) || $)) {
          const O = co(m, a, r, n);
          if (fo(m, O), l === "out-in")
            return r.isLeaving = !0, O.afterLeave = () => {
              r.isLeaving = !1, n.update.active !== !1 && n.update();
            }, zi(o);
          l === "in-out" && u.type !== Ke && (O.delayLeave = (M, P, Y) => {
            const B = Hu(r, m);
            B[String(m.key)] = m, M._leaveCb = () => {
              P(), M._leaveCb = void 0, delete f.delayedLeave;
            }, f.delayedLeave = Y;
          });
        }
        return o;
      };
    }
  }, bm = $m;
  function Hu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function co(e, t, n, r) {
    const { appear: s, mode: i, persisted: o = !1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: $, onLeaveCancelled: E, onBeforeAppear: O, onAppear: M, onAfterAppear: P, onAppearCancelled: Y } = t, B = String(e.key), V = Hu(n, e), k = (q, Q) => {
      q && Ot(q, r, 9, Q);
    }, te = (q, Q) => {
      const ie = Q[1];
      k(q, Q), X(q) ? q.every((ge) => ge.length <= 1) && ie() : q.length <= 1 && ie();
    }, Z = {
      mode: i,
      persisted: o,
      beforeEnter(q) {
        let Q = a;
        if (!n.isMounted)
          if (s)
            Q = O || a;
          else
            return;
        q._leaveCb && q._leaveCb(!0);
        const ie = V[B];
        ie && Pn(e, ie) && ie.el._leaveCb && ie.el._leaveCb(), k(Q, [q]);
      },
      enter(q) {
        let Q = l, ie = u, ge = f;
        if (!n.isMounted)
          if (s)
            Q = M || l, ie = P || u, ge = Y || f;
          else
            return;
        let we = !1;
        const je = q._enterCb = (gn) => {
          we || (we = !0, gn ? k(ge, [q]) : k(ie, [q]), Z.delayedLeave && Z.delayedLeave(), q._enterCb = void 0);
        };
        Q ? te(Q, [q, je]) : je();
      },
      leave(q, Q) {
        const ie = String(e.key);
        if (q._enterCb && q._enterCb(!0), n.isUnmounting)
          return Q();
        k(d, [q]);
        let ge = !1;
        const we = q._leaveCb = (je) => {
          ge || (ge = !0, Q(), je ? k(E, [q]) : k($, [q]), q._leaveCb = void 0, V[ie] === e && delete V[ie]);
        };
        V[ie] = e, m ? te(m, [q, we]) : we();
      },
      clone(q) {
        return co(q, t, n, r);
      }
    };
    return Z;
  }
  function zi(e) {
    if (cs(e))
      return e = Ht(e), e.children = null, e;
  }
  function nl(e) {
    return cs(e) ? e.children ? e.children[0] : void 0 : e;
  }
  function fo(e, t) {
    e.shapeFlag & 6 && e.component ? fo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Bu(e, t = !1, n) {
    let r = [], s = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
      o.type === C ? (o.patchFlag & 128 && s++, r = r.concat(Bu(o.children, t, a))) : (t || o.type !== Ke) && r.push(a != null ? Ht(o, { key: a }) : o);
    }
    if (s > 1)
      for (let i = 0; i < r.length; i++)
        r[i].patchFlag = -2;
    return r;
  }
  const Ss = (e) => !!e.type.__asyncLoader, cs = (e) => e.type.__isKeepAlive;
  function Om(e, t) {
    qu(e, "a", t);
  }
  function Nm(e, t) {
    qu(e, "da", t);
  }
  function qu(e, t, n = ze) {
    const r = e.__wdc || (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated)
          return;
        s = s.parent;
      }
      return e();
    });
    if (pi(t, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; )
        cs(s.parent.vnode) && Dm(r, t, n, s), s = s.parent;
    }
  }
  function Dm(e, t, n, r) {
    const s = pi(t, e, r, !0);
    na(() => {
      jo(r[t], s);
    }, n);
  }
  function pi(e, t, n = ze, r = !1) {
    if (n) {
      const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
        if (n.isUnmounted)
          return;
        tr(), br(n);
        const a = Ot(t, n, e, o);
        return Gn(), nr(), a;
      });
      return r ? s.unshift(i) : s.push(i), i;
    } else if ({}.NODE_ENV !== "production") {
      const s = Ln(Xo[e].replace(/ hook$/, ""));
      x(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  const hn = (e) => (t, n = ze) => (!es || e === "sp") && pi(e, (...r) => t(...r), n), Gu = hn("bm"), ea = hn("m"), wm = hn("bu"), Tm = hn("u"), ta = hn("bum"), na = hn("um"), km = hn("sp"), Mm = hn("rtg"), Sm = hn("rtc");
  function Im(e, t = ze) {
    pi("ec", e, t);
  }
  function Ku(e) {
    rf(e) && x("Do not use built-in directive ids as custom directive id: " + e);
  }
  function ln(e, t) {
    const n = at;
    if (n === null)
      return {}.NODE_ENV !== "production" && x("withDirectives can only be used inside render functions."), e;
    const r = gi(n) || n.proxy, s = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [o, a, l, u = Oe] = t[i];
      o && (J(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && zn(a), s.push({
        dir: o,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: u
      }));
    }
    return e;
  }
  function xn(e, t, n, r) {
    const s = e.dirs, i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      i && (a.oldValue = i[o].value);
      let l = a.dir[r];
      l && (tr(), Ot(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), nr());
    }
  }
  const Ws = "components";
  function Jn(e, t) {
    return Zu(Ws, e, !0, t) || e;
  }
  const Xu = Symbol();
  function xm(e) {
    return Se(e) ? Zu(Ws, e, !1) || e : e || Xu;
  }
  function Zu(e, t, n = !0, r = !1) {
    const s = at || ze;
    if (s) {
      const i = s.type;
      if (e === Ws) {
        const a = aa(i, !1);
        if (a && (a === t || a === Wt(t) || a === Xn(Wt(t))))
          return i;
      }
      const o = rl(s[e] || i[e], t) || rl(s.appContext[e], t);
      if (!o && r)
        return i;
      if ({}.NODE_ENV !== "production" && n && !o) {
        const a = e === Ws ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
        x(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
      }
      return o;
    } else
      ({}).NODE_ENV !== "production" && x(`resolve${Xn(e.slice(0, -1))} can only be used in render() or setup().`);
  }
  function rl(e, t) {
    return e && (e[t] || e[Wt(t)] || e[Xn(Wt(t))]);
  }
  function _t(e, t, n, r) {
    let s;
    const i = n && n[r];
    if (X(e) || Se(e)) {
      s = new Array(e.length);
      for (let o = 0, a = e.length; o < a; o++)
        s[o] = t(e[o], o, void 0, i && i[o]);
    } else if (typeof e == "number") {
      ({}).NODE_ENV !== "production" && !Number.isInteger(e) && x(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
      for (let o = 0; o < e; o++)
        s[o] = t(o + 1, o, void 0, i && i[o]);
    } else if (ve(e))
      if (e[Symbol.iterator])
        s = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]));
      else {
        const o = Object.keys(e);
        s = new Array(o.length);
        for (let a = 0, l = o.length; a < l; a++) {
          const u = o[a];
          s[a] = t(e[u], u, a, i && i[a]);
        }
      }
    else
      s = [];
    return n && (n[r] = s), s;
  }
  const mo = (e) => e ? dc(e) ? gi(e) || e.proxy : mo(e.parent) : null, qn = /* @__PURE__ */ Ve(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? hr(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? hr(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? hr(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? hr(e.refs) : e.refs,
    $parent: (e) => mo(e.parent),
    $root: (e) => mo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => sa(e),
    $forceUpdate: (e) => e.f || (e.f = () => fi(e.update)),
    $nextTick: (e) => e.n || (e.n = oo.bind(e.proxy)),
    $watch: (e) => ym.bind(e)
  }), ra = (e) => e === "_" || e === "$", Yi = (e, t) => e !== Oe && !e.__isScriptSetup && le(e, t), Ju = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l } = e;
      if ({}.NODE_ENV !== "production" && t === "__isVue")
        return !0;
      let u;
      if (t[0] !== "$") {
        const $ = o[t];
        if ($ !== void 0)
          switch ($) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Yi(r, t))
            return o[t] = 1, r[t];
          if (s !== Oe && le(s, t))
            return o[t] = 2, s[t];
          if ((u = e.propsOptions[0]) && le(u, t))
            return o[t] = 3, i[t];
          if (n !== Oe && le(n, t))
            return o[t] = 4, n[t];
          ho && (o[t] = 0);
        }
      }
      const f = qn[t];
      let d, m;
      if (f)
        return t === "$attrs" && (ft(e, "get", t), {}.NODE_ENV !== "production" && js()), f(e);
      if ((d = a.__cssModules) && (d = d[t]))
        return d;
      if (n !== Oe && le(n, t))
        return o[t] = 4, n[t];
      if (m = l.config.globalProperties, le(m, t))
        return m[t];
      ({}).NODE_ENV !== "production" && at && (!Se(t) || t.indexOf("__v") !== 0) && (s !== Oe && ra(t[0]) && le(s, t) ? x(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === at && x(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Yi(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && le(s, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Oe && le(r, t) ? (r[t] = n, !0) : le(e.props, t) ? ({}.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && x(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
        enumerable: !0,
        configurable: !0,
        value: n
      }) : i[t] = n, !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
      let a;
      return !!n[o] || e !== Oe && le(e, o) || Yi(t, o) || (a = i[0]) && le(a, o) || le(r, o) || le(qn, o) || le(s.config.globalProperties, o);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  ({}).NODE_ENV !== "production" && (Ju.ownKeys = (e) => (x("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
  function Rm(e) {
    const t = {};
    return Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e
    }), Object.keys(qn).forEach((n) => {
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        get: () => qn[n](e),
        set: qe
      });
    }), t;
  }
  function Cm(e) {
    const { ctx: t, propsOptions: [n] } = e;
    n && Object.keys(n).forEach((r) => {
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[r],
        set: qe
      });
    });
  }
  function Lm(e) {
    const { ctx: t, setupState: n } = e;
    Object.keys(re(n)).forEach((r) => {
      if (!n.__isScriptSetup) {
        if (ra(r[0])) {
          x(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t, r, {
          enumerable: !0,
          configurable: !0,
          get: () => n[r],
          set: qe
        });
      }
    });
  }
  function Vm() {
    const e = /* @__PURE__ */ Object.create(null);
    return (t, n) => {
      e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
    };
  }
  let ho = !0;
  function Pm(e) {
    const t = sa(e), n = e.proxy, r = e.ctx;
    ho = !1, t.beforeCreate && sl(t.beforeCreate, e, "bc");
    const {
      data: s,
      computed: i,
      methods: o,
      watch: a,
      provide: l,
      inject: u,
      created: f,
      beforeMount: d,
      mounted: m,
      beforeUpdate: $,
      updated: E,
      activated: O,
      deactivated: M,
      beforeDestroy: P,
      beforeUnmount: Y,
      destroyed: B,
      unmounted: V,
      render: k,
      renderTracked: te,
      renderTriggered: Z,
      errorCaptured: q,
      serverPrefetch: Q,
      expose: ie,
      inheritAttrs: ge,
      components: we,
      directives: je,
      filters: gn
    } = t, Et = {}.NODE_ENV !== "production" ? Vm() : null;
    if ({}.NODE_ENV !== "production") {
      const [oe] = e.propsOptions;
      if (oe)
        for (const ee in oe)
          Et("Props", ee);
    }
    if (u && Am(u, r, Et, e.appContext.config.unwrapInjectedRef), o)
      for (const oe in o) {
        const ee = o[oe];
        J(ee) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(r, oe, {
          value: ee.bind(n),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[oe] = ee.bind(n), {}.NODE_ENV !== "production" && Et("Methods", oe)) : {}.NODE_ENV !== "production" && x(`Method "${oe}" has type "${typeof ee}" in the component definition. Did you reference the function correctly?`);
      }
    if (s) {
      ({}).NODE_ENV !== "production" && !J(s) && x("The data option must be a function. Plain object usage is no longer supported.");
      const oe = s.call(n, n);
      if ({}.NODE_ENV !== "production" && Wo(oe) && x("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ve(oe))
        ({}).NODE_ENV !== "production" && x("data() should return an object.");
      else if (e.data = Dr(oe), {}.NODE_ENV !== "production")
        for (const ee in oe)
          Et("Data", ee), ra(ee[0]) || Object.defineProperty(r, ee, {
            configurable: !0,
            enumerable: !0,
            get: () => oe[ee],
            set: qe
          });
    }
    if (ho = !0, i)
      for (const oe in i) {
        const ee = i[oe], nt = J(ee) ? ee.bind(n, n) : J(ee.get) ? ee.get.bind(n, n) : qe;
        ({}).NODE_ENV !== "production" && nt === qe && x(`Computed property "${oe}" has no getter.`);
        const De = !J(ee) && J(ee.set) ? ee.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
          x(`Write operation failed: computed property "${oe}" is readonly.`);
        } : qe, rt = ye({
          get: nt,
          set: De
        });
        Object.defineProperty(r, oe, {
          enumerable: !0,
          configurable: !0,
          get: () => rt.value,
          set: (Be) => rt.value = Be
        }), {}.NODE_ENV !== "production" && Et("Computed", oe);
      }
    if (a)
      for (const oe in a)
        Qu(a[oe], r, n, oe);
    if (l) {
      const oe = J(l) ? l.call(n) : l;
      Reflect.ownKeys(oe).forEach((ee) => {
        uo(ee, oe[ee]);
      });
    }
    f && sl(f, e, "c");
    function Fe(oe, ee) {
      X(ee) ? ee.forEach((nt) => oe(nt.bind(n))) : ee && oe(ee.bind(n));
    }
    if (Fe(Gu, d), Fe(ea, m), Fe(wm, $), Fe(Tm, E), Fe(Om, O), Fe(Nm, M), Fe(Im, q), Fe(Sm, te), Fe(Mm, Z), Fe(ta, Y), Fe(na, V), Fe(km, Q), X(ie))
      if (ie.length) {
        const oe = e.exposed || (e.exposed = {});
        ie.forEach((ee) => {
          Object.defineProperty(oe, ee, {
            get: () => n[ee],
            set: (nt) => n[ee] = nt
          });
        });
      } else
        e.exposed || (e.exposed = {});
    k && e.render === qe && (e.render = k), ge != null && (e.inheritAttrs = ge), we && (e.components = we), je && (e.directives = je);
  }
  function Am(e, t, n = qe, r = !1) {
    X(e) && (e = po(e));
    for (const s in e) {
      const i = e[s];
      let o;
      ve(i) ? "default" in i ? o = Bn(i.from || s, i.default, !0) : o = Bn(i.from || s) : o = Bn(i), xe(o) ? r ? Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o.value,
        set: (a) => o.value = a
      }) : ({}.NODE_ENV !== "production" && x(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = o) : t[s] = o, {}.NODE_ENV !== "production" && n("Inject", s);
    }
  }
  function sl(e, t, n) {
    Ot(X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Qu(e, t, n, r) {
    const s = r.includes(".") ? Wu(n, r) : () => n[r];
    if (Se(e)) {
      const i = t[e];
      J(i) ? It(s, i) : {}.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, i);
    } else if (J(e))
      It(s, e.bind(n));
    else if (ve(e))
      if (X(e))
        e.forEach((i) => Qu(i, t, n, r));
      else {
        const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
        J(i) ? It(s, i, e) : {}.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, i);
      }
    else
      ({}).NODE_ENV !== "production" && x(`Invalid watch option: "${r}"`, e);
  }
  function sa(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, a = i.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((u) => Hs(l, u, o, !0)), Hs(l, t, o)), ve(t) && i.set(t, l), l;
  }
  function Hs(e, t, n, r = !1) {
    const { mixins: s, extends: i } = t;
    i && Hs(e, i, n, !0), s && s.forEach((o) => Hs(e, o, n, !0));
    for (const o in t)
      if (r && o === "expose")
        ({}).NODE_ENV !== "production" && x('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
      else {
        const a = Fm[o] || n && n[o];
        e[o] = a ? a(e[o], t[o]) : t[o];
      }
    return e;
  }
  const Fm = {
    data: il,
    props: Vn,
    emits: Vn,
    methods: Vn,
    computed: Vn,
    beforeCreate: it,
    created: it,
    beforeMount: it,
    mounted: it,
    beforeUpdate: it,
    updated: it,
    beforeDestroy: it,
    beforeUnmount: it,
    destroyed: it,
    unmounted: it,
    activated: it,
    deactivated: it,
    errorCaptured: it,
    serverPrefetch: it,
    components: Vn,
    directives: Vn,
    watch: Ym,
    provide: il,
    inject: zm
  };
  function il(e, t) {
    return t ? e ? function() {
      return Ve(J(e) ? e.call(this, this) : e, J(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function zm(e, t) {
    return Vn(po(e), po(t));
  }
  function po(e) {
    if (X(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++)
        t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function it(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function Vn(e, t) {
    return e ? Ve(Ve(/* @__PURE__ */ Object.create(null), e), t) : t;
  }
  function Ym(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = Ve(/* @__PURE__ */ Object.create(null), e);
    for (const r in t)
      n[r] = it(e[r], t[r]);
    return n;
  }
  function Um(e, t, n, r = !1) {
    const s = {}, i = {};
    zs(i, _i, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ec(e, t, s, i);
    for (const o in e.propsOptions[0])
      o in s || (s[o] = void 0);
    ({}).NODE_ENV !== "production" && nc(t || {}, s, e), n ? e.props = r ? s : Lf(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
  }
  function jm(e) {
    for (; e; ) {
      if (e.type.__hmrId)
        return !0;
      e = e.parent;
    }
  }
  function Wm(e, t, n, r) {
    const { props: s, attrs: i, vnode: { patchFlag: o } } = e, a = re(s), [l] = e.propsOptions;
    let u = !1;
    if (!({}.NODE_ENV !== "production" && jm(e)) && (r || o > 0) && !(o & 16)) {
      if (o & 8) {
        const f = e.vnode.dynamicProps;
        for (let d = 0; d < f.length; d++) {
          let m = f[d];
          if (mi(e.emitsOptions, m))
            continue;
          const $ = t[m];
          if (l)
            if (le(i, m))
              $ !== i[m] && (i[m] = $, u = !0);
            else {
              const E = Wt(m);
              s[E] = _o(l, a, E, $, e, !1);
            }
          else
            $ !== i[m] && (i[m] = $, u = !0);
        }
      }
    } else {
      ec(e, t, s, i) && (u = !0);
      let f;
      for (const d in a)
        (!t || !le(t, d) && ((f = kn(d)) === d || !le(t, f))) && (l ? n && (n[d] !== void 0 || n[f] !== void 0) && (s[d] = _o(l, a, d, void 0, e, !0)) : delete s[d]);
      if (i !== a)
        for (const d in i)
          (!t || !le(t, d) && !0) && (delete i[d], u = !0);
    }
    u && cn(e, "set", "$attrs"), {}.NODE_ENV !== "production" && nc(t || {}, s, e);
  }
  function ec(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1, a;
    if (t)
      for (let l in t) {
        if (Ts(l))
          continue;
        const u = t[l];
        let f;
        s && le(s, f = Wt(l)) ? !i || !i.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : mi(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = !0);
      }
    if (i) {
      const l = re(n), u = a || Oe;
      for (let f = 0; f < i.length; f++) {
        const d = i[f];
        n[d] = _o(s, l, d, u[d], e, !le(u, d));
      }
    }
    return o;
  }
  function _o(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
      const a = le(o, "default");
      if (a && r === void 0) {
        const l = o.default;
        if (o.type !== Function && J(l)) {
          const { propsDefaults: u } = s;
          n in u ? r = u[n] : (br(s), r = u[n] = l.call(null, t), Gn());
        } else
          r = l;
      }
      o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === kn(n)) && (r = !0));
    }
    return r;
  }
  function tc(e, t, n = !1) {
    const r = t.propsCache, s = r.get(e);
    if (s)
      return s;
    const i = e.props, o = {}, a = [];
    let l = !1;
    if (!J(e)) {
      const f = (d) => {
        l = !0;
        const [m, $] = tc(d, t, !0);
        Ve(o, m), $ && a.push(...$);
      };
      !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
    }
    if (!i && !l)
      return ve(e) && r.set(e, gr), gr;
    if (X(i))
      for (let f = 0; f < i.length; f++) {
        ({}).NODE_ENV !== "production" && !Se(i[f]) && x("props must be strings when using array syntax.", i[f]);
        const d = Wt(i[f]);
        ol(d) && (o[d] = Oe);
      }
    else if (i) {
      ({}).NODE_ENV !== "production" && !ve(i) && x("invalid props options", i);
      for (const f in i) {
        const d = Wt(f);
        if (ol(d)) {
          const m = i[f], $ = o[d] = X(m) || J(m) ? { type: m } : Object.assign({}, m);
          if ($) {
            const E = ll(Boolean, $.type), O = ll(String, $.type);
            $[0] = E > -1, $[1] = O < 0 || E < O, (E > -1 || le($, "default")) && a.push(d);
          }
        }
      }
    }
    const u = [o, a];
    return ve(e) && r.set(e, u), u;
  }
  function ol(e) {
    return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
  }
  function go(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? "null" : "";
  }
  function al(e, t) {
    return go(e) === go(t);
  }
  function ll(e, t) {
    return X(t) ? t.findIndex((n) => al(n, e)) : J(t) && al(t, e) ? 0 : -1;
  }
  function nc(e, t, n) {
    const r = re(t), s = n.propsOptions[0];
    for (const i in s) {
      let o = s[i];
      o != null && Hm(i, r[i], o, !le(e, i) && !le(e, kn(i)));
    }
  }
  function Hm(e, t, n, r) {
    const { type: s, required: i, validator: o } = n;
    if (i && r) {
      x('Missing required prop: "' + e + '"');
      return;
    }
    if (!(t == null && !n.required)) {
      if (s != null && s !== !0) {
        let a = !1;
        const l = X(s) ? s : [s], u = [];
        for (let f = 0; f < l.length && !a; f++) {
          const { valid: d, expectedType: m } = qm(t, l[f]);
          u.push(m || ""), a = d;
        }
        if (!a) {
          x(Gm(e, t, u));
          return;
        }
      }
      o && !o(t) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
    }
  }
  const Bm = /* @__PURE__ */ Sn("String,Number,Boolean,Function,Symbol,BigInt");
  function qm(e, t) {
    let n;
    const r = go(t);
    if (Bm(r)) {
      const s = typeof e;
      n = s === r.toLowerCase(), !n && s === "object" && (n = e instanceof t);
    } else
      r === "Object" ? n = ve(e) : r === "Array" ? n = X(e) : r === "null" ? n = e === null : n = e instanceof t;
    return {
      valid: n,
      expectedType: r
    };
  }
  function Gm(e, t, n) {
    let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Xn).join(" | ")}`;
    const s = n[0], i = Ho(t), o = ul(t, s), a = ul(t, i);
    return n.length === 1 && cl(s) && !Km(s, i) && (r += ` with value ${o}`), r += `, got ${i} `, cl(i) && (r += `with value ${a}.`), r;
  }
  function ul(e, t) {
    return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
  }
  function cl(e) {
    return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
  }
  function Km(...e) {
    return e.some((t) => t.toLowerCase() === "boolean");
  }
  const rc = (e) => e[0] === "_" || e === "$stable", ia = (e) => X(e) ? e.map(kt) : [kt(e)], Xm = (e, t, n) => {
    if (t._n)
      return t;
    const r = dm((...s) => ({}.NODE_ENV !== "production" && ze && x(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), ia(t(...s))), n);
    return r._c = !1, r;
  }, sc = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (rc(s))
        continue;
      const i = e[s];
      if (J(i))
        t[s] = Xm(s, i, r);
      else if (i != null) {
        ({}).NODE_ENV !== "production" && x(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
        const o = ia(i);
        t[s] = () => o;
      }
    }
  }, ic = (e, t) => {
    ({}).NODE_ENV !== "production" && !cs(e.vnode) && x("Non-function value encountered for default slot. Prefer function slots for better performance.");
    const n = ia(t);
    e.slots.default = () => n;
  }, Zm = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = re(t), zs(t, "_", n)) : sc(t, e.slots = {});
    } else
      e.slots = {}, t && ic(e, t);
    zs(e.slots, _i, 1);
  }, Jm = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0, o = Oe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? {}.NODE_ENV !== "production" && Hn ? Ve(s, t) : n && a === 1 ? i = !1 : (Ve(s, t), !n && a === 1 && delete s._) : (i = !t.$stable, sc(t, s)), o = t;
    } else
      t && (ic(e, t), o = { default: 1 });
    if (i)
      for (const a in s)
        !rc(a) && !(a in o) && delete s[a];
  };
  function oc() {
    return {
      app: null,
      config: {
        isNativeTag: lu,
        performance: !1,
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
  let Qm = 0;
  function eh(e, t) {
    return function(r, s = null) {
      J(r) || (r = Object.assign({}, r)), s != null && !ve(s) && ({}.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), s = null);
      const i = oc(), o = /* @__PURE__ */ new Set();
      let a = !1;
      const l = i.app = {
        _uid: Qm++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: hl,
        get config() {
          return i.config;
        },
        set config(u) {
          ({}).NODE_ENV !== "production" && x("app.config cannot be replaced. Modify individual options instead.");
        },
        use(u, ...f) {
          return o.has(u) ? {}.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : u && J(u.install) ? (o.add(u), u.install(l, ...f)) : J(u) ? (o.add(u), u(l, ...f)) : {}.NODE_ENV !== "production" && x('A plugin must either be a function or an object with an "install" function.'), l;
        },
        mixin(u) {
          return i.mixins.includes(u) ? {}.NODE_ENV !== "production" && x("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : i.mixins.push(u), l;
        },
        component(u, f) {
          return {}.NODE_ENV !== "production" && yo(u, i.config), f ? ({}.NODE_ENV !== "production" && i.components[u] && x(`Component "${u}" has already been registered in target app.`), i.components[u] = f, l) : i.components[u];
        },
        directive(u, f) {
          return {}.NODE_ENV !== "production" && Ku(u), f ? ({}.NODE_ENV !== "production" && i.directives[u] && x(`Directive "${u}" has already been registered in target app.`), i.directives[u] = f, l) : i.directives[u];
        },
        mount(u, f, d) {
          if (a)
            ({}).NODE_ENV !== "production" && x("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
          else {
            ({}).NODE_ENV !== "production" && u.__vue_app__ && x("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
            const m = Ge(r, s);
            return m.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
              e(Ht(m), u, d);
            }), f && t ? t(m, u) : e(m, u, d), a = !0, l._container = u, u.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = m.component, em(l, hl)), gi(m.component) || m.component.proxy;
          }
        },
        unmount() {
          a ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, tm(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
        },
        provide(u, f) {
          return {}.NODE_ENV !== "production" && u in i.provides && x(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), i.provides[u] = f, l;
        }
      };
      return l;
    };
  }
  function vo(e, t, n, r, s = !1) {
    if (X(e)) {
      e.forEach((m, $) => vo(m, t && (X(t) ? t[$] : t), n, r, s));
      return;
    }
    if (Ss(r) && !s)
      return;
    const i = r.shapeFlag & 4 ? gi(r.component) || r.component.proxy : r.el, o = s ? null : i, { i: a, r: l } = e;
    if ({}.NODE_ENV !== "production" && !a) {
      x("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
      return;
    }
    const u = t && t.r, f = a.refs === Oe ? a.refs = {} : a.refs, d = a.setupState;
    if (u != null && u !== l && (Se(u) ? (f[u] = null, le(d, u) && (d[u] = null)) : xe(u) && (u.value = null)), J(l))
      an(l, a, 12, [o, f]);
    else {
      const m = Se(l), $ = xe(l);
      if (m || $) {
        const E = () => {
          if (e.f) {
            const O = m ? le(d, l) ? d[l] : f[l] : l.value;
            s ? X(O) && jo(O, i) : X(O) ? O.includes(i) || O.push(i) : m ? (f[l] = [i], le(d, l) && (d[l] = f[l])) : (l.value = [i], e.k && (f[e.k] = l.value));
          } else
            m ? (f[l] = o, le(d, l) && (d[l] = o)) : $ ? (l.value = o, e.k && (f[e.k] = o)) : {}.NODE_ENV !== "production" && x("Invalid template ref type:", l, `(${typeof l})`);
        };
        o ? (E.id = -1, ct(E, n)) : E();
      } else
        ({}).NODE_ENV !== "production" && x("Invalid template ref type:", l, `(${typeof l})`);
    }
  }
  let Rr, bn;
  function Qt(e, t) {
    e.appContext.config.performance && Bs() && bn.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && im(e, t, Bs() ? bn.now() : Date.now());
  }
  function en(e, t) {
    if (e.appContext.config.performance && Bs()) {
      const n = `vue-${t}-${e.uid}`, r = n + ":end";
      bn.mark(r), bn.measure(`<${vi(e, e.type)}> ${t}`, n, r), bn.clearMarks(n), bn.clearMarks(r);
    }
    ({}).NODE_ENV !== "production" && om(e, t, Bs() ? bn.now() : Date.now());
  }
  function Bs() {
    return Rr !== void 0 || (typeof window < "u" && window.performance ? (Rr = !0, bn = window.performance) : Rr = !1), Rr;
  }
  function th() {
    const e = [];
    if ({}.NODE_ENV !== "production" && e.length) {
      const t = e.length > 1;
      console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  const ct = vm;
  function nh(e) {
    return rh(e);
  }
  function rh(e, t) {
    th();
    const n = du();
    n.__VUE__ = !0, {}.NODE_ENV !== "production" && Au(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
    const { insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: u, setElementText: f, parentNode: d, nextSibling: m, setScopeId: $ = qe, insertStaticContent: E } = e, O = (c, h, b, T = null, w = null, R = null, F = !1, S = null, L = {}.NODE_ENV !== "production" && Hn ? !1 : !!h.dynamicChildren) => {
      if (c === h)
        return;
      c && !Pn(c, h) && (T = or(c), Lt(c, w, R, !0), c = null), h.patchFlag === -2 && (L = !1, h.dynamicChildren = null);
      const { type: N, ref: p, shapeFlag: y } = h;
      switch (N) {
        case wr:
          M(c, h, b, T);
          break;
        case Ke:
          P(c, h, b, T);
          break;
        case xs:
          c == null ? Y(h, b, T, F) : {}.NODE_ENV !== "production" && B(c, h, b, F);
          break;
        case C:
          je(c, h, b, T, w, R, F, S, L);
          break;
        default:
          y & 1 ? te(c, h, b, T, w, R, F, S, L) : y & 6 ? gn(c, h, b, T, w, R, F, S, L) : y & 64 || y & 128 ? N.process(c, h, b, T, w, R, F, S, L, vn) : {}.NODE_ENV !== "production" && x("Invalid VNode type:", N, `(${typeof N})`);
      }
      p != null && w && vo(p, c && c.ref, R, h || c, !h);
    }, M = (c, h, b, T) => {
      if (c == null)
        r(h.el = a(h.children), b, T);
      else {
        const w = h.el = c.el;
        h.children !== c.children && u(w, h.children);
      }
    }, P = (c, h, b, T) => {
      c == null ? r(h.el = l(h.children || ""), b, T) : h.el = c.el;
    }, Y = (c, h, b, T) => {
      [c.el, c.anchor] = E(c.children, h, b, T, c.el, c.anchor);
    }, B = (c, h, b, T) => {
      if (h.children !== c.children) {
        const w = m(c.anchor);
        k(c), [h.el, h.anchor] = E(h.children, b, w, T);
      } else
        h.el = c.el, h.anchor = c.anchor;
    }, V = ({ el: c, anchor: h }, b, T) => {
      let w;
      for (; c && c !== h; )
        w = m(c), r(c, b, T), c = w;
      r(h, b, T);
    }, k = ({ el: c, anchor: h }) => {
      let b;
      for (; c && c !== h; )
        b = m(c), s(c), c = b;
      s(h);
    }, te = (c, h, b, T, w, R, F, S, L) => {
      F = F || h.type === "svg", c == null ? Z(h, b, T, w, R, F, S, L) : ie(c, h, w, R, F, S, L);
    }, Z = (c, h, b, T, w, R, F, S) => {
      let L, N;
      const { type: p, props: y, shapeFlag: U, transition: H, dirs: se } = c;
      if (L = c.el = o(c.type, R, y && y.is, y), U & 8 ? f(L, c.children) : U & 16 && Q(c.children, L, null, T, w, R && p !== "foreignObject", F, S), se && xn(c, null, T, "created"), y) {
        for (const ue in y)
          ue !== "value" && !Ts(ue) && i(L, ue, null, y[ue], R, c.children, T, w, wt);
        "value" in y && i(L, "value", null, y.value), (N = y.onVnodeBeforeMount) && Pt(N, T, c);
      }
      q(L, c, c.scopeId, F, T), {}.NODE_ENV !== "production" && (Object.defineProperty(L, "__vnode", {
        value: c,
        enumerable: !1
      }), Object.defineProperty(L, "__vueParentComponent", {
        value: T,
        enumerable: !1
      })), se && xn(c, null, T, "beforeMount");
      const me = (!w || w && !w.pendingBranch) && H && !H.persisted;
      me && H.beforeEnter(L), r(L, h, b), ((N = y && y.onVnodeMounted) || me || se) && ct(() => {
        N && Pt(N, T, c), me && H.enter(L), se && xn(c, null, T, "mounted");
      }, w);
    }, q = (c, h, b, T, w) => {
      if (b && $(c, b), T)
        for (let R = 0; R < T.length; R++)
          $(c, T[R]);
      if (w) {
        let R = w.subTree;
        if ({}.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && (R = Uu(R.children) || R), h === R) {
          const F = w.vnode;
          q(c, F, F.scopeId, F.slotScopeIds, w.parent);
        }
      }
    }, Q = (c, h, b, T, w, R, F, S, L = 0) => {
      for (let N = L; N < c.length; N++) {
        const p = c[N] = S ? $n(c[N]) : kt(c[N]);
        O(null, p, h, b, T, w, R, F, S);
      }
    }, ie = (c, h, b, T, w, R, F) => {
      const S = h.el = c.el;
      let { patchFlag: L, dynamicChildren: N, dirs: p } = h;
      L |= c.patchFlag & 16;
      const y = c.props || Oe, U = h.props || Oe;
      let H;
      b && Rn(b, !1), (H = U.onVnodeBeforeUpdate) && Pt(H, b, h, c), p && xn(h, c, b, "beforeUpdate"), b && Rn(b, !0), {}.NODE_ENV !== "production" && Hn && (L = 0, F = !1, N = null);
      const se = w && h.type !== "foreignObject";
      if (N ? (ge(c.dynamicChildren, N, S, b, T, se, R), {}.NODE_ENV !== "production" && b && b.type.__hmrId && Is(c, h)) : F || nt(c, h, S, null, b, T, se, R, !1), L > 0) {
        if (L & 16)
          we(S, h, y, U, b, T, w);
        else if (L & 2 && y.class !== U.class && i(S, "class", null, U.class, w), L & 4 && i(S, "style", y.style, U.style, w), L & 8) {
          const me = h.dynamicProps;
          for (let ue = 0; ue < me.length; ue++) {
            const $e = me[ue], mt = y[$e], Zt = U[$e];
            (Zt !== mt || $e === "value") && i(S, $e, mt, Zt, w, c.children, b, T, wt);
          }
        }
        L & 1 && c.children !== h.children && f(S, h.children);
      } else
        !F && N == null && we(S, h, y, U, b, T, w);
      ((H = U.onVnodeUpdated) || p) && ct(() => {
        H && Pt(H, b, h, c), p && xn(h, c, b, "updated");
      }, T);
    }, ge = (c, h, b, T, w, R, F) => {
      for (let S = 0; S < h.length; S++) {
        const L = c[S], N = h[S], p = L.el && (L.type === C || !Pn(L, N) || L.shapeFlag & 70) ? d(L.el) : b;
        O(L, N, p, null, T, w, R, F, !0);
      }
    }, we = (c, h, b, T, w, R, F) => {
      if (b !== T) {
        if (b !== Oe)
          for (const S in b)
            !Ts(S) && !(S in T) && i(c, S, b[S], null, F, h.children, w, R, wt);
        for (const S in T) {
          if (Ts(S))
            continue;
          const L = T[S], N = b[S];
          L !== N && S !== "value" && i(c, S, N, L, F, h.children, w, R, wt);
        }
        "value" in T && i(c, "value", b.value, T.value);
      }
    }, je = (c, h, b, T, w, R, F, S, L) => {
      const N = h.el = c ? c.el : a(""), p = h.anchor = c ? c.anchor : a("");
      let { patchFlag: y, dynamicChildren: U, slotScopeIds: H } = h;
      ({}).NODE_ENV !== "production" && (Hn || y & 2048) && (y = 0, L = !1, U = null), H && (S = S ? S.concat(H) : H), c == null ? (r(N, b, T), r(p, b, T), Q(h.children, b, p, w, R, F, S, L)) : y > 0 && y & 64 && U && c.dynamicChildren ? (ge(c.dynamicChildren, U, b, w, R, F, S), {}.NODE_ENV !== "production" && w && w.type.__hmrId ? Is(c, h) : (h.key != null || w && h === w.subTree) && Is(c, h, !0)) : nt(c, h, b, p, w, R, F, S, L);
    }, gn = (c, h, b, T, w, R, F, S, L) => {
      h.slotScopeIds = S, c == null ? h.shapeFlag & 512 ? w.ctx.activate(h, b, T, F, L) : Et(h, b, T, w, R, F, L) : Fe(c, h, L);
    }, Et = (c, h, b, T, w, R, F) => {
      const S = c.component = fh(c, T, w);
      if ({}.NODE_ENV !== "production" && S.type.__hmrId && Xf(S), {}.NODE_ENV !== "production" && (ks(c), Qt(S, "mount")), cs(c) && (S.ctx.renderer = vn), {}.NODE_ENV !== "production" && Qt(S, "init"), hh(S), {}.NODE_ENV !== "production" && en(S, "init"), S.asyncDep) {
        if (w && w.registerDep(S, oe), !c.el) {
          const L = S.subTree = Ge(Ke);
          P(null, L, h, b);
        }
        return;
      }
      oe(S, c, h, b, w, R, F), {}.NODE_ENV !== "production" && (Ms(), en(S, "mount"));
    }, Fe = (c, h, b) => {
      const T = h.component = c.component;
      if (pm(c, h, b))
        if (T.asyncDep && !T.asyncResolved) {
          ({}).NODE_ENV !== "production" && ks(h), ee(T, h, b), {}.NODE_ENV !== "production" && Ms();
          return;
        } else
          T.next = h, Gf(T.update), T.update();
      else
        h.el = c.el, T.vnode = h;
    }, oe = (c, h, b, T, w, R, F) => {
      const S = () => {
        if (c.isMounted) {
          let { next: p, bu: y, u: U, parent: H, vnode: se } = c, me = p, ue;
          ({}).NODE_ENV !== "production" && ks(p || c.vnode), Rn(c, !1), p ? (p.el = se.el, ee(c, p, F)) : p = se, y && cr(y), (ue = p.props && p.props.onVnodeBeforeUpdate) && Pt(ue, H, p, se), Rn(c, !0), {}.NODE_ENV !== "production" && Qt(c, "render");
          const $e = Fi(c);
          ({}).NODE_ENV !== "production" && en(c, "render");
          const mt = c.subTree;
          c.subTree = $e, {}.NODE_ENV !== "production" && Qt(c, "patch"), O(
            mt,
            $e,
            d(mt.el),
            or(mt),
            c,
            w,
            R
          ), {}.NODE_ENV !== "production" && en(c, "patch"), p.el = $e.el, me === null && _m(c, $e.el), U && ct(U, w), (ue = p.props && p.props.onVnodeUpdated) && ct(() => Pt(ue, H, p, se), w), {}.NODE_ENV !== "production" && Fu(c), {}.NODE_ENV !== "production" && Ms();
        } else {
          let p;
          const { el: y, props: U } = h, { bm: H, m: se, parent: me } = c, ue = Ss(h);
          if (Rn(c, !1), H && cr(H), !ue && (p = U && U.onVnodeBeforeMount) && Pt(p, me, h), Rn(c, !0), y && Ir) {
            const $e = () => {
              ({}).NODE_ENV !== "production" && Qt(c, "render"), c.subTree = Fi(c), {}.NODE_ENV !== "production" && en(c, "render"), {}.NODE_ENV !== "production" && Qt(c, "hydrate"), Ir(y, c.subTree, c, w, null), {}.NODE_ENV !== "production" && en(c, "hydrate");
            };
            ue ? h.type.__asyncLoader().then(
              () => !c.isUnmounted && $e()
            ) : $e();
          } else {
            ({}).NODE_ENV !== "production" && Qt(c, "render");
            const $e = c.subTree = Fi(c);
            ({}).NODE_ENV !== "production" && en(c, "render"), {}.NODE_ENV !== "production" && Qt(c, "patch"), O(null, $e, b, T, c, w, R), {}.NODE_ENV !== "production" && en(c, "patch"), h.el = $e.el;
          }
          if (se && ct(se, w), !ue && (p = U && U.onVnodeMounted)) {
            const $e = h;
            ct(() => Pt(p, me, $e), w);
          }
          (h.shapeFlag & 256 || me && Ss(me.vnode) && me.vnode.shapeFlag & 256) && c.a && ct(c.a, w), c.isMounted = !0, {}.NODE_ENV !== "production" && nm(c), h = b = T = null;
        }
      }, L = c.effect = new qo(
        S,
        () => fi(N),
        c.scope
      ), N = c.update = () => L.run();
      N.id = c.uid, Rn(c, !0), {}.NODE_ENV !== "production" && (L.onTrack = c.rtc ? (p) => cr(c.rtc, p) : void 0, L.onTrigger = c.rtg ? (p) => cr(c.rtg, p) : void 0, N.ownerInstance = c), N();
    }, ee = (c, h, b) => {
      h.component = c;
      const T = c.vnode.props;
      c.vnode = h, c.next = null, Wm(c, h.props, T, b), Jm(c, h.children, b), tr(), Ja(), nr();
    }, nt = (c, h, b, T, w, R, F, S, L = !1) => {
      const N = c && c.children, p = c ? c.shapeFlag : 0, y = h.children, { patchFlag: U, shapeFlag: H } = h;
      if (U > 0) {
        if (U & 128) {
          rt(N, y, b, T, w, R, F, S, L);
          return;
        } else if (U & 256) {
          De(N, y, b, T, w, R, F, S, L);
          return;
        }
      }
      H & 8 ? (p & 16 && wt(N, w, R), y !== N && f(b, y)) : p & 16 ? H & 16 ? rt(N, y, b, T, w, R, F, S, L) : wt(N, w, R, !0) : (p & 8 && f(b, ""), H & 16 && Q(y, b, T, w, R, F, S, L));
    }, De = (c, h, b, T, w, R, F, S, L) => {
      c = c || gr, h = h || gr;
      const N = c.length, p = h.length, y = Math.min(N, p);
      let U;
      for (U = 0; U < y; U++) {
        const H = h[U] = L ? $n(h[U]) : kt(h[U]);
        O(c[U], H, b, null, w, R, F, S, L);
      }
      N > p ? wt(c, w, R, !0, !1, y) : Q(h, b, T, w, R, F, S, L, y);
    }, rt = (c, h, b, T, w, R, F, S, L) => {
      let N = 0;
      const p = h.length;
      let y = c.length - 1, U = p - 1;
      for (; N <= y && N <= U; ) {
        const H = c[N], se = h[N] = L ? $n(h[N]) : kt(h[N]);
        if (Pn(H, se))
          O(H, se, b, null, w, R, F, S, L);
        else
          break;
        N++;
      }
      for (; N <= y && N <= U; ) {
        const H = c[y], se = h[U] = L ? $n(h[U]) : kt(h[U]);
        if (Pn(H, se))
          O(H, se, b, null, w, R, F, S, L);
        else
          break;
        y--, U--;
      }
      if (N > y) {
        if (N <= U) {
          const H = U + 1, se = H < p ? h[H].el : T;
          for (; N <= U; )
            O(null, h[N] = L ? $n(h[N]) : kt(h[N]), b, se, w, R, F, S, L), N++;
        }
      } else if (N > U)
        for (; N <= y; )
          Lt(c[N], w, R, !0), N++;
      else {
        const H = N, se = N, me = /* @__PURE__ */ new Map();
        for (N = se; N <= U; N++) {
          const st = h[N] = L ? $n(h[N]) : kt(h[N]);
          st.key != null && ({}.NODE_ENV !== "production" && me.has(st.key) && x("Duplicate keys found during update:", JSON.stringify(st.key), "Make sure keys are unique."), me.set(st.key, N));
        }
        let ue, $e = 0;
        const mt = U - se + 1;
        let Zt = !1, za = 0;
        const xr = new Array(mt);
        for (N = 0; N < mt; N++)
          xr[N] = 0;
        for (N = H; N <= y; N++) {
          const st = c[N];
          if ($e >= mt) {
            Lt(st, w, R, !0);
            continue;
          }
          let Vt;
          if (st.key != null)
            Vt = me.get(st.key);
          else
            for (ue = se; ue <= U; ue++)
              if (xr[ue - se] === 0 && Pn(st, h[ue])) {
                Vt = ue;
                break;
              }
          Vt === void 0 ? Lt(st, w, R, !0) : (xr[Vt - se] = N + 1, Vt >= za ? za = Vt : Zt = !0, O(st, h[Vt], b, null, w, R, F, S, L), $e++);
        }
        const Ya = Zt ? sh(xr) : gr;
        for (ue = Ya.length - 1, N = mt - 1; N >= 0; N--) {
          const st = se + N, Vt = h[st], Ua = st + 1 < p ? h[st + 1].el : T;
          xr[N] === 0 ? O(null, Vt, b, Ua, w, R, F, S, L) : Zt && (ue < 0 || N !== Ya[ue] ? Be(Vt, b, Ua, 2) : ue--);
        }
      }
    }, Be = (c, h, b, T, w = null) => {
      const { el: R, type: F, transition: S, children: L, shapeFlag: N } = c;
      if (N & 6) {
        Be(c.component.subTree, h, b, T);
        return;
      }
      if (N & 128) {
        c.suspense.move(h, b, T);
        return;
      }
      if (N & 64) {
        F.move(c, h, b, vn);
        return;
      }
      if (F === C) {
        r(R, h, b);
        for (let y = 0; y < L.length; y++)
          Be(L[y], h, b, T);
        r(c.anchor, h, b);
        return;
      }
      if (F === xs) {
        V(c, h, b);
        return;
      }
      if (T !== 2 && N & 1 && S)
        if (T === 0)
          S.beforeEnter(R), r(R, h, b), ct(() => S.enter(R), w);
        else {
          const { leave: y, delayLeave: U, afterLeave: H } = S, se = () => r(R, h, b), me = () => {
            y(R, () => {
              se(), H && H();
            });
          };
          U ? U(R, se, me) : me();
        }
      else
        r(R, h, b);
    }, Lt = (c, h, b, T = !1, w = !1) => {
      const { type: R, props: F, ref: S, children: L, dynamicChildren: N, shapeFlag: p, patchFlag: y, dirs: U } = c;
      if (S != null && vo(S, null, b, c, !0), p & 256) {
        h.ctx.deactivate(c);
        return;
      }
      const H = p & 1 && U, se = !Ss(c);
      let me;
      if (se && (me = F && F.onVnodeBeforeUnmount) && Pt(me, h, c), p & 6)
        Pi(c.component, b, T);
      else {
        if (p & 128) {
          c.suspense.unmount(b, T);
          return;
        }
        H && xn(c, null, h, "beforeUnmount"), p & 64 ? c.type.remove(c, h, b, w, vn, T) : N && (R !== C || y > 0 && y & 64) ? wt(N, h, b, !1, !0) : (R === C && y & 384 || !w && p & 16) && wt(L, h, b), T && _s(c);
      }
      (se && (me = F && F.onVnodeUnmounted) || H) && ct(() => {
        me && Pt(me, h, c), H && xn(c, null, h, "unmounted");
      }, b);
    }, _s = (c) => {
      const { type: h, el: b, anchor: T, transition: w } = c;
      if (h === C) {
        ({}).NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && w && !w.persisted ? c.children.forEach((F) => {
          F.type === Ke ? s(F.el) : _s(F);
        }) : Vi(b, T);
        return;
      }
      if (h === xs) {
        k(c);
        return;
      }
      const R = () => {
        s(b), w && !w.persisted && w.afterLeave && w.afterLeave();
      };
      if (c.shapeFlag & 1 && w && !w.persisted) {
        const { leave: F, delayLeave: S } = w, L = () => F(b, R);
        S ? S(c.el, R, L) : L();
      } else
        R();
    }, Vi = (c, h) => {
      let b;
      for (; c !== h; )
        b = m(c), s(c), c = b;
      s(h);
    }, Pi = (c, h, b) => {
      ({}).NODE_ENV !== "production" && c.type.__hmrId && Zf(c);
      const { bum: T, scope: w, update: R, subTree: F, um: S } = c;
      T && cr(T), w.stop(), R && (R.active = !1, Lt(F, c, h, b)), S && ct(S, h), ct(() => {
        c.isUnmounted = !0;
      }, h), h && h.pendingBranch && !h.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), {}.NODE_ENV !== "production" && sm(c);
    }, wt = (c, h, b, T = !1, w = !1, R = 0) => {
      for (let F = R; F < c.length; F++)
        Lt(c[F], h, b, T, w);
    }, or = (c) => c.shapeFlag & 6 ? or(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), gs = (c, h, b) => {
      c == null ? h._vnode && Lt(h._vnode, null, null, !0) : O(h._vnode || null, c, h, null, null, null, b), Ja(), Lu(), h._vnode = c;
    }, vn = {
      p: O,
      um: Lt,
      m: Be,
      r: _s,
      mt: Et,
      mc: Q,
      pc: nt,
      pbc: ge,
      n: or,
      o: e
    };
    let Sr, Ir;
    return t && ([Sr, Ir] = t(vn)), {
      render: gs,
      hydrate: Sr,
      createApp: eh(gs, Sr)
    };
  }
  function Rn({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function Is(e, t, n = !1) {
    const r = e.children, s = t.children;
    if (X(r) && X(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let a = s[i];
        a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = $n(s[i]), a.el = o.el), n || Is(o, a)), a.type === wr && (a.el = o.el), {}.NODE_ENV !== "production" && a.type === Ke && !a.el && (a.el = o.el);
      }
  }
  function sh(e) {
    const t = e.slice(), n = [0];
    let r, s, i, o, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const u = e[r];
      if (u !== 0) {
        if (s = n[n.length - 1], e[s] < u) {
          t[r] = s, n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          a = i + o >> 1, e[n[a]] < u ? i = a + 1 : o = a;
        u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; )
      n[i] = o, o = t[o];
    return n;
  }
  const ih = (e) => e.__isTeleport, C = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), wr = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), Ke = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), xs = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Yr = [];
  let Mt = null;
  function g(e = !1) {
    Yr.push(Mt = e ? null : []);
  }
  function oh() {
    Yr.pop(), Mt = Yr[Yr.length - 1] || null;
  }
  let Jr = 1;
  function dl(e) {
    Jr += e;
  }
  function ac(e) {
    return e.dynamicChildren = Jr > 0 ? Mt || gr : null, oh(), Jr > 0 && Mt && Mt.push(e), e;
  }
  function v(e, t, n, r, s, i) {
    return ac(_(e, t, n, r, s, i, !0));
  }
  function Qn(e, t, n, r, s) {
    return ac(Ge(e, t, n, r, s, !0));
  }
  function Qr(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function Pn(e, t) {
    return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && dr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
  }
  const ah = (...e) => uc(...e), _i = "__vInternal", lc = ({ key: e }) => e != null ? e : null, Rs = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Se(e) || xe(e) || J(e) ? { i: at, r: e, k: t, f: !!n } : e : null;
  function _(e, t = null, n = null, r = 0, s = null, i = e === C ? 0 : 1, o = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && lc(t),
      ref: t && Rs(t),
      scopeId: hi,
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
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: at
    };
    return a ? (oa(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Se(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && x("VNode created with invalid key (NaN). VNode type:", l.type), Jr > 0 && !o && Mt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Mt.push(l), l;
  }
  const Ge = {}.NODE_ENV !== "production" ? ah : uc;
  function uc(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === Xu) && ({}.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = Ke), Qr(e)) {
      const a = Ht(e, t, !0);
      return n && oa(a, n), Jr > 0 && !i && Mt && (a.shapeFlag & 6 ? Mt[Mt.indexOf(e)] = a : Mt.push(a)), a.patchFlag |= -2, a;
    }
    if (hc(e) && (e = e.__vccOpts), t) {
      t = lh(t);
      let { class: a, style: l } = t;
      a && !Se(a) && (t.class = Uo(a)), ve(l) && (so(l) && !X(l) && (l = Ve({}, l)), t.style = nn(l));
    }
    const o = Se(e) ? 1 : gm(e) ? 128 : ih(e) ? 64 : ve(e) ? 4 : J(e) ? 2 : 0;
    return {}.NODE_ENV !== "production" && o & 4 && so(e) && (e = re(e), x("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), _(e, t, n, r, s, o, i, !0);
  }
  function lh(e) {
    return e ? so(e) || _i in e ? Ve({}, e) : e : null;
  }
  function Ht(e, t, n = !1) {
    const { props: r, ref: s, patchFlag: i, children: o } = e, a = t ? uh(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && lc(a),
      ref: t && t.ref ? n && s ? X(s) ? s.concat(Rs(t)) : [s, Rs(t)] : Rs(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: {}.NODE_ENV !== "production" && i === -1 && X(o) ? o.map(cc) : o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== C ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ht(e.ssContent),
      ssFallback: e.ssFallback && Ht(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx
    };
  }
  function cc(e) {
    const t = Ht(e);
    return X(e.children) && (t.children = e.children.map(cc)), t;
  }
  function G(e = " ", t = 0) {
    return Ge(wr, null, e, t);
  }
  function z(e = "", t = !1) {
    return t ? (g(), Qn(Ke, null, e)) : Ge(Ke, null, e);
  }
  function kt(e) {
    return e == null || typeof e == "boolean" ? Ge(Ke) : X(e) ? Ge(
      C,
      null,
      e.slice()
    ) : typeof e == "object" ? $n(e) : Ge(wr, null, String(e));
  }
  function $n(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
  }
  function oa(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null)
      t = null;
    else if (X(t))
      n = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), oa(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !(_i in t) ? t._ctx = at : s === 3 && at && (at.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      J(t) ? (t = { default: t, _ctx: at }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function uh(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r)
        if (s === "class")
          t.class !== r.class && (t.class = Uo([t.class, r.class]));
        else if (s === "style")
          t.style = nn([t.style, r.style]);
        else if (as(s)) {
          const i = t[s], o = r[s];
          o && i !== o && !(X(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
        } else
          s !== "" && (t[s] = r[s]);
    }
    return t;
  }
  function Pt(e, t, n, r = null) {
    Ot(e, t, 7, [
      n,
      r
    ]);
  }
  const ch = oc();
  let dh = 0;
  function fh(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || ch, i = {
      uid: dh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new fu(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: tc(r, s),
      emitsOptions: Yu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Oe,
      inheritAttrs: r.inheritAttrs,
      ctx: Oe,
      data: Oe,
      props: Oe,
      attrs: Oe,
      slots: Oe,
      refs: Oe,
      setupState: Oe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
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
    return {}.NODE_ENV !== "production" ? i.ctx = Rm(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = lm.bind(null, i), e.ce && e.ce(i), i;
  }
  let ze = null;
  const ds = () => ze || at, br = (e) => {
    ze = e, e.scope.on();
  }, Gn = () => {
    ze && ze.scope.off(), ze = null;
  }, mh = /* @__PURE__ */ Sn("slot,component");
  function yo(e, t) {
    const n = t.isNativeTag || lu;
    (mh(e) || n(e)) && x("Do not use built-in or reserved HTML elements as component id: " + e);
  }
  function dc(e) {
    return e.vnode.shapeFlag & 4;
  }
  let es = !1;
  function hh(e, t = !1) {
    es = t;
    const { props: n, children: r } = e.vnode, s = dc(e);
    Um(e, n, s, t), Zm(e, r);
    const i = s ? ph(e, t) : void 0;
    return es = !1, i;
  }
  function ph(e, t) {
    var n;
    const r = e.type;
    if ({}.NODE_ENV !== "production") {
      if (r.name && yo(r.name, e.appContext.config), r.components) {
        const i = Object.keys(r.components);
        for (let o = 0; o < i.length; o++)
          yo(i[o], e.appContext.config);
      }
      if (r.directives) {
        const i = Object.keys(r.directives);
        for (let o = 0; o < i.length; o++)
          Ku(i[o]);
      }
      r.compilerOptions && fc() && x('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
    }
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = wu(new Proxy(e.ctx, Ju)), {}.NODE_ENV !== "production" && Cm(e);
    const { setup: s } = r;
    if (s) {
      const i = e.setupContext = s.length > 1 ? _h(e) : null;
      br(e), tr();
      const o = an(s, e, 0, [{}.NODE_ENV !== "production" ? hr(e.props) : e.props, i]);
      if (nr(), Gn(), Wo(o)) {
        if (o.then(Gn, Gn), t)
          return o.then((a) => {
            fl(e, a, t);
          }).catch((a) => {
            di(a, e, 0);
          });
        if (e.asyncDep = o, {}.NODE_ENV !== "production" && !e.suspense) {
          const a = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
          x(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      } else
        fl(e, o, t);
    } else
      mc(e, t);
  }
  function fl(e, t, n) {
    J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) ? ({}.NODE_ENV !== "production" && Qr(t) && x("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Mu(t), {}.NODE_ENV !== "production" && Lm(e)) : {}.NODE_ENV !== "production" && t !== void 0 && x(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), mc(e, n);
  }
  let Eo;
  const fc = () => !Eo;
  function mc(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && Eo && !r.render) {
        const s = r.template || sa(e).template;
        if (s) {
          ({}).NODE_ENV !== "production" && Qt(e, "compile");
          const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = r, u = Ve(Ve({
            isCustomElement: i,
            delimiters: a
          }, o), l);
          r.render = Eo(s, u), {}.NODE_ENV !== "production" && en(e, "compile");
        }
      }
      e.render = r.render || qe;
    }
    br(e), tr(), Pm(e), nr(), Gn(), {}.NODE_ENV !== "production" && !r.render && e.render === qe && !t && (r.template ? x('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : x("Component is missing template or render function."));
  }
  function ml(e) {
    return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return js(), ft(e, "get", "$attrs"), t[n];
      },
      set() {
        return x("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return x("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ft(e, "get", "$attrs"), t[n];
      }
    });
  }
  function _h(e) {
    const t = (r) => {
      ({}).NODE_ENV !== "production" && e.exposed && x("expose() should be called only once per setup()."), e.exposed = r || {};
    };
    let n;
    return {}.NODE_ENV !== "production" ? Object.freeze({
      get attrs() {
        return n || (n = ml(e));
      },
      get slots() {
        return hr(e.slots);
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    }) : {
      get attrs() {
        return n || (n = ml(e));
      },
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function gi(e) {
    if (e.exposed)
      return e.exposeProxy || (e.exposeProxy = new Proxy(Mu(wu(e.exposed)), {
        get(t, n) {
          if (n in t)
            return t[n];
          if (n in qn)
            return qn[n](e);
        },
        has(t, n) {
          return n in t || n in qn;
        }
      }));
  }
  const gh = /(?:^|[-_])(\w)/g, vh = (e) => e.replace(gh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
  function aa(e, t = !0) {
    return J(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function vi(e, t, n = !1) {
    let r = aa(t);
    if (!r && t.__file) {
      const s = t.__file.match(/([^/\\]+)\.\w+$/);
      s && (r = s[1]);
    }
    if (!r && e && e.parent) {
      const s = (i) => {
        for (const o in i)
          if (i[o] === t)
            return o;
      };
      r = s(e.components || e.parent.type.components) || s(e.appContext.components);
    }
    return r ? vh(r) : n ? "App" : "Anonymous";
  }
  function hc(e) {
    return J(e) && "__vccOpts" in e;
  }
  const ye = (e, t) => zf(e, t, es);
  function pc(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ve(t) && !X(t) ? Qr(t) ? Ge(e, null, [t]) : Ge(e, t) : Ge(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Qr(n) && (n = [n]), Ge(e, t, n));
  }
  const yh = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Eh = () => {
    {
      const e = Bn(yh);
      return e || {}.NODE_ENV !== "production" && x("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
    }
  };
  function Ui(e) {
    return !!(e && e.__v_isShallow);
  }
  function $h() {
    if ({}.NODE_ENV === "production" || typeof window > "u")
      return;
    const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, s = {
      header(d) {
        return ve(d) ? d.__isVue ? ["div", e, "VueInstance"] : xe(d) ? [
          "div",
          {},
          ["span", e, f(d)],
          "<",
          a(d.value),
          ">"
        ] : wn(d) ? [
          "div",
          {},
          ["span", e, Ui(d) ? "ShallowReactive" : "Reactive"],
          "<",
          a(d),
          `>${dn(d) ? " (readonly)" : ""}`
        ] : dn(d) ? [
          "div",
          {},
          ["span", e, Ui(d) ? "ShallowReadonly" : "Readonly"],
          "<",
          a(d),
          ">"
        ] : null : null;
      },
      hasBody(d) {
        return d && d.__isVue;
      },
      body(d) {
        if (d && d.__isVue)
          return [
            "div",
            {},
            ...i(d.$)
          ];
      }
    };
    function i(d) {
      const m = [];
      d.type.props && d.props && m.push(o("props", re(d.props))), d.setupState !== Oe && m.push(o("setup", d.setupState)), d.data !== Oe && m.push(o("data", re(d.data)));
      const $ = l(d, "computed");
      $ && m.push(o("computed", $));
      const E = l(d, "inject");
      return E && m.push(o("injected", E)), m.push([
        "div",
        {},
        [
          "span",
          {
            style: r.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: d }]
      ]), m;
    }
    function o(d, m) {
      return m = Ve({}, m), Object.keys(m).length ? [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          d
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(m).map(($) => [
            "div",
            {},
            ["span", r, $ + ": "],
            a(m[$], !1)
          ])
        ]
      ] : ["span", {}];
    }
    function a(d, m = !0) {
      return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : ve(d) ? ["object", { object: m ? re(d) : d }] : ["span", n, String(d)];
    }
    function l(d, m) {
      const $ = d.type;
      if (J($))
        return;
      const E = {};
      for (const O in d.ctx)
        u($, O, m) && (E[O] = d.ctx[O]);
      return E;
    }
    function u(d, m, $) {
      const E = d[$];
      if (X(E) && E.includes(m) || ve(E) && m in E || d.extends && u(d.extends, m, $) || d.mixins && d.mixins.some((O) => u(O, m, $)))
        return !0;
    }
    function f(d) {
      return Ui(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
    }
    window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
  }
  const hl = "3.2.45", bh = "http://www.w3.org/2000/svg", An = typeof document < "u" ? document : null, pl = An && /* @__PURE__ */ An.createElement("template"), Oh = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t ? An.createElementNS(bh, e) : An.createElement(e, n ? { is: n } : void 0);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (e) => An.createTextNode(e),
    createComment: (e) => An.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => An.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
          ;
      else {
        pl.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = pl.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; )
            a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  function Nh(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  function Dh(e, t, n) {
    const r = e.style, s = Se(n);
    if (n && !s) {
      for (const i in n)
        $o(r, i, n[i]);
      if (t && !Se(t))
        for (const i in t)
          n[i] == null && $o(r, i, "");
    } else {
      const i = r.display;
      s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i);
    }
  }
  const wh = /[^\\];\s*$/, _l = /\s*!important$/;
  function $o(e, t, n) {
    if (X(n))
      n.forEach((r) => $o(e, t, r));
    else if (n == null && (n = ""), {}.NODE_ENV !== "production" && wh.test(n) && x(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const r = Th(e, t);
      _l.test(n) ? e.setProperty(kn(r), n.replace(_l, ""), "important") : e[r] = n;
    }
  }
  const gl = ["Webkit", "Moz", "ms"], ji = {};
  function Th(e, t) {
    const n = ji[t];
    if (n)
      return n;
    let r = Wt(t);
    if (r !== "filter" && r in e)
      return ji[t] = r;
    r = Xn(r);
    for (let s = 0; s < gl.length; s++) {
      const i = gl[s] + r;
      if (i in e)
        return ji[t] = i;
    }
    return t;
  }
  const vl = "http://www.w3.org/1999/xlink";
  function kh(e, t, n, r, s) {
    if (r && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(vl, t.slice(6, t.length)) : e.setAttributeNS(vl, t, n);
    else {
      const i = Jd(t);
      n == null || i && !ou(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
    }
  }
  function Mh(e, t, n, r, s, i, o) {
    if (t === "innerHTML" || t === "textContent") {
      r && o(r, s, i), e[t] = n == null ? "" : n;
      return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
      e._value = n;
      const l = n == null ? "" : n;
      (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
      return;
    }
    let a = !1;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = ou(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
    }
    try {
      e[t] = n;
    } catch (l) {
      ({}).NODE_ENV !== "production" && !a && x(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
    }
    a && e.removeAttribute(t);
  }
  function Fn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Sh(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  function Ih(e, t, n, r, s = null) {
    const i = e._vei || (e._vei = {}), o = i[t];
    if (r && o)
      o.value = r;
    else {
      const [a, l] = xh(t);
      if (r) {
        const u = i[t] = Lh(r, s);
        Fn(e, a, u, l);
      } else
        o && (Sh(e, a, o, l), i[t] = void 0);
    }
  }
  const yl = /(?:Once|Passive|Capture)$/;
  function xh(e) {
    let t;
    if (yl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(yl); )
        e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
    }
    return [e[2] === ":" ? e.slice(3) : kn(e.slice(2)), t];
  }
  let Wi = 0;
  const Rh = /* @__PURE__ */ Promise.resolve(), Ch = () => Wi || (Rh.then(() => Wi = 0), Wi = Date.now());
  function Lh(e, t) {
    const n = (r) => {
      if (!r._vts)
        r._vts = Date.now();
      else if (r._vts <= n.attached)
        return;
      Ot(Vh(r, n.value), t, 5, [r]);
    };
    return n.value = e, n.attached = Ch(), n;
  }
  function Vh(e, t) {
    if (X(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = !0;
      }, t.map((r) => (s) => !s._stopped && r && r(s));
    } else
      return t;
  }
  const El = /^on[a-z]/, Ph = (e, t, n, r, s = !1, i, o, a, l) => {
    t === "class" ? Nh(e, r, s) : t === "style" ? Dh(e, n, r) : as(t) ? Fs(t) || Ih(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ah(e, t, r, s)) ? Mh(e, t, r, i, o, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), kh(e, t, r, s));
  };
  function Ah(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && El.test(t) && J(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || El.test(t) && Se(n) ? !1 : t in e;
  }
  const Fh = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  bm.props;
  const qs = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return X(t) ? (n) => cr(t, n) : t;
  };
  function zh(e) {
    e.target.composing = !0;
  }
  function $l(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
  }
  const Or = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = qs(s);
      const i = r || s.props && s.props.type === "number";
      Fn(e, t ? "change" : "input", (o) => {
        if (o.target.composing)
          return;
        let a = e.value;
        n && (a = a.trim()), i && (a = qr(a)), e._assign(a);
      }), n && Fn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (Fn(e, "compositionstart", zh), Fn(e, "compositionend", $l), Fn(e, "change", $l));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: s } }, i) {
      if (e._assign = qs(i), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (s || e.type === "number") && qr(e.value) === t))
        return;
      const o = t == null ? "" : t;
      e.value !== o && (e.value = o);
    }
  }, _c = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = ii(t);
      Fn(e, "change", () => {
        const i = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? qr(Gs(o)) : Gs(o));
        e._assign(e.multiple ? s ? new Set(i) : i : i[0]);
      }), e._assign = qs(r);
    },
    mounted(e, { value: t }) {
      bl(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = qs(n);
    },
    updated(e, { value: t }) {
      bl(e, t);
    }
  };
  function bl(e, t) {
    const n = e.multiple;
    if (n && !X(t) && !ii(t)) {
      ({}).NODE_ENV !== "production" && x(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
      return;
    }
    for (let r = 0, s = e.options.length; r < s; r++) {
      const i = e.options[r], o = Gs(i);
      if (n)
        X(t) ? i.selected = ef(t, o) > -1 : i.selected = t.has(o);
      else if (si(Gs(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
  function Gs(e) {
    return "_value" in e ? e._value : e.value;
  }
  const Yh = ["ctrl", "shift", "alt", "meta"], Uh = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Yh.some((n) => e[`${n}Key`] && !t.includes(n))
  }, Ce = (e, t) => (n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const i = Uh[t[s]];
      if (i && i(n, t))
        return;
    }
    return e(n, ...r);
  }, jh = {
    beforeMount(e, { value: t }, { transition: n }) {
      e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Cr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), Cr(e, !0), r.enter(e)) : r.leave(e, () => {
        Cr(e, !1);
      }) : Cr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Cr(e, t);
    }
  };
  function Cr(e, t) {
    e.style.display = t ? e._vod : "none";
  }
  const Wh = /* @__PURE__ */ Ve({ patchProp: Ph }, Oh);
  let Ol;
  function Hh() {
    return Ol || (Ol = nh(Wh));
  }
  const Bh = (...e) => {
    const t = Hh().createApp(...e);
    ({}).NODE_ENV !== "production" && (qh(t), Gh(t));
    const { mount: n } = t;
    return t.mount = (r) => {
      const s = Kh(r);
      if (!s)
        return;
      const i = t._component;
      !J(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
      const o = n(s, !1, s instanceof SVGElement);
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
    }, t;
  };
  function qh(e) {
    Object.defineProperty(e.config, "isNativeTag", {
      value: (t) => Kd(t) || Xd(t),
      writable: !1
    });
  }
  function Gh(e) {
    if (fc()) {
      const t = e.config.isCustomElement;
      Object.defineProperty(e.config, "isCustomElement", {
        get() {
          return t;
        },
        set() {
          x("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
        }
      });
      const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
      Object.defineProperty(e.config, "compilerOptions", {
        get() {
          return x(r), n;
        },
        set() {
          x(r);
        }
      });
    }
  }
  function Kh(e) {
    if (Se(e)) {
      const t = document.querySelector(e);
      return {}.NODE_ENV !== "production" && !t && x(`Failed to mount app: mount target selector "${e}" returned null.`), t;
    }
    return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && x('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
  }
  function Xh() {
    $h();
  }
  ({}).NODE_ENV !== "production" && Xh();
  const ce = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t)
      n[r] = s;
    return n;
  }, Zh = {
    data() {
      return {
        entity: {
          id: null,
          type: null
        }
      };
    },
    beforeMount() {
      const e = new URL(document.URL);
      this.entity = {
        id: e.searchParams.get("id"),
        type: e.searchParams.get("type")
      }, window.onpopstate = (t) => {
        let n = {
          id: null,
          type: null
        };
        t.state && (n = t.state), this.entity = n;
      };
    },
    methods: {
      edit(e) {
        this.entity = e;
        let t = new URL(document.URL);
        t.searchParams.delete("id"), t.searchParams.delete("type"), t.searchParams.append("id", e.id), t.searchParams.append("type", e.type), history.pushState({ id: this.entity.id, type: this.entity.type }, "", t.toString()), this.$scrollTop(document.getElementById("app").offsetTop);
      },
      cancelEdit() {
        this.entity = {
          id: null,
          type: null
        };
        let e = new URL(document.URL);
        e.searchParams.delete("id"), e.searchParams.delete("type"), history.pushState({ id: null, type: null }, "", e.toString()), this.$scrollTop(document.getElementById("app").offsetTop);
      },
      canEdit() {
        return this.$right >= "F";
      }
    }
  };
  function Jh(e, t, n, r, s, i) {
    const o = Jn("List"), a = Jn("Edit");
    return g(), v("div", null, [
      this.entity.id ? (g(), Qn(a, {
        key: 1,
        entityKey: this.entity,
        onCancel: t[1] || (t[1] = (l) => i.cancelEdit())
      }, null, 8, ["entityKey"])) : (g(), Qn(o, {
        key: 0,
        onSelect: t[0] || (t[0] = (l) => i.edit(l))
      }))
    ]);
  }
  const Qh = /* @__PURE__ */ ce(Zh, [["render", Jh]]);
  /*!
    * shared v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const Bt = typeof window < "u";
  let gt, er;
  if ({}.NODE_ENV !== "production") {
    const e = Bt && window.performance;
    e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (gt = (t) => e.mark(t), er = (t, n, r) => {
      e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
    });
  }
  const ep = /\{([0-9a-zA-Z]+)\}/g;
  function la(e, ...t) {
    return t.length === 1 && Ee(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ep, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
  }
  const tp = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Gt = (e) => tp ? Symbol(e) : e, np = (e, t, n) => rp({ l: e, k: t, s: n }), rp = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), He = (e) => typeof e == "number" && isFinite(e), sp = (e) => da(e) === "[object Date]", Ks = (e) => da(e) === "[object RegExp]", yi = (e) => de(e) && Object.keys(e).length === 0;
  function Tr(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
  }
  const lt = Object.assign;
  let Nl;
  const ua = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Dl(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const ip = Object.prototype.hasOwnProperty;
  function ca(e, t) {
    return ip.call(e, t);
  }
  const Le = Array.isArray, We = (e) => typeof e == "function", W = (e) => typeof e == "string", Ie = (e) => typeof e == "boolean", Ee = (e) => e !== null && typeof e == "object", gc = Object.prototype.toString, da = (e) => gc.call(e), de = (e) => da(e) === "[object Object]", op = (e) => e == null ? "" : Le(e) || de(e) && e.toString === gc ? JSON.stringify(e, null, 2) : String(e), wl = 2;
  function ap(e, t = 0, n = e.length) {
    const r = e.split(/\r?\n/);
    let s = 0;
    const i = [];
    for (let o = 0; o < r.length; o++)
      if (s += r[o].length + 1, s >= t) {
        for (let a = o - wl; a <= o + wl || n > s; a++) {
          if (a < 0 || a >= r.length)
            continue;
          const l = a + 1;
          i.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[a]}`);
          const u = r[a].length;
          if (a === o) {
            const f = t - (s - u) + 1, d = Math.max(1, n > s ? u - f : n - t);
            i.push("   |  " + " ".repeat(f) + "^".repeat(d));
          } else if (a > o) {
            if (n > s) {
              const f = Math.max(Math.min(n - s, u), 1);
              i.push("   |  " + "^".repeat(f));
            }
            s += u + 1;
          }
        }
        break;
      }
    return i.join(`
`);
  }
  function vc() {
    const e = /* @__PURE__ */ new Map();
    return {
      events: e,
      on(n, r) {
        const s = e.get(n);
        s && s.push(r) || e.set(n, [r]);
      },
      off(n, r) {
        const s = e.get(n);
        s && s.splice(s.indexOf(r) >>> 0, 1);
      },
      emit(n, r) {
        (e.get(n) || []).slice().map((s) => s(r)), (e.get("*") || []).slice().map((s) => s(n, r));
      }
    };
  }
  /*!
    * message-compiler v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const Xe = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
  }, lp = {
    [Xe.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [Xe.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [Xe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [Xe.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [Xe.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [Xe.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [Xe.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [Xe.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [Xe.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [Xe.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [Xe.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [Xe.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [Xe.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [Xe.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
  };
  function yc(e, t, n = {}) {
    const { domain: r, messages: s, args: i } = n, o = {}.NODE_ENV !== "production" ? la((s || lp)[e] || "", ...i || []) : e, a = new SyntaxError(String(o));
    return a.code = e, t && (a.location = t), a.domain = r, a;
  }
  /*!
    * devtools-if v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const Ec = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * core-base v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const In = [];
  In[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
  };
  In[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
  };
  In[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
  };
  In[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
  };
  In[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [
      4,
      2
    ],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
  };
  In[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
  };
  In[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
  };
  const up = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function cp(e) {
    return up.test(e);
  }
  function dp(e) {
    const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
  }
  function fp(e) {
    if (e == null)
      return "o";
    switch (e.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return e;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function mp(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : cp(t) ? dp(t) : "*" + t;
  }
  function hp(e) {
    const t = [];
    let n = -1, r = 0, s = 0, i, o, a, l, u, f, d;
    const m = [];
    m[0] = () => {
      o === void 0 ? o = a : o += a;
    }, m[1] = () => {
      o !== void 0 && (t.push(o), o = void 0);
    }, m[2] = () => {
      m[0](), s++;
    }, m[3] = () => {
      if (s > 0)
        s--, r = 4, m[0]();
      else {
        if (s = 0, o === void 0 || (o = mp(o), o === !1))
          return !1;
        m[1]();
      }
    };
    function $() {
      const E = e[n + 1];
      if (r === 5 && E === "'" || r === 6 && E === '"')
        return n++, a = "\\" + E, m[0](), !0;
    }
    for (; r !== null; )
      if (n++, i = e[n], !(i === "\\" && $())) {
        if (l = fp(i), d = In[r], u = d[l] || d.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = m[u[1]], f && (a = i, f() === !1))))
          return;
        if (r === 7)
          return t;
      }
  }
  const Tl = /* @__PURE__ */ new Map();
  function pp(e, t) {
    return Ee(e) ? e[t] : null;
  }
  function _p(e, t) {
    if (!Ee(e))
      return null;
    let n = Tl.get(t);
    if (n || (n = hp(t), n && Tl.set(t, n)), !n)
      return null;
    const r = n.length;
    let s = e, i = 0;
    for (; i < r; ) {
      const o = s[n[i]];
      if (o === void 0)
        return null;
      s = o, i++;
    }
    return s;
  }
  const gp = (e) => e, vp = (e) => "", yp = "text", Ep = (e) => e.length === 0 ? "" : e.join(""), $p = op;
  function kl(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
  }
  function bp(e) {
    const t = He(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (He(e.named.count) || He(e.named.n)) ? He(e.named.count) ? e.named.count : He(e.named.n) ? e.named.n : t : t;
  }
  function Op(e, t) {
    t.count || (t.count = e), t.n || (t.n = e);
  }
  function Np(e = {}) {
    const t = e.locale, n = bp(e), r = Ee(e.pluralRules) && W(t) && We(e.pluralRules[t]) ? e.pluralRules[t] : kl, s = Ee(e.pluralRules) && W(t) && We(e.pluralRules[t]) ? kl : void 0, i = (P) => P[r(n, P.length, s)], o = e.list || [], a = (P) => o[P], l = e.named || {};
    He(e.pluralIndex) && Op(n, l);
    const u = (P) => l[P];
    function f(P) {
      const Y = We(e.messages) ? e.messages(P) : Ee(e.messages) ? e.messages[P] : !1;
      return Y || (e.parent ? e.parent.message(P) : vp);
    }
    const d = (P) => e.modifiers ? e.modifiers[P] : gp, m = de(e.processor) && We(e.processor.normalize) ? e.processor.normalize : Ep, $ = de(e.processor) && We(e.processor.interpolate) ? e.processor.interpolate : $p, E = de(e.processor) && W(e.processor.type) ? e.processor.type : yp, M = {
      list: a,
      named: u,
      plural: i,
      linked: (P, ...Y) => {
        const [B, V] = Y;
        let k = "text", te = "";
        Y.length === 1 ? Ee(B) ? (te = B.modifier || te, k = B.type || k) : W(B) && (te = B || te) : Y.length === 2 && (W(B) && (te = B || te), W(V) && (k = V || k));
        let Z = f(P)(M);
        return k === "vnode" && Le(Z) && te && (Z = Z[0]), te ? d(te)(Z, k) : Z;
      },
      message: f,
      type: E,
      interpolate: $,
      normalize: m
    };
    return M;
  }
  let ts = null;
  function Dp(e) {
    ts = e;
  }
  function wp(e, t, n) {
    ts && ts.emit(Ec.I18nInit, {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n
    });
  }
  const Tp = /* @__PURE__ */ kp(Ec.FunctionTranslate);
  function kp(e) {
    return (t) => ts && ts.emit(e, t);
  }
  const ht = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  }, Mp = {
    [ht.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [ht.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
    [ht.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
    [ht.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
    [ht.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [ht.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
  };
  function Nr(e, ...t) {
    return la(Mp[e], ...t);
  }
  function Sp(e, t, n) {
    return [.../* @__PURE__ */ new Set([
      n,
      ...Le(t) ? t : Ee(t) ? Object.keys(t) : W(t) ? [t] : [n]
    ])];
  }
  function $c(e, t, n) {
    const r = W(n) ? n : fa, s = e;
    s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
    let i = s.__localeChainCache.get(r);
    if (!i) {
      i = [];
      let o = [n];
      for (; Le(o); )
        o = Ml(i, o, t);
      const a = Le(t) || !de(t) ? t : t.default ? t.default : null;
      o = W(a) ? [a] : a, Le(o) && Ml(i, o, !1), s.__localeChainCache.set(r, i);
    }
    return i;
  }
  function Ml(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && Ie(r); s++) {
      const i = t[s];
      W(i) && (r = Ip(e, t[s], n));
    }
    return r;
  }
  function Ip(e, t, n) {
    let r;
    const s = t.split("-");
    do {
      const i = s.join("-");
      r = xp(e, i, n), s.splice(-1, 1);
    } while (s.length && r === !0);
    return r;
  }
  function xp(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
      r = t[t.length - 1] !== "!";
      const s = t.replace(/!/g, "");
      e.push(s), (Le(n) || de(n)) && n[s] && (r = n[s]);
    }
    return r;
  }
  const Rp = "9.2.2", Ei = -1, fa = "en-US", Xs = "", Sl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
  function Cp() {
    return {
      upper: (e, t) => t === "text" && W(e) ? e.toUpperCase() : t === "vnode" && Ee(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
      lower: (e, t) => t === "text" && W(e) ? e.toLowerCase() : t === "vnode" && Ee(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => t === "text" && W(e) ? Sl(e) : t === "vnode" && Ee(e) && "__v_isVNode" in e ? Sl(e.children) : e
    };
  }
  let Lp, bc;
  function Vp(e) {
    bc = e;
  }
  let Oc;
  function Pp(e) {
    Oc = e;
  }
  let Nc = null;
  const Il = (e) => {
    Nc = e;
  }, Ap = () => Nc;
  let Dc = null;
  const xl = (e) => {
    Dc = e;
  }, Fp = () => Dc;
  let Rl = 0;
  function zp(e = {}) {
    const t = W(e.version) ? e.version : Rp, n = W(e.locale) ? e.locale : fa, r = Le(e.fallbackLocale) || de(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, s = de(e.messages) ? e.messages : { [n]: {} }, i = de(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, o = de(e.numberFormats) ? e.numberFormats : { [n]: {} }, a = lt({}, e.modifiers || {}, Cp()), l = e.pluralRules || {}, u = We(e.missing) ? e.missing : null, f = Ie(e.missingWarn) || Ks(e.missingWarn) ? e.missingWarn : !0, d = Ie(e.fallbackWarn) || Ks(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, $ = !!e.unresolving, E = We(e.postTranslation) ? e.postTranslation : null, O = de(e.processor) ? e.processor : null, M = Ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter, Y = We(e.messageCompiler) ? e.messageCompiler : Lp, B = We(e.messageResolver) ? e.messageResolver : bc || pp, V = We(e.localeFallbacker) ? e.localeFallbacker : Oc || Sp, k = Ee(e.fallbackContext) ? e.fallbackContext : void 0, te = We(e.onWarn) ? e.onWarn : Tr, Z = e, q = Ee(Z.__datetimeFormatters) ? Z.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = Ee(Z.__numberFormatters) ? Z.__numberFormatters : /* @__PURE__ */ new Map(), ie = Ee(Z.__meta) ? Z.__meta : {};
    Rl++;
    const ge = {
      version: t,
      cid: Rl,
      locale: n,
      fallbackLocale: r,
      messages: s,
      modifiers: a,
      pluralRules: l,
      missing: u,
      missingWarn: f,
      fallbackWarn: d,
      fallbackFormat: m,
      unresolving: $,
      postTranslation: E,
      processor: O,
      warnHtmlMessage: M,
      escapeParameter: P,
      messageCompiler: Y,
      messageResolver: B,
      localeFallbacker: V,
      fallbackContext: k,
      onWarn: te,
      __meta: ie
    };
    return ge.datetimeFormats = i, ge.numberFormats = o, ge.__datetimeFormatters = q, ge.__numberFormatters = Q, {}.NODE_ENV !== "production" && (ge.__v_emitter = Z.__v_emitter != null ? Z.__v_emitter : void 0), ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && wp(ge, t, ie), ge;
  }
  function $i(e, t) {
    return e instanceof RegExp ? e.test(t) : e;
  }
  function wc(e, t) {
    return e instanceof RegExp ? e.test(t) : e;
  }
  function ma(e, t, n, r, s) {
    const { missing: i, onWarn: o } = e;
    if ({}.NODE_ENV !== "production") {
      const a = e.__v_emitter;
      a && a.emit("missing", {
        locale: n,
        key: t,
        type: s,
        groupId: `${s}:${t}`
      });
    }
    if (i !== null) {
      const a = i(e, n, t, s);
      return W(a) ? a : t;
    } else
      return {}.NODE_ENV !== "production" && wc(r, t) && o(Nr(ht.NOT_FOUND_KEY, { key: t, locale: n })), t;
  }
  function Lr(e, t, n) {
    const r = e;
    r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
  }
  let Tc = Xe.__EXTEND_POINT__;
  const Hi = () => ++Tc, rn = {
    INVALID_ARGUMENT: Tc,
    INVALID_DATE_ARGUMENT: Hi(),
    INVALID_ISO_DATE_ARGUMENT: Hi(),
    __EXTEND_POINT__: Hi()
  };
  function pr(e) {
    return yc(e, null, {}.NODE_ENV !== "production" ? { messages: Yp } : void 0);
  }
  const Yp = {
    [rn.INVALID_ARGUMENT]: "Invalid arguments",
    [rn.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [rn.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
  }, Cl = () => "", zt = (e) => We(e);
  function Ll(e, ...t) {
    const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: o, messages: a } = e, [l, u] = bo(...t), f = Ie(u.missingWarn) ? u.missingWarn : e.missingWarn, d = Ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = Ie(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, $ = !!u.resolvedMessage, E = W(u.default) || Ie(u.default) ? Ie(u.default) ? i ? l : () => l : u.default : n ? i ? l : () => l : "", O = n || E !== "", M = W(u.locale) ? u.locale : e.locale;
    m && Up(u);
    let [P, Y, B] = $ ? [
      l,
      M,
      a[M] || {}
    ] : kc(e, l, M, o, d, f), V = P, k = l;
    if (!$ && !(W(V) || zt(V)) && O && (V = E, k = V), !$ && (!(W(V) || zt(V)) || !W(Y)))
      return s ? Ei : l;
    if ({}.NODE_ENV !== "production" && W(V) && e.messageCompiler == null)
      return Tr(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
    let te = !1;
    const Z = () => {
      te = !0;
    }, q = zt(V) ? V : Mc(e, l, Y, V, k, Z);
    if (te)
      return V;
    const Q = Hp(e, Y, B, u), ie = Np(Q), ge = jp(e, q, ie), we = r ? r(ge, l) : ge;
    if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
      const je = {
        timestamp: Date.now(),
        key: W(l) ? l : zt(V) ? V.key : "",
        locale: Y || (zt(V) ? V.locale : ""),
        format: W(V) ? V : zt(V) ? V.source : "",
        message: we
      };
      je.meta = lt({}, e.__meta, Ap() || {}), Tp(je);
    }
    return we;
  }
  function Up(e) {
    Le(e.list) ? e.list = e.list.map((t) => W(t) ? Dl(t) : t) : Ee(e.named) && Object.keys(e.named).forEach((t) => {
      W(e.named[t]) && (e.named[t] = Dl(e.named[t]));
    });
  }
  function kc(e, t, n, r, s, i) {
    const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
    let d = {}, m, $ = null, E = n, O = null;
    const M = "translate";
    for (let P = 0; P < f.length; P++) {
      if (m = O = f[P], {}.NODE_ENV !== "production" && n !== m && $i(s, t) && a(Nr(ht.FALLBACK_TO_TRANSLATE, {
        key: t,
        target: m
      })), {}.NODE_ENV !== "production" && n !== m) {
        const te = e.__v_emitter;
        te && te.emit("fallback", {
          type: M,
          key: t,
          from: E,
          to: O,
          groupId: `${M}:${t}`
        });
      }
      d = o[m] || {};
      let Y = null, B, V;
      if ({}.NODE_ENV !== "production" && Bt && (Y = window.performance.now(), B = "intlify-message-resolve-start", V = "intlify-message-resolve-end", gt && gt(B)), ($ = l(d, t)) === null && ($ = d[t]), {}.NODE_ENV !== "production" && Bt) {
        const te = window.performance.now(), Z = e.__v_emitter;
        Z && Y && $ && Z.emit("message-resolve", {
          type: "message-resolve",
          key: t,
          message: $,
          time: te - Y,
          groupId: `${M}:${t}`
        }), B && V && gt && er && (gt(V), er("intlify message resolve", B, V));
      }
      if (W($) || We($))
        break;
      const k = ma(
        e,
        t,
        m,
        i,
        M
      );
      k !== t && ($ = k), E = O;
    }
    return [$, m, d];
  }
  function Mc(e, t, n, r, s, i) {
    const { messageCompiler: o, warnHtmlMessage: a } = e;
    if (zt(r)) {
      const m = r;
      return m.locale = m.locale || n, m.key = m.key || t, m;
    }
    if (o == null) {
      const m = () => r;
      return m.locale = n, m.key = t, m;
    }
    let l = null, u, f;
    ({}).NODE_ENV !== "production" && Bt && (l = window.performance.now(), u = "intlify-message-compilation-start", f = "intlify-message-compilation-end", gt && gt(u));
    const d = o(r, Wp(e, n, s, r, a, i));
    if ({}.NODE_ENV !== "production" && Bt) {
      const m = window.performance.now(), $ = e.__v_emitter;
      $ && l && $.emit("message-compilation", {
        type: "message-compilation",
        message: r,
        time: m - l,
        groupId: `translate:${t}`
      }), u && f && gt && er && (gt(f), er("intlify message compilation", u, f));
    }
    return d.locale = n, d.key = t, d.source = r, d;
  }
  function jp(e, t, n) {
    let r = null, s, i;
    ({}).NODE_ENV !== "production" && Bt && (r = window.performance.now(), s = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", gt && gt(s));
    const o = t(n);
    if ({}.NODE_ENV !== "production" && Bt) {
      const a = window.performance.now(), l = e.__v_emitter;
      l && r && l.emit("message-evaluation", {
        type: "message-evaluation",
        value: o,
        time: a - r,
        groupId: `translate:${t.key}`
      }), s && i && gt && er && (gt(i), er("intlify message evaluation", s, i));
    }
    return o;
  }
  function bo(...e) {
    const [t, n, r] = e, s = {};
    if (!W(t) && !He(t) && !zt(t))
      throw pr(rn.INVALID_ARGUMENT);
    const i = He(t) ? String(t) : (zt(t), t);
    return He(n) ? s.plural = n : W(n) ? s.default = n : de(n) && !yi(n) ? s.named = n : Le(n) && (s.list = n), He(r) ? s.plural = r : W(r) ? s.default = r : de(r) && lt(s, r), [i, s];
  }
  function Wp(e, t, n, r, s, i) {
    return {
      warnHtmlMessage: s,
      onError: (o) => {
        if (i && i(o), {}.NODE_ENV !== "production") {
          const a = `Message compilation error: ${o.message}`, l = o.location && ap(r, o.location.start.offset, o.location.end.offset), u = e.__v_emitter;
          u && u.emit("compile-error", {
            message: r,
            error: o.message,
            start: o.location && o.location.start.offset,
            end: o.location && o.location.end.offset,
            groupId: `translate:${n}`
          }), console.error(l ? `${a}
${l}` : a);
        } else
          throw o;
      },
      onCacheKey: (o) => np(t, n, o)
    };
  }
  function Hp(e, t, n, r) {
    const { modifiers: s, pluralRules: i, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, m = {
      locale: t,
      modifiers: s,
      pluralRules: i,
      messages: ($) => {
        let E = o(n, $);
        if (E == null && f) {
          const [, , O] = kc(f, $, t, a, l, u);
          E = o(O, $);
        }
        if (W(E)) {
          let O = !1;
          const P = Mc(e, $, t, E, $, () => {
            O = !0;
          });
          return O ? Cl : P;
        } else
          return zt(E) ? E : Cl;
      }
    };
    return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), He(r.plural) && (m.pluralIndex = r.plural), m;
  }
  const Vl = typeof Intl < "u", Sc = {
    dateTimeFormat: Vl && typeof Intl.DateTimeFormat < "u",
    numberFormat: Vl && typeof Intl.NumberFormat < "u"
  };
  function Pl(e, ...t) {
    const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o } = e, { __datetimeFormatters: a } = e;
    if ({}.NODE_ENV !== "production" && !Sc.dateTimeFormat)
      return i(Nr(ht.CANNOT_FORMAT_DATE)), Xs;
    const [l, u, f, d] = Oo(...t), m = Ie(f.missingWarn) ? f.missingWarn : e.missingWarn, $ = Ie(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, E = !!f.part, O = W(f.locale) ? f.locale : e.locale, M = o(
      e,
      s,
      O
    );
    if (!W(l) || l === "")
      return new Intl.DateTimeFormat(O, d).format(u);
    let P = {}, Y, B = null, V = O, k = null;
    const te = "datetime format";
    for (let Q = 0; Q < M.length; Q++) {
      if (Y = k = M[Q], {}.NODE_ENV !== "production" && O !== Y && $i($, l) && i(Nr(ht.FALLBACK_TO_DATE_FORMAT, {
        key: l,
        target: Y
      })), {}.NODE_ENV !== "production" && O !== Y) {
        const ie = e.__v_emitter;
        ie && ie.emit("fallback", {
          type: te,
          key: l,
          from: V,
          to: k,
          groupId: `${te}:${l}`
        });
      }
      if (P = n[Y] || {}, B = P[l], de(B))
        break;
      ma(e, l, Y, m, te), V = k;
    }
    if (!de(B) || !W(Y))
      return r ? Ei : l;
    let Z = `${Y}__${l}`;
    yi(d) || (Z = `${Z}__${JSON.stringify(d)}`);
    let q = a.get(Z);
    return q || (q = new Intl.DateTimeFormat(Y, lt({}, B, d)), a.set(Z, q)), E ? q.formatToParts(u) : q.format(u);
  }
  const Ic = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function Oo(...e) {
    const [t, n, r, s] = e, i = {};
    let o = {}, a;
    if (W(t)) {
      const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!l)
        throw pr(rn.INVALID_ISO_DATE_ARGUMENT);
      const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
      a = new Date(u);
      try {
        a.toISOString();
      } catch {
        throw pr(rn.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (sp(t)) {
      if (isNaN(t.getTime()))
        throw pr(rn.INVALID_DATE_ARGUMENT);
      a = t;
    } else if (He(t))
      a = t;
    else
      throw pr(rn.INVALID_ARGUMENT);
    return W(n) ? i.key = n : de(n) && Object.keys(n).forEach((l) => {
      Ic.includes(l) ? o[l] = n[l] : i[l] = n[l];
    }), W(r) ? i.locale = r : de(r) && (o = r), de(s) && (o = s), [i.key || "", a, i, o];
  }
  function Al(e, t, n) {
    const r = e;
    for (const s in n) {
      const i = `${t}__${s}`;
      !r.__datetimeFormatters.has(i) || r.__datetimeFormatters.delete(i);
    }
  }
  function Fl(e, ...t) {
    const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: o } = e, { __numberFormatters: a } = e;
    if ({}.NODE_ENV !== "production" && !Sc.numberFormat)
      return i(Nr(ht.CANNOT_FORMAT_NUMBER)), Xs;
    const [l, u, f, d] = No(...t), m = Ie(f.missingWarn) ? f.missingWarn : e.missingWarn, $ = Ie(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, E = !!f.part, O = W(f.locale) ? f.locale : e.locale, M = o(
      e,
      s,
      O
    );
    if (!W(l) || l === "")
      return new Intl.NumberFormat(O, d).format(u);
    let P = {}, Y, B = null, V = O, k = null;
    const te = "number format";
    for (let Q = 0; Q < M.length; Q++) {
      if (Y = k = M[Q], {}.NODE_ENV !== "production" && O !== Y && $i($, l) && i(Nr(ht.FALLBACK_TO_NUMBER_FORMAT, {
        key: l,
        target: Y
      })), {}.NODE_ENV !== "production" && O !== Y) {
        const ie = e.__v_emitter;
        ie && ie.emit("fallback", {
          type: te,
          key: l,
          from: V,
          to: k,
          groupId: `${te}:${l}`
        });
      }
      if (P = n[Y] || {}, B = P[l], de(B))
        break;
      ma(e, l, Y, m, te), V = k;
    }
    if (!de(B) || !W(Y))
      return r ? Ei : l;
    let Z = `${Y}__${l}`;
    yi(d) || (Z = `${Z}__${JSON.stringify(d)}`);
    let q = a.get(Z);
    return q || (q = new Intl.NumberFormat(Y, lt({}, B, d)), a.set(Z, q)), E ? q.formatToParts(u) : q.format(u);
  }
  const xc = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function No(...e) {
    const [t, n, r, s] = e, i = {};
    let o = {};
    if (!He(t))
      throw pr(rn.INVALID_ARGUMENT);
    const a = t;
    return W(n) ? i.key = n : de(n) && Object.keys(n).forEach((l) => {
      xc.includes(l) ? o[l] = n[l] : i[l] = n[l];
    }), W(r) ? i.locale = r : de(r) && (o = r), de(s) && (o = s), [i.key || "", a, i, o];
  }
  function zl(e, t, n) {
    const r = e;
    for (const s in n) {
      const i = `${t}__${s}`;
      !r.__numberFormatters.has(i) || r.__numberFormatters.delete(i);
    }
  }
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ua().__INTLIFY_PROD_DEVTOOLS__ = !1);
  function Bp() {
    return Rc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function Rc() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
  }
  const qp = typeof Proxy == "function", Gp = "devtools-plugin:setup", Kp = "plugin:settings:set";
  let ar, Do;
  function Xp() {
    var e;
    return ar !== void 0 || (typeof window < "u" && window.performance ? (ar = !0, Do = window.performance) : typeof global < "u" && ((e = global.perf_hooks) === null || e === void 0 ? void 0 : e.performance) ? (ar = !0, Do = global.perf_hooks.performance) : ar = !1), ar;
  }
  function Zp() {
    return Xp() ? Do.now() : Date.now();
  }
  class Jp {
    constructor(t, n) {
      this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
      const r = {};
      if (t.settings)
        for (const o in t.settings) {
          const a = t.settings[o];
          r[o] = a.defaultValue;
        }
      const s = `__vue-devtools-plugin-settings__${t.id}`;
      let i = Object.assign({}, r);
      try {
        const o = localStorage.getItem(s), a = JSON.parse(o);
        Object.assign(i, a);
      } catch {
      }
      this.fallbacks = {
        getSettings() {
          return i;
        },
        setSettings(o) {
          try {
            localStorage.setItem(s, JSON.stringify(o));
          } catch {
          }
          i = o;
        },
        now() {
          return Zp();
        }
      }, n && n.on(Kp, (o, a) => {
        o === this.plugin.id && this.fallbacks.setSettings(a);
      }), this.proxiedOn = new Proxy({}, {
        get: (o, a) => this.target ? this.target.on[a] : (...l) => {
          this.onQueue.push({
            method: a,
            args: l
          });
        }
      }), this.proxiedTarget = new Proxy({}, {
        get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
          method: a,
          args: l,
          resolve: () => {
          }
        }), this.fallbacks[a](...l)) : (...l) => new Promise((u) => {
          this.targetQueue.push({
            method: a,
            args: l,
            resolve: u
          });
        })
      });
    }
    async setRealTarget(t) {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(await this.target[n.method](...n.args));
    }
  }
  function Qp(e, t) {
    const n = e, r = Rc(), s = Bp(), i = qp && n.enableEarlyProxy;
    if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
      s.emit(Gp, e, t);
    else {
      const o = i ? new Jp(n, s) : null;
      (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
        pluginDescriptor: n,
        setupFn: t,
        proxy: o
      }), o && t(o.proxiedTarget);
    }
  }
  /*!
    * vue-devtools v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const Bi = {
    ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
    ["vue-i18n-resource-inspector"]: "I18n Resources",
    ["vue-i18n-timeline"]: "Vue I18n"
  }, e_ = {
    ["vue-i18n-resource-inspector"]: "Search for scopes ..."
  }, t_ = {
    ["vue-i18n-timeline"]: 16764185
  };
  /*!
    * vue-i18n v9.2.2
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const n_ = "9.2.2";
  function r_() {
    let e = !1;
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ua().__INTLIFY_PROD_DEVTOOLS__ = !1), {}.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
  }
  let Cc = ht.__EXTEND_POINT__;
  const lr = () => ++Cc, Tt = {
    FALLBACK_TO_ROOT: Cc,
    NOT_SUPPORTED_PRESERVE: lr(),
    NOT_SUPPORTED_FORMATTER: lr(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: lr(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: lr(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: lr(),
    NOT_FOUND_PARENT_SCOPE: lr()
  }, s_ = {
    [Tt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
    [Tt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
    [Tt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
    [Tt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
    [Tt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
    [Tt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
    [Tt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
  };
  function bi(e, ...t) {
    return la(s_[e], ...t);
  }
  let Lc = Xe.__EXTEND_POINT__;
  const ut = () => ++Lc, be = {
    UNEXPECTED_RETURN_TYPE: Lc,
    INVALID_ARGUMENT: ut(),
    MUST_BE_CALL_SETUP_TOP: ut(),
    NOT_INSLALLED: ut(),
    NOT_AVAILABLE_IN_LEGACY_MODE: ut(),
    REQUIRED_VALUE: ut(),
    INVALID_VALUE: ut(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ut(),
    NOT_INSLALLED_WITH_PROVIDE: ut(),
    UNEXPECTED_ERROR: ut(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: ut(),
    BRIDGE_SUPPORT_VUE_2_ONLY: ut(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ut(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ut(),
    __EXTEND_POINT__: ut()
  };
  function vt(e, ...t) {
    return yc(e, null, {}.NODE_ENV !== "production" ? { messages: i_, args: t } : void 0);
  }
  const i_ = {
    [be.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
    [be.INVALID_ARGUMENT]: "Invalid argument",
    [be.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
    [be.NOT_INSLALLED]: "Need to install with `app.use` function",
    [be.UNEXPECTED_ERROR]: "Unexpected error",
    [be.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
    [be.REQUIRED_VALUE]: "Required in value: {0}",
    [be.INVALID_VALUE]: "Invalid value",
    [be.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
    [be.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
    [be.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
    [be.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
    [be.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",
    [be.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
  }, wo = /* @__PURE__ */ Gt("__transrateVNode"), To = /* @__PURE__ */ Gt("__datetimeParts"), ko = /* @__PURE__ */ Gt("__numberParts"), ns = /* @__PURE__ */ Gt("__enableEmitter"), Mo = /* @__PURE__ */ Gt("__disableEmitter"), o_ = Gt("__setPluralRules");
  Gt("__intlifyMeta");
  const a_ = /* @__PURE__ */ Gt("__injectWithOption");
  function So(e) {
    if (!Ee(e))
      return e;
    for (const t in e)
      if (!!ca(e, t))
        if (!t.includes("."))
          Ee(e[t]) && So(e[t]);
        else {
          const n = t.split("."), r = n.length - 1;
          let s = e;
          for (let i = 0; i < r; i++)
            n[i] in s || (s[n[i]] = {}), s = s[n[i]];
          s[n[r]] = e[t], delete e[t], Ee(s[n[r]]) && So(s[n[r]]);
        }
    return e;
  }
  function Vc(e, t) {
    const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t, o = de(n) ? n : Le(r) ? {} : { [e]: {} };
    if (Le(r) && r.forEach((a) => {
      if ("locale" in a && "resource" in a) {
        const { locale: l, resource: u } = a;
        l ? (o[l] = o[l] || {}, Ur(u, o[l])) : Ur(u, o);
      } else
        W(a) && Ur(JSON.parse(a), o);
    }), s == null && i)
      for (const a in o)
        ca(o, a) && So(o[a]);
    return o;
  }
  const Ns = (e) => !Ee(e) || Le(e);
  function Ur(e, t) {
    if (Ns(e) || Ns(t))
      throw vt(be.INVALID_VALUE);
    for (const n in e)
      ca(e, n) && (Ns(e[n]) || Ns(t[n]) ? t[n] = e[n] : Ur(e[n], t[n]));
  }
  function Pc(e) {
    return e.type;
  }
  function l_(e, t, n) {
    let r = Ee(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = Vc(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal
    }));
    const s = Object.keys(r);
    s.length && s.forEach((i) => {
      e.mergeLocaleMessage(i, r[i]);
    });
    {
      if (Ee(t.datetimeFormats)) {
        const i = Object.keys(t.datetimeFormats);
        i.length && i.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
      }
      if (Ee(t.numberFormats)) {
        const i = Object.keys(t.numberFormats);
        i.length && i.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
      }
    }
  }
  function Yl(e) {
    return Ge(wr, null, e, 0);
  }
  const Ul = "__INTLIFY_META__";
  let jl = 0;
  function Wl(e) {
    return (t, n, r, s) => e(n, r, ds() || void 0, s);
  }
  const u_ = () => {
    const e = ds();
    let t = null;
    return e && (t = Pc(e)[Ul]) ? { [Ul]: t } : null;
  };
  function Ac(e = {}, t) {
    const { __root: n } = e, r = n === void 0;
    let s = Ie(e.inheritLocale) ? e.inheritLocale : !0;
    const i = Ze(
      n && s ? n.locale.value : W(e.locale) ? e.locale : fa
    ), o = Ze(
      n && s ? n.fallbackLocale.value : W(e.fallbackLocale) || Le(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
    ), a = Ze(Vc(i.value, e)), l = Ze(de(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), u = Ze(de(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
    let f = n ? n.missingWarn : Ie(e.missingWarn) || Ks(e.missingWarn) ? e.missingWarn : !0, d = n ? n.fallbackWarn : Ie(e.fallbackWarn) || Ks(e.fallbackWarn) ? e.fallbackWarn : !0, m = n ? n.fallbackRoot : Ie(e.fallbackRoot) ? e.fallbackRoot : !0, $ = !!e.fallbackFormat, E = We(e.missing) ? e.missing : null, O = We(e.missing) ? Wl(e.missing) : null, M = We(e.postTranslation) ? e.postTranslation : null, P = n ? n.warnHtmlMessage : Ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, Y = !!e.escapeParameter;
    const B = n ? n.modifiers : de(e.modifiers) ? e.modifiers : {};
    let V = e.pluralRules || n && n.pluralRules, k;
    k = (() => {
      r && xl(null);
      const p = {
        version: n_,
        locale: i.value,
        fallbackLocale: o.value,
        messages: a.value,
        modifiers: B,
        pluralRules: V,
        missing: O === null ? void 0 : O,
        missingWarn: f,
        fallbackWarn: d,
        fallbackFormat: $,
        unresolving: !0,
        postTranslation: M === null ? void 0 : M,
        warnHtmlMessage: P,
        escapeParameter: Y,
        messageResolver: e.messageResolver,
        __meta: { framework: "vue" }
      };
      p.datetimeFormats = l.value, p.numberFormats = u.value, p.__datetimeFormatters = de(k) ? k.__datetimeFormatters : void 0, p.__numberFormatters = de(k) ? k.__numberFormatters : void 0, {}.NODE_ENV !== "production" && (p.__v_emitter = de(k) ? k.__v_emitter : void 0);
      const y = zp(p);
      return r && xl(y), y;
    })(), Lr(k, i.value, o.value);
    function Z() {
      return [
        i.value,
        o.value,
        a.value,
        l.value,
        u.value
      ];
    }
    const q = ye({
      get: () => i.value,
      set: (p) => {
        i.value = p, k.locale = i.value;
      }
    }), Q = ye({
      get: () => o.value,
      set: (p) => {
        o.value = p, k.fallbackLocale = o.value, Lr(k, i.value, p);
      }
    }), ie = ye(() => a.value), ge = /* @__PURE__ */ ye(() => l.value), we = /* @__PURE__ */ ye(() => u.value);
    function je() {
      return We(M) ? M : null;
    }
    function gn(p) {
      M = p, k.postTranslation = p;
    }
    function Et() {
      return E;
    }
    function Fe(p) {
      p !== null && (O = Wl(p)), E = p, k.missing = O;
    }
    function oe(p, y) {
      return p !== "translate" || !y.resolvedMessage;
    }
    const ee = (p, y, U, H, se, me) => {
      Z();
      let ue;
      if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
        try {
          Il(u_()), r || (k.fallbackContext = n ? Fp() : void 0), ue = p(k);
        } finally {
          Il(null), r || (k.fallbackContext = void 0);
        }
      else
        ue = p(k);
      if (He(ue) && ue === Ei) {
        const [$e, mt] = y();
        if ({}.NODE_ENV !== "production" && n && W($e) && oe(U, mt) && (m && ($i(d, $e) || wc(f, $e)) && Tr(bi(Tt.FALLBACK_TO_ROOT, {
          key: $e,
          type: U
        })), {}.NODE_ENV !== "production")) {
          const { __v_emitter: Zt } = k;
          Zt && m && Zt.emit("fallback", {
            type: U,
            key: $e,
            to: "global",
            groupId: `${U}:${$e}`
          });
        }
        return n && m ? H(n) : se($e);
      } else {
        if (me(ue))
          return ue;
        throw vt(be.UNEXPECTED_RETURN_TYPE);
      }
    };
    function nt(...p) {
      return ee((y) => Reflect.apply(Ll, null, [y, ...p]), () => bo(...p), "translate", (y) => Reflect.apply(y.t, y, [...p]), (y) => y, (y) => W(y));
    }
    function De(...p) {
      const [y, U, H] = p;
      if (H && !Ee(H))
        throw vt(be.INVALID_ARGUMENT);
      return nt(y, U, lt({ resolvedMessage: !0 }, H || {}));
    }
    function rt(...p) {
      return ee((y) => Reflect.apply(Pl, null, [y, ...p]), () => Oo(...p), "datetime format", (y) => Reflect.apply(y.d, y, [...p]), () => Xs, (y) => W(y));
    }
    function Be(...p) {
      return ee((y) => Reflect.apply(Fl, null, [y, ...p]), () => No(...p), "number format", (y) => Reflect.apply(y.n, y, [...p]), () => Xs, (y) => W(y));
    }
    function Lt(p) {
      return p.map((y) => W(y) || He(y) || Ie(y) ? Yl(String(y)) : y);
    }
    const Vi = {
      normalize: Lt,
      interpolate: (p) => p,
      type: "vnode"
    };
    function Pi(...p) {
      return ee(
        (y) => {
          let U;
          const H = y;
          try {
            H.processor = Vi, U = Reflect.apply(Ll, null, [H, ...p]);
          } finally {
            H.processor = null;
          }
          return U;
        },
        () => bo(...p),
        "translate",
        (y) => y[wo](...p),
        (y) => [Yl(y)],
        (y) => Le(y)
      );
    }
    function wt(...p) {
      return ee(
        (y) => Reflect.apply(Fl, null, [y, ...p]),
        () => No(...p),
        "number format",
        (y) => y[ko](...p),
        () => [],
        (y) => W(y) || Le(y)
      );
    }
    function or(...p) {
      return ee(
        (y) => Reflect.apply(Pl, null, [y, ...p]),
        () => Oo(...p),
        "datetime format",
        (y) => y[To](...p),
        () => [],
        (y) => W(y) || Le(y)
      );
    }
    function gs(p) {
      V = p, k.pluralRules = V;
    }
    function vn(p, y) {
      const U = W(y) ? y : i.value, H = c(U);
      return k.messageResolver(H, p) !== null;
    }
    function Sr(p) {
      let y = null;
      const U = $c(k, o.value, i.value);
      for (let H = 0; H < U.length; H++) {
        const se = a.value[U[H]] || {}, me = k.messageResolver(se, p);
        if (me != null) {
          y = me;
          break;
        }
      }
      return y;
    }
    function Ir(p) {
      const y = Sr(p);
      return y != null ? y : n ? n.tm(p) || {} : {};
    }
    function c(p) {
      return a.value[p] || {};
    }
    function h(p, y) {
      a.value[p] = y, k.messages = a.value;
    }
    function b(p, y) {
      a.value[p] = a.value[p] || {}, Ur(y, a.value[p]), k.messages = a.value;
    }
    function T(p) {
      return l.value[p] || {};
    }
    function w(p, y) {
      l.value[p] = y, k.datetimeFormats = l.value, Al(k, p, y);
    }
    function R(p, y) {
      l.value[p] = lt(l.value[p] || {}, y), k.datetimeFormats = l.value, Al(k, p, y);
    }
    function F(p) {
      return u.value[p] || {};
    }
    function S(p, y) {
      u.value[p] = y, k.numberFormats = u.value, zl(k, p, y);
    }
    function L(p, y) {
      u.value[p] = lt(u.value[p] || {}, y), k.numberFormats = u.value, zl(k, p, y);
    }
    jl++, n && Bt && (It(n.locale, (p) => {
      s && (i.value = p, k.locale = p, Lr(k, i.value, o.value));
    }), It(n.fallbackLocale, (p) => {
      s && (o.value = p, k.fallbackLocale = p, Lr(k, i.value, o.value));
    }));
    const N = {
      id: jl,
      locale: q,
      fallbackLocale: Q,
      get inheritLocale() {
        return s;
      },
      set inheritLocale(p) {
        s = p, p && n && (i.value = n.locale.value, o.value = n.fallbackLocale.value, Lr(k, i.value, o.value));
      },
      get availableLocales() {
        return Object.keys(a.value).sort();
      },
      messages: ie,
      get modifiers() {
        return B;
      },
      get pluralRules() {
        return V || {};
      },
      get isGlobal() {
        return r;
      },
      get missingWarn() {
        return f;
      },
      set missingWarn(p) {
        f = p, k.missingWarn = f;
      },
      get fallbackWarn() {
        return d;
      },
      set fallbackWarn(p) {
        d = p, k.fallbackWarn = d;
      },
      get fallbackRoot() {
        return m;
      },
      set fallbackRoot(p) {
        m = p;
      },
      get fallbackFormat() {
        return $;
      },
      set fallbackFormat(p) {
        $ = p, k.fallbackFormat = $;
      },
      get warnHtmlMessage() {
        return P;
      },
      set warnHtmlMessage(p) {
        P = p, k.warnHtmlMessage = p;
      },
      get escapeParameter() {
        return Y;
      },
      set escapeParameter(p) {
        Y = p, k.escapeParameter = p;
      },
      t: nt,
      getLocaleMessage: c,
      setLocaleMessage: h,
      mergeLocaleMessage: b,
      getPostTranslationHandler: je,
      setPostTranslationHandler: gn,
      getMissingHandler: Et,
      setMissingHandler: Fe,
      [o_]: gs
    };
    return N.datetimeFormats = ge, N.numberFormats = we, N.rt = De, N.te = vn, N.tm = Ir, N.d = rt, N.n = Be, N.getDateTimeFormat = T, N.setDateTimeFormat = w, N.mergeDateTimeFormat = R, N.getNumberFormat = F, N.setNumberFormat = S, N.mergeNumberFormat = L, N[a_] = e.__injectWithOption, N[wo] = Pi, N[To] = or, N[ko] = wt, {}.NODE_ENV !== "production" && (N[ns] = (p) => {
      k.__v_emitter = p;
    }, N[Mo] = () => {
      k.__v_emitter = void 0;
    }), N;
  }
  const ha = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (e) => e === "parent" || e === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  function c_({ slots: e }, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => r = [
      ...r,
      ...Le(s.children) ? s.children : [s]
    ], []) : t.reduce((n, r) => {
      const s = e[r];
      return s && (n[r] = s()), n;
    }, {});
  }
  function Fc(e) {
    return C;
  }
  const qi = {
    name: "i18n-t",
    props: lt({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: (e) => He(e) || !isNaN(e)
      }
    }, ha),
    setup(e, t) {
      const { slots: n, attrs: r } = t, s = e.i18n || _a({
        useScope: e.scope,
        __useComponent: !0
      });
      return () => {
        const i = Object.keys(n).filter((d) => d !== "_"), o = {};
        e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = W(e.plural) ? +e.plural : e.plural);
        const a = c_(t, i), l = s[wo](e.keypath, a, o), u = lt({}, r), f = W(e.tag) || Ee(e.tag) ? e.tag : Fc();
        return pc(f, u, l);
      };
    }
  };
  function d_(e) {
    return Le(e) && !W(e[0]);
  }
  function zc(e, t, n, r) {
    const { slots: s, attrs: i } = t;
    return () => {
      const o = { part: !0 };
      let a = {};
      e.locale && (o.locale = e.locale), W(e.format) ? o.key = e.format : Ee(e.format) && (W(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((m, $) => n.includes($) ? lt({}, m, { [$]: e.format[$] }) : m, {}));
      const l = r(e.value, o, a);
      let u = [o.key];
      Le(l) ? u = l.map((m, $) => {
        const E = s[m.type], O = E ? E({ [m.type]: m.value, index: $, parts: l }) : [m.value];
        return d_(O) && (O[0].key = `${m.type}-${$}`), O;
      }) : W(l) && (u = [l]);
      const f = lt({}, i), d = W(e.tag) || Ee(e.tag) ? e.tag : Fc();
      return pc(d, f, u);
    };
  }
  const Hl = {
    name: "i18n-n",
    props: lt({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ha),
    setup(e, t) {
      const n = e.i18n || _a({ useScope: "parent", __useComponent: !0 });
      return zc(e, t, xc, (...r) => n[ko](...r));
    }
  }, Bl = {
    name: "i18n-d",
    props: lt({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ha),
    setup(e, t) {
      const n = e.i18n || _a({ useScope: "parent", __useComponent: !0 });
      return zc(e, t, Ic, (...r) => n[To](...r));
    }
  };
  function f_(e, t) {
    const n = e;
    if (e.mode === "composition")
      return n.__getInstance(t) || e.global;
    {
      const r = n.__getInstance(t);
      return r != null ? r.__composer : e.global.__composer;
    }
  }
  function m_(e) {
    const t = (o) => {
      const { instance: a, modifiers: l, value: u } = o;
      if (!a || !a.$)
        throw vt(be.UNEXPECTED_ERROR);
      const f = f_(e, a.$);
      ({}).NODE_ENV !== "production" && l.preserve && Tr(bi(Tt.NOT_SUPPORTED_PRESERVE));
      const d = ql(u);
      return [
        Reflect.apply(f.t, f, [...Gl(d)]),
        f
      ];
    };
    return {
      created: (o, a) => {
        const [l, u] = t(a);
        Bt && e.global === u && (o.__i18nWatcher = It(u.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })), o.__composer = u, o.textContent = l;
      },
      unmounted: (o) => {
        Bt && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
      },
      beforeUpdate: (o, { value: a }) => {
        if (o.__composer) {
          const l = o.__composer, u = ql(a);
          o.textContent = Reflect.apply(l.t, l, [
            ...Gl(u)
          ]);
        }
      },
      getSSRProps: (o) => {
        const [a] = t(o);
        return { textContent: a };
      }
    };
  }
  function ql(e) {
    if (W(e))
      return { path: e };
    if (de(e)) {
      if (!("path" in e))
        throw vt(be.REQUIRED_VALUE, "path");
      return e;
    } else
      throw vt(be.INVALID_VALUE);
  }
  function Gl(e) {
    const { path: t, locale: n, args: r, choice: s, plural: i } = e, o = {}, a = r || {};
    return W(n) && (o.locale = n), He(s) && (o.plural = s), He(i) && (o.plural = i), [t, a, o];
  }
  function h_(e, t, ...n) {
    const r = de(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, i = Ie(r.globalInstall) ? r.globalInstall : !0;
    ({}).NODE_ENV !== "production" && i && s && Tr(bi(Tt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: qi.name
    })), i && (e.component(s ? "i18n" : qi.name, qi), e.component(Hl.name, Hl), e.component(Bl.name, Bl)), e.directive("t", m_(t));
  }
  const Yc = "vue-i18n: composer properties";
  let Io;
  async function p_(e, t) {
    return new Promise((n, r) => {
      try {
        Qp({
          id: "vue-devtools-plugin-vue-i18n",
          label: Bi["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [Yc],
          app: e
        }, (s) => {
          Io = s, s.on.visitComponentTree(({ componentInstance: o, treeNode: a }) => {
            __(o, a, t);
          }), s.on.inspectComponent(({ componentInstance: o, instanceData: a }) => {
            o.vnode.el && o.vnode.el.__VUE_I18N__ && a && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && Kl(a, o.vnode.el.__VUE_I18N__) : Kl(a, o.vnode.el.__VUE_I18N__));
          }), s.addInspector({
            id: "vue-i18n-resource-inspector",
            label: Bi["vue-i18n-resource-inspector"],
            icon: "language",
            treeFilterPlaceholder: e_["vue-i18n-resource-inspector"]
          }), s.on.getInspectorTree((o) => {
            o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && $_(o, t);
          });
          const i = /* @__PURE__ */ new Map();
          s.on.getInspectorState(async (o) => {
            if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
              if (s.unhighlightElement(), O_(o, t), o.nodeId === "global") {
                if (!i.has(o.app)) {
                  const [a] = await s.getComponentInstances(o.app);
                  i.set(o.app, a);
                }
                s.highlightElement(i.get(o.app));
              } else {
                const a = b_(o.nodeId, t);
                a && s.highlightElement(a);
              }
          }), s.on.editInspectorState((o) => {
            o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && D_(o, t);
          }), s.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: Bi["vue-i18n-timeline"],
            color: t_["vue-i18n-timeline"]
          }), n(!0);
        });
      } catch (s) {
        console.error(s), r(!1);
      }
    });
  }
  function Uc(e) {
    return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
  }
  function __(e, t, n) {
    const r = n.mode === "composition" ? n.global : n.global.__composer;
    if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
      const s = {
        label: `i18n (${Uc(e)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      t.tags.push(s);
    }
  }
  function Kl(e, t) {
    const n = Yc;
    e.state.push({
      type: n,
      key: "locale",
      editable: !0,
      value: t.locale.value
    }), e.state.push({
      type: n,
      key: "availableLocales",
      editable: !1,
      value: t.availableLocales
    }), e.state.push({
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: t.fallbackLocale.value
    }), e.state.push({
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: t.inheritLocale
    }), e.state.push({
      type: n,
      key: "messages",
      editable: !1,
      value: pa(t.messages.value)
    }), e.state.push({
      type: n,
      key: "datetimeFormats",
      editable: !1,
      value: t.datetimeFormats.value
    }), e.state.push({
      type: n,
      key: "numberFormats",
      editable: !1,
      value: t.numberFormats.value
    });
  }
  function pa(e) {
    const t = {};
    return Object.keys(e).forEach((n) => {
      const r = e[n];
      We(r) && "source" in r ? t[n] = E_(r) : Ee(r) ? t[n] = pa(r) : t[n] = r;
    }), t;
  }
  const g_ = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function v_(e) {
    return e.replace(/[<>"&]/g, y_);
  }
  function y_(e) {
    return g_[e] || e;
  }
  function E_(e) {
    return {
      _custom: {
        type: "function",
        display: `<span>\u0192</span> ${e.source ? `("${v_(e.source)}")` : "(?)"}`
      }
    };
  }
  function $_(e, t) {
    e.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const n = t.mode === "composition" ? t.global : t.global.__composer;
    for (const [r, s] of t.__instances) {
      const i = t.mode === "composition" ? s : s.__composer;
      n !== i && e.rootNodes.push({
        id: i.id.toString(),
        label: `${Uc(r)} Scope`
      });
    }
  }
  function b_(e, t) {
    let n = null;
    if (e !== "global") {
      for (const [r, s] of t.__instances.entries())
        if (s.id.toString() === e) {
          n = r;
          break;
        }
    }
    return n;
  }
  function jc(e, t) {
    if (e === "global")
      return t.mode === "composition" ? t.global : t.global.__composer;
    {
      const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
      return n ? t.mode === "composition" ? n : n.__composer : null;
    }
  }
  function O_(e, t) {
    const n = jc(e.nodeId, t);
    return n && (e.state = N_(n)), null;
  }
  function N_(e) {
    const t = {}, n = "Locale related info", r = [
      {
        type: n,
        key: "locale",
        editable: !0,
        value: e.locale.value
      },
      {
        type: n,
        key: "fallbackLocale",
        editable: !0,
        value: e.fallbackLocale.value
      },
      {
        type: n,
        key: "availableLocales",
        editable: !1,
        value: e.availableLocales
      },
      {
        type: n,
        key: "inheritLocale",
        editable: !0,
        value: e.inheritLocale
      }
    ];
    t[n] = r;
    const s = "Locale messages info", i = [
      {
        type: s,
        key: "messages",
        editable: !1,
        value: pa(e.messages.value)
      }
    ];
    t[s] = i;
    {
      const o = "Datetime formats info", a = [
        {
          type: o,
          key: "datetimeFormats",
          editable: !1,
          value: e.datetimeFormats.value
        }
      ];
      t[o] = a;
      const l = "Datetime formats info", u = [
        {
          type: l,
          key: "numberFormats",
          editable: !1,
          value: e.numberFormats.value
        }
      ];
      t[l] = u;
    }
    return t;
  }
  function xo(e, t) {
    if (Io) {
      let n;
      t && "groupId" in t && (n = t.groupId, delete t.groupId), Io.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: e,
          groupId: n,
          time: Date.now(),
          meta: {},
          data: t || {},
          logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function D_(e, t) {
    const n = jc(e.nodeId, t);
    if (n) {
      const [r] = e.path;
      r === "locale" && W(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (W(e.state.value) || Le(e.state.value) || Ee(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && Ie(e.state.value) && (n.inheritLocale = e.state.value);
    }
  }
  const w_ = /* @__PURE__ */ Gt("global-vue-i18n");
  function T_(e = {}, t) {
    const n = Ie(e.globalInjection) ? e.globalInjection : !0, r = !0, s = /* @__PURE__ */ new Map(), [i, o] = k_(e), a = Gt({}.NODE_ENV !== "production" ? "vue-i18n" : "");
    function l(d) {
      return s.get(d) || null;
    }
    function u(d, m) {
      s.set(d, m);
    }
    function f(d) {
      s.delete(d);
    }
    {
      const d = {
        get mode() {
          return "composition";
        },
        get allowComposition() {
          return r;
        },
        async install(m, ...$) {
          ({}).NODE_ENV !== "production" && (m.__VUE_I18N__ = d), m.__VUE_I18N_SYMBOL__ = a, m.provide(m.__VUE_I18N_SYMBOL__, d), n && V_(m, d.global), h_(m, d, ...$);
          const E = m.unmount;
          if (m.unmount = () => {
            d.dispose(), E();
          }, {}.NODE_ENV !== "production" || !1) {
            if (!await p_(m, d))
              throw vt(be.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
            const M = vc();
            {
              const P = o;
              P[ns] && P[ns](M);
            }
            M.on("*", xo);
          }
        },
        get global() {
          return o;
        },
        dispose() {
          i.stop();
        },
        __instances: s,
        __getInstance: l,
        __setInstance: u,
        __deleteInstance: f
      };
      return d;
    }
  }
  function _a(e = {}) {
    const t = ds();
    if (t == null)
      throw vt(be.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
      throw vt(be.NOT_INSLALLED);
    const n = M_(t), r = I_(n), s = Pc(t), i = S_(e, s);
    if (i === "global")
      return l_(r, e, s), r;
    if (i === "parent") {
      let l = x_(n, t, e.__useComponent);
      return l == null && ({}.NODE_ENV !== "production" && Tr(bi(Tt.NOT_FOUND_PARENT_SCOPE)), l = r), l;
    }
    const o = n;
    let a = o.__getInstance(t);
    if (a == null) {
      const l = lt({}, e);
      "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), a = Ac(l), R_(o, t, a), o.__setInstance(t, a);
    }
    return a;
  }
  function k_(e, t, n) {
    const r = af();
    {
      const s = r.run(() => Ac(e));
      if (s == null)
        throw vt(be.UNEXPECTED_ERROR);
      return [r, s];
    }
  }
  function M_(e) {
    {
      const t = Bn(e.isCE ? w_ : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t)
        throw vt(e.isCE ? be.NOT_INSLALLED_WITH_PROVIDE : be.UNEXPECTED_ERROR);
      return t;
    }
  }
  function S_(e, t) {
    return yi(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
  }
  function I_(e) {
    return e.mode === "composition" ? e.global : e.global.__composer;
  }
  function x_(e, t, n = !1) {
    let r = null;
    const s = t.root;
    let i = t.parent;
    for (; i != null; ) {
      const o = e;
      if (e.mode === "composition" && (r = o.__getInstance(i)), r != null || s === i)
        break;
      i = i.parent;
    }
    return r;
  }
  function R_(e, t, n) {
    let r = null;
    ea(() => {
      if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el) {
        t.vnode.el.__VUE_I18N__ = n, r = vc();
        const s = n;
        s[ns] && s[ns](r), r.on("*", xo);
      }
    }, t), na(() => {
      if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el && t.vnode.el.__VUE_I18N__) {
        r && r.off("*", xo);
        const s = n;
        s[Mo] && s[Mo](), delete t.vnode.el.__VUE_I18N__;
      }
      e.__deleteInstance(t);
    }, t);
  }
  const C_ = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ], L_ = ["t", "rt", "d", "n", "tm"];
  function V_(e, t) {
    const n = /* @__PURE__ */ Object.create(null);
    C_.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s)
        throw vt(be.UNEXPECTED_ERROR);
      const i = xe(s.value) ? {
        get() {
          return s.value.value;
        },
        set(o) {
          s.value.value = o;
        }
      } : {
        get() {
          return s.get && s.get();
        }
      };
      Object.defineProperty(n, r, i);
    }), e.config.globalProperties.$i18n = n, L_.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s || !s.value)
        throw vt(be.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, s);
    });
  }
  Vp(_p);
  Pp($c);
  r_();
  if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const e = ua();
    e.__INTLIFY__ = !0, Dp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const P_ = {
    en: {
      list: {
        type: (e) => {
          const { normalize: t } = e;
          return t(["\u0422\u0438\u043F"]);
        },
        name: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"]);
        },
        count: (e) => {
          const { normalize: t } = e;
          return t(["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        editTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        ib: (e) => {
          const { normalize: t } = e;
          return t(["\u0418\u043D\u0444\u043E\u0431\u043B\u043E\u043A\u0438"]);
        },
        hl: (e) => {
          const { normalize: t } = e;
          return t(["Highload-\u0431\u043B\u043E\u043A\u0438"]);
        },
        id: (e) => {
          const { normalize: t } = e;
          return t(["ID"]);
        }
      },
      edit: {
        addRule: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430"]);
        },
        addRuleTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u044F"]);
        },
        save: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]);
        },
        saveTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"]);
        },
        apply: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"]);
        },
        applyTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0432 \u0444\u043E\u0440\u043C\u0435"]);
        },
        cancel: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"]);
        },
        cancelTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"]);
        },
        selectRule: (e) => {
          const { normalize: t } = e;
          return t(["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E..."]);
        },
        emptyGroups: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"]);
        },
        rule: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0430\u0432\u0438\u043B\u043E"]);
        },
        options: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"]);
        },
        delete: (e) => {
          const { normalize: t } = e;
          return t(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
        },
        add: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"]);
        },
        sort: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"]);
        },
        multiple: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        notMultiple: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        emptyRules: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        errors: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0448\u0438\u0431\u043A\u0430"]);
        },
        success: (e) => {
          const { normalize: t } = e;
          return t(["\u0423\u0441\u043F\u0435\u0448\u043D\u043E"]);
        },
        successMessage: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"]);
        },
        message: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435"]);
        }
      },
      errors: {
        integer: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0446\u0435\u043B\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        required: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"]);
        },
        numeric: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        decimal: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        minValue: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", n(r("minValue"))]);
        },
        mustBeLessOrEqual: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 ", n(r("value"))]);
        },
        mustBeGreaterOrEqual: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 ", n(r("value"))]);
        },
        minLength: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F ", n(r("value"))]);
        }
      },
      min: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      max: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      minCount: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      maxCount: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      betweenCount: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      between: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      minLength: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      maxLength: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      betweenLength: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      date: {
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        }
      },
      regex: {
        regex: (e) => {
          const { normalize: t } = e;
          return t(["\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435"]);
        }
      },
      in: {
        in: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      notIn: {
        notIn: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      strictIn: {
        in: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      strictNotIn: {
        notIn: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      equalDate: {
        equalDate: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      betweenDate: {
        minDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        maxDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      maxDate: {
        maxDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      minDate: {
        minDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      equal: {
        equal: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      }
    },
    ru: {
      list: {
        type: (e) => {
          const { normalize: t } = e;
          return t(["\u0422\u0438\u043F"]);
        },
        name: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"]);
        },
        count: (e) => {
          const { normalize: t } = e;
          return t(["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        editTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        ib: (e) => {
          const { normalize: t } = e;
          return t(["\u0418\u043D\u0444\u043E\u0431\u043B\u043E\u043A\u0438"]);
        },
        hl: (e) => {
          const { normalize: t } = e;
          return t(["Highload-\u0431\u043B\u043E\u043A\u0438"]);
        },
        id: (e) => {
          const { normalize: t } = e;
          return t(["ID"]);
        }
      },
      edit: {
        addRule: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430"]);
        },
        addRuleTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u044F"]);
        },
        save: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]);
        },
        saveTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"]);
        },
        apply: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"]);
        },
        applyTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0432 \u0444\u043E\u0440\u043C\u0435"]);
        },
        cancel: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"]);
        },
        cancelTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"]);
        },
        selectRule: (e) => {
          const { normalize: t } = e;
          return t(["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E..."]);
        },
        emptyGroups: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"]);
        },
        rule: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0430\u0432\u0438\u043B\u043E"]);
        },
        options: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"]);
        },
        delete: (e) => {
          const { normalize: t } = e;
          return t(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
        },
        add: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"]);
        },
        sort: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"]);
        },
        multiple: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        notMultiple: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        emptyRules: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B"]);
        },
        errors: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0448\u0438\u0431\u043A\u0430"]);
        },
        success: (e) => {
          const { normalize: t } = e;
          return t(["\u0423\u0441\u043F\u0435\u0448\u043D\u043E"]);
        },
        successMessage: (e) => {
          const { normalize: t } = e;
          return t(["\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"]);
        },
        message: (e) => {
          const { normalize: t } = e;
          return t(["\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435"]);
        }
      },
      errors: {
        integer: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0446\u0435\u043B\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        required: (e) => {
          const { normalize: t } = e;
          return t(["\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"]);
        },
        numeric: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        decimal: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C"]);
        },
        minValue: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", n(r("minValue"))]);
        },
        mustBeLessOrEqual: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 ", n(r("value"))]);
        },
        mustBeGreaterOrEqual: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 ", n(r("value"))]);
        },
        minLength: (e) => {
          const { normalize: t, interpolate: n, named: r } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F ", n(r("value"))]);
        }
      },
      min: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      max: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      minCount: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      maxCount: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      betweenCount: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439"]);
        }
      },
      between: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      },
      minLength: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      maxLength: {
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      betweenLength: {
        min: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        },
        max: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438"]);
        }
      },
      date: {
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        }
      },
      regex: {
        regex: (e) => {
          const { normalize: t } = e;
          return t(["\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435"]);
        }
      },
      in: {
        in: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      notIn: {
        notIn: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      strictIn: {
        in: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      strictNotIn: {
        notIn: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"]);
        }
      },
      equalDate: {
        equalDate: (e) => {
          const { normalize: t } = e;
          return t(["\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      betweenDate: {
        minDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        maxDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      maxDate: {
        maxDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      minDate: {
        minDate: (e) => {
          const { normalize: t } = e;
          return t(["\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0430\u0442\u0430"]);
        },
        format: (e) => {
          const { normalize: t } = e;
          return t(["\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"]);
        },
        showCalendarTitle: (e) => {
          const { normalize: t } = e;
          return t(["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442\u044B"]);
        }
      },
      equal: {
        equal: (e) => {
          const { normalize: t } = e;
          return t(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        }
      }
    }
  }, A_ = T_({
    locale: document.getElementById("app").dataset.locale,
    fallbackLocale: "ru",
    globalInjection: !0,
    messages: P_
  }), Ro = {
    getList() {
      return BX.ajax.runComponentAction(
        "fi1a:bitrixvalidation.admin",
        "getList",
        {
          mode: "class",
          data: {}
        }
      );
    },
    getEntity(e) {
      return BX.ajax.runComponentAction(
        "fi1a:bitrixvalidation.admin",
        "getEntity",
        {
          mode: "class",
          data: e
        }
      );
    },
    submit(e, t, n) {
      return BX.ajax.runComponentAction(
        "fi1a:bitrixvalidation.admin",
        "submit",
        {
          mode: "class",
          data: {
            entityType: e,
            entityId: t,
            rules: n
          }
        }
      );
    }
  }, F_ = {
    name: "Spinner",
    props: {
      loading: {
        type: Boolean,
        default: !0
      },
      color: {
        type: String,
        default: "#408ec0"
      }
    },
    data() {
      return {
        css: {
          background: this.color
        }
      };
    }
  }, z_ = { class: "vue-css-spinner" }, Y_ = { class: "circleOneContainer" }, U_ = { class: "circleTwoContainer" }, j_ = { class: "circleThreeContainer" }, W_ = { class: "circleFourContainer" }, H_ = { class: "circleFiveContainer" }, B_ = { class: "circleSixContainer" };
  function q_(e, t, n, r, s, i) {
    return ln((g(), v("div", z_, [
      _("div", Y_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ]),
      _("div", U_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ]),
      _("div", j_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ]),
      _("div", W_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ]),
      _("div", H_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ]),
      _("div", B_, [
        _("div", {
          class: "circle",
          style: nn(s.css)
        }, null, 4)
      ])
    ], 512)), [
      [jh, n.loading]
    ]);
  }
  const Wc = /* @__PURE__ */ ce(F_, [["render", q_], ["__scopeId", "data-v-846e8528"]]);
  function Xl(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = he(e[r])), n), {});
  }
  function Zs(e) {
    return typeof e == "function";
  }
  function G_(e) {
    return wn(e) || dn(e);
  }
  function Hc(e, t, n) {
    let r = e;
    const s = t.split(".");
    for (let i = 0; i < s.length; i++) {
      if (!r[s[i]])
        return n;
      r = r[s[i]];
    }
    return r;
  }
  function Gi(e, t, n) {
    return ye(() => e.some((r) => Hc(t, r, {
      [n]: !1
    })[n]));
  }
  function Zl(e, t, n) {
    return ye(() => e.reduce((r, s) => {
      const i = Hc(t, s, {
        [n]: !1
      })[n] || [];
      return r.concat(i);
    }, []));
  }
  function Bc(e, t, n, r) {
    return e.call(r, he(t), he(n), r);
  }
  function qc(e) {
    return e.$valid !== void 0 ? !e.$valid : !e;
  }
  function K_(e, t, n, r, s, i, o) {
    let {
      $lazy: a,
      $rewardEarly: l
    } = s, u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], f = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, m = arguments.length > 10 ? arguments[10] : void 0;
    const $ = Ze(!!r.value), E = Ze(0);
    n.value = !1;
    const O = It([t, r].concat(u, m), () => {
      if (a && !r.value || l && !d.value && !n.value)
        return;
      let M;
      try {
        M = Bc(e, t, f, o);
      } catch (P) {
        M = Promise.reject(P);
      }
      E.value++, n.value = !!E.value, $.value = !1, Promise.resolve(M).then((P) => {
        E.value--, n.value = !!E.value, i.value = P, $.value = qc(P);
      }).catch((P) => {
        E.value--, n.value = !!E.value, i.value = P, $.value = !0;
      });
    }, {
      immediate: !0,
      deep: typeof t == "object"
    });
    return {
      $invalid: $,
      $unwatch: O
    };
  }
  function X_(e, t, n, r, s, i, o, a) {
    let {
      $lazy: l,
      $rewardEarly: u
    } = r;
    const f = () => ({}), d = ye(() => {
      if (l && !n.value || u && !a.value)
        return !1;
      let m = !0;
      try {
        const $ = Bc(e, t, o, i);
        s.value = $, m = qc($);
      } catch ($) {
        s.value = $;
      }
      return m;
    });
    return {
      $unwatch: f,
      $invalid: d
    };
  }
  function Z_(e, t, n, r, s, i, o, a, l, u, f) {
    const d = Ze(!1), m = e.$params || {}, $ = Ze(null);
    let E, O;
    e.$async ? {
      $invalid: E,
      $unwatch: O
    } = K_(e.$validator, t, d, n, r, $, s, e.$watchTargets, l, u, f) : {
      $invalid: E,
      $unwatch: O
    } = X_(e.$validator, t, n, r, $, s, l, u);
    const M = e.$message;
    return {
      $message: Zs(M) ? ye(() => M(Xl({
        $pending: d,
        $invalid: E,
        $params: Xl(m),
        $model: t,
        $response: $,
        $validator: i,
        $propertyPath: a,
        $property: o
      }))) : M || "",
      $params: m,
      $pending: d,
      $invalid: E,
      $response: $,
      $unwatch: O
    };
  }
  function J_() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = he(e), n = Object.keys(t), r = {}, s = {}, i = {};
    let o = null;
    return n.forEach((a) => {
      const l = t[a];
      switch (!0) {
        case Zs(l.$validator):
          r[a] = l;
          break;
        case Zs(l):
          r[a] = {
            $validator: l
          };
          break;
        case a === "$validationGroups":
          o = l;
          break;
        case a.startsWith("$"):
          i[a] = l;
          break;
        default:
          s[a] = l;
      }
    }), {
      rules: r,
      nestedValidators: s,
      config: i,
      validationGroups: o
    };
  }
  function Q_() {
  }
  const eg = "__root";
  function Gc(e, t, n) {
    if (n)
      return t ? t(e()) : e();
    try {
      var r = Promise.resolve(e());
      return t ? r.then(t) : r;
    } catch (s) {
      return Promise.reject(s);
    }
  }
  function tg(e, t) {
    return Gc(e, Q_, t);
  }
  function ng(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n);
  }
  function rg(e) {
    return function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      try {
        return Promise.resolve(e.apply(this, t));
      } catch (r) {
        return Promise.reject(r);
      }
    };
  }
  function sg(e, t, n, r, s, i, o, a, l) {
    const u = Object.keys(e), f = r.get(s, e), d = Ze(!1), m = Ze(!1), $ = Ze(0);
    if (f) {
      if (!f.$partial)
        return f;
      f.$unwatch(), d.value = f.$dirty.value;
    }
    const E = {
      $dirty: d,
      $path: s,
      $touch: () => {
        d.value || (d.value = !0);
      },
      $reset: () => {
        d.value && (d.value = !1);
      },
      $commit: () => {
      }
    };
    return u.length ? (u.forEach((O) => {
      E[O] = Z_(e[O], t, E.$dirty, i, o, O, n, s, l, m, $);
    }), E.$externalResults = ye(() => a.value ? [].concat(a.value).map((O, M) => ({
      $propertyPath: s,
      $property: n,
      $validator: "$externalResults",
      $uid: `${s}-externalResult-${M}`,
      $message: O,
      $params: {},
      $response: null,
      $pending: !1
    })) : []), E.$invalid = ye(() => {
      const O = u.some((M) => he(E[M].$invalid));
      return m.value = O, !!E.$externalResults.value.length || O;
    }), E.$pending = ye(() => u.some((O) => he(E[O].$pending))), E.$error = ye(() => E.$dirty.value ? E.$pending.value || E.$invalid.value : !1), E.$silentErrors = ye(() => u.filter((O) => he(E[O].$invalid)).map((O) => {
      const M = E[O];
      return Dr({
        $propertyPath: s,
        $property: n,
        $validator: O,
        $uid: `${s}-${O}`,
        $message: M.$message,
        $params: M.$params,
        $response: M.$response,
        $pending: M.$pending
      });
    }).concat(E.$externalResults.value)), E.$errors = ye(() => E.$dirty.value ? E.$silentErrors.value : []), E.$unwatch = () => u.forEach((O) => {
      E[O].$unwatch();
    }), E.$commit = () => {
      m.value = !0, $.value = Date.now();
    }, r.set(s, e, E), E) : (f && r.set(s, e, E), E);
  }
  function ig(e, t, n, r, s, i, o) {
    const a = Object.keys(e);
    return a.length ? a.reduce((l, u) => (l[u] = Co({
      validations: e[u],
      state: t,
      key: u,
      parentKey: n,
      resultsCache: r,
      globalConfig: s,
      instance: i,
      externalResults: o
    }), l), {}) : {};
  }
  function og(e, t, n) {
    const r = ye(() => [t, n].filter((E) => E).reduce((E, O) => E.concat(Object.values(he(O))), [])), s = ye({
      get() {
        return e.$dirty.value || (r.value.length ? r.value.every((E) => E.$dirty) : !1);
      },
      set(E) {
        e.$dirty.value = E;
      }
    }), i = ye(() => {
      const E = he(e.$silentErrors) || [], O = r.value.filter((M) => (he(M).$silentErrors || []).length).reduce((M, P) => M.concat(...P.$silentErrors), []);
      return E.concat(O);
    }), o = ye(() => {
      const E = he(e.$errors) || [], O = r.value.filter((M) => (he(M).$errors || []).length).reduce((M, P) => M.concat(...P.$errors), []);
      return E.concat(O);
    }), a = ye(() => r.value.some((E) => E.$invalid) || he(e.$invalid) || !1), l = ye(() => r.value.some((E) => he(E.$pending)) || he(e.$pending) || !1), u = ye(() => r.value.some((E) => E.$dirty) || r.value.some((E) => E.$anyDirty) || s.value), f = ye(() => s.value ? l.value || a.value : !1), d = () => {
      e.$touch(), r.value.forEach((E) => {
        E.$touch();
      });
    }, m = () => {
      e.$commit(), r.value.forEach((E) => {
        E.$commit();
      });
    }, $ = () => {
      e.$reset(), r.value.forEach((E) => {
        E.$reset();
      });
    };
    return r.value.length && r.value.every((E) => E.$dirty) && d(), {
      $dirty: s,
      $errors: o,
      $invalid: a,
      $anyDirty: u,
      $error: f,
      $pending: l,
      $touch: d,
      $reset: $,
      $silentErrors: i,
      $commit: m
    };
  }
  function Co(e) {
    const t = rg(function() {
      return je(), ng(function() {
        if (M.$rewardEarly)
          return Fe(), tg(oo);
      }, function() {
        return Gc(oo, function() {
          return new Promise((De) => {
            if (!we.value)
              return De(!Q.value);
            const rt = It(we, () => {
              De(!Q.value), rt();
            });
          });
        });
      });
    });
    let {
      validations: n,
      state: r,
      key: s,
      parentKey: i,
      childResults: o,
      resultsCache: a,
      globalConfig: l = {},
      instance: u,
      externalResults: f
    } = e;
    const d = i ? `${i}.${s}` : s, {
      rules: m,
      nestedValidators: $,
      config: E,
      validationGroups: O
    } = J_(n), M = Object.assign({}, l, E), P = s ? ye(() => {
      const De = he(r);
      return De ? he(De[s]) : void 0;
    }) : r, Y = Object.assign({}, he(f) || {}), B = ye(() => {
      const De = he(f);
      return s ? De ? he(De[s]) : void 0 : De;
    }), V = sg(m, P, s, a, d, M, u, B, r), k = ig($, P, d, a, M, u, B), te = {};
    O && Object.entries(O).forEach((De) => {
      let [rt, Be] = De;
      te[rt] = {
        $invalid: Gi(Be, k, "$invalid"),
        $error: Gi(Be, k, "$error"),
        $pending: Gi(Be, k, "$pending"),
        $errors: Zl(Be, k, "$errors"),
        $silentErrors: Zl(Be, k, "$silentErrors")
      };
    });
    const {
      $dirty: Z,
      $errors: q,
      $invalid: Q,
      $anyDirty: ie,
      $error: ge,
      $pending: we,
      $touch: je,
      $reset: gn,
      $silentErrors: Et,
      $commit: Fe
    } = og(V, k, o), oe = s ? ye({
      get: () => he(P),
      set: (De) => {
        Z.value = !0;
        const rt = he(r), Be = he(f);
        Be && (Be[s] = Y[s]), xe(rt[s]) ? rt[s].value = De : rt[s] = De;
      }
    }) : null;
    s && M.$autoDirty && It(P, () => {
      Z.value || je();
      const De = he(f);
      De && (De[s] = Y[s]);
    }, {
      flush: "sync"
    });
    function ee(De) {
      return (o.value || {})[De];
    }
    function nt() {
      xe(f) ? f.value = Y : Object.keys(Y).length === 0 ? Object.keys(f).forEach((De) => {
        delete f[De];
      }) : Object.assign(f, Y);
    }
    return Dr(Object.assign({}, V, {
      $model: oe,
      $dirty: Z,
      $error: ge,
      $errors: q,
      $invalid: Q,
      $anyDirty: ie,
      $pending: we,
      $touch: je,
      $reset: gn,
      $path: d || eg,
      $silentErrors: Et,
      $validate: t,
      $commit: Fe
    }, o && {
      $getResultsForChild: ee,
      $clearExternalResults: nt,
      $validationGroups: te
    }, k));
  }
  class ag {
    constructor() {
      this.storage = /* @__PURE__ */ new Map();
    }
    set(t, n, r) {
      this.storage.set(t, {
        rules: n,
        result: r
      });
    }
    checkRulesValidity(t, n, r) {
      const s = Object.keys(r), i = Object.keys(n);
      return i.length !== s.length || !i.every((a) => s.includes(a)) ? !1 : i.every((a) => n[a].$params ? Object.keys(n[a].$params).every((l) => he(r[a].$params[l]) === he(n[a].$params[l])) : !0);
    }
    get(t, n) {
      const r = this.storage.get(t);
      if (!r)
        return;
      const {
        rules: s,
        result: i
      } = r, o = this.checkRulesValidity(t, n, s), a = i.$unwatch ? i.$unwatch : () => ({});
      return o ? i : {
        $dirty: i.$dirty,
        $partial: !0,
        $unwatch: a
      };
    }
  }
  const Cs = {
    COLLECT_ALL: !0,
    COLLECT_NONE: !1
  }, Jl = Symbol("vuelidate#injectChildResults"), Ql = Symbol("vuelidate#removeChildResults");
  function lg(e) {
    let {
      $scope: t,
      instance: n
    } = e;
    const r = {}, s = Ze([]), i = ye(() => s.value.reduce((f, d) => (f[d] = he(r[d]), f), {}));
    function o(f, d) {
      let {
        $registerAs: m,
        $scope: $,
        $stopPropagation: E
      } = d;
      E || t === Cs.COLLECT_NONE || $ === Cs.COLLECT_NONE || t !== Cs.COLLECT_ALL && t !== $ || (r[m] = f, s.value.push(m));
    }
    n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], o);
    function a(f) {
      s.value = s.value.filter((d) => d !== f), delete r[f];
    }
    n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], a);
    const l = Bn(Jl, []);
    uo(Jl, n.__vuelidateInjectInstances);
    const u = Bn(Ql, []);
    return uo(Ql, n.__vuelidateRemoveInstances), {
      childResults: i,
      sendValidationResultsToParent: l,
      removeValidationResultsFromParent: u
    };
  }
  function Kc(e) {
    return new Proxy(e, {
      get(t, n) {
        return typeof t[n] == "object" ? Kc(t[n]) : ye(() => t[n]);
      }
    });
  }
  let eu = 0;
  function Ae(e, t) {
    var n;
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    arguments.length === 1 && (r = e, e = void 0, t = void 0);
    let {
      $registerAs: s,
      $scope: i = Cs.COLLECT_ALL,
      $stopPropagation: o,
      $externalResults: a,
      currentVueInstance: l
    } = r;
    const u = l || ((n = ds()) === null || n === void 0 ? void 0 : n.proxy), f = u ? u.$options : {};
    s || (eu += 1, s = `_vuelidate_${eu}`);
    const d = Ze({}), m = new ag(), {
      childResults: $,
      sendValidationResultsToParent: E,
      removeValidationResultsFromParent: O
    } = u ? lg({
      $scope: i,
      instance: u
    }) : {
      childResults: Ze({})
    };
    if (!e && f.validations) {
      const M = f.validations;
      t = Ze({}), Gu(() => {
        t.value = u, It(() => Zs(M) ? M.call(t.value, new Kc(t.value)) : M, (P) => {
          d.value = Co({
            validations: P,
            state: t,
            childResults: $,
            resultsCache: m,
            globalConfig: r,
            instance: u,
            externalResults: a || u.vuelidateExternalResults
          });
        }, {
          immediate: !0
        });
      }), r = f.validationsConfig || r;
    } else {
      const M = xe(e) || G_(e) ? e : Dr(e || {});
      It(M, (P) => {
        d.value = Co({
          validations: P,
          state: t,
          childResults: $,
          resultsCache: m,
          globalConfig: r,
          instance: u != null ? u : {},
          externalResults: a
        });
      }, {
        immediate: !0
      });
    }
    return u && (E.forEach((M) => M(d, {
      $registerAs: s,
      $scope: i,
      $stopPropagation: o
    })), ta(() => O.forEach((M) => M(s)))), ye(() => Object.assign({}, he(d.value), $.value));
  }
  const ga = (e) => {
    if (e = he(e), Array.isArray(e))
      return !!e.length;
    if (e == null)
      return !1;
    if (e === !1)
      return !0;
    if (e instanceof Date)
      return !isNaN(e.getTime());
    if (typeof e == "object") {
      for (let t in e)
        return !0;
      return !1;
    }
    return !!String(e).length;
  };
  function rr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (r) => (r = he(r), !ga(r) || t.every((s) => s.test(r)));
  }
  rr(/^[a-zA-Z]*$/);
  rr(/^[a-zA-Z0-9]*$/);
  rr(/^\d*(\.\d+)?$/);
  const ug = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  rr(ug);
  function cg(e) {
    return typeof e == "string" && (e = e.trim()), ga(e);
  }
  var Pe = {
    $validator: cg,
    $message: "Value is required",
    $params: {
      type: "required"
    }
  };
  const dg = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  rr(dg);
  function fg(e) {
    return (t) => !ga(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +he(e);
  }
  function mg(e) {
    return {
      $validator: fg(e),
      $message: (t) => {
        let {
          $params: n
        } = t;
        return `The minimum value allowed is ${n.min}`;
      },
      $params: {
        min: e,
        type: "minValue"
      }
    };
  }
  var hg = rr(/(^[0-9]*$)|(^-[0-9]+$)/), fn = {
    $validator: hg,
    $message: "Value is not an integer",
    $params: {
      type: "integer"
    }
  }, pg = rr(/^[-]?\d*(\.\d+)?$/), rs = {
    $validator: pg,
    $message: "Value must be decimal",
    $params: {
      type: "decimal"
    }
  };
  const Ue = {
    data() {
      return {
        _id: Math.random()
      };
    },
    watch: {
      values: {
        handler(e) {
          const t = this.$parent, n = this.$parent.$parent.$parent;
          typeof n.$data.validation[t.group.id] > "u" && (n.$data.validation[t.group.id] = {}), n.$data.validation[t.group.id][this._id] = this.v$.$invalid;
        },
        deep: !0
      }
    },
    beforeUnmount() {
      const e = this.$parent, t = this.$parent.$parent.$parent;
      typeof t.$data.validation[e.group.id] < "u" && typeof t.$data.validation[e.group.id][this._id] < "u" && (t.$data.validation[e.group.id][this._id] = !1);
    }
  }, _g = {
    name: "MinRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          min: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            decimal: rs
          }
        }
      };
    },
    methods: {
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
      }
    }
  }, gg = { class: "rule-min-row" }, vg = { for: "min" }, yg = ["disabled", "value"], Eg = {
    key: 0,
    class: "error"
  };
  function $g(e, t, n, r, s, i) {
    return g(), v("div", gg, [
      _("label", vg, D(e.$t("min.min")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "min",
        type: "text",
        value: s.values.min,
        onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
      }, null, 40, yg),
      r.v$.values.min.$invalid ? (g(), v("p", Eg, [
        r.v$.values.min.decimal.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.decimal")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const bg = /* @__PURE__ */ ce(_g, [["render", $g]]), Og = {
    name: "MaxRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          max: {
            required: Pe,
            decimal: rs
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
      }
    }
  }, Ng = { class: "rule-max-row" }, Dg = { for: "max" }, wg = ["disabled", "value"], Tg = {
    key: 0,
    class: "error"
  };
  function kg(e, t, n, r, s, i) {
    return g(), v("div", Ng, [
      _("label", Dg, D(e.$t("max.max")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "max",
        type: "text",
        value: s.values.max,
        onInput: t[0] || (t[0] = (o) => i.setMax(o.target.value))
      }, null, 40, wg),
      r.v$.values.max.$invalid ? (g(), v("p", Tg, [
        r.v$.values.max.decimal.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.decimal")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const Mg = /* @__PURE__ */ ce(Og, [["render", kg]]), Sg = {
    name: "MinCountRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          min: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            integer: fn
          }
        }
      };
    },
    methods: {
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
      }
    }
  }, Ig = { class: "rule-min-count-row" }, xg = { for: "minCount" }, Rg = ["disabled", "value"], Cg = {
    key: 0,
    class: "error"
  };
  function Lg(e, t, n, r, s, i) {
    return g(), v("div", Ig, [
      _("label", xg, D(e.$t("minCount.min")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "minCount",
        type: "text",
        value: s.values.min,
        onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
      }, null, 40, Rg),
      r.v$.values.min.$invalid ? (g(), v("p", Cg, [
        r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const Vg = /* @__PURE__ */ ce(Sg, [["render", Lg]]), Pg = {
    name: "MaxCountRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          max: {
            required: Pe,
            integer: fn
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
      }
    }
  }, Ag = { class: "rule-max-count-row" }, Fg = { for: "max" }, zg = ["disabled", "value"], Yg = {
    key: 0,
    class: "error"
  };
  function Ug(e, t, n, r, s, i) {
    return g(), v("div", Ag, [
      _("label", Fg, D(e.$t("maxCount.max")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "max",
        type: "text",
        value: s.values.max,
        onInput: t[0] || (t[0] = (o) => i.setMax(o.target.value))
      }, null, 40, zg),
      r.v$.values.max.$invalid ? (g(), v("p", Yg, [
        r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const jg = /* @__PURE__ */ ce(Pg, [["render", Ug]]), va = (e) => function(t, n, r) {
    return Number(t) >= Number(n[e]);
  }, ya = (e) => function(t, n, r) {
    return Number(t) <= Number(n[e]);
  }, Wg = {
    name: "BetweenCountRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          min: 0,
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            integer: fn,
            mustBeLessOrEqual: ya("max")
          },
          max: {
            required: Pe,
            integer: fn,
            mustBeGreaterOrEqual: va("min")
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      }
    }
  }, Hg = { class: "rule-min-count-row" }, Bg = { for: "minBetweenCount" }, qg = ["disabled", "value"], Gg = {
    key: 0,
    class: "error"
  }, Kg = { class: "rule-max-count-row" }, Xg = { for: "maxBetweenCount" }, Zg = ["disabled", "value"], Jg = {
    key: 0,
    class: "error"
  };
  function Qg(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", Hg, [
        _("label", Bg, D(e.$t("betweenCount.min")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "minBetweenCount",
          type: "text",
          value: s.values.min,
          onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
        }, null, 40, qg),
        r.v$.values.min.$invalid ? (g(), v("p", Gg, [
          r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.integer")), 1)
          ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", Kg, [
        _("label", Xg, D(e.$t("betweenCount.max")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "maxBetweenCount",
          type: "text",
          value: s.values.max,
          onInput: t[1] || (t[1] = (o) => i.setMax(o.target.value))
        }, null, 40, Zg),
        r.v$.values.max.$invalid ? (g(), v("p", Jg, [
          r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.integer")), 1)
          ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ])
    ], 64);
  }
  const ev = /* @__PURE__ */ ce(Wg, [["render", Qg]]), tv = {
    name: "BetweenRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({
          min: 0,
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            decimal: rs,
            mustBeLessOrEqual: ya("max")
          },
          max: {
            required: Pe,
            decimal: rs,
            mustBeGreaterOrEqual: va("min")
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      }
    }
  }, nv = { class: "rule-min-count-row" }, rv = { for: "minBetween" }, sv = ["disabled", "value"], iv = {
    key: 0,
    class: "error"
  }, ov = { class: "rule-max-count-row" }, av = { for: "maxBetween" }, lv = ["disabled", "value"], uv = {
    key: 0,
    class: "error"
  };
  function cv(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", nv, [
        _("label", rv, D(e.$t("between.min")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "minBetween",
          type: "text",
          value: s.values.min,
          onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
        }, null, 40, sv),
        r.v$.values.min.$invalid ? (g(), v("p", iv, [
          r.v$.values.min.decimal.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.decimal")), 1)
          ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.decimal.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", ov, [
        _("label", av, D(e.$t("between.max")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "maxBetween",
          type: "text",
          value: s.values.max,
          onInput: t[1] || (t[1] = (o) => i.setMax(o.target.value))
        }, null, 40, lv),
        r.v$.values.max.$invalid ? (g(), v("p", uv, [
          r.v$.values.max.decimal.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.decimal")), 1)
          ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.decimal.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ])
    ], 64);
  }
  const dv = /* @__PURE__ */ ce(tv, [["render", cv]]), fv = {
    name: "MinLengthRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          min: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            integer: fn
          }
        }
      };
    },
    methods: {
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
      }
    }
  }, mv = { class: "rule-min-count-row" }, hv = { for: "minLength" }, pv = ["disabled", "value"], _v = {
    key: 0,
    class: "error"
  };
  function gv(e, t, n, r, s, i) {
    return g(), v("div", mv, [
      _("label", hv, D(e.$t("minLength.min")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "minLength",
        type: "text",
        value: s.values.min,
        onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
      }, null, 40, pv),
      r.v$.values.min.$invalid ? (g(), v("p", _v, [
        r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const vv = /* @__PURE__ */ ce(fv, [["render", gv]]), yv = {
    name: "MaxLengthRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          max: {
            required: Pe,
            integer: fn
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
      }
    }
  }, Ev = { class: "rule-max-count-row" }, $v = { for: "maxLength" }, bv = ["disabled", "value"], Ov = {
    key: 0,
    class: "error"
  };
  function Nv(e, t, n, r, s, i) {
    return g(), v("div", Ev, [
      _("label", $v, D(e.$t("maxLength.max")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "maxLength",
        type: "text",
        value: s.values.max,
        onInput: t[0] || (t[0] = (o) => i.setMax(o.target.value))
      }, null, 40, bv),
      r.v$.values.max.$invalid ? (g(), v("p", Ov, [
        r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const Dv = /* @__PURE__ */ ce(yv, [["render", Nv]]), wv = {
    name: "BetweenLengthRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          min: 0,
          max: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          min: {
            required: Pe,
            integer: fn,
            mustBeLessOrEqual: ya("max")
          },
          max: {
            required: Pe,
            integer: fn,
            mustBeGreaterOrEqual: va("min")
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.max = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMin(e) {
        this.values.min = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      }
    }
  }, Tv = { class: "rule-min-count-row" }, kv = { for: "minBetweenLength" }, Mv = ["disabled", "value"], Sv = {
    key: 0,
    class: "error"
  }, Iv = { class: "rule-max-count-row" }, xv = { for: "maxBetweenLength" }, Rv = ["disabled", "value"], Cv = {
    key: 0,
    class: "error"
  };
  function Lv(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", Tv, [
        _("label", kv, D(e.$t("betweenLength.min")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "minBetweenLength",
          type: "text",
          value: s.values.min,
          onInput: t[0] || (t[0] = (o) => i.setMin(o.target.value))
        }, null, 40, Mv),
        r.v$.values.min.$invalid ? (g(), v("p", Sv, [
          r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.integer")), 1)
          ], 64)) : r.v$.values.min.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", Iv, [
        _("label", xv, D(e.$t("betweenLength.max")), 1),
        _("input", {
          disabled: !e.$root.canEdit(),
          id: "maxBetweenLength",
          type: "text",
          value: s.values.max,
          onInput: t[1] || (t[1] = (o) => i.setMax(o.target.value))
        }, null, 40, Rv),
        r.v$.values.max.$invalid ? (g(), v("p", Cv, [
          r.v$.values.max.integer.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.integer")), 1)
          ], 64)) : r.v$.values.max.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.integer.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ])
    ], 64);
  }
  const Vv = /* @__PURE__ */ ce(wv, [["render", Lv]]), Pv = {
    name: "AlphaNumericRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function Av(e, t, n, r, s, i) {
    return null;
  }
  const Fv = /* @__PURE__ */ ce(Pv, [["render", Av]]), zv = {
    name: "AlphaRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function Yv(e, t, n, r, s, i) {
    return null;
  }
  const Uv = /* @__PURE__ */ ce(zv, [["render", Yv]]), jv = {
    name: "BooleanRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function Wv(e, t, n, r, s, i) {
    return null;
  }
  const Hv = /* @__PURE__ */ ce(jv, [["render", Wv]]), Bv = {
    name: "IntegerRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function qv(e, t, n, r, s, i) {
    return null;
  }
  const Gv = /* @__PURE__ */ ce(Bv, [["render", qv]]), Kv = {
    name: "NumericRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function Xv(e, t, n, r, s, i) {
    return null;
  }
  const Zv = /* @__PURE__ */ ce(Kv, [["render", Xv]]), Jv = {
    name: "EmailRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function Qv(e, t, n, r, s, i) {
    return null;
  }
  const ey = /* @__PURE__ */ ce(Jv, [["render", Qv]]), ty = {
    name: "DateRule",
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          format: null
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    methods: {
      setFormat(e) {
        this.values.format = e, this.$emit("updateOptions", this.values);
      }
    }
  }, ny = { class: "rule-date-row" }, ry = { for: "format" }, sy = ["disabled", "value"];
  function iy(e, t, n, r, s, i) {
    return g(), v("div", ny, [
      _("label", ry, D(e.$t("date.format")), 1),
      _("input", {
        placeholder: "d.m.Y H:i:s",
        disabled: !e.$root.canEdit(),
        id: "format",
        type: "text",
        value: s.values.format,
        onInput: t[0] || (t[0] = (o) => i.setFormat(o.target.value))
      }, null, 40, sy)
    ]);
  }
  const oy = /* @__PURE__ */ ce(ty, [["render", iy]]), ay = {
    name: "JsonRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function ly(e, t, n, r, s, i) {
    return null;
  }
  const uy = /* @__PURE__ */ ce(ay, [["render", ly]]), cy = {
    name: "RegexRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          regex: ""
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          regex: {
            required: Pe
          }
        }
      };
    },
    methods: {
      setRegex(e) {
        this.values.regex = e, this.v$.$touch(), this.v$.values.regex.$error || this.$emit("updateOptions", { regex: e });
      }
    }
  }, dy = { class: "rule-regex-row" }, fy = { for: "regex" }, my = ["disabled", "value"], hy = {
    key: 0,
    class: "error"
  };
  function py(e, t, n, r, s, i) {
    return g(), v("div", dy, [
      _("label", fy, D(e.$t("regex.regex")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "regex",
        type: "text",
        value: s.values.regex,
        onInput: t[0] || (t[0] = (o) => i.setRegex(o.target.value))
      }, null, 40, my),
      r.v$.values.regex.$invalid && r.v$.values.regex.$dirty ? (g(), v("p", hy, [
        r.v$.values.regex.required.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const _y = /* @__PURE__ */ ce(cy, [["render", py]]), gy = {
    name: "UniqueRule",
    props: {
      options: Object
    },
    emits: ["updateOptions"],
    data() {
      return {
        values: Object.assign({}, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    }
  };
  function vy(e, t, n, r, s, i) {
    return null;
  }
  const yy = /* @__PURE__ */ ce(gy, [["render", vy]]), Oi = function(e) {
    let t = !0;
    return e.forEach((n) => {
      t = t && Boolean(n.value);
    }), t;
  }, Ey = {
    name: "InRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      let e = [];
      return typeof this.options.in < "u" ? this.options.in.forEach((t) => {
        e.push({
          value: t
        });
      }) : e.push({
        value: ""
      }), {
        values: {
          in: e
        }
      };
    },
    mounted() {
      let e = [];
      this.values.in.forEach((t) => {
        e.push(t.value);
      }), this.$emit("updateOptions", { in: e });
    },
    validations() {
      return {
        values: {
          in: {
            multipleRequired: Oi
          }
        }
      };
    },
    methods: {
      addItem() {
        this.values.in.push({
          value: ""
        });
      },
      deleteItem(e) {
        this.values.in.length > 1 && this.values.in.splice(e, 1);
      }
    },
    watch: {
      values: {
        handler() {
          if (this.v$.$touch(), !this.v$.$error) {
            let e = [];
            this.values.in.forEach((t) => {
              e.push(t.value);
            }), this.$emit("updateOptions", { in: e });
          }
        },
        deep: !0
      }
    }
  }, $y = { class: "rule-in-row" }, by = { for: "in" }, Oy = { class: "rule-in" }, Ny = ["disabled", "onUpdate:modelValue"], Dy = ["onClick"], wy = {
    key: 0,
    class: "error"
  }, Ty = ["title", "value"];
  function ky(e, t, n, r, s, i) {
    return g(), v("div", $y, [
      _("label", by, D(e.$t("in.in")), 1),
      (g(!0), v(C, null, _t(r.v$.values.in.$model, (o, a) => (g(), v("div", Oy, [
        ln((g(), v("input", {
          disabled: !e.$root.canEdit(),
          class: "value",
          type: "text",
          "onUpdate:modelValue": (l) => o.value = l,
          key: a
        }, null, 8, Ny)), [
          [
            Or,
            o.value,
            void 0,
            { trim: !0 }
          ]
        ]),
        s.values.in.length > 1 && e.$root.canEdit() ? (g(), v("input", {
          key: 0,
          class: "delete",
          onClick: Ce((l) => i.deleteItem(a), ["prevent"]),
          type: "button",
          title: "X",
          value: "X"
        }, null, 8, Dy)) : z("", !0)
      ]))), 256)),
      r.v$.values.in.multipleRequired.$invalid && r.v$.values.$dirty ? (g(), v("p", wy, [
        r.v$.values.in.multipleRequired.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0),
      e.$root.canEdit() ? (g(), v("input", {
        key: 1,
        onClick: t[0] || (t[0] = Ce((o) => i.addItem(), ["prevent"])),
        type: "button",
        title: e.$t("edit.add"),
        value: e.$t("edit.add")
      }, null, 8, Ty)) : z("", !0)
    ]);
  }
  const My = /* @__PURE__ */ ce(Ey, [["render", ky]]), Sy = {
    name: "NotInRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      let e = [];
      return typeof this.options.notIn < "u" ? this.options.notIn.forEach((t) => {
        e.push({
          value: t
        });
      }) : e.push({
        value: ""
      }), {
        values: {
          notIn: e
        }
      };
    },
    mounted() {
      let e = [];
      this.values.notIn.forEach((t) => {
        e.push(t.value);
      }), this.$emit("updateOptions", { notIn: e });
    },
    validations() {
      return {
        values: {
          notIn: {
            multipleRequired: Oi
          }
        }
      };
    },
    methods: {
      addItem() {
        this.values.notIn.push({
          value: ""
        });
      },
      deleteItem(e) {
        this.values.notIn.length > 1 && this.values.notIn.splice(e, 1);
      }
    },
    watch: {
      values: {
        handler() {
          if (this.v$.$touch(), !this.v$.$error) {
            let e = [];
            this.values.notIn.forEach((t) => {
              e.push(t.value);
            }), this.$emit("updateOptions", { notIn: e });
          }
        },
        deep: !0
      }
    }
  }, Iy = { class: "rule-not-in-row" }, xy = { class: "rule-not-in" }, Ry = ["disabled", "onUpdate:modelValue"], Cy = ["onClick"], Ly = {
    key: 0,
    class: "error"
  }, Vy = ["title", "value"];
  function Py(e, t, n, r, s, i) {
    return g(), v("div", Iy, [
      _("label", null, D(e.$t("notIn.notIn")), 1),
      (g(!0), v(C, null, _t(r.v$.values.notIn.$model, (o, a) => (g(), v("div", xy, [
        ln((g(), v("input", {
          disabled: !e.$root.canEdit(),
          class: "value",
          type: "text",
          "onUpdate:modelValue": (l) => o.value = l,
          key: a
        }, null, 8, Ry)), [
          [
            Or,
            o.value,
            void 0,
            { trim: !0 }
          ]
        ]),
        s.values.notIn.length > 1 && e.$root.canEdit() ? (g(), v("input", {
          key: 0,
          class: "delete",
          onClick: Ce((l) => i.deleteItem(a), ["prevent"]),
          type: "button",
          title: "X",
          value: "X"
        }, null, 8, Cy)) : z("", !0)
      ]))), 256)),
      r.v$.values.notIn.multipleRequired.$invalid && r.v$.values.$dirty ? (g(), v("p", Ly, [
        r.v$.values.notIn.multipleRequired.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0),
      e.$root.canEdit() ? (g(), v("input", {
        key: 1,
        onClick: t[0] || (t[0] = Ce((o) => i.addItem(), ["prevent"])),
        type: "button",
        title: e.$t("edit.add"),
        value: e.$t("edit.add")
      }, null, 8, Vy)) : z("", !0)
    ]);
  }
  const Ay = /* @__PURE__ */ ce(Sy, [["render", Py]]), Fy = {
    name: "StrictInRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      let e = [];
      return typeof this.options.in < "u" ? this.options.in.forEach((t) => {
        e.push({
          value: t
        });
      }) : e.push({
        value: ""
      }), {
        values: {
          in: e
        }
      };
    },
    mounted() {
      let e = [];
      this.values.in.forEach((t) => {
        e.push(t.value);
      }), this.$emit("updateOptions", { in: e });
    },
    validations() {
      return {
        values: {
          in: {
            multipleRequired: Oi
          }
        }
      };
    },
    methods: {
      addItem() {
        this.values.in.push({
          value: ""
        });
      },
      deleteItem(e) {
        this.values.in.length > 1 && this.values.in.splice(e, 1);
      }
    },
    watch: {
      values: {
        handler() {
          if (this.v$.$touch(), !this.v$.$error) {
            let e = [];
            this.values.in.forEach((t) => {
              e.push(t.value);
            }), this.$emit("updateOptions", { in: e });
          }
        },
        deep: !0
      }
    }
  }, zy = { class: "rule-in-row" }, Yy = { class: "rule-in" }, Uy = ["disabled", "onUpdate:modelValue"], jy = ["onClick"], Wy = {
    key: 0,
    class: "error"
  }, Hy = ["title", "value"];
  function By(e, t, n, r, s, i) {
    return g(), v("div", zy, [
      _("label", null, D(e.$t("strictIn.in")), 1),
      (g(!0), v(C, null, _t(r.v$.values.in.$model, (o, a) => (g(), v("div", Yy, [
        ln((g(), v("input", {
          disabled: !e.$root.canEdit(),
          class: "value",
          type: "text",
          "onUpdate:modelValue": (l) => o.value = l,
          key: a
        }, null, 8, Uy)), [
          [
            Or,
            o.value,
            void 0,
            { trim: !0 }
          ]
        ]),
        s.values.in.length > 1 && e.$root.canEdit() ? (g(), v("input", {
          key: 0,
          class: "delete",
          onClick: Ce((l) => i.deleteItem(a), ["prevent"]),
          type: "button",
          title: "X",
          value: "X"
        }, null, 8, jy)) : z("", !0)
      ]))), 256)),
      r.v$.values.in.multipleRequired.$invalid && r.v$.values.$dirty ? (g(), v("p", Wy, [
        r.v$.values.in.multipleRequired.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0),
      e.$root.canEdit() ? (g(), v("input", {
        key: 1,
        onClick: t[0] || (t[0] = Ce((o) => i.addItem(), ["prevent"])),
        type: "button",
        title: e.$t("edit.add"),
        value: e.$t("edit.add")
      }, null, 8, Hy)) : z("", !0)
    ]);
  }
  const qy = /* @__PURE__ */ ce(Fy, [["render", By]]), Gy = {
    name: "StrictNotInRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      let e = [];
      return typeof this.options.notIn < "u" ? this.options.notIn.forEach((t) => {
        e.push({
          value: t
        });
      }) : e.push({
        value: ""
      }), {
        values: {
          notIn: e
        }
      };
    },
    mounted() {
      let e = [];
      this.values.notIn.forEach((t) => {
        e.push(t.value);
      }), this.$emit("updateOptions", { notIn: e });
    },
    validations() {
      return {
        values: {
          notIn: {
            multipleRequired: Oi
          }
        }
      };
    },
    methods: {
      addItem() {
        this.values.notIn.push({
          value: ""
        });
      },
      deleteItem(e) {
        this.values.notIn.length > 1 && this.values.notIn.splice(e, 1);
      }
    },
    watch: {
      values: {
        handler() {
          if (this.v$.$touch(), !this.v$.$error) {
            let e = [];
            this.values.notIn.forEach((t) => {
              e.push(t.value);
            }), this.$emit("updateOptions", { notIn: e });
          }
        },
        deep: !0
      }
    }
  }, Ky = { class: "rule-not-in-row" }, Xy = { class: "rule-not-in" }, Zy = ["disabled", "onUpdate:modelValue"], Jy = ["onClick"], Qy = {
    key: 0,
    class: "error"
  }, eE = ["title", "value"];
  function tE(e, t, n, r, s, i) {
    return g(), v("div", Ky, [
      _("label", null, D(e.$t("strictNotIn.notIn")), 1),
      (g(!0), v(C, null, _t(r.v$.values.notIn.$model, (o, a) => (g(), v("div", Xy, [
        ln((g(), v("input", {
          disabled: !e.$root.canEdit(),
          class: "value",
          type: "text",
          "onUpdate:modelValue": (l) => o.value = l,
          key: a
        }, null, 8, Zy)), [
          [
            Or,
            o.value,
            void 0,
            { trim: !0 }
          ]
        ]),
        s.values.notIn.length > 1 && e.$root.canEdit() ? (g(), v("input", {
          key: 0,
          class: "delete",
          onClick: Ce((l) => i.deleteItem(a), ["prevent"]),
          type: "button",
          title: "X",
          value: "X"
        }, null, 8, Jy)) : z("", !0)
      ]))), 256)),
      r.v$.values.notIn.multipleRequired.$invalid && r.v$.values.$dirty ? (g(), v("p", Qy, [
        r.v$.values.notIn.multipleRequired.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0),
      e.$root.canEdit() ? (g(), v("input", {
        key: 1,
        onClick: t[0] || (t[0] = Ce((o) => i.addItem(), ["prevent"])),
        type: "button",
        title: e.$t("edit.add"),
        value: e.$t("edit.add")
      }, null, 8, eE)) : z("", !0)
    ]);
  }
  const nE = /* @__PURE__ */ ce(Gy, [["render", tE]]);
  //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var Xc;
  function A() {
    return Xc.apply(null, arguments);
  }
  function rE(e) {
    Xc = e;
  }
  function xt(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function Kn(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function pe(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Ea(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
      if (pe(e, t))
        return !1;
    return !0;
  }
  function dt(e) {
    return e === void 0;
  }
  function mn(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function fs(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function Zc(e, t) {
    var n = [], r, s = e.length;
    for (r = 0; r < s; ++r)
      n.push(t(e[r], r));
    return n;
  }
  function On(e, t) {
    for (var n in t)
      pe(t, n) && (e[n] = t[n]);
    return pe(t, "toString") && (e.toString = t.toString), pe(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }
  function Kt(e, t, n, r) {
    return $d(e, t, n, r, !0).utc();
  }
  function sE() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    };
  }
  function ne(e) {
    return e._pf == null && (e._pf = sE()), e._pf;
  }
  var Lo;
  Array.prototype.some ? Lo = Array.prototype.some : Lo = function(e) {
    var t = Object(this), n = t.length >>> 0, r;
    for (r = 0; r < n; r++)
      if (r in t && e.call(this, t[r], r, t))
        return !0;
    return !1;
  };
  function $a(e) {
    if (e._isValid == null) {
      var t = ne(e), n = Lo.call(t.parsedDateParts, function(s) {
        return s != null;
      }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = r;
      else
        return r;
    }
    return e._isValid;
  }
  function Ni(e) {
    var t = Kt(NaN);
    return e != null ? On(ne(t), e) : ne(t).userInvalidated = !0, t;
  }
  var tu = A.momentProperties = [], Ki = !1;
  function ba(e, t) {
    var n, r, s, i = tu.length;
    if (dt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), dt(t._i) || (e._i = t._i), dt(t._f) || (e._f = t._f), dt(t._l) || (e._l = t._l), dt(t._strict) || (e._strict = t._strict), dt(t._tzm) || (e._tzm = t._tzm), dt(t._isUTC) || (e._isUTC = t._isUTC), dt(t._offset) || (e._offset = t._offset), dt(t._pf) || (e._pf = ne(t)), dt(t._locale) || (e._locale = t._locale), i > 0)
      for (n = 0; n < i; n++)
        r = tu[n], s = t[r], dt(s) || (e[r] = s);
    return e;
  }
  function ms(e) {
    ba(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Ki === !1 && (Ki = !0, A.updateOffset(this), Ki = !1);
  }
  function Rt(e) {
    return e instanceof ms || e != null && e._isAMomentObject != null;
  }
  function Jc(e) {
    A.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
  }
  function Nt(e, t) {
    var n = !0;
    return On(function() {
      if (A.deprecationHandler != null && A.deprecationHandler(null, e), n) {
        var r = [], s, i, o, a = arguments.length;
        for (i = 0; i < a; i++) {
          if (s = "", typeof arguments[i] == "object") {
            s += `
[` + i + "] ";
            for (o in arguments[0])
              pe(arguments[0], o) && (s += o + ": " + arguments[0][o] + ", ");
            s = s.slice(0, -2);
          } else
            s = arguments[i];
          r.push(s);
        }
        Jc(
          e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
        ), n = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var nu = {};
  function Qc(e, t) {
    A.deprecationHandler != null && A.deprecationHandler(e, t), nu[e] || (Jc(t), nu[e] = !0);
  }
  A.suppressDeprecationWarnings = !1;
  A.deprecationHandler = null;
  function Xt(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function iE(e) {
    var t, n;
    for (n in e)
      pe(e, n) && (t = e[n], Xt(t) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function Vo(e, t) {
    var n = On({}, e), r;
    for (r in t)
      pe(t, r) && (Kn(e[r]) && Kn(t[r]) ? (n[r] = {}, On(n[r], e[r]), On(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e)
      pe(e, r) && !pe(t, r) && Kn(e[r]) && (n[r] = On({}, n[r]));
    return n;
  }
  function Oa(e) {
    e != null && this.set(e);
  }
  var Po;
  Object.keys ? Po = Object.keys : Po = function(e) {
    var t, n = [];
    for (t in e)
      pe(e, t) && n.push(t);
    return n;
  };
  var oE = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function aE(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return Xt(r) ? r.call(t, n) : r;
  }
  function qt(e, t, n) {
    var r = "" + Math.abs(e), s = t - r.length, i = e >= 0;
    return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Na = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ds = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Xi = {}, yr = {};
  function K(e, t, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), e && (yr[e] = s), t && (yr[t[0]] = function() {
      return qt(s.apply(this, arguments), t[1], t[2]);
    }), n && (yr[n] = function() {
      return this.localeData().ordinal(
        s.apply(this, arguments),
        e
      );
    });
  }
  function lE(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function uE(e) {
    var t = e.match(Na), n, r;
    for (n = 0, r = t.length; n < r; n++)
      yr[t[n]] ? t[n] = yr[t[n]] : t[n] = lE(t[n]);
    return function(s) {
      var i = "", o;
      for (o = 0; o < r; o++)
        i += Xt(t[o]) ? t[o].call(s, e) : t[o];
      return i;
    };
  }
  function Ls(e, t) {
    return e.isValid() ? (t = ed(t, e.localeData()), Xi[t] = Xi[t] || uE(t), Xi[t](e)) : e.localeData().invalidDate();
  }
  function ed(e, t) {
    var n = 5;
    function r(s) {
      return t.longDateFormat(s) || s;
    }
    for (Ds.lastIndex = 0; n >= 0 && Ds.test(e); )
      e = e.replace(
        Ds,
        r
      ), Ds.lastIndex = 0, n -= 1;
    return e;
  }
  var cE = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function dE(e) {
    var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(Na).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[e]);
  }
  var fE = "Invalid date";
  function mE() {
    return this._invalidDate;
  }
  var hE = "%d", pE = /\d{1,2}/;
  function _E(e) {
    return this._ordinal.replace("%d", e);
  }
  var gE = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function vE(e, t, n, r) {
    var s = this._relativeTime[n];
    return Xt(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
  }
  function yE(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return Xt(n) ? n(t) : n.replace(/%s/i, t);
  }
  var jr = {};
  function et(e, t) {
    var n = e.toLowerCase();
    jr[n] = jr[n + "s"] = jr[t] = e;
  }
  function Dt(e) {
    return typeof e == "string" ? jr[e] || jr[e.toLowerCase()] : void 0;
  }
  function Da(e) {
    var t = {}, n, r;
    for (r in e)
      pe(e, r) && (n = Dt(r), n && (t[n] = e[r]));
    return t;
  }
  var td = {};
  function tt(e, t) {
    td[e] = t;
  }
  function EE(e) {
    var t = [], n;
    for (n in e)
      pe(e, n) && t.push({ unit: n, priority: td[n] });
    return t.sort(function(r, s) {
      return r.priority - s.priority;
    }), t;
  }
  function Di(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  function bt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function ae(e) {
    var t = +e, n = 0;
    return t !== 0 && isFinite(t) && (n = bt(t)), n;
  }
  function kr(e, t) {
    return function(n) {
      return n != null ? (nd(this, e, n), A.updateOffset(this, t), this) : Js(this, e);
    };
  }
  function Js(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function nd(e, t, n) {
    e.isValid() && !isNaN(n) && (t === "FullYear" && Di(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ae(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
      n,
      e.month(),
      Ii(n, e.month())
    )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function $E(e) {
    return e = Dt(e), Xt(this[e]) ? this[e]() : this;
  }
  function bE(e, t) {
    if (typeof e == "object") {
      e = Da(e);
      var n = EE(e), r, s = n.length;
      for (r = 0; r < s; r++)
        this[n[r].unit](e[n[r].unit]);
    } else if (e = Dt(e), Xt(this[e]))
      return this[e](t);
    return this;
  }
  var rd = /\d/, yt = /\d\d/, sd = /\d{3}/, wa = /\d{4}/, wi = /[+-]?\d{6}/, ke = /\d\d?/, id = /\d\d\d\d?/, od = /\d\d\d\d\d\d?/, Ti = /\d{1,3}/, Ta = /\d{1,4}/, ki = /[+-]?\d{1,6}/, Mr = /\d+/, Mi = /[+-]?\d+/, OE = /Z|[+-]\d\d:?\d\d/gi, Si = /Z|[+-]\d\d(?::?\d\d)?/gi, NE = /[+-]?\d+(\.\d{1,3})?/, hs = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Qs;
  Qs = {};
  function j(e, t, n) {
    Qs[e] = Xt(t) ? t : function(r, s) {
      return r && n ? n : t;
    };
  }
  function DE(e, t) {
    return pe(Qs, e) ? Qs[e](t._strict, t._locale) : new RegExp(wE(e));
  }
  function wE(e) {
    return pt(
      e.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(t, n, r, s, i) {
          return n || r || s || i;
        }
      )
    );
  }
  function pt(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var Ao = {};
  function Ne(e, t) {
    var n, r = t, s;
    for (typeof e == "string" && (e = [e]), mn(t) && (r = function(i, o) {
      o[t] = ae(i);
    }), s = e.length, n = 0; n < s; n++)
      Ao[e[n]] = r;
  }
  function ps(e, t) {
    Ne(e, function(n, r, s, i) {
      s._w = s._w || {}, t(n, s._w, s, i);
    });
  }
  function TE(e, t, n) {
    t != null && pe(Ao, e) && Ao[e](t, n._a, n, e);
  }
  var Qe = 0, sn = 1, jt = 2, Ye = 3, St = 4, on = 5, Yn = 6, kE = 7, ME = 8;
  function SE(e, t) {
    return (e % t + t) % t;
  }
  var Re;
  Array.prototype.indexOf ? Re = Array.prototype.indexOf : Re = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e)
        return t;
    return -1;
  };
  function Ii(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var n = SE(t, 12);
    return e += (t - n) / 12, n === 1 ? Di(e) ? 29 : 28 : 31 - n % 7 % 2;
  }
  K("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  K("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e);
  });
  K("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e);
  });
  et("month", "M");
  tt("month", 8);
  j("M", ke);
  j("MM", ke, yt);
  j("MMM", function(e, t) {
    return t.monthsShortRegex(e);
  });
  j("MMMM", function(e, t) {
    return t.monthsRegex(e);
  });
  Ne(["M", "MM"], function(e, t) {
    t[sn] = ae(e) - 1;
  });
  Ne(["MMM", "MMMM"], function(e, t, n, r) {
    var s = n._locale.monthsParse(e, r, n._strict);
    s != null ? t[sn] = s : ne(n).invalidMonth = e;
  });
  var IE = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), ad = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ld = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, xE = hs, RE = hs;
  function CE(e, t) {
    return e ? xt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ld).test(t) ? "format" : "standalone"][e.month()] : xt(this._months) ? this._months : this._months.standalone;
  }
  function LE(e, t) {
    return e ? xt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ld.test(t) ? "format" : "standalone"][e.month()] : xt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function VE(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        i = Kt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
          i,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (s = Re.call(this._shortMonthsParse, o), s !== -1 ? s : null) : (s = Re.call(this._longMonthsParse, o), s !== -1 ? s : null) : t === "MMM" ? (s = Re.call(this._shortMonthsParse, o), s !== -1 ? s : (s = Re.call(this._longMonthsParse, o), s !== -1 ? s : null)) : (s = Re.call(this._longMonthsParse, o), s !== -1 ? s : (s = Re.call(this._shortMonthsParse, o), s !== -1 ? s : null));
  }
  function PE(e, t, n) {
    var r, s, i;
    if (this._monthsParseExact)
      return VE.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = Kt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
        "^" + this.months(s, "").replace(".", "") + "$",
        "i"
      ), this._shortMonthsParse[r] = new RegExp(
        "^" + this.monthsShort(s, "").replace(".", "") + "$",
        "i"
      )), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
        return r;
      if (!n && this._monthsParse[r].test(e))
        return r;
    }
  }
  function ud(e, t) {
    var n;
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = ae(t);
      else if (t = e.localeData().monthsParse(t), !mn(t))
        return e;
    }
    return n = Math.min(e.date(), Ii(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }
  function cd(e) {
    return e != null ? (ud(this, e), A.updateOffset(this, !0), this) : Js(this, "Month");
  }
  function AE() {
    return Ii(this.year(), this.month());
  }
  function FE(e) {
    return this._monthsParseExact ? (pe(this, "_monthsRegex") || dd.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (pe(this, "_monthsShortRegex") || (this._monthsShortRegex = xE), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function zE(e) {
    return this._monthsParseExact ? (pe(this, "_monthsRegex") || dd.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (pe(this, "_monthsRegex") || (this._monthsRegex = RE), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function dd() {
    function e(o, a) {
      return a.length - o.length;
    }
    var t = [], n = [], r = [], s, i;
    for (s = 0; s < 12; s++)
      i = Kt([2e3, s]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
    for (t.sort(e), n.sort(e), r.sort(e), s = 0; s < 12; s++)
      t[s] = pt(t[s]), n[s] = pt(n[s]);
    for (s = 0; s < 24; s++)
      r[s] = pt(r[s]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._monthsShortStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  K("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? qt(e, 4) : "+" + e;
  });
  K(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  K(0, ["YYYY", 4], 0, "year");
  K(0, ["YYYYY", 5], 0, "year");
  K(0, ["YYYYYY", 6, !0], 0, "year");
  et("year", "y");
  tt("year", 1);
  j("Y", Mi);
  j("YY", ke, yt);
  j("YYYY", Ta, wa);
  j("YYYYY", ki, wi);
  j("YYYYYY", ki, wi);
  Ne(["YYYYY", "YYYYYY"], Qe);
  Ne("YYYY", function(e, t) {
    t[Qe] = e.length === 2 ? A.parseTwoDigitYear(e) : ae(e);
  });
  Ne("YY", function(e, t) {
    t[Qe] = A.parseTwoDigitYear(e);
  });
  Ne("Y", function(e, t) {
    t[Qe] = parseInt(e, 10);
  });
  function Wr(e) {
    return Di(e) ? 366 : 365;
  }
  A.parseTwoDigitYear = function(e) {
    return ae(e) + (ae(e) > 68 ? 1900 : 2e3);
  };
  var fd = kr("FullYear", !0);
  function YE() {
    return Di(this.year());
  }
  function UE(e, t, n, r, s, i, o) {
    var a;
    return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, s, i, o), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, s, i, o), a;
  }
  function ss(e) {
    var t, n;
    return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function ei(e, t, n) {
    var r = 7 + t - n, s = (7 + ss(e, 0, r).getUTCDay() - t) % 7;
    return -s + r - 1;
  }
  function md(e, t, n, r, s) {
    var i = (7 + n - r) % 7, o = ei(e, r, s), a = 1 + 7 * (t - 1) + i + o, l, u;
    return a <= 0 ? (l = e - 1, u = Wr(l) + a) : a > Wr(e) ? (l = e + 1, u = a - Wr(e)) : (l = e, u = a), {
      year: l,
      dayOfYear: u
    };
  }
  function is(e, t, n) {
    var r = ei(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, o;
    return s < 1 ? (o = e.year() - 1, i = s + un(o, t, n)) : s > un(e.year(), t, n) ? (i = s - un(e.year(), t, n), o = e.year() + 1) : (o = e.year(), i = s), {
      week: i,
      year: o
    };
  }
  function un(e, t, n) {
    var r = ei(e, t, n), s = ei(e + 1, t, n);
    return (Wr(e) - r + s) / 7;
  }
  K("w", ["ww", 2], "wo", "week");
  K("W", ["WW", 2], "Wo", "isoWeek");
  et("week", "w");
  et("isoWeek", "W");
  tt("week", 5);
  tt("isoWeek", 5);
  j("w", ke);
  j("ww", ke, yt);
  j("W", ke);
  j("WW", ke, yt);
  ps(
    ["w", "ww", "W", "WW"],
    function(e, t, n, r) {
      t[r.substr(0, 1)] = ae(e);
    }
  );
  function jE(e) {
    return is(e, this._week.dow, this._week.doy).week;
  }
  var WE = {
    dow: 0,
    doy: 6
  };
  function HE() {
    return this._week.dow;
  }
  function BE() {
    return this._week.doy;
  }
  function qE(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function GE(e) {
    var t = is(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  K("d", 0, "do", "day");
  K("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e);
  });
  K("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e);
  });
  K("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e);
  });
  K("e", 0, 0, "weekday");
  K("E", 0, 0, "isoWeekday");
  et("day", "d");
  et("weekday", "e");
  et("isoWeekday", "E");
  tt("day", 11);
  tt("weekday", 11);
  tt("isoWeekday", 11);
  j("d", ke);
  j("e", ke);
  j("E", ke);
  j("dd", function(e, t) {
    return t.weekdaysMinRegex(e);
  });
  j("ddd", function(e, t) {
    return t.weekdaysShortRegex(e);
  });
  j("dddd", function(e, t) {
    return t.weekdaysRegex(e);
  });
  ps(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var s = n._locale.weekdaysParse(e, r, n._strict);
    s != null ? t.d = s : ne(n).invalidWeekday = e;
  });
  ps(["d", "e", "E"], function(e, t, n, r) {
    t[r] = ae(e);
  });
  function KE(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function XE(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function ka(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var ZE = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), hd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), JE = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), QE = hs, e$ = hs, t$ = hs;
  function n$(e, t) {
    var n = xt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? ka(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function r$(e) {
    return e === !0 ? ka(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function s$(e) {
    return e === !0 ? ka(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function i$(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        i = Kt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
          i,
          ""
        ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
          i,
          ""
        ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (s = Re.call(this._weekdaysParse, o), s !== -1 ? s : null) : t === "ddd" ? (s = Re.call(this._shortWeekdaysParse, o), s !== -1 ? s : null) : (s = Re.call(this._minWeekdaysParse, o), s !== -1 ? s : null) : t === "dddd" ? (s = Re.call(this._weekdaysParse, o), s !== -1 || (s = Re.call(this._shortWeekdaysParse, o), s !== -1) ? s : (s = Re.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : t === "ddd" ? (s = Re.call(this._shortWeekdaysParse, o), s !== -1 || (s = Re.call(this._weekdaysParse, o), s !== -1) ? s : (s = Re.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : (s = Re.call(this._minWeekdaysParse, o), s !== -1 || (s = Re.call(this._weekdaysParse, o), s !== -1) ? s : (s = Re.call(this._shortWeekdaysParse, o), s !== -1 ? s : null));
  }
  function o$(e, t, n) {
    var r, s, i;
    if (this._weekdaysParseExact)
      return i$.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = Kt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
        "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._shortWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._minWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
        "i"
      )), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
        return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
        return r;
      if (!n && this._weekdaysParse[r].test(e))
        return r;
    }
  }
  function a$(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null ? (e = KE(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function l$(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function u$(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = XE(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function c$(e) {
    return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || Ma.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (pe(this, "_weekdaysRegex") || (this._weekdaysRegex = QE), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function d$(e) {
    return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || Ma.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (pe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = e$), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function f$(e) {
    return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || Ma.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (pe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = t$), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function Ma() {
    function e(f, d) {
      return d.length - f.length;
    }
    var t = [], n = [], r = [], s = [], i, o, a, l, u;
    for (i = 0; i < 7; i++)
      o = Kt([2e3, 1]).day(i), a = pt(this.weekdaysMin(o, "")), l = pt(this.weekdaysShort(o, "")), u = pt(this.weekdays(o, "")), t.push(a), n.push(l), r.push(u), s.push(a), s.push(l), s.push(u);
    t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    ), this._weekdaysShortStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._weekdaysMinStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function Sa() {
    return this.hours() % 12 || 12;
  }
  function m$() {
    return this.hours() || 24;
  }
  K("H", ["HH", 2], 0, "hour");
  K("h", ["hh", 2], 0, Sa);
  K("k", ["kk", 2], 0, m$);
  K("hmm", 0, 0, function() {
    return "" + Sa.apply(this) + qt(this.minutes(), 2);
  });
  K("hmmss", 0, 0, function() {
    return "" + Sa.apply(this) + qt(this.minutes(), 2) + qt(this.seconds(), 2);
  });
  K("Hmm", 0, 0, function() {
    return "" + this.hours() + qt(this.minutes(), 2);
  });
  K("Hmmss", 0, 0, function() {
    return "" + this.hours() + qt(this.minutes(), 2) + qt(this.seconds(), 2);
  });
  function pd(e, t) {
    K(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  pd("a", !0);
  pd("A", !1);
  et("hour", "h");
  tt("hour", 13);
  function _d(e, t) {
    return t._meridiemParse;
  }
  j("a", _d);
  j("A", _d);
  j("H", ke);
  j("h", ke);
  j("k", ke);
  j("HH", ke, yt);
  j("hh", ke, yt);
  j("kk", ke, yt);
  j("hmm", id);
  j("hmmss", od);
  j("Hmm", id);
  j("Hmmss", od);
  Ne(["H", "HH"], Ye);
  Ne(["k", "kk"], function(e, t, n) {
    var r = ae(e);
    t[Ye] = r === 24 ? 0 : r;
  });
  Ne(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  });
  Ne(["h", "hh"], function(e, t, n) {
    t[Ye] = ae(e), ne(n).bigHour = !0;
  });
  Ne("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Ye] = ae(e.substr(0, r)), t[St] = ae(e.substr(r)), ne(n).bigHour = !0;
  });
  Ne("hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[Ye] = ae(e.substr(0, r)), t[St] = ae(e.substr(r, 2)), t[on] = ae(e.substr(s)), ne(n).bigHour = !0;
  });
  Ne("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Ye] = ae(e.substr(0, r)), t[St] = ae(e.substr(r));
  });
  Ne("Hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[Ye] = ae(e.substr(0, r)), t[St] = ae(e.substr(r, 2)), t[on] = ae(e.substr(s));
  });
  function h$(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var p$ = /[ap]\.?m?\.?/i, _$ = kr("Hours", !0);
  function g$(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var gd = {
    calendar: oE,
    longDateFormat: cE,
    invalidDate: fE,
    ordinal: hE,
    dayOfMonthOrdinalParse: pE,
    relativeTime: gE,
    months: IE,
    monthsShort: ad,
    week: WE,
    weekdays: ZE,
    weekdaysMin: JE,
    weekdaysShort: hd,
    meridiemParse: p$
  }, Me = {}, Vr = {}, os;
  function v$(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
      if (e[n] !== t[n])
        return n;
    return r;
  }
  function ru(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function y$(e) {
    for (var t = 0, n, r, s, i; t < e.length; ) {
      for (i = ru(e[t]).split("-"), n = i.length, r = ru(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = xi(i.slice(0, n).join("-")), s)
          return s;
        if (r && r.length >= n && v$(i, r) >= n - 1)
          break;
        n--;
      }
      t++;
    }
    return os;
  }
  function E$(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function xi(e) {
    var t = null, n;
    if (Me[e] === void 0 && typeof As < "u" && As && As.exports && E$(e))
      try {
        t = os._abbr, n = require, n("./locale/" + e), Tn(t);
      } catch {
        Me[e] = null;
      }
    return Me[e];
  }
  function Tn(e, t) {
    var n;
    return e && (dt(t) ? n = pn(e) : n = Ia(e, t), n ? os = n : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), os._abbr;
  }
  function Ia(e, t) {
    if (t !== null) {
      var n, r = gd;
      if (t.abbr = e, Me[e] != null)
        Qc(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), r = Me[e]._config;
      else if (t.parentLocale != null)
        if (Me[t.parentLocale] != null)
          r = Me[t.parentLocale]._config;
        else if (n = xi(t.parentLocale), n != null)
          r = n._config;
        else
          return Vr[t.parentLocale] || (Vr[t.parentLocale] = []), Vr[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return Me[e] = new Oa(Vo(r, t)), Vr[e] && Vr[e].forEach(function(s) {
        Ia(s.name, s.config);
      }), Tn(e), Me[e];
    } else
      return delete Me[e], null;
  }
  function $$(e, t) {
    if (t != null) {
      var n, r, s = gd;
      Me[e] != null && Me[e].parentLocale != null ? Me[e].set(Vo(Me[e]._config, t)) : (r = xi(e), r != null && (s = r._config), t = Vo(s, t), r == null && (t.abbr = e), n = new Oa(t), n.parentLocale = Me[e], Me[e] = n), Tn(e);
    } else
      Me[e] != null && (Me[e].parentLocale != null ? (Me[e] = Me[e].parentLocale, e === Tn() && Tn(e)) : Me[e] != null && delete Me[e]);
    return Me[e];
  }
  function pn(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return os;
    if (!xt(e)) {
      if (t = xi(e), t)
        return t;
      e = [e];
    }
    return y$(e);
  }
  function b$() {
    return Po(Me);
  }
  function xa(e) {
    var t, n = e._a;
    return n && ne(e).overflow === -2 && (t = n[sn] < 0 || n[sn] > 11 ? sn : n[jt] < 1 || n[jt] > Ii(n[Qe], n[sn]) ? jt : n[Ye] < 0 || n[Ye] > 24 || n[Ye] === 24 && (n[St] !== 0 || n[on] !== 0 || n[Yn] !== 0) ? Ye : n[St] < 0 || n[St] > 59 ? St : n[on] < 0 || n[on] > 59 ? on : n[Yn] < 0 || n[Yn] > 999 ? Yn : -1, ne(e)._overflowDayOfYear && (t < Qe || t > jt) && (t = jt), ne(e)._overflowWeeks && t === -1 && (t = kE), ne(e)._overflowWeekday && t === -1 && (t = ME), ne(e).overflow = t), e;
  }
  var O$ = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, N$ = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, D$ = /Z|[+-]\d\d(?::?\d\d)?/, ws = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1]
  ], Zi = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], w$ = /^\/?Date\((-?\d+)/i, T$ = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, k$ = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function vd(e) {
    var t, n, r = e._i, s = O$.exec(r) || N$.exec(r), i, o, a, l, u = ws.length, f = Zi.length;
    if (s) {
      for (ne(e).iso = !0, t = 0, n = u; t < n; t++)
        if (ws[t][1].exec(s[1])) {
          o = ws[t][0], i = ws[t][2] !== !1;
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
      if (s[3]) {
        for (t = 0, n = f; t < n; t++)
          if (Zi[t][1].exec(s[3])) {
            a = (s[2] || " ") + Zi[t][0];
            break;
          }
        if (a == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!i && a != null) {
        e._isValid = !1;
        return;
      }
      if (s[4])
        if (D$.exec(s[4]))
          l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = o + (a || "") + (l || ""), Ca(e);
    } else
      e._isValid = !1;
  }
  function M$(e, t, n, r, s, i) {
    var o = [
      S$(e),
      ad.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return i && o.push(parseInt(i, 10)), o;
  }
  function S$(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function I$(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function x$(e, t, n) {
    if (e) {
      var r = hd.indexOf(e), s = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (r !== s)
        return ne(n).weekdayMismatch = !0, n._isValid = !1, !1;
    }
    return !0;
  }
  function R$(e, t, n) {
    if (e)
      return k$[e];
    if (t)
      return 0;
    var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
    return i * 60 + s;
  }
  function yd(e) {
    var t = T$.exec(I$(e._i)), n;
    if (t) {
      if (n = M$(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !x$(t[1], n, e))
        return;
      e._a = n, e._tzm = R$(t[8], t[9], t[10]), e._d = ss.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ne(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function C$(e) {
    var t = w$.exec(e._i);
    if (t !== null) {
      e._d = new Date(+t[1]);
      return;
    }
    if (vd(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (yd(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    e._strict ? e._isValid = !1 : A.createFromInputFallback(e);
  }
  A.createFromInputFallback = Nt(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function fr(e, t, n) {
    return e != null ? e : t != null ? t : n;
  }
  function L$(e) {
    var t = new Date(A.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Ra(e) {
    var t, n, r = [], s, i, o;
    if (!e._d) {
      for (s = L$(e), e._w && e._a[jt] == null && e._a[sn] == null && V$(e), e._dayOfYear != null && (o = fr(e._a[Qe], s[Qe]), (e._dayOfYear > Wr(o) || e._dayOfYear === 0) && (ne(e)._overflowDayOfYear = !0), n = ss(o, 0, e._dayOfYear), e._a[sn] = n.getUTCMonth(), e._a[jt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[Ye] === 24 && e._a[St] === 0 && e._a[on] === 0 && e._a[Yn] === 0 && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? ss : UE).apply(
        null,
        r
      ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (ne(e).weekdayMismatch = !0);
    }
  }
  function V$(e) {
    var t, n, r, s, i, o, a, l, u;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, o = 4, n = fr(
      t.GG,
      e._a[Qe],
      is(Te(), 1, 4).year
    ), r = fr(t.W, 1), s = fr(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, u = is(Te(), i, o), n = fr(t.gg, e._a[Qe], u.year), r = fr(t.w, u.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : s = i), r < 1 || r > un(n, i, o) ? ne(e)._overflowWeeks = !0 : l != null ? ne(e)._overflowWeekday = !0 : (a = md(n, r, s, i, o), e._a[Qe] = a.year, e._dayOfYear = a.dayOfYear);
  }
  A.ISO_8601 = function() {
  };
  A.RFC_2822 = function() {
  };
  function Ca(e) {
    if (e._f === A.ISO_8601) {
      vd(e);
      return;
    }
    if (e._f === A.RFC_2822) {
      yd(e);
      return;
    }
    e._a = [], ne(e).empty = !0;
    var t = "" + e._i, n, r, s, i, o, a = t.length, l = 0, u, f;
    for (s = ed(e._f, e._locale).match(Na) || [], f = s.length, n = 0; n < f; n++)
      i = s[n], r = (t.match(DE(i, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && ne(e).unusedInput.push(o), t = t.slice(
        t.indexOf(r) + r.length
      ), l += r.length), yr[i] ? (r ? ne(e).empty = !1 : ne(e).unusedTokens.push(i), TE(i, r, e)) : e._strict && !r && ne(e).unusedTokens.push(i);
    ne(e).charsLeftOver = a - l, t.length > 0 && ne(e).unusedInput.push(t), e._a[Ye] <= 12 && ne(e).bigHour === !0 && e._a[Ye] > 0 && (ne(e).bigHour = void 0), ne(e).parsedDateParts = e._a.slice(0), ne(e).meridiem = e._meridiem, e._a[Ye] = P$(
      e._locale,
      e._a[Ye],
      e._meridiem
    ), u = ne(e).era, u !== null && (e._a[Qe] = e._locale.erasConvertYear(u, e._a[Qe])), Ra(e), xa(e);
  }
  function P$(e, t, n) {
    var r;
    return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
  }
  function A$(e) {
    var t, n, r, s, i, o, a = !1, l = e._f.length;
    if (l === 0) {
      ne(e).invalidFormat = !0, e._d = new Date(NaN);
      return;
    }
    for (s = 0; s < l; s++)
      i = 0, o = !1, t = ba({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Ca(t), $a(t) && (o = !0), i += ne(t).charsLeftOver, i += ne(t).unusedTokens.length * 10, ne(t).score = i, a ? i < r && (r = i, n = t) : (r == null || i < r || o) && (r = i, n = t, o && (a = !0));
    On(e, n || t);
  }
  function F$(e) {
    if (!e._d) {
      var t = Da(e._i), n = t.day === void 0 ? t.date : t.day;
      e._a = Zc(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function(r) {
          return r && parseInt(r, 10);
        }
      ), Ra(e);
    }
  }
  function z$(e) {
    var t = new ms(xa(Ed(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function Ed(e) {
    var t = e._i, n = e._f;
    return e._locale = e._locale || pn(e._l), t === null || n === void 0 && t === "" ? Ni({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Rt(t) ? new ms(xa(t)) : (fs(t) ? e._d = t : xt(n) ? A$(e) : n ? Ca(e) : Y$(e), $a(e) || (e._d = null), e));
  }
  function Y$(e) {
    var t = e._i;
    dt(t) ? e._d = new Date(A.now()) : fs(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? C$(e) : xt(t) ? (e._a = Zc(t.slice(0), function(n) {
      return parseInt(n, 10);
    }), Ra(e)) : Kn(t) ? F$(e) : mn(t) ? e._d = new Date(t) : A.createFromInputFallback(e);
  }
  function $d(e, t, n, r, s) {
    var i = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Kn(e) && Ea(e) || xt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = n, i._i = e, i._f = t, i._strict = r, z$(i);
  }
  function Te(e, t, n, r) {
    return $d(e, t, n, r, !1);
  }
  var U$ = Nt(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = Te.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : Ni();
    }
  ), j$ = Nt(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = Te.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : Ni();
    }
  );
  function bd(e, t) {
    var n, r;
    if (t.length === 1 && xt(t[0]) && (t = t[0]), !t.length)
      return Te();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function W$() {
    var e = [].slice.call(arguments, 0);
    return bd("isBefore", e);
  }
  function H$() {
    var e = [].slice.call(arguments, 0);
    return bd("isAfter", e);
  }
  var B$ = function() {
    return Date.now ? Date.now() : +new Date();
  }, Pr = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function q$(e) {
    var t, n = !1, r, s = Pr.length;
    for (t in e)
      if (pe(e, t) && !(Re.call(Pr, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
        return !1;
    for (r = 0; r < s; ++r)
      if (e[Pr[r]]) {
        if (n)
          return !1;
        parseFloat(e[Pr[r]]) !== ae(e[Pr[r]]) && (n = !0);
      }
    return !0;
  }
  function G$() {
    return this._isValid;
  }
  function K$() {
    return Ct(NaN);
  }
  function Ri(e) {
    var t = Da(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, a = t.hour || 0, l = t.minute || 0, u = t.second || 0, f = t.millisecond || 0;
    this._isValid = q$(t), this._milliseconds = +f + u * 1e3 + l * 6e4 + a * 1e3 * 60 * 60, this._days = +o + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = pn(), this._bubble();
  }
  function Vs(e) {
    return e instanceof Ri;
  }
  function Fo(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function X$(e, t, n) {
    var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, o;
    for (o = 0; o < r; o++)
      (n && e[o] !== t[o] || !n && ae(e[o]) !== ae(t[o])) && i++;
    return i + s;
  }
  function Od(e, t) {
    K(e, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + qt(~~(n / 60), 2) + t + qt(~~n % 60, 2);
    });
  }
  Od("Z", ":");
  Od("ZZ", "");
  j("Z", Si);
  j("ZZ", Si);
  Ne(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0, n._tzm = La(Si, e);
  });
  var Z$ = /([\+\-]|\d\d)/gi;
  function La(e, t) {
    var n = (t || "").match(e), r, s, i;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(Z$) || ["-", 0, 0], i = +(s[1] * 60) + ae(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function Va(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(), r = (Rt(e) || fs(e) ? e.valueOf() : Te(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), A.updateOffset(n, !1), n) : Te(e).local();
  }
  function zo(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  A.updateOffset = function() {
  };
  function J$(e, t, n) {
    var r = this._offset || 0, s;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = La(Si, e), e === null)
          return this;
      } else
        Math.abs(e) < 16 && !n && (e = e * 60);
      return !this._isUTC && t && (s = zo(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? wd(
        this,
        Ct(e - r, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, A.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? r : zo(this);
  }
  function Q$(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function eb(e) {
    return this.utcOffset(0, e);
  }
  function tb(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(zo(this), "m")), this;
  }
  function nb() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = La(OE, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function rb(e) {
    return this.isValid() ? (e = e ? Te(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function sb() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function ib() {
    if (!dt(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return ba(e, this), e = Ed(e), e._a ? (t = e._isUTC ? Kt(e._a) : Te(e._a), this._isDSTShifted = this.isValid() && X$(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function ob() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function ab() {
    return this.isValid() ? this._isUTC : !1;
  }
  function Nd() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var lb = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ub = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Ct(e, t) {
    var n = e, r = null, s, i, o;
    return Vs(e) ? n = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : mn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = lb.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: ae(r[jt]) * s,
      h: ae(r[Ye]) * s,
      m: ae(r[St]) * s,
      s: ae(r[on]) * s,
      ms: ae(Fo(r[Yn] * 1e3)) * s
    }) : (r = ub.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Cn(r[2], s),
      M: Cn(r[3], s),
      w: Cn(r[4], s),
      d: Cn(r[5], s),
      h: Cn(r[6], s),
      m: Cn(r[7], s),
      s: Cn(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (o = cb(
      Te(n.from),
      Te(n.to)
    ), n = {}, n.ms = o.milliseconds, n.M = o.months), i = new Ri(n), Vs(e) && pe(e, "_locale") && (i._locale = e._locale), Vs(e) && pe(e, "_isValid") && (i._isValid = e._isValid), i;
  }
  Ct.fn = Ri.prototype;
  Ct.invalid = K$;
  function Cn(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function su(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }
  function cb(e, t) {
    var n;
    return e.isValid() && t.isValid() ? (t = Va(t, e), e.isBefore(t) ? n = su(e, t) : (n = su(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
  }
  function Dd(e, t) {
    return function(n, r) {
      var s, i;
      return r !== null && !isNaN(+r) && (Qc(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), i = n, n = r, r = i), s = Ct(n, r), wd(this, s, e), this;
    };
  }
  function wd(e, t, n, r) {
    var s = t._milliseconds, i = Fo(t._days), o = Fo(t._months);
    !e.isValid() || (r = r == null ? !0 : r, o && ud(e, Js(e, "Month") + o * n), i && nd(e, "Date", Js(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && A.updateOffset(e, i || o));
  }
  var db = Dd(1, "add"), fb = Dd(-1, "subtract");
  function Td(e) {
    return typeof e == "string" || e instanceof String;
  }
  function mb(e) {
    return Rt(e) || fs(e) || Td(e) || mn(e) || pb(e) || hb(e) || e === null || e === void 0;
  }
  function hb(e) {
    var t = Kn(e) && !Ea(e), n = !1, r = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], s, i, o = r.length;
    for (s = 0; s < o; s += 1)
      i = r[s], n = n || pe(e, i);
    return t && n;
  }
  function pb(e) {
    var t = xt(e), n = !1;
    return t && (n = e.filter(function(r) {
      return !mn(r) && Td(e);
    }).length === 0), t && n;
  }
  function _b(e) {
    var t = Kn(e) && !Ea(e), n = !1, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], s, i;
    for (s = 0; s < r.length; s += 1)
      i = r[s], n = n || pe(e, i);
    return t && n;
  }
  function gb(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function vb(e, t) {
    arguments.length === 1 && (arguments[0] ? mb(arguments[0]) ? (e = arguments[0], t = void 0) : _b(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var n = e || Te(), r = Va(n, this).startOf("day"), s = A.calendarFormat(this, r) || "sameElse", i = t && (Xt(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(
      i || this.localeData().calendar(s, this, Te(n))
    );
  }
  function yb() {
    return new ms(this);
  }
  function Eb(e, t) {
    var n = Rt(e) ? e : Te(e);
    return this.isValid() && n.isValid() ? (t = Dt(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function $b(e, t) {
    var n = Rt(e) ? e : Te(e);
    return this.isValid() && n.isValid() ? (t = Dt(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
  }
  function bb(e, t, n, r) {
    var s = Rt(e) ? e : Te(e), i = Rt(t) ? t : Te(t);
    return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
  }
  function Ob(e, t) {
    var n = Rt(e) ? e : Te(e), r;
    return this.isValid() && n.isValid() ? (t = Dt(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
  }
  function Nb(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Db(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function wb(e, t, n) {
    var r, s, i;
    if (!this.isValid())
      return NaN;
    if (r = Va(e, this), !r.isValid())
      return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Dt(t), t) {
      case "year":
        i = Ps(this, r) / 12;
        break;
      case "month":
        i = Ps(this, r);
        break;
      case "quarter":
        i = Ps(this, r) / 3;
        break;
      case "second":
        i = (this - r) / 1e3;
        break;
      case "minute":
        i = (this - r) / 6e4;
        break;
      case "hour":
        i = (this - r) / 36e5;
        break;
      case "day":
        i = (this - r - s) / 864e5;
        break;
      case "week":
        i = (this - r - s) / 6048e5;
        break;
      default:
        i = this - r;
    }
    return n ? i : bt(i);
  }
  function Ps(e, t) {
    if (e.date() < t.date())
      return -Ps(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, i;
    return t - r < 0 ? (s = e.clone().add(n - 1, "months"), i = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), i = (t - r) / (s - r)), -(n + i) || 0;
  }
  A.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  A.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function Tb() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function kb(e) {
    if (!this.isValid())
      return null;
    var t = e !== !0, n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Ls(
      n,
      t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    ) : Xt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ls(n, "Z")) : Ls(
      n,
      t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function Mb() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", n, r, s, i;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + s + i);
  }
  function Sb(e) {
    e || (e = this.isUtc() ? A.defaultFormatUtc : A.defaultFormat);
    var t = Ls(this, e);
    return this.localeData().postformat(t);
  }
  function Ib(e, t) {
    return this.isValid() && (Rt(e) && e.isValid() || Te(e).isValid()) ? Ct({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function xb(e) {
    return this.from(Te(), e);
  }
  function Rb(e, t) {
    return this.isValid() && (Rt(e) && e.isValid() || Te(e).isValid()) ? Ct({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Cb(e) {
    return this.to(Te(), e);
  }
  function kd(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = pn(e), t != null && (this._locale = t), this);
  }
  var Md = Nt(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function Sd() {
    return this._locale;
  }
  var ti = 1e3, Er = 60 * ti, ni = 60 * Er, Id = (365 * 400 + 97) * 24 * ni;
  function $r(e, t) {
    return (e % t + t) % t;
  }
  function xd(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Id : new Date(e, t, n).valueOf();
  }
  function Rd(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Id : Date.UTC(e, t, n);
  }
  function Lb(e) {
    var t, n;
    if (e = Dt(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Rd : xd, e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= $r(
          t + (this._isUTC ? 0 : this.utcOffset() * Er),
          ni
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= $r(t, Er);
        break;
      case "second":
        t = this._d.valueOf(), t -= $r(t, ti);
        break;
    }
    return this._d.setTime(t), A.updateOffset(this, !0), this;
  }
  function Vb(e) {
    var t, n;
    if (e = Dt(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Rd : xd, e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += ni - $r(
          t + (this._isUTC ? 0 : this.utcOffset() * Er),
          ni
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += Er - $r(t, Er) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += ti - $r(t, ti) - 1;
        break;
    }
    return this._d.setTime(t), A.updateOffset(this, !0), this;
  }
  function Pb() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function Ab() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Fb() {
    return new Date(this.valueOf());
  }
  function zb() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond()
    ];
  }
  function Yb() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }
  function Ub() {
    return this.isValid() ? this.toISOString() : null;
  }
  function jb() {
    return $a(this);
  }
  function Wb() {
    return On({}, ne(this));
  }
  function Hb() {
    return ne(this).overflow;
  }
  function Bb() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  K("N", 0, 0, "eraAbbr");
  K("NN", 0, 0, "eraAbbr");
  K("NNN", 0, 0, "eraAbbr");
  K("NNNN", 0, 0, "eraName");
  K("NNNNN", 0, 0, "eraNarrow");
  K("y", ["y", 1], "yo", "eraYear");
  K("y", ["yy", 2], 0, "eraYear");
  K("y", ["yyy", 3], 0, "eraYear");
  K("y", ["yyyy", 4], 0, "eraYear");
  j("N", Pa);
  j("NN", Pa);
  j("NNN", Pa);
  j("NNNN", rO);
  j("NNNNN", sO);
  Ne(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(e, t, n, r) {
      var s = n._locale.erasParse(e, r, n._strict);
      s ? ne(n).era = s : ne(n).invalidEra = e;
    }
  );
  j("y", Mr);
  j("yy", Mr);
  j("yyy", Mr);
  j("yyyy", Mr);
  j("yo", iO);
  Ne(["y", "yy", "yyy", "yyyy"], Qe);
  Ne(["yo"], function(e, t, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Qe] = n._locale.eraYearOrdinalParse(e, s) : t[Qe] = parseInt(e, 10);
  });
  function qb(e, t) {
    var n, r, s, i = this._eras || pn("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) {
      switch (typeof i[n].since) {
        case "string":
          s = A(i[n].since).startOf("day"), i[n].since = s.valueOf();
          break;
      }
      switch (typeof i[n].until) {
        case "undefined":
          i[n].until = 1 / 0;
          break;
        case "string":
          s = A(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
          break;
      }
    }
    return i;
  }
  function Gb(e, t, n) {
    var r, s, i = this.eras(), o, a, l;
    for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
      if (o = i[r].name.toUpperCase(), a = i[r].abbr.toUpperCase(), l = i[r].narrow.toUpperCase(), n)
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (a === e)
              return i[r];
            break;
          case "NNNN":
            if (o === e)
              return i[r];
            break;
          case "NNNNN":
            if (l === e)
              return i[r];
            break;
        }
      else if ([o, a, l].indexOf(e) >= 0)
        return i[r];
  }
  function Kb(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0 ? A(e.since).year() : A(e.since).year() + (t - e.offset) * n;
  }
  function Xb() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].name;
    return "";
  }
  function Zb() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].narrow;
    return "";
  }
  function Jb() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].abbr;
    return "";
  }
  function Qb() {
    var e, t, n, r, s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
      if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
        return (this.year() - A(s[e].since).year()) * n + s[e].offset;
    return this.year();
  }
  function eO(e) {
    return pe(this, "_erasNameRegex") || Aa.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function tO(e) {
    return pe(this, "_erasAbbrRegex") || Aa.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function nO(e) {
    return pe(this, "_erasNarrowRegex") || Aa.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function Pa(e, t) {
    return t.erasAbbrRegex(e);
  }
  function rO(e, t) {
    return t.erasNameRegex(e);
  }
  function sO(e, t) {
    return t.erasNarrowRegex(e);
  }
  function iO(e, t) {
    return t._eraYearOrdinalRegex || Mr;
  }
  function Aa() {
    var e = [], t = [], n = [], r = [], s, i, o = this.eras();
    for (s = 0, i = o.length; s < i; ++s)
      t.push(pt(o[s].name)), e.push(pt(o[s].abbr)), n.push(pt(o[s].narrow)), r.push(pt(o[s].name)), r.push(pt(o[s].abbr)), r.push(pt(o[s].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    );
  }
  K(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  K(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function Ci(e, t) {
    K(0, [e, e.length], 0, t);
  }
  Ci("gggg", "weekYear");
  Ci("ggggg", "weekYear");
  Ci("GGGG", "isoWeekYear");
  Ci("GGGGG", "isoWeekYear");
  et("weekYear", "gg");
  et("isoWeekYear", "GG");
  tt("weekYear", 1);
  tt("isoWeekYear", 1);
  j("G", Mi);
  j("g", Mi);
  j("GG", ke, yt);
  j("gg", ke, yt);
  j("GGGG", Ta, wa);
  j("gggg", Ta, wa);
  j("GGGGG", ki, wi);
  j("ggggg", ki, wi);
  ps(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, r) {
      t[r.substr(0, 2)] = ae(e);
    }
  );
  ps(["gg", "GG"], function(e, t, n, r) {
    t[r] = A.parseTwoDigitYear(e);
  });
  function oO(e) {
    return Cd.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function aO(e) {
    return Cd.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function lO() {
    return un(this.year(), 1, 4);
  }
  function uO() {
    return un(this.isoWeekYear(), 1, 4);
  }
  function cO() {
    var e = this.localeData()._week;
    return un(this.year(), e.dow, e.doy);
  }
  function dO() {
    var e = this.localeData()._week;
    return un(this.weekYear(), e.dow, e.doy);
  }
  function Cd(e, t, n, r, s) {
    var i;
    return e == null ? is(this, r, s).year : (i = un(e, r, s), t > i && (t = i), fO.call(this, e, t, n, r, s));
  }
  function fO(e, t, n, r, s) {
    var i = md(e, t, n, r, s), o = ss(i.year, 0, i.dayOfYear);
    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
  }
  K("Q", 0, "Qo", "quarter");
  et("quarter", "Q");
  tt("quarter", 7);
  j("Q", rd);
  Ne("Q", function(e, t) {
    t[sn] = (ae(e) - 1) * 3;
  });
  function mO(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
  }
  K("D", ["DD", 2], "Do", "date");
  et("date", "D");
  tt("date", 9);
  j("D", ke);
  j("DD", ke, yt);
  j("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  });
  Ne(["D", "DD"], jt);
  Ne("Do", function(e, t) {
    t[jt] = ae(e.match(ke)[0]);
  });
  var Ld = kr("Date", !0);
  K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  et("dayOfYear", "DDD");
  tt("dayOfYear", 4);
  j("DDD", Ti);
  j("DDDD", sd);
  Ne(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = ae(e);
  });
  function hO(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  K("m", ["mm", 2], 0, "minute");
  et("minute", "m");
  tt("minute", 14);
  j("m", ke);
  j("mm", ke, yt);
  Ne(["m", "mm"], St);
  var pO = kr("Minutes", !1);
  K("s", ["ss", 2], 0, "second");
  et("second", "s");
  tt("second", 15);
  j("s", ke);
  j("ss", ke, yt);
  Ne(["s", "ss"], on);
  var _O = kr("Seconds", !1);
  K("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  K(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  K(0, ["SSS", 3], 0, "millisecond");
  K(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  K(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  K(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  K(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  K(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  K(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  et("millisecond", "ms");
  tt("millisecond", 16);
  j("S", Ti, rd);
  j("SS", Ti, yt);
  j("SSS", Ti, sd);
  var Nn, Vd;
  for (Nn = "SSSS"; Nn.length <= 9; Nn += "S")
    j(Nn, Mr);
  function gO(e, t) {
    t[Yn] = ae(("0." + e) * 1e3);
  }
  for (Nn = "S"; Nn.length <= 9; Nn += "S")
    Ne(Nn, gO);
  Vd = kr("Milliseconds", !1);
  K("z", 0, 0, "zoneAbbr");
  K("zz", 0, 0, "zoneName");
  function vO() {
    return this._isUTC ? "UTC" : "";
  }
  function yO() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var I = ms.prototype;
  I.add = db;
  I.calendar = vb;
  I.clone = yb;
  I.diff = wb;
  I.endOf = Vb;
  I.format = Sb;
  I.from = Ib;
  I.fromNow = xb;
  I.to = Rb;
  I.toNow = Cb;
  I.get = $E;
  I.invalidAt = Hb;
  I.isAfter = Eb;
  I.isBefore = $b;
  I.isBetween = bb;
  I.isSame = Ob;
  I.isSameOrAfter = Nb;
  I.isSameOrBefore = Db;
  I.isValid = jb;
  I.lang = Md;
  I.locale = kd;
  I.localeData = Sd;
  I.max = j$;
  I.min = U$;
  I.parsingFlags = Wb;
  I.set = bE;
  I.startOf = Lb;
  I.subtract = fb;
  I.toArray = zb;
  I.toObject = Yb;
  I.toDate = Fb;
  I.toISOString = kb;
  I.inspect = Mb;
  typeof Symbol < "u" && Symbol.for != null && (I[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  I.toJSON = Ub;
  I.toString = Tb;
  I.unix = Ab;
  I.valueOf = Pb;
  I.creationData = Bb;
  I.eraName = Xb;
  I.eraNarrow = Zb;
  I.eraAbbr = Jb;
  I.eraYear = Qb;
  I.year = fd;
  I.isLeapYear = YE;
  I.weekYear = oO;
  I.isoWeekYear = aO;
  I.quarter = I.quarters = mO;
  I.month = cd;
  I.daysInMonth = AE;
  I.week = I.weeks = qE;
  I.isoWeek = I.isoWeeks = GE;
  I.weeksInYear = cO;
  I.weeksInWeekYear = dO;
  I.isoWeeksInYear = lO;
  I.isoWeeksInISOWeekYear = uO;
  I.date = Ld;
  I.day = I.days = a$;
  I.weekday = l$;
  I.isoWeekday = u$;
  I.dayOfYear = hO;
  I.hour = I.hours = _$;
  I.minute = I.minutes = pO;
  I.second = I.seconds = _O;
  I.millisecond = I.milliseconds = Vd;
  I.utcOffset = J$;
  I.utc = eb;
  I.local = tb;
  I.parseZone = nb;
  I.hasAlignedHourOffset = rb;
  I.isDST = sb;
  I.isLocal = ob;
  I.isUtcOffset = ab;
  I.isUtc = Nd;
  I.isUTC = Nd;
  I.zoneAbbr = vO;
  I.zoneName = yO;
  I.dates = Nt(
    "dates accessor is deprecated. Use date instead.",
    Ld
  );
  I.months = Nt(
    "months accessor is deprecated. Use month instead",
    cd
  );
  I.years = Nt(
    "years accessor is deprecated. Use year instead",
    fd
  );
  I.zone = Nt(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    Q$
  );
  I.isDSTShifted = Nt(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    ib
  );
  function EO(e) {
    return Te(e * 1e3);
  }
  function $O() {
    return Te.apply(null, arguments).parseZone();
  }
  function Pd(e) {
    return e;
  }
  var _e = Oa.prototype;
  _e.calendar = aE;
  _e.longDateFormat = dE;
  _e.invalidDate = mE;
  _e.ordinal = _E;
  _e.preparse = Pd;
  _e.postformat = Pd;
  _e.relativeTime = vE;
  _e.pastFuture = yE;
  _e.set = iE;
  _e.eras = qb;
  _e.erasParse = Gb;
  _e.erasConvertYear = Kb;
  _e.erasAbbrRegex = tO;
  _e.erasNameRegex = eO;
  _e.erasNarrowRegex = nO;
  _e.months = CE;
  _e.monthsShort = LE;
  _e.monthsParse = PE;
  _e.monthsRegex = zE;
  _e.monthsShortRegex = FE;
  _e.week = jE;
  _e.firstDayOfYear = BE;
  _e.firstDayOfWeek = HE;
  _e.weekdays = n$;
  _e.weekdaysMin = s$;
  _e.weekdaysShort = r$;
  _e.weekdaysParse = o$;
  _e.weekdaysRegex = c$;
  _e.weekdaysShortRegex = d$;
  _e.weekdaysMinRegex = f$;
  _e.isPM = h$;
  _e.meridiem = g$;
  function ri(e, t, n, r) {
    var s = pn(), i = Kt().set(r, t);
    return s[n](i, e);
  }
  function Ad(e, t, n) {
    if (mn(e) && (t = e, e = void 0), e = e || "", t != null)
      return ri(e, t, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++)
      s[r] = ri(e, r, n, "month");
    return s;
  }
  function Fa(e, t, n, r) {
    typeof e == "boolean" ? (mn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, mn(t) && (n = t, t = void 0), t = t || "");
    var s = pn(), i = e ? s._week.dow : 0, o, a = [];
    if (n != null)
      return ri(t, (n + i) % 7, r, "day");
    for (o = 0; o < 7; o++)
      a[o] = ri(t, (o + i) % 7, r, "day");
    return a;
  }
  function bO(e, t) {
    return Ad(e, t, "months");
  }
  function OO(e, t) {
    return Ad(e, t, "monthsShort");
  }
  function NO(e, t, n) {
    return Fa(e, t, n, "weekdays");
  }
  function DO(e, t, n) {
    return Fa(e, t, n, "weekdaysShort");
  }
  function wO(e, t, n) {
    return Fa(e, t, n, "weekdaysMin");
  }
  Tn("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10, n = ae(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      return e + n;
    }
  });
  A.lang = Nt(
    "moment.lang is deprecated. Use moment.locale instead.",
    Tn
  );
  A.langData = Nt(
    "moment.langData is deprecated. Use moment.localeData instead.",
    pn
  );
  var Jt = Math.abs;
  function TO() {
    var e = this._data;
    return this._milliseconds = Jt(this._milliseconds), this._days = Jt(this._days), this._months = Jt(this._months), e.milliseconds = Jt(e.milliseconds), e.seconds = Jt(e.seconds), e.minutes = Jt(e.minutes), e.hours = Jt(e.hours), e.months = Jt(e.months), e.years = Jt(e.years), this;
  }
  function Fd(e, t, n, r) {
    var s = Ct(t, n);
    return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
  }
  function kO(e, t) {
    return Fd(this, e, t, 1);
  }
  function MO(e, t) {
    return Fd(this, e, t, -1);
  }
  function iu(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function SO() {
    var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, i, o, a, l;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += iu(Yo(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = bt(e / 1e3), r.seconds = s % 60, i = bt(s / 60), r.minutes = i % 60, o = bt(i / 60), r.hours = o % 24, t += bt(o / 24), l = bt(zd(t)), n += l, t -= iu(Yo(l)), a = bt(n / 12), n %= 12, r.days = t, r.months = n, r.years = a, this;
  }
  function zd(e) {
    return e * 4800 / 146097;
  }
  function Yo(e) {
    return e * 146097 / 4800;
  }
  function IO(e) {
    if (!this.isValid())
      return NaN;
    var t, n, r = this._milliseconds;
    if (e = Dt(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + r / 864e5, n = this._months + zd(t), e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (t = this._days + Math.round(Yo(this._months)), e) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function xO() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ae(this._months / 12) * 31536e6 : NaN;
  }
  function _n(e) {
    return function() {
      return this.as(e);
    };
  }
  var RO = _n("ms"), CO = _n("s"), LO = _n("m"), VO = _n("h"), PO = _n("d"), AO = _n("w"), FO = _n("M"), zO = _n("Q"), YO = _n("y");
  function UO() {
    return Ct(this);
  }
  function jO(e) {
    return e = Dt(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function sr(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var WO = sr("milliseconds"), HO = sr("seconds"), BO = sr("minutes"), qO = sr("hours"), GO = sr("days"), KO = sr("months"), XO = sr("years");
  function ZO() {
    return bt(this.days() / 7);
  }
  var tn = Math.round, _r = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function JO(e, t, n, r, s) {
    return s.relativeTime(t || 1, !!n, e, r);
  }
  function QO(e, t, n, r) {
    var s = Ct(e).abs(), i = tn(s.as("s")), o = tn(s.as("m")), a = tn(s.as("h")), l = tn(s.as("d")), u = tn(s.as("M")), f = tn(s.as("w")), d = tn(s.as("y")), m = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || o <= 1 && ["m"] || o < n.m && ["mm", o] || a <= 1 && ["h"] || a < n.h && ["hh", a] || l <= 1 && ["d"] || l < n.d && ["dd", l];
    return n.w != null && (m = m || f <= 1 && ["w"] || f < n.w && ["ww", f]), m = m || u <= 1 && ["M"] || u < n.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d], m[2] = t, m[3] = +e > 0, m[4] = r, JO.apply(null, m);
  }
  function eN(e) {
    return e === void 0 ? tn : typeof e == "function" ? (tn = e, !0) : !1;
  }
  function tN(e, t) {
    return _r[e] === void 0 ? !1 : t === void 0 ? _r[e] : (_r[e] = t, e === "s" && (_r.ss = t - 1), !0);
  }
  function nN(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var n = !1, r = _r, s, i;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, _r, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), i = QO(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
  }
  var Ji = Math.abs;
  function ur(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Li() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = Ji(this._milliseconds) / 1e3, t = Ji(this._days), n = Ji(this._months), r, s, i, o, a = this.asSeconds(), l, u, f, d;
    return a ? (r = bt(e / 60), s = bt(r / 60), e %= 60, r %= 60, i = bt(n / 12), n %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = a < 0 ? "-" : "", u = ur(this._months) !== ur(a) ? "-" : "", f = ur(this._days) !== ur(a) ? "-" : "", d = ur(this._milliseconds) !== ur(a) ? "-" : "", l + "P" + (i ? u + i + "Y" : "") + (n ? u + n + "M" : "") + (t ? f + t + "D" : "") + (s || r || e ? "T" : "") + (s ? d + s + "H" : "") + (r ? d + r + "M" : "") + (e ? d + o + "S" : "")) : "P0D";
  }
  var fe = Ri.prototype;
  fe.isValid = G$;
  fe.abs = TO;
  fe.add = kO;
  fe.subtract = MO;
  fe.as = IO;
  fe.asMilliseconds = RO;
  fe.asSeconds = CO;
  fe.asMinutes = LO;
  fe.asHours = VO;
  fe.asDays = PO;
  fe.asWeeks = AO;
  fe.asMonths = FO;
  fe.asQuarters = zO;
  fe.asYears = YO;
  fe.valueOf = xO;
  fe._bubble = SO;
  fe.clone = UO;
  fe.get = jO;
  fe.milliseconds = WO;
  fe.seconds = HO;
  fe.minutes = BO;
  fe.hours = qO;
  fe.days = GO;
  fe.weeks = ZO;
  fe.months = KO;
  fe.years = XO;
  fe.humanize = nN;
  fe.toISOString = Li;
  fe.toString = Li;
  fe.toJSON = Li;
  fe.locale = kd;
  fe.localeData = Sd;
  fe.toIsoString = Nt(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Li
  );
  fe.lang = Md;
  K("X", 0, 0, "unix");
  K("x", 0, 0, "valueOf");
  j("x", Mi);
  j("X", NE);
  Ne("X", function(e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  Ne("x", function(e, t, n) {
    n._d = new Date(ae(e));
  });
  //! moment.js
  A.version = "2.29.4";
  rE(Te);
  A.fn = I;
  A.min = W$;
  A.max = H$;
  A.now = B$;
  A.utc = Kt;
  A.unix = EO;
  A.months = bO;
  A.isDate = fs;
  A.locale = Tn;
  A.invalid = Ni;
  A.duration = Ct;
  A.isMoment = Rt;
  A.weekdays = NO;
  A.parseZone = $O;
  A.localeData = pn;
  A.isDuration = Vs;
  A.monthsShort = OO;
  A.weekdaysMin = wO;
  A.defineLocale = Ia;
  A.updateLocale = $$;
  A.locales = b$;
  A.weekdaysShort = DO;
  A.normalizeUnits = Dt;
  A.relativeTimeRounding = eN;
  A.relativeTimeThreshold = tN;
  A.calendarFormat = gb;
  A.prototype = I;
  A.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  const rN = {
    name: "EqualDateRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          equalDate: null,
          format: null
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          equalDate: {
            required: Pe
          }
        }
      };
    },
    methods: {
      setFormat(e) {
        this.values.format = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setEqualDate(e) {
        this.values.equalDate = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      showCalendar(e) {
        window.BX.calendar({
          node: e,
          field: e,
          bTime: !0,
          callback_after: (t) => {
            let n = "d.m.Y H:i:s";
            this.values.format && (n = this.values.format), this.setEqualDate(A(t).format(this.$toMomentFormat(n)));
          }
        });
      }
    }
  }, sN = { class: "rule-date-row" }, iN = { for: "equalDate" }, oN = { class: "adm-input-wrap adm-input-wrap-calendar" }, aN = ["disabled", "value"], lN = ["title"], uN = {
    key: 0,
    class: "error"
  }, cN = { class: "rule-date-row" }, dN = { for: "formatEqualDate" }, fN = ["disabled", "value"];
  function mN(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", sN, [
        _("label", iN, D(e.$t("equalDate.equalDate")), 1),
        _("div", oN, [
          _("input", {
            class: "adm-input adm-input-calendar",
            disabled: !e.$root.canEdit(),
            id: "equalDate",
            type: "text",
            value: s.values.equalDate,
            onInput: t[0] || (t[0] = (o) => i.setEqualDate(o.target.value))
          }, null, 40, aN),
          _("span", {
            class: "adm-calendar-icon",
            title: e.$t("equalDate.showCalendarTitle"),
            onClick: t[1] || (t[1] = Ce((o) => i.showCalendar(o.target), ["prevent"]))
          }, null, 8, lN)
        ]),
        r.v$.values.equalDate.$invalid ? (g(), v("p", uN, [
          r.v$.values.equalDate.required.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", cN, [
        _("label", dN, D(e.$t("equalDate.format")), 1),
        _("input", {
          placeholder: "d.m.Y H:i:s",
          disabled: !e.$root.canEdit(),
          id: "formatEqualDate",
          type: "text",
          value: s.values.format,
          onInput: t[2] || (t[2] = (o) => i.setFormat(o.target.value))
        }, null, 40, fN)
      ])
    ], 64);
  }
  const hN = /* @__PURE__ */ ce(rN, [["render", mN]]), pN = (e, t = "") => function(n, r, s) {
    let i = "d.m.Y H:i:s";
    return t && r[t] && (i = r[t]), i = s.$toMomentFormat(i), A(r[e], i).isSameOrAfter(A(n, i));
  }, _N = (e, t = "") => function(n, r, s) {
    let i = "d.m.Y H:i:s";
    return t && r[t] && (i = r[t]), i = s.$toMomentFormat(i), A(n, i).isSameOrAfter(A(r[e], i));
  }, gN = {
    name: "BetweenDateRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          minDate: null,
          maxDate: null,
          format: null
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          minDate: {
            required: Pe,
            mustBeLessOrEqualDate: pN("maxDate", "format")
          },
          maxDate: {
            required: Pe,
            mustBeGreaterOrEqualDate: _N("minDate", "format")
          }
        }
      };
    },
    methods: {
      setFormat(e) {
        this.values.format = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMinDate(e) {
        this.values.minDate = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMaxDate(e) {
        this.values.maxDate = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      showCalendar(e, t) {
        window.BX.calendar({
          node: e,
          field: e,
          bTime: !0,
          callback_after: (n) => {
            let r = "d.m.Y H:i:s";
            this.values.format && (r = this.values.format), this[t](A(n).format(this.$toMomentFormat(r)));
          }
        });
      }
    }
  }, vN = { class: "rule-date-row" }, yN = { for: "betweenDateMinDate" }, EN = { class: "adm-input-wrap adm-input-wrap-calendar" }, $N = ["disabled", "value"], bN = ["title"], ON = {
    key: 0,
    class: "error"
  }, NN = { class: "rule-date-row" }, DN = { for: "betweenDateMaxDate" }, wN = { class: "adm-input-wrap adm-input-wrap-calendar" }, TN = ["disabled", "value"], kN = ["title"], MN = {
    key: 0,
    class: "error"
  }, SN = { class: "rule-date-row" }, IN = { for: "formatBetweenDate" }, xN = ["disabled", "value"];
  function RN(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", vN, [
        _("label", yN, D(e.$t("betweenDate.minDate")), 1),
        _("div", EN, [
          _("input", {
            class: "adm-input adm-input-calendar",
            disabled: !e.$root.canEdit(),
            id: "betweenDateMinDate",
            type: "text",
            value: s.values.minDate,
            onInput: t[0] || (t[0] = (o) => i.setMinDate(o.target.value))
          }, null, 40, $N),
          _("span", {
            class: "adm-calendar-icon",
            title: e.$t("betweenDate.showCalendarTitle"),
            onClick: t[1] || (t[1] = Ce((o) => i.showCalendar(o.target, "setMinDate"), ["prevent"]))
          }, null, 8, bN)
        ]),
        r.v$.values.minDate.$invalid ? (g(), v("p", ON, [
          r.v$.values.minDate.required.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.minDate.mustBeLessOrEqualDate.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.mustBeLessOrEqual", { value: s.values.maxDate })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", NN, [
        _("label", DN, D(e.$t("betweenDate.maxDate")), 1),
        _("div", wN, [
          _("input", {
            class: "adm-input adm-input-calendar",
            disabled: !e.$root.canEdit(),
            id: "betweenDateMaxDate",
            type: "text",
            value: s.values.maxDate,
            onInput: t[2] || (t[2] = (o) => i.setMaxDate(o.target.value))
          }, null, 40, TN),
          _("span", {
            class: "adm-calendar-icon",
            title: e.$t("betweenDate.showCalendarTitle"),
            onClick: t[3] || (t[3] = Ce((o) => i.showCalendar(o.target, "setMaxDate"), ["prevent"]))
          }, null, 8, kN)
        ]),
        r.v$.values.maxDate.$invalid ? (g(), v("p", MN, [
          r.v$.values.maxDate.required.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.values.maxDate.mustBeGreaterOrEqualDate.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.mustBeGreaterOrEqual", { value: s.values.minDate })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", SN, [
        _("label", IN, D(e.$t("betweenDate.format")), 1),
        _("input", {
          placeholder: "d.m.Y H:i:s",
          disabled: !e.$root.canEdit(),
          id: "formatBetweenDate",
          type: "text",
          value: s.values.format,
          onInput: t[4] || (t[4] = (o) => i.setFormat(o.target.value))
        }, null, 40, xN)
      ])
    ], 64);
  }
  const CN = /* @__PURE__ */ ce(gN, [["render", RN]]), LN = {
    name: "MaxDateRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          maxDate: null,
          format: null
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          maxDate: {
            required: Pe
          }
        }
      };
    },
    methods: {
      setFormat(e) {
        this.values.format = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMaxDate(e) {
        this.values.maxDate = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      showCalendar(e, t) {
        window.BX.calendar({
          node: e,
          field: e,
          bTime: !0,
          callback_after: (n) => {
            let r = "d.m.Y H:i:s";
            this.values.format && (r = this.values.format), this[t](A(n).format(this.$toMomentFormat(r)));
          }
        });
      }
    }
  }, VN = { class: "rule-date-row" }, PN = { for: "maxDateMaxDate" }, AN = { class: "adm-input-wrap adm-input-wrap-calendar" }, FN = ["disabled", "value"], zN = ["title"], YN = {
    key: 0,
    class: "error"
  }, UN = { class: "rule-date-row" }, jN = { for: "formatMaxDate" }, WN = ["disabled", "value"];
  function HN(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", VN, [
        _("label", PN, D(e.$t("maxDate.maxDate")), 1),
        _("div", AN, [
          _("input", {
            class: "adm-input adm-input-calendar",
            disabled: !e.$root.canEdit(),
            id: "maxDateMaxDate",
            type: "text",
            value: s.values.maxDate,
            onInput: t[0] || (t[0] = (o) => i.setMaxDate(o.target.value))
          }, null, 40, FN),
          _("span", {
            class: "adm-calendar-icon",
            title: e.$t("maxDate.showCalendarTitle"),
            onClick: t[1] || (t[1] = Ce((o) => i.showCalendar(o.target, "setMaxDate"), ["prevent"]))
          }, null, 8, zN)
        ]),
        r.v$.values.maxDate.$invalid ? (g(), v("p", YN, [
          r.v$.values.maxDate.required.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", UN, [
        _("label", jN, D(e.$t("betweenDate.format")), 1),
        _("input", {
          placeholder: "d.m.Y H:i:s",
          disabled: !e.$root.canEdit(),
          id: "formatMaxDate",
          type: "text",
          value: s.values.format,
          onInput: t[2] || (t[2] = (o) => i.setFormat(o.target.value))
        }, null, 40, WN)
      ])
    ], 64);
  }
  const BN = /* @__PURE__ */ ce(LN, [["render", HN]]), qN = {
    name: "MinDateRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          minDate: null,
          format: null
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          minDate: {
            required: Pe
          }
        }
      };
    },
    methods: {
      setFormat(e) {
        this.values.format = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      setMinDate(e) {
        this.values.minDate = e, this.v$.$touch(), this.v$.$error || this.$emit("updateOptions", this.values);
      },
      showCalendar(e, t) {
        window.BX.calendar({
          node: e,
          field: e,
          bTime: !0,
          callback_after: (n) => {
            let r = "d.m.Y H:i:s";
            this.values.format && (r = this.values.format), this[t](A(n).format(this.$toMomentFormat(r)));
          }
        });
      }
    }
  }, GN = { class: "rule-date-row" }, KN = { for: "minDateMinDate" }, XN = { class: "adm-input-wrap adm-input-wrap-calendar" }, ZN = ["disabled", "value"], JN = ["title"], QN = {
    key: 0,
    class: "error"
  }, e0 = { class: "rule-date-row" }, t0 = { for: "formatMinDate" }, n0 = ["disabled", "value"];
  function r0(e, t, n, r, s, i) {
    return g(), v(C, null, [
      _("div", GN, [
        _("label", KN, D(e.$t("minDate.minDate")), 1),
        _("div", XN, [
          _("input", {
            class: "adm-input adm-input-calendar",
            disabled: !e.$root.canEdit(),
            id: "minDateMinDate",
            type: "text",
            value: s.values.minDate,
            onInput: t[0] || (t[0] = (o) => i.setMinDate(o.target.value))
          }, null, 40, ZN),
          _("span", {
            class: "adm-calendar-icon",
            title: e.$t("minDate.showCalendarTitle"),
            onClick: t[1] || (t[1] = Ce((o) => i.showCalendar(o.target, "setMinDate"), ["prevent"]))
          }, null, 8, JN)
        ]),
        r.v$.values.minDate.$invalid ? (g(), v("p", QN, [
          r.v$.values.minDate.required.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      _("div", e0, [
        _("label", t0, D(e.$t("betweenDate.format")), 1),
        _("input", {
          placeholder: "d.m.Y H:i:s",
          disabled: !e.$root.canEdit(),
          id: "formatMinDate",
          type: "text",
          value: s.values.format,
          onInput: t[2] || (t[2] = (o) => i.setFormat(o.target.value))
        }, null, 40, n0)
      ])
    ], 64);
  }
  const s0 = /* @__PURE__ */ ce(qN, [["render", r0]]), i0 = {
    name: "EqualRule",
    setup() {
      return {
        v$: Ae()
      };
    },
    mixins: [Ue],
    emits: ["updateOptions"],
    props: {
      options: Object
    },
    data() {
      return {
        values: Object.assign({
          equal: 0
        }, this.options)
      };
    },
    mounted() {
      this.$emit("updateOptions", this.values);
    },
    validations() {
      return {
        values: {
          equal: {
            required: Pe,
            decimal: rs
          }
        }
      };
    },
    methods: {
      setMax(e) {
        this.values.equal = e, this.v$.$touch(), this.v$.values.equal.$error || this.$emit("updateOptions", { equal: e });
      }
    }
  }, o0 = { class: "rule-max-row" }, a0 = { for: "equal" }, l0 = ["disabled", "value"], u0 = {
    key: 0,
    class: "error"
  };
  function c0(e, t, n, r, s, i) {
    return g(), v("div", o0, [
      _("label", a0, D(e.$t("equal.equal")), 1),
      _("input", {
        disabled: !e.$root.canEdit(),
        id: "equal",
        type: "text",
        value: s.values.equal,
        onInput: t[0] || (t[0] = (o) => i.setMax(o.target.value))
      }, null, 40, l0),
      r.v$.values.equal.$invalid ? (g(), v("p", u0, [
        r.v$.values.equal.decimal.$invalid ? (g(), v(C, { key: 0 }, [
          G(D(e.$t("errors.decimal")), 1)
        ], 64)) : r.v$.values.equal.required.$invalid ? (g(), v(C, { key: 1 }, [
          G(D(e.$t("errors.required")), 1)
        ], 64)) : z("", !0)
      ])) : z("", !0)
    ]);
  }
  const d0 = /* @__PURE__ */ ce(i0, [["render", c0]]), f0 = {
    name: "Rule",
    setup() {
      return {
        v$: Ae()
      };
    },
    props: {
      rule: Object,
      group: Object,
      rules: Array,
      groupRules: Array
    },
    components: {
      MinRule: bg,
      MaxRule: Mg,
      MinCountRule: Vg,
      MaxCountRule: jg,
      BetweenCountRule: ev,
      BetweenRule: dv,
      MinLengthRule: vv,
      MaxLengthRule: Dv,
      BetweenLengthRule: Vv,
      AlphaNumericRule: Fv,
      AlphaRule: Uv,
      BooleanRule: Hv,
      IntegerRule: Gv,
      NumericRule: Zv,
      EmailRule: ey,
      DateRule: oy,
      JsonRule: uy,
      RegexRule: _y,
      UniqueRule: yy,
      InRule: My,
      NotInRule: Ay,
      StrictInRule: qy,
      StrictNotInRule: nE,
      EqualDateRule: hN,
      BetweenDateRule: CN,
      MaxDateRule: BN,
      MinDateRule: s0,
      EqualRule: d0
    },
    emits: ["delete"],
    computed: {
      rulesByTypeAndFilterSelected() {
        let e = [], t = [];
        return this.groupRules.forEach((n) => {
          t.push(n.key);
        }), this.rules.forEach((n) => {
          t.indexOf(n.key) === -1 && e.push(n);
        }), e.sort((n, r) => n.title < r.title ? -1 : n.title > r.title), e;
      },
      getCurrentRule() {
        if (!this.rule.key)
          return null;
        let e = null;
        return this.rules.forEach((t) => {
          this.rule.key === t.key && (e = t);
        }), e;
      }
    },
    validations() {
      return {
        rule: {
          key: {
            required: Pe
          },
          sort: {
            required: Pe,
            integer: fn,
            minValue: mg(0)
          }
        }
      };
    },
    methods: {
      updateOptions(e) {
        this.rule.options = Object.assign({}, this.rule.options, e);
      }
    },
    watch: {
      rule: {
        handler() {
          const e = this.$parent.$parent;
          typeof e.$data.validation[this.group.id] > "u" && (e.$data.validation[this.group.id] = {}), e.$data.validation[this.group.id].rule = this.v$.$invalid;
        },
        deep: !0
      },
      "rule.key": {
        handler(e, t) {
          this.rule.options = {};
        }
      }
    },
    beforeUnmount() {
      const e = this.$parent.$parent;
      typeof e.$data.validation[this.group.id] < "u" && typeof e.$data.validation[this.group.id].rule < "u" && (e.$data.validation[this.group.id].rule = !1);
    }
  }, m0 = { class: "rule-cell" }, h0 = { value: null }, p0 = ["value"], _0 = ["value"], g0 = {
    key: 2,
    class: "error"
  }, v0 = { class: "rule-cell" }, y0 = { class: "rule-cell" }, E0 = ["disabled"], $0 = {
    key: 0,
    class: "rule-message-description"
  }, b0 = { class: "rule-cell" }, O0 = ["disabled"], N0 = {
    key: 0,
    class: "error"
  }, D0 = { key: 0 }, w0 = ["title", "value"];
  function T0(e, t, n, r, s, i) {
    return g(), v("tr", {
      key: n.rule.id
    }, [
      _("td", m0, [
        e.$root.canEdit() ? ln((g(), v("select", {
          key: 0,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => r.v$.rule.key.$model = o),
          class: "rule-select"
        }, [
          _("option", h0, D(e.$t("edit.selectRule")), 1),
          n.rule.key ? (g(), v("option", {
            key: 0,
            value: n.rule.key
          }, D(i.getCurrentRule.title), 9, p0)) : z("", !0),
          (g(!0), v(C, null, _t(i.rulesByTypeAndFilterSelected, (o) => (g(), v("option", {
            value: o.key
          }, D(o.title), 9, _0))), 256))
        ], 512)), [
          [_c, r.v$.rule.key.$model]
        ]) : (g(), v(C, { key: 1 }, [
          G(D(i.getCurrentRule.title), 1)
        ], 64)),
        r.v$.rule.key.$invalid && r.v$.rule.key.$dirty ? (g(), v("p", g0, D(e.$t("errors.required")), 1)) : z("", !0)
      ]),
      _("td", v0, [
        (g(), Qn(xm(n.rule.key + "Rule"), {
          options: n.rule.options,
          onUpdateOptions: t[1] || (t[1] = (o) => i.updateOptions(o))
        }, null, 40, ["options"]))
      ]),
      _("td", y0, [
        ln(_("input", {
          disabled: !e.$root.canEdit(),
          type: "text",
          "onUpdate:modelValue": t[2] || (t[2] = (o) => n.rule.message = o),
          class: "rule-message"
        }, null, 8, E0), [
          [Or, n.rule.message]
        ]),
        i.getCurrentRule ? (g(), v("p", $0, D(i.getCurrentRule.messageDescription), 1)) : z("", !0)
      ]),
      _("td", b0, [
        ln(_("input", {
          disabled: !e.$root.canEdit(),
          type: "text",
          "onUpdate:modelValue": t[3] || (t[3] = (o) => r.v$.rule.sort.$model = o),
          class: "rule-sort"
        }, null, 8, O0), [
          [Or, r.v$.rule.sort.$model]
        ]),
        r.v$.rule.sort.$invalid ? (g(), v("p", N0, [
          r.v$.rule.sort.integer.$invalid ? (g(), v(C, { key: 0 }, [
            G(D(e.$t("errors.integer")), 1)
          ], 64)) : r.v$.rule.sort.required.$invalid ? (g(), v(C, { key: 1 }, [
            G(D(e.$t("errors.required")), 1)
          ], 64)) : r.v$.rule.sort.minValue.$invalid ? (g(), v(C, { key: 2 }, [
            G(D(e.$t("errors.minValue", { minValue: 0 })), 1)
          ], 64)) : z("", !0)
        ])) : z("", !0)
      ]),
      e.$root.canEdit() ? (g(), v("td", D0, [
        _("input", {
          class: "rule-delete",
          onClick: t[4] || (t[4] = Ce((o) => e.$emit("delete"), ["prevent"])),
          type: "button",
          title: e.$t("edit.delete"),
          value: e.$t("edit.delete")
        }, null, 8, w0)
      ])) : z("", !0)
    ]);
  }
  const k0 = /* @__PURE__ */ ce(f0, [["render", T0]]), M0 = {
    name: "Group",
    components: { Rule: k0 },
    props: {
      group: Object,
      entity: Object,
      rules: Array
    },
    computed: {
      rulesByType() {
        let e = [];
        return this.rules.forEach((t) => {
          t.types.indexOf(this.group.type) !== -1 && e.push(t);
        }), e;
      },
      rulesByMultipleType() {
        let e = [];
        return this.rules.forEach((t) => {
          t.types.indexOf("multiple") !== -1 && e.push(t);
        }), e;
      },
      sortedGroupRules() {
        return this.group.rules.sort((e, t) => e.sort - t.sort);
      },
      sortedGroupMultipleRules() {
        return this.group.multiple_rules.sort((e, t) => e.sort - t.sort);
      }
    },
    methods: {
      deleteRule(e) {
        this.group.rules.splice(e, 1), !this.group.rules.length && (!this.group.multiple || !this.group.multiple_rules.length) && this.$emit("delete");
      },
      deleteMultipleRule(e) {
        this.group.multiple_rules.splice(e, 1), !this.group.rules.length && (!this.group.multiple || !this.group.multiple_rules.length) && this.$emit("delete");
      },
      addRule() {
        let e = [];
        this.group.rules.forEach((r) => {
          e.push(r.key);
        });
        let t = null;
        e.length + 1 === this.rulesByType.length && this.rulesByType.forEach((r) => {
          e.indexOf(r.key) === -1 && (t = r.key);
        });
        let n = this.$parent.getEmptyRule(this.group.id, this.entity, !1);
        n.key = t, this.group.rules.push(n);
      },
      addMultipleRule() {
        let e = [];
        this.group.multiple_rules.forEach((r) => {
          e.push(r.key);
        });
        let t = null;
        e.length + 1 === this.rulesByMultipleType.length && this.rulesByMultipleType.forEach((r) => {
          e.indexOf(r.key) === -1 && (t = r.key);
        });
        let n = this.$parent.getEmptyRule(this.group.id, this.entity, !0);
        n.key = t, this.group.multiple_rules.push(n);
      }
    }
  }, S0 = { class: "group" }, I0 = { class: "internal" }, x0 = { class: "heading" }, R0 = { class: "col-rule" }, C0 = { class: "col-rule" }, L0 = { class: "col-rule" }, V0 = {
    key: 0,
    class: "col-delete"
  }, P0 = { key: 0 }, A0 = {
    colspan: "4",
    class: "empty-rules"
  }, F0 = ["disabled", "title", "value"], z0 = { class: "internal" }, Y0 = { class: "heading" }, U0 = { class: "col-rule" }, j0 = { class: "col-rule" }, W0 = { class: "col-rule" }, H0 = {
    key: 0,
    class: "col-delete"
  }, B0 = { key: 0 }, q0 = {
    colspan: "4",
    class: "empty-rules"
  }, G0 = ["disabled", "title", "value"];
  function K0(e, t, n, r, s, i) {
    const o = Jn("Rule");
    return g(), v("div", S0, [
      _("h3", null, D(n.group.name), 1),
      n.group.multiple ? (g(), v(C, { key: 0 }, [
        _("h4", null, D(e.$t("edit.multiple")), 1),
        _("table", I0, [
          _("tbody", null, [
            _("tr", x0, [
              _("td", R0, D(e.$t("edit.rule")), 1),
              _("td", null, D(e.$t("edit.options")), 1),
              _("td", C0, D(e.$t("edit.message")), 1),
              _("td", L0, D(e.$t("edit.sort")), 1),
              e.$root.canEdit() ? (g(), v("td", V0, D(e.$t("edit.delete")), 1)) : z("", !0)
            ]),
            i.sortedGroupMultipleRules.length ? z("", !0) : (g(), v("tr", P0, [
              _("td", A0, D(e.$t("edit.emptyRules")), 1)
            ])),
            (g(!0), v(C, null, _t(i.sortedGroupMultipleRules, (a, l) => (g(), Qn(o, {
              rule: a,
              group: n.group,
              rules: i.rulesByMultipleType,
              groupRules: n.group.multiple_rules,
              onDelete: (u) => i.deleteMultipleRule(l)
            }, null, 8, ["rule", "group", "rules", "groupRules", "onDelete"]))), 256))
          ])
        ]),
        e.$root.canEdit() ? (g(), v("input", {
          key: 0,
          disabled: this.group.multiple_rules.length === i.rulesByMultipleType.length,
          onClick: t[0] || (t[0] = Ce((a) => i.addMultipleRule(), ["prevent"])),
          type: "submit",
          title: e.$t("edit.add"),
          class: "adm-btn-save",
          value: e.$t("edit.add")
        }, null, 8, F0)) : z("", !0)
      ], 64)) : z("", !0),
      _("h4", null, D(e.$t("edit.notMultiple")), 1),
      _("table", z0, [
        _("tbody", null, [
          _("tr", Y0, [
            _("td", U0, D(e.$t("edit.rule")), 1),
            _("td", null, D(e.$t("edit.options")), 1),
            _("td", j0, D(e.$t("edit.message")), 1),
            _("td", W0, D(e.$t("edit.sort")), 1),
            e.$root.canEdit() ? (g(), v("td", H0, D(e.$t("edit.delete")), 1)) : z("", !0)
          ]),
          i.sortedGroupRules.length ? z("", !0) : (g(), v("tr", B0, [
            _("td", q0, D(e.$t("edit.emptyRules")), 1)
          ])),
          (g(!0), v(C, null, _t(i.sortedGroupRules, (a, l) => (g(), Qn(o, {
            key: a.id,
            rule: a,
            group: n.group,
            rules: i.rulesByType,
            groupRules: n.group.rules,
            onDelete: (u) => i.deleteRule(l)
          }, null, 8, ["rule", "group", "rules", "groupRules", "onDelete"]))), 128))
        ])
      ]),
      e.$root.canEdit() ? (g(), v("input", {
        key: 1,
        disabled: this.group.rules.length === i.rulesByType.length,
        onClick: t[1] || (t[1] = Ce((a) => i.addRule(), ["prevent"])),
        type: "submit",
        title: e.$t("edit.add"),
        class: "adm-btn-save",
        value: e.$t("edit.add")
      }, null, 8, G0)) : z("", !0)
    ]);
  }
  const X0 = /* @__PURE__ */ ce(M0, [["render", K0]]), Z0 = {
    name: "Edit",
    props: {
      entityKey: Object
    },
    components: { Spinner: Wc, Group: X0 },
    emits: ["cancel"],
    data() {
      return {
        loading: !0,
        entity: null,
        rules: [],
        fieldId: null,
        errors: [],
        success: [],
        validation: {}
      };
    },
    computed: {
      fields() {
        let e = [];
        this.entity.groups.forEach((n) => {
          e.push(n.id);
        });
        let t = [];
        return this.entity.fields.forEach((n) => {
          e.indexOf(n.id) === -1 && t.push(n);
        }), t;
      },
      isDisabled() {
        let e = !1;
        return Object.values(this.validation).forEach((t) => {
          Object.values(t).forEach((n) => {
            n && (e = !0);
          });
        }), e;
      }
    },
    mounted() {
      this.load();
    },
    watch: {
      entity: {
        handler(e) {
          this.errors = [], this.success = [];
        },
        deep: !0
      }
    },
    methods: {
      getEmptyRule(e, t, n) {
        return {
          key: null,
          options: {},
          sort: 500,
          id: null,
          field_id: e,
          entity_type: t.entity_type,
          entity_id: t.id,
          multiple: n,
          message: null
        };
      },
      load() {
        Ro.getEntity(this.entityKey).then((e) => {
          let t = e.data.entity;
          t.groups = Object.values(t.groups);
          for (let n in t.groups)
            t.groups[n].rules = Object.values(t.groups[n].rules), t.groups[n].rules.length || t.groups[n].rules.push(this.getEmptyRule(t.groups[n].id, t, !1)), t.groups[n].multiple_rules = Object.values(t.groups[n].multiple_rules), t.groups[n].multiple_rules.length || t.groups[n].multiple_rules.push(this.getEmptyRule(t.groups[n].id, t, !0));
          t.fields = Object.values(t.fields), this.rules = e.data.rules, this.loading = !1, this.entity = Object.assign({}, t);
        }).catch((e) => {
          this.errors = e.errors;
        });
      },
      addRule(e) {
        let t = null;
        this.entity.fields.forEach((n) => {
          n.id === e && (t = n);
        }), t && this.entity.groups.push(
          Object.assign(
            {
              rules: [
                this.getEmptyRule(t.id, this.entity, !1)
              ],
              multiple_rules: [
                this.getEmptyRule(t.id, this.entity, !0)
              ]
            },
            t
          )
        );
      },
      deleteGroup(e) {
        this.entity.groups.splice(e, 1);
      },
      save() {
        this.errors = [], this.submit().then(() => {
          this.success = [{ message: this.$t("edit.successMessage") }], this.loading = !1, this.$emit("cancel");
        });
      },
      apply() {
        this.errors = [], this.submit().then(() => {
          this.success = [{ message: this.$t("edit.successMessage") }], this.loading = !1;
        });
      },
      submit() {
        let e = [];
        return this.loading = !0, this.entity.groups.forEach((t) => {
          t.rules.forEach((n) => {
            n.key && e.push(n);
          }), t.multiple_rules.forEach((n) => {
            n.key && e.push(n);
          });
        }), Ro.submit(this.entity.entity_type, this.entity.id, e).catch((t) => {
          this.success = [], this.errors = t.errors, this.loading = !1;
        });
      }
    }
  }, J0 = { class: "spinner-container" }, Q0 = {
    key: 0,
    class: "adm-info-message-wrap adm-info-message-red"
  }, eD = { class: "adm-info-message" }, tD = { class: "adm-info-message-title" }, nD = /* @__PURE__ */ _("br", null, null, -1), rD = /* @__PURE__ */ _("br", null, null, -1), sD = /* @__PURE__ */ _("div", { class: "adm-info-message-icon" }, null, -1), iD = {
    key: 1,
    class: "adm-info-message-wrap adm-info-message-green"
  }, oD = { class: "adm-info-message" }, aD = { class: "adm-info-message-title" }, lD = /* @__PURE__ */ _("br", null, null, -1), uD = /* @__PURE__ */ _("br", null, null, -1), cD = /* @__PURE__ */ _("div", { class: "adm-info-message-icon" }, null, -1), dD = { key: 2 }, fD = { class: "adm-detail-block" }, mD = { class: "adm-detail-content-wrap" }, hD = { class: "adm-detail-content" }, pD = { class: "adm-detail-title" }, _D = { class: "adm-detail-content-item-block" }, gD = { class: "add-field" }, vD = /* @__PURE__ */ _("option", null, null, -1), yD = ["value"], ED = ["disabled", "value", "title"], $D = /* @__PURE__ */ _("hr", null, null, -1), bD = { class: "groups" }, OD = {
    key: 0,
    class: "empty-groups"
  }, ND = { class: "adm-detail-content-btns-wrap" }, DD = { class: "adm-detail-content-btns" }, wD = ["disabled", "value", "title"], TD = ["disabled", "value", "title"], kD = ["value", "title"];
  function MD(e, t, n, r, s, i) {
    const o = Jn("Group"), a = Jn("Spinner");
    return g(), v("div", J0, [
      s.errors.length ? (g(), v("div", Q0, [
        _("div", eD, [
          _("div", tD, D(e.$t("edit.errors")), 1),
          (g(!0), v(C, null, _t(s.errors, (l) => (g(), v(C, null, [
            G(D(l.message), 1),
            nD
          ], 64))), 256)),
          rD,
          sD
        ])
      ])) : z("", !0),
      s.success.length ? (g(), v("div", iD, [
        _("div", oD, [
          _("div", aD, D(e.$t("edit.success")), 1),
          (g(!0), v(C, null, _t(s.success, (l) => (g(), v(C, null, [
            G(D(l.message), 1),
            lD
          ], 64))), 256)),
          uD,
          cD
        ])
      ])) : z("", !0),
      s.entity ? (g(), v("div", dD, [
        _("div", fD, [
          _("div", mD, [
            _("div", hD, [
              _("div", pD, [
                G(D(s.entity.entity_type_name) + ": ", 1),
                s.entity.type_name ? (g(), v(C, { key: 0 }, [
                  G(D(s.entity.type_name) + " / ", 1)
                ], 64)) : z("", !0),
                G(D(s.entity.name), 1)
              ]),
              _("div", _D, [
                e.$root.canEdit() ? (g(), v(C, { key: 0 }, [
                  _("div", gD, [
                    ln(_("select", {
                      "onUpdate:modelValue": t[0] || (t[0] = (l) => s.fieldId = l)
                    }, [
                      vD,
                      (g(!0), v(C, null, _t(this.fields, (l) => (g(), v("option", {
                        value: l.id
                      }, D(l.name), 9, yD))), 256))
                    ], 512), [
                      [_c, s.fieldId]
                    ]),
                    _("input", {
                      disabled: !s.fieldId,
                      onClick: t[1] || (t[1] = Ce((l) => {
                        i.addRule(s.fieldId), s.fieldId = null;
                      }, ["prevent"])),
                      type: "button",
                      value: e.$t("edit.addRule"),
                      title: e.$t("edit.addRuleTitle"),
                      class: "adm-btn-save"
                    }, null, 8, ED)
                  ]),
                  $D
                ], 64)) : z("", !0),
                _("div", bD, [
                  (g(!0), v(C, null, _t(s.entity.groups, (l, u) => (g(), Qn(o, {
                    key: l.id,
                    group: l,
                    entity: s.entity,
                    rules: s.rules,
                    onDelete: (f) => i.deleteGroup(u)
                  }, null, 8, ["group", "entity", "rules", "onDelete"]))), 128)),
                  s.entity.groups.length ? z("", !0) : (g(), v("div", OD, D(e.$t("edit.emptyGroups")), 1))
                ])
              ])
            ]),
            _("div", ND, [
              _("div", DD, [
                e.$root.canEdit() ? (g(), v("input", {
                  key: 0,
                  disabled: i.isDisabled,
                  onClick: t[2] || (t[2] = Ce((l) => i.save(), ["prevent"])),
                  type: "submit",
                  value: e.$t("edit.save"),
                  title: e.$t("edit.saveTitle"),
                  class: "adm-btn-save"
                }, null, 8, wD)) : z("", !0),
                e.$root.canEdit() ? (g(), v("input", {
                  key: 1,
                  disabled: i.isDisabled,
                  onClick: t[3] || (t[3] = Ce((l) => i.apply(), ["prevent"])),
                  type: "submit",
                  value: e.$t("edit.apply"),
                  title: e.$t("edit.applyTitle")
                }, null, 8, TD)) : z("", !0),
                _("input", {
                  onClick: t[4] || (t[4] = Ce((l) => e.$emit("cancel"), ["prevent"])),
                  type: "button",
                  value: e.$t("edit.cancel"),
                  title: e.$t("edit.cancelTitle")
                }, null, 8, kD)
              ])
            ])
          ])
        ])
      ])) : z("", !0),
      Ge(a, {
        loading: s.loading && !s.errors.length
      }, null, 8, ["loading"])
    ]);
  }
  const SD = /* @__PURE__ */ ce(Z0, [["render", MD]]), ID = {
    name: "TableList",
    props: {
      entities: Array
    },
    methods: {
      select(e) {
        this.$emit("select", e);
      }
    }
  }, Yd = (e) => (um("data-v-db7a486d"), e = e(), cm(), e), xD = { class: "main-grid-table" }, RD = { class: "main-grid-header" }, CD = { class: "main-grid-row-head" }, LD = { class: "main-grid-cell-head main-grid-cell-left" }, VD = { class: "main-grid-cell-inner" }, PD = { class: "main-grid-cell-head-container" }, AD = { class: "main-grid-head-title" }, FD = /* @__PURE__ */ Yd(() => /* @__PURE__ */ _("span", { class: "main-grid-resize-button" }, null, -1)), zD = { class: "main-grid-cell-head main-grid-cell-left" }, YD = { class: "main-grid-cell-inner" }, UD = { class: "main-grid-cell-head-container" }, jD = { class: "main-grid-head-title" }, WD = /* @__PURE__ */ Yd(() => /* @__PURE__ */ _("span", { class: "main-grid-resize-button" }, null, -1)), HD = {
    class: "main-grid-cell-head main-grid-cell-left",
    style: { width: "1px" }
  }, BD = { class: "main-grid-cell-inner" }, qD = { class: "main-grid-cell-head-container" }, GD = { class: "main-grid-head-title" }, KD = { class: "main-grid-row main-grid-row-body main-grid-not-count" }, XD = {
    class: "main-grid-cell main-grid-cell-left",
    style: { width: "1px" }
  }, ZD = { class: "main-grid-cell-inner" }, JD = { class: "main-grid-cell-content" }, QD = { class: "main-grid-cell main-grid-cell-left" }, ew = { class: "main-grid-cell-inner" }, tw = { class: "main-grid-cell-content" }, nw = ["onClick", "title"], rw = { class: "main-grid-cell main-grid-cell-left" }, sw = { class: "main-grid-cell-inner" }, iw = { class: "main-grid-cell-content" };
  function ow(e, t, n, r, s, i) {
    return g(), v("table", xD, [
      _("thead", RD, [
        _("tr", CD, [
          _("th", LD, [
            _("div", VD, [
              _("span", PD, [
                _("span", AD, D(e.$t("list.id")), 1),
                FD
              ])
            ])
          ]),
          _("th", zD, [
            _("div", YD, [
              _("span", UD, [
                _("span", jD, D(e.$t("list.name")), 1),
                WD
              ])
            ])
          ]),
          _("th", HD, [
            _("div", BD, [
              _("span", qD, [
                _("span", GD, D(e.$t("list.count")), 1)
              ])
            ])
          ])
        ])
      ]),
      _("tbody", null, [
        (g(!0), v(C, null, _t(n.entities, (o) => (g(), v("tr", KD, [
          _("td", XD, [
            _("div", ZD, [
              _("span", JD, D(o.id), 1)
            ])
          ]),
          _("td", QD, [
            _("div", ew, [
              _("span", tw, [
                _("a", {
                  href: "#1",
                  onClick: Ce((a) => i.select({ id: o.id, type: o.entity_type }), ["prevent"]),
                  title: e.$t("list.editTitle")
                }, [
                  o.type_name ? (g(), v(C, { key: 0 }, [
                    G(D(o.type_name) + " / ", 1)
                  ], 64)) : z("", !0),
                  G(D(o.name), 1)
                ], 8, nw)
              ])
            ])
          ]),
          _("td", rw, [
            _("div", sw, [
              _("span", iw, D(o.count_rules), 1)
            ])
          ])
        ]))), 256))
      ])
    ]);
  }
  const aw = /* @__PURE__ */ ce(ID, [["render", ow], ["__scopeId", "data-v-db7a486d"]]), lw = {
    name: "List",
    components: { TableList: aw, Spinner: Wc },
    emits: ["select"],
    data() {
      return {
        loading: !0,
        entities: {}
      };
    },
    mounted() {
      this.load();
    },
    methods: {
      load() {
        Ro.getList().then((e) => {
          this.entities = e.data, this.loading = !1;
        });
      }
    }
  }, uw = { class: "spinner-container" }, cw = { key: 0 };
  function dw(e, t, n, r, s, i) {
    const o = Jn("TableList"), a = Jn("Spinner");
    return g(), v("div", uw, [
      s.loading ? z("", !0) : (g(), v("div", cw, [
        (g(!0), v(C, null, _t(s.entities, (l, u) => (g(), v(C, null, [
          _("h2", null, D(e.$t("list." + u)), 1),
          Ge(o, {
            entities: l,
            onSelect: t[0] || (t[0] = (f) => {
              e.$emit("select", f);
            })
          }, null, 8, ["entities"])
        ], 64))), 256))
      ])),
      Ge(a, { loading: s.loading }, null, 8, ["loading"])
    ]);
  }
  const fw = /* @__PURE__ */ ce(lw, [["render", dw]]), ir = Bh(Qh);
  ir.config.globalProperties.$scrollTop = (e) => {
    globalThis.intervalId = setInterval(() => {
      if (window.scrollY <= e) {
        clearInterval(globalThis.intervalId);
        return;
      }
      window.scroll(0, window.scrollY - 25);
    }, 20);
  };
  String.prototype.strtr = function(e) {
    const t = this.toString(), n = (i) => `{{###~${i}~###}}`, r = Object.keys(e).map((i, o) => ({
      key: i,
      val: e[i],
      token: n(o)
    })), s = r.reduce((i, o) => i.replace(new RegExp(o.key, "g"), o.token), t);
    return r.reduce((i, o) => i.replace(new RegExp(o.token, "g"), o.val), s);
  };
  ir.config.globalProperties.$toMomentFormat = (e) => {
    const t = {
      d: "DD",
      D: "ddd",
      j: "D",
      l: "dddd",
      N: "E",
      S: "o",
      w: "e",
      z: "DDD",
      W: "W",
      F: "MMMM",
      m: "MM",
      M: "MMM",
      n: "M",
      t: "",
      L: "",
      o: "YYYY",
      Y: "YYYY",
      y: "YY",
      a: "a",
      A: "A",
      B: "",
      g: "h",
      G: "H",
      h: "hh",
      H: "HH",
      i: "mm",
      s: "ss",
      u: "SSS",
      e: "zz",
      I: "",
      O: "",
      P: "",
      T: "",
      Z: "",
      c: "",
      r: "",
      U: "X"
    };
    return e.strtr(t);
  };
  ir.config.globalProperties.$right = document.getElementById("app").dataset.right;
  ir.component("Edit", SD);
  ir.component("List", fw);
  ir.use(A_);
  ir.mount("#app");
});
export default mw();
