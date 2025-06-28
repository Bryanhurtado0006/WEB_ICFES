// app/Models/Usuario.ts
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true, columnName: 'IdentificacionUsuario' }) // ← corregido
  declare IdentificacionUsuario: number

  @column({ columnName: 'NumeroIdentidadUsuario' })
  declare NumeroIdentidadUsuario: number

  @column({ columnName: 'Nombre' })
  declare Nombre: string

  @column({ columnName: 'Apellido' })
  declare Apellido: string

  @column({ columnName: 'TipoDeDocumento' })
  declare TipoDeDocumento: string

  @column({ columnName: 'Email' })
  declare Email: string

  @column({ columnName: 'Password' })
  declare Password: string

  @column({ columnName: 'Institucion' })
  declare Institucion: string

  @column({ columnName: 'NumeroIdentidadAdministrador' })
  declare NumeroIdentidadAdministrador: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
