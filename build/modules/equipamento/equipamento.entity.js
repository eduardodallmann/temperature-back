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
exports.Equipamento = void 0;
const typeorm_1 = require("typeorm");
const leitor_entity_1 = require("../leitor/leitor.entity");
let Equipamento = class Equipamento extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Equipamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Equipamento.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Equipamento.prototype, "permanencia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => leitor_entity_1.Leitor, (leitor) => leitor.equipamento),
    __metadata("design:type", Array)
], Equipamento.prototype, "leitores", void 0);
Equipamento = __decorate([
    (0, typeorm_1.Entity)('equipamento')
], Equipamento);
exports.Equipamento = Equipamento;
//# sourceMappingURL=equipamento.entity.js.map