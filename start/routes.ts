import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { teste: 'teste' }
  })
}).prefix('/api')
