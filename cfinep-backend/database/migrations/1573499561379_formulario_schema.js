'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormularioSchema extends Schema {
  up () {
    this.create('formularios', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned().unique()
      table.string('nome').notNullable()
      table.string('usuario_username').notNullable().unique()
      table.string('email').notNullable()
      table.string('telefone').notNullable()
      table.string('orientador').notNullable()
      table.string('nivel_graduacao').notNullable()
      table.string('data_criacao_conta').notNullable()
      table.string('data_para_encerramento_conta').notNullable()
      table.integer('quantidade_cpus').notNullable()
      table.integer('quantidade_nos').notNullable()
      table.integer('quantidade_memoria').notNullable()
      table.text('outros_recursos_computacionais')
      table.text('softwares_solicitados').notNullable()
      table.text('ferramentas_utilizadas').notNullable()
      table.text('linha_pesquisa').notNullable()
      table.text('titulo_projeto').notNullable()
      table.bool('projeto_financiado')
      table.string('agencia_financiadora')
      table.bool('projeto_registrado_ufv')
      table.string('tempo_duracao_projeto_pesquisa').notNullable()
      table.text('resumo_objetivo_projeto_pesquisa').notNullable()
      table.text('metodologias_utilizadas').notNullable()
      table.text('outras_informacoes')
      table.timestamps()
      
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('formularios')
  }
}

module.exports = FormularioSchema
