import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavoritos:ServicioDeFavoritosService) { }

  public listaVideos: Array<any> = [];

  ngOnInit(): void {
    this.servicioFavoritos.disparadorDeFavoritos.subscribe(data => {
      // console.log('recibiendo data: ', data)
      this.listaVideos.push(data);
    })
  }

}
