import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Login del usuario en ReqRes
  login(email: string, password: string): Observable<any> {
    // valores para acceder a la api
    email = 'eve.holt@reqres.in';
    password = 'cityslicka';

    let body = {
      email: email,
      password: password,
    }

    return this.http.post('https://reqres.in/api/login', body)
  }



}
