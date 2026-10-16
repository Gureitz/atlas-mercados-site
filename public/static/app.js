// Mirante — JS de realce progressivo (o conteúdo já vem renderizado do servidor).
(function () {
  // ---- Busca com autocomplete ----
  var inp = document.getElementById("q");
  var box = document.getElementById("results");
  if (inp && box) {
    var t = null;
    var indice = null;
    // Com servidor, /api/busca?q= filtra lá. No site congelado (HTML estático)
    // esse endpoint não existe: carrega o índice inteiro uma vez e filtra aqui.
    function buscar(q) {
      return fetch("/api/busca?q=" + encodeURIComponent(q))
        .then(function (r) {
          if (!r.ok || (r.headers.get("content-type") || "").indexOf("json") < 0) throw new Error("estatico");
          return r.json();
        })
        .catch(function () {
          var p = indice ? Promise.resolve(indice)
            : fetch("/api/busca.json").then(function (r) { return r.json(); })
                .then(function (rows) { indice = rows; return rows; });
          var Q = q.toUpperCase();
          return p.then(function (rows) {
            return rows.filter(function (r) {
              return (r.denom || "").toUpperCase().indexOf(Q) >= 0 ||
                     (r.ticker || "").toUpperCase().indexOf(Q) >= 0;
            }).slice(0, 9);
          });
        });
    }
    inp.addEventListener("input", function () {
      clearTimeout(t);
      var q = inp.value.trim();
      if (q.length < 1) { box.style.display = "none"; return; }
      t = setTimeout(function () {
        buscar(q)
          .then(function (rows) {
            if (!rows.length) { box.style.display = "none"; return; }
            box.innerHTML = rows.map(function (r) {
              return '<a href="/empresa/' + r.slug + '">' +
                '<span class="tk mono">' + (r.ticker || "") + '</span>' +
                '<span class="nm">' + r.denom + '</span>' +
                '<span class="dim2" style="font-size:10px">' + (r.setor || "") + '</span></a>';
            }).join("");
            box.style.display = "block";
          });
      }, 140);
    });
    document.addEventListener("click", function (e) {
      if (!inp.contains(e.target) && !box.contains(e.target)) box.style.display = "none";
    });
    inp.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = box.querySelector("a");
        if (first) window.location = first.getAttribute("href");
      }
    });
  }

  // ---- Relógio ----
  var clk = document.getElementById("clock");
  if (clk) {
    var tick = function () {
      var d = new Date();
      clk.textContent = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) +
        " · " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    };
    tick(); setInterval(tick, 1000);
  }
})();
