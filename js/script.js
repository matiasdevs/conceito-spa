const routes = {
  '/': 'Projeto-07/pages/home.html',
  '/about': 'Projeto-07/pages/about.html',
  '/contato': 'Projeto-07/pages/contato.html',
  404: 'Projeto-07/pages/404.html'
}

function route (event){
  event = event || window.event
  event.preventDefault();

  window.history.pushState({}, '', event.target.href)

  handle();
  
}

function handle(){
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404]
  console.log('antes do fetch')

  fetch(route)
  .then(data => data.text())
  .then(html => console.log(html))

  console.log('depois do fetch')
}