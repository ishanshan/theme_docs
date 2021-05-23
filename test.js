"use strict";
window.$docsify.plugins = [].concat((function (e, o) {
    e.ready((function () {
        const {topBanner: e} = o.config;
        if (!e) return;
        const t = e.defaultTag || "span", n = o.compiler.compile(e.content), c = e.backgroundColor || "#deebff",
            i = e.textColor || "#091E42", r = e.linkColor || i, l = e.textAlign || "center", d = e.position || "fixed",
            s = e.zIndex || "99", u = document.createElement(t);
        u.setAttribute("id", "TOPBANNER");
        const y = document.querySelector("body");
        y.insertBefore(u, y.childNodes[0]);
        const a = document.querySelector(`${t}#TOPBANNER`);
        a.innerHTML = n, a.style.backgroundColor = c, a.style.color = i, a.style.position = d, a.style.Zindex = s;
        const f = document.querySelector(`${t}#TOPBANNER a`);
        f.style.color = r, u.style.textAlign = l, f.addEventListener("click", e => {
            u.parentNode.removeChild(u)
        })
    }))
}), window.$docsify.plugins);
