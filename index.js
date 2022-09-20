import { CharacterRaces } from "./src/resources/character-races.js"
import { FantasyClasses } from "./src/resources/fantasy-classes.js"
import { CharacterGenerator } from "./src/generators/character-generator.js"
import { FantasyComponentConnector } from "./src/fantasy-component-connector.js"
import './src/html-components/random-character-card.js'

const characterRaces = new CharacterRaces()
const fantasyClasses = new FantasyClasses()
const character = new CharacterGenerator()
const race = characterRaces.getRandomRace()
const fantasyClass = fantasyClasses.getRandomFantasyClass()
character.generateCharacter("Cow")

console.log(race)
console.log(fantasyClass)
console.log(character.getCharacterStats())

const fantasyComponentConnector = new FantasyComponentConnector()
const element = document.getElementById("holder")
fantasyComponentConnector.connectCharacterCard(element)
