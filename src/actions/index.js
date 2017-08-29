import { CALL_API, Schemas } from '../middleware/api'

export const ACCOUNT_REQUEST = 'ACCOUNT_REQUEST'
export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS'
export const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchAccount = payload => {
  let path = payload; // TODO: parse payload for data and create path

  return {
    [CALL_API]: {
      types: [ ACCOUNT_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_FAILURE ],
      endpoint: `https://csp-stg.codebig2.net/selfhelp/accounts?${path}`,
      schema: Schemas.ACCOUNT
    }
  }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadAccount = (payload, requiredFields = []) => (dispatch, getState) => {
  return dispatch(fetchAccount(payload))
}
