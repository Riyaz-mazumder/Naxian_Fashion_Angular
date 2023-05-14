import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminHomePageComponent } from './admin/Pages/admin-home-page/admin-home-page.component';
import { AdminLoginComponent } from './admin/Pages/admin-login/admin-login.component';
import { AddNewProductComponent } from './admin/Tables/Product/add-new-product/add-new-product.component';
import { AllProductsComponent } from './admin/Tables/Product/all-products/all-products.component';
import { HomePageMainComponent } from './admin/Pages/home-page-main/home-page-main.component';
import { HttpClientModule } from '@angular/common/http';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { ProductViewPageComponent } from './Pages/product-view-page/product-view-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './admin/Tables/edit-product/edit-product.component';
import { ShoptinCartComponent } from './common/shoptin-cart/shoptin-cart.component';
import { WishListPageComponent } from './common/wish-list-page/wish-list-page.component';
import { CheckOutPageComponent } from './common/check-out-page/check-out-page.component';
import { ShowOrderComponent } from './admin/Tables/order/show-order/show-order.component';
import { AproveOrderComponent } from './admin/Tables/order/aprove-order/aprove-order.component';
import { AllUserComponent } from './admin/Tables/users/all-user/all-user.component';
import { AllProductBySearchedComponent } from './Pages/all-product-by-searched/all-product-by-searched.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LogInComponent,
    SignUpComponent,
    HomePageComponent,
    AdminComponent,
    AdminHomePageComponent,
    AdminLoginComponent,
    AddNewProductComponent,
    AllProductsComponent,
    HomePageMainComponent,
    ProductViewPageComponent,
    EditProductComponent,
    ShoptinCartComponent,
    WishListPageComponent,
    CheckOutPageComponent,
    ShowOrderComponent,
    AproveOrderComponent,
    AllUserComponent,
    AllProductBySearchedComponent,
    UserDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
