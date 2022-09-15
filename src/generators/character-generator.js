import { CharacterRaces } from "../resources/character-races.js";
import { FantasyClasses } from "../resources/fantasy-classes.js";
import { Attributes } from "../resources/attributes.js";

export class CharacterGenerator {
    #characterRaces
    #fantasyClasses
    #attributes
    constructor() {
        this.#characterRaces = new CharacterRaces()
        this.#fantasyClasses = new FantasyClasses()
        this.#attributes = new Attributes()
        this.name
        this.race
        this.charClass
        this.attributes
    }

    setName(name) {
        if(name === undefined) {
            this.name = "Unknown name"
        } else {
            this.name = name
        }
    }

    setRace(race) {
        if(race === undefined) {
            this.race = this.#characterRaces.getRandomRace()
        } else {
            this.race = race
        }
    }

    setClass(charClass) {
        if(charClass === undefined) {
            this.charClass = this.#fantasyClasses.getRandomFantasyClass()
        } else {
            this.charClass = charClass
        }
    }

    setAttributes() {
        this.#attributes.setAllValuesRandom()
        this.attributes = this.#attributes.getAttributes()
    }

    generateCharacter(name, race, charClass) {
        this.setName(name)
        this.setRace(race)
        this.setClass(charClass)
        this.setAttributes()
    }

    getCharacterStats() {
        return {"Name" : this.name, "Race" : this.race, "Class" : this.charClass, "Traits": this.attributes}
    }
}