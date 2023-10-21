import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mensajeUtil: MensajeService) { }

  ngOnInit() {

    this.mensajeUtil.mensajeToast('success','Bienvenido al Sistema',2000,'bottom')
  }

}
