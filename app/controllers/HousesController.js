import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"

export class HousesController {
    constructor() {
        console.log('🏠🎮')
        AppState.on('houses', this.drawHouses)
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            console.error('Could not get houses', error)
            Pop.error(error)
        }
    }

    drawHouses() {
        let houseContent = ''
        AppState.houses.forEach((house) => houseContent += house.HouseTemplate)
        const houseElm = document.getElementById('house-listing')
        houseElm.innerHTML = houseContent
    }
}
