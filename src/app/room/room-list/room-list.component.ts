import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  public rooms = [];

  public hotelId = null;

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.hotelId = params.hotelId;
      this.getAllRooms({ hotelId: params.hotelId });
    });
}

  getAllRooms(raw: any) {
    this.roomService.getAll(raw).subscribe((response: any) => {
      this.rooms = response;
    });
  }


  onAdd() {
    this.router.navigate(['rooms/new']);
  }

  onEdit(roomId: any) {
    this.router.navigate(['rooms', roomId]);
  }
}

