import { Component, ChangeDetectorRef } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  registerForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(8)])
  }, {validators: passwordMatchValidator});

  ngOnInit()
  {
    this.registerForm;
  }
}

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password.value != confirmPassword.value ? {'passwordMismatch': true} : null;
}