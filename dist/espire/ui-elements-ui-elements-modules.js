(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-elements-ui-elements-modules"],{

/***/ "./node_modules/ng2-nouislider/src/nouislider.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-nouislider/src/nouislider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el) {
        var _this = this;
        this.el = el;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
        }));
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsc0NBVXVCO0FBQ3ZCLHdDQUl3QjtBQU94QjtJQUFBO0lBU0EsQ0FBQztJQVJDLDZCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsNkRBQTZEO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRDQUFnQjtBQVk3QjtJQTZCRSw2QkFBb0IsRUFBYztRQUFsQyxpQkFBdUM7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWhCMUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQU1qQixXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQXNHcEMsaUJBQVksR0FBRyxVQUFDLE9BQTBCLEVBQUUsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDdkcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxDQUFnQjtZQUMzQyxJQUFJLFFBQVEsR0FBVSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBZSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLENBQUcsV0FBVztvQkFDbkIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFHLFlBQVk7b0JBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLEtBQUssQ0FBQztnQkFFUixLQUFLLEVBQUUsQ0FBRyxTQUFTO29CQUNqQixVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxDQUFDLENBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLENBQUcsYUFBYTtvQkFDckIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVI7b0JBQ0UsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUVELEtBQUssR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLFFBQTJCLENBQUM7WUFFaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtJQXJLcUMsQ0FBQztJQUV2QyxzQ0FBUSxHQUFSO1FBQUEsaUJBK0RDO1FBOURDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDN0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDMUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUosWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUN6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXJGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDN0IsQ0FBQztvQ0FDTyxNQUFNO2dCQUNaLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMvQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQzs7WUFWRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUExQixJQUFJLE1BQU0sU0FBQTt3QkFBTixNQUFNO2FBVWI7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUF4QixpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTCxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHO3FCQUNkO29CQUNELElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFnQjtRQUN2QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFvRUksOEJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSix3QkFBd0IsRUFBRSxNQUFNO3FCQUNqQztvQkFDRCxRQUFRLEVBQUUsMkRBQTJEO29CQUNyRSxNQUFNLEVBQUUsQ0FBQyxzR0FNUixDQUFDO29CQUNGLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUseUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCxrQ0FBYyxHQUFtRSxjQUFNLE9BQUE7UUFDOUYsRUFBQyxJQUFJLEVBQUUsaUJBQVUsR0FBRztLQUNuQixFQUY2RixDQUU3RixDQUFDO0lBQ0ssa0NBQWMsR0FBMkM7UUFDaEUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7S0FDekIsQ0FBQztJQUNGLDBCQUFDO0NBclBELEFBcVBDLElBQUE7QUFyUFksa0RBQW1CO0FBeVBoQztJQUFBO0lBVUEsQ0FBQztJQVZzQywyQkFBVSxHQUEwQjtRQUMzRSxFQUFFLElBQUksRUFBRSxlQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDcEMsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLCtCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsdUJBQUM7Q0FWRCxBQVVDLElBQUE7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZztcbiAgZnJvbSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIE5vdWlGb3JtYXR0ZXIge1xuICB0byh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBmb3JtYXR0aW5nIHdpdGggaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY0NjMzNjQvNDc4NTg0XG4gICAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKSkpO1xuICB9O1xuXG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzbGlkZXI6IGFueTtcbiAgcHVibGljIGhhbmRsZXM6IGFueVtdO1xuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICBwdWJsaWMgYmVoYXZpb3VyOiBzdHJpbmc7XG4gICBwdWJsaWMgY29ubmVjdDogYm9vbGVhbltdO1xuICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gICBwdWJsaWMgbWluOiBudW1iZXI7XG4gICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuICAgcHVibGljIGZvcm1hdDogTm91aUZvcm1hdHRlcjtcbiAgIHB1YmxpYyBwYWdlU3RlcHM6IG51bWJlcjtcbiAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgcHVibGljIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICAgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuICAgcHVibGljIG9uS2V5ZG93bjogYW55O1xuICAgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIHB1YmxpYyB0b29sdGlwczogQXJyYXk8YW55PjtcbiAgIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyB1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzbGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLmZvcm1Db250cm9sICE9PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5uZ01vZGVsLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgcGFnZVN0ZXBzOiB0aGlzLnBhZ2VTdGVwcyxcbiAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgb25LZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJhbmdlOiB0aGlzLmNvbmZpZy5yYW5nZSB8fCB7bWluOiB0aGlzLm1pbiwgbWF4OiB0aGlzLm1heH0sXG4gICAgICB0b29sdGlwczogdGhpcy50b29sdGlwcyxcbiAgICB9KSk7XG5cbiAgICBpbnB1dHNDb25maWcuZm9ybWF0ID0gdGhpcy5mb3JtYXQgfHwgdGhpcy5jb25maWcuZm9ybWF0IHx8IG5ldyBEZWZhdWx0Rm9ybWF0dGVyKCk7XG5cbiAgICB0aGlzLnNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLFxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgaW5wdXRzQ29uZmlnKVxuICAgICk7XG5cbiAgICB0aGlzLmhhbmRsZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9VaS1oYW5kbGUnKSk7XG5cbiAgICBpZih0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xuICAgICAgaWYodGhpcy5jb25maWcucGFnZVN0ZXBzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWcucGFnZVN0ZXBzID0gMTA7XG4gICAgICB9XG4gICAgICBmb3IobGV0IGhhbmRsZSBvZiB0aGlzLmhhbmRsZXMpIHtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGhhbmRsZS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5jb25maWcub25LZXlkb3duID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZGVmYXVsdEtleUhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb25maWcub25LZXlkb3duKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzZXQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2V0LCB2YWx1ZXMsIGhhbmRsZSwgdW5lbmNvZGVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCd1cGRhdGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzbGlkZScsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5ldmVudEhhbmRsZXIodGhpcy5zbGlkZSwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc3RhcnQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuc3RhcnQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ2VuZCcsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5lbmQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyICYmIChjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCB8fCBjaGFuZ2VzLnN0ZXApKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zbGlkZXIudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b1ZhbHVlcyh2YWx1ZXM6IHN0cmluZ1tdKTogYW55IHwgYW55W10ge1xuICAgIGxldCB2ID0gdmFsdWVzLm1hcCh0aGlzLmNvbmZpZy5mb3JtYXQuZnJvbSk7XG4gICAgcmV0dXJuICh2Lmxlbmd0aCA9PSAxID8gdlswXSA6IHYpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2JlaGF2aW91cic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjb25uZWN0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2xpbWl0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ21pbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtYXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nc3RlcCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtYXQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ncGFnZVN0ZXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NvbmZpZyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiduZ01vZGVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2tleWJvYXJkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29uS2V5ZG93bic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbid0b29sdGlwcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2xpZGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3NldCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc3RhcnQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2VuZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTm91aXNsaWRlckNvbXBvbmVudF0sXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "./node_modules/ng2-toasty/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-toasty/index.js ***!
  \******************************************/
/*! exports provided: providers, ToastyModule, ToastOptions, ToastData, ToastyConfig, ToastyEventType, ToastyEvent, toastyServiceFactory, ToastyService, ToastyComponent, ToastComponent, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/toasty.service */ "./node_modules/ng2-toasty/src/toasty.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["toastyServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"]; });

/* harmony import */ var _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/toasty.component */ "./node_modules/ng2-toasty/src/toasty.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"]; });

/* harmony import */ var _src_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/toast.component */ "./node_modules/ng2-toasty/src/toast.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return _src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]; });

/* harmony import */ var _src_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/shared */ "./node_modules/ng2-toasty/src/shared.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return _src_shared__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]; });

// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty










var providers = [
    _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"],
    { provide: _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], useFactory: _src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["toastyServiceFactory"], deps: [_src_toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"]] }
];
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"], _src_shared__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]],
                    exports: [_src_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _src_toasty_component__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"]],
                    providers: providers
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = function () { return []; };
    return ToastyModule;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/shared.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-toasty/src/shared.js ***!
  \***********************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'safeHtml' },] },
    ];
    /** @nocollapse */
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"], },
    ]; };
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toast.component.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toast.component.js ***!
  \********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty

