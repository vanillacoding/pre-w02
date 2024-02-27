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

      it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
        let a = 10 % 3;
        const result = a++;
        //후위 증감 연산자 사용, result = 1
        const guess = 1;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
        let a = 10 % 3;
        const result = ++a;
        //전위 증감 사용자 사용, result = 2
        const guess = 2;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
        let a = 10;
        a -= 5;

        const result = ++a;
        //전위 증감 사용자 사용, result = 6
        const guess = 6;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
        let a = 10;
        a = a / 5;

        const result = a > 2;
        //a = 2; 
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
        const a = "2";
        const result = Number(a);
        //2
        const guess = 2;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !a;
        //result = false
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 45;
        const result = !!a;
        //!a = false, !!a = true
        const guess = true;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = 0;
        const result = !!a;
        //!a = true, !!a = false
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("NOT 논리 연산자", function () {
        const a = -0;
        const result = !!a;
        //!a = true, !!a = false
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 30 && 0;
        //우측으로 진행하며 falsy 값 return -> 0
        const guess = 0;

        expect(result).to.equal(guess);
      });

      it("&& 논리 연산자", function () {
        const result = 0 && 10;
        //falsy 값 만났을 시 바로 return
        const guess = 0;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = 7 || 3;
        //우측으로 진행하며 truthy 값 만났을시 return -> 7
        const guess = 7;

        expect(result).to.equal(guess);
      });

      it("|| 논리 연산자", function () {
        const result = NaN || 3;
        //우측으로 진행하며 truthy 값 만났을시 return -> 3
        const guess = 3;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = 7 || (3 && 10);
        /*
        (3&&10) -> 10 falsy가 없을경우 우측 truthy값 return
        7||10 -> 처음 truthy 값 return
        */
        const guess = 7;

        expect(result).to.equal(guess);
      });
    });
  });
})();
