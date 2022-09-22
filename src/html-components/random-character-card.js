import './random-character-info.js'
import './card.js'

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
#sheetToggleButton {
    height:100px;
    width:100px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(241,241,222,1) 0%, rgba(136,127,173,1) 100%);
    margin:0 auto;
    transition:transform 1.5s;
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
</style>
<fantasy-card id="card">
<random-character-info></random-character-info>
</fantasy-card>
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
    }
})