/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-toast',
                    template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        'toast': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'closeToastEvent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['closeToast',] },],
    };
    return ToastComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.component.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.component.js ***!
  \*********************************************************/
/*! exports provided: ToastyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return ToastyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasty_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasty.utils */ "./node_modules/ng2-toasty/src/toasty.utils.js");
/* harmony import */ var _toasty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasty.service */ "./node_modules/ng2-toasty/src/toasty.service.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty



/**
 * Toasty is container for Toast components
 */
var ToastyComponent = (function () {
    function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent.POSITIONS.length; i++) {
                    if (ToastyComponent.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyEventType"].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    ToastyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-toasty',
                    template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    ToastyComponent.ctorParameters = function () { return [
        { type: _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"], },
        { type: _toasty_service__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], },
    ]; };
    ToastyComponent.propDecorators = {
        'position': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ToastyComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.service.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.service.js ***!
  \*******************************************************/
/*! exports provided: ToastOptions, ToastData, ToastyConfig, ToastyEventType, ToastyEvent, toastyServiceFactory, ToastyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return ToastyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return toastyServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return ToastyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasty_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasty.utils */ "./node_modules/ng2-toasty/src/toasty.utils.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty



/**
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastOptions.ctorParameters = function () { return []; };
    return ToastOptions;
}());

/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastData.ctorParameters = function () { return []; };
    return ToastData;
}());

/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastyConfig.ctorParameters = function () { return []; };
    return ToastyConfig;
}());

var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());

function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(options) && options !== '' || Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
            throw new Error('ng2-toasty: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            showClose: showClose,
            type: 'toasty-type-' + type,
            theme: 'toasty-theme-' + theme,
            onAdd: toastyOptions.onAdd && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && Object(_toasty_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ToastyService.ctorParameters = function () { return [
        { type: ToastyConfig, },
    ]; };
    return ToastyService;
}());



/***/ }),

/***/ "./node_modules/ng2-toasty/src/toasty.utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng2-toasty/src/toasty.utils.js ***!
  \*****************************************************/
/*! exports provided: isString, isNumber, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
/**
 * Check and return true if an object is type of string
 * @param obj Analyse has to object the string type
 * @return result of analysis
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 * @param obj Analyse has to object the boolean type
 * @return result of analysis
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 * @param obj Analyse has to object the function type
 * @return result of analysis
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 10.1.0 - 2017-07-28 17:11:18 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '10.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testMultitouch ( parsed, entry ) {
		parsed.multitouch = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'multitouch' option must be a boolean.");
		}
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'multitouch': { r: true, t: testMultitouch },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'multitouch': false,
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		target.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( handleNumber ){

				var handle = scope_Handles[handleNumber];

				var min = checkHandlePosition(scope_Locations, handleNumber, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, handleNumber, 100, true, true, true);

				var now = positions[handleNumber];
				var text = options.ariaFormat.to(unencoded[handleNumber]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset, data.target || element);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, target ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}


		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch && options.multitouch ) {
			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (touch) {
				return touch.target === target || target.contains(touch.target);
			};
			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {
				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}
				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;
			} else {
			// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}
				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		} else if ( touch ) {
			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.33.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationMessage) {
      return validationMessage;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  } // DOM element


  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement().then(function () {
        return triggerOnAfterClose(onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4

    /* istanbul ignore next */
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections', 'extraParams'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationMessage(error$$1) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error$$1;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
} // @deprecated

/* istanbul ignore next */

function resetValidationError() {
  warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
  resetValidationMessage.bind(this)();
} // @deprecated

/* istanbul ignore next */

function showValidationError(error$$1) {
  warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
  showValidationMessage.bind(this)(error$$1);
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id,
      started,
      remaining = delay;
  this.running = false;

  this.start = function () {
    if (!this.running) {
      this.running = true;
      started = new Date();
      id = setTimeout(callback, remaining);
    }

    return remaining;
  };

  this.stop = function () {
    if (this.running) {
      this.running = false;
      clearTimeout(id);
      remaining -= new Date() - started;
    }

    return remaining;
  };

  this.increase = function (n) {
    var running = this.running;

    if (running) {
      this.stop();
    }

    remaining += n;

    if (running) {
      this.start();
    }

    return remaining;
  };

  this.getTimerLeft = function () {
    if (this.running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.isRunning = function () {
    return this.running;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // params.extraParams is @deprecated


  if (params.validationMessage) {
    if (_typeof(params.extraParams) !== 'object') {
      params.extraParams = {};
    }

    params.extraParams.validationMessage = params.validationMessage;
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  if (params.customContainerClass) {
    addClass(container, params.customContainerClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationMessage) {
            _this.hideLoading();

            if (validationMessage) {
              _this.showValidationMessage(validationMessage);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    }
                  });
                } else {
                  validationPromise.then(function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    var setInputPlaceholder = function setInputPlaceholder(input) {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else if (!isPromise(innerParams.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(innerParams.inputValue), "\""));
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isPromise(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage,
	resetValidationError: resetValidationError,
	showValidationError: showValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
/* istanbul ignore next */

SweetAlert.noop = function () {};

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.Sweetalert2.version = '7.33.1';  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/***/ }),

/***/ "./src/app/shared/directives/cards.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directives/cards.directive.ts ***!
  \******************************************************/
/*! exports provided: cardPortletRefresh, cardPortletDelete, Cards_Directives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardPortletRefresh", function() { return cardPortletRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardPortletDelete", function() { return cardPortletDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards_Directives", function() { return Cards_Directives; });
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

//Card Portlet Refresh
var cardPortletRefresh = /** @class */ (function () {
    function cardPortletRefresh(el) {
        this.el = el;
    }
    cardPortletRefresh.prototype.ngOnInit = function () {
        $(this.el.nativeElement).on('click', function (e) {
            var _this = this;
            $(this).parents('.card').addClass('card-refresh');
            setTimeout(function () {
                $(_this).parents('.card').removeClass('card-refresh');
            }, 2000);
            e.preventDefault();
            e.stopPropagation();
        });
    };
    cardPortletRefresh = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[card-portlet-refresh]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], cardPortletRefresh);
    return cardPortletRefresh;
}());

//Card Portlet Refresh
var cardPortletDelete = /** @class */ (function () {
    function cardPortletDelete(el) {
        this.el = el;
    }
    cardPortletDelete.prototype.ngOnInit = function () {
        $(this.el.nativeElement).on('click', function (e) {
            var _this = this;
            $(this).parents('.card').addClass('animated zoomOut');
            $(this).parents('.card').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
                $(_this).parents('.card').remove();
            });
            e.preventDefault();
            e.stopPropagation();
        });
    };
    cardPortletDelete = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[card-portlet-delete]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], cardPortletDelete);
    return cardPortletDelete;
}());

var Cards_Directives = [
    cardPortletRefresh,
    cardPortletDelete
];


/***/ }),

