;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    575: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return isPlainObject
      }),
        n.d(t, 'f', function () {
          return isPromise
        }),
        n.d(t, 'b', function () {
          return isDef
        }),
        n.d(t, 'd', function () {
          return isObj
        }),
        n.d(t, 'a', function () {
          return isBoolean
        }),
        n.d(t, 'c', function () {
          return isImageUrl
        }),
        n.d(t, 'g', function () {
          return isVideoUrl
        })
      var a = n(591),
        r = n.n(a)
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
        var t = r()(e)
        return null !== e && ('object' === t || 'function' === t)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var c = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return c.test(e)
      }
      function isVideoUrl(e) {
        return i.test(e)
      }
    },
    578: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return Page
        })
        n(590)
        var a = n(574),
          r = n(568),
          c = n(90),
          i = n(737),
          u = n(77),
          o = n(64),
          l = (n(581), n(115))
        function Page(t) {
          var n = t.title,
            s = t.className,
            f = void 0 === s ? '' : s,
            m = t.children,
            d = c.a.useRouter().path
          return (
            Object(o.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [d],
            ),
            c.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: d }
            }),
            Object(l.jsxs)(r.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(l.jsxs)(r.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(a.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(u.d)()
                      },
                    }),
                    Object(l.jsxs)(r.n, {
                      className: 'demo-nav__title',
                      children: [n, ' '],
                    }),
                  ],
                }),
                m,
              ],
            })
          )
        }
      }.call(this, n(236)))
    },
    579: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n(39),
        r = n(40),
        c = n(66),
        i = n(65),
        u = n(568),
        o = n(64),
        l = (n(582), n(115)),
        s = (function (e) {
          Object(c.a)(Index, e)
          var t = Object(i.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), t.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    n = e.title,
                    a = e.card
                  return Object(l.jsxs)(u.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      n &&
                        Object(l.jsx)(u.n, {
                          className: 'demo-block__title',
                          children: n,
                        }),
                      a
                        ? Object(l.jsx)(u.n, {
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
        })(o.Component)
    },
    581: function (e, t, n) {},
    582: function (e, t, n) {},
    586: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Loading
      })
      var a = n(116),
        r = n.n(a),
        c = n(55),
        i = n.n(c),
        u = n(572),
        o = n.n(u),
        l = n(577),
        s = n.n(l),
        f = n(573),
        m = n.n(f),
        d = n(595),
        b = n.n(d),
        v = n(10),
        j = n.n(v),
        p = n(24),
        g = n.n(p),
        x = n(571),
        h = n.n(x),
        O = n(32),
        y = n.n(O),
        C = n(570),
        k = n.n(C),
        _ = n(27),
        D = n.n(_),
        I = n(173),
        w = n.n(I),
        T = n(568),
        S = n(64),
        N = n(569),
        H = n(580)
      function textStyle(e) {
        return Object(N.c)({ 'font-size': Object(H.a)(e.textSize) })
      }
      var V = n(115),
        M = [
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
        var n = g()(e)
        if (h.a) {
          var a = h()(e)
          t &&
            (a = y()(a).call(a, function (t) {
              return k()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            D()((n = ownKeys(Object(a), !0))).call(n, function (t) {
              o()(e, t, a[t])
            })
          else if (w.a) r()(e, w()(a))
          else {
            var c
            D()((c = ownKeys(Object(a)))).call(c, function (t) {
              i()(e, t, k()(a, t))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var t,
          n = e.vertical,
          a = e.type,
          r = void 0 === a ? 'circular' : a,
          c = e.color,
          i = e.size,
          u = e.textSize,
          o = e.className,
          l = e.children,
          f = e.style,
          d = m()(e, M),
          v = Object(S.useState)(b()({ length: 12 })),
          p = s()(v, 1)[0]
        return Object(V.jsxs)(
          T.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + N.b('loading', { vertical: n }) + ' ' + o,
                style: N.c([f]),
              },
              d,
            ),
            {},
            {
              children: [
                Object(V.jsx)(T.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((t = { color: c, size: i }),
                    Object(N.c)({
                      color: t.color,
                      width: Object(H.a)(t.size),
                      height: Object(H.a)(t.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(V.jsx)(T.a, {
                      children: j()(p).call(p, function (e, t) {
                        return Object(V.jsx)(
                          T.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(t),
                        )
                      }),
                    }),
                }),
                Object(V.jsx)(T.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: u }),
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
    593: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return range
      }),
        n.d(t, 'd', function () {
          return getSystemInfoSync
        }),
        n.d(t, 'a', function () {
          return addUnit
        }),
        n.d(t, 'h', function () {
          return requestAnimationFrame
        }),
        n.d(t, 'f', function () {
          return pickExclude
        }),
        n.d(t, 'c', function () {
          return getRect
        }),
        n.d(t, 'b', function () {
          return getAllRect
        }),
        n.d(t, 'i', function () {
          return toPromise
        })
      var a,
        r = n(148),
        c = n.n(r),
        i = n(24),
        u = n.n(i),
        o = n(21),
        l = n.n(o),
        s = n(5),
        f = n.n(s),
        m = (n(567), n(863)),
        d = (n(866), n(90)),
        b = n(790),
        v = (n(77), n(575))
      n(596)
      function range(e, t, n) {
        return Math.min(Math.max(e, t), n)
      }
      function getSystemInfoSync() {
        return null == a && (a = Object(m.a)()), a
      }
      function addUnit(e) {
        if (Object(v.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? d.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(b.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, t) {
        var n
        return Object(v.e)(e)
          ? c()((n = u()(e))).call(
              n,
              function (n, a) {
                return l()(t).call(t, a) || (n[a] = e[a]), n
              },
              {},
            )
          : {}
      }
      function getRect(e, t) {
        return new f.a(function (n) {
          var a = Object(b.a)()
          e && (a = a.in(e)),
            a
              .select(t)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return n(e[0])
              })
        })
      }
      function getAllRect(e, t) {
        return new f.a(function (n) {
          var a = Object(b.a)()
          e && (a = a.in(e)),
            a
              .selectAll(t)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return n(e[0])
              })
        })
      }
      function toPromise(e) {
        return Object(v.f)(e) ? e : f.a.resolve(e)
      }
      n.d(t, 'e', function () {
        return v.b
      })
    },
    596: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return canIUseModel
      }),
        n.d(t, 'b', function () {
          return canIUseNextTick
        })
      var a,
        r = n(117),
        c = n.n(r),
        i = n(863),
        u = n(864)
      n(865)
      function gte(e) {
        return (
          (function compareVersion(e, t) {
            ;(e = e.split('.')), (t = t.split('.'))
            for (var n = Math.max(e.length, t.length); e.length < n; )
              e.push('0')
            for (; t.length < n; ) t.push('0')
            for (var a = 0; a < n; a++) {
              var r = c()(e[a], 10),
                i = c()(t[a], 10)
              if (r > i) return 1
              if (r < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == a && (a = Object(i.a)()), a
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(u.a)('nextTick')
      }
    },
    612: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _objectSpread2
      })
      var a = n(610),
        r = n.n(a),
        c = n(608),
        i = n.n(c),
        u = n(631),
        o = n.n(u),
        l = n(635),
        s = n.n(l),
        f = n(624),
        m = n.n(f),
        d = n(639),
        b = n.n(d),
        v = n(643),
        j = n.n(v),
        p = n(67),
        g = n.n(p),
        x = n(91)
      function ownKeys(e, t) {
        var n = r()(e)
        if (i.a) {
          var a = i()(e)
          t &&
            (a = o()(a).call(a, function (t) {
              return s()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a,
            r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m()((n = ownKeys(Object(r), !0))).call(n, function (t) {
                Object(x.a)(e, t, r[t])
              })
            : b.a
            ? j()(e, b()(r))
            : m()((a = ownKeys(Object(r)))).call(a, function (t) {
                g()(e, t, s()(r, t))
              })
        }
        return e
      }
    },
    631: function (e, t, n) {
      e.exports = n(632)
    },
    632: function (e, t, n) {
      e.exports = n(633)
    },
    633: function (e, t, n) {
      var a = n(634)
      e.exports = a
    },
    634: function (e, t, n) {
      var a = n(238)
      e.exports = a
    },
    635: function (e, t, n) {
      e.exports = n(636)
    },
    636: function (e, t, n) {
      e.exports = n(637)
    },
    637: function (e, t, n) {
      var a = n(638)
      e.exports = a
    },
    638: function (e, t, n) {
      var a = n(607)
      e.exports = a
    },
    639: function (e, t, n) {
      e.exports = n(640)
    },
    640: function (e, t, n) {
      e.exports = n(641)
    },
    641: function (e, t, n) {
      var a = n(642)
      e.exports = a
    },
    642: function (e, t, n) {
      var a = n(240)
      e.exports = a
    },
    643: function (e, t, n) {
      e.exports = n(644)
    },
    644: function (e, t, n) {
      e.exports = n(645)
    },
    645: function (e, t, n) {
      var a = n(646)
      e.exports = a
    },
    646: function (e, t, n) {
      var a = n(239)
      e.exports = a
    },
    672: function (e, t, n) {
      e.exports = n(729)
    },
    677: function (e, t, n) {
      'use strict'
      var a = n(116),
        r = n.n(a),
        c = n(55),
        i = n.n(c),
        u = n(572),
        o = n.n(u),
        l = n(573),
        s = n.n(l),
        f = n(672),
        m = n.n(f),
        d = n(10),
        b = n.n(d),
        v = n(5),
        j = n.n(v),
        p = n(149),
        g = n.n(p),
        x = n(24),
        h = n.n(x),
        O = n(571),
        y = n.n(O),
        C = n(32),
        k = n.n(C),
        _ = n(570),
        D = n.n(_),
        I = n(27),
        w = n.n(I),
        T = n(173),
        S = n.n(T),
        N = n(64),
        H = n(568),
        V = n(577),
        M = n.n(V),
        K = n(569),
        P = n(593),
        E = n(575),
        R = n(591),
        A = n.n(R)
      n(580)
      function optionText(e, t) {
        return (function isObj(e) {
          var t = A()(e)
          return null !== e && ('object' === t || 'function' === t)
        })(e) && null != e[t]
          ? e[t]
          : e
      }
      function wrapperStyle(e) {
        var t = e.offset + (e.itemHeight * (e.visibleItemCount - 1)) / 2
        return Object(K.c)({
          transition: 'transform ' + e.duration + 'ms',
          'line-height': e.itemHeight + 'px',
          transform: 'translate3d(0, ' + t + 'px, 0)',
        })
      }
      var B = n(115),
        F = [
          'valueKey',
          'itemHeight',
          'visibleItemCount',
          'initialOptions',
          'defaultIndex',
          'className',
          'style',
          'onChange',
          'index',
        ]
      function ownKeys(e, t) {
        var n = h()(e)
        if (y.a) {
          var a = y()(e)
          t &&
            (a = k()(a).call(a, function (t) {
              return D()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            w()((n = ownKeys(Object(a), !0))).call(n, function (t) {
              o()(e, t, a[t])
            })
          else if (S.a) r()(e, S()(a))
          else {
            var c
            w()((c = ownKeys(Object(a)))).call(c, function (t) {
              i()(e, t, D()(a, t))
            })
          }
        }
        return e
      }
      function picker_column_Index(e, t) {
        var n = e.valueKey,
          a = e.itemHeight,
          r = void 0 === a ? 48 : a,
          c = e.visibleItemCount,
          i = void 0 === c ? 5 : c,
          u = e.initialOptions,
          o = e.defaultIndex,
          l = e.className,
          f = e.style,
          m = e.onChange,
          d = e.index,
          v = s()(e, F),
          p = Object(N.useState)([]),
          g = M()(p, 2),
          x = g[0],
          h = g[1],
          O = Object(N.useState)(),
          y = M()(O, 2),
          C = y[0],
          k = y[1],
          _ = Object(N.useState)(0),
          D = M()(_, 2),
          I = D[0],
          w = D[1],
          T = Object(N.useState)(0),
          S = M()(T, 2),
          V = S[0],
          R = S[1],
          A = Object(N.useState)(0),
          z = M()(A, 2),
          Y = z[0],
          U = z[1],
          Z = Object(N.useState)(0),
          L = M()(Z, 2),
          q = L[0],
          J = L[1],
          $ = Object(N.useState)(!0),
          G = M()($, 2),
          Q = G[0],
          W = G[1],
          X = Object(N.useCallback)(function (e) {
            return Object(E.d)(e) && e.disabled
          }, []),
          ee = Object(N.useCallback)(
            function (e) {
              for (
                var t = x.length ? x : u,
                  n = t.length,
                  a = (e = Object(P.g)(e, 0, n));
                a < n;
                a++
              )
                if (!X(t[a])) return a
              for (var r = e - 1; r >= 0; r--) if (!X(t[r])) return r
            },
            [X, x, u],
          ),
          te = Object(N.useCallback)(
            function (e, t) {
              var n = -(e = ee(e) || 0) * Number(r)
              return e !== C ? (k(e), U(n), void (m && t && m(d))) : U(n)
            },
            [ee, d, C, r, m],
          )
        Object(N.useEffect)(function () {
          k(o), te(o || 0)
        }, []),
          Object(N.useEffect)(
            function () {
              Q && h(u || [])
            },
            [Q, u],
          )
        var ne = Object(N.useCallback)(
            function (e) {
              e.preventDefault(), e.stopPropagation()
              var t = e.touches[0].clientY - V
              U(Object(P.g)(q + t, -x.length * Number(r), r))
            },
            [q, r, x, V],
          ),
          ae = Object(N.useCallback)(
            function (e) {
              R(e.touches[0].clientY), J(Y), w(0)
            },
            [Y],
          ),
          re = Object(N.useCallback)(
            function () {
              if (Y !== q) {
                w(200)
                var e = Object(P.g)(Math.round(-Y / Number(r)), 0, x.length - 1)
                setTimeout(function () {
                  te(e, !0)
                }, 5.5)
              }
            },
            [q, Y, r, x.length, te],
          ),
          ce = Object(N.useCallback)(
            function (e) {
              var t = e.currentTarget.dataset.index
              setTimeout(function () {
                te(Number(t), !0)
              })
            },
            [te],
          ),
          ie = Object(N.useCallback)(
            function () {
              return C
            },
            [C],
          ),
          ue = Object(N.useCallback)(
            function () {
              return x[C]
            },
            [x, C],
          ),
          oe = Object(N.useCallback)(
            function (e) {
              return Object(E.d)(e) && n && n in e ? e[n] : e
            },
            [n],
          ),
          le = Object(N.useCallback)(
            function (e) {
              for (var t = 0; t < x.length; t++)
                if (oe(x[t]) === e) return te(t)
              return j.a.resolve()
            },
            [te, oe, x],
          )
        Object(N.useImperativeHandle)(t, function () {
          return {
            getCurrentIndex: ie,
            getValue: ue,
            setValue: le,
            props: e,
            setIndex: te,
            set: function set(e) {
              return new j.a(function (t) {
                h(e.options), W(!1), t()
              })
            },
          }
        })
        var se,
          fe = Object(B.jsx)(H.n, {
            style: wrapperStyle({
              offset: Y,
              itemHeight: r,
              visibleItemCount: i,
              duration: I,
            }),
            onTouchStart: ae,
            onTouchMove: ne,
            onTouchEnd: re,
            onTouchCancel: re,
            catchMove: !0,
            children: b()(x).call(x, function (e, t) {
              return Object(B.jsx)(
                H.n,
                {
                  'disable-scroll': !0,
                  'data-index': t,
                  style: { height: r + 'px' },
                  className:
                    'van-ellipsis ' +
                    K.b('picker-column__item', {
                      disabled: e && e.disabled,
                      selected: t === C,
                    }) +
                    ' ' +
                    (t === C ? 'active-class' : ''),
                  onClick: ce,
                  children: optionText(e, n),
                },
                'picker-column__item'.concat(t),
              )
            }),
          })
        return Object(B.jsx)(
          H.n,
          _objectSpread(
            _objectSpread(
              {
                className: 'van-picker-column  '.concat(l),
                style: K.c([
                  ((se = { itemHeight: r, visibleItemCount: i }),
                  Object(K.c)({
                    height: se.itemHeight * se.visibleItemCount + 'px',
                  })),
                  f,
                ]),
              },
              v,
            ),
            {},
            { children: Object(B.jsx)(B.Fragment, { children: fe }) },
          ),
        )
      }
      var z = Object(N.memo)(Object(N.forwardRef)(picker_column_Index)),
        Y = n(586),
        U = n(614)
      function maskStyle(e) {
        return Object(K.c)({
          'background-size':
            '100% ' + (e.itemHeight * (e.visibleItemCount - 1)) / 2 + 'px',
        })
      }
      function frameStyle(e) {
        return Object(K.c)({ height: e.itemHeight + 'px' })
      }
      function wxs_columns(e) {
        return Object(U.a)(e)
          ? e.length && !m()(e[0])
            ? [{ values: e }]
            : e
          : []
      }
      var Z = [
        'valueKey',
        'toolbarPosition',
        'defaultIndex',
        'columns',
        'title',
        'cancelButtonText',
        'confirmButtonText',
        'itemHeight',
        'visibleItemCount',
        'loading',
        'onChange',
        'className',
        'style',
        'onCancel',
        'onConfirm',
        'showToolbar',
      ]
      function picker_ownKeys(e, t) {
        var n = h()(e)
        if (y.a) {
          var a = y()(e)
          t &&
            (a = k()(a).call(a, function (t) {
              return D()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function picker_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            w()((n = picker_ownKeys(Object(a), !0))).call(n, function (t) {
              o()(e, t, a[t])
            })
          else if (S.a) r()(e, S()(a))
          else {
            var c
            w()((c = picker_ownKeys(Object(a)))).call(c, function (t) {
              i()(e, t, D()(a, t))
            })
          }
        }
        return e
      }
      var L = Object(N.forwardRef)(function Index(e, t) {
        var n,
          a = e.valueKey,
          c = void 0 === a ? 'text' : a,
          u = e.toolbarPosition,
          o = void 0 === u ? 'top' : u,
          l = e.defaultIndex,
          f = e.columns,
          d = e.title,
          v = e.cancelButtonText,
          p = e.confirmButtonText,
          x = e.itemHeight,
          h = void 0 === x ? 48 : x,
          O = e.visibleItemCount,
          y = void 0 === O ? 5 : O,
          C = e.loading,
          k = e.onChange,
          _ = e.className,
          D = e.style,
          I = e.onCancel,
          w = e.onConfirm,
          T = e.showToolbar,
          S = void 0 === T || T,
          V = s()(e, Z),
          M = Object(N.useRef)([]),
          P = Object(N.useRef)(-1)
        Object(N.useEffect)(
          function () {
            Array.isArray(M) && M.length && F().catch(function () {})
          },
          [f, M],
        )
        var E = function emit(e) {
            var t,
              n =
                null == e || null === (t = e.currentTarget) || void 0 === t
                  ? void 0
                  : t.dataset.type,
              a = f && f.length && !m()(f[0])
            if ('number' != typeof e && n)
              'cancel' === n
                ? I &&
                  (i()(e, 'detail', {
                    value: { value: a ? R(0) : L(), index: a ? A(0) : q() },
                  }),
                  I(e))
                : 'confirm' === n &&
                  w &&
                  (i()(e, 'detail', {
                    value: { value: a ? R(0) : L(), index: a ? A(0) : q() },
                  }),
                  w(e))
            else if (k) {
              var c = {}
              ;(P.current = e),
                r()(c, {
                  detail: {
                    value: {
                      picker: {
                        setColumnValue: X,
                        getColumnValue: R,
                        setColumnValues: U,
                        getColumnValues: function getColumnValues(e) {
                          return M.current[e].options
                        },
                        getIndexes: q,
                        setIndexes: function setIndexes(e) {
                          var t = b()(e).call(e, function (e, t) {
                            return G(t, e)
                          })
                          return j.a.all(t)
                        },
                        setColumnIndex: G,
                        getColumnIndex: A,
                        getValues: L,
                        setColumns: F,
                        children: M,
                        setValues: W,
                        columns: f,
                      },
                      value: a ? R(0) : L(),
                      index: a ? A(0) : e,
                    },
                  },
                }),
                k(c)
            }
          },
          R = Object(N.useCallback)(function (e) {
            var t = M.current[e]
            return t && t.getValue()
          }, []),
          A = Object(N.useCallback)(function (e) {
            return (M.current[e] || {}).getCurrentIndex()
          }, []),
          F = Object(N.useCallback)(
            function () {
              var e,
                t = f && f.length && !m()(f[0]) ? [{ values: f }] : f,
                n = b()((e = t || [])).call(e, function (e, t) {
                  return U(t, m()(e))
                })
              return j.a.all(n)
            },
            [f],
          ),
          U = Object(N.useCallback)(function (e, t) {
            if (!(e <= P.current)) {
              var n = M.current[e]
              if (null == n)
                return j.a.reject(new Error('setColumnValues: 对应列不存在'))
              if (g()(n.props.options) === g()(t)) return j.a.resolve()
              var a = n.getCurrentIndex()
              return n.set({ options: t }).then(function () {
                a > t.length &&
                  setTimeout(function () {
                    n.setIndex(0), (P.current = -1)
                  })
              })
            }
          }, []),
          L = Object(N.useCallback)(function () {
            var e
            return b()((e = M.current)).call(e, function (e) {
              return e.getValue()
            })
          }, []),
          q = Object(N.useCallback)(function () {
            var e
            return b()((e = M.current)).call(e, function (e) {
              return e.getCurrentIndex()
            })
          }, []),
          J = E,
          $ = Object(N.useCallback)(function () {}, []),
          G = Object(N.useCallback)(function (e, t) {
            var n = M.current[e]
            return null == n
              ? j.a.reject(new Error('setColumnIndex: 对应列不存在'))
              : n.setIndex(t)
          }, [])
        Object(N.useImperativeHandle)(t, function () {
          return {
            setColumnValue: X,
            getColumnValue: R,
            setColumnValues: U,
            getColumnValues: function getColumnValues(e) {
              return M.current[e].options
            },
            getIndexes: q,
            setIndexes: function setIndexes(e) {
              var t = b()(e).call(e, function (e, t) {
                return G(t, e)
              })
              return j.a.all(t)
            },
            setColumnIndex: G,
            getColumnIndex: A,
            getValues: L,
            setColumns: F,
            children: M,
            setValues: W,
            columns: f,
          }
        })
        var Q,
          W = function setValues(e) {
            var t = b()(e).call(e, function (e, t) {
              return X(t, e)
            })
            return j.a.all(t)
          },
          X = function setColumnValue(e, t) {
            var n = M.current[e] || {}
            return null == n
              ? j.a.reject(new Error('setColumnValue: 对应列不存在'))
              : n.setValue(t)
          },
          ee = Object(N.useCallback)(function (e) {
            e.preventDefault(), e.stopPropagation()
          }, [])
        return Object(B.jsxs)(
          H.n,
          picker_objectSpread(
            picker_objectSpread(
              { className: 'van-picker  '.concat(_), style: K.c([D]) },
              V,
            ),
            {},
            {
              onTouchMove: ee,
              children: [
                'top' === o &&
                  S &&
                  Object(B.jsxs)(H.n, {
                    className: 'van-picker__toolbar toolbar-class',
                    children: [
                      Object(B.jsx)(H.n, {
                        className: 'van-picker__cancel',
                        hoverClass: 'van-picker__cancel--hover',
                        hoverStayTime: 70,
                        'data-type': 'cancel',
                        onClick: E,
                        children: v || '取消',
                      }),
                      d &&
                        Object(B.jsx)(H.n, {
                          className: 'van-picker__title van-ellipsis',
                          children: d,
                        }),
                      Object(B.jsx)(H.n, {
                        className: 'van-picker__confirm',
                        hoverClass: 'van-picker__confirm--hover',
                        hoverStayTime: 70,
                        'data-type': 'confirm',
                        onClick: E,
                        children: p || '确定',
                      }),
                    ],
                  }),
                C &&
                  Object(B.jsx)(H.n, {
                    className: 'van-picker__loading',
                    children: Object(B.jsx)(Y.a, { color: '#1989fa' }),
                  }),
                Object(B.jsxs)(H.n, {
                  className: 'van-picker__columns',
                  style:
                    ((Q = { itemHeight: h, visibleItemCount: y }),
                    Object(K.c)({ height: Q.itemHeight * Q.visibleItemCount })),
                  onTouchMove: $,
                  children: [
                    b()((n = wxs_columns(f))).call(n, function (e, t) {
                      return Object(B.jsx)(
                        z,
                        {
                          className: 'van-picker__column column-class',
                          'data-index': t,
                          index: t,
                          valueKey: c,
                          initialOptions: m()(e),
                          defaultIndex: e.defaultIndex || l,
                          itemHeight: h,
                          visibleItemCount: y,
                          activeClass: 'active-class',
                          onChange: J,
                          ref: function ref(e) {
                            return (M.current[t] = e)
                          },
                        },
                        'van-picker__column_'.concat(t, 'column-class'),
                      )
                    }),
                    Object(B.jsx)(H.n, {
                      className: 'van-picker__mask',
                      style: maskStyle({ itemHeight: h, visibleItemCount: y }),
                    }),
                    Object(B.jsx)(H.n, {
                      className: 'van-picker__frame van-hairline--top-bottom',
                      style: frameStyle({ itemHeight: h }),
                    }),
                  ],
                }),
                'bottom' === o &&
                  S &&
                  Object(B.jsxs)(H.n, {
                    className: 'van-picker__toolbar toolbar-class',
                    children: [
                      Object(B.jsx)(H.n, {
                        className: 'van-picker__cancel',
                        hoverClass: 'van-picker__cancel--hover',
                        hoverStayTime: 70,
                        'data-type': 'cancel',
                        onClick: E,
                        children: v,
                      }),
                      d &&
                        Object(B.jsx)(H.n, {
                          className: 'van-picker__title van-ellipsis',
                          children: d,
                        }),
                      Object(B.jsx)(H.n, {
                        className: 'van-picker__confirm',
                        hoverClass: 'van-picker__confirm--hover',
                        hoverStayTime: 70,
                        'data-type': 'confirm',
                        onClick: E,
                        children: p,
                      }),
                    ],
                  }),
              ],
            },
          ),
        )
      })
      t.a = L
    },
    726: function (e, t, n) {
      'use strict'
      n(576), n(587), n(727), n(728), n(770)
    },
    727: function (e, t, n) {},
    728: function (e, t, n) {},
    729: function (e, t, n) {
      n(47)
      var a = n(56),
        r = n(19),
        c = n(13),
        i = n(730),
        u = Array.prototype,
        o = { DOMTokenList: !0, NodeList: !0 }
      e.exports = function (e) {
        var t = e.values
        return e === u || (c(u, e) && t === u.values) || r(o, a(e)) ? i : t
      }
    },
    730: function (e, t, n) {
      var a = n(731)
      e.exports = a
    },
    731: function (e, t, n) {
      n(48), n(69)
      var a = n(18)
      e.exports = a('Array').values
    },
    736: function (e, t, n) {
      'use strict'
      var a = n(116),
        r = n.n(a),
        c = n(55),
        i = n.n(c),
        u = n(572),
        o = n.n(u),
        l = n(577),
        s = n.n(l),
        f = n(573),
        m = n.n(f),
        d = n(32),
        b = n.n(d),
        v = n(118),
        j = n.n(v),
        p = n(10),
        g = n.n(p),
        x = n(672),
        h = n.n(x),
        O = n(5),
        y = n.n(O),
        C = n(6),
        k = n.n(C),
        _ = n(24),
        D = n.n(_),
        I = n(571),
        w = n.n(I),
        T = n(570),
        S = n.n(T),
        N = n(27),
        H = n.n(N),
        V = n(173),
        M = n.n(V),
        K = n(64),
        P = n(677),
        E = n(569),
        R = (n(591), n(23)),
        A = n.n(R),
        B = n(117),
        F = n.n(B),
        z = n(575),
        Y = new Date().getFullYear()
      function wxs_range(e, t, n) {
        return Math.min(Math.max(e, t), n)
      }
      function padZero(e) {
        var t
        return A()((t = '00'.concat(e))).call(t, -2)
      }
      function getTrueValue(e) {
        for (void 0 === e && (e = '1'); isNaN(F()(e, 10)); )
          e = A()(e).call(e, 1)
        return F()(e, 10)
      }
      function getMonthEndDay(e, t) {
        return 32 - new Date(e, t - 1, 32).getDate()
      }
      var U = function defaultFormatter(e, t) {
        return t
      }
      var Z = n(115),
        L = [
          'value',
          'filter',
          'type',
          'showToolbar',
          'formatter',
          'minDate',
          'maxDate',
          'minHour',
          'maxHour',
          'minMinute',
          'maxMinute',
          'title',
          'itemHeight',
          'visibleItemCount',
          'confirmButtonText',
          'cancelButtonText',
          'onInput',
          'onChange',
          'onCancel',
          'onConfirm',
        ]
      function ownKeys(e, t) {
        var n = D()(e)
        if (w.a) {
          var a = w()(e)
          t &&
            (a = b()(a).call(a, function (t) {
              return S()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            H()((n = ownKeys(Object(a), !0))).call(n, function (t) {
              o()(e, t, a[t])
            })
          else if (M.a) r()(e, M()(a))
          else {
            var c
            H()((c = ownKeys(Object(a)))).call(c, function (t) {
              i()(e, t, S()(a, t))
            })
          }
        }
        return e
      }
      function DatetimePicker(e, t) {
        var n = e.value,
          a = void 0 === n ? null : n,
          r = b()(e),
          c = e.type,
          i = void 0 === c ? 'datetime' : c,
          u = e.showToolbar,
          l = void 0 === u || u,
          f = e.formatter,
          d = void 0 === f ? U : f,
          v = e.minDate,
          p = void 0 === v ? new Date(Y - 10, 0, 1).getTime() : v,
          x = e.maxDate,
          O = void 0 === x ? new Date(Y + 10, 11, 31).getTime() : x,
          C = e.minHour,
          _ = void 0 === C ? 0 : C,
          D = e.maxHour,
          I = void 0 === D ? 23 : D,
          w = e.minMinute,
          T = void 0 === w ? 0 : w,
          S = e.maxMinute,
          N = void 0 === S ? 59 : S,
          H = e.title,
          V = e.itemHeight,
          M = e.visibleItemCount,
          R = e.confirmButtonText,
          A = e.cancelButtonText,
          B = e.onInput,
          F = e.onChange,
          q = e.onCancel,
          J = e.onConfirm,
          $ = m()(e, L),
          G = Object(K.useRef)({}),
          Q = Object(K.useState)(Date.now()),
          W = s()(Q, 2),
          X = W[0],
          ee = W[1],
          te = Object(K.useState)([]),
          ne = s()(te, 2),
          ae = ne[0],
          re = ne[1],
          ce = _,
          ie = I,
          ue = T,
          oe = N,
          le = Object(K.useCallback)(function () {
            if (G.current) {
              var e = G.current.setColumnValues
              G.current.setColumnValues = function () {
                return e.apply(G.current, [
                  arguments.length <= 1 ? void 0 : arguments[1],
                  arguments.length <= 2 ? void 0 : arguments[2],
                  !1,
                ])
              }
            }
            return G.current
          }, []),
          se = Object(K.useCallback)(
            function (e, t) {
              var n,
                a = new Date(t),
                r = 'maxDate' === ''.concat(e, 'Date') ? O : p,
                c = new Date(r),
                i = c.getFullYear(),
                u = 1,
                l = 1,
                s = 0,
                f = 0
              return (
                'max' === e &&
                  ((u = 12),
                  (l = getMonthEndDay(a.getFullYear(), a.getMonth() + 1)),
                  (s = 23),
                  (f = 59)),
                a.getFullYear() === i &&
                  ((u = c.getMonth() + 1),
                  a.getMonth() + 1 === u &&
                    ((l = c.getDate()),
                    a.getDate() === l &&
                      ((s = c.getHours()),
                      a.getHours() === s && (f = c.getMinutes())))),
                (n = {}),
                o()(n, ''.concat(e, 'Year'), i),
                o()(n, ''.concat(e, 'Month'), u),
                o()(n, ''.concat(e, 'Date'), l),
                o()(n, ''.concat(e, 'Hour'), s),
                o()(n, ''.concat(e, 'Minute'), f),
                n
              )
            },
            [O, p],
          ),
          fe = Object(K.useCallback)(
            function (e) {
              if ('time' === i)
                return [
                  { type: 'hour', range: [ce, ie] },
                  { type: 'minute', range: [ue, oe] },
                ]
              var t = se('max', e || X),
                n = t.maxYear,
                a = t.maxDate,
                r = t.maxMonth,
                c = t.maxHour,
                u = t.maxMinute,
                o = se('min', e || X),
                l = o.minYear,
                s = o.minDate,
                f = [
                  { type: 'year', range: [l, n] },
                  { type: 'month', range: [o.minMonth, r] },
                  { type: 'day', range: [s, a] },
                  { type: 'hour', range: [o.minHour, c] },
                  { type: 'minute', range: [o.minMinute, u] },
                ]
              return (
                'date' === i && j()(f).call(f, 3, 2),
                'year-month' === i && j()(f).call(f, 2, 3),
                f
              )
            },
            [se, X, ie, oe, ce, ue, i],
          ),
          me = Object(K.useCallback)(
            function (e) {
              var t
              return g()((t = fe(e))).call(t, function (e) {
                var t = e.type,
                  n = e.range,
                  a = (function times(e, t) {
                    for (var n = -1, a = Array(e < 0 ? 0 : e); ++n < e; )
                      a[n] = t(n)
                    return a
                  })(n[1] - n[0] + 1, function (e) {
                    var a = n[0] + e
                    return 'year' === t ? ''.concat(a) : padZero(a)
                  })
                return r && (a = r(t, a)), { type: t, values: a }
              })
            },
            [r, fe],
          ),
          de = Object(K.useCallback)(
            function (e) {
              var t,
                n = g()((t = me(e))).call(t, function (e) {
                  var t
                  return {
                    values: g()((t = h()(e))).call(t, function (t) {
                      return d(e.type, t)
                    }),
                  }
                })
              return re(n)
            },
            [d, me],
          ),
          be = Object(K.useCallback)(
            function (e) {
              var t = [],
                n = le()
              if ('time' === i) {
                var a = e.split(':')
                t = [d('hour', a[0]), d('minute', a[1])]
              } else {
                var r = new Date(e)
                ;(t = [
                  d('year', ''.concat(r.getFullYear())),
                  d('month', padZero(r.getMonth() + 1)),
                ]),
                  'date' === i && t.push(d('day', padZero(r.getDate()))),
                  'datetime' === i &&
                    t.push(
                      d('day', padZero(r.getDate())),
                      d('hour', padZero(r.getHours())),
                      d('minute', padZero(r.getMinutes())),
                    )
              }
              return (
                ee(e),
                de(e),
                new y.a(function (a) {
                  setTimeout(function () {
                    n.setValues(t), a(''.concat(e))
                  }, 16)
                })
              )
            },
            [d, le, i, de],
          ),
          ve = Object(K.useCallback)(
            function (e) {
              var t = 'time' !== i
              if (
                (t &&
                !(function isValidDate(e) {
                  return Object(z.b)(e) && !isNaN(new Date(e).getTime())
                })(e)
                  ? (e = p)
                  : t || e || (e = ''.concat(padZero(_), ':00')),
                !t)
              ) {
                var n,
                  a = e.split(':'),
                  r = s()(a, 2),
                  c = r[0],
                  u = r[1]
                return (
                  (c = padZero(wxs_range(c, _, I))),
                  (u = padZero(wxs_range(u, T, N))),
                  k()((n = ''.concat(c, ':'))).call(n, u)
                )
              }
              return (e = Math.max(e, p)), (e = Math.min(e, O))
            },
            [O, I, N, p, _, T, i],
          )
        Object(K.useLayoutEffect)(
          function () {
            var e = ve(a)
            e === X ||
              be(e).then(function () {
                B && B({ detail: e, currentTarget: { dataset: { type: i } } })
              })
          },
          [i, p, O, _, I, T, N],
        )
        return (
          Object(K.useImperativeHandle)(t, function () {
            return {
              pickerInstance: G.current,
              columns: ae,
              setColumns: re,
              innerValue: X,
              updateColumnValue: be,
            }
          }),
          Object(Z.jsx)(P.a, {
            ref: G,
            className: 'van-datetime-picker column-class '.concat(
              $.className || '',
            ),
            style: E.c([$.style]),
            title: H,
            columns: ae,
            itemHeight: V,
            showToolbar: l,
            visibleItemCount: M,
            confirmButtonText: R,
            cancelButtonText: A,
            onChange: function onChange_(e) {
              var t,
                n,
                a,
                r,
                c,
                u = e.detail.value,
                o = le()
              if ('datetime' === i)
                t = new Date(
                  k()(
                    (n = k()(
                      (a = k()(
                        (r = k()((c = ''.concat(u[0], '-'))).call(
                          c,
                          u[1],
                          '-',
                        )),
                      ).call(r, u[2], ' ')),
                    ).call(a, u[3], ':')),
                  ).call(n, u[4]),
                ).getTime()
              else if ('date' === i) {
                var l, s
                t = new Date(
                  k()(
                    (l = k()((s = ''.concat(u[0], '-'))).call(s, u[1], '-')),
                  ).call(l, u[2]),
                ).getTime()
              } else if ('time' === i) {
                var f
                t = new Date(
                  k()((f = ''.concat(u[0], ':'))).call(f, u[1]),
                ).getTime()
              } else if ('year-month' === i) {
                var m
                t = new Date(
                  k()((m = ''.concat(u[0], '-'))).call(m, u[1]),
                ).getTime()
              }
              var d = me(t)
              if ('time' === i) {
                var b,
                  v = o.getIndexes()
                t = k()((b = ''.concat(+h()(d[0])[v[0]], ':'))).call(
                  b,
                  +h()(d[1])[v[1]],
                )
              } else {
                var j = o.getIndexes(),
                  p = g()(j).call(j, function (e, t) {
                    return h()(d[t])[e]
                  }),
                  x = getTrueValue(p[0]),
                  O = getTrueValue(p[1]),
                  y = getMonthEndDay(x, O),
                  C = getTrueValue(p[2])
                'year-month' === i && (C = 1), (C = C > y ? y : C)
                var _ = 0,
                  D = 0
                'datetime' === i &&
                  ((_ = getTrueValue(p[3])), (D = getTrueValue(p[4]))),
                  (t = new Date(x, O - 1, C, _, D))
              }
              ;(t = ve(t)),
                be(t).then(function () {
                  ;(B &&
                    B({ detail: t, currentTarget: { dataset: { type: i } } }),
                  F) &&
                    F({
                      detail: {
                        datetimePicker: {
                          columns: ae,
                          setColumns: re,
                          innerValue: X,
                          updateColumnValue: be,
                        },
                      },
                    })
                })
            },
            onConfirm: function onConfirm(e) {
              J &&
                J({
                  detail: _objectSpread(
                    _objectSpread({}, e.detail),
                    {},
                    { value: X },
                  ),
                })
            },
            onCancel: q,
          })
        )
      }
      t.a = Object(K.forwardRef)(DatetimePicker)
    },
    770: function (e, t, n) {},
    908: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return x
        })
      var a = n(39),
        r = n(40),
        c = n(175),
        i = n(66),
        u = n(65),
        o = n(91),
        l = n(64),
        s = n.n(l),
        f = n(578),
        m = n(579),
        d = (n(726), n(736)),
        b = n(174),
        v = n(115)
      function Demo() {
        var e = s.a.useState({
            minHour: 10,
            maxHour: 20,
            minDate: new Date(2009, 10, 1).getTime(),
            maxDate: new Date(2011, 10, 1).getTime(),
            currentDate: new Date().getTime(),
          }),
          t = Object(b.a)(e, 2),
          n = t[0],
          a = t[1],
          r = s.a.useCallback(
            function (e) {
              a({ currentDate: e.detail })
            },
            [n],
          )
        return Object(v.jsx)(d.a, {
          type: 'datetime',
          value: n.currentDate,
          minDate: n.minDate,
          maxDate: n.maxDate,
          onInput: r,
        })
      }
      var j = n(612)
      function demo2_Demo() {
        var e = s.a.useState({
            minDate: new Date(2018, 0, 1).getTime(),
            currentDate: null,
          }),
          t = Object(b.a)(e, 2),
          n = t[0],
          a = t[1],
          r = s.a.useCallback(
            function (e) {
              a(Object(j.a)(Object(j.a)({}, n), {}, { currentDate: e.detail }))
            },
            [n],
          ),
          c = s.a.useCallback(function (e, t) {
            return 'year' === e
              ? ''.concat(t, '年')
              : 'month' === e
              ? ''.concat(t, '月')
              : t
          })
        return Object(v.jsx)(d.a, {
          type: 'datetime',
          value: n.currentDate,
          minDate: n.minDate,
          maxDate: n.maxDate,
          onInput: r,
          formatter: c,
        })
      }
      function demo3_Demo() {
        var e = s.a.useState({
            currentDate: new Date(2018, 0, 1),
            minDate: new Date(2018, 0, 1).getTime(),
          }),
          t = Object(b.a)(e, 2),
          n = t[0],
          a = t[1],
          r = s.a.useCallback(
            function (e) {
              a({ currentDate: e.detail })
            },
            [n],
          )
        return Object(v.jsx)(d.a, {
          type: 'year-month',
          value: n.currentDate,
          minDate: n.minDate,
          onInput: r,
        })
      }
      function demo4_Demo() {
        var e = s.a.useState({
            currentDate: '12:00',
            minHour: 10,
            maxHour: 20,
          }),
          t = Object(b.a)(e, 2),
          n = t[0],
          a = t[1],
          r = s.a.useCallback(
            function (e) {
              a({ currentDate: e.detail })
            },
            [n],
          )
        return Object(v.jsx)(d.a, {
          type: 'time',
          value: n.currentDate,
          minHour: n.minHour,
          maxHour: n.maxHour,
          onInput: r,
        })
      }
      var p = n(32),
        g = n.n(p)
      function demo5_Demo() {
        var e = s.a.useState({
            currentDate: '12:00',
            minHour: 10,
            maxHour: 20,
          }),
          t = Object(b.a)(e, 2),
          n = t[0],
          a = t[1],
          r = s.a.useCallback(
            function (e) {
              a({ currentDate: e.detail })
            },
            [n],
          )
        return Object(v.jsx)(d.a, {
          type: 'time',
          value: n.currentDate,
          minHour: n.minHour,
          maxHour: n.maxHour,
          onInput: r,
          filter: function filter(e, t) {
            return 'minute' === e
              ? g()(t).call(t, function (e) {
                  return e % 5 == 0
                })
              : t
          },
        })
      }
      var x = (function (e) {
        Object(i.a)(Index, e)
        var t = Object(u.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = t.call(this)),
            Object(o.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(v.jsxs)(f.a, {
                  title: 'DatetimePicker 时间选择',
                  className: 'pages-datetime-picker-index',
                  children: [
                    Object(v.jsx)(m.a, {
                      title: '选择完整时间',
                      padding: !0,
                      children: Object(v.jsx)(Demo, {}),
                    }),
                    Object(v.jsx)(m.a, {
                      title: '选择日期（年月日）',
                      padding: !0,
                      children: Object(v.jsx)(demo2_Demo, {}),
                    }),
                    Object(v.jsx)(m.a, {
                      title: '选择日期（年月）',
                      padding: !0,
                      children: Object(v.jsx)(demo3_Demo, {}),
                    }),
                    Object(v.jsx)(m.a, {
                      title: '选择时间',
                      padding: !0,
                      children: Object(v.jsx)(demo4_Demo, {}),
                    }),
                    Object(v.jsx)(m.a, {
                      title: '选项过滤器',
                      padding: !0,
                      children: Object(v.jsx)(demo5_Demo, {}),
                    }),
                  ],
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