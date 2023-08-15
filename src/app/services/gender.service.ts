import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/gender';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  apiUrl = 'https://localhost:44383/api/Gender/getall';
  constructor(private httpClient: HttpClient) { }

  getGenders():Observable<ListResponseModel<Gender>> {
    return this.httpClient.get<ListResponseModel<Gender>>(this.apiUrl);
   }
}
