"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroControlsComponent = /** @class */ (function () {
    function HeroControlsComponent() {
    }
    HeroControlsComponent.prototype.activate = function () {
        this.hero.active = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], HeroControlsComponent.prototype, "hero", void 0);
    HeroControlsComponent = __decorate([
        core_1.Component({
            selector: 'hero-controls',
            template: "\n    <style>\n      button {\n        background-color: white;\n        border: 1px solid #777;\n      }\n    </style>\n    <h3>Controls</h3>\n    <button (click)=\"activate()\">Activate</button>\n  "
        })
    ], HeroControlsComponent);
    return HeroControlsComponent;
}());
exports.HeroControlsComponent = HeroControlsComponent;
//# sourceMappingURL=hero-controls.component.js.map