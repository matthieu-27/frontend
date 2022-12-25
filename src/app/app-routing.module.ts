import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component'; 
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AmioFavComponent } from './components/amio-fav/amio-fav.component';

const routes: Routes = [
  { path: 'folders', component: FoldersComponent, canActivate: [AuthGuard] },
  { path: '', component: AmioFavComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'folder/:id', component: FolderDetailComponent},
  { path: 'folder/:id/bookmarks', component: FolderDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: AmioFavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }