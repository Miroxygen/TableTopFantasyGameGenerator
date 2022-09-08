

export class Resource {
    constructor() {

    }

    getSpecificResource(search, typeOfResource) {
        const lowerCasesearch = search.toLowerCase()
        const foundResourse = typeOfResource.find(arrayIndex === lowerCasesearch)
        if(foundResourse === null) {
            return "Resource not found"
        }
        return foundResourse
    }
}