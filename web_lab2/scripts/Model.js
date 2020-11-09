const INITIAL_MY_CAR_X = 80;
const INITIAL_MY_CAR_Y = 440;
const INITIAL_ANOTHER_CAR_X = 80;
const INITIAL_ANOTHER_CAR_Y = 0;
const STEP_X = 120;
const STEP_Y = 40;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_LEFT = 37;
const LEFT_BORDER = 80;
const RIGHT_BORDER = 200;
const TOP_BORDER = 0;
const DOWN_BORDER = 440;

var Model = function() {
    this.objs = {
        myCar: {
            type: "car",
            x: INITIAL_MY_CAR_X,
            y: INITIAL_MY_CAR_Y,
            line: 1,
        },
        anotherCar: {
            type: "car",
            x: Math.random() < 0.5 ? INITIAL_ANOTHER_CAR_X : INITIAL_ANOTHER_CAR_X + 120,
            y: INITIAL_ANOTHER_CAR_Y,
            line: 0,
        },
        score: 0,
        result_game: "null",
        game_start: false
    };
};

Model.prototype.init = function(renderFunc) {
    this.needRendering = renderFunc;
};

Model.prototype.setCoords = function(obj, x, y) {
    x = x == (undefined || null) ? obj.x : x;    
    y = y == (undefined || null) ? obj.y : y;
    checkCollisions.call(this, obj, x, y);
    this.needRendering();    
};

Model.prototype.getCoords = function (obj) {
    return {
      x: obj.x,
      y: obj.y,
    };
  };


  Model.prototype.carMove = function (e) {
    const keyCode = e.keyCode;
    const x = carModel.getCoords(carModel.objs.myCar).x;
    const y = carModel.getCoords(carModel.objs.myCar).y;
  
    switch (keyCode) {
      case KEY_CODE_LEFT: {
        carModel.setCoords(carModel.objs.myCar, x - STEP_X, null);
        carModel.objs.myCar.line = 1;
        break;
      }
      case KEY_CODE_RIGHT: {
        carModel.setCoords(carModel.objs.myCar, x + STEP_X, null);
        carModel.objs.myCar.line = 2;
        break;
      }
    }
  };

  Model.prototype.anotherCarMove = function (e) {
    const keyCode = e.keyCode;
    const x = carModel.getCoords(carModel.objs.anotherCar).x;
    const y = carModel.getCoords(carModel.objs.anotherCar).y;
  
    carModel.setCoords(carModel.objs.anotherCar, null, y + STEP_Y);      
  };
  
    function checkCollisions(obj, x, y) {
        const borderCollision = x < LEFT_BORDER || x > RIGHT_BORDER|| y < TOP_BORDER || y > DOWN_BORDER + 150;

        if (carModel.objs.anotherCar.y == 280) {
            carModel.objs.anotherCar.line = (carModel.objs.anotherCar.x == 80 ? 1 : 2);
        }

        if (carModel.objs.anotherCar.line == carModel.objs.myCar.line) {
            carModel.objs.result_game = "end";
        }

        if (!borderCollision && carModel.objs.anotherCar.line != carModel.objs.myCar.line) {
        obj.x = x;
        obj.y = y;
        carModel.objs.anotherCar.position += 40;
        };

        if (carModel.objs.anotherCar.y >= 560) {
            carModel.objs.anotherCar.y = 0;
            carModel.objs.anotherCar.x = Math.random() < 0.5 ? INITIAL_ANOTHER_CAR_X : INITIAL_ANOTHER_CAR_X + 120;
            carModel.objs.anotherCar.line = 0;
            carModel.objs.score += 10;
        }
    }
  const carModel = new Model();
