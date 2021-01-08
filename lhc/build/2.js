webpackJsonp([2],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HkSpecialTrendPageModule", function() { return HkSpecialTrendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hk_special_trend__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HkSpecialTrendPageModule = /** @class */ (function () {
    function HkSpecialTrendPageModule() {
    }
    HkSpecialTrendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hk_special_trend__["a" /* HkSpecialTrendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hk_special_trend__["a" /* HkSpecialTrendPage */]),
            ],
        })
    ], HkSpecialTrendPageModule);
    return HkSpecialTrendPageModule;
}());

//# sourceMappingURL=hk-special-trend.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkSpecialTrendPage; });
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




var HkSpecialTrendPage = /** @class */ (function () {
    function HkSpecialTrendPage(navCtrl, navParams, hkService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hkService = hkService;
        this.storageService = storageService;
        this.showType = -1;
        this.dayArr = [];
        this.now = new Date();
        this.option = 0;
        this.redArr = [];
        this.greenArr = [];
        this.blueArr = [];
        this.mainData = {};
        this.zodiacTitle = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
        this.tailTitle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    HkSpecialTrendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HkSpecialTrendPage');
    };
    HkSpecialTrendPage.prototype.ionViewDidEnter = function () {
        if (this.navCtrl.getPrevious() && this.navCtrl.getPrevious().id != 'HkHomePage') {
            this.navCtrl.removeView(this.navCtrl.getPrevious());
        }
        this.getHKSpecial();
        //if ($(".dayList").length > 0) {
        //  $(".dayList").last().width(this.now.getDate() * 36);
        // $(".dayList").children().last()[0].scrollIntoView();
        // }
    };
    HkSpecialTrendPage.prototype.optionChange = function (o) {
        if (o == this.option)
            return;
        this.option = o;
        if (this.option == 1) {
            tmstrokecanvas(this.mainData['tm_zodiac'], this.zodiacTitle);
        }
        else if (this.option == 2) {
            tmstrokecanvas(this.mainData['tm_weishu'], this.tailTitle);
        }
    };
    HkSpecialTrendPage.prototype.getHKSpecial = function () {
        var _this = this;
        var that = this;
        that.hkService.getHKSpecial(that.code, that.myDate).then(function (rs) {
            if (!rs.code) {
                that.mainData = rs.data.result;
                if (that.code == 'xglhc') {
                    var colors_1 = [];
                    rs.data.result.color.forEach(function (v) {
                        if (v == 1) {
                            colors_1.push("#f93353");
                        }
                        if (v == 2) {
                            colors_1.push("#20c36b");
                        }
                        if (v == 3) {
                            colors_1.push("#0094e7");
                        }
                    });
                    that.mainData.color = colors_1;
                    that.drawCanvas(that.mainData);
                }
                else if (that.code == 'jslhc') {
                    var temp_1 = [];
                    rs.data.result['tm_zodiac'].forEach(function (v) {
                        temp_1.push(that.zodiacTitle.indexOf(v));
                    });
                    that.mainData['tm_zodiac'] = temp_1;
                    if (_this.option == 1) {
                        tmstrokecanvas(_this.mainData['tm_zodiac'], _this.zodiacTitle);
                    }
                    else if (_this.option == 2) {
                        tmstrokecanvas(_this.mainData['tm_weishu'], _this.tailTitle);
                    }
                }
            }
        });
    };
    HkSpecialTrendPage.prototype.drawCanvas = function (mainData) {
        if (mainData && document.getElementsByTagName("canvas").length > 0) {
            $(".c1").attr("height", 1000);
            var c = document.getElementsByTagName("canvas")[0].getContext("2d");
            c.clearRect(0, 0, 20000, 20000);
            var b = mainData.issue;
            var f = mainData.num;
            var d = mainData.color;
            strokecanvas(f, b, d, true);
        }
    };
    HkSpecialTrendPage.prototype.toAnotherRecordPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkRecordPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSpecialTrendPage.prototype.toAnotherPositivePage = function () {
        this.showType = -1;
        this.navCtrl.push("HkPositiveTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSpecialTrendPage.prototype.toAnotherSpecialPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSpecialTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSpecialTrendPage.prototype.toAnotherZodiacPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkZodiacTrendPage", { code: this.code == 'xglhc' ? 'jslhc' : 'xglhc' });
    };
    HkSpecialTrendPage.prototype.toLuzhuAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkLuzhuAnalysisPage", { code: 'xglhc' });
    };
    HkSpecialTrendPage.prototype.toSumAnalysisPage = function () {
        this.showType = -1;
        this.navCtrl.push("HkSumAnalysisPage", { code: 'jslhc' });
    };
    HkSpecialTrendPage.prototype.showOption = function (event) {
        event.stopPropagation();
        this.showType = this.showType == 2 ? -1 : 2;
        if (this.showType == -1) {
            $(".jumphk").css("top", "-5000px");
        }
        else {
            $(".jumphk").css("top", this.isAndroid ? "49px" : "69px");
        }
    };
    HkSpecialTrendPage.prototype.toRoot = function () {
        this.navCtrl.popToRoot();
        // window.location.href = document.location.protocol+"//"+document.domain;
    };
    HkSpecialTrendPage.prototype.blurCtrl = function () {
        if (this.showType == 2) {
            this.showType = -1;
            $(".jumphk").css("top", "-5000px");
        }
    };
    HkSpecialTrendPage.prototype.closeShow = function () {
        this.showType = -1;
    };
    HkSpecialTrendPage.prototype.showType1 = function () {
        $(".jumphk").css("top", "-5000px");
        this.showType = this.showType == 1 ? -1 : 1;
    };
    HkSpecialTrendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hk-special-trend',template:/*ion-inline-start:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-special-trend\hk-special-trend.html"*/'<!--\n  Generated template for the HkSpecialTrendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (click)="blurCtrl()">\n  <header class="headbox">\n    <div class="logo_view">\n      <img [src]="logo" (click)="toRoot()" alt="" style="height: 35px;vertical-align: super;">\n      <!--<span (click)="toRoot()">返回</span>-->\n    </div>\n    <div class="five_box" style="font-size: 20px;">\n      {{code == \'xglhc\' ? \'香港六合彩\' : \'极速六合彩\'}}\n      <!--<i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">开奖记录</i>-->\n    </div>\n    <div class="menubtn">\n      <input type="button" style="background: #e12121; border: none; line-height: 63px; height: 42px; color: #555555;" class="calendar"\n             value="{{code == \'xglhc\' ? \'极速六合彩\' : \'香港六合彩\'}}" (click)="showOption($event)">\n      <div class="jumphk" style="top: -5000px;">\n        <ul>\n          <li>\n            <span (click)="toAnotherRecordPage()">开奖记录</span>\n          </li>\n          <li>\n            <span (click)="toAnotherPositivePage()">正码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherSpecialPage()">特码走势</span>\n          </li>\n          <li>\n            <span (click)="toAnotherZodiacPage()">生肖走势</span>\n          </li>\n          <li *ngIf="code == \'jslhc\'">\n            <span (click)="toLuzhuAnalysisPage()">路珠分析</span>\n          </li>\n          <li *ngIf="code == \'xglhc\'">\n            <span (click)="toSumAnalysisPage()">总和分析</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <div class="headfixed" >\n    <div *ngIf="code==\'jslhc\'" class="timebox">\n      <div class="ye_timelist">\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">特码走势</i>\n        </div>\n        <!--<ion-scroll scrollX="true" style="height: 40px;">-->\n          <!--<ul class="dayList" style="float: inherit;">-->\n            <!--<li *ngFor="let t of dayArr;" [ngClass]="{checkdate:myDate==t.date}"-->\n                <!--(click)="myDate=t.date;">{{t.d}}</li>-->\n          <!--</ul>-->\n        <!--</ion-scroll>-->\n      </div>\n      <div class="top_menu_more">\n        <ion-item style="background: #f4f5f7;top: 0;">\n          <ion-label><span class="check_day">{{myDate}}</span></ion-label>\n          <ion-datetime displayFormat="YYYY年 MM月 DD日 " min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKSpecial()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n    </div>\n    <div *ngIf="code==\'xglhc\'" class="goweb_gray">\n      <div>\n        <div class="five_box" style="line-height: 44px;padding-left: 10px;font-size: 18px;">\n          <i [ngStyle]="{\'background-position-y\':showType==1?\'-26.5px\':\'7.5px\'}" (click)="showType1()">特码走势</i>\n        </div>\n        <!--<a class="goweb" href="http://www.ch9588.com"><img src="../../../assets/hk-imgs/goweb_gray.png" alt=""></a>-->\n      </div>\n      <div class="menubtn">\n        <ion-item style="background: #f4f5f7;top: 6px;right: 5px;">\n          <ion-label style="margin-top: -8px;"><span class="x_check_day">{{myDate}}年</span></ion-label>\n          <ion-datetime displayFormat="YYYY年" min="{{startDay}}" max="{{today}}" [(ngModel)]="myDate"\n                        (ionChange)="getHKSpecial()" cancelText="取消" doneText="确认">\n          </ion-datetime>\n        </ion-item>\n      </div>\n      <div class="marginbottom"></div>\n    </div>\n    <div *ngIf="code==\'jslhc\'" class="lz_type">\n      <div id="lianmian">\n        <span class="change_check" [ngClass]="{checked:option==0}" (click)="optionChange(0)">两面</span>\n      </div>\n      <div id="conten_zoo">\n        <span class="change_check" [ngClass]="{checked:option==1}" (click)="optionChange(1)">生肖</span>\n      </div>\n      <div id="conten_weishu">\n        <span class="change_check" [ngClass]="{checked:option==2}" (click)="optionChange(2)">尾数</span>\n      </div>\n      <div id="colorball">\n        <span class="change_check checked" [ngClass]="{checked:option==3}" (click)="optionChange(3)">色波</span>\n      </div>\n    </div>\n  </div>\n  <div class="alert_win" *ngIf="showType==1" (click)="closeShow()" style="top: 44px;">\n    <div class="five_item">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkRecordPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="kai_history"><span></span></dt>\n              <dd>开奖记录</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage"\n            [navParams]="{code:code}">\n            <dl>\n              <dt class="zhem_zs"><span></span></dt>\n              <dd>正码走势</dd>\n            </dl>\n          </span>\n      <span class="animated bounceInUp" (click)="closeShow()" navPush="HkZodiacTrendPage" [navParams]="{code:code}">\n            <dl>\n              <dt class="zoo_zs"><span></span></dt>\n              <dd>生肖走势</dd>\n            </dl>\n          </span>\n      <ng-container *ngIf="code==\'jslhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage"\n                [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>总和分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n      <ng-container *ngIf="code==\'xglhc\'">\n          <span class="animated bounceInUp" (click)="closeShow()" navPush="HkPositiveTrendPage"\n                [navParams]="{code:code}">\n            <dl>\n              <dt class="zh_fenxi"><span></span></dt>\n              <dd>路珠分析</dd>\n            </dl>\n          </span>\n      </ng-container>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content (click)="blurCtrl()">\n  <div class="body-box" style="overflow: visible;">\n    <div class="page-div">\n\n\n      <div *ngIf="code==\'jslhc\'" class="contenbox">\n        <div class="lianmian" *ngIf="option==0">\n          <ul class="title">\n            <li>期数</li>\n            <li>特码</li>\n            <li>大小</li>\n            <li>单双</li>\n            <li>合大小</li>\n            <li>合单双</li>\n            <li>尾大小</li>\n            <li>半特</li>\n          </ul>\n          <ng-container *ngIf="mainData?.res && mainData?.res?.length>0">\n            <ul class="concls" *ngFor="let item of mainData?.res;">\n              <li>{{item?.issue.toString().substring(0, 5)}}<span class="isue">{{item?.issue.toString().substring(5)}}\n                期</span></li>\n              <li><span\n                [ngClass]="{red:item[\'color\']==1,green:item[\'color\']==2,blue:item[\'color\']==3}">{{item?.num}}</span>\n              </li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_dx\'].indexOf(\'大\')>-1 || item[\'tm_dx\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_dx\']}}</li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_ds\'].indexOf(\'大\')>-1 || item[\'tm_ds\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_ds\']}}</li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_hdx\'].indexOf(\'大\')>-1 || item[\'tm_hdx\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_hdx\']}}</li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_hds\'].indexOf(\'大\')>-1 || item[\'tm_hds\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_hds\']}}</li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_wdx\'].indexOf(\'大\')>-1 || item[\'tm_wdx\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_wdx\']}}</li>\n              <li\n                [ngStyle]="{\'color\':(item[\'tm_bate\'].indexOf(\'大\')>-1 || item[\'tm_bate\'].indexOf(\'双\')>-1)?\'#f93353\':\'#8a8a8a\'}">{{item[\'tm_bate\']}}</li>\n            </ul>\n          </ng-container>\n        </div>\n        <div class="colorball animated" *ngIf="option==3">\n          <ul class="title">\n            <li>期数</li>\n            <li>特码</li>\n            <li>色波</li>\n            <li>半波</li>\n            <li>半半波</li>\n          </ul>\n          <ng-container *ngIf="mainData?.res && mainData?.res?.length>0">\n            <ul class="concls" *ngFor="let item of mainData?.res;">\n              <li>{{item?.issue.toString().substring(0, 5)}}<span class="isue">{{item?.issue.toString().substring(5)}}\n                期</span></li>\n              <li><span\n                [ngClass]="{red:item[\'color\']==1,green:item[\'color\']==2,blue:item[\'color\']==3}">{{item?.num}}</span>\n              </li>\n              <li\n                [ngStyle]="{\'color\':item[\'color\']==1?\'#f93353\':item==2?\'#20c36b\':\'#0094e7\'}">{{item[\'color_name\']}}</li>\n              <li><span>{{item[\'ban_bo\']}}</span></li>\n              <li>{{item[\'ban_ban_bo\']}}</li>\n            </ul>\n          </ng-container>\n        </div>\n        <div class="conten_zoo conten_weishu animated" *ngIf="option==1 || option==2">\n          <div class="text_left">\n            <ul class="title">\n              <li>期数</li>\n              <li>特码</li>\n            </ul>\n            <ng-container *ngIf="mainData?.res && mainData?.res?.length>0">\n              <ul class="concls" *ngFor="let item of mainData?.res;">\n                <li>{{item?.issue.toString().substring(0, 5)}}<span class="isue">{{item?.issue.toString().substring(5)}}\n                  期</span></li>\n                <li><span\n                  [ngClass]="{red:item[\'color\']==1,green:item[\'color\']==2,blue:item[\'color\']==3}">{{item?.num}}</span>\n                </li>\n              </ul>\n            </ng-container>\n          </div>\n          <div class="canvas_zoo">\n            <canvas class="c1" width="1084" style="background:#fff" height="14336.875"></canvas>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="code==\'xglhc\'" id="por">\n        <canvas height="2832.8533333333335" width="1084" style="background:#fff"\n                class="c1 animated bounceInLeft"></canvas>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\caihui-sum\item-hk\src\pages\hk\hk-special-trend\hk-special-trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_hk_service__["a" /* HKService */], __WEBPACK_IMPORTED_MODULE_3__service_storage_service__["a" /* StorageService */]])
    ], HkSpecialTrendPage);
    return HkSpecialTrendPage;
}());

//# sourceMappingURL=hk-special-trend.js.map

/***/ })

});
//# sourceMappingURL=2.js.map