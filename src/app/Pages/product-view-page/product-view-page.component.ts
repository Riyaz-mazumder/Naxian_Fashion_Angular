import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckOutPageComponent } from 'src/app/common/check-out-page/check-out-page.component';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss'],
})
export class ProductViewPageComponent implements OnInit {
  constructor(
    private service: DatabaseServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthServiceService
  ) {}

  productIndividual!: any;
  id: any;
  loggedIn!: any;
  ngOnInit() {
    this.loggedIn = this.authService.getUser();
    this.id = this.route.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe({
      next: (r) => {
        this.productIndividual = r;
        console.log(this.productIndividual);
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }

  redirectToBuyPage() {
    if (this.loggedIn === null) {
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    } else {
      const dialogRef = this.dialog.open(CheckOutPageComponent, {
        data: this.productIndividual,
      });

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log(`Dialog result: ${result}`);
      // });
    }
  }
}
