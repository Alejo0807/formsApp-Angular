import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormBuilder, 
         Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    product: ['', [ Validators.required,
                    Validators.minLength(3)]],
    price: [,[ Validators.required, 
                Validators.min(0)]],
    existences: [, [ Validators.required, 
                      Validators.min(0)]]
  })

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  validateField( field: string) {
    return this.myForm.get(field)?.invalid && 
            this.myForm.get(field)?.touched    
  }


  save() {
    // console.log(this.myForm)
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      
      return;
    }
    this.myForm.reset()
  }
}
