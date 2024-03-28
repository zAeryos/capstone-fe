import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/i-user';
import { UserLogin, UserRegister } from '../models/i-user-dto';
import { IConfirmRes } from '../models/i-confirm-res';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  register(user: UserRegister): Observable<IUser> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  }

  login(credentials: UserLogin): Observable<IConfirmRes> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public updateLoginStatus(): void {
    this.loggedInSubject.next(this.isLoggedIn());
  }

}
