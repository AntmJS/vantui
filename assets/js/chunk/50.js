;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    575: function (e, n, t) {
      'use strict'
      t.d(n, 'e', function () {
        return isPlainObject
      }),
        t.d(n, 'f', function () {
          return isPromise
        }),
        t.d(n, 'b', function () {
          return isDef
        }),
        t.d(n, 'd', function () {
          return isObj
        }),
        t.d(n, 'a', function () {
          return isBoolean
        }),
        t.d(n, 'c', function () {
          return isImageUrl
        }),
        t.d(n, 'g', function () {
          return isVideoUrl
        })
      var c = t(586),
        r = t.n(c)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === r()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = r()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var a = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return a.test(e)
      }
      function isVideoUrl(e) {
        return i.test(e)
      }
    },
    582: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var c = t(572),
        r = t.n(c),
        a = t(576),
        i = t.n(a),
        o = t(573),
        l = t.n(o),
        u = t(592),
        s = t.n(u),
        d = t(10),
        f = t.n(d),
        b = t(24),
        j = t.n(b),
        v = t(571),
        p = t.n(v),
        h = t(32),
        O = t.n(h),
        x = t(570),
        y = t.n(x),
        g = t(27),
        m = t.n(g),
        _ = t(173),
        S = t.n(_),
        C = t(116),
        k = t.n(C),
        w = t(55),
        N = t.n(w),
        z = t(568),
        I = t(64),
        V = t(569),
        P = t(578)
      function textStyle(e) {
        return Object(V.c)({ 'font-size': Object(P.a)(e.textSize) })
      }
      var E = t(115),
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
      function ownKeys(e, n) {
        var t = j()(e)
        if (p.a) {
          var c = p()(e)
          n &&
            (c = O()(c).call(c, function (n) {
              return y()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            a = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? m()((t = ownKeys(Object(a), !0))).call(t, function (n) {
                r()(e, n, a[n])
              })
            : S.a
            ? k()(e, S()(a))
            : m()((c = ownKeys(Object(a)))).call(c, function (n) {
                N()(e, n, y()(a, n))
              })
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          c = e.type,
          r = void 0 === c ? 'circular' : c,
          a = e.color,
          o = e.size,
          u = e.textSize,
          d = e.className,
          b = e.children,
          j = e.style,
          v = l()(e, T),
          p = Object(I.useState)(s()({ length: 12 })),
          h = i()(p, 1)[0]
        return Object(E.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + V.b('loading', { vertical: t }) + ' ' + d,
                style: V.c([j]),
              },
              v,
            ),
            {},
            {
              children: [
                Object(E.jsx)(z.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((n = { color: a, size: o }),
                    Object(V.c)({
                      color: n.color,
                      width: Object(P.a)(n.size),
                      height: Object(P.a)(n.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(E.jsx)(z.a, {
                      children: f()(h).call(h, function (e, n) {
                        return Object(E.jsx)(
                          z.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(E.jsx)(z.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: u }),
                  children: b,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    583: function (e, n, t) {},
    584: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var c = t(24),
        r = t.n(c),
        a = t(571),
        i = t.n(a),
        o = t(32),
        l = t.n(o),
        u = t(570),
        s = t.n(u),
        d = t(27),
        f = t.n(d),
        b = t(173),
        j = t.n(b),
        v = t(116),
        p = t.n(v),
        h = t(55),
        O = t.n(h),
        x = t(572),
        y = t.n(x),
        g = t(573),
        m = t.n(g),
        _ = t(90),
        S = t(568),
        C = t(569),
        k = t(577),
        w = t(582),
        N = t(28),
        z = t.n(N),
        I = t(579)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== z()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(I.a)([t])
        )
      }
      var V = t(115),
        P = [
          'type',
          'size',
          'block',
          'round',
          'plain',
          'square',
          'loading',
          'disabled',
          'hairline',
          'color',
          'loadingSize',
          'loadingType',
          'loadingText',
          'icon',
          'classPrefix',
          'onClick',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = r()(e)
        if (i.a) {
          var c = i()(e)
          n &&
            (c = l()(c).call(c, function (n) {
              return s()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? f()((t = ownKeys(Object(r), !0))).call(t, function (n) {
                y()(e, n, r[n])
              })
            : j.a
            ? p()(e, j()(r))
            : f()((c = ownKeys(Object(r)))).call(c, function (n) {
                O()(e, n, s()(r, n))
              })
        }
        return e
      }
      var E = !1,
        T = 10
      if (!E)
        var K = setInterval(function () {
          if (--T > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                c = t.innerHTML
              if (c && /^taro-button-core{/.test(c)) {
                t.remove(), (E = !0), K && clearInterval(K)
                break
              }
            }
          else K && clearInterval(K)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          c = void 0 === t ? 'default' : t,
          r = e.size,
          a = void 0 === r ? 'normal' : r,
          i = e.block,
          o = e.round,
          l = e.plain,
          u = e.square,
          s = e.loading,
          d = e.disabled,
          f = e.hairline,
          b = e.color,
          j = e.loadingSize,
          v = void 0 === j ? _.a.pxTransform(40) : j,
          p = e.loadingType,
          h = void 0 === p ? 'circular' : p,
          O = e.loadingText,
          x = e.icon,
          y = e.classPrefix,
          g = void 0 === y ? 'van-icon' : y,
          N = e.onClick,
          z = e.children,
          I = e.style,
          E = e.className,
          T = m()(e, P)
        return Object(V.jsx)(
          S.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  C.b('button', [
                    c,
                    a,
                    {
                      block: i,
                      round: o,
                      plain: l,
                      square: u,
                      loading: s,
                      disabled: d,
                      hairline: f,
                      unclickable: d || s,
                    },
                  ]) +
                  ' ' +
                  (f ? 'van-hairline--surround' : '') +
                  ' '.concat(E || ''),
                hoverClass: 'van-button--active hover-class',
                style: C.c([rootStyle({ plain: l, color: b }), I]),
                onClick: d || s ? void 0 : N,
              },
              T,
            ),
            {},
            {
              children: s
                ? Object(V.jsxs)(S.n, {
                    style: 'display: flex',
                    children: [
                      Object(V.jsx)(w.a, {
                        className: 'loading-class',
                        size: v,
                        type: h,
                        color:
                          ((n = { type: c, color: b, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      O &&
                        Object(V.jsx)(S.n, {
                          className: 'van-button__loading-text',
                          children: O,
                        }),
                    ],
                  })
                : Object(V.jsxs)(S.a, {
                    children: [
                      x &&
                        Object(V.jsx)(k.a, {
                          size: '1.2em',
                          name: x,
                          classPrefix: g,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(V.jsx)(S.n, {
                        className: 'van-button__text',
                        children: z,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    591: function (e, n, t) {
      'use strict'
      t(574), t(583), t(580), t(581), t(595)
    },
    595: function (e, n, t) {},
    781: function (e, n, t) {
      'use strict'
      ;(function (e) {
        var c = t(571),
          r = t.n(c),
          a = t(32),
          i = t.n(a),
          o = t(570),
          l = t.n(o),
          u = t(27),
          s = t.n(u),
          d = t(173),
          f = t.n(d),
          b = t(116),
          j = t.n(b),
          v = t(55),
          p = t.n(v),
          h = t(572),
          O = t.n(h),
          x = t(573),
          y = t.n(x),
          g = t(576),
          m = t.n(g),
          _ = t(762),
          S = t.n(_),
          C = t(5),
          k = t.n(C),
          w = t(10),
          N = t.n(w),
          z = t(38),
          I = t.n(z),
          V = t(24),
          P = t.n(V),
          E = t(181),
          T = t.n(E),
          K = t(870),
          L = t(64),
          B = t(568),
          D = t(4),
          M = t(575),
          R = t(115),
          F = [
            'text',
            'lineCap',
            'value',
            'speed',
            'size',
            'fill',
            'layerColor',
            'color',
            'type',
            'strokeWidth',
            'clockwise',
            'style',
            'className',
            'children',
          ]
        function ownKeys(e, n) {
          var t = P()(e)
          if (r.a) {
            var c = r()(e)
            n &&
              (c = i()(c).call(c, function (n) {
                return l()(e, n).enumerable
              })),
              t.push.apply(t, c)
          }
          return t
        }
        function _objectSpread(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t,
              c,
              r = null != arguments[n] ? arguments[n] : {}
            n % 2
              ? s()((t = ownKeys(Object(r), !0))).call(t, function (n) {
                  O()(e, n, r[n])
                })
              : f.a
              ? j()(e, f()(r))
              : s()((c = ownKeys(Object(r)))).call(c, function (n) {
                  p()(e, n, l()(r, n))
                })
          }
          return e
        }
        var q = 2 * Math.PI,
          A = -Math.PI / 2,
          U = 0
        n.a = function Circle(n) {
          var t = Object(L.useState)({
              ready: !1,
              hoverColor: '',
              unitag: 'van-circle',
            }),
            c = m()(t, 2),
            r = c[0],
            a = c[1],
            i = Object(L.useRef)({
              inited: !1,
              currentValue: void 0,
              interval: void 0,
            }),
            o = n.text,
            l = n.lineCap,
            u = void 0 === l ? 'round' : l,
            s = n.value,
            d = void 0 === s ? 0 : s,
            f = n.speed,
            b = void 0 === f ? 50 : f,
            j = n.size,
            v = void 0 === j ? 100 : j,
            p = S()(n),
            h = n.layerColor,
            O = void 0 === h ? '#ffffff' : h,
            x = n.color,
            g = void 0 === x ? '#1989fa' : x,
            _ = (n.type, n.strokeWidth),
            C = void 0 === _ ? 4 : _,
            w = n.clockwise,
            z = void 0 === w || w,
            V = n.style,
            E = n.className,
            W = n.children,
            H = y()(n, F)
          Object(L.useEffect)(function () {
            a(function (e) {
              return _objectSpread(
                _objectSpread({}, e),
                {},
                { unitag: 'van-circle_uni_'.concat(U++) },
              )
            })
          }, []),
            Object(L.useEffect)(function () {
              a(function (e) {
                return _objectSpread(_objectSpread({}, e), {}, { ready: !0 })
              })
            }, []),
            Object(L.useEffect)(function () {
              'react' === e.env.LIBRARY_ENV &&
                setTimeout(function () {
                  a(function (e) {
                    return _objectSpread(
                      _objectSpread({}, e),
                      {},
                      { ready: !0 },
                    )
                  })
                }, 100)
            }, [])
          var J = Object(L.useCallback)(
              function () {
                'react' === e.env.LIBRARY_ENV &&
                  (D.a.page = { path: 'page-'.concat(r.unitag) })
                var n = null
                try {
                  n = Object(K.a)(r.unitag)
                } catch (e) {}
                return k.a.resolve(n)
              },
              [r.unitag],
            ),
            Y = Object(L.useCallback)(
              function (e, n, t, c, r) {
                var a = v / 2,
                  i = a - C / 2
                e.setStrokeStyle(n),
                  e.setLineWidth(C),
                  e.setLineCap(u),
                  e.beginPath(),
                  e.arc(a, a, i, t, c, !z),
                  e.stroke(),
                  r && (e.setFillStyle(r), S()(e).call(e))
              },
              [z, u, v, C],
            ),
            G = Object(L.useCallback)(
              function (e) {
                Y(e, O, 0, q, p)
              },
              [p, O, Y],
            ),
            Q = Object(L.useCallback)(
              function (e, n) {
                var t = q * (n / 100),
                  c = z ? A + t : 3 * Math.PI - (A + t)
                Y(e, r.hoverColor, A, c)
              },
              [z, Y, r.hoverColor],
            ),
            X = Object(L.useCallback)(
              function (e) {
                J().then(function (n) {
                  if (n) {
                    n.clearRect(0, 0, v, v), G(n)
                    var t = (function format(e) {
                      return Math.min(Math.max(e, 0), 100)
                    })(e)
                    0 !== t && Q(n, t), n.draw()
                  }
                })
              },
              [J, Q, G, v],
            ),
            Z = function clearMockInterval() {
              i.current.interval &&
                (clearTimeout(i.current.interval), (i.current.interval = null))
            },
            $ = Object(L.useCallback)(
              function () {
                if (b <= 0 || b > 1e3) X(d)
                else {
                  Z(), (i.current.currentValue = i.current.currentValue || 0)
                  !(function run() {
                    i.current.interval = setTimeout(function () {
                      i.current.currentValue !== d
                        ? (Math.abs(i.current.currentValue - d) < 1
                            ? (i.current.currentValue = d)
                            : i.current.currentValue < d
                            ? (i.current.currentValue += 1)
                            : (i.current.currentValue -= 1),
                          X(i.current.currentValue),
                          run())
                        : Z()
                    }, 1e3 / b)
                  })()
                }
              },
              [X, b, d],
            )
          return (
            Object(L.useEffect)(
              function () {
                r.ready && $()
              },
              [$, r.ready, d],
            ),
            Object(L.useEffect)(
              function () {
                r.ready && X(i.current.currentValue)
              },
              [r.ready, v],
            ),
            Object(L.useEffect)(
              function () {
                r.ready &&
                  (function setHoverColor() {
                    if (Object(M.d)(g)) {
                      var e = g
                      return J().then(function (n) {
                        if (n) {
                          var t,
                            c,
                            r = n.createLinearGradient(v, 0, 0, 0)
                          N()(
                            (t = I()((c = P()(g))).call(c, function (e, n) {
                              return T()(e) - T()(n)
                            })),
                          ).call(t, function (n) {
                            return r.addColorStop(T()(n) / 100, e[n])
                          }),
                            a(function (e) {
                              return _objectSpread(
                                _objectSpread({}, e),
                                {},
                                { hoverColor: r },
                              )
                            })
                        }
                      })
                    }
                    return (
                      a(function (e) {
                        return _objectSpread(
                          _objectSpread({}, e),
                          {},
                          { hoverColor: g },
                        )
                      }),
                      k.a.resolve()
                    )
                  })().then(function () {
                    X(i.current.currentValue)
                  })
              },
              [r.ready, g],
            ),
            Object(L.useEffect)(
              function () {
                return function () {
                  Z()
                }
              },
              [r.ready],
            ),
            Object(R.jsxs)(
              B.n,
              _objectSpread(
                _objectSpread(
                  {
                    id: 'page-'.concat(r.unitag),
                    className: 'van-circle '.concat(E),
                    style: V,
                  },
                  H,
                ),
                {},
                {
                  children: [
                    Object(R.jsx)(B.c, {
                      width: v,
                      height: v,
                      nativeProps: { width: v, height: v },
                      className: 'van-circle__canvas '.concat(r.unitag),
                      style:
                        'width: ' +
                        ''.concat(v, 'px') +
                        ';height:' +
                        ''.concat(v, 'px'),
                      id: r.unitag,
                      canvasId: r.unitag,
                    }),
                    o
                      ? Object(R.jsx)(B.d, {
                          className: 'van-circle__text',
                          children: o,
                        })
                      : Object(R.jsx)(B.n, {
                          className: 'van-circle__text',
                          children: W,
                        }),
                  ],
                },
              ),
            )
          )
        }
      }.call(this, t(244)))
    },
    828: function (e, n, t) {},
    870: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return a
      })
      var c = t(16),
        r = t(763),
        a = function createCanvasContext(e, n) {
          var t = Object(c.b)(n),
            a =
              null == t
                ? void 0
                : t.querySelector('canvas[canvas-id="'.concat(e, '"]')),
            i = null == a ? void 0 : a.getContext('2d'),
            o = new r.a(a, i)
          return i ? ((o.canvas = a), (o.ctx = i), o) : o
        }
    },
    922: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return O
        })
      var c = t(39),
        r = t(40),
        a = t(175),
        i = t(66),
        o = t(65),
        l = t(91),
        u = t(64),
        s = t.n(u),
        d = t(587),
        f = t(588),
        b = (t(574), t(828), t(781)),
        j = t(115)
      function Demo() {
        return Object(j.jsx)(b.a, { value: 30, text: 'text' })
      }
      t(591)
      var v = t(584),
        p = t(174),
        h = t(568)
      function demo2_Demo() {
        var e = s.a.useState(50),
          n = Object(p.a)(e, 2),
          t = n[0],
          c = n[1]
        return Object(j.jsxs)(h.n, {
          children: [
            Object(j.jsx)(b.a, {
              value: t,
              strokeWidth: '6',
              text: '宽度定制',
            }),
            Object(j.jsx)(b.a, {
              value: t,
              layerColor: '#eeeeee',
              color: '#ee0a24',
              text: '颜色定制',
            }),
            Object(j.jsx)(b.a, {
              type: '2d',
              value: t,
              wait: !0,
              solve: !0,
              color: { '0%': '#ffd01e', '100%': '#ee0a24' },
              text: '渐变色',
            }),
            Object(j.jsx)(b.a, { value: t, size: '120', text: '大小定制' }),
            Object(j.jsx)(v.b, {
              onClick: function onClick() {
                return c(t + 10)
              },
              children: '增加',
            }),
          ],
        })
      }
      function demo3_Demo() {
        var e = s.a.useState(50),
          n = Object(p.a)(e, 2),
          t = n[0],
          c = n[1]
        return Object(j.jsxs)(j.Fragment, {
          children: [
            Object(j.jsx)(b.a, {
              value: t,
              color: '#07c160',
              clockwise: !1,
              text: '逆时针',
            }),
            Object(j.jsx)(v.b, {
              onClick: function onClick() {
                return c(t + 10)
              },
              children: '增加',
            }),
          ],
        })
      }
      var O = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(a.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(j.jsxs)(d.a, {
                  title: 'Circle 环形进度条',
                  className: 'pages-circle-index',
                  children: [
                    Object(j.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(j.jsx)(Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '样式定制',
                      padding: !0,
                      children: Object(j.jsx)(demo2_Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '逆时针方向',
                      padding: !0,
                      children: Object(j.jsx)(demo3_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(u.Component)
    },
  },
])
