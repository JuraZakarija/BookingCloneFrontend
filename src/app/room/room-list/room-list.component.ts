import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  constructor(
    private roomService: RoomService
  ) { }

  public rooms = [];

  ngOnInit() {
    this.roomService.getAll().subscribe((response: any) => {
      this.rooms = response;
    });
  }
}
