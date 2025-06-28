import Route  from "@adonisjs/core/services/router";
import UsuarioConroller from "#controllers/UsuariosController";

const User = new UsuarioConroller()

Route.post('/Usuarios',User.crearUsuario)
Route.get('/Usuarios',User.listarUsuario)
Route.get('/Usuarios/:NumeroIdentidadUsuario',User.listarUsuarioId)
Route.put('/Usuarios/:NumeroIdentidadUsuario',User.actualizarUsuarios)
Route.delete('/Usuarios/:NumeroIdentidadUsuario',User.eliminarUsuario)
Route.get('/UsuariosConteo', User.conteo)



