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
import { FirebaseuiLoginComponent } from './core/authentication/firebaseui-login/firebaseui-login.component';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { AddressManagerComponent } from './modules/home/pages/address-manager/address-manager.component';
import { AddAddressPageComponent } from './modules/home/pages/add-address-page/add-address-page.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [

  // tslint:disable-next-line:max-line-length
  { path: 'user/address/add', component: AddAddressPageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  // tslint:disable-next-line:max-line-length
  { path: 'user/address', component: AddressManagerComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/category/:category/id/:id', component: BuyItemNormalWindowComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/category/:category', component: ProductGridComponent, pathMatch: 'full' },
  { path: 'shop/:shopName/id/:id', component: BuyItemNormalWindowComponent, pathMatch: 'full' },
  { path: 'shop/:shopName', component: ProductGridComponent,  pathMatch: 'full' },
  { path: 'secure', component: SecureComponent,   canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'login', component: FirebaseuiLoginComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
