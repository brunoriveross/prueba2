import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  scannedResult: any;
  content_visibility = '';
  
  constructor() { }

  ngOnInit() {
  }

}
