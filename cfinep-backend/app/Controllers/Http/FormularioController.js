'use strict'

const Formulario = use('App/Models/Formulario')

class FormularioController {

    async index ({ request, response, view }) {
        return await Formulario.all()
    }

    async store ({ request, response }) {
        //return await Formulario.all()
        const { 
            user_id,
            nome,
            usuario_username,
            email,
            telefone,
            orientador,
            nivel_graduacao,
            data_para_encerramento_conta,
            quantidade_cpus,
            data_criacao_conta,
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
            'user_id',
            'nome',
            'usuario_username',
            'email',
            'telefone',
            'orientador',
            'nivel_graduacao',
            'data_para_encerramento_conta',
            'quantidade_cpus',
            'data_criacao_conta',
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
        //const all = request.all()
        //console.log(all.telefone)
        //eturn all.telefone
   
        try {
            //await Formulario.create({ all })
            await Formulario.create({ 
                user_id,
                nome,
                usuario_username,
                email,
                telefone,
                orientador,
                nivel_graduacao,
                data_para_encerramento_conta,
                quantidade_cpus,
                data_criacao_conta,
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

        } catch (error) {
            console.log(error)
            return response.status(500).send({ "error": error });
        }
        // //Se chegou até aqui então o ano foi adicionado com sucesso
        // return response.status(200).send({ "success": "Ano registrado com sucesso" });
    }

}

module.exports = FormularioController
