(globalThis.webpackChunk_wigwam_app=globalThis.webpackChunk_wigwam_app||[]).push([[134],{17187:e=>{"use strict";var t,r="object"===typeof Reflect?Reflect:null,n=r&&"function"===typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"===typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(r,n){function s(r){e.removeListener(t,i),n(r)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",s),r([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"===typeof e.on&&v(e,"error",t,r)}(e,s,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function h(e,t,r,n){var s,i,o;if(a(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),o=i[t]),void 0===o)o=i[t]=r,++e._eventsCount;else if("function"===typeof o?o=i[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),(s=l(e))>0&&o.length>s&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,console&&console.warn}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},s=p.bind(n);return s.listener=r,n.wrapFn=s,s}function c(e,t,r){var n=e._events;if(void 0===n)return[];var s=n[t];return void 0===s?[]:"function"===typeof s?r?[s.listener||s]:[s]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(s):E(s,s.length)}function f(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"===typeof r)return 1;if(void 0!==r)return r.length}return 0}function E(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function v(e,t,r,n){if("function"===typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function s(i){n.once&&e.removeEventListener(t,s),r(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return l(this)},i.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var s="error"===e,i=this._events;if(void 0!==i)s=s&&void 0===i.error;else if(!s)return!1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=i[e];if(void 0===l)return!1;if("function"===typeof l)n(l,this,t);else{var h=l.length,p=E(l,h);for(r=0;r<h;++r)n(p[r],this,t)}return!0},i.prototype.addListener=function(e,t){return h(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return h(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,u(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,u(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,n,s,i,o;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!==typeof r){for(s=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){o=r[i].listener,s=i;break}if(s<0)return this;0===s?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,s),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var s,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(s=i[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},i.prototype.listeners=function(e){return c(this,e,!0)},i.prototype.rawListeners=function(e){return c(this,e,!1)},i.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},i.prototype.listenerCount=f,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},39593:(e,t,r)=>{"use strict";const n=r(34411),s=Symbol("max"),i=Symbol("length"),o=Symbol("lengthCalculator"),a=Symbol("allowStale"),l=Symbol("maxAge"),h=Symbol("dispose"),p=Symbol("noDisposeOnSet"),u=Symbol("lruList"),c=Symbol("cache"),f=Symbol("updateAgeOnGet"),E=()=>1;const v=(e,t,r)=>{const n=e[c].get(t);if(n){const t=n.value;if(m(e,t)){if(d(e,n),!e[a])return}else r&&(e[f]&&(n.value.now=Date.now()),e[u].unshiftNode(n));return t.value}},m=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[l]&&r>e[l]},g=e=>{if(e[i]>e[s])for(let t=e[u].tail;e[i]>e[s]&&null!==t;){const r=t.prev;d(e,t),t=r}},d=(e,t)=>{if(t){const r=t.value;e[h]&&e[h](r.key,r.value),e[i]-=r.length,e[c].delete(r.key),e[u].removeNode(t)}};class ${constructor(e,t,r,n,s){this.key=e,this.value=t,this.length=r,this.now=n,this.maxAge=s||0}}const R=(e,t,r,n)=>{let s=r.value;m(e,s)&&(d(e,r),e[a]||(s=void 0)),s&&t.call(n,s.value,s.key,e)};e.exports=class{constructor(e){if("number"===typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!==typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[s]=e.max||1/0;const t=e.length||E;if(this[o]="function"!==typeof t?E:t,this[a]=e.stale||!1,e.maxAge&&"number"!==typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[h]=e.dispose,this[p]=e.noDisposeOnSet||!1,this[f]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!==typeof e||e<0)throw new TypeError("max must be a non-negative number");this[s]=e||1/0,g(this)}get max(){return this[s]}set allowStale(e){this[a]=!!e}get allowStale(){return this[a]}set maxAge(e){if("number"!==typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,g(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!==typeof e&&(e=E),e!==this[o]&&(this[o]=e,this[i]=0,this[u].forEach((e=>{e.length=this[o](e.value,e.key),this[i]+=e.length}))),g(this)}get lengthCalculator(){return this[o]}get length(){return this[i]}get itemCount(){return this[u].length}rforEach(e,t){t=t||this;for(let r=this[u].tail;null!==r;){const n=r.prev;R(this,e,r,t),r=n}}forEach(e,t){t=t||this;for(let r=this[u].head;null!==r;){const n=r.next;R(this,e,r,t),r=n}}keys(){return this[u].toArray().map((e=>e.key))}values(){return this[u].toArray().map((e=>e.value))}reset(){this[h]&&this[u]&&this[u].length&&this[u].forEach((e=>this[h](e.key,e.value))),this[c]=new Map,this[u]=new n,this[i]=0}dump(){return this[u].map((e=>!m(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[u]}set(e,t,r){if((r=r||this[l])&&"number"!==typeof r)throw new TypeError("maxAge must be a number");const n=r?Date.now():0,a=this[o](t,e);if(this[c].has(e)){if(a>this[s])return d(this,this[c].get(e)),!1;const o=this[c].get(e).value;return this[h]&&(this[p]||this[h](e,o.value)),o.now=n,o.maxAge=r,o.value=t,this[i]+=a-o.length,o.length=a,this.get(e),g(this),!0}const f=new $(e,t,a,n,r);return f.length>this[s]?(this[h]&&this[h](e,t),!1):(this[i]+=f.length,this[u].unshift(f),this[c].set(e,this[u].head),g(this),!0)}has(e){if(!this[c].has(e))return!1;const t=this[c].get(e).value;return!m(this,t)}get(e){return v(this,e,!0)}peek(e){return v(this,e,!1)}pop(){const e=this[u].tail;return e?(d(this,e),e.value):null}del(e){d(this,this[c].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const n=e[r],s=n.e||0;if(0===s)this.set(n.k,n.v);else{const e=s-t;e>0&&this.set(n.k,n.v,e)}}}prune(){this[c].forEach(((e,t)=>v(this,t,!1)))}}},22257:(e,t,r)=>{const n=Symbol("SemVer ANY");class s{static get ANY(){return n}constructor(e,t){if(t=i(t),e instanceof s){if(e.loose===!!t.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),h("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,h("comp",this)}parse(e){const t=this.options.loose?o[a.COMPARATORLOOSE]:o[a.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new p(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(h("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"===typeof e)try{e=new p(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):(!(t=i(t)).includePrerelease||"<0.0.0-0"!==this.value&&"<0.0.0-0"!==e.value)&&(!(!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&(!(!this.operator.startsWith(">")||!e.operator.startsWith(">"))||(!(!this.operator.startsWith("<")||!e.operator.startsWith("<"))||(!(this.semver.version!==e.semver.version||!this.operator.includes("=")||!e.operator.includes("="))||(!!(l(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<"))||!!(l(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))))))}}e.exports=s;const i=r(12893),{safeRe:o,t:a}=r(55765),l=r(7539),h=r(74225),p=r(26376),u=r(66902)},66902:(e,t,r)=>{class n{constructor(e,t){if(t=i(t),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!m(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const e of this.set)if(1===e.length&&g(e[0])){this.set=[e];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=((this.options.includePrerelease&&E)|(this.options.loose&&v))+":"+e,r=s.get(t);if(r)return r;const n=this.options.loose,i=n?h[p.HYPHENRANGELOOSE]:h[p.HYPHENRANGE];e=e.replace(i,x(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(h[p.COMPARATORTRIM],u),a("comparator trim",e),e=e.replace(h[p.TILDETRIM],c),a("tilde trim",e),e=e.replace(h[p.CARETTRIM],f),a("caret trim",e);let l=e.split(" ").map((e=>$(e,this.options))).join(" ").split(/\s+/).map((e=>T(e,this.options)));n&&(l=l.filter((e=>(a("loose invalid filter",e,this.options),!!e.match(h[p.COMPARATORLOOSE]))))),a("range list",l);const g=new Map,d=l.map((e=>new o(e,this.options)));for(const e of d){if(m(e))return[e];g.set(e.value,e)}g.size>1&&g.has("")&&g.delete("");const R=[...g.values()];return s.set(t,R),R}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some((r=>d(r,t)&&e.set.some((e=>d(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"===typeof e)try{e=new l(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(S(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const s=new(r(39593))({max:1e3}),i=r(12893),o=r(22257),a=r(74225),l=r(26376),{safeRe:h,t:p,comparatorTrimReplace:u,tildeTrimReplace:c,caretTrimReplace:f}=r(55765),{FLAG_INCLUDE_PRERELEASE:E,FLAG_LOOSE:v}=r(83295),m=e=>"<0.0.0-0"===e.value,g=e=>""===e.value,d=(e,t)=>{let r=!0;const n=e.slice();let s=n.pop();for(;r&&n.length;)r=n.every((e=>s.intersects(e,t))),s=n.pop();return r},$=(e,t)=>(a("comp",e,t),e=y(e,t),a("caret",e),e=I(e,t),a("tildes",e),e=N(e,t),a("xrange",e),e=A(e,t),a("stars",e),e),R=e=>!e||"x"===e.toLowerCase()||"*"===e,I=(e,t)=>e.trim().split(/\s+/).map((e=>L(e,t))).join(" "),L=(e,t)=>{const r=t.loose?h[p.TILDELOOSE]:h[p.TILDE];return e.replace(r,((t,r,n,s,i)=>{let o;return a("tilde",e,t,r,n,s,i),R(r)?o="":R(n)?o=`>=${r}.0.0 <${+r+1}.0.0-0`:R(s)?o=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(a("replaceTilde pr",i),o=`>=${r}.${n}.${s}-${i} <${r}.${+n+1}.0-0`):o=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`,a("tilde return",o),o}))},y=(e,t)=>e.trim().split(/\s+/).map((e=>w(e,t))).join(" "),w=(e,t)=>{a("caret",e,t);const r=t.loose?h[p.CARETLOOSE]:h[p.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,((t,r,s,i,o)=>{let l;return a("caret",e,t,r,s,i,o),R(r)?l="":R(s)?l=`>=${r}.0.0${n} <${+r+1}.0.0-0`:R(i)?l="0"===r?`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.0${n} <${+r+1}.0.0-0`:o?(a("replaceCaret pr",o),l="0"===r?"0"===s?`>=${r}.${s}.${i}-${o} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}-${o} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i}-${o} <${+r+1}.0.0-0`):(a("no pr"),l="0"===r?"0"===s?`>=${r}.${s}.${i}${n} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i} <${+r+1}.0.0-0`),a("caret return",l),l}))},N=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map((e=>O(e,t))).join(" ")),O=(e,t)=>{e=e.trim();const r=t.loose?h[p.XRANGELOOSE]:h[p.XRANGE];return e.replace(r,((r,n,s,i,o,l)=>{a("xRange",e,r,n,s,i,o,l);const h=R(s),p=h||R(i),u=p||R(o),c=u;return"="===n&&c&&(n=""),l=t.includePrerelease?"-0":"",h?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&c?(p&&(i=0),o=0,">"===n?(n=">=",p?(s=+s+1,i=0,o=0):(i=+i+1,o=0)):"<="===n&&(n="<",p?s=+s+1:i=+i+1),"<"===n&&(l="-0"),r=`${n+s}.${i}.${o}${l}`):p?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),a("xRange return",r),r}))},A=(e,t)=>(a("replaceStars",e,t),e.trim().replace(h[p.STAR],"")),T=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(h[t.includePrerelease?p.GTE0PRE:p.GTE0],"")),x=e=>(t,r,n,s,i,o,a,l,h,p,u,c,f)=>`${r=R(n)?"":R(s)?`>=${n}.0.0${e?"-0":""}`:R(i)?`>=${n}.${s}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=R(h)?"":R(p)?`<${+h+1}.0.0-0`:R(u)?`<${h}.${+p+1}.0-0`:c?`<=${h}.${p}.${u}-${c}`:e?`<${h}.${p}.${+u+1}-0`:`<=${l}`}`.trim(),S=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},26376:(e,t,r)=>{const n=r(74225),{MAX_LENGTH:s,MAX_SAFE_INTEGER:i}=r(83295),{safeRe:o,t:a}=r(55765),l=r(12893),{compareIdentifiers:h}=r(86742);class p{constructor(e,t){if(t=l(t),e instanceof p){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!==typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>s)throw new TypeError(`version is longer than ${s} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof p)){if("string"===typeof e&&e===this.version)return 0;e=new p(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof p||(e=new p(e,this.options)),h(this.major,e.major)||h(this.minor,e.minor)||h(this.patch,e.patch)}comparePre(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],s=e.prerelease[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return h(r,s)}while(++t)}compareBuild(e){e instanceof p||(e=new p(e,this.options));let t=0;do{const r=this.build[t],s=e.build[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return h(r,s)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let n=this.prerelease.length;for(;--n>=0;)"number"===typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);if(-1===n){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let n=[t,e];!1===r&&(n=[t]),0===h(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=p},13507:(e,t,r)=>{const n=r(33959);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},7539:(e,t,r)=>{const n=r(58718),s=r(81194),i=r(71312),o=r(25903),a=r(21544),l=r(12056);e.exports=(e,t,r,h)=>{switch(t){case"===":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e===r;case"!==":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,h);case"!=":return s(e,r,h);case">":return i(e,r,h);case">=":return o(e,r,h);case"<":return a(e,r,h);case"<=":return l(e,r,h);default:throw new TypeError(`Invalid operator: ${t}`)}}},99038:(e,t,r)=>{const n=r(26376),s=r(33959),{safeRe:i,t:o}=r(55765);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"===typeof e&&(e=String(e)),"string"!==typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=i[o.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),i[o.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;i[o.COERCERTL].lastIndex=-1}else r=e.match(i[o.COERCE]);return null===r?null:s(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},88880:(e,t,r)=>{const n=r(26376);e.exports=(e,t,r)=>{const s=new n(e,r),i=new n(t,r);return s.compare(i)||s.compareBuild(i)}},27880:(e,t,r)=>{const n=r(46269);e.exports=(e,t)=>n(e,t,!0)},46269:(e,t,r)=>{const n=r(26376);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},62378:(e,t,r)=>{const n=r(33959);e.exports=(e,t)=>{const r=n(e,null,!0),s=n(t,null,!0),i=r.compare(s);if(0===i)return null;const o=i>0,a=o?r:s,l=o?s:r,h=!!a.prerelease.length;if(!!l.prerelease.length&&!h)return l.patch||l.minor?a.patch?"patch":a.minor?"minor":"major":"major";const p=h?"pre":"";return r.major!==s.major?p+"major":r.minor!==s.minor?p+"minor":r.patch!==s.patch?p+"patch":"prerelease"}},58718:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>0===n(e,t,r)},71312:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)>0},25903:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)>=0},20253:(e,t,r)=>{const n=r(26376);e.exports=(e,t,r,s,i)=>{"string"===typeof r&&(i=s,s=r,r=void 0);try{return new n(e instanceof n?e.version:e,r).inc(t,s,i).version}catch(e){return null}}},21544:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)<0},12056:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)<=0},38679:(e,t,r)=>{const n=r(26376);e.exports=(e,t)=>new n(e,t).major},87789:(e,t,r)=>{const n=r(26376);e.exports=(e,t)=>new n(e,t).minor},81194:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>0!==n(e,t,r)},33959:(e,t,r)=>{const n=r(26376);e.exports=(e,t,r=!1)=>{if(e instanceof n)return e;try{return new n(e,t)}catch(e){if(!r)return null;throw e}}},52358:(e,t,r)=>{const n=r(26376);e.exports=(e,t)=>new n(e,t).patch},57559:(e,t,r)=>{const n=r(33959);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},79795:(e,t,r)=>{const n=r(46269);e.exports=(e,t,r)=>n(t,e,r)},63657:(e,t,r)=>{const n=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>n(r,e,t)))},45712:(e,t,r)=>{const n=r(66902);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},21100:(e,t,r)=>{const n=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>n(e,r,t)))},76397:(e,t,r)=>{const n=r(33959);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},81249:(e,t,r)=>{const n=r(55765),s=r(83295),i=r(26376),o=r(86742),a=r(33959),l=r(76397),h=r(13507),p=r(20253),u=r(62378),c=r(38679),f=r(87789),E=r(52358),v=r(57559),m=r(46269),g=r(79795),d=r(27880),$=r(88880),R=r(21100),I=r(63657),L=r(71312),y=r(21544),w=r(58718),N=r(81194),O=r(25903),A=r(12056),T=r(7539),x=r(99038),S=r(22257),b=r(66902),P=r(45712),C=r(51042),_=r(85775),D=r(71657),j=r(95316),M=r(89042),G=r(6826),F=r(97606),X=r(50032),U=r(82937),k=r(17908),V=r(50799);e.exports={parse:a,valid:l,clean:h,inc:p,diff:u,major:c,minor:f,patch:E,prerelease:v,compare:m,rcompare:g,compareLoose:d,compareBuild:$,sort:R,rsort:I,gt:L,lt:y,eq:w,neq:N,gte:O,lte:A,cmp:T,coerce:x,Comparator:S,Range:b,satisfies:P,toComparators:C,maxSatisfying:_,minSatisfying:D,minVersion:j,validRange:M,outside:G,gtr:F,ltr:X,intersects:U,simplifyRange:k,subset:V,SemVer:i,re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:s.SEMVER_SPEC_VERSION,RELEASE_TYPES:s.RELEASE_TYPES,compareIdentifiers:o.compareIdentifiers,rcompareIdentifiers:o.rcompareIdentifiers}},83295:e=>{const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},74225:e=>{const t="object"===typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>{}:()=>{};e.exports=t},86742:e=>{const t=/^[0-9]+$/,r=(e,r)=>{const n=t.test(e),s=t.test(r);return n&&s&&(e=+e,r=+r),e===r?0:n&&!s?-1:s&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},12893:e=>{const t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!==typeof e?t:e:r},55765:(e,t,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:i}=r(83295),o=r(74225),a=(t=e.exports={}).re=[],l=t.safeRe=[],h=t.src=[],p=t.t={};let u=0;const c="[a-zA-Z0-9-]",f=[["\\s",1],["\\d",i],[c,s]],E=(e,t,r)=>{const n=(e=>{for(const[t,r]of f)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),s=u++;o(e,s,t),p[e]=s,h[s]=t,a[s]=new RegExp(t,r?"g":void 0),l[s]=new RegExp(n,r?"g":void 0)};E("NUMERICIDENTIFIER","0|[1-9]\\d*"),E("NUMERICIDENTIFIERLOOSE","\\d+"),E("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${c}*`),E("MAINVERSION",`(${h[p.NUMERICIDENTIFIER]})\\.(${h[p.NUMERICIDENTIFIER]})\\.(${h[p.NUMERICIDENTIFIER]})`),E("MAINVERSIONLOOSE",`(${h[p.NUMERICIDENTIFIERLOOSE]})\\.(${h[p.NUMERICIDENTIFIERLOOSE]})\\.(${h[p.NUMERICIDENTIFIERLOOSE]})`),E("PRERELEASEIDENTIFIER",`(?:${h[p.NUMERICIDENTIFIER]}|${h[p.NONNUMERICIDENTIFIER]})`),E("PRERELEASEIDENTIFIERLOOSE",`(?:${h[p.NUMERICIDENTIFIERLOOSE]}|${h[p.NONNUMERICIDENTIFIER]})`),E("PRERELEASE",`(?:-(${h[p.PRERELEASEIDENTIFIER]}(?:\\.${h[p.PRERELEASEIDENTIFIER]})*))`),E("PRERELEASELOOSE",`(?:-?(${h[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[p.PRERELEASEIDENTIFIERLOOSE]})*))`),E("BUILDIDENTIFIER",`${c}+`),E("BUILD",`(?:\\+(${h[p.BUILDIDENTIFIER]}(?:\\.${h[p.BUILDIDENTIFIER]})*))`),E("FULLPLAIN",`v?${h[p.MAINVERSION]}${h[p.PRERELEASE]}?${h[p.BUILD]}?`),E("FULL",`^${h[p.FULLPLAIN]}$`),E("LOOSEPLAIN",`[v=\\s]*${h[p.MAINVERSIONLOOSE]}${h[p.PRERELEASELOOSE]}?${h[p.BUILD]}?`),E("LOOSE",`^${h[p.LOOSEPLAIN]}$`),E("GTLT","((?:<|>)?=?)"),E("XRANGEIDENTIFIERLOOSE",`${h[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),E("XRANGEIDENTIFIER",`${h[p.NUMERICIDENTIFIER]}|x|X|\\*`),E("XRANGEPLAIN",`[v=\\s]*(${h[p.XRANGEIDENTIFIER]})(?:\\.(${h[p.XRANGEIDENTIFIER]})(?:\\.(${h[p.XRANGEIDENTIFIER]})(?:${h[p.PRERELEASE]})?${h[p.BUILD]}?)?)?`),E("XRANGEPLAINLOOSE",`[v=\\s]*(${h[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[p.XRANGEIDENTIFIERLOOSE]})(?:${h[p.PRERELEASELOOSE]})?${h[p.BUILD]}?)?)?`),E("XRANGE",`^${h[p.GTLT]}\\s*${h[p.XRANGEPLAIN]}$`),E("XRANGELOOSE",`^${h[p.GTLT]}\\s*${h[p.XRANGEPLAINLOOSE]}$`),E("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),E("COERCERTL",h[p.COERCE],!0),E("LONETILDE","(?:~>?)"),E("TILDETRIM",`(\\s*)${h[p.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",E("TILDE",`^${h[p.LONETILDE]}${h[p.XRANGEPLAIN]}$`),E("TILDELOOSE",`^${h[p.LONETILDE]}${h[p.XRANGEPLAINLOOSE]}$`),E("LONECARET","(?:\\^)"),E("CARETTRIM",`(\\s*)${h[p.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",E("CARET",`^${h[p.LONECARET]}${h[p.XRANGEPLAIN]}$`),E("CARETLOOSE",`^${h[p.LONECARET]}${h[p.XRANGEPLAINLOOSE]}$`),E("COMPARATORLOOSE",`^${h[p.GTLT]}\\s*(${h[p.LOOSEPLAIN]})$|^$`),E("COMPARATOR",`^${h[p.GTLT]}\\s*(${h[p.FULLPLAIN]})$|^$`),E("COMPARATORTRIM",`(\\s*)${h[p.GTLT]}\\s*(${h[p.LOOSEPLAIN]}|${h[p.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",E("HYPHENRANGE",`^\\s*(${h[p.XRANGEPLAIN]})\\s+-\\s+(${h[p.XRANGEPLAIN]})\\s*$`),E("HYPHENRANGELOOSE",`^\\s*(${h[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[p.XRANGEPLAINLOOSE]})\\s*$`),E("STAR","(<|>)?=?\\s*\\*"),E("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),E("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},97606:(e,t,r)=>{const n=r(6826);e.exports=(e,t,r)=>n(e,t,">",r)},82937:(e,t,r)=>{const n=r(66902);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t,r))},50032:(e,t,r)=>{const n=r(6826);e.exports=(e,t,r)=>n(e,t,"<",r)},85775:(e,t,r)=>{const n=r(26376),s=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(i&&-1!==o.compare(e)||(i=e,o=new n(i,r)))})),i}},71657:(e,t,r)=>{const n=r(26376),s=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(i&&1!==o.compare(e)||(i=e,o=new n(i,r)))})),i}},95316:(e,t,r)=>{const n=r(26376),s=r(66902),i=r(71312);e.exports=(e,t)=>{e=new s(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){const s=e.set[t];let o=null;s.forEach((e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":o&&!i(t,o)||(o=t);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!o||r&&!i(r,o)||(r=o)}return r&&e.test(r)?r:null}},6826:(e,t,r)=>{const n=r(26376),s=r(22257),{ANY:i}=s,o=r(66902),a=r(45712),l=r(71312),h=r(21544),p=r(12056),u=r(25903);e.exports=(e,t,r,c)=>{let f,E,v,m,g;switch(e=new n(e,c),t=new o(t,c),r){case">":f=l,E=p,v=h,m=">",g=">=";break;case"<":f=h,E=u,v=l,m="<",g="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,c))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let o=null,a=null;if(n.forEach((e=>{e.semver===i&&(e=new s(">=0.0.0")),o=o||e,a=a||e,f(e.semver,o.semver,c)?o=e:v(e.semver,a.semver,c)&&(a=e)})),o.operator===m||o.operator===g)return!1;if((!a.operator||a.operator===m)&&E(e,a.semver))return!1;if(a.operator===g&&v(e,a.semver))return!1}return!0}},17908:(e,t,r)=>{const n=r(45712),s=r(46269);e.exports=(e,t,r)=>{const i=[];let o=null,a=null;const l=e.sort(((e,t)=>s(e,t,r)));for(const e of l){n(e,t,r)?(a=e,o||(o=e)):(a&&i.push([o,a]),a=null,o=null)}o&&i.push([o,null]);const h=[];for(const[e,t]of i)e===t?h.push(e):t||e!==l[0]?t?e===l[0]?h.push(`<=${t}`):h.push(`${e} - ${t}`):h.push(`>=${e}`):h.push("*");const p=h.join(" || "),u="string"===typeof t.raw?t.raw:String(t);return p.length<u.length?p:t}},50799:(e,t,r)=>{const n=r(66902),s=r(22257),{ANY:i}=s,o=r(45712),a=r(46269),l=[new s(">=0.0.0-0")],h=[new s(">=0.0.0")],p=(e,t,r)=>{if(e===t)return!0;if(1===e.length&&e[0].semver===i){if(1===t.length&&t[0].semver===i)return!0;e=r.includePrerelease?l:h}if(1===t.length&&t[0].semver===i){if(r.includePrerelease)return!0;t=h}const n=new Set;let s,p,f,E,v,m,g;for(const t of e)">"===t.operator||">="===t.operator?s=u(s,t,r):"<"===t.operator||"<="===t.operator?p=c(p,t,r):n.add(t.semver);if(n.size>1)return null;if(s&&p){if(f=a(s.semver,p.semver,r),f>0)return null;if(0===f&&(">="!==s.operator||"<="!==p.operator))return null}for(const e of n){if(s&&!o(e,String(s),r))return null;if(p&&!o(e,String(p),r))return null;for(const n of t)if(!o(e,String(n),r))return!1;return!0}let d=!(!p||r.includePrerelease||!p.semver.prerelease.length)&&p.semver,$=!(!s||r.includePrerelease||!s.semver.prerelease.length)&&s.semver;d&&1===d.prerelease.length&&"<"===p.operator&&0===d.prerelease[0]&&(d=!1);for(const e of t){if(g=g||">"===e.operator||">="===e.operator,m=m||"<"===e.operator||"<="===e.operator,s)if($&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===$.major&&e.semver.minor===$.minor&&e.semver.patch===$.patch&&($=!1),">"===e.operator||">="===e.operator){if(E=u(s,e,r),E===e&&E!==s)return!1}else if(">="===s.operator&&!o(s.semver,String(e),r))return!1;if(p)if(d&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===d.major&&e.semver.minor===d.minor&&e.semver.patch===d.patch&&(d=!1),"<"===e.operator||"<="===e.operator){if(v=c(p,e,r),v===e&&v!==p)return!1}else if("<="===p.operator&&!o(p.semver,String(e),r))return!1;if(!e.operator&&(p||s)&&0!==f)return!1}return!(s&&m&&!p&&0!==f)&&(!(p&&g&&!s&&0!==f)&&(!$&&!d))},u=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},c=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r={})=>{if(e===t)return!0;e=new n(e,r),t=new n(t,r);let s=!1;e:for(const n of e.set){for(const e of t.set){const t=p(n,e,r);if(s=s||null!==t,t)continue e}if(s)return!1}return!0}},51042:(e,t,r)=>{const n=r(66902);e.exports=(e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))},89042:(e,t,r)=>{const n=r(66902);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},49602:e=>{"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},34411:(e,t,r)=>{"use strict";function n(e){var t=this;if(t instanceof n||(t=new n),t.tail=null,t.head=null,t.length=0,e&&"function"===typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,s=arguments.length;r<s;r++)t.push(arguments[r]);return t}function s(e,t,r){var n=t===e.head?new a(r,null,t,e):new a(r,t,t.next,e);return null===n.next&&(e.tail=n),null===n.prev&&(e.head=n),e.length++,n}function i(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function o(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,r,n){if(!(this instanceof a))return new a(e,t,r,n);this.list=n,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=n,n.Node=a,n.create=n,n.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},n.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},n.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},n.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},n.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},n.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},n.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},n.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;null!==r;n++)e.call(t,r.value,n,this),r=r.next},n.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;null!==r;n--)e.call(t,r.value,n,this),r=r.prev},n.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},n.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},n.prototype.map=function(e,t){t=t||this;for(var r=new n,s=this.head;null!==s;)r.push(e.call(t,s.value,this)),s=s.next;return r},n.prototype.mapReverse=function(e,t){t=t||this;for(var r=new n,s=this.tail;null!==s;)r.push(e.call(t,s.value,this)),s=s.prev;return r},n.prototype.reduce=function(e,t){var r,n=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");n=this.head.next,r=this.head.value}for(var s=0;null!==n;s++)r=e(r,n.value,s),n=n.next;return r},n.prototype.reduceReverse=function(e,t){var r,n=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");n=this.tail.prev,r=this.tail.value}for(var s=this.length-1;null!==n;s--)r=e(r,n.value,s),n=n.prev;return r},n.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},n.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},n.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=0,i=this.head;null!==i&&s<e;s++)i=i.next;for(;null!==i&&s<t;s++,i=i.next)r.push(i.value);return r},n.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=this.length,i=this.tail;null!==i&&s>t;s--)i=i.prev;for(;null!==i&&s>e;s--,i=i.prev)r.push(i.value);return r},n.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var n=0,i=this.head;null!==i&&n<e;n++)i=i.next;var o=[];for(n=0;i&&n<t;n++)o.push(i.value),i=this.removeNode(i);null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(n=0;n<r.length;n++)i=s(this,i,r[n]);return o},n.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var n=r.prev;r.prev=r.next,r.next=n}return this.head=t,this.tail=e,this};try{r(49602)(n)}catch(e){}}}]);