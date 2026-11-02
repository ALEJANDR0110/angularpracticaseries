import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serie } from '../../models/serie';
import { Personaje } from '../../models/personajes';
import { ServiceSerie } from '../../services/service.series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-personaje-component',
  standalone: false,
  styleUrl: './modificar-personaje-component.css',
  templateUrl: './modificar-personaje-component.html',
})
export class ModificarPersonajeComponent implements OnInit{
  public listaSerie!: Serie[];
  public listaPersonajes!: Personaje[];
  public serie: Serie | null = null;
  public personaje: Personaje | null = null;
  @ViewChild("selectserie") selectSerie!: ElementRef;
  @ViewChild("selectpersonaje") selectPersonaje!: ElementRef;

  constructor(
    private _service: ServiceSerie,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  async loadSeries(): Promise<void> {
    this.listaSerie = await this._service.getSeriesAsync();
    this._cdr.detectChanges();
  }

  async loadPersonajes(): Promise<void> {
    this.listaPersonajes = await this._service.getPersonajesTodosAsync();
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this.loadSeries();
    this.loadPersonajes();
  }

  async modificarPersonaje(): Promise<void> {
    let idPersonaje = parseInt(this.selectPersonaje.nativeElement.value);
    let idSerie = parseInt(this.selectSerie.nativeElement.value)

    let response = await this._service.modificarPersonajeAsync(idSerie, idPersonaje);
    this._router.navigate(['/personajesSerie/', idSerie]);
  }

  serieSeleccionada(): void {
    console.log("funciona")
  }
}
