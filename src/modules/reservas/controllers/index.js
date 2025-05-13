import ReservasModel from "../models/index.js";

class ReservasController{
    static async cadastrar(id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao){
       try {
         if(!id_reserva || !data_reserva || !hora_inicio || !hora_fim || !status || !id_usuario || !id_estacao){
            return console.error('Todos os campos devem ser preenchidos.');
        }
        const reserva = await ReservasModel.cadastrar(id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao)
       } catch (error) {
            console.log('Erro ao criar reserva', error.message);
       }
    }

    static async verificarReserva(id_estacao){
        try {
            const reserva = await ReservasModel.verificarReserva(id_estacao);
            if(reserva.length === 0){
                return console.error('Reserva não encontrada!');
            }
            console.log('Reserva: ');
            return reserva
        } catch (error) {
            console.log('Erro ao listar reserva', error.message);
        }
    }

    static async listarReserva(id_estacao){
        try {
            const reserva = await ReservasModel.listarReserva(id_estacao);
            if(reserva.length === 0){
                return console.error('Reserva não encontrada.');
            }
            console.log('Reserva: ');
            return reserva
        } catch (error) {
            console.log('Erro ao listrar reserva.', error.message);
        }
    }

    static async atualizarStatus(id_estacao, status){
        try {
            if(!status){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const reserva = await ReservasModel.atualizarStatus(id_estacao, status);
            if(reserva.length === 0){
                return console.error('Reserva não encontrada!');
            }
            console.log('Reserva atualiazada com sucesso!');
            return reserva
        } catch (error) {
            console.log('Erro ao atualizar status', error.message);
        }
    }

    static async cancelarReserva(id_estacao, status){
            try {
            if(!status){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const reserva = await ReservasModel.cancelarReserva(id_estacao, status);
            if(reserva.length === 0){
                return console.error('Reserva não encontrada!');
            }
            console.log('Reserva cancelada com sucesso!');
            return reserva
        } catch (error) {
            console.log('Erro ao cancelar reserva', error.message);
        }
    }

    static async relatorioTotalHoras(id_usuario){
        try {
            const total = await ReservasModel.relatorioTotalHoras(id_usuario);
            if(total.length === 0){
                return console.error('Não há relatórios disponíveis.');
            }
            return total
        } catch (error) {
            console.log('Erro ao mostrar relatório', error.message);
        }
    }

    static async relatorioEstacoesMaisUtilizadas(){
        try {
            const total = await ReservasModel.relatorioEstacoesMaisUtilizadas();
            if(total.length === 0){
                return console.error('Não há relatórios disponíveis.');
            }
            return total;
        } catch (error) {
            console.log('Erro ao mostrar relatório.', error.message);
        }
    }
}

export default ReservasController;