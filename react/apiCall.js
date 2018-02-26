import { axios } from 'utils/apiService'
import * as api from 'shared/constants/api'
import * as t from './actionTypes'

export const fetchDriversApi = ({ 
  limit = 50, offset = 0, filters = [], sorted: [ sort = null ] = []
} = {}) => async dispatch => {
  try {
    dispatch({ type: t.GET_DRIVER_LIST_REQUEST })

    const params = { limit, offset }
    filters.forEach(filter => (params[`filter[${filter.id}[~]]`] = filter.value))

    const { data: { driver: { drivers, count } } } = await axios.get(api.driver, { params })

    dispatch({ 
      type: t.GET_DRIVER_LIST_SUCCESS, 
      drivers,
      count
    })
  } catch (e) {
    dispatch({ type: t.GET_DRIVER_LIST_FAIL })
  }
} 