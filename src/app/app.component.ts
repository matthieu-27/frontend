import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';


@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'frontend';

  constructor(public authService: AuthService){}
}
