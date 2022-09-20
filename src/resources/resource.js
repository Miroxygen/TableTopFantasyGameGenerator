

export class Resource {
    constructor() {

    }

    getSpecificResource(search, typeOfResource) {
        const lowerCasesearch = search.toLowerCase()
        if(typeOfResource.includes(lowerCasesearch)) {
            return lowerCasesearch
        } else {
            return "Resource not found"
        }
    }

    getRandomResource(resourceArray) {
        const randomNumber = Math.floor(Math.random() * resourceArray.length)
        return resourceArray[randomNumber]
    }
}