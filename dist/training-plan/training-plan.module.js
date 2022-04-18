"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingPlanModule = void 0;
const common_1 = require("@nestjs/common");
const training_plan_controller_1 = require("./controllers/training-plan.controller");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./models/post.entity");
const training_plan_service_1 = require("./services/training-plan.service");
let TrainingPlanModule = class TrainingPlanModule {
};
TrainingPlanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_entity_1.TrainingPlanEntity])],
        providers: [training_plan_service_1.TrainingPlanService],
        controllers: [training_plan_controller_1.TrainingPlanController],
    })
], TrainingPlanModule);
exports.TrainingPlanModule = TrainingPlanModule;
//# sourceMappingURL=training-plan.module.js.map