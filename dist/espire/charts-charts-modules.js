(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-modules"],{

/***/ "./src/app/charts/chartjs/chartjs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartJsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsComponent", function() { return ChartJsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent(colorConfig) {
        this.colorConfig = colorConfig;
        this.themeColors = this.colorConfig.get().colors;
        //Pie Chart Config
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 300, 500];
        this.pieChartType = 'pie';
        this.pieChartLegend = false;
        this.pieChartColors = [{
                backgroundColor: [this.themeColors.info, this.themeColors.primary, this.themeColors.success],
                pointBackgroundColor: [this.themeColors.info, this.themeColors.primary, this.themeColors.success]
            }];
        //Donut Chart Config
        this.donutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.donutChartData = [300, 500, 100];
        this.donutChartType = 'doughnut';
        this.donutChartLegend = false;
        this.dountChartOptions = {
            cutoutPercentage: 75
        };
        this.donutChartColors = [{
                backgroundColor: [this.themeColors.info, this.themeColors.dark, this.themeColors.success],
                pointBackgroundColor: [this.themeColors.info, this.themeColors.dark, this.themeColors.success]
            }];
        //Radar Chart Config
        this.radarChartLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartLegend = false;
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: this.themeColors.successInverse,
                borderColor: this.themeColors.success,
                pointBackgroundColor: this.themeColors.success
            },
            {
                backgroundColor: this.themeColors.warningInverse,
                borderColor: this.themeColors.warning,
                pointBackgroundColor: this.themeColors.warning
            }
        ];
        //Polar Chart Config
        this.polarChartLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        this.polarChartData = [300, 400, 100, 200, 100];
        this.polarChartType = 'polarArea';
        this.polarChartLegend = false;
        this.polarChartColors = [{
                backgroundColor: [this.themeColors.success, this.themeColors.info, this.themeColors.warning, this.themeColors.primary, this.themeColors.danger],
                borderColor: [this.themeColors.white, this.themeColors.white, this.themeColors.white, this.themeColors.white, this.themeColors.white]
            }];
        //Line Chart Config
        this.lineChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 90, 27, 75], label: 'Series B' }
        ];
        this.lineChartOptions = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: false
                    }
                ]
            },
            maintainAspectRatio: false
        };
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: this.themeColors.infoInverse,
                borderColor: this.themeColors.info
            },
            {
                backgroundColor: this.themeColors.successInverse,
                borderColor: this.themeColors.success
            }
        ];
        //Bar Chart Config
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40, 37, 54, 76, 63, 62], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90, 43, 65, 76, 87, 85], label: 'Series B' }
        ];
        this.barChartColors = [
            {
                backgroundColor: this.themeColors.info,
                borderColor: this.themeColors.info
            },
            {
                backgroundColor: this.themeColors.primaryInverse,
                borderColor: this.themeColors.danger
            }
        ];
    }
    ChartJsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./chartjs.html */ "./src/app/charts/chartjs/chartjs.html")
        }),
        __metadata("design:paramtypes", [_shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__["ThemeConstants"]])
    ], ChartJsComponent);
    return ChartJsComponent;
}());



/***/ }),

/***/ "./src/app/charts/chartjs/chartjs.html":
/*!*********************************************!*\
  !*** ./src/app/charts/chartjs/chartjs.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>ChartJs </h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Pie Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" [legend]=\"pieChartLegend\" [colors]=\"pieChartColors\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Donut Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart [data]=\"donutChartData\" [labels]=\"donutChartLabels\" [chartType]=\"donutChartType\"[legend] = \"donutChartLegend\" [colors]=\"donutChartColors\" [options]=\"dountChartOptions\"></canvas>                        \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Radar Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" [legend]=\"radarChartLegend\" [colors]=\"radarChartColors\"></canvas>                        \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Polar Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart [data]=\"polarChartData\" [labels]=\"polarChartLabels\" [chartType]=\"polarChartType\" [legend]=\"polarChartLegend\" [colors]=\"polarChartColors\"></canvas>     \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Line Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bar Chart</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <canvas baseChart height=\"80\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" [colors]=\"barChartColors\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\t"

/***/ }),

/***/ "./src/app/charts/charts.modules.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.modules.ts ***!
  \******************************************/
