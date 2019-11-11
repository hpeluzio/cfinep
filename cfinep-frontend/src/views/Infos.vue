<template>
  <div class="animated fadeIn">
    <!-- Data Table -->
    <div data-app="true">
      <v-container grid-list-md fluid>
        <v-layout wrap>
          
          <v-flex d-flex xs12 sm12 md12>
              <b-card-body>
                <h1>Informações sobre o cluster <strong></strong></h1> 
                <!-- <p class="text-muted">Sistema para controle e acesso do cluster finep na UFV</p> -->
              </b-card-body>            
          </v-flex>



          <v-flex d-flex xs12 sm12 md12>
            <v-card flat>
              <v-card-title>
                <v-flex d-flex xs12 sm6 md12>
                 <h3 ><strong>Hardware</strong></h3>
                </v-flex>
              </v-card-title>

              <v-card-text >

                <ul>
                  <li><b>Quantos nós</b></li>
                  <li><b>Hardware dos nós</b></li>
                </ul>

                <br>
                <br>
                <h3 ><strong>Software</strong></h3>
                <ul>
                  <li><b>Softwares aqui</b></li>
                  <li><b>Softwares aqui</b></li>
                </ul>

              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
  }),

  created() {
    document.title = "CFINEP - Infos"    
  },

  //methods
  methods: {
  }
}
</script>
