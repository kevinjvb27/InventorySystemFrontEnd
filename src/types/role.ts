export interface Role {
    codigorol: string;
    rol: string;
    descripcion: string;
    fechacreacion: string;
  }
  
  export type NewRole = Omit<Role, 'codigorol' | 'fechacreacion'>;