// Task1
class Car {
    constructor(make, model, year, color, CurrentFuel,FuelFor1Km,Milleage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.Milleage=Milleage;
      this.mileage = 0;
      this.CurrentFuel=CurrentFuel;
      this.FuelFor1Km=FuelFor1Km;
      this.benzin=0;
    }
    drive(distance) {
      this.mileage += distance;
      this.benzin=distance*this.FuelFor1Km
      if(this.benzin<this.CurrentFuel){
       this.CurrentFuel=this.CurrentFuel-this.benzin
       this.Milleage=this.Milleage+this.mileage
console.log(this.CurrentFuel);
console.log(this.Milleage);
      }
      else{
console.log("warning");
      }
    }
  }
  let car = new Car("Toyota", "Celica", 2016, "blue",100,2,30);
  car.drive(15);













//Task2
class Products {
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    }
    class Milk extends Products{
        constructor(name,price,count){
            super(name,price);
            this.count=count;
        }
    }
const milk1=new Milk("milk1",5,6);
const milk2=new Milk("milk2",3,4);
const milk3=new Milk("milk3",2,3);
const Array=[milk1,milk2,milk3];
let totalprice=0;
let totals=0;
for(let i=0;i<Array.length; i++){
    totalprice+=Array[i].count;
    totals+=Array[i].price;
}
const edediorta=totalprice/Array.length;
const edediorta2=totals/Array.length;
console.log(edediorta);//ucuncu bir deyisen
console.log(edediorta2);//price

