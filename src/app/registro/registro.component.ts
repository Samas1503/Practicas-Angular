import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 public formReg!: FormGroup;

  constructor(private formBuilder: FormBuilder,private RestService:RestService) { }

  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      nombre:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      foto: [''],
      terms: ['', [Validators.required, Validators.requiredTrue]]
    });
  }

  loadApi(): any{
    const response = {
      nombre: 'Samuel Paredes',
      foto: 'https://yt3.ggpht.com/yti/APfAmoHh5FIgKLZFhhJP453MWcPkpE63CCtLyeZMhQGJYd8=s88-c-k-c0x00ffffff-no-rj-mo',
      email: 'samueleliasparedes.10@gmail.com',
      password: 'Samas103',
      terms:'true'
    }
    this.formReg.patchValue(response);
  }

  send(): any{
    this.RestService.post(`http://localhost:3000/usuarios`,
      {
        nombre: this.formReg.value.nombre,
        email: this.formReg.value.email,
        password: this.formReg.value.password,
        terms: this.formReg.value.terms
      }
    ).subscribe(respuesta => {
      this.formReg.reset();
    })
  }
}
