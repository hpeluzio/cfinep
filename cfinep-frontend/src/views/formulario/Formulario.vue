<template>
  <div class="animated fadeIn">
    <!-- Data Table -->
    <div data-app="true">
      <v-container grid-list-md fluid>
        <v-card flat class="noprint">
          <v-card-title>
            <v-flex d-flex xs12 sm12 md12>
              <v-card flat>
                <v-card-text>
                  <h4>FORMULÁRIO PARA CRIAÇÃO DE USUÁRIO NO CLUSTER</h4>
                  <p class="text-muted">A partir desse formulário será avaliado a criação ou não do usuário no cluster de acordo com as políticas de uso do mesmo.</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-card-title>

          <!-- FORM -->
          <!-- nome -->
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('nome')"
                    style="color: red"
                  >{{ errors.first('nome') }}</div>
                  <v-text-field
                    outline
                    v-model="form.nome"
                    label="Nome do usuário"
                    data-vv-name="nome"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('nome') }"
                  ></v-text-field>
                </v-flex>

                <!-- usuario_username -->
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('usuario_username')"
                    style="color: red"
                  >{{ errors.first('usuario_username') }}</div>
                  <v-text-field
                    outline
                    v-model="form.usuario_username"
                    label="Username"
                    data-vv-name="usuario_username"
                    v-validate="'required|alpha'"
                    :class="{ 'is-invalid': submitted && errors.has('usuario_username') }"
                  ></v-text-field>
                </v-flex>

                <!-- email -->
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('email')"
                    style="color: red"
                  >{{ errors.first('email') }}</div>
                  <v-text-field
                    outline
                    v-model="form.email"
                    label="E-mail"
                    data-vv-name="email"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid': submitted && errors.has('email') }"
                  ></v-text-field>
                </v-flex>

                <!-- telefone -->
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('telefone')"
                    style="color: red"
                  >{{ errors.first('telefone') }}</div>
                  <v-text-field
                    outline
                    v-model="form.telefone"
                    label="Telefone"
                    data-vv-name="telefone"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('telefone') }"
                  ></v-text-field>
                </v-flex>

                <!-- orientador -->
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('orientador')"
                    style="color: red"
                  >{{ errors.first('orientador') }}</div>
                  <v-text-field
                    outline
                    v-model="form.orientador"
                    label="Nome do Orientador"
                    data-vv-name="orientador"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('orientador') }"
                  ></v-text-field>
                </v-flex>

                <!-- nivel_graduacao -->
                <v-flex xs12 sm6 md4>
                  <div
                    v-if="submitted && errors.has('nivel_graduacao')"
                    style="color: red"
                  >{{ errors.first('nivel_graduacao') }}</div>

                  <v-text-field
                    outline
                    v-model="form.nivel_graduacao"
                    label="Nível (IC, Mestrado, doutorado)/Programa"
                    data-vv-name="nivel_graduacao"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('nivel_graduacao') }"
                  ></v-text-field>
                </v-flex>

                <!-- data_para_encerramento_conta -->
                <v-flex xs12 sm6 md6>
                  <div
                    v-if="errors.has('data_para_encerramento_conta')"
                    style="color: red"
                  >{{ errors.first('data_para_encerramento_conta') }}</div>
                  <v-menu
                    v-model="menudata"
                    :close-on-content-click="false"
                    full-width
                    max-width="290"
                  >
                    <v-text-field
                      slot="activator"
                      :value="computedDateFormattedMomentjs"
                      clearable
                      outline
                      prepend-icon="event"
                      label="Data prevista para o encerramento da conta"
                      data-vv-name="data_para_encerramento_conta"
                      v-validate="'required'"
                      :class="{ 'is-invalid': errors.has('form-sessao.data')}"
                    ></v-text-field>
                    <v-date-picker
                      color="green lighten-1"
                      locale="pt-br"
                      no-title
                      scrollable
                      v-model="form.data_para_encerramento_conta"
                      @change="menudata = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>

                <!-- quantidade_cpus -->
                <v-flex xs12 sm6 md6>
                  <div
                    v-if="submitted && errors.has('quantidade_cpus')"
                    style="color: red"
                  >{{ errors.first('quantidade_cpus') }}</div>
                  <v-text-field
                    outline
                    v-model="form.quantidade_cpus"
                    label="Quantidade de CPUs que pretende utilizar"
                    data-vv-name="quantidade_cpus"
                    v-validate="'required|integer'"
                    :class="{ 'is-invalid': submitted && errors.has('quantidade_cpus') }"
                  ></v-text-field>
                </v-flex>

                <!-- quantidade_nos -->
                <v-flex xs12 sm6 md6>
                  <div
                    v-if="submitted && errors.has('quantidade_nos')"
                    style="color: red"
                  >{{ errors.first('quantidade_nos') }}</div>
                  <v-text-field
                    outline
                    v-model="form.quantidade_nos"
                    label="Quantidade de NÓS que pretende utilizar"
                    data-vv-name="quantidade_nos"
                    v-validate="'required|integer'"
                    :class="{ 'is-invalid': submitted && errors.has('quantidade_nos') }"
                  ></v-text-field>
                </v-flex>

                <!-- quantidade_memoria -->
                <v-flex xs12 sm6 md6>
                  <div
                    v-if="submitted && errors.has('quantidade_memoria')"
                    style="color: red"
                  >{{ errors.first('quantidade_memoria') }}</div>
                  <v-text-field
                    outline
                    v-model="form.quantidade_memoria"
                    label="Quantidade de MEMÓRIA que pretende utilizar"
                    data-vv-name="quantidade_memoria"
                    v-validate="'required|integer'"
                    :class="{ 'is-invalid': submitted && errors.has('quantidade_memoria') }"
                  ></v-text-field>
                </v-flex>

                <!-- outros_recursos_computacionais -->
                <v-flex xs12 sm12 md12>
                  <v-textarea
                  
                    outline
                    v-model="form.outros_recursos_computacionais"
                    label="Outros recursos computacionais a serem utilizados"
                  ></v-textarea>
                </v-flex>

                <!-- softwares_solicitados -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('softwares_solicitados')"
                    style="color: red"
                  >{{ errors.first('softwares_solicitados') }}</div>
                  <v-textarea
                    outline
                    v-model="form.softwares_solicitados"
                    label="Softwares a serem utilizados ou solicitados para instalação"
                    data-vv-name="softwares_solicitados"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('softwares_solicitados') }"
                  ></v-textarea>
                </v-flex>

                <!-- ferramentas_utilizadas -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('ferramentas_utilizadas')"
                    style="color: red"
                  >{{ errors.first('ferramentas_utilizadas') }}</div>
                  <v-textarea
                    outline
                    v-model="form.ferramentas_utilizadas"
                    label="Ferramentas/linguagens utilizadas"
                    data-vv-name="ferramentas_utilizadas"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('ferramentas_utilizadas') }"
                  ></v-textarea>
                </v-flex>

                <!-- linha_pesquisa -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('linha_pesquisa')"
                    style="color: red"
                  >{{ errors.first('linha_pesquisa') }}</div>
                  <v-textarea
                    outline
                    v-model="form.linha_pesquisa"
                    label="Linha de Pesquisa"
                    data-vv-name="linha_pesquisa"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('linha_pesquisa') }"
                  ></v-textarea>
                </v-flex>

                <!-- titulo_projeto -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('titulo_projeto')"
                    style="color: red"
                  >{{ errors.first('titulo_projeto') }}</div>
                  <v-textarea
                    outline
                    v-model="form.titulo_projeto"
                    label="Título do Projeto"
                    data-vv-name="titulo_projeto"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('titulo_projeto') }"
                  ></v-textarea>
                </v-flex>

                <!-- projeto_financiado -->
                <v-flex xs12 sm12 md12>
                  <v-switch
                    color="blue"
                    v-model="form.projeto_financiado"
                    :label="`Projeto Financiado (Sim/Não)`"
                  ></v-switch>
                </v-flex>

                <!-- agencia_financiadora -->
                <v-flex xs12 sm12 md12 v-show="form.projeto_financiado">
                  <div></div>
                  <v-text-field
                    outline
                    v-model="form.agencia_financiadora"
                    label="Se sim, nome da agência financiadora"
                  ></v-text-field>
                </v-flex>

                <!-- projeto_registrado_ufv -->
                <v-flex xs12 sm12 md12>
                  <v-switch
                    color="blue"
                    v-model="form.projeto_registrado_ufv"
                    :label="`Projeto Registrado na UFV (Sim/Não)`"
                  ></v-switch>
                </v-flex>

                <!-- tempo_duracao_projeto_pesquisa -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('tempo_duracao_projeto_pesquisa')"
                    style="color: red"
                  >{{ errors.first('tempo_duracao_projeto_pesquisa') }}</div>
                  <v-text-field
                    outline
                    v-model="form.tempo_duracao_projeto_pesquisa"
                    label="Tempo de duração do projeto de pesquisa (Ex: 1 Ano)"
                    data-vv-name="tempo_duracao_projeto_pesquisa"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('tempo_duracao_projeto_pesquisa') }"
                  ></v-text-field>
                </v-flex>

                <!-- resumo_objetivo_projeto_pesquisa -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('resumo_objetivo_projeto_pesquisa')"
                    style="color: red"
                  >{{ errors.first('resumo_objetivo_projeto_pesquisa') }}</div>
                  <v-textarea
                    outline
                    v-model="form.resumo_objetivo_projeto_pesquisa"
                    label="Resumo/Objetivo do projeto de pesquisa"
                    data-vv-name="resumo_objetivo_projeto_pesquisa"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('resumo_objetivo_projeto_pesquisa') }"
                  ></v-textarea>
                </v-flex>

                <!-- metodologias_utilizadas -->
                <v-flex xs12 sm12 md12>
                  <div
                    v-if="submitted && errors.has('metodologias_utilizadas')"
                    style="color: red"
                  >{{ errors.first('metodologias_utilizadas') }}</div>
                  <v-textarea
                    outline
                    v-model="form.metodologias_utilizadas"
                    label="Metodologias utilizadas"
                    data-vv-name="metodologias_utilizadas"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('metodologias_utilizadas') }"
                  ></v-textarea>
                </v-flex>

                <!-- outras_informacoes -->
                <v-flex xs12 sm12 md12>
                  <v-textarea
                    outline
                    v-model="form.outras_informacoes"
                    label="Outras Informações"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-btn class="primary" color="orange" @click="close">Cancelar</v-btn> -->
            <v-flex xs12 sm12 md12>
              <center>
                <v-btn class="primary" color="blue" @click="handleSubmit">Salvar Formulário</v-btn>
                <v-btn class="primary" color="black" @click="jsreport">
                  Baixar Formulário em PDF
                  <v-icon color="white" large @click="jsreport()">archive</v-icon>
                </v-btn>
                <v-btn class="primary" color="red" @click="limparFormulario">Limpar Formulário</v-btn>
                <!-- <v-icon color="blue" large @click="imprimir()">print</v-icon> -->
              </center>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import http_api from '@/http/api'
