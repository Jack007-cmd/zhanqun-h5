(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-item-detail-08-item-detail-08"],{b116:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ce85")),o=n(i("1985")),s={components:{uniNavBar:o.default,WinNumber:a.default},data:function(){var t=this.getDate({format:!0});return{startData:{clientX:"",clientY:""},showAll:!1,sortArr:[],name:"",showList:!1,showVideo:!1,date:t,code:"",sortKey:-1,video_url:"",sortList:[],currentSort:"jskj",timeDiff:0,allSeconds:0,interval:0,hour:0,minute:"00",second:"00",st:null,rl:null,aboutList:null,current_number:""}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onUnload:function(){this.showList=!1,clearInterval(this.st),clearInterval(this.rl)},onLoad:function(t){this.sortArr=uni.getStorageSync("sort"),this.name=t.name,this.code=t.code,this.sortKey=t.sortKey,this.video_url=this.$api.getCurrentUrl(t.code),this.getAnalysisSort(),this.getAboutOnce()},methods:{start:function(t){this.startData.clientX=t.changedTouches[0].clientX},end:function(t){var e=t.changedTouches[0].clientX-this.startData.clientX;if(e>100)console.log("右滑"),this.back();else if(e<-100){console.log("左滑");var i=this.$api.getNextAbout(this.code,this.sortKey);i&&uni.redirectTo({url:"/pages/public/"+i.des+"/"+i.des+"?name="+i.name+"&code="+i.code+"&video_url="+i.url+"&sortKey="+i.sortKey})}else console.log("无效")},toDestination:function(t){this.showList=!1,uni.redirectTo({url:"/pages/public/"+t.des+"/"+t.des+"?name="+t.name+"&code="+t.code+"&video_url="+t.url+"&sortKey="+t.sortKey})},getAboutOnce:function(){var t=this;clearInterval(t.rl),t.$api.getAboutOnce({code:t.code}).then((function(e){0==e.code&&(t.current_number!=e.data.current_number&&(t.date=t.getDate({format:!0})),t.aboutList=e.data,t.current_number=e.data.current_number,t.allSeconds=Math.floor((new Date(t.aboutList.next_time.replace(/-/g,"/")).getTime()-(new Date).getTime()-t.timeDiff)/1e3),t.allSeconds<=0?(setTimeout((function(){t.getAboutOnce()}),3e3),t.numberRoll()):(clearInterval(t.rl),t.countDown()))}))},countDown:function(){var t=this;t.interval=t.allSeconds=Math.floor((new Date(t.aboutList.next_time.replace(/-/g,"/")).getTime()-(new Date).getTime()-t.timeDiff)/1e3),t.st=setInterval((function(){if(t.allSeconds-=1,t.allSeconds<=0)t.minute="00",t.second="00",t.numberRoll(),t.getAboutOnce(),clearInterval(t.st);else{t.hour=Math.floor(t.allSeconds/3600),t.hour=t.hour<10?"0"+t.hour:t.hour;var e=t.allSeconds%3600;t.minute=(e/60<10?"0":"")+Math.floor(e/60),t.second=(e%60<10?"0":"")+e%60}}),1e3)},numberRoll:function(){var t=this;t.rl=setInterval((function(){t.allSeconds>0?clearInterval(t.rl):t.aboutList.current_code.forEach((function(e,i){t.$set(t.aboutList.current_code,i,Math.floor(10*Math.random())+1)}))}),200)},getAnalysisSort:function(){var t=this;this.$api.getAnalysisSort({code:this.code,type:"app"}).then((function(e){0==e.code&&(t.sortList=e.data,t.currentSort=e.data[0].type)}))},back:function(){history.back()},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===t&&(i-=5),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)}}};e.default=s},bd71:function(t,e,i){"use strict";i.r(e);var n=i("e36d"),a=i("dab8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e221");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"a5088cd2",null,!1,n["a"],s);e["default"]=c.exports},dab8:function(t,e,i){"use strict";i.r(e);var n=i("b116"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},dde2:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.view-nav[data-v-a5088cd2]{display:block;padding:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.city[data-v-a5088cd2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-left:4px}.anasysis[data-v-a5088cd2]{background-color:#fff}.anasysis .anasysis-line[data-v-a5088cd2]{font-size:16px;position:relative;width:87%;display:inline-block;overflow:scroll}.anasysis .anasysis-line .anasysis-list[data-v-a5088cd2]{height:auto;overflow-x:scroll;text-align:center;width:-webkit-max-content;width:max-content}.anasysis .anasysis-line .anasysis-list .anasysis-item[data-v-a5088cd2]{display:inline-block;float:left;min-width:70px;max-width:130px;height:%?80?%;margin-top:2px;margin-right:7px;text-align:center;font-size:16px;padding-top:0;line-height:%?80?%}.anasysis .anasysis-line .anasysis-list .current[data-v-a5088cd2]{color:#e12121}.detail-container[data-v-a5088cd2]{width:100%;height:auto;background:#fff;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:13px;color:#666;margin-bottom:10px}.detail-container .boxline[data-v-a5088cd2]{width:100%;height:auto;display:-webkit-box}.detail-container .boxline .box-title[data-v-a5088cd2]{padding-top:10px;text-align:left;-webkit-box-flex:3;-webkit-flex:3;-ms-flex:3;flex:3}.detail-container .boxline .box-title .issue[data-v-a5088cd2]{font-size:%?28?%;color:#333;display:inline-block;margin-right:5px}.detail-container .boxline .box-title .draw-count[data-v-a5088cd2]{font-size:%?28?%;color:#999;display:inline-block}.detail-container .boxline .box[data-v-a5088cd2]{display:block;margin-top:%?10?%}.detail-container .boxline .box .box-item[data-v-a5088cd2]{display:inline-block;max-width:%?96?%;min-width:%?10?%;height:%?54?%;margin-right:%?20?%;color:#555}.detail-container .boxline .r_arrow[data-v-a5088cd2]{margin-top:%?6?%;right:0;float:right;display:inline-block;position:absolute;height:%?60?%;line-height:%?60?%}.detail-container .boxline .color-red[data-v-a5088cd2]{font-weight:400;font-style:normal;color:red}.detail-container .boxline .ml2[data-v-a5088cd2]{margin-left:2px}.about-container[data-v-a5088cd2]{padding:0 15px}.about-container .content-list[data-v-a5088cd2]{border-bottom:1px solid #dfdfe5;padding-bottom:3px}.about-container .content-list .content-title[data-v-a5088cd2]{font-size:16px;height:24px;line-height:30px;margin:7px 0}.about-container .content-list .content[data-v-a5088cd2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.about-container .content-list .content .content-item[data-v-a5088cd2]{height:40px;line-height:40px;border:1px solid #dfdfe5;background:#fff;text-align:center;border-radius:5px;width:%?208?%;margin:4px;font-size:%?26?%}.u-title[data-v-a5088cd2]{line-height:30px;font-size:12px;text-align:center;display:inline-block}.u-title .option-md[data-v-a5088cd2]{padding:15px;height:20px;font-size:14px;color:red;float:right}.u-title .option-md[data-v-a5088cd2]:first-child{float:left}.u-content[data-v-a5088cd2]{min-height:%?480?%;padding-top:10px}.u-content .content-item[data-v-a5088cd2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 15px;margin-bottom:10px}.u-content .content-item .option[data-v-a5088cd2]{color:#666;text-align:center;float:left;width:%?210?%;height:%?60?%;font-size:%?24?%;line-height:%?60?%;margin-right:2%;border:1px solid #e4e3e8;margin-top:%?20?%;border-radius:%?6?%;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box}.u-content .content-item .checked[data-v-a5088cd2]{border-color:#e12121;color:#e12121;position:relative}',""]),t.exports=e},e221:function(t,e,i){"use strict";var n=i("fa4f"),a=i.n(n);a.a},e36d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniNavBar:i("1985").default,uniIcons:i("9351").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view-nav"},[i("uni-nav-bar",{attrs:{fixed:!0,"status-bar":!0,color:"#ffffff","background-color":"#e12121","left-icon":"arrowleft"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"city",staticStyle:{margin:"0 auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showList=!t.showList}}},[i("v-uni-view",[t.showList?i("v-uni-text",{staticClass:"uni-nav-bar-text"},[t._v("所有彩种")]):i("v-uni-text",{staticClass:"uni-nav-bar-text"},[t._v(t._s(t.name))])],1),t.showList?i("uni-icons",{attrs:{type:"arrowup",color:"#fff",size:"22"}}):i("uni-icons",{attrs:{type:"arrowdown",color:"#fff",size:"22"}})],1),i("v-uni-view",{attrs:{slot:"right"},slot:"right"},[i("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input mydate"},[t._v(t._s(t.date)),i("v-uni-text",{staticClass:"font_icon iconsytriangle date-triangle"})],1)],1)],1)],1)],1),t.showList?i("v-uni-view",{staticClass:"about-container"},t._l(t.sortArr,(function(e,n){return i("v-uni-view",{key:"a"+n,staticClass:"content-list"},[i("v-uni-view",{staticClass:"content-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"content"},[t._l(e.list,(function(e,n){return[-1==e.code.indexOf("xglhc")&&-1==e.code.indexOf("amlhc")?i("v-uni-view",{key:"b"+n,staticClass:"content-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDestination(e)}}},[t._v(t._s(e.name))]):t._e()]}))],2)],1)})),1):i("v-uni-view",[i("v-uni-view",{staticClass:"detail-container"},[i("v-uni-view",{staticClass:"boxline"},[i("v-uni-view",{staticClass:"box-title"},[i("v-uni-view",{staticClass:"issue"},[t._v(t._s(t.current_number)+"期开奖")]),t.aboutList?i("v-uni-view",{staticClass:"draw-count"},[t._v("已开"+t._s(t.aboutList["open_num"])+"期，剩余"+t._s(t.aboutList["still_num"])+"期")]):t._e(),i("v-uni-view",{staticClass:"open-video",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo=!0}}},[i("v-uni-text",{staticClass:"font_icon iconshipin"}),t._v("视频")],1)],1)],1),t.aboutList?i("v-uni-view",{staticClass:"boxline"},[i("v-uni-view",{staticClass:"box"},t._l(t.aboutList["current_code"],(function(e,n){return i("v-uni-view",{key:t.code+"-"+n,staticClass:"ssc"},[t._v(t._s(e))])})),1)],1):t._e(),i("v-uni-view",{staticClass:"boxline"},[t.aboutList?i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"box-item"},[t._v("总和:")]),t._l(t.aboutList.describe[3].val,(function(e,n){return i("v-uni-view",{key:t.aboutList.code+e+n,staticClass:"box-item"},[t._v(t._s(e))])}))],2):t._e(),t.allSeconds>0?i("v-uni-text",{staticClass:"r_arrow"},[t.hour>0?i("v-uni-text",{staticClass:"color-red ml2"},[t._v(t._s(t.hour)+":")]):t._e(),i("v-uni-text",{staticClass:"color-red",class:{ml2:t.hour<=0}},[t._v(t._s(t.minute)+":")]),i("v-uni-text",{staticClass:"color-red"},[t._v(t._s(t.second))])],1):t._e(),t.allSeconds<=0?i("v-uni-text",{staticClass:"r_arrow color-red"},[t._v("开奖中")]):t._e()],1)],1),i("v-uni-view",{staticClass:"anasysis"},[i("v-uni-view",{staticClass:"anasysis-line"},[i("v-uni-view",{staticClass:"anasysis-list",on:{touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},t._l(t.sortList,(function(e){return i("v-uni-view",{key:e.type,staticClass:"anasysis-item",class:{current:t.currentSort==e.type},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.currentSort=e.type}}},[t._v(t._s(e.name))])})),1)],1)],1),i("v-uni-view",["jskj"==t.currentSort?i("WinNumber",{attrs:{code:t.code,date:t.date,current_number:t.current_number}}):t._e()],1)],1),t.showAll?i("v-uni-view",{staticClass:"u-popup"},[i("v-uni-view",{staticClass:"u-transition-out",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showAll=!t.showAll}}}),i("v-uni-view",{staticClass:"u-transition"},[i("v-uni-view",{staticClass:"u-popup__wrapper-box"},[i("v-uni-view",{staticClass:"u-main"},[i("v-uni-view",{staticClass:"u-title"},[i("v-uni-view",{staticClass:"option-md"},[t._v("选择分析类型")]),i("v-uni-view",{staticClass:"option-md",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showAll=!t.showAll}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"u-content"},[i("v-uni-view",{staticClass:"content-item"},t._l(t.sortList,(function(e){return i("v-uni-view",{key:e.type,staticClass:"option",class:{checked:t.currentSort==e.type},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.currentSort=e.type,t.showAll=!1}}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1)],1):t._e(),t.showVideo?i("v-uni-view",{staticClass:"u-popup"},[i("v-uni-view",{staticClass:"u-transition-out",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo=!1}}}),i("v-uni-view",{staticClass:"u-transition"},[i("v-uni-view",{staticClass:"u-popup__wrapper-box"},[i("v-uni-view",{staticClass:"u-main"},[i("v-uni-view",{staticClass:"u-title"},[i("v-uni-view",{staticClass:"option-md",staticStyle:{"line-height":"14px",color:"#000"}},[t._v(t._s(t.name)+"开奖视频")]),i("v-uni-view",{staticClass:"option-md",staticStyle:{"line-height":"14px",color:"#000"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo=!1}}},[t._v("关闭")])],1),i("iframe",{staticClass:"u-content",attrs:{src:t.video_url,frameborder:"0"}})],1)],1)],1)],1):t._e()],1)},o=[]},fa4f:function(t,e,i){var n=i("dde2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("36ccc9f8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);