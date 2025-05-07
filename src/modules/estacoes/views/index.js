import EstacaoController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class EstacaoView{
    static async cadastrar(){
        const id_estacao = input("Digite o ID da estação: ");
        const identificador = input("Digite o identificador da estação: ");
        const localizacao = input("Digite a localização da estação: ");
        const recursos = input("Digite os recursos da estação: ");
        const estacao = await EstacaoController.cadastrar(id_estacao, identificador, localizacao, recursos);
        console.table(estacao);
    }

    static async buscarPorCodigo(){
        const id_estacao = input("Digite o ID da estação: ");
        const estacao = await EstacaoController.buscarPorCodigo(id_estacao);
        console.table(estacao);
    }

    static async atualizarEstacao(){
        const id_estacao = input("Digite o novo ID da estação: ");
        const identificador = input("Digite o novo identificador da estação: ");
        const localizacao = input("Digite a nova localização da estação: ");
        const recursos = input("Digite os novos recursos da estação: ");
        const estacao = await EstacaoController.cadastrar(id_estacao, identificador, localizacao, recursos);
        console.table(estacao);
    }

    static async excluirEstacao(){
        const id_estacao = input("Digite o ID da estação: ");
        const estacao = await EstacaoController.excluirEstacao(id_estacao);
        console.table(estacao);
    }
}

export default EstacaoView;