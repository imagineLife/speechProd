(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{26:function(e,t){var n=function(e){return e.replace(/(^)?\s*$/gm," ").replace(/[.,-]/g,"").split(" ")};e.exports={convertStrToWordArr:n,getLongestThirty:function(e){var t=("string"==typeof e?n(e):e).reduce((function(e,t){return e.indexOf(t.toLowerCase())<0&&e.push(t.toLowerCase()),e}),[]);return t.sort((function(e,t){return t.length-e.length})),t.slice(0,30)},getWordsByCount:function(e){var t="string"==typeof e?n(e):e,r=["the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at","","this","but","his","by","from","they","we","say","her","she"],a=[];return t.forEach((function(e){var t=e.toLowerCase(),n=null;if(a.some((function(e,r){return e.word==t&&(n=r),e.word==t})))a[n].occurances+=1;else{if(r.includes(t))return;a.push({word:e.toLowerCase(),occurances:1})}})),a.sort((function(e,t){return t.occurances-e.occurances})),a},getWordsByLength:function(e){var t="string"==typeof e?n(e):e,r=[];return t.forEach((function(e){var t=null,n=e.length;r.some((function(e,r){return e.size==n&&(t=r),e.size==n}))?r[t].occurances+=1:r.push({size:n,occurances:1})})),r.sort((function(e,t){return t.occurances-e.occurances})).slice(0,8)},ingWords:function(e){return e.match(/\w*ing\b/g)},edWords:function(e){return e.match(/\w*ed\b/g).sort()},getSentences:function(e){var t=e.replace(/(\s{2})/gm," ").replace(/\.\s/g,".~~ ").replace(/\?\s/g,"?~~ ").replace(/!\s/g,"!~~ ").split(/(~~)\s/g);return t=t.filter((function(e,t){return t%2==0})).map((function(e){return{text:e.trim(),wordCount:e.trim().split(" ").length}}))}}},39:function(e,t,n){var r=n(7),a=n(40);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},40:function(e,t,n){(t=n(8)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n}\n\n/* \n  Grid-Template-areas \n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas \n\n  Grid-template-rows\n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows\n  grid-template-rows: 250px 1fr 2fr; \n  \n  Grid-template-columns\n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns\n\n  fr = fraction\n    cut the remaining content into 3rds (1+2)\n*/\n\n#flex-grid-layout{\n  /*I-E-Friendly styles before the grid-api ... :/ */\n  display: inline-block;\n  display: grid;\n  width: 100%;\n  grid-template-areas: \n    "top top"\n    "l r"\n    "bottom bottom";\n  grid-template-rows: 210px 1fr ; /*1fr*/ \n  padding: 0 25px;\n  grid-column-gap: 20px;\n  /*width: 1280px;*/\n  border: 1px solid var(--border);\n}\n\n/*TOP SECTION?! \n  magic, like css var(--varHere) from "top top"\n  from the grid-template-areas above\n*/\nheader{\n  grid-area: top;\n}\n\n#left-side{\n  grid-area: l;\n  display: flex;\n  flex-direction: column\n}\n\n#right-side{\n  grid-area: r;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\nfooter{\n  grid-area: bottom;\n}\n\n#flex-grid-layout #title-box{\n  max-height: 150px;\n}\n\n#flex-grid-layout #area-box{\n  height: 100px;\n}\n\n#flex-grid-layout #focus-area-box{\n  /*315px;*/\n  min-height: 345px;\n  border-bottom: var(--border)\n}\n\n#flex-grid-layout div#focus-area-box #focus-area-hover{\n  max-height: 200px;\n  min-height: 190px;\n}\n\n#flex-grid-layout #area-explain-box{\n  height: fit-content;\n}\n\n.flex-row{\n  display: flex;\n  flex-direction: row;\n}\n\n.face-image{\n  max-height: 100%;\n  max-width: 100%;\n}\n\n#flex-grid-layout #words-of-interest-box{\n  max-height: 385px;\n}\n\n#flex-grid-layout #words-by-length-box{\n  max-height: 275px;\n  flex: 1;\n  padding-top: 35px;\n  border-left: var(--border)\n}\n\n#words-by-length-box > .explanatory-text{\n  padding: 0 30px 10px 30px;\n  border-image: var(--bottom-narrow);\n  border-width: 1px;\n  border-style: solid;\n}\n\n#flex-grid-layout div#text-display-box p.text-content{\n  line-height: 2.3;\n  columns: 2;\n  column-rule: 1px solid rgb(130, 130, 130);\n  column-gap: 20px;\n  overflow-x: scroll;\n  max-height: 480px;\n}\n\n\nul.title-data{\n\ttext-align: center;\n}\n\nli.sub-title{\n  margin: 7px 25px;\n  font-size: .8em;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n/*\n\tInteresting style-choice, not what i thought but nice && grow-able\n*/\nli.sub-title:nth-child(even){\n\tborder: var(--border);\n\tborder-width: 0 2px;\n\tpadding: 0 25px;\n\tmargin: 0;\n}\n\n.title-text-wrapper {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.title-text-wrapper > h1{\n\t/*width: 100%;*/\n  /*width: calc(100% - 291px);*/\n\t/*margin: 10px 0;*/\n  width: calc(100% - 291px);\n  margin: 10px 0;\n  padding-left: 210px;\n}\n\n.corner-box{\n  border: 1px solid rgb(100,100,100);\n  /*position: absolute;*/\n  top: 8px;\n  right: 25px;\n  width: 380px;\n  font-size: .25em;\n  text-align: center;\n  padding: 6px;\n  margin: 10px 0;\n}\n\n.selectable-area-explain{\n  padding: 7px;\n  font-family: sans-serif;\n  font-size: .76em;\n  border-bottom: var(--border);\n  margin-bottom: 20px;\n}\n\n#flex-grid-layout #image-box{\n  width: 60%;\n  display: inline-block;\n  max-height: 290px;\n  border-image: var(--bottom-mid);\n  max-height: 350px;\n  padding: 0 25px 15px 25px\n}\n\n.image-sub{\n  font-size: 1em;\n  width: 100%;\n  text-align: center;\n}\n\n/* \n  Grid-Template-areas \n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas \n\n  Grid-template-rows\n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows\n  grid-template-rows: 250px 1fr 2fr; \n  \n  Grid-template-columns\n  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns\n\n  fr = fraction\n    cut the remaining content into 3rds (1+2)\n*/\n\n/*TOP SECTION?! \n  like css var(--varHere) \n    from "top top"\n    from the grid-template-areas above\n*/\nheader{\n  grid-area: top;\n}\n\n#left-side, #right-side{\n  margin-top: 10px;\n}\n\n#left-side{\n  grid-area: l;\n}\n\n#right-side{\n  grid-area: r;\n  display: flex;\n  /*row*/\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\nfooter{\n  grid-area: bottom;\n  margin-top: 25px;\n}\n\n#flex-grid-layout #title-box{\n  max-height: 150px;\n}\n\n#flex-grid-layout #area-box{\n  height: 100px;\n}\n\n#flex-grid-layout #focus-area-box{\n  max-height: 315px;\n  border-bottom: var(--border)\n}\n\n#flex-grid-layout div#focus-area-box #focus-area-hover{\n  max-height: 200px;\n  min-height: 190px;\n}\n\n#flex-grid-layout #area-explain-box{\n  max-height: 75px;\n}\n\n.face-image{\n  max-height: 100%;\n  max-width: 100%;\n}\n\n#flex-grid-layout #words-of-interest-box{\n  max-height: 385px;\n  padding: 15px 0;\n}\n\n/*.section-text:hover{\n  transition: all 500ms;\n}\n\n.section-text:hover{\n  text-shadow: rgba(0,0,0,.5) 0 8px 3px;\n}*/\n#words-of-interest-box > .section-text{\n  margin-bottom: 8px;\n}\n\n#flex-grid-layout div#text-display-box p.text-content{\n  line-height: 2.3;\n  columns: 2;\n  column-rule: 1px solid rgb(130, 130, 130);\n  column-gap: 20px;\n  overflow-x: scroll;\n  max-height: 480px;\n}\n\n.image-subtext, .section-text{\n  text-transform: uppercase;\n  font-size: 1.6em;\n  text-align: center;\n  width: 100%;\n}\n\n\n\n.image-subtext{\n  position: absolute;\n  bottom: 0;\n}\n\n.explanatory-text{\n  font-size: .85em\n}\n\n#divider-box {\n  border-top:  var(--border);\n  border-bottom:  var(--border);\n  line-height: 2;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.circle-label{\n  fill: rgb(147,147,147);\n  text-anchor: middle;\n  font-size: 12px;\n  alignment-baseline: middle;\n}\n\n#circlesBox-forUI{\n  height: 80%;\n  width: 100%;  \n}\n\n.interaction-note{\n  font-family: prata;\n}\n\n/*@media only screen and (min-width: 120)*/',""]),e.exports=t},45:function(e,t,n){var r=n(7),a=n(46);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},46:function(e,t,n){(t=n(8)(!1)).push([e.i,"#area-box{\n\tborder-bottom: var(--border)\n}\n\n.selectable-wrapper{\n\twidth: 100%;\n\theight: 100%;\n}",""]),e.exports=t},47:function(e,t,n){var r=n(7),a=n(48);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},48:function(e,t,n){(t=n(8)(!1)).push([e.i,"#words-of-interest-for-ui{\n\twidth: 100%;\n  display: flex;\n  min-height: 300px;\n}\n\n#word-list, #focus-words{\n\twidth: 50%;\n\tdisplay: inline-block;\n\ttext-align: left;\n\tpadding: 10px;\n\tfloat: left;\n\tmax-height: 275px;\n\toverflow-y: auto;\n}\n\n#word-lists{\n  line-height: 3;\n  padding: 0 15px;\n}\n\n#word-picker-title{\n\ttext-align: center;\n\tfont-size: 1.7em;\n\ttext-transform: uppercase;\n\tmargin: 10px 0;\n}\n\n.word-list-title{\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tmargin: 8px 0;\n}\n\n.word-list-option, .focus-word-option{\n\tlist-style-type: none;\n\tcursor: pointer;\n}\n\n.word-list-option:hover, .focus-word-option:hover{\n\ttext-decoration: underline;\n}\n\n.selected-focus-word{\n\ttext-transform: uppercase;\n}\n\nsection#word-list{\n\tborder-right: var(--border);\n}",""]),e.exports=t},49:function(e,t,n){var r=n(7),a=n(50);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},50:function(e,t,n){(t=n(8)(!1)).push([e.i,".selected-text{\n\tfont-size: 1.25em;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tfont-style: normal;\n}\n\n.word-length{\n\tbackground-color: rgb(165,165,0);\n\tcolor: black;\n\tfont-style: normal;\n}\n\n.display-text{\n\tline-height: 1.75;\n}\n\n.themed{\n\ttext-decoration: underline pink wavy\n}\n\n.theme-sentence{\n\tfont-style: normal;\n\ttext-decoration: underline pink;\n}",""]),e.exports=t},51:function(e,t,n){var r=n(7),a=n(52);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},52:function(e,t,n){(t=n(8)(!1)).push([e.i,".explanation-wrapper{\n\theight: 50px;\t\n}\n\n.explanatory-text{\n\tfont-size: .75em;\n}",""]),e.exports=t},53:function(e,t,n){var r=n(7),a=n(54);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},54:function(e,t,n){(t=n(8)(!1)).push([e.i,".word-circle{\n\tcursor: pointer;\n}",""]),e.exports=t},55:function(e,t,n){var r=n(7),a=n(56);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},56:function(e,t,n){(t=n(8)(!1)).push([e.i,"#theme-box{\n  width: 40%;\n  display: inline-block;\n  max-height: 350px;\n  border-image: linear-gradient(to bottom, \n    transparent 10%,\n    rgb(80,80,80) 10% 85%, \n    transparent 85% 100%\n  ) 1 / 2px;\n  border-style: solid;\n  border-width: 1px;\n}\n\n.theme-title{\n  border-image: var(--bottom-narrow);\n  padding-bottom: 10px;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.theme-explanatory{\n  text-align: center;\n}\n\n#theme-list-box{\n  /*overflow-y: auto;*/\n}\n\n.theme-list{\n  margin-top: 20px;\n  text-align: center;\n  line-height: 2;\n  max-height: 216px;\n  overflow-y: auto;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgb(49,54,61); /* page background rgb(29,34,41);  */\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(69,74,81); \n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; \n}\n\n.theme-list::-webkit-scrollbar {\n    -webkit-appearance: none;\n}\n\n.theme-list::-webkit-scrollbar:vertical {\n    width: 11px;\n}\n\n.theme-list::-webkit-scrollbar:horizontal {\n    height: 11px;\n}\n\n.theme-list::-webkit-scrollbar-thumb {\n    border-radius: 8px;\n    border: 1px solid rgb(89,94,101); /* should match background, can't be transparent */\n    background-color: rgb(89,94,101);\n}\n\n.theme-word{\n  cursor: pointer;\n  transition: all 250ms;\n}\n\n.theme-word:hover{\n  color: rgb(215,215,215);\n}\n\n.selected-underline{\n  width: 70%;\n  height: 7px;\n  background-color: orange;\n  margin: -7px auto 0 auto;\n  display: block;\n  border-radius: 5px;\n  cursor: pointer;\n}",""]),e.exports=t},57:function(e,t,n){e.exports=n.p+"7d0212b49115a8bc17bd1d262e5e4253.jpg"},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(39);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(){var e,t=o(a.a.useState({}),2),n=t[0],r=t[1],i=o(a.a.useState(null),2),l=i[0],c=i[1],s=a.a.useCallback((function(e){c(e)}),[]);return a.a.useLayoutEffect((function(){if(l){var t=function(){clearTimeout(e),e=setTimeout((function(){r(function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:"x"in t?t.x:t.top,left:"y"in t?t.y:t.left,x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top,right:t.right,bottom:t.bottom}}(l))}),150)};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[l]),[s,n,l]},l=n(66),c=n(65),s=n(68),u=n(70),d=n(34),p=n(64),f=n(58),m=(n(45),n(26));function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=Object(r.createContext)(),v=y.Provider,w=(y.Consumer,function(e,t){for(var n="",r=t[0];r<t[1];)n+=e[r++].text+" ";return n}),E=function(e){var t=h(Object(r.useReducer)((function(e,t){switch(t.type){case"SENTENCES":return b({},e,{sentences:t.payload});case"UPDATE_DISPLAY_TEXT_FROM_AREA":return b({},e,{selectedAreaArr:t.payload,displayText:w(e.sentences,t.payload)});case"WORD_LENGTH":return b({},e,{wordLength:t.payload});case"TEXT":return b({},e,{text:t.payload});case"MAX_WORDS":return b({},e,{maxWordsPerSentence:t.payload});case"THEME":return b({},e,{theme:t.payload});default:return b({},e,{text:t.payload})}}),{text:""}),2),n=t[0],o=t[1],i=h(Object(r.useState)(null),2),l=i[0],s=i[1],u=h(Object(r.useState)(null),2),d=u[0],p=u[1];return Object(r.useEffect)((function(){fetch("./data/fullText.txt").then((function(e){return e.text().then((function(e){var t=Object(m.getSentences)(e),n=c.a(t,(function(e){return e.wordCount}));o({type:"TEXT",payload:e}),o({type:"SENTENCES",payload:t}),o({type:"MAX_WORDS",payload:n}),fetch("./data/themesArrSlim.json").then((function(e){return e.json().then(p)}))}))}))}),[]),a.a.createElement(v,{value:b({textAreaDispatch:o,areaData:l,themesData:d,setAreaData:s},n)},e.children)};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){var t=e.onMove,n=e.dims;if(!n||!n.height||!n.width)return a.a.createElement("p",null,"...loading");var r=a.a.useContext(y),o=r.sentences,i=r.textAreaDispatch,m=r.areaData,h=r.setAreaData,g=O(a.a.useState([0,175]),2),b=g[0],x=g[1],v=a.a.useRef(),w=function(){var e=d.c.selection,n=Math.floor(j(e[0])),r=Math.floor(j(e[1]));x(e),i({type:"UPDATE_DISPLAY_TEXT_FROM_AREA",payload:[n,r]}),t([n,r])};if(a.a.useEffect((function(){if(o&&!m){var e=[];o.forEach((function(t){e.push({y:t.wordCount})})),h(e)}}),[o]),a.a.useEffect((function(){if(v&&v.current&&m){var e=f.a().handleSize(10).on("brush",w),t=p.a(v.current);setTimeout((function(){t.call(e),e.move(t,b)}),10)}}),[v,m,n]),!m||!o)return a.a.createElement("p",null,"Loading areaData...");var E=l.a().domain([0,m.length-1]).range([0,n.width]),S=l.a().domain([0,c.a(m,(function(e){return e.y}))]).range([100,0]),j=l.a().domain([0,n.width]).range([0,m.length-1]),T=s.a().x((function(e,t){return E(t+1)})).y0(100).y1((function(e){return S(e.y)})).curve(u.a),A=T(m);return A&&E&&S&&T&&j?a.a.createElement("svg",{id:"selectable",style:n},a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"myGradient",gradientTransform:"rotate(90)"},a.a.createElement("stop",{offset:"50%",stopColor:"rgb(147,147,147)"}),a.a.createElement("stop",{offset:"100%",stopColor:"rgba(49,54,61,0)"}))),a.a.createElement("g",{className:"g-wrapper"},a.a.createElement("path",{d:A,fill:"url(#myGradient)"}),a.a.createElement("g",{className:"brush-g-window",ref:v}))):a.a.createElement("p",null,"loading...")};n(47);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=a.a.createContext(),W=N.Provider,k=(N.Consumer,function(e){var t=j(a.a.useReducer((function(e,t){switch(t.type){case"LONGEST_WORDS":return A({},e,{"Longest Words":t.payload});case"COMMON_WORDS":return A({},e,{"Common Words":t.payload});case"ACTION_WORDS":return A({},e,{"Action Words":t.payload});default:return A({},e)}}),{"Common Words":[],"Longest Words":[],"Action Words":[]}),2),n=t[0],r=t[1],o=(a.a.useContext(y),j(a.a.useState(null),2)),i=o[0],l=o[1],c=j(a.a.useState([]),2),s=c[0],u=c[1],d=j(a.a.useState([]),2),p=d[0],f=d[1],h=j(a.a.useState(null),2),g=h[0],b=h[1];return a.a.createElement(W,{value:{selectedWord:i,setSelectedWord:l,makeCommonWords:function(e){var t,n=Object(m.convertStrToWordArr)(e);u(Object(m.getWordsByCount)(n).slice(0,10)),f(Object(m.getLongestThirty)(n).slice(0,10)),r({type:"COMMON_WORDS",payload:Object(m.getWordsByCount)(n).slice(0,10)}),r({type:"LONGEST_WORDS",payload:Object(m.getLongestThirty)(n).slice(0,10)}),r({type:"WORDS_BY_LENGTH",payload:Object(m.getWordsByLength)(n)}),r({type:"ACTION_WORDS",payload:(t=Object(m.ingWords)(e),t?t.filter((function(e,n){return t.indexOf(e)===n})):[])})},commonWords:s,longestNine:p,wordLists:n,selectWordList:b,wordListFocus:g}},e.children)}),L=function(){var e=a.a.useContext(y).displayText,t=a.a.useContext(N),n=t.makeCommonWords,r=t.wordLists,o=t.selectWordList,i=t.setSelectedWord,l=t.selectedWord,c=t.wordListFocus;if(a.a.useEffect((function(){e&&n(e)}),[e]),a.a.useEffect((function(){if(e&&r&&!c){var t=Object.keys(r);o(t[0])}}),[e,c,r]),!r)return a.a.createElement("p",null,"Missing Word Lists");var s=Object.keys(r);return a.a.createElement("div",{id:"words-of-interest-box"},a.a.createElement("h2",{className:"section-text"},"Words Of Interest"),a.a.createElement("p",{className:"explanatory-text"},"Here are some various types of words that were spoken. The word lists are toggle-able & the words are selectable.",a.a.createElement("span",{className:"interaction-note"},"SELECT.SELECT")),a.a.createElement("section",{id:"words-of-interest-for-ui"},a.a.createElement("section",{id:"word-list"},a.a.createElement("h3",{className:"word-list-title"},"Word Lists"),a.a.createElement("ul",{id:"word-lists"},s.map((function(e,t){return a.a.createElement("li",{key:"".concat(e,"-").concat(t),className:"word-list-option".concat(c===e?" selected":""),onClick:function(){o(e)}},e)})))),a.a.createElement("section",{id:"focus-words"},a.a.createElement("h3",{className:"word-list-title"},"List Results"),c&&a.a.createElement("ul",{id:"focus-word-list"},r[c].map((function(e,t){var n="Common Words"===c?e.word:e;return a.a.createElement("li",{key:"".concat(n,"-").concat(t),className:"focus-word-option ".concat(l&&l===n?" selected-focus-word":""),onClick:function(){i(l===n?null:n)}},n)}))))))},D=(n(49),function(e,t,n){var r=new RegExp("/.w*sw*=/".concat(n,".(w*)</w*>/g")),a=new RegExp("\\s(\\w{".concat(t,"})[\\s.!?,]"),"g");return e.replace(r,"$1").replace(a,' <i class="'.concat(n,'">$1</i> '))});function M(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function P(e,t){return[e.substring(0,t),e.substring(t)]}var R=function(){var e=Object(r.useContext)(y),t=e.displayText,n=e.selectedAreaArr,o=e.sentences,i=e.wordLength,l=e.theme,c=e.themesData,s=Object(r.useContext)(N).selectedWord,u=_(Object(r.useState)("</span>"),1)[0],d=_(Object(r.useState)('<span class="theme-sentence">'),1)[0];if(!t)return a.a.createElement("p",null,"Loading Text Display...");var p,f,m,h,g,b=t,x=o.filter((function(e,t){return t>=n[0]&&t<=n[1]})),v=[];if(l)for(var w=n[0];w<=n[1];w++)c[w].includes(l)&&v.push({i:w,relativeI:w-n[0],themes:c[w]});for(var E=v.length-1;E>=0;E--){var O=x[v[E].relativeI].text,S=b.indexOf(O),j=P(b,S+O.length),T=P(b="".concat(j[0]).concat(u).concat(j[1]),S);b="".concat(T[0]).concat(d).concat(T[1])}s&&(p=b,f=s,m="selected-text",h=new RegExp("/.w*sw*=/".concat(m,".(w*)</w*>/g")),g=new RegExp("\\b(".concat(f,")\\b"),"gi"),b=p.replace(h,"$1").replace(g,'<em class="'.concat(m,'">$1</em>'))),i&&(b=D(b,i,"word-length"));var A=Math.ceil(x.length/15),C={columns:A=Math.min(A,4),overflowX:"scroll",columnRuleStyle:"solid",height:"450px"},W={};return c&&c.forEach((function(e,t){e.forEach((function(e){W[e]=W[e]?[].concat(M(W[e]),[t]):[t]}))})),a.a.createElement("p",{className:"display-text",style:C,dangerouslySetInnerHTML:{__html:b}})};n(51);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var t=e.dims,n=a.a.useContext(y),r=n.sentences,o=n.selectedAreaArr,i=n.maxWordsPerSentence,c=z(a.a.useState(null),2),u=c[0],d=c[1];if(!r||!o||!t)return a.a.createElement("p",null,"loading area...");var p=o[1]-o[0],f=l.a().domain([0,p]).range([0,t.width]),m=r.reduce((function(e,t,n){return n>=o[0]&&n<=o[1]?e.concat(t):e}),[]),h=l.a().domain([0,i]).range([t.height,0]),g=s.a().x((function(e,t){return f(t)})).y0(h(0)).y1((function(e){return h(e.wordCount)}))(m),b=function(e){var t=document.getElementsByClassName("area-svg")[0].getBoundingClientRect().x,n=e.pageX-t;if(n>f.range()[0]){var a=Math.ceil(f.invert(n))+o[0];a>-1&&d(r[a-1].text)}};return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{id:"area",style:t,className:"area-svg",onMouseOver:b,onMouseMove:b,onMouseOut:function(){return d(null)}},a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"areaGradient",gradientTransform:"rotate(90)"},a.a.createElement("stop",{offset:"1%",stopColor:"rgb(147,147,147)"}),a.a.createElement("stop",{offset:"95%",stopColor:"rgba(147,147,147,.05)"}))),a.a.createElement("path",{d:g,fill:"rgba(147,147,147,.25)"})),a.a.createElement("div",{className:"explanation-wrapper"},a.a.createElement("p",{className:"explanatory-text"},!u&&"Hover over this area chart to highlight the sentence \n\t\t\t\t\t\tthat was spoken at the specific point in time during the \n\t\t\t\t\t\tpresident’s address.  HOVER",u&&u)))};n(53);function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=a.a.createContext(),H=G.Provider,X=(G.Consumer,function(e){var t=B(a.a.useState([]),2),n=t[0],r=t[1];return a.a.createElement(H,{value:{calcWordsByLength:function(e){r(Object(m.getWordsByLength)(e))},wordsByLength:n}},e.children)});function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=function(){var e=U(i(),2),t=e[0],n=e[1],o=n.height,s=n.width,u=U(Object(r.useState)({t:10,r:25,b:5,l:15}),1)[0],d=U(Object(r.useState)({}),2),p=d[0],f=d[1],m=U(Object(r.useState)([]),2),h=m[0],g=m[1],b=U(Object(r.useState)(0),2),x=b[0],v=b[1],w=U(Object(r.useState)(null),2),E=w[0],O=w[1],S=a.a.useContext(y),j=S.displayText,T=S.textAreaDispatch,A=S.selectedAreaArr,C=S.wordLength,N=a.a.useContext(G),W=N.calcWordsByLength,k=N.wordsByLength;if(a.a.useEffect((function(){j&&k.length<1&&W(j)}),[j,k,Object.values(S)]),a.a.useEffect((function(){A&&W(j)}),[A]),a.a.useEffect((function(){if(k.length>0){var e=o&&s&&void 0===p.w,t={},n=s-u.l-u.r!==p.w,r=void 0!==p.w;if(n&&r||e){t=function(e,t,n){return{h:e-n.t-n.b,w:t-n.l-n.r}}(o,s,u);var a=k.length+.5,i=t.w/a*.9,l=Math.min(i,.45*t.h);d=l,f(c=t),g([0,d]),v(.01*c.w)}}var c,d}),[t,o,s,k,A]),!(k.length>0))return a.a.createElement("p",{style:{color:"gray"}},"Loading Circle Data...");var L=c.a(k,(function(e){return e.occurances})),D=l.a().domain([0,L]).range(h),M=k.map((function(e,t){var n=D(e.occurances);return e.scaledR=n,e.scaledD=2*n,e.thisXWithBuffer=x+n,e.prevX=0===t?0:k[t-1].thisX,e.thisX=e.prevX+e.thisXWithBuffer,e}));return a.a.createElement("div",{id:"circlesBox-forUI",ref:t},a.a.createElement("svg",{id:"circle-svg",width:s,height:o},a.a.createElement("g",{transform:"translate(".concat(u.l,", ").concat(u.t,")")},p&&p.h&&null!==h&&M.map((function(e,t){var n=e.thisX+e.prevX,r=.45*p.h;return a.a.createElement("g",{key:"".concat(e.size,"-").concat(t),onClick:function(){C===e.size?T({type:"WORD_LENGTH",payload:null}):T({type:"WORD_LENGTH",payload:e.size})}},a.a.createElement("defs",null,a.a.createElement("filter",{id:"glow"},a.a.createElement("feGaussianBlur",{className:"blur",stdDeviation:"2.5",result:"coloredBlur"}),a.a.createElement("feMerge",null,a.a.createElement("feMergeNode",{in:"coloredBlur"}),a.a.createElement("feMergeNode",{in:"SourceGraphic"})))),a.a.createElement("circle",{className:"word-circle",r:D(e.occurances),stroke:C==e.size?"rgb(125,125,0)":E==t?"rgb(85,85,30)":"rgb(125,125,125)",strokeWidth:2,cx:n,cy:r,fill:C==e.size?"rgb(25,25,0)":"rgb(25,25,25)",filter:E==t?"url(#glow)":null,onMouseOver:function(){O(t)},onMouseOut:function(){O(null)}}),a.a.createElement("text",{pointerEvents:"none"},a.a.createElement("tspan",{pointerEvents:"none",x:n,y:p.h-15,className:"circle-label"},e.size,"-Letter"),a.a.createElement("tspan",{pointerEvents:"none",x:n,y:p.h,className:"circle-label"},"Words")),a.a.createElement("text",{pointerEvents:"none"},a.a.createElement("tspan",{pointerEvents:"none",x:n,y:r,className:"circle-label count"},e.occurances)))})))))},$=function(){return a.a.createElement(X,null,a.a.createElement(F,null))},Y=(n(55),function(){var e=Object(r.useContext)(y),t=e.selectedAreaArr,n=e.themesData,o=e.theme,i=e.textAreaDispatch,l=[];if(t&&n)for(var c=t[0];c<=t[1];c++){var s=n[c];s.length>0&&s.forEach((function(e){l.includes(e)||l.sort().push(e)}))}return a.a.createElement("div",{id:"theme-box"},a.a.createElement("div",{className:"theme-title"},a.a.createElement("h2",{className:"section-text"},"Textual Themes"),a.a.createElement("p",{className:"explanatory-text theme-explanatory"},"Colors match text to a 'theme'.",a.a.createElement("span",{className:"interaction-note"},"CLICK"))),a.a.createElement("div",{id:"theme-list-box"},a.a.createElement("ul",{className:"theme-list"},l&&l.length>0&&l.map((function(e,t){return a.a.createElement("li",{key:"theme-item-".concat(e,"-").concat(t),onClick:function(){i(e==o?{type:"THEME",payload:null}:{type:"THEME",payload:e})},className:"theme-li"},a.a.createElement("span",{className:"theme-word"},e),e==o&&a.a.createElement("span",{className:"selected-underline"}))})))))}),K=n(57),V=n.n(K),J=function(){return a.a.createElement("div",{id:"image-box"},a.a.createElement("img",{alt:"speakers face",className:"face-image",src:V.a}),a.a.createElement("h2",{className:"section-text image-sub"},"The President",a.a.createElement("br",null)," ","Addresses The Nation"))};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=function(){return console.log("moved")},Z=function(){var e=q(i(),2),t=e[0],n=e[1],r=n.width,o=n.height,l=q(i(),2),c=l[0],s=l[1],u=s.width,d=s.height;return a.a.createElement("main",{id:"flex-grid-layout"},a.a.createElement("header",null,a.a.createElement("div",{id:"title-box",className:"f-w"},a.a.createElement("div",{className:"title-text-wrapper"},a.a.createElement("h1",{className:"title"},"The Slice-N-Dice Times"),a.a.createElement("div",{className:"corner-box"},a.a.createElement("p",null,'A Play on Newspapers, Text-Analysis, & Interaction. Some "Top" portions of this are interactive. The bottom shows the text of a speech, resposive to your interactions.'))),a.a.createElement("ul",{className:"title-data"},a.a.createElement("li",{className:"sub-title border-right"},"Donald Trump"),a.a.createElement("li",{className:"sub-title border-right"},"On the 20th Day of February in the Year of 2017"),a.a.createElement("li",{className:"sub-title"},"Gives his 1400+ word address to the nation"))),a.a.createElement("div",{id:"area-box",ref:t},a.a.createElement(S,{dims:{width:r,height:o},onMove:Q}))),a.a.createElement("section",{id:"left-side"},a.a.createElement("div",{id:"focus-area-box"},a.a.createElement("h2",{className:"section-text"},"A Glance At The Text"),a.a.createElement("p",{className:"explanatory-text"},"Hover over this area chart to highlight the sentence that was spoken at the specific point in time during the president’s address.",a.a.createElement("span",{className:"interaction-note"},"HOVER")),a.a.createElement("div",{id:"focus-area-hover",ref:c},a.a.createElement(I,{dims:{width:u,height:.8*d}}))),a.a.createElement(L,null)),a.a.createElement("section",{id:"right-side"},a.a.createElement("div",{id:"area-explain-box"},a.a.createElement("p",{className:"explanatory-text selectable-area-explain"},"In the above area chart, the dotted-box can be used to select a specific range of the speech, & update the remainder of the document (move, shrink, widen)",a.a.createElement("span",{className:"interaction-note"},"CLICK.DRAG.MOVE"))),a.a.createElement("div",{className:"flex-row"},a.a.createElement(Y,null),a.a.createElement(J,null)),a.a.createElement("div",{id:"words-by-length-box"},a.a.createElement("h2",{className:"section-text"},"Words By Length"),a.a.createElement("p",{className:"explanatory-text"},"Circles can be selected and all of the words in the speech section that match this selected word-length circle with be highlighted.",a.a.createElement("span",{className:"interaction-note"},"CLICK")),a.a.createElement($,null))),a.a.createElement("footer",null,a.a.createElement("div",{id:"divider-box"},a.a.createElement("p",{className:"explanatory-text"},"The text content of the speech, below, is responsive to interactions above.")),a.a.createElement("div",{id:"text-display-box"},a.a.createElement(R,null))))};t.default=function(){return a.a.createElement(E,null,a.a.createElement(k,null,a.a.createElement(Z,null)))}}}]);