// 演習
// 年齢によって、テーマパークの入場料を出し分けてコンソールに出力するプログラム
// 使用は下記
// 大人　（12歳以上の者）　5,000円
// 中人　（6歳以上12歳未満の者）　2,500円
// 小人　（6歳未満の者）　1,000円
var x = 7
if(x < 6) {
  console.log('1,000円');
} else if(x >= 12) {
  console.log('5,000円');
} else {
  console.log('2,500円');
}

// 答え
var age = 4;
if (age >= 12) {
  console.log('5,000円');
} else if(age >= 6){
  console.log('2,500円');
} else {
  console.log('1,000円');
}