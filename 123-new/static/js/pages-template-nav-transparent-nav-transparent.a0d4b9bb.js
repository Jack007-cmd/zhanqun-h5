(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-transparent-nav-transparent"],{"1d1e":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(i){this.showSwiper="swiper"===i.detail.value}}};e.default=n},"202a":function(i,e,t){"use strict";t.r(e);var n=t("1d1e"),a=t.n(n);for(var u in n)"default"!==u&&function(i){t.d(e,i,(function(){return n[i]}))}(u);e["default"]=a.a},"57a7":function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,"uni-image[data-v-30eeab9e],\nuni-swiper[data-v-30eeab9e],\n.img-view[data-v-30eeab9e]{width:%?750?%;height:%?500?%}.page-section-title[data-v-30eeab9e]{margin-top:%?50?%}",""]),i.exports=e},"6f38":function(i,e,t){"use strict";t.r(e);var n=t("97b8"),a=t("202a");for(var u in a)"default"!==u&&function(i){t.d(e,i,(function(){return a[i]}))}(u);t("76c5");var s,r=t("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30eeab9e",null,!1,n["a"],s);e["default"]=c.exports},"76c5":function(i,e,t){"use strict";var n=t("db6a"),a=t.n(n);a.a},"97b8":function(i,e,t){"use strict";var n;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return n}));var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"page"},[i.showSwiper?i._e():t("v-uni-view",{staticClass:"img-view"},[t("v-uni-image",{attrs:{src:i.imgUrls[0]}})],1),i.showSwiper?t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,e){return t("v-uni-swiper-item",{key:e},[t("v-uni-image",{attrs:{src:i}})],1)})),1):i._e(),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),t("v-uni-view",[i._v("在微信小程序端，导航栏始终为不透明样式。")])],1),t("v-uni-view",{staticClass:"uni-title uni-common-mt"},[i._v("图片类型")])],1),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.radioChange.apply(void 0,arguments)}}},i._l(i.items,(function(e,n){return t("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[t("v-uni-view",[i._v(i._s(e.name))]),t("v-uni-view",[t("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)})),1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},u=[]},db6a:function(i,e,t){var n=t("57a7");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("4ac1ed60",n,!0,{sourceMap:!1,shadowMode:!1})}}]);