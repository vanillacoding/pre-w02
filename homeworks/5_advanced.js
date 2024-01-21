(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      it("반복문 #1", function () {
        let result = 0;

        for (let i = 0; i < 10; i += 2) {
          result += i;
        }

        const input = result;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let input = "";

        for (let i = str.length - 1; i >= 0; i--) {
          input += str[i];
        }

        const output = 바코;

        expect(input).to.equal(output);
      });

      it("반복문, 조건문", function () {
        let result = 0;

        for (let i = 0; i < 10; i += 2) {
          if (i % 4 === 0) {
            result += i;
          }
        }

        const input = result;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("반복문, 조건문, 논리 연산자", function () {
        let result = 0;

        for (let i = 0; i < 10; i++) {
          if (i % 3 === 0 || i % 4 === 0) {
            result += i;
          }
        }

        const input = result;
        const output = 바코;

        expect(input).to.equal(output);
      });
    });
  });
})();
