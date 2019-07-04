(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/apps.modules": [
		"./src/app/apps/apps.modules.ts",
		"default~apps-apps-modules~charts-charts-modules~dashboard-dashboard-module",
		"default~apps-apps-modules~ui-elements-ui-elements-modules",
		"default~apps-apps-modules~forms-forms-modules",
		"apps-apps-modules"
	],
	"./charts/charts.modules": [
		"./src/app/charts/charts.modules.ts",
		"default~apps-apps-modules~charts-charts-modules~dashboard-dashboard-module",
		"default~charts-charts-modules~dashboard-dashboard-module",
		"charts-charts-modules"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"default~apps-apps-modules~charts-charts-modules~dashboard-dashboard-module",
		"default~charts-charts-modules~dashboard-dashboard-module",
		"default~dashboard-dashboard-module~maps-maps-modules",
		"dashboard-dashboard-module"
	],
	"./extras/authentication.modules": [
		"./src/app/extras/authentication.modules.ts",
		"extras-authentication-modules"
	],
	"./extras/extras.modules": [
		"./src/app/extras/extras.modules.ts",
		"extras-extras-modules"
	],
	"./forms/forms.modules": [
		"./src/app/forms/forms.modules.ts",
		"default~apps-apps-modules~forms-forms-modules",
		"forms-forms-modules"
	],
	"./maps/maps.modules": [
		"./src/app/maps/maps.modules.ts",
		"default~dashboard-dashboard-module~maps-maps-modules",
		"maps-maps-modules"
	],
	"./tables/tables.modules": [
		"./src/app/tables/tables.modules.ts",
		"tables-tables-modules"
	],
	"./ui-elements/ui-elements.modules": [
		"./src/app/ui-elements/ui-elements.modules.ts",
		"default~apps-apps-modules~ui-elements-ui-elements-modules",
		"ui-elements-ui-elements-modules"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template/template.module */ "./src/app/template/template.module.ts");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _common_common_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/common-layout.component */ "./src/app/common/common-layout.component.ts");
/* harmony import */ var _common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/authentication-layout.component */ "./src/app/common/authentication-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Layout Component


// Routing Module

// App Component


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: true }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _common_common_layout_component__WEBPACK_IMPORTED_MODULE_6__["CommonLayoutComponent"],
                _common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationLayoutComponent"],
                _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"]
            ],
            providers: [_shared_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _common_common_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common-layout.component */ "./src/app/common/common-layout.component.ts");
/* harmony import */ var _common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/authentication-layout.component */ "./src/app/common/authentication-layout.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
// Layouts



var AppRoutes = [
    {
        path: '',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        pathMatch: 'full',
    },
    {
        path: '',
        component: _common_common_layout_component__WEBPACK_IMPORTED_MODULE_0__["CommonLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'apps',
                loadChildren: './apps/apps.modules#AppsModule'
            },
            {
                path: 'ui-elements',
                loadChildren: './ui-elements/ui-elements.modules#UiElementsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.modules#Forms_Module'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.modules#TablesModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.modules#Charts_Module'
            },
            {
                path: 'maps',
                loadChildren: './maps/maps.modules#MapsModule'
            },
            {
                path: 'extras',
                loadChildren: './extras/extras.modules#ExtrasModule'
            }
        ]
    },
    {
        path: '',
        component: _common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationLayoutComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: './extras/authentication.modules#AuthenticationModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/common/authentication-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/authentication-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationLayoutComponent", function() { return AuthenticationLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationLayoutComponent = /** @class */ (function () {
    function AuthenticationLayoutComponent() {
    }
    AuthenticationLayoutComponent.prototype.ngOnInit = function () { };
    AuthenticationLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationLayoutComponent);
    return AuthenticationLayoutComponent;
}());



/***/ }),

