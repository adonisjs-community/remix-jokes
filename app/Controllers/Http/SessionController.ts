import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionController {
  public async create({ view }: HttpContextContract) {
    return view.render('pages/login')
  }

  public async store({ request, auth, response, up }: HttpContextContract) {
    await auth.attempt(request.input('username'), request.input('password'))
    up.fullReload()
    response.redirect().toRoute('JokesController.index')
  }

  public async destroy({ auth, response, up }: HttpContextContract) {
    await auth.logout()
    up.fullReload()
    response.redirect().toPath('/')
  }
}
