/**
 * Connect the resources necessary for making a random monster.
 *
 * @author // Miranda Holmlund <mh225wi@lnu.se>
 * @version 1.0.0
 */

import { Attributes } from '../resources/attributes.js'
import { MonsterType } from '../resources/monster-type.js'
import { MonsterSubType } from '../resources/monster-sub-type.js'
import { MonsterAttack } from '../resources/monster-attacks.js'

/**
 * Can be used on its own to get an object with a random monster.
 */
export class MonsterGenerator {
  #attributes
  #type
  #subType
  #attack
  #monsterAttributes
  #monsterType
  #monsterSubType
  #monsterNormalAttack
  #monsterLegendaryAttack
  constructor () {
    this.#attributes = new Attributes()
    this.#type = new MonsterType()
    this.#subType = new MonsterSubType()
    this.#attack = new MonsterAttack()
    this.#monsterAttributes = ''
    this.#monsterType = ''
    this.#monsterSubType = ''
    this.#monsterNormalAttack = ''
    this.#monsterLegendaryAttack = ''
  }

  /**
     * See the attributes in attributes.js
     */
  #setAttributes () {
    this.#monsterAttributes = this.#attributes.getAttributes()
  }

  /**
     * See all the types in monster-type.js
     */
  #setType () {
    this.#monsterType = this.#type.getRandomType()
  }

  /**
     * See all subtypes in monster-sub-type.js
     */
  #setSubType () {
    this.#monsterSubType = this.#subType.getRandomSubtypeBasedOnType(this.#monsterType)
  }

  /**
     * See both normal and legendary attacks in monster-attack.js
     */
  #setAttacks () {
    const monsterAttacks = this.#attack.getRandomAttacksBasedOnType(this.#monsterType)
    this.#monsterNormalAttack = monsterAttacks.Normal
    this.#monsterLegendaryAttack = monsterAttacks.Legendary
  }

  /**
     * Ive set all the setters private.
     * I dont see a reason to make them public.
     */
  #setAllMonsterStats () {
    this.#setAttributes()
    this.#setType()
    this.#setSubType()
    this.#setAttacks()
  }

  /**
     * This can be changed to return an array if that fits you better,
     * (Maybe you want to work with index)
     * but you will need to change a lot of code so only do that if you
     * know the things to change.
     * @returns Object.
     */
  getRandomMonster () {
    this.#setAllMonsterStats()
    const randomMonster = {
      Type: this.#monsterType,
      Subtype: this.#monsterSubType,
      Traits: this.#monsterAttributes,
      NormalAttack: this.#monsterNormalAttack,
      LegendaryAttack: this.#monsterLegendaryAttack
    }
    return randomMonster
  }
}
