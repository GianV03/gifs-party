import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private gifsService: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = '6FhKagDwbcLKW54Cn29d0QvNpjcz59iX';
  private _historial: string[] = []

  // Cambiar any por su tipo
  public resultados: Gif[] = [];
  get historial(){
    return [...this._historial];
  }

  constructor(
    private httpCliente: HttpClient
  ){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)|| [];
  }

  buscar(item:string){
    if(item.trim().length == 0){
      return;
    }
    item = item.trim().toLowerCase();
    if(!this._historial.includes(item)){
      this._historial.unshift(item);
    }
    this._historial = this._historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams().
                       set('api_key', this.apiKey)
                      .set('q', item)
                      .set('limit', 10)


    this.httpCliente.get<SearchGifsResponse>(`${this.gifsService}/search`, {params}).subscribe(
      (response)=>{
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      }
    )
  }


}
