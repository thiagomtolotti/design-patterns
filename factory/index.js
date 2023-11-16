class Burger{
    constructor(ingredients){
        this.ingredients = ingredients

        this.render()
    }

    render(){
        console.log(this.ingredients)
    }
}

class BurgerFactory{
    createCheeseBurger(){
        const ingredients = ["Bun", "cheese", "beef-patty"]
        return new Burger(ingredients)
    }

    createDeluxeCheeseBurger(){
        const ingredients = ["Bun", "tomato", "lettuce", "cheese", "beef-patty"]
        return new Burger(ingredients)
    }

    createVeganBurger(){
        const ingredients = ["Bun", "special-sauce", "veggie-patty"]
        return new Burger(ingredients)
    }
}

const burgerFactory = new BurgerFactory()

burgerFactory.createCheeseBurger()
burgerFactory.createDeluxeCheeseBurger()
burgerFactory.createVeganBurger()