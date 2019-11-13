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
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left layout px-2">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
          <v-icon
            small
            @click="ativarAvaliador(props.item)"
          >
            done_outline
          </v-icon>          
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        <div style="color: red">Sua procura por <strong>"{{ search }}"</strong> não achou resultados.</div>
      </v-alert>
    </v-data-table>
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
        { text: 'E-mail', value: 'email' },
        { text: 'Ações', value: 'name', sortable: false }
      ],
      //formularios: [],
      editedItem: {
        id: '',
        nome: '',
        email: '',
      },
      defaultItem: {
        id: '',
        nome: '',
        email: '',
      },
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
      //Pegando todos Formularios
      // this.getAxiosArrayFormularios()
      this.GET_FORMULARIO_ALL_ACT()
    },

    //methods
    methods: {
      ... mapActions('formulario', [
          'GET_FORMULARIO_ALL_ACT'
        ]
      ),

      getAxiosArrayFormularios() {
        //Pegando todos formularios 
        http_api({
            method:'get',
            url: '/formulario_all'
        })
        .then(response => {
          
          this.$store.state.formulario.formularios = response.data
          console.log('formsss: ', this.formularios)
        })
        .catch((error) => {
            console.log(error);
        });
      },

      editItem (item) {
        console.log('item: ', item)
        // this.editedIndex = this.formularios.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        // this.dialog = true
      },

      deleteItem (item) {
        //Setando algumas variaveis para uso do delete
        const index = this.formularios.indexOf(item)

        // Confirmando && enviando o ... as duas linhas abaixo estão atreladas
        confirm('Está certo que deseja deletar este item?') &&
        http_api({
            method: 'delete',
            url: '/avaliador/'+ item.id +'',
          })
          .then(response => {
            this.getAxiosArrayformularios()
          })
          .catch((error) => {
            this.errors.add({ field: 'defaulterror2', msg: 'Erro ao deletar item' })
          })

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
