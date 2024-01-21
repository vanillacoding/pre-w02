(function () {
  "use strict";

  describe("숫자 다루기 🎲", function () {
    describe("코드 에디터에서 homeworks/2_number.js 파일을 열어주세요.", function () {
      it("나머지 연산자", function () {
        const input = 10 % 2;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자와 대입 연산자", function () {
        const a = 10 % 3;
        const input = a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
        let a = 10 % 3;
        const input = a++;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
        let a = 10 % 3;
        const input = ++a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const input = ++a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const input = ++a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
        let a = 10;
        a = a / 5;

        const input = a > 2;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
        const a = "2";
        const input = Number(a);
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("비교 연산자, 연산자 우선순위, 소수점 다루기", function () {
        const a = 0.1;
        const b = 0.2;
        const input = a + b === 0.3;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const input = !a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const input = !!a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("NOT 논리 연산자", function () {
        const a = 0;
        const input = !!a;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("NOT 논리 연산자", function () {
        const a = -0;
        const input = !!a;
        const output = 바코;

        expect(input).to.equal(output);
      });
    });
  });
})();
