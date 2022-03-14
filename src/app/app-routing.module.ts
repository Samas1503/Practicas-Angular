import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'post/:variable',
    component:PostDetailComponent
  },
  {
    path: 'log-in',
    component:LogInComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
