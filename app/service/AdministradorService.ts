import Administradore from "../models/administradore.ts"

export default class AdministradorService {
  // Crear un nuevo administrador
  async crear(data: Partial<Administradore>) {
    const administrador = await Administradore.create(data)
    return administrador
  }

  // Obtener todos los administradores
  async obtenerTodos() {
    return await Administradore.all()
  }

  // Obtener un administrador por ID
  async obtenerPorId(id: number) {
    return await Administradore.find(id)
  }

  // Actualizar un administrador por ID
  async actualizar(id: number, data: Partial<Administradore>) {
    const administrador = await Administradore.findOrFail(id)
    administrador.merge(data)
    await administrador.save()
    return administrador
  }

  // Eliminar un administrador por ID
  async eliminar(id: number) {
    const administrador = await Administradore.findOrFail(id)
    await administrador.delete()
    return { mensaje: 'Administrador eliminado correctamente' }
  }
}
