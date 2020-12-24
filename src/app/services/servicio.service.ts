import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';
import { global } from './global';

@Injectable()
export class HttpServicio{

    //VARIABLES
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url= global.url;
    }
    contactoServicio(contacto){
        let json= JSON.stringify(contacto);
        let parametros= 'json='+ json;//Parametros a enviar
        let headers= new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');//cabeceras
        return this._http.post(this.url + 'contacto', parametros, {headers: headers});//enviar peticion
    }
}