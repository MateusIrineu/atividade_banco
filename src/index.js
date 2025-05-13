import PromptSync from "prompt-sync";
import UsuarioView from "./modules/usuario/views/index.js";
import EstacaoView from "./modules/estacoes/views/index.js";
import ReservasView from "./modules/reservas/views/index.js";
import CriarTabelas from "./config/criar_tabela.js";

const input = PromptSync();

async function criarTabela(){
    try {
        await CriarTabelas.usuarios();
        await CriarTabelas.estacoes();
        await CriarTabelas.reservas();

    } catch (error) {
        console.log('Erro ao criar tabelas', error.message);
    }
}

async function menu() {
    await criarTabela();

    const opcoes = [
        "1 - Menu Usuários",
        "2 - Menu Estações",
        "3 - Menu Reservas",
        "0 - Sair"
    ];

    let opcao;
    do {
        
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await menuUsuarios();
                break;
            case "2":
                await menuEstacoes();
                break;
            case "3":
                await menuReservas();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuUsuarios() {
    await criarTabela();

    const opcoes = [
        "1 - Cadastrar Usuário",
        "2 - Buscar Usuário",
        "3 - Atualizar Usuário",
        "4 - Excluir Usuário",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await UsuarioView.cadastrar();
                break;
            case "2":
                await UsuarioView.buscarPorEmail();
                break;
            case "3":
                await UsuarioView.atualizarUsuario();
                break;
            case "4":
                await UsuarioView.excluirUsuario();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuEstacoes() {
    await criarTabela();

    const opcoes = [
        "1 - Cadastrar Estação",
        "2 - Buscar Estação",
        "3 - Atualizar Estação",
        "4 - Excluir Estação",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await EstacaoView.cadastrar();
                break;
            case "2":
                await EstacaoView.buscarPorCodigo();
                break;
            case "3":
                await EstacaoView.atualizarEstacao();
                break;
            case "4":
                await EstacaoView.excluirEstacao();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuReservas() {
    await criarTabela();

    const opcoes = [
        "1 - Cadastrar Reserva",
        "2 - Verificar Reserva",
        "3 - Listar Reserva",
        "4 - Atualizar Status",
        "5 - Cancelar Reserva",
        "6 - Gerar Relatório por Usuário",
        "7 - Gerar Relatório das Estações mais utilizadas",
        "0 - Sair"
    ];

let opcao;
do {
    console.log(opcoes.join("\n"));
    opcao = input("Escolha a opção desejada: ");

    switch (opcao) {
        case "0":
            console.log("Saindo...");
            break;
        case "1":
            await ReservasView.cadastrar();
            break;
        case "2":
            await ReservasView.verificarReserva();
            break;
        case "3":
            await ReservasView.listarReserva();
            break;
        case "4":
            await ReservasView.atualizarStatus();
            break;
        case "5":
            await ReservasView.cancelarReserva();
            break;
        case "6":
            await ReservasView.relatorioTotalHoras();
            break;
        case "7":
            await ReservasView.relatorioEstacoesMaisUtilizadas();
            break;

         default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while (opcao !== "0");
}

menu();
