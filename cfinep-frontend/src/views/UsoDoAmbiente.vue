<template>
  <div class="animated fadeIn">
    <!-- Data Table -->
    <div data-app="true">
      <v-container grid-list-md fluid>
        <v-layout wrap>
          

          <v-flex d-flex xs12 sm12 md12>
            <v-card flat>
              <!-- <v-card-title>
                <v-flex d-flex xs12 sm6 md12>
                 <h3 ><strong>USO DO AMBIENTE</strong></h3>
                </v-flex>
              </v-card-title> -->

              <v-card-text >


<h1>Uso do Ambiente</h1>

<p class="western">Este documento está dividido em duas partes:</p>
<ul>
  <li class="western">
    A primeira parte, relacionada ao Uso do ambiente do Cluster da UFV mostra
    como realizar uma Conexão remota ao Cluster, como realizar a Transferência
    de arquivos e como fazer a Submissão de trabalhos ao Cluster.
  </li>
  <li class="western">
    A segunda parte está relacionada ao uso de módulos (Environment Modules). É
    mostrada a Utilização Básica de módulos e são mostrados Exemplos de
    utilização. Por fim, é mostrado como Carregar módulos no login.
  </li>
</ul>
<p class="western"><strong>1. Uso do ambiente do Cluster da UFV</strong></p>
<p class="western">
  O acesso remoto somente poderá ser feito por meio de equipamentos internos ao
  campus da UFV, de Florestal ou de Rio Paranaíba com a utilização do protocolo
  <i>ssh</i> (<i>Secure Shell</i>). Pode-se usar o programa PuTTY, tanto em
  ambiente Linux como em ambiente Windows. Como em Linux é mais comum o uso do
  comando de linha <i>ssh</i>, o programa PuTTY somente será apresentado para
  <i>Windows</i>.
</p>
<p class="western"><strong>1.1. Conexão remota ao Cluster</strong></p>
<p class="western">
  <strong>1.1.1. Em ambiente Linux (uso em Linha de comando)</strong>
</p>
<p class="western">
  Se o computador já possuir o ssh instalado, digite o comando a seguir e tecle
  <strong>[Enter]:</strong>
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #c20cb9; font-weight: bold;">ssh</span> <span style="color: #660033;">-X</span> usuario<span style="color: #000000; font-weight: bold;">@</span>jupiter.dti.ufv.br</pre>
      </td>
    </tr>
  </table>
</div>

<p class="western" align="JUSTIFY">
  onde, <em>&lt;usuario&gt;</em> deve ser substituído pelo identificador do seu
  usuário.
</p>
<p class="western">
  Após teclar <b>[Enter]</b><b> </b>será solicitada a sua senha de acesso.
</p>
<p class="western">
  Se o computador não possuir o ssh, você deve instalá-lo para o acesso ao
  Cluster. Os exemplos a seguir mostram como instalar o ssh em alguns
  distribuições linux:
</p>
<p class="western">
  <strong>1.1.1.1. Debian e seus derivados (Ubuntu, etc)</strong>
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">apt-get install</span> openssh-client</pre>
      </td>
    </tr>
  </table>
</div>

<p><strong>1.1.1.2. OpenSUSE</strong></p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #c20cb9; font-weight: bold;">su</span> <span style="color: #666666; font-style: italic;">#para entrar como usuário root</span>
zypper <span style="color: #000000; font-weight: bold;">in</span> openssh</pre>
      </td>
    </tr>
  </table>
</div>

<p><strong>1.1.2 Em ambiente Windows (PuTTY)</strong></p>
<p>
  A conexão remota ao Cluster da UFV em ambiente Windows pode ser feita através
  do software PuTTY. PuTTY é um cliente SSH open source para a plataforma
  Windows. Através do PuTTY você conecta remotamente ao Cluster da UFV. Você
  pode fazer o download deste software aqui.<br />
  Execute o programa <a href="http://www.putty.org" target="_blank">PuTTY</a>,
  clicando no ícone do respectivo programa, e uma janela como a seguinte será
  aberta:
</p>
<p>
  <img
    class="aligncenter size-full wp-image-170"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-6.jpg"
    alt="uso-do-ambiente-imagem-6"
    width="465"
    height="447"
  />
</p>
<p>Na categoria à esquerda, no item <strong>Session:</strong></p>
<p>
  1. No título <strong>Host Name (or IP address)</strong>: digite
  <em>jupiter.dti.ufv.br</em>
</p>
<p>2. No título <strong>Port</strong>: digite 22</p>
<p>3. No título <strong>Connection type</strong>: selecione SSH</p>
<p>4. Tecle <strong>Enter</strong> ou clique em<strong> Open</strong></p>
<p>
  5. Será aberta uma janela do tipo terminal Linux para linha de comando com
  solicitação de seu nome de usuário (<strong>Login as</strong>) e a sua senha
  (<strong>Password</strong>). Nesta janela, digite o nome do seu usuário e a
  sua senha de acesso ao Cluster. Você pode salvar sua seção também, e
  carregá-la toda vez que você queira.
</p>
<p>
  <strong>
    1.1.3 Em ambiente Windows para softwares gráficos (PuTTY + Xming)</strong
  >
</p>
<p>
  Nós podemos rodar programas gráficos em máquinas Linux remotamente e mostrar
  eles em sua máquina Windows. Isso é feito ao rodar duas aplicações em conjunto
  na sua máquina Windows: Xming e PuTTY.
</p>
<p>
  <a href="http://www.putty.org" target="_blank">PuTTY</a> é um cliente SSH open
  source para a plataforma Windows. Através do PuTTY você conecta remotamente ao
  Cluster da UFV. Você pode fazer o download deste software aqui.<br />
  <a href="http://sourceforge.net/projects/xming/" target="_blank">Xming</a>
  torna possível programas gráficos que rodam remotamente serem mostrados em seu
  desktop rodando Windows. Você pode fazer o download deste software
  <a
    href="https://wiki.utdallas.edu/wiki/display/FAQ/X11+Forwarding+using+Xming+and+PuTTY"
    target="_blank"
    >aqui</a
  >.
</p>
<p>
  Após instalar, execute o programa Xming, clicando no ícone do respectivo
  programa. O icone “X” deve estar disponível na Barra de Tarefas do Windows,
  como na imagem abaixo.
  <strong
    >Ele deve ser iniciado antes de configurar a conexão SSH para o acesso ao
    cluster da UFV, caso você precise rodar algum programa gráfico</strong
  >.
</p>
<div id="attachment_171" style="width: 220px" class="wp-caption aligncenter">
  <img
    class="wp-image-171 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-7.png"
    alt="uso-do-ambiente-imagem-7"
    width="210"
    height="30"
  />
  <p class="wp-caption-text">
    Figura 1: Icone &#8220;X&#8221; na Barra de Tarefas do Windows
  </p>
