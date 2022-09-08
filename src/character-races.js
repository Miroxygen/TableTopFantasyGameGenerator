import { Resource } from "./resource.js"

export class CharacterRaces extends Resource {
    #allRaces
    constructor () {
        super()
        this.#allRaces = []
    }

    getAllRaces() {
        const arrayCopy = Array.from(this.#allRaces)
        return arrayCopy
    }

    get(search) {
        const foundRace = super.getSpecificResource(search, this.#allRaces)
        return foundRace
    }
    /*getSpecificRace(raceSearch) {
        const lowerCaseRaceSearch = raceSearch.toLowerCase() 
        const foundFantasyClass = this.#allRaces.find(arrayIndex === lowerCaseRaceSearch)
        if(foundFantasyClass === null) {
            return "No fantasyclass found"
        } 
        return foundFantasyClass
    }*/

    getRandomRace() {

    }
}