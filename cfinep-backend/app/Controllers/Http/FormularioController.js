'use strict'

const Formulario = use('App/Models/Formulario')

class FormularioController {

    async index ({ request, response, view, auth }) {
        // var formulario = await Formulario.findOrFail(params.id)
        var formulario
        try {
            formulario = await Formulario.findByOrFail('user_id', auth.user.id)

            return formulario
        } catch (error) {
            console.log(error)
            return response.status(200).send({ "error": error });
        }

        //console.log('formulario: ', formulario)
        //return formulario
        //return await Formulario.all()
    }

    async store ({ request, response, auth }) {

        // console.log('requestall', request.all())
        // console.log('------------------------------')
        // console.log('------------------------------')
        // console.log('------------------------------')
        // console.log('request all: ', request.all())
        // return auth.user.id
        const user_id = auth.user.id
        const { 
            //user_id,
            nome,
            usuario_username,
            email,
            telefone,
            orientador,
            nivel_graduacao,
            data_para_encerramento_conta,
            quantidade_cpus,
            //data_criacao_conta,
            quantidade_nos,
            quantidade_memoria,
            outros_recursos_computacionais,
            softwares_solicitados,
            ferramentas_utilizadas,
            linha_pesquisa,
            titulo_projeto,
            projeto_financiado,
            agencia_financiadora,
            projeto_registrado_ufv,
            tempo_duracao_projeto_pesquisa,
            resumo_objetivo_projeto_pesquisa,
            metodologias_utilizadas,
            outras_informacoes, 
        } = 
        request.only([ 
            //'user_id',
            'nome',
            'usuario_username',
            'email',
            'telefone',
            'orientador',
            'nivel_graduacao',
            'data_para_encerramento_conta',
            'quantidade_cpus',
            //'data_criacao_conta',
            'quantidade_nos',
            'quantidade_memoria',
            'outros_recursos_computacionais',
            'softwares_solicitados',
            'ferramentas_utilizadas',
            'linha_pesquisa',
            'titulo_projeto',
            'projeto_financiado',
            'agencia_financiadora',
            'projeto_registrado_ufv',
            'tempo_duracao_projeto_pesquisa',
            'resumo_objetivo_projeto_pesquisa',
            'metodologias_utilizadas',
            'outras_informacoes', 
        ]);

         try {
            //await Formulario.create({ all })
            const form = await Formulario.create({ 
                user_id,
                nome,
                usuario_username,
                email,
                telefone,
                orientador,
                nivel_graduacao,
                data_para_encerramento_conta,
                quantidade_cpus,
                //data_criacao_conta,
                quantidade_nos,
                quantidade_memoria,
                outros_recursos_computacionais,
                softwares_solicitados,
                ferramentas_utilizadas,
                linha_pesquisa,
                titulo_projeto,
                projeto_financiado,
                agencia_financiadora,
                projeto_registrado_ufv,
                tempo_duracao_projeto_pesquisa,
                resumo_objetivo_projeto_pesquisa,
                metodologias_utilizadas,
                outras_informacoes, 
             })

             return response.status(200).send({ "success": "Formulário registrado com sucesso", "id": form.id});

        } catch (error) {
            console.log(error)
            return response.status(500).send({ "error": error });
        }
        // //Se chegou até aqui então o ano foi adicionado com sucesso
        // return response.status(200).send({ "success": "Formulário registrado com sucesso", "id": form.id});
    }

    async update ({ params, request, response }) {

        // const user_id = auth.user.id
        const { 
            //user_id,
            nome,
            usuario_username,
            email,
            telefone,
            orientador,
            nivel_graduacao,
            data_para_encerramento_conta,
            quantidade_cpus,
            //data_criacao_conta,
            quantidade_nos,
            quantidade_memoria,
            outros_recursos_computacionais,
            softwares_solicitados,
            ferramentas_utilizadas,
            linha_pesquisa,
            titulo_projeto,
            projeto_financiado,
            agencia_financiadora,
            projeto_registrado_ufv,
            tempo_duracao_projeto_pesquisa,
            resumo_objetivo_projeto_pesquisa,
            metodologias_utilizadas,
            outras_informacoes, 
        } = 
        request.only([ 
            //'user_id',
            'nome',
            'usuario_username',
            'email',
            'telefone',
            'orientador',
            'nivel_graduacao',
            'data_para_encerramento_conta',
            'quantidade_cpus',
            //'data_criacao_conta',
            'quantidade_nos',
            'quantidade_memoria',
            'outros_recursos_computacionais',
            'softwares_solicitados',
            'ferramentas_utilizadas',
            'linha_pesquisa',
            'titulo_projeto',
            'projeto_financiado',
            'agencia_financiadora',
            'projeto_registrado_ufv',
            'tempo_duracao_projeto_pesquisa',
            'resumo_objetivo_projeto_pesquisa',
            'metodologias_utilizadas',
            'outras_informacoes', 
        ]);

        try {
          //Update de trabalhos
          var formulario = await Formulario.findOrFail(params.id)

        //   formulario.user_id = user_id,
          formulario.nome = nome,
          formulario.usuario_username = usuario_username,
          formulario.email = email,
          formulario.telefone = telefone,
          formulario.orientador = orientador,
          formulario.nivel_graduacao = nivel_graduacao,
          formulario.data_para_encerramento_conta = data_para_encerramento_conta,
          formulario.quantidade_cpus = quantidade_cpus,
          //data_criacao_conta,
          formulario.quantidade_nos = quantidade_nos,
          formulario.quantidade_memoria = quantidade_memoria,
          formulario.outros_recursos_computacionais = outros_recursos_computacionais,
          formulario.softwares_solicitados = softwares_solicitados,
          formulario.ferramentas_utilizadas = ferramentas_utilizadas,
          formulario.linha_pesquisa = linha_pesquisa,
          formulario.titulo_projeto = titulo_projeto,
          formulario.projeto_financiado = projeto_financiado,
          formulario.agencia_financiadora = agencia_financiadora,
          formulario.projeto_registrado_ufv = projeto_registrado_ufv,
          formulario.tempo_duracao_projeto_pesquisa = tempo_duracao_projeto_pesquisa,
          formulario.resumo_objetivo_projeto_pesquisa = resumo_objetivo_projeto_pesquisa,
          formulario.metodologias_utilizadas = metodologias_utilizadas,
          formulario.outras_informacoes = outras_informacoes, 

          await formulario.save()

          return response.status(200).send({ "success": "Formulário atualizado com sucesso" });

        } catch (error) {
          console.log(error)
          return response.status(500).send({ "error": error });
        }
        //Se chegou até aqui então o Trabalho foi adicionado com sucesso

      }

}

module.exports = FormularioController
