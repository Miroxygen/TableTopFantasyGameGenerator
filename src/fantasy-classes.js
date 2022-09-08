

export class FantasyClasses {
    #allFantasyClasses
    constructor() {
        this.#allFantasyClasses = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin",
        "ranger", "rogue", "sorcerer", "warlock", "wizard"]
    }


    getAllFantasyClasses() {
        const arrayCopy = Array.from(this.#allFantasyClasses)
        return arrayCopy
    }

    getSpecificFantasyClass(fantasyClassSearch) {
        const lowerCaseFantasyClassSearch = fantasyClassSearch.toLowerCase() 
        const foundFantasyClass = this.#allFantasyClasses.find(arrayIndex === lowerCaseFantasyClassSearch)
        if(foundFantasyClass === null) {
            return "No fantasyclass found"
        } 
        return foundFantasyClass
    }

    getRandomFantasyClass() {

    }
}