import operationsApi from '~/api/operations'
import NotImplementedError from '~/utils/errors/not_implemented'

class Request {
  constructor(sender) {
    this.sender = sender
  }

  list(endpoint) {
    throw new NotImplementedError()
  }

  create(endpoint, data) {
    throw new NotImplementedError()
  }

  get(endpoint, id) {
    throw new NotImplementedError()
  }

  update(endpoint, id, data) {
    throw new NotImplementedError()
  }

  delete(endpoint, id) {
    throw new NotImplementedError()
  }
}

class AxiosRequest extends Request {
  list(endpoint) {
    return this.sender.$get(endpoint)
  }

  create(endpoint, data) {
    return this.sender.$post(endpoint, data)
  }

  get(endpoint, id) {
    return this.sender.$get(`${endpoint}${id}/`)
  }

  update(endpoint, id, data) {
    return this.sender.$patch(`${endpoint}${id}/`, data)
  }

  delete(endpoint, id) {
    return this.sender.$delete(`${endpoint}${id}/`)
  }
}

export default ({ $axios }) => {
  const axiosRequest = new AxiosRequest($axios)

  return {
    operations: operationsApi(axiosRequest),
  }
}
