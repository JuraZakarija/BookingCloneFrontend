import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GuestService } from '../guest.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { JwtHelper } from 'src/app/auth/jwt.helper';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private guestService: GuestService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
    private jwt: JwtHelper,
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

  onSubmit() {
    delete this.guest.tags;
    this.guest.guestId = 1;

    this.guestService.submit(this.guest).subscribe(
      (response: any) => {
        this.toastr.success('Success!');
        this.router.navigate(['auth/register']);

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

  goBack() {
    this.location.back();
  }

  getGuest(guestId: any) {
    this.guestService.getOne(guestId).subscribe(response => {
      this.guest = response;
      this.guest.id = guestId;
    }
    );
  }
}
