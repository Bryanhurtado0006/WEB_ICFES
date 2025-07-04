import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identificacionUsuario') 

      table.integer('numeroIdentidadUsuario').notNullable().unique()
      table.string('nombre')
      table.string('apellido')
      table.string('tipoDeDocumento').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('institucion').notNullable()
      table.string('numeroIdentidadAdministrador').notNullable()

      // 👉 Agregamos la clave foránea idAdministrador
      table
        .integer('idAdministrador')
        .unsigned()
        .references('idAdministrador')
        .inTable('administradores')
        .onDelete('CASCADE')

     
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}