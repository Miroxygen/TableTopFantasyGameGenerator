import './random-character-info.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
#card {
    height:600px;
    width:550px;
    margin:0 auto;
    background: radial-gradient(circle, rgba(241,241,222,1) 0%, rgba(210,203,149,1) 100%);
}
#cardIcon {
    border-radius:50%;
    height:200px;
    position:absolute;
    width:150px;
    margin-top:10px;
    margin-left:330px;
}
.hidden {
    display:none;
}
</style>
<div id="card">
<random-character-info></random-character-info>
<img id="cardIcon" src="../../images/sorceress.jpg">
</div>
`

customElements.define('random-character-card', 

class extends HTMLElement {
    #card
    #cardIcon
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#card = this.shadowRoot.querySelector('#card')
        this.#cardIcon = this.shadowRoot.querySelector('#cardIcon')
        /*this.#card.addEventListener('click', (event) => {
             this.flipCharacterCard()
        })*/
    }

    flipCharacterCard() {
        this.#cardIcon.classList.toggle('hidden')
    }
})