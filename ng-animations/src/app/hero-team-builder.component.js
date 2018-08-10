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
var hero_service_1 = require("./hero.service");
var HeroTeamBuilderComponent = /** @class */ (function () {
    function HeroTeamBuilderComponent(heroes) {
        this.heroes = heroes;
    }
    HeroTeamBuilderComponent = __decorate([
        core_1.Component({
            selector: 'hero-team-builder',
            template: "\n    <div class=\"buttons\">\n      <button [disabled]=\"!heroes.canAdd()\" (click)=\"heroes.addInactive()\">Add inactive hero</button>\n      <button [disabled]=\"!heroes.canAdd()\" (click)=\"heroes.addActive()\">Add active hero</button>\n      <button [disabled]=\"!heroes.canRemove()\" (click)=\"heroes.remove()\">Remove hero</button>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Basic</h4>\n        <hero-list-basic [heroes]=heroes></hero-list-basic>\n      </div>\n      <div class=\"column\">\n        <h4>Transitions 1</h4>\n        <hero-list-inline-styles [heroes]=heroes></hero-list-inline-styles>\n      </div>\n      <div class=\"column\">\n        <h4>Transitions 2</h4>\n        <hero-list-combined-transitions [heroes]=heroes></hero-list-combined-transitions>\n      </div>\n      <div class=\"column\">\n        <h4>Two-way transitions</h4>\n        <hero-list-twoway [heroes]=heroes></hero-list-twoway>\n      </div>\n      <div class=\"column\">\n        <h4>Enter & Leave</h4>\n        <hero-list-enter-leave [heroes]=heroes></hero-list-enter-leave>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Enter & Leave & States</h4>\n        <hero-list-enter-leave-states [heroes]=heroes></hero-list-enter-leave-states>\n      </div>\n      <div class=\"column\">\n        <h4>Auto Style</h4>\n        <hero-list-auto [heroes]=heroes></hero-list-auto>\n      </div>\n      <div class=\"column\">\n        <h4>Different Timings</h4>\n        <hero-list-timings [heroes]=heroes></hero-list-timings>\n      </div>\n      <div class=\"column\">\n        <h4>Multiple Keyframes</h4>\n        <hero-list-multistep [heroes]=heroes></hero-list-multistep>\n      </div>\n      <div class=\"column\">\n        <h4>Parallel Groups</h4>\n        <hero-list-groups [heroes]=heroes></hero-list-groups>\n      </div>\n    </div>\n  ",
            styles: ["\n    .buttons {\n      text-align: center;\n    }\n    button {\n      padding: 1.5em 3em;\n    }\n    .columns {\n      display: flex;\n      flex-direction: row;\n    }\n    .column {\n      flex: 1;\n      padding: 10px;\n    }\n    .column p {\n      min-height: 6em;\n    }\n  "],
            providers: [hero_service_1.Heroes]
        }),
        __metadata("design:paramtypes", [hero_service_1.Heroes])
    ], HeroTeamBuilderComponent);
    return HeroTeamBuilderComponent;
}());
exports.HeroTeamBuilderComponent = HeroTeamBuilderComponent;
//# sourceMappingURL=hero-team-builder.component.js.map