"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeituraRepository = void 0;
const typeorm_1 = require("typeorm");
const leitura_entity_1 = require("./leitura.entity");
let LeituraRepository = class LeituraRepository extends typeorm_1.Repository {
    async listLeituras(congregacaoId) {
        const [leituras, total] = await this.createQueryBuilder('leitura')
            .where('leitura.congregacao = :congregacaoId', { congregacaoId })
            .getManyAndCount();
        return { leituras, total };
    }
};
LeituraRepository = __decorate([
    (0, typeorm_1.EntityRepository)(leitura_entity_1.Leitura)
], LeituraRepository);
exports.LeituraRepository = LeituraRepository;
//# sourceMappingURL=leitura.repository.js.map