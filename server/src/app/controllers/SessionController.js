import pool from '../../config/database';

import authConfig from '../../config/auth';
import { sign } from 'jsonwebtoken';

class SessionController {
  async create(req, res){
    const {email, password} = req.body;


    const user = await pool.query(
      "SELECT * FROM usuarios WHERE usuarios.email = $1 LIMIT 1",  [email]
    );

    if(!user.rows.length){
      return res.status(401).json({error: 'usuario invalido'});
    }
    const myUser = user.rows[0];

    if(myUser.password !== password){
      return res.status(401).json({error: 'senha invalida'});
    }

    const userId = String(myUser.id);

    const token = sign({}, authConfig.secret, {
      subject: userId,
      expiresIn: authConfig.expiresIn,
    });

    return res.json({token, myUser});
  }
};


export default new SessionController; 