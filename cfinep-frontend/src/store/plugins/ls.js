import ls from 'local-storage'

const pluginLocalStorage = store => {
    console.log('STORE INIT')
    
    //store.dispatch('produtos/API_CALL_ACT')
    store.commit('EVENT_LISTENER');
    store.commit('INITIALISE_STORE');


    store.subscribe((mutation, state) => {
      console.log('mutation.type: ', mutation.type)
      ls.set('state', state)

      //Sempre que logar atualizar o formulário
      if(mutation.type ==  'auth/SET_LOGAR')
        store.dispatch('formulario/API_CALL_FORMULARIO')

      //Sempre que deslogar resetar o formulário
      if(mutation.type ==  'auth/SET_DESLOGAR')
        store.dispatch('formulario/RESET_FORMULARIO_ACT')



    //   ls.set('auth', state.auth)
    })
  }

  export default pluginLocalStorage