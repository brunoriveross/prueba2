import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartahome',
  templateUrl: './cartahome.component.html',
  styleUrls: ['./cartahome.component.scss'],
})
export class CartahomeComponent implements OnInit {

  @Input() titulo!: string;
  @Input() descripcion!: string;
  constructor() { }

  ngOnInit() { }

}
