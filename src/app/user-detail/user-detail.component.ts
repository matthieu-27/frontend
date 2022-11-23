import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/api-service/user.service';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: User;

  constructor(private authService: AuthService, private userService: UserService, private route: ActivatedRoute){}

  ngOnInit(): void {
      if(this.authService.logged$){
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.userService.getUser(id).subscribe(user => this.user = user);
      }
  }

}
