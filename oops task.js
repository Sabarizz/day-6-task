//write a "person" class to hold all the details

class Person {
    constructor (firstName,lastName,age,email,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = null;
    }
    setAddress (street,city,pinCode){
        this.address = {
            street,
            city , 
            pinCode,
        };
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person("Sabariz","M",27,"sabari26396@gmail.com",9688733582);
person1.setAddress ("Main st","Pollachi",642006);
console.log(person1.getFullName());
console.log(`Age : ${person1.age}`);
console.log(`Email : ${person1.email}`)
console.log(`phone : ${person1.phone}`)
console.log(`Address : ${person1.address.street},${person1.address.city},${person1.address.pinCode}`);



//calculate the price of uber

class UberPriceCalculator {
    constructor(baseFare,costPerMiles,costPerMinutes,surgeMultiplier){
        this.baseFare = baseFare;
        this.costPerMiles = costPerMiles;
        this.costPerMinutes = costPerMinutes;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distanceInMiles,durationInMinutes){
      const price =
       this.baseFare +
       (distanceInMiles * this.costPerMiles) +
       (durationInMinutes * this.costPerMinutes);
      const totalPrice = price * this.surgeMultiplier;
      return totalPrice;
    }

}
const calculator = new UberPriceCalculator(2.5, 1.5, 0.5, 1.2);
const distance = 5;
const duration = 15;
const price = calculator.calculatePrice(distance, duration);
console.log(`Estimated Uber Price = ${price.toFixed(2)}`);