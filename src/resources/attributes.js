/**
 * Stats used in both monster and character generators.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { Resource } from './resource.js'

export class Attributes extends Resource {
  #strength
  #wisdom
  #dexterity
  #intelligence
  #charisma
  #constitution
  #attributeValues
  #attributeString
  constructor () {
    super()
    this.#attributeValues = ['1', '2', '3', '4', '5', ' 6', '7', '8', '9', '10']
    this.#strength = ''
    this.#charisma = ''
    this.#dexterity = ''
    this.#intelligence = ''
    this.#wisdom = ''
    this.#constitution = ''
    this.#attributeString = ''
  }

  /**
     * Each attribute can have a value from 1-10, this
     * function randomizes that value.
     * @returns String.
     */
  #getRandomAttributeValue () {
    const attributeValue = super.getRandomResource(this.#attributeValues)
    return attributeValue
  }

  /**
     * Value from 1-10.
     */
  #setRandomStrength () {
    this.#strength = this.#getRandomAttributeValue()
  }

  /**
     * Value from 1-10.
     */
  #setRandomCharisma () {
    this.#charisma = this.#getRandomAttributeValue()
  }

  /**
     * Value from 1-10.
     */
  #setRandomDexterity () {
    this.#dexterity = this.#getRandomAttributeValue()
  }

  /**
     * Value from 1-10.
     */
  #setRandomIntelligence () {
    this.#intelligence = this.#getRandomAttributeValue()
  }

  /**
     * Value from 1-10.
     */
  #setRandomWisdom () {
    this.#wisdom = this.#getRandomAttributeValue()
  }

  /**
     * Value from 1-10.
     */
  #setRandomConstitution () {
    this.#constitution = this.#getRandomAttributeValue()
  }

  /**
     * Please use this to set values.
     */
  #setAllValuesRandom () {
    this.#setRandomCharisma()
    this.#setRandomConstitution()
    this.#setRandomDexterity()
    this.#setRandomIntelligence()
    this.#setRandomWisdom()
    this.#setRandomStrength()
  }

  /**
     * Values need to be randomized first with setAllValuesRandom.
     */
  #makeStringFromRandomValues () {
    this.#attributeString = `Strength ${this.#strength}, Charisma ${this.#charisma}, Dexterity ${this.#dexterity}, Intelligence ${this.#intelligence},
        Wisdom ${this.#wisdom}, Constituion ${this.#constitution}`
  }

  /**
     * If you must, change return value to object or array but you WILL break it.
     * Know what youre doing first.
     * @returns String
     */
  getAttributes () {
    this.#setAllValuesRandom()
    this.#makeStringFromRandomValues()
    return this.#attributeString
  }
}
