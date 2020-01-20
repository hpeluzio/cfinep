<template>
    <div class="container">

      <v-dialog v-model="dialog" persistent max-width="65%">
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card>
          <v-card-title class="headline"></v-card-title>
          <v-card-text>
            
            
                <h1><center>POLÍTICA DE USO</center><strong></strong></h1> 


                <h5>Descrição</h5>
                <p>O Laboratório de Computação Científica (CCiP-Lab) da Universidade Federal de Viçosa, Campus Rio Paranaíba, dispõe de um Cluster de Computadores Multiusuário para atender a usuários, que estejam envolvidos em projetos de pesquisa que demandam de computação de alto desempenho. Para atender a essa necessidade, o CCiP-Lab através do projeto AQUILES disponibiliza seus recursos computacionais para grupos de pesquisas e colaboradores, viabilizando simulações computacionais e estudos de problemas científicos e tecnológicos.

A utilização do sistema está condicionada a apresentação de projetos de pesquisa e desenvolvimento que necessitem de computação de alto desempenho. As propostas de trabalho serão analisadas por um comitê constituído por pesquisadores e técnicos do CCiP-Lab, atendendo a critérios de mérito técnico/científico bem como a adequação ao sistema computacional ofertado.

A aquisição e instalação do cluster de computadores do CCiP-Lab foram realizadas por meio de recurso oriundo do projeto Finep CT Infra 01/2013.
                </p>

                <br>
                <h5>Conta de Acesso</h5>
                <p>A conta é o meio de acesso aos recursos disponibilizados pelo administrador do cluster de computadores AQUILES, e o instrumento pelo qual se caracteriza o usuário. Ao receber uma conta, o então usuário declara admitir incondicionalmente a política estabelecida neste documento, bem como conhecer e entender como operar o sistema.
A cada conta no AQUILES está associada uma senha, estabelecida pelo próprio usuário da conta quando do acesso aos sistemas pela primeira vez. Tal senha é intransferível e de caráter estritamente pessoal.

É condição impreterível à abertura da conta sua associação a projeto de pesquisa científica desenvolvido em instituição formalmente reconhecida pelo Ministério da Educação ou pelo Ministério da Ciência e Tecnologia, e coordenado por professor efetivo, ou por pesquisador formalmente vinculado ao quadro funcional da respectiva instituição.
                </p>

                <br>
                <h5>Projeto de Pesquisa</h5>
                <p>
A descrição do projeto de pesquisa, a ser submetida via Formulário de Cadastro de Usuário no momento da requisição da conta, além de outras informações gerais sobre os aspectos científicos do projeto, deve também conter informações detalhadas sobre seus aspectos computacionais -- incluindo aplicações e/ou tecnologias de processamento de alto desempenho empregadas, quantificação de recursos computacionais que sejam particularmente necessários e tempo de execução da parte computacional do projeto.                  
                </p>

                <br>
                <h5>Ambiente Computacional</h5>
                <p>
O conjunto das variáveis de ambiente particular a cada conta e os programas dos quais venha o usuário necessitar devem, sempre ser solicitados ao administrador do cluster, através de correspondência eletrônica (hpeluzio@gmail.com).
                </p>


                <br>
                <h5>Renovação das Contas</h5>
                <p>
As contas expiradas somente serão renovadas por meio de correspondência eletrônica, enviando ao administrador do cluster (hpeluzio@gmail.com) um novo “Formulário de cadastro de usuário”.
                </p>
    </v-row>
                <br>    </v-row>
                <h5>Encerramento d    </v-row>as Contas</h5>
                <p>    </v-row>
Exceto quando por ocasião da renov    </v-row>ação, as contas se encerram, de forma automática, imediatamente após a expiração. Ou, quando o respectivo usuário solicita o encerramento, que neste caso ocorre imediatamente após a solicitação.
                </p>

                <br>
                <h5>Citação em Publicações</h5>
                <p>
A todo e qualquer usuário do AQUILES cabe o dever de incluir em quaisquer publicações oriundas dos projetos aqui desenvolvidos, mesmo que parcialmente, a seguinte frase (ou o equivalente no idioma da publicação): Pesquisa desenvolvida com o apoio do Laboratório de Computação Científica (CCiP-Lab), da Universidade Federal de Viçosa – Campus Rio Paranaíba (UFV-CRP).
                </p>          
          
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" color="red" text @click="recusar()">Recusar</v-btn>
            <v-btn class="primary" color="blue" text @click="dialog = false">Aceitar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Registrar</h1>
                <p class="text-muted">Crie sua conta</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <!-- name -->
                  <b-form-input type="text" 
                          v-model="name" v-validate=" 'required' " 
                          name="name" class="form-control" 
                          :class="{ 'is-invalid': submitted && errors.has('name') }" 
                          placeholder="name"
                  />
                  <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                   <!-- name -->
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <!-- E-MAIL -->
                  <b-form-input type="email" 
                        v-model="email" v-validate="'required|email'" 
                        name="email" class="form-control" 
                        :class="{ 'is-invalid': submitted && errors.has('email') }" 
                        placeholder="E-mail"
                  />
                  <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>  
                  <!-- E-MAIL -->              
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                    <!-- PASSWORD-->
                    <b-form-input type="password" 
                          v-model="password" v-validate="'required|min:6'" 
                          name="password" class="form-control" 
                          :class="{ 'is-invalid': submitted && errors.has('password') }" 
                          placeholder="Senha" ref="password"
                    />
                    <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div> 
                    <!-- PASSWORD-->  
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <!-- CONFIRM PASSWORD-->
                  <b-form-input type="password" 
                          v-model="confirm_password" v-validate="'required|min:6|confirmed:password'" 
                          name="confirm_password" class="form-control"
                          :class="{ 'is-invalid': submitted && errors.has('confirm_password') }" 
                          placeholder="Confirme sua senha" data-vv-as="password"
                    />
                    <div v-if="submitted && errors.has('confirm_password')" class="invalid-feedback">{{ errors.first('confirm_password') }}</div> 
                    <!-- CONFIRM PASSWORD-->    
                </b-input-group>
      
                <div style="color: red" v-if="submitted && errors.has('defaulterror')" ><strong>{{ errors.first('defaulterror') }}</strong></div> 
                
                <b-button variant="success" @click="handleSubmit" block>Criar Conta</b-button>
              </b-form>
            </b-card-body>
            <!--<b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook"><span>facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button"><span>twitter</span></b-button>
                </b-col>
              </b-row>
            </b-card-footer>-->
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      submitted: false,
      dialog: true,
    }
  },

  created() {
    document.title = "CFINEP - Registrar";
  },  

  methods: {
    ... mapActions('auth', ['SET_LOGAR_ACT', 'SET_REGISTER_ACT']),

    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
          if (valid) {
              this.register()
              //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
          }
      });
    },

    register() {
      //Action retornando uma promise... Resolve isso aqui priimeiro, depois vai para then
      this.SET_REGISTER_ACT({
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password
      })        
      .then( response_resolve => {
        // console.log('response_resolve', response_resolve)
        if(response_resolve){
          this.$router.push('/home')
        } 
      }).catch( error => {
        console.log('Error: ', error)
      });
    },

    recusar() {
      console.log('recusar: ')
      this.$router.push('/politicadeuso')
    },    

  }
}
</script>
