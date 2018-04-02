import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista , ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  private idx:number;
  private lista:Lista;


  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseosService:ListaDeseosService,
    public alertCtrl:AlertController
  ) {

  this.idx = this.navParams.get("idx");
  this.lista = this.navParams.get("lista");

  }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = !item.completado;

    for ( let item of this.lista.items){
      if (!item.completado){
        todosMarcados = false;
        break;
      }
    }
    this.lista.terminada = todosMarcados;
    this._listaDeseosService.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Usted va a eliminar la lista, ¿Continuar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Borrar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
