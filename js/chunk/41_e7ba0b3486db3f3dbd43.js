/*! For license information please see 41_e7ba0b3486db3f3dbd43.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
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
      var r = t(591),
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
      var o = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        i = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(e) {
        return o.test(e)
      }
      function isVideoUrl(e) {
        return i.test(e)
      }
    },
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var r = t(574),
          c = t(568),
          o = t(90),
          i = t(736),
          a = t(77),
          s = t(64),
          u = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            l = n.className,
            d = void 0 === l ? '' : l,
            f = n.children,
            b = o.a.useRouter().path
          return (
            Object(s.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
              },
              [b],
            ),
            o.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(u.jsxs)(c.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(u.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(u.jsx)(r.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(a.d)()
                      },
                    }),
                    Object(u.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                f,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return l
      })
      var r = t(39),
        c = t(40),
        o = t(66),
        i = t(65),
        a = t(568),
        s = t(64),
        u = (t(582), t(115)),
        l = (function (e) {
          Object(o.a)(Index, e)
          var n = Object(i.a)(Index)
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
                  return Object(u.jsxs)(a.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(u.jsx)(a.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      r
                        ? Object(u.jsx)(a.n, {
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
    594: function (e, n, t) {
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
        o = t.n(c),
        i = t(24),
        a = t.n(i),
        s = t(21),
        u = t.n(s),
        l = t(5),
        d = t.n(l),
        f = (t(567), t(862)),
        b = (t(865), t(90)),
        j = t(789),
        m = (t(77), t(575))
      t(596)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(f.a)()), r
      }
      function addUnit(e) {
        if (Object(m.b)(e))
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(j.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(m.e)(e)
          ? o()((t = a()(e))).call(
              t,
              function (t, r) {
                return u()(n).call(n, r) || (t[r] = e[r]), t
              },
              {},
            )
          : {}
      }
      function getRect(e, n) {
        return new d.a(function (t) {
          var r = Object(j.a)()
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
        return new d.a(function (t) {
          var r = Object(j.a)()
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
        return Object(m.f)(e) ? e : d.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return m.b
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
        o = t.n(c),
        i = t(862),
        a = t(863)
      t(864)
      function gte(e) {
        return (
          (function compareVersion(e, n) {
            ;(e = e.split('.')), (n = n.split('.'))
            for (var t = Math.max(e.length, n.length); e.length < t; )
              e.push('0')
            for (; n.length < t; ) n.push('0')
            for (var r = 0; r < t; r++) {
              var c = o()(e[r], 10),
                i = o()(n[r], 10)
              if (c > i) return 1
              if (c < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == r && (r = Object(i.a)()), r
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(a.a)('nextTick')
      }
    },
    617: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(665)
    },
    618: function (e, n, t) {
      'use strict'
      var r = t(116),
        c = t.n(r),
        o = t(55),
        i = t.n(o),
        a = t(24),
        s = t.n(a),
        u = t(571),
        l = t.n(u),
        d = t(32),
        f = t.n(d),
        b = t(570),
        j = t.n(b),
        m = t(27),
        h = t.n(m),
        p = t(173),
        v = t.n(p),
        x = t(572),
        g = t.n(x),
        O = t(577),
        y = t.n(O),
        _ = t(573),
        S = t.n(_),
        C = t(64),
        w = t(568),
        I = t(569),
        k = t(574),
        N = t(580)
      var F = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return F[e]
      }
      var $ = t(115),
        M = [
          'src',
          'round',
          'width',
          'height',
          'radius',
          'lazyLoad',
          'showMenuByLongpress',
          'fit',
          'showError',
          'showLoading',
          'className',
          'style',
          'renderError',
          'renderLoading',
        ]
      function ownKeys(e, n) {
        var t = s()(e)
        if (l.a) {
          var r = l()(e)
          n &&
            (r = f()(r).call(r, function (n) {
              return j()(e, n).enumerable
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
            h()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              g()(e, n, r[n])
            })
          else if (v.a) c()(e, v()(r))
          else {
            var o
            h()((o = ownKeys(Object(r)))).call(o, function (n) {
              i()(e, n, j()(r, n))
            })
          }
        }
        return e
      }
      n.a = function Image(e) {
        var n = e.src,
          t = e.round,
          r = e.width,
          c = e.height,
          o = e.radius,
          i = e.lazyLoad,
          a = e.showMenuByLongpress,
          s = e.fit,
          u = e.showError,
          l = void 0 === u || u,
          d = e.showLoading,
          f = void 0 === d || d,
          b = e.className,
          j = e.style,
          m = e.renderError,
          h = e.renderLoading,
          p = S()(e, M),
          v = Object(C.useState)(),
          x = y()(v, 2),
          g = x[0],
          O = x[1],
          _ = Object(C.useState)(!1),
          F = y()(_, 2),
          E = F[0],
          P = F[1]
        Object(C.useEffect)(
          function () {
            void 0 === g && O(!0), P(!1)
          },
          [g],
        )
        var D,
          L = Object(C.useCallback)(function () {
            O(!1)
          }, []),
          T = Object(C.useCallback)(function () {
            P(!0)
          }, []),
          R = Object(C.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== s && 'widthFix' !== s) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [s],
          )
        return Object($.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                style: I.c([
                  ((D = { width: r, height: c, radius: o }),
                  Object(I.c)([
                    {
                      width: Object(N.a)(D.width),
                      height: Object(N.a)(D.height),
                      'border-radius': Object(N.a)(D.radius),
                    },
                    D.radius ? 'overflow: hidden' : null,
                  ])),
                  j,
                ]),
                className: ' ' + I.b('image', { round: t }) + ' ' + b,
                onClick: p.onClick,
              },
              p,
            ),
            {},
            {
              children: [
                !E &&
                  Object($.jsx)(w.f, {
                    src: n,
                    mode: mode(s || 'none'),
                    lazyLoad: i,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: a,
                    onLoad: L,
                    onError: T,
                    style: R,
                  }),
                g &&
                  f &&
                  Object($.jsx)(w.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      h ||
                      Object($.jsx)(k.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                E &&
                  l &&
                  Object($.jsx)(w.n, {
                    className: 'error-class van-image__error',
                    children:
                      m ||
                      Object($.jsx)(k.b, {
                        name: 'photo-fail',
                        className: 'van-image__error-icon',
                      }),
                  }),
              ],
            },
          ),
        )
      }
    },
    627: function (e, n, t) {
      'use strict'
      var r = t(628)
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = function toArray(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = []
          return (
            c.default.Children.forEach(e, function (e) {
              ;(null != e || n.keepEmpty) &&
                (Array.isArray(e)
                  ? (t = t.concat(toArray(e)))
                  : (0, o.isFragment)(e) && e.props
                  ? (t = t.concat(toArray(e.props.children, n)))
                  : t.push(e))
            }),
            t
          )
        })
      var c = r(t(64)),
        o = t(629)
    },
    628: function (e, n) {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    629: function (e, n, t) {
      'use strict'
      e.exports = t(630)
    },
    630: function (e, n, t) {
      'use strict'
      var r = 'function' == typeof Symbol && Symbol.for,
        c = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        d = r ? Symbol.for('react.async_mode') : 60111,
        f = r ? Symbol.for('react.concurrent_mode') : 60111,
        b = r ? Symbol.for('react.forward_ref') : 60112,
        j = r ? Symbol.for('react.suspense') : 60113,
        m = r ? Symbol.for('react.suspense_list') : 60120,
        h = r ? Symbol.for('react.memo') : 60115,
        p = r ? Symbol.for('react.lazy') : 60116,
        v = r ? Symbol.for('react.block') : 60121,
        x = r ? Symbol.for('react.fundamental') : 60117,
        g = r ? Symbol.for('react.responder') : 60118,
        O = r ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case d:
                case f:
                case i:
                case s:
                case a:
                case j:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case b:
                    case p:
                    case h:
                    case u:
                      return e
                    default:
                      return n
                  }
              }
            case o:
              return n
          }
        }
      }
      function A(e) {
        return z(e) === f
      }
      ;(n.AsyncMode = d),
        (n.ConcurrentMode = f),
        (n.ContextConsumer = l),
        (n.ContextProvider = u),
        (n.Element = c),
        (n.ForwardRef = b),
        (n.Fragment = i),
        (n.Lazy = p),
        (n.Memo = h),
        (n.Portal = o),
        (n.Profiler = s),
        (n.StrictMode = a),
        (n.Suspense = j),
        (n.isAsyncMode = function (e) {
          return A(e) || z(e) === d
        }),
        (n.isConcurrentMode = A),
        (n.isContextConsumer = function (e) {
          return z(e) === l
        }),
        (n.isContextProvider = function (e) {
          return z(e) === u
        }),
        (n.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === c
        }),
        (n.isForwardRef = function (e) {
          return z(e) === b
        }),
        (n.isFragment = function (e) {
          return z(e) === i
        }),
        (n.isLazy = function (e) {
          return z(e) === p
        }),
        (n.isMemo = function (e) {
          return z(e) === h
        }),
        (n.isPortal = function (e) {
          return z(e) === o
        }),
        (n.isProfiler = function (e) {
          return z(e) === s
        }),
        (n.isStrictMode = function (e) {
          return z(e) === a
        }),
        (n.isSuspense = function (e) {
          return z(e) === j
        }),
        (n.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === j ||
            e === m ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === l ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === g ||
                e.$$typeof === O ||
                e.$$typeof === v))
          )
        }),
        (n.typeOf = z)
    },
    665: function (e, n, t) {},
    843: function (e, n, t) {},
    844: function (e, n, t) {},
    884: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return ee
        })
      var r = t(39),
        c = t(40),
        o = t(175),
        i = t(66),
        a = t(65),
        s = t(91),
        u = t(64),
        l = t.n(u),
        d = t(578),
        f = t(579),
        b = (t(576), t(843), t(116)),
        j = t.n(b),
        m = t(55),
        h = t.n(m),
        p = t(573),
        v = t.n(p),
        x = t(577),
        g = t.n(x),
        O = t(572),
        y = t.n(O),
        _ = t(32),
        S = t.n(_),
        C = t(10),
        w = t.n(C),
        I = t(24),
        k = t.n(I),
        N = t(571),
        F = t.n(N),
        $ = t(570),
        M = t.n($),
        E = t(27),
        P = t.n(E),
        D = t(173),
        L = t.n(D),
        T = t(567),
        R = t(627),
        K = t.n(R),
        U = t(568),
        B = t(569),
        V = t(594),
        q = t(115),
        J = [
          'active',
          'activeColor',
          'inactiveColor',
          'border',
          'fixed',
          'safeAreaInsetBottom',
          'zIndex',
          'placeholder',
          'onChange',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, n) {
        var t = k()(e)
        if (F.a) {
          var r = F()(e)
          n &&
            (r = S()(r).call(r, function (n) {
              return M()(e, n).enumerable
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
            P()((t = ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (L.a) j()(e, L()(r))
          else {
            var c
            P()((c = ownKeys(Object(r)))).call(c, function (n) {
              h()(e, n, M()(r, n))
            })
          }
        }
        return e
      }
      var Y = function Tabbar(e) {
          var n = Object(u.useState)({ height: 50, current: 0 }),
            t = g()(n, 2),
            r = t[0],
            c = t[1],
            o = r.height,
            i = r.current,
            a = e.active,
            s = e.activeColor,
            l = e.inactiveColor,
            d = e.border,
            f = void 0 === d || d,
            b = e.fixed,
            j = void 0 === b || b,
            m = e.safeAreaInsetBottom,
            h = void 0 === m || m,
            p = e.zIndex,
            x = e.placeholder,
            O = e.onChange,
            y = e.style,
            _ = e.className,
            C = e.children,
            I = v()(e, J),
            k = Object(u.useCallback)(
              function (e) {
                c(function (n) {
                  return _objectSpread(_objectSpread({}, n), {}, { current: e })
                }),
                  null == O || O({ detail: e })
              },
              [O],
            ),
            N = (function parseTabList(e) {
              var n, t
              return S()(
                (n = w()((t = K()(e))).call(t, function (e) {
                  return Object(u.isValidElement)(e)
                    ? _objectSpread(
                        _objectSpread(
                          { key: void 0 !== e.key ? String(e.key) : void 0 },
                          e.props,
                        ),
                        {},
                        { node: e },
                      )
                    : null
                })),
              ).call(n, function (e) {
                return e
              })
            })(C),
            F = w()(N).call(N, function (e, n) {
              return Object(u.cloneElement)(e.node, {
                key: n,
                index: n,
                active: i,
                activeColor: s,
                inactiveColor: l,
                onChange: k,
              })
            })
          return (
            Object(u.useEffect)(
              function () {
                c(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, { current: a })
                })
              },
              [a],
            ),
            Object(u.useEffect)(
              function () {
                j &&
                  x &&
                  Object(T.a)(function () {
                    Object(V.c)(null, '.van-tabbar').then(function (e) {
                      c(function (n) {
                        return _objectSpread(
                          _objectSpread({}, n),
                          {},
                          { height: e.height },
                        )
                      })
                    })
                  })
              },
              [j, x],
            ),
            Object(q.jsxs)(q.Fragment, {
              children: [
                Object(q.jsx)(
                  U.n,
                  _objectSpread(
                    _objectSpread(
                      {
                        className:
                          (f ? 'van-hairline--top-bottom' : '') +
                          ' ' +
                          B.b('tabbar', { fixed: j, safe: h }) +
                          ' custom-class' +
                          ' '.concat(_ || ''),
                        style: B.c([p ? 'zIndex: ' + p : '', y]),
                      },
                      I,
                    ),
                    {},
                    { children: F },
                  ),
                ),
                j && x && Object(q.jsx)(U.n, { style: 'height: ' + o + 'px;' }),
              ],
            })
          )
        },
        G = (t(584), t(585), t(844), t(574)),
        H = t(667),
        Q = [
          'icon',
          'name',
          'iconPrefix',
          'dot',
          'info',
          'renderIconActive',
          'renderIcon',
          'index',
          'active',
          'activeColor',
          'inactiveColor',
          'onChange',
          'children',
          'style',
          'className',
          'onClick',
        ]
      function tabbar_item_ownKeys(e, n) {
        var t = k()(e)
        if (F.a) {
          var r = F()(e)
          n &&
            (r = S()(r).call(r, function (n) {
              return M()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function tabbar_item_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            P()((t = tabbar_item_ownKeys(Object(r), !0))).call(t, function (n) {
              y()(e, n, r[n])
            })
          else if (L.a) j()(e, L()(r))
          else {
            var c
            P()((c = tabbar_item_ownKeys(Object(r)))).call(c, function (n) {
              h()(e, n, M()(r, n))
            })
          }
        }
        return e
      }
      var W = function TabbarItem(e) {
          var n = e.icon,
            t = e.name,
            r = e.iconPrefix,
            c = void 0 === r ? 'van-icon' : r,
            o = e.dot,
            i = e.info,
            a = e.renderIconActive,
            s = e.renderIcon,
            u = e.index,
            l = e.active,
            d = e.activeColor,
            f = e.inactiveColor,
            b = e.onChange,
            j = e.children,
            m = e.style,
            h = e.className,
            p = e.onClick,
            x = v()(e, Q)
          return b
            ? Object(q.jsxs)(
                U.n,
                tabbar_item_objectSpread(
                  tabbar_item_objectSpread(
                    {
                      className:
                        B.b('tabbar-item', {
                          active: l === (null != t ? t : u),
                        }) +
                        ' custom-class' +
                        ' '.concat(h || ''),
                      style: B.c([
                        { color: l === (null != t ? t : u) ? d : f },
                        m,
                      ]),
                    },
                    x,
                  ),
                  {},
                  {
                    onClick: function _click() {
                      if (b) {
                        var e = null != t ? t : u
                        e !== l && b(e)
                      }
                      null == p || p(null != t ? t : u)
                    },
                    children: [
                      Object(q.jsxs)(U.n, {
                        className: 'van-tabbar-item__icon',
                        children: [
                          n
                            ? Object(q.jsx)(G.a, {
                                size: 38,
                                name: n,
                                classPrefix: c,
                                className: 'van-tabbar-item__icon__inner',
                              })
                            : Object(q.jsx)(q.Fragment, {
                                children: l === (null != t ? t : u) ? a : s,
                              }),
                          Object(q.jsx)(H.a, {
                            dot: o,
                            info: i,
                            className: 'van-tabbar-item__info',
                          }),
                        ],
                      }),
                      Object(q.jsx)(U.n, {
                        className: 'van-tabbar-item__text',
                        children: j,
                      }),
                    ],
                  },
                ),
              )
            : Object(q.jsx)(q.Fragment, {})
        },
        X = t(174)
      function Demo() {
        var e = l.a.useState(0),
          n = Object(X.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(Y, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(W, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(W, { icon: 'search', children: '标签' }),
            Object(q.jsx)(W, { icon: 'friends-o', children: '标签' }),
            Object(q.jsx)(W, { icon: 'setting-o', children: '标签' }),
          ],
        })
      }
      function demo2_Demo() {
        var e = l.a.useState('home'),
          n = Object(X.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(Y, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(W, {
              name: 'home',
              icon: 'home-o',
              children: '标签',
            }),
            Object(q.jsx)(W, {
              name: 'search',
              icon: 'search',
              children: '标签',
            }),
            Object(q.jsx)(W, {
              name: 'friends',
              icon: 'friends-o',
              children: '标签',
            }),
            Object(q.jsx)(W, {
              name: 'setting',
              icon: 'setting-o',
              children: '标签',
            }),
          ],
        })
      }
      function demo3_Demo() {
        var e = l.a.useState('home'),
          n = Object(X.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(Y, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(W, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(W, { icon: 'search', dot: !0, children: '标签' }),
            Object(q.jsx)(W, {
              icon: 'friends-o',
              info: '5',
              children: '标签',
            }),
            Object(q.jsx)(W, {
              icon: 'setting-o',
              info: '20',
              children: '标签',
            }),
          ],
        })
      }
      t(617)
      var Z = t(618)
      function demo4_Demo() {
        var e = l.a.useState('home'),
          n = Object(X.a)(e, 2),
          t = n[0],
          r = n[1]
        return Object(q.jsxs)(Y, {
          active: t,
          onChange: function onChange(e) {
            return r(e.detail)
          },
          children: [
            Object(q.jsx)(W, {
              info: '3',
              renderIcon: Object(q.jsx)(Z.a, {
                src: 'https://img.yzcdn.cn/vant/user-inactive.png',
                mode: 'aspectFit',
                style: 'width: 30px; height: 18px;',
              }),
              renderIconactive: Object(q.jsx)(Z.a, {
                src: 'https://img.yzcdn.cn/vant/user-active.png',
                mode: 'aspectFit',
                style: 'width: 30px; height: 18px;',
              }),
              children: '自定义',
            }),
            Object(q.jsx)(W, { icon: 'search', children: '标签' }),
            Object(q.jsx)(W, { icon: 'setting-o', children: '标签' }),
          ],
        })
      }
      function demo5_Demo() {
        var e = l.a.useState(0),
          n = Object(X.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(Y, {
          activeColor: '#07c160',
          inactiveColor: '#000',
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(W, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(W, { icon: 'search', children: '标签' }),
            Object(q.jsx)(W, { icon: 'friends-o', children: '标签' }),
            Object(q.jsx)(W, { icon: 'setting-o', children: '标签' }),
          ],
        })
      }
      var ee = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(a.a)(Index)
        function Index() {
          var e
          return (
            Object(r.a)(this, Index),
            (e = n.call(this)),
            Object(s.a)(Object(o.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(q.jsxs)(d.a, {
                  title: 'Tabbar 标签栏',
                  className: 'pages-tabbar-index',
                  children: [
                    Object(q.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(q.jsx)(Demo, {}),
                    }),
                    Object(q.jsx)(f.a, {
                      title: '通过名称匹配',
                      padding: !0,
                      children: Object(q.jsx)(demo2_Demo, {}),
                    }),
                    Object(q.jsx)(f.a, {
                      title: '显示徽标',
                      padding: !0,
                      children: Object(q.jsx)(demo3_Demo, {}),
                    }),
                    Object(q.jsx)(f.a, {
                      title: '自定义图标',
                      padding: !0,
                      children: Object(q.jsx)(demo4_Demo, {}),
                    }),
                    Object(q.jsx)(f.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(q.jsx)(demo5_Demo, {}),
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