</div>
<p>
  Execute o programa PuTTY, clicando no ícone do respectivo programa, e uma
  janela como a seguinte será aberta:
</p>
<p>
  <img
    class="aligncenter wp-image-170 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-6.jpg"
    alt=""
    width="465"
    height="447"
  />
</p>
<p>Na categoria à esquerda, no item <strong>Session</strong>:</p>
<p>
  6. No título <strong>Host Name (or IP address)</strong>: digite
  jupiter.dti.ufv.br
</p>
<p>7. No título <strong>Port</strong>: digite 22</p>
<p>8. No título <strong>Connection type</strong>: selecione SSH</p>
<p>Na categoria à esquerda, no item <strong>Connection → SSH → X11</strong>:</p>
<p>1. No título <strong>Enable X11 Forwarding</strong>: habilite o box</p>
<p>2. No título <strong>X Display location</strong>: digite localhost:0</p>
<p>
  3. No título<strong> The remote authentication</strong>: selecione
  MIT-Magic-Cookie-1
</p>
<p>
  <img
    class="aligncenter wp-image-172 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-8.jpg"
    alt=""
    width="465"
    height="447"
  />
</p>
<p>4. Volte para o item <strong>Session</strong></p>
<p>5. Tecle <strong>Enter</strong> ou clique em <strong>Open</strong></p>
<p>
  6. Será aberta uma janela do tipo terminal Linux para linha de comando com
  solicitação de seu nome de usuário (<strong>Login as</strong>) e a sua senha
  (<strong>Password</strong>). Nesta janela, digite o nome do seu usuário e a
  sua senha de acesso ao Cluster. Você pode salvar sua seção também, e
  carregá-la toda vez que você queira.
</p>
<p class="western"><strong>1.2. Transferência de arquivos</strong></p>
<p class="western">
  A transferência de arquivos de/para o Cluster pode ser feita de duas formas:
</p>
<ul>
  <li>
    <p class="western">linha de comando: através do comando <em>scp.</em></p>
  </li>
  <li>
    <p class="western">
      janela gráfica: através do protocolo <i>fish</i> e pelo gerenciador de
      arquivos <i>Nautilus</i>, em ambiente linux; e, PuTTY e WinSCP, para
      ambiente Windows.
    </p>
  </li>
</ul>
<p class="western"><strong>1.2.1. Comando scp (linha de comando)</strong></p>
<p class="western"><strong>1.2.1.1. Utilização básica</strong></p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #c20cb9; font-weight: bold;">scp</span> arquivo_1 arquivo_2 ... arquivo_n destino</pre>
      </td>
    </tr>
  </table>
</div>

<p>onde:</p>
<p class="western">
  <em>&lt;arquivo_i&gt;</em> é a identificação do arquivo a ser copiado,
  especificando, se necessário, o caminho completo do arquivo (o caminho padrão
  é o diretório corrente)
</p>
<p class="western">
  <em>&lt;destino&gt;</em> é a identificação do local onde o arquivo será
  gravado, especificando, se necessário, o caminho (o caminho padrão é o
  diretório home do usuário)
</p>
<p class="western"><strong>1.2.1.2. Exemplos</strong></p>
<p class="western">
  <strong
    >Transferir arquivos e diretórios da máquina local para o Cluster</strong
  >
</p>
<ul>
  <li>
    <p class="western">
      Transferindo o arquivo
      <em>&#8216;Documentos/meu_arquivo.txt&#8217;</em> do seu computador
      <span style="font-family: 'Liberation Serif', serif;"
        ><span style="font-size: medium;">pessoal</span></span
      >, ou o computador que se está sendo utilizado no momento, para o Cluster.
      O arquivo &#8216;meu_arquivo.txt&#8217; será gravado dento do diretório
      &#8216;/home/marta/dados/&#8217; do usuário com o identificador
      <em>marta</em>.
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span> Documentos<span style="color: #000000; font-weight: bold;">/</span>meu_arquivo.txt marta<span style="color: #000000; font-weight: bold;">@</span>jupiter.dti.ufv.br:<span style="color: #000000; font-weight: bold;">/</span>home<span style="color: #000000; font-weight: bold;">/</span>marta<span style="color: #000000; font-weight: bold;">/</span>dados<span style="color: #000000; font-weight: bold;">/</span></pre>
          </td>
        </tr>
      </table>
    </div>
  </li>
  <li>
    <p class="western">
      Transferindo todo o diretório <em>&#8216;Documentos/teste&#8217;</em> do
      seu computador
      <span style="font-family: 'Liberation Serif', serif;"
        ><span style="font-size: medium;">pessoal</span></span
      >, ou o computador que se está sendo utilizado no momento, para o Cluster.
      O diretório &#8216;teste&#8217; será gravado dento do diretório
      &#8216;/home/marta/dados/&#8217; do usuário com o identificador
      <em>marta</em>. Observe o flag &#8216;-r&#8217; que é necessário para
      transferir um diretório.
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span> <span style="color: #660033;">-r</span> Documentos<span style="color: #000000; font-weight: bold;">/</span>teste marta<span style="color: #000000; font-weight: bold;">@</span>jupiter.dti.ufv.br:<span style="color: #000000; font-weight: bold;">/</span>home<span style="color: #000000; font-weight: bold;">/</span>marta<span style="color: #000000; font-weight: bold;">/</span>dados<span style="color: #000000; font-weight: bold;">/</span></pre>
          </td>
        </tr>
      </table>
    </div>
  </li>
  <li>
    <p class="western">Explicações adicionais:</p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span> arquivo_1 arquivo_2 ... arquivo_n usuario<span style="color: #000000; font-weight: bold;">@</span>computador:destino</pre>
          </td>
        </tr>
      </table>
    </div>

    <p>onde,</p>
  </li>
</ul>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="199" />
    <col width="426" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;usuario&gt;</p>
      </td>
      <td width="426">
        <p class="western">Nome de usuário no Cluster</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;computador&gt;</p>
      </td>
      <td width="426">
        <p class="western">jupiter.dti.ufv.br</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">
          &lt;arquivo_1&gt; &lt;arquivo_2&gt;&#8230;&lt;arquivo_n&gt;
        </p>
      </td>
      <td width="426">
        <p class="western">
          Identificação do(s) arquivo(s) a ser(em) copiado(s) especificando, se
          necessário, o caminho completo do arquivo (o caminho padrão é o
          diretório corrente)
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;destino&gt;</p>
      </td>
      <td width="426">
        <p class="western">
          Identificação do local onde o arquivo será gravado, especificando o
          caminho completo, se necessário, (o caminho padrão é o diretório
          <i>home</i> do usuário)
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p class="western">
  <strong
    >Transferir arquivos e diretórios do Cluster para a máquina local</strong
  >
