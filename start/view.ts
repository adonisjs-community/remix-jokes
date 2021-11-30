/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import User from 'App/Models/User'
import View from '@ioc:Adonis/Core/View'

View.global('loadJokes', function (user: User) {
  if (user instanceof User === false) {
    throw new Error('loadJokes expects first argument to be an instance of the user model')
  }
  return user.related('jokes').query()
})
