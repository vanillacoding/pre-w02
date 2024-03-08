(function () {
  "use strict";

  describe("불리언 다루기 🟢 ⚫️", function () {
    describe("코드 에디터에서 homeworks/3_boolean.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("NOT 논리 연산자", function () {
        const result = !false;
        //부정 연산자 사용
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const result = !!true;
        //부정 연산자 2번 사용(false -> true)
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(NaN);
        //NaN은 falsy 
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(undefined + 20);
        //undefined + 20 = NaN -> falsy
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("hello");
        //문자열은 truthy
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("   ");
        //띄어쓰기도 truthy
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("");
        //빈 문자열은 falsy
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(-0);
        //-0은 falsy
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("null");
        //null은 falsy 그러나 문자열이므로 truthy
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(null);
        //null은 falsy
        const guess = false;

        expect(result).to.equal(guess);
      });
    });
  });
})();
