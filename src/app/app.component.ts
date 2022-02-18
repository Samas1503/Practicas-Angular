import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practica-app';

  public listaDeVideos: Array<any>= []
  
  ngOnInit(): void {
    this.listaDeVideos = [
      {
        tittle: 'RESIDENT EVIL 4 REMAKE',
        subtittle: 'Ray Snakeyes',
        img:'https://i.ytimg.com/vi/7u2NYUPDjyI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkJN6flmGK2ZmdNhluAFANBO9Zjw'
      },
      {
        tittle: 'Por qué usar TypeScript',
        subtittle: 'codigofacilito',
        img:'https://i.ytimg.com/vi/xM0e8O9Ntcg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCKxKm6igJR-ysEdj6EKkfIeVRHA'
      },
      {
        tittle: 'Instale Virus muy Peligrosos de la DEEP WEB',
        subtittle: 'Tomex',
        img:'https://i.ytimg.com/vi/J_1YouCtQnU/hq720_live.jpg?sqp=CODsq5AG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-GxK2F-5g6DBB_6bLwzI5ksmDkQ'
      },
      {
        tittle: 'Luxury Chicago Apartment | 8Hrs',
        subtittle: 'Ambient Renders',
        img:'https://i.ytimg.com/vi/6UsqalA78Wk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnzQ3QJoLOWjSFE5z60Y4BlVeE2Q'
      },
      {
        tittle: '¡GTA V en Mod Gráficos Ultra Realistas!',
        subtittle: 'MrBeast Gaming en Español',
        img:'https://i.ytimg.com/vi/OHJqG58-YOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA96KZDVtWOkzd1YxXUB_N972w-LA'
      },
      {
        tittle: 'Shogun ☯ | Japanese Lofi HipHop Mix',
        subtittle: 'Lost In Lofi',
        img:'https://i.ytimg.com/vi/qCa64XOO5Ng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtbWrIwR67WirERBY6pIIUABeQ3w'
      },
      {
        tittle: 'EL ACOSADOR DE TOM HOLLAND',
        subtittle: 'Lean Riccio',
        img:'https://i.ytimg.com/vi/LQj0ItdhAd8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDChV3XiumwxHAw4eEINNKe3LYsMg'
      },
      {
        tittle: 'La Tab S8 Ultra es GIGANTE',
        subtittle: 'SupraPixel',
        img:'https://i.ytimg.com/vi/iAzd7ZpnRrs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaKhVYfRlz-14tCChJq_-Ptravaw'
      }
    ]
  }
}
