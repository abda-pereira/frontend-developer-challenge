parcelRequire = function (e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function (r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }
  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "L4bL": [function (require, module, exports) {
    var t;

    function c(c, n) {
      t || (t = setTimeout(function () {
        c(), t = void 0
      }, n))
    }

    function n() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
      document.querySelector(".products-loading").classList.add("products-loading--active"), fetch("https://".concat(t)).then(function (t) {
        return t.json()
      }).then(function (t) {
        return o(t)
      }).catch(function (t) {
        console.log("There has been a problem fetching the product list: " + t.message)
      })
    }

    function o(t) {
      var o = "";
      if (t.products) {
        var e = !0,
          r = !1,
          a = void 0;
        try {
          for (var i, d = t.products[Symbol.iterator](); !(e = (i = d.next()).done); e = !0) product = i.value, o += '\n <div class="card">\n <div class="card-image">\n <img src="http:'.concat(product.image, '"/>\n </div>\n <h2 class="card-name">').concat(product.name, '</h2>\n <p class="card-description">').concat(product.description, '</p>\n <p class="card-oldPrice">De: R$').concat(product.oldPrice.toFixed(2), '</p>\n <h3 class="card-price">Por: R$').concat(product.price.toFixed(2), '</h3>\n <p class="card-installments">ou ').concat(product.installments.count, "x de R$").concat(product.installments.value.toFixed(2), '</p>\n <button class="card-button">Comprar</button>\n </div>\n')
        } catch (s) {
          r = !0, a = s
        } finally {
          try {
            e || null == d.return || d.return()
          } finally {
            if (r) throw a
          }
        }
      }
      document.querySelector(".products-loading").classList.remove("products-loading--active"),
       document.querySelector(".products-list").innerHTML += o, document.querySelector(".products-button").onclick = function () {
        c(function () {
          n(t.nextPage)
        }, 1e3)
      }
    }
    n();
  }, {}]
}, {}, ["L4bL"], null)
