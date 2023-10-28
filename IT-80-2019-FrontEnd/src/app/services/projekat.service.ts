import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PROJEKAT_URI } from "../constants";
import { Projekat } from "../models/projekat";

@Injectable({
    providedIn: 'root'
  })
  export class ProjekatService {
    constructor(private httpClient : HttpClient) { }
  
    public getAllProjekat():Observable<any>{
      return this.httpClient.get(`${PROJEKAT_URI}`)
    }
  
    public addProjekat(projekat : Projekat):Observable<any>{
      projekat.id=500000;
      return this.httpClient.post(`${PROJEKAT_URI}`,projekat);
    }
  
    public updateProjekat(projekat: Projekat):Observable<any>{
      return this.httpClient.put(`${PROJEKAT_URI}`,projekat);
    }
  
    public deleteProjekat(id:number):Observable<any>{
      return this.httpClient.delete(`${PROJEKAT_URI}/${id}`);
    }
  }
  