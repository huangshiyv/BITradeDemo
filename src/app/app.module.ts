import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AuthComponent } from './core/authentication/auth/auth.component';
import { SecureComponent } from './modules/home/pages/secure/secure.component';
import { LoginComponent } from './core/authentication/login/login.component';
import {MatButtonModule, MatInputModule,
  MatCheckboxModule, MatFormFieldModule, MatCardModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PartnerWebsiteCardComponent } from './shared/components/partner-website-card/partner-website-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyItemNormalWindowComponent } from './shared/components/buy-item-normal-window/buy-item-normal-window.component';
import { ProductGridComponent } from './modules/home/pages/product-grid/product-grid.component';
import { ProductGridItemComponent } from './shared/components/product-grid-item/product-grid-item.component';
import { ProductPageComponent } from './shared/components/product-page/product-page.component';
import { PagingItemComponent } from './shared/components/paging-item/paging-item.component';
import { CartComponent } from './modules/home/pages/cart/cart.component';
import { ProductCategoriesSidebarComponent } from './shared/components/product-categories-sidebar/product-categories-sidebar.component';
import { ProductGridTitlebarComponent } from './shared/components/product-grid-titlebar/product-grid-titlebar.component';
import { CartSubwindowComponent } from './shared/components/cart-subwindow/cart-subwindow.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { FirebaseuiLoginComponent } from './core/authentication/firebaseui-login/firebaseui-login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AddressManagerComponent } from './modules/home/pages/address-manager/address-manager.component';
import { AddAddressPageComponent } from './modules/home/pages/add-address-page/add-address-page.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl:  'http://click13.com', //'http://localhost:4200',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/classroom.profile.emails'
      ]
    },
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },

    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'http://baidu.com',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SecureComponent,
    LoginComponent,
    PartnerWebsiteCardComponent,
    BuyItemNormalWindowComponent,
    ProductGridComponent,
    ProductGridItemComponent,
    ProductPageComponent,
    PagingItemComponent,
    CartComponent,
    ProductCategoriesSidebarComponent,
    ProductGridTitlebarComponent,
    CartSubwindowComponent,
    FirebaseuiLoginComponent,
    AddressManagerComponent,
    AddAddressPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'click13.com'),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [AmplifyService, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
