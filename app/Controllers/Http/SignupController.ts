import User from 'App/Models/User'
import SignupValidator from 'App/Validators/SignupValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignupController {
  public async create({ view }: HttpContextContract) {
    return view.render('pages/signup')
  }

  public async store({ request, auth, response, up }: HttpContextContract) {
    const { username, password } = await request.validate(SignupValidator)
    const user = await User.create({ username, password })

    await auth.login(user)
    up.fullReload()
    response.redirect().toRoute('JokesController.index')
  }
}
