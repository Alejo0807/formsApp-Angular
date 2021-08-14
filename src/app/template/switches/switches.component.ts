import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validFields(): boolean {
    return !this.person.termsAndConditions &&
           (!this.myForm?.controls.radioMale?.touched && 
           !this.myForm?.controls.radioFemale?.touched && 
           !this.myForm?.controls.radioNoBinary?.touched )
  }

  save() {
    this.person.gender = this.myForm?.controls.radioGender?.value
                        
    this.person.notifications = this.myForm?.controls.switchNotifications?.value
    this.person.termsAndConditions = this.myForm?.controls.checkTermsAndConditions?.value
           
    console.log(this.person);
  }
}
