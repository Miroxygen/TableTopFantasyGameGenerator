/**
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { Resource } from './resource.js'

export class CharacterRaces extends Resource {
  #allRaces
  constructor () {
    super()
    this.#allRaces = ['human', 'elf', 'dragonborn', 'dwarf', 'gnome', 'half-elf', 'halfling',
      'half-orc', 'tiefling']
  }

  /**
     * Only make public for testing.
     * @returns Array.
     */
  #getAllRaces () {
    const arrayCopy = Array.from(this.#allRaces)
    return arrayCopy
  }

  /**
     * From this.#allraces
     * @returns String.
     */
  getRandomRace () {
    const randomRace = super.getRandomResource(this.#allRaces)
    return randomRace
  }
}
