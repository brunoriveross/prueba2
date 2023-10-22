import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApibdService } from 'src/app/services/bd/apibd.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas: any[] = [];

  constructor(
    private router:Router,
    private http: HttpClient,
    private ApibdService: ApibdService,
    private mensajeUtil: MensajeService
  ) { }

  ionViewWillEnter() {
    this.ApibdService.ListAsignaturas().subscribe((data: any) => {
      this.asignaturas = data;
    },
    (error) => {
      console.error('Error al cargar asignaturas:', error);
    });
  }

  ngOnInit() {
    this.mensajeUtil.mensajeToast('info','Selecciona tu Asignatura',2000,'bottom')
    this.ApibdService.ListAsignaturas().subscribe((data: any) => {
      this.asignaturas = data;
    },
    (error) => {
      console.error('Error al cargar asignaturas:', error);
    });
  }
  navigateTodetalle() {
    // Navegar a la página de detalle dentro del módulo de asignaturas
    this.router.navigate(['asignaturas/detalle']);
  }


}
