import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      confirmEmail: [''],
      password: [''],
      confirmPassword: [''],
      gender: [''],
      mobile: [''],
      dob: [''],
      role: [''],
      organization: [''],
      title: [''],
      address: [''],
      address2: [''],
      city: [''],
      country: [''],
    })
  }
  submit()  {
    console.log(this.registerForm.value);
  }

}
