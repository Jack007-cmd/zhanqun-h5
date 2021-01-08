webpackJsonp([6],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkNewsDetailPageModule", function() { return HkNewsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_news_detail__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkNewsDetailPageModule = /** @class */ (function () {
    function HkNewsDetailPageModule() {
    }
    HkNewsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_news_detail__["a" /* HkNewsDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_news_detail__["a" /* HkNewsDetailPage */]),
            ],
        })
    ], HkNewsDetailPageModule);
    return HkNewsDetailPageModule;
}());

//# sourceMappingURL=hk-news-detail.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkNewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_hk_service__ = __webpack_require__(101);
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
 * Generated class for the HkNewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HkNewsDetailPage = /** @class */ (function () {
    function HkNewsDetailPage(navCtrl, navParams, hkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.mainData = {};
        this.option = this.navParams.get("option");
        this.ID = this.navParams.get("id");
        this.getNewsDetail();
    }
    HkNewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkNewsDetailPage');
    };
    HkNewsDetailPage.prototype.getNewsDetail = function () {
        var that = this;
        that.hkService.getNewsDetail(that.ID).then(function (rs) {
            if (!rs.code) {
                that.mainData = rs;
            }
        });
    };
    HkNewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-news-detail',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-news\hk-news-detail\hk-news-detail.html"*/'<!--\n  Generated template for the HkNewsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!--<ion-navbar>-->\n  <!--<ion-title>hk-news-detail</ion-title>-->\n  <!--</ion-navbar>-->\n  <header class="headbox">\n    <div class="logo_view">\n      <span navPop>返回</span>\n    </div>\n    <div>\n      <i id="title">{{option==0?\'推荐预测\':\'专家心水\'}}</i>\n    </div>\n    <!--<div class="menubtn">-->\n      <!--<a href="kaijiDate.html" class="calendar"><i></i></a>-->\n    <!--</div>-->\n    <!--<div class="logo_view">-->\n      <!--<span navPop>返回</span>-->\n    <!--</div>-->\n    <!--<div>-->\n      <!--<i>六合资料</i>-->\n    <!--</div>-->\n  </header>\n</ion-header>\n\n\n<ion-content>\n  <div class="pagediv">\n\n    <div class="datum_title">\n      <div class="new_title">{{mainData?.title}}</div>\n      <p class="new_date">{{mainData[\'created_at\']?.substring(0, 10)}}</p>\n    </div>\n    <div class="new_detail">\n      <div class="new_content" [innerHTML]="mainData?.content">\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-news\hk-news-detail\hk-news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */]])
    ], HkNewsDetailPage);
    return HkNewsDetailPage;
}());

//# sourceMappingURL=hk-news-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map