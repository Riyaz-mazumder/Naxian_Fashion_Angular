import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.scss'],
})
export class CheckOutPageComponent implements OnInit {
  amountToPay = 0;
  oneData!: any;
  theUser!: any;
  theUserId!: any;
  constructor(
    private authService: AuthServiceService,
    private service: DatabaseServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<CheckOutPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.oneData = data;
  }

  ngOnInit() {
    this.theUser = this.authService.getUser();
    console.log(this.oneData);
    this.theUserId = JSON.parse(this.theUser);
  }

  submit(data: NgForm) {
    data.value.theOrders = this.oneData;
    data.value.customers = this.authService.getUser();
    console.log(data.value);

    this.service.addOrder(data.value).subscribe({
      next: (r) => {
        console.log(r);
      },
      error: (e) => {
        console.log(e);
      },
    });
    alert(
      'Your Order Has Been Submitted. Tanks For Shopping With Us. ❤️ Buy More'
    );
    data.reset();
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }
}
