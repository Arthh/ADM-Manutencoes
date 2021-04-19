import pool from '../../config/database';

class OrdManutencaoController{
  async index(req, res){
    try {
      const allOrdManutencao = await pool.query(
        "SELECT * FROM ordemmanutencao"
      );
      return res.json(allOrdManutencao.rows);
    }catch(err){
      return res.json({error: 'Erro na requisição!'})
    }
  };
  
  async store(req, res){
    let { maquina_id, prestador_id, descricao, responsavel, preco, status, data } = req.body;
    try {
      const newOrdManutencao = await pool.query(
        "INSERT INTO ordemmanutencao (maquina_id, prestador_id, descricao, responsavel, preco, status, data) VALUES ($1, $2, $3, $4, $5, $6, $7)",
         [maquina_id, prestador_id, descricao, responsavel, preco, status, data]
      );
      return res.send('Cadastrado com sucesso!');
    }catch(err) {
      return res.json({error: 'Erro de requisição'});
    }
  };

  async show(req, res){
    let { id } = req.params;
    try {
      const newOrdManutencao = await pool.query(
        "SELECT * FROM ordemmanutencao WHERE prestadoresservico.id = $1",
       [id]
      );
      return res.json(newOrdManutencao.rows[0]);
    }catch(err){
      return res.json({error: 'Erro de requisição'});
    }
  };

  async update(req, res){
    let { id, maquina_id, prestador_id, descricao, responsavel, preco, status, data } = req.body;
    try {
      const ordManu = await pool.query(
      "UPDATE ordemmanutencao SET maquina_id = $1, prestador_id = $2, descricao = $3, responsavel = $4, preco = $5, status = $6, data = $7 WHERE id = $8",
      [maquina_id, prestador_id, descricao, responsavel, preco, status, data, id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Ordem de serviço não existe'});
    }
  };

  async delete(req,res){
    const { id } = req.body;
    try {
      const ordManu = await pool.query(
      "DELETE FROM ordemmanutencao WHERE id = $1",
      [id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Ordem de serviço não existe'});
    }
  };

}

export default new OrdManutencaoController
; 