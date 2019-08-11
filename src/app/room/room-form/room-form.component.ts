import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router,
    private toastr: ToastrService,
  ) { }


  public room: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const roomId = params.id;
      if (roomId != null) {
        this.getRoom(roomId);
      }
    });
  }

  onSubmit() {
    delete this.room.tags;
    this.room.roomId = 1;

    this.roomService.submit(this.room).subscribe(
      (response: any) => {
        this.toastr.success('Radi više krv ti jebem');
        this.router.navigate(['rooms']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getRoom(roomId: any) {
    this.roomService.getOne(roomId).subscribe(response => {
      this.room = response;
      this.room.id = roomId;
    }
    );
  }
}
