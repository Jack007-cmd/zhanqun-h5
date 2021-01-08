webpackJsonp([1],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkSumAnalysisPageModule", function() { return HkSumAnalysisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_sum_analysis__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkSumAnalysisPageModule = /** @class */ (function () {
    function HkSumAnalysisPageModule() {
    }
    HkSumAnalysisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_sum_analysis__["a" /* HkSumAnalysisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_sum_analysis__["a" /* HkSumAnalysisPage */]),
            ],
        })
    ], HkSumAnalysisPageModule);
    return HkSumAnalysisPageModule;
}());

//# sourceMappingURL=hk-sum-analysis.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkSumAnalysisPage; });
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




var HkSumAnalysisPage = /** @class */ (function () {
    function HkSumAnalysisPage(navCtrl, navParams, hkService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.storageService = storageService;
        this.showType = -1;
        this.dayArr = [];
        this.now = new Date();
        this.mainData = [];
        this.logo = this.storageService.get("logo");
        this.code = this.navParams.get("code");
        var m = (this.now.getMonth() < 9 ? '0' : '') + (this.now.getMonth() + 1);
        var d = (this.now.getDate() < 10 ? '0' : '') + this.now.getDate();
        this.today = this.myDate = this.now.getFullYear() + "-" + m + "-" + d;
        this.startDay = (this.now.getFullYear() - 5) + "-" + m + "-" + d;
        //for (let i = 1; i <= this.now.getDate(); i++) {
        //      this.dayArr.push({date: this.now.getFullYear() + "-" + m + "-" + (i < 10 ? '0' : '') + i, d: i});
        //  }
        var u = navigator.userAgent;
        this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }
    HkSumAnalysisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkSumAnalysisPage');
    };
    HkSumAnalysisPage.prototype.ionViewDidEnter = function () {
        if (this.navCtrl.getPrevious() && this.navCtrl.getPrevious().id != 'HkHomePage') {
            this.navCtrl.removeView(this.navCtrl.getPrevious());
        }
        this.getHkSumAnalysis();
        //if ($(".dayList").length > 0) {
        //  $(".dayList").last().width(this.now.getDate() * 36);
        // $(".dayList").children().last()[0].scrollIntoView();
        // }
    };
    HkSumAnalysisPage.prototype.getHkSumAnalysis = function () {
        var that = this;
        that.hkService.getHkSumAnalysis(that.code, that.myDate).then(function (rs) {
            if (!rs.code) {
                that.mainData = rs.data.result;
            }
        });
    };
    HkSumAnalysisPage.prototype.toAnotherRecordPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkRecordPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSumAnalysisPage.prototype.toAnotherPositivePage = function () {
        this.showType = -1;
        this.navCtrl.push("HkPositiveTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSumAnalysisPage.prototype.toAnotherSpecialPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSpecialTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSumAnalysisPage.prototype.toAnotherZodiacPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkZodiacTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSumAnalysisPage.prototype.toLuzhuAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkLuzhuAnalysisPage", { code: 'xglhc' });
    };
    HkSumAnalysisPage.prototype.toSumAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSumAnalysisPage", { code: 'jslhc' });
    };
    HkSumAnalysisPage.prototype.showOption = function (event) {
        event.stopPropagation();
        this.showType = this.showType == 2 ? -1 : 2;
        if (this.showType == -1) {
            $(".jumphk").css("top", "-5000px");
        }
        else {
            $(".jumphk").css("top", this.isAndroid ? "49px" : "69px");
        }
    };
    HkSumAnalysisPage.prototype.toRoot = function () {
        this.navCtrl.popToRoot();
        // window.location.href = document.location.protocol+"//"+document.domain;
    };
    HkSumAnalysisPage.prototype.blurCtrl = function () {
        if (this.showType == 2) {
            this.showType = -1;
            $(".jumphk").css("top", "-5000px");
        }
    };
    HkSumAnalysisPage.prototype.closeShow = function () {
        this.showType = -1;
    };
    HkSumAnalysisPage.prototype.showType1 = function () {
        $(".jumphk").css("top", "-5000px");
        this.showType = this.showType == 1 ? -1 : 1;
    };
    HkSumAnalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-sum-analysis',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-sum-analysis\hk-sum-analysis.html"*/'<!--\n  Generated template for the HkSumAnalysisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (click)="blurCtrl()">\n\n  <header class="headbox">\n    <div class="logo_view">\n      <img [src]="logo" (click)="toRoot()" alt="" style="height: 35px;vertical-align: super;">\n      <!--<span (click)="toRoot()">返回</span>-->\n    </div>\n    <div class="five_box" style="font-size: 20px;">\n      {{code == \'xglhc\' ? \'香港六合彩\' : \'极速六合彩\'}}\n      <!--<i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>-->\n    </div>\n    <div class="menubtn">\n      <input type="button" style="background: #e12121; border: none; line-height: 63px; height: 42px; color: #555555;" class="calendar"\n             value="香港六合彩" (click)="showOption($event)">\n      <div class="jumphk" style="top: -5000px;">\n        <ul>\n          <li>\n            <span (click)="toAnotherRecordPage()">开奖记录</span>\n          </li>\n          <li>\n            <span (click)="toAnotherPositivePage()">正码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherSpecialPage()">特码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherZodiacPage()">生肖走势</span>\n          </li>\n          <li *ngIf="code == \'jslhc\'">\n            <span (click)="toLuzhuAnalysisPage()">路珠分析</span>\n          </li>\n          <li *ngIf="code == \'xglhc\'">\n            <span (click)="toSumAnalysisPage()">总和分析</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class="headfixed">\n    <div class="timebox">\n      <div class="ye_timelist">\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">总和分析</i>\n        </div>\n        <!--<ul class="dayList" style="float: inherit;">-->\n          <!--<li *ngFor="let t of dayArr;" [ngClass]="{checkdate:myDate==t.date}" (click)="myDate=t.date;">{{t.d}}</li>-->\n        <!--</ul>-->\n      </div>\n      <div class="top_menu_more">\n        <ion-item style="background: #f4f5f7;top: 0;">\n          <ion-label><span class="check_day" id="myDate">{{myDate}}</span></ion-label>\n          <ion-datetime displayFormat="YYYY年 MM月 DD日 " min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHkSumAnalysis()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <div class="alert_win" *ngIf="showType==1" (click)="closeShow()" style="top: 44px;">\n    <div class="five_item">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkRecordPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="kai_history"><span></span></dt>\n              <dd>开奖记录</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage"\n            [navParams]="{code:code}">\n            <dl>\n              <dt class="zhem_zs"><span></span></dt>\n              <dd>正码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSpecialTrendPage"\n            [navParams]="{code:code}">\n            <dl>\n              <dt class="tema_zs"><span></span></dt>\n              <dd>特码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkZodiacTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zoo_zs"><span></span></dt>\n              <dd>生肖走势</dd>\n            </dl>\n          </span>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content (click)="blurCtrl()">\n  <div class="body-box" style="overflow: visible;">\n    <div class="page-div">\n\n      <div class="lhzflist">\n        <ul class="ulfir">\n          <li>期数</li>\n          <li>总和</li>\n          <li>单双</li>\n          <li>大小</li>\n          <li>七色波</li>\n          <li>总肖</li>\n        </ul>\n        <ul class="ulist" *ngFor="let item of mainData;">\n          <li>{{item?.issue}}期</li>\n          <li>{{item[\'sum_total\']}}</li>\n          <li [ngStyle]="{\'color\':item?.ds==\'双\'?\'#fa3253\':\'#999\'}">{{item?.ds}}</li>\n          <li [ngStyle]="{\'color\':item?.dx==\'大\'?\'#fa3253\':\'#999\'}">{{item?.dx}}</li>\n          <li>{{item?.qsb}}</li>\n          <li><span>{{item[\'zodiac_num\']}}</span><span\n            [ngStyle]="{\'color\':item[\'zodiac_ds\']==\'双\'?\'#fa3253\':\'#999\'}">{{item[\'zodiac_ds\']}}</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-sum-analysis\hk-sum-analysis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]])
    ], HkSumAnalysisPage);
    return HkSumAnalysisPage;
}());

//# sourceMappingURL=hk-sum-analysis.js.map

/***/ })

});
//# sourceMappingURL=1.js.map