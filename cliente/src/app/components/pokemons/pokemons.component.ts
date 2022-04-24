import { createPipeType } from '@angular/compiler/src/render3/r3_pipe_compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  @Input() listPokemons: any;
 @Input() ctype : any;
 @Input() colorV : any;
  
    constructor() {
       
    
   }

  ngOnInit(): void {
  
  }
  

}
