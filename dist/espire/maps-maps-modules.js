(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-modules"],{

/***/ "./node_modules/@ngui/map/dist/@ngui/map.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@ngui/map/dist/@ngui/map.es5.js ***!
  \******************************************************/
/*! exports provided: BicyclingLayer, NavigatorGeolocation, OptionBuilder, NG_MAP_CONFIG_TOKEN, NgMapApiLoader, NgMapAsyncApiLoader, NgMapAsyncCallbackApiLoader, NguiMapComponent, InfoWindow, CustomMarker, Circle, DataLayer, DirectionsRenderer, DrawingManager, GeoCoder, GroundOverlay, HeatmapLayer, KmlLayer, Marker, NguiMap, PlacesAutoComplete, Polygon, Polyline, StreetViewPanorama, TrafficLayer, TransitLayer, NguiMapModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return NavigatorGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return OptionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return NG_MAP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return NgMapAsyncApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return NgMapAsyncCallbackApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return NguiMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return GeoCoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return NguiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return PlacesAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return NguiMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseMapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ReplaySubject */ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js");
/* harmony import */ var rxjs_operator_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/first */ "./node_modules/rxjs-compat/_esm5/operator/first.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







/**
 * return json string from json-like string
 * @param {?} str
 * @return {?}
 */
function jsonize(str) {
    try {
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, // replacing single quote to double quote
        function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
/**
 * Returns string to an object by using JSON.parse()
 * @param {?} input
 * @return {?}
 */
function getJSON(input) {
    if (typeof input === 'string') {
        var /** @type {?} */ re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 * @param {?} str
 * @return {?}
 */
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
/**
 * @return {?}
 */
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
/**
 * @param {?} component
 * @param {?} libName
 * @return {?}
 */
function missingLibraryError(component, libName) {
    return Error(component + ": library '" + libName + "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=" + libName + "'\n      })\n  ");
}
/**
 * @abstract
 */
var BaseMapDirective = /** @class */ (function () {
    /**
     * @param {?} nguiMapComponent
     * @param {?} mapObjectName
     * @param {?} inputs
     * @param {?} outputs
     */
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        // all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
        this.mapObjectName = mapObjectName;
    }
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            if (!google.maps[this.libraryName]) {
                throw missingLibraryError(this.mapObjectName, this.libraryName);
            }
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    /**
     * @return {?}
     */
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return BaseMapDirective;
}());
BaseMapDirective.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
var OptionBuilder = /** @class */ (function () {
    function OptionBuilder() {
    }
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var /** @type {?} */ options = {};
        // if options given from user, only take options and ignore other inputs
        if (userInputs.options) {
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    /**
     * @param {?} inputs
     * @param {?=} options
     * @return {?}
     */
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var /** @type {?} */ key in inputs) {
            var /** @type {?} */ val = inputs[key];
            // (non-strings are fully converted)
            if (typeof val !== 'string') {
                options[key] = val;
            } // sometimes '0' needed to stay as it is
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        } // for(var key in attrs)
        return options;
    };
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var /** @type {?} */ output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
                    this.getJSONParsed(input, options)
                        /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
                        || this.getAnyMapObject(input)
                        /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
                        || this.getAnyMapConstant(input, options)
                        /*  2016-06-20 -> new Date('2016-06-20') */
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var /** @type {?} */ key = (options['key']);
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        // delete keys only for processing, not used by google
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getLatLng = function (input) {
        var /** @type {?} */ output;
        if (input[0].constructor === Array) {
            output = ((input)).map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var /** @type {?} */ output;
        try {
            output = getJSON(input);
            if (output instanceof Array) {
                // [{a:1}] : not lat/lng ones
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                // check for nested hashes and convert to Google API options
                var /** @type {?} */ newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var /** @type {?} */ output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * @param {?} input
     * @param {?} options
     * @return {?}
     */
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var /** @type {?} */ output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var /** @type {?} */ matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var /** @type {?} */ capitalizedKey = ((options['key'])).charAt(0).toUpperCase() +
                    ((options['key'])).slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * streetviewControl, panControl, etc, not a general control
     * @param {?} controlOptions
     * @return {?}
     */
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var /** @type {?} */ newControlOptions = controlOptions;
        for (var /** @type {?} */ key in newControlOptions) {
            if (newControlOptions[key]) {
                var /** @type {?} */ value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = ((value)).toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = ((value)).map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var /** @type {?} */ objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][(value)];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[(value)];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getDateObject = function (input) {
        var /** @type {?} */ output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var /** @type {?} */ output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var /** @type {?} */ key in output) {
            var /** @type {?} */ arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    /**
     * @param {?} definedInputs
     * @param {?} userInputs
     * @return {?}
     */
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var /** @type {?} */ i = 0; i < definedInputs.length; i++) {
            var /** @type {?} */ input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    return OptionBuilder;
}());
OptionBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
OptionBuilder.ctorParameters = function () { return []; };
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = /** @class */ (function () {
    function NavigatorGeolocation() {
    }
    /**
     * @param {?=} geoLocationOptions
     * @return {?}
     */
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    return NavigatorGeolocation;
}());
NavigatorGeolocation.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NavigatorGeolocation.ctorParameters = function () { return []; };
var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NG_MAP_CONFIG_TOKEN');
/**
 * @abstract
 */
var NgMapApiLoader = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = rxjs_operator_first__WEBPACK_IMPORTED_MODULE_3__["first"].call(new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1));
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    /**
     * @abstract
     * @return {?}
     */
    NgMapApiLoader.prototype.load = function () { };
    /**
     * @return {?}
     */
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());
var NgMapAsyncCallbackApiLoader = /** @class */ (function (_super) {
    __extends(NgMapAsyncCallbackApiLoader, _super);
    /**
     * @param {?} zone
     * @param {?} config
     */
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    /**
     * @return {?}
     */
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            ((window))['nguiMapRef'] = ((window))['nguiMapRef'] || [];
            ((window))['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    /**
     * @return {?}
     */
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        ((window))['initNguiMap'] = ((window))['initNguiMap'] || function () {
            ((window))['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            ((window))['nguiMapRef'].splice(0, ((window))['nguiMapRef'].length);
        };
        var /** @type {?} */ script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var /** @type {?} */ apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
NgMapAsyncCallbackApiLoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NgMapAsyncCallbackApiLoader.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
var NgMapAsyncApiLoader = /** @class */ (function (_super) {
    __extends(NgMapAsyncApiLoader, _super);
    /**
     * @param {?} config
     */
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    /**
     * @return {?}
     */
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var /** @type {?} */ script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
NgMapAsyncApiLoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NgMapAsyncApiLoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = /** @class */ (function () {
    /**
     * @param {?} apiLoader
     */
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    /**
     * @return {?}
     */
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @param {?} options
     * @param {?} observer
     * @return {?}
     */
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var /** @type {?} */ geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
    return GeoCoder;
}());
GeoCoder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
GeoCoder.ctorParameters = function () { return [
    { type: NgMapApiLoader, },
]; };
/**
 * collection of map instance-related properties and methods
 */
var NguiMap = /** @class */ (function () {
    /**
     * @param {?} geoCoder
     * @param {?} optionBuilder
     * @param {?} zone
     */
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var /** @type {?} */ val, /** @type {?} */ currentValue, /** @type {?} */ setMethodName;
            if (object) {
                for (var /** @type {?} */ key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var /** @type {?} */ eventName = _this.getEventName(definedEvent), /** @type {?} */ zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var /** @type {?} */ param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    /**
     * @param {?} definedEvents
     * @param {?} thisObj
     * @param {?} prefix
     * @return {?}
     */
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var /** @type {?} */ eventName = _this.getEventName(definedEvent);
            _this.zone.runOutsideAngular(function () {
                if (thisObj[prefix]) {
                    google.maps.event.clearListeners(thisObj[prefix], eventName);
                }
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    /**
     * @param {?} definedEvent
     * @return {?}
     */
    NguiMap.prototype.getEventName = function (definedEvent) {
        return definedEvent
            .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
            .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
    };
    return NguiMap;
}());
NguiMap.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NguiMap.ctorParameters = function () { return [
    { type: GeoCoder, },
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
var INPUTS$1 = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    // ngui-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS$1 = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = /** @class */ (function () {
    /**
     * @param {?} optionBuilder
     * @param {?} elementRef
     * @param {?} geolocation
     * @param {?} geoCoder
     * @param {?} nguiMap
     * @param {?} apiLoader
     * @param {?} zone
     */
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapOptions = {};
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.infoWindows = {};
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS$1.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$.subscribe(function () { return _this.initializeMap(); });
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS$1, this);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            // set google events listeners and emits to this outputs listeners
            _this.nguiMap.setObjectEvents(OUTPUTS$1, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            // update map when input changes
            rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(_this.inputChanges$, 1000)
                .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); });
            if (typeof window !== 'undefined' && ((window))['nguiMapRef']) {
                // expose map object for test and debugging on (<any>window)
                ((window))['nguiMapRef'].map = _this.map;
            }
        });
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                var /** @type {?} */ latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    /**
     * @param {?} id
     * @param {?} anchor
     * @return {?}
     */
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NguiMapComponent.prototype.closeInfoWindow = function (id) {
        // if infoWindow for id exists, close the infoWindow
        if (this.infoWindows[id])
            this.infoWindows[id].close();
    };
    /**
     * @return {?}
     */
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS$1, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var /** @type {?} */ groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    /**
     * @param {?} mapObjectName
     * @param {?} mapObject
     * @return {?}
     */
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var /** @type {?} */ groupName = toCamelCase(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        if (this.map && this.map[groupName]) {
            var /** @type {?} */ index = this.map[groupName].indexOf(mapObject);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    return NguiMapComponent;
}());
NguiMapComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map',
                providers: [NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation],
                styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
                inputs: INPUTS$1,
                outputs: OUTPUTS$1,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
NguiMapComponent.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NavigatorGeolocation, },
    { type: GeoCoder, },
    { type: NguiMap, },
    { type: NgMapApiLoader, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
NguiMapComponent.propDecorators = {
    'mapReady$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = /** @class */ (function (_super) {
    __extends(BicyclingLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    return BicyclingLayer;
}(BaseMapDirective));
BicyclingLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > bicycling-layer',
                inputs: INPUTS,
                outputs: OUTPUTS,
            },] },
];
/**
 * @nocollapse
 */
BicyclingLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$2 = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS$2 = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} nguiMap
     * @param {?} nguiMapComponent
     */
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.objectOptions = {};
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$2.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS$2, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        // register infoWindow ids to NguiMap, so that it can be opened by id
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS$2, this, 'infoWindow');
        // update object when input changes
        rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); });
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    /**
     * @param {?} anchor
     * @return {?}
     */
    InfoWindow.prototype.open = function (anchor) {
        // set content and open it
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.close = function () {
        // check if infoWindow exists, and closes it
        if (this.infoWindow)
            this.infoWindow.close();
    };
    /**
     * @return {?}
     */
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS$2, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
    return InfoWindow;
}());
InfoWindow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map > info-window',
                inputs: INPUTS$2,
                outputs: OUTPUTS$2,
                template: "<div #template><ng-content></ng-content></div>",
            },] },
];
/**
 * @nocollapse
 */
InfoWindow.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NguiMap, },
    { type: NguiMapComponent, },
]; };
InfoWindow.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'template': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['template', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
};
var INPUTS$3 = [
    'position'
];
// to avoid DOM event conflicts map_*
var OUTPUTS$3 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 * @param {?} htmlEl
 * @param {?} position
 * @return {?}
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = /** @class */ (function (_super) {
        __extends(CustomMarkerOverlayView, _super);
        /**
         * @param {?} htmlEl
         * @param {?} position
         */
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var /** @type {?} */ geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var /** @type {?} */ positionOnMap_1 = function () {
                        var /** @type {?} */ projection = _this.getProjection();
                        if (!projection) {
                            return;
                        }
                        var /** @type {?} */ posPixel = projection.fromLatLngToDivPixel(_this.position);
                        var /** @type {?} */ x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var /** @type {?} */ y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        /**
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        /**
         * @param {?} zIndex
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        /**
         * @param {?} visible
         * @return {?}
         */
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = /** @class */ (function () {
    /**
     * @param {?} nguiMapComponent
     * @param {?} elementRef
     * @param {?} nguiMap
     */
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputChanges$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$3.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
    }
    /**
     * @return {?}
     */
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS$3, this, 'mapObject');
        }
    };
    /**
     * @return {?}
     */
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS$3, this, 'mapObject');
        // update object when input changes
        rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); });
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return CustomMarker;
}());
CustomMarker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngui-map > custom-marker',
                inputs: INPUTS$3,
                outputs: OUTPUTS$3,
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CustomMarker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NguiMap, },
]; };
CustomMarker.propDecorators = {
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS$4 = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS$4 = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS$4, OUTPUTS$4) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    /**
     * @return {?}
     */
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                var /** @type {?} */ latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Circle;
}(BaseMapDirective));
Circle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map>circle, ngui-map>map-circle',
                inputs: INPUTS$4,
                outputs: OUTPUTS$4,
            },] },
];
/**
 * @nocollapse
 */
Circle.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$5 = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS$5 = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = /** @class */ (function (_super) {
    __extends(DataLayer, _super);
    /**
     * @param {?} nguiMapComponent
     */
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS$5, OUTPUTS$5) || this;
    }
    /**
     * @return {?}
     */
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            // addGeoJson from an object
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            // loadGeoJson from a URL
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.nguiMapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return DataLayer;
}(BaseMapDirective));
DataLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > data-layer',
                inputs: INPUTS$5,
                outputs: OUTPUTS$5,
            },] },
];
/**
 * @nocollapse
 */
DataLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$6 = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS$6 = ['directions_changed'];
var DirectionsRenderer = /** @class */ (function (_super) {
    __extends(DirectionsRenderer, _super);
    /**
     * @param {?} nguiMapComponent
     * @param {?} geolocation
     */
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS$6, OUTPUTS$6) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    /**
     * @return {?}
     */
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ newOptions = {};
        for (var /** @type {?} */ key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    /**
     * @param {?} directionsRequest
     * @return {?}
     */
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            // in some-case the callback is called during destroy component,
            // we should make sure directionsRenderer is still defined (cancelling `route` callback is not possible).
            if (!_this.directionsRenderer) {
                return;
            }
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    /**
     * @return {?}
     */
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
    return DirectionsRenderer;
}(BaseMapDirective));
DirectionsRenderer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > directions-renderer',
                inputs: INPUTS$6,
                outputs: OUTPUTS$6,
            },] },
];
/**
 * @nocollapse
 */
DirectionsRenderer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: NavigatorGeolocation, },
]; };
DirectionsRenderer.propDecorators = {
    'directionsRequest': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['directions-request',] },],
};
var INPUTS$7 = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS$7 = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = /** @class */ (function (_super) {
    __extends(DrawingManager, _super);
    /**
     * @param {?} nguiMapComp
     */
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS$7, OUTPUTS$7) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    return DrawingManager;
}(BaseMapDirective));
DrawingManager.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > drawing-manager',
                inputs: INPUTS$7,
                outputs: OUTPUTS$7,
            },] },
];
/**
 * @nocollapse
 */
DrawingManager.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$8 = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS$8 = ['click', 'dblclick'];
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    /**
     * @param {?} nguiMapComp
     */
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS$8, OUTPUTS$8) || this;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return GroundOverlay;
}(BaseMapDirective));
GroundOverlay.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > ground-overlay',
                inputs: INPUTS$8,
                outputs: OUTPUTS$8,
            },] },
];
/**
 * @nocollapse
 */
GroundOverlay.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$9 = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS$9 = [];
var HeatmapLayer = /** @class */ (function (_super) {
    __extends(HeatmapLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS$9, OUTPUTS$9) || this;
        _this.libraryName = 'visualization';
        return _this;
    }
    return HeatmapLayer;
}(BaseMapDirective));
HeatmapLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > heatmap-layer',
                inputs: INPUTS$9,
                outputs: OUTPUTS$9,
            },] },
];
/**
 * @nocollapse
 */
HeatmapLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$10 = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS$10 = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = /** @class */ (function (_super) {
    __extends(KmlLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS$10, OUTPUTS$10) || this;
    }
    return KmlLayer;
}(BaseMapDirective));
KmlLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > kml-layer',
                inputs: INPUTS$10,
                outputs: OUTPUTS$10,
            },] },
];
/**
 * @nocollapse
 */
KmlLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$11 = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS$11 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS$11, OUTPUTS$11) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    /**
     * @return {?}
     */
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    /**
     * @return {?}
     */
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    /**
     * @return {?}
     */
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                var /** @type {?} */ latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Marker;
}(BaseMapDirective));
Marker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > marker',
                inputs: INPUTS$11,
                outputs: OUTPUTS$11,
            },] },
];
/**
 * @nocollapse
 */
Marker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var PlacesAutoComplete = /** @class */ (function () {
    /**
     * @param {?} optionBuilder
     * @param {?} elementRef
     * @param {?} apiLoader
     */
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            if (!google.maps.places) {
                throw missingLibraryError('PlacesAutoComplete', 'places');
            }
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
    return PlacesAutoComplete;
}());
PlacesAutoComplete.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[places-auto-complete]'
            },] },
];
/**
 * @nocollapse
 */
PlacesAutoComplete.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: NgMapApiLoader, },
]; };
PlacesAutoComplete.propDecorators = {
    'bounds': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['bounds',] },],
    'componentRestrictions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['componentRestrictions',] },],
    'types': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['types',] },],
    'place_changed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['place_changed',] },],
    'initialized$': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var INPUTS$12 = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS$12 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS$12, OUTPUTS$12) || this;
    }
    return Polygon;
}(BaseMapDirective));
Polygon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map>polygon, ngui-map>map-polygon',
                inputs: INPUTS$12,
                outputs: OUTPUTS$12,
            },] },
];
/**
 * @nocollapse
 */
Polygon.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$13 = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS$13 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    /**
     * @param {?} nguiMapComp
     */
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS$13, OUTPUTS$13) || this;
    }
    return Polyline;
}(BaseMapDirective));
Polyline.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > polyline',
                inputs: INPUTS$13,
                outputs: OUTPUTS$13,
            },] },
];
/**
 * @nocollapse
 */
Polyline.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$14 = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS$14 = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    /**
     * @param {?} nguiMapComp
     */
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS$14, OUTPUTS$14) || this;
    }
    /**
     * @return {?}
     */
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        var /** @type {?} */ element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    /**
     * @return {?}
     */
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return StreetViewPanorama;
}(BaseMapDirective));
StreetViewPanorama.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > street-view-panorama',
                inputs: INPUTS$14,
                outputs: OUTPUTS$14,
            },] },
];
/**
 * @nocollapse
 */
StreetViewPanorama.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$15 = ['autoRefresh', 'options'];
var OUTPUTS$15 = [];
var TrafficLayer = /** @class */ (function (_super) {
    __extends(TrafficLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS$15, OUTPUTS$15) || this;
    }
    return TrafficLayer;
}(BaseMapDirective));
TrafficLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > traffic-layer',
                inputs: INPUTS$15,
                outputs: OUTPUTS$15,
            },] },
];
/**
 * @nocollapse
 */
TrafficLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$16 = [];
var OUTPUTS$16 = [];
var TransitLayer = /** @class */ (function (_super) {
    __extends(TransitLayer, _super);
    /**
     * @param {?} nguiMapComp
     */
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS$16, OUTPUTS$16) || this;
    }
    return TransitLayer;
}(BaseMapDirective));
TransitLayer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ngui-map > transit-layer',
                inputs: INPUTS$16,
                outputs: OUTPUTS$16,
            },] },
];
/**
 * @nocollapse
 */
TransitLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var COMPONENTS_DIRECTIVES = [
    NguiMapComponent, InfoWindow,
    Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay,
    TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer,
    StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer,
    DrawingManager,
];
var NguiMapModule = /** @class */ (function () {
    function NguiMapModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule,
            providers: [
                { provide: NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
    return NguiMapModule;
}());
NguiMapModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                declarations: COMPONENTS_DIRECTIVES,
                exports: [COMPONENTS_DIRECTIVES],
                providers: [
                    GeoCoder,
                    NavigatorGeolocation,
                    NguiMap,
                    OptionBuilder,
                    { provide: NgMapApiLoader, useClass: NgMapAsyncCallbackApiLoader },
                ]
            },] },
];
/**
 * @nocollapse
 */
NguiMapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=map.es5.js.map


/***/ }),

