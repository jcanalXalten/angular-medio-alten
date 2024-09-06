import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [NgFor],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paises:Array<any>
  constructor(private service:CountriesService){
    this.paises=[];
  }

  damePaisFetch(){
   this.service.getDatosFetch("https://restcountries.com/v3.1/region/europe")
   .then((datos:any)=>{
    this.paises=datos;
    datos.forEach((pais:any) => {
      console.log(pais.name.official);
    });

   })
  }


    damePaisHttp(){

    }

  
}
   
  

