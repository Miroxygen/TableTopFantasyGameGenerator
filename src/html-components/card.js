/**
 * Base for both monster and character card.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
#card {
    height:600px;
    width:550px;
    margin:0 auto;
}

#cardIcon {
    border-radius:50%;
    height:200px;
    position:absolute;
    width:150px;
    margin-top:10px;
    margin-left:330px;
}
#sheetToggleButton {
    height:100px;
    width:100px;
    border-radius:50%;
    margin:0 auto;
    transition:transform 1.5s;
    background: radial-gradient(circle, rgba(200,223,245,1) 0%, rgba(121,134,89,1) 100%);
}
.hidden {
    display:none;
}
.sheetToggleButtonStyleWhenSheetIsVisble {
    transform: translate(0, 50px);
}
.opacity {
    opacity:0;
    transition: opacity 0.5s ease-in-out;
}
.scaleAnimation {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}
.characterStyleCard {
    background: radial-gradient(circle, rgba(241,241,222,1) 0%, rgba(210,203,149,1) 100%);
}

.monsterStyleCard {
    background: radial-gradient(circle, rgba(252,213,161,1) 0%, rgba(190,16,16,1) 100%);
}
</style>
<div id="sheetToggleButton"></div>
<div id="card" class="opacity">
<slot></slot>
</div>
`

customElements.define('fantasy-card',
/**
 * The outwards appereance for the characterGenerator.
 * @type {HTMLElement}
 */
  class extends HTMLElement {
    /**
     * A div.
     * @type {HTMLElement}
     */
    #card
    /**
     * Toggle as in toggle visibilty of #card.
     * @type {HTMLElement}
     */
    #sheetToggleButton
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#card = this.shadowRoot.querySelector('#card')
      this.#sheetToggleButton = this.shadowRoot.querySelector('#sheetToggleButton')
      this.#sheetToggleButton.addEventListener('click', (event) => {
        this.openCard()
      })
    }

    /**
     * Open's the card, makes it visible.
     */
    openCard () {
      this.#card.classList.toggle('scaleAnimation')
      this.#sheetToggleButton.classList.toggle('sheetToggleButtonStyleWhenSheetIsVisble')
    }

    /**
     * To differentiate monster and characters card.
     */
    setMonsterStyle () {
      this.#card.classList.add('monsterStyleCard')
    }

    /**
     * You can change these two styles if you please. (this function and setMonsterStyle)
     * Check the classes up above.
     */
    setCharacterStyle () {
      this.#card.classList.add('characterStyleCard')
    }
  })
