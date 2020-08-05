import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/categories/creat',
        component:CategoryEdit
      },
      {
        path:'/categories/edit/:id',
        component:CategoryEdit,
        props:true
      },
      {
        path:'/categories/list',
        component:CategoryList
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
