(()=>{"use strict";var e={262:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{static chooseOne(e){return e[Math.floor(Math.random()*e.length)]}}},745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeHasher=void 0;class n{static encode(e){return e.replace(/[0-9]/g,(e=>n.map[e]))}static decode(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");return e.replace(o,(e=>Object.keys(n.map).find((t=>n.map[t]===e))||""))}static encodeAndInsert(e,t,o=1){const r=n.encode(e);return`${t.slice(0,o)}${r}${t.slice(o)}`}static decodeAndExtract(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");let r="";return e.replace(o,(e=>{const t=Object.keys(n.map).find((t=>n.map[t]===e));return t&&(r+=t),e})),""!==r?r:null}static removeAllEncodedChars(e){const t=Object.values(n.map).join(""),o=new RegExp(`[${t}]`,"g");return e.replace(o,"")}}t.UnicodeHasher=n,n.map={0:"​",1:"‌",2:"‍",3:"⁠",4:"⁡",5:"⁢",6:"⁣",7:"⁤",8:"‪",9:"‬"}},202:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UrlRebuilder=void 0;const o=n(262),r=n(745);class i{static randomizePhoneNumberIfNecessary(e){var t;const n=null!==(t=window.phones)&&void 0!==t?t:[];if(0===n.length)return e;const r=o.Random.chooseOne(n);return e.includes("phone=")?i.withReplaceQueryParam(e,"phone",r):e.includes("wa.me")?`https://wa.me/${r}?${e.split("?")[1]}`:e}static insertAdIdInWppUrl(e,t){var n;const o=null!==(n=i.getQueryParams(e).get("text"))&&void 0!==n?n:"Olá",a=t.replace(/[^0-9]/g,""),s=r.UnicodeHasher.removeAllEncodedChars(o),c=r.UnicodeHasher.encodeAndInsert(a,s);return i.withReplaceQueryParam(e,"text",c)}static getAdId(e){var t;const n=null!==(t=e.get("utm_content"))&&void 0!==t?t:"";return n.includes("|")?n.split("|")[1]:null}static getQueryParams(e){const t=e.split("?")[1];return new URLSearchParams(t)}static withReplaceQueryParam(e,t,n){const o=e.split("?")[0],r=e.split("?")[1],i=new URLSearchParams(r);return i.set(t,n),`${o}?${i.toString()}`}}t.UrlRebuilder=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{const e=n(202);console.log("utms script loaded! 2.3.11");const t=!!document.querySelector("[data-utmify-ignore-iframe]");var o,r;!function(e){e.Doppus="doppus"}(o||(o={})),function(e){e.PandaVideo="pandavideo.com",e.YouTube="youtube.com",e.EplayVideo="eplay.video"}(r||(r={}));const i=["utm_source","utm_campaign","utm_medium","utm_content","utm_term"];class a{static addUtmParametersToUrl(e){const t=a.urlWithoutParams(e),n=a.paramsFromUrl(e),o=a.getUtmParameters(),r=new URLSearchParams;n.forEach(((e,t)=>r.append(t,e))),o.forEach(((e,t)=>r.append(t,e)));const i=a.urlParametersWithoutDuplicates(r),s=a.simplifyParametersIfNecessary(t,i),c=-1===t.indexOf("?")?"?":"&";return`${t}${c}${s.toString()}`}static urlWithoutParams(e){return e.split("?")[0]}static paramsFromUrl(e){if(!e)return new URLSearchParams;const t=e instanceof URL?e.href:e;if(!t.includes("?"))return new URLSearchParams;const n=t.split("?");if(n.length<=1)return new URLSearchParams;const o=n[1];return new URLSearchParams(o)}static urlParametersWithoutDuplicates(e){const t=Array.from(e.keys()),n=new Map;t.forEach((t=>{const o=e.getAll(t);n.set(t,o[o.length-1])}));const o=new URLSearchParams;return n.forEach(((e,t)=>{o.append(t,e)})),o}static getUtmParameters(){var e;const t="hQwK21wXxR",n="rKm-km-rKm",o=new URLSearchParams(window.location.search);function r(e){const t=o.get(e);if(null!=t&&"null"!==t&&"undefined"!==t&&""!==t)return t;const n=localStorage.getItem(e);if(!n)return"";const r=localStorage.getItem(c(e));return!r||new Date(r)<new Date?(localStorage.removeItem(e),localStorage.removeItem(c(e)),""):n}function i(e){return e.join(t)}const a=r("utm_term"),s=r("utm_content"),u=r("utm_medium"),l=r("utm_campaign"),d=function(e){const t=function(){var e;const t=localStorage.getItem("lead");if(!t)return null;const n=JSON.parse(t);return null!==(e=null==n?void 0:n._id)&&void 0!==e?e:null}();return t?e.includes("jLj")?e:`${e}jLj${t}`:e}(r("utm_source")),m=new URLSearchParams;m.set("utm_source",d),m.set("utm_campaign",l.includes(n)?l:`${l}${n}${u}`),m.set("utm_medium",u),m.set("utm_content",s),m.set("utm_term",a);const v=null!==(e=m.get("utm_campaign"))&&void 0!==e?e:"",p=[d,v,u,s,a],w=i(p);m.set("subid",d),m.set("sid2",v),m.set("subid2",v),m.set("subid3",u),m.set("subid4",s),m.set("subid5",v);const h=r("xcod"),f=r("src"),g=""!==h?h:f,U=function(e,o){if(e.length<=255)return e;const r=Math.floor(18.8);function a(e,t,o){function i(e){return e.substring(0,r)+"..."}if(!t)return i(e);const a=null!=o?o:"|",s=e.split(n)[0].split(a),c=s.length>1?s[s.length-1]:"";return`${i(1===s.length?s[0]:s.slice(0,-1).join(a))}${a}${c}`}const[s,c,u,l,d]=e.split(t);return i([a(s,!0,"jLj"),a(c,!0),a(u,!0),a(l,!0),a(d,!1)])}(p.every((e=>""===e))?g:w);m.set("xcod",U),m.set("sck",U),null!=f&&""!==f&&m.set("src",f);const _=o.get("fbclid");return null!=_&&""!==_&&m.set("fbclid",_),(()=>{const e=e=>null==e||""===e,t=r("utm_source"),n=r("utm_medium"),o=r("utm_campaign"),i=r("utm_content"),a=r("utm_term"),s=r("xcod"),c=r("src"),u=m.get("fbclid");return e(t)&&e(n)&&e(o)&&e(i)&&e(a)&&e(s)&&e(c)&&e(u)})()&&m.set("utm_source","organic"),m}static simplifyParametersIfNecessary(e,t){if(!Object.values(o).some((t=>e.includes(t))))return t;const n=new URLSearchParams;return t.forEach(((e,t)=>{i.includes(t)&&n.append(t,e)})),n}}window.paramsList=["utm_source","utm_campaign","utm_medium","utm_content","utm_term","xcod","src"],window.itemExpInDays=7;const s=["utm_source","utm_campaign","utm_medium","utm_content","xcod","sck"];function c(e){return`${e}_exp`}function u(){function n(t){document.querySelectorAll("a").forEach((n=>{if(!n.href.startsWith("mailto:")&&!n.href.startsWith("tel:")&&!n.href.includes("#")){if(o=n.href,["wa.me/","api.whatsapp.com/send","whatsapp:","link.dispara.ai/"].some((e=>o.includes(e)))){const t=a.getUtmParameters(),o=e.UrlRebuilder.getAdId(t);return n.href=e.UrlRebuilder.randomizePhoneNumberIfNecessary(n.href),void(n.href=e.UrlRebuilder.insertAdIdInWppUrl(n.href,null!=o?o:""))}var o;if(t&&s.every((e=>n.href.includes(e))))return;n.href=a.addUtmParametersToUrl(n.href)}}))}function o(e){document.querySelectorAll("form").forEach((t=>{e&&s.every((e=>t.action.includes(e)))||(t.action=a.addUtmParametersToUrl(t.action),a.getUtmParameters().forEach(((e,n)=>{const o=(r=n,t.querySelector(`input[name="${r}"]`));var r;if(o)return void o.setAttribute("value",e);const i=((e,t)=>{const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n})(n,e);t.appendChild(i)})))}))}!function(){const e=new URLSearchParams(window.location.search);window.paramsList.forEach((t=>{const n=e.get(t);n&&((e,t)=>{localStorage.setItem(e,t);const n=new Date((new Date).getTime()+24*window.itemExpInDays*60*60*1e3);localStorage.setItem(c(e),n.toISOString())})(t,n)}))}();const i=function(){var e,t,n,o,r,i,a,s,c,u,l,d,m,v,p,w,h,f,g,U,_;const P=null!==(n=null===(t=null===(e=null===window||void 0===window?void 0:window.BOOMR)||void 0===e?void 0:e.themeName)||void 0===t?void 0:t.includes("Dropmeta"))&&void 0!==n&&n,y=null!==(i=null===(r=null===(o=null===window||void 0===window?void 0:window.BOOMR)||void 0===o?void 0:o.themeName)||void 0===r?void 0:r.includes("Warehouse"))&&void 0!==i&&i,R=null!==(c=null===(s=null===(a=null===window||void 0===window?void 0:window.BOOMR)||void 0===a?void 0:a.themeName)||void 0===s?void 0:s.includes("Classic®"))&&void 0!==c&&c,b=null!==(d=null===(l=null===(u=null===window||void 0===window?void 0:window.BOOMR)||void 0===u?void 0:u.themeName)||void 0===l?void 0:l.includes("Tema Vision"))&&void 0!==d&&d,O=null!==(p=null===(v=null===(m=null===window||void 0===window?void 0:window.BOOMR)||void 0===m?void 0:m.themeName)||void 0===v?void 0:v.includes("Waresabino"))&&void 0!==p&&p,S=null!==(f=null===(h=null===(w=null===window||void 0===window?void 0:window.BOOMR)||void 0===w?void 0:w.themeName)||void 0===h?void 0:h.includes("Dawn"))&&void 0!==f&&f,E=null!==(_=null===(U=null===(g=null===window||void 0===window?void 0:window.BOOMR)||void 0===g?void 0:g.themeName)||void 0===U?void 0:U.includes("Vortex"))&&void 0!==_&&_;return P||y||R||b||O||S||E}();n(),function(){const e=window.open;window.open=function(t,n,o){var r;return t=a.addUtmParametersToUrl(null!==(r=null==t?void 0:t.toString())&&void 0!==r?r:""),e(t,n||"",o||"")}}(),i||(o(),function(){const{body:e}=document;new MutationObserver(((e,t)=>{const r=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return"INPUT"===t.tagName&&"hidden"===(null==t?void 0:t.type)};e.some((e=>Array.from(e.addedNodes).some(r)))||(n(!0),o(!0))})).observe(e,{subtree:!0,childList:!0})}(),t||document.querySelectorAll("iframe").forEach((e=>{Object.values(r).some((t=>e.src.includes(t)))||(e.src=a.addUtmParametersToUrl(e.src))})))}const l=()=>{u(),setTimeout(u,2e3),setTimeout(u,3e3),setTimeout(u,5e3),setTimeout(u,9e3)};"complete"===document.readyState?l():window.addEventListener("load",l)})()})();