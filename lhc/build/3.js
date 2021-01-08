webpackJsonp([3],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkRecordPageModule", function() { return HkRecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_record__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkRecordPageModule = /** @class */ (function () {
    function HkRecordPageModule() {
    }
    HkRecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_record__["a" /* HkRecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_record__["a" /* HkRecordPage */]),
            ],
        })
    ], HkRecordPageModule);
    return HkRecordPageModule;
}());

//# sourceMappingURL=hk-record.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_hk_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_storage_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HkRecordPage = /** @class */ (function () {
    function HkRecordPage(navCtrl, navParams, hkService, storageService
        // ,private sanitizer:DomSanitizer
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.storageService = storageService;
        this.showType = -1;
        this.dayArr = [];
        this.now = new Date();
        this.mainData = [];
        this.redArr = [];
        this.greenArr = [];
        this.blueArr = [];
        this.logo = this.storageService.get("logo");
        this.redArr = this.storageService.getArray("redArr");
        this.greenArr = this.storageService.getArray("greenArr");
        this.blueArr = this.storageService.getArray("blueArr");
        this.code = this.navParams.get("code");
        if (this.code == 'jslhc') {
            var m = (this.now.getMonth() < 9 ? '0' : '') + (this.now.getMonth() + 1);
            var d = (this.now.getDate() < 10 ? '0' : '') + this.now.getDate();
            this.today = this.myDate = this.now.getFullYear() + "-" + m + "-" + d;
            this.startDay = (this.now.getFullYear() - 5) + "-" + m + "-" + d;
            //for (let i = 1; i <= this.now.getDate(); i++) {
            //      this.dayArr.push({date: this.now.getFullYear() + "-" + m + "-" + (i < 10 ? '0' : '') + i, d: i});
            //  }
        }
        else if (this.code == 'xglhc') {
            this.today = this.myDate = '' + this.now.getFullYear();
            this.startDay = '' + (this.now.getFullYear() - 5);
        }
        var u = navigator.userAgent;
        this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }
    HkRecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkRecordPage');
    };
    HkRecordPage.prototype.ionViewDidEnter = function () {
        if (this.navCtrl.getPrevious() && this.navCtrl.getPrevious().id != 'HkHomePage') {
            this.navCtrl.removeView(this.navCtrl.getPrevious());
        }
        this.getHKRecord();
        //if ($(".dayList").length > 0) {
        // $(".dayList").last().width(this.now.getDate() * 36);
        // $(".dayList").children().last()[0].scrollIntoView();
        //}
    };
    HkRecordPage.prototype.getHKRecord = function () {
        var that = this;
        that.hkService.getHKRecord(that.code, that.myDate).then(function (rs) {
            if (!rs.code) {
                that.mainData = rs.data.result;
            }
        });
    };
    HkRecordPage.prototype.toAnotherRecordPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkRecordPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkRecordPage.prototype.toAnotherPositivePage = function () {
        this.showType = -1;
        this.navCtrl.push("HkPositiveTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkRecordPage.prototype.toAnotherSpecialPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSpecialTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkRecordPage.prototype.toAnotherZodiacPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkZodiacTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkRecordPage.prototype.toLuzhuAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkLuzhuAnalysisPage", { code: 'xglhc' });
    };
    HkRecordPage.prototype.toSumAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSumAnalysisPage", { code: 'jslhc' });
    };
    HkRecordPage.prototype.showOption = function (event) {
        event.stopPropagation();
        this.showType = this.showType == 2 ? -1 : 2;
        if (this.showType == -1) {
            $(".jumphk").css("top", "-5000px");
        }
        else {
            $(".jumphk").css("top", this.isAndroid ? "49px" : "69px");
        }
    };
    HkRecordPage.prototype.toRoot = function () {
        this.navCtrl.popToRoot();
        // window.location.href = document.location.protocol+"//"+document.domain;
    };
    HkRecordPage.prototype.blurCtrl = function () {
        if (this.showType == 2) {
            this.showType = -1;
            $(".jumphk").css("top", "-5000px");
        }
    };
    HkRecordPage.prototype.closeShow = function () {
        this.showType = -1;
    };
    HkRecordPage.prototype.showType1 = function () {
        $(".jumphk").css("top", "-5000px");
        this.showType = this.showType == 1 ? -1 : 1;
    };
    HkRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-record',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-record\hk-record.html"*/'<!--\n  Generated template for the HkRecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (click)="blurCtrl()" class="headfixed">\n  <header class="headbox">\n    <div class="logo_view">\n      <img [src]="logo" (click)="toRoot()" alt="" style="height: 35px;vertical-align: super;">\n      <!--<span (click)="toRoot()">返回</span>-->\n    </div>\n    <div class="five_box" style="font-size: 20px;">\n      {{code == \'xglhc\' ? \'香港六合彩\' : \'极速六合彩\'}}\n      <!--<i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>-->\n    </div>\n    <div class="menubtn">\n          <input type="button" style="background: #e12121; border: none; line-height: 63px; height: 42px; color: #555555;" class="calendar" value="{{code == \'xglhc\' ? \'极速六合彩\' : \'香港六合彩\'}}" (click)="showOption($event)">\n      <div class="jumphk"  style="top: -5000px;">\n        <ul>\n          <li>\n            <span (click)="toAnotherRecordPage()">开奖记录</span>\n          </li>\n          <li>\n            <span (click)="toAnotherPositivePage()">正码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherSpecialPage()">特码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherZodiacPage()">生肖走势</span>\n          </li>\n          <li *ngIf="code == \'jslhc\'">\n            <span (click)="toLuzhuAnalysisPage()">路珠分析</span>\n          </li>\n          <li *ngIf="code == \'xglhc\'">\n            <span (click)="toSumAnalysisPage()">总和分析</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div  >\n    <div *ngIf="code==\'jslhc\'" class="timebox">\n      <div class="ye_timelist">\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>\n        </div>\n        <!--<ul class="dayList" style="float: inherit;">-->\n          <!--<li *ngFor="let t of dayArr;" [ngClass]="{checkdate:myDate==t.date}" (click)="myDate=t.date;">{{t.d}}</li>-->\n        <!--</ul>-->\n      </div>\n      <div class="top_menu_more">\n        <ion-item style="background: #f4f5f7;top: 0;">\n          <ion-label><span class="check_day">{{myDate}}</span></ion-label>\n          <ion-datetime displayFormat="YYYY年 MM月 DD日 " min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKRecord()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n    </div>\n    <div *ngIf="code==\'xglhc\'" class="goweb_gray">\n      <div>\n\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>\n        </div>\n        <!--<span class="goweb" (click)="toWeb()"><img src="../../../assets/hk-imgs/goweb_gray.png" alt=""></span>-->\n        <!--<a class="goweb" href="#"><img src="../../../assets/hk-imgs/goweb_gray.png" alt=""></a>-->\n      </div>\n      <div class="menubtn">\n        <ion-item style="background: #f4f5f7;top: 6px;right: 5px;">\n          <ion-label style="margin-top: 0"><span class="x_check_day">{{myDate}}年</span></ion-label>\n          <ion-datetime displayFormat="YYYY年" min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKRecord()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n      <div class="marginbottom"></div>\n    </div>\n  </div>\n  <div class="alert_win" *ngIf="showType==1" (click)="closeShow()" style="top: 44px;">\n    <div class="five_item">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zhem_zs"><span></span></dt>\n              <dd>正码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSpecialTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="tema_zs"><span></span></dt>\n              <dd>特码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkZodiacTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zoo_zs"><span></span></dt>\n              <dd>生肖走势</dd>\n            </dl>\n          </span>\n      <ng-container *ngIf="code==\'jslhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSumAnalysisPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>总和分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n      <ng-container *ngIf="code==\'xglhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkLuzhuAnalysisPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>路珠分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content (click)="blurCtrl()">\n  <div class="body-box" style="overflow: visible;">\n    <div class="page-div">\n\n\n      <div class="num_history animated fadeInUp">\n        <ng-container *ngIf="mainData && mainData?.length>0">\n          <div class="num_row" *ngFor="let item of mainData;">\n            <div class="his_date" *ngIf="code==\'jslhc\'"><p>{{item?.issue}}期</p>\n              <p class="date_md">{{item[\'current_time\']?.substring(0, 5)}}</p></div>\n            <div class="his_date" *ngIf="code==\'xglhc\'"><p style="text-align: center;">\n              第{{item?.issue.toString().substring(4)}}期</p>\n              <p class="date_md">{{item[\'current_time\']}}</p></div>\n            <div class="num_item">\n              <ul>\n                <ng-container *ngFor="let temp of item[\'num\'];let ti = index;">\n                  <li class="add_li" *ngIf="ti==6"><p class="add"></p>\n                    <div></div>\n                  </li>\n                  <li><p\n                    [ngClass]="{red:redArr?.indexOf(temp)!=-1,green:greenArr?.indexOf(temp)!=-1,blue:blueArr?.indexOf(temp)!=-1}">{{temp}}</p>\n                    <div>{{item[\'chinese_zodiac\'][ti]}}</div>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <div id="datePlugin" style="font-size:13px"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-record\hk-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]
            // ,private sanitizer:DomSanitizer
        ])
    ], HkRecordPage);
    return HkRecordPage;
}());

//# sourceMappingURL=hk-record.js.map

/***/ })

});
//# sourceMappingURL=3.js.map