/*! exports provided: Charts_Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts_Module", function() { return Charts_Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts.routing */ "./src/app/charts/charts.routing.ts");
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/charts/chartjs/chartjs.component.ts");
/* harmony import */ var _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sparkline/sparkline.component */ "./src/app/charts/sparkline/sparkline.component.ts");
/* harmony import */ var _nvd3_nvd3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nvd3/nvd3.component */ "./src/app/charts/nvd3/nvd3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Charts Component



var Charts_Module = /** @class */ (function () {
    function Charts_Module() {
    }
    Charts_Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_7__["ChartsRoutes"]),
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_6__["NvD3Module"]
            ],
            declarations: [
                _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_8__["ChartJsComponent"],
                _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_9__["SparkLineComponent"],
                _nvd3_nvd3_component__WEBPACK_IMPORTED_MODULE_10__["Nvd3Component"]
            ],
            providers: [
                _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_2__["ThemeConstants"]
            ]
        })
    ], Charts_Module);
    return Charts_Module;
}());



/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.routing.ts ***!
  \******************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/charts/chartjs/chartjs.component.ts");
/* harmony import */ var _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparkline/sparkline.component */ "./src/app/charts/sparkline/sparkline.component.ts");
/* harmony import */ var _nvd3_nvd3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nvd3/nvd3.component */ "./src/app/charts/nvd3/nvd3.component.ts");
//Charts Components



var ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chartjs',
                component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_0__["ChartJsComponent"],
                data: {
                    title: 'Chart Js'
                }
            },
            {
                path: 'sparkline',
                component: _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_1__["SparkLineComponent"],
                data: {
                    title: 'Sparkline'
                }
            },
            {
                path: 'nvd3',
                component: _nvd3_nvd3_component__WEBPACK_IMPORTED_MODULE_2__["Nvd3Component"],
                data: {
                    title: 'nvd3'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/charts/nvd3/nvd3.component.ts":
/*!***********************************************!*\
  !*** ./src/app/charts/nvd3/nvd3.component.ts ***!
  \***********************************************/
/*! exports provided: Nvd3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nvd3Component", function() { return Nvd3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Nvd3Component = /** @class */ (function () {
    function Nvd3Component(colorConfig) {
        this.colorConfig = colorConfig;
    }
    Nvd3Component.prototype.ngOnInit = function () {
        var themeColors = this.colorConfig.get().colors;
        this.lineChartOption = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                }
            }
        };
        this.lineChartData = this.sinAndCos();
        this.barChartOption = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value + (1e-10); },
                color: [
                    themeColors.danger,
                    themeColors.success
                ],
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        this.barChartData = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A",
                        "value": -29.76
                    },
                    {
                        "label": "B",
                        "value": 12
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 72
                    },
                    {
                        "label": "F",
                        "value": -52.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -24.1387322875705
                    }
                ]
            }
        ];
        this.areaChartOptions = {
            chart: {
                type: 'stackedAreaChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                color: [
                    themeColors.success,
                    themeColors.warning,
                    themeColors.primary
                ],
                x: function (d) { return d[0]; },
                y: function (d) { return d[1]; },
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function (d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                yAxis: {
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };
        this.areaChartData = [
            {
                "key": "North America",
                "values": [[1025409600000, 23.041422681023], [1028088000000, 19.854291255832], [1030766400000, 21.02286281168], [1033358400000, 22.093608385173], [1036040400000, 25.108079299458], [1038632400000, 26.982389242348], [1041310800000, 19.828984957662], [1043989200000, 19.914055036294], [1046408400000, 19.436150539916], [1049086800000, 21.558650338602], [1051675200000, 24.395594061773], [1054353600000, 24.747089309384], [1056945600000, 23.491755498807], [1059624000000, 23.376634878164], [1062302400000, 24.581223154533], [1064894400000, 24.922476843538], [1067576400000, 27.357712939042], [1070168400000, 26.503020572593], [1072846800000, 26.658901244878], [1075525200000, 27.065704156445], [1078030800000, 28.735320452588], [1080709200000, 31.572277846319], [1083297600000, 30.932161503638], [1085976000000, 31.627029785554], [1088568000000, 28.728743674232], [1091246400000, 26.858365172675], [1093924800000, 27.279922830032], [1096516800000, 34.408301211324], [1099195200000, 34.794362930439], [1101790800000, 35.609978198951], [1104469200000, 33.574394968037], [1107147600000, 31.979405070598], [1109566800000, 31.19009040297], [1112245200000, 31.083933968994], [1114833600000, 29.668971113185], [1117512000000, 31.490638014379], [1120104000000, 31.818617451128], [1122782400000, 32.960314008183], [1125460800000, 31.313383196209], [1128052800000, 33.125486081852], [1130734800000, 32.791805509149], [1133326800000, 33.506038030366], [1136005200000, 26.96501697216], [1138683600000, 27.38478809681], [1141102800000, 27.371377218209], [1143781200000, 26.309915460827], [1146369600000, 26.425199957518], [1149048000000, 26.823411519396], [1151640000000, 23.850443591587], [1154318400000, 23.158355444054], [1156996800000, 22.998689393695], [1159588800000, 27.9771285113], [1162270800000, 29.073672469719], [1164862800000, 28.587640408904], [1167541200000, 22.788453687637], [1170219600000, 22.429199073597], [1172638800000, 22.324103271052], [1175313600000, 17.558388444187], [1177905600000, 16.769518096208], [1180584000000, 16.214738201301], [1183176000000, 18.729632971229], [1185854400000, 18.814523318847], [1188532800000, 19.789986451358], [1191124800000, 17.070049054933], [1193803200000, 16.121349575716], [1196398800000, 15.141659430091], [1199077200000, 17.175388025297], [1201755600000, 17.286592443522], [1204261200000, 16.323141626568], [1206936000000, 19.231263773952], [1209528000000, 18.446256391095], [1212206400000, 17.822632399764], [1214798400000, 15.53936647598], [1217476800000, 15.255131790217], [1220155200000, 15.660963922592], [1222747200000, 13.254482273698], [1225425600000, 11.920796202299], [1228021200000, 12.122809090924], [1230699600000, 15.691026271393], [1233378000000, 14.720881635107], [1235797200000, 15.387939360044], [1238472000000, 13.765436672228], [1241064000000, 14.631445864799], [1243742400000, 14.292446536221], [1246334400000, 16.170071367017], [1249012800000, 15.948135554337], [1251691200000, 16.612872685134], [1254283200000, 18.778338719091], [1256961600000, 16.756026065421], [1259557200000, 19.385804443146], [1262235600000, 22.950590240168], [1264914000000, 23.61159018141], [1267333200000, 25.708586989581], [1270008000000, 26.883915999885], [1272600000000, 25.893486687065], [1275278400000, 24.678914263176], [1277870400000, 25.937275793024], [1280548800000, 29.461381693838], [1283227200000, 27.357322961861], [1285819200000, 29.057235285673], [1288497600000, 28.549434189386], [1291093200000, 28.506352379724], [1293771600000, 29.449241421598], [1296450000000, 25.796838168807], [1298869200000, 28.740145449188], [1301544000000, 22.091744141872], [1304136000000, 25.07966254541], [1306814400000, 23.674906973064], [1309406400000, 23.418002742929], [1312084800000, 23.24364413887], [1314763200000, 31.591854066817], [1317355200000, 31.497112374114], [1320033600000, 26.67238082043], [1322629200000, 27.297080015495], [1325307600000, 20.174315530051], [1327986000000, 19.631084213898], [1330491600000, 20.366462219461], [1333166400000, 19.284784434185], [1335758400000, 19.157810257624]]
            },
            {
                "key": "Africa",
                "values": [[1025409600000, 7.9356392949025], [1028088000000, 7.4514668527298], [1030766400000, 7.9085410566608], [1033358400000, 5.8996782364764], [1036040400000, 6.0591869346923], [1038632400000, 5.9667815800451], [1041310800000, 8.65528925664], [1043989200000, 8.7690763386254], [1046408400000, 8.6386160387453], [1049086800000, 5.9895557449743], [1051675200000, 6.3840324338159], [1054353600000, 6.5196511461441], [1056945600000, 7.0738618553114], [1059624000000, 6.5745957367133], [1062302400000, 6.4658359184444], [1064894400000, 2.7622758754954], [1067576400000, 2.9794782986241], [1070168400000, 2.8735432712019], [1072846800000, 1.6344817513645], [1075525200000, 1.5869248754883], [1078030800000, 1.7172279157246], [1080709200000, 1.9649927409867], [1083297600000, 2.0261695079196], [1085976000000, 2.0541261923929], [1088568000000, 3.9466318927569], [1091246400000, 3.7826770946089], [1093924800000, 3.9543021004028], [1096516800000, 3.8309891064711], [1099195200000, 3.6340958946166], [1101790800000, 3.5289755762525], [1104469200000, 5.702378559857], [1107147600000, 5.6539569019223], [1109566800000, 5.5449506370392], [1112245200000, 4.7579993280677], [1114833600000, 4.4816139372906], [1117512000000, 4.5965558568606], [1120104000000, 4.3747066116976], [1122782400000, 4.4588822917087], [1125460800000, 4.4460351848286], [1128052800000, 3.7989113035136], [1130734800000, 3.7743883140088], [1133326800000, 3.7727852823828], [1136005200000, 7.2968111448895], [1138683600000, 7.2800122043237], [1141102800000, 7.1187787503354], [1143781200000, 8.351887016482], [1146369600000, 8.4156698763993], [1149048000000, 8.1673298604231], [1151640000000, 5.5132447126042], [1154318400000, 6.1152537710599], [1156996800000, 6.076765091942], [1159588800000, 4.6304473798646], [1162270800000, 4.6301068469402], [1164862800000, 4.3466656309389], [1167541200000, 6.830104897003], [1170219600000, 7.241633040029], [1172638800000, 7.1432372054153], [1175313600000, 10.608942063374], [1177905600000, 10.914964549494], [1180584000000, 10.933223880565], [1183176000000, 8.3457524851265], [1185854400000, 8.1078413081882], [1188532800000, 8.2697185922474], [1191124800000, 8.4742436475968], [1193803200000, 8.4994601179319], [1196398800000, 8.7387319683243], [1199077200000, 6.8829183612895], [1201755600000, 6.984133637885], [1204261200000, 7.0860136043287], [1206936000000, 4.3961787956053], [1209528000000, 3.8699674365231], [1212206400000, 3.6928925238305], [1214798400000, 6.7571718894253], [1217476800000, 6.4367313362344], [1220155200000, 6.4048441521454], [1222747200000, 5.4643833239669], [1225425600000, 5.3150786833374], [1228021200000, 5.3011272612576], [1230699600000, 4.1203601430809], [1233378000000, 4.0881783200525], [1235797200000, 4.1928665957189], [1238472000000, 7.0249415663205], [1241064000000, 7.006530880769], [1243742400000, 6.994835633224], [1246334400000, 6.1220222336254], [1249012800000, 6.1177436137653], [1251691200000, 6.1413396231981], [1254283200000, 4.8046006145874], [1256961600000, 4.6647600660544], [1259557200000, 4.544865006255], [1262235600000, 6.0488249316539], [1264914000000, 6.3188669540206], [1267333200000, 6.5873958262306], [1270008000000, 6.2281189839578], [1272600000000, 5.8948915746059], [1275278400000, 5.5967320482214], [1277870400000, 0.99784432084837], [1280548800000, 1.0950794175359], [1283227200000, 0.94479734407491], [1285819200000, 1.222093988688], [1288497600000, 1.335093106856], [1291093200000, 1.3302565104985], [1293771600000, 1.340824670897], [1296450000000, 0], [1298869200000, 0], [1301544000000, 0], [1304136000000, 0], [1306814400000, 0], [1309406400000, 0], [1312084800000, 0], [1314763200000, 0], [1317355200000, 4.4583692315], [1320033600000, 3.6493043348059], [1322629200000, 3.8610064091761], [1325307600000, 5.5144800685202], [1327986000000, 5.1750695220791], [1330491600000, 5.6710066952691], [1333166400000, 5.5611890039181], [1335758400000, 5.5979368839939]]
            },
            {
                "key": "South America",
                "values": [[1025409600000, 7.9149900245423], [1028088000000, 7.0899888751059], [1030766400000, 7.5996132380614], [1033358400000, 8.2741174301034], [1036040400000, 9.3564460833513], [1038632400000, 9.7066786059904], [1041310800000, 10.213363052343], [1043989200000, 10.285809585273], [1046408400000, 10.222053149228], [1049086800000, 8.6188592137975], [1051675200000, 9.3335447543566], [1054353600000, 8.9312402186628], [1056945600000, 8.1895089343658], [1059624000000, 8.260622135079], [1062302400000, 7.7700786851364], [1064894400000, 7.9907428771318], [1067576400000, 8.7769091865606], [1070168400000, 8.4855077060661], [1072846800000, 9.6277203033655], [1075525200000, 9.9685913452624], [1078030800000, 10.615085181759], [1080709200000, 9.2902488079646], [1083297600000, 8.8610439830061], [1085976000000, 9.1075344931229], [1088568000000, 9.9156737639203], [1091246400000, 9.7826003238782], [1093924800000, 10.55403610555], [1096516800000, 10.926900264097], [1099195200000, 10.903144818736], [1101790800000, 10.862890389067], [1104469200000, 10.64604998964], [1107147600000, 10.042790814087], [1109566800000, 9.7173391591038], [1112245200000, 9.6122415755443], [1114833600000, 9.4337921146562], [1117512000000, 9.814827171183], [1120104000000, 12.059260396788], [1122782400000, 12.139649903873], [1125460800000, 12.281290663822], [1128052800000, 8.8037085409056], [1130734800000, 8.6300618239176], [1133326800000, 9.1225708491432], [1136005200000, 12.988124170836], [1138683600000, 13.356778764353], [1141102800000, 13.611196863271], [1143781200000, 6.8959030061189], [1146369600000, 6.9939633271353], [1149048000000, 6.7241510257676], [1151640000000, 5.5611293669517], [1154318400000, 5.6086488714041], [1156996800000, 5.4962849907033], [1159588800000, 6.9193153169278], [1162270800000, 7.0016334389778], [1164862800000, 6.7865422443273], [1167541200000, 9.0006454225383], [1170219600000, 9.2233916171431], [1172638800000, 8.8929316009479], [1175313600000, 10.345937520404], [1177905600000, 10.075914677026], [1180584000000, 10.089006188111], [1183176000000, 10.598330295008], [1185854400000, 9.9689546533009], [1188532800000, 9.7740580198146], [1191124800000, 10.558483060626], [1193803200000, 9.9314651823603], [1196398800000, 9.3997715873769], [1199077200000, 8.4086493387262], [1201755600000, 8.9698309085926], [1204261200000, 8.2778357995396], [1206936000000, 8.8585045600123], [1209528000000, 8.7013756413322], [1212206400000, 7.7933605469443], [1214798400000, 7.0236183483064], [1217476800000, 6.9873088186829], [1220155200000, 6.8031713070097], [1222747200000, 6.6869531315723], [1225425600000, 6.138256993963], [1228021200000, 5.6434994016354], [1230699600000, 5.495220262512], [1233378000000, 4.6885326869846], [1235797200000, 4.4524349883438], [1238472000000, 5.6766520778185], [1241064000000, 5.7675774480752], [1243742400000, 5.7882863168337], [1246334400000, 7.2666010034924], [1249012800000, 7.5191821322261], [1251691200000, 7.849651451445], [1254283200000, 10.383992037985], [1256961600000, 9.0653691861818], [1259557200000, 9.6705248324159], [1262235600000, 10.856380561349], [1264914000000, 11.27452370892], [1267333200000, 11.754156529088], [1270008000000, 8.2870811422455], [1272600000000, 8.0210264360699], [1275278400000, 7.5375074474865], [1277870400000, 8.3419527338039], [1280548800000, 9.4197471818443], [1283227200000, 8.7321733185797], [1285819200000, 9.6627062648126], [1288497600000, 10.187962234548], [1291093200000, 9.8144201733476], [1293771600000, 10.275723361712], [1296450000000, 16.796066079353], [1298869200000, 17.543254984075], [1301544000000, 16.673660675083], [1304136000000, 17.963944353609], [1306814400000, 16.63774086721], [1309406400000, 15.84857094609], [1312084800000, 14.767303362181], [1314763200000, 24.778452182433], [1317355200000, 18.370353229999], [1320033600000, 15.253137429099], [1322629200000, 14.989600840649], [1325307600000, 16.052539160125], [1327986000000, 16.424390322793], [1330491600000, 17.884020741104], [1333166400000, 18.372698836036], [1335758400000, 18.315881576096]]
            }
        ];
        this.pieChartOption = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                color: [
                    themeColors.info,
                    themeColors.danger,
                    themeColors.success
                ],
                duration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.donutChartOption = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                color: [
                    themeColors.warning,
                    themeColors.success,
                    themeColors.primary
                ],
                donut: true,
                duration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.donutChartData = [
            {
                key: "Firefox",
                y: 5
            },
            {
                key: "IE",
                y: 2
            },
            {
                key: "Chrome",
                y: 9
            }
        ];
    };
    Nvd3Component.prototype.sinAndCos = function () {
        var sin = [], sin2 = [], cos = [];
        var themeColors = this.colorConfig.get().colors;
        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
        }
        return [
            {
                values: sin,
                key: 'Sine Wave',
                color: themeColors.success
            },
            {
                values: cos,
                key: 'Cosine Wave',
                color: themeColors.danger
            },
            {
                values: sin2,
                key: 'Another sine wave',
                color: themeColors.info,
                area: true
            }
        ];
    };
    Nvd3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./nvd3.html */ "./src/app/charts/nvd3/nvd3.html")
        }),
        __metadata("design:paramtypes", [_shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__["ThemeConstants"]])
    ], Nvd3Component);
    return Nvd3Component;
}());



