import { FantasyContentGenerator } from "./src/fantasy-component-connector.js"




const fantasyComponentConnector = new FantasyContentGenerator()
const element = document.getElementById("holder")
fantasyComponentConnector.connectCharacterCard(element)

const monsterEle = document.getElementById("monster")
fantasyComponentConnector.connectMonsterCard(monsterEle)

const map = document.getElementById("map")
fantasyComponentConnector.connectMap(map)
