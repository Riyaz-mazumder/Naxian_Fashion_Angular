import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';
import { WishListServiceService } from 'src/app/service/wish-list-service.service';

@Component({
  selector: 'app-all-product-by-searched',
  templateUrl: './all-product-by-searched.component.html',
  styleUrls: ['./all-product-by-searched.component.scss']
})
export class AllProductBySearchedComponent {
  constructor(
    private service: DatabaseServiceService,
    private authService: AuthServiceService,
    private router: Router,
    private cartService: CartServiceService,
    private wishListService: WishListServiceService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  // This One
  allProducts!: any;


  loggedIn!: any;
  theUser!: any;
  word!: string;
  ngOnInit() {
    this.word = this.route.snapshot.params["word"];
    console.log(this.authService.getUser());
    this.loggedIn = this.authService.getUser();
    console.log(JSON.parse(this.loggedIn));

    this.service.searchProducts(this.word).subscribe({
      next: (r) => {
        this.allProducts = r;
        
      },
      error: (err) => {
       console.log("ku ku ku");
       
        console.log(err);
      },
    });
  }

  cardList: any[] = [];
  // Product Clicked
  productClicked(PId: any) {
    // navigate the page
    this.router.navigate(['/productView/' + PId]);
  }

  // Shopping Card Clicked
  shopping(f: string, obj: any) {
    obj.id = null;
    obj.quantity = 1;

    if (this.loggedIn === null) {
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    } else {
      if (f === 'formWishList') {
        console.log('Clicked');

        this.wishListService.addToWishList(obj).subscribe({
          next: (r) => {
            alert('Added To Your Wishlist');
            this.ngOnInit();
          },
          error: (e) => {
            alert(e);
          },
        });
      } else if (f === 'formCard') {
        this.cartService.addToCart(obj).subscribe({
          next: (r) => {
            alert('Added To Your Cart');
            this.ngOnInit();
          },
          error: (e) => {
            alert(e);
          },
        });
        console.log('Clicked');
      }
    }
  }
}
