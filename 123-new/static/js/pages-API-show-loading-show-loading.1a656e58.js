(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-show-loading-show-loading"],{"4b4a":function(n,t,i){"use strict";i.r(t);var a=i("4fef"),e=i("ec2b");for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);var u,d=i("f0c5"),c=Object(d["a"])(e["default"],a["b"],a["c"],!1,null,"7a7fd2ee",null,!1,a["a"],u);t["default"]=c.exports},"4fef":function(n,t,i){"use strict";var a;i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-load",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.showLoading.apply(void 0,arguments)}}},[n._v("显示 loading 提示框")]),i("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideLoading.apply(void 0,arguments)}}},[n._v("隐藏 loading 提示框")])],1)],1)],1)},o=[]},ec2b:function(n,t,i){"use strict";i.r(t);var a=i("f577"),e=i.n(a);for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);t["default"]=e.a},f577:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"loading"}},methods:{showLoading:function(){uni.showLoading({title:"loading"})},hideLoading:function(){uni.hideLoading()}},onUnload:function(){}};t.default=a}}]);