;(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    532: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var c = t(37),
        o = t(38),
        a = t(65),
        i = t(64),
        r = t(518),
        l = t(63),
        s = (t(533), t(108)),
        u = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(i.a)(Index)
          function Index() {
            return Object(c.a)(this, Index), n.call(this)
          }
          return (
            Object(o.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    c = e.card
                  return Object(s.jsxs)(r.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(r.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      c
                        ? Object(s.jsx)(r.n, {
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
    533: function (e, n, t) {},
    557: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return jumpLink
      })
      var c = t(75)
      function jumpLink(e, n) {
        var t
        if (((n = null !== (t = n) && void 0 !== t ? t : 'navigateTo'), e))
          if ('navigateTo' === n && Object(c.b)().length > 9)
            Object(c.g)({ url: e })
          else
            switch (n) {
              case 'navigateTo':
                Object(c.e)({ url: e })
                break
              case 'reLaunch':
                Object(c.f)({ url: e })
                break
              case 'redirectTo':
                Object(c.g)({ url: e })
            }
      }
    },
    570: function (e, n, t) {},
    571: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Cell
      })
      var c = t(22),
        o = t.n(c),
        a = t(520),
        i = t.n(a),
        r = t(30),
        l = t.n(r),
        s = t(519),
        u = t.n(s),
        d = t(26),
        h = t.n(d),
        b = t(169),
        j = t.n(b),
        p = t(109),
        v = t.n(p),
        O = t(52),
        m = t.n(O),
        f = t(522),
        x = t.n(f),
        y = t(523),
        w = t.n(y),
        k = t(63),
        S = t(518),
        C = t(521),
        _ = t(557),
        I = t(529),
        g = t(527),
        L = t(528)
      var N = t(108),
        T = [
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
        var t = o()(e)
        if (i.a) {
          var c = i()(e)
          n &&
            (c = l()(c).call(c, function (n) {
              return u()(e, n).enumerable
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
            h()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              x()(e, n, c[n])
            })
          else if (j.a) v()(e, j()(c))
          else {
            var o
            h()((o = ownKeys(Object(c)))).call(o, function (n) {
              m()(e, n, u()(c, n))
            })
          }
        }
        return e
      }
      function Cell(e) {
        var n,
          t = e.url,
          c = e.linkType,
          o = e.size,
          a = e.center,
          i = e.required,
          r = e.border,
          l = void 0 === r || r,
          s = e.isLink,
          u = e.clickable,
          d = e.icon,
          h = e.titleWidth,
          b = e.titleStyle,
          j = e.title,
          p = e.label,
          v = e.value,
          O = e.arrowDirection,
          m = e.onClick,
          f = e.renderIcon,
          x = e.renderTitle,
          y = e.renderLabel,
          A = e.renderRightIcon,
          q = e.renderExtra,
          z = e.children,
          D = e.style,
          E = e.className,
          B = w()(e, T),
          K = Object(k.useCallback)(
            function (e) {
              null == m || m(e), t && Object(_.a)(t, c)
            },
            [c, m, t],
          )
        return Object(N.jsxs)(
          S.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  C.b('cell', [
                    o,
                    {
                      center: a,
                      required: i,
                      borderless: !l,
                      clickable: s || u,
                    },
                  ]) +
                  ' '.concat(E || ''),
                hoverClass: 'van-cell--hover hover-class',
                hoverStayTime: 70,
                style: C.c([D]),
                onClick: K,
              },
              B,
            ),
            {},
            {
              children: [
                d
                  ? Object(N.jsx)(I.a, {
                      name: d,
                      className: 'van-cell__left-icon-wrap van-cell__left-icon',
                    })
                  : f,
                Object(N.jsxs)(S.n, {
                  style:
                    ((n = { titleWidth: h, titleStyle: b }),
                    Object(g.a)([
                      {
                        'max-width': Object(L.a)(n.titleWidth),
                        'min-width': Object(L.a)(n.titleWidth),
                      },
                      n.titleStyle,
                    ])),
                  className: 'van-cell__title title-class',
                  children: [
                    j || 0 === j ? Object(N.jsx)(S.a, { children: j }) : x,
                    (p || y) &&
                      Object(N.jsx)(S.n, {
                        className: 'van-cell__label label-class',
                        children:
                          y || (p && Object(N.jsx)(S.a, { children: p })),
                      }),
                  ],
                }),
                Object(N.jsx)(S.n, {
                  className: 'van-cell__value value-class',
                  children:
                    v || 0 === v ? Object(N.jsx)(S.a, { children: v }) : z,
                }),
                s
                  ? Object(N.jsx)(I.a, {
                      name: O ? 'arrow-' + O : 'arrow',
                      className:
                        'van-cell__right-icon-wrap right-icon-class van-cell__right-icon',
                    })
                  : A,
                q,
              ],
            },
          ),
        )
      }
      n.b = Cell
    },
    575: function (e, n, t) {
      'use strict'
      t(525), t(530), t(531), t(570)
    },
    584: function (e, n, t) {},
    586: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return Popup
      }),
        t.d(n, 'b', function () {
          return Index
        })
      var c = t(22),
        o = t.n(c),
        a = t(520),
        i = t.n(a),
        r = t(30),
        l = t.n(r),
        s = t(519),
        u = t.n(s),
        d = t(26),
        h = t.n(d),
        b = t(169),
        j = t.n(b),
        p = t(109),
        v = t.n(p),
        O = t(52),
        m = t.n(O),
        f = t(524),
        x = t.n(f),
        y = t(522),
        w = t.n(y),
        k = t(523),
        S = t.n(k),
        C = t(518),
        _ = t(63),
        I = t(521),
        g = t(529)
      var L = t(562),
        N = t(573),
        T = t(108),
        A = [
          'show',
          'duration',
          'round',
          'closeable',
          'overlayStyle',
          'transition',
          'zIndex',
          'overlay',
          'closeIcon',
          'closeIconPosition',
          'closeOnClickOverlay',
          'position',
          'safeAreaInsetBottom',
          'safeAreaInsetTop',
          'lockScroll',
          'children',
          'onClickOverlay',
          'onBeforeEnter',
          'onBeforeLeave',
          'onAfterEnter',
          'onAfterLeave',
          'onEnter',
          'onLeave',
          'onClose',
          'setOuterShow',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var t = o()(e)
        if (i.a) {
          var c = i()(e)
          n &&
            (c = l()(c).call(c, function (n) {
              return u()(e, n).enumerable
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
            h()((t = ownKeys(Object(c), !0))).call(t, function (n) {
              w()(e, n, c[n])
            })
          else if (j.a) v()(e, j()(c))
          else {
            var o
            h()((o = ownKeys(Object(c)))).call(o, function (n) {
              m()(e, n, u()(c, n))
            })
          }
        }
        return e
      }
      function Popup(e) {
        var n,
          t = e.show,
          c = e.duration,
          o = void 0 === c ? 300 : c,
          a = e.round,
          i = e.closeable,
          r = e.overlayStyle,
          l = e.transition,
          s = e.zIndex,
          u = e.overlay,
          d = void 0 === u || u,
          h = e.closeIcon,
          b = void 0 === h ? 'cross' : h,
          j = e.closeIconPosition,
          p = void 0 === j ? 'top-right' : j,
          v = e.closeOnClickOverlay,
          O = void 0 === v || v,
          m = e.position,
          f = void 0 === m ? 'center' : m,
          x = e.safeAreaInsetBottom,
          y = void 0 === x || x,
          w = e.safeAreaInsetTop,
          k = void 0 !== w && w,
          q = e.lockScroll,
          z = void 0 === q || q,
          D = e.children,
          E = e.onClickOverlay,
          B = e.onBeforeEnter,
          K = e.onBeforeLeave,
          W = e.onAfterEnter,
          F = e.onAfterLeave,
          P = e.onEnter,
          Q = e.onLeave,
          J = e.onClose,
          M = e.setOuterShow,
          R = e.style,
          Z = e.className,
          G = S()(e, A),
          H = Object(_.useCallback)(
            function () {
              null == F || F(), null == M || M()
            },
            [F, M],
          ),
          U = Object(_.useCallback)(
            function () {
              null == J || J()
            },
            [J],
          ),
          V = Object(_.useCallback)(
            function () {
              null == E || E(), O && (null == J || J())
            },
            [O, E, J],
          ),
          X = Object(L.a)({
            show: t,
            duration: 'none' === l ? 0 : o,
            name: l || f,
            onBeforeEnter: B,
            onBeforeLeave: K,
            onAfterEnter: W,
            onAfterLeave: H,
            onEnter: P,
            onLeave: Q,
          }),
          Y = X.inited,
          $ = X.currentDuration,
          ee = X.classes,
          ne = X.display,
          te = X.onTransitionEnd,
          ce = Object(_.useCallback)(function (e) {
            return e.replace(/([A-Z])/g, function (e, n) {
              return '-' + (null == n ? void 0 : n.toLowerCase())
            })
          }, [])
        return Object(T.jsxs)(T.Fragment, {
          children: [
            d &&
              Object(T.jsx)(N.a, {
                show: t,
                zIndex: s,
                style: r,
                duration: o,
                onClick: V,
                lockScroll: z,
              }),
            Y &&
              Object(T.jsxs)(
                C.n,
                _objectSpread(
                  _objectSpread(
                    {
                      className:
                        ee +
                        ' ' +
                        I.b('popup', [f, { round: a, safe: y, safeTop: k }]) +
                        '  '.concat(Z || ''),
                      style: I.c([
                        ((n = { zIndex: s, currentDuration: $, display: ne }),
                        I.c([
                          {
                            'z-index': n.zIndex,
                            '-webkit-transition-duration':
                              n.currentDuration + 'ms',
                            'transition-duration': n.currentDuration + 'ms',
                          },
                          n.display ? null : 'display: none',
                        ])),
                        R,
                      ]),
                      onTransitionEnd: te,
                    },
                    G,
                  ),
                  {},
                  {
                    children: [
                      D,
                      i &&
                        Object(T.jsx)(g.b, {
                          name: b,
                          className:
                            'close-icon-class van-popup__close-icon van-popup__close-icon--' +
                            ce(p),
                          onClick: U,
                        }),
                    ],
                  },
                ),
              ),
          ],
        })
      }
      function Index(e) {
        var n = e.show,
          t = Object(_.useState)(!1),
          c = x()(t, 2),
          o = c[0],
          a = c[1]
        return (
          Object(_.useEffect)(
            function () {
              n && a(!0)
            },
            [n],
          ),
          Object(T.jsx)(T.Fragment, {
            children: o
              ? Object(T.jsx)(Popup, _objectSpread({ setOuterShow: a }, e))
              : Object(T.jsx)(T.Fragment, {}),
          })
        )
      }
    },
    809: function (e, n, t) {},
    810: function (e, n, t) {},
    875: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return Z
        })
      t(525), t(530), t(531), t(569), t(572), t(584), t(809)
      var c = t(522),
        o = t.n(c),
        a = t(523),
        i = t.n(a),
        r = t(9),
        l = t.n(r),
        s = t(22),
        u = t.n(s),
        d = t(520),
        h = t.n(d),
        b = t(30),
        j = t.n(b),
        p = t(519),
        v = t.n(p),
        O = t(26),
        m = t.n(O),
        f = t(169),
        x = t.n(f),
        y = t(109),
        w = t.n(y),
        k = t(52),
        S = t.n(k),
        C = t(518),
        _ = t(63),
        I = t(27),
        g = t.n(I)
      function isMulti(e) {
        return (
          null != e && null != e[0] && Array.isArray(e) && Array.isArray(e[0])
        )
      }
      var L = [
        'qq',
        'link',
        'weibo',
        'wechat',
        'poster',
        'qrcode',
        'weapp-qrcode',
        'wechat-moments',
      ]
      var N = t(521),
        T = t(108)
      function options_Index(e) {
        var n = e.showBorder,
          t = e.onSelect,
          c = e.options
        return Object(T.jsx)(C.n, {
          className: N.b('share-sheet__options', { border: n }),
          children: l()(c).call(c, function (e, n) {
            return Object(T.jsx)(
              C.n,
              {
                className: 'van-share-sheet__option',
                onClick: function onClick() {
                  return null == t ? void 0 : t(e, n)
                },
                children: Object(T.jsxs)(C.b, {
                  className: 'van-share-sheet__button',
                  'open-type': e.openType || '',
                  children: [
                    Object(T.jsx)(C.f, {
                      src:
                        ((c = e.icon),
                        -1 !== g()(L).call(L, c)
                          ? 'https://img.yzcdn.cn/vant/share-sheet-' +
                            c +
                            '.png'
                          : c),
                      className: 'van-share-sheet__icon',
                    }),
                    e.name &&
                      Object(T.jsx)(C.n, {
                        className: 'van-share-sheet__name',
                        children: e.name,
                      }),
                    e.description &&
                      Object(T.jsx)(C.n, {
                        className: 'van-share-sheet__option-description',
                        children: e.description,
                      }),
                  ],
                }),
              },
              n,
            )
            var c
          }),
        })
      }
      var A = t(586),
        q = [
          'show',
          'duration',
          'closeOnClickOverlay',
          'safeAreaInsetBottom',
          'overlay',
          'zIndex',
          'overlayStyle',
          'title',
          'cancelText',
          'description',
          'options',
          'renderDescription',
          'renderTitle',
          'onClickOverlay',
          'onSelect',
          'onClose',
          'onCancel',
        ]
      function ownKeys(e, n) {
        var t = u()(e)
        if (h.a) {
          var c = h()(e)
          n &&
            (c = j()(c).call(c, function (n) {
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
              o()(e, n, c[n])
            })
          else if (x.a) w()(e, x()(c))
          else {
            var a
            m()((a = ownKeys(Object(c)))).call(a, function (n) {
              S()(e, n, v()(c, n))
            })
          }
        }
        return e
      }
      var z = function ShareSheet(e) {
          var n,
            t = e.show,
            c = e.duration,
            o = void 0 === c ? 300 : c,
            a = e.closeOnClickOverlay,
            r = void 0 === a || a,
            s = e.safeAreaInsetBottom,
            u = void 0 === s || s,
            d = e.overlay,
            h = void 0 === d || d,
            b = e.zIndex,
            j = e.overlayStyle,
            p = e.title,
            v = e.cancelText,
            O = void 0 === v ? '取消' : v,
            m = e.description,
            f = e.options,
            x = void 0 === f ? [] : f,
            y = e.renderDescription,
            w = e.renderTitle,
            k = e.onClickOverlay,
            S = e.onSelect,
            I = e.onClose,
            g = e.onCancel,
            L = i()(e, q),
            N = Object(_.useCallback)(
              function () {
                null == k || k()
              },
              [k],
            ),
            z = Object(_.useCallback)(
              function (e) {
                null == S || S({ detail: e })
              },
              [S],
            ),
            D = Object(_.useCallback)(
              function () {
                null == I || I()
              },
              [I],
            ),
            E = Object(_.useCallback)(
              function () {
                null == I || I(), null == g || g()
              },
              [g, I],
            )
          return Object(T.jsxs)(
            A.b,
            _objectSpread(
              _objectSpread(
                {
                  round: !0,
                  className: 'van-share-sheet',
                  show: t,
                  position: 'bottom',
                  overlay: h,
                  duration: o,
                  zIndex: b,
                  overlayStyle: j,
                  closeOnClickOverlay: r,
                  safeAreaInsetBottom: u,
                  onClose: D,
                  onClickOverlay: N,
                },
                L,
              ),
              {},
              {
                children: [
                  Object(T.jsxs)(C.n, {
                    className: 'van-share-sheet__header',
                    children: [
                      Object(T.jsx)(C.n, {
                        className: 'van-share-sheet__title',
                        children: w,
                      }),
                      p &&
                        Object(T.jsx)(C.n, {
                          className: 'van-share-sheet__title',
                          children: p,
                        }),
                      Object(T.jsx)(C.n, {
                        className: 'van-share-sheet__description',
                        children: y,
                      }),
                      m &&
                        Object(T.jsx)(C.n, {
                          className: 'van-share-sheet__description',
                          children: m,
                        }),
                    ],
                  }),
                  isMulti(x)
                    ? Object(T.jsx)(T.Fragment, {
                        children: l()((n = x)).call(n, function (e, n) {
                          return Object(T.jsx)(
                            options_Index,
                            { showBorder: 0 !== n, options: e, onSelect: z },
                            n,
                          )
                        }),
                      })
                    : Object(T.jsx)(options_Index, { options: x, onSelect: z }),
                  Object(T.jsx)(C.b, {
                    className: 'van-share-sheet__cancel',
                    onClick: E,
                    children: O,
                  }),
                ],
              },
            ),
          )
        },
        D = (t(575), t(571)),
        E = (t(588), t(587)),
        B = t(592),
        K = t(37),
        W = t(38),
        F = t(171),
        P = t(65),
        Q = t(64),
        J = t(88),
        M = t(541),
        R = t(532),
        Z =
          (t(810),
          (function (e) {
            Object(P.a)(Index, e)
            var n = Object(Q.a)(Index)
            function Index() {
              var e
              return (
                Object(K.a)(this, Index),
                (e = n.call(this)),
                Object(J.a)(Object(F.a)(e), 'state', {
                  show: {
                    basic: !1,
                    withDesc: !1,
                    multiLine: !1,
                    customIcon: !1,
                  },
                  options: [
                    { name: '微信', icon: 'wechat', openType: 'share' },
                    { name: '朋友圈', icon: 'wechat-moments' },
                    { name: 'QQ', icon: 'qq' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                    { name: '小程序码', icon: 'weapp-qrcode' },
                  ],
                  multiLineOptions: [
                    [
                      { name: '微信', icon: 'wechat' },
                      { name: '微博', icon: 'weibo' },
                      { name: 'QQ', icon: 'qq' },
                    ],
                    [
                      { name: '复制链接', icon: 'link' },
                      { name: '分享海报', icon: 'poster' },
                      { name: '二维码', icon: 'qrcode' },
                    ],
                  ],
                  customIconOptions: [
                    {
                      name: '名称',
                      icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
                    },
                    {
                      name: '名称',
                      icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
                    },
                    {
                      name: '名称',
                      icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
                    },
                  ],
                  optionsWithDesc: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link', description: '描述信息' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                  ],
                }),
                Object(J.a)(Object(F.a)(e), 'onShowShareSheet', function (n) {
                  e.setState({
                    show: Object(B.a)(
                      Object(B.a)({}, e.state.show),
                      {},
                      Object(J.a)({}, n.target.dataset.type, !0),
                    ),
                  })
                }),
                Object(J.a)(Object(F.a)(e), 'onClose', function () {
                  e.setState({
                    show: {
                      basic: !1,
                      withDesc: !1,
                      multiLine: !1,
                      customIcon: !1,
                    },
                  })
                }),
                Object(J.a)(Object(F.a)(e), 'onSelect', function (n) {
                  E.a.show(n.detail.name), e.onClose()
                }),
                e
              )
            }
            return (
              Object(W.a)(Index, [
                {
                  key: 'render',
                  value: function render() {
                    var e = this,
                      n = this.state,
                      t = n.show,
                      c = n.options,
                      o = n.multiLineOptions,
                      a = n.customIconOptions,
                      i = n.optionsWithDesc
                    return Object(T.jsx)(M.a, {
                      title: 'ShareSheet 分享面板',
                      children: Object(T.jsxs)(T.Fragment, {
                        children: [
                          Object(T.jsxs)(R.a, {
                            card: !0,
                            title: '基础用法',
                            children: [
                              Object(T.jsx)(D.b, {
                                isLink: !0,
                                title: '显示分享面板',
                                onClick: function onClick(n) {
                                  e.onShowShareSheet({
                                    detail: n.detail,
                                    currentTarget: {
                                      dataset: { type: 'basic' },
                                    },
                                    target: { dataset: { type: 'basic' } },
                                  })
                                },
                              }),
                              Object(T.jsx)(z, {
                                show: t.basic,
                                title: '立即分享给好友',
                                options: c,
                                onClose: this.onClose,
                                onSelect: this.onSelect,
                              }),
                            ],
                          }),
                          Object(T.jsxs)(R.a, {
                            card: !0,
                            title: '展示多行选项',
                            children: [
                              Object(T.jsx)(D.b, {
                                isLink: !0,
                                title: '显示分享面板',
                                onClick: function onClick(n) {
                                  e.onShowShareSheet({
                                    detail: n.detail,
                                    currentTarget: {
                                      dataset: { type: 'multiLine' },
                                    },
                                    target: { dataset: { type: 'multiLine' } },
                                  })
                                },
                              }),
                              Object(T.jsx)(z, {
                                show: t.multiLine,
                                title: '立即分享给好友',
                                options: o,
                                onClose: this.onClose,
                                onSelect: this.onSelect,
                              }),
                            ],
                          }),
                          Object(T.jsxs)(R.a, {
                            card: !0,
                            title: '自定义图标',
                            children: [
                              Object(T.jsx)(D.b, {
                                isLink: !0,
                                title: '显示分享面板',
                                onClick: function onClick(n) {
                                  e.onShowShareSheet({
                                    detail: n.detail,
                                    currentTarget: {
                                      dataset: { type: 'customIcon' },
                                    },
                                    target: { dataset: { type: 'customIcon' } },
                                  })
                                },
                              }),
                              Object(T.jsx)(z, {
                                show: t.customIcon,
                                options: a,
                                onClose: this.onClose,
                                onSelect: this.onSelect,
                              }),
                            ],
                          }),
                          Object(T.jsxs)(R.a, {
                            card: !0,
                            title: '展示描述信息',
                            children: [
                              Object(T.jsx)(D.b, {
                                isLink: !0,
                                title: '显示分享面板',
                                onClick: function onClick(n) {
                                  e.onShowShareSheet({
                                    detail: n.detail,
                                    currentTarget: {
                                      dataset: { type: 'withDesc' },
                                    },
                                    target: { dataset: { type: 'withDesc' } },
                                  })
                                },
                              }),
                              Object(T.jsx)(z, {
                                show: t.withDesc,
                                title: '立即分享给好友',
                                options: i,
                                description: '描述信息',
                                onClose: this.onClose,
                                onSelect: this.onSelect,
                              }),
                            ],
                          }),
                          Object(T.jsx)(E.a, { id: 'van-toast' }),
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