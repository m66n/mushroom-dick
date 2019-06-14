(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)i=o[d],n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.showAlert?s("section",{staticClass:"section"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half-desktop"},[s("div",{staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:function(t){e.showAlert=!1}}}),e._v("\n          A strong random number generator is not available.\n        ")])])])]):e._e(),s("section",{staticClass:"section"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-two-thirds-tablet is-half-desktop"},[s("div",{staticClass:"field"},[s("div",{staticClass:"box has-text-centered",attrs:{id:"password"}},[e._v(e._s(e.password))])]),s("div",{staticClass:"field"},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-primary",on:{click:function(t){return e.regeneratePassword()}}},[e._v("\n              Regenerate\n            ")]),s("a",{staticClass:"button",on:{click:function(t){return e.copyTextToClipboard(e.password)}}},[e._v("\n              Copy to clipboard\n            ")])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Length")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.length,expression:"length"}],ref:"length",staticClass:"input",attrs:{type:"number",id:"length",min:"4",max:"64"},domProps:{value:e.length},on:{click:function(t){return e.$refs.length.focus()},blur:function(t){return e.validateLength()},input:function(t){t.target.composing||(e.length=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.flags.uppers,expression:"flags.uppers"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.flags.uppers)?e._i(e.flags.uppers,null)>-1:e.flags.uppers},on:{change:[function(t){var s=e.flags.uppers,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(e.flags,"uppers",s.concat([r])):i>-1&&e.$set(e.flags,"uppers",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.flags,"uppers",n)},function(t){return e.regeneratePassword()}]}}),e._v("\n              A-Z\n            ")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.flags.digits,expression:"flags.digits"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.flags.digits)?e._i(e.flags.digits,null)>-1:e.flags.digits},on:{change:[function(t){var s=e.flags.digits,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(e.flags,"digits",s.concat([r])):i>-1&&e.$set(e.flags,"digits",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.flags,"digits",n)},function(t){return e.regeneratePassword()}]}}),e._v("\n              0-9\n            ")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.flags.symbols,expression:"flags.symbols"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.flags.symbols)?e._i(e.flags.symbols,null)>-1:e.flags.symbols},on:{change:[function(t){var s=e.flags.symbols,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(e.flags,"symbols",s.concat([r])):i>-1&&e.$set(e.flags,"symbols",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.flags,"symbols",n)},function(t){return e.regeneratePassword()}]}}),e._v("\n              !@#$%^&*\n            ")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.flags.ambiguous,expression:"flags.ambiguous"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.flags.ambiguous)?e._i(e.flags.ambiguous,null)>-1:e.flags.ambiguous},on:{change:[function(t){var s=e.flags.ambiguous,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(e.flags,"ambiguous",s.concat([r])):i>-1&&e.$set(e.flags,"ambiguous",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.flags,"ambiguous",n)},function(t){return e.regeneratePassword()}]}}),e._v("\n              Avoid ambiguous\n            ")])])])])])])])},r=[];s("3846"),s("a481"),s("9c29");function i(e){return Math.floor(Math.random()*e)}function o(e){return window.crypto.getRandomValues(new Uint32Array(1))[0]%e}var l=window.crypto?o:i,c="abcdefghijklmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",d="0123456789",f="!@#$%^&*",g="B8G6I1l!0OQDS5Z2";function p(e,t){for(var s=0;s<e.length;++s)if(-1!==t.indexOf(e[s]))return!0;return!1}var v={uppers:!0,digits:!0,symbols:!1,ambiguous:!1};function m(e,t){var s="",a=c;if(t.uppers&&(a+=u),t.digits&&(a+=d),t.symbols&&(a+=f),t.ambiguous)for(var n=0;n<g.length;++n)a=a.replace(g[n],"");while(s.length<e){var r=l(a.length);s+=a[r]}return t.uppers&&!p(u,s)||t.digits&&!p(d,s)||t.symbols&&!p(f,s)?m(e,t):s}function h(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}var b=12,y=4,w=64,C=v,k={data:function(){return{showAlert:!!Window.crypto,length:b,password:m(b,C),flags:C}},methods:{copyTextToClipboard:h,regeneratePassword:function(){this.password=m(this.length,this.flags)},validateLength:function(){var e=parseInt(this.length,10);isNaN(e)?e=b:e<y?e=y:e>w&&(e=w),this.length=e,this.regeneratePassword()}}},x=k,_=(s("034f"),s("2877")),A=Object(_["a"])(x,n,r,!1,null,null,null),P=A.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"64a9":function(e,t,s){}});
//# sourceMappingURL=app.6156f411.js.map