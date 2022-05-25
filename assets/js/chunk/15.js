;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    568: function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return $
      }),
        r.d(t, 'i', function () {
          return G
        }),
        r.d(t, 'k', function () {
          return Q
        }),
        r.d(t, 'b', function () {
          return X
        }),
        r.d(t, 'e', function () {
          return ee
        }),
        r.d(t, 'g', function () {
          return te
        }),
        r.d(t, 'l', function () {
          return re
        }),
        r.d(t, 'd', function () {
          return ne
        }),
        r.d(t, 'j', function () {
          return oe
        }),
        r.d(t, 'h', function () {
          return ce
        }),
        r.d(t, 'f', function () {
          return ae
        }),
        r.d(t, 'm', function () {
          return se
        }),
        r.d(t, 'c', function () {
          return ue
        }),
        r.d(t, 'a', function () {
          return ie
        })
      var n = r(64),
        o = r.n(n),
        c = r(24),
        a = r.n(c),
        s = r(571),
        u = r.n(s),
        i = r(32),
        l = r.n(i),
        f = r(570),
        p = r.n(f),
        d = r(27),
        v = r.n(d),
        b = r(173),
        y = r.n(b),
        x = r(116),
        j = r.n(x),
        h = r(55),
        m = r.n(h),
        O = r(177),
        _ = r.n(O),
        g = r(592),
        w = r.n(g),
        S = r(28),
        P = r.n(S),
        k = r(6),
        N = r.n(k),
        I = r(26),
        T = r.n(I),
        M = r(120),
        E = r.n(M),
        D = r(35),
        K = r.n(D),
        L = r(70),
        C = r.n(L),
        H = r(71),
        R = r.n(H),
        A = r(658),
        W = r.n(A),
        q = r(660),
        F = r.n(q),
        U = r(662),
        B = r.n(U),
        z = r(54),
        J = r.n(z)
      function ownKeys(e, t) {
        var r = a()(e)
        if (u.a) {
          var n = u()(e)
          t &&
            (n = l()(n).call(n, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = ownKeys(Object(n), !0))).call(r, function (t) {
              T()(e, t, n[t])
            })
          else if (y.a) j()(e, y()(n))
          else {
            var o
            v()((o = ownKeys(Object(n)))).call(o, function (t) {
              m()(e, t, p()(n, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !_.a) return !1
          if (_.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(_()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            n = B()(e)
          if (t) {
            var o = B()(this).constructor
            r = _()(n, arguments, o)
          } else r = n.apply(this, arguments)
          return F()(this, r)
        }
      }
      o.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, n, o) {
        var c = e.ref.current,
          a = o[r],
          s = n ? n[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && c.setAttribute(r, a),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (c.mpScrollTop = a)
                if ('scrollLeft' === r) return void (c.mpScrollLeft = a)
                if ('scrollIntoView' === r) return void (c.mpScrollIntoView = a)
              }
              if ('function' == typeof a && r.match(/^on[A-Z]/)) {
                var u = r.substr(2).toLowerCase(),
                  i = a
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === u &&
                    (i = function fn(e) {
                      e instanceof CustomEvent && a.apply(null, w()(arguments))
                    }),
                  e.eventHandlers.push([u, i]),
                  c.addEventListener(u, i)
                )
              }
              return 'string' == typeof a || 'number' == typeof a
                ? (c.setAttribute(r, a), void (c[r] = a))
                : 'boolean' == typeof a
                ? a
                  ? ((c[r] = !0), c.setAttribute(r, a))
                  : ((c[r] = !1), c.removeAttribute(r))
                : void (c[r] = a)
            }
            if ('string' == typeof a) return void c.setAttribute(r, a)
            if (!a) return void c.removeAttribute(r)
            if (n)
              if ('string' == typeof s) c.style.cssText = ''
              else for (var f in s) updateStyle(c, f, '')
            for (var p in a) updateStyle(c, p, a[p])
          } else
            c.className = n
              ? (function getClassName(e, t, r) {
                  var n,
                    o = w()(e.classList),
                    c = (t.className || t.class || '').split(' '),
                    a = (r.className || r.class || '').split(' '),
                    s = []
                  return (
                    v()(o).call(o, function (e) {
                      P()(a).call(a, e) > -1
                        ? (s.push(e),
                          (a = l()(a).call(a, function (t) {
                            return t !== e
                          })))
                        : -1 === P()(c).call(c, e) && s.push(e)
                    }),
                    (s = N()((n = [])).call(n, J()(s), J()(a))).join(' ')
                  )
                })(c, n, o)
              : a
      }
      var V = function reactifyWebComponent(e) {
        var t = (function (t) {
          W()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              C()(this, Index),
              ((t = r.call(this, e)).eventHandlers = []),
              (t.ref = Object(n.createRef)()),
              t
            )
          }
          return (
            R()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var r,
                    n,
                    o = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (v()((r = a()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in o.props ||
                          updateProp(o, e, r, t, o.props)
                      }),
                      v()((n = a()(this.props))).call(n, function (r) {
                        updateProp(o, e, r, t, o.props)
                      }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(e) {
                  this.update(e)
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var e = this.props.forwardRef
                  'function' == typeof e
                    ? e(this.ref.current)
                    : e && 'object' === K()(e) && e.hasOwnProperty('current')
                    ? (e.current = this.ref.current)
                    : 'string' == typeof e &&
                      console.warn('内置组件不支持字符串 ref'),
                    this.update()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.clearEventHandlers()
                },
              },
              {
                key: 'clearEventHandlers',
                value: function clearEventHandlers() {
                  var e,
                    t = this
                  v()((e = this.eventHandlers)).call(e, function (e) {
                    var r = E()(e, 2),
                      n = r[0],
                      o = r[1]
                    t.ref.current && t.ref.current.removeEventListener(n, o)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.children,
                    o = t.dangerouslySetInnerHTML,
                    c = { ref: this.ref }
                  return (
                    o && (c.dangerouslySetInnerHTML = o),
                    Object(n.createElement)(e, c, r)
                  )
                },
              },
            ]),
            Index
          )
        })(o.a.Component)
        return o.a.forwardRef(function (e, r) {
          return o.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: r }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var r = a()(e)
        if (u.a) {
          var n = u()(e)
          t &&
            (n = l()(n).call(n, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = input_ownKeys(Object(n), !0))).call(r, function (t) {
              T()(e, t, n[t])
            })
          else if (y.a) j()(e, y()(n))
          else {
            var o
            v()((o = input_ownKeys(Object(n)))).call(o, function (t) {
              m()(e, t, p()(n, t))
            })
          }
        }
        return e
      }
      var Y = V('taro-input-core'),
        Z =
          (o.a.createElement,
          o.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              o.a.createElement(
                Y,
                input_objectSpread(input_objectSpread({}, r), {}, { ref: t }),
              )
            )
          })),
        $ = V('taro-view-core'),
        G =
          (V('taro-icon-core'),
          V('taro-progress-core'),
          V('taro-rich-text-core')),
        Q = V('taro-text-core'),
        X = V('taro-button-core'),
        ee =
          (V('taro-checkbox-core'),
          V('taro-checkbox-group-core'),
          V('taro-editor-core'),
          V('taro-form-core')),
        te = Z,
        re =
          (V('taro-label-core'),
          V('taro-picker-core'),
          V('taro-picker-view-core'),
          V('taro-picker-view-column-core'),
          V('taro-radio-core'),
          V('taro-radio-group-core'),
          V('taro-slider-core'),
          V('taro-switch-core'),
          V('taro-cover-image-core'),
          V('taro-textarea-core')),
        ne = V('taro-cover-view-core'),
        oe =
          (V('taro-movable-area-core'),
          V('taro-movable-view-core'),
          V('taro-scroll-view-core')),
        ce =
          (V('taro-swiper-core'),
          V('taro-swiper-item-core'),
          V('taro-functional-page-navigator-core'),
          V('taro-navigator-core')),
        ae =
          (V('taro-audio-core'), V('taro-camera-core'), V('taro-image-core')),
        se = (V('taro-live-player-core'), V('taro-video-core')),
        ue = (V('taro-map-core'), V('taro-canvas-core')),
        ie =
          (V('taro-ad-core'),
          V('taro-official-account-core'),
          V('taro-open-data-core'),
          V('taro-web-view-core'),
          V('taro-navigation-bar-core'),
          n.Fragment)
      V('taro-custom-wrapper-core')
    },
    570: function (e, t, r) {
      e.exports = r(604)
    },
    571: function (e, t, r) {
      e.exports = r(612)
    },
    572: function (e, t, r) {
      var n = r(67)
      ;(e.exports = function _defineProperty(e, t, r) {
        return (
          t in e
            ? n(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    573: function (e, t, r) {
      var n = r(606),
        o = r(607),
        c = r(653)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          a,
          s = c(e, t)
        if (n) {
          var u = n(e)
          for (a = 0; a < u.length; a++)
            (r = u[a]),
              o(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (s[r] = e[r]))
        }
        return s
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    586: function (e, t, r) {
      var n = r(45),
        o = r(176)
      function _typeof(t) {
        return (
          (e.exports = _typeof =
            'function' == typeof n && 'symbol' == typeof o
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof n &&
                    e.constructor === n &&
                    e !== n.prototype
                    ? 'symbol'
                    : typeof e
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _typeof(t)
        )
      }
      ;(e.exports = _typeof),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    592: function (e, t, r) {
      e.exports = r(236)
    },
    604: function (e, t, r) {
      var n = r(620)
      e.exports = n
    },
    606: function (e, t, r) {
      e.exports = r(647)
    },
    607: function (e, t, r) {
      e.exports = r(650)
    },
    608: function (e, t, r) {
      e.exports = r(654)
    },
    612: function (e, t, r) {
      var n = r(646)
      e.exports = n
    },
    620: function (e, t, r) {
      r(621)
      var n = r(11).Object,
        o = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return n.getOwnPropertyDescriptor(e, t)
        })
      n.getOwnPropertyDescriptor.sham && (o.sham = !0)
    },
    621: function (e, t, r) {
      var n = r(3),
        o = r(9),
        c = r(41),
        a = r(68).f,
        s = r(22),
        u = o(function () {
          a(1)
        })
      n(
        { target: 'Object', stat: !0, forced: !s || u, sham: !s },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return a(c(e), t)
          },
        },
      )
    },
    646: function (e, t, r) {
      r(240)
      var n = r(11)
      e.exports = n.Object.getOwnPropertySymbols
    },
    647: function (e, t, r) {
      e.exports = r(648)
    },
    648: function (e, t, r) {
      var n = r(649)
      e.exports = n
    },
    649: function (e, t, r) {
      var n = r(612)
      e.exports = n
    },
    650: function (e, t, r) {
      e.exports = r(651)
    },
    651: function (e, t, r) {
      var n = r(652)
      e.exports = n
    },
    652: function (e, t, r) {
      var n = r(241)
      e.exports = n
    },
    653: function (e, t, r) {
      var n = r(608),
        o = r(607)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          c,
          a = {},
          s = n(e)
        for (c = 0; c < s.length; c++)
          (r = s[c]), o(t).call(t, r) >= 0 || (a[r] = e[r])
        return a
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    654: function (e, t, r) {
      e.exports = r(655)
    },
    655: function (e, t, r) {
      var n = r(656)
      e.exports = n
    },
    656: function (e, t, r) {
      var n = r(242)
      e.exports = n
    },
    658: function (e, t, r) {
      var n = r(659)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && n(e, t)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    659: function (e, t) {
      function _setPrototypeOf(t, r) {
        return (
          (e.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _setPrototypeOf(t, r)
        )
      }
      ;(e.exports = _setPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    660: function (e, t, r) {
      var n = r(35).default,
        o = r(661)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === n(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return o(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    661: function (e, t) {
      ;(e.exports = function _assertThisInitialized(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    662: function (e, t) {
      function _getPrototypeOf(t) {
        return (
          (e.exports = _getPrototypeOf =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _getPrototypeOf(t)
        )
      }
      ;(e.exports = _getPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    682: function (e, t, r) {
      'use strict'
      r(574), r(751)
    },
    687: function (e, t, r) {
      'use strict'
      var n = r(24),
        o = r.n(n),
        c = r(571),
        a = r.n(c),
        s = r(32),
        u = r.n(s),
        i = r(570),
        l = r.n(i),
        f = r(27),
        p = r.n(f),
        d = r(173),
        v = r.n(d),
        b = r(116),
        y = r.n(b),
        x = r(55),
        j = r.n(x),
        h = r(572),
        m = r.n(h),
        O = r(573),
        _ = r.n(O),
        g = r(568),
        w = r(569),
        S = r(578)
      var P = r(115),
        k = ['span', 'offset', 'gutter', 'children', 'className', 'style']
      function ownKeys(e, t) {
        var r = o()(e)
        if (a.a) {
          var n = a()(e)
          t &&
            (n = u()(n).call(n, function (t) {
              return l()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n,
            o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p()((r = ownKeys(Object(o), !0))).call(r, function (t) {
                m()(e, t, o[t])
              })
            : v.a
            ? y()(e, v()(o))
            : p()((n = ownKeys(Object(o)))).call(n, function (t) {
                j()(e, t, l()(o, t))
              })
        }
        return e
      }
      t.a = function Col(e) {
        var t,
          r = e.span,
          n = e.offset,
          o = e.gutter,
          c = void 0 === o ? 14 : o,
          a = e.children,
          s = e.className,
          u = e.style,
          i = _()(e, k)
        return Object(P.jsx)(
          g.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  w.b('col', [r]) +
                  ' ' +
                  (n ? 'van-col--offset-' + n : '') +
                  ' ' +
                  s,
                style: w.c([
                  ((t = { gutter: c }),
                  t.gutter
                    ? Object(w.c)({
                        'padding-right': Object(S.a)(t.gutter / 2),
                        'padding-left': Object(S.a)(t.gutter / 2),
                      })
                    : ''),
                  u,
                ]),
              },
              i,
            ),
            {},
            { children: a },
          ),
        )
      }
    },
    710: function (e, t, r) {
      'use strict'
      r(574), r(750)
    },
    716: function (e, t, r) {
      'use strict'
      var n = r(24),
        o = r.n(n),
        c = r(571),
        a = r.n(c),
        s = r(32),
        u = r.n(s),
        i = r(570),
        l = r.n(i),
        f = r(27),
        p = r.n(f),
        d = r(173),
        v = r.n(d),
        b = r(116),
        y = r.n(b),
        x = r(55),
        j = r.n(x),
        h = r(572),
        m = r.n(h),
        O = r(573),
        _ = r.n(O),
        g = r(568),
        w = r(569),
        S = r(578)
      var P = r(115),
        k = ['gutter', 'children', 'className', 'style']
      function ownKeys(e, t) {
        var r = o()(e)
        if (a.a) {
          var n = a()(e)
          t &&
            (n = u()(n).call(n, function (t) {
              return l()(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            n,
            o = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p()((r = ownKeys(Object(o), !0))).call(r, function (t) {
                m()(e, t, o[t])
              })
            : v.a
            ? y()(e, v()(o))
            : p()((n = ownKeys(Object(o)))).call(n, function (t) {
                j()(e, t, l()(o, t))
              })
        }
        return e
      }
      t.a = function Row(e) {
        var t,
          r = e.gutter,
          n = e.children,
          o = e.className,
          c = e.style,
          a = _()(e, k)
        return Object(P.jsx)(
          g.n,
          _objectSpread(
            _objectSpread(
              {
                className: 'van-row  '.concat(o),
                style: w.c([
                  ((t = { gutter: r }),
                  t.gutter
                    ? Object(w.c)({
                        'margin-right': Object(S.a)(-t.gutter / 2),
                        'margin-left': Object(S.a)(-t.gutter / 2),
                      })
                    : ''),
                  c,
                ]),
              },
              a,
            ),
            {},
            { children: n },
          ),
        )
      }
    },
    737: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return i
      })
      var n,
        o = r(5),
        c = r.n(o),
        a = r(4),
        s = r(49),
        u = r(16),
        i = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            o = e.selector,
            i = void 0 === o ? '' : o,
            l = e.duration,
            f = void 0 === l ? 300 : l,
            p = e.success,
            d = e.fail,
            v = e.complete,
            b = new s.a({
              name: 'pageScrollTo',
              success: p,
              fail: d,
              complete: v,
            })
          return new c.a(function (e, o) {
            var c, s
            try {
              if (void 0 === r && !i)
                return b.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  o,
                )
              var l =
                  null ===
                    (s =
                      null === (c = a.a.page) || void 0 === c
                        ? void 0
                        : c.path) || void 0 === s
                    ? void 0
                    : s.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                p = l
                  ? document.querySelector('.taro_page#'.concat(l))
                  : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router')
              t ||
                (t = p
                  ? function scrollFunc(e) {
                      if (void 0 === e) return p.scrollTop
                      p.scrollTop = e
                    }
                  : function scrollFunc(e) {
                      if (void 0 === e) return window.pageYOffset
                      window.scrollTo(0, e)
                    }),
                r &&
                  i &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var d,
                v = t()
              if ('number' == typeof r) d = r
              else {
                var y = document.querySelector(i)
                d = (null == y ? void 0 : y.offsetTop) || 0
              }
              var x = d - v,
                j = f / 17,
                h = Object(u.d)(u.a, j)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  o = v + x * h(r)
                if ((t(o), !(r < j))) return b.success({}, e)
                n && clearTimeout(n),
                  (n = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return b.fail({ errMsg: e.message }, o)
            }
          })
        }
    },
    750: function (e, t, r) {},
    751: function (e, t, r) {},
    929: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return y
        })
      var n = r(39),
        o = r(40),
        c = r(175),
        a = r(66),
        s = r(65),
        u = r(91),
        i = r(64),
        l = r(587),
        f = r(588),
        p = (r(710), r(716)),
        d = (r(682), r(687)),
        v = r(568),
        b = r(115)
      function Demo() {
        return Object(b.jsxs)(v.n, {
          children: [
            Object(b.jsxs)(p.a, {
              children: [
                Object(b.jsx)(d.a, {
                  span: '8',
                  className: 'dark',
                  children: 'span: 8',
                }),
                Object(b.jsx)(d.a, {
                  span: '8',
                  className: 'light',
                  children: 'span: 8',
                }),
                Object(b.jsx)(d.a, {
                  span: '8',
                  className: 'dark',
                  children: 'span: 8',
                }),
              ],
            }),
            Object(b.jsxs)(p.a, {
              children: [
                Object(b.jsx)(d.a, {
                  span: '4',
                  className: 'dark',
                  children: 'span: 4',
                }),
                Object(b.jsx)(d.a, {
                  span: '10',
                  className: 'light',
                  offset: '4',
                  children: 'offset: 4, span: 10',
                }),
              ],
            }),
            Object(b.jsx)(p.a, {
              children: Object(b.jsx)(d.a, {
                offset: '12',
                span: '12',
                className: 'dark',
                children: 'offset: 12, span: 12',
              }),
            }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(b.jsx)(v.n, {
          children: Object(b.jsxs)(p.a, {
            gutter: '20',
            children: [
              Object(b.jsx)(d.a, {
                span: '8',
                className: 'dark',
                children: 'span: 8',
              }),
              Object(b.jsx)(d.a, {
                span: '8',
                className: 'dark',
                children: 'span: 8',
              }),
              Object(b.jsx)(d.a, {
                span: '8',
                className: 'dark',
                children: 'span: 8',
              }),
            ],
          }),
        })
      }
      var y = (function (e) {
        Object(a.a)(Index, e)
        var t = Object(s.a)(Index)
        function Index() {
          var e
          return (
            Object(n.a)(this, Index),
            (e = t.call(this)),
            Object(u.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(o.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(b.jsxs)(l.a, {
                  title: 'Layout 布局',
                  className: 'pages-col-index',
                  children: [
                    Object(b.jsx)(f.a, {
                      title: '基本用法',
                      padding: !0,
                      children: Object(b.jsx)(Demo, {}),
                    }),
                    Object(b.jsx)(f.a, {
                      title: '设置列元素间距',
                      padding: !0,
                      children: Object(b.jsx)(demo2_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(i.Component)
    },
  },
])
