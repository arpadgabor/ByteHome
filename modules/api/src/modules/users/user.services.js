const Users = require('./user.models')
const { Roles } = require('../auth/auth.models')

const find = async ({ key, value, op = '=' }, relation = '') =>
  await Users.query().withGraphFetched(relation).where(key, op, value)

const findByEmail = async (email, relation = '') =>
  await Users.query().withGraphFetched(relation).where('email', email).first()

const findById = async (id, relation = '') =>
  await Users.query().withGraphFetched(relation).findById(id)

const create = async (user) => await Users.query().insert(user)

const remove = async (id) => await Users.query().deleteById(id)

const findRole = async (role = 'user') =>
  await Roles.query().where('name', role).first()

module.exports = {
  find,
  findByEmail,
  findById,
  create,
  remove,
  findRole,
}
