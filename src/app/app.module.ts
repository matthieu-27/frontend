import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FoldersComponent } from './components/folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    FolderDetailComponent,
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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
