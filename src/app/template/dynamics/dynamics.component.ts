import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @ViewChild('myForm') myForm!: NgForm;

  person: Person = {
    name: '',
    favorites: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  validateName(): boolean {
    return this.myForm?.controls.name?.touched 
    && this.myForm?.controls.name?.invalid;
  }

  save() {
    this.person.name = this.myForm?.controls.name?.value;
    console.log(this.person)
  }

  add() {
    this.person.favorites.push(
      {
        id: this.person.favorites.length + 1,
        name:this.myForm?.controls.favorite?.value
      }
    );

    this.myForm?.controls.favorite?.reset();
  }

  delete( index: number) {
    this.person.favorites.splice(index, 1)

  }

  

}
