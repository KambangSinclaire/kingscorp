export interface Product{
    name:string;
    description:string;
    categoryId?:string;
    createdAt?:string;
    updateAt?:string;
    createdBy:string;
    quatity:string;
    unitPrice:string;
    hasBonus?:boolean;
}