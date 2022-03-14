import { RestService } from './../rest.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() dataEntrante: any;


  respuesta: any;
  cards: any;
  usuario: any;
  comentarioTexto: any;
  comentarios: any;
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private RestService: RestService, private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const { params } = paramMap;

      console.log(params.variable);

      this.cargarData(params.variable);
      this.cargarComentarios();
    })
    this.form = this.formBuilder.group({
      textAreaComentario: [''],
    });

  }


  cargarData(id:string) {
    this.RestService.get(`http://localhost:3000/cards/${id}`).subscribe(respuesta => {
      this.respuesta = respuesta;
    });
    this.RestService.get(`http://localhost:3000/cards`).subscribe(cards => {
      this.cards = cards;
    });
    this.RestService.get(`http://localhost:3000/usuarios/1`).subscribe(usuario => {
      this.usuario = usuario;
    });
    this.RestService.get(`http://localhost:3000/comentarios`).subscribe(comentarios => {
      this.comentarios = comentarios;
    });
  }

  cargarComentarios() {
    this.RestService.get(`http://localhost:3000/comentarios`)
    .subscribe(respuesta => {
      this.comentarios = respuesta;
    })
  }

  public enviarData(usuario:string, video:string) {
    this.RestService.post(`http://localhost:3000/comentarios`,
      {
        text: this.form.value.textAreaComentario,
        author: usuario,
        video: video
      }
    )
      .subscribe(respuesta =>{
        this.form.reset();
        this.cargarComentarios();
    })
  }
}
