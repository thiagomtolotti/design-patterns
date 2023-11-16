class Burger{
    constructor(){
        this.buns = ''
        this.patty = ''
        this.cheese = ''
    }

    setBuns(bunStyle){
        this.buns = bunStyle
    }

    setPatty(pattyStyle){
        this.patty = pattyStyle
    }

    setCheese(cheeseStyle){
        this.cheese = cheeseStyle
    }
}

class BurgerBuilder{
    constructor(){
        this.burger = new Burger()
    }

    addBuns(bunStyle){
        this.burger.setBuns(bunStyle)
        return this
    }

    addPatty(pattyStyle){
        this.burger.setPatty(pattyStyle)
        return this
    }

    addCheese(cheeseStyle){
        this.burger.setCheese(cheeseStyle)
        return this
    }

    build(){
        return this.burger
    }
}

const burger = new BurgerBuilder()
burger.addBuns("sesame")
burger.addPatty("fish-patty")
burger.addCheese("swiss cheese")
console.log(burger.build())