;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    526: function (n, e, t) {
      'use strict'
      t.d(e, 'e', function () {
        return isPlainObject
      }),
        t.d(e, 'f', function () {
          return isPromise
        }),
        t.d(e, 'b', function () {
          return isDef
        }),
        t.d(e, 'd', function () {
          return isObj
        }),
        t.d(e, 'a', function () {
          return isBoolean
        }),
        t.d(e, 'c', function () {
          return isImageUrl
        }),
        t.d(e, 'g', function () {
          return isVideoUrl
        })
      var c = t(170),
        r = t.n(c)
      function isFunction(n) {
        return 'function' == typeof n
      }
      function isPlainObject(n) {
        return null !== n && 'object' === r()(n) && !Array.isArray(n)
      }
      function isPromise(n) {
        return isPlainObject(n) && isFunction(n.then) && isFunction(n.catch)
      }
      function isDef(n) {
        return null != n
      }
      function isObj(n) {
        var e = r()(n)
        return null !== n && ('object' === e || 'function' === e)
      }
      function isBoolean(n) {
        return 'boolean' == typeof n
      }
      var i = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(n) {
        return i.test(n)
      }
      function isVideoUrl(n) {
        return o.test(n)
      }
    },
    532: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return u
      })
      var c = t(37),
        r = t(38),
        i = t(65),
        o = t(64),
        l = t(518),
        a = t(63),
        s = (t(533), t(108)),
        u = (function (n) {
          Object(i.a)(Index, n)
          var e = Object(o.a)(Index)
          function Index() {
            return Object(c.a)(this, Index), e.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var n = this.props,
                    e = n.padding,
                    t = n.title,
                    c = n.card
                  return Object(s.jsxs)(l.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (e ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(l.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
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
        })(a.Component)
    },
    533: function (n, e, t) {},
    537: function (n, e, t) {},
    538: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Loading
      })
      var c = t(522),
        r = t.n(c),
        i = t(524),
        o = t.n(i),
        l = t(523),
        a = t.n(l),
        s = t(534),
        u = t.n(s),
        f = t(9),
        d = t.n(f),
        b = t(22),
        j = t.n(b),
        p = t(520),
        h = t.n(p),
        x = t(30),
        v = t.n(x),
        g = t(519),
        m = t.n(g),
        O = t(26),
        y = t.n(O),
        S = t(169),
        k = t.n(S),
        T = t(109),
        _ = t.n(T),
        I = t(52),
        w = t.n(I),
        z = t(518),
        N = t(63),
        C = t(521),
        P = t(528)
      function textStyle(n) {
        return Object(C.c)({ 'font-size': Object(P.a)(n.textSize) })
      }
      var R = t(108),
        K = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(n, e) {
        var t = j()(n)
        if (h.a) {
          var c = h()(n)
          e &&
            (c = v()(c).call(c, function (e) {
              return m()(n, e).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            c = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            y()((t = ownKeys(Object(c), !0))).call(t, function (e) {
              r()(n, e, c[e])
            })
          else if (k.a) _()(n, k()(c))
          else {
            var i
            y()((i = ownKeys(Object(c)))).call(i, function (e) {
              w()(n, e, m()(c, e))
            })
          }
        }
        return n
      }
      function Loading(n) {
        var e,
          t = n.vertical,
          c = n.type,
          r = void 0 === c ? 'circular' : c,
          i = n.color,
          l = n.size,
          s = n.textSize,
          f = n.className,
          b = n.children,
          j = n.style,
          p = a()(n, K),
          h = Object(N.useState)(u()({ length: 12 })),
          x = o()(h, 1)[0]
        return Object(R.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + C.b('loading', { vertical: t }) + ' ' + f,
                style: C.c([j]),
              },
              p,
            ),
            {},
            {
              children: [
                Object(R.jsx)(z.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((e = { color: i, size: l }),
                    Object(C.c)({
                      color: e.color,
                      width: Object(P.a)(e.size),
                      height: Object(P.a)(e.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(R.jsx)(z.a, {
                      children: d()(x).call(x, function (n, e) {
                        return Object(R.jsx)(
                          z.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(e),
                        )
                      }),
                    }),
                }),
                Object(R.jsx)(z.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: s }),
                  children: b,
                }),
              ],
            },
          ),
        )
      }
      e.b = Loading
    },
    540: function (n, e, t) {
      'use strict'
      t.d(e, 'g', function () {
        return range
      }),
        t.d(e, 'd', function () {
          return getSystemInfoSync
        }),
        t.d(e, 'a', function () {
          return addUnit
        }),
        t.d(e, 'h', function () {
          return requestAnimationFrame
        }),
        t.d(e, 'f', function () {
          return pickExclude
        }),
        t.d(e, 'c', function () {
          return getRect
        }),
        t.d(e, 'b', function () {
          return getAllRect
        }),
        t.d(e, 'i', function () {
          return toPromise
        })
      var c,
        r = t(139),
        i = t.n(r),
        o = t(22),
        l = t.n(o),
        a = t(15),
        s = t.n(a),
        u = t(5),
        f = t.n(u),
        d = (t(517), t(841)),
        b = (t(844), t(87)),
        j = t(895),
        p = (t(75), t(526))
      t(546)
      function range(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }
      function getSystemInfoSync() {
        return null == c && (c = Object(d.a)()), c
      }
      function addUnit(n) {
        if (Object(p.b)(n))
          return /^-?\d+(\.\d+)?$/.test('' + n) ? b.a.pxTransform(n) : n
      }
      function requestAnimationFrame(n) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              n()
            }, 33.333333333333336)
          : Object(j.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                n()
              })
      }
      function pickExclude(n, e) {
        var t
        return Object(p.e)(n)
          ? i()((t = l()(n))).call(
              t,
              function (t, c) {
                return s()(e).call(e, c) || (t[c] = n[c]), t
              },
              {},
            )
          : {}
      }
      function getRect(n, e) {
        return new f.a(function (t) {
          var c = Object(j.a)()
          n && (c = c.in(n)),
            c
              .select(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function getAllRect(n, e) {
        return new f.a(function (t) {
          var c = Object(j.a)()
          n && (c = c.in(n)),
            c
              .selectAll(e)
              .boundingClientRect()
              .exec(function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return t(n[0])
              })
        })
      }
      function toPromise(n) {
        return Object(p.f)(n) ? n : f.a.resolve(n)
      }
      t.d(e, 'e', function () {
        return p.b
      })
    },
    546: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return canIUseModel
      }),
        t.d(e, 'b', function () {
          return canIUseNextTick
        })
      var c,
        r = t(111),
        i = t.n(r),
        o = t(841),
        l = t(842)
      t(843)
      function gte(n) {
        return (
          (function compareVersion(n, e) {
            ;(n = n.split('.')), (e = e.split('.'))
            for (var t = Math.max(n.length, e.length); n.length < t; )
              n.push('0')
            for (; e.length < t; ) e.push('0')
            for (var c = 0; c < t; c++) {
              var r = i()(n[c], 10),
                o = i()(e[c], 10)
              if (r > o) return 1
              if (r < o) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == c && (c = Object(o.a)()), c
            })().SDKVersion,
            n,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(l.a)('nextTick')
      }
    },
    560: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Button
      })
      var c = t(22),
        r = t.n(c),
        i = t(520),
        o = t.n(i),
        l = t(30),
        a = t.n(l),
        s = t(519),
        u = t.n(s),
        f = t(26),
        d = t.n(f),
        b = t(169),
        j = t.n(b),
        p = t(109),
        h = t.n(p),
        x = t(52),
        v = t.n(x),
        g = t(522),
        m = t.n(g),
        O = t(523),
        y = t.n(O),
        S = t(87),
        k = t(518),
        T = t(521),
        _ = t(529),
        I = t(538),
        w = t(27),
        z = t.n(w),
        N = t(527)
      function rootStyle(n) {
        var e
        if (!n.color) return ''
        var t = {
          color: n.plain ? n.color : '#fff',
          background: n.plain ? null : n.color,
        }
        return (
          -1 !== z()((e = n.color)).call(e, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = n.color),
          Object(N.a)([t])
        )
      }
      var C = t(108),
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
      function ownKeys(n, e) {
        var t = r()(n)
        if (o.a) {
          var c = o()(n)
          e &&
            (c = a()(c).call(c, function (e) {
              return u()(n, e).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            c = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            d()((t = ownKeys(Object(c), !0))).call(t, function (e) {
              m()(n, e, c[e])
            })
          else if (j.a) h()(n, j()(c))
          else {
            var r
            d()((r = ownKeys(Object(c)))).call(r, function (e) {
              v()(n, e, u()(c, e))
            })
          }
        }
        return n
      }
      var R = !1,
        K = 10
      if (!R)
        var U = setInterval(function () {
          if (--K > 0)
            for (
              var n = document.getElementsByTagName('style') || [],
                e = n.length - 1;
              e >= 0;
              e--
            ) {
              var t = n[e],
                c = t.innerHTML
              if (c && /^taro-button-core{/.test(c)) {
                t.remove(), (R = !0), U && clearInterval(U)
                break
              }
            }
          else U && clearInterval(U)
        }, 200)
      function Button(n) {
        var e,
          t = n.type,
          c = void 0 === t ? 'default' : t,
          r = n.size,
          i = void 0 === r ? 'normal' : r,
          o = n.block,
          l = n.round,
          a = n.plain,
          s = n.square,
          u = n.loading,
          f = n.disabled,
          d = n.hairline,
          b = n.color,
          j = n.loadingSize,
          p = void 0 === j ? S.a.pxTransform(40) : j,
          h = n.loadingType,
          x = void 0 === h ? 'circular' : h,
          v = n.loadingText,
          g = n.icon,
          m = n.classPrefix,
          O = void 0 === m ? 'van-icon' : m,
          w = n.onClick,
          z = n.children,
          N = n.style,
          R = n.className,
          K = y()(n, P)
        return Object(C.jsx)(
          k.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  T.b('button', [
                    c,
                    i,
                    {
                      block: o,
                      round: l,
                      plain: a,
                      square: s,
                      loading: u,
                      disabled: f,
                      hairline: d,
                      unclickable: f || u,
                    },
                  ]) +
                  ' ' +
                  (d ? 'van-hairline--surround' : '') +
                  ' '.concat(R || ''),
                hoverClass: 'van-button--active hover-class',
                style: T.c([rootStyle({ plain: a, color: b }), N]),
                onClick: f || u ? void 0 : w,
              },
              K,
            ),
            {},
            {
              children: u
                ? Object(C.jsxs)(k.n, {
                    style: 'display: flex',
                    children: [
                      Object(C.jsx)(I.a, {
                        className: 'loading-class',
                        size: p,
                        type: x,
                        color:
                          ((e = { type: c, color: b, plain: a }),
                          e.plain
                            ? e.color
                              ? e.color
                              : '#c9c9c9'
                            : 'default' === e.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      v &&
                        Object(C.jsx)(k.n, {
                          className: 'van-button__loading-text',
                          children: v,
                        }),
                    ],
                  })
                : Object(C.jsxs)(k.a, {
                    children: [
                      g &&
                        Object(C.jsx)(_.a, {
                          size: '1.2em',
                          name: g,
                          classPrefix: O,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(C.jsx)(k.n, {
                        className: 'van-button__text',
                        children: z,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      e.b = Button
    },
    563: function (n, e, t) {},
    574: function (n, e, t) {
      'use strict'
      t(525), t(537), t(530), t(531), t(563)
    },
    610: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return usePageScroll
      })
      var c = t(63),
        r = t(87)
      function usePageScroll(n) {
        Object(c.useEffect)(function () {
          var e = document
          function listener(t) {
            if (t.target) {
              var c = {
                scrollTop: e.scrollingElement.scrollTop,
                scrollLeft: e.scrollingElement.scrollLeft,
              }
              n(c)
            }
          }
          return (
            e.addEventListener('scroll', listener),
            function () {
              e.removeEventListener('scroll', listener)
            }
          )
        }),
          r.a.usePageScroll(function (n) {})
      }
    },
    614: function (n, e, t) {},
    615: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Sticky
      })
      var c = t(522),
        r = t.n(c),
        i = t(523),
        o = t.n(i),
        l = t(524),
        a = t.n(l),
        s = t(5),
        u = t.n(s),
        f = t(139),
        d = t.n(f),
        b = t(22),
        j = t.n(b),
        p = t(520),
        h = t.n(p),
        x = t(30),
        v = t.n(x),
        g = t(519),
        m = t.n(g),
        O = t(26),
        y = t.n(O),
        S = t(169),
        k = t.n(S),
        T = t(109),
        _ = t.n(T),
        I = t(52),
        w = t.n(I),
        z = t(63),
        N = t(518),
        C = t(521),
        P = t(540),
        R = t(526),
        K = t(610),
        U = t(527)
      function wrapStyle(n) {
        return Object(U.a)({
          transform: n.transform
            ? 'translate3d(0, ' + n.transform + 'px, 0)'
            : '',
          top: n.fixed ? n.offsetTop + 'px' : '',
          'z-index': n.zIndex,
        })
      }
      var E = t(108),
        L = [
          'zIndex',
          'offsetTop',
          'scrollTop',
          'disabled',
          'container',
          'onScroll',
          'style',
          'className',
          'children',
        ]
      function ownKeys(n, e) {
        var t = j()(n)
        if (h.a) {
          var c = h()(n)
          e &&
            (c = v()(c).call(c, function (e) {
              return m()(n, e).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            c = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            y()((t = ownKeys(Object(c), !0))).call(t, function (e) {
              r()(n, e, c[e])
            })
          else if (k.a) _()(n, k()(c))
          else {
            var i
            y()((i = ownKeys(Object(c)))).call(i, function (e) {
              w()(n, e, m()(c, e))
            })
          }
        }
        return n
      }
      function Sticky(n) {
        var e,
          t = Object(z.useRef)(+new Date()),
          c = Object(z.useState)({ height: 0, fixed: !1, transform: 0 }),
          r = a()(c, 2),
          i = r[0],
          l = r[1],
          s = n.zIndex,
          f = n.offsetTop,
          b = void 0 === f ? 0 : f,
          p = n.scrollTop,
          h = n.disabled,
          x = n.container,
          v = n.onScroll,
          g = n.style,
          m = n.className,
          O = n.children,
          y = o()(n, L),
          S = Object(z.useRef)({}),
          k = Object(z.useCallback)(
            function () {
              var n = null == x ? void 0 : x()
              return new u.a(function (e) {
                return null == n
                  ? void 0
                  : n.boundingClientRect().exec(function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      return e(n[0])
                    })
              })
            },
            [x],
          ),
          T = Object(z.useCallback)(
            function (n) {
              var e,
                t = d()((e = j()(n))).call(
                  e,
                  function (e, t) {
                    return n[t] !== i[t] && (e[t] = n[t]), e
                  },
                  {},
                )
              j()(t).length > 0 &&
                l(function (n) {
                  return _objectSpread(_objectSpread({}, n), t)
                }),
                null == v ||
                  v({
                    detail: {
                      scrollTop: S.current.scrollTop,
                      isFixed: n.fixed || i.fixed,
                    },
                  })
            },
            [v, i],
          ),
          _ = Object(z.useCallback)(
            function (n) {
              h
                ? T({ fixed: !1, transform: 0 })
                : ((S.current.scrollTop = n || S.current.scrollTop),
                  'function' != typeof x
                    ? Object(P.c)(
                        null,
                        '.sticky-com-index'.concat(t.current),
                      ).then(function (n) {
                        Object(R.b)(n) &&
                          (b >= n.top
                            ? T({ fixed: !0, height: n.height })
                            : T({ fixed: !1 }))
                      })
                    : u.a
                        .all([
                          Object(P.c)(
                            null,
                            '.sticky-com-index'.concat(t.current),
                          ),
                          k(),
                        ])
                        .then(function (n) {
                          var e = a()(n, 2),
                            t = e[0],
                            c = e[1]
                          t &&
                            c &&
                            (b + t.height > c.height + c.top
                              ? T({ fixed: !1, transform: c.height - t.height })
                              : b >= t.top
                              ? T({ fixed: !0, height: t.height, transform: 0 })
                              : T({ fixed: !1, transform: 0 }))
                        })
                        .catch(function (n) {
                          console.log(n)
                        }))
            },
            [x, h, k, b, T],
          )
        return (
          Object(z.useEffect)(
            function () {
              _(p)
            },
            [p, x, h, b],
          ),
          Object(K.a)(function (n) {
            _(n.scrollTop)
          }),
          Object(E.jsx)(
            N.n,
            _objectSpread(
              _objectSpread(
                {
                  className:
                    'sticky-com-index'.concat(t.current, ' ') +
                    ' van-sticky ' +
                    (m || ''),
                  style: C.c([
                    ((e = { fixed: i.fixed, height: i.height, zIndex: s }),
                    Object(U.a)({
                      height: e.fixed ? e.height + 'px' : '',
                      'z-index': e.zIndex,
                    })),
                    g,
                  ]),
                },
                y,
              ),
              {},
              {
                children: Object(E.jsx)(N.n, {
                  className:
                    C.b('sticky-wrap', { fixed: i.fixed }) +
                    ' '.concat(m || ''),
                  style: C.c([
                    wrapStyle({
                      fixed: i.fixed,
                      offsetTop: b,
                      transform: i.transform,
                      zIndex: s,
                    }),
                    g,
                  ]),
                  children: O,
                }),
              },
            ),
          )
        )
      }
      e.b = Sticky
    },
    762: function (n, e, t) {},
    896: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function () {
          return x
        })
      t(525), t(614)
      var c = t(615),
        r = (t(574), t(560)),
        i = t(37),
        o = t(38),
        l = t(171),
        a = t(65),
        s = t(64),
        u = t(88),
        f = t(518),
        d = t(63),
        b = t(895),
        j = t(541),
        p = t(532),
        h = (t(762), t(108)),
        x = (function (n) {
          Object(a.a)(Index, n)
          var e = Object(s.a)(Index)
          function Index() {
            var n
            return (
              Object(i.a)(this, Index),
              (n = e.call(this)),
              Object(u.a)(Object(l.a)(n), 'state', {
                container: null,
                scrollTop: 0,
                offsetTop: 0,
              }),
              Object(u.a)(Object(l.a)(n), 'onReady', function () {
                n.setState({
                  container: function container() {
                    return Object(b.a)().select('#container')
                  },
                })
              }),
              Object(u.a)(Object(l.a)(n), 'onScroll', function (e) {
                Object(b.a)()
                  .select('#scroller')
                  .boundingClientRect(function (t) {
                    console.log('#scroller:', t.top),
                      n.setState({
                        scrollTop: e.detail.scrollTop,
                        offsetTop: t.top,
                      })
                  })
                  .exec()
              }),
              n
            )
          }
          return (
            Object(o.a)(Index, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.onReady()
                },
              },
              {
                key: 'render',
                value: function render() {
                  var n = this.state,
                    e = n.container,
                    t = n.scrollTop,
                    i = n.offsetTop
                  return Object(h.jsxs)(j.a, {
                    title: 'Sticky 粘性布局',
                    children: [
                      Object(h.jsx)(p.a, {
                        title: '基础用法',
                        children: Object(h.jsx)(c.b, {
                          children: Object(h.jsx)(r.b, {
                            type: 'primary',
                            style: 'margin-left: 15px',
                            children: '基础用法',
                          }),
                        }),
                      }),
                      Object(h.jsx)(p.a, {
                        title: '吸顶距离',
                        children: Object(h.jsx)(c.b, {
                          offsetTop: 50,
                          children: Object(h.jsx)(r.b, {
                            type: 'info',
                            style: 'margin-left: 115px',
                            children: '吸顶距离',
                          }),
                        }),
                      }),
                      Object(h.jsx)(p.a, {
                        title: '指定容器',
                        children: Object(h.jsx)(f.n, {
                          id: 'container',
                          style: 'height: 150px; background-color: #fff;',
                          children: Object(h.jsx)(c.b, {
                            container: e,
                            children: Object(h.jsx)(r.b, {
                              type: 'warning',
                              style: 'margin-left: 215px;',
                              children: '指定容器',
                            }),
                          }),
                        }),
                      }),
                      Object(h.jsx)(p.a, {
                        title: '嵌套在 scroll-view 内使用',
                        children: Object(h.jsx)(f.j, {
                          onScroll: this.onScroll,
                          scrollY: !0,
                          id: 'scroller',
                          style: 'height: 200px; background-color: #fff;',
                          children: Object(h.jsx)(f.n, {
                            style: 'height: 400px;',
                            children: Object(h.jsx)(c.b, {
                              scrollTop: t,
                              offsetTop: i,
                              children: Object(h.jsx)(r.b, {
                                type: 'warning',
                                children: '嵌套在 scroll-view 内',
                              }),
                            }),
                          }),
                        }),
                      }),
                      Object(h.jsx)(f.n, { className: 'sticky-page' }),
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(d.Component)
    },
  },
])