(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-kinds-about-kinds"],{"4ed1":function(t,e,n){"use strict";n.r(e);var i=n("580b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"580b":function(t,e,n){"use strict";n("c975"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"about-kinds",data:function(){return{showDelete:!1,deleteID:null,sortArr:[],active:1,sortArrLength:"",collectionArr:[],collect:!1,regroupArr:[],popupArr:[]}},onLoad:function(){this.sortArr=uni.getStorageSync("sort"),this.sortArrLength=this.getSortArrLength(this.sortArr),this.collectionArr=uni.getStorageSync("my-collection"),this.regroup()},onReady:function(){},methods:{toBar:function(t){uni.navigateTo({url:"/pages/about-bar/about-bar?index="+t})},toDestination:function(t){var e=this.$api.getAboutItemIndex(t.code);if(e>0)if(14!=e)uni.navigateTo({url:"/pages/public/"+t.des+"/"+t.des+"?name="+t.name+"&code="+t.code+"&video_url="+t.url+"&sortKey="+t.sortKey});else{var n=t.des;-1==n.indexOf("http")&&(n="//"+n),"xglhc"==t.code?n+="/h":"amlhc"==t.code&&(n+="/g"),window.open(n)}},changeTab:function(t){this.active=t,1==t?$("#data-source").show():$("#data-source").hide()},getSortArrLength:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]["list"].length;return e},setCollect:function(t){var e=this;e.collectionArr?-1==e.collectionArr.indexOf(t)?e.collectionArr.push(t):e.collectionArr.splice(e.collectionArr.indexOf(t),1):(e.collectionArr=[],e.collectionArr.push(t))},showCollect:function(){this.collect=!0},cancel:function(){this.collect=!1,this.collectionArr=uni.getStorageSync("my-collection")},confirm:function(){uni.setStorageSync("my-collection",this.collectionArr),this.collect=!1,this.regroup()},regroup:function(){var t=this;t.collectionArr=uni.getStorageSync("my-collection"),t.regroupArr=[];for(var e=0;e<t.collectionArr.length;e++)t.setRroupArr(t.collectionArr[e])},setRroupArr:function(t){for(var e=this,n=[],i=0;i<e.sortArr.length;i++)for(var o=0;o<e.sortArr[i]["list"].length;o++)if(t==e.sortArr[i]["list"][o]["code"]&&-1==n.indexOf(e.sortArr[i]["list"][o]["code"]))return n.push(e.sortArr[i]["list"][o]["code"]),void e.regroupArr.push(e.sortArr[i]["list"][o])}}};e.default=i},"7a6b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnJJREFUeNrM2D1ME2EYB/D/Hf2QCi1BEM6QoCEhTCSMulAnPoIDuKHRRRdCNIgJIYSpJix2q5OmLnaQbyifg8albkrsymRChBjaQEMbWkrPawngS+/aXt/32vdNLrl77iO/+3iee+6E37fvgOPRKfKMU6ZvIs+49IzIM45HIIHjDZiF4wmoiuMFqInjAZgTV25gXlw5gQXhygUsGFcOoC5cqYG6caUEFoUrFbBoXCmAVDijgdQ4I4FMcEYBmeGMADLFsQZS4eo/enHT51NEoiFAKlyty4VKpxPX7t3Fra9fINhsTIFUOPvzZ6h6/Ohi2dTcDGltlRmQCmfr7kLN+DgZTKUQnphgAqTCWdrbUefxAIJAxMMK+DjwnRpIhauQJDRMf1ZmKoh4xPMOR9Mz1EmiiqsaHERT8BfMLS05d04ngLS+BsFqJeIxvx8Hbjd1mdHE1b5xQayuRuPqijZSKSHS5gZEh4MIx7e2sP/ipfoJ6fh5pP7darej6ecP4nbJiQT2+h7gZHub2LZhfg7Wjg4iltzZwZ9OZyY5aAq15jOXikQQSmeiLF+etcWCxhU/zK2tl4XY683CpQ4PsdvVrYkrFJg3IaIzswiNjWUj/cswt7WdFeL7TmIfOR7Hbk8v5Fgs9zOb5xbrytbr/f244X5LlA45mYRgMpEbnp5ib+AhEsEg1btYdymJLiwgNPqavJJXccq6/eHhgnC5gEXXuQzy1SiB/H8cTE0htrFJ1c1Qt0zRxUVV5NEnHyLvP1C1W8z6uQxyZOQCeRwIIDw5qfs4JiObzejSsuKT4Rgawt8nT4s6xnkWM8ex7Ki5xaXHPwEGAHBUy6skrwIfAAAAAElFTkSuQmCC"},8332:function(t,e,n){var i=n("ee94");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("67ce1201",i,!0,{sourceMap:!1,shadowMode:!1})},b5f1:function(t,e,n){"use strict";n.r(e);var i=n("cc8a"),o=n("4ed1");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("e487");var c,r=n("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0607a5eb",null,!1,i["a"],c);e["default"]=l.exports},cc8a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.sortArr.length>0?n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"content-nav"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"name",class:{on:1==t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(1)}}},[t._v("所有彩种 ("+t._s(t.sortArrLength)+")")])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"name",class:{on:2==t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(2)}}},[t._v("我的收藏")])],1)],1),t._l(t.sortArr,(function(e,i){return 1==t.active?n("v-uni-view",{key:"a"+i,staticClass:"content-list"},[n("v-uni-view",{staticClass:"content-title"},[t._v(t._s(e.name)),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBar(i)}}},[t._v("")])],1),n("v-uni-view",{staticClass:"content",attrs:{id:"item-pt"+i}},t._l(e.list,(function(e,o){return n("v-uni-view",{key:"b"+o,staticClass:"content-item",attrs:{id:e.code+"-"+i,code:e.code},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDestination(e)}}},[t._v(t._s(e.name))])})),1)],1):t._e()})),2==t.active?n("v-uni-view",{staticClass:"content-collect",style:t.collect?"z-index: 999;":"z-index: 900;"},[n("v-uni-view",{staticClass:"t-list"},[n("v-uni-view",{staticClass:"content"},t._l(t.regroupArr,(function(e,i){return t.collectionArr.indexOf(e.code)>-1?n("v-uni-view",{key:"d"+i,staticClass:"content-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDestination(e)}}},[t._v(t._s(e.name))]):t._e()})),1)],1),t.collect?n("v-uni-view",{staticClass:"u-popup"},[n("v-uni-view",{staticClass:"p-hide",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"p-nav"},t._l(t.sortArr,(function(e,i){return n("v-uni-view",{key:"e"+i,staticClass:"p-list"},[n("v-uni-view",{staticClass:"p-title"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"pt-cont",attrs:{id:"item-rt_"+i}},t._l(e.list,(function(e,i){return n("v-uni-view",{key:"f"+i,staticClass:"pt-item",class:{checked:t.collectionArr.indexOf(e.code)>-1},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setCollect(e.code)}}},[t._v(t._s(e.name))])})),1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"btn-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"btn-l rg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)})),1)],1):t._e(),n("v-uni-view",{staticClass:"set",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCollect.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"font_icon icon-set ico dt-icon"})],1)],1):t._e()],2):t._e()},a=[]},e487:function(t,e,n){"use strict";var i=n("8332"),o=n.n(i);o.a},ee94:function(t,e,n){var i=n("24fb"),o=n("1de5"),a=n("7a6b");e=i(!1);var c=o(a);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container .content-nav[data-v-0607a5eb]{width:100%;height:%?80?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.container .content-nav .item[data-v-0607a5eb]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.container .content-nav .item .name[data-v-0607a5eb]{display:inline-block;line-height:%?80?%;height:100%;font-size:%?28?%;color:#033;box-sizing:border-box}.container .content-nav .on[data-v-0607a5eb]{border-bottom:%?4?% solid #e12021}.container .content-list[data-v-0607a5eb]{margin:0 15px;padding-bottom:3px}.container .content-list .content-title[data-v-0607a5eb]{color:#999;font-size:16px;height:24px;line-height:30px;margin:%?14?% 0 %?14?% %?8?%}.container .content-list .content[data-v-0607a5eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.container .content-list .content .content-item[data-v-0607a5eb]{height:40px;line-height:40px;border:1px solid #dfdfe5;background:#fff;text-align:center;border-radius:5px;width:%?208?%;margin:4px;font-size:%?26?%}.container .content-collect[data-v-0607a5eb]{background:#eee!important;margin-top:%?20?%;left:0;right:0;width:100%;padding-bottom:3px;min-height:calc(100vh - %?168?%)}.container .content-collect .t-list[data-v-0607a5eb]{margin:0 15px;padding-bottom:3px}.container .content-collect .t-list .content[data-v-0607a5eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.container .content-collect .t-list .content .content-item[data-v-0607a5eb]{height:40px;line-height:40px;border:1px solid #dfdfe5;background:#fff;text-align:center;border-radius:5px;width:%?208?%;margin:4px;font-size:%?26?%}.container .content-collect .u-popup[data-v-0607a5eb]{position:fixed;top:0;left:0;bottom:0;background:rgba(0,0,0,.5);width:100%;height:100%}.container .content-collect .u-popup .p-hide[data-v-0607a5eb]{position:absolute;left:0;top:0;width:100%;height:calc(100vh - %?932?%)}.container .content-collect .u-popup .p-nav[data-v-0607a5eb]{position:absolute;left:0;bottom:0;overflow-y:scroll;width:100%;height:%?932?%;background:#fff;padding:0 15px;padding-bottom:%?105?%}.container .content-collect .u-popup .p-nav .p-list[data-v-0607a5eb]{padding-bottom:3px}.container .content-collect .u-popup .p-nav .p-list .p-title[data-v-0607a5eb]{color:#999;font-size:16px;height:24px;line-height:30px;margin:%?14?% 0 %?14?% %?8?%}.container .content-collect .u-popup .p-nav .p-list .pt-cont[data-v-0607a5eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.container .content-collect .u-popup .p-nav .p-list .pt-cont .pt-item[data-v-0607a5eb]{position:relative;height:40px;line-height:40px;border:1px solid #dfdfe5;background:#fff;text-align:center;border-radius:5px;width:%?208?%;margin:4px;font-size:%?26?%;overflow:hidden}.container .content-collect .u-popup .p-nav .p-list .pt-cont .pt-item .iconactive1[data-v-0607a5eb]{position:absolute;right:0;bottom:0;color:#e12021}.container .content-collect .u-popup .p-nav .p-list .pt-cont .pt-item .iconactive1[data-v-0607a5eb]:before{display:inline-block;position:absolute;bottom:0;right:0;width:%?46?%;height:%?58?%}.container .content-collect .u-popup .p-nav .p-list .pt-cont .checked[data-v-0607a5eb]{border:1px solid #e12021;background:url('+c+") no-repeat;background-size:%?40?% %?40?%;background-position:100% 100%}.container .content-collect .u-popup .p-nav .btn[data-v-0607a5eb]{position:fixed;left:0;bottom:0;width:100%;height:%?96?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.container .content-collect .u-popup .p-nav .btn .btn-l[data-v-0607a5eb]{width:50%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?31?%;color:#666;background:#f1f1f1}.container .content-collect .u-popup .p-nav .btn .rg[data-v-0607a5eb]{background:#e12021;color:hsla(0,0%,100%,.9)}.container .content-collect .set[data-v-0607a5eb]{position:fixed;left:50%;margin-left:%?-55.5?%;bottom:%?135?%;width:%?111?%;height:%?111?%;background-color:#e12021;box-shadow:5px 8.66px 73px 0 rgba(255,154,155,.9);border-radius:50%;overflow:hidden}.container .content-collect .set .icon-set[data-v-0607a5eb]{display:inline-block;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?44?%}.uni-panel-icon[data-v-0607a5eb]{float:right;line-height:30px;color:#c2c2c2;margin-right:%?-10?%}.close[data-v-0607a5eb]{position:absolute;top:%?-24?%;right:%?-24?%;z-index:2}@media screen and (max-width:320px){.container .content-list[data-v-0607a5eb]{margin:0 10px}.container .content-list .content .content-item[data-v-0607a5eb]{width:%?200?%!important}}",""]),t.exports=e}}]);