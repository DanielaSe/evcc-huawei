import{g as R}from"./index-CN0w41DB.js";function I(f,d){for(var c=0;c<d.length;c++){const t=d[c];if(typeof t!="string"&&!Array.isArray(t)){for(const l in t)if(l!=="default"&&!(l in f)){const n=Object.getOwnPropertyDescriptor(t,l);n&&Object.defineProperty(f,l,n.get?n:{enumerable:!0,get:()=>t[l]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}},O;function P(){return O||(O=1,function(f,d){(function(){function c(){var t=window,l=document;if("scrollBehavior"in l.documentElement.style&&t.__forceSmoothScrollPolyfill__!==!0)return;var n=t.HTMLElement||t.Element,Y=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||b,scrollIntoView:n.prototype.scrollIntoView},v=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;function E(e){var r=["MSIE ","Trident/","Edge/"];return new RegExp(r.join("|")).test(e)}var y=E(t.navigator.userAgent)?1:0;function b(e,r){this.scrollLeft=e,this.scrollTop=r}function B(e){return .5*(1-Math.cos(Math.PI*e))}function m(e){if(e===null||typeof e!="object"||e.behavior===void 0||e.behavior==="auto"||e.behavior==="instant")return!0;if(typeof e=="object"&&e.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function S(e,r){if(r==="Y")return e.clientHeight+y<e.scrollHeight;if(r==="X")return e.clientWidth+y<e.scrollWidth}function w(e,r){var o=t.getComputedStyle(e,null)["overflow"+r];return o==="auto"||o==="scroll"}function L(e){var r=S(e,"Y")&&w(e,"Y"),o=S(e,"X")&&w(e,"X");return r||o}function j(e){for(;e!==l.body&&L(e)===!1;)e=e.parentNode||e.host;return e}function T(e){var r=v(),o,a,u,s=(r-e.startTime)/Y;s=s>1?1:s,o=B(s),a=e.startX+(e.x-e.startX)*o,u=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,a,u),(a!==e.x||u!==e.y)&&t.requestAnimationFrame(T.bind(t,e))}function p(e,r,o){var a,u,s,g,_=v();e===l.body?(a=t,u=t.scrollX||t.pageXOffset,s=t.scrollY||t.pageYOffset,g=i.scroll):(a=e,u=e.scrollLeft,s=e.scrollTop,g=b),T({scrollable:a,method:g,startTime:_,startX:u,startY:s,x:r,y:o})}t.scroll=t.scrollTo=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){i.scroll.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:t.scrollY||t.pageYOffset);return}p.call(t,l.body,arguments[0].left!==void 0?~~arguments[0].left:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(arguments[0]!==void 0){if(m(arguments[0])){i.scrollBy.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}p.call(t,l.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},n.prototype.scroll=n.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,r=arguments[0].top;p.call(this,this,typeof e>"u"?this.scrollLeft:~~e,typeof r>"u"?this.scrollTop:~~r)}},n.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){i.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},n.prototype.scrollIntoView=function(){if(m(arguments[0])===!0){i.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var e=j(this),r=e.getBoundingClientRect(),o=this.getBoundingClientRect();e!==l.body?(p.call(this,e,e.scrollLeft+o.left-r.left,e.scrollTop+o.top-r.top),t.getComputedStyle(e).position!=="fixed"&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}}f.exports={polyfill:c}})()}(h)),h.exports}var X=P();const C=R(X),V=I({__proto__:null,default:C},[X]);export{V as s};
