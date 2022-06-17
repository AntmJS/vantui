;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    582: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Loading
      })
      var a = t(572),
        c = t.n(a),
        r = t(576),
        o = t.n(r),
        i = t(573),
        l = t.n(i),
        s = t(592),
        u = t.n(s),
        b = t(10),
        d = t.n(b),
        j = t(24),
        p = t.n(j),
        f = t(571),
        m = t.n(f),
        v = t(32),
        x = t.n(v),
        h = t(570),
        O = t.n(h),
        _ = t(27),
        y = t.n(_),
        g = t(173),
        S = t.n(g),
        N = t(116),
        T = t.n(N),
        k = t(55),
        w = t.n(k),
        z = t(568),
        C = t(64),
        I = t(569),
        K = t(578)
      function textStyle(e) {
        return Object(I.c)({ 'font-size': Object(K.a)(e.textSize) })
      }
      var B = t(115),
        D = [
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
        var t = p()(e)
        if (m.a) {
          var a = m()(e)
          n &&
            (a = x()(a).call(a, function (n) {
              return O()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a,
            r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? y()((t = ownKeys(Object(r), !0))).call(t, function (n) {
                c()(e, n, r[n])
              })
            : S.a
            ? T()(e, S()(r))
            : y()((a = ownKeys(Object(r)))).call(a, function (n) {
                w()(e, n, O()(r, n))
              })
        }
        return e
      }
      function Loading(e) {
        var n,
          t = e.vertical,
          a = e.type,
          c = void 0 === a ? 'circular' : a,
          r = e.color,
          i = e.size,
          s = e.textSize,
          b = e.className,
          j = e.children,
          p = e.style,
          f = l()(e, D),
          m = Object(C.useState)(u()({ length: 12 })),
          v = o()(m, 1)[0]
        return Object(B.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + I.b('loading', { vertical: t }) + ' ' + b,
                style: I.c([p]),
              },
              f,
            ),
            {},
            {
              children: [
                Object(B.jsx)(z.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + c,
                  style:
                    ((n = { color: r, size: i }),
                    Object(I.c)({
                      color: n.color,
                      width: Object(K.a)(n.size),
                      height: Object(K.a)(n.size),
                    })),
                  children:
                    'spinner' === c &&
                    Object(B.jsx)(z.a, {
                      children: d()(v).call(v, function (e, n) {
                        return Object(B.jsx)(
                          z.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(n),
                        )
                      }),
                    }),
                }),
                Object(B.jsx)(z.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: s }),
                  children: j,
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
      var a = t(24),
        c = t.n(a),
        r = t(571),
        o = t.n(r),
        i = t(32),
        l = t.n(i),
        s = t(570),
        u = t.n(s),
        b = t(27),
        d = t.n(b),
        j = t(173),
        p = t.n(j),
        f = t(116),
        m = t.n(f),
        v = t(55),
        x = t.n(v),
        h = t(572),
        O = t.n(h),
        _ = t(573),
        y = t.n(_),
        g = t(90),
        S = t(568),
        N = t(569),
        T = t(577),
        k = t(582),
        w = t(28),
        z = t.n(w),
        C = t(579)
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
          Object(C.a)([t])
        )
      }
      var I = t(115),
        K = [
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
        var t = c()(e)
        if (o.a) {
          var a = o()(e)
          n &&
            (a = l()(a).call(a, function (n) {
              return u()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? d()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                O()(e, n, c[n])
              })
            : p.a
            ? m()(e, p()(c))
            : d()((a = ownKeys(Object(c)))).call(a, function (n) {
                x()(e, n, u()(c, n))
              })
        }
        return e
      }
      var B = !1,
        D = 10
      if (!B)
        var L = setInterval(function () {
          if (--D > 0)
            for (
              var e = document.getElementsByTagName('style') || [],
                n = e.length - 1;
              n >= 0;
              n--
            ) {
              var t = e[n],
                a = t.innerHTML
              if (a && /^taro-button-core{/.test(a)) {
                t.remove(), (B = !0), L && clearInterval(L)
                break
              }
            }
          else L && clearInterval(L)
        }, 200)
      function Button(e) {
        var n,
          t = e.type,
          a = void 0 === t ? 'default' : t,
          c = e.size,
          r = void 0 === c ? 'normal' : c,
          o = e.block,
          i = e.round,
          l = e.plain,
          s = e.square,
          u = e.loading,
          b = e.disabled,
          d = e.hairline,
          j = e.color,
          p = e.loadingSize,
          f = void 0 === p ? g.a.pxTransform(40) : p,
          m = e.loadingType,
          v = void 0 === m ? 'circular' : m,
          x = e.loadingText,
          h = e.icon,
          O = e.classPrefix,
          _ = void 0 === O ? 'van-icon' : O,
          w = e.onClick,
          z = e.children,
          C = e.style,
          B = e.className,
          D = y()(e, K)
        return Object(I.jsx)(
          S.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  N.b('button', [
                    a,
                    r,
                    {
                      block: o,
                      round: i,
                      plain: l,
                      square: s,
                      loading: u,
                      disabled: b,
                      hairline: d,
                      unclickable: b || u,
                    },
                  ]) +
                  ' ' +
                  (d ? 'van-hairline--surround' : '') +
                  ' '.concat(B || ''),
                hoverClass: 'van-button--active hover-class',
                style: N.c([rootStyle({ plain: l, color: j }), C]),
                onClick: b || u ? void 0 : w,
              },
              D,
            ),
            {},
            {
              children: u
                ? Object(I.jsxs)(S.n, {
                    style: 'display: flex',
                    children: [
                      Object(I.jsx)(k.a, {
                        className: 'loading-class',
                        size: f,
                        type: v,
                        color:
                          ((n = { type: a, color: j, plain: l }),
                          n.plain
                            ? n.color
                              ? n.color
                              : '#c9c9c9'
                            : 'default' === n.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      x &&
                        Object(I.jsx)(S.n, {
                          className: 'van-button__loading-text',
                          children: x,
                        }),
                    ],
                  })
                : Object(I.jsxs)(S.a, {
                    children: [
                      h &&
                        Object(I.jsx)(T.a, {
                          size: '1.2em',
                          name: h,
                          classPrefix: _,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(I.jsx)(S.n, {
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
    595: function (e, n, t) {},
    645: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Tag
      })
      var a = t(24),
        c = t.n(a),
        r = t(571),
        o = t.n(r),
        i = t(32),
        l = t.n(i),
        s = t(570),
        u = t.n(s),
        b = t(27),
        d = t.n(b),
        j = t(173),
        p = t.n(j),
        f = t(116),
        m = t.n(f),
        v = t(55),
        x = t.n(v),
        h = t(572),
        O = t.n(h),
        _ = t(573),
        y = t.n(_),
        g = t(568),
        S = t(569),
        N = t(577),
        T = t(579)
      var k = t(115),
        w = [
          'type',
          'size',
          'mark',
          'plain',
          'round',
          'color',
          'textColor',
          'closeable',
          'children',
          'onClose',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = c()(e)
        if (o.a) {
          var a = o()(e)
          n &&
            (a = l()(a).call(a, function (n) {
              return u()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? d()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                O()(e, n, c[n])
              })
            : p.a
            ? m()(e, p()(c))
            : d()((a = ownKeys(Object(c)))).call(a, function (n) {
                x()(e, n, u()(c, n))
              })
        }
        return e
      }
      function Tag(e) {
        var n,
          t = e.type,
          a = void 0 === t ? 'default' : t,
          c = e.size,
          r = e.mark,
          o = e.plain,
          i = e.round,
          l = e.color,
          s = e.textColor,
          u = e.closeable,
          b = e.children,
          d = e.onClose,
          j = e.style,
          p = e.className,
          f = y()(e, w)
        return Object(k.jsxs)(
          g.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  S.b('tag', [a, c, { mark: r, plain: o, round: i }]) +
                  ' '.concat(p || ''),
                style: S.c([
                  ((n = { plain: o, color: l, textColor: s }),
                  Object(T.a)({
                    'background-color': n.plain ? '' : n.color,
                    color: n.textColor || n.plain ? n.textColor || n.color : '',
                  })),
                  j,
                ]),
              },
              f,
            ),
            {},
            {
              children: [
                b,
                u &&
                  Object(k.jsx)(N.a, {
                    name: 'cross',
                    className: 'van-tag__close',
                    onClick: d,
                  }),
              ],
            },
          ),
        )
      }
      n.b = Tag
    },
    663: function (e, n, t) {
      'use strict'
      t(574), t(580), t(581), t(699)
    },
    699: function (e, n, t) {},
    849: function (e, n, t) {},
    906: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return F
        })
      var a = t(39),
        c = t(40),
        r = t(175),
        o = t(66),
        i = t(65),
        l = t(91),
        s = t(64),
        u = t(587),
        b = t(588),
        d = (t(574), t(583), t(580), t(581), t(595), t(849), t(24)),
        j = t.n(d),
        p = t(571),
        f = t.n(p),
        m = t(32),
        v = t.n(m),
        x = t(570),
        h = t.n(x),
        O = t(27),
        _ = t.n(O),
        y = t(173),
        g = t.n(y),
        S = t(116),
        N = t.n(S),
        T = t(55),
        k = t.n(T),
        w = t(572),
        z = t.n(w),
        C = t(576),
        I = t.n(C),
        K = t(573),
        B = t.n(K),
        D = t(568),
        L = t(577),
        P = t(584),
        q = t(115),
        E = [
          'tipIcon',
          'tip',
          'label',
          'currency',
          'suffixLabel',
          'buttonType',
          'price',
          'loading',
          'disabled',
          'buttonText',
          'safeAreaInsetBottom',
          'renderTop',
          'renderTip',
          'decimalLength',
          'onSubmit',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = j()(e)
        if (f.a) {
          var a = f()(e)
          n &&
            (a = v()(a).call(a, function (n) {
              return h()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? _()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                z()(e, n, c[n])
              })
            : g.a
            ? N()(e, g()(c))
            : _()((a = ownKeys(Object(c)))).call(a, function (n) {
                k()(e, n, h()(c, n))
              })
        }
        return e
      }
      var A = function SubmitBar(e) {
        var n = e.tipIcon,
          t = e.tip,
          a = e.label,
          c = e.currency,
          r = void 0 === c ? '¥' : c,
          o = e.suffixLabel,
          i = e.buttonType,
          l = void 0 === i ? 'danger' : i,
          u = e.price,
          b = e.loading,
          d = e.disabled,
          j = e.buttonText,
          p = e.safeAreaInsetBottom,
          f = void 0 === p || p,
          m = e.renderTop,
          v = e.renderTip,
          x = e.decimalLength,
          h = e.onSubmit,
          O = e.children,
          _ = e.style,
          y = e.className,
          g = B()(e, E),
          S = Object(s.useState)({
            hasTip: !1,
            integerStr: '',
            decimalStr: '',
            hasPrice: !1,
          }),
          N = I()(S, 2),
          T = N[0],
          k = N[1],
          w = T.hasTip,
          z = T.integerStr,
          C = T.decimalStr,
          K = T.hasPrice
        return (
          Object(s.useEffect)(
            function () {
              k(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { hasTip: 'string' == typeof t },
                )
              })
            },
            [t],
          ),
          Object(s.useEffect)(
            function () {
              var e = 'number' == typeof u && (u / 100).toFixed(x).split('.')
              k(function (n) {
                return _objectSpread(
                  _objectSpread({}, n),
                  {},
                  {
                    hasPrice: 'number' == typeof u,
                    integerStr: e && e[0],
                    decimalStr: x && e ? '.'.concat(e[1]) : '',
                  },
                )
              })
            },
            [x, u],
          ),
          Object(q.jsxs)(
            D.n,
            _objectSpread(
              _objectSpread(
                { className: 'van-submit-bar  '.concat(y || ''), style: _ },
                g,
              ),
              {},
              {
                children: [
                  m,
                  Object(q.jsxs)(D.n, {
                    className: 'van-submit-bar__tip',
                    children: [
                      n &&
                        Object(q.jsx)(L.a, {
                          size: '12px',
                          name: n,
                          className: 'van-submit-bar__tip-icon',
                        }),
                      w &&
                        Object(q.jsx)(D.n, {
                          className: 'van-submit-bar__tip-text',
                          children: t,
                        }),
                      v,
                    ],
                  }),
                  Object(q.jsxs)(D.n, {
                    className: 'bar-class van-submit-bar__bar',
                    children: [
                      O,
                      K &&
                        Object(q.jsxs)(D.n, {
                          className: 'van-submit-bar__text',
                          children: [
                            Object(q.jsx)(D.k, { children: a || '合计：' }),
                            Object(q.jsxs)(D.k, {
                              className: 'van-submit-bar__price price-class',
                              children: [
                                Object(q.jsx)(D.k, {
                                  className: 'van-submit-bar__currency',
                                  children: r,
                                }),
                                Object(q.jsx)(D.k, {
                                  className: 'van-submit-bar__price-integer',
                                  children: z,
                                }),
                                Object(q.jsx)(D.k, { children: C }),
                              ],
                            }),
                            Object(q.jsx)(D.k, {
                              className: 'van-submit-bar__suffix-label',
                              children: o,
                            }),
                          ],
                        }),
                      Object(q.jsx)(P.a, {
                        round: !0,
                        type: l,
                        loading: b,
                        disabled: d,
                        className: 'van-submit-bar__button button-class',
                        onClick: h,
                        children: b ? '' : j,
                      }),
                    ],
                  }),
                  f &&
                    Object(q.jsx)(D.n, { className: 'van-submit-bar__safe' }),
                ],
              },
            ),
          )
        )
      }
      function Demo() {
        return Object(q.jsx)(A, {
          price: 3050,
          buttonText: '提交订单',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      function demo2_Demo() {
        return Object(q.jsx)(A, {
          disabled: !0,
          price: 3050,
          buttonText: '提交订单',
          tip: '您的收货地址不支持同城送, 我们已为您推荐快递',
          tipIcon: 'infoO',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      function demo3_Demo() {
        return Object(q.jsx)(A, {
          loading: !0,
          price: 3050,
          buttonText: '提交订单',
          onSubmit: function onSubmit() {
            return console.info('提交')
          },
        })
      }
      t(663)
      var J = t(645)
      function demo4_Demo() {
        return Object(q.jsx)(A, {
          price: 3050,
          buttonText: '提交订单',
          tip: !0,
          renderTip: Object(q.jsxs)(D.n, {
            children: [
              '您的收货地址不支持同城送,',
              Object(q.jsx)(D.k, { children: '修改地址' }),
            ],
          }),
          children: Object(q.jsx)(J.b, { type: 'primary', children: '标签' }),
        })
      }
      var F = (function (e) {
        Object(o.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(r.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(q.jsxs)(u.a, {
                  title: 'SubmitBar 提交订单栏',
                  className: 'pages-submit-bar-index',
                  children: [
                    Object(q.jsx)(b.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(q.jsx)(Demo, {}),
                    }),
                    Object(q.jsx)(b.a, {
                      title: '禁用状态',
                      padding: !0,
                      children: Object(q.jsx)(demo2_Demo, {}),
                    }),
                    Object(q.jsx)(b.a, {
                      title: '加载状态',
                      padding: !0,
                      children: Object(q.jsx)(demo3_Demo, {}),
                    }),
                    Object(q.jsx)(b.a, {
                      title: '高级用法',
                      padding: !0,
                      children: Object(q.jsx)(demo4_Demo, {}),
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
