import { ProductsService } from './services/products.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGaurd } from './services/admin-auth-gaurd.service';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},
      
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGaurd]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurd]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGaurd]},

      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGaurd, AdminAuthGaurd]},
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGaurd, AdminAuthGaurd]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGaurd, AdminAuthGaurd]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGaurd, AdminAuthGaurd]}
    ])
  ],
  providers: [
    AuthService,
    AuthGaurd,
    AdminAuthGaurd,
    UserService,
    CategoryService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
