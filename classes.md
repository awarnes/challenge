### Question:
How do Javascript classes work and how do we achieve inheritance?
Give an example.

### Answer:
Classes allow us to create reusable pieces of code that can especially help in organizing like data and information. Every time we use, or instantiate, a class we'll have access to that code but without impacting any other places we use it. Each of these instances can then be used individually or together to achieve whatever goal we need.

When creating classes we often think of starting at an abstract level and moving to the more specific. For example, we might use a class to describe a `Vehicle`. A `Vehicle` can transport things, might have a speed associated with it, and has a certain amount of fuel among other things.

```javascript
class Vehicle {
  constructor(cargo = [], speed = 0, fuel = 100) {
    this.cargo = cargo;
    this.speed = speed;
    this.fuel = fuel;
  };

  setSpeed(speed) {
    this.speed = speed;
  };

  addCargo(item) {
    this.cargo.push(item);
  };

  removeCargo(item) {
    const firstItem = this.cargo.indexOf(item);
    if (firstItem !== -1) {
      this.cargo.splice(firstItem, 1);
    } else {
      throw Error(`Unable to find ${item}`);
    }
  };
};

// Instantiating a base vehicle with the built-in default settings.
const vehicle1 = new Vehicle();

// Instantiating a custom vehicle with preset cargo, speed, and fuel.
const vehicle2 = new Vehicle(['apple', 'sauce'], 0, 25);
```

This general definition of a `Vehicle` is useful, but what if we want to delineate between a `Car` and an `Airplane`? We could add additional values and functionality to the `Vehicle` class, like number of wings, altitude, and number of wheels.

```javascript
class Vehicle {
  constructor(
    cargo = [],
    speed = 0,
    fuel = 100,
    wings = 2,
    altitude = 0,
    numberOfWheels = 4
  ) {
    this.cargo = cargo;
    this.speed = speed;
    this.fuel = fuel;
    this.wings = wings;
    this.altitude = altitude;
    this.numberOfWheels = numberOfWheels;
  };

  setSpeed(speed) {
    this.speed = speed;
  };

  addCargo(item) {
    this.cargo.push(item);
  };

  removeCargo(item) {
    const firstItem = this.cargo.indexOf(item);
    if (firstItem !== -1) {
      this.cargo.splice(firstItem, 1);
    } else {
      throw Error(`Unable to find ${item}`);
    }
  };
};
```

However, we would quickly be combining a bunch of unrelated code into a single class. When we instantiate a Vehicle we wouldn't actually be using a lot of the code we'd written (though maybe we'd have a pretty cool flying car?).

This is where inheritance comes in. When we have these different sub-types of Vehicle we can use inheritance to keep the common functionality centralized in the base class but _extend_ the specific functionality into other classes.

```javascript
class Car extends Vehicle {
  constructor(props = {}) {
    super(props);
    const {numberOfWheels = 4, numberOfWindows = 4} = props;

    this.numberOfWheels = numberOfWheels;
    this.windows = Array(numberOfWindows).fill('UP');
  }

  rollDownWindow(window) {
    this.windows[window] = 'DOWN';
  }

  turnOn240AC() {
    this.rollDownWindow(0);
    this.rollDownWindow(3);

    this.setSpeed(40);
  }
}

const oldReliable = new Car();
const theEnemy = new Car({numberOfWheels: 3});

oldReliable.turnOn240AC();
```

Here we use the `extend` keyword to inherit all the functionality of the base `Vehicle` class we defined above. In the constructor we also call `super(props)` to make sure that the constructor for the base class is also initialized (we don't want to forget to fuel up our car). Once the base class has been fully initialized we can initialize the values and information specific to the `Car`.

> We're using `props` in this example to simplify passing everything back to the base `Vehicle` class while still allowing us to set default values during instantiation. Since we're now passing an object we'll need to update the `Vehicle` class to accept that as well.

Now, when we instantiate a Car we're just making use of the necessary Car functionality without having to worry about the Airplane functionality that we're not using (don't forget to give the Airplane something to land on though!)

All together:

```javascript
class Vehicle {
  constructor(props = {}) {
    const {cargo = [], speed = 0, fuel = 100} = props;
    this.cargo = cargo;
    this.speed = speed;
    this.fuel = fuel;
  };

  setSpeed(speed) {
    this.speed = speed;
  };

  addCargo(item) {
    this.cargo.push(item);
  };

  removeCargo(item) {
    const firstItem = this.cargo.indexOf(item);
    if (firstItem !== -1) {
      this.cargo.splice(firstItem, 1);
    } else {
      throw Error(`Unable to find ${item}`);
    }
  };
};


class Car extends Vehicle {
  constructor(props = {}) {
    super(props);
    const {numberOfWheels = 4, numberOfWindows = 4} = props;

    this.numberOfWheels = numberOfWheels;
    this.windows = Array(numberOfWindows).fill('UP');
  };

  turnOn240AC() {
    this.windows[0] = 'DOWN';
    this.windows[3] = 'DOWN';
    this.setSpeed(40);
  };
};

class Airplane extends Vehicle {
  constructor(props = {}) {
    super(props);
    const {landingGear = 'pontoons', altitude = 0, wings = 2} = props;

    this.landingGear = landingGear;
    this.landingGearExtended = true;
    this.altitude = altitude;
    this.wings = wings;
  };

  setAltitude(altitude) {
    this.altitude = altitude;
  };

  toggleLandingGear() {
    if (['pontoons', 'struts'].includes(this.landingGear)) {
      throw Error('Landing gear always extended');
    }

    this.landingGearExtended = !this.landingGearExtended;
  };

  takeOff() {
    this.setSpeed(50);
    
    try {
      this.toggleLandingGear(); 
    } catch (error) {
      console.log(error)
    }

    this.setAltitude(10000);
  };
};
```