</p>
<ul>
  <li>
    <p class="western">
      Transferindo um arquivo do Cluster para o computador que está sendo
      utilizado no momento. Neste caso, deseja-se transferir o arquivo
      <em>/home/marta/dados/meu_arquivo.txt</em>, que está gravado no Cluster,
      para o diretório <em>Documentos/</em> da máquina local.
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span> marta<span style="color: #000000; font-weight: bold;">@</span>jupiter.dti.ufv.br:<span style="color: #000000; font-weight: bold;">/</span>home<span style="color: #000000; font-weight: bold;">/</span>marta<span style="color: #000000; font-weight: bold;">/</span>dados<span style="color: #000000; font-weight: bold;">/</span>meu_arquivo.txt Documentos<span style="color: #000000; font-weight: bold;">/</span></pre>
          </td>
        </tr>
      </table>
    </div>
  </li>
  <li>
    <p class="western">
      Transferindo um diretório do Cluster para o computador que está sendo
      utilizado no momento. Neste caso, deseja-se transferir o diretório
      <em>/home/marta/dados/teste</em>, que está gravado no Cluster, para o
      diretório <em>Documentos/</em> da máquina local. Observe o flag
      &#8216;-r&#8217; que é necessário para transferir um diretório.
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span> <span style="color: #660033;">-r</span> marta<span style="color: #000000; font-weight: bold;">@</span>jupiter.dti.ufv.br:<span style="color: #000000; font-weight: bold;">/</span>home<span style="color: #000000; font-weight: bold;">/</span>marta<span style="color: #000000; font-weight: bold;">/</span>dados<span style="color: #000000; font-weight: bold;">/</span>teste Documentos<span style="color: #000000; font-weight: bold;">/</span></pre>
          </td>
        </tr>
      </table>
    </div>
  </li>
  <li>
    <p class="western">Explicações adicionais:</p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            ><span style="color: #c20cb9; font-weight: bold;">scp</span>  usuario<span style="color: #000000; font-weight: bold;">@</span>computador:arquivo destino</pre>
          </td>
        </tr>
      </table>
    </div>

    <p>onde,</p>
  </li>
</ul>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="199" />
    <col width="426" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;usuario&gt;</p>
      </td>
      <td width="426">
        <p class="western">Nome de usuário no Cluster</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;computador&gt;</p>
      </td>
      <td width="426">
        <p class="western">jupiter.dti.ufv.br</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;arquivo&gt;</p>
      </td>
      <td width="426">
        <p class="western">
          Identificação do arquivo a ser copiado especificando, se necessário, o
          caminho completo do arquivo (o caminho padrão é o diretório
          <i>home</i> do usuário)
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="199">
        <p class="western">&lt;destino&gt;</p>
      </td>
      <td width="426">
        <p class="western">
          Identificação do local onde o arquivo será gravado, especificando o
          caminho completo, se necessário, (o caminho padrão é o diretório
          corrente)
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p class="western">
  <strong>1.2.2. Protocolo <i>fish</i> (janela gráfica)</strong>
</p>
<p class="western">
  O navegador <i>konqueror</i> permite a utilização do protocolo <i>fish</i>. É
  o navegador padrão em sistemas Linux que utilizam interface gráfica KDE.
  Entretanto, pode ser instalado na maioria dos sistemas Linux.
</p>
<p><strong>1.2.2.1. Utilização Básica</strong></p>
<p class="western">
  No navegador <i>konqueror</i> digite na barra de endereços:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        >fish:<span style="color: #000000; font-weight: bold;">//</span>usuario<span style="color: #000000; font-weight: bold;">@</span>computador</pre>
      </td>
    </tr>
  </table>
</div>

<p><strong>1.2.2.2. Exemplo &#8211; ambiente Linux</strong></p>
<p class="western">
  Ao digitar <em>fish://luisa@jupiter.dti.ufv.br</em> na barra de endereços do
  navegador <i>konqueror,</i> irá abrir uma pequena janela solicitando senha do
  usuário <em>&#8216;luisa&#8217;</em> no Cluster (observe a janela abaixo).
  Outra janela será aberta mostrando todos os arquivos do diretório
  <i>home</i> de <em>&#8216;luisa&#8217;</em>, permitindo o arraste numa ou
  noutra direção (do computador do usuário para o Cluster, ou do Clusterpara o
  computador do usuário).
</p>
<p class="western">
  <img
    class="aligncenter wp-image-99 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-1.jpg"
    alt=""
    width="400"
    height="296"
  />
</p>
<p class="western">
  Em sistemas Linux com interface gráfica <i>Gnome</i>, o navegador padrão de
  arquivos, <i>Nautilus</i>, permite conexão via protocolo <i>ssh</i> com
  abertura de janela mostrando os arquivos e admitindo o arraste numa ou noutra
  direção. Para se conectar clique em:
</p>
<p class="source-code-western"><em>Arquivo → Conectar ao servidor</em></p>
<p class="western">
  Em seguida, será aberta uma pequena janela solicitando as informações da
  conexão. Sega os passos abaixo para conectar ao Cluster:
</p>
<p class="western">
  <img
    class="aligncenter wp-image-97 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-2.jpg"
    alt=""
    width="279"
    height="203"
  />
</p>
<ol>
  <li>
    <p class="western">
      No título <b>Tipo de serviço</b>: troque <i>FTP</i> por <i>SSH</i>
    </p>
  </li>
  <li>
    <p class="western">No título <b>Porta</b>: digite 22</p>
  </li>
  <li>
    <p class="western">
      No título <b>Nome do usuário</b>:<b> </b>digite o nome do seu usuário
    </p>
  </li>
  <li>
    <p class="western">Clique em Conectar.</p>
  </li>
</ol>
<p>
  <strong>1.2.2.3. Exemplo &#8211; ambiente <i>Windows</i></strong>
</p>
<p class="western" align="JUSTIFY">
  Em ambiente <em>Windows</em> a transferência de arquivos pode ser feita
  através dos programas<em> PuTTY</em> e <em>WinSCP</em>. Execute o programa
  <em>PuTTY</em>, clicando no ícone do respectivo programa, e uma janela como a
  seguinte será aberta:
</p>
<p>
  <img
    class="aligncenter wp-image-170 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-6.jpg"
    alt=""
    width="465"
    height="447"
  />
</p>
<p style="padding-left: 30px;">
  1. No título <strong>Host Name</strong> (or IP address): digite
  jupiter.dti.ufv.br
</p>
<p style="padding-left: 30px;">2. No título <strong>Port:</strong> digite 22</p>
<p style="padding-left: 30px;">
  3. No título <strong>Connection type:</strong> selecione SSH
</p>
<p style="padding-left: 30px;">
  4. Tecle <strong>Enter</strong> ou clique em <strong>Open</strong>
