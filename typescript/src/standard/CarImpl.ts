import Car from "./Car";

//CarImpl 클래스 선언
export default class CarImpl implements Car {
    name = "K5"
    color = "white"
    start(){
        console.log("출발")
    }

    stop(){
        console.log("정차")
    }
}