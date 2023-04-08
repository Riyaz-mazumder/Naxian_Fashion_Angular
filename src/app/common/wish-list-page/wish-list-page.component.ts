import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.scss'],
})
export class WishListPageComponent {
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
  WishListProductRemove(id: number) {
    console.log(id);
    // cardProductRemoveQuery;
  }

  WishListToCart(id: number) {
    console.log(id);
    // add To Cart
  }
}