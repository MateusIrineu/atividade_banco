import UsuarioController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class UsuarioView{
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
    const email = input("Digite o e-mail do usuário a ser excluído: ");

    const usuario = await UsuarioController.buscarPorEmail(email);
        if (!usuario) {
            console.log("Usuário não encontrado.");
            return;
        } 

        const resultado = await UsuarioController.excluirUsuario(email);
        if(resultado){
            console.log("Usuário excluído com sucesso!");
        } else {
            console.log("Erro ao excluir o usuário.")
        }
    }     
}

export default UsuarioView;