import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmail, SaveEmail } from '../models/i-email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private baseUrl = 'http://localhost:8080/api/newsletter';

  constructor(private http: HttpClient) { }

  getAllEmails(): Observable<IEmail[]> {
    return this.http.get<IEmail[]>(`${this.baseUrl}/getAll`);
  }

  saveEmail(email: SaveEmail): Observable<IEmail> {
    return this.http.post<any>(`${this.baseUrl}/save`, email);
  }

  deleteEmail(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
