import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component'; 

const routes: Routes = [
  { path: 'folders', component: FoldersComponent },
  { path: 'folder/:id', component: FolderDetailComponent},
  { path: 'folder/:id/bookmarks', component: FolderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }