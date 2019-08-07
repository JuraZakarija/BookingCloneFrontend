import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public rooms = [];

  ngOnInit() {
    this.roomService.getAll().subscribe((response: any) => {
      this.rooms = response;
    });
  }

  getAllRooms() {
    this.roomService.getAll().subscribe((response: any) => {
      this.rooms = response;
    });
  }


  onAdd() {
    this.router.navigate(['rooms/new']);
  }

  onEdit(roomId) {
    this.router.navigate(['rooms', roomId]);
  }
}

