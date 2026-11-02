import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceSerie } from '../../services/service.series';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-detalles-serie-component',
  standalone: false,
  styleUrl: './detalles-serie-component.css',
  templateUrl: './detalles-serie-component.html',
})
export class DetallesSerieComponent implements OnInit{
  public serie!: Serie;

  constructor(
    private _service: ServiceSerie,
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  async getDatosSerie(id: number): Promise<void> {
    this.serie = await this._service.getSerieByIdAsync(id);
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['idserie'])

      this.getDatosSerie(id);
    })
  }
}
