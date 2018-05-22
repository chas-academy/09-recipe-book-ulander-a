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
  url = 'https://young-eyrie-92940.herokuapp.com/api/recipes';

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

  getLists(userId: number): Observable<any> {
    return this.http.get(`https://young-eyrie-92940.herokuapp.com/api/db/users/${userId}/collections`);
  }

  createList(user_id: number, name: string): Observable<any> {
    console.log('creating new list called: ', name);
    return this.http.post(`https://young-eyrie-92940.herokuapp.com/api/db/users/${user_id}/collections`, {name, user_id});
  }

  deleteList(listId): Observable<any> {
    console.log('deleting list:', listId);
    return this.http.delete(`https://young-eyrie-92940.herokuapp.com/api/db/collections/${listId}`);
  }

  addToList(list, item): Observable<any> {
    console.log(item);
    const name = item.recipe.title;
    const apiId = item.recipe.recipe_id;
    const imagePath = item.recipe.image_url;
    const listId = list.id;
    console.log(name, apiId, imagePath, listId);
    return this.http.post(`https://young-eyrie-92940.herokuapp.com/api/db/recipes`, {
      name, apiId, imagePath, listId
    });
  }

  removeFromList(recipeId): Observable<any> {
    return this.http.delete(`https://young-eyrie-92940.herokuapp.com/api/db/recipes/${recipeId}`);
  }
}
