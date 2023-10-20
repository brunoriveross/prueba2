export interface Iasignaturas {
    id: number;
    nombre: string;
    seccion: string;
    profe?: string; // La propiedad "profe" es opcional en algunos objetos
    foto: string;
  }