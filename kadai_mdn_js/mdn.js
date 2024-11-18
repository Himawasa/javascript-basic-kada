// 現在の日付を取得
const today = new Date();

// 年、月、日を取得→上のままだと YYYY-MM-DDなので
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので要注意！！
const day = today.getDate();

// 日付を連結して出力
console.log(year + "年" + month + "月" + day + "日");
