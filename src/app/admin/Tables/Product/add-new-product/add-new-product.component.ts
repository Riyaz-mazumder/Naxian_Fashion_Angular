import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent {
  constructor(private service: DatabaseServiceService) {}

  submit(d: NgForm) {
    console.log(d.value);
    this.service.addNewProduct(d.value).subscribe({
      next: (r) => {
        console.log(r);
      },
      error: (err) => {
        console.log(err);
        alert(err);
      },
    });
    alert('Product Has Been Added');
    d.reset();
  }
}
