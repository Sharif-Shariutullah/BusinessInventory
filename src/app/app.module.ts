import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { SaleComponent } from './navbar/sale/sale.component';
import { PurchaseComponent } from './navbar/purchase/purchase.component';
import { DewComponent } from './navbar/dew/dew.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './navbar/order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './navbar/employee/employee.component';
import { EmpListComponent } from './navbar/employee/emp-list/emp-list.component';
import { EmpEditComponent } from './navbar/employee/emp-edit/emp-edit.component';
import { HomeComponent } from './component/home/home.component';
import { OderListComponent } from './navbar/order/oder-list/oder-list.component';
import { BillingComponent } from './navbar/order/billing/billing.component';
import { PaymentComponent } from './navbar/order/payment/payment.component';
import { MemoComponent } from './navbar/order/memo/memo.component';
import { OrderEditComponent } from './navbar/order/order-edit/order-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    SaleComponent,
    PurchaseComponent,
    DewComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    EmployeeComponent,
    EmpListComponent,
    EmpEditComponent,
    HomeComponent,
    OderListComponent,
    BillingComponent,
    PaymentComponent,
    MemoComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
