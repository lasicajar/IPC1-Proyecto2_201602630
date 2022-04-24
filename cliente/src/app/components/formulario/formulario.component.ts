import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() parametrosSeleccionados = new  EventEmitter<any>()

  filtroSeleccionado = 'todos';
  dato: String = "";

  filtro: any[] = [
    { value: 'nombre', nombre: 'nombre' },
    { value: 'id', nombre: 'id' },
    { value: 'tipo', nombre: 'tipo' },
    { value: 'todos', nombre: 'todos' }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  filtrarBusqueda() {
    const parametros = {
      dato: this.dato,
      filtro: this.filtroSeleccionado
    }
    this.parametrosSeleccionados.emit(parametros);
    

  }

}
