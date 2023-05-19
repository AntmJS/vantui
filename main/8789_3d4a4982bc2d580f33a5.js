/*! For license information please see 8789_3d4a4982bc2d580f33a5.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [8789],
    {
      3792: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return r
          },
        }),
          i(4664)
        var n = i(701)
        function r(t) {
          s(t, 'add'),
            s(t, 'append'),
            s(t, 'search'),
            s(t, 'update'),
            s(t, 'remove')
        }
        function s(t, e) {
          t[e + 'Async'] = function () {
            const t = this,
              i = arguments,
              r = i[i.length - 1]
            let s
            ;(0, n.sB)(r) && ((s = r), delete i[i.length - 1])
            const o = new Promise(function (n) {
              setTimeout(function () {
                t.async = !0
                const r = t[e].apply(t, i)
                ;(t.async = !1), n(r)
              })
            })
            return s ? (o.then(s), this) : o
          }
        }
      },
      8956: function (t, e, i) {
        i.d(e, {
          r: function () {
            return s
          },
        }),
          i(4664)
        var n = i(701)
        function r(t) {
          ;(this.limit = !0 !== t && t),
            (this.cache = (0, n.Vf)()),
            (this.queue = [])
        }
        function s(t, e, i) {
          ;(0, n.TU)(t) && (t = t.query)
          let r = this.cache.get(t)
          return r || ((r = this.search(t, e, i)), this.cache.set(t, r)), r
        }
        ;(e.Z = r),
          (r.prototype.set = function (t, e) {
            if (!this.cache[t]) {
              let e = this.queue.length
              e === this.limit ? delete this.cache[this.queue[e - 1]] : e++
              for (let t = e - 1; t > 0; t--) this.queue[t] = this.queue[t - 1]
              this.queue[0] = t
            }
            this.cache[t] = e
          }),
          (r.prototype.get = function (t) {
            const e = this.cache[t]
            if (this.limit && e) {
              const e = this.queue.indexOf(t)
              if (e) {
                const t = this.queue[e - 1]
                ;(this.queue[e - 1] = this.queue[e]), (this.queue[e] = t)
              }
            }
            return e
          }),
          (r.prototype.del = function (t) {
            for (let e, i, n = 0; n < this.queue.length; n++)
              (i = this.queue[n]),
                (e = this.cache[i]),
                e.includes(t) &&
                  (this.queue.splice(n--, 1), delete this.cache[i])
          })
      },
      701: function (t, e, i) {
        function n(t, e) {
          return void 0 !== t ? t : e
        }
        function r(t) {
          const e = new Array(t)
          for (let i = 0; i < t; i++) e[i] = o()
          return e
        }
        function s(t) {
          return Object.keys(t)
        }
        function o() {
          return Object.create(null)
        }
        function h(t) {
          return [].concat.apply([], t)
        }
        function c(t, e) {
          return e.length - t.length
        }
        function f(t) {
          return t.constructor === Array
        }
        function u(t) {
          return 'string' == typeof t
        }
        function l(t) {
          return 'object' == typeof t
        }
        function a(t) {
          return 'function' == typeof t
        }
        i.d(e, {
          FK: function () {
            return c
          },
          NH: function () {
            return u
          },
          PO: function () {
            return r
          },
          TU: function () {
            return l
          },
          Vf: function () {
            return o
          },
          WN: function () {
            return f
          },
          pi: function () {
            return s
          },
          sB: function () {
            return a
          },
          wD: function () {
            return n
          },
          zo: function () {
            return h
          },
        })
      },
      6404: function (t, e, i) {
        i.d(e, {
          OI: function () {
            return l
          },
          R3: function () {
            return h
          },
          eM: function () {
            return n
          },
          kz: function () {
            return r
          },
          qA: function () {
            return c
          },
          qj: function () {
            return s
          },
          rw: function () {
            return u
          },
          ur: function () {
            return f
          },
          wA: function () {
            return o
          },
        })
        const n = !1,
          r = !0,
          s = !0,
          o = !0,
          h = !0,
          c = !0,
          f = !0,
          u = !0,
          l = !0
      },
      8789: function (t, e, i) {
        i.r(e)
        var n = i(6404),
          r = i(748),
          s = (i(4664), i(8956)),
          o = i(701),
          h = i(3792),
          c = i(6794),
          f = i(5623),
          u = i(7839)
        function l(t) {
          if (!(this instanceof l)) return new l(t)
          const e = t.document || t.doc || t
          let i
          ;(this.tree = []),
            (this.field = []),
            (this.marker = []),
            (this.register = (0, o.Vf)()),
            (this.key = ((i = e.key || e.id) && d(i, this.marker)) || 'id'),
            (this.fastupdate = (0, o.wD)(t.fastupdate, !0)),
            n.qA &&
              ((this.storetree = (i = e.store) && !0 !== i && []),
              (this.store = i && (0, o.Vf)())),
            n.ur &&
              ((this.tag = (i = e.tag) && d(i, this.marker)),
              (this.tagindex = i && (0, o.Vf)())),
            n.wA &&
              ((this.cache = (i = t.cache) && new s.Z(i)), (t.cache = !1)),
            n.kz && (this.worker = t.worker),
            n.R3 && (this.async = !1),
            (this.index = a.call(this, t, e))
        }
        function a(t, e) {
          const i = (0, o.Vf)()
          let s = e.index || e.field || e
          ;(0, o.NH)(s) && (s = [s])
          for (let e, h, c = 0; c < s.length; c++)
            (e = s[c]),
              (0, o.NH)(e) || ((h = e), (e = e.field)),
              (h = (0, o.TU)(h) ? Object.assign({}, t, h) : t),
              n.kz &&
                this.worker &&
                ((i[e] = new u.Z(h)), i[e].worker || (this.worker = !1)),
              this.worker || (i[e] = new r.Z(h, this.register)),
              (this.tree[c] = d(e, this.marker)),
              (this.field[c] = e)
          if (n.qA && this.storetree) {
            let t = e.store
            ;(0, o.NH)(t) && (t = [t])
            for (let e = 0; e < t.length; e++)
              this.storetree[e] = d(t[e], this.marker)
          }
          return i
        }
        function d(t, e) {
          const i = t.split(':')
          let n = 0
          for (let r = 0; r < i.length; r++)
            (t = i[r]).indexOf('[]') >= 0 &&
              (t = t.substring(0, t.length - 2)) &&
              (e[n] = !0),
              t && (i[n++] = t)
          return n < i.length && (i.length = n), n > 1 ? i : i[0]
        }
        function p(t, e) {
          if ((0, o.NH)(e)) t = t[e]
          else for (let i = 0; t && i < e.length; i++) t = t[e[i]]
          return t
        }
        function g(t, e, i, n, r) {
          if (((t = t[r]), n === i.length - 1)) e[r] = t
          else if (t)
            if ((0, o.WN)(t)) {
              e = e[r] = new Array(t.length)
              for (let r = 0; r < t.length; r++) g(t, e, i, n, r)
            } else
              (e = e[r] || (e[r] = (0, o.Vf)())), (r = i[++n]), g(t, e, i, n, r)
        }
        function _(t, e, i, n, r, s, h, c) {
          if ((t = t[h]))
            if (n === e.length - 1) {
              if ((0, o.WN)(t)) {
                if (i[n]) {
                  for (let e = 0; e < t.length; e++) r.add(s, t[e], !0, !0)
                  return
                }
                t = t.join(' ')
              }
              r.add(s, t, c, !0)
            } else if ((0, o.WN)(t))
              for (let o = 0; o < t.length; o++) _(t, e, i, n, r, s, o, c)
            else (h = e[++n]), _(t, e, i, n, r, s, h, c)
        }
        function m(t, e, i, n) {
          let r = this.tagindex[t],
            s = r && r.length - i
          if (s && s > 0)
            return (
              (s > e || i) && (r = r.slice(i, i + e)),
              n && (r = w.call(this, r)),
              { tag: t, result: r }
            )
        }
        function w(t) {
          const e = new Array(t.length)
          for (let i, n = 0; n < t.length; n++)
            (i = t[n]), (e[n] = { id: i, doc: this.store[i] })
          return e
        }
        ;(e.default = l),
          (l.prototype.add = function (t, e, i) {
            if (
              ((0, o.TU)(t) && (t = p((e = t), this.key)), e && (t || 0 === t))
            ) {
              if (!i && this.register[t]) return this.update(t, e)
              for (let n, r, s = 0; s < this.field.length; s++)
                (r = this.field[s]),
                  (n = this.tree[s]),
                  (0, o.NH)(n) && (n = [n]),
                  _(e, n, this.marker, 0, this.index[r], t, n[0], i)
              if (n.ur && this.tag) {
                let n = p(e, this.tag),
                  r = (0, o.Vf)()
                ;(0, o.NH)(n) && (n = [n])
                for (let e, s, o = 0; o < n.length; o++)
                  if (
                    ((e = n[o]),
                    !r[e] &&
                      ((r[e] = 1),
                      (s = this.tagindex[e] || (this.tagindex[e] = [])),
                      (!i || !s.includes(t)) &&
                        ((s[s.length] = t), this.fastupdate)))
                  ) {
                    const e = this.register[t] || (this.register[t] = [])
                    e[e.length] = s
                  }
              }
              if (n.qA && this.store && (!i || !this.store[t])) {
                let i
                if (this.storetree) {
                  i = (0, o.Vf)()
                  for (let t, n = 0; n < this.storetree.length; n++)
                    (t = this.storetree[n]),
                      (0, o.NH)(t) ? (i[t] = e[t]) : g(e, i, t, 0, t[0])
                }
                this.store[t] = i || e
              }
            }
            return this
          }),
          (l.prototype.append = function (t, e) {
            return this.add(t, e, !0)
          }),
          (l.prototype.update = function (t, e) {
            return this.remove(t).add(t, e)
          }),
          (l.prototype.remove = function (t) {
            if (((0, o.TU)(t) && (t = p(t, this.key)), this.register[t])) {
              for (
                let e = 0;
                e < this.field.length &&
                (this.index[this.field[e]].remove(t, !this.worker),
                !this.fastupdate);
                e++
              );
              if (n.ur && this.tag && !this.fastupdate)
                for (let e in this.tagindex) {
                  const i = this.tagindex[e],
                    n = i.indexOf(t)
                  ;-1 !== n &&
                    (i.length > 1 ? i.splice(n, 1) : delete this.tagindex[e])
                }
              n.qA && this.store && delete this.store[t],
                delete this.register[t]
            }
            return this
          }),
          (l.prototype.search = function (t, e, i, r) {
            i ||
              (!e && (0, o.TU)(t)
                ? ((i = t), (t = ''))
                : (0, o.TU)(e) && ((i = e), (e = 0)))
            let s,
              h,
              f,
              u,
              l,
              a,
              d = [],
              p = [],
              g = 0
            if (i)
              if ((0, o.WN)(i)) (f = i), (i = null)
              else {
                if (
                  ((t = i.query || t),
                  (s = i.pluck),
                  (f = s || i.index || i.field),
                  (u = n.ur && i.tag),
                  (h = n.qA && this.store && i.enrich),
                  (l = 'and' === i.bool),
                  (e = i.limit || e || 100),
                  (a = i.offset || 0),
                  u && ((0, o.NH)(u) && (u = [u]), !t))
                ) {
                  for (let t, i = 0; i < u.length; i++)
                    (t = m.call(this, u[i], e, a, h)),
                      t && ((d[d.length] = t), g++)
                  return g ? d : []
                }
                ;(0, o.NH)(f) && (f = [f])
              }
            f || (f = this.field),
              (l = l && (f.length > 1 || (u && u.length > 1)))
            const _ = !r && (this.worker || this.async) && []
            for (let n, s, h, m = 0; m < f.length; m++) {
              let w
              if (
                ((s = f[m]),
                (0, o.NH)(s) ||
                  ((w = s),
                  (s = w.field),
                  (t = w.query || t),
                  (e = w.limit || e)),
                _)
              )
                _[m] = this.index[s].searchAsync(t, e, w || i)
              else {
                if (
                  ((n = r ? r[m] : this.index[s].search(t, e, w || i)),
                  (h = n && n.length),
                  u && h)
                ) {
                  const t = []
                  let i = 0
                  l && (t[0] = [n])
                  for (let e, n, r = 0; r < u.length; r++)
                    (e = u[r]),
                      (n = this.tagindex[e]),
                      (h = n && n.length),
                      h && (i++, (t[t.length] = l ? [n] : n))
                  i &&
                    ((n = l ? (0, c.w)(t, e || 100, a || 0) : (0, c.X)(n, t)),
                    (h = n.length))
                }
                if (h) (p[g] = s), (d[g++] = n)
                else if (l) return []
              }
            }
            if (_) {
              const n = this
              return new Promise(function (r) {
                Promise.all(_).then(function (s) {
                  r(n.search(t, e, i, s))
                })
              })
            }
            if (!g) return []
            if (s && (!h || !this.store)) return d[0]
            for (let t, e = 0; e < p.length; e++) {
              if (((t = d[e]), t.length && h && (t = w.call(this, t)), s))
                return t
              d[e] = { field: p[e], result: t }
            }
            return d
          }),
          (l.prototype.contain = function (t) {
            return !!this.register[t]
          }),
          n.qA &&
            ((l.prototype.get = function (t) {
              return this.store[t]
            }),
            (l.prototype.set = function (t, e) {
              return (this.store[t] = e), this
            })),
          n.wA && (l.prototype.searchCache = s.r),
          n.OI && ((l.prototype.export = f.bx), (l.prototype.import = f.xr)),
          n.R3 && (0, h.Z)(l.prototype)
      },
      748: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return k
          },
        })
        var n = i(6404),
          r = (i(4664), i(701))
        function s(t, e, i, n) {
          if (
            t &&
            (e && (t = c(t, e)),
            this.matcher && (t = c(t, this.matcher)),
            this.stemmer && t.length > 1 && (t = c(t, this.stemmer)),
            n &&
              t.length > 1 &&
              (t = (function (t) {
                let e = '',
                  i = ''
                for (let n, r = 0, s = t.length; r < s; r++)
                  (n = t[r]) !== i && (e += i = n)
                return e
              })(t)),
            i || '' === i)
          ) {
            const e = t.split(i)
            return this.filter
              ? (function (t, e) {
                  const i = t.length,
                    n = []
                  for (let r = 0, s = 0; r < i; r++) {
                    const i = t[r]
                    i && !e[i] && (n[s++] = i)
                  }
                  return n
                })(e, this.filter)
              : e
          }
          return t
        }
        const o = /[\p{Z}\p{S}\p{P}\p{C}]+/u
        function h(t, e) {
          const i = (0, r.pi)(t),
            n = i.length,
            s = []
          let o = '',
            h = 0
          for (let r, c, u = 0; u < n; u++)
            (r = i[u]),
              (c = t[r]),
              c
                ? ((s[h++] = f(e ? '(?!\\b)' + r + '(\\b|_)' : r)),
                  (s[h++] = c))
                : (o += (o ? '|' : '') + r)
          return (
            o &&
              ((s[h++] = f(e ? '(?!\\b)(' + o + ')(\\b|_)' : '(' + o + ')')),
              (s[h] = '')),
            s
          )
        }
        function c(t, e) {
          for (
            let i = 0, n = e.length;
            i < n && (t = t.replace(e[i], e[i + 1]));
            i += 2
          );
          return t
        }
        function f(t) {
          return new RegExp(t, 'g')
        }
        function u(t) {
          return s.call(this, ('' + t).toLowerCase(), !1, o, !1)
        }
        const l = {},
          a = {}
        var d = i(3792),
          p = i(6794),
          g = i(8956)
        const _ = {
          memory: {
            charset: 'latin:extra',
            resolution: 3,
            minlength: 4,
            fastupdate: !1,
          },
          performance: {
            resolution: 3,
            minlength: 3,
            optimize: !1,
            context: { depth: 2, resolution: 1 },
          },
          match: { charset: 'latin:extra', tokenize: 'reverse' },
          score: {
            charset: 'latin:advanced',
            resolution: 20,
            minlength: 3,
            context: { depth: 3, resolution: 9 },
          },
          default: {},
        }
        var m = i(5623)
        function w(t, e) {
          if (!(this instanceof w)) return new w(t)
          let i, s, o
          t
            ? (n.qj &&
                (t = (function (t) {
                  if ((0, r.NH)(t))
                    n.eM && !_[t] && console.warn('Preset not found: ' + t),
                      (t = _[t])
                  else {
                    const e = t.preset
                    e &&
                      (n.eM && !e[e] && console.warn('Preset not found: ' + e),
                      (t = Object.assign({}, e[e], t)))
                  }
                  return t
                })(t)),
              (i = t.charset),
              (s = t.lang),
              (0, r.NH)(i) &&
                (-1 === i.indexOf(':') && (i += ':default'), (i = a[i])),
              (0, r.NH)(s) && (s = l[s]))
            : (t = {})
          let c,
            f,
            d = t.context || {}
          ;(this.encode = t.encode || (i && i.encode) || u),
            (this.register = e || (0, r.Vf)()),
            (this.resolution = c = t.resolution || 9),
            (this.tokenize = o = (i && i.tokenize) || t.tokenize || 'strict'),
            (this.depth = 'strict' === o && d.depth),
            (this.bidirectional = (0, r.wD)(d.bidirectional, !0)),
            (this.optimize = f = (0, r.wD)(t.optimize, !0)),
            (this.fastupdate = (0, r.wD)(t.fastupdate, !0)),
            (this.minlength = t.minlength || 1),
            (this.boost = t.boost),
            (this.map = f ? (0, r.PO)(c) : (0, r.Vf)()),
            (this.resolution_ctx = c = d.resolution || 1),
            (this.ctx = f ? (0, r.PO)(c) : (0, r.Vf)()),
            (this.rtl = (i && i.rtl) || t.rtl),
            (this.matcher = (o = t.matcher || (s && s.matcher)) && h(o, !1)),
            (this.stemmer = (o = t.stemmer || (s && s.stemmer)) && h(o, !0)),
            (this.filter =
              (o = t.filter || (s && s.filter)) &&
              (function (t) {
                const e = (0, r.Vf)()
                for (let i = 0, n = t.length; i < n; i++) e[t[i]] = 1
                return e
              })(o)),
            n.wA && (this.cache = (o = t.cache) && new g.Z(o))
        }
        var k = w
        function x(t, e, i, n, r) {
          return i && t > 1
            ? e + (n || 0) <= t
              ? i + (r || 0)
              : (((t - 1) / (e + (n || 0))) * (i + (r || 0)) + 1) | 0
            : 0
        }
        function y(t, e, i) {
          return (
            (t = 1 === t.length ? t[0] : (0, r.zo)(t)),
            i || t.length > e ? t.slice(i, i + e) : t
          )
        }
        function b(t, e, i, n) {
          if (i) {
            const r = n && e > i
            t = (t = t[r ? e : i]) && t[r ? i : e]
          } else t = t[e]
          return t
        }
        function O(t, e, i, n, s) {
          let o = 0
          if ((0, r.WN)(t))
            if (s) {
              const i = t.indexOf(e)
              ;-1 !== i ? t.length > 1 && (t.splice(i, 1), o++) : o++
            } else {
              s = Math.min(t.length, i)
              for (let r, h = 0; h < s; h++)
                (r = t[h]), r && ((o = O(r, e, i, n, s)), n || o || delete t[h])
            }
          else for (let r in t) (o = O(t[r], e, i, n, s)), o || delete t[r]
          return o
        }
        ;(w.prototype.append = function (t, e) {
          return this.add(t, e, !0)
        }),
          (w.prototype.add = function (t, e, i, n) {
            if (e && (t || 0 === t)) {
              if (!n && !i && this.register[t]) return this.update(t, e)
              const s = (e = this.encode('' + e)).length
              if (s) {
                const n = (0, r.Vf)(),
                  o = (0, r.Vf)(),
                  h = this.depth,
                  c = this.resolution
                for (let f = 0; f < s; f++) {
                  let u = e[this.rtl ? s - 1 - f : f],
                    l = u.length
                  if (u && l >= this.minlength && (h || !o[u])) {
                    let a = x(c, s, f),
                      d = ''
                    switch (this.tokenize) {
                      case 'full':
                        if (l > 2) {
                          for (let e = 0; e < l; e++)
                            for (let n = l; n > e; n--)
                              if (n - e >= this.minlength) {
                                const r = x(c, s, f, l, e)
                                ;(d = u.substring(e, n)),
                                  this.push_index(o, d, r, t, i)
                              }
                          break
                        }
                      case 'reverse':
                        if (l > 1) {
                          for (let e = l - 1; e > 0; e--)
                            if (((d = u[e] + d), d.length >= this.minlength)) {
                              const n = x(c, s, f, l, e)
                              this.push_index(o, d, n, t, i)
                            }
                          d = ''
                        }
                      case 'forward':
                        if (l > 1) {
                          for (let e = 0; e < l; e++)
                            (d += u[e]),
                              d.length >= this.minlength &&
                                this.push_index(o, d, a, t, i)
                          break
                        }
                      default:
                        if (
                          (this.boost &&
                            (a = Math.min(
                              (a / this.boost(e, u, f)) | 0,
                              c - 1,
                            )),
                          this.push_index(o, u, a, t, i),
                          h && s > 1 && f < s - 1)
                        ) {
                          const o = (0, r.Vf)(),
                            c = this.resolution_ctx,
                            l = u,
                            a = Math.min(h + 1, s - f)
                          o[l] = 1
                          for (let r = 1; r < a; r++)
                            if (
                              ((u = e[this.rtl ? s - 1 - f - r : f + r]),
                              u && u.length >= this.minlength && !o[u])
                            ) {
                              o[u] = 1
                              const e = x(
                                  c + (s / 2 > c ? 0 : 1),
                                  s,
                                  f,
                                  a - 1,
                                  r - 1,
                                ),
                                h = this.bidirectional && u > l
                              this.push_index(n, h ? l : u, e, t, i, h ? u : l)
                            }
                        }
                    }
                  }
                }
                this.fastupdate || (this.register[t] = 1)
              }
            }
            return this
          }),
          (w.prototype.push_index = function (t, e, i, n, s, o) {
            let h = o ? this.ctx : this.map
            if (
              (!t[e] || (o && !t[e][o])) &&
              (this.optimize && (h = h[i]),
              o
                ? (((t = t[e] || (t[e] = (0, r.Vf)()))[o] = 1),
                  (h = h[o] || (h[o] = (0, r.Vf)())))
                : (t[e] = 1),
              (h = h[e] || (h[e] = [])),
              this.optimize || (h = h[i] || (h[i] = [])),
              (!s || !h.includes(n)) && ((h[h.length] = n), this.fastupdate))
            ) {
              const t = this.register[n] || (this.register[n] = [])
              t[t.length] = h
            }
          }),
          (w.prototype.search = function (t, e, i) {
            i ||
              (!e && (0, r.TU)(t)
                ? (t = (i = t).query)
                : (0, r.TU)(e) && (i = e))
            let s,
              o,
              h,
              c = [],
              f = 0
            if (
              (i &&
                ((t = i.query || t),
                (e = i.limit),
                (f = i.offset || 0),
                (o = i.context),
                (h = n.rw && i.suggest)),
              t && ((s = (t = this.encode('' + t)).length), s > 1))
            ) {
              const e = (0, r.Vf)(),
                i = []
              for (let n, r = 0, o = 0; r < s; r++)
                if (((n = t[r]), n && n.length >= this.minlength && !e[n])) {
                  if (!(this.optimize || h || this.map[n])) return c
                  ;(i[o++] = n), (e[n] = 1)
                }
              s = (t = i).length
            }
            if (!s) return c
            e || (e = 100)
            let u,
              l = this.depth && s > 1 && !1 !== o,
              a = 0
            l ? ((u = t[0]), (a = 1)) : s > 1 && t.sort(r.FK)
            for (let i, n; a < s; a++) {
              if (
                ((n = t[a]),
                l
                  ? ((i = this.add_result(c, h, e, f, 2 === s, n, u)),
                    (h && !1 === i && c.length) || (u = n))
                  : (i = this.add_result(c, h, e, f, 1 === s, n)),
                i)
              )
                return i
              if (h && a === s - 1) {
                let t = c.length
                if (!t) {
                  if (l) {
                    ;(l = 0), (a = -1)
                    continue
                  }
                  return c
                }
                if (1 === t) return y(c[0], e, f)
              }
            }
            return (0, p.w)(c, e, f, h)
          }),
          (w.prototype.add_result = function (t, e, i, n, r, s, o) {
            let h = [],
              c = o ? this.ctx : this.map
            if ((this.optimize || (c = b(c, s, o, this.bidirectional)), c)) {
              let e = 0
              const f = Math.min(
                c.length,
                o ? this.resolution_ctx : this.resolution,
              )
              for (
                let t, u, l = 0, a = 0;
                l < f &&
                ((t = c[l]),
                !(
                  t &&
                  (this.optimize && (t = b(t, s, o, this.bidirectional)),
                  n &&
                    t &&
                    r &&
                    ((u = t.length),
                    u <= n
                      ? ((n -= u), (t = null))
                      : ((t = t.slice(n)), (n = 0))),
                  t && ((h[e++] = t), r && ((a += t.length), a >= i)))
                ));
                l++
              );
              if (e) return r ? y(h, i, 0) : void (t[t.length] = h)
            }
            return !e && h
          }),
          (w.prototype.contain = function (t) {
            return !!this.register[t]
          }),
          (w.prototype.update = function (t, e) {
            return this.remove(t).add(t, e)
          }),
          (w.prototype.remove = function (t, e) {
            const i = this.register[t]
            if (i) {
              if (this.fastupdate)
                for (let e, n = 0; n < i.length; n++)
                  (e = i[n]), e.splice(e.indexOf(t), 1)
              else
                O(this.map, t, this.resolution, this.optimize),
                  this.depth &&
                    O(this.ctx, t, this.resolution_ctx, this.optimize)
              e || delete this.register[t],
                n.wA && this.cache && this.cache.del(t)
            }
            return this
          }),
          n.wA && (w.prototype.searchCache = g.r),
          n.OI && ((w.prototype.export = m.qR), (w.prototype.import = m.xt)),
          n.R3 && (0, d.Z)(w.prototype)
      },
      6794: function (t, e, i) {
        i.d(e, {
          X: function () {
            return s
          },
          w: function () {
            return r
          },
        })
        var n = i(701)
        function r(t, e, i, r) {
          const s = t.length
          let o,
            h,
            c = [],
            f = 0
          r && (r = [])
          for (let u = s - 1; u >= 0; u--) {
            const l = t[u],
              a = l.length,
              d = (0, n.Vf)()
            let p = !o
            for (let t = 0; t < a; t++) {
              const n = l[t],
                a = n.length
              if (a)
                for (let t, l, g = 0; g < a; g++)
                  if (((l = n[g]), o)) {
                    if (o[l]) {
                      if (!u)
                        if (i) i--
                        else if (((c[f++] = l), f === e)) return c
                      ;(u || r) && (d[l] = 1), (p = !0)
                    }
                    if (r && ((t = (h[l] || 0) + 1), (h[l] = t), t < s)) {
                      const e = r[t - 2] || (r[t - 2] = [])
                      e[e.length] = l
                    }
                  } else d[l] = 1
            }
            if (r) o || (h = d)
            else if (!p) return []
            o = d
          }
          if (r)
            for (let t, n, s = r.length - 1; s >= 0; s--) {
              ;(t = r[s]), (n = t.length)
              for (let r, s = 0; s < n; s++)
                if (((r = t[s]), !o[r])) {
                  if (i) i--
                  else if (((c[f++] = r), f === e)) return c
                  o[r] = 1
                }
            }
          return c
        }
        function s(t, e) {
          const i = (0, n.Vf)(),
            r = (0, n.Vf)(),
            s = []
          for (let e = 0; e < t.length; e++) i[t[e]] = 1
          for (let t, n = 0; n < e.length; n++) {
            t = e[n]
            for (let e, n = 0; n < t.length; n++)
              (e = t[n]), i[e] && (r[e] || ((r[e] = 1), (s[s.length] = e)))
          }
          return s
        }
      },
      5623: function (t, e, i) {
        i.d(e, {
          bx: function () {
            return h
          },
          qR: function () {
            return s
          },
          xr: function () {
            return c
          },
          xt: function () {
            return o
          },
        }),
          i(4664)
        var n = i(701)
        function r(t, e, i, n, r, s, o) {
          setTimeout(function () {
            const h = t(i ? i + '.' + n : n, JSON.stringify(o))
            h && h.then
              ? h.then(function () {
                  e.export(t, e, i, r, s + 1)
                })
              : e.export(t, e, i, r, s + 1)
          })
        }
        function s(t, e, i, s, o) {
          let h, c
          switch (o || (o = 0)) {
            case 0:
              if (((h = 'reg'), this.fastupdate)) {
                c = (0, n.Vf)()
                for (let t in this.register) c[t] = 1
              } else c = this.register
              break
            case 1:
              ;(h = 'cfg'), (c = { doc: 0, opt: this.optimize ? 1 : 0 })
              break
            case 2:
              ;(h = 'map'), (c = this.map)
              break
            case 3:
              ;(h = 'ctx'), (c = this.ctx)
              break
            default:
              return
          }
          return r(t, e || this, i, h, s, o, c), !0
        }
        function o(t, e) {
          if (e)
            switch (((0, n.NH)(e) && (e = JSON.parse(e)), t)) {
              case 'cfg':
                this.optimize = !!e.opt
                break
              case 'reg':
                ;(this.fastupdate = !1), (this.register = e)
                break
              case 'map':
                this.map = e
                break
              case 'ctx':
                this.ctx = e
            }
        }
        function h(t, e, i, n, s) {
          if ((s || (s = 0), n || (n = 0), n < this.field.length)) {
            const i = this.field[n],
              r = this.index[i]
            ;(e = this),
              setTimeout(function () {
                r.export(t, e, s ? i : '', n, s++) ||
                  (n++, (s = 1), e.export(t, e, i, n, s))
              })
          } else {
            let e, o
            switch (s) {
              case 1:
                ;(e = 'tag'), (o = this.tagindex)
                break
              case 2:
                ;(e = 'store'), (o = this.store)
                break
              default:
                return
            }
            r(t, this, i, e, n, s, o)
          }
        }
        function c(t, e) {
          if (e)
            switch (((0, n.NH)(e) && (e = JSON.parse(e)), t)) {
              case 'tag':
                this.tagindex = e
                break
              case 'reg':
                ;(this.fastupdate = !1), (this.register = e)
                for (let t, i = 0; i < this.field.length; i++)
                  (t = this.index[this.field[i]]),
                    (t.register = e),
                    (t.fastupdate = !1)
                break
              case 'store':
                this.store = e
                break
              default:
                const i = (t = t.split('.'))[0]
                ;(t = t[1]), i && t && this.index[i].import(t, e)
            }
        }
      },
      4664: function (t, e, i) {
        function n() {
          ;(this.cache = null),
            (this.matcher = null),
            (this.stemmer = null),
            (this.filter = null)
        }
        n.prototype.add,
          n.prototype.append,
          n.prototype.search,
          n.prototype.update,
          n.prototype.remove
      },
      9761: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return r
          },
        })
        var n = i(748)
        function r(t) {
          t = t.data
          const e = self._index,
            i = t.args,
            r = t.task
          if ('init' === r) {
            const e = t.options || {},
              i = t.factory,
              r = e.encode
            ;(e.cache = !1),
              r &&
                0 === r.indexOf('function') &&
                (e.encode = Function('return ' + r)()),
              i
                ? (Function('return ' + i)()(self),
                  (self._index = new self.FlexSearch.Index(e)),
                  delete self.FlexSearch)
                : (self._index = new n.Z(e))
          } else {
            const n = t.id,
              s = e[r].apply(e, i)
            postMessage('search' === r ? { id: n, msg: s } : { id: n })
          }
        }
      },
      7839: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701),
          _handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9761)
        let pid = 0
        function WorkerIndex(t) {
          if (!(this instanceof WorkerIndex)) return new WorkerIndex(t)
          let e
          t
            ? (0, _common_js__WEBPACK_IMPORTED_MODULE_1__.sB)((e = t.encode)) &&
              (t.encode = e.toString())
            : (t = {})
          let i = (self || window)._factory
          i && (i = i.toString())
          const n = 'undefined' == typeof window && self.exports,
            r = this
          ;(this.worker = create(i, n, t.worker)),
            (this.resolver = (0, _common_js__WEBPACK_IMPORTED_MODULE_1__.Vf)()),
            this.worker &&
              (n
                ? this.worker.on('message', function (t) {
                    r.resolver[t.id](t.msg), delete r.resolver[t.id]
                  })
                : (this.worker.onmessage = function (t) {
                    ;(t = t.data),
                      r.resolver[t.id](t.msg),
                      delete r.resolver[t.id]
                  }),
              this.worker.postMessage({ task: 'init', factory: i, options: t }))
        }
        function register(t) {
          WorkerIndex.prototype[t] = WorkerIndex.prototype[t + 'Async'] =
            function () {
              const e = this,
                i = [].slice.call(arguments),
                n = i[i.length - 1]
              let r
              ;(0, _common_js__WEBPACK_IMPORTED_MODULE_1__.sB)(n) &&
                ((r = n), i.splice(i.length - 1, 1))
              const s = new Promise(function (n) {
                setTimeout(function () {
                  ;(e.resolver[++pid] = n),
                    e.worker.postMessage({ task: t, id: pid, args: i })
                })
              })
              return r ? (s.then(r), this) : s
            }
        }
        function create(factory, is_node_js, worker_path) {
          let worker
          try {
            worker = is_node_js
              ? eval(
                  'new (require("worker_threads")["Worker"])("../dist/node/node.js")',
                )
              : factory
              ? new Worker(
                  URL.createObjectURL(
                    new Blob(
                      [
                        'onmessage=' +
                          _handler_js__WEBPACK_IMPORTED_MODULE_0__.Z.toString(),
                      ],
                      { type: 'text/javascript' },
                    ),
                  ),
                )
              : new Worker(
                  (0, _common_js__WEBPACK_IMPORTED_MODULE_1__.NH)(worker_path)
                    ? worker_path
                    : 'worker/worker.js',
                  { type: 'module' },
                )
          } catch (t) {}
          return worker
        }
        ;(__webpack_exports__.Z = WorkerIndex),
          register('add'),
          register('append'),
          register('search'),
          register('update'),
          register('remove')
      },
    },
  ],
)
