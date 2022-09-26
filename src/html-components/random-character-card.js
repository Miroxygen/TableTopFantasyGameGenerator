/**
 * The "finished" card.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import './random-character-info.js'
import './card.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
#cardIcon {
    border-radius:50%;
    height:200px;
    position:absolute;
    width:150px;
    margin-top:10px;
    margin-left:330px;
}

</style>
<fantasy-card id="card">
<random-character-info></random-character-info>
</fantasy-card>
</div>
`

customElements.define('random-character-card',
/**
 * Connect custom elements fantasy-card and random-character info
 * to make a random character card.
 * @type {HTMLElement}
 */
  class extends HTMLElement {
    /**
     * The custom fantasy-card from card.js
     * @type {HTMLElement}
     */
    #card
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#card = this.shadowRoot.querySelector('#card')
      this.#card.addEventListener('click', () => {
        this.#card.setCharacterStyle()
      })
    }
  })
