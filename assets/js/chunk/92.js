;(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    468: function (e, n, i) {
      'use strict'
      i.r(n),
        i.d(n, 'taro_audio_core', function () {
          return d
        })
      var o = i(0),
        r = i.n(o),
        s = i(138),
        d = (function () {
          function t(e) {
            Object(s.g)(this, e),
              (this.onError = Object(s.c)(this, 'error', 7)),
              (this.onPlay = Object(s.c)(this, 'play', 7)),
              (this.onPause = Object(s.c)(this, 'pause', 7)),
              (this.onTimeUpdate = Object(s.c)(this, 'timeupdate', 7)),
              (this.onEnded = Object(s.c)(this, 'ended', 7)),
              (this.controls = !0),
              (this.autoplay = !1),
              (this.loop = !1),
              (this.muted = !1),
              (this.nativeProps = {})
          }
          return (
            (t.prototype.bindevent = function () {
              var e = this
              this.audio.addEventListener('timeupdate', function (n) {
                e.onTimeUpdate.emit({
                  duration: n.srcElement.duration,
                  currentTime: n.srcElement.duration,
                })
              }),
                this.audio.addEventListener('ended', function () {
                  e.onEnded.emit()
                }),
                this.audio.addEventListener('play', function () {
                  e.onPlay.emit()
                }),
                this.audio.addEventListener('pause', function (n) {
                  e.onPause.emit(n)
                }),
                this.audio.addEventListener('error', function (n) {
                  var i
                  e.onError.emit({
                    errMsg:
                      null === (i = n.srcElement.error) || void 0 === i
                        ? void 0
                        : i.code,
                  })
                })
            }),
            (t.prototype.componentDidLoad = function () {
              this.bindevent()
            }),
            (t.prototype.render = function () {
              var e = this,
                n = this,
                i = n.src,
                o = n.controls,
                d = n.autoplay,
                a = n.loop,
                u = n.muted,
                c = n.nativeProps
              return Object(s.e)(
                'audio',
                r()(
                  {
                    src: i,
                    controls: o,
                    autoplay: d,
                    loop: a,
                    muted: u,
                    ref: function ref(n) {
                      e.audio = n
                    },
                  },
                  c,
                ),
              )
            }),
            t
          )
        })()
      d.style = 'audio{max-width:100%;outline:none}'
    },
  },
])