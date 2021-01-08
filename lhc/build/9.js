webpackJsonp([9],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkCalendarPageModule", function() { return HkCalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_calendar__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkCalendarPageModule = /** @class */ (function () {
    function HkCalendarPageModule() {
    }
    HkCalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_calendar__["a" /* HkCalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_calendar__["a" /* HkCalendarPage */]),
            ],
        })
    ], HkCalendarPageModule);
    return HkCalendarPageModule;
}());

//# sourceMappingURL=hk-calendar.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkCalendarPage; });
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
 * Generated class for the HkCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HkCalendarPage = /** @class */ (function () {
    function HkCalendarPage(navCtrl, navParams, hkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.mainData = [];
        this.hasNext = true;
        this.cTimeStamp = new Date().getTime();
        this.tempDate = new Date().getFullYear() + "-" + ((new Date().getMonth() < 9) ? 0 : "") + (new Date().getMonth() + 1);
        // this.tempDate ="2019-06";
        this.getHkCalendar(function () {
        });
    }
    HkCalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkCalendarPage');
    };
    HkCalendarPage.prototype.getHkCalendar = function (callback) {
        var that = this;
        that.hkService.getHkCalendar(that.tempDate).then(function (rs) {
            callback();
            if (!rs.code) {
                // let first: number;
                // let last: number;
                // first = new Date((that.tempDate + "-01").replace(/-/g,"/")).getDay();
                // rs.data.first = first;
                // for (let i = 0; i < first; i++) {
                //   rs.data.kj_date.unshift([0, 0]);
                // }
                // last = 6 - that.getLastDay(Number(that.tempDate.split("-")[0]), Number(that.tempDate.split("-")[1]));
                // for (let i = 0; i < last; i++) {
                //   rs.data.kj_date.push([0, 0]);class="jumphk" style="top: 63px;">
                // }
                that.mainData.push(rs.data);
                that.hasNext = rs.data.last_next;
                if (rs.data['kj_date'].length > 0) {
                    if (that.tempDate.split("-")[1] == 12) {
                        that.tempDate = (Number(that.tempDate.split("-")[0]) + 1) + "-01";
                    }
                    else {
                        that.tempDate = that.tempDate.split("-")[0] + "-" + (Number(that.tempDate.split("-")[1]) < 9 ? 0 : '') + (Number(that.tempDate.split("-")[1]) + 1);
                    }
                }
            }
        });
    };
    HkCalendarPage.prototype.doInfinite = function (infiniteScroll) {
        this.getHkCalendar(function () {
            infiniteScroll.complete();
        });
    };
    //获得某月的最后一天周几
    HkCalendarPage.prototype.getLastDay = function (year, month) {
        var new_year = year; //取当前的年份
        var new_month = month++; //取下一个月的第一天，方便计算（最后一天不固定）
        if (month > 12) {
            new_month -= 12; //月份减
            new_year++; //年份增
        }
        var new_date = new Date(new_year, new_month, 1); //取当年当月中的第一天
        return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDay(); //获取当月最后一天日期
    };
    HkCalendarPage.prototype.toTimeStamp = function (str) {
        return new Date(str.replace(/-/g, "/")).getTime();
    };
    HkCalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-calendar',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-calendar\hk-calendar.html"*/'<!--\n  Generated template for the HkCalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!--<ion-navbar>-->\n  <!--<ion-title>hk-calendar</ion-title>-->\n  <!--</ion-navbar>-->\n  <header class="headbox">\n    <div class="logo_view">\n      <span navPop>返回</span>\n    </div>\n    <div class="five_box">\n      <i style="background: 0;font-weight: normal;font-style: normal;">开奖日历</i>\n    </div>\n    <div class="menubtn"></div>\n  </header>\n  <div class="week" style="position: absolute;">\n    <ul>\n      <li>日</li>\n      <li>一</li>\n      <li>二</li>\n      <li>三</li>\n      <li>四</li>\n      <li>五</li>\n      <li>六</li>\n    </ul>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class="calendar-body-box">\n    <div class="pagediv">\n\n      <div class="date_view">\n        <ng-container *ngFor="let item of mainData;">\n          <ng-container *ngIf="item[\'kj_date\']?.length>0">\n            <div class="month" style="margin-top: 0px;">\n              <div\n                [ngClass]="{one:item?.first==1,two:item?.first==2,three:item?.first==3,four:item?.first==4,five:item?.first==5,six:item?.first==6}"\n              ><p>{{item?.date?.split("-")[1] - 0}}月</p></div>\n            </div>\n            <div class="day">\n              <ul>\n                <li *ngFor="let temp of item[\'kj_date\'];">\n                  <span *ngIf="temp[0]==0"></span>\n                  <ng-container *ngIf="temp[0]!=0">\n                    <ng-container *ngIf="temp[1]==1">\n                      <ng-container *ngIf="toTimeStamp(item?.date+\'-\'+temp[0])<=cTimeStamp">\n                        <span class="grey">{{temp[0]}}</span>\n                      </ng-container>\n                      <ng-container *ngIf="toTimeStamp(item?.date+\'-\'+temp[0])>cTimeStamp">\n                        <span class="red">{{temp[0]}}</span>\n                      </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf="temp[1]!=1">\n                      <span>{{temp[0]}}</span>\n                    </ng-container>\n                  </ng-container>\n                </li>\n              </ul>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class="fixed_bottom">\n        <div>\n          <span class="red"></span> 搅珠日\n        </div>\n        <div>\n          <span class="grey"></span> 已开奖日期\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="hasNext">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="加载中">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-calendar\hk-calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */]])
    ], HkCalendarPage);
    return HkCalendarPage;
}());

//# sourceMappingURL=hk-calendar.js.map

/***/ })

});
//# sourceMappingURL=9.js.map