/***/ "./src/app/ui-elements/buttons/buttons.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-elements/buttons/buttons.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./buttons.html */ "./src/app/ui-elements/buttons/buttons.html")
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/buttons/buttons.html":
/*!**************************************************!*\
  !*** ./src/app/ui-elements/buttons/buttons.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Buttons</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card padding-30\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<h4 class=\"card-title\">Basic Buttons</h4>\r\n\t\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default\">Default</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary\">Primary</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success\">Success</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info\">Info</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning\">Warning</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger\">Danger</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<h4 class=\"card-title\">Inverse Button</h4>\r\n\t\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-inverse btn-primary\">Primary</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-inverse btn-success\">Success</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-inverse btn-info\">Info</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-inverse btn-warning\">Warning</a>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-inverse btn-danger\">Danger</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<h4 class=\"card-title\">Buttons Size</h4>\r\n\t\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-lg\">btn-lg</a>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-lg\">btn-lg</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default\">btn-md</a>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info\">btn-md</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-sm\">btn-sm</a>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-sm\">btn-sm</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-xs\">btn-xs</a>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-xs\">btn-xs</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\t\r\n\t\t\t\t\t<h4 class=\"card-title\">Buttons Rounded</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-rounded\">Default</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-rounded\">Primary</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-rounded\">Success</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-rounded\">Info</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-rounded\">Warning</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-rounded\">Danger</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\t\r\n\t\t\t\t\t<h4 class=\"card-title\">Inverse Buttons Rounded</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-inverse btn-rounded\">Default</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-inverse btn-rounded\">Primary</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-inverse btn-rounded\">Success</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-inverse btn-rounded\">Info</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-inverse btn-rounded\">Warning</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-rounded\">Danger</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Icon Buttons</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t<i class=\"ti-reload pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>Reset</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t<i class=\"ti-zip pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>compile</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success\">\r\n\t\t\t\t\t\t\t<i class=\"ti-printer pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>Print</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info\">\r\n\t\t\t\t\t\t\t<i class=\"ti-export pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>Upload</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning\">\r\n\t\t\t\t\t\t\t<i class=\"ti-comment pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>Comment</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger\">\r\n\t\t\t\t\t\t\t<i class=\"ti-trash pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<span>Delete</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\t\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Dropdown Buttons</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<div class=\"mrg-btm-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-rounded dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-rounded dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<div class=\"mrg-btm-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-inverse dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-inverse dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-inverse btn-rounded dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-inverse btn-rounded dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>Dropdown</span> \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-angle-down font-size-9\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Another action</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Something else here</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Seperated Link</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\t\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Grouped Buttons</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"display-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-save\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-comments\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-heart\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Left</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Middle</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Right</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"display-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-save\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary active\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-comments\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-heart\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Left</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Middle</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Right</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-vertical\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-save\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-comments\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-heart\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Social Icon Buttons</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-facebook btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-twitter btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-google-plus btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-linkedin btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-dribbble btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-inverse btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-inverse btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-inverse btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-inverse btn-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"padding-30\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Social Icon Buttons Rounded</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-default btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-facebook btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-twitter btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-google-plus btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-linkedin btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-dribbble btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyle list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary btn-inverse btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info btn-inverse btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-success btn-inverse btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning btn-inverse btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-elements/cards/cards.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-elements/cards/cards.component.ts ***!
  \******************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./cards.html */ "./src/app/ui-elements/cards/cards.html")
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/cards/cards.html":
/*!**********************************************!*\
  !*** ./src/app/ui-elements/cards/cards.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Cards</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Basic Card</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t\t<p>Not bad for a little furball. There's only one left. You stay here. We'll take care of this. I have decided that we shall stay here.Well, look at you, a general, huh? Oh, well, someone must have told them about my little maneuver at the battle of Taanab.</p>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Basic Card with Action</h4>\r\n\t\t\t\t\t<div class=\"mrg-top-20\">\r\n\t\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t\t<p>Not bad for a little furball. There's only one left. You stay here. We'll take care of this. I have decided that we shall stay.</p>\r\n\t\t\t\t\t\t<div class=\"mrg-top-25\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary no-mrg-btm\">Action 1</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Default Card</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t<p>Not bad for a little furball. There's only one left. You stay here. We'll take care of this. I have decided that we shall stay here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer border top\">\r\n\t\t\t\t\t<ul class=\"list-unstyled list-inline text-right pdd-vertical-5\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-flat\">Action 1</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-flat\">Action 2</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-media\">\r\n\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/others/img-3.jpg\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"mrg-btm-20 no-mrg-top\">Card With Image</h4>\r\n\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t<div class=\"mrg-top-40\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-info no-mrg-btm\">Read More</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<a href=\"\" class=\"card\">\r\n\t\t\t\t<ul class=\"list-unstyled list-info\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"pdd-vertical-10 pdd-horizon-20\">\t\r\n\t\t\t\t\t\t\t<img class=\"thumb-img img-circle\" src=\"assets/images/avatars/thumb-1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t<span class=\"title\">Jordan Hurst</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sub-title\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ti-timer pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t\t\t<span>2 min ago</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"card-media\">\r\n\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/others/img-4.jpg\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4>Card With Image</h4>\r\n\t\t\t\t\t<p>Hey, whoa, just where do you think you're going? Master Luke here is your rightful owner. We'll have no more of this Obi-Wan Kenobi. I have decided that we shall stay here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<div class=\"card bg-info\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t<p class=\"text-uppercase font-size-13\"><b>Sales Trends</b></p>\r\n\t\t\t\t\t\t\t<h1 class=\"no-mrg-top font-size-30\">37.8%</h1>\r\n\t\t\t\t\t\t\t<span>Total Item Sold: <b>168</b></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<a href=\"\">\r\n\t\t\t\t<div class=\"card \">\r\n\t\t\t\t\t<div class=\"overlay-dark bg\" style=\"background-image: url('assets/images/others/img-6.jpg')\">\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-130\">\r\n\t\t\t\t\t\t\t\t<div class=\"tag tag-danger\">Lifestyle</div>\r\n\t\t\t\t\t\t\t\t<h2>Good Saving <br> Habit From Young</h2>\r\n\t\t\t\t\t\t\t\t<div class=\"text-white text-opacity\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-comment pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span> 88</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10\">\r\n\t\t\t\t\t\t\t\t\t\t|\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-heart pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span> 168</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<a href=\"\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"overlay-dark bg-primary\">\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-130\">\r\n\t\t\t\t\t\t\t\t<div class=\"tag tag-warning\">Blog</div>\r\n\t\t\t\t\t\t\t\t<h2>Good Saving <br> Habit From Young</h2>\r\n\t\t\t\t\t\t\t\t<div class=\"text-white text-opacity\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-comment pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span> 88</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10\">\r\n\t\t\t\t\t\t\t\t\t\t|\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-heart pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span> 168</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t<p class=\"text-dark text-uppercase font-size-13\"><b>Earning</b></p>\r\n\t\t\t\t\t\t\t<h1 class=\"no-mrg-top text-primary font-size-30\">$ 18,000</h1>\r\n\t\t\t\t\t\t\t<span>Total Item Sold: <b>168</b></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-horizon\">\r\n\t\t\t\t\t<div class=\"image-container col-md-4\">\r\n\t\t\t\t\t\t<div class=\"background-holder has-content\" style=\"background-image: url('assets/images/others/img-5.jpg')\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-7 ml-auto\">\r\n\t\t\t\t\t\t\t\t<div class=\"pdd-vertical-30 pdd-horizon-25\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"mrg-btm-20\">Card Horizon</h2>\r\n\t\t\t\t\t\t\t\t\t<p>Oh, I told you it was dangerous here. Shall we try and go around? It'll take time. This whole party'll be for nothing if they see us. Chewie and I will take care of this. You stay here. Quietly, there might be more of them out there. Hey... it's me. Go for help! Go! Great. Come on. Over there! Two more of them! I see them. Wait, Leia! Quick! Jam their comlink. Center switch! Hey, wait! Ahhh! Move closer! Get alongside that one! Get him! Keep on that one! I'll take these two!</p>\r\n\t\t\t\t\t\t\t\t\t<p>Easy, Chewie. Whoa! Whoa! Help! Chewie, you okay? Where is he? I'm okay, pal. Han! Chewie? Lando! Boba Fett?! Boba Fett?! Where? Lando, grab it! Lower it! I'm trying! Whoa! Whoa! Grab me, Chewie! I'm slipping. Grab it! L--Lando. Grab! Grab it! Almost... You almost got it! Hold it! Whoa! Gently now. All... all right.</p>\r\n\t\t\t\t\t\t\t\t\t<p>Admiral, we're in position. All fighters accounted for. Proceed with the countdown. All groups assume attack coordinates. Don't worry, my friends are down there. They'll have that shield down on time... or this'll be the shortest offensive of all time. All craft, prepare to jump to hyperspace on my mark. All right. Stand by.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>     \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-media\">\r\n\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/others/img-7.jpg\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n                    <perfect-scrollbar class=\"relative\" style=\"height: 210px;\">\r\n                        <h4 class=\"mrg-btm-20 no-mrg-top\">Card Scrollable</h4>\r\n                        <p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n                        <p>Move! Move! The shield is down! Commence attack on theDeath Star's main reactor. We're on our way. Red Group, Gold Group, all fighters follow me. Told you they'd do it!</p>\r\n                        <p>Admiral, we're in position. All fighters accounted for. Proceed with the countdown. All groups assume attack coordinates. Don't worry, my friends are down there. They'll have that shield down on time... or this'll be the shortest offensive of all time. All craft, prepare to jump to hyperspace on my mark. All right. Stand by.</p>\r\n                    </perfect-scrollbar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"portlet\">\r\n\t\t\t\t\t<ul class=\"portlet-item\">\r\n\t\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-more\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-files pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Duplicate</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-smallcap pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Edit</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-image pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Add Images</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\" card-portlet-refresh>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-reload\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Card Refresh</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t<p>Not bad for a little furball. There's only one left. You stay here. We'll take care of this. I have decided that we shall stay here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer border top\">\r\n\t\t\t\t\t<ul class=\"list-unstyled list-inline pull-right\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-heart\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-share\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"portlet\">\r\n\t\t\t\t\t<ul class=\"portlet-item\">\r\n\t\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-more\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-files pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Duplicate</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-smallcap pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Edit</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-image pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Add Images</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\" card-portlet-delete>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-close\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Card Delete</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<p>All right! Up! Move! Come on! Quickly! Quickly, Chewie. Han! Hurry! The fleet will be here any moment. Charges! Come on, come on! Oh, my! They'll be captured! Wa-wait! Wait, come back! Artoo, stay with me. Freeze! You Rebel scum.</p>\r\n\t\t\t\t\t<p>Not bad for a little furball. There's only one left. You stay here. We'll take care of this. I have decided that we shall stay here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer border top\">\r\n\t\t\t\t\t<ul class=\"list-unstyled list-inline pull-right\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-heart\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-share\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"portlet\">\r\n\t\t\t\t\t<ul class=\"portlet-item\">\r\n\t\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-more\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-files pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Duplicate</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-smallcap pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Edit</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ti-image pdd-right-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>Add Images</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\" card-portlet-refresh>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-reload\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-icon btn-flat btn-rounded\" card-portlet-delete>\r\n\t\t\t\t\t\t\t\t<i class=\"ti-close\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Advanced Portlet</h4>\r\n\t\t\t\t\t<p>Look! Get him off of there! I think I got it. I got it! Oh, Princess Leia, are you all right? Let's see. It's not bad. Freeze! Oh, dear. Don't move! I love you. I know. Hands up! Stand up! Stay back. Chewie! Get down here! She's wounded! No, wait.... I got an idea.</p>\r\n\t\t\t\t\t<p>If they don't go for this, we're gonna have to get outta here pretty quick, Chewie. We have you on our screen now. Please identify. Shuttle Tydirium requesting deactivation of the deflector shield. Shuttle Tydirium, transmit the clearance code for shield passage. Transmission commencing. Now we find out if that code is worth the price we paid. It'll work. It'll work. Vader's on that ship. Now don't get jittery, Luke. There are a lot of command ships. Keep your distance though.</p>\r\n\t\t\t\t\t<div class=\"mrg-top-20 text-right\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-warning no-mrg-btm\">Action 1</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-elements/modals/modals.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-elements/modals/modals.component.ts ***!
  \********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
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

var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./modals.html */ "./src/app/ui-elements/modals/modals.html")
        }),
        __metadata("design:paramtypes", [])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/modals/modals.html":
