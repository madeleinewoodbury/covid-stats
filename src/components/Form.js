import React, { useState } from 'react'
import countries from '../countries'

const Form = ({ handleGetCountry }) => {
  const [formData, setFormData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const country = countries.filter((c) => c.Slug === formData)[0]
    handleGetCountry(country)
  }

  return countries ? (
    <form onSubmit={handleSubmit}>
      <div className='form-group my-2'>
        <select
          name='country'
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          className='form-select form-select p-3'
        >
          <option value='0'>* Select a Country</option>
          {countries.map((country) => (
            <option key={country.Slug} value={country.Slug}>
              {country.Country}
            </option>
          ))}
        </select>
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary btn-lg my-2'>
          Get Data
        </button>
      </div>
    </form>
  ) : null
}

export default Form
