const accessToken = JSON.parse(localStorage.getItem('accessToken'))

export default {
  '/': {
  	component: accessToken ? require('./views/home') : require('./views/logIn')
  }
}
