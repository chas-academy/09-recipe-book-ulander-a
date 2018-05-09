import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../api.service';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.css']
})
export class ListChildComponent {
  @Input() lists: Array<any> = [];

  @Output() listUpdated = new EventEmitter<string>();

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  deleteList(list): void {
    this.apiService.deleteList(list.id)
      .subscribe(response => this.listUpdated.emit('complete'));
  }

  deleteRecipe(recipe): void {
    this.apiService.removeFromList(recipe.id)
      .subscribe(response => this.listUpdated.emit('complete'));
  }

}
