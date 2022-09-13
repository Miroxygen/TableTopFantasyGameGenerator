import { CharacterRaces } from "../resources/character-races.js";
import { FantasyClasses } from "../resources/fantasy-classes.js";

export class CharacterGenerator {
    #characterRaces
    #fantasyClasses
    constructor() {
        this.#characterRaces = new CharacterRaces()
        this.#fantasyClasses = new FantasyClasses()
        this.name
        this.race
        this.charClass
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

    generateCharacter(name, race, charClass) {
        this.setName(name)
        this.setRace(race)
        this.setClass(charClass)
    }

    getCharacterStats() {
        return {"Name" : this.name, "Race" : this.race, "Class" : this.charClass}
    }
}