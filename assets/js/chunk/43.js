/*! For license information please see 43.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
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
      var r = t(586),
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
    590: function (e, n, t) {
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
        f = t.n(l),
        d = (t(567), t(863)),
        b = (t(866), t(90)),
        j = t(790),
        m = (t(77), t(575))
      t(593)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == r && (r = Object(d.a)()), r
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
        return new f.a(function (t) {
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
        return new f.a(function (t) {
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
        return Object(m.f)(e) ? e : f.a.resolve(e)
      }
      t.d(n, 'e', function () {
        return m.b
      })
    },
    593: function (e, n, t) {
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
        i = t(863),
        a = t(864)
      t(865)
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
    615: function (e, n, t) {
      'use strict'
      t(574), t(580), t(581), t(664)
    },
    616: function (e, n, t) {
      'use strict'
      var r = t(24),
        c = t.n(r),
        o = t(571),
        i = t.n(o),
        a = t(32),
        s = t.n(a),
        u = t(570),
        l = t.n(u),
        f = t(27),
        d = t.n(f),
        b = t(173),
        j = t.n(b),
        m = t(116),
        h = t.n(m),
        p = t(55),
        v = t.n(p),
        g = t(572),
        x = t.n(g),
        y = t(576),
        O = t.n(y),
        _ = t(573),
        S = t.n(_),
        C = t(64),
        w = t(568),
        I = t(569),
        $ = t(577),
        k = t(578)
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
      var N = t(115),
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
        var t = c()(e)
        if (i.a) {
          var r = i()(e)
          n &&
            (r = s()(r).call(r, function (n) {
              return l()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? d()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                x()(e, n, c[n])
              })
            : j.a
            ? h()(e, j()(c))
            : d()((r = ownKeys(Object(c)))).call(r, function (n) {
                v()(e, n, l()(c, n))
              })
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
          f = e.showLoading,
          d = void 0 === f || f,
          b = e.className,
          j = e.style,
          m = e.renderError,
          h = e.renderLoading,
          p = S()(e, M),
          v = Object(C.useState)(),
          g = O()(v, 2),
          x = g[0],
          y = g[1],
          _ = Object(C.useState)(!1),
          F = O()(_, 2),
          E = F[0],
          P = F[1]
        Object(C.useEffect)(
          function () {
            void 0 === x && y(!0), P(!1)
          },
          [x],
        )
        var D,
          L = Object(C.useCallback)(function () {
            y(!1)
          }, []),
          T = Object(C.useCallback)(function () {
            P(!0)
          }, []),
          K = Object(C.useMemo)(
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
        return Object(N.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                style: I.c([
                  ((D = { width: r, height: c, radius: o }),
                  Object(I.c)([
                    {
                      width: Object(k.a)(D.width),
                      height: Object(k.a)(D.height),
                      'border-radius': Object(k.a)(D.radius),
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
                  Object(N.jsx)(w.f, {
                    src: n,
                    mode: mode(s || 'none'),
                    lazyLoad: i,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: a,
                    onLoad: L,
                    onError: T,
                    style: K,
                  }),
                x &&
                  d &&
                  Object(N.jsx)(w.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      h ||
                      Object(N.jsx)($.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                E &&
                  l &&
                  Object(N.jsx)(w.n, {
                    className: 'error-class van-image__error',
                    children:
                      m ||
                      Object(N.jsx)($.b, {
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
    625: function (e, n, t) {
      'use strict'
      var r = t(626)
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
        o = t(627)
    },
    626: function (e, n) {
      ;(e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    627: function (e, n, t) {
      'use strict'
      e.exports = t(628)
    },
    628: function (e, n, t) {
      'use strict'
      var r = 'function' == typeof Symbol && Symbol.for,
        c = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        b = r ? Symbol.for('react.forward_ref') : 60112,
        j = r ? Symbol.for('react.suspense') : 60113,
        m = r ? Symbol.for('react.suspense_list') : 60120,
        h = r ? Symbol.for('react.memo') : 60115,
        p = r ? Symbol.for('react.lazy') : 60116,
        v = r ? Symbol.for('react.block') : 60121,
        g = r ? Symbol.for('react.fundamental') : 60117,
        x = r ? Symbol.for('react.responder') : 60118,
        y = r ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case f:
                case d:
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
        return z(e) === d
      }
      ;(n.AsyncMode = f),
        (n.ConcurrentMode = d),
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
          return A(e) || z(e) === f
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
            e === d ||
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
                e.$$typeof === g ||
                e.$$typeof === x ||
                e.$$typeof === y ||
                e.$$typeof === v))
          )
        }),
        (n.typeOf = z)
    },
    664: function (e, n, t) {},
    844: function (e, n, t) {},
    845: function (e, n, t) {},
    885: function (e, n, t) {
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
        f = t(587),
        d = t(588),
        b = (t(574), t(844), t(573)),
        j = t.n(b),
        m = t(576),
        h = t.n(m),
        p = t(572),
        v = t.n(p),
        g = t(32),
        x = t.n(g),
        y = t(10),
        O = t.n(y),
        _ = t(24),
        S = t.n(_),
        C = t(571),
        w = t.n(C),
        I = t(570),
        $ = t.n(I),
        k = t(27),
        F = t.n(k),
        N = t(173),
        M = t.n(N),
        E = t(116),
        P = t.n(E),
        D = t(55),
        L = t.n(D),
        T = t(567),
        K = t(625),
        R = t.n(K),
        U = t(568),
        B = t(569),
        V = t(590),
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
        var t = S()(e)
        if (w.a) {
          var r = w()(e)
          n &&
            (r = x()(r).call(r, function (n) {
              return $()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? F()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                v()(e, n, c[n])
              })
            : M.a
            ? P()(e, M()(c))
            : F()((r = ownKeys(Object(c)))).call(r, function (n) {
                L()(e, n, $()(c, n))
              })
        }
        return e
      }
      var G = function Tabbar(e) {
          var n = Object(u.useState)({ height: 50, current: 0 }),
            t = h()(n, 2),
            r = t[0],
            c = t[1],
            o = r.height,
            i = r.current,
            a = e.active,
            s = e.activeColor,
            l = e.inactiveColor,
            f = e.border,
            d = void 0 === f || f,
            b = e.fixed,
            m = void 0 === b || b,
            p = e.safeAreaInsetBottom,
            v = void 0 === p || p,
            g = e.zIndex,
            y = e.placeholder,
            _ = e.onChange,
            S = e.style,
            C = e.className,
            w = e.children,
            I = j()(e, J),
            $ = Object(u.useCallback)(
              function (e) {
                c(function (n) {
                  return _objectSpread(_objectSpread({}, n), {}, { current: e })
                }),
                  null == _ || _({ detail: e })
              },
              [_],
            ),
            k = (function parseTabList(e) {
              var n, t
              return x()(
                (n = O()((t = R()(e))).call(t, function (e) {
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
            })(w),
            F = O()(k).call(k, function (e, n) {
              return Object(u.cloneElement)(e.node, {
                key: n,
                index: n,
                active: i,
                activeColor: s,
                inactiveColor: l,
                onChange: $,
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
                m &&
                  y &&
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
              [m, y],
            ),
            Object(q.jsxs)(U.a, {
              children: [
                Object(q.jsx)(
                  U.n,
                  _objectSpread(
                    _objectSpread(
                      {
                        className:
                          (d ? 'van-hairline--top-bottom' : '') +
                          ' ' +
                          B.b('tabbar', { fixed: m, safe: v }) +
                          ' custom-class' +
                          ' '.concat(C || ''),
                        style: B.c([g ? 'zIndex: ' + g : '', S]),
                      },
                      I,
                    ),
                    {},
                    { children: F },
                  ),
                ),
                m && y && Object(q.jsx)(U.n, { style: 'height: ' + o + 'px;' }),
              ],
            })
          )
        },
        H = (t(580), t(581), t(845), t(577)),
        Q = t(657),
        W = [
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
        var t = S()(e)
        if (w.a) {
          var r = w()(e)
          n &&
            (r = x()(r).call(r, function (n) {
              return $()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function tabbar_item_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? F()((t = tabbar_item_ownKeys(Object(c), !0))).call(
                t,
                function (n) {
                  v()(e, n, c[n])
                },
              )
            : M.a
            ? P()(e, M()(c))
            : F()((r = tabbar_item_ownKeys(Object(c)))).call(r, function (n) {
                L()(e, n, $()(c, n))
              })
        }
        return e
      }
      var X = function TabbarItem(e) {
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
            f = e.activeColor,
            d = e.inactiveColor,
            b = e.onChange,
            m = e.children,
            h = e.style,
            p = e.className,
            v = e.onClick,
            g = j()(e, W)
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
                        ' '.concat(p || ''),
                      style: B.c([
                        { color: l === (null != t ? t : u) ? f : d },
                        h,
                      ]),
                    },
                    g,
                  ),
                  {},
                  {
                    onClick: function _click() {
                      if (b) {
                        var e = null != t ? t : u
                        e !== l && b(e)
                      }
                      null == v || v(null != t ? t : u)
                    },
                    children: [
                      Object(q.jsxs)(U.n, {
                        className: 'van-tabbar-item__icon',
                        children: [
                          n
                            ? Object(q.jsx)(H.a, {
                                size: 38,
                                name: n,
                                classPrefix: c,
                                className: 'van-tabbar-item__icon__inner',
                              })
                            : Object(q.jsx)(U.a, {
                                children: l === (null != t ? t : u) ? a : s,
                              }),
                          Object(q.jsx)(Q.a, {
                            dot: o,
                            info: i,
                            className: 'van-tabbar-item__info',
                          }),
                        ],
                      }),
                      Object(q.jsx)(U.n, {
                        className: 'van-tabbar-item__text',
                        children: m,
                      }),
                    ],
                  },
                ),
              )
            : Object(q.jsx)(q.Fragment, {})
        },
        Y = t(174)
      function Demo() {
        var e = l.a.useState(0),
          n = Object(Y.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(G, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(X, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(X, { icon: 'search', children: '标签' }),
            Object(q.jsx)(X, { icon: 'friends-o', children: '标签' }),
            Object(q.jsx)(X, { icon: 'setting-o', children: '标签' }),
          ],
        })
      }
      function demo2_Demo() {
        var e = l.a.useState('home'),
          n = Object(Y.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(G, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(X, {
              name: 'home',
              icon: 'home-o',
              children: '标签',
            }),
            Object(q.jsx)(X, {
              name: 'search',
              icon: 'search',
              children: '标签',
            }),
            Object(q.jsx)(X, {
              name: 'friends',
              icon: 'friends-o',
              children: '标签',
            }),
            Object(q.jsx)(X, {
              name: 'setting',
              icon: 'setting-o',
              children: '标签',
            }),
          ],
        })
      }
      function demo3_Demo() {
        var e = l.a.useState('home'),
          n = Object(Y.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(G, {
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(X, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(X, { icon: 'search', dot: !0, children: '标签' }),
            Object(q.jsx)(X, {
              icon: 'friends-o',
              info: '5',
              children: '标签',
            }),
            Object(q.jsx)(X, {
              icon: 'setting-o',
              info: '20',
              children: '标签',
            }),
          ],
        })
      }
      t(615)
      var Z = t(616)
      function demo4_Demo() {
        var e = l.a.useState('home'),
          n = Object(Y.a)(e, 2),
          t = n[0],
          r = n[1]
        return Object(q.jsxs)(G, {
          active: t,
          onChange: function onChange(e) {
            return r(e.detail)
          },
          children: [
            Object(q.jsx)(X, {
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
            Object(q.jsx)(X, { icon: 'search', children: '标签' }),
            Object(q.jsx)(X, { icon: 'setting-o', children: '标签' }),
          ],
        })
      }
      function demo5_Demo() {
        var e = l.a.useState(0),
          n = Object(Y.a)(e, 2),
          t = n[0]
        n[1]
        return Object(q.jsxs)(G, {
          activeColor: '#07c160',
          inactiveColor: '#000',
          active: t,
          onChange: function onChange(e) {
            return e.detail
          },
          children: [
            Object(q.jsx)(X, { icon: 'home-o', children: '标签' }),
            Object(q.jsx)(X, { icon: 'search', children: '标签' }),
            Object(q.jsx)(X, { icon: 'friends-o', children: '标签' }),
            Object(q.jsx)(X, { icon: 'setting-o', children: '标签' }),
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
            Object(s.a)(Object(o.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(q.jsxs)(f.a, {
                  title: 'Tabbar 标签栏',
                  className: 'pages-tabbar-index',
                  children: [
                    Object(q.jsx)(d.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(q.jsx)(Demo, {}),
                    }),
                    Object(q.jsx)(d.a, {
                      title: '通过名称匹配',
                      padding: !0,
                      children: Object(q.jsx)(demo2_Demo, {}),
                    }),
                    Object(q.jsx)(d.a, {
                      title: '显示徽标',
                      padding: !0,
                      children: Object(q.jsx)(demo3_Demo, {}),
                    }),
                    Object(q.jsx)(d.a, {
                      title: '自定义图标',
                      padding: !0,
                      children: Object(q.jsx)(demo4_Demo, {}),
                    }),
                    Object(q.jsx)(d.a, {
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
