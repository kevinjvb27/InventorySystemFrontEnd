export interface User {
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    codigorol: number;
    fechacreacion: string;
    fechamodificacion: string;
}

export type UserInput = Omit<User, 'fechacreacion' | 'fechamodificacion'>;
