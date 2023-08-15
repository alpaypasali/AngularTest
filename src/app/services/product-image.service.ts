import { Injectable } from '@angular/core';
import { ProductImage } from '../models/productImage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

    
  apiUrl='https://localhost:44383/api/'


  constructor(private httpClient: HttpClient) { }


  getImages():Observable<ListResponseModel<ProductImage>>{
    let newPath =this.apiUrl+ "ProductImage/getall";
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }

  getImagesByProductId(productId:number):Observable<ListResponseModel<ProductImage>> {
    let newPath=this.apiUrl+"ProductImages/getbyProdutId?productId="+productId;
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }
}
