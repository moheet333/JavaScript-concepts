class Pizza {
    constructor(type) {
        this.typeof = type;
        this.size = "large";
        this.crust = "thin";
    }
    setCrust (pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getCrust () {
        return this.crust;
    }


    // bake() {
    //     console.log(`Baking ${this.typeof} ${this.size} Pizza with ${this.crust} crust`);
    // }
}
// const myPizza = new Pizza("margarita");
// myPizza.setCrust("Thick!!!");
// console.log(myPizza.getCrust()); 

// myPizza.bake();

// #################### Up is for setting nad getting and understanging classes ###########

// ##################### Lower is Child Classes ###################

// class Specialty extends Pizza{
//     constructor (typePizzza) {
//         super(typePizzza);
//         this.topping = "sausage";
//     }
//     slice() {
//         console.log(`This Pizza is ${this.typeof} with ${this.topping} topping ${this.size} exciting size`);
//     }
// }

// const mySpeciality = new Specialty("paneer");
// mySpeciality.slice();