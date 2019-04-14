(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartjsBarHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsBarHorizontalComponent", function() { return ChartjsBarHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarHorizontalComponent = /** @class */ (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsBarHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-bar-horizontal',
            template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsBarHorizontalComponent);
    return ChartjsBarHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartjsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsBarComponent", function() { return ChartjsBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarComponent = /** @class */ (function () {
    function ChartjsBarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primaryLight, 0.8),
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.infoLight, 0.8),
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-bar',
            template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsBarComponent);
    return ChartjsBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-line.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-line.component.ts ***!
  \****************************************************************/
/*! exports provided: ChartjsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsLineComponent", function() { return ChartjsLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsLineComponent = /** @class */ (function () {
    function ChartjsLineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-line',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsLineComponent);
    return ChartjsLineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartjsMultipleXaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsMultipleXaxisComponent", function() { return ChartjsMultipleXaxisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsMultipleXaxisComponent = /** @class */ (function () {
    function ChartjsMultipleXaxisComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'dataset - big points',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - individual point sizes',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHoverRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHitRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsMultipleXaxisComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsMultipleXaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-multiple-xaxis',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsMultipleXaxisComponent);
    return ChartjsMultipleXaxisComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-pie.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-pie.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartjsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsPieComponent", function() { return ChartjsPieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsPieComponent = /** @class */ (function () {
    function ChartjsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-pie',
            template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsPieComponent);
    return ChartjsPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-radar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-radar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChartjsRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsRadarComponent", function() { return ChartjsRadarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsRadarComponent = /** @class */ (function () {
    function ChartjsRadarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ChartjsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsRadarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-radar',
            template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsRadarComponent);
    return ChartjsRadarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Pie</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-pie></ngx-chartjs-pie>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Bar</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-bar></ngx-chartjs-bar>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Line</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-line></ngx-chartjs-line>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Multiple x-axis</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-multiple-xaxis></ngx-chartjs-multiple-xaxis>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Bar Horizontal</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-bar-horizontal></ngx-chartjs-bar-horizontal>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Radar</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-chartjs-radar></ngx-chartjs-radar>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ngx-chartjs-pie,\n.nb-theme-default :host ngx-chartjs-bar,\n.nb-theme-default :host ngx-chartjs-line,\n.nb-theme-default :host ngx-chartjs-multiple-xaxis,\n.nb-theme-default :host ngx-chartjs-bar-horizontal,\n.nb-theme-default :host ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-default :host ngx-chartjs-pie /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ngx-chartjs-pie,\n.nb-theme-cosmic :host ngx-chartjs-bar,\n.nb-theme-cosmic :host ngx-chartjs-line,\n.nb-theme-cosmic :host ngx-chartjs-multiple-xaxis,\n.nb-theme-cosmic :host ngx-chartjs-bar-horizontal,\n.nb-theme-cosmic :host ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-cosmic :host ngx-chartjs-pie /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host ngx-chartjs-pie,\n.nb-theme-corporate :host ngx-chartjs-bar,\n.nb-theme-corporate :host ngx-chartjs-line,\n.nb-theme-corporate :host ngx-chartjs-multiple-xaxis,\n.nb-theme-corporate :host ngx-chartjs-bar-horizontal,\n.nb-theme-corporate :host ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-corporate :host ngx-chartjs-pie /deep/ chart,\n  .nb-theme-corporate :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-corporate :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-corporate :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-corporate :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-corporate :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnRzL2NoYXJ0anMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2NoYXJ0anMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydGpzL0c6XFzpmo/nrJRcXGdpdHNcXEJCU1xcQWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2Nvc21pYy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL3NyY1xcYXBwXFxwYWdlc1xcY2hhcnRzXFxjaGFydGpzXFxjaGFydGpzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSDs7R0FFRztBQ1RIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBQ3ZURjs7OztHQUlHO0FDSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUd2VEY7Ozs7R0FJRztBRkpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUl2VEY7Ozs7R0FJRztBSEpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QURyTUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7Ozs7OztFQU1FLGVBQWM7RUFDZCxjSCtFdUI7RUc5RXZCLFlBQVcsRUFPWjtBQUxDOzs7Ozs7SUFDRSxlQUFjO0lBQ2QsYUFBWTtJQUNaLFlBQVcsRUFDWjtBTmlHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWxJSjs7Ozs7O0VBTUUsZUFBYztFQUNkLGNIK0V1QjtFRzlFdkIsWUFBVyxFQU9aO0FBTEM7Ozs7OztJQUNFLGVBQWM7SUFDZCxhQUFZO0lBQ1osWUFBVyxFQUNaO0FOaUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNbElKOzs7Ozs7RUFNRSxlQUFjO0VBQ2QsY0grRXVCO0VHOUV2QixZQUFXLEVBT1o7QUFMQzs7Ozs7O0lBQ0UsZUFBYztJQUNkLGFBQVk7SUFDWixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcblxuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzOiBmYWxzZSAhZ2xvYmFsO1xuXG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgJHRtcDogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgICBAaWYgKCR0bXAgIT0gbnVsbCkge1xuICAgICAgQHJldHVybiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICR0bXApO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gY29udmVydC10by1jc3MtdmFyaWFibGVzKCR2YXJpYWJsZXMpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAkcmVzdWx0OiBtYXAtc2V0KCRyZXN1bHQsICR2YXIsICctLXZhcigjeyR2YXJ9KScpO1xuICB9XG5cbiAgQGRlYnVnICRyZXN1bHQ7XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1yYWRpYWwtZ3JhZGllbnQoJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMykge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItMjsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpkeGltYWdldHJhbnNmb3JtLm1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSckY29sb3ItMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yc3RyPSckY29sb3ItMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWRpZW50VHlwZT0xKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG5AbWl4aW4gbmItcmlnaHQtZ3JhZGllbnQoJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjNDBkYzdlLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNwaW5uZXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHNwaW5uZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIHNwaW5uZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHNwaW5uZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgc3Bpbm5lci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBzcGlubmVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHNwaW5uZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHNwaW5uZXIteHhzbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci14c21hbGw6IDEuNXJlbSxcbiAgc3Bpbm5lci1zbWFsbDogMS43NXJlbSxcbiAgc3Bpbm5lci1tZWRpdW06IDJyZW0sXG4gIHNwaW5uZXItbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXIteGxhcmdlOiAyLjVyZW0sXG4gIHNwaW5uZXIteHhsYXJnZTogM3JlbSxcblxuICBzdGVwcGVyLWluZGV4LXNpemU6IDJyZW0sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC1zaXplOiBmb250LXNpemUtc20sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHN0ZXBwZXItY29tcGxldGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgc3RlcHBlci1mZzogY29sb3ItZmcsXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24tc2l6ZTogMS41cmVtLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXdlaWdodDogZm9udC13ZWlnaHQtdWx0cmEtYm9sZCxcbiAgc3RlcHBlci1zdGVwLXBhZGRpbmc6IHBhZGRpbmcsXG5cbiAgYWNjb3JkaW9uLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjY29yZGlvbi1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBhY2NvcmRpb24tc2VwYXJhdG9yLFxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhY2NvcmRpb24taXRlbS1iZzogY29sb3ItYmcsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taXRlbS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBhY2NvcmRpb24taXRlbS1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBhY2NvcmRpb24taXRlbS1zaGFkb3c6IHNoYWRvdyxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLWNvbG9yOiB0YWJzLXNlcGFyYXRvcixcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIxLjg3NXJlbSxcbiAgY2FsZW5kYXItYm9keS1oZWlnaHQ6IDI1LjYyNXJlbSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLXhsZyxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC10aGluLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWhvdmVyLWl0ZW0tYmc6IGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmcsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBjYWxlbmRhci1zZWxlY3RlZC1mZzogY29sb3Itd2hpdGUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjYWxlbmRhci1mZyxcbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLWluYWN0aXZlLW9wYWNpdHk6IDAuNSxcbiAgY2FsZW5kYXItZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogMS43NXJlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXNpemU6IGZvbnQtc2l6ZS14cyxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYWxlbmRhci13ZWVrZGF5LWZnOiBjb2xvci1mZyxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LWZnOiBjb2xvci1kYW5nZXIsXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZWJmYmYyLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyNC4zNzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmc6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgdG9vbHRpcC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRvb2x0aXAtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgdG9vbHRpcC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgdG9vbHRpcC1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuICB0b29sdGlwLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuXG4gIHNlbGVjdC1ib3JkZXItd2lkdGg6IDJweCxcbiAgc2VsZWN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBzZWxlY3QtYmc6IGNvbG9yLWJnLFxuXG4gIHNlbGVjdC1jaGVja2JveC1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3QtY2hlY2ttYXJrLWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogI2YyZjRmNyxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIHNlbGVjdC1vcHRpb24tcGFkZGluZzogMC43NXJlbSAxLjVyZW0sXG5cbiAgZGF0ZXBpY2tlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZGF0ZXBpY2tlci1iZzogY29sb3ItYmcsXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG4gIGRhdGVwaWNrZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICByYWRpby1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWZnOiBjb2xvci1mZy10ZXh0LFxuICByYWRpby1zaXplOiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmFkaW8tYm9yZGVyLWNvbG9yLFxuICByYWRpby1kaXNhYmxlZC1jaGVja21hcms6IHJhZGlvLWNoZWNrbWFyayxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICByYWRpdXM6IDAuNXJlbSxcblxuICBjb2xvci1iZzogIzNkMzc4MCxcbiAgY29sb3ItYmctYWN0aXZlOiAjNDk0Mjk5LFxuICBjb2xvci1mZzogI2ExYTFlNSxcbiAgY29sb3ItZmctaGVhZGluZzogI2ZmZmZmZixcbiAgY29sb3ItZmctdGV4dDogI2QxZDFmZixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjMDBmOWE2LFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3NjU5ZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICMwMGQ5NzcsXG4gIGNvbG9yLWluZm86ICMwMDg4ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmMzg2YSxcblxuICBsaW5rLWNvbG9yOiAjMDBmOWE2LFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMTRmZmJlLFxuXG4gIHNlcGFyYXRvcjogIzM0MmU3MyxcbiAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg0MCwgMzcsIDg5LCAwLjYpLFxuXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG5cbiAgbGF5b3V0LWJnOiAjMmYyOTZiLFxuXG4gIHNjcm9sbGJhci1mZzogIzU1NGRiMyxcbiAgc2Nyb2xsYmFyLWJnOiAjMzMyZTczLFxuXG4gIHJhZGlhbC1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjNDIzZjhjLCAjMzAyYzZlKSxcbiAgbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNpZGViYXItZmc6IGNvbG9yLXNlY29uZGFyeSxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG5cbiAgaGVhZGVyLWZnOiBjb2xvci13aGl0ZSxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBmb290ZXItZmc6IGNvbG9yLWZnLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICB1c2VyLWZnOiBjb2xvci1iZyxcbiAgdXNlci1iZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oaWdobGlnaHQsXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItaGVpZ2h0OiBoZWFkZXItaGVpZ2h0LFxuXG4gIHNpZGViYXItd2lkdGg6IDE2LjI1cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNDVyZW0sXG5cbiAgbWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtc3VibWVudS1iZzogbGF5b3V0LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogdHJhbnNwYXJlbnQsXG5cbiAgYnRuLWhlcm8tc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgzMywgNywgNzcsIDAuNSksXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDNweCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAycHggOHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLWJnOiAjMzczMjczLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjMzEyYzY2LFxuXG4gIGZvcm0tY29udHJvbC1iZzogIzM3MzE3YSxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItZmcsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBzZWFyY2gtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjM2EzNDdhLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGNvbG9yLWJnLWFjdGl2ZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjIpLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDYxLCA1NSwgMTI4LCAwLjkpLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAyMGRlZyxcblxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICM0ZTQwOTUsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICMzNTJmNmUsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogIzMxMmU3NSxcblxuICB0b2FzdHItY29sb3ItZmc6IGNvbG9yLXdoaXRlLFxuICB0b2FzdHItcGFkZGluZzogMS4yNXJlbSxcbiAgdG9hc3RyLWJvcmRlcjogMCxcbiAgdG9hc3RyLWRlZmF1bHQtYmFja2dyb3VuZDogI2JjYzNjYyxcblxuICB0b29sdGlwLWZnOiBjb2xvci1iZyxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLXdoaXRlLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBkYXRlcGlja2VyLXNoYWRvdzogc2hhZG93LFxuXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIGhlYWRlci1mZzogI2Y3ZmFmYixcbiAgaGVhZGVyLWJnOiAjMTExMjE4LFxuXG4gIGxheW91dC1iZzogI2YxZjVmOCxcblxuICBjb2xvci1mZy1oZWFkaW5nOiAjMTgxODE4LFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLFxuXG4gIHNlcGFyYXRvcjogI2NkZDVkYyxcblxuICByYWRpdXM6IDAuMTdyZW0sXG5cbiAgc2Nyb2xsYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3M2ExZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM1ZGNmZTMsXG4gIGNvbG9yLWluZm86ICNiYTdmZWMsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmEzNmIsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNmI4MyxcblxuICBidG4tc2Vjb25kYXJ5LWJnOiAjZWRmMmY1LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2VkZjJmNSxcblxuICBhY3Rpb25zLWZnOiAjZDNkYmU1LFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICBzaWRlYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGJvcmRlci1jb2xvcjogI2Q1ZGJlMCxcblxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6ICNlM2U5ZWUsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogbWVudS1iZyxcblxuICBtZW51LXN1Ym1lbnUtYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogI2NkZDVkYyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1hY3RpdmUtYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1cyxcblxuICBidG4taGVyby1kZWdyZWU6IDBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogYnRuLWJvcmRlci1yYWRpdXMsXG5cbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItY29sb3IsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMCxcblxuICBsaW5rLWNvbG9yOiAjNWRjZmUzLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjN2RjZmUzLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgYWN0aW9ucy1zZXBhcmF0b3I6ICNmMWY0ZjUsXG5cbiAgbW9kYWwtc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VwYXJhdG9yOiAjZWJlY2VlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG5cbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItc2hhZG93OiBub25lLFxuICBmb290ZXItc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6ICMyYTJhMmEsXG5cbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogI2EyYjJjNyxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZTNlY2ZlLFxuICBjYWxlbmRhci10b2RheS1mZzogY29sb3Itd2hpdGUsXG5cbiAgdG9hc3RyLWljb24tcmFkaXVzOiByYWRpdXMsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5neC1jaGFydGpzLXBpZSxcclxuICBuZ3gtY2hhcnRqcy1iYXIsXHJcbiAgbmd4LWNoYXJ0anMtbGluZSxcclxuICBuZ3gtY2hhcnRqcy1tdWx0aXBsZS14YXhpcyxcclxuICBuZ3gtY2hhcnRqcy1iYXItaG9yaXpvbnRhbCxcclxuICBuZ3gtY2hhcnRqcy1yYWRhciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogbmItdGhlbWUoY2FyZC1oZWlnaHQtbWVkaXVtKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC9kZWVwLyBjaGFydCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.ts ***!
  \***********************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
    }
    ChartjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs',
            template: __webpack_require__(/*! ./chartjs.component.html */ "./src/app/pages/charts/chartjs/chartjs.component.html"),
            styles: [__webpack_require__(/*! ./chartjs.component.scss */ "./src/app/pages/charts/chartjs/chartjs.component.scss")]
        })
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/charts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChartsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
/* harmony import */ var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./echarts/echarts.component */ "./src/app/pages/charts/echarts/echarts.component.ts");
/* harmony import */ var _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3/d3.component */ "./src/app/pages/charts/d3/d3.component.ts");
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/pages/charts/chartjs/chartjs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"],
        children: [{
                path: 'echarts',
                component: _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"],
            }, {
                path: 'd3',
                component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"],
            }, {
                path: 'chartjs',
                component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"],
            }],
    }];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());

