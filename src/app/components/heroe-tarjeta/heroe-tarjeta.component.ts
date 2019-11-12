import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; //significa que la propiedad heroe puede venir de afuera
  @Input() index: number; //que indice tiene el elemento lo podría haber pasado como parámetro en verHeroe

  constructor( private router: Router ) {

   }

  ngOnInit() {
  }

  verHeroe() {
    console.log( this.index );
    this.router.navigate(['/heroe', this.index]);
  }

}
