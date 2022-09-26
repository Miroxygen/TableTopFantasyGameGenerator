/**
 * Road for map.js.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
#road {
    height:3px;
    width:3px;
    background:#4a2c02;
}
</style>
<div id="road"></div>
`

customElements.define('fantasy-road',
/**
 * Feel free to change size or colour.
 * @type {HTMLElement}
 */
  class extends HTMLElement {
    /**
     * Small coloured div.
     * @type {HTMLElement}
     */
    #road
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#road = this.shadowRoot.querySelector('#road')
    }
  })
