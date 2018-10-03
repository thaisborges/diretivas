import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.sass']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 6"];

  mostrarCursos: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