</p>
<p class="western" align="JUSTIFY">
  Será aberta uma janela do tipo terminal Linux para linha de comando com
  solicitação de seu nome se usuário (<strong>Login as</strong>) e a sua senha
  (<strong>Password</strong>). Nesta janela, digite o nome do seu usuário e a
  sua senha de acesso ao Cluster.
</p>
<p class="western" align="JUSTIFY">
  Após isso, execute o programa WinSCP, clicando no ícone do respectivo
  programa. Uma janela como a seguinte será apresentada:
</p>
<p class="western" align="JUSTIFY">
  <img
    class="aligncenter wp-image-96 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-4.jpg"
    alt=""
    width="400"
    height="298"
  />
</p>
<p class="western" style="padding-left: 30px;" align="JUSTIFY">
  1. No título <strong>Host name</strong>: digite<em> jupiter.dti.ufv.br</em>
</p>
<p class="western" style="padding-left: 30px;" align="JUSTIFY">
  2. No título <strong>Port Number:</strong> digite 22
</p>
<p class="western" style="padding-left: 30px;" align="JUSTIFY">
  3. No título <strong>User name:</strong> digite o nome de seu usuário do
  Cluster
</p>
<p class="western" style="padding-left: 30px;" align="JUSTIFY">
  4. No título <strong>Password:</strong> digite a senha do usuário do Cluster
</p>
<p class="western" style="padding-left: 30px;" align="JUSTIFY">
  5. Tecle <strong>Enter</strong> ou clique em <strong>Login</strong>.
</p>
<p class="western" align="JUSTIFY">
  Uma janela como a seguir será apresentada permitindo o arraste de arquivos
  entre o Cluster e o computador em uso e vice-versa:
</p>
<p class="western" align="JUSTIFY">
  <img
    class="aligncenter wp-image-95 size-full"
    src="http://www.dct.ufv.br/wp-content/uploads/uso-do-ambiente-imagem-5.jpg"
    alt=""
    width="400"
    height="328"
  />
</p>
<p class="western"><strong>1.3. Submissão de trabalhos ao Cluster</strong></p>
<p class="western">
  O ambiente Cluster deve ser utilizado, preferencialmente, no modo lote
  (<i>batch</i>) e, preferencialmente, para processamento paralelo por conexão
  remota (<i>ssh</i>).
</p>
<p class="western">
  Não é permitido acesso interativo aos nós de cálculo, estando os mesmos
  reservados para o processamento <i>batch</i> ou em lote.
</p>
<p class="western">
  O sistema gerenciador de filas, responsável pela execução de
  <i>jobs</i> (trabalhos), é o
  <a
    href="http://www.adaptivecomputing.com/products/open-source/torque/"
    target="_blank"
    >TORQUE Resource Manager</a
  >.
</p>
<p class="western">Alguns dos principais comandos do sistema de fila são:</p>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="132" />
    <col width="495" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="132">
        <p class="western"><b>qsub</b></p>
      </td>
      <td width="495">
        <p class="western">Para submissão de jobs</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="132">
        <p class="western"><b>qdel</b></p>
      </td>
      <td width="495">
        <p class="western">Para remoção de jobs das filas</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="132">
        <p class="western"><b>qstat</b></p>
      </td>
      <td width="495">
        <p class="western">Exibe o estado de filas e jobs</p>
      </td>
    </tr>
  </tbody>
</table>
<p class="western">
  A seguir são exibidas alguns parâmetros comumente utilizados neste comandos:
</p>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="223" />
    <col width="404" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qsub &lt;jobscript &gt;</b></p>
      </td>
      <td width="404">
        <p class="western">
          Submete o <i>job</i> <strong>&lt;jobscript&gt;</strong> para o PBS
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat</b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista informações sobre filas (<i>queues</i>) e <i>jobs</i>
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -q </b></p>
      </td>
      <td width="404">
        <p class="western">Lista todas as filas no sistema</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -Q</b></p>
      </td>
      <td width="404">
        <p class="western">Lista limites das filas para todas as filas</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -a </b></p>
      </td>
      <td width="404">
        <p class="western">Lista todos os <i>jobs</i> no sistema</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -au &lt;userid &gt;</b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista todos os jobs pertencente ao usuário
          <b>&lt;userid &gt; </b>(retorna <i>jobid</i>)
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -s </b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista todos os <i>jobs</i> com comentários de <i>status</i>
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -r </b></p>
      </td>
      <td width="404">
        <p class="western">Lista todos os <i>jobs</i> em processamento</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -f &lt;jobid &gt;</b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista todas as informações conhecidas sobre o <i>job</i>
          <b>&lt;jobid &gt; </b>especificado
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -Qf &lt;queue &gt;</b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista todas as informações conhecidas sobre a fila
          <b>&lt;queue &gt; </b>especificada
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -B</b></p>
      </td>
      <td width="404">
        <p class="western">
          Lista informações da lista de resumo sobre o servidor de PBS
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qdel &lt;jobid &gt;</b></p>
      </td>
      <td width="404">
        <p class="western" align="JUSTIFY">
          Deleta o <i>job</i> <b>&lt;jobid&gt;</b> especificado
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>pbsnodes -a</b></p>
      </td>
      <td width="404">
        <p class="western">
          Indica quais nodos estão atualmente ativos e algumas características
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>pbsnodes -l</b></p>
      </td>
      <td width="404">
        <p class="western">Indica quais nós estão atualmente <i>offline</i></p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="223">
        <p class="western"><b>qstat -n </b></p>
      </td>
      <td width="404">
        <p class="western">
          Mostra a lista de nós alocados para os <i>jobs</i>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p class="western">
  <strong>1.3.1. Submetendo um trabalho (job) ao Cluster</strong>
</p>
<p class="western">
  Submeter um trabalho ao Cluster é simples. Basicamente, são dois passos que
  devem ser seguidos:
</p>
<ol>
  <li>
    <p class="western">
      Criar um <i>script</i>, <b>&lt;j</b><b>obscript</b><b>&gt;</b>, utilizando
      qualquer <i>shell</i>, incluindo os comandos que criam um roteiro a ser
      executado
    </p>
  </li>
  <li>
    <p class="western">
      Submeter o <i>script</i> para ser executado no PBS, bastando executar o
      comando: <b>qsub &lt;j</b><b>obscript</b><b>&gt;</b>
    </p>
  </li>
</ol>
<p><strong>1.3.1.1. Alocação de recursos no Cluster</strong></p>
<p class="western" align="JUSTIFY">
  Abaixo um exemplo de script para submeter ao PBS do Cluster:
