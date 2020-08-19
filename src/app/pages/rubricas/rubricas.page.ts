import { Component, OnInit } from '@angular/core';
import {Rubrica} from '../../interfaces/rubrica';
import {RubricaService} from '../../servicios/rubrica.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-rubricas',
  templateUrl: './rubricas.page.html',
  styleUrls: ['./rubricas.page.scss'],
})
export class RubricasPage implements OnInit {

  Rubricas: Rubrica[];
  constructor(private rubricaService:RubricaService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.rubricaService.getRubricas().subscribe(res=>{
      this.Rubricas = res;
    })
  }
 
  removeRubrica(id : string){
    this.rubricaService.deleteRubrica(id);
  }

  async presentAlertConfirm(id:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Atención!',
      message: '¿Está seguro de que desea eliminar esta rúbrica?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.removeRubrica(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
