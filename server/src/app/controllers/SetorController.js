import pool from '../../config/database';

class SetorController {
  async index(req, res){
    try {
      const allSetores = await pool.query(
        "SELECT * FROM setores"
      );
      return res.json(allSetores.rows);
    }catch(err){
      return res.json({error: 'Erro na requisição!'})
    }
  };

  async store(req, res){
    let { name } = req.body;
    name = name.toLowerCase();
    try {
      const newSetor = await pool.query(
        "INSERT INTO setores (nome) VALUES ($1) ", [name]
      );
      return res.send('Cadastrado com sucesso!');
    }catch(err) {
      return res.json({error: 'setor já existe'});
    }
  };

  async show(req, res){
    let { id } = req.params;
    try {
      const setor = await pool.query(
        "SELECT * FROM setores WHERE setores.id = $1", [id]
      );
      return res.json(setor.rows[0]);
    }catch(err){
      return res.json({error: 'Setor não existe'});
    }
  };

  async update(req, res){
    const { id , name } = req.body;
    try {
      const setor = await pool.query(
      "UPDATE setores SET nome = $1 WHERE id = $2",
      [name,id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Setor não encontrado'});
    }
  };

  async delete(req,res){
    const { id } = req.body;
    try {
      const setor = await pool.query(
      "DELETE FROM setores WHERE id = $1",
      [id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Setor não encontrado'});
    }
  };

}

export default new SetorController; 