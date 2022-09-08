import { CharacterRaces } from "./src/character-races.js"
import { FantasyClasses } from "./src/fantasy-classes.js"

const characterRaces = new CharacterRaces()
const fantasyClasses = new FantasyClasses()
const race = characterRaces.getRandomRace()
const fantasyClass = fantasyClasses.getRandomFantasyClass()

console.log(race)
console.log(fantasyClass)