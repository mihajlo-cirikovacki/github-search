"use strict";var btnBox=document.querySelector(".github-header__btn-box"),form=document.querySelector(".github-search");btnBox.addEventListener("click",(function(t){document.documentElement.classList.toggle("dark-mode");var e=btnBox.querySelector(".github-header__toggle-img"),o=e.getAttribute("src"),n="/assets/icon-moon.svg",r=btnBox.querySelector(".github-header__toggle");e.src=o===n?"/assets/icon-sun.svg":n,"Light"===r.textContent?r.textContent="Dark":r.textContent="Light"}));
//# sourceMappingURL=script.js.map