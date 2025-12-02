import { v4 as uuidv4 } from 'uuid';


export type Material = 'OURO' | 'PRATA';
export type TipoAcessorio = 'ANEL' | 'COLAR' | 'PULSEIRA' | 'BRINCO';

export class Acessorio {
  public readonly id: string;
  public nome: string;
  public preco: number;
  public material: Material;
  public tipo: TipoAcessorio;
  public tamanho?: string;
  public temPedra: boolean;
  public pesoGramas?: number;

  constructor(props: Omit<Acessorio, 'id'>, id?: string) {
    this.id = id || uuidv4();
    this.nome = props.nome;
    this.preco = props.preco;
    this.material = props.material;
    this.tipo = props.tipo;
    this.tamanho = props.tamanho;
    this.temPedra = props.temPedra;
    this.pesoGramas = props.pesoGramas;

    this.validar();
  }

  
  private validar() {
    if (this.preco < 0) {
      throw new Error('O preço do acessório não pode ser negativo.');
    }
  }
}