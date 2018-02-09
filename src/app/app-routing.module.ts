import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { FeaturedComponent } from './featured/featured.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: FeaturedComponent },
  { path: 'recipes/:category', component: RecipesComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'list', component: ListComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
