import axios from 'axios'
import countriesData from '../countriesData'

const api = 'https://api.covid19api.com'

const getDates = () => {
  const today = new Date()
  const fromToday = new Date(today.setDate(today.getDate() - 15))
  const fromDate = fromToday.toISOString().split('T')[0]
  const toDate = new Date().toISOString().split('T')[0]
  return [fromDate, toDate]
}

const getCases = (data) => {
  const cases = data[data.length - 1].Cases - data[0].Cases
  return cases
}

const getPer100K = (population, cases) => {
  const quotient = population / 100000
  const per100k = cases / quotient
  return Number(per100k.toFixed(2))
}

export const getCountry = (country) => async (dispacth) => {
  dispacth({
    type: 'REQUEST',
  })
  try {
    const dates = getDates()
    const res = await axios.get(
      `${api}/total/country/${country.Slug}/status/confirmed?from=${dates[0]}&to=${dates[1]}`
    )

    if (res.data.length === 0) {
      dispacth({
        type: 'NO_DATA',
        payload: `No covid data found for ${country.Slug.replaceAll('-', ' ')}`,
      })
    } else {
      const countryData = countriesData.filter(
        (c) => c.alpha2Code === country.ISO2
      )[0]

      const cases = getCases(res.data)
      const per100k = getPer100K(countryData.population, cases)
      const data = {
        name: countryData.name,
        code: countryData.alpha2Code,
        capital: countryData.capital,
        population: countryData.population,
        last14Days: cases,
        per100k: per100k,
        level: per100k >= 150 ? 'red' : per100k >= 50 ? 'yellow' : 'green',
      }

      dispacth({
        type: 'GET_COUNTRY',
        payload: data,
      })
    }
  } catch (error) {
    dispacth({
      type: 'ERROR',
      payload: error.message,
    })
  }
}
