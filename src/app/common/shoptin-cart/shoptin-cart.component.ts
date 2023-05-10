import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CheckOutPageComponent } from '../check-out-page/check-out-page.component';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoptin-cart',
  templateUrl: './shoptin-cart.component.html',
  styleUrls: ['./shoptin-cart.component.scss'],
})
export class ShoptinCartComponent {
  allCartProducts!: any;

  constructor(
    private dialogRef: MatDialogRef<ShoptinCartComponent>,
    private service: CartServiceService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.allCartProducts = data;
  }

   couponCodeProduct!: any;

  couponCodeApply(id: number, data: NgForm){
   console.log(id);

   this.service.getById(id).subscribe({
    next: r=>{
      this.couponCodeProduct = r;
      console.log(r);
      
     
    },
    error(err) {
      console.log("have some error");
      
    },
   })
   console.log(this.couponCodeProduct);
   

  //  if( this.couponCodeProduct.couponCode.length >1){

  //   if(this.couponCodeProduct.couponCode === data.value.coupon){
  //     alert("Coupon Code Applyed")
  //   }else{
  //     alert("Not A Valid Coupon Code")
  //   }


  //  }else{
  //    alert("The is No coupon For This Product")
  //  }
   
  }

  updateQuantity(index: number, d: any, quantity: number) {
    d.productQuantity = quantity;
    this.service.updateCart(d).subscribe({
      next: (r) => {
        console.log(r);
      },
      error: (e) => {
        alert(e);
      },
    });
    // this.productQuantity = quantity;
    // console.log(this.productQuantity);

    // Quality Update Query
    this.ngOnInit();
  }
  Products!: any;
  ngOnInit(): void {
    this.service.getAllFromCart().subscribe({
      next: (r) => {
        this.Products = r;
      },
      error: (e) => {
        alert(e);
      },
    });
    this.calculateTotalValue();
    this.calculateTotalItems();
  }

  productQuantity!: number;
  totalValue: number = 0;
  totalItems: number = 0;

  calculateTotalValue() {
    for (let product of this.Products) {
      this.totalValue += product.offerPrice * product.quantity;
    }
  }

  calculateTotalItems() {
    this.totalItems = this.Products.length;
  }

  cardProductRemove(id: number) {
    console.log(id);

    // cardProductRemoveQuery;
    this.service.deleteFromCart(id).subscribe({
      next: (r) => {
        alert('Remove From Cart');
        this.ngOnInit();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  productsInCart: any;

  buyAllFromShoppingCart() {
    this.dialogRef.close();
    const dialogRefs = this.dialog.open(CheckOutPageComponent, {
      data: this.Products,
    });

    // dialogRefs.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
