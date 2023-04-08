import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private router: Router,
    private service: DatabaseServiceService
  ) {}

  adminLoginData!: any;
  ngOnInit(): void {
    this.service.getAdminCredential().subscribe({
      next: (r) => {
        console.log(r);
        this.adminLoginData = r;
        console.log(this.adminLoginData + 'loginData');
        console.log(r + 'rrrr');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  formSubmit(data: NgForm) {
    console.log(data.value.name + '------' + this.adminLoginData.name);
    console.log(data.value.password + '------' + this.adminLoginData.password);
    this.router.navigate(['/admin/dashbord']);
    // if (
    //   data.value.name === this.adminLoginData.name &&
    //   data.value.password === this.adminLoginData.password
    // ) {
    //   this.router.navigate(['/admin/dashbord']);
    // } else {
    //   alert('User Name Or Password Not Correct');
    // }
  }
}
