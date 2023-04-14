import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';



@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  imports: [
    CommonModule
  ],
  exports: [GifsPageComponent]
})
export class GifsModule { }
