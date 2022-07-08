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
exports.Leitor = void 0;
const typeorm_1 = require("typeorm");
const equipamento_entity_1 = require("../equipamento/equipamento.entity");
const leitura_entity_1 = require("../leitura/leitura.entity");
let Leitor = class Leitor extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Leitor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Leitor.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Leitor.prototype, "frequencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Leitor.prototype, "limiteToleranciaMaxima", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Leitor.prototype, "toleranciaMaxima", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Leitor.prototype, "toleranciaMinima", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Leitor.prototype, "limiteToleranciaMinima", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_) => equipamento_entity_1.Equipamento, (quipamento) => quipamento.id, {
        nullable: false,
    }),
    __metadata("design:type", equipamento_entity_1.Equipamento)
], Leitor.prototype, "equipamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => leitura_entity_1.Leitura, (leitura) => leitura.leitor),
    __metadata("design:type", Array)
], Leitor.prototype, "leituras", void 0);
Leitor = __decorate([
    (0, typeorm_1.Entity)('leitor')
], Leitor);
exports.Leitor = Leitor;
//# sourceMappingURL=leitor.entity.js.map