import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  loginAllowed(user: Omit<User, "id">): Observable<Boolean> {
    return this.http.post<Boolean>(`${this.apiUrl}` + '/login', JSON.stringify(user));
  }
}
