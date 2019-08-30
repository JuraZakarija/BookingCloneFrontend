import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from 'src/app/guest/guest.service';
import { JwtHelper } from 'src/app/auth/jwt.helper';
import { LoginService } from 'src/app/auth/login.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private guestService: GuestService,
    private router: Router,
    private toastr: ToastrService,
    private jwt: JwtHelper,
    private loginService: LoginService
  ) { }
  public guest: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const guestId = params.id;
      if (guestId != null) {
        this.getGuest(guestId);
      }
    });

  }

  onLoginSubmit() {
    this.loginService.login(this.guest).subscribe(
      (response: any) => {
        const token = response.token;
        this.jwt.setToken(token);
        this.jwt.setUser(response.user);
        this.router.navigate(['/']);
        setTimeout(() => location.reload(), 500);
      },
      error => {
        this.toastr.error('Pogresna kombinacija emaila i lozinke!');
      }
    );
  }

  onSubmit() {
    delete this.guest.tags;
    this.guest.guestId = 1;

    this.guestService.submit(this.guest).subscribe(
      (response: any) => {
        this.toastr.success('Success!');
        this.router.navigate(['register']);

        const user = this.jwt.getUser();
        if (user && user.role === 'Admin') {
          return this.router.navigate(['users']);
        }

        this.router.navigate(['login']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });

    return false;
  }


  public goBack() {
    // this.location.back();
  }

  getGuest(guestId: any) {
    this.guestService.getOne(guestId).subscribe(response => {
      this.guest = response;
      this.guest.id = guestId;
    }
    );
  }

}
