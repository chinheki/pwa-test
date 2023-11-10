export interface Good{
    id:string;
    name:string;
    type:GoodType;
    amount:number;
    memo:string;
}

export enum GoodType{
TENT,CHAIR,TABLE,CONTAINER,COOK,FIRE
}
export interface MyGoods{
    goods:Good[]
}