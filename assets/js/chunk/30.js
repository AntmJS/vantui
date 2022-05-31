;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30, 0],
  {
    569: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return b.a
      }),
        t.d(n, 'b', function () {
          return m
        }),
        t.d(n, 'c', function () {
          return v.a
        })
      var c = t(591),
        r = t.n(c),
        a = t(10),
        i = t.n(a),
        o = t(27),
        u = t.n(o),
        l = t(614),
        s = t(620)
      var f = t(149),
        d = t.n(f)
      function call(e, n) {
        return 2 === n.length ? e(n[0], n[1]) : 1 === n.length ? e(n[0]) : e()
      }
      function serializer(e) {
        if (
          1 === e.length &&
          (function isPrimitive(e) {
            var n = r()(e)
            return (
              'boolean' === n ||
              'number' === n ||
              'string' === n ||
              'undefined' === n ||
              null === e
            )
          })(e[0])
        )
          return e[0]
        for (var n = {}, t = 0; t < e.length; t++) n['key' + t] = e[t]
        return d()(n)
      }
      var b = t(580),
        v = t(583),
        m = (function memoize(e) {
          var n = {}
          return function () {
            var t = serializer(arguments)
            return void 0 === n[t] && (n[t] = call(e, arguments)), n[t]
          }
        })(function _bem(e, n) {
          var t = []
          return (
            (function traversing(e, n) {
              if (n)
                if ('string' == typeof n || 'number' == typeof n) e.push(n)
                else if (l.a(n))
                  u()(n).call(n, function (n) {
                    traversing(e, n)
                  })
                else if ('object' === r()(n)) {
                  var t
                  u()((t = s.a(n))).call(t, function (t) {
                    n[t] && e.push(t)
                  })
                }
            })(t, n),
            (function join(e, n) {
              return (
                (e = 'van-' + e),
                (n = i()(n).call(n, function (n) {
                  return e + '--' + n
                })).unshift(e),
                n.join(' ')
              )
            })(e, t)
          )
        })
    },
    574: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Icon
      })
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(24),
        u = t.n(o),
        l = t(571),
        s = t.n(l),
        f = t(32),
        d = t.n(f),
        b = t(570),
        v = t.n(b),
        m = t(27),
        j = t.n(m),
        p = t(173),
        h = t.n(p),
        O = t(572),
        g = t.n(O),
        x = t(573),
        y = t.n(x),
        C = t(568),
        _ = t(569),
        k = t(667),
        I = t(28),
        S = t.n(I),
        N = t(583),
        w = t(580)
      function isImage(e) {
        return -1 !== S()(e).call(e, '/')
      }
      function rootStyle(e) {
        return Object(N.a)([
          { color: e.color, 'font-size': Object(w.a)(e.size) },
        ])
      }
      var T = t(115),
        V = [
          'classPrefix',
          'name',
          'color',
          'size',
          'dot',
          'info',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = u()(e)
        if (s.a) {
          var c = s()(e)
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
            j()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              g()(e, n, c[n])
            })
          else if (h.a) r()(e, h()(c))
          else {
            var a
            j()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      function Icon(e) {
        var n,
          t,
          c = e.classPrefix,
          r = void 0 === c ? 'van-icon' : c,
          a = e.name,
          i = e.color,
          o = e.size,
          u = e.dot,
          l = e.info,
          s = e.style,
          f = e.className,
          d = y()(e, V)
        return Object(T.jsxs)(
          C.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ((n = { classPrefix: r, name: a }),
                  (t = []),
                  null != n.classPrefix && t.push(n.classPrefix),
                  isImage(n.name)
                    ? t.push('van-icon--image')
                    : null != n.classPrefix &&
                      t.push(n.classPrefix + '-' + n.name),
                  t.join(' ') + ' '.concat(f || '')),
                style: _.c([rootStyle({ color: i, size: o }), s]),
              },
              d,
            ),
            {},
            {
              children: [
                (l || 0 === l || u) &&
                  Object(T.jsx)(k.a, {
                    dot: u,
                    info: l,
                    className: 'van-icon__info',
                  }),
                isImage(a) &&
                  Object(T.jsx)(C.f, {
                    src: a,
                    mode: 'aspectFit',
                    className: 'van-icon__image',
                  }),
              ],
            },
          ),
        )
      }
      n.b = Icon
    },
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
      var c = t(591),
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
    576: function (e, n, t) {},
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var c = t(574),
          r = t(568),
          a = t(90),
          i = t(737),
          o = t(77),
          u = t(64),
          l = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            s = n.className,
            f = void 0 === s ? '' : s,
            d = n.children,
            b = a.a.useRouter().path
          return (
            Object(u.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(i.a)({ scrollTop: 0 })
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
                        return Object(o.d)()
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
        return s
      })
      var c = t(39),
        r = t(40),
        a = t(66),
        i = t(65),
        o = t(568),
        u = t(64),
        l = (t(582), t(115)),
        s = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(i.a)(Index)
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
                  return Object(l.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(l.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
                        ? Object(l.jsx)(o.n, {
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
        })(u.Component)
    },
    580: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return addUnit
      })
      var c = t(90)
      function addUnit(e) {
        if (null != e)
          return /^-?\d+(\.\d+)?$/.test('' + e) ? c.a.pxTransform(e) : e
      }
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    583: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return style
      })
      var c = t(10),
        r = t.n(c),
        a = t(32),
        i = t.n(a),
        o = (t(0), t(92), t(614)),
        u = t(620)
      function style(e) {
        var n, t, c
        return o.a(e)
          ? r()(
              (n = i()(e).call(e, function (e) {
                return null != e && '' !== e
              })),
            )
              .call(n, function (e) {
                return style(e)
              })
              .join(';')
          : '[object Object]' === toString.call(e)
          ? r()(
              (t = i()((c = u.a(e))).call(c, function (n) {
                return null != e[n] && '' !== e[n]
              })),
            )
              .call(t, function (n) {
                return [
                  ((t = n),
                  null ===
                    (c = t.replace(new RegExp('[A-Z]', 'g'), function (e) {
                      return '-' + e
                    })) || void 0 === c
                    ? void 0
                    : c.toLowerCase()),
                  [e[n]],
                ].join(':')
                var t, c
              })
              .join(';')
          : e
      }
    },
    584: function (e, n, t) {},
    585: function (e, n, t) {},
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(572),
        u = t.n(o),
        l = t(577),
        s = t.n(l),
        f = t(573),
        d = t.n(f),
        b = t(595),
        v = t.n(b),
        m = t(10),
        j = t.n(m),
        p = t(24),
        h = t.n(p),
        O = t(571),
        g = t.n(O),
        x = t(32),
        y = t.n(x),
        C = t(570),
        _ = t.n(C),
        k = t(27),
        I = t.n(k),
        S = t(173),
        N = t.n(S),
        w = t(568),
        T = t(64),
        V = t(569),
        K = t(580)
      function textStyle(e) {
        return Object(V.c)({ 'font-size': Object(K.a)(e.textSize) })
      }
      var P = t(115),
        H = [
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
        if (g.a) {
          var c = g()(e)
          n &&
            (c = y()(c).call(c, function (n) {
              return _()(e, n).enumerable
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
            I()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              u()(e, n, c[n])
            })
          else if (N.a) r()(e, N()(c))
          else {
            var a
            I()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, _()(c, n))
            })
          }
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          c = e.type,
          r = void 0 === c ? 'circular' : c,
          a = e.color,
          i = e.size,
          o = e.textSize,
          u = e.className,
          l = e.children,
          f = e.style,
          b = d()(e, H),
          m = Object(T.useState)(v()({ length: 12 })),
          p = s()(m, 1)[0]
        return Object(P.jsxs)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + V.b('loading', { vertical: t }) + ' ' + u,
                style: V.c([f]),
              },
              b,
            ),
            {},
            {
              children: [
                Object(P.jsx)(w.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + r,
                  style:
                    ((n = { color: a, size: i }),
                    Object(V.c)({
                      color: n.color,
                      width: Object(K.a)(n.size),
                      height: Object(K.a)(n.size),
                    })),
                  children:
                    'spinner' === r &&
                    Object(P.jsx)(w.a, {
                      children: j()(p).call(p, function (e, n) {
                        return Object(P.jsx)(
                          w.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(P.jsx)(w.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: o }),
                  children: l,
                }),
              ],
            },
          ),
        )
      }
      n.b = Loading
    },
    587: function (e, n, t) {},
    590: function (e, n, t) {
      'use strict'
      t(576), t(584), t(585)
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
      var c,
        r = t(148),
        a = t.n(r),
        i = t(24),
        o = t.n(i),
        u = t(21),
        l = t.n(u),
        s = t(5),
        f = t.n(s),
        d = (t(567), t(863)),
        b = (t(866), t(90)),
        v = t(790),
        m = (t(77), t(575))
      t(596)
      function range(e, n, t) {
        return Math.min(Math.max(e, n), t)
      }
      function getSystemInfoSync() {
        return null == c && (c = Object(d.a)()), c
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
          : Object(v.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                e()
              })
      }
      function pickExclude(e, n) {
        var t
        return Object(m.e)(e)
          ? a()((t = o()(e))).call(
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
        return Object(m.f)(e) ? e : f.a.resolve(e)
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
      var c,
        r = t(117),
        a = t.n(r),
        i = t(863),
        o = t(864)
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
                i = a()(n[c], 10)
              if (r > i) return 1
              if (r < i) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == c && (c = Object(i.a)()), c
            })().SDKVersion,
            e,
          ) >= 0
        )
      }
      function canIUseModel() {
        return gte('2.9.3')
      }
      function canIUseNextTick() {
        return Object(o.a)('nextTick')
      }
    },
    614: function (e, n, t) {
      'use strict'
      function isArray(e) {
        return e && '[object Array]' === toString.call(e)
      }
      t.d(n, 'a', function () {
        return isArray
      })
    },
    620: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return keys
      })
      var c = t(10),
        r = t.n(c),
        a = t(149),
        i = t.n(a),
        o = new RegExp('{|}|"', 'g')
      function keys(e) {
        var n
        return r()((n = i()(e).replace(o, '').split(','))).call(
          n,
          function (e) {
            return e.split(':')[0]
          },
        )
      }
    },
    667: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Info
      })
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(24),
        u = t.n(o),
        l = t(571),
        s = t.n(l),
        f = t(32),
        d = t.n(f),
        b = t(570),
        v = t.n(b),
        m = t(27),
        j = t.n(m),
        p = t(173),
        h = t.n(p),
        O = t(572),
        g = t.n(O),
        x = t(573),
        y = t.n(x),
        C = t(568),
        _ = t(569),
        k = t(115),
        I = ['dot', 'info', 'style', 'className']
      function ownKeys(e, n) {
        var t = u()(e)
        if (s.a) {
          var c = s()(e)
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
            j()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              g()(e, n, c[n])
            })
          else if (h.a) r()(e, h()(c))
          else {
            var a
            j()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      function Info(e) {
        var n = e.dot,
          t = e.info,
          c = void 0 === t ? null : t,
          r = e.style,
          a = e.className,
          i = y()(e, I)
        return Object(k.jsx)(k.Fragment, {
          children:
            (c || 0 === c || n) &&
            Object(k.jsx)(
              C.n,
              _objectSpread(
                _objectSpread(
                  {
                    className: 'van-info ' + _.b('info', { dot: n }) + '  ' + a,
                    style: _.c([r]),
                  },
                  i,
                ),
                {},
                { children: n ? '' : c },
              ),
            ),
        })
      }
      n.b = Info
    },
    677: function (e, n, t) {
      'use strict'
      var c = t(116),
        r = t.n(c),
        a = t(55),
        i = t.n(a),
        o = t(572),
        u = t.n(o),
        l = t(573),
        s = t.n(l),
        f = t(672),
        d = t.n(f),
        b = t(10),
        v = t.n(b),
        m = t(5),
        j = t.n(m),
        p = t(149),
        h = t.n(p),
        O = t(24),
        g = t.n(O),
        x = t(571),
        y = t.n(x),
        C = t(32),
        _ = t.n(C),
        k = t(570),
        I = t.n(k),
        S = t(27),
        N = t.n(S),
        w = t(173),
        T = t.n(w),
        V = t(64),
        K = t(568),
        P = t(577),
        H = t.n(P),
        R = t(569),
        z = t(593),
        A = t(575),
        E = t(591),
        D = t.n(E)
      t(580)
      function optionText(e, n) {
        return (function isObj(e) {
          var n = D()(e)
          return null !== e && ('object' === n || 'function' === n)
        })(e) && null != e[n]
          ? e[n]
          : e
      }
      function wrapperStyle(e) {
        var n = e.offset + (e.itemHeight * (e.visibleItemCount - 1)) / 2
        return Object(R.c)({
          transition: 'transform ' + e.duration + 'ms',
          'line-height': e.itemHeight + 'px',
          transform: 'translate3d(0, ' + n + 'px, 0)',
        })
      }
      var B = t(115),
        M = [
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
      function ownKeys(e, n) {
        var t = g()(e)
        if (y.a) {
          var c = y()(e)
          n &&
            (c = _()(c).call(c, function (n) {
              return I()(e, n).enumerable
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
            N()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              u()(e, n, c[n])
            })
          else if (T.a) r()(e, T()(c))
          else {
            var a
            N()((a = ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, I()(c, n))
            })
          }
        }
        return e
      }
      function picker_column_Index(e, n) {
        var t = e.valueKey,
          c = e.itemHeight,
          r = void 0 === c ? 48 : c,
          a = e.visibleItemCount,
          i = void 0 === a ? 5 : a,
          o = e.initialOptions,
          u = e.defaultIndex,
          l = e.className,
          f = e.style,
          d = e.onChange,
          b = e.index,
          m = s()(e, M),
          p = Object(V.useState)([]),
          h = H()(p, 2),
          O = h[0],
          g = h[1],
          x = Object(V.useState)(),
          y = H()(x, 2),
          C = y[0],
          _ = y[1],
          k = Object(V.useState)(0),
          I = H()(k, 2),
          S = I[0],
          N = I[1],
          w = Object(V.useState)(0),
          T = H()(w, 2),
          P = T[0],
          E = T[1],
          D = Object(V.useState)(0),
          U = H()(D, 2),
          L = U[0],
          F = U[1],
          Y = Object(V.useState)(0),
          q = H()(Y, 2),
          J = q[0],
          $ = q[1],
          Z = Object(V.useState)(!0),
          G = H()(Z, 2),
          Q = G[0],
          W = G[1],
          X = Object(V.useCallback)(function (e) {
            return Object(A.d)(e) && e.disabled
          }, []),
          ee = Object(V.useCallback)(
            function (e) {
              for (
                var n = O.length ? O : o,
                  t = n.length,
                  c = (e = Object(z.g)(e, 0, t));
                c < t;
                c++
              )
                if (!X(n[c])) return c
              for (var r = e - 1; r >= 0; r--) if (!X(n[r])) return r
            },
            [X, O, o],
          ),
          ne = Object(V.useCallback)(
            function (e, n) {
              var t = -(e = ee(e) || 0) * Number(r)
              return e !== C ? (_(e), F(t), void (d && n && d(b))) : F(t)
            },
            [ee, b, C, r, d],
          )
        Object(V.useEffect)(function () {
          _(u), ne(u || 0)
        }, []),
          Object(V.useEffect)(
            function () {
              Q && g(o || [])
            },
            [Q, o],
          )
        var te = Object(V.useCallback)(
            function (e) {
              e.preventDefault(), e.stopPropagation()
              var n = e.touches[0].clientY - P
              F(Object(z.g)(J + n, -O.length * Number(r), r))
            },
            [J, r, O, P],
          ),
          ce = Object(V.useCallback)(
            function (e) {
              E(e.touches[0].clientY), $(L), N(0)
            },
            [L],
          ),
          re = Object(V.useCallback)(
            function () {
              if (L !== J) {
                N(200)
                var e = Object(z.g)(Math.round(-L / Number(r)), 0, O.length - 1)
                setTimeout(function () {
                  ne(e, !0)
                }, 5.5)
              }
            },
            [J, L, r, O.length, ne],
          ),
          ae = Object(V.useCallback)(
            function (e) {
              var n = e.currentTarget.dataset.index
              setTimeout(function () {
                ne(Number(n), !0)
              })
            },
            [ne],
          ),
          ie = Object(V.useCallback)(
            function () {
              return C
            },
            [C],
          ),
          oe = Object(V.useCallback)(
            function () {
              return O[C]
            },
            [O, C],
          ),
          ue = Object(V.useCallback)(
            function (e) {
              return Object(A.d)(e) && t && t in e ? e[t] : e
            },
            [t],
          ),
          le = Object(V.useCallback)(
            function (e) {
              for (var n = 0; n < O.length; n++)
                if (ue(O[n]) === e) return ne(n)
              return j.a.resolve()
            },
            [ne, ue, O],
          )
        Object(V.useImperativeHandle)(n, function () {
          return {
            getCurrentIndex: ie,
            getValue: oe,
            setValue: le,
            props: e,
            setIndex: ne,
            set: function set(e) {
              return new j.a(function (n) {
                g(e.options), W(!1), n()
              })
            },
          }
        })
        var se,
          fe = Object(B.jsx)(K.n, {
            style: wrapperStyle({
              offset: L,
              itemHeight: r,
              visibleItemCount: i,
              duration: S,
            }),
            onTouchStart: ce,
            onTouchMove: te,
            onTouchEnd: re,
            onTouchCancel: re,
            catchMove: !0,
            children: v()(O).call(O, function (e, n) {
              return Object(B.jsx)(
                K.n,
                {
                  'disable-scroll': !0,
                  'data-index': n,
                  style: { height: r + 'px' },
                  className:
                    'van-ellipsis ' +
                    R.b('picker-column__item', {
                      disabled: e && e.disabled,
                      selected: n === C,
                    }) +
                    ' ' +
                    (n === C ? 'active-class' : ''),
                  onClick: ae,
                  children: optionText(e, t),
                },
                'picker-column__item'.concat(n),
              )
            }),
          })
        return Object(B.jsx)(
          K.n,
          _objectSpread(
            _objectSpread(
              {
                className: 'van-picker-column  '.concat(l),
                style: R.c([
                  ((se = { itemHeight: r, visibleItemCount: i }),
                  Object(R.c)({
                    height: se.itemHeight * se.visibleItemCount + 'px',
                  })),
                  f,
                ]),
              },
              m,
            ),
            {},
            { children: Object(B.jsx)(B.Fragment, { children: fe }) },
          ),
        )
      }
      var U = Object(V.memo)(Object(V.forwardRef)(picker_column_Index)),
        L = t(586),
        F = t(614)
      function maskStyle(e) {
        return Object(R.c)({
          'background-size':
            '100% ' + (e.itemHeight * (e.visibleItemCount - 1)) / 2 + 'px',
        })
      }
      function frameStyle(e) {
        return Object(R.c)({ height: e.itemHeight + 'px' })
      }
      function wxs_columns(e) {
        return Object(F.a)(e)
          ? e.length && !d()(e[0])
            ? [{ values: e }]
            : e
          : []
      }
      var Y = [
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
      function picker_ownKeys(e, n) {
        var t = g()(e)
        if (y.a) {
          var c = y()(e)
          n &&
            (c = _()(c).call(c, function (n) {
              return I()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function picker_objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            N()((t = picker_ownKeys(Object(c), !0))).call(t, function (n) {
              u()(e, n, c[n])
            })
          else if (T.a) r()(e, T()(c))
          else {
            var a
            N()((a = picker_ownKeys(Object(c)))).call(a, function (n) {
              i()(e, n, I()(c, n))
            })
          }
        }
        return e
      }
      var q = Object(V.forwardRef)(function Index(e, n) {
        var t,
          c = e.valueKey,
          a = void 0 === c ? 'text' : c,
          o = e.toolbarPosition,
          u = void 0 === o ? 'top' : o,
          l = e.defaultIndex,
          f = e.columns,
          b = e.title,
          m = e.cancelButtonText,
          p = e.confirmButtonText,
          O = e.itemHeight,
          g = void 0 === O ? 48 : O,
          x = e.visibleItemCount,
          y = void 0 === x ? 5 : x,
          C = e.loading,
          _ = e.onChange,
          k = e.className,
          I = e.style,
          S = e.onCancel,
          N = e.onConfirm,
          w = e.showToolbar,
          T = void 0 === w || w,
          P = s()(e, Y),
          H = Object(V.useRef)([]),
          z = Object(V.useRef)(-1)
        Object(V.useEffect)(
          function () {
            Array.isArray(H) && H.length && M().catch(function () {})
          },
          [f, H],
        )
        var A = function emit(e) {
            var n,
              t =
                null == e || null === (n = e.currentTarget) || void 0 === n
                  ? void 0
                  : n.dataset.type,
              c = f && f.length && !d()(f[0])
            if ('number' != typeof e && t)
              'cancel' === t
                ? S &&
                  (i()(e, 'detail', {
                    value: { value: c ? E(0) : q(), index: c ? D(0) : J() },
                  }),
                  S(e))
                : 'confirm' === t &&
                  N &&
                  (i()(e, 'detail', {
                    value: { value: c ? E(0) : q(), index: c ? D(0) : J() },
                  }),
                  N(e))
            else if (_) {
              var a = {}
              ;(z.current = e),
                r()(a, {
                  detail: {
                    value: {
                      picker: {
                        setColumnValue: X,
                        getColumnValue: E,
                        setColumnValues: F,
                        getColumnValues: function getColumnValues(e) {
                          return H.current[e].options
                        },
                        getIndexes: J,
                        setIndexes: function setIndexes(e) {
                          var n = v()(e).call(e, function (e, n) {
                            return G(n, e)
                          })
                          return j.a.all(n)
                        },
                        setColumnIndex: G,
                        getColumnIndex: D,
                        getValues: q,
                        setColumns: M,
                        children: H,
                        setValues: W,
                        columns: f,
                      },
                      value: c ? E(0) : q(),
                      index: c ? D(0) : e,
                    },
                  },
                }),
                _(a)
            }
          },
          E = Object(V.useCallback)(function (e) {
            var n = H.current[e]
            return n && n.getValue()
          }, []),
          D = Object(V.useCallback)(function (e) {
            return (H.current[e] || {}).getCurrentIndex()
          }, []),
          M = Object(V.useCallback)(
            function () {
              var e,
                n = f && f.length && !d()(f[0]) ? [{ values: f }] : f,
                t = v()((e = n || [])).call(e, function (e, n) {
                  return F(n, d()(e))
                })
              return j.a.all(t)
            },
            [f],
          ),
          F = Object(V.useCallback)(function (e, n) {
            if (!(e <= z.current)) {
              var t = H.current[e]
              if (null == t)
                return j.a.reject(new Error('setColumnValues: 对应列不存在'))
              if (h()(t.props.options) === h()(n)) return j.a.resolve()
              var c = t.getCurrentIndex()
              return t.set({ options: n }).then(function () {
                c > n.length &&
                  setTimeout(function () {
                    t.setIndex(0), (z.current = -1)
                  })
              })
            }
          }, []),
          q = Object(V.useCallback)(function () {
            var e
            return v()((e = H.current)).call(e, function (e) {
              return e.getValue()
            })
          }, []),
          J = Object(V.useCallback)(function () {
            var e
            return v()((e = H.current)).call(e, function (e) {
              return e.getCurrentIndex()
            })
          }, []),
          $ = A,
          Z = Object(V.useCallback)(function () {}, []),
          G = Object(V.useCallback)(function (e, n) {
            var t = H.current[e]
            return null == t
              ? j.a.reject(new Error('setColumnIndex: 对应列不存在'))
              : t.setIndex(n)
          }, [])
        Object(V.useImperativeHandle)(n, function () {
          return {
            setColumnValue: X,
            getColumnValue: E,
            setColumnValues: F,
            getColumnValues: function getColumnValues(e) {
              return H.current[e].options
            },
            getIndexes: J,
            setIndexes: function setIndexes(e) {
              var n = v()(e).call(e, function (e, n) {
                return G(n, e)
              })
              return j.a.all(n)
            },
            setColumnIndex: G,
            getColumnIndex: D,
            getValues: q,
            setColumns: M,
            children: H,
            setValues: W,
            columns: f,
          }
        })
        var Q,
          W = function setValues(e) {
            var n = v()(e).call(e, function (e, n) {
              return X(n, e)
            })
            return j.a.all(n)
          },
          X = function setColumnValue(e, n) {
            var t = H.current[e] || {}
            return null == t
              ? j.a.reject(new Error('setColumnValue: 对应列不存在'))
              : t.setValue(n)
          },
          ee = Object(V.useCallback)(function (e) {
            e.preventDefault(), e.stopPropagation()
          }, [])
        return Object(B.jsxs)(
          K.n,
          picker_objectSpread(
            picker_objectSpread(
              { className: 'van-picker  '.concat(k), style: R.c([I]) },
              P,
            ),
            {},
            {
              onTouchMove: ee,
              children: [
                'top' === u &&
                  T &&
                  Object(B.jsxs)(K.n, {
                    className: 'van-picker__toolbar toolbar-class',
                    children: [
                      Object(B.jsx)(K.n, {
                        className: 'van-picker__cancel',
                        hoverClass: 'van-picker__cancel--hover',
                        hoverStayTime: 70,
                        'data-type': 'cancel',
                        onClick: A,
                        children: m || '取消',
                      }),
                      b &&
                        Object(B.jsx)(K.n, {
                          className: 'van-picker__title van-ellipsis',
                          children: b,
                        }),
                      Object(B.jsx)(K.n, {
                        className: 'van-picker__confirm',
                        hoverClass: 'van-picker__confirm--hover',
                        hoverStayTime: 70,
                        'data-type': 'confirm',
                        onClick: A,
                        children: p || '确定',
                      }),
                    ],
                  }),
                C &&
                  Object(B.jsx)(K.n, {
                    className: 'van-picker__loading',
                    children: Object(B.jsx)(L.a, { color: '#1989fa' }),
                  }),
                Object(B.jsxs)(K.n, {
                  className: 'van-picker__columns',
                  style:
                    ((Q = { itemHeight: g, visibleItemCount: y }),
                    Object(R.c)({ height: Q.itemHeight * Q.visibleItemCount })),
                  onTouchMove: Z,
                  children: [
                    v()((t = wxs_columns(f))).call(t, function (e, n) {
                      return Object(B.jsx)(
                        U,
                        {
                          className: 'van-picker__column column-class',
                          'data-index': n,
                          index: n,
                          valueKey: a,
                          initialOptions: d()(e),
                          defaultIndex: e.defaultIndex || l,
                          itemHeight: g,
                          visibleItemCount: y,
                          activeClass: 'active-class',
                          onChange: $,
                          ref: function ref(e) {
                            return (H.current[n] = e)
                          },
                        },
                        'van-picker__column_'.concat(n, 'column-class'),
                      )
                    }),
                    Object(B.jsx)(K.n, {
                      className: 'van-picker__mask',
                      style: maskStyle({ itemHeight: g, visibleItemCount: y }),
                    }),
                    Object(B.jsx)(K.n, {
                      className: 'van-picker__frame van-hairline--top-bottom',
                      style: frameStyle({ itemHeight: g }),
                    }),
                  ],
                }),
                'bottom' === u &&
                  T &&
                  Object(B.jsxs)(K.n, {
                    className: 'van-picker__toolbar toolbar-class',
                    children: [
                      Object(B.jsx)(K.n, {
                        className: 'van-picker__cancel',
                        hoverClass: 'van-picker__cancel--hover',
                        hoverStayTime: 70,
                        'data-type': 'cancel',
                        onClick: A,
                        children: m,
                      }),
                      b &&
                        Object(B.jsx)(K.n, {
                          className: 'van-picker__title van-ellipsis',
                          children: b,
                        }),
                      Object(B.jsx)(K.n, {
                        className: 'van-picker__confirm',
                        hoverClass: 'van-picker__confirm--hover',
                        hoverStayTime: 70,
                        'data-type': 'confirm',
                        onClick: A,
                        children: p,
                      }),
                    ],
                  }),
              ],
            },
          ),
        )
      })
      n.a = q
    },
    727: function (e, n, t) {},
    728: function (e, n, t) {},
    847: function (e, n, t) {},
    899: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return G
        })
      var c = t(39),
        r = t(40),
        a = t(175),
        i = t(66),
        o = t(65),
        u = t(91),
        l = t(64),
        s = t(578),
        f = t(579),
        d = (t(576), t(587), t(727), t(728), t(847), t(116)),
        b = t.n(d),
        v = t(55),
        m = t.n(v),
        j = t(572),
        p = t.n(j),
        h = t(573),
        O = t.n(h),
        g = t(10),
        x = t.n(g),
        y = t(0),
        C = t.n(y),
        _ = t(24),
        k = t.n(_),
        I = t(32),
        S = t.n(I),
        N = t(28),
        w = t.n(N),
        T = t(23),
        V = t.n(T),
        K = t(6),
        P = t.n(K),
        H = t(5),
        R = t.n(H),
        z = t(571),
        A = t.n(z),
        E = t(570),
        D = t.n(E),
        B = t(27),
        M = t.n(B),
        U = t(173),
        L = t.n(U)
      function displayColumns(e, n) {
        return V()(e).call(e, 0, +n)
      }
      var F = t(677),
        Y = t(115),
        q = [
          'showToolbar',
          'value',
          'areaList',
          'columnsNum',
          'columnsPlaceholder',
          'onCancel',
          'onChange',
          'onConfirm',
          'title',
          'loading',
          'itemHeight',
          'visibleItemCount',
          'cancelButtonText',
          'confirmButtonText',
        ]
      function ownKeys(e, n) {
        var t = k()(e)
        if (A.a) {
          var c = A()(e)
          n &&
            (c = S()(c).call(c, function (n) {
              return D()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function area_Index(e, n) {
        var t = e.showToolbar,
          c = void 0 === t || t,
          r = e.value,
          a = e.areaList,
          i = e.columnsNum,
          o = void 0 === i ? 3 : i,
          u = e.columnsPlaceholder,
          s = void 0 === u ? [] : u,
          f = e.onCancel,
          d = e.onChange,
          v = e.onConfirm,
          j = e.title,
          h = e.loading,
          g = e.itemHeight,
          y = e.visibleItemCount,
          _ = void 0 === y ? 6 : y,
          I = e.cancelButtonText,
          N = void 0 === I ? '取消' : I,
          T = e.confirmButtonText,
          K = void 0 === T ? '确认' : T,
          H = O()(e, q),
          z = Object(l.useRef)(null),
          A = Object(l.useRef)(''),
          E = Object(l.useMemo)(function () {
            return [{ values: [] }, { values: [] }, { values: [] }]
          }, []),
          B = Object(l.useRef)({}),
          U = Object(l.useCallback)(
            function (e) {
              return x()(e).call(e, function (e, n) {
                return !e || (e.code && e.name !== s[n])
                  ? e
                  : C()(C()({}, e), { code: '', name: '' })
              })
            },
            [s],
          ),
          J = Object(l.useCallback)(
            function (e) {
              return (a && a[''.concat(e, '_list')]) || {}
            },
            [a],
          ),
          $ = Object(l.useCallback)(
            function (e, n) {
              var t, c
              if ('province' !== e && !n) return []
              var r = J(e),
                a = x()((t = k()(r))).call(t, function (e) {
                  return { code: e, name: r[e] }
                })
              if (
                (null != n &&
                  ('9' === n[0] && 'city' === e && (n = '9'),
                  (a = S()(a).call(a, function (e) {
                    var t
                    return 0 === w()((t = e.code)).call(t, n)
                  }))),
                null !== (c = B.current) && void 0 !== c && c[e] && a.length)
              ) {
                var i,
                  o,
                  u =
                    'province' === e
                      ? ''
                      : 'city' === e
                      ? V()('000000').call('000000', 2, 4)
                      : V()('000000').call('000000', 4, 6)
                a.unshift({
                  code: P()((i = ''.concat(void 0 === n ? '' : n))).call(i, u),
                  name:
                    null === (o = B.current) || void 0 === o ? void 0 : o[e],
                })
              }
              return a
            },
            [J],
          ),
          Z = Object(l.useCallback)(
            function (e, n) {
              var t = 'province' === e ? 2 : 'city' === e ? 4 : 6,
                c = $(e, V()(n).call(n, 0, t - 2))
              '9' === n[0] && 'province' === e && (t = 1),
                (n = V()(n).call(n, 0, t))
              for (var r = 0; r < c.length; r++) {
                var a, i
                if (
                  (null == c ||
                  null === (a = c[r]) ||
                  void 0 === a ||
                  null === (i = a.code) ||
                  void 0 === i
                    ? void 0
                    : V()(i).call(i, 0, t)) === n
                )
                  return r
              }
              return 0
            },
            [$],
          ),
          G = Object(l.useCallback)(function () {
            return z.current
          }, []),
          Q = Object(l.useCallback)(
            function (e) {
              null == f || f(e)
            },
            [f],
          ),
          W = Object(l.useCallback)(
            function (e) {
              var n = e.detail.index,
                t = e.detail.value
              ;(t = U(t)), null == v || v({ detail: { value: t, index: n } })
            },
            [U, v],
          ),
          X = Object(l.useCallback)(
            function () {
              if (s.length) return '000000'
              var e = k()(J('county'))
              if (e[0]) return e[0]
              var n = k()(J('city'))
              return n[0] ? n[0] : ''
            },
            [J, s],
          ),
          ee = Object(l.useCallback)(
            function () {
              var e = G()
              if (e) {
                var n,
                  t = (A.current || X()) + '',
                  c = $('province'),
                  r = $('city', V()(t).call(t, 0, 2)),
                  a = [],
                  i = []
                if (
                  (o >= 1 &&
                    (a.push(e.setColumnValues(0, c, !1)),
                    i.push(Z('province', t))),
                  o >= 2)
                )
                  if (
                    (a.push(e.setColumnValues(1, r, !1)),
                    i.push(Z('city', t)),
                    r.length && '00' === V()(t).call(t, 2, 4))
                  )
                    t =
                      null == r || null === (n = r[0]) || void 0 === n
                        ? void 0
                        : n.code
                return (
                  3 === o &&
                    (a.push(
                      e.setColumnValues(
                        2,
                        $('county', V()(t).call(t, 0, 4)),
                        !1,
                      ),
                    ),
                    i.push(Z('county', t))),
                  R.a
                    .all(a)
                    .then(function () {
                      return e.setIndexes(i)
                    })
                    .catch(function () {})
                )
              }
            },
            [X, Z, $, G, o],
          ),
          ne = Object(l.useCallback)(
            function (e) {
              var n,
                t = e.detail,
                c = t.index,
                r = t.value,
                a = t.picker
              ;(A.current = r[c].code),
                null === (n = ee()) ||
                  void 0 === n ||
                  n.then(function () {
                    var e = {
                      detail: { picker: a, values: U(a.getValues()), index: c },
                    }
                    null == d || d(e)
                  })
            },
            [U, ee, d],
          ),
          te = Object(l.useCallback)(
            function () {
              var e,
                n = G()
              return n
                ? U(
                    S()((e = n.getValues())).call(e, function (e) {
                      return !!e
                    }),
                  )
                : []
            },
            [G, U],
          ),
          ce = Object(l.useCallback)(
            function () {
              var e = te(),
                n = {
                  code: '',
                  country: '',
                  province: '',
                  city: '',
                  county: '',
                }
              if (!e.length) return n
              var t = x()(e).call(e, function (e) {
                return e.name
              })
              return (
                (n.code = e[e.length - 1].code),
                '9' === n.code[0]
                  ? ((n.country = t[1] || ''), (n.province = t[2] || ''))
                  : ((n.province = t[0] || ''),
                    (n.city = t[1] || ''),
                    (n.county = t[2] || '')),
                n
              )
            },
            [te],
          ),
          re = Object(l.useCallback)(
            function (e) {
              return (A.current = e || ''), ee()
            },
            [ee],
          )
        return (
          Object(l.useEffect)(
            function () {
              B.current = {
                province: s[0] || '',
                city: s[1] || '',
                county: s[2] || '',
              }
            },
            [s],
          ),
          Object(l.useEffect)(
            function () {
              A.current = r
            },
            [r],
          ),
          Object(l.useEffect)(
            function () {
              ee()
            },
            [ee, a, r],
          ),
          Object(l.useImperativeHandle)(n, function () {
            return { reset: re, getDetail: ce }
          }),
          Object(Y.jsx)(
            F.a,
            (function _objectSpread(e) {
              for (var n = 1; n < arguments.length; n++) {
                var t,
                  c = null != arguments[n] ? arguments[n] : {}
                if (n % 2)
                  M()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                    p()(e, n, c[n])
                  })
                else if (L.a) b()(e, L()(c))
                else {
                  var r
                  M()((r = ownKeys(Object(c)))).call(r, function (n) {
                    m()(e, n, D()(c, n))
                  })
                }
              }
              return e
            })(
              {
                ref: z,
                className: 'van-area__picker',
                showToolbar: c,
                valueKey: 'name',
                title: j,
                loading: h,
                columns: displayColumns(E, o),
                itemHeight: g,
                visibleItemCount: _,
                cancelButtonText: N,
                confirmButtonText: K,
                onChange: ne,
                onConfirm: W,
                onCancel: Q,
              },
              H,
            ),
          )
        )
      }
      var J = Object(l.memo)(Object(l.forwardRef)(area_Index)),
        $ = t(568)
      function Demo() {
        return Object(Y.jsx)($.n, {
          children: Object(Y.jsx)(J, {
            areaList: {
              province_list: { 110000: '北京市', 120000: '天津市' },
              city_list: { 110100: '北京市', 120100: '天津市' },
              county_list: { 110101: '东城区', 110102: '西城区' },
            },
          }),
        })
      }
      var Z = t(786)
      function demo2_Demo() {
        return Object(Y.jsx)(J, { areaList: Z.a, value: '110101' })
      }
      function demo3_Demo() {
        return Object(Y.jsx)(J, { areaList: Z.a, columnsNum: 2, title: '标题' })
      }
      function demo4_Demo() {
        return Object(Y.jsx)(J, {
          areaList: Z.a,
          columnsPlaceholder: ['请选择', '请选择', '请选择'],
          title: '标题',
        })
      }
      var G = (function (e) {
        Object(i.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(u.a)(Object(a.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(Y.jsxs)(s.a, {
                  title: 'Area 省市区选择',
                  className: 'pages-area-index',
                  children: [
                    Object(Y.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(Y.jsx)(Demo, {}),
                    }),
                    Object(Y.jsx)(f.a, {
                      title: '选中省市区',
                      padding: !0,
                      children: Object(Y.jsx)(demo2_Demo, {}),
                    }),
                    Object(Y.jsx)(f.a, {
                      title: '配置显示列',
                      padding: !0,
                      children: Object(Y.jsx)(demo3_Demo, {}),
                    }),
                    Object(Y.jsx)(f.a, {
                      title: '配置列占位提示文字',
                      padding: !0,
                      children: Object(Y.jsx)(demo4_Demo, {}),
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