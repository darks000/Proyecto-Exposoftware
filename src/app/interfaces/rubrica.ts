import { Asignatura } from './asignatura';

export interface Rubrica {
    id:string;
    nombre:string;
    asignaturaId:string;
    preguntas:string[];
}
