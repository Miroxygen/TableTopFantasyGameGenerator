import { MonsterGenerator } from "../generators/monster-generator.js"
import { getArrayFromString } from "../helper-functions/string-to-array.js"

const template = document.createElement('template')
template.innerHTML = `
<style>
#cardInfo {
    height:600px;
    width:550px;
    position:absolute;
}
#subtypeHolder {
    height:60px;
    width:230px;
    border:ridge black;
    border-radius:5px;
    margin-top:120px;
    margin-left:30px;
    padding:20px;
    font-size:30px;
}
#typeHolder {
    margin-top:60px;
    margin-left:50px;
    height:25px;
    width:150px;
    border:ridge black;
    border-radius:5px;
    font-size:20px;
    padding:15px;
    position:absolute;
    border-bottom:none;
}
#attackHolder{
    margin-top:240px;
    margin-left:60px;
    height:55px;
    width:400px;
    border:ridge black;
    border-radius:5px;
    font-size:20px;
    padding:15px;
    position:absolute;
    white-space: pre-line;
}

.attributes {

}
.hidden {
    display:none;
}

td {
    border:ridge black;
    border-radius:50%;
    padding:10px;
    display:block;
    margin-left:60px;
    margin-top:20px;
    width:70px;
    height:50px;
    font-size:17px;
    text-align:center;
}

tr {
    display:flex;
    flex-wrap:wrap;
}

table {
    margin:auto;
    margin-top:20px;
    border-spacing:0px;
    display:inline-block;
}
</style>
<div id="cardInfo">
<div id="typeHolder"></div>
<div id="subtypeHolder"></div>
<div id="attackHolder">
</div>
<table id="attributesHolder">
    <tr id="tableHolder">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>  
    </tr>
</table>
</div>
`

customElements.define('random-monster-info', 

class extends HTMLElement {
    #cardInfo
    #typeHolder
    #subtypeHolder
    #attackHolder
    #tableHolder
    #attributesHolder
    #attributes
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#cardInfo = this.shadowRoot.querySelector('#cardInfo')
        this.#typeHolder = this.shadowRoot.querySelector('#typeHolder')
        this.#subtypeHolder = this.shadowRoot.querySelector('#subtypeHolder')
        this.#attackHolder = this.shadowRoot.querySelector('#attackHolder')
        this.#attributesHolder = this.shadowRoot.querySelector('#attributesHolder')
        this.#tableHolder = this.shadowRoot.querySelector('#tableHolder')
        this.monsterGenerator = new MonsterGenerator()
        this.monsterInfo = this.monsterGenerator.getRandomMonster()
        this.#typeHolder.textContent = this.monsterInfo.Type
        this.#subtypeHolder.textContent = this.monsterInfo.Subtype
        this.#attackHolder.textContent = `Main attack : ${this.monsterInfo.NormalAttack} \n Legendary attack : ${this.monsterInfo.LegendaryAttack}`
        this.#attributes = getArrayFromString(this.monsterInfo.Traits, ",")
        console.log(this.#tableHolder.children)
        for (let index = 0; index < this.#tableHolder.children.length; index++) {
           this.#tableHolder.children[index].textContent = this.#attributes[index]
        }
    }

    addAttributesToTableCells() {

    }
})