/***/ }),

/***/ "./src/app/charts/nvd3/nvd3.html":
/*!***************************************!*\
  !*** ./src/app/charts/nvd3/nvd3.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>Nvd3 Charts</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading border bottom\">\r\n                    <h4 class=\"card-title\">Line Chart</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <nvd3 [options]=\"lineChartOption\" [data]=\"lineChartData\"></nvd3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-heading border bottom\">\r\n                    <h4 class=\"card-title\">Discretebar Chart</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <nvd3 [options]=\"barChartOption\" [data]=\"barChartData\"></nvd3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-heading border bottom\">\r\n                    <h4 class=\"card-title\">Stacked Area Chart</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <nvd3 [options]=\"areaChartOptions\" [data]=\"areaChartData\"></nvd3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading border bottom\">\r\n                    <h4 class=\"card-title\">Pie Chart</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <nvd3 [options]=\"pieChartOption\" [data]=\"donutChartData\"></nvd3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-heading border bottom\">\r\n                    <h4 class=\"card-title\">Donut Chart</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <nvd3 [options]=\"donutChartOption\" [data]=\"donutChartData\"></nvd3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/charts/sparkline/sparkline.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/charts/sparkline/sparkline.component.ts ***!
  \*********************************************************/
/*! exports provided: SparkLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineComponent", function() { return SparkLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
/* harmony import */ var src_assets_js_jquery_sparkline_jquery_sparkline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/js/jquery.sparkline/jquery.sparkline.js */ "./src/assets/js/jquery.sparkline/jquery.sparkline.js");
/* harmony import */ var src_assets_js_jquery_sparkline_jquery_sparkline_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_jquery_sparkline_jquery_sparkline_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SparkLineComponent = /** @class */ (function () {
    function SparkLineComponent(colorConfig) {
        this.colorConfig = colorConfig;
    }
    SparkLineComponent.prototype.ngAfterViewInit = function () {
        var themeColors = this.colorConfig.get().colors;
        // dummy data
        var sparklineBarData1 = [8, 10, 8, 10, 9, 10, 8, 9, 10, 10, 7, 10, 9, 7, 8, 8];
        var sparklineBarData2 = [0, 8, 10, 8, 10, 9, 10, 8, 10, 10, 7, 10, 9,];
        var sparklineLineData1 = [32, 38, 36, 35, 38, 37, 35, 34, 36, 38, 36, 37, 35, 34, 37, 38, 38];
        var sparklineLineData2 = [7, 8, 10, 8, 10, 9, 10, 8, 10, 10, 9, 10, 9,];
        var sparklinePieData1 = [4, 3, 2, 1];
        var sparklineTristateData1 = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
        jquery__WEBPACK_IMPORTED_MODULE_3__('#bar-option-1').sparkline(sparklineBarData1, {
            type: 'bar',
            height: '60',
            barWidth: 7,
            barSpacing: 5,
            barColor: themeColors.info
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#bar-option-2").sparkline(sparklineBarData2, {
            type: 'bar',
            height: '100',
            barWidth: 7,
            barSpacing: 5,
            barColor: themeColors.success
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-1').sparkline(sparklineLineData1, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.primaryInverse,
            lineColor: themeColors.primary,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-2').sparkline(sparklineLineData2, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.successInverse,
            lineColor: themeColors.success,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-3').sparkline(sparklineLineData1, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.primaryInverse,
            lineColor: themeColors.primary,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-4').sparkline(sparklineLineData2, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.successInverse,
            lineColor: themeColors.success,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-5').sparkline(sparklineLineData1, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.primaryInverse,
            lineColor: themeColors.primary,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#line-option-6').sparkline(sparklineLineData2, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '50',
            fillColor: themeColors.successInverse,
            lineColor: themeColors.success,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#pie-option").sparkline(sparklinePieData1, {
            type: 'pie',
            height: '100',
            sliceColors: [themeColors.danger, themeColors.success, themeColors.info, themeColors.warning]
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#line-option-7").sparkline(sparklineLineData2, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '100',
            fillColor: 'rgba(0,0,0,0)',
            lineColor: themeColors.warning,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#discrete-option").sparkline(sparklineLineData1, {
            type: 'discrete',
            width: '130',
            lineColor: themeColors.primary,
            height: '100',
            lineHeight: 60
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#tristate-option").sparkline(sparklineTristateData1, {
            type: 'tristate',
            width: '130',
            height: '100',
            posBarColor: themeColors.success,
            negBarColor: themeColors.danger,
            barWidth: 7,
            barSpacing: 1
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("#line-option-8").sparkline(sparklineLineData1, {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            lineWidth: 1,
            height: '100',
            fillColor: themeColors.dangerInverse,
            lineColor: themeColors.danger,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        });
    };
    SparkLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./sparkline.html */ "./src/app/charts/sparkline/sparkline.html")
        }),
        __metadata("design:paramtypes", [_shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__["ThemeConstants"]])
    ], SparkLineComponent);
    return SparkLineComponent;
}());



