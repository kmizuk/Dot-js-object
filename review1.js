"use strict";

const scores = [500, 400, 190, 30];

//for
{
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    console.log(`NO.${i}は${score}点です`);
  }
}
//forEach
{
  scores.forEach((score, i) => {
    console.log(`NO.${i}は${score}点です`);
  });
}

//map
{
  const afterPrice = scores.map((score) => {
    return (score *= 1.1);
  });
  console.log(afterPrice);
}

//forEach*map
{
  const afterPrices = scores.map((score) => {
    return (score *= 1.1);
  });
  afterPrices.forEach((score, i) => {
    console.log(`増税後のNO.${i}は${score}円です`);
  });
}

//filter
{
  const lowPrice = scores.filter((score) => {
    return score <= 300;
  });
  console.log(lowPrice);
}

//splet*object
{
  const addFeacher = { address: "tokyo", workPlace: "waseda" };

  const feacher = { age: 22, sex: "man", ...addFeacher };

  console.log(feacher.workPlace);

  //分割代入・レスト構文
  const { address, workPlace, ...others } = feacher;
  console.log(address);
  console.log(workPlace);
  console.log(others);
}

//object.Keysは一旦パス
{
  const points = [
    { x: 100, y: 200 },
    { x: 150, y: 500 },
    { x: 130, y: 300 },
  ];
  console.log(points[1].y);
}
{
  //join
  console.log(scores.join(":"));

  //split
  const t = "2020.05.10";
  console.log(t.split("."));
}

//Q.増税後の値段を四捨五入して出す
//1.配列で値段を定義する
//2.mapで1.1倍する
//3.Math.roundで四捨五入する
//4.forEachで展開する
//
{
  //1.配列で値段を定義する
  const prices = [132, 222, 444];
  //2.mapで1.1倍する
  const afterPrices = prices.map((price) => {
    return (price *= 1.1);
  });
  //3.forEachで展開する
  afterPrices.forEach((net, i) => {
    //4.Math.roundで四捨五入する
    const fixedPrices = Math.round(net);
    console.log(`増税後は${i + 1}番目の商品が${fixedPrices}円です`);
  });
}

//setTimeOutで１秒ごとの時間の更新をして、３回で止める

{
  let i = 0;
  function showTime() {
    console.log(new Date());
    const stopID = setTimeout(showTime, 1000);
    i++;
    if (i > 2) {
      clearTimeout(stopID);
    }
  }
  showTime();
}
