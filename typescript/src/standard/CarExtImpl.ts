import CarExt from "./CarExt";

//CarExtImpl 클래스 선언
export default class CarExtImpl implements CarExt {

    name = "K5"
    color = "white"
    car_name = "benz els 550"

    sound(){
        console.log(this.car_name + "그르르");
    }
    start(){
        console.log("출발")
    }
    stop = (): void => {
        console.log("정차");
    }
}