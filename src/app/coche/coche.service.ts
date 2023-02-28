import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coche } from './coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private API = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'*/*'
    })
  }
  constructor(private httpClient: HttpClient){}

  getAll(): Observable<any> {
    return this.httpClient.get<Coche[]>(this.API + '/coche');
  }


  create(coche:Coche): Observable<any>{
    return this.httpClient.post(this.API + '/coche', JSON.stringify(coche), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any>{
    return this.httpClient.get(this.API + '/coche/'+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  update(id:number, coche:Coche): Observable<any>{
    return this.httpClient.put(this.API + '/coche/' + id,  JSON.stringify(coche), this.httpOptions)
    //return this.httpClient.put(this.API + '/coche' + id,coche, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  delete(id:number): Observable<any>{
    return this.httpClient.delete(this.API + '/coche/' + id, this.httpOptions)
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
