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
var HeroTeamComponent = /** @class */ (function () {
    function HeroTeamComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], HeroTeamComponent.prototype, "hero", void 0);
    HeroTeamComponent = __decorate([
        core_1.Component({
            selector: 'hero-team',
            template: "\n    <link rel=\"stylesheet\" href=\"app/hero-team.component.css\">\n    <h3>Team</h3>\n    <ul>\n      <li *ngFor=\"let member of hero.team\">\n        {{member}}\n      </li>\n    </ul>"
        })
    ], HeroTeamComponent);
    return HeroTeamComponent;
}());
exports.HeroTeamComponent = HeroTeamComponent;
//# sourceMappingURL=hero-team.component.js.map