</p>
<p align="JUSTIFY">
  Este é um exemplo genérico. Nas linhas 5-9 são realizadas as configurações dos
  recursos PBS, através de diretivas #PBS.
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #666666; font-style: italic;">#!/bin/bash</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Diretivas PBS. Especificam recursos que serao utilizados pelo job </span>
&nbsp;
<span style="color: #666666; font-style: italic;">#PBS -N nome_do_job </span>
<span style="color: #666666; font-style: italic;">#PBS -l nodes=n:ppn=m,mem=qmem</span>
<span style="color: #666666; font-style: italic;">#PBS -m ae </span>
<span style="color: #666666; font-style: italic;">#mensagem sera enviada: a – abort; b – begin; e – end </span>
<span style="color: #666666; font-style: italic;">#PBS -M lista de e-mails separados por virgula que receberao comunicacao </span>
&nbsp;
<span style="color: #7a0874; font-weight: bold;">cd</span> <span style="color: #007800;">$PBS_O_WORKDIR</span> 
&nbsp;
<span style="color: #666666; font-style: italic;">#Habilita o carregamento de modulos</span>
<span style="color: #7a0874; font-weight: bold;">source</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh 
&nbsp;
<span style="color: #666666; font-style: italic;">#Carrega os modulos</span>
module load opt-python
&nbsp;
<span style="color: #666666; font-style: italic;">#Os comandos a serem executados. O seu roteiro propriamente dito.</span>
<span style="color: #666666; font-style: italic;">#Comandos a partir daqui</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Fim do Script</span></pre>
      </td>
    </tr>
  </table>
</div>

<p>
  Estas diretivas são responsáveis por definir configurações dos recursos
  computacionais necessários, e que devem ser reservados, para a execução do seu
  job. Isto não significa que você deve especificar todas as vezes o máximo dos
  recursos disponível no Cluster. O PBS tenta otimizar a utilização dos recursos
  e fazer o balanceamento de carga de trabalhos. Se os recursos disponíveis
  atualmente no Cluster não são suficientes para executar o seu job, o PBS irá
  deixar o seu job esperando na fila e irá retirá-lo da fila e colocará em
  execução assim que os recursos permitirem a execução do seu trabalho. Em
  geral, é melhor “dizer” o conjunto de recursos que você precisa. A
  <strong>Table 1</strong> lista alguns recursos que você pode configurar no seu
  script.
</p>
<p>
  Nas linhas 13-17, deste exemplo genérico, são utilizados os comandos para a
  utilização de módulos. Módulos permitem a modificação dinâmica do ambiente do
  usuário e possibilita o carregamento de softwares instalados como módulos. A
  linha 14 é necessária para habilitar o carregamento de módulos através de
  <em>scripts</em>. Na linha 19 é realizado o carregamento do módulo opt-python.
  Veja a seção Environment Modules para mais detalhes da utilização de módulos.
</p>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="89" />
    <col width="177" />
    <col width="351" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="89">
        <p align="CENTER"><b>Recurso</b></p>
      </td>
      <td width="177">
        <p align="CENTER"><b>Valor</b></p>
      </td>
      <td width="351">
        <p align="CENTER"><b>Descrição</b></p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>nodes</b></p>
      </td>
      <td width="177"></td>
      <td width="351">
        <p align="JUSTIFY">Declara a configuração de nodo para o job</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>walltime</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">hh:mm::ss</p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Quantidade máxima de tempo real (de relógio) durante o qual o job pode
          estar no estado de execução
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>cput</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">hh:mm::ss</p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Quantidade máxima de tempo de CPU usado por todos os processos no job
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>mem</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">
          Número inteiro positivo opcionalmente seguido por <b>b</b>, <b>kb</b>,
          <b>mb</b> ou <b>gb</b>
        </p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Especifica uma estimativa da quantidade máxima de memória RAM usada
          pelo job
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p align="LEFT"><strong>Table 1:</strong> Recursos PBS</p>
<p class="western">
  Existem duas formas de configurar os atributos das tarefas:
</p>
<ol>
  <li>
    <p class="western">
      através das diretivas PBS, como mostrado no exemplo anterior, ou,
    </p>
  </li>
  <li>
    <p class="western">utilizando argumentos no comando qsub</p>
  </li>
</ol>
<p class="western">A <strong>Table 2</strong> lista alguns destes atributos:</p>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="89" />
    <col width="177" />
    <col width="351" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="89">
        <p align="CENTER"><b>Atributo</b></p>
      </td>
      <td width="177">
        <p align="CENTER"><b>Valor</b></p>
      </td>
      <td width="351">
        <p align="CENTER"><b>Descrição</b></p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>-l</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">
          Lista separada por vírgula do recursos requiridos.
        </p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Define os recursos requeridos para a execução das tarefas. Define
          também o limite de recursos que podem ser consumidos.
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>-N</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">Nome para a tarefa</p>
      </td>
      <td width="351">
        <p align="JUSTIFY">Declara o nome da tarefa que aparecerá na fila.</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>-M</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">Lista de <i>e-mail</i></p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Lista de <i>e-mail</i> que receberão as mensagens.
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="89">
        <p align="JUSTIFY"><b>-m</b></p>
      </td>
      <td width="177">
        <p align="JUSTIFY">Opções de <i>mail</i></p>
      </td>
      <td width="351">
        <p align="JUSTIFY">
          Especifica opções para notificações por <i>e-mail</i>. Podem ser:
        </p>
        <ul>
          <li><b>b</b> begin</li>
          <li><b>e</b> end</li>
          <li><b>a</b> abort</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p align="LEFT"><strong>Table 2:</strong> Atributos de tarefas</p>
<p align="LEFT"><strong>1.3.1.2. Exemplo 1 &#8211; Script básico</strong></p>
<p class="western">
  Neste exemplo, é criado um script PBS que apenas imprime o texto “Hello
  World!” (linha 20). Observe que no script é criado um job com o identificador
  “hello_world” (linha 5).
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #666666; font-style: italic;">#!/bin/bash</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Diretivas PBS. Especificam recursos que serao utilizados pelo job</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#PBS -N hello_world</span>
<span style="color: #666666; font-style: italic;">#PBS -l nodes=1:ppn=2,mem=2gb</span>
<span style="color: #666666; font-style: italic;">#PBS -m ae </span>
<span style="color: #666666; font-style: italic;">#mensagem sera enviada: a – abort; b – begin; e – end </span>
<span style="color: #666666; font-style: italic;">#PBS -M seu_email@ufv.br</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Altera o diretorio corrente para o diretorio de onde foi submetido o script</span>
<span style="color: #7a0874; font-weight: bold;">cd</span> <span style="color: #007800;">$PBS_O_WORKDIR</span> 
&nbsp;
<span style="color: #666666; font-style: italic;">#Habilita o carregamento de modulos</span>
<span style="color: #7a0874; font-weight: bold;">source</span>  <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh 
&nbsp;
<span style="color: #666666; font-style: italic;">#Carrega o modulo opt-python </span>
module load opt-python 
&nbsp;
<span style="color: #7a0874; font-weight: bold;">echo</span> “Hello World<span style="color: #000000; font-weight: bold;">!</span>”
&nbsp;
<span style="color: #666666; font-style: italic;">#Fim do script</span></pre>
      </td>
    </tr>
  </table>
