import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { cantBeStrider, emailPattern, fullnamePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})

export class RegisterComponent implements OnInit {  
  
  registerForm: FormGroup = this.fb.group({
    name    : [, [Validators.required, 
                  Validators.pattern(this.validatorService.fullnamePattern)]],
    email   : [, [Validators.required,
                  Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: [, [Validators.required]],
    confirmPassword: [, [Validators.required]],
  }, {
    validators: [ this.validatorService.sameFields('password', 'confirmPassword' ) ]
  })

  get emailErrorMsg(): string {
    const msgErrors = {
      required: 'El correo es obligatorio',
      pattern: 'No es un correo válido',
      existEmail: 'El correo ya existe',
    }
    
    const errors = this.registerForm.get('email')?.errors;

    if ( errors?.required ) {
      return msgErrors.required;
    } else if (errors?.pattern){
      return msgErrors.pattern;
    } else if (errors?.existEmail){
      return msgErrors.existEmail;
    }

    return ''
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
  }

  validateField( field: string ) {
    return this.registerForm.get(field)?.invalid
          && this.registerForm.get(field)?.touched;
  }

  save() {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.controls);

  }

}
