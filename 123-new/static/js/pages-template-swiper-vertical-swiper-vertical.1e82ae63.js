(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper-vertical-swiper-vertical"],{"1d8e":function(t,e,i){"use strict";i.r(e);var n=i("6dd0"),d=i("7e37");for(var s in d)"default"!==s&&function(t){i.d(e,t,(function(){return d[t]}))}(s);i("337b");var a,o=i("f0c5"),r=Object(o["a"])(d["default"],n["b"],n["c"],!1,null,"5d6ddf82",null,!1,n["a"],a);e["default"]=r.exports},"337b":function(t,e,i){"use strict";var n=i("7aa8"),d=i.n(n);d.a},"6dd0":function(t,e,i){"use strict";var n,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:t.circular,vertical:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.videoList,(function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-video",{ref:t.id,refInFor:!0,staticClass:"video",attrs:{id:t.id,src:t.src,controls:!1,loop:!0,"show-center-play-btn":!1}})],1)})),1)],1)},s=[];i.d(e,"b",(function(){return d})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"7aa8":function(t,e,i){var n=i("9938");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var d=i("4f06").default;d("6bfabdae",n,!0,{sourceMap:!1,shadowMode:!1})},"7e37":function(t,e,i){"use strict";i.r(e);var n=i("aa40"),d=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=d.a},9938:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\nuni-page-body[data-v-5d6ddf82]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.page[data-v-5d6ddf82]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%}.swiper[data-v-5d6ddf82]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#e12121}.swiper-item[data-v-5d6ddf82]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.video[data-v-5d6ddf82]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\nwidth:100%\n}",""]),t.exports=e},aa40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4"}],d={data:function(){return{circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}},onLoad:function(t){},onReady:function(){this.init(),this.getData()},methods:{init:function(){this._videoIndex=0,this._videoContextList=[];for(var t=0;t<this.videoList.length;t++)this._videoContextList.push(uni.createVideoContext("video"+t,this));this._videoDataIndex=0},getData:function(t){var e=this;this.videoDataList=n,setTimeout((function(){e.updateVideo(!0)}),200)},onSwiperChange:function(t){var e=this,i=t.detail.current;if(i!==this._videoIndex){var n=!1;0===i&&this._videoIndex===this.videoList.length-1?n=!0:i===this.videoList.length-1&&0===this._videoIndex?n=!1:i>this._videoIndex&&(n=!0),n?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=i,setTimeout((function(){e.updateVideo(n)}),200)}},getNextIndex:function(t){var e=this._videoIndex+(t?1:-1);return e<0?this.videoList.length-1:e>=this.videoList.length?0:e},getNextDataIndex:function(t){var e=this._videoDataIndex+(t?1:-1);return e<0?this.videoDataList.length-1:e>=this.videoDataList.length?0:e},updateVideo:function(t){var e=this;this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(t)],"src",this.videoDataList[this.getNextDataIndex(t)].src),setTimeout((function(){e._videoContextList[e._videoIndex].play()}),200),console.log("v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(t)+" next d:"+this.getNextDataIndex(t))}}};e.default=d}}]);