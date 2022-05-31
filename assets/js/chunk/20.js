/*! For license information please see 20.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    578: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return Page
        })
        n(590)
        var r = n(574),
          a = n(568),
          c = n(90),
          o = n(737),
          i = n(77),
          s = n(64),
          l = (n(581), n(115))
        function Page(t) {
          var n = t.title,
            u = t.className,
            d = void 0 === u ? '' : u,
            f = t.children,
            b = c.a.useRouter().path
          return (
            Object(s.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(o.a)({ scrollTop: 0 })
              },
              [b],
            ),
            c.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(l.jsxs)(a.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(l.jsxs)(a.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(i.d)()
                      },
                    }),
                    Object(l.jsxs)(a.n, {
                      className: 'demo-nav__title',
                      children: [n, ' '],
                    }),
                  ],
                }),
                f,
              ],
            })
          )
        }
      }.call(this, n(236)))
    },
    579: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r = n(39),
        a = n(40),
        c = n(66),
        o = n(65),
        i = n(568),
        s = n(64),
        l = (n(582), n(115)),
        u = (function (e) {
          Object(c.a)(Index, e)
          var t = Object(o.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), t.call(this)
          }
          return (
            Object(a.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    n = e.title,
                    r = e.card
                  return Object(l.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      n &&
                        Object(l.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: n,
                        }),
                      r
                        ? Object(l.jsx)(i.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(s.Component)
    },
    581: function (e, t, n) {},
    582: function (e, t, n) {},
    586: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Loading
      })
      var r = n(116),
        a = n.n(r),
        c = n(55),
        o = n.n(c),
        i = n(572),
        s = n.n(i),
        l = n(577),
        u = n.n(l),
        d = n(573),
        f = n.n(d),
        b = n(595),
        p = n.n(b),
        j = n(10),
        x = n.n(j),
        v = n(24),
        m = n.n(v),
        h = n(571),
        y = n.n(h),
        O = n(32),
        g = n.n(O),
        _ = n(570),
        S = n.n(_),
        N = n(27),
        w = n.n(N),
        I = n(173),
        k = n.n(I),
        C = n(568),
        z = n(64),
        E = n(569),
        K = n(580)
      function textStyle(e) {
        return Object(E.c)({ 'font-size': Object(K.a)(e.textSize) })
      }
      var A = n(115),
        T = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(e, t) {
        var n = m()(e)
        if (y.a) {
          var r = y()(e)
          t &&
            (r = g()(r).call(r, function (t) {
              return S()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            w()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              s()(e, t, r[t])
            })
          else if (k.a) a()(e, k()(r))
          else {
            var c
            w()((c = ownKeys(Object(r)))).call(c, function (t) {
              o()(e, t, S()(r, t))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var t,
          n = e.vertical,
          r = e.type,
          a = void 0 === r ? 'circular' : r,
          c = e.color,
          o = e.size,
          i = e.textSize,
          s = e.className,
          l = e.children,
          d = e.style,
          b = f()(e, T),
          j = Object(z.useState)(p()({ length: 12 })),
          v = u()(j, 1)[0]
        return Object(A.jsxs)(
          C.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + E.b('loading', { vertical: n }) + ' ' + s,
                style: E.c([d]),
              },
              b,
            ),
            {},
            {
              children: [
                Object(A.jsx)(C.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((t = { color: c, size: o }),
                    Object(E.c)({
                      color: t.color,
                      width: Object(K.a)(t.size),
                      height: Object(K.a)(t.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(A.jsx)(C.a, {
                      children: x()(v).call(v, function (e, t) {
                        return Object(A.jsx)(
                          C.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(t),
                        )
                      }),
                    }),
                }),
                Object(A.jsx)(C.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: i }),
                  children: l,
                }),
              ],
            },
          ),
        )
      }
      t.b = Loading
    },
    587: function (e, t, n) {},
    612: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _objectSpread2
      })
      var r = n(610),
        a = n.n(r),
        c = n(608),
        o = n.n(c),
        i = n(631),
        s = n.n(i),
        l = n(635),
        u = n.n(l),
        d = n(624),
        f = n.n(d),
        b = n(639),
        p = n.n(b),
        j = n(643),
        x = n.n(j),
        v = n(67),
        m = n.n(v),
        h = n(91)
      function ownKeys(e, t) {
        var n = a()(e)
        if (o.a) {
          var r = o()(e)
          t &&
            (r = s()(r).call(r, function (t) {
              return u()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r,
            a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f()((n = ownKeys(Object(a), !0))).call(n, function (t) {
                Object(h.a)(e, t, a[t])
              })
            : p.a
            ? x()(e, p()(a))
            : f()((r = ownKeys(Object(a)))).call(r, function (t) {
                m()(e, t, u()(a, t))
              })
        }
        return e
      }
    },
    624: function (e, t, n) {
      e.exports = n(679)
    },
    631: function (e, t, n) {
      e.exports = n(632)
    },
    632: function (e, t, n) {
      e.exports = n(633)
    },
    633: function (e, t, n) {
      var r = n(634)
      e.exports = r
    },
    634: function (e, t, n) {
      var r = n(238)
      e.exports = r
    },
    635: function (e, t, n) {
      e.exports = n(636)
    },
    636: function (e, t, n) {
      e.exports = n(637)
    },
    637: function (e, t, n) {
      var r = n(638)
      e.exports = r
    },
    638: function (e, t, n) {
      var r = n(607)
      e.exports = r
    },
    639: function (e, t, n) {
      e.exports = n(640)
    },
    640: function (e, t, n) {
      e.exports = n(641)
    },
    641: function (e, t, n) {
      var r = n(642)
      e.exports = r
    },
    642: function (e, t, n) {
      var r = n(240)
      e.exports = r
    },
    643: function (e, t, n) {
      e.exports = n(644)
    },
    644: function (e, t, n) {
      e.exports = n(645)
    },
    645: function (e, t, n) {
      var r = n(646)
      e.exports = r
    },
    646: function (e, t, n) {
      var r = n(239)
      e.exports = r
    },
    679: function (e, t, n) {
      e.exports = n(680)
    },
    680: function (e, t, n) {
      var r = n(681)
      e.exports = r
    },
    681: function (e, t, n) {
      var r = n(244)
      e.exports = r
    },
    705: function (e, t, n) {
      var r = n(723),
        a = n(724),
        c = n(743),
        o = n(725)
      ;(e.exports = function _toConsumableArray(e) {
        return r(e) || a(e) || c(e) || o()
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    719: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Empty
      })
      var r = n(116),
        a = n.n(r),
        c = n(55),
        o = n.n(c),
        i = n(24),
        s = n.n(i),
        l = n(571),
        u = n.n(l),
        d = n(32),
        f = n.n(d),
        b = n(570),
        p = n.n(b),
        j = n(27),
        x = n.n(j),
        v = n(173),
        m = n.n(v),
        h = n(572),
        y = n.n(h),
        O = n(573),
        g = n.n(O),
        _ = n(568),
        S = n(28),
        N = n.n(S),
        w = ['error', 'search', 'default', 'network']
      function imageUrl(e) {
        return -1 !== N()(w).call(w, e)
          ? 'https://img.yzcdn.cn/vant/empty-image-' + e + '.png'
          : e
      }
      var I = n(115),
        k = [
          'image',
          'description',
          'renderImage',
          'renderDescription',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, t) {
        var n = s()(e)
        if (u.a) {
          var r = u()(e)
          t &&
            (r = f()(r).call(r, function (t) {
              return p()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            x()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              y()(e, t, r[t])
            })
          else if (m.a) a()(e, m()(r))
          else {
            var c
            x()((c = ownKeys(Object(r)))).call(c, function (t) {
              o()(e, t, p()(r, t))
            })
          }
        }
        return e
      }
      function Empty(e) {
        var t = e.image,
          n = void 0 === t ? 'default' : t,
          r = e.description,
          a = e.renderImage,
          c = e.renderDescription,
          o = e.style,
          i = e.className,
          s = e.children,
          l = g()(e, k)
        return Object(I.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread({ className: ' van-empty '.concat(i), style: o }, l),
            {},
            {
              children: [
                Object(I.jsx)(_.n, {
                  className: 'van-empty__image',
                  children: a,
                }),
                Object(I.jsx)(_.n, {
                  className: 'van-empty__image',
                  children:
                    n &&
                    Object(I.jsx)(_.f, {
                      className: 'van-empty__image__img',
                      src: imageUrl(n),
                    }),
                }),
                Object(I.jsx)(_.n, {
                  className: 'van-empty__description',
                  children: c,
                }),
                Object(I.jsx)(_.n, {
                  className: 'van-empty__description',
                  children: r,
                }),
                Object(I.jsx)(_.n, {
                  className: 'van-empty__bottom',
                  children: s,
                }),
              ],
            },
          ),
        )
      }
      t.b = Empty
    },
    723: function (e, t, n) {
      var r = n(121),
        a = n(744)
      ;(e.exports = function _arrayWithoutHoles(e) {
        if (r(e)) return a(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    724: function (e, t, n) {
      var r = n(45),
        a = n(122),
        c = n(124)
      ;(e.exports = function _iterableToArray(e) {
        if ((void 0 !== r && null != a(e)) || null != e['@@iterator'])
          return c(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    725: function (e, t) {
      ;(e.exports = function _nonIterableSpread() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    760: function (e, t, n) {},
    780: function (e, t, n) {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function classNames() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var a = typeof r
              if ('string' === a || 'number' === a) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var c = classNames.apply(null, r)
                  c && e.push(c)
                }
              } else if ('object' === a)
                if (r.toString === Object.prototype.toString)
                  for (var o in r) n.call(r, o) && r[o] && e.push(o)
                else e.push(r.toString())
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((classNames.default = classNames), (e.exports = classNames))
          : void 0 ===
              (r = function () {
                return classNames
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    827: function (e, t, n) {},
    911: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return je
        })
      var r = n(39),
        a = n(40),
        c = n(175),
        o = n(66),
        i = n(65),
        s = n(91),
        l = n(64),
        u = n.n(l),
        d = n(578),
        f = n(579),
        b = (n(576), n(587), n(760), n(827), n(116)),
        p = n.n(b),
        j = n(55),
        x = n.n(j),
        v = n(24),
        m = n.n(v),
        h = n(571),
        y = n.n(h),
        O = n(570),
        g = n.n(O),
        _ = n(173),
        S = n.n(_),
        N = n(705),
        w = n.n(N),
        I = n(572),
        k = n.n(I),
        C = n(591),
        z = n.n(C),
        E = n(577),
        K = n.n(E),
        A = n(119),
        T = n.n(A),
        D = n(21),
        M = n.n(D),
        L = n(38),
        R = n.n(L),
        q = n(28),
        F = n.n(q),
        B = n(32),
        P = n.n(B),
        U = n(10),
        V = n.n(U),
        H = n(27),
        J = n.n(H),
        W = n(148),
        Y = n.n(W),
        G = n(212),
        Q = n.n(G),
        X = n(90),
        Z = n(780),
        $ = n.n(Z),
        ee = Object.prototype.hasOwnProperty
      function find(e, t, n) {
        for (n of e.keys()) if (dequal(n, t)) return n
      }
      function dequal(e, t) {
        var n, r, a
        if (e === t) return !0
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime()
          if (n === RegExp) return e.toString() === t.toString()
          if (n === Array) {
            if ((r = e.length) === t.length)
              for (; r-- && dequal(e[r], t[r]); );
            return -1 === r
          }
          if (n === Set) {
            if (e.size !== t.size) return !1
            for (r of e) {
              if ((a = r) && 'object' == typeof a && !(a = find(t, a)))
                return !1
              if (!t.has(a)) return !1
            }
            return !0
          }
          if (n === Map) {
            if (e.size !== t.size) return !1
            for (r of e) {
              if ((a = r[0]) && 'object' == typeof a && !(a = find(t, a)))
                return !1
              if (!dequal(r[1], t.get(a))) return !1
            }
            return !0
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t))
          else if (n === DataView) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e.getInt8(r) === t.getInt8(r); );
            return -1 === r
          }
          if (ArrayBuffer.isView(e)) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e[r] === t[r]; );
            return -1 === r
          }
          if (!n || 'object' == typeof e) {
            for (n in ((r = 0), e)) {
              if (ee.call(e, n) && ++r && !ee.call(t, n)) return !1
              if (!(n in t) || !dequal(e[n], t[n])) return !1
            }
            return Object.keys(t).length === r
          }
        }
        return e != e && t != t
      }
      function useDeepCompareMemoize(e) {
        var t = l.useRef(e),
          n = l.useRef(0)
        return (
          dequal(e, t.current) || ((t.current = e), (n.current += 1)),
          l.useMemo(
            function () {
              return t.current
            },
            [n.current],
          )
        )
      }
      var te = n(568),
        ne = n(586),
        re = n(719),
        ae = n(115)
      function ownKeys(e, t) {
        var n = m()(e)
        if (y.a) {
          var r = y()(e)
          t &&
            (r = P()(r).call(r, function (t) {
              return g()(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            J()((n = ownKeys(Object(r), !0))).call(n, function (t) {
              k()(e, t, r[t])
            })
          else if (S.a) p()(e, S()(r))
          else {
            var a
            J()((a = ownKeys(Object(r)))).call(a, function (t) {
              x()(e, t, g()(r, t))
            })
          }
        }
        return e
      }
      var ce = { padding: '8px' },
        oe = { left: 'flex-start', center: 'center', right: 'flex-end' },
        ie = function Table(e) {
          var t,
            n = e.columns,
            r = void 0 === n ? [] : n,
            a = e.dataSource,
            c = void 0 === a ? [] : a,
            o = e.rowKey,
            i = void 0 === o ? '' : o,
            s = e.loading,
            u = void 0 !== s && s,
            d = e.className,
            f = void 0 === d ? '' : d,
            b = e.style,
            p = void 0 === b ? {} : b,
            j = e.titleClassName,
            x = void 0 === j ? '' : j,
            v = e.titleStyle,
            m = void 0 === v ? {} : v,
            h = e.rowClassName,
            y = void 0 === h ? '' : h,
            O = e.rowStyle,
            g = void 0 === O ? {} : O,
            _ = e.colStyle,
            S = void 0 === _ ? {} : _,
            N = e.colClassName,
            I = void 0 === N ? '' : N,
            C = e.sortChange,
            E = void 0 === C ? function () {} : C,
            A = e.scroll,
            D = void 0 === A ? {} : A,
            L = e.placeholder,
            q = void 0 === L ? '--' : L,
            B = Object(l.useState)(!1),
            U = K()(B, 2),
            H = U[0],
            W = U[1],
            G = Object(l.useState)(c),
            X = K()(G, 2),
            Z = X[0],
            ee = X[1],
            ce = Object(l.useState)(r),
            oe = K()(ce, 2),
            ie = oe[0],
            se = oe[1],
            fe = Object(l.useState)(!0),
            be = K()(fe, 2),
            pe = be[0],
            je = be[1]
          Object(l.useEffect)(
            function () {
              ee(c)
            },
            [c],
          ),
            Object(l.useEffect)(
              function () {
                T()(r).call(r, function (e) {
                  var t
                  return !M()((t = ['number', 'undefined'])).call(
                    t,
                    z()(e.width),
                  )
                }) &&
                  (console.error(
                    '(antmjs/vantui)[table]: columns配置项的width应该设置为number ',
                  ),
                  W(!0))
              },
              [ie],
            ),
            (function useDeepCompareEffect(e, t) {
              return l.useEffect(e, useDeepCompareMemoize(t))
            })(
              function () {
                se(r)
              },
              [r],
            )
          var xe = Object(l.useCallback)(
              function (e, t) {
                if (R()(e)) {
                  var n = ['descend', 'ascend', void 0]
                  E(
                    _objectSpread(
                      _objectSpread({}, e),
                      {},
                      {
                        sortOrder:
                          n[(F()(n).call(n, e.sortOrder) + 1) % n.length],
                      },
                    ),
                  )
                  var r = w()(ie),
                    a = P()(r).call(r, function (e) {
                      return (
                        'ascend' === e.sortOrder || 'descend' === e.sortOrder
                      )
                    }),
                    c = F()(n).call(n, r[t].sortOrder)
                  ;(r[t].sortOrder = n[(c + 1) % n.length]),
                    V()(a).call(a, function (e) {
                      J()(r).call(r, function (n, r) {
                        n.dataIndex === e.dataIndex &&
                          r !== t &&
                          (n.sortOrder = void 0)
                      })
                    }),
                    se(r)
                }
              },
              [ie, E],
            ),
            ve = Object(l.useCallback)(
              function (e, t) {
                var n
                return (
                  (n =
                    'left' === e
                      ? Y()(ie).call(
                          ie,
                          function (e, n, r) {
                            return r + 1 <= t ? e + (n.width || 100) : e
                          },
                          0,
                        )
                      : Q()(ie).call(
                          ie,
                          function (e, n, r) {
                            return r - 1 >= t ? e + (n.width || 100) : e
                          },
                          0,
                        )),
                  le(n)
                )
              },
              [ie],
            ),
            me = Object(l.useMemo)(
              function () {
                return Y()(ie).call(
                  ie,
                  function (e, t) {
                    return e + (t.width || 100)
                  },
                  0,
                )
              },
              [ie],
            )
          return H
            ? null
            : Object(ae.jsxs)(te.n, {
                className: $()(['van-table', f]),
                style: _objectSpread({ width: me }, p),
                children: [
                  u &&
                    Object(ae.jsx)(ne.a, {
                      type: 'spinner',
                      className: 'van-table-loading',
                    }),
                  Object(ae.jsxs)(te.j, {
                    className: 'van-table_table',
                    'scroll-x': 0 !== Z.length && D.x,
                    'scroll-y': D.y,
                    style: { maxWidth: le(D.x), maxHeight: le(D.y) },
                    children: [
                      Object(ae.jsx)(te.n, {
                        className: $()(
                          ((t = {}),
                          k()(t, 'van-table_head', !0),
                          k()(t, 'van-table_scroll', D.y),
                          t),
                        ),
                        children:
                          0 === ie.length
                            ? Object(ae.jsx)(re.a, {
                                description: u ? '加载中...' : '暂无数据',
                              })
                            : V()(ie).call(ie, function (e, t) {
                                return Object(ae.jsx)(
                                  de,
                                  {
                                    column: e,
                                    index: t,
                                    handleClickTitle: xe,
                                    titleClassName: x,
                                    getFixedDistance: ve,
                                    titleStyle: m,
                                  },
                                  e.key || e.dataIndex,
                                )
                              }),
                      }),
                      Object(ae.jsx)(te.n, {
                        className: 'van-table_body',
                        children:
                          Z.length > 0
                            ? V()(Z).call(Z, function (e, t) {
                                return Object(ae.jsx)(
                                  ue,
                                  {
                                    dataSourceItem: e,
                                    index: t,
                                    placeholder: q,
                                    rowClassName: y,
                                    colClassName: I,
                                    rowStyle: g,
                                    colStyle: S,
                                    rowKey: i,
                                    columns: ie,
                                    setExpansion: je,
                                    expansion: pe,
                                    getFixedDistance: ve,
                                  },
                                  e[i],
                                )
                              })
                            : Object(ae.jsx)(re.a, {
                                description: u ? '加载中...' : '暂无数据',
                              }),
                      }),
                    ],
                  }),
                ],
              })
        },
        se = Object(l.memo)(ie),
        le = function getSize(e) {
          return 'number' == typeof e ? X.a.pxTransform(2 * e) : String(e)
        },
        ue = function Row(e) {
          var t,
            n = e.dataSourceItem,
            r = e.index,
            a = e.placeholder,
            c = e.rowClassName,
            o = e.rowStyle,
            i = e.colStyle,
            s = e.colClassName,
            l = e.rowKey,
            u = e.columns,
            d = e.setExpansion,
            f = e.expansion,
            b = e.getFixedDistance
          return Object(ae.jsx)(
            te.n,
            {
              className: $()(
                ((t = {}), k()(t, 'van-table_row', !0), k()(t, c, !0), t),
              ),
              style: o,
              children: V()(u).call(u, function (e, t) {
                var c,
                  o,
                  l = n[e.dataIndex],
                  u = !!e.expandable
                if (e.render) {
                  var p = e.render(l, n, r)
                  o =
                    'object' !== z()(p)
                      ? Object(ae.jsx)(te.k, { children: p })
                      : p
                } else o = Object(ae.jsx)(te.k, { children: l ? String(l) : a })
                return Object(ae.jsx)(
                  te.n,
                  {
                    onClick: u && d.bind(void 0, !f),
                    className: $()(
                      ((c = {}),
                      k()(c, s, !0),
                      k()(c, 'van-table_col', !0),
                      k()(c, 'van-table_fixed', e.fixed),
                      k()(c, 'van-table_expansion', f),
                      k()(c, e.className, !0),
                      c),
                    ),
                    style: _objectSpread(
                      _objectSpread(
                        _objectSpread(
                          k()(
                            {
                              textAlign: e.align || 'left',
                              width: le(e.width || 100),
                            },
                            e.fixed,
                            e.fixed && b(e.fixed, t),
                          ),
                          e.style,
                        ),
                        i,
                      ),
                      ce,
                    ),
                    children: o,
                  },
                  e.key || e.dataIndex,
                )
              }),
            },
            n[l],
          )
        },
        de = function Title(e) {
          var t,
            n,
            r,
            a,
            c = e.column,
            o = e.index,
            i = e.handleClickTitle,
            s = e.titleClassName,
            l = e.getFixedDistance,
            u = e.titleStyle
          return Object(ae.jsxs)(
            te.n,
            {
              onClick: i.bind(void 0, c, o),
              className: $()(
                ((t = {}),
                k()(t, 'van-table_title', !0),
                k()(t, 'van-table_fixed', c.fixed),
                k()(t, c.titleClassName || '', !0),
                k()(t, s, !0),
                t),
              ),
              style: _objectSpread(
                _objectSpread(
                  _objectSpread(
                    ((n = {}),
                    k()(n, c.fixed, c.fixed && l(c.fixed, o)),
                    k()(n, 'width', le(c.width || 100)),
                    n),
                    c.titleStyle,
                  ),
                  u,
                ),
                {},
                { justifyContent: oe[c.align || 'left'] },
                ce,
              ),
              children: [
                Object(ae.jsx)(te.k, { children: c.title }),
                R()(c) &&
                  Object(ae.jsxs)(te.n, {
                    className: 'van-table_sortBtn',
                    children: [
                      Object(ae.jsx)(te.n, {
                        className: $()(
                          ((r = {}),
                          k()(r, 'van-table_btn', !0),
                          k()(r, 'van-table_ascend', !0),
                          k()(r, 'van-table_active', 'ascend' === c.sortOrder),
                          r),
                        ),
                      }),
                      Object(ae.jsx)(te.n, {
                        className: $()(
                          ((a = {}),
                          k()(a, 'van-table_btn', !0),
                          k()(a, 'van-table_descend', !0),
                          k()(a, 'van-table_active', 'descend' === c.sortOrder),
                          a),
                        ),
                      }),
                    ],
                  }),
              ],
            },
            c.key || c.dataIndex,
          )
        },
        fe = n(612),
        be = n(174),
        pe = [
          {
            title: '姓名',
            dataIndex: 'name',
            fixed: 'left',
            render: function render(e) {
              return Object(ae.jsx)(te.n, {
                style: { color: '#2196F3' },
                children: e,
              })
            },
          },
          { title: '年龄', dataIndex: 'age', align: 'center', sort: !0 },
          { title: '账户', dataIndex: 'account', sort: !0 },
          { title: '住址', dataIndex: 'address' },
          { title: '爱好', dataIndex: 'hobby' },
        ]
      function Demo() {
        var e = u.a.useState({ dataSource: [], loading: !1 }),
          t = Object(be.a)(e, 2),
          n = t[0],
          r = t[1],
          a = function setState(e) {
            r(Object(fe.a)(Object(fe.a)({}, n), e))
          }
        u.a.useEffect(function () {
          a({ loading: !0 }),
            setTimeout(function () {
              a({
                loading: !1,
                dataSource: [
                  {
                    key: '1',
                    name: '胡彦斌',
                    age: 37,
                    account: 2e4,
                    address: '西湖区湖底公园1号',
                    hobby: '唱歌跳舞唱歌跳舞',
                  },
                  {
                    key: '2',
                    name: '吴亦凡',
                    age: 32,
                    account: 5e4,
                    address: '朝阳区派出所',
                    hobby: '嗨嗨啊嗨嗨嗨啊嗨',
                  },
                  {
                    key: '36',
                    name: '王宝强',
                    age: 31,
                    account: 4e4,
                    address: '嘟嘟嘟嘟一号',
                    width: 200,
                    hobby: '休息♨️休息♨️休息♨️休息♨️休息♨️',
                  },
                ],
              })
            }, 2e3)
        }, [])
        return Object(ae.jsx)(se, {
          columns: pe,
          dataSource: n.dataSource,
          sortChange: function sortAction(e) {
            var t = e.sortOrder,
              r = e.dataIndex,
              c = n.dataSource
            'descend' !== t
              ? R()(c).call(c, function (e, t) {
                  return e[r] - t[r]
                })
              : R()(c).call(c, function (e, t) {
                  return t[r] - e[r]
                }),
              a({ dataSource: c })
          },
          loading: n.loading,
        })
      }
      var je = (function (e) {
        Object(o.a)(Index, e)
        var t = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(r.a)(this, Index),
            (e = t.call(this)),
            Object(s.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(ae.jsx)(d.a, {
                  title: 'Table 表格',
                  className: 'pages-table-index',
                  children: Object(ae.jsx)(f.a, {
                    title: '基础用法',
                    padding: !0,
                    children: Object(ae.jsx)(Demo, {}),
                  }),
                })
              },
            },
          ]),
          Index
        )
      })(l.Component)
    },
  },
])