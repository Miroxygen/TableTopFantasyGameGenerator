/**
 * Mountain for map.js
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
#mountain {
    height:10px;
    width:10px;
    border-radius:30%;
    background: linear-gradient(194deg, rgba(186,184,182,1) -100%, rgba(62,60,60,1) 100%);
}
</style>
<div id="mountain"></div>
`

customElements.define('fantasy-mountain',
/**
 * A simple small element. Feel free to change the colour and size.
 * @type {HTMLElement}
 */
  class extends HTMLElement {
    /**
     * Just a coloured div.
     * @type {HTMLElement}
     */
    #mountain
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#mountain = this.shadowRoot.querySelector('#mountain')
    }
  })
