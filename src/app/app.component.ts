import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  link: string = '';

  checkUrl() {
    return this.link.includes('/admin');
  }

  constructor() {}

  ngOnInit(): void {
    console.log(window.location.href);

    this.link = window.location.href;
  }
}
