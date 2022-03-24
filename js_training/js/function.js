// 関数
// 定義方法
// function命令で定義する
// 関数リテラルで定義する
// Functionコンストラクターで定義する



// 例題
// 「四角形の面積を計算する関数」
// 四角形の縦の長さと、横の長さを引数に渡すと、四角形の面積（縦x横）を計算して、値を返す関数をつくり、
// 作った関数を使って、高さ3m, 横幅5mの四角形の面積を求め、
// コンソールに出力する
// 単位はm^2とする。単位は出力しなくても良い
// ⇒ 3種類の方法で関数を定義してみます。

// function 命令
// 構文
// function 関数名（引数1,引数2...){
//   任意の処理
//   return 戻り値;
// }
// 引数
//   関数の読み出し元から関数へ値を渡すときに使う特別な変数
// 戻り値
//   関数から関数呼び出し元へ返す値
function getRectangle(height, width) {
  return height * width;
}
console.log(getRectangle(3, 5));

// 関数リテラルによる関数の定義
// 構文
// function(引数1,引数2..){
//   実行する処理;
// }
// 関数名を持たないので「匿名関数」や「無名関数」とも呼ばれる
var getRectangle = function (height, width) {
  return height * width;
}
console.log(getRectangle(3, 5));

// Function コンストラクター
// 構文
// var 変数名　= new Function(引数1,引数2.. 関数本体の処理);
var getRectangle = new Function('height', 'width', 'return height * width');
console.log(getRectangle(3, 5));