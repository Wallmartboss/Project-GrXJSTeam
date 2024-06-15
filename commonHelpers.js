import{A as R,S as I,N as _,a as C,i as G}from"./assets/vendor-600bb652.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".mobile-menu__link"),o=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),s?document.body.style.overflow="auto":document.body.style.overflow="hidden"};t.addEventListener("click",o),i.addEventListener("click",o),a.forEach(s=>{s.addEventListener("click",n=>{const m=s.getAttribute("href");if(m&&m.startsWith("#")){n.preventDefault();const d=document.querySelector(m);d&&(d.scrollIntoView({behavior:"smooth"}),e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")}})}),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")})})();const M="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-1x-min-f2eb5b02.jpg",J="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-2x-min-8cbff261.jpg",q="/Project-GrXJSTeam/assets/2-Mimino-1x-min-de4a9185.jpg",X="/Project-GrXJSTeam/assets/2-Mimino-2x-min-6f4e31b4.jpg",A="/Project-GrXJSTeam/assets/3-vyshyvanka-1x-min-8b6f3b75.jpg",N="/Project-GrXJSTeam/assets/3-vyshyvanka-2x-min-e781d800.jpg",B="/Project-GrXJSTeam/assets/4-green_harvest-1x-min-2e57c8fb.jpg",O="/Project-GrXJSTeam/assets/4-green_harvest-2x-min-dedc5e78.jpg",$="/Project-GrXJSTeam/assets/5-wallet-1x-min-15c21490.jpg",D="/Project-GrXJSTeam/assets/5-wallet-2x-min-81c84595.jpg",H="/Project-GrXJSTeam/assets/6-chego_jewerly-1x-min-4a9c390e.jpg",F="/Project-GrXJSTeam/assets/6-chego_jewerly-2x-min-848f69ba.jpg",V="/Project-GrXJSTeam/assets/7-energy_flow-1x-min-507f9d82.jpg",z="/Project-GrXJSTeam/assets/7-energy_flow-2x-min-a8070b4e.jpg",K="/Project-GrXJSTeam/assets/8-fruitbox-1x-min-769918ce.jpg",U="/Project-GrXJSTeam/assets/8-fruitbox-2x-min-0251f8e8.jpg",Z="/Project-GrXJSTeam/assets/9-english-1x-min-7041c74f.jpg",W="/Project-GrXJSTeam/assets/9-english-2x-min-f05d866e.jpg",Y="/Project-GrXJSTeam/assets/10-starlight-1x-min-0f56c47f.jpg",Q="/Project-GrXJSTeam/assets/10-starlight-2x-min-ad8e8f1a.jpg",ee="/Project-GrXJSTeam/assets/sprite-42b11bae.svg",L=[{image:B,imageRetina:O,techStack:"HTML, CSS, JavaScript, Git",title:"Green harvest webservice",link:"https://yuriikyrychenko9.github.io/codeOrganic/"},{image:$,imageRetina:D,techStack:"HTML, CSS, React, Git",title:"wallet webservice",link:"https://wallmartboss.github.io/Project-GrXJSTeam/"},{image:Z,imageRetina:W,techStack:"HTML, CSS, JavaScript",title:"English excellence webservice",link:"#"},{image:M,imageRetina:J,techStack:"HTML, CSS, JavaScript",title:"power pulse webservice",link:"#"},{image:q,imageRetina:X,techStack:"HTML, CSS, React, Node.js ",title:"mimino website",link:"#"},{image:A,imageRetina:N,techStack:"HTML, CSS, React",title:"vyshyvanka vibes Landing Page",link:"#"},{image:H,imageRetina:F,techStack:"HTML, CSS, React, Git",title:"chego jewelry website",link:"#"},{image:V,imageRetina:z,techStack:"HTML, CSS, React, Node.js",title:"energy flow webservice",link:"#"},{image:K,imageRetina:U,techStack:"HTML, CSS, Node.js, Git",title:"fruitbox online store",link:"#"},{image:Y,imageRetina:Q,techStack:"HTML, CSS, React, Git",title:"starlight studio landing page",link:"#"}];let h=0;const te=3,w=document.querySelector(".project-list"),E=document.querySelector(".load-more");E.addEventListener("click",e=>T(e));T();function T(e){const t=h;for(let i=h;i<t+te;i++){if(i>=L.length){E.style.display="none";break}const a=L[i],o=document.createElement("li");o.innerHTML=`
           <div class="img-container">
            <img class="project-img" src="${a.image}" srcset="${a.image} 1x, ${a.imageRetina} 2x" alt="${a.title}">
            </div>
            <p class="project-text">Tech Stack: ${a.techStack}</p>
            <div>
             <h3 class="project-subtitle">${a.title}</h3>
            <a class="project-link" href="${a.link}" target="_blank">VISIT
            <svg class="project-icon" width="15" height="15">
            <use href="${ee}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `,w.appendChild(o),h++}if(e&&e.type==="click"){const i=w.children[t];if(i){const a=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a,behavior:"smooth"})}}}const oe=document.querySelector(".faq__list");new R(oe,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0]});const se=document.querySelector(".swiper-wrapper");function ae(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const P=ae();console.log(P);P.then(e=>{console.log(e);const t=ie(e);se.innerHTML=t}).catch(e=>{console.log(e)});const b=new I(".swiper",{modules:[_],direction:"horizontal",slidesPerView:1,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:30},1280:{slidesPerView:2,spaceBetween:40}}});document.addEventListener("keydown",e=>{console.log("e",e),e.preventDefault(),e.code==="ArrowRight"?b.slideNext(300):e.code==="ArrowLeft"&&b.slidePrev(300)});function ie(e){return e.map(t=>`<li class="swiper-slide">
            <p class="review-text">${t.review}</p>
            <div class="review-author">
                <img src="${t.avatar_url}" class="review-author-photo" alt="Photo ${t.author}"
                    width="40" height="40">
                <p class="review-author-name">${t.author}</p>
            </div>
            </li>`).join("")}async function ce(e){const a="https://portfolio-js.b.goit.study/api/requests";return await C.post(a,e)}const ne=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,y="user-email",k="user-comment",j=document.querySelector(".work-together-form"),r=document.querySelector(".work-together-input-email"),l=document.getElementById("user-comment"),u=document.querySelector(".form-fields"),g=document.querySelector(".backdrop"),S=document.querySelector(".work-together-form-icon");ge();r.addEventListener("input",re);l.addEventListener("input",le);j.addEventListener("submit",de);j.addEventListener("input",e=>{const t=r.value,i=l.value;ue(t,i)});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.remove("is-open")});g.addEventListener("click",e=>{(e.target===g||e.target.closest(".modal-close-btn"))&&me()});function re(){ne.test(r.value.trim())?(r.classList.remove("invalid"),r.classList.add("valid"),u.dataset.status="Success!",u.classList.remove("new-color"),r.classList.remove("new-color"),S.style.display="block"):(r.classList.remove("valid"),r.classList.add("invalid"),u.dataset.status="Invalid email, try again",u.classList.add("new-color"),r.classList.add("new-color"),S.style.display="none")}function le(){l.value.trim().length>=3?(l.classList.remove("invalid"),l.classList.add("valid")):(l.classList.remove("valid"),l.classList.add("invalid"))}async function de(e){e.preventDefault();const t=e.target.elements.userEmail.value.trim().toLowerCase(),i=e.target.elements.userComment.value.trim();await ce({email:t,comment:i}).then(()=>{pe(),x(),S.style.display="none",g.classList.add("is-open")}).catch(o=>{G.error({position:"topRight",message:"An error occurred while sending the request. Try again."})})}function me(){x(),g.classList.remove("is-open")}function x(){u.dataset.status="",r.classList.remove("valid"),l.classList.remove("valid"),j.reset()}function ue(e,t){localStorage.setItem(y,e),localStorage.setItem(k,t)}function ge(){r.value=localStorage.getItem(y)??"",l.value=localStorage.getItem(k)??""}function pe(){localStorage.removeItem(y),localStorage.removeItem(k)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("cookie-settings-link"),t=document.getElementById("cookie-settings-modal"),i=document.getElementById("close-cookie-settings"),a=document.getElementById("save-cookie-settings"),o=document.getElementById("cookie-settings-form");function s(){e&&t&&i&&a&&o&&(e.addEventListener("click",c=>{c.preventDefault(),t.classList.remove("modal-hide"),t.classList.add("modal-show")}),i.addEventListener("click",n),t.addEventListener("click",c=>{c.target===c.currentTarget&&n()}),a.addEventListener("click",m),d())}function n(){t.classList.remove("modal-show"),t.classList.add("modal-hide")}function m(){const{analytics:c,security:p}=o.elements,f={analytics:c.checked,security:p.checked};try{localStorage.setItem("cookieSettings",JSON.stringify(f))}catch(v){console.error("Could not save settings to localStorage",v)}n()}function d(){try{const c=localStorage.getItem("cookieSettings");if(c){const p=JSON.parse(c),{analytics:f,security:v}=o.elements;f.checked=p.analytics||!1,v.checked=p.security||!1}else console.error("No settings found in localStorage")}catch(c){console.error("Could not retrieve settings from localStorage",c)}}s()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".btn-toggle-checkbox"),t=document.body,i=document.querySelectorAll(".footer-link"),a=document.querySelector(".logo-link"),o=document.querySelector(".footer-bottom-text"),s=document.querySelector(".accent"),n=d=>{d==="dark-mode"?(t.classList.add("dark-mode"),i.forEach(c=>c.classList.add("dark-mode")),a.classList.add("dark-mode"),o.classList.add("dark-mode"),s.classList.add("dark-mode"),e.forEach(c=>c.checked=!0)):(t.classList.remove("dark-mode"),i.forEach(c=>c.classList.remove("dark-mode")),a.classList.remove("dark-mode"),o.classList.remove("dark-mode"),s.classList.remove("dark-mode"),e.forEach(c=>c.checked=!1))},m=localStorage.getItem("theme");n(m),e.forEach(d=>d.addEventListener("click",()=>{t.classList.toggle("dark-mode");const c=t.classList.contains("dark-mode")?"dark-mode":"light-mode";localStorage.setItem("theme",c),n(c)}))});
//# sourceMappingURL=commonHelpers.js.map
