import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './modules/home/pages/home/home.component';
import { AuthComponent } from './core/authentication/auth/auth.component';
import { SecureComponent } from './modules/home/pages/secure/secure.component';
import { LoginComponent } from './core/authentication/login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'secure', component: SecureComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }