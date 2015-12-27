import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import App from './app'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()
router.map(routes)
router.start(App, '#app')
