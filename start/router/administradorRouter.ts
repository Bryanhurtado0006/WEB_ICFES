import Route from '@adonisjs/core/services/router'
import AdministradorController from '#controllers/AdministradorController'

const administrador = new AdministradorController()

Route.get('/administradores', administrador.obtenerTodos)
Route.get('/administradores/:id', administrador.obtenerPorId)
Route.post('/administradores', administrador.crear)
Route.put('/administradores/:id', administrador.actualizar)
Route.delete('/administradores/:id', administrador.eliminar)
