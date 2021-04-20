import pool from '../../config/database';

class UserController {
  async store(req, res){
    const {email, password} = req.body;
    try {
      const user = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",[email]
      )

      if(user.rows.lenght > 0) {
        return {status: 400};
      }

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