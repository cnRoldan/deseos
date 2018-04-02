import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import {  DetalleComponent  } from '../detalle/detalle.component';




@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(public navCtrl:NavController, public _listaDeseosService:ListaDeseosService) { }

  ngOnInit() {}

}