/***/ "./node_modules/ammap3/ammap/maps/js/worldLow.js":
/*!*******************************************************!*\
  !*** ./node_modules/ammap3/ammap/maps/js/worldLow.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿// (c) ammap.com | SVG (in JSON format) map of World - Low
// areas: {id:"AE"},{id:"AF"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AT"},{id:"AU"},{id:"AZ"},{id:"BA"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BI"},{id:"BJ"},{id:"BN"},{id:"BO"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EE"},{id:"EG"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FK"},{id:"FI"},{id:"FJ"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GF"},{id:"GH"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GQ"},{id:"GR"},{id:"GT"},{id:"GW"},{id:"GY"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IN"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MD"},{id:"ME"},{id:"MG"},{id:"MK"},{id:"ML"},{id:"MM"},{id:"MN"},{id:"MR"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PG"},{id:"PH"},{id:"PL"},{id:"PK"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PY"},{id:"QA"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SD"},{id:"SE"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"SV"},{id:"SY"},{id:"SZ"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TR"},{id:"TT"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VE"},{id:"VN"},{id:"VU"},{id:"YE"},{id:"ZA"},{id:"ZM"},{id:"ZW"}
AmCharts.maps.worldLow={
	"svg": {
		"defs": {
			"amcharts:ammap": {
				"projection":"mercator",
				"leftLongitude":"-169.6",
				"topLatitude":"83.68",
				"rightLongitude":"190.25",
				"bottomLatitude":"-55.55"
			}
		},
		"g":{
			"path":[
				{
					"id":"AE",
					"title":"United Arab Emirates",
					"d":"M619.874,393.722L620.373,393.573L620.477,394.411L622.671,393.93L624.99,394.009L626.684,394.1L628.604,392.028L630.695,390.054L632.467,388.146L633.001,389.202L633.382,391.639L631.949,391.651L631.72,393.648L632.216,394.073L630.947,394.674L630.939,395.919L630.122,397.175L630.049,398.394L629.484,399.032L621.056,397.508L619.981,394.428z"
				},
				{
					"id":"AF",
					"title":"Afghanistan",
					"d":"M646.879,356.901L649.738,358.201L651.853,357.745L652.438,356.188L654.651,355.669L656.231,354.617L656.791,351.832L659.154,351.154L659.594,349.902L660.917,350.843L661.762,350.952L663.323,350.975L665.438,351.716L666.295,352.143L668.324,351.017L669.27,351.694L670.174,350.085L671.85,350.159L672.281,349.641L672.578,348.213L673.785,346.975L675.303,347.785L674.998,348.869L675.846,349.038L675.585,351.994L676.694,353.137L677.672,352.404L678.916,352.057L680.663,350.486L682.594,350.745L685.486,350.751L685.985,351.758L684.353,352.15L682.928,352.795L679.71,353.2L676.699,353.931L675.063,355.439L675.725,356.899L676.046,358.603L674.649,360.033L674.766,361.335L673.995,362.549L671.328,362.444L672.43,364.663L670.646,365.507L669.455,367.511L669.609,369.491L668.514,370.415L667.477,370.109L665.334,370.537L665.027,371.451L662.939,371.446L661.377,373.289L661.278,376.039L657.635,377.374L655.682,377.092L655.114,377.794L653.438,377.386L650.634,377.865L645.936,376.228L648.479,373.298L648.249,371.202L646.125,370.65L645.905,368.565L644.987,365.921L646.187,364.094L644.966,363.599L645.736,361.148z"
				},
				{
					"id":"AL",
					"title":"Albania",
					"d":"M532.985,334.657L532.629,335.93L533.027,337.524L534.19,338.425L534.134,339.393L533.223,339.925L533.054,341.115L531.75,342.88L531.274,342.626L531.218,341.826L529.665,340.601L529.421,338.851L529.658,336.323L530.041,335.164L529.568,334.573L529.38,333.377L530.596,331.512L530.774,332.227L531.528,331.891L532.125,332.907L532.796,333.293z"
				},
				{
					"id":"AM",
					"title":"Armenia",
					"d":"M597.453,337.502L601.349,336.923L601.93,337.897L602.998,338.537L602.434,339.461L603.927,340.719L603.137,341.881L604.327,342.869L605.586,343.462L605.648,345.958L604.633,346.064L603.488,343.984L603.501,343.427L602.262,343.435L601.432,342.462L600.849,342.561L599.744,341.498L597.659,340.59L597.929,338.803z"
				},
				{
					"id":"AO",
					"title":"Angola",
					"d":"M521.03,479.784l0.691,2.088l0.805,1.683l0.645,0.908l1.074,1.47l1.854,-0.228l0.925,-0.396l1.549,0.397l0.42,-0.703l0.704,-1.637l1.739,-0.109l0.151,-0.486l1.431,-0.011l-0.244,1.011l3.402,-0.024l0.051,1.768l0.568,1.086l-0.413,1.698l0.206,1.735l0.935,1.049l-0.15,3.371l0.694,-0.26l1.219,0.07l1.737,-0.425l1.277,0.167l0.296,0.881l-0.319,1.379l0.493,1.335l-0.418,1.068l0.239,0.986l-5.838,-0.036l-0.129,9.158l1.892,2.377l1.83,1.823l-5.153,1.192l-6.788,-0.414l-1.943,-1.4l-11.366,0.126l-0.424,0.205L513,511.367l-1.818,-0.087l-1.678,0.497l-1.35,0.555l-0.264,-1.833l0.388,-2.552l0.967,-2.645l0.146,-1.236l0.91,-2.588l0.668,-1.173l1.611,-1.87l0.899,-1.269l0.294,-2.107l-0.147,-1.609l-0.838,-1.013l-0.747,-1.716l-0.689,-1.694l0.15,-0.586l0.862,-1.117l-0.851,-2.718l-0.574,-1.88l-1.405,-1.774l0.267,-0.544l1.157,-0.376l0.813,0.052l0.983,-0.336L521.03,479.784zM510.124,479.243l-0.713,0.296l-0.75,-2.104l1.132,-1.207l0.847,-0.47l1.051,0.959l-1.021,0.587l-0.458,0.719L510.124,479.243z"
				},
				{
					"id":"AR",
					"title":"Argentina",
					"d":"M291.601,648.907l-2.664,0.245l-1.43,-1.726l-1.689,-0.13l-3.002,-0.003l-0.002,-10.568l1.077,2.148l1.402,3.525l3.645,2.865l3.925,1.207L291.601,648.907zM293.101,526.469l1.648,2.178l1.094,-2.426l3.197,0.125l0.453,0.644l5.155,4.945l2.292,0.464l3.426,2.262l2.888,1.202l0.402,1.362l-2.76,4.731l2.827,0.854l3.149,0.479l2.217,-0.505l2.543,-2.398l0.458,-2.743l1.389,-0.593l1.407,1.789l-0.057,2.489l-2.361,1.729l-1.883,1.282l-3.165,3.078l-3.741,4.372l-0.701,2.594l-0.75,3.365l0.028,3.297l-0.608,0.742l-0.217,2.165l-0.192,1.761l3.56,2.914l-0.383,2.368l1.752,1.507l-0.143,1.7l-2.694,4.516l-4.157,1.913l-5.624,0.746l-3.08,-0.361l0.589,2.147l-0.574,2.721l0.518,1.851l-1.682,1.299l-2.874,0.512l-2.696,-1.347l-1.083,0.967l0.391,3.71l1.893,1.135l1.535,-1.189l0.835,1.962l-2.582,1.18l-2.251,2.383l-0.412,3.907l-0.663,2.107l-2.648,0.011l-2.198,2.035l-0.804,3.013l2.757,2.982l2.681,0.831l-0.964,3.726l-3.312,2.375l-1.822,5.025l-2.559,1.719l-1.149,2.059l0.905,4.641l1.866,2.633l-1.182,-0.231l-2.599,-0.715l-6.775,-0.608l-1.162,-2.632l0.054,-3.332l-1.867,0.284l-0.988,-1.596l-0.245,-4.599l2.151,-1.878l0.889,-2.68l-0.326,-2.112l1.486,-3.52l1.024,-5.35l-0.301,-2.331l1.224,-0.748l-0.3,-1.478l-1.301,-0.782l0.924,-1.63l-1.266,-1.462l-0.655,-4.395l1.127,-0.767l-0.474,-4.543l0.659,-3.751l0.75,-3.223l1.679,-1.3l-0.853,-3.462l-0.009,-3.217l2.123,-2.263l-0.065,-2.868l1.6,-3.313l0.007,-3.086l-0.728,-0.609l-1.292,-5.694l1.728,-3.343l-0.265,-3.115l1.002,-2.896l1.836,-2.963l1.979,-1.95l-0.839,-1.225l0.585,-1.001l-0.089,-5.143l3.054,-1.509l0.962,-3.159l-0.34,-0.758l2.336,-2.722L293.101,526.469z"
				},
				{
					"id":"AT",
					"title":"Austria",
					"d":"M522.861,309.853L522.648,311.557L521.069,311.565L521.613,312.464L520.682,315.111L520.147,315.8L517.695,315.901L516.28,316.823L513.964,316.509L509.955,315.458L509.329,314.034L506.558,314.746L506.231,315.523L504.533,314.943L503.102,314.832L501.833,314.085L502.262,313.078L502.154,312.344L503,312.116L504.419,313.264L504.818,312.173L507.291,312.35L509.295,311.606L510.64,311.733L511.514,312.582L511.775,311.878L511.378,309.158L512.385,308.624L513.374,306.673L515.457,308.037L517.034,306.302L518.021,305.983L520.198,307.281L521.515,307.061L522.807,307.861L522.582,308.396z"
				},
				{
					"id":"AU",
					"title":"Australia",
					"d":"M882.928,588.16l2.709,1.277l1.526,-0.508l2.188,-0.71l1.682,0.248l0.199,4.425l-0.961,1.3l-0.289,3.064l-0.98,-1.047l-1.946,2.675l-0.58,-0.208l-1.725,-0.12l-1.729,-3.276l-0.384,-2.496l-1.617,-3.254l0.071,-1.695L882.928,588.16zM877.779,502.097l1.01,2.254l1.799,-1.084l0.929,1.218l1.346,1.125l-0.288,1.28l0.598,2.484l0.426,1.452l0.706,0.355l0.761,2.495l-0.271,1.52l0.908,1.995l3.038,1.542l1.98,1.407l1.881,1.292l-0.367,0.721l1.604,1.872l1.09,3.249l1.119,-0.662l1.137,1.306l0.686,-0.464l0.483,3.208l1.989,1.871l1.302,1.167l2.191,2.488l0.788,2.487l0.072,1.774l-0.193,1.937l1.336,2.676l-0.16,2.811l-0.485,1.48l-0.757,2.871l0.057,1.859l-0.555,2.34l-1.238,2.996l-2.077,1.631l-1.023,2.59l-0.936,1.666l-0.831,2.932l-1.082,1.707l-0.709,2.583l-0.362,2.401l0.144,1.109l-1.607,1.224l-3.139,0.128l-2.588,1.454l-1.288,1.38l-1.694,1.539l-2.322,-1.584l-1.718,-0.629l0.436,-1.851l-1.533,0.67l-2.455,2.582l-2.424,-0.97l-1.59,-0.564l-1.604,-0.254l-2.714,-1.027l-1.813,-2.175l-0.521,-2.655l-0.651,-1.752l-1.378,-1.398l-2.697,-0.414l0.922,-1.661l-0.679,-2.522l-1.369,2.351l-2.495,0.627l1.467,-1.885l0.425,-1.953l1.083,-1.646l-0.225,-2.472l-2.28,2.849l-1.752,1.15l-1.074,2.693l-2.189,-1.396l0.087,-1.791l-1.754,-2.43l-1.479,-1.247l0.527,-0.766l-3.598,-2.001l-1.971,-0.094l-2.696,-1.597l-5.021,0.31l-3.631,1.175l-3.19,1.1l-2.676,-0.219l-2.972,1.696l-2.432,0.766l-0.54,1.75l-1.035,1.363l-2.38,0.082l-1.761,0.299l-2.478,-0.613l-2.017,0.367l-1.925,0.154l-1.668,1.801l-0.817,-0.153l-1.406,0.959l-1.348,1.082l-2.046,-0.134l-1.879,-0.001l-2.975,-2.168l-1.507,-0.642l0.061,-1.927l1.393,-0.456l0.476,-0.761l-0.1,-1.196l0.343,-2.302l-0.313,-1.948l-1.482,-3.294l-0.46,-1.845l0.121,-1.83l-1.116,-2.079l-0.071,-0.934l-1.242,-1.262l-0.35,-2.468l-1.603,-2.477l-0.388,-1.327l1.231,1.346l-0.946,-2.881l1.391,0.898l0.83,1.203l-0.047,-1.59l-1.388,-2.43l-0.269,-0.968l-0.65,-0.917l0.305,-1.767l0.574,-0.75l0.383,-1.519l-0.3,-1.768l1.159,-2.165l0.211,2.292l1.185,-2.071l2.278,-1.002l1.366,-1.276l2.143,-1.095l1.274,-0.232l0.772,0.367l2.209,-1.109l1.701,-0.33l0.425,-0.65l0.742,-0.271l1.55,0.07l2.947,-0.867l1.524,-1.313l0.716,-1.575l1.645,-1.491l0.126,-1.169l0.073,-1.589l1.962,-2.474l1.181,2.514l1.193,-0.582l-0.998,-1.375l0.88,-1.409l1.237,0.629l0.34,-2.205l1.532,-1.421l0.676,-1.138l1.41,-0.491l0.044,-0.804l1.232,0.335l0.049,-0.722l1.233,-0.412l1.355,-0.387l2.071,1.318l1.556,1.705l1.755,0.02l1.783,0.271l-0.594,-1.582l1.343,-2.303l1.264,-0.749l-0.437,-0.715l1.218,-1.632l1.698,-1.006l1.435,0.339l2.355,-0.537l-0.051,-1.455l-2.054,-0.936l1.493,-0.413l1.857,0.704l1.489,1.167l2.361,0.729l0.801,-0.288l1.738,0.875l1.638,-0.815l1.054,0.248l0.656,-0.547l1.287,1.41l-0.747,1.528l-1.064,1.155l-0.964,0.096l0.325,1.146l-0.824,1.435l-0.996,1.414l0.201,0.814l2.229,1.596l2.16,0.928l1.443,0.999l2.027,1.722l0.79,-0.003l1.468,0.746l0.426,0.901l2.677,0.992l1.852,-0.999l0.549,-1.566l0.568,-1.289l0.349,-1.59l0.853,-2.3l-0.39,-1.394l0.202,-0.837l-0.324,-1.643l0.367,-2.157l0.538,-0.581l-0.437,-0.953l0.678,-1.511l0.532,-1.563l0.07,-0.81l1.042,-1.063l0.791,1.388l0.194,1.783l0.699,0.344l0.119,1.197l1.02,1.452l0.21,1.62L877.779,502.097z"
				},
				{
					"id":"AZ",
					"title":"Azerbaijan",
					"d":"M601.432,342.462l0.831,0.973l1.239,-0.008l-0.013,0.558l1.145,2.08l-1.923,-0.477l-1.417,-1.661l-0.445,-1.366L601.432,342.462zM608.081,337.029l1.241,0.253l0.481,-0.945l1.674,-1.506l1.474,1.965l1.426,2.623l1.307,0.172l0.863,0.988l-2.31,0.294l-0.487,2.823l-0.482,1.263l-1.028,0.839l0.075,1.769l-0.698,0.178l-1.749,-1.869l0.967,-1.779l-0.829,-1.062l-1.051,0.268l-3.307,2.656l-0.062,-2.496l-1.259,-0.593l-1.19,-0.988l0.791,-1.162l-1.494,-1.258l0.564,-0.924l-1.068,-0.64l-0.581,-0.974l0.687,-0.607l2.089,1.068l1.511,0.22l0.382,-0.435l-1.381,-2.017l0.728,-0.517l0.788,0.126L608.081,337.029z"
				},
				{
					"id":"BA",
					"title":"Bosnia and Herzegovina",
					"d":"M528.542,323.106L529.558,323.096L528.856,324.823L530.208,326.323L529.799,328.144L529.139,328.314L528.615,328.666L527.703,329.559L527.292,331.658L524.811,330.215L523.752,328.613L522.684,327.76L521.395,326.313L520.787,325.104L519.414,323.27L520,321.629L521.007,322.539L521.614,321.717L522.924,321.629L525.335,322.287L527.273,322.232z"
				},
				{
					"id":"BD",
					"title":"Bangladesh",
					"d":"M735.094,400.405L735.036,402.557L734.058,402.104L734.241,404.507L733.439,402.951L733.278,401.426L732.744,399.979L731.573,398.223L728.99,398.102L729.245,399.347L728.365,401.021L727.172,400.412L726.765,400.958L725.971,400.631L724.886,400.362L724.449,397.877L723.478,395.596L723.954,393.757L722.229,392.938L722.851,391.819L724.604,390.672L722.58,389.037L723.57,386.93L725.791,388.273L727.13,388.426L727.377,390.576L730.045,390.999L732.646,390.953L734.262,391.479L732.97,394.073L731.715,394.25L730.85,395.984L732.385,397.556L732.843,395.616L733.617,395.606z"
				},
				{
					"id":"BE",
					"title":"Belgium",
					"d":"M484.548,295.906L486.601,296.258L489.199,295.327L490.974,297.283L492.515,298.319L492.197,301.287L491.466,301.452L491.162,303.882L488.709,301.909L487.271,302.247L485.313,300.19L484.01,298.422L482.707,298.35L482.301,296.788z"
				},
				{
					"id":"BF",
					"title":"Burkina Faso",
					"d":"M467.325,436.401L465.406,435.672L464.092,435.779L463.112,436.49L461.851,435.894L461.361,434.958L460.1,434.341L459.914,432.695L460.679,431.491L460.614,430.528L462.84,428.167L463.251,426.207L464.02,425.508L465.375,425.894L466.551,425.311L466.932,424.574L469.107,423.287L469.643,422.388L472.263,421.192L473.807,420.782L474.506,421.335L476.304,421.322L476.082,422.718L476.458,424.027L478.037,425.899L478.125,427.284L481.357,427.932L481.294,429.884L480.681,430.735L479.311,431.001L478.739,432.243L477.775,432.564L475.32,432.504L474.023,432.278L473.118,432.736L471.879,432.529L467.008,432.663L466.942,434.271z"
				},
				{
					"id":"BG",
					"title":"Bulgaria",
					"d":"M538.78,325.558L539.587,327.156L540.673,326.872L542.828,327.476L546.945,327.68L548.336,326.692L551.637,325.788L553.677,327.2L555.326,327.606L553.871,329.202L552.847,331.931L553.751,334.086L551.337,333.581L548.481,334.764L548.451,336.623L545.902,336.974L543.927,335.673L541.682,336.697L539.608,336.589L539.409,334.116L538.005,332.907L538.466,332.373L538.162,331.922L538.633,330.712L539.702,329.517L538.34,327.856L538.088,326.441z"
				},
				{
					"id":"BI",
					"title":"Burundi",
					"d":"M557.518,475.931L557.34,472.564L556.635,471.296L558.337,471.515L559.196,469.928L560.686,470.11L560.848,471.208L561.452,471.84L561.478,472.747L560.786,473.331L559.695,474.786L558.677,475.798z"
				},
				{
					"id":"BJ",
					"title":"Benin",
					"d":"M482.8,445.918L480.483,446.246L479.792,444.312L479.92,437.852L479.355,437.27L479.249,435.884L478.275,434.893L477.418,434.057L477.775,432.564L478.739,432.243L479.311,431.001L480.681,430.735L481.294,429.884L482.235,429.05L483.24,429.042L485.378,430.681L485.269,431.625L485.899,433.309L485.347,434.45L485.643,435.211L484.282,436.961L483.418,437.826L482.89,439.604L482.961,441.395z"
				},
				{
					"id":"BN",
					"title":"Brunei Darussalam",
					"d":"M795.464,450.767L796.574,449.721L798.96,448.189L798.834,449.567L798.67,451.352L797.33,451.263L796.741,452.214z"
				},
				{
					"id":"BO",
					"title":"Bolivia",
					"d":"M299.041,526.346L295.843,526.222L294.75,528.647L293.101,526.469L289.432,525.737L287.096,528.459L285.073,528.874L283.975,524.724L282.468,521.376L283.351,518.508L281.88,517.258L281.506,515.136L280.132,513.144L281.9,509.998L280.694,507.561L281.337,506.589L280.835,505.519L281.931,504.079L281.985,501.636L282.124,499.624L282.726,498.657L280.302,494.077L282.387,494.317L283.831,494.255L284.456,493.397L286.908,492.249L288.385,491.186L292.054,490.708L291.755,492.828L292.1,493.918L291.875,495.822L294.919,498.374L298.059,498.845L299.163,499.912L301.058,500.479L302.218,501.311L303.982,501.282L305.611,502.132L305.734,503.793L306.281,504.633L306.317,505.876L305.5,505.924L306.578,509.294L311.953,509.414L311.542,511.093L311.842,512.244L313.374,513.063L314.036,514.884L313.538,517.2L312.77,518.493L313.04,520.18L312.163,520.793L312.115,519.879L309.503,518.365L306.899,518.324L302.013,519.184L300.668,521.795L300.598,523.399L299.493,526.99z"
				},
				{
					"id":"BR",
					"title":"Brazil",
					"d":"M313.681,551.79L317.421,547.418L320.586,544.34L322.469,543.058L324.83,541.33L324.887,538.84L323.48,537.052L322.092,537.645L322.642,535.862L323.022,534.045L323.023,532.363L322.015,531.81L320.963,532.303L319.917,532.167L319.59,530.995L319.329,528.217L318.804,527.315L316.91,526.5L315.766,527.09L312.806,526.512L312.992,522.447L312.163,520.793L313.04,520.18L312.77,518.493L313.538,517.2L314.036,514.884L313.374,513.063L311.842,512.244L311.542,511.093L311.953,509.414L306.578,509.294L305.5,505.924L306.317,505.876L306.281,504.633L305.734,503.793L305.611,502.132L303.982,501.282L302.218,501.311L301.058,500.479L299.163,499.912L298.059,498.845L294.919,498.374L291.875,495.822L292.1,493.918L291.755,492.828L292.054,490.708L288.385,491.186L286.908,492.249L284.456,493.397L283.831,494.255L282.387,494.317L280.302,494.077L278.72,494.565L277.445,494.239L277.632,489.939L275.332,491.605L272.857,491.532L271.797,490.024L269.936,489.86L270.529,488.648L268.971,486.934L267.804,484.401L268.543,483.887L268.541,482.702L270.235,481.892L269.956,480.376L270.671,479.402L270.875,478.096L274.081,476.194L276.379,475.656L276.755,475.236L279.282,475.367L280.542,467.72L280.608,466.512L280.169,464.917L278.925,463.901L278.939,461.877L280.519,461.418L281.079,461.707L281.174,460.64L279.531,460.352L279.497,458.608L284.959,458.671L285.887,457.71L286.666,458.594L287.212,460.237L287.742,459.894L289.285,461.367L291.465,461.187L292.008,460.334L294.093,459.684L295.248,459.227L295.573,458.047L297.576,457.254L297.425,456.668L295.049,456.429L294.66,454.672L294.773,452.802L293.518,452.078L294.044,451.821L296.12,452.178L298.349,452.876L299.158,452.216L301.175,451.783L304.311,450.737L305.336,449.671L304.965,448.882L306.423,448.758L307.075,449.402L306.71,450.63L307.674,451.053L308.317,452.351L307.54,453.334L307.093,455.708L307.811,457.118L308.014,458.408L309.739,459.715L311.115,459.853L311.425,459.308L312.312,459.187L313.58,458.698L314.492,457.957L316.042,458.194L316.725,458.094L318.25,458.322L318.502,457.752L318.032,457.198L318.312,456.391L319.443,456.639L320.768,456.354L322.374,456.945L323.598,457.52L324.466,456.764L325.093,456.88L325.476,457.665L326.818,457.466L327.893,456.407L328.753,454.354L330.412,451.799L331.367,451.667L332.061,453.211L333.633,458.088L335.133,458.548L335.208,460.471L333.1,462.764L333.972,463.604L338.928,464.041L339.029,466.833L341.159,465.005L344.687,466.006L349.344,467.708L350.712,469.34L350.253,470.883L353.513,470.024L358.97,471.499L363.159,471.39L367.304,473.699L370.884,476.828L373.044,477.634L375.442,477.747L376.458,478.629L377.41,482.195L377.875,483.894L376.759,488.546L375.332,490.389L371.38,494.329L369.594,497.544L367.518,500.019L366.817,500.075L366.034,502.183L366.233,507.581L365.451,512.059L365.153,513.986L364.267,515.143L363.77,519.082L360.927,522.96L360.45,526.053L358.181,527.357L357.524,529.168L354.478,529.161L350.067,530.326L348.092,531.679L344.952,532.57L341.652,535.01L339.279,538.071L338.871,540.393L339.337,542.12L338.813,545.302L338.177,546.85L336.217,548.604L333.106,554.28L330.641,556.873L328.734,558.412L327.456,561.566L325.601,563.48L324.825,561.585L326.061,560.007L324.439,557.759L322.24,555.944L319.354,553.855L318.313,553.95L315.5,551.446z"
				},
				{
					"id":"BS",
					"title":"Bahamas",
					"d":"M257.857,395.204l-0.688,0.151l-0.712,-1.758l-1.05,-0.887l0.61,-1.951l0.844,0.124l0.981,2.549L257.857,395.204zM257.057,386.514l-3.056,0.499l-0.196,-1.154l1.318,-0.25l1.851,0.094L257.057,386.514zM259.356,386.482l-0.484,2.21l-0.516,-0.397l0.046,-1.625l-1.256,-1.234l-0.006,-0.359L259.356,386.482z"
				},
				{
					"id":"BT",
					"title":"Bhutan",
					"d":"M732.356,382.777L733.498,383.782L733.301,385.707L731.014,385.8L728.646,385.59L726.884,386.079L724.335,384.892L724.275,384.263L726.13,381.922L727.645,381.119L729.648,381.852L731.129,381.929z"
				},
				{
					"id":"BW",
					"title":"Botswana",
					"d":"M547.169,515.946L547.733,516.471L548.615,518.177L551.788,521.432L552.989,521.752L552.996,522.803L553.821,524.698L555.989,525.158L557.776,526.516L553.809,528.737L551.292,531.002L550.358,533.034L549.515,534.185L547.989,534.43L547.497,535.901L547.213,536.864L545.42,537.584L543.138,537.431L541.798,536.565L540.617,536.19L539.249,536.906L538.563,538.389L537.235,539.323L535.833,540.714L533.824,541.033L533.199,539.937L533.457,538.044L531.795,535.111L531.038,534.649L531.037,525.788L533.801,525.683L533.883,515.113L535.971,515.016L540.293,513.99L541.365,515.198L543.155,514.049L544.005,514.043L545.586,513.383L546.09,513.602z"
				},
				{
					"id":"BY",
					"title":"Belarus",
					"d":"M541.099,284.075L543.809,284.107L546.853,282.31L547.504,279.586L549.803,278.024L549.539,275.817L551.244,274.982L554.256,273.053L557.208,274.309L557.606,275.545L559.078,274.952L561.819,276.135L562.093,278.443L561.493,279.757L563.25,282.91L564.392,283.779L564.223,284.637L566.113,285.468L566.921,286.722L565.83,287.744L563.568,287.582L563.028,288.017L563.687,289.557L564.376,292.494L561.969,292.764L561.105,293.759L560.925,296.024L559.81,295.591L557.279,295.806L556.544,294.756L555.493,295.539L554.438,294.89L552.23,294.8L549.101,293.716L546.269,293.361L544.096,293.462L542.56,294.687L541.219,294.862L541.166,292.849L540.301,290.732L541.982,289.792L541.999,287.944L541.221,286.165z"
				},
				{
					"id":"BZ",
					"title":"Belize",
					"d":"M225.309,412.958L225.287,412.527L225.626,412.393L226.135,412.739L227.14,410.968L227.673,410.93L227.683,411.361L228.214,411.374L228.168,412.172L227.714,413.438L227.959,413.891L227.666,414.935L227.842,415.214L227.518,416.685L226.967,417.455L226.46,417.548L225.905,418.552L225.068,418.553L225.287,415.273z"
				},
				{
					"id":"CA",
					"title":"Canada",
					"d":"M198.925,96.233l-0.222,-5.902l3.63,0.579l1.634,0.955l3.351,4.925l-0.76,4.97l-4.148,2.771l-2.284,-3.123L198.925,96.233zM212.14,108.876l0.334,-1.49l-1.968,-2.448l-5.646,-0.194l0.748,3.676l5.254,0.827L212.14,108.876zM248.488,155.832l3.085,5.103l0.812,0.574l3.069,-1.275l3.021,0.201l2.98,0.276l-0.248,-2.643l-4.835,-5.381l-6.417,-1.077l-1.349,0.666L248.488,155.832zM183.063,93.132l-2.708,4.188l6.242,0.516l4.615,4.438l4.579,1.498l-1.092,-5.68l-2.145,-6.726l-7.582,-5.353l-5.504,-2.044l0.204,5.687L183.063,93.132zM208.96,82.895l5.127,-0.116l-2.216,4.002l-0.043,5.297l3.013,5.756l5.811,1.766l4.96,-0.99l5.181,-10.729l3.85,-4.447l-3.38,-4.97l-2.215,-10.648l-4.599,-3.188l-4.718,-3.682l-3.581,-9.561l-6.521,0.937l1.225,4.149l-2.874,1.246l-1.943,5.322l-1.944,7.458l1.776,7.261L208.96,82.895zM145.21,136.272l3.92,1.953l12.667,-1.298l-5.824,4.771l0.357,3.431l4.264,-0.236l7.074,-4.58l9.495,-1.673l1.706,-5.218l-0.493,-5.569l-2.938,-0.502l-2.497,1.929l-1.099,-4.133l-0.945,-5.699l-2.895,-1.415l-2.569,4.411l4.01,11.049l-4.898,-0.851l-4.981,-6.788l-7.891,-3.998l-2.639,3.321L145.21,136.272zM167.773,94.206l-3.646,-2.897l-1.504,-0.659l-2.876,4.284l-0.045,2.002l4.656,0.014L167.773,94.206zM166.305,106.564l0.932,-3.985l-3.954,-2.125l-4.094,1.385l-2.271,4.261l4.159,4.207L166.305,106.564zM195.404,139.803l4.623,-1.106l1.277,-8.252l-0.087,-5.945l-2.144,-5.56l-0.216,1.596l-3.943,-0.699l-4.223,4.087l-3.017,-0.37l0.178,8.924l4.596,-0.868l-0.058,6.465L195.404,139.803zM192.118,185.406l-5.06,-3.927l-4.709,-4.208l-0.869,-6.18l-1.76,-8.925l-3.141,-3.839l-2.787,-1.547l-2.467,1.417l1.992,9.586l-1.409,3.731l-2.294,-8.979l-2.562,-3.105l-3.168,4.814l-3.899,-4.76l-6.239,2.868l1.399,-4.463l-2.865,-1.875l-7.507,5.838l-1.952,3.711l-2.354,6.771l4.896,2.317l4.325,-0.122l-6.503,3.461l1.479,3.129l3.976,0.169l5.991,-0.669l5.422,1.959l-3.66,1.445l-3.953,-0.372l-4.328,1.409l-1.865,0.874l3.455,6.354l2.489,-0.883l3.828,2.145l1.519,3.651l4.988,-0.725l7.105,-1.157l5.264,-2.646l3.26,-0.479l4.823,2.115l5.074,1.219l0.945,-2.859l-1.789,-3.049l4.604,-0.645L192.118,185.406zM199.863,184.425l-1.96,3.539l-2.468,2.486l3.829,3.541l2.284,-0.854l3.779,2.358l1.743,-2.732l-1.709,-3.03l-0.841,-1.526l-1.682,-1.458L199.863,184.425zM182.25,154.982l-2.131,-2.175l-3.757,0.397l-0.953,1.384l4.374,6.752L182.25,154.982zM210.937,168.154l3.008,-6.927l3.343,-1.848l4.189,-8.743l-5.356,-2.47l-5.842,-0.357l-2.782,2.77l-1.465,4.231l-0.043,4.817l1.75,8.188L210.937,168.154zM228.092,145.149l5.756,-0.185l8.043,-1.614l3.589,1.275l4.181,-2.26l1.749,-2.84l-0.626,-4.519l-3.003,-4.229l-4.556,-0.801l-5.709,0.969l-4.457,2.441l-4.091,-0.939l-3.782,-0.495l-1.781,-2.702l-3.217,-2.614l0.639,-4.433l-2.42,-3.982l-5.52,0.027l-3.113,-3.988l-5.779,-0.799l-1.055,5.096l3.25,3.745l5.8,1.454l2.815,5.095l0.341,5.602l0.97,5.99l7.452,3.417L228.092,145.149zM139.073,126.88l5.212,-5.053l2.62,-0.587l2.16,-4.228l0.385,-9.769l-3.846,1.914l-4.3,-0.18l-5.758,8.189l-4.759,8.977l3.799,2.51L139.073,126.88zM211.251,143.053l1.525,-4.14l-1.023,-3.458l-2.448,-3.918l-4.031,3.018l-1.493,4.924l3.399,2.787L211.251,143.053zM202.943,154.49l-0.729,-2.881l-5.002,1.264l-3.344,-2.107l-3.318,4.804l3.089,6.282l-5.725,-1.174l-0.056,3.011l6.968,7.046l1.94,3.38l2.701,0.731l4.598,-3.413l0.504,-8.211l-4.244,-4.074L202.943,154.49zM128.949,308.228l-1.157,-2.344l-2.799,-1.769l-1.386,-2.053l-0.954,-1.505l-2.635,-0.464l-1.721,-0.667l-2.943,-0.962l-0.242,1.021l1.08,2.38l2.886,0.781l0.505,1.231l2.509,1.502l0.841,1.513l4.604,1.92L128.949,308.228zM250.655,230.599l-2.002,-2.109l-2.063,0.498l-0.249,-3.062l-3.212,-2.035l-3.07,-2.267l-1.63,-1.753l-1.435,1.034l-0.521,-2.963l-2.026,-0.555l-0.956,6.134l-0.358,5.107l-2.438,3.136l3.8,-0.604l0.963,3.65l3.99,-3.225l2.78,-3.379l1.575,2.863l4.363,1.511L250.655,230.599zM130.121,178.055l7.38,-4.179v-3.874l3.477,-6.407l6.875,-6.689l3.525,-2.467l-3.01,-4.199l-2.723,-2.953l-7.162,-0.572l-4.004,-2.156l-9.477,1.625l2.742,6.225l-2.432,6.431l-1.942,6.866l-1.203,3.858l6.474,4.694L130.121,178.055zM264.358,205.358l0.316,-1.009l-0.031,-3.175l-2.189,-2.084l-2.57,1.047l-1.191,4.167l0.7,3.559l3.143,-0.361L264.358,205.358zM288.177,212.904l4.408,6.601l3.45,2.855l4.921,-7.87l0.873,-4.933l-4.41,-0.474l-4.03,-6.696l-4.451,-1.64l-6.604,-4.968l5.148,-3.634l-2.652,-7.542l-2.442,-3.354l-6.769,-3.352l-2.922,-5.549l-5.207,1.991l-0.363,-3.863l-3.862,-4.322l-6.221,-4.714l-2.652,3.714l-5.547,2.662l0.417,-6.064l-4.81,-10.052l-7.106,4.063l-2.591,7.701l-2.209,-5.923l2.063,-6.371l-7.24,2.651l-2.883,3.991l-2.155,8.421l0.889,9.051l3.983,0.038l-2.932,3.924l2.332,2.961l4.547,1.255l5.931,2.417l10.204,1.818l5.083,-1.044l1.501,-2.42l2.211,2.788l2.471,0.462l2.968,4.965l-1.796,1.98l5.68,2.626l4.295,3.678l1.081,2.55l0.771,3.239l-3.627,6.925l-0.979,3.443l0.937,2.423l-5.772,0.859l-5.269,0.119l-1.847,4.869l2.372,2.226l8.107,-1.031l-0.045,-1.889l4.083,3.148l4.183,3.276l-0.979,1.773l3.398,3.021l6.017,3.535l7.604,2.391l-0.456,-2.089l-2.92,-3.672l-3.963,-5.373l7.033,4.997l3.536,1.66l0.966,-4.438l-1.825,-6.298l-1.155,-1.729l-3.806,-3.035l-2.949,-3.911l0.354,-3.942L288.177,212.904zM222.346,51.338l2.336,7.293l4.957,5.88l9.811,-1.088l6.313,1.968l-4.375,6.053l-2.214,-1.776l-7.664,-0.712l1.19,8.314l3.96,6.036l-0.795,5.201l-4.972,3.462l-2.271,5.471l4.548,2.646l3.823,8.549l-7.497,-5.703l-1.71,0.941l1.381,9.377l-5.184,2.833l0.352,5.851l5.301,0.626l4.173,1.438l8.236,-1.845l7.327,3.269l7.492,-7.191l-0.061,-3.019l-4.791,0.482l-0.392,-2.841l3.917,-3.829l1.33,-5.151l4.332,-3.829l2.664,-4.762l-2.319,-7.103l1.938,-2.649l-3.865,-1.887l8.489,-1.628l1.787,-3.147l5.784,-2.604l4.795,-13.473l4.569,-4.943l6.616,-11.124l-6.104,0.098l2.535,-4.303l6.784,-3.993l6.841,-8.903l0.123,-5.731l-5.131,-6.042l-6.021,-2.93l-7.494,-1.819l-6.072,-1.489l-6.073,-1.503l-8.095,3.977l-1.49,-2.527l-8.57,0.976l-5.028,2.571l-3.701,3.65L242.028,30.5L239,24.517l-3.477,-1.142l-4.122,7.97l-5.501,3.348l-3.274,0.664l-4.169,3.837l0.614,6.646L222.346,51.338zM296.747,316.344l-0.982,-1.984l-1.059,1.262l0.701,1.361l3.556,1.713l1.039,-0.262l1.379,-1.656l-2.6,0.111L296.747,316.344zM239.747,238.477l0.614,1.63l1.979,0.138l3.282,-3.337l0.06,-1.188l-3.851,-0.059L239.747,238.477zM301.875,304.917l-2.867,-1.799l-3.687,-1.087l-0.97,0.365l2.607,2.039l3.634,1.343l1.365,-0.076L301.875,304.917zM326.765,309.712l-0.357,-2.235l-1.962,0.723l0.868,-3.113l-2.796,-1.321l-1.293,1.047l-2.488,-1.179l0.984,-1.509l-1.883,-0.933l-1.83,1.469l1.855,-3.825l1.497,-2.8l0.542,-1.217l-1.301,-0.197l-2.433,1.547l-1.738,2.529l-2.897,6.917l-2.354,2.558l1.22,1.144l-1.747,1.473l0.43,1.231l5.442,0.126l3.013,-0.248l2.69,1.005l-1.98,1.932l1.673,0.142l3.253,-3.576l0.781,0.528l-0.608,3.367l1.843,0.77l1.269,-0.151l1.18,-3.614L326.765,309.712zM305.569,314.475l-2.811,4.56l-4.633,0.581l-3.642,-2.009l-0.915,-3.07l-0.889,-4.462l2.648,-2.829l-2.482,-2.089l-4.195,0.426l-5.881,3.53l-4.501,5.452l-2.381,0.672l3.227,-3.804l4.044,-5.574l3.575,-1.899l2.348,-3.112l2.904,-0.303l4.208,0.031l5.997,0.919l4.74,-0.708l3.528,-3.624l4.621,-1.587l2.012,-1.58l2.035,-1.706l-0.205,-5.188l-1.126,-1.772l-2.184,-0.628l-1.111,-4.047l-1.8,-1.548l-4.471,-1.264l-2.521,-2.822l-3.729,-2.826l1.127,-3.197l-3.101,-6.26l-3.651,-6.893l-2.184,-4.983l-1.855,2.611l-2.682,6.053l-4.06,2.973l-2.032,-3.155l-2.561,-0.847l-0.932,-6.99l0.084,-4.797l-5,-0.438l-0.851,-2.266l-3.453,-3.436l-2.611,-2.039l-2.322,1.583l-2.883,-0.585l-4.807,-1.646l-1.952,1.397l0.937,9.177l1.222,5.116l-3.309,5.751l3.406,4.022l1.904,4.44l0.229,3.422l-1.554,3.504l-3.177,3.461l-4.489,2.281l1.978,2.529l1.464,7.402l-1.517,4.676l-2.159,1.458l-4.172,-4.283l-2.031,-5.168l-0.872,-4.759l0.458,-4.194l-3.05,-0.474l-4.63,-0.283l-2.971,-2.082l-3.513,-1.373l-2.006,-2.379l-2.803,-1.935l-5.21,-2.229l-3.923,1.02l-1.311,-3.947l-1.263,-4.99l-4.12,-0.902l0.155,-6.411l1.087,-4.483l3.041,-6.6l3.431,-4.902l3.262,-0.769l0.186,-4.048l2.213,-2.682l4.014,-0.424l3.252,-4.392l0.818,-2.897l2.703,-5.725l0.836,-3.5l2.899,2.107l3.899,-1.076l5.49,-4.964l0.357,-3.539l-1.977,-3.98l2.086,-4.057l-0.169,-3.865l-3.763,-3.953l-4.145,-1.19l-3.985,-0.624l-0.153,8.714l-2.045,6.555l-2.928,5.304l-2.712,-4.946l0.835,-5.606l-3.352,-5.018l-3.747,6.09l0.012,-7.991l-5.214,-1.626l2.488,-4.014l-3.809,-9.586L212,170.539l-3.698,-1.442l-3.315,6.428l-0.225,9.343l3.272,3.292l3.004,4.906l-1.268,7.708l-2.255,-0.202l-1.785,5.884l0.017,-7.004l-4.345,-2.583l-2.493,1.335l0.324,4.672l-4.09,-0.178l-4.353,1.173l-4.954,-3.353l-3.131,0.598l-2.818,-4.114l-2.263,-1.84l-2.243,0.773l-3.413,0.355l-1.811,2.614l2.862,3.187l-3.05,3.725l-2.989,-4.423l-2.388,1.302l-7.568,0.873l-5.068,-1.589l3.945,-3.736l-3.782,-3.902l-2.747,0.5l-3.859,-1.323l-6.562,-2.891l-4.288,-3.373l-3.396,-0.469l-1.059,2.357l-3.445,1.311l-0.379,-6.15l-3.733,5.505l-4.741,-7.321l-1.938,-0.892l-0.626,3.905l-2.092,1.904l-1.926,-3.393l-4.589,2.048l-4.2,3.551l-4.165,-0.98l-3.396,2.495l-2.461,3.276l-2.924,-0.717l-4.414,-3.8l-5.23,-1.936l-0.019,27.648l-0.015,35.43l2.761,0.167l2.731,1.556l1.958,2.436l2.491,3.596l2.728,-3.054l2.815,-1.793l1.488,2.855l1.889,2.229l2.567,2.424l1.753,3.794l2.867,5.881l4.767,3.204l0.078,3.124l-1.559,2.355l0.059,2.484l3.392,3.449l0.492,3.761l3.587,1.958l-0.399,2.79l1.562,3.958l5.078,1.825l2.003,1.887l5.428,4.227l0.376,0.011h7.963h8.324h2.756h8.546h8.271h8.412l8.417,0l9.528,0l9.593,-0.003l5.803,0.003l0.008,-1.644l0.949,-0.021l0.498,2.345l0.872,0.718l1.958,0.26l2.863,0.672l2.72,1.303l2.271,-0.545l3.449,1.089l1.138,-1.659l1.591,-0.663l0.623,-1.032l0.632,-0.554l2.607,0.856l1.932,0.102l0.67,0.566l0.938,2.382l3.147,0.627l-0.495,1.182l1.109,1.212l-0.478,1.56l1.177,0.513l-0.587,1.372l0.752,0.125l0.527,-0.597l0.55,0.898l2.103,0.501l2.132,0.042l2.273,0.412l2.508,0.779l0.915,1.256l1.816,3.037l-0.903,1.299l-2.279,-0.54l-1.415,-2.441l0.355,2.486l-1.337,2.17l0.147,1.838l-0.231,1.074l-1.815,1.267l-1.318,2.091l-0.617,1.321l1.539,0.237l2.081,-1.201l1.225,-1.059l0.833,-0.173l1.542,0.382l0.746,-0.591l1.368,-0.481l2.443,-0.469v0.002l0,-0.002l-0.249,-1.15l-0.134,0.044l-0.856,0.198l-1.118,-0.363l0.839,-1.317l0.855,-0.457l1.979,-0.565l2.37,-0.528l1.244,0.734l0.782,-0.851l0.889,-0.54l0.596,0.286l0.032,0.061l2.87,-2.73l1.265,-0.726l4.26,-0.027l5.167,-0.003l0.281,-0.978l0.897,-0.2l1.191,-0.616l0.995,-1.82l0.855,-3.148l2.139,-3.097l0.932,1.083l1.88,-0.7l1.245,1.187l-0.002,5.525l1.833,2.251l3.116,-0.483l4.488,-0.13l-4.868,3.261l0.107,3.291l2.129,0.283l3.133,-2.793l2.781,-1.584l6.21,-2.351l3.469,-2.616l-1.811,-1.46L305.569,314.475zM251.905,243.372l1.098,-3.124l-0.713,-1.233l-1.148,-0.132l-1.082,1.804l-0.131,0.413l0.736,1.771L251.905,243.372zM109.249,279.8L109.249,279.8l1.559,-2.354L109.249,279.8z"
				},
				{
					"id":"CD",
					"title":"Democratic Republic of Congo",
					"d":"M561.707,453.605L561.537,456.867L562.661,457.244L561.759,458.233L560.682,458.974L559.61,460.426L559.021,461.721L558.862,463.957L558.213,465.021L558.189,467.121L557.383,467.898L557.279,469.556L556.894,469.771L556.635,471.296L557.34,472.564L557.518,475.931L558.022,478.503L557.742,479.958L558.303,481.584L559.929,483.154L561.443,486.696L560.339,486.41L556.573,486.885L555.821,487.222L555.022,489.021L555.65,490.267L555.152,493.618L554.805,496.469L555.562,496.976L557.522,498.084L558.292,497.566L558.526,500.646L556.38,500.622L555.229,499.049L554.196,497.833L552.047,497.435L551.418,495.943L549.704,496.841L547.458,496.444L546.521,495.153L544.741,494.891L543.427,494.96L543.267,494.077L542.299,494.006L541.022,493.839L539.286,494.264L538.067,494.194L537.373,494.454L537.523,491.083L536.588,490.034L536.382,488.299L536.795,486.601L536.227,485.515L536.175,483.747L532.773,483.771L533.018,482.76L531.587,482.771L531.436,483.257L529.697,483.366L528.993,485.003L528.573,485.707L527.024,485.31L526.099,485.705L524.245,485.933L523.171,484.462L522.526,483.554L521.722,481.872L521.03,479.784L512.756,479.747L511.773,480.083L510.96,480.031L509.803,480.407L509.411,479.539L510.124,479.243L510.211,478.023L510.67,477.304L511.69,476.717L512.427,477.001L513.386,475.932L514.913,475.959L515.093,476.75L516.141,477.245L517.79,475.494L519.424,474.13L520.132,473.237L520.038,470.942L521.256,468.234L522.541,466.799L524.387,465.457L524.709,464.568L524.779,463.547L525.236,462.581L525.089,461.002L525.438,458.533L525.987,456.794L526.826,455.304L526.993,453.619L527.245,451.672L528.336,450.254L529.838,449.354L532.145,450.304L533.931,451.334L535.982,451.609L538.074,452.154L538.912,450.467L539.297,450.252L540.575,450.533L543.696,449.138L544.803,449.729L545.71,449.645L546.131,448.965L547.173,448.726L549.282,449.02L551.081,449.084L552.006,448.788L553.705,451.095L554.964,451.434L555.714,450.965L557.011,451.148L558.572,450.558L559.238,451.75z"
				},
				{
					"id":"CF",
					"title":"Central African Republic",
					"d":"M518.094,442.656L520.413,442.444L520.929,441.722L521.394,441.776L522.094,442.413L525.624,441.337L526.814,440.239L528.277,439.255L527.999,438.263L528.79,438.003L531.498,438.179L534.136,436.871L536.163,433.785L537.586,432.637L539.361,432.152L539.679,433.367L541.296,435.138L541.304,436.291L540.849,437.466L541.028,438.343L542.001,439.155L544.136,440.386L545.671,441.522L545.697,442.436L547.583,443.898L548.751,445.112L549.459,446.793L551.555,447.901L552.006,448.788L551.081,449.084L549.282,449.02L547.173,448.726L546.131,448.965L545.71,449.645L544.803,449.729L543.696,449.138L540.575,450.533L539.297,450.252L538.912,450.467L538.074,452.154L535.982,451.609L533.931,451.334L532.145,450.304L529.838,449.354L528.336,450.254L527.245,451.672L526.993,453.619L525.189,453.463L523.292,452.994L521.621,454.473L520.15,457.068L519.855,456.26L519.729,454.988L518.447,454.091L517.412,452.65L517.173,451.648L515.848,450.189L516.074,449.356L515.795,448.178L516.011,446.008L516.684,445.499z"
				},
				{
					"id":"CG",
					"title":"Republic of Congo",
					"d":"M511.69,476.717L510.64,475.758L509.792,476.228L508.661,477.435L506.358,474.476L508.493,472.935L507.436,471.091L508.397,470.39L510.289,470.048L510.512,468.813L512.01,470.151L514.485,470.269L515.346,468.952L515.7,467.099L515.394,464.924L514.067,463.277L515.281,460.051L514.582,459.498L512.496,459.725L511.712,458.285L511.916,457.069L515.454,457.179L517.721,457.914L519.949,458.573L520.15,457.068L521.621,454.473L523.292,452.994L525.189,453.463L526.993,453.619L526.826,455.304L525.987,456.794L525.438,458.533L525.089,461.002L525.236,462.581L524.779,463.547L524.709,464.568L524.387,465.457L522.541,466.799L521.256,468.234L520.038,470.942L520.132,473.237L519.424,474.13L517.79,475.494L516.141,477.245L515.093,476.75L514.913,475.959L513.386,475.932L512.427,477.001z"
				},
				{
					"id":"CH",
					"title":"Switzerland",
					"d":"M502.154,312.344L502.262,313.078L501.833,314.085L503.102,314.832L504.533,314.943L504.311,316.613L503.075,317.297L501,316.789L500.393,318.419L499.058,318.547L498.572,317.908L497,319.272L495.648,319.463L494.441,318.603L493.479,316.832L492.14,317.466L492.181,315.628L494.231,313.325L494.141,312.275L495.419,312.656L496.188,311.949L498.573,311.978L499.149,311.075z"
				},
				{
					"id":"CI",
					"title":"Côte d'Ivoire",
					"d":"M467.245,449.457L465.969,449.486L464.013,448.939L462.215,448.971L458.894,449.459L456.947,450.266L454.171,451.291L453.629,451.218L453.845,448.916L454.113,448.565L454.027,447.463L452.84,446.29L451.949,446.103L451.132,445.333L451.741,444.088L451.461,442.73L451.59,441.914L452.035,441.91L452.2,440.684L451.983,440.14L452.251,439.749L453.293,439.41L452.6,437.153L451.954,435.985L452.179,435.025L452.738,434.806L453.104,434.548L453.88,434.974L456.045,434.997L456.561,434.17L457.045,434.226L457.854,433.906L458.289,435.117L458.943,434.76L460.1,434.341L461.361,434.958L461.851,435.894L463.112,436.49L464.092,435.779L465.406,435.672L467.325,436.401L468.069,440.413L466.887,442.774L466.156,445.942L467.372,448.354z"
				},
				{
					"id":"CL",
					"title":"Chile",
					"d":"M282.813,636.726l0.002,10.568l3.002,0.003l1.689,0.13l-0.929,1.978l-2.404,1.532l-1.378,-0.157l-1.66,-0.4l-2.036,-1.479l-2.937,-0.707l-3.528,-2.71l-2.864,-2.573l-3.862,-5.254l2.312,0.974l3.937,3.133l3.719,1.704l1.447,-2.174l0.909,-3.202l2.584,-1.907L282.813,636.726zM283.975,524.724l1.098,4.15l2.023,-0.415l0.34,0.758l-0.962,3.159l-3.054,1.509l0.089,5.143l-0.585,1.001l0.839,1.225l-1.979,1.95l-1.836,2.963l-1.002,2.896l0.265,3.115l-1.728,3.343l1.292,5.694l0.728,0.609l-0.007,3.086l-1.6,3.313l0.065,2.868l-2.123,2.263l0.009,3.217l0.853,3.462l-1.679,1.3l-0.75,3.223l-0.659,3.751l0.474,4.543l-1.127,0.767l0.655,4.395l1.266,1.462l-0.924,1.63l1.301,0.782l0.3,1.478l-1.224,0.748l0.301,2.331l-1.024,5.35l-1.486,3.52l0.326,2.112l-0.889,2.68l-2.151,1.878l0.245,4.599l0.988,1.596l1.867,-0.284l-0.054,3.332l1.162,2.632l6.775,0.608l2.599,0.715l-2.495,-0.034l-1.35,1.128l-2.53,1.669l-0.452,4.378l-1.187,0.11l-3.164,-1.535l-3.209,-3.251l0,0l-3.488,-2.632l-0.878,-2.874l0.794,-2.623l-1.411,-2.937l-0.359,-7.344l1.192,-4.033l2.961,-3.187l-4.256,-1.19l2.67,-3.569l0.955,-6.557l3.116,1.374l1.465,-7.97l-1.881,-1.003l-0.876,4.749l-1.769,-0.541l0.881,-5.42l0.956,-6.843l1.288,-2.478l-0.807,-3.495l-0.231,-3.977l1.182,-0.114l1.72,-5.596l1.938,-5.432l1.187,-4.968l-0.646,-4.912l0.837,-2.671l-0.336,-3.955l1.64,-3.867l0.505,-6.038l0.9,-6.374l0.877,-6.747l-0.205,-4.874l-0.584,-4.153l1.442,-0.749l0.751,-1.501l1.374,1.992l0.375,2.122l1.471,1.25l-0.883,2.868L283.975,524.724z"
				},
				{
					"id":"CM",
					"title":"Cameroon",
					"d":"M511.916,457.069L511.566,456.917L509.907,457.276L508.203,456.903L506.871,457.086L502.308,457.022L502.717,454.821L501.622,452.977L500.342,452.503L499.772,451.252L499.054,450.852L499.086,450.079L499.808,448.1L501.142,445.398L501.953,445.373L503.623,443.731L504.686,443.685L506.26,444.838L508.187,443.893L508.449,442.726L509.079,441.594L509.513,440.17L511.012,439.01L511.578,437.035L512.173,436.406L512.568,434.936L513.31,433.128L515.671,430.931L515.82,429.985L516.125,429.471L515.015,428.335L515.105,427.426L515.897,427.262L517.012,429.09L517.199,430.979L517.097,432.865L518.623,435.44L517.057,435.412L516.266,435.614L514.988,435.33L514.378,436.664L516.034,438.311L517.255,438.789L517.649,439.955L518.534,441.895L518.094,442.656L516.684,445.499L516.011,446.008L515.795,448.178L516.074,449.356L515.848,450.189L517.173,451.648L517.412,452.65L518.447,454.091L519.729,454.988L519.855,456.26L520.15,457.068L519.949,458.573L517.721,457.914L515.454,457.179z"
				},
				{
					"id":"CN",
					"title":"China",
					"d":"M784.628,410.405l-2.423,1.412l-2.299,-0.91l-0.081,-2.535l1.382,-1.341l3.063,-0.831l1.612,0.071l0.627,1.131l-1.232,1.301L784.628,410.405zM833.186,302.885l4.88,1.379l3.321,3.035l1.135,3.945l4.261,0.005l2.431,-1.647l4.634,-1.239l-1.474,3.761l-1.089,1.512l-0.961,4.462l-1.886,3.888l-3.402,-0.703l-2.407,1.4l0.739,3.357l-0.404,4.553l-1.432,0.103l0.017,1.929l-1.811,-2.244l-1.114,2.13l-4.33,1.625l0.438,1.975l-2.424,-0.136l-1.331,-1.172l-1.927,2.644l-3.09,1.984l-2.283,2.347l-3.92,1.057l-2.064,1.689l-3.02,0.981l1.49,-1.668l-0.587,-1.411l2.221,-2.454l-1.481,-1.93l-2.444,1.302l-3.165,2.544l-1.728,2.34l-2.75,0.173l-1.431,1.676l1.479,2.409l2.294,0.582l0.095,1.583l2.218,1.025l3.143,-2.513l2.489,1.374l1.813,0.093l0.455,1.836l-3.97,0.974l-1.311,1.872l-2.727,1.728l-1.439,2.393l3.019,1.864l1.102,3.307l1.706,3.046l1.904,2.529l-0.046,2.426l-1.76,0.887l0.671,1.725l1.65,1l-0.431,2.609l-0.712,2.518l-1.567,0.284l-2.047,3.407l-2.271,4.086l-2.604,3.676l-3.855,2.818l-3.9,2.553l-3.159,0.347l-1.714,1.34l-0.97,-0.979l-1.586,1.498l-3.919,1.504l-2.967,0.459l-0.957,3.151l-1.554,0.174l-0.735,-2.162l0.664,-1.157l-3.762,-0.959l-1.325,0.488l-2.823,-0.778l-1.335,-1.222l0.443,-1.738l-2.563,-0.553l-1.352,-1.138l-2.39,1.615l-2.726,0.349l-2.236,-0.016l-1.505,0.737l-1.453,0.442l0.424,3.433l-1.495,-0.082l-0.252,-0.703l-0.085,-1.24l-2.057,0.874l-1.214,-0.552l-2.082,-1.128l0.816,-2.507l-1.775,-0.587l-0.669,-2.801l-2.96,0.506l0.337,-3.635l2.655,-2.58l0.113,-2.566l-0.083,-2.398l-1.224,-0.75l-0.937,-1.86l-1.641,0.235l-3.023,-0.474l0.947,-1.334l-1.314,-1.986l-1.999,1.346l-2.352,-0.785l-3.232,2.03l-2.552,2.355l-2.262,0.395l-1.228,-0.849l-1.48,-0.077l-2.004,-0.732l-1.515,0.803l-1.854,2.341l-0.235,-2.481l-1.71,0.665l-3.27,-0.309l-3.172,-0.725l-2.275,-1.393l-2.179,-0.627l-0.941,-1.533l-1.575,-0.459l-2.831,-2.094l-2.248,-0.993l-1.162,0.773l-3.896,-2.265l-2.755,-2.065l-0.786,-3.629l2.012,0.445l0.092,-1.694l-1.115,-1.708l0.284,-2.744l-3.014,-3.989l-4.611,-1.39l-0.83,-2.661l-2.071,-1.627l-0.499,-1.007l-0.421,-2.012l0.098,-1.381l-1.703,-0.812l-0.921,0.359l-0.711,-3.324l0.798,-0.829l-0.387,-0.85l2.677,-1.726l1.938,-0.718l2.968,0.492l1.061,-2.354l3.597,-0.44l0.999,-1.478l4.419,-2.031l0.394,-0.853l-0.224,-2.165l1.924,-0.995l-2.524,-6.754l5.555,-1.582l1.436,-0.886l2.022,-7.262l5.563,1.353l1.56,-1.86l0.134,-4.186l2.329,-0.395l2.134,-2.831l1.098,-0.352l0.736,2.97l2.356,2.23l3.999,1.565l1.935,3.319l-1.079,4.728l1.009,1.729l3.332,0.678l3.776,0.552l3.388,2.448l1.732,0.433l1.277,3.568l1.646,2.269l3.091,-0.088l5.787,0.852l3.729,-0.528l2.768,0.565l4.148,2.291l3.393,-0.003l1.241,1.164l3.265,-2.014l4.529,-1.312l4.202,-0.144l3.276,-1.337l2.012,-2.051l1.963,-1.297l-0.454,-1.28l-0.896,-1.499l1.473,-2.538l1.577,0.358l2.882,0.8l2.794,-2.101l4.275,-1.546l2.055,-2.662l1.974,-1.156l4.072,-0.541l2.213,0.459l0.307,-1.453l-2.541,-2.887l-2.25,-1.333l-2.155,1.538l-2.766,-0.647l-1.587,0.528l-0.723,-1.706l1.981,-4.228l1.365,-3.247l3.365,1.632l3.952,-2.739l-0.026,-1.929l2.531,-4.725l1.56,-1.45l-0.035,-2.522l-1.538,-1.095l2.315,-2.313l3.484,-0.845l3.718,-0.127l4.196,1.394l2.462,1.711l1.733,4.611l1.051,1.937l0.977,2.731L833.186,302.885z"
				},
				{
					"id":"CO",
					"title":"Colombia",
					"d":"M263.917,463.809L262.717,463.149L261.341,462.227L260.544,462.669L258.165,462.283L257.481,461.085L256.959,461.129L254.154,459.539L253.774,458.674L254.82,458.465L254.696,457.069L255.354,456.059L256.745,455.872L257.925,454.12L258.998,452.655L257.965,451.991L258.494,450.37L257.861,447.812L258.462,447.077L258.02,444.707L256.885,443.212L257.244,441.847L258.147,442.048L258.676,441.213L258.025,439.555L258.366,439.143L259.814,439.232L261.918,437.264L263.073,436.963L263.1,436.029L263.617,433.637L265.225,432.321L266.992,432.267L267.215,431.675L269.409,431.912L271.615,430.477L272.708,429.84L274.065,428.467L275.059,428.642L275.794,429.392L275.25,430.351L273.449,430.828L272.737,432.248L271.652,433.062L270.837,434.115L270.494,436.134L269.717,437.786L271.164,437.975L271.523,439.271L272.142,439.89L272.364,441.023L272.031,442.064L272.129,442.65L272.819,442.885L273.487,443.864L277.093,443.594L278.722,443.951L280.695,446.364L281.828,446.064L283.848,446.214L285.446,445.895L286.438,446.376L285.933,447.884L285.307,448.823L285.087,450.828L285.651,452.684L286.448,453.513L286.545,454.138L285.124,455.526L286.141,456.141L286.887,457.115L287.742,459.894L287.212,460.237L286.666,458.594L285.887,457.71L284.959,458.671L279.497,458.608L279.531,460.352L281.174,460.64L281.079,461.707L280.519,461.418L278.939,461.877L278.925,463.901L280.169,464.917L280.608,466.512L280.542,467.72L279.282,475.367L277.878,473.883L277.041,473.817L278.85,470.978L276.703,469.672L275.02,469.912L274.007,469.43L272.462,470.167L270.375,469.817L268.723,466.896L267.425,466.178L266.53,464.864L264.665,463.544z"
				},
				{
					"id":"CR",
					"title":"Costa Rica",
					"d":"M242.629,440.397L241.107,439.773L240.539,439.182L240.861,438.692L240.759,438.069L239.982,437.394L238.879,436.839L237.914,436.477L237.729,435.65L236.994,435.145L237.174,435.967L236.614,436.642L235.974,435.858L235.073,435.579L234.689,435.008L234.706,434.146L235.077,433.254L234.285,432.854L234.928,432.306L235.35,431.94L237.197,432.692L237.842,432.322L238.731,432.559L239.196,433.143L240.023,433.332L240.695,432.73L241.405,434.271L242.489,435.41L243.806,436.616L242.721,436.869L242.737,438.005L243.321,438.424L242.901,438.758L243.011,439.268L242.777,439.839z"
				},
				{
					"id":"CU",
					"title":"Cuba",
					"d":"M244.585,396.94L247.007,397.156L249.21,397.19L251.843,398.222L252.959,399.327L255.578,398.986L256.571,399.695L258.946,401.557L260.691,402.907L261.614,402.866L263.287,403.476L263.083,404.315L265.149,404.438L267.269,405.656L266.936,406.352L265.072,406.729L263.185,406.875L261.253,406.641L257.238,406.93L259.118,405.273L257.975,404.5L256.167,404.301L255.199,403.44L254.534,401.736L252.95,401.853L250.335,401.048L249.494,400.418L245.839,399.951L244.86,399.364L245.912,398.61L243.162,398.455L241.147,400.022L239.985,400.064L239.583,400.798L238.195,401.126L236.996,400.842L238.476,399.913L239.083,398.825L240.351,398.153L241.783,397.563L243.906,397.273z"
				},
				{
					"id":"CY",
					"title":"Cyprus",
					"d":"M570.306,358.286L572.2,356.827L569.651,357.851L567.631,357.804L567.226,358.629L567.028,358.647L565.696,358.773L566.351,360.14L567.724,360.58L570.598,359.2L570.51,358.926z"
				},
				{
					"id":"CZ",
					"title":"Czechia",
					"d":"M522.807,307.861L521.515,307.061L520.198,307.281L518.021,305.983L517.034,306.302L515.457,308.037L513.374,306.673L511.791,304.837L510.36,303.804L510.063,301.979L509.572,300.683L511.61,299.729L512.651,298.631L514.665,297.773L515.368,296.927L516.107,297.438L517.358,296.974L518.688,298.403L520.784,298.788L520.609,299.999L522.132,300.904L522.55,299.773L524.474,300.264L524.739,301.631L526.824,301.895L528.114,304.025L527.278,304.03L526.844,304.804L526.2,304.99L526.017,305.963L525.48,306.165L525.404,306.561L524.447,307L523.205,306.929z"
				},
				{
					"id":"DE",
					"title":"Germany",
					"d":"M503.072,278.923L503.122,280.798L505.956,281.92L505.926,283.617L508.776,282.721L510.353,281.407L513.519,283.299L514.842,284.812L515.498,287.205L514.716,288.449L515.734,290.098L516.428,292.547L516.209,294.11L517.358,296.974L516.107,297.438L515.368,296.927L514.665,297.773L512.651,298.631L511.61,299.729L509.572,300.683L510.063,301.979L510.36,303.804L511.791,304.837L513.374,306.673L512.385,308.624L511.378,309.158L511.775,311.878L511.514,312.582L510.64,311.733L509.295,311.606L507.291,312.35L504.818,312.173L504.419,313.264L503,312.116L502.154,312.344L499.149,311.075L498.573,311.978L496.188,311.949L496.544,308.974L497.962,306.074L493.922,305.288L492.599,304.165L492.757,302.27L492.197,301.287L492.515,298.319L492.044,293.629L493.729,293.627L494.439,291.916L495.138,287.691L494.614,286.108L495.162,285.11L497.505,284.853L498.025,285.893L499.929,283.56L499.288,281.767L499.159,279.022L501.278,279.664z"
				},
				{
					"id":"DJ",
					"title":"Djibouti",
					"d":"M596.046,427.719L596.71,428.602L596.622,429.785L595.022,430.466L596.226,431.245L595.193,432.764L594.571,432.258L593.896,432.46L592.33,432.412L592.285,431.548L592.066,430.764L593.015,429.429L594,428.168L595.201,428.416z"
				},
				{
					"id":"DK",
					"title":"Denmark",
					"d":"M510.834,275.843l-1.683,3.971l-2.934,-2.761l-0.391,-2.054l4.113,-1.656L510.834,275.843zM505.849,271.592l-0.685,1.901l-0.835,-0.545l-2.019,3.587l0.762,2.389l-1.794,0.741l-2.119,-0.642l-1.138,-2.723l-0.085,-5.12l0.467,-1.375l0.804,-1.54l2.47,-0.32l0.984,-1.429l2.256,-1.473l-0.095,2.676l-0.83,1.676l0.336,1.429L505.849,271.592z"
				},
				{
					"id":"DO",
					"title":"Dominican Republic",
					"d":"M274.182,407.348L274.533,406.843L276.721,406.856L278.382,407.619L279.121,407.544L279.63,408.593L281.165,408.534L281.074,409.413L282.321,409.52L283.7,410.6L282.658,411.795L281.325,411.157L280.038,411.28L279.115,411.14L278.61,411.676L277.533,411.856L277.106,411.145L276.18,411.566L275.057,413.572L274.335,413.107L274.193,412.265L274.251,411.468L273.529,410.586L274.213,410.09L274.427,408.957z"
				},
				{
					"id":"DZ",
					"title":"Algeria",
					"d":"M508.898,396.081L499.29,401.833L491.172,407.683L487.218,409L484.108,409.289L484.076,407.409L482.777,406.928L481.032,406.079L480.365,404.686L470.907,398.139L461.449,391.485L450.903,383.96L450.957,383.352L450.956,383.141L450.932,379.389L455.46,377.03L458.26,376.541L460.555,375.676L461.627,374.059L464.905,372.775L465.026,370.358L466.648,370.072L467.917,368.856L471.586,368.301L472.1,367.016L471.361,366.311L470.393,362.782L470.226,360.729L469.169,358.551L471.864,356.678L474.896,356.08L476.666,354.655L479.366,353.598L484.118,352.978L488.756,352.694L490.17,353.212L492.81,351.836L495.806,351.809L496.947,352.623L498.864,352.41L498.294,354.197L498.739,357.485L498.079,360.297L496.351,362.184L496.598,364.711L498.891,366.695L498.915,367.497L500.644,368.829L501.839,374.686L502.747,377.526L502.899,379.011L502.405,381.601L502.608,383.041L502.251,384.76L502.496,386.725L501.383,388.025L503.041,390.281L503.146,391.601L504.144,393.312L505.454,392.751L507.667,394.172z"
				},
				{
					"id":"EC",
					"title":"Ecuador",
					"d":"M250.097,472.874L251.589,470.789L250.982,469.572L249.911,470.866L248.231,469.645L248.8,468.859L248.327,466.331L249.309,465.91L249.825,464.175L250.886,462.382L250.691,461.245L252.227,460.647L254.154,459.539L256.959,461.129L257.481,461.085L258.165,462.283L260.544,462.669L261.341,462.227L262.717,463.149L263.917,463.809L264.309,465.924L263.436,467.735L260.378,470.653L257.007,471.753L255.289,474.181L254.758,476.064L253.173,477.214L251.996,475.803L250.864,475.501L249.705,475.724L249.629,474.7L250.429,474.035z"
				},
				{
					"id":"EE",
					"title":"Estonia",
					"d":"M543.423,264.71L543.748,261.586L542.717,262.258L540.938,260.358L540.694,257.245L544.24,255.717L547.772,254.915L550.814,255.827L553.708,255.664L554.13,256.624L552.135,259.756L552.966,264.718L551.765,266.377L549.453,266.368L547.04,264.426L545.811,263.78z"
				},
				{
					"id":"EG",
					"title":"Egypt",
					"d":"M573.171,377.28L572.383,378.566L571.78,380.969L571.017,382.615L570.363,383.165L569.429,382.147L568.164,380.735L566.163,376.157L565.875,376.449L567.037,379.822L568.758,383.004L570.877,387.876L571.913,389.561L572.813,391.303L575.329,394.695L574.772,395.227L574.862,397.201L578.128,399.913L578.621,400.529L567.5,400.529L556.621,400.529L545.349,400.529L545.349,389.301L545.349,378.121L544.508,375.535L545.23,373.539L544.796,372.149L545.812,370.582L549.542,370.527L552.24,371.392L555.024,372.356L556.322,372.862L558.481,371.831L559.635,370.895L562.108,370.625L564.102,371.038L564.865,372.656L565.516,371.591L567.763,372.361L569.949,372.546L571.328,371.725z"
				},
				{
					"id":"EH",
					"title":"Western Sahara",
					"d":"M438.411,383.192L436.633,386.392L434.766,387.527L433.753,389.444L433.687,391.088L432.945,392.88L432.001,393.374L430.44,395.315L429.476,397.458L429.657,398.482L428.739,400.053L427.663,400.873L427.53,402.263L427.41,403.526L428.021,402.529L439.001,402.548L438.47,398.204L439.156,396.648L441.783,396.375L441.692,388.524L450.895,388.687L450.903,383.96L450.957,383.352L450.956,383.148L438.446,383.162z"
				},
				{
					"id":"ER",
					"title":"Eritrea",
					"d":"M594,428.168L593.042,427.244L591.889,425.566L590.646,424.646L589.921,423.654L587.48,422.501L585.558,422.467L584.882,421.865L583.238,422.542L581.536,421.234L580.66,423.383L577.396,422.782L577.098,421.629L578.305,417.378L578.582,415.446L579.465,414.552L581.53,414.072L582.949,412.402L584.577,415.783L585.35,418.449L586.886,419.859L590.713,422.583L592.271,424.222L593.791,425.876L594.668,426.859L596.046,427.719L595.201,428.416z"
				},
				{
					"id":"ES",
					"title":"Spain",
					"d":"M449.921,334.562L450.062,331.875L448.917,330.223L452.883,327.448L456.314,328.145L460.079,328.121L463.063,328.778L465.39,328.576L469.922,328.704L471.04,330.194L476.201,331.925L477.22,331.104L480.375,332.819L483.625,332.329L483.775,334.519L481.118,337.005L477.525,337.789L477.275,339.031L475.552,341.064L474.472,344.02L475.565,346.074L473.943,347.666L473.337,349.968L471.22,350.67L469.234,353.36L465.676,353.413L463.003,353.347L461.247,354.573L460.176,355.879L458.804,355.593L457.766,354.424L456.971,352.423L454.354,351.881L454.12,350.72L455.159,349.398L455.544,348.435L454.577,347.378L455.351,345.028L454.228,342.863L455.439,342.564L455.552,340.843L456.007,340.307L456.043,337.432L457.339,336.426L456.555,334.552L454.921,334.42L454.441,334.894L452.785,334.898L452.083,333.057L450.938,333.607z"
				},
				{
					"id":"ET",
					"title":"Ethiopia",
					"d":"M581.536,421.234L583.238,422.542L584.882,421.865L585.558,422.467L587.48,422.501L589.921,423.654L590.646,424.646L591.889,425.566L593.042,427.244L594,428.168L593.015,429.429L592.066,430.764L592.285,431.548L592.33,432.412L593.896,432.46L594.571,432.258L595.193,432.764L594.582,433.769L595.617,435.328L596.651,436.689L597.722,437.696L606.889,441.04L609.248,441.022L601.324,449.438L597.672,449.561L595.173,451.53L593.375,451.582L592.608,452.462L590.692,452.461L589.562,451.518L587,452.686L586.172,453.849L584.302,453.629L583.681,453.307L583.024,453.384L582.138,453.356L578.589,450.985L576.638,450.985L575.68,450.065L575.68,448.496L574.224,448.026L572.566,444.979L571.286,444.328L570.794,443.206L569.374,441.837L567.651,441.635L568.606,440.033L570.095,439.964L570.514,439.104L570.477,436.567L571.306,433.606L572.634,432.812L572.916,431.651L574.118,429.478L575.809,428.065L576.949,425.248L577.396,422.782L580.66,423.383z"
				},
				{
					"id":"FK",
					"title":"Falkland Islands",
					"d":"M303.657,633.134L307.022,630.436L309.405,631.556L311.087,629.767L313.331,631.78L312.489,633.36L308.704,634.725L307.442,633.134L305.059,635.182z"
				},
				{
					"id":"FI",
					"title":"Finland",
					"d":"M555.42,193.099L555.011,198.503L559.305,203.493L556.718,208.971L559.979,216.928L558.091,222.691L560.615,227.546L559.469,231.691L563.62,235.947L562.565,239.052L559.96,242.504L553.957,249.91L548.869,250.361L543.938,252.429L539.376,253.608L537.753,250.543L535.038,248.674L535.662,242.946L534.3,237.538L535.637,233.959L538.179,230.017L544.594,222.997L546.465,221.611L546.174,218.774L542.274,215.549L541.328,212.849L541.254,201.729L536.877,196.576L533.14,192.774L534.821,190.686L537.937,194.839L541.598,194.455L544.608,196.324L547.282,192.885L548.657,187.03L553.01,184.255L556.608,187.507z"
				},
				{
					"id":"FJ",
					"title":"Fiji",
					"d":"M980.525,508.605l-0.348,1.396l-0.231,0.155l-1.782,0.716l-1.792,0.613l-0.36,-1.085l1.401,-0.596l0.889,-0.16l1.645,-0.905L980.525,508.605zM974.69,512.924l-1.274,-0.361l-1.082,1.004l0.271,1.288l1.546,0.363l1.738,-0.403l0.463,-1.529l-0.965,-0.843L974.69,512.924z"
				},
				{
					"id":"FR",
					"title":"France",
					"d":"M502.058,333.54l-0.926,2.893l-1.273,-0.759l-0.649,-2.526l0.566,-1.407l1.806,-1.455L502.058,333.54zM485.313,300.19l1.957,2.057l1.439,-0.338l2.453,1.973l0.627,0.374l0.809,-0.091l1.323,1.123l4.04,0.787l-1.417,2.899l-0.356,2.975l-0.77,0.707l-1.278,-0.381l0.09,1.05l-2.051,2.303l-0.041,1.838l1.339,-0.634l0.963,1.771l-0.116,1.134l0.825,1.498l-0.972,1.208l0.723,3.039l1.52,0.494l-0.321,1.684l-2.54,2.173l-5.53,-1.039l-4.083,1.244l-0.321,2.292l-3.25,0.49l-3.155,-1.716l-1.02,0.821l-5.161,-1.73l-1.118,-1.491l1.45,-2.319l0.534,-7.877l-2.894,-4.264l-2.068,-2.086l-4.285,-1.599l-0.283,-3.066l3.636,-0.923l4.708,1.091l-0.889,-4.845l2.647,1.849l6.528,-3.374l0.842,-3.605l2.452,-0.898l0.406,1.562l1.303,0.073L485.313,300.19z"
				},
				{
					"id":"GA",
					"title":"Gabon",
					"d":"M506.358,474.476L503.477,471.659L501.624,469.358L499.921,466.48L500.011,465.555L500.624,464.665L501.305,462.637L501.87,460.572L502.815,460.411L506.895,460.439L506.871,457.086L508.203,456.903L509.907,457.276L511.566,456.917L511.916,457.069L511.712,458.285L512.496,459.725L514.582,459.498L515.281,460.051L514.067,463.277L515.394,464.924L515.7,467.099L515.346,468.952L514.485,470.269L512.01,470.151L510.512,468.813L510.289,470.048L508.397,470.39L507.436,471.091L508.493,472.935z"
				},
				{
					"id":"GB",
					"title":"United Kingdom",
					"d":"M459.378,281.001l-1.503,3.287l-2.119,-0.98l-1.734,0.065l0.578,-2.571l-0.578,-2.604l2.351,-0.202L459.378,281.001zM466.827,260.239l-2.997,5.729l2.856,-0.716l3.072,0.027l-0.731,4.218l-2.521,4.535l2.899,0.318l0.223,0.524l2.497,5.787l1.919,0.774l1.726,5.409l0.799,1.841l3.397,0.882l-0.341,2.933l-1.428,1.331l1.12,2.327l-2.522,2.328l-3.751,-0.041l-4.773,1.212l-1.308,-0.867l-1.854,2.058l-2.594,-0.497l-1.97,1.667l-1.491,-0.87l4.112,-4.636l2.51,-0.966l-0.022,-0.004l-4.379,-0.749l-0.793,-1.799l2.93,-1.413l-1.536,-2.479l0.533,-3.056l4.167,0.425l0.005,0l0.413,-2.743l-1.878,-2.952l-0.042,-0.068l-3.405,-0.852l-0.668,-1.318l1.019,-2.195l-0.922,-1.366l-1.51,2.338l-0.164,-4.797l-1.416,-2.587l1.018,-5.356l2.178,-4.311l2.239,0.425L466.827,260.239z"
				},
				{
					"id":"GE",
					"title":"Georgia",
					"d":"M591.765,335.853L592.183,334.253L591.482,331.676L589.862,330.272L588.308,329.833L587.281,328.657L587.623,328.202L589.993,328.86L594.121,329.481L597.938,331.313L598.43,332.019L600.13,331.422L602.745,332.216L603.604,333.766L605.366,334.637L604.638,335.153L606.019,337.17L605.637,337.604L604.125,337.384L602.036,336.316L601.349,336.923L597.453,337.502L594.752,335.675z"
				},
				{
					"id":"GF",
					"title":"French Guiana",
					"d":"M327.893,456.407l-1.075,1.059l-1.342,0.199l-0.382,-0.785l-0.627,-0.117l-0.868,0.756l-1.225,-0.575l0.711,-1.19l0.244,-1.27l0.484,-1.195l-1.088,-1.647l-0.222,-1.912l1.459,-2.405l0.952,0.308l2.065,0.662l2.968,2.36l0.464,1.144l-1.659,2.554L327.893,456.407z"
				},
				{
					"id":"GH",
					"title":"Ghana",
					"d":"M478.226,446.843L473.83,448.481L472.271,449.44L469.744,450.251L467.245,449.457L467.372,448.354L466.156,445.942L466.887,442.774L468.069,440.413L467.325,436.401L466.942,434.271L467.008,432.663L471.879,432.529L473.118,432.736L474.023,432.278L475.32,432.504L475.113,433.388L476.284,434.849L476.279,436.902L476.546,439.124L477.25,440.151L476.629,442.684L476.852,444.081L477.6,445.859z"
				},
				{
					"id":"GL",
					"title":"Greenland",
					"d":"M344.134,23.907L353.548,10.302L363.386,11.368L366.962,2.416L376.872,0L399.267,3.147L416.806,21.735L411.628,30.045L400.902,30.968L385.81,32.998L387.222,36.643L397.147,34.4L405.593,41.313L411.036,35.189L413.367,42.339L410.289,53.306L417.427,46.381L431.042,38.831L439.447,42.644L441.022,50.755L429.591,63.423L428.008,67.316L419.046,70.182L425.54,70.968L422.26,82.476L420.003,92.074L420.091,107.331L423.458,115.665L419.078,116.178L414.467,120.058L419.641,126.358L420.3,135.984L417.302,137L420.935,146.154L414.706,146.896L417.958,151.036L417.039,154.545L413.085,156.063L409.178,156.091L412.69,162.572L412.729,166.7L407.18,162.867L405.737,165.356L409.522,167.649L413.196,173.125L414.259,180.08L409.261,181.703L407.1,178.44L403.633,173.46L404.592,179.329L401.335,183.74L408.725,184.091L412.59,184.542L405.075,191.571L397.454,197.697L389.249,200.313L386.156,200.346L383.256,203.218L379.355,210.853L373.325,215.742L371.388,216.025L367.655,217.704L363.625,219.287L361.223,223.409L361.185,227.967L359.766,232.133L355.194,237.082L356.323,241.787L355.063,246.637L353.626,252.202L349.675,252.544L345.537,247.91L339.931,247.881L337.21,244.701L335.34,238.896L330.481,231.225L329.06,227.069L328.677,221.177L324.793,214.91L325.803,209.74L323.932,207.212L326.704,198.556L330.924,195.708L332.031,192.447L332.618,186.185L329.415,189.052L327.888,190.242L325.37,191.375L321.929,188.77L321.742,183.219L322.839,178.741L325.439,178.618L331.163,180.873L326.342,175.438L323.833,172.434L321.041,173.675L318.701,171.482L321.831,162.976L320.126,159.453L317.901,152.71L314.526,141.804L310.956,137.625L310.989,132.998L303.465,126.308L297.512,125.456L290.019,125.928L283.177,126.785L279.923,123.039L275.051,115.379L282.413,111.41L288.057,110.734L276.059,107.365L269.739,101.932L270.125,96.589L280.74,89.721L291.01,82.562L292.094,76.925L284.526,71.163L286.971,64.519L296.678,52.186L300.757,50.207L299.588,41.637L306.23,36.398L314.852,33.188L323.468,33.005L326.527,39.311L333.965,27.987L340.657,35.767L344.594,37.36L350.417,43.772L343.75,33.002z"
				},
				{
					"id":"GM",
					"title":"Gambia",
					"d":"M428.032,426.427L428.39,425.157L431.444,425.075L432.077,424.396L432.966,424.35L434.073,425.056L434.943,425.069L435.867,424.586L436.434,425.415L435.22,426.058L434.002,426.007L432.799,425.402L431.76,426.063L431.258,426.087L430.584,426.488z"
				},
				{
					"id":"GN",
					"title":"Guinea",
					"d":"M451.59,441.914L450.797,441.841L450.226,442.973L449.433,442.959L448.887,442.361L449.073,441.232L447.9,439.508L447.168,439.825L446.569,439.888L445.797,440.049L445.829,439.016L445.378,438.279L445.469,437.458L444.861,436.271L444.081,435.26L441.839,435.257L441.185,435.79L440.413,435.854L439.934,436.464L439.61,437.247L438.112,438.488L436.882,436.818L435.792,435.712L435.074,435.346L434.374,434.783L434.055,433.532L433.645,432.907L432.83,432.442L434.077,431.058L434.927,431.11L435.659,430.633L436.277,430.628L436.719,430.251L436.48,429.308L436.788,429.01L436.839,428.042L438.192,428.072L440.208,428.768L440.826,428.704L441.036,428.386L442.565,428.612L442.97,428.451L443.131,429.495L443.576,429.492L444.308,429.112L444.773,429.207L445.551,429.93L446.751,430.158L447.52,429.542L448.426,429.16L449.1,428.761L449.661,428.836L450.284,429.462L450.618,430.248L451.767,431.439L451.192,432.17L451.083,433.093L451.68,432.814L452.03,433.145L451.882,433.989L452.738,434.806L452.179,435.025L451.954,435.985L452.6,437.153L453.293,439.41L452.251,439.749L451.983,440.14L452.2,440.684L452.035,441.91z"
				},
				{
					"id":"GQ",
					"title":"Equatorial Guinea",
					"d":"M501.87,460.572L501.345,460.152L502.308,457.022L506.871,457.086L506.895,460.439L502.815,460.411z"
				},
				{
					"id":"GR",
					"title":"Greece",
					"d":"M541.704,356.712l1.533,1.156l2.182,-0.195l2.086,0.243l-0.067,0.595l1.528,-0.41l-0.351,1.007l-4.038,0.29l0.028,-0.563l-3.421,-0.666L541.704,356.712zM549.847,335.754l-0.868,2.325l-0.666,0.414l-1.708,-0.104l-1.463,-0.35l-3.396,0.959l1.944,2.062l-1.424,0.594l-1.562,0.004l-1.483,-1.884l-0.526,0.804l0.626,2.176l1.403,1.697l-1.057,0.788l1.562,1.65l1.388,1.033l0.042,2l-1.358,-1.146l-1.236,0.209l0.827,1.799l-0.917,0.19l-1,-0.694l1.2,3.952l-0.583,0.014l-0.446,-1.263l-0.573,-0.025l-0.26,1.318l-0.454,-0.299l0.102,-0.739l-0.561,-1.045h-0.637l0.118,0.843l-0.25,0.267l-0.616,-0.54l-0.383,-1.021l0.519,-0.569l-0.357,-0.74l-0.408,-0.382l-0.423,-0.094l-0.491,-0.943l0.583,-0.519l0.357,-0.484l0.561,0.102l0.251,-0.41l0.59,-0.163l0.683,0.461l0.553,0.169l0.386,-0.622l-0.938,-0.084l-0.555,-0.194l-1.25,0.28l-1.219,0.048l-1.093,-1.641l-0.181,-0.254l0.167,-0.642l-1.423,-1.155l-0.19,-1.03l1.304,-1.765l0.168,-1.19l0.911,-0.533l0.056,-0.968l1.834,-0.327l1.069,-0.81l1.52,0.072l0.461,-0.647l0.534,-0.124l2.074,0.107l2.245,-1.024l1.976,1.301l2.548,-0.351l0.031,-1.859L549.847,335.754z"
				},
				{
					"id":"GT",
					"title":"Guatemala",
					"d":"M222.638,424.754L221.2,424.254L219.451,424.202L218.168,423.632L216.66,422.446L216.729,421.607L217.054,420.931L216.656,420.391L218.005,418.032L221.604,418.023L221.676,417.035L221.222,416.859L220.91,416.229L219.874,415.557L218.83,414.583L220.096,414.576L220.098,412.931L222.716,412.926L225.309,412.958L225.287,415.273L225.068,418.553L225.905,418.552L226.819,419.076L227.061,418.645L227.883,419.014L226.605,420.117L225.276,420.925L225.079,421.479L225.302,422.045L224.719,422.776L224.063,422.953L224.212,423.292L223.686,423.609L222.725,424.334z"
				},
				{
					"id":"GW",
					"title":"Guinea-Bissau",
					"d":"M432.83,432.442L431.333,431.255L430.152,431.066L429.509,430.265L429.525,429.832L428.67,429.227L428.492,428.617L429.977,428.152L430.906,428.244L431.657,427.923L436.839,428.042L436.788,429.01L436.48,429.308L436.719,430.251L436.277,430.628L435.659,430.633L434.927,431.11L434.077,431.058z"
				},
				{
					"id":"GY",
					"title":"Guyana",
					"d":"M307.7,439.998L309.541,441.033L311.275,442.864L311.354,444.31L312.411,444.376L313.913,445.744L315.02,446.719L314.572,449.236L312.87,449.966L313.021,450.625L312.504,452.066L313.747,454.093L314.645,454.096L315.013,455.67L316.725,458.094L316.042,458.194L314.492,457.957L313.58,458.698L312.312,459.187L311.425,459.308L311.115,459.853L309.739,459.715L308.014,458.408L307.811,457.118L307.093,455.708L307.54,453.334L308.317,452.351L307.674,451.053L306.71,450.63L307.075,449.402L306.423,448.758L304.965,448.882L303.067,446.758L303.827,445.987L303.771,444.693L305.497,444.243L306.193,443.717L305.233,442.675L305.478,441.65z"
				},
				{
					"id":"HN",
					"title":"Honduras",
					"d":"M230.43,426.904L229.946,426.009L229.094,425.76L229.289,424.612L228.908,424.301L228.331,424.097L227.101,424.438L226.997,424.052L226.15,423.591L225.546,423.018L224.719,422.776L225.302,422.045L225.079,421.479L225.276,420.925L226.605,420.117L227.883,419.014L228.174,419.127L228.789,418.618L229.591,418.577L229.852,418.813L230.287,418.669L231.589,418.93L232.885,418.854L233.787,418.534L234.116,418.209L235.01,418.359L235.681,418.557L236.414,418.489L236.971,418.237L238.252,418.639L238.697,418.703L239.553,419.244L240.363,419.893L241.382,420.335L242.121,421.129L241.159,421.07L240.771,421.463L239.797,421.839L239.089,421.841L238.47,422.208L237.908,422.077L237.43,421.637L237.137,421.721L236.777,422.409L236.508,422.384L236.462,422.977L235.483,423.768L234.967,424.109L234.679,424.465L233.852,423.885L233.247,424.651L232.662,424.631L232.004,424.698L232.064,426.107L231.653,426.133L231.302,426.787z"
				},
				{
					"id":"HR",
					"title":"Croatia",
					"d":"M528.049,318.934L528.73,320.484L529.621,321.618L528.542,323.106L527.273,322.232L525.335,322.287L522.924,321.629L521.614,321.717L521.007,322.539L520,321.629L519.414,323.27L520.787,325.104L521.395,326.313L522.684,327.76L523.752,328.613L524.811,330.215L527.292,331.658L526.984,332.303L524.348,330.896L522.722,329.521L520.158,328.379L517.8,325.526L518.366,325.234L517.087,323.586L517.035,322.254L515.232,321.629L514.373,323.335L513.545,322.013L513.608,320.633L513.708,320.569L515.662,320.705L516.175,320.031L517.129,320.683L518.229,320.76L518.219,319.644L519.193,319.234L519.466,317.607L521.698,316.531L522.589,317.031L524.685,318.762L527.001,319.533z"
				},
				{
					"id":"HT",
					"title":"Haiti",
					"d":"M270.04,406.751L271.75,406.882L274.182,407.348L274.427,408.957L274.213,410.09L273.529,410.586L274.251,411.468L274.193,412.265L272.331,411.767L271.008,411.97L269.297,411.758L267.985,412.306L266.483,411.392L266.73,410.445L269.312,410.853L271.427,411.089L272.437,410.435L271.156,409.158L271.177,408.03L269.408,407.569z"
				},
				{
					"id":"HU",
					"title":"Hungary",
					"d":"M520.682,315.111L521.613,312.464L521.069,311.565L522.648,311.557L522.861,309.853L524.288,310.922L525.322,311.376L527.675,310.866L527.901,310.027L529.015,309.903L530.38,309.252L530.684,309.521L532,308.997L532.658,308.005L533.577,307.747L536.58,309.028L537.178,308.598L538.734,309.741L538.93,310.861L537.217,311.733L535.891,314.531L534.195,317.292L531.947,318.054L530.197,317.875L528.049,318.934L527.001,319.533L524.685,318.762L522.589,317.031L521.698,316.531L521.153,315.156z"
				},
				{
					"id":"ID",
					"title":"Indonesia",
					"d":"M813.722,492.058l-1.18,0.054l-3.721,-1.981l2.614,-0.555l1.474,0.86l0.98,0.858L813.722,492.058zM824.153,491.776l-2.4,0.623l-0.336,-0.34l0.252,-0.962l1.206,-1.724l2.771,-1.12l0.284,0.556l0.052,0.856L824.153,491.776zM805.827,486.009l1.011,0.75l1.732,-0.23l0.695,1.197l-3.241,0.566l-1.942,0.378l-1.507,-0.022l0.963,-1.623l1.538,-0.022L805.827,486.009zM819.856,486.005l-0.411,1.564l-4.213,0.8l-3.729,-0.348l-0.01,-1.03l2.228,-0.585l1.757,0.844l1.866,-0.214L819.856,486.005zM779.817,482.306l5.371,0.28l0.618,-1.156l5.201,1.349l1.021,1.82l4.207,0.513l3.438,1.672l-3.199,1.073l-3.083,-1.135l-2.538,0.077l-2.909,-0.208l-2.624,-0.505l-3.248,-1.074l-2.059,-0.278l-1.166,0.352l-5.113,-1.157l-0.486,-1.207l-2.565,-0.206l1.924,-2.678l3.401,0.166l2.264,1.095l1.162,0.214L779.817,482.306zM853.001,480.728l-1.442,1.909l-0.273,-2.11l0.498,-1.007l0.587,-0.946l0.638,0.819L853.001,480.728zM832.041,473.025l-1.05,0.926l-1.938,-0.513l-0.546,-1.2l2.836,-0.134L832.041,473.025zM841.075,472.006l1.02,2.134l-2.367,-1.15l-2.343,-0.233l-1.582,0.184l-1.94,-0.098l0.665,-1.534l3.463,-0.116L841.075,472.006zM851.371,466.593l0.783,4.507l2.901,1.669l2.344,-2.958l3.217,-1.682l2.493,-0.002l2.397,0.972l2.08,0.997l3.01,0.533l0.047,9.103l0.048,9.157l-2.497,-2.313l-2.848,-0.566l-0.69,0.802l-3.553,0.086l1.19,-2.289l1.766,-0.78l-0.731,-3.05l-1.346,-2.35l-5.436,-2.368l-2.313,-0.233l-4.21,-2.58l-0.828,1.356l-1.076,0.246l-0.637,-1.024l-0.009,-1.212l-2.142,-1.37l3.02,-1.004l2,0.054l-0.235,-0.74l-4.104,-0.005l-1.11,-1.659l-2.505,-0.514l-1.187,-1.378l3.779,-0.675l1.438,-0.908l4.501,1.144L851.371,466.593zM826.409,459.431l-2.253,2.763l-2.107,0.536l-2.698,-0.544l-4.673,0.139l-2.449,0.401l-0.398,2.108l2.51,2.477l1.514,-1.262l5.229,-0.948l-0.23,1.283l-1.222,-0.405l-1.218,1.632l-2.468,1.08l2.653,3.573l-0.513,0.958l2.521,3.223l-0.024,1.837l-1.497,0.822l-1.1,-0.984l1.355,-2.289l-2.752,1.082l-0.697,-0.773l0.363,-1.079l-2.021,-1.637l0.208,-2.718l-1.87,0.848l0.237,3.253l0.114,3.999l-1.778,0.406l-1.204,-0.821l0.804,-2.573l-0.434,-2.694l-1.18,-0.021l-0.871,-1.911l1.159,-1.826l0.399,-2.212l1.409,-4.199l0.588,-1.148l2.384,-2.069l2.189,0.823l3.535,0.387l3.225,-0.117l2.771,-2.023L826.409,459.431zM836.076,460.231l-0.146,2.434l-1.446,-0.272l-0.427,1.695l1.155,1.47l-0.785,0.334l-1.132,-1.764l-0.833,-3.561l0.564,-2.226l0.93,-1.014l0.202,1.522l1.655,0.244L836.076,460.231zM805.759,458.294l3.144,2.578l-3.322,0.329l-0.936,1.898l0.122,2.524l-2.696,1.905l-0.074,2.775l-1.081,4.266l-0.413,-0.993l-3.186,1.256l-1.11,-1.707l-1.999,-0.158l-1.398,-0.894l-3.333,1.003l-1.023,-1.35l-1.836,0.154l-2.312,-0.322l-0.429,-3.738l-1.399,-0.774l-1.346,-2.383l-0.391,-2.437l0.326,-2.581l1.666,-1.852l0.469,1.862l1.917,1.574l1.809,-0.566l1.79,0.201l1.634,-1.409l1.345,-0.244l2.652,0.781l2.287,-0.594l1.438,-3.876l1.079,-0.97l0.972,-3.175l3.224,0.001l2.43,0.471l-1.595,2.521l2.062,2.64L805.759,458.294zM771.95,479.713l-3.104,0.059l-2.361,-2.339l-3.601,-2.283l-1.2,-1.692l-2.122,-2.271l-1.393,-2.089l-2.133,-3.9l-2.462,-2.321l-0.824,-2.395l-1.033,-2.175l-2.528,-1.755l-1.466,-2.386l-2.111,-1.563l-2.925,-3.078l-0.246,-1.424l1.806,0.113l4.34,0.541l2.479,2.733l2.169,1.893l1.546,1.161l2.656,2.997l2.851,0.043l2.355,1.909l1.623,2.333l2.135,1.272l-1.123,2.274l1.606,0.967l1.007,0.071l0.476,1.943l0.977,1.555l2.059,0.247l1.364,1.765l-0.704,3.471L771.95,479.713z"
				},
				{
					"id":"IE",
					"title":"Ireland",
					"d":"M457.875,284.288L458.337,287.648L456.218,291.771L451.248,294.453L447.279,293.77L449.552,288.99L448.088,284.223L451.902,280.47L454.021,278.198L454.6,280.802L454.021,283.373L455.756,283.308z"
				},
				{
					"id":"IL",
					"title":"Israel",
					"d":"M575.406,366.825L574.918,367.868L573.903,367.41L573.317,369.606L574.021,369.975L573.305,370.426L573.184,371.287L574.502,370.844L574.568,372.114L573.171,377.28L571.328,371.725L572.144,370.648L571.953,370.462L572.694,368.927L573.263,366.433L573.664,365.59L573.741,365.556L574.68,365.562L574.938,364.978L575.69,364.934L575.733,366.297L575.353,366.802z"
				},
				{
					"id":"IN",
					"title":"India",
					"d":"M693.498,357.437L696.512,361.426L696.228,364.169L697.343,365.877L697.251,367.571L695.239,367.126L696.025,370.756L698.78,372.821L702.677,375.086L700.897,376.547L699.809,379.538L702.525,380.74L705.169,382.292L708.826,384.059L712.669,384.465L714.286,386.058L716.453,386.354L719.826,387.081L722.161,387.029L722.482,385.794L722.113,383.803L722.33,382.447L724.04,381.782L724.275,384.263L724.335,384.892L726.884,386.079L728.646,385.59L731.014,385.8L733.301,385.707L733.498,383.782L732.356,382.777L734.618,382.383L737.17,380.027L740.402,377.997L742.754,378.782L744.753,377.436L746.067,379.421L745.12,380.756L748.144,381.229L748.355,382.428L747.372,383.006L747.603,384.939L745.599,384.372L741.969,386.534L742.054,388.313L740.507,390.907L740.364,392.405L739.114,394.927L736.923,394.231L736.814,397.379L736.181,398.41L736.477,399.691L735.094,400.405L733.617,395.606L732.843,395.616L732.385,397.556L730.85,395.984L731.715,394.25L732.97,394.073L734.262,391.479L732.646,390.953L730.045,390.999L727.377,390.576L727.13,388.426L725.791,388.273L723.57,386.93L722.58,389.037L724.604,390.672L722.851,391.819L722.229,392.938L723.954,393.757L723.478,395.596L724.449,397.877L724.886,400.362L724.484,401.458L722.576,401.421L719.12,402.043L719.281,404.291L717.784,406.051L713.749,408.045L710.611,411.511L708.503,413.359L705.709,415.271L705.705,416.609L704.308,417.325L701.782,418.364L700.472,418.518L699.632,420.723L700.215,424.466L700.364,426.842L699.176,429.554L699.163,434.379L697.712,434.516L696.436,436.673L697.289,437.604L694.732,438.403L693.788,440.319L692.663,441.128L690.009,438.499L688.711,434.542L687.635,431.682L686.652,430.336L685.163,427.598L684.467,424.016L683.982,422.22L681.432,418.252L680.271,412.606L679.432,408.844L679.442,405.255L678.898,402.461L674.818,404.249L672.842,403.892L669.179,400.261L670.527,399.172L669.699,397.986L666.41,395.411L668.277,393.374L674.447,393.382L673.891,390.745L672.315,389.179L671.996,386.788L670.161,385.386L673.251,382.091L676.507,382.331L679.44,379.005L681.197,375.754L683.92,372.505L683.876,370.177L686.268,368.274L684.004,366.64L683.03,364.386L682.037,361.44L683.411,359.979L687.665,360.807L690.79,360.303z"
				},
				{
					"id":"IQ",
					"title":"Iraq",
					"d":"M602.605,355.773L604.444,356.807L604.656,358.807L603.245,359.982L602.595,362.62L604.537,365.801L607.972,367.62L609.415,370.123L608.956,372.489L609.851,372.488L609.879,374.217L611.43,375.914L609.767,375.756L607.882,375.487L605.825,378.567L600.612,378.312L592.706,371.821L588.528,369.529L585.151,368.637L584.021,364.596L590.228,361.097L591.288,356.976L591.023,354.455L592.558,353.598L593.995,351.418L595.199,350.873L598.46,351.326L599.445,352.218L600.789,351.627z"
				},
				{
					"id":"IR",
					"title":"Iran",
					"d":"M626.441,351.527L628.905,350.848L630.899,348.831L632.774,348.934L634.005,348.273L635.999,348.6L639.1,350.391L641.339,350.775L644.543,353.87L646.633,353.995L646.879,356.901L645.736,361.148L644.966,363.599L646.187,364.094L644.987,365.921L645.905,368.565L646.125,370.65L648.249,371.202L648.479,373.298L645.936,376.228L647.323,377.914L648.452,379.84L651.133,381.236L651.21,384.013L652.552,384.521L652.783,385.963L648.739,387.572L647.683,391.167L642.408,390.236L639.351,389.526L636.187,389.124L634.99,385.308L633.648,384.752L631.494,385.312L628.666,386.823L625.239,385.788L622.409,383.378L619.71,382.481L617.837,379.474L615.768,375.201L614.259,375.724L612.477,374.655L611.43,375.914L609.879,374.217L609.851,372.488L608.956,372.489L609.415,370.123L607.972,367.62L604.537,365.801L602.595,362.62L603.245,359.982L604.656,358.807L604.444,356.807L602.605,355.773L600.789,351.626L599.255,348.805L599.804,347.705L598.929,343.593L600.849,342.561L601.293,343.926L602.71,345.587L604.633,346.064L605.648,345.958L608.955,343.302L610.006,343.035L610.835,344.096L609.868,345.875L611.617,347.744L612.314,347.566L613.201,350.178L615.86,350.911L617.808,352.667L621.794,353.269L626.173,352.345z"
				},
				{
					"id":"IS",
					"title":"Iceland",
					"d":"M434.573,212.429L433.925,216.909L437.093,221.51L433.448,226.516L425.36,230.897L422.943,232.045L419.252,231.119L411.429,229.111L414.189,226.27L408.086,223.071L413.051,221.788L412.931,219.825L407.046,218.254L408.94,213.78L413.19,212.748L417.56,217.432L421.82,213.682L425.348,215.639L429.921,211.932z"
				},
				{
					"id":"IT",
					"title":"Italy",
					"d":"M518.77,347.883l-1.01,2.783l0.419,1.087l-0.588,1.795l-2.145,-1.313l-1.426,-0.377l-3.914,-1.786l0.393,-1.816l3.281,0.324l2.86,-0.387L518.77,347.883zM501.077,337.065l1.682,2.622l-0.394,4.811l-1.275,-0.228l-1.144,1.201l-1.062,-0.954l-0.112,-4.384l-0.64,-2.105l1.542,0.185L501.077,337.065zM509.955,315.458l4.01,1.051l-0.304,1.991l0.671,1.707l-2.232,-0.583l-2.28,1.417l0.155,1.966l-0.343,1.121l0.919,1.989l2.629,1.951l1.41,3.167l3.12,3.047l2.197,-0.023l0.683,0.829l-0.787,0.745l2.511,1.345l2.059,1.12l2.404,1.919l0.291,0.683l-0.524,1.306l-1.556,-1.704l-2.436,-0.603l-1.18,2.362l2.026,1.344l-0.333,1.879l-1.171,0.213l-1.498,3.057l-1.168,0.272l0.011,-1.084l0.572,-1.913l0.609,-0.766l-1.095,-2.09l-0.855,-1.833l-1.164,-0.455l-0.828,-1.583l-1.802,-0.67l-1.213,-1.487l-2.075,-0.241l-2.191,-1.683l-2.565,-2.448l-1.906,-2.188l-0.875,-3.803l-1.395,-0.452l-2.281,-1.287l-1.291,0.528l-1.62,1.802l-1.165,0.284l0.321,-1.684l-1.52,-0.494l-0.723,-3.039l0.972,-1.208l-0.825,-1.498l0.116,-1.134l1.207,0.86l1.352,-0.19l1.572,-1.364l0.486,0.639l1.335,-0.128l0.607,-1.63l2.075,0.508l1.235,-0.684l0.222,-1.67l1.699,0.581l0.326,-0.777l2.771,-0.712L509.955,315.458z"
				},
				{
					"id":"JM",
					"title":"Jamaica",
					"d":"M257.759,410.958L259.646,411.221L261.136,411.926L261.601,412.729L259.629,412.783L258.778,413.272L257.208,412.802L255.605,411.734L255.942,411.063L257.121,410.858z"
				},
				{
					"id":"JO",
					"title":"Jordan",
					"d":"M574.918,367.868L575.406,366.825L578.53,368.136L584.021,364.596L585.151,368.637L584.617,369.134L579.001,370.78L581.796,374.036L580.869,374.585L580.407,375.666L578.268,376.111L577.597,377.268L576.385,378.252L573.265,377.744L573.171,377.28L574.568,372.114L574.502,370.844L574.917,369.882z"
				},
				{
					"id":"JP",
					"title":"Japan",
					"d":"M852.76,362.009l0.358,1.154l-1.579,2.025l-1.15,-1.072l-1.438,0.777l-0.744,1.946l-1.827,-0.946l0.022,-1.583l1.551,-2.003l1.595,0.39l1.152,-1.417L852.76,362.009zM870.53,351.726l-1.057,2.781l0.489,1.731l-1.461,2.416l-3.582,1.602l-4.929,0.208l-3.995,3.844l-1.884,-1.288l-0.116,-2.523l-4.877,0.747l-3.318,1.588l-3.282,0.064l2.843,2.463l-1.871,5.611l-1.813,1.373l-1.356,-1.268l0.688,-2.961l-1.774,-0.962l-1.139,-2.281l2.65,-1.03l1.471,-2.114l2.82,-1.75l2.057,-2.333l5.581,-1.023l2.998,0.702l2.934,-6.168l1.869,1.671l4.113,-3.512l1.595,-1.377l1.763,-4.383l-0.481,-4.1l1.185,-2.333l2.981,-0.682l1.528,5.108l-0.083,2.938l-2.594,3.602L870.53,351.726zM878.756,325.795l1.972,0.829l1.983,-1.651l0.623,4.348l-4.159,1.048l-2.455,3.763l-4.409,-2.583l-1.525,4.122l-3.119,0.056l-0.386,-3.741l1.387,-2.937l2.996,-0.213l0.817,-5.381l0.829,-3.089l3.295,4.117L878.756,325.795z"
				},
				{
					"id":"KE",
					"title":"Kenya",
					"d":"M590.191,465.775L591.852,468.074L589.888,469.187L589.195,470.35L588.145,470.554L587.747,472.519L586.847,473.645L586.299,475.502L585.17,476.425L581.146,473.633L580.955,472.015L570.788,466.337L570.314,466.031L570.286,463.079L571.089,461.951L572.468,460.107L573.489,458.076L572.255,454.876L571.927,453.476L570.598,451.538L572.323,449.869L574.224,448.026L575.68,448.496L575.68,450.065L576.638,450.985L578.589,450.985L582.138,453.356L583.024,453.384L583.681,453.307L584.302,453.629L586.172,453.849L587,452.686L589.562,451.518L590.692,452.461L592.608,452.462L590.158,455.627z"
				},
				{
					"id":"KG",
					"title":"Kyrgyzstan",
					"d":"M674.221,333.111L674.849,331.451L676.694,330.914L681.308,332.223L681.743,329.976L683.335,329.182L687.328,330.791L688.347,330.37L692.996,330.475L697.156,330.874L698.563,332.239L700.29,332.794L699.896,333.647L695.478,335.679L694.479,337.157L690.882,337.597L689.821,339.951L686.854,339.459L684.916,340.177L682.239,341.903L682.626,342.753L681.828,343.582L676.526,344.129L673.063,342.955L670.022,343.236L670.288,341.14L673.34,341.75L674.366,340.624L676.499,340.984L680.09,338.339L676.767,336.385L674.77,337.312L672.7,335.911L675.054,333.482z"
				},
				{
					"id":"KH",
					"title":"Cambodia",
					"d":"M765.444,433.599L764.304,432.121L762.886,429.182L762.222,425.732L764.018,423.347L767.643,422.797L770.271,423.21L772.585,424.336L773.854,422.354L776.338,423.413L776.988,425.327L776.643,428.753L771.93,430.944L773.161,432.665L770.218,432.871L767.791,434.013z"
				},
				{
					"id":"KP",
					"title":"North Korea",
					"d":"M841.548,332.624L841.94,333.285L840.875,333.059L839.658,334.334L838.821,335.608L838.927,338.276L837.478,339.092L836.979,339.74L835.922,340.823L834.055,341.424L832.838,342.401L832.75,343.969L832.423,344.368L833.539,344.953L835.127,346.525L834.723,347.388L833.529,347.623L831.548,347.795L830.455,349.395L829.204,349.269L829.028,349.589L827.667,348.917L827.328,349.581L826.507,349.874L826.408,349.209L825.682,348.885L824.928,348.32L825.695,346.753L826.356,346.333L826.107,345.679L826.818,343.738L826.635,343.146L824.998,342.752L823.676,341.777L825.959,339.43L829.049,337.446L830.976,334.802L832.307,335.974L834.73,336.11L834.293,334.135L838.623,332.511L839.737,330.38z"
				},
				{
					"id":"KR",
					"title":"South Korea",
					"d":"M835.127,346.525L837.547,350.707L838.241,352.977L838.263,356.962L837.206,358.844L834.667,359.498L832.426,360.906L829.9,361.196L829.587,359.348L830.106,356.782L828.867,353.181L830.95,352.594L829.028,349.589L829.204,349.269L830.455,349.395L831.548,347.795L833.529,347.623L834.723,347.388z"
				},
				{
					"id":"XK",
					"title":"Kosovo",
					"d":"M533.467,333.918L533.341,334.688L532.985,334.657L532.796,333.293L532.125,332.907L531.528,331.891L532.052,331.039L532.723,330.765L533.111,329.495L533.614,329.283L534.012,329.824L534.536,330.062L534.903,330.669L535.364,330.849L535.909,331.554L536.307,331.533L535.993,332.457L535.657,332.907L535.75,333.19L535.123,333.335z"
				},
				{
					"id":"KW",
					"title":"Kuwait",
					"d":"M609.767,375.756L610.352,377.174L610.101,377.905L611.004,380.309L609.021,380.391L608.323,378.875L605.825,378.567L607.882,375.487z"
				},
				{
					"id":"KZ",
					"title":"Kazakhstan",
					"d":"M674.221,333.111L672.613,333.808L668.915,336.417L667.688,339.066L666.644,339.09L665.875,337.339L662.31,337.219L661.739,334.16L660.373,334.134L660.582,330.333L657.226,327.526L652.417,327.828L649.129,328.389L646.451,324.891L644.157,323.407L639.811,320.57L639.287,320.224L632.069,322.571L632.18,336.698L630.741,336.88L628.779,333.948L626.884,332.892L623.701,333.677L622.462,334.927L622.305,334.012L622.994,332.439L622.459,331.117L619.21,329.816L617.944,326.352L616.396,325.367L616.303,324.091L619.03,324.464L619.138,321.581L621.522,320.935L623.972,321.529L624.477,317.622L623.977,315.108L621.171,315.306L618.787,314.307L615.541,316.104L612.925,316.955L611.501,316.299L611.786,314.197L609.999,311.437L607.918,311.553L605.538,308.716L607.156,305.501L606.337,304.627L608.575,299.857L611.458,302.389L611.807,299.196L617.595,294.347L621.975,294.23L628.155,297.332L631.475,299.123L634.45,297.255L638.895,297.166L642.481,299.458L643.296,298.148L647.234,298.339L647.937,296.233L643.393,293.136L646.084,290.913L645.559,289.659L648.251,288.455L646.227,285.247L647.512,283.629L658.004,281.966L659.373,280.776L666.389,278.985L668.91,276.953L673.949,278.011L674.832,283.023L677.759,281.858L681.36,283.489L681.128,286.072L683.817,285.804L690.844,281.31L689.818,282.814L693.396,286.473L699.661,298.049L701.155,295.716L705.018,298.281L709.047,297.141L710.595,297.94L711.944,300.486L713.904,301.334L715.098,303.177L718.71,302.598L720.197,305.232L718.063,308.063L715.734,308.457L715.601,312.643L714.041,314.503L708.479,313.15L706.456,320.412L705.021,321.298L699.466,322.88L701.99,329.634L700.066,330.629L700.29,332.794L698.563,332.239L697.156,330.874L692.996,330.475L688.347,330.37L687.328,330.791L683.335,329.182L681.743,329.976L681.308,332.223L676.694,330.914L674.849,331.451z"
				},
				{
					"id":"LA",
					"title":"Lao People's Democratic Republic",
					"d":"M770.271,423.21L771.184,421.913L771.309,419.47L769.039,416.943L768.864,414.068L766.731,411.69L764.611,411.489L764.046,412.509L762.404,412.594L761.564,412.077L758.609,413.823L758.543,411.197L759.232,408.093L757.338,407.957L757.177,406.177L755.964,405.26L756.561,404.164L758.947,402.22L759.199,402.923L760.694,403.004L760.271,399.571L761.724,399.129L763.362,401.505L764.621,404.222L768.073,404.245L769.16,406.837L767.368,407.613L766.563,408.676L769.923,410.438L772.253,413.903L774.021,416.471L776.142,418.49L776.848,420.533L776.338,423.413L773.854,422.354L772.585,424.336z"
				},
				{
					"id":"LB",
					"title":"Lebanon",
					"d":"M575.69,364.934L574.938,364.978L574.68,365.562L573.741,365.556L574.74,362.83L576.134,360.451L576.187,360.332L577.448,360.505L577.907,361.832L576.378,363.101z"
				},
				{
					"id":"LK",
					"title":"Sri Lanka",
					"d":"M704.574,442.372L704.152,445.294L702.977,446.091L700.538,446.732L699.203,444.504L698.706,440.466L699.976,435.888L701.913,437.457L703.219,439.442z"
				},
				{
					"id":"LR",
					"title":"Liberia",
					"d":"M453.629,451.218L452.895,451.242L450.005,449.91L447.457,447.781L445.068,446.25L443.18,444.441L443.851,443.543L443.999,442.727L445.264,441.201L446.569,439.888L447.168,439.825L447.9,439.508L449.073,441.232L448.887,442.361L449.433,442.959L450.226,442.973L450.797,441.841L451.59,441.914L451.461,442.73L451.741,444.088L451.132,445.333L451.949,446.103L452.84,446.29L454.027,447.463L454.113,448.565L453.845,448.916z"
				},
				{
					"id":"LS",
					"title":"Lesotho",
					"d":"M556.504,547.746L557.477,548.709L556.616,550.268L556.14,551.318L554.577,551.822L554.062,552.855L553.058,553.178L550.955,550.693L552.45,548.662L553.969,547.414L555.28,546.765z"
				},
				{
					"id":"LT",
					"title":"Lithuania",
					"d":"M538.988,282.094L538.763,280.866L539.063,279.539L537.823,278.766L534.887,277.91L534.291,273.746L537.502,272.203L542.204,272.527L544.958,272.028L545.352,273.076L546.844,273.398L549.539,275.817L549.803,278.024L547.504,279.586L546.853,282.31L543.809,284.107L541.099,284.075L540.426,282.606z"
				},
				{
					"id":"LU",
					"title":"Luxembourg",
					"d":"M492.197,301.287L492.757,302.27L492.599,304.165L491.79,304.255L491.162,303.882L491.466,301.452z"
				},
				{
					"id":"LV",
					"title":"Latvia",
					"d":"M534.291,273.746L534.387,269.938L535.765,266.703L538.408,264.92L540.634,268.799L542.884,268.699L543.423,264.71L545.811,263.78L547.04,264.426L549.453,266.368L551.765,266.377L553.116,267.572L553.355,270.063L554.256,273.053L551.244,274.982L549.539,275.817L546.844,273.398L545.352,273.076L544.958,272.028L542.204,272.527L537.502,272.203z"
				},
				{
					"id":"LY",
					"title":"Libya",
					"d":"M516.894,397.927L514.91,399.05L513.333,397.389L508.898,396.081L507.667,394.172L505.454,392.751L504.144,393.312L503.146,391.601L503.041,390.281L501.383,388.025L502.496,386.725L502.251,384.76L502.608,383.041L502.405,381.601L502.899,379.011L502.747,377.526L501.839,374.686L503.208,373.936L503.45,372.564L503.152,371.213L505.077,369.951L505.94,368.898L507.307,367.951L507.466,365.402L510.759,366.547L511.937,366.262L514.279,366.815L518,368.294L519.313,371.212L521.83,371.846L525.781,373.208L528.769,374.818L530.136,373.979L531.479,372.486L530.826,369.983L531.706,368.382L533.726,366.833L535.656,366.38L539.449,367.059L540.405,368.537L541.449,368.55L542.342,369.112L545.128,369.498L545.812,370.582L544.796,372.149L545.23,373.539L544.508,375.535L545.349,378.121L545.349,389.301L545.349,400.529L545.349,406.492L542.125,406.501L542.09,407.744L530.907,402.045L519.725,396.269z"
				},
				{
					"id":"MA",
					"title":"Morocco",
					"d":"M471.361,366.311L470.393,362.782L470.226,360.729L469.169,358.551L467.951,358.514L465.047,357.759L462.38,357.996L460.69,356.54L458.626,356.523L457.745,358.627L455.871,362.14L453.792,363.53L450.979,365.058L449.175,367.304L448.799,369.042L447.734,371.861L448.435,375.892L446.094,378.568L444.688,379.418L442.479,381.587L439.872,381.937L438.462,383.148L438.446,383.162L450.956,383.148L450.956,383.141L450.932,379.389L455.46,377.03L458.26,376.541L460.555,375.676L461.627,374.059L464.905,372.775L465.026,370.358L466.648,370.072L467.917,368.856L471.586,368.301L472.1,367.016z"
				},
				{
					"id":"MD",
					"title":"Moldova",
					"d":"M549.89,309.445L550.559,308.826L552.422,308.409L554.489,309.718L555.642,309.875L556.909,310.999L556.708,312.406L557.729,313.082L558.134,314.799L559.113,315.837L558.915,316.444L559.438,316.855L558.695,317.155L557.043,317.036L556.767,316.475L556.181,316.799L556.379,317.523L555.611,318.809L555.122,320.184L554.416,320.617L553.914,318.791L554.209,317.067L554.12,315.282L552.502,312.84L551.613,311.092L550.744,309.854z"
				},
				{
					"id":"ME",
					"title":"Montenegro",
					"d":"M530.774,332.227L530.596,331.512L529.38,333.377L529.568,334.573L528.981,334.283L528.196,333.053L526.984,332.302L527.292,331.658L527.703,329.559L528.615,328.666L529.139,328.314L529.883,328.975L530.292,329.506L531.214,329.919L532.283,330.712L532.052,331.039L531.528,331.891z"
				},
				{
					"id":"MG",
					"title":"Madagascar",
					"d":"M614.166,498.396L614.91,499.611L615.604,501.501L616.056,504.958L616.781,506.307L616.503,507.693L616.007,508.546L615.055,506.85L614.527,507.706L615.063,509.854L614.813,511.087L614.04,511.76L613.863,514.236L612.759,517.663L611.376,521.745L609.644,527.42L608.57,531.634L607.303,535.184L605.022,535.913L602.575,537.218L600.96,536.43L598.734,535.327L597.96,533.708L597.775,531.001L596.788,528.583L596.531,526.414L597.034,524.251L598.324,523.733L598.332,522.739L599.672,520.484L599.925,518.598L599.274,517.2L598.743,515.345L598.519,512.647L599.499,511.016L599.875,509.172L601.272,509.065L602.836,508.471L603.874,507.947L605.105,507.908L606.704,506.26L609.011,504.484L609.853,503.038L609.471,501.811L610.662,502.156L612.207,500.165L612.259,498.447L613.188,497.172z"
				},
				{
					"id":"MK",
					"title":"Macedonia",
					"d":"M532.985,334.657L533.341,334.688L533.467,333.918L535.123,333.335L535.75,333.19L536.705,332.97L538.005,332.907L539.409,334.116L539.608,336.589L539.074,336.713L538.612,337.36L537.093,337.288L536.024,338.098L534.19,338.425L533.027,337.524L532.628,335.93z"
				},
				{
					"id":"ML",
					"title":"Mali",
					"d":"M441.128,422.221L442.072,421.696L442.543,419.996L443.432,419.93L445.39,420.734L446.971,420.163L448.055,420.354L448.476,419.712L459.726,419.668L460.35,417.64L459.864,417.282L458.511,404.597L457.158,391.541L461.449,391.485L470.907,398.139L480.365,404.686L481.032,406.079L482.777,406.928L484.076,407.409L484.108,409.289L487.218,409L487.226,415.75L485.693,417.691L485.454,419.476L482.963,419.935L479.138,420.183L478.101,421.208L476.304,421.322L474.506,421.335L473.807,420.782L472.263,421.192L469.643,422.388L469.107,423.287L466.932,424.574L466.551,425.311L465.375,425.894L464.02,425.508L463.251,426.207L462.84,428.167L460.614,430.528L460.679,431.491L459.914,432.695L460.1,434.341L458.943,434.76L458.289,435.117L457.854,433.906L457.045,434.226L456.561,434.17L456.045,434.997L453.88,434.974L453.104,434.548L452.738,434.806L451.882,433.989L452.03,433.145L451.68,432.814L451.083,433.093L451.192,432.17L451.767,431.439L450.618,430.248L450.284,429.462L449.661,428.836L449.1,428.761L448.426,429.16L447.52,429.542L446.751,430.158L445.551,429.93L444.773,429.207L444.308,429.112L443.576,429.492L443.131,429.495L442.97,428.451L443.099,427.562L442.859,426.456L441.81,425.652L441.256,424.01z"
				},
				{
					"id":"MM",
					"title":"Myanmar",
					"d":"M754.357,405.947L752.722,407.233L750.742,407.366L749.464,410.556L748.28,411.09L749.636,413.662L751.415,415.792L752.563,417.709L751.537,420.227L750.569,420.76L751.238,422.206L753.108,424.49L753.429,426.09L753.385,427.418L754.481,430.019L752.941,432.669L751.583,435.58L751.313,433.478L752.174,431.304L751.231,429.62L751.459,426.51L750.321,425.026L749.407,421.586L748.9,417.934L747.688,415.526L745.841,416.985L742.654,419.053L741.082,418.795L739.345,418.115L740.311,414.511L739.726,411.771L737.528,408.376L737.871,407.311L736.23,406.931L734.241,404.507L734.058,402.104L735.036,402.557L735.094,400.405L736.477,399.691L736.181,398.41L736.814,397.379L736.923,394.231L739.114,394.927L740.364,392.405L740.507,390.907L742.054,388.313L741.969,386.534L745.599,384.372L747.603,384.939L747.372,383.006L748.355,382.428L748.144,381.229L749.784,380.994L750.721,382.854L751.944,383.605L752.027,386.003L751.914,388.57L749.259,391.15L748.922,394.785L751.882,394.278L752.551,397.079L754.326,397.666L753.51,400.173L755.592,401.301L756.806,401.854L758.862,400.98L758.947,402.22L756.561,404.164L755.964,405.26z"
				},
				{
					"id":"MN",
					"title":"Mongolia",
					"d":"M721.295,304.88L724.251,304.136L729.601,300.396L733.865,298.326L736.304,299.679L739.229,299.744L741.103,301.787L743.901,301.943L747.955,303.033L750.681,300L749.542,297.4L752.446,292.741L755.587,294.612L758.132,295.139L761.429,296.291L761.964,299.612L765.946,301.453L768.597,300.644L772.144,300.071L774.953,300.648L777.699,302.74L779.401,304.943L782.001,304.898L785.533,305.595L788.11,304.533L791.802,303.821L795.908,300.762L797.59,301.234L799.058,302.69L802.403,302.329L801.038,305.576L799.057,309.803L799.779,311.509L801.366,310.981L804.132,311.628L806.287,310.09L808.537,311.423L811.078,314.31L810.771,315.763L808.559,315.303L804.486,315.844L802.513,317L800.458,319.662L796.183,321.208L793.389,323.309L790.507,322.509L788.93,322.151L787.457,324.689L788.353,326.188L788.807,327.468L786.844,328.765L784.832,330.816L781.556,332.153L777.354,332.297L772.824,333.608L769.56,335.622L768.318,334.458L764.926,334.461L760.777,332.17L758.01,331.605L754.28,332.133L748.493,331.282L745.402,331.37L743.757,329.101L742.479,325.533L740.747,325.1L737.359,322.652L733.583,322.1L730.251,321.421L729.242,319.692L730.321,314.965L728.387,311.646L724.388,310.081L722.031,307.85z"
				},
				{
					"id":"MR",
					"title":"Mauritania",
					"d":"M441.128,422.221L439.278,420.24L437.581,418.111L435.72,417.343L434.38,416.488L432.814,416.521L431.446,417.154L430.053,416.903L429.093,417.834L428.85,416.269L429.633,414.832L429.981,412.079L429.671,409.173L429.333,407.705L429.612,406.227L428.888,404.814L427.41,403.526L428.021,402.529L439.001,402.548L438.47,398.204L439.156,396.648L441.783,396.375L441.692,388.524L450.895,388.687L450.903,383.96L461.449,391.485L457.158,391.541L458.511,404.597L459.864,417.282L460.35,417.64L459.726,419.668L448.476,419.712L448.055,420.354L446.971,420.163L445.39,420.734L443.432,419.93L442.543,419.996L442.072,421.696z"
				},
				{
					"id":"MW",
					"title":"Malawi",
					"d":"M572.154,495.69L571.369,497.854L572.154,501.57L573.127,501.529L574.139,502.454L575.313,504.532L575.552,508.246L574.338,508.856L573.482,510.873L571.653,509.077L571.445,507.036L572.035,505.693L571.873,504.538L570.766,503.81L569.994,504.074L568.38,502.695L566.906,501.951L567.757,499.292L568.639,498.299L568.101,495.938L568.664,493.636L569.142,492.868L568.429,490.466L567.105,489.207L569.854,489.733L570.418,490.514L571.369,491.833z"
				},
				{
					"id":"MX",
					"title":"Mexico",
					"d":"M202.887,388.721L201.799,391.432L201.308,393.639L201.104,397.716L200.833,399.191L201.319,400.834L202.188,402.296L202.749,404.612L204.609,406.825L205.264,408.513L206.361,409.965L209.338,410.745L210.497,411.974L212.957,411.153L215.094,410.856L217.194,410.328L218.958,409.823L220.742,408.62L221.41,406.895L221.64,404.398L222.125,403.526L224.024,402.743L226.989,402.049L229.472,402.153L231.172,401.899L231.845,402.534L231.75,403.974L230.243,405.743L229.577,407.548L230.093,408.063L229.673,409.34L228.97,411.635L228.26,410.881L227.673,410.93L227.14,410.968L226.135,412.739L225.626,412.393L225.287,412.527L225.309,412.958L222.716,412.926L220.098,412.931L220.096,414.576L218.83,414.583L219.874,415.557L220.91,416.229L221.222,416.859L221.676,417.035L221.604,418.023L218.005,418.032L216.656,420.391L217.054,420.931L216.729,421.607L216.66,422.446L213.487,419.339L212.041,418.399L209.751,417.643L208.186,417.853L205.934,418.943L204.52,419.229L202.54,418.466L200.439,417.914L197.818,416.582L195.716,416.175L192.542,414.82L190.196,413.424L189.488,412.643L187.919,412.468L185.051,411.54L183.884,410.199L180.871,408.525L179.466,406.659L178.798,405.212L179.733,404.921L179.445,404.072L180.089,403.297L180.103,402.263L179.157,400.917L178.904,399.72L177.964,398.196L175.493,395.18L172.674,392.792L171.31,390.877L168.903,389.617L168.388,388.86L168.815,386.941L167.386,386.213L165.731,384.693L165.032,382.5L163.523,382.243L161.896,380.576L160.582,379.028L160.459,378.031L158.952,375.61L157.958,373.133L158.001,371.883L155.973,370.586L155.037,370.729L153.437,369.826L152.987,371.156L153.451,372.721L153.724,375.153L154.686,376.48L156.767,378.687L157.229,379.437L157.655,379.664L158.025,380.755L158.523,380.711L159.086,382.75L159.938,383.552L160.535,384.664L162.297,386.255L163.227,389.146L164.06,390.5L164.838,391.942L164.993,393.559L166.345,393.66L167.469,395.047L168.486,396.406L168.418,396.949L167.238,398.062L166.741,398.047L166.002,396.204L164.167,394.469L162.145,392.99L160.711,392.211L160.804,389.958L160.378,388.28L159.042,387.317L157.115,385.926L156.745,386.328L156.037,385.514L154.308,384.756L152.655,382.932L152.86,382.694L154.015,382.873L155.055,381.693L155.16,380.264L153.001,377.99L151.355,377.104L150.322,375.095L149.282,372.972L147.983,370.363L146.844,367.4L150.03,367.146L153.591,366.786L153.329,367.434L157.563,369.039L163.959,371.348L169.535,371.325L171.758,371.324L171.764,369.973L176.622,369.974L177.644,371.135L179.078,372.167L180.744,373.596L181.673,375.285L182.371,377.054L183.82,378.021L186.148,378.979L187.914,376.45L190.207,376.388L192.183,377.667L193.59,379.851L194.559,381.709L196.213,383.507L196.831,385.702L197.616,387.168L199.803,388.131L201.793,388.813z"
				},
				{
					"id":"MY",
					"title":"Malaysia",
					"d":"M758.654,446.07l0.22,1.438l1.852,-0.334l0.916,-1.15l0.645,0.262l1.656,1.69l1.177,1.873l0.16,1.881l-0.298,1.27l0.272,0.959l0.205,1.651l0.987,0.768l1.103,2.465l-0.054,0.942l-1.988,0.186l-2.652,-2.064l-3.317,-2.212l-0.328,-1.421l-1.621,-1.866l-0.387,-2.313l-1.012,-1.524l0.308,-2.038l-0.618,-1.188l0.487,-0.5L758.654,446.07zM807.841,450.9l-2.064,0.952l-2.43,-0.471l-3.224,-0.001l-0.972,3.175l-1.079,0.97l-1.438,3.876l-2.287,0.594l-2.652,-0.781l-1.345,0.244l-1.634,1.409l-1.79,-0.201l-1.809,0.566l-1.917,-1.574l-0.469,-1.862l2.055,0.955l2.167,-0.521l0.564,-2.36l1.196,-0.526l3.361,-0.604l2.011,-2.207l1.377,-1.766l1.277,1.447l0.589,-0.952l1.34,0.089l0.164,-1.785l0.126,-1.377l2.159,-1.947l1.414,-2.191l1.134,-0.009l1.44,1.419l0.128,1.218l1.847,0.78l2.34,0.842l-0.2,1.095l-1.881,0.139L807.841,450.9z"
				},
				{
					"id":"MZ",
					"title":"Mozambique",
					"d":"M572.154,495.69L574.264,495.461L577.633,496.262L578.365,495.902L580.317,495.829L581.316,494.977L582.998,495.023L586.064,493.921L588.295,492.278L588.749,493.548L588.633,496.378L588.979,498.879L589.088,503.355L589.582,504.765L588.745,506.827L587.657,508.837L585.872,510.639L583.309,511.746L580.148,513.163L576.98,516.31L575.901,516.848L573.944,518.944L572.789,519.629L572.552,521.746L573.882,524.005L574.435,525.763L574.47,526.662L574.965,526.512L574.885,529.473L574.43,530.883L575.091,531.404L574.674,532.673L573.502,533.762L571.189,534.798L567.817,536.465L566.587,537.607L566.828,538.914L567.544,539.123L567.304,540.763L565.177,540.737L564.937,539.359L564.521,537.967L564.282,536.856L564.782,533.428L564.052,531.259L562.709,526.998L565.663,523.593L566.402,521.443L566.826,521.172L567.143,519.426L566.692,518.55L566.813,516.347L567.359,514.312L567.353,510.617L565.896,509.683L564.562,509.472L563.957,508.754L562.658,508.142L560.319,508.2L560.138,507.12L559.872,505.065L568.38,502.695L569.994,504.074L570.766,503.81L571.873,504.538L572.035,505.693L571.445,507.036L571.653,509.077L573.482,510.873L574.338,508.856L575.552,508.246L575.313,504.532L574.139,502.454L573.127,501.529L572.154,501.57L571.369,497.854z"
				},
				{
					"id":"NA",
					"title":"Namibia",
					"d":"M521.082,546.54L518.998,544.149L517.901,541.854L517.282,538.817L516.591,536.574L515.651,531.851L515.588,528.22L515.229,526.576L514.139,525.337L512.691,522.865L511.218,519.301L510.605,517.446L508.324,514.576L508.154,512.332L509.503,511.777L511.182,511.28L513,511.367L514.671,512.687L515.095,512.481L526.46,512.355L528.403,513.756L535.191,514.17L540.345,512.978L542.641,512.314L544.458,512.482L545.565,513.141L545.586,513.383L544.005,514.043L543.155,514.049L541.365,515.198L540.293,513.99L535.971,515.016L533.883,515.113L533.801,525.683L531.037,525.788L531.038,534.649L531.035,546.173L528.532,547.799L527.026,548.032L525.263,547.43L524.005,547.198L523.532,545.84L522.425,544.973z"
				},
				{
					"id":"NC",
					"title":"New Caledonia",
					"d":"M940.075,523.484L942.375,525.34L943.833,526.722L942.768,527.445L941.225,526.631L939.219,525.279L937.411,523.692L935.556,521.59L935.168,520.583L936.374,520.625L937.945,521.636L939.179,522.648z"
				},
				{
					"id":"NE",
					"title":"Niger",
					"d":"M481.294,429.884L481.357,427.932L478.125,427.284L478.037,425.899L476.458,424.027L476.082,422.718L476.304,421.322L478.101,421.208L479.138,420.183L482.963,419.935L485.454,419.476L485.693,417.691L487.226,415.75L487.218,409L491.172,407.683L499.29,401.833L508.898,396.081L513.333,397.389L514.91,399.05L516.894,397.927L517.583,402.604L518.632,403.381L518.677,404.33L519.843,405.35L519.233,406.628L518.153,412.608L518.005,416.404L514.429,419.14L513.218,422.94L514.386,424.004L514.379,425.849L516.177,425.915L515.897,427.262L515.105,427.426L515.015,428.335L514.494,428.398L512.597,425.268L511.938,425.153L509.746,426.754L507.575,425.919L506.066,425.752L505.257,426.154L503.613,426.067L501.959,427.286L500.529,427.355L497.136,425.877L495.807,426.58L494.376,426.531L493.325,425.45L490.515,424.38L487.501,424.72L486.771,425.34L486.376,426.986L485.573,428.138L485.378,430.681L483.24,429.042L482.235,429.05z"
				},
				{
					"id":"NG",
					"title":"Nigeria",
					"d":"M499.086,450.079L496.176,451.085L495.111,450.938L494.033,451.564L491.791,451.503L490.29,449.755L489.366,447.73L487.381,445.885L485.274,445.92L482.8,445.918L482.961,441.395L482.89,439.604L483.418,437.826L484.282,436.961L485.643,435.211L485.347,434.45L485.899,433.309L485.269,431.625L485.378,430.681L485.573,428.138L486.376,426.986L486.771,425.34L487.501,424.72L490.515,424.38L493.325,425.45L494.376,426.531L495.807,426.58L497.136,425.877L500.529,427.355L501.959,427.286L503.613,426.067L505.257,426.154L506.066,425.752L507.575,425.919L509.746,426.754L511.938,425.153L512.597,425.268L514.494,428.398L515.015,428.335L516.125,429.471L515.82,429.985L515.671,430.931L513.31,433.128L512.568,434.936L512.173,436.406L511.578,437.035L511.012,439.01L509.513,440.17L509.079,441.594L508.449,442.726L508.187,443.893L506.26,444.838L504.686,443.685L503.623,443.731L501.953,445.373L501.142,445.398L499.808,448.1z"
				},
				{
					"id":"NI",
					"title":"Nicaragua",
					"d":"M234.928,432.306L233.958,431.411L232.647,430.264L232.03,429.304L230.848,428.408L229.443,427.118L229.755,426.676L230.218,427.106L230.43,426.904L231.302,426.787L231.653,426.133L232.064,426.107L232.004,424.698L232.662,424.631L233.247,424.651L233.852,423.885L234.679,424.465L234.967,424.109L235.483,423.768L236.462,422.977L236.508,422.384L236.777,422.409L237.137,421.721L237.43,421.637L237.908,422.077L238.47,422.208L239.089,421.841L239.797,421.839L240.771,421.463L241.159,421.07L242.121,421.129L241.879,421.406L241.736,422.049L242.022,423.102L241.376,424.081L241.076,425.235L240.985,426.497L241.135,427.234L241.206,428.52L240.778,428.799L240.516,430.018L240.708,430.77L240.135,431.497L240.265,432.264L240.695,432.73L240.023,433.332L239.196,433.143L238.731,432.559L237.842,432.322L237.197,432.692L235.35,431.94z"
				},
				{
					"id":"NL",
					"title":"Netherlands",
					"d":"M489.078,287.613L488.907,288.521L489.391,288.679L489.603,289.087L489.688,289.458L490.078,289.597L490.108,289.794L489.76,290.059L489.375,290.083L489.375,290.375L489.642,290.84L489.257,291.292L489.646,291.417L490.438,290.646L490.917,289.938L490.917,289.458L490.75,289.125L490.292,288.896L490.397,288.375L490.292,287.917L490.708,286.917L491.12,286.396L492.284,285.975L494.614,286.108L495.138,287.691L494.439,291.916L493.729,293.627L492.044,293.629L492.515,298.319L490.974,297.283L489.199,295.327L486.601,296.258L484.548,295.906L485.25,294.667L486.167,293.458L487.446,292.209L488.203,290.117L488.448,287.935z"
				},
				{
					"id":"NO",
					"title":"Norway",
					"d":"M554.225,175.606l8.77,6.24l-3.611,2.226l3.072,5.115l-4.771,3.188l-2.265,0.724l1.188,-5.592l-3.598,-3.252l-4.354,2.775l-1.375,5.854l-2.673,3.439l-3.011,-1.87l-3.661,0.384l-3.116,-4.153l-1.681,2.088l-1.739,0.323l-0.412,5.083l-5.284,-1.224l-0.742,4.217l-2.692,-0.025l-1.851,5.243l-2.805,7.867l-4.354,9.5l1.021,2.232l-0.976,2.554l-2.781,-0.109l-1.821,5.906l0.172,8.044l1.792,2.978l-0.928,6.727l-2.333,3.812l-1.236,3.145l-1.881,-3.351l-5.536,6.266l-3.738,1.245l-3.877,-2.715l-1.002,-5.864l-0.887,-13.256l2.582,-3.875l7.403,-5.184l5.536,-6.586l5.133,-9.301l6.737,-13.762l4.696,-5.674l7.705,-9.893l6.153,-3.592l4.613,0.44l4.27,-6.995l5.113,0.381L554.225,175.606z"
				},
				{
					"id":"NP",
					"title":"Nepal",
					"d":"M722.33,382.447L722.113,383.803L722.482,385.794L722.161,387.029L719.826,387.081L716.453,386.354L714.286,386.058L712.669,384.465L708.826,384.059L705.169,382.292L702.525,380.74L699.809,379.538L700.897,376.547L702.677,375.086L703.839,374.313L706.087,375.306L708.918,377.4L710.493,377.86L711.435,379.393L713.613,380.021L715.889,381.413L719.061,382.138z"
				},
				{
					"id":"NZ",
					"title":"New Zealand",
					"d":"M960.377,588.627l0.636,1.531l1.994,-1.503l0.811,1.567l0.003,1.571l-1.043,1.741l-1.833,2.797l-1.435,1.541l1.034,1.856l-2.163,0.048l-2.399,1.465l-0.751,2.568l-1.594,4.027l-2.201,1.802l-1.399,1.159l-2.583,-0.086l-1.815,-1.338l-3.048,-0.284l-0.47,-1.479l1.507,-2.957l3.525,-3.875l1.81,-0.731l2.015,-1.472l2.403,-2.01l1.683,-1.975l1.247,-2.808l1.063,-0.946l0.416,-2.074l1.967,-1.703L960.377,588.627zM964.839,571.614l2.032,3.665l0.059,-2.383l1.266,0.949l0.419,2.651l2.257,1.15l1.895,0.283l1.603,-1.347l1.421,0.407l-0.68,3.151l-0.854,2.093l-2.141,-0.074l-0.749,1.097l0.261,1.561l-0.412,0.678l-1.06,1.974l-1.39,2.532l-2.167,1.487l-0.481,-0.979l-1.169,-0.536l1.617,-3.039l-0.918,-2.012l-3.018,-1.452l0.079,-1.308l2.026,-1.253l0.473,-2.744l-0.13,-2.282l-1.136,-2.344l0.075,-0.613l-1.34,-1.43l-2.206,-3.041l-1.173,-2.409l1.04,-0.266l1.526,1.887l2.182,0.885L964.839,571.614z"
				},
				{
					"id":"OM",
					"title":"Oman",
					"d":"M640.291,403.185l-1.047,2.042l-1.271,-0.156l-0.583,0.708l-0.45,1.504l0.345,1.975l-0.265,0.362l-1.29,-0.01l-1.751,1.1l-0.273,1.43l-0.642,0.618l-1.744,-0.023l-1.098,0.737l0.014,1.18l-1.356,0.81l-1.547,-0.275l-1.875,0.982l-1.296,0.165l-0.915,-2.036l-2.192,-4.841l8.411,-2.957l1.869,-5.972l-1.285,-2.135l0.073,-1.219l0.817,-1.256l0.008,-1.245l1.269,-0.601l-0.496,-0.425l0.229,-1.997l1.433,-0.012l1.257,2.095l1.565,1.108l2.057,0.398l1.66,0.555l1.266,1.74l0.756,1.005l1.004,0.382l-0.006,0.673l-1.021,1.792l-0.448,0.841L640.291,403.185zM633.366,388.64l-0.365,0.562l-0.534,-1.057l0.817,-1.059l0.347,0.271L633.366,388.64z"
				},
				{
					"id":"PA",
					"title":"Panama",
					"d":"M256.885,443.212L255.95,442.402L255.349,440.884L256.042,440.133L255.332,439.939L254.808,439.009L253.411,438.226L252.185,438.405L251.616,439.385L250.483,440.093L249.872,440.191L249.597,440.777L250.935,442.303L250.169,442.662L249.764,443.078L248.459,443.221L247.974,441.543L247.609,442.021L246.684,441.855L246.119,440.724L244.969,440.537L244.241,440.208L243.038,440.212L242.951,440.823L242.629,440.397L242.777,439.839L243.011,439.268L242.901,438.758L243.321,438.424L242.737,438.005L242.721,436.869L243.806,436.616L244.813,437.629L244.755,438.227L245.874,438.354L246.139,438.124L246.909,438.817L248.289,438.613L249.481,437.901L251.184,437.332L252.141,436.488L253.689,436.654L253.585,436.932L255.148,437.028L256.396,437.516L257.311,438.364L258.366,439.143L258.025,439.555L258.676,441.213L258.147,442.048L257.244,441.847z"
				},
				{
					"id":"PE",
					"title":"Peru",
					"d":"M280.132,513.144L279.38,514.645L277.938,515.394L275.127,513.711L274.884,512.512L269.325,509.588L264.297,506.42L262.134,504.643L260.973,502.268L261.433,501.441L259.059,497.691L256.294,492.449L253.645,486.827L252.499,485.545L251.616,483.476L249.438,481.645L247.44,480.51L248.348,479.26L246.989,476.593L247.861,474.636L250.097,472.874L250.429,474.035L249.629,474.7L249.705,475.724L250.864,475.501L251.996,475.803L253.173,477.214L254.758,476.064L255.289,474.181L257.007,471.753L260.378,470.653L263.436,467.735L264.309,465.924L263.917,463.809L264.665,463.544L266.53,464.864L267.425,466.178L268.723,466.896L270.375,469.817L272.462,470.167L274.007,469.43L275.02,469.912L276.703,469.672L278.85,470.978L277.041,473.817L277.878,473.883L279.282,475.367L276.755,475.236L276.379,475.656L274.081,476.194L270.875,478.096L270.671,479.402L269.956,480.376L270.235,481.892L268.541,482.702L268.543,483.887L267.804,484.401L268.971,486.934L270.529,488.648L269.936,489.86L271.797,490.024L272.857,491.532L275.332,491.605L277.632,489.939L277.445,494.239L278.72,494.565L280.302,494.077L282.726,498.657L282.124,499.624L281.985,501.636L281.931,504.079L280.835,505.519L281.337,506.589L280.694,507.561L281.9,509.998z"
				},
				{
					"id":"PG",
					"title":"Papua New Guinea",
					"d":"M912.317,482.425l-0.785,0.281l-1.214,-1.077l-1.228,-1.779l-0.604,-2.131l0.389,-0.271l0.301,0.832l0.85,0.635l1.359,1.775l1.324,0.951L912.317,482.425zM901.391,478.666l-1.469,0.23l-0.442,0.785l-1.533,0.681l-1.439,0.655l-1.489,-0.003l-2.299,-0.813l-1.602,-0.781l0.232,-0.866l2.514,0.409l1.534,-0.219l0.423,-1.341l0.402,-0.069l0.272,1.485l1.6,-0.214l0.791,-0.957l1.565,-0.997l-0.309,-1.646l1.68,-0.053l0.566,0.458l-0.057,1.55L901.391,478.666zM887.957,484.02l2.504,1.844l1.82,2.987l1.606,-0.094l-0.113,1.25l2.165,0.48l-0.841,0.533l2.979,1.19l-0.311,0.819l-1.857,0.198l-0.689,-0.734l-2.409,-0.318l-2.832,-0.426l-2.181,-1.804l-1.591,-1.552l-1.457,-2.465l-3.657,-1.229l-2.375,0.802l-1.712,0.929l0.357,2.078l-2.202,0.97l-1.57,-0.472l-2.9,-0.118l-0.048,-9.157l-0.047,-9.103l4.865,1.921l5.184,1.597l1.932,1.43l1.562,1.405l0.426,1.647l4.672,1.73l0.682,1.486l-2.58,0.302L887.957,484.02zM904.635,475.931l-0.877,0.745l-0.528,-1.649l-0.652,-1.079l-1.27,-0.915l-1.596,-1.19l-2.024,-0.82l0.779,-0.673l1.514,0.781l0.953,0.613l1.178,0.669l1.122,1.172l1.065,0.894L904.635,475.931z"
				},
				{
					"id":"PH",
					"title":"Philippines",
					"d":"M829.595,439.864l0.285,1.869l0.165,1.576l-0.955,2.566l-1.024,-2.859l-1.311,1.424l0.896,2.065l-0.804,1.312l-3.3,-1.625l-0.788,-2.029l0.855,-1.334l-1.776,-1.329l-0.881,1.165l-1.319,-0.108l-2.075,1.566l-0.464,-0.822l1.101,-2.368l1.766,-0.792l1.529,-1.062l0.991,1.275l2.132,-0.771l0.457,-1.257l1.982,-0.075l-0.167,-2.184l2.273,1.34l0.235,1.42L829.595,439.864zM822.882,434.601l-1.008,0.93l-0.878,1.785l-0.881,0.835l-1.727,-1.952l0.577,-0.757l0.704,-0.792l0.31,-1.759l1.546,-0.167l-0.451,1.908l2.075,-2.737L822.882,434.601zM807.522,437.322l-3.73,2.675l1.375,-1.971l2.025,-1.743l1.684,-1.957l1.47,-2.818l0.499,2.314l-1.851,1.559L807.522,437.322zM816.996,430.022l1.684,0.881l1.784,-0.004l-0.055,1.187l-1.298,1.205l-1.781,0.851l-0.099,-1.317l0.199,-1.448L816.996,430.022zM827.144,429.25l0.788,3.175l-2.164,-0.753l0.059,0.953l0.687,1.749l-1.334,0.634l-0.116,-1.992l-0.845,-0.147l-0.438,-1.719l1.649,0.227l-0.036,-1.077l-1.714,-2.176l2.692,0.063L827.144,429.25zM815.998,426.661l-0.744,2.467l-1.2,-1.423l-1.432,-2.179l2.402,0.105L815.998,426.661zM815.42,410.918l1.729,0.838l0.864,-0.764l0.255,0.746l-0.456,1.215l0.957,2.094l-0.738,2.417l-1.653,0.961l-0.441,2.332l0.627,2.294l1.486,0.317l1.24,-0.34l3.502,1.592l-0.267,1.56l0.915,0.687l-0.292,1.316l-2.185,-1.402l-1.036,-1.504l-0.722,1.051l-1.785,-1.715l-2.547,0.424l-1.396,-0.634l0.143,-1.187l0.876,-0.732l-0.837,-0.666l-0.362,1.038l-1.384,-1.655l-0.42,-1.257l-0.104,-2.774l1.129,0.955l0.29,-4.555l0.914,-2.656L815.42,410.918z"
				},
				{
					"id":"PL",
					"title":"Poland",
					"d":"M517.358,296.974L516.209,294.11L516.428,292.547L515.734,290.098L514.716,288.449L515.498,287.205L514.842,284.812L516.758,283.417L521.134,281.201L524.665,279.563L527.463,280.383L527.674,281.56L530.378,281.62L533.832,282.166L538.988,282.094L540.426,282.606L541.099,284.075L541.221,286.165L541.999,287.944L541.982,289.792L540.301,290.732L541.166,292.849L541.219,294.862L542.629,298.753L542.329,299.988L540.938,300.499L538.392,304.108L539.115,306.033L538.502,305.785L535.838,304.137L533.82,304.745L532.496,304.304L530.839,305.223L529.425,303.7L528.272,304.285L528.114,304.025L526.824,301.895L524.739,301.631L524.474,300.264L522.55,299.773L522.132,300.904L520.609,299.999L520.784,298.788L518.688,298.403z"
				},
				{
					"id":"PK",
					"title":"Pakistan",
					"d":"M685.985,351.758L688.057,353.385L688.887,356.046L693.498,357.437L690.79,360.303L687.665,360.807L683.411,359.979L682.037,361.44L683.03,364.386L684.004,366.64L686.268,368.274L683.876,370.177L683.92,372.505L681.197,375.754L679.44,379.005L676.507,382.331L673.251,382.091L670.161,385.386L671.996,386.788L672.315,389.179L673.891,390.745L674.447,393.382L668.277,393.374L666.41,395.411L664.355,394.64L663.519,392.441L661.353,390.097L656.187,390.677L651.631,390.734L647.683,391.167L648.739,387.572L652.783,385.963L652.552,384.521L651.21,384.013L651.133,381.236L648.452,379.84L647.323,377.914L645.936,376.228L650.634,377.865L653.438,377.386L655.114,377.794L655.682,377.092L657.635,377.374L661.278,376.039L661.377,373.289L662.939,371.446L665.027,371.451L665.334,370.537L667.477,370.109L668.514,370.415L669.609,369.491L669.455,367.511L670.646,365.507L672.43,364.663L671.328,362.444L673.995,362.549L674.766,361.335L674.649,360.033L676.046,358.603L675.725,356.899L675.063,355.439L676.699,353.931L679.71,353.2L682.928,352.795L684.353,352.15z"
				},
				{
					"id":"PR",
					"title":"Puerto Rico",
					"d":"M289.407,410.886L290.84,411.145L291.346,411.729L290.627,412.468L288.517,412.45L286.878,412.554L286.715,411.298L287.112,410.869z"
				},
				{
					"id":"PS",
					"title":"Palestinian Territories",
					"d":"M574.918,367.868L574.917,369.882L574.502,370.844L573.184,371.287L573.305,370.426L574.021,369.975L573.317,369.606L573.903,367.41z"
				},
				{
					"id":"PT",
					"title":"Portugal",
					"d":"M449.921,334.562L450.938,333.607L452.083,333.057L452.785,334.898L454.441,334.894L454.921,334.42L456.555,334.552L457.339,336.426L456.043,337.432L456.007,340.307L455.552,340.843L455.439,342.564L454.228,342.863L455.351,345.028L454.577,347.378L455.544,348.435L455.159,349.398L454.12,350.72L454.354,351.881L453.227,352.788L451.749,352.297L450.302,352.682L450.73,349.937L450.467,347.759L449.212,347.431L448.542,346.078L448.765,343.723L449.883,342.408L450.082,340.935L450.667,338.728L450.604,337.16L450.044,335.824z"
				},
				{
					"id":"PY",
					"title":"Paraguay",
					"d":"M299.493,526.99L300.598,523.399L300.668,521.795L302.013,519.184L306.899,518.324L309.503,518.365L312.115,519.879L312.163,520.793L312.992,522.447L312.806,526.512L315.766,527.09L316.91,526.5L318.804,527.315L319.329,528.217L319.59,530.995L319.917,532.167L320.963,532.303L322.015,531.81L323.023,532.363L323.022,534.045L322.642,535.862L322.092,537.645L321.633,540.387L319.09,542.785L316.873,543.29L313.724,542.811L310.896,541.957L313.657,537.225L313.254,535.863L310.366,534.661L306.94,532.399L304.648,531.935z"
				},
				{
					"id":"QA",
					"title":"Qatar",
					"d":"M617.717,392.161L617.531,389.92L618.287,388.296L619.053,387.962L619.901,388.934L619.95,390.743L619.342,392.552L618.564,392.77z"
				},
				{
					"id":"RO",
					"title":"Romania",
					"d":"M538.93,310.861L540.141,309.966L541.875,310.43L543.673,310.445L544.975,311.463L545.932,310.824L548.001,310.423L548.707,309.444L549.89,309.445L550.744,309.854L551.613,311.092L552.502,312.84L554.12,315.282L554.209,317.067L553.914,318.791L554.416,320.617L555.667,321.35L556.984,320.71L558.256,321.393L558.321,322.415L556.962,323.264L556.11,322.895L555.326,327.606L553.677,327.2L551.637,325.788L548.336,326.692L546.945,327.68L542.828,327.476L540.673,326.872L539.587,327.156L538.78,325.558L538.267,324.877L538.917,324.216L538.225,323.728L537.345,324.606L535.71,323.466L535.49,321.838L533.781,320.903L533.467,319.633L531.947,318.054L534.195,317.292L535.891,314.531L537.217,311.733z"
				},
				{
					"id":"RS",
					"title":"Serbia",
					"d":"M533.781,320.903L535.49,321.838L535.71,323.466L537.345,324.606L538.225,323.728L538.917,324.216L538.267,324.877L538.78,325.558L538.088,326.441L538.34,327.856L539.702,329.517L538.633,330.712L538.162,331.922L538.466,332.373L538.005,332.907L536.705,332.97L535.75,333.19L535.657,332.907L535.993,332.457L536.307,331.533L535.909,331.554L535.364,330.849L534.903,330.669L534.536,330.062L534.012,329.824L533.614,329.283L533.111,329.495L532.723,330.765L532.052,331.039L532.283,330.712L531.214,329.919L530.292,329.506L529.883,328.975L529.139,328.314L529.799,328.144L530.208,326.323L528.856,324.823L529.558,323.096L528.542,323.106L529.621,321.618L528.73,320.484L528.049,318.934L530.197,317.875L531.947,318.054L533.467,319.633z"
				},
				{
					"id":"RU",
					"title":"Russia",
					"d":"M1008.267,215.754l-2.78,2.973l-4.596,0.698l-0.069,6.463l-1.123,1.347l-2.625,-0.193l-2.138,-2.264l-3.728,-1.917l-0.627,-2.89l-2.848,-1.102l-3.188,0.875l-1.523,-2.369l0.609,-2.552l-3.358,1.635l1.265,3.194l-1.591,2.833l-0.021,0.036l-3.604,2.885l-3.634,-0.478l2.529,3.442l1.669,5.201l1.295,1.668l0.325,2.532l-0.724,1.602l-5.226,-1.317l-7.837,4.511l-2.493,0.688l-4.29,4.096l-4.07,3.505l-1.03,2.553l-4.011,-3.9l-7.306,4.419l-1.275,-2.078l-2.701,2.394l-3.75,-0.763l-0.903,3.631l-3.364,5.218l0.101,2.137l3.193,1.174l-0.376,7.458l-2.603,0.186l-1.201,4.154l1.167,2.104l-4.903,2.467l-0.973,5.405l-4.181,1.135l-0.84,4.663l-4.042,4.183l-1.036,-3.085l-1.201,-6.693l-1.564,-10.647l1.348,-6.954l2.365,-3.071l0.146,-2.441l4.357,-1.18l5.009,-6.781l4.826,-5.727l5.04,-4.57l2.254,-8.366l-3.406,0.511l-1.685,4.922l-7.111,6.361l-2.297,-7.138l-7.238,1.999l-7.018,9.56l2.315,3.377l-6.258,1.419l-4.335,0.557l0.203,-3.946l-4.358,-0.839l-3.474,2.702l-8.573,-0.941l-9.223,1.62l-9.083,10.33l-10.745,11.777l4.417,0.61l1.379,3.001l2.724,1.055l1.794,-2.378l3.076,0.311l4.048,5.191l0.095,3.924l-2.191,4.512l-0.237,5.266l-1.265,6.848l-4.226,6.013l-0.939,2.817l-3.806,4.662l-3.777,4.528l-1.811,2.283l-3.736,2.245l-1.769,0.049l-1.761,-1.858l-3.764,2.792l-0.438,1.258l-0.393,-0.661l-0.017,-1.929l1.432,-0.103l0.404,-4.553l-0.739,-3.358l2.407,-1.399l3.402,0.703l1.886,-3.888l0.961,-4.462l1.089,-1.511l1.474,-3.761l-4.634,1.239l-2.431,1.647l-4.261,-0.005l-1.135,-3.945l-3.321,-3.035l-4.88,-1.379l-1.037,-4.284l-0.977,-2.731l-1.051,-1.937l-1.733,-4.611l-2.462,-1.711l-4.196,-1.394l-3.718,0.127l-3.484,0.845l-2.315,2.313l1.538,1.095l0.035,2.522l-1.56,1.45l-2.531,4.725l0.026,1.929l-3.952,2.739l-3.365,-1.632l-3.346,0.361l-1.468,-1.457l-1.682,-0.472l-4.106,3.059l-3.691,0.712l-2.577,1.062l-3.532,-0.697l-2.6,0.045l-1.702,-2.203l-2.746,-2.092l-2.81,-0.577l-3.547,0.573l-2.65,0.809l-3.983,-1.841l-0.534,-3.322l-3.297,-1.151l-2.545,-0.527l-3.141,-1.871l-2.904,4.659l1.139,2.6l-2.726,3.034l-4.054,-1.09l-2.799,-0.156l-1.874,-2.042l-2.925,-0.065l-2.438,-1.354l-4.265,2.071l-5.35,3.739l-2.956,0.744l-1.098,0.352l-1.487,-2.634l-3.612,0.579l-1.193,-1.843l-1.96,-0.848l-1.35,-2.545l-1.548,-0.799l-4.029,1.14l-3.862,-2.565l-1.494,2.333l-6.266,-11.576l-3.577,-3.659l1.025,-1.504l-7.026,4.494l-2.689,0.268l0.232,-2.583l-3.602,-1.631l-2.927,1.166l-0.883,-5.012l-5.039,-1.059l-2.521,2.033l-7.016,1.791l-1.369,1.189l-10.492,1.663l-1.285,1.618l2.024,3.208l-2.692,1.204l0.525,1.254l-2.691,2.223l4.544,3.098l-0.702,2.106l-3.938,-0.191l-0.814,1.31l-3.586,-2.293l-4.445,0.089l-2.976,1.868l-3.319,-1.791l-6.181,-3.102l-4.38,0.117l-5.788,4.849l-0.349,3.193l-2.883,-2.532l-2.237,4.77l0.819,0.874l-1.618,3.215l2.38,2.837l2.081,-0.116l1.787,2.76l-0.284,2.102l1.424,0.656l-1.278,2.391l-2.718,0.66l-2.787,4.088l2.548,3.695l-0.276,2.586l3.062,4.456l-1.674,1.506l-0.481,0.945l-1.241,-0.253l-1.927,-2.266l-0.788,-0.126l-1.763,-0.871l-0.858,-1.55l-2.615,-0.794l-1.7,0.597l-0.491,-0.706l-3.818,-1.831l-4.128,-0.622l-2.37,-0.658l-0.342,0.455l-3.575,-3.274l-3.199,-1.477l-2.422,-2.319l2.041,-0.636l2.327,-3.354l-1.568,-1.605l4.132,-1.667l-0.074,-0.899l-2.517,0.663l0.088,-1.832l1.445,-1.159l2.713,-0.306l0.441,-1.395l-0.62,-2.327l1.139,-2.233l-0.033,-1.263l-4.133,-1.409l-1.639,0.047l-1.73,-2.043l-2.151,0.693l-3.561,-1.542l0.061,-0.868l-0.997,-1.926l-2.236,-0.216l-0.232,-1.392l0.7,-0.913l-1.792,-2.575l-2.907,0.442l-0.852,-0.229l-0.708,1.037l-1.047,-0.184l-0.689,-2.937l-0.658,-1.54l0.54,-0.435l2.262,0.162l1.091,-1.022l-0.808,-1.253l-1.891,-0.832l0.169,-0.857l-1.141,-0.87l-1.758,-3.153l0.601,-1.314l-0.274,-2.308l-2.741,-1.183l-1.471,0.593l-0.398,-1.236l-2.952,-1.256l-0.901,-2.989l-0.239,-2.492l-1.351,-1.194l1.201,-1.659l-0.832,-4.962l1.995,-3.133l-0.422,-0.959l3.187,-3.071l-2.938,-2.684l6.003,-7.405l2.604,-3.453l1.055,-3.104l-4.15,-4.256l1.146,-4.145l-2.524,-4.854l1.888,-5.764l-3.261,-7.957l2.587,-5.478l-4.294,-4.99l0.409,-5.404l2.265,-0.724l4.771,-3.188l2.893,-2.813l4.606,4.86l7.678,1.876l10.594,8.646l2.152,3.508l0.185,4.796l-3.113,3.695l-4.578,1.846l-12.517,-5.313l-2.059,0.9l4.571,5.097l0.179,3.154l0.183,6.753l3.61,1.966l2.191,1.657l0.362,-3.107l-1.689,-2.801l1.785,-2.505l6.778,4.099l2.361,-1.593l-1.887,-4.877l6.535,-6.742l2.588,0.404l2.618,2.43l1.633,-4.811l-2.338,-4.283l1.373,-4.406l-2.061,-4.692l7.843,2.442l1.602,4.183l-3.55,0.908l0.019,4.038l2.207,2.438l4.332,-1.541l0.686,-4.611l5.857,-3.525l9.785,-6.543l2.114,0.382l-2.764,4.64l3.478,0.785l2.009,-2.584l5.255,-0.211l4.164,-3.193l3.195,4.621l3.186,-5.087l-2.938,-4.577l1.458,-2.663l8.282,2.443l3.881,2.488l10.161,8.799l1.875,-3.975l-2.85,-4.111l-0.082,-1.677l-3.379,-0.782l0.925,-3.827l-1.5,-6.491l-0.085,-2.737l5.175,-7.99l1.84,-8.419l2.085,-1.878l7.423,2.514l0.585,5.183l-2.658,7.283l1.744,2.779l0.902,5.938l-0.637,11.073l3.093,4.73l-1.203,5.008l-5.492,10.198l3.205,1.024l1.115,-2.514l3.085,-1.815l0.744,-3.553l2.427,-3.489l-1.634,-4.26l1.309,-5.083l-3.066,-0.644l-0.674,-4.418l2.237,-8.278l-3.642,-7.033l5.018,-6.042l-0.648,-6.619l1.398,-0.216l1.473,5.189l-1.105,8.667l3,1.592l-1.278,-6.373l4.692,-3.579l5.819,-0.488l5.181,5.18l-2.493,-7.622l-0.279,-10.282l4.876,-2.021l6.744,0.444l6.075,-1.321l-2.278,-5.381l3.245,-7.016l3.221,-0.3l5.452,-5.513l7.403,-1.514l0.936,-3.153l7.362,-1.082l2.294,2.606l6.293,-6.237l5.151,0.199l0.772,-5.238l2.68,-5.334l6.619,-5.312l4.809,4.208l-3.818,3.131l6.352,1.917l0.757,6.034l2.562,-2.943l8.197,0.163l6.32,5.843l2.251,4.351l-0.698,5.854l-3.102,3.242l-7.368,5.917l-2.106,3.079l3.477,1.433l4.148,2.552l2.523,-1.91l1.431,6.393l1.231,-2.559l4.483,-1.575l8.996,1.646l0.684,4.576l11.722,1.43l0.16,-7.473l5.95,1.742l4.477,-0.054l4.527,5.138l1.291,6.038l-1.659,3.836l3.521,6.982l4.41,3.493l2.705,-9.178l4.498,3.996l4.778,-2.376l5.427,2.716l2.065,-2.475l4.587,1.242l-2.024,-8.398l3.702,-4.067l25.323,6.061l2.387,5.355l7.34,6.653l11.322,-1.623l5.582,1.414l2.334,3.498l-0.341,6.016l3.454,2.286l3.753,-1.641l4.973,-0.211l5.293,1.575l5.314,-0.887l4.884,6.994l3.475,-2.483l-2.268,-5.074l1.249,-3.618l8.945,2.286l5.832,-0.486l8.064,3.843l3.925,3.44l6.869,5.858l7.352,7.341l-0.241,4.437l1.891,1.745l-0.65,-5.146l7.611,1.068L1008.267,215.754zM880.842,306.251l-2.821,-7.684l-1.157,-4.509l0.072,-4.496l-0.971,-4.503l-0.729,-3.15l-1.248,0.673l1.113,2.205l-2.592,2.166l-0.248,6.296l1.643,4.411l-0.123,5.852l-0.649,3.237l0.32,4.537l-0.313,4.015l0.52,3.4l1.838,-3.134l2.125,2.445l0.078,-2.836l-2.732,-4.229l1.725,-6.107L880.842,306.251zM537.823,278.766l-2.936,-0.856l-3.869,1.583l-0.639,2.127l3.453,0.545l5.156,-0.072l-0.225,-1.228l0.299,-1.327L537.823,278.766zM979.946,178.648l3.662,-0.52l2.889,-2.065l0.24,-1.188l-4.056,-2.515l-2.376,-0.019l-0.359,0.371l-3.574,3.645l0.5,2.726L979.946,178.648zM870.068,151.559l-2.66,3.915l0.491,0.518l5.746,1.084l4.251,-0.068l-0.339,-2.569l-3.983,-3.81L870.068,151.559zM894.642,142.031l3.241,-4.248l-7.036,-2.875l-5.227,-1.681l-0.671,3.585l5.211,4.267L894.642,142.031zM869.514,140.337l10.335,0.296l2.205,-8.145l-10.135,-6.071l-7.404,-0.512l-3.699,2.18l-1.507,7.752l5.555,7.013L869.514,140.337zM622.395,166.284l-2.867,1.958l0.41,4.832l5.075,2.348l0.744,3.818l9.161,1.102l1.656,-0.743l-5.363,-7.106l-0.57,-7.516l4.395,-9.143l4.179,-9.819l8.71,-10.168l8.563,-5.338l9.935,-5.74l1.884,-3.706l-1.949,-4.827l-5.457,1.604l-4.802,4.492l-9.332,2.222l-9.257,7.409l-6.271,5.849l0.759,4.87l-6.713,9.029l2.578,1.22l-5.562,8.271L622.395,166.284zM769.869,98.338l0.833,-5.72l-7.107,-8.343l-2.106,-0.985l-2.304,1.696l-5.122,18.604L769.869,98.338zM605.64,69.025l3.037,3.876l3.277,-2.693l0.391,-2.719l2.521,-1.272l3.764,-2.235l1.085,-2.624l-4.159,-3.847l-2.643,2.903l-1.61,4.125l-0.573,-4.649l-4.26,0.211l-5.474,3.152l6.24,0.521L605.64,69.025zM736.889,82.071l4.653,5.73l7.81,4.202l6.118,-1.803l0.691,-13.623l-6.456,-16.04l-5.448,-9.023l-6.065,4.109l-7.28,11.834l3.825,3.27L736.889,82.071z"
				},
				{
					"id":"RW",
					"title":"Rwanda",
					"d":"M560.543,466.545L561.657,468.118L561.495,469.757L560.686,470.11L559.196,469.928L558.337,471.515L556.635,471.296L556.894,469.771L557.279,469.556L557.383,467.898L558.189,467.121L558.868,467.405z"
				},
				{
					"id":"SA",
					"title":"Saudi Arabia",
					"d":"M595.2,417.216L594.836,415.976L593.99,415.098L593.774,413.934L592.326,412.886L590.832,410.425L590.041,408.022L588.102,405.983L586.851,405.495L584.994,402.653L584.67,400.569L584.789,398.783L583.181,395.421L581.866,394.231L580.352,393.599L579.43,391.842L579.583,391.147L578.804,389.547L577.985,388.856L576.89,386.544L575.183,384.021L573.753,381.857L572.357,381.872L572.793,380.133L572.917,379.019L573.265,377.744L576.385,378.252L577.597,377.268L578.268,376.111L580.407,375.666L580.869,374.585L581.796,374.036L579.001,370.78L584.617,369.134L585.151,368.637L588.528,369.529L592.706,371.821L600.612,378.312L605.825,378.567L608.323,378.875L609.021,380.391L611.004,380.309L612.102,383.036L613.481,383.755L613.962,384.857L615.873,386.171L616.043,387.457L615.764,388.491L616.118,389.532L616.924,390.397L617.298,391.408L617.717,392.161L618.564,392.77L619.342,392.552L619.874,393.722L619.981,394.428L621.056,397.508L629.484,399.032L630.049,398.394L631.334,400.529L629.465,406.501L621.054,409.458L612.969,410.587L610.352,411.908L608.343,414.979L607.034,415.465L606.333,414.493L605.258,414.639L602.548,414.347L602.034,414.055L598.798,414.122L598.038,414.386L596.886,413.626L596.144,415.061L596.431,416.289z"
				},
				{
					"id":"SB",
					"title":"Solomon Islands",
					"d":"M929.811,492.747l0.784,0.974l-1.959,-0.018l-1.065,-1.743l1.675,0.685L929.811,492.747zM926.259,491.021l-1.093,0.063l-1.719,-0.286l-0.587,-0.436l0.176,-1.121l1.851,0.444l0.913,0.593L926.259,491.021zM928.58,490.25l-0.423,0.521l-2.078,-2.447l-0.583,-1.683h0.953l1.009,2.254L928.58,490.25zM923.519,486.689l0.119,0.566l-2.197,-1.194l-1.535,-1.01l-1.052,-0.936l0.418,-0.286l1.289,0.674l2.3,1.293L923.519,486.689zM916.968,483.907l-0.559,0.16l-1.226,-0.64l-1.152,-1.153l0.145,-0.467l1.675,1.185L916.968,483.907z"
				},
				{
					"id":"SD",
					"title":"Sudan",
					"d":"M570.481,436.904L570.093,436.848L570.141,435.441L569.804,434.469L568.36,433.351L568.023,431.304L568.36,429.203L567.061,429.007L566.868,429.643L565.184,429.79L565.857,430.621L566.098,432.328L564.558,433.886L563.162,435.927L561.718,436.218L559.359,434.566L558.3,435.15L558.011,435.975L556.567,436.509L556.471,437.091L553.679,437.091L553.294,436.509L551.272,436.412L550.262,436.896L549.491,436.654L548.047,435.004L547.566,434.227L545.544,434.615L544.774,435.927L544.052,438.447L543.089,438.979L542.229,439.286L542.001,439.155L541.028,438.343L540.849,437.466L541.304,436.291L541.296,435.138L539.679,433.367L539.361,432.152L539.395,431.464L538.364,430.626L538.333,428.972L537.745,427.872L536.761,428.037L537.043,426.987L537.77,425.795L537.452,424.608L538.374,423.728L537.789,423.056L538.53,421.277L539.811,419.15L542.229,419.353L542.09,407.744L542.125,406.501L545.349,406.492L545.349,400.529L556.621,400.529L567.5,400.529L578.621,400.529L579.524,403.469L578.91,404.011L579.317,407.07L580.346,410.594L581.415,411.318L582.949,412.402L581.53,414.072L579.465,414.552L578.582,415.446L578.306,417.379L577.098,421.629L577.396,422.782L576.949,425.248L575.809,428.065L574.118,429.478L572.916,431.651L572.634,432.812L571.306,433.606L570.477,436.567z"
				},
				{
					"id":"SE",
					"title":"Sweden",
					"d":"M537.451,217.489L534.732,222.179L535.17,226.195L530.71,231.334L525.295,236.672L523.254,245.084L525.25,249.151L527.931,252.291L525.355,258.517L522.439,259.782L521.37,268.62L519.777,273.378L516.376,272.893L514.789,276.842L511.543,277.068L510.652,272.358L508.305,266.547L506.172,259.046L507.408,255.901L509.741,252.089L510.669,245.362L508.877,242.384L508.705,234.34L510.525,228.434L513.307,228.543L514.282,225.989L513.261,223.757L517.615,214.257L520.419,206.39L522.271,201.147L524.963,201.172L525.705,196.955L530.989,198.179L531.401,193.097L533.14,192.774L536.877,196.576L541.254,201.729L541.328,212.849L542.274,215.549z"
				},
				{
					"id":"SI",
					"title":"Slovenia",
					"d":"M513.964,316.509L516.28,316.823L517.695,315.901L520.147,315.8L520.682,315.111L521.153,315.156L521.698,316.531L519.466,317.607L519.193,319.234L518.219,319.644L518.229,320.76L517.129,320.683L516.175,320.031L515.662,320.705L513.708,320.569L514.332,320.207L513.661,318.5z"
				},
				{
					"id":"SJ",
					"title":"Svalbard and Jan Mayen",
					"d":"M544.576,104.488l-6.263,5.359l-4.947,-3.021l1.935,-3.424l-1.694,-4.343l5.811,-2.782l1.113,5.175L544.576,104.488zM526.428,77.812l9.23,11.292l-7.056,5.66l-1.558,10.086l-2.46,2.49l-1.335,10.505l-3.379,0.478l-6.03,-7.644l2.543,-4.623l-4.203,-3.862l-5.463,-11.823l-2.181,-11.786l7.644,-5.686l1.536,5.561l3.993,-0.217l1.065,-5.435l4.117,-0.563L526.428,77.812zM546.604,66.354l5.495,5.799l-4.158,8.517l-8.132,1.806l-8.269,-2.562l-0.499,-4.322l-4.023,-0.279l-3.068,-7.478l8.658,-4.723l4.071,4.075l2.835,-5.091L546.604,66.354z"
				},
				{
					"id":"SK",
					"title":"Slovakia",
					"d":"M528.114,304.025L528.272,304.285L529.425,303.7L530.839,305.223L532.496,304.304L533.82,304.745L535.838,304.137L538.502,305.785L537.725,306.893L537.178,308.598L536.58,309.028L533.577,307.747L532.658,308.005L532,308.997L530.684,309.521L530.38,309.252L529.015,309.903L527.901,310.027L527.675,310.866L525.322,311.376L524.288,310.922L522.861,309.853L522.582,308.396L522.807,307.861L523.205,306.929L524.447,307L525.404,306.561L525.48,306.165L526.017,305.963L526.2,304.99L526.844,304.804L527.278,304.03z"
				},
				{
					"id":"SL",
					"title":"Sierra Leone",
					"d":"M443.18,444.441L442.425,444.233L440.406,443.102L438.946,441.597L438.455,440.569L438.112,438.488L439.61,437.247L439.934,436.464L440.413,435.854L441.185,435.79L441.839,435.257L444.081,435.26L444.861,436.271L445.469,437.458L445.378,438.279L445.829,439.016L445.797,440.049L446.569,439.888L445.264,441.201L443.999,442.727L443.851,443.543z"
				},
				{
					"id":"SN",
					"title":"Senegal",
					"d":"M428.39,425.157L427.234,422.921L425.835,421.896L427.068,421.349L428.427,419.321L429.093,417.834L430.053,416.903L431.446,417.154L432.814,416.521L434.38,416.488L435.72,417.343L437.581,418.111L439.278,420.24L441.128,422.221L441.256,424.01L441.81,425.652L442.859,426.456L443.099,427.562L442.97,428.451L442.565,428.612L441.036,428.386L440.826,428.704L440.208,428.768L438.192,428.072L436.839,428.042L431.657,427.923L430.906,428.244L429.977,428.152L428.492,428.617L428.032,426.427L430.584,426.488L431.258,426.087L431.76,426.063L432.799,425.402L434.002,426.007L435.22,426.058L436.434,425.415L435.867,424.586L434.943,425.069L434.073,425.056L432.966,424.35L432.077,424.396L431.444,425.075z"
				},
				{
					"id":"SO",
					"title":"Somalia",
					"d":"M618.625,430.431L618.562,429.644L617.498,429.651L616.171,430.626L614.685,430.912L613.393,431.334L612.497,431.391L610.9,431.49L609.898,432.009L608.508,432.196L606.04,433.077L602.988,433.413L600.345,434.138L598.953,434.129L597.688,432.942L597.138,431.769L596.226,431.245L595.193,432.764L594.582,433.769L595.617,435.328L596.651,436.689L597.722,437.696L606.889,441.04L609.248,441.022L601.324,449.438L597.672,449.561L595.173,451.53L593.375,451.582L592.608,452.462L590.158,455.627L590.191,465.775L591.852,468.074L592.485,467.414L593.131,465.945L596.2,462.571L598.813,460.453L603.008,457.687L605.813,455.43L609.111,451.623L611.505,448.494L613.911,444.388L615.645,440.801L616.994,437.654L617.784,434.599L618.377,433.575L618.366,432.084z"
				},
				{
					"id":"SR",
					"title":"Suriname",
					"d":"M315.02,446.719L318.379,447.28L318.681,446.775L320.948,446.573L323.962,447.325L322.503,449.73L322.725,451.642L323.826,453.296L323.335,454.497L323.089,455.772L322.374,456.945L320.768,456.354L319.443,456.639L318.312,456.391L318.032,457.198L318.502,457.752L318.25,458.322L316.725,458.094L315.013,455.67L314.645,454.096L313.747,454.093L312.504,452.066L313.021,450.625L312.87,449.966L314.572,449.236z"
				},
				{
					"id":"SS",
					"title":"South Sudan",
					"d":"M570.481,436.904L570.514,439.104L570.095,439.964L568.606,440.033L567.651,441.635L569.374,441.837L570.794,443.206L571.286,444.328L572.566,444.979L574.224,448.026L572.323,449.869L570.598,451.538L568.874,452.822L566.901,452.815L564.644,453.469L562.861,452.845L561.707,453.605L559.238,451.75L558.572,450.558L557.011,451.148L555.714,450.965L554.964,451.434L553.705,451.095L552.006,448.788L551.555,447.901L549.459,446.793L548.751,445.112L547.583,443.898L545.697,442.436L545.671,441.522L544.136,440.386L542.229,439.286L543.089,438.979L544.052,438.447L544.774,435.927L545.544,434.615L547.566,434.227L548.047,435.004L549.491,436.654L550.262,436.896L551.272,436.412L553.294,436.509L553.679,437.091L556.471,437.091L556.567,436.509L558.011,435.975L558.3,435.15L559.359,434.566L561.718,436.218L563.162,435.927L564.558,433.886L566.098,432.328L565.857,430.621L565.184,429.79L566.868,429.643L567.061,429.007L568.36,429.203L568.023,431.304L568.36,433.351L569.804,434.469L570.141,435.441L570.093,436.848z"
				},
				{
					"id":"SV",
					"title":"El Salvador",
					"d":"M229.094,425.76L228.783,426.434L227.159,426.391L226.149,426.117L224.99,425.548L223.432,425.37L222.638,424.754L222.725,424.334L223.686,423.609L224.212,423.292L224.063,422.953L224.719,422.776L225.546,423.018L226.15,423.591L226.997,424.052L227.101,424.438L228.331,424.097L228.908,424.301L229.289,424.612z"
				},
				{
					"id":"SY",
					"title":"Syria",
					"d":"M584.021,364.596L578.53,368.136L575.406,366.825L575.353,366.802L575.733,366.297L575.69,364.934L576.378,363.101L577.907,361.832L577.448,360.505L576.187,360.332L575.925,357.724L576.611,356.312L577.362,355.556L578.113,354.799L578.265,352.86L579.183,353.538L582.27,352.568L583.762,353.225L586.068,353.214L589.295,351.904L590.806,351.963L593.995,351.418L592.558,353.598L591.023,354.455L591.288,356.976L590.228,361.097z"
				},
				{
					"id":"SZ",
					"title":"Swaziland",
					"d":"M565.177,540.737L564.606,542.126L562.965,542.465L561.292,540.768L561.266,539.69L562.031,538.523L562.296,537.621L563.106,537.4L564.521,537.967L564.937,539.359z"
				},
				{
					"id":"TD",
					"title":"Chad",
					"d":"M515.897,427.262L516.177,425.915L514.379,425.849L514.386,424.004L513.218,422.94L514.429,419.14L518.005,416.404L518.153,412.608L519.233,406.628L519.843,405.35L518.677,404.33L518.631,403.381L517.583,402.604L516.894,397.927L519.725,396.269L530.907,402.045L542.09,407.744L542.229,419.353L539.811,419.15L538.53,421.277L537.789,423.056L538.374,423.728L537.452,424.608L537.77,425.795L537.043,426.987L536.761,428.037L537.745,427.872L538.333,428.972L538.364,430.626L539.395,431.464L539.361,432.152L537.586,432.637L536.163,433.785L534.136,436.871L531.498,438.179L528.79,438.003L527.999,438.263L528.277,439.255L526.814,440.239L525.624,441.337L522.094,442.413L521.394,441.776L520.929,441.722L520.413,442.444L518.094,442.656L518.534,441.895L517.649,439.955L517.255,438.789L516.034,438.311L514.378,436.664L514.988,435.33L516.266,435.614L517.057,435.412L518.623,435.44L517.097,432.865L517.199,430.979L517.012,429.09z"
				},
				{
					"id":"TF",
					"title":"French Southern and Antarctic Lands",
					"d":"M668.536,619.028L670.345,620.364L672.994,620.897L673.093,621.71L672.308,623.668L668.004,623.949L667.934,621.656L668.348,619.896z"
				},
				{
					"id":"TG",
					"title":"Togo",
					"d":"M480.483,446.246L478.226,446.843L477.6,445.859L476.852,444.081L476.629,442.684L477.25,440.151L476.546,439.124L476.279,436.902L476.284,434.849L475.113,433.388L475.32,432.504L477.775,432.564L477.418,434.057L478.275,434.893L479.249,435.884L479.355,437.27L479.92,437.852L479.792,444.312z"
				},
				{
					"id":"TH",
					"title":"Thailand",
					"d":"M762.886,429.182L760.369,427.873L757.971,427.926L758.382,425.679L755.912,425.696L755.69,428.839L754.177,432.993L753.266,435.495L753.458,437.539L755.284,437.628L756.422,440.2L756.926,442.634L758.49,444.242L760.189,444.568L761.642,446.023L760.726,447.173L758.874,447.508L758.654,446.07L756.366,444.842L755.879,445.342L754.771,444.266L754.291,442.876L752.802,441.29L751.443,439.955L750.982,441.608L750.451,440.046L750.757,438.288L751.583,435.58L752.941,432.669L754.481,430.019L753.385,427.418L753.429,426.09L753.108,424.49L751.238,422.206L750.569,420.76L751.537,420.227L752.563,417.709L751.415,415.792L749.636,413.662L748.28,411.09L749.464,410.556L750.742,407.366L752.722,407.233L754.357,405.947L755.964,405.26L757.177,406.177L757.338,407.957L759.232,408.093L758.543,411.197L758.609,413.823L761.564,412.077L762.404,412.594L764.046,412.509L764.611,411.489L766.731,411.69L768.864,414.068L769.039,416.943L771.309,419.47L771.184,421.913L770.271,423.21L767.643,422.797L764.018,423.347L762.222,425.732z"
				},
				{
					"id":"TJ",
					"title":"Tajikistan",
					"d":"M674.366,340.624L673.34,341.75L670.288,341.14L670.022,343.236L673.063,342.955L676.526,344.129L681.828,343.582L682.539,346.905L683.46,346.546L685.163,347.358L685.065,348.739L685.486,350.751L682.594,350.745L680.663,350.486L678.916,352.057L677.672,352.404L676.694,353.137L675.585,351.994L675.846,349.038L674.998,348.869L675.303,347.785L673.785,346.975L672.578,348.213L672.281,349.641L671.85,350.159L670.174,350.085L669.27,351.694L668.324,351.017L666.295,352.143L665.438,351.716L667.014,348.147L666.408,345.489L664.351,344.632L665.078,343.041L667.419,343.211L668.751,341.202L669.643,338.849L673.392,337.991L672.808,339.7L673.209,340.719z"
				},
				{
					"id":"TL",
					"title":"Timor-Leste",
					"d":"M825.646,488.254L825.977,487.589L828.39,486.956L830.346,486.86L831.223,486.509L832.284,486.857L831.253,487.621L828.33,488.855L825.982,489.666L825.931,488.81z"
				},
				{
					"id":"TM",
					"title":"Turkmenistan",
					"d":"M646.879,356.901L646.633,353.995L644.543,353.87L641.339,350.775L639.1,350.391L635.999,348.6L634.005,348.273L632.774,348.934L630.899,348.831L628.905,350.848L626.441,351.527L625.92,349.036L626.327,345.308L624.141,344.089L624.86,341.606L622.999,341.394L623.619,338.3L626.264,339.205L628.727,338.024L626.685,335.795L625.881,333.65L623.624,334.609L623.338,337.342L622.462,334.927L623.701,333.677L626.884,332.892L628.779,333.948L630.741,336.88L632.18,336.698L635.343,336.647L634.883,334.767L637.278,333.472L639.64,331.271L643.418,333.273L643.718,336.265L644.791,337.026L647.822,336.855L648.763,337.529L650.142,341.32L653.348,343.827L655.177,345.522L658.109,347.273L661.839,348.793L661.762,350.952L660.917,350.843L659.594,349.902L659.154,351.154L656.791,351.832L656.231,354.617L654.651,355.669L652.438,356.188L651.853,357.745L649.738,358.201z"
				},
				{
					"id":"TN",
					"title":"Tunisia",
					"d":"M501.839,374.686L500.644,368.829L498.915,367.497L498.891,366.695L496.598,364.711L496.351,362.184L498.079,360.297L498.739,357.485L498.294,354.197L498.864,352.41L501.917,350.997L503.88,351.418L503.798,353.186L506.176,351.901L506.376,352.573L504.974,354.278L504.955,355.877L505.926,356.733L505.557,359.692L503.711,361.396L504.244,363.232L505.694,363.289L506.399,364.881L507.466,365.402L507.307,367.951L505.94,368.898L505.077,369.951L503.152,371.213L503.45,372.564L503.208,373.936z"
				},
				{
					"id":"TR",
					"title":"Turkey",
					"d":"M578.752,336.599l4.022,1.435l3.266,-0.571l2.414,0.33l3.311,-1.94l2.987,-0.177l2.701,1.827l0.476,1.301l-0.27,1.788l2.085,0.908l1.104,1.063l-1.92,1.032l0.875,4.112l-0.549,1.1l1.534,2.822l-1.344,0.591l-0.985,-0.892l-3.261,-0.453l-1.204,0.545l-3.189,0.544l-1.511,-0.059l-3.227,1.31l-2.307,0.011l-1.492,-0.656l-3.087,0.969l-0.917,-0.677l-0.152,1.938l-0.751,0.757l-0.751,0.755l-1.031,-1.566l1.062,-1.304l-1.71,0.296l-2.345,-0.801l-1.928,1.999l-4.255,0.389l-2.27,-1.861l-3.022,-0.117l-0.646,1.44l-1.938,0.411l-2.711,-1.847l-3.061,0.063l-1.661,-3.484l-2.048,-1.964l1.364,-2.778l-1.777,-1.723l3.11,-3.484l4.318,-0.147l1.178,-2.806l5.344,0.491l3.371,-2.416l3.267,-1.061l4.639,-0.08L578.752,336.599zM551.497,338.986l-2.34,1.976l-0.882,-1.708l0.039,-0.761l0.666,-0.414l0.868,-2.325l-1.366,-0.99l2.856,-1.183l2.414,0.505l0.333,1.441l2.447,1.204l-0.51,0.909l-3.33,0.204L551.497,338.986z"
				},
				{
					"id":"TT",
					"title":"Trinidad and Tobago",
					"d":"M302.312,433.238L303.923,432.869L304.512,432.968L304.4,435.079L302.059,435.39L301.554,435.135L302.367,434.357z"
				},
				{
					"id":"TW",
					"title":"Taiwan",
					"d":"M816.7,393.266L815.012,398.145L813.81,400.618L812.332,398.072L812.013,395.823L813.663,392.825L815.907,390.497L817.187,391.415z"
				},
				{
					"id":"TZ",
					"title":"Tanzania",
					"d":"M570.314,466.031L570.788,466.337L580.955,472.015L581.146,473.633L585.17,476.425L583.876,479.872L584.042,481.459L585.837,482.481L585.921,483.211L585.149,484.907L585.31,485.762L585.126,487.106L586.105,488.873L587.266,491.659L588.295,492.278L586.064,493.921L582.998,495.023L581.316,494.977L580.317,495.829L578.365,495.902L577.633,496.262L574.264,495.461L572.154,495.69L571.369,491.833L570.418,490.514L569.854,489.733L567.105,489.207L565.514,488.359L563.732,487.885L562.615,487.413L561.443,486.696L559.929,483.155L558.303,481.584L557.742,479.958L558.022,478.503L557.518,475.931L558.677,475.798L559.695,474.786L560.786,473.331L561.478,472.747L561.452,471.84L560.848,471.208L560.686,470.11L561.495,469.757L561.657,468.118L560.543,466.545L561.527,466.211L564.601,466.247z"
				},
				{
					"id":"UA",
					"title":"Ukraine",
					"d":"M564.376,292.494L565.423,292.678L566.132,291.641L566.983,291.87L569.891,291.428L571.682,294.003L570.982,294.916L571.214,296.308L573.45,296.524L574.447,298.451L574.386,299.319L577.947,300.861L580.099,300.168L581.829,302.211L583.468,302.165L587.601,303.573L587.634,304.836L586.495,307.069L587.114,309.396L586.673,310.791L583.96,311.097L582.515,312.256L582.426,314.088L580.188,314.416L578.322,315.738L575.697,315.953L573.282,317.466L571.958,318.496L573.446,319.966L574.818,320.929L577.678,320.689L577.13,322.107L574.061,322.792L570.254,325.064L568.695,324.268L569.313,322.417L566.25,321.257L566.745,320.494L569.908,318.858L569.515,318.042L569.063,318.453L568.617,318.243L564.259,317.222L564.066,315.708L561.468,316.209L560.427,318.437L558.256,321.393L556.984,320.71L555.667,321.35L554.416,320.617L555.122,320.184L555.611,318.809L556.379,317.523L556.181,316.799L556.767,316.475L557.043,317.036L558.695,317.155L559.438,316.855L558.915,316.444L559.113,315.837L558.134,314.799L557.729,313.082L556.708,312.406L556.909,310.999L555.642,309.875L554.489,309.718L552.422,308.409L550.559,308.826L549.89,309.445L548.707,309.444L548.001,310.423L545.932,310.824L544.975,311.463L543.673,310.445L541.875,310.43L540.141,309.966L538.93,310.861L538.734,309.741L537.178,308.598L537.725,306.893L538.502,305.785L539.115,306.033L538.392,304.108L540.938,300.499L542.329,299.988L542.629,298.753L541.219,294.862L542.56,294.687L544.096,293.462L546.269,293.361L549.101,293.716L552.23,294.8L554.438,294.89L555.493,295.539L556.544,294.756L557.279,295.806L559.81,295.591L560.925,296.024L561.105,293.759L561.969,292.764z"
				},
				{
					"id":"UG",
					"title":"Uganda",
					"d":"M564.601,466.247L561.527,466.211L560.543,466.545L558.868,467.405L558.189,467.121L558.213,465.021L558.862,463.957L559.021,461.721L559.61,460.426L560.682,458.974L561.759,458.233L562.661,457.244L561.537,456.867L561.707,453.605L562.861,452.845L564.644,453.469L566.901,452.815L568.874,452.822L570.598,451.538L571.927,453.476L572.255,454.876L573.489,458.076L572.468,460.107L571.089,461.951L570.286,463.079L570.314,466.031z"
				},
				{
					"id":"US",
					"title":"United States",
					"d":"M109.249,279.8L109.249,279.8l-1.542,-1.834l-2.471,-1.569l-0.793,-4.356l-3.615,-4.131l-1.511,-4.938l-2.692,-0.343l-4.458,-0.13l-3.286,-1.535l-5.797,-5.643l-2.685,-1.05l-4.905,-1.993l-3.882,0.478l-5.514,-2.59l-3.333,-2.435l-3.112,1.213l0.578,3.928l-1.55,0.358l-3.244,1.161l-2.468,1.863l-3.107,1.163l-0.401,-3.245l1.261,-5.531l2.979,-1.771l-0.769,-1.456l-3.574,3.218l-1.914,3.771l-4.04,3.947l2.052,2.647l-2.65,3.849l-3.014,2.207l-2.806,1.592l-0.694,2.287l-4.377,2.634l-0.886,2.363l-3.281,2.127l-1.924,-0.381l-2.617,1.377l-2.845,1.669l-2.332,1.626l-4.812,1.377l-0.439,-0.809l3.067,-2.268l2.743,-1.513l2.989,-2.71l3.478,-0.565l1.383,-2.063l3.886,-3.053l0.626,-1.032l2.07,-1.833l0.484,-4l1.426,-3.174l-3.233,1.636l-0.904,-0.927l-1.518,1.954l-1.831,-2.73l-0.756,1.936l-1.048,-2.695l-2.803,2.167l-1.721,-0.004l-0.242,-3.232l0.507,-2.02l-1.806,-1.982l-3.646,1.07l-2.366,-2.631l-1.918,-1.359l-0.012,-3.25l-2.161,-2.483l1.085,-3.405l2.286,-3.368l1,-3.154l2.269,-0.454l1.924,0.992l2.262,-3.007l2.036,0.541l2.137,-1.955l-0.521,-2.917l-1.57,-1.163l2.076,-2.519l-1.722,0.075l-2.975,1.426l-0.854,1.434l-2.211,-1.432l-3.966,0.729l-4.106,-1.563l-1.177,-2.654l-3.548,-3.906l3.94,-2.867l6.254,-3.407h2.305l-0.382,3.484l5.918,-0.269l-2.276,-4.339l-3.449,-2.722l-1.994,-3.639l-2.69,-3.166l-3.853,-2.385l1.569,-4.028l4.974,-0.253l3.539,-3.585l0.667,-3.917l2.864,-3.911l2.731,-0.955l5.315,-3.758l2.578,0.572l4.315,-4.609l4.242,1.831l2.029,3.869l1.246,-1.648l4.738,0.513l-0.168,1.951l4.29,1.428l2.86,-0.838l5.907,2.635l5.393,0.776l2.159,1.068l3.731,-1.335l4.253,2.462l3.046,1.135l-0.019,27.648l-0.015,35.43l2.761,0.167l2.731,1.556l1.958,2.436l2.491,3.596l2.728,-3.054l2.815,-1.793l1.488,2.855l1.889,2.229l2.567,2.424l1.753,3.794l2.867,5.881l4.767,3.204l0.078,3.124L109.249,279.8zM285.179,314.235l-1.245,-1.187l-1.88,0.7l-0.932,-1.083l-2.139,3.097l-0.855,3.148l-0.995,1.82l-1.191,0.616l-0.897,0.2l-0.281,0.978l-5.167,0.003l-4.26,0.027l-1.265,0.726l-2.87,2.73l0.287,0.544l0.166,1.506l-2.103,1.27l-2.297,-0.318l-2.204,-0.143l-1.328,0.439l0.249,1.15l0,0.002l0.055,0.373l-2.416,2.265l-2.115,1.089l-1.443,0.506l-1.661,1.035l-2.03,0.496l-1.398,-0.191l-1.729,-0.772l0.961,-1.449l0.617,-1.321l1.318,-2.091l-0.14,-1.571l-0.505,-2.241l-1.037,-0.388l-1.738,1.705l-0.557,-0.032l-0.144,-0.974l1.542,-1.556l0.256,-1.786l-0.228,-1.794l-2.075,-1.552l-2.383,-0.8l-0.392,1.518l-0.618,0.405l-0.496,1.953l-0.26,-1.325l-1.121,0.947l-0.7,1.321l-0.731,1.916l-0.14,1.645l0.93,2.376l-0.077,2.508l-1.138,1.836l-0.568,0.518l-0.757,0.412l-0.953,0.021l-0.258,-0.253l-0.755,-1.975l-0.022,-0.982l0.075,-0.937l-0.352,-1.87l0.533,-2.181l0.633,-2.713l1.455,-3.035l-0.422,0.014l-2.06,2.543l-0.38,-0.464l1.099,-1.422l1.672,-2.573l1.907,-0.361l2.187,-0.804l2.205,0.424l0.094,0.018l2.47,-0.363l-1.395,-1.609l-0.752,-0.125l-0.855,-0.164l-0.589,-1.14l-2.755,0.356l-2.488,0.905l-1.975,-1.551l-1.589,-0.521l0.901,-2.17l-2.475,1.365l-2.25,1.328l-2.165,1.037l-1.719,-1.401l-2.809,0.851l0.009,-0.599l1.903,-1.73l1.991,-1.654l2.86,-1.375l-3.449,-1.089l-2.271,0.545l-2.72,-1.303l-2.863,-0.672l-1.958,-0.26l-0.872,-0.718l-0.498,-2.345l-0.949,0.021l-0.008,1.644l-5.803,-0.003l-9.593,0.003l-9.528,0l-8.417,0h-8.412h-8.271h-8.546h-2.756h-8.324h-7.963l0.954,3.466l0.448,3.41l-0.693,1.087l-1.494,-3.911l-4.055,-1.425l-0.339,0.82l0.817,1.938l0.886,3.525l0.506,5.416l-0.341,3.591l-0.341,3.535l-1.096,3.614l0.895,2.898l0.098,3.202l-0.615,3.055l1.494,1.992l0.387,2.945l2.17,2.991l1.237,1.169l-0.1,0.817l2.335,4.851l2.72,3.452l0.341,1.866l0.715,0.547l2.605,0.333l1.003,0.913l1.573,0.169l0.307,0.965l1.308,0.401l1.817,1.92l0.472,1.696l3.186,-0.255l3.561,-0.359l-0.263,0.648l4.234,1.604l6.396,2.31l5.576,-0.023l2.223,-0.001l0.006,-1.351l4.857,0.001l1.022,1.162l1.434,1.032l1.666,1.429l0.93,1.689l0.698,1.769l1.449,0.967l2.328,0.958l1.766,-2.528l2.292,-0.063l1.976,1.279l1.407,2.184l0.969,1.859l1.654,1.797l0.617,2.195l0.785,1.466l2.187,0.963l1.991,0.682l1.093,-0.093l-0.533,-1.055l-0.14,-1.495l0.028,-2.161l0.645,-1.416l1.531,-1.509l2.787,-1.369l2.552,-2.367l2.359,-0.75l1.744,-0.225l2.04,0.743l2.445,-0.4l2.093,1.692l2.035,0.1l1.052,-0.606l1.041,0.472l0.534,-0.42l-0.595,-0.632l0.045,-1.302l-0.505,-0.856l1.159,-0.504l2.138,-0.223l2.488,0.357l3.169,-0.406l1.758,0.799l1.361,1.502l0.502,0.16l2.829,-1.46l1.094,0.494l2.186,2.682l0.785,1.751l-0.576,2.101l0.421,1.232l1.304,2.397l1.486,2.675l1.065,0.712l0.442,1.354l1.38,0.374l0.838,-0.389l0.699,-1.887l0.122,-1.207l0.088,-2.102l-1.328,-3.646l-0.016,-1.369l-1.246,-2.253l-0.936,-2.745l-0.496,-2.246l0.433,-2.315l1.321,-1.945l1.581,-1.571l3.078,-2.156l0.401,-1.121l1.419,-1.232l1.4,-0.215l1.843,-1.98l2.901,-1.006l1.782,-2.534l-0.394,-3.455l-0.291,-1.205l-0.805,-0.241l-0.12,-3.346l-1.93,-1.143l1.853,0.557l-0.598,-2.26l0.54,-1.552l0.329,2.974l1.432,1.356l-0.867,2.398l0.255,0.139l1.578,-2.815l0.899,-1.381l-0.042,-1.35l-0.696,-0.639l-0.583,-1.941l0.92,0.903l0.616,0.188l0.208,0.924l2.04,-2.779l0.605,-2.622l-0.825,-0.168l0.854,-1.02l-0.083,0.452l1.786,-0.007l3.925,-1.106l-0.831,-0.702l-4.118,0.697l2.337,-1.073l1.63,-0.184l1.22,-0.186l2.074,-0.65l1.347,0.073l1.893,-0.605l0.224,-1.07l-0.841,-0.835l0.294,1.372l-1.164,-0.094l-0.925,-1.995l0.028,-2.013l0.475,-0.859l1.484,-2.283l2.961,-1.146l2.881,-1.344l2.994,-1.9l-0.484,-1.295l-1.833,-2.251L285.179,314.235zM45.622,263.786l-1.497,0.802l-2.547,1.858l0.434,2.421l1.434,1.321l2.8,-1.955l2.426,-2.465l-1.188,-1.627L45.622,263.786zM0,235.225l2.042,-1.258l0.231,-0.677L0,232.608V235.225zM8.502,250.587l-2.769,0.967l1.702,1.524l1.838,1.042l1.721,-0.867l-0.268,-2.154L8.502,250.587zM105.845,283.087l-2.691,0.381l-1.318,-0.62l-0.167,1.518l0.519,2.074l1.415,1.456l1.036,2.133l1.689,2.097l1.118,0.009l-2.44,-3.702L105.845,283.087zM37.131,403.772l-0.997,-0.284l-0.274,0.256l0.025,0.186l0.322,0.243l0.483,0.627l0.94,-0.213l0.234,-0.357L37.131,403.772zM34.136,403.233l1.502,0.087l0.087,-0.323l-1.38,-0.128L34.136,403.233zM40.026,406.522l-0.498,-0.257l-1.074,-0.501l-0.213,-0.055l-0.163,0.277l0.193,0.583l-0.487,0.483l-0.14,0.33l0.464,1.077l-0.08,0.825l0.696,0.422l0.41,-0.493l0.897,-0.461l1.096,-0.631l0.067,-0.164l-0.714,-1.037L40.026,406.522zM32.174,401.379l-0.75,0.414l0.109,0.12l0.356,0.679l0.976,0.105l0.201,0.039l0.152,-0.173l-0.81,-0.99L32.174,401.379zM27.769,399.818l-0.428,0.295l-0.145,0.219l0.944,0.548l0.333,-0.297l-0.058,-0.701L27.769,399.818z"
				},
				{
					"id":"UY",
					"title":"Uruguay",
					"d":"M313.681,551.79L315.5,551.446L318.313,553.95L319.354,553.855L322.24,555.944L324.439,557.759L326.061,560.007L324.825,561.585L325.601,563.48L324.388,565.598L321.221,567.484L319.151,566.804L317.634,567.168L315.042,565.711L313.14,565.82L311.432,563.954L311.649,561.789L312.258,561.047L312.23,557.75L312.98,554.384z"
				},
				{
					"id":"UZ",
					"title":"Uzbekistan",
					"d":"M661.762,350.952L661.839,348.793L658.109,347.273L655.177,345.522L653.348,343.827L650.142,341.32L648.763,337.529L647.822,336.855L644.791,337.026L643.718,336.265L643.418,333.273L639.64,331.271L637.278,333.472L634.883,334.767L635.343,336.647L632.18,336.698L632.069,322.571L639.287,320.224L639.811,320.57L644.157,323.407L646.451,324.891L649.129,328.389L652.417,327.828L657.226,327.526L660.582,330.333L660.373,334.134L661.739,334.16L662.31,337.219L665.875,337.339L666.644,339.09L667.688,339.066L668.915,336.417L672.613,333.808L674.221,333.111L675.054,333.482L672.7,335.911L674.77,337.312L676.767,336.385L680.09,338.339L676.499,340.984L674.366,340.624L673.209,340.719L672.808,339.7L673.392,337.991L669.643,338.849L668.751,341.202L667.419,343.211L665.078,343.041L664.351,344.632L666.408,345.489L667.014,348.147L665.438,351.716L663.323,350.975z"
				},
				{
					"id":"VE",
					"title":"Venezuela",
					"d":"M275.25,430.351L275.17,431.023L273.524,431.354L274.438,432.644L274.404,434.126L273.167,435.77L274.229,438.011L275.438,437.827L276.067,435.786L275.198,434.79L275.056,432.645L278.548,431.49L278.159,430.15L279.143,429.251L280.149,431.251L282.115,431.297L283.937,432.881L284.047,433.82L286.564,433.845L289.56,433.553L291.166,434.822L293.31,435.171L294.883,434.287L294.915,433.574L298.388,433.403L301.748,433.363L299.367,434.2L300.325,435.537L302.567,435.749L304.693,437.138L305.14,439.397L306.601,439.334L307.7,439.998L305.478,441.65L305.233,442.675L306.193,443.717L305.497,444.243L303.771,444.693L303.827,445.987L303.067,446.758L304.965,448.882L305.336,449.671L304.311,450.737L301.175,451.783L299.158,452.216L298.349,452.876L296.12,452.178L294.044,451.821L293.518,452.078L294.773,452.802L294.66,454.672L295.049,456.429L297.425,456.668L297.576,457.254L295.573,458.047L295.248,459.227L294.093,459.684L292.008,460.334L291.465,461.187L289.285,461.367L287.742,459.894L286.887,457.115L286.141,456.141L285.124,455.526L286.545,454.138L286.448,453.513L285.651,452.684L285.087,450.828L285.307,448.823L285.933,447.884L286.438,446.376L285.446,445.895L283.848,446.214L281.828,446.064L280.695,446.364L278.722,443.951L277.093,443.594L273.487,443.864L272.819,442.885L272.129,442.65L272.031,442.064L272.364,441.023L272.142,439.89L271.523,439.271L271.164,437.975L269.717,437.786L270.494,436.134L270.837,434.115L271.652,433.062L272.737,432.248L273.449,430.828z"
				},
				{
					"id":"VN",
					"title":"Vietnam",
					"d":"M778.21,401.873L774.466,404.43L772.13,407.236L771.514,409.287L773.658,412.385L776.28,416.2L778.824,417.994L780.528,420.318L781.813,425.641L781.434,430.662L779.096,432.533L775.885,434.358L773.598,436.716L770.102,439.342L769.083,437.534L769.871,435.621L767.791,434.013L770.218,432.871L773.161,432.665L771.93,430.944L776.643,428.753L776.988,425.327L776.338,423.413L776.848,420.533L776.142,418.49L774.021,416.471L772.253,413.903L769.923,410.438L766.563,408.676L767.368,407.613L769.16,406.837L768.073,404.245L764.621,404.222L763.362,401.505L761.724,399.129L763.229,398.393L765.465,398.408L768.19,398.059L770.58,396.444L771.932,397.582L774.495,398.134L774.052,399.873L775.387,401.095z"
				},
				{
					"id":"VU",
					"title":"Vanuatu",
					"d":"M945.865,509.898l-0.925,0.382l-0.939,-1.272l0.104,-0.777L945.865,509.898zM943.799,505.463l0.455,2.329l-0.754,-0.363l-0.584,0.157l-0.401,-0.799l-0.059,-2.21L943.799,505.463z"
				},
				{
					"id":"YE",
					"title":"Yemen",
					"d":"M624.161,416.335L622.134,417.116L621.591,418.404L621.524,419.391L618.733,420.611L614.253,421.957L611.742,423.986L610.508,424.144L609.667,423.974L608.028,425.165L606.241,425.716L603.887,425.865L603.179,426.028L602.566,426.783L601.831,426.992L601.397,427.719L600.009,427.656L599.113,428.043L597.173,427.898L596.443,426.228L596.523,424.662L596.065,423.815L595.517,421.687L594.711,420.501L595.272,420.361L594.984,419.04L595.324,418.481L595.2,417.216L596.431,416.289L596.144,415.061L596.886,413.626L598.038,414.386L598.798,414.122L602.034,414.055L602.548,414.347L605.258,414.639L606.333,414.493L607.034,415.465L608.343,414.979L610.352,411.908L612.969,410.587L621.054,409.458L623.246,414.299z"
				},
				{
					"id":"ZA",
					"title":"South Africa",
					"d":"M563.633,548.709l-0.548,0.462l-1.188,1.631l-0.782,1.658l-1.59,2.327l-3.169,3.382l-1.979,1.984l-2.117,1.514l-2.931,1.297l-1.429,0.174l-0.362,0.933l-1.704,-0.497l-1.388,0.64l-3.039,-0.648l-1.699,0.41l-1.161,-0.176l-2.892,1.33l-2.394,0.535l-1.732,1.282l-1.275,0.082l-1.187,-1.209l-0.947,-0.062l-1.208,-1.507l-0.133,0.467l-0.373,-0.905l0.016,-1.964l-0.911,-2.229l0.905,-0.603l-0.073,-2.527l-1.836,-3.053l-1.409,-2.737l-0.004,-0.009l-2.013,-4.153l1.343,-1.567l1.107,0.867l0.473,1.358l1.258,0.232l1.763,0.603l1.506,-0.233l2.502,-1.626l0.003,-11.524l0.757,0.461l1.662,2.933l-0.258,1.893l0.625,1.096l2.008,-0.319l1.402,-1.391l1.328,-0.935l0.687,-1.482l1.368,-0.716l1.182,0.375l1.339,0.865l2.282,0.153l1.793,-0.72l0.284,-0.962l0.493,-1.471l1.526,-0.246l0.843,-1.15l0.934,-2.032l2.517,-2.265l3.967,-2.222l1.141,0.033l1.357,0.51l0.945,-0.361l1.49,0.301l1.343,4.261l0.729,2.168l-0.5,3.428l0.239,1.111l-1.415,-0.567l-0.811,0.221l-0.265,0.902l-0.766,1.167l0.026,1.078l1.673,1.697l1.641,-0.338l0.571,-1.39l2.126,0.026l-0.701,2.281l-0.331,2.622l-0.726,1.433L563.633,548.709zM556.504,547.746l-1.224,-0.98l-1.311,0.649l-1.519,1.248l-1.495,2.031l2.103,2.484l1.003,-0.322l0.516,-1.033l1.563,-0.504l0.477,-1.05l0.86,-1.559L556.504,547.746z"
				},
				{
					"id":"ZM",
					"title":"Zambia",
					"d":"M567.105,489.207L568.429,490.466L569.142,492.868L568.664,493.636L568.101,495.938L568.639,498.299L567.757,499.292L566.906,501.951L568.38,502.695L559.872,505.065L560.138,507.12L558.014,507.516L556.417,508.67L556.076,509.676L555.073,509.904L552.634,512.299L551.082,514.192L550.135,514.26L549.224,513.922L546.09,513.602L545.586,513.383L545.565,513.141L544.458,512.482L542.641,512.314L540.345,512.978L538.515,511.155L536.623,508.778L536.752,499.62L542.591,499.656L542.352,498.67L542.77,497.602L542.277,496.266L542.596,494.887L542.299,494.006L543.267,494.077L543.427,494.96L544.741,494.891L546.521,495.153L547.458,496.444L549.704,496.841L551.418,495.943L552.047,497.435L554.196,497.833L555.229,499.049L556.38,500.622L558.526,500.646L558.292,497.566L557.522,498.084L555.562,496.976L554.805,496.469L555.152,493.618L555.65,490.267L555.022,489.021L555.821,487.222L556.573,486.885L560.339,486.41L561.443,486.696L562.615,487.413L563.732,487.885L565.514,488.359z"
				},
				{
					"id":"ZW",
					"title":"Zimbabwe",
					"d":"M562.709,526.998L561.219,526.697L560.274,527.059L558.917,526.548L557.776,526.516L555.989,525.158L553.821,524.698L552.996,522.803L552.989,521.752L551.788,521.432L548.615,518.177L547.733,516.471L547.169,515.946L546.09,513.602L549.224,513.922L550.135,514.26L551.082,514.192L552.634,512.299L555.073,509.904L556.076,509.676L556.417,508.67L558.014,507.516L560.138,507.12L560.319,508.2L562.658,508.142L563.957,508.754L564.562,509.472L565.896,509.683L567.353,510.617L567.359,514.312L566.813,516.347L566.692,518.55L567.143,519.426L566.826,521.172L566.402,521.443L565.663,523.593z"
				}
			]
		}
	}
};

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/ReplaySubject.js ***!
  \*********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]; });


//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/debounceTime.js ***!
  \*****************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/first.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/first.js ***!
  \**********************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"].apply(void 0, args)(this);
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
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

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        this.mapConfig = {
            center: { lat: 3.117726, lng: 101.677358 },
            zoom: 17,
            styles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#FFBB00"
                        },
                        {
                            "saturation": 43.400000000000006
                        },
                        {
                            "lightness": 37.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "hue": "#FFC200"
                        },
                        {
                            "saturation": -61.8
                        },
                        {
                            "lightness": 45.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 51.19999999999999
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 52
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "hue": "#0078FF"
                        },
                        {
                            "saturation": -13.200000000000003
                        },
                        {
                            "lightness": 2.4000000000000057
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "hue": "#00FF6A"
                        },
                        {
                            "saturation": -1.0989010989011234
                        },
                        {
                            "lightness": 11.200000000000017
                        },
                        {
                            "gamma": 1
                        }
                    ]
                }
            ]
        };
    }
    GoogleMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./google-map.html */ "./src/app/maps/google-map/google-map.html")
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/google-map/google-map.html":
/*!*************************************************!*\
  !*** ./src/app/maps/google-map/google-map.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container\">\r\n\t<div class=\"maps map-fs\">\r\n        <ngui-map [options]=\"mapConfig\" center=\"3.117726, 101.677358\"></ngui-map>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/maps/maps.modules.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.modules.ts ***!
  \**************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps.routing */ "./src/app/maps/maps.routing.ts");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/dist/@ngui/map.es5.js");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/maps/vector-map/vector-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Tables Component


