import{A as _,S as C,N as G,a as J,i as q}from"./assets/vendor-600bb652.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".mobile-menu__link"),o=()=>{const s=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),s?document.body.style.overflow="auto":document.body.style.overflow="hidden"};e.addEventListener("click",o),c.addEventListener("click",o),n.forEach(s=>{s.addEventListener("click",l=>{const r=s.getAttribute("href");if(r&&r.startsWith("#")){l.preventDefault();const m=document.querySelector(r);m&&(m.scrollIntoView({behavior:"smooth"}),t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")}})}),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")})})();const B="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-1x-min-f2eb5b02.jpg",X="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-2x-min-8cbff261.jpg",A="/Project-GrXJSTeam/assets/2-Mimino-1x-min-de4a9185.jpg",N="/Project-GrXJSTeam/assets/2-Mimino-2x-min-6f4e31b4.jpg",O="/Project-GrXJSTeam/assets/3-vyshyvanka-1x-min-8b6f3b75.jpg",$="/Project-GrXJSTeam/assets/3-vyshyvanka-2x-min-e781d800.jpg",D="/Project-GrXJSTeam/assets/4-green_harvest-1x-min-2e57c8fb.jpg",H="/Project-GrXJSTeam/assets/4-green_harvest-2x-min-dedc5e78.jpg",F="/Project-GrXJSTeam/assets/5-wallet-1x-min-15c21490.jpg",V="/Project-GrXJSTeam/assets/5-wallet-2x-min-81c84595.jpg",K="/Project-GrXJSTeam/assets/6-chego_jewerly-1x-min-4a9c390e.jpg",z="/Project-GrXJSTeam/assets/6-chego_jewerly-2x-min-848f69ba.jpg",U="/Project-GrXJSTeam/assets/7-energy_flow-1x-min-507f9d82.jpg",Z="/Project-GrXJSTeam/assets/7-energy_flow-2x-min-a8070b4e.jpg",W="/Project-GrXJSTeam/assets/8-fruitbox-1x-min-769918ce.jpg",Y="/Project-GrXJSTeam/assets/8-fruitbox-2x-min-0251f8e8.jpg",Q="/Project-GrXJSTeam/assets/9-english-1x-min-7041c74f.jpg",ee="/Project-GrXJSTeam/assets/9-english-2x-min-f05d866e.jpg",te="/Project-GrXJSTeam/assets/10-starlight-1x-min-0f56c47f.jpg",oe="/Project-GrXJSTeam/assets/10-starlight-2x-min-ad8e8f1a.jpg",se="/Project-GrXJSTeam/assets/sprite-e9b1c324.svg",L=[{image:D,imageRetina:H,techStack:"HTML, CSS, JavaScript, Git",title:"Green harvest webservice",link:"https://yuriikyrychenko9.github.io/codeOrganic/"},{image:F,imageRetina:V,techStack:"HTML, CSS, React, Git",title:"wallet webservice",link:"https://wallmartboss.github.io/Project-GrXJSTeam/"},{image:Q,imageRetina:ee,techStack:"HTML, CSS, JavaScript",title:"English excellence webservice",link:"#"},{image:B,imageRetina:X,techStack:"HTML, CSS, JavaScript",title:"power pulse webservice",link:"#"},{image:A,imageRetina:N,techStack:"HTML, CSS, React, Node.js ",title:"mimino website",link:"#"},{image:O,imageRetina:$,techStack:"HTML, CSS, React",title:"vyshyvanka vibes Landing Page",link:"#"},{image:K,imageRetina:z,techStack:"HTML, CSS, React, Git",title:"chego jewelry website",link:"#"},{image:U,imageRetina:Z,techStack:"HTML, CSS, React, Node.js",title:"energy flow webservice",link:"#"},{image:W,imageRetina:Y,techStack:"HTML, CSS, Node.js, Git",title:"fruitbox online store",link:"#"},{image:te,imageRetina:oe,techStack:"HTML, CSS, React, Git",title:"starlight studio landing page",link:"#"}];let v=0;const ne=3,b=document.querySelector(".project-list"),P=document.querySelector(".load-more");P.addEventListener("click",t=>x(t));x();function x(t){const e=v;for(let c=v;c<e+ne;c++){if(c>=L.length){P.style.display="none";break}const n=L[c],o=document.createElement("li");o.innerHTML=`
           <div class="img-container">
            <img class="project-img" src="${n.image}" srcset="${n.image} 1x, ${n.imageRetina} 2x" alt="${n.title}">
            </div>
            <p class="project-text">Tech Stack: ${n.techStack}</p>
            <div>
             <h3 class="project-subtitle">${n.title}</h3>
            <a class="project-link" href="${n.link}" target="_blank">VISIT
            <svg class="project-icon" width="15" height="15">
            <use href="${se}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `,b.appendChild(o),v++}if(t&&t.type==="click"){const c=b.children[e];if(c){const n=c.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:n,behavior:"smooth"})}}}const ce=document.querySelector(".faq__list");new _(ce,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0]});const T=document.querySelector(".swiper-wrapper");function ie(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const ae=ie();ae.then(t=>{const e=le(t);T.innerHTML=e}).catch(t=>T.innerHTML=errowMarkup);const E=new C(".swiper",{modules:[G],direction:"horizontal",slidesPerView:1,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:30},1280:{slidesPerView:2,spaceBetween:40}}}),re=document.querySelector(".reviews");re.addEventListener("keydown",t=>{console.log("e",t),t.preventDefault(),t.code==="ArrowRight"?E.slideNext(300):t.code==="ArrowLeft"&&E.slidePrev(300)});function le(t){return t.map(e=>`<li class="swiper-slide">
            <p class="review-text">${e.review}</p>
            <div class="review-author">
                <img src="${e.avatar_url}" class="review-author-photo" alt="Photo ${e.author}"
                    width="40" height="40">
                <p class="review-author-name">${e.author}</p>
            </div>
            </li>`).join("")}async function de(t){const n="https://portfolio-js.b.goit.study/api/requests";return await J.post(n,t)}const me=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,y="user-email",k="user-comment",j=document.querySelector(".work-together-form"),d=document.querySelector(".work-together-input-email"),u=document.getElementById("user-comment"),S=document.querySelector(".form-fields"),p=document.querySelector(".backdrop"),I=document.querySelector(".work-together-form-icon");ye();d.addEventListener("input",ue);u.addEventListener("input",ge);j.addEventListener("submit",pe);j.addEventListener("input",fe);document.addEventListener("keydown",he);p.addEventListener("click",ve);function ue(){const t=d.value.trim(),e=me.test(t);d.classList.toggle("valid",e),d.classList.toggle("invalid",!e),S.dataset.status=e?"Success!":"Invalid email, try again",S.classList.toggle("new-color",!e),d.classList.toggle("new-color",!e),I.style.display=e?"block":"none"}function ge(){const e=u.value.trim().length>=3;u.classList.toggle("valid",e),u.classList.toggle("invalid",!e)}async function pe(t){t.preventDefault();const e=d.value.trim().toLowerCase(),c=u.value.trim(),n={email:e,comment:c};try{await de(n),ke(),M(),I.style.display="none",p.classList.add("is-open")}catch{q.error({position:"topRight",message:"An error occurred while sending the request. Try again."})}}function fe(){const t=d.value,e=u.value;Se(t,e)}function he(t){t.key==="Escape"&&R()}function ve(t){(t.target===p||t.target.closest(".modal-close-btn"))&&R()}function R(){M(),p.classList.remove("is-open")}function M(){S.dataset.status="",d.classList.remove("valid","invalid"),u.classList.remove("valid","invalid"),j.reset()}function Se(t,e){localStorage.setItem(y,t),localStorage.setItem(k,e)}function ye(){d.value=localStorage.getItem(y)||"",u.value=localStorage.getItem(k)||""}function ke(){localStorage.removeItem(y),localStorage.removeItem(k)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("cookie-settings-link"),e=document.getElementById("cookie-settings-modal"),c=document.getElementById("close-cookie-settings"),n=document.getElementById("save-cookie-settings"),o=document.getElementById("cookie-settings-form"),s=document.getElementById("cookie-settings-backdrop");function l(){t&&e&&c&&n&&o&&s&&(t.addEventListener("click",i=>{i.preventDefault(),e.classList.remove("modal-hide"),e.classList.add("modal-show"),s.classList.remove("modal-hide"),s.classList.add("modal-show"),document.addEventListener("keydown",w)}),c.addEventListener("click",r),s.addEventListener("click",r),e.addEventListener("click",i=>{i.target===i.currentTarget&&r()}),n.addEventListener("click",m),a())}function r(){e.classList.remove("modal-show"),e.classList.add("modal-hide"),s.classList.remove("modal-show"),s.classList.add("modal-hide"),document.removeEventListener("keydown",w)}function m(){const{analytics:i,security:g}=o.elements,f={analytics:i.checked,security:g.checked};try{localStorage.setItem("cookieSettings",JSON.stringify(f))}catch(h){console.error("Could not save settings to localStorage",h)}r()}function a(){try{const i=localStorage.getItem("cookieSettings");if(i){const g=JSON.parse(i),{analytics:f,security:h}=o.elements;f.checked=g.analytics||!1,h.checked=g.security||!1}}catch(i){console.log("Could not retrieve settings from localStorage",i)}}function w(i){i.key==="Escape"&&r()}l()});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".btn-toggle-checkbox"),e=document.body,c=document.querySelectorAll(".footer-link"),n=document.querySelector(".logo-link"),o=document.querySelector(".footer-bottom-text"),s=document.querySelector(".accent"),l=m=>{m==="dark-mode"?(e.classList.add("dark-mode"),c.forEach(a=>a.classList.add("dark-mode")),n.classList.add("dark-mode"),o.classList.add("dark-mode"),s.classList.add("dark-mode"),t.forEach(a=>a.checked=!0)):(e.classList.remove("dark-mode"),c.forEach(a=>a.classList.remove("dark-mode")),n.classList.remove("dark-mode"),o.classList.remove("dark-mode"),s.classList.remove("dark-mode"),t.forEach(a=>a.checked=!1))},r=localStorage.getItem("theme");l(r),t.forEach(m=>m.addEventListener("click",()=>{e.classList.toggle("dark-mode");const a=e.classList.contains("dark-mode")?"dark-mode":"light-mode";localStorage.setItem("theme",a),l(a)}))});document.getElementById("scrollToTopBtn").addEventListener("click",we);window.onscroll=function(){je()};function je(){const t=document.getElementById("scrollToTopBtn");document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="block":t.style.display="none"}function we(){document.body.scrollTop=0,document.documentElement.scrollTop=0}
//# sourceMappingURL=commonHelpers.js.map
