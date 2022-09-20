import './html-components/random-character-card.js'

export class FantasyComponentConnector {
    constructor() {

    }

    connectCharacterCard(HTMLElement) {
        const characterCard = document.createElement('random-character-card')
        HTMLElement.appendChild(characterCard)
    }
    
}