var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_3__["MapsRoutes"]),
                _ngui_map__WEBPACK_IMPORTED_MODULE_4__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA80cWOalTZWvHNwZWK9VEVVa3gYzOCKJE' })
            ],
            declarations: [
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_5__["VectorMapComponent"],
                _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"]
            ],
            providers: [
                _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_2__["ThemeConstants"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/maps/vector-map/vector-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");
//Maps Components


var MapsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'vector-map',
                component: _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_0__["VectorMapComponent"],
                data: {
                    title: 'Vector Map'
                }
            },
            {
                path: 'google-map',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapComponent"],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/maps/vector-map/vector-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/vector-map/vector-map.component.ts ***!
  \*********************************************************/
/*! exports provided: VectorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent", function() { return VectorMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/theme-constant */ "./src/app/shared/config/theme-constant.ts");
/* harmony import */ var ammap3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ammap3 */ "./node_modules/ammap3/ammap/ammap.js");
/* harmony import */ var ammap3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ammap3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ammap3/ammap/maps/js/worldLow */ "./node_modules/ammap3/ammap/maps/js/worldLow.js");
/* harmony import */ var ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_3__);
// Typing for Ammap
/// <reference path="../../shared/typings/ammaps/ammaps.d.ts" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VectorMapComponent = /** @class */ (function () {
    function VectorMapComponent(colorConfig) {
        this.colorConfig = colorConfig;
    }
    VectorMapComponent.prototype.ngAfterViewInit = function () {
        var map;
        var themeColors = this.colorConfig.get().colors;
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        if (AmCharts.isReady) {
            createChart();
        }
        else {
            AmCharts.ready(function () {
                createChart();
            });
        }
        function createChart() {
            map = new AmCharts.AmMap();
            map.colorSteps = 0;
            map.imagesSettings = {
                rollOverColor: themeColors.info,
                rollOverScale: 1.5,
                selectedScale: 1.5,
                selectedColor: themeColors.info,
                color: themeColors.info
            };
            var dataProvider = {
                mapVar: AmCharts.maps.worldLow,
                images: [
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "Malaysia (+25.17)",
                        latitude: 4.21,
                        longitude: 101.97
                    },
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "China (-28.12)",
                        latitude: 37.09,
                        longitude: 95.71
                    },
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "Japan (+18.84%)",
                        latitude: 36.20,
                        longitude: 138.25
                    },
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "Brazil (+3.34%)",
                        latitude: -7.15,
                        longitude: -53.67
                    },
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "United State (+16.68%)",
                        latitude: 40.02,
                        longitude: -104.01
                    },
                    {
                        svgPath: targetSVG,
                        zoomLevel: 5,
                        scale: 1,
                        title: "Greenland (+20.13%)",
                        latitude: 76.20,
                        longitude: -42.23
                    }
                ]
            };
            map.areasSettings = {
                autoZoom: true,
                unlistedAreasColor: "#d7d8df",
                balloonText: "[[title]]<p>[[value]]</p> [[description]]",
                descriptionWindowHeight: 300,
                descriptionWindowWidth: 300,
                descriptionWindowTop: 400,
                descriptionWindowLeft: 300,
                outlineAlpha: 1,
                outlineColor: themeColors.white,
                outlineThickness: 1,
                rollOverOutlineColor: "#ffffff",
            };
            map.dataProvider = dataProvider;
            var valueLegend = new AmCharts.ValueLegend();
            valueLegend.right = 10;
            valueLegend.minValue = "";
            valueLegend.maxValue = "";
            map.valueLegend = valueLegend;
            map.write("mapdiv");
        }
    };
    VectorMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./vector-map.html */ "./src/app/maps/vector-map/vector-map.html")
        }),
        __metadata("design:paramtypes", [_shared_config_theme_constant__WEBPACK_IMPORTED_MODULE_1__["ThemeConstants"]])
    ], VectorMapComponent);
    return VectorMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/vector-map/vector-map.html":
