import { CharacterRaces } from "./src/resources/character-races.js"
import { FantasyClasses } from "./src/resources/fantasy-classes.js"
import { CharacterGenerator } from "./src/generators/character-generator.js"
import { FantasyComponentConnector } from "./src/fantasy-component-connector.js"
import './src/html-components/random-character-card.js'

const characterGenerator = new CharacterGenerator()
const myChar = characterGenerator.getCharacter()
console.log(myChar)

const fantasyComponentConnector = new FantasyComponentConnector()
const element = document.getElementById("holder")
fantasyComponentConnector.connectCharacterCard(element)
