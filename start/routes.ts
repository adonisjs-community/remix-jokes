/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('home')

Route.get('login', 'SessionController.create')
Route.post('login', 'SessionController.store')
Route.post('logout', 'SessionController.destroy')

Route.get('register', 'SignupController.create')
Route.post('register', 'SignupController.store')

Route.resource('jokes', 'JokesController')
  .except(['edit', 'update'])
  .middleware({ store: ['auth'], destroy: ['auth'], show: ['auth'] })
