(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-1x-min-f2eb5b02.jpg",j="/Project-GrXJSTeam/assets/1-Power_pulse_webservice-2x-min-8cbff261.jpg",S="/Project-GrXJSTeam/assets/2-Mimino-1x-min-de4a9185.jpg",u="/Project-GrXJSTeam/assets/2-Mimino-2x-min-6f4e31b4.jpg",h="/Project-GrXJSTeam/assets/3-vyshyvanka-1x-min-8b6f3b75.jpg",f="/Project-GrXJSTeam/assets/3-vyshyvanka-2x-min-e781d800.jpg",b="/Project-GrXJSTeam/assets/4-green_harvest-1x-min-2e57c8fb.jpg",v="/Project-GrXJSTeam/assets/4-green_harvest-2x-min-dedc5e78.jpg",y="/Project-GrXJSTeam/assets/5-wallet-1x-min-15c21490.jpg",T="/Project-GrXJSTeam/assets/5-wallet-2x-min-81c84595.jpg",k="/Project-GrXJSTeam/assets/6-chego_jewerly-1x-min-4a9c390e.jpg",P="/Project-GrXJSTeam/assets/6-chego_jewerly-2x-min-848f69ba.jpg",w="/Project-GrXJSTeam/assets/7-energy_flow-1x-min-507f9d82.jpg",L="/Project-GrXJSTeam/assets/7-energy_flow-2x-min-a8070b4e.jpg",G="/Project-GrXJSTeam/assets/8-fruitbox-1x-min-769918ce.jpg",x="/Project-GrXJSTeam/assets/8-fruitbox-2x-min-0251f8e8.jpg",R="/Project-GrXJSTeam/assets/9-english-1x-min-7041c74f.jpg",J="/Project-GrXJSTeam/assets/9-english-2x-min-f05d866e.jpg",X="/Project-GrXJSTeam/assets/10-starlight-1x-min-0f56c47f.jpg",_="/Project-GrXJSTeam/assets/10-starlight-2x-min-ad8e8f1a.jpg",M="/Project-GrXJSTeam/assets/sprite-2f50143c.svg",n=[{image:b,imageRetina:v,techStack:"HTML, CSS, JavaScript, Git",title:"Green harvest webservice",link:"https://yuriikyrychenko9.github.io/codeOrganic/"},{image:y,imageRetina:T,techStack:"HTML, CSS, React, Git",title:"wallet webservice",link:"https://wallmartboss.github.io/Project-GrXJSTeam/"},{image:R,imageRetina:J,techStack:"HTML, CSS, JavaScript",title:"English excellence webservice",link:"#"},{image:p,imageRetina:j,techStack:"HTML, CSS, JavaScript",title:"power pulse webservice",link:"#"},{image:S,imageRetina:u,techStack:"HTML, CSS, React, Node.js ",title:"mimino website",link:"#"},{image:h,imageRetina:f,techStack:"HTML, CSS, React",title:"vyshyvanka vibes Landing Page",link:"#"},{image:k,imageRetina:P,techStack:"HTML, CSS, React, Git",title:"chego jewelry website",link:"#"},{image:w,imageRetina:L,techStack:"HTML, CSS, React, Node.js",title:"energy flow webservice",link:"#"},{image:G,imageRetina:x,techStack:"HTML, CSS, Node.js, Git",title:"fruitbox online store",link:"#"},{image:X,imageRetina:_,techStack:"HTML, CSS, React, Git",title:"starlight studio landing page",link:"#"}];let a=0;const l=3,m=document.querySelector(".project-list"),d=document.querySelector(".load-more");d.addEventListener("click",g);g();function g(){for(let s=a;s<a+l;s++){if(s>=n.length){d.style.display="none";break}const c=n[s],o=document.createElement("li");o.innerHTML=`
           <div class="img-cont">
            <img class="project-img" src="${c.image}" srcset="${c.image} 1x, ${c.imageRetina} 2x" alt="${c.title}">
            </div>
            <p class="project-text">Tech Stack: ${c.techStack}</p>
            <div>
             <h3 class="project-subtitle">${c.title}</h3>
            <a class="project-link" href="${c.link}" target="_blank">VISIT
            <svg class="project-icon" width="20" height="20">
            <use href="${M}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `,m.appendChild(o)}a+=l;const i=m.lastElementChild;i&&i.scrollIntoView({behavior:"smooth"})}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".toggler"),s=document.body,c=document.querySelector(".marquee"),o=document.querySelector(".marquee_tilt"),e=localStorage.getItem("theme");e&&s.classList.add(e),i.addEventListener("click",()=>{s.classList.toggle("dark-mode"),s.classList.contains("dark-mode")?(localStorage.setItem("theme","dark-mode"),c.classList.add("dark-mode"),o.classList.add("dark-mode"),document.querySelectorAll(".bw_dot").forEach(r=>r.classList.add("filter-white"))):(localStorage.removeItem("theme"),c.classList.remove("dark-mode"),o.classList.remove("dark-mode"),document.querySelectorAll(".bw_dot").forEach(r=>r.classList.remove("filter-white")))})});
//# sourceMappingURL=commonHelpers.js.map
