/*! For license information please see 68.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    508: function (n, c, h) {
      'use strict'
      h.r(c),
        h.d(c, 'taro_swiper_core', function () {
          return tt
        }),
        h.d(c, 'taro_swiper_item_core', function () {
          return at
        })
      var v,
        f,
        m = h(69),
        g = h(26),
        w = h.n(g),
        b = h(22),
        y = h.n(b),
        x = h(133),
        E = h.n(x),
        C = h(824),
        S = h.n(C),
        A = h(172),
        M = h.n(A),
        k = h(27),
        z = h.n(k),
        P = h(76),
        L = h.n(P),
        O = h(52),
        D = h.n(O),
        I = h(6),
        B = h.n(I),
        N = h(30),
        G = h.n(N),
        Y = h(89),
        _ = h.n(Y),
        W = h(9),
        H = h.n(W),
        R = h(116),
        j = h.n(R),
        X = h(175),
        F = h.n(X),
        V = h(21),
        q = h.n(V),
        U = h(519),
        Q = h.n(U),
        K = h(0),
        Z = h.n(K),
        J = h(111),
        ee = h.n(J),
        te = h(216),
        ae = h.n(te),
        ie = h(60),
        re = h.n(ie),
        se = h(36),
        ne = h.n(se),
        oe = h(825),
        le = h.n(oe),
        de = h(86),
        pe = h.n(de),
        ce = h(120),
        ue = h.n(ce),
        he = h(15),
        ve = h.n(he),
        fe = h(138),
        me = h(578)
      function isObject$1(n) {
        return (
          null !== n &&
          'object' === Object(m.a)(n) &&
          'constructor' in n &&
          n.constructor === Object
        )
      }
      function extend$1(n, c) {
        var h
        void 0 === n && (n = {}),
          void 0 === c && (c = {}),
          w()((h = y()(c))).call(h, function (h) {
            void 0 === n[h]
              ? (n[h] = c[h])
              : isObject$1(c[h]) &&
                isObject$1(n[h]) &&
                y()(c[h]).length > 0 &&
                extend$1(n[h], c[h])
          })
      }
      var ge = {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: { blur: function blur() {}, nodeName: '' },
        querySelector: function querySelector() {
          return null
        },
        querySelectorAll: function querySelectorAll() {
          return []
        },
        getElementById: function getElementById() {
          return null
        },
        createEvent: function createEvent() {
          return { initEvent: function initEvent() {} }
        },
        createElement: function createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute() {},
            getElementsByTagName: function getElementsByTagName() {
              return []
            },
          }
        },
        createElementNS: function createElementNS() {
          return {}
        },
        importNode: function importNode() {
          return null
        },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      }
      function getDocument() {
        var n = 'undefined' != typeof document ? document : {}
        return extend$1(n, ge), n
      }
      var we = {
        document: ge,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: {
          replaceState: function replaceState() {},
          pushState: function pushState() {},
          go: function go() {},
          back: function back() {},
        },
        CustomEvent: function e() {
          return this
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
          return {
            getPropertyValue: function getPropertyValue() {
              return ''
            },
          }
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
        matchMedia: function matchMedia() {
          return {}
        },
        requestAnimationFrame: function requestAnimationFrame(n) {
          return 'undefined' == typeof setTimeout
            ? (n(), null)
            : setTimeout(n, 0)
        },
        cancelAnimationFrame: function cancelAnimationFrame(n) {
          'undefined' != typeof setTimeout && clearTimeout(n)
        },
      }
      function getWindow() {
        var n = 'undefined' != typeof window ? window : {}
        return extend$1(n, we), n
      }
      function _getPrototypeOf(n) {
        return (_getPrototypeOf = E.a
          ? S.a
          : function e(n) {
              return n.__proto__ || S()(n)
            })(n)
      }
      function _setPrototypeOf(n, c) {
        return (_setPrototypeOf =
          E.a ||
          function e(n, c) {
            return (n.__proto__ = c), n
          })(n, c)
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !M.a) return !1
        if (M.a.sham) return !1
        if ('function' == typeof Proxy) return !0
        try {
          return Date.prototype.toString.call(M()(Date, [], function () {})), !0
        } catch (n) {
          return !1
        }
      }
      function _construct(n, c, h) {
        return (_construct = _isNativeReflectConstruct()
          ? M.a
          : function e(n, c, h) {
              var v = [null]
              v.push.apply(v, c)
              var f = new (Function.bind.apply(n, v))()
              return h && _setPrototypeOf(f, h.prototype), f
            }).apply(null, arguments)
      }
      function _wrapNativeSuper(n) {
        var c = 'function' == typeof L.a ? new L.a() : void 0
        return (_wrapNativeSuper = function e(n) {
          if (
            null === n ||
            !(function _isNativeFunction(n) {
              var c
              return (
                -1 !==
                z()((c = Function.toString.call(n))).call(c, '[native code]')
              )
            })(n)
          )
            return n
          if ('function' != typeof n)
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          if (void 0 !== c) {
            if (c.has(n)) return c.get(n)
            c.set(n, r)
          }
          function r() {
            return _construct(n, arguments, _getPrototypeOf(this).constructor)
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            _setPrototypeOf(r, n)
          )
        })(n)
      }
      var be = (function (n) {
        function t(c) {
          var h, v
          return (
            (function makeReactive(n) {
              var c = n.__proto__
              D()(n, '__proto__', {
                get: function e() {
                  return c
                },
                set: function e(n) {
                  c.__proto__ = n
                },
              })
            })(
              (function _assertThisInitialized(n) {
                if (void 0 === n)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  )
                return n
              })((v = n.call.apply(n, B()((h = [this])).call(h, c)) || this)),
            ),
            v
          )
        }
        return (
          (function _inheritsLoose(n, c) {
            ;(n.prototype = Object.create(c.prototype)),
              (n.prototype.constructor = n),
              (n.__proto__ = c)
          })(t, n),
          t
        )
      })(_wrapNativeSuper(Array))
      function arrayFlat(n) {
        void 0 === n && (n = [])
        var c = []
        return (
          w()(n).call(n, function (n) {
            Array.isArray(n) ? c.push.apply(c, arrayFlat(n)) : c.push(n)
          }),
          c
        )
      }
      function arrayFilter(n, c) {
        return G()(Array.prototype).call(n, c)
      }
      function $(n, c) {
        var h = getWindow(),
          v = getDocument(),
          f = []
        if (!c && n instanceof be) return n
        if (!n) return new be(f)
        if ('string' == typeof n) {
          var m = _()(n).call(n)
          if (z()(m).call(m, '<') >= 0 && z()(m).call(m, '>') >= 0) {
            var g = 'div'
            0 === z()(m).call(m, '<li') && (g = 'ul'),
              0 === z()(m).call(m, '<tr') && (g = 'tbody'),
              (0 !== z()(m).call(m, '<td') && 0 !== z()(m).call(m, '<th')) ||
                (g = 'tr'),
              0 === z()(m).call(m, '<tbody') && (g = 'table'),
              0 === z()(m).call(m, '<option') && (g = 'select')
            var w = v.createElement(g)
            w.innerHTML = m
            for (var b = 0; b < w.childNodes.length; b += 1)
              f.push(w.childNodes[b])
          } else
            f = (function qsa(n, c) {
              if ('string' != typeof n) return [n]
              for (
                var h = [], v = c.querySelectorAll(n), f = 0;
                f < v.length;
                f += 1
              )
                h.push(v[f])
              return h
            })(_()(n).call(n), c || v)
        } else if (n.nodeType || n === h || n === v) f.push(n)
        else if (Array.isArray(n)) {
          if (n instanceof be) return n
          f = n
        }
        return new be(
          (function arrayUnique(n) {
            for (var c = [], h = 0; h < n.length; h += 1)
              -1 === z()(c).call(c, n[h]) && c.push(n[h])
            return c
          })(f),
        )
      }
      $.fn = be.prototype
      var ye,
        xe,
        Ee,
        Te = {
          addClass: function addClass() {
            for (
              var n, c = arguments.length, h = new Array(c), v = 0;
              v < c;
              v++
            )
              h[v] = arguments[v]
            var f = arrayFlat(
              H()(h).call(h, function (n) {
                return n.split(' ')
              }),
            )
            return (
              w()((n = this)).call(n, function (n) {
                var c
                ;(c = n.classList).add.apply(c, f)
              }),
              this
            )
          },
          removeClass: function removeClass() {
            for (
              var n, c = arguments.length, h = new Array(c), v = 0;
              v < c;
              v++
            )
              h[v] = arguments[v]
            var f = arrayFlat(
              H()(h).call(h, function (n) {
                return n.split(' ')
              }),
            )
            return (
              w()((n = this)).call(n, function (n) {
                var c
                ;(c = n.classList).remove.apply(c, f)
              }),
              this
            )
          },
          hasClass: function hasClass() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++)
              c[h] = arguments[h]
            var v = arrayFlat(
              H()(c).call(c, function (n) {
                return n.split(' ')
              }),
            )
            return (
              arrayFilter(this, function (n) {
                return (
                  G()(v).call(v, function (c) {
                    return n.classList.contains(c)
                  }).length > 0
                )
              }).length > 0
            )
          },
          toggleClass: function toggleClass() {
            for (
              var n, c = arguments.length, h = new Array(c), v = 0;
              v < c;
              v++
            )
              h[v] = arguments[v]
            var f = arrayFlat(
              H()(h).call(h, function (n) {
                return n.split(' ')
              }),
            )
            w()((n = this)).call(n, function (n) {
              w()(f).call(f, function (c) {
                n.classList.toggle(c)
              })
            })
          },
          attr: function attr(n, c) {
            if (1 === arguments.length && 'string' == typeof n)
              return this[0] ? this[0].getAttribute(n) : void 0
            for (var h = 0; h < this.length; h += 1)
              if (2 === arguments.length) this[h].setAttribute(n, c)
              else
                for (var v in n)
                  (this[h][v] = n[v]), this[h].setAttribute(v, n[v])
            return this
          },
          removeAttr: function removeAttr(n) {
            for (var c = 0; c < this.length; c += 1) this[c].removeAttribute(n)
            return this
          },
          transform: function transform(n) {
            for (var c = 0; c < this.length; c += 1) this[c].style.transform = n
            return this
          },
          transition: function transition$1(n) {
            for (var c = 0; c < this.length; c += 1)
              this[c].style.transitionDuration =
                'string' != typeof n ? n + 'ms' : n
            return this
          },
          on: function on() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++)
              c[h] = arguments[h]
            var v = c[0],
              f = c[1],
              m = c[2],
              g = c[3]
            function o(n) {
              var c = n.target
              if (c) {
                var h = n.target.dom7EventData || []
                if ((z()(h).call(h, n) < 0 && h.unshift(n), $(c).is(f)))
                  m.apply(c, h)
                else
                  for (var v = $(c).parents(), g = 0; g < v.length; g += 1)
                    $(v[g]).is(f) && m.apply(v[g], h)
              }
            }
            function l(n) {
              var c = (n && n.target && n.target.dom7EventData) || []
              z()(c).call(c, n) < 0 && c.unshift(n), m.apply(this, c)
            }
            'function' == typeof c[1] &&
              ((v = c[0]), (m = c[1]), (g = c[2]), (f = void 0)),
              g || (g = !1)
            for (var w, b = v.split(' '), y = 0; y < this.length; y += 1) {
              var x = this[y]
              if (f)
                for (w = 0; w < b.length; w += 1) {
                  var E = b[w]
                  x.dom7LiveListeners || (x.dom7LiveListeners = {}),
                    x.dom7LiveListeners[E] || (x.dom7LiveListeners[E] = []),
                    x.dom7LiveListeners[E].push({
                      listener: m,
                      proxyListener: o,
                    }),
                    x.addEventListener(E, o, g)
                }
              else
                for (w = 0; w < b.length; w += 1) {
                  var C = b[w]
                  x.dom7Listeners || (x.dom7Listeners = {}),
                    x.dom7Listeners[C] || (x.dom7Listeners[C] = []),
                    x.dom7Listeners[C].push({ listener: m, proxyListener: l }),
                    x.addEventListener(C, l, g)
                }
            }
            return this
          },
          off: function off() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++)
              c[h] = arguments[h]
            var v = c[0],
              f = c[1],
              m = c[2],
              g = c[3]
            'function' == typeof c[1] &&
              ((v = c[0]), (m = c[1]), (g = c[2]), (f = void 0)),
              g || (g = !1)
            for (var w = v.split(' '), b = 0; b < w.length; b += 1)
              for (var y = w[b], x = 0; x < this.length; x += 1) {
                var E = this[x],
                  C = void 0
                if (
                  (!f && E.dom7Listeners
                    ? (C = E.dom7Listeners[y])
                    : f && E.dom7LiveListeners && (C = E.dom7LiveListeners[y]),
                  C && C.length)
                )
                  for (var S = C.length - 1; S >= 0; S -= 1) {
                    var A = C[S]
                    ;(m && A.listener === m) ||
                    (m &&
                      A.listener &&
                      A.listener.dom7proxy &&
                      A.listener.dom7proxy === m)
                      ? (E.removeEventListener(y, A.proxyListener, g),
                        j()(C).call(C, S, 1))
                      : m ||
                        (E.removeEventListener(y, A.proxyListener, g),
                        j()(C).call(C, S, 1))
                  }
              }
            return this
          },
          trigger: function trigger() {
            for (
              var n = getWindow(),
                c = arguments.length,
                h = new Array(c),
                v = 0;
              v < c;
              v++
            )
              h[v] = arguments[v]
            for (var f = h[0].split(' '), m = h[1], g = 0; g < f.length; g += 1)
              for (var w = f[g], b = 0; b < this.length; b += 1) {
                var y = this[b]
                if (n.CustomEvent) {
                  var x = new n.CustomEvent(w, {
                    detail: m,
                    bubbles: !0,
                    cancelable: !0,
                  })
                  ;(y.dom7EventData = G()(h).call(h, function (n, c) {
                    return c > 0
                  })),
                    y.dispatchEvent(x),
                    (y.dom7EventData = []),
                    delete y.dom7EventData
                }
              }
            return this
          },
          transitionEnd: function transitionEnd$1(n) {
            var c = this
            return (
              n &&
                c.on('transitionend', function a(h) {
                  h.target === this &&
                    (n.call(this, h), c.off('transitionend', a))
                }),
              this
            )
          },
          outerWidth: function outerWidth(n) {
            if (this.length > 0) {
              if (n) {
                var c = this.styles()
                return (
                  this[0].offsetWidth +
                  F()(c.getPropertyValue('margin-right')) +
                  F()(c.getPropertyValue('margin-left'))
                )
              }
              return this[0].offsetWidth
            }
            return null
          },
          outerHeight: function outerHeight(n) {
            if (this.length > 0) {
              if (n) {
                var c = this.styles()
                return (
                  this[0].offsetHeight +
                  F()(c.getPropertyValue('margin-top')) +
                  F()(c.getPropertyValue('margin-bottom'))
                )
              }
              return this[0].offsetHeight
            }
            return null
          },
          styles: function styles() {
            var n = getWindow()
            return this[0] ? n.getComputedStyle(this[0], null) : {}
          },
          offset: function offset() {
            if (this.length > 0) {
              var n = getWindow(),
                c = getDocument(),
                h = this[0],
                v = h.getBoundingClientRect(),
                f = c.body,
                m = h.clientTop || f.clientTop || 0,
                g = h.clientLeft || f.clientLeft || 0,
                w = h === n ? n.scrollY : h.scrollTop,
                b = h === n ? n.scrollX : h.scrollLeft
              return { top: v.top + w - m, left: v.left + b - g }
            }
            return null
          },
          css: function css(n, c) {
            var h,
              v = getWindow()
            if (1 === arguments.length) {
              if ('string' != typeof n) {
                for (h = 0; h < this.length; h += 1)
                  for (var f in n) this[h].style[f] = n[f]
                return this
              }
              if (this[0])
                return v.getComputedStyle(this[0], null).getPropertyValue(n)
            }
            if (2 === arguments.length && 'string' == typeof n) {
              for (h = 0; h < this.length; h += 1) this[h].style[n] = c
              return this
            }
            return this
          },
          each: function each(n) {
            var c
            return n
              ? (w()((c = this)).call(c, function (c, h) {
                  n.apply(c, [c, h])
                }),
                this)
              : this
          },
          html: function html(n) {
            if (void 0 === n) return this[0] ? this[0].innerHTML : null
            for (var c = 0; c < this.length; c += 1) this[c].innerHTML = n
            return this
          },
          text: function text(n) {
            var c
            if (void 0 === n)
              return this[0] ? _()((c = this[0].textContent)).call(c) : null
            for (var h = 0; h < this.length; h += 1) this[h].textContent = n
            return this
          },
          is: function is(n) {
            var c,
              h,
              v = getWindow(),
              f = getDocument(),
              m = this[0]
            if (!m || void 0 === n) return !1
            if ('string' == typeof n) {
              if (m.matches) return m.matches(n)
              if (m.webkitMatchesSelector) return m.webkitMatchesSelector(n)
              if (m.msMatchesSelector) return m.msMatchesSelector(n)
              for (c = $(n), h = 0; h < c.length; h += 1)
                if (c[h] === m) return !0
              return !1
            }
            if (n === f) return m === f
            if (n === v) return m === v
            if (n.nodeType || n instanceof be) {
              for (c = n.nodeType ? [n] : n, h = 0; h < c.length; h += 1)
                if (c[h] === m) return !0
              return !1
            }
            return !1
          },
          index: function index() {
            var n,
              c = this[0]
            if (c) {
              for (n = 0; null !== (c = c.previousSibling); )
                1 === c.nodeType && (n += 1)
              return n
            }
          },
          eq: function eq(n) {
            if (void 0 === n) return this
            var c = this.length
            if (n > c - 1) return $([])
            if (n < 0) {
              var h = c + n
              return $(h < 0 ? [] : [this[h]])
            }
            return $([this[n]])
          },
          append: function append() {
            for (
              var n, c = getDocument(), h = 0;
              h < arguments.length;
              h += 1
            ) {
              n = h < 0 || arguments.length <= h ? void 0 : arguments[h]
              for (var v = 0; v < this.length; v += 1)
                if ('string' == typeof n) {
                  var f = c.createElement('div')
                  for (f.innerHTML = n; f.firstChild; )
                    this[v].appendChild(f.firstChild)
                } else if (n instanceof be)
                  for (var m = 0; m < n.length; m += 1)
                    this[v].appendChild(n[m])
                else this[v].appendChild(n)
            }
            return this
          },
          prepend: function prepend(n) {
            var c,
              h,
              v = getDocument()
            for (c = 0; c < this.length; c += 1)
              if ('string' == typeof n) {
                var f = v.createElement('div')
                for (
                  f.innerHTML = n, h = f.childNodes.length - 1;
                  h >= 0;
                  h -= 1
                )
                  this[c].insertBefore(f.childNodes[h], this[c].childNodes[0])
              } else if (n instanceof be)
                for (h = 0; h < n.length; h += 1)
                  this[c].insertBefore(n[h], this[c].childNodes[0])
              else this[c].insertBefore(n, this[c].childNodes[0])
            return this
          },
          next: function next(n) {
            return this.length > 0
              ? n
                ? this[0].nextElementSibling &&
                  $(this[0].nextElementSibling).is(n)
                  ? $([this[0].nextElementSibling])
                  : $([])
                : this[0].nextElementSibling
                ? $([this[0].nextElementSibling])
                : $([])
              : $([])
          },
          nextAll: function nextAll(n) {
            var c = [],
              h = this[0]
            if (!h) return $([])
            for (; h.nextElementSibling; ) {
              var v = h.nextElementSibling
              n ? $(v).is(n) && c.push(v) : c.push(v), (h = v)
            }
            return $(c)
          },
          prev: function prev(n) {
            if (this.length > 0) {
              var c = this[0]
              return n
                ? c.previousElementSibling && $(c.previousElementSibling).is(n)
                  ? $([c.previousElementSibling])
                  : $([])
                : c.previousElementSibling
                ? $([c.previousElementSibling])
                : $([])
            }
            return $([])
          },
          prevAll: function prevAll(n) {
            var c = [],
              h = this[0]
            if (!h) return $([])
            for (; h.previousElementSibling; ) {
              var v = h.previousElementSibling
              n ? $(v).is(n) && c.push(v) : c.push(v), (h = v)
            }
            return $(c)
          },
          parent: function parent(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              null !== this[h].parentNode &&
                (n
                  ? $(this[h].parentNode).is(n) && c.push(this[h].parentNode)
                  : c.push(this[h].parentNode))
            return $(c)
          },
          parents: function parents(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (var v = this[h].parentNode; v; )
                n ? $(v).is(n) && c.push(v) : c.push(v), (v = v.parentNode)
            return $(c)
          },
          closest: function closest(n) {
            var c = this
            return void 0 === n
              ? $([])
              : (c.is(n) || (c = c.parents(n).eq(0)), c)
          },
          find: function find(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (
                var v = this[h].querySelectorAll(n), f = 0;
                f < v.length;
                f += 1
              )
                c.push(v[f])
            return $(c)
          },
          children: function children(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (var v = this[h].children, f = 0; f < v.length; f += 1)
                (n && !$(v[f]).is(n)) || c.push(v[f])
            return $(c)
          },
          filter: function filter(n) {
            return $(arrayFilter(this, n))
          },
          remove: function remove() {
            for (var n = 0; n < this.length; n += 1)
              this[n].parentNode && this[n].parentNode.removeChild(this[n])
            return this
          },
        }
      function nextTick(n, c) {
        return void 0 === c && (c = 0), setTimeout(n, c)
      }
      function now() {
        return Date.now()
      }
      function getTranslate(n, c) {
        void 0 === c && (c = 'x')
        var h,
          v,
          f,
          m = getWindow(),
          g = (function getComputedStyle$1(n) {
            var c,
              h = getWindow()
            return (
              h.getComputedStyle && (c = h.getComputedStyle(n, null)),
              !c && n.currentStyle && (c = n.currentStyle),
              c || (c = n.style),
              c
            )
          })(n)
        if (m.WebKitCSSMatrix) {
          var w
          if ((v = g.transform || g.webkitTransform).split(',').length > 6)
            v = H()((w = v.split(', ')))
              .call(w, function (n) {
                return n.replace(',', '.')
              })
              .join(', ')
          f = new m.WebKitCSSMatrix('none' === v ? '' : v)
        } else
          h = (f =
            g.MozTransform ||
            g.OTransform ||
            g.MsTransform ||
            g.msTransform ||
            g.transform ||
            g
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,'))
            .toString()
            .split(',')
        return (
          'x' === c &&
            (v = m.WebKitCSSMatrix
              ? f.m41
              : 16 === h.length
              ? F()(h[12])
              : F()(h[4])),
          'y' === c &&
            (v = m.WebKitCSSMatrix
              ? f.m42
              : 16 === h.length
              ? F()(h[13])
              : F()(h[5])),
          v || 0
        )
      }
      function isObject(n) {
        var c
        return (
          'object' === Object(m.a)(n) &&
          null !== n &&
          n.constructor &&
          'Object' ===
            q()((c = Object.prototype.toString.call(n))).call(c, 8, -1)
        )
      }
      function isNode(n) {
        return 'undefined' != typeof window
          ? n instanceof HTMLElement
          : n && (1 === n.nodeType || 11 === n.nodeType)
      }
      function extend() {
        for (
          var n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            c = ['__proto__', 'constructor', 'prototype'],
            h = 1;
          h < arguments.length;
          h += 1
        ) {
          var v = h < 0 || arguments.length <= h ? void 0 : arguments[h]
          if (null != v && !isNode(v))
            for (
              var f,
                m = G()((f = y()(Object(v)))).call(f, function (n) {
                  return z()(c).call(c, n) < 0
                }),
                g = 0,
                w = m.length;
              g < w;
              g += 1
            ) {
              var b = m[g],
                x = Q()(v, b)
              void 0 !== x &&
                x.enumerable &&
                (isObject(n[b]) && isObject(v[b])
                  ? v[b].__swiper__
                    ? (n[b] = v[b])
                    : extend(n[b], v[b])
                  : !isObject(n[b]) && isObject(v[b])
                  ? ((n[b] = {}),
                    v[b].__swiper__ ? (n[b] = v[b]) : extend(n[b], v[b]))
                  : (n[b] = v[b]))
            }
        }
        return n
      }
      function bindModuleMethods(n, c) {
        var h
        w()((h = y()(c))).call(h, function (h) {
          var v
          isObject(c[h]) &&
            w()((v = y()(c[h]))).call(v, function (v) {
              'function' == typeof c[h][v] && (c[h][v] = c[h][v].bind(n))
            })
          n[h] = c[h]
        })
      }
      function classesToSelector(n) {
        return (
          void 0 === n && (n = ''),
          '.' +
            _()(n)
              .call(n)
              .replace(/([\.:\/])/g, '\\$1')
              .replace(/ /g, '.')
        )
      }
      function createElementIfNotDefined(n, c, h, v) {
        var f,
          m = getDocument()
        h &&
          w()((f = y()(v))).call(f, function (h) {
            if (!c[h] && !0 === c.auto) {
              var f = m.createElement('div')
              ;(f.className = v[h]), n.append(f), (c[h] = f)
            }
          })
        return c
      }
      function getSupport() {
        return (
          ye ||
            (ye = (function calcSupport() {
              var n = getWindow(),
                c = getDocument()
              return {
                touch: !!(
                  'ontouchstart' in n ||
                  (n.DocumentTouch && c instanceof n.DocumentTouch)
                ),
                pointerEvents:
                  !!n.PointerEvent &&
                  'maxTouchPoints' in n.navigator &&
                  n.navigator.maxTouchPoints >= 0,
                observer: (function t() {
                  return (
                    'MutationObserver' in n || 'WebkitMutationObserver' in n
                  )
                })(),
                passiveListener: (function t() {
                  var c = !1
                  try {
                    var h = D()({}, 'passive', {
                      get: function e() {
                        c = !0
                      },
                    })
                    n.addEventListener('testPassiveListener', null, h)
                  } catch (n) {}
                  return c
                })(),
                gestures: (function t() {
                  return 'ongesturestart' in n
                })(),
              }
            })()),
          ye
        )
      }
      function getDevice(n) {
        return (
          void 0 === n && (n = {}),
          xe ||
            (xe = (function calcDevice(n) {
              var c = (void 0 === n ? {} : n).userAgent,
                h = getSupport(),
                v = getWindow(),
                f = v.navigator.platform,
                m = c || v.navigator.userAgent,
                g = { ios: !1, android: !1 },
                w = v.screen.width,
                b = v.screen.height,
                y = m.match(/(Android);?[\s\/]+([\d.]+)?/),
                x = m.match(/(iPad).*OS\s([\d_]+)/),
                E = m.match(/(iPod)(.*OS\s([\d_]+))?/),
                C = !x && m.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                S = 'Win32' === f,
                A = 'MacIntel' === f,
                M = [
                  '1024x1366',
                  '1366x1024',
                  '834x1194',
                  '1194x834',
                  '834x1112',
                  '1112x834',
                  '768x1024',
                  '1024x768',
                  '820x1180',
                  '1180x820',
                  '810x1080',
                  '1080x810',
                ]
              return (
                !x &&
                  A &&
                  h.touch &&
                  z()(M).call(M, w + 'x' + b) >= 0 &&
                  ((x = m.match(/(Version)\/([\d.]+)/)) ||
                    (x = [0, 1, '13_0_0']),
                  (A = !1)),
                y && !S && ((g.os = 'android'), (g.android = !0)),
                (x || C || E) && ((g.os = 'ios'), (g.ios = !0)),
                g
              )
            })(n)),
          xe
        )
      }
      function getBrowser() {
        return (
          Ee ||
            (Ee = (function calcBrowser() {
              var n = getWindow()
              return {
                isEdge: !!n.navigator.userAgent.match(/Edge/g),
                isSafari: (function t() {
                  var c = n.navigator.userAgent.toLowerCase()
                  return (
                    z()(c).call(c, 'safari') >= 0 &&
                    z()(c).call(c, 'chrome') < 0 &&
                    z()(c).call(c, 'android') < 0
                  )
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  n.navigator.userAgent,
                ),
              }
            })()),
          Ee
        )
      }
      w()((v = y()(Te))).call(v, function (n) {
        D()($.fn, n, { value: Te[n], writable: !0 })
      })
      var Ce = {
        name: 'resize',
        create: function e() {
          var n = this
          extend(n, {
            resize: {
              observer: null,
              createObserver: function e() {
                n &&
                  !n.destroyed &&
                  n.initialized &&
                  ((n.resize.observer = new ResizeObserver(function (c) {
                    var h = n.width,
                      v = n.height,
                      f = h,
                      m = v
                    w()(c).call(c, function (c) {
                      var h = c.contentBoxSize,
                        v = c.contentRect,
                        g = c.target
                      ;(g && g !== n.el) ||
                        ((f = v ? v.width : (h[0] || h).inlineSize),
                        (m = v ? v.height : (h[0] || h).blockSize))
                    }),
                      (f === h && m === v) || n.resize.resizeHandler()
                  })),
                  n.resize.observer.observe(n.el))
              },
              removeObserver: function e() {
                n.resize.observer &&
                  n.resize.observer.unobserve &&
                  n.el &&
                  (n.resize.observer.unobserve(n.el),
                  (n.resize.observer = null))
              },
              resizeHandler: function e() {
                n &&
                  !n.destroyed &&
                  n.initialized &&
                  (n.emit('beforeResize'), n.emit('resize'))
              },
              orientationChangeHandler: function e() {
                n &&
                  !n.destroyed &&
                  n.initialized &&
                  n.emit('orientationchange')
              },
            },
          })
        },
        on: {
          init: function e(n) {
            var c = getWindow()
            n.params.resizeObserver &&
            (function e() {
              return void 0 !== getWindow().ResizeObserver
            })()
              ? n.resize.createObserver()
              : (c.addEventListener('resize', n.resize.resizeHandler),
                c.addEventListener(
                  'orientationchange',
                  n.resize.orientationChangeHandler,
                ))
          },
          destroy: function e(n) {
            var c = getWindow()
            n.resize.removeObserver(),
              c.removeEventListener('resize', n.resize.resizeHandler),
              c.removeEventListener(
                'orientationchange',
                n.resize.orientationChangeHandler,
              )
          },
        },
      }
      function _extends$i() {
        return (_extends$i =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Se = {
          attach: function e(n, c) {
            void 0 === c && (c = {})
            var h = getWindow(),
              v = this,
              f = new (h.MutationObserver || h.WebkitMutationObserver)(
                function (n) {
                  if (1 !== n.length) {
                    var c = function t() {
                      v.emit('observerUpdate', n[0])
                    }
                    h.requestAnimationFrame
                      ? h.requestAnimationFrame(c)
                      : h.setTimeout(c, 0)
                  } else v.emit('observerUpdate', n[0])
                },
              )
            f.observe(n, {
              attributes: void 0 === c.attributes || c.attributes,
              childList: void 0 === c.childList || c.childList,
              characterData: void 0 === c.characterData || c.characterData,
            }),
              v.observer.observers.push(f)
          },
          init: function e() {
            var n = this
            if (n.support.observer && n.params.observer) {
              if (n.params.observeParents)
                for (var c = n.$el.parents(), h = 0; h < c.length; h += 1)
                  n.observer.attach(c[h])
              n.observer.attach(n.$el[0], {
                childList: n.params.observeSlideChildren,
              }),
                n.observer.attach(n.$wrapperEl[0], { attributes: !1 })
            }
          },
          destroy: function e() {
            var n
            w()((n = this.observer.observers)).call(n, function (n) {
              n.disconnect()
            }),
              (this.observer.observers = [])
          },
        },
        Ae = {
          name: 'observer',
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create: function e() {
            bindModuleMethods(this, {
              observer: _extends$i({}, Se, { observers: [] }),
            })
          },
          on: {
            init: function e(n) {
              n.observer.init()
            },
            destroy: function e(n) {
              n.observer.destroy()
            },
          },
        }
      function onTouchStart(n) {
        var c = this,
          h = getDocument(),
          v = getWindow(),
          f = c.touchEventsData,
          m = c.params,
          g = c.touches
        if (c.enabled && (!c.animating || !m.preventInteractionOnTransition)) {
          var w = n
          w.originalEvent && (w = w.originalEvent)
          var b = $(w.target)
          if (
            'wrapper' !== m.touchEventsTarget ||
            b.closest(c.wrapperEl).length
          )
            if (
              ((f.isTouchEvent = 'touchstart' === w.type),
              f.isTouchEvent || !('which' in w) || 3 !== w.which)
            )
              if (!(!f.isTouchEvent && 'button' in w && w.button > 0))
                if (!f.isTouched || !f.isMoved)
                  if (
                    (!!m.noSwipingClass &&
                      '' !== m.noSwipingClass &&
                      w.target &&
                      w.target.shadowRoot &&
                      n.path &&
                      n.path[0] &&
                      (b = $(n.path[0])),
                    m.noSwiping &&
                      b.closest(
                        m.noSwipingSelector
                          ? m.noSwipingSelector
                          : '.' + m.noSwipingClass,
                      )[0])
                  )
                    c.allowClick = !0
                  else if (!m.swipeHandler || b.closest(m.swipeHandler)[0]) {
                    ;(g.currentX =
                      'touchstart' === w.type
                        ? w.targetTouches[0].pageX
                        : w.pageX),
                      (g.currentY =
                        'touchstart' === w.type
                          ? w.targetTouches[0].pageY
                          : w.pageY)
                    var y = g.currentX,
                      x = g.currentY,
                      E = m.edgeSwipeDetection || m.iOSEdgeSwipeDetection,
                      C = m.edgeSwipeThreshold || m.iOSEdgeSwipeThreshold
                    if (E && (y <= C || y >= v.innerWidth - C)) {
                      if ('prevent' !== E) return
                      n.preventDefault()
                    }
                    if (
                      (extend(f, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (g.startX = y),
                      (g.startY = x),
                      (f.touchStartTime = now()),
                      (c.allowClick = !0),
                      c.updateSize(),
                      (c.swipeDirection = void 0),
                      m.threshold > 0 && (f.allowThresholdMove = !1),
                      'touchstart' !== w.type)
                    ) {
                      var S = !0
                      b.is(f.focusableElements) && (S = !1),
                        h.activeElement &&
                          $(h.activeElement).is(f.focusableElements) &&
                          h.activeElement !== b[0] &&
                          h.activeElement.blur()
                      var A =
                        S && c.allowTouchMove && m.touchStartPreventDefault
                      ;(!m.touchStartForcePreventDefault && !A) ||
                        b[0].isContentEditable ||
                        w.preventDefault()
                    }
                    c.emit('touchStart', w)
                  }
        }
      }
      function onTouchMove(n) {
        var c = getDocument(),
          h = this,
          v = h.touchEventsData,
          f = h.params,
          m = h.touches,
          g = h.rtlTranslate
        if (h.enabled) {
          var w = n
          if ((w.originalEvent && (w = w.originalEvent), v.isTouched)) {
            if (!v.isTouchEvent || 'touchmove' === w.type) {
              var b =
                  'touchmove' === w.type &&
                  w.targetTouches &&
                  (w.targetTouches[0] || w.changedTouches[0]),
                y = 'touchmove' === w.type ? b.pageX : w.pageX,
                x = 'touchmove' === w.type ? b.pageY : w.pageY
              if (w.preventedByNestedSwiper)
                return (m.startX = y), void (m.startY = x)
              if (!h.allowTouchMove)
                return (
                  (h.allowClick = !1),
                  void (
                    v.isTouched &&
                    (extend(m, {
                      startX: y,
                      startY: x,
                      currentX: y,
                      currentY: x,
                    }),
                    (v.touchStartTime = now()))
                  )
                )
              if (v.isTouchEvent && f.touchReleaseOnEdges && !f.loop)
                if (h.isVertical()) {
                  if (
                    (x < m.startY && h.translate <= h.maxTranslate()) ||
                    (x > m.startY && h.translate >= h.minTranslate())
                  )
                    return (v.isTouched = !1), void (v.isMoved = !1)
                } else if (
                  (y < m.startX && h.translate <= h.maxTranslate()) ||
                  (y > m.startX && h.translate >= h.minTranslate())
                )
                  return
              if (
                v.isTouchEvent &&
                c.activeElement &&
                w.target === c.activeElement &&
                $(w.target).is(v.focusableElements)
              )
                return (v.isMoved = !0), void (h.allowClick = !1)
              if (
                (v.allowTouchCallbacks && h.emit('touchMove', w),
                !(w.targetTouches && w.targetTouches.length > 1))
              ) {
                ;(m.currentX = y), (m.currentY = x)
                var E = m.currentX - m.startX,
                  C = m.currentY - m.startY
                if (
                  !(
                    h.params.threshold &&
                    Math.sqrt(Math.pow(E, 2) + Math.pow(C, 2)) <
                      h.params.threshold
                  )
                ) {
                  var S
                  if (void 0 === v.isScrolling)
                    (h.isHorizontal() && m.currentY === m.startY) ||
                    (h.isVertical() && m.currentX === m.startX)
                      ? (v.isScrolling = !1)
                      : E * E + C * C >= 25 &&
                        ((S =
                          (180 * Math.atan2(Math.abs(C), Math.abs(E))) /
                          Math.PI),
                        (v.isScrolling = h.isHorizontal()
                          ? S > f.touchAngle
                          : 90 - S > f.touchAngle))
                  if (
                    (v.isScrolling && h.emit('touchMoveOpposite', w),
                    void 0 === v.startMoving &&
                      ((m.currentX === m.startX && m.currentY === m.startY) ||
                        (v.startMoving = !0)),
                    v.isScrolling)
                  )
                    v.isTouched = !1
                  else if (v.startMoving) {
                    ;(h.allowClick = !1),
                      !f.cssMode && w.cancelable && w.preventDefault(),
                      f.touchMoveStopPropagation &&
                        !f.nested &&
                        w.stopPropagation(),
                      v.isMoved ||
                        (f.loop && h.loopFix(),
                        (v.startTranslate = h.getTranslate()),
                        h.setTransition(0),
                        h.animating &&
                          h.$wrapperEl.trigger(
                            'webkitTransitionEnd transitionend',
                          ),
                        (v.allowMomentumBounce = !1),
                        !f.grabCursor ||
                          (!0 !== h.allowSlideNext &&
                            !0 !== h.allowSlidePrev) ||
                          h.setGrabCursor(!0),
                        h.emit('sliderFirstMove', w)),
                      h.emit('sliderMove', w),
                      (v.isMoved = !0)
                    var A = h.isHorizontal() ? E : C
                    ;(m.diff = A),
                      (A *= f.touchRatio),
                      g && (A = -A),
                      (h.swipeDirection = A > 0 ? 'prev' : 'next'),
                      (v.currentTranslate = A + v.startTranslate)
                    var M = !0,
                      k = f.resistanceRatio
                    if (
                      (f.touchReleaseOnEdges && (k = 0),
                      A > 0 && v.currentTranslate > h.minTranslate()
                        ? ((M = !1),
                          f.resistance &&
                            (v.currentTranslate =
                              h.minTranslate() -
                              1 +
                              Math.pow(
                                -h.minTranslate() + v.startTranslate + A,
                                k,
                              )))
                        : A < 0 &&
                          v.currentTranslate < h.maxTranslate() &&
                          ((M = !1),
                          f.resistance &&
                            (v.currentTranslate =
                              h.maxTranslate() +
                              1 -
                              Math.pow(
                                h.maxTranslate() - v.startTranslate - A,
                                k,
                              ))),
                      M && (w.preventedByNestedSwiper = !0),
                      !h.allowSlideNext &&
                        'next' === h.swipeDirection &&
                        v.currentTranslate < v.startTranslate &&
                        (v.currentTranslate = v.startTranslate),
                      !h.allowSlidePrev &&
                        'prev' === h.swipeDirection &&
                        v.currentTranslate > v.startTranslate &&
                        (v.currentTranslate = v.startTranslate),
                      h.allowSlidePrev ||
                        h.allowSlideNext ||
                        (v.currentTranslate = v.startTranslate),
                      f.threshold > 0)
                    ) {
                      if (!(Math.abs(A) > f.threshold || v.allowThresholdMove))
                        return void (v.currentTranslate = v.startTranslate)
                      if (!v.allowThresholdMove)
                        return (
                          (v.allowThresholdMove = !0),
                          (m.startX = m.currentX),
                          (m.startY = m.currentY),
                          (v.currentTranslate = v.startTranslate),
                          void (m.diff = h.isHorizontal()
                            ? m.currentX - m.startX
                            : m.currentY - m.startY)
                        )
                    }
                    f.followFinger &&
                      !f.cssMode &&
                      ((f.freeMode ||
                        f.watchSlidesProgress ||
                        f.watchSlidesVisibility) &&
                        (h.updateActiveIndex(), h.updateSlidesClasses()),
                      f.freeMode &&
                        (0 === v.velocities.length &&
                          v.velocities.push({
                            position: m[h.isHorizontal() ? 'startX' : 'startY'],
                            time: v.touchStartTime,
                          }),
                        v.velocities.push({
                          position:
                            m[h.isHorizontal() ? 'currentX' : 'currentY'],
                          time: now(),
                        })),
                      h.updateProgress(v.currentTranslate),
                      h.setTranslate(v.currentTranslate))
                  }
                }
              }
            }
          } else
            v.startMoving && v.isScrolling && h.emit('touchMoveOpposite', w)
        }
      }
      function onTouchEnd(n) {
        var c = this,
          h = c.touchEventsData,
          v = c.params,
          f = c.touches,
          m = c.rtlTranslate,
          g = c.$wrapperEl,
          w = c.slidesGrid,
          b = c.snapGrid
        if (c.enabled) {
          var y = n
          if (
            (y.originalEvent && (y = y.originalEvent),
            h.allowTouchCallbacks && c.emit('touchEnd', y),
            (h.allowTouchCallbacks = !1),
            !h.isTouched)
          )
            return (
              h.isMoved && v.grabCursor && c.setGrabCursor(!1),
              (h.isMoved = !1),
              void (h.startMoving = !1)
            )
          v.grabCursor &&
            h.isMoved &&
            h.isTouched &&
            (!0 === c.allowSlideNext || !0 === c.allowSlidePrev) &&
            c.setGrabCursor(!1)
          var x,
            E = now(),
            C = E - h.touchStartTime
          if (
            (c.allowClick &&
              (c.updateClickedSlide(y),
              c.emit('tap click', y),
              C < 300 &&
                E - h.lastClickTime < 300 &&
                c.emit('doubleTap doubleClick', y)),
            (h.lastClickTime = now()),
            nextTick(function () {
              c.destroyed || (c.allowClick = !0)
            }),
            !h.isTouched ||
              !h.isMoved ||
              !c.swipeDirection ||
              0 === f.diff ||
              h.currentTranslate === h.startTranslate)
          )
            return (
              (h.isTouched = !1), (h.isMoved = !1), void (h.startMoving = !1)
            )
          if (
            ((h.isTouched = !1),
            (h.isMoved = !1),
            (h.startMoving = !1),
            (x = v.followFinger
              ? m
                ? c.translate
                : -c.translate
              : -h.currentTranslate),
            !v.cssMode)
          )
            if (v.freeMode) {
              if (x < -c.minTranslate()) return void c.slideTo(c.activeIndex)
              if (x > -c.maxTranslate())
                return void (c.slides.length < b.length
                  ? c.slideTo(b.length - 1)
                  : c.slideTo(c.slides.length - 1))
              if (v.freeModeMomentum) {
                if (h.velocities.length > 1) {
                  var S = h.velocities.pop(),
                    A = h.velocities.pop(),
                    M = S.position - A.position,
                    k = S.time - A.time
                  ;(c.velocity = M / k),
                    (c.velocity /= 2),
                    Math.abs(c.velocity) < v.freeModeMinimumVelocity &&
                      (c.velocity = 0),
                    (k > 150 || now() - S.time > 300) && (c.velocity = 0)
                } else c.velocity = 0
                ;(c.velocity *= v.freeModeMomentumVelocityRatio),
                  (h.velocities.length = 0)
                var z = 1e3 * v.freeModeMomentumRatio,
                  P = c.velocity * z,
                  L = c.translate + P
                m && (L = -L)
                var O,
                  D,
                  I = !1,
                  B = 20 * Math.abs(c.velocity) * v.freeModeMomentumBounceRatio
                if (L < c.maxTranslate())
                  v.freeModeMomentumBounce
                    ? (L + c.maxTranslate() < -B && (L = c.maxTranslate() - B),
                      (O = c.maxTranslate()),
                      (I = !0),
                      (h.allowMomentumBounce = !0))
                    : (L = c.maxTranslate()),
                    v.loop && v.centeredSlides && (D = !0)
                else if (L > c.minTranslate())
                  v.freeModeMomentumBounce
                    ? (L - c.minTranslate() > B && (L = c.minTranslate() + B),
                      (O = c.minTranslate()),
                      (I = !0),
                      (h.allowMomentumBounce = !0))
                    : (L = c.minTranslate()),
                    v.loop && v.centeredSlides && (D = !0)
                else if (v.freeModeSticky) {
                  for (var N, G = 0; G < b.length; G += 1)
                    if (b[G] > -L) {
                      N = G
                      break
                    }
                  L = -(L =
                    Math.abs(b[N] - L) < Math.abs(b[N - 1] - L) ||
                    'next' === c.swipeDirection
                      ? b[N]
                      : b[N - 1])
                }
                if (
                  (D &&
                    c.once('transitionEnd', function () {
                      c.loopFix()
                    }),
                  0 !== c.velocity)
                ) {
                  if (
                    ((z = m
                      ? Math.abs((-L - c.translate) / c.velocity)
                      : Math.abs((L - c.translate) / c.velocity)),
                    v.freeModeSticky)
                  ) {
                    var Y = Math.abs((m ? -L : L) - c.translate),
                      _ = c.slidesSizesGrid[c.activeIndex]
                    z =
                      Y < _
                        ? v.speed
                        : Y < 2 * _
                        ? 1.5 * v.speed
                        : 2.5 * v.speed
                  }
                } else if (v.freeModeSticky) return void c.slideToClosest()
                v.freeModeMomentumBounce && I
                  ? (c.updateProgress(O),
                    c.setTransition(z),
                    c.setTranslate(L),
                    c.transitionStart(!0, c.swipeDirection),
                    (c.animating = !0),
                    g.transitionEnd(function () {
                      c &&
                        !c.destroyed &&
                        h.allowMomentumBounce &&
                        (c.emit('momentumBounce'),
                        c.setTransition(v.speed),
                        setTimeout(function () {
                          c.setTranslate(O),
                            g.transitionEnd(function () {
                              c && !c.destroyed && c.transitionEnd()
                            })
                        }, 0))
                    }))
                  : c.velocity
                  ? (c.updateProgress(L),
                    c.setTransition(z),
                    c.setTranslate(L),
                    c.transitionStart(!0, c.swipeDirection),
                    c.animating ||
                      ((c.animating = !0),
                      g.transitionEnd(function () {
                        c && !c.destroyed && c.transitionEnd()
                      })))
                  : (c.emit('_freeModeNoMomentumRelease'), c.updateProgress(L)),
                  c.updateActiveIndex(),
                  c.updateSlidesClasses()
              } else {
                if (v.freeModeSticky) return void c.slideToClosest()
                v.freeMode && c.emit('_freeModeNoMomentumRelease')
              }
              ;(!v.freeModeMomentum || C >= v.longSwipesMs) &&
                (c.updateProgress(),
                c.updateActiveIndex(),
                c.updateSlidesClasses())
            } else {
              for (
                var W = 0, H = c.slidesSizesGrid[0], R = 0;
                R < w.length;
                R += R < v.slidesPerGroupSkip ? 1 : v.slidesPerGroup
              ) {
                var j = R < v.slidesPerGroupSkip - 1 ? 1 : v.slidesPerGroup
                void 0 !== w[R + j]
                  ? x >= w[R] &&
                    x < w[R + j] &&
                    ((W = R), (H = w[R + j] - w[R]))
                  : x >= w[R] &&
                    ((W = R), (H = w[w.length - 1] - w[w.length - 2]))
              }
              var X = (x - w[W]) / H,
                F = W < v.slidesPerGroupSkip - 1 ? 1 : v.slidesPerGroup
              if (C > v.longSwipesMs) {
                if (!v.longSwipes) return void c.slideTo(c.activeIndex)
                'next' === c.swipeDirection &&
                  (X >= v.longSwipesRatio ? c.slideTo(W + F) : c.slideTo(W)),
                  'prev' === c.swipeDirection &&
                    (X > 1 - v.longSwipesRatio
                      ? c.slideTo(W + F)
                      : c.slideTo(W))
              } else {
                if (!v.shortSwipes) return void c.slideTo(c.activeIndex)
                c.navigation &&
                (y.target === c.navigation.nextEl ||
                  y.target === c.navigation.prevEl)
                  ? y.target === c.navigation.nextEl
                    ? c.slideTo(W + F)
                    : c.slideTo(W)
                  : ('next' === c.swipeDirection && c.slideTo(W + F),
                    'prev' === c.swipeDirection && c.slideTo(W))
              }
            }
        }
      }
      function onResize() {
        var n = this,
          c = n.params,
          h = n.el
        if (!h || 0 !== h.offsetWidth) {
          c.breakpoints && n.setBreakpoint()
          var v = n.allowSlideNext,
            f = n.allowSlidePrev,
            m = n.snapGrid
          ;(n.allowSlideNext = !0),
            (n.allowSlidePrev = !0),
            n.updateSize(),
            n.updateSlides(),
            n.updateSlidesClasses(),
            ('auto' === c.slidesPerView || c.slidesPerView > 1) &&
            n.isEnd &&
            !n.isBeginning &&
            !n.params.centeredSlides
              ? n.slideTo(n.slides.length - 1, 0, !1, !0)
              : n.slideTo(n.activeIndex, 0, !1, !0),
            n.autoplay &&
              n.autoplay.running &&
              n.autoplay.paused &&
              n.autoplay.run(),
            (n.allowSlidePrev = f),
            (n.allowSlideNext = v),
            n.params.watchOverflow && m !== n.snapGrid && n.checkOverflow()
        }
      }
      function onClick(n) {
        var c = this
        c.enabled &&
          (c.allowClick ||
            (c.params.preventClicks && n.preventDefault(),
            c.params.preventClicksPropagation &&
              c.animating &&
              (n.stopPropagation(), n.stopImmediatePropagation())))
      }
      function onScroll() {
        var n = this,
          c = n.wrapperEl,
          h = n.rtlTranslate
        if (n.enabled) {
          ;(n.previousTranslate = n.translate),
            n.isHorizontal()
              ? (n.translate = h
                  ? c.scrollWidth - c.offsetWidth - c.scrollLeft
                  : -c.scrollLeft)
              : (n.translate = -c.scrollTop),
            -0 === n.translate && (n.translate = 0),
            n.updateActiveIndex(),
            n.updateSlidesClasses()
          var v = n.maxTranslate() - n.minTranslate()
          ;(0 === v ? 0 : (n.translate - n.minTranslate()) / v) !==
            n.progress && n.updateProgress(h ? -n.translate : n.translate),
            n.emit('setTranslate', n.translate, !1)
        }
      }
      var Me = !1
      function dummyEventListener() {}
      var $e = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      }
      function _defineProperties(n, c) {
        for (var h = 0; h < c.length; h++) {
          var v = c[h]
          ;(v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            'value' in v && (v.writable = !0),
            D()(n, v.key, v)
        }
      }
      var ke = {
          modular: {
            useParams: function e(n) {
              var c,
                h = this
              h.modules &&
                w()((c = y()(h.modules))).call(c, function (c) {
                  var v = h.modules[c]
                  v.params && extend(n, v.params)
                })
            },
            useModules: function e(n) {
              var c
              void 0 === n && (n = {})
              var h = this
              h.modules &&
                w()((c = y()(h.modules))).call(c, function (c) {
                  var v,
                    f = h.modules[c],
                    m = n[c] || {}
                  f.on &&
                    h.on &&
                    w()((v = y()(f.on))).call(v, function (n) {
                      h.on(n, f.on[n])
                    })
                  f.create && f.create.bind(h)(m)
                })
            },
          },
          eventsEmitter: {
            on: function e(n, c, h) {
              var v,
                f = this
              if ('function' != typeof c) return f
              var m = h ? 'unshift' : 'push'
              return (
                w()((v = n.split(' '))).call(v, function (n) {
                  f.eventsListeners[n] || (f.eventsListeners[n] = []),
                    f.eventsListeners[n][m](c)
                }),
                f
              )
            },
            once: function e(n, c, h) {
              var v = this
              if ('function' != typeof c) return v
              function s() {
                v.off(n, s), s.__emitterProxy && delete s.__emitterProxy
                for (
                  var h = arguments.length, f = new Array(h), m = 0;
                  m < h;
                  m++
                )
                  f[m] = arguments[m]
                c.apply(v, f)
              }
              return (s.__emitterProxy = c), v.on(n, s, h)
            },
            onAny: function e(n, c) {
              var h,
                v = this
              if ('function' != typeof n) return v
              var f = c ? 'unshift' : 'push'
              return (
                z()((h = v.eventsAnyListeners)).call(h, n) < 0 &&
                  v.eventsAnyListeners[f](n),
                v
              )
            },
            offAny: function e(n) {
              var c,
                h = this
              if (!h.eventsAnyListeners) return h
              var v,
                f = z()((c = h.eventsAnyListeners)).call(c, n)
              f >= 0 && j()((v = h.eventsAnyListeners)).call(v, f, 1)
              return h
            },
            off: function e(n, c) {
              var h,
                v = this
              return v.eventsListeners
                ? (w()((h = n.split(' '))).call(h, function (n) {
                    if (void 0 === c) v.eventsListeners[n] = []
                    else if (v.eventsListeners[n]) {
                      var h
                      w()((h = v.eventsListeners[n])).call(h, function (h, f) {
                        var m
                        ;(h === c ||
                          (h.__emitterProxy && h.__emitterProxy === c)) &&
                          j()((m = v.eventsListeners[n])).call(m, f, 1)
                      })
                    }
                  }),
                  v)
                : v
            },
            emit: function e() {
              var n,
                c,
                h,
                v = this
              if (!v.eventsListeners) return v
              for (
                var f = arguments.length, m = new Array(f), g = 0;
                g < f;
                g++
              )
                m[g] = arguments[g]
              'string' == typeof m[0] || Array.isArray(m[0])
                ? ((n = m[0]), (c = q()(m).call(m, 1, m.length)), (h = v))
                : ((n = m[0].events), (c = m[0].data), (h = m[0].context || v)),
                c.unshift(h)
              var b = Array.isArray(n) ? n : n.split(' ')
              return (
                w()(b).call(b, function (n) {
                  var f, m
                  v.eventsAnyListeners &&
                    v.eventsAnyListeners.length &&
                    w()((f = v.eventsAnyListeners)).call(f, function (v) {
                      var f
                      v.apply(h, B()((f = [n])).call(f, c))
                    })
                  v.eventsListeners &&
                    v.eventsListeners[n] &&
                    w()((m = v.eventsListeners[n])).call(m, function (n) {
                      n.apply(h, c)
                    })
                }),
                v
              )
            },
          },
          update: {
            updateSize: function updateSize() {
              var n,
                c,
                h = this,
                v = h.$el
              ;(n =
                void 0 !== h.params.width && null !== h.params.width
                  ? h.params.width
                  : v[0].clientWidth),
                (c =
                  void 0 !== h.params.height && null !== h.params.height
                    ? h.params.height
                    : v[0].clientHeight),
                (0 === n && h.isHorizontal()) ||
                  (0 === c && h.isVertical()) ||
                  ((n =
                    n -
                    ee()(v.css('padding-left') || 0, 10) -
                    ee()(v.css('padding-right') || 0, 10)),
                  (c =
                    c -
                    ee()(v.css('padding-top') || 0, 10) -
                    ee()(v.css('padding-bottom') || 0, 10)),
                  ae()(n) && (n = 0),
                  ae()(c) && (c = 0),
                  extend(h, {
                    width: n,
                    height: c,
                    size: h.isHorizontal() ? n : c,
                  }))
            },
            updateSlides: function updateSlides() {
              var n = this
              function t(c) {
                return n.isHorizontal()
                  ? c
                  : {
                      width: 'height',
                      'margin-top': 'margin-left',
                      'margin-bottom ': 'margin-right',
                      'margin-left': 'margin-top',
                      'margin-right': 'margin-bottom',
                      'padding-left': 'padding-top',
                      'padding-right': 'padding-bottom',
                      marginRight: 'marginBottom',
                    }[c]
              }
              function a(n, c) {
                return F()(n.getPropertyValue(t(c)) || 0)
              }
              var c = n.params,
                h = n.$wrapperEl,
                v = n.size,
                f = n.rtlTranslate,
                m = n.wrongRTL,
                g = n.virtual && c.virtual.enabled,
                b = g ? n.virtual.slides.length : n.slides.length,
                y = h.children('.' + n.params.slideClass),
                x = g ? n.virtual.slides.length : y.length,
                E = [],
                C = [],
                S = [],
                A = c.slidesOffsetBefore
              'function' == typeof A && (A = c.slidesOffsetBefore.call(n))
              var M = c.slidesOffsetAfter
              'function' == typeof M && (M = c.slidesOffsetAfter.call(n))
              var k = n.snapGrid.length,
                P = n.slidesGrid.length,
                L = c.spaceBetween,
                O = -A,
                D = 0,
                I = 0
              if (void 0 !== v) {
                var B, N
                'string' == typeof L &&
                  z()(L).call(L, '%') >= 0 &&
                  (L = (F()(L.replace('%', '')) / 100) * v),
                  (n.virtualSize = -L),
                  f
                    ? y.css({ marginLeft: '', marginTop: '' })
                    : y.css({ marginRight: '', marginBottom: '' }),
                  c.slidesPerColumn > 1 &&
                    ((B =
                      Math.floor(x / c.slidesPerColumn) ===
                      x / n.params.slidesPerColumn
                        ? x
                        : Math.ceil(x / c.slidesPerColumn) * c.slidesPerColumn),
                    'auto' !== c.slidesPerView &&
                      'row' === c.slidesPerColumnFill &&
                      (B = Math.max(B, c.slidesPerView * c.slidesPerColumn)))
                for (
                  var Y,
                    _,
                    W,
                    R = c.slidesPerColumn,
                    j = B / R,
                    X = Math.floor(x / c.slidesPerColumn),
                    V = 0;
                  V < x;
                  V += 1
                ) {
                  N = 0
                  var q = y.eq(V)
                  if (c.slidesPerColumn > 1) {
                    var U = void 0,
                      Q = void 0,
                      K = void 0
                    if (
                      'row' === c.slidesPerColumnFill &&
                      c.slidesPerGroup > 1
                    ) {
                      var Z = Math.floor(
                          V / (c.slidesPerGroup * c.slidesPerColumn),
                        ),
                        J = V - c.slidesPerColumn * c.slidesPerGroup * Z,
                        ee =
                          0 === Z
                            ? c.slidesPerGroup
                            : Math.min(
                                Math.ceil((x - Z * R * c.slidesPerGroup) / R),
                                c.slidesPerGroup,
                              )
                      ;(U =
                        (Q =
                          J -
                          (K = Math.floor(J / ee)) * ee +
                          Z * c.slidesPerGroup) +
                        (K * B) / R),
                        q.css({
                          '-webkit-box-ordinal-group': U,
                          '-moz-box-ordinal-group': U,
                          '-ms-flex-order': U,
                          '-webkit-order': U,
                          order: U,
                        })
                    } else
                      'column' === c.slidesPerColumnFill
                        ? ((K = V - (Q = Math.floor(V / R)) * R),
                          (Q > X || (Q === X && K === R - 1)) &&
                            (K += 1) >= R &&
                            ((K = 0), (Q += 1)))
                        : (Q = V - (K = Math.floor(V / j)) * j)
                    q.css(
                      t('margin-top'),
                      0 !== K ? c.spaceBetween && c.spaceBetween + 'px' : '',
                    )
                  }
                  if ('none' !== q.css('display')) {
                    if ('auto' === c.slidesPerView) {
                      var te = getComputedStyle(q[0]),
                        ae = q[0].style.transform,
                        ie = q[0].style.webkitTransform
                      if (
                        (ae && (q[0].style.transform = 'none'),
                        ie && (q[0].style.webkitTransform = 'none'),
                        c.roundLengths)
                      )
                        N = n.isHorizontal()
                          ? q.outerWidth(!0)
                          : q.outerHeight(!0)
                      else {
                        var re = a(te, 'width'),
                          se = a(te, 'padding-left'),
                          ne = a(te, 'padding-right'),
                          oe = a(te, 'margin-left'),
                          le = a(te, 'margin-right'),
                          de = te.getPropertyValue('box-sizing')
                        if (de && 'border-box' === de) N = re + oe + le
                        else {
                          var pe = q[0],
                            ce = pe.clientWidth
                          N = re + se + ne + oe + le + (pe.offsetWidth - ce)
                        }
                      }
                      ae && (q[0].style.transform = ae),
                        ie && (q[0].style.webkitTransform = ie),
                        c.roundLengths && (N = Math.floor(N))
                    } else
                      (N = (v - (c.slidesPerView - 1) * L) / c.slidesPerView),
                        c.roundLengths && (N = Math.floor(N)),
                        y[V] && (y[V].style[t('width')] = N + 'px')
                    y[V] && (y[V].swiperSlideSize = N),
                      S.push(N),
                      c.centeredSlides
                        ? ((O = O + N / 2 + D / 2 + L),
                          0 === D && 0 !== V && (O = O - v / 2 - L),
                          0 === V && (O = O - v / 2 - L),
                          Math.abs(O) < 0.001 && (O = 0),
                          c.roundLengths && (O = Math.floor(O)),
                          I % c.slidesPerGroup == 0 && E.push(O),
                          C.push(O))
                        : (c.roundLengths && (O = Math.floor(O)),
                          (I - Math.min(n.params.slidesPerGroupSkip, I)) %
                            n.params.slidesPerGroup ==
                            0 && E.push(O),
                          C.push(O),
                          (O = O + N + L)),
                      (n.virtualSize += N + L),
                      (D = N),
                      (I += 1)
                  }
                }
                if (
                  ((n.virtualSize = Math.max(n.virtualSize, v) + M),
                  f &&
                    m &&
                    ('slide' === c.effect || 'coverflow' === c.effect) &&
                    h.css({ width: n.virtualSize + c.spaceBetween + 'px' }),
                  c.setWrapperSize)
                )
                  h.css(
                    (((_ = {})[t('width')] =
                      n.virtualSize + c.spaceBetween + 'px'),
                    _),
                  )
                if (c.slidesPerColumn > 1)
                  if (
                    ((n.virtualSize = (N + c.spaceBetween) * B),
                    (n.virtualSize =
                      Math.ceil(n.virtualSize / c.slidesPerColumn) -
                      c.spaceBetween),
                    h.css(
                      (((W = {})[t('width')] =
                        n.virtualSize + c.spaceBetween + 'px'),
                      W),
                    ),
                    c.centeredSlides)
                  ) {
                    Y = []
                    for (var ue = 0; ue < E.length; ue += 1) {
                      var he = E[ue]
                      c.roundLengths && (he = Math.floor(he)),
                        E[ue] < n.virtualSize + E[0] && Y.push(he)
                    }
                    E = Y
                  }
                if (!c.centeredSlides) {
                  Y = []
                  for (var ve = 0; ve < E.length; ve += 1) {
                    var fe = E[ve]
                    c.roundLengths && (fe = Math.floor(fe)),
                      E[ve] <= n.virtualSize - v && Y.push(fe)
                  }
                  ;(E = Y),
                    Math.floor(n.virtualSize - v) -
                      Math.floor(E[E.length - 1]) >
                      1 && E.push(n.virtualSize - v)
                }
                if ((0 === E.length && (E = [0]), 0 !== c.spaceBetween)) {
                  var me,
                    ge = n.isHorizontal() && f ? 'marginLeft' : t('marginRight')
                  G()(y)
                    .call(y, function (n, h) {
                      return !c.cssMode || h !== y.length - 1
                    })
                    .css((((me = {})[ge] = L + 'px'), me))
                }
                if (c.centeredSlides && c.centeredSlidesBounds) {
                  var we = 0
                  w()(S).call(S, function (n) {
                    we += n + (c.spaceBetween ? c.spaceBetween : 0)
                  })
                  var be = (we -= c.spaceBetween) - v
                  E = H()(E).call(E, function (n) {
                    return n < 0 ? -A : n > be ? be + M : n
                  })
                }
                if (c.centerInsufficientSlides) {
                  var ye = 0
                  if (
                    (w()(S).call(S, function (n) {
                      ye += n + (c.spaceBetween ? c.spaceBetween : 0)
                    }),
                    (ye -= c.spaceBetween) < v)
                  ) {
                    var xe = (v - ye) / 2
                    w()(E).call(E, function (n, c) {
                      E[c] = n - xe
                    }),
                      w()(C).call(C, function (n, c) {
                        C[c] = n + xe
                      })
                  }
                }
                extend(n, {
                  slides: y,
                  snapGrid: E,
                  slidesGrid: C,
                  slidesSizesGrid: S,
                }),
                  x !== b && n.emit('slidesLengthChange'),
                  E.length !== k &&
                    (n.params.watchOverflow && n.checkOverflow(),
                    n.emit('snapGridLengthChange')),
                  C.length !== P && n.emit('slidesGridLengthChange'),
                  (c.watchSlidesProgress || c.watchSlidesVisibility) &&
                    n.updateSlidesOffset()
              }
            },
            updateAutoHeight: function updateAutoHeight(n) {
              var c,
                h = this,
                v = [],
                f = h.virtual && h.params.virtual.enabled,
                m = 0
              'number' == typeof n
                ? h.setTransition(n)
                : !0 === n && h.setTransition(h.params.speed)
              var g = function e(n) {
                var c
                return f
                  ? G()((c = h.slides)).call(c, function (c) {
                      return (
                        ee()(c.getAttribute('data-swiper-slide-index'), 10) ===
                        n
                      )
                    })[0]
                  : h.slides.eq(n)[0]
              }
              if (
                'auto' !== h.params.slidesPerView &&
                h.params.slidesPerView > 1
              )
                if (h.params.centeredSlides)
                  h.visibleSlides.each(function (n) {
                    v.push(n)
                  })
                else
                  for (c = 0; c < Math.ceil(h.params.slidesPerView); c += 1) {
                    var w = h.activeIndex + c
                    if (w > h.slides.length && !f) break
                    v.push(g(w))
                  }
              else v.push(g(h.activeIndex))
              for (c = 0; c < v.length; c += 1)
                if (void 0 !== v[c]) {
                  var b = v[c].offsetHeight
                  m = b > m ? b : m
                }
              m && h.$wrapperEl.css('height', m + 'px')
            },
            updateSlidesOffset: function updateSlidesOffset() {
              for (var n = this.slides, c = 0; c < n.length; c += 1)
                n[c].swiperSlideOffset = this.isHorizontal()
                  ? n[c].offsetLeft
                  : n[c].offsetTop
            },
            updateSlidesProgress: function updateSlidesProgress(n) {
              void 0 === n && (n = (this && this.translate) || 0)
              var c = this,
                h = c.params,
                v = c.slides,
                f = c.rtlTranslate
              if (0 !== v.length) {
                void 0 === v[0].swiperSlideOffset && c.updateSlidesOffset()
                var m = -n
                f && (m = n),
                  v.removeClass(h.slideVisibleClass),
                  (c.visibleSlidesIndexes = []),
                  (c.visibleSlides = [])
                for (var g = 0; g < v.length; g += 1) {
                  var w = v[g],
                    b =
                      (m +
                        (h.centeredSlides ? c.minTranslate() : 0) -
                        w.swiperSlideOffset) /
                      (w.swiperSlideSize + h.spaceBetween)
                  if (
                    h.watchSlidesVisibility ||
                    (h.centeredSlides && h.autoHeight)
                  ) {
                    var y = -(m - w.swiperSlideOffset),
                      x = y + c.slidesSizesGrid[g]
                    ;((y >= 0 && y < c.size - 1) ||
                      (x > 1 && x <= c.size) ||
                      (y <= 0 && x >= c.size)) &&
                      (c.visibleSlides.push(w),
                      c.visibleSlidesIndexes.push(g),
                      v.eq(g).addClass(h.slideVisibleClass))
                  }
                  w.progress = f ? -b : b
                }
                c.visibleSlides = $(c.visibleSlides)
              }
            },
            updateProgress: function updateProgress(n) {
              var c = this
              if (void 0 === n) {
                var h = c.rtlTranslate ? -1 : 1
                n = (c && c.translate && c.translate * h) || 0
              }
              var v = c.params,
                f = c.maxTranslate() - c.minTranslate(),
                m = c.progress,
                g = c.isBeginning,
                w = c.isEnd,
                b = g,
                y = w
              0 === f
                ? ((m = 0), (g = !0), (w = !0))
                : ((g = (m = (n - c.minTranslate()) / f) <= 0), (w = m >= 1)),
                extend(c, { progress: m, isBeginning: g, isEnd: w }),
                (v.watchSlidesProgress ||
                  v.watchSlidesVisibility ||
                  (v.centeredSlides && v.autoHeight)) &&
                  c.updateSlidesProgress(n),
                g && !b && c.emit('reachBeginning toEdge'),
                w && !y && c.emit('reachEnd toEdge'),
                ((b && !g) || (y && !w)) && c.emit('fromEdge'),
                c.emit('progress', m)
            },
            updateSlidesClasses: function updateSlidesClasses() {
              var n,
                c,
                h = this,
                v = h.slides,
                f = h.params,
                m = h.$wrapperEl,
                g = h.activeIndex,
                w = h.realIndex,
                b = h.virtual && f.virtual.enabled
              v.removeClass(
                f.slideActiveClass +
                  ' ' +
                  f.slideNextClass +
                  ' ' +
                  f.slidePrevClass +
                  ' ' +
                  f.slideDuplicateActiveClass +
                  ' ' +
                  f.slideDuplicateNextClass +
                  ' ' +
                  f.slideDuplicatePrevClass,
              ),
                (n = b
                  ? re()((c = h.$wrapperEl)).call(
                      c,
                      '.' +
                        f.slideClass +
                        '[data-swiper-slide-index="' +
                        g +
                        '"]',
                    )
                  : v.eq(g)),
                n.addClass(f.slideActiveClass),
                f.loop &&
                  (n.hasClass(f.slideDuplicateClass)
                    ? m
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            w +
                            '"]',
                        )
                        .addClass(f.slideDuplicateActiveClass)
                    : m
                        .children(
                          '.' +
                            f.slideClass +
                            '.' +
                            f.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            w +
                            '"]',
                        )
                        .addClass(f.slideDuplicateActiveClass))
              var y = n
                .nextAll('.' + f.slideClass)
                .eq(0)
                .addClass(f.slideNextClass)
              f.loop &&
                0 === y.length &&
                (y = v.eq(0)).addClass(f.slideNextClass)
              var x = n
                .prevAll('.' + f.slideClass)
                .eq(0)
                .addClass(f.slidePrevClass)
              f.loop &&
                0 === x.length &&
                (x = v.eq(-1)).addClass(f.slidePrevClass),
                f.loop &&
                  (y.hasClass(f.slideDuplicateClass)
                    ? m
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            y.attr('data-swiper-slide-index') +
                            '"]',
                        )
                        .addClass(f.slideDuplicateNextClass)
                    : m
                        .children(
                          '.' +
                            f.slideClass +
                            '.' +
                            f.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            y.attr('data-swiper-slide-index') +
                            '"]',
                        )
                        .addClass(f.slideDuplicateNextClass),
                  x.hasClass(f.slideDuplicateClass)
                    ? m
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            x.attr('data-swiper-slide-index') +
                            '"]',
                        )
                        .addClass(f.slideDuplicatePrevClass)
                    : m
                        .children(
                          '.' +
                            f.slideClass +
                            '.' +
                            f.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            x.attr('data-swiper-slide-index') +
                            '"]',
                        )
                        .addClass(f.slideDuplicatePrevClass)),
                h.emitSlidesClasses()
            },
            updateActiveIndex: function updateActiveIndex(n) {
              var c,
                h = this,
                v = h.rtlTranslate ? h.translate : -h.translate,
                f = h.slidesGrid,
                m = h.snapGrid,
                g = h.params,
                w = h.activeIndex,
                b = h.realIndex,
                y = h.snapIndex,
                x = n
              if (void 0 === x) {
                for (var E = 0; E < f.length; E += 1)
                  void 0 !== f[E + 1]
                    ? v >= f[E] && v < f[E + 1] - (f[E + 1] - f[E]) / 2
                      ? (x = E)
                      : v >= f[E] && v < f[E + 1] && (x = E + 1)
                    : v >= f[E] && (x = E)
                g.normalizeSlideIndex && (x < 0 || void 0 === x) && (x = 0)
              }
              if (z()(m).call(m, v) >= 0) c = z()(m).call(m, v)
              else {
                var C = Math.min(g.slidesPerGroupSkip, x)
                c = C + Math.floor((x - C) / g.slidesPerGroup)
              }
              if ((c >= m.length && (c = m.length - 1), x !== w)) {
                var S = ee()(
                  h.slides.eq(x).attr('data-swiper-slide-index') || x,
                  10,
                )
                extend(h, {
                  snapIndex: c,
                  realIndex: S,
                  previousIndex: w,
                  activeIndex: x,
                }),
                  h.emit('activeIndexChange'),
                  h.emit('snapIndexChange'),
                  b !== S && h.emit('realIndexChange'),
                  (h.initialized || h.params.runCallbacksOnInit) &&
                    h.emit('slideChange')
              } else c !== y && ((h.snapIndex = c), h.emit('snapIndexChange'))
            },
            updateClickedSlide: function updateClickedSlide(n) {
              var c,
                h = this,
                v = h.params,
                f = $(n.target).closest('.' + v.slideClass)[0],
                m = !1
              if (f)
                for (var g = 0; g < h.slides.length; g += 1)
                  if (h.slides[g] === f) {
                    ;(m = !0), (c = g)
                    break
                  }
              if (!f || !m)
                return (h.clickedSlide = void 0), void (h.clickedIndex = void 0)
              ;(h.clickedSlide = f),
                h.virtual && h.params.virtual.enabled
                  ? (h.clickedIndex = ee()(
                      $(f).attr('data-swiper-slide-index'),
                      10,
                    ))
                  : (h.clickedIndex = c),
                v.slideToClickedSlide &&
                  void 0 !== h.clickedIndex &&
                  h.clickedIndex !== h.activeIndex &&
                  h.slideToClickedSlide()
            },
          },
          translate: {
            getTranslate: function getSwiperTranslate(n) {
              void 0 === n && (n = this.isHorizontal() ? 'x' : 'y')
              var c = this,
                h = c.params,
                v = c.rtlTranslate,
                f = c.translate,
                m = c.$wrapperEl
              if (h.virtualTranslate) return v ? -f : f
              if (h.cssMode) return f
              var g = getTranslate(m[0], n)
              return v && (g = -g), g || 0
            },
            setTranslate: function setTranslate(n, c) {
              var h = this,
                v = h.rtlTranslate,
                f = h.params,
                m = h.$wrapperEl,
                g = h.wrapperEl,
                w = h.progress,
                b = 0,
                y = 0
              h.isHorizontal() ? (b = v ? -n : n) : (y = n),
                f.roundLengths && ((b = Math.floor(b)), (y = Math.floor(y))),
                f.cssMode
                  ? (g[h.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                      h.isHorizontal() ? -b : -y)
                  : f.virtualTranslate ||
                    m.transform('translate3d(' + b + 'px, ' + y + 'px, 0px)'),
                (h.previousTranslate = h.translate),
                (h.translate = h.isHorizontal() ? b : y)
              var x = h.maxTranslate() - h.minTranslate()
              ;(0 === x ? 0 : (n - h.minTranslate()) / x) !== w &&
                h.updateProgress(n),
                h.emit('setTranslate', h.translate, c)
            },
            minTranslate: function minTranslate() {
              return -this.snapGrid[0]
            },
            maxTranslate: function maxTranslate() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function translateTo(n, c, h, v, f) {
              void 0 === n && (n = 0),
                void 0 === c && (c = this.params.speed),
                void 0 === h && (h = !0),
                void 0 === v && (v = !0)
              var m = this,
                g = m.params,
                w = m.wrapperEl
              if (m.animating && g.preventInteractionOnTransition) return !1
              var b,
                y = m.minTranslate(),
                x = m.maxTranslate()
              if (
                ((b = v && n > y ? y : v && n < x ? x : n),
                m.updateProgress(b),
                g.cssMode)
              ) {
                var E,
                  C = m.isHorizontal()
                if (0 === c) w[C ? 'scrollLeft' : 'scrollTop'] = -b
                else if (w.scrollTo)
                  w.scrollTo(
                    (((E = {})[C ? 'left' : 'top'] = -b),
                    (E.behavior = 'smooth'),
                    E),
                  )
                else w[C ? 'scrollLeft' : 'scrollTop'] = -b
                return !0
              }
              return (
                0 === c
                  ? (m.setTransition(0),
                    m.setTranslate(b),
                    h &&
                      (m.emit('beforeTransitionStart', c, f),
                      m.emit('transitionEnd')))
                  : (m.setTransition(c),
                    m.setTranslate(b),
                    h &&
                      (m.emit('beforeTransitionStart', c, f),
                      m.emit('transitionStart')),
                    m.animating ||
                      ((m.animating = !0),
                      m.onTranslateToWrapperTransitionEnd ||
                        (m.onTranslateToWrapperTransitionEnd = function e(n) {
                          m &&
                            !m.destroyed &&
                            n.target === this &&
                            (m.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              m.onTranslateToWrapperTransitionEnd,
                            ),
                            m.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              m.onTranslateToWrapperTransitionEnd,
                            ),
                            (m.onTranslateToWrapperTransitionEnd = null),
                            delete m.onTranslateToWrapperTransitionEnd,
                            h && m.emit('transitionEnd'))
                        }),
                      m.$wrapperEl[0].addEventListener(
                        'transitionend',
                        m.onTranslateToWrapperTransitionEnd,
                      ),
                      m.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        m.onTranslateToWrapperTransitionEnd,
                      ))),
                !0
              )
            },
          },
          transition: {
            setTransition: function setTransition(n, c) {
              var h = this
              h.params.cssMode || h.$wrapperEl.transition(n),
                h.emit('setTransition', n, c)
            },
            transitionStart: function transitionStart(n, c) {
              void 0 === n && (n = !0)
              var h = this,
                v = h.activeIndex,
                f = h.params,
                m = h.previousIndex
              if (!f.cssMode) {
                f.autoHeight && h.updateAutoHeight()
                var g = c
                if (
                  (g || (g = v > m ? 'next' : v < m ? 'prev' : 'reset'),
                  h.emit('transitionStart'),
                  n && v !== m)
                ) {
                  if ('reset' === g)
                    return void h.emit('slideResetTransitionStart')
                  h.emit('slideChangeTransitionStart'),
                    'next' === g
                      ? h.emit('slideNextTransitionStart')
                      : h.emit('slidePrevTransitionStart')
                }
              }
            },
            transitionEnd: function transitionEnd(n, c) {
              void 0 === n && (n = !0)
              var h = this,
                v = h.activeIndex,
                f = h.previousIndex,
                m = h.params
              if (((h.animating = !1), !m.cssMode)) {
                h.setTransition(0)
                var g = c
                if (
                  (g || (g = v > f ? 'next' : v < f ? 'prev' : 'reset'),
                  h.emit('transitionEnd'),
                  n && v !== f)
                ) {
                  if ('reset' === g)
                    return void h.emit('slideResetTransitionEnd')
                  h.emit('slideChangeTransitionEnd'),
                    'next' === g
                      ? h.emit('slideNextTransitionEnd')
                      : h.emit('slidePrevTransitionEnd')
                }
              }
            },
          },
          slide: {
            slideTo: function slideTo(n, c, h, v, f) {
              if (
                (void 0 === n && (n = 0),
                void 0 === c && (c = this.params.speed),
                void 0 === h && (h = !0),
                'number' != typeof n && 'string' != typeof n)
              )
                throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                    Object(m.a)(n) +
                    '] given.',
                )
              if ('string' == typeof n) {
                var g = ee()(n, 10)
                if (!isFinite(g))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                      n +
                      '] given.',
                  )
                n = g
              }
              var w = this,
                b = n
              b < 0 && (b = 0)
              var y = w.params,
                x = w.snapGrid,
                E = w.slidesGrid,
                C = w.previousIndex,
                S = w.activeIndex,
                A = w.rtlTranslate,
                M = w.wrapperEl,
                k = w.enabled
              if (
                (w.animating && y.preventInteractionOnTransition) ||
                (!k && !v && !f)
              )
                return !1
              var z = Math.min(w.params.slidesPerGroupSkip, b),
                P = z + Math.floor((b - z) / w.params.slidesPerGroup)
              P >= x.length && (P = x.length - 1),
                (S || y.initialSlide || 0) === (C || 0) &&
                  h &&
                  w.emit('beforeSlideChangeStart')
              var L,
                O = -x[P]
              if ((w.updateProgress(O), y.normalizeSlideIndex))
                for (var D = 0; D < E.length; D += 1) {
                  var I = -Math.floor(100 * O),
                    B = Math.floor(100 * E[D]),
                    N = Math.floor(100 * E[D + 1])
                  void 0 !== E[D + 1]
                    ? I >= B && I < N - (N - B) / 2
                      ? (b = D)
                      : I >= B && I < N && (b = D + 1)
                    : I >= B && (b = D)
                }
              if (w.initialized && b !== S) {
                if (
                  !w.allowSlideNext &&
                  O < w.translate &&
                  O < w.minTranslate()
                )
                  return !1
                if (
                  !w.allowSlidePrev &&
                  O > w.translate &&
                  O > w.maxTranslate() &&
                  (S || 0) !== b
                )
                  return !1
              }
              if (
                ((L = b > S ? 'next' : b < S ? 'prev' : 'reset'),
                (A && -O === w.translate) || (!A && O === w.translate))
              )
                return (
                  w.updateActiveIndex(b),
                  y.autoHeight && w.updateAutoHeight(),
                  w.updateSlidesClasses(),
                  'slide' !== y.effect && w.setTranslate(O),
                  'reset' !== L &&
                    (w.transitionStart(h, L), w.transitionEnd(h, L)),
                  !1
                )
              if (y.cssMode) {
                var G,
                  Y = w.isHorizontal(),
                  _ = -O
                if ((A && (_ = M.scrollWidth - M.offsetWidth - _), 0 === c))
                  M[Y ? 'scrollLeft' : 'scrollTop'] = _
                else if (M.scrollTo)
                  M.scrollTo(
                    (((G = {})[Y ? 'left' : 'top'] = _),
                    (G.behavior = 'smooth'),
                    G),
                  )
                else M[Y ? 'scrollLeft' : 'scrollTop'] = _
                return !0
              }
              return (
                0 === c
                  ? (w.setTransition(0),
                    w.setTranslate(O),
                    w.updateActiveIndex(b),
                    w.updateSlidesClasses(),
                    w.emit('beforeTransitionStart', c, v),
                    w.transitionStart(h, L),
                    w.transitionEnd(h, L))
                  : (w.setTransition(c),
                    w.setTranslate(O),
                    w.updateActiveIndex(b),
                    w.updateSlidesClasses(),
                    w.emit('beforeTransitionStart', c, v),
                    w.transitionStart(h, L),
                    w.animating ||
                      ((w.animating = !0),
                      w.onSlideToWrapperTransitionEnd ||
                        (w.onSlideToWrapperTransitionEnd = function e(n) {
                          w &&
                            !w.destroyed &&
                            n.target === this &&
                            (w.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              w.onSlideToWrapperTransitionEnd,
                            ),
                            w.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              w.onSlideToWrapperTransitionEnd,
                            ),
                            (w.onSlideToWrapperTransitionEnd = null),
                            delete w.onSlideToWrapperTransitionEnd,
                            w.transitionEnd(h, L))
                        }),
                      w.$wrapperEl[0].addEventListener(
                        'transitionend',
                        w.onSlideToWrapperTransitionEnd,
                      ),
                      w.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        w.onSlideToWrapperTransitionEnd,
                      ))),
                !0
              )
            },
            slideToLoop: function slideToLoop(n, c, h, v) {
              void 0 === n && (n = 0),
                void 0 === c && (c = this.params.speed),
                void 0 === h && (h = !0)
              var f = this,
                m = n
              return (
                f.params.loop && (m += f.loopedSlides), f.slideTo(m, c, h, v)
              )
            },
            slideNext: function slideNext(n, c, h) {
              void 0 === n && (n = this.params.speed), void 0 === c && (c = !0)
              var v = this,
                f = v.params,
                m = v.animating
              if (!v.enabled) return v
              var g =
                v.activeIndex < f.slidesPerGroupSkip ? 1 : f.slidesPerGroup
              if (f.loop) {
                if (m && f.loopPreventsSlide) return !1
                v.loopFix(), (v._clientLeft = v.$wrapperEl[0].clientLeft)
              }
              return v.slideTo(v.activeIndex + g, n, c, h)
            },
            slidePrev: function slidePrev(n, c, h) {
              void 0 === n && (n = this.params.speed), void 0 === c && (c = !0)
              var v = this,
                f = v.params,
                m = v.animating,
                g = v.snapGrid,
                b = v.slidesGrid,
                y = v.rtlTranslate
              if (!v.enabled) return v
              if (f.loop) {
                if (m && f.loopPreventsSlide) return !1
                v.loopFix(), (v._clientLeft = v.$wrapperEl[0].clientLeft)
              }
              function u(n) {
                return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n)
              }
              var x,
                E = u(y ? v.translate : -v.translate),
                C = H()(g).call(g, function (n) {
                  return u(n)
                }),
                S = g[z()(C).call(C, E) - 1]
              return (
                void 0 === S &&
                  f.cssMode &&
                  w()(g).call(g, function (n) {
                    !S && E >= n && (S = n)
                  }),
                void 0 !== S &&
                  (x = z()(b).call(b, S)) < 0 &&
                  (x = v.activeIndex - 1),
                v.slideTo(x, n, c, h)
              )
            },
            slideReset: function slideReset(n, c, h) {
              return (
                void 0 === n && (n = this.params.speed),
                void 0 === c && (c = !0),
                this.slideTo(this.activeIndex, n, c, h)
              )
            },
            slideToClosest: function slideToClosest(n, c, h, v) {
              void 0 === n && (n = this.params.speed),
                void 0 === c && (c = !0),
                void 0 === v && (v = 0.5)
              var f = this,
                m = f.activeIndex,
                g = Math.min(f.params.slidesPerGroupSkip, m),
                w = g + Math.floor((m - g) / f.params.slidesPerGroup),
                b = f.rtlTranslate ? f.translate : -f.translate
              if (b >= f.snapGrid[w]) {
                var y = f.snapGrid[w]
                b - y > (f.snapGrid[w + 1] - y) * v &&
                  (m += f.params.slidesPerGroup)
              } else {
                var x = f.snapGrid[w - 1]
                b - x <= (f.snapGrid[w] - x) * v &&
                  (m -= f.params.slidesPerGroup)
              }
              return (
                (m = Math.max(m, 0)),
                (m = Math.min(m, f.slidesGrid.length - 1)),
                f.slideTo(m, n, c, h)
              )
            },
            slideToClickedSlide: function slideToClickedSlide() {
              var n,
                c = this,
                h = c.params,
                v = c.$wrapperEl,
                f =
                  'auto' === h.slidesPerView
                    ? c.slidesPerViewDynamic()
                    : h.slidesPerView,
                m = c.clickedIndex
              if (h.loop) {
                if (c.animating) return
                ;(n = ee()(
                  $(c.clickedSlide).attr('data-swiper-slide-index'),
                  10,
                )),
                  h.centeredSlides
                    ? m < c.loopedSlides - f / 2 ||
                      m > c.slides.length - c.loopedSlides + f / 2
                      ? (c.loopFix(),
                        (m = v
                          .children(
                            '.' +
                              h.slideClass +
                              '[data-swiper-slide-index="' +
                              n +
                              '"]:not(.' +
                              h.slideDuplicateClass +
                              ')',
                          )
                          .eq(0)
                          .index()),
                        nextTick(function () {
                          c.slideTo(m)
                        }))
                      : c.slideTo(m)
                    : m > c.slides.length - f
                    ? (c.loopFix(),
                      (m = v
                        .children(
                          '.' +
                            h.slideClass +
                            '[data-swiper-slide-index="' +
                            n +
                            '"]:not(.' +
                            h.slideDuplicateClass +
                            ')',
                        )
                        .eq(0)
                        .index()),
                      nextTick(function () {
                        c.slideTo(m)
                      }))
                    : c.slideTo(m)
              } else c.slideTo(m)
            },
          },
          loop: {
            loopCreate: function loopCreate() {
              var n = this,
                c = getDocument(),
                h = n.params,
                v = n.$wrapperEl
              v.children(
                '.' + h.slideClass + '.' + h.slideDuplicateClass,
              ).remove()
              var f = v.children('.' + h.slideClass)
              if (h.loopFillGroupWithBlank) {
                var m = h.slidesPerGroup - (f.length % h.slidesPerGroup)
                if (m !== h.slidesPerGroup) {
                  for (var g = 0; g < m; g += 1) {
                    var w = $(c.createElement('div')).addClass(
                      h.slideClass + ' ' + h.slideBlankClass,
                    )
                    v.append(w)
                  }
                  f = v.children('.' + h.slideClass)
                }
              }
              'auto' !== h.slidesPerView ||
                h.loopedSlides ||
                (h.loopedSlides = f.length),
                (n.loopedSlides = Math.ceil(
                  F()(h.loopedSlides || h.slidesPerView, 10),
                )),
                (n.loopedSlides += h.loopAdditionalSlides),
                n.loopedSlides > f.length && (n.loopedSlides = f.length)
              var b = [],
                y = []
              f.each(function (c, h) {
                var v = $(c)
                h < n.loopedSlides && y.push(c),
                  h < f.length && h >= f.length - n.loopedSlides && b.push(c),
                  v.attr('data-swiper-slide-index', h)
              })
              for (var x = 0; x < y.length; x += 1)
                v.append($(y[x].cloneNode(!0)).addClass(h.slideDuplicateClass))
              for (var E = b.length - 1; E >= 0; E -= 1)
                v.prepend($(b[E].cloneNode(!0)).addClass(h.slideDuplicateClass))
            },
            loopFix: function loopFix() {
              var n = this
              n.emit('beforeLoopFix')
              var c,
                h = n.activeIndex,
                v = n.slides,
                f = n.loopedSlides,
                m = n.allowSlidePrev,
                g = n.allowSlideNext,
                w = n.snapGrid,
                b = n.rtlTranslate
              ;(n.allowSlidePrev = !0), (n.allowSlideNext = !0)
              var y = -w[h] - n.getTranslate()
              if (h < f)
                (c = v.length - 3 * f + h),
                  (c += f),
                  n.slideTo(c, 0, !1, !0) &&
                    0 !== y &&
                    n.setTranslate((b ? -n.translate : n.translate) - y)
              else if (h >= v.length - f) {
                ;(c = -v.length + h + f),
                  (c += f),
                  n.slideTo(c, 0, !1, !0) &&
                    0 !== y &&
                    n.setTranslate((b ? -n.translate : n.translate) - y)
              }
              ;(n.allowSlidePrev = m), (n.allowSlideNext = g), n.emit('loopFix')
            },
            loopDestroy: function loopDestroy() {
              var n = this,
                c = n.$wrapperEl,
                h = n.params,
                v = n.slides
              c
                .children(
                  '.' +
                    h.slideClass +
                    '.' +
                    h.slideDuplicateClass +
                    ',.' +
                    h.slideClass +
                    '.' +
                    h.slideBlankClass,
                )
                .remove(),
                v.removeAttr('data-swiper-slide-index')
            },
          },
          grabCursor: {
            setGrabCursor: function setGrabCursor(n) {
              var c = this
              if (
                !(
                  c.support.touch ||
                  !c.params.simulateTouch ||
                  (c.params.watchOverflow && c.isLocked) ||
                  c.params.cssMode
                )
              ) {
                var h = c.el
                ;(h.style.cursor = 'move'),
                  (h.style.cursor = n ? '-webkit-grabbing' : '-webkit-grab'),
                  (h.style.cursor = n ? '-moz-grabbin' : '-moz-grab'),
                  (h.style.cursor = n ? 'grabbing' : 'grab')
              }
            },
            unsetGrabCursor: function unsetGrabCursor() {
              var n = this
              n.support.touch ||
                (n.params.watchOverflow && n.isLocked) ||
                n.params.cssMode ||
                (n.el.style.cursor = '')
            },
          },
          manipulation: {
            appendSlide: function appendSlide(n) {
              var c = this,
                h = c.$wrapperEl,
                v = c.params
              if (
                (v.loop && c.loopDestroy(),
                'object' === Object(m.a)(n) && 'length' in n)
              )
                for (var f = 0; f < n.length; f += 1) n[f] && h.append(n[f])
              else h.append(n)
              v.loop && c.loopCreate(),
                (v.observer && c.support.observer) || c.update()
            },
            prependSlide: function prependSlide(n) {
              var c = this,
                h = c.params,
                v = c.$wrapperEl,
                f = c.activeIndex
              h.loop && c.loopDestroy()
              var g = f + 1
              if ('object' === Object(m.a)(n) && 'length' in n) {
                for (var w = 0; w < n.length; w += 1) n[w] && v.prepend(n[w])
                g = f + n.length
              } else v.prepend(n)
              h.loop && c.loopCreate(),
                (h.observer && c.support.observer) || c.update(),
                c.slideTo(g, 0, !1)
            },
            addSlide: function addSlide(n, c) {
              var h = this,
                v = h.$wrapperEl,
                f = h.params,
                g = h.activeIndex
              f.loop &&
                ((g -= h.loopedSlides),
                h.loopDestroy(),
                (h.slides = v.children('.' + f.slideClass)))
              var w = h.slides.length
              if (n <= 0) h.prependSlide(c)
              else if (n >= w) h.appendSlide(c)
              else {
                for (
                  var b = g > n ? g + 1 : g, y = [], x = w - 1;
                  x >= n;
                  x -= 1
                ) {
                  var E = h.slides.eq(x)
                  E.remove(), y.unshift(E)
                }
                if ('object' === Object(m.a)(c) && 'length' in c) {
                  for (var C = 0; C < c.length; C += 1) c[C] && v.append(c[C])
                  b = g > n ? g + c.length : g
                } else v.append(c)
                for (var S = 0; S < y.length; S += 1) v.append(y[S])
                f.loop && h.loopCreate(),
                  (f.observer && h.support.observer) || h.update(),
                  f.loop
                    ? h.slideTo(b + h.loopedSlides, 0, !1)
                    : h.slideTo(b, 0, !1)
              }
            },
            removeSlide: function removeSlide(n) {
              var c = this,
                h = c.params,
                v = c.$wrapperEl,
                f = c.activeIndex
              h.loop &&
                ((f -= c.loopedSlides),
                c.loopDestroy(),
                (c.slides = v.children('.' + h.slideClass)))
              var g,
                w = f
              if ('object' === Object(m.a)(n) && 'length' in n) {
                for (var b = 0; b < n.length; b += 1)
                  (g = n[b]),
                    c.slides[g] && c.slides.eq(g).remove(),
                    g < w && (w -= 1)
                w = Math.max(w, 0)
              } else
                (g = n),
                  c.slides[g] && c.slides.eq(g).remove(),
                  g < w && (w -= 1),
                  (w = Math.max(w, 0))
              h.loop && c.loopCreate(),
                (h.observer && c.support.observer) || c.update(),
                h.loop
                  ? c.slideTo(w + c.loopedSlides, 0, !1)
                  : c.slideTo(w, 0, !1)
            },
            removeAllSlides: function removeAllSlides() {
              for (var n = [], c = 0; c < this.slides.length; c += 1) n.push(c)
              this.removeSlide(n)
            },
          },
          events: {
            attachEvents: function attachEvents() {
              var n = this,
                c = getDocument(),
                h = n.params,
                v = n.touchEvents,
                f = n.el,
                m = n.wrapperEl,
                g = n.device,
                w = n.support
              ;(n.onTouchStart = onTouchStart.bind(n)),
                (n.onTouchMove = onTouchMove.bind(n)),
                (n.onTouchEnd = onTouchEnd.bind(n)),
                h.cssMode && (n.onScroll = onScroll.bind(n)),
                (n.onClick = onClick.bind(n))
              var b = !!h.nested
              if (!w.touch && w.pointerEvents)
                f.addEventListener(v.start, n.onTouchStart, !1),
                  c.addEventListener(v.move, n.onTouchMove, b),
                  c.addEventListener(v.end, n.onTouchEnd, !1)
              else {
                if (w.touch) {
                  var y = !(
                    'touchstart' !== v.start ||
                    !w.passiveListener ||
                    !h.passiveListeners
                  ) && { passive: !0, capture: !1 }
                  f.addEventListener(v.start, n.onTouchStart, y),
                    f.addEventListener(
                      v.move,
                      n.onTouchMove,
                      w.passiveListener ? { passive: !1, capture: b } : b,
                    ),
                    f.addEventListener(v.end, n.onTouchEnd, y),
                    v.cancel && f.addEventListener(v.cancel, n.onTouchEnd, y),
                    Me ||
                      (c.addEventListener('touchstart', dummyEventListener),
                      (Me = !0))
                }
                ;((h.simulateTouch && !g.ios && !g.android) ||
                  (h.simulateTouch && !w.touch && g.ios)) &&
                  (f.addEventListener('mousedown', n.onTouchStart, !1),
                  c.addEventListener('mousemove', n.onTouchMove, b),
                  c.addEventListener('mouseup', n.onTouchEnd, !1))
              }
              ;(h.preventClicks || h.preventClicksPropagation) &&
                f.addEventListener('click', n.onClick, !0),
                h.cssMode && m.addEventListener('scroll', n.onScroll),
                h.updateOnWindowResize
                  ? n.on(
                      g.ios || g.android
                        ? 'resize orientationchange observerUpdate'
                        : 'resize observerUpdate',
                      onResize,
                      !0,
                    )
                  : n.on('observerUpdate', onResize, !0)
            },
            detachEvents: function detachEvents() {
              var n = this,
                c = getDocument(),
                h = n.params,
                v = n.touchEvents,
                f = n.el,
                m = n.wrapperEl,
                g = n.device,
                w = n.support,
                b = !!h.nested
              if (!w.touch && w.pointerEvents)
                f.removeEventListener(v.start, n.onTouchStart, !1),
                  c.removeEventListener(v.move, n.onTouchMove, b),
                  c.removeEventListener(v.end, n.onTouchEnd, !1)
              else {
                if (w.touch) {
                  var y = !(
                    'onTouchStart' !== v.start ||
                    !w.passiveListener ||
                    !h.passiveListeners
                  ) && { passive: !0, capture: !1 }
                  f.removeEventListener(v.start, n.onTouchStart, y),
                    f.removeEventListener(v.move, n.onTouchMove, b),
                    f.removeEventListener(v.end, n.onTouchEnd, y),
                    v.cancel && f.removeEventListener(v.cancel, n.onTouchEnd, y)
                }
                ;((h.simulateTouch && !g.ios && !g.android) ||
                  (h.simulateTouch && !w.touch && g.ios)) &&
                  (f.removeEventListener('mousedown', n.onTouchStart, !1),
                  c.removeEventListener('mousemove', n.onTouchMove, b),
                  c.removeEventListener('mouseup', n.onTouchEnd, !1))
              }
              ;(h.preventClicks || h.preventClicksPropagation) &&
                f.removeEventListener('click', n.onClick, !0),
                h.cssMode && m.removeEventListener('scroll', n.onScroll),
                n.off(
                  g.ios || g.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  onResize,
                )
            },
          },
          breakpoints: {
            setBreakpoint: function setBreakpoint() {
              var n = this,
                c = n.activeIndex,
                h = n.initialized,
                v = n.loopedSlides,
                f = void 0 === v ? 0 : v,
                m = n.params,
                g = n.$el,
                b = m.breakpoints
              if (b && (!b || 0 !== y()(b).length)) {
                var x = n.getBreakpoint(b, n.params.breakpointsBase, n.el)
                if (x && n.currentBreakpoint !== x) {
                  var E,
                    C = x in b ? b[x] : void 0
                  if (C)
                    w()(
                      (E = [
                        'slidesPerView',
                        'spaceBetween',
                        'slidesPerGroup',
                        'slidesPerGroupSkip',
                        'slidesPerColumn',
                      ]),
                    ).call(E, function (n) {
                      var c = C[n]
                      void 0 !== c &&
                        (C[n] =
                          'slidesPerView' !== n ||
                          ('AUTO' !== c && 'auto' !== c)
                            ? 'slidesPerView' === n
                              ? F()(c)
                              : ee()(c, 10)
                            : 'auto')
                    })
                  var S = C || n.originalParams,
                    A = m.slidesPerColumn > 1,
                    M = S.slidesPerColumn > 1,
                    k = m.enabled
                  A && !M
                    ? (g.removeClass(
                        m.containerModifierClass +
                          'multirow ' +
                          m.containerModifierClass +
                          'multirow-column',
                      ),
                      n.emitContainerClasses())
                    : !A &&
                      M &&
                      (g.addClass(m.containerModifierClass + 'multirow'),
                      'column' === S.slidesPerColumnFill &&
                        g.addClass(
                          m.containerModifierClass + 'multirow-column',
                        ),
                      n.emitContainerClasses())
                  var z = S.direction && S.direction !== m.direction,
                    P = m.loop && (S.slidesPerView !== m.slidesPerView || z)
                  z && h && n.changeDirection(), extend(n.params, S)
                  var L = n.params.enabled
                  extend(n, {
                    allowTouchMove: n.params.allowTouchMove,
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                  }),
                    k && !L ? n.disable() : !k && L && n.enable(),
                    (n.currentBreakpoint = x),
                    n.emit('_beforeBreakpoint', S),
                    P &&
                      h &&
                      (n.loopDestroy(),
                      n.loopCreate(),
                      n.updateSlides(),
                      n.slideTo(c - f + n.loopedSlides, 0, !1)),
                    n.emit('breakpoint', S)
                }
              }
            },
            getBreakpoint: function getBreakpoint(n, c, h) {
              var v
              if (
                (void 0 === c && (c = 'window'), n && ('container' !== c || h))
              ) {
                var f = !1,
                  m = getWindow(),
                  g = 'window' === c ? m.innerHeight : h.clientHeight,
                  w = H()((v = y()(n))).call(v, function (n) {
                    if ('string' == typeof n && 0 === z()(n).call(n, '@')) {
                      var c = F()(n.substr(1))
                      return { value: g * c, point: n }
                    }
                    return { value: n, point: n }
                  })
                ne()(w).call(w, function (n, c) {
                  return ee()(n.value, 10) - ee()(c.value, 10)
                })
                for (var b = 0; b < w.length; b += 1) {
                  var x = w[b],
                    E = x.point,
                    C = x.value
                  'window' === c
                    ? m.matchMedia('(min-width: ' + C + 'px)').matches &&
                      (f = E)
                    : C <= h.clientWidth && (f = E)
                }
                return f || 'max'
              }
            },
          },
          checkOverflow: {
            checkOverflow: function checkOverflow() {
              var n = this,
                c = n.params,
                h = n.isLocked,
                v =
                  n.slides.length > 0 &&
                  c.slidesOffsetBefore +
                    c.spaceBetween * (n.slides.length - 1) +
                    n.slides[0].offsetWidth * n.slides.length
              c.slidesOffsetBefore && c.slidesOffsetAfter && v
                ? (n.isLocked = v <= n.size)
                : (n.isLocked = 1 === n.snapGrid.length),
                (n.allowSlideNext = !n.isLocked),
                (n.allowSlidePrev = !n.isLocked),
                h !== n.isLocked && n.emit(n.isLocked ? 'lock' : 'unlock'),
                h &&
                  h !== n.isLocked &&
                  ((n.isEnd = !1), n.navigation && n.navigation.update())
            },
          },
          classes: {
            addClasses: function addClasses() {
              var n,
                c = this,
                h = c.classNames,
                v = c.params,
                f = c.rtl,
                g = c.$el,
                b = c.device,
                x = c.support,
                E = (function prepareClasses(n, c) {
                  var h = []
                  return (
                    w()(n).call(n, function (n) {
                      var v
                      'object' === Object(m.a)(n)
                        ? w()((v = y()(n))).call(v, function (v) {
                            n[v] && h.push(c + v)
                          })
                        : 'string' == typeof n && h.push(c + n)
                    }),
                    h
                  )
                })(
                  [
                    'initialized',
                    v.direction,
                    { 'pointer-events': x.pointerEvents && !x.touch },
                    { 'free-mode': v.freeMode },
                    { autoheight: v.autoHeight },
                    { rtl: f },
                    { multirow: v.slidesPerColumn > 1 },
                    {
                      'multirow-column':
                        v.slidesPerColumn > 1 &&
                        'column' === v.slidesPerColumnFill,
                    },
                    { android: b.android },
                    { ios: b.ios },
                    { 'css-mode': v.cssMode },
                  ],
                  v.containerModifierClass,
                )
              h.push.apply(h, E),
                g.addClass(
                  B()((n = []))
                    .call(n, h)
                    .join(' '),
                ),
                c.emitContainerClasses()
            },
            removeClasses: function removeClasses() {
              var n = this,
                c = n.$el,
                h = n.classNames
              c.removeClass(h.join(' ')), n.emitContainerClasses()
            },
          },
          images: {
            loadImage: function loadImage(n, c, h, v, f, m) {
              var g,
                w = getWindow()
              function l() {
                m && m()
              }
              $(n).parent('picture')[0] || (n.complete && f)
                ? l()
                : c
                ? (((g = new w.Image()).onload = l),
                  (g.onerror = l),
                  v && (g.sizes = v),
                  h && (g.srcset = h),
                  c && (g.src = c))
                : l()
            },
            preloadImages: function preloadImages() {
              var n,
                c = this
              function t() {
                null != c &&
                  c &&
                  !c.destroyed &&
                  (void 0 !== c.imagesLoaded && (c.imagesLoaded += 1),
                  c.imagesLoaded === c.imagesToLoad.length &&
                    (c.params.updateOnImagesReady && c.update(),
                    c.emit('imagesReady')))
              }
              c.imagesToLoad = re()((n = c.$el)).call(n, 'img')
              for (var h = 0; h < c.imagesToLoad.length; h += 1) {
                var v = c.imagesToLoad[h]
                c.loadImage(
                  v,
                  v.currentSrc || v.getAttribute('src'),
                  v.srcset || v.getAttribute('srcset'),
                  v.sizes || v.getAttribute('sizes'),
                  !0,
                  t,
                )
              }
            },
          },
        },
        ze = {},
        Pe = (function () {
          function e() {
            for (
              var n, c, h, v, f = arguments.length, g = new Array(f), b = 0;
              b < f;
              b++
            )
              g[b] = arguments[b]
            if (
              (1 === g.length &&
              g[0].constructor &&
              'Object' ===
                q()((n = Object.prototype.toString.call(g[0]))).call(n, 8, -1)
                ? (v = g[0])
                : ((h = g[0]), (v = g[1])),
              v || (v = {}),
              (v = extend({}, v)),
              h && !v.el && (v.el = h),
              v.el && $(v.el).length > 1)
            ) {
              var x = []
              return (
                $(v.el).each(function (n) {
                  var c = extend({}, v, { el: n })
                  x.push(new e(c))
                }),
                x
              )
            }
            var E = this
            ;(E.__swiper__ = !0),
              (E.support = getSupport()),
              (E.device = getDevice({ userAgent: v.userAgent })),
              (E.browser = getBrowser()),
              (E.eventsListeners = {}),
              (E.eventsAnyListeners = []),
              void 0 === E.modules && (E.modules = {}),
              w()((c = y()(E.modules))).call(c, function (n) {
                var c = E.modules[n]
                if (c.params) {
                  var h,
                    f = y()(c.params)[0],
                    g = c.params[f]
                  if ('object' !== Object(m.a)(g) || null === g) return
                  if (
                    (z()((h = ['navigation', 'pagination', 'scrollbar'])).call(
                      h,
                      f,
                    ) >= 0 &&
                      !0 === v[f] &&
                      (v[f] = { auto: !0 }),
                    !(f in v) || !('enabled' in g))
                  )
                    return
                  !0 === v[f] && (v[f] = { enabled: !0 }),
                    'object' !== Object(m.a)(v[f]) ||
                      'enabled' in v[f] ||
                      (v[f].enabled = !0),
                    v[f] || (v[f] = { enabled: !1 })
                }
              })
            var C,
              S = extend({}, $e)
            ;(E.useParams(S),
            (E.params = extend({}, S, ze, v)),
            (E.originalParams = extend({}, E.params)),
            (E.passedParams = extend({}, v)),
            E.params && E.params.on) &&
              w()((C = y()(E.params.on))).call(C, function (n) {
                E.on(n, E.params.on[n])
              })
            return (
              E.params && E.params.onAny && E.onAny(E.params.onAny),
              (E.$ = $),
              extend(E, {
                enabled: E.params.enabled,
                el: h,
                classNames: [],
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function e() {
                  return 'horizontal' === E.params.direction
                },
                isVertical: function e() {
                  return 'vertical' === E.params.direction
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: E.params.allowSlideNext,
                allowSlidePrev: E.params.allowSlidePrev,
                touchEvents: (function e() {
                  var n = [
                      'touchstart',
                      'touchmove',
                      'touchend',
                      'touchcancel',
                    ],
                    c = ['mousedown', 'mousemove', 'mouseup']
                  return (
                    E.support.pointerEvents &&
                      (c = ['pointerdown', 'pointermove', 'pointerup']),
                    (E.touchEventsTouch = {
                      start: n[0],
                      move: n[1],
                      end: n[2],
                      cancel: n[3],
                    }),
                    (E.touchEventsDesktop = {
                      start: c[0],
                      move: c[1],
                      end: c[2],
                    }),
                    E.support.touch || !E.params.simulateTouch
                      ? E.touchEventsTouch
                      : E.touchEventsDesktop
                  )
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: E.params.focusableElements,
                  lastClickTime: now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: E.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              E.useModules(),
              E.emit('_swiper'),
              E.params.init && E.init(),
              E
            )
          }
          var n = e.prototype
          return (
            (n.enable = function e() {
              var n = this
              n.enabled ||
                ((n.enabled = !0),
                n.params.grabCursor && n.setGrabCursor(),
                n.emit('enable'))
            }),
            (n.disable = function e() {
              var n = this
              n.enabled &&
                ((n.enabled = !1),
                n.params.grabCursor && n.unsetGrabCursor(),
                n.emit('disable'))
            }),
            (n.setProgress = function e(n, c) {
              var h = this
              n = Math.min(Math.max(n, 0), 1)
              var v = h.minTranslate(),
                f = (h.maxTranslate() - v) * n + v
              h.translateTo(f, void 0 === c ? 0 : c),
                h.updateActiveIndex(),
                h.updateSlidesClasses()
            }),
            (n.emitContainerClasses = function e() {
              var n,
                c = this
              if (c.params._emitClasses && c.el) {
                var h = G()((n = c.el.className.split(' '))).call(
                  n,
                  function (n) {
                    return (
                      0 === z()(n).call(n, 'swiper-container') ||
                      0 === z()(n).call(n, c.params.containerModifierClass)
                    )
                  },
                )
                c.emit('_containerClasses', h.join(' '))
              }
            }),
            (n.getSlideClasses = function e(n) {
              var c,
                h = this
              return G()((c = n.className.split(' ')))
                .call(c, function (n) {
                  return (
                    0 === z()(n).call(n, 'swiper-slide') ||
                    0 === z()(n).call(n, h.params.slideClass)
                  )
                })
                .join(' ')
            }),
            (n.emitSlidesClasses = function e() {
              var n = this
              if (n.params._emitClasses && n.el) {
                var c = []
                n.slides.each(function (h) {
                  var v = n.getSlideClasses(h)
                  c.push({ slideEl: h, classNames: v }),
                    n.emit('_slideClass', h, v)
                }),
                  n.emit('_slideClasses', c)
              }
            }),
            (n.slidesPerViewDynamic = function e() {
              var n = this,
                c = n.params,
                h = n.slides,
                v = n.slidesGrid,
                f = n.size,
                m = n.activeIndex,
                g = 1
              if (c.centeredSlides) {
                for (
                  var w, b = h[m].swiperSlideSize, y = m + 1;
                  y < h.length;
                  y += 1
                )
                  h[y] &&
                    !w &&
                    ((g += 1), (b += h[y].swiperSlideSize) > f && (w = !0))
                for (var x = m - 1; x >= 0; x -= 1)
                  h[x] &&
                    !w &&
                    ((g += 1), (b += h[x].swiperSlideSize) > f && (w = !0))
              } else
                for (var E = m + 1; E < h.length; E += 1)
                  v[E] - v[m] < f && (g += 1)
              return g
            }),
            (n.update = function e() {
              var n = this
              if (n && !n.destroyed) {
                var c = n.snapGrid,
                  h = n.params
                h.breakpoints && n.setBreakpoint(),
                  n.updateSize(),
                  n.updateSlides(),
                  n.updateProgress(),
                  n.updateSlidesClasses(),
                  n.params.freeMode
                    ? (i(), n.params.autoHeight && n.updateAutoHeight())
                    : (('auto' === n.params.slidesPerView ||
                        n.params.slidesPerView > 1) &&
                      n.isEnd &&
                      !n.params.centeredSlides
                        ? n.slideTo(n.slides.length - 1, 0, !1, !0)
                        : n.slideTo(n.activeIndex, 0, !1, !0)) || i(),
                  h.watchOverflow && c !== n.snapGrid && n.checkOverflow(),
                  n.emit('update')
              }
              function i() {
                var c = n.rtlTranslate ? -1 * n.translate : n.translate,
                  h = Math.min(Math.max(c, n.maxTranslate()), n.minTranslate())
                n.setTranslate(h),
                  n.updateActiveIndex(),
                  n.updateSlidesClasses()
              }
            }),
            (n.changeDirection = function e(n, c) {
              void 0 === c && (c = !0)
              var h = this,
                v = h.params.direction
              return (
                n || (n = 'horizontal' === v ? 'vertical' : 'horizontal'),
                n === v ||
                  ('horizontal' !== n && 'vertical' !== n) ||
                  (h.$el
                    .removeClass('' + h.params.containerModifierClass + v)
                    .addClass('' + h.params.containerModifierClass + n),
                  h.emitContainerClasses(),
                  (h.params.direction = n),
                  h.slides.each(function (c) {
                    'vertical' === n
                      ? (c.style.width = '')
                      : (c.style.height = '')
                  }),
                  h.emit('changeDirection'),
                  c && h.update()),
                h
              )
            }),
            (n.mount = function e(n) {
              var c = this
              if (c.mounted) return !0
              var h = $(n || c.params.el)
              if (!(n = h[0])) return !1
              n.swiper = c
              var v = function e() {
                  var n
                  return (
                    '.' +
                    _()((n = c.params.wrapperClass || ''))
                      .call(n)
                      .split(' ')
                      .join('.')
                  )
                },
                f = (function e() {
                  if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                    var c = $(n.shadowRoot.querySelector(v()))
                    return (
                      (c.children = function (n) {
                        return h.children(n)
                      }),
                      c
                    )
                  }
                  return h.children(v())
                })()
              if (0 === f.length && c.params.createElements) {
                var m = getDocument().createElement('div')
                ;(f = $(m)),
                  (m.className = c.params.wrapperClass),
                  h.append(m),
                  h.children('.' + c.params.slideClass).each(function (n) {
                    f.append(n)
                  })
              }
              return (
                extend(c, {
                  $el: h,
                  el: n,
                  $wrapperEl: f,
                  wrapperEl: f[0],
                  mounted: !0,
                  rtl:
                    'rtl' === n.dir.toLowerCase() ||
                    'rtl' === h.css('direction'),
                  rtlTranslate:
                    'horizontal' === c.params.direction &&
                    ('rtl' === n.dir.toLowerCase() ||
                      'rtl' === h.css('direction')),
                  wrongRTL: '-webkit-box' === f.css('display'),
                }),
                !0
              )
            }),
            (n.init = function e(n) {
              var c = this
              return (
                c.initialized ||
                  !1 === c.mount(n) ||
                  (c.emit('beforeInit'),
                  c.params.breakpoints && c.setBreakpoint(),
                  c.addClasses(),
                  c.params.loop && c.loopCreate(),
                  c.updateSize(),
                  c.updateSlides(),
                  c.params.watchOverflow && c.checkOverflow(),
                  c.params.grabCursor && c.enabled && c.setGrabCursor(),
                  c.params.preloadImages && c.preloadImages(),
                  c.params.loop
                    ? c.slideTo(
                        c.params.initialSlide + c.loopedSlides,
                        0,
                        c.params.runCallbacksOnInit,
                        !1,
                        !0,
                      )
                    : c.slideTo(
                        c.params.initialSlide,
                        0,
                        c.params.runCallbacksOnInit,
                        !1,
                        !0,
                      ),
                  c.attachEvents(),
                  (c.initialized = !0),
                  c.emit('init'),
                  c.emit('afterInit')),
                c
              )
            }),
            (n.destroy = function e(n, c) {
              var h
              void 0 === n && (n = !0), void 0 === c && (c = !0)
              var v = this,
                f = v.params,
                m = v.$el,
                g = v.$wrapperEl,
                b = v.slides
              return (
                void 0 === v.params ||
                  v.destroyed ||
                  (v.emit('beforeDestroy'),
                  (v.initialized = !1),
                  v.detachEvents(),
                  f.loop && v.loopDestroy(),
                  c &&
                    (v.removeClasses(),
                    m.removeAttr('style'),
                    g.removeAttr('style'),
                    b &&
                      b.length &&
                      b
                        .removeClass(
                          [
                            f.slideVisibleClass,
                            f.slideActiveClass,
                            f.slideNextClass,
                            f.slidePrevClass,
                          ].join(' '),
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  v.emit('destroy'),
                  w()((h = y()(v.eventsListeners))).call(h, function (n) {
                    v.off(n)
                  }),
                  !1 !== n &&
                    ((v.$el[0].swiper = null),
                    (function deleteProps(n) {
                      var c,
                        h = n
                      w()((c = y()(h))).call(c, function (n) {
                        try {
                          h[n] = null
                        } catch (n) {}
                        try {
                          delete h[n]
                        } catch (n) {}
                      })
                    })(v)),
                  (v.destroyed = !0)),
                null
              )
            }),
            (e.extendDefaults = function e(n) {
              extend(ze, n)
            }),
            (e.installModule = function t(n) {
              e.prototype.modules || (e.prototype.modules = {})
              var c = n.name || y()(e.prototype.modules).length + '_' + now()
              e.prototype.modules[c] = n
            }),
            (e.use = function t(n) {
              return Array.isArray(n)
                ? (w()(n).call(n, function (n) {
                    return e.installModule(n)
                  }),
                  e)
                : (e.installModule(n), e)
            }),
            (function _createClass(n, c, h) {
              return (
                c && _defineProperties(n.prototype, c),
                h && _defineProperties(n, h),
                n
              )
            })(e, null, [
              {
                key: 'extendedDefaults',
                get: function e() {
                  return ze
                },
              },
              {
                key: 'defaults',
                get: function e() {
                  return $e
                },
              },
            ]),
            e
          )
        })()
      function _extends$h() {
        return (_extends$h =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      w()((f = y()(ke))).call(f, function (n) {
        var c
        w()((c = y()(ke[n]))).call(c, function (c) {
          Pe.prototype[c] = ke[n][c]
        })
      }),
        Pe.use([Ce, Ae])
      var Le = {
          update: function e(n) {
            var c,
              h = this,
              v = h.params,
              f = v.slidesPerView,
              m = v.slidesPerGroup,
              g = v.centeredSlides,
              b = h.params.virtual,
              y = b.addSlidesBefore,
              x = b.addSlidesAfter,
              E = h.virtual,
              C = E.from,
              S = E.to,
              A = E.slides,
              M = E.slidesGrid,
              k = E.renderSlide,
              z = E.offset
            h.updateActiveIndex()
            var P,
              L,
              O,
              D = h.activeIndex || 0
            ;(P = h.rtlTranslate ? 'right' : h.isHorizontal() ? 'left' : 'top'),
              g
                ? ((L = Math.floor(f / 2) + m + x),
                  (O = Math.floor(f / 2) + m + y))
                : ((L = f + (m - 1) + x), (O = m + y))
            var I = Math.max((D || 0) - O, 0),
              B = Math.min((D || 0) + L, A.length - 1),
              N = (h.slidesGrid[I] || 0) - (h.slidesGrid[0] || 0)
            function T() {
              h.updateSlides(),
                h.updateProgress(),
                h.updateSlidesClasses(),
                h.lazy && h.params.lazy.enabled && h.lazy.load()
            }
            if (
              (extend(h.virtual, {
                from: I,
                to: B,
                offset: N,
                slidesGrid: h.slidesGrid,
              }),
              C === I && S === B && !n)
            )
              return (
                h.slidesGrid !== M && N !== z && h.slides.css(P, N + 'px'),
                void h.updateProgress()
              )
            if (h.params.virtual.renderExternal)
              return (
                h.params.virtual.renderExternal.call(h, {
                  offset: N,
                  from: I,
                  to: B,
                  slides: (function e() {
                    for (var n = [], c = I; c <= B; c += 1) n.push(A[c])
                    return n
                  })(),
                }),
                void (h.params.virtual.renderExternalUpdate && T())
              )
            var G,
              Y = [],
              _ = []
            if (n)
              re()((G = h.$wrapperEl))
                .call(G, '.' + h.params.slideClass)
                .remove()
            else
              for (var W = C; W <= S; W += 1) {
                var H
                if (W < I || W > B)
                  re()((H = h.$wrapperEl))
                    .call(
                      H,
                      '.' +
                        h.params.slideClass +
                        '[data-swiper-slide-index="' +
                        W +
                        '"]',
                    )
                    .remove()
              }
            for (var R = 0; R < A.length; R += 1)
              R >= I &&
                R <= B &&
                (void 0 === S || n
                  ? _.push(R)
                  : (R > S && _.push(R), R < C && Y.push(R)))
            w()(_).call(_, function (n) {
              h.$wrapperEl.append(k(A[n], n))
            }),
              w()(
                (c = ne()(Y).call(Y, function (n, c) {
                  return c - n
                })),
              ).call(c, function (n) {
                h.$wrapperEl.prepend(k(A[n], n))
              }),
              h.$wrapperEl.children('.swiper-slide').css(P, N + 'px'),
              T()
          },
          renderSlide: function e(n, c) {
            var h = this,
              v = h.params.virtual
            if (v.cache && h.virtual.cache[c]) return h.virtual.cache[c]
            var f = v.renderSlide
              ? $(v.renderSlide.call(h, n, c))
              : $(
                  '<div class="' +
                    h.params.slideClass +
                    '" data-swiper-slide-index="' +
                    c +
                    '">' +
                    n +
                    '</div>',
                )
            return (
              f.attr('data-swiper-slide-index') ||
                f.attr('data-swiper-slide-index', c),
              v.cache && (h.virtual.cache[c] = f),
              f
            )
          },
          appendSlide: function e(n) {
            var c = this
            if ('object' === Object(m.a)(n) && 'length' in n)
              for (var h = 0; h < n.length; h += 1)
                n[h] && c.virtual.slides.push(n[h])
            else c.virtual.slides.push(n)
            c.virtual.update(!0)
          },
          prependSlide: function e(n) {
            var c = this,
              h = c.activeIndex,
              v = h + 1,
              f = 1
            if (Array.isArray(n)) {
              for (var m = 0; m < n.length; m += 1)
                n[m] && c.virtual.slides.unshift(n[m])
              ;(v = h + n.length), (f = n.length)
            } else c.virtual.slides.unshift(n)
            if (c.params.virtual.cache) {
              var g,
                b = c.virtual.cache,
                x = {}
              w()((g = y()(b))).call(g, function (n) {
                var c = b[n],
                  h = c.attr('data-swiper-slide-index')
                h && c.attr('data-swiper-slide-index', ee()(h, 10) + 1),
                  (x[ee()(n, 10) + f] = c)
              }),
                (c.virtual.cache = x)
            }
            c.virtual.update(!0), c.slideTo(v, 0)
          },
          removeSlide: function e(n) {
            var c = this
            if (null != n) {
              var h,
                v = c.activeIndex
              if (Array.isArray(n))
                for (var f = n.length - 1; f >= 0; f -= 1) {
                  var m
                  j()((m = c.virtual.slides)).call(m, n[f], 1),
                    c.params.virtual.cache && delete c.virtual.cache[n[f]],
                    n[f] < v && (v -= 1),
                    (v = Math.max(v, 0))
                }
              else
                j()((h = c.virtual.slides)).call(h, n, 1),
                  c.params.virtual.cache && delete c.virtual.cache[n],
                  n < v && (v -= 1),
                  (v = Math.max(v, 0))
              c.virtual.update(!0), c.slideTo(v, 0)
            }
          },
          removeAllSlides: function e() {
            var n = this
            ;(n.virtual.slides = []),
              n.params.virtual.cache && (n.virtual.cache = {}),
              n.virtual.update(!0),
              n.slideTo(0, 0)
          },
        },
        Oe = {
          name: 'virtual',
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create: function e() {
            bindModuleMethods(this, {
              virtual: _extends$h({}, Le, {
                slides: this.params.virtual.slides,
                cache: {},
              }),
            })
          },
          on: {
            beforeInit: function e(n) {
              if (n.params.virtual.enabled) {
                n.classNames.push(n.params.containerModifierClass + 'virtual')
                var c = { watchSlidesProgress: !0 }
                extend(n.params, c),
                  extend(n.originalParams, c),
                  n.params.initialSlide || n.virtual.update()
              }
            },
            setTranslate: function e(n) {
              n.params.virtual.enabled && n.virtual.update()
            },
          },
        }
      function _extends$g() {
        return (_extends$g =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var De = {
          handle: function e(n) {
            var c = this
            if (c.enabled) {
              var h = getWindow(),
                v = getDocument(),
                f = c.rtlTranslate,
                m = n
              m.originalEvent && (m = m.originalEvent)
              var g = m.keyCode || m.charCode,
                w = c.params.keyboard.pageUpDown,
                b = w && 33 === g,
                y = w && 34 === g,
                x = 37 === g,
                E = 39 === g,
                C = 38 === g,
                S = 40 === g
              if (
                !c.allowSlideNext &&
                ((c.isHorizontal() && E) || (c.isVertical() && S) || y)
              )
                return !1
              if (
                !c.allowSlidePrev &&
                ((c.isHorizontal() && x) || (c.isVertical() && C) || b)
              )
                return !1
              if (
                !(
                  m.shiftKey ||
                  m.altKey ||
                  m.ctrlKey ||
                  m.metaKey ||
                  (v.activeElement &&
                    v.activeElement.nodeName &&
                    ('input' === v.activeElement.nodeName.toLowerCase() ||
                      'textarea' === v.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  c.params.keyboard.onlyInViewport &&
                  (b || y || x || E || C || S)
                ) {
                  var A = !1
                  if (
                    c.$el.parents('.' + c.params.slideClass).length > 0 &&
                    0 === c.$el.parents('.' + c.params.slideActiveClass).length
                  )
                    return
                  var M = c.$el,
                    k = M[0].clientWidth,
                    z = M[0].clientHeight,
                    P = h.innerWidth,
                    L = h.innerHeight,
                    O = c.$el.offset()
                  f && (O.left -= c.$el[0].scrollLeft)
                  for (
                    var D = [
                        [O.left, O.top],
                        [O.left + k, O.top],
                        [O.left, O.top + z],
                        [O.left + k, O.top + z],
                      ],
                      I = 0;
                    I < D.length;
                    I += 1
                  ) {
                    var B = D[I]
                    if (B[0] >= 0 && B[0] <= P && B[1] >= 0 && B[1] <= L) {
                      if (0 === B[0] && 0 === B[1]) continue
                      A = !0
                    }
                  }
                  if (!A) return
                }
                c.isHorizontal()
                  ? ((b || y || x || E) &&
                      (m.preventDefault
                        ? m.preventDefault()
                        : (m.returnValue = !1)),
                    (((y || E) && !f) || ((b || x) && f)) && c.slideNext(),
                    (((b || x) && !f) || ((y || E) && f)) && c.slidePrev())
                  : ((b || y || C || S) &&
                      (m.preventDefault
                        ? m.preventDefault()
                        : (m.returnValue = !1)),
                    (y || S) && c.slideNext(),
                    (b || C) && c.slidePrev()),
                  c.emit('keyPress', g)
              }
            }
          },
          enable: function e() {
            var n = this,
              c = getDocument()
            n.keyboard.enabled ||
              ($(c).on('keydown', n.keyboard.handle), (n.keyboard.enabled = !0))
          },
          disable: function e() {
            var n = this,
              c = getDocument()
            n.keyboard.enabled &&
              ($(c).off('keydown', n.keyboard.handle),
              (n.keyboard.enabled = !1))
          },
        },
        Ie = {
          name: 'keyboard',
          params: {
            keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
          },
          create: function e() {
            bindModuleMethods(this, {
              keyboard: _extends$g({ enabled: !1 }, De),
            })
          },
          on: {
            init: function e(n) {
              n.params.keyboard.enabled && n.keyboard.enable()
            },
            destroy: function e(n) {
              n.keyboard.enabled && n.keyboard.disable()
            },
          },
        }
      var Be = {
        lastScrollTime: now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function e() {
          var n,
            c = getWindow()
          return z()((n = c.navigator.userAgent)).call(n, 'firefox') > -1
            ? 'DOMMouseScroll'
            : (function isEventSupported() {
                var n = getDocument(),
                  c = 'onwheel',
                  h = c in n
                if (!h) {
                  var v = n.createElement('div')
                  v.setAttribute(c, 'return;'), (h = 'function' == typeof v[c])
                }
                return (
                  !h &&
                    n.implementation &&
                    n.implementation.hasFeature &&
                    !0 !== n.implementation.hasFeature('', '') &&
                    (h = n.implementation.hasFeature('Events.wheel', '3.0')),
                  h
                )
              })()
            ? 'wheel'
            : 'mousewheel'
        },
        normalize: function e(n) {
          var c = 0,
            h = 0,
            v = 0,
            f = 0
          return (
            'detail' in n && (h = n.detail),
            'wheelDelta' in n && (h = -n.wheelDelta / 120),
            'wheelDeltaY' in n && (h = -n.wheelDeltaY / 120),
            'wheelDeltaX' in n && (c = -n.wheelDeltaX / 120),
            'axis' in n && n.axis === n.HORIZONTAL_AXIS && ((c = h), (h = 0)),
            (v = 10 * c),
            (f = 10 * h),
            'deltaY' in n && (f = n.deltaY),
            'deltaX' in n && (v = n.deltaX),
            n.shiftKey && !v && ((v = f), (f = 0)),
            (v || f) &&
              n.deltaMode &&
              (1 === n.deltaMode
                ? ((v *= 40), (f *= 40))
                : ((v *= 800), (f *= 800))),
            v && !c && (c = v < 1 ? -1 : 1),
            f && !h && (h = f < 1 ? -1 : 1),
            { spinX: c, spinY: h, pixelX: v, pixelY: f }
          )
        },
        handleMouseEnter: function e() {
          this.enabled && (this.mouseEntered = !0)
        },
        handleMouseLeave: function e() {
          this.enabled && (this.mouseEntered = !1)
        },
        handle: function e(n) {
          var c = n,
            h = this
          if (h.enabled) {
            var v = h.params.mousewheel
            h.params.cssMode && c.preventDefault()
            var f = h.$el
            if (
              ('container' !== h.params.mousewheel.eventsTarget &&
                (f = $(h.params.mousewheel.eventsTarget)),
              !h.mouseEntered && !f[0].contains(c.target) && !v.releaseOnEdges)
            )
              return !0
            c.originalEvent && (c = c.originalEvent)
            var m = 0,
              g = h.rtlTranslate ? -1 : 1,
              w = Be.normalize(c)
            if (v.forceToAxis)
              if (h.isHorizontal()) {
                if (!(Math.abs(w.pixelX) > Math.abs(w.pixelY))) return !0
                m = -w.pixelX * g
              } else {
                if (!(Math.abs(w.pixelY) > Math.abs(w.pixelX))) return !0
                m = -w.pixelY
              }
            else
              m =
                Math.abs(w.pixelX) > Math.abs(w.pixelY)
                  ? -w.pixelX * g
                  : -w.pixelY
            if (0 === m) return !0
            v.invert && (m = -m)
            var b = h.getTranslate() + m * v.sensitivity
            if (
              (b >= h.minTranslate() && (b = h.minTranslate()),
              b <= h.maxTranslate() && (b = h.maxTranslate()),
              (!!h.params.loop ||
                !(b === h.minTranslate() || b === h.maxTranslate())) &&
                h.params.nested &&
                c.stopPropagation(),
              h.params.freeMode)
            ) {
              var y = { time: now(), delta: Math.abs(m), direction: le()(m) },
                x = h.mousewheel.lastEventBeforeSnap,
                E =
                  x &&
                  y.time < x.time + 500 &&
                  y.delta <= x.delta &&
                  y.direction === x.direction
              if (!E) {
                ;(h.mousewheel.lastEventBeforeSnap = void 0),
                  h.params.loop && h.loopFix()
                var C = h.getTranslate() + m * v.sensitivity,
                  S = h.isBeginning,
                  A = h.isEnd
                if (
                  (C >= h.minTranslate() && (C = h.minTranslate()),
                  C <= h.maxTranslate() && (C = h.maxTranslate()),
                  h.setTransition(0),
                  h.setTranslate(C),
                  h.updateProgress(),
                  h.updateActiveIndex(),
                  h.updateSlidesClasses(),
                  ((!S && h.isBeginning) || (!A && h.isEnd)) &&
                    h.updateSlidesClasses(),
                  h.params.freeModeSticky)
                ) {
                  clearTimeout(h.mousewheel.timeout),
                    (h.mousewheel.timeout = void 0)
                  var M = h.mousewheel.recentWheelEvents
                  M.length >= 15 && M.shift()
                  var k = M.length ? M[M.length - 1] : void 0,
                    z = M[0]
                  if (
                    (M.push(y),
                    k && (y.delta > k.delta || y.direction !== k.direction))
                  )
                    j()(M).call(M, 0)
                  else if (
                    M.length >= 15 &&
                    y.time - z.time < 500 &&
                    z.delta - y.delta >= 1 &&
                    y.delta <= 6
                  ) {
                    var P = m > 0 ? 0.8 : 0.2
                    ;(h.mousewheel.lastEventBeforeSnap = y),
                      j()(M).call(M, 0),
                      (h.mousewheel.timeout = nextTick(function () {
                        h.slideToClosest(h.params.speed, !0, void 0, P)
                      }, 0))
                  }
                  h.mousewheel.timeout ||
                    (h.mousewheel.timeout = nextTick(function () {
                      ;(h.mousewheel.lastEventBeforeSnap = y),
                        j()(M).call(M, 0),
                        h.slideToClosest(h.params.speed, !0, void 0, 0.5)
                    }, 500))
                }
                if (
                  (E || h.emit('scroll', c),
                  h.params.autoplay &&
                    h.params.autoplayDisableOnInteraction &&
                    h.autoplay.stop(),
                  C === h.minTranslate() || C === h.maxTranslate())
                )
                  return !0
              }
            } else {
              var L = {
                  time: now(),
                  delta: Math.abs(m),
                  direction: le()(m),
                  raw: n,
                },
                O = h.mousewheel.recentWheelEvents
              O.length >= 2 && O.shift()
              var D = O.length ? O[O.length - 1] : void 0
              if (
                (O.push(L),
                D
                  ? (L.direction !== D.direction ||
                      L.delta > D.delta ||
                      L.time > D.time + 150) &&
                    h.mousewheel.animateSlider(L)
                  : h.mousewheel.animateSlider(L),
                h.mousewheel.releaseScroll(L))
              )
                return !0
            }
            return (
              c.preventDefault ? c.preventDefault() : (c.returnValue = !1), !1
            )
          }
        },
        animateSlider: function e(n) {
          var c = this,
            h = getWindow()
          return (
            !(
              this.params.mousewheel.thresholdDelta &&
              n.delta < this.params.mousewheel.thresholdDelta
            ) &&
            !(
              this.params.mousewheel.thresholdTime &&
              now() - c.mousewheel.lastScrollTime <
                this.params.mousewheel.thresholdTime
            ) &&
            ((n.delta >= 6 && now() - c.mousewheel.lastScrollTime < 60) ||
              (n.direction < 0
                ? (c.isEnd && !c.params.loop) ||
                  c.animating ||
                  (c.slideNext(), c.emit('scroll', n.raw))
                : (c.isBeginning && !c.params.loop) ||
                  c.animating ||
                  (c.slidePrev(), c.emit('scroll', n.raw)),
              (c.mousewheel.lastScrollTime = new h.Date().getTime()),
              !1))
          )
        },
        releaseScroll: function e(n) {
          var c = this,
            h = c.params.mousewheel
          if (n.direction < 0) {
            if (c.isEnd && !c.params.loop && h.releaseOnEdges) return !0
          } else if (c.isBeginning && !c.params.loop && h.releaseOnEdges)
            return !0
          return !1
        },
        enable: function e() {
          var n = this,
            c = Be.event()
          if (n.params.cssMode)
            return n.wrapperEl.removeEventListener(c, n.mousewheel.handle), !0
          if (!c) return !1
          if (n.mousewheel.enabled) return !1
          var h = n.$el
          return (
            'container' !== n.params.mousewheel.eventsTarget &&
              (h = $(n.params.mousewheel.eventsTarget)),
            h.on('mouseenter', n.mousewheel.handleMouseEnter),
            h.on('mouseleave', n.mousewheel.handleMouseLeave),
            h.on(c, n.mousewheel.handle),
            (n.mousewheel.enabled = !0),
            !0
          )
        },
        disable: function e() {
          var n = this,
            c = Be.event()
          if (n.params.cssMode)
            return n.wrapperEl.addEventListener(c, n.mousewheel.handle), !0
          if (!c) return !1
          if (!n.mousewheel.enabled) return !1
          var h = n.$el
          return (
            'container' !== n.params.mousewheel.eventsTarget &&
              (h = $(n.params.mousewheel.eventsTarget)),
            h.off(c, n.mousewheel.handle),
            (n.mousewheel.enabled = !1),
            !0
          )
        },
      }
      function _extends$f() {
        return (_extends$f =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ne = {
        toggleEl: function e(n, c) {
          n[c ? 'addClass' : 'removeClass'](
            this.params.navigation.disabledClass,
          ),
            n[0] && 'BUTTON' === n[0].tagName && (n[0].disabled = c)
        },
        update: function e() {
          var n = this,
            c = n.params.navigation,
            h = n.navigation.toggleEl
          if (!n.params.loop) {
            var v = n.navigation,
              f = v.$nextEl,
              m = v.$prevEl
            m &&
              m.length > 0 &&
              (n.isBeginning ? h(m, !0) : h(m, !1),
              n.params.watchOverflow &&
                n.enabled &&
                m[n.isLocked ? 'addClass' : 'removeClass'](c.lockClass)),
              f &&
                f.length > 0 &&
                (n.isEnd ? h(f, !0) : h(f, !1),
                n.params.watchOverflow &&
                  n.enabled &&
                  f[n.isLocked ? 'addClass' : 'removeClass'](c.lockClass))
          }
        },
        onPrevClick: function e(n) {
          var c = this
          n.preventDefault(), (c.isBeginning && !c.params.loop) || c.slidePrev()
        },
        onNextClick: function e(n) {
          var c = this
          n.preventDefault(), (c.isEnd && !c.params.loop) || c.slideNext()
        },
        init: function e() {
          var n = this,
            c = n.params.navigation
          if (
            ((n.params.navigation = createElementIfNotDefined(
              n.$el,
              n.params.navigation,
              n.params.createElements,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
            )),
            c.nextEl || c.prevEl)
          ) {
            var h, v, f, m, g, w
            if (c.nextEl)
              if (
                ((h = $(c.nextEl)),
                n.params.uniqueNavElements &&
                  'string' == typeof c.nextEl &&
                  h.length > 1 &&
                  1 === re()((f = n.$el)).call(f, c.nextEl).length)
              )
                h = re()((m = n.$el)).call(m, c.nextEl)
            if (c.prevEl)
              if (
                ((v = $(c.prevEl)),
                n.params.uniqueNavElements &&
                  'string' == typeof c.prevEl &&
                  v.length > 1 &&
                  1 === re()((g = n.$el)).call(g, c.prevEl).length)
              )
                v = re()((w = n.$el)).call(w, c.prevEl)
            h && h.length > 0 && h.on('click', n.navigation.onNextClick),
              v && v.length > 0 && v.on('click', n.navigation.onPrevClick),
              extend(n.navigation, {
                $nextEl: h,
                nextEl: h && h[0],
                $prevEl: v,
                prevEl: v && v[0],
              }),
              n.enabled ||
                (h && h.addClass(c.lockClass), v && v.addClass(c.lockClass))
          }
        },
        destroy: function e() {
          var n = this,
            c = n.navigation,
            h = c.$nextEl,
            v = c.$prevEl
          h &&
            h.length &&
            (h.off('click', n.navigation.onNextClick),
            h.removeClass(n.params.navigation.disabledClass)),
            v &&
              v.length &&
              (v.off('click', n.navigation.onPrevClick),
              v.removeClass(n.params.navigation.disabledClass))
        },
      }
      function _extends$e() {
        return (_extends$e =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ge = {
        update: function e() {
          var n = this,
            c = n.rtl,
            h = n.params.pagination
          if (
            h.el &&
            n.pagination.el &&
            n.pagination.$el &&
            0 !== n.pagination.$el.length
          ) {
            var v,
              f =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              m = n.pagination.$el,
              g = n.params.loop
                ? Math.ceil((f - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length
            if (
              (n.params.loop
                ? ((v = Math.ceil(
                    (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup,
                  )) >
                    f - 1 - 2 * n.loopedSlides && (v -= f - 2 * n.loopedSlides),
                  v > g - 1 && (v -= g),
                  v < 0 && 'bullets' !== n.params.paginationType && (v = g + v))
                : (v =
                    void 0 !== n.snapIndex ? n.snapIndex : n.activeIndex || 0),
              'bullets' === h.type &&
                n.pagination.bullets &&
                n.pagination.bullets.length > 0)
            ) {
              var w,
                b,
                y,
                x = n.pagination.bullets
              if (
                (h.dynamicBullets &&
                  ((n.pagination.bulletSize = x
                    .eq(0)
                    [n.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  m.css(
                    n.isHorizontal() ? 'width' : 'height',
                    n.pagination.bulletSize * (h.dynamicMainBullets + 4) + 'px',
                  ),
                  h.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((n.pagination.dynamicBulletIndex += v - n.previousIndex),
                    n.pagination.dynamicBulletIndex > h.dynamicMainBullets - 1
                      ? (n.pagination.dynamicBulletIndex =
                          h.dynamicMainBullets - 1)
                      : n.pagination.dynamicBulletIndex < 0 &&
                        (n.pagination.dynamicBulletIndex = 0)),
                  (w = v - n.pagination.dynamicBulletIndex),
                  (y =
                    ((b = w + (Math.min(x.length, h.dynamicMainBullets) - 1)) +
                      w) /
                    2)),
                x.removeClass(
                  h.bulletActiveClass +
                    ' ' +
                    h.bulletActiveClass +
                    '-next ' +
                    h.bulletActiveClass +
                    '-next-next ' +
                    h.bulletActiveClass +
                    '-prev ' +
                    h.bulletActiveClass +
                    '-prev-prev ' +
                    h.bulletActiveClass +
                    '-main',
                ),
                m.length > 1)
              )
                x.each(function (n) {
                  var c = $(n),
                    f = c.index()
                  f === v && c.addClass(h.bulletActiveClass),
                    h.dynamicBullets &&
                      (f >= w &&
                        f <= b &&
                        c.addClass(h.bulletActiveClass + '-main'),
                      f === w &&
                        c
                          .prev()
                          .addClass(h.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(h.bulletActiveClass + '-prev-prev'),
                      f === b &&
                        c
                          .next()
                          .addClass(h.bulletActiveClass + '-next')
                          .next()
                          .addClass(h.bulletActiveClass + '-next-next'))
                })
              else {
                var E = x.eq(v),
                  C = E.index()
                if ((E.addClass(h.bulletActiveClass), h.dynamicBullets)) {
                  for (var S = x.eq(w), A = x.eq(b), M = w; M <= b; M += 1)
                    x.eq(M).addClass(h.bulletActiveClass + '-main')
                  if (n.params.loop)
                    if (C >= x.length - h.dynamicMainBullets) {
                      for (var k = h.dynamicMainBullets; k >= 0; k -= 1)
                        x.eq(x.length - k).addClass(
                          h.bulletActiveClass + '-main',
                        )
                      x.eq(x.length - h.dynamicMainBullets - 1).addClass(
                        h.bulletActiveClass + '-prev',
                      )
                    } else
                      S.prev()
                        .addClass(h.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(h.bulletActiveClass + '-prev-prev'),
                        A.next()
                          .addClass(h.bulletActiveClass + '-next')
                          .next()
                          .addClass(h.bulletActiveClass + '-next-next')
                  else
                    S.prev()
                      .addClass(h.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(h.bulletActiveClass + '-prev-prev'),
                      A.next()
                        .addClass(h.bulletActiveClass + '-next')
                        .next()
                        .addClass(h.bulletActiveClass + '-next-next')
                }
              }
              if (h.dynamicBullets) {
                var z = Math.min(x.length, h.dynamicMainBullets + 4),
                  P =
                    (n.pagination.bulletSize * z - n.pagination.bulletSize) /
                      2 -
                    y * n.pagination.bulletSize,
                  L = c ? 'right' : 'left'
                x.css(n.isHorizontal() ? L : 'top', P + 'px')
              }
            }
            if (
              ('fraction' === h.type &&
                (re()(m)
                  .call(m, classesToSelector(h.currentClass))
                  .text(h.formatFractionCurrent(v + 1)),
                re()(m)
                  .call(m, classesToSelector(h.totalClass))
                  .text(h.formatFractionTotal(g))),
              'progressbar' === h.type)
            ) {
              var O
              O = h.progressbarOpposite
                ? n.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : n.isHorizontal()
                ? 'horizontal'
                : 'vertical'
              var D = (v + 1) / g,
                I = 1,
                B = 1
              'horizontal' === O ? (I = D) : (B = D),
                re()(m)
                  .call(m, classesToSelector(h.progressbarFillClass))
                  .transform(
                    'translate3d(0,0,0) scaleX(' + I + ') scaleY(' + B + ')',
                  )
                  .transition(n.params.speed)
            }
            'custom' === h.type && h.renderCustom
              ? (m.html(h.renderCustom(n, v + 1, g)),
                n.emit('paginationRender', m[0]))
              : n.emit('paginationUpdate', m[0]),
              n.params.watchOverflow &&
                n.enabled &&
                m[n.isLocked ? 'addClass' : 'removeClass'](h.lockClass)
          }
        },
        render: function e() {
          var n = this,
            c = n.params.pagination
          if (
            c.el &&
            n.pagination.el &&
            n.pagination.$el &&
            0 !== n.pagination.$el.length
          ) {
            var h =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              v = n.pagination.$el,
              f = ''
            if ('bullets' === c.type) {
              var m = n.params.loop
                ? Math.ceil((h - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length
              n.params.freeMode && !n.params.loop && m > h && (m = h)
              for (var g = 0; g < m; g += 1)
                c.renderBullet
                  ? (f += c.renderBullet.call(n, g, c.bulletClass))
                  : (f +=
                      '<' +
                      c.bulletElement +
                      ' class="' +
                      c.bulletClass +
                      '"></' +
                      c.bulletElement +
                      '>')
              v.html(f),
                (n.pagination.bullets = re()(v).call(
                  v,
                  classesToSelector(c.bulletClass),
                ))
            }
            'fraction' === c.type &&
              ((f = c.renderFraction
                ? c.renderFraction.call(n, c.currentClass, c.totalClass)
                : '<span class="' +
                  c.currentClass +
                  '"></span> / <span class="' +
                  c.totalClass +
                  '"></span>'),
              v.html(f)),
              'progressbar' === c.type &&
                ((f = c.renderProgressbar
                  ? c.renderProgressbar.call(n, c.progressbarFillClass)
                  : '<span class="' + c.progressbarFillClass + '"></span>'),
                v.html(f)),
              'custom' !== c.type &&
                n.emit('paginationRender', n.pagination.$el[0])
          }
        },
        init: function e() {
          var n = this
          n.params.pagination = createElementIfNotDefined(
            n.$el,
            n.params.pagination,
            n.params.createElements,
            { el: 'swiper-pagination' },
          )
          var c = n.params.pagination
          if (c.el) {
            var h = $(c.el)
            if (0 !== h.length) {
              var v
              if (
                n.params.uniqueNavElements &&
                'string' == typeof c.el &&
                h.length > 1
              )
                h = re()((v = n.$el)).call(v, c.el)
              'bullets' === c.type &&
                c.clickable &&
                h.addClass(c.clickableClass),
                h.addClass(c.modifierClass + c.type),
                'bullets' === c.type &&
                  c.dynamicBullets &&
                  (h.addClass('' + c.modifierClass + c.type + '-dynamic'),
                  (n.pagination.dynamicBulletIndex = 0),
                  c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
                'progressbar' === c.type &&
                  c.progressbarOpposite &&
                  h.addClass(c.progressbarOppositeClass),
                c.clickable &&
                  h.on(
                    'click',
                    classesToSelector(c.bulletClass),
                    function e(c) {
                      c.preventDefault()
                      var h = $(this).index() * n.params.slidesPerGroup
                      n.params.loop && (h += n.loopedSlides), n.slideTo(h)
                    },
                  ),
                extend(n.pagination, { $el: h, el: h[0] }),
                n.enabled || h.addClass(c.lockClass)
            }
          }
        },
        destroy: function e() {
          var n = this,
            c = n.params.pagination
          if (
            c.el &&
            n.pagination.el &&
            n.pagination.$el &&
            0 !== n.pagination.$el.length
          ) {
            var h = n.pagination.$el
            h.removeClass(c.hiddenClass),
              h.removeClass(c.modifierClass + c.type),
              n.pagination.bullets &&
                n.pagination.bullets.removeClass(c.bulletActiveClass),
              c.clickable && h.off('click', classesToSelector(c.bulletClass))
          }
        },
      }
      function _extends$d() {
        return (_extends$d =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ye = {
        setTranslate: function e() {
          var n = this
          if (n.params.scrollbar.el && n.scrollbar.el) {
            var c = n.scrollbar,
              h = n.rtlTranslate,
              v = n.progress,
              f = c.dragSize,
              m = c.trackSize,
              g = c.$dragEl,
              w = c.$el,
              b = n.params.scrollbar,
              y = f,
              x = (m - f) * v
            h
              ? (x = -x) > 0
                ? ((y = f - x), (x = 0))
                : -x + f > m && (y = m + x)
              : x < 0
              ? ((y = f + x), (x = 0))
              : x + f > m && (y = m - x),
              n.isHorizontal()
                ? (g.transform('translate3d(' + x + 'px, 0, 0)'),
                  (g[0].style.width = y + 'px'))
                : (g.transform('translate3d(0px, ' + x + 'px, 0)'),
                  (g[0].style.height = y + 'px')),
              b.hide &&
                (clearTimeout(n.scrollbar.timeout),
                (w[0].style.opacity = 1),
                (n.scrollbar.timeout = setTimeout(function () {
                  ;(w[0].style.opacity = 0), w.transition(400)
                }, 1e3)))
          }
        },
        setTransition: function e(n) {
          var c = this
          c.params.scrollbar.el &&
            c.scrollbar.el &&
            c.scrollbar.$dragEl.transition(n)
        },
        updateSize: function e() {
          var n = this
          if (n.params.scrollbar.el && n.scrollbar.el) {
            var c = n.scrollbar,
              h = c.$dragEl,
              v = c.$el
            ;(h[0].style.width = ''), (h[0].style.height = '')
            var f,
              m = n.isHorizontal() ? v[0].offsetWidth : v[0].offsetHeight,
              g = n.size / n.virtualSize,
              w = g * (m / n.size)
            ;(f =
              'auto' === n.params.scrollbar.dragSize
                ? m * g
                : ee()(n.params.scrollbar.dragSize, 10)),
              n.isHorizontal()
                ? (h[0].style.width = f + 'px')
                : (h[0].style.height = f + 'px'),
              (v[0].style.display = g >= 1 ? 'none' : ''),
              n.params.scrollbar.hide && (v[0].style.opacity = 0),
              extend(c, {
                trackSize: m,
                divider: g,
                moveDivider: w,
                dragSize: f,
              }),
              n.params.watchOverflow &&
                n.enabled &&
                c.$el[n.isLocked ? 'addClass' : 'removeClass'](
                  n.params.scrollbar.lockClass,
                )
          }
        },
        getPointerPosition: function e(n) {
          return this.isHorizontal()
            ? 'touchstart' === n.type || 'touchmove' === n.type
              ? n.targetTouches[0].clientX
              : n.clientX
            : 'touchstart' === n.type || 'touchmove' === n.type
            ? n.targetTouches[0].clientY
            : n.clientY
        },
        setDragPosition: function e(n) {
          var c,
            h = this,
            v = h.scrollbar,
            f = h.rtlTranslate,
            m = v.$el,
            g = v.dragSize,
            w = v.trackSize,
            b = v.dragStartPos
          ;(c =
            (v.getPointerPosition(n) -
              m.offset()[h.isHorizontal() ? 'left' : 'top'] -
              (null !== b ? b : g / 2)) /
            (w - g)),
            (c = Math.max(Math.min(c, 1), 0)),
            f && (c = 1 - c)
          var y = h.minTranslate() + (h.maxTranslate() - h.minTranslate()) * c
          h.updateProgress(y),
            h.setTranslate(y),
            h.updateActiveIndex(),
            h.updateSlidesClasses()
        },
        onDragStart: function e(n) {
          var c = this,
            h = c.params.scrollbar,
            v = c.scrollbar,
            f = c.$wrapperEl,
            m = v.$el,
            g = v.$dragEl
          ;(c.scrollbar.isTouched = !0),
            (c.scrollbar.dragStartPos =
              n.target === g[0] || n.target === g
                ? v.getPointerPosition(n) -
                  n.target.getBoundingClientRect()[
                    c.isHorizontal() ? 'left' : 'top'
                  ]
                : null),
            n.preventDefault(),
            n.stopPropagation(),
            f.transition(100),
            g.transition(100),
            v.setDragPosition(n),
            clearTimeout(c.scrollbar.dragTimeout),
            m.transition(0),
            h.hide && m.css('opacity', 1),
            c.params.cssMode && c.$wrapperEl.css('scroll-snap-type', 'none'),
            c.emit('scrollbarDragStart', n)
        },
        onDragMove: function e(n) {
          var c = this,
            h = c.scrollbar,
            v = c.$wrapperEl,
            f = h.$el,
            m = h.$dragEl
          c.scrollbar.isTouched &&
            (n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
            h.setDragPosition(n),
            v.transition(0),
            f.transition(0),
            m.transition(0),
            c.emit('scrollbarDragMove', n))
        },
        onDragEnd: function e(n) {
          var c = this,
            h = c.params.scrollbar,
            v = c.scrollbar,
            f = c.$wrapperEl,
            m = v.$el
          c.scrollbar.isTouched &&
            ((c.scrollbar.isTouched = !1),
            c.params.cssMode &&
              (c.$wrapperEl.css('scroll-snap-type', ''), f.transition('')),
            h.hide &&
              (clearTimeout(c.scrollbar.dragTimeout),
              (c.scrollbar.dragTimeout = nextTick(function () {
                m.css('opacity', 0), m.transition(400)
              }, 1e3))),
            c.emit('scrollbarDragEnd', n),
            h.snapOnRelease && c.slideToClosest())
        },
        enableDraggable: function e() {
          var n = this
          if (n.params.scrollbar.el) {
            var c = getDocument(),
              h = n.scrollbar,
              v = n.touchEventsTouch,
              f = n.touchEventsDesktop,
              m = n.params,
              g = n.support,
              w = h.$el[0],
              b = !(!g.passiveListener || !m.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              y = !(!g.passiveListener || !m.passiveListeners) && {
                passive: !0,
                capture: !1,
              }
            w &&
              (g.touch
                ? (w.addEventListener(v.start, n.scrollbar.onDragStart, b),
                  w.addEventListener(v.move, n.scrollbar.onDragMove, b),
                  w.addEventListener(v.end, n.scrollbar.onDragEnd, y))
                : (w.addEventListener(f.start, n.scrollbar.onDragStart, b),
                  c.addEventListener(f.move, n.scrollbar.onDragMove, b),
                  c.addEventListener(f.end, n.scrollbar.onDragEnd, y)))
          }
        },
        disableDraggable: function e() {
          var n = this
          if (n.params.scrollbar.el) {
            var c = getDocument(),
              h = n.scrollbar,
              v = n.touchEventsTouch,
              f = n.touchEventsDesktop,
              m = n.params,
              g = n.support,
              w = h.$el[0],
              b = !(!g.passiveListener || !m.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              y = !(!g.passiveListener || !m.passiveListeners) && {
                passive: !0,
                capture: !1,
              }
            w &&
              (g.touch
                ? (w.removeEventListener(v.start, n.scrollbar.onDragStart, b),
                  w.removeEventListener(v.move, n.scrollbar.onDragMove, b),
                  w.removeEventListener(v.end, n.scrollbar.onDragEnd, y))
                : (w.removeEventListener(f.start, n.scrollbar.onDragStart, b),
                  c.removeEventListener(f.move, n.scrollbar.onDragMove, b),
                  c.removeEventListener(f.end, n.scrollbar.onDragEnd, y)))
          }
        },
        init: function e() {
          var n = this,
            c = n.scrollbar,
            h = n.$el
          n.params.scrollbar = createElementIfNotDefined(
            h,
            n.params.scrollbar,
            n.params.createElements,
            { el: 'swiper-scrollbar' },
          )
          var v = n.params.scrollbar
          if (v.el) {
            var f = $(v.el)
            n.params.uniqueNavElements &&
              'string' == typeof v.el &&
              f.length > 1 &&
              1 === re()(h).call(h, v.el).length &&
              (f = re()(h).call(h, v.el))
            var m = re()(f).call(f, '.' + n.params.scrollbar.dragClass)
            0 === m.length &&
              ((m = $(
                '<div class="' + n.params.scrollbar.dragClass + '"></div>',
              )),
              f.append(m)),
              extend(c, { $el: f, el: f[0], $dragEl: m, dragEl: m[0] }),
              v.draggable && c.enableDraggable(),
              f &&
                f[n.enabled ? 'removeClass' : 'addClass'](
                  n.params.scrollbar.lockClass,
                )
          }
        },
        destroy: function e() {
          this.scrollbar.disableDraggable()
        },
      }
      function _extends$c() {
        return (_extends$c =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var _e = {
        setTransform: function e(n, c) {
          var h = this.rtl,
            v = $(n),
            f = h ? -1 : 1,
            m = v.attr('data-swiper-parallax') || '0',
            g = v.attr('data-swiper-parallax-x'),
            w = v.attr('data-swiper-parallax-y'),
            b = v.attr('data-swiper-parallax-scale'),
            y = v.attr('data-swiper-parallax-opacity')
          if (
            (g || w
              ? ((g = g || '0'), (w = w || '0'))
              : this.isHorizontal()
              ? ((g = m), (w = '0'))
              : ((w = m), (g = '0')),
            (g =
              z()(g).call(g, '%') >= 0
                ? ee()(g, 10) * c * f + '%'
                : g * c * f + 'px'),
            (w =
              z()(w).call(w, '%') >= 0 ? ee()(w, 10) * c + '%' : w * c + 'px'),
            null != y)
          ) {
            var x = y - (y - 1) * (1 - Math.abs(c))
            v[0].style.opacity = x
          }
          if (null == b) v.transform('translate3d(' + g + ', ' + w + ', 0px)')
          else {
            var E = b - (b - 1) * (1 - Math.abs(c))
            v.transform(
              'translate3d(' + g + ', ' + w + ', 0px) scale(' + E + ')',
            )
          }
        },
        setTranslate: function e() {
          var n = this,
            c = n.$el,
            h = n.slides,
            v = n.progress,
            f = n.snapGrid
          c
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
            )
            .each(function (c) {
              n.parallax.setTransform(c, v)
            }),
            h.each(function (c, h) {
              var m,
                g = c.progress
              n.params.slidesPerGroup > 1 &&
                'auto' !== n.params.slidesPerView &&
                (g += Math.ceil(h / 2) - v * (f.length - 1)),
                (g = Math.min(Math.max(g, -1), 1)),
                re()((m = $(c)))
                  .call(
                    m,
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                  )
                  .each(function (c) {
                    n.parallax.setTransform(c, g)
                  })
            })
        },
        setTransition: function e(n) {
          void 0 === n && (n = this.params.speed)
          var c = this.$el
          re()(c)
            .call(
              c,
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
            )
            .each(function (c) {
              var h = $(c),
                v = ee()(h.attr('data-swiper-parallax-duration'), 10) || n
              0 === n && (v = 0), h.transition(v)
            })
        },
      }
      function _extends$b() {
        return (_extends$b =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var We = {
        getDistanceBetweenTouches: function e(n) {
          if (n.targetTouches.length < 2) return 1
          var c = n.targetTouches[0].pageX,
            h = n.targetTouches[0].pageY,
            v = n.targetTouches[1].pageX,
            f = n.targetTouches[1].pageY
          return Math.sqrt(Math.pow(v - c, 2) + Math.pow(f - h, 2))
        },
        onGestureStart: function e(n) {
          var c,
            h = this,
            v = h.support,
            f = h.params.zoom,
            m = h.zoom,
            g = m.gesture
          if (
            ((m.fakeGestureTouched = !1),
            (m.fakeGestureMoved = !1),
            !v.gestures)
          ) {
            if (
              'touchstart' !== n.type ||
              ('touchstart' === n.type && n.targetTouches.length < 2)
            )
              return
            ;(m.fakeGestureTouched = !0),
              (g.scaleStart = We.getDistanceBetweenTouches(n))
          }
          if (
            (!g.$slideEl || !g.$slideEl.length) &&
            ((g.$slideEl = $(n.target).closest('.' + h.params.slideClass)),
            0 === g.$slideEl.length &&
              (g.$slideEl = h.slides.eq(h.activeIndex)),
            (g.$imageEl = re()((c = g.$slideEl)).call(
              c,
              'img, svg, canvas, picture, .swiper-zoom-target',
            )),
            (g.$imageWrapEl = g.$imageEl.parent('.' + f.containerClass)),
            (g.maxRatio =
              g.$imageWrapEl.attr('data-swiper-zoom') || f.maxRatio),
            0 === g.$imageWrapEl.length)
          )
            return void (g.$imageEl = void 0)
          g.$imageEl && g.$imageEl.transition(0), (h.zoom.isScaling = !0)
        },
        onGestureChange: function e(n) {
          var c = this,
            h = c.support,
            v = c.params.zoom,
            f = c.zoom,
            m = f.gesture
          if (!h.gestures) {
            if (
              'touchmove' !== n.type ||
              ('touchmove' === n.type && n.targetTouches.length < 2)
            )
              return
            ;(f.fakeGestureMoved = !0),
              (m.scaleMove = We.getDistanceBetweenTouches(n))
          }
          m.$imageEl && 0 !== m.$imageEl.length
            ? (h.gestures
                ? (f.scale = n.scale * f.currentScale)
                : (f.scale = (m.scaleMove / m.scaleStart) * f.currentScale),
              f.scale > m.maxRatio &&
                (f.scale =
                  m.maxRatio - 1 + Math.pow(f.scale - m.maxRatio + 1, 0.5)),
              f.scale < v.minRatio &&
                (f.scale =
                  v.minRatio + 1 - Math.pow(v.minRatio - f.scale + 1, 0.5)),
              m.$imageEl.transform('translate3d(0,0,0) scale(' + f.scale + ')'))
            : 'gesturechange' === n.type && f.onGestureStart(n)
        },
        onGestureEnd: function e(n) {
          var c = this,
            h = c.device,
            v = c.support,
            f = c.params.zoom,
            m = c.zoom,
            g = m.gesture
          if (!v.gestures) {
            if (!m.fakeGestureTouched || !m.fakeGestureMoved) return
            if (
              'touchend' !== n.type ||
              ('touchend' === n.type &&
                n.changedTouches.length < 2 &&
                !h.android)
            )
              return
            ;(m.fakeGestureTouched = !1), (m.fakeGestureMoved = !1)
          }
          g.$imageEl &&
            0 !== g.$imageEl.length &&
            ((m.scale = Math.max(Math.min(m.scale, g.maxRatio), f.minRatio)),
            g.$imageEl
              .transition(c.params.speed)
              .transform('translate3d(0,0,0) scale(' + m.scale + ')'),
            (m.currentScale = m.scale),
            (m.isScaling = !1),
            1 === m.scale && (g.$slideEl = void 0))
        },
        onTouchStart: function e(n) {
          var c = this.device,
            h = this.zoom,
            v = h.gesture,
            f = h.image
          v.$imageEl &&
            0 !== v.$imageEl.length &&
            (f.isTouched ||
              (c.android && n.cancelable && n.preventDefault(),
              (f.isTouched = !0),
              (f.touchesStart.x =
                'touchstart' === n.type ? n.targetTouches[0].pageX : n.pageX),
              (f.touchesStart.y =
                'touchstart' === n.type ? n.targetTouches[0].pageY : n.pageY)))
        },
        onTouchMove: function e(n) {
          var c = this,
            h = c.zoom,
            v = h.gesture,
            f = h.image,
            m = h.velocity
          if (
            v.$imageEl &&
            0 !== v.$imageEl.length &&
            ((c.allowClick = !1), f.isTouched && v.$slideEl)
          ) {
            f.isMoved ||
              ((f.width = v.$imageEl[0].offsetWidth),
              (f.height = v.$imageEl[0].offsetHeight),
              (f.startX = getTranslate(v.$imageWrapEl[0], 'x') || 0),
              (f.startY = getTranslate(v.$imageWrapEl[0], 'y') || 0),
              (v.slideWidth = v.$slideEl[0].offsetWidth),
              (v.slideHeight = v.$slideEl[0].offsetHeight),
              v.$imageWrapEl.transition(0))
            var g = f.width * h.scale,
              w = f.height * h.scale
            if (!(g < v.slideWidth && w < v.slideHeight)) {
              if (
                ((f.minX = Math.min(v.slideWidth / 2 - g / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(v.slideHeight / 2 - w / 2, 0)),
                (f.maxY = -f.minY),
                (f.touchesCurrent.x =
                  'touchmove' === n.type ? n.targetTouches[0].pageX : n.pageX),
                (f.touchesCurrent.y =
                  'touchmove' === n.type ? n.targetTouches[0].pageY : n.pageY),
                !f.isMoved && !h.isScaling)
              ) {
                if (
                  c.isHorizontal() &&
                  ((Math.floor(f.minX) === Math.floor(f.startX) &&
                    f.touchesCurrent.x < f.touchesStart.x) ||
                    (Math.floor(f.maxX) === Math.floor(f.startX) &&
                      f.touchesCurrent.x > f.touchesStart.x))
                )
                  return void (f.isTouched = !1)
                if (
                  !c.isHorizontal() &&
                  ((Math.floor(f.minY) === Math.floor(f.startY) &&
                    f.touchesCurrent.y < f.touchesStart.y) ||
                    (Math.floor(f.maxY) === Math.floor(f.startY) &&
                      f.touchesCurrent.y > f.touchesStart.y))
                )
                  return void (f.isTouched = !1)
              }
              n.cancelable && n.preventDefault(),
                n.stopPropagation(),
                (f.isMoved = !0),
                (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
                (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
                f.currentX < f.minX &&
                  (f.currentX =
                    f.minX + 1 - Math.pow(f.minX - f.currentX + 1, 0.8)),
                f.currentX > f.maxX &&
                  (f.currentX =
                    f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, 0.8)),
                f.currentY < f.minY &&
                  (f.currentY =
                    f.minY + 1 - Math.pow(f.minY - f.currentY + 1, 0.8)),
                f.currentY > f.maxY &&
                  (f.currentY =
                    f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, 0.8)),
                m.prevPositionX || (m.prevPositionX = f.touchesCurrent.x),
                m.prevPositionY || (m.prevPositionY = f.touchesCurrent.y),
                m.prevTime || (m.prevTime = Date.now()),
                (m.x =
                  (f.touchesCurrent.x - m.prevPositionX) /
                  (Date.now() - m.prevTime) /
                  2),
                (m.y =
                  (f.touchesCurrent.y - m.prevPositionY) /
                  (Date.now() - m.prevTime) /
                  2),
                Math.abs(f.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
                Math.abs(f.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
                (m.prevPositionX = f.touchesCurrent.x),
                (m.prevPositionY = f.touchesCurrent.y),
                (m.prevTime = Date.now()),
                v.$imageWrapEl.transform(
                  'translate3d(' + f.currentX + 'px, ' + f.currentY + 'px,0)',
                )
            }
          }
        },
        onTouchEnd: function e() {
          var n = this.zoom,
            c = n.gesture,
            h = n.image,
            v = n.velocity
          if (c.$imageEl && 0 !== c.$imageEl.length) {
            if (!h.isTouched || !h.isMoved)
              return (h.isTouched = !1), void (h.isMoved = !1)
            ;(h.isTouched = !1), (h.isMoved = !1)
            var f = 300,
              m = 300,
              g = v.x * f,
              w = h.currentX + g,
              b = v.y * m,
              y = h.currentY + b
            0 !== v.x && (f = Math.abs((w - h.currentX) / v.x)),
              0 !== v.y && (m = Math.abs((y - h.currentY) / v.y))
            var x = Math.max(f, m)
            ;(h.currentX = w), (h.currentY = y)
            var E = h.width * n.scale,
              C = h.height * n.scale
            ;(h.minX = Math.min(c.slideWidth / 2 - E / 2, 0)),
              (h.maxX = -h.minX),
              (h.minY = Math.min(c.slideHeight / 2 - C / 2, 0)),
              (h.maxY = -h.minY),
              (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
              (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
              c.$imageWrapEl
                .transition(x)
                .transform(
                  'translate3d(' + h.currentX + 'px, ' + h.currentY + 'px,0)',
                )
          }
        },
        onTransitionEnd: function e() {
          var n = this,
            c = n.zoom,
            h = c.gesture
          h.$slideEl &&
            n.previousIndex !== n.activeIndex &&
            (h.$imageEl && h.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            h.$imageWrapEl && h.$imageWrapEl.transform('translate3d(0,0,0)'),
            (c.scale = 1),
            (c.currentScale = 1),
            (h.$slideEl = void 0),
            (h.$imageEl = void 0),
            (h.$imageWrapEl = void 0))
        },
        toggle: function e(n) {
          var c = this.zoom
          c.scale && 1 !== c.scale ? c.out() : c.in(n)
        },
        in: function e(n) {
          var c,
            h,
            v,
            f,
            m,
            g,
            w,
            b,
            y,
            x,
            E,
            C,
            S,
            A,
            M,
            k,
            z,
            P = this,
            L = getWindow(),
            O = P.zoom,
            D = P.params.zoom,
            I = O.gesture,
            B = O.image
          I.$slideEl ||
            (n &&
              n.target &&
              (I.$slideEl = $(n.target).closest('.' + P.params.slideClass)),
            I.$slideEl ||
              (P.params.virtual && P.params.virtual.enabled && P.virtual
                ? (I.$slideEl = P.$wrapperEl.children(
                    '.' + P.params.slideActiveClass,
                  ))
                : (I.$slideEl = P.slides.eq(P.activeIndex))),
            (I.$imageEl = re()((c = I.$slideEl)).call(
              c,
              'img, svg, canvas, picture, .swiper-zoom-target',
            )),
            (I.$imageWrapEl = I.$imageEl.parent('.' + D.containerClass)))
          I.$imageEl &&
            0 !== I.$imageEl.length &&
            I.$imageWrapEl &&
            0 !== I.$imageWrapEl.length &&
            (I.$slideEl.addClass('' + D.zoomedSlideClass),
            void 0 === B.touchesStart.x && n
              ? ((h =
                  'touchend' === n.type ? n.changedTouches[0].pageX : n.pageX),
                (v =
                  'touchend' === n.type ? n.changedTouches[0].pageY : n.pageY))
              : ((h = B.touchesStart.x), (v = B.touchesStart.y)),
            (O.scale = I.$imageWrapEl.attr('data-swiper-zoom') || D.maxRatio),
            (O.currentScale =
              I.$imageWrapEl.attr('data-swiper-zoom') || D.maxRatio),
            n
              ? ((k = I.$slideEl[0].offsetWidth),
                (z = I.$slideEl[0].offsetHeight),
                (f = I.$slideEl.offset().left + L.scrollX + k / 2 - h),
                (m = I.$slideEl.offset().top + L.scrollY + z / 2 - v),
                (b = I.$imageEl[0].offsetWidth),
                (y = I.$imageEl[0].offsetHeight),
                (x = b * O.scale),
                (E = y * O.scale),
                (A = -(C = Math.min(k / 2 - x / 2, 0))),
                (M = -(S = Math.min(z / 2 - E / 2, 0))),
                (g = f * O.scale) < C && (g = C),
                g > A && (g = A),
                (w = m * O.scale) < S && (w = S),
                w > M && (w = M))
              : ((g = 0), (w = 0)),
            I.$imageWrapEl
              .transition(300)
              .transform('translate3d(' + g + 'px, ' + w + 'px,0)'),
            I.$imageEl
              .transition(300)
              .transform('translate3d(0,0,0) scale(' + O.scale + ')'))
        },
        out: function e() {
          var n,
            c = this,
            h = c.zoom,
            v = c.params.zoom,
            f = h.gesture
          f.$slideEl ||
            (c.params.virtual && c.params.virtual.enabled && c.virtual
              ? (f.$slideEl = c.$wrapperEl.children(
                  '.' + c.params.slideActiveClass,
                ))
              : (f.$slideEl = c.slides.eq(c.activeIndex)),
            (f.$imageEl = re()((n = f.$slideEl)).call(
              n,
              'img, svg, canvas, picture, .swiper-zoom-target',
            )),
            (f.$imageWrapEl = f.$imageEl.parent('.' + v.containerClass)))
          f.$imageEl &&
            0 !== f.$imageEl.length &&
            f.$imageWrapEl &&
            0 !== f.$imageWrapEl.length &&
            ((h.scale = 1),
            (h.currentScale = 1),
            f.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            f.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            f.$slideEl.removeClass('' + v.zoomedSlideClass),
            (f.$slideEl = void 0))
        },
        toggleGestures: function e(n) {
          var c = this,
            h = c.zoom,
            v = h.slideSelector,
            f = h.passiveListener
          c.$wrapperEl[n]('gesturestart', v, h.onGestureStart, f),
            c.$wrapperEl[n]('gesturechange', v, h.onGestureChange, f),
            c.$wrapperEl[n]('gestureend', v, h.onGestureEnd, f)
        },
        enableGestures: function e() {
          this.zoom.gesturesEnabled ||
            ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures('on'))
        },
        disableGestures: function e() {
          this.zoom.gesturesEnabled &&
            ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures('off'))
        },
        enable: function e() {
          var n = this,
            c = n.support,
            h = n.zoom
          if (!h.enabled) {
            h.enabled = !0
            var v = !(
                'touchstart' !== n.touchEvents.start ||
                !c.passiveListener ||
                !n.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              f = !c.passiveListener || { passive: !1, capture: !0 },
              m = '.' + n.params.slideClass
            ;(n.zoom.passiveListener = v),
              (n.zoom.slideSelector = m),
              c.gestures
                ? (n.$wrapperEl.on(
                    n.touchEvents.start,
                    n.zoom.enableGestures,
                    v,
                  ),
                  n.$wrapperEl.on(n.touchEvents.end, n.zoom.disableGestures, v))
                : 'touchstart' === n.touchEvents.start &&
                  (n.$wrapperEl.on(n.touchEvents.start, m, h.onGestureStart, v),
                  n.$wrapperEl.on(n.touchEvents.move, m, h.onGestureChange, f),
                  n.$wrapperEl.on(n.touchEvents.end, m, h.onGestureEnd, v),
                  n.touchEvents.cancel &&
                    n.$wrapperEl.on(
                      n.touchEvents.cancel,
                      m,
                      h.onGestureEnd,
                      v,
                    )),
              n.$wrapperEl.on(
                n.touchEvents.move,
                '.' + n.params.zoom.containerClass,
                h.onTouchMove,
                f,
              )
          }
        },
        disable: function e() {
          var n = this,
            c = n.zoom
          if (c.enabled) {
            var h = n.support
            n.zoom.enabled = !1
            var v = !(
                'touchstart' !== n.touchEvents.start ||
                !h.passiveListener ||
                !n.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              f = !h.passiveListener || { passive: !1, capture: !0 },
              m = '.' + n.params.slideClass
            h.gestures
              ? (n.$wrapperEl.off(
                  n.touchEvents.start,
                  n.zoom.enableGestures,
                  v,
                ),
                n.$wrapperEl.off(n.touchEvents.end, n.zoom.disableGestures, v))
              : 'touchstart' === n.touchEvents.start &&
                (n.$wrapperEl.off(n.touchEvents.start, m, c.onGestureStart, v),
                n.$wrapperEl.off(n.touchEvents.move, m, c.onGestureChange, f),
                n.$wrapperEl.off(n.touchEvents.end, m, c.onGestureEnd, v),
                n.touchEvents.cancel &&
                  n.$wrapperEl.off(n.touchEvents.cancel, m, c.onGestureEnd, v)),
              n.$wrapperEl.off(
                n.touchEvents.move,
                '.' + n.params.zoom.containerClass,
                c.onTouchMove,
                f,
              )
          }
        },
      }
      function _extends$a() {
        return (_extends$a =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var He = {
        loadInSlide: function e(n, c) {
          void 0 === c && (c = !0)
          var h = this,
            v = h.params.lazy
          if (void 0 !== n && 0 !== h.slides.length) {
            var f =
                h.virtual && h.params.virtual.enabled
                  ? h.$wrapperEl.children(
                      '.' +
                        h.params.slideClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]',
                    )
                  : h.slides.eq(n),
              m = re()(f).call(
                f,
                '.' +
                  v.elementClass +
                  ':not(.' +
                  v.loadedClass +
                  '):not(.' +
                  v.loadingClass +
                  ')',
              )
            !f.hasClass(v.elementClass) ||
              f.hasClass(v.loadedClass) ||
              f.hasClass(v.loadingClass) ||
              m.push(f[0]),
              0 !== m.length &&
                m.each(function (n) {
                  var m = $(n)
                  m.addClass(v.loadingClass)
                  var g = m.attr('data-background'),
                    w = m.attr('data-src'),
                    b = m.attr('data-srcset'),
                    y = m.attr('data-sizes'),
                    x = m.parent('picture')
                  h.loadImage(m[0], w || g, b, y, !1, function () {
                    if (null != h && h && (!h || h.params) && !h.destroyed) {
                      if (
                        (g
                          ? (m.css('background-image', 'url("' + g + '")'),
                            m.removeAttr('data-background'))
                          : (b &&
                              (m.attr('srcset', b),
                              m.removeAttr('data-srcset')),
                            y &&
                              (m.attr('sizes', y), m.removeAttr('data-sizes')),
                            x.length &&
                              x.children('source').each(function (n) {
                                var c = $(n)
                                c.attr('data-srcset') &&
                                  (c.attr('srcset', c.attr('data-srcset')),
                                  c.removeAttr('data-srcset'))
                              }),
                            w && (m.attr('src', w), m.removeAttr('data-src'))),
                        m.addClass(v.loadedClass).removeClass(v.loadingClass),
                        re()(f)
                          .call(f, '.' + v.preloaderClass)
                          .remove(),
                        h.params.loop && c)
                      ) {
                        var n = f.attr('data-swiper-slide-index')
                        if (f.hasClass(h.params.slideDuplicateClass)) {
                          var E = h.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              n +
                              '"]:not(.' +
                              h.params.slideDuplicateClass +
                              ')',
                          )
                          h.lazy.loadInSlide(E.index(), !1)
                        } else {
                          var C = h.$wrapperEl.children(
                            '.' +
                              h.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              n +
                              '"]',
                          )
                          h.lazy.loadInSlide(C.index(), !1)
                        }
                      }
                      h.emit('lazyImageReady', f[0], m[0]),
                        h.params.autoHeight && h.updateAutoHeight()
                    }
                  }),
                    h.emit('lazyImageLoad', f[0], m[0])
                })
          }
        },
        load: function e() {
          var n = this,
            c = n.$wrapperEl,
            h = n.params,
            v = n.slides,
            f = n.activeIndex,
            m = n.virtual && h.virtual.enabled,
            g = h.lazy,
            w = h.slidesPerView
          function d(n) {
            if (m) {
              if (
                c.children(
                  '.' + h.slideClass + '[data-swiper-slide-index="' + n + '"]',
                ).length
              )
                return !0
            } else if (v[n]) return !0
            return !1
          }
          function p(n) {
            return m ? $(n).attr('data-swiper-slide-index') : $(n).index()
          }
          if (
            ('auto' === w && (w = 0),
            n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
            n.params.watchSlidesVisibility)
          )
            c.children('.' + h.slideVisibleClass).each(function (c) {
              var h = m ? $(c).attr('data-swiper-slide-index') : $(c).index()
              n.lazy.loadInSlide(h)
            })
          else if (w > 1)
            for (var b = f; b < f + w; b += 1) d(b) && n.lazy.loadInSlide(b)
          else n.lazy.loadInSlide(f)
          if (g.loadPrevNext)
            if (w > 1 || (g.loadPrevNextAmount && g.loadPrevNextAmount > 1)) {
              for (
                var y = g.loadPrevNextAmount,
                  x = w,
                  E = Math.min(f + x + Math.max(y, x), v.length),
                  C = Math.max(f - Math.max(x, y), 0),
                  S = f + w;
                S < E;
                S += 1
              )
                d(S) && n.lazy.loadInSlide(S)
              for (var A = C; A < f; A += 1) d(A) && n.lazy.loadInSlide(A)
            } else {
              var M = c.children('.' + h.slideNextClass)
              M.length > 0 && n.lazy.loadInSlide(p(M))
              var k = c.children('.' + h.slidePrevClass)
              k.length > 0 && n.lazy.loadInSlide(p(k))
            }
        },
        checkInViewOnLoad: function e() {
          var n = getWindow(),
            c = this
          if (c && !c.destroyed) {
            var h = c.params.lazy.scrollingElement
                ? $(c.params.lazy.scrollingElement)
                : $(n),
              v = h[0] === n,
              f = v ? n.innerWidth : h[0].offsetWidth,
              m = v ? n.innerHeight : h[0].offsetHeight,
              g = c.$el.offset(),
              w = !1
            c.rtlTranslate && (g.left -= c.$el[0].scrollLeft)
            for (
              var b = [
                  [g.left, g.top],
                  [g.left + c.width, g.top],
                  [g.left, g.top + c.height],
                  [g.left + c.width, g.top + c.height],
                ],
                y = 0;
              y < b.length;
              y += 1
            ) {
              var x = b[y]
              if (x[0] >= 0 && x[0] <= f && x[1] >= 0 && x[1] <= m) {
                if (0 === x[0] && 0 === x[1]) continue
                w = !0
              }
            }
            var E = !(
              'touchstart' !== c.touchEvents.start ||
              !c.support.passiveListener ||
              !c.params.passiveListeners
            ) && { passive: !0, capture: !1 }
            w
              ? (c.lazy.load(), h.off('scroll', c.lazy.checkInViewOnLoad, E))
              : c.lazy.scrollHandlerAttached ||
                ((c.lazy.scrollHandlerAttached = !0),
                h.on('scroll', c.lazy.checkInViewOnLoad, E))
          }
        },
      }
      function _extends$9() {
        return (_extends$9 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Re = {
        LinearSpline: function e(n, c) {
          var h,
            v,
            f = (function e() {
              var n, c, h
              return function (v, f) {
                for (c = -1, n = v.length; n - c > 1; )
                  v[(h = (n + c) >> 1)] <= f ? (c = h) : (n = h)
                return n
              }
            })()
          return (
            (this.x = n),
            (this.y = c),
            (this.lastIndex = n.length - 1),
            (this.interpolate = function e(n) {
              return n
                ? ((v = f(this.x, n)),
                  (h = v - 1),
                  ((n - this.x[h]) * (this.y[v] - this.y[h])) /
                    (this.x[v] - this.x[h]) +
                    this.y[h])
                : 0
            }),
            this
          )
        },
        getInterpolateFunction: function e(n) {
          var c = this
          c.controller.spline ||
            (c.controller.spline = c.params.loop
              ? new Re.LinearSpline(c.slidesGrid, n.slidesGrid)
              : new Re.LinearSpline(c.snapGrid, n.snapGrid))
        },
        setTranslate: function e(n, c) {
          var h,
            v,
            f = this,
            m = f.controller.control,
            g = f.constructor
          function l(n) {
            var c = f.rtlTranslate ? -f.translate : f.translate
            'slide' === f.params.controller.by &&
              (f.controller.getInterpolateFunction(n),
              (v = -f.controller.spline.interpolate(-c))),
              (v && 'container' !== f.params.controller.by) ||
                ((h =
                  (n.maxTranslate() - n.minTranslate()) /
                  (f.maxTranslate() - f.minTranslate())),
                (v = (c - f.minTranslate()) * h + n.minTranslate())),
              f.params.controller.inverse && (v = n.maxTranslate() - v),
              n.updateProgress(v),
              n.setTranslate(v, f),
              n.updateActiveIndex(),
              n.updateSlidesClasses()
          }
          if (Array.isArray(m))
            for (var w = 0; w < m.length; w += 1)
              m[w] !== c && m[w] instanceof g && l(m[w])
          else m instanceof g && c !== m && l(m)
        },
        setTransition: function e(n, c) {
          var h,
            v = this,
            f = v.constructor,
            m = v.controller.control
          function o(c) {
            c.setTransition(n, v),
              0 !== n &&
                (c.transitionStart(),
                c.params.autoHeight &&
                  nextTick(function () {
                    c.updateAutoHeight()
                  }),
                c.$wrapperEl.transitionEnd(function () {
                  m &&
                    (c.params.loop &&
                      'slide' === v.params.controller.by &&
                      c.loopFix(),
                    c.transitionEnd())
                }))
          }
          if (Array.isArray(m))
            for (h = 0; h < m.length; h += 1)
              m[h] !== c && m[h] instanceof f && o(m[h])
          else m instanceof f && c !== m && o(m)
        },
      }
      function _extends$8() {
        return (_extends$8 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var je = {
        getRandomNumber: function e(n) {
          var c
          void 0 === n && (n = 16)
          return pe()((c = 'x'))
            .call(c, n)
            .replace(/x/g, function e() {
              return Math.round(16 * Math.random()).toString(16)
            })
        },
        makeElFocusable: function e(n) {
          return n.attr('tabIndex', '0'), n
        },
        makeElNotFocusable: function e(n) {
          return n.attr('tabIndex', '-1'), n
        },
        addElRole: function e(n, c) {
          return n.attr('role', c), n
        },
        addElRoleDescription: function e(n, c) {
          return n.attr('aria-roledescription', c), n
        },
        addElControls: function e(n, c) {
          return n.attr('aria-controls', c), n
        },
        addElLabel: function e(n, c) {
          return n.attr('aria-label', c), n
        },
        addElId: function e(n, c) {
          return n.attr('id', c), n
        },
        addElLive: function e(n, c) {
          return n.attr('aria-live', c), n
        },
        disableEl: function e(n) {
          return n.attr('aria-disabled', !0), n
        },
        enableEl: function e(n) {
          return n.attr('aria-disabled', !1), n
        },
        onEnterOrSpaceKey: function e(n) {
          if (13 === n.keyCode || 32 === n.keyCode) {
            var c = this,
              h = c.params.a11y,
              v = $(n.target)
            c.navigation &&
              c.navigation.$nextEl &&
              v.is(c.navigation.$nextEl) &&
              ((c.isEnd && !c.params.loop) || c.slideNext(),
              c.isEnd
                ? c.a11y.notify(h.lastSlideMessage)
                : c.a11y.notify(h.nextSlideMessage)),
              c.navigation &&
                c.navigation.$prevEl &&
                v.is(c.navigation.$prevEl) &&
                ((c.isBeginning && !c.params.loop) || c.slidePrev(),
                c.isBeginning
                  ? c.a11y.notify(h.firstSlideMessage)
                  : c.a11y.notify(h.prevSlideMessage)),
              c.pagination &&
                v.is(classesToSelector(c.params.pagination.bulletClass)) &&
                v[0].click()
          }
        },
        notify: function e(n) {
          var c = this.a11y.liveRegion
          0 !== c.length && (c.html(''), c.html(n))
        },
        updateNavigation: function e() {
          var n = this
          if (!n.params.loop && n.navigation) {
            var c = n.navigation,
              h = c.$nextEl,
              v = c.$prevEl
            v &&
              v.length > 0 &&
              (n.isBeginning
                ? (n.a11y.disableEl(v), n.a11y.makeElNotFocusable(v))
                : (n.a11y.enableEl(v), n.a11y.makeElFocusable(v))),
              h &&
                h.length > 0 &&
                (n.isEnd
                  ? (n.a11y.disableEl(h), n.a11y.makeElNotFocusable(h))
                  : (n.a11y.enableEl(h), n.a11y.makeElFocusable(h)))
          }
        },
        updatePagination: function e() {
          var n = this,
            c = n.params.a11y
          n.pagination &&
            n.params.pagination.clickable &&
            n.pagination.bullets &&
            n.pagination.bullets.length &&
            n.pagination.bullets.each(function (h) {
              var v = $(h)
              n.a11y.makeElFocusable(v),
                n.params.pagination.renderBullet ||
                  (n.a11y.addElRole(v, 'button'),
                  n.a11y.addElLabel(
                    v,
                    c.paginationBulletMessage.replace(
                      /\{\{index\}\}/,
                      v.index() + 1,
                    ),
                  ))
            })
        },
        init: function e() {
          var n,
            c = this,
            h = c.params.a11y
          c.$el.append(c.a11y.liveRegion)
          var v = c.$el
          h.containerRoleDescriptionMessage &&
            c.a11y.addElRoleDescription(v, h.containerRoleDescriptionMessage),
            h.containerMessage && c.a11y.addElLabel(v, h.containerMessage)
          var f = c.$wrapperEl,
            m = f.attr('id') || 'swiper-wrapper-' + c.a11y.getRandomNumber(16),
            g =
              c.params.autoplay && c.params.autoplay.enabled ? 'off' : 'polite'
          c.a11y.addElId(f, m),
            c.a11y.addElLive(f, g),
            h.itemRoleDescriptionMessage &&
              c.a11y.addElRoleDescription(
                $(c.slides),
                h.itemRoleDescriptionMessage,
              ),
            c.a11y.addElRole($(c.slides), h.slideRole)
          var w,
            b,
            y = c.params.loop
              ? G()((n = c.slides)).call(n, function (n) {
                  return !n.classList.contains(c.params.slideDuplicateClass)
                }).length
              : c.slides.length
          c.slides.each(function (n, v) {
            var f = $(n),
              m = c.params.loop
                ? ee()(f.attr('data-swiper-slide-index'), 10)
                : v,
              g = h.slideLabelMessage
                .replace(/\{\{index\}\}/, m + 1)
                .replace(/\{\{slidesLength\}\}/, y)
            c.a11y.addElLabel(f, g)
          }),
            c.navigation && c.navigation.$nextEl && (w = c.navigation.$nextEl),
            c.navigation && c.navigation.$prevEl && (b = c.navigation.$prevEl),
            w &&
              w.length &&
              (c.a11y.makeElFocusable(w),
              'BUTTON' !== w[0].tagName &&
                (c.a11y.addElRole(w, 'button'),
                w.on('keydown', c.a11y.onEnterOrSpaceKey)),
              c.a11y.addElLabel(w, h.nextSlideMessage),
              c.a11y.addElControls(w, m)),
            b &&
              b.length &&
              (c.a11y.makeElFocusable(b),
              'BUTTON' !== b[0].tagName &&
                (c.a11y.addElRole(b, 'button'),
                b.on('keydown', c.a11y.onEnterOrSpaceKey)),
              c.a11y.addElLabel(b, h.prevSlideMessage),
              c.a11y.addElControls(b, m)),
            c.pagination &&
              c.params.pagination.clickable &&
              c.pagination.bullets &&
              c.pagination.bullets.length &&
              c.pagination.$el.on(
                'keydown',
                classesToSelector(c.params.pagination.bulletClass),
                c.a11y.onEnterOrSpaceKey,
              )
        },
        destroy: function e() {
          var n,
            c,
            h = this
          h.a11y.liveRegion &&
            h.a11y.liveRegion.length > 0 &&
            h.a11y.liveRegion.remove(),
            h.navigation && h.navigation.$nextEl && (n = h.navigation.$nextEl),
            h.navigation && h.navigation.$prevEl && (c = h.navigation.$prevEl),
            n && n.off('keydown', h.a11y.onEnterOrSpaceKey),
            c && c.off('keydown', h.a11y.onEnterOrSpaceKey),
            h.pagination &&
              h.params.pagination.clickable &&
              h.pagination.bullets &&
              h.pagination.bullets.length &&
              h.pagination.$el.off(
                'keydown',
                classesToSelector(h.params.pagination.bulletClass),
                h.a11y.onEnterOrSpaceKey,
              )
        },
      }
      function _extends$7() {
        return (_extends$7 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Xe = {
        init: function e() {
          var n = this,
            c = getWindow()
          if (n.params.history) {
            if (!c.history || !c.history.pushState)
              return (
                (n.params.history.enabled = !1),
                void (n.params.hashNavigation.enabled = !0)
              )
            var h = n.history
            ;(h.initialized = !0),
              (h.paths = Xe.getPathValues(n.params.url)),
              (h.paths.key || h.paths.value) &&
                (h.scrollToSlide(0, h.paths.value, n.params.runCallbacksOnInit),
                n.params.history.replaceState ||
                  c.addEventListener('popstate', n.history.setHistoryPopState))
          }
        },
        destroy: function e() {
          var n = getWindow()
          this.params.history.replaceState ||
            n.removeEventListener('popstate', this.history.setHistoryPopState)
        },
        setHistoryPopState: function e() {
          var n = this
          ;(n.history.paths = Xe.getPathValues(n.params.url)),
            n.history.scrollToSlide(n.params.speed, n.history.paths.value, !1)
        },
        getPathValues: function e(n) {
          var c,
            h,
            v,
            f = getWindow()
          v = n ? new ue.a(n) : f.location
          var m = G()(
              (c = q()((h = v.pathname))
                .call(h, 1)
                .split('/')),
            ).call(c, function (n) {
              return '' !== n
            }),
            g = m.length
          return { key: m[g - 2], value: m[g - 1] }
        },
        setHistory: function e(n, c) {
          var h,
            v = this,
            f = getWindow()
          if (v.history.initialized && v.params.history.enabled) {
            var m
            m = v.params.url ? new ue.a(v.params.url) : f.location
            var g = v.slides.eq(c),
              w = Xe.slugify(g.attr('data-history'))
            if (v.params.history.root.length > 0) {
              var b = v.params.history.root
              '/' === b[b.length - 1] && (b = q()(b).call(b, 0, b.length - 1)),
                (w = b + '/' + n + '/' + w)
            } else ve()((h = m.pathname)).call(h, n) || (w = n + '/' + w)
            var y = f.history.state
            ;(y && y.value === w) ||
              (v.params.history.replaceState
                ? f.history.replaceState({ value: w }, null, w)
                : f.history.pushState({ value: w }, null, w))
          }
        },
        slugify: function e(n) {
          return n
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')
        },
        scrollToSlide: function e(n, c, h) {
          var v = this
          if (c)
            for (var f = 0, m = v.slides.length; f < m; f += 1) {
              var g = v.slides.eq(f)
              if (
                Xe.slugify(g.attr('data-history')) === c &&
                !g.hasClass(v.params.slideDuplicateClass)
              ) {
                var w = g.index()
                v.slideTo(w, n, h)
              }
            }
          else v.slideTo(0, n, h)
        },
      }
      function _extends$6() {
        return (_extends$6 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Fe = {
        onHashChange: function e() {
          var n = this,
            c = getDocument()
          n.emit('hashChange')
          var h = c.location.hash.replace('#', '')
          if (h !== n.slides.eq(n.activeIndex).attr('data-hash')) {
            var v = n.$wrapperEl
              .children('.' + n.params.slideClass + '[data-hash="' + h + '"]')
              .index()
            if (void 0 === v) return
            n.slideTo(v)
          }
        },
        setHash: function e() {
          var n = this,
            c = getWindow(),
            h = getDocument()
          if (n.hashNavigation.initialized && n.params.hashNavigation.enabled)
            if (
              n.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                '#' + n.slides.eq(n.activeIndex).attr('data-hash') || !1,
              ),
                n.emit('hashSet')
            else {
              var v = n.slides.eq(n.activeIndex),
                f = v.attr('data-hash') || v.attr('data-history')
              ;(h.location.hash = f || ''), n.emit('hashSet')
            }
        },
        init: function e() {
          var n = this,
            c = getDocument(),
            h = getWindow()
          if (
            !(
              !n.params.hashNavigation.enabled ||
              (n.params.history && n.params.history.enabled)
            )
          ) {
            n.hashNavigation.initialized = !0
            var v = c.location.hash.replace('#', '')
            if (v)
              for (var f = 0, m = n.slides.length; f < m; f += 1) {
                var g = n.slides.eq(f)
                if (
                  (g.attr('data-hash') || g.attr('data-history')) === v &&
                  !g.hasClass(n.params.slideDuplicateClass)
                ) {
                  var w = g.index()
                  n.slideTo(w, 0, n.params.runCallbacksOnInit, !0)
                }
              }
            n.params.hashNavigation.watchState &&
              $(h).on('hashchange', n.hashNavigation.onHashChange)
          }
        },
        destroy: function e() {
          var n = getWindow()
          this.params.hashNavigation.watchState &&
            $(n).off('hashchange', this.hashNavigation.onHashChange)
        },
      }
      function _extends$5() {
        return (_extends$5 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ve = {
        run: function e() {
          var n = this,
            c = n.slides.eq(n.activeIndex),
            h = n.params.autoplay.delay
          c.attr('data-swiper-autoplay') &&
            (h = c.attr('data-swiper-autoplay') || n.params.autoplay.delay),
            clearTimeout(n.autoplay.timeout),
            (n.autoplay.timeout = nextTick(function () {
              var c
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (c = n.slidePrev(n.params.speed, !0, !0)),
                    n.emit('autoplay'))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? n.autoplay.stop()
                    : ((c = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0,
                      )),
                      n.emit('autoplay'))
                  : ((c = n.slidePrev(n.params.speed, !0, !0)),
                    n.emit('autoplay'))
                : n.params.loop
                ? (n.loopFix(),
                  (c = n.slideNext(n.params.speed, !0, !0)),
                  n.emit('autoplay'))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? n.autoplay.stop()
                  : ((c = n.slideTo(0, n.params.speed, !0, !0)),
                    n.emit('autoplay'))
                : ((c = n.slideNext(n.params.speed, !0, !0)),
                  n.emit('autoplay')),
                ((n.params.cssMode && n.autoplay.running) || !1 === c) &&
                  n.autoplay.run()
            }, h))
        },
        start: function e() {
          var n = this
          return (
            void 0 === n.autoplay.timeout &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0),
            n.emit('autoplayStart'),
            n.autoplay.run(),
            !0)
          )
        },
        stop: function e() {
          var n = this
          return (
            !!n.autoplay.running &&
            void 0 !== n.autoplay.timeout &&
            (n.autoplay.timeout &&
              (clearTimeout(n.autoplay.timeout), (n.autoplay.timeout = void 0)),
            (n.autoplay.running = !1),
            n.emit('autoplayStop'),
            !0)
          )
        },
        pause: function e(n) {
          var c,
            h = this
          h.autoplay.running &&
            (h.autoplay.paused ||
              (h.autoplay.timeout && clearTimeout(h.autoplay.timeout),
              (h.autoplay.paused = !0),
              0 !== n && h.params.autoplay.waitForTransition
                ? w()((c = ['transitionend', 'webkitTransitionEnd'])).call(
                    c,
                    function (n) {
                      h.$wrapperEl[0].addEventListener(
                        n,
                        h.autoplay.onTransitionEnd,
                      )
                    },
                  )
                : ((h.autoplay.paused = !1), h.autoplay.run())))
        },
        onVisibilityChange: function e() {
          var n = this,
            c = getDocument()
          'hidden' === c.visibilityState &&
            n.autoplay.running &&
            n.autoplay.pause(),
            'visible' === c.visibilityState &&
              n.autoplay.paused &&
              (n.autoplay.run(), (n.autoplay.paused = !1))
        },
        onTransitionEnd: function e(n) {
          var c,
            h = this
          h &&
            !h.destroyed &&
            h.$wrapperEl &&
            n.target === h.$wrapperEl[0] &&
            (w()((c = ['transitionend', 'webkitTransitionEnd'])).call(
              c,
              function (n) {
                h.$wrapperEl[0].removeEventListener(
                  n,
                  h.autoplay.onTransitionEnd,
                )
              },
            ),
            (h.autoplay.paused = !1),
            h.autoplay.running ? h.autoplay.run() : h.autoplay.stop())
        },
        onMouseEnter: function e() {
          var n,
            c = this
          c.params.autoplay.disableOnInteraction
            ? c.autoplay.stop()
            : c.autoplay.pause(),
            w()((n = ['transitionend', 'webkitTransitionEnd'])).call(
              n,
              function (n) {
                c.$wrapperEl[0].removeEventListener(
                  n,
                  c.autoplay.onTransitionEnd,
                )
              },
            )
        },
        onMouseLeave: function e() {
          var n = this
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), n.autoplay.run())
        },
        attachMouseEvents: function e() {
          var n = this
          n.params.autoplay.pauseOnMouseEnter &&
            (n.$el.on('mouseenter', n.autoplay.onMouseEnter),
            n.$el.on('mouseleave', n.autoplay.onMouseLeave))
        },
        detachMouseEvents: function e() {
          var n = this
          n.$el.off('mouseenter', n.autoplay.onMouseEnter),
            n.$el.off('mouseleave', n.autoplay.onMouseLeave)
        },
      }
      function _extends$4() {
        return (_extends$4 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var qe = {
        setTranslate: function e() {
          for (var n = this, c = n.slides, h = 0; h < c.length; h += 1) {
            var v = n.slides.eq(h),
              f = -v[0].swiperSlideOffset
            n.params.virtualTranslate || (f -= n.translate)
            var m = 0
            n.isHorizontal() || ((m = f), (f = 0))
            var g = n.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(v[0].progress), 0)
              : 1 + Math.min(Math.max(v[0].progress, -1), 0)
            v.css({ opacity: g }).transform(
              'translate3d(' + f + 'px, ' + m + 'px, 0px)',
            )
          }
        },
        setTransition: function e(n) {
          var c = this,
            h = c.slides,
            v = c.$wrapperEl
          if ((h.transition(n), c.params.virtualTranslate && 0 !== n)) {
            var f = !1
            h.transitionEnd(function () {
              if (!f && c && !c.destroyed) {
                ;(f = !0), (c.animating = !1)
                for (
                  var n = ['webkitTransitionEnd', 'transitionend'], h = 0;
                  h < n.length;
                  h += 1
                )
                  v.trigger(n[h])
              }
            })
          }
        },
      }
      function _extends$3() {
        return (_extends$3 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ue = {
        setTranslate: function e() {
          var n,
            c = this,
            h = c.$el,
            v = c.$wrapperEl,
            f = c.slides,
            m = c.width,
            g = c.height,
            w = c.rtlTranslate,
            b = c.size,
            y = c.browser,
            x = c.params.cubeEffect,
            E = c.isHorizontal(),
            C = c.virtual && c.params.virtual.enabled,
            S = 0
          x.shadow &&
            (E
              ? (0 === (n = re()(v).call(v, '.swiper-cube-shadow')).length &&
                  ((n = $('<div class="swiper-cube-shadow"></div>')),
                  v.append(n)),
                n.css({ height: m + 'px' }))
              : 0 === (n = re()(h).call(h, '.swiper-cube-shadow')).length &&
                ((n = $('<div class="swiper-cube-shadow"></div>')),
                h.append(n)))
          for (var A = 0; A < f.length; A += 1) {
            var M = f.eq(A),
              k = A
            C && (k = ee()(M.attr('data-swiper-slide-index'), 10))
            var z = 90 * k,
              P = Math.floor(z / 360)
            w && ((z = -z), (P = Math.floor(-z / 360)))
            var L = Math.max(Math.min(M[0].progress, 1), -1),
              O = 0,
              D = 0,
              I = 0
            k % 4 == 0
              ? ((O = 4 * -P * b), (I = 0))
              : (k - 1) % 4 == 0
              ? ((O = 0), (I = 4 * -P * b))
              : (k - 2) % 4 == 0
              ? ((O = b + 4 * P * b), (I = b))
              : (k - 3) % 4 == 0 && ((O = -b), (I = 3 * b + 4 * b * P)),
              w && (O = -O),
              E || ((D = O), (O = 0))
            var B =
              'rotateX(' +
              (E ? 0 : -z) +
              'deg) rotateY(' +
              (E ? z : 0) +
              'deg) translate3d(' +
              O +
              'px, ' +
              D +
              'px, ' +
              I +
              'px)'
            if (
              (L <= 1 &&
                L > -1 &&
                ((S = 90 * k + 90 * L), w && (S = 90 * -k - 90 * L)),
              M.transform(B),
              x.slideShadows)
            ) {
              var N = E
                  ? re()(M).call(M, '.swiper-slide-shadow-left')
                  : re()(M).call(M, '.swiper-slide-shadow-top'),
                G = E
                  ? re()(M).call(M, '.swiper-slide-shadow-right')
                  : re()(M).call(M, '.swiper-slide-shadow-bottom')
              0 === N.length &&
                ((N = $(
                  '<div class="swiper-slide-shadow-' +
                    (E ? 'left' : 'top') +
                    '"></div>',
                )),
                M.append(N)),
                0 === G.length &&
                  ((G = $(
                    '<div class="swiper-slide-shadow-' +
                      (E ? 'right' : 'bottom') +
                      '"></div>',
                  )),
                  M.append(G)),
                N.length && (N[0].style.opacity = Math.max(-L, 0)),
                G.length && (G[0].style.opacity = Math.max(L, 0))
            }
          }
          if (
            (v.css({
              '-webkit-transform-origin': '50% 50% -' + b / 2 + 'px',
              '-moz-transform-origin': '50% 50% -' + b / 2 + 'px',
              '-ms-transform-origin': '50% 50% -' + b / 2 + 'px',
              'transform-origin': '50% 50% -' + b / 2 + 'px',
            }),
            x.shadow)
          )
            if (E)
              n.transform(
                'translate3d(0px, ' +
                  (m / 2 + x.shadowOffset) +
                  'px, ' +
                  -m / 2 +
                  'px) rotateX(90deg) rotateZ(0deg) scale(' +
                  x.shadowScale +
                  ')',
              )
            else {
              var Y = Math.abs(S) - 90 * Math.floor(Math.abs(S) / 90),
                _ =
                  1.5 -
                  (Math.sin((2 * Y * Math.PI) / 360) / 2 +
                    Math.cos((2 * Y * Math.PI) / 360) / 2),
                W = x.shadowScale,
                H = x.shadowScale / _,
                R = x.shadowOffset
              n.transform(
                'scale3d(' +
                  W +
                  ', 1, ' +
                  H +
                  ') translate3d(0px, ' +
                  (g / 2 + R) +
                  'px, ' +
                  -g / 2 / H +
                  'px) rotateX(-90deg)',
              )
            }
          var j = y.isSafari || y.isWebView ? -b / 2 : 0
          v.transform(
            'translate3d(0px,0,' +
              j +
              'px) rotateX(' +
              (c.isHorizontal() ? 0 : S) +
              'deg) rotateY(' +
              (c.isHorizontal() ? -S : 0) +
              'deg)',
          )
        },
        setTransition: function e(n) {
          var c,
            h = this,
            v = h.$el,
            f = h.slides
          re()((c = f.transition(n)))
            .call(
              c,
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
            )
            .transition(n),
            h.params.cubeEffect.shadow &&
              !h.isHorizontal() &&
              re()(v).call(v, '.swiper-cube-shadow').transition(n)
        },
      }
      function _extends$2() {
        return (_extends$2 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Qe = {
        setTranslate: function e() {
          for (
            var n = this, c = n.slides, h = n.rtlTranslate, v = 0;
            v < c.length;
            v += 1
          ) {
            var f = c.eq(v),
              m = f[0].progress
            n.params.flipEffect.limitRotation &&
              (m = Math.max(Math.min(f[0].progress, 1), -1))
            var g = -180 * m,
              w = 0,
              b = -f[0].swiperSlideOffset,
              y = 0
            if (
              (n.isHorizontal()
                ? h && (g = -g)
                : ((y = b), (b = 0), (w = -g), (g = 0)),
              (f[0].style.zIndex = -Math.abs(Math.round(m)) + c.length),
              n.params.flipEffect.slideShadows)
            ) {
              var x = n.isHorizontal()
                  ? re()(f).call(f, '.swiper-slide-shadow-left')
                  : re()(f).call(f, '.swiper-slide-shadow-top'),
                E = n.isHorizontal()
                  ? re()(f).call(f, '.swiper-slide-shadow-right')
                  : re()(f).call(f, '.swiper-slide-shadow-bottom')
              0 === x.length &&
                ((x = $(
                  '<div class="swiper-slide-shadow-' +
                    (n.isHorizontal() ? 'left' : 'top') +
                    '"></div>',
                )),
                f.append(x)),
                0 === E.length &&
                  ((E = $(
                    '<div class="swiper-slide-shadow-' +
                      (n.isHorizontal() ? 'right' : 'bottom') +
                      '"></div>',
                  )),
                  f.append(E)),
                x.length && (x[0].style.opacity = Math.max(-m, 0)),
                E.length && (E[0].style.opacity = Math.max(m, 0))
            }
            f.transform(
              'translate3d(' +
                b +
                'px, ' +
                y +
                'px, 0px) rotateX(' +
                w +
                'deg) rotateY(' +
                g +
                'deg)',
            )
          }
        },
        setTransition: function e(n) {
          var c,
            h = this,
            v = h.slides,
            f = h.activeIndex,
            m = h.$wrapperEl
          if (
            (re()((c = v.transition(n)))
              .call(
                c,
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .transition(n),
            h.params.virtualTranslate && 0 !== n)
          ) {
            var g = !1
            v.eq(f).transitionEnd(function e() {
              if (!g && h && !h.destroyed) {
                ;(g = !0), (h.animating = !1)
                for (
                  var n = ['webkitTransitionEnd', 'transitionend'], c = 0;
                  c < n.length;
                  c += 1
                )
                  m.trigger(n[c])
              }
            })
          }
        },
      }
      function _extends$1() {
        return (_extends$1 =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ke = {
        setTranslate: function e() {
          for (
            var n = this,
              c = n.width,
              h = n.height,
              v = n.slides,
              f = n.slidesSizesGrid,
              m = n.params.coverflowEffect,
              g = n.isHorizontal(),
              w = n.translate,
              b = g ? c / 2 - w : h / 2 - w,
              y = g ? m.rotate : -m.rotate,
              x = m.depth,
              E = 0,
              C = v.length;
            E < C;
            E += 1
          ) {
            var S = v.eq(E),
              A = f[E],
              M = ((b - S[0].swiperSlideOffset - A / 2) / A) * m.modifier,
              k = g ? y * M : 0,
              P = g ? 0 : y * M,
              L = -x * Math.abs(M),
              O = m.stretch
            'string' == typeof O &&
              -1 !== z()(O).call(O, '%') &&
              (O = (F()(m.stretch) / 100) * A)
            var D = g ? 0 : O * M,
              I = g ? O * M : 0,
              B = 1 - (1 - m.scale) * Math.abs(M)
            Math.abs(I) < 0.001 && (I = 0),
              Math.abs(D) < 0.001 && (D = 0),
              Math.abs(L) < 0.001 && (L = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(B) < 0.001 && (B = 0)
            var N =
              'translate3d(' +
              I +
              'px,' +
              D +
              'px,' +
              L +
              'px)  rotateX(' +
              P +
              'deg) rotateY(' +
              k +
              'deg) scale(' +
              B +
              ')'
            if (
              (S.transform(N),
              (S[0].style.zIndex = 1 - Math.abs(Math.round(M))),
              m.slideShadows)
            ) {
              var G = g
                  ? re()(S).call(S, '.swiper-slide-shadow-left')
                  : re()(S).call(S, '.swiper-slide-shadow-top'),
                Y = g
                  ? re()(S).call(S, '.swiper-slide-shadow-right')
                  : re()(S).call(S, '.swiper-slide-shadow-bottom')
              0 === G.length &&
                ((G = $(
                  '<div class="swiper-slide-shadow-' +
                    (g ? 'left' : 'top') +
                    '"></div>',
                )),
                S.append(G)),
                0 === Y.length &&
                  ((Y = $(
                    '<div class="swiper-slide-shadow-' +
                      (g ? 'right' : 'bottom') +
                      '"></div>',
                  )),
                  S.append(Y)),
                G.length && (G[0].style.opacity = M > 0 ? M : 0),
                Y.length && (Y[0].style.opacity = -M > 0 ? -M : 0)
            }
          }
        },
        setTransition: function e(n) {
          var c
          re()((c = this.slides.transition(n)))
            .call(
              c,
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
            )
            .transition(n)
        },
      }
      function _extends() {
        return (_extends =
          Z.a ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c]
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && (n[v] = h[v])
            }
            return n
          }).apply(this, arguments)
      }
      var Ze = {
          init: function e() {
            var n = this,
              c = n.params.thumbs
            if (n.thumbs.initialized) return !1
            n.thumbs.initialized = !0
            var h = n.constructor
            return (
              c.swiper instanceof h
                ? ((n.thumbs.swiper = c.swiper),
                  extend(n.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  extend(n.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : isObject(c.swiper) &&
                  ((n.thumbs.swiper = new h(
                    extend({}, c.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    }),
                  )),
                  (n.thumbs.swiperCreated = !0)),
              n.thumbs.swiper.$el.addClass(
                n.params.thumbs.thumbsContainerClass,
              ),
              n.thumbs.swiper.on('tap', n.thumbs.onThumbClick),
              !0
            )
          },
          onThumbClick: function e() {
            var n = this,
              c = n.thumbs.swiper
            if (c) {
              var h = c.clickedIndex,
                v = c.clickedSlide
              if (
                !(
                  (v && $(v).hasClass(n.params.thumbs.slideThumbActiveClass)) ||
                  null == h
                )
              ) {
                var f
                if (
                  ((f = c.params.loop
                    ? ee()(
                        $(c.clickedSlide).attr('data-swiper-slide-index'),
                        10,
                      )
                    : h),
                  n.params.loop)
                ) {
                  var m = n.activeIndex
                  n.slides.eq(m).hasClass(n.params.slideDuplicateClass) &&
                    (n.loopFix(),
                    (n._clientLeft = n.$wrapperEl[0].clientLeft),
                    (m = n.activeIndex))
                  var g = n.slides
                      .eq(m)
                      .prevAll('[data-swiper-slide-index="' + f + '"]')
                      .eq(0)
                      .index(),
                    w = n.slides
                      .eq(m)
                      .nextAll('[data-swiper-slide-index="' + f + '"]')
                      .eq(0)
                      .index()
                  f =
                    void 0 === g ? w : void 0 === w ? g : w - m < m - g ? w : g
                }
                n.slideTo(f)
              }
            }
          },
          update: function e(n) {
            var c = this,
              h = c.thumbs.swiper
            if (h) {
              var v =
                  'auto' === h.params.slidesPerView
                    ? h.slidesPerViewDynamic()
                    : h.params.slidesPerView,
                f = c.params.thumbs.autoScrollOffset,
                m = f && !h.params.loop
              if (c.realIndex !== h.realIndex || m) {
                var g,
                  w,
                  b,
                  y = h.activeIndex
                if (h.params.loop) {
                  h.slides.eq(y).hasClass(h.params.slideDuplicateClass) &&
                    (h.loopFix(),
                    (h._clientLeft = h.$wrapperEl[0].clientLeft),
                    (y = h.activeIndex))
                  var x = h.slides
                      .eq(y)
                      .prevAll(
                        '[data-swiper-slide-index="' + c.realIndex + '"]',
                      )
                      .eq(0)
                      .index(),
                    E = h.slides
                      .eq(y)
                      .nextAll(
                        '[data-swiper-slide-index="' + c.realIndex + '"]',
                      )
                      .eq(0)
                      .index()
                  ;(w =
                    void 0 === x
                      ? E
                      : void 0 === E
                      ? x
                      : E - y == y - x
                      ? h.params.slidesPerGroup > 1
                        ? E
                        : y
                      : E - y < y - x
                      ? E
                      : x),
                    (b = c.activeIndex > c.previousIndex ? 'next' : 'prev')
                } else b = (w = c.realIndex) > c.previousIndex ? 'next' : 'prev'
                m && (w += 'next' === b ? f : -1 * f),
                  h.visibleSlidesIndexes &&
                    z()((g = h.visibleSlidesIndexes)).call(g, w) < 0 &&
                    (h.params.centeredSlides &&
                      (w =
                        w > y
                          ? w - Math.floor(v / 2) + 1
                          : w + Math.floor(v / 2) - 1),
                    h.slideTo(w, n ? 0 : void 0))
              }
              var C = 1,
                S = c.params.thumbs.slideThumbActiveClass
              if (
                (c.params.slidesPerView > 1 &&
                  !c.params.centeredSlides &&
                  (C = c.params.slidesPerView),
                c.params.thumbs.multipleActiveThumbs || (C = 1),
                (C = Math.floor(C)),
                h.slides.removeClass(S),
                h.params.loop || (h.params.virtual && h.params.virtual.enabled))
              )
                for (var A = 0; A < C; A += 1)
                  h.$wrapperEl
                    .children(
                      '[data-swiper-slide-index="' + (c.realIndex + A) + '"]',
                    )
                    .addClass(S)
              else
                for (var M = 0; M < C; M += 1)
                  h.slides.eq(c.realIndex + M).addClass(S)
            }
          },
        },
        Je = [
          Oe,
          Ie,
          {
            name: 'mousewheel',
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null,
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                mousewheel: {
                  enabled: !1,
                  lastScrollTime: now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: [],
                  enable: Be.enable,
                  disable: Be.disable,
                  handle: Be.handle,
                  handleMouseEnter: Be.handleMouseEnter,
                  handleMouseLeave: Be.handleMouseLeave,
                  animateSlider: Be.animateSlider,
                  releaseScroll: Be.releaseScroll,
                },
              })
            },
            on: {
              init: function e(n) {
                !n.params.mousewheel.enabled &&
                  n.params.cssMode &&
                  n.mousewheel.disable(),
                  n.params.mousewheel.enabled && n.mousewheel.enable()
              },
              destroy: function e(n) {
                n.params.cssMode && n.mousewheel.enable(),
                  n.mousewheel.enabled && n.mousewheel.disable()
              },
            },
          },
          {
            name: 'navigation',
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
              },
            },
            create: function e() {
              bindModuleMethods(this, { navigation: _extends$f({}, Ne) })
            },
            on: {
              init: function e(n) {
                n.navigation.init(), n.navigation.update()
              },
              toEdge: function e(n) {
                n.navigation.update()
              },
              fromEdge: function e(n) {
                n.navigation.update()
              },
              destroy: function e(n) {
                n.navigation.destroy()
              },
              'enable disable': function e(n) {
                var c = n.navigation,
                  h = c.$nextEl,
                  v = c.$prevEl
                h &&
                  h[n.enabled ? 'removeClass' : 'addClass'](
                    n.params.navigation.lockClass,
                  ),
                  v &&
                    v[n.enabled ? 'removeClass' : 'addClass'](
                      n.params.navigation.lockClass,
                    )
              },
              click: function e(n, c) {
                var h = n.navigation,
                  v = h.$nextEl,
                  f = h.$prevEl,
                  m = c.target
                if (
                  n.params.navigation.hideOnClick &&
                  !$(m).is(f) &&
                  !$(m).is(v)
                ) {
                  if (
                    n.pagination &&
                    n.params.pagination &&
                    n.params.pagination.clickable &&
                    (n.pagination.el === m || n.pagination.el.contains(m))
                  )
                    return
                  var g
                  v
                    ? (g = v.hasClass(n.params.navigation.hiddenClass))
                    : f && (g = f.hasClass(n.params.navigation.hiddenClass)),
                    !0 === g
                      ? n.emit('navigationShow')
                      : n.emit('navigationHide'),
                    v && v.toggleClass(n.params.navigation.hiddenClass),
                    f && f.toggleClass(n.params.navigation.hiddenClass)
                }
              },
            },
          },
          {
            name: 'pagination',
            params: {
              pagination: {
                el: null,
                bulletElement: 'span',
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: 'bullets',
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function e(n) {
                  return n
                },
                formatFractionTotal: function e(n) {
                  return n
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass:
                  'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                pagination: _extends$e({ dynamicBulletIndex: 0 }, Ge),
              })
            },
            on: {
              init: function e(n) {
                n.pagination.init(),
                  n.pagination.render(),
                  n.pagination.update()
              },
              activeIndexChange: function e(n) {
                ;(n.params.loop || void 0 === n.snapIndex) &&
                  n.pagination.update()
              },
              snapIndexChange: function e(n) {
                n.params.loop || n.pagination.update()
              },
              slidesLengthChange: function e(n) {
                n.params.loop && (n.pagination.render(), n.pagination.update())
              },
              snapGridLengthChange: function e(n) {
                n.params.loop || (n.pagination.render(), n.pagination.update())
              },
              destroy: function e(n) {
                n.pagination.destroy()
              },
              'enable disable': function e(n) {
                var c = n.pagination.$el
                c &&
                  c[n.enabled ? 'removeClass' : 'addClass'](
                    n.params.pagination.lockClass,
                  )
              },
              click: function e(n, c) {
                var h = c.target
                if (
                  n.params.pagination.el &&
                  n.params.pagination.hideOnClick &&
                  n.pagination.$el.length > 0 &&
                  !$(h).hasClass(n.params.pagination.bulletClass)
                ) {
                  if (
                    n.navigation &&
                    ((n.navigation.nextEl && h === n.navigation.nextEl) ||
                      (n.navigation.prevEl && h === n.navigation.prevEl))
                  )
                    return
                  !0 ===
                  n.pagination.$el.hasClass(n.params.pagination.hiddenClass)
                    ? n.emit('paginationShow')
                    : n.emit('paginationHide'),
                    n.pagination.$el.toggleClass(
                      n.params.pagination.hiddenClass,
                    )
                }
              },
            },
          },
          {
            name: 'scrollbar',
            params: {
              scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                scrollbar: _extends$d(
                  { isTouched: !1, timeout: null, dragTimeout: null },
                  Ye,
                ),
              })
            },
            on: {
              init: function e(n) {
                n.scrollbar.init(),
                  n.scrollbar.updateSize(),
                  n.scrollbar.setTranslate()
              },
              update: function e(n) {
                n.scrollbar.updateSize()
              },
              resize: function e(n) {
                n.scrollbar.updateSize()
              },
              observerUpdate: function e(n) {
                n.scrollbar.updateSize()
              },
              setTranslate: function e(n) {
                n.scrollbar.setTranslate()
              },
              setTransition: function e(n, c) {
                n.scrollbar.setTransition(c)
              },
              'enable disable': function e(n) {
                var c = n.scrollbar.$el
                c &&
                  c[n.enabled ? 'removeClass' : 'addClass'](
                    n.params.scrollbar.lockClass,
                  )
              },
              destroy: function e(n) {
                n.scrollbar.destroy()
              },
            },
          },
          {
            name: 'parallax',
            params: { parallax: { enabled: !1 } },
            create: function e() {
              bindModuleMethods(this, { parallax: _extends$c({}, _e) })
            },
            on: {
              beforeInit: function e(n) {
                n.params.parallax.enabled &&
                  ((n.params.watchSlidesProgress = !0),
                  (n.originalParams.watchSlidesProgress = !0))
              },
              init: function e(n) {
                n.params.parallax.enabled && n.parallax.setTranslate()
              },
              setTranslate: function e(n) {
                n.params.parallax.enabled && n.parallax.setTranslate()
              },
              setTransition: function e(n, c) {
                n.params.parallax.enabled && n.parallax.setTransition(c)
              },
            },
          },
          {
            name: 'zoom',
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
              },
            },
            create: function e() {
              var n = this
              bindModuleMethods(n, {
                zoom: _extends$b(
                  {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3,
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {},
                    },
                    velocity: {
                      x: void 0,
                      y: void 0,
                      prevPositionX: void 0,
                      prevPositionY: void 0,
                      prevTime: void 0,
                    },
                  },
                  We,
                ),
              })
              var c = 1
              D()(n.zoom, 'scale', {
                get: function e() {
                  return c
                },
                set: function e(h) {
                  if (c !== h) {
                    var v = n.zoom.gesture.$imageEl
                        ? n.zoom.gesture.$imageEl[0]
                        : void 0,
                      f = n.zoom.gesture.$slideEl
                        ? n.zoom.gesture.$slideEl[0]
                        : void 0
                    n.emit('zoomChange', h, v, f)
                  }
                  c = h
                },
              })
            },
            on: {
              init: function e(n) {
                n.params.zoom.enabled && n.zoom.enable()
              },
              destroy: function e(n) {
                n.zoom.disable()
              },
              touchStart: function e(n, c) {
                n.zoom.enabled && n.zoom.onTouchStart(c)
              },
              touchEnd: function e(n, c) {
                n.zoom.enabled && n.zoom.onTouchEnd(c)
              },
              doubleTap: function e(n, c) {
                !n.animating &&
                  n.params.zoom.enabled &&
                  n.zoom.enabled &&
                  n.params.zoom.toggle &&
                  n.zoom.toggle(c)
              },
              transitionEnd: function e(n) {
                n.zoom.enabled &&
                  n.params.zoom.enabled &&
                  n.zoom.onTransitionEnd()
              },
              slideChange: function e(n) {
                n.zoom.enabled &&
                  n.params.zoom.enabled &&
                  n.params.cssMode &&
                  n.zoom.onTransitionEnd()
              },
            },
          },
          {
            name: 'lazy',
            params: {
              lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: '',
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                lazy: _extends$a({ initialImageLoaded: !1 }, He),
              })
            },
            on: {
              beforeInit: function e(n) {
                n.params.lazy.enabled &&
                  n.params.preloadImages &&
                  (n.params.preloadImages = !1)
              },
              init: function e(n) {
                n.params.lazy.enabled &&
                  !n.params.loop &&
                  0 === n.params.initialSlide &&
                  (n.params.lazy.checkInView
                    ? n.lazy.checkInViewOnLoad()
                    : n.lazy.load())
              },
              scroll: function e(n) {
                n.params.freeMode && !n.params.freeModeSticky && n.lazy.load()
              },
              'scrollbarDragMove resize _freeModeNoMomentumRelease': function e(
                n,
              ) {
                n.params.lazy.enabled && n.lazy.load()
              },
              transitionStart: function e(n) {
                n.params.lazy.enabled &&
                  (n.params.lazy.loadOnTransitionStart ||
                    (!n.params.lazy.loadOnTransitionStart &&
                      !n.lazy.initialImageLoaded)) &&
                  n.lazy.load()
              },
              transitionEnd: function e(n) {
                n.params.lazy.enabled &&
                  !n.params.lazy.loadOnTransitionStart &&
                  n.lazy.load()
              },
              slideChange: function e(n) {
                var c = n.params,
                  h = c.lazy,
                  v = c.cssMode,
                  f = c.watchSlidesVisibility,
                  m = c.watchSlidesProgress,
                  g = c.touchReleaseOnEdges,
                  w = c.resistanceRatio
                h.enabled &&
                  (v || ((f || m) && (g || 0 === w))) &&
                  n.lazy.load()
              },
            },
          },
          {
            name: 'controller',
            params: {
              controller: { control: void 0, inverse: !1, by: 'slide' },
            },
            create: function e() {
              bindModuleMethods(this, {
                controller: _extends$9(
                  { control: this.params.controller.control },
                  Re,
                ),
              })
            },
            on: {
              update: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline)
              },
              resize: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline)
              },
              observerUpdate: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline)
              },
              setTranslate: function e(n, c, h) {
                n.controller.control && n.controller.setTranslate(c, h)
              },
              setTransition: function e(n, c, h) {
                n.controller.control && n.controller.setTransition(c, h)
              },
            },
          },
          {
            name: 'a11y',
            params: {
              a11y: {
                enabled: !0,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                a11y: _extends$8({}, je, {
                  liveRegion: $(
                    '<span class="' +
                      this.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>',
                  ),
                }),
              })
            },
            on: {
              afterInit: function e(n) {
                n.params.a11y.enabled &&
                  (n.a11y.init(), n.a11y.updateNavigation())
              },
              toEdge: function e(n) {
                n.params.a11y.enabled && n.a11y.updateNavigation()
              },
              fromEdge: function e(n) {
                n.params.a11y.enabled && n.a11y.updateNavigation()
              },
              paginationUpdate: function e(n) {
                n.params.a11y.enabled && n.a11y.updatePagination()
              },
              destroy: function e(n) {
                n.params.a11y.enabled && n.a11y.destroy()
              },
            },
          },
          {
            name: 'history',
            params: {
              history: {
                enabled: !1,
                root: '',
                replaceState: !1,
                key: 'slides',
              },
            },
            create: function e() {
              bindModuleMethods(this, { history: _extends$7({}, Xe) })
            },
            on: {
              init: function e(n) {
                n.params.history.enabled && n.history.init()
              },
              destroy: function e(n) {
                n.params.history.enabled && n.history.destroy()
              },
              'transitionEnd _freeModeNoMomentumRelease': function e(n) {
                n.history.initialized &&
                  n.history.setHistory(n.params.history.key, n.activeIndex)
              },
              slideChange: function e(n) {
                n.history.initialized &&
                  n.params.cssMode &&
                  n.history.setHistory(n.params.history.key, n.activeIndex)
              },
            },
          },
          {
            name: 'hash-navigation',
            params: {
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
            },
            create: function e() {
              bindModuleMethods(this, {
                hashNavigation: _extends$6({ initialized: !1 }, Fe),
              })
            },
            on: {
              init: function e(n) {
                n.params.hashNavigation.enabled && n.hashNavigation.init()
              },
              destroy: function e(n) {
                n.params.hashNavigation.enabled && n.hashNavigation.destroy()
              },
              'transitionEnd _freeModeNoMomentumRelease': function e(n) {
                n.hashNavigation.initialized && n.hashNavigation.setHash()
              },
              slideChange: function e(n) {
                n.hashNavigation.initialized &&
                  n.params.cssMode &&
                  n.hashNavigation.setHash()
              },
            },
          },
          {
            name: 'autoplay',
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                autoplay: _extends$5({}, Ve, { running: !1, paused: !1 }),
              })
            },
            on: {
              init: function e(n) {
                n.params.autoplay.enabled &&
                  (n.autoplay.start(),
                  getDocument().addEventListener(
                    'visibilitychange',
                    n.autoplay.onVisibilityChange,
                  ),
                  n.autoplay.attachMouseEvents())
              },
              beforeTransitionStart: function e(n, c, h) {
                n.autoplay.running &&
                  (h || !n.params.autoplay.disableOnInteraction
                    ? n.autoplay.pause(c)
                    : n.autoplay.stop())
              },
              sliderFirstMove: function e(n) {
                n.autoplay.running &&
                  (n.params.autoplay.disableOnInteraction
                    ? n.autoplay.stop()
                    : n.autoplay.pause())
              },
              touchEnd: function e(n) {
                n.params.cssMode &&
                  n.autoplay.paused &&
                  !n.params.autoplay.disableOnInteraction &&
                  n.autoplay.run()
              },
              destroy: function e(n) {
                n.autoplay.detachMouseEvents(),
                  n.autoplay.running && n.autoplay.stop(),
                  getDocument().removeEventListener(
                    'visibilitychange',
                    n.autoplay.onVisibilityChange,
                  )
              },
            },
          },
          {
            name: 'effect-fade',
            params: { fadeEffect: { crossFade: !1 } },
            create: function e() {
              bindModuleMethods(this, { fadeEffect: _extends$4({}, qe) })
            },
            on: {
              beforeInit: function e(n) {
                if ('fade' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'fade')
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }
                  extend(n.params, c), extend(n.originalParams, c)
                }
              },
              setTranslate: function e(n) {
                'fade' === n.params.effect && n.fadeEffect.setTranslate()
              },
              setTransition: function e(n, c) {
                'fade' === n.params.effect && n.fadeEffect.setTransition(c)
              },
            },
          },
          {
            name: 'effect-cube',
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            },
            create: function e() {
              bindModuleMethods(this, { cubeEffect: _extends$3({}, Ue) })
            },
            on: {
              beforeInit: function e(n) {
                if ('cube' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'cube'),
                    n.classNames.push(n.params.containerModifierClass + '3d')
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  }
                  extend(n.params, c), extend(n.originalParams, c)
                }
              },
              setTranslate: function e(n) {
                'cube' === n.params.effect && n.cubeEffect.setTranslate()
              },
              setTransition: function e(n, c) {
                'cube' === n.params.effect && n.cubeEffect.setTransition(c)
              },
            },
          },
          {
            name: 'effect-flip',
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function e() {
              bindModuleMethods(this, { flipEffect: _extends$2({}, Qe) })
            },
            on: {
              beforeInit: function e(n) {
                if ('flip' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'flip'),
                    n.classNames.push(n.params.containerModifierClass + '3d')
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  }
                  extend(n.params, c), extend(n.originalParams, c)
                }
              },
              setTranslate: function e(n) {
                'flip' === n.params.effect && n.flipEffect.setTranslate()
              },
              setTransition: function e(n, c) {
                'flip' === n.params.effect && n.flipEffect.setTransition(c)
              },
            },
          },
          {
            name: 'effect-coverflow',
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
              },
            },
            create: function e() {
              bindModuleMethods(this, { coverflowEffect: _extends$1({}, Ke) })
            },
            on: {
              beforeInit: function e(n) {
                'coverflow' === n.params.effect &&
                  (n.classNames.push(
                    n.params.containerModifierClass + 'coverflow',
                  ),
                  n.classNames.push(n.params.containerModifierClass + '3d'),
                  (n.params.watchSlidesProgress = !0),
                  (n.originalParams.watchSlidesProgress = !0))
              },
              setTranslate: function e(n) {
                'coverflow' === n.params.effect &&
                  n.coverflowEffect.setTranslate()
              },
              setTransition: function e(n, c) {
                'coverflow' === n.params.effect &&
                  n.coverflowEffect.setTransition(c)
              },
            },
          },
          {
            name: 'thumbs',
            params: {
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                thumbs: _extends({ swiper: null, initialized: !1 }, Ze),
              })
            },
            on: {
              beforeInit: function e(n) {
                var c = n.params.thumbs
                c && c.swiper && (n.thumbs.init(), n.thumbs.update(!0))
              },
              slideChange: function e(n) {
                n.thumbs.swiper && n.thumbs.update()
              },
              update: function e(n) {
                n.thumbs.swiper && n.thumbs.update()
              },
              resize: function e(n) {
                n.thumbs.swiper && n.thumbs.update()
              },
              observerUpdate: function e(n) {
                n.thumbs.swiper && n.thumbs.update()
              },
              setTransition: function e(n, c) {
                var h = n.thumbs.swiper
                h && h.setTransition(c)
              },
              beforeDestroy: function e(n) {
                var c = n.thumbs.swiper
                c && n.thumbs.swiperCreated && c && c.destroy()
              },
            },
          },
        ]
      Pe.use(Je)
      var et = 0,
        tt = (function () {
          function e(n) {
            var c = this
            Object(fe.g)(this, n),
              (this.onChange = Object(fe.c)(this, 'change', 7)),
              (this.onAnimationFinish = Object(fe.c)(
                this,
                'animationfinish',
                7,
              )),
              (this._id = et++),
              (this.isWillLoadCalled = !1),
              (this.indicatorDots = !1),
              (this.indicatorColor = 'rgba(0, 0, 0, .3)'),
              (this.indicatorActiveColor = '#000000'),
              (this.autoplay = !1),
              (this.current = 0),
              (this.interval = 5e3),
              (this.duration = 500),
              (this.circular = !1),
              (this.vertical = !1),
              (this.previousMargin = '0px'),
              (this.nextMargin = '0px'),
              (this.displayMultipleItems = 1),
              (this.full = !1),
              (this.handleSwiperLoopListen = function () {
                var n, h
                ;(null === (n = c.observerFirst) || void 0 === n
                  ? void 0
                  : n.disconnect) && c.observerFirst.disconnect(),
                  (null === (h = c.observerLast) || void 0 === h
                    ? void 0
                    : h.disconnect) && c.observerLast.disconnect(),
                  (c.observerFirst = new MutationObserver(c.handleSwiperLoop)),
                  (c.observerLast = new MutationObserver(c.handleSwiperLoop))
                var v = c.swiper.$wrapperEl[0].querySelectorAll(
                  'taro-swiper-item-core:not(.swiper-slide-duplicate)',
                )
                v.length >= 1
                  ? c.observerFirst.observe(v[0], { characterData: !0 })
                  : v.length >= 2 &&
                    c.observerLast.observe(v[v.length - 1], {
                      characterData: !0,
                    })
              }),
              (this.handleSwiperLoop = debounce(function () {
                c.swiper &&
                  c.circular &&
                  (c.swiper.loopDestroy(), c.swiper.loopCreate())
              }, 500)),
              (this.handleSwiperSize = debounce(function () {
                c.swiper && !c.circular && c.swiper.updateSlides()
              }, 50))
          }
          return (
            (e.prototype.watchCurrent = function (n) {
              if (this.isWillLoadCalled) {
                var c = ee()(n, 10)
                isNaN(c) ||
                  (this.circular
                    ? this.swiper.isBeginning ||
                      this.swiper.isEnd ||
                      this.swiper.slideToLoop(c)
                    : this.swiper.slideTo(c))
              }
            }),
            (e.prototype.watchAutoplay = function (n) {
              this.isWillLoadCalled &&
                this.swiper &&
                this.swiper.autoplay.running !== n &&
                (n
                  ? (this.swiper.params &&
                      'object' === Object(m.a)(this.swiper.params.autoplay) &&
                      (!0 ===
                        this.swiper.params.autoplay.disableOnInteraction &&
                        (this.swiper.params.autoplay.disableOnInteraction = !1),
                      (this.swiper.params.autoplay.delay = this.interval)),
                    this.swiper.autoplay.start())
                  : this.swiper.autoplay.stop())
            }),
            (e.prototype.watchDuration = function (n) {
              this.isWillLoadCalled && (this.swiper.params.speed = n)
            }),
            (e.prototype.watchInterval = function (n) {
              this.isWillLoadCalled &&
                'object' === Object(m.a)(this.swiper.params.autoplay) &&
                (this.swiper.params.autoplay.delay = n)
            }),
            (e.prototype.watchSwiperWrapper = function (n) {
              this.isWillLoadCalled &&
                n &&
                ((this.el.appendChild = function (c) {
                  return n.appendChild(c)
                }),
                (this.el.insertBefore = function (c, h) {
                  return n.insertBefore(c, h)
                }),
                (this.el.replaceChild = function (c, h) {
                  return n.replaceChild(c, h)
                }),
                (this.el.removeChild = function (c) {
                  return n.removeChild(c)
                }),
                this.el.addEventListener(
                  'DOMNodeInserted',
                  this.handleSwiperSize,
                ),
                this.el.addEventListener(
                  'DOMNodeRemoved',
                  this.handleSwiperSize,
                ))
            }),
            (e.prototype.watchCircular = function () {
              this.swiper && (this.swiper.destroy(), this.handleInit())
            }),
            (e.prototype.componentWillLoad = function () {
              this.isWillLoadCalled = !0
            }),
            (e.prototype.componentDidLoad = function () {
              if ((this.handleInit(), this.swiper && this.circular)) {
                var n = this.swiper.$wrapperEl[0]
                ;(this.observer = new MutationObserver(
                  this.handleSwiperLoopListen,
                )),
                  this.observer.observe(n, { childList: !0 })
              }
            }),
            (e.prototype.componentWillUpdate = function () {
              this.swiper &&
                (this.autoplay &&
                  !this.swiper.autoplay.running &&
                  this.swiper.autoplay.start(),
                this.swiper.update())
            }),
            (e.prototype.componentDidRender = function () {
              this.handleSwiperLoop()
            }),
            (e.prototype.disconnectedCallback = function () {
              var n, c, h, v, f, m
              this.el.removeEventListener(
                'DOMNodeInserted',
                this.handleSwiperSize,
              ),
                this.el.removeEventListener(
                  'DOMNodeRemoved',
                  this.handleSwiperSize,
                ),
                null ===
                  (c =
                    null === (n = this.observer) || void 0 === n
                      ? void 0
                      : n.disconnect) ||
                  void 0 === c ||
                  c.call(n),
                null ===
                  (v =
                    null === (h = this.observerFirst) || void 0 === h
                      ? void 0
                      : h.disconnect) ||
                  void 0 === v ||
                  v.call(h),
                null ===
                  (m =
                    null === (f = this.observerLast) || void 0 === f
                      ? void 0
                      : f.disconnect) ||
                  void 0 === m ||
                  m.call(f)
            }),
            (e.prototype.handleInit = function () {
              var n = this,
                c = n.autoplay,
                h = n.current,
                v = n.interval,
                f = n.duration,
                m = n.circular,
                g = n.vertical,
                w = n.displayMultipleItems,
                b = this,
                y = {
                  pagination: {
                    el:
                      '.taro-swiper-' +
                      this._id +
                      ' > .swiper-container > .swiper-pagination',
                  },
                  direction: g ? 'vertical' : 'horizontal',
                  loop: m,
                  slidesPerView: w,
                  initialSlide: h,
                  speed: f,
                  observer: !0,
                  observeParents: !0,
                  on: {
                    slideTo: function slideTo() {
                      b.current = this.realIndex
                    },
                    slideChangeTransitionEnd: function slideChangeTransitionEnd(
                      n,
                    ) {
                      m && (n.isBeginning || n.isEnd)
                        ? n.slideToLoop(this.realIndex, 0)
                        : b.onChange.emit({
                            current: this.realIndex,
                            source: '',
                          })
                    },
                    transitionEnd: function transitionEnd() {
                      b.onAnimationFinish.emit({
                        current: this.realIndex,
                        source: '',
                      })
                    },
                    observerUpdate: function observerUpdate(n, c) {
                      var h = c.target,
                        v =
                          h && 'string' == typeof h.className ? h.className : ''
                      ve()(v).call(v, 'taro_page') &&
                        'none' !== h.style.display &&
                        b.autoplay &&
                        h.contains(n.$el[0]) &&
                        n.slideTo(b.current)
                    },
                  },
                }
              c && (y.autoplay = { delay: v, disableOnInteraction: !1 }),
                (this.swiper = new Pe(
                  '.taro-swiper-' + this._id + ' > .swiper-container',
                  y,
                )),
                (this.swiperWrapper = this.el.querySelector(
                  '.taro-swiper-' +
                    this._id +
                    ' > .swiper-container > .swiper-wrapper',
                ))
            }),
            (e.prototype.render = function () {
              var n = this,
                c = n.vertical,
                h = n.indicatorDots,
                v = n.indicatorColor,
                f = n.indicatorActiveColor,
                m = { overflow: 'hidden' },
                g = { overflow: 'visible' }
              this.full && ((m.height = '100%'), (g.height = '100%'))
              var w = (/^(\d+)px/.exec(this.previousMargin) || [])[1],
                b = (/^(\d+)px/.exec(this.nextMargin) || [])[1],
                y = ee()(w) || 0,
                x = ee()(b) || 0
              return (
                c
                  ? ((g.marginTop = y + 'px'), (g.marginBottom = x + 'px'))
                  : ((g.marginRight = x + 'px'), (g.marginLeft = y + 'px')),
                Object(fe.e)(
                  fe.a,
                  { class: 'taro-swiper-' + this._id, style: m },
                  Object(fe.e)(
                    'div',
                    { class: 'swiper-container', style: g },
                    Object(fe.e)(
                      'style',
                      { type: 'text/css' },
                      '\n              .taro-swiper-' +
                        this._id +
                        ' > .swiper-container > .swiper-pagination > .swiper-pagination-bullet { background: ' +
                        v +
                        ' }\n              .taro-swiper-' +
                        this._id +
                        ' > .swiper-container > .swiper-pagination > .swiper-pagination-bullet-active { background: ' +
                        f +
                        ' }\n            ',
                    ),
                    Object(fe.e)(
                      'div',
                      { class: 'swiper-wrapper' },
                      Object(fe.e)('slot', null),
                    ),
                    Object(fe.e)('div', {
                      class: Object(me.a)('swiper-pagination', {
                        'swiper-pagination-hidden': !h,
                        'swiper-pagination-bullets': h,
                      }),
                    }),
                  ),
                )
              )
            }),
            D()(e.prototype, 'el', {
              get: function get() {
                return Object(fe.d)(this)
              },
              enumerable: !1,
              configurable: !0,
            }),
            D()(e, 'watchers', {
              get: function get() {
                return {
                  current: ['watchCurrent'],
                  autoplay: ['watchAutoplay'],
                  duration: ['watchDuration'],
                  interval: ['watchInterval'],
                  swiperWrapper: ['watchSwiperWrapper'],
                  circular: ['watchCircular'],
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          )
        })()
      function debounce(n, c) {
        var h
        return function () {
          for (var v = [], f = 0; f < arguments.length; f++) v[f] = arguments[f]
          clearTimeout(h),
            (h = setTimeout(function () {
              n.apply(void 0, v)
            }, c))
        }
      }
      tt.style =
        "@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px,-50%,0);transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s infinite linear;animation:swiper-preloader-spin 1s infinite linear;-webkit-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-filter:blur(50px);filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}taro-swiper-core{display:block;height:150px}.swiper-container{height:100%}.swiper-pagination{font-size:0}.swiper-pagination-bullet{opacity:1}"
      var at = (function () {
        function e(n) {
          Object(fe.g)(this, n)
        }
        return (
          (e.prototype.render = function () {
            return Object(fe.e)(fe.a, {
              class: 'swiper-slide',
              'item-id': this.itemId,
            })
          }),
          e
        )
      })()
    },
    519: function (n, c, h) {
      n.exports = h(539)
    },
    539: function (n, c, h) {
      var v = h(544)
      n.exports = v
    },
    544: function (n, c, h) {
      h(545)
      var v = h(11).Object,
        f = (n.exports = function getOwnPropertyDescriptor(n, c) {
          return v.getOwnPropertyDescriptor(n, c)
        })
      v.getOwnPropertyDescriptor.sham && (f.sham = !0)
    },
    545: function (n, c, h) {
      var v = h(4),
        f = h(10),
        m = h(39),
        g = h(66).f,
        w = h(25),
        b = f(function () {
          g(1)
        })
      v(
        { target: 'Object', stat: !0, forced: !w || b, sham: !w },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(n, c) {
            return g(m(n), c)
          },
        },
      )
    },
    578: function (n, c, h) {
      'use strict'
      h.d(c, 'a', function () {
        return f
      })
      var v = h(69)
      var f = (function createCommonjsModule(n, c, h) {
        return (
          n(
            (h = {
              path: c,
              exports: {},
              require: function require(n, c) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            h.exports,
          ),
          h.exports
        )
      })(function (n) {
        !(function () {
          var c = {}.hasOwnProperty
          function o() {
            for (var n = [], h = 0; h < arguments.length; h++) {
              var f = arguments[h]
              if (f) {
                var m = Object(v.a)(f)
                if ('string' === m || 'number' === m) n.push(f)
                else if (Array.isArray(f)) {
                  if (f.length) {
                    var g = o.apply(null, f)
                    g && n.push(g)
                  }
                } else if ('object' === m)
                  if (f.toString === Object.prototype.toString)
                    for (var w in f) c.call(f, w) && f[w] && n.push(w)
                  else n.push(f.toString())
              }
            }
            return n.join(' ')
          }
          n.exports
            ? ((o.default = o), (n.exports = o))
            : (window.classNames = o)
        })()
      })
    },
    824: function (n, c, h) {
      n.exports = h(236)
    },
    825: function (n, c, h) {
      n.exports = h(826)
    },
    826: function (n, c, h) {
      var v = h(827)
      n.exports = v
    },
    827: function (n, c, h) {
      h(828)
      var v = h(11)
      n.exports = v.Math.sign
    },
    828: function (n, c, h) {
      h(4)({ target: 'Math', stat: !0 }, { sign: h(829) })
    },
    829: function (n, c) {
      n.exports =
        Math.sign ||
        function sign(n) {
          return 0 == (n = +n) || n != n ? n : n < 0 ? -1 : 1
        }
    },
  },
])