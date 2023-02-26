import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Pieza } from './pieza';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {
  
  private API = "http://localhost:8080";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'*/*'
    })
  }
  constructor(private httpClient: HttpClient){}
  
  getAll(): Observable<any> {
    return this.httpClient.get(this.API + '/pieza')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  create(pieza:Pieza): Observable<any>{
    return this.httpClient.post(this.API + '/pieza', JSON.stringify(pieza), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any>{
    return this.httpClient.get(this.API + '/pieza/'+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  update(pieza:Pieza): Observable<any>{
    return this.httpClient.put(this.API + '/pieza' + pieza.id, JSON.stringify(pieza), this.httpOptions)
    //return this.httpClient.put(this.API + '/pieza' + id,pieza, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  delete(id:number): Observable<any>{
    return this.httpClient.delete(this.API + '/pieza/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  getAllCoches():Observable<any> {
    return this.httpClient.get(this.API + '/coche')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}

