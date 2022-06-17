;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    582: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Loading
      })
      var c = n(572),
        a = n.n(c),
        i = n(576),
        r = n.n(i),
        s = n(573),
        o = n.n(s),
        l = n(592),
        j = n.n(l),
        d = n(10),
        h = n.n(d),
        u = n(24),
        b = n.n(u),
        x = n(571),
        g = n.n(x),
        O = n(32),
        p = n.n(O),
        f = n(570),
        m = n.n(f),
        v = n(27),
        w = n.n(v),
        y = n(173),
        _ = n.n(y),
        N = n(116),
        z = n.n(N),
        S = n(55),
        L = n.n(S),
        D = n(568),
        F = n(64),
        K = n(569),
        I = n(578)
      function textStyle(e) {
        return Object(K.c)({ 'font-size': Object(I.a)(e.textSize) })
      }
      var k = n(115),
        C = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(e, t) {
        var n = b()(e)
        if (g.a) {
          var c = g()(e)
          t &&
            (c = p()(c).call(c, function (t) {
              return m()(e, t).enumerable
            })),
            n.push.apply(n, c)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            c,
            i = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w()((n = ownKeys(Object(i), !0))).call(n, function (t) {
                a()(e, t, i[t])
              })
            : _.a
            ? z()(e, _()(i))
            : w()((c = ownKeys(Object(i)))).call(c, function (t) {
                L()(e, t, m()(i, t))
              })
        }
        return e
      }
      function Loading(e) {
        var t,
          n = e.vertical,
          c = e.type,
          a = void 0 === c ? 'circular' : c,
          i = e.color,
          s = e.size,
          l = e.textSize,
          d = e.className,
          u = e.children,
          b = e.style,
          x = o()(e, C),
          g = Object(F.useState)(j()({ length: 12 })),
          O = r()(g, 1)[0]
        return Object(k.jsxs)(
          D.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + K.b('loading', { vertical: n }) + ' ' + d,
                style: K.c([b]),
              },
              x,
            ),
            {},
            {
              children: [
                Object(k.jsx)(D.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + a,
                  style:
                    ((t = { color: i, size: s }),
                    Object(K.c)({
                      color: t.color,
                      width: Object(I.a)(t.size),
                      height: Object(I.a)(t.size),
                    })),
                  children:
                    'spinner' === a &&
                    Object(k.jsx)(D.a, {
                      children: h()(O).call(O, function (e, t) {
                        return Object(k.jsx)(
                          D.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(t),
                        )
                      }),
                    }),
                }),
                Object(k.jsx)(D.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: l }),
                  children: u,
                }),
              ],
            },
          ),
        )
      }
      t.b = Loading
    },
    583: function (e, t, n) {},
    615: function (e, t, n) {
      'use strict'
      n(574), n(580), n(581), n(664)
    },
    616: function (e, t, n) {
      'use strict'
      var c = n(24),
        a = n.n(c),
        i = n(571),
        r = n.n(i),
        s = n(32),
        o = n.n(s),
        l = n(570),
        j = n.n(l),
        d = n(27),
        h = n.n(d),
        u = n(173),
        b = n.n(u),
        x = n(116),
        g = n.n(x),
        O = n(55),
        p = n.n(O),
        f = n(572),
        m = n.n(f),
        v = n(576),
        w = n.n(v),
        y = n(573),
        _ = n.n(y),
        N = n(64),
        z = n(568),
        S = n(569),
        L = n(577),
        D = n(578)
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
      var K = n(115),
        I = [
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
      function ownKeys(e, t) {
        var n = a()(e)
        if (r.a) {
          var c = r()(e)
          t &&
            (c = o()(c).call(c, function (t) {
              return j()(e, t).enumerable
            })),
            n.push.apply(n, c)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            c,
            a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h()((n = ownKeys(Object(a), !0))).call(n, function (t) {
                m()(e, t, a[t])
              })
            : b.a
            ? g()(e, b()(a))
            : h()((c = ownKeys(Object(a)))).call(c, function (t) {
                p()(e, t, j()(a, t))
              })
        }
        return e
      }
      t.a = function Image(e) {
        var t = e.src,
          n = e.round,
          c = e.width,
          a = e.height,
          i = e.radius,
          r = e.lazyLoad,
          s = e.showMenuByLongpress,
          o = e.fit,
          l = e.showError,
          j = void 0 === l || l,
          d = e.showLoading,
          h = void 0 === d || d,
          u = e.className,
          b = e.style,
          x = e.renderError,
          g = e.renderLoading,
          O = _()(e, I),
          p = Object(N.useState)(),
          f = w()(p, 2),
          m = f[0],
          v = f[1],
          y = Object(N.useState)(!1),
          F = w()(y, 2),
          k = F[0],
          C = F[1]
        Object(N.useEffect)(
          function () {
            void 0 === m && v(!0), C(!1)
          },
          [m],
        )
        var E,
          M = Object(N.useCallback)(function () {
            v(!1)
          }, []),
          B = Object(N.useCallback)(function () {
            C(!0)
          }, []),
          J = Object(N.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== o && 'widthFix' !== o) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [o],
          )
        return Object(K.jsxs)(
          z.n,
          _objectSpread(
            _objectSpread(
              {
                style: S.c([
                  ((E = { width: c, height: a, radius: i }),
                  Object(S.c)([
                    {
                      width: Object(D.a)(E.width),
                      height: Object(D.a)(E.height),
                      'border-radius': Object(D.a)(E.radius),
                    },
                    E.radius ? 'overflow: hidden' : null,
                  ])),
                  b,
                ]),
                className: ' ' + S.b('image', { round: n }) + ' ' + u,
                onClick: O.onClick,
              },
              O,
            ),
            {},
            {
              children: [
                !k &&
                  Object(K.jsx)(z.f, {
                    src: t,
                    mode: mode(o || 'none'),
                    lazyLoad: r,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: s,
                    onLoad: M,
                    onError: B,
                    style: J,
                  }),
                m &&
                  h &&
                  Object(K.jsx)(z.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      g ||
                      Object(K.jsx)(L.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                k &&
                  j &&
                  Object(K.jsx)(z.n, {
                    className: 'error-class van-image__error',
                    children:
                      x ||
                      Object(K.jsx)(L.b, {
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
    664: function (e, t, n) {},
    682: function (e, t, n) {
      'use strict'
      n(574), n(751)
    },
    687: function (e, t, n) {
      'use strict'
      var c = n(24),
        a = n.n(c),
        i = n(571),
        r = n.n(i),
        s = n(32),
        o = n.n(s),
        l = n(570),
        j = n.n(l),
        d = n(27),
        h = n.n(d),
        u = n(173),
        b = n.n(u),
        x = n(116),
        g = n.n(x),
        O = n(55),
        p = n.n(O),
        f = n(572),
        m = n.n(f),
        v = n(573),
        w = n.n(v),
        y = n(568),
        _ = n(569),
        N = n(578)
      var z = n(115),
        S = ['span', 'offset', 'gutter', 'children', 'className', 'style']
      function ownKeys(e, t) {
        var n = a()(e)
        if (r.a) {
          var c = r()(e)
          t &&
            (c = o()(c).call(c, function (t) {
              return j()(e, t).enumerable
            })),
            n.push.apply(n, c)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            c,
            a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h()((n = ownKeys(Object(a), !0))).call(n, function (t) {
                m()(e, t, a[t])
              })
            : b.a
            ? g()(e, b()(a))
            : h()((c = ownKeys(Object(a)))).call(c, function (t) {
                p()(e, t, j()(a, t))
              })
        }
        return e
      }
      t.a = function Col(e) {
        var t,
          n = e.span,
          c = e.offset,
          a = e.gutter,
          i = void 0 === a ? 14 : a,
          r = e.children,
          s = e.className,
          o = e.style,
          l = w()(e, S)
        return Object(z.jsx)(
          y.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  _.b('col', [n]) +
                  ' ' +
                  (c ? 'van-col--offset-' + c : '') +
                  ' ' +
                  s,
                style: _.c([
                  ((t = { gutter: i }),
                  t.gutter
                    ? Object(_.c)({
                        'padding-right': Object(N.a)(t.gutter / 2),
                        'padding-left': Object(N.a)(t.gutter / 2),
                      })
                    : ''),
                  o,
                ]),
              },
              l,
            ),
            {},
            { children: r },
          ),
        )
      }
    },
    702: function (e, t, n) {
      'use strict'
      n(574), n(583)
    },
    710: function (e, t, n) {
      'use strict'
      n(574), n(750)
    },
    716: function (e, t, n) {
      'use strict'
      var c = n(24),
        a = n.n(c),
        i = n(571),
        r = n.n(i),
        s = n(32),
        o = n.n(s),
        l = n(570),
        j = n.n(l),
        d = n(27),
        h = n.n(d),
        u = n(173),
        b = n.n(u),
        x = n(116),
        g = n.n(x),
        O = n(55),
        p = n.n(O),
        f = n(572),
        m = n.n(f),
        v = n(573),
        w = n.n(v),
        y = n(568),
        _ = n(569),
        N = n(578)
      var z = n(115),
        S = ['gutter', 'children', 'className', 'style']
      function ownKeys(e, t) {
        var n = a()(e)
        if (r.a) {
          var c = r()(e)
          t &&
            (c = o()(c).call(c, function (t) {
              return j()(e, t).enumerable
            })),
            n.push.apply(n, c)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            c,
            a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h()((n = ownKeys(Object(a), !0))).call(n, function (t) {
                m()(e, t, a[t])
              })
            : b.a
            ? g()(e, b()(a))
            : h()((c = ownKeys(Object(a)))).call(c, function (t) {
                p()(e, t, j()(a, t))
              })
        }
        return e
      }
      t.a = function Row(e) {
        var t,
          n = e.gutter,
          c = e.children,
          a = e.className,
          i = e.style,
          r = w()(e, S)
        return Object(z.jsx)(
          y.n,
          _objectSpread(
            _objectSpread(
              {
                className: 'van-row  '.concat(a),
                style: _.c([
                  ((t = { gutter: n }),
                  t.gutter
                    ? Object(_.c)({
                        'margin-right': Object(N.a)(-t.gutter / 2),
                        'margin-left': Object(N.a)(-t.gutter / 2),
                      })
                    : ''),
                  i,
                ]),
              },
              r,
            ),
            {},
            { children: c },
          ),
        )
      }
    },
    750: function (e, t, n) {},
    751: function (e, t, n) {},
    900: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return p
        })
      var c = n(39),
        a = n(40),
        i = n(175),
        r = n(66),
        s = n(65),
        o = n(91),
        l = n(64),
        j = n(587),
        d = n(588),
        h = (n(615), n(616)),
        u = n(115)
      function Demo() {
        return Object(u.jsx)(h.a, {
          width: '100px',
          height: '100px',
          src: 'https://img.yzcdn.cn/vant/cat.jpeg',
        })
      }
      n(710)
      var b = n(716),
        x = (n(682), n(687)),
        g = n(568)
      function demo2_Demo() {
        return Object(u.jsxs)(b.a, {
          gutter: '20',
          children: [
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'contain',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'contain' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'cover',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'cover' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'fill',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'fill' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'none',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'none' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'scaleDown',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'scaleDown' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'widthFix',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'widthFix' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '100px',
                  fit: 'heightFix',
                  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                }),
                Object(u.jsx)(g.n, { children: 'heightFix' }),
              ],
            }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(u.jsx)(h.a, {
          round: !0,
          width: '100px',
          height: '100px',
          src: 'https://img.yzcdn.cn/vant/cat.jpeg',
        })
      }
      n(702)
      var O = n(582)
      function demo4_Demo() {
        return Object(u.jsxs)(b.a, {
          gutter: '20',
          children: [
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, { width: '100%', height: '27vw' }),
                Object(u.jsx)(g.n, { className: 'text', children: '默认提示' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '27vw',
                  renderLoading: Object(u.jsx)(O.b, {
                    type: 'spinner',
                    size: '20',
                    vertical: !0,
                  }),
                }),
                Object(u.jsx)(g.n, {
                  className: 'text',
                  children: '自定义提示',
                }),
              ],
            }),
          ],
        })
      }
      function demo5_Demo() {
        return Object(u.jsxs)(b.a, {
          gutter: '20',
          children: [
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, { width: '100%', height: '27vw', src: 'x' }),
                Object(u.jsx)(g.n, { className: 'text', children: '默认提示' }),
              ],
            }),
            Object(u.jsxs)(x.a, {
              span: '8',
              children: [
                Object(u.jsx)(h.a, {
                  width: '100%',
                  height: '27vw',
                  renderLoading: Object(u.jsx)(O.b, {}),
                }),
                Object(u.jsx)(g.n, {
                  className: 'text',
                  children: '自定义加载中',
                }),
              ],
            }),
          ],
        })
      }
      function demo6_Demo() {
        return Object(u.jsx)(g.n, {
          children: Object(u.jsx)(h.a, {
            width: '100px',
            height: '100px',
            src: 'xxxx',
            renderError: Object(u.jsx)(g.k, { children: '加载失败' }),
          }),
        })
      }
      var p = (function (e) {
        Object(r.a)(Index, e)
        var t = Object(s.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = t.call(this)),
            Object(o.a)(Object(i.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(u.jsxs)(j.a, {
                  title: 'Image 图片',
                  className: 'pages-image-index',
                  children: [
                    Object(u.jsx)(d.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(u.jsx)(Demo, {}),
                    }),
                    Object(u.jsx)(d.a, {
                      title: '填充模式',
                      padding: !0,
                      children: Object(u.jsx)(demo2_Demo, {}),
                    }),
                    Object(u.jsx)(d.a, {
                      title: '圆形图片',
                      padding: !0,
                      children: Object(u.jsx)(demo3_Demo, {}),
                    }),
                    Object(u.jsx)(d.a, {
                      title: '图片懒加载',
                      padding: !0,
                      children: Object(u.jsx)(demo4_Demo, {}),
                    }),
                    Object(u.jsx)(d.a, {
                      title: '加载中提示',
                      padding: !0,
                      children: Object(u.jsx)(demo5_Demo, {}),
                    }),
                    Object(u.jsx)(d.a, {
                      title: '加载失败提示',
                      padding: !0,
                      children: Object(u.jsx)(demo6_Demo, {}),
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
