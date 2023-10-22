export interface Ialumnos {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    carrera: string;
    foto: string;
    idAsignatura?: number[];
    rol: string; // Agrega el campo "rol" para indicar si es "alumno" o "profesor"
  }
  