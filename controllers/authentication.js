import db from "../db.js";

const Register = async (req, res) => {
  try {
    await db.connect();

    const result = await db.query(
      `INSERT INTO users (username, login, password)
      VALUES ($1, $2, $3)`,
      [req.body.username, req.body.login, req.body.password]
    );

    if (result) {
      const response = {
        "result": true,
        "data": "Registro inserido com sucesso"
      };

      res.status(200).json(response);
    }

  } catch (error) {
    res.status(400).json(error);
  }
}

const Login = async (req, res) => {
  try {
    await db.connect();

    const result = await db.query(
      `SELECT * 
      FROM users 
      WHERE login = $1 
      AND password = $2`,
      [req.body.login, req.body.password]
    );

    if (result.rowCount == 1) {
      const response = {
        "success": "true",
        "data": result.rows
      };

      res.status(200).json(response);
    }

  } catch (error) {
    res.status(400).json(error);
  }
}

export { Login, Register };