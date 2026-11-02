import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSerie } from '../../services/service.series';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
  public listaSeries!: Array<Serie>;

  constructor(
    private _service: ServiceSerie,
    private _cdr: ChangeDetectorRef
  ) {}

  async loadSeries(): Promise<void> {
    this.listaSeries = await this._service.getSeriesAsync();
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    this.loadSeries();
  }
}
