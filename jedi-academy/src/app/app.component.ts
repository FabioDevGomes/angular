import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'jedi-academy';
  nome = 'Nome introduzido dinamicamente na página'
  user = {name: 'buscando via user.name'}
}
