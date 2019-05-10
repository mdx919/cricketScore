import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetScoresService {
  private matchUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getScore(): Observable<any[]> {
    return this.http.get<any[]>(this.matchUrl).pipe(
      tap(data => {
        data.map(item => JSON.stringify(item));
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An Error Occured: ${errorMessage}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }

    return throwError(errorMessage);
}

}
