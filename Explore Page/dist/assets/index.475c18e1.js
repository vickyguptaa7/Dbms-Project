const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};a();const d=document.querySelector(".mobile-menu-button"),f=document.querySelector(".mobile-menu"),n=document.querySelectorAll(".line");d.addEventListener("click",()=>{f.classList.toggle("hidden"),n[0].classList.toggle("rotate-45"),n[1].classList.toggle("opacity-0"),n[2].classList.toggle("-rotate-45")});const m=document.querySelector(".btn-search-here"),l=document.querySelector(".search-here");let i=!1;m.addEventListener("click",s=>{i||(s.preventDefault(),i=!0),l.classList.toggle("w-[80vw]"),l.focus()});