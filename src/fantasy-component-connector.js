import './html-components/random-character-card.js'
import './html-components/random-monster-card.js'


/**
 * The fantasy component are custom HTML components.
 * This class can connect the custom ones to an HTML
 * component in your document.
 */
export class FantasyComponentConnector {
    #characterCard
    #monsterCard
    constructor() {
        this.#characterCard = document.createElement('random-character-card')
        this.#monsterCard = document.createElement('random-monster-card')
    }

    connectCharacterCard(HTMLElement) {
        HTMLElement.appendChild(this.#characterCard)
    }

    connectMonsterCard(HTMLElement) {
        HTMLElement.appendChild(this.#monsterCard)
    }  
}