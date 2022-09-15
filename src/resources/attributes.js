import { Resource } from "./resource.js";


export class Attributes extends Resource {
    #strength
    #wisdom
    #dexterity
    #intelligence
    #charisma
    #attributeValues
    constructor() {
        super()
        this.#attributeValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.#strength
        this.#charisma
        this.#dexterity
        this.#intelligence
        this.#strength
        this.#wisdom
    }

    getRandomizedAttributes() {
        const attributes = {"Strength : " : this.#strength, "Charisma : " : this.#charisma, "Dexterity : " : this.#dexterity, "Intelligence : " : this.#intelligence,
        "Strength : " : this.#strength, "Wisdom : " : this.#wisdom}
        return attributes
    }
}