/***/ "./src/app/common/common-layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/common-layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" [ngClass]=\"{'is-collapsed': isCollapse, 'rtl': rtlActived}\">\r\n    <div class=\"layout\" [ngClass]=\"headerSelected\">\r\n\r\n        <div [ngClass]=\"sidenavSelected\">\r\n            <!-- Side Nav START -->\r\n            <app-side-nav></app-side-nav>\r\n            <!-- Side Nav END -->\r\n\r\n            <!-- Page Container START -->\r\n            <div class=\"page-container\">\r\n\r\n                <!-- Top Nav START -->\r\n                <app-header></app-header>\r\n                <!-- Top Nav END -->\r\n\r\n                <!-- Side Panel START -->\r\n                <app-side-panel></app-side-panel>\t\r\n                <!-- Side Panel END -->\r\n\r\n                <!-- Theme Configurator START -->\r\n                <div class=\"theme-configurator\" [ngClass]=\"{'theme-config-open' : themeConfigOpen}\">\r\n                    <div class=\"configurator-wrapper\">\r\n                        <div class=\"config-header\">\r\n                            <h4 class=\"config-title\">Config Panel</h4>\r\n                            <button class=\"config-close\" (click)=\"toggleThemeConfig()\">\r\n                                <i class=\"ti-close\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"config-body\">\r\n                            <div class=\"mrg-btm-30\">\r\n                                <p class=\"lead font-weight-normal\">Header Color</p>\r\n                                <div class=\"theme-colors {{headerTheme}}\" *ngFor=\"let headerTheme of headerThemes\">\r\n                                    <input type=\"radio\" id=\"{{headerTheme}}\"  name=\"theme\" value=\"{{headerTheme}}\" (click)=\"changeHeader(headerTheme)\">\r\n                                    <label for=\"{{headerTheme}}\"></label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mrg-btm-30\">\r\n                                <p class=\"lead font-weight-normal\">Sidebar Color</p>\r\n                                <div class=\"theme-colors {{sidenavTheme}}\" *ngFor=\"let sidenavTheme of sidenavThemes\">\r\n                                    <input type=\"radio\" id=\"{{sidenavTheme}}\" name=\"sidenav\" (click)=\"changeSidenav(sidenavTheme)\">\r\n                                    <label for=\"{{sidenavTheme}}\"></label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mrg-btm-30\">\r\n                                <p class=\"lead font-weight-normal no-mrg-btm\">RTL</p>\r\n                                <div class=\"toggle-checkbox checkbox-inline toggle-sm mrg-top-10\">\r\n                                    <input type=\"checkbox\" name=\"rtl-toogle\" id=\"rtl-toogle\" [(ngModel)]=\"rtlActived\">\r\n                                    <label for=\"rtl-toogle\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n                <!-- Theme Configurator END -->\r\n\r\n                <!-- Theme Toggle Button START -->\r\n                <button class=\"theme-toggle btn btn-rounded btn-icon\" (click)=\"toggleThemeConfig()\">\r\n                    <i class=\"ti-palette\"></i>\r\n                </button>\r\n                <!-- Theme Toggle Button END -->\r\n\r\n                <!-- Content Wrapper START -->\r\n                <div class=\"main-content\">\r\n                    <router-outlet></router-outlet>\r\n                </div>    \r\n                <!-- Content Wrapper END -->\r\n\r\n                <!-- Footer START -->\r\n                <app-footer></app-footer>\r\n                <!-- Footer END -->\r\n                \r\n            </div>\r\n            <!-- Page Container END -->\r\n\r\n         </div>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/common/common-layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/common-layout.component.ts ***!
  \***************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonLayoutComponent = /** @class */ (function () {
    function CommonLayoutComponent(tplSvc) {
        this.tplSvc = tplSvc;
        this.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
        this.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
        this.rtlActived = false;
        this.themeConfigOpen = false;
    }
    CommonLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tplSvc.isSideNavCollapseChanges.subscribe(function (isCollapse) { return _this.isCollapse = isCollapse; });
    };
    CommonLayoutComponent.prototype.changeHeader = function (headerTheme) {
        this.headerSelected = headerTheme;
    };
    CommonLayoutComponent.prototype.changeSidenav = function (sidenavTheme) {
        this.sidenavSelected = sidenavTheme;
    };
    CommonLayoutComponent.prototype.toggleThemeConfig = function () {
        this.themeConfigOpen = !this.themeConfigOpen;
    };
    CommonLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./common-layout.component.html */ "./src/app/common/common-layout.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]])
    ], CommonLayoutComponent);
    return CommonLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <header class=\"main-header\">\n    <div class=\"container\">\n      <div class=\"row \">\n        <div class=\"col-md-6 logo-header\">\n          <a href=\"\">\n            <img src=\"../../../assets/landing/logo.png\" />\n          </a>\n        </div>\n        <div class=\"col-md-6\">\n\n          <div class=\"header-content\">\n            <a href=\"\" class=\"btn btn_purple\">SIGN UP</a>\n\n            <div class=\"menu_btns\">\n              <span class=\"sr-onlys\"></span>\n              <span class=\"sr-onlys\"></span>\n              <span class=\"sr-onlys\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <section class=\"main-banner\">\n    <div class=\"mobile-banner\">\n      <div class=\"container\">\n        <div class=\"row banner-contents\">\n          <div class=\"col-md-6\">\n            <img src=\"../../../assets/landing/slide1.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-6\">\n            <h2>The Best B2B Commerce Suite for the  <span>CANNABIS INDUSTRY</span></h2>\n            <a (click)=\"goToDashboard()\" class=\"btn btn_blue desktop-btns\">GET STARTED NOW</a>\n            <a (click)=\"goToDashboard()\" class=\"btn btn_blue mobile-btns\">SETUP YOUR BUSINESS NOW</a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <div class=\"container\">\n            <div class=\"row banner-contents\">\n              <div class=\"col-md-6\">\n                <h2>The Best B2B Commerce Suite for the  <span>CANNABIS INDUSTRY</span></h2>\n                <a (click)=\"goToDashboard()\" class=\"btn btn_blue\">GET STARTED NOW</a>\n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"../../../assets/landing/slide1.jpg\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <div class=\"container\">\n            <div class=\"row banner-contents\">\n              <div class=\"col-md-6\">\n                <h2>The Best B2B Commerce Suite for the  <span>CANNABIS INDUSTRY</span></h2>\n                <a (click)=\"goToDashboard()\" class=\"btn btn_blue\">GET STARTED NOW</a>\n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"../../../assets/landing/slide1.jpg\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item \">\n          <div class=\"container\">\n            <div class=\"row banner-contents\">\n              <div class=\"col-md-6\">\n                <h2>The Best B2B Commerce Suite for the  <span>CANNABIS INDUSTRY</span></h2>\n                <a (click)=\"goToDashboard()\" class=\"btn btn_blue\">GET STARTED NOW</a>\n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"../../../assets/landing/slide1.jpg\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"hassless\">\n    <div class=container>\n      <div class=\"row mobile-content\">\n        <div class=\"col-md-12\">\n          <div class=\"hassless-banner text-center\">\n            <h3>\n              KUSHDESK FOR MANUFACTURING\n            </h3>\n            <p>\n              You Will Never Have a Problem Selling or Sourcing Materials Again.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row column-class\">\n        <div class=\"col-md-6\">\n          <div class=\"hassless-banner\">\n            <h3>\n              NO MORE HASSLESS\n            </h3>\n            <p class=\"full-width-mobile\">\n              Stop calling different people trying to find cannabis products and wholesale items. Kushdesk\n              provides every Licensed Cannabis Manufacturer & Distributor a B2B Storefront so that you\n              never run out of what you need.<br />  All you have to do is “claim your account”.\n            </p>\n            <a href=\"\" class=\"btn btn_purple desktop-btns\">SIGN UP FOR EARLY ACCESS</a>\n            <a href=\"\" class=\"btn btn_blue mobile-btns padding-bottom\">SIGN UP NOW</a>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"../../../assets/landing/lounding.png\" />\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"laws\">\n    <div class=container>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"hassless-banner\">\n            <h3>\n              WE KNOW THE LAWS,<br /> SO YOUR CAN  FOCUS ON WHAT <br />YOU DO BEST…\n            </h3>\n            <p class=\"full-width-mobile\">\n              Kushdesk keeps you up to code by evolving with the industry to ensure you are always within\n              your rights to buy, sell and distribute no matter what.\n            </p>\n\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"../../../assets/landing/laws.jpg\" />\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"hassless days\">\n    <div class=container>\n      <div class=\"row text-center \">\n        <div class=\"col-md-6\">\n          <div class=\"day2day\">\n            <h3>\n              DAY 2 DAY FEATURES\n            </h3>\n            <h6>Buy, Sell and Track Your Products and Sales</h6>\n            <p>\n              Our easy to use inventory management and sales hub provides you everything your company\n              needs to buy sell and distribute on the go right from their phones.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"day2day\">\n            <h3>\n              SELL UNLIMITED PRODUCTS\n            </h3>\n            <p>\n              We believe you deserve to get your products to the businesses that need them most. Hassle\n              free and without breaking your bank. Yes that means no upload fees!\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"state-line\">\n    <div class=\"container\">\n      <div class=\"row column-class\">\n        <div class=\"col-md-6\">\n          <img src=\"../../../assets/landing/transport.jpg\" />\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"hassless-banner\">\n            <h3>\n              TRANSPORT ACCROSS STATE LINES\n            </h3>\n            <p class=\"full-width-mobile\">\n              Kushdesk makes it easy to transport accross state lines by keeping you compliant with\n              government regulations and restrictions to cannabis commerce<br />  (Currently restricted in\n              most states)\n            </p>\n            <a href=\"\" class=\"btn btn_purple desktop-btns\">SIGN UP FOR EARLY ACCESS</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"newsletter\">\n    <div class=\"container\">\n      <div class=\"row newsletter-row\">\n        <div class=\"col-md-6\">\n          <div class=\"hassless-banner low-top-padding\">\n            <h3>\n              JOIN KUSH DESK NEWS FREE!\n            </h3>\n            <p>\n              Stay up to date on the latest Financial and Business News on the largest Cannabis News\n              Network in the world.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <form class=\"newsform\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control mail-field\" name=\"\" placeholder=\"Enter Email Here\">\n            </div>\n            <button class=\"btn btn_purple bt_blue\">JOIN KUSH DESK NEWS NOW</button>\n          </form>\n        </div>\n      </div>\n      <div class=\"row newsletter-text\">\n        <div class=\"col-md-12 text-center\">\n          <p>By Submitting your email above you agree to receive exciting emails from KushDesk.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 footer-logo\">\n          <a href=\"\"><img src=\"../../../assets/landing/logo.png\" /></a>\n        </div>\n        <div class=\"col-md-6 social-row\">\n          <span class=\"low-width\">FOLLOW US ON SOCIAL</span>\n          <ul class=\"social-lists\">\n\n            <li>\n              <a href=\"\" target=\"_blank\"><img class=\"social\" src=\"../../../assets/landing/facebook.png\" /></a>\n            </li>\n            <li>\n              <a href=\"\" target=\"_blank\"><img class=\"social\" src=\"../../../assets/landing/t.png\" /></a>\n            </li>\n            <li>\n              <a href=\"\" target=\"_blank\"><img class=\"social\" src=\"../../../assets/landing/ig.png\" /></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n\n</body>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"ProximaNova-Regular\";\n  background: #fff; }\n\np {\n  color: #646e7b;\n  font-size: 15px; }\n\na {\n  display: inline-block;\n  color: inherit; }\n\n/* a:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n} */\n\nh1 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\nh2 {\n  font-size: 40px;\n  margin: 0; }\n\nh3 {\n  font-size: 30px;\n  margin: 0; }\n\nh4 {\n  font-size: 24px;\n  margin: 0; }\n\nh5 {\n  font-size: 20px;\n  margin: 0; }\n\nh6 {\n  font-size: 15px;\n  margin: 0; }\n\nspan {\n  display: inline-block; }\n\nimg {\n  max-width: 100%;\n  display: block; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nli {\n  list-style-type: none; }\n\nlabel {\n  color: #203346;\n  font-size: 15px;\n  font-family: lato-regular;\n  font-weight: 800;\n  display: block; }\n\n.hassless {\n  background-color: #f5f7fa;\n  padding: 50px 0; }\n\n.hassless-banner p {\n  font-family: \"ProximaNova-Light\";\n  font-size: 16px;\n  /* font-weight: 300; */\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.7;\n  letter-spacing: 0.3px;\n  color: #686868;\n  opacity: 0.7; }\n\n.hassless-banner h3 {\n  font-family: \"ProximaNova-Bold\";\n  font-size: 25px;\n  /*font-weight: bold;*/\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: 0.6px;\n  color: #6c00dc;\n  margin-bottom: 20px; }\n\n.hassless .row,\n.laws .row {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.btn_purple {\n  font-size: 14px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  text-align: center;\n  color: #ffffff;\n  border-radius: 30px;\n  padding: 13px 24px;\n  margin-top: 20px;\n  background-color: #9600ff;\n  font-family: \"ProximaNova-Regular\";\n  text-transform: uppercase; }\n\n.hassless-banner {\n  width: 100%;\n  max-width: 480px; }\n\n.laws {\n  background-color: #ffff;\n  padding: 50px 0; }\n\n.day2day h3 {\n  font-family: \"ProximaNova-Bold\";\n  font-size: 22px;\n  /*font-weight: bold;*/\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: 0.6px;\n  text-align: center;\n  color: #6c00dc;\n  margin-bottom: 10px; }\n\n.day2day h6 {\n  font-family: \"ProximaNova-Regular\";\n  font-size: 15px;\n  /*font-weight: 300;*/\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.42;\n  letter-spacing: 0.4px;\n  text-align: center;\n  color: #8c8c8c;\n  margin-bottom: 10px; }\n\n.day2day p {\n  font-family: \"ProximaNova-Regular\";\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.6;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-bottom: 10px; }\n\n.day2day {\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto; }\n\n.days .row {\n  -webkit-box-align: start;\n          align-items: flex-start; }\n\n.state-line {\n  background-color: #fff;\n  padding: 10px 0; }\n\n.state-line .row {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.state-line img {\n  max-width: 73%;\n  margin: 0 auto; }\n\n.state-line .hassless-banner {\n  text-align: right; }\n\n.newsletter-row {\n  border-radius: 6px;\n  box-shadow: 0 2px 8px 0 rgba(156, 156, 156, 0.5);\n  background-color: #ffffff;\n  padding: 20px;\n  padding: 20px;\n  max-width: 950px;\n  margin: 0 auto; }\n\n.mail-field {\n  width: -webkit-fill-available;\n  border: 1px solid transparent;\n  background: #e6e6e8;\n  padding: 15px 10px;\n  border-radius: 7px;\n  outline: none;\n  width: 90%;\n  margin-left: 5%;\n  font-family: \"ProximaNova-Light\"; }\n\n.newsform .btn_purple {\n  display: block;\n  width: 100%; }\n\n.newsletter-text p {\n  font-family: \"ProximaNova-Light\";\n  font-size: 14px;\n  /*font-weight: 300;*/\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.8;\n  letter-spacing: 0.4px;\n  text-align: center;\n  color: #3e3e3e;\n  opacity: 0.7;\n  padding: 20px 0; }\n\n.social-lists li {\n  font-size: 12.5px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  color: #9b9b9b; }\n\n.social-lists {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n\n.main-header {\n  padding: 20px; }\n\n.social-lists li {\n  padding-left: 20px; }\n\nfooter {\n  padding: 30px 0; }\n\n.main-header {\n  padding: 20px 0;\n  box-shadow: 0 2px 8px 0 rgba(222, 222, 222, 0.5);\n  box-shadow: 0 2px 8px 0 rgba(222, 222, 222, 0.5);\n  background-color: #ffffff; }\n\n.header-content .btn_purple {\n  border-radius: 5px;\n  box-shadow: 0 2px 4px 0 rgba(142, 45, 197, 0.5);\n  background-color: #9600ff;\n  margin: 0; }\n\n.header-content {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  display: -webkit-box;\n  display: flex; }\n\n.btn_blue {\n  font-family: proximanova-semibold;\n  border-radius: 30px;\n  background-color: #9600ff;\n  text-transform: uppercase;\n  /* font-weight: 600; */\n  /* font-style: normal; */\n  /* font-stretch: normal; */\n  font-size: 15px;\n  line-height: normal;\n  letter-spacing: 2px;\n  text-align: center;\n  color: #ffffff !important;\n  padding: 10px 15px; }\n\n.main-banner .carousel {\n  padding: 50px 0; }\n\n.banner-contents {\n  padding-top: 2%; }\n\n.banner-contents h2 {\n  font-size: 30px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.4;\n  letter-spacing: 0.7px;\n  color: rgba(74, 74, 74, 0.8);\n  margin-bottom: 20px;\n  font-family: \"ProximaNova-Light\"; }\n\n.banner-contents h2 span {\n  font-family: \"ProximaNova-Bold\";\n  padding-top: 1%;\n  color: #4a4a4a;\n  font-size: 22px;\n  letter-spacing: 1.5px; }\n\n.carousel-indicators li {\n  position: relative;\n  -webkit-box-flex: 0;\n  flex: 0 1 auto;\n  width: 15px;\n  height: 15px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  background-color: #d8d8d8;\n  border-radius: 50px; }\n\n.carousel-indicators li.active {\n  background-color: #9600ff; }\n\n.carousel-indicators {\n  right: 0;\n  left: auto; }\n\n.btn_purple:focus,\n.btn_blue:focus {\n  outline: none; }\n\n.btn_purple:hover,\n.btn_blue:hover {\n  color: white; }\n\n.mobile-content {\n  display: none; }\n\n.hassless-banner h3 br,\n.mobile-banner {\n  display: none; }\n\n.mobile-btns {\n  display: none; }\n\n.logo-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n@media (max-width: 1024px) {\n  .banner-contents h2 {\n    font-size: 25px; }\n  .hassless-banner h3,\n  .day2day h3 {\n    font-size: 20px; } }\n\n@media (max-width: 767px) {\n  .mobile-banner {\n    display: block; }\n  .full-width-mobile {\n    width: 100% !important;\n    margin-left: 0 !important;\n    color: #4a4a4a !important;\n    padding-bottom: 5%; }\n  .menu_btns {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n  .menu_btns .sr-onlys:nth-child(2) {\n    width: 20px; }\n  .sr-onlys {\n    width: 25px;\n    height: 2px;\n    border-radius: 1px;\n    background-color: #252525;\n    border: 1px solid #252525;\n    margin-bottom: 4px;\n    margin-left: 15px; }\n  .header-content {\n    -webkit-box-align: center;\n            align-items: center; }\n  .column-class {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse; }\n  .hassless .mobile-btns {\n    bottom: -95px; }\n  .laws {\n    padding: 60px 0; }\n  .desktop-btns,\n  .hassless.days {\n    display: none; }\n  /* .column-class .col-md-6 {\n      margin-bottom: 30px;\n  }*/\n  .laws {\n    padding: 50px 0 0 0; }\n  .hassless-banner p {\n    line-height: 1.4;\n    letter-spacing: 0.3px;\n    color: #686868;\n    opacity: 0.8;\n    margin-bottom: 20px;\n    width: 80%;\n    margin-left: 10%; }\n  .newsletter-row {\n    padding: 20px 0px 25px;\n    margin-top: 5%; }\n  .mobile-content {\n    display: block; }\n  .carousel.slide {\n    display: none; }\n  .main-header .col-md-6 {\n    width: 50%; }\n  .main-header .row {\n    -webkit-box-align: center;\n            align-items: center; }\n  .banner-contents h2 {\n    padding-top: 10%;\n    font-size: 20px;\n    padding-bottom: 80px;\n    margin: 0;\n    font-family: \"ProximaNova-Light\";\n    letter-spacing: 1px;\n    color: #4a4a4a; }\n  .mobile-btns {\n    display: block;\n    color: white !important; }\n  .mobile-btns {\n    position: absolute;\n    width: 85%;\n    left: 0;\n    bottom: -45px;\n    padding: 32px 20px;\n    right: 0;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 60px;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5); }\n  .carousel-indicators {\n    right: 0;\n    left: 0; }\n  .banner-contents {\n    padding-top: 5%;\n    text-align: center; }\n  .hassless-banner, .state-line .hassless-banner {\n    max-width: 100%;\n    text-align: center;\n    padding-top: 15%; }\n  .newsform .btn_purple {\n    padding: 25px 0px;\n    border-radius: 50px;\n    width: 95%;\n    font-size: 15px;\n    margin-left: 3%;\n    letter-spacing: 1.5px;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5); }\n  .newsletter-text p {\n    font-size: 15px;\n    line-height: 1.5; }\n  .footer-logo img {\n    max-width: 70%;\n    margin: 0 auto; }\n  .social-lists li {\n    padding-left: 0px; }\n  .footer-logo a {\n    text-align: center;\n    margin: 20px auto;\n    width: 78%;\n    display: block; }\n  footer {\n    padding: 0px 0 30px 0; }\n  .header-content .btn_purple {\n    padding: 10px 15px;\n    margin-right: 5%; }\n  .social-lists {\n    width: 40%;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  .hassless-banner h3,\n  .day2day h3 {\n    font-size: 20px;\n    margin-bottom: 15px; }\n  .day2day {\n    margin-bottom: 20px; }\n  p {\n    font-size: 12px; }\n  .hassless-banner h3 br {\n    display: block; }\n  .low-top-padding {\n    padding-top: 5% !important; }\n  .low-width {\n    width: 75%;\n    font-family: \"ProximaNova-Regular\";\n    color: #9b9b9b;\n    letter-spacing: 2.5px; }\n  .social {\n    padding-right: 0 !important;\n    margin-right: 0 !important;\n    max-width: 70% !important; }\n  .social-row {\n    padding-top: 2%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9rdXNoZGVzay0xL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQWtDO0VBQ2xDLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBQ0Q7Ozs7SUFJSTs7QUFDSjtFQUNFLFVBQVMsRUFDVjs7QUFDRDtFQUNFLFVBQVEsRUFDVDs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsVUFBUyxFQUVWOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFVBQVMsRUFDVjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsVUFBUyxFQUNWOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGVBQWMsRUFDZjs7QUFDRDtFQUNFLFVBQVM7RUFDVCxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixnQkFBZSxFQUNoQjs7QUFDRDtFQUNJLGlDQUFnQztFQUNsQyxnQkFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsZUFBYztFQUNkLGFBQVksRUFDYjs7QUFFRDtFQUNNLGdDQUErQjtFQUNqQyxnQkFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsZUFBYztFQUNkLG9CQUFtQixFQUN0Qjs7QUFDRDs7RUFHRSwwQkFBbUI7VUFBbkIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBRUUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG1DQUFrQztFQUNsQywwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFFRSxZQUFXO0VBQ1gsaUJBQWdCLEVBRWpCOztBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0ksZ0NBQStCO0VBQy9CLGdCQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNFLG1DQUFrQztFQUNoQyxnQkFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxtQ0FBa0M7RUFDbEMsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3RCOztBQUNEO0VBRUUsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixlQUFjLEVBRWY7O0FBQ0Q7RUFDRSx5QkFBdUI7VUFBdkIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsdUJBQXNCO0VBQ3RCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsMEJBQW1CO1VBQW5CLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsaURBQWdEO0VBQ2hELDBCQUF5QjtFQUN6QixjQUFhO0VBQ2IsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSw4QkFBNkI7RUFDN0IsOEJBQTZCO0VBQzdCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixpQ0FBZ0MsRUFFakM7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsWUFBVyxFQUNaOztBQUNEO0VBQ0EsaUNBQWdDO0VBQzlCLGdCQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQVk7RUFDWixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsc0JBQXlCO1VBQXpCLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixpREFBZ0Q7RUFFeEMsaURBQWdEO0VBQ3hELDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixnREFBK0M7RUFDL0MsMEJBQXlCO0VBQ3pCLFVBQVMsRUFDVjs7QUFDRDtFQUNFLHNCQUF5QjtVQUF6QiwwQkFBeUI7RUFDekIscUJBQWE7RUFBYixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDTSxrQ0FBaUM7RUFDckMsb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNBLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQiw2QkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGlDQUFnQyxFQUUvQjs7QUFDRDtFQUNFLGdDQUErQjtFQUMvQixnQkFBZTtFQUNmLGVBQWM7RUFDZCxnQkFBZTtFQUNmLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUVFLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFFbkIsZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUVwQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLFNBQVE7RUFDUixXQUFVLEVBQ1g7O0FBQ0Q7O0VBRU0sY0FBYSxFQUNsQjs7QUFDRDs7RUFFRSxhQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7O0VBRU0sY0FBYSxFQUNoQjs7QUFDSDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUFtQjtVQUFuQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRTtJQUNJLGdCQUFlLEVBQ2xCO0VBQ0Q7O0lBRUksZ0JBQWUsRUFDbEIsRUFBQTs7QUFFSDtFQUNFO0lBQ0ksZUFBYyxFQUNqQjtFQUNEO0lBQ0ksdUJBQXNCO0lBQ3RCLDBCQUF5QjtJQUN6QiwwQkFBeUI7SUFDekIsbUJBQWtCLEVBQ3JCO0VBQ0g7SUFDRSxxQkFBYTtJQUFiLGNBQWE7SUFDZCx1QkFBcUI7WUFBckIsc0JBQXFCO0lBQ3BCLDZCQUFzQjtJQUF0Qiw4QkFBc0I7WUFBdEIsdUJBQXNCO0lBQ3RCLHNCQUF5QjtZQUF6QiwwQkFBeUIsRUFDMUI7RUFDRDtJQUNFLFlBQVcsRUFDWjtFQUNDO0lBQ0ksWUFBVztJQUNYLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsa0JBQWlCLEVBQ2I7RUFDRDtJQUNDLDBCQUFtQjtZQUFuQixvQkFBbUIsRUFDbkI7RUFDUjtJQUNJLDZCQUE4QjtJQUE5QiwrQkFBOEI7WUFBOUIsK0JBQThCLEVBQ2pDO0VBQ0Q7SUFDSSxjQUFhLEVBQ2hCO0VBQ0Q7SUFDSSxnQkFBZSxFQUNsQjtFQUNEOztJQUVJLGNBQWEsRUFDaEI7RUFDRjs7S0FFSTtFQUNIO0lBQ0ksb0JBQW1CLEVBQ3RCO0VBQ0Q7SUFDUSxpQkFBZ0I7SUFDeEIsc0JBQXFCO0lBQ3JCLGVBQWM7SUFDZCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLFdBQVU7SUFDVixpQkFBZ0IsRUFDZjtFQUNEO0lBQ0ksdUJBQXNCO0lBQ3RCLGVBQWMsRUFDakI7RUFDRDtJQUNJLGVBQWMsRUFDakI7RUFDRDtJQUNJLGNBQWEsRUFDaEI7RUFDRDtJQUNJLFdBQVUsRUFDYjtFQUNEO0lBQ0ksMEJBQW1CO1lBQW5CLG9CQUFtQixFQUN0QjtFQUNEO0lBQ0ksaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ1gscUJBQW9CO0lBQzVCLFVBQVM7SUFDVCxpQ0FBZ0M7SUFDaEMsb0JBQW1CO0lBQ25CLGVBQWMsRUFFYjtFQUNEO0lBQ0ksZUFBYztJQUNkLHdCQUF1QixFQUMxQjtFQUNEO0lBQ0EsbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixRQUFPO0lBQ1AsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsMkNBQTBDLEVBQ3pDO0VBQ0Q7SUFDSSxTQUFRO0lBQ1IsUUFBTyxFQUNWO0VBQ0Q7SUFDSSxnQkFBZTtJQUNmLG1CQUFrQixFQUNyQjtFQUNEO0lBQ0ksZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBQ25CO0VBRUQ7SUFDSSxrQkFBaUI7SUFDckIsb0JBQW1CO0lBQ25CLFdBQVU7SUFDVixnQkFBZTtJQUNmLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLDJDQUEwQyxFQUN6QztFQUNEO0lBQ0QsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDaEI7RUFDQztJQUNJLGVBQWM7SUFDZCxlQUFjLEVBQ2pCO0VBQ0Q7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUNJLG1CQUFrQjtJQUN4QixrQkFBaUI7SUFDakIsV0FBVTtJQUNWLGVBQWMsRUFDWDtFQUNEO0lBQ0Esc0JBQXFCLEVBQ3BCO0VBQ0Q7SUFDUSxtQkFBa0I7SUFDbEIsaUJBQWdCLEVBQ3ZCO0VBQ0Q7SUFDSSxXQUFVO0lBQ1YsMEJBQThCO1lBQTlCLCtCQUE4QixFQUNqQztFQUNEOztJQUVJLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCO0VBQ0Q7SUFDSSxvQkFBbUIsRUFDdEI7RUFDRDtJQUNJLGdCQUFlLEVBQ2xCO0VBQ0Q7SUFDSSxlQUFjLEVBQ2pCO0VBRUQ7SUFDSSwyQkFBeUIsRUFDNUI7RUFDRDtJQUNJLFdBQVU7SUFDVixtQ0FBa0M7SUFDbEMsZUFBYTtJQUNiLHNCQUFxQixFQUN4QjtFQUNEO0lBQ0ksNEJBQTJCO0lBQzNCLDJCQUEwQjtJQUMxQiwwQkFBeUIsRUFDNUI7RUFDRDtJQUNJLGdCQUFlO0lBQ2YscUJBQWE7SUFBYixjQUFhO0lBQ2IsK0JBQW1CO0lBQW5CLDhCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsMEJBQW1CO1lBQW5CLG9CQUFtQixFQUN0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLVJlZ3VsYXJcIjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxucHtcbiAgY29sb3I6ICM2NDZlN2I7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLyogYTpob3ZlcixcbmE6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSAqL1xuaDF7XG4gIG1hcmdpbjogMDtcbn1cbnB7XG4gIG1hcmdpbjowO1xufVxuaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbjogMDtcblxufVxuaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuaDYge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbmxhYmVsIHtcbiAgY29sb3I6ICMyMDMzNDY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IGxhdG8tcmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGFzc2xlc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5oYXNzbGVzcy1iYW5uZXIgcHtcbiAgICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YS1MaWdodFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiAzMDA7ICovXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmhhc3NsZXNzLWJhbm5lciBoM3tcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLUJvbGRcIjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgLypmb250LXdlaWdodDogYm9sZDsqL1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4xODtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gICAgY29sb3I6ICM2YzAwZGM7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5oYXNzbGVzcyAucm93LFxuLmxhd3MgLnJvd3tcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ0bl9wdXJwbGV7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDEzcHggMjRweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2MDBmZjtcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYU5vdmEtUmVndWxhclwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhhc3NsZXNzLWJhbm5lciB7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG5cbn1cbi5sYXdze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLmRheTJkYXkgaDN7XG4gICAgZm9udC1mYW1pbHk6IFwiUHJveGltYU5vdmEtQm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2YzAwZGM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kYXkyZGF5IGg2e1xuICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YS1SZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC8qZm9udC13ZWlnaHQ6IDMwMDsqL1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS40MjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZGF5MmRheSBwe1xuICAgIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZGF5MmRheSB7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG59XG4uZGF5cyAucm93e1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zdGF0ZS1saW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc3RhdGUtbGluZSAucm93e1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXRlLWxpbmUgaW1nIHtcbiAgbWF4LXdpZHRoOiA3MyU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN0YXRlLWxpbmUgLmhhc3NsZXNzLWJhbm5lcntcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubmV3c2xldHRlci1yb3d7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgxNTYsIDE1NiwgMTU2LCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDk1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWlsLWZpZWxke1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTg7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLUxpZ2h0XCI7XG5cbn1cbi5uZXdzZm9ybSAuYnRuX3B1cnBsZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5ld3NsZXR0ZXItdGV4dCBwIHtcbmZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLUxpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLypmb250LXdlaWdodDogMzAwOyovXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNlM2UzZTtcbiAgb3BhY2l0eTogMC43O1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uc29jaWFsLWxpc3RzIGxpe1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBjb2xvcjogIzliOWI5Yjtcbn1cbi5zb2NpYWwtbGlzdHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbi1oZWFkZXJ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc29jaWFsLWxpc3RzIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuZm9vdGVyIHtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLm1haW4taGVhZGVye1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMjIyLCAyMjIsIDIyMiwgMC41KTtcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMjIyLCAyMjIsIDIyMiwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5oZWFkZXItY29udGVudCAuYnRuX3B1cnBsZXtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0MiwgNDUsIDE5NywgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2MDBmZjtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlci1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idG5fYmx1ZXtcbiAgICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hbm92YS1zZW1pYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2MDBmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xuICAvKiBmb250LXN0cmV0Y2g6IG5vcm1hbDsgKi9cbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWx7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5iYW5uZXItY29udGVudHMge1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG4uYmFubmVyLWNvbnRlbnRzIGgye1xuZm9udC1zaXplOiAzMHB4O1xuZm9udC13ZWlnaHQ6IDMwMDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtc3RyZXRjaDogbm9ybWFsO1xubGluZS1oZWlnaHQ6IDEuNDtcbmxldHRlci1zcGFjaW5nOiAwLjdweDtcbmNvbG9yOiByZ2JhKDc0LDc0LDc0LDAuOCk7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xuZm9udC1mYW1pbHk6IFwiUHJveGltYU5vdmEtTGlnaHRcIjtcblxufVxuLmJhbm5lci1jb250ZW50cyBoMiBzcGFue1xuICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YS1Cb2xkXCI7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2MDBmZjtcbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cbi5idG5fcHVycGxlOmZvY3VzLFxuLmJ0bl9ibHVlOmZvY3Vze1xuICAgICAgb3V0bGluZTogbm9uZTtcbn1cbi5idG5fcHVycGxlOmhvdmVyLFxuLmJ0bl9ibHVlOmhvdmVye1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5tb2JpbGUtY29udGVudHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oYXNzbGVzcy1iYW5uZXIgaDMgYnIsXG4ubW9iaWxlLWJhbm5lcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbi5tb2JpbGUtYnRuc3tcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dvLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYShtYXgtd2lkdGggOiAxMDI0cHgpe1xuICAuYmFubmVyLWNvbnRlbnRzIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAuaGFzc2xlc3MtYmFubmVyIGgzLFxuICAuZGF5MmRheSBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aCA6IDc2N3B4KXtcbiAgLm1vYmlsZS1iYW5uZXJ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZnVsbC13aWR0aC1tb2JpbGV7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjNGE0YTRhICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cbi5tZW51X2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tZW51X2J0bnMgLnNyLW9ubHlzOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6IDIwcHg7XG59XG4gIC5zci1vbmx5c3tcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI1MjUyNTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgfVxuICAgICAgICAgLmhlYWRlci1jb250ZW50e1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICB9XG4gIC5jb2x1bW4tY2xhc3N7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLmhhc3NsZXNzIC5tb2JpbGUtYnRucyB7XG4gICAgICBib3R0b206IC05NXB4O1xuICB9XG4gIC5sYXdzIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgfVxuICAuZGVza3RvcC1idG5zLFxuICAuaGFzc2xlc3MuZGF5c3tcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAvKiAuY29sdW1uLWNsYXNzIC5jb2wtbWQtNiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9Ki9cbiAgLmxhd3Mge1xuICAgICAgcGFkZGluZzogNTBweCAwIDAgMDtcbiAgfVxuICAuaGFzc2xlc3MtYmFubmVyIHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuICAubmV3c2xldHRlci1yb3d7XG4gICAgICBwYWRkaW5nOiAyMHB4IDBweCAyNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgLm1vYmlsZS1jb250ZW50e1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmNhcm91c2VsLnNsaWRle1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubWFpbi1oZWFkZXIgLmNvbC1tZC02IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLm1haW4taGVhZGVyIC5yb3d7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5iYW5uZXItY29udGVudHMgaDIge1xuICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YS1MaWdodFwiO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzRhNGE0YTtcblxuICB9XG4gIC5tb2JpbGUtYnRuc3tcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vYmlsZS1idG5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODUlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC00NXB4O1xuICBwYWRkaW5nOiAzMnB4IDIwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICB9XG4gIC5iYW5uZXItY29udGVudHMge1xuICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oYXNzbGVzcy1iYW5uZXIsLnN0YXRlLWxpbmUgLmhhc3NsZXNzLWJhbm5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMTUlO1xuICB9XG5cbiAgLm5ld3Nmb3JtIC5idG5fcHVycGxlIHtcbiAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgLm5ld3NsZXR0ZXItdGV4dCBwIHtcbiBmb250LXNpemU6IDE1cHg7XG4gbGluZS1oZWlnaHQ6IDEuNTtcbn1cbiAgLmZvb3Rlci1sb2dvIGltZ3tcbiAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnNvY2lhbC1saXN0cyBsaSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuICAuZm9vdGVyLWxvZ28gYXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbm1hcmdpbjogMjBweCBhdXRvO1xud2lkdGg6IDc4JTtcbmRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGZvb3RlciB7XG4gIHBhZGRpbmc6IDBweCAwIDMwcHggMDtcbiAgfVxuICAuaGVhZGVyLWNvbnRlbnQgLmJ0bl9wdXJwbGV7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cbiAgLnNvY2lhbC1saXN0cyB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5oYXNzbGVzcy1iYW5uZXIgaDMsXG4gIC5kYXkyZGF5IGgze1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuZGF5MmRheSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIHB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmhhc3NsZXNzLWJhbm5lciBoMyBicntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmxvdy10b3AtcGFkZGluZ3tcbiAgICAgIHBhZGRpbmctdG9wOjUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvdy13aWR0aHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YS1SZWd1bGFyXCI7XG4gICAgICBjb2xvcjojOWI5YjliO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICB9XG4gIC5zb2NpYWx7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNvY2lhbC1yb3d7XG4gICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/side-nav.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/side-nav.directive.ts ***!
  \*********************************************************/
