import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personajes';
import { ServiceSerie } from '../../services/service.series';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-personajes-serie-component',
  standalone: false,
  styleUrl: './personajes-serie-component.css',
  templateUrl: './personajes-serie-component.html',
})
export class PersonajesSerieComponent implements OnInit{
  public idSerie!: number;
  public listaPersonajes!: Personaje[];

  constructor(
    private _service: ServiceSerie,
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  async loadPersonajes(): Promise<void> {
    this.listaPersonajes = await this._service.getPersonajesAsync(this.idSerie);
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idSerie = parseInt(params['idserie']);

      this.loadPersonajes();
    })
  }
}
