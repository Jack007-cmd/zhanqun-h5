webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HKService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HKService = /** @class */ (function () {
    function HKService(appHttp, appConfig) {
        this.appHttp = appHttp;
        this.appConfig = appConfig;
    }
    HKService.prototype.getServerTime = function () {
        return this.appHttp.get("/v1/h5/xianggang/serviceTime");
    };
    HKService.prototype.getTypeTable = function () {
        return this.appHttp.get("/v1/h5/xianggang/typeTab");
    };
    //获取六合彩最新一期开奖结果
    HKService.prototype.getHKWinNumber = function (code) {
        return this.appHttp.get("/v1/h5/xianggang/instantLottery", { code: code });
    };
    //获取六合彩开奖记录
    HKService.prototype.getHKRecord = function (code, date) {
        return this.appHttp.get("/v1/h5/xianggang/history", { code: code, date: date, extra_type: 1 });
    };
    //获取六合彩特码走势数据
    HKService.prototype.getHKSpecial = function (code, date) {
        return this.appHttp.get("/v1/h5/xianggang/history", { code: code, date: date, extra_type: 2 });
    };
    //获取六合彩正码走势数据
    HKService.prototype.getHKPositive = function (code, date) {
        return this.appHttp.get("/v1/h5/xianggang/history", { code: code, date: date, extra_type: 3 });
    };
    //获取六合彩生肖走势数据
    HKService.prototype.getHKZodiac = function (code, date) {
        return this.appHttp.get("/v1/h5/xianggang/history", { code: code, date: date, extra_type: 4 });
    };
    //获取六合彩总和分析数据
    HKService.prototype.getHkSumAnalysis = function (code, date) {
        return this.appHttp.get("/v1/h5/xianggang/history", { code: code, date: date, extra_type: 5 });
    };
    //获取六合彩露珠分析数据
    HKService.prototype.getHkLuzhuAnalysis = function (code, date, type) {
        return this.appHttp.get("/v1/h5/xianggang/chart", { code: code, year: date, type: type });
    };
    //六合资料列表
    HKService.prototype.getNewsData = function (code, page, pageSize) {
        return this.appHttp.get("/v1/h5/xianggang/article", { identify: code, page: page, per_page: pageSize });
    };
    //文章详情
    HKService.prototype.getNewsDetail = function (id) {
        return this.appHttp.get("/v1/h5/xianggang/articleDetail", { id: id });
    };
    //开奖日历
    HKService.prototype.getHkCalendar = function (date) {
        return this.appHttp.get("/v1/h5/xianggang/lotteryDate", { date: date });
    };
    //获取banner图
    HKService.prototype.getBannerArr = function () {
        return this.appHttp.get("/v1/h5/xianggang/banner");
    };
    //获取首页公共内容（公告等）
    HKService.prototype.getCommon = function () {
        // return this.appHttp.post("/index/common");
        return this.appHttp.get("/v1/h5/caihui/config");
    };
    HKService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttp */], __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */]])
    ], HKService);
    return HKService;
}());

