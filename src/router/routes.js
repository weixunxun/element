import Index from "../views/index"
import Home from "../views/home"
import Serach from "../views/serach"
import Profile from "../views/profile"
import Order from "../views/order"
import Addr from "../views/addr"

export default [
  
  {
      path:'/',
      redirect:"/addr",
      component:Addr,
  },
  {
      path:"/addr",
      component:Addr
  },
  {
    path:'/city/1',
    component:()=>import("../components/addr/city.vue")
  },

   
    {
        path: '/index',
        component: Index,

        children:[
          {
            path: '/home',
            component: Home
          },
          {
            path: '/serach',
            component: Serach
          },
          {
            path: '/profile',
            component: Profile
          },
          {
            path: '/order',
            component: Order
        }]
      },
     
    {
      path:'/login',
      component:()=>import("../components/log&reg/login.vue")
    }
]