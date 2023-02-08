(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e)
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = 0))
  );
})([
  function (a, b, c) {
    (function (f, a) {
      (function () {
        function g(d) {
          var e = null,
            b = "function";
          return (
            typeof fetch == b
              ? (e = fetch(d).then((a) => a.arrayBuffer()))
              : ((d = c(2).join(a, d)),
                (e = new Promise((a, b) => {
                  c(4).readFile(d, (c, e) => {
                    c ? b(c) : a(e);
                  });
                }))),
            e
          );
        }
        function h() {
          var a = null,
            b = null;
          (b = "message"),
            (a = i),
            addEventListener(b, a),
            (b = '{"mitekWorkerStatus": "ready"}'),
            postMessage(b);
        }
        function i(a) {
          var b = null,
            c = null,
            d = null;
          (b = a.data),
            (c = {}),
            k(null, b, c),
            (d = []),
            d.push(b.imageData.data.buffer),
            postMessage(c, d);
        }
        function r(a, b) {
          var c = null,
            d = 0,
            e = 0,
            f = null;
          if (((c = String()), (d = 0 | a[b]), 0 == (255 & d))) return c + "";
          for (
            e = 0;
            (f = J((d << 24) >> 24)),
              (c = c.concat(f)),
              (e = 0 | (e + 1)),
              (d = 0 | a[0 | (b + e)]),
              0 != (255 & d);

          );
          return c + "";
        }
        function k(a, c, e) {
          var g = null,
            i = 0,
            x = 0,
            C = 0,
            I = 0,
            H = 0,
            G = 0,
            F = 0,
            J = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            u = 0,
            v = null,
            K = 0,
            L = 0,
            t = 0,
            w = -0,
            O = null,
            l = 0,
            m = null,
            j = 0,
            k = null,
            D = 0,
            E = -0,
            P = 0,
            o = 0,
            p = 0,
            s = 0,
            h = 0,
            n = 0,
            q = 0;
          if (
            ((g = $()),
            (O = 0 | (-408 + g)),
            _(O),
            (m = c.imageData),
            (k = m.data),
            (E = +m.width),
            (P = ~~+m.height),
            (o = ~~E),
            (i = 0 | (P * o)),
            (p = i << 2),
            (s = 0 | Q(p)),
            0 < (0 | i))
          )
            for (
              h = 0;
              (j = b[s >> 2]),
                (m = M),
                (m[0 | (j + h)] = 0 | k[0 | (0 + h)]),
                (h = 0 | (h + 1)),
                !!((0 | h) < (0 | p));

            );
          if (
            ((h = c.documentType),
            c.glareRoiPercentage,
            c.glarePixelMinIntensity,
            c.glarePercentage,
            c.glareMinWidthPercentage,
            (x = c.enableLogging),
            (b[16838441] = c.imageIndex),
            (C = c.fourCornerThreshold),
            (I = c.exposureThreshold),
            (H = c.focusThreshold),
            (G = c.glareThreshold),
            (F = c.mrzThreshold),
            (J = c.detectMRZ),
            (y = c.detectGlare),
            (z = c.detectFocus),
            (A = c.detectExposure),
            (B = c.detectFourCorners),
            +Date.now(),
            (u = 0 | (392 + O)),
            R(u, i),
            (j = b[s >> 2]),
            (m = M),
            (K = b[u >> 2]),
            (v = M),
            (n = 0 | ((o << 2) * P)),
            0 < (0 | n))
          )
            for (
              q = 0;
              (v[0 | (K + (q >>> 2))] =
                0 |
                ((0 |
                  (((46871 * (255 & m[0 | (j + (0 | (q + 1)))])) >>> 16) +
                    ((13933 * (255 & m[0 | (j + q)])) >>> 16))) +
                  ((4732 * (255 & m[0 | (j + (0 | (q + 2)))])) >>> 16))),
                (q = 0 | (q + 4)),
                !!((0 | q) < (0 | n));

            );
          if (
            (+Date.now(),
            (L = 0 | (368 + O)),
            V(L, u, o, P, 8),
            (E = +Date.now()),
            (t = 0 | (352 + O)),
            R(t, 0 | (3 * i)),
            (j = b[s >> 2]),
            (m = M),
            (D = b[t >> 2]),
            (k = M),
            0 < (0 | n))
          )
            for (q = 0, s = 0; ; ) {
              if (
                ((k[0 | (D + s)] = 0 | m[0 | (j + q)]),
                (k[0 | (D + (0 | (s + 1)))] = 0 | m[0 | (j + (0 | (q + 1)))]),
                (k[0 | (D + (0 | (s + 2)))] = 0 | m[0 | (j + (0 | (q + 2)))]),
                (q = 0 | (q + 4)),
                (0 | q) < (0 | n))
              ) {
                s = 0 | (s + 3);
                continue;
              }
              break;
            }
          switch (
            ((w = +Date.now()),
            (n = 0 | (328 + O)),
            V(n, t, o, P, 24),
            (s = 0 | (176 + O)),
            (q = 0 | (96 + O)),
            c.guideWindowL,
            c.guideWindowT,
            c.guideWindowR,
            c.guideWindowB,
            0 | h)
          ) {
            case 10:
              S(n, L, B, A, z, J, y, 40, s, q, x, C, I, H, G, F);
              break;
            case 70:
              S(n, L, B, A, z, J, y, 70, s, q, x, C, I, H, G, F);
              break;
            case 50:
              S(n, L, B, A, z, J, y, 1, s, q, x, C, I, H, G, F);
              break;
            case 60:
              S(n, L, B, A, z, J, y, 2, s, q, x, C, I, H, G, F);
              break;
            case 20:
              x && ((m = "Detecting PDF417 barcode"), console.log(m)),
                (h = 0 | (16 + O)),
                0 < (0 | (0 | lZ())) &&
                  ((d[(4096 + s) >> 3] = 0),
                  (d[(4104 + s) >> 3] = 0),
                  (d[(4112 + s) >> 3] = 0),
                  (d[(4120 + s) >> 3] = 0),
                  (d[(4128 + s) >> 3] = 0),
                  (d[(4136 + s) >> 3] = 0),
                  (d[(4144 + s) >> 3] = 0),
                  (d[(4152 + s) >> 3] = 0),
                  (d[s >> 3] = +d[h >> 3]),
                  (d[(8 + s) >> 3] = +d[(8 + h) >> 3]),
                  (d[(16 + s) >> 3] = +d[(16 + h) >> 3]),
                  (d[(24 + s) >> 3] = +d[(24 + h) >> 3]),
                  (d[(32 + s) >> 3] = +d[(32 + h) >> 3]),
                  (d[(40 + s) >> 3] = +d[(40 + h) >> 3]),
                  (d[(48 + s) >> 3] = +d[(48 + h) >> 3]),
                  (d[(56 + s) >> 3] = +d[(56 + h) >> 3]),
                  (b[(64 + s) >> 2] = 0 | b[(76 + h) >> 2]));
              break;
            case 100:
              S(n, L, B, A, z, J, y, 100, s, q, 0, 0, 0, 0, 0, 0);
              break;
            default:
          }
          if (
            ((e.imageIndex = 0 | b[16838441]),
            (e.ax = ~~+d[s >> 3]),
            (e.ay = ~~+d[(8 + s) >> 3]),
            (e.bx = ~~+d[(16 + s) >> 3]),
            (e.by = ~~+d[(24 + s) >> 3]),
            (e.cx = ~~+d[(32 + s) >> 3]),
            (e.cy = ~~+d[(40 + s) >> 3]),
            (e.dx = ~~+d[(48 + s) >> 3]),
            (e.dy = ~~+d[(56 + s) >> 3]),
            (e.fourCornerScore = 0 | b[(64 + s) >> 2]),
            (e.fourCornerDuration = w - E),
            (e.lowContrastConfidence = 0 | b[(72 + s) >> 2]),
            (e.busyBackground = 0 | b[(68 + s) >> 2]),
            (e.exposureScore = 0 | b[(8 + q) >> 2]),
            (e.exposureDuration = +d[(16 + q) >> 3]),
            (e.focusScore = 0 | b[(24 + q) >> 2]),
            (e.focusDuration = +d[(40 + q) >> 3]),
            (e.glareLeft = 0 | b[(48 + q) >> 2]),
            (e.glareTop = 0 | b[(52 + q) >> 2]),
            (e.glareRight = 0 | b[(56 + q) >> 2]),
            (e.glareBottom = 0 | b[(60 + q) >> 2]),
            (e.glareScore = 0 | b[(64 + q) >> 2]),
            (e.glareDuration = +d[(72 + q) >> 3]),
            B
              ? ((e.minPadding = 0 | W(o, P, s)),
                (e.horizontalFill = 0 | X(o, P, s)),
                (P = 0 | Y(s)))
              : ((e.minPadding = 0), (e.horizontalFill = 0), (P = 0)),
            (e.skewAngle = P),
            (o = 0 | O),
            R(o, p),
            (j = b[o >> 2]),
            (m = M),
            0 < (0 | i))
          )
            for (
              P = 0;
              (p = 0 | v[0 | (K + P)]),
                (h = P << 2),
                (m[0 | (j + (0 | (h + 2)))] = p),
                (m[0 | (j + (0 | (h + 1)))] = p),
                (m[0 | (j + h)] = p),
                (m[0 | (j + (0 | (h + 3)))] = 255),
                (P = 0 | (P + 1)),
                (0 | P) != (0 | i);

            );
          (P = 0 | b[(4 + o) >> 2]), (p = j), (O = m), (O = O);
          a: if (0 != (0 | P)) {
            if (0 == (0 | p) && +O.length == +(P >>> 0)) break a;
            O = O.subarray(+(p >>> 0), +((p + P) >>> 0));
          } else 0 != (0 | p) && (O = O.subarray(+(p >>> 0)));
          (e.grayscale = new Uint8Array(O)),
            (e.imageData = c.imageData),
            (e.mrzScore = 0 | b[(28 + q) >> 2]),
            (l = b[(32 + q) >> 2]),
            (O = M),
            (e.mrz = r(O, l)),
            Z(o),
            Z(t),
            Z(u),
            _(g);
        }
        function j(a, b, c) {
          var d = null,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            k = null;
          d = String();
          a: if (0 != (0 | c))
            for (f = c, e = 0; ; ) {
              if (((h = 0 | a[0 | (b + e)]), 0 != (255 & h))) {
                for (;;) {
                  if (
                    ((i = 255 & h),
                    (g =
                      -16777216 < h << 24
                        ? i
                        : 192 > (255 & h)
                        ? (63 & i) | (g << 6)
                        : 224 > (255 & h)
                        ? 31 & i
                        : 240 > (255 & h)
                        ? 15 & i
                        : 7 & i),
                    (f = 0 | (f - 1)),
                    (e = 0 | (e + 1)),
                    0 != (0 | f))
                  ) {
                    if (((h = 0 | a[0 | (b + e)]), 128 == (192 & h))) {
                      if (0 != (255 & h)) continue;
                      break a;
                    }
                    h = 0;
                  } else (h = 1), (f = 0);
                  break;
                }
                if (
                  (65536 > g >>> 0
                    ? (i = g)
                    : ((g = 0 | (g - 65536)),
                      (k = J(0 | ((g >>> 10) + 55296))),
                      (d = d.concat(k)),
                      (i = 0 | ((1023 & g) + 56320))),
                  (k = J(i)),
                  (d = d.concat(k)),
                  !h)
                )
                  continue;
              }
              break;
            }
          return (
            (e = 0 | (c - 1)),
            10 == (255 & a[0 | (b + e)])
              ? ((k = d.substr(0, e)), void console.log(k))
              : void console.log(d)
          );
        }
        function l() {
          throw new Error("Abort called");
        }
        function m(a, b) {
          var c = null;
          (c = r(a, b)), console.log(c);
        }
        function n() {
          return +Date.now();
        }
        function o() {
          throw Error(`Tried to allocate more than BIGNUM bytes`);
        }
        function p() {}
        function q(a) {
          (a |= 0), m(M, a >> 0);
        }
        function s(a, b) {
          (a |= 0), (b |= 0), j(M, a >> 0, b);
        }
        function t(a) {
          (a |= 0), wi();
        }
        function u(a, b) {
          return (a |= 0), (b |= 0), 0 | (0 | we());
        }
        function v(a, b, c) {
          return (a |= 0), (b |= 0), (c |= 0), 0 | (0 | wc());
        }
        function w(a, b, c, d) {
          return (a |= 0), (b |= 0), (c |= 0), (d |= 0), 0 | (0 | wa());
        }
        function x(a, b, c, d) {
          (a |= 0), (b |= 0), (c |= 0), (d |= 0), v_();
        }
        function y(a, b, c) {
          return (a |= 0), (b |= 0), (c |= 0), 0 | (0 | v7());
        }
        function z(a) {
          return (a |= 0), 0 | (0 | v9());
        }
        function A(a, b) {
          return (a |= 0), (b |= 0), 0 | (0 | v8());
        }
        function B(a, b, c, d) {
          return (a |= 0), (b |= 0), (c |= 0), (d |= 0), 0 | (0 | v$());
        }
        function C(a, b) {
          return (a |= 0), (b = +b), 0 | (0 | v6());
        }
        function D(a, b, c, d, e, g) {
          return (
            (a |= 0),
            (b |= 0),
            (c |= 0),
            (d |= 0),
            (e |= 0),
            (g |= 0),
            0 | (0 | v5())
          );
        }
        function E(a, b) {
          return (a |= 0), (b |= 0), 0 | (0 | wh());
        }
        function F(a) {
          var b = (a + 65535) >> 16;
          try {
            return e.xo.grow(b), H(e.xo.buffer), b << 16;
          } catch (a) {
            return -1;
          }
        }
        function G() {
          this.i0 = 0;
          this.d = [this];
          (1 === arguments.length && void 0 === arguments[0]) || p(this);
        }
        function H(a) {
          (M = new Uint8Array(a)),
            (N = new Uint16Array(a)),
            (b = new Int32Array(a)),
            (O = new Float32Array(a)),
            (d = new Float64Array(a));
        }
        function I() {
          throw new Error("this should be unreachable");
        }
        var J = String.fromCharCode,
          K =
            ("object" == typeof self && self.self === self && self) ||
            ("object" == typeof f && f.global === f && f) ||
            this,
          L = Math.fround;
        G.prototype.PerformIQA = function (a, b) {
          return k(this, a, b);
        };
        var M = null,
          N = null,
          b = null,
          O = null,
          d = null,
          e = null,
          P = null;
        var Q = null,
          R = null,
          V = null,
          S = null,
          W = null,
          X = null,
          Y = null,
          Z = null,
          $ = null,
          _ = null;
        (K.MtkMWebApi = G),
          (K.MtkMWebApi.promise = g("mitekMobileWeb.wasm")
            .then(
              (a) =>
                WebAssembly.instantiate(a, {
                  i: {
                    dp: n,
                    b$: q,
                    go: l,
                    k7: s,
                    bU: I,
                    aV: t,
                    k8: u,
                    k9: v,
                    d1: w,
                    kQ: I,
                    k_: x,
                    k$: y,
                    la: z,
                    k5: A,
                    k4: B,
                    eZ: C,
                    hn: D,
                    k6: E,
                    wu: o,
                    w4: Math.acos,
                    xl: F,
                  },
                }),
              console.log
            )
            .then(
              (a) => {
                (e = a.instance.exports),
                  (P = e.xo.buffer),
                  H(P),
                  (Q = e.mm),
                  (R = e.fR),
                  (V = e.ht),
                  (S = e.ex),
                  (W = e.lA),
                  (X = e.lz),
                  (Y = e.ly),
                  (Z = e.fQ),
                  ($ = e.lb),
                  (_ = e.ho),
                  (K.MtkMWebApi.promise = Promise.resolve()),
                  e.kP(),
                  e.kO(),
                  e.kN(),
                  e.kM(),
                  e.kL(),
                  e.kK(),
                  h();
              },
              console.log,
              console.log
            ));
      })();
    }.call(this, c(1), "/"));
  },
  function (a) {
    var b = (function () {
      return this;
    })();
    try {
      b = b || new Function("return this")();
    } catch (a) {
      "object" == typeof window && (b = window);
    }
    a.exports = b;
  },
  function (a, b, c) {
    (function (a) {
      function c(a, b) {
        for (var c, d = 0, e = a.length - 1; 0 <= e; e--)
          (c = a[e]),
            "." === c
              ? a.splice(e, 1)
              : ".." === c
              ? (a.splice(e, 1), d++)
              : d && (a.splice(e, 1), d--);
        if (b) for (; d--; d) a.unshift("..");
        return a;
      }
      function d(a) {
        "string" != typeof a && (a += "");
        var b,
          c = 0,
          d = -1,
          e = !0;
        for (b = a.length - 1; 0 <= b; --b)
          if (!(47 === a.charCodeAt(b))) -1 == d && ((e = !1), (d = b + 1));
          else if (!e) {
            c = b + 1;
            break;
          }
        return -1 === d ? "" : a.slice(c, d);
      }
      function e(a, b) {
        if (a.filter) return a.filter(b);
        for (var c = [], d = 0; d < a.length; d++)
          b(a[d], d, a) && c.push(a[d]);
        return c;
      }
      (b.resolve = function () {
        for (
          var b, d = "", f = !1, g = arguments.length - 1;
          -1 <= g && !f;
          g--
        ) {
          if (((b = 0 <= g ? arguments[g] : a.cwd()), "string" != typeof b))
            throw new TypeError("Arguments to path.resolve must be strings");
          else if (!b) continue;
          (d = b + "/" + d), (f = "/" === b.charAt(0));
        }
        return (
          (d = c(
            e(d.split("/"), function (a) {
              return !!a;
            }),
            !f
          ).join("/")),
          (f ? "/" : "") + d || "."
        );
      }),
        (b.normalize = function (a) {
          var d = b.isAbsolute(a),
            g = "/" === f(a, -1);
          return (
            (a = c(
              e(a.split("/"), function (a) {
                return !!a;
              }),
              !d
            ).join("/")),
            a || d || (a = "."),
            a && g && (a += "/"),
            (d ? "/" : "") + a
          );
        }),
        (b.isAbsolute = function (a) {
          return "/" === a.charAt(0);
        }),
        (b.join = function () {
          var a = Array.prototype.slice.call(arguments, 0);
          return b.normalize(
            e(a, function (a) {
              if ("string" != typeof a)
                throw new TypeError("Arguments to path.join must be strings");
              return a;
            }).join("/")
          );
        }),
        (b.relative = function (a, c) {
          function d(a) {
            for (var b = 0; b < a.length && "" === a[b]; b++);
            for (var c = a.length - 1; 0 <= c && "" === a[c]; c--);
            return b > c ? [] : a.slice(b, c - b + 1);
          }
          (a = b.resolve(a).substr(1)), (c = b.resolve(c).substr(1));
          for (
            var e = d(a.split("/")),
              f = d(c.split("/")),
              g = Math.min(e.length, f.length),
              h = g,
              j = 0;
            j < g;
            j++
          )
            if (e[j] !== f[j]) {
              h = j;
              break;
            }
          for (var i = [], j = h; j < e.length; j++) i.push("..");
          return (i = i.concat(f.slice(h))), i.join("/");
        }),
        (b.sep = "/"),
        (b.delimiter = ":"),
        (b.dirname = function (a) {
          if (("string" != typeof a && (a += ""), 0 === a.length)) return ".";
          for (
            var b = a.charCodeAt(0),
              c = 47 === b,
              d = -1,
              e = !0,
              f = a.length - 1;
            1 <= f;
            --f
          )
            if (((b = a.charCodeAt(f)), 47 !== b)) e = !1;
            else if (!e) {
              d = f;
              break;
            }
          return -1 === d
            ? c
              ? "/"
              : "."
            : c && 1 === d
            ? "/"
            : a.slice(0, d);
        }),
        (b.basename = function (a, b) {
          var c = d(a);
          return (
            b &&
              c.substr(-1 * b.length) === b &&
              (c = c.substr(0, c.length - b.length)),
            c
          );
        }),
        (b.extname = function (a) {
          "string" != typeof a && (a += "");
          for (
            var b, c = -1, d = 0, e = -1, f = !0, g = 0, h = a.length - 1;
            0 <= h;
            --h
          ) {
            if (((b = a.charCodeAt(h)), 47 === b)) {
              if (!f) {
                d = h + 1;
                break;
              }
              continue;
            }
            -1 == e && ((f = !1), (e = h + 1)),
              46 === b
                ? -1 === c
                  ? (c = h)
                  : 1 != g && (g = 1)
                : -1 !== c && (g = -1);
          }
          return -1 === c ||
            -1 === e ||
            0 == g ||
            (1 == g && c === e - 1 && c === d + 1)
            ? ""
            : a.slice(c, e);
        });
      var f = function (a, b, c) {
        return a.substr(b, c);
      };
    }.call(this, c(3)));
  },
  function (a) {
    function b() {
      throw new Error("setTimeout has not been defined");
    }
    function c() {
      throw new Error("clearTimeout has not been defined");
    }
    function d(a) {
      if (j === setTimeout) return setTimeout(a, 0);
      if ((j === b || !j) && setTimeout)
        return (j = setTimeout), setTimeout(a, 0);
      try {
        return j(a, 0);
      } catch (b) {
        try {
          return j.call(null, a, 0);
        } catch (b) {
          return j.call(this, a, 0);
        }
      }
    }
    function e(a) {
      if (k === clearTimeout) return clearTimeout(a);
      if ((k === c || !k) && clearTimeout)
        return (k = clearTimeout), clearTimeout(a);
      try {
        return k(a);
      } catch (b) {
        try {
          return k.call(null, a);
        } catch (b) {
          return k.call(this, a);
        }
      }
    }
    function f() {
      o &&
        m &&
        ((o = !1), m.length ? (n = m.concat(n)) : (p = -1), n.length && g());
    }
    function g() {
      if (!o) {
        var a = d(f);
        o = !0;
        for (var b = n.length; b; ) {
          for (m = n, n = []; ++p < b; ) m && m[p].run();
          (p = -1), (b = n.length);
        }
        (m = null), (o = !1), e(a);
      }
    }
    function h(a, b) {
      (this.fun = a), (this.array = b);
    }
    function i() {}
    var j,
      k,
      l = (a.exports = {});
    (function () {
      try {
        j = "function" == typeof setTimeout ? setTimeout : b;
      } catch (a) {
        j = b;
      }
      try {
        k = "function" == typeof clearTimeout ? clearTimeout : c;
      } catch (a) {
        k = c;
      }
    })();
    var m,
      n = [],
      o = !1,
      p = -1;
    (l.nextTick = function (a) {
      var b = Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
      n.push(new h(a, b)), 1 !== n.length || o || d(g);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (l.title = "browser"),
      (l.browser = !0),
      (l.env = {}),
      (l.argv = []),
      (l.version = ""),
      (l.versions = {}),
      (l.on = i),
      (l.addListener = i),
      (l.once = i),
      (l.off = i),
      (l.removeListener = i),
      (l.removeAllListeners = i),
      (l.emit = i),
      (l.prependListener = i),
      (l.prependOnceListener = i),
      (l.listeners = function () {
        return [];
      }),
      (l.binding = function () {
        throw new Error("process.binding is not supported");
      }),
      (l.cwd = function () {
        return "/";
      }),
      (l.chdir = function () {
        throw new Error("process.chdir is not supported");
      }),
      (l.umask = function () {
        return 0;
      });
  },
  function () {},
]);
