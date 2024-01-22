(function () {
  "use strict";

  describe("[연습게임] 과제방식 맛보기 🍽️", function () {
    describe("코드 에디터에서 homeworks/1_practice.js 파일을 열어주세요.", function () {
      it("모르는 문법은 크게 신경쓰지 않아도 됩니다. input, output, 그리고 '바코'에만 집중하세요.", function () {
        const input = 1;
        const output = 1;

        expect(input).to.equal(output);
      });

      it("input과 output을 같아질 수 있도록 '바코'를 수정하면 하나의 테스트 단위가 통과됩니다. ('바코' 외에는 수정하시면 안됩니다.)", function () {
        // 아랫줄에서 '바코'를 지우고, 그 자리에 숫자 2를 입력하고 저장하세요.
        // 그리고 과제 html 페이지를 새로고침 해보세요.
        const input = 1 + 1;
        const output = 2;

        expect(input).to.equal(output);
      });

      it("input과 output이 같다는 의미는 === 일치 연산자를 의미합니다.", function () {
        // 아랫줄에서 '바코'를 지우고 false라고 입력하고 저장하세요.
        // 그리고 과제 html 페이지를 새로고침 해보세요.
        const input = 7 < 5;
        const output = false;

        expect(input).to.equal(output);
      });
    });
  });
})();