var routedComponents = [
    _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"],
    _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"],
    _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"],
    _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"],
];


/***/ }),

/***/ "./src/app/pages/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-charts',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/pages/charts/charts-routing.module.ts");
/* harmony import */ var _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chartjs/chartjs-bar.component */ "./src/app/pages/charts/chartjs/chartjs-bar.component.ts");
/* harmony import */ var _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs/chartjs-line.component */ "./src/app/pages/charts/chartjs/chartjs-line.component.ts");
/* harmony import */ var _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartjs/chartjs-pie.component */ "./src/app/pages/charts/chartjs/chartjs-pie.component.ts");
/* harmony import */ var _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartjs/chartjs-multiple-xaxis.component */ "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts");
/* harmony import */ var _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartjs/chartjs-bar-horizontal.component */ "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts");
/* harmony import */ var _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chartjs/chartjs-radar.component */ "./src/app/pages/charts/chartjs/chartjs-radar.component.ts");
/* harmony import */ var _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./d3/d3-bar.component */ "./src/app/pages/charts/d3/d3-bar.component.ts");
/* harmony import */ var _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./d3/d3-line.component */ "./src/app/pages/charts/d3/d3-line.component.ts");
/* harmony import */ var _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./d3/d3-pie.component */ "./src/app/pages/charts/d3/d3-pie.component.ts");
/* harmony import */ var _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./d3/d3-area-stack.component */ "./src/app/pages/charts/d3/d3-area-stack.component.ts");
/* harmony import */ var _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./d3/d3-polar.component */ "./src/app/pages/charts/d3/d3-polar.component.ts");
/* harmony import */ var _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./d3/d3-advanced-pie.component */ "./src/app/pages/charts/d3/d3-advanced-pie.component.ts");
/* harmony import */ var _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./echarts/echarts-line.component */ "./src/app/pages/charts/echarts/echarts-line.component.ts");
/* harmony import */ var _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./echarts/echarts-pie.component */ "./src/app/pages/charts/echarts/echarts-pie.component.ts");
/* harmony import */ var _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./echarts/echarts-bar.component */ "./src/app/pages/charts/echarts/echarts-bar.component.ts");
/* harmony import */ var _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./echarts/echarts-multiple-xaxis.component */ "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
/* harmony import */ var _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./echarts/echarts-area-stack.component */ "./src/app/pages/charts/echarts/echarts-area-stack.component.ts");
/* harmony import */ var _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./echarts/echarts-bar-animation.component */ "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
/* harmony import */ var _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./echarts/echarts-radar.component */ "./src/app/pages/charts/echarts/echarts-radar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var components = [
    _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_6__["ChartjsBarComponent"],
    _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsLineComponent"],
    _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_8__["ChartjsPieComponent"],
    _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_9__["ChartjsMultipleXaxisComponent"],
    _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_10__["ChartjsBarHorizontalComponent"],
    _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsRadarComponent"],
    _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_12__["D3BarComponent"],
    _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_13__["D3LineComponent"],
    _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_14__["D3PieComponent"],
    _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_15__["D3AreaStackComponent"],
    _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_16__["D3PolarComponent"],
    _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_17__["D3AdvancedPieComponent"],
    _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_18__["EchartsLineComponent"],
    _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_19__["EchartsPieComponent"],
    _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_20__["EchartsBarComponent"],
    _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_21__["EchartsMultipleXaxisComponent"],
    _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_22__["EchartsAreaStackComponent"],
    _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_23__["EchartsBarAnimationComponent"],
    _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_24__["EchartsRadarComponent"],
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]],
            declarations: _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["routedComponents"].concat(components),
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-advanced-pie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-advanced-pie.component.ts ***!
  \**************************************************************/
