import { Pool } from 'pg';


export const pool = new Pool({
  host: process.env.DB_HOST || 'postgres-db',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || 'senha123',
  database: process.env.DB_NAME || 'loja_acessorios',
  port: 5432,
});


export const conectarBanco = async () => {
  try {
    const client = await pool.connect();
    console.log('Conectado ao Postgres com sucesso!');
    
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS acessorios (
        id UUID PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        preco DECIMAL(10, 2) NOT NULL,
        material VARCHAR(50) NOT NULL,
        tipo VARCHAR(50) NOT NULL,
        tamanho VARCHAR(50),
        tem_pedra BOOLEAN,
        peso_gramas DECIMAL(10, 2)
      );
    `);
    console.log('Tabela "acessorios" verificada/criada.');
    client.release();
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
};