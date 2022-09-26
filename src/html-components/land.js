/**
 * Landmass for map.js.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
#land {
    height:25px;
    width:25px;
    background:green;
}
</style>
<div id="land"></div>
`

customElements.define('fantasy-land',
/**
 * Land as in landmass, grass.
 * @type {HTMLElement}
 */
  class extends HTMLElement {
    /**
     * A coloured div to look like "landmass".
     * Feel free to change the colour if you want
     * another "landmass".
     * @type {HTMLLIElement}
     */
    #land
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#land = this.shadowRoot.querySelector('#land')
    }
  })
