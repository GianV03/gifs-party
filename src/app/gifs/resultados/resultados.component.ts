import { Component, OnInit } from '@angular/core';
import { GifsModule } from '../gifs.module';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  constructor(
    private service: GifsService
  ) { }

  get resultados(){
    return this.service.resultados;
  }

}
