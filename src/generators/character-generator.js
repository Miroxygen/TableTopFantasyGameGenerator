/**
 * Connect the resources necessary for making a random character.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { CharacterRaces } from '../resources/character-races.js'
import { FantasyClasses } from '../resources/fantasy-classes.js'
import { Attributes } from '../resources/attributes.js'
import { CharacterNames } from '../resources/character-names.js'

/**
 * Can be used on its own to get an object with a random character.
 */
export class CharacterGenerator {
  #characterRaces
  #fantasyClasses
  #attributes
  #characterName
  #name
  #race
  #charClass
  #charAttributes
  constructor () {
    this.#characterRaces = new CharacterRaces()
    this.#fantasyClasses = new FantasyClasses()
    this.#attributes = new Attributes()
    this.#characterName = new CharacterNames()
    this.#name = ''
    this.#race = ''
    this.#charClass = ''
    this.#charAttributes = ''
  }

  /**
     * See the names in character-names.js
     */
  #setName () {
    this.#name = this.#characterName.getRandomNameBasedOnRace(this.#race)
  }

  /**
     * See the races in character-races.js
     */
  #setRace () {
    this.#race = this.#characterRaces.getRandomRace()
  }

  /**
     * See the classes in fantasy-classes.js
     */
  #setClass () {
    this.#charClass = this.#fantasyClasses.getRandomFantasyClass()
  }

  /**
     * See the attributes in attributes.js
     */
  #setAttributes () {
    this.#charAttributes = this.#attributes.getAttributes()
  }

  /**
     * Ive set all the setters private.
     * I dont see a reason to make them public.
     */
  #setAllCharacterStats () {
    this.#setRace()
    this.#setClass()
    this.#setAttributes()
    this.#setName()
  }

  /**
     * This can be changed to return an array if that fits you better,
     * (Maybe you want to work with index)
     * but you will need to change a lot of code so only do that if you
     * know the things to change.
     * @returns Object.
     */
  getCharacter () {
    this.#setAllCharacterStats()
    return { Name: this.#name, Race: this.#race, Class: this.#charClass, Traits: this.#charAttributes }
  }
}
