import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService){
    
  }

  logout(): void {
    this.authService.logout();
  }

}
