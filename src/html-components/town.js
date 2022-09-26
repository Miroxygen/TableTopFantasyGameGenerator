/**
 * Town for map.js.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
#roof {
    height:15px;
    width:30px;
    border-radius:10%;
    background: linear-gradient(355deg, rgba(245,240,240,1) -50%, rgba(193,97,23,1) 100%);
}

#bottom {
    height:15px;
    width:30px;
    background: linear-gradient(264deg, rgba(122,29,6,1) 0%, rgba(210,19,19,1) 100%);
}

#door {
    height: 10px;
    width:7px;
    background:linear-gradient(274deg, rgba(245,240,240,1) 0%, rgba(142,138,135,1) 100%);
    margin-left:11px;
    padding-top:5px;
}
</style>
<div id="roof"></div>
<div id="bottom">
<div id="door"></div>
</div>
`

customElements.define('fantasy-town',
/**
 * Represents a town on the map, and it look like a house.
 * Feel free to change size or colour.
 */
  class extends HTMLElement {
    /**
     * The roof of the house.
     * @type {HTMLElement}
     */
    #roof
    /**
     * Bottom part of house.
     * @type {HTMLElement}
     */
    #bottom
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#roof = this.shadowRoot.querySelector('#roof')
      this.#bottom = this.shadowRoot.querySelector('#bottom')
    }
  })
