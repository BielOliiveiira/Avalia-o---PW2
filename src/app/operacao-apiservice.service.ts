import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Operacao} from './model/operacao';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

  converter(num1: string, num2 :string): Observable<string> {
    let params = new HttpParams().set("num1", num1).set("num2", num2);
    return this.httpClient.get<string>(this.apiURL, {params})
                          .pipe(retry(1),
                           catchError(this.handleError));
  }

  apiURL: string = "http://172.16.58.22:8001/api/funcoes/adicao";

  constructor(private httpClient: HttpClient) { }

  handleError(error) {
  let errorMessage = `Código de erro: ${error.status}\nMenssagem: ${error.message}`;
  alert(errorMessage);
  return throwError(errorMessage);
}
}
