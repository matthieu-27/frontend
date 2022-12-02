import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service'; 
import { MessageService } from '../services/ui-service/message.service';
import { UserService } from '../services/api-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userForm = this.fb.group({
    email: this.fb.control('me@you.fr', Validators.email),
    password: this.fb.control('password', Validators.required)
  });

  constructor(private fb: FormBuilder, private messageService: MessageService, private userService: UserService, public authService: AuthService) {}

  login(): void {
    if(this.userForm.value.email && this.userForm.value.password) {
      this.authService.SignIn(this.userForm.value.email, this.userForm.value.password).subscribe( isLogged => {
        // fin de l'authentification;
        this.messageService.add(`IsLogged ${isLogged}`);
      })
    }
  }

  logout(): void {
    this.authService.logout();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
