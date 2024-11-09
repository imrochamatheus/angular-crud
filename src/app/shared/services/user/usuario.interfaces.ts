import { Veiculo } from '../veiculos/veiculos.interfaces';

export enum Perfil {
  ADMINISTRADOR,
  USUARIO,
}

export interface Usuario {
  Id?: number;
  Nome: string;
  Password: string;
  Perfil: Perfil;
  Veiculos: Veiculo[];
}
