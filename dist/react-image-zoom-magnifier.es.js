import fe, { useState as V, useRef as ne, useCallback as B, useEffect as de } from "react";
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function le(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var K = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function me() {
  if (oe) return H;
  oe = 1;
  var v = Symbol.for("react.transitional.element"), A = Symbol.for("react.fragment");
  function $(I, g, T) {
    var _ = null;
    if (T !== void 0 && (_ = "" + T), g.key !== void 0 && (_ = "" + g.key), "key" in g) {
      T = {};
      for (var O in g)
        O !== "key" && (T[O] = g[O]);
    } else T = g;
    return g = T.ref, {
      $$typeof: v,
      type: I,
      key: _,
      ref: g !== void 0 ? g : null,
      props: T
    };
  }
  return H.Fragment = A, H.jsx = $, H.jsxs = $, H;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function ve() {
  return ie || (ie = 1, process.env.NODE_ENV !== "production" && (function() {
    function v(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === l ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case S:
          return "Profiler";
        case J:
          return "StrictMode";
        case o:
          return "Suspense";
        case t:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case C:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case a:
            return r = e.displayName || null, r !== null ? r : v(e.type) || "Memo";
          case c:
            r = e._payload, e = e._init;
            try {
              return v(e(r));
            } catch {
            }
        }
      return null;
    }
    function A(e) {
      return "" + e;
    }
    function $(e) {
      try {
        A(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var i = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), A(e);
      }
    }
    function I(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === c)
        return "<...>";
      try {
        var r = v(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function g() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function T() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (u.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function O(e, r) {
      function i() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function M() {
      var e = v(this.type);
      return y[e] || (y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function G(e, r, i, s, w, x, D, d) {
      return i = x.ref, e = {
        $$typeof: F,
        type: e,
        key: r,
        props: x,
        _owner: w
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function W(e, r, i, s, w, x, D, d) {
      var n = r.children;
      if (n !== void 0)
        if (s)
          if (f(n)) {
            for (s = 0; s < n.length; s++)
              Y(n[s]);
            Object.freeze && Object.freeze(n);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Y(n);
      if (u.call(r, "key")) {
        n = v(e);
        var p = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        s = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", P[n + s] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          n,
          p,
          n
        ), P[n + s] = !0);
      }
      if (n = null, i !== void 0 && ($(i), n = "" + i), _(r) && ($(r.key), n = "" + r.key), "key" in r) {
        i = {};
        for (var L in r)
          L !== "key" && (i[L] = r[L]);
      } else i = r;
      return n && O(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), G(
        e,
        n,
        x,
        w,
        g(),
        i,
        D,
        d
      );
    }
    function Y(e) {
      typeof e == "object" && e !== null && e.$$typeof === F && e._store && (e._store.validated = 1);
    }
    var N = fe, F = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), q = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), t = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), l = Symbol.for("react.client.reference"), m = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, u = Object.prototype.hasOwnProperty, f = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var R, y = {}, h = N.react_stack_bottom_frame.bind(
      N,
      T
    )(), j = E(I(T)), P = {};
    Z.Fragment = k, Z.jsx = function(e, r, i, s, w) {
      var x = 1e4 > m.recentlyCreatedOwnerStacks++;
      return W(
        e,
        r,
        i,
        !1,
        s,
        w,
        x ? Error("react-stack-top-frame") : h,
        x ? E(I(e)) : j
      );
    }, Z.jsxs = function(e, r, i, s, w) {
      var x = 1e4 > m.recentlyCreatedOwnerStacks++;
      return W(
        e,
        r,
        i,
        !0,
        s,
        w,
        x ? Error("react-stack-top-frame") : h,
        x ? E(I(e)) : j
      );
    };
  })()), Z;
}
var ae;
function be() {
  return ae || (ae = 1, process.env.NODE_ENV === "production" ? K.exports = me() : K.exports = ve()), K.exports;
}
var ee = be(), re, se;
function Ee() {
  if (se) return re;
  se = 1;
  var v = "Expected a function", A = NaN, $ = "[object Symbol]", I = /^\s+|\s+$/g, g = /^[-+]0x[0-9a-f]+$/i, T = /^0b[01]+$/i, _ = /^0o[0-7]+$/i, O = parseInt, M = typeof z == "object" && z && z.Object === Object && z, G = typeof self == "object" && self && self.Object === Object && self, W = M || G || Function("return this")(), Y = Object.prototype, N = Y.toString, F = Math.max, X = Math.min, k = function() {
    return W.Date.now();
  };
  function J(o, t, a) {
    var c, b, l, m, u, f, E = 0, R = !1, y = !1, h = !0;
    if (typeof o != "function")
      throw new TypeError(v);
    t = U(t) || 0, S(a) && (R = !!a.leading, y = "maxWait" in a, l = y ? F(U(a.maxWait) || 0, t) : l, h = "trailing" in a ? !!a.trailing : h);
    function j(d) {
      var n = c, p = b;
      return c = b = void 0, E = d, m = o.apply(p, n), m;
    }
    function P(d) {
      return E = d, u = setTimeout(i, t), R ? j(d) : m;
    }
    function e(d) {
      var n = d - f, p = d - E, L = t - n;
      return y ? X(L, l - p) : L;
    }
    function r(d) {
      var n = d - f, p = d - E;
      return f === void 0 || n >= t || n < 0 || y && p >= l;
    }
    function i() {
      var d = k();
      if (r(d))
        return s(d);
      u = setTimeout(i, e(d));
    }
    function s(d) {
      return u = void 0, h && c ? j(d) : (c = b = void 0, m);
    }
    function w() {
      u !== void 0 && clearTimeout(u), E = 0, c = f = b = u = void 0;
    }
    function x() {
      return u === void 0 ? m : s(k());
    }
    function D() {
      var d = k(), n = r(d);
      if (c = arguments, b = this, f = d, n) {
        if (u === void 0)
          return P(f);
        if (y)
          return u = setTimeout(i, t), j(f);
      }
      return u === void 0 && (u = setTimeout(i, t)), m;
    }
    return D.cancel = w, D.flush = x, D;
  }
  function S(o) {
    var t = typeof o;
    return !!o && (t == "object" || t == "function");
  }
  function C(o) {
    return !!o && typeof o == "object";
  }
  function q(o) {
    return typeof o == "symbol" || C(o) && N.call(o) == $;
  }
  function U(o) {
    if (typeof o == "number")
      return o;
    if (q(o))
      return A;
    if (S(o)) {
      var t = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = S(t) ? t + "" : t;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = o.replace(I, "");
    var a = T.test(o);
    return a || _.test(o) ? O(o.slice(2), a ? 2 : 8) : g.test(o) ? A : +o;
  }
  return re = J, re;
}
var pe = Ee();
const ge = /* @__PURE__ */ le(pe);
var te, ce;
function Te() {
  if (ce) return te;
  ce = 1;
  var v = "Expected a function", A = NaN, $ = "[object Symbol]", I = /^\s+|\s+$/g, g = /^[-+]0x[0-9a-f]+$/i, T = /^0b[01]+$/i, _ = /^0o[0-7]+$/i, O = parseInt, M = typeof z == "object" && z && z.Object === Object && z, G = typeof self == "object" && self && self.Object === Object && self, W = M || G || Function("return this")(), Y = Object.prototype, N = Y.toString, F = Math.max, X = Math.min, k = function() {
    return W.Date.now();
  };
  function J(t, a, c) {
    var b, l, m, u, f, E, R = 0, y = !1, h = !1, j = !0;
    if (typeof t != "function")
      throw new TypeError(v);
    a = o(a) || 0, C(c) && (y = !!c.leading, h = "maxWait" in c, m = h ? F(o(c.maxWait) || 0, a) : m, j = "trailing" in c ? !!c.trailing : j);
    function P(n) {
      var p = b, L = l;
      return b = l = void 0, R = n, u = t.apply(L, p), u;
    }
    function e(n) {
      return R = n, f = setTimeout(s, a), y ? P(n) : u;
    }
    function r(n) {
      var p = n - E, L = n - R, Q = a - p;
      return h ? X(Q, m - L) : Q;
    }
    function i(n) {
      var p = n - E, L = n - R;
      return E === void 0 || p >= a || p < 0 || h && L >= m;
    }
    function s() {
      var n = k();
      if (i(n))
        return w(n);
      f = setTimeout(s, r(n));
    }
    function w(n) {
      return f = void 0, j && b ? P(n) : (b = l = void 0, u);
    }
    function x() {
      f !== void 0 && clearTimeout(f), R = 0, b = E = l = f = void 0;
    }
    function D() {
      return f === void 0 ? u : w(k());
    }
    function d() {
      var n = k(), p = i(n);
      if (b = arguments, l = this, E = n, p) {
        if (f === void 0)
          return e(E);
        if (h)
          return f = setTimeout(s, a), P(E);
      }
      return f === void 0 && (f = setTimeout(s, a)), u;
    }
    return d.cancel = x, d.flush = D, d;
  }
  function S(t, a, c) {
    var b = !0, l = !0;
    if (typeof t != "function")
      throw new TypeError(v);
    return C(c) && (b = "leading" in c ? !!c.leading : b, l = "trailing" in c ? !!c.trailing : l), J(t, a, {
      leading: b,
      maxWait: a,
      trailing: l
    });
  }
  function C(t) {
    var a = typeof t;
    return !!t && (a == "object" || a == "function");
  }
  function q(t) {
    return !!t && typeof t == "object";
  }
  function U(t) {
    return typeof t == "symbol" || q(t) && N.call(t) == $;
  }
  function o(t) {
    if (typeof t == "number")
      return t;
    if (U(t))
      return A;
    if (C(t)) {
      var a = typeof t.valueOf == "function" ? t.valueOf() : t;
      t = C(a) ? a + "" : a;
    }
    if (typeof t != "string")
      return t === 0 ? t : +t;
    t = t.replace(I, "");
    var c = T.test(t);
    return c || _.test(t) ? O(t.slice(2), c ? 2 : 8) : g.test(t) ? A : +t;
  }
  return te = S, te;
}
var he = Te();
const ue = /* @__PURE__ */ le(he), Re = ({
  // Default props
  src: v,
  width: A = "100%",
  height: $ = "auto",
  className: I = "",
  zoomImgSrc: g = "",
  zoomFactor: T = 1.5,
  mgWidth: _ = 150,
  mgHeight: O = 150,
  mgBorderWidth: M = 2,
  mgShape: G = "circle",
  mgShowOverflow: W = !0,
  mgMouseOffsetX: Y = 0,
  mgMouseOffsetY: N = 0,
  mgTouchOffsetX: F = -50,
  mgTouchOffsetY: X = -50,
  ...k
}) => {
  const [J, S] = V(!1), [C, q] = V(0), [U, o] = V(0), [t, a] = V(0), [c, b] = V(0), l = ne(null), m = ne(null), u = B(() => {
    l.current && (m.current = l.current.getBoundingClientRect());
  }, []), f = B(ge(u, 200), [u]), E = B(() => {
    u();
  }, [u]), R = B(
    ue((r) => {
      if (m.current && l.current) {
        const i = (r.clientX - m.current.left) / l.current.clientWidth, s = (r.clientY - m.current.top) / l.current.clientHeight;
        q(Y), o(N), a(i), b(s), S(!0);
      }
    }, 20, { trailing: !1 }),
    [Y, N]
  ), y = B(() => {
    S(!1);
  }, []), h = B((r) => {
    r.preventDefault(), u();
  }, [u]), j = B(
    ue((r) => {
      if (r.preventDefault(), m.current && l.current) {
        const i = (r.targetTouches[0].clientX - m.current.left) / l.current.clientWidth, s = (r.targetTouches[0].clientY - m.current.top) / l.current.clientHeight;
        i >= 0 && s >= 0 && i <= 1 && s <= 1 ? (q(F), o(X), a(i), b(s), S(!0)) : S(!1);
      }
    }, 20, { trailing: !1 }),
    [F, X]
  ), P = B(() => {
    S(!1);
  }, []);
  de(() => {
    const r = l.current;
    if (r)
      return r.addEventListener("mouseenter", E, { passive: !1 }), r.addEventListener("mousemove", R, { passive: !1 }), r.addEventListener("mouseout", y, { passive: !1 }), r.addEventListener("touchstart", h, { passive: !1 }), r.addEventListener("touchmove", j, { passive: !1 }), r.addEventListener("touchend", P, { passive: !1 }), window.addEventListener("resize", f), window.addEventListener("scroll", f, !0), () => {
        r.removeEventListener("mouseenter", E), r.removeEventListener("mousemove", R), r.removeEventListener("mouseout", y), r.removeEventListener("touchstart", h), r.removeEventListener("touchmove", j), r.removeEventListener("touchend", P), window.removeEventListener("resize", f), window.removeEventListener("scroll", f, !0);
      };
  }, [E, R, y, h, j, P, f]);
  let e = "magnifying-glass";
  return J && (e += " visible"), G === "circle" && (e += " circle"), /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: `magnifier ${I}`,
      style: {
        width: A,
        height: $,
        overflow: W ? "visible" : "hidden"
      },
      children: [
        /* @__PURE__ */ ee.jsx(
          "img",
          {
            className: "magnifier-image",
            src: v,
            width: "100%",
            height: "100%",
            ...k,
            onLoad: u,
            ref: l,
            alt: ""
          }
        ),
        m.current && /* @__PURE__ */ ee.jsx(
          "div",
          {
            className: e,
            style: {
              width: _,
              height: O,
              left: `calc(${t * 100}% - ${_ / 2}px + ${C}px - ${M}px)`,
              top: `calc(${c * 100}% - ${O / 2}px + ${U}px - ${M}px)`,
              backgroundImage: `url("${g || v}")`,
              backgroundPosition: `calc(${t * 100}% + ${_ / 2}px - ${t * _}px) calc(${c * 100}% + ${O / 2}px - ${c * _}px)`,
              backgroundSize: `${T * (m.current?.width || 0)}% ${T * (m.current?.height || 0)}%`,
              borderWidth: M
            }
          }
        )
      ]
    }
  );
};
export {
  Re as Magnifier
};
