(function () {
  "use strict";

  describe("불리언 다루기 🟢 ⚫️", function () {
    describe("homeworks/3_boolean.js 파일을 열어주세요.", function () {
      it("NOT 논리 연산자", function () {
        const input = !false;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("NOT 논리 연산자", function () {
        const input = !!true;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean(NaN);
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean(undefined + 20);
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean("hello");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean(" ");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean("");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean(-0);
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean("null");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("Truthy/Falsy 판별", function () {
        const input = Boolean(null);
        const output = 바코;

        expect(input).to.equal(output);
      });
    });
  });
})();
