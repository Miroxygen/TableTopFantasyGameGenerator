import { Attributes } from "../resources/attributes.js";

export class MonsterGenerator {
    #attributes
    constructor() {
        this.#attributes = new Attributes()
        this.monsterAttributes
    }

    setAttributes() {
        this.#attributes.setAllValuesRandom()
        this.monsterAttributes = this.#attributes.getAttributes()
    }

    generateMonster() {

    }
}