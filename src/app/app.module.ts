import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
