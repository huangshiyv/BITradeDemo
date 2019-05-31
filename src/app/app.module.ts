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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SecureComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
