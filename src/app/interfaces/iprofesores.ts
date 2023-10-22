export interface Iprofesores {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    idAsignatura: number[]; // Un arreglo de IDs de asignaturas
    foto: string;
}
