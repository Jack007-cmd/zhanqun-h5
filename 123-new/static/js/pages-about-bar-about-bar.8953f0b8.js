(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-bar-about-bar"],{4996:function(t,e,i){"use strict";var a=i("95d6"),n=i.n(a);n.a},"6c50":function(t,e,i){"use strict";i.r(e);var a=i("7942"),n=i("f6c4");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4996");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"679f040a",null,!1,a["a"],o);e["default"]=c.exports},7942:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs"},[i("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},t._l(t.sortArr,(function(e,a){return i("v-uni-view",{key:e.key,staticClass:"uni-tab-item",attrs:{id:e.key,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"line-h"}),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.aboutList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0}},[t._l(e.data,(function(t,e){return i("v-uni-view",{key:t.code},[i("public-item",{attrs:{aboutItem:t}})],1)})),i("v-uni-view",{staticStyle:{height:"45px"}})],2)],1)})),1)],1)},r=[]},"941f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-679f040a]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.tabs[data-v-679f040a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.scroll-h[data-v-679f040a]{width:%?750?%;height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;white-space:nowrap\r\n  /* flex-wrap: nowrap; */\r\n  /* border-color: #cccccc;\r\n\t\tborder-bottom-style: solid;\r\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-679f040a]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-679f040a]{display:inline-block;background-color:#fff;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-679f040a]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap}.uni-tab-item-title-active[data-v-679f040a]{color:#e12121}.swiper-box[data-v-679f040a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}.swiper-item[data-v-679f040a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.scroll-v[data-v-679f040a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?750?%}',""]),t.exports=e},"95d6":function(t,e,i){var a=i("941f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7ade07d0",a,!0,{sourceMap:!1,shadowMode:!1})},de1d:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4160"),i("c975"),i("a434"),i("d3b7"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b77a")),r=100,o=3,s={components:{PublicItem:n.default},name:"about-bar",data:function(){return{sortArr:[],aboutList:[],tabIndex:0,cacheTab:[],scrollInto:""}},onLoad:function(t){var e=this;this.sortArr=uni.getStorageSync("sort"),t.index&&(this.tabIndex=t.index),setTimeout((function(){e.sortArr.forEach((function(t){e.aboutList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})})),e.getList(e.tabIndex)}),350)},methods:{getList:function(t){var e=this.aboutList[t];e.data=e.data.concat(this.sortArr[t].list)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.aboutList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.aboutList[this.tabIndex].data.length>r){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto="tab"+this.sortArr[t].key.toString(),this.cacheTab.length>o){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.aboutList[t].data.length=0,this.aboutList[t].loadingText="加载更多..."}}};e.default=s},f6c4:function(t,e,i){"use strict";i.r(e);var a=i("de1d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);