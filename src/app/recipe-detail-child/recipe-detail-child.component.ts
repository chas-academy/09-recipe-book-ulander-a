import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../login.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe-detail-child',
  templateUrl: './recipe-detail-child.component.html',
  styleUrls: ['./recipe-detail-child.component.css']
})
export class RecipeDetailChildComponent implements OnInit {
  @Input() recipe: object;
  lists = [];

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.lists = [];
    this.authService.getUser()
      .subscribe(
        user => this.apiService.getLists(user.id)
          .subscribe(lists => lists.forEach(list => {
            console.log(list);
            this.lists.push(list);
          })
          )
      );
  }

  addToList(list): void {
    this.apiService.addToList(list, this.recipe)
    .subscribe(res => console.log(res));
  }
}
