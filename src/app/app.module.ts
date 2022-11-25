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
import { TagsComponent } from './tags/tags.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    FolderDetailComponent,
    MessagesComponent,
    BookmarksComponent,
    LoginComponent,
    TagsComponent,
    BookmarkDetailComponent,
    UserDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