/*!************************************************!*\
  !*** ./src/app/ui-elements/modals/modals.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>Modals</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h5 class=\"mrg-btm-10\">Default Modal</h5>\r\n                            <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-md.jpg\" alt=\"\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-8 col-md-12\">\r\n                                    <p class=\"font-size-12\">This is default modal with or without animation. simply add your animation class to modal animate it.</p>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                                    <button data-toggle=\"modal\" data-target=\"#default-modal\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5 class=\"mrg-btm-10\">Side Modal Right</h5>\r\n                            <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-right.jpg\" alt=\"\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-8 col-md-12\">\r\n                                    <p class=\"font-size-12\">This is side modal with right slide in animation. Modal backdrop is removable by adding <code>.no-backdrop</code> class.</p>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                                    <button data-toggle=\"modal\" data-target=\"#side-modal-r\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5 class=\"mrg-btm-10\">Side Modal Left</h5>\r\n                            <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-left.jpg\" alt=\"\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-8 col-md-12\">\r\n                                    <p class=\"font-size-12\">This is side modal with left slide in animation. Modal backdrop is removable by adding <code>.no-backdrop</code> class.</p>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                                    <button data-toggle=\"modal\" data-target=\"#side-modal-l\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"mrg-btm-10\">Modal Small</h5>\r\n                    <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-sm.jpg\" alt=\"\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-8 col-md-12\">\r\n                            <p class=\"font-size-12\">Modal size is configurable, Add class <code>.modal-sm</code> to smaller modal window</p>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                            <button data-toggle=\"modal\" data-target=\"#modal-sm\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"mrg-btm-10\">Modal Large</h5>\r\n                    <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-lg.jpg\" alt=\"\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-8 col-md-12\">\r\n                            <p class=\"font-size-12\">Modal size is configurable, Add class <code>.modal-lg</code> to bigger modal window</p>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                            <button data-toggle=\"modal\" data-target=\"#modal-lg\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"mrg-btm-10\">Modal Full Screen</h5>\r\n                    <img class=\"img-fluid mrg-horizon-auto mrg-btm-15\" src=\"assets/images/others/modal-fs.jpg\" alt=\"\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-8 col-md-12\">\r\n                            <p class=\"font-size-12\">Modal is a full screen popup, Add class <code>.modal-fs</code> to make modal window full screen</p>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-12 text-right pdd-top-5\">\r\n                            <button data-toggle=\"modal\" data-target=\"#modal-fs\" class=\"btn btn-sm btn-primary\">Trigger</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal START-->\r\n<div class=\"modal fade\" id=\"default-modal\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4>Modal Template</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Orbiting the planet at maximum velocity. The moon with the Rebel base will be in range in thirty minutes. This will be a day long remembered. It has seen the end of Kenobi and it will soon see the end of the Rebellion.</p>\r\n                <p>A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting.</p>\r\n            </div>\r\n            <div class=\"modal-footer no-border\">\r\n                <div class=\"text-right\">\r\n                    <button class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Cancel</button>\r\n                    <button class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\">OK</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal slide-in-right modal-right fade \" id=\"side-modal-r\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"side-modal-wrapper\">\r\n                <div class=\"vertical-align\">\r\n                    <div class=\"table-cell\">\r\n                        <div class=\"pdd-horizon-15\">\r\n                            <h4>Sign Up</h4>\r\n                            <p class=\"mrg-btm-15 font-size-13\">Please enter your email and password to create account</p>\r\n                            <form>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Adress\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"checkbox font-size-12\">\r\n                                    <input id=\"agreement\" name=\"agreement\" type=\"checkbox\">\r\n                                    <label for=\"agreement\">I agree with the <a href=\"\">Privacy &amp; Policy</a></label>\r\n                                </div>\r\n                                <button class=\"btn btn-info btn-sm\">Sign Up</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <span>Already have an account? <a href=\"\">Login Now</a></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal slide-in-left modal-left fade \" id=\"side-modal-l\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"side-modal-wrapper\">\r\n                <div class=\"vertical-align\">\r\n                    <div class=\"table-cell\">\r\n                        <div class=\"pdd-horizon-15\">\r\n                            <h4>Sign Up</h4>\r\n                            <p class=\"mrg-btm-15 font-size-13\">Please enter your email and password to create account</p>\r\n                            <form>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Adress\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"checkbox font-size-12\">\r\n                                    <input id=\"agreement-2\" name=\"agreement-2\" type=\"checkbox\">\r\n                                    <label for=\"agreement-2\">I agree with the <a href=\"\">Privacy &amp; Policy</a></label>\r\n                                </div>\r\n                                <button class=\"btn btn-info btn-sm\">Sign Up</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <span>Already have an account? <a href=\"\">Login Now</a></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"modal-sm\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"text-center\">\r\n                    <img class=\"img-responsive mrg-horizon-auto mrg-vertical-25\" src=\"assets/images/others/img-1.jpg\" alt=\"\">\r\n                    <h3>Espire</h3>\r\n                    <p>18 items</p>\r\n                </div>\r\n            </div>\r\n            <button data-dismiss=\"modal\" class=\"btn btn-primary btn-block no-mrg no-border pdd-vertical-15 ng-scope\">\r\n                <span class=\"text-uppercase\">View Now</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"modal-lg\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"padding-15\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-auto col-md-5\">\r\n                            <h3 class=\"mrg-btm-20 mrg-top-130\">Download App</h3>\r\n                            <p>Let me see your identification. You don't need to see his identification. We don't need to see his identification. These are not the droids.</p>\r\n                            <div class=\"mrg-top-20\">\r\n                                <a href=\"\" data-dismiss=\"modal\" class=\"btn btn-info\">Noted!</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-center\">\r\n                            <img class=\"img-fluid mrg-horizon-auto\" src=\"assets/images/others/img-2.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade modal-fs\" id=\"modal-fs\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body height-100\">\r\n                <div class=\"vertical-align text-center\">\r\n                    <div class=\"table-cell\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                    <div class=\"pdd-horizon-30 pdd-btm-50\">\r\n                                        <img class=\"img-responsive mrg-horizon-auto\" src=\"assets/images/others/mailing.png\" alt=\"\">\r\n                                        <h4 class=\"mrg-top-20\">We'ill launch soon!</h4>\r\n                                        <p class=\"mrg-btm-15\">Subscribe us</p>\r\n                                        <form class=\"ng-pristine ng-valid\">\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"input-group\">\r\n                                                    <span class=\"input-group-addon\">@</span>\r\n                                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Adress\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <button class=\"btn btn-info btn-block text-bold text-uppercase\">Sign Up</button>\r\n                                        </form>\r\n                                        <small>No worries, we won't spam</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"modal-close\" href=\"\" data-dismiss=\"modal\">\r\n                    <i class=\"ti-close\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal END-->"

/***/ }),

