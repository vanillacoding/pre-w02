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
        //암묵적 타입변환으로 둘다 문자열로 바뀜
        const guess = "73";

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = "7" + 3;
        //암묵적 타입변환으로 둘다 문자열로 바뀜
        const guess = "73";

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 빼는 경우의 형변환", function () {
        const result = "7" - 3;
        //-는 암묵적 타입 변환 발생, 숫자열로 변경
        const guess = 4;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = ("0" && 30) || false;
        /*
        ("0" && 30) = 30
        30|| false = 30
        */
        const guess = 30;

        expect(result).to.equal(guess);
      });

      it("반복문 #1", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          a += i;
        }
        //5번 반복, 0 + 0 + 2 + 4 + 6 + 8
        const result = a;
        //a = 20
        const guess = 20;

        expect(result).to.equal(guess);
      });

      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let result = "";

        //i = 13 역순으로 0까지 문자열 합.
        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }

        const guess = "Vanilla Coding";

        expect(result).to.equal(guess);
      });

      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3);
        //"hahaha"
        const b = a.split("a");
        //["h","h","h",""]
        const result = b.join(":");
        //"h:h:h:"
        const guess = "h:h:h:";

        expect(result).to.equal(guess);
      });

      it("반복문, 조건문", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          //4의 배수 4, 8
          if (i % 4 === 0) {
            a += i;
          }
        }

        const result = a;
        const guess = 12;

        expect(result).to.equal(guess);
      });

      it("반복문, 조건문, 논리 연산자", function () {
        let a = 0;

        for (let i = 0; i < 10; i++) {
          //3의 배수 혹은 4의 배수 3, 4, 6, 8, 9
          if (i % 3 === 0 || i % 4 === 0) {
            a += i;
          }
        }

        const result = a;
        const guess = 30;

        expect(result).to.equal(guess);
      });

      it("비교 연산자, 연산자 우선순위, 소수점 다루기 (부동 소수점)", function () {
        /*
         * 부동 소수점에 대한 내용과 함께
         * 아래 연산 결과에 대한 자세한 원리를 최대한 정확히 조사해보세요.
         */
        const a = 0.1;
        const b = 0.2;
        //JS는 소수점 더하기시 오차 발생
        //이진수로 소수점 표현시 오차가 생김
        const result = a + b === 0.3;
        const guess = false;

        expect(result).to.equal(guess);
      });

      it("글자 수 세기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 문자열에 "코"라는 글자가 몇 번 나타나는지
         * 총 횟수를 세어 그 결과를 result 변수에 대입해주세요.
         *
         */
        const target = "코바바코바밥바바코코콬바바코코바바코콬밥빱바밥바코바바";
        let result = 0;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        [...target].forEach((val)=>{
          if(val === "코"){
            result++;
          }
        })
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(8);
      });

      it("소수 판별하기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 숫자가 1과 자기 자신 만으로만 나누어 떨어지는 소수인지
         * 판별하여 그에 대한 결과를 불리언 형태로 result 변수에 대입해주세요.
         *
         */
        const target = 11;
        let result = false;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        function isPrimeNumber(target){
          if(0 < target && target < 3){
            result = false;
            return result;
          }
          for(let i = 2; i < target; i++){
            if(target % i === 0){
              result = true;
              break;
            }
          }
          return result;
        }
        isPrimeNumber(target);
        console.log(result);
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(false);
      });
    });
  });
})();
