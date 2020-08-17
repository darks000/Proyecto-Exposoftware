import { Component, OnInit } from '@angular/core';
import {Asignatura } from '../../interfaces/asignatura';
import {AsignaturaService} from '../../servicios/asignatura-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas: Asignatura[];
  constructor(private asigService:AsignaturaService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.asigService.getAsignaturas().subscribe(res=>{
      this.asignaturas = res;
    })
  }

  
  removeAsignatura(id : string){
    this.asigService.deleteAsignatura(id);
  }

  async presentAlertConfirm(id:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.removeAsignatura(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
