import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  
  @ViewChild('myForm') myForm!: NgForm;
  
  myInitialForm = {
    product: '',
    price: 0,
    existences: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid
        && this.myForm?.controls.product?.touched;
  }


  validPrice(): boolean {
    return this.myForm?.controls.cost?.value < 0
           && this.myForm?.controls.cost?.touched;
  }


  save() {
    this.myForm.resetForm();
    console.log('Posteo correcto'); 
  }
}

