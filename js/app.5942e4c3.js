(function(a){function t(t){for(var s,i,r=t[0],o=t[1],c=t[2],v=0,p=[];v<r.length;v++)i=r[v],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],s=!0,r=1;r<e.length;r++){var o=e[r];0!==l[o]&&(s=!1)}s&&(n.splice(t--,1),a=i(i.s=e[0]))}return a}var s={},l={app:0},n=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=s,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)i.d(e,s,function(t){return a[t]}.bind(null,s));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=o;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";e("85ec")},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[a.showAlert?e("section",{staticClass:"section"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-half-desktop"},[e("div",{staticClass:"notification is-danger"},[e("button",{staticClass:"delete",on:{click:function(t){a.showAlert=!1}}}),a._v(" A strong random number generator is not available. ")])])])]):a._e(),e("section",{staticClass:"section"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-two-thirds-tablet is-half-desktop"},[e("div",{staticClass:"field"},[e("div",{staticClass:"box has-text-centered",attrs:{id:"password"}},[a._v(a._s(a.password))])]),e("div",{staticClass:"field"},[e("div",{staticClass:"buttons"},[e("a",{staticClass:"button is-primary",on:{click:function(t){return a.regeneratePassword()}}},[a._v(" Regenerate ")]),e("a",{staticClass:"button",on:{click:function(t){return a.copyTextToClipboard(a.password)}}},[a._v(" Copy to clipboard ")])])]),e("div",{staticClass:"control"},[e("label",{staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"func"},domProps:{checked:a.isPhoneme},on:{click:function(t){return a.toggleFunc(!0)}}}),a._v(" Phonemic ")]),e("label",{staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"func"},domProps:{checked:!a.isPhoneme},on:{click:function(t){return a.toggleFunc(!1)}}}),a._v(" Random ")])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Length")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.length,expression:"length"}],ref:"length",staticClass:"input",attrs:{type:"number",id:"length"},domProps:{value:a.length},on:{click:function(t){return a.$refs.length.focus()},blur:function(t){return a.validateLength()},input:function(t){t.target.composing||(a.length=t.target.value)}}})])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.flags.uppers,expression:"flags.uppers"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.flags.uppers)?a._i(a.flags.uppers,null)>-1:a.flags.uppers},on:{change:[function(t){var e=a.flags.uppers,s=t.target,l=!!s.checked;if(Array.isArray(e)){var n=null,i=a._i(e,n);s.checked?i<0&&a.$set(a.flags,"uppers",e.concat([n])):i>-1&&a.$set(a.flags,"uppers",e.slice(0,i).concat(e.slice(i+1)))}else a.$set(a.flags,"uppers",l)},function(t){return a.regeneratePassword()}]}}),a._v(" A-Z ")])])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.flags.digits,expression:"flags.digits"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.flags.digits)?a._i(a.flags.digits,null)>-1:a.flags.digits},on:{change:[function(t){var e=a.flags.digits,s=t.target,l=!!s.checked;if(Array.isArray(e)){var n=null,i=a._i(e,n);s.checked?i<0&&a.$set(a.flags,"digits",e.concat([n])):i>-1&&a.$set(a.flags,"digits",e.slice(0,i).concat(e.slice(i+1)))}else a.$set(a.flags,"digits",l)},function(t){return a.regeneratePassword()}]}}),a._v(" 0-9 ")])])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.flags.symbols,expression:"flags.symbols"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.flags.symbols)?a._i(a.flags.symbols,null)>-1:a.flags.symbols},on:{change:[function(t){var e=a.flags.symbols,s=t.target,l=!!s.checked;if(Array.isArray(e)){var n=null,i=a._i(e,n);s.checked?i<0&&a.$set(a.flags,"symbols",e.concat([n])):i>-1&&a.$set(a.flags,"symbols",e.slice(0,i).concat(e.slice(i+1)))}else a.$set(a.flags,"symbols",l)},function(t){return a.regeneratePassword()}]}}),a._v(" !@#$%^&* ")])])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.flags.ambiguous,expression:"flags.ambiguous"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.flags.ambiguous)?a._i(a.flags.ambiguous,null)>-1:a.flags.ambiguous},on:{change:[function(t){var e=a.flags.ambiguous,s=t.target,l=!!s.checked;if(Array.isArray(e)){var n=null,i=a._i(e,n);s.checked?i<0&&a.$set(a.flags,"ambiguous",e.concat([n])):i>-1&&a.$set(a.flags,"ambiguous",e.slice(0,i).concat(e.slice(i+1)))}else a.$set(a.flags,"ambiguous",l)},function(t){return a.regeneratePassword()}]}}),a._v(" Avoid ambiguous ")])])])])])]),a._m(0)])},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content has-text-centered"},[e("p",[a._v(" Created with "),e("a",{attrs:{href:"https://vuejs.org/"}},[a._v("Vue.js")]),a._v(" and "),e("a",{attrs:{href:"https://bulma.io/"}},[a._v("Bulma")]),a._v(". Source code available at "),e("a",{attrs:{href:"https://github.com/m66n/mushroom-dick"}},[a._v("GitHub")]),a._v(". ")]),e("p",[a._v(" © 2019 Michael Chapman ")])])])])}];e("3846"),e("a481"),e("9c29");function i(a){return Math.floor(Math.random()*a)}function r(a){return window.crypto.getRandomValues(new Uint32Array(1))[0]%a}var o=window.crypto?r:i,c="abcdefghijklmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",v="0123456789",p="!@#$%^&*",d="B8G6I1l!0OQDS5Z2",g=[{val:"a",valCap:"A"},{val:"ae",valCap:"Ae",dipthong:!0},{val:"ah",valCap:"Ah",dipthong:!0},{val:"ai",valCap:"Ai",dipthong:!0},{val:"e",valCap:"E"},{val:"ee",valCap:"Ee",dipthong:!0},{val:"ei",valCap:"Ei",dipthong:!0},{val:"i",valCap:"I"},{val:"ie",valCap:"Ie",dipthong:!0},{val:"o",valCap:"O"},{val:"oh",valCap:"Oh",dipthong:!0},{val:"oo",valCap:"Oo",dipthong:!0},{val:"u",valCap:"U"}],f=[{val:"b",valCap:"B"},{val:"c",valCap:"C"},{val:"ch",valCap:"Ch",dipthong:!0},{val:"d",valCap:"F"},{val:"f",valCap:"F"},{val:"g",valCap:"G"},{val:"gh",valCap:"Gh",dipthong:!0,notFirst:!0},{val:"h",valCap:"H"},{val:"j",valCap:"J"},{val:"k",valCap:"K"},{val:"l",valCap:"L"},{val:"m",valCap:"M"},{val:"n",valCap:"N"},{val:"ng",valCap:"Ng",dipthong:!0,notFirst:!0},{val:"p",valCap:"P"},{val:"ph",valCap:"Ph",dipthong:!0},{val:"qu",valCap:"Qu",dipthong:!0},{val:"r",valCap:"R"},{val:"s",valCap:"S"},{val:"sh",valCap:"Sh",dipthong:!0},{val:"t",valCap:"T"},{val:"th",valCap:"Th",dipthong:!0},{val:"v",valCap:"V"},{val:"w",valCap:"W"},{val:"x",valCap:"X"},{val:"y",valCap:"Y"},{val:"z",valCap:"Z"}];function h(a,t){for(var e=0;e<a.length;++e)if(-1!==t.indexOf(a[e]))return!0;return!1}var m={uppers:!0,digits:!0,symbols:!1,ambiguous:!1};function C(a,t){var e="",s=o(2)?g:f,l=null;while(e.length<a){var n=JSON.parse(JSON.stringify(s[o(s.length)]));if((0!==e.length||!n.notFirst)&&((l!==g||s!==g||!n.dipthong)&&!(a<e.length+n.val.length))){var i=n.val;if(t.uppers&&(0===e.length||s===f)&&o(10)<2&&(i=n.valCap),!t.ambiguous||!h(i,d)){if(e+=i,e.length===a)break;if(t.digits&&o(10)<3){var r=v[o(v.length)];while(t.ambiguous&&h(r,d))r=v[o(v.length)];e+=r,l=null,s=o(2)?g:f}else{if(t.symbols&&o(10)<2){var c=p[o(p.length)];while(t.ambiguous&&h(c,d))c=p[o(p.length)];e+=c}s===f?(l=s,s=g):l===g||n.dipthong||o(10)<7?(l=s,s=f):(l=s,s=g)}}}}return t.uppers&&!h(e,u)||t.digits&&!h(e,v)||t.symbols&&!h(e,p)?C(a,t):e}function b(a,t){var e="",s=c;if(t.uppers&&(s+=u),t.digits&&(s+=v),t.symbols&&(s+=p),t.ambiguous)for(var l=0;l<d.length;++l)s=s.replace(d[l],"");while(e.length<a){var n=o(s.length);e+=s[n]}return t.uppers&&!h(e,u)||t.digits&&!h(e,v)||t.symbols&&!h(e,p)?b(a,t):e}function y(a){var t=document.createElement("textarea");t.value=a,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}var w=12,_=6,k=256,x=b,P=m,A={data:function(){return{showAlert:!!Window.crypto,length:w,func:x,password:x(w,P),flags:P}},computed:{isPhoneme:function(){return this.func===C}},methods:{copyTextToClipboard:y,regeneratePassword:function(){this.password=this.func(this.length,this.flags)},toggleFunc:function(a){this.func=a?C:b,this.regeneratePassword()},validateLength:function(){var a=parseInt(this.length,10);isNaN(a)?a=w:a<_?a=_:a>k&&(a=k),this.length=a,this.regeneratePassword()}}},O=A,$=(e("034f"),e("2877")),j=Object($["a"])(O,l,n,!1,null,null,null),N=j.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(a){return a(N)}}).$mount("#app")},"85ec":function(a,t,e){}});
//# sourceMappingURL=app.5942e4c3.js.map