import { Component } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss'],
})
export class ShowOrderComponent {
  constructor(private service: DatabaseServiceService) {}
  allProducts!: any;

  ngOnInit(): void {
    this.service.getAllOrders().subscribe({
      next: (r) => {
        this.allProducts = r;
        console.log(r);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.allProducts);
  }
}
