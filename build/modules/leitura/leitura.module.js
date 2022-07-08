"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeituraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leitor_module_1 = require("../leitor/leitor.module");
const leitura_controller_1 = require("./leitura.controller");
const leitura_entity_1 = require("./leitura.entity");
const leitura_service_1 = require("./leitura.service");
let LeituraModule = class LeituraModule {
};
LeituraModule = __decorate([
    (0, common_1.Module)({
        imports: [leitor_module_1.LeitorModule, typeorm_1.TypeOrmModule.forFeature([leitura_entity_1.Leitura])],
        providers: [leitura_service_1.LeituraService],
        controllers: [leitura_controller_1.LeituraController],
        exports: [typeorm_1.TypeOrmModule.forFeature([leitura_entity_1.Leitura])],
    })
], LeituraModule);
exports.LeituraModule = LeituraModule;
//# sourceMappingURL=leitura.module.js.map