import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../model/user';
import { GetInfo } from '../model/get-info';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:9090"
  registerUrl = "add-user"
  loginUrl = "login"
  editProfileUrl = ""
  findUserByEmailUrl = "find-By-Email"
  updatePofileUrl = "update-user"
  findBillByEmailUrl = "find-bill-by-email"
  findBillById = "find-user-bill-by-bill-id"
  findBillByStartDate = "find-user-bill-by-email-start-date"

  constructor(private http: HttpClient) { }

  register(username: string, password: string, phoneNumber: string, email: string, address: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.registerUrl}`, {
      "userName": username,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "address": address,
      "userBalance": 0,
      "role": "User"

    }, { responseType: 'text' })
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/${this.loginUrl}`, {
      "email": email,
      "password": password
    })
  }

  findUserByEmail(email: string | null): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${this.findUserByEmailUrl}/${email}`)
  }

  updateProfile(username: string, email: string | null, password: string, phoneNumber: string, address: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.updatePofileUrl}`, {
      "userName": username,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "address": address
    }, { responseType: 'text' })
  }

  getAllBillByEmail(email: string | null): Observable<Array<GetInfo>> {
    return this.http.put<Array<GetInfo>>(`${this.baseUrl}/${this.findBillByEmailUrl}`, {
      "email": email
    })
  }

  searchBillById(billId: number, email: string | null): Observable<Array<GetInfo>> {
    return this.http.put<Array<GetInfo>>(`${this.baseUrl}/${this.findBillById}`, {
      "email": email,
      "billId": billId
    })
  }

  searchBillByStartDate(startDate: string, email: string | null): Observable<Array<GetInfo>> {
    return this.http.put<Array<GetInfo>>(`${this.baseUrl}/${this.findBillByStartDate}`, {
      "email": email,
      "startDate": startDate
    })
  }

}
