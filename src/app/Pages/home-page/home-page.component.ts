import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private service: DatabaseServiceService,
    private authService: AuthServiceService,
    private router: Router,
    private http: HttpClient
  ) {}

  allProducts!: any;
  loggedIn!: any;
  theUser!: any;

  ngOnInit() {
    console.log(this.authService.getUser());
    this.loggedIn = this.authService.getUser();
    console.log(JSON.parse(this.loggedIn));

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

  cardList: any[] = [];
  // Product Clicked
  productClicked(PId: any) {
    // navigate the page
    this.router.navigate(['/productView/' + PId]);
  }

  // Shopping Card Clicked
  shopping(f: string, obj: any) {
    if (this.loggedIn === null) {
      alert('Login Or Create an Account First');
      this.router.navigate(['/login']);
    } else {
      // console.log(JSON.parse(this.loggedIn).id);

      // this.service.getTheUser(JSON.parse(this.loggedIn).id).subscribe({
      //   next: (r) => {
      //     console.log(r + 'rrrrr-------');

      //     this.theUser = r;
      //   },
      //   error: (err) => {
      //     console.log(err);
      //   },
      // });
      // console.log(this.theUser);

      if (f === 'formWishList') {
        // let data;
        // this.http
        //   .get(
        //     `http://localhost:3000/userRegistration/${
        //       JSON.parse(this.loggedIn).id
        //     }`
        //   )
        //   .pipe(
        //     catchError((err) => {
        //       console.error(err);
        //       return throwError(err);
        //     })
        //   )
        //   .subscribe((user: any) => {
        //     const wishList = user.wishList || [];
        //     data = [...wishList, ...obj];
        //   });
        // console.log(data);

        this.http
          .patch(
            `http://localhost:3000/userRegistration/${
              JSON.parse(this.loggedIn).id
            }`,
            { wishList: obj }
          )
          .subscribe((data) => console.log(data));
        // const data = {
        //   name: this.theUser.name,
        //   email: this.theUser.email,
        //   gender: this.theUser.gender,
        //   dob: this.theUser.dob,
        //   password: this.theUser.password,
        //   card: this.theUser.card,
        //   wishList: this.theUser.wishList + obj,
        //   id: this.theUser.id,
        // };
        // console.log(obj);
        // console.log(data);

        // this.service.editUser(this.theUser.id, data).subscribe({
        //   next: (r) => {
        //     console.log(r);
        //   },
        //   error: (e) => {
        //     alert(e);
        //   },
        // });
      } else if (f === 'formCard') {
        // this.http
        //   .get(
        //     `http://localhost:3000/userRegistration/${
        //       JSON.parse(this.loggedIn).id
        //     }`
        //   )
        //   .pipe(
        //     catchError((err) => {
        //       console.error(err);
        //       return throwError(err);
        //     })
        //   )
        //   .subscribe((user: any) => {
        //     const card = user.card;
        //     obj = { card, obj };
        //     console.log('-------', obj);
        //     console.log('-obj------', obj);
        //     this.http
        //       .patch(
        //         `http://localhost:3000/userRegistration/${
        //           JSON.parse(this.loggedIn).id
        //         }`,
        //         { card: obj }
        //       )
        //       .subscribe((data) => console.log(data));
        //   });

        this.http
          .patch(
            `http://localhost:3000/userRegistration/${
              JSON.parse(this.loggedIn).id
            }`,
            { card: obj }
          )
          .subscribe((data) => console.log(data));
        this.ngOnInit();
        // const data = {
        //   name: this.theUser.name,
        //   email: this.theUser.email,
        //   gender: this.theUser.gender,
        //   dob: this.theUser.dob,
        //   password: this.theUser.password,
        //   card: this.theUser.card + obj,
        //   wishList: this.theUser.wishList,
        //   id: this.theUser.id,
        // };
        // console.log(obj);
        // console.log(data);
        // this.service.editUser(this.theUser.id, data).subscribe({
        //   next: (r) => {
        //     console.log(r);
        //   },
        //   error: (e) => {
        //     alert(e);
        //   },
        // });
      }
    }
  }
}
