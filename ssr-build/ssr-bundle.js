module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/preact-pokeno/",r(r.s="QfWi")}({GFNa:function(t,e,r){},HkNH:function(t,e,r){t.exports={profile:"profile__3PvkN",row:"row__rzARo",card:"card__36gup",aligner:"aligner__2pRFQ",alignedItem:"alignedItem__3WaZy"}},HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,r){"use strict";r.r(e);r("GFNa");var n=r("HteQ"),o=r("Y3FI"),i=r("ox/y"),a=r("ySiU"),c=r.n(a),u=function(){return Object(n.h)("header",{class:c.a.header},Object(n.h)("h1",null,"Pokeno"),Object(n.h)("nav",null,Object(n.h)(i.Link,{activeClassName:c.a.active,href:"/preact-pokeno"},"Host")))},s=r("HkNH"),p=r.n(s);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e,r,n=t.length;0!==n;)r=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[r],t[r]=e;return t}var b=function(t){var e,r;function o(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={time:Date.now(),count:-1,deck:d(Array(52).fill(!1).map((function(t,e){return{value:t,place:e}}))),board:Array(52).fill()},e.updateTime=function(){e.setState({time:Date.now()})},e.increment=function(){var t=e.state.count+1,r=[].concat(e.state.deck),n=f(f({},r[t]),{},{value:!0});r[t]=n;var o=[].concat(e.state.board);o[n.place]=n,e.setState({count:e.state.count+1,deck:r,board:o})},e.cards=function(t,e){return t.map((function(t,r){if(t){var o=t.place%13+2;11==o?o="jack":12==o?o="queen":13==o?o="king":14==o&&(o="ace");var i="assets/svg-cards/"+o+"_of_"+e+".svg";return Object(n.h)("img",{class:p.a.card,src:i})}return Object(n.h)("p",{class:p.a.aligner+" "+p.a.card,key:r},Object(n.h)("span",{class:p.a.alignedItem},"-"))}))},e}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=o.prototype;return i.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},i.componentWillUnmount=function(){clearInterval(this.timer)},i.renderRow=function(){var t=this.cards(this.state.board.slice(0,13),"hearts"),e=this.cards(this.state.board.slice(13,26),"spades"),r=this.cards(this.state.board.slice(26,39),"diamonds"),o=this.cards(this.state.board.slice(39,52),"clubs");return Object(n.h)("div",null,Object(n.h)("div",{class:p.a.row},t),Object(n.h)("div",{class:p.a.row},e),Object(n.h)("div",{class:p.a.row},r),Object(n.h)("div",{class:p.a.row},o))},i.render=function(t,e){var r=e.count;return Object(n.h)("div",{class:p.a.profile},Object(n.h)("p",null,Object(n.h)("button",{onClick:this.increment},"Draw Card")," ","Cards drawn: ",r+1,"."),this.renderRow())},o}(n.Component);var y=function(t){var e,r;function i(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).handleRoute=function(t){e.currentUrl=t.url},e}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i.prototype.render=function(){return Object(n.h)("div",{id:"app"},Object(n.h)(u,null),Object(n.h)(o.Router,{onChange:this.handleRoute},Object(n.h)(b,{path:"/preact-pokeno/"})))},i}(n.Component);e.default=y},Y3FI:function(t,e,r){"use strict";r.r(e),r.d(e,"subscribers",(function(){return h})),r.d(e,"getCurrentUrl",(function(){return b})),r.d(e,"route",(function(){return y})),r.d(e,"Router",(function(){return k})),r.d(e,"Route",(function(){return C})),r.d(e,"Link",(function(){return w})),r.d(e,"exec",(function(){return a}));var n=r("HteQ"),o={};function i(t,e){for(var r in e)t[r]=e[r];return t}function a(t,e,r){var n,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),c={};if(a&&a[1])for(var u=a[1].split("&"),p=0;p<u.length;p++){var l=u[p].split("=");c[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=s(t.replace(i,"")),e=s(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),b=(e[h].match(/[+*?]+$/)||o)[0]||"",y=~b.indexOf("+"),v=~b.indexOf("*"),g=t[h]||"";if(!g&&!v&&(b.indexOf("?")<0||y)){n=!1;break}if(c[d]=decodeURIComponent(g),y||v){c[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){n=!1;break}return(!0===r.default||!1!==n)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,s(e).map(p).join(""));var e}(t),t.props}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function p(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var l=null,f=[],h=[],d={};function b(){var t;return""+((t=l&&l.location?l.location:l&&l.getCurrentLocation?l.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function y(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),l&&l[e]?l[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,r=0;r<f.length;r++)!0===f[r].routeTo(t)&&(e=!0);for(var n=h.length;n--;)h[n](t);return e}function g(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),r=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return y(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return g(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(g(e))return O(t)}}while(e=e.parentNode)}}var _=!1;var k=function(t){function e(e){t.call(this,e),e.history&&(l=e.history),this.state={url:e.url||b()},_||("function"==typeof addEventListener&&(l||addEventListener("popstate",(function(){v(b())})),addEventListener("click",j)),_=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(n.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;l&&(this.unlisten=l.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,r){return t.filter(u).sort(c).map((function(t){var o=a(e,t.props.path,t.props);if(o){if(!1!==r){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(n.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var r=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(n.toChildArray)(r),i,!0),c=a[0]||null,u=this.previousUrl;return i!==u&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:u,active:a,current:c})),c},e}(n.Component),w=function(t){return Object(n.createElement)("a",i({onClick:m},t))},C=function(t){return Object(n.createElement)(t.component,t)};k.subscribers=h,k.getCurrentUrl=b,k.route=y,k.Router=k,k.Route=C,k.Link=w,k.exec=a,e.default=k},"ox/y":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=r("HteQ"),i=r("Y3FI");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=e.Match=function(t){function e(){var r,n;a(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=n=c(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},c(n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),r=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:r,matches:!1!==(0,i.exec)(r,t.path,{})})},e}(o.Component),s=function(t){var e=t.activeClassName,r=t.path,a=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["activeClassName","path"]);return(0,o.h)(u,{path:r||a.href},(function(t){var r=t.matches;return(0,o.h)(i.Link,n({},a,{class:[a.class||a.className,r&&e].filter(Boolean).join(" ")}))}))};e.Link=s,e.default=u,u.Link=s},ySiU:function(t,e,r){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=ssr-bundle.js.map