import AdministradorService from "../service/AdministradorService.ts"

export default class AdministradorController {
  private servicio = new AdministradorService()


  // CTX (CONTEXT) CONTIENE REQUEST, RESPONSE,PARAMS ETC.
  async crear(ctx) {
    try {
      const data = ctx.request.only([
        'nombre',
        'apellido',
        'tipoDeDocumento',
        'numeroIdentidadAdministrador',
        'email',
        'password',
        'direccion',
        'institucion',
      ])
      const administrador = await this.servicio.crear(data)
      return administrador
    } catch (error) {
      console.error('Error al crear administrador:', error)
      return { error: 'No se pudo crear el administrador' }
    }
  }

  async obtenerTodos(ctx) {
    try {
      const administradores = await this.servicio.obtenerTodos()
      return administradores
    } catch (error) {
      console.error('Error al obtener administradores:', error)
      return { error: 'No se pudo obtener la lista de administradores' }
    }
  }

  async obtenerPorId(ctx) {
    try {
      const id = ctx.params.id
      const administrador = await this.servicio.obtenerPorId(id)
      return administrador || { mensaje: 'Administrador no encontrado' }
    } catch (error) {
      console.error('Error al obtener administrador por ID:', error)
      return { error: 'No se pudo obtener el administrador' }
    }
  }

  async actualizar(ctx) {
    try {
      const id = ctx.params.id
      const data = ctx.request.only([
        'nombre',
        'apellido',
        'tipoDeDocumento',
        'numeroIdentidadAdministrador',
        'email',
        'password',
        'direccion',
        'institucion',
      ])
      const administrador = await this.servicio.actualizar(id, data)
      return administrador
    } catch (error) {
      console.error('Error al actualizar administrador:', error)
      return { error: 'No se pudo actualizar el administrador' }
    }
  }

  async eliminar(ctx) {
    try {
      const id = ctx.params.id
      const resultado = await this.servicio.eliminar(id)
      return resultado
    } catch (error) {
      console.error('Error al eliminar administrador:', error)
      return { error: 'No se pudo eliminar el administrador' }
    }
  }
}
