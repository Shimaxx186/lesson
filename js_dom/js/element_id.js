// IDをキーに取得
// getElementByIdメソッド

// 現在のid:resultの内容（テキスト）をコンソールに表示
// Id:resultの内容（テキスト）を、現在時刻に書き換え
function show() {
  var result = document.getElementById('result');
  // innerTextはresult内に格納されているテキストを示す
  console.log(result.innerText);
  // new Date()で現在時刻を取得
  var nowDate = new Date();
  // toLocaleStringは地域に応じた文字列で返すもの＝日本でよく使う日時に変換されるオブジェクト
  result.innerText = nowDate.toLocaleString();
}