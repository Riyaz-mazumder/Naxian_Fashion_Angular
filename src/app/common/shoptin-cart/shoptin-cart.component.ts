import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-shoptin-cart',
  templateUrl: './shoptin-cart.component.html',
  styleUrls: ['./shoptin-cart.component.scss'],
})
export class ShoptinCartComponent {

  allCartProducts!: any;

  constructor(
    private dialogRef: MatDialogRef<ShoptinCartComponent>,
    private service: DatabaseServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.allCartProducts = data;
  }
  public Products = [
    {
      name: 'Casual Shirt 0.1',
      offerPrice: 800,
      regularPrice: 600,
      description: 'A good quality product',
      quantity: 3,
      category: 'man',
      subCate: 'Shirt',
      manufacture: 'Infinity',
      productSize: 'S,M,L,XL,XXL',
      productColor: 'Green',
      weight: '500g',
      productImage_1:
        'https://infinitymegamall.com/wp-content/uploads/2023/02/25a.jpg',
      productImage_2:
        'https://infinitymegamall.com/wp-content/uploads/2023/02/41a.jpg',
      productImage_3:
        'https://infinitymegamall.com/wp-content/uploads/2023/01/16a-370x444.jpg',
      id: 1,
    },
    {
      name: 'Casual Shirt 0.2',
      offerPrice: 1200,
      regularPrice: 1000,
      description: 'A good quality product',
      quantity: 1,
      category: 'man',
      subCate: 'Shirt',
      manufacture: 'Infinity',
      productSize: 'S,M,L,XL,XXL',
      productColor: 'Green',
      weight: '500g',
      productImage_1:
        'https://infinitymegamall.com/wp-content/uploads/2022/07/23a.jpg',
      productImage_2:
        'https://infinitymegamall.com/wp-content/uploads/2022/07/23b.jpg',
      productImage_3:
        'https://infinitymegamall.com/wp-content/uploads/2023/01/16a-370x444.jpg',
      id: 2,
    },
    {
      name: 'TANJIM PANJABI',
      offerPrice: 2500,
      regularPrice: 2100,
      description: 'A good quality product',
      quantity: 1,
      category: 'man',
      subCate: 'Punjabi',
      manufacture: 'Ecstasy',
      productSize: 'S,M,L,XL,XXL',
      productColor: 'Orange',
      weight: '500g',
      productImage_1:
        'https://ecstasybd.com/all-images/product/Product-Image-1663824988.jpg',
      productImage_2:
        'https://ecstasybd.com/all-images/product/Product-Image-11663824988.jpg',
      productImage_3:
        'https://ecstasybd.com/all-images/product/Product-Image-21663824988.jpg',
      id: 4,
    },
    {
      name: 'TANJIM PREMIUM PANJABI',
      offerPrice: 3500,
      regularPrice: 3200,
      description: 'A good quality product',
      quantity: 1,
      category: 'man',
      subCate: 'Punjabi',
      manufacture: 'Ecstasy',
      productSize: 'S,M,L,XL,XXL',
      productColor: 'Navi Blue',
      weight: '500g',
      productImage_1:
        'https://ecstasybd.com/all-images/product/Product-Image-1663824560.jpg',
      productImage_2:
        'https://ecstasybd.com/all-images/product/Product-Image-11663824560.jpg',
      productImage_3:
        'https://ecstasybd.com/all-images/product/Product-Image-21663824560.jpg',
      id: 5,
    },
  ];
  updateQuantity(index: number, quantity: number) {
    this.productQuantity = quantity;
    console.log(this.productQuantity);

    // Quality Update Query
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.calculateTotalValue();
    this.calculateTotalItems();
  }

  productQuantity!: number;
  totalValue: number = 0;
  totalItems: number = 0;

  calculateTotalValue() {
    this.totalValue = 0;
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
  }
}