//# sourceMappingURL=hk.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    StorageService.prototype.set = function (key, value) {
        this.localStorage[key] = value;
    };
    StorageService.prototype.get = function (key) {
        return this.localStorage[key] || false;
    };
    StorageService.prototype.setObject = function (key, value) {
        this.localStorage[key] = JSON.stringify(value);
    };
    StorageService.prototype.getObject = function (key) {
        var value = this.localStorage[key];
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    StorageService.prototype.setArray = function (key, value) {
        this.localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService.prototype.getArray = function (key) {
        var value = this.localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(this.localStorage.getItem(key));
        }
        return [];
    };
    StorageService.prototype.remove = function (key) {
        this.localStorage.removeItem(key);
    };
    StorageService.prototype.clear = function () {
        this.localStorage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(modalCtrl, toastCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AlertService.prototype.msg = function (msg, time) {
        var _this = this;
        if (!time)
            time = 2000;
        return new Promise(function (resolve, reject) {
            var tips = _this.loadingCtrl.create({
                content: msg,
                duration: time,
                spinner: 'hide',
                dismissOnPageChange: true
            });
            tips.onDidDismiss(function (data) {
                resolve(data);
            });
            tips.present();
        });
    };
    AlertService.prototype.createModal = function (name, param) {
        var alert = this.modalCtrl.create(name, param);
        alert.present();
        return new Promise(function (resolve, reject) {
            alert.onDidDismiss(function (data) {
                resolve(data);
            });
        });
    };
    AlertService.prototype.show = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.modalCtrl.create("AlertPage", { content: content });
            alert.onDidDismiss(function (data) {
                resolve(data);
            });
            alert.present({ animate: false }).then(function () {
                console.log("aaa");
            }).catch(function () {
                console.log("bbb");
            });
        });
    };
    AlertService.prototype.loading = function (time) {
        this.load = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'app-loading',
            dismissOnPageChange: true,
            enableBackdropDismiss: true,
            duration: time
        });
        this.load.present();
    };
    AlertService.prototype.hideLoading = function () {
        this.load.dismissAll();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hk/hk-calendar/hk-calendar.module": [
		292,
		9
	],
	"../pages/hk/hk-home/hk-home.module": [
		293,
		8
	],
	"../pages/hk/hk-luzhu-analysis/hk-luzhu-analysis.module": [
		294,
		7
	],
	"../pages/hk/hk-news/hk-news-detail/hk-news-detail.module": [
		295,
		6
	],
	"../pages/hk/hk-news/hk-news.module": [
		296,
		5
	],
	"../pages/hk/hk-positive-trend/hk-positive-trend.module": [
		297,
		4
	],
	"../pages/hk/hk-record/hk-record.module": [
		298,
		3
	],
	"../pages/hk/hk-special-trend/hk-special-trend.module": [
		299,
		2
	],
	"../pages/hk/hk-sum-analysis/hk-sum-analysis.module": [
		300,
		1
	],
	"../pages/hk/hk-zodiac-trend/hk-zodiac-trend.module": [
		301,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppHttp = /** @class */ (function () {
    function AppHttp(http, nativeHttp, appConfig) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.appConfig = appConfig;
        this.isNative = !!window.cordova;
    }
    AppHttp.prototype.get = function (url, params, headers, timeout, isWapApi) {
        url = this.generateUrl(url, params, isWapApi);
        // console.log(url);
        if (!timeout)
            timeout = 10000;
        return this.isNative ? this.nativeGet(url, timeout / 1000) : this.httpGet(url, timeout);
    };
    AppHttp.prototype.httpGet = function (url, timeout) {
        var _this = this;
        var headers = this.generateHeader();
        return this.http.get(url, { headers: headers }).timeout(timeout).toPromise()
            .then(function (res) {
            return _this.success(res.json());
        }, function (res) {
            return _this.error(res);
        });
    };
    AppHttp.prototype.nativeGet = function (url, timeout) {
        var _this = this;
        this.nativeHttp.setRequestTimeout(timeout);
        var headers = this.generateNativeHeader();
        // console.log(url);
        return this.nativeHttp.get(url, {}, headers).then(function (res) {
            return _this.success(JSON.parse(res.data));
        }, function (res) {
            return _this.error(res);
        });
    };
    AppHttp.prototype.generateHeader = function () {
        // let uuid = this.appConfig.uuid ? this.appConfig.uuid : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.set('uuid', uuid);
        return headers;
    };
    AppHttp.prototype.generateNativeHeader = function () {
        //  let uuid = this.appConfig.uuid ? this.appConfig.uuid : '';
        return {
            //   'uuid': uuid,
            'Accept': 'application/json,text/plain,*/*'
        };
    };
    AppHttp.prototype.generateBody = function (body) {
        var bodyStr = '';
        if (!body)
            return bodyStr;
        for (var key in body) {
            if (body[key] || body[key] == false || body[key] == 0) {
                bodyStr += key + '=' + body[key] + '&';
            }
        }
        bodyStr = bodyStr.substring(0, bodyStr.length - 1);
        return bodyStr;
    };
    AppHttp.prototype.generateNativeBody = function (body) {
        var newBody = {};
        if (!body)
            return newBody;
        for (var key in body) {
            if (body[key] || body[key] == false || body[key] == 0) {
                newBody[key] = body[key];
            }
        }
        return newBody;
    };
    AppHttp.prototype.generateUrl = function (url, params, isWapApi) {
        if (!this.appConfig.localhost && url.indexOf('http') != 0 && url.indexOf('https') != 0) {
            if (isWapApi) {
                url = this.appConfig.h5Host + url;
                // url = "http://192.168.0.200" + url;
                // url = "http://api.lhc.com" + url;
            }
            else {
                // url = "http://192.168.0.200" + url;
                // url = "http://api.lhc.com" + url;
                url = this.appConfig.apiHost + url;
            }
        }
        else {
            // url = "http://192.168.0.200" + url;
            // url = "http://api.lhc.com" + url;
            url = this.appConfig.apiHost + url;
        }
        url += url.indexOf("?") > 0 ? "&" : "?";
        url += 'aid=' + this.appConfig.agentId;
        url += '&clientType=' + (this.appConfig.platform == 'ios' ? 5 : 4);
        url += '&cv=' + this.appConfig.version;
        url += '&uuid=' + (this.appConfig.uuid ? this.appConfig.uuid : '');
        if (params) {
            for (var key in params) {
                if (params[key] || params[key] == false || params[key] == 0) {
                    url += '&' + key + '=' + params[key];
                }
            }
        }
        return url;
    };
    AppHttp.prototype.error = function (error) {
        if (!this.isNative) {
            console.log("http request error:");
            console.log(error);
        }
        var errorMsg = { message: '系统异常，请稍后再试' };
        if (error && error.name == 'TimeoutError') {
            errorMsg = { message: '请求超时，请稍后再试' };
        }
        else if (error && error.status != 200) {
            errorMsg = { message: '网络异常，请稍后再试' };
        }
        else if (error && error.message) {
            errorMsg.message = error.message;
        }
        return errorMsg;
    };
    AppHttp.prototype.success = function (result) {
        return result;
    };
    AppHttp.prototype.nativePost = function (url, body, timeout) {
        var _this = this;
        this.nativeHttp.setRequestTimeout(timeout);
        var headers = this.generateNativeHeader();
        headers['Content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        body = this.generateNativeBody(body);
        return this.nativeHttp.post(url, body, headers).then(function (res) {
            return _this.success(JSON.parse(res.data));
        }, function (res) {
            return _this.error(res);
        });
    };
    AppHttp.prototype.post = function (url, body, headers, timeout, isWapApi) {
        url = this.generateUrl(url, null, isWapApi);
        var bodyStr = this.generateBody(body);
        if (!timeout)
            timeout = 5000;
        return this.isNative ? this.nativePost(url, body, timeout / 1000) : this.httpPost(url, bodyStr, headers, timeout);
    };
    AppHttp.prototype.httpPost = function (url, body, headers, timeout) {
        var _this = this;
        headers = this.generateHeader();
        headers.set('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');
        return this.http.post(url, body, { headers: headers }).timeout(timeout).toPromise().then(function (res) {
            return _this.success(res.json());
        }, function (res) {
            return _this.error(res);
        });
    };
    AppHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_5__app_config_service__["a" /* AppConfig */]])
    ], AppHttp);
    return AppHttp;
}());

