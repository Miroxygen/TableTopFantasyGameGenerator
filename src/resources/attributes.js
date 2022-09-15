import { Resource } from "./resource.js";


export class Attributes extends Resource {
    #strength
    #wisdom
    #dexterity
    #intelligence
    #charisma
    #constitution
    #attributeValues
    constructor() {
        super()
        this.#attributeValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.#strength
        this.#charisma
        this.#dexterity
        this.#intelligence
        this.#wisdom
        this.#constitution
    }

    getRandomAttributeValue() {
        const attributeValue =  super.getRandomResource(this.#attributeValues)
        return attributeValue
    }

    setRandomStrength() {
        const strengthValue = this.getRandomAttributeValue()
        this.#strength = strengthValue 
    }

    setRandomCharisma() {
        const charismaValue = this.getRandomAttributeValue()
        this.#charisma = charismaValue
    }

    setRandomDexterity() {
        const dexterityValue = this.getRandomAttributeValue()
        this.#dexterity = dexterityValue
    }

    setRandomIntelligence() {
        const intelligenceValue = this.getRandomAttributeValue()
        this.#intelligence = intelligenceValue
    }

    setRandomWisdom() {
        const widsomValue = this.getRandomAttributeValue()
        this.#wisdom = widsomValue
    }

    setRandomConstitution() {
        const constitutionValue = this.getRandomAttributeValue()
        this.#constitution = constitutionValue
    }

    setAllValuesRandom() {
        this.setRandomCharisma()
        this.setRandomConstitution()
        this.setRandomDexterity()
        this.setRandomIntelligence()
        this.setRandomWisdom()
        this.setRandomStrength()
    }

    getAttributes() {
        const attributes = {"Strength : " : this.#strength, "Charisma : " : this.#charisma, "Dexterity : " : this.#dexterity, "Intelligence : " : this.#intelligence,
        "Strength : " : this.#strength, "Wisdom : " : this.#wisdom, "Constituion : " : this.#constitution}
        return attributes
    }
}