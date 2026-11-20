// if04.js

// 変数timeを作成
let time;

time = Number(prompt());
// 1.
if(time < 0 || time > 24){
    console.log("そんな時間はありません");
}
// 2.
else if(time >= 1 && time <= 6){
    console.log("おやすみなさい");
}
// 3.
else if(time >= 7 && time <= 11){
    console.log("おはようございます");
}
// 4.
else if(time == 12){
    console.log("お昼ごはん");
}
// 5.
else if(time >= 13 && time <= 17){
    console.log("こんにちは");
}
// 6.
else if(time >= 18 && time <=24){
    console.log("こんばんは");
}