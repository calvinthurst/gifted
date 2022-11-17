import { generateId } from "../Utils/generateId.js"


export class Gift {
  constructor(data) {
    this.id = data.id || generateId()
    this.url = data.url
    this.opened = data.opened
    this.createdAt = data.createdAt
    this.tag = data.tag || ''
  }

  static ListTemplate(gift) {
    if (gift.opened == true) {
      return `
    <div class="col-3 card rounded bg-secondary ">
    <h5>${gift.tag}</h5>
    <img class="img-fluid" src="${gift.url}" alt="">
  </div>
    `
    }
    else {
      return `
    <div class="col-3 card rounded hiddengift " onclick="app.giftsApiController.openGift('${gift.id}')">
    <h5 class="text-danger">open me</h5>
  </div>
    `
    }
  }
}