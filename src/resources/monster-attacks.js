import { Resource } from "./resource.js";



export class MonsterAttack extends Resource {
    #dragonNormalAttacks
    #celestialNormalAttacks
    #aberrationNormalAttacks
    #humanoidNormalAttacks
    #plantNormalAttacks
    #undeadNormalAttacks
    #dragonLegendaryAttacks
    #celestialLegendaryAttacks
    #aberrationLegendaryAttacks
    #humanoidLegendaryAttacks
    #plantLegendaryAttacks
    #normalAttack
    #legendaryAttack
    #undeadLegendaryAttacks
    constructor() {
        super()
        this.#normalAttack
        this.#legendaryAttack
        this.#dragonNormalAttacks = ["Tailsweep", "Bite", "Fire breath", "Ice breath", "Acid spray"]
        this.#dragonLegendaryAttacks = ["Draconic defense", "Horrific hurricane", "Shocking shout"]
        this.#celestialNormalAttacks = ["Glare", "Sunstrike", "Blind", "Windstrike", "Moonstrike"]
        this.#celestialLegendaryAttacks = ["Searing sun", "Morbid moon", "Planar Pulse"]
        this.#aberrationNormalAttacks = ["Mindcontrol", "Darkness", "Tentacleslash", "Eyestrike", "Laser"]
        this.#aberrationLegendaryAttacks = ["Traumatic timeturn", "Existenstial exit", "Destructive door"]
        this.#humanoidNormalAttacks = ["Swordslash", "Wandstrike", "Punch", "Bowattack", "Charm"]
        this.#humanoidLegendaryAttacks = ["Serrating staff", "Almighty arrow", "Deadly daggers"]
        this.#plantNormalAttacks = ["Spores", "Roots", "Animal companion", "Poisonleaf", "Branchstrike"]
        this.#plantLegendaryAttacks = ["Natures nullifier", "Revenge of the Ravens", "Budding bloom"]
        this.#undeadNormalAttacks = ["Infected bite", "Bloodsucker", "Cold touch", "Confusion", "Deaths hand"]
        this.#undeadLegendaryAttacks = ["Infernal Ice", "Trembling Transformation", "Eternal ending"]
    }

    getCorrectNormalAttackArray(type) {
        switch (type) {
            case "celesital":
                return this.#celestialNormalAttacks
            case "Dragon":
                return this.#dragonNormalAttacks
            case "Aberration":
                return this.#aberrationNormalAttacks
            case "Humanoid":
                return this.#humanoidNormalAttacks
            case "Plant":
                return this.#plantNormalAttacks
            case "Undead":
                return this.#undeadNormalAttacks
        }
    }

    getCorrectLegendaryAttackArray(type) {
        switch (type) {
            case "Celesital":
                return this.#celestialLegendaryAttacks
            case "Dragon":
                return this.#dragonLegendaryAttacks
            case "Aberration":
                return this.#aberrationLegendaryAttacks
            case "Humanoid":
                return this.#humanoidLegendaryAttacks
            case "Plant":
                return this.#plantLegendaryAttacks
            case "Undead":
                return this.#undeadLegendaryAttacks
        }
    }

    getRandomAttacksBasedOnType(type) {
        const normalAttackArray = this.getCorrectNormalAttackArray(type)
        const legendaryAttackArray = this.getCorrectLegendaryAttackArray(type)
        const randomNormalAttack = super.getRandomResource(normalAttackArray)
        const randomLegendaryAttack = super.getRandomResource(legendaryAttackArray)
        return {"Normal" : randomNormalAttack, "Legendary" : randomLegendaryAttack}
    }
}

