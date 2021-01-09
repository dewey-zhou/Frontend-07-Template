class Human{
    hurt(damage){
        console.log(`You was hurt,from ${damage}`)
    }
}
class Dog{
    bite(){
        return "bite"
    }
}
let person = new Human()
let dog = new Dog()

person.hurt(dog.bite())