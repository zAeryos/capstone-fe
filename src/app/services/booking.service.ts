import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UUID } from 'crypto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) { }

  createBooking(userToken: string, tripId: number, participantsNumber: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`
    });
    const body = {
      tripId: tripId,
      participantsNumber: participantsNumber
    };
    return this.http.post<any>(`${this.baseUrl}/save`, body, { headers: headers });
  }

}
