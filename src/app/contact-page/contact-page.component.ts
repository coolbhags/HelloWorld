import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../must-match.validator';
interface Title {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  titles: Title[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mrs', viewValue: 'Mrs'},
    {value: 'Ms', viewValue: 'Ms'},
  ];


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required]

    }, {
      validator: MustMatch('password', 'confirmPassword')
    })

  }

  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value)

    if (this.registerForm.invalid) {
      return
    }

    alert("Register Form Successful");
  }




}
