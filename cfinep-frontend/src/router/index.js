import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// CFINEP
//admin
const AdminUsuarios = () => import('@/views/admin/Usuarios')

//Users
const Home = () => import('@/views/Home')

//Cluster
const Infos = () => import('@/views/Infos')
const Politica = () => import('@/views/Politica')
const UsoDoAmbiente = () => import('@/views/UsoDoAmbiente')
const Formulario = () => import('@/views/formulario/Formulario')
const FormularioGrid = () => import('@/views/formulario/FormularioGrid')
const FormularioEdit = () => import('@/views/formulario/FormularioEdit')

//Fichas
// const FichasOrais = () => import('@/views/fichas/FichasOrais')

//Auth
const Login = () => import('@/views/auth/Login')
const Page404 = () => import('@/views/Page404')
const Register = () => import('@/views/auth/Register')
const MeusDados = () => import('@/views/auth/MeusDados')


Vue.use(Router)

//export default new Router({
const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    
    //Notfound
    // {
    //   path: '*',
    //   redirect: '/Page404'
    // },

    {
      path: '/',
      redirect: 'Home',
      name: 'Not Found',
      component: DefaultContainer,
      children: [
        {
          path: 'page404',
          name: 'Page404',
          component: Page404,
        },
      ]
    }, 
    
    //Autenticacao
    {
      path: '/',
      redirect: 'Infos',
      name: 'Autenticação',
      component: DefaultContainer,
      children: [
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
      ]
    },

    {
      path: '/',
      redirect: 'Infos',
      name: 'Cluster',
      component: DefaultContainer,
      children: [
        {
          path: 'infos',
          name: 'Infos',
          component: Infos,
          meta: { requiresAuth: false, adminAuth: false, userAuth: false },
        },
        {
          path: 'politicadeuso',
          name: 'PoliticaDeUso',
          component: Politica,
          meta: { requiresAuth: false, adminAuth: false, userAuth: false },
        },        
        {
          path: 'usodoambiente',
          name: 'UsoDoAmbiente',
          component: UsoDoAmbiente,
          meta: { requiresAuth: false, adminAuth: false, userAuth: false },
        },     
      ]
    },    

    //User permission
    {
      path: '/',
      redirect: '/home',
      name: 'Usuário',
      component: DefaultContainer,
      meta: { requiresAuth: true, adminAuth: false, userAuth: true },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        {
          path: 'meusdados',
          name: 'Meus Dados',
          component: MeusDados,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        {
          path: 'formulario',
          name: 'Formulario',
          component: Formulario,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        }, 
        {
          path: 'formulario_grid',
          name: 'Formulario Grid',
          component: FormularioGrid,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },           
      ]
    },
    
    //Admin permission
    {
      path: '/',
      redirect: '/home',
      name: 'Admin',
      component: DefaultContainer,
      meta: { requiresAuth: true, adminAuth: true, userAuth: false },
      children: [
        {
          path: '/admin/usuarios',
          name: 'Usuários',
          component: AdminUsuarios,
          meta: { requiresAuth: true, adminAuth: true, userAuth: false },
        },
        {
          path: '/admin/edit_form/:id',
          name: 'Edit Form',
          component: FormularioEdit,
          meta: { requiresAuth: true, adminAuth: true, userAuth: false },
        },        
      ]
    },
  ]
})

// Middleware de autenticação para as rotas
router.beforeEach((to, from, next) => {
  
  if((to.name === 'Login' || to.name === 'Register') && store.getters['auth/logado'] === true){
    if(store.getters['auth/permission']=== 'admin')
      next({ path: '/admin' })
    else
      next({ path: '/home' })
  }

  if(to.meta.requiresAuth ){
    //const authUser = JSON.parse(localStorage.getItem('user'))

    if(store.getters['auth/logado'] === false /*|| Vue.prototype.$store.loggedIn === false*/){
      next({ path: '/login' })
    }
    
    else if (to.meta.adminAuth) {
      //const authUser = JSON.parse(localStorage.getItem('user'))
      if(store.getters['auth/permission']=== 'admin' /*&& Vue.prototype.$store.permission === 'admin'*/){
        next()
      }  
      else{
        next({ path: '/home' })
      } 
    }
    else if (to.meta.userAuth) {
      //const authUser = JSON.parse(localStorage.getItem('user'))
      if(store.getters['auth/permission'] === 'user' /*&& Vue.prototype.$store.permission === 'user'*/){
        next()
      } else {
        next({ path: '/login' })
      }        
    }
    else 
     next()
  } 
  else
    next()

})

export default router

