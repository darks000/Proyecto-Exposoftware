import { Component, OnInit } from '@angular/core';
import {Asignatura} from '../../interfaces/asignatura';
import {AsignaturaService} from '../../servicios/asignatura-service.service';
@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.page.html',
  styleUrls: ['./agregar-asignatura.page.scss'],
})
export class AgregarAsignaturaPage implements OnInit {

  asig = {} as Asignatura;
  constructor(private asigService:AsignaturaService) { }

  ngOnInit() {
  }

  guardarAsignatura(){
    this.asigService.addAsignatura(this.asig);
  }
}
