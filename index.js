// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
<<<<<<< HEAD
    this.pi = Math.PI
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
   return this.pi * this.diameter
  }

  get area(){
   return this.pi * this.radius * this.radius
  }
  
  set diameter(newdia){
   this.radius = (newdia / 2)
  }
  
  set circumference(newcir){
    this.diameter = newcir/3.2
  }
  
  set area(rad){
    this.radius = rad
  }
  
}
let circle = new Circle(6)
 circle.diameter = 36
 circle.circumference = 100
=======
  }
  
  get diameter(){
    return Math.PI * this.radius
  }
  
   get circumference(){
    return Math.PI * this.diameter
  }
  
   get area(){
    return Math.PI * this.radius * this.radius
  }
  
  set radius(radius){
    this.radius = radius;
  }
}

let Circle = new Circle(3);
circle.radius;
>>>>>>> 49dd958b0ec003a2f42de53228f39f0e716031a3
