!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,f=setTimeout(S,t),s?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=p();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(S,t),y(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=j.elements,S=O.email,w=O.message,T="feedback-form-state";!function(){var e=localStorage.getItem(T);if(!e)return;try{var t=JSON.parse(e);S.value=t.email,w.value=t.message}catch(e){console.log("".concat(e.name,": "),e.message)}}();j.addEventListener("input",e(t)((function(){var e={email:S.value,message:w.value};try{localStorage.setItem(T,JSON.stringify(e))}catch(e){console.log("".concat(e.name,": "),e.message)}}),500)),j.addEventListener("submit",(function(e){e.preventDefault();try{var t=JSON.parse(localStorage.getItem(T));console.log(t),localStorage.removeItem(T),j.reset()}catch(e){console.log("".concat(e.name,": "),e.message)}}))}();
//# sourceMappingURL=03-feedback.7de276c5.js.map
