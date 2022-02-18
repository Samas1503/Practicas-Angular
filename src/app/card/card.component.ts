import { Component, Input, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;
  public image!: string;

  constructor(private servicioFavoritos:ServicioDeFavoritosService) { }

  ngOnInit(): void {
    // console.log('Entrando data:')
  }

  agregarFavorito() {
    // console.log(this.dataEntrante);
    this.servicioFavoritos.disparadorDeFavoritos.emit({
      data: this.dataEntrante
    })
  }

}
