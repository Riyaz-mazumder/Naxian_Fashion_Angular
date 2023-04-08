import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private service: DatabaseServiceService
  ) {}

  loggedIn!: any;
  userName!: any;
  cartItems = 0;
  theUser!: any;

  ngOnInit(): void {
    // logIn
    this.loggedIn = this.authService.getUser();
    this.userName = JSON.parse(this.loggedIn).name;

    // the the user
    this.service.getTheUser(JSON.parse(this.loggedIn).id).subscribe({
      next: (r) => {
        this.theUser = r;
      },
      error: (e) => {
        alert(e);
      },
    });

    //add to card
    if (this.theUser !== undefined) {
      this.cartItems = 1;
    }
    console.log(this.cartItems);
  }

  deleteUser() {
    sessionStorage.removeItem(this.authService.USER_KEY);
    alert('You Have Logged Out: ');
  }
}
