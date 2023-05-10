import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  oneData!: any;
  myForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditProductComponent>,
    private service: DatabaseServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.oneData = data;
  }

  ngOnInit(): void {
    console.log(this.oneData);
    this.myForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      offerPrice: new FormControl(null),
      regularPrice: new FormControl(null),
      description: new FormControl(null),
      quantity: new FormControl(null),
      category: new FormControl(null),
      subCate: new FormControl(null),
      manufacture: new FormControl(null),
      productSize: new FormControl(null),
      productColor: new FormControl(null),
      weight: new FormControl(null),
      productImage_1: new FormControl(null),
      productImage_2: new FormControl(null),
      productImage_3: new FormControl(null),
      couponCode: new FormControl(null),
    });
    this.myForm.setValue({
      id: this.oneData.id,
      name: this.oneData.name,
      offerPrice: this.oneData.offerPrice,
      regularPrice: this.oneData.regularPrice,
      description: this.oneData.description,
      quantity: this.oneData.quantity,
      category: this.oneData.category,
      subCate: this.oneData.subCate,
      manufacture: this.oneData.manufacture,
      productSize: this.oneData.productSize,
      productColor: this.oneData.productColor,
      weight: this.oneData.weight,
      productImage_1: this.oneData.productImage_1,
      productImage_2: this.oneData.productImage_2,
      productImage_3: this.oneData.productImage_3,
      couponCode: this.oneData.couponCode,
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.myForm.value);
    this.service.editProduct(this.myForm.value).subscribe((r) => {});
    alert('Product Updated');
    this.close();
  }
}
