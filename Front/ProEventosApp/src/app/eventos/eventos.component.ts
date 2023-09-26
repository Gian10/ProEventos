import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  public eventos :any = [  
  {ImagemURL: "images.jpeg", Tema: "Festa", Local: "Catolé do Rocha", Data: "10/10/2012", QPessoas: "10"},
  {ImagemURL: "images (1).jpeg", Tema: "Festa", Local: "Catolé do Rocha", Data: "10/10/2013", QPessoas: "20"}
  ]
  public eventosFiltrados: any = [];

  botaoExibir = true;

  private _filtroLista : string = '';



  public get filtroLista(): string{
    console.log("get")
    console.log( this._filtroLista)
    return this._filtroLista;
  }

  public set filtroLista(value : string){
    console.log("set")
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos
  }

  public filtrarEventos(filtrarPor: string) : any{
    filtrarPor.toLocaleUpperCase();
    return this.eventos.filter((evento : any) => evento.Tema.toLocaleUpperCase().indexOf(filtrarPor) !== -1 || evento.Local.toLocaleUpperCase().indexOf(filtrarPor) !== -1)
  }


  constructor(private http: HttpClient){}

  ngOnInit(): void {
    //console.log(this.eventos)
    this.eventosFiltrados = this.eventos;
    
    
  }

  mostrarImagem(){
    this.botaoExibir = !this.botaoExibir;
  }


}
