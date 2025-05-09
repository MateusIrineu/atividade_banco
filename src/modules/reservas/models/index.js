import client from "../../../config/database.js";

class ReservasModel{
    static async cadastrar(id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao){
        const dados = [id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao]
        const consulta = `insert into reservas(id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao)
        values ($1, $2, $3, $4, $5, $6, $7) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async verificarReserva(id_estacao){
        const dados = [id_estacao]
        const consulta = `select * from reservas where id_estacao = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listarReserva(id_estacao){
        const dados = [id_estacao];
        const consulta = `select count (reservas.id_estacao) as total_reservas_estacoes from estacoes
        join reservas on estacoes.id_estacao = reservas.id_estacao
        where reservas.id_estacao = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarStatus(id_reserva, status){
        const dados = [id_reserva, status]
        const consulta = `update reservas set status = $2 where id_reserva = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async cancelarReserva(id_reserva, status){ 
        const dados = [id_reserva, status]
        const consulta = `update reservas set status = $2 where id_reserva = $1 returning *;`
        await client.query(consulta, dados);
    }

    static async relatorioTotalHoras(hora_inicio, hora_fim){
        const dados = [hora_inicio, hora_fim]
        const consulta = `select sum(extract(epoch from (hora_fim - hora_inicio)))/3600 as total_horas from reservas where hora_inicio >= $ and hora_fim <= $2;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async relatorioEstacoesMaisUtilizadas(){
        const consulta = `select id_estacao, count(*) as total_reservas from reservas group by id_estacao order by total_reservas desc;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }
}

export default ReservasModel;