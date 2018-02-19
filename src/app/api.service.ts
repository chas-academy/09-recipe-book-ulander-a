import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { MessageService } from './message.service';


@Injectable()
export class ApiService {
  url = 'http://api.recipes.dev/api/recipes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  searchRecipes(query): Observable<any> {
    return this.http.get(`${this.url}/query/${query}`);
  }

  getRecipe(id): Observable<object> {
    return this.http.get(`${this.url}/id/${id}`);
  }

  getTrending(): Observable<any> {
    return this.http.get(`${this.url}/trending`);
  }

  getList(userId): Observable<any> {
    return this.http.get(`http://api.recipes.dev/api/db/list/${userId}`);
  }

  addToList(userId, itemId): Observable<any> {
    console.log('userId: ' + userId + ' itemId: ' + itemId);
    return this.http.post(`http://api.recipes.dev/api/db/list/add`, { 'user_id' : userId, 'recipe_id' : itemId });
  }

  removeFromList(userId, item): Observable<any> {
    return this.http.delete(`http://api.recipes.dev/api/db/list/${userId}/delete/${item}`);
  }
}
