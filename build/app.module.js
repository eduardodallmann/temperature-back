"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const equipamento_entity_1 = require("./modules/equipamento/equipamento.entity");
const equipamento_module_1 = require("./modules/equipamento/equipamento.module");
const leitor_entity_1 = require("./modules/leitor/leitor.entity");
const leitor_module_1 = require("./modules/leitor/leitor.module");
const leitura_entity_1 = require("./modules/leitura/leitura.entity");
const leitura_module_1 = require("./modules/leitura/leitura.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                entities: [equipamento_entity_1.Equipamento, leitor_entity_1.Leitor, leitura_entity_1.Leitura],
                synchronize: true,
            }),
            equipamento_module_1.EquipamentoModule,
            leitor_module_1.LeitorModule,
            leitura_module_1.LeituraModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [config_1.ConfigService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map