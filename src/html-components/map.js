import './road.js'
import './land.js'


const template = document.createElement('template')
template.innerHTML = `
<style>
#map {
    height:500px;
    width:500px;
    background:blue;
}
</style>
<div id="map">

</div>
<button id="getMap">Randomize map</button>
`

customElements.define('fantasy-map', 

class extends HTMLElement {
    #map
    #getMap
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
        this.#map = this.shadowRoot.querySelector('#map')
        this.#getMap = this.shadowRoot.querySelector('#getMap')

        this.#getMap.addEventListener('click', () => {
            this.destroyCurrentMap()
            this.makeLand()
            this.constructRoads()
            //this.constructBottomRightRoads()
        })
    }

    constructRoads() {
        let controllNumberTop = 50
        let controllNumberLeft = 50
        let controllNumberBottom = 50
        let controllNumberRight = 50
        for (let index = 0; index < 200; index++) {
            const road = document.createElement('fantasy-road')
            road.style.position = "absolute"
            road.style.zIndex = "10"
            this.#map.append(road)
            const plusOrMinusBottom =  Math.random() < 0.5 ? -3 : 3
            const plusOrMinusRght =  Math.random() < 0.5 ? -3 : 3
            const plusOrMinusTop =  Math.random() < 0.5 ? -3 : 3
            const plusOrMinusLeft =  Math.random() < 0.5 ? -3 : 3
            controllNumberBottom+= (plusOrMinusTop + 1)
            controllNumberRight+= (plusOrMinusRght + 1 )
            controllNumberTop+= (plusOrMinusBottom + 1)
            controllNumberLeft+= (plusOrMinusLeft +1)
            road.style.left = `${controllNumberLeft}px`
            road.style.top = `${controllNumberTop}px`
            road.style.bottom = `${controllNumberBottom}px`
            road.style.right = `${controllNumberRight}px`
        }
    }

    constructBottomRightRoads() {
        for (let index = 0; index < 200; index++) {
            const road = document.createElement('fantasy-road')
            road.style.position = "absolute"
            road.style.zIndex = "10"
            this.setAtRandomPositionBottomAndRight(controllNumberRight, (controllNumberBottom), road)   
            this.#map.append(road)
        }
    }

    makeLand() {
        for (let index = 0; index < 300; index++) {
            const land = document.createElement('fantasy-land')
            land.style.position = "absolute"
            this.setAtRandomPosition(20, (430), land)
            this.#map.append(land)          
        }
    }

    setAtRandomPosition(max, min, element) {
        const randomLeftValue = Math.random() * (max - min) + min
        const randomTopValue = Math.random() * (max - min) + min
        element.style.left = `${randomLeftValue}px`
        element.style.top = `${randomTopValue}px`
    }

    setAtRandomPositionBottomAndRight(max, min, element) {
        const randomLeftValue = Math.random() * (max - min) + min
        const randomTopValue = Math.random() * (max - min) + min
        element.style.right = `${randomLeftValue}px`
        element.style.bottom = `${randomTopValue}px`
    }

    destroyCurrentMap() {
        while (this.#map.firstChild) {
            this.#map.removeChild(this.#map.lastChild)
        }
    }
})