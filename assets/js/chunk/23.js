;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
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
          return oe
        }),
        r.d(t, 'j', function () {
          return ne
        }),
        r.d(t, 'h', function () {
          return ce
        }),
        r.d(t, 'f', function () {
          return ie
        }),
        r.d(t, 'm', function () {
          return ae
        }),
        r.d(t, 'c', function () {
          return ue
        }),
        r.d(t, 'a', function () {
          return se
        })
      var o = r(64),
        n = r.n(o),
        c = r(24),
        i = r.n(c),
        a = r(571),
        u = r.n(a),
        s = r(32),
        l = r.n(s),
        f = r(570),
        p = r.n(f),
        d = r(27),
        v = r.n(d),
        x = r(173),
        b = r.n(x),
        y = r(116),
        j = r.n(y),
        h = r(55),
        m = r.n(h),
        _ = r(177),
        O = r.n(_),
        w = r(592),
        g = r.n(w),
        P = r(28),
        S = r.n(P),
        D = r(6),
        C = r.n(D),
        I = r(26),
        T = r.n(I),
        M = r(120),
        k = r.n(M),
        E = r(35),
        H = r.n(E),
        L = r(70),
        z = r.n(L),
        K = r(71),
        N = r.n(K),
        R = r(658),
        A = r.n(R),
        W = r(660),
        q = r.n(W),
        F = r(662),
        U = r.n(F),
        B = r(54),
        J = r.n(B)
      function ownKeys(e, t) {
        var r = i()(e)
        if (u.a) {
          var o = u()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = ownKeys(Object(o), !0))).call(r, function (t) {
              T()(e, t, o[t])
            })
          else if (b.a) j()(e, b()(o))
          else {
            var n
            v()((n = ownKeys(Object(o)))).call(n, function (t) {
              m()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !O.a) return !1
          if (O.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(O()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            o = U()(e)
          if (t) {
            var n = U()(this).constructor
            r = O()(o, arguments, n)
          } else r = o.apply(this, arguments)
          return q()(this, r)
        }
      }
      n.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, o, n) {
        var c = e.ref.current,
          i = n[r],
          a = o ? o[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && c.setAttribute(r, i),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (c.mpScrollTop = i)
                if ('scrollLeft' === r) return void (c.mpScrollLeft = i)
                if ('scrollIntoView' === r) return void (c.mpScrollIntoView = i)
              }
              if ('function' == typeof i && r.match(/^on[A-Z]/)) {
                var u = r.substr(2).toLowerCase(),
                  s = i
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === u &&
                    (s = function fn(e) {
                      e instanceof CustomEvent && i.apply(null, g()(arguments))
                    }),
                  e.eventHandlers.push([u, s]),
                  c.addEventListener(u, s)
                )
              }
              return 'string' == typeof i || 'number' == typeof i
                ? (c.setAttribute(r, i), void (c[r] = i))
                : 'boolean' == typeof i
                ? i
                  ? ((c[r] = !0), c.setAttribute(r, i))
                  : ((c[r] = !1), c.removeAttribute(r))
                : void (c[r] = i)
            }
            if ('string' == typeof i) return void c.setAttribute(r, i)
            if (!i) return void c.removeAttribute(r)
            if (o)
              if ('string' == typeof a) c.style.cssText = ''
              else for (var f in a) updateStyle(c, f, '')
            for (var p in i) updateStyle(c, p, i[p])
          } else
            c.className = o
              ? (function getClassName(e, t, r) {
                  var o,
                    n = g()(e.classList),
                    c = (t.className || t.class || '').split(' '),
                    i = (r.className || r.class || '').split(' '),
                    a = []
                  return (
                    v()(n).call(n, function (e) {
                      S()(i).call(i, e) > -1
                        ? (a.push(e),
                          (i = l()(i).call(i, function (t) {
                            return t !== e
                          })))
                        : -1 === S()(c).call(c, e) && a.push(e)
                    }),
                    (a = C()((o = [])).call(o, J()(a), J()(i))).join(' ')
                  )
                })(c, o, n)
              : i
      }
      var V = function reactifyWebComponent(e) {
        var t = (function (t) {
          A()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              z()(this, Index),
              ((t = r.call(this, e)).eventHandlers = []),
              (t.ref = Object(o.createRef)()),
              t
            )
          }
          return (
            N()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var r,
                    o,
                    n = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (v()((r = i()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in n.props ||
                          updateProp(n, e, r, t, n.props)
                      }),
                      v()((o = i()(this.props))).call(o, function (r) {
                        updateProp(n, e, r, t, n.props)
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
                    : e && 'object' === H()(e) && e.hasOwnProperty('current')
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
                    var r = k()(e, 2),
                      o = r[0],
                      n = r[1]
                    t.ref.current && t.ref.current.removeEventListener(o, n)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.children,
                    n = t.dangerouslySetInnerHTML,
                    c = { ref: this.ref }
                  return (
                    n && (c.dangerouslySetInnerHTML = n),
                    Object(o.createElement)(e, c, r)
                  )
                },
              },
            ]),
            Index
          )
        })(n.a.Component)
        return n.a.forwardRef(function (e, r) {
          return n.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: r }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var r = i()(e)
        if (u.a) {
          var o = u()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return p()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = input_ownKeys(Object(o), !0))).call(r, function (t) {
              T()(e, t, o[t])
            })
          else if (b.a) j()(e, b()(o))
          else {
            var n
            v()((n = input_ownKeys(Object(o)))).call(n, function (t) {
              m()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      var Y = V('taro-input-core'),
        Z =
          (n.a.createElement,
          n.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              n.a.createElement(
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
        oe = V('taro-cover-view-core'),
        ne =
          (V('taro-movable-area-core'),
          V('taro-movable-view-core'),
          V('taro-scroll-view-core')),
        ce =
          (V('taro-swiper-core'),
          V('taro-swiper-item-core'),
          V('taro-functional-page-navigator-core'),
          V('taro-navigator-core')),
        ie =
          (V('taro-audio-core'), V('taro-camera-core'), V('taro-image-core')),
        ae = (V('taro-live-player-core'), V('taro-video-core')),
        ue = (V('taro-map-core'), V('taro-canvas-core')),
        se =
          (V('taro-ad-core'),
          V('taro-official-account-core'),
          V('taro-open-data-core'),
          V('taro-web-view-core'),
          V('taro-navigation-bar-core'),
          o.Fragment)
      V('taro-custom-wrapper-core')
    },
    570: function (e, t, r) {
      e.exports = r(604)
    },
    571: function (e, t, r) {
      e.exports = r(612)
    },
    572: function (e, t, r) {
      var o = r(67)
      ;(e.exports = function _defineProperty(e, t, r) {
        return (
          t in e
            ? o(e, t, {
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
      var o = r(606),
        n = r(607),
        c = r(653)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          i,
          a = c(e, t)
        if (o) {
          var u = o(e)
          for (i = 0; i < u.length; i++)
            (r = u[i]),
              n(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]))
        }
        return a
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    586: function (e, t, r) {
      var o = r(45),
        n = r(176)
      function _typeof(t) {
        return (
          (e.exports = _typeof =
            'function' == typeof o && 'symbol' == typeof n
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof o &&
                    e.constructor === o &&
                    e !== o.prototype
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
      var o = r(620)
      e.exports = o
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
      var o = r(646)
      e.exports = o
    },
    620: function (e, t, r) {
      r(621)
      var o = r(11).Object,
        n = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return o.getOwnPropertyDescriptor(e, t)
        })
      o.getOwnPropertyDescriptor.sham && (n.sham = !0)
    },
    621: function (e, t, r) {
      var o = r(3),
        n = r(9),
        c = r(41),
        i = r(68).f,
        a = r(22),
        u = n(function () {
          i(1)
        })
      o(
        { target: 'Object', stat: !0, forced: !a || u, sham: !a },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return i(c(e), t)
          },
        },
      )
    },
    646: function (e, t, r) {
      r(240)
      var o = r(11)
      e.exports = o.Object.getOwnPropertySymbols
    },
    647: function (e, t, r) {
      e.exports = r(648)
    },
    648: function (e, t, r) {
      var o = r(649)
      e.exports = o
    },
    649: function (e, t, r) {
      var o = r(612)
      e.exports = o
    },
    650: function (e, t, r) {
      e.exports = r(651)
    },
    651: function (e, t, r) {
      var o = r(652)
      e.exports = o
    },
    652: function (e, t, r) {
      var o = r(241)
      e.exports = o
    },
    653: function (e, t, r) {
      var o = r(608),
        n = r(607)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          c,
          i = {},
          a = o(e)
        for (c = 0; c < a.length; c++)
          (r = a[c]), n(t).call(t, r) >= 0 || (i[r] = e[r])
        return i
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    654: function (e, t, r) {
      e.exports = r(655)
    },
    655: function (e, t, r) {
      var o = r(656)
      e.exports = o
    },
    656: function (e, t, r) {
      var o = r(242)
      e.exports = o
    },
    658: function (e, t, r) {
      var o = r(659)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && o(e, t)
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
      var o = r(35).default,
        n = r(661)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === o(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return n(e)
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
    737: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      var o,
        n = r(5),
        c = r.n(n),
        i = r(4),
        a = r(49),
        u = r(16),
        s = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            n = e.selector,
            s = void 0 === n ? '' : n,
            l = e.duration,
            f = void 0 === l ? 300 : l,
            p = e.success,
            d = e.fail,
            v = e.complete,
            x = new a.a({
              name: 'pageScrollTo',
              success: p,
              fail: d,
              complete: v,
            })
          return new c.a(function (e, n) {
            var c, a
            try {
              if (void 0 === r && !s)
                return x.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  n,
                )
              var l =
                  null ===
                    (a =
                      null === (c = i.a.page) || void 0 === c
                        ? void 0
                        : c.path) || void 0 === a
                    ? void 0
                    : a.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
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
                  s &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var d,
                v = t()
              if ('number' == typeof r) d = r
              else {
                var b = document.querySelector(s)
                d = (null == b ? void 0 : b.offsetTop) || 0
              }
              var y = d - v,
                j = f / 17,
                h = Object(u.d)(u.a, j)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = v + y * h(r)
                if ((t(n), !(r < j))) return x.success({}, e)
                o && clearTimeout(o),
                  (o = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return x.fail({ errMsg: e.message }, n)
            }
          })
        }
    },
    833: function (e, t, r) {},
    882: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return R
        })
      var o = r(39),
        n = r(40),
        c = r(175),
        i = r(66),
        a = r(65),
        u = r(91),
        s = r(64),
        l = r(587),
        f = r(588),
        p = (r(574), r(833), r(24)),
        d = r.n(p),
        v = r(571),
        x = r.n(v),
        b = r(32),
        y = r.n(b),
        j = r(570),
        h = r.n(j),
        m = r(27),
        _ = r.n(m),
        O = r(173),
        w = r.n(O),
        g = r(116),
        P = r.n(g),
        S = r(55),
        D = r.n(S),
        C = r(572),
        I = r.n(C),
        T = r(573),
        M = r.n(T),
        k = r(568),
        E = r(569),
        H = r(579),
        L = r(578)
      var z = r(115),
        K = [
          'dashed',
          'hairline',
          'contentPosition',
          'borderColor',
          'textColor',
          'fontSize',
          'style',
          'className',
          'children',
        ]
      function ownKeys(e, t) {
        var r = d()(e)
        if (x.a) {
          var o = x()(e)
          t &&
            (o = y()(o).call(o, function (t) {
              return h()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o,
            n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _()((r = ownKeys(Object(n), !0))).call(r, function (t) {
                I()(e, t, n[t])
              })
            : w.a
            ? P()(e, w()(n))
            : _()((o = ownKeys(Object(n)))).call(o, function (t) {
                D()(e, t, h()(n, t))
              })
        }
        return e
      }
      var N = function Divider(e) {
        var t,
          r = e.dashed,
          o = void 0 !== r && r,
          n = e.hairline,
          c = void 0 !== n && n,
          i = e.contentPosition,
          a = e.borderColor,
          u = e.textColor,
          s = e.fontSize,
          l = e.style,
          f = e.className,
          p = e.children,
          d = M()(e, K)
        return Object(z.jsx)(
          k.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  E.b('divider', [{ dashed: o, hairline: c }, i]) +
                  ' '.concat(f || ''),
                style: E.c([
                  ((t = { borderColor: a, textColor: u, fontSize: s }),
                  Object(H.a)([
                    {
                      'border-color': t.borderColor,
                      color: t.textColor,
                      'font-size': Object(L.a)(t.fontSize),
                    },
                  ])),
                  l,
                ]),
              },
              d,
            ),
            {},
            { children: p },
          ),
        )
      }
      function Demo() {
        return Object(z.jsx)(k.n, { children: Object(z.jsx)(N, {}) })
      }
      function demo2_Demo() {
        return Object(z.jsx)(k.n, {
          children: Object(z.jsx)(N, { hairline: !0 }),
        })
      }
      function demo3_Demo() {
        return Object(z.jsx)(k.n, {
          children: Object(z.jsx)(N, { dashed: !0 }),
        })
      }
      function demo4_Demo() {
        return Object(z.jsxs)(k.n, {
          children: [
            Object(z.jsx)(N, { contentPosition: 'center', children: '文本' }),
            Object(z.jsx)(N, { contentPosition: 'left', children: '文本' }),
            Object(z.jsx)(N, { contentPosition: 'right', children: '文本' }),
          ],
        })
      }
      function demo5_Demo() {
        return Object(z.jsxs)(k.n, {
          children: [
            Object(z.jsx)(N, {
              contentPosition: 'center',
              textColor: '#1989fa',
              children: '文本颜色',
            }),
            Object(z.jsx)(N, {
              contentPosition: 'center',
              borderColor: '#1989fa',
              children: 'border 颜色',
            }),
            Object(z.jsx)(N, {
              contentPosition: 'center',
              fontSize: '18',
              children: '字体大小',
            }),
          ],
        })
      }
      function demo6_Demo() {
        return Object(z.jsx)(k.n, {
          children: Object(z.jsx)(N, {
            contentPosition: 'center',
            style: 'color: #1989fa; borderColor: #1989fa; fontSize: 18px;',
            children: '文本',
          }),
        })
      }
      var R = (function (e) {
        Object(i.a)(Index, e)
        var t = Object(a.a)(Index)
        function Index() {
          var e
          return (
            Object(o.a)(this, Index),
            (e = t.call(this)),
            Object(u.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(n.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(z.jsxs)(l.a, {
                  title: 'Divider 分割线',
                  className: 'pages-divider-index',
                  children: [
                    Object(z.jsx)(f.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(z.jsx)(Demo, {}),
                    }),
                    Object(z.jsx)(f.a, {
                      title: '使用 hairline',
                      padding: !0,
                      children: Object(z.jsx)(demo2_Demo, {}),
                    }),
                    Object(z.jsx)(f.a, {
                      title: '虚线',
                      padding: !0,
                      children: Object(z.jsx)(demo3_Demo, {}),
                    }),
                    Object(z.jsx)(f.a, {
                      title: '文本位置',
                      padding: !0,
                      children: Object(z.jsx)(demo4_Demo, {}),
                    }),
                    Object(z.jsx)(f.a, {
                      title: '自定义属性',
                      padding: !0,
                      children: Object(z.jsx)(demo5_Demo, {}),
                    }),
                    Object(z.jsx)(f.a, {
                      title: '自定义样式',
                      padding: !0,
                      children: Object(z.jsx)(demo6_Demo, {}),
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
