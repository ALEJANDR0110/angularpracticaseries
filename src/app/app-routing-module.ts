import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { DetallesSerieComponent } from './components/detalles-serie-component/detalles-serie-component';
import { PersonajesSerieComponent } from './components/personajes-serie-component/personajes-serie-component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje-component/nuevo-personaje-component';
import { ModificarPersonajeComponent } from './components/modificar-personaje-component/modificar-personaje-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "nuevoPersonaje", component: NuevoPersonajeComponent },
  { path: "modificarPersonaje", component: ModificarPersonajeComponent },
  { path: "detallesSerie/:idserie", component: DetallesSerieComponent },
  { path: "personajesSerie/:idserie", component: PersonajesSerieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
