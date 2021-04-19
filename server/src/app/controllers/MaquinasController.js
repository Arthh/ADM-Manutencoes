import pool from '../../config/database';

class MaquinasController
 {
  async index(req, res){
    try {
      const allMaquinas = await pool.query(
        "SELECT * FROM maquinas"
      );
      return res.json(allMaquinas.rows);
    }catch(err){
      return res.json({error: 'Erro na requisição!'})
    }
  };

  async store(req, res){
    let { name, setor_id } = req.body;
    name = name.toLowerCase();
    try {
      const newSetor = await pool.query(
        "INSERT INTO maquinas (nome, setor_id) VALUES ($1,$2) ", [name, setor_id]
      );
      return res.send('Cadastrado com sucesso!');
    }catch(err) {
      return res.json({error: 'Maquina já existe'});
    }
  };

  async show(req, res){
    let { id } = req.params;
    try {
      const maquina = await pool.query(
        "SELECT * FROM maquinas WHERE maquinas.id = $1", [id]
      );
      return res.json(maquina.rows[0]);
    }catch(err){
      return res.json({error: 'Maquina não existe'});
    }
  };

  async update(req, res){
    const { id , name } = req.body;
    try {
      const setor = await pool.query(
      "UPDATE maquinas SET nome = $1 WHERE id = $2",
      [name,id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Maquina não encontrada'});
    }
  };

  async delete(req,res){
    const { id } = req.body;
    try {
      const setor = await pool.query(
      "DELETE FROM maquinas WHERE id = $1",
      [id]
      );
      return res.send('Atualizado com sucesso!');
    }catch(err){
      return res.json({error: 'Maquina não encontrada'});
    }
  };

}

export default new MaquinasController
; 