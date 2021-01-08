webpackJsonp([4],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkPositiveTrendPageModule", function() { return HkPositiveTrendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_positive_trend__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkPositiveTrendPageModule = /** @class */ (function () {
    function HkPositiveTrendPageModule() {
    }
    HkPositiveTrendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_positive_trend__["a" /* HkPositiveTrendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_positive_trend__["a" /* HkPositiveTrendPage */]),
            ],
        })
    ], HkPositiveTrendPageModule);
    return HkPositiveTrendPageModule;
}());

//# sourceMappingURL=hk-positive-trend.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkPositiveTrendPage; });
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




var HkPositiveTrendPage = /** @class */ (function () {
    function HkPositiveTrendPage(navCtrl, navParams, hkService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.storageService = storageService;
        this.showType = -1;
        this.dayArr = [];
        this.now = new Date();
        this.option = 0;
        this.mainData = {};
        this.logo = this.storageService.get("logo");
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
    HkPositiveTrendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkPositiveTrendPage');
    };
    HkPositiveTrendPage.prototype.ionViewDidEnter = function () {
        if (this.navCtrl.getPrevious() && this.navCtrl.getPrevious().id != 'HkHomePage') {
            this.navCtrl.removeView(this.navCtrl.getPrevious());
        }
        this.getHKPositive();
        //if ($(".dayList").length > 0) {
        //  $(".dayList").last().width(this.now.getDate() * 36);
        // $(".dayList").children().last()[0].scrollIntoView();
        // }
    };
    HkPositiveTrendPage.prototype.optionChange = function (o) {
        if (o == this.option)
            return;
        this.option = o;
        this.toDrawCanvas();
    };
    HkPositiveTrendPage.prototype.toDrawCanvas = function () {
        if (this.option == 0) {
            this.drawCanvas(this.mainData['code1']);
        }
        else if (this.option == 1) {
            this.drawCanvas(this.mainData['code2']);
        }
        else if (this.option == 2) {
            this.drawCanvas(this.mainData['code3']);
        }
        else if (this.option == 3) {
            this.drawCanvas(this.mainData['code4']);
        }
        else if (this.option == 4) {
            this.drawCanvas(this.mainData['code5']);
        }
        else if (this.option == 5) {
            this.drawCanvas(this.mainData['code6']);
        }
    };
    HkPositiveTrendPage.prototype.getHKPositive = function () {
        var that = this;
        that.hkService.getHKPositive(that.code, that.myDate).then(function (rs) {
            if (!rs.code) {
                that.mainData = rs.data.result;
                if (that.code == 'xglhc') {
                    Object.keys(that.mainData).forEach(function (key) {
                        var colors = [];
                        if (that.mainData[key]['color']) {
                            that.mainData[key]['color'].forEach(function (v) {
                                if (v == 1) {
                                    colors.push("#f93353");
                                }
                                if (v == 2) {
                                    colors.push("#20c36b");
                                }
                                if (v == 3) {
                                    colors.push("#0094e7");
                                }
                            });
                            that.mainData[key]['color'] = colors;
                        }
                    });
                    that.toDrawCanvas();
                }
            }
        });
    };
    HkPositiveTrendPage.prototype.drawCanvas = function (data) {
        if (data && document.getElementsByTagName("canvas").length > 0) {
            $(".c1").attr("height", 1000);
            var c = document.getElementsByTagName("canvas")[0].getContext("2d");
            c.clearRect(0, 0, 20000, 20000);
            var b = data.issue;
            var f = data.num;
            var d = data.color;
            strokecanvas(f, b, d, true);
        }
    };
    HkPositiveTrendPage.prototype.toAnotherRecordPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkRecordPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkPositiveTrendPage.prototype.toAnotherPositivePage = function () {
        this.showType = -1;
        this.navCtrl.push("HkPositiveTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkPositiveTrendPage.prototype.toAnotherSpecialPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSpecialTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkPositiveTrendPage.prototype.toAnotherZodiacPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkZodiacTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkPositiveTrendPage.prototype.toLuzhuAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkLuzhuAnalysisPage", { code: 'xglhc' });
    };
    HkPositiveTrendPage.prototype.toSumAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSumAnalysisPage", { code: 'jslhc' });
    };
    HkPositiveTrendPage.prototype.showOption = function (event) {
        event.stopPropagation();
        this.showType = this.showType == 2 ? -1 : 2;
        if (this.showType == -1) {
            $(".jumphk").css("top", "-5000px");
        }
        else {
            $(".jumphk").css("top", this.isAndroid ? "49px" : "69px");
        }
    };
    HkPositiveTrendPage.prototype.toRoot = function () {
        this.navCtrl.popToRoot();
        // window.location.href = document.location.protocol+"//"+document.domain;
    };
    HkPositiveTrendPage.prototype.blurCtrl = function () {
        if (this.showType == 2) {
            this.showType = -1;
            $(".jumphk").css("top", "-5000px");
        }
    };
    HkPositiveTrendPage.prototype.closeShow = function () {
        this.showType = -1;
    };
    HkPositiveTrendPage.prototype.showType1 = function () {
        $(".jumphk").css("top", "-5000px");
        this.showType = this.showType == 1 ? -1 : 1;
    };
    HkPositiveTrendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-positive-trend',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-positive-trend\hk-positive-trend.html"*/'<!--\n  Generated template for the HkPositiveTrendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (click)="blurCtrl()">\n\n  <!--<ion-navbar>-->\n  <!--<ion-title>hk-positive-trend</ion-title>-->\n  <!--</ion-navbar>-->\n  <header class="headbox">\n    <div class="logo_view">\n      <img [src]="logo" (click)="toRoot()" alt="" style="height: 35px;vertical-align: super;">\n      <!--<span (click)="toRoot()">返回</span>-->\n    </div>\n    <div class="five_box" style="font-size: 20px;">\n      {{code == \'xglhc\' ? \'香港六合彩\' : \'极速六合彩\'}}\n      <!--<i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>-->\n    </div>\n    <div class="menubtn">\n      <input type="button" style="background: #e12121; border: none; line-height: 63px; height: 42px; color: #555555;" class="calendar"\n             value="{{code == \'xglhc\' ? \'极速六合彩\' : \'香港六合彩\'}}" (click)="showOption($event)">\n      <div class="jumphk"  style="top: -5000px;">\n        <ul>\n          <li>\n            <span (click)="toAnotherRecordPage()">开奖记录</span>\n          </li>\n          <li>\n            <span (click)="toAnotherPositivePage()">正码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherSpecialPage()">特码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherZodiacPage()">生肖走势</span>\n          </li>\n          <li *ngIf="code == \'jslhc\'">\n            <span (click)="toLuzhuAnalysisPage()">路珠分析</span>\n          </li>\n          <li *ngIf="code == \'xglhc\'">\n            <span (click)="toSumAnalysisPage()">总和分析</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class="headfixed">\n    <div *ngIf="code==\'jslhc\'" class="timebox">\n      <div class="ye_timelist">\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">正码走势</i>\n        </div>\n        <!--<ul class="dayList" style="float: inherit;">-->\n          <!--<li *ngFor="let t of dayArr;" [ngClass]="{checkdate:myDate==t.date}" (click)="myDate=t.date;">{{t.d}}</li>-->\n        <!--</ul>-->\n      </div>\n      <div class="top_menu_more">\n        <ion-item style="background: #f4f5f7;top: 0;">\n          <ion-label><span class="check_day">{{myDate}}</span></ion-label>\n          <ion-datetime displayFormat="YYYY年 MM月 DD日 " min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKPositive()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n    </div>\n    <div *ngIf="code==\'xglhc\'" class="goweb_gray">\n      <div>\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">正码走势</i>\n        </div>\n        <!--<a class="goweb" href="http://www.ch9588.com"><img src="../../../assets/hk-imgs/goweb_gray.png" alt=""></a>-->\n      </div>\n      <div class="menubtn">\n        <ion-item style="background: #f4f5f7;top: 6px;right: 5px;">\n          <ion-label style="margin-top: -8px;"><span class="x_check_day">{{myDate}}年</span></ion-label>\n          <ion-datetime displayFormat="YYYY年" min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKPositive()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n      <div class="marginbottom"></div>\n    </div>\n    <div id="box_view">\n      <div class="lz_type">\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==0}" (click)="optionChange(0)">正码一</span>\n        </div>\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==1}" (click)="optionChange(1)">正码二</span>\n        </div>\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==2}" (click)="optionChange(2)">正码三</span>\n        </div>\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==3}" (click)="optionChange(3)">正码四</span>\n        </div>\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==4}" (click)="optionChange(4)">正码五</span>\n        </div>\n        <div>\n          <span class="change_check" [ngClass]="{checked:option==5}" (click)="optionChange(5)">正码六</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="alert_win" *ngIf="showType==1" (click)="closeShow()" style="top: 44px;">\n    <div class="five_item">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkRecordPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="kai_history"><span></span></dt>\n              <dd>开奖记录</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSpecialTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="tema_zs"><span></span></dt>\n              <dd>特码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkZodiacTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zoo_zs"><span></span></dt>\n              <dd>生肖走势</dd>\n            </dl>\n          </span>\n      <ng-container *ngIf="code==\'jslhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSumAnalysisPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>总和分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n      <ng-container *ngIf="code==\'xglhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkLuzhuAnalysisPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>路珠分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content (click)="blurCtrl()">\n  <div class="body-box" style="overflow: visible;">\n    <div class="page-div">\n\n      <div *ngIf="code==\'jslhc\'" id="zmaul_jisu">\n        <ul class="ulFir">\n          <li>期数</li>\n          <li>号码</li>\n          <li>大小</li>\n          <li>单双</li>\n          <li>合大小</li>\n          <li>合单双</li>\n          <li>尾大小</li>\n        </ul>\n        <ng-container *ngIf="option == 0 && mainData[\'code1\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code1\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code1\'][\'color\'][i]==1,green:mainData[\'code1\'][\'color\'][i]==2,blue:mainData[\'code1\'][\'color\'][i]==3}">\n              {{mainData[\'code1\'][\'num\'][i]}}\n              </span>\n            </li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code1\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code1\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code1\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code1\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code1\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code1\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code1\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code1\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code1\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code1\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code1\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code1\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code1\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code1\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code1\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf="option == 1 && mainData[\'code2\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code2\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code2\'][\'color\'][i]==1,green:mainData[\'code2\'][\'color\'][i]==2,blue:mainData[\'code2\'][\'color\'][i]==3}">\n              {{mainData[\'code2\'][\'num\'][i]}}\n              </span>\n            </li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code2\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code2\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code2\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code2\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code2\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code2\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code2\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code2\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code2\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code2\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code2\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code2\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code2\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code2\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code2\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf="option == 2 && mainData[\'code3\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code3\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code3\'][\'color\'][i]==1,green:mainData[\'code3\'][\'color\'][i]==2,blue:mainData[\'code3\'][\'color\'][i]==3}">\n              {{mainData[\'code3\'][\'num\'][i]}}\n              </span>\n            </li>\n\n            <li\n              [ngStyle]="{\'color\':mainData[\'code3\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code3\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code3\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code3\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code3\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code3\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code3\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code3\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code3\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code3\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code3\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code3\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code3\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code3\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code3\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf="option == 3 && mainData[\'code4\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code4\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code4\'][\'color\'][i]==1,green:mainData[\'code4\'][\'color\'][i]==2,blue:mainData[\'code4\'][\'color\'][i]==3}">\n              {{mainData[\'code4\'][\'num\'][i]}}\n              </span>\n            </li>\n\n            <li\n              [ngStyle]="{\'color\':mainData[\'code4\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code4\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code4\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code4\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code4\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code4\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code4\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code4\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code4\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code4\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code4\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code4\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code4\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code4\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code4\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf="option == 4 && mainData[\'code5\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code5\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code5\'][\'color\'][i]==1,green:mainData[\'code5\'][\'color\'][i]==2,blue:mainData[\'code5\'][\'color\'][i]==3}">\n              {{mainData[\'code5\'][\'num\'][i]}}\n              </span>\n            </li>\n\n            <li\n              [ngStyle]="{\'color\':mainData[\'code5\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code5\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code5\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code5\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code5\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code5\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code5\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code5\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code5\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code5\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code5\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code5\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code5\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code5\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code5\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf="option == 5 && mainData[\'code6\']">\n          <ul class="zhmaulList" *ngFor="let item of mainData[\'code6\'][\'issue\'];let i = index;">\n            <li class="qishou">{{item}}期</li>\n            <li class="zhmaLi">\n              <span\n                [ngClass]="{red:mainData[\'code6\'][\'color\'][i]==1,green:mainData[\'code6\'][\'color\'][i]==2,blue:mainData[\'code6\'][\'color\'][i]==3}">\n              {{mainData[\'code6\'][\'num\'][i]}}\n              </span>\n            </li>\n\n            <li\n              [ngStyle]="{\'color\':mainData[\'code6\'][\'zm_dx\'][i].indexOf(\'大\')>-1||mainData[\'code6\'][\'zm_dx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code6\'][\'zm_dx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code6\'][\'zm_ds\'][i].indexOf(\'大\')>-1||mainData[\'code6\'][\'zm_ds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code6\'][\'zm_ds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code6\'][\'zm_hdx\'][i].indexOf(\'大\')>-1||mainData[\'code6\'][\'zm_hdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code6\'][\'zm_hdx\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code6\'][\'zm_hds\'][i].indexOf(\'大\')>-1||mainData[\'code6\'][\'zm_hds\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code6\'][\'zm_hds\'][i]}}</li>\n            <li\n              [ngStyle]="{\'color\':mainData[\'code6\'][\'zm_wdx\'][i].indexOf(\'大\')>-1||mainData[\'code6\'][\'zm_wdx\'][i].indexOf(\'双\')>-1 ?\'#fa3253\':\'#999\'}">{{mainData[\'code6\'][\'zm_wdx\'][i]}}</li>\n          </ul>\n        </ng-container>\n      </div>\n      <div *ngIf="code==\'xglhc\'" id="por">\n        <canvas class="c1 animated bounceInLeft" height="2934.0266666666666" width="1084"\n                style="background:#fff"></canvas>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-positive-trend\hk-positive-trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]])
    ], HkPositiveTrendPage);
    return HkPositiveTrendPage;
}());

//# sourceMappingURL=hk-positive-trend.js.map

/***/ })

});
//# sourceMappingURL=4.js.map