(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-accelerometer-change-on-accelerometer-change"],{"1a33":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.watchAcce.apply(void 0,arguments)}}},[t._v("监听设备的加速度变化")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopAcce.apply(void 0,arguments)}}},[t._v("停止监听设备的加速度变化")])],1),n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{staticClass:"acc-show",attrs:{value:t.value}})],1)],1)],1)},o=[]},"219c5":function(t,e,n){"use strict";n("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"onAccelerometerChange",value:""}},onUnload:function(){uni.stopAccelerometer()},methods:{watchAcce:function(){var t=this;uni.onAccelerometerChange((function(e){t.value="监听设备的加速度变化:\nX轴："+e.x.toFixed(2)+"\nY轴："+e.y.toFixed(2)+"\nZ轴："+e.z.toFixed(2)}))},stopAcce:function(){uni.stopAccelerometer()}}};e.default=a},"3b4c":function(t,e,n){"use strict";n.r(e);var a=n("219c5"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=c.a},"6c08":function(t,e,n){var a=n("da09");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=n("4f06").default;c("7e1887b8",a,!0,{sourceMap:!1,shadowMode:!1})},"79bc":function(t,e,n){"use strict";n.r(e);var a=n("1a33"),c=n("3b4c");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("a92d");var i,r=n("f0c5"),u=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"3e7fdffe",null,!1,a["a"],i);e["default"]=u.exports},a92d:function(t,e,n){"use strict";var a=n("6c08"),c=n.n(a);c.a},da09:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".shake[data-v-3e7fdffe]{background-color:#fc3;color:#fff;margin-bottom:%?50?%}.uni-textarea .acc-show[data-v-3e7fdffe]{height:%?240?%}",""]),t.exports=e}}]);