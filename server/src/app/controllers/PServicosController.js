import pool from '../../config/database';

class PServicosController {
  async index(req, res){
    try {
      const allPServicos = await pool.query(
        "SELECT * FROM prestadoresservico"
      );
      return res.json(allPServicos.rows);
    }catch(err){
      return res.json({error: 'Erro na requisição!'})
    }
  };

  async store(req, res){
    let { name, cnpj, telefone, representante } = req.body;
    name = name.toLowerCase();
    try {
      const newPServico = await pool.query(
        "INSERT INTO prestadoresservico (nome, cnpj, telefone, representante) VALUES ($1, $2, $3, $4)",
         [name, cnpj,telefone, representante]
      );
      return res.send('Cadastrado com sucesso!');
    }catch(err) {
      return res.json({error: 'Prestador de serviço já existe'});
    }
  };

  async show(req, res){
    let { id } = req.params;
    try {
      const pServico = await pool.query(
        "SELECT * FROM prestadoresservico WHERE prestadoresservico.id = $1", [id]
      );
      return res.json(pServico.rows[0]);
    }catch(err){
      return res.json({error: 'Prestador de serviço não existe'});
    }
  };

  async update(req, res){
    const { id , name, cnpj, telefone, representante } = req.body;
    try {
      const pServico = await pool.query(
      "UPDATE prestadoresservico SET nome = $1, cnpj = $2, telefone = $3, representante = $4 WHERE id = $5",
      [name, cnpj, telefone, representante, id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Prestador de serviço não existe'});
    }
  };

  async delete(req,res){
    const { id } = req.params;
    try {
      const pServico = await pool.query(
      "DELETE FROM prestadoresservico WHERE id = $1",
      [id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Prestador de serviço não existe'});
    }
  };

}

export default new PServicosController; 