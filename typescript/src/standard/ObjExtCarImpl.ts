import CarExtImpl from "./CarExtImpl";

//ObjExtCarImpl 클래스 선언
export default class ObjExtCarImpl extends CarExtImpl {

    constructor(name: string, color: string, car_name: string) {
        super();
        this.name = name;
        this.color = color;
        this.car_name = car_name;
    }
}