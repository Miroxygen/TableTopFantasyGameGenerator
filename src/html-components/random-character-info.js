import { CharacterGenerator } from "../generators/character-generator.js"

const template = document.createElement('template')
template.innerHTML = `
<style>
#cardInfo {
    height:600px;
    width:550px;
    position:absolute;
    background: radial-gradient(circle, rgba(241,241,222,1) 0%, rgba(210,203,149,1) 100%);
}
#nameHolder {
    height:40px;
    width:230px;
    border:solid black;
    margin-top:60px;
    margin-left:30px;
    padding:20px;
    font-size:30px;
}
#classHolder {
    margin-top:80px;
    margin-left:50px;
    height:25px;
    width:150px;
    border:solid black;
    font-size:20px;
    padding:15px;
    position:absolute;
}
#raceHolder{
    margin-top:80px;
    margin-left:300px;
    height:25px;
    width:150px;
    border:solid black;
    font-size:20px;
    padding:15px;
    position:absolute;
}
.hidden {
    display:none;
}
</style>
<div id="cardInfo">
<div id="nameHolder"></div>
<div id="classHolder"></div>
<div id="raceHolder"></div>
</div>
`

customElements.define('random-character-info', 

class extends HTMLElement {
    #cardInfo
    #nameHolder
    #classHolder
    #raceHolder
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#cardInfo = this.shadowRoot.querySelector('#cardInfo')
        this.#nameHolder = this.shadowRoot.querySelector('#nameHolder')
        this.#classHolder = this.shadowRoot.querySelector('#classHolder')
        this.#raceHolder = this.shadowRoot.querySelector('#raceHolder')
        this.characterGenerator = new CharacterGenerator()
        this.characterGenerator.generateCharacter('Alina')
        this.characterInfo = this.characterGenerator.getCharacterStats()
        this.#nameHolder.textContent = this.characterInfo.Name
        this.#classHolder.textContent = `Class : ${this.characterInfo.Class}`
        this.#raceHolder.textContent = `Race : ${this.characterInfo.Race}`
    }
})