;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    612: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return _objectSpread2
      })
      var i = A(610),
        n = A.n(i),
        o = A(608),
        a = A.n(o),
        c = A(631),
        r = A.n(c),
        l = A(635),
        s = A.n(l),
        d = A(624),
        u = A.n(d),
        m = A(639),
        p = A.n(m),
        h = A(643),
        g = A.n(h),
        y = A(67),
        b = A.n(y),
        I = A(91)
      function ownKeys(e, t) {
        var A = n()(e)
        if (a.a) {
          var i = a()(e)
          t &&
            (i = r()(i).call(i, function (t) {
              return s()(e, t).enumerable
            })),
            A.push.apply(A, i)
        }
        return A
      }
      function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var A,
            i,
            n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u()((A = ownKeys(Object(n), !0))).call(A, function (t) {
                Object(I.a)(e, t, n[t])
              })
            : p.a
            ? g()(e, p()(n))
            : u()((i = ownKeys(Object(n)))).call(i, function (t) {
                b()(e, t, s()(n, t))
              })
        }
        return e
      }
    },
    631: function (e, t, A) {
      e.exports = A(632)
    },
    632: function (e, t, A) {
      e.exports = A(633)
    },
    633: function (e, t, A) {
      var i = A(634)
      e.exports = i
    },
    634: function (e, t, A) {
      var i = A(238)
      e.exports = i
    },
    635: function (e, t, A) {
      e.exports = A(636)
    },
    636: function (e, t, A) {
      e.exports = A(637)
    },
    637: function (e, t, A) {
      var i = A(638)
      e.exports = i
    },
    638: function (e, t, A) {
      var i = A(607)
      e.exports = i
    },
    639: function (e, t, A) {
      e.exports = A(640)
    },
    640: function (e, t, A) {
      e.exports = A(641)
    },
    641: function (e, t, A) {
      var i = A(642)
      e.exports = i
    },
    642: function (e, t, A) {
      var i = A(240)
      e.exports = i
    },
    643: function (e, t, A) {
      e.exports = A(644)
    },
    644: function (e, t, A) {
      e.exports = A(645)
    },
    645: function (e, t, A) {
      var i = A(646)
      e.exports = i
    },
    646: function (e, t, A) {
      var i = A(239)
      e.exports = i
    },
    705: function (e, t, A) {
      var i = A(723),
        n = A(724),
        o = A(743),
        a = A(725)
      ;(e.exports = function _toConsumableArray(e) {
        return i(e) || n(e) || o(e) || a()
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    723: function (e, t, A) {
      var i = A(121),
        n = A(744)
      ;(e.exports = function _arrayWithoutHoles(e) {
        if (i(e)) return n(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    724: function (e, t, A) {
      var i = A(45),
        n = A(122),
        o = A(124)
      ;(e.exports = function _iterableToArray(e) {
        if ((void 0 !== i && null != n(e)) || null != e['@@iterator'])
          return o(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    725: function (e, t) {
      ;(e.exports = function _nonIterableSpread() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    788: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return u
      })
      var i = A(93),
        n = A(5),
        o = A.n(n),
        a = A(27),
        c = A.n(a),
        r = A(142),
        l = A.n(r),
        s = A(49),
        d = A(16),
        u = function chooseImage(e) {
          var t = Object(d.i)(e)
          if (!t.flag) {
            var A = { errMsg: 'chooseImage:fail '.concat(t.msg) }
            return console.error(A.errMsg), o.a.reject(A)
          }
          var n = e.count,
            a = void 0 === n ? 1 : n,
            r = e.success,
            u = e.fail,
            m = e.complete,
            p = e.imageId,
            h = void 0 === p ? 'taroChooseImage' : p,
            g = new s.a({
              name: 'chooseImage',
              success: r,
              fail: u,
              complete: m,
            }),
            y = { tempFilePaths: [], tempFiles: [] }
          if (a && 'number' != typeof a)
            return (
              (y.errMsg = Object(d.c)({
                para: 'count',
                correct: 'Number',
                wrong: a,
              })),
              g.fail(y)
            )
          var b = document.getElementById(h)
          if (b)
            a > 1
              ? b.setAttribute('multiple', 'multiple')
              : b.removeAttribute('multiple')
          else {
            var I = document.createElement('input')
            I.setAttribute('type', 'file'),
              I.setAttribute('id', h),
              a > 1 && I.setAttribute('multiple', 'multiple'),
              I.setAttribute('accept', 'image/*'),
              I.setAttribute(
                'style',
                'position: fixed; top: -4000px; left: -3000px; z-index: -300;',
              ),
              document.body.appendChild(I),
              (b = document.getElementById(h))
          }
          return new o.a(function (e) {
            var t = document.createEvent('MouseEvents')
            t.initEvent('click', !0, !0),
              b &&
                (b.dispatchEvent(t),
                (b.onchange = function (t) {
                  var A = t.target
                  if (A) {
                    var n = A.files || [],
                      o = Object(i.a)(n)
                    o &&
                      c()(o).call(o, function (e) {
                        var t,
                          A,
                          i = new Blob([e], { type: e.type }),
                          n = l.a.createObjectURL(i)
                        null === (t = y.tempFilePaths) ||
                          void 0 === t ||
                          t.push(n),
                          null === (A = y.tempFiles) ||
                            void 0 === A ||
                            A.push({
                              path: n,
                              size: e.size,
                              type: e.type,
                              originalFileObj: e,
                            })
                      }),
                      g.success(y, e),
                      (A.value = '')
                  }
                }))
          })
        }
    },
    789: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return m
      })
      var i = A(708),
        n = A(709),
        o = A(5),
        a = A.n(o),
        c = A(10),
        r = A.n(c),
        l = A(28),
        s = A.n(l),
        d = A(16),
        u = A(49),
        m = (function () {
          var e = Object(n.a)(
            Object(i.a)().mark(function _callee(e) {
              var t, A, n, o, c, l, m, p, h, g, y, b, I, f, j, v, x
              return Object(i.a)().wrap(
                function _callee$(i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (
                          ((t = function _loadImage(e, t) {
                            return new a.a(function (A) {
                              var i = document.createElement(
                                'taro-swiper-item-core',
                              )
                              i.style.cssText =
                                'display:flex;align-items:start;justify-content:center;overflow-y:scroll;'
                              var n = new Image()
                              ;(n.style.maxWidth = '100%'), (n.src = e)
                              var o = document.createElement('div')
                              ;(o.style.cssText =
                                'display:flex;align-items:center;justify-content:center;max-width:100%;min-height:100%;'),
                                o.appendChild(n),
                                i.appendChild(o),
                                A(i),
                                'function' == typeof t &&
                                  n.addEventListener('error', function (e) {
                                    t({ errMsg: e.message })
                                  })
                            })
                          }),
                          (A = Object(d.i)(e)).flag)
                        ) {
                          i.next = 6
                          break
                        }
                        return (
                          (n = { errMsg: 'previewImage:fail '.concat(A.msg) }),
                          console.error(n.errMsg),
                          i.abrupt('return', a.a.reject(n))
                        )
                      case 6:
                        return (
                          (o = e.urls),
                          (c = void 0 === o ? [] : o),
                          (l = e.current),
                          (m = void 0 === l ? '' : l),
                          (p = e.success),
                          (h = e.fail),
                          (g = e.complete),
                          (y = new u.a({
                            name: 'previewImage',
                            success: p,
                            fail: h,
                            complete: g,
                          })),
                          (b = document.createElement('div')).classList.add(
                            'preview-image',
                          ),
                          (b.style.cssText =
                            'position:fixed;top:0;left:0;z-index:1050;width:100%;height:100%;overflow:hidden;outline:0;background-color:#111;'),
                          b.addEventListener('click', function () {
                            b.remove()
                          }),
                          ((I =
                            document.createElement('taro-swiper-core')).full =
                            !0),
                          (f = []),
                          (i.prev = 15),
                          (i.next = 18),
                          a.a.all(
                            r()(c).call(c, function (e) {
                              return t(e, h)
                            }),
                          )
                        )
                      case 18:
                        ;(f = i.sent), (i.next = 24)
                        break
                      case 21:
                        return (
                          (i.prev = 21),
                          (i.t0 = i.catch(15)),
                          i.abrupt('return', y.fail({ errMsg: i.t0 }))
                        )
                      case 24:
                        for (j = 0; j < f.length; j++)
                          (v = f[j]), I.appendChild(v)
                        return (
                          (x = s()(c).call(c, m)),
                          (I.current = x),
                          b.appendChild(I),
                          document.body.appendChild(b),
                          i.abrupt('return', y.success())
                        )
                      case 30:
                      case 'end':
                        return i.stop()
                    }
                },
                _callee,
                null,
                [[15, 21]],
              )
            }),
          )
          return function previewImage(t) {
            return e.apply(this, arguments)
          }
        })()
    },
    867: function (e, t, A) {
      'use strict'
      A.d(t, 'b', function () {
        return c
      }),
        A.d(t, 'a', function () {
          return r
        })
      var i = A(5),
        n = A.n(i),
        o = A(49),
        a = A(16),
        c =
          (Object(a.j)('saveVideoToPhotosAlbum'),
          Object(a.j)('openVideoEditor'),
          Object(a.j)('getVideoInfo'),
          Object(a.j)('compressVideo'),
          function chooseVideo(e) {
            var t = Object(a.i)(e)
            if (!t.flag) {
              var A = { errMsg: 'chooseVideo:fail '.concat(t.msg) }
              return console.error(A.errMsg), n.a.reject(A)
            }
            var i = e.success,
              c = e.fail,
              r = e.complete,
              l = new o.a({
                name: 'chooseVideo',
                success: i,
                fail: c,
                complete: r,
              }),
              s = {
                tempFilePath: '',
                duration: 0,
                size: 0,
                height: 0,
                width: 0,
              },
              d = document.createElement('input')
            return (
              d.setAttribute('type', 'file'),
              d.setAttribute('multiple', 'multiple'),
              d.setAttribute('accept', 'video/*'),
              d.setAttribute(
                'style',
                'position: fixed; top: -4000px; left: -3000px; z-index: -300;',
              ),
              document.body.appendChild(d),
              new n.a(function (e) {
                var t = document.createEvent('MouseEvents')
                t.initEvent('click', !0, !0),
                  d.dispatchEvent(t),
                  (d.onchange = function (t) {
                    var A,
                      i =
                        null === (A = t.target.files) || void 0 === A
                          ? void 0
                          : A[0],
                      n = new FileReader()
                    ;(n.onload = function (t) {
                      var A,
                        i = document.createElement('video'),
                        n =
                          null === (A = t.target) || void 0 === A
                            ? void 0
                            : A.result
                      ;(i.preload = 'metadata'),
                        (i.src = n),
                        (i.onloadedmetadata = function () {
                          return (
                            (s.tempFilePath = n),
                            (s.duration = i.duration),
                            (s.size = t.total),
                            (s.height = i.videoHeight),
                            (s.width = i.videoHeight),
                            l.success(s, e)
                          )
                        })
                    }),
                      i && n.readAsDataURL(i)
                  })
              }).finally(function () {
                document.body.removeChild(d)
              })
            )
          }),
        r = Object(a.j)('chooseMedia')
    },
    868: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return n
      })
      var i = A(16),
        n =
          (Object(i.j)('saveImageToPhotosAlbum'),
          Object(i.j)('previewMedia'),
          Object(i.j)('compressImage'),
          Object(i.j)('chooseMessageFile'))
    },
    869: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return n
      })
      var i = A(16),
        n =
          (Object(i.j)('saveFileToDisk'),
          Object(i.j)('saveFile'),
          Object(i.j)('removeSavedFile'),
          Object(i.j)('openDocument'))
      Object(i.j)('getSavedFileList'),
        Object(i.j)('getSavedFileInfo'),
        Object(i.j)('getFileSystemManager'),
        Object(i.j)('getFileInfo')
    },
    927: function (e, t, A) {
      'use strict'
      A.d(t, 'a', function () {
        return S
      })
      A(708), A(709)
      var i = A(0),
        n = A.n(i),
        o = A(12),
        a = A(16),
        c = A(49),
        r = A(612),
        l = A(39),
        s = A(40),
        d = (function () {
          function Toast() {
            Object(l.a)(this, Toast),
              (this.options = {
                title: '',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: !1,
              }),
              (this.style = {
                maskStyle: {
                  position: 'fixed',
                  'z-index': '1000',
                  top: '0',
                  right: '0',
                  left: '0',
                  bottom: '0',
                },
                toastStyle: {
                  'z-index': '5000',
                  'box-sizing': 'border-box',
                  display: 'flex',
                  'flex-direction': 'column',
                  'justify-content': 'center',
                  '-webkit-justify-content': 'center',
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  'min-width': '120px',
                  'max-width': '200px',
                  'min-height': '120px',
                  padding: '15px',
                  transform: 'translate(-50%, -50%)',
                  'border-radius': '5px',
                  'text-align': 'center',
                  'line-height': '1.6',
                  color: '#FFFFFF',
                  background: 'rgba(17, 17, 17, 0.7)',
                },
                successStyle: {
                  margin: '6px auto',
                  width: '38px',
                  height: '38px',
                  background:
                    'transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat',
                  'background-size': '100%',
                },
                errrorStyle: {
                  margin: '6px auto',
                  width: '38px',
                  height: '38px',
                  background:
                    'transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat',
                  'background-size': '100%',
                },
                loadingStyle: {
                  margin: '6px auto',
                  width: '38px',
                  height: '38px',
                  '-webkit-animation': 'taroLoading 1s steps(12, end) infinite',
                  animation: 'taroLoading 1s steps(12, end) infinite',
                  background:
                    'transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat',
                  'background-size': '100%',
                },
                imageStyle: {
                  margin: '6px auto',
                  width: '40px',
                  height: '40px',
                  background: 'transparent no-repeat',
                  'background-size': '100%',
                },
                textStyle: { margin: '0', 'font-size': '16px' },
              })
          }
          return (
            Object(s.a)(Toast, [
              {
                key: 'create',
                value: function create() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    A =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'toast',
                    i = this.style,
                    n = i.maskStyle,
                    o = i.toastStyle,
                    c = i.successStyle,
                    l = i.errrorStyle,
                    s = i.loadingStyle,
                    d = i.imageStyle,
                    u = i.textStyle,
                    m = Object(r.a)(
                      Object(r.a)(Object(r.a)({}, this.options), t),
                      {},
                      { _type: A },
                    )
                  if (
                    ((this.el = document.createElement('div')),
                    (this.el.className = 'taro__toast'),
                    (this.el.style.opacity = '0'),
                    (this.el.style.transition = 'opacity 0.1s linear'),
                    (this.mask = document.createElement('div')),
                    this.mask.setAttribute('style', Object(a.e)(n)),
                    (this.mask.style.display = m.mask ? 'block' : 'none'),
                    (this.icon = document.createElement('p')),
                    m.image)
                  )
                    this.icon.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, d),
                          {},
                          { 'background-image': 'url('.concat(m.image, ')') },
                        ),
                      ),
                    )
                  else {
                    var p =
                      'loading' === m.icon ? s : 'error' === m.icon ? l : c
                    this.icon.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, p),
                          'none' === m.icon ? { display: 'none' } : {},
                        ),
                      ),
                    )
                  }
                  return (
                    (this.toast = document.createElement('div')),
                    this.toast.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, o),
                          'none' === m.icon
                            ? { 'min-height': '0', padding: '10px 15px' }
                            : {},
                        ),
                      ),
                    ),
                    (this.title = document.createElement('p')),
                    this.title.setAttribute('style', Object(a.e)(u)),
                    (this.title.textContent = m.title),
                    this.toast.appendChild(this.icon),
                    this.toast.appendChild(this.title),
                    this.el.appendChild(this.mask),
                    this.el.appendChild(this.toast),
                    document.body.appendChild(this.el),
                    setTimeout(function () {
                      e.el.style.opacity = '1'
                    }, 0),
                    (this.type = m._type),
                    m.duration >= 0 && this.hide(m.duration, this.type),
                    ''
                  )
                },
              },
              {
                key: 'show',
                value: function show() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    A =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'toast',
                    i = Object(r.a)(
                      Object(r.a)(Object(r.a)({}, this.options), t),
                      {},
                      { _type: A },
                    )
                  this.hideOpacityTimer && clearTimeout(this.hideOpacityTimer),
                    this.hideDisplayTimer &&
                      clearTimeout(this.hideDisplayTimer),
                    (this.title.textContent = i.title || ''),
                    (this.mask.style.display = i.mask ? 'block' : 'none')
                  var n = this.style,
                    o = n.toastStyle,
                    c = n.successStyle,
                    l = n.errrorStyle,
                    s = n.loadingStyle,
                    d = n.imageStyle
                  if (i.image)
                    this.icon.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, d),
                          {},
                          { 'background-image': 'url('.concat(i.image, ')') },
                        ),
                      ),
                    )
                  else if (!i.image && i.icon) {
                    var u =
                      'loading' === i.icon ? s : 'error' === i.icon ? l : c
                    this.icon.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, u),
                          'none' === i.icon ? { display: 'none' } : {},
                        ),
                      ),
                    )
                  }
                  return (
                    this.toast.setAttribute(
                      'style',
                      Object(a.e)(
                        Object(r.a)(
                          Object(r.a)({}, o),
                          'none' === i.icon
                            ? { 'min-height': '0', padding: '10px 15px' }
                            : {},
                        ),
                      ),
                    ),
                    (this.el.style.display = 'block'),
                    setTimeout(function () {
                      e.el.style.opacity = '1'
                    }, 0),
                    (this.type = i._type),
                    i.duration >= 0 && this.hide(i.duration, this.type),
                    ''
                  )
                },
              },
              {
                key: 'hide',
                value: function hide() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    A = arguments.length > 1 ? arguments[1] : void 0
                  this.type === A &&
                    (this.hideOpacityTimer &&
                      clearTimeout(this.hideOpacityTimer),
                    this.hideDisplayTimer &&
                      clearTimeout(this.hideDisplayTimer),
                    (this.hideOpacityTimer = setTimeout(function () {
                      ;(e.el.style.opacity = '0'),
                        (e.hideDisplayTimer = setTimeout(function () {
                          e.el.style.display = 'none'
                        }, 100))
                    }, t)))
                },
              },
            ]),
            Toast
          )
        })(),
        u = A(5),
        m = A.n(u),
        p = (function () {
          function Modal() {
            Object(l.a)(this, Modal),
              (this.options = {
                title: '',
                content: '',
                showCancel: !0,
                cancelText: '取消',
                cancelColor: '#000000',
                confirmText: '确定',
                confirmColor: '#3CC51F',
              }),
              (this.style = {
                maskStyle: {
                  position: 'fixed',
                  'z-index': '1000',
                  top: '0',
                  right: '0',
                  left: '0',
                  bottom: '0',
                  background: 'rgba(0,0,0,0.6)',
                },
                modalStyle: {
                  'z-index': '4999',
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  'max-width': '300px',
                  'border-radius': '3px',
                  'text-align': 'center',
                  'line-height': '1.6',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                },
                titleStyle: { padding: '20px 24px 9px', 'font-size': '18px' },
                textStyle: {
                  padding: '0 24px 12px',
                  'min-height': '40px',
                  'font-size': '15px',
                  'line-height': '1.3',
                  color: '#808080',
                },
                footStyle: {
                  position: 'relative',
                  'line-height': '48px',
                  'font-size': '18px',
                  display: 'flex',
                },
                btnStyle: {
                  position: 'relative',
                  '-webkit-box-flex': '1',
                  '-webkit-flex': '1',
                  flex: '1',
                },
              })
          }
          return (
            Object(s.a)(Modal, [
              {
                key: 'create',
                value: function create() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                  return new m.a(function (A) {
                    var i = e.style,
                      n = i.maskStyle,
                      o = i.modalStyle,
                      c = i.titleStyle,
                      l = i.textStyle,
                      s = i.footStyle,
                      d = i.btnStyle,
                      u = Object(r.a)(Object(r.a)({}, e.options), t)
                    ;(e.el = document.createElement('div')),
                      (e.el.className = 'taro__modal'),
                      (e.el.style.opacity = '0'),
                      (e.el.style.transition = 'opacity 0.2s linear')
                    var m = document.createElement('div')
                    ;(m.className = 'taro-modal__mask'),
                      m.setAttribute('style', Object(a.e)(n))
                    var p = document.createElement('div')
                    ;(p.className = 'taro-modal__content'),
                      p.setAttribute('style', Object(a.e)(o))
                    var h = u.title
                      ? c
                      : Object(r.a)(Object(r.a)({}, c), {}, { display: 'none' })
                    ;(e.title = document.createElement('div')),
                      (e.title.className = 'taro-modal__title'),
                      e.title.setAttribute('style', Object(a.e)(h)),
                      (e.title.textContent = u.title)
                    var g = u.title
                      ? l
                      : Object(r.a)(
                          Object(r.a)({}, l),
                          {},
                          { padding: '40px 20px 26px', color: '#353535' },
                        )
                    ;(e.text = document.createElement('div')),
                      (e.text.className = 'taro-modal__text'),
                      e.text.setAttribute('style', Object(a.e)(g)),
                      (e.text.textContent = u.content)
                    var y = document.createElement('div')
                    ;(y.className = 'taro-modal__foot'),
                      y.setAttribute('style', Object(a.e)(s))
                    var b = Object(r.a)(
                      Object(r.a)({}, d),
                      {},
                      {
                        color: u.cancelColor,
                        display: u.showCancel ? 'block' : 'none',
                      },
                    )
                    ;(e.cancel = document.createElement('div')),
                      (e.cancel.className =
                        'taro-model__btn taro-model__cancel'),
                      e.cancel.setAttribute('style', Object(a.e)(b)),
                      (e.cancel.textContent = u.cancelText),
                      (e.cancel.onclick = function () {
                        e.hide(), A('cancel')
                      }),
                      (e.confirm = document.createElement('div')),
                      (e.confirm.className =
                        'taro-model__btn taro-model__confirm'),
                      e.confirm.setAttribute('style', Object(a.e)(d)),
                      (e.confirm.style.color = u.confirmColor),
                      (e.confirm.textContent = u.confirmText),
                      (e.confirm.onclick = function () {
                        e.hide(), A('confirm')
                      }),
                      y.appendChild(e.cancel),
                      y.appendChild(e.confirm),
                      p.appendChild(e.title),
                      p.appendChild(e.text),
                      p.appendChild(y),
                      e.el.appendChild(m),
                      e.el.appendChild(p),
                      document.body.appendChild(e.el),
                      setTimeout(function () {
                        e.el.style.opacity = '1'
                      }, 0)
                  })
                },
              },
              {
                key: 'show',
                value: function show() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                  return new m.a(function (A) {
                    var i = Object(r.a)(Object(r.a)({}, e.options), t)
                    e.hideOpacityTimer && clearTimeout(e.hideOpacityTimer),
                      e.hideDisplayTimer && clearTimeout(e.hideDisplayTimer)
                    var n = e.style.textStyle
                    if (i.title)
                      (e.title.textContent = i.title),
                        (e.title.style.display = 'block'),
                        e.text.setAttribute('style', Object(a.e)(n))
                    else {
                      e.title.style.display = 'none'
                      var o = Object(r.a)(
                        Object(r.a)({}, n),
                        {},
                        { padding: '40px 20px 26px', color: '#353535' },
                      )
                      e.text.setAttribute('style', Object(a.e)(o))
                    }
                    ;(e.text.textContent = i.content || ''),
                      (e.cancel.style.display = i.showCancel
                        ? 'block'
                        : 'none'),
                      (e.cancel.textContent = i.cancelText || ''),
                      (e.cancel.style.color = i.cancelColor || ''),
                      (e.confirm.textContent = i.confirmText || ''),
                      (e.confirm.style.color = i.confirmColor || ''),
                      (e.cancel.onclick = function () {
                        e.hide(), A('cancel')
                      }),
                      (e.confirm.onclick = function () {
                        e.hide(), A('confirm')
                      }),
                      (e.el.style.display = 'block'),
                      setTimeout(function () {
                        e.el.style.opacity = '1'
                      }, 0)
                  })
                },
              },
              {
                key: 'hide',
                value: function hide() {
                  var e = this
                  this.hideOpacityTimer && clearTimeout(this.hideOpacityTimer),
                    this.hideDisplayTimer &&
                      clearTimeout(this.hideDisplayTimer),
                    (this.hideOpacityTimer = setTimeout(function () {
                      ;(e.el.style.opacity = '0'),
                        (e.hideDisplayTimer = setTimeout(function () {
                          e.el.style.display = 'none'
                        }, 200))
                    }, 0))
                },
              },
            ]),
            Modal
          )
        })(),
        h = A(10),
        g = A.n(h),
        y = A(27),
        b = A.n(y),
        I = A(118),
        f = A.n(I),
        j = function noop() {},
        v = (function () {
          function ActionSheet() {
            Object(l.a)(this, ActionSheet),
              (this.options = {
                itemList: [],
                itemColor: '#000000',
                success: j,
                fail: j,
                complete: j,
              }),
              (this.style = {
                maskStyle: {
                  position: 'fixed',
                  'z-index': '1000',
                  top: '0',
                  right: '0',
                  left: '0',
                  bottom: '0',
                  background: 'rgba(0,0,0,0.6)',
                },
                actionSheetStyle: {
                  'z-index': '4999',
                  position: 'fixed',
                  left: '0',
                  bottom: '0',
                  '-webkit-transform': 'translate(0, 100%)',
                  transform: 'translate(0, 100%)',
                  width: '100%',
                  'line-height': '1.6',
                  background: '#EFEFF4',
                  '-webkit-transition': '-webkit-transform .3s',
                  transition: 'transform .3s',
                },
                menuStyle: { 'background-color': '#FCFCFD' },
                cellStyle: {
                  position: 'relative',
                  padding: '10px 0',
                  'text-align': 'center',
                  'font-size': '18px',
                },
                cancelStyle: {
                  'margin-top': '6px',
                  padding: '10px 0',
                  'text-align': 'center',
                  'font-size': '18px',
                  color: '#000000',
                  'background-color': '#FCFCFD',
                },
              }),
              (this.lastConfig = {})
          }
          return (
            Object(s.a)(ActionSheet, [
              {
                key: 'create',
                value: function create() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                  return new m.a(function (A) {
                    var i,
                      n,
                      o = e.style,
                      c = o.maskStyle,
                      l = o.actionSheetStyle,
                      s = o.menuStyle,
                      d = o.cellStyle,
                      u = o.cancelStyle,
                      m = Object(r.a)(Object(r.a)({}, e.options), t)
                    ;(e.lastConfig = m),
                      (e.el = document.createElement('div')),
                      (e.el.className = 'taro__actionSheet'),
                      (e.el.style.opacity = '0'),
                      (e.el.style.transition = 'opacity 0.2s linear')
                    var p = document.createElement('div')
                    p.setAttribute('style', Object(a.e)(c)),
                      (e.actionSheet = document.createElement('div')),
                      e.actionSheet.setAttribute('style', Object(a.e)(l)),
                      (e.menu = document.createElement('div')),
                      e.menu.setAttribute(
                        'style',
                        Object(a.e)(
                          Object(r.a)(
                            Object(r.a)({}, s),
                            {},
                            { color: m.itemColor },
                          ),
                        ),
                      ),
                      (e.cells = g()((i = m.itemList)).call(i, function (t, i) {
                        var n = document.createElement('div')
                        return (
                          (n.className = 'taro-actionsheet__cell'),
                          n.setAttribute('style', Object(a.e)(d)),
                          (n.textContent = t),
                          (n.dataset.tapIndex = ''.concat(i)),
                          (n.onclick = function (t) {
                            e.hide()
                            var i = t.currentTarget,
                              n =
                                Number(
                                  null == i ? void 0 : i.dataset.tapIndex,
                                ) || 0
                            A(n)
                          }),
                          n
                        )
                      })),
                      (e.cancel = document.createElement('div')),
                      e.cancel.setAttribute('style', Object(a.e)(u)),
                      (e.cancel.textContent = '取消'),
                      b()((n = e.cells)).call(n, function (t) {
                        return e.menu.appendChild(t)
                      }),
                      e.actionSheet.appendChild(e.menu),
                      e.actionSheet.appendChild(e.cancel),
                      e.el.appendChild(p),
                      e.el.appendChild(e.actionSheet)
                    var h = function cb() {
                      e.hide(), A('cancel')
                    }
                    ;(p.onclick = h),
                      (e.cancel.onclick = h),
                      document.body.appendChild(e.el),
                      setTimeout(function () {
                        ;(e.el.style.opacity = '1'),
                          Object(a.h)(e.actionSheet, 'translate(0, 0)')
                      }, 0)
                  })
                },
              },
              {
                key: 'show',
                value: function show() {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                  return new m.a(function (A) {
                    var i,
                      n = Object(r.a)(Object(r.a)({}, e.options), t)
                    ;(e.lastConfig = n),
                      e.hideOpacityTimer && clearTimeout(e.hideOpacityTimer),
                      e.hideDisplayTimer && clearTimeout(e.hideDisplayTimer),
                      n.itemColor && (e.menu.style.color = n.itemColor)
                    var o = e.style.cellStyle
                    b()((i = n.itemList)).call(i, function (t, i) {
                      var n
                      e.cells[i]
                        ? (n = e.cells[i])
                        : (((n = document.createElement('div')).className =
                            'taro-actionsheet__cell'),
                          n.setAttribute('style', Object(a.e)(o)),
                          (n.dataset.tapIndex = ''.concat(i)),
                          e.cells.push(n),
                          e.menu.appendChild(n)),
                        (n.textContent = t),
                        (n.onclick = function (t) {
                          e.hide()
                          var i = t.currentTarget,
                            n =
                              Number(null == i ? void 0 : i.dataset.tapIndex) ||
                              0
                          A(n)
                        })
                    })
                    var c = e.cells.length,
                      l = n.itemList.length
                    if (c > l) {
                      for (var s, d = l; d < c; d++)
                        e.menu.removeChild(e.cells[d])
                      f()((s = e.cells)).call(s, l)
                    }
                    ;(e.el.style.display = 'block'),
                      setTimeout(function () {
                        ;(e.el.style.opacity = '1'),
                          Object(a.h)(e.actionSheet, 'translate(0, 0)')
                      }, 0)
                  })
                },
              },
              {
                key: 'hide',
                value: function hide() {
                  var e = this
                  this.hideOpacityTimer && clearTimeout(this.hideOpacityTimer),
                    this.hideDisplayTimer &&
                      clearTimeout(this.hideDisplayTimer),
                    (this.hideOpacityTimer = setTimeout(function () {
                      ;(e.el.style.opacity = '0'),
                        Object(a.h)(e.actionSheet, 'translate(0, 100%)'),
                        (e.hideDisplayTimer = setTimeout(function () {
                          e.el.style.display = 'none'
                        }, 200))
                    }, 0))
                },
              },
            ]),
            ActionSheet
          )
        })(),
        x = 'default'
      function init(e) {
        if ('ready' !== x) {
          var t = e.createElement('style')
          ;(t.textContent =
            '@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}'),
            e.querySelector('head').appendChild(t),
            (x = 'ready')
        }
      }
      var w = new d(),
        M = new p(),
        S =
          (new v(),
          function showToast() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { title: '' }
            init(document)
            var t = (e = n()(
                {
                  title: '',
                  icon: 'success',
                  image: '',
                  duration: 1500,
                  mask: !1,
                },
                e,
              )),
              A = t.success,
              i = t.fail,
              o = t.complete,
              r = new c.a({
                name: 'showToast',
                success: A,
                fail: i,
                complete: o,
              })
            if ('string' != typeof e.title)
              return r.fail({
                errMsg: Object(a.c)({
                  para: 'title',
                  correct: 'String',
                  wrong: e.title,
                }),
              })
            if ('number' != typeof e.duration)
              return r.fail({
                errMsg: Object(a.c)({
                  para: 'duration',
                  correct: 'Number',
                  wrong: e.duration,
                }),
              })
            e.image && 'string' != typeof e.image && (e.image = ''),
              (e.mask = !!e.mask)
            var l = ''
            return (
              (l = w.el ? w.show(e, 'toast') : w.create(e, 'toast')),
              r.success({ errMsg: l })
            )
          })
      o.a.eventCenter.on('__taroRouterChange', function () {
        !(function hideToast() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.success,
            A = e.fail,
            i = e.complete,
            n = new c.a({ name: 'hideToast', success: t, fail: A, complete: i })
          w.el ? (w.hide(0, 'toast'), n.success()) : n.success()
        })(),
          (function hideLoading() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.success,
              A = e.fail,
              i = e.complete,
              n = new c.a({
                name: 'hideLoading',
                success: t,
                fail: A,
                complete: i,
              })
            w.el ? (w.hide(0, 'loading'), n.success()) : n.success()
          })(),
          (function hideModal() {
            M.el && M.hide()
          })()
      })
      Object(a.j)('enableAlertBeforeUnload'),
        Object(a.j)('disableAlertBeforeUnload')
    },
  },
])