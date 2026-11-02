import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ServiceSerie } from './services/service.series';
import { DetallesSerieComponent } from './components/detalles-serie-component/detalles-serie-component';
import { PersonajesSerieComponent } from './components/personajes-serie-component/personajes-serie-component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje-component/nuevo-personaje-component';
import { ModificarPersonajeComponent } from './components/modificar-personaje-component/modificar-personaje-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    DetallesSerieComponent,
    PersonajesSerieComponent,
    NuevoPersonajeComponent,
    ModificarPersonajeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceSerie],
  bootstrap: [App],
})
export class AppModule {}
