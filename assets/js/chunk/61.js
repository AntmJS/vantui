;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    575: function (t, n, e) {
      'use strict'
      e.d(n, 'e', function () {
        return isPlainObject
      }),
        e.d(n, 'f', function () {
          return isPromise
        }),
        e.d(n, 'b', function () {
          return isDef
        }),
        e.d(n, 'd', function () {
          return isObj
        }),
        e.d(n, 'a', function () {
          return isBoolean
        }),
        e.d(n, 'c', function () {
          return isImageUrl
        }),
        e.d(n, 'g', function () {
          return isVideoUrl
        })
      var a = e(586),
        r = e.n(a)
      function isFunction(t) {
        return 'function' == typeof t
      }
      function isPlainObject(t) {
        return null !== t && 'object' === r()(t) && !Array.isArray(t)
      }
      function isPromise(t) {
        return isPlainObject(t) && isFunction(t.then) && isFunction(t.catch)
      }
      function isDef(t) {
        return null != t
      }
      function isObj(t) {
        var n = r()(t)
        return null !== t && ('object' === n || 'function' === n)
      }
      function isBoolean(t) {
        return 'boolean' == typeof t
      }
      var i = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        c = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
      function isImageUrl(t) {
        return i.test(t)
      }
      function isVideoUrl(t) {
        return c.test(t)
      }
    },
    590: function (t, n, e) {
      'use strict'
      e.d(n, 'g', function () {
        return range
      }),
        e.d(n, 'd', function () {
          return getSystemInfoSync
        }),
        e.d(n, 'a', function () {
          return addUnit
        }),
        e.d(n, 'h', function () {
          return requestAnimationFrame
        }),
        e.d(n, 'f', function () {
          return pickExclude
        }),
        e.d(n, 'c', function () {
          return getRect
        }),
        e.d(n, 'b', function () {
          return getAllRect
        }),
        e.d(n, 'i', function () {
          return toPromise
        })
      var a,
        r = e(148),
        i = e.n(r),
        c = e(24),
        o = e.n(c),
        s = e(21),
        u = e.n(s),
        l = e(5),
        d = e.n(l),
        f = (e(567), e(863)),
        h = (e(866), e(90)),
        m = e(790),
        b = (e(77), e(575))
      e(593)
      function range(t, n, e) {
        return Math.min(Math.max(t, n), e)
      }
      function getSystemInfoSync() {
        return null == a && (a = Object(f.a)()), a
      }
      function addUnit(t) {
        if (Object(b.b)(t))
          return /^-?\d+(\.\d+)?$/.test('' + t) ? h.a.pxTransform(t) : t
      }
      function requestAnimationFrame(t) {
        return 'devtools' === getSystemInfoSync().platform
          ? setTimeout(function () {
              t()
            }, 33.333333333333336)
          : Object(m.a)()
              .selectViewport()
              .boundingClientRect()
              .exec(function () {
                t()
              })
      }
      function pickExclude(t, n) {
        var e
        return Object(b.e)(t)
          ? i()((e = o()(t))).call(
              e,
              function (e, a) {
                return u()(n).call(n, a) || (e[a] = t[a]), e
              },
              {},
            )
          : {}
      }
      function getRect(t, n) {
        return new d.a(function (e) {
          var a = Object(m.a)()
          t && (a = a.in(t)),
            a
              .select(n)
              .boundingClientRect()
              .exec(function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return e(t[0])
              })
        })
      }
      function getAllRect(t, n) {
        return new d.a(function (e) {
          var a = Object(m.a)()
          t && (a = a.in(t)),
            a
              .selectAll(n)
              .boundingClientRect()
              .exec(function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                return e(t[0])
              })
        })
      }
      function toPromise(t) {
        return Object(b.f)(t) ? t : d.a.resolve(t)
      }
      e.d(n, 'e', function () {
        return b.b
      })
    },
    593: function (t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return canIUseModel
      }),
        e.d(n, 'b', function () {
          return canIUseNextTick
        })
      var a,
        r = e(117),
        i = e.n(r),
        c = e(863),
        o = e(864)
      e(865)
      function gte(t) {
        return (
          (function compareVersion(t, n) {
            ;(t = t.split('.')), (n = n.split('.'))
            for (var e = Math.max(t.length, n.length); t.length < e; )
              t.push('0')
            for (; n.length < e; ) n.push('0')
            for (var a = 0; a < e; a++) {
              var r = i()(t[a], 10),
                c = i()(n[a], 10)
              if (r > c) return 1
              if (r < c) return -1
            }
            return 0
          })(
            (function getSystemInfoSync() {
              return null == a && (a = Object(c.a)()), a
            })().SDKVersion,
            t,
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
    831: function (t, n, e) {
      'use strict'
      e.d(n, 'a', function () {
        return y
      })
      var a = e(174),
        r = e(40),
        i = e(39),
        c = e(6),
        o = e.n(c),
        s = e(27),
        u = e.n(s),
        l = e(32),
        d = e.n(l),
        f = e(10),
        h = e.n(f),
        m = new (Object(r.a)(function StyleSheet() {
          var t = this
          Object(i.a)(this, StyleSheet),
            (this.$style = null),
            (this.sheet = null),
            (this.appendStyleSheet = function () {
              if (t.$style) {
                var n = document.getElementsByTagName('head')[0]
                t.$style.setAttribute('type', 'text/css'),
                  t.$style.setAttribute('data-type', 'Taro'),
                  n.appendChild(t.$style),
                  (t.sheet = t.$style.sheet)
              }
              t.sheet &&
                !('insertRule' in t.sheet) &&
                console.warn('当前浏览器不支持 stylesheet.insertRule 接口')
            }),
            (this.add = function (n) {
              var e,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
              null === t.sheet && t.appendStyleSheet(),
                null === (e = t.sheet) || void 0 === e || e.insertRule(n, a)
            }),
            (this.$style = document.createElement('style'))
        }))(),
        b = 'transitionend',
        v = 'transform',
        p = document.createElement('div')
      ;(p.style.cssText =
        '-webkit-animation-name:webkit;-moz-animation-name:moz;-ms-animation-name:ms;animation-name:standard;'),
        'standard' === p.style['animation-name']
          ? ((b = 'transitionend'), (v = 'transform'))
          : 'webkit' === p.style['-webkit-animation-name']
          ? ((b = 'webkitTransitionEnd'), (v = '-webkit-transform'))
          : 'moz' === p.style['-moz-animation-name']
          ? ((b = 'mozTransitionEnd'), (v = '-moz-transform'))
          : 'ms' === p.style['-ms-animation-name'] &&
            ((b = 'msTransitionEnd'), (v = '-ms-transform'))
      var j = 0,
        g = (function () {
          function Animation() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = n.duration,
              r = void 0 === e ? 400 : e,
              c = n.delay,
              s = void 0 === c ? 0 : c,
              u = n.timingFunction,
              l = void 0 === u ? 'linear' : u,
              d = n.transformOrigin,
              f = void 0 === d ? '50% 50% 0' : d,
              h = n.unit,
              m = void 0 === h ? 'px' : h
            Object(i.a)(this, Animation),
              (this.rules = []),
              (this.transform = [''.concat(v, ':')]),
              (this.steps = []),
              (this.animationMap = {}),
              (this.animationMapCount = 0),
              this.setDefault(r, s, l, f),
              (this.unit = m)
            var p = 'animation'
            ;(this.id = ++j),
              document.body.addEventListener(b, function (n) {
                var e = n.target
                null === e.getAttribute(p) && (p = 'data-animation')
                var r = e.getAttribute(p)
                if (null !== r) {
                  var i = r.split('__'),
                    c = Object(a.a)(i, 2),
                    s = c[0],
                    u = c[1]
                  if (
                    s === 'taro-h5-poly-fill/'.concat(t.id, '/create-animation')
                  ) {
                    var l,
                      d,
                      f,
                      h,
                      m,
                      b = u.split('--'),
                      v = Object(a.a)(b, 2),
                      j = v[0],
                      g = v[1],
                      y = Number(void 0 === g ? 0 : g)
                    if (
                      y <
                      t.animationMap[o()((l = ''.concat(s, '__'))).call(l, j)] -
                        1
                    )
                      if (
                        (e.setAttribute(
                          p,
                          o()(
                            (d = o()((f = ''.concat(s, '__'))).call(
                              f,
                              j,
                              '--',
                            )),
                          ).call(d, y + 1),
                        ),
                        'animation' === p)
                      )
                        e.setAttribute(
                          'data-animation',
                          o()(
                            (h = o()((m = ''.concat(s, '__'))).call(
                              m,
                              j,
                              '--',
                            )),
                          ).call(h, y + 1),
                        )
                  }
                }
              })
          }
          return (
            Object(r.a)(Animation, [
              {
                key: 'transformUnit',
                value: function transformUnit() {
                  for (
                    var t = this,
                      n = [],
                      e = arguments.length,
                      a = new Array(e),
                      r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r]
                  return (
                    u()(a).call(a, function (e) {
                      var a
                      n.push(
                        isNaN(e) ? e : o()((a = ''.concat(e))).call(a, t.unit),
                      )
                    }),
                    n
                  )
                },
              },
              {
                key: 'setDefault',
                value: function setDefault(t, n, e, a) {
                  this.DEFAULT = {
                    duration: t,
                    delay: n,
                    timingFunction: e,
                    transformOrigin: a,
                  }
                },
              },
              {
                key: 'matrix',
                value: function matrix(t, n, e, a, r, i) {
                  var c, s, u, l, d
                  return (
                    this.transform.push(
                      o()(
                        (c = o()(
                          (s = o()(
                            (u = o()(
                              (l = o()((d = 'matrix('.concat(t, ', '))).call(
                                d,
                                n,
                                ', ',
                              )),
                            ).call(l, e, ', ')),
                          ).call(u, a, ', ')),
                        ).call(s, r, ', ')),
                      ).call(c, i, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'matrix3d',
                value: function matrix3d(
                  t,
                  n,
                  e,
                  a,
                  r,
                  i,
                  c,
                  s,
                  u,
                  l,
                  d,
                  f,
                  h,
                  m,
                  b,
                  v,
                ) {
                  var p, j, g, y, O, k, x, w, _, S, A, D, U, I, C
                  return (
                    this.transform.push(
                      o()(
                        (p = o()(
                          (j = o()(
                            (g = o()(
                              (y = o()(
                                (O = o()(
                                  (k = o()(
                                    (x = o()(
                                      (w = o()(
                                        (_ = o()(
                                          (S = o()(
                                            (A = o()(
                                              (D = o()(
                                                (U = o()(
                                                  (I = o()(
                                                    (C = 'matrix3d('.concat(
                                                      t,
                                                      ', ',
                                                    )),
                                                  ).call(C, n, ', ')),
                                                ).call(I, e, ', ')),
                                              ).call(U, a, ', ')),
                                            ).call(D, r, ', ')),
                                          ).call(A, i, ', ')),
                                        ).call(S, c, ', ')),
                                      ).call(_, s, ', ')),
                                    ).call(w, u, ', ')),
                                  ).call(x, l, ', ')),
                                ).call(k, d, ', ')),
                              ).call(O, f, ', ')),
                            ).call(y, h, ', ')),
                          ).call(g, m, ', ')),
                        ).call(j, b, ', ')),
                      ).call(p, v, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'rotate',
                value: function rotate(t) {
                  return this.transform.push('rotate('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotate3d',
                value: function rotate3d(t, n, e, a) {
                  var r, i, c
                  'number' != typeof n
                    ? this.transform.push('rotate3d('.concat(t, ')'))
                    : this.transform.push(
                        o()(
                          (r = o()(
                            (i = o()((c = 'rotate3d('.concat(t, ', '))).call(
                              c,
                              n || 0,
                              ', ',
                            )),
                          ).call(i, e || 0, ', ')),
                        ).call(r, a || 0, 'deg)'),
                      )
                  return this
                },
              },
              {
                key: 'rotateX',
                value: function rotateX(t) {
                  return this.transform.push('rotateX('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotateY',
                value: function rotateY(t) {
                  return this.transform.push('rotateY('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'rotateZ',
                value: function rotateZ(t) {
                  return this.transform.push('rotateZ('.concat(t, 'deg)')), this
                },
              },
              {
                key: 'scale',
                value: function scale(t, n) {
                  var e
                  return (
                    this.transform.push(
                      o()((e = 'scale('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'scale3d',
                value: function scale3d(t, n, e) {
                  var a, r
                  return (
                    this.transform.push(
                      o()(
                        (a = o()((r = 'scale3d('.concat(t, ', '))).call(
                          r,
                          n,
                          ', ',
                        )),
                      ).call(a, e, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'scaleX',
                value: function scaleX(t) {
                  return this.transform.push('scaleX('.concat(t, ')')), this
                },
              },
              {
                key: 'scaleY',
                value: function scaleY(t) {
                  return this.transform.push('scaleY('.concat(t, ')')), this
                },
              },
              {
                key: 'scaleZ',
                value: function scaleZ(t) {
                  return this.transform.push('scaleZ('.concat(t, ')')), this
                },
              },
              {
                key: 'skew',
                value: function skew(t, n) {
                  var e
                  return (
                    this.transform.push(
                      o()((e = 'skew('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'skewX',
                value: function skewX(t) {
                  return this.transform.push('skewX('.concat(t, ')')), this
                },
              },
              {
                key: 'skewY',
                value: function skewY(t) {
                  return this.transform.push('skewY('.concat(t, ')')), this
                },
              },
              {
                key: 'translate',
                value: function translate(t, n) {
                  var e,
                    r = this.transformUnit(t, n),
                    i = Object(a.a)(r, 2)
                  return (
                    (t = i[0]),
                    (n = i[1]),
                    this.transform.push(
                      o()((e = 'translate('.concat(t, ', '))).call(e, n, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'translate3d',
                value: function translate3d(t, n, e) {
                  var r,
                    i,
                    c = this.transformUnit(t, n, e),
                    s = Object(a.a)(c, 3)
                  return (
                    (t = s[0]),
                    (n = s[1]),
                    (e = s[2]),
                    this.transform.push(
                      o()(
                        (r = o()((i = 'translate3d('.concat(t, ', '))).call(
                          i,
                          n,
                          ', ',
                        )),
                      ).call(r, e, ')'),
                    ),
                    this
                  )
                },
              },
              {
                key: 'translateX',
                value: function translateX(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateX('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'translateY',
                value: function translateY(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateY('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'translateZ',
                value: function translateZ(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.transform.push('translateZ('.concat(t, ')')),
                    this
                  )
                },
              },
              {
                key: 'opacity',
                value: function opacity(t) {
                  return this.rules.push('opacity: '.concat(t)), this
                },
              },
              {
                key: 'backgroundColor',
                value: function backgroundColor(t) {
                  return this.rules.push('background-color: '.concat(t)), this
                },
              },
              {
                key: 'width',
                value: function width(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('width: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'height',
                value: function height(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('height: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'top',
                value: function top(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('top: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'right',
                value: function right(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('right: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'bottom',
                value: function bottom(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('bottom: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'left',
                value: function left(t) {
                  var n = this.transformUnit(t)
                  return (
                    (t = Object(a.a)(n, 1)[0]),
                    this.rules.push('left: '.concat(t)),
                    this
                  )
                },
              },
              {
                key: 'step',
                value: function step() {
                  var t,
                    n,
                    e,
                    a,
                    r,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    c = this.DEFAULT,
                    s = i.duration,
                    u = void 0 === s ? c.duration : s,
                    l = i.delay,
                    f = void 0 === l ? c.delay : l,
                    m = i.timingFunction,
                    b = void 0 === m ? c.timingFunction : m,
                    p = i.transformOrigin,
                    j = void 0 === p ? c.transformOrigin : p
                  return (
                    this.steps.push(
                      d()(
                        (t = [
                          h()((n = this.rules))
                            .call(n, function (t) {
                              return ''.concat(t, '!important')
                            })
                            .join(';'),
                          ''.concat(this.transform.join(' '), '!important'),
                          o()((e = ''.concat(v, '-origin: '))).call(e, j),
                          o()(
                            (a = o()(
                              (r = 'transition: all '.concat(u, 'ms ')),
                            ).call(r, b, ' ')),
                          ).call(a, f, 'ms'),
                        ]),
                      )
                        .call(t, function (t) {
                          return '' !== t && t !== ''.concat(v, ':')
                        })
                        .join(';'),
                    ),
                    (this.rules = []),
                    (this.transform = [''.concat(v, ':')]),
                    this
                  )
                },
              },
              {
                key: 'createAnimationData',
                value: function createAnimationData() {
                  var t,
                    n,
                    e = o()(
                      (t = 'taro-h5-poly-fill/'.concat(
                        this.id,
                        '/create-animation__',
                      )),
                    ).call(t, this.animationMapCount++)
                  return (
                    (this.animationMap[e] = this.steps.length),
                    u()((n = this.steps)).call(n, function (t, n) {
                      var a,
                        r,
                        i,
                        c,
                        s,
                        u =
                          0 === n
                            ? o()(
                                (a = '[animation="'.concat(
                                  e,
                                  '"], [data-animation="',
                                )),
                              ).call(a, e, '"]')
                            : o()(
                                (r = o()(
                                  (i = o()(
                                    (c = '[animation="'.concat(e, '--')),
                                  ).call(c, n, '"], [data-animation="')),
                                ).call(i, e, '--')),
                              ).call(r, n, '"]')
                      m.add(o()((s = ''.concat(u, ' { '))).call(s, t, ' }'))
                    }),
                    (this.steps = []),
                    e
                  )
                },
              },
              {
                key: 'export',
                value: function _export() {
                  return this.createAnimationData()
                },
              },
            ]),
            Animation
          )
        })(),
        y = function createAnimation(t) {
          return new g(t)
        }
    },
    834: function (t, n, e) {},
    883: function (t, n, e) {
      'use strict'
      e.r(n),
        e.d(n, 'default', function () {
          return K
        })
      var a = e(39),
        r = e(40),
        i = e(175),
        c = e(66),
        o = e(65),
        s = e(91),
        u = e(64),
        l = e(587),
        d = e(588),
        f = (e(574), e(580), e(581), e(834), e(24)),
        h = e.n(f),
        m = e(571),
        b = e.n(m),
        v = e(32),
        p = e.n(v),
        j = e(570),
        g = e.n(j),
        y = e(27),
        O = e.n(y),
        k = e(173),
        x = e.n(k),
        w = e(116),
        _ = e.n(w),
        S = e(55),
        A = e.n(S),
        D = e(572),
        U = e.n(D),
        I = e(573),
        C = e.n(I),
        T = e(576),
        N = e.n(T),
        E = e(5),
        R = e.n(E),
        X = e(90),
        F = e(831),
        Y = e(567),
        M = e(568),
        Z = e(569),
        $ = e(590),
        P = e(577),
        z = e(579)
      var W = e(115),
        B = [
          'text',
          'mode',
          'url',
          'openType',
          'delay',
          'speed',
          'scrollable',
          'leftIcon',
          'color',
          'backgroundColor',
          'background',
          'wrapable',
          'renderLeftIcon',
          'renderRightIcon',
          'onClick',
          'onClose',
          'style',
          'className',
          'children',
        ]
      function ownKeys(t, n) {
        var e = h()(t)
        if (b.a) {
          var a = b()(t)
          n &&
            (a = p()(a).call(a, function (n) {
              return g()(t, n).enumerable
            })),
            e.push.apply(e, a)
        }
        return e
      }
      function _objectSpread(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e,
            a,
            r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? O()((e = ownKeys(Object(r), !0))).call(e, function (n) {
                U()(t, n, r[n])
              })
            : x.a
            ? _()(t, x()(r))
            : O()((a = ownKeys(Object(r)))).call(a, function (n) {
                A()(t, n, g()(r, n))
              })
        }
        return t
      }
      var L = 0
      var V = function NoticeBar(t) {
        var n = Object(u.useState)({
            ready: !1,
            show: !0,
            animationData: { actions: [] },
            unitag: 0,
          }),
          e = N()(n, 2),
          a = e[0],
          r = e[1],
          i = {
            animation: null,
            resetAnimation: null,
            timer: null,
            wrapWidth: void 0,
            contentWidth: void 0,
            duration: void 0,
          },
          c = Object(u.useRef)(i),
          o = t.text,
          s = void 0 === o ? '' : o,
          l = t.mode,
          d = void 0 === l ? '' : l,
          f = t.url,
          h = void 0 === f ? '' : f,
          m = t.openType,
          b = void 0 === m ? 'navigate' : m,
          v = t.delay,
          p = void 0 === v ? 1 : v,
          j = t.speed,
          g = void 0 === j ? 60 : j,
          y = t.scrollable,
          O = void 0 === y ? null : y,
          k = t.leftIcon,
          x = void 0 === k ? '' : k,
          w = t.color,
          _ = void 0 === w ? '#ed6a0c' : w,
          S = t.backgroundColor,
          A = void 0 === S ? '#fffbe8' : S,
          D = t.background,
          U = t.wrapable,
          I = t.renderLeftIcon,
          T = t.renderRightIcon,
          E = t.onClick,
          V = t.onClose,
          K = t.style,
          q = t.className,
          J = t.children,
          G = C()(t, B)
        Object(u.useEffect)(function () {
          r(function (t) {
            return _objectSpread(_objectSpread({}, t), {}, { unitag: L++ })
          })
        }, []),
          X.a.useReady(function () {
            0
          }),
          Object(u.useEffect)(function () {
            ;(c.current.resetAnimation = Object(F.a)({
              duration: 0,
              timingFunction: 'linear',
            })),
              r(function (t) {
                return _objectSpread(_objectSpread({}, t), {}, { ready: !0 })
              })
          }, []),
          Object(u.useEffect)(
            function () {
              return (
                s && a.ready && tt(),
                function () {
                  c.current.timer && clearTimeout(c.current.timer)
                }
              )
            },
            [s, g, a.ready],
          )
        var H,
          Q = Object(u.useCallback)(function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            c.current.timer && clearTimeout(c.current.timer),
              (c.current.timer = null),
              r(function (n) {
                return _objectSpread(
                  _objectSpread({}, n),
                  {},
                  {
                    animationData: c.current.resetAnimation
                      .translateX(t ? 0 : c.current.wrapWidth)
                      .step()
                      .export(),
                  },
                )
              }),
              setTimeout(function () {
                Object($.h)(function () {
                  r(function (t) {
                    return _objectSpread(
                      _objectSpread({}, t),
                      {},
                      {
                        animationData: c.current.animation
                          .translateX(-c.current.contentWidth)
                          .step()
                          .export(),
                      },
                    )
                  })
                })
              }, 10),
              (c.current.timer = setTimeout(function () {
                Q()
              }, c.current.duration))
          }, []),
          tt = Object(u.useCallback)(
            function () {
              Object($.h)(function () {
                R.a
                  .all([
                    Object($.c)(
                      null,
                      '.van-notice-bar__content_'.concat(a.unitag),
                    ),
                    Object($.c)(
                      null,
                      '.van-notice-bar__wrap_'.concat(a.unitag),
                    ),
                  ])
                  .then(function (t) {
                    var n = t[0],
                      e = t[1]
                    null != n &&
                      null != e &&
                      n.width &&
                      e.width &&
                      !1 !== O &&
                      Object(Y.a)(function () {
                        ;(O || e.width <= n.width) &&
                          ((c.current.wrapWidth = e.width),
                          (c.current.contentWidth = n.width),
                          (c.current.duration =
                            ((e.width + n.width) / g) * 1e3),
                          (c.current.animation = Object(F.a)({
                            duration: c.current.duration,
                            timingFunction: 'linear',
                            delay: p,
                          })),
                          Q(!0))
                      })
                  })
              })
            },
            [a.unitag, O, g, p, Q],
          ),
          nt = Object(u.useCallback)(
            function (t) {
              'closeable' === d &&
                (c.current.timer && clearTimeout(c.current.timer),
                (c.current.timer = null),
                r(function (t) {
                  return _objectSpread(_objectSpread({}, t), {}, { show: !1 })
                }),
                null == V || V(t))
            },
            [d, V],
          )
        return (
          a.show &&
          Object(W.jsxs)(
            M.n,
            _objectSpread(
              _objectSpread(
                {
                  className:
                    Z.b('notice-bar', { withicon: d, wrapable: U }) +
                    ' '.concat(q || ''),
                  style: Z.c([
                    ((H = { color: _, backgroundColor: A, background: D }),
                    Object(z.a)({
                      color: H.color,
                      'background-color': H.backgroundColor,
                      background: H.background,
                    })),
                    K,
                  ]),
                },
                G,
              ),
              {},
              {
                onClick: E,
                children: [
                  x
                    ? Object(W.jsx)(P.b, {
                        name: x,
                        className: 'van-notice-bar__left-icon',
                      })
                    : I,
                  Object(W.jsx)(M.n, {
                    className:
                      'van-notice-bar__wrap van-notice-bar__wrap_'.concat(
                        a.unitag,
                      ),
                    children: Object(W.jsxs)(M.n, {
                      className:
                        'van-notice-bar__content van-notice-bar__content_'.concat(
                          a.unitag,
                          ' ',
                        ) + (!1 !== O || U ? '' : 'van-ellipsis'),
                      animation: a.animationData,
                      children: [s, !s && J],
                    }),
                  }),
                  'closeable' === d
                    ? Object(W.jsx)(P.b, {
                        className: 'van-notice-bar__right-icon',
                        name: 'cross',
                        onClick: nt,
                      })
                    : 'link' === d
                    ? Object(W.jsx)(M.h, {
                        url: h,
                        openType: b,
                        children: Object(W.jsx)(P.b, {
                          className: 'van-notice-bar__right-icon',
                          name: 'arrow',
                        }),
                      })
                    : T,
                ],
              },
            ),
          )
        )
      }
      function Demo() {
        return Object(W.jsx)(V, {
          leftIcon: 'volume-o',
          text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
        })
      }
      function demo2_Demo() {
        return Object(W.jsxs)(M.n, {
          children: [
            Object(W.jsx)(V, {
              scrollable: !0,
              text: '技术是开发它的人的共同灵魂。',
            }),
            Object(W.jsx)(V, {
              scrollable: !1,
              text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
            }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(W.jsx)(V, {
          wrapable: !0,
          scrollable: !1,
          text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
        })
      }
      function demo4_Demo() {
        return Object(W.jsxs)(M.n, {
          children: [
            Object(W.jsx)(V, {
              mode: 'closeable',
              text: '技术是开发它的人的共同灵魂。',
            }),
            Object(W.jsx)(V, {
              mode: 'link',
              text: '技术是开发它的人的共同灵魂。',
            }),
          ],
        })
      }
      function demo5_Demo() {
        return Object(W.jsx)(V, {
          color: '#1989fa',
          background: '#ecf9ff',
          leftIcon: 'info-o',
          text: '技术是开发它的人的共同灵魂。',
        })
      }
      function demo6_Demo() {
        return Object(W.jsx)(V, {
          text: '技术是开发它的人的共同灵魂。技术是开发它的人的共同灵魂。',
          speed: 20,
        })
      }
      var K = (function (t) {
        Object(c.a)(Index, t)
        var n = Object(o.a)(Index)
        function Index() {
          var t
          return (
            Object(a.a)(this, Index),
            (t = n.call(this)),
            Object(s.a)(Object(i.a)(t), 'state', {}),
            t
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(W.jsxs)(l.a, {
                  title: 'NoticeBar 通知栏',
                  className: 'pages-notice-bar-index',
                  children: [
                    Object(W.jsx)(d.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(W.jsx)(Demo, {}),
                    }),
                    Object(W.jsx)(d.a, {
                      title: '滚动播放',
                      padding: !0,
                      children: Object(W.jsx)(demo2_Demo, {}),
                    }),
                    Object(W.jsx)(d.a, {
                      title: '多行展示',
                      padding: !0,
                      children: Object(W.jsx)(demo3_Demo, {}),
                    }),
                    Object(W.jsx)(d.a, {
                      title: '通知栏模式',
                      padding: !0,
                      children: Object(W.jsx)(demo4_Demo, {}),
                    }),
                    Object(W.jsx)(d.a, {
                      title: '自定义样式',
                      padding: !0,
                      children: Object(W.jsx)(demo5_Demo, {}),
                    }),
                    Object(W.jsx)(d.a, {
                      title: '自定义滚动速率',
                      padding: !0,
                      children: Object(W.jsx)(demo6_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(u.Component)
    },
  },
])
