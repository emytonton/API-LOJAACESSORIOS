import { Acessorio } from "./Acessorio";

export interface AcessorioRepository {
  salvar(acessorio: Acessorio): Promise<void>;
  listarTodos(): Promise<Acessorio[]>;
  buscarPorId(id: string): Promise<Acessorio | null>;
  excluir(id: string): Promise<void>;
}