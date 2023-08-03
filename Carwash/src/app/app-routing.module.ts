import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AdminAllOrderComponent } from './Components/Admin/admin-all-order/admin-all-order.component';
import { AdminAllReviewComponent } from './Components/Admin/admin-all-review/admin-all-review.component';
import { AdminAllWashersComponent } from './Components/Admin/admin-all-washers/admin-all-washers.component';
import { AdminAllcustomerComponent } from './Components/Admin/admin-allcustomer/admin-allcustomer.component';
import { AdminCreatePlanComponent } from './Components/Admin/admin-create-plan/admin-create-plan.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminEditPlanComponent } from './Components/Admin/admin-edit-plan/admin-edit-plan.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { AdminPlanManagementComponent } from './Components/Admin/admin-plan-management/admin-plan-management.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CustomerHomeComponent } from './Components/Customer/customer-home/customer-home.component';
import { CustomerdashboardComponent } from './Components/Customer/customerdashboard/customerdashboard.component';
import { CustomerprofileComponent } from './Components/Customer/customerprofile/customerprofile.component';
import { MyRatingsComponent } from './Components/Customer/my-ratings/my-ratings.component';
import { OrderComponent } from './Components/Customer/order/order.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MyOrderComponent } from './Components/Washer/my-order/my-order.component';
import { MyRatingComponent } from './Components/Washer/my-rating/my-rating.component';
import { WasherHomeComponent } from './Components/Washer/washer-home/washer-home.component';
import { WasherdashboardComponent } from './Components/Washer/washerdashboard/washerdashboard.component';
import { AdminguardGuard } from './Guard/adminguard.guard';


import { CustomerGuard } from './Guard/auth.guard';
import { WasherguardGuard } from './Guard/washerguard.guard';




const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'services', component:ServicesComponent},
  { path:'aboutUs', component: AboutusComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'contactUs', component: ContactComponent},
  { path:'user', component: CustomerdashboardComponent, canActivate: [CustomerGuard],
    children:[
      { path: 'customerHome', component: CustomerHomeComponent, canActivate: [CustomerGuard]},
      { path: 'customerProfile', component: CustomerprofileComponent, canActivate: [CustomerGuard]},
      { path: 'customerOrder', component: OrderComponent},
      { path: 'customerRating', component: MyRatingsComponent}
    ]
  },
  { path:'adminlogin', component: AdminLoginComponent},
  { path:'adminDashboard', component:AdminDashboardComponent,canActivate: [AdminguardGuard],
    children:[
      { path:'adminHome', component:AdminHomeComponent},
      { path:'adminPlans', component:AdminPlanManagementComponent},
      { path:'manageCustomer', component:AdminAllcustomerComponent},
      { path:'manageWasher', component:AdminAllWashersComponent},
      { path:'manageOrder', component:AdminAllOrderComponent},
      { path:'manageRating', component:AdminAllReviewComponent},
      { path:'createPlan', component:AdminCreatePlanComponent},
      { path:'editPlan/:id', component:AdminEditPlanComponent}
    ]
  },
  { path:'washerDashboard', component: WasherdashboardComponent, canActivate: [WasherguardGuard],
    children:[
      { path:'washerHome', component: WasherHomeComponent},
      { path:'myOrder', component:MyOrderComponent},
      { path:'myRatings', component:MyRatingComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AdminguardGuard,WasherguardGuard,CustomerGuard]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent, ServicesComponent, AboutusComponent, 
                                 LoginComponent, ContactComponent, SignupComponent,
                                 CustomerdashboardComponent, CustomerHomeComponent,
                                 CustomerprofileComponent,MyRatingsComponent,
                                 OrderComponent, AdminLoginComponent, 
                                 AdminDashboardComponent, AdminHomeComponent, 
                                 AdminPlanManagementComponent, AdminAllcustomerComponent,
                                 AdminAllWashersComponent, AdminAllOrderComponent,
                                 WasherdashboardComponent, WasherHomeComponent,
                                 MyOrderComponent, AdminAllReviewComponent,
                                 AdminCreatePlanComponent, AdminEditPlanComponent,
                                 MyRatingComponent  ];