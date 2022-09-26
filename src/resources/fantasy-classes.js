/**
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { Resource } from './resource.js'

export class FantasyClasses extends Resource {
  #allFantasyClasses
  constructor () {
    super()
    this.#allFantasyClasses = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin',
      'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
  }

  /**
     * Only make public for testing.
     * @returns {array}
     */
  #getAllFantasyClasses () {
    const arrayCopy = Array.from(this.#allFantasyClasses)
    return arrayCopy
  }

  /**
     * From this.#allFantasyClasses
     * @returns {string}
     */
  getRandomFantasyClass () {
    const randomFantasyClass = super.getRandomResource(this.#allFantasyClasses)
    return randomFantasyClass
  }
}
