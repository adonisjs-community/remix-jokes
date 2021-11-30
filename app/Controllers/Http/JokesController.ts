import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Joke from 'App/Models/Joke'
import CreateJokeValidator from 'App/Validators/CreateJokeValidator'

export default class JokesController {
  public async index({ view, auth }: HttpContextContract) {
    let randomJoke: Joke | null = null
    if (auth.isLoggedIn) {
      randomJoke = await auth.user!.related('jokes').query().orderByRaw('RANDOM()').limit(1).first()
    }

    return view.render('pages/jokes/index', { randomJoke })
  }

  public async show({ view, params, auth }: HttpContextContract) {
    const joke = await auth.user!.related('jokes').query().where('id', params.id).firstOrFail()
    return view.render('pages/jokes/show', { joke })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('pages/jokes/create')
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const { name, content } = await request.validate(CreateJokeValidator)

    const joke = await auth.user!.related('jokes').create({ name, content })
    response.redirect().toRoute('JokesController.show', [joke.id])
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const joke = await auth.user!.related('jokes').query().where('id', params.id).first()
    if (joke) {
      await joke.delete()
    }

    response.redirect().toRoute('JokesController.index')
  }
}