/*! exports provided: sidebarToggler, sidebarDropdown, Sidebar_Directives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarToggler", function() { return sidebarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarDropdown", function() { return sidebarDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar_Directives", function() { return Sidebar_Directives; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//sidebar toggler
var sidebarToggler = /** @class */ (function () {
    function sidebarToggler() {
    }
    sidebarToggler.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('.app').classList.toggle('is-collapsed');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], sidebarToggler.prototype, "toggleOpen", null);
    sidebarToggler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], sidebarToggler);
    return sidebarToggler;
}());

//sidebar dropdown
var sidebarDropdown = /** @class */ (function () {
    function sidebarDropdown(el) {
        this.el = el;
    }
    sidebarDropdown.prototype.ngOnInit = function () {
        $('.side-nav .side-nav-menu li a').click(function (event) {
            if ($(this).parent().hasClass("open")) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                    $(this).parent().removeClass("open");
                });
            }
            else {
                $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                $(this).parent().parent().children('li.open').children('a').removeClass('open');
                $(this).parent().parent().children('li.open').removeClass("open");
                $(this).parent().children('.dropdown-menu').slideDown(200, function () {
                    $(this).parent().addClass("open");
                });
            }
        });
    };
    sidebarDropdown = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sideBar]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], sidebarDropdown);
    return sidebarDropdown;
}());

