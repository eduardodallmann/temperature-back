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
exports.EquipamentoController = void 0;
const common_1 = require("@nestjs/common");
const equipamento_entity_1 = require("./equipamento.entity");
const equipamento_service_1 = require("./equipamento.service");
let EquipamentoController = class EquipamentoController {
    constructor(equipamentoService) {
        this.equipamentoService = equipamentoService;
    }
    async listEquipamento() {
        return this.equipamentoService.list();
    }
    async saveEquipamento(equipamento) {
        return this.equipamentoService.save(equipamento);
    }
    async deleteEquipamento(equipamentos) {
        return this.equipamentoService.delete(equipamentos.ids);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "listEquipamento", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [equipamento_entity_1.Equipamento]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "saveEquipamento", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "deleteEquipamento", null);
EquipamentoController = __decorate([
    (0, common_1.Controller)('equipamento'),
    __metadata("design:paramtypes", [equipamento_service_1.EquipamentoService])
], EquipamentoController);
exports.EquipamentoController = EquipamentoController;
//# sourceMappingURL=equipamento.controller.js.map