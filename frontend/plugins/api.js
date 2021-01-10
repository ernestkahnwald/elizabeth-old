import api from '~/api'

export default (context, inject) => {
  inject('api', api(context))
}
