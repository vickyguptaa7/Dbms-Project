const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};f();const m=document.querySelector(".mobile-menu-button"),h=document.querySelector(".mobile-menu"),c=document.querySelectorAll(".line");m.addEventListener("click",()=>{h.classList.toggle("hidden"),c[0].classList.toggle("rotate-45"),c[1].classList.toggle("opacity-0"),c[2].classList.toggle("-rotate-45")});const l=document.querySelectorAll(".star");let d=0;for(let e=0;e<l.length;e++)l[e].starNumber=e+1,["mouseover","mouseout","click"].forEach(function(o){l[e].addEventListener(o,g)});function g(e){let o=e.type,i=this.starNumber;l.forEach((r,t)=>{o==="click"&&(d=i,y(d)),o==="mouseover"&&(t<i?r.classList.add("text-yellow-300"):r.classList.remove("text-yellow-300")),o==="mouseout"&&r.classList.remove("text-yellow-300")})}function y(e){for(let o=0;o<5;o++)e>o?l[o].classList.add("text-yellow-400"):l[o].classList.remove("text-yellow-400")}const u=document.querySelectorAll(".side-image"),a=document.querySelector(".main-image");console.log(u);console.log(a);u.forEach(e=>{e.addEventListener("click",o=>{L(),e.firstElementChild.classList.add("highlight-selected"),a.firstElementChild.setAttribute("src",e.firstElementChild.firstElementChild.getAttribute("src"))})});function L(){u.forEach(e=>{e.firstElementChild.classList.contains("highlight-selected")&&e.firstElementChild.classList.remove("highlight-selected")})}document.querySelector(".left-slide");const p=document.querySelector(".right-slide"),E=document.querySelector(".carosel-cards");E.children;p.addEventListener("click",e=>{});
