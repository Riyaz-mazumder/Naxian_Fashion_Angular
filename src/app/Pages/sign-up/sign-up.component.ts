import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private service: DatabaseServiceService,
    private router: Router
  ) {}

  submit(d: NgForm) {
    d.value.card=[]
    this.service.addUser(d.value).subscribe({
      next: (r) => {
        d.reset();
        alert('Account has Been Created, Now Login:');
        this.router.navigate(['/login']);
      },
      error: (e) => {
        alert(e);
      },
    });
  }
}
