class Taiyaki{
    constructor(name){
        this.name=name;
    }
    change(){
        console.log("中身は"+this.name+"です");
    }
}
let insideTaiyaki=["あんこ","クリーム","チーズ"];
for(i=0;i<=insideTaiyaki.length-1;i++){
let inside=new Taiyaki(insideTaiyaki[i]);
inside.change();
}