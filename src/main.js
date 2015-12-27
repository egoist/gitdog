import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './app'

Vue.use(VueRouter)

const router = new VueRouter()
router.map(routes)
router.start(App, '#app')
