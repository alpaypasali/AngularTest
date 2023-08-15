import { ProductImage } from "./productImage";
import { Size } from "./size";

export interface Product{


productId:number;
productName:string;
genderId:number;
unitPrice:number;
description:string;
productImage:ProductImage[];
sizes:Size[];


}