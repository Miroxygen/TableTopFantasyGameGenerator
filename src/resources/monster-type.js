/**
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { Resource } from './resource.js'

export class MonsterType extends Resource {
  #allMonsterTypes
  #type
  constructor () {
    super()
    this.#allMonsterTypes = ['Celestial', 'Dragon', 'Aberration', 'Humanoid', 'Plant', 'Undead']
    this.#type = ''
  }

  /**
    * Keep private unless testing.
    * @returns {array}
    */
  #getAllMonsterTypes () {
    const arrayCopy = Array.from(this.#allMonsterTypes)
    return arrayCopy
  }

  /**
    * Look at the array in the constructor for the types.
    * @returns {string}
    */
  getRandomType () {
    const randomType = super.getRandomResource(this.#allMonsterTypes)
    return randomType
  }
}
