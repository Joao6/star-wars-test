import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResult } from "./models/LoginResult";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl: string = "https://cors-anywhere.herokuapp.com/http://swapi.co/api/";

  baseUrlAuth: string = "http://localhost:3333/sessions";

  constructor(private http: HttpClient) {}

  public getPeople(): Observable<any> {
    return this.http.get(this.baseUrl + "people");
  }

  public getStarships(): Observable<any> {
    return this.http.get(this.baseUrl + "starships");
  }

  public getSpecies(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getPilots(url: string): Observable<any> {
    return this.http.get(url);
  }

  public login(email: string, password: string): Observable<LoginResult> {
    return this.http.post<LoginResult>(this.baseUrlAuth, {
      email: email,
      password: password
    });
  }
}
