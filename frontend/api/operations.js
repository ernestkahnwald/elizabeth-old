export const endpoint = 'operations/'

export default (http) => ({
  list() {
    return http.list(endpoint)
  },

  create(data) {
    return http.create(endpoint, data)
  },

  get(id) {
    return http.get(`${endpoint}${id}/`)
  },

  update(id, data) {
    return http.update(`${endpoint}${id}/`, data)
  },

  delete(id) {
    return http.delete(`${endpoint}${id}/`)
  },
})
