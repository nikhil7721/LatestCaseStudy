import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { AuthServiceService } from './Services/Customer/auth/auth-service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService} from './Services/Washer/auth/auth.service';
import { AdminAuthService } from './Services/Admin/auth/admin-auth.service';
import { FormsModule } from '@angular/forms';
import { OrderService } from './Services/Customer/order/order.service';
import { RatingService } from './Services/Customer/review/rating.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PlanManagementService } from './Services/Admin/planManagement/plan-management.service';
import { ManageOrderService } from './Services/Admin/manageOrder/manage-order.service';
import { ManagewasherService } from './Services/Admin/manageWasher/managewasher.service';
import { ManagecustomerService } from './Services/Admin/manageCustomer/managecustomer.service';

import { PlansService } from './Services/plans/plans.service';
import { MyratingService } from './Services/Admin/review/myrating.service';
import { MyOrderService } from './Services/Washer/order/my-order.service';
import { authInterceptorProviders } from './Services/auth.interceptor';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    AdminAuthService,
    AuthServiceService,
    AuthService,
    OrderService,
    RatingService,
    AdminAuthService,
    PlanManagementService,
    ManageOrderService,
    ManagewasherService,
    ManagecustomerService,
    MyratingService,
    MyOrderService,
    PlansService,
    authInterceptorProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
