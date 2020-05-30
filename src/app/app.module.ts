import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobordersComponent } from './joborders/joborders.component';
import { WorkersComponent } from './workers/workers.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
/*import { SignOutComponent } from './sign-out/sign-out.component';*/
import { SignContractComponent } from './sign-contract/sign-contract.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    JobordersComponent,
    WorkersComponent,
    AddOrdersComponent,
    HomePageComponent,
    SignInComponent,
    /*SignOutComponent,*/
    SignContractComponent,
    LoginComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [    
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    BrowserModule,AngularFireDatabaseModule,
    AppRoutingModule,AngularFirestoreModule,
    FormsModule,AngularFireStorageModule,AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
