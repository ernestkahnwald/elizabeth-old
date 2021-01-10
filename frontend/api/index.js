import operationsApi from '~/api/operations'

export default ({ $axios, error }) => ({
  operations: operationsApi($axios, error),
})
