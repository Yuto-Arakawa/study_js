// if05.js

// Fhotoshopの点数
let scoreP;

scoreP = Number(prompt("Photoshopの点数は？"));

let scoreI;

scoreI = Number(prompt("Illustratorの点数は？"));

const average = (scoreP + scoreI) / 2;

console.log(`Photoshopは ${scoreP} 点ね、Illustratorは ${scoreI} 点ね、平均点 ${average} 点`);

if(average >=0 && average <=30){
    console.log("がんばりなさい");
}
else if(average >= 31 && average <=60){
    console.log("まずまずね");
}
else if(average >= 61 && average <= 100){
    console.log("頑張ったね");
}
else if(average < 0 || average > 100){
    console.log("嘘つくんじゃない");
}