/*!*************************************************!*\
  !*** ./src/app/maps/vector-map/vector-map.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-container\">\r\n\t<div class=\"maps map-fs\">\r\n        <div id=\"mapdiv\" class=\"ammap\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/config/theme-constant.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/config/theme-constant.ts ***!
  \*************************************************/
/*! exports provided: ThemeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConstants", function() { return ThemeConstants; });
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

var ThemeConstants = /** @class */ (function () {
    function ThemeConstants() {
        this.colorConfig = {
            colors: {
                primary: '#7774e7',
                info: '#0f9aee',
                success: '#37c936',
                warning: '#ffcc00',
                danger: '#ff3c7e',
                primaryInverse: 'rgba(119, 116, 231, 0.1)',
                infoInverse: 'rgba(15, 154, 238, 0.1)',
                successInverse: 'rgba(55, 201, 54, 0.1)',
                warningInverse: 'rgba(255, 204, 0, 0.1)',
                dangerInverse: 'rgba(255, 60, 126, 0.1)',
                gray: '#ebeef6',
                white: '#ffffff',
                dark: '#515365',
            }
        };
    }
    ThemeConstants.prototype.get = function () {
        return this.colorConfig;
    };
    ThemeConstants = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ThemeConstants);
    return ThemeConstants;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-modules.js.map