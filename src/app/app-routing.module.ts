import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { DewComponent } from './navbar/dew/dew.component';
import { OrderComponent } from './navbar/order/order.component';
import { PurchaseComponent } from './navbar/purchase/purchase.component';
import { SaleComponent } from './navbar/sale/sale.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { EmployeeComponent } from './navbar/employee/employee.component';
import { EmpListComponent } from './navbar/employee/emp-list/emp-list.component';
import { EmpEditComponent } from './navbar/employee/emp-edit/emp-edit.component';
import { HomeComponent } from './component/home/home.component';
import { BillingComponent } from './navbar/order/billing/billing.component';
import { MemoComponent } from './navbar/order/memo/memo.component';
import { OrderEditComponent } from './navbar/order/order-edit/order-edit.component';
import { OderListComponent } from './navbar/order/oder-list/oder-list.component';

const routes: Routes = [

{path: '', component: HomeComponent},



{path: 'dashboard', component: DashboardComponent},
{path: 'dew', component: DewComponent},
{path: 'purchase', component: PurchaseComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'sale', component: SaleComponent},
{path: 'emp', component: EmployeeComponent},
{path: 'empList', component: EmpListComponent},
{path: 'empEdit', component: EmpEditComponent},
{path: 'empEdit/:userId', component: EmpEditComponent},

{path: 'home', component: HomeComponent},


{path: 'order', component: OrderComponent},
{path: 'billing', component: BillingComponent},
{path: 'memo', component: MemoComponent},
{path: 'payment', component: HomeComponent},
{path: 'orderEdit', component: OrderEditComponent},
{path: 'orderEdit/:userId', component: OrderEditComponent},
{path: 'orderList', component: OderListComponent},


{path: 'bill', component: BillingComponent},
{path: 'memo', component: MemoComponent},





{path: '**', component: DashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
