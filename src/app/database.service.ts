import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { MessageService } from './message.service';

@Injectable()
export class DatabaseService {
  url = 'http://localhost:3000/list';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
      // .do(res => console.log(res));
  }

  postData(data): Observable<any> {
    return this.http.post(this.url, {'recipeId' : data})
      .pipe(
        catchError(this.handleError('postData', data))
      );
  }

  private log(message: string) {
    this.messageService.add('RecipeService: ' + message);
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
