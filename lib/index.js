module.exports = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = a(n(1)),
        u = a(n(2));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = function(e) {
        var t = {
                CPF: "999.999.999-999",
                CNPJ: "99.999.999/9999-99"
            },
            n = l(t.CNPJ).length,
            u = e.onChange,
            a = e.type,
            c = l(e.value);

        function i(e) {
            return e.length > 11 ? "CNPJ" : "CPF"
        }

        function f(e, t) {
            var n = "",
                r = 0;
            return Array.from(e).forEach((function(e, o) {
                t[o + r].match(/[0-9]/) || (n += t[o + r], r++), n += e
            })), n
        }

        function l(e) {
            return e && e.replace(/[^0-9]/g, "")
        }
        return c && (c = f(c, t[i(c)])), o.default.createElement("input", r({}, e, {
            type: a,
            value: c,
            onChange: function(e) {
                var r = l(e.target.value),
                    o = i(r);
                r.length > n || (r = f(r, t[o]), e.target.value = r, u(e, o))
            }
        }))
    };
    c.propTypes = {
        value: u.default.string,
        onChange: u.default.func
    }, c.defaultProps = {
        type: "tel",
        value: "",
        onChange: function() {}
    }, t.default = c
}, function(e, t) {
    e.exports = require("react")
}, function(e, t, n) {
    e.exports = n(3)()
}, function(e, t, n) {
    "use strict";
    var r = n(4);

    function o() {}

    function u() {}
    u.resetWarningCache = o, e.exports = function() {
        function e(e, t, n, o, u, a) {
            if (a !== r) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: u,
            resetWarningCache: o
        };
        return n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}]);