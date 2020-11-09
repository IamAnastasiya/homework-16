"use strict";

class Hamburger {
    constructor (size, ...stuffing) {
        if (size === Hamburger.SIZE_SMALL || size === Hamburger.SIZE_BIG) {
            this.size = size;
        }
        this.stuffing = stuffing;
        this.topping = [];
    }


    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }

    static STUFFING_POTATOES = {
        price: 15,
        calories: 10,
    }

    static TOPPING_SPICES = {
        price: 15,
        calories: 0,
    }

    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    }

    addTopping (topping) {
        if (topping === Hamburger.TOPPING_SPICES || topping === Hamburger.TOPPING_MAYO) {
            this.topping.push(topping);
        }
    }

    calculatePrice () {
        let finalPrice;
        finalPrice = this.size.price + this.stuffing.reduce((a, c) => a + c.price, 0) + this.topping.reduce((a, b) => a + b.price, 0);
        return finalPrice;
    }

    calculateCalories () {
        let totalCalories;
        totalCalories = this.size.calories + this.stuffing.reduce((a, c) => a + c.calories, 0) + this.topping.reduce((a, b) => a + b.calories, 0);
        return totalCalories;

    }

}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATOES);
console.log ("Hamburger price is : " + hamburger.calculatePrice() + " tugriks");
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICES);
hamburger.addTopping(Hamburger.TOPPING_SPICES);
console.log("Calories: " + hamburger.calculateCalories() );
console.log("Price: " + hamburger.calculatePrice() + " tugriks");
hamburger.addTopping(Hamburger.TOPPING_SPICES);
console.log("Price with sauce: " + hamburger.calculatePrice() + " tugriks");
