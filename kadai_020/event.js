// ボタンと表示されているテキストを操作するために、HTML要素を取得
const button = document.getElementById('btn'); // ボタンの要素
const text = document.getElementById('text'); // テキストの要素

// ボタンがクリックされたときの処理を設定
button.addEventListener('click', () => {
  // テキストの内容を変更
  text.textContent = 'ボタンをクリックしました';
});
