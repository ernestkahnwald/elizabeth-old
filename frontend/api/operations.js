export const endpoint = 'operations/'

export default (http, nuxtError) => ({
  list() {
    return http.$get(endpoint)
  },

  create(data) {
    return http.$post(endpoint, data)
  },

  get(id) {
    return http.$get(`${endpoint}${id}/`)
  },

  update(id, data) {
    return http.$patch(`${endpoint}${id}/`, data)
  },

  delete(id) {
    return http.$delete(`${endpoint}${id}/`)
  },
})
