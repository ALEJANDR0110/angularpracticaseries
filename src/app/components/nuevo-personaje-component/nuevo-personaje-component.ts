import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSerie } from '../../services/service.series';
import { Personaje } from '../../models/personajes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-personaje-component',
  standalone: false,
  styleUrl: './nuevo-personaje-component.css',
  templateUrl: './nuevo-personaje-component.html',
})
export class NuevoPersonajeComponent implements OnInit{
  public listaSerie!: Serie[];
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("selectserie") selectSerie!: ElementRef;

  constructor(
    private _service: ServiceSerie,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  async loadSeries(): Promise<void> {
    this.listaSerie = await this._service.getSeriesAsync();
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this.loadSeries();
  }

  async crearNuevoPersonaje(): Promise<void> {
    let nombre = this.cajaNombre.nativeElement.value;
    let img = this.cajaImagen.nativeElement.value.toString();
    let idSerie = parseInt(this.selectSerie.nativeElement.value);

    let personaje = new Personaje(1, nombre, img, idSerie);
    console.log(personaje)
    let response = await this._service.postNuevoPersonajeAsync(personaje);

    this._router.navigate(["/personajesSerie/", idSerie]);
  }
}
