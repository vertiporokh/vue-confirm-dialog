(function(t){function e(e){for(var n,s,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-confirm-dialog/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},"051a":function(t,e,i){},"1a5b":function(t,e,i){"use strict";var n=i("051a"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("vue-confirm"),i("hr"),i("vue-confirm-password")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("h3",[t._v("normal confirm")]),i("ul",t._l(t.list,(function(e,n){return i("li",{key:e.id},[i("span",{staticClass:"item"},[t._v("\n        "+t._s(e.text)+"\n        "),i("button",{on:{click:function(i){return i.stopPropagation(),t.showConfirm(e)}}},[t._v("Delete")])])])})),0)])},r=[],c={name:"VueConfirm",data:function(){return{list:[{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",id:1},{text:"Adipisci explicabo, odio ullam totam odit tempore optio distinctio vel aliquam officia nam et ex suscipit ratione accusantium minima veniam ipsum laborum.",id:2},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo, odio ullam totam odit tempore optio distinctio vel aliquam officia nam et ex suscipit ratione accusantium minima veniam ipsum laborum.",id:3}]}},methods:{showConfirm:function(t){var e=this;this.$vueConfirm.confirm({title:"Confirm",message:"Are you sure? ".concat(t.text," will be remove?"),auth:!1,button:{no:"No",yes:"Yes"}},(function(i){if(1==i)for(var n=0;n<e.list.length;n++)if(e.list[n].id==t.id){e.list.splice(n,1),e.$vueConfirm.close();break}}))}}},u=c,l=(i("d97e"),i("2877")),d=Object(l["a"])(u,s,r,!1,null,"34709874",null),f=d.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("h3",[t._v("with password confirm")]),i("ul",t._l(t.list,(function(e,n){return i("li",{key:e.id},[i("span",{staticClass:"item"},[t._v("\n        "+t._s(e.text)+"\n        "),i("button",{on:{click:function(i){return i.stopPropagation(),t.showConfirm(e)}}},[t._v("Delete")])])])})),0)])},p=[],v={name:"VueConfirmPassword",data:function(){return{list:[{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",id:4},{text:"Adipisci explicabo, odio ullam totam odit tempore optio distinctio vel aliquam officia nam et ex suscipit ratione accusantium minima veniam ipsum laborum.",id:5},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo, odio ullam totam odit tempore optio distinctio vel aliquam officia nam et ex suscipit ratione accusantium minima veniam ipsum laborum.",id:6}]}},methods:{showConfirm:function(t){var e=this;this.$vueConfirm.confirm({title:"Confirm",message:"Are you sure? ".concat(t.text," will be remove?"),auth:!0,button:{no:"No",yes:"Yes"}},(function(i,n){if(1==i)for(var o=0;o<e.list.length;o++)if(e.list[o].id==t.id){e.list.splice(o,1),e.$vueConfirm.close();break}}))}}},h=v,b=(i("1a5b"),Object(l["a"])(h,m,p,!1,null,"65df43ba",null)),g=b.exports,w={name:"app",components:{VueConfirm:f,VueConfirmPassword:g}},y=w,C=(i("034f"),Object(l["a"])(y,o,a,!1,null,null,null)),_=C.exports,k=(i("8e6e"),i("bd86")),x=(i("456d"),i("ac6a"),i("96cf"),i("3b8d")),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-confirm-dialog",{attrs:{isShow:t.state.isShow,isLoading:t.state.isLoading,isAuth:t.dialog.auth,title:t.dialog.title,message:t.dialog.message,button:t.dialog.button}})},j=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"vc-overlay",attrs:{id:"vueConfirm"}},[i("transition",{attrs:{name:"zoom"}},[t.isShow?i("div",{ref:"vueConfirm",staticClass:"vc-container",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeDialog(e)}}},[i("span",{staticClass:"vc-text-grid"},[i("h4",{staticClass:"vc-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"vc-text"},[t._v(t._s(t.message))]),t.isAuth?i("span",[i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"vc-input",attrs:{name:"vc-password",placeholder:"Password",type:"password"},domProps:{value:t.password},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.saveChanges(e):null},input:function(e){e.target.composing||(t.password=e.target.value)}}})]):t._e()]),i("div",{staticClass:"vc-btn-grid",class:{isMono:!t.button.no||!t.button.yes}},[t.button.no?i("button",{staticClass:"vc-btn left",attrs:{disabled:t.isLoading||t.isConfirmLoading},on:{click:function(e){return e.stopPropagation(),t._emit("close")}}},[t._v(t._s(t.button.no))]):t._e(),t.button.yes?i("button",{staticClass:"vc-btn",attrs:{disabled:!!(t.isLoading||t.isConfirmLoading||t.isAuth)&&!t.password},on:{click:function(e){return e.stopPropagation(),t.saveChanges()}}},[t._v(t._s(t.button.yes))]):t._e()])]):t._e()])],1)])},S=[],$={name:"VueConfirm",props:{isShow:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},isAuth:{type:Boolean,default:!1},title:{type:String,default:"Confirm"},message:{type:String,default:"Are you sure?"},button:{type:Object,default:function(){return{no:"Cancel",yes:"Save"}}}},data:function(){return{password:null,isConfirmLoading:!1}},methods:{_emit:function(t,e){this.$root.$emit(t,e)},documentClick:function(t){try{var e=this.$refs.vueConfirm,i=t.target;e===i||e.contains(i)||this._emit("close")}catch(n){}},saveChanges:function(){this.isAuth&&this.password&&this._emit("setPassword",this.password),this._emit("save",!0),this.password=null},closeDialog:function(){this._emit("close")}},beforeDestroy:function(){document.removeEventListener("click",this.documentClick),document.removeEventListener("touchstart",this.documentClick)},beforeMount:function(){document.addEventListener("click",this.documentClick),document.addEventListener("touchstart",this.documentClick)}},L=$,E=(i("8ab1"),Object(l["a"])(L,P,S,!1,null,"7491af00",null)),A=E.exports,D={components:{VueConfirmDialog:A},computed:{state:function(){return this.$root.state},dialog:function(){return this.$root.dialog}}},N=D,M=Object(l["a"])(N,O,j,!1,null,null,null),V=M.exports;function I(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function q(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(i,!0).forEach((function(e){Object(k["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):I(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var R={data:{state:{isShow:!1,isConfirmed:!1,isLoading:!1,isNoClicked:!1,time:0,interval:null,password:null},dialog:{auth:!1,title:"Confirm",message:"Message",button:{no:"No",yes:"Yes"}},confirm:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e,i){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.state.isShow=!0,Object.keys(e).forEach((function(t){(e[t]||n.dialog[t])&&(n.dialog[t]=e[t])})),t.next=4,this.callback().then((function(t){"function"==typeof i&&i(t,n.state.password)}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),callback:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.state.interval=setInterval((function(){e.state.time+=1,e.state.isConfirmed&&(clearInterval(e.state.interval),t(!0),e.resetState()),e.state.isNoClicked&&(clearInterval(e.state.interval),t(!1),e.close(),e.resetState()),e.state.time>120&&(clearInterval(e.state.interval),t(!1),e.close(),e.resetState())}),500)})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),resetState:function(){this.state={isConfirmed:!1,isLoading:!1,isShow:!1,isNoClicked:!1,time:0,password:null}},close:function(){this.state.isNoClicked=!0},_close:function(){clearInterval(this.state.interval),this.resetState()},updateConfirm:function(){this.state.isConfirmed=!0,this.state.isLoading=!0},isConfirm:function(){return this.state.isConfirmed},setPassword:function(t){t&&(this.state.password=t)}}},B={install:function(t,e){var i=q({},R,{},e);n["a"].component("vue-confirm-dialog",A),n["a"].directive("focus",{inserted:function(t){t.focus()}});var o=new n["a"]({data:{state:i.data.state,dialog:i.data.dialog},render:function(t){return t(V)}});o.$mount(document.body.appendChild(document.createElement("div"))),o.callback=i.data.callback,o.isConfirm=i.data.isConfirm,o.resetState=i.data.resetState,o.confirm=i.data.confirm,o.close=i.data._close,o.$on("setPassword",i.data.setPassword),o.$on("close",i.data.close),o.$on("save",i.data.updateConfirm),t.prototype.$vueConfirm=o}};n["a"].use(B),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,i){},"7b81":function(t,e,i){},"8ab1":function(t,e,i){"use strict";var n=i("c98a"),o=i.n(n);o.a},c98a:function(t,e,i){},d97e:function(t,e,i){"use strict";var n=i("7b81"),o=i.n(n);o.a}});
//# sourceMappingURL=app.403ce7bb.js.map