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
import { ContainerComponent } from './container/container.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

const routes: Routes = [
  { path: 'folders', component: FoldersComponent },
  { path: 'folder/:id', component: FolderDetailComponent},
  { path: 'bookmark', component: AddBookmarkComponent},
  { path: 'bookmarks', component: BookmarksComponent},
  { path: 'bookmark/:id', component: BookmarkDetailComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'tag/:id', component: TagDetailComponent},
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }