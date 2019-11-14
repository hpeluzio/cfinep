<template>
  <div class="animated fadeIn">

      
 <div v-if="submitted && errors.has('defaulterror2')" style="color: red" class="container">{{ errors.first('defaulterror2') }}</div>
<!-- Data Table -->
<div data-app="true">
    <v-toolbar flat color="white">
      <i class="icon-people"></i> <strong> Formulários</strong>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
    </v-toolbar>

    <!-- Data Table -->
    <v-data-table
      :headers="headers"
      :items="formularios"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      :search="search"
      
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <!--<td>{{ props.item.name }}</td>-->
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.nome }}</td>
        <td class="text-xs-left">{{ props.item.usuario_username }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left layout px-4">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <!-- <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon> -->
        
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        <div style="color: red">Sua procura por <strong>"{{ search }}"</strong> não achou resultados.</div>
      </v-alert>
    </v-data-table>
    <v-flex xs12 sm12 md12>
      <center>
        <!-- <v-btn class="primary" color="blue" @click="handleSubmit">Salvar Formulário</v-btn> -->
        <v-btn class="primary" color="black" @click="jsreport">
          
          <v-icon color="white" large @click="jsreport()">archive</v-icon>
             Baixar todos os Formulários em PDF
        </v-btn>
        <!-- <v-btn class="primary" color="red" @click="limparFormulario">Limpar Formulário</v-btn> -->
        <!-- <v-icon color="blue" large @click="imprimir()">print</v-icon> -->
      </center>
    </v-flex>
  </div>
  <!-- Data Table -->
  </div>
</template>

<script>
import http_api from '@/http/api'
import { mapGetters, mapActions } from 'vuex'
// const helpers = require('../../helpers')

export default {
    data: () => ({
      submitted: false,
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'nome' },
        { text: 'Username', value: 'usuario_username' },
        { text: 'E-mail', value: 'email' },
        { text: 'Ações', value: 'name', sortable: false }
      ],
      rowsPerPageItems: [10, 20, 50, 100],
      pagination: {
          rowsPerPage: 10
      },
    }),

    computed: {
      ... mapGetters('formulario', {
        formularios: 'formularios'
      }),
    },

    watch: {

    },

    created () {
      document.title = "CFINEP - Formulários"
      //Atualizando o estado dos formularios
      this.GET_FORMULARIO_ALL_ACT()
    },

    //methods
    methods: {
      ... mapActions('formulario', [
          'GET_FORMULARIO_ALL_ACT',
          'GET_FORMULARIO_PDF_ACT'
        ]
      ),

      jsreport() {
        this.GET_FORMULARIO_PDF_ACT(true)
      },

      // getAxiosArrayFormularios() {
      //   //Pegando todos formularios 
      //   http_api({
      //       method:'get',
      //       url: '/formulario_all'
      //   })
      //   .then(response => {
          
      //     this.$store.state.formulario.formularios = response.data
      //     console.log('formsss: ', this.formularios)
      //   })
      //   .catch((error) => {
      //       console.log(error);
      //   });
      // },

      editItem (item) {
        this.$router.push({ path: `/admin/edit_form/${item.id}` })
      },

      deleteItem (item) {

      },

      // //Custom filter da datatable
      // customFilter(items, search, filter, headers) {
      //   //Normalizando a search
      //   if (search.trim() === "") return items;
      //   search = helpers.normaliza(search).trim();

      //   return items.filter(item => {
      //     if (helpers.normaliza(item.matricula).includes(search)) return item;
      //     if (helpers.normaliza(item.nome).includes(search)) return item;
      //     if (helpers.normaliza(item.curso).includes(search)) return item;
      //     if (helpers.normaliza(item.instituto).includes(search)) return item;
      //     if (helpers.normaliza(item.email).includes(search)) return item;
      //     if(search.includes('ativo') && item.ativo !== null)
      //       return item
      //   });
      // },      

    }
  }
</script>
