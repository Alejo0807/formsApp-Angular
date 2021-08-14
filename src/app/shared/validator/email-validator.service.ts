import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

interface User {
  id: string,
  email: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`${this.url}/usuarios?q=${email}`)
            .pipe(
              delay(1000),
              map( resp => {
                return (resp.length === 0)
                      ? null
                      : {existEmail: true}
              })
            )
  }




}
