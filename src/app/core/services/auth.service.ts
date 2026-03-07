import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   private user$ = new BehaviorSubject<any>(null);

  login(data:any){
    return this.http.post('/api/login', data);
  }

  register(data:any){
    return this.http.post('/api/register', data);
  }

  logout(){
    localStorage.removeItem('token');
  }

}
