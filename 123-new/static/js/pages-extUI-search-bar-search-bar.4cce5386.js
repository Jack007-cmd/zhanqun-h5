(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-search-bar-search-bar"],{"0ef3":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniSection:n("3646").default,uniSearchBar:n("f4a4").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.input.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"search-result"},[n("v-uni-text",{staticClass:"search-result-text"},[e._v("当前输入为："+e._s(e.searchVal))])],1)],1),n("uni-section",{attrs:{title:"自定义样式",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{placeholder:"自定义placeholder"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{placeholder:"自定义背景色",bgColor:"#EEEEEE"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"自定义圆角"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"控制清除/取消按钮",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{radius:"5",placeholder:"一直显示",clearButton:"always",cancelButton:"always"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"5",placeholder:"自动显示隐藏",clearButton:"auto",cancelButton:"auto"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"一直不显示",clearButton:"none",cancelButton:"none"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1)],1)},o=[]},"2ace":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'.uni-section[data-v-d8e6a7ae]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-d8e6a7ae]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-d8e6a7ae]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-d8e6a7ae]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-d8e6a7ae]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-d8e6a7ae]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-d8e6a7ae]{font-size:%?28?%;color:#333}.distraction[data-v-d8e6a7ae]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-d8e6a7ae]{font-size:%?24?%;color:#999}',""]),e.exports=t},"2d36":function(e,t,n){var i=n("2ace");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("4c8be2d5",i,!0,{sourceMap:!1,shadowMode:!1})},3646:function(e,t,n){"use strict";n.r(t);var i=n("eb90"),a=n("a675");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("6086");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"d8e6a7ae",null,!1,i["a"],r);t["default"]=l.exports},5492:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("f4a4")),o=i(n("3646")),r={components:{uniSearchBar:a.default,uniSection:o.default},data:function(){return{searchVal:""}},methods:{search:function(e){uni.showToast({title:"搜索："+e.value,icon:"none"})},input:function(e){this.searchVal=e.value},cancel:function(e){uni.showToast({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress:function(){}};t.default=r},"5fea":function(e,t,n){"use strict";n.r(t);var i=n("0ef3"),a=n("9c66");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("7854");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6c7449fb",null,!1,i["a"],r);t["default"]=l.exports},6086:function(e,t,n){"use strict";var i=n("2d36"),a=n.n(i);a.a},7854:function(e,t,n){"use strict";var i=n("f53a"),a=n.n(i);a.a},"7cf7":function(e,t,n){var i=n("bb97");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5d28ffbd",i,!0,{sourceMap:!1,shadowMode:!1})},"910a":function(e,t,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("9351")),o={name:"UniSearchBar",components:{uniIcons:a.default},props:{placeholder:{type:String,default:"请输入搜索内容"},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100}},data:function(){return{show:!1,showSync:!1,searchVal:""}},watch:{searchVal:function(){this.$emit("input",{value:this.searchVal})}},methods:{searchClick:function(){var e=this;this.show||(this.searchVal="",this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.searchVal=""},cancel:function(){this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard()},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})}}};t.default=o},9322:function(e,t,n){"use strict";var i=n("7cf7"),a=n.n(i);a.a},"9aa2":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-6c7449fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-6c7449fb]{font-size:14px;line-height:inherit}.example[data-v-6c7449fb]{padding:0 15px 15px}.example-info[data-v-6c7449fb]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-6c7449fb]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-6c7449fb]{padding:0 15px}.example-info[data-v-6c7449fb]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-6c7449fb]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-6c7449fb]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-6c7449fb]{font-size:18px;color:#fff}.word-btn[data-v-6c7449fb]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#e12121}.word-btn--hover[data-v-6c7449fb]{background-color:#4ca2ff}.search-result[data-v-6c7449fb]{margin-top:10px;margin-bottom:20px;text-align:center}.search-result-text[data-v-6c7449fb]{text-align:center;font-size:14px}.example-body[data-v-6c7449fb]{\ndisplay:block;\npadding:0}body.?%PAGE?%[data-v-6c7449fb]{background-color:#efeff4}",""]),e.exports=t},"9c66":function(e,t,n){"use strict";n.r(t);var i=n("5492"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},a675:function(e,t,n){"use strict";n.r(t);var i=n("acbd"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},acbd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},bb97:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-searchbar[data-v-ace96e0c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding:%?16?%;background-color:#fff}.uni-searchbar__box[data-v-ace96e0c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;\noverflow:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:36px;padding:5px 8px 5px 0;border-width:.5px;border-style:solid;border-color:#e5e5e5}.uni-searchbar__box-icon-search[data-v-ace96e0c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:32px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:grey}.uni-searchbar__box-search-input[data-v-ace96e0c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#333}.uni-searchbar__box-icon-clear[data-v-ace96e0c]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:24px;padding-left:5px}.uni-searchbar__text-placeholder[data-v-ace96e0c]{font-size:%?28?%;color:grey;margin-left:5px}.uni-searchbar__cancel[data-v-ace96e0c]{padding-left:10px;line-height:36px;font-size:14px;color:#333}",""]),e.exports=t},e8b4:function(e,t,n){"use strict";n.r(t);var i=n("910a"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},eb90:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-section"},[e.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[]},ef14:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("9351").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchClick.apply(void 0,arguments)}}},[n("uni-icons",{staticClass:"uni-searchbar__box-icon-search",attrs:{color:"#999999",size:"18",type:"search"}}),e.show?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:e.showSync,placeholder:e.placeholder,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{color:"#999999",size:"24",type:"clear"}})],1):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]):e._e()],1)},o=[]},f4a4:function(e,t,n){"use strict";n.r(t);var i=n("ef14"),a=n("e8b4");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("9322");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"ace96e0c",null,!1,i["a"],r);t["default"]=l.exports},f53a:function(e,t,n){var i=n("9aa2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("4bb21db4",i,!0,{sourceMap:!1,shadowMode:!1})}}]);