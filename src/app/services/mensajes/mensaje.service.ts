import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  mensajeToast(icon: SweetAlertIcon, msj:string, tiempo: number, posi: SweetAlertPosition) {
    const Toast = Swal.mixin({
      toast: true,
      position: posi,
      showConfirmButton: false,
      timer: tiempo,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: msj
    })
  }



}
