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
var HeroListGroupsComponent = /** @class */ (function () {
    function HeroListGroupsComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_service_1.Heroes)
    ], HeroListGroupsComponent.prototype, "heroes", void 0);
    HeroListGroupsComponent = __decorate([
        core_1.Component({
            selector: 'hero-list-groups',
            template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
            styleUrls: ['./hero-list.component.css'],
            styles: ["\n    li {\n      padding: 0 !important;\n      text-align: center;\n    }\n  "],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.3s 0.1s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            core_1.animate('0.3s ease', core_1.style({
                                opacity: 1
                            }))
                        ])
                    ]),
                    core_1.transition('* => void', [
                        core_1.group([
                            core_1.animate('0.3s ease', core_1.style({
                                transform: 'translateX(50px)',
                                width: 10
                            })),
                            core_1.animate('0.3s 0.2s ease', core_1.style({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        })
    ], HeroListGroupsComponent);
    return HeroListGroupsComponent;
}());
exports.HeroListGroupsComponent = HeroListGroupsComponent;
//# sourceMappingURL=hero-list-groups.component.js.map