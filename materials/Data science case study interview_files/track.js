(function(){(function(){var k=/%20/g,b={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"};function P(e,n){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function v(){var e={};if(location.search!=="")for(var n=location.search.replace("?","").split("&"),t=0;t<n.length;t++){var i=n[t].split("="),o=i[0],r=i[1];!r||(o=decodeURIComponent(o).replace(/[^a-zA-Z0-9-_]/gi,""),r=decodeURIComponent(r),o in e?(Array.isArray(e[o])||(e[o]=[e[o]]),e[o].push(r)):e[o]=r)}return e}function c(e){var n=document.cookie;if(n.length>0){var t=n.indexOf(e+"=");if(t!=-1){t=t+e.length+1;var i=n.indexOf(";",t);return i==-1&&(i=n.length),decodeURIComponent(n.substring(t,i))}}return""}function u(e,n,t){var i=document.location.host.toLowerCase().split(":")[0],o=i.split("."),r=[];if(o.length==1){var a=new Date;a.setDate(a.getDate()+t),document.cookie=e+"="+escape(n)+(t==null?"":";expires="+a.toUTCString())+";path=/"}else for(var p=o.length-1;p>=0;p--){r.push(o[p]);var S="."+r.slice().reverse().join("."),a=new Date;if(a.setDate(a.getDate()+t),document.cookie=e+"="+escape(n)+(t==null?"":";expires="+a.toUTCString())+";domain="+S+";path=/",c(e)==n)break}}function h(e){u(e,"",-1)}function A(e){return s(e)==="function"}function s(e){return e==null?String(e):b[Object.prototype.toString.call(e)]||"object"}function l(e){typeof console!="undefined"&&console.warn("_cio: "+e)}function C(e,n){var t=[],i=function(r,a){a=A(a)?a():a,t[t.length]=encodeURIComponent(r)+"="+encodeURIComponent(a)};for(var o in e)e.hasOwnProperty(o)&&d(o,e[o],i,n);return t.join("&").replace(k,"+")}function d(e,n,t,i){if(i!=null&&i.useArrayParams&&s(n)==="array")for(var o=0;o<n.length;o++)d(e+"[]",n[o]==null?"":n[o],t,i);else if(n!=null&&typeof n=="object")for(var r in n)n.hasOwnProperty(r)&&d(e+"["+r+"]",n[r]==null?"":n[r],t,i);else t(e,n)}function E(){var e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function N(){var e=E();return u(_cio.cookieNamespace+"anonid",e,365),e}function I(e){try{return JSON.parse(decodeURIComponent(e))}catch(n){return e}}function y(){var e=c("ajs_anonymous_id");return e&&e!==""?I(e):c(_cio.cookieNamespace+"anonid")}function g(){return c(_cio.cookieNamespace+"id")}function L(e,n,t){var i=document.getElementById("cio-tracker");if(i){n.site_id=i.getAttribute("data-site-id"),n.timestamp=new Date().getTime();var o={useArrayParams:!1};return i.getAttribute("data-use-array-params")==="true"&&(o.useArrayParams=!0),s(t)==="object"&&s(t.useArrayParams)==="boolean"&&(o.useArrayParams=t.useArrayParams),_cio._trackUrl+"/events/"+e+".gif?"+C(n,o)}}function T(){if(!c(_cio.cookieNamespace)){if(u(_cio.cookieNamespace,"test",1),!c(_cio.cookieNamespace))return!1;u(_cio.cookieNamespace,"",-1)}return!0}function U(e,n,t){n.c=g(),n.c?n.s=y():(n.s=y(),!n.s&&T()&&e!=="identify"&&(n.s=N()));var i=new Image;i.src=L(e,n,t),_cio.images.push(i)}function f(e,n,t){_cio.pageHasLoaded?U(e,n,t):setTimeout(function(){f(e,n,t)},50)}function _(e,n){if(_cio._pluginsLoaded())switch(e){case"page":for(var t=0;t<_cio._plugins.length;t++)_cio._plugins[t].page(n.url);break;case"identify":for(var t=0;t<_cio._plugins.length;t++)_cio._plugins[t].identify(n.id);break;default:return}else setTimeout(function(){_(e,n)},50)}function B(e){var n=document.createElement("script"),t=document.getElementsByTagName("script")[0];n.async=!0,n.src=e.path,n.onerror=function(){var i=document.getElementById("cio-tracker");i.removeAttribute("data-use-"+e.name),l("failed to load "+e.name+" plugin.")},t.parentNode.insertBefore(n,t)}function R(){return{_eventTarget:new EventTarget,on:function(e,n,t){this._eventTarget.addEventListener(e,n,t)},off:function(e,n){this._eventTarget.removeEventListener(e,n)},emit:function(e,n){this._eventTarget.dispatchEvent(new CustomEvent(e,{detail:n}))}}}if(s(_cio)=="array"){var w=_cio.slice(0);_cio={_version:"26c65650",_trackUrl:"https://track.customer.io",_availablePlugins:[{name:"in-app",path:"https://assets.customer.io/assets/in-app.js"}],_plugins:[],_findCustomer:g,_warn:l,_eventBus:R("_cio_event_bus"),images:[],pageHasLoaded:!1,cookieNamespace:"_cio",load:function(){_cio.pageHasLoaded=!0;for(var e=document.getElementById("cio-tracker"),n=0;n<_cio._availablePlugins.length;n++)e.getAttribute("data-use-"+_cio._availablePlugins[n].name)==="true"&&B(_cio._availablePlugins[n])},_pluginsLoaded:function(){for(var e=document.getElementById("cio-tracker"),n=0,t=0;t<_cio._availablePlugins.length;t++)e.getAttribute("data-use-"+_cio._availablePlugins[t].name)==="true"&&n++;for(var t=0;t<_cio._plugins.length;t++)if(!_cio._plugins[t].initialized())return!1;return _cio._plugins.length==n},notifyPluginLoaded:function(e){_cio._plugins.push(new e(_cio))},push:function(e){var n=e.shift();_cio[n].apply(this,e)},identify:function(e,n){var t=e.id||e.id_secure;if(typeof t=="undefined"||t===null||t.length===0){l("id can't be empty. This identify call will not be tracked.");return}u(_cio.cookieNamespace+"id",t,365),f("identify",{user:e},n||{}),_("identify",{id:t})},sidentify:function(e){e._secure=!0,_cio.identify(e)},track:function(e,n,t){f("event",{name:e,data:n||{}},t||{})},page:function(e,n,t){var i=P(n||{},v());e=e||document.location.href,i.width=i.width||window.innerWidth,i.height=i.height||window.innerHeight,i.referrer==null&&document.referrer&&document.referrer!=""&&(i.referrer=document.referrer),f("page",{name:e,data:i},t||{}),_("page",{url:e})},cookie:function(e){_cio.cookieNamespace=e},reset:function(){_cio.images=[],h(_cio.cookieNamespace+"id"),h(_cio.cookieNamespace+"anonid");for(var e=0;e<_cio._plugins.length;e++)_cio._plugins[e].initialized()&&_cio._plugins[e].reset()},on:function(e,n,t){_cio._eventBus.on(e,n,t)},off:function(e,n){_cio._eventBus.off(e,n)}},function(){var e=g();if(!e){var n=v();if("_cio_id"in n&&n._cio_id){var t=n._cio_id;Array.isArray(t)&&(t=t[t.length-1]),t&&_cio.identify({id:"cio_"+t})}}var i=document.getElementById("cio-tracker");i.getAttribute("data-auto-track-page")!=="false"&&_cio.page(document.location.href)}();for(var m=0;m<w.length;m++)_cio.push(w[m]);document.readyState==="complete"?_cio.load():window.addEventListener?window.addEventListener("load",_cio.load,!1):window.attachEvent?window.attachEvent("onload",_cio.load):_cio.load()}})();})();
