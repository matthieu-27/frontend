import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service'; 
import { MessageService } from '../services/misc-service/message.service';
import { UserService } from '../services/api-service/user.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router, public authService: AuthService) {

  }

  ngOnChanges(){
    if(this.authService.logged$){
      this.router.navigate(['/folders'])
    }
  }

  login(): void {
    if(this.userForm.value.email && this.userForm.value.password) {

      this.authService.SignIn(this.userForm.value.email, this.userForm.value.password).subscribe( isLogged => {
        // fin de l'authentification;
        this.messageService.add(`IsLogged ${isLogged}`);
      })
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
