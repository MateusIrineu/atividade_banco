import ReservasController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class ReservasView{
    static async cadastrar(){
        const id_reserva = input("Digite o ID da reserva: ");
        const data_reserva = input("Digite a data da reserva: ");
        const hora_inicio = input("Digite o horário de início da reserva: ");
        const hora_fim = input("Digite o horário de fim da reserva: ");
        const status = input("Digite o status da reserva: ");
        const id_usuario = input("Digite o ID da usuário: ");
        const id_estacao = input("Digite o ID da estação: ");
        const reserva = await ReservasController.cadastrar(id_reserva, data_reserva, hora_inicio, hora_fim, status, id_usuario, id_estacao)
        console.table(reserva);
    }

    static async verificarReserva(){
        const id_estacao = input("Digite o ID da estação: ");
        const reserva = await ReservasController.verificarReserva(id_estacao);
        console.table(reserva);
    }

     static async listarReserva(){
        const id_estacao = input("Digite o ID da estação: ");
        const reserva = await ReservasController.listarReserva(id_estacao);
        console.table(reserva);
    }

    static async atualizarStatus(){
        const status = input("Digite o novo status da reserva(ativo / concluído / cancelado): ");
        const reserva = await ReservasController.atualizarStatus(status);
        console.table(reserva);
    }

        static async cancelarReserva(){
        const status = input("Digite a razão para o cancelamento da reserva: "); // duvidas
        const reserva = await ReservasController.cancelarReserva(status);
        console.table(reserva);
    }

    static async relatorioTotalHoras(){
        const id_usuario = input("Digite o ID da usuário: ");
        const reserva = await ReservasController.relatorioTotalHoras(id_usuario);
        console.table(reserva);
    }

    static async relatorioEstacoesMaisUtilizadas(){
        const maisUtilizadas = await ReservasController.relatorioEstacoesMaisUtilizadas();
        console.table(maisUtilizadas);
    }
}

export default ReservasView;