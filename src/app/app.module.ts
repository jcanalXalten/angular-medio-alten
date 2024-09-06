import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
       
    ],
    providers:[],
    bootstrap: []
})
export class AppModule { }
