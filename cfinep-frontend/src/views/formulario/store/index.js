import http from '@/http/api'
import http_jsreport from '@/http/jsreport'

export default {
    namespaced: true,
    
    state: {
        form: {
            id: null,
            user_id: '',
            nome: '',
            usuario_username: '',
            email: '',
            telefone: '',
            orientador: '',
            nivel_graduacao: '',
            data_para_encerramento_conta: '',
            quantidade_cpus: '',
            quantidade_nos: '',
            quantidade_memoria: '',
            outros_recursos_computacionais: '',
            softwares_solicitados: '',
            ferramentas_utilizadas: '',
            linha_pesquisa: '',
            titulo_projeto: '',
            projeto_financiado: '',
            agencia_financiadora: '',
            projeto_registrado_ufv: '',
            tempo_duracao_projeto_pesquisa: '',
            resumo_objetivo_projeto_pesquisa: '',
            metodologias_utilizadas: '',
            outras_informacoes: '',
        },
        formularios: []
    },

    getters: {
        form: state => state.form,
        formularios: state => state.formularios,
        // logado: state => state.logado,
        // token: state => state.token,
        // name: state => state.name,
        // email: state => state.email,
        // permission: state => state.permission,
        // id: state => state.id,
        // created_at: state => state.created_at,
        // updated_at: state => state.updated_at
    }, 

    mutations: {
        SET_FORMULARIO_ID: (state, payload) => {
            state.form.id = payload
        },
        
        RESET_FORMULARIO: (state) => {
            state.form.id = null
            state.form.user_id =  null
            state.form.nome =  ''
            state.form.usuario_username =  ''
            state.form.email =  ''
            state.form.telefone =  ''
            state.form.orientador =  ''
            state.form.nivel_graduacao =  ''
            state.form.data_para_encerramento_conta =  ''
            state.form.quantidade_cpus =  ''
            state.form.quantidade_nos =  ''
            state.form.quantidade_memoria =  ''
            state.form.outros_recursos_computacionais =  ''
            state.form.softwares_solicitados =  ''
            state.form.ferramentas_utilizadas =  ''
            state.form.linha_pesquisa =  ''
            state.form.titulo_projeto =  ''
            state.form.projeto_financiado =  ''
            state.form.agencia_financiadora =  ''
            state.form.projeto_registrado_ufv =  ''
            state.form.tempo_duracao_projeto_pesquisa =  ''
            state.form.resumo_objetivo_projeto_pesquisa =  ''
            state.form.metodologias_utilizadas =  ''
            state.form.outras_informacoes =  ''
        },
    },

    actions: {

        API_CALL_FORMULARIO: (context, payload) => {
            return new Promise((resolve, reject) => {
                http({
                    method: 'get',
                    url: '/formulario/',
                })   
                .then(response => {
                    //console.log('response: ', response.data)
                    context.state.form = Object.assign({}, response.data)
                    //console.log('context.state.form: ',context.state.form)
                    // context.state.form.id = response.data.id
                    //context.commit('SET_FORMULARIO_ID', response.data.id)
                    //alert('Formulário inserido com sucesso.')               
                    resolve(response)
                })
                .catch(error => {
                console.log(error)
                reject(error)
                });
            })
        },

        SET_FORMULARIO_ACT: (context, payload) => {

            return new Promise((resolve, reject) => {
                http({
                    method: 'post',
                    url: '/formulario/',
                    data: {
                        // form: context.state.form,
                        nome: context.state.form.nome,
                        usuario_username: context.state.form.usuario_username,
                        email: context.state.form.email,
                        telefone: context.state.form.telefone,
                        orientador: context.state.form.orientador,
                        nivel_graduacao: context.state.form.nivel_graduacao,
                        data_para_encerramento_conta: context.state.form.data_para_encerramento_conta,
                        quantidade_cpus: context.state.form.quantidade_cpus,
                        quantidade_nos: context.state.form.quantidade_nos,
                        quantidade_memoria: context.state.form.quantidade_memoria,
                        outros_recursos_computacionais: context.state.form.outros_recursos_computacionais,
                        softwares_solicitados: context.state.form.softwares_solicitados,
                        ferramentas_utilizadas: context.state.form.ferramentas_utilizadas,
                        linha_pesquisa: context.state.form.linha_pesquisa,
                        titulo_projeto: context.state.form.titulo_projeto,
                        projeto_financiado: context.state.form.projeto_financiado,
                        agencia_financiadora: context.state.form.agencia_financiadora,
                        projeto_registrado_ufv: context.state.form.projeto_registrado_ufv,
                        tempo_duracao_projeto_pesquisa: context.state.form.tempo_duracao_projeto_pesquisa,
                        resumo_objetivo_projeto_pesquisa: context.state.form.resumo_objetivo_projeto_pesquisa,
                        metodologias_utilizadas: context.state.form.metodologias_utilizadas,
                        outras_informacoes: context.state.form.outras_informacoes,                        
                    }         
                })   
                .then(response => {
                    console.log('response: ', response.data)
                    // context.state.form.id = response.data.id
                    context.commit('SET_FORMULARIO_ID', response.data.id)
                    alert('Formulário inserido com sucesso.')               
                    resolve(response)
                })
                .catch(error => {
                  console.log(error)
                  reject(error)
                });
            })            
            // context.commit('FORMULARIO', payload)                 
        },


        UPDATE_FORMULARIO_ACT: (context, payload) => {
            console.log('UPDATE_FORMULARIO_ACT')
            return new Promise((resolve, reject) => {
                http({
                    method: 'put',
                    url: '/formulario/' + context.state.form.id + '',
                    data: {
                        // form: context.state.form,
                        nome: context.state.form.nome,
                        usuario_username: context.state.form.usuario_username,
                        email: context.state.form.email,
                        telefone: context.state.form.telefone,
                        orientador: context.state.form.orientador,
                        nivel_graduacao: context.state.form.nivel_graduacao,
                        data_para_encerramento_conta: context.state.form.data_para_encerramento_conta,
                        quantidade_cpus: context.state.form.quantidade_cpus,
                        quantidade_nos: context.state.form.quantidade_nos,
                        quantidade_memoria: context.state.form.quantidade_memoria,
                        outros_recursos_computacionais: context.state.form.outros_recursos_computacionais,
                        softwares_solicitados: context.state.form.softwares_solicitados,
                        ferramentas_utilizadas: context.state.form.ferramentas_utilizadas,
                        linha_pesquisa: context.state.form.linha_pesquisa,
                        titulo_projeto: context.state.form.titulo_projeto,
                        projeto_financiado: context.state.form.projeto_financiado,
                        agencia_financiadora: context.state.form.agencia_financiadora,
                        projeto_registrado_ufv: context.state.form.projeto_registrado_ufv,
                        tempo_duracao_projeto_pesquisa: context.state.form.tempo_duracao_projeto_pesquisa,
                        resumo_objetivo_projeto_pesquisa: context.state.form.resumo_objetivo_projeto_pesquisa,
                        metodologias_utilizadas: context.state.form.metodologias_utilizadas,
                        outras_informacoes: context.state.form.outras_informacoes,                        
                    }         
                })   
                .then(response => {
                    console.log('response: ', response.data)
                    // context.state.form.id = response.data.id
                    //context.commit('SET_FORMULARIO_ID', response.data.id)
                    alert('Formulário atualizado com sucesso.')               
                    resolve(response)
                })
                .catch(error => {
                  console.log(error)
                  reject(error)
                });
            })            
            // context.commit('FORMULARIO', payload)                 
        },

        RESET_FORMULARIO_ACT: (context) => {
            //console.log('RESET_FORMULARIO_ACT')
            context.commit('RESET_FORMULARIO')
        },

        GET_FORMULARIO_PDF_ACT(context, payload) {

            var array = []
            array.push(payload)

            const data = {"template":{"shortid":"mbdKMzD"},"data":{"formulario": array}}

            http_jsreport.post(process.env.VUE_APP_API_JSREPORT_URL, data, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                },
                auth: {
                  username: process.env.VUE_APP_API_JSREPORT_USER,
                  password: process.env.VUE_APP_API_JSREPORT_PASSWORD
                },          
            })   
            .then(function (response) {
              //return response.download('', 'test.pdf', '');
              let blob = new Blob([response.data], { type: 'application/pdf' })
              let link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = 'CFINEP - Formulario.pdf'
              document.body.appendChild(link);
              link.click()
              document.body.removeChild(link);    
              //console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            }); 
        },

        GET_FORMULARIO_ALL_ACT: (context, payload) => {
            return new Promise((resolve, reject) => {
                http({
                    method: 'get',
                    url: '/formulario_all/',
                })   
                .then(response => {
                    context.state.formularios = response.data
                    // console.log('response: ', response.data)
                    // context.state.form = Object.assign({}, response.data)
                    // console.log('context.state.form: ',context.state.form)
                    // context.state.form.id = response.data.id
                    //context.commit('SET_FORMULARIO_ID', response.data.id)
                    //alert('Formulário inserido com sucesso.')               
                    resolve(response)
                })
                .catch(error => {
                console.log(error)
                reject(error)
                });
            })
        },        
       
    }

}