//# sourceMappingURL=app-http.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HKCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_scroll_event__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_scroll_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_scroll_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hk_hk_about_item_hk_about_item__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HKCommonModule = /** @class */ (function () {
    function HKCommonModule() {
    }
    HKCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__pages_hk_hk_about_item_hk_about_item__["a" /* HkAboutItemComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_scroll_event__["ScrollEventModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__pages_hk_hk_about_item_hk_about_item__["a" /* HkAboutItemComponent */]]
        })
    ], HKCommonModule);
    return HKCommonModule;
}());

//# sourceMappingURL=hk-common.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hk_common_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_service_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {Device} from "@ionic-native/device";
// import {Network} from "@ionic-native/network";


// import {AboutPage} from '../pages/about/about';
// import {ContactPage} from '../pages/contact/contact';
// import {HomePage} from '../pages/home/home';
// import {TabsPage} from '../pages/tabs/tabs';
// import {NewsPage} from "../pages/news/news";
// import {SettingPage} from "../pages/setting/setting";
// import {AppCommonModule} from "./app-common.module";





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                // AppCommonModule,
                __WEBPACK_IMPORTED_MODULE_6__hk_common_module__["a" /* HKCommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    pageTransition: 'ios-transition',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/hk/hk-calendar/hk-calendar.module#HkCalendarPageModule', name: 'HkCalendarPage', segment: 'hk-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-home/hk-home.module#HkHomePageModule', name: 'HkHomePage', segment: 'hk-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-luzhu-analysis/hk-luzhu-analysis.module#HkLuzhuAnalysisPageModule', name: 'HkLuzhuAnalysisPage', segment: 'hk-luzhu-analysis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-news/hk-news-detail/hk-news-detail.module#HkNewsDetailPageModule', name: 'HkNewsDetailPage', segment: 'hk-news-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-news/hk-news.module#HkNewsPageModule', name: 'HkNewsPage', segment: 'hk-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-positive-trend/hk-positive-trend.module#HkPositiveTrendPageModule', name: 'HkPositiveTrendPage', segment: 'hk-positive-trend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-record/hk-record.module#HkRecordPageModule', name: 'HkRecordPage', segment: 'hk-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-special-trend/hk-special-trend.module#HkSpecialTrendPageModule', name: 'HkSpecialTrendPage', segment: 'hk-special-trend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-sum-analysis/hk-sum-analysis.module#HkSumAnalysisPageModule', name: 'HkSumAnalysisPage', segment: 'hk-sum-analysis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hk/hk-zodiac-trend/hk-zodiac-trend.module#HkZodiacTrendPageModule', name: 'HkZodiacTrendPage', segment: 'hk-zodiac-trend', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__pipes_pipe_module__["a" /* PipeModule */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkAboutItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_hk_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_alert_service__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HkAboutItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HkAboutItemComponent = /** @class */ (function () {
    function HkAboutItemComponent(navCtrl, hkService, storageService, alert) {
        this.navCtrl = navCtrl;
        this.hkService = hkService;
        this.storageService = storageService;
        this.alert = alert;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoading = false;
        this.redArr = [];
        this.greenArr = [];
        this.blueArr = [];
        this.mainItem = {};
        this.minute = "00"; //分
        this.second = "00"; //秒
        this.showVideo = false;
        console.log('Hello HkAboutItemComponent Component');
        this.timeDiff = Number(this.storageService.get("timeDiff"));
        this.redArr = this.storageService.getArray("redArr");
        this.greenArr = this.storageService.getArray("greenArr");
        this.blueArr = this.storageService.getArray("blueArr");
    }
    HkAboutItemComponent.prototype.ngOnInit = function () {
        if (this.hkCode) {
            this.isLoading = true;
            this.getHKWinNumber();
        }
    };
    HkAboutItemComponent.prototype.videoShow = function () {
        this.showVideo = true;
        this.event.emit(this.showVideo);
    };
    HkAboutItemComponent.prototype.getHKWinNumber = function () {
        var that = this;
        that.hkService.getHKWinNumber(that.hkCode).then(function (rs) {
            if (!rs.code) {
                that.mainItem = rs.data;
                if (that.hkCode == 'jslhc') {
                    that.countDown(that.mainItem.next_time);
                }
            }
            else {
                that.alert.msg("网络异常，请稍后再试");
            }
        }).catch(function () {
            that.alert.msg("网络异常，请稍后再试");
        });
    };
    HkAboutItemComponent.prototype.countDown = function (next_time) {
        var _this = this;
        this.allSeconds = Math.floor((new Date(next_time.replace(/-/g, "/")).getTime() - new Date().getTime() - this.timeDiff) / 1000);
        this.st = setInterval(function () {
            _this.allSeconds -= 1;
            if (_this.allSeconds <= 0) {
                _this.minute = '00';
                _this.second = '00';
                _this.getHKWinNumber();
                clearInterval(_this.st);
            }
            else {
                _this.minute = ((_this.allSeconds / 60 < 10) ? '0' : '') + Math.floor(_this.allSeconds / 60);
                _this.second = (_this.allSeconds % 60 < 10 ? '0' : '') + _this.allSeconds % 60;
            }
        }, 1000);
    };
    HkAboutItemComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.st);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HkAboutItemComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HkAboutItemComponent.prototype, "hkCode", void 0);
    HkAboutItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hk-about-item',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-about-item\hk-about-item.html"*/'<!-- Generated template for the HkAboutItemComponent component -->\n<div>\n  <!--极速六合彩-->\n  <div *ngIf="mainItem?.code==\'jslhc\'" class="kaiji_box kaiji_box_fast" data-href="./html/history_jisu.html">\n    <div class="lottype" id="kaitimebox_fast">\n      <h1>极速六合彩 <span class="issue">{{mainItem[\'current_number\']}}</span><span>期</span></h1>\n      <p *ngIf="allSeconds>0" class="cuttime" style="display: inline-block;">下期开奖:\n        <span class="bgtime hour" style="display: none;">00</span>\n        <span class="hourtxt" style="display: none;">时</span>\n        <span class="bgtime minute">{{minute}}</span>\n        <span>分</span>\n        <span class="bgtime second">{{second}}</span>\n        <span>秒</span>\n      </p>\n      <p class="opentyle" *ngIf="allSeconds<1">开奖中...</p>\n    </div>\n\n    <div class="code_box">\n      <ul class="result_num" *ngIf="mainItem[\'current_code\']?.length>0"  navPush="HkRecordPage" [navParams]="{code:\'jslhc\'}">\n        <ng-container *ngFor="let code of mainItem[\'current_code\']; let index = index;">\n          <li *ngIf="index==6" class="add"><i></i></li>\n          <li\n            [ngClass]="{red:mainItem?.color[index]==1,green:mainItem?.color[index]==2,blue:mainItem?.color[index]==3}">\n            <i>{{code}}</i></li>\n        </ng-container>\n      </ul>\n    </div>\n    <div class="linkbox">\n      <span navPush="HkRecordPage" [navParams]="{code:\'jslhc\'}">开奖记录</span>\n      <span navPush="HkSpecialTrendPage" [navParams]="{code:\'jslhc\'}">特码走势</span>\n      <span navPush="HkPositiveTrendPage" [navParams]="{code:\'jslhc\'}">正码走势</span>\n      <span navPush="HkZodiacTrendPage" [navParams]="{code:\'jslhc\'}">生肖走势</span>\n      <span navPush="HkSumAnalysisPage" [navParams]="{code:\'jslhc\'}">总和分析</span>\n    </div>\n  </div>\n\n  <!--香港六合彩-->\n  <div *ngIf="mainItem?.code==\'xglhc\'" class="kaiji_box kaiji_box_hk">\n    <div class="lottype">\n      <h1>香港六合彩 <span class="issue">{{mainItem[\'current_number\']}}</span><span>期</span></h1>\n      <p>下期开奖:<span class="nextissue_time">&nbsp;&nbsp;{{mainItem[\'next_time\'].substring(5, 16)}}</span></p>\n    </div>\n\n    <div class="code_box" style="display: block;">\n      <ul class="result_num" *ngIf="mainItem[\'current_code\']?.length>0"  navPush="HkRecordPage" [navParams]="{code:\'xglhc\'}">\n        <ng-container *ngFor="let code of mainItem[\'current_code\']; let index = index;">\n          <li *ngIf="index==6" class="add"><i></i></li>\n          <li\n            [ngClass]="{red:mainItem?.color[index]==1,green:mainItem?.color[index]==2,blue:mainItem?.color[index]==3}">\n            <i>{{code}}</i></li>\n        </ng-container>\n      </ul>\n    </div>\n    <div class="linkbox">\n      <span id="open_video" (click)="videoShow()">开奖视频</span>\n      <span navPush="HkRecordPage" [navParams]="{code:\'xglhc\'}">开奖记录</span>\n      <span navPush="HkSpecialTrendPage" [navParams]="{code:\'xglhc\'}">特码走势</span>\n      <span navPush="HkPositiveTrendPage" [navParams]="{code:\'xglhc\'}">正码走势</span>\n      <span navPush="HkZodiacTrendPage" [navParams]="{code:\'xglhc\'}">生肖走势</span>\n      <span navPush="HkLuzhuAnalysisPage" [navParams]="{code:\'xglhc\'}">路珠分析</span>\n    </div>\n    <div class="kaijiIn" style="display: none;">请不要走开，今天晚上21：30开奖...</div>\n  </div>\n\n\n</div>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-about-item\hk-about-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__service_alert_service__["a" /* AlertService */]])
    ], HkAboutItemComponent);
    return HkAboutItemComponent;
}());

