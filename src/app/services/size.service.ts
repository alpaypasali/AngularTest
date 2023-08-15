import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Size } from '../models/size';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  apiUrl = 'https://localhost:44383/api/Size/getAllSize';
  constructor(private httpClient: HttpClient) { }

  getSizes():Observable<ListResponseModel<Size>> {
    return this.httpClient.get<ListResponseModel<Size>>(this.apiUrl);
   }
}
