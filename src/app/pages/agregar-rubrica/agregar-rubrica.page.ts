import { Component, OnInit } from '@angular/core';
import {Asignatura} from '../../interfaces/asignatura';
import {Rubrica} from '../../interfaces/rubrica';
import {RubricaService} from '../../servicios/rubrica.service';
import {AsignaturaService} from '../../servicios/asignatura-service.service';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-agregar-rubrica',
  templateUrl: './agregar-rubrica.page.html',
  styleUrls: ['./agregar-rubrica.page.scss'],
})
export class AgregarRubricaPage implements OnInit {

  rubrica={} as Rubrica;
  asignaturas:Asignatura[];
  constructor(
    private rubriService:RubricaService,
    private asigService: AsignaturaService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.asigService.getAsignaturas().subscribe(res => this.asignaturas=res);
  }

  guardarRubrica(){
    this.rubriService.addRubrica(this.rubrica);
    this.navCtrl.navigateBack("/rubricas");
  }
}
