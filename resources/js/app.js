import '../css/app.css'
import 'unpoly'
import 'unpoly/unpoly.css'

up.fragment.config.mainTargets.push('[layout-main]')
up.fragment.config.mainTargets.push('[layout-auth-form]')

up.on('up:fragment:loaded', (event) => {
  let fullReload = event.response.getHeader('X-Full-Reload')

  if (fullReload) {
    // Prevent the fragment update and don't update browser history
    event.preventDefault()

    // Make a full page load for the same request.
    event.request.loadPage()
  }
})
