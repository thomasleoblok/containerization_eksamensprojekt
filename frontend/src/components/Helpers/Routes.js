const {createRouter, createWebHistory } = require("vue-router");
import Login from "../Login/Login.vue"
import Events from "../Events/Events.vue"
import CreateEvent from "../Events/CreateEvent.vue"
import Register from "../Login/Register.vue"
import Home from "../Home/Home.vue";
import Admin from "../AdminPage/AdminPage.vue"
import { authenticationService } from "../ServicesHelp/authentication.service.js"
import {Role} from "../Helpers/role.js"

const Notfound = () => import("../ErrorPages/404.vue")


const routes = 
 [
    {
      path: "/",
      alias: ['/'],
      name:"Home",
      component: Home,
      //meta: { authorize: [] }  
    },
    {
      path: '/admin', 
      component: Admin, 
      meta: { authorize: [Role.Admin] } 
    },
    {
      path: "/login",
      name:"Login",
      component: Login,
    },
    {
      path: "/register",
      name:"Register",
      component: Register,
    },
    {
      path: "/events",
      name:"Events",
      component: Events,
    },
    {
      path: "/events/create",
      name:"CreateEvent",
      component: CreateEvent,
    },
    {
      path: "/404",
      name: "404",
      component: Notfound,
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to) => {
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      //return ('/login');
    }
   
    if (authorize) {
      if (!currentUser) {
         console.log("hello")
      }
  
      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role)) {
          // role not authorised so redirect to home page
          return ({ path: '/' });
      }
  }
    
  });

 export default router;