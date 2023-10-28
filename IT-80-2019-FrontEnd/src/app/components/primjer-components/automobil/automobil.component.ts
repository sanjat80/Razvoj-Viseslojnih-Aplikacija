import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobil',
  templateUrl: './automobil.component.html',
  styleUrls: ['./automobil.component.css']
})
export class AutomobilComponent implements OnInit {
//constructor injektuje zavisnosti kao autowired i pravi instancu klase, ovde mozemo navesti zeljene propertije
  constructor() { }
  
//ngOnInit inicijalizuje propertije ove klase
  ngOnInit(): void {

  }

}