</div>

<p class="western" align="JUSTIFY">
  A linha 6 contém algumas importantes diretivas PBS que definem os recursos que
  devem ser alocados para a execução do trabalho no cluster. Observe que este
  job requer que:
</p>
<ul>
  <li class="western">
    seja alocado 1 nodo do cluster (nodes=1) e que sejam utilizadas duas
    unidades de processamento (ppn=2)
  </li>
  <li class="western">e, requer 2gb de memória RAM para a execução</li>
</ul>
<p align="LEFT">
  <strong>1.3.1.3. Exemplo 2 &#8211; Utilizando nós STANDARD</strong>
</p>
<p class="western">
  Com a reimplantação do cluster no início de 2016, outros nós de cálculo foram
  adicionados para prover maior capacidade de hardware do cluster como um todo.
  Porém, estes novos hardwares possuem configurações diferentes. Para a maioria
  dos casos isso não irá fazer diferença.
</p>
<p class="western">
  Porém, alguns tipos de experimentos não podem ser realizados em máquinas com
  hardwares diferentes. Para este casos, deve ser adicionado mais um argumento
  nas diretivas #PBS para “filtrar” as máquinas com o mesmo hardware. As
  máquinas com o mesmo hardware são especificadas com a característica
  “STANDARD”. Observe a linha 6 do exemplo abaixo:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #666666; font-style: italic;">#!/bin/bash</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Diretivas PBS. Especificam recursos que serao utilizados pelo job</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#PBS -N hello_world</span>
<span style="color: #666666; font-style: italic;">#PBS -l nodes=1:STANDARD:ppn=2,mem=2gb</span>
<span style="color: #666666; font-style: italic;">#PBS -m ae </span>
<span style="color: #666666; font-style: italic;">#mensagem sera enviada: a – abort; b – begin; e – end </span>
<span style="color: #666666; font-style: italic;">#PBS -M seu_email@ufv.br</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Altera o diretorio corrente para o diretorio de onde foi submetido o script</span>
<span style="color: #7a0874; font-weight: bold;">cd</span> <span style="color: #007800;">$PBS_O_WORKDIR</span> 
&nbsp;
<span style="color: #666666; font-style: italic;">#Habilita o carregamento de modulos</span>
<span style="color: #7a0874; font-weight: bold;">source</span>  <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh 
&nbsp;
<span style="color: #666666; font-style: italic;">#Carrega o modulo opt-python </span>
module load opt-python 
&nbsp;
<span style="color: #7a0874; font-weight: bold;">echo</span> “Hello World<span style="color: #000000; font-weight: bold;">!</span>”
&nbsp;
<span style="color: #666666; font-style: italic;">#Fim do script</span></pre>
      </td>
    </tr>
  </table>
</div>

<p align="LEFT">
  <strong>1.3.1.4. Exemplo 3 &#8211; Usando a fila &#8216;qtime&#8217;</strong>
</p>
<p class="western">
  Para utilizar a fila &#8216;qtime&#8217; serão necessárias 2 pequenas
  alterações nos scripts .pbs. Observe, no exemplo abaixo, que deve-se adicionar
  o walltime na diretiva &#8216;#PBS -l&#8217;. No exemplo, o job especifica que
  precisará de no máximo 4h30m20s para finalizar a execução. Além disso, deve-se
  explicitamente selecionar a fila &#8216;qtime&#8217; como destino. Isso é
  feito através da diretiva &#8216;#PBS -q qtime&#8217;.
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #666666; font-style: italic;">#!/bin/bash</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Diretivas PBS. Especificam recursos que serao utilizados pelo job</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#PBS -N hello_world</span>
<span style="color: #666666; font-style: italic;">#PBS -l nodes=1:ppn=2,mem=2gb,walltime=04:30:20</span>
<span style="color: #666666; font-style: italic;">#PBS -q qtime</span>
<span style="color: #666666; font-style: italic;">#PBS -m ae </span>
<span style="color: #666666; font-style: italic;">#mensagem sera enviada: a – abort; b – begin; e – end </span>
<span style="color: #666666; font-style: italic;">#PBS -M seu_email@ufv.br</span>
&nbsp;
<span style="color: #666666; font-style: italic;">#Altera o diretorio corrente para o diretorio de onde foi submetido o script</span>
<span style="color: #7a0874; font-weight: bold;">cd</span> <span style="color: #007800;">$PBS_O_WORKDIR</span> 
&nbsp;
<span style="color: #666666; font-style: italic;">#Habilita o carregamento de modulos</span>
<span style="color: #7a0874; font-weight: bold;">source</span>  <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh 
&nbsp;
<span style="color: #666666; font-style: italic;">#Carrega o modulo opt-python </span>
module load opt-python 
&nbsp;
<span style="color: #7a0874; font-weight: bold;">echo</span> “Hello World<span style="color: #000000; font-weight: bold;">!</span>”
&nbsp;
<span style="color: #666666; font-style: italic;">#Fim do script</span></pre>
      </td>
    </tr>
  </table>
</div>

<p class="western"><strong>Limite de submissões por usuários</strong></p>
<p class="western">
  No fila de trabalhos do Cluster, cada usuário pode conter no
  <b>máximo de 304 </b><i><b>jobs</b></i
  ><b> </b>. Este limite é necessário, e pode ser alterado de acordo com a
  análise da administração do Cluster, visando um melhor funcionamento do
  Cluster para todos os seus usuário. As política mais recentes quanto aos
  limites de recursos devem ser consultadas em
  <a title="Políticas" href="http://www.dct.ufv.br/?page_id=11"
    >http://www.dct.ufv.br/?page_id=11</a
  >
</p>
<p class="western">
  Caso tente se colocar mais tarefas que este limite na fila, será exibida a
  seguinte mensagem de erro:
  <em>&#8220;qsub: would exceed complex&#8217;s per-user limit&#8221;</em>
</p>
<p class="western">
  <strong
    >1.3.2. Monitoramento dos recursos alocados, utilizados e
    disponíveis</strong
  >
</p>
<p class="western">
  Os utilitários abaixo foram elaborados pela equipe da DCT para auxiliar no
  monitoramento dos jobs em execução, na especificação de recursos de hardware
  no script .pbs e na utilização correta dos recursos alocados. Caso
  identifiquem algum erro nestes scripts favor nos comunicar para corrigirmos o
  mais breve possível.
