namespace ngBootstrap.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public foodList;
 
       public showModal(item: string) {
           this.$uibModal.open({
               templateUrl: `/ngApp/views/modal.html`,
               controller: `ModalController`,
               controllerAs: `modal`,
               resolve: { food: () => item }
           });

        }

       constructor(private $uibModal: angular.ui.bootstrap.IModalService, foodListServices: ngBootstrap.Services.FoodListServices  ) {
           this.foodList = foodListServices.getItems();
       }
    }

    export class ModalController {
        public close() {
            this.$uibModal.close();
        }
        constructor(private $uibModal: ng.ui.bootstrap.IModalServiceInstance,
            public food: string) { }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
