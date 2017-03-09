namespace ngBootstrap.Services {

    export class FoodListServices {
        public items: string[];

        constructor() {
            this.items = ["Milk", "Cookies", "Cereal", "Bananas"];
            
        }
        public getItems() {
            return this.items;
        }
    }
    angular.module('ngBootstrap').service('foodListServices', FoodListServices );
    export class MyService {

    }
    angular.module('ngBootstrap').service('myService', MyService);
}
