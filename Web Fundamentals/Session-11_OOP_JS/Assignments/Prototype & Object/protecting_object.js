const person = {
    // Properties
    _name: 'John', // Using underscore to indicate it's read-only
    _email: 'john@example.com', // Using underscore to indicate it's read-only
    _age: undefined, // Using underscore to indicate it's write-only
  
    // Getter for the age property
    getAge() {
      return this._age;
    },
  
    // Setter for the age property
    setAge(age) {
      // Perform any validation or additional logic if needed
      this._age = age;
    },
  };
  
  // Example usage
  console.log(person._name); // John (read-only)
  console.log(person._email); // john@example.com (read-only)
  
  person.setAge(25); // Set the age using the setter
  console.log(person.getAge()); // 25 (get the age using the getter)
  