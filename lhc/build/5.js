webpackJsonp([5],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkNewsPageModule", function() { return HkNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_news__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkNewsPageModule = /** @class */ (function () {
    function HkNewsPageModule() {
    }
    HkNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_news__["a" /* HkNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_news__["a" /* HkNewsPage */]),
            ],
        })
    ], HkNewsPageModule);
    return HkNewsPageModule;
}());

//# sourceMappingURL=hk-news.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkNewsPage; });
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
 * Generated class for the HkNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HkNewsPage = /** @class */ (function () {
    function HkNewsPage(navCtrl, navParams, hkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.option = 0;
        this.news = [];
        this.page = 1;
        this.hasNext = true;
        this.getNewsData(function () {
        });
    }
    HkNewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkNewsPage');
    };
    HkNewsPage.prototype.optionChange = function (o) {
        if (this.option == o)
            return;
        this.option = o;
        this.news = [];
        this.page = 1;
        this.hasNext = true;
        this.getNewsData(function () {
        });
    };
    HkNewsPage.prototype.getNewsData = function (callback) {
        var that = this;
        that.hkService.getNewsData(that.option == 0 ? 'yctj ' : 'zjxs', that.page, 5).then(function (rs) {
            callback();
            if (!rs.code) {
                that.news = that.news.concat(rs.data);
                if (that.page * 5 < rs.total) {
                    that.page += 1;
                    that.hasNext = true;
                }
                else {
                    that.hasNext = false;
                }
            }
        });
    };
    HkNewsPage.prototype.doInfinite = function () {
        this.getNewsData(function () {
            // infiniteScroll.complete();
        });
    };
    HkNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-news',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-news\hk-news.html"*/'<!--\n  Generated template for the HkNewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!--<ion-navbar>-->\n  <!--<ion-title>hk-news</ion-title>-->\n  <!--</ion-navbar>-->\n  <header class="headbox">\n    <div class="logo_view">\n      <span navPop>返回</span>\n    </div>\n    <div>\n      <i>六合资料</i>\n    </div>\n    <!--<div class="menubtn">-->\n    <!--<a href="kaijiDate.html" class="calendar"><i></i></a>-->\n    <!--</div>-->\n  </header>\n</ion-header>\n\n\n<ion-content>\n  <div class="pagediv">\n\n    <div class="datum_type">\n      <div>\n        <span class="change_check news_1 d_left" [ngClass]="{checked:option==0}" (click)="optionChange(0)">推荐预测</span>\n      </div>\n      <div>\n        <span class="change_check news_2 d_right" [ngClass]="{checked:option==1}" (click)="optionChange(1)">专家心水</span>\n      </div>\n    </div>\n    <div class="new_view">\n      <div class="conta_view">\n        <div class="new_item  new_item_box" id="wrapper_left">\n          <ul class="left_ul">\n            <li class="contant">\n              <div class="row" *ngFor="let item of news;" navPush="HkNewsDetailPage"\n                   [navParams]="{id:item[\'id\'],option:option}">\n                <div class="left"><p class="new_title">{{item?.title}}</p>\n                  <div class="new_date">{{item[\'created_at\']?.substring(0, 10)}}</div>\n                </div>\n                <div class="right goright"><p></p></div>\n              </div>\n            </li>\n            <li *ngIf="hasNext">\n              <div class="no_more">\n                <div (click)="doInfinite()"> 加载更多 </div>\n              </div>\n            </li>\n            <li *ngIf="!hasNext">\n              <div class="no_more">\n                <div>没有了</div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!--<ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="hasNext">-->\n    <!--<ion-infinite-scroll-content-->\n      <!--loadingSpinner="bubbles"-->\n      <!--loadingText="加载中">-->\n    <!--</ion-infinite-scroll-content>-->\n  <!--</ion-infinite-scroll>-->\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-news\hk-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */]])
    ], HkNewsPage);
    return HkNewsPage;
}());

//# sourceMappingURL=hk-news.js.map

/***/ })

});
//# sourceMappingURL=5.js.map