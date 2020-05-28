import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobordersComponent } from './src/joborders/joborders.component';
import { WorkersComponent } from './workers/workers.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignContractComponent } from './sign-contract/sign-contract.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    JobordersComponent,
    WorkersComponent,
    AddOrdersComponent,
    HomePageComponent,
    SignInComponent,
    SignOutComponent,
    SignContractComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
