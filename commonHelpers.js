import{a as S,i as $,S as x,d as P}from"./assets/vendor-d04b2d9f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const O="https://pixabay.com/api/",H="44493747-be1491bcf2f1874076b4c452a";async function M(e,t=1,o=30){const r=await S.get(`${O}/?key=${H}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${o}&page=${t}`);return{hits:r.data.hits.map(({webformatURL:a,largeImageURL:s,tags:u,likes:w,views:E,comments:I,downloads:L})=>({webformatURL:a,largeImageURL:s,tags:u,likes:w,views:E,comments:I,downloads:L})),total:r.data.totalHits}}function p(e,t,o="topRight",r=5e3){$.show({message:e,color:t,position:o,timeout:r})}function l(e){p(e,"red")}function D(e){p(e,"green")}const g=30;let c,i;function A(){const e=document.getElementById("search-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const o=[...e.elements].find(n=>n.name==="searchQuery");if(!o)return;const r=o.value;await h(r,1,!0)})}function R({query:e,page:t,total:o}){localStorage.setItem("query",e),localStorage.setItem("page",t),localStorage.setItem("total",o)}function y(){const e=localStorage.getItem("query"),t=+localStorage.getItem("page"),o=+localStorage.getItem("total");return{query:e,page:t,total:o}}function _(){window.addEventListener("scroll",P(async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:o}=document.documentElement;if(e+o>=t&&f()){const{query:r,page:n}=y();await h(r,n+1)}},400),{passive:!0})}async function h(e,t,o=!1){if(!(e!=null&&e.trim())){d(),l("Query should not be empty.");return}try{m();const r=await M(e,t,g);R({query:e,page:t,total:r.total}),b(r.hits,o),o&&(r.total?D(`Hooray! We found ${r.total} images.`):l("Sorry, there are no images matching your search query. Please try again.")),!f()&&r.total&&v()}catch{d(),l("Sorry, error occurred. Please try again.")}finally{m(!1)}}function d(){b([],!0)}function f(){const{page:e,total:t}=y();return t>e*g}function j(){A(),_(),c=F()}function q(e){const{webformatURL:t,largeImageURL:o,tags:r,likes:n,views:a,comments:s,downloads:u}=e;return`
        <div class="photo-card flex flex-col items-center rounded-lg shadow-md overflow-hidden">
            <div class="image-container">
                <a href="${o}" class="block w-full h-64">
                    <img src="${t}" alt="${r}" loading="lazy" class="w-full h-full object-cover" />
                </a>
            </div>
            <div class="info flex justify-between w-full p-2 bg-gray-100">
                <p class="info-item text-center">
                    <b>Likes</b>
                    <span>${n}</span>
                </p>
                <p class="info-item text-center">
                    <b>Views</b>
                    <span>${a}</span>
                </p>
                <p class="info-item text-center">
                    <b>Comments</b>
                    <span>${s}</span>
                </p>
                <p class="info-item text-center">
                    <b>Downloads</b>
                    <span>${u}</span>
                </p>
            </div>
        </div>
    `}function b(e,t=!0){const o=document.querySelector(".gallery");if(!o)return;const r=e.map(n=>q(n)).join("");t?o.innerHTML=r:o.insertAdjacentHTML("beforeend",r),c==null||c.refresh(),v()}function m(e=!0){const t=document.querySelector(".loader");t&&(e?t.classList.remove("hidden"):t.classList.add("hidden"))}function F(){return new x(".gallery a",{captionDelay:250,captionsData:"alt"})}function v(){const t=document.querySelector(".gallery").lastElementChild;i&&i.disconnect(),i=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&!f()&&l("We're sorry, but you've reached the end of search results.")})},{root:null,rootMargin:"0px",threshold:.1}),t&&i.observe(t)}j();
//# sourceMappingURL=commonHelpers.js.map
