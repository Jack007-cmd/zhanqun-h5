(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-modal-modal"],{"0a8b":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.modalTap.apply(void 0,arguments)}}},[t._v("有标题的modal")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.noTitlemodalTap.apply(void 0,arguments)}}},[t._v("无标题的modal")])],1)],1)],1)},o=[]},"5e8b":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(t){uni.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(t){uni.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}};n.default=a},"667e":function(t,n,e){"use strict";e.r(n);var a=e("5e8b"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},c68e:function(t,n,e){"use strict";e.r(n);var a=e("0a8b"),i=e("667e");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var u,l=e("f0c5"),c=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports}}]);