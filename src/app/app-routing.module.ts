import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignContractComponent } from './sign-contract/sign-contract.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { JobordersComponent } from './joborders/joborders.component';
import { WorkersComponent } from './workers/workers.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "homePage", component: HomePageComponent },
  { path: "signContract", component: SignContractComponent },
  { path: "singIn", component: SignInComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "addOrders", component: AddOrdersComponent },
  { path: "jobOrders", component: JobordersComponent },
  { path: "workers", component: WorkersComponent },
  { path: "**", component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
