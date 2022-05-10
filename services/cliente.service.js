const boom = require('@hapi/boom');

const pool = require('../libs/mysql.pool');
// Get a Promise wrapped instance of that pool
const promisePool = pool.promise();

class ProyectosService {
  constructor() {
  }

  async create(data) {
    let sql = `INSERT INTO clientes (nombre, apellido, telefono, usuario_id) VALUES (?, ?, ?, ?);`;
    const values = [];
    values.push(data.nombre, data.apellido, data.telefono, data.usuario_id )
    const rta = await promisePool.query(sql, values);
      const newProyecto = {
        id: rta[0].insertId,
        ...data
      }
      return newProyecto;
  }

  async find() {
    const [rows] = await promisePool.query("SELECT * FROM clientes");
    return rows;
  }

  async findOne(id) {
    const [rows] = await promisePool.execute('SELECT * FROM clientes WHERE id = ?', [id]
    );
    if (rows.length === 0) {
      throw boom.notFound('Cliente no encontrado!');
    }
    return rows;
  }

  async update(id, changes) {
    let sql = `UPDATE clientes set ?  WHERE id = ${id}`;
    await promisePool.query(sql, [changes]);
    const cliente = await this.findOne(id);
    return cliente
  }

   async delete(id) {
    await this.findOne(id);
    let sql = `DELETE FROM clientes WHERE id = ${id}`;
    await promisePool.query(sql);
    return `eliminado satisfactoriamente con id = ${id} `;
  }
}

module.exports = ProyectosService;
