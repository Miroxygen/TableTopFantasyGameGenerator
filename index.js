import { CharacterRaces } from "./src/character-races.js"
import { FantasyClasses } from "./src/fantasy-classes.js"
import { CharacterGenerator } from "./src/character-generator.js"

const characterRaces = new CharacterRaces()
const fantasyClasses = new FantasyClasses()
const character = new CharacterGenerator()
const race = characterRaces.getRandomRace()
const fantasyClass = fantasyClasses.getRandomFantasyClass()
character.generateCharacter("Cow", "tiefling", "sorcerer")

console.log(race)
console.log(fantasyClass)
console.log(character.getCharacterStats())