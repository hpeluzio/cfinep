<template>
  <div class="animated fadeIn">
    <!-- Data Table -->
    <div data-app="true">
      <v-container grid-list-md fluid>
        <v-layout wrap>

          <v-flex d-flex xs12 sm12 md12>
            <v-card flat>
              <v-card-title>
              </v-card-title>

              <v-card-text >
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

                <br>
                <h5>Encerramento das Contas</h5>
                <p>
Exceto quando por ocasião da renovação, as contas se encerram, de forma automática, imediatamente após a expiração. Ou, quando o respectivo usuário solicita o encerramento, que neste caso ocorre imediatamente após a solicitação.
                </p>

                <br>
                <h5>Citação em Publicações</h5>
                <p>
A todo e qualquer usuário do AQUILES cabe o dever de incluir em quaisquer publicações oriundas dos projetos aqui desenvolvidos, mesmo que parcialmente, a seguinte frase (ou o equivalente no idioma da publicação): Pesquisa desenvolvida com o apoio do Laboratório de Computação Científica (CCiP-Lab), da Universidade Federal de Viçosa – Campus Rio Paranaíba (UFV-CRP).
                </p>


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
