import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


  isLoggedIn : boolean = false;

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLogged();
  }


  
}
