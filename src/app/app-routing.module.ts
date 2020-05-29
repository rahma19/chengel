import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
