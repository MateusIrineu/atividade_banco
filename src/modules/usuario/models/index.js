import client from "../../../config/database.js";

class UsuarioModel{
    static async cadastrar(id_usuario, nome, email, profissao){
        const dados = [id_usuario, nome, email, profissao]
        const consulta = `insert into usuarios(id_usuario, nome, email, profissao)
        values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async buscarPorEmail(email){
        const dados = [email]
        const consulta = `select * from usuarios where email = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarUsuario(id_usuario, nome, email, profissao){
        const dados = [id_usuario, nome, email, profissao]
        const consulta = `update usuarios set id_usuario = $1, nome = $2, profissao = $4 where email = $3 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async excluirUsuario(email){
        const dados = [email]
        const consulta = `delete from usuarios where email = $1;`
        await client.query(consulta, dados);
    }
}

export default UsuarioModel;