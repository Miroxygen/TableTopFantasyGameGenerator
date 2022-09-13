import { CharacterGenerator } from "../generators/character-generator.js"

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
    height:300px;
    position:absolute;
    width:250px;
}
#cardInfo {
    border:solid black;
    height:600px;
    width:550px;
    position:absolute;
}
.hidden {
    display:none;
}
</style>
<div id="card">
<img id="cardIcon" src="../../images/sorceress.jpg">
<div id="cardInfo" class="hidden">
</div>
</div>
`

customElements.define('random-character-card', 

class extends HTMLElement {
    #card
    #cardIcon
    #cardInfo
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#card = this.shadowRoot.querySelector('#card')
        this.#cardIcon = this.shadowRoot.querySelector('#cardIcon')
        this.#cardInfo = this.shadowRoot.querySelector('#cardInfo')
        this.characterGenerator = new CharacterGenerator()
        this.characterGenerator.generateCharacter('Alina')
        this.characterInfo = this.characterGenerator.getCharacterStats()
        this.#card.addEventListener('click', (event) => {
             this.flipCharacterCard()
             this.displayCardInfo()
        })
    }

    flipCharacterCard() {
        this.#cardIcon.classList.toggle('hidden')
        this.#cardInfo.classList.toggle('hidden')
    }

    displayCardInfo() {
        const characterInfo = this.characterGenerator.getCharacterStats()
        this.#cardInfo.textContent = `Name : ${characterInfo.Name}  Class : ${characterInfo.Class} \n Race : ${characterInfo.Race}`
    }
})