import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentResponseModel } from '../models/rentResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44380/api/rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<RentResponseModel> {
    return this.httpClient.get<RentResponseModel>(this.apiUrl);
  }
}
