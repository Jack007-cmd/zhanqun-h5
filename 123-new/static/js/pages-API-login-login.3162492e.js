(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-login-login"],{"501e":function(n,t,e){"use strict";var i=e("4ea4");e("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("5530")),o=e("2f62"),u={data:function(){return{title:"login",providerList:[]}},computed:(0,a.default)({},(0,o.mapState)(["hasLogin"])),onLoad:function(){var n=this;uni.getProvider({service:"oauth",success:function(t){n.providerList=t.provider.map((function(n){var t="";switch(n){case"weixin":t="微信登录";break;case"qq":t="QQ登录";break;case"sinaweibo":t="新浪微博登录";break;case"xiaomi":t="小米登录";break;case"alipay":t="支付宝登录";break;case"baidu":t="百度登录";break;case"toutiao":t="头条登录";break;case"apple":t="苹果登录";break}return{name:t,id:n}}))},fail:function(n){console.log("获取登录通道失败",n)}})},methods:(0,a.default)((0,a.default)({},(0,o.mapMutations)(["login"])),{},{tologin:function(n){var t=this;uni.login({provider:n.id,success:function(e){console.log("login success:",e),t.login(n.id)},fail:function(n){console.log("login fail:",n)}})}})};t.default=u},ac96:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"uni-button[data-v-ed331092]{background-color:#e12121;color:#fff}",""]),n.exports=t},b19e:function(n,t,e){"use strict";var i=e("ed7f"),a=e.n(i);a.a},bd92:function(n,t,e){"use strict";e.r(t);var i=e("501e"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},e355:function(n,t,e){"use strict";e.r(t);var i=e("fd44"),a=e("bd92");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("b19e");var u,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"ed331092",null,!1,i["a"],u);t["default"]=c.exports},ed7f:function(n,t,e){var i=e("ac96");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("67b4c6e6",i,!0,{sourceMap:!1,shadowMode:!1})},fd44:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!0===n.hasLogin?[e("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("已登录")]),e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[e("v-uni-text",[n._v("每个账号仅需登录 1 次，\\n后续每次进入页面即可自动拉取用户信息。")])],1)]:n._e(),!1===n.hasLogin?[e("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("未登录")]),e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n._v("请点击按钮登录")])]:n._e()],2),e("v-uni-view",{staticClass:"uni-btn-v uni- uni-common-mt"},n._l(n.providerList,(function(t,i){return e("v-uni-button",{key:i,staticClass:"page-body-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.tologin(t)}}},[n._v(n._s(t.name))])})),1)],1)],1)},o=[]}}]);