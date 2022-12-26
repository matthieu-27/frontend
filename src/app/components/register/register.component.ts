import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.email),
    password: this.fb.control('', Validators.required),
    c_password: this.fb.control('', Validators.required),
  });

  constructor(private fb: FormBuilder){}

}