/***/ "./src/app/ui-elements/notification/notification.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-elements/notification/notification.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _notification_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.services */ "./src/app/ui-elements/notification/notification.services.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(toastyService, toastCommunicationService) {
        this.toastyService = toastyService;
        this.toastCommunicationService = toastCommunicationService;
        this.themes = [
            { name: 'Default Theme', code: 'default' },
            { name: 'Material Design', code: 'material' },
            { name: 'Bootstrap 3', code: 'bootstrap' }
        ];
        this.types = [
            { name: 'Default', code: 'default' },
            { name: 'Info', code: 'info' },
            { name: 'Success', code: 'success' },
            { name: 'Wait', code: 'wait' },
            { name: 'Error', code: 'error' },
            { name: 'Warning', code: 'warning' }
        ];
        this.positions = [
            { name: 'Top Left', code: 'top-left' },
            { name: 'Top Center', code: 'top-center' },
            { name: 'Top Right', code: 'top-right' },
            { name: 'Bottom Left', code: 'bottom-left' },
            { name: 'Bottom Center', code: 'bottom-center' },
            { name: 'Bottom Right', code: 'bottom-right' },
            { name: 'Center Center', code: 'center-center' }
        ];
        this.options = {
            title: 'Toast It!',
            msg: 'Mmmm, tasties...',
            showClose: true,
            timeout: 5000,
            theme: this.themes[0].code,
            type: this.types[0].code
        };
    }
    NotificationComponent.prototype.getTitle = function (num) {
        return 'Countdown: ' + num;
    };
    NotificationComponent.prototype.getMessage = function (num) {
        return 'Seconds left: ' + num;
    };
    NotificationComponent.prototype.ngOnInit = function () {
        this.position = this.positions[5].code;
    };
    NotificationComponent.prototype.ngAfterViewInit = function () {
        // this._toastyConfig.theme = 'bootstrap';
        var toastOptions = {
            title: 'title',
            msg: 'my message',
            showClose: true,
            timeout: 15000,
            theme: "bootstrap",
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.success(toastOptions);
    };
    NotificationComponent.prototype.newToast = function () {
        var toastOptions = {
            title: this.options.title,
            msg: this.options.msg,
            showClose: this.options.showClose,
            timeout: this.options.timeout,
            theme: this.options.theme,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        switch (this.options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    NotificationComponent.prototype.newCountdownToast = function () {
        var _this = this;
        var interval = 1000;
        var seconds = this.options.timeout / 1000;
        var subscription;
        var toastOptions = {
            title: this.getTitle(seconds || 0),
            msg: this.getMessage(seconds || 0),
            showClose: this.options.showClose,
            timeout: this.options.timeout,
            theme: this.options.theme,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
                // Run the timer with 1 second iterval
                var observable = rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].interval(interval).take(seconds);
                // Start listen seconds bit
                subscription = observable.subscribe(function (count) {
                    // Update title
                    toast.title = _this.getTitle(seconds - count - 1 || 0);
                    // Update message
                    toast.msg = _this.getMessage(seconds - count - 1 || 0);
                });
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
                // Stop listenning
                subscription.unsubscribe();
            }
        };
        switch (this.options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    NotificationComponent.prototype.clearToasties = function () {
        this.toastyService.clearAll();
    };
    NotificationComponent.prototype.changePosition = function ($event) {
        this.position = $event;
        console.log(this.position);
        // Update position of the Toasty Component
        this.toastCommunicationService.setPosition(this.position);
    };
    NotificationComponent.prototype.sweetAlert1 = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Here's a message");
    };
    NotificationComponent.prototype.sweetAlert2 = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Here's a message!", "It's pretty, isn't it?");
    };
    NotificationComponent.prototype.sweetAlert3 = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Good job!", "You clicked the button!", "success");
    };
    NotificationComponent.prototype.sweetAlert4 = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Booyah!");
        });
    };
    NotificationComponent.prototype.sweetAlert5 = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Your file has been deleted.', 'success');
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./notification.html */ "./src/app/ui-elements/notification/notification.html")
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], _notification_services__WEBPACK_IMPORTED_MODULE_3__["NotificationCommunicationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/notification/notification.html":
/*!************************************************************!*\
  !*** ./src/app/ui-elements/notification/notification.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Notification</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Angular 2 Toasty</h4>\r\n\t\t\t\t\t<p class=\"width-90 mrg-btm-30\">Angular2 Toasty component shows growl-style alerts and messages for your application.</p>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n                                <label for=\"title\">Title</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"title\" [(ngModel)]=\"options.title\" name=\"title\">\r\n                            </div>\r\n                              \r\n                            <div class=\"form-group\">\r\n                                <label for=\"msg\">Message</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"msg\" [(ngModel)]=\"options.msg\" name=\"msg\">\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label for=\"theme\">Theme</label>\r\n                                <select class=\"form-control\" [(ngModel)]=\"options.theme\" name=\"theme\">\r\n                                    <option *ngFor=\"let theme of themes\" [value]=\"theme.code\">{{theme.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label for=\"theme\">Type</label>\r\n                                <select class=\"form-control\" [(ngModel)]=\"options.type\" name=\"type\">\r\n                                    <option *ngFor=\"let type of types\" [value]=\"type.code\">{{type.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label for=\"theme\">Position</label>\r\n                                <select class=\"form-control\" [ngModel]=\"position\" (ngModelChange)=\"changePosition($event)\" name=\"position\">\r\n                                    <option *ngFor=\"let pos of positions\" [value]=\"pos.code\">{{pos.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label for=\"timeout\">Timeout</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"timeout\" [(ngModel)]=\"options.timeout\" placeholder=\"5000\" name=\"timeout\"/>\r\n                            </div>\r\n                           \r\n                            <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" id=\"showclose\" [(ngModel)]=\"options.showClose\" name=\"showClose\"/>\r\n                                    <label for=\"showclose\">Show Close Icon</label>\r\n                                </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <button class=\"btn btn-default\" (click)=\"clearToasties()\">Clear All</button>\r\n                            <button class=\"btn btn-primary\" (click)=\"newToast()\">Add</button>\r\n                            <button class=\"btn btn-success\" (click)=\"newCountdownToast()\">Countdown</button>\r\n                        </div>\r\n                    </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Sweet Alert</h4>\r\n\t\t\t\t\t<p>Sweetalert is a beautiful replacement for JavaScript \"alert\"</p>\r\n\t\t\t\t\t<p>SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizeable, as you can see below!</p>\r\n                    <div class=\"mrg-top-20 mrg-btm-30\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default btn-rounded\" (click)=\"sweetAlert1()\">Simple Message</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-rounded\" (click)=\"sweetAlert2()\">With Text</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-success btn-rounded\" (click)=\"sweetAlert3()\">Success Message</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h5>With Function</h5>\r\n\t\t\t\t\t<p>A warning message, with a function attached to the \"Confirm\"-button</p>\r\n\t\t\t\t\t<div class=\"mrg-top-20 mrg-btm-30\">\r\n\t\t\t\t\t\t<button class=\"btn btn-warning btn-rounded\" (click)=\"sweetAlert4()\">Try Me</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h5>Passing a Parameter</h5>\r\n\t\t\t\t\t<p>you can execute something else for \"Cancel\".</p>\r\n\t\t\t\t\t<div class=\"mrg-top-20 mrg-btm-30\">\r\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-rounded\" (click)=\"sweetAlert5()\">Try Me</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "./src/app/ui-elements/notification/notification.services.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-elements/notification/notification.services.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCommunicationService", function() { return NotificationCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationCommunicationService = /** @class */ (function () {
    function NotificationCommunicationService() {
        // Observable string sources
        this.positionSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.position$ = this.positionSource.asObservable();
    }
    NotificationCommunicationService.prototype.setPosition = function (position) {
        this.positionSource.next(position);
    };
    NotificationCommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationCommunicationService);
    return NotificationCommunicationService;
}());



