!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var s,a,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var a=n[s];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),e.push(a))}},e}},function(n,e,t){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function a(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function l(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id],s=0;if(i){for(i.refs++;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(b(o.parts[s],e))}else{for(var a=[];s<o.parts.length;s++)a.push(b(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function c(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var o=t.nc;o&&(n.attributes.nonce=o)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=s(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function h(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r&&n.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,g=0;function b(n,e){var t,o,r;if(e.singleton){var i=g++;t=f||(f=c(e)),o=h.bind(null,t,i,!1),r=h.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=a(n,e);return l(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var s=t[i],c=r[s.id];c&&(c.refs--,o.push(c))}n&&l(a(n,e),e);for(var d=0;d<o.length;d++){var u=o[d];if(0===u.refs){for(var h=0;h<u.parts.length;h++)u.parts[h]();delete r[u.id]}}}}},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e,t){var o=t(5);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"html, body {\n  height: 100%;\n  width: 100%;\n  font-size: 16px;\n\n}\n\nbody {\n  background: url('/assets/images/bg-1.jpeg');\n  background-size: cover;\n  \n}\n\n.main-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.content-wrapper {\n  height: 800px;\n  width: 800px;\n}\n\n.content-container {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.svg-base-container {\n  height: 100%;\n  width: 100%;\n  background: rgba(60, 5, 122, 0.356);\n  stroke: #fff;\n  fill: #fff;\n  stroke-width: 10px;\n}\n\n\n/* Basic styles */\n\n.line-style-1 {\n  stroke: rgb(0, 0, 0);\n  stroke-width: 10px;\n}\n\n\n\n\n.test-line {\n  stroke: blue;\n  stroke-width: 15px;\n  \n}\n\n.svg-test {\n  z-index: 999;\n  stroke-width: 10px;\n  height: 100%;\n  width: 100%;\n  background: rgba(150, 140, 140, 0.589)\n}\n",""])},function(n,e,t){var o=t(7);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".acrylic-style::before {\n  position: absolute;\n  background: url('/assets/images/bg-1.jpeg');\n  background-size: cover;\n  content: \"\";\n  height: 100%;\n  width: 800px;\n\n  /* background: rgba(206, 5, 5, 0.2); */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  overflow: hidden;\n\n  \n}\n\n.acrylic-style {\n  background: rgba(104, 104, 104, 0.4);\n  overflow: hidden;\n  \n\n\n}",""])},function(n,e,t){"use strict";t.r(e);t(2),t(4),t(6);const o={createElement:(n="div",...e)=>{const t=n.toLowerCase().match(/[A-Za-z0-9]+/g).join();let o;console.log(t),"svg"===t?((o=document.createElementNS("http://www.w3.org/2000/svg",t)).setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttribute("viewBox","0 0 800 800"),console.log("- Parent SVG container created")):["line","circle","rect","polyline","path"].includes(t)?(o=document.createElementNS("http://www.w3.org/2000/svg",t),console.log("- Child SVG element created using createElementNS")):(o=document.createElement(t),console.log("-- Normal Element Created"));for(let n=0;n<e.length;n+=1)""!==e[n]&&o.classList.add(e[n]);return o}},r={createLine:(n,e,t,r)=>{const i=o.createElement("line","line-style-1");return i.setAttribute("x1",n),i.setAttribute("y1",e),i.setAttribute("x2",t),i.setAttribute("y2",r),i}},i=(()=>{const n=document.getElementById("content");return console.log("domController init"),{getMainDisplay:()=>n}})(),s=(()=>{let n;const e=()=>n;class t{constructor(){this.parents=[],this.layout=[],this.style1=[],this.style2=[],this.style3=[],this.style4=[]}}return{createParentsContainer:()=>{(e=>{n=e})(new t)},addParentToContainer:n=>{const t=e(),{type:o}=n;if(t.parents.push(n),o){Object.prototype.hasOwnProperty.call(t,o)?t[o].push(n):(console.log("New type created: "+o),t[o]=[],t[o].push(n))}console.log("getSvgParents():"),console.log(e())},changeAllStrokesOfType:n=>{const t=e();if(Object.prototype.hasOwnProperty.call(t,n)){for(let e=0;e<t[n].length;e+=1){console.log(t[n][e]);for(let o=0;o<t[n][e].children.length;o+=1)t[n][e].children[o].style.stroke="red"}console.log(t[n])}},addClassToAllOfType:(n,t)=>{const o=e();if(Object.prototype.hasOwnProperty.call(o,n)){for(let e=0;e<o[n].length;e+=1){console.log(o[n][e]);for(let r=0;r<o[n][e].children.length;r+=1)o[n][e].children[r].classList.add(t)}console.log(o[n])}}}})();class a{constructor(n,e,t,o){this.DOMElement=n,this.id=e,this.type=t,this.classes=o}}class l extends a{constructor(n,e,t,o){super(n,e,o,t),this.children=[]}addChild(n){this.children.push(n)}printSvgParent(){console.log("-_-_-_-_-_-_-_-_-_-_-_-_ Svg Parent:"),console.log("DOMElement:"),console.log(this.DOMElement),console.log(`type: ${this.type}`),console.log(`classes: ${this.classes}`),console.log("children:"),console.log(this.children),console.log("-_-_-_-_-_-_-_-_-_-_-_-_Svg Parent ////END//// ")}}(()=>{const n=(n,e,t)=>{const r=o.createElement("svg"),i=new l(r,n,t,e);return i.printSvgParent(),console.log("New Parent Created"),console.log(i),i},e=(n,e)=>{n.children.push(e),n.DOMElement.appendChild(e)};return{createSVG:()=>{const t=i.getMainDisplay();s.createParentsContainer();const o=n("layout","svg-test");e(o,r.createLine(100,100,700,100)),e(o,r.createLine(700,100,700,700)),e(o,r.createLine(100,700,700,700)),e(o,r.createLine(100,100,100,700)),s.addParentToContainer(o),t.appendChild(o.DOMElement);const a=n("layout","svg-test");e(a,r.createLine(200,200,600,200)),e(a,r.createLine(600,200,600,600)),e(a,r.createLine(200,600,600,600)),e(a,r.createLine(200,200,200,600)),s.addParentToContainer(a),t.appendChild(a.DOMElement),s.addClassToAllOfType("layout","test-line")}}})().createSVG()}]);