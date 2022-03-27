// テキストボックスとボタンを配置、
// ボタンをクリックしたら、
// name属性が’result’の要素を取得して、その入力内容（テキスト）をコンソール表示する。
function showElements(){
  var elements = document.getElementsByName('result');
  // .valueで入力されたテキストを取り出す。
  console.log(elements[0].value);
}