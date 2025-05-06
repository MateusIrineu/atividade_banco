import UsuarioController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class UsarioView{
    static async cadastrar(){
        const id_usuario = input("Digite o id do usuário: ");
        const nome = input("Digite o nome do usuário: ");
        const email = input("Digite o e-mail do usuário: ");
        const profissao = input("Digite a profissão do usuário: ");
        const usuario = await UsuarioController.cadastrar(id_usuario, nome, email, profissao)
        console.table(usuario);
    }

    static async buscarPorEmail(){
        const email = input("Digite o e-mail do usuário: ");
        const usuario = await UsuarioController.buscarPorEmail(email);
        console.table(usuario);
    }

    static async atualizarUsuario(){
        const id_usuario = input("Digite o novo id do usuário: ");
        const nome = input("Digite o novo nome do usuário: ");
        const email = input("Digite o novo e-mail do usuário: ");
        const profissao = input("Digite a nova profissão do usuário: ");
        const usuario = await UsuarioController.atualizarUsuario(id_usuario, nome, email, profissao);
        console.table(usuario);
    }

    static async excluirUsuario(){
        const email = input("Digite o e-mail do usuário: ");
        const usuario = await UsuarioController.buscarPorEmail(email);
        console.table(usuario);
    }
}

export default UsuarioView;