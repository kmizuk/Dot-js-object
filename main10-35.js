"use strict";

// {
//   //     const point = {
//   //     x: 140,
//   //     y: 130,
//   //   };

//   //   point.x = 100;
//   //   point["y"] = 180;

//   //   console.log(point.x);
//   //   console.log(point["y"]);

//   //   point.z = 90;
//   //   delete point.y;
//   //   console.log(point);

//   const otherProps = {
//     r: 4,
//     color: "red",
//   };

//   const point = {
//     x: 140,
//     y: 130,
//     ...otherProps,
//   };
//   //   console.log(point);

//   //   const { x, r, ...others } = point;
//   //   console.log(x);
//   //   console.log(r);
//   //   console.log(others);

//   const keys = Object.keys(point);

//   keys.forEach((key) => {
//     console.log(`key:${key} Value:${point[key]}`);
//   });

//   const points = [
//     { x: 17, y: 44 },
//     { x: 13, y: 34 },
//     { x: 12, y: 54 },
//   ];

//   console.log(points[1].x);
// }
// {
//   //join
//   const d = [1998, 2, 13];
//   console.log(d.join("/"));

//   //spirit
//   const t = "1998/02/13";
//   console.log(t.split("/"));

//   //separate
//   const [yyyy, mm, dd] = t.split("/");
//   console.log(`私の誕生日は${yyyy}年${mm}月${dd}日です`);

//   const scores = [10, 2, 4];

//   let sum = 0;

//   scores.forEach((score) => {
//     sum += score;
//   });

//   const avg = sum / scores.length;
//   console.log(sum);
//   console.log(avg);

//   console.log(Math.floor(avg));
//   console.log(Math.ceil(avg));
//   console.log(Math.round(avg));
//   console.log(avg.toFixed(2));

//   const random = Math.random(8);
//   console.log(random.toFixed(5));
// }

// {
//   // サイコロ
//   console.log(Math.floor(Math.random() * 6) + 1);

//   //日時
//   const d = new Date();
//   console.log(`今日は${d.getMonth() + 1}月${d.getDate()}日です`);

//   d.setDate(10);
//   console.log(d);
// }

// {
//   alert("よっ、元気？");

//   const answer = confirm("絶好調ですか？");

//   if (answer) {
//     console.log("やったね！");
//   } else {
//     console.log("どんまい！");
//   }
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 3) {
//       clearInterval(intervalID);
//     }
//   }
//   const intervalID = setInterval(showTime, 1000);
// }

// {１回目
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     const intID = setTimeout(showTime, 1000);
//     i++;
//     if (i > 3) {
//       clearTimeout(intID);
//     }
//   }
//   showTime();
// }

// {２回目
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     const timeOutID = setTimeout(showTime, 1000);
//     i++;
//     if (i > 3) {
//       clearTimeout(timeOutID);
//     }
//   }
//   showTime();
// }

// {３回目
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     const tt = setTimeout(showTime, 1000);
//     i++;
//     if (i > 3) {
//       clearTimeout(tt);
//     }
//   }
//   showTime();
// }

// {
//   //   const name = "kake";
//   const name = 2;

//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }

//   console.log("fin");
// }

// {//１回目
//   const posts = [
//     {
//       text: "jsの勉強中",
//       likeCount: 0,
//     },
//     {
//       text: "pr楽しい",
//       likeCount: 0,
//     },
//   ];

//   function show(post) {
//     console.log(`${post.text}:${post.likeCount}いいね`);
//   }
//   show(posts[0]);
// }

// {
//   //２回目
//   const posts = [
//     {
//       text: "js",
//       like: 8,
//       show() {
//         console.log(`${this.text}は${this.like}イイね`);
//       },
//     },
//     {
//       text: "ruby",
//       like: 89,
//     },
//   ];

//   //   show(posts[0]);
//   posts[0].show();
// }

{
  class Post {
    constructor(text) {
      this.imp = text;
      this.like = 0;
    }
    show() {
      console.log(`コメント：${this.imp}は、Twiiterで${this.like}いいねです`);
    }

    like() {
      this.like++;
    }
  }
  //////
  class SponsoredPost extends Post {
    constructor(text, spon) {
      super(text);
      this.spon = spon;
    }

    show() {
      super.show();
      console.log(`${this.spon}でーーーーす`);
    }
  }

  const posts = [
    new Post("hello"),
    new Post("thank you"),
    new SponsoredPost("lucky you", "sponsored by kk"),
  ];

  posts[0].show();
  posts[1].show();
  posts[2].like();
}
