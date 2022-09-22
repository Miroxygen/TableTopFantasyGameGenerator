import { CharacterRaces } from "./src/resources/character-races.js"
import { FantasyClasses } from "./src/resources/fantasy-classes.js"
import { CharacterGenerator } from "./src/generators/character-generator.js"
import { FantasyComponentConnector } from "./src/fantasy-component-connector.js"
import { MonsterGenerator } from "./src/generators/monster-generator.js"
import { MonsterAttack } from "./src/resources/monster-attacks.js"
import './src/html-components/random-character-card.js'

const characterGenerator = new CharacterGenerator()
const myChar = characterGenerator.getCharacter()
console.log(myChar)

const fantasyComponentConnector = new FantasyComponentConnector()
const element = document.getElementById("holder")
//fantasyComponentConnector.connectCharacterCard(element)

const monsterGenerator = new MonsterGenerator()
const monster = monsterGenerator.getRandomMonster()
console.log(monster)

const monsterEle = document.getElementById("monster")
//fantasyComponentConnector.connectMonsterCard(monsterEle)