import axios from 'axios'

const api = 'https://api.covid19api.com'

export const getCountries = () => async (dispacth) => {
  try {
    const res = await axios.get(`${api}/countries`)
    dispacth({
      type: 'GET_COUNTRIES',
      payload: res.data,
    })
  } catch (error) {
    dispacth({
      type: 'ERROR',
      payload: error,
    })
  }
}

const getCases = (data) => {
  const cases = []
  const values = Object.values(data)
  for (let val in values) {
    console.log(data[val])
    const newCase = {
      date: data[val].Date.split('T')[0],
      cases: data[val].Cases,
    }
    cases.push(newCase)
  }
  return cases
}

export const getCountry = (country, fromDate, toDate) => async (dispacth) => {
  try {
    const res = await axios.get(
      `${api}/total/country/${country}/status/confirmed?from=${fromDate}&to=${toDate}`
    )

    const cases = getCases(res.data)
    const data = {
      name: res.data[0].Country,
      cases: cases,
    }

    dispacth({
      type: 'GET_COUNTRY',
      payload: data,
    })
  } catch (error) {
    dispacth({
      type: 'ERROR',
      payload: error,
    })
  }
}
