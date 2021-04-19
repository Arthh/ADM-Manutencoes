import pool from '../../config/database';

class UserController {
  async store(req, res){
    const {email, password} = req.body;
    try {
      const newUser = await pool.query(
        "INSERT INTO usuarios (email,password) VALUES ($1,$2)", [email, password]
        );
        return res.json(newUser);
    }catch(err) {
      return res.json({error: 'usuario já existe'});
    }
  }

}

export default new UserController; 