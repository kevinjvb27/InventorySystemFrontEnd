export interface Role {
    codigoRoles: number;
    rol: string;
    descripcion: string;
    fechacreacion?: string;
  }
  
  export type NewRole = Omit<Role, 'codigoRoles' | 'fechacreacion'>;