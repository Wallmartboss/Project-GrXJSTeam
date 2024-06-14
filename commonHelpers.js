import{A as S}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".mobile-menu__link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),r.classList.toggle("is-open"),t?document.body.style.overflow="auto":document.body.style.overflow="hidden"};o.addEventListener("click",e),c.addEventListener("click",e),s.forEach(t=>{t.addEventListener("click",a=>{const n=t.getAttribute("href");if(n&&n.startsWith("#")){a.preventDefault();const l=document.querySelector(n);l&&(l.scrollIntoView({behavior:"smooth"}),r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")}})}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")})})();const h="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-1x-min-f2eb5b02.jpg",b="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-2x-min-8cbff261.jpg",v="/Project-GrXJSTeam/assets/2-Mimino-1x-min-de4a9185.jpg",y="/Project-GrXJSTeam/assets/2-Mimino-2x-min-6f4e31b4.jpg",k="/Project-GrXJSTeam/assets/3-vyshyvanka-1x-min-8b6f3b75.jpg",L="/Project-GrXJSTeam/assets/3-vyshyvanka-2x-min-e781d800.jpg",w="/Project-GrXJSTeam/assets/4-green_harvest-1x-min-2e57c8fb.jpg",T="/Project-GrXJSTeam/assets/4-green_harvest-2x-min-dedc5e78.jpg",x="/Project-GrXJSTeam/assets/5-wallet-1x-min-15c21490.jpg",P="/Project-GrXJSTeam/assets/5-wallet-2x-min-81c84595.jpg",_="/Project-GrXJSTeam/assets/6-chego_jewerly-1x-min-4a9c390e.jpg",G="/Project-GrXJSTeam/assets/6-chego_jewerly-2x-min-848f69ba.jpg",R="/Project-GrXJSTeam/assets/7-energy_flow-1x-min-507f9d82.jpg",q="/Project-GrXJSTeam/assets/7-energy_flow-2x-min-a8070b4e.jpg",J="/Project-GrXJSTeam/assets/8-fruitbox-1x-min-769918ce.jpg",M="/Project-GrXJSTeam/assets/8-fruitbox-2x-min-0251f8e8.jpg",X="/Project-GrXJSTeam/assets/9-english-1x-min-7041c74f.jpg",C="/Project-GrXJSTeam/assets/9-english-2x-min-f05d866e.jpg",E="/Project-GrXJSTeam/assets/10-starlight-1x-min-0f56c47f.jpg",A="/Project-GrXJSTeam/assets/10-starlight-2x-min-ad8e8f1a.jpg",I="/Project-GrXJSTeam/assets/sprite-42b11bae.svg",d=[{image:w,imageRetina:T,techStack:"HTML, CSS, JavaScript, Git",title:"Green harvest webservice",link:"https://yuriikyrychenko9.github.io/codeOrganic/"},{image:x,imageRetina:P,techStack:"HTML, CSS, React, Git",title:"wallet webservice",link:"https://wallmartboss.github.io/Project-GrXJSTeam/"},{image:X,imageRetina:C,techStack:"HTML, CSS, JavaScript",title:"English excellence webservice",link:"#"},{image:h,imageRetina:b,techStack:"HTML, CSS, JavaScript",title:"power pulse webservice",link:"#"},{image:v,imageRetina:y,techStack:"HTML, CSS, React, Node.js ",title:"mimino website",link:"#"},{image:k,imageRetina:L,techStack:"HTML, CSS, React",title:"vyshyvanka vibes Landing Page",link:"#"},{image:_,imageRetina:G,techStack:"HTML, CSS, React, Git",title:"chego jewelry website",link:"#"},{image:R,imageRetina:q,techStack:"HTML, CSS, React, Node.js",title:"energy flow webservice",link:"#"},{image:J,imageRetina:M,techStack:"HTML, CSS, Node.js, Git",title:"fruitbox online store",link:"#"},{image:E,imageRetina:A,techStack:"HTML, CSS, React, Git",title:"starlight studio landing page",link:"#"}];let m=0;const H=3,u=document.querySelector(".project-list"),g=document.querySelector(".load-more");g.addEventListener("click",r=>p(r));p();function p(r){const o=m;for(let c=m;c<o+H;c++){if(c>=d.length){g.style.display="none";break}const s=d[c],e=document.createElement("li");e.innerHTML=`
           <div class="img-cont">
            <img class="project-img" src="${s.image}" srcset="${s.image} 1x, ${s.imageRetina} 2x" alt="${s.title}">
            </div>
            <p class="project-text">Tech Stack: ${s.techStack}</p>
            <div>
             <h3 class="project-subtitle">${s.title}</h3>
            <a class="project-link" href="${s.link}" target="_blank">VISIT
            <svg class="project-icon" width="15" height="15">
            <use href="${I}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `,u.appendChild(e),m++}if(r&&r.type==="click"){const c=u.lastElementChild;c&&c.scrollIntoView({behavior:"smooth"})}}const O=document.querySelector(".faq__list");new S(O,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0]});localStorage.removeItem("theme");document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll("..btn-toggle-checkbox"),o=document.body,c=document.querySelector(".marquee"),s=document.querySelector(".marquee_tilt"),e=document.querySelectorAll(".footer-link"),t=document.querySelector(".logo-link"),a=document.querySelector(".footer-bottom-text"),n=document.querySelector(".accent"),l=localStorage.getItem("theme");l&&o.classList.add(l),r.forEach(j=>j.addEventListener("click",()=>{o.classList.toggle("dark-mode"),o.classList.contains("dark-mode")?(localStorage.setItem("theme","dark-mode"),c.classList.add("dark-mode"),s.classList.add("dark-mode"),document.querySelectorAll(".bw_dot").forEach(i=>i.classList.add("filter-white")),e.forEach(i=>i.classList.add("dark-mode")),t.classList.add("dark-mode"),a.classList.add("dark-mode"),n.classList.add("dark-mode")):(localStorage.removeItem("theme"),c.classList.remove("dark-mode"),s.classList.remove("dark-mode"),document.querySelectorAll(".bw_dot").forEach(i=>i.classList.remove("filter-white")),e.forEach(i=>i.classList.remove("dark-mode")),t.classList.remove("dark-mode"),a.classList.remove("dark-mode"),n.classList.remove("dark-mode"))}))});
//# sourceMappingURL=commonHelpers.js.map
