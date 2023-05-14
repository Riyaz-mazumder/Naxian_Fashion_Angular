import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 

// ...

ngAfterViewInit() {
  var map = L.map('map').setView([23.752023,90.4246051], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([23.752023,90.4246051]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
}


  constructor(){}

  ngOnInit(): void {
    
  }



}
