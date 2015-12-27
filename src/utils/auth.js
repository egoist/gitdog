import github from 'octonode'

github.auth.config({
  username: 'pksunkara',
  password: 'password'
}).login(['user', 'repo', 'gist', 'notifications'], (err, id, token) => {
  console.log(id, token);
})
