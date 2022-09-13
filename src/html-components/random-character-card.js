import { CharacterGenerator } from "../generators/character-generator.js"

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div id="card">
</div>
`

customElements.define('random-character-card', 

class extends HTMLElement {
    #card
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#card = this.shadowRoot.querySelector('#card')
        this.characterGenerator = new CharacterGenerator()
    }
}
)