/*! For license information please see 36.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
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
          i = t(737),
          a = t(77),
          l = t(64),
          u = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            s = n.className,
            f = void 0 === s ? '' : s,
            d = n.children,
            b = o.a.useRouter().path
          return (
            Object(l.useEffect)(
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
              className: 'demo-page '.concat(f),
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
        return s
      })
      var r = t(39),
        c = t(40),
        o = t(66),
        i = t(65),
        a = t(568),
        l = t(64),
        u = (t(582), t(115)),
        s = (function (e) {
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
        })(l.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    589: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Cell
      })
      var r = t(116),
        c = t.n(r),
        o = t(55),
        i = t.n(o),
        a = t(24),
        l = t.n(a),
        u = t(571),
        s = t.n(u),
        f = t(32),
        d = t.n(f),
        b = t(570),
        p = t.n(b),
        j = t(27),
        h = t.n(j),
        v = t(173),
        m = t.n(v),
        x = t(572),
        y = t.n(x),
        O = t(573),
        g = t.n(O),
        S = t(64),
        _ = t(568),
        k = t(569),
        C = t(597),
        w = t(574),
        I = t(583),
        N = t(580)
      var T = t(115),
        $ = [
          'url',
          'linkType',
          'size',
          'center',
          'required',
          'border',
          'isLink',
          'clickable',
          'icon',
          'titleWidth',
          'titleStyle',
          'title',
          'label',
          'value',
          'arrowDirection',
          'onClick',
          'renderIcon',
          'renderTitle',
          'renderLabel',
          'renderRightIcon',
          'renderExtra',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = l()(e)
        if (s.a) {
          var r = s()(e)
          n &&
            (r = d()(r).call(r, function (n) {
              return p()(e, n).enumerable
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
              y()(e, n, r[n])
            })
          else if (m.a) c()(e, m()(r))
          else {
            var o
            h()((o = ownKeys(Object(r)))).call(o, function (n) {
              i()(e, n, p()(r, n))
            })
          }
        }
        return e
      }
      function Cell(e) {
        var n,
          t = e.url,
          r = e.linkType,
          c = e.size,
          o = e.center,
          i = e.required,
          a = e.border,
          l = void 0 === a || a,
          u = e.isLink,
          s = e.clickable,
          f = e.icon,
          d = e.titleWidth,
          b = e.titleStyle,
          p = e.title,
          j = e.label,
          h = e.value,
          v = e.arrowDirection,
          m = e.onClick,
          x = e.renderIcon,
          y = e.renderTitle,
          O = e.renderLabel,
          E = e.renderRightIcon,
          M = e.renderExtra,
          R = e.children,
          P = e.style,
          L = e.className,
          F = g()(e, $),
          K = Object(S.useCallback)(
            function (e) {
              null == m || m(e), t && Object(C.a)(t, r)
            },
            [r, m, t],
          )
        return Object(T.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  k.b('cell', [
                    c,
                    {
                      center: o,
                      required: i,
                      borderless: !l,
                      clickable: u || s,
                    },
                  ]) +
                  ' '.concat(L || ''),
                hoverClass: 'van-cell--hover hover-class',
                hoverStayTime: 70,
                style: k.c([P]),
                onClick: K,
              },
              F,
            ),
            {},
            {
              children: [
                f
                  ? Object(T.jsx)(w.a, {
                      name: f,
                      className: 'van-cell__left-icon-wrap van-cell__left-icon',
                    })
                  : x,
                Object(T.jsxs)(_.n, {
                  style:
                    ((n = { titleWidth: d, titleStyle: b }),
                    Object(I.a)([
                      {
                        'max-width': Object(N.a)(n.titleWidth),
                        'min-width': Object(N.a)(n.titleWidth),
                      },
                      n.titleStyle,
                    ])),
                  className: 'van-cell__title title-class',
                  children: [
                    p || 0 === p ? Object(T.jsx)(_.a, { children: p }) : y,
                    (j || O) &&
                      Object(T.jsx)(_.n, {
                        className: 'van-cell__label label-class',
                        children:
                          O || (j && Object(T.jsx)(_.a, { children: j })),
                      }),
                  ],
                }),
                Object(T.jsx)(_.n, {
                  className: 'van-cell__value value-class',
                  children:
                    h || 0 === h ? Object(T.jsx)(_.a, { children: h }) : R,
                }),
                u
                  ? Object(T.jsx)(w.a, {
                      name: v ? 'arrow-' + v : 'arrow',
                      className:
                        'van-cell__right-icon-wrap right-icon-class van-cell__right-icon',
                    })
                  : E,
                M,
              ],
            },
          ),
        )
      }
      n.b = Cell
    },
    592: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585), t(601)
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
        o = t.n(c),
        i = t(24),
        a = t.n(i),
        l = t(21),
        u = t.n(l),
        s = t(5),
        f = t.n(s),
        d = (t(567), t(863)),
        b = (t(866), t(90)),
        p = t(790),
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
          return /^-?\d+(\.\d+)?$/.test('' + e) ? b.a.pxTransform(e) : e
      }
      function requestAnimationFrame(e) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              e()
            }, 33.333333333333336)
          : Object(p.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(j.e)(e)
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
          var r = Object(p.a)()
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
          var r = Object(p.a)()
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
    597: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return jumpLink
      })
      var r = t(77)
      function jumpLink(e, n) {
        var t
        if (((n = null !== (t = n) && void 0 !== t ? t : 'navigateTo'), e))
          if ('navigateTo' === n && Object(r.b)().length > 9)
            Object(r.g)({ url: e })
          else
            switch (n) {
              case 'navigateTo':
                Object(r.e)({ url: e })
                break
              case 'reLaunch':
                Object(r.f)({ url: e })
                break
              case 'redirectTo':
                Object(r.g)({ url: e })
            }
      }
    },
    601: function (e, n, t) {},
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
        l = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        s = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        b = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        j = r ? Symbol.for('react.suspense_list') : 60120,
        h = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        m = r ? Symbol.for('react.block') : 60121,
        x = r ? Symbol.for('react.fundamental') : 60117,
        y = r ? Symbol.for('react.responder') : 60118,
        O = r ? Symbol.for('react.scope') : 60119
      function z(e) {
        if ('object' == typeof e && null !== e) {
          var n = e.$$typeof
          switch (n) {
            case c:
              switch ((e = e.type)) {
                case f:
                case d:
                case i:
                case l:
                case a:
                case p:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case b:
                    case v:
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
        (n.ContextConsumer = s),
        (n.ContextProvider = u),
        (n.Element = c),
        (n.ForwardRef = b),
        (n.Fragment = i),
        (n.Lazy = v),
        (n.Memo = h),
        (n.Portal = o),
        (n.Profiler = l),
        (n.StrictMode = a),
        (n.Suspense = p),
        (n.isAsyncMode = function (e) {
          return A(e) || z(e) === f
        }),
        (n.isConcurrentMode = A),
        (n.isContextConsumer = function (e) {
          return z(e) === s
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
          return z(e) === v
        }),
        (n.isMemo = function (e) {
          return z(e) === h
        }),
        (n.isPortal = function (e) {
          return z(e) === o
        }),
        (n.isProfiler = function (e) {
          return z(e) === l
        }),
        (n.isStrictMode = function (e) {
          return z(e) === a
        }),
        (n.isSuspense = function (e) {
          return z(e) === p
        }),
        (n.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === d ||
            e === l ||
            e === a ||
            e === p ||
            e === j ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === b ||
                e.$$typeof === x ||
                e.$$typeof === y ||
                e.$$typeof === O ||
                e.$$typeof === m))
          )
        }),
        (n.typeOf = z)
    },
    703: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return usePageScroll
      })
      var r = t(64),
        c = t(90)
      function usePageScroll(e) {
        Object(r.useEffect)(function () {
          var n = document
          function listener(t) {
            if (t.target) {
              var r = {
                scrollTop: n.scrollingElement.scrollTop,
                scrollLeft: n.scrollingElement.scrollLeft,
              }
              e(r)
            }
          }
          return (
            n.addEventListener('scroll', listener),
            function () {
              n.removeEventListener('scroll', listener)
            }
          )
        }),
          c.a.usePageScroll(function (e) {})
      }
    },
    761: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return r
      }),
        t.d(n, 'c', function () {
          return c
        }),
        t.d(n, 'b', function () {
          return o
        })
      var r = '#1989fa',
        c = '#07c160',
        o = '#969799'
    },
    841: function (e, n, t) {},
    842: function (e, n, t) {},
    914: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return ae
        })
      var r = t(39),
        c = t(40),
        o = t(175),
        i = t(66),
        a = t(65),
        l = t(91),
        u = t(64),
        s = t(578),
        f = t(579),
        d = (t(576), t(841), t(116)),
        b = t.n(d),
        p = t(55),
        j = t.n(p),
        h = t(24),
        v = t.n(h),
        m = t(571),
        x = t.n(m),
        y = t(570),
        O = t.n(y),
        g = t(173),
        S = t.n(g),
        _ = t(577),
        k = t.n(_),
        C = t(572),
        w = t.n(C),
        I = t(32),
        N = t.n(I),
        T = t(10),
        $ = t.n(T),
        E = t(5),
        M = t.n(E),
        R = t(27),
        P = t.n(R),
        L = t(6),
        F = t.n(L),
        K = t(61),
        U = t.n(K),
        D = t(568),
        V = t(737),
        q = t(567),
        B = t(627),
        W = t.n(B),
        J = t(569),
        Y = t(593),
        G = t(761),
        H = t(703),
        Q = t(115)
      function ownKeys(e, n) {
        var t = v()(e)
        if (x.a) {
          var r = x()(e)
          n &&
            (r = N()(r).call(r, function (n) {
              return O()(e, n).enumerable
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
              w()(e, n, r[n])
            })
          else if (S.a) b()(e, S()(r))
          else {
            var c
            P()((c = ownKeys(Object(r)))).call(c, function (n) {
              j()(e, n, O()(r, n))
            })
          }
        }
        return e
      }
      var X = function IndexBar(e) {
          var n = e.sticky,
            t = void 0 === n || n,
            r = e.zIndex,
            c = void 0 === r ? 1 : r,
            o = e.highlightColor,
            i = void 0 === o ? G.c : o,
            a = e.stickyOffsetTop,
            l = void 0 === a ? 0 : a,
            s = e.indexList,
            f =
              void 0 === s
                ? (function genIndexList() {
                    for (var e = [], n = 'A'.charCodeAt(0), t = 0; t < 26; t++)
                      e.push(String.fromCharCode(n + t))
                    return e
                  })()
                : s,
            d = e.onSelect,
            b = e.children,
            p = e.className,
            j = e.style,
            h = Object(u.useState)(null),
            v = k()(h, 2),
            m = v[0],
            x = v[1],
            y = Object(u.useState)(!0),
            O = k()(y, 2),
            g = O[0],
            S = O[1],
            _ = Object(u.useState)([]),
            C = k()(_, 2),
            w = C[0],
            I = C[1],
            T = Object(u.useRef)(null),
            E = Object(u.useRef)(0),
            R = Object(u.useRef)(null),
            L = Object(u.useRef)(null),
            K = Object(u.useRef)({}),
            B = Object(u.useRef)([]),
            X = Object(u.useMemo)(
              function () {
                var e,
                  n = 0
                return $()(
                  (e = (function parseIndexAnchor(e) {
                    var n, t
                    return N()(
                      (n = $()((t = W()(e))).call(t, function (e, n) {
                        return Object(u.isValidElement)(e)
                          ? _objectSpread(
                              _objectSpread(
                                { key: void 0 !== e.key ? String(e.key) : n },
                                e.props,
                              ),
                              {},
                              { node: e },
                            )
                          : null
                      })),
                    ).call(n, function (e) {
                      return !!e
                    })
                  })(b)),
                ).call(e, function (e, t) {
                  var r, c, o, i, a
                  'IndexAnchor' ===
                    (null === (r = e.node) ||
                    void 0 === r ||
                    null === (c = r.type) ||
                    void 0 === c
                      ? void 0
                      : c.displayName) &&
                    ((B.current[n] = _objectSpread(
                      _objectSpread(
                        {},
                        null !== (o = B.current[n]) && void 0 !== o
                          ? o
                          : { top: 0, height: 0 },
                      ),
                      {},
                      {
                        childIndex: t,
                        index:
                          null === (i = e.node) ||
                          void 0 === i ||
                          null === (a = i.props) ||
                          void 0 === a
                            ? void 0
                            : a.index,
                      },
                    )),
                    (n += 1))
                  var l = w[t],
                    s = { key: t },
                    f = l ? _objectSpread(_objectSpread({}, s), l) : s
                  return Object(u.cloneElement)(e.node, f)
                })
              },
              [w, b],
            ),
            Z = Object(u.useCallback)(function () {
              return Object(Y.b)(null, '.van-index-anchor-wrapper').then(
                function (e) {
                  B.current = $()(e).call(e, function (e, n) {
                    var t
                    return _objectSpread(
                      _objectSpread(
                        {},
                        null !== (t = B.current[n]) && void 0 !== t ? t : {},
                      ),
                      {},
                      { top: e.top, height: e.height },
                    )
                  })
                },
              )
            }, []),
            ee = Object(u.useCallback)(
              function (e) {
                Object(V.a)({ duration: 0, scrollTop: e + l })
              },
              [l],
            ),
            ne = Object(u.useCallback)(function () {
              return Object(Y.c)(null, '.van-index-bar').then(function (e) {
                Object(Y.e)(e) &&
                  (K.current = { height: e.height, top: e.top + E.current })
              })
            }, []),
            te = Object(u.useCallback)(function () {
              return Object(Y.c)(null, '.van-index-bar__sidebar').then(
                function (e) {
                  Object(Y.e)(e) &&
                    (R.current = { height: e.height, top: e.top })
                },
              )
            }, []),
            re = Object(u.useCallback)(
              function () {
                for (var e = B.current, n = e.length - 1; n >= 0; n--) {
                  var r,
                    c = e[n]
                  if (c) {
                    var o =
                      n > 0
                        ? null === (r = e[n - 1]) || void 0 === r
                          ? void 0
                          : r.height
                        : 0
                    if ((t ? o + l : 0) + E.current >= c.top) return n
                  }
                }
                return -1
              },
              [t, l],
            ),
            ce = Object(u.useCallback)(
              function () {
                return M.a.all([Z(), ne(), te()])
              },
              [Z, ne, te],
            ),
            oe = Object(u.useCallback)(
              function () {
                if (null != X && X.length) {
                  var e = B.current,
                    n = re()
                  x(n)
                  var r = []
                  if (t) {
                    var o,
                      a,
                      u = !1
                    if (-1 !== n)
                      u =
                        ((null === (a = e[n]) || void 0 === a
                          ? void 0
                          : a.top) || 0) <=
                        l + E.current
                    P()((o = B.current)).call(o, function (e, t) {
                      if (t === n) {
                        var o,
                          a,
                          s = '',
                          f = '\n          color: '.concat(i, ';\n        ')
                        if (u)
                          (s = '\n            height: '.concat(
                            e.height,
                            'px;\n          ',
                          )),
                            (f = F()(
                              (o = F()(
                                (a =
                                  '\n            position: fixed;\n            top: '.concat(
                                    l,
                                    'px;\n            z-index: ',
                                  )),
                              ).call(a, c, ';\n            color: ')),
                            ).call(o, i, ';\n          '))
                        r[e.childIndex] = {
                          active: !0,
                          anchorStyle: f,
                          wrapperStyle: s,
                        }
                      } else if (t === n - 1) {
                        var d,
                          b,
                          p,
                          j = e,
                          h = (null == j ? void 0 : j.top) || 0,
                          v =
                            (t === X.length - 1
                              ? K.current.top
                              : null === (d = B.current[t + 1]) || void 0 === d
                              ? void 0
                              : d.top) -
                            h -
                            ((null == j ? void 0 : j.height) || 0),
                          m = F()(
                            (b = F()(
                              (p =
                                '\n          position: relative;\n          transform: translate3d(0, '.concat(
                                  v,
                                  'px, 0);\n          z-index: ',
                                )),
                            ).call(p, c, ';\n          color: ')),
                          ).call(b, i, ';\n        ')
                        r[e.childIndex] = { active: !0, anchorStyle: m }
                      } else
                        r[e.childIndex] = {
                          active: !1,
                          anchorStyle: '',
                          wrapperStyle: '',
                        }
                    }),
                      I(r)
                  }
                }
              },
              [X.length, re, i, t, l, c],
            ),
            ie = Object(u.useCallback)(
              function (e) {
                ;(E.current = (null == e ? void 0 : e.scrollTop) || 0), oe()
              },
              [oe],
            )
          Object(H.a)(ie)
          var ae = Object(u.useCallback)(
              function (e) {
                var n
                if ('number' == typeof e && L.current !== e) {
                  L.current = e
                  var t = U()((n = B.current)).call(n, function (n) {
                    return (null == n ? void 0 : n.index) === f[e]
                  })
                  t && (ee(t.top), null == d || d({ detail: t.index }))
                }
              },
              [ee, f, d],
            ),
            le = Object(u.useCallback)(
              function (e) {
                ae(Number(e.target.dataset.index))
              },
              [ae],
            ),
            ue = Object(u.useCallback)(
              function (e) {
                e.stopPropagation(), e.preventDefault()
                var n = B.current.length || 0,
                  t = e.touches[0],
                  r = R.current.height / n,
                  c = Math.floor((t.clientY - R.current.top) / r)
                c < 0 ? (c = 0) : c > n - 1 && (c = n - 1), ae(c)
              },
              [ae],
            ),
            se = Object(u.useCallback)(function () {
              L.current = null
            }, []),
            fe = Object(u.useCallback)(
              function () {
                Object(q.a)(function () {
                  null !== T.current && clearTimeout(T.current),
                    (T.current = setTimeout(function () {
                      S(!!B.current.length),
                        ce().then(function () {
                          oe()
                        })
                    }, 100))
                })
              },
              [oe, ce],
            )
          return (
            Object(u.useEffect)(
              function () {
                fe()
              },
              [fe],
            ),
            Object(Q.jsxs)(D.n, {
              className: 'van-index-bar '.concat(p || ''),
              style: J.c([j]),
              children: [
                X,
                g &&
                  Object(Q.jsx)(D.n, {
                    className: 'van-index-bar__sidebar',
                    onClick: le,
                    onTouchMove: ue,
                    onTouchEnd: se,
                    onTouchCancel: se,
                    children: $()(f).call(f, function (e, n) {
                      return Object(Q.jsx)(
                        D.n,
                        {
                          className: 'van-index-bar__index',
                          style:
                            'z-index: ' +
                            (c + 1) +
                            '; color: ' +
                            (m === n ? i : ''),
                          'data-index': n,
                          children: e,
                        },
                        n,
                      )
                    }),
                  }),
              ],
            })
          )
        },
        Z = (t(592), t(589)),
        ee = (t(842), t(573)),
        ne = t.n(ee),
        te = [
          'wrapperStyle',
          'active',
          'anchorStyle',
          'index',
          'children',
          'style',
          'className',
        ]
      function index_anchor_ownKeys(e, n) {
        var t = v()(e)
        if (x.a) {
          var r = x()(e)
          n &&
            (r = N()(r).call(r, function (n) {
              return O()(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function index_anchor_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            r = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            P()((t = index_anchor_ownKeys(Object(r), !0))).call(
              t,
              function (n) {
                w()(e, n, r[n])
              },
            )
          else if (S.a) b()(e, S()(r))
          else {
            var c
            P()((c = index_anchor_ownKeys(Object(r)))).call(c, function (n) {
              j()(e, n, O()(r, n))
            })
          }
        }
        return e
      }
      function IndexAnchor(e) {
        var n = e.wrapperStyle,
          t = e.active,
          r = e.anchorStyle,
          c = e.index,
          o = e.children,
          i = e.style,
          a = e.className,
          l = ne()(e, te)
        return Object(Q.jsx)(
          D.n,
          index_anchor_objectSpread(
            index_anchor_objectSpread(
              {
                className: 'van-index-anchor-wrapper '.concat(a || ''),
                style: J.c([n, i]),
              },
              l,
            ),
            {},
            {
              children: Object(Q.jsx)(D.n, {
                className:
                  'van-index-anchor ' +
                  (t ? 'van-index-anchor--active van-hairline--bottom' : ''),
                style: r,
                children: o
                  ? Object(Q.jsx)(Q.Fragment, { children: o })
                  : Object(Q.jsx)(Q.Fragment, {
                      children: Object(Q.jsx)(D.k, { children: c }),
                    }),
              }),
            },
          ),
        )
      }
      IndexAnchor.displayName = 'IndexAnchor'
      for (
        var re = IndexAnchor, ce = [], oe = 'A'.charCodeAt(0), ie = 0;
        ie < 26;
        ie++
      )
        ce.push(String.fromCharCode(oe + ie))
      function Demo() {
        return Object(Q.jsx)(X, {
          children: $()(ce).call(ce, function (e) {
            return Object(Q.jsxs)(
              D.a,
              {
                children: [
                  Object(Q.jsx)(re, { index: e }),
                  Object(Q.jsx)(Z.b, { title: '文本' }),
                  Object(Q.jsx)(Z.b, { title: '文本' }),
                  Object(Q.jsx)(Z.b, { title: '文本' }),
                ],
              },
              e.item,
            )
          }),
        })
      }
      var ae = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(a.a)(Index)
        function Index() {
          var e
          return (
            Object(r.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(o.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(Q.jsx)(s.a, {
                  title: 'IndexBar 索引栏',
                  className: 'pages-index-bar-index',
                  children: Object(Q.jsx)(f.a, {
                    title: '基础用法',
                    padding: !0,
                    children: Object(Q.jsx)(Demo, {}),
                  }),
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