import http_jsreport from '@/http/jsreport'
import moment from 'moment'
// const helpers = require('../../helpers')
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    submitted: false,
    menudata: false,
  }),

  created() {
    document.title = 'CFINEP - Formulario'
    // console.log('form: ', this.$store.getters['formulario/form'])
    // console.log('teste formulario: ', this.$store.state)
    //console.log('ID: ', this.$store.state.formulario)
    console.log('API_CALL_FORMULARIO: ')
    //this.API_CALL_FORMULARIO()
    // this.$store.state.formulario.form.id = ''
    // console.log('token: ', this.$store.getters['auth/token'])
    //console.log('teste: ', this.$store)
  },

  computed: {
    ... mapGetters('formulario', {
      form: 'form'
    }),
    // filterTrabalhosInstituto() {
    //   if (this.filtroTrabalhoInstituto === '') return this.trabalhos

    //   if (this.filtroTrabalhoInstituto !== '') {
    //     return this.trabalhos.filter(trabalho => {
    //       if (this.filtroTrabalhoInstituto == trabalho.instituto)
    //         return trabalho
    //     })
    //   }
    // },
    computedDateFormattedMomentjs() {
      return this.form.data_para_encerramento_conta
        ? moment
            .utc(this.form.data_para_encerramento_conta)
            .format('DD/MM/YYYY')
        : ''
    }
  },

  methods: {
    ... mapActions('formulario', [
        'SET_FORMULARIO_ACT', 
        'UPDATE_FORMULARIO_ACT', 
        'API_CALL_FORMULARIO', 
        'RESET_FORMULARIO_ACT',
        'GET_FORMULARIO_PDF_ACT'
      ]
    ),

    imprimir() {
      window.print()
    },

    jsreport() {
      this.GET_FORMULARIO_PDF_ACT(this.form)
    },

    handleSubmit(e) {
      console.log('form handleSubmit: ', this.form)
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.save()
        }
      })
    },

    changeLocale() {
      this.$vuetify.lang.current = 'pt'
    },

    save() {
      // console.log('SAVE')
      console.log('SAVE FORM', this.$store.state.formulario)
      if(this.form.id == null)
        this.SET_FORMULARIO_ACT().then( _ => { })
      else if (this.form.id !=  null)
        this.UPDATE_FORMULARIO_ACT().then( _ => { })
      // console.log('form: ', this.form)
    },

    limparFormulario(){
      this.RESET_FORMULARIO_ACT()
    }

  }
}
</script>
<style>
@media screen {
  .noscreen {
    display: none;
  }
}

@media print {
  @page :first {
    margin: 0;
  }

  @page {
    size: A4;
    margin: 0;
    margin-top: 1.5cm;
  }

  .noprint {
    display: none;
  }

  .pagebreak {
    page-break-after: always;
  }
}

.alturaelargura {
  max-width: 22.5cm;
  min-width: 22.5cm;
}

.sialogo {
  font-size: 50px;
  color: cornflowerblue;
  align-content: center;
  text-align: center;
  padding: 2px;
  font-family: 'Times New Roman', Times, serif;
}

.ufv {
  font-size: 25px;
  align-content: center;
  text-align: center;
  vertical-align: baseline;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.apresentacao {
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
}

.conteudo1 {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 16px;
}

.conteudo2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
}

.comentarios {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 16px;
  height: 125px;
  vertical-align: text-top;
}
</style>

