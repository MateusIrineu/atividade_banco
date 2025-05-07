import EstacaoModel from "../models/index.js";

class EstacaoController{
    static async cadastrar(id_estacao, identificador, localizacao, recursos){
        try {
            if(!id_estacao || !identificador || !localizacao || !recursos){
                return console.error('Todos os ampos devem ser preenchidos.');
            }
            const estacao = await EstacaoModel.cadastrar(id_estacao, identificador, localizacao, recursos);
            console.log('Estação criada com sucesso!');
            return estacao;

        } catch (error) {
            console.log('Erro ao criar estação', error.message);
        }
    }

    static async buscarPorCodigo(id_estacao){
        try {
            const estacao = await EstacaoModel.buscarPorCodigo(id_estacao);
            if(estacao.length === 0){
                return console.error('Estação não encontrada!');
            }
            console.log('Estação: ');
            return estacao;
        } catch (error) {
            console.log('Erro ao buscar estação.', error.message);
        }
    }

    static async atualizarEstacao(id_estacao, identificador, localizacao, recursos){
        try {
            if(!id_estacao || !identificador || !localizacao || !recursos){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const estacao = await EstacaoModel.atualizarEstacao(id_estacao, identificador, localizacao, recursos);
            if(estacao.length === 0){
                return console.error('Estação não encontrada.');

            }
        } catch (error) {
            console.log('Erro ao atualizar estação.', error.message);
        }
    }

    static async excluirEstacao(id_estacao){
        try {
            const estacao = EstacaoModel.buscarPorCodigo(id_estacao);
            if(estacao.length === 0){
                return console.error('Estação não encontrada.');
            }

            await EstacaoModel.excluirEstacao(id_estacao);
            console.log('Estação criada com sucesso!');

        } catch (error) {
            console.log('Erro ao excluir estação.', error.message);
        }
    }
}

export default EstacaoController;