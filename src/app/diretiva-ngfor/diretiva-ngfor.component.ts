import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.sass']
})
export class DiretivaNgforComponent implements OnInit {
  cursos: string[] = ["Angular 6", "JavaScript", "UX/UI"];
  constructor() { }

  ngOnInit() {
  }

}
