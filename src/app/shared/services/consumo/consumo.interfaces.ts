import { Veiculo } from '../veiculos/veiculos.interfaces';

export enum TipoCombustivel {
  DIESEL,
  ETANOL,
  GASOLINA,
}

export interface Consumo {
  Id: number;
  Data: Date;
  Valor: number;
  VeiculoId: number;
  Descricao: string;
  Veiculo: Veiculo;
  Tipo: TipoCombustivel;
}
