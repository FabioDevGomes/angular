import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  estudantes: Student[] = [
    {name: 'Fábio Ivanov', isStudent: true, escola: 'Online'},
    {name: 'Mayara Gomes', isStudent: false},
    {name: 'Junior Gomes', isStudent: true, escola: 'Online'}
  ]

}
