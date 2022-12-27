//問1
let number=[2,5,12,13,15,18,22];
//ここに答えを実装してください。↓↓↓
let num;
for(i=0;i<=number.length;i++){
    if(number[i]%2==0){
        num=number[i];
        isEven(num);
    }
}
function isEven(){
    console.log(num+'は偶数です');
}

//問２
class Car{
    constructor(gss,number){
        this.gass=gass;
        this.number=number;
    }
}
function getNumGas(){
    console.log("ガソリンは〇〇です");
    console.log("ナンバーは△△です");

}