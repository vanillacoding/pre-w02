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

        expect(result).to.equal(guess);
      });
          /* 나머지 연산자 (%) = 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지 */
      it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
        let a = 10 % 3;
        const result = a++;
        const guess = 1;

        expect(result).to.equal(guess);
      });
          /* 대입 연산자
          =	왼쪽의 피연산자에 오른쪽의 피연산자를 대입함.
          +=	왼쪽의 피연산자에 오른쪽의 피연산자를 더하고, 그 결과를 왼쪽의 피연산자에 대입
          -=	왼쪽의 피연산자에서 오른쪽의 피연산자를 빼고, 그 결과를 왼쪽의 피연산자에 대입
          *=	왼쪽의 피연산자에 오른쪽의 피연산자를 곱하고, 그 결과를 왼쪽의 피연산자에 대입
          /=	왼쪽의 피연산자를 오른쪽의 피연산자로 나누고, 그 결과를 왼쪽의 피연산자에 대입
          %=	왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후에, 나머지를 왼쪽의 피연산자에 대입 */
          /* 후위 증감 연산자 (n++) = 연산자 ++가 피연산자 n보다 뒤에 위치할 때를 후위라 함, 1증가하기 전 값이 연산결과
          Ex) n = 12 일 때, => n++ = 12 => n(13) = n(12) + 1  */
      it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
        let a = 10 % 3;
        const result = ++a;
        const guess = 2;

        expect(result).to.equal(guess);
      });
          /* 전위 증감 연산자 (++n) = 연산자 ++가 피연산자 n보다 앞에 위치할 때를 전위라 함, 1증가한 값이 연산결과 \
          Ex) n = 12 일 때, => ++n = 13 => n(13) = n(12) + 1   */
      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const result = ++a;
        const guess = 6;

        expect(result).to.equal(guess);
      });
          /* -=	왼쪽의 피연산자에서 오른쪽의 피연산자를 빼고, 그 결과를 왼쪽의 피연산자에 대입 */
      it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
        let a = 10;
        a = a / 5;

        const result = a > 2;
        const guess = false;

        expect(result).to.equal(guess);
      });
          /* /=	왼쪽의 피연산자를 오른쪽의 피연산자로 나누고, 그 결과를 왼쪽의 피연산자에 대입 */
      it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
        const a = "2";
        const result = Number(a);
        const guess = 2;

        expect(result).to.equal(guess);
      });
          /* Number()는 다른 데이터 유형을 숫자 형식으로 변환하는 데 사용할 수있는 함수, 입력 매개 변수가 정의되지 않았거나 숫자로 변환 할 수없는 경우 NaN 을 출력
          Ex) number(100.123) = 100.123 / numer(hello) = NaN */
      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !a;
        const guess = false;

        expect(result).to.equal(guess);
      });
          /* 대입 연산자
          논리 연산자
          주어진 논리식을 판단, 참(true)과 거짓(false)을 결정하는 연산자
          AND 연산과 OR 연산은 두 개의 피연산자를 가지는 이항 연산자, 피연산자들의 결합 방향은 왼쪽에서 오른쪽
          NOT 연산자는 피연산자가 단 하나뿐인 단항 연산자, 피연산자의 결합 방향은 오른쪽에서 왼쪽
          &&	논리식이 모두 참이면 1을 (AND)
          ||	논리식 중에서 하나라도 참이면 1 (OR)
          !	논리식의 결과가 참이면 0을, 거짓이면 1 (NOT)  */
      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !!a;
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 0;
        const result = !!a;
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = -0;
        const result = !!a;
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 30 && 0;
        const guess = 0;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 0 && 10;
        const guess = 0;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = 7 || 3;
        const guess = 7;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = NaN || 3;
        const guess = 3;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = 7 || (3 && 10);
        const guess = 7;

        expect(result).to.equal(guess);
      });
    });
  });
})();
