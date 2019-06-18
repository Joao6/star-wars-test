import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email = "joaopedro@gmail.com";
  password = "123456";
  error = "";

  constructor(
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  tryLogin() {
    this.api.login(this.email, this.password).subscribe(
      r => {
        if (r.token) {
          this.error = "";
          this.userService.setToken(r.token);
          this.router.navigateByUrl("/list");
        }
      },
      r => {
        this.error = r.error[0].message;
      }
    );
  }
}
