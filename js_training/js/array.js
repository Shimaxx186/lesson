// 配列
// 複数のデータの集合で扱えるもの
// 　一つの変数に対して複数の値を格納できる
// 要素にインデックス番号（添字）でアクセスできる

// 例題
// 配列colorsを用意
// 配列に格納するデータの初期値は、Red, Green, Blue
// 次に一個づつ各値を取り出してコンソールに表示する。
var colors = ['Red', 'Green', 'Blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);


// 範囲外の添字を指定するとどうなるか？ undefined
console.log(colors[3]);