<template>
  <div class="animated fadeIn">
    <!-- Data Table -->
    <div data-app="true">
      <v-container grid-list-md fluid>
        <v-layout wrap>
          
          <v-flex d-flex xs12 sm6 md6>
              <b-card-body>
                <h1>CLUSTER<strong>FINEP</strong></h1> 
                <p class="text-muted">Sistema para controle e acesso do cluster finep na UFV</p>
              </b-card-body>            
          </v-flex>

          <v-flex d-flex xs12 sm6 md6>
            <v-card flat>
              <v-card-text style="align: center">
                <!-- <h2 align="center" style="color: blue; font-style: italic;">Seja bem-vindo ao sistema do SIA</h2> -->
                <img src="@/assets/sia-images/ufv-logo.png" alt="sia-logo" style="width:90px">
              </v-card-text>
            </v-card>
          
          </v-flex>

          <v-flex d-flex xs12 sm6 md6>
            <v-card flat>
              <v-card-title>
                <v-flex d-flex xs12 sm6 md12>
                 <h3 ><strong>Funcionalidades do sistema</strong></h3>
                </v-flex>
              </v-card-title>

              <v-card-text >
                <ul>
                  <li><b>Informações do sistema</b></li>
                  <li><b>Uso do ambiente</b></li>
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
    document.title = "SIA - Home"    
  },

  //methods
  methods: {
  }
}
</script>
