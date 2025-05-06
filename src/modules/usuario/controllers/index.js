import UsuarioModel from "../models/index.js";

class UsuarioController{
    static async cadastrar(id_usuario, nome, email, profissao){
        try {
            if(!id_usuario || !nome || !email || !profissao){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const usuario = await UsuarioModel.cadastrar(id_usuario, nome, email, profissao);
        } catch (error) {
            console.log('Erro ao criar usuario', error.message);
        }
    }

    static async buscarPorEmail(email){
        try {
            const usuario = await UsuarioModel.buscarPorEmail(email);
            if(usuario.length === 0){
                return console.error('Usuário não encontrado!');
            }
            console.log('Usuário: ');
            return usuario
        } catch (error) {
            console.log('Erro ao listar usuário', error.message);
        }
    }

    static async atualizarUsuario(id_usuario, nome, email, profissao){
        try {
            if(!id_usuario || !nome || !email || !profissao){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const usuario = await UsuarioModel.atualizarUsuario(id_usuario, nome, email, profissao);
            if(usuario.length === 0){
                return console.error('Usuário não encontrado!');
            }

            console.log('Usuário atualizado com sucesso!');
            return usuario

        } catch (error) {
            console.log('Erro ao atualizar usuário', error.message);
        }
    }

    static async excluirUsuario(email){
        try {
            const usuario = UsuarioModel.buscarPorEmail(email);
            if(usuario.length === 0){
                return console.error('Usuário não encontrado.');
            }

            await UsuarioModel.excluirUsuario(email);

        } catch (error) {
            console.log('Erro ao deletar usuário', error.message);
        }
    }
}

export default UsuarioController;