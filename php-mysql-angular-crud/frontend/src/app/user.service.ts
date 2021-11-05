import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/php-mysql-crud-api';

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/single_user.php`,
    { params: { id: id } });
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.php`, user);
  }

  updateUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update.php`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php`,
    { params: { id: id } },
    );
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/read.php`);
  }
}