// ボタンをクリックしたら、class名が’foo’の要素を取得し、
// その内容（テキスト）をコンソールに出力する。
function showElements(){
  var Elements = document.getElementsByClassName('foo');
  for (var i = 0; i < Elements.length; i++) {
    console.log(Elements[i].innerText);
  }
}