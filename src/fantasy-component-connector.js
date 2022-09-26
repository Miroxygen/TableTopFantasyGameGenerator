/**
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import './html-components/random-character-card.js'
import './html-components/random-monster-card.js'
import './html-components/map.js'

/**
 * The fantasy component are custom HTML components.
 * This class can connect the custom ones to an HTML
 * component in your document.
 */
export class FantasyContentGenerator {
  #characterCard
  #monsterCard
  #map
  constructor () {
    this.#characterCard = document.createElement('random-character-card')
    this.#monsterCard = document.createElement('random-monster-card')
    this.#map = document.createElement('fantasy-map')
  }

  /**
     * Please only use HTML elements.
     * @param {HTMLElement} HTMLElement
     */
  connectCharacterCard (HTMLElement) {
    HTMLElement.appendChild(this.#characterCard)
  }

  /**
     * Please only use HTML elements.
     * @param {HTMLElement} HTMLElement
     */
  connectMonsterCard (HTMLElement) {
    HTMLElement.appendChild(this.#monsterCard)
  }

  /**
     * Please only use HTML elements.
     * @param {HTMLElement} HTMLElement
     */
  connectMap (HTMLElement) {
    HTMLElement.appendChild(this.#map)
  }
}
