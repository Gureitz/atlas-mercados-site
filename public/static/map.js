// Mirante — choropleths de realce progressivo. O conteúdo citável (rankings e
// valores) já vem renderizado no servidor; este script só pinta mapas.
//   #brmap     Brasil por UF (GeoJSON local). O endpoint, o rótulo e a unidade
//              vêm de data-endpoint / data-rotulo / data-unidade; sem eles, é
//              o PIB por UF do /mapa (/api/macro/uf.json), como sempre foi.
//   #worldmap  mapa-múndi do /mapa (TopoJSON + /api/macro/paises).
(function () {
  if (typeof d3 === "undefined") return;

  function fmtBig(v) {
    if (v >= 1e12) return (v / 1e12).toFixed(2).replace(".", ",") + " tri";
    if (v >= 1e9) return (v / 1e9).toFixed(0).replace(".", ",") + " bi";
    if (v >= 1e6) return (v / 1e6).toFixed(0) + " mi";
    return Math.round(v).toLocaleString("pt-BR");
  }
  function fmtUn(v, un) {
    if (v === null || v === undefined) return "sem dado";
    if (un === "R$" || un === "US$") return un + " " + fmtBig(v);
    if (un === "un." || un === "hab") return Math.round(v).toLocaleString("pt-BR") + (un === "un." ? "" : " hab");
    if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1).replace(".", ",") + " mi " + un;
    if (Math.abs(v) >= 1e3) return Math.round(v).toLocaleString("pt-BR") + " " + un;
    return v.toFixed(1).replace(".", ",") + " " + un;
  }

  // ---- Brasil por UF ----
  var brEl = document.getElementById("brmap");
  if (brEl) {
    var endpoint = brEl.getAttribute("data-endpoint") || "/api/macro/uf.json";
    var rotuloPadrao = brEl.getAttribute("data-rotulo") || "PIB";
    var unPadrao = brEl.getAttribute("data-unidade") || "R$";
    Promise.all([d3.json("/static/br_uf.geojson"), d3.json(endpoint)]).then(function (res) {
      var geo = res[0], j = res[1] || {};
      // /api/macro/uf devolve {gdp}, /api/mercados/uf devolve {valores, meta}.
      var vals = j.valores || j.gdp || {}, nome = j.nome || {}, meta = j.meta || {};
      var rot = meta.rotulo || rotuloPadrao, un = meta.unidade || unPadrao;
      var nums = Object.values(vals).filter(function (v) { return v > 0; });
      if (!nums.length) {
        brEl.innerHTML = '<div class="dim2" style="padding:24px">Sem dado por UF para ' + rot + '.</div>';
        return;
      }
      var color = d3.scaleSequentialLog([d3.min(nums), d3.max(nums)], d3.interpolateYlOrBr);
      var W = brEl.clientWidth || 520, H = Math.round(W * 0.92);
      var proj = d3.geoMercator().fitSize([W, H], geo);
      var path = d3.geoPath(proj);
      var svg = d3.select(brEl).append("svg")
        .attr("viewBox", "0 0 " + W + " " + H).attr("width", "100%").style("display", "block");
      var tip = d3.select(brEl).append("div").attr("class", "maptip");
      svg.append("g").selectAll("path").data(geo.features).join("path")
        .attr("d", path)
        .attr("fill", function (d) { var v = vals[(d.properties || {}).codarea]; return v ? color(v) : "#161d29"; })
        .attr("stroke", "#0a0d13").attr("stroke-width", 0.5)
        .on("mousemove", function (ev, d) {
          var code = (d.properties || {}).codarea;
          var v = vals[code];
          tip.style("opacity", 1).style("left", (ev.offsetX + 14) + "px").style("top", (ev.offsetY + 8) + "px")
            .html("<b>" + (nome[code] || ("UF " + code)) + "</b><br>" + rot + ": " +
                  (v ? fmtUn(v, un) : (meta.tipo === "derivado" ? "sem estimativa" : "não divulgado")) +
                  (meta.tipo === "derivado" ? '<br><span class="dim2">estimativa (derivado)</span>' : ""));
        })
        .on("mouseleave", function () { tip.style("opacity", 0); });
    }).catch(function (e) {
      brEl.innerHTML = '<div class="dim2" style="padding:24px">Mapa do Brasil indisponível (' + e + ').</div>';
    });
  }

  // ---- Mapa-múndi ----
  var el = document.getElementById("worldmap");
  if (!el || typeof topojson === "undefined") return;

  var TOPO = "https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@1/world/110m.json";

  // O indicador vem do HTML (data-ind), que por sua vez veio da URL — assim a
  // escolha feita ao clicar numa coluna é compartilhável.
  var IND = el.getAttribute("data-ind") || "pib";

  function fmtVal(v, meta) {
    if (v === null || v === undefined) return "sem dado";
    var u = (meta && meta.unidade) || "";
    if (u === "US$") return "US$ " + fmtBig(v);
    if (u === "hab") return fmtBig(v);
    return v.toFixed(1).replace(".", ",") + " " + u;
  }

  Promise.all([d3.json(TOPO), d3.json("/api/macro/paises/" + encodeURIComponent(IND) + ".json")])
    .then(function (res) {
    var world = res[0], gdp = (res[1] && res[1].gdp) || {};
    var meta = (res[1] && res[1].meta) || { nome: "PIB nominal", unidade: "US$", log: true };
    var feats = topojson.feature(world, world.objects.countries).features;

    var vals = Object.values(gdp).filter(function (v) { return v !== null; });
    var min = d3.min(vals), max = d3.max(vals);
    // Log só serve para série toda positiva. Indicadores com negativo
    // (conta corrente, crescimento) precisam de escala divergente em torno do zero.
    var color;
    if (meta.log) {
      color = d3.scaleSequentialLog([min, max], d3.interpolateYlOrBr);
    } else if (min < 0) {
      var lim = Math.max(Math.abs(min), Math.abs(max));
      color = d3.scaleDiverging([-lim, 0, lim], d3.interpolateRdYlGn);
    } else {
      color = d3.scaleSequential([min, max], d3.interpolateYlOrBr);
    }

    var W = el.clientWidth || 720, H = Math.round(W * 0.52);
    var proj = d3.geoNaturalEarth1().fitSize([W, H], { type: "Sphere" });
    var path = d3.geoPath(proj);

    var svg = d3.select(el).append("svg")
      .attr("viewBox", "0 0 " + W + " " + H)
      .attr("width", "100%").style("display", "block");

    svg.append("path").datum({ type: "Sphere" }).attr("d", path)
      .attr("fill", "#0d1119").attr("stroke", "#1e2735");

    var tip = d3.select(el).append("div").attr("class", "maptip");

    svg.append("g").selectAll("path").data(feats).join("path")
      .attr("d", path)
      .attr("fill", function (d) {
        var v = gdp[(d.properties || {}).a3];
        return (v === null || v === undefined) ? "#161d29" : color(v);
      })
      .attr("stroke", "#0a0d13").attr("stroke-width", 0.4)
      .on("mousemove", function (ev, d) {
        var v = gdp[(d.properties || {}).a3];
        tip.style("opacity", 1)
          .style("left", (ev.offsetX + 14) + "px").style("top", (ev.offsetY + 8) + "px")
          .html("<b>" + (d.properties.name || "—") + "</b><br>" +
                meta.nome + ": " + fmtVal(v, meta));
      })
      .on("mouseleave", function () { tip.style("opacity", 0); });

    // legenda
    var lw = 180, lh = 8;
    var lg = svg.append("g").attr("transform", "translate(14," + (H - 26) + ")");
    var defs = svg.append("defs");
    var grad = defs.append("linearGradient").attr("id", "lg");
    d3.range(0, 1.01, 0.1).forEach(function (t) {
      grad.append("stop").attr("offset", (t * 100) + "%")
        .attr("stop-color", meta.log || min >= 0
          ? d3.interpolateYlOrBr(t) : d3.interpolateRdYlGn(t));
    });
    lg.append("rect").attr("width", lw).attr("height", lh).attr("fill", "url(#lg)").attr("rx", 2);
    lg.append("text").attr("y", -4).attr("font-size", 9).attr("fill", "#8b95a6")
      .text(meta.nome + " (" + meta.unidade + ") — menor → maior");
  }).catch(function (e) {
    el.innerHTML = '<div class="dim2" style="padding:24px">Não foi possível carregar o mapa (' + e + ').</div>';
  });
})();
