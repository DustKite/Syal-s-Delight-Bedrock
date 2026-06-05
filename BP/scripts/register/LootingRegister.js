var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EntityHurtAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class LootingRegister {
    looting(args) {
        const hurtEntity = args.hurtEntity;
        if (!hurtEntity) return;
        const health = hurtEntity.getComponent('minecraft:health');
        const victim = hurtEntity.typeId;
        const animalFatMobs = [
            'minecraft:chicken',
            'minecraft:cow',
            'minecraft:sheep',
            'minecraft:goat',
            'minecraft:pig',
            'minecraft:rabbit',
            'minecraft:mushroom_cow'
        ];
        if (health && health.currentValue <= 0 && animalFatMobs.includes(victim)) {
            ItemAPI.spawn(hurtEntity, 'syals_delight:animal_fat', 1);
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.entityHurt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EntityHurtAfterEvent]),
    __metadata("design:returntype", void 0)
], LootingRegister.prototype, "looting", null);