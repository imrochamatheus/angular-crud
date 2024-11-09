import { Veiculo } from '../veiculos/veiculos.interfaces';

export enum Perfil {
  ADMINISTRADOR,
  USUARIO,
}

export interface Usuario {
  id?: number;
  nome: string;
  password: string;
  perfil: Perfil;
  veiculos: Veiculo[];
}

export namespace UserInterfaces {
  export namespace Send {
    export type Create = Pick<Usuario, 'nome' | 'password' | 'perfil'>;
  }

  export namespace Receive {
    export type Create = Omit<Usuario, 'password'>;
  }
}
