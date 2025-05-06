import dotenv from 'dotenv';
dotenv.config();
import client from './database.js';

class CriarTabelas{
    static async usuarios(){
        const consulta = `create table if not exists usuarios(
        id_usuario integer primary key,
        nome text not null,
        email varchar(100) not null unique,
        profissao text not null
        )`
        await client.query(consulta);
        console.log(`Tabela usuario criada com sucesso`);
    }

    static async estacoes(){
        const consulta = `create table if not exists estacoes(
        id_estacao integer primary key,
        identificador text not null,
        localizacao text not null,
        recursos text not null
        )`
        await client.query(consulta);
        console.log(`Tabela estacoes criada com sucesso`);
    }

    static async reservas(){
        const consulta = `create table if not exists reservas(
        id_reserva integer primary key,
        data_reserva date not null,
        hora_inicio time not null,
        hora_fim time not null,
        status text not null,
        id_usuario references usuario(id_usuario),
        id_estacao references estacoes(id_estacao),
        )`
        await client.query(consulta);
        console.log(`Tabela criada com sucesso`);
    }
}

export default CriarTabelas;