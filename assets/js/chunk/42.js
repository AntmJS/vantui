;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
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
      var a = t(591),
        r = t.n(a)
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
      var c = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return c.test(e)
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
        t(590)
        var a = t(574),
          r = t(568),
          c = t(90),
          o = t(737),
          l = t(77),
          i = t(64),
          s = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            u = n.className,
            d = void 0 === u ? '' : u,
            v = n.children,
            f = c.a.useRouter().path
          return (
            Object(i.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(o.a)({ scrollTop: 0 })
              },
              [f],
            ),
            c.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: f }
            }),
            Object(s.jsxs)(r.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(s.jsxs)(r.n, {
                  className: 'demo-nav',
                  children: [
                    Object(s.jsx)(a.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(l.d)()
                      },
                    }),
                    Object(s.jsxs)(r.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                v,
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
      var a = t(39),
        r = t(40),
        c = t(66),
        o = t(65),
        l = t(568),
        i = t(64),
        s = (t(582), t(115)),
        u = (function (e) {
          Object(c.a)(Index, e)
          var n = Object(o.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), n.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    a = e.card
                  return Object(s.jsxs)(l.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(l.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      a
                        ? Object(s.jsx)(l.n, {
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
        })(i.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var a = t(116),
        r = t.n(a),
        c = t(55),
        o = t.n(c),
        l = t(572),
        i = t.n(l),
        s = t(577),
        u = t.n(s),
        d = t(573),
        v = t.n(d),
        f = t(595),
        b = t.n(f),
        j = t(10),
        p = t.n(j),
        m = t(24),
        O = t.n(m),
        h = t(571),
        x = t.n(h),
        y = t(32),
        g = t.n(y),
        C = t(570),
        _ = t.n(C),
        S = t(27),
        w = t.n(S),
        k = t(173),
        N = t.n(k),
        A = t(568),
        T = t(64),
        I = t(569),
        L = t(580)
      function textStyle(e) {
        return Object(I.c)({ 'font-size': Object(L.a)(e.textSize) })
      }
      var z = t(115),
        E = [
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
        var t = O()(e)
        if (x.a) {
          var a = x()(e)
          n &&
            (a = g()(a).call(a, function (n) {
              return _()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            w()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              i()(e, n, a[n])
            })
          else if (N.a) r()(e, N()(a))
          else {
            var c
            w()((c = ownKeys(Object(a)))).call(c, function (n) {
              o()(e, n, _()(a, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          a = e.type,
          r = void 0 === a ? 'circular' : a,
          c = e.color,
          o = e.size,
          l = e.textSize,
          i = e.className,
          s = e.children,
          d = e.style,
          f = v()(e, E),
          j = Object(T.useState)(b()({ length: 12 })),
          m = u()(j, 1)[0]
        return Object(z.jsxs)(
          A.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + I.b('loading', { vertical: t }) + ' ' + i,
                style: I.c([d]),
              },
              f,
            ),
            {},
            {
              children: [
                Object(z.jsx)(A.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((n = { color: c, size: o }),
                    Object(I.c)({
                      color: n.color,
                      width: Object(L.a)(n.size),
                      height: Object(L.a)(n.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(z.jsx)(A.a, {
                      children: p()(m).call(m, function (e, n) {
                        return Object(z.jsx)(
                          A.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(z.jsx)(A.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: l }),
                  children: s,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    587: function (e, n, t) {},
    588: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Button
      })
      var a = t(116),
        r = t.n(a),
        c = t(55),
        o = t.n(c),
        l = t(24),
        i = t.n(l),
        s = t(571),
        u = t.n(s),
        d = t(32),
        v = t.n(d),
        f = t(570),
        b = t.n(f),
        j = t(27),
        p = t.n(j),
        m = t(173),
        O = t.n(m),
        h = t(572),
        x = t.n(h),
        y = t(573),
        g = t.n(y),
        C = t(90),
        _ = t(568),
        S = t(569),
        w = t(574),
        k = t(586),
        N = t(28),
        A = t.n(N),
        T = t(583)
      function rootStyle(e) {
        var n
        if (!e.color) return ''
        var t = {
          color: e.plain ? e.color : '#fff',
          background: e.plain ? null : e.color,
        }
        return (
          -1 !== A()((n = e.color)).call(n, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = e.color),
          Object(T.a)([t])
        )
      }
      var I = t(115),
        L = [
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
        var t = i()(e)
        if (u.a) {
          var a = u()(e)
          n &&
            (a = v()(a).call(a, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (O.a) r()(e, O()(a))
          else {
            var c
            p()((c = ownKeys(Object(a)))).call(c, function (n) {
              o()(e, n, b()(a, n))
            })
          }
        }
        return e
      }
      var z = !1,
        E = 10
      if (!z)
        var B = setInterval(function () {
          if (--E > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                a = t.innerHTML
              if (a && /^taro-button-core{/.test(a)) {
                t.remove(), (z = !0), B && clearInterval(B)
                break
              }
            }
          else B && clearInterval(B)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          a = void 0 === t ? 'default' : t,
          r = e.size,
          c = void 0 === r ? 'normal' : r,
          o = e.block,
          l = e.round,
          i = e.plain,
          s = e.square,
          u = e.loading,
          d = e.disabled,
          v = e.hairline,
          f = e.color,
          b = e.loadingSize,
          j = void 0 === b ? C.a.pxTransform(40) : b,
          p = e.loadingType,
          m = void 0 === p ? 'circular' : p,
          O = e.loadingText,
          h = e.icon,
          x = e.classPrefix,
          y = void 0 === x ? 'van-icon' : x,
          N = e.onClick,
          A = e.children,
          T = e.style,
          z = e.className,
          E = g()(e, L)
        return Object(I.jsx)(
          _.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  S.b('button', [
                    a,
                    c,
                    {
                      block: o,
                      round: l,
                      plain: i,
                      square: s,
                      loading: u,
                      disabled: d,
                      hairline: v,
                      unclickable: d || u,
                    },
                  ]) +
                  ' ' +
                  (v ? 'van-hairline--surround' : '') +
                  ' '.concat(z || ''),
                hoverClass: 'van-button--active hover-class',
                style: S.c([rootStyle({ plain: i, color: f }), T]),
                onClick: d || u ? void 0 : N,
              },
              E,
            ),
            {},
            {
              children: u
                ? Object(I.jsxs)(_.n, {
                    style: 'display: flex',
                    children: [
                      Object(I.jsx)(k.a, {
                        className: 'loading-class',
                        size: j,
                        type: m,
                        color:
                          ((n = { type: a, color: f, plain: i }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      O &&
                        Object(I.jsx)(_.n, {
                          className: 'van-button__loading-text',
                          children: O,
                        }),
                    ],
                  })
                : Object(I.jsxs)(_.a, {
                    children: [
                      h &&
                        Object(I.jsx)(w.a, {
                          size: '1.2em',
                          name: h,
                          classPrefix: y,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(I.jsx)(_.n, {
                        className: 'van-button__text',
                        children: A,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      n.b = Button
    },
    594: function (e, n, t) {
      'use strict'
      t(576), t(587), t(584), t(585), t(598)
    },
    598: function (e, n, t) {},
    599: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return useTransition
      })
      var a = t(577),
        r = t.n(a),
        c = t(6),
        o = t.n(c),
        l = t(21),
        i = t.n(l),
        s = t(64),
        u = t(575)
      function useTransition(e) {
        var n = e.show,
          t = void 0 !== n && n,
          a = e.duration,
          c = void 0 === a ? 300 : a,
          l = e.name,
          d = void 0 === l ? 'fade' : l,
          v = e.onBeforeEnter,
          f = e.onBeforeLeave,
          b = e.onAfterEnter,
          j = e.onAfterLeave,
          p = e.onEnter,
          m = e.onLeave,
          O = e.enterClass,
          h = e.enterActiveClass,
          x = e.enterToClass,
          y = e.leaveClass,
          g = e.leaveActiveClass,
          C = e.leaveToClass,
          _ = Object(s.useRef)(!1),
          S = Object(s.useRef)(''),
          w = Object(s.useState)(!1),
          k = r()(w, 2),
          N = k[0],
          A = k[1],
          T = Object(s.useState)(!1),
          I = r()(T, 2),
          L = I[0],
          z = I[1],
          E = Object(s.useState)(0),
          B = r()(E, 2),
          D = B[0],
          K = B[1],
          P = Object(s.useState)(''),
          F = r()(P, 2),
          q = F[0],
          M = F[1],
          R = Object(s.useMemo)(
            function () {
              var e,
                n,
                t = (function getClassNames(e) {
                  var n, t, a, r
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
                    leave: o()((a = 'van-'.concat(e, '-leave van-'))).call(
                      a,
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
                })(d)
              d ||
                ((t.enter += ' '.concat(null != O ? O : '')),
                (t['enter-to'] += o()(
                  (e = ''.concat(null != x ? x : '', ' ')),
                ).call(e, null != h ? h : '', ' ')),
                (t.leave += '  '.concat(null != y ? y : '')),
                (t['leave-to'] += o()(
                  (n = ' '.concat(null != C ? C : '', ' ')),
                ).call(n, null != g ? g : '')))
              return t
            },
            [h, O, x, g, y, C, d],
          ),
          U = Object(s.useCallback)(
            function () {
              _.current ||
                ((_.current = !0),
                'enter' === S.current ? null == b || b() : null == j || j(),
                !t && N && A(!1))
            },
            [N, b, j, t],
          ),
          V = Object(s.useCallback)(
            function () {
              var e = Object(u.d)(c) ? c.enter : c
              ;(S.current = 'enter'),
                null == v || v(),
                requestAnimationFrame(function () {
                  'enter' === S.current &&
                    (null == p || p(),
                    z(!0),
                    A(!0),
                    M(R.enter),
                    K(e),
                    requestAnimationFrame(function () {
                      'enter' === S.current &&
                        ((_.current = !1),
                        setTimeout(function () {
                          return U()
                        }, e),
                        M(R['enter-to']))
                    }))
                })
            },
            [c, v, p, R, U],
          ),
          J = Object(s.useCallback)(
            function () {
              if (N) {
                var e = Object(u.d)(c) ? c.leave : c
                ;(S.current = 'leave'),
                  null == f || f(),
                  requestAnimationFrame(function () {
                    'leave' === S.current &&
                      (null == m || m(),
                      M(R.leave),
                      K(e),
                      requestAnimationFrame(function () {
                        'leave' === S.current &&
                          ((_.current = !1),
                          setTimeout(function () {
                            return U()
                          }, e),
                          M(R['leave-to']))
                      }))
                  })
              }
            },
            [R, N, c, f, m, U],
          )
        return (
          Object(s.useEffect)(
            function () {
              !t || (q && i()(q).call(q, R['enter-to'])) || V(), t || J()
            },
            [t],
          ),
          {
            display: N,
            inited: L,
            currentDuration: D,
            classes: q,
            onTransitionEnd: U,
          }
        )
      }
    },
    600: function (e, n, t) {
      'use strict'
      var a = t(116),
        r = t.n(a),
        c = t(55),
        o = t.n(c),
        l = t(24),
        i = t.n(l),
        s = t(571),
        u = t.n(s),
        d = t(32),
        v = t.n(d),
        f = t(570),
        b = t.n(f),
        j = t(27),
        p = t.n(j),
        m = t(173),
        O = t.n(m),
        h = t(572),
        x = t.n(h),
        y = t(573),
        g = t.n(y),
        C = t(568),
        _ = t(569)
      var S = t(599),
        w = t(115),
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
        var t = i()(e)
        if (u.a) {
          var a = u()(e)
          n &&
            (a = v()(a).call(a, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              x()(e, n, a[n])
            })
          else if (O.a) r()(e, O()(a))
          else {
            var c
            p()((c = ownKeys(Object(a)))).call(c, function (n) {
              o()(e, n, b()(a, n))
            })
          }
        }
        return e
      }
      n.a = function Transition(e) {
        var n,
          t = e.onBeforeEnter,
          a = e.onBeforeLeave,
          r = e.onAfterEnter,
          c = e.onAfterLeave,
          o = e.onEnter,
          l = e.onLeave,
          i = e.duration,
          s = e.name,
          u = e.show,
          d = e.children,
          v = e.style,
          f = e.className,
          b = e.enterClass,
          j = e.enterActiveClass,
          p = e.enterToClass,
          m = e.leaveClass,
          O = e.leaveActiveClass,
          h = e.leaveToClass,
          x = g()(e, k),
          y = Object(S.a)({
            show: u,
            duration: i,
            name: s,
            enterClass: b,
            enterActiveClass: j,
            enterToClass: p,
            leaveClass: m,
            leaveActiveClass: O,
            leaveToClass: h,
            onBeforeEnter: t,
            onBeforeLeave: a,
            onAfterEnter: r,
            onAfterLeave: c,
            onEnter: o,
            onLeave: l,
          }),
          N = y.currentDuration,
          A = y.classes,
          T = y.display
        return Object(w.jsx)(w.Fragment, {
          children: Object(w.jsx)(
            C.n,
            _objectSpread(
              _objectSpread(
                {
                  className: 'van-transition ' + A + ' '.concat(f || ''),
                  style: _.c([
                    ((n = { currentDuration: N, display: T }),
                    _.c([
                      {
                        '-webkit-transition-duration': n.currentDuration + 'ms',
                        'transition-duration': n.currentDuration + 'ms',
                      },
                      n.display ? null : 'display: none',
                      n.style,
                    ])),
                    v,
                  ]),
                },
                x,
              ),
              {},
              { catchMove: !0, children: d },
            ),
          ),
        })
      }
    },
    602: function (e, n, t) {},
    604: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Index
      })
      var a = t(116),
        r = t.n(a),
        c = t(55),
        o = t.n(c),
        l = t(24),
        i = t.n(l),
        s = t(571),
        u = t.n(s),
        d = t(32),
        v = t.n(d),
        f = t(570),
        b = t.n(f),
        j = t(27),
        p = t.n(j),
        m = t(173),
        O = t.n(m),
        h = t(577),
        x = t.n(h),
        y = t(572),
        g = t.n(y),
        C = t(573),
        _ = t.n(C),
        S = t(64),
        w = t(569),
        k = t(600),
        N = t(115),
        A = [
          'show',
          'zIndex',
          'style',
          'className',
          'lockScroll',
          'duration',
          'setOuterShow',
          'children',
        ]
      function ownKeys(e, n) {
        var t = i()(e)
        if (u.a) {
          var a = u()(e)
          n &&
            (a = v()(a).call(a, function (n) {
              return b()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            p()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              g()(e, n, a[n])
            })
          else if (O.a) r()(e, O()(a))
          else {
            var c
            p()((c = ownKeys(Object(a)))).call(c, function (n) {
              o()(e, n, b()(a, n))
            })
          }
        }
        return e
      }
      function Overlay(e) {
        var n = e.show,
          t = e.zIndex,
          a = e.style,
          r = e.className,
          c = e.lockScroll,
          o = void 0 === c || c,
          l = e.duration,
          i = void 0 === l ? 300 : l,
          s = e.setOuterShow,
          u = e.children,
          d = _()(e, A),
          v = Object(S.useCallback)(function (e) {
            e.stopPropagation(), e.preventDefault()
          }, [])
        return o
          ? Object(N.jsx)(
              k.a,
              _objectSpread(
                _objectSpread(
                  {
                    show: n,
                    className: 'van-overlay' + '  '.concat(r),
                    style: w.c([{ 'z-index': t }, a]),
                    duration: i,
                    onTouchMove: v,
                    onAfterLeave: function onAfterLeave() {
                      return s(!1)
                    },
                  },
                  d,
                ),
                {},
                { children: u },
              ),
            )
          : Object(N.jsx)(
              k.a,
              _objectSpread(
                _objectSpread(
                  {
                    show: n,
                    className: 'van-overlay' + '  '.concat(r || ''),
                    style: w.c([{ 'z-index': t }, a]),
                    duration: i,
                    onAfterLeave: function onAfterLeave() {
                      return s(!1)
                    },
                  },
                  d,
                ),
                {},
                { children: u },
              ),
            )
      }
      function Index(e) {
        var n = e.show,
          t = Object(S.useState)(!1),
          a = x()(t, 2),
          r = a[0],
          c = a[1]
        return (
          Object(S.useEffect)(
            function () {
              n && c(!0)
            },
            [n],
          ),
          Object(N.jsx)(N.Fragment, {
            children: r
              ? Object(N.jsx)(Overlay, _objectSpread({ setOuterShow: c }, e))
              : Object(N.jsx)(N.Fragment, {}),
          })
        )
      }
    },
    606: function (e, n, t) {},
    924: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return O
        })
      var a = t(39),
        r = t(40),
        c = t(175),
        o = t(66),
        l = t(65),
        i = t(91),
        s = t(64),
        u = t.n(s),
        d = t(578),
        v = t(579),
        f = (t(576), t(602), t(606), t(604)),
        b = (t(594), t(588)),
        j = t(174),
        p = t(568),
        m = t(115)
      function Demo() {
        var e = u.a.useState(!1),
          n = Object(j.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(m.jsxs)(p.n, {
          children: [
            Object(m.jsx)(b.b, {
              type: 'primary',
              onClick: function onClick() {
                return a(!0)
              },
              children: '显示遮罩层',
            }),
            Object(m.jsx)(f.a, {
              show: t,
              onClick: function onClick() {
                return a(!1)
              },
            }),
          ],
        })
      }
      function demo2_Demo() {
        var e = u.a.useState(!1),
          n = Object(j.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(m.jsxs)(p.n, {
          children: [
            Object(m.jsx)(b.b, {
              type: 'primary',
              onClick: function onClick() {
                return a(!0)
              },
              children: '嵌入内容',
            }),
            Object(m.jsx)(f.a, {
              show: t,
              onClick: function onClick() {
                return a(!1)
              },
              children: Object(m.jsx)(p.n, {
                class: 'wrapper',
                children: Object(m.jsx)(p.n, { class: 'block' }),
              }),
            }),
          ],
        })
      }
      var O = (function (e) {
        Object(o.a)(Index, e)
        var n = Object(l.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = n.call(this)),
            Object(i.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(m.jsxs)(d.a, {
                  title: 'Overlay 遮罩层',
                  className: 'pages-overlay-index',
                  children: [
                    Object(m.jsx)(v.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(m.jsx)(Demo, {}),
                    }),
                    Object(m.jsx)(v.a, {
                      title: '嵌入内容',
                      padding: !0,
                      children: Object(m.jsx)(demo2_Demo, {}),
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
