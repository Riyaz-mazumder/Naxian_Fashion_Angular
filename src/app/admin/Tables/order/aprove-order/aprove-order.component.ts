import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-aprove-order',
  templateUrl: './aprove-order.component.html',
  styleUrls: ['./aprove-order.component.scss'],
})
export class AproveOrderComponent implements OnInit {
  constructor(private service: DatabaseServiceService) {}
  allProducts!: any;

  ngOnInit(): void {
    this.service.getAllUnApprovedOrders().subscribe({
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

  onApprove(obj: any) {
    this.service.makeOrderApproved(obj.id).subscribe({
      next: (r) => {
        alert('The Order Has been Approved...');
        this.ngOnInit();
      },
      error: (e) => {
        alert('Something went wrong try again');
      },
    });
  }
  onDenied(obj: any) {
    alert('The Order Has been Denied...');
  }
}
