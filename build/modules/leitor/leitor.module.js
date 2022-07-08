"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equipamento_module_1 = require("../equipamento/equipamento.module");
const leitor_controller_1 = require("./leitor.controller");
const leitor_entity_1 = require("./leitor.entity");
const leitor_service_1 = require("./leitor.service");
let LeitorModule = class LeitorModule {
};
LeitorModule = __decorate([
    (0, common_1.Module)({
        imports: [equipamento_module_1.EquipamentoModule, typeorm_1.TypeOrmModule.forFeature([leitor_entity_1.Leitor])],
        providers: [leitor_service_1.LeitorService],
        controllers: [leitor_controller_1.LeitorController],
        exports: [leitor_service_1.LeitorService, typeorm_1.TypeOrmModule.forFeature([leitor_entity_1.Leitor])],
    })
], LeitorModule);
exports.LeitorModule = LeitorModule;
//# sourceMappingURL=leitor.module.js.map