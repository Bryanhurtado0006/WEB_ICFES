import UsuarioService from "../service/UsuariosService.js"

//Instancia
const usuarioService = new UsuarioService()

export default class UsuarioConroller {
    async crearUsuario ({ request, response }) {
        try {
            const { NumeroIdentidadUsuario,Nombre,Apellido,TipoDeDocumento,Email,Password,Institucion,NumeroIdentidadAdministrador } = request.body()
            const nuevo = await usuarioService.crear({ NumeroIdentidadUsuario,Nombre,Apellido,TipoDeDocumento,Email,Password,Institucion,NumeroIdentidadAdministrador })
            return response.json ({ msj: "datos creados", datos:nuevo})
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async listarUsuario ({ request, response}) {
        try {
            const list = await usuarioService.listar()
            return response.json({ msj: list })
        }catch (error) {
            return response.json({error: error.message})
        }
    }

    async listarUsuarioId ({ params, request, response }) {
        try {
            const NumeroIdentidadUsuario = params.NumeroIdentidadUsuario
            const listarId = await usuarioService.listarId(NumeroIdentidadUsuario)
            return response.json({ mensaje: listarId })
        }catch (error) {
            return response.json ({ error: error.message })
        }
    }
    async actualizarUsuarios ({ params, request, response }) {
        try {
            const NumeroIdentidadUsuario = params.NumeroIdentidadUsuario
            const { Nombre,Apellido,TipoDeDocumento,Email,Password,Institucion,NumeroIdentidadAdministrador } = request.body()
            const listado = await usuarioService.actualizar(NumeroIdentidadUsuario,{Nombre,Apellido,TipoDeDocumento,Email,Password,Institucion,NumeroIdentidadAdministrador})
            return response.json({msj:listado})
        }
        catch (eror) {
            return response.json({eror:eror.message})
        }
    }
    async eliminarUsuario({ params, request, response}){
        try{
            const NumeroIdentidadUsuario=params.NumeroIdentidadUsuario
            const resp=await usuarioService.eliminar(NumeroIdentidadUsuario)
            return response.json({msj:resp})
        }
        catch (error) {
            return response.json({error:error.message})
        }
    }
        // Método Conteo
    async conteo ({ response }) {
        try {
            const total = await usuarioService.conteo()
            return response.json({ total })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

}