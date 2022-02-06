
export interface FlyBehavior {
    fly: Function
}
export class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('I m flying!')
    }
}
export class FlyNoWay implements FlyBehavior {
    fly() {
        console.log ('I cant fly');
    }
}
export class FlyRocketPowered implements FlyBehavior {
    fly() {
        console.log ('I m flying with a rocket!');
    }
}