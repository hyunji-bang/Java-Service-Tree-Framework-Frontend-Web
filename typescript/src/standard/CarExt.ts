import Car from "./Car";

export default interface CarExt extends Car {
    car_name:string,
    sound: () => void,
}
