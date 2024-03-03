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
        const guess = `73`;

        expect(result).to.equal(guess);
      });
        /* 수학과 관련 된 함수와 표현식에서는 자동으로 변환
        Number() 함수를 이용하여 숫자 형변환
        - 자동으로 공백을 제거
        - 공백 외의 문자 포함시 NaN
        - boolean 자료형 : ture → 1, false → 0 으로 숫자 형변환
        - null 자료형 : null → 0
        - undefined 자료형 : undefined → NaN */
      it("다른 자료형을 더하는 경우의 형변환", function () {
        const result = "7" + 3;
        const guess = `73`;

        expect(result).to.equal(guess);
      });

      it("다른 자료형을 빼는 경우의 형변환", function () {
        const result = "7" - 3;
        const guess = 4;

        expect(result).to.equal(guess);
      });

      it("||, && 논리 연산자", function () {
        const result = ("0" && 30) || false;
        const guess = 30;

        expect(result).to.equal(guess);
      });

      it("반복문 #1", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          a += i;
        }

        const result = a;
        const guess = 20;

        expect(result).to.equal(guess);
      });
        /* for문 안의 구성
        let i = 0 : 변수 let i를 선언하고 0으로 할당 (반복문 초기값)
        i<10 : for문을 몇번 반복할 것인지 조건(조건이 참이면, 실행)
        +=2: loof 가 한번 반복시 마다 변수 증감식(++'연산자)
        ++연산자는 '++1' '+=1'의 축약 버전이므로 '+=2' */
      it("반복문 #2", function () {
        const str = "gnidoC allinaV";
        let result = "";

        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }

        const guess = "Vanilla Coding";

        expect(result).to.equal(guess);
      });
      /* str.length - 1 => 데이터에서 -1 해야 index value 가 되고, 마지막 문자에서 거꾸로 출력 해야하기 때문이다*/
      it("문자열 반복, 자르기, 붙이기", function () {
        const a = "ha".repeat(3);
        const b = a.split("a");
        const result = b.join(":");
        const guess = "h:h:h:";

        expect(result).to.equal(guess);
      });
        /* a = hahaha ("ha"를 3번 반복)
           b = hahaha 에서 "a" 를 자름
           b.join = 자르고 남은 b(h)에 ":"를 붙임 
           = h:h:h: */
      it("반복문, 조건문", function () {
        let a = 0;

        for (let i = 0; i < 10; i += 2) {
          if (i % 4 === 0) {
            a += i;
          }
        }

        const result = a;
        const guess = 12;

        expect(result).to.equal(guess);
      });
          /* 풀이
          let a = 0;

          for (let i = 0; i < 10; i += 2)
          = 0 2 4 6 8
          if (i % 4 === 0) = i를 4로 나눈 나머지가 0 = 4, 8 
          a += i = 12 */
      it("반복문, 조건문, 논리 연산자", function () {
        let a = 0;

        for (let i = 0; i < 10; i++) {
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
        const result = a + b === 0.3;
        const guess = false;

        expect(result).to.equal(guess);
      });
        /* 위의 a + b = 0.30000000000000004 
        우리가 보통 계산 할때 사용하는 10진법과 달리 컴퓨터는 2진법으로 동작,
        몇몇 소수는 10진법에서 2진법으로 변환하는 과정에서 무한 소수가 됨
        저장공간에 한계가 있는 컴퓨터는 무한 소수를 유한 소수로 바꾸게 되는데,
        이 과정에서 미세한 오차가 발생해서 오류가 발생(정밀도 문제) 
        
        solution =
        toFixed()
        toFixed(1) - 소숫점 첫째자리까지 반올림 처리
        toFixed(2) - 소숫점 둘째자리까지 반올림 처리
        toFixed(3) - 소숫점 셋째자리까지 반올림 처리
        
        solution =
        Math.round()
        Math.round((a+b)*10)/10 - 소숫점 첫째자리까지 반올림 처리
        Math.round((a+b)*100)/100 - 소숫점 둘째자리까지 반올림 처리
        Math.round((a+b)*1000)/1000 - 소숫점 셋째자리까지 반올림 처리*/
      it("글자 수 세기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 문자열에 "코"라는 글자가 몇 번 나타나는지
         * 총 횟수를 세어 그 결과를 result 변수에 대입해주세요.
         *
         */
        const target = "코바바코바밥바바코코콬바바코코바바코콬밥빱바밥바코바바";
        let result = 8;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        /* [for문] 반복문을 사용, 원하는 값이 나올 때마다 count 값을 증가시켜나가는 방법
        
        const target = "코바바코바밥바바코코콬바바코코바바코콬밥빱바밥바코바바";
        let answer = 0;

        for(let i = 0; i < target.length; i++) {
          if(target[i] === '코')  {
           answer++;
          }
        }
        console.log(answer) */
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(8);
      });

      it("소수 판별하기", function () {
        /*
         *
         * 지금까지 배운 반복문과 조건문 등을 활용하여
         * 주어진 target 숫자 11이 1과 자기 자신 만으로만 나누어 떨어지는 소수인지
         * 판별하여 그에 대한 결과를 불리언 형태로 result 변수에 대입해주세요.
         *
         * 다른 부분의 수정은 없이, 시작과 끝 내부 부분에서 `target` 변수의 값이 소수인지 판별하는 로직을 작성해주셔야 합니다.
         * 즉, 현재 11은 소수이므로, result는 `true`가 되어야 합니다.
         *
         */
        const target = 11;
        let result = false;

        // [시작] 여러분의 로직을 아래에 작성해주세요.
        /* solution (에라토스테네스의 체)
        function target(a){
            for(i = 2; i <= Math.sqrt(a); i++){
                if(a % i == 0){
                    return false;
                }
            }
            return true;
        }
        target(11)

        solution (반복문)
        const target = (a) => {
            for (let i = 2; i < a; i++) {
              if (a % i === 0) {
                return false;
              }
            }
            return true;
        }
        target(11) */ 
        // [끝] 여러분의 로직을 위에 작성해주세요.

        expect(result).to.equal(false);
      });
    });
  });
})();
