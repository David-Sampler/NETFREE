import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Videos } from '../models/modelVideos'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://filmesa-com-br.umbler.net';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVideos(): Observable<Videos[]> {
    return this.httpClient.get<Videos[]>(this.url + "/allvideos").pipe(retry(2))
  }

  insertFilme(dados): Observable<any> {
    return this.httpClient.post<any>(this.url + "/insertvideo", dados)
  }

}
