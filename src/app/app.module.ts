import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FoldersComponent } from './components/folders/folders.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthModule } from './auth/auth.module';
import { UserTokenInterceptor } from './auth/interceptors/user-token/user-token.interceptor';
import { TagsComponent } from './tags/tags.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AmioFavComponent } from './components/amio-fav/amio-fav.component';
import { FolderComponent } from './components/folder/folder.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmiofavModule } from './components/material.module';
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    MessagesComponent,
    BookmarksComponent,
    LoginComponent,
    TagsComponent,
    LogoutComponent,
    RegisterComponent,
    AmioFavComponent,
    FolderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    AmiofavModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [
    {
       provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
       useValue: { appearance: 'fill' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserTokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
