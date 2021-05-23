import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getCountry } from './actions/covid'

const App = () => {
  const dispatch = useDispatch()
  const covidData = useSelector((state) => state.covid)
  const { country, loading } = covidData

  const getFromDate = (days) => {
    const today = new Date()
    const fromToday = new Date(today.setDate(today.getDate() - days))
    return fromToday.toISOString().split('T')[0]
  }

  useEffect(() => {
    const fromDate = getFromDate(1)
    const toDate = new Date().toISOString().split('T')[0]
    dispatch(getCountry('united-states', fromDate, toDate))
  }, [dispatch])

  return (
    <div className='container'>
      <h1>Hello</h1>
    </div>
  )
}

export default App
