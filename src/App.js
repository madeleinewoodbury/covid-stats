import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from './actions/covid'
import Form from './components/Form'
import Country from './components/Country'

const App = () => {
  const dispatch = useDispatch()
  const covidData = useSelector((state) => state.covid)
  const { country, loading, message } = covidData

  const handleGetCountry = (slug) => {
    dispatch(getCountry(slug))
  }

  return (
    <div className='container'>
      <h1 className='title display-5 text-center my-3'>
        Covid Statistics by Country
      </h1>
      <Form handleGetCountry={(e) => handleGetCountry(e)} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {message !== '' ? (
            <div>
              <p className='lead mt-2'>{message}</p>
            </div>
          ) : (
            <div>{country !== null && <Country country={country} />}</div>
          )}
        </>
      )}
    </div>
  )
}

export default App
