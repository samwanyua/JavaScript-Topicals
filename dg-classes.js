// Dave Gray - classes
class Pizza {
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original"

    }
    get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza!`)
    }
}

const myPizza = new Pizza("Hawaii","Large")
myPizza.bake()//Baking a Large original Hawaii crust pizza!

myPizza.pizzaCrust = "sausage";

console.log(myPizza.type);//Hawaii


















