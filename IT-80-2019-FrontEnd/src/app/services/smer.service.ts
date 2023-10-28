import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMER_URI } from '../constants';
import { Smer } from '../models/smer';

@Injectable({
  providedIn: 'root'
})
export class SmerService {
  constructor(private httpClient : HttpClient) { }

  public getAllSmer():Observable<any>{
    return this.httpClient.get(`${SMER_URI}`)
  }

  public addSmer(smer : Smer):Observable<any>{
    smer.id=500000;
    return this.httpClient.post(`${SMER_URI}`,smer);
  }

  public updateSmer(smer: Smer):Observable<any>{
    return this.httpClient.put(`${SMER_URI}`,smer);
  }

  public deleteSmer(id:number):Observable<any>{
    return this.httpClient.delete(`${SMER_URI}/${id}`);
  }
}
