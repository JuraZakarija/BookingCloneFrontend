import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['home']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }
}
