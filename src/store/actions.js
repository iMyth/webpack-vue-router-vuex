import * as types from './mutation-types'

export const setAppName = ({ commit }, type) => {
  commit(types.SET_APP_NAME, type)
}
