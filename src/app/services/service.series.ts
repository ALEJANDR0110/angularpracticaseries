import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Serie } from "../models/serie";
import { firstValueFrom } from "rxjs";
import { Personaje } from "../models/personajes";

@Injectable()
export class ServiceSerie {
    url = environment.urlApiSeries;

    constructor(
        private _http: HttpClient
    ){}

    async getSeriesAsync(): Promise<Serie[]> {
        let request = "api/Series";

        return firstValueFrom(
            this._http.get<Serie[]>(this.url + request)
        )
    }

    async getPersonajesTodosAsync(): Promise<Personaje[]> {
        let request = "api/Personajes";

        return firstValueFrom(
            this._http.get<Personaje[]>(this.url + request)
        )
    }

    async getSerieByIdAsync(id: number): Promise<Serie> {
        let request = "api/Series/" + id;

        return firstValueFrom(
            this._http.get<Serie>(this.url + request)
        )
    }

    async getPersonajesAsync(id: number): Promise<Personaje[]> {
        let request = "api/Series/PersonajesSerie/" + id;

        return firstValueFrom(
            this._http.get<Personaje[]>(this.url + request)
        )
    }

    async postNuevoPersonajeAsync(personaje: Personaje): Promise<any> {
        //CONVERTIMOS EL OBJETO RECIBIDO A JSON
        let json = JSON.stringify(personaje);
        //creamos un objeto header para el type
        console.log("json:")
        console.log(json)
        let header = new HttpHeaders();
        //incluimos la key de content-type
        header = header.set("content-type", "application/json");
        let request = "api/Personajes";

        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header})
        )
    }

    async modificarPersonajeAsync(idSerie: number, idPersonaje: number): Promise<any> {
        let request = "api/Personajes/" + idPersonaje + "/" + idSerie;

        return firstValueFrom(
            this._http.put(this.url + request, null)
        )
    }
}