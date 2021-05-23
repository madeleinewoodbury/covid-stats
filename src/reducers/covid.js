const initialState = {
  countries: [],
  country: {},
  loading: true,
  error: {},
}

const covidReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: payload,
        loading: false,
      }
    case 'GET_COUNTRY':
      return {
        ...state,
        country: payload,
        loading: false,
      }
    case 'ERROR':
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default covidReducer
