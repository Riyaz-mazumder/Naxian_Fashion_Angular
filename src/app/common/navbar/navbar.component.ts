import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';
import { ShoptinCartComponent } from '../shoptin-cart/shoptin-cart.component';
import { WishListPageComponent } from '../wish-list-page/wish-list-page.component';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { WishListServiceService } from 'src/app/service/wish-list-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private service: DatabaseServiceService,
    private dialog: MatDialog,
    private cartService: CartServiceService,
    private wishListService: WishListServiceService
  ) {}

  loggedIn!: any;
  userName!: any;
  cartItems = 0;
  wishListItems = 0;
  theUser!: any;
  products!: any;
  wishListProducts!: any;
  ngOnInit(): void {
    this.cartService.getAllFromCart().subscribe({
      next: (r) => {
        this.products = r;
        this.cartItems = this.products.length;
      },
      error: (e) => {
        alert(e);
      },
    });

    this.wishListService.getAllWishList().subscribe({
      next: (r) => {
        this.wishListProducts = r;
        this.wishListItems = this.wishListProducts.length;
      },
      error: (e) => {
        alert(e);
      },
    });

    // logIn
    this.loggedIn = this.authService.getUser();
    this.userName = JSON.parse(this.loggedIn).name;

    // the the user
    this.service.getTheUser(JSON.parse(this.loggedIn).id).subscribe({
      next: (r) => {
        this.theUser = r;
      },
      error: (e) => {
        console.log(e);
      },
    });

    //add to card
  }

  deleteUser() {
    sessionStorage.removeItem(this.authService.USER_KEY);
    alert('You Have Logged Out: ');
  }

  onAddToCart(d: any) {
    const dialogRef = this.dialog.open(ShoptinCartComponent, {
      data: d,
    });
  }

  onAddToWishlist(d: any) {
    const dialogRef = this.dialog.open(WishListPageComponent, {
      data: d,
    });
  }
}
