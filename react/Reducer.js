import * as t from './actionTypes'

export const drivers = (state = [], { type, ...action }) => {
  switch(type) {
  case t.GET_DRIVER_LIST_SUCCESS:
    return action.drivers
  case t.GET_DRIVER_LIST_FAIL:
    return []
  default:
    return state
  }
}

const defaultDriversPage = { pages: -1, pageSize: 50, loading: false }
export const driversPage = (state = defaultDriversPage, { type, ...action}) => {
  switch(type) {
  case t.HANDLE_DRIVERS_PAGE:
    return { ...state, page: action.page }
  case t.GET_DRIVER_LIST_REQUEST:
    return { ...state, loading: true }
  case t.GET_DRIVER_LIST_SUCCESS:
    return { ...state, loading: false, pages: Math.ceil(action.count / state.pageSize) }
  case t.GET_DRIVER_LIST_FAIL:
    return { ...state, loading: false }
  default:
    return state
  }
}