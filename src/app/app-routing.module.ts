import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'list', component: ListComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
