export interface QuackBehavior {
    quack: Function;
}

export class Quack implements QuackBehavior {
    public quack() {
        console.log('quack')
    }
}

export class MuteQuack implements QuackBehavior {
    public quack() {
        console.log(' silence ')
    }
}
export class Squeak implements QuackBehavior {
    public quack () {
        console.log('squeak')
    }
}