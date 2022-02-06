import { Beverage } from "../beverage";

export class Espresso extends Beverage {
    constructor() {
        super();
        this. description = 'Espresso'
    }
    public cost() {
        return 1.99
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this. description = 'HouseBlend Coffee'
    }
    public cost() {
        return 0.89
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this. description = 'DarkRoast Coffee'
    }
    public cost() {
        return 1.05
    }
}

export class Decat extends Beverage {
    constructor() {
        super();
        this.description = 'Decat Coffee'
    }
    public cost() {
        return 1.99
    }
}