import { Resource } from "./resource.js";


export class MonsterSubType extends Resource {
    #celestialSubtypes
    #dragonSubtypes
    #aberrationSubtypes
    #humanoidSubtypes
    #plantSubtypes
    #undeadSubtypes
    constructor() {
        super()
        this.#aberrationSubtypes = ["Beholder", "Chuul", "Death slaad", "Elder brain", "Puppetteer parasite"]
        this.#celestialSubtypes = ["Aurelia", "Pegasus", "Solar", "Unicorn", "Star lancer"]
        this.#dragonSubtypes = ["Crystal dragon", "Deep dragon", "Moonstone dragon", "Ancient dragon", "Sea serpant"]
        this.#humanoidSubtypes = ["Acolyte", "Blood witch", "Dragonhunter", "Evoker", "Cultist"]
        this.#plantSubtypes = ["Corpse flower", "Elder tree", "Spriggan", "Yggdrasti", "Kelpie"]
        this.#undeadSubtypes = ["Ash zombie", "Dread warrior", "Elder vampire", "Lich", "Revenant"]
    }

    getRandomSubtypeBasedOnType(type) {
        const subtypeArray = this.getCorrectSubTypeArray(type)
        const randomSubtype = super.getRandomResource(subtypeArray)
        return randomSubtype
    }

    getCorrectSubTypeArray(type) {
        switch (type) {
            case "Celesital":
                return this.#celestialSubtypes
            case "Dragon":
                return this.#dragonSubtypes
            case "Aberration":
                return this.#aberrationSubtypes
            case "Humanoid":
                return this.#humanoidSubtypes
            case "Plant":
                return this.#plantSubtypes
            case "Undead":
                return this.#undeadSubtypes
        }
    }
}