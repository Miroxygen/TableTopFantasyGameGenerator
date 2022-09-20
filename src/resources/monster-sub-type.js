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
        this.#aberrationSubtypes = ["beholder", "chuul", "death slaad", "elder brain", "puppetteer parasite"]
        this.#celestialSubtypes = ["aurelia", "pegasus", "solar", "unicorn", "star lancer"]
        this.#dragonSubtypes = ["crystal dragon", "deep dragon", "moonstone dragon", "ancient dragon", "sea serpant"]
        this.#humanoidSubtypes = ["acolyte", "blood witch", "dragonhunter", "evoker", "cultist"]
        this.#plantSubtypes = ["corpse flower", "elder tree", "spriggan", "yggdrasti", "kelpie"]
        this.#undeadSubtypes = ["ash zombie", "dread warrior", "elder vampire", "lich", "revenant"]
    }

    getRandomSubtypeBasedOnType(type) {
        const subtypeArray = this.getCorrectSubTypeArray(type)
        const randomSubtype = super.getRandomResource(subtypeArray)
        return randomSubtype
    }

    getCorrectSubTypeArray(type) {
        switch (type) {
            case "celesital":
                return this.#celestialSubtypes
            case "dragon":
                return this.#dragonSubtypes
            case "aberration":
                return this.#aberrationSubtypes
            case "humanoid":
                return this.#humanoidSubtypes
            case "plant":
                return this.#plantSubtypes
            case "undead":
                return this.#undeadSubtypes
        }
    }
}