import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import {  DetalleComponent  } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(public _listaDeseosService:ListaDeseosService, public navCtrl:NavController) {
  }

  ngOnInit() {}

  irAgregar(){
    try{
      this.navCtrl.push( AgregarComponent );
    }catch(e){
    }
  }

  verDetalle(lista, idx){
    try{ // Añadir {} para mandar parámetros
      this.navCtrl.push( DetalleComponent , {
        lista,
        idx
      } );
    }catch(e){

    }
  }
}
