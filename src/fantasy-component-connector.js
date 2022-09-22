import './html-components/random-character-card.js'
import './html-components/random-monster-card.js'

export class FantasyComponentConnector {
    constructor() {

    }

    connectCharacterCard(HTMLElement) {
        const characterCard = document.createElement('random-character-card')
        HTMLElement.appendChild(characterCard)
    }

    connectMonsterCard(HTMLElement) {
        const monsterCard = document.createElement('random-monster-card')
        HTMLElement.appendChild(monsterCard)
    }
    
}