import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Recipe } from './recipe';
import { MessageService } from './message.service';

@Injectable()
export class RecipeService {
  private recipesUrl =
    `http://www.themealdb.com/api/json/v1/1/`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

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

  getRecipes(param: string): Observable<Recipe[]> {
    this.messageService.add('RecipeService: fetched recipes!');
    const url = `${this.recipesUrl}${param}`;
    return this.http.get<Recipe[]>(url)
      .do(res => console.log('HTTP Response:', res))
      .map(res => res.meals)
      .pipe(
        catchError(this.handleError('getRecipes', []))
      );
  }

  /** GET recipe by id. Will 404 if id not found */
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/lookup.php?i=${id}`;
    return this.http.get<Recipe>(url)
    .map(res => res.meals[0])
    .do(res => console.log('HTTP Response:', res))
    .pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

}

