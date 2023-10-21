import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaqr',
  templateUrl: './generaqr.page.html',
  styleUrls: ['./generaqr.page.scss'],
})
export class GeneraqrPage implements OnInit {

  qrCodeString = 'This is a secret qr code message';

  constructor() { }

  ngOnInit() {
  }

}
