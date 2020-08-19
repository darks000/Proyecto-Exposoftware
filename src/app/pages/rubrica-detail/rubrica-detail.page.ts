import { Component, OnInit } from '@angular/core';
import {Rubrica} from '../../interfaces/rubrica';
import {RubricaService} from '../../servicios/rubrica.service';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController,AlertController} from '@ionic/angular';
import {Asignatura} from '../../interfaces/asignatura';
import {AsignaturaService} from '../../servicios/asignatura-service.service';

@Component({
  selector: 'app-rubrica-detail',
  templateUrl: './rubrica-detail.page.html',
  styleUrls: ['./rubrica-detail.page.scss'],
})

export class RubricaDetailPage implements OnInit {

  rubrica={} as Rubrica;
  rubricaId = null;
  asignatura={} as Asignatura;
  constructor(private route:ActivatedRoute,
    private navCtrl: NavController,
    private rubricService: RubricaService,
    private asigService: AsignaturaService,
    private loadingCtrl:LoadingController,
    private alertController:AlertController) { }

  ngOnInit() {
    this.rubricaId = this.route.snapshot.params['id'];
    if(this.rubricaId){
      this.LoadRubrica();
    }else{
      this.navCtrl.back();
    }
  }

  async LoadRubrica(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.rubricService.getRubrica(this.rubricaId).subscribe(res=>{

      this.rubrica = res;
      this.asigService.getAsignatura(res.asignaturaId).subscribe(resp=>{
        this.asignatura = resp;
        loading.dismiss();
      })
    })
  }

  UpdateRubrica(rubric:Rubrica,id:string){
    this.rubricService.updateRubrica(rubric,id);
    this.navCtrl.navigateBack('/rubricas');
  }

  async AlertUpdate(rubric:Rubrica,id:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Atención!',
      message: '¿Está seguro de que desea modificar esta rúbrica?',
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
            this.UpdateRubrica(rubric,id);
          }
        }
      ]
    });
    await alert.present();
  }
}
