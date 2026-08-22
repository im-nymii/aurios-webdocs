(function () {
  "use strict";

  /* ---------- Thème clair / sombre ---------- */
  var root = document.body;
  var stored = localStorage.getItem("theme");
  if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.classList.add("dark");
  }
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      root.classList.toggle("dark");
      localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    });
  }

  /* ---------- Sommaire (TOC) + scroll spy ---------- */
  var content = document.getElementById("content");
  var tocNav = document.getElementById("toc-nav");
  var headings = content ? content.querySelectorAll(".doc h2, .doc h3") : [];

  function slugify(text) {
    return text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  var links = [];
  if (tocNav && headings.length) {
    headings.forEach(function (h) {
      if (!h.id) h.id = slugify(h.textContent);
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      a.className = h.tagName === "H3" ? "lvl-3" : "lvl-2";
      tocNav.appendChild(a);
      links.push({ a: a, h: h });
    });

    var onScroll = function () {
      var top = window.scrollY + 90;
      var current = links[0];
      links.forEach(function (l) {
        if (l.h.offsetTop <= top) current = l;
      });
      links.forEach(function (l) { l.a.classList.toggle("active", l === current); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  } else {
    var toc = document.getElementById("toc");
    if (toc) toc.style.visibility = "hidden";
  }

  /* ---------- Recherche ---------- */
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var index = [];
  var base = document.querySelector('link[rel="stylesheet"]');

  function indexUrl() {
    var href = base ? base.getAttribute("href") : "/assets/css/style.css";
    return href.replace(/assets\/css\/style\.css.*/, "assets/js/search-index.json");
  }

  if (input) {
    fetch(indexUrl())
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; })
      .catch(function () {});

    var render = function (items, q) {
      if (!items.length) {
        results.innerHTML = '<div class="sr-empty">No results for "' + q + '"</div>';
        results.hidden = false;
        return;
      }
      results.innerHTML = items.map(function (it) {
        var ctx = it.content || "";
        var i = ctx.toLowerCase().indexOf(q.toLowerCase());
        if (i > 40) ctx = "…" + ctx.slice(i - 30);
        ctx = ctx.slice(0, 120);
        return '<a href="' + it.url + '"><span class="sr-title">' + it.title +
          '</span><br><span class="sr-ctx">' + ctx + '…</span></a>';
      }).join("");
      results.hidden = false;
    };

    var search = function () {
      var q = input.value.trim();
      if (q.length < 2) { results.hidden = true; return; }
      var ql = q.toLowerCase();
      var matches = index.filter(function (it) {
        return (it.title && it.title.toLowerCase().indexOf(ql) !== -1) ||
               (it.content && it.content.toLowerCase().indexOf(ql) !== -1);
      }).slice(0, 8);
      render(matches, q);
    };

    input.addEventListener("input", search);
    input.addEventListener("focus", function () { if (input.value.trim().length >= 2) search(); });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search")) results.hidden = true;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); }
      if (e.key === "Escape") { results.hidden = true; input.blur(); }
    });
  }

  /* ---------- Diagrammes Mermaid ---------- */
  var mermaidBlocks = content ? content.querySelectorAll("pre > code.language-mermaid") : [];
  if (mermaidBlocks.length) {
    mermaidBlocks.forEach(function (code) {
      var div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent;
      code.parentNode.replaceWith(div);
    });
    var s = document.createElement("script");
    s.type = "module";
    s.textContent =
      'import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";' +
      'mermaid.initialize({ startOnLoad: false, securityLevel: "loose", ' +
      'theme: document.body.classList.contains("dark") ? "dark" : "default" });' +
      'await mermaid.run({ querySelector: ".mermaid" });';
    document.body.appendChild(s);
  }
})();
