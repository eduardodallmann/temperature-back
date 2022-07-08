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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeituraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const leitor_service_1 = require("../leitor/leitor.service");
const leitura_entity_1 = require("./leitura.entity");
let LeituraService = class LeituraService {
    constructor(leituraRepository, leitorService) {
        this.leituraRepository = leituraRepository;
        this.leitorService = leitorService;
    }
    calcStatus(temperatura, { limiteToleranciaMaxima, limiteToleranciaMinima, toleranciaMaxima, toleranciaMinima, }) {
        if (temperatura < limiteToleranciaMinima ||
            temperatura > limiteToleranciaMaxima) {
            return leitura_entity_1.StatusLeitura.ACIMA;
        }
        if (temperatura < toleranciaMinima || temperatura > toleranciaMaxima) {
            return leitura_entity_1.StatusLeitura.FORA;
        }
        return leitura_entity_1.StatusLeitura.DENTRO;
    }
    async save(leitura) {
        const leitor = await this.leitorService.getById(leitura.leitorId);
        return this.leituraRepository.save({
            leitor: { id: leitura.leitorId },
            temperatura: leitura.temperatura,
            data: new Date(),
            status: this.calcStatus(leitura.temperatura, leitor),
        });
    }
};
LeituraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leitura_entity_1.Leitura)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        leitor_service_1.LeitorService])
], LeituraService);
exports.LeituraService = LeituraService;
//# sourceMappingURL=leitura.service.js.map