/***/ }),

/***/ "./src/app/ui-elements/progress-slider/progress-slider.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-elements/progress-slider/progress-slider.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProgressNSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressNSliderComponent", function() { return ProgressNSliderComponent; });
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

var ProgressNSliderComponent = /** @class */ (function () {
    function ProgressNSliderComponent() {
        this.horizonSlider1 = {
            start: 30,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.horizonSlider2 = {
            start: 60,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.horizonSlider3 = {
            start: 50,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.horizonSlider4 = {
            start: 80,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.horizonSlider5 = {
            start: 20,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.horizonSlider6 = {
            start: 50,
            connect: 'lower',
            step: 1,
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider1 = {
            start: 30,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider2 = {
            start: 50,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider3 = {
            start: 40,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider4 = {
            start: 60,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider5 = {
            start: 80,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.verticalSlider6 = {
            start: 70,
            connect: 'lower',
            step: 1,
            orientation: 'vertical',
            range: {
                min: 0,
                max: 100
            }
        };
        this.rangeSlider = {
            connect: true,
            step: 5,
            range: {
                min: 0,
                max: 1000
            }
        };
        this.tabDragSlider = {
            connect: true,
            step: 5,
            behaviour: 'tap-drag',
            range: {
                min: 0,
                max: 1000
            }
        };
        this.stepSlider = {
            connect: 'lower',
            step: 10,
            pips: { mode: 'steps', density: 10 },
            range: {
                min: 0,
                max: 100
            }
        };
        this.sliderModel1 = 30;
        this.sliderModel2 = 60;
        this.sliderModel3 = 50;
        this.sliderModel4 = 80;
        this.sliderModel5 = 20;
        this.sliderModel6 = 50;
        this.verticalModel1 = 30;
        this.verticalModel2 = 50;
        this.verticalModel3 = 40;
        this.verticalModel4 = 60;
        this.verticalModel5 = 80;
        this.verticalModel6 = 70;
        this.rangeModel = [300, 800];
        this.tabDragModel = [200, 500];
        this.stepModel = 20;
    }
    ProgressNSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./progress-slider.html */ "./src/app/ui-elements/progress-slider/progress-slider.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProgressNSliderComponent);
    return ProgressNSliderComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/progress-slider/progress-slider.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-elements/progress-slider/progress-slider.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>Progress Bar</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h4 class=\"card-title\">Basic Progress Bar</h4>\r\n                            <div class=\"row mrg-top-30\">\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"progress\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-primary\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-success\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-info\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-warning\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-danger\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:85%\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h4 class=\"card-title\">Progress Bar Size</h4>\r\n                            <div class=\"row mrg-top-30\">\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"progress progress-primary\">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:30%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-primary progress-sm \">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-primary progress-md \">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-primary progress-lg \">\r\n                                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h4 class=\"card-title\">Progress Bar Striped</h4>\r\n                            <div class=\"row mrg-top-30\">\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"progress progress-primary\">\r\n                                        <div class=\"progress-bar active progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:30%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-success progress-sm \">\r\n                                        <div class=\"progress-bar active progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-info progress-md \">\r\n                                        <div class=\"progress-bar active progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"progress progress-warning progress-lg \">\r\n                                        <div class=\"progress-bar active progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-title\">\r\n                <h4>Slider</h4>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"mr-auto ml-auto col-md-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <h4 class=\"card-title\">Horizontal Slider</h4>\r\n                                    <div class=\"row mrg-top-30\">\r\n                                        <div class=\"col-md-10\">\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider [config]=\"horizonSlider1\" [(ngModel)]=\"sliderModel1\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider class=\"slider-primary\" [config]=\"horizonSlider2\" [(ngModel)]=\"sliderModel2\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider class=\"slider-success\" [config]=\"horizonSlider3\" [(ngModel)]=\"sliderModel3\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider class=\"slider-info\" [config]=\"horizonSlider4\" [(ngModel)]=\"sliderModel4\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider class=\"slider-warning\" [config]=\"horizonSlider5\" [(ngModel)]=\"sliderModel5\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-btm-40\">\r\n                                                <nouislider class=\"slider-danger\" [config]=\"horizonSlider6\" [(ngModel)]=\"sliderModel6\"></nouislider>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h4 class=\"card-title\">Vertical Slider</h4>\r\n                                    <div class=\"row mrg-top-30\">\r\n                                        <div class=\"col-md-10\">\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider [config]=\"verticalSlider1\" [(ngModel)]=\"verticalModel1\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider class=\"slider-primary\" [config]=\"verticalSlider2\" [(ngModel)]=\"verticalModel2\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider class=\"slider-success\" [config]=\"verticalSlider3\" [(ngModel)]=\"verticalModel3\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider class=\"slider-info\" [config]=\"verticalSlider4\" [(ngModel)]=\"verticalModel4\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider class=\"slider-warning\" [config]=\"verticalSlider5\" [(ngModel)]=\"verticalModel5\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                            <div class=\"mrg-right-40 inline-block\">\r\n                                                <nouislider class=\"slider-danger\" [config]=\"verticalSlider6\" [(ngModel)]=\"verticalModel6\" style=\"height: 240px\"></nouislider>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mrg-top-70\">\r\n                        <div class=\"mr-auto ml-auto col-md-7\">\r\n                            <h4 class=\"card-title\">Ranged Slider</h4>\r\n                            <div class=\"mrg-top-30\">\r\n                                <nouislider class=\"slider-primary\" [config]=\"rangeSlider\" [(ngModel)]=\"rangeModel\"></nouislider>\r\n                                <div class=\"mrg-top-10\">\r\n                                    <p class=\"inline-block\"><b>Min: </b> <span>${{rangeModel[0]}}</span></p>\r\n                                    <p class=\"pull-right\"><b>Max: </b> <span>${{rangeModel[1]}}</span></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mrg-top-70\">\r\n                        <div class=\"mr-auto ml-auto col-md-7\">\r\n                            <h4 class=\"card-title\">Tab Drag Slider</h4>\r\n                            <div class=\"mrg-top-30\">\r\n                                <nouislider class=\"slider-info\" [config]=\"tabDragSlider\" [(ngModel)]=\"tabDragModel\"></nouislider>\r\n                                <div class=\"mrg-top-10\">\r\n                                    <p class=\"inline-block\"><b>Min: </b> <span>${{tabDragModel[0]}}</span></p>\r\n                                    <p class=\"pull-right\"><b>Max: </b> <span>${{tabDragModel[1]}}</span></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mrg-vertical-70\">\r\n                        <div class=\"mr-auto ml-auto col-md-7\">\r\n                            <h4 class=\"card-title\">Step Slider</h4>\r\n                            <div class=\"mrg-top-30\">\r\n                                <nouislider class=\"slider-info\" [config]=\"stepSlider\" [(ngModel)]=\"stepModel\"></nouislider>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-elements/tabs/tabs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-elements/tabs/tabs.component.ts ***!
  \****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tabs.html */ "./src/app/ui-elements/tabs/tabs.html")
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/tabs/tabs.html":
/*!********************************************!*\
  !*** ./src/app/ui-elements/tabs/tabs.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>Tabs</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Default Tabs</h4>\r\n                    <div class=\"tab-info\">\r\n                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#default-tab-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#default-tab-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#default-tab-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"default-tab-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"default-tab-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"default-tab-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Card Tabs</h4>\r\n                </div>\r\n                <div class=\"tab-info\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#card-tab-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#card-tab-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#card-tab-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"card-tab-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"card-tab-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"card-tab-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Centered</h4>\r\n                </div>\r\n                <div class=\"tab-info center-tabs \">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-centered-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-centered-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-centered-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-centered-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-centered-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-centered-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Primary</h4>\r\n                </div>\r\n                <div class=\"tab-primary\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-primary-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-primary-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-primary-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-primary-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-primary-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-primary-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Success</h4>\r\n                </div>\r\n                <div class=\"tab-success\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-success-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-success-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-success-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-success-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-success-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-success-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Info</h4>\r\n                </div>\r\n                <div class=\"tab-info\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-info-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-info-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-info-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-info-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-info-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-info-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Warning</h4>\r\n                </div>\r\n                <div class=\"tab-warning\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-warning-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-warning-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-warning-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-warning-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-warning-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-warning-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"padding-20\">\r\n                    <h4 class=\"card-title no-mrg-btm\">Tabs Danger</h4>\r\n                </div>\r\n                <div class=\"tab-danger\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-danger-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-danger-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#tab-danger-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"tab-danger-1\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-danger-2\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                            </div>\r\n                        </div>\r\n                        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab-danger-3\">\r\n                            <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills</h4>\r\n                    <div class=\"tab-primary\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#nav-pills-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#nav-pills-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#nav-pills-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"nav-pills-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"nav-pills-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"nav-pills-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills Vertical</h4>\r\n                    <div class=\"pill-info nav-vertical nav-stacked\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-vertical-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-vertical-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-vertical-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"pills-vertical-1\">\r\n                                <div class=\"pdd-horizon-15\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-vertical-2\">\r\n                                <div class=\"pdd-horizon-15\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-vertical-3\">\r\n                                <div class=\"pdd-horizon-15\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills Success</h4>\r\n                    <div class=\"pill-success\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-success-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-success-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-success-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"pills-success-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-success-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-success-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills Info</h4>\r\n                    <div class=\"pill-info\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-info-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-info-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-info-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"pills-info-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-info-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-info-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills Warning</h4>\r\n                    <div class=\"pill-warning\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-warning-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-warning-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-warning-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"pills-warning-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-warning-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-warning-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Nav Pills Danger</h4>\r\n                    <div class=\"pill-danger\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-danger-1\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\">Home</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-danger-2\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"#pills-danger-3\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\">Setting</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"pills-danger-1\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Oh, yes, that's very good. I like that. Oh! Something's not right because now I can't see. Wait. Wait! Oh, my! what have you done? I'm backwards, you stupid furball. Only an overgrown mophead like you would be stupid enough... I feel terrible. Why are they doing this? They never even asked me any questions. Lando. Get out of here, Lando! Shut up and listen! Vader has agreed to turn Leia and Chewie over to me. Over to you? They'll have to stay here, but at least they'll be safe.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-danger-2\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner.You'll have to make this shot.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pills-danger-3\">\r\n                                <div class=\"pdd-horizon-15 pdd-vertical-20\">\r\n                                    <p>If only you had attached my legs, I wouldn't be in this ridiculous position. Now, remember, Chewbacca, you have a responsibility to me, so don't do anything foolish. What's going on...buddy? You're being put into carbon freeze. What if he doesn't survive? He's worth a lot to me. The Empire will compensate you if he dies. Put him in! Oh, no! No, no, no! Stop, Chewbacca, stop...! Stop, Chewie, stop! Do you hear me? Stop! Yes, stop, please! I'm not ready to die. Chewie! Chewie, this won't help me.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-title\">\r\n        <h4>Accordions</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div id=\"accordion-1\" class=\"accordion panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a data-toggle=\"collapse\" data-parent=\"#accordion-1\" href=\"#collapseOne\">\r\n                                    <span>Lando Calrissian</span>\r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n\r\n                    <div id=\"collapseOne\" class=\"collapse panel-collapse show\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-1\" href=\"#collapseTwo\">\r\n                                    <span>Grand Moff Tarkin</span> \r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"collapse panel-collapse\" role=\"tabpanel\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-1\" href=\"#collapseThree\" >\r\n                                    <span>Mon Calamari </span> \r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"collapse panel-collapse\" role=\"tabpanel\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div id=\"accordion-2\" class=\"accordion panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"heading-2-One\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-2\" href=\"#collapse-2-One\">\r\n                                    <span>Lando Calrissian</span>\r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n                    <div id=\"collapse-2-One\" class=\"collapse panel-collapse\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"heading-2-Two\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a data-toggle=\"collapse\" data-parent=\"#accordion-2\" href=\"#collapse-2-Two\">\r\n                                    <span>Grand Moff Tarkin</span> \r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n                    <div id=\"collapse-2-Two\" class=\"collapse panel-collapse show\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\" role=\"tab\" id=\"heading-2-Three\">\r\n                        <h4 class=\"panel-title\">\r\n                                <a  data-toggle=\"collapse\" data-parent=\"#accordion-2\" href=\"#collapse-2-Three\">\r\n                                    <span>Mon Calamari </span> \r\n                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                </a>\r\n                            </h4>\r\n                    </div>\r\n                    <div id=\"collapse-2-Three\" class=\"collapse panel-collapse\">\r\n                        <div class=\"panel-body\">\r\n                            <p>\r\n                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-elements/typography/typography.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-elements/typography/typography.component.ts ***!
  \****************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./typography.html */ "./src/app/ui-elements/typography/typography.html")
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/typography/typography.html":
/*!********************************************************!*\
  !*** ./src/app/ui-elements/typography/typography.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Typography</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t<span>Headings</span>\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t<p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-50\">\r\n\t\t\t\t\t\t\t\t<h1>h1. Heading 1</h1>\r\n\t\t\t\t\t\t\t\t<h2>h2. Heading 2</h2>\r\n\t\t\t\t\t\t\t\t<h3>h3. Heading 3</h3>\r\n\t\t\t\t\t\t\t\t<h4>h4. Heading 4</h4>\r\n\t\t\t\t\t\t\t\t<h5>h5. Heading 5</h5>\r\n\t\t\t\t\t\t\t\t<h6>h5. Heading 6</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t<span>Sub Headings</span>\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t<p>Use <code>&lt;small&gt;</code> HTML tag to create a lighter text</p>\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-50\">\r\n\t\t\t\t\t\t\t\t<h1>h1. Heading 1 <small>Sub-heading</small></h1>\r\n\t\t\t\t\t\t\t\t<h2>h2. Heading 2 <small>Sub-heading</small></h2>\r\n\t\t\t\t\t\t\t\t<h3>h3. Heading 3 <small>Sub-heading</small></h3>\r\n\t\t\t\t\t\t\t\t<h4>h4. Heading 4 <small>Sub-heading</small></h4>\r\n\t\t\t\t\t\t\t\t<h5>h5. Heading 5 <small>Sub-heading</small></h5>\r\n\t\t\t\t\t\t\t\t<h6>h5. Heading 6 <small>Sub-heading</small></h6>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Paragraph Text</h4>\r\n\t\t\t\t\t\t\t<p>The ship is almost finished. Two or Three more things and we're in great shape. The sooner the better. Something's wrong here. No one has seen or knows anything about Threepio. He's been gone too long to have gotten lost. Relax</p>\r\n\t\t\t\t\t\t\t<p> I'll talk to Lando and see what I can find out. I don't trust Lando. Well, I don't trust him, either. But he is my friend. Besides, we'll soon be gone. And then you're as good as gone, aren't you?</p>\r\n\t\t\t\t\t\t\t<p>Put Captain Solo in the cargo hold. Artoo! Artoo! Where have you been? Turn around, you wooly...! Hurry, hurry!</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5 mr-auto ml-auto\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Paragraph Lead</h4>\r\n\t\t\t\t\t\t\t<p class=\"mrg-btm-40\">Use <code>.lead</code> class to make your pharagraph outstanding</p>\r\n\t\t\t\t\t\t\t<p class=\"lead\">Excuse me, sir. Might I inqu-... Yes, sir? Do you know where Commander Skywalker is?</p>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Adresses</h4>\r\n\t\t\t\t\t\t\t<address class=\"mrg-top-30\">\r\n\t\t\t\t\t\t\t\t<b class=\"text-dark\">Google, Inc.</b>\r\n\t\t\t\t\t\t\t\t<br>71 Pilgrim Avenue \r\n\t\t\t\t\t\t\t\t<br>Chevy Chase, MD 20815\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<abbr class=\"text-dark\" title=\"Phone\">Phone:</abbr>(123) 456-7890\r\n\t\t\t\t\t\t\t</address>\r\n\t\t\t\t\t\t\t<address>\r\n\t\t\t\t\t\t\t\t<b class=\"text-dark\">Nate Leong</b>\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<a href=\"mailto:#\">nate.leong@themenate.com</a>\r\n\t\t\t\t\t\t\t</address>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Inline text</h4>\r\n\t\t\t\t\t\t\t<div class=\"row mrg-top-30\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Highlight</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p>Oh, I told you it was <mark>dangerous</mark> here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Underline</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<u>Oh, I told you it was dangerous here.</u>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Slash</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<del>Oh, I told you it was dangerous here.</del>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Small</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p><small>Oh, I told you it was dangerous here.</small></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Lowercase</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-lowercase\">Oh, I told you it was dangerous here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Uppercase</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase\">Oh, I told you it was dangerous here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Capitalized</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-capitalize\">Oh, I told you it was dangerous here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Bold</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p>Oh, I told you it was <b>dangerous</b> here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mrg-btm-30\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Italic</h5>\r\n\t\t\t\t\t\t\t\t\t\t<p>Oh, I told you it was <i>dangerous</i> here.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<div class=\"row mrg-top-70\">\r\n\t\t\t\t\t\t<div class=\"mr-auto ml-auto col-md-4\">\r\n\t\t\t\t\t\t\t<h4>Text Color</h4>\r\n\t\t\t\t\t\t\t<p class=\"mrg-top-20\">Bootstrap has some contextual classes that can be used to provide \"meaning through colors\". Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-50 mrg-btm-70\">\r\n\t\t\t\t\t\t<div class=\"mr-auto ml-auto col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-dark\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-dark</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-success\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-success</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-gray\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-gray</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-info\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-info</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-white border bottom\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-white</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-warning\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-warning</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-primary\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-primary</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-20 bg-danger\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"padding-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"no-mrg-btm\">.text-danger</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"mr-auto ml-auto col-md-4\">\r\n\t\t\t\t\t\t\t<h4>Quote</h4>\r\n\t\t\t\t\t\t\t<blockquote class=\"mrg-top-20\">\r\n\t\t\t\t\t\t\t<p>Irresponsibility is part of the pleasure of all art; it is the part the schools cannot recognize.</p>\r\n\t\t\t\t\t\t\t<small>James Joyce</small>\r\n\t\t\t\t\t\t\t</blockquote>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Unordered</h4>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Ordered</h4>\r\n\t\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Unstyled</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Dash</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list tick\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Dash</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list dash\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Star</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list star\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">List Lower Alpha</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list lower-alpha\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">Bullet Color Primary</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list tick bullet-primary\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">Bullet Color Success</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list dash bullet-success\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">Bullet Color Info</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list star bullet-info\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">Bullet Color Warning</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list bullet bullet-warning\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"row mrg-top-50\">\r\n\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title mrg-btm-30\">Bullet Color Danger</h4>\r\n\t\t\t\t\t\t\t<ul class=\"list arrow bullet-danger\">\r\n\t\t\t\t\t\t\t\t<li>Lorem ipsum dolor sit amet</li>\r\n\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit</li>\r\n\t\t\t\t\t\t\t\t<li>Integer molestie lorem at massa</li>\r\n\t\t\t\t\t\t\t\t<li>Facilisis in pretium nisl aliquet</li>\r\n\t\t\t\t\t\t\t\t<li>Nulla volutpat aliquam velit\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-elements/ui-elements-routing.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-elements/ui-elements-routing.ts ***!
  \****************************************************/
/*! exports provided: UiElementsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsRoutes", function() { return UiElementsRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/ui-elements/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/ui-elements/cards/cards.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/ui-elements/modals/modals.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/ui-elements/tabs/tabs.component.ts");
/* harmony import */ var _progress_slider_progress_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-slider/progress-slider.component */ "./src/app/ui-elements/progress-slider/progress-slider.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/ui-elements/notification/notification.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/ui-elements/typography/typography.component.ts");
//Ui Elements Components







var UiElementsRoutes = [
    {
        path: '',
        data: {
            title: 'ui-elements'
        },
        children: [
            {
                path: 'cards',
                component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"],
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"],
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'modals',
                component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_2__["ModalsComponent"],
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"],
                data: {
                    title: 'Tabs & Accordion'
                }
            },
            {
                path: 'progress-slider',
                component: _progress_slider_progress_slider_component__WEBPACK_IMPORTED_MODULE_4__["ProgressNSliderComponent"],
                data: {
                    title: 'Progress & Slider'
                }
            },
            {
                path: 'notification',
                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                data: {
                    title: 'Notification'
                }
            },
            {
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"],
                data: {
                    title: 'Typography'
                }
            },
            {
                path: 'icons',
                data: {
                    title: 'Icons'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/ui-elements/ui-elements.modules.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-elements/ui-elements.modules.ts ***!
  \****************************************************/
/*! exports provided: UiElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsModule", function() { return UiElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_directives_cards_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/cards.directive */ "./src/app/shared/directives/cards.directive.ts");
/* harmony import */ var ng2_nouislider_src_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider/src/nouislider */ "./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var ng2_nouislider_src_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider_src_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/ui-elements/cards/cards.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/ui-elements/buttons/buttons.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/ui-elements/modals/modals.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/ui-elements/tabs/tabs.component.ts");
/* harmony import */ var _progress_slider_progress_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-slider/progress-slider.component */ "./src/app/ui-elements/progress-slider/progress-slider.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/ui-elements/notification/notification.component.ts");
/* harmony import */ var _notification_notification_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.services */ "./src/app/ui-elements/notification/notification.services.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/ui-elements/typography/typography.component.ts");
/* harmony import */ var _ui_elements_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui-elements-routing */ "./src/app/ui-elements/ui-elements-routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Ui Elements Component








// Ui Elements Routing

var UiElementsModule = /** @class */ (function () {
    function UiElementsModule() {
    }
    UiElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ui_elements_routing__WEBPACK_IMPORTED_MODULE_15__["UiElementsRoutes"]),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ng2_nouislider_src_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_6__["ToastyModule"]
            ],
            declarations: [
                _shared_directives_cards_directive__WEBPACK_IMPORTED_MODULE_4__["Cards_Directives"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsComponent"],
                _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__["ModalsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
                _progress_slider_progress_slider_component__WEBPACK_IMPORTED_MODULE_11__["ProgressNSliderComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_14__["TypographyComponent"]
            ],
            providers: [_notification_notification_services__WEBPACK_IMPORTED_MODULE_13__["NotificationCommunicationService"]]
        })
    ], UiElementsModule);
    return UiElementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-elements-ui-elements-modules.js.map