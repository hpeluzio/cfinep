import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')
const DefaultContainerAdmin = () => import('@/containers/DefaultContainerAdmin')
const DefaultContainerNotLogged = () => import('@/containers/DefaultContainerNotLogged')

// CFINEP
//admin
const Admin = () => import('@/views/admin/Home')
const AdminUsuarios = () => import('@/views/admin/Usuarios')

//Users
const Home = () => import('@/views/user/Home')

//Cluster
const Infos = () => import('@/views/Infos')
const Politica = () => import('@/views/Politica')
const UsoDoAmbiente = () => import('@/views/UsoDoAmbiente')
const Formulario = () => import('@/views/Formulario')

//Fichas
const FichasOrais = () => import('@/views/fichas/FichasOrais')

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
    {
      path: '*',
      redirect: '/Page404'
    },
    {
      path: '/',
      redirect: '/login',
      name: 'Autenticação',
      component: DefaultContainerNotLogged,
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
        {
          path: 'page404',
          name: 'Page404',
          component: Page404,
        },        
      ]
    },

    //Admin permission
    {
      path: '/',
      redirect: '/admin',
      name: '',
      component: DefaultContainerAdmin,
      meta: { requiresAuth: true, adminAuth: true, userAuth: false },
      children: [
        {
          path: 'admin',
          name: 'Admin / Home',
          component: Admin,
          meta: { requiresAuth: true, adminAuth: true, userAuth: false },
        },
        {
          path: '/admin/usuarios',
          name: 'Admin / Usuários',
          component: AdminUsuarios,
          meta: { requiresAuth: true, adminAuth: true, userAuth: false },
        },
      ]
    },
    {
      path: '/admin',
      redirect: '/admin',
      name: 'Admin',
      component: DefaultContainerAdmin,
      meta: { requiresAuth: true, adminAuth: true, userAuth: false },
      children: [
        {
          path: '/meusdados',
          name: 'Administrador / Meus Dados',
          component: MeusDados,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },  
        //Fichas
        {
          path: '/admin/fichas_orais',
          name: 'Administrador / Fichas de Trabalhos Orais',
          component: FichasOrais,
          meta: { requiresAuth: true, adminAuth: true, userAuth: false },
        },
 
      ]
    },

    //User permission
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: DefaultContainer,
      meta: { requiresAuth: true, adminAuth: false, userAuth: true },
      children: [
        {
          path: 'home',
          //name: 'Home',
          component: Home,
          meta: { requiresAuth: true, adminAuth: false, userAuth: true },
        },
      ]
    },
    
    {
      path: '/',
      redirect: '/relatorios_orais',
      name: 'Relatorios',
      component: DefaultContainer,
      meta: { requiresAuth: true, adminAuth: false, userAuth: true },
      children: [
        {
          path: 'meusdados',
          name: 'Meus Dados',
          component: MeusDados,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        {
          path: 'infos',
          name: 'Infos',
          component: Infos,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        {
          path: 'politicadeuso',
          name: 'PoliticaDeUso',
          component: Politica,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },        
        {
          path: 'usodoambiente',
          name: 'UsoDoAmbiente',
          component: UsoDoAmbiente,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        {
          path: 'formulario',
          name: 'Formulario',
          component: Formulario,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },
        //Fichas
        {
          path: 'fichas_orais',
          name: 'Fichas de Trabalhos Orais',
          component: FichasOrais,
          meta: { requiresAuth: true, adminAuth: false, userAuth: false },
        },                           
      ]
    },
  ]
})

// Middleware de autenticação para as rotas
router.beforeEach((to, from, next) => {
  //Next é para onde está indo e from é de onde veio
  // //Se precisar de autenticacao e nao tiver sessao ja manda logo pra pagina de login
  // console.log(to)
  // console.log(from)
  if((to.name === 'Login' || to.name === 'Register') && store.getters['auth/logado'] === true){
    if(store.getters['auth/permission']=== 'admin')
      next({ path: '/admin' })
    else
      next({ path: '/home' })
  }

  // if(to.name === 'Home' && store.getters['auth/permission'] === admin){
  //     next({ path: '/admin' })
  // }  

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

  //Antigo
  // if(to.matched.some(record => record.meta.requiresAuth) && sessionStorage.getItem('user') == null) {
  //   //console.log("to.matched.some")
  //   next({ name: 'Login' })
  // }
})

export default router

