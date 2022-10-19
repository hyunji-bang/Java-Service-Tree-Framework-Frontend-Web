//자동자 인터페이스 선언
// export default 를 선언해야 모듈로 사용할 수 있기에 추가함.
export default interface Car {
    name: string,
    color: string,
    start: () => void,
    stop: () => void,
}

// 원래 인터페이스는 보통 멤버 필드보다는 규약으로 사용되므로
// 메소드 선언이 맞으나, 타입스크립트의 경우는 타입에 포커스를 둬서 그런지
// 구현체의 타입 지정을 목적으로 한 멤버필드까지 전처리 선언을 하는 방향성을 가진다.