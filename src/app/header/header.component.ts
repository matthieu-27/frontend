import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logged: boolean;

  @Output() userMenuActive: boolean = false;
  
  constructor(private authService: AuthService){
    this.logged = this.authService.isLogged();
  }

  userMenuClickHandle(): void{
    this.userMenuActive = !this.userMenuActive;
  }


}
