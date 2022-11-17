import { appState } from "../AppState.js";
import { Gift } from "../Models/GiftsApi.js";
import { GiftApi } from "./AxiosService.js";



class GiftsApiService {
  async addGift(formData) {
    const res = await GiftApi.post('', formData.tag)
    console.log('your gift', res.data);
  }
  async openGift(id) {
    let selectedGift = appState.gifts.find(i => i.id == id)
    // console.log(selectedGift)

    if (selectedGift.opened == false) {
      selectedGift.opened = true
    } else { console.log('already open') }
    const res = await GiftApi.put(id, selectedGift)
    this.getGift()
    // console.log(res.data);
  }
  async getGift() {
    const res = await GiftApi.get()
    // console.log('got the data', res.data);
    appState.gifts = res.data.map(g => new Gift(g))
    // console.log(appState.gifts);
  }

}
export const giftsApiService = new GiftsApiService()