var Controller = function(View, Model) {
    this.carView = View;
    this.carModel = Model;
};

Controller.prototype.init = function () {
    this.carView.onKeyDownEvent = this.moving.bind(this);
    this.carView.init();
    this.carModel.init(this.needRendering.bind(this));
    this.needRendering();
  };
  
  Controller.prototype.moving = function (e) {
    this.carModel.carMove(e);
    if (carModel.objs.game_start == false) {
        let timer = setInterval(() => this.carModel.anotherCarMove(e), 100);
        carModel.objs.game_start = true;
        }
    };     

  
  Controller.prototype.needRendering = function () {
    this.carView.render(carModel.objs);
  };
  
  var carController = new Controller(carView, carModel);
 carController.init();