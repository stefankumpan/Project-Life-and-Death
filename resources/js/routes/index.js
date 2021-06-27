import Vue from 'vue'
import Router from 'vue-router'
import story from './story/index'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass:'',
  linkExactActiveClass: 'is-active',
  routes:[
  ...story,
    ],
})
