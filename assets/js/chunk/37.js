;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
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
      var r = t(590),
        c = t.n(r)
      function isFunction(e) {
        return 'function' == typeof e
      }
      function isPlainObject(e) {
        return null !== e && 'object' === c()(e) && !Array.isArray(e)
      }
      function isPromise(e) {
        return isPlainObject(e) && isFunction(e.then) && isFunction(e.catch)
      }
      function isDef(e) {
        return null != e
      }
      function isObj(e) {
        var n = c()(e)
        return null !== e && ('object' === n || 'function' === n)
      }
      function isBoolean(e) {
        return 'boolean' == typeof e
      }
      var a = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return a.test(e)
      }
      function isVideoUrl(e) {
        return o.test(e)
      }
    },
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(591)
        var r = t(576),
          c = t(568),
          a = t(90),
          o = t(739),
          i = t(77),
          l = t(64),
          s = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            u = n.className,
            f = void 0 === u ? '' : u,
            d = n.children,
            v = a.a.useRouter().path
          return (
            Object(l.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(o.a)({ scrollTop: 0 })
              },
              [v],
            ),
            a.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: v }
            }),
            Object(s.jsxs)(c.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(s.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(s.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(i.d)()
                      },
                    }),
                    Object(s.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                d,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var r = t(39),
        c = t(40),
        a = t(66),
        o = t(65),
        i = t(568),
        l = t(64),
        s = (t(582), t(115)),
        u = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(o.a)(Index)
          function Index() {
            return Object(r.a)(this, Index), n.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    r = e.card
                  return Object(s.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      r
                        ? Object(s.jsx)(i.n, {
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
        })(l.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var r = t(116),
        c = t.n(r),
        a = t(55),
        o = t.n(a),
        i = t(572),
        l = t.n(i),
        s = t(574),
        u = t.n(s),
        f = t(573),
        d = t.n(f),
        v = t(595),
        b = t.n(v),
        j = t(10),
        p = t.n(j),
        m = t(24),
        h = t.n(m),
        y = t(571),
        O = t.n(y),
        g = t(32),
        x = t.n(g),
        _ = t(570),
        w = t.n(_),
        C = t(27),
        S = t.n(C),
        k = t(173),
        N = t.n(k),
        T = t(568),
        A = t(64),
        I = t(569),
        E = t(580)
      function textStyle(e) {
        return Object(I.c)({ 'font-size': Object(E.a)(e.textSize) })
      }
      var z = t(115),
        B = [
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
        var t = h()(e)
        if (O.a) {
          var r = O()(e)
          n &&
            (r = x()(r).call(r, function (n) {
              return w()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            S()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              l()(e, n, r[n])
            })
          else if (N.a) c()(e, N()(r))
          else {
            var a
            S()((a = ownKeys(Object(r)))).call(a, function (n) {
              o()(e, n, w()(r, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          r = e.type,
          c = void 0 === r ? 'circular' : r,
          a = e.color,
          o = e.size,
          i = e.textSize,
          l = e.className,
          s = e.children,
          f = e.style,
          v = d()(e, B),
          j = Object(A.useState)(b()({ length: 12 })),
          m = u()(j, 1)[0]
        return Object(z.jsxs)(
          T.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + I.b('loading', { vertical: t }) + ' ' + l,
                style: I.c([f]),
              },
              v,
            ),
            {},
            {
              children: [
                Object(z.jsx)(T.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + c,
                  style:
                    ((n = { color: a, size: o }),
                    Object(I.c)({
                      color: n.color,
                      width: Object(E.a)(n.size),
                      height: Object(E.a)(n.size),
                    })),
                  children:
                    'spinner' === c &&
                    Object(z.jsx)(T.a, {
                      children: p()(m).call(m, function (e, n) {
                        return Object(z.jsx)(
                          T.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(z.jsx)(T.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: i }),
                  children: s,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    587: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var r = t(116),
        c = t.n(r),
        a = t(55),
        o = t.n(a),
        i = t(24),
        l = t.n(i),
        s = t(571),
        u = t.n(s),
        f = t(32),
        d = t.n(f),
        v = t(570),
        b = t.n(v),
        j = t(27),
        p = t.n(j),
        m = t(173),
        h = t.n(m),
        y = t(572),
        O = t.n(y),
        g = t(573),
        x = t.n(g),
        _ = t(90),
        w = t(568),
        C = t(569),
        S = t(576),
        k = t(586),
        N = t(28),
        T = t.n(N),
        A = t(583)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== T()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(A.a)([t])
        )
      }
      var I = t(115),
        E = [
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
        var t = l()(e)
        if (u.a) {
          var r = u()(e)
          n &&
            (r = d()(r).call(r, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              O()(e, n, r[n])
            })
          else if (h.a) c()(e, h()(r))
          else {
            var a
            p()((a = ownKeys(Object(r)))).call(a, function (n) {
              o()(e, n, b()(r, n))
            })
          }
        }
        return e
      }
      var z = !1,
        B = 10
      if (!z)
        var L = setInterval(function () {
          if (--B > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                r = t.innerHTML
              if (r && /^taro-button-core{/.test(r)) {
                t.remove(), (z = !0), L && clearInterval(L)
                break
              }
            }
          else L && clearInterval(L)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          r = void 0 === t ? 'default' : t,
          c = e.size,
          a = void 0 === c ? 'normal' : c,
          o = e.block,
          i = e.round,
          l = e.plain,
          s = e.square,
          u = e.loading,
          f = e.disabled,
          d = e.hairline,
          v = e.color,
          b = e.loadingSize,
          j = void 0 === b ? _.a.pxTransform(40) : b,
          p = e.loadingType,
          m = void 0 === p ? 'circular' : p,
          h = e.loadingText,
          y = e.icon,
          O = e.classPrefix,
          g = void 0 === O ? 'van-icon' : O,
          N = e.onClick,
          T = e.children,
          A = e.style,
          z = e.className,
          B = x()(e, E)
        return Object(I.jsx)(
          w.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  C.b('button', [
                    r,
                    a,
                    {
                      block: o,
                      round: i,
                      plain: l,
                      square: s,
                      loading: u,
                      disabled: f,
                      hairline: d,
                      unclickable: f || u,
                    },
                  ]) +
                  ' ' +
                  (d ? 'van-hairline--surround' : '') +
                  ' '.concat(z || ''),
                hoverClass: 'van-button--active hover-class',
                style: C.c([rootStyle({ plain: l, color: v }), A]),
                onClick: f || u ? void 0 : N,
              },
              B,
            ),
            {},
            {
              children: u
                ? Object(I.jsxs)(w.n, {
                    style: 'display: flex',
                    children: [
                      Object(I.jsx)(k.a, {
                        className: 'loading-class',
                        size: j,
                        type: m,
                        color:
                          ((n = { type: r, color: v, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      h &&
                        Object(I.jsx)(w.n, {
                          className: 'van-button__loading-text',
                          children: h,
                        }),
                    ],
                  })
                : Object(I.jsxs)(w.a, {
                    children: [
                      y &&
                        Object(I.jsx)(S.a, {
                          size: '1.2em',
                          name: y,
                          classPrefix: g,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(I.jsx)(w.n, {
                        className: 'van-button__text',
                        children: T,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    588: function (e, n, t) {},
    592: function (e, n, t) {
      'use strict'
      t(577), t(588), t(584), t(585), t(598)
    },
    593: function (e, n, t) {
      'use strict'
      t.d(n, 'g', function () {
        return range
      }),
        t.d(n, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(n, 'a', function () {
          return addUnit
        }),
        t.d(n, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(n, 'f', function () {
          return pickExclude
        }),
        t.d(n, 'c', function () {
          return getRect
        }),
        t.d(n, 'b', function () {
          return getAllRect
        }),
        t.d(n, 'i', function () {
          return toPromise
        })
      var r,
        c = t(148),
        a = t.n(c),
        o = t(24),
        i = t.n(o),
        l = t(21),
        s = t.n(l),
        u = t(5),
        f = t.n(u),
        d = (t(567), t(863)),
        v = (t(866), t(90)),
        b = t(790),
        j = (t(77), t(575))
      t(596)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
      }
      function addUnit(e) {
        if (Object(j.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? v.a.pxTransform(e) : e
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
      function pickExclude(e, n) {
        var t
        return Object(j.e)(e)
          ? a()((t = i()(e))).call(
              t,
              function (t, r) {
                return s()(n).call(n, r) || (t[r] = e[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new f.a(function (t) {
          var r = Object(b.a)()
          e && (r = r.in(e)),
            r
              .select(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function getAllRect(e, n) {
        return new f.a(function (t) {
          var r = Object(b.a)()
          e && (r = r.in(e)),
            r
              .selectAll(n)
              .boundingClientRect()
              .exec(function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(e[0])
              })
        })
      }
      function toPromise(e) {
        return Object(j.f)(e) ? e : f.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return j.b
      })
    },
    596: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return canIUseModel
      }),
        t.d(n, 'b', function () {
          return canIUseNextTick
        })
      var r,
        c = t(117),
        a = t.n(c),
        o = t(863),
        i = t(864)
      t(865)
      function gte(e) {
        return (
          (function compareVersion(e, n) {
            ;(e = e.split('.')), (n = n.split('.'))
            for (var t = Math.max(e.length, n.length); e.length < t; )
              e.push('0')
            for (; n.length < t; ) n.push('0')
            for (var r = 0; r < t; r++) {
              var c = a()(e[r], 10),
                o = a()(n[r], 10)
              if (c > o) return 1
              if (c < o) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(o.a)()), r
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(i.a)('nextTick')
      }
    },
    598: function (e, n, t) {},
    599: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return useTransition
      })
      var r = t(574),
        c = t.n(r),
        a = t(6),
        o = t.n(a),
        i = t(21),
        l = t.n(i),
        s = t(64),
        u = t(575)
      function useTransition(e) {
        var n = e.show,
          t = void 0 !== n && n,
          r = e.duration,
          a = void 0 === r ? 300 : r,
          i = e.name,
          f = void 0 === i ? 'fade' : i,
          d = e.onBeforeEnter,
          v = e.onBeforeLeave,
          b = e.onAfterEnter,
          j = e.onAfterLeave,
          p = e.onEnter,
          m = e.onLeave,
          h = e.enterClass,
          y = e.enterActiveClass,
          O = e.enterToClass,
          g = e.leaveClass,
          x = e.leaveActiveClass,
          _ = e.leaveToClass,
          w = Object(s.useRef)(!1),
          C = Object(s.useRef)(''),
          S = Object(s.useState)(!1),
          k = c()(S, 2),
          N = k[0],
          T = k[1],
          A = Object(s.useState)(!1),
          I = c()(A, 2),
          E = I[0],
          z = I[1],
          B = Object(s.useState)(0),
          L = c()(B, 2),
          D = L[0],
          K = L[1],
          P = Object(s.useState)(''),
          R = c()(P, 2),
          F = R[0],
          M = R[1],
          U = Object(s.useMemo)(
            function () {
              var e,
                n,
                t = (function getClassNames(e) {
                  var n, t, r, c
                  return {
                    enter: o()((n = 'van-'.concat(e, '-enter van-'))).call(
                      n,
                      e,
                      '-enter-active enter-class enter-active-class',
                    ),
                    'enter-to': o()(
                      (t = 'van-'.concat(e, '-enter-to van-')),
                    ).call(
                      t,
                      e,
                      '-enter-active enter-to-class enter-active-class',
                    ),
                    leave: o()((r = 'van-'.concat(e, '-leave van-'))).call(
                      r,
                      e,
                      '-leave-active leave-class leave-active-class',
                    ),
                    'leave-to': o()(
                      (c = 'van-'.concat(e, '-leave-to van-')),
                    ).call(
                      c,
                      e,
                      '-leave-active leave-to-class leave-active-class',
                    ),
                  }
                })(f)
              f ||
                ((t.enter += ' '.concat(null != h ? h : '')),
                (t['enter-to'] += o()(
                  (e = ''.concat(null != O ? O : '', ' ')),
                ).call(e, null != y ? y : '', ' ')),
                (t.leave += '  '.concat(null != g ? g : '')),
                (t['leave-to'] += o()(
                  (n = ' '.concat(null != _ ? _ : '', ' ')),
                ).call(n, null != x ? x : '')))
              return t
            },
            [y, h, O, x, g, _, f],
          ),
          q = Object(s.useCallback)(
            function () {
              w.current ||
                ((w.current = !0),
                'enter' === C.current ? null == b || b() : null == j || j(),
                !t && N && T(!1))
            },
            [N, b, j, t],
          ),
          V = Object(s.useCallback)(
            function () {
              var e = Object(u.d)(a) ? a.enter : a
              ;(C.current = 'enter'),
                null == d || d(),
                requestAnimationFrame(function () {
                  'enter' === C.current &&
                    (null == p || p(),
                    z(!0),
                    T(!0),
                    M(U.enter),
                    K(e),
                    requestAnimationFrame(function () {
                      'enter' === C.current &&
                        ((w.current = !1),
                        setTimeout(function () {
                          return q()
                        }, e),
                        M(U['enter-to']))
                    }))
                })
            },
            [a, d, p, U, q],
          ),
          H = Object(s.useCallback)(
            function () {
              if (N) {
                var e = Object(u.d)(a) ? a.leave : a
                ;(C.current = 'leave'),
                  null == v || v(),
                  requestAnimationFrame(function () {
                    'leave' === C.current &&
                      (null == m || m(),
                      M(U.leave),
                      K(e),
                      requestAnimationFrame(function () {
                        'leave' === C.current &&
                          ((w.current = !1),
                          setTimeout(function () {
                            return q()
                          }, e),
                          M(U['leave-to']))
                      }))
                  })
              }
            },
            [U, N, a, v, m, q],
          )
        return (
          Object(s.useEffect)(
            function () {
              !t || (F && l()(F).call(F, U['enter-to'])) || V(), t || H()
            },
            [t],
          ),
          {
            display: N,
            inited: E,
            currentDuration: D,
            classes: F,
            onTransitionEnd: q,
          }
        )
      }
    },
    600: function (e, n, t) {
      'use strict'
      var r = t(116),
        c = t.n(r),
        a = t(55),
        o = t.n(a),
        i = t(24),
        l = t.n(i),
        s = t(571),
        u = t.n(s),
        f = t(32),
        d = t.n(f),
        v = t(570),
        b = t.n(v),
        j = t(27),
        p = t.n(j),
        m = t(173),
        h = t.n(m),
        y = t(572),
        O = t.n(y),
        g = t(573),
        x = t.n(g),
        _ = t(568),
        w = t(569)
      var C = t(599),
        S = t(115),
        k = [
          'onBeforeEnter',
          'onBeforeLeave',
          'onAfterEnter',
          'onAfterLeave',
          'onEnter',
          'onLeave',
          'duration',
          'name',
          'show',
          'children',
          'style',
          'className',
          'enterClass',
          'enterActiveClass',
          'enterToClass',
          'leaveClass',
          'leaveActiveClass',
          'leaveToClass',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (u.a) {
          var r = u()(e)
          n &&
            (r = d()(r).call(r, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              O()(e, n, r[n])
            })
          else if (h.a) c()(e, h()(r))
          else {
            var a
            p()((a = ownKeys(Object(r)))).call(a, function (n) {
              o()(e, n, b()(r, n))
            })
          }
        }
        return e
      }
      n.a = function Transition(e) {
        var n,
          t = e.onBeforeEnter,
          r = e.onBeforeLeave,
          c = e.onAfterEnter,
          a = e.onAfterLeave,
          o = e.onEnter,
          i = e.onLeave,
          l = e.duration,
          s = e.name,
          u = e.show,
          f = e.children,
          d = e.style,
          v = e.className,
          b = e.enterClass,
          j = e.enterActiveClass,
          p = e.enterToClass,
          m = e.leaveClass,
          h = e.leaveActiveClass,
          y = e.leaveToClass,
          O = x()(e, k),
          g = Object(C.a)({
            show: u,
            duration: l,
            name: s,
            enterClass: b,
            enterActiveClass: j,
            enterToClass: p,
            leaveClass: m,
            leaveActiveClass: h,
            leaveToClass: y,
            onBeforeEnter: t,
            onBeforeLeave: r,
            onAfterEnter: c,
            onAfterLeave: a,
            onEnter: o,
            onLeave: i,
          }),
          N = g.currentDuration,
          T = g.classes,
          A = g.display
        return Object(S.jsx)(S.Fragment, {
          children: Object(S.jsx)(
            _.n,
            _objectSpread(
              _objectSpread(
                {
                  className: 'van-transition ' + T + ' '.concat(v || ''),
                  style: w.c([
                    ((n = { currentDuration: N, display: A }),
                    w.c([
                      {
                        '-webkit-transition-duration': n.currentDuration + 'ms',
                        'transition-duration': n.currentDuration + 'ms',
                      },
                      n.display ? null : 'display: none',
                      n.style,
                    ])),
                    d,
                  ]),
                },
                O,
              ),
              {},
              { catchMove: !0, children: f },
            ),
          ),
        })
      }
    },
    601: function (e, n, t) {},
    742: function (e, n, t) {
      'use strict'
      t(577), t(601), t(779)
    },
    745: function (e, n, t) {
      'use strict'
      var r = t(116),
        c = t.n(r),
        a = t(55),
        o = t.n(a),
        i = t(24),
        l = t.n(i),
        s = t(571),
        u = t.n(s),
        f = t(32),
        d = t.n(f),
        v = t(570),
        b = t.n(v),
        j = t(27),
        p = t.n(j),
        m = t(173),
        h = t.n(m),
        y = t(572),
        O = t.n(y),
        g = t(573),
        x = t.n(g),
        _ = t(574),
        w = t.n(_),
        C = t(0),
        S = t.n(C),
        k = t(567),
        N = t(64),
        T = t(568),
        A = t(569),
        I = t(600),
        E = t(593),
        z = t(580)
      function notifyStyle(e) {
        return Object(A.c)({ background: e.background, color: e.color })
      }
      var B = t(6),
        L = t.n(B),
        D = new (t(90).a.Events)()
      function trigger(e) {
        for (
          var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), c = 1;
          c < t;
          c++
        )
          r[c - 1] = arguments[c]
        return D.trigger.apply(D, L()((n = [e])).call(n, r))
      }
      function on(e, n) {
        return D.on(e, n)
      }
      function off(e, n) {
        return D.off(e, n)
      }
      var K = function Notify(e) {
        trigger('notify_show', e)
      }
      K.clear = function (e) {
        trigger('notify_clear', e)
      }
      var P = K,
        R = t(115),
        F = ['style', 'className', 'zIndex']
      function ownKeys(e, n) {
        var t = l()(e)
        if (u.a) {
          var r = u()(e)
          n &&
            (r = d()(r).call(r, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              O()(e, n, r[n])
            })
          else if (h.a) c()(e, h()(r))
          else {
            var a
            p()((a = ownKeys(Object(r)))).call(a, function (n) {
              o()(e, n, b()(r, n))
            })
          }
        }
        return e
      }
      var M = {
          selector: '#van-notify',
          message: '',
          background: '',
          type: 'danger',
          color: '#fff',
          duration: 3e3,
          safeAreaInsetTop: !1,
          top: 0,
          id: 'van-notify',
        },
        U = null
      function es_notify_Notify(e) {
        var n = Object(N.useState)({
            selector: '#van-notify',
            show: !1,
            statusBarHeight: void 0,
            message: '',
            background: '',
            type: 'danger',
            color: '#fff',
            duration: 3e3,
            safeAreaInsetTop: !1,
            top: 0,
            id: 'van-notify',
            onClick: function onClick(e) {},
            onOpened: function onOpened() {},
            onClose: function onClose() {},
          }),
          t = w()(n, 2),
          r = t[0],
          c = t[1],
          a = e.style,
          o = e.className,
          i = e.zIndex,
          l = x()(e, F)
        Object(N.useEffect)(
          function () {
            c(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { id: e.id || 'van-notify' },
              )
            })
          },
          [e],
        ),
          Object(N.useEffect)(function () {
            var e = Object(E.d)().statusBarHeight
            c(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { statusBarHeight: e },
              )
            })
          }, []),
          Object(N.useEffect)(function () {
            return (
              on('notify_show', function (e) {
                var n = S()(
                  S()({}, M),
                  (function parseOptions(e) {
                    return null == e
                      ? {}
                      : 'string' == typeof e
                      ? { message: e }
                      : e
                  })(e),
                )
                ;(n.id === r.id || (!n.id && 'van-notify' === r.id)) &&
                  (c(function (e) {
                    return _objectSpread(_objectSpread({}, e), n)
                  }),
                  f(e)),
                  on('notify_clear', function () {
                    u(e)
                  })
              }),
              function () {
                off('notify_show'), off('notify_clear')
              }
            )
          }, [])
        var s,
          u = Object(N.useCallback)(function (e) {
            clearTimeout(U),
              c(function (e) {
                return _objectSpread(_objectSpread({}, e), {}, { show: !1 })
              }),
              Object(k.a)(function () {
                var n
                null == e ||
                  null === (n = e.onClose) ||
                  void 0 === n ||
                  n.call(e)
              })
          }, []),
          f = Object(N.useCallback)(
            function (e) {
              clearTimeout(U),
                c(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, { show: !0 })
                }),
                Object(k.a)(function () {
                  var n
                  null == e ||
                    null === (n = e.onOpened) ||
                    void 0 === n ||
                    n.call(e)
                })
              var n = e.duration || r.duration
              n > 0 &&
                n !== 1 / 0 &&
                (U = setTimeout(function () {
                  trigger('notify_clear', e)
                }, n))
            },
            [r.duration],
          ),
          d = Object(N.useCallback)(
            function (e) {
              var n
              null === (n = r.onClick) || void 0 === n || n.call(r, e)
            },
            [r],
          )
        return Object(R.jsx)(
          I.a,
          _objectSpread(
            _objectSpread(
              {
                name: 'slide-down',
                show: r.show,
                className: 'van-notify__container '.concat(o),
                style: A.c([
                  ((s = i ? { zIndex: i, top: r.top } : { top: r.top }),
                  Object(A.c)({
                    'z-index': s.zIndex,
                    top: Object(z.a)(s.top),
                  })),
                  a,
                ]),
                onClick: d,
              },
              l,
            ),
            {},
            {
              children: Object(R.jsxs)(T.n, {
                className: 'van-notify van-notify--' + r.type,
                style: notifyStyle({
                  background: r.background,
                  color: r.color,
                }),
                children: [
                  r.safeAreaInsetTop &&
                    Object(R.jsx)(T.n, {
                      style: 'height: ' + r.statusBarHeight + 'px',
                    }),
                  Object(R.jsx)(T.k, { children: r.message }),
                ],
              }),
            },
          ),
        )
      }
      ;(es_notify_Notify.show = P), (es_notify_Notify.clear = P.clear)
      n.a = es_notify_Notify
    },
    779: function (e, n, t) {},
    921: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return p
        })
      var r = t(39),
        c = t(40),
        a = t(175),
        o = t(66),
        i = t(65),
        l = t(91),
        s = t(64),
        u = t(578),
        f = t(579),
        d = (t(592), t(587)),
        v = (t(742), t(745)),
        b = t(568),
        j = t(115)
      function Demo() {
        return Object(j.jsxs)(b.n, {
          children: [
            Object(j.jsx)(d.b, {
              onClick: function show() {
                return v.a.show('通知内容')
              },
              type: 'danger',
              children: '基础用法',
            }),
            Object(j.jsx)(v.a, { id: 'vanNotify' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(j.jsxs)(b.n, {
          children: [
            Object(j.jsx)(d.b, {
              onClick: function primaryShow() {
                v.a.show({ message: '-----通知内容-----', type: 'primary' })
              },
              type: 'info',
              children: '主要通知',
            }),
            Object(j.jsx)(d.b, {
              onClick: function successShow() {
                v.a.show({ message: '-----通知内容-----', type: 'success' })
              },
              type: 'primary',
              children: '成功通知',
            }),
            Object(j.jsx)(d.b, {
              onClick: function dangerShow() {
                v.a.show({ message: '-----通知内容-----', type: 'danger' })
              },
              type: 'danger',
              children: '危险通知',
            }),
            Object(j.jsx)(d.b, {
              onClick: function warningShow() {
                v.a.show({ message: '-----通知内容-----', type: 'warning' })
              },
              type: 'warning',
              children: '警告用法',
            }),
            Object(j.jsx)(v.a, { id: 'vanNotify' }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(j.jsxs)(b.n, {
          children: [
            Object(j.jsx)(d.b, {
              onClick: function show() {
                v.a.show({
                  message: '自定义颜色',
                  color: '#ad0000',
                  background: '#ffe1e1',
                  duration: 1e4,
                })
              },
              type: 'primary',
              children: '自定义颜色和时长',
            }),
            Object(j.jsx)(v.a, { id: 'vanNotify' }),
          ],
        })
      }
      function demo4_Demo() {
        return Object(j.jsxs)(b.n, {
          children: [
            Object(j.jsx)(d.b, {
              onClick: function show() {
                v.a.show({
                  message: '自定义节点选择器',
                  duration: 1e3,
                  selector: '#customSelector',
                })
              },
              type: 'primary',
              children: '自定义选择器',
            }),
            Object(j.jsx)(v.a, { id: 'customSelector' }),
          ],
        })
      }
      var p = (function (e) {
        Object(o.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(r.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(a.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(j.jsxs)(u.a, {
                  title: 'Notify 消息通知',
                  className: 'pages-notify-index',
                  children: [
                    Object(j.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(j.jsx)(Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '通知类型',
                      padding: !0,
                      children: Object(j.jsx)(demo2_Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '自定义通知',
                      padding: !0,
                      children: Object(j.jsx)(demo3_Demo, {}),
                    }),
                    Object(j.jsx)(f.a, {
                      title: '自定义选择器',
                      padding: !0,
                      children: Object(j.jsx)(demo4_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(s.Component)
    },
  },
])