//# sourceMappingURL=hk-about-item.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_config_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, toastCtrl, keyboard, statusBar, splashScreen, ionicApp, appConfig) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.backButtonPressed = false;
        appConfig.platform = platform.is('ios') ? 'ios' : 'android';
        var that = this;
        platform.ready().then(function () {
            statusBar.styleLightContent();
            var isNative = !!window.cordova;
            // if(!isNative) that.rootPage = TabsPage;
            if (!isNative)
                that.rootPage = "HkHomePage";
            document.addEventListener("deviceready", function () {
                // that.rootPage = TabsPage;
                that.rootPage = "HkHomePage";
                setTimeout(function () {
                    splashScreen.hide();
                }, 100);
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
                that.registerBackButtonAction();
                if (!!window.cordova) {
                    window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                }
            }, false);
            if (window.navigator.splashScreen) {
                window.navigator.splashScreen.hide();
            }
        });
    }
    //android物理返回事件
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            //回退时取消键盘
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
            var activePortal = _this.ionicApp._modalPortal.getActive() || _this.ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss().catch(function () { });
                activePortal.onDidDismiss(function () { });
                return;
            }
            //正常回退
            var activeNav = _this.nav.getActive().instance.tabRef.getSelected();
            return activeNav.canGoBack() ? activeNav.pop() : _this.showExit();
        }, 1);
    };
    //双击退出提示框
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            this.backButtonPressed = true;
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 2000); //2秒内没有再次点击返回则将触发标志标记为false
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\app\app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_4__service_app_config_service__["a" /* AppConfig */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hk_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {GeneralService} from "./general.service";

// import {AboutService} from "../pages/about/about.service";


var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* AppHttp */],
                __WEBPACK_IMPORTED_MODULE_2__app_config_service__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */],
                // GeneralService,
                // AboutService,
                __WEBPACK_IMPORTED_MODULE_5__hk_service__["a" /* HKService */],
                __WEBPACK_IMPORTED_MODULE_4__storage_service__["a" /* StorageService */]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [],
            exports: []
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.uuid = "test123456789";
        this.version = "0.0.1";
        this.localhost = false;
        var config = window.AppConfig;
        this.apiHost = config.apiHost;
        this.imgHost = config.imgHost;
        this.h5Host = config.h5Host;
        this.agentId = config.agentId;
        this.localhost = config.localhost;
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());

//# sourceMappingURL=app-config.service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map