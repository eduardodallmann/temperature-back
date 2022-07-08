"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipamentoRepository = void 0;
const typeorm_1 = require("typeorm");
const equipamento_entity_1 = require("./equipamento.entity");
let EquipamentoRepository = class EquipamentoRepository extends typeorm_1.Repository {
    async listEquipamentos() {
        const [equipamentos, total] = await this.createQueryBuilder('equipamento').getManyAndCount();
        return { equipamentos, total };
    }
    async saveEquipamentos() {
        await this.createQueryBuilder('equipamento').getManyAndCount();
        return 'ok';
    }
};
EquipamentoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(equipamento_entity_1.Equipamento)
], EquipamentoRepository);
exports.EquipamentoRepository = EquipamentoRepository;
//# sourceMappingURL=equipamento.repository.js.map