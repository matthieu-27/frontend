import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    email: this.fb.control('me@you.fr', Validators.email),
    password: this.fb.control('password', Validators.required)
  });

  constructor(private fb: FormBuilder){}

}
