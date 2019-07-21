import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './modules/home/pages/home/home.component';
import { AuthComponent } from './core/authentication/auth/auth.component';
import { SecureComponent } from './modules/home/pages/secure/secure.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { BuyItemNormalWindowComponent } from './shared/components/buy-item-normal-window/buy-item-normal-window.component';
import { ProductGridComponent } from './modules/home/pages/product-grid/product-grid.component';
import { CartComponent } from './modules/home/pages/cart/cart.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/category/:category/id/:id', component: BuyItemNormalWindowComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/category/:category', component: ProductGridComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/id/:id', component: BuyItemNormalWindowComponent, pathMatch: 'full' },
  { path: 'shop/:shopName', component: ProductGridComponent,  pathMatch: 'full' },
  { path: 'secure', component: SecureComponent,   canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
