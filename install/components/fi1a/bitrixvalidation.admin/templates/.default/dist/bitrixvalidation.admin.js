function zt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function bt(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ge(r) ? Sa(r) : bt(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else {
    if (ge(e))
      return e;
    if (ae(e))
      return e;
  }
}
const La = /;(?![^(]*\))/g, Aa = /:([^]+)/, ka = /\/\*.*?\*\//gs;
function Sa(e) {
  const t = {};
  return e.replace(ka, "").split(La).forEach((n) => {
    if (n) {
      const r = n.split(Aa);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Yo(e) {
  let t = "";
  if (ge(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const r = Yo(e[n]);
      r && (t += r + " ");
    }
  else if (ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ma = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Pa = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Fa = /* @__PURE__ */ zt(Ma), za = /* @__PURE__ */ zt(Pa), ja = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ua = /* @__PURE__ */ zt(ja);
function Ui(e) {
  return !!e || e === "";
}
function Ba(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ar(e[r], t[r]);
  return n;
}
function Ar(e, t) {
  if (e === t)
    return !0;
  let n = Rs(e), r = Rs(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = zn(e), r = zn(t), n || r)
    return e === t;
  if (n = W(e), r = W(t), n || r)
    return n && r ? Ba(e, t) : !1;
  if (n = ae(e), r = ae(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Ar(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ha(e, t) {
  return e.findIndex((n) => Ar(n, t));
}
const C = (e) => ge(e) ? e : e == null ? "" : W(e) || ae(e) && (e.toString === Wi || !G(e.toString)) ? JSON.stringify(e, Bi, 2) : String(e), Bi = (e, t) => t && t.__v_isRef ? Bi(e, t.value) : Xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : kr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ae(t) && !W(t) && !qi(t) ? String(t) : t, me = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, $n = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], we = () => {
}, Hi = () => !1, Wa = /^on[^a-z]/, Qn = (e) => Wa.test(e), $r = (e) => e.startsWith("onUpdate:"), ye = Object.assign, Xo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qa = Object.prototype.hasOwnProperty, ne = (e, t) => qa.call(e, t), W = Array.isArray, Xt = (e) => Zn(e) === "[object Map]", kr = (e) => Zn(e) === "[object Set]", Rs = (e) => Zn(e) === "[object Date]", G = (e) => typeof e == "function", ge = (e) => typeof e == "string", zn = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", Jo = (e) => ae(e) && G(e.then) && G(e.catch), Wi = Object.prototype.toString, Zn = (e) => Wi.call(e), Qo = (e) => Zn(e).slice(8, -1), qi = (e) => Zn(e) === "[object Object]", Zo = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fr = /* @__PURE__ */ zt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ka = /* @__PURE__ */ zt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Sr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ga = /-(\w)/g, _t = Sr((e) => e.replace(Ga, (t, n) => n ? n.toUpperCase() : "")), Ya = /\B([A-Z])/g, Pt = Sr((e) => e.replace(Ya, "-$1").toLowerCase()), rn = Sr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ht = Sr((e) => e ? `on${rn(e)}` : ""), jn = (e, t) => !Object.is(e, t), _n = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, yr = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xs;
const Ki = () => xs || (xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mo(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ct;
class Gi {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = ct, !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ct;
      try {
        return ct = this, t();
      } finally {
        ct = n;
      }
    } else
      ({}).NODE_ENV !== "production" && mo("cannot run an inactive effect scope.");
  }
  on() {
    ct = this;
  }
  off() {
    ct = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Xa(e) {
  return new Gi(e);
}
function Ja(e, t = ct) {
  t && t.active && t.effects.push(e);
}
const Bn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Yi = (e) => (e.w & Ft) > 0, Xi = (e) => (e.n & Ft) > 0, Qa = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ft;
}, Za = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Yi(o) && !Xi(o) ? o.delete(e) : t[n++] = o, o.w &= ~Ft, o.n &= ~Ft;
    }
    t.length = n;
  }
}, _o = /* @__PURE__ */ new WeakMap();
let kn = 0, Ft = 1;
const ho = 30;
let Fe;
const Jt = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), go = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class es {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ja(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Fe, n = St;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Fe, Fe = this, St = !0, Ft = 1 << ++kn, kn <= ho ? Qa(this) : Vs(this), this.fn();
    } finally {
      kn <= ho && Za(this), Ft = 1 << --kn, Fe = this.parent, St = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Fe === this ? this.deferStop = !0 : this.active && (Vs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let St = !0;
const Ji = [];
function un() {
  Ji.push(St), St = !1;
}
function cn() {
  const e = Ji.pop();
  St = e === void 0 ? !0 : e;
}
function qe(e, t, n) {
  if (St && Fe) {
    let r = _o.get(e);
    r || _o.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Bn());
    const s = {}.NODE_ENV !== "production" ? { effect: Fe, target: e, type: t, key: n } : void 0;
    vo(o, s);
  }
}
function vo(e, t) {
  let n = !1;
  kn <= ho ? Xi(e) || (e.n |= Ft, n = !Yi(e)) : n = !e.has(Fe), n && (e.add(Fe), Fe.deps.push(e), {}.NODE_ENV !== "production" && Fe.onTrack && Fe.onTrack(Object.assign({ effect: Fe }, t)));
}
function It(e, t, n, r, o, s) {
  const i = _o.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && W(e)) {
    const u = Un(r);
    i.forEach((f, d) => {
      (d === "length" || d >= u) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        W(e) ? Zo(n) && l.push(i.get("length")) : (l.push(i.get(Jt)), Xt(e) && l.push(i.get(go)));
        break;
      case "delete":
        W(e) || (l.push(i.get(Jt)), Xt(e) && l.push(i.get(go)));
        break;
      case "set":
        Xt(e) && l.push(i.get(Jt));
        break;
    }
  const a = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && ({}.NODE_ENV !== "production" ? gn(l[0], a) : gn(l[0]));
  else {
    const u = [];
    for (const f of l)
      f && u.push(...f);
    ({}).NODE_ENV !== "production" ? gn(Bn(u), a) : gn(Bn(u));
  }
}
function gn(e, t) {
  const n = W(e) ? e : [...e];
  for (const r of n)
    r.computed && Ls(r, t);
  for (const r of n)
    r.computed || Ls(r, t);
}
function Ls(e, t) {
  (e !== Fe || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ye({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const eu = /* @__PURE__ */ zt("__proto__,__v_isRef,__isVue"), Qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zn)
), tu = /* @__PURE__ */ Mr(), nu = /* @__PURE__ */ Mr(!1, !0), ru = /* @__PURE__ */ Mr(!0), ou = /* @__PURE__ */ Mr(!0, !0), As = /* @__PURE__ */ su();
function su() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Q(this);
      for (let s = 0, i = this.length; s < i; s++)
        qe(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(Q)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      un();
      const r = Q(this)[t].apply(this, n);
      return cn(), r;
    };
  }), e;
}
function Mr(e = !1, t = !1) {
  return function(r, o, s) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && s === (e ? t ? il : sl : t ? ol : rl).get(r))
      return r;
    const i = W(r);
    if (!e && i && ne(As, o))
      return Reflect.get(As, o, s);
    const l = Reflect.get(r, o, s);
    return (zn(o) ? Qi.has(o) : eu(o)) || (e || qe(r, "get", o), t) ? l : Ee(l) ? i && Zo(o) ? l : l.value : ae(l) ? e ? ll(l) : Tn(l) : l;
  };
}
const iu = /* @__PURE__ */ Zi(), lu = /* @__PURE__ */ Zi(!0);
function Zi(e = !1) {
  return function(n, r, o, s) {
    let i = n[r];
    if (Dt(i) && Ee(i) && !Ee(o))
      return !1;
    if (!e && (!br(o) && !Dt(o) && (i = Q(i), o = Q(o)), !W(n) && Ee(i) && !Ee(o)))
      return i.value = o, !0;
    const l = W(n) && Zo(r) ? Number(r) < n.length : ne(n, r), a = Reflect.set(n, r, o, s);
    return n === Q(s) && (l ? jn(o, i) && It(n, "set", r, o, i) : It(n, "add", r, o)), a;
  };
}
function au(e, t) {
  const n = ne(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && It(e, "delete", t, void 0, r), o;
}
function uu(e, t) {
  const n = Reflect.has(e, t);
  return (!zn(t) || !Qi.has(t)) && qe(e, "has", t), n;
}
function cu(e) {
  return qe(e, "iterate", W(e) ? "length" : Jt), Reflect.ownKeys(e);
}
const el = {
  get: tu,
  set: iu,
  deleteProperty: au,
  has: uu,
  ownKeys: cu
}, tl = {
  get: ru,
  set(e, t) {
    return {}.NODE_ENV !== "production" && mo(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && mo(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, du = /* @__PURE__ */ ye({}, el, {
  get: nu,
  set: lu
}), fu = /* @__PURE__ */ ye({}, tl, {
  get: ou
}), ts = (e) => e, Pr = (e) => Reflect.getPrototypeOf(e);
function sr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Q(e), s = Q(t);
  n || (t !== s && qe(o, "get", t), qe(o, "get", s));
  const { has: i } = Pr(o), l = r ? ts : n ? ns : Hn;
  if (i.call(o, t))
    return l(e.get(t));
  if (i.call(o, s))
    return l(e.get(s));
  e !== o && e.get(t);
}
function ir(e, t = !1) {
  const n = this.__v_raw, r = Q(n), o = Q(e);
  return t || (e !== o && qe(r, "has", e), qe(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function lr(e, t = !1) {
  return e = e.__v_raw, !t && qe(Q(e), "iterate", Jt), Reflect.get(e, "size", e);
}
function ks(e) {
  e = Q(e);
  const t = Q(this);
  return Pr(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this;
}
function Ss(e, t) {
  t = Q(t);
  const n = Q(this), { has: r, get: o } = Pr(n);
  let s = r.call(n, e);
  s ? {}.NODE_ENV !== "production" && nl(n, r, e) : (e = Q(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? jn(t, i) && It(n, "set", e, t, i) : It(n, "add", e, t), this;
}
function Ms(e) {
  const t = Q(this), { has: n, get: r } = Pr(t);
  let o = n.call(t, e);
  o ? {}.NODE_ENV !== "production" && nl(t, n, e) : (e = Q(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && It(t, "delete", e, void 0, s), i;
}
function Ps() {
  const e = Q(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Xt(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && It(e, "clear", void 0, void 0, n), r;
}
function ar(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, l = Q(i), a = t ? ts : e ? ns : Hn;
    return !e && qe(l, "iterate", Jt), i.forEach((u, f) => r.call(o, a(u), a(f), s));
  };
}
function ur(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = Q(o), i = Xt(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...r), f = n ? ts : t ? ns : Hn;
    return !t && qe(s, "iterate", a ? go : Jt), {
      next() {
        const { value: d, done: p } = u.next();
        return p ? { value: d, done: p } : {
          value: l ? [f(d[0]), f(d[1])] : f(d),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vt(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${rn(e)} operation ${n}failed: target is readonly.`, Q(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function pu() {
  const e = {
    get(s) {
      return sr(this, s);
    },
    get size() {
      return lr(this);
    },
    has: ir,
    add: ks,
    set: Ss,
    delete: Ms,
    clear: Ps,
    forEach: ar(!1, !1)
  }, t = {
    get(s) {
      return sr(this, s, !1, !0);
    },
    get size() {
      return lr(this);
    },
    has: ir,
    add: ks,
    set: Ss,
    delete: Ms,
    clear: Ps,
    forEach: ar(!1, !0)
  }, n = {
    get(s) {
      return sr(this, s, !0);
    },
    get size() {
      return lr(this, !0);
    },
    has(s) {
      return ir.call(this, s, !0);
    },
    add: Vt("add"),
    set: Vt("set"),
    delete: Vt("delete"),
    clear: Vt("clear"),
    forEach: ar(!0, !1)
  }, r = {
    get(s) {
      return sr(this, s, !0, !0);
    },
    get size() {
      return lr(this, !0);
    },
    has(s) {
      return ir.call(this, s, !0);
    },
    add: Vt("add"),
    set: Vt("set"),
    delete: Vt("delete"),
    clear: Vt("clear"),
    forEach: ar(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = ur(s, !1, !1), n[s] = ur(s, !0, !1), t[s] = ur(s, !1, !0), r[s] = ur(s, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
const [mu, _u, hu, gu] = /* @__PURE__ */ pu();
function Fr(e, t) {
  const n = t ? e ? gu : hu : e ? _u : mu;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ne(n, o) && o in r ? n : r, o, s);
}
const vu = {
  get: /* @__PURE__ */ Fr(!1, !1)
}, Eu = {
  get: /* @__PURE__ */ Fr(!1, !0)
}, $u = {
  get: /* @__PURE__ */ Fr(!0, !1)
}, yu = {
  get: /* @__PURE__ */ Fr(!0, !0)
};
function nl(e, t, n) {
  const r = Q(n);
  if (r !== n && t.call(e, r)) {
    const o = Qo(e);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const rl = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap();
function bu(e) {
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
function Nu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bu(Qo(e));
}
function Tn(e) {
  return Dt(e) ? e : zr(e, !1, el, vu, rl);
}
function Ou(e) {
  return zr(e, !1, du, Eu, ol);
}
function ll(e) {
  return zr(e, !0, tl, $u, sl);
}
function vn(e) {
  return zr(e, !0, fu, yu, il);
}
function zr(e, t, n, r, o) {
  if (!ae(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Nu(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function Mt(e) {
  return Dt(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dt(e) {
  return !!(e && e.__v_isReadonly);
}
function br(e) {
  return !!(e && e.__v_isShallow);
}
function Eo(e) {
  return Mt(e) || Dt(e);
}
function Q(e) {
  const t = e && e.__v_raw;
  return t ? Q(t) : e;
}
function al(e) {
  return yr(e, "__v_skip", !0), e;
}
const Hn = (e) => ae(e) ? Tn(e) : e, ns = (e) => ae(e) ? ll(e) : e;
function ul(e) {
  St && Fe && (e = Q(e), {}.NODE_ENV !== "production" ? vo(e.dep || (e.dep = Bn()), {
    target: e,
    type: "get",
    key: "value"
  }) : vo(e.dep || (e.dep = Bn())));
}
function cl(e, t) {
  e = Q(e), e.dep && ({}.NODE_ENV !== "production" ? gn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : gn(e.dep));
}
function Ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ve(e) {
  return Tu(e, !1);
}
function Tu(e, t) {
  return Ee(e) ? e : new Iu(e, t);
}
class Iu {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Q(t), this._value = n ? t : Hn(t);
  }
  get value() {
    return ul(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || br(t) || Dt(t);
    t = n ? t : Q(t), jn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Hn(t), cl(this, t));
  }
}
function ie(e) {
  return Ee(e) ? e.value : e;
}
const Du = {
  get: (e, t, n) => ie(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Ee(o) && !Ee(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function dl(e) {
  return Mt(e) ? e : new Proxy(e, Du);
}
var fl;
class wu {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[fl] = !1, this._dirty = !0, this.effect = new es(t, () => {
      this._dirty || (this._dirty = !0, cl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Q(this);
    return ul(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
fl = "__v_isReadonly";
function Cu(e, t, n = !1) {
  let r, o;
  const s = G(e);
  s ? (r = e, o = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : we) : (r = e.get, o = e.set);
  const i = new wu(r, o, s || !o, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Qt = [];
function pr(e) {
  Qt.push(e);
}
function mr() {
  Qt.pop();
}
function x(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  un();
  const n = Qt.length ? Qt[Qt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Ru();
  if (r)
    Ot(r, n, 11, [
      e + t.join(""),
      n && n.proxy,
      o.map(({ vnode: s }) => `at <${Gr(n, s.type)}>`).join(`
`),
      o
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...xu(o)), console.warn(...s);
  }
  cn();
}
function Ru() {
  let e = Qt[Qt.length - 1];
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
function xu(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Vu(n));
  }), t;
}
function Vu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Gr(e.component, e.type, r)}`, s = ">" + n;
  return e.props ? [o, ...Lu(e.props), s] : [o + s];
}
function Lu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...pl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function pl(e, t, n) {
  return ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ee(t) ? (t = pl(e, Q(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Q(t), n ? t : [`${e}=`, t]);
}
const rs = {
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
function Ot(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    jr(s, t, n);
  }
  return o;
}
function tt(e, t, n, r) {
  if (G(e)) {
    const s = Ot(e, t, n, r);
    return s && Jo(s) && s.catch((i) => {
      jr(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(tt(e[s], t, n, r));
  return o;
}
function jr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = {}.NODE_ENV !== "production" ? rs[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Ot(a, null, 10, [e, i, l]);
      return;
    }
  }
  Au(e, n, o, r);
}
function Au(e, t, n, r = !0) {
  if ({}.NODE_ENV !== "production") {
    const o = rs[t];
    if (n && pr(n), x(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && mr(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Wn = !1, $o = !1;
const Le = [];
let pt = 0;
const yn = [];
let dt = null, Lt = 0;
const ml = /* @__PURE__ */ Promise.resolve();
let os = null;
const ku = 100;
function yo(e) {
  const t = os || ml;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Su(e) {
  let t = pt + 1, n = Le.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    qn(Le[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Ur(e) {
  (!Le.length || !Le.includes(e, Wn && e.allowRecurse ? pt + 1 : pt)) && (e.id == null ? Le.push(e) : Le.splice(Su(e.id), 0, e), _l());
}
function _l() {
  !Wn && !$o && ($o = !0, os = ml.then(vl));
}
function Mu(e) {
  const t = Le.indexOf(e);
  t > pt && Le.splice(t, 1);
}
function hl(e) {
  W(e) ? yn.push(...e) : (!dt || !dt.includes(e, e.allowRecurse ? Lt + 1 : Lt)) && yn.push(e), _l();
}
function Fs(e, t = Wn ? pt + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Le.length; t++) {
    const n = Le[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && ss(e, n))
        continue;
      Le.splice(t, 1), t--, n();
    }
  }
}
function gl(e) {
  if (yn.length) {
    const t = [...new Set(yn)];
    if (yn.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), dt.sort((n, r) => qn(n) - qn(r)), Lt = 0; Lt < dt.length; Lt++)
      ({}).NODE_ENV !== "production" && ss(e, dt[Lt]) || dt[Lt]();
    dt = null, Lt = 0;
  }
}
const qn = (e) => e.id == null ? 1 / 0 : e.id, Pu = (e, t) => {
  const n = qn(e) - qn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function vl(e) {
  $o = !1, Wn = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(Pu);
  const t = {}.NODE_ENV !== "production" ? (n) => ss(e, n) : we;
  try {
    for (pt = 0; pt < Le.length; pt++) {
      const n = Le[pt];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        Ot(n, null, 14);
      }
    }
  } finally {
    pt = 0, Le.length = 0, gl(e), Wn = !1, os = null, (Le.length || yn.length) && vl(e);
  }
}
function ss(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ku) {
      const r = t.ownerInstance, o = r && ms(r.type);
      return x(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Zt = !1;
const hn = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Ki().__VUE_HMR_RUNTIME__ = {
  createRecord: no(El),
  rerender: no(ju),
  reload: no(Uu)
});
const on = /* @__PURE__ */ new Map();
function Fu(e) {
  const t = e.type.__hmrId;
  let n = on.get(t);
  n || (El(t, e.type), n = on.get(t)), n.instances.add(e);
}
function zu(e) {
  on.get(e.type.__hmrId).instances.delete(e);
}
function El(e, t) {
  return on.has(e) ? !1 : (on.set(e, {
    initialDef: Mn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mn(e) {
  return Xl(e) ? e.__vccOpts : e;
}
function ju(e, t) {
  const n = on.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Mn(r.type).render = t), r.renderCache = [], Zt = !0, r.update(), Zt = !1;
  }));
}
function Uu(e, t) {
  const n = on.get(e);
  if (!n)
    return;
  t = Mn(t), zs(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = Mn(o.type);
    hn.has(s) || (s !== n.initialDef && zs(s, t), hn.add(s)), o.appContext.optionsCache.delete(o.type), o.ceReload ? (hn.add(s), o.ceReload(t.styles), hn.delete(s)) : o.parent ? Ur(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  hl(() => {
    for (const o of r)
      hn.delete(Mn(o.type));
  });
}
function zs(e, t) {
  ye(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function no(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let mt, Sn = [], bo = !1;
function er(e, ...t) {
  mt ? mt.emit(e, ...t) : bo || Sn.push({ event: e, args: t });
}
function $l(e, t) {
  var n, r;
  mt = e, mt ? (mt.enabled = !0, Sn.forEach(({ event: o, args: s }) => mt.emit(o, ...s)), Sn = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    $l(s, t);
  }), setTimeout(() => {
    mt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, bo = !0, Sn = []);
  }, 3e3)) : (bo = !0, Sn = []);
}
function Bu(e, t) {
  er("app:init", e, t, {
    Fragment: M,
    Text: In,
    Comment: Re,
    Static: gr
  });
}
function Hu(e) {
  er("app:unmount", e);
}
const Wu = /* @__PURE__ */ is("component:added"), yl = /* @__PURE__ */ is("component:updated"), qu = /* @__PURE__ */ is("component:removed"), Ku = (e) => {
  mt && typeof mt.cleanupBuffer == "function" && !mt.cleanupBuffer(e) && qu(e);
};
function is(e) {
  return (t) => {
    er(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Gu = /* @__PURE__ */ bl("perf:start"), Yu = /* @__PURE__ */ bl("perf:end");
function bl(e) {
  return (t, n, r) => {
    er(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Xu(e, t, n) {
  er("component:emit", e.appContext.app, e, t, n);
}
function Ju(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || me;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: f, propsOptions: [d] } = e;
    if (f)
      if (!(t in f))
        (!d || !(Ht(t) in d)) && x(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ht(t)}" prop.`);
      else {
        const p = f[t];
        G(p) && (p(...n) || x(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: p } = r[f] || me;
    p && (o = n.map(($) => ge($) ? $.trim() : $)), d && (o = n.map(Un));
  }
  if ({}.NODE_ENV !== "production" && Xu(e, t, o), {}.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && r[Ht(f)] && x(`Event "${f}" is emitted in component ${Gr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pt(t)}" instead of "${t}".`);
  }
  let l, a = r[l = Ht(t)] || r[l = Ht(_t(t))];
  !a && s && (a = r[l = Ht(Pt(t))]), a && tt(a, e, 6, o);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, tt(u, e, 6, o);
  }
}
function Nl(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!G(e)) {
    const a = (u) => {
      const f = Nl(u, t, !0);
      f && (l = !0, ye(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ae(e) && r.set(e, null), null) : (W(s) ? s.forEach((a) => i[a] = null) : ye(i, s), ae(e) && r.set(e, i), i);
}
function Br(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Pt(t)) || ne(e, t));
}
let ze = null, Hr = null;
function Nr(e) {
  const t = ze;
  return ze = e, Hr = e && e.type.__scopeId || null, t;
}
function Qu(e) {
  Hr = e;
}
function Zu() {
  Hr = null;
}
function ec(e, t = ze, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Qs(-1);
    const s = Nr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Nr(s), r._d && Qs(1);
    }
    return {}.NODE_ENV !== "production" && yl(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let No = !1;
function Or() {
  No = !0;
}
function ro(e) {
  const { type: t, vnode: n, proxy: r, withProxy: o, props: s, propsOptions: [i], slots: l, attrs: a, emit: u, render: f, renderCache: d, data: p, setupState: $, ctx: g, inheritAttrs: N } = e;
  let w, k;
  const P = Nr(e);
  ({}).NODE_ENV !== "production" && (No = !1);
  try {
    if (n.shapeFlag & 4) {
      const D = o || r;
      w = ot(f.call(D, D, d, s, $, p, g)), k = a;
    } else {
      const D = t;
      ({}).NODE_ENV !== "production" && a === s && Or(), w = ot(D.length > 1 ? D(s, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Or(), a;
        },
        slots: l,
        emit: u
      } : { attrs: a, slots: l, emit: u }) : D(s, null)), k = t.props ? a : nc(a);
    }
  } catch (D) {
    Pn.length = 0, jr(D, e, 1), w = Ce(Re);
  }
  let B = w, A;
  if ({}.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && ([B, A] = tc(w)), k && N !== !1) {
    const D = Object.keys(k), { shapeFlag: J } = B;
    if (D.length) {
      if (J & 7)
        i && D.some($r) && (k = rc(k, i)), B = ht(B, k);
      else if ({}.NODE_ENV !== "production" && !No && B.type !== Re) {
        const K = Object.keys(a), H = [], Y = [];
        for (let ee = 0, le = K.length; ee < le; ee++) {
          const he = K[ee];
          Qn(he) ? $r(he) || H.push(he[2].toLowerCase() + he.slice(3)) : Y.push(he);
        }
        Y.length && x(`Extraneous non-props attributes (${Y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), H.length && x(`Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !js(B) && x("Runtime directive used on component with non-element root node. The directives will not function as intended."), B = ht(B), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !js(B) && x("Component inside <Transition> renders non-element root node that cannot be animated."), B.transition = n.transition), {}.NODE_ENV !== "production" && A ? A(B) : w = B, Nr(P), w;
}
const tc = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Ol(t);
  if (!r)
    return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ot(r), i];
};
function Ol(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Gn(r)) {
      if (r.type !== Re || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
const nc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rc = (e, t) => {
  const n = {};
  for (const r in e)
    (!$r(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, js = (e) => e.shapeFlag & 7 || e.type === Re;
function oc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if ({}.NODE_ENV !== "production" && (o || l) && Zt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Us(r, i, u) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        const p = f[d];
        if (i[p] !== r[p] && !Br(u, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Us(r, i, u) : !0 : !!i;
  return !1;
}
function Us(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Br(n, s))
      return !0;
  }
  return !1;
}
function sc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const ic = (e) => e.__isSuspense;
function lc(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : hl(e);
}
function Oo(e, t) {
  if (!Ne)
    ({}).NODE_ENV !== "production" && x("provide() can only be used inside setup().");
  else {
    let n = Ne.provides;
    const r = Ne.parent && Ne.parent.provides;
    r === n && (n = Ne.provides = Object.create(r)), n[e] = t;
  }
}
function en(e, t, n = !1) {
  const r = Ne || ze;
  if (r) {
    const o = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(r.proxy) : t;
    ({}).NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const cr = {};
function it(e, t, n) {
  return {}.NODE_ENV !== "production" && !G(t) && x("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Tl(e, t, n);
}
function Tl(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = me) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && x('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && x('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (A) => {
    x("Invalid watch source: ", A, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Ne;
  let u, f = !1, d = !1;
  if (Ee(e) ? (u = () => e.value, f = br(e)) : Mt(e) ? (u = () => e, r = !0) : W(e) ? (d = !0, f = e.some((A) => Mt(A) || br(A)), u = () => e.map((A) => {
    if (Ee(A))
      return A.value;
    if (Mt(A))
      return Yt(A);
    if (G(A))
      return Ot(A, a, 2);
    ({}).NODE_ENV !== "production" && l(A);
  })) : G(e) ? t ? u = () => Ot(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return p && p(), tt(e, a, 3, [$]);
  } : (u = we, {}.NODE_ENV !== "production" && l(e)), t && r) {
    const A = u;
    u = () => Yt(A());
  }
  let p, $ = (A) => {
    p = P.onStop = () => {
      Ot(A, a, 4);
    };
  }, g;
  if (Yn)
    if ($ = we, t ? n && tt(t, a, 3, [
      u(),
      d ? [] : void 0,
      $
    ]) : u(), o === "sync") {
      const A = ud();
      g = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return we;
  let N = d ? new Array(e.length).fill(cr) : cr;
  const w = () => {
    if (!!P.active)
      if (t) {
        const A = P.run();
        (r || f || (d ? A.some((D, J) => jn(D, N[J])) : jn(A, N))) && (p && p(), tt(t, a, 3, [
          A,
          N === cr ? void 0 : d && N[0] === cr ? [] : N,
          $
        ]), N = A);
      } else
        P.run();
  };
  w.allowRecurse = !!t;
  let k;
  o === "sync" ? k = w : o === "post" ? k = () => We(w, a && a.suspense) : (w.pre = !0, a && (w.id = a.uid), k = () => Ur(w));
  const P = new es(u, k);
  ({}).NODE_ENV !== "production" && (P.onTrack = s, P.onTrigger = i), t ? n ? w() : N = P.run() : o === "post" ? We(P.run.bind(P), a && a.suspense) : P.run();
  const B = () => {
    P.stop(), a && a.scope && Xo(a.scope.effects, P);
  };
  return g && g.push(B), B;
}
function ac(e, t, n) {
  const r = this.proxy, o = ge(e) ? e.includes(".") ? Il(r, e) : () => r[e] : e.bind(r, r);
  let s;
  G(t) ? s = t : (s = t.handler, n = t);
  const i = Ne;
  bn(this);
  const l = Tl(o, s.bind(r), n);
  return i ? bn(i) : nn(), l;
}
function Il(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Yt(e, t) {
  if (!ae(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ee(e))
    Yt(e.value, t);
  else if (W(e))
    for (let n = 0; n < e.length; n++)
      Yt(e[n], t);
  else if (kr(e) || Xt(e))
    e.forEach((n) => {
      Yt(n, t);
    });
  else if (qi(e))
    for (const n in e)
      Yt(e[n], t);
  return e;
}
function uc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ls(() => {
    e.isMounted = !0;
  }), as(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], cc = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: et,
    onEnter: et,
    onAfterEnter: et,
    onEnterCancelled: et,
    onBeforeLeave: et,
    onLeave: et,
    onAfterLeave: et,
    onLeaveCancelled: et,
    onBeforeAppear: et,
    onAppear: et,
    onAfterAppear: et,
    onAppearCancelled: et
  },
  setup(e, { slots: t }) {
    const n = nr(), r = uc();
    let o;
    return () => {
      const s = t.default && wl(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let N = !1;
        for (const w of s)
          if (w.type !== Re) {
            if ({}.NODE_ENV !== "production" && N) {
              x("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = w, N = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const l = Q(e), { mode: a } = l;
      if ({}.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && x(`invalid <transition> mode: ${a}`), r.isLeaving)
        return oo(i);
      const u = Bs(i);
      if (!u)
        return oo(i);
      const f = To(u, l, r, n);
      Io(u, f);
      const d = n.subTree, p = d && Bs(d);
      let $ = !1;
      const { getTransitionKey: g } = u.type;
      if (g) {
        const N = g();
        o === void 0 ? o = N : N !== o && (o = N, $ = !0);
      }
      if (p && p.type !== Re && (!qt(u, p) || $)) {
        const N = To(p, l, r, n);
        if (Io(p, N), a === "out-in")
          return r.isLeaving = !0, N.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, oo(i);
        a === "in-out" && u.type !== Re && (N.delayLeave = (w, k, P) => {
          const B = Dl(r, p);
          B[String(p.key)] = p, w._leaveCb = () => {
            k(), w._leaveCb = void 0, delete f.delayedLeave;
          }, f.delayedLeave = P;
        });
      }
      return i;
    };
  }
}, dc = cc;
function Dl(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function To(e, t, n, r) {
  const { appear: o, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: d, onLeave: p, onAfterLeave: $, onLeaveCancelled: g, onBeforeAppear: N, onAppear: w, onAfterAppear: k, onAppearCancelled: P } = t, B = String(e.key), A = Dl(n, e), D = (H, Y) => {
    H && tt(H, r, 9, Y);
  }, J = (H, Y) => {
    const ee = Y[1];
    D(H, Y), W(H) ? H.every((le) => le.length <= 1) && ee() : H.length <= 1 && ee();
  }, K = {
    mode: s,
    persisted: i,
    beforeEnter(H) {
      let Y = l;
      if (!n.isMounted)
        if (o)
          Y = N || l;
        else
          return;
      H._leaveCb && H._leaveCb(!0);
      const ee = A[B];
      ee && qt(e, ee) && ee.el._leaveCb && ee.el._leaveCb(), D(Y, [H]);
    },
    enter(H) {
      let Y = a, ee = u, le = f;
      if (!n.isMounted)
        if (o)
          Y = w || a, ee = k || u, le = P || f;
        else
          return;
      let he = !1;
      const Oe = H._enterCb = (Rt) => {
        he || (he = !0, Rt ? D(le, [H]) : D(ee, [H]), K.delayedLeave && K.delayedLeave(), H._enterCb = void 0);
      };
      Y ? J(Y, [H, Oe]) : Oe();
    },
    leave(H, Y) {
      const ee = String(e.key);
      if (H._enterCb && H._enterCb(!0), n.isUnmounting)
        return Y();
      D(d, [H]);
      let le = !1;
      const he = H._leaveCb = (Oe) => {
        le || (le = !0, Y(), Oe ? D(g, [H]) : D($, [H]), H._leaveCb = void 0, A[ee] === e && delete A[ee]);
      };
      A[ee] = e, p ? J(p, [H, he]) : he();
    },
    clone(H) {
      return To(H, t, n, r);
    }
  };
  return K;
}
function oo(e) {
  if (tr(e))
    return e = ht(e), e.children = null, e;
}
function Bs(e) {
  return tr(e) ? e.children ? e.children[0] : void 0 : e;
}
function Io(e, t) {
  e.shapeFlag & 6 && e.component ? Io(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wl(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === M ? (i.patchFlag & 128 && o++, r = r.concat(wl(i.children, t, l))) : (t || i.type !== Re) && r.push(l != null ? ht(i, { key: l }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
const _r = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function fc(e, t) {
  Cl(e, "a", t);
}
function pc(e, t) {
  Cl(e, "da", t);
}
function Cl(e, t, n = Ne) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Wr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      tr(o.parent.vnode) && mc(r, t, n, o), o = o.parent;
  }
}
function mc(e, t, n, r) {
  const o = Wr(t, e, r, !0);
  us(() => {
    Xo(r[t], o);
  }, n);
}
function Wr(e, t, n = Ne, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      un(), bn(n);
      const l = tt(t, n, e, i);
      return nn(), cn(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if ({}.NODE_ENV !== "production") {
    const o = Ht(rs[e].replace(/ hook$/, ""));
    x(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ct = (e) => (t, n = Ne) => (!Yn || e === "sp") && Wr(e, (...r) => t(...r), n), Rl = Ct("bm"), ls = Ct("m"), _c = Ct("bu"), hc = Ct("u"), as = Ct("bum"), us = Ct("um"), gc = Ct("sp"), vc = Ct("rtg"), Ec = Ct("rtc");
function $c(e, t = Ne) {
  Wr("ec", e, t);
}
function xl(e) {
  Ka(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function Tt(e, t) {
  const n = ze;
  if (n === null)
    return {}.NODE_ENV !== "production" && x("withDirectives can only be used inside render functions."), e;
  const r = Kr(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, u = me] = t[s];
    i && (G(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Yt(l), o.push({
      dir: i,
      instance: r,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return e;
}
function Ut(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (un(), tt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), cn());
  }
}
const Tr = "components";
function sn(e, t) {
  return Ll(Tr, e, !0, t) || e;
}
const Vl = Symbol();
function yc(e) {
  return ge(e) ? Ll(Tr, e, !1) || e : e || Vl;
}
function Ll(e, t, n = !0, r = !1) {
  const o = ze || Ne;
  if (o) {
    const s = o.type;
    if (e === Tr) {
      const l = ms(s, !1);
      if (l && (l === t || l === _t(t) || l === rn(_t(t))))
        return s;
    }
    const i = Hs(o[e] || s[e], t) || Hs(o.appContext[e], t);
    if (!i && r)
      return s;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const l = e === Tr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      x(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && x(`resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Hs(e, t) {
  return e && (e[t] || e[_t(t)] || e[rn(_t(t))]);
}
function Xe(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (W(e) || ge(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && x(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (ae(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
const Do = (e) => e ? Kl(e) ? Kr(e) || e.proxy : Do(e.parent) : null, tn = /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => ({}).NODE_ENV !== "production" ? vn(e.props) : e.props,
  $attrs: (e) => ({}).NODE_ENV !== "production" ? vn(e.attrs) : e.attrs,
  $slots: (e) => ({}).NODE_ENV !== "production" ? vn(e.slots) : e.slots,
  $refs: (e) => ({}).NODE_ENV !== "production" ? vn(e.refs) : e.refs,
  $parent: (e) => Do(e.parent),
  $root: (e) => Do(e.root),
  $emit: (e) => e.emit,
  $options: (e) => ds(e),
  $forceUpdate: (e) => e.f || (e.f = () => Ur(e.update)),
  $nextTick: (e) => e.n || (e.n = yo.bind(e.proxy)),
  $watch: (e) => ac.bind(e)
}), cs = (e) => e === "_" || e === "$", so = (e, t) => e !== me && !e.__isScriptSetup && ne(e, t), Al = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const $ = i[t];
      if ($ !== void 0)
        switch ($) {
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
        if (so(r, t))
          return i[t] = 1, r[t];
        if (o !== me && ne(o, t))
          return i[t] = 2, o[t];
        if ((u = e.propsOptions[0]) && ne(u, t))
          return i[t] = 3, s[t];
        if (n !== me && ne(n, t))
          return i[t] = 4, n[t];
        wo && (i[t] = 0);
      }
    }
    const f = tn[t];
    let d, p;
    if (f)
      return t === "$attrs" && (qe(e, "get", t), {}.NODE_ENV !== "production" && Or()), f(e);
    if ((d = l.__cssModules) && (d = d[t]))
      return d;
    if (n !== me && ne(n, t))
      return i[t] = 4, n[t];
    if (p = a.config.globalProperties, ne(p, t))
      return p[t];
    ({}).NODE_ENV !== "production" && ze && (!ge(t) || t.indexOf("__v") !== 0) && (o !== me && cs(t[0]) && ne(o, t) ? x(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ze && x(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return so(o, t) ? (o[t] = n, !0) : {}.NODE_ENV !== "production" && o.__isScriptSetup && ne(o, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== me && ne(r, t) ? (r[t] = n, !0) : ne(e.props, t) ? ({}.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && x(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== me && ne(e, i) || so(t, i) || (l = s[0]) && ne(l, i) || ne(r, i) || ne(tn, i) || ne(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (Al.ownKeys = (e) => (x("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function bc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(tn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => tn[n](e),
      set: we
    });
  }), t;
}
function Nc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: we
    });
  });
}
function Oc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Q(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (cs(r[0])) {
        x(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: we
      });
    }
  });
}
function Tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let wo = !0;
function Ic(e) {
  const t = ds(e), n = e.proxy, r = e.ctx;
  wo = !1, t.beforeCreate && Ws(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: f,
    beforeMount: d,
    mounted: p,
    beforeUpdate: $,
    updated: g,
    activated: N,
    deactivated: w,
    beforeDestroy: k,
    beforeUnmount: P,
    destroyed: B,
    unmounted: A,
    render: D,
    renderTracked: J,
    renderTriggered: K,
    errorCaptured: H,
    serverPrefetch: Y,
    expose: ee,
    inheritAttrs: le,
    components: he,
    directives: Oe,
    filters: Rt
  } = t, Ze = {}.NODE_ENV !== "production" ? Tc() : null;
  if ({}.NODE_ENV !== "production") {
    const [te] = e.propsOptions;
    if (te)
      for (const X in te)
        Ze("Props", X);
  }
  if (u && Dc(u, r, Ze, e.appContext.config.unwrapInjectedRef), i)
    for (const te in i) {
      const X = i[te];
      G(X) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(r, te, {
        value: X.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[te] = X.bind(n), {}.NODE_ENV !== "production" && Ze("Methods", te)) : {}.NODE_ENV !== "production" && x(`Method "${te}" has type "${typeof X}" in the component definition. Did you reference the function correctly?`);
    }
  if (o) {
    ({}).NODE_ENV !== "production" && !G(o) && x("The data option must be a function. Plain object usage is no longer supported.");
    const te = o.call(n, n);
    if ({}.NODE_ENV !== "production" && Jo(te) && x("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ae(te))
      ({}).NODE_ENV !== "production" && x("data() should return an object.");
    else if (e.data = Tn(te), {}.NODE_ENV !== "production")
      for (const X in te)
        Ze("Data", X), cs(X[0]) || Object.defineProperty(r, X, {
          configurable: !0,
          enumerable: !0,
          get: () => te[X],
          set: we
        });
  }
  if (wo = !0, s)
    for (const te in s) {
      const X = s[te], ke = G(X) ? X.bind(n, n) : G(X.get) ? X.get.bind(n, n) : we;
      ({}).NODE_ENV !== "production" && ke === we && x(`Computed property "${te}" has no getter.`);
      const _e = !G(X) && G(X.set) ? X.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        x(`Write operation failed: computed property "${te}" is readonly.`);
      } : we, Se = ue({
        get: ke,
        set: _e
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (De) => Se.value = De
      }), {}.NODE_ENV !== "production" && Ze("Computed", te);
    }
  if (l)
    for (const te in l)
      kl(l[te], r, n, te);
  if (a) {
    const te = G(a) ? a.call(n) : a;
    Reflect.ownKeys(te).forEach((X) => {
      Oo(X, te[X]);
    });
  }
  f && Ws(f, e, "c");
  function be(te, X) {
    W(X) ? X.forEach((ke) => te(ke.bind(n))) : X && te(X.bind(n));
  }
  if (be(Rl, d), be(ls, p), be(_c, $), be(hc, g), be(fc, N), be(pc, w), be($c, H), be(Ec, J), be(vc, K), be(as, P), be(us, A), be(gc, Y), W(ee))
    if (ee.length) {
      const te = e.exposed || (e.exposed = {});
      ee.forEach((X) => {
        Object.defineProperty(te, X, {
          get: () => n[X],
          set: (ke) => n[X] = ke
        });
      });
    } else
      e.exposed || (e.exposed = {});
  D && e.render === we && (e.render = D), le != null && (e.inheritAttrs = le), he && (e.components = he), Oe && (e.directives = Oe);
}
function Dc(e, t, n = we, r = !1) {
  W(e) && (e = Co(e));
  for (const o in e) {
    const s = e[o];
    let i;
    ae(s) ? "default" in s ? i = en(s.from || o, s.default, !0) : i = en(s.from || o) : i = en(s), Ee(i) ? r ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : ({}.NODE_ENV !== "production" && x(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[o] = i) : t[o] = i, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ws(e, t, n) {
  tt(W(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function kl(e, t, n, r) {
  const o = r.includes(".") ? Il(n, r) : () => n[r];
  if (ge(e)) {
    const s = t[e];
    G(s) ? it(o, s) : {}.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, s);
  } else if (G(e))
    it(o, e.bind(n));
  else if (ae(e))
    if (W(e))
      e.forEach((s) => kl(s, t, n, r));
    else {
      const s = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(s) ? it(o, s, e) : {}.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    ({}).NODE_ENV !== "production" && x(`Invalid watch option: "${r}"`, e);
}
function ds(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach((u) => Ir(a, u, i, !0)), Ir(a, t, i)), ae(t) && s.set(t, a), a;
}
function Ir(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Ir(e, s, n, !0), o && o.forEach((i) => Ir(e, i, n, !0));
  for (const i in t)
    if (r && i === "expose")
      ({}).NODE_ENV !== "production" && x('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = wc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const wc = {
  data: qs,
  props: Wt,
  emits: Wt,
  methods: Wt,
  computed: Wt,
  beforeCreate: Pe,
  created: Pe,
  beforeMount: Pe,
  mounted: Pe,
  beforeUpdate: Pe,
  updated: Pe,
  beforeDestroy: Pe,
  beforeUnmount: Pe,
  destroyed: Pe,
  unmounted: Pe,
  activated: Pe,
  deactivated: Pe,
  errorCaptured: Pe,
  serverPrefetch: Pe,
  components: Wt,
  directives: Wt,
  watch: Rc,
  provide: qs,
  inject: Cc
};
function qs(e, t) {
  return t ? e ? function() {
    return ye(G(e) ? e.call(this, this) : e, G(t) ? t.call(this, this) : t);
  } : t : e;
}
function Cc(e, t) {
  return Wt(Co(e), Co(t));
}
function Co(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wt(e, t) {
  return e ? ye(ye(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Rc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ye(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Pe(e[r], t[r]);
  return n;
}
function xc(e, t, n, r = !1) {
  const o = {}, s = {};
  yr(s, qr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Sl(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  ({}).NODE_ENV !== "production" && Pl(t || {}, o, e), n ? e.props = r ? o : Ou(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Vc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Lc(e, t, n, r) {
  const { props: o, attrs: s, vnode: { patchFlag: i } } = e, l = Q(o), [a] = e.propsOptions;
  let u = !1;
  if (!({}.NODE_ENV !== "production" && Vc(e)) && (r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        let p = f[d];
        if (Br(e.emitsOptions, p))
          continue;
        const $ = t[p];
        if (a)
          if (ne(s, p))
            $ !== s[p] && (s[p] = $, u = !0);
          else {
            const g = _t(p);
            o[g] = Ro(a, l, g, $, e, !1);
          }
        else
          $ !== s[p] && (s[p] = $, u = !0);
      }
    }
  } else {
    Sl(e, t, o, s) && (u = !0);
    let f;
    for (const d in l)
      (!t || !ne(t, d) && ((f = Pt(d)) === d || !ne(t, f))) && (a ? n && (n[d] !== void 0 || n[f] !== void 0) && (o[d] = Ro(a, l, d, void 0, e, !0)) : delete o[d]);
    if (s !== l)
      for (const d in s)
        (!t || !ne(t, d) && !0) && (delete s[d], u = !0);
  }
  u && It(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Pl(t || {}, o, e);
}
function Sl(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (fr(a))
        continue;
      const u = t[a];
      let f;
      o && ne(o, f = _t(a)) ? !s || !s.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Br(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, i = !0);
    }
  if (s) {
    const a = Q(n), u = l || me;
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      n[d] = Ro(o, a, d, u[d], e, !ne(u, d));
    }
  }
  return i;
}
function Ro(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = ne(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && G(a)) {
        const { propsDefaults: u } = o;
        n in u ? r = u[n] : (bn(o), r = u[n] = a.call(null, t), nn());
      } else
        r = a;
    }
    i[0] && (s && !l ? r = !1 : i[1] && (r === "" || r === Pt(n)) && (r = !0));
  }
  return r;
}
function Ml(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!G(e)) {
    const f = (d) => {
      a = !0;
      const [p, $] = Ml(d, t, !0);
      ye(i, p), $ && l.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a)
    return ae(e) && r.set(e, $n), $n;
  if (W(s))
    for (let f = 0; f < s.length; f++) {
      ({}).NODE_ENV !== "production" && !ge(s[f]) && x("props must be strings when using array syntax.", s[f]);
      const d = _t(s[f]);
      Ks(d) && (i[d] = me);
    }
  else if (s) {
    ({}).NODE_ENV !== "production" && !ae(s) && x("invalid props options", s);
    for (const f in s) {
      const d = _t(f);
      if (Ks(d)) {
        const p = s[f], $ = i[d] = W(p) || G(p) ? { type: p } : Object.assign({}, p);
        if ($) {
          const g = Ys(Boolean, $.type), N = Ys(String, $.type);
          $[0] = g > -1, $[1] = N < 0 || g < N, (g > -1 || ne($, "default")) && l.push(d);
        }
      }
    }
  }
  const u = [i, l];
  return ae(e) && r.set(e, u), u;
}
function Ks(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function xo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Gs(e, t) {
  return xo(e) === xo(t);
}
function Ys(e, t) {
  return W(t) ? t.findIndex((n) => Gs(n, e)) : G(t) && Gs(t, e) ? 0 : -1;
}
function Pl(e, t, n) {
  const r = Q(t), o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && Ac(s, r[s], i, !ne(e, s) && !ne(e, Pt(s)));
  }
}
function Ac(e, t, n, r) {
  const { type: o, required: s, validator: i } = n;
  if (s && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (o != null && o !== !0) {
      let l = !1;
      const a = W(o) ? o : [o], u = [];
      for (let f = 0; f < a.length && !l; f++) {
        const { valid: d, expectedType: p } = Sc(t, a[f]);
        u.push(p || ""), l = d;
      }
      if (!l) {
        x(Mc(e, t, u));
        return;
      }
    }
    i && !i(t) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const kc = /* @__PURE__ */ zt("String,Number,Boolean,Function,Symbol,BigInt");
function Sc(e, t) {
  let n;
  const r = xo(t);
  if (kc(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = ae(e) : r === "Array" ? n = W(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Mc(e, t, n) {
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rn).join(" | ")}`;
  const o = n[0], s = Qo(t), i = Xs(t, o), l = Xs(t, s);
  return n.length === 1 && Js(o) && !Pc(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Js(s) && (r += `with value ${l}.`), r;
}
function Xs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Js(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Pc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Fl = (e) => e[0] === "_" || e === "$stable", fs = (e) => W(e) ? e.map(ot) : [ot(e)], Fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = ec((...o) => ({}.NODE_ENV !== "production" && Ne && x(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), fs(t(...o))), n);
  return r._c = !1, r;
}, zl = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Fl(o))
      continue;
    const s = e[o];
    if (G(s))
      t[o] = Fc(o, s, r);
    else if (s != null) {
      ({}).NODE_ENV !== "production" && x(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);
      const i = fs(s);
      t[o] = () => i;
    }
  }
}, jl = (e, t) => {
  ({}).NODE_ENV !== "production" && !tr(e.vnode) && x("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = fs(t);
  e.slots.default = () => n;
}, zc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Q(t), yr(t, "_", n)) : zl(t, e.slots = {});
  } else
    e.slots = {}, t && jl(e, t);
  yr(e.slots, qr, 1);
}, jc = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = me;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? {}.NODE_ENV !== "production" && Zt ? ye(o, t) : n && l === 1 ? s = !1 : (ye(o, t), !n && l === 1 && delete o._) : (s = !t.$stable, zl(t, o)), i = t;
  } else
    t && (jl(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !Fl(l) && !(l in i) && delete o[l];
};
function Ul() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
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
let Uc = 0;
function Bc(e, t) {
  return function(r, o = null) {
    G(r) || (r = Object.assign({}, r)), o != null && !ae(o) && ({}.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), o = null);
    const s = Ul(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Uc++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: ti,
      get config() {
        return s.config;
      },
      set config(u) {
        ({}).NODE_ENV !== "production" && x("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...f) {
        return i.has(u) ? {}.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : u && G(u.install) ? (i.add(u), u.install(a, ...f)) : G(u) ? (i.add(u), u(a, ...f)) : {}.NODE_ENV !== "production" && x('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(u) {
        return s.mixins.includes(u) ? {}.NODE_ENV !== "production" && x("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), a;
      },
      component(u, f) {
        return {}.NODE_ENV !== "production" && Lo(u, s.config), f ? ({}.NODE_ENV !== "production" && s.components[u] && x(`Component "${u}" has already been registered in target app.`), s.components[u] = f, a) : s.components[u];
      },
      directive(u, f) {
        return {}.NODE_ENV !== "production" && xl(u), f ? ({}.NODE_ENV !== "production" && s.directives[u] && x(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, a) : s.directives[u];
      },
      mount(u, f, d) {
        if (l)
          ({}).NODE_ENV !== "production" && x("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && u.__vue_app__ && x("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const p = Ce(r, o);
          return p.appContext = s, {}.NODE_ENV !== "production" && (s.reload = () => {
            e(ht(p), u, d);
          }), f && t ? t(p, u) : e(p, u, d), l = !0, a._container = u, u.__vue_app__ = a, {}.NODE_ENV !== "production" && (a._instance = p.component, Bu(a, ti)), Kr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), {}.NODE_ENV !== "production" && (a._instance = null, Hu(a)), delete a._container.__vue_app__) : {}.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return {}.NODE_ENV !== "production" && u in s.provides && x(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = f, a;
      }
    };
    return a;
  };
}
function Vo(e, t, n, r, o = !1) {
  if (W(e)) {
    e.forEach((p, $) => Vo(p, t && (W(t) ? t[$] : t), n, r, o));
    return;
  }
  if (_r(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? Kr(r.component) || r.component.proxy : r.el, i = o ? null : s, { i: l, r: a } = e;
  if ({}.NODE_ENV !== "production" && !l) {
    x("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, f = l.refs === me ? l.refs = {} : l.refs, d = l.setupState;
  if (u != null && u !== a && (ge(u) ? (f[u] = null, ne(d, u) && (d[u] = null)) : Ee(u) && (u.value = null)), G(a))
    Ot(a, l, 12, [i, f]);
  else {
    const p = ge(a), $ = Ee(a);
    if (p || $) {
      const g = () => {
        if (e.f) {
          const N = p ? ne(d, a) ? d[a] : f[a] : a.value;
          o ? W(N) && Xo(N, s) : W(N) ? N.includes(s) || N.push(s) : p ? (f[a] = [s], ne(d, a) && (d[a] = f[a])) : (a.value = [s], e.k && (f[e.k] = a.value));
        } else
          p ? (f[a] = i, ne(d, a) && (d[a] = i)) : $ ? (a.value = i, e.k && (f[e.k] = i)) : {}.NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (g.id = -1, We(g, n)) : g();
    } else
      ({}).NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Vn, kt;
function $t(e, t) {
  e.appContext.config.performance && Dr() && kt.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Gu(e, t, Dr() ? kt.now() : Date.now());
}
function yt(e, t) {
  if (e.appContext.config.performance && Dr()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    kt.mark(r), kt.measure(`<${Gr(e, e.type)}> ${t}`, n, r), kt.clearMarks(n), kt.clearMarks(r);
  }
  ({}).NODE_ENV !== "production" && Yu(e, t, Dr() ? kt.now() : Date.now());
}
function Dr() {
  return Vn !== void 0 || (typeof window < "u" && window.performance ? (Vn = !0, kt = window.performance) : Vn = !1), Vn;
}
function Hc() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const We = lc;
function Wc(e) {
  return qc(e);
}
function qc(e, t) {
  Hc();
  const n = Ki();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && $l(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: o, patchProp: s, createElement: i, createText: l, createComment: a, setText: u, setElementText: f, parentNode: d, nextSibling: p, setScopeId: $ = we, insertStaticContent: g } = e, N = (c, m, b, I = null, T = null, V = null, S = !1, R = null, L = {}.NODE_ENV !== "production" && Zt ? !1 : !!m.dynamicChildren) => {
    if (c === m)
      return;
    c && !qt(c, m) && (I = fn(c), lt(c, T, V, !0), c = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: O, ref: _, shapeFlag: h } = m;
    switch (O) {
      case In:
        w(c, m, b, I);
        break;
      case Re:
        k(c, m, b, I);
        break;
      case gr:
        c == null ? P(m, b, I, S) : {}.NODE_ENV !== "production" && B(c, m, b, S);
        break;
      case M:
        Oe(c, m, b, I, T, V, S, R, L);
        break;
      default:
        h & 1 ? J(c, m, b, I, T, V, S, R, L) : h & 6 ? Rt(c, m, b, I, T, V, S, R, L) : h & 64 || h & 128 ? O.process(c, m, b, I, T, V, S, R, L, xt) : {}.NODE_ENV !== "production" && x("Invalid VNode type:", O, `(${typeof O})`);
    }
    _ != null && T && Vo(_, c && c.ref, V, m || c, !m);
  }, w = (c, m, b, I) => {
    if (c == null)
      r(m.el = l(m.children), b, I);
    else {
      const T = m.el = c.el;
      m.children !== c.children && u(T, m.children);
    }
  }, k = (c, m, b, I) => {
    c == null ? r(m.el = a(m.children || ""), b, I) : m.el = c.el;
  }, P = (c, m, b, I) => {
    [c.el, c.anchor] = g(c.children, m, b, I, c.el, c.anchor);
  }, B = (c, m, b, I) => {
    if (m.children !== c.children) {
      const T = p(c.anchor);
      D(c), [m.el, m.anchor] = g(m.children, b, T, I);
    } else
      m.el = c.el, m.anchor = c.anchor;
  }, A = ({ el: c, anchor: m }, b, I) => {
    let T;
    for (; c && c !== m; )
      T = p(c), r(c, b, I), c = T;
    r(m, b, I);
  }, D = ({ el: c, anchor: m }) => {
    let b;
    for (; c && c !== m; )
      b = p(c), o(c), c = b;
    o(m);
  }, J = (c, m, b, I, T, V, S, R, L) => {
    S = S || m.type === "svg", c == null ? K(m, b, I, T, V, S, R, L) : ee(c, m, T, V, S, R, L);
  }, K = (c, m, b, I, T, V, S, R) => {
    let L, O;
    const { type: _, props: h, shapeFlag: F, transition: U, dirs: Z } = c;
    if (L = c.el = i(c.type, V, h && h.is, h), F & 8 ? f(L, c.children) : F & 16 && Y(c.children, L, null, I, T, V && _ !== "foreignObject", S, R), Z && Ut(c, null, I, "created"), h) {
      for (const re in h)
        re !== "value" && !fr(re) && s(L, re, null, h[re], V, c.children, I, T, nt);
      "value" in h && s(L, "value", null, h.value), (O = h.onVnodeBeforeMount) && ut(O, I, c);
    }
    H(L, c, c.scopeId, S, I), {}.NODE_ENV !== "production" && (Object.defineProperty(L, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(L, "__vueParentComponent", {
      value: I,
      enumerable: !1
    })), Z && Ut(c, null, I, "beforeMount");
    const se = (!T || T && !T.pendingBranch) && U && !U.persisted;
    se && U.beforeEnter(L), r(L, m, b), ((O = h && h.onVnodeMounted) || se || Z) && We(() => {
      O && ut(O, I, c), se && U.enter(L), Z && Ut(c, null, I, "mounted");
    }, T);
  }, H = (c, m, b, I, T) => {
    if (b && $(c, b), I)
      for (let V = 0; V < I.length; V++)
        $(c, I[V]);
    if (T) {
      let V = T.subTree;
      if ({}.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && (V = Ol(V.children) || V), m === V) {
        const S = T.vnode;
        H(c, S, S.scopeId, S.slotScopeIds, T.parent);
      }
    }
  }, Y = (c, m, b, I, T, V, S, R, L = 0) => {
    for (let O = L; O < c.length; O++) {
      const _ = c[O] = R ? At(c[O]) : ot(c[O]);
      N(null, _, m, b, I, T, V, S, R);
    }
  }, ee = (c, m, b, I, T, V, S) => {
    const R = m.el = c.el;
    let { patchFlag: L, dynamicChildren: O, dirs: _ } = m;
    L |= c.patchFlag & 16;
    const h = c.props || me, F = m.props || me;
    let U;
    b && Bt(b, !1), (U = F.onVnodeBeforeUpdate) && ut(U, b, m, c), _ && Ut(m, c, b, "beforeUpdate"), b && Bt(b, !0), {}.NODE_ENV !== "production" && Zt && (L = 0, S = !1, O = null);
    const Z = T && m.type !== "foreignObject";
    if (O ? (le(c.dynamicChildren, O, R, b, I, Z, V), {}.NODE_ENV !== "production" && b && b.type.__hmrId && hr(c, m)) : S || ke(c, m, R, null, b, I, Z, V, !1), L > 0) {
      if (L & 16)
        he(R, m, h, F, b, I, T);
      else if (L & 2 && h.class !== F.class && s(R, "class", null, F.class, T), L & 4 && s(R, "style", h.style, F.style, T), L & 8) {
        const se = m.dynamicProps;
        for (let re = 0; re < se.length; re++) {
          const fe = se[re], Ge = h[fe], Et = F[fe];
          (Et !== Ge || fe === "value") && s(R, fe, Ge, Et, T, c.children, b, I, nt);
        }
      }
      L & 1 && c.children !== m.children && f(R, m.children);
    } else
      !S && O == null && he(R, m, h, F, b, I, T);
    ((U = F.onVnodeUpdated) || _) && We(() => {
      U && ut(U, b, m, c), _ && Ut(m, c, b, "updated");
    }, I);
  }, le = (c, m, b, I, T, V, S) => {
    for (let R = 0; R < m.length; R++) {
      const L = c[R], O = m[R], _ = L.el && (L.type === M || !qt(L, O) || L.shapeFlag & 70) ? d(L.el) : b;
      N(L, O, _, null, I, T, V, S, !0);
    }
  }, he = (c, m, b, I, T, V, S) => {
    if (b !== I) {
      if (b !== me)
        for (const R in b)
          !fr(R) && !(R in I) && s(c, R, b[R], null, S, m.children, T, V, nt);
      for (const R in I) {
        if (fr(R))
          continue;
        const L = I[R], O = b[R];
        L !== O && R !== "value" && s(c, R, O, L, S, m.children, T, V, nt);
      }
      "value" in I && s(c, "value", b.value, I.value);
    }
  }, Oe = (c, m, b, I, T, V, S, R, L) => {
    const O = m.el = c ? c.el : l(""), _ = m.anchor = c ? c.anchor : l("");
    let { patchFlag: h, dynamicChildren: F, slotScopeIds: U } = m;
    ({}).NODE_ENV !== "production" && (Zt || h & 2048) && (h = 0, L = !1, F = null), U && (R = R ? R.concat(U) : U), c == null ? (r(O, b, I), r(_, b, I), Y(m.children, b, _, T, V, S, R, L)) : h > 0 && h & 64 && F && c.dynamicChildren ? (le(c.dynamicChildren, F, b, T, V, S, R), {}.NODE_ENV !== "production" && T && T.type.__hmrId ? hr(c, m) : (m.key != null || T && m === T.subTree) && hr(c, m, !0)) : ke(c, m, b, _, T, V, S, R, L);
  }, Rt = (c, m, b, I, T, V, S, R, L) => {
    m.slotScopeIds = R, c == null ? m.shapeFlag & 512 ? T.ctx.activate(m, b, I, S, L) : Ze(m, b, I, T, V, S, L) : be(c, m, L);
  }, Ze = (c, m, b, I, T, V, S) => {
    const R = c.component = td(c, I, T);
    if ({}.NODE_ENV !== "production" && R.type.__hmrId && Fu(R), {}.NODE_ENV !== "production" && (pr(c), $t(R, "mount")), tr(c) && (R.ctx.renderer = xt), {}.NODE_ENV !== "production" && $t(R, "init"), rd(R), {}.NODE_ENV !== "production" && yt(R, "init"), R.asyncDep) {
      if (T && T.registerDep(R, te), !c.el) {
        const L = R.subTree = Ce(Re);
        k(null, L, m, b);
      }
      return;
    }
    te(R, c, m, b, T, V, S), {}.NODE_ENV !== "production" && (mr(), yt(R, "mount"));
  }, be = (c, m, b) => {
    const I = m.component = c.component;
    if (oc(c, m, b))
      if (I.asyncDep && !I.asyncResolved) {
        ({}).NODE_ENV !== "production" && pr(m), X(I, m, b), {}.NODE_ENV !== "production" && mr();
        return;
      } else
        I.next = m, Mu(I.update), I.update();
    else
      m.el = c.el, I.vnode = m;
  }, te = (c, m, b, I, T, V, S) => {
    const R = () => {
      if (c.isMounted) {
        let { next: _, bu: h, u: F, parent: U, vnode: Z } = c, se = _, re;
        ({}).NODE_ENV !== "production" && pr(_ || c.vnode), Bt(c, !1), _ ? (_.el = Z.el, X(c, _, S)) : _ = Z, h && _n(h), (re = _.props && _.props.onVnodeBeforeUpdate) && ut(re, U, _, Z), Bt(c, !0), {}.NODE_ENV !== "production" && $t(c, "render");
        const fe = ro(c);
        ({}).NODE_ENV !== "production" && yt(c, "render");
        const Ge = c.subTree;
        c.subTree = fe, {}.NODE_ENV !== "production" && $t(c, "patch"), N(
          Ge,
          fe,
          d(Ge.el),
          fn(Ge),
          c,
          T,
          V
        ), {}.NODE_ENV !== "production" && yt(c, "patch"), _.el = fe.el, se === null && sc(c, fe.el), F && We(F, T), (re = _.props && _.props.onVnodeUpdated) && We(() => ut(re, U, _, Z), T), {}.NODE_ENV !== "production" && yl(c), {}.NODE_ENV !== "production" && mr();
      } else {
        let _;
        const { el: h, props: F } = m, { bm: U, m: Z, parent: se } = c, re = _r(m);
        if (Bt(c, !1), U && _n(U), !re && (_ = F && F.onVnodeBeforeMount) && ut(_, se, m), Bt(c, !0), h && Rn) {
          const fe = () => {
            ({}).NODE_ENV !== "production" && $t(c, "render"), c.subTree = ro(c), {}.NODE_ENV !== "production" && yt(c, "render"), {}.NODE_ENV !== "production" && $t(c, "hydrate"), Rn(h, c.subTree, c, T, null), {}.NODE_ENV !== "production" && yt(c, "hydrate");
          };
          re ? m.type.__asyncLoader().then(
            () => !c.isUnmounted && fe()
          ) : fe();
        } else {
          ({}).NODE_ENV !== "production" && $t(c, "render");
          const fe = c.subTree = ro(c);
          ({}).NODE_ENV !== "production" && yt(c, "render"), {}.NODE_ENV !== "production" && $t(c, "patch"), N(null, fe, b, I, c, T, V), {}.NODE_ENV !== "production" && yt(c, "patch"), m.el = fe.el;
        }
        if (Z && We(Z, T), !re && (_ = F && F.onVnodeMounted)) {
          const fe = m;
          We(() => ut(_, se, fe), T);
        }
        (m.shapeFlag & 256 || se && _r(se.vnode) && se.vnode.shapeFlag & 256) && c.a && We(c.a, T), c.isMounted = !0, {}.NODE_ENV !== "production" && Wu(c), m = b = I = null;
      }
    }, L = c.effect = new es(
      R,
      () => Ur(O),
      c.scope
    ), O = c.update = () => L.run();
    O.id = c.uid, Bt(c, !0), {}.NODE_ENV !== "production" && (L.onTrack = c.rtc ? (_) => _n(c.rtc, _) : void 0, L.onTrigger = c.rtg ? (_) => _n(c.rtg, _) : void 0, O.ownerInstance = c), O();
  }, X = (c, m, b) => {
    m.component = c;
    const I = c.vnode.props;
    c.vnode = m, c.next = null, Lc(c, m.props, I, b), jc(c, m.children, b), un(), Fs(), cn();
  }, ke = (c, m, b, I, T, V, S, R, L = !1) => {
    const O = c && c.children, _ = c ? c.shapeFlag : 0, h = m.children, { patchFlag: F, shapeFlag: U } = m;
    if (F > 0) {
      if (F & 128) {
        Se(O, h, b, I, T, V, S, R, L);
        return;
      } else if (F & 256) {
        _e(O, h, b, I, T, V, S, R, L);
        return;
      }
    }
    U & 8 ? (_ & 16 && nt(O, T, V), h !== O && f(b, h)) : _ & 16 ? U & 16 ? Se(O, h, b, I, T, V, S, R, L) : nt(O, T, V, !0) : (_ & 8 && f(b, ""), U & 16 && Y(h, b, I, T, V, S, R, L));
  }, _e = (c, m, b, I, T, V, S, R, L) => {
    c = c || $n, m = m || $n;
    const O = c.length, _ = m.length, h = Math.min(O, _);
    let F;
    for (F = 0; F < h; F++) {
      const U = m[F] = L ? At(m[F]) : ot(m[F]);
      N(c[F], U, b, null, T, V, S, R, L);
    }
    O > _ ? nt(c, T, V, !0, !1, h) : Y(m, b, I, T, V, S, R, L, h);
  }, Se = (c, m, b, I, T, V, S, R, L) => {
    let O = 0;
    const _ = m.length;
    let h = c.length - 1, F = _ - 1;
    for (; O <= h && O <= F; ) {
      const U = c[O], Z = m[O] = L ? At(m[O]) : ot(m[O]);
      if (qt(U, Z))
        N(U, Z, b, null, T, V, S, R, L);
      else
        break;
      O++;
    }
    for (; O <= h && O <= F; ) {
      const U = c[h], Z = m[F] = L ? At(m[F]) : ot(m[F]);
      if (qt(U, Z))
        N(U, Z, b, null, T, V, S, R, L);
      else
        break;
      h--, F--;
    }
    if (O > h) {
      if (O <= F) {
        const U = F + 1, Z = U < _ ? m[U].el : I;
        for (; O <= F; )
          N(null, m[O] = L ? At(m[O]) : ot(m[O]), b, Z, T, V, S, R, L), O++;
      }
    } else if (O > F)
      for (; O <= h; )
        lt(c[O], T, V, !0), O++;
    else {
      const U = O, Z = O, se = /* @__PURE__ */ new Map();
      for (O = Z; O <= F; O++) {
        const Me = m[O] = L ? At(m[O]) : ot(m[O]);
        Me.key != null && ({}.NODE_ENV !== "production" && se.has(Me.key) && x("Duplicate keys found during update:", JSON.stringify(Me.key), "Make sure keys are unique."), se.set(Me.key, O));
      }
      let re, fe = 0;
      const Ge = F - Z + 1;
      let Et = !1, Ds = 0;
      const xn = new Array(Ge);
      for (O = 0; O < Ge; O++)
        xn[O] = 0;
      for (O = U; O <= h; O++) {
        const Me = c[O];
        if (fe >= Ge) {
          lt(Me, T, V, !0);
          continue;
        }
        let at;
        if (Me.key != null)
          at = se.get(Me.key);
        else
          for (re = Z; re <= F; re++)
            if (xn[re - Z] === 0 && qt(Me, m[re])) {
              at = re;
              break;
            }
        at === void 0 ? lt(Me, T, V, !0) : (xn[at - Z] = O + 1, at >= Ds ? Ds = at : Et = !0, N(Me, m[at], b, null, T, V, S, R, L), fe++);
      }
      const ws = Et ? Kc(xn) : $n;
      for (re = ws.length - 1, O = Ge - 1; O >= 0; O--) {
        const Me = Z + O, at = m[Me], Cs = Me + 1 < _ ? m[Me + 1].el : I;
        xn[O] === 0 ? N(null, at, b, Cs, T, V, S, R, L) : Et && (re < 0 || O !== ws[re] ? De(at, b, Cs, 2) : re--);
      }
    }
  }, De = (c, m, b, I, T = null) => {
    const { el: V, type: S, transition: R, children: L, shapeFlag: O } = c;
    if (O & 6) {
      De(c.component.subTree, m, b, I);
      return;
    }
    if (O & 128) {
      c.suspense.move(m, b, I);
      return;
    }
    if (O & 64) {
      S.move(c, m, b, xt);
      return;
    }
    if (S === M) {
      r(V, m, b);
      for (let h = 0; h < L.length; h++)
        De(L[h], m, b, I);
      r(c.anchor, m, b);
      return;
    }
    if (S === gr) {
      A(c, m, b);
      return;
    }
    if (I !== 2 && O & 1 && R)
      if (I === 0)
        R.beforeEnter(V), r(V, m, b), We(() => R.enter(V), T);
      else {
        const { leave: h, delayLeave: F, afterLeave: U } = R, Z = () => r(V, m, b), se = () => {
          h(V, () => {
            Z(), U && U();
          });
        };
        F ? F(V, Z, se) : se();
      }
    else
      r(V, m, b);
  }, lt = (c, m, b, I = !1, T = !1) => {
    const { type: V, props: S, ref: R, children: L, dynamicChildren: O, shapeFlag: _, patchFlag: h, dirs: F } = c;
    if (R != null && Vo(R, null, b, c, !0), _ & 256) {
      m.ctx.deactivate(c);
      return;
    }
    const U = _ & 1 && F, Z = !_r(c);
    let se;
    if (Z && (se = S && S.onVnodeBeforeUnmount) && ut(se, m, c), _ & 6)
      to(c.component, b, I);
    else {
      if (_ & 128) {
        c.suspense.unmount(b, I);
        return;
      }
      U && Ut(c, null, m, "beforeUnmount"), _ & 64 ? c.type.remove(c, m, b, T, xt, I) : O && (V !== M || h > 0 && h & 64) ? nt(O, m, b, !1, !0) : (V === M && h & 384 || !T && _ & 16) && nt(L, m, b), I && rr(c);
    }
    (Z && (se = S && S.onVnodeUnmounted) || U) && We(() => {
      se && ut(se, m, c), U && Ut(c, null, m, "unmounted");
    }, b);
  }, rr = (c) => {
    const { type: m, el: b, anchor: I, transition: T } = c;
    if (m === M) {
      ({}).NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && T && !T.persisted ? c.children.forEach((S) => {
        S.type === Re ? o(S.el) : rr(S);
      }) : eo(b, I);
      return;
    }
    if (m === gr) {
      D(c);
      return;
    }
    const V = () => {
      o(b), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (c.shapeFlag & 1 && T && !T.persisted) {
      const { leave: S, delayLeave: R } = T, L = () => S(b, V);
      R ? R(c.el, V, L) : L();
    } else
      V();
  }, eo = (c, m) => {
    let b;
    for (; c !== m; )
      b = p(c), o(c), c = b;
    o(m);
  }, to = (c, m, b) => {
    ({}).NODE_ENV !== "production" && c.type.__hmrId && zu(c);
    const { bum: I, scope: T, update: V, subTree: S, um: R } = c;
    I && _n(I), T.stop(), V && (V.active = !1, lt(S, c, m, b)), R && We(R, m), We(() => {
      c.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), {}.NODE_ENV !== "production" && Ku(c);
  }, nt = (c, m, b, I = !1, T = !1, V = 0) => {
    for (let S = V; S < c.length; S++)
      lt(c[S], m, b, I, T);
  }, fn = (c) => c.shapeFlag & 6 ? fn(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : p(c.anchor || c.el), or = (c, m, b) => {
    c == null ? m._vnode && lt(m._vnode, null, null, !0) : N(m._vnode || null, c, m, null, null, null, b), Fs(), gl(), m._vnode = c;
  }, xt = {
    p: N,
    um: lt,
    m: De,
    r: rr,
    mt: Ze,
    mc: Y,
    pc: ke,
    pbc: le,
    n: fn,
    o: e
  };
  let Cn, Rn;
  return t && ([Cn, Rn] = t(xt)), {
    render: or,
    hydrate: Cn,
    createApp: Bc(or, Cn)
  };
}
function Bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function hr(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (W(r) && W(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = At(o[s]), l.el = i.el), n || hr(i, l)), l.type === In && (l.el = i.el), {}.NODE_ENV !== "production" && l.type === Re && !l.el && (l.el = i.el);
    }
}
function Kc(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < u ? s = l + 1 : i = l;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Gc = (e) => e.__isTeleport, M = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), In = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), Re = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), gr = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Pn = [];
let st = null;
function v(e = !1) {
  Pn.push(st = e ? null : []);
}
function Yc() {
  Pn.pop(), st = Pn[Pn.length - 1] || null;
}
let Kn = 1;
function Qs(e) {
  Kn += e;
}
function Bl(e) {
  return e.dynamicChildren = Kn > 0 ? st || $n : null, Yc(), Kn > 0 && st && st.push(e), e;
}
function E(e, t, n, r, o, s) {
  return Bl(y(e, t, n, r, o, s, !0));
}
function ln(e, t, n, r, o) {
  return Bl(Ce(e, t, n, r, o, !0));
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qt(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && hn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Xc = (...e) => Wl(...e), qr = "__vInternal", Hl = ({ key: e }) => e != null ? e : null, vr = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ge(e) || Ee(e) || G(e) ? { i: ze, r: e, k: t, f: !!n } : e : null;
function y(e, t = null, n = null, r = 0, o = null, s = e === M ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hl(t),
    ref: t && vr(t),
    scopeId: Hr,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ze
  };
  return l ? (ps(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ge(n) ? 8 : 16), {}.NODE_ENV !== "production" && a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), Kn > 0 && !i && st && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && st.push(a), a;
}
const Ce = {}.NODE_ENV !== "production" ? Xc : Wl;
function Wl(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Vl) && ({}.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = Re), Gn(e)) {
    const l = ht(e, t, !0);
    return n && ps(l, n), Kn > 0 && !s && st && (l.shapeFlag & 6 ? st[st.indexOf(e)] = l : st.push(l)), l.patchFlag |= -2, l;
  }
  if (Xl(e) && (e = e.__vccOpts), t) {
    t = Jc(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = Yo(l)), ae(a) && (Eo(a) && !W(a) && (a = ye({}, a)), t.style = bt(a));
  }
  const i = ge(e) ? 1 : ic(e) ? 128 : Gc(e) ? 64 : ae(e) ? 4 : G(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Eo(e) && (e = Q(e), x("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), y(e, t, n, r, o, i, s, !0);
}
function Jc(e) {
  return e ? Eo(e) || qr in e ? ye({}, e) : e : null;
}
function ht(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, l = t ? Qc(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Hl(l),
    ref: t && t.ref ? n && o ? W(o) ? o.concat(vr(t)) : [o, vr(t)] : vr(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && s === -1 && W(i) ? i.map(ql) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== M ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ht(e.ssContent),
    ssFallback: e.ssFallback && ht(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function ql(e) {
  const t = ht(e);
  return W(e.children) && (t.children = e.children.map(ql)), t;
}
function q(e = " ", t = 0) {
  return Ce(In, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (v(), ln(Re, null, e)) : Ce(Re, null, e);
}
function ot(e) {
  return e == null || typeof e == "boolean" ? Ce(Re) : W(e) ? Ce(
    M,
    null,
    e.slice()
  ) : typeof e == "object" ? At(e) : Ce(In, null, String(e));
}
function At(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ht(e);
}
function ps(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ps(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(qr in t) ? t._ctx = ze : o === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    G(t) ? (t = { default: t, _ctx: ze }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [q(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Yo([t.class, r.class]));
      else if (o === "style")
        t.style = bt([t.style, r.style]);
      else if (Qn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(W(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function ut(e, t, n, r = null) {
  tt(e, t, 7, [
    n,
    r
  ]);
}
const Zc = Ul();
let ed = 0;
function td(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Zc, s = {
    uid: ed++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Gi(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Ml(r, o),
    emitsOptions: Nl(r, o),
    emit: null,
    emitted: null,
    propsDefaults: me,
    inheritAttrs: r.inheritAttrs,
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
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
  return {}.NODE_ENV !== "production" ? s.ctx = bc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ju.bind(null, s), e.ce && e.ce(s), s;
}
let Ne = null;
const nr = () => Ne || ze, bn = (e) => {
  Ne = e, e.scope.on();
}, nn = () => {
  Ne && Ne.scope.off(), Ne = null;
}, nd = /* @__PURE__ */ zt("slot,component");
function Lo(e, t) {
  const n = t.isNativeTag || Hi;
  (nd(e) || n(e)) && x("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Kl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function rd(e, t = !1) {
  Yn = t;
  const { props: n, children: r } = e.vnode, o = Kl(e);
  xc(e, n, o, t), zc(e, r);
  const s = o ? od(e, t) : void 0;
  return Yn = !1, s;
}
function od(e, t) {
  var n;
  const r = e.type;
  if ({}.NODE_ENV !== "production") {
    if (r.name && Lo(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Lo(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        xl(s[i]);
    }
    r.compilerOptions && Gl() && x('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = al(new Proxy(e.ctx, Al)), {}.NODE_ENV !== "production" && Nc(e);
  const { setup: o } = r;
  if (o) {
    const s = e.setupContext = o.length > 1 ? sd(e) : null;
    bn(e), un();
    const i = Ot(o, e, 0, [{}.NODE_ENV !== "production" ? vn(e.props) : e.props, s]);
    if (cn(), nn(), Jo(i)) {
      if (i.then(nn, nn), t)
        return i.then((l) => {
          Zs(e, l, t);
        }).catch((l) => {
          jr(l, e, 0);
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        x(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Zs(e, i, t);
  } else
    Yl(e, t);
}
function Zs(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) ? ({}.NODE_ENV !== "production" && Gn(t) && x("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dl(t), {}.NODE_ENV !== "production" && Oc(e)) : {}.NODE_ENV !== "production" && t !== void 0 && x(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Yl(e, n);
}
let Ao;
const Gl = () => !Ao;
function Yl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ao && !r.render) {
      const o = r.template || ds(e).template;
      if (o) {
        ({}).NODE_ENV !== "production" && $t(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = r, u = ye(ye({
          isCustomElement: s,
          delimiters: l
        }, i), a);
        r.render = Ao(o, u), {}.NODE_ENV !== "production" && yt(e, "compile");
      }
    }
    e.render = r.render || we;
  }
  bn(e), un(), Ic(e), cn(), nn(), {}.NODE_ENV !== "production" && !r.render && e.render === we && !t && (r.template ? x('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : x("Component is missing template or render function."));
}
function ei(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return Or(), qe(e, "get", "$attrs"), t[n];
    },
    set() {
      return x("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return x("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return qe(e, "get", "$attrs"), t[n];
    }
  });
}
function sd(e) {
  const t = (r) => {
    ({}).NODE_ENV !== "production" && e.exposed && x("expose() should be called only once per setup()."), e.exposed = r || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = ei(e));
    },
    get slots() {
      return vn(e.slots);
    },
    get emit() {
      return (r, ...o) => e.emit(r, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = ei(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(dl(al(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in tn)
          return tn[n](e);
      },
      has(t, n) {
        return n in t || n in tn;
      }
    }));
}
const id = /(?:^|[-_])(\w)/g, ld = (e) => e.replace(id, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ms(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gr(e, t, n = !1) {
  let r = ms(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return r ? ld(r) : n ? "App" : "Anonymous";
}
function Xl(e) {
  return G(e) && "__vccOpts" in e;
}
const ue = (e, t) => Cu(e, t, Yn);
function Jl(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ae(t) && !W(t) ? Gn(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Gn(n) && (n = [n]), Ce(e, t, n));
}
const ad = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), ud = () => {
  {
    const e = en(ad);
    return e || {}.NODE_ENV !== "production" && x("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function io(e) {
  return !!(e && e.__v_isShallow);
}
function cd() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(d) {
      return ae(d) ? d.__isVue ? ["div", e, "VueInstance"] : Ee(d) ? [
        "div",
        {},
        ["span", e, f(d)],
        "<",
        l(d.value),
        ">"
      ] : Mt(d) ? [
        "div",
        {},
        ["span", e, io(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${Dt(d) ? " (readonly)" : ""}`
      ] : Dt(d) ? [
        "div",
        {},
        ["span", e, io(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
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
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const p = [];
    d.type.props && d.props && p.push(i("props", Q(d.props))), d.setupState !== me && p.push(i("setup", d.setupState)), d.data !== me && p.push(i("data", Q(d.data)));
    const $ = a(d, "computed");
    $ && p.push(i("computed", $));
    const g = a(d, "inject");
    return g && p.push(i("injected", g)), p.push([
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
    ]), p;
  }
  function i(d, p) {
    return p = ye({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map(($) => [
          "div",
          {},
          ["span", r, $ + ": "],
          l(p[$], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, p = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : ae(d) ? ["object", { object: p ? Q(d) : d }] : ["span", n, String(d)];
  }
  function a(d, p) {
    const $ = d.type;
    if (G($))
      return;
    const g = {};
    for (const N in d.ctx)
      u($, N, p) && (g[N] = d.ctx[N]);
    return g;
  }
  function u(d, p, $) {
    const g = d[$];
    if (W(g) && g.includes(p) || ae(g) && p in g || d.extends && u(d.extends, p, $) || d.mixins && d.mixins.some((N) => u(N, p, $)))
      return !0;
  }
  function f(d) {
    return io(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const ti = "3.2.45", dd = "http://www.w3.org/2000/svg", Kt = typeof document < "u" ? document : null, ni = Kt && /* @__PURE__ */ Kt.createElement("template"), fd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t ? Kt.createElementNS(dd, e) : Kt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      ni.innerHTML = r ? `<svg>${e}</svg>` : e;
      const l = ni.content;
      if (r) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function pd(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function md(e, t, n) {
  const r = e.style, o = ge(n);
  if (n && !o) {
    for (const s in n)
      ko(r, s, n[s]);
    if (t && !ge(t))
      for (const s in t)
        n[s] == null && ko(r, s, "");
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s);
  }
}
const _d = /[^\\];\s*$/, ri = /\s*!important$/;
function ko(e, t, n) {
  if (W(n))
    n.forEach((r) => ko(e, t, r));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && _d.test(n) && x(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = hd(e, t);
    ri.test(n) ? e.setProperty(Pt(r), n.replace(ri, ""), "important") : e[r] = n;
  }
}
const oi = ["Webkit", "Moz", "ms"], lo = {};
function hd(e, t) {
  const n = lo[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return lo[t] = r;
  r = rn(r);
  for (let o = 0; o < oi.length; o++) {
    const s = oi[o] + r;
    if (s in e)
      return lo[t] = s;
  }
  return t;
}
const si = "http://www.w3.org/1999/xlink";
function gd(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(si, t.slice(6, t.length)) : e.setAttributeNS(si, t, n);
  else {
    const s = Ua(t);
    n == null || s && !Ui(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function vd(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n == null ? "" : n;
    (e.value !== a || e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Ui(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    ({}).NODE_ENV !== "production" && !l && x(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function Gt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ed(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function $d(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [l, a] = yd(t);
    if (r) {
      const u = s[t] = Od(r, o);
      Gt(e, l, u, a);
    } else
      i && (Ed(e, l, i, a), s[t] = void 0);
  }
}
const ii = /(?:Once|Passive|Capture)$/;
function yd(e) {
  let t;
  if (ii.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ii); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let ao = 0;
const bd = /* @__PURE__ */ Promise.resolve(), Nd = () => ao || (bd.then(() => ao = 0), ao = Date.now());
function Od(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    tt(Td(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Nd(), n;
}
function Td(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const li = /^on[a-z]/, Id = (e, t, n, r, o = !1, s, i, l, a) => {
  t === "class" ? pd(e, r, o) : t === "style" ? md(e, n, r) : Qn(t) ? $r(t) || $d(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dd(e, t, r, o)) ? vd(e, t, r, s, i, l, a) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), gd(e, t, r, o));
};
function Dd(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && li.test(t) && G(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || li.test(t) && ge(n) ? !1 : t in e;
}
const wd = {
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
dc.props;
const wr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (n) => _n(t, n) : t;
};
function Cd(e) {
  e.target.composing = !0;
}
function ai(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Nn = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e._assign = wr(o);
    const s = r || o.props && o.props.type === "number";
    Gt(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Un(l)), e._assign(l);
    }), n && Gt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Gt(e, "compositionstart", Cd), Gt(e, "compositionend", ai), Gt(e, "change", ai));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: o } }, s) {
    if (e._assign = wr(s), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && Un(e.value) === t))
      return;
    const i = t == null ? "" : t;
    e.value !== i && (e.value = i);
  }
}, Ql = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = kr(t);
    Gt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? Un(Cr(i)) : Cr(i));
      e._assign(e.multiple ? o ? new Set(s) : s : s[0]);
    }), e._assign = wr(r);
  },
  mounted(e, { value: t }) {
    ui(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = wr(n);
  },
  updated(e, { value: t }) {
    ui(e, t);
  }
};
function ui(e, t) {
  const n = e.multiple;
  if (n && !W(t) && !kr(t)) {
    ({}).NODE_ENV !== "production" && x(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
    return;
  }
  for (let r = 0, o = e.options.length; r < o; r++) {
    const s = e.options[r], i = Cr(s);
    if (n)
      W(t) ? s.selected = Ha(t, i) > -1 : s.selected = t.has(i);
    else if (Ar(Cr(s), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Cr(e) {
  return "_value" in e ? e._value : e.value;
}
const Rd = ["ctrl", "shift", "alt", "meta"], xd = {
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
  exact: (e, t) => Rd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ae = (e, t) => (n, ...r) => {
  for (let o = 0; o < t.length; o++) {
    const s = xd[t[o]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...r);
}, Vd = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ln(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ln(e, !0), r.enter(e)) : r.leave(e, () => {
      Ln(e, !1);
    }) : Ln(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ln(e, t);
  }
};
function Ln(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Ld = /* @__PURE__ */ ye({ patchProp: Id }, fd);
let ci;
function Ad() {
  return ci || (ci = Wc(Ld));
}
const kd = (...e) => {
  const t = Ad().createApp(...e);
  ({}).NODE_ENV !== "production" && (Sd(t), Md(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Pd(r);
    if (!o)
      return;
    const s = t._component;
    !G(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Sd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Fa(t) || za(t),
    writable: !1
  });
}
function Md(e) {
  if (Gl()) {
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
function Pd(e) {
  if (ge(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && x(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && x('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Fd() {
  cd();
}
({}).NODE_ENV !== "production" && Fd();
const ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, zd = {
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
function jd(e, t, n, r, o, s) {
  const i = sn("List"), l = sn("Edit");
  return v(), E("div", null, [
    this.entity.id ? (v(), ln(l, {
      key: 1,
      entityKey: this.entity,
      onCancel: t[1] || (t[1] = (a) => s.cancelEdit())
    }, null, 8, ["entityKey"])) : (v(), ln(i, {
      key: 0,
      onSelect: t[0] || (t[0] = (a) => s.edit(a))
    }))
  ]);
}
const Ud = /* @__PURE__ */ ce(zd, [["render", jd]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const gt = typeof window < "u";
let Je, an;
if ({}.NODE_ENV !== "production") {
  const e = gt && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Je = (t) => e.mark(t), an = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Bd = /\{([0-9a-zA-Z]+)\}/g;
function _s(e, ...t) {
  return t.length === 1 && de(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Bd, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Hd = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", vt = (e) => Hd ? Symbol(e) : e, Wd = (e, t, n) => qd({ l: e, k: t, s: n }), qd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), Kd = (e) => vs(e) === "[object Date]", Rr = (e) => vs(e) === "[object RegExp]", Yr = (e) => oe(e) && Object.keys(e).length === 0;
function Dn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const je = Object.assign;
let di;
const hs = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fi(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Gd = Object.prototype.hasOwnProperty;
function gs(e, t) {
  return Gd.call(e, t);
}
const $e = Array.isArray, Te = (e) => typeof e == "function", z = (e) => typeof e == "string", ve = (e) => typeof e == "boolean", de = (e) => e !== null && typeof e == "object", Zl = Object.prototype.toString, vs = (e) => Zl.call(e), oe = (e) => vs(e) === "[object Object]", Yd = (e) => e == null ? "" : $e(e) || oe(e) && e.toString === Zl ? JSON.stringify(e, null, 2) : String(e), pi = 2;
function Xd(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let i = 0; i < r.length; i++)
    if (o += r[i].length + 1, o >= t) {
      for (let l = i - pi; l <= i + pi || n > o; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const a = l + 1;
        s.push(`${a}${" ".repeat(3 - String(a).length)}|  ${r[l]}`);
        const u = r[l].length;
        if (l === i) {
          const f = t - (o - u) + 1, d = Math.max(1, n > o ? u - f : n - t);
          s.push("   |  " + " ".repeat(f) + "^".repeat(d));
        } else if (l > i) {
          if (n > o) {
            const f = Math.max(Math.min(n - o, u), 1);
            s.push("   |  " + "^".repeat(f));
          }
          o += u + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function ea() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const xe = {
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
}, Jd = {
  [xe.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [xe.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [xe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [xe.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [xe.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [xe.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [xe.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [xe.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [xe.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [xe.INVALID_LINKED_FORMAT]: "Invalid linked format",
  [xe.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [xe.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [xe.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [xe.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function ta(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, i = {}.NODE_ENV !== "production" ? _s((o || Jd)[e] || "", ...s || []) : e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const na = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const jt = [];
jt[0] = {
  w: [0],
  i: [3, 0],
  ["["]: [4],
  o: [7]
};
jt[1] = {
  w: [1],
  ["."]: [2],
  ["["]: [4],
  o: [7]
};
jt[2] = {
  w: [2],
  i: [3, 0],
  [0]: [3, 0]
};
jt[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1]
};
jt[4] = {
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
jt[5] = {
  ["'"]: [4, 0],
  o: 8,
  l: [5, 0]
};
jt[6] = {
  ['"']: [4, 0],
  o: 8,
  l: [6, 0]
};
const Qd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Zd(e) {
  return Qd.test(e);
}
function ef(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function tf(e) {
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
function nf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Zd(t) ? ef(t) : "*" + t;
}
function rf(e) {
  const t = [];
  let n = -1, r = 0, o = 0, s, i, l, a, u, f, d;
  const p = [];
  p[0] = () => {
    i === void 0 ? i = l : i += l;
  }, p[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, p[2] = () => {
    p[0](), o++;
  }, p[3] = () => {
    if (o > 0)
      o--, r = 4, p[0]();
    else {
      if (o = 0, i === void 0 || (i = nf(i), i === !1))
        return !1;
      p[1]();
    }
  };
  function $() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, l = "\\" + g, p[0](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && $())) {
      if (a = tf(s), d = jt[r], u = d[a] || d.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = p[u[1]], f && (l = s, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const mi = /* @__PURE__ */ new Map();
function of(e, t) {
  return de(e) ? e[t] : null;
}
function sf(e, t) {
  if (!de(e))
    return null;
  let n = mi.get(t);
  if (n || (n = rf(t), n && mi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const i = o[n[s]];
    if (i === void 0)
      return null;
    o = i, s++;
  }
  return o;
}
const lf = (e) => e, af = (e) => "", uf = "text", cf = (e) => e.length === 0 ? "" : e.join(""), df = Yd;
function _i(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function ff(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function pf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function mf(e = {}) {
  const t = e.locale, n = ff(e), r = de(e.pluralRules) && z(t) && Te(e.pluralRules[t]) ? e.pluralRules[t] : _i, o = de(e.pluralRules) && z(t) && Te(e.pluralRules[t]) ? _i : void 0, s = (k) => k[r(n, k.length, o)], i = e.list || [], l = (k) => i[k], a = e.named || {};
  Ie(e.pluralIndex) && pf(n, a);
  const u = (k) => a[k];
  function f(k) {
    const P = Te(e.messages) ? e.messages(k) : de(e.messages) ? e.messages[k] : !1;
    return P || (e.parent ? e.parent.message(k) : af);
  }
  const d = (k) => e.modifiers ? e.modifiers[k] : lf, p = oe(e.processor) && Te(e.processor.normalize) ? e.processor.normalize : cf, $ = oe(e.processor) && Te(e.processor.interpolate) ? e.processor.interpolate : df, g = oe(e.processor) && z(e.processor.type) ? e.processor.type : uf, w = {
    list: l,
    named: u,
    plural: s,
    linked: (k, ...P) => {
      const [B, A] = P;
      let D = "text", J = "";
      P.length === 1 ? de(B) ? (J = B.modifier || J, D = B.type || D) : z(B) && (J = B || J) : P.length === 2 && (z(B) && (J = B || J), z(A) && (D = A || D));
      let K = f(k)(w);
      return D === "vnode" && $e(K) && J && (K = K[0]), J ? d(J)(K, D) : K;
    },
    message: f,
    type: g,
    interpolate: $,
    normalize: p
  };
  return w;
}
let Xn = null;
function _f(e) {
  Xn = e;
}
function hf(e, t, n) {
  Xn && Xn.emit(na.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const gf = /* @__PURE__ */ vf(na.FunctionTranslate);
function vf(e) {
  return (t) => Xn && Xn.emit(e, t);
}
const Ye = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, Ef = {
  [Ye.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ye.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ye.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ye.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ye.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ye.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function On(e, ...t) {
  return _s(Ef[e], ...t);
}
function $f(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...$e(t) ? t : de(t) ? Object.keys(t) : z(t) ? [t] : [n]
  ])];
}
function ra(e, t, n) {
  const r = z(n) ? n : Es, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; $e(i); )
      i = hi(s, i, t);
    const l = $e(t) || !oe(t) ? t : t.default ? t.default : null;
    i = z(l) ? [l] : l, $e(i) && hi(s, i, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function hi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ve(r); o++) {
    const s = t[o];
    z(s) && (r = yf(e, t[o], n));
  }
  return r;
}
function yf(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = bf(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function bf(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), ($e(n) || oe(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Nf = "9.2.2", Xr = -1, Es = "en-US", xr = "", gi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Of() {
  return {
    upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && z(e) ? gi(e) : t === "vnode" && de(e) && "__v_isVNode" in e ? gi(e.children) : e
  };
}
let Tf, oa;
function If(e) {
  oa = e;
}
let sa;
function Df(e) {
  sa = e;
}
let ia = null;
const vi = (e) => {
  ia = e;
}, wf = () => ia;
let la = null;
const Ei = (e) => {
  la = e;
}, Cf = () => la;
let $i = 0;
function Rf(e = {}) {
  const t = z(e.version) ? e.version : Nf, n = z(e.locale) ? e.locale : Es, r = $e(e.fallbackLocale) || oe(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, o = oe(e.messages) ? e.messages : { [n]: {} }, s = oe(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = oe(e.numberFormats) ? e.numberFormats : { [n]: {} }, l = je({}, e.modifiers || {}, Of()), a = e.pluralRules || {}, u = Te(e.missing) ? e.missing : null, f = ve(e.missingWarn) || Rr(e.missingWarn) ? e.missingWarn : !0, d = ve(e.fallbackWarn) || Rr(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, $ = !!e.unresolving, g = Te(e.postTranslation) ? e.postTranslation : null, N = oe(e.processor) ? e.processor : null, w = ve(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, P = Te(e.messageCompiler) ? e.messageCompiler : Tf, B = Te(e.messageResolver) ? e.messageResolver : oa || of, A = Te(e.localeFallbacker) ? e.localeFallbacker : sa || $f, D = de(e.fallbackContext) ? e.fallbackContext : void 0, J = Te(e.onWarn) ? e.onWarn : Dn, K = e, H = de(K.__datetimeFormatters) ? K.__datetimeFormatters : /* @__PURE__ */ new Map(), Y = de(K.__numberFormatters) ? K.__numberFormatters : /* @__PURE__ */ new Map(), ee = de(K.__meta) ? K.__meta : {};
  $i++;
  const le = {
    version: t,
    cid: $i,
    locale: n,
    fallbackLocale: r,
    messages: o,
    modifiers: l,
    pluralRules: a,
    missing: u,
    missingWarn: f,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: $,
    postTranslation: g,
    processor: N,
    warnHtmlMessage: w,
    escapeParameter: k,
    messageCompiler: P,
    messageResolver: B,
    localeFallbacker: A,
    fallbackContext: D,
    onWarn: J,
    __meta: ee
  };
  return le.datetimeFormats = s, le.numberFormats = i, le.__datetimeFormatters = H, le.__numberFormatters = Y, {}.NODE_ENV !== "production" && (le.__v_emitter = K.__v_emitter != null ? K.__v_emitter : void 0), ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && hf(le, t, ee), le;
}
function Jr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function aa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function $s(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  if ({}.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (s !== null) {
    const l = s(e, n, t, o);
    return z(l) ? l : t;
  } else
    return {}.NODE_ENV !== "production" && aa(r, t) && i(On(Ye.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function An(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
let ua = xe.__EXTEND_POINT__;
const uo = () => ++ua, Nt = {
  INVALID_ARGUMENT: ua,
  INVALID_DATE_ARGUMENT: uo(),
  INVALID_ISO_DATE_ARGUMENT: uo(),
  __EXTEND_POINT__: uo()
};
function En(e) {
  return ta(e, null, {}.NODE_ENV !== "production" ? { messages: xf } : void 0);
}
const xf = {
  [Nt.INVALID_ARGUMENT]: "Invalid arguments",
  [Nt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Nt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, yi = () => "", ft = (e) => Te(e);
function bi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: i, messages: l } = e, [a, u] = So(...t), f = ve(u.missingWarn) ? u.missingWarn : e.missingWarn, d = ve(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = ve(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, $ = !!u.resolvedMessage, g = z(u.default) || ve(u.default) ? ve(u.default) ? s ? a : () => a : u.default : n ? s ? a : () => a : "", N = n || g !== "", w = z(u.locale) ? u.locale : e.locale;
  p && Vf(u);
  let [k, P, B] = $ ? [
    a,
    w,
    l[w] || {}
  ] : ca(e, a, w, i, d, f), A = k, D = a;
  if (!$ && !(z(A) || ft(A)) && N && (A = g, D = A), !$ && (!(z(A) || ft(A)) || !z(P)))
    return o ? Xr : a;
  if ({}.NODE_ENV !== "production" && z(A) && e.messageCompiler == null)
    return Dn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${a}'.`), a;
  let J = !1;
  const K = () => {
    J = !0;
  }, H = ft(A) ? A : da(e, a, P, A, D, K);
  if (J)
    return A;
  const Y = kf(e, P, B, u), ee = mf(Y), le = Lf(e, H, ee), he = r ? r(le, a) : le;
  if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Oe = {
      timestamp: Date.now(),
      key: z(a) ? a : ft(A) ? A.key : "",
      locale: P || (ft(A) ? A.locale : ""),
      format: z(A) ? A : ft(A) ? A.source : "",
      message: he
    };
    Oe.meta = je({}, e.__meta, wf() || {}), gf(Oe);
  }
  return he;
}
function Vf(e) {
  $e(e.list) ? e.list = e.list.map((t) => z(t) ? fi(t) : t) : de(e.named) && Object.keys(e.named).forEach((t) => {
    z(e.named[t]) && (e.named[t] = fi(e.named[t]));
  });
}
function ca(e, t, n, r, o, s) {
  const { messages: i, onWarn: l, messageResolver: a, localeFallbacker: u } = e, f = u(e, r, n);
  let d = {}, p, $ = null, g = n, N = null;
  const w = "translate";
  for (let k = 0; k < f.length; k++) {
    if (p = N = f[k], {}.NODE_ENV !== "production" && n !== p && Jr(o, t) && l(On(Ye.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), {}.NODE_ENV !== "production" && n !== p) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: w,
        key: t,
        from: g,
        to: N,
        groupId: `${w}:${t}`
      });
    }
    d = i[p] || {};
    let P = null, B, A;
    if ({}.NODE_ENV !== "production" && gt && (P = window.performance.now(), B = "intlify-message-resolve-start", A = "intlify-message-resolve-end", Je && Je(B)), ($ = a(d, t)) === null && ($ = d[t]), {}.NODE_ENV !== "production" && gt) {
      const J = window.performance.now(), K = e.__v_emitter;
      K && P && $ && K.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: $,
        time: J - P,
        groupId: `${w}:${t}`
      }), B && A && Je && an && (Je(A), an("intlify message resolve", B, A));
    }
    if (z($) || Te($))
      break;
    const D = $s(
      e,
      t,
      p,
      s,
      w
    );
    D !== t && ($ = D), g = N;
  }
  return [$, p, d];
}
function da(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (ft(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (i == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  let a = null, u, f;
  ({}).NODE_ENV !== "production" && gt && (a = window.performance.now(), u = "intlify-message-compilation-start", f = "intlify-message-compilation-end", Je && Je(u));
  const d = i(r, Af(e, n, o, r, l, s));
  if ({}.NODE_ENV !== "production" && gt) {
    const p = window.performance.now(), $ = e.__v_emitter;
    $ && a && $.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: p - a,
      groupId: `translate:${t}`
    }), u && f && Je && an && (Je(f), an("intlify message compilation", u, f));
  }
  return d.locale = n, d.key = t, d.source = r, d;
}
function Lf(e, t, n) {
  let r = null, o, s;
  ({}).NODE_ENV !== "production" && gt && (r = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Je && Je(o));
  const i = t(n);
  if ({}.NODE_ENV !== "production" && gt) {
    const l = window.performance.now(), a = e.__v_emitter;
    a && r && a.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: l - r,
      groupId: `translate:${t.key}`
    }), o && s && Je && an && (Je(s), an("intlify message evaluation", o, s));
  }
  return i;
}
function So(...e) {
  const [t, n, r] = e, o = {};
  if (!z(t) && !Ie(t) && !ft(t))
    throw En(Nt.INVALID_ARGUMENT);
  const s = Ie(t) ? String(t) : (ft(t), t);
  return Ie(n) ? o.plural = n : z(n) ? o.default = n : oe(n) && !Yr(n) ? o.named = n : $e(n) && (o.list = n), Ie(r) ? o.plural = r : z(r) ? o.default = r : oe(r) && je(o, r), [s, o];
}
function Af(e, t, n, r, o, s) {
  return {
    warnHtmlMessage: o,
    onError: (i) => {
      if (s && s(i), {}.NODE_ENV !== "production") {
        const l = `Message compilation error: ${i.message}`, a = i.location && Xd(r, i.location.start.offset, i.location.end.offset), u = e.__v_emitter;
        u && u.emit("compile-error", {
          message: r,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(a ? `${l}
${a}` : l);
      } else
        throw i;
    },
    onCacheKey: (i) => Wd(t, n, i)
  };
}
function kf(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: i, fallbackLocale: l, fallbackWarn: a, missingWarn: u, fallbackContext: f } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: ($) => {
      let g = i(n, $);
      if (g == null && f) {
        const [, , N] = ca(f, $, t, l, a, u);
        g = i(N, $);
      }
      if (z(g)) {
        let N = !1;
        const k = da(e, $, t, g, $, () => {
          N = !0;
        });
        return N ? yi : k;
      } else
        return ft(g) ? g : yi;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), Ie(r.plural) && (p.pluralIndex = r.plural), p;
}
const Ni = typeof Intl < "u", fa = {
  dateTimeFormat: Ni && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ni && typeof Intl.NumberFormat < "u"
};
function Oi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: l } = e;
  if ({}.NODE_ENV !== "production" && !fa.dateTimeFormat)
    return s(On(Ye.CANNOT_FORMAT_DATE)), xr;
  const [a, u, f, d] = Mo(...t), p = ve(f.missingWarn) ? f.missingWarn : e.missingWarn, $ = ve(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, N = z(f.locale) ? f.locale : e.locale, w = i(
    e,
    o,
    N
  );
  if (!z(a) || a === "")
    return new Intl.DateTimeFormat(N, d).format(u);
  let k = {}, P, B = null, A = N, D = null;
  const J = "datetime format";
  for (let Y = 0; Y < w.length; Y++) {
    if (P = D = w[Y], {}.NODE_ENV !== "production" && N !== P && Jr($, a) && s(On(Ye.FALLBACK_TO_DATE_FORMAT, {
      key: a,
      target: P
    })), {}.NODE_ENV !== "production" && N !== P) {
      const ee = e.__v_emitter;
      ee && ee.emit("fallback", {
        type: J,
        key: a,
        from: A,
        to: D,
        groupId: `${J}:${a}`
      });
    }
    if (k = n[P] || {}, B = k[a], oe(B))
      break;
    $s(e, a, P, p, J), A = D;
  }
  if (!oe(B) || !z(P))
    return r ? Xr : a;
  let K = `${P}__${a}`;
  Yr(d) || (K = `${K}__${JSON.stringify(d)}`);
  let H = l.get(K);
  return H || (H = new Intl.DateTimeFormat(P, je({}, B, d)), l.set(K, H)), g ? H.formatToParts(u) : H.format(u);
}
const pa = [
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
function Mo(...e) {
  const [t, n, r, o] = e, s = {};
  let i = {}, l;
  if (z(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a)
      throw En(Nt.INVALID_ISO_DATE_ARGUMENT);
    const u = a[3] ? a[3].trim().startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw En(Nt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Kd(t)) {
    if (isNaN(t.getTime()))
      throw En(Nt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ie(t))
    l = t;
  else
    throw En(Nt.INVALID_ARGUMENT);
  return z(n) ? s.key = n : oe(n) && Object.keys(n).forEach((a) => {
    pa.includes(a) ? i[a] = n[a] : s[a] = n[a];
  }), z(r) ? s.locale = r : oe(r) && (i = r), oe(o) && (i = o), [s.key || "", l, s, i];
}
function Ti(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    !r.__datetimeFormatters.has(s) || r.__datetimeFormatters.delete(s);
  }
}
function Ii(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: l } = e;
  if ({}.NODE_ENV !== "production" && !fa.numberFormat)
    return s(On(Ye.CANNOT_FORMAT_NUMBER)), xr;
  const [a, u, f, d] = Po(...t), p = ve(f.missingWarn) ? f.missingWarn : e.missingWarn, $ = ve(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, N = z(f.locale) ? f.locale : e.locale, w = i(
    e,
    o,
    N
  );
  if (!z(a) || a === "")
    return new Intl.NumberFormat(N, d).format(u);
  let k = {}, P, B = null, A = N, D = null;
  const J = "number format";
  for (let Y = 0; Y < w.length; Y++) {
    if (P = D = w[Y], {}.NODE_ENV !== "production" && N !== P && Jr($, a) && s(On(Ye.FALLBACK_TO_NUMBER_FORMAT, {
      key: a,
      target: P
    })), {}.NODE_ENV !== "production" && N !== P) {
      const ee = e.__v_emitter;
      ee && ee.emit("fallback", {
        type: J,
        key: a,
        from: A,
        to: D,
        groupId: `${J}:${a}`
      });
    }
    if (k = n[P] || {}, B = k[a], oe(B))
      break;
    $s(e, a, P, p, J), A = D;
  }
  if (!oe(B) || !z(P))
    return r ? Xr : a;
  let K = `${P}__${a}`;
  Yr(d) || (K = `${K}__${JSON.stringify(d)}`);
  let H = l.get(K);
  return H || (H = new Intl.NumberFormat(P, je({}, B, d)), l.set(K, H)), g ? H.formatToParts(u) : H.format(u);
}
const ma = [
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
function Po(...e) {
  const [t, n, r, o] = e, s = {};
  let i = {};
  if (!Ie(t))
    throw En(Nt.INVALID_ARGUMENT);
  const l = t;
  return z(n) ? s.key = n : oe(n) && Object.keys(n).forEach((a) => {
    ma.includes(a) ? i[a] = n[a] : s[a] = n[a];
  }), z(r) ? s.locale = r : oe(r) && (i = r), oe(o) && (i = o), [s.key || "", l, s, i];
}
function Di(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    !r.__numberFormatters.has(s) || r.__numberFormatters.delete(s);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hs().__INTLIFY_PROD_DEVTOOLS__ = !1);
function Sf() {
  return _a().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _a() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Mf = typeof Proxy == "function", Pf = "devtools-plugin:setup", Ff = "plugin:settings:set";
let pn, Fo;
function zf() {
  var e;
  return pn !== void 0 || (typeof window < "u" && window.performance ? (pn = !0, Fo = window.performance) : typeof global < "u" && ((e = global.perf_hooks) === null || e === void 0 ? void 0 : e.performance) ? (pn = !0, Fo = global.perf_hooks.performance) : pn = !1), pn;
}
function jf() {
  return zf() ? Fo.now() : Date.now();
}
class Uf {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        r[i] = l.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), l = JSON.parse(i);
      Object.assign(s, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return jf();
      }
    }, n && n.on(Ff, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...a) => {
        this.onQueue.push({
          method: l,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...a) => (this.targetQueue.push({
        method: l,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[l](...a)) : (...a) => new Promise((u) => {
        this.targetQueue.push({
          method: l,
          args: a,
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
function Bf(e, t) {
  const n = e, r = _a(), o = Sf(), s = Mf && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(Pf, e, t);
  else {
    const i = s ? new Uf(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const co = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
}, Hf = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
}, Wf = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const qf = "9.2.2";
function Kf() {
  let e = !1;
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hs().__INTLIFY_PROD_DEVTOOLS__ = !1), {}.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let ha = Ye.__EXTEND_POINT__;
const mn = () => ++ha, rt = {
  FALLBACK_TO_ROOT: ha,
  NOT_SUPPORTED_PRESERVE: mn(),
  NOT_SUPPORTED_FORMATTER: mn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: mn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: mn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: mn(),
  NOT_FOUND_PARENT_SCOPE: mn()
}, Gf = {
  [rt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [rt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [rt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [rt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [rt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [rt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [rt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function Qr(e, ...t) {
  return _s(Gf[e], ...t);
}
let ga = xe.__EXTEND_POINT__;
const He = () => ++ga, pe = {
  UNEXPECTED_RETURN_TYPE: ga,
  INVALID_ARGUMENT: He(),
  MUST_BE_CALL_SETUP_TOP: He(),
  NOT_INSLALLED: He(),
  NOT_AVAILABLE_IN_LEGACY_MODE: He(),
  REQUIRED_VALUE: He(),
  INVALID_VALUE: He(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: He(),
  NOT_INSLALLED_WITH_PROVIDE: He(),
  UNEXPECTED_ERROR: He(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: He(),
  BRIDGE_SUPPORT_VUE_2_ONLY: He(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: He(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: He(),
  __EXTEND_POINT__: He()
};
function Qe(e, ...t) {
  return ta(e, null, {}.NODE_ENV !== "production" ? { messages: Yf, args: t } : void 0);
}
const Yf = {
  [pe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [pe.INVALID_ARGUMENT]: "Invalid argument",
  [pe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [pe.NOT_INSLALLED]: "Need to install with `app.use` function",
  [pe.UNEXPECTED_ERROR]: "Unexpected error",
  [pe.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [pe.REQUIRED_VALUE]: "Required in value: {0}",
  [pe.INVALID_VALUE]: "Invalid value",
  [pe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [pe.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [pe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [pe.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [pe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",
  [pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, zo = /* @__PURE__ */ vt("__transrateVNode"), jo = /* @__PURE__ */ vt("__datetimeParts"), Uo = /* @__PURE__ */ vt("__numberParts"), Jn = /* @__PURE__ */ vt("__enableEmitter"), Bo = /* @__PURE__ */ vt("__disableEmitter"), Xf = vt("__setPluralRules");
vt("__intlifyMeta");
const Jf = /* @__PURE__ */ vt("__injectWithOption");
function Ho(e) {
  if (!de(e))
    return e;
  for (const t in e)
    if (!!gs(e, t))
      if (!t.includes("."))
        de(e[t]) && Ho(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e;
        for (let s = 0; s < r; s++)
          n[s] in o || (o[n[s]] = {}), o = o[n[s]];
        o[n[r]] = e[t], delete e[t], de(o[n[r]]) && Ho(o[n[r]]);
      }
  return e;
}
function va(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, i = oe(n) ? n : $e(r) ? {} : { [e]: {} };
  if ($e(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: a, resource: u } = l;
      a ? (i[a] = i[a] || {}, Fn(u, i[a])) : Fn(u, i);
    } else
      z(l) && Fn(JSON.parse(l), i);
  }), o == null && s)
    for (const l in i)
      gs(i, l) && Ho(i[l]);
  return i;
}
const dr = (e) => !de(e) || $e(e);
function Fn(e, t) {
  if (dr(e) || dr(t))
    throw Qe(pe.INVALID_VALUE);
  for (const n in e)
    gs(e, n) && (dr(e[n]) || dr(t[n]) ? t[n] = e[n] : Fn(e[n], t[n]));
}
function Ea(e) {
  return e.type;
}
function Qf(e, t, n) {
  let r = de(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = va(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (de(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (de(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function wi(e) {
  return Ce(In, null, e, 0);
}
const Ci = "__INTLIFY_META__";
let Ri = 0;
function xi(e) {
  return (t, n, r, o) => e(n, r, nr() || void 0, o);
}
const Zf = () => {
  const e = nr();
  let t = null;
  return e && (t = Ea(e)[Ci]) ? { [Ci]: t } : null;
};
function $a(e = {}, t) {
  const { __root: n } = e, r = n === void 0;
  let o = ve(e.inheritLocale) ? e.inheritLocale : !0;
  const s = Ve(
    n && o ? n.locale.value : z(e.locale) ? e.locale : Es
  ), i = Ve(
    n && o ? n.fallbackLocale.value : z(e.fallbackLocale) || $e(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), l = Ve(va(s.value, e)), a = Ve(oe(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), u = Ve(oe(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let f = n ? n.missingWarn : ve(e.missingWarn) || Rr(e.missingWarn) ? e.missingWarn : !0, d = n ? n.fallbackWarn : ve(e.fallbackWarn) || Rr(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : ve(e.fallbackRoot) ? e.fallbackRoot : !0, $ = !!e.fallbackFormat, g = Te(e.missing) ? e.missing : null, N = Te(e.missing) ? xi(e.missing) : null, w = Te(e.postTranslation) ? e.postTranslation : null, k = n ? n.warnHtmlMessage : ve(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter;
  const B = n ? n.modifiers : oe(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || n && n.pluralRules, D;
  D = (() => {
    r && Ei(null);
    const _ = {
      version: qf,
      locale: s.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: B,
      pluralRules: A,
      missing: N === null ? void 0 : N,
      missingWarn: f,
      fallbackWarn: d,
      fallbackFormat: $,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: k,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = a.value, _.numberFormats = u.value, _.__datetimeFormatters = oe(D) ? D.__datetimeFormatters : void 0, _.__numberFormatters = oe(D) ? D.__numberFormatters : void 0, {}.NODE_ENV !== "production" && (_.__v_emitter = oe(D) ? D.__v_emitter : void 0);
    const h = Rf(_);
    return r && Ei(h), h;
  })(), An(D, s.value, i.value);
  function K() {
    return [
      s.value,
      i.value,
      l.value,
      a.value,
      u.value
    ];
  }
  const H = ue({
    get: () => s.value,
    set: (_) => {
      s.value = _, D.locale = s.value;
    }
  }), Y = ue({
    get: () => i.value,
    set: (_) => {
      i.value = _, D.fallbackLocale = i.value, An(D, s.value, _);
    }
  }), ee = ue(() => l.value), le = /* @__PURE__ */ ue(() => a.value), he = /* @__PURE__ */ ue(() => u.value);
  function Oe() {
    return Te(w) ? w : null;
  }
  function Rt(_) {
    w = _, D.postTranslation = _;
  }
  function Ze() {
    return g;
  }
  function be(_) {
    _ !== null && (N = xi(_)), g = _, D.missing = N;
  }
  function te(_, h) {
    return _ !== "translate" || !h.resolvedMessage;
  }
  const X = (_, h, F, U, Z, se) => {
    K();
    let re;
    if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        vi(Zf()), r || (D.fallbackContext = n ? Cf() : void 0), re = _(D);
      } finally {
        vi(null), r || (D.fallbackContext = void 0);
      }
    else
      re = _(D);
    if (Ie(re) && re === Xr) {
      const [fe, Ge] = h();
      if ({}.NODE_ENV !== "production" && n && z(fe) && te(F, Ge) && (p && (Jr(d, fe) || aa(f, fe)) && Dn(Qr(rt.FALLBACK_TO_ROOT, {
        key: fe,
        type: F
      })), {}.NODE_ENV !== "production")) {
        const { __v_emitter: Et } = D;
        Et && p && Et.emit("fallback", {
          type: F,
          key: fe,
          to: "global",
          groupId: `${F}:${fe}`
        });
      }
      return n && p ? U(n) : Z(fe);
    } else {
      if (se(re))
        return re;
      throw Qe(pe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ke(..._) {
    return X((h) => Reflect.apply(bi, null, [h, ..._]), () => So(..._), "translate", (h) => Reflect.apply(h.t, h, [..._]), (h) => h, (h) => z(h));
  }
  function _e(..._) {
    const [h, F, U] = _;
    if (U && !de(U))
      throw Qe(pe.INVALID_ARGUMENT);
    return ke(h, F, je({ resolvedMessage: !0 }, U || {}));
  }
  function Se(..._) {
    return X((h) => Reflect.apply(Oi, null, [h, ..._]), () => Mo(..._), "datetime format", (h) => Reflect.apply(h.d, h, [..._]), () => xr, (h) => z(h));
  }
  function De(..._) {
    return X((h) => Reflect.apply(Ii, null, [h, ..._]), () => Po(..._), "number format", (h) => Reflect.apply(h.n, h, [..._]), () => xr, (h) => z(h));
  }
  function lt(_) {
    return _.map((h) => z(h) || Ie(h) || ve(h) ? wi(String(h)) : h);
  }
  const eo = {
    normalize: lt,
    interpolate: (_) => _,
    type: "vnode"
  };
  function to(..._) {
    return X(
      (h) => {
        let F;
        const U = h;
        try {
          U.processor = eo, F = Reflect.apply(bi, null, [U, ..._]);
        } finally {
          U.processor = null;
        }
        return F;
      },
      () => So(..._),
      "translate",
      (h) => h[zo](..._),
      (h) => [wi(h)],
      (h) => $e(h)
    );
  }
  function nt(..._) {
    return X(
      (h) => Reflect.apply(Ii, null, [h, ..._]),
      () => Po(..._),
      "number format",
      (h) => h[Uo](..._),
      () => [],
      (h) => z(h) || $e(h)
    );
  }
  function fn(..._) {
    return X(
      (h) => Reflect.apply(Oi, null, [h, ..._]),
      () => Mo(..._),
      "datetime format",
      (h) => h[jo](..._),
      () => [],
      (h) => z(h) || $e(h)
    );
  }
  function or(_) {
    A = _, D.pluralRules = A;
  }
  function xt(_, h) {
    const F = z(h) ? h : s.value, U = c(F);
    return D.messageResolver(U, _) !== null;
  }
  function Cn(_) {
    let h = null;
    const F = ra(D, i.value, s.value);
    for (let U = 0; U < F.length; U++) {
      const Z = l.value[F[U]] || {}, se = D.messageResolver(Z, _);
      if (se != null) {
        h = se;
        break;
      }
    }
    return h;
  }
  function Rn(_) {
    const h = Cn(_);
    return h != null ? h : n ? n.tm(_) || {} : {};
  }
  function c(_) {
    return l.value[_] || {};
  }
  function m(_, h) {
    l.value[_] = h, D.messages = l.value;
  }
  function b(_, h) {
    l.value[_] = l.value[_] || {}, Fn(h, l.value[_]), D.messages = l.value;
  }
  function I(_) {
    return a.value[_] || {};
  }
  function T(_, h) {
    a.value[_] = h, D.datetimeFormats = a.value, Ti(D, _, h);
  }
  function V(_, h) {
    a.value[_] = je(a.value[_] || {}, h), D.datetimeFormats = a.value, Ti(D, _, h);
  }
  function S(_) {
    return u.value[_] || {};
  }
  function R(_, h) {
    u.value[_] = h, D.numberFormats = u.value, Di(D, _, h);
  }
  function L(_, h) {
    u.value[_] = je(u.value[_] || {}, h), D.numberFormats = u.value, Di(D, _, h);
  }
  Ri++, n && gt && (it(n.locale, (_) => {
    o && (s.value = _, D.locale = _, An(D, s.value, i.value));
  }), it(n.fallbackLocale, (_) => {
    o && (i.value = _, D.fallbackLocale = _, An(D, s.value, i.value));
  }));
  const O = {
    id: Ri,
    locale: H,
    fallbackLocale: Y,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(_) {
      o = _, _ && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, An(D, s.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: ee,
    get modifiers() {
      return B;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(_) {
      f = _, D.missingWarn = f;
    },
    get fallbackWarn() {
      return d;
    },
    set fallbackWarn(_) {
      d = _, D.fallbackWarn = d;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(_) {
      p = _;
    },
    get fallbackFormat() {
      return $;
    },
    set fallbackFormat(_) {
      $ = _, D.fallbackFormat = $;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(_) {
      k = _, D.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(_) {
      P = _, D.escapeParameter = _;
    },
    t: ke,
    getLocaleMessage: c,
    setLocaleMessage: m,
    mergeLocaleMessage: b,
    getPostTranslationHandler: Oe,
    setPostTranslationHandler: Rt,
    getMissingHandler: Ze,
    setMissingHandler: be,
    [Xf]: or
  };
  return O.datetimeFormats = le, O.numberFormats = he, O.rt = _e, O.te = xt, O.tm = Rn, O.d = Se, O.n = De, O.getDateTimeFormat = I, O.setDateTimeFormat = T, O.mergeDateTimeFormat = V, O.getNumberFormat = S, O.setNumberFormat = R, O.mergeNumberFormat = L, O[Jf] = e.__injectWithOption, O[zo] = to, O[jo] = fn, O[Uo] = nt, {}.NODE_ENV !== "production" && (O[Jn] = (_) => {
    D.__v_emitter = _;
  }, O[Bo] = () => {
    D.__v_emitter = void 0;
  }), O;
}
const ys = {
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
function ep({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => r = [
    ...r,
    ...$e(o.children) ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, {});
}
function ya(e) {
  return M;
}
const fo = {
  name: "i18n-t",
  props: je({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => Ie(e) || !isNaN(e)
    }
  }, ys),
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Ns({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((d) => d !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = z(e.plural) ? +e.plural : e.plural);
      const l = ep(t, s), a = o[zo](e.keypath, l, i), u = je({}, r), f = z(e.tag) || de(e.tag) ? e.tag : ya();
      return Jl(f, u, a);
    };
  }
};
function tp(e) {
  return $e(e) && !z(e[0]);
}
function ba(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let l = {};
    e.locale && (i.locale = e.locale), z(e.format) ? i.key = e.format : de(e.format) && (z(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((p, $) => n.includes($) ? je({}, p, { [$]: e.format[$] }) : p, {}));
    const a = r(e.value, i, l);
    let u = [i.key];
    $e(a) ? u = a.map((p, $) => {
      const g = o[p.type], N = g ? g({ [p.type]: p.value, index: $, parts: a }) : [p.value];
      return tp(N) && (N[0].key = `${p.type}-${$}`), N;
    }) : z(a) && (u = [a]);
    const f = je({}, s), d = z(e.tag) || de(e.tag) ? e.tag : ya();
    return Jl(d, f, u);
  };
}
const Vi = {
  name: "i18n-n",
  props: je({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ys),
  setup(e, t) {
    const n = e.i18n || Ns({ useScope: "parent", __useComponent: !0 });
    return ba(e, t, ma, (...r) => n[Uo](...r));
  }
}, Li = {
  name: "i18n-d",
  props: je({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ys),
  setup(e, t) {
    const n = e.i18n || Ns({ useScope: "parent", __useComponent: !0 });
    return ba(e, t, pa, (...r) => n[jo](...r));
  }
};
function np(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function rp(e) {
  const t = (i) => {
    const { instance: l, modifiers: a, value: u } = i;
    if (!l || !l.$)
      throw Qe(pe.UNEXPECTED_ERROR);
    const f = np(e, l.$);
    ({}).NODE_ENV !== "production" && a.preserve && Dn(Qr(rt.NOT_SUPPORTED_PRESERVE));
    const d = Ai(u);
    return [
      Reflect.apply(f.t, f, [...ki(d)]),
      f
    ];
  };
  return {
    created: (i, l) => {
      const [a, u] = t(l);
      gt && e.global === u && (i.__i18nWatcher = it(u.locale, () => {
        l.instance && l.instance.$forceUpdate();
      })), i.__composer = u, i.textContent = a;
    },
    unmounted: (i) => {
      gt && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: l }) => {
      if (i.__composer) {
        const a = i.__composer, u = Ai(l);
        i.textContent = Reflect.apply(a.t, a, [
          ...ki(u)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [l] = t(i);
      return { textContent: l };
    }
  };
}
function Ai(e) {
  if (z(e))
    return { path: e };
  if (oe(e)) {
    if (!("path" in e))
      throw Qe(pe.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Qe(pe.INVALID_VALUE);
}
function ki(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, i = {}, l = r || {};
  return z(n) && (i.locale = n), Ie(o) && (i.plural = o), Ie(s) && (i.plural = s), [t, l, i];
}
function op(e, t, ...n) {
  const r = oe(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName, s = ve(r.globalInstall) ? r.globalInstall : !0;
  ({}).NODE_ENV !== "production" && s && o && Dn(Qr(rt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: fo.name
  })), s && (e.component(o ? "i18n" : fo.name, fo), e.component(Vi.name, Vi), e.component(Li.name, Li)), e.directive("t", rp(t));
}
const Na = "vue-i18n: composer properties";
let Wo;
async function sp(e, t) {
  return new Promise((n, r) => {
    try {
      Bf({
        id: "vue-devtools-plugin-vue-i18n",
        label: co["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Na],
        app: e
      }, (o) => {
        Wo = o, o.on.visitComponentTree(({ componentInstance: i, treeNode: l }) => {
          ip(i, l, t);
        }), o.on.inspectComponent(({ componentInstance: i, instanceData: l }) => {
          i.vnode.el && i.vnode.el.__VUE_I18N__ && l && (t.mode === "legacy" ? i.vnode.el.__VUE_I18N__ !== t.global.__composer && Si(l, i.vnode.el.__VUE_I18N__) : Si(l, i.vnode.el.__VUE_I18N__));
        }), o.addInspector({
          id: "vue-i18n-resource-inspector",
          label: co["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Hf["vue-i18n-resource-inspector"]
        }), o.on.getInspectorTree((i) => {
          i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && dp(i, t);
        });
        const s = /* @__PURE__ */ new Map();
        o.on.getInspectorState(async (i) => {
          if (i.app === e && i.inspectorId === "vue-i18n-resource-inspector")
            if (o.unhighlightElement(), pp(i, t), i.nodeId === "global") {
              if (!s.has(i.app)) {
                const [l] = await o.getComponentInstances(i.app);
                s.set(i.app, l);
              }
              o.highlightElement(s.get(i.app));
            } else {
              const l = fp(i.nodeId, t);
              l && o.highlightElement(l);
            }
        }), o.on.editInspectorState((i) => {
          i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && _p(i, t);
        }), o.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: co["vue-i18n-timeline"],
          color: Wf["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (o) {
      console.error(o), r(!1);
    }
  });
}
function Oa(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function ip(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const o = {
      label: `i18n (${Oa(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(o);
  }
}
function Si(e, t) {
  const n = Na;
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
    value: bs(t.messages.value)
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
function bs(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Te(r) && "source" in r ? t[n] = cp(r) : de(r) ? t[n] = bs(r) : t[n] = r;
  }), t;
}
const lp = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function ap(e) {
  return e.replace(/[<>"&]/g, up);
}
function up(e) {
  return lp[e] || e;
}
function cp(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>\u0192</span> ${e.source ? `("${ap(e.source)}")` : "(?)"}`
    }
  };
}
function dp(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, o] of t.__instances) {
    const s = t.mode === "composition" ? o : o.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${Oa(r)} Scope`
    });
  }
}
function fp(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, o] of t.__instances.entries())
      if (o.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function Ta(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function pp(e, t) {
  const n = Ta(e.nodeId, t);
  return n && (e.state = mp(n)), null;
}
function mp(e) {
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
  const o = "Locale messages info", s = [
    {
      type: o,
      key: "messages",
      editable: !1,
      value: bs(e.messages.value)
    }
  ];
  t[o] = s;
  {
    const i = "Datetime formats info", l = [
      {
        type: i,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[i] = l;
    const a = "Datetime formats info", u = [
      {
        type: a,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[a] = u;
  }
  return t;
}
function qo(e, t) {
  if (Wo) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Wo.addTimelineEvent({
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
function _p(e, t) {
  const n = Ta(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && z(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (z(e.state.value) || $e(e.state.value) || de(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ve(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
const hp = /* @__PURE__ */ vt("global-vue-i18n");
function gp(e = {}, t) {
  const n = ve(e.globalInjection) ? e.globalInjection : !0, r = !0, o = /* @__PURE__ */ new Map(), [s, i] = vp(e), l = vt({}.NODE_ENV !== "production" ? "vue-i18n" : "");
  function a(d) {
    return o.get(d) || null;
  }
  function u(d, p) {
    o.set(d, p);
  }
  function f(d) {
    o.delete(d);
  }
  {
    const d = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(p, ...$) {
        ({}).NODE_ENV !== "production" && (p.__VUE_I18N__ = d), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, d), n && Ip(p, d.global), op(p, d, ...$);
        const g = p.unmount;
        if (p.unmount = () => {
          d.dispose(), g();
        }, {}.NODE_ENV !== "production" || !1) {
          if (!await sp(p, d))
            throw Qe(pe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const w = ea();
          {
            const k = i;
            k[Jn] && k[Jn](w);
          }
          w.on("*", qo);
        }
      },
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      __instances: o,
      __getInstance: a,
      __setInstance: u,
      __deleteInstance: f
    };
    return d;
  }
}
function Ns(e = {}) {
  const t = nr();
  if (t == null)
    throw Qe(pe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Qe(pe.NOT_INSLALLED);
  const n = Ep(t), r = yp(n), o = Ea(t), s = $p(e, o);
  if (s === "global")
    return Qf(r, e, o), r;
  if (s === "parent") {
    let a = bp(n, t, e.__useComponent);
    return a == null && ({}.NODE_ENV !== "production" && Dn(Qr(rt.NOT_FOUND_PARENT_SCOPE)), a = r), a;
  }
  const i = n;
  let l = i.__getInstance(t);
  if (l == null) {
    const a = je({}, e);
    "__i18n" in o && (a.__i18n = o.__i18n), r && (a.__root = r), l = $a(a), Np(i, t, l), i.__setInstance(t, l);
  }
  return l;
}
function vp(e, t, n) {
  const r = Xa();
  {
    const o = r.run(() => $a(e));
    if (o == null)
      throw Qe(pe.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Ep(e) {
  {
    const t = en(e.isCE ? hp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Qe(e.isCE ? pe.NOT_INSLALLED_WITH_PROVIDE : pe.UNEXPECTED_ERROR);
    return t;
  }
}
function $p(e, t) {
  return Yr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function yp(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function bp(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = t.parent;
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition" && (r = i.__getInstance(s)), r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Np(e, t, n) {
  let r = null;
  ls(() => {
    if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = ea();
      const o = n;
      o[Jn] && o[Jn](r), r.on("*", qo);
    }
  }, t), us(() => {
    if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      r && r.off("*", qo);
      const o = n;
      o[Bo] && o[Bo](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
const Op = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Tp = ["t", "rt", "d", "n", "tm"];
function Ip(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  Op.forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(t, r);
    if (!o)
      throw Qe(pe.UNEXPECTED_ERROR);
    const s = Ee(o.value) ? {
      get() {
        return o.value.value;
      },
      set(i) {
        o.value.value = i;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, r, s);
  }), e.config.globalProperties.$i18n = n, Tp.forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(t, r);
    if (!o || !o.value)
      throw Qe(pe.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, o);
  });
}
If(sf);
Df(ra);
Kf();
if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = hs();
  e.__INTLIFY__ = !0, _f(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Dp = {
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
    }
  }
}, wp = gp({
  locale: document.getElementById("app").dataset.locale,
  fallbackLocale: "ru",
  globalInjection: !0,
  messages: Dp
}), Ko = {
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
};
const Cp = {
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
}, Rp = { class: "vue-css-spinner" }, xp = { class: "circleOneContainer" }, Vp = { class: "circleTwoContainer" }, Lp = { class: "circleThreeContainer" }, Ap = { class: "circleFourContainer" }, kp = { class: "circleFiveContainer" }, Sp = { class: "circleSixContainer" };
function Mp(e, t, n, r, o, s) {
  return Tt((v(), E("div", Rp, [
    y("div", xp, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ]),
    y("div", Vp, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ]),
    y("div", Lp, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ]),
    y("div", Ap, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ]),
    y("div", kp, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ]),
    y("div", Sp, [
      y("div", {
        class: "circle",
        style: bt(o.css)
      }, null, 4)
    ])
  ], 512)), [
    [Vd, n.loading]
  ]);
}
const Ia = /* @__PURE__ */ ce(Cp, [["render", Mp], ["__scopeId", "data-v-846e8528"]]);
function Mi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = ie(e[r])), n), {});
}
function Vr(e) {
  return typeof e == "function";
}
function Pp(e) {
  return Mt(e) || Dt(e);
}
function Da(e, t, n) {
  let r = e;
  const o = t.split(".");
  for (let s = 0; s < o.length; s++) {
    if (!r[o[s]])
      return n;
    r = r[o[s]];
  }
  return r;
}
function po(e, t, n) {
  return ue(() => e.some((r) => Da(t, r, {
    [n]: !1
  })[n]));
}
function Pi(e, t, n) {
  return ue(() => e.reduce((r, o) => {
    const s = Da(t, o, {
      [n]: !1
    })[n] || [];
    return r.concat(s);
  }, []));
}
function wa(e, t, n, r) {
  return e.call(r, ie(t), ie(n), r);
}
function Ca(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function Fp(e, t, n, r, o, s, i) {
  let {
    $lazy: l,
    $rewardEarly: a
  } = o, u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], f = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const $ = Ve(!!r.value), g = Ve(0);
  n.value = !1;
  const N = it([t, r].concat(u, p), () => {
    if (l && !r.value || a && !d.value && !n.value)
      return;
    let w;
    try {
      w = wa(e, t, f, i);
    } catch (k) {
      w = Promise.reject(k);
    }
    g.value++, n.value = !!g.value, $.value = !1, Promise.resolve(w).then((k) => {
      g.value--, n.value = !!g.value, s.value = k, $.value = Ca(k);
    }).catch((k) => {
      g.value--, n.value = !!g.value, s.value = k, $.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: $,
    $unwatch: N
  };
}
function zp(e, t, n, r, o, s, i, l) {
  let {
    $lazy: a,
    $rewardEarly: u
  } = r;
  const f = () => ({}), d = ue(() => {
    if (a && !n.value || u && !l.value)
      return !1;
    let p = !0;
    try {
      const $ = wa(e, t, i, s);
      o.value = $, p = Ca($);
    } catch ($) {
      o.value = $;
    }
    return p;
  });
  return {
    $unwatch: f,
    $invalid: d
  };
}
function jp(e, t, n, r, o, s, i, l, a, u, f) {
  const d = Ve(!1), p = e.$params || {}, $ = Ve(null);
  let g, N;
  e.$async ? {
    $invalid: g,
    $unwatch: N
  } = Fp(e.$validator, t, d, n, r, $, o, e.$watchTargets, a, u, f) : {
    $invalid: g,
    $unwatch: N
  } = zp(e.$validator, t, n, r, $, o, a, u);
  const w = e.$message;
  return {
    $message: Vr(w) ? ue(() => w(Mi({
      $pending: d,
      $invalid: g,
      $params: Mi(p),
      $model: t,
      $response: $,
      $validator: s,
      $propertyPath: l,
      $property: i
    }))) : w || "",
    $params: p,
    $pending: d,
    $invalid: g,
    $response: $,
    $unwatch: N
  };
}
function Up() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = ie(e), n = Object.keys(t), r = {}, o = {}, s = {};
  let i = null;
  return n.forEach((l) => {
    const a = t[l];
    switch (!0) {
      case Vr(a.$validator):
        r[l] = a;
        break;
      case Vr(a):
        r[l] = {
          $validator: a
        };
        break;
      case l === "$validationGroups":
        i = a;
        break;
      case l.startsWith("$"):
        s[l] = a;
        break;
      default:
        o[l] = a;
    }
  }), {
    rules: r,
    nestedValidators: o,
    config: s,
    validationGroups: i
  };
}
function Bp() {
}
const Hp = "__root";
function Ra(e, t, n) {
  if (n)
    return t ? t(e()) : e();
  try {
    var r = Promise.resolve(e());
    return t ? r.then(t) : r;
  } catch (o) {
    return Promise.reject(o);
  }
}
function Wp(e, t) {
  return Ra(e, Bp, t);
}
function qp(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
function Kp(e) {
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
function Gp(e, t, n, r, o, s, i, l, a) {
  const u = Object.keys(e), f = r.get(o, e), d = Ve(!1), p = Ve(!1), $ = Ve(0);
  if (f) {
    if (!f.$partial)
      return f;
    f.$unwatch(), d.value = f.$dirty.value;
  }
  const g = {
    $dirty: d,
    $path: o,
    $touch: () => {
      d.value || (d.value = !0);
    },
    $reset: () => {
      d.value && (d.value = !1);
    },
    $commit: () => {
    }
  };
  return u.length ? (u.forEach((N) => {
    g[N] = jp(e[N], t, g.$dirty, s, i, N, n, o, a, p, $);
  }), g.$externalResults = ue(() => l.value ? [].concat(l.value).map((N, w) => ({
    $propertyPath: o,
    $property: n,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${w}`,
    $message: N,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), g.$invalid = ue(() => {
    const N = u.some((w) => ie(g[w].$invalid));
    return p.value = N, !!g.$externalResults.value.length || N;
  }), g.$pending = ue(() => u.some((N) => ie(g[N].$pending))), g.$error = ue(() => g.$dirty.value ? g.$pending.value || g.$invalid.value : !1), g.$silentErrors = ue(() => u.filter((N) => ie(g[N].$invalid)).map((N) => {
    const w = g[N];
    return Tn({
      $propertyPath: o,
      $property: n,
      $validator: N,
      $uid: `${o}-${N}`,
      $message: w.$message,
      $params: w.$params,
      $response: w.$response,
      $pending: w.$pending
    });
  }).concat(g.$externalResults.value)), g.$errors = ue(() => g.$dirty.value ? g.$silentErrors.value : []), g.$unwatch = () => u.forEach((N) => {
    g[N].$unwatch();
  }), g.$commit = () => {
    p.value = !0, $.value = Date.now();
  }, r.set(o, e, g), g) : (f && r.set(o, e, g), g);
}
function Yp(e, t, n, r, o, s, i) {
  const l = Object.keys(e);
  return l.length ? l.reduce((a, u) => (a[u] = Go({
    validations: e[u],
    state: t,
    key: u,
    parentKey: n,
    resultsCache: r,
    globalConfig: o,
    instance: s,
    externalResults: i
  }), a), {}) : {};
}
function Xp(e, t, n) {
  const r = ue(() => [t, n].filter((g) => g).reduce((g, N) => g.concat(Object.values(ie(N))), [])), o = ue({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((g) => g.$dirty) : !1);
    },
    set(g) {
      e.$dirty.value = g;
    }
  }), s = ue(() => {
    const g = ie(e.$silentErrors) || [], N = r.value.filter((w) => (ie(w).$silentErrors || []).length).reduce((w, k) => w.concat(...k.$silentErrors), []);
    return g.concat(N);
  }), i = ue(() => {
    const g = ie(e.$errors) || [], N = r.value.filter((w) => (ie(w).$errors || []).length).reduce((w, k) => w.concat(...k.$errors), []);
    return g.concat(N);
  }), l = ue(() => r.value.some((g) => g.$invalid) || ie(e.$invalid) || !1), a = ue(() => r.value.some((g) => ie(g.$pending)) || ie(e.$pending) || !1), u = ue(() => r.value.some((g) => g.$dirty) || r.value.some((g) => g.$anyDirty) || o.value), f = ue(() => o.value ? a.value || l.value : !1), d = () => {
    e.$touch(), r.value.forEach((g) => {
      g.$touch();
    });
  }, p = () => {
    e.$commit(), r.value.forEach((g) => {
      g.$commit();
    });
  }, $ = () => {
    e.$reset(), r.value.forEach((g) => {
      g.$reset();
    });
  };
  return r.value.length && r.value.every((g) => g.$dirty) && d(), {
    $dirty: o,
    $errors: i,
    $invalid: l,
    $anyDirty: u,
    $error: f,
    $pending: a,
    $touch: d,
    $reset: $,
    $silentErrors: s,
    $commit: p
  };
}
function Go(e) {
  const t = Kp(function() {
    return Oe(), qp(function() {
      if (w.$rewardEarly)
        return be(), Wp(yo);
    }, function() {
      return Ra(yo, function() {
        return new Promise((_e) => {
          if (!he.value)
            return _e(!Y.value);
          const Se = it(he, () => {
            _e(!Y.value), Se();
          });
        });
      });
    });
  });
  let {
    validations: n,
    state: r,
    key: o,
    parentKey: s,
    childResults: i,
    resultsCache: l,
    globalConfig: a = {},
    instance: u,
    externalResults: f
  } = e;
  const d = s ? `${s}.${o}` : o, {
    rules: p,
    nestedValidators: $,
    config: g,
    validationGroups: N
  } = Up(n), w = Object.assign({}, a, g), k = o ? ue(() => {
    const _e = ie(r);
    return _e ? ie(_e[o]) : void 0;
  }) : r, P = Object.assign({}, ie(f) || {}), B = ue(() => {
    const _e = ie(f);
    return o ? _e ? ie(_e[o]) : void 0 : _e;
  }), A = Gp(p, k, o, l, d, w, u, B, r), D = Yp($, k, d, l, w, u, B), J = {};
  N && Object.entries(N).forEach((_e) => {
    let [Se, De] = _e;
    J[Se] = {
      $invalid: po(De, D, "$invalid"),
      $error: po(De, D, "$error"),
      $pending: po(De, D, "$pending"),
      $errors: Pi(De, D, "$errors"),
      $silentErrors: Pi(De, D, "$silentErrors")
    };
  });
  const {
    $dirty: K,
    $errors: H,
    $invalid: Y,
    $anyDirty: ee,
    $error: le,
    $pending: he,
    $touch: Oe,
    $reset: Rt,
    $silentErrors: Ze,
    $commit: be
  } = Xp(A, D, i), te = o ? ue({
    get: () => ie(k),
    set: (_e) => {
      K.value = !0;
      const Se = ie(r), De = ie(f);
      De && (De[o] = P[o]), Ee(Se[o]) ? Se[o].value = _e : Se[o] = _e;
    }
  }) : null;
  o && w.$autoDirty && it(k, () => {
    K.value || Oe();
    const _e = ie(f);
    _e && (_e[o] = P[o]);
  }, {
    flush: "sync"
  });
  function X(_e) {
    return (i.value || {})[_e];
  }
  function ke() {
    Ee(f) ? f.value = P : Object.keys(P).length === 0 ? Object.keys(f).forEach((_e) => {
      delete f[_e];
    }) : Object.assign(f, P);
  }
  return Tn(Object.assign({}, A, {
    $model: te,
    $dirty: K,
    $error: le,
    $errors: H,
    $invalid: Y,
    $anyDirty: ee,
    $pending: he,
    $touch: Oe,
    $reset: Rt,
    $path: d || Hp,
    $silentErrors: Ze,
    $validate: t,
    $commit: be
  }, i && {
    $getResultsForChild: X,
    $clearExternalResults: ke,
    $validationGroups: J
  }, D));
}
class Jp {
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
    const o = Object.keys(r), s = Object.keys(n);
    return s.length !== o.length || !s.every((l) => o.includes(l)) ? !1 : s.every((l) => n[l].$params ? Object.keys(n[l].$params).every((a) => ie(r[l].$params[a]) === ie(n[l].$params[a])) : !0);
  }
  get(t, n) {
    const r = this.storage.get(t);
    if (!r)
      return;
    const {
      rules: o,
      result: s
    } = r, i = this.checkRulesValidity(t, n, o), l = s.$unwatch ? s.$unwatch : () => ({});
    return i ? s : {
      $dirty: s.$dirty,
      $partial: !0,
      $unwatch: l
    };
  }
}
const Er = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, Fi = Symbol("vuelidate#injectChildResults"), zi = Symbol("vuelidate#removeChildResults");
function Qp(e) {
  let {
    $scope: t,
    instance: n
  } = e;
  const r = {}, o = Ve([]), s = ue(() => o.value.reduce((f, d) => (f[d] = ie(r[d]), f), {}));
  function i(f, d) {
    let {
      $registerAs: p,
      $scope: $,
      $stopPropagation: g
    } = d;
    g || t === Er.COLLECT_NONE || $ === Er.COLLECT_NONE || t !== Er.COLLECT_ALL && t !== $ || (r[p] = f, o.value.push(p));
  }
  n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], i);
  function l(f) {
    o.value = o.value.filter((d) => d !== f), delete r[f];
  }
  n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], l);
  const a = en(Fi, []);
  Oo(Fi, n.__vuelidateInjectInstances);
  const u = en(zi, []);
  return Oo(zi, n.__vuelidateRemoveInstances), {
    childResults: s,
    sendValidationResultsToParent: a,
    removeValidationResultsFromParent: u
  };
}
function xa(e) {
  return new Proxy(e, {
    get(t, n) {
      return typeof t[n] == "object" ? xa(t[n]) : ue(() => t[n]);
    }
  });
}
let ji = 0;
function Be(e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: o,
    $scope: s = Er.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: l,
    currentVueInstance: a
  } = r;
  const u = a || ((n = nr()) === null || n === void 0 ? void 0 : n.proxy), f = u ? u.$options : {};
  o || (ji += 1, o = `_vuelidate_${ji}`);
  const d = Ve({}), p = new Jp(), {
    childResults: $,
    sendValidationResultsToParent: g,
    removeValidationResultsFromParent: N
  } = u ? Qp({
    $scope: s,
    instance: u
  }) : {
    childResults: Ve({})
  };
  if (!e && f.validations) {
    const w = f.validations;
    t = Ve({}), Rl(() => {
      t.value = u, it(() => Vr(w) ? w.call(t.value, new xa(t.value)) : w, (k) => {
        d.value = Go({
          validations: k,
          state: t,
          childResults: $,
          resultsCache: p,
          globalConfig: r,
          instance: u,
          externalResults: l || u.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = f.validationsConfig || r;
  } else {
    const w = Ee(e) || Pp(e) ? e : Tn(e || {});
    it(w, (k) => {
      d.value = Go({
        validations: k,
        state: t,
        childResults: $,
        resultsCache: p,
        globalConfig: r,
        instance: u != null ? u : {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return u && (g.forEach((w) => w(d, {
    $registerAs: o,
    $scope: s,
    $stopPropagation: i
  })), as(() => N.forEach((w) => w(o)))), ue(() => Object.assign({}, ie(d.value), $.value));
}
const Os = (e) => {
  if (e = ie(e), Array.isArray(e))
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
function dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (r) => (r = ie(r), !Os(r) || t.every((o) => o.test(r)));
}
dn(/^[a-zA-Z]*$/);
dn(/^[a-zA-Z0-9]*$/);
dn(/^\d*(\.\d+)?$/);
const Zp = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
dn(Zp);
function em(e) {
  return typeof e == "string" && (e = e.trim()), Os(e);
}
var Ue = {
  $validator: em,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const tm = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
dn(tm);
function nm(e) {
  return (t) => !Os(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +ie(e);
}
function rm(e) {
  return {
    $validator: nm(e),
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
var om = dn(/(^[0-9]*$)|(^-[0-9]+$)/), wt = {
  $validator: om,
  $message: "Value is not an integer",
  $params: {
    type: "integer"
  }
}, sm = dn(/^[-]?\d*(\.\d+)?$/), Lr = {
  $validator: sm,
  $message: "Value must be decimal",
  $params: {
    type: "decimal"
  }
};
const Ke = {
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
};
const im = {
  name: "MinRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          decimal: Lr
        }
      }
    };
  },
  methods: {
    setMin(e) {
      this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
    }
  }
}, lm = { class: "rule-min-row" }, am = { for: "min" }, um = ["disabled", "value"], cm = {
  key: 0,
  class: "error"
};
function dm(e, t, n, r, o, s) {
  return v(), E("div", lm, [
    y("label", am, C(e.$t("min.min")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "min",
      type: "text",
      value: o.values.min,
      onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
    }, null, 40, um),
    r.v$.values.min.$invalid ? (v(), E("p", cm, [
      r.v$.values.min.decimal.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.decimal")), 1)
      ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const fm = /* @__PURE__ */ ce(im, [["render", dm]]);
const pm = {
  name: "MaxRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          decimal: Lr
        }
      }
    };
  },
  methods: {
    setMax(e) {
      this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
    }
  }
}, mm = { class: "rule-max-row" }, _m = { for: "max" }, hm = ["disabled", "value"], gm = {
  key: 0,
  class: "error"
};
function vm(e, t, n, r, o, s) {
  return v(), E("div", mm, [
    y("label", _m, C(e.$t("max.max")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "max",
      type: "text",
      value: o.values.max,
      onInput: t[0] || (t[0] = (i) => s.setMax(i.target.value))
    }, null, 40, hm),
    r.v$.values.max.$invalid ? (v(), E("p", gm, [
      r.v$.values.max.decimal.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.decimal")), 1)
      ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const Em = /* @__PURE__ */ ce(pm, [["render", vm]]);
const $m = {
  name: "MinCountRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt
        }
      }
    };
  },
  methods: {
    setMin(e) {
      this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
    }
  }
}, ym = { class: "rule-min-count-row" }, bm = { for: "minCount" }, Nm = ["disabled", "value"], Om = {
  key: 0,
  class: "error"
};
function Tm(e, t, n, r, o, s) {
  return v(), E("div", ym, [
    y("label", bm, C(e.$t("minCount.min")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "minCount",
      type: "text",
      value: o.values.min,
      onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
    }, null, 40, Nm),
    r.v$.values.min.$invalid ? (v(), E("p", Om, [
      r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.integer")), 1)
      ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const Im = /* @__PURE__ */ ce($m, [["render", Tm]]);
const Dm = {
  name: "MaxCountRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt
        }
      }
    };
  },
  methods: {
    setMax(e) {
      this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
    }
  }
}, wm = { class: "rule-max-count-row" }, Cm = { for: "max" }, Rm = ["disabled", "value"], xm = {
  key: 0,
  class: "error"
};
function Vm(e, t, n, r, o, s) {
  return v(), E("div", wm, [
    y("label", Cm, C(e.$t("maxCount.max")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "max",
      type: "text",
      value: o.values.max,
      onInput: t[0] || (t[0] = (i) => s.setMax(i.target.value))
    }, null, 40, Rm),
    r.v$.values.max.$invalid ? (v(), E("p", xm, [
      r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.integer")), 1)
      ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const Lm = /* @__PURE__ */ ce(Dm, [["render", Vm]]), Ts = (e) => function(t, n, r) {
  return Number(t) >= Number(n[e]);
}, Is = (e) => function(t, n, r) {
  return Number(t) <= Number(n[e]);
};
const Am = {
  name: "BetweenCountRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt,
          mustBeLessOrEqual: Is("max")
        },
        max: {
          required: Ue,
          integer: wt,
          mustBeGreaterOrEqual: Ts("min")
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
}, km = { class: "rule-min-count-row" }, Sm = { for: "minBetweenCount" }, Mm = ["disabled", "value"], Pm = {
  key: 0,
  class: "error"
}, Fm = { class: "rule-max-count-row" }, zm = { for: "maxBetweenCount" }, jm = ["disabled", "value"], Um = {
  key: 0,
  class: "error"
};
function Bm(e, t, n, r, o, s) {
  return v(), E(M, null, [
    y("div", km, [
      y("label", Sm, C(e.$t("betweenCount.min")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "minBetweenCount",
        type: "text",
        value: o.values.min,
        onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
      }, null, 40, Mm),
      r.v$.values.min.$invalid ? (v(), E("p", Pm, [
        r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ]),
    y("div", Fm, [
      y("label", zm, C(e.$t("betweenCount.max")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "maxBetweenCount",
        type: "text",
        value: o.values.max,
        onInput: t[1] || (t[1] = (i) => s.setMax(i.target.value))
      }, null, 40, jm),
      r.v$.values.max.$invalid ? (v(), E("p", Um, [
        r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ])
  ], 64);
}
const Hm = /* @__PURE__ */ ce(Am, [["render", Bm]]);
const Wm = {
  name: "BetweenRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          decimal: Lr,
          mustBeLessOrEqual: Is("max")
        },
        max: {
          required: Ue,
          decimal: Lr,
          mustBeGreaterOrEqual: Ts("min")
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
}, qm = { class: "rule-min-count-row" }, Km = { for: "minBetween" }, Gm = ["disabled", "value"], Ym = {
  key: 0,
  class: "error"
}, Xm = { class: "rule-max-count-row" }, Jm = { for: "maxBetween" }, Qm = ["disabled", "value"], Zm = {
  key: 0,
  class: "error"
};
function e_(e, t, n, r, o, s) {
  return v(), E(M, null, [
    y("div", qm, [
      y("label", Km, C(e.$t("between.min")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "minBetween",
        type: "text",
        value: o.values.min,
        onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
      }, null, 40, Gm),
      r.v$.values.min.$invalid ? (v(), E("p", Ym, [
        r.v$.values.min.decimal.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.decimal")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.decimal.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ]),
    y("div", Xm, [
      y("label", Jm, C(e.$t("between.max")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "maxBetween",
        type: "text",
        value: o.values.max,
        onInput: t[1] || (t[1] = (i) => s.setMax(i.target.value))
      }, null, 40, Qm),
      r.v$.values.max.$invalid ? (v(), E("p", Zm, [
        r.v$.values.max.decimal.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.decimal")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.decimal.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ])
  ], 64);
}
const t_ = /* @__PURE__ */ ce(Wm, [["render", e_]]);
const n_ = {
  name: "MinLengthRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt
        }
      }
    };
  },
  methods: {
    setMin(e) {
      this.values.min = e, this.v$.$touch(), this.v$.values.min.$error || this.$emit("updateOptions", { min: e });
    }
  }
}, r_ = { class: "rule-min-count-row" }, o_ = { for: "minLength" }, s_ = ["disabled", "value"], i_ = {
  key: 0,
  class: "error"
};
function l_(e, t, n, r, o, s) {
  return v(), E("div", r_, [
    y("label", o_, C(e.$t("minLength.min")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "minLength",
      type: "text",
      value: o.values.min,
      onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
    }, null, 40, s_),
    r.v$.values.min.$invalid ? (v(), E("p", i_, [
      r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.integer")), 1)
      ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const a_ = /* @__PURE__ */ ce(n_, [["render", l_]]);
const u_ = {
  name: "MaxLengthRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt
        }
      }
    };
  },
  methods: {
    setMax(e) {
      this.values.max = e, this.v$.$touch(), this.v$.values.max.$error || this.$emit("updateOptions", { max: e });
    }
  }
}, c_ = { class: "rule-max-count-row" }, d_ = { for: "maxLength" }, f_ = ["disabled", "value"], p_ = {
  key: 0,
  class: "error"
};
function m_(e, t, n, r, o, s) {
  return v(), E("div", c_, [
    y("label", d_, C(e.$t("maxLength.max")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "maxLength",
      type: "text",
      value: o.values.max,
      onInput: t[0] || (t[0] = (i) => s.setMax(i.target.value))
    }, null, 40, f_),
    r.v$.values.max.$invalid ? (v(), E("p", p_, [
      r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.integer")), 1)
      ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const __ = /* @__PURE__ */ ce(u_, [["render", m_]]);
const h_ = {
  name: "BetweenLengthRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue,
          integer: wt,
          mustBeLessOrEqual: Is("max")
        },
        max: {
          required: Ue,
          integer: wt,
          mustBeGreaterOrEqual: Ts("min")
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
}, g_ = { class: "rule-min-count-row" }, v_ = { for: "minBetweenLength" }, E_ = ["disabled", "value"], $_ = {
  key: 0,
  class: "error"
}, y_ = { class: "rule-max-count-row" }, b_ = { for: "maxBetweenLength" }, N_ = ["disabled", "value"], O_ = {
  key: 0,
  class: "error"
};
function T_(e, t, n, r, o, s) {
  return v(), E(M, null, [
    y("div", g_, [
      y("label", v_, C(e.$t("betweenLength.min")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "minBetweenLength",
        type: "text",
        value: o.values.min,
        onInput: t[0] || (t[0] = (i) => s.setMin(i.target.value))
      }, null, 40, E_),
      r.v$.values.min.$invalid ? (v(), E("p", $_, [
        r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.min.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.min.mustBeLessOrEqual.$invalid && !r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeLessOrEqual", { value: String(this.values.max) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ]),
    y("div", y_, [
      y("label", b_, C(e.$t("betweenLength.max")), 1),
      y("input", {
        disabled: !e.$root.canEdit(),
        id: "maxBetweenLength",
        type: "text",
        value: o.values.max,
        onInput: t[1] || (t[1] = (i) => s.setMax(i.target.value))
      }, null, 40, N_),
      r.v$.values.max.$invalid ? (v(), E("p", O_, [
        r.v$.values.max.integer.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.values.max.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.values.max.mustBeGreaterOrEqual.$invalid && !r.v$.values.min.integer.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.mustBeGreaterOrEqual", { value: String(this.values.min) })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ])
  ], 64);
}
const I_ = /* @__PURE__ */ ce(h_, [["render", T_]]), D_ = {
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
function w_(e, t, n, r, o, s) {
  return null;
}
const C_ = /* @__PURE__ */ ce(D_, [["render", w_]]), R_ = {
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
function x_(e, t, n, r, o, s) {
  return null;
}
const V_ = /* @__PURE__ */ ce(R_, [["render", x_]]), L_ = {
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
function A_(e, t, n, r, o, s) {
  return null;
}
const k_ = /* @__PURE__ */ ce(L_, [["render", A_]]), S_ = {
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
function M_(e, t, n, r, o, s) {
  return null;
}
const P_ = /* @__PURE__ */ ce(S_, [["render", M_]]), F_ = {
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
function z_(e, t, n, r, o, s) {
  return null;
}
const j_ = /* @__PURE__ */ ce(F_, [["render", z_]]), U_ = {
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
function B_(e, t, n, r, o, s) {
  return null;
}
const H_ = /* @__PURE__ */ ce(U_, [["render", B_]]);
const W_ = {
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
}, q_ = { class: "rule-date-row" }, K_ = { for: "format" }, G_ = ["disabled", "value"];
function Y_(e, t, n, r, o, s) {
  return v(), E("div", q_, [
    y("label", K_, C(e.$t("date.format")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "format",
      type: "text",
      value: o.values.format,
      onInput: t[0] || (t[0] = (i) => s.setFormat(i.target.value))
    }, null, 40, G_)
  ]);
}
const X_ = /* @__PURE__ */ ce(W_, [["render", Y_]]), J_ = {
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
function Q_(e, t, n, r, o, s) {
  return null;
}
const Z_ = /* @__PURE__ */ ce(J_, [["render", Q_]]);
const eh = {
  name: "RegexRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          required: Ue
        }
      }
    };
  },
  methods: {
    setRegex(e) {
      this.values.regex = e, this.v$.$touch(), this.v$.values.regex.$error || this.$emit("updateOptions", { regex: e });
    }
  }
}, th = { class: "rule-regex-row" }, nh = { for: "regex" }, rh = ["disabled", "value"], oh = {
  key: 0,
  class: "error"
};
function sh(e, t, n, r, o, s) {
  return v(), E("div", th, [
    y("label", nh, C(e.$t("regex.regex")), 1),
    y("input", {
      disabled: !e.$root.canEdit(),
      id: "regex",
      type: "text",
      value: o.values.regex,
      onInput: t[0] || (t[0] = (i) => s.setRegex(i.target.value))
    }, null, 40, rh),
    r.v$.values.regex.$invalid && r.v$.values.regex.$dirty ? (v(), E("p", oh, [
      r.v$.values.regex.required.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0)
  ]);
}
const ih = /* @__PURE__ */ ce(eh, [["render", sh]]), lh = {
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
function ah(e, t, n, r, o, s) {
  return null;
}
const uh = /* @__PURE__ */ ce(lh, [["render", ah]]), Zr = function(e) {
  let t = !0;
  return e.forEach((n) => {
    t = t && Boolean(n.value);
  }), t;
};
const ch = {
  name: "InRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          multipleRequired: Zr
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
}, dh = { class: "rule-in-row" }, fh = { for: "in" }, ph = { class: "rule-in" }, mh = ["disabled", "onUpdate:modelValue"], _h = ["onClick"], hh = {
  key: 0,
  class: "error"
}, gh = ["title", "value"];
function vh(e, t, n, r, o, s) {
  return v(), E("div", dh, [
    y("label", fh, C(e.$t("in.in")), 1),
    (v(!0), E(M, null, Xe(r.v$.values.in.$model, (i, l) => (v(), E("div", ph, [
      Tt((v(), E("input", {
        disabled: !e.$root.canEdit(),
        class: "value",
        type: "text",
        "onUpdate:modelValue": (a) => i.value = a,
        key: l
      }, null, 8, mh)), [
        [
          Nn,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.values.in.length > 1 && e.$root.canEdit() ? (v(), E("input", {
        key: 0,
        class: "delete",
        onClick: Ae((a) => s.deleteItem(l), ["prevent"]),
        type: "button",
        title: "X",
        value: "X"
      }, null, 8, _h)) : j("", !0)
    ]))), 256)),
    r.v$.values.in.multipleRequired.$invalid && r.v$.values.$dirty ? (v(), E("p", hh, [
      r.v$.values.in.multipleRequired.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0),
    e.$root.canEdit() ? (v(), E("input", {
      key: 1,
      onClick: t[0] || (t[0] = Ae((i) => s.addItem(), ["prevent"])),
      type: "button",
      title: e.$t("edit.add"),
      value: e.$t("edit.add")
    }, null, 8, gh)) : j("", !0)
  ]);
}
const Eh = /* @__PURE__ */ ce(ch, [["render", vh]]);
const $h = {
  name: "NotInRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          multipleRequired: Zr
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
}, yh = { class: "rule-not-in-row" }, bh = { class: "rule-not-in" }, Nh = ["disabled", "onUpdate:modelValue"], Oh = ["onClick"], Th = {
  key: 0,
  class: "error"
}, Ih = ["title", "value"];
function Dh(e, t, n, r, o, s) {
  return v(), E("div", yh, [
    y("label", null, C(e.$t("notIn.notIn")), 1),
    (v(!0), E(M, null, Xe(r.v$.values.notIn.$model, (i, l) => (v(), E("div", bh, [
      Tt((v(), E("input", {
        disabled: !e.$root.canEdit(),
        class: "value",
        type: "text",
        "onUpdate:modelValue": (a) => i.value = a,
        key: l
      }, null, 8, Nh)), [
        [
          Nn,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.values.notIn.length > 1 && e.$root.canEdit() ? (v(), E("input", {
        key: 0,
        class: "delete",
        onClick: Ae((a) => s.deleteItem(l), ["prevent"]),
        type: "button",
        title: "X",
        value: "X"
      }, null, 8, Oh)) : j("", !0)
    ]))), 256)),
    r.v$.values.notIn.multipleRequired.$invalid && r.v$.values.$dirty ? (v(), E("p", Th, [
      r.v$.values.notIn.multipleRequired.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0),
    e.$root.canEdit() ? (v(), E("input", {
      key: 1,
      onClick: t[0] || (t[0] = Ae((i) => s.addItem(), ["prevent"])),
      type: "button",
      title: e.$t("edit.add"),
      value: e.$t("edit.add")
    }, null, 8, Ih)) : j("", !0)
  ]);
}
const wh = /* @__PURE__ */ ce($h, [["render", Dh]]);
const Ch = {
  name: "StrictInRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          multipleRequired: Zr
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
}, Rh = { class: "rule-in-row" }, xh = { class: "rule-in" }, Vh = ["disabled", "onUpdate:modelValue"], Lh = ["onClick"], Ah = {
  key: 0,
  class: "error"
}, kh = ["title", "value"];
function Sh(e, t, n, r, o, s) {
  return v(), E("div", Rh, [
    y("label", null, C(e.$t("strictIn.in")), 1),
    (v(!0), E(M, null, Xe(r.v$.values.in.$model, (i, l) => (v(), E("div", xh, [
      Tt((v(), E("input", {
        disabled: !e.$root.canEdit(),
        class: "value",
        type: "text",
        "onUpdate:modelValue": (a) => i.value = a,
        key: l
      }, null, 8, Vh)), [
        [
          Nn,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.values.in.length > 1 && e.$root.canEdit() ? (v(), E("input", {
        key: 0,
        class: "delete",
        onClick: Ae((a) => s.deleteItem(l), ["prevent"]),
        type: "button",
        title: "X",
        value: "X"
      }, null, 8, Lh)) : j("", !0)
    ]))), 256)),
    r.v$.values.in.multipleRequired.$invalid && r.v$.values.$dirty ? (v(), E("p", Ah, [
      r.v$.values.in.multipleRequired.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0),
    e.$root.canEdit() ? (v(), E("input", {
      key: 1,
      onClick: t[0] || (t[0] = Ae((i) => s.addItem(), ["prevent"])),
      type: "button",
      title: e.$t("edit.add"),
      value: e.$t("edit.add")
    }, null, 8, kh)) : j("", !0)
  ]);
}
const Mh = /* @__PURE__ */ ce(Ch, [["render", Sh]]);
const Ph = {
  name: "StrictNotInRule",
  setup() {
    return {
      v$: Be()
    };
  },
  mixins: [Ke],
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
          multipleRequired: Zr
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
}, Fh = { class: "rule-not-in-row" }, zh = { class: "rule-not-in" }, jh = ["disabled", "onUpdate:modelValue"], Uh = ["onClick"], Bh = {
  key: 0,
  class: "error"
}, Hh = ["title", "value"];
function Wh(e, t, n, r, o, s) {
  return v(), E("div", Fh, [
    y("label", null, C(e.$t("strictNotIn.notIn")), 1),
    (v(!0), E(M, null, Xe(r.v$.values.notIn.$model, (i, l) => (v(), E("div", zh, [
      Tt((v(), E("input", {
        disabled: !e.$root.canEdit(),
        class: "value",
        type: "text",
        "onUpdate:modelValue": (a) => i.value = a,
        key: l
      }, null, 8, jh)), [
        [
          Nn,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.values.notIn.length > 1 && e.$root.canEdit() ? (v(), E("input", {
        key: 0,
        class: "delete",
        onClick: Ae((a) => s.deleteItem(l), ["prevent"]),
        type: "button",
        title: "X",
        value: "X"
      }, null, 8, Uh)) : j("", !0)
    ]))), 256)),
    r.v$.values.notIn.multipleRequired.$invalid && r.v$.values.$dirty ? (v(), E("p", Bh, [
      r.v$.values.notIn.multipleRequired.$invalid ? (v(), E(M, { key: 0 }, [
        q(C(e.$t("errors.required")), 1)
      ], 64)) : j("", !0)
    ])) : j("", !0),
    e.$root.canEdit() ? (v(), E("input", {
      key: 1,
      onClick: t[0] || (t[0] = Ae((i) => s.addItem(), ["prevent"])),
      type: "button",
      title: e.$t("edit.add"),
      value: e.$t("edit.add")
    }, null, 8, Hh)) : j("", !0)
  ]);
}
const qh = /* @__PURE__ */ ce(Ph, [["render", Wh]]);
const Kh = {
  name: "Rule",
  setup() {
    return {
      v$: Be()
    };
  },
  props: {
    rule: Object,
    group: Object,
    rules: Array,
    groupRules: Array
  },
  components: {
    MinRule: fm,
    MaxRule: Em,
    MinCountRule: Im,
    MaxCountRule: Lm,
    BetweenCountRule: Hm,
    BetweenRule: t_,
    MinLengthRule: a_,
    MaxLengthRule: __,
    BetweenLengthRule: I_,
    AlphaNumericRule: C_,
    AlphaRule: V_,
    BooleanRule: k_,
    IntegerRule: P_,
    NumericRule: j_,
    EmailRule: H_,
    DateRule: X_,
    JsonRule: Z_,
    RegexRule: ih,
    UniqueRule: uh,
    InRule: Eh,
    NotInRule: wh,
    StrictInRule: Mh,
    StrictNotInRule: qh
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
          required: Ue
        },
        sort: {
          required: Ue,
          integer: wt,
          minValue: rm(0)
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
      handler() {
        this.rule.options = {};
      }
    }
  },
  beforeUnmount() {
    const e = this.$parent.$parent;
    typeof e.$data.validation[this.group.id] < "u" && typeof e.$data.validation[this.group.id].rule < "u" && (e.$data.validation[this.group.id].rule = !1);
  }
}, Gh = { class: "rule-cell" }, Yh = { value: null }, Xh = ["value"], Jh = ["value"], Qh = {
  key: 2,
  class: "error"
}, Zh = { class: "rule-cell" }, eg = { class: "rule-cell" }, tg = ["disabled"], ng = {
  key: 0,
  class: "rule-message-description"
}, rg = { class: "rule-cell" }, og = ["disabled"], sg = {
  key: 0,
  class: "error"
}, ig = { key: 0 }, lg = ["title", "value"];
function ag(e, t, n, r, o, s) {
  return v(), E("tr", {
    key: n.rule.id
  }, [
    y("td", Gh, [
      e.$root.canEdit() ? Tt((v(), E("select", {
        key: 0,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => r.v$.rule.key.$model = i),
        class: "rule-select"
      }, [
        y("option", Yh, C(e.$t("edit.selectRule")), 1),
        n.rule.key ? (v(), E("option", {
          key: 0,
          value: n.rule.key
        }, C(s.getCurrentRule.title), 9, Xh)) : j("", !0),
        (v(!0), E(M, null, Xe(s.rulesByTypeAndFilterSelected, (i) => (v(), E("option", {
          value: i.key
        }, C(i.title), 9, Jh))), 256))
      ], 512)), [
        [Ql, r.v$.rule.key.$model]
      ]) : (v(), E(M, { key: 1 }, [
        q(C(s.getCurrentRule.title), 1)
      ], 64)),
      r.v$.rule.key.$invalid && r.v$.rule.key.$dirty ? (v(), E("p", Qh, C(e.$t("errors.required")), 1)) : j("", !0)
    ]),
    y("td", Zh, [
      (v(), ln(yc(n.rule.key + "Rule"), {
        options: n.rule.options,
        onUpdateOptions: t[1] || (t[1] = (i) => s.updateOptions(i))
      }, null, 40, ["options"]))
    ]),
    y("td", eg, [
      Tt(y("input", {
        disabled: !e.$root.canEdit(),
        type: "text",
        "onUpdate:modelValue": t[2] || (t[2] = (i) => n.rule.message = i),
        class: "rule-message"
      }, null, 8, tg), [
        [Nn, n.rule.message]
      ]),
      s.getCurrentRule ? (v(), E("p", ng, C(s.getCurrentRule.messageDescription), 1)) : j("", !0)
    ]),
    y("td", rg, [
      Tt(y("input", {
        disabled: !e.$root.canEdit(),
        type: "text",
        "onUpdate:modelValue": t[3] || (t[3] = (i) => r.v$.rule.sort.$model = i),
        class: "rule-sort"
      }, null, 8, og), [
        [Nn, r.v$.rule.sort.$model]
      ]),
      r.v$.rule.sort.$invalid ? (v(), E("p", sg, [
        r.v$.rule.sort.integer.$invalid ? (v(), E(M, { key: 0 }, [
          q(C(e.$t("errors.integer")), 1)
        ], 64)) : r.v$.rule.sort.required.$invalid ? (v(), E(M, { key: 1 }, [
          q(C(e.$t("errors.required")), 1)
        ], 64)) : r.v$.rule.sort.minValue.$invalid ? (v(), E(M, { key: 2 }, [
          q(C(e.$t("errors.minValue", { minValue: 0 })), 1)
        ], 64)) : j("", !0)
      ])) : j("", !0)
    ]),
    e.$root.canEdit() ? (v(), E("td", ig, [
      y("input", {
        class: "rule-delete",
        onClick: t[4] || (t[4] = Ae((i) => e.$emit("delete"), ["prevent"])),
        type: "button",
        title: e.$t("edit.delete"),
        value: e.$t("edit.delete")
      }, null, 8, lg)
    ])) : j("", !0)
  ]);
}
const ug = /* @__PURE__ */ ce(Kh, [["render", ag]]);
const cg = {
  name: "Group",
  components: { Rule: ug },
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
}, dg = { class: "group" }, fg = { class: "internal" }, pg = { class: "heading" }, mg = { class: "col-rule" }, _g = { class: "col-rule" }, hg = { class: "col-rule" }, gg = {
  key: 0,
  class: "col-delete"
}, vg = { key: 0 }, Eg = {
  colspan: "4",
  class: "empty-rules"
}, $g = ["disabled", "title", "value"], yg = { class: "internal" }, bg = { class: "heading" }, Ng = { class: "col-rule" }, Og = { class: "col-rule" }, Tg = { class: "col-rule" }, Ig = {
  key: 0,
  class: "col-delete"
}, Dg = { key: 0 }, wg = {
  colspan: "4",
  class: "empty-rules"
}, Cg = ["disabled", "title", "value"];
function Rg(e, t, n, r, o, s) {
  const i = sn("Rule");
  return v(), E("div", dg, [
    y("h3", null, C(n.group.name), 1),
    n.group.multiple ? (v(), E(M, { key: 0 }, [
      y("h4", null, C(e.$t("edit.multiple")), 1),
      y("table", fg, [
        y("tbody", null, [
          y("tr", pg, [
            y("td", mg, C(e.$t("edit.rule")), 1),
            y("td", null, C(e.$t("edit.options")), 1),
            y("td", _g, C(e.$t("edit.message")), 1),
            y("td", hg, C(e.$t("edit.sort")), 1),
            e.$root.canEdit() ? (v(), E("td", gg, C(e.$t("edit.delete")), 1)) : j("", !0)
          ]),
          s.sortedGroupMultipleRules.length ? j("", !0) : (v(), E("tr", vg, [
            y("td", Eg, C(e.$t("edit.emptyRules")), 1)
          ])),
          (v(!0), E(M, null, Xe(s.sortedGroupMultipleRules, (l, a) => (v(), ln(i, {
            rule: l,
            group: n.group,
            rules: s.rulesByMultipleType,
            groupRules: n.group.multiple_rules,
            onDelete: (u) => s.deleteMultipleRule(a)
          }, null, 8, ["rule", "group", "rules", "groupRules", "onDelete"]))), 256))
        ])
      ]),
      e.$root.canEdit() ? (v(), E("input", {
        key: 0,
        disabled: this.group.multiple_rules.length === s.rulesByMultipleType.length,
        onClick: t[0] || (t[0] = Ae((l) => s.addMultipleRule(), ["prevent"])),
        type: "submit",
        title: e.$t("edit.add"),
        class: "adm-btn-save",
        value: e.$t("edit.add")
      }, null, 8, $g)) : j("", !0)
    ], 64)) : j("", !0),
    y("h4", null, C(e.$t("edit.notMultiple")), 1),
    y("table", yg, [
      y("tbody", null, [
        y("tr", bg, [
          y("td", Ng, C(e.$t("edit.rule")), 1),
          y("td", null, C(e.$t("edit.options")), 1),
          y("td", Og, C(e.$t("edit.message")), 1),
          y("td", Tg, C(e.$t("edit.sort")), 1),
          e.$root.canEdit() ? (v(), E("td", Ig, C(e.$t("edit.delete")), 1)) : j("", !0)
        ]),
        s.sortedGroupRules.length ? j("", !0) : (v(), E("tr", Dg, [
          y("td", wg, C(e.$t("edit.emptyRules")), 1)
        ])),
        (v(!0), E(M, null, Xe(s.sortedGroupRules, (l, a) => (v(), ln(i, {
          rule: l,
          group: n.group,
          rules: s.rulesByType,
          groupRules: n.group.rules,
          onDelete: (u) => s.deleteRule(a)
        }, null, 8, ["rule", "group", "rules", "groupRules", "onDelete"]))), 256))
      ])
    ]),
    e.$root.canEdit() ? (v(), E("input", {
      key: 1,
      disabled: this.group.rules.length === s.rulesByType.length,
      onClick: t[1] || (t[1] = Ae((l) => s.addRule(), ["prevent"])),
      type: "submit",
      title: e.$t("edit.add"),
      class: "adm-btn-save",
      value: e.$t("edit.add")
    }, null, 8, Cg)) : j("", !0)
  ]);
}
const xg = /* @__PURE__ */ ce(cg, [["render", Rg]]);
const Vg = {
  name: "Edit",
  props: {
    entityKey: Object
  },
  components: { Spinner: Ia, Group: xg },
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
      Ko.getEntity(this.entityKey).then((e) => {
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
      }), Ko.submit(this.entity.entity_type, this.entity.id, e).catch((t) => {
        this.success = [], this.errors = t.errors, this.loading = !1;
      });
    }
  }
}, Lg = { class: "spinner-container" }, Ag = {
  key: 0,
  class: "adm-info-message-wrap adm-info-message-red"
}, kg = { class: "adm-info-message" }, Sg = { class: "adm-info-message-title" }, Mg = /* @__PURE__ */ y("br", null, null, -1), Pg = /* @__PURE__ */ y("br", null, null, -1), Fg = /* @__PURE__ */ y("div", { class: "adm-info-message-icon" }, null, -1), zg = {
  key: 1,
  class: "adm-info-message-wrap adm-info-message-green"
}, jg = { class: "adm-info-message" }, Ug = { class: "adm-info-message-title" }, Bg = /* @__PURE__ */ y("br", null, null, -1), Hg = /* @__PURE__ */ y("br", null, null, -1), Wg = /* @__PURE__ */ y("div", { class: "adm-info-message-icon" }, null, -1), qg = { key: 2 }, Kg = { class: "adm-detail-block" }, Gg = { class: "adm-detail-content-wrap" }, Yg = { class: "adm-detail-content" }, Xg = { class: "adm-detail-title" }, Jg = { class: "adm-detail-content-item-block" }, Qg = { class: "add-field" }, Zg = /* @__PURE__ */ y("option", null, null, -1), ev = ["value"], tv = ["disabled", "value", "title"], nv = /* @__PURE__ */ y("hr", null, null, -1), rv = { class: "groups" }, ov = {
  key: 0,
  class: "empty-groups"
}, sv = { class: "adm-detail-content-btns-wrap" }, iv = { class: "adm-detail-content-btns" }, lv = ["disabled", "value", "title"], av = ["disabled", "value", "title"], uv = ["value", "title"];
function cv(e, t, n, r, o, s) {
  const i = sn("Group"), l = sn("Spinner");
  return v(), E("div", Lg, [
    o.errors.length ? (v(), E("div", Ag, [
      y("div", kg, [
        y("div", Sg, C(e.$t("edit.errors")), 1),
        (v(!0), E(M, null, Xe(o.errors, (a) => (v(), E(M, null, [
          q(C(a.message), 1),
          Mg
        ], 64))), 256)),
        Pg,
        Fg
      ])
    ])) : j("", !0),
    o.success.length ? (v(), E("div", zg, [
      y("div", jg, [
        y("div", Ug, C(e.$t("edit.success")), 1),
        (v(!0), E(M, null, Xe(o.success, (a) => (v(), E(M, null, [
          q(C(a.message), 1),
          Bg
        ], 64))), 256)),
        Hg,
        Wg
      ])
    ])) : j("", !0),
    o.entity ? (v(), E("div", qg, [
      y("div", Kg, [
        y("div", Gg, [
          y("div", Yg, [
            y("div", Xg, [
              q(C(o.entity.entity_type_name) + ": ", 1),
              o.entity.type_name ? (v(), E(M, { key: 0 }, [
                q(C(o.entity.type_name) + " / ", 1)
              ], 64)) : j("", !0),
              q(C(o.entity.name), 1)
            ]),
            y("div", Jg, [
              e.$root.canEdit() ? (v(), E(M, { key: 0 }, [
                y("div", Qg, [
                  Tt(y("select", {
                    "onUpdate:modelValue": t[0] || (t[0] = (a) => o.fieldId = a)
                  }, [
                    Zg,
                    (v(!0), E(M, null, Xe(this.fields, (a) => (v(), E("option", {
                      value: a.id
                    }, C(a.name), 9, ev))), 256))
                  ], 512), [
                    [Ql, o.fieldId]
                  ]),
                  y("input", {
                    disabled: !o.fieldId,
                    onClick: t[1] || (t[1] = Ae((a) => {
                      s.addRule(o.fieldId), o.fieldId = null;
                    }, ["prevent"])),
                    type: "button",
                    value: e.$t("edit.addRule"),
                    title: e.$t("edit.addRuleTitle"),
                    class: "adm-btn-save"
                  }, null, 8, tv)
                ]),
                nv
              ], 64)) : j("", !0),
              y("div", rv, [
                (v(!0), E(M, null, Xe(o.entity.groups, (a, u) => (v(), ln(i, {
                  key: a.id,
                  group: a,
                  entity: o.entity,
                  rules: o.rules,
                  onDelete: (f) => s.deleteGroup(u)
                }, null, 8, ["group", "entity", "rules", "onDelete"]))), 128)),
                o.entity.groups.length ? j("", !0) : (v(), E("div", ov, C(e.$t("edit.emptyGroups")), 1))
              ])
            ])
          ]),
          y("div", sv, [
            y("div", iv, [
              e.$root.canEdit() ? (v(), E("input", {
                key: 0,
                disabled: s.isDisabled,
                onClick: t[2] || (t[2] = Ae((a) => s.save(), ["prevent"])),
                type: "submit",
                value: e.$t("edit.save"),
                title: e.$t("edit.saveTitle"),
                class: "adm-btn-save"
              }, null, 8, lv)) : j("", !0),
              e.$root.canEdit() ? (v(), E("input", {
                key: 1,
                disabled: s.isDisabled,
                onClick: t[3] || (t[3] = Ae((a) => s.apply(), ["prevent"])),
                type: "submit",
                value: e.$t("edit.apply"),
                title: e.$t("edit.applyTitle")
              }, null, 8, av)) : j("", !0),
              y("input", {
                onClick: t[4] || (t[4] = Ae((a) => e.$emit("cancel"), ["prevent"])),
                type: "button",
                value: e.$t("edit.cancel"),
                title: e.$t("edit.cancelTitle")
              }, null, 8, uv)
            ])
          ])
        ])
      ])
    ])) : j("", !0),
    Ce(l, {
      loading: o.loading && !o.errors.length
    }, null, 8, ["loading"])
  ]);
}
const dv = /* @__PURE__ */ ce(Vg, [["render", cv]]);
const fv = {
  name: "TableList",
  props: {
    entities: Array
  },
  methods: {
    select(e) {
      this.$emit("select", e);
    }
  }
}, Va = (e) => (Qu("data-v-db7a486d"), e = e(), Zu(), e), pv = { class: "main-grid-table" }, mv = { class: "main-grid-header" }, _v = { class: "main-grid-row-head" }, hv = { class: "main-grid-cell-head main-grid-cell-left" }, gv = { class: "main-grid-cell-inner" }, vv = { class: "main-grid-cell-head-container" }, Ev = { class: "main-grid-head-title" }, $v = /* @__PURE__ */ Va(() => /* @__PURE__ */ y("span", { class: "main-grid-resize-button" }, null, -1)), yv = { class: "main-grid-cell-head main-grid-cell-left" }, bv = { class: "main-grid-cell-inner" }, Nv = { class: "main-grid-cell-head-container" }, Ov = { class: "main-grid-head-title" }, Tv = /* @__PURE__ */ Va(() => /* @__PURE__ */ y("span", { class: "main-grid-resize-button" }, null, -1)), Iv = {
  class: "main-grid-cell-head main-grid-cell-left",
  style: { width: "1px" }
}, Dv = { class: "main-grid-cell-inner" }, wv = { class: "main-grid-cell-head-container" }, Cv = { class: "main-grid-head-title" }, Rv = { class: "main-grid-row main-grid-row-body main-grid-not-count" }, xv = {
  class: "main-grid-cell main-grid-cell-left",
  style: { width: "1px" }
}, Vv = { class: "main-grid-cell-inner" }, Lv = { class: "main-grid-cell-content" }, Av = { class: "main-grid-cell main-grid-cell-left" }, kv = { class: "main-grid-cell-inner" }, Sv = { class: "main-grid-cell-content" }, Mv = ["onClick", "title"], Pv = { class: "main-grid-cell main-grid-cell-left" }, Fv = { class: "main-grid-cell-inner" }, zv = { class: "main-grid-cell-content" };
function jv(e, t, n, r, o, s) {
  return v(), E("table", pv, [
    y("thead", mv, [
      y("tr", _v, [
        y("th", hv, [
          y("div", gv, [
            y("span", vv, [
              y("span", Ev, C(e.$t("list.id")), 1),
              $v
            ])
          ])
        ]),
        y("th", yv, [
          y("div", bv, [
            y("span", Nv, [
              y("span", Ov, C(e.$t("list.name")), 1),
              Tv
            ])
          ])
        ]),
        y("th", Iv, [
          y("div", Dv, [
            y("span", wv, [
              y("span", Cv, C(e.$t("list.count")), 1)
            ])
          ])
        ])
      ])
    ]),
    y("tbody", null, [
      (v(!0), E(M, null, Xe(n.entities, (i) => (v(), E("tr", Rv, [
        y("td", xv, [
          y("div", Vv, [
            y("span", Lv, C(i.id), 1)
          ])
        ]),
        y("td", Av, [
          y("div", kv, [
            y("span", Sv, [
              y("a", {
                href: "#1",
                onClick: Ae((l) => s.select({ id: i.id, type: i.entity_type }), ["prevent"]),
                title: e.$t("list.editTitle")
              }, [
                i.type_name ? (v(), E(M, { key: 0 }, [
                  q(C(i.type_name) + " / ", 1)
                ], 64)) : j("", !0),
                q(C(i.name), 1)
              ], 8, Mv)
            ])
          ])
        ]),
        y("td", Pv, [
          y("div", Fv, [
            y("span", zv, C(i.count_rules), 1)
          ])
        ])
      ]))), 256))
    ])
  ]);
}
const Uv = /* @__PURE__ */ ce(fv, [["render", jv], ["__scopeId", "data-v-db7a486d"]]), Bv = {
  name: "List",
  components: { TableList: Uv, Spinner: Ia },
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
      Ko.getList().then((e) => {
        this.entities = e.data, this.loading = !1;
      });
    }
  }
}, Hv = { class: "spinner-container" }, Wv = { key: 0 };
function qv(e, t, n, r, o, s) {
  const i = sn("TableList"), l = sn("Spinner");
  return v(), E("div", Hv, [
    o.loading ? j("", !0) : (v(), E("div", Wv, [
      (v(!0), E(M, null, Xe(o.entities, (a, u) => (v(), E(M, null, [
        y("h2", null, C(e.$t("list." + u)), 1),
        Ce(i, {
          entities: a,
          onSelect: t[0] || (t[0] = (f) => {
            e.$emit("select", f);
          })
        }, null, 8, ["entities"])
      ], 64))), 256))
    ])),
    Ce(l, { loading: o.loading }, null, 8, ["loading"])
  ]);
}
const Kv = /* @__PURE__ */ ce(Bv, [["render", qv]]);
const wn = kd(Ud);
wn.config.globalProperties.$scrollTop = (e) => {
  globalThis.intervalId = setInterval(() => {
    if (window.scrollY <= e) {
      clearInterval(globalThis.intervalId);
      return;
    }
    window.scroll(0, window.scrollY - 25);
  }, 20);
};
wn.config.globalProperties.$right = document.getElementById("app").dataset.right;
wn.component("Edit", dv);
wn.component("List", Kv);
wn.use(wp);
wn.mount("#app");
