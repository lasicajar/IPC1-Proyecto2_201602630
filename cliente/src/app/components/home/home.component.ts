import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPokemons: any[] = [];
  colorTipo: any;
  valortemp: any;

 

  constructor(private pokemonservice: PokemonService) {


  }

  ngOnInit(): void {
    
 
  }
  filtrarBusqueda(parametros: any) {
    console.log(parametros);
    this.valortemp = parametros.dato;
    console.log(this.valortemp);
    if (this.valortemp=="fuego") {
        this.colorTipo = 'danger';
    } else if (this.valortemp=="agua") {
      this.colorTipo = 'info';
    }else if (this.valortemp=="hierba") {
      this.colorTipo = 'success';
    } 
    else {
      this.colorTipo = 'secondary'
    } {
      
    }
    this.pokemonservice.getpokemonstipo(parametros).subscribe(data => {
      console.log([data]);
              this.listaPokemons = data;
             
              
    })
  }
 


}