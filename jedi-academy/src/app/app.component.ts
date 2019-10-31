import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  fabio = {name: 'Fábio Ivanov', isStudent: true, escola: 'Online'}
  may = {name: 'Mayara Gomes', isStudent: false}
  junior = {name: 'Junior Gomes', isStudent: true, escola: 'Online'}
}
