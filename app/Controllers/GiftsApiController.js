import { appState } from "../AppState.js";
import { Gift } from "../Models/GiftsApi.js";
import { giftsApiService } from "../Services/GiftsApiService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawGifts() {
  let gift = appState.gifts
  let template = ''
  gift.forEach(g => template += Gift.ListTemplate(g))
  setHTML('gift-api', template)
  // let gift = appState.gifts
  // setHTML('gift-api', gift.ListTemplate)
}



export class GiftsApiController {

  constructor() {
    console.log('controller connected');
    appState.on('gifts', _drawGifts)
    this.getGift()
  }

  async getGift() {
    try {

      await giftsApiService.getGift()
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }
  async addGift() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      console.log(formData);
      await giftsApiService.addGift(formData)
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

  async openGift(id) {
    try {
      await giftsApiService.openGift(id)
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

}