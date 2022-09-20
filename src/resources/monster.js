


export class Monster {
    #allMonsterTypes
    #type
    #basicAttack
    #legendaryAttack
    constructor() {
        this.#allMonsterTypes = ["celestial", "dragon", "aberration", "humanoid", "plant", "undead"]
        this.#type
        this.#basicAttack
        this.#legendaryAttack
    }

   
   setType(type) {
    this.#type = type
   }

   
   setBasicAttack(basicAttack) {
    this.#basicAttack = basicAttack
   }

   setLegendaryAttack(legendaryAttack) {
     this.#legendaryAttack = legendaryAttack
   }
}