(() => {
  var t = {
      978: (t, r, e) => {
        var o = e(214);
        t.exports = function (t) {
          return o(t).replace(/\s(\w)/g, function (t, r) {
            return r.toUpperCase();
          });
        };
      },
      879: (t) => {
        t.exports = function (t) {
          return r.test(t)
            ? t.toLowerCase()
            : e.test(t)
            ? (
                (function (t) {
                  return t.replace(n, function (t, r) {
                    return r ? " " + r : "";
                  });
                })(t) || t
              ).toLowerCase()
            : o.test(t)
            ? (function (t) {
                return t.replace(s, function (t, r, e) {
                  return r + " " + e.toLowerCase().split("").join(" ");
                });
              })(t).toLowerCase()
            : t.toLowerCase();
        };
        var r = /\s/,
          e = /(_|-|\.|:)/,
          o = /([a-z][A-Z]|[A-Z][a-z])/,
          n = /[\W_]+(.|$)/g,
          s = /(.)([A-Z]+)/g;
      },
      214: (t, r, e) => {
        var o = e(879);
        t.exports = function (t) {
          return o(t)
            .replace(/[\W_]+(.|$)/g, function (t, r) {
              return r ? " " + r : "";
            })
            .trim();
        };
      },
    },
    r = {};
  function e(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var s = (r[o] = { exports: {} });
    return t[o](s, s.exports, e), s.exports;
  }
  (() => {
    "use strict";
    function t(t) {
      console.log(`Hello ${t}`);
    }
    var r = e(879),
      o = e(978),
      n = e(214);
    const s = r("Miyamoto Musashi"),
      u = o("Miyamoto Musashi"),
      a = n("MiyamotoMusashi");
    t(s), t(u), t(a);
  })();
})();
