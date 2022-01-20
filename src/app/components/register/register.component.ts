import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = {
    name: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.register);
  }

}
