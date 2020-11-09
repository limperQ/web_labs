var View = function() {
    this.myCar = document.querySelector(".myCar");
    this.anotherCar = document.querySelector(".anotherCar");
    this.score = document.querySelector(".score");
    this.onKeyDownEvent = null;
};

View.prototype.init = function() {
    document.addEventListener("keydown", this.onKeyDownEvent);
};

View.prototype.render = function(objs) {
    let position;

    this.myCar.style.left = objs.myCar.x + "px";
    this.myCar.style.top = objs.myCar.y + "px";

    this.anotherCar.style.left = objs.anotherCar.x + "px";
    this.anotherCar.style.top = objs.anotherCar.y + "px";

    this.score.innerHTML = objs.score;

    if (objs.result_game == "end") {
        this.myCar.style.width = 0;
        this.myCar.style.height = 0;
        
        this.anotherCar.style.width = 0;
        this.anotherCar.style.height = 0;

        this.score.innerHTML = "END GAME";
    }
}

var carView = new View();