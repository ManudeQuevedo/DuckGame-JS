(function (e, t) {
    "use strict";

    function _(e) {
        var t = e.length,
            n = y.type(e);
        return y.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function P(e) {
        var t = D[e] = {};
        return y.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function j(e, n, r, i) {
        if (!y.acceptData(e)) return;
        var s, o, u = y.expando,
            a = typeof n == "string",
            l = e.nodeType,
            c = l ? y.cache : e,
            h = l ? e[u] : e[u] && u;
        if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
        h || (l ? e[u] = h = f.pop() || y.guid++ : h = u), c[h] || (c[h] = {}, l || (c[h].toJSON = y.noop));
        if (typeof n == "object" || typeof n == "function") i ? c[h] = y.extend(c[h], n) : c[h].data = y.extend(c[h].data, n);
        return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[y.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[y.camelCase(n)])) : o = s, o
    }

    function F(e, t, n) {
        if (!y.acceptData(e)) return;
        var r, i, s, o = e.nodeType,
            u = o ? y.cache : e,
            a = o ? e[y.expando] : y.expando;
        if (!u[a]) return;
        if (t) {
            r = n ? u[a] : u[a].data;
            if (r) {
                y.isArray(t) ? t = t.concat(y.map(t, y.camelCase)) : t in r ? t = [t] : (t = y.camelCase(t), t in r ? t = [t] : t = t.split(" "));
                for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                if (!(n ? q : y.isEmptyObject)(r)) return
            }
        }
        if (!n) {
            delete u[a].data;
            if (!q(u[a])) return
        }
        o ? y.cleanData([e], !0) : y.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
    }

    function I(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : H.test(r) ? y.parseJSON(r) : r
                } catch (s) {}
                y.data(e, n, r)
            } else r = t
        }
        return r
    }

    function q(e) {
        var t;
        for (t in e) {
            if (t === "data" && y.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function nt() {
        return !0
    }

    function rt() {
        return !1
    }

    function ft(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function lt(e, t, n) {
        t = t || 0;
        if (y.isFunction(t)) return y.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return y.grep(e, function (e) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = y.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (ot.test(t)) return y.filter(t, r, !n);
            t = y.filter(t, r)
        }
        return y.grep(e, function (e) {
            return y.inArray(e, t) >= 0 === n
        })
    }

    function ct(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function At(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ot(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function Mt(e) {
        var t = Tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) y._data(n, "globalEval", !t || y._data(t[r], "globalEval"))
    }

    function Dt(e, t) {
        if (t.nodeType !== 1 || !y.hasData(e)) return;
        var n, r, i, s = y._data(e),
            o = y._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) y.event.add(t, n, u[n][r])
        }
        o.data && (o.data = y.extend({}, o.data))
    }

    function Pt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!y.support.noCloneEvent && t[y.expando]) {
            r = y._data(t);
            for (i in r.events) y.removeEvent(t, i, r.handle);
            t.removeAttribute(y.expando)
        }
        if (n === "script" && t.text !== e.text) Ot(t).text = e.text, Mt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), y.support.html5Clone && e.innerHTML && !y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && Et.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function Ht(e, n) {
        var r, i, s = 0,
            o = typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll(n || "*") : t;
        if (!o)
            for (o = [], r = e.childNodes || e;
                (i = r[s]) != null; s++) !n || y.nodeName(i, n) ? o.push(i) : y.merge(o, Ht(i, n));
        return n === t || n && y.nodeName(e, n) ? y.merge([e], o) : o
    }

    function Bt(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Zt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Yt.length;
        while (i--) {
            t = Yt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function en(e, t) {
        return e = t || e, y.css(e, "display") === "none" || !y.contains(e.ownerDocument, e)
    }

    function tn(e, t) {
        var n, r = [],
            i = 0,
            s = e.length;
        for (; i < s; i++) {
            n = e[i];
            if (!n.style) continue;
            r[i] = y._data(n, "olddisplay"), t ? (!r[i] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && en(n) && (r[i] = y._data(n, "olddisplay", on(n.nodeName)))) : !r[i] && !en(n) && y._data(n, "olddisplay", y.css(n, "display"))
        }
        for (i = 0; i < s; i++) {
            n = e[i];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? r[i] || "" : "none"
        }
        return e
    }

    function nn(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function rn(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += y.css(e, n + Gt[s], !0, i)), r ? (n === "content" && (o -= y.css(e, "padding" + Gt[s], !0, i)), n !== "margin" && (o -= y.css(e, "border" + Gt[s] + "Width", !0, i))) : (o += y.css(e, "padding" + Gt[s], !0, i), n !== "padding" && (o += y.css(e, "border" + Gt[s] + "Width", !0, i)));
        return o
    }

    function sn(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = Ft(e),
            o = y.support.boxSizing && y.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = jt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Vt.test(i)) return i;
            r = o && (y.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + rn(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function on(e) {
        var t = i,
            n = Jt[e];
        if (!n) {
            n = un(e, t);
            if (n === "none" || !n) It = (It || y("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), It.detach();
            Jt[e] = n
        }
        return n
    }

    function un(e, t) {
        var n = y(t.createElement(e)).appendTo(t.body),
            r = y.css(n[0], "display");
        return n.remove(), r
    }

    function pn(e, t, n, r) {
        var i;
        if (y.isArray(t)) y.each(t, function (t, i) {
            n || fn.test(e) ? r(e, i) : pn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && y.type(t) === "object")
            for (i in t) pn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function On(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(w) || [];
            if (y.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, y.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === kn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function _n(e, n) {
        var r, i, s = y.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        return i && y.extend(!0, e, i), e
    }

    function Dn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Pn(e, t) {
        var n, r, i, s, o = {},
            u = 0,
            a = e.dataTypes.slice(),
            f = a[0];
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1])
            for (n in e.converters) o[n.toLowerCase()] = e.converters[n];
        for (; i = a[++u];)
            if (i !== "*") {
                if (f !== "*" && f !== i) {
                    n = o[f + " " + i] || o["* " + i];
                    if (!n)
                        for (r in o) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = o[f + " " + s[0]] || o["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = o[r] : o[r] !== !0 && (i = s[0], a.splice(u--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + f + " to " + i
                            }
                        }
                }
                f = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Rn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Un() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Qn() {
        return setTimeout(function () {
            zn = t
        }), zn = y.now()
    }

    function Gn(e, t) {
        y.each(t, function (t, n) {
            var r = (Kn[t] || []).concat(Kn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Yn(e, t, n) {
        var r, i, s = 0,
            o = Jn.length,
            u = y.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = zn || Qn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: y.extend({}, t),
                opts: y.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: zn || Qn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Zn(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Jn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return Gn(f, l), y.isFunction(f.opts.start) && f.opts.start.call(e, f), y.fx.timer(y.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Zn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = y.camelCase(n), i = t[r], s = e[n], y.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = y.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function er(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            v = [],
            m = e.nodeType && en(e);
        n.queue || (l = y._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, y.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], y.css(e, "display") === "inline" && y.css(e, "float") === "none" && (!y.support.inlineBlockNeedsLayout || on(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", y.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Xn.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (m ? "hide" : "show")) continue;
                v.push(r)
            }
        }
        o = v.length;
        if (o) {
            u = y._data(e, "fxshow") || y._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? y(e).show() : h.done(function () {
                y(e).hide()
            }), h.done(function () {
                var t;
                y._removeData(e, "fxshow");
                for (t in d) y.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = v[r], f = h.createTween(i, m ? u[i] : 0), d[i] = u[i] || y.style(e, i), i in u || (u[i] = f.start, m && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function tr(e, t, n, r, i) {
        return new tr.prototype.init(e, t, n, r, i)
    }

    function nr(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Gt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function rr(e) {
        return y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.jQuery,
        u = e.$,
        a = {},
        f = [],
        l = "1.9.0",
        c = f.concat,
        h = f.push,
        p = f.slice,
        d = f.indexOf,
        v = a.toString,
        m = a.hasOwnProperty,
        g = l.trim,
        y = function (e, t) {
            return new y.fn.init(e, t, n)
        },
        b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        S = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        T = /^[\],:{}\s]*$/,
        N = /(?:^|:|,)(?:\s*\[)+/g,
        C = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        k = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        L = /^-ms-/,
        A = /-([\da-z])/gi,
        O = function (e, t) {
            return t.toUpperCase()
        },
        M = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", M, !1), y.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", M), y.ready())
        };
    y.fn = y.prototype = {
        jquery: l,
        constructor: y,
        init: function (e, n, r) {
            var s, o;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = S.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) {
                        n = n instanceof y ? n[0] : n, y.merge(this, y.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : i, !0));
                        if (x.test(s[1]) && y.isPlainObject(n))
                            for (s in n) y.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                        return this
                    }
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), y.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return p.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = y.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return y.each(this, e, t)
        },
        ready: function (e) {
            return y.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(p.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(y.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, y.fn.init.prototype = y.fn, y.extend = y.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !y.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (y.isPlainObject(i) || (s = y.isArray(i))) ? (s ? (s = !1, o = r && y.isArray(r) ? r : []) : o = r && y.isPlainObject(r) ? r : {}, u[n] = y.extend(l, o, i)) : i !== t && (u[n] = i)
                }
        return u
    }, y.extend({
        noConflict: function (t) {
            return e.$ === y && (e.$ = u), t && e.jQuery === y && (e.jQuery = o), y
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? y.readyWait++ : y.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --y.readyWait : y.isReady) return;
            if (!i.body) return setTimeout(y.ready);
            y.isReady = !0;
            if (e !== !0 && --y.readyWait > 0) return;
            r.resolveWith(i, [y]), y.fn.trigger && y(i).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return y.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return y.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? a[v.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || y.type(e) !== "object" || e.nodeType || y.isWindow(e)) return !1;
            try {
                if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || m.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || i;
            var r = x.exec(e),
                s = !n && [];
            return r ? [t.createElement(r[1])] : (r = y.buildFragment([e], t, s), s && y(s).remove(), y.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = y.trim(t);
                if (t && T.test(t.replace(C, "@").replace(k, "]").replace(N, ""))) return (new Function("return " + t))()
            }
            y.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && y.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && y.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(L, "ms-").replace(A, O)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = _(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
            return e
        },
        trim: g && !g.call("﻿ ") ? function (e) {
            return e == null ? "" : g.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(E, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (_(Object(e)) ? y.merge(n, typeof e == "string" ? [e] : e) : h.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (d) return d.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = _(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return c.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), y.isFunction(e) ? (i = p.call(arguments, 2), s = function () {
                return e.apply(n || this, i.concat(p.call(arguments)))
            }, s.guid = e.guid = e.guid || y.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (y.type(r) === "object") {
                s = !0;
                for (a in r) y.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, y.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(y(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), y.ready.promise = function (t) {
        if (!r) {
            r = y.Deferred();
            if (i.readyState === "complete") setTimeout(y.ready);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", M, !1), e.addEventListener("load", y.ready, !1);
            else {
                i.attachEvent("onreadystatechange", M), e.attachEvent("onload", y.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!y.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        y.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    }), n = y(i);
    var D = {};
    y.Callbacks = function (e) {
        e = typeof e == "string" ? D[e] || P(e) : y.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            y.each(t, function (t, n) {
                                var i = y.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && y.each(arguments, function (e, t) {
                        var n;
                        while ((n = y.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return y.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, y.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", y.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", y.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", y.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return y.Deferred(function (n) {
                            y.each(t, function (t, s) {
                                var o = s[0],
                                    u = y.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? y.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, y.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = p.call(arguments),
                r = n.length,
                i = r !== 1 || e && y.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : y.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? p.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), y.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h = i.createElement("div");
        h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), r = h.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = h.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: h.className !== "t",
            leadingWhitespace: h.firstChild.nodeType === 3,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!u.value,
            optSelected: o.selected,
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = !1
        }
        u = i.createElement("input"), u.setAttribute("value", ""), t.input = u.getAttribute("value") === "", u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "t"), u.setAttribute("name", "t"), a = i.createDocumentFragment(), a.appendChild(u), t.appendChecked = u.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) h.setAttribute(f = "on" + c, "t"), t[c + "Bubbles"] = f in e || h.attributes[f].expando === !1;
        return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = h.style.backgroundClip === "content-box", y(function () {
            var n, r, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = i.getElementsByTagName("body")[0];
            if (!u) return;
            n = i.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = h.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = l && s[0].offsetHeight === 0, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = h.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(h, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(h, null) || {
                width: "4px"
            }).width === "4px", r = h.appendChild(i.createElement("div")), r.style.cssText = h.style.cssText = o, r.style.marginRight = r.style.width = "0", h.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof h.style.zoom != "undefined" && (h.innerHTML = "", h.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = h.offsetWidth === 3, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", t.shrinkWrapBlocks = h.offsetWidth !== 3, u.style.zoom = 1), u.removeChild(n), n = h = s = r = null
        }), n = s = a = o = r = u = null, t
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;
    y.extend({
        cache: {},
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? y.cache[e[y.expando]] : e[y.expando], !!e && !q(e)
        },
        data: function (e, t, n) {
            return j(e, t, n, !1)
        },
        removeData: function (e, t) {
            return F(e, t, !1)
        },
        _data: function (e, t, n) {
            return j(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return F(e, t, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && y.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), y.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                o = 0,
                u = null;
            if (e === t) {
                if (this.length) {
                    u = y.data(s);
                    if (s.nodeType === 1 && !y._data(s, "parsedAttrs")) {
                        r = s.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = y.camelCase(i.substring(5)), I(s, i, u[i]));
                        y._data(s, "parsedAttrs", !0)
                    }
                }
                return u
            }
            return typeof e == "object" ? this.each(function () {
                y.data(this, e)
            }) : y.access(this, function (n) {
                if (n === t) return s ? I(s, e, y.data(s, e)) : null;
                this.each(function () {
                    y.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                y.removeData(this, e)
            })
        }
    }), y.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = y._data(e, t), n && (!r || y.isArray(n) ? r = y._data(e, t, y.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = y.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = y._queueHooks(e, t),
                o = function () {
                    y.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return y._data(e, n) || y._data(e, n, {
                empty: y.Callbacks("once memory").add(function () {
                    y._removeData(e, t + "queue"), y._removeData(e, n)
                })
            })
        }
    }), y.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? y.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = y.queue(this, e, n);
                y._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && y.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                y.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = y.fx ? y.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = y.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = y._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var R, U, z = /[\t\r\n]/g,
        W = /\r/g,
        X = /^(?:input|select|textarea|button|object)$/i,
        V = /^(?:a|area)$/i,
        $ = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        J = /^(?:checked|selected)$/i,
        K = y.support.getSetAttribute,
        Q = y.support.input;
    y.fn.extend({
        attr: function (e, t) {
            return y.access(this, y.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                y.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return y.access(this, y.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = y.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = typeof e == "string" && e;
            if (y.isFunction(e)) return this.each(function (t) {
                y(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(w) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = y.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (y.isFunction(e)) return this.each(function (t) {
                y(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(w) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? y.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return y.isFunction(e) ? this.each(function (n) {
                y(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = y(this),
                        u = t,
                        a = e.match(w) || [];
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && y._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : y._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = y.valHooks[s.type] || y.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(W, "") : r == null ? "" : r);
                return
            }
            return i = y.isFunction(e), this.each(function (r) {
                var s, o = y(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : y.isArray(s) && (s = y.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), y.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (y.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !y.nodeName(n.parentNode, "optgroup"))) {
                            t = y(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n = y.makeArray(t);
                    return y(e).find("option").each(function () {
                        this.selected = y.inArray(y(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            if (typeof e.getAttribute == "undefined") return y.prop(e, n, r);
            o = u !== 1 || !y.isXMLDoc(e), o && (n = n.toLowerCase(), s = y.attrHooks[n] || ($.test(n) ? U : R));
            if (r === t) return s && o && "get" in s && (i = s.get(e, n)) !== null ? i : (typeof e.getAttribute != "undefined" && (i = e.getAttribute(n)), i == null ? t : i);
            if (r !== null) return s && o && "set" in s && (i = s.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r);
            y.removeAttr(e, n)
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(w);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = y.propFix[n] || n, $.test(n) ? !K && J.test(n) ? e[y.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : y.attr(e, n, ""), e.removeAttribute(K ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.support.radioValue && t === "radio" && y.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !y.isXMLDoc(e), o && (n = y.propFix[n] || n, s = y.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), U = {
        get: function (e, n) {
            var r = y.prop(e, n),
                i = typeof r == "boolean" && e.getAttribute(n),
                s = typeof r == "boolean" ? Q && K ? i != null : J.test(n) ? e[y.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? y.removeAttr(e, n) : Q && K || !J.test(n) ? e.setAttribute(!K && y.propFix[n] || n, n) : e[y.camelCase("default-" + n)] = e[n] = !0, n
        }
    };
    if (!Q || !K) y.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return y.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, t, n) {
            if (!y.nodeName(e, "input")) return R && R.set(e, t, n);
            e.defaultValue = t
        }
    };
    K || (R = y.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, y.attrHooks.contenteditable = {
        get: R.get,
        set: function (e, t, n) {
            R.set(e, t === "" ? !1 : t, n)
        }
    }, y.each(["width", "height"], function (e, t) {
        y.attrHooks[t] = y.extend(y.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    })), y.support.hrefNormalized || (y.each(["href", "src", "width", "height"], function (e, n) {
        y.attrHooks[n] = y.extend(y.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r == null ? t : r
            }
        })
    }), y.each(["href", "src"], function (e, t) {
        y.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), y.support.style || (y.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), y.support.optSelected || (y.propHooks.selected = y.extend(y.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), y.support.enctype || (y.propFix.enctype = "encoding"), y.support.checkOn || y.each(["radio", "checkbox"], function () {
        y.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), y.each(["radio", "checkbox"], function () {
        y.valHooks[this] = y.extend(y.valHooks[this], {
            set: function (e, t) {
                if (y.isArray(t)) return e.checked = y.inArray(y(e).val(), t) >= 0
            }
        })
    });
    var G = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        et = /^(?:focusinfocus|focusoutblur)$/,
        tt = /^([^.]*)(?:\.(.+)|)$/;
    y.event = {
            global: {},
            add: function (e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, v, m, g = e.nodeType !== 3 && e.nodeType !== 8 && y._data(e);
                if (!g) return;
                r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = y.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                    return typeof y == "undefined" || !!e && y.event.triggered === e.type ? t : y.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) {
                    a = tt.exec(n[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), h = y.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = y.event.special[d] || {}, c = y.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && y.expr.match.needsContext.test(s),
                        namespace: v.join(".")
                    }, o);
                    if (!(p = f[d])) {
                        p = f[d] = [], p.delegateCount = 0;
                        if (!h.setup || h.setup.call(e, i, v, u) === !1) e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u)
                    }
                    h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), y.event.global[d] = !0
                }
                e = null
            },
            remove: function (e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, v, m = y.hasData(e) && y._data(e);
                if (!m || !(a = m.events)) return;
                t = (t || "").match(w) || [""], f = t.length;
                while (f--) {
                    u = tt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                    if (!p) {
                        for (p in a) y.event.remove(e, p + t[f], n, r, !0);
                        continue
                    }
                    c = y.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                    while (s--) l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                    o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && y.removeEvent(e, p, m.handle), delete a[p])
                }
                y.isEmptyObject(a) && (delete m.handle, y._removeData(e, "events"))
            },
            trigger: function (n, r, s, o) {
                var u, a, f, l, c, h, p, d = [s || i],
                    v = n.type || n,
                    m = n.namespace ? n.namespace.split(".") : [];
                a = f = s = s || i;
                if (s.nodeType === 3 || s.nodeType === 8) return;
                if (et.test(v + y.event.triggered)) return;
                v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, n = n[y.expando] ? n : new y.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = s), r = r == null ? [n] : y.makeArray(r, [n]), p = y.event.special[v] || {};
                if (!o && p.trigger && p.trigger.apply(s, r) === !1) return;
                if (!o && !p.noBubble && !y.isWindow(s)) {
                    l = p.delegateType || v, et.test(l + v) || (a = a.parentNode);
                    for (; a; a = a.parentNode) d.push(a), f = a;
                    f === (s.ownerDocument || i) && d.push(f.defaultView || f.parentWindow || e)
                }
                u = 0;
                while ((a = d[u++]) && !n.isPropagationStopped()) n.type = u > 1 ? l : p.bindType || v, h = (y._data(a, "events") || {})[n.type] && y._data(a, "handle"), h && h.apply(a, r), h = c && a[c], h && y.acceptData(a) && h.apply && h.apply(a, r) === !1 && n.preventDefault();
                n.type = v;
                if (!o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (v !== "click" || !y.nodeName(s, "a")) && y.acceptData(s) && c && s[v] && !y.isWindow(s)) {
                    f = s[c], f && (s[c] = null), y.event.triggered = v;
                    try {
                        s[v]()
                    } catch (g) {}
                    y.event.triggered = t, f && (s[c] = f)
                }
                return n.result
            },
            dispatch: function (e) {
                e = y.event.fix(e);
                var n, r, i, s, o, u = [],
                    a = p.call(arguments),
                    f = (y._data(this, "events") || {})[e.type] || [],
                    l = y.event.special[e.type] || {};
                a[0] = e, e.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                u = y.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, r = 0;
                    while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())
                        if (!e.namespace_re || e.namespace_re.test(o.namespace)) e.handleObj = o, e.data = o.data, i = ((y.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation())
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            },
            handlers: function (e, n) {
                var r, i, s, o, u = [],
                    a = n.delegateCount,
                    f = e.target;
                if (a && f.nodeType && (!e.button || e.type !== "click"))
                    for (; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || e.type !== "click") {
                            i = [];
                            for (r = 0; r < a; r++) o = n[r], s = o.selector + " ", i[s] === t && (i[s] = o.needsContext ? y(s, this).index(f) >= 0 : y.find(s, this, null, [f]).length), i[s] && i.push(o);
                            i.length && u.push({
                                elem: f,
                                handlers: i
                            })
                        }
                return a < n.length && u.push({
                    elem: this,
                    handlers: n.slice(a)
                }), u
            },
            fix: function (e) {
                if (e[y.expando]) return e;
                var t, n, r = e,
                    s = y.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = new y.Event(r), t = o.length;
                while (t--) n = o[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function () {
                        if (y.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function () {
                        if (this !== i.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === i.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = y.extend(new y.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? y.event.trigger(i, null, t) : y.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, y.removeEvent = i.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, y.Event = function (e, t) {
            if (!(this instanceof y.Event)) return new y.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? nt : rt) : this.type = e, t && y.extend(this, t), this.timeStamp = e && e.timeStamp || y.now(), this[y.expando] = !0
        }, y.Event.prototype = {
            isDefaultPrevented: rt,
            isPropagationStopped: rt,
            isImmediatePropagationStopped: rt,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = nt;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = nt;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = nt, this.stopPropagation()
            }
        }, y.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            y.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj;
                    if (!i || i !== r && !y.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), y.support.submitBubbles || (y.event.special.submit = {
            setup: function () {
                if (y.nodeName(this, "form")) return !1;
                y.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target,
                        r = y.nodeName(n, "input") || y.nodeName(n, "button") ? n.form : t;
                    r && !y._data(r, "submitBubbles") && (y.event.add(r, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), y._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && y.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                if (y.nodeName(this, "form")) return !1;
                y.event.remove(this, "._submit")
            }
        }), y.support.changeBubbles || (y.event.special.change = {
            setup: function () {
                if (G.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") y.event.add(this, "propertychange._change", function (e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), y.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), y.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                y.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    G.test(t.nodeName) && !y._data(t, "changeBubbles") && (y.event.add(t, "change._change", function (e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && y.event.simulate("change", this.parentNode, e, !0)
                    }), y._data(t, "changeBubbles", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return y.event.remove(this, "._change"), !G.test(this.nodeName)
            }
        }), y.support.focusinBubbles || y.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0,
                r = function (e) {
                    y.event.simulate(t, e.target, y.event.fix(e), !0)
                };
            y.event.special[t] = {
                setup: function () {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function () {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), y.fn.extend({
            on: function (e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = rt;
                else if (!i) return this;
                return s === 1 && (o = i, i = function (e) {
                    return y().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = y.guid++)), this.each(function () {
                    y.event.add(this, e, i, r, n)
                })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = rt), this.each(function () {
                    y.event.remove(this, e, r, n)
                })
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function (e, t) {
                return this.each(function () {
                    y.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return y.event.trigger(e, t, n, !0)
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            y.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Y.test(t) && (y.event.fixHooks[t] = y.event.keyHooks), Z.test(t) && (y.event.fixHooks[t] = y.event.mouseHooks)
        }),
        function (e, t) {
            function rt(e) {
                return J.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function (n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function st(e) {
                return e[w] = !0, e
            }

            function ot(e) {
                var t = c.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function ut(e, t, n, r) {
                var i, s, o, u, a, f, h, v, m, y;
                (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
                if (!e || typeof e != "string") return n;
                if ((u = t.nodeType) !== 1 && u !== 9) return [];
                if (!p && !r) {
                    if (i = K.exec(e))
                        if (o = i[1]) {
                            if (u === 9) {
                                s = t.getElementById(o);
                                if (!s || !s.parentNode) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                        } else {
                            if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                            if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                        }
                    if (S.qsa && !d.test(e)) {
                        h = !0, v = w, m = t, y = u === 9 && e;
                        if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                            f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                            while (a--) f[a] = v + pt(f[a]);
                            m = $.test(e) && t.parentNode || t, y = f.join(",")
                        }
                        if (y) try {
                            return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                        } catch (b) {} finally {
                            h || t.removeAttribute("id")
                        }
                    }
                }
                return Et(e.replace(R, "$1"), t, n, r)
            }

            function at(e, t) {
                var n = e && t && e.nextSibling;
                for (; n; n = n.nextSibling)
                    if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function lt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function ct(e) {
                return st(function (t) {
                    return t = +t, st(function (n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ht(e, t) {
                var n, r, s, o, u, a, f, l = C[e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = z.exec(u)) n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(R, " ")
                    }), u = u.slice(n.length);
                    for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
            }

            function pt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) r += e[t].value;
                return r
            }

            function dt(e, t, n) {
                var i = t.dir,
                    s = n && t.dir === "parentNode",
                    o = T++;
                return t.first ? function (t, n, r) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s) return e(t, n, r)
                } : function (t, n, u) {
                    var a, f, l, c = x + " " + o;
                    if (u) {
                        while (t = t[i])
                            if (t.nodeType === 1 || s)
                                if (e(t, n, u)) return !0
                    } else
                        while (t = t[i])
                            if (t.nodeType === 1 || s) {
                                l = t[w] || (t[w] = {});
                                if ((f = l[i]) && f[0] === c) {
                                    if ((a = f[1]) === !0 || a === r) return a === !0
                                } else {
                                    f = l[i] = [c], f[1] = e(t, n, u) || r;
                                    if (f[1] === !0) return !0
                                }
                            }
                }
            }

            function vt(e) {
                return e.length > 1 ? function (t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function gt(e, t, n, r, i, s) {
                return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function (s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = mt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
                })
            }

            function yt(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    l = dt(function (e) {
                        return e === t
                    }, u, !0),
                    c = dt(function (e) {
                        return P.call(t, e) > -1
                    }, u, !0),
                    h = [function (e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[w]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                        }
                        h.push(n)
                    }
                return vt(h)
            }

            function bt(e, t) {
                var n = 0,
                    s = t.length > 0,
                    o = e.length > 0,
                    u = function (u, a, l, h, p) {
                        var d, v, m, g = [],
                            y = 0,
                            b = "0",
                            w = u && [],
                            E = p != null,
                            S = f,
                            T = u || o && i.find.TAG("*", p && a.parentNode || a),
                            N = x += S == null ? 1 : Math.E;
                        E && (f = a !== c && a, r = n);
                        for (;
                            (d = T[b]) != null; b++) {
                            if (o && d) {
                                for (v = 0; m = e[v]; v++)
                                    if (m(d, a, l)) {
                                        h.push(d);
                                        break
                                    }
                                E && (x = N, r = ++n)
                            }
                            s && ((d = !m && d) && y--, u && w.push(d))
                        }
                        y += b;
                        if (s && b !== y) {
                            for (v = 0; m = t[v]; v++) m(w, g, a, l);
                            if (u) {
                                if (y > 0)
                                    while (b--) !w[b] && !g[b] && (g[b] = M.call(h));
                                g = mt(g)
                            }
                            _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                        }
                        return E && (x = N, f = S), w
                    };
                return s ? st(u) : u
            }

            function wt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) ut(e, t[r], n);
                return n
            }

            function Et(e, t, n, r) {
                var s, o, a, f, l, c = ht(e);
                if (!r && c.length === 1) {
                    o = c[0] = c[0].slice(0);
                    if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                        t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                        if (!t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (s = V.needsContext.test(e) ? -1 : o.length - 1; s >= 0; s--) {
                        a = o[s];
                        if (i.relative[f = a.type]) break;
                        if (l = i.find[f])
                            if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                                o.splice(s, 1), e = r.length && pt(o);
                                if (!e) return _.apply(n, D.call(r, 0)), n;
                                break
                            }
                    }
                }
                return u(e, c)(r, t, p, n, $.test(e)), n
            }

            function St() {}
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, b, w = "sizzle" + -(new Date),
                E = e.document,
                S = {},
                x = 0,
                T = 0,
                N = it(),
                C = it(),
                k = it(),
                L = typeof t,
                A = 1 << 31,
                O = [],
                M = O.pop,
                _ = O.push,
                D = O.slice,
                P = O.indexOf || function (e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                H = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                j = B.replace("w", "w#"),
                F = "([*^$|!~]?=)",
                I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
                q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                U = new RegExp("^" + H + "*," + H + "*"),
                z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
                W = new RegExp(q),
                X = new RegExp("^" + j + "$"),
                V = {
                    ID: new RegExp("^#(" + B + ")"),
                    CLASS: new RegExp("^\\.(" + B + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                },
                $ = /[\x20\t\r\n\f]*[+~]/,
                J = /\{\s*\[native code\]\s*\}/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Y = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function (e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                };
            try {
                D.call(h.childNodes, 0)[0].nodeType
            } catch (nt) {
                D = function (e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            o = ut.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, l = ut.setDocument = function (e) {
                var n = e ? e.ownerDocument || e : E;
                if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
                c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), S.attributes = ot(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }), S.getByClassName = ot(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }), S.getByName = ot(function (e) {
                    e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                    return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
                }), i.attrHandle = ot(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
                }) ? {} : {
                    href: function (e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                }, S.getIdNotName ? (i.find.ID = function (e, t) {
                    if (typeof t.getElementById !== L && !p) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function (e) {
                    var t = e.replace(et, tt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function (e, n) {
                    if (typeof n.getElementById !== L && !p) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function (e) {
                    var t = e.replace(et, tt);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = S.tagNameNoComments ? function (e, t) {
                    if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                    if (e === "*") {
                        for (; n = s[i]; i++) n.nodeType === 1 && r.push(n);
                        return r
                    }
                    return s
                }, i.find.NAME = S.getByName && function (e, t) {
                    if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
                }, i.find.CLASS = S.getByClassName && function (e, t) {
                    if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
                }, v = [], d = [":focus"];
                if (S.qsa = rt(n.querySelectorAll)) ot(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                }), ot(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                });
                return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function (e) {
                    S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
                }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function (e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, b = h.compareDocumentPosition ? function (e, t) {
                    var r;
                    if (e === t) return a = !0, 0;
                    if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                    return e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var r, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        u = [e],
                        f = [t];
                    if (e === t) return a = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || A) - (g(E, e) && ~e.sourceIndex || A);
                    if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                    if (s === o) return at(e, t);
                    r = e;
                    while (r = r.parentNode) u.unshift(r);
                    r = t;
                    while (r = r.parentNode) f.unshift(r);
                    while (u[i] === f[i]) i++;
                    return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
                }, a = !1, [0, 0].sort(b), S.detectDuplicates = a, c
            }, ut.matches = function (e, t) {
                return ut(e, null, null, t)
            }, ut.matchesSelector = function (e, t) {
                (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
                if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                    var n = m.call(e, t);
                    if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                } catch (r) {}
                return ut(t, c, null, [e]).length > 0
            }, ut.contains = function (e, t) {
                return (e.ownerDocument || e) !== c && l(e), g(e, t)
            }, ut.attr = function (e, t) {
                var n;
                return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, ut.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ut.uniqueSort = function (e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                a = !S.detectDuplicates, e.sort(b);
                if (a) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, s = ut.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i)
                    for (; t = e[r]; r++) n += s(t);
                else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue;
                return n
            }, i = ut.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: V,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        return e === "*" ? function () {
                            return !0
                        } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function (e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = ut.attr(r, e);
                            return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.substr(i.length - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var s = e.slice(0, 3) !== "nth",
                            o = e.slice(-4) !== "last",
                            u = t === "of-type";
                        return r === 1 && i === 0 ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = u && t.nodeName.toLowerCase(),
                                y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                        d = v = e === "only" && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                d = [o ? m.firstChild : m.lastChild];
                                if (o && y) {
                                    l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (c.nodeType === 1 && ++h && c === t) {
                                            l[e] = [x, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                            y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                            if (c === t) break
                                        } return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function (e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: st(function (e) {
                        var t = [],
                            n = [],
                            r = u(e.replace(R, "$1"));
                        return r[w] ? st(function (e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function (e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: st(function (e) {
                        return function (t) {
                            return ut(e, t).length > 0
                        }
                    }),
                    contains: st(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    lang: st(function (e) {
                        return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                while ((t = t.parentNode) && t.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === h
                    },
                    focus: function (e) {
                        return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function (e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                    },
                    first: ct(function () {
                        return [0]
                    }),
                    last: ct(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ct(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ct(function (e, t) {
                        var n = 0;
                        for (; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ct(function (e, t) {
                        var n = 1;
                        for (; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ct(function (e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ct(function (e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = ft(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = lt(n);
            u = ut.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    s = k[e + " "];
                if (!s) {
                    t || (t = ht(e)), n = t.length;
                    while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                    s = k(e, bt(i, r))
                }
                return s
            }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = y.attr, y.find = ut, y.expr = ut.selectors, y.expr[":"] = y.expr.pseudos, y.unique = ut.uniqueSort, y.text = ut.getText, y.isXMLDoc = ut.isXML, y.contains = ut.contains
        }(e);
    var it = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ot = /^.[^:#\[\.,]*$/,
        ut = y.expr.match.needsContext,
        at = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    y.fn.extend({
        find: function (e) {
            var t, n, r;
            if (typeof e != "string") return r = this, this.pushStack(y(e).filter(function () {
                for (t = 0; t < r.length; t++)
                    if (y.contains(r[t], this)) return !0
            }));
            n = [];
            for (t = 0; t < this.length; t++) y.find(e, this[t], n);
            return n = this.pushStack(y.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = y(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (y.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(lt(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(lt(this, e, !0))
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? ut.test(e) ? y(e, this.context).index(this[0]) >= 0 : y.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ut.test(e) || typeof e != "string" ? y(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : y.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(s.length > 1 ? y.unique(s) : s)
        },
        index: function (e) {
            return e ? typeof e == "string" ? y.inArray(this[0], y(e)) : y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? y(e, t) : y.makeArray(e && e.nodeType ? [e] : e),
                r = y.merge(this.get(), n);
            return this.pushStack(y.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), y.fn.andSelf = y.fn.addBack, y.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return y.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return y.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ft(e, "nextSibling")
        },
        prev: function (e) {
            return ft(e, "previousSibling")
        },
        nextAll: function (e) {
            return y.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return y.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return y.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return y.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return y.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return y.sibling(e.firstChild)
        },
        contents: function (e) {
            return y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : y.merge([], e.childNodes)
        }
    }, function (e, t) {
        y.fn[e] = function (n, r) {
            var i = y.map(this, t, n);
            return it.test(e) || (r = n), r && typeof r == "string" && (i = y.filter(r, i)), i = this.length > 1 && !at[e] ? y.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), y.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? y.find.matchesSelector(t[0], e) ? [t[0]] : [] : y.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !y(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        pt = / jQuery\d+="(?:null|\d+)"/g,
        dt = new RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        vt = /^\s+/,
        mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gt = /<([\w:]+)/,
        yt = /<tbody/i,
        bt = /<|&#?\w+;/,
        wt = /<(?:script|style|link)/i,
        Et = /^(?:checkbox|radio)$/i,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /^$|\/(?:java|ecma)script/i,
        Tt = /^true\/(.*)/,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ct = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: y.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        kt = ct(i),
        Lt = kt.appendChild(i.createElement("div"));
    Ct.optgroup = Ct.option, Ct.tbody = Ct.tfoot = Ct.colgroup = Ct.caption = Ct.thead, Ct.th = Ct.td, y.fn.extend({
        text: function (e) {
            return y.access(this, function (e) {
                return e === t ? y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (y.isFunction(e)) return this.each(function (t) {
                y(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = y(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return y.isFunction(e) ? this.each(function (t) {
                y(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = y(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = y.isFunction(e);
            return this.each(function (n) {
                y(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                y.nodeName(this, "body") || y(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (;
                (n = this[r]) != null; r++)
                if (!e || y.filter(e, [n]).length > 0) !t && n.nodeType === 1 && y.cleanData(Ht(n)), n.parentNode && (t && y.contains(n.ownerDocument, n) && _t(Ht(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && y.cleanData(Ht(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && y.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return y.clone(this, e, t)
            })
        },
        html: function (e) {
            return y.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(pt, "") : t;
                if (typeof e == "string" && !wt.test(e) && (y.support.htmlSerialize || !dt.test(e)) && (y.support.leadingWhitespace || !vt.test(e)) && !Ct[(gt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(mt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (y.cleanData(Ht(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = y.isFunction(e);
            return !t && typeof e != "string" && (e = y(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                if (n && this.nodeType === 1 || this.nodeType === 11) y(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e)
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = c.apply([], e);
            var i, s, o, u, a, f, l = 0,
                h = this.length,
                p = this,
                d = h - 1,
                v = e[0],
                m = y.isFunction(v);
            if (m || !(h <= 1 || typeof v != "string" || y.support.checkClone || !St.test(v))) return this.each(function (i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
            });
            if (h) {
                i = y.buildFragment(e, this[0].ownerDocument, !1, this), s = i.firstChild, i.childNodes.length === 1 && (i = s);
                if (s) {
                    n = n && y.nodeName(s, "tr"), o = y.map(Ht(i, "script"), Ot), u = o.length;
                    for (; l < h; l++) a = i, l !== d && (a = y.clone(a, !0, !0), u && y.merge(o, Ht(a, "script"))), r.call(n && y.nodeName(this[l], "table") ? At(this[l], "tbody") : this[l], a, l);
                    if (u) {
                        f = o[o.length - 1].ownerDocument, y.map(o, Mt);
                        for (l = 0; l < u; l++) a = o[l], xt.test(a.type || "") && !y._data(a, "globalEval") && y.contains(f, a) && (a.src ? y.ajax({
                            url: a.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : y.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Nt, "")))
                    }
                    i = s = null
                }
            }
            return this
        }
    }), y.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        y.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = y(e),
                o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), y(s[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    }), y.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = y.contains(e.ownerDocument, e);
            y.support.html5Clone || y.isXMLDoc(e) || !dt.test("<" + e.nodeName + ">") ? u = e.cloneNode(!0) : (Lt.innerHTML = e.outerHTML, Lt.removeChild(u = Lt.firstChild));
            if ((!y.support.noCloneEvent || !y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !y.isXMLDoc(e)) {
                r = Ht(u), i = Ht(e);
                for (o = 0;
                    (s = i[o]) != null; ++o) r[o] && Pt(s, r[o])
            }
            if (t)
                if (n) {
                    i = i || Ht(e), r = r || Ht(u);
                    for (o = 0;
                        (s = i[o]) != null; o++) Dt(s, r[o])
                } else Dt(e, u);
            return r = Ht(u, "script"), r.length > 0 && _t(r, !a && Ht(e, "script")), r = i = s = null, u
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = ct(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (y.type(s) === "object") y.merge(p, s.nodeType ? [s] : s);
                    else if (!bt.test(s)) p.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")), o = (gt.exec(s) || ["", ""])[1].toLowerCase(), a = Ct[o] || Ct._default, u.innerHTML = a[1] + s.replace(mt, "<$1></$2>") + a[2], l = a[0];
                    while (l--) u = u.lastChild;
                    !y.support.leadingWhitespace && vt.test(s) && p.push(t.createTextNode(vt.exec(s)[0]));
                    if (!y.support.tbody) {
                        s = o === "table" && !yt.test(s) ? u.firstChild : a[1] === "<table>" && !yt.test(s) ? u : 0, l = s && s.childNodes.length;
                        while (l--) y.nodeName(f = s.childNodes[l], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    y.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), y.support.appendChecked || y.grep(Ht(p, "input"), Bt), d = 0;
            while (s = p[d++]) {
                if (r && y.inArray(s, r) !== -1) continue;
                i = y.contains(s.ownerDocument, s), u = Ht(h.appendChild(s), "script"), i && _t(u);
                if (n) {
                    l = 0;
                    while (s = u[l++]) xt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, i, s, o = 0,
                u = y.expando,
                a = y.cache,
                l = y.support.deleteExpando,
                c = y.event.special;
            for (;
                (i = e[o]) != null; o++)
                if (t || y.acceptData(i)) {
                    r = i[u], n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events) c[s] ? y.event.remove(i, s) : y.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r], l ? delete i[u] : typeof i.removeAttribute != "undefined" ? i.removeAttribute(u) : i[u] = null, f.push(r))
                    }
                }
        }
    });
    var jt, Ft, It, qt = /alpha\([^)]*\)/i,
        Rt = /opacity\s*=\s*([^)]*)/,
        Ut = /^(top|right|bottom|left)$/,
        zt = /^(none|table(?!-c[ea]).+)/,
        Wt = /^margin/,
        Xt = new RegExp("^(" + b + ")(.*)$", "i"),
        Vt = new RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
        $t = new RegExp("^([+-])=(" + b + ")", "i"),
        Jt = {
            BODY: "block"
        },
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Gt = ["Top", "Right", "Bottom", "Left"],
        Yt = ["Webkit", "O", "Moz", "ms"];
    y.fn.extend({
        css: function (e, n) {
            return y.access(this, function (e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (y.isArray(n)) {
                    i = Ft(e), s = n.length;
                    for (; u < s; u++) o[n[u]] = y.css(e, n[u], !1, i);
                    return o
                }
                return r !== t ? y.style(e, n, r) : y.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return tn(this, !0)
        },
        hide: function () {
            return tn(this)
        },
        toggle: function (e) {
            var t = typeof e == "boolean";
            return this.each(function () {
                (t ? e : en(this)) ? y(this).show(): y(this).hide()
            })
        }
    }), y.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = jt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": y.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = y.camelCase(n),
                f = e.style;
            n = y.cssProps[a] || (y.cssProps[a] = Zt(f, a)), u = y.cssHooks[n] || y.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = $t.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(y.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !y.cssNumber[a] && (r += "px"), !y.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = y.camelCase(n);
            return n = y.cssProps[a] || (y.cssProps[a] = Zt(e.style, a)), u = y.cssHooks[n] || y.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), s === t && (s = jt(e, n, i)), s === "normal" && n in Qt && (s = Qt[n]), r ? (o = parseFloat(s), r === !0 || y.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), e.getComputedStyle ? (Ft = function (t) {
        return e.getComputedStyle(t, null)
    }, jt = function (e, n, r) {
        var i, s, o, u = r || Ft(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && (a === "" && !y.contains(e.ownerDocument, e) && (a = y.style(e, n)), Vt.test(a) && Wt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : i.documentElement.currentStyle && (Ft = function (e) {
        return e.currentStyle
    }, jt = function (e, n, r) {
        var i, s, o, u = r || Ft(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Vt.test(a) && !Ut.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), y.each(["height", "width"], function (e, t) {
        y.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && zt.test(y.css(e, "display")) ? y.swap(e, Kt, function () {
                    return sn(e, t, r)
                }) : sn(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && Ft(e);
                return nn(e, n, r ? rn(e, t, r, y.support.boxSizing && y.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), y.support.opacity || (y.cssHooks.opacity = {
        get: function (e, t) {
            return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && y.trim(s.replace(qt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = qt.test(s) ? s.replace(qt, i) : s + " " + i
        }
    }), y(function () {
        y.support.reliableMarginRight || (y.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return y.swap(e, {
                    display: "inline-block"
                }, jt, [e, "marginRight"])
            }
        }), !y.support.pixelPosition && y.fn.position && y.each(["top", "left"], function (e, t) {
            y.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = jt(e, t), Vt.test(n) ? y(e).position()[t] + "px" : n
                }
            }
        })
    }), y.expr && y.expr.filters && (y.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !y.support.reliableHiddenOffsets && (e.style && e.style.display || y.css(e, "display")) === "none"
    }, y.expr.filters.visible = function (e) {
        return !y.expr.filters.hidden(e)
    }), y.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        y.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Gt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Wt.test(e) || (y.cssHooks[e + t].set = nn)
    });
    var an = /%20/g,
        fn = /\[\]$/,
        ln = /\r?\n/g,
        cn = /^(?:submit|button|image|reset)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    y.fn.extend({
        serialize: function () {
            return y.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = y.prop(this, "elements");
                return e ? y.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !y(this).is(":disabled") && hn.test(this.nodeName) && !cn.test(e) && (this.checked || !Et.test(e))
            }).map(function (e, t) {
                var n = y(this).val();
                return n == null ? null : y.isArray(n) ? y.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ln, "\r\n")
                }
            }).get()
        }
    }), y.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = y.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = y.ajaxSettings && y.ajaxSettings.traditional);
        if (y.isArray(e) || e.jquery && !y.isPlainObject(e)) y.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) pn(r, e[r], n, s);
        return i.join("&").replace(an, "+")
    };
    var dn, vn, mn = y.now(),
        gn = /\?/,
        yn = /#.*$/,
        bn = /([?&])_=[^&]*/,
        wn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        En = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Sn = /^(?:GET|HEAD)$/,
        xn = /^\/\//,
        Tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Nn = y.fn.load,
        Cn = {},
        kn = {},
        Ln = "*/".concat("*");
    try {
        vn = s.href
    } catch (An) {
        vn = i.createElement("a"), vn.href = "", vn = vn.href
    }
    dn = Tn.exec(vn.toLowerCase()) || [], y.fn.load = function (e, n, r) {
        if (typeof e != "string" && Nn) return Nn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), y.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), u.length > 0 && y.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, u.html(i ? y("<div>").append(y.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, o || [e.responseText, t, e])
        }), this
    }, y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        y.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), y.each(["get", "post"], function (e, n) {
        y[n] = function (e, r, i, s) {
            return y.isFunction(r) && (s = s || i, i = r, r = t), y.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), y.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vn,
            type: "GET",
            isLocal: En.test(dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ln,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": y.parseJSON,
                "text xml": y.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? _n(_n(e, y.ajaxSettings), t) : _n(y.ajaxSettings, e)
        },
        ajaxPrefilter: On(Cn),
        ajaxTransport: On(kn),
        ajax: function (e, n) {
            function N(e, n, o, a) {
                var l, g, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), r = t, s = a || "", x.readyState = e > 0 ? 4 : 0, o && (w = Dn(c, x, o));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (y.lastModified[i] = S), S = x.getResponseHeader("etag"), S && (y.etag[i] = S)), e === 304 ? (l = !0, T = "notmodified") : (l = Pn(c, w), T = l.state, g = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(m), m = t, f && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : b]), v.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --y.active || y.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = y.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? y(h) : y.event,
                d = y.Deferred(),
                v = y.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                b = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (E === 2) {
                            if (!o) {
                                o = {};
                                while (t = wn.exec(s)) o[t[1].toLowerCase()] = t[2]
                            }
                            t = o[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return E || (e = b[n] = b[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (E < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || S;
                        return r && r.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || vn) + "").replace(yn, "").replace(xn, dn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = y.trim(c.dataType || "*").toLowerCase().match(w) || [""], c.crossDomain == null && (a = Tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === dn[1] && a[2] === dn[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (dn[3] || (dn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = y.param(c.data, c.traditional)), Mn(Cn, c, n, x);
            if (E === 2) return x;
            f = c.global, f && y.active++ === 0 && y.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Sn.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (gn.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = bn.test(i) ? i.replace(bn, "$1_=" + mn++) : i + (gn.test(i) ? "&" : "?") + "_=" + mn++)), c.ifModified && (y.lastModified[i] && x.setRequestHeader("If-Modified-Since", y.lastModified[i]), y.etag[i] && x.setRequestHeader("If-None-Match", y.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Ln + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](c[l]);
                r = Mn(kn, c, n, x);
                if (!r) N(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, r.send(g, N)
                    } catch (T) {
                        if (!(E < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getScript: function (e, n) {
            return y.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return y.get(e, t, n, "json")
        }
    }), y.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return y.globalEval(e), e
            }
        }
    }), y.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), y.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || y("head")[0] || i.documentElement;
            return {
                send: function (t, s) {
                    n = i.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Hn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    y.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Hn.pop() || y.expando + "_" + mn++;
            return this[e] = !0, e
        }
    }), y.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Bn, "$1" + s) : n.jsonp !== !1 && (n.url += (gn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || y.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Hn.push(s)), u && y.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var jn, Fn, In = 0,
        qn = e.ActiveXObject && function () {
            var e;
            for (e in jn) jn[e](t, !0)
        };
    y.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && Rn() || Un()
    } : Rn, Fn = y.ajaxSettings.xhr(), y.support.cors = !!Fn && "withCredentials" in Fn, Fn = y.support.ajax = !!Fn, Fn && y.ajaxTransport(function (n) {
        if (!n.crossDomain || y.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = y.noop, qn && delete jn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, h = a.responseXML, l = a.getAllResponseHeaders(), h && h.documentElement && (c.xml = h), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++In, qn && (jn || (jn = {}, y(e).unload(qn)), jn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var zn, Wn, Xn = /^(?:toggle|show|hide)$/,
        Vn = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
        $n = /queueHooks$/,
        Jn = [er],
        Kn = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t),
                    s = Vn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (y.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = y.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, y.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    y.Animation = y.extend(Yn, {
        tweener: function (e, t) {
            y.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Kn[n] = Kn[n] || [], Kn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Jn.unshift(e) : Jn.push(e)
        }
    }), y.Tween = tr, tr.prototype = {
        constructor: tr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (y.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = tr.propHooks[this.prop];
            return e && e.get ? e.get(this) : tr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = tr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tr.propHooks._default.set(this), this
        }
    }, tr.prototype.init.prototype = tr.prototype, tr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = y.css(e.elem, e.prop, "auto"), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                y.fx.step[e.prop] ? y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[y.cssProps[e.prop]] != null || y.cssHooks[e.prop]) ? y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, tr.propHooks.scrollTop = tr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, y.each(["toggle", "show", "hide"], function (e, t) {
        var n = y.fn[t];
        y.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(nr(t, !0), e, r, i)
        }
    }), y.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(en).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = y.isEmptyObject(e),
                s = y.speed(t, n, r),
                o = function () {
                    var t = Yn(this, y.extend({}, e), s);
                    o.finish = function () {
                        t.stop(!0)
                    }, (i || y._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = y.timers,
                    o = y._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && $n.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && y.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = y._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = y.timers,
                    o = r ? r.length : 0;
                n.finish = !0, y.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), y.each({
        slideDown: nr("show"),
        slideUp: nr("hide"),
        slideToggle: nr("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        y.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), y.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? y.extend({}, e) : {
            complete: n || !n && t || y.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !y.isFunction(t) && t
        };
        r.duration = y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in y.fx.speeds ? y.fx.speeds[r.duration] : y.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            y.isFunction(r.old) && r.old.call(this), r.queue && y.dequeue(this, r.queue)
        }, r
    }, y.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, y.timers = [], y.fx = tr.prototype.init, y.fx.tick = function () {
        var e, n = y.timers,
            r = 0;
        zn = y.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || y.fx.stop(), zn = t
    }, y.fx.timer = function (e) {
        e() && y.timers.push(e) && y.fx.start()
    }, y.fx.interval = 13, y.fx.start = function () {
        Wn || (Wn = setInterval(y.fx.tick, y.fx.interval))
    }, y.fx.stop = function () {
        clearInterval(Wn), Wn = null
    }, y.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, y.fx.step = {}, y.expr && y.expr.filters && (y.expr.filters.animated = function (e) {
        return y.grep(y.timers, function (t) {
            return e === t.elem
        }).length
    }), y.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            y.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
        if (!o) return;
        return n = o.documentElement, y.contains(n, s) ? (typeof s.getBoundingClientRect != "undefined" && (i = s.getBoundingClientRect()), r = rr(o), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, y.offset = {
        setOffset: function (e, t, n) {
            var r = y.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = y(e),
                s = i.offset(),
                o = y.css(e, "top"),
                u = y.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && y.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), y.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, y.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return y.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), y.nodeName(e[0], "html") || (n = e.offset()), n.top += y.css(e[0], "borderTopWidth", !0), n.left += y.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - y.css(r, "marginTop", !0),
                left: t.left - n.left - y.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.documentElement;
                while (e && !y.nodeName(e, "html") && y.css(e, "position") === "static") e = e.offsetParent;
                return e || i.documentElement
            })
        }
    }), y.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        y.fn[e] = function (i) {
            return y.access(this, function (e, i, s) {
                var o = rr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? y(o).scrollLeft() : s, r ? s : y(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), y.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        y.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            y.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return y.access(this, function (n, r, i) {
                    var s;
                    return y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? y.css(n, r, u) : y.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = y, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return y
    })
})(window),
function () {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.3";
    var T = x.each = x.forEach = function (e, t, r) {
        if (null != e)
            if (c && e.forEach === c) e.forEach(t, r);
            else if (e.length === +e.length) {
            for (var i = 0, s = e.length; s > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function (e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        if (T(e, function (u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            return t.call(n, e, i, s) ? (r = e, !0) : void 0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            return (i = i && t.call(r, e, s, o)) ? void 0 : n
        }), !!i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            return i || (i = t.call(r, e, s, o)) ? n : void 0
        }), !!i)
    };
    x.contains = x.include = function (e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2);
        return x.map(e, function (e) {
            return (x.isFunction(t) ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t) {
        return x.isEmpty(t) ? [] : x.filter(e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            r.computed > o && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function (e, t, n, r) {
        var i = {},
            s = k(t || x.identity);
        return T(e, function (t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function (e, t, n) {
        return L(e, t, n, function (e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function (e, t, n, r) {
        n = null == n ? x.identity : k(n);
        for (var i = n.call(r, t), s = 0, o = e.length; o > s;) {
            var u = s + o >>> 1;
            i > n.call(r, e[u]) ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, null == t || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return T(e, function (e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
        }), s
    }, x.union = function () {
        return x.uniq(a.apply(r, arguments))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i;) s[i++] = e, e += n;
        return s
    };
    var O = function () {};
    x.bind = function (e, t) {
        var n, r;
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        return 0 == t.length && (t = x.functions(e)), T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
            function () {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t) {
        var n, r, i, s, o = 0,
            u = function () {
                o = new Date, i = null, s = e.apply(n, r)
            };
        return function () {
            var a = new Date,
                f = t - (a - o);
            return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var s = this,
                o = arguments,
                u = function () {
                    r = null, n || (i = e.apply(s, o))
                },
                a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, x.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return 0 >= e ? t() : function () {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function (e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == t + "";
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--;)
            if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if ("[object Array]" == i) {
            if (o = e.length, u = o == t.length)
                for (; o-- && (u = M(e[o], t[o], n, r)););
        } else {
            var a = e.constructor,
                l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e)
                if (x.has(e, c) && (o++, !(u = x.has(t, c) && M(e[c], t[c], n, r)))) break;
            if (u) {
                for (c in t)
                    if (x.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    x.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (null == e) return !0;
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && 1 === e.nodeType
    }, x.isArray = w || function (e) {
        return "[object Array]" == f.call(e)
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !!x.has(e, "callee")
    }), x.isFunction = function (e) {
        return "function" == typeof e
    }, x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
    }, x.isNull = function (e) {
        return null === e
    }, x.isUndefined = function (e) {
        return void 0 === e
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return null == t && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return null == t ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (null == e) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function (e) {
        var t = "" + ++P;
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        n = x.defaults({}, n, x.templateSettings);
        var r = RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
        e.replace(r, function (t, n, r, o, u) {
            return s += e.slice(i, u).replace(j, function (e) {
                return "\\" + B[e]
            }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), i = u + t.length, t
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = Function(n.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        if (t) return o(t, x);
        var a = function (e) {
            return o.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var F = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
    function (e) {
        e._spritely = {
            animate: function (t) {
                var n = e(t.el),
                    r = n.attr("id");
                if (!e._spritely.instances[r]) return this;
                t = e.extend(t, e._spritely.instances[r] || {}), t.play_frames && !e._spritely.instances[r].remaining_frames && (e._spritely.instances[r].remaining_frames = t.play_frames + 1);
                if (t.type == "sprite" && t.fps) {
                    var i, s = function (n) {
                        var s = t.width,
                            o = t.height;
                        if (!i) {
                            i = [], total = 0;
                            for (var u = 0; u < t.no_of_frames; u++) i[i.length] = 0 - total, total += s
                        }
                        e._spritely.instances[r]["current_frame"] == 0 ? t.on_first_frame && t.on_first_frame(n) : e._spritely.instances[r]["current_frame"] == i.length - 1 && t.on_last_frame && t.on_last_frame(n), t.on_frame && t.on_frame[e._spritely.instances[r].current_frame] && t.on_frame[e._spritely.instances[r].current_frame](n), t.rewind == 1 ? e._spritely.instances[r].current_frame <= 0 ? e._spritely.instances[r].current_frame = i.length - 1 : e._spritely.instances[r].current_frame = e._spritely.instances[r].current_frame - 1 : e._spritely.instances[r].current_frame >= i.length - 1 ? e._spritely.instances[r].current_frame = 0 : e._spritely.instances[r].current_frame = e._spritely.instances[r].current_frame + 1;
                        var a = e._spritely.getBgY(n);
                        n.css("background-position", i[e._spritely.instances[r].current_frame] + "px " + a);
                        if (t.bounce && t.bounce[0] > 0 && t.bounce[1] > 0) {
                            var f = t.bounce[0],
                                l = t.bounce[1],
                                c = t.bounce[2];
                            n.animate({
                                top: "+=" + f + "px",
                                left: "-=" + l + "px"
                            }, c).animate({
                                top: "-=" + f + "px",
                                left: "+=" + l + "px"
                            }, c)
                        }
                    };
                    if (e._spritely.instances[r].remaining_frames && e._spritely.instances[r].remaining_frames > 0) {
                        e._spritely.instances[r].remaining_frames--;
                        if (e._spritely.instances[r]["remaining_frames"] == 0) {
                            e._spritely.instances[r].remaining_frames = -1, delete e._spritely.instances[r].remaining_frames;
                            return
                        }
                        s(n)
                    } else e._spritely.instances[r]["remaining_frames"] != -1 && s(n)
                } else if (t.type == "pan" && !e._spritely.instances[r]._stopped) {
                    t.dir == "up" ? (e._spritely.instances[r].l = e._spritely.getBgX(n).replace("px", ""), e._spritely.instances[r].t = e._spritely.instances[r].t - (t.speed || 1) || 0) : t.dir == "down" ? (e._spritely.instances[r].l = e._spritely.getBgX(n).replace("px", ""), e._spritely.instances[r].t = e._spritely.instances[r].t + (t.speed || 1) || 0) : t.dir == "left" ? (e._spritely.instances[r].l = e._spritely.instances[r].l - (t.speed || 1) || 0, e._spritely.instances[r].t = e._spritely.getBgY(n).replace("px", "")) : (e._spritely.instances[r].l = e._spritely.instances[r].l + (t.speed || 1) || 0, e._spritely.instances[r].t = e._spritely.getBgY(n).replace("px", ""));
                    var o = e._spritely.instances[r].l.toString();
                    o.indexOf("%") == -1 ? o += "px " : o += " ";
                    var u = e._spritely.instances[r].t.toString();
                    u.indexOf("%") == -1 ? u += "px " : u += " ", e(n).css("background-position", o + u)
                }
                e._spritely.instances[r].options = t, window.setTimeout(function () {
                    e._spritely.animate(t)
                }, parseInt(1e3 / t.fps))
            },
            randomIntBetween: function (e, t) {
                return parseInt(rand_no = Math.floor((t - (e - 1)) * Math.random()) + e)
            },
            getBgY: function (t) {
                if (e("html").hasClass("msie")) var n = e(t).css("background-position-y") || "0";
                else var n = (e(t).css("background-position") || " ").split(" ")[1];
                return n
            },
            getBgX: function (t) {
                if (e("html").hasClass("msie")) var n = e(t).css("background-position-x") || "0";
                else var n = (e(t).css("background-position") || " ").split(" ")[0];
                return n
            },
            get_rel_pos: function (e, t) {
                var n = e;
                if (e < 0)
                    while (n < 0) n += t;
                else
                    while (n > t) n -= t;
                return n
            }
        }, e.fn.extend({
            spritely: function (t) {
                var t = e.extend({
                        type: "sprite",
                        do_once: !1,
                        width: null,
                        height: null,
                        fps: 12,
                        no_of_frames: 2,
                        stop_after: null,
                        direction: null
                    }, t || {}),
                    n = e(this).attr("id");
                e._spritely.instances || (e._spritely.instances = {}), e._spritely.instances[n] || (t.start_at_frame ? e._spritely.instances[n] = {
                    current_frame: t.start_at_frame - 1
                } : e._spritely.instances[n] = {
                    current_frame: -1
                }), e._spritely.instances[n].type = t.type, e._spritely.instances[n].depth = t.depth, t.el = this, t.width = t.width || e(this).width() || 100, t.height = t.height || e(this).height() || 100;
                var r = function () {
                    return parseInt(1e3 / t.fps)
                };
                return t.do_once ? e._spritely.animate(t) : window.setTimeout(function () {
                    e._spritely.animate(t)
                }, r(t.fps)), this
            },
            sprite: function (t) {
                var t = e.extend({
                    type: "sprite",
                    bounce: [0, 0, 1e3]
                }, t || {});
                return e(this).spritely(t)
            },
            pan: function (t) {
                var t = e.extend({
                    type: "pan",
                    dir: "left",
                    continuous: !0,
                    speed: 1
                }, t || {});
                return e(this).spritely(t)
            },
            flyToTap: function (t) {
                var t = e.extend({
                    el_to_move: null,
                    type: "moveToTap",
                    ms: 1e3,
                    do_once: !0
                }, t || {});
                return t.el_to_move && e(t.el_to_move).active(), e._spritely.activeSprite && (window.Touch ? e(this)[0].ontouchstart = function (t) {
                    var n = e._spritely.activeSprite,
                        r = t.touches[0],
                        i = r.pageY - n.height() / 2,
                        s = r.pageX - n.width() / 2;
                    n.animate({
                        top: i + "px",
                        left: s + "px"
                    }, 1e3)
                } : e(this).click(function (t) {
                    var n = e._spritely.activeSprite;
                    e(n).stop(!0);
                    var r = n.width(),
                        i = n.height(),
                        s = t.pageX - r / 2,
                        o = t.pageY - i / 2;
                    n.animate({
                        top: o + "px",
                        left: s + "px"
                    }, 1e3)
                })), this
            },
            isDraggable: function (t) {
                if (!e(this).draggable) return this;
                var t = e.extend({
                        type: "isDraggable",
                        start: null,
                        stop: null,
                        drag: null
                    }, t || {}),
                    n = e(this).attr("id");
                return e._spritely.instances[n] ? (e._spritely.instances[n].isDraggableOptions = t, e(this).draggable({
                    start: function () {
                        var t = e(this).attr("id");
                        e._spritely.instances[t].stop_random = !0, e(this).stop(!0), e._spritely.instances[t].isDraggableOptions.start && e._spritely.instances[t].isDraggableOptions.start(this)
                    },
                    drag: t.drag,
                    stop: function () {
                        var t = e(this).attr("id");
                        e._spritely.instances[t].stop_random = !1, e._spritely.instances[t].isDraggableOptions.stop && e._spritely.instances[t].isDraggableOptions.stop(this)
                    }
                }), this) : this
            },
            active: function () {
                return e._spritely.activeSprite = this, this
            },
            activeOnClick: function () {
                var t = e(this);
                return window.Touch ? t[0].ontouchstart = function (n) {
                    e._spritely.activeSprite = t
                } : t.click(function (n) {
                    e._spritely.activeSprite = t
                }), this
            },
            spRandom: function (t) {
                var t = e.extend({
                        top: 50,
                        left: 50,
                        right: 290,
                        bottom: 320,
                        speed: 4e3,
                        pause: 0
                    }, t || {}),
                    n = e(this).attr("id");
                if (!e._spritely.instances[n]) return this;
                if (!e._spritely.instances[n].stop_random) {
                    var r = e._spritely.randomIntBetween,
                        i = r(t.top, t.bottom),
                        s = r(t.left, t.right),
                        o = parseInt(e(this).css("top").replace("px", "")),
                        u = parseInt(e(this).css("left").replace("px", "")),
                        a = i - o,
                        f = s - u;
                    while (Math.abs(a) < 300 && Math.abs(f) < 300) {
                        var r = e._spritely.randomIntBetween;
                        i = r(t.top, t.bottom), s = r(t.left, t.right), a = i - o, f = s - u
                    }
                    a > 1 && f < 1 && e(this).spState(1), a > 1 && f > 1 && e(this).spState(2), a < 1 && f < 1 && e(this).spState(2), a < 1 && f < 1 && e(this).spState(1), Math.abs(a) < Math.abs(f) && (f < 1 ? e(this).spState(4) : e(this).spState(3)), e("#" + n).animate({
                        top: i + "px",
                        left: s + "px"
                    }, t.speed)
                }
                return window.setTimeout(function () {
                    e("#" + n).spRandom(t)
                }, t.speed + t.pause), this
            },
            alterState: function (t, n, r, i, s, o, u) {
                var a = parseInt(e(r).css("top").replace("px", "")),
                    f = parseInt(e(r).css("left").replace("px", "")),
                    l = t - a,
                    c = n - f;
                while (Math.abs(l) < 300 && Math.abs(c) < 300) {
                    var h = e._spritely.randomIntBetween;
                    t = h(i, u), n = h(s, o), l = t - a, c = n - f
                }
                e("#info").html(" T:" + t + " L:" + n + "<br/>" + "CT:" + a + " CL:" + f + "<br/>" + " DT:" + l + " DL:" + c), l > 1 && c < 1 && e(r).spState(1), l > 1 && c > 1 && e(r).spState(2), l < 1 && c < 1 && e(r).spState(2), l < 1 && c < 1 && e(r).spState(1), Math.abs(l) < Math.abs(c) && (c < 1 ? e(r).spState(4) : e(r).spState(3))
            },
            makeAbsolute: function () {
                return this.each(function () {
                    var t = e(this),
                        n = t.position();
                    t.css({
                        position: "absolute",
                        marginLeft: 0,
                        marginTop: 0,
                        top: n.top,
                        left: n.left
                    }).remove().appendTo("body")
                })
            },
            spSet: function (t, n) {
                var r = e(this).attr("id");
                return e._spritely.instances[r][t] = n, this
            },
            spGet: function (t, n) {
                var r = e(this).attr("id");
                return e._spritely.instances[r][t]
            },
            spStop: function (t) {
                return e(this).each(function () {
                    var n = e(this).attr("id");
                    e._spritely.instances[n]._last_fps = e(this).spGet("fps"), e._spritely.instances[n]._stopped = !0, e._spritely.instances[n]._stopped_f1 = t, e._spritely.instances[n]["type"] == "sprite" && e(this).spSet("fps", 0);
                    if (t) {
                        var r = e._spritely.getBgY(e(this));
                        e(this).css("background-position", "0 " + r)
                    }
                }), this
            },
            spStart: function () {
                return e(this).each(function () {
                    var t = e(this).attr("id"),
                        n = e._spritely.instances[t]._last_fps || 12;
                    e._spritely.instances[t]._stopped = !1, e._spritely.instances[t]["type"] == "sprite" && e(this).spSet("fps", n)
                }), this
            },
            spToggle: function () {
                var t = e(this).attr("id"),
                    n = e._spritely.instances[t]._stopped || !1,
                    r = e._spritely.instances[t]._stopped_f1 || !1;
                return n ? e(this).spStart() : e(this).spStop(r), this
            },
            fps: function (t) {
                return e(this).each(function () {
                    e(this).spSet("fps", t)
                }), this
            },
            spSpeed: function (t) {
                return e(this).each(function () {
                    e(this).spSet("speed", t)
                }), this
            },
            spRelSpeed: function (t) {
                return e(this).each(function () {
                    var n = e(this).spGet("depth") / 100;
                    e(this).spSet("speed", t * n)
                }), this
            },
            spChangeDir: function (t) {
                return e(this).each(function () {
                    e(this).spSet("dir", t)
                }), this
            },
            spState: function (t) {
                return e(this).each(function () {
                    var r = (t - 1) * e(this).height() + "px",
                        i = e._spritely.getBgX(e(this)),
                        s = i + " -" + r;
                    e(this).css("background-position", s)
                }), this
            },
            lockTo: function (t, n) {
                return e(this).each(function () {
                    var r = e(this).attr("id");
                    if (!e._spritely.instances[r]) return this;
                    e._spritely.instances[r].locked_el = e(this), e._spritely.instances[r].lock_to = e(t), e._spritely.instances[r].lock_to_options = n, window.setInterval(function () {
                        if (e._spritely.instances[r].lock_to) {
                            var t = e._spritely.instances[r].locked_el,
                                n = e._spritely.instances[r].lock_to,
                                i = e._spritely.instances[r].lock_to_options,
                                s = i.bg_img_width,
                                o = n.height(),
                                u = e._spritely.getBgY(n),
                                a = e._spritely.getBgX(n),
                                f = parseInt(a) + parseInt(i.left),
                                l = parseInt(u) + parseInt(i.top);
                            f = e._spritely.get_rel_pos(f, s), e(t).css({
                                top: l + "px",
                                left: f + "px"
                            })
                        }
                    }, n.interval || 20)
                }), this
            },
            destroy: function () {
                var t = e(this),
                    n = e(this).attr("id");
                return delete e._spritely.instances[n], this
            }
        })
    }(jQuery);
try {
    document.execCommand("BackgroundImageCache", !1, !0)
} catch (err) {}(function (e, t) {
    function h(e, t, n) {
        var r = u[t.type] || {};
        return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
    }

    function p(t) {
        var n = s(),
            r = n._rgba = [];
        return t = t.toLowerCase(), c(i, function (e, i) {
            var s, u = i.re.exec(t),
                a = u && i.parse(u),
                f = i.space || "rgba";
            if (a) return s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1
        }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t]
    }

    function d(e, t, n) {
        return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        i = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }],
        s = e.Color = function (t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i)
        },
        o = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        a = s.support = {},
        f = e("<p>")[0],
        l, c = e.each;
    f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba") > -1, c(o, function (e, t) {
        t.cache = "_" + e, t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), s.fn = e.extend(s.prototype, {
        parse: function (n, r, i, u) {
            if (n === t) return this._rgba = [null, null, null, null], this;
            if (n.jquery || n.nodeType) n = e(n).css(r), r = t;
            var a = this,
                f = e.type(n),
                d = this._rgba = [];
            r !== t && (n = [n, r, i, u], f = "array");
            if (f === "string") return this.parse(p(n) || l._default);
            if (f === "array") return c(o.rgba.props, function (e, t) {
                d[t.idx] = h(n[t.idx], t)
            }), this;
            if (f === "object") return n instanceof s ? c(o, function (e, t) {
                n[t.cache] && (a[t.cache] = n[t.cache].slice())
            }) : c(o, function (t, r) {
                var i = r.cache;
                c(r.props, function (e, t) {
                    if (!a[i] && r.to) {
                        if (e === "alpha" || n[e] == null) return;
                        a[i] = r.to(a._rgba)
                    }
                    a[i][t.idx] = h(n[e], t, !0)
                }), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])))
            }), this
        },
        is: function (e) {
            var t = s(e),
                n = !0,
                r = this;
            return c(o, function (e, i) {
                var s, o = t[i.cache];
                return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function (e, t) {
                    if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                })), n
            }), n
        },
        _space: function () {
            var e = [],
                t = this;
            return c(o, function (n, r) {
                t[r.cache] && e.push(n)
            }), e.pop()
        },
        transition: function (e, t) {
            var n = s(e),
                r = n._space(),
                i = o[r],
                a = this.alpha() === 0 ? s("transparent") : this,
                f = a[i.cache] || i.to(a._rgba),
                l = f.slice();
            return n = n[i.cache], c(i.props, function (e, r) {
                var i = r.idx,
                    s = f[i],
                    o = n[i],
                    a = u[r.type] || {};
                if (o === null) return;
                s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r))
            }), this[r](l)
        },
        blend: function (t) {
            if (this._rgba[3] === 1) return this;
            var n = this._rgba.slice(),
                r = n.pop(),
                i = s(t)._rgba;
            return s(e.map(n, function (e, t) {
                return (1 - r) * i[t] + r * e
            }))
        },
        toRgbaString: function () {
            var t = "rgba(",
                n = e.map(this._rgba, function (e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
            return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
        },
        toHslaString: function () {
            var t = "hsla(",
                n = e.map(this.hsla(), function (e, t) {
                    return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                });
            return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
        },
        toHexString: function (t) {
            var n = this._rgba.slice(),
                r = n.pop();
            return t && n.push(~~(r * 255)), "#" + e.map(n, function (e) {
                return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
            }).join("")
        },
        toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    }), s.fn.parse.prototype = s.fn, o.hsla.to = function (e) {
        if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
        var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255,
            i = e[3],
            s = Math.max(t, n, r),
            o = Math.min(t, n, r),
            u = s - o,
            a = s + o,
            f = a * .5,
            l, c;
        return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
    }, o.hsla.from = function (e) {
        if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
        var t = e[0] / 360,
            n = e[1],
            r = e[2],
            i = e[3],
            s = r <= .5 ? r * (1 + n) : r + n - r * n,
            o = 2 * r - s;
        return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
    }, c(o, function (n, i) {
        var o = i.props,
            u = i.cache,
            a = i.to,
            f = i.from;
        s.fn[n] = function (n) {
            a && !this[u] && (this[u] = a(this._rgba));
            if (n === t) return this[u].slice();
            var r, i = e.type(n),
                l = i === "array" || i === "object" ? n : arguments,
                p = this[u].slice();
            return c(o, function (e, t) {
                var n = l[i === "object" ? e : t.idx];
                n == null && (n = p[t.idx]), p[t.idx] = h(n, t)
            }), f ? (r = s(f(p)), r[u] = p, r) : s(p)
        }, c(o, function (t, i) {
            if (s.fn[t]) return;
            s.fn[t] = function (s) {
                var o = e.type(s),
                    u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
                    a = this[u](),
                    f = a[i.idx],
                    l;
                return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[i.idx] = s, this[u](a)))
            }
        })
    }), s.hook = function (t) {
        var n = t.split(" ");
        c(n, function (t, n) {
            e.cssHooks[n] = {
                set: function (t, r) {
                    var i, o, u = "";
                    if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                        r = s(i || r);
                        if (!a.rgba && r._rgba[3] !== 1) {
                            o = n === "backgroundColor" ? t.parentNode : t;
                            while ((u === "" || u === "transparent") && o && o.style) try {
                                u = e.css(o, "backgroundColor"), o = o.parentNode
                            } catch (f) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        t.style[n] = r
                    } catch (f) {}
                }
            }, e.fx.step[n] = function (t) {
                t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }, s.hook(n), e.cssHooks.borderColor = {
        expand: function (e) {
            var t = {};
            return c(["Top", "Right", "Bottom", "Left"], function (n, r) {
                t["border" + r + "Color"] = e
            }), t
        }
    }, l = e.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
})(jQuery),
function () {
    "use strict";

    function e(t, r) {
        function s(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }
        var i;
        r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700;
        if (e.notNeeded(t)) return;
        var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
            u = this;
        for (var a = 0, f = o.length; a < f; a++) u[o[a]] = s(u[o[a]], u);
        n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, r) {
            var i = Node.prototype.removeEventListener;
            e === "click" ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
        }, t.addEventListener = function (e, n, r) {
            var i = Node.prototype.addEventListener;
            e === "click" ? i.call(t, e, n.hijacked || (n.hijacked = function (e) {
                e.propagationStopped || n(e)
            }), r) : i.call(t, e, n, r)
        }), typeof t.onclick == "function" && (i = t.onclick, t.addEventListener("click", function (e) {
            i(e)
        }, !1), t.onclick = null)
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        s = r && /OS [6-7]_\d/.test(navigator.userAgent),
        o = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (r && e.type === "file" || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function (e, t) {
        var n, r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function (e) {
        return n && e.tagName.toLowerCase() === "select" ? "mousedown" : "click"
    }, e.prototype.focus = function (e) {
        var t;
        r && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month" ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function (e) {
        var t, n;
        t = e.fastClickScrollParent;
        if (!t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function (e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function (e) {
        var t, n, s;
        if (e.targetTouches.length > 1) return !0;
        t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0];
        if (r) {
            s = window.getSelection();
            if (s.rangeCount && !s.isCollapsed) return !0;
            if (!i) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function (e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
    }, e.prototype.onTouchMove = function (e) {
        if (!this.trackingClick) return !0;
        if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) this.trackingClick = !1, this.targetElement = null;
        return !0
    }, e.prototype.findControl = function (e) {
        return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function (e) {
        var t, o, u, a, f, l = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (f = e.changedTouches[0], l = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), u = l.tagName.toLowerCase();
        if (u === "label") {
            t = this.findControl(l);
            if (t) {
                this.focus(l);
                if (n) return !1;
                l = t
            }
        } else if (this.needsFocus(l)) {
            if (e.timeStamp - o > 100 || r && window.top !== window && u === "input") return this.targetElement = null, !1;
            this.focus(l), this.sendClick(l, e);
            if (!r || u !== "select") this.targetElement = null, e.preventDefault();
            return !1
        }
        if (r && !i) {
            a = l.fastClickScrollParent;
            if (a && a.fastClickLastScrollTop !== a.scrollTop) return !0
        }
        return this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1
    }, e.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function (e) {
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
    }, e.prototype.onClick = function (e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function () {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function (e) {
        var t, r, i, s;
        if (typeof window.ontouchstart == "undefined") return !0;
        r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (r) {
            if (!n) return !0;
            t = document.querySelector("meta[name=viewport]");
            if (t) {
                if (t.content.indexOf("user-scalable=no") !== -1) return !0;
                if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (o) {
            i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (i[1] >= 10 && i[2] >= 3) {
                t = document.querySelector("meta[name=viewport]");
                if (t) {
                    if (t.content.indexOf("user-scalable=no") !== -1) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
        }
        if (e.style.msTouchAction === "none" || e.style.touchAction === "manipulation") return !0;
        s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (s >= 27) {
            t = document.querySelector("meta[name=viewport]");
            if (t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) return !0
        }
        return e.style.touchAction === "none" || e.style.touchAction === "manipulation" ? !0 : !1
    }, e.attach = function (t, n) {
        return new e(t, n)
    }, typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function () {
        return e
    }) : typeof module != "undefined" && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}();