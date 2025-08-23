import ae, { useState as C, useRef as K, useCallback as E, useEffect as se } from "react";
import ce from "lodash.debounce";
import ee from "lodash.throttle";
var q = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function ue() {
  if (re) return Y;
  re = 1;
  var i = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function p(b, s, c) {
    var l = null;
    if (c !== void 0 && (l = "" + c), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      c = {};
      for (var m in s)
        m !== "key" && (c[m] = s[m]);
    } else c = s;
    return s = c.ref, {
      $$typeof: i,
      type: b,
      key: l,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return Y.Fragment = h, Y.jsx = p, Y.jsxs = p, Y;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function le() {
  return te || (te = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === u ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case N:
          return "Fragment";
        case _:
          return "Profiler";
        case W:
          return "StrictMode";
        case X:
          return "Suspense";
        case L:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case F:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function p(e) {
      try {
        h(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), h(e);
      }
    }
    function b(e) {
      if (e === N) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = a.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (f.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function j() {
      var e = i(this.type);
      return x[e] || (x[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function J(e, r, t, n, v, d, B, Z) {
      return t = d.ref, e = {
        $$typeof: $,
        type: e,
        key: r,
        props: d,
        _owner: v
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
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
        value: B
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function M(e, r, t, n, v, d, B, Z) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (T(o)) {
            for (n = 0; n < o.length; n++)
              y(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(o);
      if (f.call(r, "key")) {
        o = i(e);
        var P = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        n = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", A[o + n] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          P,
          o
        ), A[o + n] = !0);
      }
      if (o = null, t !== void 0 && (p(t), o = "" + t), l(r) && (p(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var H in r)
          H !== "key" && (t[H] = r[H]);
      } else t = r;
      return o && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), J(
        e,
        o,
        d,
        v,
        s(),
        t,
        B,
        Z
      );
    }
    function y(e) {
      typeof e == "object" && e !== null && e.$$typeof === $ && e._store && (e._store.validated = 1);
    }
    var R = ae, $ = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), F = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), u = Symbol.for("react.client.reference"), a = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, f = Object.prototype.hasOwnProperty, T = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var w, x = {}, O = R.react_stack_bottom_frame.bind(
      R,
      c
    )(), S = g(b(c)), A = {};
    I.Fragment = N, I.jsx = function(e, r, t, n, v) {
      var d = 1e4 > a.recentlyCreatedOwnerStacks++;
      return M(
        e,
        r,
        t,
        !1,
        n,
        v,
        d ? Error("react-stack-top-frame") : O,
        d ? g(b(e)) : S
      );
    }, I.jsxs = function(e, r, t, n, v) {
      var d = 1e4 > a.recentlyCreatedOwnerStacks++;
      return M(
        e,
        r,
        t,
        !0,
        n,
        v,
        d ? Error("react-stack-top-frame") : O,
        d ? g(b(e)) : S
      );
    };
  })()), I;
}
var ne;
function ie() {
  return ne || (ne = 1, process.env.NODE_ENV === "production" ? q.exports = ue() : q.exports = le()), q.exports;
}
var Q = ie();
const ve = ({
  // Default props
  src: i,
  width: h = "100%",
  height: p = "auto",
  className: b = "",
  zoomImgSrc: s = "",
  zoomFactor: c = 1.5,
  mgWidth: l = 150,
  mgHeight: m = 150,
  mgBorderWidth: j = 2,
  mgShape: J = "circle",
  mgShowOverflow: M = !0,
  mgMouseOffsetX: y = 0,
  mgMouseOffsetY: R = 0,
  mgTouchOffsetX: $ = -50,
  mgTouchOffsetY: D = -50,
  ...N
}) => {
  const [W, _] = C(!1), [V, F] = C(0), [G, X] = C(0), [L, U] = C(0), [k, z] = C(0), u = K(null), a = K(null), f = E(() => {
    u.current && (a.current = u.current.getBoundingClientRect());
  }, []), T = E(ce(f, 200), [f]), g = E(() => {
    f();
  }, [f]), w = E(
    ee((r) => {
      if (a.current && u.current) {
        const t = (r.clientX - a.current.left) / u.current.clientWidth, n = (r.clientY - a.current.top) / u.current.clientHeight;
        F(y), X(R), U(t), z(n), _(!0);
      }
    }, 20, { trailing: !1 }),
    [y, R]
  ), x = E(() => {
    _(!1);
  }, []), O = E((r) => {
    r.preventDefault(), f();
  }, [f]), S = E(
    ee((r) => {
      if (r.preventDefault(), a.current && u.current) {
        const t = (r.targetTouches[0].clientX - a.current.left) / u.current.clientWidth, n = (r.targetTouches[0].clientY - a.current.top) / u.current.clientHeight;
        t >= 0 && n >= 0 && t <= 1 && n <= 1 ? (F($), X(D), U(t), z(n), _(!0)) : _(!1);
      }
    }, 20, { trailing: !1 }),
    [$, D]
  ), A = E(() => {
    _(!1);
  }, []);
  se(() => {
    const r = u.current;
    if (r)
      return r.addEventListener("mouseenter", g, { passive: !1 }), r.addEventListener("mousemove", w, { passive: !1 }), r.addEventListener("mouseout", x, { passive: !1 }), r.addEventListener("touchstart", O, { passive: !1 }), r.addEventListener("touchmove", S, { passive: !1 }), r.addEventListener("touchend", A, { passive: !1 }), window.addEventListener("resize", T), window.addEventListener("scroll", T, !0), () => {
        r.removeEventListener("mouseenter", g), r.removeEventListener("mousemove", w), r.removeEventListener("mouseout", x), r.removeEventListener("touchstart", O), r.removeEventListener("touchmove", S), r.removeEventListener("touchend", A), window.removeEventListener("resize", T), window.removeEventListener("scroll", T, !0);
      };
  }, [g, w, x, O, S, A, T]);
  let e = "magnifying-glass";
  return W && (e += " visible"), J === "circle" && (e += " circle"), /* @__PURE__ */ Q.jsxs(
    "div",
    {
      className: `magnifier ${b}`,
      style: {
        width: h,
        height: p,
        overflow: M ? "visible" : "hidden"
      },
      children: [
        /* @__PURE__ */ Q.jsx(
          "img",
          {
            className: "magnifier-image",
            src: i,
            width: "100%",
            height: "100%",
            ...N,
            onLoad: f,
            ref: u,
            alt: ""
          }
        ),
        a.current && /* @__PURE__ */ Q.jsx(
          "div",
          {
            className: e,
            style: {
              width: l,
              height: m,
              left: `calc(${L * 100}% - ${l / 2}px + ${V}px - ${j}px)`,
              top: `calc(${k * 100}% - ${m / 2}px + ${G}px - ${j}px)`,
              backgroundImage: `url("${s || i}")`,
              backgroundPosition: `calc(${L * 100}% + ${l / 2}px - ${L * l}px) calc(${k * 100}% + ${m / 2}px - ${k * l}px)`,
              backgroundSize: `${c * (a.current?.width || 0)}% ${c * (a.current?.height || 0)}%`,
              borderWidth: j
            }
          }
        )
      ]
    }
  );
};
export {
  ve as default
};
