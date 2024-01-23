(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      // Type Coercion (Implicit coercion)
      /* + 연산자는 타입이 하나라도 있으면 모두 String 타입으로 강제 변환되고
      -, *, / 연산자는 숫자 타입으로 강제 변환된다. */
      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = 7 + "3";
        const guess = "73";

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = "7" + 3;
        const guess = "73";

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 빼는 경우의 형변환", function () {
        const result = "7" - 3;
        const guess = 4;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = ("0" && 30) || false;
        const guess = 30;
        /*
        1.그룹화된 "0" && 30은 모두 truthy 값이기 때문에 뒤에 30을 반환하고
        2. 30 || false는 첫 truthy 값인 30을 그대로 반환한다.
        */
        expect(result).to.equal(guess);
      });

      it("반복문 #1", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          a += i;
        }

        const result = a;
        const guess = 20;
        // 0 + 2 + 4 + 6 + 8 = 20
        expect(result).to.equal(guess);
      });

      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let result = "";

        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }
        // str의 마지막 순서부터 첫번째 순서인 0까지 감소하는 반복문이다.
        const guess = "Vanilla Coding";

        expect(result).to.equal(guess);
      });

      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3);
        const b = a.split("a");
        const result = b.join(":");
        const guess = "h:h:h:";
        /*
        console.log(a) "hahaha"

        console.log(b) ["h", "h", "h", ""]
        String.prototype.split()은 지정한 구분자를 통해 여러 개의 문자열로 나누어 새로운 배열로 반환한다.

        console.log(result) "h:h:h:"
        Array.prototype.join()은 지정된 구분 문자열로 연결하여 새로운 문자열로 반환한다.
        */
        expect(result).to.equal(guess);
      });

      it("반복문, 조건문", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          if (i % 4 === 0) {
            a += i;
          }
        }

        const result = a;
        const guess = 12;
        // 0 + 4 + 8 = 12
        expect(result).to.equal(guess);
      });

      it("반복문, 조건문, 논리 연산자", function () {
        let a = 0;

        for (let i = 0; i < 10; i++) {
          if (i % 3 === 0 || i % 4 === 0) {
            a += i;
          }
        }

        const result = a;
        const guess = 30;
        // 0 + 3 + 4 + 6 + 8 + 9 = 30
        expect(result).to.equal(guess);
      });

      // JavaScript는 64비트 부동소수점 형식을 따르기 때문에 소수점 이하 17자리 정도만 유지하고 나머지는 반올림 대상이 된다.
      it("비교 연산자, 연산자 우선순위, 소수점 다루기 (부동 소수점)", function () {
        const a = 0.1;
        const b = 0.2;
        const result = a + b === 0.3;
        const guess = false;
        /*
        console.log(a + b) 0.30000000000000004
        0.30000000000000004 === 0.3 ?
        false
        */
        expect(result).to.equal(guess);
      });
    });
  });
})();
