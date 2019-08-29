import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user = {
    is_admin: 0
  };
  title = 'BookingCloneFrontend';
}
