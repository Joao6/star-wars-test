import { Injectable } from "@angular/core";

const TOKEN = "TOKEN";

@Injectable({
  providedIn: "root"
})
export class UserService {
  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  logout(): void {
    localStorage.removeItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
