import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }
  httpOptions = {
		headers: new HttpHeaders({
			'Authorization': 'Bearer ' + this.loginService.getBrutToken(),
		})
	};
  getAll(){
    return this.http.get(`${this.baseUrl}/task-list/`, this.httpOptions);
  }
}
