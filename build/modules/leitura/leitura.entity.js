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
exports.Leitura = exports.StatusLeitura = void 0;
const typeorm_1 = require("typeorm");
const leitor_entity_1 = require("../leitor/leitor.entity");
var StatusLeitura;
(function (StatusLeitura) {
    StatusLeitura["DENTRO"] = "DENTRO";
    StatusLeitura["ACIMA"] = "ACIMA";
    StatusLeitura["FORA"] = "FORA";
})(StatusLeitura = exports.StatusLeitura || (exports.StatusLeitura = {}));
let Leitura = class Leitura extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Leitura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Leitura.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Leitura.prototype, "temperatura", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Leitura.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_) => leitor_entity_1.Leitor, (leitor) => leitor.id, {
        nullable: false,
    }),
    __metadata("design:type", leitor_entity_1.Leitor)
], Leitura.prototype, "leitor", void 0);
Leitura = __decorate([
    (0, typeorm_1.Entity)('leitura')
], Leitura);
exports.Leitura = Leitura;
//# sourceMappingURL=leitura.entity.js.map