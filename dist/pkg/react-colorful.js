import { r as react } from './common/index-63a1b8e9.js';
import './common/_commonjsHelpers-913f9c4a.js';

function u(){return (u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);}return e}).apply(this,arguments)}function l(e,r){if(null==e)return {};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}var c="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function s(e){var r=react.useRef(e);return react.useEffect(function(){r.current=e;}),react.useCallback(function(e){return r.current&&r.current(e)},[])}var f=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},i=function(e){return "touches"in e},v=function(e,r){var t=e.getBoundingClientRect(),n=i(r)?r.touches[0]:r;return {left:f((n.pageX-(t.left+window.pageXOffset))/t.width),top:f((n.pageY-(t.top+window.pageYOffset))/t.height)}},h=react.memo(function(r){var t=r.onMove,f=r.onKey,h=l(r,["onMove","onKey"]),m=react.useRef(null),d=react.useRef(!1),g=react.useState(!1),b=g[0],p=g[1],E=s(t),C=s(f),N=react.useCallback(function(e){e.preventDefault(),(i(e)?e.touches.length>0:e.buttons>0)&&m.current?E(v(m.current,e)):p(!1);},[E]),H=react.useCallback(function(e){var r=e.nativeEvent;r.preventDefault(),function(e){return !(d.current&&!i(e)||(d.current||(d.current=i(e)),0))}(r)&&(E(v(m.current,r)),p(!0));},[E]),M=react.useCallback(function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),C({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}));},[C]),_=react.useCallback(function(){return p(!1)},[]),w=react.useCallback(function(e){var r=e?window.addEventListener:window.removeEventListener;r(d.current?"touchmove":"mousemove",N),r(d.current?"touchend":"mouseup",_);},[N,_]);return c(function(){return w(b),function(){b&&w(!1);}},[b,w]),react.createElement("div",u({},h,{className:"react-colorful__interactive",ref:m,onTouchStart:H,onMouseDown:H,onKeyDown:M,tabIndex:0,role:"slider"}))}),m=function(e){return e.filter(Boolean).join(" ")},d=function(r){var t=r.color,n=r.left,o=r.top,a=void 0===o?.5:o,u=m(["react-colorful__pointer",r.className]);return react.createElement("div",{className:u,style:{top:100*a+"%",left:100*n+"%"}},react.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},g=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},b=function(e){return "#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},N=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return {h:g(e.h),s:g(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:g(o/2),a:g(n,2)}},H=function(e){var r=N(e);return "hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},_=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),u=n*(1-t),l=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),s=a%6;return {r:g(255*[n,l,u,u,c,n][s]),g:g(255*[c,n,n,l,u,u][s]),b:g(255*[u,u,c,n,n,l][s]),a:g(o,2)}},O=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},I=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),u=a-Math.min(r,t,n),l=u?a===r?(t-n)/u:a===t?2+(n-r)/u:4+(r-t)/u:0;return {h:g(60*(l<0?l+6:l)),s:g(a?u/a*100:0),v:g(a/255*100),a:o}},k=react.memo(function(r){var t=r.hue,n=r.onChange,o=m(["react-colorful__hue",r.className]);return react.createElement("div",{className:o},react.createElement(h,{onMove:function(e){n({h:360*e.left});},onKey:function(e){n({h:f(t+360*e.left,0,360)});},"aria-label":"Hue","aria-valuetext":g(t)},react.createElement(d,{className:"react-colorful__hue-pointer",left:t/360,color:H({h:t,s:100,v:100,a:1})})))}),B=react.memo(function(r){var t=r.hsva,n=r.onChange,o={backgroundColor:H({h:t.h,s:100,v:100,a:1})};return react.createElement("div",{className:"react-colorful__saturation",style:o},react.createElement(h,{onMove:function(e){n({s:100*e.left,v:100-100*e.top});},onKey:function(e){n({s:f(t.s+100*e.left,0,100),v:f(t.v-100*e.top,0,100)});},"aria-label":"Color","aria-valuetext":"Saturation "+g(t.s)+"%, Brightness "+g(t.v)+"%"},react.createElement(d,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:H(t)})))}),K=function(e,r){if(e===r)return !0;for(var t in e)if(e[t]!==r[t])return !1;return !0};function A(e,r,u){var l=s(u),c=react.useState(function(){return e.toHsva(r)}),f=c[0],i=c[1],v=react.useRef({color:r,hsva:f});react.useEffect(function(){if(!e.equal(r,v.current.color)){var t=e.toHsva(r);v.current={hsva:t,color:r},i(t);}},[r,e]),react.useEffect(function(){var r;K(f,v.current.hsva)||e.equal(r=e.fromHsva(f),v.current.color)||(v.current={hsva:f,color:r},l(r));},[f,e,l]);var h=react.useCallback(function(e){i(function(r){return Object.assign({},r,e)});},[]);return [f,h]}var L=function(r){var t=r.className,n=r.colorModel,o=r.color,a=A(n,void 0===o?n.defaultColor:o,r.onChange),u=a[0],l=a[1],c=m(["react-colorful",t]);return react.createElement("div",{className:c},react.createElement(B,{hsva:u,onChange:l}),react.createElement(k,{hue:u.h,onChange:l,className:"react-colorful__last-control"}))},F={defaultColor:"000",toHsva:function(e){return I(b(e))},fromHsva:function(e){return t=(r=_(e)).g,n=r.b,"#"+O(r.r)+O(t)+O(n);var r,t,n;},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||K(b(e),b(r))}},S=function(r){return react.createElement(L,u({},r,{colorModel:F}))};

export { S as HexColorPicker };