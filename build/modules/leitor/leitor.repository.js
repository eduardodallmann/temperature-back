"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorRepository = void 0;
const typeorm_1 = require("typeorm");
const leitor_entity_1 = require("./leitor.entity");
let LeitorRepository = class LeitorRepository extends typeorm_1.Repository {
    async listLeitors(congregacaoId) {
        const [leitores, total] = await this.createQueryBuilder('leitor')
            .where('leitor.congregacao = :congregacaoId', { congregacaoId })
            .getManyAndCount();
        return { leitores, total };
    }
};
LeitorRepository = __decorate([
    (0, typeorm_1.EntityRepository)(leitor_entity_1.Leitor)
], LeitorRepository);
exports.LeitorRepository = LeitorRepository;
//# sourceMappingURL=leitor.repository.js.map