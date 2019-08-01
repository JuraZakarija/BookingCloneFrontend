import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(
    private guestService: GuestService
  ) { }

  public guests = [];

  ngOnInit() {
    this.guestService.getAll().subscribe((response: any) => {
      this.guests = response;
    });
  }
}
