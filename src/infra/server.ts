import express, { Request, Response } from 'express';
import { Acessorio, Material, TipoAcessorio } from '../domain/Acessorio';
import { pool, conectarBanco } from './database';

const app = express();
app.use(express.json());


conectarBanco();


app.get('/itens', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM acessorios');
        return res.json(result.rows);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});


app.get('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM acessorios WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Acessório não encontrado' });
        }
        return res.json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar item' });
    }
});


app.post('/item', async (req: Request, res: Response) => {
    try {
        const { nome, preco, material, tipo, tamanho, temPedra, pesoGramas } = req.body;

        
        const novoAcessorio = new Acessorio({
            nome, preco, material, tipo, tamanho, temPedra, pesoGramas
        });

        
        const query = `
            INSERT INTO acessorios (id, nome, preco, material, tipo, tamanho, tem_pedra, peso_gramas)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
        `;
        
        const values = [
            novoAcessorio.id, novoAcessorio.nome, novoAcessorio.preco, 
            novoAcessorio.material, novoAcessorio.tipo, novoAcessorio.tamanho, 
            novoAcessorio.temPedra, novoAcessorio.pesoGramas
        ];

        const result = await pool.query(query, values);
        return res.status(201).json(result.rows[0]);

    } catch (error: any) {
        return res.status(400).json({ error: error.message || 'Erro ao criar acessório' });
    }
});


app.delete('/item/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM acessorios WHERE id = $1', [id]);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao deletar' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});