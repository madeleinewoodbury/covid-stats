const initialState = {
  country: {},
  loading: false,
  message: '',
  error: null,
}

const covidReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_COUNTRY':
      return {
        ...state,
        country: payload,
        loading: false,
        message: '',
        error: null,
      }
    case 'NO_DATA':
      return {
        ...state,
        message: payload,
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
