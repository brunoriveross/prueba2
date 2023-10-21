import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApibdService } from 'src/app/services/bd/apibd.service';


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
    private ApibdService: ApibdService
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