/*! exports provided: D3AdvancedPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3AdvancedPieComponent", function() { return D3AdvancedPieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3AdvancedPieComponent = /** @class */ (function () {
    function D3AdvancedPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.single = [
            {
                name: 'Germany',
                value: 8940000,
            },
            {
                name: 'USA',
                value: 5000000,
            },
            {
                name: 'France',
                value: 7200000,
            },
        ];
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AdvancedPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3AdvancedPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-advanced-pie',
            template: "\n    <ngx-charts-advanced-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"single\">\n    </ngx-charts-advanced-pie-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3AdvancedPieComponent);
    return D3AdvancedPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-area-stack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-area-stack.component.ts ***!
  \************************************************************/
/*! exports provided: D3AreaStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3AreaStackComponent", function() { return D3AreaStackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3AreaStackComponent = /** @class */ (function () {
    function D3AreaStackComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [{
                name: 'Germany',
                series: [{
                        name: '2010',
                        value: 7300000,
                    }, {
                        name: '2011',
                        value: 8940000,
                    }],
            }, {
                name: 'USA',
                series: [{
                        name: '2010',
                        value: 7870000,
                    }, {
                        name: '2011',
                        value: 8270000,
                    }],
            }, {
                name: 'France',
                series: [{
                        name: '2010',
                        value: 5000002,
                    }, {
                        name: '2011',
                        value: 5800000,
                    }],
            }];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3AreaStackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-area-stack',
            template: "\n    <ngx-charts-area-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-area-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3AreaStackComponent);
    return D3AreaStackComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: D3BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3BarComponent", function() { return D3BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3BarComponent = /** @class */ (function () {
    function D3BarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3BarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-bar',
            template: "\n    <ngx-charts-bar-vertical\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3BarComponent);
    return D3BarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-line.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-line.component.ts ***!
  \******************************************************/
/*! exports provided: D3LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3LineComponent", function() { return D3LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3LineComponent = /** @class */ (function () {
    function D3LineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300,
                    },
                    {
                        name: '2011',
                        value: 8940,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 7870,
                    },
                    {
                        name: '2011',
                        value: 8270,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5002,
                    },
                    {
                        name: '2011',
                        value: 5800,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3LineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3LineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-line',
            template: "\n    <ngx-charts-line-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3LineComponent);
    return D3LineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-pie.component.ts ***!
  \*****************************************************/
/*! exports provided: D3PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3PieComponent", function() { return D3PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3PieComponent = /** @class */ (function () {
    function D3PieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showLabels = true;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3PieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-pie',
            template: "\n    <ngx-charts-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [legend]=\"showLegend\"\n      [labels]=\"showLabels\">\n    </ngx-charts-pie-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3PieComponent);
    return D3PieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-polar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-polar.component.ts ***!
  \*******************************************************/
/*! exports provided: D3PolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3PolarComponent", function() { return D3PolarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3PolarComponent = /** @class */ (function () {
    function D3PolarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '1990',
                        value: 31476,
                    },
                    {
                        name: '2000',
                        value: 36953,
                    },
                    {
                        name: '2010',
                        value: 40632,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '1990',
                        value: 37060,
                    },
                    {
                        name: '2000',
                        value: 45986,
                    },
                    {
                        name: '2010',
                        value: 49737,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '1990',
                        value: 29476,
                    },
                    {
                        name: '2000',
                        value: 34774,
                    },
                    {
                        name: '2010',
                        value: 36240,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3PolarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-polar',
            template: "\n    <ngx-charts-polar-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-polar-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3PolarComponent);
    return D3PolarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Pie</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-d3-pie></ngx-d3-pie>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Bar</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-d3-bar></ngx-d3-bar>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Line</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-d3-line></ngx-d3-line>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Advanced Pie</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-d3-advanced-pie></ngx-d3-advanced-pie>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Area Chart</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-d3-area-stack></ngx-d3-area-stack>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ngx-d3-bar,\n.nb-theme-default :host ngx-d3-pie,\n.nb-theme-default :host ngx-d3-advanced-pie,\n.nb-theme-default :host ngx-d3-area-stack,\n.nb-theme-default :host ngx-d3-line,\n.nb-theme-default :host ngx-d3-polar {\n  display: block;\n  width: 100%;\n  height: 456px; }\n.nb-theme-default :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .pie-label {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #ebeef2; }\n.nb-theme-default :host ngx-d3-bar /deep/ text,\n  .nb-theme-default :host ngx-d3-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-default :host ngx-d3-line /deep/ text,\n  .nb-theme-default :host ngx-d3-polar /deep/ text {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #ffffff; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #2a2a2a; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ngx-d3-bar,\n.nb-theme-cosmic :host ngx-d3-pie,\n.nb-theme-cosmic :host ngx-d3-advanced-pie,\n.nb-theme-cosmic :host ngx-d3-area-stack,\n.nb-theme-cosmic :host ngx-d3-line,\n.nb-theme-cosmic :host ngx-d3-polar {\n  display: block;\n  width: 100%;\n  height: 456px; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .pie-label {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #342e73; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ text {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #3d3780; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #ffffff; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host ngx-d3-bar,\n.nb-theme-corporate :host ngx-d3-pie,\n.nb-theme-corporate :host ngx-d3-advanced-pie,\n.nb-theme-corporate :host ngx-d3-area-stack,\n.nb-theme-corporate :host ngx-d3-line,\n.nb-theme-corporate :host ngx-d3-polar {\n  display: block;\n  width: 100%;\n  height: 456px; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-corporate :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-corporate :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-corporate :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-corporate :host ngx-d3-polar /deep/ .pie-label {\n    fill: #181818; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-corporate :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-corporate :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-corporate :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-corporate :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #cdd5dc; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ text,\n  .nb-theme-corporate :host ngx-d3-pie /deep/ text,\n  .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-corporate :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-corporate :host ngx-d3-line /deep/ text,\n  .nb-theme-corporate :host ngx-d3-polar /deep/ text {\n    fill: #181818; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #ffffff; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #181818; }\n.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #181818; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL0c6XFzpmo/nrJRcXGdpdHNcXEJCU1xcQWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL0c6XFzpmo/nrJRcXGdpdHNcXEJCU1xcQWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL0c6XFzpmo/nrJRcXGdpdHNcXEJCU1xcQWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29zbWljLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9zcmNcXGFwcFxccGFnZXNcXGNoYXJ0c1xcZDNcXGQzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSDs7R0FFRztBQ1RIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBQ3ZURjs7OztHQUlHO0FDSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUd2VEY7Ozs7R0FJRztBRkpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUl2VEY7Ozs7R0FJRztBSEpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QURyTUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7Ozs7OztFQU1FLGVBQWM7RUFDZCxZQUFXO0VBQ1gsY0g4RXVCLEVHbkR4QjtBQXhCRzs7Ozs7O0lBQ0UsY0hzQm1CLEVHckJwQjtBQUVEOzs7Ozs7SUFDRSxnQkhzQlksRUdyQmI7QUFFRDs7Ozs7O0lBQ0UsY0hjbUIsRUdicEI7QUFHQzs7Ozs7O0lBQ0Usb0JITVMsRUdMVjtBQUNEOzs7Ozs7SUFDRSxlSE1pQixFR0ZsQjtBQUhDOzs7Ozs7TUFDRSxlSEllLEVHSGhCO0FOZ0ZQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNbElKOzs7Ozs7RUFNRSxlQUFjO0VBQ2QsWUFBVztFQUNYLGNIOEV1QixFR25EeEI7QUF4Qkc7Ozs7OztJQUNFLGNGRW1CLEVFRHBCO0FBRUQ7Ozs7OztJQUNFLGdCRmdCWSxFRWZiO0FBRUQ7Ozs7OztJQUNFLGNGTm1CLEVFT3BCO0FBR0M7Ozs7OztJQUNFLG9CRmRTLEVFZVY7QUFDRDs7Ozs7O0lBQ0UsZUZkaUIsRUVrQmxCO0FBSEM7Ozs7OztNQUNFLGVGaEJlLEVFaUJoQjtBTmdGUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWxJSjs7Ozs7O0VBTUUsZUFBYztFQUNkLFlBQVc7RUFDWCxjSDhFdUIsRUduRHhCO0FBeEJHOzs7Ozs7SUFDRSxjREVtQixFQ0RwQjtBQUVEOzs7Ozs7SUFDRSxnQkRFWSxFQ0RiO0FBRUQ7Ozs7OztJQUNFLGNETm1CLEVDT3BCO0FBR0M7Ozs7OztJQUNFLG9CSE1TLEVHTFY7QUFDRDs7Ozs7O0lBQ0UsZURkaUIsRUNrQmxCO0FBSEM7Ozs7OztNQUNFLGVEaEJlLEVDaUJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy9kMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuXG4vKipcbiAqIFRoaXMgaXMgYSBzdGFydGluZyBwb2ludCB3aGVyZSB3ZSBkZWNsYXJlIHRoZSBtYXBzIG9mIHRoZW1lcyBhbmQgZ2xvYmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9ucy9taXhpbnNcbiAqL1xuXG5AaW1wb3J0ICdjb3JlL21peGlucyc7XG5AaW1wb3J0ICdjb3JlL2Z1bmN0aW9ucyc7XG5cbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1lbmFibGUtY3NzLXZhcmlhYmxlczogZmFsc2UgIWdsb2JhbDtcblxuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKSAhZ2xvYmFsO1xuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICR0bXA6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gICAgQGlmICgkdG1wICE9IG51bGwpIHtcbiAgICAgIEByZXR1cm4gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkdG1wKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLCAka2V5KTtcbn1cblxuQGZ1bmN0aW9uIGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdmFyaWFibGVzKSB7XG4gICRyZXN1bHQ6ICgpO1xuICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHZhcmlhYmxlcyB7XG4gICAgJHJlc3VsdDogbWFwLXNldCgkcmVzdWx0LCAkdmFyLCAnLS12YXIoI3skdmFyfSknKTtcbiAgfVxuXG4gIEBkZWJ1ZyAkcmVzdWx0O1xuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSkge1xuICAkdGhlbWU6ICR0aGVtZSAhZ2xvYmFsO1xuICAkdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy12YXJpYWJsZXMpIHtcbiAgICAkdGhlbWU6IGNvbnZlcnQtdG8tY3NzLXZhcmlhYmxlcygkdGhlbWUpICFnbG9iYWw7XG4gIH1cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkZGVmYXVsdDogbnVsbCkge1xuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuXG4gIEBpZiAoJGRlZmF1bHQgIT0gbnVsbCkge1xuXG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRkZWZhdWx0KSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsICRkZWZhdWx0KSkgIWdsb2JhbDtcblxuICB9IEBlbHNlIHtcbiAgICAkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gICAgJHRoZW1lLWRhdGE6IG1hcC1zZXQoJHRoZW1lLWRhdGEsIGRhdGEsICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCBtYXAtc2V0KCR0aGVtZS1kYXRhLCBwYXJlbnQsIG51bGwpKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLXBhcnNlZDogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICR0aGVtZS1wYXJzZWQ6IG1hcC1zZXQoJHRoZW1lLXBhcnNlZCwgJGtleSwgbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cblxuICAvLyBlbmFibGUgcmlnaHQgYXdheSB3aGVuIGluc3RhbGxlZFxuICAkdGhlbWUtcGFyc2VkOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLXBhcnNlZCwgJG5hbWUpO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZS1wYXJzZWQpO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6ICgpO1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPiAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJG5iLWVuYWJsZWQtdGhlbWVzIHtcbiAgICAgICR0aGVtZXMtdG8taW5zdGFsbDogbWFwLXNldCgkdGhlbWVzLXRvLWluc3RhbGwsICR0aGVtZS1uYW1lLCBtYXAtZ2V0KCRuYi10aGVtZXMsICR0aGVtZS1uYW1lKSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdGhlbWVzLXRvLWluc3RhbGw6ICRuYi10aGVtZXM7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZXMtdG8taW5zdGFsbDtcbn1cblxuQG1peGluIGluc3RhbGwtY3NzLXZhcmlhYmxlcygkdGhlbWUtbmFtZSwgJHZhcmlhYmxlcykge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAgIC0tI3skdmFyfTogJHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBUT0RPOiBhbm90aGVyIG1peGluZyBmb3IgdGhlIGFsbW9zdCBzYW1lIHRoaW5nXG5AbWl4aW4gbmItaW5zdGFsbC1yb290LWNvbXBvbmVudCgpIHtcbiAgQHdhcm4gJ2BuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50YCBpcyBkZXByaWNhdGVkLCByZXBsYWNlIHdpdGggYG5iLWluc3RhbGwtY29tcG9uZW50YCwgYXMgYGJvZHlgIGlzIHJvb3QgZWxlbWVudCBub3cnO1xuXG4gIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbCgpIHtcbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmZztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItcmFkaWFsLWdyYWRpZW50KCRjb2xvci0xLCAkY29sb3ItMiwgJGNvbG9yLTMpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLTI7IC8qIE9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6ZHhpbWFnZXRyYW5zZm9ybS5taWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGNvbG9yLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDb2xvcnN0cj0nJGNvbG9yLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFkaWVudFR5cGU9MSk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuQG1peGluIG5iLXJpZ2h0LWdyYWRpZW50KCRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKTtcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gICRwbGFjZWhvbGRlci1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJ1xuICAgICc6Oi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJ1xuICApO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICB9XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRwbGFjZWhvbGRlci1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cygpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGUuLi4pIHtcbiAgJG1heDogbGVuZ3RoKCRhbmltYXRlKTtcbiAgJGFuaW1hdGlvbnM6ICcnO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heCB7XG4gICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyBudGgoJGFuaW1hdGUsICRpKX07XG5cbiAgICBAaWYgJGkgPCAkbWF4IHtcbiAgICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgJywgJ307XG4gICAgfVxuICB9XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9ucztcbiAgLW1vei1hbmltYXRpb246ICAgICRhbmltYXRpb25zO1xuICAtby1hbmltYXRpb246ICAgICAgJGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbjogICAgICAgICAkYW5pbWF0aW9ucztcbn1cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuQG1peGluIGJ0bi1wdWxzZSgkbmFtZSwgJGNvbG9yKSB7XG4gICYuYnRuLXB1bHNlIHtcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oYnRuLSN7JG5hbWV9LXB1bHNlIDEuNXMgaW5maW5pdGUpO1xuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGJ0bi0jeyRuYW1lfS1wdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG5cbkBtaXhpbiBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCRzZWxlY3RvciwgJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICAjeyRzZWxlY3Rvcn0gJiB7XG4gICAgQGlmICRwcm9wICE9IG51bGwge1xuICAgICAgI3skcHJvcH06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItbHRyKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1sdHJdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1ydGwoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPXJ0bF0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHRpbnRcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byBzaGFkZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuQGZ1bmN0aW9uIG1hcC1zZXQoJG1hcCwgJGtleSwgJHZhbHVlOiBudWxsKSB7XG4gICRuZXc6ICgka2V5OiAkdmFsdWUpO1xuICBAcmV0dXJuIG1hcC1tZXJnZSgkbWFwLCAkbmV3KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcbiAgZm9udC1tYWluOiB1bnF1b3RlKCdcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZicpLFxuICBmb250LXNlY29uZGFyeTogZm9udC1tYWluLFxuXG4gIGZvbnQtd2VpZ2h0LXRoaW46IDIwMCxcbiAgZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCxcbiAgZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGRlcjogNTAwLFxuICBmb250LXdlaWdodC1ib2xkOiA2MDAsXG4gIGZvbnQtd2VpZ2h0LXVsdHJhLWJvbGQ6IDgwMCxcblxuICAvLyBUT0RPOiB1c2UgaXQgYXMgYSBkZWZhdWx0IGZvbnQtc2l6ZVxuICBiYXNlLWZvbnQtc2l6ZTogMTZweCxcblxuICBmb250LXNpemUteGxnOiAxLjI1cmVtLFxuICBmb250LXNpemUtbGc6IDEuMTI1cmVtLFxuICBmb250LXNpemU6IDFyZW0sXG4gIGZvbnQtc2l6ZS1zbTogMC44NzVyZW0sXG4gIGZvbnQtc2l6ZS14czogMC43NXJlbSxcblxuICByYWRpdXM6IDAuMzc1cmVtLFxuICBwYWRkaW5nOiAxLjI1cmVtLFxuICBtYXJnaW46IDEuNXJlbSxcbiAgbGluZS1oZWlnaHQ6IDEuMjUsXG5cbiAgY29sb3ItYmc6ICNmZmZmZmYsXG4gIGNvbG9yLWJnLWFjdGl2ZTogI2U5ZWRmMixcbiAgY29sb3ItZmc6ICNhNGFiYjMsXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICMyYTJhMmEsXG4gIGNvbG9yLWZnLXRleHQ6ICM0YjRiNGIsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogIzQwZGM3ZSxcblxuICBzZXBhcmF0b3I6ICNlYmVlZjIsXG5cbiAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgY29sb3Itd2hpdGU6ICNmZmZmZmYsXG4gIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG5cbiAgY29sb3ItcHJpbWFyeTogIzhhN2ZmZixcbiAgY29sb3Itc3VjY2VzczogIzQwZGM3ZSxcbiAgY29sb3ItaW5mbzogIzRjYTZmZixcbiAgY29sb3Itd2FybmluZzogI2ZmYTEwMCxcbiAgY29sb3ItZGFuZ2VyOiAjZmY0YzZhLFxuXG4gIC8vIFRPRE86IG1vdmUgdG8gY29uc3RhbnRzXG4gIHNvY2lhbC1jb2xvci1mYWNlYm9vazogIzNiNTk5OCxcbiAgc29jaWFsLWNvbG9yLXR3aXR0ZXI6ICM1NWFjZWUsXG4gIHNvY2lhbC1jb2xvci1nb29nbGU6ICNkZDRiMzksXG4gIHNvY2lhbC1jb2xvci1saW5rZWRpbjogIzAxNzdiNSxcbiAgc29jaWFsLWNvbG9yLWdpdGh1YjogIzZiNmI2YixcbiAgc29jaWFsLWNvbG9yLXN0YWNrb3ZlcmZsb3c6ICMyZjk2ZTgsXG4gIHNvY2lhbC1jb2xvci1kcmliYmxlOiAjZjI2Nzk4LFxuICBzb2NpYWwtY29sb3ItYmVoYW5jZTogIzAwOTNmYSxcblxuICBib3JkZXItY29sb3I6IGNvbG9yLWdyYXksXG4gIHNoYWRvdzogMCAycHggMTJweCAwICNkZmUzZWIsXG5cbiAgbGluay1jb2xvcjogIzNkY2M2ZCxcbiAgbGluay1jb2xvci1ob3ZlcjogIzJlZTU2YixcbiAgbGluay1jb2xvci12aXNpdGVkOiBsaW5rLWNvbG9yLFxuXG4gIHNjcm9sbGJhci1mZzogI2RhZGFkYSxcbiAgc2Nyb2xsYmFyLWJnOiAjZjJmMmYyLFxuICBzY3JvbGxiYXItd2lkdGg6IDVweCxcbiAgc2Nyb2xsYmFyLXRodW1iLXJhZGl1czogMi41cHgsXG5cbiAgcmFkaWFsLWdyYWRpZW50OiBub25lLFxuICBsaW5lYXItZ3JhZGllbnQ6IG5vbmUsXG5cbiAgY2FyZC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2FyZC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGNhcmQtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgY2FyZC1mZzogY29sb3ItZmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgY2FyZC1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWJnOiBjb2xvci1iZyxcbiAgY2FyZC1oZWlnaHQteHhzbWFsbDogOTZweCxcbiAgY2FyZC1oZWlnaHQteHNtYWxsOiAyMTZweCxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDMzNnB4LFxuICBjYXJkLWhlaWdodC1tZWRpdW06IDQ1NnB4LFxuICBjYXJkLWhlaWdodC1sYXJnZTogNTc2cHgsXG4gIGNhcmQtaGVpZ2h0LXhsYXJnZTogNjk2cHgsXG4gIGNhcmQtaGVpZ2h0LXh4bGFyZ2U6IDgxNnB4LFxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxuICBjYXJkLWJvcmRlci13aWR0aDogMCxcbiAgY2FyZC1ib3JkZXItdHlwZTogc29saWQsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBjb2xvci1iZyxcbiAgY2FyZC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogcGFkZGluZyxcbiAgY2FyZC1tYXJnaW46IG1hcmdpbixcbiAgY2FyZC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBjYXJkLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIGNhcmQtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGNhcmQtaGVhZGVyLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1oZWFkZXItZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgY2FyZC1oZWFkZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgY2FyZC1oZWFkZXItYWN0aXZlLWZnOiBjb2xvci1iZyxcbiAgY2FyZC1oZWFkZXItZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYXJkLWhlYWRlci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYXJkLWhlYWRlci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLWNvbG9yOiBjYXJkLXNlcGFyYXRvcixcblxuICBoZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBoZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIGhlYWRlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGhlYWRlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZm9vdGVyLWZnLWhpZ2hsaWdodDogY29sb3ItZmctaGVhZGluZyxcbiAgZm9vdGVyLWJnOiBjb2xvci1iZyxcbiAgZm9vdGVyLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIGxheW91dC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbGF5b3V0LWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbGF5b3V0LWZnOiBjb2xvci1mZyxcbiAgbGF5b3V0LWJnOiAjZWJlZmY1LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJnOiBsYXlvdXQtYmcsXG4gIGxheW91dC13aW5kb3ctbW9kZS1wYWRkaW5nLXRvcDogNC43NXJlbSxcbiAgbGF5b3V0LXdpbmRvdy1zaGFkb3c6IHNoYWRvdyxcbiAgbGF5b3V0LXBhZGRpbmc6IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtLFxuICBsYXlvdXQtbWVkaXVtLXBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMC41cmVtLFxuICBsYXlvdXQtc21hbGwtcGFkZGluZzogMXJlbSAxcmVtIDAsXG5cbiAgc2lkZWJhci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc2lkZWJhci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNpZGViYXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNpZGViYXItYmc6IGNvbG9yLWJnLFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiBwYWRkaW5nLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG5cbiAgbWVudS1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIG1lbnUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuXG4gIG1lbnUtc3VibWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogY29sb3ItYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oaWdobGlnaHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1zdWJtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAuMTI1cmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1jb250YWluZXItcGFkZGluZzogMCAxLjI1cmVtLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMC41cmVtLFxuXG4gIG1lbnUtZ3JvdXAtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1ncm91cC1mb250LXNpemU6IDAuODc1cmVtLFxuICBtZW51LWdyb3VwLWZnOiBjb2xvci1mZyxcbiAgbWVudS1ncm91cC1wYWRkaW5nOiAxcmVtIDEuMjVyZW0sXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjY3NXJlbSAwLjc1cmVtLFxuICBtZW51LWl0ZW0tc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIG1lbnUtaWNvbi1mb250LXNpemU6IDIuNXJlbSxcbiAgbWVudS1pY29uLW1hcmdpbjogMCAwLjI1cmVtIDAsXG4gIG1lbnUtaWNvbi1jb2xvcjogY29sb3ItZmcsXG4gIG1lbnUtaWNvbi1hY3RpdmUtY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgdGFicy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHRhYnMtZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIHRhYnMtY29udGVudC1mb250LWZhbWlseTogZm9udC1tYWluLFxuICB0YWJzLWNvbnRlbnQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIHRhYnMtYWN0aXZlLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1hY3RpdmUtZm9udC13ZWlnaHQ6IGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0LFxuICB0YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHRhYnMtY29udGVudC1wYWRkaW5nOiAwLFxuICB0YWJzLWhlYWRlci1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHRhYnMtZmc6IGNvbG9yLWZnLFxuICB0YWJzLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIHRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDAsXG4gIHRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgcm91dGUtdGFicy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHJvdXRlLXRhYnMtZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIHJvdXRlLXRhYnMtYWN0aXZlLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1hY3RpdmUtZm9udC13ZWlnaHQ6IGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHJvdXRlLXRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgcm91dGUtdGFicy1mZzogY29sb3ItZmcsXG4gIHJvdXRlLXRhYnMtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgcm91dGUtdGFicy1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJvdXRlLXRhYnMtaWNvbi1vbmx5LW1heC13aWR0aDogNTc2cHgsXG5cbiAgdXNlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdXNlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHVzZXItYmc6IGNvbG9yLWJnLFxuICB1c2VyLWZnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6ICNiY2MzY2MsXG4gIHVzZXItZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LXNlY29uZGFyeSxcbiAgdXNlci1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIHVzZXItc2l6ZS1tZWRpdW06IDIuNXJlbSxcbiAgdXNlci1zaXplLWxhcmdlOiAzLjI1cmVtLFxuICB1c2VyLXNpemUteGxhcmdlOiA0cmVtLFxuXG4gIHBvcG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHBvcG92ZXItYmc6IGNvbG9yLWJnLFxuICBwb3BvdmVyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBub25lLFxuICBwb3BvdmVyLWFycm93LXNpemU6IDExcHgsXG5cbiAgY29udGV4dC1tZW51LWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjb250ZXh0LW1lbnUtYmc6IGNvbG9yLWJnLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY29udGV4dC1tZW51LXNoYWRvdzogbm9uZSxcbiAgY29udGV4dC1tZW51LWFycm93LXNpemU6IDExcHgsXG5cbiAgYWN0aW9ucy1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjdGlvbnMtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG4gIGFjdGlvbnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjdGlvbnMtcGFkZGluZzogcGFkZGluZyxcbiAgYWN0aW9ucy1zaXplLXNtYWxsOiAxLjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1tZWRpdW06IDIuMjVyZW0sXG4gIGFjdGlvbnMtc2l6ZS1sYXJnZTogMy41cmVtLFxuXG4gIHNlYXJjaC1idG4tb3Blbi1mZzogY29sb3ItZmcsXG4gIHNlYXJjaC1idG4tY2xvc2UtZmc6XHRjb2xvci1mZyxcbiAgc2VhcmNoLWJnOiBsYXlvdXQtYmcsXG4gIHNlYXJjaC1iZy1zZWNvbmRhcnk6IGNvbG9yLWZnLFxuICBzZWFyY2gtdGV4dDogY29sb3ItZmctaGVhZGluZyxcbiAgc2VhcmNoLWluZm86IGNvbG9yLWZnLFxuICBzZWFyY2gtZGFzaDogY29sb3ItZmcsXG4gIHNlYXJjaC1wbGFjZWhvbGRlcjogY29sb3ItZmcsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBzbWFydC10YWJsZS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICNmNWY3ZmMsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogI2U2ZjNmZixcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDFweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogI2ZmZmZmZixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3Itc3VjY2VzcyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuXG4gIHRvYXN0ci1iZzogY29sb3ItYmcsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjEyNXJlbSxcbiAgdG9hc3RyLWZnOiBjb2xvci1mZy10ZXh0LFxuICB0b2FzdHItYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgdG9hc3RyLWJvcmRlci1jb2xvcjogI2JjYzNjYyxcbiAgdG9hc3RyLWljb24tcmFkaXVzOiAwLjI1cmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgYnRuLWZnOiBjb2xvci13aGl0ZSxcbiAgYnRuLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYnRuLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgYnRuLWN1cnNvcjogZGVmYXVsdCxcblxuICBidG4tcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgYnRuLXNlY29uZGFyeS1iZzogdHJhbnNwYXJlbnQsXG4gIGJ0bi1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBidG4tc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgYnRuLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGJ0bi1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2RhZGZlNixcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXItd2lkdGg6IDJweCxcblxuICBidG4tcGFkZGluZy15LWxnOiAwLjg3NXJlbSxcbiAgYnRuLXBhZGRpbmcteC1sZzogMS43NXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuXG4gIC8vIGRlZmF1bHQgc2l6ZVxuICBidG4tcGFkZGluZy15LW1kOiAwLjc1cmVtLFxuICBidG4tcGFkZGluZy14LW1kOiAxLjVyZW0sXG4gIGJ0bi1mb250LXNpemUtbWQ6IDFyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS1zbTogMC42MjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtc206IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1zbTogMC44NzVyZW0sXG5cbiAgYnRuLXBhZGRpbmcteS14czogMC41cmVtLFxuICBidG4tcGFkZGluZy14LXhzOiAxLjI1cmVtLFxuICBidG4tZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGJ0bi1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcbiAgYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgYnRuLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBidG4taGVyby1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiBub25lLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kZWdyZWU6IDIwZGVnLFxuICBidG4taGVyby1wcmltYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zdWNjZXNzLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby13YXJuaW5nLWRlZ3JlZTogMTBkZWcsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiAtMTBkZWcsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IC0yMGRlZyxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG5cbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiAjZmZmZmZmLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcblxuICBidG4tZ3JvdXAtYmc6IGxheW91dC1iZyxcbiAgYnRuLWdyb3VwLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjZGFkZmU2LFxuXG4gIGZvcm0tY29udHJvbC10ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvcm0tY29udHJvbC1iZzogY29sb3ItYmcsXG4gIGZvcm0tY29udHJvbC1mb2N1cy1iZzogY29sb3ItYmcsXG5cbiAgZm9ybS1jb250cm9sLWJvcmRlci13aWR0aDogMnB4LFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBmb3JtLWNvbnRyb2wtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBmb3JtLWNvbnRyb2wtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZGFkZmU2LFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIGZvcm0tY29udHJvbC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mbyxcbiAgZm9ybS1jb250cm9sLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBmb3JtLWNvbnRyb2wtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLFxuICBmb3JtLWNvbnRyb2wtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmcsXG5cbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyLWZvbnQtc2l6ZTogMXJlbSxcblxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplOiAxcmVtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZzogMC43NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1zbTogMC4zNzVyZW0gMS4xMjVyZW0sXG4gIGZvcm0tY29udHJvbC1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmctbGc6IDEuMTI1cmVtLFxuXG4gIGZvcm0tY29udHJvbC1sYWJlbC1mb250LXdlaWdodDogNDAwLFxuXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXNpemU6IDAuODc1cmVtLFxuICBmb3JtLWNvbnRyb2wtZmVlZGJhY2stZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIG1vZGFsLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtb2RhbC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIG1vZGFsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWZnOiBjb2xvci1mZy10ZXh0LFxuICBtb2RhbC1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtb2RhbC1iZzogY29sb3ItYmcsXG4gIG1vZGFsLWJvcmRlcjogdHJhbnNwYXJlbnQsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbW9kYWwtcGFkZGluZzogcGFkZGluZyxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbW9kYWwtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1vZGFsLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgbW9kYWwtYm9keS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBtb2RhbC1ib2R5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1vZGFsLWJvZHktZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhsZzogMS43NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1sZzogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0OiAxLjM3NXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC1zbTogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC14czogMXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteGxnOiBmb250LXNpemUteGxnLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS1zbTogZm9udC1zaXplLXNtLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXhzOiBmb250LXNpemUteHMsXG4gIHByb2dyZXNzLWJhci1yYWRpdXM6IHJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLWJnOiBsYXlvdXQtYmcsXG4gIHByb2dyZXNzLWJhci1mb250LWNvbG9yOiBjb2xvci13aGl0ZSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBwcm9ncmVzcy1iYXItZGVmYXVsdC1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBwcm9ncmVzcy1iYXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBhbGVydC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWxlcnQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBhbGVydC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhbGVydC1mZzogY29sb3Itd2hpdGUsXG4gIGFsZXJ0LW91dGxpbmUtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1iZzogY29sb3ItYmcsXG4gIGFsZXJ0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGFsZXJ0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgYWxlcnQtZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhbGVydC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBhbGVydC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBhbGVydC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBhbGVydC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBhbGVydC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgYWxlcnQtaGVpZ2h0LXh4c21hbGw6IDUycHgsXG4gIGFsZXJ0LWhlaWdodC14c21hbGw6IDcycHgsXG4gIGFsZXJ0LWhlaWdodC1zbWFsbDogOTJweCxcbiAgYWxlcnQtaGVpZ2h0LW1lZGl1bTogMTEycHgsXG4gIGFsZXJ0LWhlaWdodC1sYXJnZTogMTMycHgsXG4gIGFsZXJ0LWhlaWdodC14bGFyZ2U6IDE1MnB4LFxuICBhbGVydC1oZWlnaHQteHhsYXJnZTogMTcycHgsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1jbG9zYWJsZS1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1idXR0b24tcGFkZGluZzogM3JlbSxcbiAgYWxlcnQtbWFyZ2luOiBtYXJnaW4sXG5cbiAgY2hhdC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2hhdC1mZzogY29sb3Itd2hpdGUsXG4gIGNoYXQtYmc6IGNvbG9yLWJnLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2hhdC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjaGF0LWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjaGF0LWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNoYXQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNoYXQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2hhdC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2hhdC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNoYXQtYm9yZGVyOiBib3JkZXIsXG4gIGNoYXQtcGFkZGluZzogcGFkZGluZyxcbiAgY2hhdC1zaGFkb3c6IHNoYWRvdyxcbiAgY2hhdC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2hhdC1tZXNzYWdlLWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1tZXNzYWdlLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2E2ZmYsICM1OWJmZmYpLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWZnOiBjb2xvci1mZy10ZXh0LFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1mZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hhdC1mb3JtLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGF0LWZvcm0tYm9yZGVyOiBzZXBhcmF0b3IsXG4gIGNoYXQtZm9ybS1wbGFjZWhvbGRlci1mZzogY29sb3ItZmcsXG4gIGNoYXQtZm9ybS1hY3RpdmUtYm9yZGVyOiBjb2xvci1mZyxcbiAgY2hhdC1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjaGF0LWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2hhdC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGNoYXQtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2hhdC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBjaGF0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoYXQtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2hhdC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODMpLFxuICBzcGlubmVyLWNpcmNsZS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzcGlubmVyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBzcGlubmVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIHNwaW5uZXItZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBzcGlubmVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBzcGlubmVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHNwaW5uZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgc3Bpbm5lci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBzcGlubmVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBzcGlubmVyLXh4c21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXIteHNtYWxsOiAxLjVyZW0sXG4gIHNwaW5uZXItc21hbGw6IDEuNzVyZW0sXG4gIHNwaW5uZXItbWVkaXVtOiAycmVtLFxuICBzcGlubmVyLWxhcmdlOiAyLjI1cmVtLFxuICBzcGlubmVyLXhsYXJnZTogMi41cmVtLFxuICBzcGlubmVyLXh4bGFyZ2U6IDNyZW0sXG5cbiAgc3RlcHBlci1pbmRleC1zaXplOiAycmVtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtc2l6ZTogZm9udC1zaXplLXNtLFxuICBzdGVwcGVyLWxhYmVsLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzdGVwcGVyLWNvbXBsZXRlZC1mZzogY29sb3Itd2hpdGUsXG4gIHN0ZXBwZXItZmc6IGNvbG9yLWZnLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXNpemU6IDEuNXJlbSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXVsdHJhLWJvbGQsXG4gIHN0ZXBwZXItc3RlcC1wYWRkaW5nOiBwYWRkaW5nLFxuXG4gIGFjY29yZGlvbi1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY2NvcmRpb24tc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1oZWFkZXItZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1jb2xvcjogYWNjb3JkaW9uLXNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYWNjb3JkaW9uLWl0ZW0tYmc6IGNvbG9yLWJnLFxuICBhY2NvcmRpb24taXRlbS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgYWNjb3JkaW9uLWl0ZW0tZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgYWNjb3JkaW9uLWl0ZW0tc2hhZG93OiBzaGFkb3csXG5cbiAgbGlzdC1pdGVtLWJvcmRlci1jb2xvcjogdGFicy1zZXBhcmF0b3IsXG4gIGxpc3QtaXRlbS1wYWRkaW5nOiAxcmVtLFxuXG4gIGNhbGVuZGFyLXdpZHRoOiAyMS44NzVyZW0sXG4gIGNhbGVuZGFyLWJvZHktaGVpZ2h0OiAyNS42MjVyZW0sXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZS14bGcsXG4gIGNhbGVuZGFyLWhlYWRlci10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItaGVhZGVyLXN1Yi10aXRsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtdGhpbixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1idXR0b24td2lkdGg6IDEwcmVtLFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1ob3Zlci1pdGVtLWJnOiBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnLFxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjYWxlbmRhci1mZzogY29sb3ItZmctdGV4dCxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBjYWxlbmRhci10b2RheS1mZzogY2FsZW5kYXItZmcsXG4gIGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoOiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjYyNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci1pbmFjdGl2ZS1vcGFjaXR5OiAwLjUsXG4gIGNhbGVuZGFyLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1oZWlnaHQ6IDEuNzVyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC1zaXplOiBmb250LXNpemUteHMsXG4gIGNhbGVuZGFyLXdlZWtkYXktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgY2FsZW5kYXItd2Vla2RheS1mZzogY29sb3ItZmcsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS1mZzogY29sb3ItZGFuZ2VyLFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogI2ViZmJmMixcblxuICBjYWxlbmRhci1sYXJnZS13aWR0aDogMjQuMzc1cmVtLFxuICBjYWxlbmRhci1sYXJnZS1ib2R5LWhlaWdodDogMjcuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJnOiByZ2JhKDAsIDAsIDAsIDAuMjg4KSxcblxuICB0b29sdGlwLWJnOiBjb2xvci1mZy10ZXh0LFxuICB0b29sdGlwLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHRvb2x0aXAtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgdG9vbHRpcC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICB0b29sdGlwLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHRvb2x0aXAtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgdG9vbHRpcC1zaGFkb3c6IHNoYWRvdyxcbiAgdG9vbHRpcC1mb250LXNpemU6IGZvbnQtc2l6ZSxcblxuICBzZWxlY3QtYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNlbGVjdC1tYXgtaGVpZ2h0OiAyMHJlbSxcbiAgc2VsZWN0LWJnOiBjb2xvci1iZyxcblxuICBzZWxlY3QtY2hlY2tib3gtY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LWNoZWNrbWFyay1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICNmMmY0ZjcsXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBzZWxlY3Qtb3B0aW9uLXBhZGRpbmc6IDAuNzVyZW0gMS41cmVtLFxuXG4gIGRhdGVwaWNrZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGRhdGVwaWNrZXItYmc6IGNvbG9yLWJnLFxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3Itc3VjY2VzcyxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGRhdGVwaWNrZXItc2hhZG93OiBub25lLFxuICBkYXRlcGlja2VyLWFycm93LXNpemU6IDExcHgsXG5cbiAgcmFkaW8tYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1mZzogY29sb3ItZmctdGV4dCxcbiAgcmFkaW8tc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICByYWRpby1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHJhZGlvLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tZGlzYWJsZWQtY2hlY2ttYXJrOiByYWRpby1jaGVja21hcmssXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4vLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4kdGhlbWU6IChcbiAgcmFkaXVzOiAwLjVyZW0sXG5cbiAgY29sb3ItYmc6ICMzZDM3ODAsXG4gIGNvbG9yLWJnLWFjdGl2ZTogIzQ5NDI5OSxcbiAgY29sb3ItZmc6ICNhMWExZTUsXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICNmZmZmZmYsXG4gIGNvbG9yLWZnLXRleHQ6ICNkMWQxZmYsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogIzAwZjlhNixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjNzY1OWZmLFxuICBjb2xvci1zdWNjZXNzOiAjMDBkOTc3LFxuICBjb2xvci1pbmZvOiAjMDA4OGZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjM4NmEsXG5cbiAgbGluay1jb2xvcjogIzAwZjlhNixcbiAgbGluay1jb2xvci1ob3ZlcjogIzE0ZmZiZSxcblxuICBzZXBhcmF0b3I6ICMzNDJlNzMsXG4gIHNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoNDAsIDM3LCA4OSwgMC42KSxcblxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuXG4gIGxheW91dC1iZzogIzJmMjk2YixcblxuICBzY3JvbGxiYXItZmc6ICM1NTRkYjMsXG4gIHNjcm9sbGJhci1iZzogIzMzMmU3MyxcblxuICByYWRpYWwtZ3JhZGllbnQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDUwJSwgIzQyM2Y4YywgIzMwMmM2ZSksXG4gIGxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcblxuICBzaWRlYmFyLWZnOiBjb2xvci1zZWNvbmRhcnksXG4gIHNpZGViYXItYmc6IGNvbG9yLWJnLFxuXG4gIGhlYWRlci1mZzogY29sb3Itd2hpdGUsXG4gIGhlYWRlci1iZzogY29sb3ItYmcsXG5cbiAgZm9vdGVyLWZnOiBjb2xvci1mZyxcbiAgZm9vdGVyLWJnOiBjb2xvci1iZyxcblxuICBhY3Rpb25zLWZnOiBjb2xvci1mZyxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG5cbiAgdXNlci1mZzogY29sb3ItYmcsXG4gIHVzZXItYmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogY29sb3ItZmctaGlnaGxpZ2h0LFxuXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtYmc6IGNvbG9yLXByaW1hcnksXG4gIGNvbnRleHQtbWVudS1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG5cbiAgZm9vdGVyLWhlaWdodDogaGVhZGVyLWhlaWdodCxcblxuICBzaWRlYmFyLXdpZHRoOiAxNi4yNXJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjQ1cmVtLFxuXG4gIG1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWdyb3VwLWZnOiBjb2xvci13aGl0ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LXN1Ym1lbnUtYmc6IGxheW91dC1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oaWdobGlnaHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgwLCAyNTUsIDE3MCwgMC4yNSksXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHRyYW5zcGFyZW50LFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMzMsIDcsIDc3LCAwLjUpLFxuICBidG4taGVyby10ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKSxcbiAgYnRuLWhlcm8tYmV2ZWwtc2l6ZTogMCAzcHggMCAwLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMnB4IDhweCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIGJ0bi1vdXRsaW5lLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1ob3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtZm9jdXMtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1iZzogIzM3MzI3MyxcbiAgYnRuLWdyb3VwLXNlcGFyYXRvcjogIzMxMmM2NixcblxuICBmb3JtLWNvbnRyb2wtYmc6ICMzNzMxN2EsXG4gIGZvcm0tY29udHJvbC1mb2N1cy1iZzogc2VwYXJhdG9yLFxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG5cbiAgY2hlY2tib3gtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgc2VhcmNoLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgc21hcnQtdGFibGUtYmctZXZlbjogIzNhMzQ3YSxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBjb2xvci1iZy1hY3RpdmUsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMnB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4yKSxcblxuICBiYWRnZS1mZy10ZXh0OiBjb2xvci13aGl0ZSxcbiAgYmFkZ2UtcHJpbWFyeS1iZy1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgYmFkZ2Utc3VjY2Vzcy1iZy1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgYmFkZ2UtaW5mby1iZy1jb2xvcjogY29sb3ItaW5mbyxcbiAgYmFkZ2Utd2FybmluZy1iZy1jb2xvcjogY29sb3Itd2FybmluZyxcbiAgYmFkZ2UtZGFuZ2VyLWJnLWNvbG9yOiBjb2xvci1kYW5nZXIsXG5cbiAgc3Bpbm5lci1iZzogcmdiYSg2MSwgNTUsIDEyOCwgMC45KSxcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMjBkZWcsXG5cbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjNGU0MDk1LFxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjMzUyZjZlLFxuXG4gIHNlbGVjdC1vcHRpb24tZGlzYWJsZWQtYmc6ICMzMTJlNzUsXG5cbiAgdG9hc3RyLWNvbG9yLWZnOiBjb2xvci13aGl0ZSxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHRvYXN0ci1ib3JkZXI6IDAsXG4gIHRvYXN0ci1kZWZhdWx0LWJhY2tncm91bmQ6ICNiY2MzY2MsXG5cbiAgdG9vbHRpcC1mZzogY29sb3ItYmcsXG4gIHRvb2x0aXAtc3RhdHVzLWZnOiBjb2xvci13aGl0ZSxcblxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IHNoYWRvdyxcblxuICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgcmFkaW8tY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICBoZWFkZXItZmc6ICNmN2ZhZmIsXG4gIGhlYWRlci1iZzogIzExMTIxOCxcblxuICBsYXlvdXQtYmc6ICNmMWY1ZjgsXG5cbiAgY29sb3ItZmctaGVhZGluZzogIzE4MTgxOCxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiBjb2xvci1mZyxcblxuICBzZXBhcmF0b3I6ICNjZGQ1ZGMsXG5cbiAgcmFkaXVzOiAwLjE3cmVtLFxuXG4gIHNjcm9sbGJhci1iZzogI2UzZTllZSxcblxuICBjb2xvci1wcmltYXJ5OiAjNzNhMWZmLFxuICBjb2xvci1zdWNjZXNzOiAjNWRjZmUzLFxuICBjb2xvci1pbmZvOiAjYmE3ZmVjLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMzZiLFxuICBjb2xvci1kYW5nZXI6ICNmZjZiODMsXG5cbiAgYnRuLXNlY29uZGFyeS1iZzogI2VkZjJmNSxcbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6ICNlZGYyZjUsXG5cbiAgYWN0aW9ucy1mZzogI2QzZGJlNSxcbiAgYWN0aW9ucy1iZzogY29sb3ItYmcsXG5cbiAgc2lkZWJhci1iZzogI2UzZTllZSxcblxuICBib3JkZXItY29sb3I6ICNkNWRiZTAsXG5cbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiAjZTNlOWVlLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1hY3RpdmUtYmc6IG1lbnUtYmcsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6ICNjZGQ1ZGMsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogbm9uZSxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWZnOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IGJ0bi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXMsXG5cbiAgYnRuLWhlcm8tZGVncmVlOiAwZGVnLFxuICBidG4taGVyby1wcmltYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zdWNjZXNzLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby13YXJuaW5nLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1pbmZvLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1kYW5nZXItZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IGJ0bi1ib3JkZXItcmFkaXVzLFxuXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWNvbG9yLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDAsXG5cbiAgbGluay1jb2xvcjogIzVkY2ZlMyxcbiAgbGluay1jb2xvci1ob3ZlcjogIzdkY2ZlMyxcbiAgbGluay1jb2xvci12aXNpdGVkOiBsaW5rLWNvbG9yLFxuXG4gIGFjdGlvbnMtc2VwYXJhdG9yOiAjZjFmNGY1LFxuXG4gIG1vZGFsLXNlcGFyYXRvcjogYm9yZGVyLWNvbG9yLFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICB0YWJzLXNlcGFyYXRvcjogI2ViZWNlZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LFxuXG4gIHJvdXRlLXRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnksXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG5cbiAgZm9vdGVyLXNoYWRvdzogbm9uZSxcbiAgZm9vdGVyLXNlcGFyYXRvcjogYm9yZGVyLWNvbG9yLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiAjMmEyYTJhLFxuXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICNhMmIyYzcsXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogI2UzZWNmZSxcbiAgY2FsZW5kYXItdG9kYXktZmc6IGNvbG9yLXdoaXRlLFxuXG4gIHRvYXN0ci1pY29uLXJhZGl1czogcmFkaXVzLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvcnBvcmF0ZSwgZGVmYXVsdCk7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XHJcblxyXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcclxuICBuZ3gtZDMtYmFyLFxyXG4gIG5neC1kMy1waWUsXHJcbiAgbmd4LWQzLWFkdmFuY2VkLXBpZSxcclxuICBuZ3gtZDMtYXJlYS1zdGFjayxcclxuICBuZ3gtZDMtbGluZSxcclxuICBuZ3gtZDMtcG9sYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogbmItdGhlbWUoY2FyZC1oZWlnaHQtbWVkaXVtKTtcclxuXHJcbiAgICAvZGVlcC8ge1xyXG4gICAgICAucGllLWxhYmVsIHtcclxuICAgICAgICBmaWxsOiBuYi10aGVtZShjb2xvci1mZy1oZWFkaW5nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtbGluZS1wYXRoIHtcclxuICAgICAgICBzdHJva2U6IG5iLXRoZW1lKHNlcGFyYXRvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHQge1xyXG4gICAgICAgIGZpbGw6IG5iLXRoZW1lKGNvbG9yLWZnLWhlYWRpbmcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICAubGVnZW5kLWxhYmVscyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShjb2xvci1iZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNvbG9yLWZnLWhlYWRpbmcpO1xyXG4gICAgICAgICAgLmFjdGl2ZSAubGVnZW5kLWxhYmVsLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogbmItdGhlbWUoY29sb3ItZmctaGVhZGluZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.ts ***!
  \*************************************************/
/*! exports provided: D3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Component", function() { return D3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var D3Component = /** @class */ (function () {
    function D3Component() {
    }
    D3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3',
            template: __webpack_require__(/*! ./d3.component.html */ "./src/app/pages/charts/d3/d3.component.html"),
            styles: [__webpack_require__(/*! ./d3.component.scss */ "./src/app/pages/charts/d3/d3.component.scss")]
        })
    ], D3Component);
    return D3Component;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-area-stack.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-area-stack.component.ts ***!
  \**********************************************************************/
/*! exports provided: EchartsAreaStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsAreaStackComponent", function() { return EchartsAreaStackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsAreaStackComponent = /** @class */ (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsAreaStackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-area-stack',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsAreaStackComponent);
    return EchartsAreaStackComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar-animation.component.ts ***!
  \*************************************************************************/
/*! exports provided: EchartsBarAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsBarAnimationComponent", function() { return EchartsBarAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarAnimationComponent = /** @class */ (function () {
    function EchartsBarAnimationComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarAnimationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) { return idx * 10; },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) { return idx * 10 + 100; },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) { return idx * 5; },
            };
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
        });
    };
    EchartsBarAnimationComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-bar-animation',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsBarAnimationComponent);
    return EchartsBarAnimationComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: EchartsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsBarComponent", function() { return EchartsBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarComponent = /** @class */ (function () {
    function EchartsBarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    };
    EchartsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-bar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsBarComponent);
    return EchartsBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-line.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-line.component.ts ***!
  \****************************************************************/
/*! exports provided: EchartsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsLineComponent", function() { return EchartsLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsLineComponent = /** @class */ (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-line',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsLineComponent);
    return EchartsLineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/*! exports provided: EchartsMultipleXaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsMultipleXaxisComponent", function() { return EchartsMultipleXaxisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsMultipleXaxisComponent = /** @class */ (function () {
    function EchartsMultipleXaxisComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsMultipleXaxisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: ['2015 Precipitation', '2016 Precipitation'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    top: 70,
                    bottom: 50,
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.info,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2016-1',
                            '2016-2',
                            '2016-3',
                            '2016-4',
                            '2016-5',
                            '2016-6',
                            '2016-7',
                            '2016-8',
                            '2016-9',
                            '2016-10',
                            '2016-11',
                            '2016-12',
                        ],
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.success,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2015-1',
                            '2015-2',
                            '2015-3',
                            '2015-4',
                            '2015-5',
                            '2015-6',
                            '2015-7',
                            '2015-8',
                            '2015-9',
                            '2015-10',
                            '2015-11',
                            '2015-12',
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: '2015 Precipitation',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '2016 Precipitation',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
                    },
                ],
            };
        });
    };
    EchartsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsMultipleXaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-multiple-xaxis',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsMultipleXaxisComponent);
    return EchartsMultipleXaxisComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-pie.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-pie.component.ts ***!
  \***************************************************************/
