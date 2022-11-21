import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from './auth/auth.module';
import { UserTokenInterceptor } from './auth/interceptors/user-token/user-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    FolderDetailComponent,
    MessagesComponent,
    BookmarksComponent,
    LoginComponent,
    
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
