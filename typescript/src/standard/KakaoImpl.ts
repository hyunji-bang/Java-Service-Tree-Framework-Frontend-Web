import Car from "./Car";
import Kakao from "./Kakao";

//CarImpl 클래스 선언
export default class KakaoImpl implements Kakao {
    name = "K5";
    color = "white";
    message = "hi"

    start(){
        console.log("출발");
    }

    stop(){
        console.log("정차");
    }

    send() {
        console.log("message send");
    }
}