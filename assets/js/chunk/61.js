;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    532: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return u
      })
      var o = t(37),
        c = t(38),
        a = t(65),
        i = t(64),
        l = t(518),
        r = t(63),
        s = (t(533), t(108)),
        u = (function (n) {
          Object(a.a)(Index, n)
          var e = Object(i.a)(Index)
          function Index() {
            return Object(o.a)(this, Index), e.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var n = this.props,
                    e = n.padding,
                    t = n.title,
                    o = n.card
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
                      o
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
        })(r.Component)
    },
    533: function (n, e, t) {},
    557: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return jumpLink
      })
      var o = t(75)
      function jumpLink(n, e) {
        var t
        if (((e = null !== (t = e) && void 0 !== t ? t : 'navigateTo'), n))
          if ('navigateTo' === e && Object(o.b)().length > 9)
            Object(o.g)({ url: n })
          else
            switch (e) {
              case 'navigateTo':
                Object(o.e)({ url: n })
                break
              case 'reLaunch':
                Object(o.f)({ url: n })
                break
              case 'redirectTo':
                Object(o.g)({ url: n })
            }
      }
    },
    560: function (n, e, t) {
      'use strict'
      t.d(e, 'a', function () {
        return Button
      })
      var o = t(22),
        c = t.n(o),
        a = t(520),
        i = t.n(a),
        l = t(30),
        r = t.n(l),
        s = t(519),
        u = t.n(s),
        d = t(26),
        j = t.n(d),
        b = t(169),
        f = t.n(b),
        p = t(109),
        v = t.n(p),
        x = t(52),
        O = t.n(x),
        h = t(522),
        y = t.n(h),
        m = t(523),
        g = t.n(m),
        k = t(87),
        N = t(518),
        _ = t(521),
        I = t(529),
        w = t(538),
        C = t(27),
        B = t.n(C),
        S = t(527)
      function rootStyle(n) {
        var e
        if (!n.color) return ''
        var t = {
          color: n.plain ? n.color : '#fff',
          background: n.plain ? null : n.color,
        }
        return (
          -1 !== B()((e = n.color)).call(e, 'gradient')
            ? (t.border = 0)
            : (t['border-color'] = n.color),
          Object(S.a)([t])
        )
      }
      var T = t(108),
        A = [
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
        var t = c()(n)
        if (i.a) {
          var o = i()(n)
          e &&
            (o = r()(o).call(o, function (e) {
              return u()(n, e).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            o = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            j()((t = ownKeys(Object(o), !0))).call(t, function (e) {
              y()(n, e, o[e])
            })
          else if (f.a) v()(n, f()(o))
          else {
            var c
            j()((c = ownKeys(Object(o)))).call(c, function (e) {
              O()(n, e, u()(o, e))
            })
          }
        }
        return n
      }
      var K = !1,
        G = 10
      if (!K)
        var L = setInterval(function () {
          if (--G > 0)
            for (
              var n = document.getElementsByTagName('style') || [],
                e = n.length - 1;
              e >= 0;
              e--
            ) {
              var t = n[e],
                o = t.innerHTML
              if (o && /^taro-button-core{/.test(o)) {
                t.remove(), (K = !0), L && clearInterval(L)
                break
              }
            }
          else L && clearInterval(L)
        }, 200)
      function Button(n) {
        var e,
          t = n.type,
          o = void 0 === t ? 'default' : t,
          c = n.size,
          a = void 0 === c ? 'normal' : c,
          i = n.block,
          l = n.round,
          r = n.plain,
          s = n.square,
          u = n.loading,
          d = n.disabled,
          j = n.hairline,
          b = n.color,
          f = n.loadingSize,
          p = void 0 === f ? k.a.pxTransform(40) : f,
          v = n.loadingType,
          x = void 0 === v ? 'circular' : v,
          O = n.loadingText,
          h = n.icon,
          y = n.classPrefix,
          m = void 0 === y ? 'van-icon' : y,
          C = n.onClick,
          B = n.children,
          S = n.style,
          K = n.className,
          G = g()(n, A)
        return Object(T.jsx)(
          N.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  _.b('button', [
                    o,
                    a,
                    {
                      block: i,
                      round: l,
                      plain: r,
                      square: s,
                      loading: u,
                      disabled: d,
                      hairline: j,
                      unclickable: d || u,
                    },
                  ]) +
                  ' ' +
                  (j ? 'van-hairline--surround' : '') +
                  ' '.concat(K || ''),
                hoverClass: 'van-button--active hover-class',
                style: _.c([rootStyle({ plain: r, color: b }), S]),
                onClick: d || u ? void 0 : C,
              },
              G,
            ),
            {},
            {
              children: u
                ? Object(T.jsxs)(N.n, {
                    style: 'display: flex',
                    children: [
                      Object(T.jsx)(w.a, {
                        className: 'loading-class',
                        size: p,
                        type: x,
                        color:
                          ((e = { type: o, color: b, plain: r }),
                          e.plain
                            ? e.color
                              ? e.color
                              : '#c9c9c9'
                            : 'default' === e.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      O &&
                        Object(T.jsx)(N.n, {
                          className: 'van-button__loading-text',
                          children: O,
                        }),
                    ],
                  })
                : Object(T.jsxs)(N.a, {
                    children: [
                      h &&
                        Object(T.jsx)(I.a, {
                          size: '1.2em',
                          name: h,
                          classPrefix: m,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(T.jsx)(N.n, {
                        className: 'van-button__text',
                        children: B,
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
    620: function (n, e, t) {},
    621: function (n, e, t) {},
    622: function (n, e, t) {
      'use strict'
      var o = t(22),
        c = t.n(o),
        a = t(520),
        i = t.n(a),
        l = t(30),
        r = t.n(l),
        s = t(519),
        u = t.n(s),
        d = t(26),
        j = t.n(d),
        b = t(169),
        f = t.n(b),
        p = t(109),
        v = t.n(p),
        x = t(52),
        O = t.n(x),
        h = t(522),
        y = t.n(h),
        m = t(523),
        g = t.n(m),
        k = t(63),
        N = t(560),
        _ = t(521),
        I = t(557),
        w = t(108),
        C = [
          'text',
          'url',
          'linkType',
          'plain',
          'type',
          'style',
          'isFirst',
          'isLast',
          'onClick',
          'children',
          'className',
        ]
      function ownKeys(n, e) {
        var t = c()(n)
        if (i.a) {
          var o = i()(n)
          e &&
            (o = r()(o).call(o, function (e) {
              return u()(n, e).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            o = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            j()((t = ownKeys(Object(o), !0))).call(t, function (e) {
              y()(n, e, o[e])
            })
          else if (f.a) v()(n, f()(o))
          else {
            var c
            j()((c = ownKeys(Object(o)))).call(c, function (e) {
              O()(n, e, u()(o, e))
            })
          }
        }
        return n
      }
      function GoodsActionButton(n) {
        var e = n.text,
          t = n.url,
          o = n.linkType,
          c = n.plain,
          a = n.type,
          i = void 0 === a ? 'danger' : a,
          l = n.style,
          r = n.isFirst,
          s = n.isLast,
          u = n.onClick,
          d = n.children,
          j = n.className,
          b = g()(n, C),
          f = Object(k.useCallback)(
            function (n) {
              null == u || u(n), t && Object(I.a)(t, o)
            },
            [o, u, t],
          )
        return Object(w.jsxs)(
          N.b,
          _objectSpread(
            _objectSpread(
              {
                type: i,
                plain: c,
                className:
                  _.b('goods-action-button', [
                    i,
                    { first: r, last: s, plain: c },
                  ]) + ' van-goods-action-button__inner '.concat(j || ''),
                style: l,
                onClick: f,
              },
              b,
            ),
            {},
            { children: [e, d] },
          ),
        )
      }
      ;(GoodsActionButton.displayName = 'GoodsActionButton'),
        (e.a = GoodsActionButton)
    },
    623: function (n, e, t) {
      'use strict'
      var o = t(523),
        c = t.n(o),
        a = t(522),
        i = t.n(a),
        l = t(30),
        r = t.n(l),
        s = t(9),
        u = t.n(s),
        d = t(22),
        j = t.n(d),
        b = t(520),
        f = t.n(b),
        p = t(519),
        v = t.n(p),
        x = t(26),
        O = t.n(x),
        h = t(169),
        y = t.n(h),
        m = t(109),
        g = t.n(m),
        k = t(52),
        N = t.n(k),
        _ = t(63),
        I = t(518),
        w = t(580),
        C = t.n(w),
        B = t(521),
        S = t(108),
        T = ['safeAreaInsetBottom', 'style', 'children', 'className']
      function ownKeys(n, e) {
        var t = j()(n)
        if (f.a) {
          var o = f()(n)
          e &&
            (o = r()(o).call(o, function (e) {
              return v()(n, e).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            o = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            O()((t = ownKeys(Object(o), !0))).call(t, function (e) {
              i()(n, e, o[e])
            })
          else if (y.a) g()(n, y()(o))
          else {
            var c
            O()((c = ownKeys(Object(o)))).call(c, function (e) {
              N()(n, e, v()(o, e))
            })
          }
        }
        return n
      }
      e.a = function GoodsAction(n) {
        var e = n.safeAreaInsetBottom,
          t = void 0 === e || e,
          o = n.style,
          a = n.children,
          i = n.className,
          l = c()(n, T),
          s = (function parseTabList(n) {
            var e, t
            return r()(
              (e = u()((t = C()(n))).call(t, function (n) {
                return Object(_.isValidElement)(n)
                  ? _objectSpread(
                      _objectSpread(
                        { key: void 0 !== n.key ? String(n.key) : void 0 },
                        n.props,
                      ),
                      {},
                      { node: n },
                    )
                  : null
              })),
            ).call(e, function (n) {
              return n
            })
          })(a),
          d = u()(s).call(s, function (n, e) {
            var t,
              o,
              c,
              a,
              i,
              l,
              r,
              u,
              d =
                'GoodsActionButton' ===
                (null === (t = n.node) ||
                void 0 === t ||
                null === (o = t.type) ||
                void 0 === o
                  ? void 0
                  : o.displayName),
              j =
                'GoodsActionButton' ===
                (null === (c = s[e - 1]) ||
                void 0 === c ||
                null === (a = c.node) ||
                void 0 === a ||
                null === (i = a.type) ||
                void 0 === i
                  ? void 0
                  : i.displayName),
              b =
                'GoodsActionButton' ===
                (null === (l = s[e + 1]) ||
                void 0 === l ||
                null === (r = l.node) ||
                void 0 === r ||
                null === (u = r.type) ||
                void 0 === u
                  ? void 0
                  : u.displayName)
            return Object(_.cloneElement)(n.node, {
              key: e,
              index: e,
              isFirst: !j && d,
              isLast: !b && d,
            })
          })
        return Object(S.jsx)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' + B.b('goods-action', { safe: t }) + ' '.concat(i || ''),
                style: o,
              },
              l,
            ),
            {},
            { children: d },
          ),
        )
      }
    },
    781: function (n, e, t) {},
    782: function (n, e, t) {},
    873: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function () {
          return H
        })
      t(525), t(621)
      var o = t(623),
        c = (t(537), t(530), t(531), t(563), t(620), t(622)),
        a = (t(781), t(22)),
        i = t.n(a),
        l = t(520),
        r = t.n(l),
        s = t(30),
        u = t.n(s),
        d = t(519),
        j = t.n(d),
        b = t(26),
        f = t.n(b),
        p = t(169),
        v = t.n(p),
        x = t(109),
        O = t.n(x),
        h = t(52),
        y = t.n(h),
        m = t(522),
        g = t.n(m),
        k = t(523),
        N = t.n(k),
        _ = t(63),
        I = t(518),
        w = t(560),
        C = t(529),
        B = t(557),
        S = t(108),
        T = [
          'text',
          'url',
          'linkType',
          'dot',
          'info',
          'icon',
          'style',
          'onClick',
          'renderIcon',
          'className',
        ]
      function ownKeys(n, e) {
        var t = i()(n)
        if (r.a) {
          var o = r()(n)
          e &&
            (o = u()(o).call(o, function (e) {
              return j()(n, e).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function _objectSpread(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            o = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            f()((t = ownKeys(Object(o), !0))).call(t, function (e) {
              g()(n, e, o[e])
            })
          else if (v.a) O()(n, v()(o))
          else {
            var c
            f()((c = ownKeys(Object(o)))).call(c, function (e) {
              y()(n, e, j()(o, e))
            })
          }
        }
        return n
      }
      var A = function GoodsActionIcon(n) {
          var e = n.text,
            t = n.url,
            o = n.linkType,
            c = n.dot,
            a = n.info,
            i = n.icon,
            l = n.style,
            r = n.onClick,
            s = n.renderIcon,
            u = n.className,
            d = N()(n, T),
            j = Object(_.useCallback)(
              function (n) {
                null == r || r(n), t && Object(B.a)(t, o)
              },
              [o, r, t],
            )
          return Object(S.jsxs)(
            w.b,
            _objectSpread(
              _objectSpread(
                {
                  square: !0,
                  size: 'large',
                  className: 'van-goods-action-icon '.concat(u),
                  style: l,
                  onClick: j,
                },
                d,
              ),
              {},
              {
                children: [
                  i
                    ? Object(S.jsx)(C.b, {
                        name: i,
                        dot: c,
                        info: a,
                        className: 'van-goods-action-icon__icon icon-class',
                      })
                    : s,
                  Object(S.jsx)(I.k, { className: 'text-class', children: e }),
                ],
              },
            ),
          )
        },
        K = (t(588), t(587)),
        G = t(37),
        L = t(38),
        z = t(171),
        q = t(65),
        F = t(64),
        E = t(88),
        P = t(541),
        J = t(532),
        H =
          (t(782),
          (function (n) {
            Object(q.a)(Index, n)
            var e = Object(F.a)(Index)
            function Index() {
              var n
              return (
                Object(G.a)(this, Index),
                (n = e.call(this)),
                Object(E.a)(Object(z.a)(n), 'onClickIcon', function () {
                  K.a.show('点击图标')
                }),
                Object(E.a)(Object(z.a)(n), 'onClickButton', function () {
                  K.a.show('点击按钮')
                }),
                n
              )
            }
            return (
              Object(L.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    return Object(S.jsx)(P.a, {
                      title: 'GoodsAction 商品导航',
                      children: Object(S.jsxs)(S.Fragment, {
                        children: [
                          Object(S.jsx)(J.a, {
                            title: '基础用法',
                            children: Object(S.jsxs)(o.a, {
                              className: 'goods-action-position',
                              safeAreaInsetBottom: !1,
                              children: [
                                Object(S.jsx)(A, {
                                  icon: 'chat-o',
                                  text: '客服',
                                  openType: 'contact',
                                }),
                                Object(S.jsx)(A, {
                                  icon: 'cart-o',
                                  text: '购物车',
                                  onClick: this.onClickIcon,
                                }),
                                Object(S.jsx)(c.a, {
                                  text: '加入购物车',
                                  type: 'warning',
                                  onClick: this.onClickButton,
                                }),
                                Object(S.jsx)(c.a, {
                                  text: '立即购买',
                                  onClick: this.onClickButton,
                                }),
                              ],
                            }),
                          }),
                          Object(S.jsx)(J.a, {
                            title: '提示信息',
                            children: Object(S.jsxs)(o.a, {
                              className: 'goods-action-position',
                              safeAreaInsetBottom: !1,
                              children: [
                                Object(S.jsx)(A, {
                                  icon: 'chat-o',
                                  text: '客服',
                                  dot: !0,
                                }),
                                Object(S.jsx)(A, {
                                  icon: 'cart-o',
                                  text: '购物车',
                                  info: '5',
                                }),
                                Object(S.jsx)(A, {
                                  icon: 'shop-o',
                                  text: '店铺',
                                }),
                                Object(S.jsx)(c.a, {
                                  text: '加入购物车',
                                  type: 'warning',
                                }),
                                Object(S.jsx)(c.a, { text: '立即购买' }),
                              ],
                            }),
                          }),
                          Object(S.jsx)(J.a, {
                            title: '自定义按钮颜色',
                            children: Object(S.jsxs)(o.a, {
                              className: 'goods-action-position',
                              safeAreaInsetBottom: !1,
                              children: [
                                Object(S.jsx)(A, {
                                  icon: 'chat-o',
                                  text: '客服',
                                }),
                                Object(S.jsx)(A, {
                                  icon: 'shop-o',
                                  text: '店铺',
                                }),
                                Object(S.jsx)(c.a, {
                                  color: '#be99ff',
                                  type: 'warning',
                                  text: '加入购物车',
                                }),
                                Object(S.jsx)(c.a, {
                                  color: '#7232dd',
                                  text: '立即购买',
                                }),
                              ],
                            }),
                          }),
                          Object(S.jsx)(J.a, {
                            title: '朴素按钮',
                            children: Object(S.jsxs)(o.a, {
                              className: 'goods-action-position',
                              safeAreaInsetBottom: !1,
                              children: [
                                Object(S.jsx)(A, {
                                  icon: 'chat-o',
                                  text: '客服',
                                }),
                                Object(S.jsx)(A, {
                                  icon: 'shop-o',
                                  text: '店铺',
                                }),
                                Object(S.jsx)(c.a, {
                                  color: '#7232dd',
                                  text: '加入购物车',
                                  type: 'warning',
                                }),
                                Object(S.jsx)(c.a, {
                                  type: 'primary',
                                  plain: !0,
                                  color: '#7232dd',
                                  text: '立即购买',
                                }),
                              ],
                            }),
                          }),
                          Object(S.jsx)(K.a, { id: 'van-toast' }),
                        ],
                      }),
                    })
                  },
                },
              ]),
              Index
            )
          })(_.Component))
    },
  },
])