var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AutoGrowDirective = (function () {
    function AutoGrowDirective(el) {
        this.el = el;
        setTimeout(function () {
            var correction = el.nativeElement.offsetHeight - el.nativeElement.clientHeight;
            el.nativeElement.style.height = ((el.nativeElement.scrollHeight - correction) + 10) + 'px';
        }, 0);
    }
    AutoGrowDirective.prototype.onMouseEnter = function (textArea) {
        textArea.style.height = 'auto';
        var correction = textArea.offsetHeight - textArea.clientHeight;
        textArea.style.height = ((textArea.scrollHeight - correction) + 10) + 'px';
    };
    __decorate([
        core_1.HostListener('input', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AutoGrowDirective.prototype, "onMouseEnter", null);
    AutoGrowDirective = __decorate([
        core_1.Directive({
            selector: '[autoGrow]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], AutoGrowDirective);
    return AutoGrowDirective;
    var _a;
})();
exports.AutoGrowDirective = AutoGrowDirective;
//# sourceMappingURL=auto-grow.js.map