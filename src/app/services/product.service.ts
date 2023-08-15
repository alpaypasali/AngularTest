import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) { }

  
   getProductDetails():Observable<ListResponseModel<ProductDetail>> {
    let newPath =this.apiUrl +"Products/details"
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
   }
   
   getProductsByGender(genderId:number):Observable<ListResponseModel<ProductDetail>> {
    let newPath =this.apiUrl +"Products/getbygenderid?genderId="+genderId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
   }

   getProductById(productId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"Products/getProductDetailsById?productId="+ productId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  }
  
  getProductByCategoryId(productId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"Products/getbycategoryid?categoryId="+ productId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  }
  getProductByBrandId(productId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"Products/getbybrandid?brandId="+ productId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  }
  

  getProductByColorId(productId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"Products/getbycolorid?colorId="+ productId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  }
}
  

