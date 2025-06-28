import usuarios from '../models/usuario.js'
export default class UsuariosService{

    //Metoodo Crear
    async crear (datos) {
        return await usuarios.create(datos)
    }
    //Metodo Listar
    async listar () {
        return await usuarios.query()
    }
    //Metodo Listar Por Id
    async listarId(NumeroIdentidadUsuario) {
        return await usuarios.query().where('NumeroIdentidadUsuario',NumeroIdentidadUsuario)
    }
    //Metodo Actualizar
    async actualizar (NumeroIdentidadUsuario:number, datos: {Nombre,Apellido,TipoDeDocumento,Email,Password,Institucion,NumeroIdentidadAdministrador}) {
        const lista = await usuarios.find(NumeroIdentidadUsuario)
        lista.Nombre=datos.Nombre
        lista.Apellido=datos.Apellido
        lista.TipoDeDocumento=datos.TipoDeDocumento
        lista.Email=datos.Email
        lista.Password=datos.Password
        lista.Institucion=datos.Institucion
        lista.NumeroIdentidadAdministrador=datos.NumeroIdentidadAdministrador
        await lista.save()
        return lista
    }
    //Metodo Eliminar
    async eliminar (NumeroIdentidadUsuario: Number){
        const encontrado=await usuarios.find(NumeroIdentidadUsuario)
        if(encontrado){
            await encontrado.delete()
            return "Eliminado"
        }
        else {
            return "No Eliminado"
        }
    }
 async conteo() {
        const resultado = await usuarios.query().count('* as total')
        return resultado[0].$extras.total
    }
}