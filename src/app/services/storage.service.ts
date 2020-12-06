import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageSub = new Subject<{ key: 'value' }>();

  getStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next({ key: data });
    console.log(this.storageSub);

  }
  constructor() { }
}
