import { Consumo } from '../consumo/consumo.interfaces';
import { Usuario } from '../user/usuario.interfaces';

export interface VeiculoUsuarios {
  VeiculoId: number;
  Veiculo: Veiculo;
  UsuarioId: number;
  Usuario: Usuario;
}

export interface Veiculo {
  Id?: number;
  Marca: string;
  Modelo: string;
  Placa: string;
  AnoFabricacao: number;
  AnoModelo: number;
  Consumos: Consumo[];
  Usuario: VeiculoUsuarios[];
}
