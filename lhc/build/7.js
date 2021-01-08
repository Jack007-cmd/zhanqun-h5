webpackJsonp([7],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkLuzhuAnalysisPageModule", function() { return HkLuzhuAnalysisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_luzhu_analysis__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkLuzhuAnalysisPageModule = /** @class */ (function () {
    function HkLuzhuAnalysisPageModule() {
    }
    HkLuzhuAnalysisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_luzhu_analysis__["a" /* HkLuzhuAnalysisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_luzhu_analysis__["a" /* HkLuzhuAnalysisPage */]),
            ],
        })
    ], HkLuzhuAnalysisPageModule);
    return HkLuzhuAnalysisPageModule;
}());

//# sourceMappingURL=hk-luzhu-analysis.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkLuzhuAnalysisPage; });
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




var HkLuzhuAnalysisPage = /** @class */ (function () {
    function HkLuzhuAnalysisPage(navCtrl, navParams, hkService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.storageService = storageService;
        this.showType = -1;
        this.dayArr = [];
        this.now = new Date();
        this.option = 0;
        this.mainData = [];
        this.logo = this.storageService.get("logo");
        this.code = this.navParams.get("code");
        this.today = this.myDate = '' + this.now.getFullYear();
        this.startDay = '' + (this.now.getFullYear() - 5);
        var u = navigator.userAgent;
        this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }
    HkLuzhuAnalysisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkLuzhuAnalysisPage');
    };
    HkLuzhuAnalysisPage.prototype.ionViewDidEnter = function () {
        if (this.navCtrl.getPrevious() && this.navCtrl.getPrevious().id != 'HkHomePage') {
            this.navCtrl.removeView(this.navCtrl.getPrevious());
        }
        this.getHkLuzhuAnalysis();
        // let children = document.getElementById("dayList").children;
        // children[children.length - 1].scrollIntoView();
    };
    HkLuzhuAnalysisPage.prototype.optionChange = function (o) {
        if (o == this.option)
            return;
        this.option = o;
        this.getHkLuzhuAnalysis();
    };
    HkLuzhuAnalysisPage.prototype.getHkLuzhuAnalysis = function () {
        var that = this;
        that.hkService.getHkLuzhuAnalysis(that.code, that.myDate, that.option == 0 ? 'getSDRoadOfBead' : that.option == 1 ? 'getBSRoadOfBead' : 'getColorRoadOfBead').then(function (rs) {
            if (!rs.code) {
                rs.data.forEach(function (val) {
                    var beads = [];
                    var item = [];
                    var temp = -1;
                    var a = 0;
                    var b = 0;
                    var c = 0;
                    val.roadBeads.forEach(function (v, i) {
                        v == 0 ? (a += 1) : v == 1 ? (b += 1) : (c += 1);
                        if (v != temp) {
                            if (temp != -1) {
                                beads.push(item);
                            }
                            item = [];
                            temp = v;
                            item.push(v);
                        }
                        else {
                            item.push(v);
                        }
                        if (i == val.roadBeads) {
                            beads.push(item);
                        }
                    });
                    val.roadBeads = beads;
                    val.a = a;
                    val.b = b;
                    val.c = c;
                });
                that.mainData = rs.data;
            }
        });
    };
    HkLuzhuAnalysisPage.prototype.toAnotherRecordPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkRecordPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkLuzhuAnalysisPage.prototype.toAnotherPositivePage = function () {
        this.showType = -1;
        this.navCtrl.push("HkPositiveTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkLuzhuAnalysisPage.prototype.toAnotherSpecialPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSpecialTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkLuzhuAnalysisPage.prototype.toAnotherZodiacPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkZodiacTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkLuzhuAnalysisPage.prototype.toLuzhuAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkLuzhuAnalysisPage", { code: 'xglhc' });
    };
    HkLuzhuAnalysisPage.prototype.toSumAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSumAnalysisPage", { code: 'jslhc' });
    };
    HkLuzhuAnalysisPage.prototype.showOption = function (event) {
        event.stopPropagation();
        this.showType = this.showType == 2 ? -1 : 2;
        if (this.showType == -1) {
            $(".jumphk").css("top", "-5000px");
        }
        else {
            $(".jumphk").css("top", this.isAndroid ? "49px" : "69px");
        }
    };
    HkLuzhuAnalysisPage.prototype.toRoot = function () {
        this.navCtrl.popToRoot();
        // window.location.href = document.location.protocol+"//"+document.domain;
    };
    HkLuzhuAnalysisPage.prototype.blurCtrl = function () {
        if (this.showType == 2) {
            this.showType = -1;
            $(".jumphk").css("top", "-5000px");
        }
    };
    HkLuzhuAnalysisPage.prototype.closeShow = function () {
        this.showType = -1;
    };
    HkLuzhuAnalysisPage.prototype.showType1 = function () {
        $(".jumphk").css("top", "-5000px");
        this.showType = this.showType == 1 ? -1 : 1;
    };
    HkLuzhuAnalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-luzhu-analysis',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-luzhu-analysis\hk-luzhu-analysis.html"*/'<!--\n  Generated template for the HkLuzhuAnalysisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (click)="blurCtrl()">\n\n  <header class="headbox">\n    <div class="logo_view">\n      <img [src]="logo" (click)="toRoot()" alt="" style="height: 35px;vertical-align: super;">\n      <!--<span (click)="toRoot()">返回</span>-->\n    </div>\n    <div class="five_box" style="font-size: 20px;">\n      {{code == \'xglhc\' ? \'香港六合彩\' : \'极速六合彩\'}}\n      <!--<i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>-->\n    </div>\n    <div class="menubtn">\n        <input type="button" style="background: #e12121; border: none; line-height: 63px; height: 42px; color: #555555;" class="calendar" value="极速六合彩" (click)="showOption($event)">\n      <div class="jumphk" style="top: -5000px;">\n        <ul>\n          <li>\n            <span (click)="toAnotherRecordPage()">开奖记录</span>\n          </li>\n          <li>\n            <span (click)="toAnotherPositivePage()">正码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherSpecialPage()">特码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherZodiacPage()">生肖走势</span>\n          </li>\n          <li *ngIf="code == \'jslhc\'">\n            <span (click)="toLuzhuAnalysisPage()">路珠分析</span>\n          </li>\n          <li *ngIf="code == \'xglhc\'">\n            <span (click)="toSumAnalysisPage()">总和分析</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class="headfixed">\n    <div class="goweb_gray">\n      <div>\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">路珠分析</i>\n        </div>\n        <!--<a class="goweb" href="http://www.ch9588.com"><img src="../../../assets/hk-imgs/goweb_gray.png" alt=""></a>-->\n      </div>\n      <div class="menubtn">\n        <ion-item style="background: #f4f5f7;top: 6px;right: 5px;">\n          <ion-label style="margin-top: 0;"><span class="check_day" id="myDate">{{myDate}}年</span></ion-label>\n          <ion-datetime displayFormat="YYYY年" min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHkLuzhuAnalysis()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n      <div class="marginbottom"></div>\n    </div>\n    <div class="lz_type">\n      <div>\n        <span class="change_check" [ngClass]="{checked:option==0}" (click)="optionChange(0)">单双路珠</span>\n      </div>\n      <div>\n        <span class="change_check" [ngClass]="{checked:option==1}" (click)="optionChange(1)">大小路珠</span>\n      </div>\n      <div>\n        <span class="change_check" [ngClass]="{checked:option==2}" (click)="optionChange(2)">波色路珠</span>\n      </div>\n    </div>\n  </div>\n  <div class="alert_win" *ngIf="showType==1" (click)="closeShow()" style="top: 44px;">\n    <div class="five_item">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkRecordPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="kai_history"><span></span></dt>\n              <dd>开奖记录</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage"\n            [navParams]="{code:code}">\n            <dl>\n              <dt class="zhem_zs"><span></span></dt>\n              <dd>正码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkSpecialTrendPage"\n            [navParams]="{code:code}">\n            <dl>\n              <dt class="tema_zs"><span></span></dt>\n              <dd>特码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkZodiacTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zoo_zs"><span></span></dt>\n              <dd>生肖走势</dd>\n            </dl>\n          </span>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content (click)="blurCtrl()">\n  <div class="body-box" style="overflow: visible;">\n    <div class="page-div">\n\n      <div class="box animated fadeInLeft">\n        <div class="lz_box" *ngFor="let item of mainData;let index = index;">\n          <div class="lz_count">\n            <div class="left" *ngIf="option==0"><span>今年累计:</span><span>单（{{item?.a}}）</span><span>双（{{item?.b}}）</span>\n            </div>\n            <div class="left" *ngIf="option==1"><span>今年累计:</span><span>大（{{item?.a}}）</span><span>小（{{item?.b}}）</span>\n            </div>\n            <div class="left" *ngIf="option==2"><span>今年累计:</span><span>红（{{item?.a}}）</span><span>绿（{{item?.b}}）</span><span>蓝（{{item?.c}}\n              ）</span></div>\n            <div class="right">\n              <span *ngIf="index==0">正码一</span>\n              <span *ngIf="index==1">正码二</span>\n              <span *ngIf="index==2">正码三</span>\n              <span *ngIf="index==3">正码四</span>\n              <span *ngIf="index==4">正码五</span>\n              <span *ngIf="index==5">正码六</span>\n              <span *ngIf="index==6">特码</span>\n              &nbsp;\n              <span *ngIf="option==0">单双路珠</span>\n              <span *ngIf="option==1">大小路珠</span>\n              <span *ngIf="option==2">波色路珠</span>\n            </div>\n          </div>\n          <div class="lz_item">\n            <table class="lz_table_con" border="0" cellpadding="1" cellspacing="1">\n              <tbody>\n              <tr class="tablebox" *ngIf="item?.roadBeads?.length>0">\n                <td *ngFor="let temp of item?.roadBeads;">\n                  <ng-container *ngFor="let tt of temp;">\n                    <p *ngIf="option==0" [ngStyle]="{\'color\':tt==1?\'red\':\'grey\'}">{{tt == 0 ? \'单\' : \'双\'}}</p>\n                    <p *ngIf="option==1" [ngStyle]="{\'color\':tt==0?\'red\':\'grey\'}">{{tt == 0 ? \'大\' : \'小\'}}</p>\n                    <p *ngIf="option==2"\n                       [ngStyle]="{\'color\':tt==0?\'red\':tt==1?\'green\':\'blue\'}">{{tt == 0 ? \'红\' : tt == 1 ? \'绿\' : \'蓝\'}}</p>\n                  </ng-container>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-luzhu-analysis\hk-luzhu-analysis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]])
    ], HkLuzhuAnalysisPage);
    return HkLuzhuAnalysisPage;
}());

//# sourceMappingURL=hk-luzhu-analysis.js.map

/***/ })

});
//# sourceMappingURL=7.js.map