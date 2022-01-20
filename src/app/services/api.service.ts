import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${this.apiUrl}/products`)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}
