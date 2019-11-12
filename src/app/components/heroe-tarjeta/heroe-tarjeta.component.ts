import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; //significa que la propiedad heroe puede venir de afuera
  @Input() index: number; //que indice tiene el elemento lo podría haber pasado como parámetro en verHeroe
  @Output() heroeSeleccionado: EventEmitter<number>; //Le digo que va a emitir un tipo nombre 

  constructor( private router: Router ) {
    this.heroeSeleccionado = new EventEmitter(); //inicializamos el evento
   }

  ngOnInit() {
  }

  verHeroe() {
   // console.log( this.index );
    this.router.navigate(['/heroe', this.index]);
   // this.heroeSeleccionado.emit( this.index );
  }

}
