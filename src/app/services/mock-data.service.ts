import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor( public httpClient: HttpClient) { }

  getMockData(){
    return this.httpClient.get('assets/mock-data.json');
  }
}
