class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
var myFirstTain = new Train("red", false);
var mySecondTain = new Train("blue", false);
var myThridTain = new Train("blue", false);
var train4 = new Train("red", false);

console.log(myFirstTain);
console.log(mySecondTain);
console.log(myThridTain);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights();
train5.lightsStatus();
train5.getPrototype();

highSpeed1.toggleLights();
highSpeed1.getSelf();

class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs); 
console.log(boxingGym.stationaryBike); 
console.log(boxingGym.treadmill); 
