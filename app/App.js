import { GiftsApiController } from "./Controllers/GiftsApiController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  giftsApiController = new GiftsApiController();
}

window["app"] = new App();
