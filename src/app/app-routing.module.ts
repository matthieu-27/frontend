import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component'; 
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { TagsComponent } from './tags/tags.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'folders', component: FoldersComponent },
  { path: 'folder/:id', component: FolderDetailComponent},
  { path: 'bookmarks', component: BookmarksComponent},
  { path: 'bookmark/:id', component: BookmarkDetailComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }