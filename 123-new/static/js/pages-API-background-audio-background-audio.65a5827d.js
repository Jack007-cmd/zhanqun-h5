(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-background-audio-background-audio"],{1798:function(a,t,i){"use strict";var e=i("7d2e"),n=i.n(e);n.a},2437:function(a,t,i){"use strict";var e;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:a.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-center"},[i("v-uni-text",{staticClass:"time-big"},[a._v(a._s(a.formatedPlayTime))])],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:a.playTime},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.seek.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"play-time"},[i("v-uni-text",[a._v("00:00")]),i("v-uni-text",[a._v("00:21")])],1),i("v-uni-view",{staticClass:"uni-hello-text"},[a._v("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")]),i("v-uni-view",{staticClass:"page-body-buttons"},[a.playing?[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.stop.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.pause.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/pause.png"}})],1)]:a._e(),a.playing?a._e():[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.play.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/play.png"}})],1)],i("v-uni-view",{staticClass:"page-body-button"})],2)],1)],1)},o=[]},"2f35":function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("795c"),n={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var a=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var t=uni.getBackgroundAudioManager();t.title||(t.title="致爱丽丝"),t.singer||(t.singer="暂无"),t.coverImgUrl||(t.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"),t.onPlay((function(){console.log("开始播放"),a.$backgroundAudioData.playing=a.playing=!0})),t.onPause((function(){console.log("暂停播放"),a.$backgroundAudioData.playing=a.playing=!1})),t.onEnded((function(){a.playing=!1,a.$backgroundAudioData.playing=!1,a.$backgroundAudioData.playTime=a.playTime=0,a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(0)})),t.onTimeUpdate((function(i){Math.floor(t.currentTime)>Math.floor(a.playTime)&&(a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(Math.floor(t.currentTime))),a.$backgroundAudioData.playTime=a.playTime=t.currentTime})),this.bgAudioMannager=t},methods:{play:function(a){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(a){this.bgAudioMannager.seek(a.target.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=e.formatTime(0)}}};t.default=n},"7d2e":function(a,t,i){var e=i("a6fe");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("4f06").default;n("c4465248",e,!0,{sourceMap:!1,shadowMode:!1})},8993:function(a,t,i){"use strict";i.r(t);var e=i("2437"),n=i("e562");for(var o in n)"default"!==o&&function(a){i.d(t,a,(function(){return n[a]}))}(o);i("1798");var u,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"6e3c25b1",null,!1,e["a"],u);t["default"]=d.exports},a6fe:function(a,t,i){var e=i("24fb");t=e(!1),t.push([a.i,"uni-image[data-v-6e3c25b1]{width:%?150?%;height:%?150?%}.page-body-text[data-v-6e3c25b1]{padding:0 %?30?%}.page-body-wrapper[data-v-6e3c25b1]{margin-top:0}.page-body-info[data-v-6e3c25b1]{padding-bottom:%?50?%}.time-big[data-v-6e3c25b1]{font-size:%?60?%;margin:%?20?%}.slider[data-v-6e3c25b1]{width:%?630?%}.play-time[data-v-6e3c25b1]{font-size:%?28?%;width:100%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box}.page-body-buttons[data-v-6e3c25b1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?100?%}.page-body-button[data-v-6e3c25b1]{width:%?250?%;text-align:center}",""]),a.exports=t},e562:function(a,t,i){"use strict";i.r(t);var e=i("2f35"),n=i.n(e);for(var o in e)"default"!==o&&function(a){i.d(t,a,(function(){return e[a]}))}(o);t["default"]=n.a}}]);