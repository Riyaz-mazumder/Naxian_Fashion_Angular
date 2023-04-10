import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../../edit-product/edit-product.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  constructor(
    private service: DatabaseServiceService,
    private dialog: MatDialog
  ) {}
  allProducts!: any;

  ngOnInit() {
    this.service.getAllProducts().subscribe({
      next: (r) => {
        this.allProducts = r;
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }

  onUpdate(d: any) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: d,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onDelete(id: any) {
    this.service.deleteProduct(id).subscribe((r) => {});
    alert('Product Deleted');
    this.ngOnInit();
  }

  //pop up
  openDialog(): void {}
}
