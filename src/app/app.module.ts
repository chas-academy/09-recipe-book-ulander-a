import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login.service';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { ApiService } from './api.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { ListChildComponent } from './list-child/list-child.component';
import { ListFormComponent } from './list-form/list-form.component';
import { LogoutComponent } from './logout/logout.component';
import { RecipeDetailChildComponent } from './recipe-detail-child/recipe-detail-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    SearchComponent,
    IndexComponent,
    RecipeDetailComponent,
    NavComponent,
    ListComponent,
    RegisterComponent,
    ListChildComponent,
    ListFormComponent,
    LogoutComponent,
    RecipeDetailChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
