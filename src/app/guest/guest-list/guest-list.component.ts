import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(
    private guestService: GuestService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public guests = [];

  ngOnInit() {
    this.guestService.getAll().subscribe((response: any) => {
      this.guests = response;
    });
  }

  getAllGuests() {
    this.guestService.getAll().subscribe((response: any) => {
      this.guests = response;
    });
  }

  onBookingCountClick(guestId: any) {
    this.router.navigate(['bookings'], { queryParams: {guestId}
    });
  }


  onAdd() {
    this.router.navigate(['guests/new']);
  }

  onEdit(guestId: any) {
    this.router.navigate(['guests', guestId]);
  }

  onDelete(guestId: any) {
    if (confirm('Da li ste sigurni?')) {
      this.guestService.deleteOne(guestId).subscribe(result => {
        this.getAllGuests();
      });
    }
  }
}
