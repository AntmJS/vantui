/*! For license information please see 42.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    518: function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return Z
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
          return ae
        }),
        r.d(t, 'f', function () {
          return ue
        }),
        r.d(t, 'm', function () {
          return ie
        }),
        r.d(t, 'c', function () {
          return ce
        }),
        r.d(t, 'a', function () {
          return se
        })
      var o = r(63),
        n = r.n(o),
        a = r(22),
        u = r.n(a),
        i = r(520),
        c = r.n(i),
        s = r(30),
        f = r.n(s),
        l = r(519),
        p = r.n(l),
        d = r(26),
        v = r.n(d),
        y = r(169),
        x = r.n(y),
        b = r(109),
        m = r.n(b),
        _ = r(52),
        h = r.n(_),
        g = r(172),
        w = r.n(g),
        O = r(534),
        j = r.n(O),
        S = r(27),
        P = r.n(S),
        M = r(6),
        T = r.n(M),
        A = r(24),
        I = r.n(A),
        E = r(115),
        k = r.n(E),
        D = r(35),
        L = r.n(D),
        C = r(67),
        R = r.n(C),
        H = r(68),
        N = r.n(H),
        q = r(552),
        z = r.n(q),
        U = r(554),
        W = r.n(U),
        K = r(556),
        B = r.n(K),
        F = r(44),
        V = r.n(F)
      function ownKeys(e, t) {
        var r = u()(e)
        if (c.a) {
          var o = c()(e)
          t &&
            (o = f()(o).call(o, function (t) {
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
              I()(e, t, o[t])
            })
          else if (x.a) m()(e, x()(o))
          else {
            var n
            v()((n = ownKeys(Object(o)))).call(n, function (t) {
              h()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !w.a) return !1
          if (w.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(w()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            o = B()(e)
          if (t) {
            var n = B()(this).constructor
            r = w()(o, arguments, n)
          } else r = o.apply(this, arguments)
          return W()(this, r)
        }
      }
      n.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, o, n) {
        var a = e.ref.current,
          u = n[r],
          i = o ? o[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && a.setAttribute(r, u),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (a.mpScrollTop = u)
                if ('scrollLeft' === r) return void (a.mpScrollLeft = u)
                if ('scrollIntoView' === r) return void (a.mpScrollIntoView = u)
              }
              if ('function' == typeof u && r.match(/^on[A-Z]/)) {
                var c = r.substr(2).toLowerCase(),
                  s = u
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === c &&
                    (s = function fn(e) {
                      e instanceof CustomEvent && u.apply(null, j()(arguments))
                    }),
                  e.eventHandlers.push([c, s]),
                  a.addEventListener(c, s)
                )
              }
              return 'string' == typeof u || 'number' == typeof u
                ? (a.setAttribute(r, u), void (a[r] = u))
                : 'boolean' == typeof u
                ? u
                  ? ((a[r] = !0), a.setAttribute(r, u))
                  : ((a[r] = !1), a.removeAttribute(r))
                : void (a[r] = u)
            }
            if ('string' == typeof u) return void a.setAttribute(r, u)
            if (!u) return void a.removeAttribute(r)
            if (o)
              if ('string' == typeof i) a.style.cssText = ''
              else for (var l in i) updateStyle(a, l, '')
            for (var p in u) updateStyle(a, p, u[p])
          } else
            a.className = o
              ? (function getClassName(e, t, r) {
                  var o,
                    n = j()(e.classList),
                    a = (t.className || t.class || '').split(' '),
                    u = (r.className || r.class || '').split(' '),
                    i = []
                  return (
                    v()(n).call(n, function (e) {
                      P()(u).call(u, e) > -1
                        ? (i.push(e),
                          (u = f()(u).call(u, function (t) {
                            return t !== e
                          })))
                        : -1 === P()(a).call(a, e) && i.push(e)
                    }),
                    (i = T()((o = [])).call(o, V()(i), V()(u))).join(' ')
                  )
                })(a, o, n)
              : u
      }
      var J = function reactifyWebComponent(e) {
        var t = (function (t) {
          z()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              R()(this, Index),
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
                      (v()((r = u()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in n.props ||
                          updateProp(n, e, r, t, n.props)
                      }),
                      v()((o = u()(this.props))).call(o, function (r) {
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
                    : e && 'object' === L()(e) && e.hasOwnProperty('current')
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
                    a = { ref: this.ref }
                  return (
                    n && (a.dangerouslySetInnerHTML = n),
                    Object(o.createElement)(e, a, r)
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
        var r = u()(e)
        if (c.a) {
          var o = c()(e)
          t &&
            (o = f()(o).call(o, function (t) {
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
              I()(e, t, o[t])
            })
          else if (x.a) m()(e, x()(o))
          else {
            var n
            v()((n = input_ownKeys(Object(o)))).call(n, function (t) {
              h()(e, t, p()(o, t))
            })
          }
        }
        return e
      }
      var $ = J('taro-input-core'),
        Y =
          (n.a.createElement,
          n.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              n.a.createElement(
                $,
                input_objectSpread(input_objectSpread({}, r), {}, { ref: t }),
              )
            )
          })),
        Z = J('taro-view-core'),
        G =
          (J('taro-icon-core'),
          J('taro-progress-core'),
          J('taro-rich-text-core')),
        Q = J('taro-text-core'),
        X = J('taro-button-core'),
        ee =
          (J('taro-checkbox-core'),
          J('taro-checkbox-group-core'),
          J('taro-editor-core'),
          J('taro-form-core')),
        te = Y,
        re =
          (J('taro-label-core'),
          J('taro-picker-core'),
          J('taro-picker-view-core'),
          J('taro-picker-view-column-core'),
          J('taro-radio-core'),
          J('taro-radio-group-core'),
          J('taro-slider-core'),
          J('taro-switch-core'),
          J('taro-cover-image-core'),
          J('taro-textarea-core')),
        oe = J('taro-cover-view-core'),
        ne =
          (J('taro-movable-area-core'),
          J('taro-movable-view-core'),
          J('taro-scroll-view-core')),
        ae =
          (J('taro-swiper-core'),
          J('taro-swiper-item-core'),
          J('taro-functional-page-navigator-core'),
          J('taro-navigator-core')),
        ue =
          (J('taro-audio-core'), J('taro-camera-core'), J('taro-image-core')),
        ie = (J('taro-live-player-core'), J('taro-video-core')),
        ce = (J('taro-map-core'), J('taro-canvas-core')),
        se =
          (J('taro-ad-core'),
          J('taro-official-account-core'),
          J('taro-open-data-core'),
          J('taro-web-view-core'),
          J('taro-navigation-bar-core'),
          o.Fragment)
      J('taro-custom-wrapper-core')
    },
    519: function (e, t, r) {
      e.exports = r(539)
    },
    520: function (e, t, r) {
      e.exports = r(536)
    },
    522: function (e, t, r) {
      var o = r(110)
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
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    523: function (e, t, r) {
      var o = r(542),
        n = r(535),
        a = r(550)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          u,
          i = a(e, t)
        if (o) {
          var c = o(e)
          for (u = 0; u < c.length; u++)
            (r = c[u]),
              n(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]))
        }
        return i
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    524: function (e, t, r) {
      var o = r(565),
        n = r(566),
        a = r(558),
        u = r(567)
      ;(e.exports = function _slicedToArray(e, t) {
        return o(e) || n(e, t) || a(e, t) || u()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    534: function (e, t, r) {
      e.exports = r(227)
    },
    535: function (e, t, r) {
      e.exports = r(549)
    },
    536: function (e, t, r) {
      var o = r(547)
      e.exports = o
    },
    539: function (e, t, r) {
      var o = r(544)
      e.exports = o
    },
    542: function (e, t, r) {
      e.exports = r(548)
    },
    543: function (e, t, r) {
      e.exports = r(551)
    },
    544: function (e, t, r) {
      r(545)
      var o = r(11).Object,
        n = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return o.getOwnPropertyDescriptor(e, t)
        })
      o.getOwnPropertyDescriptor.sham && (n.sham = !0)
    },
    545: function (e, t, r) {
      var o = r(4),
        n = r(10),
        a = r(39),
        u = r(66).f,
        i = r(25),
        c = n(function () {
          u(1)
        })
      o(
        { target: 'Object', stat: !0, forced: !i || c, sham: !i },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return u(a(e), t)
          },
        },
      )
    },
    547: function (e, t, r) {
      r(228)
      var o = r(11)
      e.exports = o.Object.getOwnPropertySymbols
    },
    548: function (e, t, r) {
      var o = r(536)
      e.exports = o
    },
    549: function (e, t, r) {
      var o = r(229)
      e.exports = o
    },
    550: function (e, t, r) {
      var o = r(543),
        n = r(535)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          a,
          u = {},
          i = o(e)
        for (a = 0; a < i.length; a++)
          (r = i[a]), n(t).call(t, r) >= 0 || (u[r] = e[r])
        return u
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    551: function (e, t, r) {
      var o = r(230)
      e.exports = o
    },
    552: function (e, t, r) {
      var o = r(553)
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
    553: function (e, t) {
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
    554: function (e, t, r) {
      var o = r(35).default,
        n = r(555)
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
    555: function (e, t) {
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
    556: function (e, t) {
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
    558: function (e, t, r) {
      var o = r(173),
        n = r(114),
        a = r(559)
      ;(e.exports = function _unsupportedIterableToArray(e, t) {
        var r
        if (e) {
          if ('string' == typeof e) return a(e, t)
          var u = o((r = Object.prototype.toString.call(e))).call(r, 8, -1)
          return (
            'Object' === u && e.constructor && (u = e.constructor.name),
            'Map' === u || 'Set' === u
              ? n(e)
              : 'Arguments' === u ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
              ? a(e, t)
              : void 0
          )
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    559: function (e, t) {
      ;(e.exports = function _arrayLikeToArray(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
        return o
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    565: function (e, t, r) {
      var o = r(112)
      ;(e.exports = function _arrayWithHoles(e) {
        if (o(e)) return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    566: function (e, t, r) {
      var o = r(40),
        n = r(113)
      ;(e.exports = function _iterableToArrayLimit(e, t) {
        var r = null == e ? null : (void 0 !== o && n(e)) || e['@@iterator']
        if (null != r) {
          var a,
            u,
            i = [],
            c = !0,
            s = !1
          try {
            for (
              r = r.call(e);
              !(c = (a = r.next()).done) &&
              (i.push(a.value), !t || i.length !== t);
              c = !0
            );
          } catch (e) {
            ;(s = !0), (u = e)
          } finally {
            try {
              c || null == r.return || r.return()
            } finally {
              if (s) throw u
            }
          }
          return i
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    567: function (e, t) {
      ;(e.exports = function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    577: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return s
      })
      var o,
        n = r(5),
        a = r.n(n),
        u = r(3),
        i = r(43),
        c = r(16),
        s = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            n = e.selector,
            s = void 0 === n ? '' : n,
            f = e.duration,
            l = void 0 === f ? 300 : f,
            p = e.success,
            d = e.fail,
            v = e.complete,
            y = new i.a({
              name: 'pageScrollTo',
              success: p,
              fail: d,
              complete: v,
            })
          return new a.a(function (e, n) {
            var a, i
            try {
              if (void 0 === r && !s)
                return y.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  n,
                )
              var f =
                  null ===
                    (i =
                      null === (a = u.a.page) || void 0 === a
                        ? void 0
                        : a.path) || void 0 === i
                    ? void 0
                    : i.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                p = f
                  ? document.querySelector('.taro_page#'.concat(f))
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
                var x = document.querySelector(s)
                d = (null == x ? void 0 : x.offsetTop) || 0
              }
              var b = d - v,
                m = l / 17,
                _ = Object(c.d)(c.a, m)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = v + b * _(r)
                if ((t(n), !(r < m))) return y.success({}, e)
                o && clearTimeout(o),
                  (o = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return y.fail({ errMsg: e.message }, n)
            }
          })
        }
    },
    617: function (e, t, r) {
      var o = r(629),
        n = r(630),
        a = r(558),
        u = r(631)
      ;(e.exports = function _toConsumableArray(e) {
        return o(e) || n(e) || a(e) || u()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    629: function (e, t, r) {
      var o = r(112),
        n = r(559)
      ;(e.exports = function _arrayWithoutHoles(e) {
        if (o(e)) return n(e)
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    630: function (e, t, r) {
      var o = r(40),
        n = r(113),
        a = r(114)
      ;(e.exports = function _iterableToArray(e) {
        if ((void 0 !== o && null != n(e)) || null != e['@@iterator'])
          return a(e)
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    631: function (e, t) {
      ;(e.exports = function _nonIterableSpread() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    710: function (e, t, r) {
      var o
      !(function () {
        'use strict'
        var r = {}.hasOwnProperty
        function classNames() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var o = arguments[t]
            if (o) {
              var n = typeof o
              if ('string' === n || 'number' === n) e.push(o)
              else if (Array.isArray(o)) {
                if (o.length) {
                  var a = classNames.apply(null, o)
                  a && e.push(a)
                }
              } else if ('object' === n)
                if (o.toString === Object.prototype.toString)
                  for (var u in o) r.call(o, u) && o[u] && e.push(u)
                else e.push(o.toString())
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((classNames.default = classNames), (e.exports = classNames))
          : void 0 ===
              (o = function () {
                return classNames
              }.apply(t, [])) || (e.exports = o)
      })()
    },
    836: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return useDeepCompareEffect
      })
      var o = r(63),
        n = Object.prototype.hasOwnProperty
      function find(e, t, r) {
        for (r of e.keys()) if (dequal(r, t)) return r
      }
      function dequal(e, t) {
        var r, o, a
        if (e === t) return !0
        if (e && t && (r = e.constructor) === t.constructor) {
          if (r === Date) return e.getTime() === t.getTime()
          if (r === RegExp) return e.toString() === t.toString()
          if (r === Array) {
            if ((o = e.length) === t.length)
              for (; o-- && dequal(e[o], t[o]); );
            return -1 === o
          }
          if (r === Set) {
            if (e.size !== t.size) return !1
            for (o of e) {
              if ((a = o) && 'object' == typeof a && !(a = find(t, a)))
                return !1
              if (!t.has(a)) return !1
            }
            return !0
          }
          if (r === Map) {
            if (e.size !== t.size) return !1
            for (o of e) {
              if ((a = o[0]) && 'object' == typeof a && !(a = find(t, a)))
                return !1
              if (!dequal(o[1], t.get(a))) return !1
            }
            return !0
          }
          if (r === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t))
          else if (r === DataView) {
            if ((o = e.byteLength) === t.byteLength)
              for (; o-- && e.getInt8(o) === t.getInt8(o); );
            return -1 === o
          }
          if (ArrayBuffer.isView(e)) {
            if ((o = e.byteLength) === t.byteLength)
              for (; o-- && e[o] === t[o]; );
            return -1 === o
          }
          if (!r || 'object' == typeof e) {
            for (r in ((o = 0), e)) {
              if (n.call(e, r) && ++o && !n.call(t, r)) return !1
              if (!(r in t) || !dequal(e[r], t[r])) return !1
            }
            return Object.keys(t).length === o
          }
        }
        return e != e && t != t
      }
      function useDeepCompareMemoize(e) {
        var t = o.useRef(e),
          r = o.useRef(0)
        return (
          dequal(e, t.current) || ((t.current = e), (r.current += 1)),
          o.useMemo(
            function () {
              return t.current
            },
            [r.current],
          )
        )
      }
      function useDeepCompareEffect(e, t) {
        return o.useEffect(e, useDeepCompareMemoize(t))
      }
    },
  },
])
