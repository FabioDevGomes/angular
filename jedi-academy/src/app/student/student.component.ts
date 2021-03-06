import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';


@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() studante: Student

  constructor() { }

  ngOnInit() {
  }

  clicado(): void {
    console.log('botão clicado')
  }

  clicadoComEvento(event): void {
    console.log(`botão com evento clicado ${event}`)
  }

  cliecked(): void {
    console.log(`Estudante clicado foi: ${this.studante.name}`);
  }

}
