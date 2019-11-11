export class Product {

    //using "public" then you don't have to declare it again
    public isFav:boolean = false;
    //public createDate:Date = new Date("2019/11/01");
    constructor(public name:string, public description:string, public createDate:Date=new Date("2019/11/01")){
        
    }

    // setFav(){
    //     this.isFav = true;
    // }
}
