// circum: 둘레
// 원둘레를 구하는 공식은 원둘레 = 2 * π * 반지름 입니다.
// circum은 둘레를 구한다는 의도를 파악하기 어려운 함수이름이라고 생각 ->
// getCircumByRadius or calcCircumByRadius로 변경
export function calcCircumByRadius(radius) {
  return 2 * Math.PI * radius;
}
