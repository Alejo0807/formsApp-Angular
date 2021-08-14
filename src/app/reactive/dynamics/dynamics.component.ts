import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number,
  name: string
}



@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  person: Person = {
    name: '',
    favorites: []
  }

  myForm: FormGroup = this.fb.group({
    name    : [,[ Validators.required,
                  Validators.minLength(5)]],
    favorite: this.fb.array([],[ Validators.required]) 
  })

  newFavorite: FormControl = this.fb.control('', Validators.required)

  get favoriteArr() {
    return this.myForm.get('favorite') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validateField( field: string) {
    return this.myForm.get(field)?.invalid &&
           this.myForm.get(field)?.touched
  }

  add() {

    if (this.newFavorite.invalid) return;

    this.favoriteArr.push( new FormControl(this.newFavorite.value, Validators.required))
    this.newFavorite.reset();
  }

  delete( index: number) {
    console.log(this.favoriteArr.removeAt(index));
  }

  save() {
    this.person.name = this.myForm?.controls.name?.value;

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.newFavorite.reset();
    this.myForm.reset();

  }

}
