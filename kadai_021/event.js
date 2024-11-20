// ボタンと表示テキストを操作するためにHTML要素を取得
const btn = document.getElementById('btn'); // ボタン要素
const text = document.getElementById('text'); // テキスト要素

// ボタンがクリックされたときのイベント処理
btn.addEventListener('click', () => {
  // 2秒後にテキストを変更するタイマーをセット
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました'; // テキスト内容を変更
  }, 2000); // 2秒後に実行
});
