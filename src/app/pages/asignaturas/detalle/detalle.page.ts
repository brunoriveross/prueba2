
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApibdService } from 'src/app/services/bd/apibd.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

   constructor(
    private ApibdService: ApibdService,
    private router: Router,
   
  ) { }

  ngOnInit() {
   
  }

  navigateToQR() {
    // Navegar a la página de detalle dentro del módulo de asignaturas
    this.router.navigate(['asignaturas/detalle/generaqr']);
  }

  ionViewWillEnter() {
   
  }

 
}