var Sidebar_Directives = [
    sidebarDropdown,
    sidebarToggler
];


/***/ }),

/***/ "./src/app/shared/services/template.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/template.service.ts ***!
  \*****************************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TemplateService = /** @class */ (function () {
    function TemplateService() {
        this.isSideNavCollapse = false;
        this.isSidePanelOpen = false;
        this.rtlActived = false;
        this.isSideNavCollapseActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSideNavCollapse);
        this.isSideNavCollapseChanges = this.isSideNavCollapseActived.asObservable();
        this.isSidePanelOpenActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSidePanelOpen);
        this.isSidePanelOpenChanges = this.isSidePanelOpenActived.asObservable();
    }
    TemplateService.prototype.toggleSideNavCollapse = function (isCollapse) {
        this.isSideNavCollapseActived.next(isCollapse);
    };
    TemplateService.prototype.toggleSidePanelOpen = function (isOpen) {
        this.isSidePanelOpenActived.next(isOpen);
    };
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/template/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"content-footer\">\r\n    <div class=\"footer\">\r\n        <div class=\"copyright\">\r\n            <span>Copyright © 2017 <b class=\"text-dark\">Theme_Nate</b>. All rights reserved.</span>\r\n            <span class=\"go-right\">\r\n                <a href=\"\" class=\"text-gray mrg-right-15\">Term & Conditions</a>\r\n                <a  href=\"\" class=\"text-gray\">Privacy & Policy</a>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/template/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/template/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/template/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header navbar\">\r\n    <div class=\"header-container\">\r\n        <ul class=\"nav-left\">\r\n            <li>\r\n                <a class=\"side-nav-toggle\" (click)=\"toggleSideNavCollapse()\" href=\"javascript:void(0);\">\r\n                    <i class=\"ti-view-grid\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"search-box\" [ngClass]=\"{'active': searchActived}\"> \r\n                <a class=\"search-toggle no-pdd-right\" href=\"javascript:void(0);\" (click)=\"toggleSearch()\" >\r\n                    <i class=\"search-icon ti-search pdd-right-10\"></i>\r\n                    <i class=\"search-icon-close ti-close pdd-right-10\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"search-input\" [ngClass]=\"{'active': searchActived}\">\r\n                <input [(ngModel)]=\"searchModel\" class=\"form-control\" type=\"text\" placeholder=\"Search...\">\r\n                <div class=\"advanced-search\" [ngClass]=\"{'active': searchModel?.length > 0}\">\r\n                    <div class=\"search-wrapper\">\r\n                        <div class=\"pdd-vertical-10\">\r\n                            <span class=\"display-block mrg-vertical-5 pdd-horizon-20 text-gray\">\r\n                                <i class=\"ti-user pdd-right-5\"></i>\r\n                                <span>People</span>\r\n                            </span>\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <a href=\"\">\t\r\n                                        <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-1.jpg\" alt=\"\">\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">Jordan Hurst</span>\r\n                                            <span class=\"sub-title\">\r\n                                                <i class=\"ti-location-pin\"></i>\r\n                                                <span>44 Shirley Ave. West Chicago</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"\">\t\r\n                                        <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-5.jpg\" alt=\"\">\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">Jennifer Watkins</span>\r\n                                            <span class=\"sub-title\">\r\n                                                <i class=\"ti-location-pin\"></i>\r\n                                                <span>514 S. Magnolia St. Orlando</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"\">\t\r\n                                        <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-4.jpg\" alt=\"\">\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">Michael Birch</span>\r\n                                            <span class=\"sub-title\">\r\n                                                <i class=\"ti-location-pin\"></i>\r\n                                                <span>70 Bowman St. South Windsor</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"mrg-horizon-20 border top\"></div>\r\n                        <div class=\"pdd-vertical-10\">\r\n                            <span class=\"display-block mrg-vertical-5 pdd-horizon-20 text-gray\">\r\n                                <i class=\"ti-rss pdd-right-5\"></i>\r\n                                <span>Post</span>\r\n                            </span>\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <a href=\"\">\t\r\n                                        <img class=\"thumb-img\" src=\"assets/images/img-1.jpg\" alt=\"\">\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">Artoo expresses his relief</span>\r\n                                            <span class=\"sub-title\">\r\n                                                <span>Oh, thank goodness we're coming out...</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"\">\t\r\n                                        <img class=\"thumb-img\" src=\"assets/images/img-2.jpg\" alt=\"\">\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">Ready for some power?</span>\r\n                                            <span class=\"sub-title\">\r\n                                                <span>Lord Vader. You may take Caption So...</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"search-footer\">\r\n                        <span>You are Searching for '<b class=\"text-dark\"><span class=\"serach-text-bind\"></span></b>'</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav-right\">\r\n            <li class=\"user-profile dropdown\">\r\n                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <img class=\"profile-img img-fluid\" src=\"assets/images/user.jpg\">\r\n                    <div class=\"user-info\">\r\n                        <span class=\"name pdd-right-5\">Nate Leong</span>\r\n                        <i class=\"ti-angle-down font-size-10\"></i>\r\n                    </div>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i class=\"ti-settings pdd-right-10\"></i>\r\n                            <span>Setting</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i class=\"ti-user pdd-right-10\"></i>\r\n                            <span>Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i class=\"ti-email pdd-right-10\"></i>\r\n                            <span>Inbox</span>\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"separator\" class=\"divider\"></li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i class=\"ti-power-off pdd-right-10\"></i>\r\n                            <span>Logout</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"notifications dropdown\">\r\n                <span class=\"counter\">2</span>\r\n                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"ti-bell\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu \">\r\n                    <li class=\"notice-header\">\r\n                        <i class=\"ti-bell pdd-right-10\"></i>\r\n                        <span>Notifications</span>\r\n                    </li>\r\n                    <ul [perfectScrollbar] class=\"list-info overflow-y-auto relative scrollable\">\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-5.jpg\" alt=\"\">\r\n                                <div class=\"info\">\r\n                                    <span class=\"title\">\r\n                                        <span class=\"font-size-14 text-semibold\">Jennifer Watkins</span> \r\n                                        <span class=\"text-gray\">commented on your <span class=\"text-dark\">post</span></span> \r\n                                    </span>\r\n                                    <span class=\"sub-title\">5 mins ago</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-4.jpg\" alt=\"\">\r\n                                <div class=\"info\">\r\n                                    <span class=\"title\">\r\n                                        <span class=\"font-size-14 text-semibold\">Samuel Field</span> \r\n                                        <span class=\"text-gray\">likes your <span class=\"text-dark\">photo</span></span> \r\n                                    </span>\r\n                                    <span class=\"sub-title\">8 hours ago</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <span class=\"thumb-img bg-primary\">\r\n                                        <span class=\"text-white\">M</span>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <span class=\"title\">\r\n                                        <span class=\"font-size-14 text-semibold\">Michael Birch</span> \r\n                                        <span class=\"text-gray\">likes your <span class=\"text-dark\">photo</span></span> \r\n                                    </span>\r\n                                    <span class=\"sub-title\">5 hours ago</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <span class=\"thumb-img bg-success\">\r\n                                    <span class=\"text-white\"><i class=\"fa fa-paper-plane-o\"></i></span>\r\n                                </span>\r\n                                <div class=\"info\">\r\n                                    <span class=\"title\">\r\n                                        <span class=\"font-size-14 text-semibold\">Message sent</span>\r\n                                    </span>\r\n                                    <span class=\"sub-title\">8 hours ago</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">\r\n                                <span class=\"thumb-img bg-info\">\r\n                                    <span class=\"text-white\"><i class=\"ti-user\"></i></span>\r\n                                </span>\r\n                                <div class=\"info\">\r\n                                    <span class=\"title\">\r\n                                        <span class=\"font-size-14 text-semibold\">Admin</span> \r\n                                        <span class=\"text-gray\">Welcome on board</span> \r\n                                    </span>\r\n                                    <span class=\"sub-title\">8 hours ago</span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <li class=\"notice-footer\">\r\n                        <span>\r\n                            <a href=\"\" class=\"text-gray\">Check all notifications <i class=\"ei-right-chevron pdd-left-5 font-size-10\"></i></a>\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <a class=\"side-panel-toggle\" href=\"javascript:void(0);\" (click)=\"toggleSidePanelOpen()\">\r\n                    <i class=\"ti-align-right\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/template/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(tplSvc) {
        this.tplSvc = tplSvc;
        this.searchActived = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tplSvc.isSideNavCollapseChanges.subscribe(function (isCollapse) { return _this.isCollapse = isCollapse; });
        this.tplSvc.isSidePanelOpenChanges.subscribe(function (isOpen) { return _this.isOpen = isOpen; });
    };
    HeaderComponent.prototype.toggleSideNavCollapse = function () {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    };
    HeaderComponent.prototype.toggleSidePanelOpen = function () {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    };
    HeaderComponent.prototype.toggleSearch = function () {
        this.searchActived = !this.searchActived;
        console.log(this.searchActived);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/template/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/template/side-nav/side-nav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/template/side-nav/side-nav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\" sideBar>\r\n    <div class=\"side-nav-inner\">\r\n        <div class=\"side-nav-logo\">\r\n            <a href=\"\" [routerLink]=\"['/dashboard']\">\r\n                <div class=\"logo logo-dark\" style=\"background-image: url('assets/images/logo/logo.png')\"></div>\r\n                <div class=\"logo logo-white\" style=\"background-image: url('assets/images/logo/logo-white.png')\"></div>\r\n            </a>\r\n            <div class=\"mobile-toggle side-nav-toggle\">\r\n                <a (click)=\"toggleSideNavCollapse()\" href=\"javascript:void(0);\">\r\n                    <i class=\"ti-arrow-circle-left\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <ul class=\"side-nav-menu scrollable\" [perfectScrollbar]>\r\n            <li clas=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"mrg-top-30\" href=\"\" [routerLink]=\"['/dashboard']\">\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-home\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" >\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\" >\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-package\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Apps</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/apps/email/email-inbox/1']\">Email</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/apps/calendar']\">Calendar</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/apps/social']\">Social</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/apps/task']\">Task</a>\r\n                    </li>              \r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" routerLinkActive=\"open\">\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\">\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-palette\"></i>\r\n                    </span>\r\n                    <span class=\"title\">UI Elements</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/cards']\">Cards</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/buttons']\">Buttons</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/modals']\">Modals</a>\r\n                    </li>\r\n                    <li> \r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/tabs']\">Tabs &amp; Accordions</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/progress-slider']\">Progress &amp; Slider</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/notification']\">Notification</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/ui-elements/typography']\">Typography</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" >\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\" >\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-file\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Forms</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/forms/form-elements']\">Form Elements</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/forms/form-layouts']\">Form Layouts</a>\r\n                    </li>  \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/forms/form-wizard']\">Form Wizard</a>\r\n                    </li>                     \r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" routerLinkActive=\"open\">\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\" >\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-layout-media-overlay\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Tables</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/tables/basic-table']\">Basic Table</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/tables/data-table']\">Data Table</a>\r\n                    </li>                     \r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" >\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\" >\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-pie-chart\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Charts</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/charts/nvd3']\">Nvd3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/charts/chartjs']\">ChartJs</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/charts/sparkline']\">Sparkline</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" routerLinkActive=\"open\">\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\" >\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-map-alt\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Map</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/maps/google-map']\">Google Map</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/maps/vector-map']\">Vector Map</a>\r\n                    </li>               \r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\">\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-cloud\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Extra</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/extras/invoice']\">Invoice</a>\r\n                    </li>  \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/extras/account-setting']\">Account Settings</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/extras/faq']\">FAQ</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/extras/gallery']\">Gallery</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/authentication/sign-in']\">Sign In</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/authentication/sign-in2']\">Sign In 2</a>\r\n                    </li>  \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/authentication/sign-up']\">Sign Up</a>\r\n                    </li> \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/authentication/404']\">404</a>\r\n                    </li>  \r\n                    <li>\r\n                        <a href=\"\" [routerLink]=\"['/authentication/500']\">500</a>\r\n                    </li>              \r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"dropdown-toggle\" href=\"javascript:void(0);\">\r\n                    <span class=\"icon-holder\">\r\n                        <i class=\"ti-view-list-alt\"></i>\r\n                    </span>\r\n                    <span class=\"title\">Multiple Levels</span>\r\n                    <span class=\"arrow\">\r\n                        <i class=\"ti-angle-right\"></i>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li class=\"nav-item dropdown\">\r\n                        <a href=\"javascript:void(0);\">\r\n                            <span>Level 1.2</span>\r\n                        </a>\r\n                    </li>\t\r\n                    <li class=\"nav-item dropdown\">\r\n                        <a href=\"javascript:void(0);\">\r\n                            <span>Level 1.1</span>\r\n                            <span class=\"arrow\">\r\n                                <i class=\"ti-angle-right\"></i>\r\n                            </span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\">Level 2</a>\r\n                            </li>         \r\n                        </ul>\r\n                    </li>         \r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/template/side-nav/side-nav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/template/side-nav/side-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(tplSvc, router) {
        var _this = this;
        this.tplSvc = tplSvc;
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (window.innerWidth < 992) {
                    _this.tplSvc.toggleSideNavCollapse(false);
                }
            }
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tplSvc.isSideNavCollapseChanges.subscribe(function (isCollapse) { return _this.isCollapse = isCollapse; });
    };
    SideNavComponent.prototype.toggleSideNavCollapse = function () {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/template/side-nav/side-nav.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/template/side-panel/side-panel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/template/side-panel/side-panel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-panel\" [ngClass]=\"{'side-panel-open' : isOpen}\">\r\n    <div class=\"side-panel-wrapper bg-white\">\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#chat\" role=\"tab\" data-toggle=\"tab\">\r\n                    <span>Chat</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#profile\" role=\"tab\" data-toggle=\"tab\">\r\n                    <span>Profile</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link\" href=\"#todo-list\" role=\"tab\" data-toggle=\"tab\">\r\n                    <span>Todo</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"panel-close\">\r\n                <a class=\"side-panel-toggle\" href=\"javascript:void(0);\" (click)=\"toggleSidePanelOpen()\">\r\n                    <i class=\"ti-close\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n            <!-- chat START -->\r\n            <div id=\"chat\" role=\"tabpanel\" class=\"tab-pane fade in active\">\r\n                <div class=\"chat\">\r\n                    <div class=\"chat-user-list scrollable\">\r\n                        <div class=\"chat-section\">\r\n                            <h5 class=\"chat-title\">Recent</h5>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-1.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name\">Jordan Hurst</span>\r\n                                    <span class=\"prev-chat\">What good's a reward if...</span>\r\n                                </div>\r\n                                <span class=\"status online\"><span></span></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-2.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name\">Harriet Douglas</span>\r\n                                    <span class=\"prev-chat\">Don't talk to me, stranger...</span>\r\n                                </div>\r\n                                <span class=\"status no-disturb\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-3.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name\">Victoria Clayton</span>\r\n                                    <span class=\"prev-chat\">Well, the Force is what...</span>\r\n                                </div>\r\n                                <span class=\"status away\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-6.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name\">Michael Birch</span>\r\n                                    <span class=\"prev-chat\">Good. Use your aggressive...</span>\r\n                                </div>\r\n                                <span class=\"status online\"></span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"chat-section\">\r\n                            <h5 class=\"chat-title\">Members</h5>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-4.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Samuel Field</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-5.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Jennifer Watkins</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-6.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Michael Birch</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-10.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Renee Edwards</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-11.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Kathy White</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                            <a href=\"javascript:void(0);\" class=\"chat-user chat-toggle\">\t\r\n                                <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-9.jpg\" alt=\"\">\r\n                                <div class=\"user-info\">\r\n                                    <span class=\"user-name pdd-top-5\">Daryl Ellis</span>\r\n                                </div>\r\n                                <span class=\"status\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"conversation\">\r\n                        <div class=\"conversation-wrapper\">\r\n                            <div class=\"conversation-header\">\r\n                                <a href=\"javascript:void(0);\" class=\"back chat-toggle\">\r\n                                    <i class=\"ti-arrow-circle-left\"></i>\r\n                                </a>\r\n                                <span class=\"user-name\">Jordan Hurst</span>\r\n                            </div>\r\n                            <div class=\"conversation-body\">\r\n                                <div class=\"msg\">\r\n                                    <div class=\"bubble me\">\r\n                                        <span>Feeling all right, sir?</span>\r\n                                    </div>\r\n                                </div>\t\r\n                                <div class=\"msg\">\r\n                                    <div class=\"bubble friend\">\r\n                                        <span>Just like new</span>\r\n                                    </div>\r\n                                </div>\t\r\n                                <div class=\"msg\">\t\r\n                                    <div class=\"bubble friend\">\r\n                                        <span>How about you?</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"msg\">\t\r\n                                    <div class=\"bubble me\">\r\n                                        <span>Right now I feel I could take on the whole Empire myself</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"msg\">\t\r\n                                    <div class=\"bubble friend\">\r\n                                        <span>All right</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"conversation-footer\">\r\n                                <button class=\"upload-btn\">\r\n                                    <i class=\"ti-camera\"></i>\r\n                                </button>\r\n                                <input class=\"chat-input\" type=\"text\" placeholder=\"Type a message...\">\r\n                                <button class=\"sent-btn\">\r\n                                    <i class=\"fa fa-send-o\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- chat END -->\r\n            <!-- profile START -->\r\n            <div id=\"profile\" role=\"tabpanel\" class=\"tab-pane fade\">\r\n                <div class=\"profile scrollable\">\r\n                    <div class=\"pdd-horizon-20 pdd-top-20\">\r\n                        <div class=\"border bottom\">\r\n                            <div class=\"text-center mrg-top-20\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                                        <img class=\"img-fluid border-radius-round\" src=\"assets/images/avatars/user-1.jpg\">\r\n                                    </div>\r\n                                </div>\r\n                                <h4 class=\"mrg-top-20\">Nate Leong</h4>\r\n                                <span class=\"\">@Frontend Developer</span>\r\n                            </div>\r\n                            <div class=\"row text-center pdd-vertical-20\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4 col-xs-4 border right\">\r\n                                            <div class=\"pdd-vertical-10\">\r\n                                                <span class=\"font-size-18 text-dark d-block\">18</span>\r\n                                                <small>Projects</small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4 col-xs-4 border right\">\r\n                                            <div class=\"pdd-vertical-10\">\r\n                                                <span class=\"font-size-18 text-dark d-block\">1,362</span>\r\n                                                <small>Followers</small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4 col-xs-4\">\r\n                                            <div class=\"pdd-vertical-10\">\r\n                                                <span class=\"font-size-18 text-dark d-block\">362</span>\r\n                                                <small>Points</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"pdd-horizon-20 pdd-top-20\">\r\n                        <div class=\"border bottom\">\r\n                            <h5 class=\"text-dark mrg-btm-20\">Quick Tools</h5>\r\n                            <ul class=\"list-unstyled list-link font-size-16 pdd-btm-20\">\r\n                                <li>\r\n                                    <a href=\"\">\r\n                                        <i class=\"ti-user pdd-right-10\"></i>\r\n                                        <span>Friend Request</span>\r\n                                        <span class=\"label label-info mrg-left-5\">2</span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"\">\r\n                                        <i class=\"ti-book pdd-right-10\"></i>\r\n                                        <span>Inbox</span>\r\n                                        <span class=\"label label-warning mrg-left-5\">8</span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"\">\r\n                                        <i class=\"ti-settings pdd-right-10\"></i>\r\n                                        <span>Settings</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"padding-20\">\r\n                        <h5 class=\"text-dark mrg-btm-20\">Recent</h5>\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <a href=\"\">\t\r\n                                    <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-1.jpg\" alt=\"\">\r\n                                    <div class=\"info\">\r\n                                        <span class=\"title\">Jordan Hurst</span>\r\n                                        <span class=\"sub-title\">have send you a request</span>\r\n                                        <span class=\"float-object\">8m</span>\r\n                                    </div>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"\">\t\r\n                                    <img class=\"thumb-img\" src=\"assets/images/avatars/thumb-4.jpg\" alt=\"\">\r\n                                    <div class=\"info\">\r\n                                        <span class=\"title\">Samuel Field</span>\r\n                                        <span class=\"sub-title\">have send you a request</span>\r\n                                        <span class=\"float-object\">7d</span>\r\n                                    </div>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"\">\t\r\n                                    <span class=\"thumb-img bg-info text-center font-size-25 font-secondary\">\r\n                                        <span class=\"text-white\">E</span>\r\n                                    </span>\r\n                                    <div class=\"info\">\r\n                                        <span class=\"title\">Espire</span>\r\n                                        <span class=\"sub-title\">Welcome on Board</span>\r\n                                        <span class=\"float-object\">7d</span>\r\n                                    </div>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- profile END --> \r\n            <!-- todo START -->\r\n            <div id=\"todo-list\" role=\"tabpanel\" class=\"tab-pane fade\">\r\n                <div class=\"todo-wrapper\">\r\n                    <div class=\"todo-category-wrapper\">\r\n                        <div class=\"row mrg-btm-15\">\r\n                            <div class=\"col-md-12\">\r\n                                <h3 class=\"no-mrg-top\">Todo List</h3>\r\n                            </div>\r\n                        </div>\t\r\n                        <a href=\"javascript:void(0);\" class=\"todo-toggle\">\r\n                            <div class=\"todo-category\">\r\n                                <span class=\"amount\">8</span>\r\n                                <span class=\"category\">Today</span>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript:void(0);\" class=\"todo-toggle\">\r\n                            <div class=\"todo-category\">\r\n                                <span class=\"amount\">18</span>\r\n                                <span class=\"category\">This Week</span>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript:void(0);\" class=\"todo-toggle\">\r\n                            <div class=\"todo-category\">\r\n                                <span class=\"amount\">28</span>\r\n                                <span class=\"category\">This Month</span>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript:void(0);\" class=\"todo-toggle\">\r\n                            <div class=\"create-category\">\r\n                                <i class=\"amount fa fa-plus-circle\"></i>\r\n                                <span class=\"category\">New Category</span>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    \r\n                    <div class=\"todolist-wrapper\">\r\n                        <div class=\"todolist-header\">\r\n                            <a href=\"javascript:void(0);\" class=\"back todo-toggle\">\r\n                                <i class=\"ti-arrow-circle-left\"></i>\r\n                            </a>\r\n                            <h3 class=\"category\">This Week</h3>\r\n                            <a href=\"\" class=\"add\">\r\n                                <span>ADD</span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"todolist-body\">\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"task1\" name=\"task1\" type=\"checkbox\">\r\n                                <label for=\"task1\">I hope the old man got that tractor </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"task2\" name=\"task2\" type=\"checkbox\">\r\n                                <label for=\"task2\">Come on, come on!</label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"task3\" name=\"task3\" type=\"checkbox\">\r\n                                <label for=\"task3\">it was dangerous here</label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"task4\" name=\"task4\" type=\"checkbox\">\r\n                                <label for=\"task4\">I hope the old man got that tractor </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"task5\" name=\"task5\" type=\"checkbox\">\r\n                                <label for=\"task5\">Artoo! Artoo, quickly!</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"todolist-body\">\t\r\n                            <div class=\"pdd-btm-5 mrg-btm-15 border bottom\">\r\n                                <p class=\"mrg-btm-5\">Completed</p>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"completed-1\" name=\"completed-1\" type=\"checkbox\" checked=\"\">\r\n                                <label for=\"completed-1\">I hope the old man got that tractor </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"completed-2\" name=\"completed-2\" type=\"checkbox\" checked=\"\">\r\n                                <label for=\"completed-2\">Come on, come on!</label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <button class=\"delete\">\r\n                                    <i class=\"ti-close\"></i>\r\n                                </button>\r\n                                <input id=\"completed-3\" name=\"completed-3\" type=\"checkbox\" checked=\"\">\r\n                                <label for=\"completed-3\">it was dangerous here</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\t\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/template/side-panel/side-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/template/side-panel/side-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(tplSvc) {
        this.tplSvc = tplSvc;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tplSvc.isSidePanelOpenChanges.subscribe(function (isOpen) { return _this.isOpen = isOpen; });
    };
    SidePanelComponent.prototype.toggleSidePanelOpen = function () {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    };
    SidePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-panel',
            template: __webpack_require__(/*! ./side-panel.component.html */ "./src/app/template/side-panel/side-panel.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]])
    ], SidePanelComponent);
    return SidePanelComponent;
}());



/***/ }),

/***/ "./src/app/template/template.module.ts":
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/template/header/header.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/template/side-nav/side-nav.component.ts");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-panel/side-panel.component */ "./src/app/template/side-panel/side-panel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/template/footer/footer.component.ts");
/* harmony import */ var _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/side-nav.directive */ "./src/app/shared/directives/side-nav.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
                _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["Sidebar_Directives"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
                _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["Sidebar_Directives"]
            ],
            providers: []
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Hamza/Documents/Node/kushdesk-1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map