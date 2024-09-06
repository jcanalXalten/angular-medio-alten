import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private service:HttpClient) { }


  getDatosFetch(url: string):any {
    return new Promise((resolve, reject) => {
      fetch(url).
        then(response => response.json())
        .then(datos => resolve(datos)).
        catch(error => reject(error))
    })
  }

  getDatosHttp(url: string) {
    return this.service.get(url);
  }

  getDatosAxios(url: string) {
    axios.get(url);
  }


}
