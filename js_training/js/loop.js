// 繰り返し処理

// 構文　for
// for(初期化式; ループ継続条件式; 増減式){
//   繰り返し実行したい処理を記述
// }
// 例題 for
// 変数iの値を1から3まで出力するプログラムを、
// for文を使って記述
for (var i = 1; i <= 3; i++) {
  console.log(i);
}



// 構文　while
// while(条件式){
//   条件式がtrueのときに実行した処理
// }
// 例題 while
// 変数 jの値を1から3まで出力するプログラムを、
// while文を使って記述
var j = 1;
while (j <= 3){
  console.log(j);
  j++;
}

// while と do while 違い
// ・while
//   条件の判断が前にある
//   条件によっては一度もループを実行しない
// ・do while
//   条件の判断が後ろにある
//   条件に関わらず、最低1回はループを実行する

// 構文　do while
// do {
//   条件式がtrueのときに実行したい処理
// } while (条件式);
// 例題 do while
// 例題
// 変数kの値を1から3までコンソールに出力するプログラムを、
// do while文を使って記述する
var k = 1;
do {
  console.log(k);
  k++;
} while(k <= 3);