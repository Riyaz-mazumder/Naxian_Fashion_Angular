import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent implements OnInit {
  allProducts!: any;

  constructor(private service: DatabaseServiceService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe({
      next: (r) => {
        this.allProducts = r;
      },
      error: (e) => {
        alert(e);
      },
    });
  }
  onDelete(id: any) {
    this.service.deleteUser(id).subscribe((r) => {
      alert('User has been Deleted' + ' ' + r);
    });
    this.ngOnInit();
  }
}
