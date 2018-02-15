import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from './recipe.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { FeaturedComponent } from './featured/featured.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { DatabaseService } from './database.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
    FeaturedComponent,
    NavComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService,
    MessageService,
    DatabaseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
