import { Resource } from "./resource.js"



export class MonsterType extends Resource{
    #allMonsterTypes
    #type
    constructor() {
        super()
        this.#allMonsterTypes = ["celestial", "dragon", "aberration", "humanoid", "plant", "undead"]
        this.#type
    }

   
   getAllMonsterTypes() {
    const arrayCopy = Array.from(this.#allMonsterTypes)
    return arrayCopy
   }

   getRandomType() {
    const randomType = super.getRandomResource(this.#allMonsterTypes)
    return randomType
   }
}