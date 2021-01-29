import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public baseUrl = 'http://127.0.0.1:8000/api';
  public autorizationName = 'fil_rouge';
  public localStorage = window.localStorage;
  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*'}),
  };

  
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, pass: string): any {
    const credentials = {
      email: email,
      password: pass,
    };
    return this.http.post(`${this.baseUrl}/user/token/`, credentials, this.httpOptions);
  }

  public getToken(login: string, pass: string): void {
    this.login(login, pass).subscribe(
      (token: { token: any }) => {
        console.log(token['access']);
		localStorage.setItem('token', token['access']);
		console.log(this.localStorage.getItem('token'));
		
      },
      (httpError: { error: { message: any } }) =>
        console.log(httpError.error.message)
    );
  }
  decodeToken() {
    return this.localStorage.getItem('token')
      ? jwt_decode(this.localStorage.getItem('token') || '{}')
      : null;
  }

  getBrutToken(){
    return this.localStorage.getItem('token');
  }

  redirectByRole(type: string) {
    switch (type) {
      case 'admin': {
        this.router.navigate(['admin']);
        break;
      }
      case 'teacher': {
        this.router.navigate(['teacher']);
        break;
      }
      case 'ROLE_APPRENANT': {
        this.router.navigate(['apprenant']);
        break;
      }
      default: {
        this.router.navigate(['']);
        break;
      }
    }
  }

  logout() {
	localStorage.removeItem('token');
	this.router.navigate(['']);
  }
}
