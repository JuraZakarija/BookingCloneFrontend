import { Component, OnInit } from '@angular/core';
import { JwtHelper } from './auth/jwt.helper';
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private auth: LoginService,
    private jwt: JwtHelper
  ) { }

  public loginData = {
    email: '',
    password: '',
    role: ''
  };

  public registerData = {
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    password: ''

  };

  public loggedInUser = null;

  ngOnInit() {
    this.loggedInUser = this.jwt.getUser();
  }

  logout() {
    this.jwt.clear();
    location.reload();
  }

  public onRegister() {
    this.auth.register(this.registerData).subscribe((response: any) => {
      const token = response.token;
      this.jwt.setToken(token);
      this.jwt.setUser(response.user);
      location.href = 'home';
    });
    return false;
  }
  public onLogin() {
    this.auth.login(this.loginData).subscribe((response: any) => {
      const token = response.token;
      this.jwt.setToken(token);
      this.jwt.setUser(response.user);
      location.href = 'home';
    });
    return false;
  }
}
