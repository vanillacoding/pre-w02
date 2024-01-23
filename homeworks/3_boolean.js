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
        const guess = true;
        // NOT 논리 연산자는 참을 거짓으로 만들고 거짓을 참으로 만든다.
        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const result = !!true;
        const guess = true;
        // 이중 NOT 논리 연산자는 명시적으로 원시형 Boolean 값으로 변환한다.
        // ex) !!truthy -> true | !!falsy -> false
        expect(result).to.equal(guess);
      });

      /* 대표적인 Falsy 값
      1. null (nullish)
      2. undefined (nullish)
      3. false
      4. NaN
      5. 0
      6. -0
      7. ""
      */
      it("Truthy/Falsy 판별", function () {
        const result = Boolean(NaN);
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(undefined + 20);
        const guess = false;
        // undefined + 20은 NaN을 반환한다.
        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("hello");
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("   ");
        const guess = true;
        // 적어도 하나의 비공백 문자도 포함하지 않아야 falsy다.
        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("");
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(-0);
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean("null");
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("Truthy/Falsy 판별", function () {
        const result = Boolean(null);
        const guess = false;

        expect(result).to.equal(guess);
      });
    });
  });
})();