</p>
<p class="western"><strong>1.3.2.1. jinfo</strong></p>
<p class="western">
  Este utilitário exibe alguns dados de utilização
  <strong>momentânea</strong> de recursos de um determinado job. Mostra a
  quantidade de memória requerida no script .pbs e a quantidade que está sendo
  utilizada. Mostra também a quantidade de cpus(%) requerida script .pbs e a
  quantidade que está sendo utilizada. Este utilitário também mostra a adequação
  de recursos do job, alertando o usuário caso o job utilize menos ou mais
  recursos do que foi definido no seu script .pbs. Para utilizá-lobasta digitar
  no seu prompt o seguinte comando:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre class="bash" style="font-family:monospace;">jinfo job_id</pre>
      </td>
    </tr>
  </table>
</div>

<p>
  onde job_id deve ser substituído pelo
  <strong>identificador numérico</strong> do job a ser verificado.
</p>
<p>
  Uma das dificuldades que muitos usuário enfrentam é saber definir
  adequadamente a quantidade de processador e memória RAM que deve ser
  especificada no seu script .pbs. Este utilitário foi elaborado com o intuito
  de auxiliar nesta tarefa.
</p>
<p>
  É importante lembrar que tanto o &#8216;jinfo&#8217; quanto o
  &#8216;sinfo&#8217; (mostrado abaixo) obtém a quantidade de memória RAM e
  processador em um determinado instante. Estes valores podem variar ao longo do
  tempo dependendo do tipo de tarefa que é realizado no script .pbs. Por isso, é
  importante utilizá-los, quando necessário, em diversos momentos da execução do
  seu job.
</p>
<p><strong>1.3.2.2. sinfo</strong></p>
<p>
  Este utilitário computa algumas estatísticas <strong>momentâneas</strong> dos
  <strong>processos em execução</strong> do seu usuário. Para utilizá-lo basta
  digitar no seu prompt o seguinte comando:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre class="bash" style="font-family:monospace;">sinfo</pre>
      </td>
    </tr>
  </table>
</div>

<p>
  que as estatísticas dos seus processos em execução serão computadas
  automaticamente.
</p>
<p>
  Para cada trabalho em execução no PBS (com o status R no qstat) são mostradas
  estatísticas relativas à quantidade de memória requerida no PBS, a quantidade
  de memória efetivamente usada pelo processo e também a memória “desperdiçada”.
  Esta última se refere à quantidade de memória que fora alocada pelo processo e
  que não está sendo utilizada.
</p>
<p>
  Além destas estatísticas existem outras como o número de processadores
  requeridos no PBS e o número de processadores efetivamente utilizados.
</p>
<p>
  Este utilitário foi implementado visando auxiliá-los no dimensionamento da
  quantidade de memória e processador a serem especificados no PBS, a fim de
  tentar minimizar os “desperdícios” e“excessos” de recursos. Cada usuário pode
  e deve acompanhar os recursos consumidos pelos seus processos e adequar a
  utilização dos recursos conforme necessário.
</p>
<p>
  Vale destacar que pode levar alguns minutos para que os dados computados sejam
  mostrados, a depender da utilização do cluster no momento.
</p>
<p><strong>1.3.2.3. hinfo</strong></p>
<p>
  Este utilitário mostra os recursos de memória e processador disponível em cada
  nó ativo do cluster. Para utilizá-lo basta digitar o seguinte comando no seu
  prompt:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre class="bash" style="font-family:monospace;">hinfo</pre>
      </td>
    </tr>
  </table>
</div>

<p>
  Ele foi elaborado para auxiliar no dimensionamento da quantidade de recursos,
  especialmente memória RAM, a ser requerido no script PBS a fim de diminuir os
  trabalhos que ficam em fila.
</p>
<p>
  Por exemplo, alguns processos estão em fila porque requerem 8gb de memória RAM
  para ser executado. E, existem vários nós de cálculo com 7gb de memória RAM
  disponível (o que pode ser visto utilizando o comando hinfo). Neste caso, se o
  processo puder ser executado com 7gb de memória RAM, e se esta quantidade de
  memória fosse especificado no script PBS, ele não entraria na fila.
