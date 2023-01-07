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
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FolderComponent } from './folder/folder.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { DarkModeToggle } from './dark-mode-toggle/dark-mode-toggle.component';
import { TagsComponent } from './tags/tags.component';
import { RegisterComponent } from './register/register.component';
import { FoldersviewComponent } from './foldersview/foldersview.component';
import { ContainerComponent } from './container/container.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { BoomarkComponent } from './boomark/boomark.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AmiofavModule } from './amiofav/amiofav.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    FolderDetailComponent,
    MessagesComponent,
    BookmarksComponent,
    LoginComponent,
    BookmarkDetailComponent,
    UserDetailComponent,
    FolderComponent,
    DarkModeToggle,
    TagsComponent,
    RegisterComponent,
    FoldersviewComponent,
    ContainerComponent,
    TagDetailComponent,
    BoomarkComponent,
    AddBookmarkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    DragDropModule,
    FeatherModule.pick(allIcons),
    AmiofavModule
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
