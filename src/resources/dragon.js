import { Monster } from "./monster.js";


export class Dragon extends Monster {
    constructor() {
        super()
    }

    
    setType() {
        this.type = "dragon"
    }
}