import { CharacterRaces } from "../resources/character-races.js";
import { FantasyClasses } from "../resources/fantasy-classes.js";
import { Attributes } from "../resources/attributes.js";
import { CharacterNames } from "../resources/character-names.js";

export class CharacterGenerator {
    #characterRaces
    #fantasyClasses
    #attributes
    #characterName
    constructor() {
        this.#characterRaces = new CharacterRaces()
        this.#fantasyClasses = new FantasyClasses()
        this.#attributes = new Attributes()
        this.#characterName = new CharacterNames()
        this.name
        this.race
        this.charClass
        this.attributes
    }

    setName() {
        this.name = this.#characterName.getRandomNameBasedOnRace(this.race)
    }

    setRace() {
        this.race = this.#characterRaces.getRandomRace()
        
    }

    setClass() {  
        this.charClass = this.#fantasyClasses.getRandomFantasyClass()
       
    }

    setAttributes() {
        this.#attributes.setAllValuesRandom()
        this.attributes = this.#attributes.getAttributes()
    }

    generateCharacter() {
        this.setRace()
        this.setClass()
        this.setAttributes()
        this.setName()
    }

    getCharacter() {
        this.generateCharacter()
        return {"Name" : this.name, "Race" : this.race, "Class" : this.charClass, "Traits": this.attributes}
    }
}