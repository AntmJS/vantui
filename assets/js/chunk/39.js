;(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
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
      var c = t(590),
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
        var c = t(576),
          r = t(568),
          a = t(90),
          o = t(739),
          i = t(77),
          s = t(64),
          l = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            u = n.className,
            f = void 0 === u ? '' : u,
            d = n.children,
            b = a.a.useRouter().path
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
            a.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(l.jsxs)(r.n, {
              className: 'demo-page '.concat(f),
              children: [
                Object(l.jsxs)(r.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(c.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(i.d)()
                      },
                    }),
                    Object(l.jsxs)(r.n, {
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
      var c = t(39),
        r = t(40),
        a = t(66),
        o = t(65),
        i = t(568),
        s = t(64),
        l = (t(582), t(115)),
        u = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(o.a)(Index)
          function Index() {
            return Object(c.a)(this, Index), n.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    c = e.card
                  return Object(l.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(l.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
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
    581: function (e, n, t) {},
    582: function (e, n, t) {},
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
      var c,
        r = t(148),
        a = t.n(r),
        o = t(24),
        i = t.n(o),
        s = t(21),
        l = t.n(s),
        u = t(5),
        f = t.n(u),
        d = (t(567), t(863)),
        b = (t(866), t(90)),
        v = t(790),
        j = (t(77), t(575))
      t(596)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == c && (c = Object(d.a)()), c
      }
      function addUnit(e) {
        if (Object(j.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(v.a)()
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
              function (t, c) {
                return l()(n).call(n, c) || (t[c] = e[c]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new f.a(function (t) {
          var c = Object(v.a)()
          e && (c = c.in(e)),
            c
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
          var c = Object(v.a)()
          e && (c = c.in(e)),
            c
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
      var c,
        r = t(117),
        a = t.n(r),
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
            for (var c = 0; c < t; c++) {
              var r = a()(e[c], 10),
                o = a()(n[c], 10)
              if (r > o) return 1
              if (r < o) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == c && (c = Object(o.a)()), c
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
    599: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return useTransition
      })
      var c = t(574),
        r = t.n(c),
        a = t(6),
        o = t.n(a),
        i = t(21),
        s = t.n(i),
        l = t(64),
        u = t(575)
      function useTransition(e) {
        var n = e.show,
          t = void 0 !== n && n,
          c = e.duration,
          a = void 0 === c ? 300 : c,
          i = e.name,
          f = void 0 === i ? 'fade' : i,
          d = e.onBeforeEnter,
          b = e.onBeforeLeave,
          v = e.onAfterEnter,
          j = e.onAfterLeave,
          m = e.onEnter,
          O = e.onLeave,
          p = e.enterClass,
          h = e.enterActiveClass,
          y = e.enterToClass,
          g = e.leaveClass,
          x = e.leaveActiveClass,
          C = e.leaveToClass,
          _ = Object(l.useRef)(!1),
          S = Object(l.useRef)(''),
          k = Object(l.useState)(!1),
          w = r()(k, 2),
          A = w[0],
          N = w[1],
          I = Object(l.useState)(!1),
          T = r()(I, 2),
          E = T[0],
          K = T[1],
          D = Object(l.useState)(0),
          B = r()(D, 2),
          L = B[0],
          R = B[1],
          F = Object(l.useState)(''),
          M = r()(F, 2),
          U = M[0],
          P = M[1],
          q = Object(l.useMemo)(
            function () {
              var e,
                n,
                t = (function getClassNames(e) {
                  var n, t, c, r
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
                    leave: o()((c = 'van-'.concat(e, '-leave van-'))).call(
                      c,
                      e,
                      '-leave-active leave-class leave-active-class',
                    ),
                    'leave-to': o()(
                      (r = 'van-'.concat(e, '-leave-to van-')),
                    ).call(
                      r,
                      e,
                      '-leave-active leave-to-class leave-active-class',
                    ),
                  }
                })(f)
              f ||
                ((t.enter += ' '.concat(null != p ? p : '')),
                (t['enter-to'] += o()(
                  (e = ''.concat(null != y ? y : '', ' ')),
                ).call(e, null != h ? h : '', ' ')),
                (t.leave += '  '.concat(null != g ? g : '')),
                (t['leave-to'] += o()(
                  (n = ' '.concat(null != C ? C : '', ' ')),
                ).call(n, null != x ? x : '')))
              return t
            },
            [h, p, y, x, g, C, f],
          ),
          V = Object(l.useCallback)(
            function () {
              _.current ||
                ((_.current = !0),
                'enter' === S.current ? null == v || v() : null == j || j(),
                !t && A && N(!1))
            },
            [A, v, j, t],
          ),
          z = Object(l.useCallback)(
            function () {
              var e = Object(u.d)(a) ? a.enter : a
              ;(S.current = 'enter'),
                null == d || d(),
                requestAnimationFrame(function () {
                  'enter' === S.current &&
                    (null == m || m(),
                    K(!0),
                    N(!0),
                    P(q.enter),
                    R(e),
                    requestAnimationFrame(function () {
                      'enter' === S.current &&
                        ((_.current = !1),
                        setTimeout(function () {
                          return V()
                        }, e),
                        P(q['enter-to']))
                    }))
                })
            },
            [a, d, m, q, V],
          ),
          H = Object(l.useCallback)(
            function () {
              if (A) {
                var e = Object(u.d)(a) ? a.leave : a
                ;(S.current = 'leave'),
                  null == b || b(),
                  requestAnimationFrame(function () {
                    'leave' === S.current &&
                      (null == O || O(),
                      P(q.leave),
                      R(e),
                      requestAnimationFrame(function () {
                        'leave' === S.current &&
                          ((_.current = !1),
                          setTimeout(function () {
                            return V()
                          }, e),
                          P(q['leave-to']))
                      }))
                  })
              }
            },
            [q, A, a, b, O, V],
          )
        return (
          Object(l.useEffect)(
            function () {
              !t || (U && s()(U).call(U, q['enter-to'])) || z(), t || H()
            },
            [t],
          ),
          {
            display: A,
            inited: E,
            currentDuration: L,
            classes: U,
            onTransitionEnd: V,
          }
        )
      }
    },
    600: function (e, n, t) {
      'use strict'
      var c = t(116),
        r = t.n(c),
        a = t(55),
        o = t.n(a),
        i = t(24),
        s = t.n(i),
        l = t(571),
        u = t.n(l),
        f = t(32),
        d = t.n(f),
        b = t(570),
        v = t.n(b),
        j = t(27),
        m = t.n(j),
        O = t(173),
        p = t.n(O),
        h = t(572),
        y = t.n(h),
        g = t(573),
        x = t.n(g),
        C = t(568),
        _ = t(569)
      var S = t(599),
        k = t(115),
        w = [
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
        var t = s()(e)
        if (u.a) {
          var c = u()(e)
          n &&
            (c = d()(c).call(c, function (n) {
              return v()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            m()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              y()(e, n, c[n])
            })
          else if (p.a) r()(e, p()(c))
          else {
            var a
            m()((a = ownKeys(Object(c)))).call(a, function (n) {
              o()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      n.a = function Transition(e) {
        var n,
          t = e.onBeforeEnter,
          c = e.onBeforeLeave,
          r = e.onAfterEnter,
          a = e.onAfterLeave,
          o = e.onEnter,
          i = e.onLeave,
          s = e.duration,
          l = e.name,
          u = e.show,
          f = e.children,
          d = e.style,
          b = e.className,
          v = e.enterClass,
          j = e.enterActiveClass,
          m = e.enterToClass,
          O = e.leaveClass,
          p = e.leaveActiveClass,
          h = e.leaveToClass,
          y = x()(e, w),
          g = Object(S.a)({
            show: u,
            duration: s,
            name: l,
            enterClass: v,
            enterActiveClass: j,
            enterToClass: m,
            leaveClass: O,
            leaveActiveClass: p,
            leaveToClass: h,
            onBeforeEnter: t,
            onBeforeLeave: c,
            onAfterEnter: r,
            onAfterLeave: a,
            onEnter: o,
            onLeave: i,
          }),
          A = g.currentDuration,
          N = g.classes,
          I = g.display
        return Object(k.jsx)(k.Fragment, {
          children: Object(k.jsx)(
            C.n,
            _objectSpread(
              _objectSpread(
                {
                  className: 'van-transition ' + N + ' '.concat(b || ''),
                  style: _.c([
                    ((n = { currentDuration: A, display: I }),
                    _.c([
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
                y,
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
    743: function (e, n, t) {
      'use strict'
      var c = t(116),
        r = t.n(c),
        a = t(55),
        o = t.n(a),
        i = t(572),
        s = t.n(i),
        l = t(573),
        u = t.n(l),
        f = t(5),
        d = t.n(f),
        b = t(27),
        v = t.n(b),
        j = t(24),
        m = t.n(j),
        O = t(571),
        p = t.n(O),
        h = t(32),
        y = t.n(h),
        g = t(570),
        x = t.n(g),
        C = t(173),
        _ = t.n(C),
        S = t(568),
        k = t(64),
        w = t(569),
        A = t(115),
        N = ['activeKey', 'onChange', 'className', 'children', 'style']
      function ownKeys(e, n) {
        var t = m()(e)
        if (p.a) {
          var c = p()(e)
          n &&
            (c = y()(c).call(c, function (n) {
              return x()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            v()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              s()(e, n, c[n])
            })
          else if (_.a) r()(e, _()(c))
          else {
            var a
            v()((a = ownKeys(Object(c)))).call(a, function (n) {
              o()(e, n, x()(c, n))
            })
          }
        }
        return e
      }
      n.a = function Sidebar(e) {
        var n = e.activeKey,
          t = e.onChange,
          c = e.className,
          r = e.children,
          a = e.style,
          o = u()(e, N),
          i = Object(k.useRef)([]),
          s = Object(k.useCallback)(function (e) {
            var n = i.current
            return n && n.length
              ? (v()(n).call(n, function (e) {
                  e.setActive(!1)
                }),
                n[e] && n[e].setActive(!0),
                d.a.resolve())
              : d.a.resolve()
          }, [])
        Object(k.useEffect)(
          function () {
            s(n)
          },
          [s, n],
        )
        var l = Object(k.useCallback)(function (e, n) {
            i.current[e] = n
          }, []),
          f = Object(k.useMemo)(
            function () {
              var e = []
              return (
                r &&
                  Array.isArray(r) &&
                  v()(r).call(r, function (n, c) {
                    e.push(
                      Object(k.cloneElement)(n, {
                        key: c,
                        setChildren: l,
                        index: c,
                        setAction: s,
                        onChange: t,
                      }),
                    )
                  }),
                e
              )
            },
            [r, t, s, l],
          )
        return Object(A.jsx)(
          S.n,
          _objectSpread(
            _objectSpread(
              { style: w.c([a]), className: 'van-sidebar  '.concat(c) },
              o,
            ),
            {},
            { children: f },
          ),
        )
      }
    },
    744: function (e, n, t) {
      'use strict'
      var c = t(116),
        r = t.n(c),
        a = t(55),
        o = t.n(a),
        i = t(24),
        s = t.n(i),
        l = t(571),
        u = t.n(l),
        f = t(32),
        d = t.n(f),
        b = t(570),
        v = t.n(b),
        j = t(27),
        m = t.n(j),
        O = t(173),
        p = t.n(O),
        h = t(572),
        y = t.n(h),
        g = t(574),
        x = t.n(g),
        C = t(573),
        _ = t.n(C),
        S = t(568),
        k = t(64),
        w = t(569),
        A = t(670),
        N = t(115),
        I = [
          'dot',
          'badge',
          'index',
          'renderTitle',
          'setChildren',
          'setAction',
          'onClick',
          'onChange',
          'info',
          'title',
          'disabled',
          'className',
          'style',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (u.a) {
          var c = u()(e)
          n &&
            (c = d()(c).call(c, function (n) {
              return v()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            m()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              y()(e, n, c[n])
            })
          else if (p.a) r()(e, p()(c))
          else {
            var a
            m()((a = ownKeys(Object(c)))).call(a, function (n) {
              o()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      n.a = function SidebarItem(e) {
        var n = e.dot,
          t = e.badge,
          c = e.index,
          r = e.renderTitle,
          a = e.setChildren,
          o = e.setAction,
          i = e.onClick,
          s = e.onChange,
          l = e.info,
          u = e.title,
          f = e.disabled,
          d = e.className,
          b = e.style,
          v = _()(e, I),
          j = Object(k.useState)(),
          m = x()(j, 2),
          O = m[0],
          p = m[1],
          h = Object(k.useCallback)(function (e) {
            return p(e)
          }, [])
        Object(k.useEffect)(
          function () {
            null == a || a(c, { setActive: h, selected: O })
          },
          [h, c, a, O],
        )
        var y = Object(k.useCallback)(
          function () {
            f ||
              o(c).then(function () {
                null == s || s({ detail: c }), null == i || i(c)
              })
          },
          [f, c, s, i, o],
        )
        return Object(N.jsx)(
          S.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  w.b('sidebar-item', { selected: O, disabled: f }) +
                  ' ' +
                  (O ? 'active-class' : '') +
                  ' ' +
                  (f ? 'disabled-class' : '') +
                  ' custom-class ' +
                  d,
                hoverClass: 'van-sidebar-item--hover',
                hoverStayTime: 70,
                onClick: y,
                style: w.c([b]),
              },
              v,
            ),
            {},
            {
              children: Object(N.jsxs)(S.n, {
                className: 'van-sidebar-item__text',
                children: [
                  (null != t || null !== l || n) &&
                    Object(N.jsx)(A.b, { dot: n, info: null != t ? t : l }),
                  u ? Object(N.jsx)(S.n, { children: u }) : r,
                ],
              }),
            },
          ),
        )
      }
    },
    745: function (e, n, t) {
      'use strict'
      var c = t(116),
        r = t.n(c),
        a = t(55),
        o = t.n(a),
        i = t(24),
        s = t.n(i),
        l = t(571),
        u = t.n(l),
        f = t(32),
        d = t.n(f),
        b = t(570),
        v = t.n(b),
        j = t(27),
        m = t.n(j),
        O = t(173),
        p = t.n(O),
        h = t(572),
        y = t.n(h),
        g = t(573),
        x = t.n(g),
        C = t(574),
        _ = t.n(C),
        S = t(0),
        k = t.n(S),
        w = t(567),
        A = t(64),
        N = t(568),
        I = t(569),
        T = t(600),
        E = t(593),
        K = t(580)
      function notifyStyle(e) {
        return Object(I.c)({ background: e.background, color: e.color })
      }
      var D = t(6),
        B = t.n(D),
        L = new (t(90).a.Events)()
      function trigger(e) {
        for (
          var n, t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          c[r - 1] = arguments[r]
        return L.trigger.apply(L, B()((n = [e])).call(n, c))
      }
      function on(e, n) {
        return L.on(e, n)
      }
      function off(e, n) {
        return L.off(e, n)
      }
      var R = function Notify(e) {
        trigger('notify_show', e)
      }
      R.clear = function (e) {
        trigger('notify_clear', e)
      }
      var F = R,
        M = t(115),
        U = ['style', 'className', 'zIndex']
      function ownKeys(e, n) {
        var t = s()(e)
        if (u.a) {
          var c = u()(e)
          n &&
            (c = d()(c).call(c, function (n) {
              return v()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            m()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              y()(e, n, c[n])
            })
          else if (p.a) r()(e, p()(c))
          else {
            var a
            m()((a = ownKeys(Object(c)))).call(a, function (n) {
              o()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      var P = {
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
        q = null
      function es_notify_Notify(e) {
        var n = Object(A.useState)({
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
          t = _()(n, 2),
          c = t[0],
          r = t[1],
          a = e.style,
          o = e.className,
          i = e.zIndex,
          s = x()(e, U)
        Object(A.useEffect)(
          function () {
            r(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { id: e.id || 'van-notify' },
              )
            })
          },
          [e],
        ),
          Object(A.useEffect)(function () {
            var e = Object(E.d)().statusBarHeight
            r(function (n) {
              return _objectSpread(
                _objectSpread({}, n),
                {},
                { statusBarHeight: e },
              )
            })
          }, []),
          Object(A.useEffect)(function () {
            return (
              on('notify_show', function (e) {
                var n = k()(
                  k()({}, P),
                  (function parseOptions(e) {
                    return null == e
                      ? {}
                      : 'string' == typeof e
                      ? { message: e }
                      : e
                  })(e),
                )
                ;(n.id === c.id || (!n.id && 'van-notify' === c.id)) &&
                  (r(function (e) {
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
        var l,
          u = Object(A.useCallback)(function (e) {
            clearTimeout(q),
              r(function (e) {
                return _objectSpread(_objectSpread({}, e), {}, { show: !1 })
              }),
              Object(w.a)(function () {
                var n
                null == e ||
                  null === (n = e.onClose) ||
                  void 0 === n ||
                  n.call(e)
              })
          }, []),
          f = Object(A.useCallback)(
            function (e) {
              clearTimeout(q),
                r(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, { show: !0 })
                }),
                Object(w.a)(function () {
                  var n
                  null == e ||
                    null === (n = e.onOpened) ||
                    void 0 === n ||
                    n.call(e)
                })
              var n = e.duration || c.duration
              n > 0 &&
                n !== 1 / 0 &&
                (q = setTimeout(function () {
                  trigger('notify_clear', e)
                }, n))
            },
            [c.duration],
          ),
          d = Object(A.useCallback)(
            function (e) {
              var n
              null === (n = c.onClick) || void 0 === n || n.call(c, e)
            },
            [c],
          )
        return Object(M.jsx)(
          T.a,
          _objectSpread(
            _objectSpread(
              {
                name: 'slide-down',
                show: c.show,
                className: 'van-notify__container '.concat(o),
                style: I.c([
                  ((l = i ? { zIndex: i, top: c.top } : { top: c.top }),
                  Object(I.c)({
                    'z-index': l.zIndex,
                    top: Object(K.a)(l.top),
                  })),
                  a,
                ]),
                onClick: d,
              },
              s,
            ),
            {},
            {
              children: Object(M.jsxs)(N.n, {
                className: 'van-notify van-notify--' + c.type,
                style: notifyStyle({
                  background: c.background,
                  color: c.color,
                }),
                children: [
                  c.safeAreaInsetTop &&
                    Object(M.jsx)(N.n, {
                      style: 'height: ' + c.statusBarHeight + 'px',
                    }),
                  Object(M.jsx)(N.k, { children: c.message }),
                ],
              }),
            },
          ),
        )
      }
      ;(es_notify_Notify.show = F), (es_notify_Notify.clear = F.clear)
      n.a = es_notify_Notify
    },
    779: function (e, n, t) {},
    784: function (e, n, t) {},
    785: function (e, n, t) {},
    906: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return m
        })
      var c = t(39),
        r = t(40),
        a = t(175),
        o = t(66),
        i = t(65),
        s = t(91),
        l = t(64),
        u = t(578),
        f = t(579),
        d = (t(577), t(784), t(743)),
        b = (t(584), t(785), t(744)),
        v = t(115)
      function Demo() {
        return Object(v.jsxs)(d.a, {
          activeKey: 0,
          children: [
            Object(v.jsx)(b.a, { title: '标签名' }),
            Object(v.jsx)(b.a, { title: '标签名' }),
            Object(v.jsx)(b.a, { title: '标签名' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(v.jsxs)(d.a, {
          activeKey: 1,
          children: [
            Object(v.jsx)(b.a, { title: '标签名', dot: !0 }),
            Object(v.jsx)(b.a, { title: '标签名', badge: '5' }),
            Object(v.jsx)(b.a, { title: '标签名', badge: '99+' }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(v.jsxs)(d.a, {
          activeKey: 2,
          children: [
            Object(v.jsx)(b.a, { title: '标签名', dot: !0 }),
            Object(v.jsx)(b.a, { title: '标签名', disabled: !0 }),
            Object(v.jsx)(b.a, { title: '标签名', badge: '66+' }),
          ],
        })
      }
      t(742)
      var j = t(745)
      function demo4_Demo() {
        return Object(v.jsxs)(v.Fragment, {
          children: [
            Object(v.jsxs)(d.a, {
              activeKey: 0,
              onChange: function onChange(e) {
                return j.a.show({ type: 'primary', message: e.detail })
              },
              children: [
                Object(v.jsx)(b.a, { title: '标签名1' }),
                Object(v.jsx)(b.a, { title: '标签名2' }),
                Object(v.jsx)(b.a, { title: '标签名3' }),
              ],
            }),
            Object(v.jsx)(j.a, {}),
          ],
        })
      }
      var m = (function (e) {
        Object(o.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(s.a)(Object(a.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(v.jsxs)(u.a, {
                  title: 'Sidebar 侧边导航',
                  className: 'pages-sidebar-index',
                  children: [
                    Object(v.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(v.jsx)(Demo, {}),
                    }),
                    Object(v.jsx)(f.a, {
                      title: '徽标提示',
                      padding: !0,
                      children: Object(v.jsx)(demo2_Demo, {}),
                    }),
                    Object(v.jsx)(f.a, {
                      title: '禁用选项',
                      padding: !0,
                      children: Object(v.jsx)(demo3_Demo, {}),
                    }),
                    Object(v.jsx)(f.a, {
                      title: '监听切换事件',
                      padding: !0,
                      children: Object(v.jsx)(demo4_Demo, {}),
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
