import { Component, ViewContainerRef } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMIO-FAV';

  user? : User = undefined;

  constructor(private authService: AuthService){

  }
}
