/**
 * Uses small components and randomizes their positions.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import './road.js'
import './land.js'
import './mountain.js'
import './town.js'

const template = document.createElement('template')
template.innerHTML = `
<style>
#map {
    height:500px;
    width:500px;
    background:blue;
    overflow:hidden;
    contain:content;
}
</style>
<div id="map">
</div>
<button id="getMap">Randomize map</button>
`

customElements.define('fantasy-map',
/**
 * A simple map with randomized landmass, roads, mountains and towns.
 */
  class extends HTMLElement {
    /**
     * A div container.
     * @type {HTMLElement}
     */
    #map
    /**
     * A button.
     * @type {HTMLElement}
     */
    #getMap
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#map = this.shadowRoot.querySelector('#map')
      this.#getMap = this.shadowRoot.querySelector('#getMap')

      this.#getMap.addEventListener('click', () => {
        this.destroyCurrentMap()
        this.makeLand()
        this.constructRoads()
        this.makeMountainRanges()
        this.constructTowns()
      })
    }

    /**
     * Make 20 roads with a random starting point (top and left values set)
     * with a random direction (plus is ether down and left, minus will be up or right direction).
     */
    constructRoads () {
      for (let index = 0; index < 20; index++) {
        const randomTopValue = Math.random() * (300) + 50
        const randomLeftValue = Math.random() * (300) + 50
        const plusOrMinusTop = Math.random() < 0.5 ? -1 : 1
        const plusOrMinusLeft = Math.random() < 0.5 ? -1 : 1
        this.makeOneRoad(randomTopValue, randomLeftValue, plusOrMinusTop, plusOrMinusLeft)
      }
    }

    /**
     * Function used with random numbers in this class.
     * If you want to use it on its own, please read
     * param comments.
     * @param {number} startValueTop Will be the value for CSS top in pixels.
     * @param {number} startValueLeft CSS left in pixels.
     * @param {number} changeValueTop How the css top will change with each iteration in the loop.
     * Please use 1 for the road to go DOWN, and -1 for it to go UP.
     * @param {number} changeValueLeft Please use 1 for the road to go LEFT, and -1 for it to go RIGHT.
     */
    makeOneRoad (startValueTop, startValueLeft, changeValueTop, changeValueLeft) {
      let controllValueLeft = startValueLeft
      let controllValueTop = startValueTop
      for (let index = 0; index < 100; index++) {
        const road = document.createElement('fantasy-road')
        road.style.position = 'absolute'
        road.style.zIndex = '10'
        this.#map.append(road)
        const plusOrMinusTop = Math.random() < 0.5 ? -2 : 2
        const plusOrMinusLeft = Math.random() < 0.5 ? -2 : 2
        controllValueTop += (plusOrMinusTop + changeValueTop)
        controllValueLeft += (plusOrMinusLeft + changeValueLeft)
        road.style.left = `${controllValueLeft}px`
        road.style.top = `${controllValueTop}px`
      }
    }

    /**
     * Feel free to change the variables to make
     * more or fewer mountains.
     */
    makeMountainRanges () {
      for (let index = 0; index < 7; index++) {
        this.makeMountain()
      }
    }

    /**
     * 200 elemtens stacked on each other to resemble a mountain.
     * The position is randomize with CSS top and left values.
     * Each elements position is then incresed OR decresed by 0.5 to
     * make them stack irregulerly.
     */
    makeMountain () {
      let controllValueLeft = Math.random() * (400 - 20) + 20
      let controllValueTop = Math.random() * (400 - 20) + 20
      for (let index = 0; index < 200; index++) {
        const plusOrMinusTop = Math.random() < 0.5 ? -0.5 : 0.5
        const plusOrMinusLeft = Math.random() < 0.5 ? -0.5 : 0.5
        const mountain = document.createElement('fantasy-mountain')
        mountain.style.position = 'absolute'
        mountain.style.zIndex = '9'
        controllValueTop += (plusOrMinusTop + plusOrMinusTop)
        controllValueLeft += (plusOrMinusLeft + plusOrMinusLeft)
        mountain.style.left = `${controllValueLeft}px`
        mountain.style.top = `${controllValueTop}px`
        this.#map.append(mountain)
      }
    }

    /**
     * Feel free to change the variables to make more or fewer towns,
     * or their positions.
     */
    constructTowns () {
      for (let index = 0; index < 5; index++) {
        const town = document.createElement('fantasy-town')
        town.style.position = 'absolute'
        this.setAtRandomPosition(20, (430), town)
        this.#map.append(town)
      }
    }

    /**
     * Feel free to change the variables to make more or fewer towns,
     * or their positions.
     */
    makeLand () {
      for (let index = 0; index < 300; index++) {
        const land = document.createElement('fantasy-land')
        land.style.position = 'absolute'
        this.setAtRandomPosition(20, (430), land)
        this.#map.append(land)
      }
    }

    /**
     * Randomizes based on your values. On this map optimal min is around 20 and
     * optimal max is around 450. Box is 500x500 pixels.
     * @param {number} max Max for CSS style top and left in pixels.
     * @param {number} min Min for CSS style top and left in pixels.
     * @param {HTMLElement} element At the moment this function is only used for land and towns,
     * of course any element can be put in but roads and mountain will look bad.
     */
    setAtRandomPosition (max, min, element) {
      const randomLeftValue = Math.random() * (max - min) + min
      const randomTopValue = Math.random() * (max - min) + min
      element.style.left = `${randomLeftValue}px`
      element.style.top = `${randomTopValue}px`
    }

    /**
     * So the map doesnt stack.
     */
    destroyCurrentMap () {
      while (this.#map.firstChild) {
        this.#map.removeChild(this.#map.lastChild)
      }
    }
  })
