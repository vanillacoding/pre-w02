(function () {
  "use strict";

  describe("문자열 다루기 🔠", function () {
    describe("homeworks/4_string.js 파일을 열어주세요.", function () {
      it("문자열 만들기", function () {
        // 공백 주의.
        const today = "토요일";
        const input = "나는" + today + "에 일한다!";
        const output = 바코; // input이 결과적으로 어떤 문자열이 될지 예상하여 똑같이 적어주세요.

        expect(input).to.equal(output);
      });

      it("문자열 만들기", function () {
        const today = "토요일";
        const input = `나는 ${today}에 일한다!`;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 길이", function () {
        const word = "word";
        const input = `word는 ${word.length}글자입니다.`;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 인덱스", function () {
        const str = "something";
        const input = `${str[0]}${str[3]}${str[1]}`;
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 인덱스", function () {
        const str = "hello world";
        const input = str[100];
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 인덱스", function () {
        const str = "I am a student";
        const input = str[-1];
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 인덱스", function () {
        const str = "I am a student";
        const input = str.indexOf("a");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 소문자 변환", function () {
        const str = "HunGry?";
        const input = str.toLowerCase();
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 반복", function () {
        const str = "ha";
        const input = str.repeat(5);
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3);
        const b = a.split("a");
        const input = b.join(":");
        const output = 바코;

        expect(input).to.equal(output);
      });

      it("문자열 자르기", function () {
        const a = "hello, kenny";
        const input = a.slice(7, 10);
        const output = 바코;

        expect(input).to.equal(output);
      });
    });
  });
})();
