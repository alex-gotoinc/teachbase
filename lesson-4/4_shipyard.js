const shipyardProto = {

  _checkBoatInstance: function (boat) {

    if (typeof boat === 'function') {
      return boat === this.boatClass;
    }

    if (typeof boat === 'object') {
      return boat instanceof this.boatClass;
    }

    return null;
  },

  paint: function (boat, color) {
    boat.color = color;
    console.log(`Boat was painted`, boat);
  },

  build: function (boatClass, boatParams) {
    return this._checkBoatInstance(boatClass) ?
      new boatClass(boatParams) : { error: 'Invalid instance' };
  },

  repair: function (boat) {
    if (this._checkBoatInstance(boat)) {
      boat.repaired = true;
      console.log(`Boat was repaired.`, boat);
    }
    else {
      console.log('Invalid instance')
    }
  },

  change: function (boat) {
    console.log(boat.constructor);
    return this._checkBoatInstance(boat) ?
      new boat.constructor() : { error: 'Invalid instance' }
  }
};

// shipyards constructors
function MotorShipyard() {
  this.boatClass = MotorBoat;
};

function SailingShipyard() {
  this.boatClass = SailingBoat;
}
MotorShipyard.prototype = shipyardProto;
SailingShipyard.prototype = shipyardProto;

// boats constructors
function MotorBoat({ power, material } = { power: 10, material: "iron" }) {
  this.power = power;
  this.material = material;
}
function SailingBoat({ mastAmount, sailsSquare } = { mastAmount: 5, sailsSquare: 15 }) {
  this.mastAmount = mastAmount;
  this.sailsSquare = sailsSquare;
}

// Create shipyards
const motorShipyard = new MotorShipyard();
const sailingShipyard = new SailingShipyard();

// Valid boat and shipyard
const motorBoat = motorShipyard.build(MotorBoat, {
  power: 42,
  material: 'Плутоний'
});
console.log(motorBoat);
motorShipyard.paint(motorBoat, 'red');
motorShipyard.repair(motorBoat);

const changedMotorBoat = motorShipyard.change(motorBoat);
console.log(changedMotorBoat);

const sailingShip = sailingShipyard.build(SailingBoat)
console.log(sailingShip);

// Invalid boat/shipyard
const invalidMotorBoat = sailingShipyard.build(MotorBoat);
console.log(invalidMotorBoat);




