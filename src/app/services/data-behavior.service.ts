import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBehaviorService {

  objectSource = new BehaviorSubject<{}>({});
  public $getObjectSource = this.objectSource.asObservable();

  findSource = new BehaviorSubject<{}>({});
  public $getFindSource = this.findSource.asObservable();

  constructor() { }

  bindingObjectData(data:any){
    this.objectSource.next(data);
  }

  bindingDataFind(data:any){
    this.findSource.next(data);
  }
}
