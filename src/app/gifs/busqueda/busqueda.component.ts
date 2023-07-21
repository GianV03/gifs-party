import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('busqueda') txtBusqueda!:ElementRef<HTMLInputElement>;
  constructor(
    private gifsService:GifsService
  ) { }

  buscar(){
    const item = this.txtBusqueda.nativeElement.value
    this.txtBusqueda.nativeElement.value ='';
    this.gifsService.buscar(item);
  }

}
