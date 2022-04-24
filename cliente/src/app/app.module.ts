import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FuegoComponent } from './components/fuego/fuego.component';
import { AguaComponent } from './components/agua/agua.component';
import { HierbaComponent } from './components/hierba/hierba.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PokemonsComponent,
    NavbarComponent,
    HomeComponent,
    FuegoComponent,
    AguaComponent,
    HierbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