/*! exports provided: EchartsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsPieComponent", function() { return EchartsPieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsPieComponent = /** @class */ (function () {
    function EchartsPieComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    };
    EchartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-pie',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsPieComponent);
    return EchartsPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-radar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-radar.component.ts ***!
  \*****************************************************************/
/*! exports provided: EchartsRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsRadarComponent", function() { return EchartsRadarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsRadarComponent = /** @class */ (function () {
    function EchartsRadarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsRadarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                radar: {
                    name: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Techology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        },
                    },
                },
                series: [
                    {
                        name: 'Budget vs Spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
        });
    };
    EchartsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsRadarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-radar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsRadarComponent);
    return EchartsRadarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Pie</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-pie></ngx-echarts-pie>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Bar</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-bar></ngx-echarts-bar>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Line</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-line></ngx-echarts-line>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Multiple x-axis</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-multiple-xaxis></ngx-echarts-multiple-xaxis>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Area Stack</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-area-stack></ngx-echarts-area-stack>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Bar Animation</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-bar-animation></ngx-echarts-bar-animation>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Radar</nb-card-header>\r\n      <nb-card-body>\r\n        <ngx-echarts-radar></ngx-echarts-radar>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ngx-echarts-pie,\n.nb-theme-default :host ngx-echarts-bar,\n.nb-theme-default :host ngx-echarts-line,\n.nb-theme-default :host ngx-echarts-multiple-xaxis,\n.nb-theme-default :host ngx-echarts-area-stack,\n.nb-theme-default :host ngx-echarts-bar-animation,\n.nb-theme-default :host ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-default :host /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ngx-echarts-pie,\n.nb-theme-cosmic :host ngx-echarts-bar,\n.nb-theme-cosmic :host ngx-echarts-line,\n.nb-theme-cosmic :host ngx-echarts-multiple-xaxis,\n.nb-theme-cosmic :host ngx-echarts-area-stack,\n.nb-theme-cosmic :host ngx-echarts-bar-animation,\n.nb-theme-cosmic :host ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-cosmic :host /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host ngx-echarts-pie,\n.nb-theme-corporate :host ngx-echarts-bar,\n.nb-theme-corporate :host ngx-echarts-line,\n.nb-theme-corporate :host ngx-echarts-multiple-xaxis,\n.nb-theme-corporate :host ngx-echarts-area-stack,\n.nb-theme-corporate :host ngx-echarts-bar-animation,\n.nb-theme-corporate :host ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n.nb-theme-corporate :host /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnRzL2VjaGFydHMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZWNoYXJ0cy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2VjaGFydHMvRzpcXOmaj+eslFxcZ2l0c1xcQkJTXFxBZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9lY2hhcnRzL0c6XFzpmo/nrJRcXGdpdHNcXEJCU1xcQWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZWNoYXJ0cy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2Nvc21pYy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZWNoYXJ0cy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZWNoYXJ0cy9HOlxc6ZqP56yUXFxnaXRzXFxCQlNcXEFkbWluL3NyY1xcYXBwXFxwYWdlc1xcY2hhcnRzXFxlY2hhcnRzXFxlY2hhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSDs7R0FFRztBQ1RIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBQ3ZURjs7OztHQUlHO0FDSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUd2VEY7Ozs7R0FJRztBRkpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUl2VEY7Ozs7R0FJRztBSEpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QURyTUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7Ozs7Ozs7RUFPRSxlQUFjO0VBQ2QsY0g4RXVCO0VHN0V2QixZQUFXLEVBQ1o7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXLEVBQ1o7QU5nR0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7Ozs7Ozs7RUFPRSxlQUFjO0VBQ2QsY0g4RXVCO0VHN0V2QixZQUFXLEVBQ1o7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXLEVBQ1o7QU5nR0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7Ozs7Ozs7RUFPRSxlQUFjO0VBQ2QsY0g4RXVCO0VHN0V2QixZQUFXLEVBQ1o7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvZWNoYXJ0cy9lY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcblxuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzOiBmYWxzZSAhZ2xvYmFsO1xuXG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgJHRtcDogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgICBAaWYgKCR0bXAgIT0gbnVsbCkge1xuICAgICAgQHJldHVybiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICR0bXApO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gY29udmVydC10by1jc3MtdmFyaWFibGVzKCR2YXJpYWJsZXMpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAkcmVzdWx0OiBtYXAtc2V0KCRyZXN1bHQsICR2YXIsICctLXZhcigjeyR2YXJ9KScpO1xuICB9XG5cbiAgQGRlYnVnICRyZXN1bHQ7XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1yYWRpYWwtZ3JhZGllbnQoJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMykge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItMjsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpkeGltYWdldHJhbnNmb3JtLm1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSckY29sb3ItMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yc3RyPSckY29sb3ItMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWRpZW50VHlwZT0xKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG5AbWl4aW4gbmItcmlnaHQtZ3JhZGllbnQoJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjNDBkYzdlLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNwaW5uZXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHNwaW5uZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIHNwaW5uZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHNwaW5uZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgc3Bpbm5lci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBzcGlubmVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHNwaW5uZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHNwaW5uZXIteHhzbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci14c21hbGw6IDEuNXJlbSxcbiAgc3Bpbm5lci1zbWFsbDogMS43NXJlbSxcbiAgc3Bpbm5lci1tZWRpdW06IDJyZW0sXG4gIHNwaW5uZXItbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXIteGxhcmdlOiAyLjVyZW0sXG4gIHNwaW5uZXIteHhsYXJnZTogM3JlbSxcblxuICBzdGVwcGVyLWluZGV4LXNpemU6IDJyZW0sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC1zaXplOiBmb250LXNpemUtc20sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHN0ZXBwZXItY29tcGxldGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgc3RlcHBlci1mZzogY29sb3ItZmcsXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24tc2l6ZTogMS41cmVtLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXdlaWdodDogZm9udC13ZWlnaHQtdWx0cmEtYm9sZCxcbiAgc3RlcHBlci1zdGVwLXBhZGRpbmc6IHBhZGRpbmcsXG5cbiAgYWNjb3JkaW9uLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjY29yZGlvbi1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBhY2NvcmRpb24tc2VwYXJhdG9yLFxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhY2NvcmRpb24taXRlbS1iZzogY29sb3ItYmcsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taXRlbS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBhY2NvcmRpb24taXRlbS1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBhY2NvcmRpb24taXRlbS1zaGFkb3c6IHNoYWRvdyxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLWNvbG9yOiB0YWJzLXNlcGFyYXRvcixcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIxLjg3NXJlbSxcbiAgY2FsZW5kYXItYm9keS1oZWlnaHQ6IDI1LjYyNXJlbSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLXhsZyxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC10aGluLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWhvdmVyLWl0ZW0tYmc6IGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmcsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBjYWxlbmRhci1zZWxlY3RlZC1mZzogY29sb3Itd2hpdGUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjYWxlbmRhci1mZyxcbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLWluYWN0aXZlLW9wYWNpdHk6IDAuNSxcbiAgY2FsZW5kYXItZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogMS43NXJlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXNpemU6IGZvbnQtc2l6ZS14cyxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYWxlbmRhci13ZWVrZGF5LWZnOiBjb2xvci1mZyxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LWZnOiBjb2xvci1kYW5nZXIsXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZWJmYmYyLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyNC4zNzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmc6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgdG9vbHRpcC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRvb2x0aXAtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgdG9vbHRpcC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgdG9vbHRpcC1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuICB0b29sdGlwLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuXG4gIHNlbGVjdC1ib3JkZXItd2lkdGg6IDJweCxcbiAgc2VsZWN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBzZWxlY3QtYmc6IGNvbG9yLWJnLFxuXG4gIHNlbGVjdC1jaGVja2JveC1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3QtY2hlY2ttYXJrLWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogI2YyZjRmNyxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIHNlbGVjdC1vcHRpb24tcGFkZGluZzogMC43NXJlbSAxLjVyZW0sXG5cbiAgZGF0ZXBpY2tlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZGF0ZXBpY2tlci1iZzogY29sb3ItYmcsXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG4gIGRhdGVwaWNrZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICByYWRpby1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWZnOiBjb2xvci1mZy10ZXh0LFxuICByYWRpby1zaXplOiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmFkaW8tYm9yZGVyLWNvbG9yLFxuICByYWRpby1kaXNhYmxlZC1jaGVja21hcms6IHJhZGlvLWNoZWNrbWFyayxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICByYWRpdXM6IDAuNXJlbSxcblxuICBjb2xvci1iZzogIzNkMzc4MCxcbiAgY29sb3ItYmctYWN0aXZlOiAjNDk0Mjk5LFxuICBjb2xvci1mZzogI2ExYTFlNSxcbiAgY29sb3ItZmctaGVhZGluZzogI2ZmZmZmZixcbiAgY29sb3ItZmctdGV4dDogI2QxZDFmZixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjMDBmOWE2LFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3NjU5ZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICMwMGQ5NzcsXG4gIGNvbG9yLWluZm86ICMwMDg4ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmMzg2YSxcblxuICBsaW5rLWNvbG9yOiAjMDBmOWE2LFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMTRmZmJlLFxuXG4gIHNlcGFyYXRvcjogIzM0MmU3MyxcbiAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg0MCwgMzcsIDg5LCAwLjYpLFxuXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG5cbiAgbGF5b3V0LWJnOiAjMmYyOTZiLFxuXG4gIHNjcm9sbGJhci1mZzogIzU1NGRiMyxcbiAgc2Nyb2xsYmFyLWJnOiAjMzMyZTczLFxuXG4gIHJhZGlhbC1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjNDIzZjhjLCAjMzAyYzZlKSxcbiAgbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNpZGViYXItZmc6IGNvbG9yLXNlY29uZGFyeSxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG5cbiAgaGVhZGVyLWZnOiBjb2xvci13aGl0ZSxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBmb290ZXItZmc6IGNvbG9yLWZnLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICB1c2VyLWZnOiBjb2xvci1iZyxcbiAgdXNlci1iZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oaWdobGlnaHQsXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItaGVpZ2h0OiBoZWFkZXItaGVpZ2h0LFxuXG4gIHNpZGViYXItd2lkdGg6IDE2LjI1cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNDVyZW0sXG5cbiAgbWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtc3VibWVudS1iZzogbGF5b3V0LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogdHJhbnNwYXJlbnQsXG5cbiAgYnRuLWhlcm8tc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgzMywgNywgNzcsIDAuNSksXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDNweCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAycHggOHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLWJnOiAjMzczMjczLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjMzEyYzY2LFxuXG4gIGZvcm0tY29udHJvbC1iZzogIzM3MzE3YSxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItZmcsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBzZWFyY2gtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjM2EzNDdhLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGNvbG9yLWJnLWFjdGl2ZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjIpLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDYxLCA1NSwgMTI4LCAwLjkpLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAyMGRlZyxcblxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICM0ZTQwOTUsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICMzNTJmNmUsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogIzMxMmU3NSxcblxuICB0b2FzdHItY29sb3ItZmc6IGNvbG9yLXdoaXRlLFxuICB0b2FzdHItcGFkZGluZzogMS4yNXJlbSxcbiAgdG9hc3RyLWJvcmRlcjogMCxcbiAgdG9hc3RyLWRlZmF1bHQtYmFja2dyb3VuZDogI2JjYzNjYyxcblxuICB0b29sdGlwLWZnOiBjb2xvci1iZyxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLXdoaXRlLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBkYXRlcGlja2VyLXNoYWRvdzogc2hhZG93LFxuXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIGhlYWRlci1mZzogI2Y3ZmFmYixcbiAgaGVhZGVyLWJnOiAjMTExMjE4LFxuXG4gIGxheW91dC1iZzogI2YxZjVmOCxcblxuICBjb2xvci1mZy1oZWFkaW5nOiAjMTgxODE4LFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLFxuXG4gIHNlcGFyYXRvcjogI2NkZDVkYyxcblxuICByYWRpdXM6IDAuMTdyZW0sXG5cbiAgc2Nyb2xsYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3M2ExZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM1ZGNmZTMsXG4gIGNvbG9yLWluZm86ICNiYTdmZWMsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmEzNmIsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNmI4MyxcblxuICBidG4tc2Vjb25kYXJ5LWJnOiAjZWRmMmY1LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2VkZjJmNSxcblxuICBhY3Rpb25zLWZnOiAjZDNkYmU1LFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICBzaWRlYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGJvcmRlci1jb2xvcjogI2Q1ZGJlMCxcblxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6ICNlM2U5ZWUsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogbWVudS1iZyxcblxuICBtZW51LXN1Ym1lbnUtYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogI2NkZDVkYyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1hY3RpdmUtYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1cyxcblxuICBidG4taGVyby1kZWdyZWU6IDBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogYnRuLWJvcmRlci1yYWRpdXMsXG5cbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItY29sb3IsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMCxcblxuICBsaW5rLWNvbG9yOiAjNWRjZmUzLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjN2RjZmUzLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgYWN0aW9ucy1zZXBhcmF0b3I6ICNmMWY0ZjUsXG5cbiAgbW9kYWwtc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VwYXJhdG9yOiAjZWJlY2VlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG5cbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItc2hhZG93OiBub25lLFxuICBmb290ZXItc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6ICMyYTJhMmEsXG5cbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogI2EyYjJjNyxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZTNlY2ZlLFxuICBjYWxlbmRhci10b2RheS1mZzogY29sb3Itd2hpdGUsXG5cbiAgdG9hc3RyLWljb24tcmFkaXVzOiByYWRpdXMsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5neC1lY2hhcnRzLXBpZSxcclxuICBuZ3gtZWNoYXJ0cy1iYXIsXHJcbiAgbmd4LWVjaGFydHMtbGluZSxcclxuICBuZ3gtZWNoYXJ0cy1tdWx0aXBsZS14YXhpcyxcclxuICBuZ3gtZWNoYXJ0cy1hcmVhLXN0YWNrLFxyXG4gIG5neC1lY2hhcnRzLWJhci1hbmltYXRpb24sXHJcbiAgbmd4LWVjaGFydHMtcmFkYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVpZ2h0LW1lZGl1bSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC9kZWVwLyAuZWNoYXJ0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.ts ***!
  \***********************************************************/
/*! exports provided: EchartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsComponent", function() { return EchartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EchartsComponent = /** @class */ (function () {
    function EchartsComponent() {
    }
    EchartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts',
            template: __webpack_require__(/*! ./echarts.component.html */ "./src/app/pages/charts/echarts/echarts.component.html"),
            styles: [__webpack_require__(/*! ./echarts.component.scss */ "./src/app/pages/charts/echarts/echarts.component.scss")]
        })
    ], EchartsComponent);
    return EchartsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map