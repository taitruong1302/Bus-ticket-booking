import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = "http://localhost:9090"
  updatePofileUrl = "update-user"
  constructor(private http: HttpClient) { }

  updateProfile(username: string, email: string | null, password: string|null, phoneNumber: string, address: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.updatePofileUrl}`, {
      "userName": username,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "address": address
    }, { responseType: 'text' })
  }
}
