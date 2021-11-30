import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionController {
  public async create({ view }: HttpContextContract) {
    return view.render('pages/login')
  }

  public async store({ request, auth, response }: HttpContextContract) {
    await auth.attempt(request.input('username'), request.input('password'))
    response.redirect().toRoute('JokesController.index')
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()
    response.redirect().toPath('/')
  }
}
