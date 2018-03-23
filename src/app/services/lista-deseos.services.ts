import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];


  constructor() {

    let lista1 = new Lista('Compras de supermercado');
    let lista2 = new Lista('Juegos de deseo');
    let lista3 = new Lista('Cosas de la universidad');

    try {
      if (lista1!=null&&lista2!=null&&lista3!=null){
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
      }
    }catch(e){

    }


    console.log("Servicio creado");
   }
}
