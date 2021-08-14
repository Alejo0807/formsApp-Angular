import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


interface Person {
  gender: string,
  notifications: boolean,
  termsAndConditions: boolean
}


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  
  person: Person = {
    gender: 'M',
    notifications: false,
    termsAndConditions: false
  }

  myForm: FormGroup = this.fb.group({
    radioGender: [this.person.gender, Validators.required],
    switchNotifications: [this.person.notifications],
    checkTermsAndConditions: [this.person.termsAndConditions, Validators.requiredTrue]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    this.person = this.myForm.value;
    
  }

}
