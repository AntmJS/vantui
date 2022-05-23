;(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    526: function (t, r, i) {
      'use strict'
      i.d(r, 'e', function () {
        return isPlainObject
      }),
        i.d(r, 'f', function () {
          return isPromise
        }),
        i.d(r, 'b', function () {
          return isDef
        }),
        i.d(r, 'd', function () {
          return isObj
        }),
        i.d(r, 'a', function () {
          return isBoolean
        }),
        i.d(r, 'c', function () {
          return isImageUrl
        }),
        i.d(r, 'g', function () {
          return isVideoUrl
        })
      var a = i(170),
        c = i.n(a)
      function isFunction(t) {
        return 'function' == typeof t
      }
      function isPlainObject(t) {
        return null !== t && 'object' === c()(t) && !Array.isArray(t)
      }
      function isPromise(t) {
        return isPlainObject(t) && isFunction(t.then) && isFunction(t.catch)
      }
      function isDef(t) {
        return null != t
      }
      function isObj(t) {
        var r = c()(t)
        return null !== t && ('object' === r || 'function' === r)
      }
      function isBoolean(t) {
        return 'boolean' == typeof t
      }
      var o = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        l = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(t) {
        return o.test(t)
      }
      function isVideoUrl(t) {
        return l.test(t)
      }
    },
    532: function (t, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return d
      })
      var a = i(37),
        c = i(38),
        o = i(65),
        l = i(64),
        u = i(518),
        h = i(63),
        v = (i(533), i(108)),
        d = (function (t) {
          Object(o.a)(Index, t)
          var r = Object(l.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), r.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.padding,
                    i = t.title,
                    a = t.card
                  return Object(v.jsxs)(u.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (r ? 'demo-block--padding' : ''),
                    children: [
                      i &&
                        Object(v.jsx)(u.n, {
                          className: 'demo-block__title',
                          children: i,
                        }),
                      a
                        ? Object(v.jsx)(u.n, {
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
        })(h.Component)
    },
    533: function (t, r, i) {},
    537: function (t, r, i) {},
    538: function (t, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return Loading
      })
      var a = i(522),
        c = i.n(a),
        o = i(524),
        l = i.n(o),
        u = i(523),
        h = i.n(u),
        v = i(534),
        d = i.n(v),
        y = i(9),
        p = i.n(y),
        x = i(22),
        b = i.n(x),
        g = i(520),
        j = i.n(g),
        m = i(30),
        k = i.n(m),
        O = i(519),
        A = i.n(O),
        w = i(26),
        C = i.n(w),
        _ = i(169),
        S = i.n(_),
        q = i(109),
        T = i.n(q),
        I = i(52),
        z = i.n(I),
        L = i(518),
        N = i(63),
        P = i(521),
        B = i(528)
      function textStyle(t) {
        return Object(P.c)({ 'font-size': Object(B.a)(t.textSize) })
      }
      var R = i(108),
        V = [
          'vertical',
          'type',
          'color',
          'size',
          'textSize',
          'className',
          'children',
          'style',
        ]
      function ownKeys(t, r) {
        var i = b()(t)
        if (j.a) {
          var a = j()(t)
          r &&
            (a = k()(a).call(a, function (r) {
              return A()(t, r).enumerable
            })),
            i.push.apply(i, a)
        }
        return i
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i,
            a = null != arguments[r] ? arguments[r] : {}
          if (r % 2)
            C()((i = ownKeys(Object(a), !0))).call(i, function (r) {
              c()(t, r, a[r])
            })
          else if (S.a) T()(t, S()(a))
          else {
            var o
            C()((o = ownKeys(Object(a)))).call(o, function (r) {
              z()(t, r, A()(a, r))
            })
          }
        }
        return t
      }
      function Loading(t) {
        var r,
          i = t.vertical,
          a = t.type,
          c = void 0 === a ? 'circular' : a,
          o = t.color,
          u = t.size,
          v = t.textSize,
          y = t.className,
          x = t.children,
          b = t.style,
          g = h()(t, V),
          j = Object(N.useState)(d()({ length: 12 })),
          m = l()(j, 1)[0]
        return Object(R.jsxs)(
          L.n,
          _objectSpread(
            _objectSpread(
              {
                className: ' ' + P.b('loading', { vertical: i }) + ' ' + y,
                style: P.c([b]),
              },
              g,
            ),
            {},
            {
              children: [
                Object(R.jsx)(L.n, {
                  className: 'van-loading__spinner van-loading__spinner--' + c,
                  style:
                    ((r = { color: o, size: u }),
                    Object(P.c)({
                      color: r.color,
                      width: Object(B.a)(r.size),
                      height: Object(B.a)(r.size),
                    })),
                  children:
                    'spinner' === c &&
                    Object(R.jsx)(L.a, {
                      children: p()(m).call(m, function (t, r) {
                        return Object(R.jsx)(
                          L.n,
                          { className: 'van-loading__dot' },
                          'van-loading__dot_'.concat(r),
                        )
                      }),
                    }),
                }),
                Object(R.jsx)(L.n, {
                  className: 'van-loading__text',
                  style: textStyle({ textSize: v }),
                  children: x,
                }),
              ],
            },
          ),
        )
      }
      r.b = Loading
    },
    560: function (t, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return Button
      })
      var a = i(22),
        c = i.n(a),
        o = i(520),
        l = i.n(o),
        u = i(30),
        h = i.n(u),
        v = i(519),
        d = i.n(v),
        y = i(26),
        p = i.n(y),
        x = i(169),
        b = i.n(x),
        g = i(109),
        j = i.n(g),
        m = i(52),
        k = i.n(m),
        O = i(522),
        A = i.n(O),
        w = i(523),
        C = i.n(w),
        _ = i(87),
        S = i(518),
        q = i(521),
        T = i(529),
        I = i(538),
        z = i(27),
        L = i.n(z),
        N = i(527)
      function rootStyle(t) {
        var r
        if (!t.color) return ''
        var i = {
          color: t.plain ? t.color : '#fff',
          background: t.plain ? null : t.color,
        }
        return (
          -1 !== L()((r = t.color)).call(r, 'gradient')
            ? (i.border = 0)
            : (i['border-color'] = t.color),
          Object(N.a)([i])
        )
      }
      var P = i(108),
        B = [
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
      function ownKeys(t, r) {
        var i = c()(t)
        if (l.a) {
          var a = l()(t)
          r &&
            (a = h()(a).call(a, function (r) {
              return d()(t, r).enumerable
            })),
            i.push.apply(i, a)
        }
        return i
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i,
            a = null != arguments[r] ? arguments[r] : {}
          if (r % 2)
            p()((i = ownKeys(Object(a), !0))).call(i, function (r) {
              A()(t, r, a[r])
            })
          else if (b.a) j()(t, b()(a))
          else {
            var c
            p()((c = ownKeys(Object(a)))).call(c, function (r) {
              k()(t, r, d()(a, r))
            })
          }
        }
        return t
      }
      var R = !1,
        V = 10
      if (!R)
        var E = setInterval(function () {
          if (--V > 0)
            for (
              var t = document.getElementsByTagName('style') || [],
                r = t.length - 1;
              r >= 0;
              r--
            ) {
              var i = t[r],
                a = i.innerHTML
              if (a && /^taro-button-core{/.test(a)) {
                i.remove(), (R = !0), E && clearInterval(E)
                break
              }
            }
          else E && clearInterval(E)
        }, 200)
      function Button(t) {
        var r,
          i = t.type,
          a = void 0 === i ? 'default' : i,
          c = t.size,
          o = void 0 === c ? 'normal' : c,
          l = t.block,
          u = t.round,
          h = t.plain,
          v = t.square,
          d = t.loading,
          y = t.disabled,
          p = t.hairline,
          x = t.color,
          b = t.loadingSize,
          g = void 0 === b ? _.a.pxTransform(40) : b,
          j = t.loadingType,
          m = void 0 === j ? 'circular' : j,
          k = t.loadingText,
          O = t.icon,
          A = t.classPrefix,
          w = void 0 === A ? 'van-icon' : A,
          z = t.onClick,
          L = t.children,
          N = t.style,
          R = t.className,
          V = C()(t, B)
        return Object(P.jsx)(
          S.b,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  q.b('button', [
                    a,
                    o,
                    {
                      block: l,
                      round: u,
                      plain: h,
                      square: v,
                      loading: d,
                      disabled: y,
                      hairline: p,
                      unclickable: y || d,
                    },
                  ]) +
                  ' ' +
                  (p ? 'van-hairline--surround' : '') +
                  ' '.concat(R || ''),
                hoverClass: 'van-button--active hover-class',
                style: q.c([rootStyle({ plain: h, color: x }), N]),
                onClick: y || d ? void 0 : z,
              },
              V,
            ),
            {},
            {
              children: d
                ? Object(P.jsxs)(S.n, {
                    style: 'display: flex',
                    children: [
                      Object(P.jsx)(I.a, {
                        className: 'loading-class',
                        size: g,
                        type: m,
                        color:
                          ((r = { type: a, color: x, plain: h }),
                          r.plain
                            ? r.color
                              ? r.color
                              : '#c9c9c9'
                            : 'default' === r.type
                            ? '#c9c9c9'
                            : '#fff'),
                      }),
                      k &&
                        Object(P.jsx)(S.n, {
                          className: 'van-button__loading-text',
                          children: k,
                        }),
                    ],
                  })
                : Object(P.jsxs)(S.a, {
                    children: [
                      O &&
                        Object(P.jsx)(T.a, {
                          size: '1.2em',
                          name: O,
                          classPrefix: w,
                          className: 'van-button__icon',
                          style: 'line-height: inherit;',
                        }),
                      Object(P.jsx)(S.n, {
                        className: 'van-button__text',
                        children: L,
                      }),
                    ],
                  }),
            },
          ),
        )
      }
      r.b = Button
    },
    563: function (t, r, i) {},
    574: function (t, r, i) {
      'use strict'
      i(525), i(537), i(530), i(531), i(563)
    },
    649: function (t, r, i) {
      t.exports = i(654)
    },
    654: function (t, r, i) {
      var a = i(655)
      t.exports = a
    },
    655: function (t, r, i) {
      var a = i(13),
        c = i(656),
        o = Array.prototype
      t.exports = function (t) {
        var r = t.fill
        return t === o || (a(o, t) && r === o.fill) ? c : r
      }
    },
    656: function (t, r, i) {
      i(657)
      var a = i(17)
      t.exports = a('Array').fill
    },
    657: function (t, r, i) {
      var a = i(4),
        c = i(658),
        o = i(118)
      a({ target: 'Array', proto: !0 }, { fill: c }), o('fill')
    },
    658: function (t, r, i) {
      'use strict'
      var a = i(33),
        c = i(141),
        o = i(47)
      t.exports = function fill(t) {
        for (
          var r = a(this),
            i = o(r),
            l = arguments.length,
            u = c(l > 1 ? arguments[1] : void 0, i),
            h = l > 2 ? arguments[2] : void 0,
            v = void 0 === h ? i : c(h, i);
          v > u;

        )
          r[u++] = t
        return r
      }
    },
    716: function (t, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return S
      })
      var a = i(40),
        c = i.n(a),
        o = i(113),
        l = i.n(o),
        u = i(112),
        h = i.n(u),
        v = i(132)
      function _createForOfIteratorHelper(t, r) {
        var i = (void 0 !== c.a && l()(t)) || t['@@iterator']
        if (!i) {
          if (
            h()(t) ||
            (i = Object(v.a)(t)) ||
            (r && t && 'number' == typeof t.length)
          ) {
            i && (t = i)
            var a = 0,
              o = function F() {}
            return {
              s: o,
              n: function n() {
                return a >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[a++] }
              },
              e: function e(t) {
                throw t
              },
              f: o,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var u,
          d = !0,
          y = !1
        return {
          s: function s() {
            i = i.call(t)
          },
          n: function n() {
            var t = i.next()
            return (d = t.done), t
          },
          e: function e(t) {
            ;(y = !0), (u = t)
          },
          f: function f() {
            try {
              d || null == i.return || i.return()
            } finally {
              if (y) throw u
            }
          },
        }
      }
      var d = i(635),
        y = i(37),
        p = i(38),
        x = i(606),
        b = i.n(x),
        g = i(30),
        j = i.n(g),
        m = i(6),
        k = i.n(m),
        O = i(5),
        A = i.n(O),
        w = i(649),
        C = i.n(w),
        _ = {
          top: 'top',
          bottom: 'bottom',
          middle: 'middle',
          normal: 'alphabetic',
        },
        S = (function () {
          function CanvasContext(t, r) {
            Object(y.a)(this, CanvasContext),
              (this.actions = []),
              (this.canvas = t),
              (this.ctx = r)
          }
          var t
          return (
            Object(p.a)(CanvasContext, [
              {
                key: 'ctx',
                get: function get() {
                  return this.__raw__ || {}
                },
                set: function set(t) {
                  this.__raw__ = t
                },
              },
              {
                key: 'emptyActions',
                value: function emptyActions() {
                  this.actions.length = 0
                },
              },
              {
                key: 'enqueueActions',
                value: function enqueueActions(t) {
                  for (
                    var r = arguments.length,
                      i = new Array(r > 1 ? r - 1 : 0),
                      a = 1;
                    a < r;
                    a++
                  )
                    i[a - 1] = arguments[a]
                  this.actions.push({ func: t, args: i })
                },
              },
              {
                key: 'fillStyle',
                get: function get() {
                  return this.ctx.fillStyle
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.fillStyle = t
                  })
                },
              },
              {
                key: 'font',
                get: function get() {
                  return this.ctx.font
                },
                set: function set(t) {
                  this.ctx.font = t
                },
              },
              {
                key: 'globalAlpha',
                get: function get() {
                  return this.ctx.globalAlpha
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.globalAlpha = t
                  })
                },
              },
              {
                key: 'globalCompositeOperation',
                get: function get() {
                  return this.ctx.globalCompositeOperation
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.globalCompositeOperation = t
                  })
                },
              },
              {
                key: 'lineCap',
                get: function get() {
                  return this.ctx.lineCap
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.lineCap = t
                  })
                },
              },
              {
                key: 'lineDashOffset',
                get: function get() {
                  return this.ctx.lineDashOffset
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.lineDashOffset = t
                  })
                },
              },
              {
                key: 'lineJoin',
                get: function get() {
                  return this.ctx.lineJoin
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.lineJoin = t
                  })
                },
              },
              {
                key: 'lineWidth',
                get: function get() {
                  return this.ctx.lineWidth
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.lineWidth = t
                  })
                },
              },
              {
                key: 'miterLimit',
                get: function get() {
                  return this.ctx.miterLimit
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.miterLimit = t
                  })
                },
              },
              {
                key: 'shadowBlur',
                get: function get() {
                  return this.ctx.shadowBlur
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.shadowBlur = t
                  })
                },
              },
              {
                key: 'shadowColor',
                get: function get() {
                  return this.ctx.shadowColor
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.shadowColor = t
                  })
                },
              },
              {
                key: 'shadowOffsetX',
                get: function get() {
                  return this.ctx.shadowOffsetX
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.shadowOffsetX = t
                  })
                },
              },
              {
                key: 'shadowOffsetY',
                get: function get() {
                  return this.ctx.shadowOffsetY
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.shadowOffsetY = t
                  })
                },
              },
              {
                key: 'strokeStyle',
                get: function get() {
                  return this.ctx.strokeStyle
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.strokeStyle = t
                  })
                },
              },
              {
                key: 'textAlign',
                get: function get() {
                  return this.ctx.textAlign
                },
                set: function set(t) {
                  this.ctx.textAlign = t
                },
              },
              {
                key: 'textBaseline',
                get: function get() {
                  return this.ctx.textBaseline
                },
                set: function set(t) {
                  this.ctx.textBaseline = t
                },
              },
              {
                key: 'direction',
                get: function get() {
                  return this.ctx.direction
                },
                set: function set(t) {
                  this.ctx.direction = t
                },
              },
              {
                key: 'imageSmoothingEnabled',
                get: function get() {
                  return this.ctx.imageSmoothingEnabled
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.imageSmoothingEnabled = t
                  })
                },
              },
              {
                key: 'imageSmoothingQuality',
                get: function get() {
                  return this.ctx.imageSmoothingQuality
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.imageSmoothingQuality = t
                  })
                },
              },
              {
                key: 'filter',
                get: function get() {
                  return j()(this.ctx)
                },
                set: function set(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.filter = t
                  })
                },
              },
              {
                key: 'arc',
                value: function arc() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.arc])).call(t, i),
                  )
                },
              },
              {
                key: 'arcTo',
                value: function arcTo() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.arcTo])).call(t, i),
                  )
                },
              },
              {
                key: 'beginPath',
                value: function beginPath() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.beginPath])).call(t, i),
                  )
                },
              },
              {
                key: 'bezierCurveTo',
                value: function bezierCurveTo() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.bezierCurveTo])).call(t, i),
                  )
                },
              },
              {
                key: 'clearRect',
                value: function clearRect() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.clearRect])).call(t, i),
                  )
                },
              },
              {
                key: 'clip',
                value: function clip() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.clip])).call(t, i),
                  )
                },
              },
              {
                key: 'closePath',
                value: function closePath() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.closePath])).call(t, i),
                  )
                },
              },
              {
                key: 'createPattern',
                value: function createPattern(t, r) {
                  return this.createPattern(t, r)
                },
              },
              {
                key: 'draw',
                value:
                  ((t = Object(d.a)(
                    b.a.mark(function _callee(t, r) {
                      var i, a, c, o, l
                      return b.a.wrap(
                        function _callee$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                ;(u.prev = 0),
                                  t ||
                                    this.ctx.clearRect(
                                      0,
                                      0,
                                      this.canvas.width,
                                      this.canvas.height,
                                    ),
                                  (i = _createForOfIteratorHelper(
                                    this.actions,
                                  )),
                                  (u.prev = 3),
                                  i.s()
                              case 5:
                                if ((a = i.n()).done) {
                                  u.next = 11
                                  break
                                }
                                return (
                                  (c = a.value),
                                  (o = c.func),
                                  (l = c.args),
                                  (u.next = 9),
                                  o.apply(this.ctx, l)
                                )
                              case 9:
                                u.next = 5
                                break
                              case 11:
                                u.next = 16
                                break
                              case 13:
                                ;(u.prev = 13), (u.t0 = u.catch(3)), i.e(u.t0)
                              case 16:
                                return (u.prev = 16), i.f(), u.finish(16)
                              case 19:
                                this.emptyActions(), r && r(), (u.next = 26)
                                break
                              case 23:
                                throw (
                                  ((u.prev = 23),
                                  (u.t1 = u.catch(0)),
                                  { errMsg: u.t1.message })
                                )
                              case 26:
                              case 'end':
                                return u.stop()
                            }
                        },
                        _callee,
                        this,
                        [
                          [0, 23],
                          [3, 13, 16, 19],
                        ],
                      )
                    }),
                  )),
                  function draw(r, i) {
                    return t.apply(this, arguments)
                  }),
              },
              {
                key: 'drawImage',
                value: function drawImage(t) {
                  for (
                    var r = this,
                      i = arguments.length,
                      a = new Array(i > 1 ? i - 1 : 0),
                      c = 1;
                    c < i;
                    c++
                  )
                    a[c - 1] = arguments[c]
                  this.enqueueActions(function () {
                    var i, c
                    if ('string' == typeof t) {
                      var o = new Image()
                      return (
                        (o.src = t),
                        new A.a(function (t, i) {
                          ;(o.onload = function () {
                            var i, c
                            ;(i = r.ctx).drawImage.apply(
                              i,
                              k()((c = [o])).call(c, a),
                            ),
                              t()
                          }),
                            (o.onerror = i)
                        })
                      )
                    }
                    ;(i = r.ctx).drawImage.apply(i, k()((c = [t])).call(c, a))
                  })
                },
              },
              {
                key: 'fill',
                value: function fill() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [C()(this.ctx)])).call(t, i),
                  )
                },
              },
              {
                key: 'fillRect',
                value: function fillRect() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.fillRect])).call(t, i),
                  )
                },
              },
              {
                key: 'fillText',
                value: function fillText() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.fillText])).call(t, i),
                  )
                },
              },
              {
                key: 'lineTo',
                value: function lineTo() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.lineTo])).call(t, i),
                  )
                },
              },
              {
                key: 'moveTo',
                value: function moveTo() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.moveTo])).call(t, i),
                  )
                },
              },
              {
                key: 'quadraticCurveTo',
                value: function quadraticCurveTo() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.quadraticCurveTo])).call(t, i),
                  )
                },
              },
              {
                key: 'rect',
                value: function rect() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.rect])).call(t, i),
                  )
                },
              },
              {
                key: 'restore',
                value: function restore() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.restore])).call(t, i),
                  )
                },
              },
              {
                key: 'rotate',
                value: function rotate() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.rotate])).call(t, i),
                  )
                },
              },
              {
                key: 'save',
                value: function save() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.save])).call(t, i),
                  )
                },
              },
              {
                key: 'scale',
                value: function scale() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.scale])).call(t, i),
                  )
                },
              },
              {
                key: 'setFillStyle',
                value: function setFillStyle(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.fillStyle = t
                  })
                },
              },
              {
                key: 'setFontSize',
                value: function setFontSize(t) {
                  this.font = ''.concat(t, 'px')
                },
              },
              {
                key: 'setGlobalAlpha',
                value: function setGlobalAlpha(t) {
                  this.globalAlpha = t
                },
              },
              {
                key: 'setLineCap',
                value: function setLineCap(t) {
                  this.lineCap = t
                },
              },
              {
                key: 'setLineDash',
                value: function setLineDash(t, r) {
                  var i = this
                  this.enqueueActions(function () {
                    i.ctx.setLineDash(t), (i.ctx.lineDashOffset = r)
                  })
                },
              },
              {
                key: 'setLineJoin',
                value: function setLineJoin(t) {
                  this.lineJoin = t
                },
              },
              {
                key: 'setLineWidth',
                value: function setLineWidth(t) {
                  this.lineWidth = t
                },
              },
              {
                key: 'setMiterLimit',
                value: function setMiterLimit(t) {
                  this.miterLimit = t
                },
              },
              {
                key: 'setShadow',
                value: function setShadow(t, r, i, a) {
                  var c = this
                  this.enqueueActions(function () {
                    ;(c.ctx.shadowOffsetX = t),
                      (c.ctx.shadowOffsetY = r),
                      (c.ctx.shadowColor = a),
                      (c.ctx.shadowBlur = i)
                  })
                },
              },
              {
                key: 'setStrokeStyle',
                value: function setStrokeStyle(t) {
                  var r = this
                  this.enqueueActions(function () {
                    r.ctx.strokeStyle = t
                  })
                },
              },
              {
                key: 'setTextAlign',
                value: function setTextAlign(t) {
                  this.textAlign = t
                },
              },
              {
                key: 'setTextBaseline',
                value: function setTextBaseline(t) {
                  this.textBaseline = _[t] || 'alphabetic'
                },
              },
              {
                key: 'setTransform',
                value: function setTransform() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.setTransform])).call(t, i),
                  )
                },
              },
              {
                key: 'stroke',
                value: function stroke() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.stroke])).call(t, i),
                  )
                },
              },
              {
                key: 'strokeRect',
                value: function strokeRect() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.strokeRect])).call(t, i),
                  )
                },
              },
              {
                key: 'strokeText',
                value: function strokeText() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.strokeText])).call(t, i),
                  )
                },
              },
              {
                key: 'transform',
                value: function transform() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.transform])).call(t, i),
                  )
                },
              },
              {
                key: 'translate',
                value: function translate() {
                  for (
                    var t, r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a]
                  return this.enqueueActions.apply(
                    this,
                    k()((t = [this.ctx.translate])).call(t, i),
                  )
                },
              },
              {
                key: 'measureText',
                value: function measureText(t) {
                  return this.ctx.measureText(t)
                },
              },
              {
                key: 'createCircularGradient',
                value: function createCircularGradient(t, r, i) {
                  return this.ctx.createRadialGradient(t, r, 0, t, r, i)
                },
              },
              {
                key: 'createLinearGradient',
                value: function createLinearGradient(t, r, i, a) {
                  return this.createLinearGradient(t, r, i, a)
                },
              },
            ]),
            CanvasContext
          )
        })()
    },
    792: function (t, r, i) {},
    793: function (t, r, i) {
      'use strict'
      ;(function (t) {
        var a = i(520),
          c = i.n(a),
          o = i(30),
          l = i.n(o),
          u = i(519),
          h = i.n(u),
          v = i(26),
          d = i.n(v),
          y = i(169),
          p = i.n(y),
          x = i(109),
          b = i.n(x),
          g = i(52),
          j = i.n(g),
          m = i(522),
          k = i.n(m),
          O = i(523),
          A = i.n(O),
          w = i(524),
          C = i.n(w),
          _ = i(649),
          S = i.n(_),
          q = i(5),
          T = i.n(q),
          I = i(9),
          z = i.n(I),
          L = i(36),
          N = i.n(L),
          P = i(22),
          B = i.n(P),
          R = i(175),
          V = i.n(R),
          E = i(862),
          M = i(63),
          W = i(518),
          D = i(3),
          G = i(526),
          K = i(108),
          J = [
            'text',
            'lineCap',
            'value',
            'speed',
            'size',
            'fill',
            'layerColor',
            'color',
            'type',
            'strokeWidth',
            'clockwise',
            'style',
            'className',
            'children',
          ]
        function ownKeys(t, r) {
          var i = B()(t)
          if (c.a) {
            var a = c()(t)
            r &&
              (a = l()(a).call(a, function (r) {
                return h()(t, r).enumerable
              })),
              i.push.apply(i, a)
          }
          return i
        }
        function _objectSpread(t) {
          for (var r = 1; r < arguments.length; r++) {
            var i,
              a = null != arguments[r] ? arguments[r] : {}
            if (r % 2)
              d()((i = ownKeys(Object(a), !0))).call(i, function (r) {
                k()(t, r, a[r])
              })
            else if (p.a) b()(t, p()(a))
            else {
              var c
              d()((c = ownKeys(Object(a)))).call(c, function (r) {
                j()(t, r, h()(a, r))
              })
            }
          }
          return t
        }
        var Y = 2 * Math.PI,
          H = -Math.PI / 2,
          U = 0
        r.a = function Circle(r) {
          var i = Object(M.useState)({
              ready: !1,
              hoverColor: '',
              unitag: 'van-circle',
            }),
            a = C()(i, 2),
            c = a[0],
            o = a[1],
            l = Object(M.useRef)({
              inited: !1,
              currentValue: void 0,
              interval: void 0,
            }),
            u = r.text,
            h = r.lineCap,
            v = void 0 === h ? 'round' : h,
            d = r.value,
            y = void 0 === d ? 0 : d,
            p = r.speed,
            x = void 0 === p ? 50 : p,
            b = r.size,
            g = void 0 === b ? 100 : b,
            j = S()(r),
            m = r.layerColor,
            k = void 0 === m ? '#ffffff' : m,
            O = r.color,
            w = void 0 === O ? '#1989fa' : O,
            _ = (r.type, r.strokeWidth),
            q = void 0 === _ ? 4 : _,
            I = r.clockwise,
            L = void 0 === I || I,
            P = r.style,
            R = r.className,
            X = r.children,
            Q = A()(r, J)
          Object(M.useEffect)(function () {
            o(function (t) {
              return _objectSpread(
                _objectSpread({}, t),
                {},
                { unitag: 'van-circle_uni_'.concat(U++) },
              )
            })
          }, []),
            Object(M.useEffect)(function () {
              o(function (t) {
                return _objectSpread(_objectSpread({}, t), {}, { ready: !0 })
              })
            }, []),
            Object(M.useEffect)(function () {
              'react' === t.env.LIBRARY_ENV &&
                setTimeout(function () {
                  o(function (t) {
                    return _objectSpread(
                      _objectSpread({}, t),
                      {},
                      { ready: !0 },
                    )
                  })
                }, 100)
            }, [])
          var $ = Object(M.useCallback)(
              function () {
                'react' === t.env.LIBRARY_ENV &&
                  (D.a.page = { path: 'page-'.concat(c.unitag) })
                var r = null
                try {
                  r = Object(E.a)(c.unitag)
                } catch (t) {}
                return T.a.resolve(r)
              },
              [c.unitag],
            ),
            Z = Object(M.useCallback)(
              function (t, r, i, a, c) {
                var o = g / 2,
                  l = o - q / 2
                t.setStrokeStyle(r),
                  t.setLineWidth(q),
                  t.setLineCap(v),
                  t.beginPath(),
                  t.arc(o, o, l, i, a, !L),
                  t.stroke(),
                  c && (t.setFillStyle(c), S()(t).call(t))
              },
              [L, v, g, q],
            ),
            ee = Object(M.useCallback)(
              function (t) {
                Z(t, k, 0, Y, j)
              },
              [j, k, Z],
            ),
            te = Object(M.useCallback)(
              function (t, r) {
                var i = Y * (r / 100),
                  a = L ? H + i : 3 * Math.PI - (H + i)
                Z(t, c.hoverColor, H, a)
              },
              [L, Z, c.hoverColor],
            ),
            ne = Object(M.useCallback)(
              function (t) {
                $().then(function (r) {
                  if (r) {
                    r.clearRect(0, 0, g, g), ee(r)
                    var i = (function format(t) {
                      return Math.min(Math.max(t, 0), 100)
                    })(t)
                    0 !== i && te(r, i), r.draw()
                  }
                })
              },
              [$, te, ee, g],
            ),
            re = function clearMockInterval() {
              l.current.interval &&
                (clearTimeout(l.current.interval), (l.current.interval = null))
            },
            ie = Object(M.useCallback)(
              function () {
                if (x <= 0 || x > 1e3) ne(y)
                else {
                  re(), (l.current.currentValue = l.current.currentValue || 0)
                  !(function run() {
                    l.current.interval = setTimeout(function () {
                      l.current.currentValue !== y
                        ? (Math.abs(l.current.currentValue - y) < 1
                            ? (l.current.currentValue = y)
                            : l.current.currentValue < y
                            ? (l.current.currentValue += 1)
                            : (l.current.currentValue -= 1),
                          ne(l.current.currentValue),
                          run())
                        : re()
                    }, 1e3 / x)
                  })()
                }
              },
              [ne, x, y],
            )
          return (
            Object(M.useEffect)(
              function () {
                c.ready && ie()
              },
              [ie, c.ready, y],
            ),
            Object(M.useEffect)(
              function () {
                c.ready && ne(l.current.currentValue)
              },
              [c.ready, g],
            ),
            Object(M.useEffect)(
              function () {
                c.ready &&
                  (function setHoverColor() {
                    if (Object(G.d)(w)) {
                      var t = w
                      return $().then(function (r) {
                        if (r) {
                          var i,
                            a,
                            c = r.createLinearGradient(g, 0, 0, 0)
                          z()(
                            (i = N()((a = B()(w))).call(a, function (t, r) {
                              return V()(t) - V()(r)
                            })),
                          ).call(i, function (r) {
                            return c.addColorStop(V()(r) / 100, t[r])
                          }),
                            o(function (t) {
                              return _objectSpread(
                                _objectSpread({}, t),
                                {},
                                { hoverColor: c },
                              )
                            })
                        }
                      })
                    }
                    return (
                      o(function (t) {
                        return _objectSpread(
                          _objectSpread({}, t),
                          {},
                          { hoverColor: w },
                        )
                      }),
                      T.a.resolve()
                    )
                  })().then(function () {
                    ne(l.current.currentValue)
                  })
              },
              [c.ready, w],
            ),
            Object(M.useEffect)(
              function () {
                return function () {
                  re()
                }
              },
              [c.ready],
            ),
            Object(K.jsxs)(
              W.n,
              _objectSpread(
                _objectSpread(
                  {
                    id: 'page-'.concat(c.unitag),
                    className: 'van-circle '.concat(R),
                    style: P,
                  },
                  Q,
                ),
                {},
                {
                  children: [
                    Object(K.jsx)(W.c, {
                      width: g,
                      height: g,
                      nativeProps: { width: g, height: g },
                      className: 'van-circle__canvas '.concat(c.unitag),
                      style:
                        'width: ' +
                        ''.concat(g, 'px') +
                        ';height:' +
                        ''.concat(g, 'px'),
                      id: c.unitag,
                      canvasId: c.unitag,
                    }),
                    u
                      ? Object(K.jsx)(W.d, {
                          className: 'van-circle__text',
                          children: u,
                        })
                      : Object(K.jsx)(W.n, {
                          className: 'van-circle__text',
                          children: X,
                        }),
                  ],
                },
              ),
            )
          )
        }
      }.call(this, i(231)))
    },
    794: function (t, r, i) {},
    862: function (t, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return o
      })
      var a = i(16),
        c = i(716),
        o = function createCanvasContext(t, r) {
          var i = Object(a.b)(r),
            o =
              null == i
                ? void 0
                : i.querySelector('canvas[canvas-id="'.concat(t, '"]')),
            l = null == o ? void 0 : o.getContext('2d'),
            u = new c.a(o, l)
          return l ? ((u.canvas = o), (u.ctx = l), u) : u
        }
    },
    901: function (t, r, i) {
      'use strict'
      i.r(r),
        i.d(r, 'default', function () {
          return k
        })
      i(574)
      var a = i(560),
        c = (i(525), i(792), i(793)),
        o = i(37),
        l = i(38),
        u = i(171),
        h = i(65),
        v = i(64),
        d = i(88),
        y = i(175),
        p = i.n(y),
        x = i(63),
        b = i(541),
        g = i(532),
        j = (i(794), i(108)),
        m = function format(t) {
          return Math.min(Math.max(t, 0), 100)
        },
        k = (function (t) {
          Object(h.a)(Index, t)
          var r = Object(v.a)(Index)
          function Index() {
            var t
            return (
              Object(o.a)(this, Index),
              (t = r.call(this)),
              Object(d.a)(Object(u.a)(t), 'state', {
                value: 25,
                gradientColor: { '0%': '#ffd01e', '100%': '#ee0a24' },
              }),
              Object(d.a)(Object(u.a)(t), 'run', function (r) {
                var i = p()(r.currentTarget.dataset.step)
                t.setState({ value: m(t.state.value + i) })
              }),
              t
            )
          }
          return (
            Object(l.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var t = this,
                    r = this.state,
                    i = r.value,
                    o = r.gradientColor
                  return Object(j.jsx)(b.a, {
                    title: 'Circle 进度条',
                    children: Object(j.jsxs)(j.Fragment, {
                      children: [
                        Object(j.jsx)(g.a, {
                          title: 'demo',
                          children: Object(j.jsx)(c.a, {
                            value: i,
                            size: 100,
                            strokeWidth: 8,
                            text: '颜色定制',
                            color: '#00ffff',
                          }),
                        }),
                        Object(j.jsx)(g.a, {
                          title: '基础用法',
                          children: Object(j.jsx)(c.a, {
                            type: '2d',
                            value: i,
                            text: i + '%',
                          }),
                        }),
                        Object(j.jsxs)(g.a, {
                          title: '样式定制',
                          children: [
                            Object(j.jsx)(c.a, {
                              value: i,
                              strokeWidth: 6,
                              text: '宽度定制',
                            }),
                            Object(j.jsx)(c.a, {
                              value: i,
                              layerColor: '#eee',
                              color: '#ee0a24',
                              text: '颜色定制',
                            }),
                            Object(j.jsx)(c.a, {
                              type: '2d',
                              value: i,
                              color: o,
                              text: '渐变色',
                            }),
                            Object(j.jsx)(c.a, {
                              value: i,
                              color: '#07c160',
                              clockwise: !1,
                              text: '逆时针',
                            }),
                            Object(j.jsx)(c.a, {
                              value: i,
                              size: '120',
                              text: '大小定制',
                            }),
                          ],
                        }),
                        Object(j.jsx)(a.b, {
                          type: 'primary',
                          size: 'small',
                          onClick: function onClick(r) {
                            t.run({
                              detail: r.detail,
                              currentTarget: { dataset: { step: '10' } },
                              target: { dataset: { step: '10' } },
                            })
                          },
                          children: '增加',
                        }),
                        Object(j.jsx)(a.b, {
                          type: 'danger',
                          size: 'small',
                          onClick: function onClick(r) {
                            t.run({
                              detail: r.detail,
                              currentTarget: { dataset: { step: '-10' } },
                              target: { dataset: { step: '-10' } },
                            })
                          },
                          children: '减少',
                        }),
                      ],
                    }),
                  })
                },
              },
            ]),
            Index
          )
        })(x.Component)
    },
  },
])