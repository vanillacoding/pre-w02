(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = 7 + "3";
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = "7" + 3;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 빼는 경우의 형변환", function () {
        const result = "7" - 3;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = ("0" && 30) || false;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("반복문 #1", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          a += i;
        }

        const result = a;
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let result = "";

        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }

        const guess = 바코;

        expect(input).to.equal(guess);
      });

      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3);
        const b = a.split("a");
        const result = b.join(":");
        const guess = 바코;

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
        const guess = 바코;

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
        const guess = 바코;

        expect(result).to.equal(guess);
      });

      it("비교 연산자, 연산자 우선순위, 소수점 다루기 (부동 소수점)", function () {
        const a = 0.1;
        const b = 0.2;
        const result = a + b === 0.3;
        const guess = 바코;

        expect(result).to.equal(guess);
      });
    });
  });
})();
