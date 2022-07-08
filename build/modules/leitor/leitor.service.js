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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment_1 = __importDefault(require("moment"));
const typeorm_2 = require("typeorm");
const equipamento_service_1 = require("../equipamento/equipamento.service");
const leitor_entity_1 = require("./leitor.entity");
let LeitorService = class LeitorService {
    constructor(leitorRepository, equipamentoService) {
        this.leitorRepository = leitorRepository;
        this.equipamentoService = equipamentoService;
    }
    async list(equipamento) {
        return this.equipamentoService.getEquipamentoWithLeitores(equipamento);
    }
    getById(leitorId) {
        return this.leitorRepository.findOneByOrFail({ id: leitorId });
    }
    async save(leitor) {
        return this.leitorRepository.save(leitor);
    }
    async delete(ids) {
        return this.leitorRepository.delete(ids);
    }
    media(arr) {
        return arr.reduce((acc, n, _, a) => acc + n / a.length, 0);
    }
    async listLeituras(query) {
        const leitores = await this.leitorRepository.find({
            relations: { leituras: true },
            where: {
                equipamento: { id: query.equipamentoId },
                leituras: {
                    data: (0, typeorm_2.Between)((0, moment_1.default)(query.dataInicial).hour(0).minute(0).second(0).toDate(), (0, moment_1.default)(query.dataFinal).hour(23).minute(59).second(59).toDate()),
                },
            },
        });
        const limiteToleranciaMaxima = this.media(leitores.map((d) => d.limiteToleranciaMaxima));
        const toleranciaMaxima = this.media(leitores.map((d) => d.toleranciaMaxima));
        const toleranciaMinima = this.media(leitores.map((d) => d.toleranciaMinima));
        const limiteToleranciaMinima = this.media(leitores.map((d) => d.limiteToleranciaMinima));
        const leituras = [];
        leitores.forEach((d) => leituras.push(...d.leituras.filter((l) => (0, moment_1.default)(l.data).isBetween(query.dataInicial, query.dataFinal, 'days', '[]'))));
        return {
            limiteToleranciaMaxima,
            toleranciaMaxima,
            toleranciaMinima,
            limiteToleranciaMinima,
            leituras,
        };
    }
};
LeitorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leitor_entity_1.Leitor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        equipamento_service_1.EquipamentoService])
], LeitorService);
exports.LeitorService = LeitorService;
//# sourceMappingURL=leitor.service.js.map