import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  userForm = this.fb.group({
    email: this.fb.control('', Validators.email),
    password: this.fb.control('', Validators.required)
  });

  constructor(private fb: FormBuilder, private messageService: MessageService, private userService: UserService) {}

  login(): void {
    const {email, password} = this.form;
    this.userService.login(email, password).subscribe({next: data => {
      console.log(data);
    }});
  }

  reloadPage(): void {
    window.location.reload();
  }

}