</p>
<p class="western"><strong>2. Environment Modules</strong></p>
<p class="western"><strong>2.1. Introdução</strong></p>
<p class="western">
  <strong>Environment Modules</strong> (http://modules.sourceforge.net/), ou
  simplesmente <strong>módulos</strong>, fornecem mecanismos para modificação
  dinâmica das variáveis de ambiente via arquivos <strong>modulefiles</strong>.
  Cada modulefile contém a informação necessária para configurar o shell para
  uma aplicação específica.
</p>
<p class="western">
  Módulos são úteis para gerenciar diferentes versões de softwares.
</p>
<p class="western">
  Todos os softwares que estão sendo instalados no ambiente do Cluster UFV estão
  sendo realizados a partir de módulos, de tal forma que fique mais fácil manter
  diferentes versões dos mesmos softwares, atendendo as demandas bastante
  heterogêneas dos usuários do Cluster, no que diz respeito a softwares e a suas
  versões.
</p>
<p class="western"><strong>2.2. Utilização Básica</strong></p>
<p class="western">Os principais comandos para utilização de módulos são:</p>
<table border="1" width="643" cellspacing="0" cellpadding="4">
  <colgroup>
    <col width="233" />
    <col width="392" />
  </colgroup>
  <tbody>
    <tr valign="TOP">
      <td width="233">
        <p align="CENTER"><b>Comando</b></p>
      </td>
      <td width="392">
        <p class="western" align="CENTER"><b>Descrição</b></p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module avail</p>
      </td>
      <td width="392">
        <p class="western">Lista todos os módulos <b>disponíveis</b></p>
        <p class="western">
          <b>Obs.:</b> Os novos <i>softwares</i> instalados via módulos são
          aqueles listados a partir de<b> </b
          ><b>&#8216;</b>/data/svn/modulefiles/trunk&#8217;
        </p>
        <p class="western">(Observe a saída do comando module avail)</p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module list</p>
      </td>
      <td width="392">
        <p class="western">
          Lista todos os módulos <b>carregados</b> no embiente do usuário
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module load <i>&lt;name&gt;/&lt;version&gt;</i></p>
      </td>
      <td width="392">
        <p class="western">
          Carrega o módulo <i>&lt;name&gt;/</i><i>&lt;version&gt;</i>
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module unload <i>&lt;name&gt;/&lt;version&gt;</i></p>
      </td>
      <td width="392">
        <p class="western">
          Descarrega o módulo <i>&lt;name&gt;/</i><i>&lt;version&gt;</i>
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module help <i>&lt;name&gt;/&lt;version&gt;</i></p>
      </td>
      <td width="392">
        <p class="western">
          Ajuda do módulo <i>&lt;name&gt;/</i><i>&lt;version&gt;</i>
        </p>
      </td>
    </tr>
    <tr valign="TOP">
      <td width="233">
        <p class="western">module whatis <i>&lt;name&gt;/&lt;version&gt;</i></p>
      </td>
      <td width="392">
        <p class="western">
          Mostra informações do módulo <i>&lt;name&gt;/</i
          ><i>&lt;version&gt;</i>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p class="western"><strong>2.3. Exemplos de utilização</strong></p>
<p class="western"><strong>2.3.1. Exemplo 1 – comando module avail</strong></p>
<ul>
  <li>
    <p class="western"><b>Comando</b>: <em>module avail</em></p>
  </li>
  <li>
    <p class="western">
      <b>Saída</b>: Após digitar o comando acima, será exibido todos os módulos
      disponíveis para serem carregados. Observe na saída do
      <strong>Quadro 1</strong>, que os novos <i>softwares</i> instalados são
      aqueles listados a partir de<b> </b
      ><em><b>&#8216;</b>/data/svn/modulefiles/trunk&#8217;</em> (em negrito).
    </p>
    <p class="western">
      <a
        href="http://www.dct.ufv.br/wp-content/uploads/quadro-1-e1456763180233.png"
        rel="lightbox-0"
        ><img
          class="wp-image-229 size-full aligncenter"
          src="http://www.dct.ufv.br/wp-content/uploads/quadro-1-e1456763180233.png"
          alt="quadro-1"
          width="648"
          height="263"
      /></a>
    </p>
  </li>
</ul>
<p class="western"><strong>2.3.2. Exemplo 2 – comando module list</strong></p>
<ul>
  <li>
    <p class="western"><b>Comando</b>:<em> module list</em></p>
  </li>
  <li>
    <p class="western">
      <b>Saída</b>: Após digitar o comando acima, será exibido todos os módulos
      carregados pelo seu usuário através do comando
      <em>&#8216;module load&#8217;</em>. Observe a saída deste comando no
      <strong>Quadro 2</strong>. Neste caso, os seguintes módulos foram
      carregados: rocks-openmpi,
      <em><span style="font-size: small;">java/jre1.8.0_66</span></em>
    </p>
  </li>
</ul>
<p>
  <a
    href="http://www.dct.ufv.br/wp-content/uploads/quadro-2-e1456763203412.png"
    rel="lightbox-1"
    ><img
      class="wp-image-230 size-full aligncenter"
      src="http://www.dct.ufv.br/wp-content/uploads/quadro-2-e1456763203412.png"
      alt="quadro-2"
      width="648"
      height="86"
  /></a>
</p>
<p class="western"><strong>2.3.3. Exemplo 3 – comando module load</strong></p>
<ul>
  <li>
    <p class="western">
      <strong>Comando:</strong> <em>module load gcc/4.8.3</em>
    </p>
  </li>
  <li>
    <p class="western">
      <strong>Saída:</strong> Após digitar o comando acima, o módulo
      <em>gcc/4.8.3</em> será carregado e a versão 4.8.3 do software gcc estará
      disponível
    </p>
  </li>
  <li>
    <p class="western">
      <strong>Observação 1:</strong> podem ser carregados diversos módulos em um
      mesmo comando:
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre
              class="bash"
              style="font-family:monospace;"
            >module load rocks-openmpi opt-python gcc<span style="color: #000000; font-weight: bold;">/</span>4.8.3 java<span style="color: #000000; font-weight: bold;">/</span>jre1.8.0_66</pre>
          </td>
        </tr>
      </table>
    </div>
  </li>
  <li>
    <p class="western">
      <strong>Observação 2:</strong> se <strong>não</strong> definida a versão
      do software a ser carregado no comando &#8216;module load&#8217;, a versão
      mais recente será utilizada:
    </p>

    <div class="wp_syntax">
      <table>
        <tr>
          <td class="line_numbers">
            <pre>
1
</pre
            >
          </td>
          <td class="code">
            <pre class="bash" style="font-family:monospace;">
module load java</pre
            >
          </td>
        </tr>
      </table>
    </div>

    <p class="western" align="JUSTIFY">
      Como não foi definido a versão, a versão mais recente, que neste caso é a
      versão java/jre1.8.0_66, será carregada.
    </p>
  </li>
</ul>
<p class="western"><strong>2.3.4. Exemplo 4 – comando module unload</strong></p>
<ul>
  <li>
    <p class="western">
      <strong>Comando:</strong> <em>module unload java/jre1.8.0_66</em>
    </p>
  </li>
  <li>
    <p class="western">
      <strong>Saída:</strong> Após digitar o comando acima, o
      <em>módulo java/jre1.8.0_66 </em>será descarregado e se nenhum outro
      módulo java estiver carregado via módulo, a versão padrão do sistema será
      utilizada.
    </p>
  </li>
</ul>
<p class="western"><strong>2.4. Carregar módulos no login</strong></p>
<p class="western" align="JUSTIFY">
  Para que um módulo seja carregado em cada login, use o comando
  <em>&#8216;module initadd &lt;name&gt;/&lt;version&gt;&#8217;</em>. Para
  remover esta característica utilize o comando
  <em>&#8216;module initrm&#8217;</em>.
</p>
<p class="western" align="JUSTIFY">
  <strong>Antes da primeira utilização</strong> do comando
  <em>&#8216;module initadd&#8217;</em> você deve alterar o arquivo
  <em>$HOME/.bashrc</em>, com o seu editor de texto favorito, e adicionar a
  seguinte linha no final deste arquivo:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #7a0874; font-weight: bold;">source</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh
module load null</pre>
      </td>
    </tr>
  </table>
</div>

<p class="western" align="JUSTIFY">
  Após realizar esta configuração, os módulos podem ser adicionados na
  inicialização através do comando
  <em>&#8216;module initadd &lt;name&gt;/&lt;version&gt;&#8217;</em>.
</p>
<p class="western" align="JUSTIFY">
  <strong
    >Exemplo – Adicionar o módulo gcc/4.8.3 para ser carregado na
    inicialização</strong
  >
</p>
<p class="western" align="JUSTIFY">Se as seguintes linhas:</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
2
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        ><span style="color: #7a0874; font-weight: bold;">source</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>profile.d<span style="color: #000000; font-weight: bold;">/</span>modules.sh
module load null</pre>
      </td>
    </tr>
  </table>
</div>

<p>
  já tiverem sido adicionadas ao final do arquivo <em>$HOME/.bashrc</em> apenas
  utilize o comando:
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>
1
</pre
        >
      </td>
      <td class="code">
        <pre
          class="bash"
          style="font-family:monospace;"
        >module initadd gcc<span style="color: #000000; font-weight: bold;">/</span>4.8.3</pre>
      </td>
    </tr>
  </table>
</div>

<p class="western" align="JUSTIFY"><strong>3. Contato</strong></p>
<p>
  Críticas e sugestões para o aprimoramento desse texto são muito bem vindas.<br />
  Envie um e-mail para hpeluzio@ufv.br
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
