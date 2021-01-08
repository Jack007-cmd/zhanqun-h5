webpackJsonp([8],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkHomePageModule", function() { return HkHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_home__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_hk_common_module__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HkHomePageModule = /** @class */ (function () {
    function HkHomePageModule() {
    }
    HkHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_home__["a" /* HkHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_home__["a" /* HkHomePage */]), __WEBPACK_IMPORTED_MODULE_3__app_hk_common_module__["a" /* HKCommonModule */]
            ],
        })
    ], HkHomePageModule);
    return HkHomePageModule;
}());

//# sourceMappingURL=hk-home.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkHomePage; });
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
 * Generated class for the HkHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HkHomePage = /** @class */ (function () {
    function HkHomePage(navCtrl, navParams, hkService, alertService, storageService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.alertService = alertService;
        this.storageService = storageService;
        this.bannerArr = [];
        this.typeTable = {};
        this.codeArr = ['xglhc', 'jslhc']; //香港六合彩：xglhc 极速六合彩：jslhc
        this.showType = 0;
        this.redArr = [];
        this.greenArr = [];
        this.blueArr = [];
        this.objectKeys = Object.keys;
        this.news = [];
        this.showVideo = false;
        this.hkService.getServerTime().then(function (res) {
            if (res.code == '0') {
                _this.storageService.set('timeDiff', (Number(res.data) - new Date().getTime()).toString());
            }
        });
        this.getCommon();
        this.getBannerArr();
        this.getTypeTable();
        this.getNewsData();
    }
    HkHomePage.prototype.getData = function (event) {
        this.showVideo = event;
    };
    HkHomePage.prototype.getBannerArr = function () {
        var that = this;
        // 获取轮播图数据
        that.hkService.getBannerArr().then(function (res) {
            if (!res.code) {
                that.bannerArr = res;
            }
            else {
                that.alertService.msg(res.error);
            }
        }).catch(function () {
            that.alertService.msg("网络异常，请稍后再试");
        });
    };
    /*自动轮播*/
    HkHomePage.prototype.autoSlide = function (slider, time) {
        return setInterval(function () {
            if (!slider.isEnd()) {
                slider.slideNext(1000);
            }
            else {
                slider.slideTo(0, 1000);
            }
        }, time);
    };
    /*开始轮播*/
    HkHomePage.prototype.startSlide = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.slides && _this.slides.length() > 1 && !_this.timeTask1)
                _this.timeTask1 = _this.autoSlide(_this.slides, 3000);
        }, 200);
    };
    /*停止轮播*/
    HkHomePage.prototype.stopSlide = function () {
        if (this.timeTask1) {
            clearInterval(this.timeTask1);
            this.timeTask1 = null;
        }
    };
    HkHomePage.prototype.getTypeTable = function () {
        var that = this;
        that.hkService.getTypeTable().then(function (rs) {
            if (!rs.code) {
                that.typeTable = rs.data;
                that.redArr = rs.data.color['红'].toString().split(",");
                that.blueArr = rs.data.color['蓝'].toString().split(",");
                that.greenArr = rs.data.color['绿'].toString().split(",");
                that.storageService.setArray("redArr", that.redArr);
                that.storageService.setArray("blueArr", that.blueArr);
                that.storageService.setArray("greenArr", that.greenArr);
            }
            else {
                that.alertService.msg("网络异常，请稍后再试");
            }
        }).catch(function () {
            that.alertService.msg("网络异常，请稍后再试");
        });
    };
    HkHomePage.prototype.getNewsData = function () {
        var that = this;
        that.hkService.getNewsData('yctj ', 1, 5).then(function (rs) {
            if (!rs.code) {
                that.news = rs.data;
            }
            else {
                that.alertService.msg("网络异常，请稍后再试");
            }
        }).catch(function () {
            that.alertService.msg("网络异常，请稍后再试");
        });
    };
    HkHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkHomePage');
    };
    HkHomePage.prototype.toNextPage = function () {
        this.navCtrl.push("HkNewsPage");
    };
    HkHomePage.prototype.openAd = function (url) {
        window.open(url, '_blank');
    };
    //获取logo
    HkHomePage.prototype.getCommon = function () {
        var _this = this;
        this.hkService.getCommon().then(function (rs) {
            if (!rs.code) {
                _this.logo = document.location.protocol + "//" + document.domain + rs.logo;
                _this.storageService.set('logo', _this.logo);
            }
        });
    };
    HkHomePage.prototype.openLottery = function () {
        // window.location.href = "http://www.123kkc.com";
        window.location.href = document.location.protocol + "//" + document.domain;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides '),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HkHomePage.prototype, "slides", void 0);
    HkHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-home',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-home\hk-home.html"*/'<!--\n  Generated template for the HkHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!--<ion-navbar>-->\n  <!--<ion-title>hk-home</ion-title>-->\n  <!--</ion-navbar>-->\n  <header class="headbox">\n    <div class="logo_view" style="margin-top: -15px;">\n\n      <!--<span href="http://www.ch9588.com" class="logo"><i></i></span>-->\n      <!--<img src="http://www.123kkc.com/storage/images/202001/web_logo_xhSR2QXTmHPzwhfQ7omX8aMoBu2dWIYMf5yhkfPp.png" (click)="openLottery()"  alt="" style="height: 35px;vertical-align: middle;">-->\n      <img [src]="logo" (click)="openLottery()"  alt="" style="height: 44px;vertical-align: middle;">\n      <!--<span  class="logo"><img [src]="logo" alt="" style="height: 35px;"></span>-->\n    </div>\n    <div class="menubtn">\n      <span navPush="HkCalendarPage" class="calendar"><img src="./assets/imgs/calendar.png" alt=""></span>\n<!--      <span navPush="HkCalendarPage" class="calendar"><i></i></span> -->\n      <!--<a class="go168" href="https://1682019.co" target="_blank"><i></i></a>-->\n    </div>\n  </header>\n</ion-header>\n\n\n<ion-content>\n  <div class="body-box">\n    <div class="pagediv">\n      <div *ngIf="showVideo" class="select-page ifame_box anheight" style="position: fixed;">\n        <ion-backdrop (click)="showVideo=false" role="presentation" tappable="" style="opacity: 0.26;"></ion-backdrop>\n      <!--<div *ngIf="showVideo" class="ifame_box anheight">-->\n        <div class="close">\n          <span style="float: left;">香港六合彩开奖视频</span>\n        <span style="float: right;" class="vide_close" (click)="showVideo=false">关闭</span>\n      </div>\n        <iframe class="content" src="http://lh8898.com/lottery/sixColorAnimate.html" frameborder="0"></iframe>\n      </div>\n      <div class="slides" *ngIf="bannerArr && bannerArr?.length>0">\n        <ion-slides #slides class="focus" pager loop="true" autoplay="3000">\n          <ion-slide *ngFor="let item of bannerArr;">\n            <div class="slide_item">\n              <img style="width: 100%;" src="{{item?.image}}" (click)="openAd(item.url)" onerror="this.src=\'assets/imgs/slide_img.jpg\'"/>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <hk-about-item [hkCode]="item" (event)="getData($event)" *ngFor="let item of codeArr;"></hk-about-item>\n\n      <div style="display: block;" id="icom_box" *ngIf="news && news?.length>0">\n        <div class="icom">\n          <div>\n            <span class="line_"></span>\n            <h2>六合资料</h2>\n          </div>\n          <div>\n            <div navPush="HkNewsPage">\n              更多\n              <i></i>\n            </div>\n          </div>\n        </div>\n        <div class="com_box">\n          <div class="icom_item" *ngFor="let item of news;" navPush="HkNewsDetailPage"\n               [navParams]="{id:item[\'id\'],option:0}">\n            <div><p class="i_title">{{item.title}}</p>\n              <span class="icom_date">{{item[\'created_at\']?.substring(0, 10)}}</span></div>\n          </div>\n        </div>\n      </div>\n      <div style="display: block;" id="comparison_table">\n        <div class="table_type">\n          <div>\n            <span [ngClass]="{checked:showType==0}" (click)="showType=0">波色</span>\n          </div>\n          <div>\n            <span [ngClass]="{checked:showType==1}" (click)="showType=1">生肖</span>\n          </div>\n          <div>\n            <span [ngClass]="{checked:showType==2}" (click)="showType=2">五行</span>\n          </div>\n          <div>\n            <span [ngClass]="{checked:showType==3}" (click)="showType=3">家禽野兽</span>\n          </div>\n        </div>\n        <div id="tab_float">\n          <div class="bo_color t1 tt" *ngIf="showType==0 && typeTable?.color">\n            <div class="rows">\n              <div class="left ">红波</div>\n              <div class="left red" *ngIf="typeTable?.color[\'红\']?.length>0">\n                <ul>\n                  <ng-container *ngFor="let rcode of typeTable?.color[\'红\'];let ri = index;">\n                    <li *ngIf="ri<10">{{rcode < 10 ? (\'0\' + rcode) : rcode}}</li>\n                  </ng-container>\n                </ul>\n                <ul>\n                  <ng-container *ngFor="let rcode of typeTable?.color[\'红\'];let ri = index;">\n                    <li *ngIf="ri>9">{{rcode < 10 ? (\'0\' + rcode) : rcode}}</li>\n                  </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class="rows">\n              <div class="left ">蓝波</div>\n              <div class="left blue" *ngIf="typeTable?.color[\'蓝\']?.length>0">\n                <ul>\n                  <ng-container *ngFor="let bcode of typeTable?.color[\'蓝\'];let bi = index;">\n                    <li *ngIf="bi<10">{{bcode < 10 ? (\'0\' + bcode) : bcode}}</li>\n                  </ng-container>\n                </ul>\n                <ul>\n                  <ng-container *ngFor="let bcode of typeTable?.color[\'蓝\'];let bi = index;">\n                    <li *ngIf="bi>9">{{bcode < 10 ? (\'0\' + bcode) : bcode}}</li>\n                  </ng-container>\n                </ul>\n              </div>\n            </div>\n            <div class="rows">\n              <div class="left ">绿波</div>\n              <div class="left green" *ngIf="typeTable?.color[\'绿\']?.length>0">\n                <ul>\n                  <ng-container *ngFor="let gcode of typeTable?.color[\'绿\'];let gi = index;">\n                    <li *ngIf="gi<10">{{gcode < 10 ? (\'0\' + gcode) : gcode}}</li>\n                  </ng-container>\n                </ul>\n                <ul>\n                  <ng-container *ngFor="let gcode of typeTable?.color[\'绿\'];let gi = index;">\n                    <li *ngIf="gi>9">{{gcode < 10 ? (\'0\' + gcode) : gcode}}</li>\n                  </ng-container>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="zoo t2 tt" *ngIf="showType==1 && typeTable?.zodiacCode">\n            <div class="row">\n              <div class="zodiac-line">\n                <span>鼠</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'鼠\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>牛</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'牛\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class="row">\n              <div class="zodiac-line">\n                <span>虎</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'虎\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>兔</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'兔\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class="row">\n              <div class="zodiac-line">\n                <span>龙</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'龙\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>蛇</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'蛇\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class="row">\n              <div class="zodiac-line">\n                <span>马</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'马\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>羊</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'羊\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class="row">\n              <div class="zodiac-line">\n                <span>猴</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'猴\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>鸡</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'鸡\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class="row">\n              <div class="zodiac-line">\n                <span>狗</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'狗\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n              <div>\n                <span>猪</span>\n                <ul>\n                  <li *ngFor="let m of typeTable?.zodiacCode[\'猪\'];"\n                      [ngClass]="{red:redArr?.indexOf(m.toString())!=-1,green:greenArr?.indexOf(m.toString())!=-1,blue:blueArr?.indexOf(m.toString())!=-1}">\n                    {{m < 10 ? (\'0\' + m) : m}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="five_row t3 tt" *ngIf="showType==2">\n            <div class="row" *ngFor="let key of objectKeys(typeTable[\'five_elements\']);">\n              <div>\n                <span>{{key}}</span>\n                <ul>\n                  <li *ngFor="let f of typeTable[\'five_elements\'][key];"\n                      [ngClass]="{red:redArr?.indexOf(f.toString())!=-1,green:greenArr?.indexOf(f.toString())!=-1,blue:blueArr?.indexOf(f.toString())!=-1}">\n                    {{f < 10 ? (\'0\' + f) : f}}\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="jaye t4 tt" *ngIf="showType==3">\n            <div class="row" *ngFor="let key of objectKeys(typeTable[\'jqys\']);">\n              <div>\n                <span>{{key}}</span>\n                <ul>\n                  <li *ngFor="let item of typeTable[\'jqys\'][key]">{{item}}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-home\hk-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */],
            __WEBPACK_IMPORTED_MODULE_4__service_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]])
    ], HkHomePage);
    return HkHomePage;
}());

//# sourceMappingURL=hk-home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map