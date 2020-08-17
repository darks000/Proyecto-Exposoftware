import { Component, OnInit } from '@angular/core';
import {Asignatura } from '../../interfaces/asignatura';
import {AsignaturaService} from '../../servicios/asignatura-service.service';
@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas: Asignatura[];
  constructor(private asigService:AsignaturaService) { }

  ngOnInit() {
    this.asigService.getAsignaturas().subscribe(res=>{
      this.asignaturas = res;
    })
  }

}
