import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './components/folders/folders.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { AmioFavComponent } from './components/amio-fav/amio-fav.component';

const routes: Routes = [
  { path: 'folders', component: FoldersComponent, canActivate: [AuthGuard] },
  { path: '', component: FoldersComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: FoldersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }