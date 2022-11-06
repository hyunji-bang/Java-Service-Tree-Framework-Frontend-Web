import CarExtImpl from "./CarExtImpl";
import KakaoImpl from "./KakaoImpl";
import CarExt from "./CarExt";

interface Duck {
    checkType: string
}

//ObjExtCarImpl 클래스 선언
export default class ObjExtCarImpl extends CarExtImpl implements Duck{

    constructor(name: string, color: string, car_name: string) {
        super();
        this.name = name;
        this.color = color;
        this.car_name = car_name;
    }

    checkType = "check";
}