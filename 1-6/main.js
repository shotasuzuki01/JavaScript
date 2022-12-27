//問1
let scores=[10,15,20,25];
let i=0;
for(i=0;i<=scores.length-1;i++){
        console.log(i+":"+scores[i]);
}
console.log("length:"+scores.length);
for(i=0;i<=scores.length-1;i++){
    if(i%2==0){
        console.log(scores[i]+"は偶数です");
    }
}
//問2
let car={
    gass:20.5,
    num:1234,
}
console.log("ガソリンは"+car.gass+"です");
console.log("ナンバーは"+car.num+"です");