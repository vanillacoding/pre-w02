(function () {
  "use strict";

  describe("숫자 다루기 🎲", function () {
    describe("코드 에디터에서 homeworks/2_number.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("나머지 연산자", function () {
        const result = 10 % 2;
        const guess = 0;
        // 10을 2로 나눈 나머지는 0이다.
        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
        let a = 10 % 3;
        const result = a++;
        const guess = 1;
        // 10을 3로 나눈 나머지는 1이다.
        // 피연산자 뒤에 ++연산자를 붙여서 사용했기 때문에 증가하기 전 값 1을 반환한다.
        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
        let a = 10 % 3;
        const result = ++a;
        const guess = 2;
        // 10을 3로 나눈 나머지는 1이다.
        // 피연산자 앞에 ++연산자를 붙여서 사용했기 때문에 증가하고 난 후 값 2를 반환한다.
        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const result = ++a;
        const guess = 6;
        // a에 변수에 5라는 피연산자를 뺀 값 5를 다시 할당한다.
        // 피연산자 앞에 ++연산자를 붙여서 사용했기 때문에 증가하고 난 후 값 6을 반환한다.
        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
        let a = 10;
        a = a / 5;

        const result = a > 2;
        const guess = false;
        // a를 5로 나눈 값 2를 다시 할당한다.
        // a는 2와 같기 때문에 result는 false를 반환한다.
        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
        const a = "2";
        const result = Number(a);
        const guess = 2;
        // a라는 문자열 "2"를 숫자로 변환하면 숫자 2를 반환한다.
        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !a;
        const guess = false;
        // a라는 숫자 45는 truthy 값이기 때문에 !true는 NOT 논리 연산자에 의해 false를 반환한다.
        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !!a;
        const guess = true;
        // a라는 숫자 45는 truthy 값이기 때문에 !!true는 이중 NOT 논리 연산자에 의해 true를 반환한다.
        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 0;
        const result = !!a;
        const guess = false;
        // 0은 falsy 값이기 때문에 !!false는 이중 NOT 논리 연산자에 의해 false를 반환한다.
        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = -0;
        const result = !!a;
        const guess = false;
        // -0은 falsy 값이기 때문에 !!false는 이중 NOT 논리 연산자에 의해 false를 반환한다.
        expect(result).to.equal(guess);
      });

      // && 연산자는 첫 falsy 값의 피연산자를 만나면 그 값을 그대로 반환한다.
      // && 연산자는 만약 모든 연산자가 truthy 값이라면 뒤에 있는 truthy 값을 반환한다.
      it("&& 논리 연산자", function () {
        const result = 30 && 0;
        const guess = 0;
        // 앞에 30이 truthy 값에 해당하지만 뒤에 falsy 값인 0을 반환한다.
        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 0 && 10;
        const guess = 0;
        // 앞에 0이 falsy 값이기 때문에 0을 그대로 반환한다. (10은 평가X)
        expect(result).to.equal(guess);
      });

      // || 연산자는 첫 truthy 값의 피연산자를 만나면 그 값을 그대로 반환한다.
      it("|| 논리 연산자", function () {
        const result = 7 || 3;
        const guess = 7;
        // 앞에 7이 truthy 값이기 때문에 7을 그대로 반환한다. (3은 평가X)
        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = NaN || 3;
        const guess = 3;
        // 앞에 NaN이 falsy 값이지만 때문에 뒤에 truthy 값인 3을 반환한다.
        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = 7 || (3 && 10);
        const guess = 7;
        // 모든 truthy 값으로 그룹화된 3 && 10을 먼저 실행하면 뒤에 있는 truthy 값 10이 출력된다.
        // 7 || 3은 모두 truthy 값이기 때문에 7을 그대로 출력한다.
        expect(result).to.equal(guess);
      });
    });
  });
})();
