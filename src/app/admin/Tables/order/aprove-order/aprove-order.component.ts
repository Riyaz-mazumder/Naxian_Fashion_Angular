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
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  onApprove(obj: any) {
    alert('The Order Has been Approved...');
  }
  onDenied(obj: any) {
    alert('The Order Has been Denied...');
  }
}
