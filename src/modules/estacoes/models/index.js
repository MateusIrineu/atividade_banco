import client from "../../../config/database.js";

class EstacaoModel{
    static async cadastrar(id_estacao, identificador, localizacao, recursos){
        const dados = [id_estacao, identificador, localizacao, recursos]
        const consulta = `insert into estacoes(id_estacao, identificador, localizacao, recursos) 
        values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    } 

    static async buscarPorCodigo(id_estacao){
        const dados = [id_estacao]
        const consulta = `select * from estacoes where id_estacao = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarEstacao(id_estacao, identificador, localizacao, recursos){
        const dados = [id_estacao, identificador, localizacao, recursos]
        const consulta = `update estacoes set identificador = $2, localizacao = $3, recursos = $4 where id_identificador = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async excluirEstacao(id_estacao){
        const dados = [id_estacao]
        const consulta = `delete from estacoes where id_estacao = $1;`
        await client.query(consulta, dados);
    }
}

export default EstacaoModel;