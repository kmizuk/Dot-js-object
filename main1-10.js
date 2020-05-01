// "use strict";

// {
//   const score1 = 80;
//   const score2 = 90;
//   const score3 = 40;

//   //要素の出し入れ
//   const scores = [80, 90, 40];
//   scores.splice(1, 1, 40, 50);
//   scores.push(60, 50);
//   scores.shift();

//   //通常展開
//   console.log(scores[1]);

//   scores[2] = 44;
//   console.log(scores[2]);

//   console.log(scores.length);

//   console.log(`Scores:${scores[0]}`);
//   console.log(`Scores:${scores[1]}`);
//   console.log(`Scores:${scores[2]}`);

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Scores${i + 1}:${scores[i]}`);
//   }
// }

// {
//   //スプレッド構文

//   const OtherScores = [80, 90];
//   const scores = [80, 90, 40, ...OtherScores];

//   function sum(a, b) {
//     console.log(a + b);
//   }
//   sum(...OtherScores);
// }

// {
//   // 分割代入
//   const scores = [80, 90, 40, 49];
//   const [a, b, ...c] = scores;
//   console.log(a);
//   console.log(b);
//   console.log(c);

//   let x = 30;
//   let y = 20;
//   [x, y] = [y, x];
//   console.log(x, y);
// }

// {
//   //forEach()
//   const scores = [2, 3, 4, 3];

//   scores.forEach((score, index) => {
//     console.log(`Score${index + 1}:${score}`);
//   });
// }

// {
//   // Map()
//   const prices = [20, 30];

//   //   const updateprices = prices.map((price) => {
//   //   return price + 20;
//   // });

//   const updateprices = prices.map((price) => price + 20);
//   console.log(updateprices);
// }

// {
//   //filter()
//   const numbers = [1, 2, 2, 2, 3];
//   const Even = numbers.filter((number) => number % 2 === 0);
//   console.log(Even);
// }
