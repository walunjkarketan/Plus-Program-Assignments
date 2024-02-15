// Vehicle class
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method to get details of the vehicle
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Car class extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      // Call the constructor of the base class (Vehicle)
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    // Override the getDetails method to include the number of doors
    getDetails() {
      return `${super.getDetails()}, ${this.numDoors} doors`;
    }
  }
  
  // Instance of Vehicle
  const vehicle = new Vehicle('Toyota', 'Camry', 2022);
  
  // Instance of Car
  const car = new Car('Honda', 'Accord', 2022, 4);
  
  // Call getDetails method on each instance and log the result to the console
  console.log(vehicle.getDetails()); // 2022 Toyota Camry
  console.log(car.getDetails());     // 2022 Honda Accord, 4 doors  