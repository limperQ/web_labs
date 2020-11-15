var View = function() {
    this.score = document.querySelector(".score");
    this.canvas = document.querySelector(".canvas");
    this.context = this.canvas.getContext("2d");
    this.onKeyDownEvent = null;
};

View.prototype.init = function() {
    document.addEventListener("keydown", this.onKeyDownEvent);
};

View.prototype.render = function(objs) {
    const fieldSprite = new Image();
    fieldSprite.src = "img/mainField.png"
    const carSprite = new Image();
    carSprite.src = "img/car.png";
    
    this.canvas.width = 400;
    this.canvas.height = 600;

    this.renderSprite(fieldSprite, 0, 0);
    
    this.score.innerHTML = objs.score;

    if (objs.result_game == "end") {
        this.renderSprite(fieldSprite, 0, 0);
        this.renderSprite(fieldSprite, 0, 0);

        this.score.innerHTML = "END GAME";
    } else {
        this.renderSprite(carSprite, objs.myCar.x, objs.myCar.y);
        this.renderSprite(carSprite, objs.anotherCar.x, objs.anotherCar.y);
    }
}

View.prototype.renderSprite = function (sprite, x, y) {
    this.context.save();
    this.context.drawImage(sprite, x, y);
    this.context.restore();
  }

var carView = new View();