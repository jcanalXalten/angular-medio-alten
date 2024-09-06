import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisesComponent } from "./paises/paises.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PaisesComponent,FormsModule,CommonModule]
})
export class AppComponent {
  title:string = 'Estamos en curso de angular';
  flag:boolean;

  constructor(){
    this.flag=true;
  }
  cambiar(){
    this.title="valor cambiado en title";
  }
  ver(){
    console.log(this.title.valueOf);
  }

  cambiarFlag(){
    this.flag=!this.flag;
  }

}