/***/ }),

/***/ "./src/app/charts/sparkline/sparkline.html":
/*!*************************************************!*\
  !*** ./src/app/charts/sparkline/sparkline.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Sparkline Charts</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"inline-block\">\r\n\t\t\t\t\t\t<h1 class=\"no-mrg-vertical\">$168.90</h1>\r\n\t\t\t\t\t\t<p>Monthly Sales</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"pdd-top-25 inline-block pull-right\">\r\n\t\t\t\t\t\t<span class=\"label label-success label-lg mrg-left-5\">+18%</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mrg-top-15\">\r\n                        <div id=\"bar-option-1\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 border right no-border-md\">\r\n                            <small>Yesterday</small>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$168.90</h2>\r\n                                    <p>Buy</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-1\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$317.20</h2>\r\n                                    <p>Sell</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-2\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 border right no-border-md\">\r\n                            <small>Last Week</small>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$376.90</h2>\r\n                                    <p>Buy</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-3\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$756.20</h2>\r\n                                    <p>Sell</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-4\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 no-border-md\">\r\n                            <small>Last Month</small>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$2768.90</h2>\r\n                                    <p>Buy</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-5\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h2 class=\"no-mrg-btm\">$6432.85</h2>\r\n                                    <p>Sell</p>\r\n                                    <div class=\"mrg-top-20\">\r\n                                        <div id=\"line-option-6\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Today Sales</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"bar-option-2\"></div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">$2,597 <i class=\"ti-arrow-up text-success\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Visitors</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"pie-option\"></div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">378 <i class=\"ti-arrow-down text-danger\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Bounce rate</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"line-option-7\"></div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">378 <i class=\"ti-arrow-down text-danger\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Today Sales</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"discrete-option\">\r\n                        </div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">$2,597 <i class=\"ti-arrow-up text-success\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Today Sales</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"tristate-option\">\r\n                        </div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">$2,597 <i class=\"ti-arrow-up text-success\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block text-center\">\r\n                    <h4 class=\"card-title\">Today Sales</h4>\r\n                    <div class=\"mrg-top-40 mrg-btm-20\">\r\n                        <div id=\"line-option-8\">\r\n                        </div>\r\n                    </div>\r\n                    <h4 class=\"text-gray\">$2,597 <i class=\"ti-arrow-up text-success\"></i></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>        "

/***/ })

}]);
//# sourceMappingURL=charts-charts-modules.js.map