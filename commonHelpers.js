import{A as p}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".mobile-menu__link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open"),t?document.body.style.overflow="auto":document.body.style.overflow="hidden"};o.addEventListener("click",e),c.addEventListener("click",e),s.forEach(t=>{t.addEventListener("click",a=>{const i=t.getAttribute("href");if(i&&i.startsWith("#")){a.preventDefault();const r=document.querySelector(i);r&&(r.scrollIntoView({behavior:"smooth"}),n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")}})}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")})})();const S="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-1x-min-f2eb5b02.jpg",f="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-2x-min-8cbff261.jpg",j="/Project-GrXJSTeam/assets/2-Mimino-1x-min-de4a9185.jpg",h="/Project-GrXJSTeam/assets/2-Mimino-2x-min-6f4e31b4.jpg",k="/Project-GrXJSTeam/assets/3-vyshyvanka-1x-min-8b6f3b75.jpg",v="/Project-GrXJSTeam/assets/3-vyshyvanka-2x-min-e781d800.jpg",y="/Project-GrXJSTeam/assets/4-green_harvest-1x-min-2e57c8fb.jpg",b="/Project-GrXJSTeam/assets/4-green_harvest-2x-min-dedc5e78.jpg",L="/Project-GrXJSTeam/assets/5-wallet-1x-min-15c21490.jpg",T="/Project-GrXJSTeam/assets/5-wallet-2x-min-81c84595.jpg",w="/Project-GrXJSTeam/assets/6-chego_jewerly-1x-min-4a9c390e.jpg",x="/Project-GrXJSTeam/assets/6-chego_jewerly-2x-min-848f69ba.jpg",P="/Project-GrXJSTeam/assets/7-energy_flow-1x-min-507f9d82.jpg",G="/Project-GrXJSTeam/assets/7-energy_flow-2x-min-a8070b4e.jpg",J="/Project-GrXJSTeam/assets/8-fruitbox-1x-min-769918ce.jpg",R="/Project-GrXJSTeam/assets/8-fruitbox-2x-min-0251f8e8.jpg",E="/Project-GrXJSTeam/assets/9-english-1x-min-7041c74f.jpg",M="/Project-GrXJSTeam/assets/9-english-2x-min-f05d866e.jpg",_="/Project-GrXJSTeam/assets/10-starlight-1x-min-0f56c47f.jpg",X="/Project-GrXJSTeam/assets/10-starlight-2x-min-ad8e8f1a.jpg",C="/Project-GrXJSTeam/assets/sprite-42b11bae.svg",d=[{image:y,imageRetina:b,techStack:"HTML, CSS, JavaScript, Git",title:"Green harvest webservice",link:"https://yuriikyrychenko9.github.io/codeOrganic/"},{image:L,imageRetina:T,techStack:"HTML, CSS, React, Git",title:"wallet webservice",link:"https://wallmartboss.github.io/Project-GrXJSTeam/"},{image:E,imageRetina:M,techStack:"HTML, CSS, JavaScript",title:"English excellence webservice",link:"#"},{image:S,imageRetina:f,techStack:"HTML, CSS, JavaScript",title:"power pulse webservice",link:"#"},{image:j,imageRetina:h,techStack:"HTML, CSS, React, Node.js ",title:"mimino website",link:"#"},{image:k,imageRetina:v,techStack:"HTML, CSS, React",title:"vyshyvanka vibes Landing Page",link:"#"},{image:w,imageRetina:x,techStack:"HTML, CSS, React, Git",title:"chego jewelry website",link:"#"},{image:P,imageRetina:G,techStack:"HTML, CSS, React, Node.js",title:"energy flow webservice",link:"#"},{image:J,imageRetina:R,techStack:"HTML, CSS, Node.js, Git",title:"fruitbox online store",link:"#"},{image:_,imageRetina:X,techStack:"HTML, CSS, React, Git",title:"starlight studio landing page",link:"#"}];let l=0;const I=3,m=document.querySelector(".project-list"),g=document.querySelector(".load-more");g.addEventListener("click",n=>u(n));u();function u(n){const o=l;for(let c=l;c<o+I;c++){if(c>=d.length){g.style.display="none";break}const s=d[c],e=document.createElement("li");e.innerHTML=`
           <div class="img-cont">
            <img class="project-img" src="${s.image}" srcset="${s.image} 1x, ${s.imageRetina} 2x" alt="${s.title}">
            </div>
            <p class="project-text">Tech Stack: ${s.techStack}</p>
            <div>
             <h3 class="project-subtitle">${s.title}</h3>
            <a class="project-link" href="${s.link}" target="_blank">VISIT
            <svg class="project-icon" width="15" height="15">
            <use href="${C}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `,m.appendChild(e),l++}if(n&&n.type==="click"){const c=m.lastElementChild;c&&c.scrollIntoView({behavior:"smooth"})}}const q=document.querySelector(".faq__list");new p(q,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0]});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("cookie-settings-link"),o=document.getElementById("cookie-settings-modal"),c=document.getElementById("close-cookie-settings"),s=document.getElementById("save-cookie-settings"),e=document.getElementById("cookie-settings-form");if(n&&o&&c&&s&&e){n.addEventListener("click",function(i){i.preventDefault(),o.classList.remove("modal-hide"),o.classList.add("modal-show")});const t=()=>{o.classList.remove("modal-show"),o.classList.add("modal-hide")};c.addEventListener("click",t),o.addEventListener("click",function(i){i.target===i.currentTarget&&t()}),s.addEventListener("click",function(){const i={analytics:e.elements.analytics.checked,advertising:e.elements.advertising.checked};localStorage.setItem("cookieSettings",JSON.stringify(i)),t()}),(()=>{const i=localStorage.getItem("cookieSettings");if(i){const r=JSON.parse(i);e.elements.analytics.checked=r.analytics,e.elements.advertising.checked=r.advertising}})()}});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".btn-toggle-checkbox"),o=document.body,c=document.querySelectorAll(".footer-link"),s=document.querySelector(".logo-link"),e=document.querySelector(".footer-bottom-text"),t=document.querySelector(".accent"),a=localStorage.getItem("theme");a&&o.classList.add(a),n.forEach(i=>i.addEventListener("click",()=>{o.classList.toggle("dark-mode"),o.classList.contains("dark-mode")?(localStorage.setItem("theme","dark-mode"),c.forEach(r=>r.classList.add("dark-mode")),s.classList.add("dark-mode"),e.classList.add("dark-mode"),t.classList.add("dark-mode")):(localStorage.removeItem("theme"),c.forEach(r=>r.classList.remove("dark-mode")),s.classList.remove("dark-mode"),e.classList.remove("dark-mode"),t.classList.remove("dark-mode"))}))});
//# sourceMappingURL=commonHelpers.js.map