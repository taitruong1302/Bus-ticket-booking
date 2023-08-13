import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CustomerLayoutComponent } from './layout/customer/customer-layout/customer-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ChangeProfileComponent } from './component/change-profile/change-profile.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { AddScheduleComponent } from './component/add-schedule/add-schedule.component';
import { BusManagementComponent } from './component/bus-management/bus-management.component';
import { ScheduleManagementComponent } from './component/schedule-management/schedule-management.component';
import { PayScreenComponent } from './component/pay-screen/pay-screen.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { PaymentSuccessfulComponent } from './component/payment-successful/payment-successful.component';
import { TransactionHistoryComponent } from './component/transaction-history/transaction-history.component';
import { BillDetailComponent } from './component/bill-detail/bill-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'customer', component: CustomerLayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'change-profile',
        component: ChangeProfileComponent
      },
      {
        path: 'transaction-history',
        component: TransactionHistoryComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'change-profile',
        component: ChangeProfileComponent
      },
      {
        path: 'bus-management',
        component: BusManagementComponent
      },
      {
        path: 'schedule-management',
        component: ScheduleManagementComponent
      },
      {
        path: 'find-bill/:id',
        component: PayScreenComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      },
      {
        path: 'paypal/:id',
        component: PaypalComponent
      },
      {
        path: 'payment-successful/:id',
        component: PaymentSuccessfulComponent
      },
      {
        path: 'bill-detail/:id',
        component: BillDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
